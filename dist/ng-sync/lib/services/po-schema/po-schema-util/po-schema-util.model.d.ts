import { PoRequestType } from '../../../models/po-request-type.enum';
import { PoSyncSchema } from '../../po-sync/interfaces/po-sync-schema.interface';
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço utilitário para operações no PoSyncSchema.
 */
export declare class PoSchemaUtil {
    /** Valor `default` para o campo `lastSync`. */
    static readonly defaultLastSync: string;
    /** Nome da chave do identificador interno do sync. */
    static readonly syncInternalIdFieldName: string;
    /** Nome da chave no `storage` para os Schemas. */
    static readonly syncSchemasName: string;
    /**
     * Verica se existem campos locais no *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     *
     * @returns {boolean} Valor do tipo *boolean* que indica se existem campos locais no *schema* informado.
     */
    static containsLocalFields(schema: PoSyncSchema): boolean;
    /**
     * Retorna o valor atual do `lastSync` para determinado *schema*.
     *
     * @param {Array<PoSyncSchema>} storageSchemas Lista de *schemas* a serem pesquisados.
     * @param {string} schemaName Nome do *schema* que se deseja ler o lastSync.
     *
     * @returns {string} Retorna uma *string* com o valor da última sincronização.
     */
    static getLastSync(storageSchemas: Array<PoSyncSchema>, schemaName: string): string;
    /**
     * Retorna a lista de campos locais definidos no *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     */
    static getLocalFieldNames(schema: PoSyncSchema): Array<string>;
    /**
     * Retorna a lista de campos não locais definidos no *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     */
    static getNonLocalFieldNames(schema: PoSyncSchema): Array<string>;
    /**
     * Retorna o `id` referente ao registro do *schema* informado.
     *
     * @param {object} record Registro que será buscado o id.
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     */
    static getRecordId(record: object, schema: PoSyncSchema): any;
    /**
     * Retorna a url correspondente do `PoSyncSchema` dependendo do tipo da requisição `PoRequestType`.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     * @param {PoRequestType} requestType Tipo da requisição.
     */
    static getUrl(schema: PoSyncSchema, requestType: PoRequestType): string;
    /**
     * Compara se dois objetos são iguais baseado na lista de campos.
     *
     * @param {Array<string>} fields Lista de campos a serem considerados na comparação.
     * @param {any} model1 Objeto 1 a ser comparado.
     * @param {any} model2 Objeto 2 a ser comparado.
     */
    static isModelsEqual(fields: Array<string>, model1: any, model2: any): boolean;
    /**
     * Retorna uma lista com dois objetos referentes ao registro informado.
     * O primeiro é o registro com os campos que vão para o servidor e o segundo é com os campos locais.
     *
     * @param {PoSyncSchema} schema **Schema* do registro.
     * @param {object} record Registro que será realizada a separação dos campos locais e do servidor.
     */
    static separateSchemaFields(schema: PoSyncSchema, record: object): {
        serverRecord: object;
        localRecord: object;
    };
}
