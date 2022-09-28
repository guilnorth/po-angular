import { Observable } from 'rxjs';
import { PoEntity } from '../../models';
import { PoEventSourcingService } from '../po-event-sourcing/po-event-sourcing.service';
import { PoHttpClientService } from '../po-http-client/po-http-client.service';
import { PoHttpRequestData } from '../po-http-client/interfaces/po-http-request-data.interface';
import { PoNetworkService } from '../po-network/po-network.service';
import { PoSchemaDefinitionService } from './../po-schema/po-schema-definition/po-schema-definition.service';
import { PoSchemaService } from './../po-schema/po-schema.service';
import { PoSyncConfig } from './interfaces/po-sync-config.interface';
import { PoSyncResponse } from '../po-sync/interfaces/po-sync-response.interface';
import { PoSyncSchema } from './interfaces/po-sync-schema.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O `PoSyncService` é utilizado para configurar toda a base de dados que receberá as informações que serão
 * armazenadas *offline* vindas do servidor. Nele ocorre toda a preparação dos modelos de dados retornados por
 * cada consulta.
 */
export declare class PoSyncService {
    private poEventSourcingService;
    private poHttpClient;
    private poNetworkService;
    private poSchemaDefinitionService;
    private poSchemaService;
    models: Array<PoEntity>;
    private config;
    private emitter;
    private eventSub;
    private finishSyncSubject;
    private isSyncEnabled;
    private schemas;
    private subscription;
    private syncing;
    private timer;
    constructor(poEventSourcingService: PoEventSourcingService, poHttpClient: PoHttpClientService, poNetworkService: PoNetworkService, poSchemaDefinitionService: PoSchemaDefinitionService, poSchemaService: PoSchemaService);
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
    destroy(): Promise<any>;
    /**
     * Desabilita todos os tipos de sincronização de dados (periódica, reativa e manual).
     *
     * > Para habilitar novamente a sincronização utilize o método [`PoSyncService.enableSync()`](documentation/po-sync#enable-sync).
     */
    disableSync(): void;
    /**
     * <a id="enable-sync"></a>
     * Habilita todos os tipos de sincronização de dados (periódica, reativa e manual).
     *
     * Por padrão, sempre que se inicializa uma aplicação com PO Sync as sincronizações já estão habilitadas.
     */
    enableSync(): void;
    /**
     * Método que disponibiliza a partir de sua inscrição o evento de retorno das operações da fila de eventos que
     * foram enviadas ao servidor. A cada operação enviada para o servidor, será disparado um evento para a inscrição
     * deste método.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @returns {Observable<PoSyncResponse>} Observable com um objeto do tipo `PoSyncResponse`.
     */
    getResponses(): Observable<PoSyncResponse>;
    /**
     * Retorna uma instância de `PoEntity` para um determinado *schema*.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Manipulando os registros de um schema](/guides/sync-fundamentals).
     *
     * @param {string} schemaName Nome do *schema*.
     * @returns {PoEntity} Objeto para efetuar consultas e alterações nos dados.
     */
    getModel(schemaName: string): PoEntity;
    /**
     * Insere uma requisição HTTP na fila de eventos do `po-sync`.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Inserindo requisições HTTP na fila de eventos](/guides/sync-fundamentals).
     *
     * @param {PoHttpRequestData} poHttpRequestData Dados da requisição HTTP.
     * @param {string} customRequestId Identificador customizado da requisição HTTP.
     * @returns {Promise<number>} Promessa com o identificador da requisição HTTP criada.
     */
    insertHttpCommand(requestData: PoHttpRequestData, customRequestId?: string): Promise<number>;
    /**
     * Efetua uma chamada na API do servidor para realizar a carga inicial dos dados. Deve ser chamado apenas uma vez
     * na aplicação, após a preparação dos *schemas* realizada através do método `PoSyncService.prepare()`.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Carga inicial dos dados](/guides/sync-fundamentals).
     *
     * @returns {Observable<Array<{ entity: string, data: Array<any> }>>} Observable que notificará quando a
     * carga inicial for concluída.
     */
    loadData(): Observable<Array<{
        entity: string;
        data: Array<any>;
    }>>;
    /**
     * Responsável por notificar sempre que houver sincronismo.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Notificação pós-sincronização](/guides/sync-fundamentals).
     *
     * @returns {Observable<any>} Observable que é disparado a cada sincronismo realizado.
     */
    onSync(): Observable<any>;
    /**
     * Prepara a aplicação criando os schemas e aplica as configurações.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Preparando a aplicação](/guides/sync-fundamentals).
     *
     * @param {Array<PoSyncSchema>} schemas Lista de *schemas* a serem preparados.
     * @param {PoSyncConfig} config Configurações adicionais.
     * @returns {Promise<any>} Promessa que é resolvida quando a aplicação estiver preparada para a utilização do `po-sync`.
     */
    prepare(schemas: Array<PoSyncSchema>, config?: PoSyncConfig): Promise<any>;
    /**
     * Remove um item da fila de eventos que espera a sincronização.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @param {any} idEventSourcing Identificador do item da fila de eventos.
     * @returns {Promise<any>} Promessa que é resolvida quando o item da fila de eventos é removido.
     */
    removeItemOfSync(idEventSourcing: any): Promise<any>;
    /**
     * Reenvia os comandos pendentes na fila (inclusão, alteração e exclusão) e busca novos dados do servidor.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que resolve o sincronismo disparado.
     */
    resumeSync(): Promise<any>;
    /**
     * Dispara o sincronismo enviando os eventos pendentes (inclusão, alteração e exclusão) e buscando novos dados do servidor.
     *
     * O sincronismo somente será executado depois que o acesso a base de dados local do dispositivo for liberada.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Sincronização manual](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que é resolvida quando o sincronismo for finalizado.
     */
    sync(): Promise<any>;
    private canSync;
    private createSubscribe;
    private finishSync;
    private getOnePage;
    private loadEntityData;
    private reactiveSync;
    private saveSchemas;
    private startSync;
    private startTimer;
    private syncError;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSyncService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoSyncService>;
}
