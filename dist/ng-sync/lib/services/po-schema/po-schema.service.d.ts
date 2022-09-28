import { PoStorageService } from '@po-ui/ng-storage';
import { PoSchemaDefinitionService } from './po-schema-definition/po-schema-definition.service';
import { PoSyncSchema } from '../po-sync/interfaces/po-sync-schema.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que realiza as operações nos `schemas`.
 */
export declare class PoSchemaService {
    private poSchemaDefinitionService;
    private poStorage;
    constructor(poSchemaDefinitionService: PoSchemaDefinitionService, poStorage: PoStorageService);
    /**
     * Retorna o id a partir de uma chave de um *schema*.
     *
     * @param {string} schemaKey Chave do *schema* em que será realizada a busca do id.
     */
    private static getIdByRecordKey;
    /**
     * Retorna a chave do *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     * @param {boolean} isLocalKey Indica se é uma chave local.
     */
    private static getRecordKey;
    /**
     * Verifica se o dado informado é uma chave de um *schema*.
     *
     * @param {string} data Dado que será verificado se é uma chave de um *schema*.
     * @param {string} schemaName Nome do *schema*.
     */
    private static isSchemaKey;
    /**
     * Cria um novo registro para o *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* em que será criado o registro.
     * @param {object} newRecord Registro que será criado.
     */
    create(schema: PoSyncSchema, newRecord: object): Promise<object>;
    /**
     * Destrói as chaves do *storage* que contém os registros dos *schemas*.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando as chaves referentes aos *schemas* forem destruídas.
     */
    destroySchemasRecords(): Promise<void>;
    /**
     * Retorna o registro referente ao *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     */
    get(schemaName: string, recordId: any): Promise<object>;
    /**
     * Retorna todos os registros referente ao *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     */
    getAll(schemaName: string): Promise<Array<object>>;
    /**
     * Aguarda a liberação do recurso limitado, posteriormente o envolve em um comportamento
     * de bloqueio e desbloqueio.
     *
     * @param {Function} limitedResource Função que será envolvida no comportamento de bloqueio e desbloqueio.
     */
    limitedCallWrap(limitedResource: Function): Promise<any>;
    /**
     * Remove um registro de um *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     */
    remove(schemaName: string, recordId: any): Promise<any>;
    /**
     * Atualiza um registro de um *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* referente ao registro que será alterado.
     * @param {object} record Registro que será atualizado.
     * @param {any} recordId Id do registro que deseja ser alterado. Deve ser utilizado em casos em que o id foi alterado.
     */
    update(schema: PoSyncSchema, record: object, recordId?: any): Promise<object>;
    /**
     * Atualiza todos os registros de um *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* referente aos registros que serão alterados.
     * @param {Array<object>} records Lista de registros que serão alterados.
     */
    updateAll(schema: PoSyncSchema, records: Array<object>): Promise<void>;
    private getRecord;
    private save;
    private saveLocalFields;
    private updateRecordId;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSchemaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoSchemaService>;
}
