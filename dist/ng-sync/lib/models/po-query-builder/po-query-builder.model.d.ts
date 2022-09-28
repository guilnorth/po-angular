import { PoResponseApi } from './../../services/po-http-client/interfaces/po-response-api.interface';
import { PoSchemaService } from './../../services/po-schema';
import { PoSyncSchema } from '../../services/po-sync/interfaces/po-sync-schema.interface';
/**
 * @description
 *
 * Classe utilitária para construir consultas sobre os registros de um *schema*.
 *
 * A utilização dos métodos desta classe é feita a partir do retorno do método `PoEntity.find()`. Por exemplo,
 * para utilizar o método `PoQueryBuilder.page()`, é necessário:
 *
 * ``` typescript
 * PoSyncService.getModel('schema name').find().page(2).exec();
 * ```
 *
 * O `PoQueryBuilder` foi projetado para que os seus métodos sejam
 * chamados em cascata e ao final desse encadeamento invocar o método
 * `PoQueryBuilder.exec()` para que a busca seja concluída. Por exemplo:
 *
 * ``` typescript
 * PoSyncService
 *   .getModel('schema name')
 *   .find()
 *   .page(2)
 *   .pageSize(5)
 *   .sort()
 *   .exec();
 * ```
 */
export declare class PoQueryBuilder {
    private poSchemaService;
    private schema;
    private fields;
    private filters;
    private _limit;
    private _page;
    private _pageSize;
    private _sort;
    constructor(poSchemaService: PoSchemaService, schema: PoSyncSchema);
    /**
     * Ao final da chamada dos métodos do `PoQueryBuilder` utilizados, este método deve ser chamado para que a busca seja concluída.
     *
     * @return {Promise<PoResponseApi | object>} Registros do *schema* na qual foi aplicado a consulta.
     */
    exec(): Promise<PoResponseApi | object>;
    /**
     * Aplica filtros sobre os registros, baseados nos campos e valores definidos como filtro. Por exemplo:
     *
     * ```
     * PoQueryBuilder.filter({ name: 'Marie', age: 24 });
     * ```
     * Retorna todos os registros que contenham a propriedade `name` igual a Marie e `age` igual a 24.
     *
     * @param {object} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     *
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    filter(filter?: object): PoQueryBuilder;
    /**
     * Limita o número de registros que serão retornados.
     *
     * @param {number} limit Número de registros retornados.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    limit(limit: number): PoQueryBuilder;
    /**
     * Especifica a página de registros que se deseja retornar.
     *
     * @param {number} page Número da página.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    page(page: number): PoQueryBuilder;
    /**
     * Define quantos elementos serão retornados por página.
     *
     * @param {number} pageSize Número de registros por página.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    pageSize(pageSize: number): PoQueryBuilder;
    /**
     * Utilizado para definir quais campos do *schema* serão retornados na consulta.
     *
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. Para não retornar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     *
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    select(fields: string): PoQueryBuilder;
    /**
     * Ordena os registros por um campo.
     *
     * @param {string} field Campo a ser ordenado. Para ordenar de forma decrescente basta colocar o caractere `-`
     * na frente do campo. Por exemplo:
     * ```
     * PoQueryBuilder.sort('-name');
     * ```
     *
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    sort(field: string): PoQueryBuilder;
    /**
     * Essa função serve como alias para o `PoQueryBuilder.filter()`. É utilizada somente para dar maior legibilidade ao código.
     *
     * @param {object} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    where(filter: object): PoQueryBuilder;
    private applyFields;
    private applyFilters;
    private groupFields;
    private paginate;
    private order;
    private removeDuplicate;
    private removeFieldsData;
    private removeRestrictedFields;
}
