import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Subscription, EMPTY, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { InputBoolean, PoTableColumnSortType, poLocaleDefault } from '@po-ui/ng-components';
import * as util from '../../utils/util';
import { PoPageDynamicDetailComponent } from '../po-page-dynamic-detail/po-page-dynamic-detail.component';
import { poPageDynamicTableLiteralsDefault } from './po-page-dynamic-table-literals';
import { PoPageDynamicListBaseComponent } from './po-page-dynamic-list-base.component';
import { PoPageDynamicService } from '../../services/po-page-dynamic/po-page-dynamic.service';
import { isExternalLink, openExternalLink, removeDuplicateItems } from '../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@po-ui/ng-components";
import * as i3 from "../../services/po-page-dynamic/po-page-dynamic.service";
import * as i4 from "./../../services/po-page-customization/po-page-customization.service";
import * as i5 from "./po-page-dynamic-table-actions.service";
import * as i6 from "../po-page-dynamic-search/po-page-dynamic-search.component";
const PAGE_SIZE_DEFAULT = 10;
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
export class PoPageDynamicTableComponent extends PoPageDynamicListBaseComponent {
    constructor(router, activatedRoute, poDialogService, poNotification, poPageDynamicService, poPageCustomizationService, poPageDynamicTableActionsService, languageService) {
        super();
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poDialogService = poDialogService;
        this.poNotification = poNotification;
        this.poPageDynamicService = poPageDynamicService;
        this.poPageCustomizationService = poPageCustomizationService;
        this.poPageDynamicTableActionsService = poPageDynamicTableActionsService;
        /**
         * @optional
         *
         * @description
         *
         * Mantém na modal de `Busca Avançada` os valores preenchidos do último filtro realizado pelo usuário.
         *
         * @default `false`
         */
        this.keepFilters = false;
        /**
         * @optional
         *
         * @description
         *
         * Define que a coluna de ações ficará no lado direito da tabela.
         *
         * @default `false`
         */
        this.actionRight = false;
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
        this.concatFilters = false;
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
        this.hideRemoveAllDisclaimer = false;
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
        this.infiniteScroll = false;
        this.hasNext = false;
        this.items = [];
        this.pageActions = [];
        this.tableActions = [];
        this._actions = {};
        this._pageCustomActions = [];
        this._tableCustomActions = [];
        this.page = 1;
        this.currentPage = 1;
        this.params = {};
        this.subscriptions = new Subscription();
        this.hasCustomActionWithSelectable = false;
        this._customPageListActions = [];
        this._customTableActions = [];
        this._defaultPageActions = [];
        this._defaultTableActions = [];
        this._hideCloseDisclaimers = [];
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poPageDynamicTableLiteralsDefault[poLocaleDefault],
            ...poPageDynamicTableLiteralsDefault[language]
        };
    }
    set defaultPageActions(value) {
        this._defaultPageActions = value;
        this.updatePageActions();
    }
    set defaultTableActions(value) {
        this._defaultTableActions = value;
        this.updateTableActions();
    }
    set customPageListActions(value) {
        this._customPageListActions = value;
        this.updatePageActions();
    }
    set customTableActions(value) {
        this._customTableActions = value;
        this.updateTableActions();
    }
    /**
     * @optional
     *
     * @description
     *
     * Ações da página e da tabela.
     * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
     */
    set actions(value) {
        this._actions = value && typeof value === 'object' && Object.keys(value).length > 0 ? value : {};
        this.setPageActions(this.actions);
        this.setRemoveAllAction();
        this.setTableActions(this.actions);
    }
    get actions() {
        return this._actions;
    }
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
    set pageCustomActions(value) {
        this._pageCustomActions = Array.isArray(value) ? value : [];
        this.customPageListActions = this.transformCustomActionsToPageListAction(this.pageCustomActions);
        this.hasCustomActionWithSelectable = this.pageCustomActions.some(customAction => customAction.selectable);
    }
    get pageCustomActions() {
        return this._pageCustomActions;
    }
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
    set tableCustomActions(value) {
        this._tableCustomActions = Array.isArray(value) ? value : [];
        this.customTableActions = this.transformTableCustomActionsToTableActions(this.tableCustomActions);
    }
    get tableCustomActions() {
        return this._tableCustomActions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Largura do campo de busca, utilizando o *Grid System*,
     * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
     * conforme resolução de tela para manter a consistência do layout.
     */
    set quickSearchWidth(value) {
        this._quickSearchWidth = util.convertToInt(value);
    }
    get quickSearchWidth() {
        return this._quickSearchWidth;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da tabela em *pixels* e fixa o cabeçalho.
     */
    set height(value) {
        this._height = util.convertToInt(value);
    }
    get height() {
        return this._height;
    }
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
    set hideCloseDisclaimers(value) {
        this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
    }
    get hideCloseDisclaimers() {
        return this._hideCloseDisclaimers;
    }
    ngOnInit() {
        this.loadDataFromAPI();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onAdvancedSearch(filter) {
        this.subscriptions.add(this.loadData({ page: 1, ...filter }).subscribe());
        this.params = filter;
        if (this.keepFilters) {
            this.updateFilterValue(filter);
        }
    }
    onChangeDisclaimers(disclaimers) {
        const filter = {};
        disclaimers.forEach(disclaimer => {
            filter[disclaimer.property] = disclaimer.value;
        });
        this.onAdvancedSearch(filter);
    }
    onQuickSearch(termTypedInQuickSearch) {
        const quickSearchParam = termTypedInQuickSearch ? { search: termTypedInQuickSearch } : {};
        this.params = this.concatFilters ? { ...this.params, ...quickSearchParam } : { ...quickSearchParam };
        this.subscriptions.add(this.loadData(termTypedInQuickSearch ? { page: 1, ...this.params } : undefined).subscribe());
    }
    onSort(sortedColumn) {
        this.sortedColumn = sortedColumn;
    }
    onChangeVisibleColumns(value) {
        this.changeVisibleColumns.emit(value);
    }
    onColumnRestoreManager(value) {
        this.columnRestoreManager.emit(value);
    }
    onSortBy(sortedColumn) {
        this.sortBy.emit(sortedColumn);
    }
    showMore() {
        this.subscriptions.add(this.loadData({ page: ++this.page, ...this.params }).subscribe());
    }
    get enableSelectionTable() {
        return this.hasActionRemoveAll || this.hasCustomActionWithSelectable;
    }
    get hasActionRemoveAll() {
        return !!this.actions.removeAll;
    }
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
    updateDataTable(filter) {
        const indexItemSelected = this.items.findIndex(item => item === this.itemSelectedAction);
        const pageNumber = Math.floor(indexItemSelected / PAGE_SIZE_DEFAULT);
        this.currentPage = pageNumber < 0 ? this.currentPage : pageNumber + 1;
        if (this.currentPage === undefined) {
            this.currentPage = 1;
        }
        if (filter) {
            this.subscriptions.add(this.loadData(filter).subscribe());
        }
        else {
            this.subscriptions.add(this.loadData({ page: this.currentPage, ...this.params }).subscribe());
        }
    }
    confirmRemove(actionRemove, actionBeforeRemove, item) {
        const confirmOptions = {
            title: this.literals.confirmRemoveTitle,
            message: this.literals.confirmRemoveMessage,
            confirm: this.remove.bind(this, item, actionRemove, actionBeforeRemove)
        };
        this.poDialogService.confirm(confirmOptions);
    }
    confirmRemoveAll(actionRemoveAll, actionBeforeRemoveAll) {
        const confirmOptions = {
            title: this.literals.confirmRemoveAllTitle,
            message: this.literals.confirmRemoveAllMessage,
            confirm: this.removeAll.bind(this, actionRemoveAll, actionBeforeRemoveAll)
        };
        this.poDialogService.confirm(confirmOptions);
    }
    formatUniqueKey(item) {
        const keys = util.mapObjectByProperties(item, this.keys);
        return util.valuesFromObject(keys).join('|');
    }
    getOrderParam(sortedColumn = { type: undefined }) {
        const { column, type } = sortedColumn;
        if (!column) {
            return {};
        }
        if (type === PoTableColumnSortType.Descending) {
            return { order: `-${column.property}` };
        }
        return { order: `${column.property}` };
    }
    loadData(params = {}) {
        const key = this.keys ? this.keys[0] : 'id';
        if (!this.serviceApi) {
            this.poNotification.error(this.literals.loadDataErrorNotification);
            return EMPTY;
        }
        const orderParam = this.getOrderParam(this.sortedColumn);
        const defaultParams = { page: 1, pageSize: PAGE_SIZE_DEFAULT };
        const fullParams = { ...defaultParams, ...params, ...orderParam };
        return this.poPageDynamicService.getResources(fullParams).pipe(tap(response => {
            removeDuplicateItems(response.items, this.items, key);
            this.items = fullParams.page === 1 ? response.items : [...this.items, ...response.items];
            this.page = fullParams.page;
            this.hasNext = response.hasNext;
        }));
    }
    getMetadata(serviceApiFromRoute, onLoad) {
        if (serviceApiFromRoute) {
            return this.poPageDynamicService.getMetadata().pipe(tap(response => {
                this.autoRouter = response.autoRouter || this.autoRouter;
                this.actions = response.actions || this.actions;
                this.breadcrumb = response.breadcrumb || this.breadcrumb;
                this.fields = response.fields || this.fields;
                this.title = response.title || this.title;
                this.pageCustomActions = response.pageCustomActions || this.pageCustomActions;
                this.tableCustomActions = response.tableCustomActions || this.tableCustomActions;
                this.keepFilters = response.keepFilters || this.keepFilters;
                this.concatFilters = response.concatFilters || this.concatFilters;
                this.hideRemoveAllDisclaimer = response.hideRemoveAllDisclaimer || this.hideRemoveAllDisclaimer;
                this.hideCloseDisclaimers = response.hideCloseDisclaimers || this.hideCloseDisclaimers;
                this.quickSearchWidth = response.quickSearchWidth || this.quickSearchWidth;
            }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
        }
        return this.loadOptionsOnInitialize(onLoad);
    }
    // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
    navigateTo(route, forceStopAutoRouter = false) {
        this.router.navigate([route.url || route.path], { queryParams: route.params }).catch(() => {
            if (forceStopAutoRouter || !this.autoRouter) {
                return;
            }
            this.router.config.unshift({
                path: route.path,
                component: route.component,
                data: { serviceApi: this.serviceApi, autoRouter: true }
            });
            this.navigateTo(route, true);
        });
    }
    createConcatenatedUrl(concatKeys, url, selectedItem) {
        const keys = this.keys.map(key => encodeURIComponent(selectedItem[key])).join();
        return concatKeys ? `${url}/${keys}` : url;
    }
    openDetail(action, item) {
        const id = this.formatUniqueKey(item);
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeDetail(this.actions.beforeDetail, id, item)
            .subscribe((beforeDetailResult) => this.executeDetail(action, beforeDetailResult, id, item)));
    }
    executeDetail(action, beforeDetailResult, id, item) {
        const before = beforeDetailResult ?? {};
        const allowAction = typeof before.allowAction === 'boolean' ? before.allowAction : true;
        const { newUrl } = before;
        if (allowAction && action) {
            if (newUrl) {
                const path = this.getPathFromNewUrl(newUrl, id);
                return this.navigateTo({ path });
            }
            if (typeof action === 'string') {
                const url = this.resolveUrl(item, action);
                this.navigateTo({ path: action, url, component: PoPageDynamicDetailComponent });
            }
            else {
                action(id, item);
            }
        }
    }
    getPathFromNewUrl(newUrl, id) {
        if (newUrl.includes(':id')) {
            return newUrl.replace(/:id/g, id);
        }
        return newUrl;
    }
    openDuplicate(actionDuplicate, item) {
        const id = this.formatUniqueKey(item);
        const duplicates = util.removeKeysProperties(this.keys, util.mapObjectByProperties(item, this.duplicates));
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeDuplicate(this.actions.beforeDuplicate, id, duplicates)
            .subscribe((beforeDuplicateResult) => this.executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates)));
    }
    executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates) {
        const before = beforeDuplicateResult ?? {};
        const allowAction = typeof before.allowAction === 'boolean' ? before.allowAction : true;
        const beforeDuplicateResource = before.resource;
        const newAction = before.newUrl ?? actionDuplicate;
        if (allowAction && actionDuplicate) {
            if (typeof beforeDuplicateResource === 'object' && beforeDuplicateResource !== null) {
                duplicates = util.removeKeysProperties(this.keys, beforeDuplicateResource);
            }
            if (typeof newAction === 'string') {
                return this.navigateTo({ path: newAction, params: { duplicate: JSON.stringify(duplicates) } });
            }
            return newAction(duplicates);
        }
    }
    openEdit(actionEdit, item) {
        const id = this.formatUniqueKey(item);
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeEdit(this.actions.beforeEdit, id, item)
            .pipe(switchMap((beforeEditResult) => this.executeEditAction(actionEdit, beforeEditResult, item, id)))
            .subscribe());
    }
    executeEditAction(action, beforeEditResult, item, id) {
        const newEditAction = beforeEditResult?.newUrl ?? action;
        const allowAction = beforeEditResult?.allowAction ?? true;
        if (!allowAction) {
            return EMPTY;
        }
        if (typeof newEditAction === 'string') {
            this.openEditUrl(newEditAction, item);
        }
        else {
            const updatedItem = newEditAction(id, item);
            if (typeof updatedItem === 'object' && updatedItem !== null) {
                this.modifyUITableItem(item, util.removeKeysProperties(this.keys, updatedItem));
            }
        }
        return EMPTY;
    }
    openEditUrl(path, item) {
        const url = this.resolveUrl(item, path);
        this.navigateTo({ path, url });
    }
    modifyUITableItem(currentItem, newItemValue) {
        const tableItem = this.items.findIndex(item => item === currentItem);
        this.items[tableItem] = { ...currentItem, ...newItemValue };
    }
    openNew(actionNew) {
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeNew(this.actions.beforeNew)
            .subscribe((beforeNewResult) => this.executeNew(actionNew, beforeNewResult)));
    }
    executeNew(actionNew, beforeNewResult) {
        const before = beforeNewResult ?? {};
        const allowAction = typeof before.allowAction === 'boolean' ? before.allowAction : true;
        const { newUrl } = before;
        if (allowAction && actionNew) {
            if (newUrl) {
                return this.navigateTo({ path: newUrl });
            }
            if (typeof actionNew === 'string') {
                return this.navigateTo({ path: actionNew });
            }
            return actionNew();
        }
    }
    /**
     * Caso exista mais de um identificador, será concatenado com '|'.
     *
     * Ex: { id: 1, company: 'po' }
     *
     * Para o endpoint /resources/:id será executada a url /resources/1|po
     */
    remove(item, actionRemove, actionBeforeRemove) {
        const uniqueKey = this.formatUniqueKey(item);
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeRemove(actionBeforeRemove, uniqueKey, item)
            .pipe(switchMap(beforeRemove => this.deleteAction(item, actionRemove, beforeRemove)))
            .subscribe());
    }
    deleteAction(item, actionRemove, beforeRemove) {
        const { allowAction, newUrl } = beforeRemove || {};
        const allow = allowAction ?? true;
        if (allow) {
            let uniqueKey = this.formatUniqueKey(item);
            const resourceToRemoveKey = this.returnResourcesKeys([item]);
            if (typeof actionRemove === 'boolean' || newUrl) {
                uniqueKey = newUrl ? undefined : uniqueKey;
                return this.poPageDynamicService
                    .deleteResource(uniqueKey, newUrl)
                    .pipe(map(() => this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification)));
            }
            return of(actionRemove(uniqueKey, item)).pipe(tap(remove => {
                const removeItem = remove ?? false;
                this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification, removeItem);
            }));
        }
        return of({});
    }
    removeFromUI(items, message, remove = true) {
        if (remove === true && items?.length) {
            this.removeLocalItems(items);
            this.poNotification.success(message);
        }
    }
    removeAll(actionRemoveAll, actionBeforeRemoveAll) {
        const originalResourcesKeys = this.getSelectedItemsKeys();
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeRemoveAll(actionBeforeRemoveAll, originalResourcesKeys)
            .pipe(switchMap(beforeRemove => this.deleteAllAction(actionRemoveAll, beforeRemove, originalResourcesKeys)))
            .subscribe());
    }
    getSelectedItemsKeys() {
        const resources = this.items.filter(item => item.$selected);
        if (resources.length === 0) {
            return;
        }
        return this.returnResourcesKeys(resources);
    }
    returnResourcesKeys(resources) {
        return util.mapArrayByProperties(resources, this.keys);
    }
    deleteAllAction(actionRemoveAll, beforeRemoveAll, originalResources) {
        const { allowAction, newUrl, resources } = beforeRemoveAll ?? {};
        const allow = allowAction ?? true;
        const resourcestoDelete = resources ?? originalResources;
        if (allow && Array.isArray(resourcestoDelete)) {
            if (typeof actionRemoveAll === 'boolean' || newUrl) {
                return this.poPageDynamicService.deleteResources(resourcestoDelete, newUrl).pipe(tap(() => {
                    this.removeFromUI(resourcestoDelete, this.literals.removeAllSuccessNotification);
                }));
            }
            return of(actionRemoveAll(resourcestoDelete)).pipe(tap(removeItems => this.removeFromUI(removeItems, this.literals.removeSuccessNotification)));
        }
        return of({});
    }
    removeLocalItems(itemsKeysToRemove = []) {
        if (itemsKeysToRemove.length) {
            this.items = this.items.filter(item => {
                const itemKey = this.formatUniqueKey(item);
                return !itemsKeysToRemove.find(itemKeyToRemove => util.valuesFromObject(itemKeyToRemove).join('|') === itemKey);
            });
        }
    }
    resolveUrl(item, path) {
        const uniqueKey = this.formatUniqueKey(item);
        return path.replace(/:id/g, uniqueKey);
    }
    setPageActions(actions) {
        if (actions?.new) {
            this.defaultPageActions = [{ label: this.literals.pageAction, action: this.openNew.bind(this, actions.new) }];
        }
    }
    transformCustomActionsToPageListAction(customActions) {
        /* istanbul ignore next */
        return customActions.map(customAction => ({
            label: customAction.label,
            action: this.callPageCustomAction.bind(this, customAction),
            disabled: this.isDisablePageCustomAction.bind(this, customAction),
            ...(customAction.icon && { icon: customAction.icon }),
            visible: customAction.visible
        }));
    }
    transformTableCustomActionsToTableActions(tableCustomActions) {
        return tableCustomActions.map(tableCustomAction => ({
            label: tableCustomAction.label,
            icon: tableCustomAction.icon,
            action: this.callTableCustomAction.bind(this, tableCustomAction),
            disabled: tableCustomAction.disabled,
            visible: tableCustomAction.visible
        }));
    }
    isDisablePageCustomAction(customAction) {
        return customAction.selectable && !this.getSelectedItemsKeys();
    }
    callPageCustomAction(customAction) {
        if (customAction.action) {
            const selectedItems = customAction.selectable ? this.getSelectedItemsKeys() : undefined;
            const sendCustomActionSubscription = this.poPageDynamicTableActionsService
                .customAction(customAction.action, selectedItems)
                .subscribe();
            this.subscriptions.add(sendCustomActionSubscription);
        }
        else if (customAction.url) {
            this.navigateTo({ path: customAction.url });
        }
    }
    callTableCustomAction(customAction, selectedItem) {
        this.itemSelectedAction = selectedItem;
        if (customAction.action) {
            const sendCustomActionSubscription = this.poPageDynamicTableActionsService
                .customAction(customAction.action, selectedItem)
                .subscribe(updatedItem => {
                if (typeof updatedItem === 'object' && updatedItem !== null) {
                    this.modifyUITableItem(selectedItem, util.removeKeysProperties(this.keys, updatedItem));
                }
            });
            this.subscriptions.add(sendCustomActionSubscription);
        }
        else if (customAction.url) {
            if (isExternalLink(customAction.url)) {
                openExternalLink(this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem));
            }
            else {
                this.navigateTo({
                    path: this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem)
                });
            }
        }
    }
    setRemoveAllAction() {
        const action = this._actions;
        if (this.showRemove(action.removeAll)) {
            this.defaultPageActions = [
                ...this._defaultPageActions,
                {
                    label: this.literals.pageActionRemoveAll,
                    action: this.confirmRemoveAll.bind(this, action.removeAll, action.beforeRemoveAll),
                    disabled: this.disableRemoveAll.bind(this)
                }
            ];
        }
    }
    disableRemoveAll() {
        return !this.getSelectedItemsKeys();
    }
    setTableActions(actions) {
        if (actions) {
            const visibleRemove = this.showRemove(actions.remove);
            this.defaultTableActions = [
                {
                    action: this.openDetail.bind(this, actions.detail),
                    label: this.literals.tableActionView,
                    visible: !!this._actions.detail
                },
                {
                    action: this.openEdit.bind(this, actions.edit),
                    label: this.literals.tableActionEdit,
                    visible: !!this._actions.edit
                },
                {
                    action: this.openDuplicate.bind(this, actions.duplicate),
                    label: this.literals.tableActionDuplicate,
                    visible: !!this._actions.duplicate
                },
                {
                    action: this.confirmRemove.bind(this, actions.remove, actions.beforeRemove),
                    label: this.literals.tableActionDelete,
                    separator: true,
                    type: 'danger',
                    visible: visibleRemove
                }
            ];
        }
    }
    loadDataFromAPI() {
        const { serviceApi: serviceApiFromRoute, serviceMetadataApi, serviceLoadApi } = this.activatedRoute.snapshot.data;
        const onLoad = serviceLoadApi || this.onLoad;
        this.serviceApi = serviceApiFromRoute || this.serviceApi;
        this.poPageDynamicService.configServiceApi({ endpoint: this.serviceApi, metadata: serviceMetadataApi });
        const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
        const data$ = this.loadData();
        this.subscriptions.add(metadata$
            .pipe(switchMap(() => {
            const initialFilters = this.getInitialValuesFromFilter();
            if (!Object.keys(initialFilters).length) {
                return data$;
            }
            return EMPTY;
        }))
            .subscribe());
    }
    getInitialValuesFromFilter() {
        const initialFilters = this.filters.reduce((result, item) => Object.assign(result, { [item.property]: item.initValue }), {});
        Object.keys(initialFilters).forEach(key => {
            if (!initialFilters[key]) {
                delete initialFilters[key];
            }
        });
        return initialFilters;
    }
    loadOptionsOnInitialize(onLoad) {
        if (onLoad) {
            return this.getPoDynamicPageOptions(onLoad).pipe(tap(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
        }
        return of(null);
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            fields: this.fields,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            title: this.title,
            keepFilters: this.keepFilters,
            concatFilters: this.concatFilters,
            hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
            hideCloseDisclaimers: this.hideCloseDisclaimers,
            pageCustomActions: this.pageCustomActions,
            tableCustomActions: this.tableCustomActions,
            quickSearchWidth: this.quickSearchWidth
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'fields',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                },
                {
                    nameProp: 'keepFilters'
                },
                {
                    nameProp: 'quickSearchWidth'
                },
                {
                    nameProp: 'concatFilters'
                },
                {
                    nameProp: 'hideRemoveAllDisclaimer'
                },
                {
                    nameProp: 'hideCloseDisclaimers'
                },
                {
                    nameProp: 'pageCustomActions',
                    merge: true,
                    keyForMerge: 'label'
                },
                {
                    nameProp: 'tableCustomActions',
                    merge: true,
                    keyForMerge: 'label'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
    showRemove(actionRemove) {
        const action = actionRemove ?? false;
        if (typeof action === 'boolean') {
            return action;
        }
        return true;
    }
    updateFilterValue(filter) {
        return this.fields.map(item => {
            if (filter.hasOwnProperty(item.property)) {
                item.initValue = filter[item.property];
            }
        });
    }
    updatePageActions() {
        this.pageActions = [...this._defaultPageActions, ...this._customPageListActions];
    }
    updateTableActions() {
        const defaultTableActionsWithoutActionDelete = this._defaultTableActions.filter(tableAction => tableAction.label !== this.literals.tableActionDelete);
        const tableActionDelete = this._defaultTableActions.find(tableAction => tableAction.label === this.literals.tableActionDelete);
        const newTableActions = [...defaultTableActionsWithoutActionDelete, ...this._customTableActions];
        if (tableActionDelete) {
            newTableActions.push(tableActionDelete);
        }
        this.tableActions = newTableActions;
    }
}
PoPageDynamicTableComponent.ɵfac = function PoPageDynamicTableComponent_Factory(t) { return new (t || PoPageDynamicTableComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(i3.PoPageDynamicService), i0.ɵɵdirectiveInject(i4.PoPageCustomizationService), i0.ɵɵdirectiveInject(i5.PoPageDynamicTableActionsService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicTableComponent, selectors: [["po-page-dynamic-table"]], inputs: { onLoad: ["p-load", "onLoad"], keepFilters: ["p-keep-filters", "keepFilters"], actionRight: ["p-actions-right", "actionRight"], concatFilters: ["p-concat-filters", "concatFilters"], hideRemoveAllDisclaimer: ["p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer"], infiniteScroll: ["p-infinite-scroll", "infiniteScroll"], actions: ["p-actions", "actions"], pageCustomActions: ["p-page-custom-actions", "pageCustomActions"], tableCustomActions: ["p-table-custom-actions", "tableCustomActions"], quickSearchWidth: ["p-quick-search-width", "quickSearchWidth"], height: ["p-height", "height"], hideCloseDisclaimers: ["p-hide-close-disclaimers", "hideCloseDisclaimers"] }, features: [i0.ɵɵProvidersFeature([PoPageDynamicService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 18, consts: [[3, "p-actions", "p-breadcrumb", "p-hide-close-disclaimers", "p-filters", "p-keep-filters", "p-concat-filters", "p-hide-remove-all-disclaimer", "p-quick-search-width", "p-title", "p-advanced-search", "p-change-disclaimers", "p-quick-search"], [3, "p-sort", "p-actions", "p-actions-right", "p-selectable", "p-columns", "p-items", "p-height", "p-infinite-scroll", "p-show-more-disabled", "p-show-more", "p-sort-by", "p-change-visible-columns", "p-restore-column-manager"]], template: function PoPageDynamicTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-page-dynamic-search", 0);
        i0.ɵɵlistener("p-advanced-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_advanced_search_0_listener($event) { return ctx.onAdvancedSearch($event); })("p-change-disclaimers", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_change_disclaimers_0_listener($event) { return ctx.onChangeDisclaimers($event); })("p-quick-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_quick_search_0_listener($event) { return ctx.onQuickSearch($event); });
        i0.ɵɵelementStart(1, "po-table", 1);
        i0.ɵɵlistener("p-show-more", function PoPageDynamicTableComponent_Template_po_table_p_show_more_1_listener() { return ctx.showMore(); })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) { return ctx.onSort($event); })("p-change-visible-columns", function PoPageDynamicTableComponent_Template_po_table_p_change_visible_columns_1_listener($event) { return ctx.onChangeVisibleColumns($event); })("p-restore-column-manager", function PoPageDynamicTableComponent_Template_po_table_p_restore_column_manager_1_listener($event) { return ctx.onColumnRestoreManager($event); })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) { return ctx.onSortBy($event); });
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-hide-close-disclaimers", ctx.hideCloseDisclaimers)("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-concat-filters", ctx.concatFilters)("p-hide-remove-all-disclaimer", ctx.hideRemoveAllDisclaimer)("p-quick-search-width", ctx.quickSearchWidth)("p-title", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-sort", true)("p-actions", ctx.tableActions)("p-actions-right", ctx.actionRight)("p-selectable", ctx.enableSelectionTable)("p-columns", ctx.columns)("p-items", ctx.items)("p-height", ctx.height)("p-infinite-scroll", ctx.infiniteScroll)("p-show-more-disabled", !ctx.hasNext);
    } }, dependencies: [i2.PoTableComponent, i6.PoPageDynamicSearchComponent], encapsulation: 2 });
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "keepFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "actionRight", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "concatFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "hideRemoveAllDisclaimer", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "infiniteScroll", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicTableComponent, [{
        type: Component,
        args: [{ selector: 'po-page-dynamic-table', providers: [PoPageDynamicService], template: "<po-page-dynamic-search\r\n  [p-actions]=\"pageActions\"\r\n  [p-breadcrumb]=\"breadcrumb\"\r\n  [p-hide-close-disclaimers]=\"hideCloseDisclaimers\"\r\n  [p-filters]=\"filters\"\r\n  [p-keep-filters]=\"keepFilters\"\r\n  [p-concat-filters]=\"concatFilters\"\r\n  [p-hide-remove-all-disclaimer]=\"hideRemoveAllDisclaimer\"\r\n  [p-quick-search-width]=\"quickSearchWidth\"\r\n  [p-title]=\"title\"\r\n  (p-advanced-search)=\"onAdvancedSearch($event)\"\r\n  (p-change-disclaimers)=\"onChangeDisclaimers($event)\"\r\n  (p-quick-search)=\"onQuickSearch($event)\"\r\n>\r\n  <po-table\r\n    [p-sort]=\"true\"\r\n    [p-actions]=\"tableActions\"\r\n    [p-actions-right]=\"actionRight\"\r\n    [p-selectable]=\"enableSelectionTable\"\r\n    [p-columns]=\"columns\"\r\n    [p-items]=\"items\"\r\n    [p-height]=\"height\"\r\n    [p-infinite-scroll]=\"infiniteScroll\"\r\n    [p-show-more-disabled]=\"!hasNext\"\r\n    (p-show-more)=\"showMore()\"\r\n    (p-sort-by)=\"onSort($event)\"\r\n    (p-change-visible-columns)=\"onChangeVisibleColumns($event)\"\r\n    (p-restore-column-manager)=\"onColumnRestoreManager($event)\"\r\n    (p-sort-by)=\"onSortBy($event)\"\r\n  >\r\n  </po-table>\r\n</po-page-dynamic-search>\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.PoDialogService }, { type: i2.PoNotificationService }, { type: i3.PoPageDynamicService }, { type: i4.PoPageCustomizationService }, { type: i5.PoPageDynamicTableActionsService }, { type: i2.PoLanguageService }]; }, { onLoad: [{
            type: Input,
            args: ['p-load']
        }], keepFilters: [{
            type: Input,
            args: ['p-keep-filters']
        }], actionRight: [{
            type: Input,
            args: ['p-actions-right']
        }], concatFilters: [{
            type: Input,
            args: ['p-concat-filters']
        }], hideRemoveAllDisclaimer: [{
            type: Input,
            args: ['p-hide-remove-all-disclaimer']
        }], infiniteScroll: [{
            type: Input,
            args: ['p-infinite-scroll']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], pageCustomActions: [{
            type: Input,
            args: ['p-page-custom-actions']
        }], tableCustomActions: [{
            type: Input,
            args: ['p-table-custom-actions']
        }], quickSearchWidth: [{
            type: Input,
            args: ['p-quick-search-width']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], hideCloseDisclaimers: [{
            type: Input,
            args: ['p-hide-close-disclaimers']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1keW5hbWljLXRhYmxlL3BvLXBhZ2UtZHluYW1pYy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS9wby1wYWdlLWR5bmFtaWMtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFjLEtBQUssRUFBVSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNMLFlBQVksRUFRWixxQkFBcUIsRUFDckIsZUFBZSxFQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sa0JBQWtCLENBQUM7QUFFekMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFlOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7OztBQUUxRixNQUFNLGlCQUFpQixHQUFHLEVB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QkFBQSxzQkFBQSx3QkFBQSx5Q0FBQSxzQ0FBQTs7QURtS2pCO0lBRkMsWUFBWSxFQUFFO2dFQUVjO0FBYTdCO0lBRkMsWUFBWSxFQUFFO2dFQUVlO0FBMEI5QjtJQUZDLFlBQVksRUFBRTtrRUFFZ0I7QUFlL0I7SUFGQyxZQUFZLEVBQUU7NEVBRTJCO0FBaUIxQztJQUZDLFlBQVksRUFBRTttRUFFa0I7dUZBbEh0QiwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDRSx1QkFBdUIsYUFFdEIsQ0FBQyxvQkFBb0IsQ0FBQzttVEFnQ2hCLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUTtZQWFmLFdBQVc7a0JBRFYsS0FBSzttQkFBQyxnQkFBZ0I7WUFjdkIsV0FBVztrQkFEVixLQUFLO21CQUFDLGlCQUFpQjtZQTJCeEIsYUFBYTtrQkFEWixLQUFLO21CQUFDLGtCQUFrQjtZQWdCekIsdUJBQXVCO2tCQUR0QixLQUFLO21CQUFDLDhCQUE4QjtZQWtCckMsY0FBYztrQkFEYixLQUFLO21CQUFDLG1CQUFtQjtZQXlERixPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUE4QmtCLGlCQUFpQjtrQkFBcEQsS0FBSzttQkFBQyx1QkFBdUI7WUE0Qk8sa0JBQWtCO2tCQUF0RCxLQUFLO21CQUFDLHdCQUF3QjtZQW1CSSxnQkFBZ0I7a0JBQWxELEtBQUs7bUJBQUMsc0JBQXNCO1lBZU4sTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVO1lBcUJzQixvQkFBb0I7a0JBQTFELEtBQUs7bUJBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBFTVBUWSwgY29uY2F0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgUG9EaWFsb2dDb25maXJtT3B0aW9ucyxcclxuICBQb0RpYWxvZ1NlcnZpY2UsXHJcbiAgUG9MYW5ndWFnZVNlcnZpY2UsXHJcbiAgUG9Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gIFBvUGFnZUFjdGlvbixcclxuICBQb1RhYmxlQWN0aW9uLFxyXG4gIFBvVGFibGVDb2x1bW5Tb3J0LFxyXG4gIFBvVGFibGVDb2x1bW5Tb3J0VHlwZSxcclxuICBwb0xvY2FsZURlZmF1bHRcclxufSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4uL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwvcG8tcGFnZS1keW5hbWljLWRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgcG9QYWdlRHluYW1pY1RhYmxlTGl0ZXJhbHNEZWZhdWx0IH0gZnJvbSAnLi9wby1wYWdlLWR5bmFtaWMtdGFibGUtbGl0ZXJhbHMnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljTGlzdEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1saXN0LWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWR5bmFtaWMvcG8tcGFnZS1keW5hbWljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS1hY3Rpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNUYWJsZU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLXRhYmxlLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3BvLXBhZ2UtY3VzdG9taXphdGlvbi9wby1wYWdlLWN1c3RvbWl6YXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNPcHRpb25zU2NoZW1hIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWN1c3RvbWl6YXRpb24vcG8tcGFnZS1keW5hbWljLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlTWV0YURhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLXRhYmxlLW1ldGFkYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9wby1wYWdlLWR5bmFtaWMtdGFibGUtYWN0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlQmVmb3JlRWRpdCB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtdGFibGUtYmVmb3JlLWVkaXQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlQmVmb3JlTmV3IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS1iZWZvcmUtbmV3LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNUYWJsZUJlZm9yZVJlbW92ZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtdGFibGUtYmVmb3JlLXJlbW92ZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVEZXRhaWwgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLXRhYmxlLWJlZm9yZS1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlQmVmb3JlRHVwbGljYXRlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS1iZWZvcmUtZHVwbGljYXRlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNUYWJsZUJlZm9yZVJlbW92ZUFsbCB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtdGFibGUtYmVmb3JlLXJlbW92ZS1hbGwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlQ3VzdG9tQWN0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS1jdXN0b20tYWN0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNUYWJsZUN1c3RvbVRhYmxlQWN0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS1jdXN0b20tdGFibGUtYWN0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IGlzRXh0ZXJuYWxMaW5rLCBvcGVuRXh0ZXJuYWxMaW5rLCByZW1vdmVEdXBsaWNhdGVJdGVtcyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuY29uc3QgUEFHRV9TSVpFX0RFRkFVTFQgPSAxMDtcclxuXHJcbnR5cGUgVXJsT3JQb0N1c3RvbWl6YXRpb25GdW5jdGlvbiA9IHN0cmluZyB8ICgoKSA9PiBQb1BhZ2VEeW5hbWljVGFibGVPcHRpb25zKTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9QYWdlRHluYW1pY0xpc3RCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1wYWdlLWR5bmFtaWMtdGFibGVgIMOpIHVtYSBww6FnaW5hIHF1ZSBleGliZSB1bWEgbGlzdGEgZGUgcmVnaXN0cm9zIGVtIHVtYSB0YWJlbGEgYmFzZWFkbyBlbSB1bWEgbGlzdGEgZGUgZmllbGRzLFxyXG4gKiBvIG1lc21vIHRhbWLDqW0gc3Vwb3J0YSBtZXRhZGFkb3MgY29uZm9ybWUgZXNwZWNpZmljYWRvIG5hIGRvY3VtZW50YcOnw6NvLlxyXG4gKlxyXG4gKiAjIyMgVXRpbGl6YcOnw6NvIHZpYSByb3RhXHJcbiAqXHJcbiAqIEFvIHV0aWxpemFyIGFzIHJvdGFzIHBhcmEgY2FycmVnYXIgbyB0ZW1wbGF0ZSwgbyBgcGFnZS1keW5hbWljLXRhYmxlYCBkaXNwb25pYmlsaXphIHByb3ByaWVkYWRlcyBwYXJhXHJcbiAqIHBvZGVyIGVzcGVjaWZpY2FyIG8gZW5kcG9pbnQgZG9zIGRhZG9zIGUgZG9zIG1ldGFkYWRvcy4gRXhlbXBsbyBkZSB1dGlsaXphw6fDo286XHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBwcmltZWlybyBpcsOhIGNhcnJlZ2FyIG8gbWV0YWRhZG8gZGEgcm90YSBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBzZXJ2aWNlTWV0YWRhdGFBcGlcclxuICogZSBkZXBvaXMgaXLDoSBidXNjYXIgZGEgcm90YSBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBzZXJ2aWNlTG9hZEFwaVxyXG4gKlxyXG4gKiA+IENhc28gbyBzZXJ2aWRvciByZXRvcm5hciB1bSBlcnJvIGFvIHJlY3VwZXJhciBvIG1ldGFkYWRvcywgc2Vyw6EgcmVwYXNzYWRvIG8gbWV0YWRhZG9zIHNhbHZvIGVtIGNhY2hlLFxyXG4gKiBzZSBvIGNhY2hlIG7Do28gZXhpc3RlIHNlcsOhIGRpc3BhcmFkbyB1bWEgbm90aWZpY2HDp8Ojby5cclxuICpcclxuICogYGBgXHJcbiAqIHtcclxuICogICBwYXRoOiAncGVvcGxlJyxcclxuICogICBjb21wb25lbnQ6IFBvUGFnZUR5bmFtaWNUYWJsZUNvbXBvbmVudCxcclxuICogICBkYXRhOiB7XHJcbiAqICAgICBzZXJ2aWNlQXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3YxL3Blb3BsZScsIC8vIGVuZHBvaW50IGRvcyBkYWRvc1xyXG4gKiAgICAgc2VydmljZU1ldGFkYXRhQXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3YxL21ldGFkYXRhJywgLy8gZW5kcG9pbnQgZG9zIG1ldGFkYWRvcyB1dGlsaXphbmRvIG8gbcOpdG9kbyBIVFRQIEdldFxyXG4gKiAgICAgc2VydmljZUxvYWRBcGk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9hZC1tZXRhZGF0YScgLy8gZW5kcG9pbnQgZGUgY3VzdG9taXphw6fDtWVzIGRvcyBtZXRhZGFkb3MgdXRpbGl6YW5kbyBvIG3DqXRvZG8gSFRUUCBQb3N0XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBIHJlcXVpc2nDp8OjbyBkb3MgbWV0YWRhZG9zIMOpIGZlaXRhIG5hIGluaWNpYWxpemHDp8OjbyBkbyB0ZW1wbGF0ZSBwYXJhIGJ1c2NhciBvcyBtZXRhZGFkb3MgZGEgcMOhZ2luYSBwYXNzYW5kbyBvXHJcbiAqIHRpcG8gZG8gbWV0YWRhZG8gZXNwZXJhZG8gZSBhIHZlcnPDo28gY2FjaGVhZGEgcGVsbyBicm93c2VyLlxyXG4gKlxyXG4gKiBPIGZvcm1hdG8gZXNwZXJhZG8gbmEgcmVzcG9zdGEgZGEgcmVxdWlzacOnw6NvIGVzdMOhIGVzcGVjaWZpY2FkbyBuYSBpbnRlcmZhY2VcclxuICogW1BvUGFnZUR5bmFtaWNUYWJsZU1ldGFkYXRhXSgvZG9jdW1lbnRhdGlvbi9wby1wYWdlLWR5bmFtaWMtdGFibGUjcG8tcGFnZS1keW5hbWljLXRhYmxlLW1ldGFkYXRhKS4gUG9yIGV4ZW1wbG86XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAge1xyXG4gKiAgIHZlcnNpb246IDEsXHJcbiAqICAgdGl0bGU6ICdQZXJzb24gVGFibGUnLFxyXG4gKiAgIGZpZWxkczogW1xyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2lkJywga2V5OiB0cnVlLCBkaXNhYmxlZDogdHJ1ZSB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ3N0YXR1cycgfSxcclxuICogICAgIHsgcHJvcGVydHk6ICduYW1lJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ25pY2tuYW1lJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2JpcnRoZGF0ZScsIGxhYmVsOiAnQmlydGggZGF0ZScgfSxcclxuICogICAgIHsgcHJvcGVydHk6ICdnZW5yZScgfSxcclxuICogICAgIHsgcHJvcGVydHk6ICdjaXR5JyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2NvdW50cnknIH1cclxuICogICBdLFxyXG4gKiAgIGtlZXBGaWx0ZXJzOiB0cnVlXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqID4gQ2FzbyBvIGVuZHBvaW50IGRvcyBtZXRhZGFkb3MgbsOjbyBzZWphIGVzcGVjaWZpY2Fkbywgc2Vyw6EgZmVpdG8gdW1hIHJlcXVpc2nDp8OjbyB1dGlsaXphbmRvIG8gYHNlcnZpY2VBcGlgIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gKiBgYGBcclxuICogR0VUIHtlbmQtcG9pbnR9L21ldGFkYXRhP3R5cGU9bGlzdCZ2ZXJzaW9uPXt2ZXJzaW9ufVxyXG4gKiBgYGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtZHluYW1pYy10YWJsZS1iYXNpY1wiIHRpdGxlPVwiUE8gUGFnZSBEeW5hbWljIFRhYmxlIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS1iYXNpYy9zYW1wbGUtcG8tcGFnZS1keW5hbWljLXRhYmxlLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1keW5hbWljLXRhYmxlLWJhc2ljL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1keW5hbWljLXRhYmxlLXBlb3BsZVwiIHRpdGxlPVwiUE8gUGFnZSBEeW5hbWljIFRhYmxlIC0gUGVvcGxlXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS1wZW9wbGUvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS1wZW9wbGUuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtcGVvcGxlL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtcGVvcGxlLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtZHluYW1pYy10YWJsZS11c2Vyc1wiIHRpdGxlPVwiUE8gUGFnZSBEeW5hbWljIFRhYmxlIC0gVXNlcnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1keW5hbWljLXRhYmxlLXVzZXJzL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtdXNlcnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtdXNlcnMvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS11c2Vycy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtdXNlcnMvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS11c2Vycy5zZXJ2aWNlLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1keW5hbWljLXRhYmxlLWhvdGVsc1wiIHRpdGxlPVwiUE8gUGFnZSBEeW5hbWljIFRhYmxlIC0gSG90ZWxzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS1ob3RlbHMvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy10YWJsZS1ob3RlbHMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtaG90ZWxzL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtdGFibGUtaG90ZWxzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1keW5hbWljLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1keW5hbWljLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VEeW5hbWljU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNUYWJsZUNvbXBvbmVudCBleHRlbmRzIFBvUGFnZUR5bmFtaWNMaXN0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBvdSBzZXJ2acOnbyBxdWUgc2Vyw6EgZXhlY3V0YWRvIG5hIGluaWNpYWxpemHDp8OjbyBkbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogQSBwcm9wcmllZGFkZSBhY2VpdGEgb3Mgc2VndWludGVzIHRpcG9zOlxyXG4gICAqIC0gYHN0cmluZ2A6ICpFbmRwb2ludCogdXNhZG8gcGVsbyBjb21wb25lbnRlIHBhcmEgcmVxdWlzacOnw6NvIHZpYSBgUE9TVGAuXHJcbiAgICogLSBgZnVuY3Rpb25gOiBNw6l0b2RvIHF1ZSBzZXLDoSBleGVjdXRhZG8uXHJcbiAgICpcclxuICAgKiBPIHJldG9ybm8gZGVzdGEgZnVuw6fDo28gZGV2ZSBzZXIgZG8gdGlwbyBgUG9QYWdlRHluYW1pY1RhYmxlT3B0aW9uc2AsXHJcbiAgICogb25kZSBvIHVzdcOhcmlvIHBvZGVyw6EgY3VzdG9taXphciBub3ZvcyBjYW1wb3MsIGJyZWFkY3J1bWIsIHRpdGxlIGUgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogUG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBnZXRQYWdlT3B0aW9ucygpOiBQb1BhZ2VEeW5hbWljVGFibGVPcHRpb25zIHtcclxuICAgKiByZXR1cm4ge1xyXG4gICAqICAgYWN0aW9uczpcclxuICAgKiAgICAgeyBuZXc6ICduZXcnLCBlZGl0OiAnZWRpdC86aWQnLCByZW1vdmU6IHRydWUgfSxcclxuICAgKiAgIGZpZWxkczogW1xyXG4gICAqICAgICB7IHByb3BlcnR5OiAnaWRDYXJkJywgZ3JpZENvbHVtbnM6IDYgfVxyXG4gICAqICAgXVxyXG4gICAqIH07XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUGFyYSByZWZlcmVuY2lhciBhIHN1YSBmdW7Dp8OjbyB1dGlsaXplIGEgcHJvcHJpZWRhZGUgYGJpbmRgLCBwb3IgZXhlbXBsbzpcclxuICAgKiBgYGBcclxuICAgKiAgW3AtbG9hZF09XCJvbkxvYWRPcHRpb25zLmJpbmQodGhpcylcIlxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sb2FkJykgb25Mb2FkOiBzdHJpbmcgfCAoKCkgPT4gUG9QYWdlRHluYW1pY1RhYmxlT3B0aW9ucyk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNYW50w6ltIG5hIG1vZGFsIGRlIGBCdXNjYSBBdmFuw6dhZGFgIG9zIHZhbG9yZXMgcHJlZW5jaGlkb3MgZG8gw7psdGltbyBmaWx0cm8gcmVhbGl6YWRvIHBlbG8gdXN1w6FyaW8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQElucHV0KCdwLWtlZXAtZmlsdGVycycpXHJcbiAga2VlcEZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBxdWUgYSBjb2x1bmEgZGUgYcOnw7VlcyBmaWNhcsOhIG5vIGxhZG8gZGlyZWl0byBkYSB0YWJlbGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQElucHV0KCdwLWFjdGlvbnMtcmlnaHQnKVxyXG4gIGFjdGlvblJpZ2h0PzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUGVybWl0ZSBhIHV0aWxpemHDp8OjbyBkYSBwZXNxdWlzYSByw6FwaWRhIGp1bnRvIGNvbSBhIHBlc3F1aXNhIGF2YW7Dp2FkYS5cclxuICAgKlxyXG4gICAqIERlc3RhIGZvcm1hLCBhbyB0ZXIgdW1hIHBlc3F1aXNhIGF2YW7Dp2FkYSBlc3RhYmVsZWNpZGEgZSBzZXJcclxuICAgKiBwcmVlbmNoaWRvIGEgcGVzcXVpc2EgcsOhcGlkYSwgbyBmaWx0cm8gc2Vyw6EgY29uY2F0ZW5hZG8gYWRpY2lvbmFuZG8gYSBwZXNxdWlzYVxyXG4gICAqIHLDoXBpZGEgdGFtYsOpbSBuYSBsaXN0YSBkZSBgZGlzY2xhaW1lcnNgIGEgYXBsaWNhbmRvIHVtYSBub3ZhIGJ1c2NhIGNvbSBhIGNvbmNhdGVuYcOnw6NvLlxyXG4gICAqXHJcbiAgICogUG9yIGV4ZW1wbG8sIGNvbSBvcyBzZWd1aW50ZXMgZmlsdHJvcyBhcGxpY2Fkb3M6XHJcbiAgICogICAtIGZpbHRybyBhdmFuw6dhZG86IGB7IG5hbWU6ICdNaWtlJywgYWdlOiAnMTInIH1gXHJcbiAgICogICAtIGZpbHRybyByw6FwaWRvOiBgeyBzZWFyY2g6ICdwYXBlcicgfWBcclxuICAgKlxyXG4gICAqIEEgcmVxdWlzacOnw6NvIGRvcyBkYWRvcyBuYSBBUEkgZmljYXLDoSBjb20gb3MgcGFyw6JtZXRyb3M6XHJcbiAgICogYGBgXHJcbiAgICogcGFnZT0xJnBhZ2VTaXplPTEwJm5hbWU9TWlrZSZhZ2U9MTImc2VhcmNoPXBhcGVyXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQElucHV0KCdwLWNvbmNhdC1maWx0ZXJzJylcclxuICBjb25jYXRGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPY3VsdGEgbyBib3TDo28gcGFyYSByZW1vdmVyIHRvZG9zIG9zICpkaXNjbGFpbWVycyogZG8gZ3J1cG8uXHJcbiAgICpcclxuICAgKiA+IFBvciBwYWRyw6NvLCBvIG1lc21vIMOpIGV4aWJpZG8gw6AgcGFydGlyIGRlIGRvaXMgb3UgbWFpcyAqZGlzY2xhaW1lcnMqIGNvbSBhIG9ww6fDo28gYGhpZGVDbG9zZWAgaGFiaWxpdGFkYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXRCb29sZWFuKClcclxuICBASW5wdXQoJ3AtaGlkZS1yZW1vdmUtYWxsLWRpc2NsYWltZXInKVxyXG4gIGhpZGVSZW1vdmVBbGxEaXNjbGFpbWVyPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogU2UgdmVyZGFkZWlybywgYXRpdmEgYSBmdW5jaW9uYWxpZGFkZSBkZSBzY3JvbGwgaW5maW5pdG8gcGFyYSBhIHRhYmVsYSBlIG8gYm90w6NvIFwiQ2FycmVnYXIgTWFpc1wiIGRlaXhhcsOhIGRlIHNlciBleGliaWRvLiBBbyBjaGVnYXIgbm8gZmltIGRhIHRhYmVsYVxyXG4gICAqIGV4ZWN1dGFyw6EgYSBmdW7Dp8OjbyBgcC1zaG93LW1vcmVgLlxyXG4gICAqXHJcbiAgICogKipSZWdyYXMgZGUgdXRpbGl6YcOnw6NvOioqXHJcbiAgICogIC0gTyBzY3JvbGwgaW5maW5pdG8gc8OzIGZ1bmNpb25hIHBhcmEgdGFiZWxhcyBxdWUgdXRpbGl6YW0gYSBwcm9wcmllZGFkZSBgcC1oZWlnaHRgIGUgcXVlIHBvc3N1ZW0gbyBzY3JvbGwgasOhIG5hIGNhcmdhIGluaWNpYWwgZG9zIGRhZG9zLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIEBJbnB1dCgncC1pbmZpbml0ZS1zY3JvbGwnKVxyXG4gIGluZmluaXRlU2Nyb2xsPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBoYXNOZXh0ID0gZmFsc2U7XHJcbiAgaXRlbXMgPSBbXTtcclxuICBsaXRlcmFscztcclxuICBwYWdlQWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFtdO1xyXG4gIHRhYmxlQWN0aW9uczogQXJyYXk8UG9UYWJsZUFjdGlvbj4gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfYWN0aW9uczogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9ucyA9IHt9O1xyXG4gIHByaXZhdGUgX3BhZ2VDdXN0b21BY3Rpb25zOiBBcnJheTxQb1BhZ2VEeW5hbWljVGFibGVDdXN0b21BY3Rpb24+ID0gW107XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfcXVpY2tTZWFyY2hXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3RhYmxlQ3VzdG9tQWN0aW9uczogQXJyYXk8UG9QYWdlRHluYW1pY1RhYmxlQ3VzdG9tVGFibGVBY3Rpb24+ID0gW107XHJcblxyXG4gIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxO1xyXG4gIHByaXZhdGUgaXRlbVNlbGVjdGVkQWN0aW9uO1xyXG4gIHByaXZhdGUgcGFyYW1zID0ge307XHJcbiAgcHJpdmF0ZSBzb3J0ZWRDb2x1bW46IFBvVGFibGVDb2x1bW5Tb3J0O1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBwcml2YXRlIGhhc0N1c3RvbUFjdGlvbldpdGhTZWxlY3RhYmxlID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX2N1c3RvbVBhZ2VMaXN0QWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFtdO1xyXG4gIHByaXZhdGUgX2N1c3RvbVRhYmxlQWN0aW9uczogQXJyYXk8UG9UYWJsZUFjdGlvbj4gPSBbXTtcclxuICBwcml2YXRlIF9kZWZhdWx0UGFnZUFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbXTtcclxuICBwcml2YXRlIF9kZWZhdWx0VGFibGVBY3Rpb25zOiBBcnJheTxQb1RhYmxlQWN0aW9uPiA9IFtdO1xyXG4gIHByaXZhdGUgX2hpZGVDbG9zZURpc2NsYWltZXJzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gIHByaXZhdGUgc2V0IGRlZmF1bHRQYWdlQWN0aW9ucyh2YWx1ZTogQXJyYXk8UG9QYWdlQWN0aW9uPikge1xyXG4gICAgdGhpcy5fZGVmYXVsdFBhZ2VBY3Rpb25zID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVBhZ2VBY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldCBkZWZhdWx0VGFibGVBY3Rpb25zKHZhbHVlOiBBcnJheTxQb1RhYmxlQWN0aW9uPikge1xyXG4gICAgdGhpcy5fZGVmYXVsdFRhYmxlQWN0aW9ucyA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVUYWJsZUFjdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0IGN1c3RvbVBhZ2VMaXN0QWN0aW9ucyh2YWx1ZTogQXJyYXk8UG9QYWdlQWN0aW9uPikge1xyXG4gICAgdGhpcy5fY3VzdG9tUGFnZUxpc3RBY3Rpb25zID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVBhZ2VBY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldCBjdXN0b21UYWJsZUFjdGlvbnModmFsdWU6IEFycmF5PFBvVGFibGVBY3Rpb24+KSB7XHJcbiAgICB0aGlzLl9jdXN0b21UYWJsZUFjdGlvbnMgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlVGFibGVBY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQcOnw7VlcyBkYSBww6FnaW5hIGUgZGEgdGFiZWxhLlxyXG4gICAqID4gQ2FzbyB1dGlsaXphciBhIGHDp8OjbyBwYWRyw6NvIGRlIGV4Y2x1aXIsIGEgbWVzbWEgc2Vyw6EgZXhpYmlkYSBwb3Igw7psdGltbyBuYSB0YWJlbGEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWFjdGlvbnMnKSBzZXQgYWN0aW9ucyh2YWx1ZTogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9ucykge1xyXG4gICAgdGhpcy5fYWN0aW9ucyA9IHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDAgPyB2YWx1ZSA6IHt9O1xyXG5cclxuICAgIHRoaXMuc2V0UGFnZUFjdGlvbnModGhpcy5hY3Rpb25zKTtcclxuICAgIHRoaXMuc2V0UmVtb3ZlQWxsQWN0aW9uKCk7XHJcbiAgICB0aGlzLnNldFRhYmxlQWN0aW9ucyh0aGlzLmFjdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGlvbnMoKTogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBkZSBhw6fDtWVzIGN1c3RvbWl6YWRhcyBkYSBww6FnaW5hIHF1ZSBzZXLDo28gaW5jb3Jwb3JhZGFzIMOgcyBhw6fDtWVzXHJcbiAgICogaW5mb3JtYWRhcyBhdHJhdsOpcyBkYSBwcm9wcmllZGFkZSBgcC1hY3Rpb25zYC5cclxuICAgKlxyXG4gICAqIEVzc2FzIGHDp8O1ZXMgZmljYW0gbG9jYWxpemFkYXMgbmEgcGFydGUgc3VwZXJpb3IgZGEgcMOhZ2luYSBlbSBib3TDtWVzIGNvbSBhw6fDtWVzLlxyXG4gICAqXHJcbiAgICogRXhlbXBsbyBkZSB1dGlsaXphw6fDo286XHJcbiAgICogYGBgXHJcbiAgICogW1xyXG4gICAqICB7IGxhYmVsOiAnRXhwb3J0JywgYWN0aW9uOiB0aGlzLmV4cG9ydC5iaW5kKHRoaXMpIH0sXHJcbiAgICogIHsgbGFiZWw6ICdQcmludCcsIGFjdGlvbjogdGhpcy5wcmludC5iaW5kKHRoaXMpIH1cclxuICAgKiBdO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wYWdlLWN1c3RvbS1hY3Rpb25zJykgc2V0IHBhZ2VDdXN0b21BY3Rpb25zKHZhbHVlOiBBcnJheTxQb1BhZ2VEeW5hbWljVGFibGVDdXN0b21BY3Rpb24+KSB7XHJcbiAgICB0aGlzLl9wYWdlQ3VzdG9tQWN0aW9ucyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbVBhZ2VMaXN0QWN0aW9ucyA9IHRoaXMudHJhbnNmb3JtQ3VzdG9tQWN0aW9uc1RvUGFnZUxpc3RBY3Rpb24odGhpcy5wYWdlQ3VzdG9tQWN0aW9ucyk7XHJcbiAgICB0aGlzLmhhc0N1c3RvbUFjdGlvbldpdGhTZWxlY3RhYmxlID0gdGhpcy5wYWdlQ3VzdG9tQWN0aW9ucy5zb21lKGN1c3RvbUFjdGlvbiA9PiBjdXN0b21BY3Rpb24uc2VsZWN0YWJsZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFnZUN1c3RvbUFjdGlvbnMoKTogQXJyYXk8UG9QYWdlRHluYW1pY1RhYmxlQ3VzdG9tQWN0aW9uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZUN1c3RvbUFjdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZGUgYcOnw7VlcyBjdXN0b21pemFkYXMgbmEgdGFiZWxhIGRhIHDDoWdpbmEgcXVlIHNlcsOjbyBpbmNvcnBvcmFkYXMgw6BzIGHDp8O1ZXNcclxuICAgKiBpbmZvcm1hZGFzIGF0cmF2w6lzIGRhIHByb3ByaWVkYWRlIGBwLWFjdGlvbnNgLlxyXG4gICAqXHJcbiAgICogRXhlbXBsbyBkZSB1dGlsaXphw6fDo286XHJcbiAgICogYGBgXHJcbiAgICogW1xyXG4gICAqICB7IGxhYmVsOiAnQXBwbHkgZGlzY291bnQnLCBhY3Rpb246IHRoaXMuYXBwbHlEaXNjb3VudC5iaW5kKHRoaXMpIH0sXHJcbiAgICogIHsgbGFiZWw6ICdEZXRhaWxzJywgYWN0aW9uOiB0aGlzLmRldGFpbHMuYmluZCh0aGlzKSB9XHJcbiAgICogXTtcclxuICAgKiBgYGBcclxuICAgKiA+IENhc28gdXRpbGl6YXIgYSBhw6fDo28gcGFkcsOjbyBkZSBleGNsdWlyLCBhIG1lc21hIHNlcsOhIGV4aWJpZGEgcG9yIMO6bHRpbW8gbmEgdGFiZWxhLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10YWJsZS1jdXN0b20tYWN0aW9ucycpIHNldCB0YWJsZUN1c3RvbUFjdGlvbnModmFsdWU6IEFycmF5PFBvUGFnZUR5bmFtaWNUYWJsZUN1c3RvbVRhYmxlQWN0aW9uPikge1xyXG4gICAgdGhpcy5fdGFibGVDdXN0b21BY3Rpb25zID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tVGFibGVBY3Rpb25zID0gdGhpcy50cmFuc2Zvcm1UYWJsZUN1c3RvbUFjdGlvbnNUb1RhYmxlQWN0aW9ucyh0aGlzLnRhYmxlQ3VzdG9tQWN0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFibGVDdXN0b21BY3Rpb25zKCk6IEFycmF5PFBvUGFnZUR5bmFtaWNUYWJsZUN1c3RvbVRhYmxlQWN0aW9uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFibGVDdXN0b21BY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIExhcmd1cmEgZG8gY2FtcG8gZGUgYnVzY2EsIHV0aWxpemFuZG8gbyAqR3JpZCBTeXN0ZW0qLFxyXG4gICAqIGUgbGltaXRhZG8gYW8gbcOheGltbyBkZSA2IGNvbHVuYXMuIE8gdGFtYW5obyBtw61uaW1vIMOpIGNvbnRyb2xhZG9cclxuICAgKiBjb25mb3JtZSByZXNvbHXDp8OjbyBkZSB0ZWxhIHBhcmEgbWFudGVyIGEgY29uc2lzdMOqbmNpYSBkbyBsYXlvdXQuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXF1aWNrLXNlYXJjaC13aWR0aCcpIHNldCBxdWlja1NlYXJjaFdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3F1aWNrU2VhcmNoV2lkdGggPSB1dGlsLmNvbnZlcnRUb0ludCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcXVpY2tTZWFyY2hXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3F1aWNrU2VhcmNoV2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgYWx0dXJhIGRhIHRhYmVsYSBlbSAqcGl4ZWxzKiBlIGZpeGEgbyBjYWJlw6dhbGhvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oZWlnaHQnKSBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHV0aWwuY29udmVydFRvSW50KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZGUgZmlsdHJvcyBxdWUgdGVyw6NvIGEgb3DDp8OjbyBkZSBmZWNoYXIgb2N1bHRhZGFcclxuICAgKiBlbSBzZXUgcmVzcGVjdGl2byBkaXNjbGFpbWVyLiBVdGlsaXphciBvIGF0cmlidXRvIGBwcm9wZXJ0eWAgZG8gY2FtcG8uXHJcbiAgICpcclxuICAgKiBFeGVtcGxvIGRlIHV0aWxpemHDp8OjbzpcclxuICAgKiBgYGBcclxuICAgKiBbJ2NpdHknLCduYW1lJ107XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtY2xvc2UtZGlzY2xhaW1lcnMnKSBzZXQgaGlkZUNsb3NlRGlzY2xhaW1lcnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX2hpZGVDbG9zZURpc2NsYWltZXJzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVDbG9zZURpc2NsYWltZXJzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVDbG9zZURpc2NsYWltZXJzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHBvRGlhbG9nU2VydmljZTogUG9EaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb05vdGlmaWNhdGlvbjogUG9Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb1BhZ2VEeW5hbWljU2VydmljZTogUG9QYWdlRHluYW1pY1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlOiBQb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1NlcnZpY2U6IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNTZXJ2aWNlLFxyXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4ucG9QYWdlRHluYW1pY1RhYmxlTGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgIC4uLnBvUGFnZUR5bmFtaWNUYWJsZUxpdGVyYWxzRGVmYXVsdFtsYW5ndWFnZV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZERhdGFGcm9tQVBJKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb25BZHZhbmNlZFNlYXJjaChmaWx0ZXIpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5sb2FkRGF0YSh7IHBhZ2U6IDEsIC4uLmZpbHRlciB9KS5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLnBhcmFtcyA9IGZpbHRlcjtcclxuXHJcbiAgICBpZiAodGhpcy5rZWVwRmlsdGVycykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlclZhbHVlKGZpbHRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZURpc2NsYWltZXJzKGRpc2NsYWltZXJzKSB7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB7fTtcclxuXHJcbiAgICBkaXNjbGFpbWVycy5mb3JFYWNoKGRpc2NsYWltZXIgPT4ge1xyXG4gICAgICBmaWx0ZXJbZGlzY2xhaW1lci5wcm9wZXJ0eV0gPSBkaXNjbGFpbWVyLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbkFkdmFuY2VkU2VhcmNoKGZpbHRlcik7XHJcbiAgfVxyXG5cclxuICBvblF1aWNrU2VhcmNoKHRlcm1UeXBlZEluUXVpY2tTZWFyY2gpIHtcclxuICAgIGNvbnN0IHF1aWNrU2VhcmNoUGFyYW0gPSB0ZXJtVHlwZWRJblF1aWNrU2VhcmNoID8geyBzZWFyY2g6IHRlcm1UeXBlZEluUXVpY2tTZWFyY2ggfSA6IHt9O1xyXG4gICAgdGhpcy5wYXJhbXMgPSB0aGlzLmNvbmNhdEZpbHRlcnMgPyB7IC4uLnRoaXMucGFyYW1zLCAuLi5xdWlja1NlYXJjaFBhcmFtIH0gOiB7IC4uLnF1aWNrU2VhcmNoUGFyYW0gfTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHRoaXMubG9hZERhdGEodGVybVR5cGVkSW5RdWlja1NlYXJjaCA/IHsgcGFnZTogMSwgLi4udGhpcy5wYXJhbXMgfSA6IHVuZGVmaW5lZCkuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgb25Tb3J0KHNvcnRlZENvbHVtbjogUG9UYWJsZUNvbHVtblNvcnQpIHtcclxuICAgIHRoaXMuc29ydGVkQ29sdW1uID0gc29ydGVkQ29sdW1uO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VWaXNpYmxlQ29sdW1ucyh2YWx1ZSkge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlQ29sdW1ucy5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uQ29sdW1uUmVzdG9yZU1hbmFnZXIodmFsdWU6IEFycmF5PFN0cmluZz4pIHtcclxuICAgIHRoaXMuY29sdW1uUmVzdG9yZU1hbmFnZXIuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvblNvcnRCeShzb3J0ZWRDb2x1bW46IFBvVGFibGVDb2x1bW5Tb3J0KSB7XHJcbiAgICB0aGlzLnNvcnRCeS5lbWl0KHNvcnRlZENvbHVtbik7XHJcbiAgfVxyXG5cclxuICBzaG93TW9yZSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5sb2FkRGF0YSh7IHBhZ2U6ICsrdGhpcy5wYWdlLCAuLi50aGlzLnBhcmFtcyB9KS5zdWJzY3JpYmUoKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlU2VsZWN0aW9uVGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXNBY3Rpb25SZW1vdmVBbGwgfHwgdGhpcy5oYXNDdXN0b21BY3Rpb25XaXRoU2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNBY3Rpb25SZW1vdmVBbGwoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmFjdGlvbnMucmVtb3ZlQWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIHJlYWxpemEgYSBhdHVhbGl6YcOnw6NvIGRvcyBkYWRvcyBkYSB0YWJlbGEuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIGNhcHR1cmFyIGEgaW5zdMOibmNpYSBkbyBgcGFnZSBkeW5hbWljIHRhYmxlYCwgY29tbyBwb3IgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYCBodG1sXHJcbiAgICogPHBvLXBhZ2UtZHluYW1pYy10YWJsZSAjZHluYW1pY1RhYmxlIFtwLXNlcnZpY2UtYXBpXT1cInNlcnZpY2VBcGlcIj48L3BvLXBhZ2UtZHluYW1pYy10YWJsZT5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIGBgYCBqYXZhc2NyaXB0XHJcbiAgICogaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlQ29tcG9uZW50LCBQb0R5bmFtaWNGb3JtRmllbGQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYWJsZScsIHsgc3RhdGljOiB0cnVlIH0pIGR5bmFtaWNUYWJsZTogUG9QYWdlRHluYW1pY1RhYmxlQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogcGFnZUN1c3RvbUFjdGlvbnM6IEFycmF5PFBvUGFnZUR5bmFtaWNUYWJsZUN1c3RvbUFjdGlvbj4gPSBbXHJcbiAgICoge1xyXG4gICAqICAgbGFiZWw6ICdVcGRhdGUnLFxyXG4gICAqICAgYWN0aW9uOiB0aGlzLnVwZGF0ZVRhYmxlLmJpbmQodGhpcyksXHJcbiAgICogICBpY29uOiAncG8taWNvbi1yZWZyZXNoJ1xyXG4gICAqIH1dXHJcbiAgICpcclxuICAgKiB1cGRhdGVUYWJsZSgpIHtcclxuICAgKiAgIHRoaXMuZHluYW1pY1RhYmxlLnVwZGF0ZURhdGFUYWJsZSgpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHt7cGFnZTogbnVtYmVyLCBrZXk6IHZhbHVlIH19IGZpbHRlciBQcm9wcmllZGFkZSBwYXJhIGVudmlvIGRlIHVtIGZpbHRybyBjdXN0b21pemFkby5cclxuICAgKiBFeGVtcGxvIGRlIGVudmlvOlxyXG4gICAqXHJcbiAgICpgYGBcclxuICAgKiB0aGlzLmR5bmFtaWNUYWJsZS51cGRhdGVEYXRhVGFibGUoe3BhZ2U6IDMsIHNlYXJjaDogJ0JyYXNpbCd9KTtcclxuICAgKiBgYGBcclxuICAgKiBDYXNvIG7Do28gc2VqYSBwYXNzYWRvIHVtIGZpbHRybyBjdXN0b21pemFkbyBwYXJhIG8gbcOpdG9kbyBgdXBkYXRlRGF0YVRhYmxlYCBhIHRhYmVsYSBzZXLDoSBhdHVhbGl6YWRhIGNvbmZvcm1lIGEgcMOhZ2luYSBkbyB1bHRpbW8gaXRlbSBtb2RpZmljYWRvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVEYXRhVGFibGUoZmlsdGVyPzogYW55KSB7XHJcbiAgICBjb25zdCBpbmRleEl0ZW1TZWxlY3RlZCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5pdGVtU2VsZWN0ZWRBY3Rpb24pO1xyXG4gICAgY29uc3QgcGFnZU51bWJlciA9IE1hdGguZmxvb3IoaW5kZXhJdGVtU2VsZWN0ZWQgLyBQQUdFX1NJWkVfREVGQVVMVCk7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlciA8IDAgPyB0aGlzLmN1cnJlbnRQYWdlIDogcGFnZU51bWJlciArIDE7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmxvYWREYXRhKGZpbHRlcikuc3Vic2NyaWJlKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmxvYWREYXRhKHsgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgLi4udGhpcy5wYXJhbXMgfSkuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25maXJtUmVtb3ZlKFxyXG4gICAgYWN0aW9uUmVtb3ZlOiBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zWydyZW1vdmUnXSxcclxuICAgIGFjdGlvbkJlZm9yZVJlbW92ZTogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1snYmVmb3JlUmVtb3ZlJ10sXHJcbiAgICBpdGVtXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjb25maXJtT3B0aW9uczogUG9EaWFsb2dDb25maXJtT3B0aW9ucyA9IHtcclxuICAgICAgdGl0bGU6IHRoaXMubGl0ZXJhbHMuY29uZmlybVJlbW92ZVRpdGxlLFxyXG4gICAgICBtZXNzYWdlOiB0aGlzLmxpdGVyYWxzLmNvbmZpcm1SZW1vdmVNZXNzYWdlLFxyXG4gICAgICBjb25maXJtOiB0aGlzLnJlbW92ZS5iaW5kKHRoaXMsIGl0ZW0sIGFjdGlvblJlbW92ZSwgYWN0aW9uQmVmb3JlUmVtb3ZlKVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBvRGlhbG9nU2VydmljZS5jb25maXJtKGNvbmZpcm1PcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlybVJlbW92ZUFsbChcclxuICAgIGFjdGlvblJlbW92ZUFsbDogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1sncmVtb3ZlJ10sXHJcbiAgICBhY3Rpb25CZWZvcmVSZW1vdmVBbGw6IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNbJ2JlZm9yZVJlbW92ZSddXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjb25maXJtT3B0aW9uczogUG9EaWFsb2dDb25maXJtT3B0aW9ucyA9IHtcclxuICAgICAgdGl0bGU6IHRoaXMubGl0ZXJhbHMuY29uZmlybVJlbW92ZUFsbFRpdGxlLFxyXG4gICAgICBtZXNzYWdlOiB0aGlzLmxpdGVyYWxzLmNvbmZpcm1SZW1vdmVBbGxNZXNzYWdlLFxyXG4gICAgICBjb25maXJtOiB0aGlzLnJlbW92ZUFsbC5iaW5kKHRoaXMsIGFjdGlvblJlbW92ZUFsbCwgYWN0aW9uQmVmb3JlUmVtb3ZlQWxsKVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBvRGlhbG9nU2VydmljZS5jb25maXJtKGNvbmZpcm1PcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VW5pcXVlS2V5KGl0ZW0pIHtcclxuICAgIGNvbnN0IGtleXMgPSB1dGlsLm1hcE9iamVjdEJ5UHJvcGVydGllcyhpdGVtLCB0aGlzLmtleXMpO1xyXG5cclxuICAgIHJldHVybiB1dGlsLnZhbHVlc0Zyb21PYmplY3Qoa2V5cykuam9pbignfCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcmRlclBhcmFtKHNvcnRlZENvbHVtbjogUG9UYWJsZUNvbHVtblNvcnQgPSB7IHR5cGU6IHVuZGVmaW5lZCB9KSB7XHJcbiAgICBjb25zdCB7IGNvbHVtbiwgdHlwZSB9ID0gc29ydGVkQ29sdW1uO1xyXG5cclxuICAgIGlmICghY29sdW1uKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gUG9UYWJsZUNvbHVtblNvcnRUeXBlLkRlc2NlbmRpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgb3JkZXI6IGAtJHtjb2x1bW4ucHJvcGVydHl9YCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IG9yZGVyOiBgJHtjb2x1bW4ucHJvcGVydHl9YCB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRGF0YShwYXJhbXM6IHsgcGFnZT86IG51bWJlcjsgc2VhcmNoPzogc3RyaW5nIH0gPSB7fSkge1xyXG4gICAgY29uc3Qga2V5ID0gdGhpcy5rZXlzID8gdGhpcy5rZXlzWzBdIDogJ2lkJztcclxuICAgIGlmICghdGhpcy5zZXJ2aWNlQXBpKSB7XHJcbiAgICAgIHRoaXMucG9Ob3RpZmljYXRpb24uZXJyb3IodGhpcy5saXRlcmFscy5sb2FkRGF0YUVycm9yTm90aWZpY2F0aW9uKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9yZGVyUGFyYW0gPSB0aGlzLmdldE9yZGVyUGFyYW0odGhpcy5zb3J0ZWRDb2x1bW4pO1xyXG4gICAgY29uc3QgZGVmYXVsdFBhcmFtczogYW55ID0geyBwYWdlOiAxLCBwYWdlU2l6ZTogUEFHRV9TSVpFX0RFRkFVTFQgfTtcclxuICAgIGNvbnN0IGZ1bGxQYXJhbXM6IGFueSA9IHsgLi4uZGVmYXVsdFBhcmFtcywgLi4ucGFyYW1zLCAuLi5vcmRlclBhcmFtIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2UuZ2V0UmVzb3VyY2VzKGZ1bGxQYXJhbXMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlRHVwbGljYXRlSXRlbXMocmVzcG9uc2UuaXRlbXMsIHRoaXMuaXRlbXMsIGtleSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGZ1bGxQYXJhbXMucGFnZSA9PT0gMSA/IHJlc3BvbnNlLml0ZW1zIDogWy4uLnRoaXMuaXRlbXMsIC4uLnJlc3BvbnNlLml0ZW1zXTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBmdWxsUGFyYW1zLnBhZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNOZXh0ID0gcmVzcG9uc2UuaGFzTmV4dDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1ldGFkYXRhKFxyXG4gICAgc2VydmljZUFwaUZyb21Sb3V0ZTogc3RyaW5nLFxyXG4gICAgb25Mb2FkOiBVcmxPclBvQ3VzdG9taXphdGlvbkZ1bmN0aW9uXHJcbiAgKTogT2JzZXJ2YWJsZTxQb1BhZ2VEeW5hbWljVGFibGVNZXRhRGF0YT4ge1xyXG4gICAgaWYgKHNlcnZpY2VBcGlGcm9tUm91dGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2UuZ2V0TWV0YWRhdGE8UG9QYWdlRHluYW1pY1RhYmxlTWV0YURhdGE+KCkucGlwZShcclxuICAgICAgICB0YXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hdXRvUm91dGVyID0gcmVzcG9uc2UuYXV0b1JvdXRlciB8fCB0aGlzLmF1dG9Sb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSByZXNwb25zZS5hY3Rpb25zIHx8IHRoaXMuYWN0aW9ucztcclxuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IHJlc3BvbnNlLmJyZWFkY3J1bWIgfHwgdGhpcy5icmVhZGNydW1iO1xyXG4gICAgICAgICAgdGhpcy5maWVsZHMgPSByZXNwb25zZS5maWVsZHMgfHwgdGhpcy5maWVsZHM7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gcmVzcG9uc2UudGl0bGUgfHwgdGhpcy50aXRsZTtcclxuICAgICAgICAgIHRoaXMucGFnZUN1c3RvbUFjdGlvbnMgPSByZXNwb25zZS5wYWdlQ3VzdG9tQWN0aW9ucyB8fCB0aGlzLnBhZ2VDdXN0b21BY3Rpb25zO1xyXG4gICAgICAgICAgdGhpcy50YWJsZUN1c3RvbUFjdGlvbnMgPSByZXNwb25zZS50YWJsZUN1c3RvbUFjdGlvbnMgfHwgdGhpcy50YWJsZUN1c3RvbUFjdGlvbnM7XHJcbiAgICAgICAgICB0aGlzLmtlZXBGaWx0ZXJzID0gcmVzcG9uc2Uua2VlcEZpbHRlcnMgfHwgdGhpcy5rZWVwRmlsdGVycztcclxuICAgICAgICAgIHRoaXMuY29uY2F0RmlsdGVycyA9IHJlc3BvbnNlLmNvbmNhdEZpbHRlcnMgfHwgdGhpcy5jb25jYXRGaWx0ZXJzO1xyXG4gICAgICAgICAgdGhpcy5oaWRlUmVtb3ZlQWxsRGlzY2xhaW1lciA9IHJlc3BvbnNlLmhpZGVSZW1vdmVBbGxEaXNjbGFpbWVyIHx8IHRoaXMuaGlkZVJlbW92ZUFsbERpc2NsYWltZXI7XHJcbiAgICAgICAgICB0aGlzLmhpZGVDbG9zZURpc2NsYWltZXJzID0gcmVzcG9uc2UuaGlkZUNsb3NlRGlzY2xhaW1lcnMgfHwgdGhpcy5oaWRlQ2xvc2VEaXNjbGFpbWVycztcclxuICAgICAgICAgIHRoaXMucXVpY2tTZWFyY2hXaWR0aCA9IHJlc3BvbnNlLnF1aWNrU2VhcmNoV2lkdGggfHwgdGhpcy5xdWlja1NlYXJjaFdpZHRoO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmxvYWRPcHRpb25zT25Jbml0aWFsaXplKG9uTG9hZCkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubG9hZE9wdGlvbnNPbkluaXRpYWxpemUob25Mb2FkKTtcclxuICB9XHJcblxyXG4gIC8vIEB0b2RvIFZhbGlkYXIgcm90YXMgbmEgbcOjbyBwb2lzIHNlIGV4aXN0aXIgdW1hIHJvdGEgJyoqJyBvIGNhdGNoIGRvIG5hdmlnYXRpb24gbsOjbyBmdW5jaW9uYS5cclxuICBwcml2YXRlIG5hdmlnYXRlVG8oXHJcbiAgICByb3V0ZTogeyBwYXRoOiBzdHJpbmc7IGNvbXBvbmVudD87IHVybD86IHN0cmluZzsgcGFyYW1zPzogYW55IH0sXHJcbiAgICBmb3JjZVN0b3BBdXRvUm91dGVyOiBib29sZWFuID0gZmFsc2VcclxuICApIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZS51cmwgfHwgcm91dGUucGF0aF0sIHsgcXVlcnlQYXJhbXM6IHJvdXRlLnBhcmFtcyB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGlmIChmb3JjZVN0b3BBdXRvUm91dGVyIHx8ICF0aGlzLmF1dG9Sb3V0ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucm91dGVyLmNvbmZpZy51bnNoaWZ0KDxSb3V0ZT57XHJcbiAgICAgICAgcGF0aDogcm91dGUucGF0aCxcclxuICAgICAgICBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7IHNlcnZpY2VBcGk6IHRoaXMuc2VydmljZUFwaSwgYXV0b1JvdXRlcjogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHJvdXRlLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb25jYXRlbmF0ZWRVcmwoY29uY2F0S2V5czogYm9vbGVhbiwgdXJsOiBzdHJpbmcsIHNlbGVjdGVkSXRlbSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzLm1hcChrZXkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlbGVjdGVkSXRlbVtrZXldKSkuam9pbigpO1xyXG4gICAgcmV0dXJuIGNvbmNhdEtleXMgPyBgJHt1cmx9LyR7a2V5c31gIDogdXJsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuRGV0YWlsKGFjdGlvbjogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1snZGV0YWlsJ10sIGl0ZW0pIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5mb3JtYXRVbmlxdWVLZXkoaXRlbSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxyXG4gICAgICB0aGlzLnBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgLmJlZm9yZURldGFpbCh0aGlzLmFjdGlvbnMuYmVmb3JlRGV0YWlsLCBpZCwgaXRlbSlcclxuICAgICAgICAuc3Vic2NyaWJlKChiZWZvcmVEZXRhaWxSZXN1bHQ6IFBvUGFnZUR5bmFtaWNUYWJsZUJlZm9yZURldGFpbCkgPT5cclxuICAgICAgICAgIHRoaXMuZXhlY3V0ZURldGFpbChhY3Rpb24sIGJlZm9yZURldGFpbFJlc3VsdCwgaWQsIGl0ZW0pXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZURldGFpbChcclxuICAgIGFjdGlvbjogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1snZGV0YWlsJ10sXHJcbiAgICBiZWZvcmVEZXRhaWxSZXN1bHQ/OiBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVOZXcsXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIGl0ZW0/OiBhbnlcclxuICApIHtcclxuICAgIGNvbnN0IGJlZm9yZSA9IGJlZm9yZURldGFpbFJlc3VsdCA/PyB7fTtcclxuICAgIGNvbnN0IGFsbG93QWN0aW9uID0gdHlwZW9mIGJlZm9yZS5hbGxvd0FjdGlvbiA9PT0gJ2Jvb2xlYW4nID8gYmVmb3JlLmFsbG93QWN0aW9uIDogdHJ1ZTtcclxuICAgIGNvbnN0IHsgbmV3VXJsIH0gPSBiZWZvcmU7XHJcblxyXG4gICAgaWYgKGFsbG93QWN0aW9uICYmIGFjdGlvbikge1xyXG4gICAgICBpZiAobmV3VXJsKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aEZyb21OZXdVcmwobmV3VXJsLCBpZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUbyh7IHBhdGggfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucmVzb2x2ZVVybChpdGVtLCBhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUbyh7IHBhdGg6IGFjdGlvbiwgdXJsLCBjb21wb25lbnQ6IFBvUGFnZUR5bmFtaWNEZXRhaWxDb21wb25lbnQgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aW9uKGlkLCBpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXRoRnJvbU5ld1VybChuZXdVcmw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAobmV3VXJsLmluY2x1ZGVzKCc6aWQnKSkge1xyXG4gICAgICByZXR1cm4gbmV3VXJsLnJlcGxhY2UoLzppZC9nLCBpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3VXJsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuRHVwbGljYXRlKGFjdGlvbkR1cGxpY2F0ZTogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1snZHVwbGljYXRlJ10sIGl0ZW06IGFueSkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmZvcm1hdFVuaXF1ZUtleShpdGVtKTtcclxuICAgIGNvbnN0IGR1cGxpY2F0ZXMgPSB1dGlsLnJlbW92ZUtleXNQcm9wZXJ0aWVzKHRoaXMua2V5cywgdXRpbC5tYXBPYmplY3RCeVByb3BlcnRpZXMoaXRlbSwgdGhpcy5kdXBsaWNhdGVzKSk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgdGhpcy5wb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zU2VydmljZVxyXG4gICAgICAgIC5iZWZvcmVEdXBsaWNhdGUodGhpcy5hY3Rpb25zLmJlZm9yZUR1cGxpY2F0ZSwgaWQsIGR1cGxpY2F0ZXMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoYmVmb3JlRHVwbGljYXRlUmVzdWx0OiBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVEdXBsaWNhdGUpID0+XHJcbiAgICAgICAgICB0aGlzLmV4ZWN1dGVEdXBsaWNhdGUoYWN0aW9uRHVwbGljYXRlLCBiZWZvcmVEdXBsaWNhdGVSZXN1bHQsIGR1cGxpY2F0ZXMpXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZUR1cGxpY2F0ZShcclxuICAgIGFjdGlvbkR1cGxpY2F0ZTogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1snZHVwbGljYXRlJ10sXHJcbiAgICBiZWZvcmVEdXBsaWNhdGVSZXN1bHQ6IFBvUGFnZUR5bmFtaWNUYWJsZUJlZm9yZUR1cGxpY2F0ZSxcclxuICAgIGR1cGxpY2F0ZXM6IGFueVxyXG4gICkge1xyXG4gICAgY29uc3QgYmVmb3JlID0gYmVmb3JlRHVwbGljYXRlUmVzdWx0ID8/IHt9O1xyXG4gICAgY29uc3QgYWxsb3dBY3Rpb24gPSB0eXBlb2YgYmVmb3JlLmFsbG93QWN0aW9uID09PSAnYm9vbGVhbicgPyBiZWZvcmUuYWxsb3dBY3Rpb24gOiB0cnVlO1xyXG4gICAgY29uc3QgYmVmb3JlRHVwbGljYXRlUmVzb3VyY2UgPSBiZWZvcmUucmVzb3VyY2U7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBiZWZvcmUubmV3VXJsID8/IGFjdGlvbkR1cGxpY2F0ZTtcclxuXHJcbiAgICBpZiAoYWxsb3dBY3Rpb24gJiYgYWN0aW9uRHVwbGljYXRlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYmVmb3JlRHVwbGljYXRlUmVzb3VyY2UgPT09ICdvYmplY3QnICYmIGJlZm9yZUR1cGxpY2F0ZVJlc291cmNlICE9PSBudWxsKSB7XHJcbiAgICAgICAgZHVwbGljYXRlcyA9IHV0aWwucmVtb3ZlS2V5c1Byb3BlcnRpZXModGhpcy5rZXlzLCBiZWZvcmVEdXBsaWNhdGVSZXNvdXJjZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbmV3QWN0aW9uID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG8oeyBwYXRoOiBuZXdBY3Rpb24sIHBhcmFtczogeyBkdXBsaWNhdGU6IEpTT04uc3RyaW5naWZ5KGR1cGxpY2F0ZXMpIH0gfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXdBY3Rpb24oZHVwbGljYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5FZGl0KGFjdGlvbkVkaXQ6IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNbJ2VkaXQnXSwgaXRlbSkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmZvcm1hdFVuaXF1ZUtleShpdGVtKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxyXG4gICAgICB0aGlzLnBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgLmJlZm9yZUVkaXQodGhpcy5hY3Rpb25zLmJlZm9yZUVkaXQsIGlkLCBpdGVtKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc3dpdGNoTWFwKChiZWZvcmVFZGl0UmVzdWx0OiBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVFZGl0KSA9PlxyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVFZGl0QWN0aW9uKGFjdGlvbkVkaXQsIGJlZm9yZUVkaXRSZXN1bHQsIGl0ZW0sIGlkKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4ZWN1dGVFZGl0QWN0aW9uKFxyXG4gICAgYWN0aW9uOiBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zWydlZGl0J10sXHJcbiAgICBiZWZvcmVFZGl0UmVzdWx0OiBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVFZGl0LFxyXG4gICAgaXRlbTogYW55LFxyXG4gICAgaWQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgY29uc3QgbmV3RWRpdEFjdGlvbiA9IGJlZm9yZUVkaXRSZXN1bHQ/Lm5ld1VybCA/PyBhY3Rpb247XHJcbiAgICBjb25zdCBhbGxvd0FjdGlvbiA9IGJlZm9yZUVkaXRSZXN1bHQ/LmFsbG93QWN0aW9uID8/IHRydWU7XHJcblxyXG4gICAgaWYgKCFhbGxvd0FjdGlvbikge1xyXG4gICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuZXdFZGl0QWN0aW9uID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLm9wZW5FZGl0VXJsKG5ld0VkaXRBY3Rpb24sIGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSBuZXdFZGl0QWN0aW9uKGlkLCBpdGVtKTtcclxuICAgICAgaWYgKHR5cGVvZiB1cGRhdGVkSXRlbSA9PT0gJ29iamVjdCcgJiYgdXBkYXRlZEl0ZW0gIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLm1vZGlmeVVJVGFibGVJdGVtKGl0ZW0sIHV0aWwucmVtb3ZlS2V5c1Byb3BlcnRpZXModGhpcy5rZXlzLCB1cGRhdGVkSXRlbSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEVNUFRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuRWRpdFVybChwYXRoOiBzdHJpbmcsIGl0ZW0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucmVzb2x2ZVVybChpdGVtLCBwYXRoKTtcclxuXHJcbiAgICB0aGlzLm5hdmlnYXRlVG8oeyBwYXRoLCB1cmwgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vZGlmeVVJVGFibGVJdGVtKGN1cnJlbnRJdGVtLCBuZXdJdGVtVmFsdWUpIHtcclxuICAgIGNvbnN0IHRhYmxlSXRlbSA9IHRoaXMuaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gY3VycmVudEl0ZW0pO1xyXG4gICAgdGhpcy5pdGVtc1t0YWJsZUl0ZW1dID0geyAuLi5jdXJyZW50SXRlbSwgLi4ubmV3SXRlbVZhbHVlIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5OZXcoYWN0aW9uTmV3OiBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zWyduZXcnXSkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgdGhpcy5wb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zU2VydmljZVxyXG4gICAgICAgIC5iZWZvcmVOZXcodGhpcy5hY3Rpb25zLmJlZm9yZU5ldylcclxuICAgICAgICAuc3Vic2NyaWJlKChiZWZvcmVOZXdSZXN1bHQ6IFBvUGFnZUR5bmFtaWNUYWJsZUJlZm9yZU5ldykgPT4gdGhpcy5leGVjdXRlTmV3KGFjdGlvbk5ldywgYmVmb3JlTmV3UmVzdWx0KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4ZWN1dGVOZXcoYWN0aW9uTmV3OiBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zWyduZXcnXSwgYmVmb3JlTmV3UmVzdWx0PzogUG9QYWdlRHluYW1pY1RhYmxlQmVmb3JlTmV3KSB7XHJcbiAgICBjb25zdCBiZWZvcmUgPSBiZWZvcmVOZXdSZXN1bHQgPz8ge307XHJcbiAgICBjb25zdCBhbGxvd0FjdGlvbiA9IHR5cGVvZiBiZWZvcmUuYWxsb3dBY3Rpb24gPT09ICdib29sZWFuJyA/IGJlZm9yZS5hbGxvd0FjdGlvbiA6IHRydWU7XHJcbiAgICBjb25zdCB7IG5ld1VybCB9ID0gYmVmb3JlO1xyXG5cclxuICAgIGlmIChhbGxvd0FjdGlvbiAmJiBhY3Rpb25OZXcpIHtcclxuICAgICAgaWYgKG5ld1VybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG8oeyBwYXRoOiBuZXdVcmwgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmV3ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG8oeyBwYXRoOiBhY3Rpb25OZXcgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhY3Rpb25OZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhc28gZXhpc3RhIG1haXMgZGUgdW0gaWRlbnRpZmljYWRvciwgc2Vyw6EgY29uY2F0ZW5hZG8gY29tICd8Jy5cclxuICAgKlxyXG4gICAqIEV4OiB7IGlkOiAxLCBjb21wYW55OiAncG8nIH1cclxuICAgKlxyXG4gICAqIFBhcmEgbyBlbmRwb2ludCAvcmVzb3VyY2VzLzppZCBzZXLDoSBleGVjdXRhZGEgYSB1cmwgL3Jlc291cmNlcy8xfHBvXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmUoXHJcbiAgICBpdGVtLFxyXG4gICAgYWN0aW9uUmVtb3ZlOiBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zWydyZW1vdmUnXSxcclxuICAgIGFjdGlvbkJlZm9yZVJlbW92ZTogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1snYmVmb3JlUmVtb3ZlJ11cclxuICApIHtcclxuICAgIGNvbnN0IHVuaXF1ZUtleSA9IHRoaXMuZm9ybWF0VW5pcXVlS2V5KGl0ZW0pO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXHJcbiAgICAgIHRoaXMucG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1NlcnZpY2VcclxuICAgICAgICAuYmVmb3JlUmVtb3ZlKGFjdGlvbkJlZm9yZVJlbW92ZSwgdW5pcXVlS2V5LCBpdGVtKVxyXG4gICAgICAgIC5waXBlKHN3aXRjaE1hcChiZWZvcmVSZW1vdmUgPT4gdGhpcy5kZWxldGVBY3Rpb24oaXRlbSwgYWN0aW9uUmVtb3ZlLCBiZWZvcmVSZW1vdmUpKSlcclxuICAgICAgICAuc3Vic2NyaWJlKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGV0ZUFjdGlvbihcclxuICAgIGl0ZW0sXHJcbiAgICBhY3Rpb25SZW1vdmU6IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNbJ3JlbW92ZSddLFxyXG4gICAgYmVmb3JlUmVtb3ZlOiBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVSZW1vdmVcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgeyBhbGxvd0FjdGlvbiwgbmV3VXJsIH0gPSBiZWZvcmVSZW1vdmUgfHwge307XHJcbiAgICBjb25zdCBhbGxvdyA9IGFsbG93QWN0aW9uID8/IHRydWU7XHJcblxyXG4gICAgaWYgKGFsbG93KSB7XHJcbiAgICAgIGxldCB1bmlxdWVLZXkgPSB0aGlzLmZvcm1hdFVuaXF1ZUtleShpdGVtKTtcclxuICAgICAgY29uc3QgcmVzb3VyY2VUb1JlbW92ZUtleSA9IHRoaXMucmV0dXJuUmVzb3VyY2VzS2V5cyhbaXRlbV0pO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBhY3Rpb25SZW1vdmUgPT09ICdib29sZWFuJyB8fCBuZXdVcmwpIHtcclxuICAgICAgICB1bmlxdWVLZXkgPSBuZXdVcmwgPyB1bmRlZmluZWQgOiB1bmlxdWVLZXk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2VcclxuICAgICAgICAgIC5kZWxldGVSZXNvdXJjZSh1bmlxdWVLZXksIG5ld1VybClcclxuICAgICAgICAgIC5waXBlKG1hcCgoKSA9PiB0aGlzLnJlbW92ZUZyb21VSShyZXNvdXJjZVRvUmVtb3ZlS2V5LCB0aGlzLmxpdGVyYWxzLnJlbW92ZVN1Y2Nlc3NOb3RpZmljYXRpb24pKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBvZihhY3Rpb25SZW1vdmUodW5pcXVlS2V5LCBpdGVtKSkucGlwZShcclxuICAgICAgICB0YXAocmVtb3ZlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSByZW1vdmUgPz8gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUZyb21VSShyZXNvdXJjZVRvUmVtb3ZlS2V5LCB0aGlzLmxpdGVyYWxzLnJlbW92ZVN1Y2Nlc3NOb3RpZmljYXRpb24sIHJlbW92ZUl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mKHt9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVVJKGl0ZW1zOiBBcnJheTxhbnk+LCBtZXNzYWdlOiBzdHJpbmcsIHJlbW92ZSA9IHRydWUpIHtcclxuICAgIGlmIChyZW1vdmUgPT09IHRydWUgJiYgaXRlbXM/Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUxvY2FsSXRlbXMoaXRlbXMpO1xyXG4gICAgICB0aGlzLnBvTm90aWZpY2F0aW9uLnN1Y2Nlc3MobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUFsbChcclxuICAgIGFjdGlvblJlbW92ZUFsbDogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1sncmVtb3ZlQWxsJ10sXHJcbiAgICBhY3Rpb25CZWZvcmVSZW1vdmVBbGw6IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNbJ2JlZm9yZVJlbW92ZUFsbCddXHJcbiAgKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlc291cmNlc0tleXMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbXNLZXlzKCk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxyXG4gICAgICB0aGlzLnBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgLmJlZm9yZVJlbW92ZUFsbChhY3Rpb25CZWZvcmVSZW1vdmVBbGwsIG9yaWdpbmFsUmVzb3VyY2VzS2V5cylcclxuICAgICAgICAucGlwZShzd2l0Y2hNYXAoYmVmb3JlUmVtb3ZlID0+IHRoaXMuZGVsZXRlQWxsQWN0aW9uKGFjdGlvblJlbW92ZUFsbCwgYmVmb3JlUmVtb3ZlLCBvcmlnaW5hbFJlc291cmNlc0tleXMpKSlcclxuICAgICAgICAuc3Vic2NyaWJlKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkSXRlbXNLZXlzKCkge1xyXG4gICAgY29uc3QgcmVzb3VyY2VzID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLiRzZWxlY3RlZCk7XHJcblxyXG4gICAgaWYgKHJlc291cmNlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmV0dXJuUmVzb3VyY2VzS2V5cyhyZXNvdXJjZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXR1cm5SZXNvdXJjZXNLZXlzKHJlc291cmNlcykge1xyXG4gICAgcmV0dXJuIHV0aWwubWFwQXJyYXlCeVByb3BlcnRpZXMocmVzb3VyY2VzLCB0aGlzLmtleXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxldGVBbGxBY3Rpb24oXHJcbiAgICBhY3Rpb25SZW1vdmVBbGw6IFBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNbJ3JlbW92ZUFsbCddLFxyXG4gICAgYmVmb3JlUmVtb3ZlQWxsOiBQb1BhZ2VEeW5hbWljVGFibGVCZWZvcmVSZW1vdmVBbGwsXHJcbiAgICBvcmlnaW5hbFJlc291cmNlczogQXJyYXk8YW55PlxyXG4gICkge1xyXG4gICAgY29uc3QgeyBhbGxvd0FjdGlvbiwgbmV3VXJsLCByZXNvdXJjZXMgfSA9IGJlZm9yZVJlbW92ZUFsbCA/PyB7fTtcclxuICAgIGNvbnN0IGFsbG93ID0gYWxsb3dBY3Rpb24gPz8gdHJ1ZTtcclxuICAgIGNvbnN0IHJlc291cmNlc3RvRGVsZXRlID0gcmVzb3VyY2VzID8/IG9yaWdpbmFsUmVzb3VyY2VzO1xyXG5cclxuICAgIGlmIChhbGxvdyAmJiBBcnJheS5pc0FycmF5KHJlc291cmNlc3RvRGVsZXRlKSkge1xyXG4gICAgICBpZiAodHlwZW9mIGFjdGlvblJlbW92ZUFsbCA9PT0gJ2Jvb2xlYW4nIHx8IG5ld1VybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvUGFnZUR5bmFtaWNTZXJ2aWNlLmRlbGV0ZVJlc291cmNlcyhyZXNvdXJjZXN0b0RlbGV0ZSwgbmV3VXJsKS5waXBlKFxyXG4gICAgICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVUkocmVzb3VyY2VzdG9EZWxldGUsIHRoaXMubGl0ZXJhbHMucmVtb3ZlQWxsU3VjY2Vzc05vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9mKGFjdGlvblJlbW92ZUFsbChyZXNvdXJjZXN0b0RlbGV0ZSkpLnBpcGUoXHJcbiAgICAgICAgdGFwKHJlbW92ZUl0ZW1zID0+IHRoaXMucmVtb3ZlRnJvbVVJKHJlbW92ZUl0ZW1zLCB0aGlzLmxpdGVyYWxzLnJlbW92ZVN1Y2Nlc3NOb3RpZmljYXRpb24pKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvZih7fSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxvY2FsSXRlbXMoaXRlbXNLZXlzVG9SZW1vdmUgPSBbXSkge1xyXG4gICAgaWYgKGl0ZW1zS2V5c1RvUmVtb3ZlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbUtleSA9IHRoaXMuZm9ybWF0VW5pcXVlS2V5KGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiAhaXRlbXNLZXlzVG9SZW1vdmUuZmluZChpdGVtS2V5VG9SZW1vdmUgPT4gdXRpbC52YWx1ZXNGcm9tT2JqZWN0KGl0ZW1LZXlUb1JlbW92ZSkuam9pbignfCcpID09PSBpdGVtS2V5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc29sdmVVcmwoaXRlbTogYW55LCBwYXRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVuaXF1ZUtleSA9IHRoaXMuZm9ybWF0VW5pcXVlS2V5KGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoLzppZC9nLCB1bmlxdWVLZXkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQYWdlQWN0aW9ucyhhY3Rpb25zOiBQb1BhZ2VEeW5hbWljVGFibGVBY3Rpb25zKSB7XHJcbiAgICBpZiAoYWN0aW9ucz8ubmV3KSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFBhZ2VBY3Rpb25zID0gW3sgbGFiZWw6IHRoaXMubGl0ZXJhbHMucGFnZUFjdGlvbiwgYWN0aW9uOiB0aGlzLm9wZW5OZXcuYmluZCh0aGlzLCBhY3Rpb25zLm5ldykgfV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUN1c3RvbUFjdGlvbnNUb1BhZ2VMaXN0QWN0aW9uKFxyXG4gICAgY3VzdG9tQWN0aW9uczogQXJyYXk8UG9QYWdlRHluYW1pY1RhYmxlQ3VzdG9tQWN0aW9uPlxyXG4gICk6IEFycmF5PFBvUGFnZUFjdGlvbj4ge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIHJldHVybiBjdXN0b21BY3Rpb25zLm1hcChjdXN0b21BY3Rpb24gPT4gKHtcclxuICAgICAgbGFiZWw6IGN1c3RvbUFjdGlvbi5sYWJlbCxcclxuICAgICAgYWN0aW9uOiB0aGlzLmNhbGxQYWdlQ3VzdG9tQWN0aW9uLmJpbmQodGhpcywgY3VzdG9tQWN0aW9uKSxcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlUGFnZUN1c3RvbUFjdGlvbi5iaW5kKHRoaXMsIGN1c3RvbUFjdGlvbiksXHJcbiAgICAgIC4uLihjdXN0b21BY3Rpb24uaWNvbiAmJiB7IGljb246IGN1c3RvbUFjdGlvbi5pY29uIH0pLFxyXG4gICAgICB2aXNpYmxlOiBjdXN0b21BY3Rpb24udmlzaWJsZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2Zvcm1UYWJsZUN1c3RvbUFjdGlvbnNUb1RhYmxlQWN0aW9ucyhcclxuICAgIHRhYmxlQ3VzdG9tQWN0aW9uczogQXJyYXk8UG9QYWdlRHluYW1pY1RhYmxlQ3VzdG9tVGFibGVBY3Rpb24+XHJcbiAgKTogQXJyYXk8UG9UYWJsZUFjdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRhYmxlQ3VzdG9tQWN0aW9ucy5tYXAodGFibGVDdXN0b21BY3Rpb24gPT4gKHtcclxuICAgICAgbGFiZWw6IHRhYmxlQ3VzdG9tQWN0aW9uLmxhYmVsLFxyXG4gICAgICBpY29uOiB0YWJsZUN1c3RvbUFjdGlvbi5pY29uLFxyXG4gICAgICBhY3Rpb246IHRoaXMuY2FsbFRhYmxlQ3VzdG9tQWN0aW9uLmJpbmQodGhpcywgdGFibGVDdXN0b21BY3Rpb24pLFxyXG4gICAgICBkaXNhYmxlZDogdGFibGVDdXN0b21BY3Rpb24uZGlzYWJsZWQsXHJcbiAgICAgIHZpc2libGU6IHRhYmxlQ3VzdG9tQWN0aW9uLnZpc2libGVcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEaXNhYmxlUGFnZUN1c3RvbUFjdGlvbihjdXN0b21BY3Rpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjdXN0b21BY3Rpb24uc2VsZWN0YWJsZSAmJiAhdGhpcy5nZXRTZWxlY3RlZEl0ZW1zS2V5cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsUGFnZUN1c3RvbUFjdGlvbihjdXN0b21BY3Rpb246IFBvUGFnZUR5bmFtaWNUYWJsZUN1c3RvbUFjdGlvbikge1xyXG4gICAgaWYgKGN1c3RvbUFjdGlvbi5hY3Rpb24pIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGN1c3RvbUFjdGlvbi5zZWxlY3RhYmxlID8gdGhpcy5nZXRTZWxlY3RlZEl0ZW1zS2V5cygpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgY29uc3Qgc2VuZEN1c3RvbUFjdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMucG9QYWdlRHluYW1pY1RhYmxlQWN0aW9uc1NlcnZpY2VcclxuICAgICAgICAuY3VzdG9tQWN0aW9uKGN1c3RvbUFjdGlvbi5hY3Rpb24sIHNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChzZW5kQ3VzdG9tQWN0aW9uU3Vic2NyaXB0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoY3VzdG9tQWN0aW9uLnVybCkge1xyXG4gICAgICB0aGlzLm5hdmlnYXRlVG8oeyBwYXRoOiBjdXN0b21BY3Rpb24udXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsVGFibGVDdXN0b21BY3Rpb24oY3VzdG9tQWN0aW9uOiBQb1BhZ2VEeW5hbWljVGFibGVDdXN0b21UYWJsZUFjdGlvbiwgc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICB0aGlzLml0ZW1TZWxlY3RlZEFjdGlvbiA9IHNlbGVjdGVkSXRlbTtcclxuICAgIGlmIChjdXN0b21BY3Rpb24uYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHNlbmRDdXN0b21BY3Rpb25TdWJzY3JpcHRpb24gPSB0aGlzLnBvUGFnZUR5bmFtaWNUYWJsZUFjdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgLmN1c3RvbUFjdGlvbihjdXN0b21BY3Rpb24uYWN0aW9uLCBzZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAgLnN1YnNjcmliZSh1cGRhdGVkSXRlbSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHVwZGF0ZWRJdGVtID09PSAnb2JqZWN0JyAmJiB1cGRhdGVkSXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGlmeVVJVGFibGVJdGVtKHNlbGVjdGVkSXRlbSwgdXRpbC5yZW1vdmVLZXlzUHJvcGVydGllcyh0aGlzLmtleXMsIHVwZGF0ZWRJdGVtKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHNlbmRDdXN0b21BY3Rpb25TdWJzY3JpcHRpb24pO1xyXG4gICAgfSBlbHNlIGlmIChjdXN0b21BY3Rpb24udXJsKSB7XHJcbiAgICAgIGlmIChpc0V4dGVybmFsTGluayhjdXN0b21BY3Rpb24udXJsKSkge1xyXG4gICAgICAgIG9wZW5FeHRlcm5hbExpbmsodGhpcy5jcmVhdGVDb25jYXRlbmF0ZWRVcmwoY3VzdG9tQWN0aW9uLmNvbmNhdEtleXMsIGN1c3RvbUFjdGlvbi51cmwsIHNlbGVjdGVkSXRlbSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLmNyZWF0ZUNvbmNhdGVuYXRlZFVybChjdXN0b21BY3Rpb24uY29uY2F0S2V5cywgY3VzdG9tQWN0aW9uLnVybCwgc2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJlbW92ZUFsbEFjdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX2FjdGlvbnM7XHJcbiAgICBpZiAodGhpcy5zaG93UmVtb3ZlKGFjdGlvbi5yZW1vdmVBbGwpKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFBhZ2VBY3Rpb25zID0gW1xyXG4gICAgICAgIC4uLnRoaXMuX2RlZmF1bHRQYWdlQWN0aW9ucyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5saXRlcmFscy5wYWdlQWN0aW9uUmVtb3ZlQWxsLFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLmNvbmZpcm1SZW1vdmVBbGwuYmluZCh0aGlzLCBhY3Rpb24ucmVtb3ZlQWxsLCBhY3Rpb24uYmVmb3JlUmVtb3ZlQWxsKSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVSZW1vdmVBbGwuYmluZCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZVJlbW92ZUFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5nZXRTZWxlY3RlZEl0ZW1zS2V5cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYWJsZUFjdGlvbnMoYWN0aW9uczogUG9QYWdlRHluYW1pY1RhYmxlQWN0aW9ucykge1xyXG4gICAgaWYgKGFjdGlvbnMpIHtcclxuICAgICAgY29uc3QgdmlzaWJsZVJlbW92ZSA9IHRoaXMuc2hvd1JlbW92ZShhY3Rpb25zLnJlbW92ZSk7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFRhYmxlQWN0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMub3BlbkRldGFpbC5iaW5kKHRoaXMsIGFjdGlvbnMuZGV0YWlsKSxcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLnRhYmxlQWN0aW9uVmlldyxcclxuICAgICAgICAgIHZpc2libGU6ICEhdGhpcy5fYWN0aW9ucy5kZXRhaWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5vcGVuRWRpdC5iaW5kKHRoaXMsIGFjdGlvbnMuZWRpdCksXHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5saXRlcmFscy50YWJsZUFjdGlvbkVkaXQsXHJcbiAgICAgICAgICB2aXNpYmxlOiAhIXRoaXMuX2FjdGlvbnMuZWRpdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLm9wZW5EdXBsaWNhdGUuYmluZCh0aGlzLCBhY3Rpb25zLmR1cGxpY2F0ZSksXHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5saXRlcmFscy50YWJsZUFjdGlvbkR1cGxpY2F0ZSxcclxuICAgICAgICAgIHZpc2libGU6ICEhdGhpcy5fYWN0aW9ucy5kdXBsaWNhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5jb25maXJtUmVtb3ZlLmJpbmQodGhpcywgYWN0aW9ucy5yZW1vdmUsIGFjdGlvbnMuYmVmb3JlUmVtb3ZlKSxcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLnRhYmxlQWN0aW9uRGVsZXRlLFxyXG4gICAgICAgICAgc2VwYXJhdG9yOiB0cnVlLFxyXG4gICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlUmVtb3ZlXHJcbiAgICAgICAgfVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRGF0YUZyb21BUEkoKSB7XHJcbiAgICBjb25zdCB7IHNlcnZpY2VBcGk6IHNlcnZpY2VBcGlGcm9tUm91dGUsIHNlcnZpY2VNZXRhZGF0YUFwaSwgc2VydmljZUxvYWRBcGkgfSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QuZGF0YTtcclxuXHJcbiAgICBjb25zdCBvbkxvYWQgPSBzZXJ2aWNlTG9hZEFwaSB8fCB0aGlzLm9uTG9hZDtcclxuICAgIHRoaXMuc2VydmljZUFwaSA9IHNlcnZpY2VBcGlGcm9tUm91dGUgfHwgdGhpcy5zZXJ2aWNlQXBpO1xyXG5cclxuICAgIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2UuY29uZmlnU2VydmljZUFwaSh7IGVuZHBvaW50OiB0aGlzLnNlcnZpY2VBcGksIG1ldGFkYXRhOiBzZXJ2aWNlTWV0YWRhdGFBcGkgfSk7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEkID0gdGhpcy5nZXRNZXRhZGF0YShzZXJ2aWNlQXBpRnJvbVJvdXRlLCBvbkxvYWQpO1xyXG4gICAgY29uc3QgZGF0YSQgPSB0aGlzLmxvYWREYXRhKCk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgbWV0YWRhdGEkXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsRmlsdGVycyA9IHRoaXMuZ2V0SW5pdGlhbFZhbHVlc0Zyb21GaWx0ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoaW5pdGlhbEZpbHRlcnMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhJDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbml0aWFsVmFsdWVzRnJvbUZpbHRlcigpIHtcclxuICAgIGNvbnN0IGluaXRpYWxGaWx0ZXJzID0gdGhpcy5maWx0ZXJzLnJlZHVjZShcclxuICAgICAgKHJlc3VsdCwgaXRlbSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2l0ZW0ucHJvcGVydHldOiBpdGVtLmluaXRWYWx1ZSB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoaW5pdGlhbEZpbHRlcnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKCFpbml0aWFsRmlsdGVyc1trZXldKSB7XHJcbiAgICAgICAgZGVsZXRlIGluaXRpYWxGaWx0ZXJzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbml0aWFsRmlsdGVycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE9wdGlvbnNPbkluaXRpYWxpemUob25Mb2FkOiBVcmxPclBvQ3VzdG9taXphdGlvbkZ1bmN0aW9uKSB7XHJcbiAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFBvRHluYW1pY1BhZ2VPcHRpb25zKG9uTG9hZCkucGlwZShcclxuICAgICAgICB0YXAocmVzcG9uc2VQb09wdGlvbiA9PlxyXG4gICAgICAgICAgdGhpcy5wb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZS5jaGFuZ2VPcmlnaW5hbE9wdGlvbnNUb05ld09wdGlvbnModGhpcywgcmVzcG9uc2VQb09wdGlvbilcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb0R5bmFtaWNQYWdlT3B0aW9ucyhvbkxvYWQ6IFVybE9yUG9DdXN0b21pemF0aW9uRnVuY3Rpb24pOiBPYnNlcnZhYmxlPFBvUGFnZUR5bmFtaWNUYWJsZU9wdGlvbnM+IHtcclxuICAgIGNvbnN0IG9yaWdpbmFsT3B0aW9uOiBQb1BhZ2VEeW5hbWljVGFibGVPcHRpb25zID0ge1xyXG4gICAgICBmaWVsZHM6IHRoaXMuZmllbGRzLFxyXG4gICAgICBhY3Rpb25zOiB0aGlzLmFjdGlvbnMsXHJcbiAgICAgIGJyZWFkY3J1bWI6IHRoaXMuYnJlYWRjcnVtYixcclxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgIGtlZXBGaWx0ZXJzOiB0aGlzLmtlZXBGaWx0ZXJzLFxyXG4gICAgICBjb25jYXRGaWx0ZXJzOiB0aGlzLmNvbmNhdEZpbHRlcnMsXHJcbiAgICAgIGhpZGVSZW1vdmVBbGxEaXNjbGFpbWVyOiB0aGlzLmhpZGVSZW1vdmVBbGxEaXNjbGFpbWVyLFxyXG4gICAgICBoaWRlQ2xvc2VEaXNjbGFpbWVyczogdGhpcy5oaWRlQ2xvc2VEaXNjbGFpbWVycyxcclxuICAgICAgcGFnZUN1c3RvbUFjdGlvbnM6IHRoaXMucGFnZUN1c3RvbUFjdGlvbnMsXHJcbiAgICAgIHRhYmxlQ3VzdG9tQWN0aW9uczogdGhpcy50YWJsZUN1c3RvbUFjdGlvbnMsXHJcbiAgICAgIHF1aWNrU2VhcmNoV2lkdGg6IHRoaXMucXVpY2tTZWFyY2hXaWR0aFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwYWdlT3B0aW9uU2NoZW1hOiBQb1BhZ2VEeW5hbWljT3B0aW9uc1NjaGVtYTxQb1BhZ2VEeW5hbWljVGFibGVPcHRpb25zPiA9IHtcclxuICAgICAgc2NoZW1hOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdmaWVsZHMnLFxyXG4gICAgICAgICAgbWVyZ2U6IHRydWUsXHJcbiAgICAgICAgICBrZXlGb3JNZXJnZTogJ3Byb3BlcnR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdhY3Rpb25zJyxcclxuICAgICAgICAgIG1lcmdlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ2JyZWFkY3J1bWInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ3RpdGxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdrZWVwRmlsdGVycydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAncXVpY2tTZWFyY2hXaWR0aCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAnY29uY2F0RmlsdGVycydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAnaGlkZVJlbW92ZUFsbERpc2NsYWltZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ2hpZGVDbG9zZURpc2NsYWltZXJzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdwYWdlQ3VzdG9tQWN0aW9ucycsXHJcbiAgICAgICAgICBtZXJnZTogdHJ1ZSxcclxuICAgICAgICAgIGtleUZvck1lcmdlOiAnbGFiZWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ3RhYmxlQ3VzdG9tQWN0aW9ucycsXHJcbiAgICAgICAgICBtZXJnZTogdHJ1ZSxcclxuICAgICAgICAgIGtleUZvck1lcmdlOiAnbGFiZWwnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldEN1c3RvbU9wdGlvbnMob25Mb2FkLCBvcmlnaW5hbE9wdGlvbiwgcGFnZU9wdGlvblNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dSZW1vdmU8VD4oYWN0aW9uUmVtb3ZlOiBUKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25SZW1vdmUgPz8gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyVmFsdWUoZmlsdGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoZmlsdGVyLmhhc093blByb3BlcnR5KGl0ZW0ucHJvcGVydHkpKSB7XHJcbiAgICAgICAgaXRlbS5pbml0VmFsdWUgPSBmaWx0ZXJbaXRlbS5wcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQYWdlQWN0aW9ucygpIHtcclxuICAgIHRoaXMucGFnZUFjdGlvbnMgPSBbLi4udGhpcy5fZGVmYXVsdFBhZ2VBY3Rpb25zLCAuLi50aGlzLl9jdXN0b21QYWdlTGlzdEFjdGlvbnNdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUYWJsZUFjdGlvbnMoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0VGFibGVBY3Rpb25zV2l0aG91dEFjdGlvbkRlbGV0ZSA9IHRoaXMuX2RlZmF1bHRUYWJsZUFjdGlvbnMuZmlsdGVyKFxyXG4gICAgICB0YWJsZUFjdGlvbiA9PiB0YWJsZUFjdGlvbi5sYWJlbCAhPT0gdGhpcy5saXRlcmFscy50YWJsZUFjdGlvbkRlbGV0ZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUFjdGlvbkRlbGV0ZSA9IHRoaXMuX2RlZmF1bHRUYWJsZUFjdGlvbnMuZmluZChcclxuICAgICAgdGFibGVBY3Rpb24gPT4gdGFibGVBY3Rpb24ubGFiZWwgPT09IHRoaXMubGl0ZXJhbHMudGFibGVBY3Rpb25EZWxldGVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbmV3VGFibGVBY3Rpb25zID0gWy4uLmRlZmF1bHRUYWJsZUFjdGlvbnNXaXRob3V0QWN0aW9uRGVsZXRlLCAuLi50aGlzLl9jdXN0b21UYWJsZUFjdGlvbnNdO1xyXG5cclxuICAgIGlmICh0YWJsZUFjdGlvbkRlbGV0ZSkge1xyXG4gICAgICBuZXdUYWJsZUFjdGlvbnMucHVzaCh0YWJsZUFjdGlvbkRlbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50YWJsZUFjdGlvbnMgPSBuZXdUYWJsZUFjdGlvbnM7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1wYWdlLWR5bmFtaWMtc2VhcmNoXHJcbiAgW3AtYWN0aW9uc109XCJwYWdlQWN0aW9uc1wiXHJcbiAgW3AtYnJlYWRjcnVtYl09XCJicmVhZGNydW1iXCJcclxuICBbcC1oaWRlLWNsb3NlLWRpc2NsYWltZXJzXT1cImhpZGVDbG9zZURpc2NsYWltZXJzXCJcclxuICBbcC1maWx0ZXJzXT1cImZpbHRlcnNcIlxyXG4gIFtwLWtlZXAtZmlsdGVyc109XCJrZWVwRmlsdGVyc1wiXHJcbiAgW3AtY29uY2F0LWZpbHRlcnNdPVwiY29uY2F0RmlsdGVyc1wiXHJcbiAgW3AtaGlkZS1yZW1vdmUtYWxsLWRpc2NsYWltZXJdPVwiaGlkZVJlbW92ZUFsbERpc2NsYWltZXJcIlxyXG4gIFtwLXF1aWNrLXNlYXJjaC13aWR0aF09XCJxdWlja1NlYXJjaFdpZHRoXCJcclxuICBbcC10aXRsZV09XCJ0aXRsZVwiXHJcbiAgKHAtYWR2YW5jZWQtc2VhcmNoKT1cIm9uQWR2YW5jZWRTZWFyY2goJGV2ZW50KVwiXHJcbiAgKHAtY2hhbmdlLWRpc2NsYWltZXJzKT1cIm9uQ2hhbmdlRGlzY2xhaW1lcnMoJGV2ZW50KVwiXHJcbiAgKHAtcXVpY2stc2VhcmNoKT1cIm9uUXVpY2tTZWFyY2goJGV2ZW50KVwiXHJcbj5cclxuICA8cG8tdGFibGVcclxuICAgIFtwLXNvcnRdPVwidHJ1ZVwiXHJcbiAgICBbcC1hY3Rpb25zXT1cInRhYmxlQWN0aW9uc1wiXHJcbiAgICBbcC1hY3Rpb25zLXJpZ2h0XT1cImFjdGlvblJpZ2h0XCJcclxuICAgIFtwLXNlbGVjdGFibGVdPVwiZW5hYmxlU2VsZWN0aW9uVGFibGVcIlxyXG4gICAgW3AtY29sdW1uc109XCJjb2x1bW5zXCJcclxuICAgIFtwLWl0ZW1zXT1cIml0ZW1zXCJcclxuICAgIFtwLWhlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgW3AtaW5maW5pdGUtc2Nyb2xsXT1cImluZmluaXRlU2Nyb2xsXCJcclxuICAgIFtwLXNob3ctbW9yZS1kaXNhYmxlZF09XCIhaGFzTmV4dFwiXHJcbiAgICAocC1zaG93LW1vcmUpPVwic2hvd01vcmUoKVwiXHJcbiAgICAocC1zb3J0LWJ5KT1cIm9uU29ydCgkZXZlbnQpXCJcclxuICAgIChwLWNoYW5nZS12aXNpYmxlLWNvbHVtbnMpPVwib25DaGFuZ2VWaXNpYmxlQ29sdW1ucygkZXZlbnQpXCJcclxuICAgIChwLXJlc3RvcmUtY29sdW1uLW1hbmFnZXIpPVwib25Db2x1bW5SZXN0b3JlTWFuYWdlcigkZXZlbnQpXCJcclxuICAgIChwLXNvcnQtYnkpPVwib25Tb3J0QnkoJGV2ZW50KVwiXHJcbiAgPlxyXG4gIDwvcG8tdGFibGU+XHJcbjwvcG8tcGFnZS1keW5hbWljLXNlYXJjaD5cclxuIl19