import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { PoDialogService, PoLanguageService, PoNotificationService, PoPageAction, PoTableAction, PoTableColumnSort } from '@po-ui/ng-components';
import { PoPageDynamicListBaseComponent } from './po-page-dynamic-list-base.component';
import { PoPageDynamicService } from '../../services/po-page-dynamic/po-page-dynamic.service';
import { PoPageDynamicTableActions } from './interfaces/po-page-dynamic-table-actions.interface';
import { PoPageDynamicTableOptions } from './interfaces/po-page-dynamic-table-options.interface';
import { PoPageCustomizationService } from './../../services/po-page-customization/po-page-customization.service';
import { PoPageDynamicTableActionsService } from './po-page-dynamic-table-actions.service';
import { PoPageDynamicTableCustomAction } from './interfaces/po-page-dynamic-table-custom-action.interface';
import { PoPageDynamicTableCustomTableAction } from './interfaces/po-page-dynamic-table-custom-table-action.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageDynamicListBaseComponent
 *
 * @description
 *
 * O `po-page-dynamic-table` é uma página que exibe uma lista de registros em uma tabela baseado em uma lista de fields,
 * o mesmo também suporta metadados conforme especificado na documentação.
 *
 * ### Utilização via rota
 *
 * Ao utilizar as rotas para carregar o template, o `page-dynamic-table` disponibiliza propriedades para
 * poder especificar o endpoint dos dados e dos metadados. Exemplo de utilização:
 *
 * O componente primeiro irá carregar o metadado da rota definida na propriedade serviceMetadataApi
 * e depois irá buscar da rota definida na propriedade serviceLoadApi
 *
 * > Caso o servidor retornar um erro ao recuperar o metadados, será repassado o metadados salvo em cache,
 * se o cache não existe será disparado uma notificação.
 *
 * ```
 * {
 *   path: 'people',
 *   component: PoPageDynamicTableComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o método HTTP Get
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados utilizando o método HTTP Post
 *   }
 * }
 *
 * ```
 *
 * A requisição dos metadados é feita na inicialização do template para buscar os metadados da página passando o
 * tipo do metadado esperado e a versão cacheada pelo browser.
 *
 * O formato esperado na resposta da requisição está especificado na interface
 * [PoPageDynamicTableMetadata](/documentation/po-page-dynamic-table#po-page-dynamic-table-metadata). Por exemplo:
 *
 * ```
 *  {
 *   version: 1,
 *   title: 'Person Table',
 *   fields: [
 *     { property: 'id', key: true, disabled: true },
 *     { property: 'status' },
 *     { property: 'name' },
 *     { property: 'nickname' },
 *     { property: 'birthdate', label: 'Birth date' },
 *     { property: 'genre' },
 *     { property: 'city' },
 *     { property: 'country' }
 *   ],
 *   keepFilters: true
 * }
 * ```
 *
 * > Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `serviceApi` da seguinte forma:
 * ```
 * GET {end-point}/metadata?type=list&version={version}
 * ```
 *
 * @example
 *
 * <example name="po-page-dynamic-table-basic" title="PO Page Dynamic Table Basic">
 *  <file name="sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-table-people" title="PO Page Dynamic Table - People">
 *  <file name="sample-po-page-dynamic-table-people/sample-po-page-dynamic-table-people.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-people/sample-po-page-dynamic-table-people.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-table-users" title="PO Page Dynamic Table - Users">
 *  <file name="sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.component.ts"> </file>
 *  <file name="sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.service.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-table-hotels" title="PO Page Dynamic Table - Hotels">
 *  <file name="sample-po-page-dynamic-table-hotels/sample-po-page-dynamic-table-hotels.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-hotels/sample-po-page-dynamic-table-hotels.component.ts"> </file>
 * </example>
 */
export declare class PoPageDynamicTableComponent extends PoPageDynamicListBaseComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private poDialogService;
    private poNotification;
    private poPageDynamicService;
    private poPageCustomizationService;
    private poPageDynamicTableActionsService;
    /**
     * Função ou serviço que será executado na inicialização do componente.
     *
     * A propriedade aceita os seguintes tipos:
     * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
     * - `function`: Método que será executado.
     *
     * O retorno desta função deve ser do tipo `PoPageDynamicTableOptions`,
     * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
     *
     * Por exemplo:
     *
     * ```
     * getPageOptions(): PoPageDynamicTableOptions {
     * return {
     *   actions:
     *     { new: 'new', edit: 'edit/:id', remove: true },
     *   fields: [
     *     { property: 'idCard', gridColumns: 6 }
     *   ]
     * };
     * }
     *
     * ```
     * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
     * ```
     *  [p-load]="onLoadOptions.bind(this)"
     * ```
     */
    onLoad: string | (() => PoPageDynamicTableOptions);
    /**
     * @optional
     *
     * @description
     *
     * Mantém na modal de `Busca Avançada` os valores preenchidos do último filtro realizado pelo usuário.
     *
     * @default `false`
     */
    keepFilters: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define que a coluna de ações ficará no lado direito da tabela.
     *
     * @default `false`
     */
    actionRight?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
     *
     * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
     * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
     * rápida também na lista de `disclaimers` a aplicando uma nova busca com a concatenação.
     *
     * Por exemplo, com os seguintes filtros aplicados:
     *   - filtro avançado: `{ name: 'Mike', age: '12' }`
     *   - filtro rápido: `{ search: 'paper' }`
     *
     * A requisição dos dados na API ficará com os parâmetros:
     * ```
     * page=1&pageSize=10&name=Mike&age=12&search=paper
     * ```
     *
     * @default `false`
     */
    concatFilters: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Oculta o botão para remover todos os *disclaimers* do grupo.
     *
     * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
     *
     * @default `false`
     */
    hideRemoveAllDisclaimer?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o botão "Carregar Mais" deixará de ser exibido. Ao chegar no fim da tabela
     * executará a função `p-show-more`.
     *
     * **Regras de utilização:**
     *  - O scroll infinito só funciona para tabelas que utilizam a propriedade `p-height` e que possuem o scroll já na carga inicial dos dados.
     *
     * @default `false`
     */
    infiniteScroll?: boolean;
    hasNext: boolean;
    items: any[];
    literals: any;
    pageActions: Array<PoPageAction>;
    tableActions: Array<PoTableAction>;
    private _actions;
    private _pageCustomActions;
    private _height;
    private _quickSearchWidth;
    private _tableCustomActions;
    private page;
    private currentPage;
    private itemSelectedAction;
    private params;
    private sortedColumn;
    private subscriptions;
    private hasCustomActionWithSelectable;
    private _customPageListActions;
    private _customTableActions;
    private _defaultPageActions;
    private _defaultTableActions;
    private _hideCloseDisclaimers;
    private set defaultPageActions(value);
    private set defaultTableActions(value);
    private set customPageListActions(value);
    private set customTableActions(value);
    /**
     * @optional
     *
     * @description
     *
     * Ações da página e da tabela.
     * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
     */
    set actions(value: PoPageDynamicTableActions);
    get actions(): PoPageDynamicTableActions;
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações customizadas da página que serão incorporadas às ações
     * informadas através da propriedade `p-actions`.
     *
     * Essas ações ficam localizadas na parte superior da página em botões com ações.
     *
     * Exemplo de utilização:
     * ```
     * [
     *  { label: 'Export', action: this.export.bind(this) },
     *  { label: 'Print', action: this.print.bind(this) }
     * ];
     * ```
     */
    set pageCustomActions(value: Array<PoPageDynamicTableCustomAction>);
    get pageCustomActions(): Array<PoPageDynamicTableCustomAction>;
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações customizadas na tabela da página que serão incorporadas às ações
     * informadas através da propriedade `p-actions`.
     *
     * Exemplo de utilização:
     * ```
     * [
     *  { label: 'Apply discount', action: this.applyDiscount.bind(this) },
     *  { label: 'Details', action: this.details.bind(this) }
     * ];
     * ```
     * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
     */
    set tableCustomActions(value: Array<PoPageDynamicTableCustomTableAction>);
    get tableCustomActions(): Array<PoPageDynamicTableCustomTableAction>;
    /**
     * @optional
     *
     * @description
     *
     * Largura do campo de busca, utilizando o *Grid System*,
     * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
     * conforme resolução de tela para manter a consistência do layout.
     */
    set quickSearchWidth(value: number);
    get quickSearchWidth(): number;
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da tabela em *pixels* e fixa o cabeçalho.
     */
    set height(value: number);
    get height(): number;
    /**
     * @optional
     *
     * @description
     *
     * Lista de filtros que terão a opção de fechar ocultada
     * em seu respectivo disclaimer. Utilizar o atributo `property` do campo.
     *
     * Exemplo de utilização:
     * ```
     * ['city','name'];
     * ```
     */
    set hideCloseDisclaimers(value: Array<string>);
    get hideCloseDisclaimers(): Array<string>;
    constructor(router: Router, activatedRoute: ActivatedRoute, poDialogService: PoDialogService, poNotification: PoNotificationService, poPageDynamicService: PoPageDynamicService, poPageCustomizationService: PoPageCustomizationService, poPageDynamicTableActionsService: PoPageDynamicTableActionsService, languageService: PoLanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onAdvancedSearch(filter: any): void;
    onChangeDisclaimers(disclaimers: any): void;
    onQuickSearch(termTypedInQuickSearch: any): void;
    onSort(sortedColumn: PoTableColumnSort): void;
    onChangeVisibleColumns(value: any): void;
    onColumnRestoreManager(value: Array<String>): void;
    onSortBy(sortedColumn: PoTableColumnSort): void;
    showMore(): void;
    get enableSelectionTable(): boolean;
    get hasActionRemoveAll(): boolean;
    /**
     * Função que realiza a atualização dos dados da tabela.
     *
     * Para utilizá-la é necessário capturar a instância do `page dynamic table`, como por exemplo:
     *
     * ``` html
     * <po-page-dynamic-table #dynamicTable [p-service-api]="serviceApi"></po-page-dynamic-table>
     * ```
     *
     * ``` javascript
     * import { PoPageDynamicTableComponent, PoDynamicFormField } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild('dynamicTable', { static: true }) dynamicTable: PoPageDynamicTableComponent;
     *
     * pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
     * {
     *   label: 'Update',
     *   action: this.updateTable.bind(this),
     *   icon: 'po-icon-refresh'
     * }]
     *
     * updateTable() {
     *   this.dynamicTable.updateDataTable();
     * }
     * ```
     *
     *
     * @param {{page: number, key: value }} filter Propriedade para envio de um filtro customizado.
     * Exemplo de envio:
     *
     *```
     * this.dynamicTable.updateDataTable({page: 3, search: 'Brasil'});
     * ```
     * Caso não seja passado um filtro customizado para o método `updateDataTable` a tabela será atualizada conforme a página do ultimo item modificado.
     */
    updateDataTable(filter?: any): void;
    private confirmRemove;
    private confirmRemoveAll;
    private formatUniqueKey;
    private getOrderParam;
    private loadData;
    private getMetadata;
    private navigateTo;
    private createConcatenatedUrl;
    private openDetail;
    private executeDetail;
    private getPathFromNewUrl;
    private openDuplicate;
    private executeDuplicate;
    private openEdit;
    private executeEditAction;
    private openEditUrl;
    private modifyUITableItem;
    private openNew;
    private executeNew;
    /**
     * Caso exista mais de um identificador, será concatenado com '|'.
     *
     * Ex: { id: 1, company: 'po' }
     *
     * Para o endpoint /resources/:id será executada a url /resources/1|po
     */
    private remove;
    private deleteAction;
    private removeFromUI;
    private removeAll;
    private getSelectedItemsKeys;
    private returnResourcesKeys;
    private deleteAllAction;
    private removeLocalItems;
    private resolveUrl;
    private setPageActions;
    private transformCustomActionsToPageListAction;
    private transformTableCustomActionsToTableActions;
    private isDisablePageCustomAction;
    private callPageCustomAction;
    private callTableCustomAction;
    private setRemoveAllAction;
    private disableRemoveAll;
    private setTableActions;
    private loadDataFromAPI;
    private getInitialValuesFromFilter;
    private loadOptionsOnInitialize;
    private getPoDynamicPageOptions;
    private showRemove;
    private updateFilterValue;
    private updatePageActions;
    private updateTableActions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageDynamicTableComponent, "po-page-dynamic-table", never, { "onLoad": "p-load"; "keepFilters": "p-keep-filters"; "actionRight": "p-actions-right"; "concatFilters": "p-concat-filters"; "hideRemoveAllDisclaimer": "p-hide-remove-all-disclaimer"; "infiniteScroll": "p-infinite-scroll"; "actions": "p-actions"; "pageCustomActions": "p-page-custom-actions"; "tableCustomActions": "p-table-custom-actions"; "quickSearchWidth": "p-quick-search-width"; "height": "p-height"; "hideCloseDisclaimers": "p-hide-close-disclaimers"; }, {}, never, never, false>;
}
