import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, Subject, timer } from 'rxjs';
import { expand, map, mergeMap, reduce } from 'rxjs/operators';
import { validateParameter, validateArray } from '../../utils/utils';
import { PoDataMessage, PoEntity } from '../../models';
import { PoRequestType } from '../../models/po-request-type.enum';
import { PoSchemaUtil } from './../po-schema/po-schema-util/po-schema-util.model';
import * as i0 from "@angular/core";
import * as i1 from "../po-event-sourcing/po-event-sourcing.service";
import * as i2 from "../po-http-client/po-http-client.service";
import * as i3 from "../po-network/po-network.service";
import * as i4 from "./../po-schema/po-schema-definition/po-schema-definition.service";
import * as i5 from "./../po-schema/po-schema.service";
/**
 * @description
 *
 * O `PoSyncService` é utilizado para configurar toda a base de dados que receberá as informações que serão
 * armazenadas *offline* vindas do servidor. Nele ocorre toda a preparação dos modelos de dados retornados por
 * cada consulta.
 */
export class PoSyncService {
    constructor(poEventSourcingService, poHttpClient, poNetworkService, poSchemaDefinitionService, poSchemaService) {
        this.poEventSourcingService = poEventSourcingService;
        this.poHttpClient = poHttpClient;
        this.poNetworkService = poNetworkService;
        this.poSchemaDefinitionService = poSchemaDefinitionService;
        this.poSchemaService = poSchemaService;
        this.models = [];
        this.finishSyncSubject = new Subject();
        this.isSyncEnabled = true;
        this.syncing = false;
    }
    /**
     * Destrói todas as chaves do *storage* referentes ao `po-sync`, ou seja,
     * as definições dos *schemas*, os registros de cada *schema* e a fila
     * de eventos que estão para ser enviados ao servidor *(EventSourcing)*.
     *
     * > Para que não venham ocorrer erros em ações que dependam das definições dos *schemas*,
     * recomenda-se utilizar o método `prepare()` em seguida.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Alterando as definições dos schemas](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que é resolvida quando as chaves referentes ao `po-sync` forem destruídas.
     */
    async destroy() {
        const destroyFunction = async () => {
            await this.poSchemaService.destroySchemasRecords();
            await this.poSchemaDefinitionService.destroy();
            await this.poEventSourcingService.destroyEventSourcingQueue();
        };
        return this.poSchemaService.limitedCallWrap(destroyFunction);
    }
    /**
     * Desabilita todos os tipos de sincronização de dados (periódica, reativa e manual).
     *
     * > Para habilitar novamente a sincronização utilize o método [`PoSyncService.enableSync()`](documentation/po-sync#enable-sync).
     */
    disableSync() {
        this.isSyncEnabled = false;
        if (this.timer && this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * <a id="enable-sync"></a>
     * Habilita todos os tipos de sincronização de dados (periódica, reativa e manual).
     *
     * Por padrão, sempre que se inicializa uma aplicação com PO Sync as sincronizações já estão habilitadas.
     */
    enableSync() {
        this.isSyncEnabled = true;
        this.createSubscribe();
    }
    /**
     * Método que disponibiliza a partir de sua inscrição o evento de retorno das operações da fila de eventos que
     * foram enviadas ao servidor. A cada operação enviada para o servidor, será disparado um evento para a inscrição
     * deste método.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @returns {Observable<PoSyncResponse>} Observable com um objeto do tipo `PoSyncResponse`.
     */
    getResponses() {
        return this.poEventSourcingService.responsesSubject();
    }
    /**
     * Retorna uma instância de `PoEntity` para um determinado *schema*.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Manipulando os registros de um schema](/guides/sync-fundamentals).
     *
     * @param {string} schemaName Nome do *schema*.
     * @returns {PoEntity} Objeto para efetuar consultas e alterações nos dados.
     */
    getModel(schemaName) {
        const model = this.models[schemaName];
        if (!model) {
            throw new Error('Model not found: ' + schemaName);
        }
        return model;
    }
    /**
     * Insere uma requisição HTTP na fila de eventos do `po-sync`.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Inserindo requisições HTTP na fila de eventos](/guides/sync-fundamentals).
     *
     * @param {PoHttpRequestData} poHttpRequestData Dados da requisição HTTP.
     * @param {string} customRequestId Identificador customizado da requisição HTTP.
     * @returns {Promise<number>} Promessa com o identificador da requisição HTTP criada.
     */
    insertHttpCommand(requestData, customRequestId) {
        validateParameter({ requestData });
        return this.poEventSourcingService.httpCommand(requestData, customRequestId);
    }
    /**
     * Efetua uma chamada na API do servidor para realizar a carga inicial dos dados. Deve ser chamado apenas uma vez
     * na aplicação, após a preparação dos *schemas* realizada através do método `PoSyncService.prepare()`.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Carga inicial dos dados](/guides/sync-fundamentals).
     *
     * @returns {Observable<Array<{ entity: string, data: Array<any> }>>} Observable que notificará quando a
     * carga inicial for concluída.
     */
    loadData() {
        const loads = [];
        this.schemas.forEach(el => loads.push(this.loadEntityData(el)));
        return forkJoin(loads);
    }
    /**
     * Responsável por notificar sempre que houver sincronismo.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Notificação pós-sincronização](/guides/sync-fundamentals).
     *
     * @returns {Observable<any>} Observable que é disparado a cada sincronismo realizado.
     */
    onSync() {
        if (!this.eventSub) {
            this.eventSub = Observable.create(e => {
                this.emitter = e;
            });
        }
        return this.eventSub;
    }
    /**
     * Prepara a aplicação criando os schemas e aplica as configurações.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Preparando a aplicação](/guides/sync-fundamentals).
     *
     * @param {Array<PoSyncSchema>} schemas Lista de *schemas* a serem preparados.
     * @param {PoSyncConfig} config Configurações adicionais.
     * @returns {Promise<any>} Promessa que é resolvida quando a aplicação estiver preparada para a utilização do `po-sync`.
     */
    prepare(schemas, config) {
        validateArray({ schemas });
        const defaultSyncConfig = {
            type: this.poNetworkService.getConnectionStatus().type,
            period: 60,
            dataTransform: new PoDataMessage()
        };
        this.schemas = schemas;
        this.config = config || defaultSyncConfig;
        this.config.dataTransform = this.config.dataTransform || new PoDataMessage();
        this.poEventSourcingService.config = this.config;
        this.startTimer(this.config.period);
        this.reactiveSync();
        this.poEventSourcingService.onSaveData().subscribe(() => this.sync());
        return this.saveSchemas().then(() => {
            this.schemas.forEach(schema => {
                this.models[schema.name] = new PoEntity(this.poEventSourcingService, schema, this.poSchemaService);
            });
            return Promise.resolve();
        });
    }
    /**
     * Remove um item da fila de eventos que espera a sincronização.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @param {any} idEventSourcing Identificador do item da fila de eventos.
     * @returns {Promise<any>} Promessa que é resolvida quando o item da fila de eventos é removido.
     */
    removeItemOfSync(idEventSourcing) {
        return this.poEventSourcingService.removeEventSourcingItem(idEventSourcing);
    }
    /**
     * Reenvia os comandos pendentes na fila (inclusão, alteração e exclusão) e busca novos dados do servidor.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que resolve o sincronismo disparado.
     */
    resumeSync() {
        if (!this.canSync()) {
            const finishSyncSubscription = this.finishSyncSubject.asObservable().subscribe(() => {
                finishSyncSubscription.unsubscribe();
                return this.sync();
            });
            return Promise.resolve();
        }
        return this.sync();
    }
    /**
     * Dispara o sincronismo enviando os eventos pendentes (inclusão, alteração e exclusão) e buscando novos dados do servidor.
     *
     * O sincronismo somente será executado depois que o acesso a base de dados local do dispositivo for liberada.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Sincronização manual](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que é resolvida quando o sincronismo for finalizado.
     */
    async sync() {
        if (this.canSync()) {
            this.startSync();
            try {
                await this.poEventSourcingService.syncSend();
                await this.poEventSourcingService.syncGet();
                if (this.emitter) {
                    this.emitter.next();
                }
                this.finishSync();
            }
            catch (error) {
                this.syncError();
            }
        }
    }
    canSync() {
        if (this.syncing || !this.isSyncEnabled) {
            return false;
        }
        else {
            const currentConnection = this.poNetworkService.getConnectionStatus();
            const isConfiguredConnection = this.config && currentConnection.type === this.config.type;
            const isConfigIncludesType = this.config && this.config.type instanceof Array && this.config.type.includes(currentConnection.type);
            return currentConnection.status && (!this.config || isConfiguredConnection || isConfigIncludesType);
        }
    }
    createSubscribe() {
        if (this.timer) {
            this.subscription = this.timer.subscribe(() => {
                this.sync().then(() => {
                    this.subscription.unsubscribe();
                    this.subscription = null;
                    this.timer = null;
                    this.startTimer(this.config.period);
                });
            });
        }
    }
    finishSync() {
        this.syncing = false;
        this.finishSyncSubject.next(null);
    }
    getOnePage(schema, page = 1) {
        const params = [];
        params.push(`${this.config.dataTransform.getPageSizeParamName()}=${schema.pageSize}`);
        params.push(`${this.config.dataTransform.getPageParamName()}=${page}`);
        const url = `${PoSchemaUtil.getUrl(schema, PoRequestType.GET)}?${params.join('&')}`;
        return this.poHttpClient.get(url).pipe(map(response => response.body), mergeMap(responseBody => {
            const now = new Date().getTime();
            responseBody[this.config.dataTransform.getItemsFieldName()].map(item => {
                item.SyncInsertedDateTime = now;
                item.SyncUpdatedDateTime = null;
                item.SyncExclusionDateTime = null;
                item.SyncDeleted = false;
                item.SyncStatus = 2;
            });
            return this.poSchemaService
                .updateAll(schema, responseBody[this.config.dataTransform.getItemsFieldName()])
                .then(() => responseBody);
        }));
    }
    loadEntityData(schema) {
        let page = 1;
        return this.getOnePage(schema, page).pipe(expand(data => {
            this.config.dataTransform.transform(data);
            const hasNext = this.config.dataTransform.hasNext();
            if (hasNext) {
                return this.getOnePage(schema, ++page);
            }
            else {
                return of();
            }
        }), reduce((acc, obj) => {
            acc.data = acc.data.concat(obj[this.config.dataTransform.getItemsFieldName()]);
            return acc;
        }, {
            entity: schema.name,
            data: []
        }));
    }
    reactiveSync() {
        this.poNetworkService.onChange().subscribe(networkStatus => {
            if (networkStatus.status) {
                this.startTimer(this.config.period);
                return this.sync();
            }
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        });
    }
    async saveSchemas() {
        const storageSchemas = await this.poSchemaDefinitionService.getAll();
        this.schemas.forEach(schema => (schema.lastSync = PoSchemaUtil.getLastSync(storageSchemas, schema.name)));
        return this.poSchemaDefinitionService.saveAll(this.schemas);
    }
    startSync() {
        this.syncing = true;
    }
    startTimer(period) {
        if (period && this.isSyncEnabled) {
            this.timer = timer(period * 1000);
            this.createSubscribe();
        }
    }
    syncError() {
        this.finishSync();
    }
}
PoSyncService.ɵfac = function PoSyncService_Factory(t) { return new (t || PoSyncService)(i0.ɵɵinject(i1.PoEventSourcingService), i0.ɵɵinject(i2.PoHttpClientService), i0.ɵɵinject(i3.PoNetworkService), i0.ɵɵinject(i4.PoSchemaDefinitionService), i0.ɵɵinject(i5.PoSchemaService)); };
PoSyncService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoSyncService, factory: PoSyncService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSyncService, [{
        type: Injectable
    }], function () { return [{ type: i1.PoEventSourcingService }, { type: i2.PoHttpClientService }, { type: i3.PoNetworkService }, { type: i4.PoSchemaDefinitionService }, { type: i5.PoSchemaService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3luYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3luYy9zcmMvbGliL3NlcnZpY2VzL3BvLXN5bmMvcG8tc3luYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztBQUtsRjs7Ozs7O0dBTUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQWF4QixZQUNVLHNCQUE4QyxFQUM5QyxZQUFpQyxFQUNqQyxnQkFBa0MsRUFDbEMseUJBQW9ELEVBQ3BELGVBQWdDO1FBSmhDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFqQjFDLFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBS3JCLHNCQUFpQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZELGtCQUFhLEdB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TSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLEtBQUssQ0FBQyxXQUFXO1FBQ3ZCLE1BQU0sY0FBYyxHQUF3QixNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFHLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQU07UUFDdkIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7MEVBNVZVLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGV4cGFuZCwgbWFwLCBtZXJnZU1hcCwgcmVkdWNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVBhcmFtZXRlciwgdmFsaWRhdGVBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IFBvRGF0YU1lc3NhZ2UsIFBvRW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgUG9FdmVudFNvdXJjaW5nU2VydmljZSB9IGZyb20gJy4uL3BvLWV2ZW50LXNvdXJjaW5nL3BvLWV2ZW50LXNvdXJjaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0h0dHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcG8taHR0cC1jbGllbnQvcG8taHR0cC1jbGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvSHR0cFJlcXVlc3REYXRhIH0gZnJvbSAnLi4vcG8taHR0cC1jbGllbnQvaW50ZXJmYWNlcy9wby1odHRwLXJlcXVlc3QtZGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb05ldHdvcmtTZXJ2aWNlIH0gZnJvbSAnLi4vcG8tbmV0d29yay9wby1uZXR3b3JrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1JlcXVlc3RUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvLXJlcXVlc3QtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgUG9TY2hlbWFEZWZpbml0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vcG8tc2NoZW1hL3BvLXNjaGVtYS1kZWZpbml0aW9uL3BvLXNjaGVtYS1kZWZpbml0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1NjaGVtYVNlcnZpY2UgfSBmcm9tICcuLy4uL3BvLXNjaGVtYS9wby1zY2hlbWEuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvU2NoZW1hVXRpbCB9IGZyb20gJy4vLi4vcG8tc2NoZW1hL3BvLXNjaGVtYS11dGlsL3BvLXNjaGVtYS11dGlsLm1vZGVsJztcclxuaW1wb3J0IHsgUG9TeW5jQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXN5bmMtY29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvU3luY1Jlc3BvbnNlIH0gZnJvbSAnLi4vcG8tc3luYy9pbnRlcmZhY2VzL3BvLXN5bmMtcmVzcG9uc2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9TeW5jU2NoZW1hIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXN5bmMtc2NoZW1hLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gYFBvU3luY1NlcnZpY2VgIMOpIHV0aWxpemFkbyBwYXJhIGNvbmZpZ3VyYXIgdG9kYSBhIGJhc2UgZGUgZGFkb3MgcXVlIHJlY2ViZXLDoSBhcyBpbmZvcm1hw6fDtWVzIHF1ZSBzZXLDo29cclxuICogYXJtYXplbmFkYXMgKm9mZmxpbmUqIHZpbmRhcyBkbyBzZXJ2aWRvci4gTmVsZSBvY29ycmUgdG9kYSBhIHByZXBhcmHDp8OjbyBkb3MgbW9kZWxvcyBkZSBkYWRvcyByZXRvcm5hZG9zIHBvclxyXG4gKiBjYWRhIGNvbnN1bHRhLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9TeW5jU2VydmljZSB7XHJcbiAgbW9kZWxzOiBBcnJheTxQb0VudGl0eT4gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWc6IFBvU3luY0NvbmZpZztcclxuICBwcml2YXRlIGVtaXR0ZXI6IGFueTtcclxuICBwcml2YXRlIGV2ZW50U3ViOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgcHJpdmF0ZSBmaW5pc2hTeW5jU3ViamVjdDogU3ViamVjdDxudWxsPiA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XHJcbiAgcHJpdmF0ZSBpc1N5bmNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIHNjaGVtYXM6IEFycmF5PFBvU3luY1NjaGVtYT47XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN5bmNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHRpbWVyOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwb0V2ZW50U291cmNpbmdTZXJ2aWNlOiBQb0V2ZW50U291cmNpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb0h0dHBDbGllbnQ6IFBvSHR0cENsaWVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvTmV0d29ya1NlcnZpY2U6IFBvTmV0d29ya1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2U6IFBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvU2NoZW1hU2VydmljZTogUG9TY2hlbWFTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0csOzaSB0b2RhcyBhcyBjaGF2ZXMgZG8gKnN0b3JhZ2UqIHJlZmVyZW50ZXMgYW8gYHBvLXN5bmNgLCBvdSBzZWphLFxyXG4gICAqIGFzIGRlZmluacOnw7VlcyBkb3MgKnNjaGVtYXMqLCBvcyByZWdpc3Ryb3MgZGUgY2FkYSAqc2NoZW1hKiBlIGEgZmlsYVxyXG4gICAqIGRlIGV2ZW50b3MgcXVlIGVzdMOjbyBwYXJhIHNlciBlbnZpYWRvcyBhbyBzZXJ2aWRvciAqKEV2ZW50U291cmNpbmcpKi5cclxuICAgKlxyXG4gICAqID4gUGFyYSBxdWUgbsOjbyB2ZW5oYW0gb2NvcnJlciBlcnJvcyBlbSBhw6fDtWVzIHF1ZSBkZXBlbmRhbSBkYXMgZGVmaW5pw6fDtWVzIGRvcyAqc2NoZW1hcyosXHJcbiAgICogcmVjb21lbmRhLXNlIHV0aWxpemFyIG8gbcOpdG9kbyBgcHJlcGFyZSgpYCBlbSBzZWd1aWRhLlxyXG4gICAqXHJcbiAgICogPiBWZWphIG1haXMgZGV0YWxoZXMgZW0gW0Z1bmRhbWVudG9zIGRvIFBPIFN5bmMgLSBBbHRlcmFuZG8gYXMgZGVmaW5pw6fDtWVzIGRvcyBzY2hlbWFzXSgvZ3VpZGVzL3N5bmMtZnVuZGFtZW50YWxzKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgcXVhbmRvIGFzIGNoYXZlcyByZWZlcmVudGVzIGFvIGBwby1zeW5jYCBmb3JlbSBkZXN0cnXDrWRhcy5cclxuICAgKi9cclxuICBhc3luYyBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBkZXN0cm95RnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMucG9TY2hlbWFTZXJ2aWNlLmRlc3Ryb3lTY2hlbWFzUmVjb3JkcygpO1xyXG4gICAgICBhd2FpdCB0aGlzLnBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2UuZGVzdHJveSgpO1xyXG4gICAgICBhd2FpdCB0aGlzLnBvRXZlbnRTb3VyY2luZ1NlcnZpY2UuZGVzdHJveUV2ZW50U291cmNpbmdRdWV1ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wb1NjaGVtYVNlcnZpY2UubGltaXRlZENhbGxXcmFwKGRlc3Ryb3lGdW5jdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXNhYmlsaXRhIHRvZG9zIG9zIHRpcG9zIGRlIHNpbmNyb25pemHDp8OjbyBkZSBkYWRvcyAocGVyacOzZGljYSwgcmVhdGl2YSBlIG1hbnVhbCkuXHJcbiAgICpcclxuICAgKiA+IFBhcmEgaGFiaWxpdGFyIG5vdmFtZW50ZSBhIHNpbmNyb25pemHDp8OjbyB1dGlsaXplIG8gbcOpdG9kbyBbYFBvU3luY1NlcnZpY2UuZW5hYmxlU3luYygpYF0oZG9jdW1lbnRhdGlvbi9wby1zeW5jI2VuYWJsZS1zeW5jKS5cclxuICAgKi9cclxuICBkaXNhYmxlU3luYygpIHtcclxuICAgIHRoaXMuaXNTeW5jRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLnRpbWVyICYmIHRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA8YSBpZD1cImVuYWJsZS1zeW5jXCI+PC9hPlxyXG4gICAqIEhhYmlsaXRhIHRvZG9zIG9zIHRpcG9zIGRlIHNpbmNyb25pemHDp8OjbyBkZSBkYWRvcyAocGVyacOzZGljYSwgcmVhdGl2YSBlIG1hbnVhbCkuXHJcbiAgICpcclxuICAgKiBQb3IgcGFkcsOjbywgc2VtcHJlIHF1ZSBzZSBpbmljaWFsaXphIHVtYSBhcGxpY2HDp8OjbyBjb20gUE8gU3luYyBhcyBzaW5jcm9uaXphw6fDtWVzIGrDoSBlc3TDo28gaGFiaWxpdGFkYXMuXHJcbiAgICovXHJcbiAgZW5hYmxlU3luYygpIHtcclxuICAgIHRoaXMuaXNTeW5jRW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyBxdWUgZGlzcG9uaWJpbGl6YSBhIHBhcnRpciBkZSBzdWEgaW5zY3Jpw6fDo28gbyBldmVudG8gZGUgcmV0b3JubyBkYXMgb3BlcmHDp8O1ZXMgZGEgZmlsYSBkZSBldmVudG9zIHF1ZVxyXG4gICAqIGZvcmFtIGVudmlhZGFzIGFvIHNlcnZpZG9yLiBBIGNhZGEgb3BlcmHDp8OjbyBlbnZpYWRhIHBhcmEgbyBzZXJ2aWRvciwgc2Vyw6EgZGlzcGFyYWRvIHVtIGV2ZW50byBwYXJhIGEgaW5zY3Jpw6fDo29cclxuICAgKiBkZXN0ZSBtw6l0b2RvLlxyXG4gICAqXHJcbiAgICogPiBWZWphIG1haXMgZGV0YWxoZXMgZW0gW0Z1bmRhbWVudG9zIGRvIFBPIFN5bmMgLSBDYXB0dXJhbmRvIHJlc3Bvc3RhcyBkYSBzaW5jcm9uaXphw6fDo29dKC9ndWlkZXMvc3luYy1mdW5kYW1lbnRhbHMpLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8UG9TeW5jUmVzcG9uc2U+fSBPYnNlcnZhYmxlIGNvbSB1bSBvYmpldG8gZG8gdGlwbyBgUG9TeW5jUmVzcG9uc2VgLlxyXG4gICAqL1xyXG4gIGdldFJlc3BvbnNlcygpOiBPYnNlcnZhYmxlPFBvU3luY1Jlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb0V2ZW50U291cmNpbmdTZXJ2aWNlLnJlc3BvbnNlc1N1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW1hIGluc3TDom5jaWEgZGUgYFBvRW50aXR5YCBwYXJhIHVtIGRldGVybWluYWRvICpzY2hlbWEqLlxyXG4gICAqXHJcbiAgICogPiBWZWphIG1haXMgZGV0YWxoZXMgZW0gW0Z1bmRhbWVudG9zIGRvIFBPIFN5bmMgLSBNYW5pcHVsYW5kbyBvcyByZWdpc3Ryb3MgZGUgdW0gc2NoZW1hXSgvZ3VpZGVzL3N5bmMtZnVuZGFtZW50YWxzKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWFOYW1lIE5vbWUgZG8gKnNjaGVtYSouXHJcbiAgICogQHJldHVybnMge1BvRW50aXR5fSBPYmpldG8gcGFyYSBlZmV0dWFyIGNvbnN1bHRhcyBlIGFsdGVyYcOnw7VlcyBub3MgZGFkb3MuXHJcbiAgICovXHJcbiAgZ2V0TW9kZWwoc2NoZW1hTmFtZTogc3RyaW5nKTogUG9FbnRpdHkge1xyXG4gICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVsc1tzY2hlbWFOYW1lXTtcclxuICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb2RlbCBub3QgZm91bmQ6ICcgKyBzY2hlbWFOYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb2RlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc2VyZSB1bWEgcmVxdWlzacOnw6NvIEhUVFAgbmEgZmlsYSBkZSBldmVudG9zIGRvIGBwby1zeW5jYC5cclxuICAgKlxyXG4gICAqID4gVmVqYSBtYWlzIGRldGFsaGVzIGVtIFtGdW5kYW1lbnRvcyBkbyBQTyBTeW5jIC0gSW5zZXJpbmRvIHJlcXVpc2nDp8O1ZXMgSFRUUCBuYSBmaWxhIGRlIGV2ZW50b3NdKC9ndWlkZXMvc3luYy1mdW5kYW1lbnRhbHMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb0h0dHBSZXF1ZXN0RGF0YX0gcG9IdHRwUmVxdWVzdERhdGEgRGFkb3MgZGEgcmVxdWlzacOnw6NvIEhUVFAuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1c3RvbVJlcXVlc3RJZCBJZGVudGlmaWNhZG9yIGN1c3RvbWl6YWRvIGRhIHJlcXVpc2nDp8OjbyBIVFRQLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFByb21lc3NhIGNvbSBvIGlkZW50aWZpY2Fkb3IgZGEgcmVxdWlzacOnw6NvIEhUVFAgY3JpYWRhLlxyXG4gICAqL1xyXG4gIGluc2VydEh0dHBDb21tYW5kKHJlcXVlc3REYXRhOiBQb0h0dHBSZXF1ZXN0RGF0YSwgY3VzdG9tUmVxdWVzdElkPzogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHZhbGlkYXRlUGFyYW1ldGVyKHsgcmVxdWVzdERhdGEgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9FdmVudFNvdXJjaW5nU2VydmljZS5odHRwQ29tbWFuZChyZXF1ZXN0RGF0YSwgY3VzdG9tUmVxdWVzdElkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVmZXR1YSB1bWEgY2hhbWFkYSBuYSBBUEkgZG8gc2Vydmlkb3IgcGFyYSByZWFsaXphciBhIGNhcmdhIGluaWNpYWwgZG9zIGRhZG9zLiBEZXZlIHNlciBjaGFtYWRvIGFwZW5hcyB1bWEgdmV6XHJcbiAgICogbmEgYXBsaWNhw6fDo28sIGFww7NzIGEgcHJlcGFyYcOnw6NvIGRvcyAqc2NoZW1hcyogcmVhbGl6YWRhIGF0cmF2w6lzIGRvIG3DqXRvZG8gYFBvU3luY1NlcnZpY2UucHJlcGFyZSgpYC5cclxuICAgKlxyXG4gICAqID4gVmVqYSBtYWlzIGRldGFsaGVzIGVtIFtGdW5kYW1lbnRvcyBkbyBQTyBTeW5jIC0gQ2FyZ2EgaW5pY2lhbCBkb3MgZGFkb3NdKC9ndWlkZXMvc3luYy1mdW5kYW1lbnRhbHMpLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QXJyYXk8eyBlbnRpdHk6IHN0cmluZywgZGF0YTogQXJyYXk8YW55PiB9Pj59IE9ic2VydmFibGUgcXVlIG5vdGlmaWNhcsOhIHF1YW5kbyBhXHJcbiAgICogY2FyZ2EgaW5pY2lhbCBmb3IgY29uY2x1w61kYS5cclxuICAgKi9cclxuICBsb2FkRGF0YSgpOiBPYnNlcnZhYmxlPEFycmF5PHsgZW50aXR5OiBzdHJpbmc7IGRhdGE6IEFycmF5PGFueT4gfT4+IHtcclxuICAgIGNvbnN0IGxvYWRzOiBBcnJheTxPYnNlcnZhYmxlPHsgZW50aXR5OiBzdHJpbmc7IGRhdGE6IEFycmF5PGFueT4gfT4+ID0gW107XHJcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaChlbCA9PiBsb2Fkcy5wdXNoKHRoaXMubG9hZEVudGl0eURhdGEoZWwpKSk7XHJcbiAgICByZXR1cm4gZm9ya0pvaW4obG9hZHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzcG9uc8OhdmVsIHBvciBub3RpZmljYXIgc2VtcHJlIHF1ZSBob3V2ZXIgc2luY3JvbmlzbW8uXHJcbiAgICpcclxuICAgKiA+IFZlamEgbWFpcyBkZXRhbGhlcyBlbSBbRnVuZGFtZW50b3MgZG8gUE8gU3luYyAtIE5vdGlmaWNhw6fDo28gcMOzcy1zaW5jcm9uaXphw6fDo29dKC9ndWlkZXMvc3luYy1mdW5kYW1lbnRhbHMpLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gT2JzZXJ2YWJsZSBxdWUgw6kgZGlzcGFyYWRvIGEgY2FkYSBzaW5jcm9uaXNtbyByZWFsaXphZG8uXHJcbiAgICovXHJcbiAgb25TeW5jKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoIXRoaXMuZXZlbnRTdWIpIHtcclxuICAgICAgdGhpcy5ldmVudFN1YiA9IE9ic2VydmFibGUuY3JlYXRlKGUgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTdWI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJhIGEgYXBsaWNhw6fDo28gY3JpYW5kbyBvcyBzY2hlbWFzIGUgYXBsaWNhIGFzIGNvbmZpZ3VyYcOnw7Vlcy5cclxuICAgKlxyXG4gICAqID4gVmVqYSBtYWlzIGRldGFsaGVzIGVtIFtGdW5kYW1lbnRvcyBkbyBQTyBTeW5jIC0gUHJlcGFyYW5kbyBhIGFwbGljYcOnw6NvXSgvZ3VpZGVzL3N5bmMtZnVuZGFtZW50YWxzKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8UG9TeW5jU2NoZW1hPn0gc2NoZW1hcyBMaXN0YSBkZSAqc2NoZW1hcyogYSBzZXJlbSBwcmVwYXJhZG9zLlxyXG4gICAqIEBwYXJhbSB7UG9TeW5jQ29uZmlnfSBjb25maWcgQ29uZmlndXJhw6fDtWVzIGFkaWNpb25haXMuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBxdWFuZG8gYSBhcGxpY2HDp8OjbyBlc3RpdmVyIHByZXBhcmFkYSBwYXJhIGEgdXRpbGl6YcOnw6NvIGRvIGBwby1zeW5jYC5cclxuICAgKi9cclxuICBwcmVwYXJlKHNjaGVtYXM6IEFycmF5PFBvU3luY1NjaGVtYT4sIGNvbmZpZz86IFBvU3luY0NvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICB2YWxpZGF0ZUFycmF5KHsgc2NoZW1hcyB9KTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0U3luY0NvbmZpZzogUG9TeW5jQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiB0aGlzLnBvTmV0d29ya1NlcnZpY2UuZ2V0Q29ubmVjdGlvblN0YXR1cygpLnR5cGUsXHJcbiAgICAgIHBlcmlvZDogNjAsXHJcbiAgICAgIGRhdGFUcmFuc2Zvcm06IG5ldyBQb0RhdGFNZXNzYWdlKClcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zY2hlbWFzID0gc2NoZW1hcztcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IGRlZmF1bHRTeW5jQ29uZmlnO1xyXG4gICAgdGhpcy5jb25maWcuZGF0YVRyYW5zZm9ybSA9IHRoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0gfHwgbmV3IFBvRGF0YU1lc3NhZ2UoKTtcclxuICAgIHRoaXMucG9FdmVudFNvdXJjaW5nU2VydmljZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLmNvbmZpZy5wZXJpb2QpO1xyXG4gICAgdGhpcy5yZWFjdGl2ZVN5bmMoKTtcclxuICAgIHRoaXMucG9FdmVudFNvdXJjaW5nU2VydmljZS5vblNhdmVEYXRhKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc3luYygpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5zYXZlU2NoZW1hcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaChzY2hlbWEgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kZWxzW3NjaGVtYS5uYW1lXSA9IG5ldyBQb0VudGl0eSh0aGlzLnBvRXZlbnRTb3VyY2luZ1NlcnZpY2UsIHNjaGVtYSwgdGhpcy5wb1NjaGVtYVNlcnZpY2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdW0gaXRlbSBkYSBmaWxhIGRlIGV2ZW50b3MgcXVlIGVzcGVyYSBhIHNpbmNyb25pemHDp8Ojby5cclxuICAgKlxyXG4gICAqID4gVmVqYSBtYWlzIGRldGFsaGVzIGVtIFtGdW5kYW1lbnRvcyBkbyBQTyBTeW5jIC0gQ2FwdHVyYW5kbyByZXNwb3N0YXMgZGEgc2luY3Jvbml6YcOnw6NvXSgvZ3VpZGVzL3N5bmMtZnVuZGFtZW50YWxzKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7YW55fSBpZEV2ZW50U291cmNpbmcgSWRlbnRpZmljYWRvciBkbyBpdGVtIGRhIGZpbGEgZGUgZXZlbnRvcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIHF1YW5kbyBvIGl0ZW0gZGEgZmlsYSBkZSBldmVudG9zIMOpIHJlbW92aWRvLlxyXG4gICAqL1xyXG4gIHJlbW92ZUl0ZW1PZlN5bmMoaWRFdmVudFNvdXJjaW5nOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9FdmVudFNvdXJjaW5nU2VydmljZS5yZW1vdmVFdmVudFNvdXJjaW5nSXRlbShpZEV2ZW50U291cmNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVlbnZpYSBvcyBjb21hbmRvcyBwZW5kZW50ZXMgbmEgZmlsYSAoaW5jbHVzw6NvLCBhbHRlcmHDp8OjbyBlIGV4Y2x1c8OjbykgZSBidXNjYSBub3ZvcyBkYWRvcyBkbyBzZXJ2aWRvci5cclxuICAgKlxyXG4gICAqID4gVmVqYSBtYWlzIGRldGFsaGVzIGVtIFtGdW5kYW1lbnRvcyBkbyBQTyBTeW5jIC0gQ2FwdHVyYW5kbyByZXNwb3N0YXMgZGEgc2luY3Jvbml6YcOnw6NvXSgvZ3VpZGVzL3N5bmMtZnVuZGFtZW50YWxzKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSByZXNvbHZlIG8gc2luY3JvbmlzbW8gZGlzcGFyYWRvLlxyXG4gICAqL1xyXG4gIHJlc3VtZVN5bmMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmICghdGhpcy5jYW5TeW5jKCkpIHtcclxuICAgICAgY29uc3QgZmluaXNoU3luY1N1YnNjcmlwdGlvbiA9IHRoaXMuZmluaXNoU3luY1N1YmplY3QuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBmaW5pc2hTeW5jU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3luYygpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN5bmMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BhcmEgbyBzaW5jcm9uaXNtbyBlbnZpYW5kbyBvcyBldmVudG9zIHBlbmRlbnRlcyAoaW5jbHVzw6NvLCBhbHRlcmHDp8OjbyBlIGV4Y2x1c8OjbykgZSBidXNjYW5kbyBub3ZvcyBkYWRvcyBkbyBzZXJ2aWRvci5cclxuICAgKlxyXG4gICAqIE8gc2luY3JvbmlzbW8gc29tZW50ZSBzZXLDoSBleGVjdXRhZG8gZGVwb2lzIHF1ZSBvIGFjZXNzbyBhIGJhc2UgZGUgZGFkb3MgbG9jYWwgZG8gZGlzcG9zaXRpdm8gZm9yIGxpYmVyYWRhLlxyXG4gICAqXHJcbiAgICogPiBWZWphIG1haXMgZGV0YWxoZXMgZW0gW0Z1bmRhbWVudG9zIGRvIFBPIFN5bmMgLSBTaW5jcm9uaXphw6fDo28gbWFudWFsXSgvZ3VpZGVzL3N5bmMtZnVuZGFtZW50YWxzKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgcXVhbmRvIG8gc2luY3JvbmlzbW8gZm9yIGZpbmFsaXphZG8uXHJcbiAgICovXHJcbiAgYXN5bmMgc3luYygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKHRoaXMuY2FuU3luYygpKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRTeW5jKCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucG9FdmVudFNvdXJjaW5nU2VydmljZS5zeW5jU2VuZCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucG9FdmVudFNvdXJjaW5nU2VydmljZS5zeW5jR2V0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVtaXR0ZXIpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdHRlci5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaFN5bmMoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLnN5bmNFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhblN5bmMoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5zeW5jaW5nIHx8ICF0aGlzLmlzU3luY0VuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY3VycmVudENvbm5lY3Rpb24gPSB0aGlzLnBvTmV0d29ya1NlcnZpY2UuZ2V0Q29ubmVjdGlvblN0YXR1cygpO1xyXG4gICAgICBjb25zdCBpc0NvbmZpZ3VyZWRDb25uZWN0aW9uID0gdGhpcy5jb25maWcgJiYgY3VycmVudENvbm5lY3Rpb24udHlwZSA9PT0gdGhpcy5jb25maWcudHlwZTtcclxuICAgICAgY29uc3QgaXNDb25maWdJbmNsdWRlc1R5cGUgPVxyXG4gICAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnR5cGUgaW5zdGFuY2VvZiBBcnJheSAmJiB0aGlzLmNvbmZpZy50eXBlLmluY2x1ZGVzKGN1cnJlbnRDb25uZWN0aW9uLnR5cGUpO1xyXG5cclxuICAgICAgcmV0dXJuIGN1cnJlbnRDb25uZWN0aW9uLnN0YXR1cyAmJiAoIXRoaXMuY29uZmlnIHx8IGlzQ29uZmlndXJlZENvbm5lY3Rpb24gfHwgaXNDb25maWdJbmNsdWRlc1R5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTdWJzY3JpYmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudGltZXIuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN5bmMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLmNvbmZpZy5wZXJpb2QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluaXNoU3luYygpOiB2b2lkIHtcclxuICAgIHRoaXMuc3luY2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5maW5pc2hTeW5jU3ViamVjdC5uZXh0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPbmVQYWdlKHNjaGVtYTogUG9TeW5jU2NoZW1hLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xyXG4gICAgcGFyYW1zLnB1c2goYCR7dGhpcy5jb25maWcuZGF0YVRyYW5zZm9ybS5nZXRQYWdlU2l6ZVBhcmFtTmFtZSgpfT0ke3NjaGVtYS5wYWdlU2l6ZX1gKTtcclxuICAgIHBhcmFtcy5wdXNoKGAke3RoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0uZ2V0UGFnZVBhcmFtTmFtZSgpfT0ke3BhZ2V9YCk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7UG9TY2hlbWFVdGlsLmdldFVybChzY2hlbWEsIFBvUmVxdWVzdFR5cGUuR0VUKX0/JHtwYXJhbXMuam9pbignJicpfWA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9IdHRwQ2xpZW50LmdldCh1cmwpLnBpcGUoXHJcbiAgICAgIG1hcChyZXNwb25zZSA9PiByZXNwb25zZS5ib2R5KSxcclxuICAgICAgbWVyZ2VNYXAocmVzcG9uc2VCb2R5ID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICByZXNwb25zZUJvZHlbdGhpcy5jb25maWcuZGF0YVRyYW5zZm9ybS5nZXRJdGVtc0ZpZWxkTmFtZSgpXS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICBpdGVtLlN5bmNJbnNlcnRlZERhdGVUaW1lID0gbm93O1xyXG4gICAgICAgICAgaXRlbS5TeW5jVXBkYXRlZERhdGVUaW1lID0gbnVsbDtcclxuICAgICAgICAgIGl0ZW0uU3luY0V4Y2x1c2lvbkRhdGVUaW1lID0gbnVsbDtcclxuICAgICAgICAgIGl0ZW0uU3luY0RlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGl0ZW0uU3luY1N0YXR1cyA9IDI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9TY2hlbWFTZXJ2aWNlXHJcbiAgICAgICAgICAudXBkYXRlQWxsKHNjaGVtYSwgcmVzcG9uc2VCb2R5W3RoaXMuY29uZmlnLmRhdGFUcmFuc2Zvcm0uZ2V0SXRlbXNGaWVsZE5hbWUoKV0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiByZXNwb25zZUJvZHkpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEVudGl0eURhdGEoc2NoZW1hOiBQb1N5bmNTY2hlbWEpOiBPYnNlcnZhYmxlPHsgZW50aXR5OiBzdHJpbmc7IGRhdGE6IEFycmF5PGFueT4gfT4ge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0T25lUGFnZShzY2hlbWEsIHBhZ2UpLnBpcGUoXHJcbiAgICAgIGV4cGFuZChkYXRhID0+IHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5kYXRhVHJhbnNmb3JtLnRyYW5zZm9ybShkYXRhKTtcclxuICAgICAgICBjb25zdCBoYXNOZXh0ID0gdGhpcy5jb25maWcuZGF0YVRyYW5zZm9ybS5oYXNOZXh0KCk7XHJcbiAgICAgICAgaWYgKGhhc05leHQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmdldE9uZVBhZ2Uoc2NoZW1hLCArK3BhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gb2YoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICByZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgb2JqKSA9PiB7XHJcbiAgICAgICAgICBhY2MuZGF0YSA9IGFjYy5kYXRhLmNvbmNhdChvYmpbdGhpcy5jb25maWcuZGF0YVRyYW5zZm9ybS5nZXRJdGVtc0ZpZWxkTmFtZSgpXSk7XHJcbiAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZW50aXR5OiBzY2hlbWEubmFtZSxcclxuICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFjdGl2ZVN5bmMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvTmV0d29ya1NlcnZpY2Uub25DaGFuZ2UoKS5zdWJzY3JpYmUobmV0d29ya1N0YXR1cyA9PiB7XHJcbiAgICAgIGlmIChuZXR3b3JrU3RhdHVzLnN0YXR1cykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLmNvbmZpZy5wZXJpb2QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN5bmMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNhdmVTY2hlbWFzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBzdG9yYWdlU2NoZW1hczogQXJyYXk8UG9TeW5jU2NoZW1hPiA9IGF3YWl0IHRoaXMucG9TY2hlbWFEZWZpbml0aW9uU2VydmljZS5nZXRBbGwoKTtcclxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKHNjaGVtYSA9PiAoc2NoZW1hLmxhc3RTeW5jID0gUG9TY2hlbWFVdGlsLmdldExhc3RTeW5jKHN0b3JhZ2VTY2hlbWFzLCBzY2hlbWEubmFtZSkpKTtcclxuICAgIHJldHVybiB0aGlzLnBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2Uuc2F2ZUFsbCh0aGlzLnNjaGVtYXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFN5bmMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN5bmNpbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFRpbWVyKHBlcmlvZCk6IHZvaWQge1xyXG4gICAgaWYgKHBlcmlvZCAmJiB0aGlzLmlzU3luY0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy50aW1lciA9IHRpbWVyKHBlcmlvZCAqIDEwMDApO1xyXG4gICAgICB0aGlzLmNyZWF0ZVN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzeW5jRXJyb3IoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbmlzaFN5bmMoKTtcclxuICB9XHJcbn1cclxuIl19