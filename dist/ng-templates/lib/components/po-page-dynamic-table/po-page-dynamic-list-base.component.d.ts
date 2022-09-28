import { EventEmitter } from '@angular/core';
import { PoBreadcrumb, PoTableColumnSort } from '@po-ui/ng-components';
import { PoPageDynamicTableFilters } from './interfaces/po-page-dynamic-table-filters.interface';
import * as i0 from "@angular/core";
export declare class PoPageDynamicListBaseComponent {
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    /** Endpoint da API dos recursos que serão exibidos. */
    /**
     * @description
     *
     * Endpoint usado pelo template para requisição dos recursos que serão exibidos.
     *
     * Ao realizar requisições de busca, podem ser enviados os parâmetros (caso possuam valor): `page`, `pageSize`, `search` e `order`.
     *
     * Caso a coluna estiver ordenada descendentemente será enviada da seguinte forma: `-name`, se for ordenada
     * ascendentemente será enviada apenas com o nome da coluna, por exemplo: `name`.
     *
     * Exemplo de uma requisição de busca:
     *
     * > `GET {end-point}/{resource}?page=1&pageSize=10&search=components&order=-name`
     *
     * Caso a ação `remove` estiver configurada, será feito uma requisição de exclusão nesse mesmo endpoint passando os campos
     * setados como `key: true`.
     *
     * > `DELETE {end-point}/{keys}`
     *
     * ```
     *  <po-page-dynamic-table
     *    [p-actions]="{ remove: true }"
     *    [p-fields]="[ { property: 'id', key: true } ]"
     *    p-service="/api/po-samples/v1/people"
     *    ...>
     *  </po-page-dynamic-table>
     * ```
     *
     * Resquisição disparada, onde a propriedade `id` é igual a 2:
     *
     * ```
     *  DELETE /api/po-samples/v1/people/2 HTTP/1.1
     *  Host: localhost:4000
     *  Connection: keep-alive
     *  Accept: application/json, text/plain
     *  ...
     * ```
     *
     * Para a ação `removeAll`, será feito uma requisição de exclusão em lote para esse mesmo endpoint passando, uma lista
     * de objetos com os campos setados como `key: true` via `payload`.
     *
     * > `DELETE {end-point}`
     *
     * > `Payload: [ {key}, {key} ... {key} ]`
     *
     * ```
     *  <po-page-dynamic-table
     *    [p-actions]="{ removeAll: true }"
     *    [p-fields]="[ { property: 'id', key: true } ]"
     *    p-service="/api/po-samples/v1/people"
     *    ...>
     *  </po-page-dynamic-table>
     * ```
     *
     * Resquisição disparada, onde foram selecionados 3 itens para serem removidos:
     *
     * ```
     *  DELETE /api/po-samples/v1/people HTTP/1.1
     *  Host: localhost:4000
     *  Connection: keep-alive
     *  Accept: application/json, text/plain
     *  ...
     * ```
     *
     * Request payload:
     *
     * ```
     * [{"id":2},{"id":4},{"id":5}]
     * ```
     *
     * > Caso esteja usando metadados com o template, será disparado uma requisição na inicialização do template para buscar
     * > os metadados da página passando o tipo do metadado esperado e a versão cacheada pelo browser.
     * >
     * > `GET {end-point}/metadata?type=list&version={version}`
     */
    serviceApi: string;
    /** Título da página. */
    title: string;
    /**
     * @optional
     *
     * @description
     * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
     *
     * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
     * Por exemplo: ["idCard", "name", "hireStatus", "age"].
     */
    changeVisibleColumns: EventEmitter<string[]>;
    /**
     * @optional
     *
     * @description
     * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
     *
     * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
     * Por exemplo: ["idCard", "name", "hireStatus", "age"].
     */
    columnRestoreManager: EventEmitter<String[]>;
    /**
     * @optional
     *
     * @description
     *
     * Evento executado ao ordenar colunas da tabela.
     *
     * Recebe um objeto `{ column, type }` onde:
     *
     * - column (`PoTableColumn`): objeto da coluna que foi clicada/ordenada.
     * - type (`PoTableColumnSortType`): tipo da ordenação.
     */
    sortBy: EventEmitter<PoTableColumnSort>;
    private _autoRouter;
    private _columns;
    private _duplicates;
    private _fields;
    private _filters;
    private _keys;
    /**
     * @optional
     *
     * @description
     *
     * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `p-actions`
     *
     * As rotas criadas serão baseadas na propriedade `p-actions`.
     *
     * > Para o correto funcionamento não pode haver nenhuma rota coringa (`**`) especificada.
     *
     * @default false
     */
    set autoRouter(value: boolean);
    get autoRouter(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Lista dos campos usados na tabela e busca avançada.
     *
     *
     * > Caso não seja definido fields a tabela assumirá o comportamento padrão.
     */
    set fields(fields: Array<PoPageDynamicTableFilters>);
    get fields(): Array<PoPageDynamicTableFilters>;
    set columns(value: any[]);
    get columns(): any[];
    set duplicates(value: Array<string>);
    get duplicates(): Array<string>;
    set filters(value: Array<PoPageDynamicTableFilters>);
    get filters(): Array<PoPageDynamicTableFilters>;
    set keys(value: Array<string>);
    get keys(): Array<string>;
    private setFieldsProperties;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicListBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageDynamicListBaseComponent, never, never, { "breadcrumb": "p-breadcrumb"; "serviceApi": "p-service-api"; "title": "p-title"; "autoRouter": "p-auto-router"; "fields": "p-fields"; }, { "changeVisibleColumns": "p-change-visible-columns"; "columnRestoreManager": "p-restore-column-manager"; "sortBy": "p-sort-by"; }, never, never, false>;
}
