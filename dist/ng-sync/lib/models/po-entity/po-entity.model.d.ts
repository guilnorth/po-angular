import { PoEventSourcingService } from '../../services/po-event-sourcing';
import { PoQueryBuilder } from './../po-query-builder/po-query-builder.model';
import { PoSchemaService } from '../../services/po-schema';
import { PoSyncSchema } from '../../services/po-sync/interfaces/po-sync-schema.interface';
/**
 * @description
 *
 * Uma instância `PoEntity` representa um *schema* e ela contém métodos que possibilitam manipular seus registros,
 * como por exemplo: buscar, criar e remover.
 *
 * Esta instância pode ser obtida a partir do retorno do método `PoSyncService.getModel('schema name')`.
 */
export declare class PoEntity {
    private eventSourcing;
    private schema;
    private poSchemaService;
    constructor(eventSourcing: PoEventSourcingService, schema: PoSyncSchema, poSchemaService: PoSchemaService);
    /**
     * Busca os registros do *schema*, podendo filtrar o resultado a partir do filtro passado e retornando apenas
     * os campos definidos.
     *
     * Para que esta busca seja concluída é necessário utilizar o método `PoQueryBuilder.exec()`.
     * Veja mais em: [PoQueryBuilder](/documentation/po-query-builder).
     *
     * @param {object} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. E para não mostrar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um método do `PoQueryBuilder`.
     */
    find(filter?: object, fields?: string): PoQueryBuilder;
    /**
     * Busca um registro pelo seu *id*.
     *
     * Para que esta busca seja concluída é necessário utilizar o método `PoQueryBuilder.exec()`.
     * Veja mais em: [PoQueryBuilder](/documentation/po-query-builder).
     *
     * @param {any} id Identificador do registro.
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. E para não mostrar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um método do `PoQueryBuilder`.
     */
    findById(id: any, fields?: string): PoQueryBuilder;
    /**
     * Semelhante ao método `PoEntity.find()`, porém retorna apenas o primeiro registro encontrado na busca.
     *
     * Para que esta busca seja concluída é necessário utilizar o método `PoQueryBuilder.exec()`.
     * Veja mais em: [PoQueryBuilder](/documentation/po-query-builder).
     *
     * @param {any} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. E para não mostrar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um método do `PoQueryBuilder`.
     */
    findOne(filter?: any, fields?: string): PoQueryBuilder;
    /**
     * Remove um registro.
     *
     * @param {object} record Registro que será removido.
     * @param {string} customRequestId Identificador customizado do comando.
     * @returns {Promise} Promessa que é concluída após o registro ser removido.
     */
    remove(record: object, customRequestId?: string): Promise<any>;
    /**
     * Altera ou inclui um registro.
     *
     * > O registro será alterado se ele possuir um *id*, caso contrário um novo registro será criado.
     *
     * @param {object} record Registro que será persistido.
     * @param {string} customRequestId Identificador customizado do comando.
     * @returns {Promise} Promessa que é concluída após o registro ser alterado ou incluído.
     */
    save(record: object, customRequestId?: string): Promise<any>;
    /**
     * Salva uma lista de registros em lote.
     *
     * > Para cada registro da lista, será inserido um novo registro se o mesmo não tiver *id*, caso contrário
     * será contado como uma atualização de um registro existente.
     *
     * @param {Array<object>} records Lista de registros que serão persistidos.
     * @param {Array<string> | string} customRequestIds Identificador customizado do comando.
     *
     * Ao passar uma lista de identificadores, cada índice da lista de identificadores deverá
     * corresponder ao índice do registro na lista de registros.
     * @returns {Promise<any>} Promessa que é concluída após os registros serem alterados ou incluídos.
     */
    saveAll(records: Array<object>, customRequestIds?: Array<string> | string): Promise<any>;
    private create;
    private createEventOperation;
    private isNonLocalRecordChanged;
    private selectSaveType;
    private update;
}
