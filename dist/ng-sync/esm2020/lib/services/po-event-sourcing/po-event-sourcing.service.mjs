import { Injectable } from '@angular/core';
import { StatusCodes } from 'http-status-codes';
import { Observable, of, Subject } from 'rxjs';
import { expand, map, reduce } from 'rxjs/operators';
import { toBase64, toFile } from '../../utils/utils';
import { PoEventSourcingErrorResponse } from '../../models/po-event-sourcing-error-response.model';
import { PoEventSourcingOperation } from './enums/po-event-sourcing-operation.enum';
import { PoHttpRequestType } from '../po-http-client/po-http-request-type.enum';
import { PoRequestType } from '../../models/po-request-type.enum';
import { PoSchemaUtil } from './../po-schema/po-schema-util/po-schema-util.model';
import * as i0 from "@angular/core";
import * as i1 from "./../po-schema/po-schema-definition/po-schema-definition.service";
import * as i2 from "./../po-schema/po-schema.service";
import * as i3 from "@po-ui/ng-storage";
import * as i4 from "./../po-http-client/po-http-client.service";
export class PoEventSourcingService {
    constructor(poSchemaDefinition, poSchemaService, poStorage, poHttpClient) {
        this.poSchemaDefinition = poSchemaDefinition;
        this.poSchemaService = poSchemaService;
        this.poStorage = poStorage;
        this.poHttpClient = poHttpClient;
        this.stoppedQueueEventSourcing = false;
        this.responseSubject = new Subject();
        this.schemasSyncConfig = {};
    }
    static getUrl(eventSourcingItem, schema, requestType) {
        const schemaUrl = PoSchemaUtil.getUrl(schema, requestType);
        const schemaId = eventSourcingItem.record[schema.idField];
        if (requestType === PoRequestType.GET) {
            return schemaUrl;
        }
        if ([PoRequestType.DELETE, PoRequestType.PATCH].includes(requestType)) {
            return schemaUrl ? `${schemaUrl}/${schemaId}` : `${PoSchemaUtil.getUrl(schema, PoRequestType.GET)}/${schemaId}`;
        }
        if (requestType === PoRequestType.POST) {
            return schemaUrl ? schemaUrl : PoSchemaUtil.getUrl(schema, PoRequestType.GET);
        }
    }
    create(schemaName, newItem, customRequestId) {
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Insert, newItem, schemaName, customRequestId);
        return this.insertEventSourcingQueue(eventSourcingItem);
    }
    async createBatchEvents(schemaName, eventList) {
        const eventSourcingList = this.createEventSourcingList(schemaName, eventList);
        await this.poStorage.appendArrayToArray(PoEventSourcingService.event_sourcing_name, eventSourcingList);
        this.notifyEventCreation();
    }
    /**
     * Destrói a chave do *storage* que contém a fila de dados que estão esperando para serem enviados ao
     * servidor *(EventSourcing)*.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando a chave referente a fila de *EventSourcing* for destruída.
     */
    destroyEventSourcingQueue() {
        return this.poStorage.remove(PoEventSourcingService.event_sourcing_name);
    }
    async httpCommand(httpOperationData, customRequestId) {
        httpOperationData = await this.serializeBody(httpOperationData);
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Http, httpOperationData, undefined, customRequestId);
        await this.insertEventSourcingQueue(eventSourcingItem);
        return eventSourcingItem.id;
    }
    responsesSubject() {
        return this.responseSubject.asObservable();
    }
    onSaveData() {
        if (!this.eventSub) {
            this.eventSub = Observable.create(subscriber => (this.emitter = subscriber));
        }
        return this.eventSub;
    }
    remove(schemaName, itemToDelete, customRequestId) {
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Delete, itemToDelete, schemaName, customRequestId);
        return this.insertEventSourcingQueue(eventSourcingItem);
    }
    removeEventSourcingItem(idEventSourcingItem) {
        return this.poStorage.removeItemFromArray(PoEventSourcingService.event_sourcing_name, 'id', idEventSourcingItem);
    }
    syncGet() {
        const syncGetFunction = async () => this.poSchemaDefinition.getAll().then(schemas => {
            const schemaPromises = this.updateStorageSchemas(schemas);
            return Promise.all(schemaPromises);
        });
        return this.poSchemaService.limitedCallWrap(syncGetFunction);
    }
    async syncSend() {
        const syncSendFunction = async () => {
            const itemOfQueue = await this.poStorage.getFirstItem(PoEventSourcingService.event_sourcing_name);
            if (itemOfQueue) {
                await this.selectOperation(itemOfQueue);
            }
            if (this.stoppedQueueEventSourcing || !itemOfQueue) {
                this.stoppedQueueEventSourcing = false;
                return Promise.resolve();
            }
            return syncSendFunction();
        };
        return this.poSchemaService.limitedCallWrap(syncSendFunction);
    }
    update(schemaName, itemUpdated, customRequestId) {
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Update, itemUpdated, schemaName, customRequestId);
        return this.insertEventSourcingQueue(eventSourcingItem);
    }
    /* Avalia se o body é do tipo File e se for converte para base64 */
    async serializeBody(requestData) {
        let { body, mimeType, bodyType, fileName } = requestData;
        if (body instanceof File) {
            bodyType = 'File';
            mimeType = body.type;
            fileName = body.name;
            body = await toBase64(body);
        }
        return { ...requestData, body, mimeType, bodyType, fileName };
    }
    buildUrlParams(schema, baseUrl, pageNumber) {
        const params = [];
        params.push(`${this.config.dataTransform.getPageSizeParamName()}=${schema.pageSize}`);
        params.push(`${this.config.dataTransform.getPageParamName()}=${pageNumber}`);
        return `${baseUrl}?${params.join('&')}`;
    }
    checkRecordIdExists(recordId, operation) {
        if (!recordId) {
            const error = {
                message: 'Identifier not defined',
                operation: operation
            };
            throw new PoEventSourcingErrorResponse(error);
        }
    }
    concatPageItems(pageAcumulator, requestBody) {
        if (requestBody[this.config.dataTransform.getItemsFieldName()]) {
            pageAcumulator.data = [...pageAcumulator.data, ...requestBody[this.config.dataTransform.getItemsFieldName()]];
        }
        return pageAcumulator;
    }
    createEventSourcingItem(operation, newItem, schemaName, customRequestId, id) {
        if (!schemaName && operation !== PoEventSourcingOperation.Http) {
            throw new Error('PoSyncSchema is not defined.');
        }
        return {
            id: id ? id : new Date().getTime(),
            dateTime: new Date().getTime(),
            schema: schemaName,
            operation: operation,
            record: newItem,
            customRequestId: customRequestId
        };
    }
    createEventSourcingList(schemaName, eventList) {
        return eventList.map((eventItem, index) => {
            const id = new Date().getTime() + index;
            return this.createEventSourcingItem(eventItem.operation, eventItem.record, schemaName, eventItem.customRequestId, id);
        });
    }
    createSchemaSyncConfig(schemaName) {
        this.schemasSyncConfig[schemaName] = {
            page: undefined,
            currentUrlDiff: undefined,
            responseDate: undefined
        };
    }
    async deleteOperation(eventSourcingItem) {
        try {
            const schema = await this.poSchemaDefinition.get(eventSourcingItem.schema);
            const recordId = eventSourcingItem.record[schema.idField];
            this.checkRecordIdExists(recordId, PoEventSourcingOperation.Delete);
            const url = PoEventSourcingService.getUrl(eventSourcingItem, schema, PoRequestType.DELETE);
            const response = await this.sendServerItem(url, PoHttpRequestType.DELETE);
            await this.removeEventSourcingValidItem(response.status, eventSourcingItem);
            return await this.sendResponseSubject(eventSourcingItem, response);
        }
        catch (errorResponse) {
            return this.sendResponseSubject(eventSourcingItem, errorResponse, true);
        }
    }
    diffServerItems(currentUrlDiff) {
        return this.poHttpClient.get(currentUrlDiff);
    }
    getBodyAndDate(schemaName, response) {
        const getDateFieldName = this.config.dataTransform.getDateFieldName();
        const responseSyncDate = response.body[getDateFieldName];
        this.schemasSyncConfig[schemaName]['responseDate'] = responseSyncDate;
        return response.body;
    }
    async getServerDiffRecords(schema, baseUrl) {
        const initialAcumulatorPage = { entity: schema.name, data: [] };
        const diffUrl = this.schemasSyncConfig[schema.name]['currentUrlDiff'];
        const serverResponse = await this.diffServerItems(diffUrl)
            .pipe(map(response => this.getBodyAndDate(schema.name, response)), expand(data => this.paginateSchemaData(data, schema, baseUrl)), reduce((pageAcumulator, requestBody) => this.concatPageItems(pageAcumulator, requestBody), initialAcumulatorPage))
            .toPromise();
        return serverResponse.data;
    }
    async httpOperation(eventSourcingItem) {
        try {
            const requestData = await this.createPoHttpRequestData(eventSourcingItem.record.url, eventSourcingItem.record.method, eventSourcingItem.record, eventSourcingItem.record.headers);
            const response = await this.poHttpClient.createRequest(requestData).toPromise();
            const poHttpCommandResponse = {
                id: eventSourcingItem.id,
                customRequestId: eventSourcingItem.customRequestId,
                request: eventSourcingItem.record,
                response: response
            };
            this.responseSubject.next(poHttpCommandResponse);
            return this.removeEventSourcingValidItem(response.status, eventSourcingItem);
        }
        catch (errorHttpClient) {
            return this.sendResponseSubject(eventSourcingItem, errorHttpClient, true);
        }
    }
    async insertEventSourcingQueue(eventSourcingItem) {
        const eventSourcingUpdatedQueue = await this.poStorage.appendItemToArray(PoEventSourcingService.event_sourcing_name, eventSourcingItem);
        this.notifyEventCreation();
        return Promise.resolve(eventSourcingUpdatedQueue);
    }
    async insertOperation(currentEventSourcingItem) {
        const schema = await this.poSchemaDefinition.get(currentEventSourcingItem.schema);
        const url = PoEventSourcingService.getUrl(currentEventSourcingItem, schema, PoRequestType.POST);
        try {
            const response = await this.sendServerItem(url, PoHttpRequestType.POST, currentEventSourcingItem.record);
            const recordUpdatedByServer = response.body;
            await this.removeEventSourcingValidItem(response.status, currentEventSourcingItem);
            const id = currentEventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName];
            await this.poSchemaService.update(schema, recordUpdatedByServer, id);
            const eventSourcingItems = await this.poStorage.get(PoEventSourcingService.event_sourcing_name);
            await this.updatePendingEventSourcing(currentEventSourcingItem, schema.idField, recordUpdatedByServer, eventSourcingItems);
            return this.sendResponseSubject(currentEventSourcingItem, response);
        }
        catch (errorHttpClient) {
            return this.sendResponseSubject(currentEventSourcingItem, errorHttpClient, true);
        }
    }
    isValidStatus(status) {
        return PoEventSourcingService.VALID_HTTP_STATUS_CODES.includes(status);
    }
    notifyEventCreation() {
        if (this.emitter) {
            this.emitter.next();
        }
    }
    paginateSchemaData(data, schema, baseUrl) {
        this.config.dataTransform.transform(data);
        if (this.config.dataTransform.hasNext()) {
            this.schemasSyncConfig[schema.name]['currentUrlDiff'] = this.buildUrlParams(schema, baseUrl, ++this.schemasSyncConfig[schema.name]['page']);
            return this.diffServerItems(this.schemasSyncConfig[schema.name]['currentUrlDiff']).pipe(map(response => this.getBodyAndDate(schema.name, response)));
        }
        return of();
    }
    removeEventSourcingValidItem(status, eventSourcingItem) {
        if (this.isValidStatus(status) || eventSourcingItem.operation === PoEventSourcingOperation.Http) {
            return this.removeEventSourcingItem(eventSourcingItem.id);
        }
    }
    selectOperation(eventSourcingItem) {
        switch (eventSourcingItem.operation) {
            case PoEventSourcingOperation.Insert:
                return this.insertOperation(eventSourcingItem);
            case PoEventSourcingOperation.Update:
                return this.updateOperation(eventSourcingItem);
            case PoEventSourcingOperation.Delete:
                return this.deleteOperation(eventSourcingItem);
            case PoEventSourcingOperation.Http:
                return this.httpOperation(eventSourcingItem);
        }
    }
    sendResponseSubject(eventSourcingItem, response, isSubjectError = false) {
        const poSyncResponse = {
            id: eventSourcingItem.id,
            customRequestId: eventSourcingItem.customRequestId,
            request: eventSourcingItem.record,
            response: response
        };
        this.stoppedQueueEventSourcing = isSubjectError;
        this.responseSubject.next(poSyncResponse);
        return Promise.resolve();
    }
    async sendServerItem(url, method, body) {
        const requestData = await this.createPoHttpRequestData(url, method, body);
        return this.poHttpClient.createRequest(requestData).toPromise();
    }
    async createPoHttpRequestData(url, method, record, headers) {
        let body = record.body ?? record;
        if (record.bodyType === 'File') {
            body = await this.createFormData(body, record.fileName, record.mimeType, record.formField);
        }
        return { url, method, body, headers };
    }
    async createFormData(body, fileName, mimeType, formField = 'file') {
        const file = await toFile(body, fileName, mimeType);
        const formData = new FormData();
        formData.append(formField, file, fileName);
        return formData;
    }
    async updateOperation(eventSourcingItem) {
        const schema = await this.poSchemaDefinition.get(eventSourcingItem.schema);
        const url = PoEventSourcingService.getUrl(eventSourcingItem, schema, PoRequestType.PATCH);
        try {
            const recordId = eventSourcingItem.record[schema.idField];
            this.checkRecordIdExists(recordId, PoEventSourcingOperation.Update);
            const response = await this.sendServerItem(url, PoHttpRequestType.PUT, eventSourcingItem.record);
            await this.removeEventSourcingValidItem(response.status, eventSourcingItem);
            return await this.sendResponseSubject(eventSourcingItem, response);
        }
        catch (errorHttpClient) {
            return this.sendResponseSubject(eventSourcingItem, errorHttpClient, true);
        }
    }
    updatePendingEventSourcing(currentEventSourcingItem, idFieldSchema, inserted, eventSourcingItems) {
        if (currentEventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName]) {
            eventSourcingItems.forEach((eventSourcingItem, position) => {
                const isCurrentEventSourcingItem = !eventSourcingItem.record[idFieldSchema] &&
                    eventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName] ===
                        currentEventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName];
                if (isCurrentEventSourcingItem) {
                    eventSourcingItems[position].record[idFieldSchema] = inserted[idFieldSchema];
                }
            });
            return this.poStorage.set(PoEventSourcingService.event_sourcing_name, eventSourcingItems);
        }
        else {
            return Promise.resolve();
        }
    }
    async updateRecords(serverRecords, schema) {
        for (const serverRecord of serverRecords) {
            await this.updateRecordByServerRecord(serverRecord, schema);
        }
    }
    async updateRecordByServerRecord(serverRecord, schema) {
        const recordId = serverRecord[schema.idField];
        const storageRecord = await this.poSchemaService.get(schema.name, recordId);
        const existsStorageRecord = !!Object.keys(storageRecord).length;
        if (existsStorageRecord && serverRecord[schema.deletedField]) {
            return await this.poSchemaService.remove(schema.name, serverRecord[schema.idField]);
        }
        if (existsStorageRecord && !serverRecord[schema.deletedField]) {
            return await this.poSchemaService.update(schema, serverRecord);
        }
        if (!existsStorageRecord && !serverRecord[schema.deletedField]) {
            return await this.poSchemaService.create(schema, serverRecord);
        }
    }
    async updateStorageBySchema(schema) {
        this.createSchemaSyncConfig(schema.name);
        this.schemasSyncConfig[schema.name]['page'] = 1;
        const baseUrl = `${PoSchemaUtil.getUrl(schema, PoRequestType.DIFF)}/${schema.lastSync}`;
        this.schemasSyncConfig[schema.name]['currentUrlDiff'] = this.buildUrlParams(schema, baseUrl, this.schemasSyncConfig[schema.name]['page']);
        const serverRecords = await this.getServerDiffRecords(schema, baseUrl);
        await this.updateRecords(serverRecords, schema);
        schema.lastSync = this.schemasSyncConfig[schema.name]['responseDate'];
        await this.poSchemaDefinition.update(schema);
    }
    updateStorageSchemas(schemas) {
        return schemas.map((schema) => this.updateStorageBySchema(schema));
    }
}
PoEventSourcingService.event_sourcing_name = 'EventSourcing';
PoEventSourcingService.VALID_HTTP_STATUS_CODES = [
    StatusCodes.OK,
    StatusCodes.CREATED,
    StatusCodes.ACCEPTED,
    StatusCodes.NON_AUTHORITATIVE_INFORMATION,
    StatusCodes.NO_CONTENT,
    StatusCodes.RESET_CONTENT,
    StatusCodes.PARTIAL_CONTENT,
    StatusCodes.MULTI_STATUS // 207
];
PoEventSourcingService.ɵfac = function PoEventSourcingService_Factory(t) { return new (t || PoEventSourcingService)(i0.ɵɵinject(i1.PoSchemaDefinitionService), i0.ɵɵinject(i2.PoSchemaService), i0.ɵɵinject(i3.PoStorageService), i0.ɵɵinject(i4.PoHttpClientService)); };
PoEventSourcingService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoEventSourcingService, factory: PoEventSourcingService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoEventSourcingService, [{
        type: Injectable
    }], function () { return [{ type: i1.PoSchemaDefinitionService }, { type: i2.PoSchemaService }, { type: i3.PoStorageService }, { type: i4.PoHttpClientService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZXZlbnQtc291cmNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N5bmMvc3JjL2xpYi9zZXJ2aWNlcy9wby1ldmVudC1zb3VyY2luZy9wby1ldmVudC1zb3VyY2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRW5HLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBS3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7OztBQU1sRixNQUFNLE9BQU8sc0JBQXNCO0lBdUJqQyxZQUNVLGtCQUE2QyxFQUM3QyxlQUFnQyxFQUNoQyxTQUEyQixFQUMzQixZQUFpQztRQUhqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFaM0MsOEJBQXlCLEdBQVksS0FB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TSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOztBQTloQmUsMENBQW1CLEdBQVcsZUFBZ0IsQ0FBQTtBQUV0Qyw4Q0FBdUIsR0FBRztJQUNoRCxXQUFXLENBQUMsRUFBRTtJQUNkLFdBQVcsQ0FBQyxPQUFPO0lBQ25CLFdBQVcsQ0FBQyxRQUFRO0lBQ3BCLFdBQVcsQ0FBQyw2QkFBNkI7SUFDekMsV0FBVyxDQUFDLFVBQVU7SUFDdEIsV0FBVyxDQUFDLGFBQWE7SUFDekIsV0FBVyxDQUFDLGVBQWU7SUFDM0IsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNO0NBQy9CLENBQUE7NEZBWlMsc0JBQXNCOzRFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBleHBhbmQsIG1hcCwgcmVkdWNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9TdG9yYWdlU2VydmljZSB9IGZyb20gJ0Bwby11aS9uZy1zdG9yYWdlJztcclxuXHJcbmltcG9ydCB7IHRvQmFzZTY0LCB0b0ZpbGUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBQb0V2ZW50U291cmNpbmdFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvLWV2ZW50LXNvdXJjaW5nLWVycm9yLXJlc3BvbnNlLm1vZGVsJztcclxuaW1wb3J0IHsgUG9FdmVudFNvdXJjaW5nSXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1ldmVudC1zb3VyY2luZy1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbiB9IGZyb20gJy4vZW51bXMvcG8tZXZlbnQtc291cmNpbmctb3BlcmF0aW9uLmVudW0nO1xyXG5pbXBvcnQgeyBQb0V2ZW50U291cmNpbmdTdW1tYXJ5SXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1ldmVudC1zb3VyY2luZy1zdW1tYXJ5LWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9IdHRwSGVhZGVyT3B0aW9uIH0gZnJvbSAnLi8uLi9wby1odHRwLWNsaWVudC9pbnRlcmZhY2VzL3BvLWh0dHAtaGVhZGVyLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0h0dHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wby1odHRwLWNsaWVudC9wby1odHRwLWNsaWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9IdHRwUmVxdWVzdERhdGEgfSBmcm9tICcuLi9wby1odHRwLWNsaWVudC9pbnRlcmZhY2VzL3BvLWh0dHAtcmVxdWVzdC1kYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvSHR0cFJlcXVlc3RUeXBlIH0gZnJvbSAnLi4vcG8taHR0cC1jbGllbnQvcG8taHR0cC1yZXF1ZXN0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvUmVxdWVzdFR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvcG8tcmVxdWVzdC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb1NjaGVtYURlZmluaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi9wby1zY2hlbWEvcG8tc2NoZW1hLWRlZmluaXRpb24vcG8tc2NoZW1hLWRlZmluaXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBvU2NoZW1hU2VydmljZSB9IGZyb20gJy4vLi4vcG8tc2NoZW1hL3BvLXNjaGVtYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9TY2hlbWFVdGlsIH0gZnJvbSAnLi8uLi9wby1zY2hlbWEvcG8tc2NoZW1hLXV0aWwvcG8tc2NoZW1hLXV0aWwubW9kZWwnO1xyXG5pbXBvcnQgeyBQb1N5bmNDb25maWcgfSBmcm9tICcuLi9wby1zeW5jL2ludGVyZmFjZXMvcG8tc3luYy1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9TeW5jUmVzcG9uc2UgfSBmcm9tICcuLi9wby1zeW5jL2ludGVyZmFjZXMvcG8tc3luYy1yZXNwb25zZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1N5bmNTY2hlbWEgfSBmcm9tICcuLy4uL3BvLXN5bmMvaW50ZXJmYWNlcy9wby1zeW5jLXNjaGVtYS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9FdmVudFNvdXJjaW5nU2VydmljZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGV2ZW50X3NvdXJjaW5nX25hbWU6IHN0cmluZyA9ICdFdmVudFNvdXJjaW5nJztcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVkFMSURfSFRUUF9TVEFUVVNfQ09ERVMgPSBbXHJcbiAgICBTdGF0dXNDb2Rlcy5PSywgLy8gMjAwXHJcbiAgICBTdGF0dXNDb2Rlcy5DUkVBVEVELCAvLyAyMDFcclxuICAgIFN0YXR1c0NvZGVzLkFDQ0VQVEVELCAvLyAyMDJcclxuICAgIFN0YXR1c0NvZGVzLk5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OLCAvLyAyMDNcclxuICAgIFN0YXR1c0NvZGVzLk5PX0NPTlRFTlQsIC8vIDIwNFxyXG4gICAgU3RhdHVzQ29kZXMuUkVTRVRfQ09OVEVOVCwgLy8gMjA1XHJcbiAgICBTdGF0dXNDb2Rlcy5QQVJUSUFMX0NPTlRFTlQsIC8vIDIwNlxyXG4gICAgU3RhdHVzQ29kZXMuTVVMVElfU1RBVFVTIC8vIDIwN1xyXG4gIF07XHJcblxyXG4gIGNvbmZpZzogUG9TeW5jQ29uZmlnO1xyXG4gIHN0b3BwZWRRdWV1ZUV2ZW50U291cmNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0dGVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBldmVudFN1YjogT2JzZXJ2YWJsZTxudWxsPjtcclxuICBwcml2YXRlIHJlc3BvbnNlU3ViamVjdCA9IG5ldyBTdWJqZWN0PFBvU3luY1Jlc3BvbnNlPigpO1xyXG5cclxuICBwcml2YXRlIHNjaGVtYXNTeW5jQ29uZmlnID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwb1NjaGVtYURlZmluaXRpb246IFBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvU2NoZW1hU2VydmljZTogUG9TY2hlbWFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb1N0b3JhZ2U6IFBvU3RvcmFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvSHR0cENsaWVudDogUG9IdHRwQ2xpZW50U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0VXJsKGV2ZW50U291cmNpbmdJdGVtLCBzY2hlbWEsIHJlcXVlc3RUeXBlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNjaGVtYVVybCA9IFBvU2NoZW1hVXRpbC5nZXRVcmwoc2NoZW1hLCByZXF1ZXN0VHlwZSk7XHJcbiAgICBjb25zdCBzY2hlbWFJZCA9IGV2ZW50U291cmNpbmdJdGVtLnJlY29yZFtzY2hlbWEuaWRGaWVsZF07XHJcblxyXG4gICAgaWYgKHJlcXVlc3RUeXBlID09PSBQb1JlcXVlc3RUeXBlLkdFVCkge1xyXG4gICAgICByZXR1cm4gc2NoZW1hVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChbUG9SZXF1ZXN0VHlwZS5ERUxFVEUsIFBvUmVxdWVzdFR5cGUuUEFUQ0hdLmluY2x1ZGVzKHJlcXVlc3RUeXBlKSkge1xyXG4gICAgICByZXR1cm4gc2NoZW1hVXJsID8gYCR7c2NoZW1hVXJsfS8ke3NjaGVtYUlkfWAgOiBgJHtQb1NjaGVtYVV0aWwuZ2V0VXJsKHNjaGVtYSwgUG9SZXF1ZXN0VHlwZS5HRVQpfS8ke3NjaGVtYUlkfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcXVlc3RUeXBlID09PSBQb1JlcXVlc3RUeXBlLlBPU1QpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYVVybCA/IHNjaGVtYVVybCA6IFBvU2NoZW1hVXRpbC5nZXRVcmwoc2NoZW1hLCBQb1JlcXVlc3RUeXBlLkdFVCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoc2NoZW1hTmFtZTogc3RyaW5nLCBuZXdJdGVtOiBhbnksIGN1c3RvbVJlcXVlc3RJZD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBldmVudFNvdXJjaW5nSXRlbSA9IHRoaXMuY3JlYXRlRXZlbnRTb3VyY2luZ0l0ZW0oXHJcbiAgICAgIFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbi5JbnNlcnQsXHJcbiAgICAgIG5ld0l0ZW0sXHJcbiAgICAgIHNjaGVtYU5hbWUsXHJcbiAgICAgIGN1c3RvbVJlcXVlc3RJZFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmluc2VydEV2ZW50U291cmNpbmdRdWV1ZShldmVudFNvdXJjaW5nSXRlbSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVCYXRjaEV2ZW50cyhzY2hlbWFOYW1lOiBzdHJpbmcsIGV2ZW50TGlzdDogQXJyYXk8UG9FdmVudFNvdXJjaW5nU3VtbWFyeUl0ZW0+KSB7XHJcbiAgICBjb25zdCBldmVudFNvdXJjaW5nTGlzdCA9IHRoaXMuY3JlYXRlRXZlbnRTb3VyY2luZ0xpc3Qoc2NoZW1hTmFtZSwgZXZlbnRMaXN0KTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLnBvU3RvcmFnZS5hcHBlbmRBcnJheVRvQXJyYXkoUG9FdmVudFNvdXJjaW5nU2VydmljZS5ldmVudF9zb3VyY2luZ19uYW1lLCBldmVudFNvdXJjaW5nTGlzdCk7XHJcblxyXG4gICAgdGhpcy5ub3RpZnlFdmVudENyZWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0csOzaSBhIGNoYXZlIGRvICpzdG9yYWdlKiBxdWUgY29udMOpbSBhIGZpbGEgZGUgZGFkb3MgcXVlIGVzdMOjbyBlc3BlcmFuZG8gcGFyYSBzZXJlbSBlbnZpYWRvcyBhb1xyXG4gICAqIHNlcnZpZG9yICooRXZlbnRTb3VyY2luZykqLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgcXVhbmRvIGEgY2hhdmUgcmVmZXJlbnRlIGEgZmlsYSBkZSAqRXZlbnRTb3VyY2luZyogZm9yIGRlc3RydcOtZGEuXHJcbiAgICovXHJcbiAgZGVzdHJveUV2ZW50U291cmNpbmdRdWV1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnBvU3RvcmFnZS5yZW1vdmUoUG9FdmVudFNvdXJjaW5nU2VydmljZS5ldmVudF9zb3VyY2luZ19uYW1lKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGh0dHBDb21tYW5kKGh0dHBPcGVyYXRpb25EYXRhOiBQb0h0dHBSZXF1ZXN0RGF0YSwgY3VzdG9tUmVxdWVzdElkPzogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIGh0dHBPcGVyYXRpb25EYXRhID0gYXdhaXQgdGhpcy5zZXJpYWxpemVCb2R5KGh0dHBPcGVyYXRpb25EYXRhKTtcclxuXHJcbiAgICBjb25zdCBldmVudFNvdXJjaW5nSXRlbSA9IHRoaXMuY3JlYXRlRXZlbnRTb3VyY2luZ0l0ZW0oXHJcbiAgICAgIFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbi5IdHRwLFxyXG4gICAgICBodHRwT3BlcmF0aW9uRGF0YSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICBjdXN0b21SZXF1ZXN0SWRcclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5pbnNlcnRFdmVudFNvdXJjaW5nUXVldWUoZXZlbnRTb3VyY2luZ0l0ZW0pO1xyXG4gICAgcmV0dXJuIGV2ZW50U291cmNpbmdJdGVtLmlkO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VzU3ViamVjdCgpOiBPYnNlcnZhYmxlPFBvU3luY1Jlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvblNhdmVEYXRhKCk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgaWYgKCF0aGlzLmV2ZW50U3ViKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRTdWIgPSBPYnNlcnZhYmxlLmNyZWF0ZShzdWJzY3JpYmVyID0+ICh0aGlzLmVtaXR0ZXIgPSBzdWJzY3JpYmVyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudFN1YjtcclxuICB9XHJcblxyXG4gIHJlbW92ZShzY2hlbWFOYW1lOiBzdHJpbmcsIGl0ZW1Ub0RlbGV0ZTogYW55LCBjdXN0b21SZXF1ZXN0SWQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZXZlbnRTb3VyY2luZ0l0ZW0gPSB0aGlzLmNyZWF0ZUV2ZW50U291cmNpbmdJdGVtKFxyXG4gICAgICBQb0V2ZW50U291cmNpbmdPcGVyYXRpb24uRGVsZXRlLFxyXG4gICAgICBpdGVtVG9EZWxldGUsXHJcbiAgICAgIHNjaGVtYU5hbWUsXHJcbiAgICAgIGN1c3RvbVJlcXVlc3RJZFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmluc2VydEV2ZW50U291cmNpbmdRdWV1ZShldmVudFNvdXJjaW5nSXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFdmVudFNvdXJjaW5nSXRlbShpZEV2ZW50U291cmNpbmdJdGVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb1N0b3JhZ2UucmVtb3ZlSXRlbUZyb21BcnJheShQb0V2ZW50U291cmNpbmdTZXJ2aWNlLmV2ZW50X3NvdXJjaW5nX25hbWUsICdpZCcsIGlkRXZlbnRTb3VyY2luZ0l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgc3luY0dldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgc3luY0dldEZ1bmN0aW9uID0gYXN5bmMgKCkgPT5cclxuICAgICAgdGhpcy5wb1NjaGVtYURlZmluaXRpb24uZ2V0QWxsKCkudGhlbihzY2hlbWFzID0+IHtcclxuICAgICAgICBjb25zdCBzY2hlbWFQcm9taXNlcyA9IHRoaXMudXBkYXRlU3RvcmFnZVNjaGVtYXMoc2NoZW1hcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzY2hlbWFQcm9taXNlcyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBvU2NoZW1hU2VydmljZS5saW1pdGVkQ2FsbFdyYXAoc3luY0dldEZ1bmN0aW9uKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHN5bmNTZW5kKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBzeW5jU2VuZEZ1bmN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1PZlF1ZXVlID0gYXdhaXQgdGhpcy5wb1N0b3JhZ2UuZ2V0Rmlyc3RJdGVtKFBvRXZlbnRTb3VyY2luZ1NlcnZpY2UuZXZlbnRfc291cmNpbmdfbmFtZSk7XHJcblxyXG4gICAgICBpZiAoaXRlbU9mUXVldWUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNlbGVjdE9wZXJhdGlvbihpdGVtT2ZRdWV1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnN0b3BwZWRRdWV1ZUV2ZW50U291cmNpbmcgfHwgIWl0ZW1PZlF1ZXVlKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wcGVkUXVldWVFdmVudFNvdXJjaW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3luY1NlbmRGdW5jdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wb1NjaGVtYVNlcnZpY2UubGltaXRlZENhbGxXcmFwKHN5bmNTZW5kRnVuY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHNjaGVtYU5hbWU6IHN0cmluZywgaXRlbVVwZGF0ZWQ6IGFueSwgY3VzdG9tUmVxdWVzdElkPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGV2ZW50U291cmNpbmdJdGVtID0gdGhpcy5jcmVhdGVFdmVudFNvdXJjaW5nSXRlbShcclxuICAgICAgUG9FdmVudFNvdXJjaW5nT3BlcmF0aW9uLlVwZGF0ZSxcclxuICAgICAgaXRlbVVwZGF0ZWQsXHJcbiAgICAgIHNjaGVtYU5hbWUsXHJcbiAgICAgIGN1c3RvbVJlcXVlc3RJZFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmluc2VydEV2ZW50U291cmNpbmdRdWV1ZShldmVudFNvdXJjaW5nSXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKiBBdmFsaWEgc2UgbyBib2R5IMOpIGRvIHRpcG8gRmlsZSBlIHNlIGZvciBjb252ZXJ0ZSBwYXJhIGJhc2U2NCAqL1xyXG4gIHByaXZhdGUgYXN5bmMgc2VyaWFsaXplQm9keShyZXF1ZXN0RGF0YTogUG9IdHRwUmVxdWVzdERhdGEpOiBQcm9taXNlPFBvSHR0cFJlcXVlc3REYXRhPiB7XHJcbiAgICBsZXQgeyBib2R5LCBtaW1lVHlwZSwgYm9keVR5cGUsIGZpbGVOYW1lIH0gPSByZXF1ZXN0RGF0YTtcclxuXHJcbiAgICBpZiAoYm9keSBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgYm9keVR5cGUgPSAnRmlsZSc7XHJcbiAgICAgIG1pbWVUeXBlID0gYm9keS50eXBlO1xyXG4gICAgICBmaWxlTmFtZSA9IGJvZHkubmFtZTtcclxuICAgICAgYm9keSA9IGF3YWl0IHRvQmFzZTY0KGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IC4uLnJlcXVlc3REYXRhLCBib2R5LCBtaW1lVHlwZSwgYm9keVR5cGUsIGZpbGVOYW1lIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkVXJsUGFyYW1zKHNjaGVtYTogUG9TeW5jU2NoZW1hLCBiYXNlVXJsOiBzdHJpbmcsIHBhZ2VOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcclxuICAgIHBhcmFtcy5wdXNoKGAke3RoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0uZ2V0UGFnZVNpemVQYXJhbU5hbWUoKX09JHtzY2hlbWEucGFnZVNpemV9YCk7XHJcbiAgICBwYXJhbXMucHVzaChgJHt0aGlzLmNvbmZpZy5kYXRhVHJhbnNmb3JtLmdldFBhZ2VQYXJhbU5hbWUoKX09JHtwYWdlTnVtYmVyfWApO1xyXG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9PyR7cGFyYW1zLmpvaW4oJyYnKX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1JlY29yZElkRXhpc3RzKHJlY29yZElkLCBvcGVyYXRpb24pIHtcclxuICAgIGlmICghcmVjb3JkSWQpIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ0lkZW50aWZpZXIgbm90IGRlZmluZWQnLFxyXG4gICAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aHJvdyBuZXcgUG9FdmVudFNvdXJjaW5nRXJyb3JSZXNwb25zZShlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmNhdFBhZ2VJdGVtcyhwYWdlQWN1bXVsYXRvciwgcmVxdWVzdEJvZHkpOiB7IGVudGl0eTogc3RyaW5nOyBkYXRhOiBBcnJheTxhbnk+IH0ge1xyXG4gICAgaWYgKHJlcXVlc3RCb2R5W3RoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0uZ2V0SXRlbXNGaWVsZE5hbWUoKV0pIHtcclxuICAgICAgcGFnZUFjdW11bGF0b3IuZGF0YSA9IFsuLi5wYWdlQWN1bXVsYXRvci5kYXRhLCAuLi5yZXF1ZXN0Qm9keVt0aGlzLmNvbmZpZy5kYXRhVHJhbnNmb3JtLmdldEl0ZW1zRmllbGROYW1lKCldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlQWN1bXVsYXRvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRTb3VyY2luZ0l0ZW0oXHJcbiAgICBvcGVyYXRpb246IFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbixcclxuICAgIG5ld0l0ZW06IGFueSB8IFBvSHR0cFJlcXVlc3REYXRhLFxyXG4gICAgc2NoZW1hTmFtZT86IHN0cmluZyxcclxuICAgIGN1c3RvbVJlcXVlc3RJZD86IHN0cmluZyxcclxuICAgIGlkPzogbnVtYmVyXHJcbiAgKTogUG9FdmVudFNvdXJjaW5nSXRlbSB7XHJcbiAgICBpZiAoIXNjaGVtYU5hbWUgJiYgb3BlcmF0aW9uICE9PSBQb0V2ZW50U291cmNpbmdPcGVyYXRpb24uSHR0cCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BvU3luY1NjaGVtYSBpcyBub3QgZGVmaW5lZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogaWQgPyBpZCA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICBkYXRlVGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgIHNjaGVtYTogc2NoZW1hTmFtZSxcclxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXHJcbiAgICAgIHJlY29yZDogbmV3SXRlbSxcclxuICAgICAgY3VzdG9tUmVxdWVzdElkOiBjdXN0b21SZXF1ZXN0SWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUV2ZW50U291cmNpbmdMaXN0KFxyXG4gICAgc2NoZW1hTmFtZTogc3RyaW5nLFxyXG4gICAgZXZlbnRMaXN0OiBBcnJheTxQb0V2ZW50U291cmNpbmdTdW1tYXJ5SXRlbT5cclxuICApOiBBcnJheTxQb0V2ZW50U291cmNpbmdJdGVtPiB7XHJcbiAgICByZXR1cm4gZXZlbnRMaXN0Lm1hcCgoZXZlbnRJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgaW5kZXg7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVFdmVudFNvdXJjaW5nSXRlbShcclxuICAgICAgICBldmVudEl0ZW0ub3BlcmF0aW9uLFxyXG4gICAgICAgIGV2ZW50SXRlbS5yZWNvcmQsXHJcbiAgICAgICAgc2NoZW1hTmFtZSxcclxuICAgICAgICBldmVudEl0ZW0uY3VzdG9tUmVxdWVzdElkLFxyXG4gICAgICAgIGlkXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2NoZW1hU3luY0NvbmZpZyhzY2hlbWFOYW1lKSB7XHJcbiAgICB0aGlzLnNjaGVtYXNTeW5jQ29uZmlnW3NjaGVtYU5hbWVdID0ge1xyXG4gICAgICBwYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgIGN1cnJlbnRVcmxEaWZmOiB1bmRlZmluZWQsXHJcbiAgICAgIHJlc3BvbnNlRGF0ZTogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVPcGVyYXRpb24oZXZlbnRTb3VyY2luZ0l0ZW06IFBvRXZlbnRTb3VyY2luZ0l0ZW0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2NoZW1hID0gYXdhaXQgdGhpcy5wb1NjaGVtYURlZmluaXRpb24uZ2V0KGV2ZW50U291cmNpbmdJdGVtLnNjaGVtYSk7XHJcblxyXG4gICAgICBjb25zdCByZWNvcmRJZCA9IGV2ZW50U291cmNpbmdJdGVtLnJlY29yZFtzY2hlbWEuaWRGaWVsZF07XHJcbiAgICAgIHRoaXMuY2hlY2tSZWNvcmRJZEV4aXN0cyhyZWNvcmRJZCwgUG9FdmVudFNvdXJjaW5nT3BlcmF0aW9uLkRlbGV0ZSk7XHJcblxyXG4gICAgICBjb25zdCB1cmwgPSBQb0V2ZW50U291cmNpbmdTZXJ2aWNlLmdldFVybChldmVudFNvdXJjaW5nSXRlbSwgc2NoZW1hLCBQb1JlcXVlc3RUeXBlLkRFTEVURSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kU2VydmVySXRlbSh1cmwsIFBvSHR0cFJlcXVlc3RUeXBlLkRFTEVURSk7XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLnJlbW92ZUV2ZW50U291cmNpbmdWYWxpZEl0ZW0ocmVzcG9uc2Uuc3RhdHVzLCBldmVudFNvdXJjaW5nSXRlbSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUmVzcG9uc2VTdWJqZWN0KGV2ZW50U291cmNpbmdJdGVtLCByZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbmRSZXNwb25zZVN1YmplY3QoZXZlbnRTb3VyY2luZ0l0ZW0sIGVycm9yUmVzcG9uc2UsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaWZmU2VydmVySXRlbXMoY3VycmVudFVybERpZmYpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb0h0dHBDbGllbnQuZ2V0KGN1cnJlbnRVcmxEaWZmKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Qm9keUFuZERhdGUoc2NoZW1hTmFtZSwgcmVzcG9uc2UpOiBhbnkge1xyXG4gICAgY29uc3QgZ2V0RGF0ZUZpZWxkTmFtZSA9IHRoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0uZ2V0RGF0ZUZpZWxkTmFtZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlU3luY0RhdGUgPSByZXNwb25zZS5ib2R5W2dldERhdGVGaWVsZE5hbWVdO1xyXG5cclxuICAgIHRoaXMuc2NoZW1hc1N5bmNDb25maWdbc2NoZW1hTmFtZV1bJ3Jlc3BvbnNlRGF0ZSddID0gcmVzcG9uc2VTeW5jRGF0ZTtcclxuICAgIHJldHVybiByZXNwb25zZS5ib2R5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBnZXRTZXJ2ZXJEaWZmUmVjb3JkcyhzY2hlbWE6IFBvU3luY1NjaGVtYSwgYmFzZVVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGluaXRpYWxBY3VtdWxhdG9yUGFnZSA9IHsgZW50aXR5OiBzY2hlbWEubmFtZSwgZGF0YTogW10gfTtcclxuICAgIGNvbnN0IGRpZmZVcmwgPSB0aGlzLnNjaGVtYXNTeW5jQ29uZmlnW3NjaGVtYS5uYW1lXVsnY3VycmVudFVybERpZmYnXTtcclxuXHJcbiAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuZGlmZlNlcnZlckl0ZW1zKGRpZmZVcmwpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLmdldEJvZHlBbmREYXRlKHNjaGVtYS5uYW1lLCByZXNwb25zZSkpLFxyXG4gICAgICAgIGV4cGFuZChkYXRhID0+IHRoaXMucGFnaW5hdGVTY2hlbWFEYXRhKGRhdGEsIHNjaGVtYSwgYmFzZVVybCkpLFxyXG4gICAgICAgIHJlZHVjZShcclxuICAgICAgICAgIChwYWdlQWN1bXVsYXRvciwgcmVxdWVzdEJvZHkpID0+IHRoaXMuY29uY2F0UGFnZUl0ZW1zKHBhZ2VBY3VtdWxhdG9yLCByZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgICBpbml0aWFsQWN1bXVsYXRvclBhZ2VcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG5cclxuICAgIHJldHVybiBzZXJ2ZXJSZXNwb25zZS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBodHRwT3BlcmF0aW9uKGV2ZW50U291cmNpbmdJdGVtOiBQb0V2ZW50U291cmNpbmdJdGVtKTogUHJvbWlzZTxBcnJheTxQb0V2ZW50U291cmNpbmdJdGVtPiB8IG51bWJlcj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdERhdGE6IFBvSHR0cFJlcXVlc3REYXRhID0gYXdhaXQgdGhpcy5jcmVhdGVQb0h0dHBSZXF1ZXN0RGF0YShcclxuICAgICAgICBldmVudFNvdXJjaW5nSXRlbS5yZWNvcmQudXJsLFxyXG4gICAgICAgIGV2ZW50U291cmNpbmdJdGVtLnJlY29yZC5tZXRob2QsXHJcbiAgICAgICAgZXZlbnRTb3VyY2luZ0l0ZW0ucmVjb3JkLFxyXG4gICAgICAgIGV2ZW50U291cmNpbmdJdGVtLnJlY29yZC5oZWFkZXJzXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5wb0h0dHBDbGllbnQuY3JlYXRlUmVxdWVzdChyZXF1ZXN0RGF0YSkudG9Qcm9taXNlKCk7XHJcbiAgICAgIGNvbnN0IHBvSHR0cENvbW1hbmRSZXNwb25zZTogUG9TeW5jUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgaWQ6IGV2ZW50U291cmNpbmdJdGVtLmlkLFxyXG4gICAgICAgIGN1c3RvbVJlcXVlc3RJZDogZXZlbnRTb3VyY2luZ0l0ZW0uY3VzdG9tUmVxdWVzdElkLFxyXG4gICAgICAgIHJlcXVlc3Q6IGV2ZW50U291cmNpbmdJdGVtLnJlY29yZCxcclxuICAgICAgICByZXNwb25zZTogcmVzcG9uc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMucmVzcG9uc2VTdWJqZWN0Lm5leHQocG9IdHRwQ29tbWFuZFJlc3BvbnNlKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUV2ZW50U291cmNpbmdWYWxpZEl0ZW0ocmVzcG9uc2Uuc3RhdHVzLCBldmVudFNvdXJjaW5nSXRlbSk7XHJcbiAgICB9IGNhdGNoIChlcnJvckh0dHBDbGllbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VuZFJlc3BvbnNlU3ViamVjdChldmVudFNvdXJjaW5nSXRlbSwgZXJyb3JIdHRwQ2xpZW50LCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgaW5zZXJ0RXZlbnRTb3VyY2luZ1F1ZXVlKGV2ZW50U291cmNpbmdJdGVtKTogUHJvbWlzZTxBcnJheTxQb0V2ZW50U291cmNpbmdJdGVtPj4ge1xyXG4gICAgY29uc3QgZXZlbnRTb3VyY2luZ1VwZGF0ZWRRdWV1ZSA9IGF3YWl0IHRoaXMucG9TdG9yYWdlLmFwcGVuZEl0ZW1Ub0FycmF5KFxyXG4gICAgICBQb0V2ZW50U291cmNpbmdTZXJ2aWNlLmV2ZW50X3NvdXJjaW5nX25hbWUsXHJcbiAgICAgIGV2ZW50U291cmNpbmdJdGVtXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubm90aWZ5RXZlbnRDcmVhdGlvbigpO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXZlbnRTb3VyY2luZ1VwZGF0ZWRRdWV1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGluc2VydE9wZXJhdGlvbihjdXJyZW50RXZlbnRTb3VyY2luZ0l0ZW06IFBvRXZlbnRTb3VyY2luZ0l0ZW0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gYXdhaXQgdGhpcy5wb1NjaGVtYURlZmluaXRpb24uZ2V0KGN1cnJlbnRFdmVudFNvdXJjaW5nSXRlbS5zY2hlbWEpO1xyXG4gICAgY29uc3QgdXJsID0gUG9FdmVudFNvdXJjaW5nU2VydmljZS5nZXRVcmwoY3VycmVudEV2ZW50U291cmNpbmdJdGVtLCBzY2hlbWEsIFBvUmVxdWVzdFR5cGUuUE9TVCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmRTZXJ2ZXJJdGVtKHVybCwgUG9IdHRwUmVxdWVzdFR5cGUuUE9TVCwgY3VycmVudEV2ZW50U291cmNpbmdJdGVtLnJlY29yZCk7XHJcbiAgICAgIGNvbnN0IHJlY29yZFVwZGF0ZWRCeVNlcnZlciA9IHJlc3BvbnNlLmJvZHk7XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLnJlbW92ZUV2ZW50U291cmNpbmdWYWxpZEl0ZW0ocmVzcG9uc2Uuc3RhdHVzLCBjdXJyZW50RXZlbnRTb3VyY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSBjdXJyZW50RXZlbnRTb3VyY2luZ0l0ZW0ucmVjb3JkW1BvU2NoZW1hVXRpbC5zeW5jSW50ZXJuYWxJZEZpZWxkTmFtZV07XHJcbiAgICAgIGF3YWl0IHRoaXMucG9TY2hlbWFTZXJ2aWNlLnVwZGF0ZShzY2hlbWEsIHJlY29yZFVwZGF0ZWRCeVNlcnZlciwgaWQpO1xyXG5cclxuICAgICAgY29uc3QgZXZlbnRTb3VyY2luZ0l0ZW1zOiBBcnJheTxQb0V2ZW50U291cmNpbmdJdGVtPiA9IGF3YWl0IHRoaXMucG9TdG9yYWdlLmdldChcclxuICAgICAgICBQb0V2ZW50U291cmNpbmdTZXJ2aWNlLmV2ZW50X3NvdXJjaW5nX25hbWVcclxuICAgICAgKTtcclxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVQZW5kaW5nRXZlbnRTb3VyY2luZyhcclxuICAgICAgICBjdXJyZW50RXZlbnRTb3VyY2luZ0l0ZW0sXHJcbiAgICAgICAgc2NoZW1hLmlkRmllbGQsXHJcbiAgICAgICAgcmVjb3JkVXBkYXRlZEJ5U2VydmVyLFxyXG4gICAgICAgIGV2ZW50U291cmNpbmdJdGVtc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuc2VuZFJlc3BvbnNlU3ViamVjdChjdXJyZW50RXZlbnRTb3VyY2luZ0l0ZW0sIHJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9ySHR0cENsaWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZW5kUmVzcG9uc2VTdWJqZWN0KGN1cnJlbnRFdmVudFNvdXJjaW5nSXRlbSwgZXJyb3JIdHRwQ2xpZW50LCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZFN0YXR1cyhzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFBvRXZlbnRTb3VyY2luZ1NlcnZpY2UuVkFMSURfSFRUUF9TVEFUVVNfQ09ERVMuaW5jbHVkZXMoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5RXZlbnRDcmVhdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVtaXR0ZXIpIHtcclxuICAgICAgdGhpcy5lbWl0dGVyLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFnaW5hdGVTY2hlbWFEYXRhKGRhdGEsIHNjaGVtYSwgYmFzZVVybCk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgdGhpcy5jb25maWcuZGF0YVRyYW5zZm9ybS50cmFuc2Zvcm0oZGF0YSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0uaGFzTmV4dCgpKSB7XHJcbiAgICAgIHRoaXMuc2NoZW1hc1N5bmNDb25maWdbc2NoZW1hLm5hbWVdWydjdXJyZW50VXJsRGlmZiddID0gdGhpcy5idWlsZFVybFBhcmFtcyhcclxuICAgICAgICBzY2hlbWEsXHJcbiAgICAgICAgYmFzZVVybCxcclxuICAgICAgICArK3RoaXMuc2NoZW1hc1N5bmNDb25maWdbc2NoZW1hLm5hbWVdWydwYWdlJ11cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmRpZmZTZXJ2ZXJJdGVtcyh0aGlzLnNjaGVtYXNTeW5jQ29uZmlnW3NjaGVtYS5uYW1lXVsnY3VycmVudFVybERpZmYnXSkucGlwZShcclxuICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5nZXRCb2R5QW5kRGF0ZShzY2hlbWEubmFtZSwgcmVzcG9uc2UpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvZigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudFNvdXJjaW5nVmFsaWRJdGVtKFxyXG4gICAgc3RhdHVzLFxyXG4gICAgZXZlbnRTb3VyY2luZ0l0ZW06IFBvRXZlbnRTb3VyY2luZ0l0ZW1cclxuICApOiBQcm9taXNlPEFycmF5PFBvRXZlbnRTb3VyY2luZ0l0ZW0+PiB7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkU3RhdHVzKHN0YXR1cykgfHwgZXZlbnRTb3VyY2luZ0l0ZW0ub3BlcmF0aW9uID09PSBQb0V2ZW50U291cmNpbmdPcGVyYXRpb24uSHR0cCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVFdmVudFNvdXJjaW5nSXRlbShldmVudFNvdXJjaW5nSXRlbS5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdE9wZXJhdGlvbihldmVudFNvdXJjaW5nSXRlbTogUG9FdmVudFNvdXJjaW5nSXRlbSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50U291cmNpbmdJdGVtLm9wZXJhdGlvbikge1xyXG4gICAgICBjYXNlIFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbi5JbnNlcnQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0T3BlcmF0aW9uKGV2ZW50U291cmNpbmdJdGVtKTtcclxuXHJcbiAgICAgIGNhc2UgUG9FdmVudFNvdXJjaW5nT3BlcmF0aW9uLlVwZGF0ZTpcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVPcGVyYXRpb24oZXZlbnRTb3VyY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgY2FzZSBQb0V2ZW50U291cmNpbmdPcGVyYXRpb24uRGVsZXRlOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZU9wZXJhdGlvbihldmVudFNvdXJjaW5nSXRlbSk7XHJcblxyXG4gICAgICBjYXNlIFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbi5IdHRwOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBPcGVyYXRpb24oZXZlbnRTb3VyY2luZ0l0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kUmVzcG9uc2VTdWJqZWN0KFxyXG4gICAgZXZlbnRTb3VyY2luZ0l0ZW06IFBvRXZlbnRTb3VyY2luZ0l0ZW0sXHJcbiAgICByZXNwb25zZTogSHR0cFJlc3BvbnNlPE9iamVjdD4gfCBIdHRwRXJyb3JSZXNwb25zZSB8IFBvRXZlbnRTb3VyY2luZ0Vycm9yUmVzcG9uc2UsXHJcbiAgICBpc1N1YmplY3RFcnJvcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHBvU3luY1Jlc3BvbnNlOiBQb1N5bmNSZXNwb25zZSA9IHtcclxuICAgICAgaWQ6IGV2ZW50U291cmNpbmdJdGVtLmlkLFxyXG4gICAgICBjdXN0b21SZXF1ZXN0SWQ6IGV2ZW50U291cmNpbmdJdGVtLmN1c3RvbVJlcXVlc3RJZCxcclxuICAgICAgcmVxdWVzdDogZXZlbnRTb3VyY2luZ0l0ZW0ucmVjb3JkLFxyXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zdG9wcGVkUXVldWVFdmVudFNvdXJjaW5nID0gaXNTdWJqZWN0RXJyb3I7XHJcbiAgICB0aGlzLnJlc3BvbnNlU3ViamVjdC5uZXh0KHBvU3luY1Jlc3BvbnNlKTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNlbmRTZXJ2ZXJJdGVtKHVybDogc3RyaW5nLCBtZXRob2Q6IFBvSHR0cFJlcXVlc3RUeXBlLCBib2R5PzogUG9FdmVudFNvdXJjaW5nSXRlbVsncmVjb3JkJ10pIHtcclxuICAgIGNvbnN0IHJlcXVlc3REYXRhOiBQb0h0dHBSZXF1ZXN0RGF0YSA9IGF3YWl0IHRoaXMuY3JlYXRlUG9IdHRwUmVxdWVzdERhdGEodXJsLCBtZXRob2QsIGJvZHkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBvSHR0cENsaWVudC5jcmVhdGVSZXF1ZXN0KHJlcXVlc3REYXRhKS50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlUG9IdHRwUmVxdWVzdERhdGEoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG1ldGhvZDogUG9IdHRwUmVxdWVzdFR5cGUsXHJcbiAgICByZWNvcmQ/OiBQb0V2ZW50U291cmNpbmdJdGVtWydyZWNvcmQnXSxcclxuICAgIGhlYWRlcnM/OiBBcnJheTxQb0h0dHBIZWFkZXJPcHRpb24+XHJcbiAgKTogUHJvbWlzZTxQb0h0dHBSZXF1ZXN0RGF0YT4ge1xyXG4gICAgbGV0IGJvZHkgPSByZWNvcmQuYm9keSA/PyByZWNvcmQ7XHJcblxyXG4gICAgaWYgKHJlY29yZC5ib2R5VHlwZSA9PT0gJ0ZpbGUnKSB7XHJcbiAgICAgIGJvZHkgPSBhd2FpdCB0aGlzLmNyZWF0ZUZvcm1EYXRhKGJvZHksIHJlY29yZC5maWxlTmFtZSwgcmVjb3JkLm1pbWVUeXBlLCByZWNvcmQuZm9ybUZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycyB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVGb3JtRGF0YShcclxuICAgIGJvZHk6IHN0cmluZyxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBtaW1lVHlwZTogc3RyaW5nLFxyXG4gICAgZm9ybUZpZWxkOiBzdHJpbmcgPSAnZmlsZSdcclxuICApOiBQcm9taXNlPEZvcm1EYXRhPiB7XHJcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgdG9GaWxlKGJvZHksIGZpbGVOYW1lLCBtaW1lVHlwZSk7XHJcbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoZm9ybUZpZWxkLCBmaWxlLCBmaWxlTmFtZSk7XHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHVwZGF0ZU9wZXJhdGlvbihldmVudFNvdXJjaW5nSXRlbTogUG9FdmVudFNvdXJjaW5nSXRlbSk6IFByb21pc2U8QXJyYXk8YW55PiB8IG51bWJlcj4ge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gYXdhaXQgdGhpcy5wb1NjaGVtYURlZmluaXRpb24uZ2V0KGV2ZW50U291cmNpbmdJdGVtLnNjaGVtYSk7XHJcbiAgICBjb25zdCB1cmwgPSBQb0V2ZW50U291cmNpbmdTZXJ2aWNlLmdldFVybChldmVudFNvdXJjaW5nSXRlbSwgc2NoZW1hLCBQb1JlcXVlc3RUeXBlLlBBVENIKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZWNvcmRJZCA9IGV2ZW50U291cmNpbmdJdGVtLnJlY29yZFtzY2hlbWEuaWRGaWVsZF07XHJcbiAgICAgIHRoaXMuY2hlY2tSZWNvcmRJZEV4aXN0cyhyZWNvcmRJZCwgUG9FdmVudFNvdXJjaW5nT3BlcmF0aW9uLlVwZGF0ZSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZFNlcnZlckl0ZW0odXJsLCBQb0h0dHBSZXF1ZXN0VHlwZS5QVVQsIGV2ZW50U291cmNpbmdJdGVtLnJlY29yZCk7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlRXZlbnRTb3VyY2luZ1ZhbGlkSXRlbShyZXNwb25zZS5zdGF0dXMsIGV2ZW50U291cmNpbmdJdGVtKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRSZXNwb25zZVN1YmplY3QoZXZlbnRTb3VyY2luZ0l0ZW0sIHJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9ySHR0cENsaWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZW5kUmVzcG9uc2VTdWJqZWN0KGV2ZW50U291cmNpbmdJdGVtLCBlcnJvckh0dHBDbGllbnQsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQZW5kaW5nRXZlbnRTb3VyY2luZyhcclxuICAgIGN1cnJlbnRFdmVudFNvdXJjaW5nSXRlbTogUG9FdmVudFNvdXJjaW5nSXRlbSxcclxuICAgIGlkRmllbGRTY2hlbWE6IHN0cmluZyxcclxuICAgIGluc2VydGVkOiBvYmplY3QsXHJcbiAgICBldmVudFNvdXJjaW5nSXRlbXM6IEFycmF5PFBvRXZlbnRTb3VyY2luZ0l0ZW0+XHJcbiAgKSB7XHJcbiAgICBpZiAoY3VycmVudEV2ZW50U291cmNpbmdJdGVtLnJlY29yZFtQb1NjaGVtYVV0aWwuc3luY0ludGVybmFsSWRGaWVsZE5hbWVdKSB7XHJcbiAgICAgIGV2ZW50U291cmNpbmdJdGVtcy5mb3JFYWNoKChldmVudFNvdXJjaW5nSXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBpc0N1cnJlbnRFdmVudFNvdXJjaW5nSXRlbSA9XHJcbiAgICAgICAgICAhZXZlbnRTb3VyY2luZ0l0ZW0ucmVjb3JkW2lkRmllbGRTY2hlbWFdICYmXHJcbiAgICAgICAgICBldmVudFNvdXJjaW5nSXRlbS5yZWNvcmRbUG9TY2hlbWFVdGlsLnN5bmNJbnRlcm5hbElkRmllbGROYW1lXSA9PT1cclxuICAgICAgICAgICAgY3VycmVudEV2ZW50U291cmNpbmdJdGVtLnJlY29yZFtQb1NjaGVtYVV0aWwuc3luY0ludGVybmFsSWRGaWVsZE5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoaXNDdXJyZW50RXZlbnRTb3VyY2luZ0l0ZW0pIHtcclxuICAgICAgICAgIGV2ZW50U291cmNpbmdJdGVtc1twb3NpdGlvbl0ucmVjb3JkW2lkRmllbGRTY2hlbWFdID0gaW5zZXJ0ZWRbaWRGaWVsZFNjaGVtYV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnBvU3RvcmFnZS5zZXQoUG9FdmVudFNvdXJjaW5nU2VydmljZS5ldmVudF9zb3VyY2luZ19uYW1lLCBldmVudFNvdXJjaW5nSXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVSZWNvcmRzKHNlcnZlclJlY29yZHM6IEFycmF5PGFueT4sIHNjaGVtYTogUG9TeW5jU2NoZW1hKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNlcnZlclJlY29yZCBvZiBzZXJ2ZXJSZWNvcmRzKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlUmVjb3JkQnlTZXJ2ZXJSZWNvcmQoc2VydmVyUmVjb3JkLCBzY2hlbWEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVSZWNvcmRCeVNlcnZlclJlY29yZChzZXJ2ZXJSZWNvcmQsIHNjaGVtYSkge1xyXG4gICAgY29uc3QgcmVjb3JkSWQgPSBzZXJ2ZXJSZWNvcmRbc2NoZW1hLmlkRmllbGRdO1xyXG4gICAgY29uc3Qgc3RvcmFnZVJlY29yZCA9IGF3YWl0IHRoaXMucG9TY2hlbWFTZXJ2aWNlLmdldChzY2hlbWEubmFtZSwgcmVjb3JkSWQpO1xyXG4gICAgY29uc3QgZXhpc3RzU3RvcmFnZVJlY29yZCA9ICEhT2JqZWN0LmtleXMoc3RvcmFnZVJlY29yZCkubGVuZ3RoO1xyXG5cclxuICAgIGlmIChleGlzdHNTdG9yYWdlUmVjb3JkICYmIHNlcnZlclJlY29yZFtzY2hlbWEuZGVsZXRlZEZpZWxkXSkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5wb1NjaGVtYVNlcnZpY2UucmVtb3ZlKHNjaGVtYS5uYW1lLCBzZXJ2ZXJSZWNvcmRbc2NoZW1hLmlkRmllbGRdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhpc3RzU3RvcmFnZVJlY29yZCAmJiAhc2VydmVyUmVjb3JkW3NjaGVtYS5kZWxldGVkRmllbGRdKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBvU2NoZW1hU2VydmljZS51cGRhdGUoc2NoZW1hLCBzZXJ2ZXJSZWNvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZXhpc3RzU3RvcmFnZVJlY29yZCAmJiAhc2VydmVyUmVjb3JkW3NjaGVtYS5kZWxldGVkRmllbGRdKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBvU2NoZW1hU2VydmljZS5jcmVhdGUoc2NoZW1hLCBzZXJ2ZXJSZWNvcmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdG9yYWdlQnlTY2hlbWEoc2NoZW1hOiBQb1N5bmNTY2hlbWEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdGhpcy5jcmVhdGVTY2hlbWFTeW5jQ29uZmlnKHNjaGVtYS5uYW1lKTtcclxuXHJcbiAgICB0aGlzLnNjaGVtYXNTeW5jQ29uZmlnW3NjaGVtYS5uYW1lXVsncGFnZSddID0gMTtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSBgJHtQb1NjaGVtYVV0aWwuZ2V0VXJsKHNjaGVtYSwgUG9SZXF1ZXN0VHlwZS5ESUZGKX0vJHtzY2hlbWEubGFzdFN5bmN9YDtcclxuICAgIHRoaXMuc2NoZW1hc1N5bmNDb25maWdbc2NoZW1hLm5hbWVdWydjdXJyZW50VXJsRGlmZiddID0gdGhpcy5idWlsZFVybFBhcmFtcyhcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICBiYXNlVXJsLFxyXG4gICAgICB0aGlzLnNjaGVtYXNTeW5jQ29uZmlnW3NjaGVtYS5uYW1lXVsncGFnZSddXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNlcnZlclJlY29yZHMgPSBhd2FpdCB0aGlzLmdldFNlcnZlckRpZmZSZWNvcmRzKHNjaGVtYSwgYmFzZVVybCk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy51cGRhdGVSZWNvcmRzKHNlcnZlclJlY29yZHMsIHNjaGVtYSk7XHJcblxyXG4gICAgc2NoZW1hLmxhc3RTeW5jID0gdGhpcy5zY2hlbWFzU3luY0NvbmZpZ1tzY2hlbWEubmFtZV1bJ3Jlc3BvbnNlRGF0ZSddO1xyXG4gICAgYXdhaXQgdGhpcy5wb1NjaGVtYURlZmluaXRpb24udXBkYXRlKHNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVN0b3JhZ2VTY2hlbWFzKHNjaGVtYXMpOiBBcnJheTxQcm9taXNlPEFycmF5PGFueT4+PiB7XHJcbiAgICByZXR1cm4gc2NoZW1hcy5tYXAoKHNjaGVtYTogUG9TeW5jU2NoZW1hKSA9PiB0aGlzLnVwZGF0ZVN0b3JhZ2VCeVNjaGVtYShzY2hlbWEpKTtcclxuICB9XHJcbn1cclxuIl19