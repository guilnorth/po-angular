import { Observable } from 'rxjs';
import { PoStorageService } from '@po-ui/ng-storage';
import { PoEventSourcingSummaryItem } from './interfaces/po-event-sourcing-summary-item.interface';
import { PoHttpClientService } from './../po-http-client/po-http-client.service';
import { PoHttpRequestData } from '../po-http-client/interfaces/po-http-request-data.interface';
import { PoSchemaDefinitionService } from './../po-schema/po-schema-definition/po-schema-definition.service';
import { PoSchemaService } from './../po-schema/po-schema.service';
import { PoSyncConfig } from '../po-sync/interfaces/po-sync-config.interface';
import { PoSyncResponse } from '../po-sync/interfaces/po-sync-response.interface';
import * as i0 from "@angular/core";
export declare class PoEventSourcingService {
    private poSchemaDefinition;
    private poSchemaService;
    private poStorage;
    private poHttpClient;
    static readonly event_sourcing_name: string;
    private static readonly VALID_HTTP_STATUS_CODES;
    config: PoSyncConfig;
    stoppedQueueEventSourcing: boolean;
    private emitter;
    private eventSub;
    private responseSubject;
    private schemasSyncConfig;
    constructor(poSchemaDefinition: PoSchemaDefinitionService, poSchemaService: PoSchemaService, poStorage: PoStorageService, poHttpClient: PoHttpClientService);
    private static getUrl;
    create(schemaName: string, newItem: any, customRequestId?: string): Promise<any>;
    createBatchEvents(schemaName: string, eventList: Array<PoEventSourcingSummaryItem>): Promise<void>;
    /**
     * Destrói a chave do *storage* que contém a fila de dados que estão esperando para serem enviados ao
     * servidor *(EventSourcing)*.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando a chave referente a fila de *EventSourcing* for destruída.
     */
    destroyEventSourcingQueue(): Promise<void>;
    httpCommand(httpOperationData: PoHttpRequestData, customRequestId?: string): Promise<number>;
    responsesSubject(): Observable<PoSyncResponse>;
    onSaveData(): Observable<null>;
    remove(schemaName: string, itemToDelete: any, customRequestId?: string): Promise<any>;
    removeEventSourcingItem(idEventSourcingItem: any): Promise<any>;
    syncGet(): Promise<any>;
    syncSend(): Promise<any>;
    update(schemaName: string, itemUpdated: any, customRequestId?: string): Promise<any>;
    private serializeBody;
    private buildUrlParams;
    private checkRecordIdExists;
    private concatPageItems;
    private createEventSourcingItem;
    private createEventSourcingList;
    private createSchemaSyncConfig;
    private deleteOperation;
    private diffServerItems;
    private getBodyAndDate;
    private getServerDiffRecords;
    private httpOperation;
    private insertEventSourcingQueue;
    private insertOperation;
    private isValidStatus;
    private notifyEventCreation;
    private paginateSchemaData;
    private removeEventSourcingValidItem;
    private selectOperation;
    private sendResponseSubject;
    private sendServerItem;
    private createPoHttpRequestData;
    private createFormData;
    private updateOperation;
    private updatePendingEventSourcing;
    private updateRecords;
    private updateRecordByServerRecord;
    private updateStorageBySchema;
    private updateStorageSchemas;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoEventSourcingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoEventSourcingService>;
}
