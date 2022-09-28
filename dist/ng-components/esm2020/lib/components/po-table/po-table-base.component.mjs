import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { capitalizeFirstLetter, convertToBoolean, isTypeof, sortValues } from '../../utils/util';
import { poLocaleDefault } from '../../services/po-language/po-language.constant';
import { PoTableColumnSortType } from './enums/po-table-column-sort-type.enum';
import { InputBoolean } from '../../decorators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-date/po-date.service";
import * as i2 from "../../services/po-language/po-language.service";
import * as i3 from "./services/po-table.service";
export const poTableContainer = ['border', 'shadow'];
export const poTableContainerDefault = 'border';
export const poTableLiteralsDefault = {
    en: {
        noColumns: 'Columns are not defined',
        noData: 'No data found',
        noVisibleColumn: 'No visible column',
        loadingData: 'Loading',
        loadMoreData: 'Load more data',
        seeCompleteSubtitle: 'See complete subtitle',
        completeSubtitle: 'Complete subtitle',
        columnsManager: 'Columns manager'
    },
    es: {
        noColumns: 'Columnas no definidas',
        noData: 'Datos no encontrados',
        noVisibleColumn: 'Sin columnas visibles',
        loadingData: 'Cargando datos',
        loadMoreData: 'Cargar más resultados',
        seeCompleteSubtitle: 'Ver subtitulo completo',
        completeSubtitle: 'Subtitulo completo',
        columnsManager: 'Gerente de columna'
    },
    pt: {
        noColumns: 'Nenhuma definição de colunas',
        noData: 'Nenhum dado encontrado',
        noVisibleColumn: 'Nenhuma coluna visível',
        loadingData: 'Carregando',
        loadMoreData: 'Carregar mais resultados',
        seeCompleteSubtitle: 'Ver legenda completa',
        completeSubtitle: 'Legenda completa',
        columnsManager: 'Gerenciador de colunas'
    },
    ru: {
        noColumns: 'Нет определения столбца',
        noData: 'Данные не найдены',
        noVisibleColumn: 'нет видимых столбцов',
        loadingData: 'Загрузка',
        loadMoreData: 'Загрузка',
        seeCompleteSubtitle: 'Посмотреть полный субтитр',
        completeSubtitle: 'Полный заголовок',
        columnsManager: 'менеджер колонок'
    }
};
/**
 * @description
 *
 * Este componente de tabela é utilizado para exibição de dados com diferentes tipos como por exemplo textos, data, horas e números com
 * formato personalizado.
 *
 * Também é possivel criar tabelas com ordenação de dados, linhas com detalhes, coluna para seleção de linhas, coluna com ações e também
 * carregamento por demanda através do botão **Carregar mais resultados**.
 *
 * > As linhas de detalhes podem também ser customizadas através do [`p-table-row-template`](/documentation/po-table-row-template).
 *
 * > As colunas podem ser customizadas através dos templates [`p-table-column-template`](/documentation/po-table-column-template)
 * e [`p-table-cell-template`](/documentation/po-table-cell-template).
 *
 * O componente permite gerenciar a exibição das colunas dinamicamente. Esta funcionalidade pode ser acessada através do ícone de engrenagem
 * no canto superior direito do cabeçalho da tabela.
 *
 * Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um *scroll* na horizontal para a
 * completa visualização dos dados.
 */
export class PoTableBaseComponent {
    constructor(poDate, languageService, poTableService) {
        this.poDate = poDate;
        this.poTableService = poTableService;
        /**
         * @optional
         *
         * @description
         *
         * Se verdadeiro, habilita a quebra de texto ao transborda-lo dentro de qualquer coluna.
         * > Quando ocorrer a quebra de texto, ao passar o mouse no conteúdo da célula,
         * o mesmo será exibido através do [`po-tooltip`](/documentation/po-tooltip).
         */
        this.hideTextOverflow = false;
        /**
         * @optional
         *
         * @description
         *
         * Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.
         *
         * @default `false`
         */
        this.hideColumnsManager = false;
        /**
         * @optional
         *
         * @description
         *
         * Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.
         *
         * @default `false`
         */
        this.autoCollapse = false;
        /**
         * @optional
         *
         * @description
         *
         * Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".
         *
         * @default `false`
         */
        this.loadingShowMore = false;
        /**
         * @optional
         *
         * @description
         *
         * Habilita em todas as colunas a opção de ordenação de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
         * mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.
         *
         * @default `false`
         */
        this.sort = false;
        /**
         * @description
         *
         * Se verdadeiro, torna habilitado o botão "Carregar mais resultados".
         *
         * @default `false`
         */
        this.showMoreDisabled = false;
        /**
         * @description
         *
         * Habilita ou desabilita o estilo listrado da tabela (`striped`).
         * > Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.
         *
         * @default `false`
         */
        this.striped = false;
        /**
         * @description
         *
         * Esconde o *checkbox* para seleção de todas as linhas.
         *
         * > Sempre receberá *true* caso a seleção de apenas uma linha esteja ativa.
         *
         * @default `false`
         */
        this.hideSelectAll = false;
        /**
         * @description
         *
         * Define que somente uma linha da tabela pode ser selecionada.
         *
         * > Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.
         */
        this.singleSelect = false;
        /**
         * @description
         *
         * Permite selecionar um item da tabela clicando na linha.
         *
         * > Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `false`.
         *
         * @default `true`
         */
        this.selectableEntireLine = true;
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
         * Evento executado quando todas as linhas são selecionadas por meio do *checkbox* que seleciona todas as linhas.
         */
        this.allSelected = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento executado quando a seleção das linhas é desmarcada por meio do *checkbox* que seleciona todas as linhas.
         */
        this.allUnselected = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento executado ao colapsar uma linha do `po-table`.
         *
         * > Como parâmetro o componente envia o item colapsado.
         */
        this.collapsed = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento executado ao expandir uma linha do `po-table`.
         *
         * > Como parâmetro o componente envia o item expandido.
         */
        this.expanded = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento executado ao selecionar uma linha do `po-table`.
         */
        this.selected = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Recebe uma ação de clique para o botão "Carregar mais resultados", caso nenhuma ação for definida o mesmo
         * não é visível.
         *
         * Recebe um objeto `{ column, type }` onde:
         *
         * - column (`PoTableColumn`): objeto da coluna que está ordenada.
         * - type (`PoTableColumnSortType`): tipo da ordenação.
         */
        this.showMore = new EventEmitter();
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
        this.sortBy = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento executado ao desmarcar a seleção de uma linha do `po-table`.
         */
        this.unselected = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
         *
         * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.changeVisibleColumns = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
         *
         * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.columnRestoreManager = new EventEmitter();
        this.hasMainColumns = false;
        this.mainColumns = [];
        this.selectAll = false;
        this.sortedColumn = { property: null, ascending: true };
        this.subtitleColumns = [];
        this.page = 1;
        this.pageSize = 10;
        this.hasService = false;
        this._actions = [];
        this._columns = [];
        this._hideDetail = false;
        this._loading = false;
        this.language = poLocaleDefault;
        this._infiniteScrollDistance = 100;
        this._infiniteScroll = false;
        this.language = languageService.getShortLanguage();
    }
    /**
     * @description
     *
     * Lista de itens da tabela.
     * > Se falso, será inicializado como um *array* vazio.
     */
    set items(items) {
        this._items = Array.isArray(items) ? items : [];
        // when haven't items, selectAll should be unchecked.
        if (!this.hasItems) {
            this.selectAll = false;
        }
        else if (!this.hasColumns) {
            this.columns = this.getDefaultColumns(items[0]);
        }
        // timeout necessario para os itens serem refletidos na tabela
        setTimeout(() => this.checkInfiniteScroll());
    }
    get items() {
        return this._items;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista das colunas da tabela, deve receber um *array* de objetos que implementam a interface `PoTableColumn`.
     * Por padrão receberá como valor a primeira coluna da lista de itens da tabela.
     * > Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.
     *
     */
    set columns(columns) {
        if (this.initialColumns === undefined) {
            this.initialColumns = columns;
        }
        this._columns = columns || [];
        if (this._columns.length) {
            this.setColumnLink();
        }
        else if (this.hasItems) {
            this._columns = this.getDefaultColumns(this.items[0]);
        }
        this.onChangeColumns();
    }
    get columns() {
        return this._columns;
    }
    /**
     * @optional
     *
     * @description
     *
     * Adiciona um contorno arredondado ao `po-table`, as opções são:
     * - `border`: com bordas/linhas.
     * - `shadow`: com sombras.
     *
     * @default `border`
     */
    set container(value) {
        this._container = poTableContainer.includes(value) ? value : poTableContainerDefault;
    }
    get container() {
        return this._container;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da tabela em *pixels* e fixa o cabeçalho.
     *
     * Ao utilizar essa propriedade será inserido o `virtual-scroll` na tabela melhorando a performance.
     */
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    /**
     * @optional
     *
     * @description
     *
     * Habilita a visualização da lista de detalhes de cada linha da coluna.
     *
     * @default `false`
     */
    set hideDetail(hideDetail) {
        this._hideDetail = hideDetail != null && hideDetail.toString() === '' ? true : convertToBoolean(hideDetail);
    }
    get hideDetail() {
        return this._hideDetail;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-table`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoTableLiterals = {
     *    loadMoreData: 'Buscar mais dados',
     *    loadingData: 'Processando',
     *    noColumns: 'Sem colunas',
     *    noData: 'Sem dados',
     *    seeCompleteSubtitle: 'Mostrar legenda completa',
     *    completeSubtitle: 'Todas legendas'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoTableLiterals = {
     *    noData: 'Sem dados'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-table
     *   [p-literals]="customLiterals">
     * </po-table>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poTableLiteralsDefault[poLocaleDefault],
                ...poTableLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poTableLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poTableLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Bloqueia a interação do usuário com os dados da _table_.
     *
     * @default `false`
     */
    set loading(loading) {
        this._loading = convertToBoolean(loading);
    }
    get loading() {
        return this._loading;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma lista de ações.
     *
     * Quando houver apenas uma ação definida ela será exibida diretamente na coluna, caso contrário, o componente
     * se encarrega de agrupá-las exibindo o ícone [**po-icon-more**](/guides/icons) que listará as ações ao ser clicado.
     *
     * **A coluna de ações não será exibida quando:**
     *  - a lista conter valores inválidos ou indefinidos.
     *  - tenha uma única ação e a mesma não for visível.
     */
    set actions(actions) {
        this._actions = actions;
    }
    get actions() {
        return this._actions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Permite a seleção de linhas na tabela e, caso a propriedade `p-single-select` esteja definida será possível
     * selecionar apenas uma única linha.
     *
     * **Importante:**
     *  - As linhas de detalhe definidas em `PoTableDetail` possuem comportamento independente da linha mestre;
     *  - Cada linha possui por padrão a propriedade dinâmica `$selected`, na qual é possível validar se a linha
     * está selecionada, por exemplo: `item.$selected` ou `item['$selected']`.
     *
     * @default `false`
     */
    set selectable(value) {
        this._selectable = value === '' ? true : convertToBoolean(value);
    }
    get selectable() {
        return this._selectable;
    }
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
    set infiniteScroll(value) {
        this._infiniteScroll = convertToBoolean(value && this.height > 0);
    }
    get infiniteScroll() {
        return this._infiniteScroll;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o percentual necessário para disparar o evento `p-show-more`, que é responsável por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
     * que 0, o valor padrão será 100%
     *
     * **Exemplos:**
     *  - p-infinite-scroll-distance = 80: Quando atingir 80%  do scroll da tabela, o `p-show-more` será disparado.
     */
    set infiniteScrollDistance(value) {
        this._infiniteScrollDistance = value > 100 || value < 0 ? 100 : value;
    }
    get infiniteScrollDistance() {
        return this._infiniteScrollDistance;
    }
    /**
     * @optional
     *
     * @description
     *
     * URL da API responsável por retornar os registros.
     *
     * Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `page` e `pageSize`, conforme abaixo:
     *
     * ```
     * url + ?page=1&pageSize=10
     * ```
     *
     * Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `order`, por exemplo:
     * - Coluna decrescente:
     * ```
     *  url + ?page=1&pageSize=10&order=-name
     * ```
     *
     * - Coluna ascendente:
     * ```
     *  url + ?page=1&pageSize=10&order=name
     * ```
     *
     * > Esta URL deve retornar e receber os dados no padrão de [API do PO UI](https://po-ui.io/guides/api).
     */
    set serviceApi(service) {
        this._serviceApi = service;
        this.setService(this.serviceApi);
        this.hasService = !!service;
        this.showMoreDisabled = !this.hasService;
        this.page = 1;
        this.initializeData();
    }
    get serviceApi() {
        return this._serviceApi;
    }
    get hasColumns() {
        return this.columns && this.columns.length > 0;
    }
    get hasItems() {
        return !!(this.items && this.items.length);
    }
    get nameColumnDetail() {
        return this.columnMasterDetail ? this.columnMasterDetail.property : null;
    }
    get validColumns() {
        const typesValid = [
            'string',
            'number',
            'boolean',
            'date',
            'time',
            'dateTime',
            'currency',
            'subtitle',
            'link',
            'label',
            'icon',
            'cellTemplate',
            'columnTemplate'
        ];
        return this.columns.filter(col => !col.type || typesValid.includes(col.type));
    }
    get sortType() {
        return this.sortedColumn.ascending ? PoTableColumnSortType.Ascending : PoTableColumnSortType.Descending;
    }
    ngOnDestroy() {
        this.poTableServiceSubscription?.unsubscribe();
    }
    ngOnChanges(changes) {
        if (this.singleSelect || this.hideSelectAll) {
            this.selectAll = false;
            this.hideSelectAll = true;
        }
        if (changes.height) {
            this.calculateHeightTableContainer(this.height);
        }
    }
    selectAllRows() {
        if (!this.hideSelectAll) {
            this.selectAll = !this.selectAll;
            this.items.forEach(item => {
                item.$selected = this.selectAll;
            });
            this.emitSelectAllEvents(this.selectAll, [...this.items]);
        }
    }
    selectRow(row) {
        row.$selected = !row.$selected;
        this.emitSelectEvents(row);
        this.configAfterSelectRow(this.items, row);
    }
    hasSelectableRow() {
        return this.selectable && this.selectableEntireLine;
    }
    selectDetailRow(row) {
        this.emitSelectEvents(row);
    }
    getClassColor(row, column) {
        return column.color ? `po-text-${this.getColumnColor(row, column)}` : '';
    }
    toggleDetail(row) {
        const rowShowDetail = row.$showDetail;
        if (this.autoCollapse) {
            this.collapseAllItems(this.items);
        }
        this.setShowDetail(row, !rowShowDetail);
        this.emitExpandEvents(row);
    }
    toggleRowAction(row) {
        const toggleShowAction = row.$showAction;
        this.items.forEach(item => {
            if (item.$showAction) {
                item.$showAction = false;
            }
        });
        row.$showAction = !toggleShowAction;
    }
    sortColumn(column) {
        if (!this.sort || column.type === 'detail' || column.sortable === false) {
            return;
        }
        this.sortedColumn.ascending = this.sortedColumn.property === column ? !this.sortedColumn.ascending : true;
        this.sortArray(column, this.sortedColumn.ascending);
        this.sortBy.emit({ column, type: this.sortType });
        if (this.hasService && this.sort) {
            this.sortStore = { column, type: this.sortType };
        }
        this.sortedColumn.property = column;
    }
    onShowMore() {
        const sort = this.sortedColumn.property ? { column: this.sortedColumn.property, type: this.sortType } : undefined;
        if (this.hasService) {
            this.page++;
            this.loading = true;
            this.loadingShowMore = true;
            this.poTableServiceSubscription = this.getFilteredItems().subscribe(data => {
                this.items = [...this.items, ...data.items];
                this.showMoreDisabled = !data.hasNext;
                this.loading = false;
                this.loadingShowMore = false;
            });
        }
        this.showMore.emit(sort);
    }
    getFilteredItems(queryParams) {
        const filteredParams = this.getFilteredParams(queryParams);
        return this.poTableService.getFilteredItems(filteredParams);
    }
    setTableResponseProperties(data) {
        this.items = data.items || [];
        this.showMoreDisabled = !data.hasNext;
        this.loading = false;
    }
    initializeData(params) {
        if (this.hasService) {
            this.loading = true;
            this.getFilteredItems(params).subscribe(data => {
                this.setTableResponseProperties(data);
            });
        }
    }
    getDefaultColumns(item) {
        const keys = Object.keys(item);
        return keys
            .filter(key => typeof item[key] !== 'object')
            .map(key => ({ label: capitalizeFirstLetter(key), property: key }));
    }
    setShowDetail(rowIdentifier, isShowDetail) {
        const isRowIndex = typeof rowIdentifier === 'number' && this.items[rowIdentifier];
        const row = isRowIndex ? this.items[rowIdentifier] : rowIdentifier;
        row.$showDetail = isShowDetail;
    }
    collapseAllItems(items) {
        for (const item of items) {
            if (item.$showDetail) {
                this.setShowDetail(item, false);
                this.emitExpandEvents(item);
            }
        }
    }
    configAfterSelectRow(rows, row) {
        if (this.singleSelect) {
            this.unselectOtherRows(rows, row);
        }
        else if (!this.hideSelectAll) {
            this.selectAll = this.isEverySelected(rows);
        }
    }
    emitExpandEvents(row) {
        row.$showDetail ? this.expanded.emit(row) : this.collapsed.emit(row);
    }
    emitSelectAllEvents(selectAll, rows) {
        selectAll ? this.allSelected.emit(rows) : this.allUnselected.emit(rows);
    }
    emitSelectEvents(row) {
        row.$selected ? this.selected.emit(row) : this.unselected.emit(row);
    }
    getColumnColor(row, column) {
        const columnColor = column.color;
        return isTypeof(columnColor, 'function') ? columnColor(row, column.property) : columnColor;
    }
    // Retorna a coluna da lista de colunas que é do tipo detail
    getColumnMasterDetail() {
        return this.columns.find(col => col.type === 'detail');
    }
    // Colunas que são inseridas no <head> da tabela
    getMainColumns() {
        return this.validColumns.filter(col => col.visible !== false);
    }
    // Retorna as colunas com status
    getSubtitleColumns() {
        return this.columns.filter(col => col.type === 'subtitle');
    }
    isEverySelected(items) {
        const someCheckedOrIndeterminate = item => item.$selected || item.$selected === null;
        const everyChecked = item => item.$selected;
        if (items.every(everyChecked)) {
            return true;
        }
        if (items.some(someCheckedOrIndeterminate)) {
            return null;
        }
        return false;
    }
    onChangeColumns() {
        this.setMainColumns();
        this.setColumnMasterDetail();
        this.setSubtitleColumns();
    }
    setColumnLink() {
        this.columns.forEach(column => {
            if (column['type'] === 'link' && !column['link']) {
                column['link'] = 'link';
            }
        });
    }
    setColumnMasterDetail() {
        this.columnMasterDetail = this.getColumnMasterDetail();
    }
    setMainColumns() {
        this.mainColumns = this.getMainColumns();
        this.hasMainColumns = !!this.mainColumns.length;
        this.allColumnsWidthPixels = this.verifyWidthColumnsPixels();
    }
    setSubtitleColumns() {
        this.subtitleColumns = this.getSubtitleColumns();
    }
    sortArray(column, ascending) {
        const itemsList = [...this.items];
        itemsList.sort((leftSide, rightSide) => sortValues(leftSide[column.property], rightSide[column.property], ascending));
        this.items = itemsList;
    }
    unselectOtherRows(rows, row) {
        rows.forEach(item => {
            if (item !== row) {
                item.$selected = false;
            }
        });
    }
    verifyWidthColumnsPixels() {
        return this.hasMainColumns ? this.mainColumns.every(column => column.width && column.width.includes('px')) : false;
    }
    setService(service) {
        if (service && isTypeof(service, 'string')) {
            this.poTableService.setUrl(service);
        }
    }
    getFilteredParams(queryParams) {
        const { page, pageSize, sortStore } = this;
        const filteredParams = {};
        const order = this.getOrderParam(sortStore);
        const params = { page, pageSize, order, ...queryParams };
        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined) {
                filteredParams[key] = params[key];
            }
        }
        return filteredParams;
    }
    getOrderParam(sort = { type: undefined }) {
        const { column, type } = sort;
        if (!column) {
            return;
        }
        if (type === PoTableColumnSortType.Descending) {
            return `-${column.property}`;
        }
        return `${column.property}`;
    }
}
PoTableBaseComponent.ɵfac = function PoTableBaseComponent_Factory(t) { return new (t || PoTableBaseComponent)(i0.ɵɵdirectiveInject(i1.PoDateService), i0.ɵɵdirectiveInject(i2.PoLanguageService), i0.ɵɵdirectiveInject(i3.PoTableService)); };
PoTableBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTableBaseComponent, inputs: { hideTextOverflow: ["p-hide-text-overflow", "hideTextOverflow"], hideColumnsManager: ["p-hide-columns-manager", "hideColumnsManager"], autoCollapse: ["p-auto-collapse", "autoCollapse"], loadingShowMore: ["p-loading-show-more", "loadingShowMore"], sort: ["p-sort", "sort"], showMoreDisabled: ["p-show-more-disabled", "showMoreDisabled"], striped: ["p-striped", "striped"], hideSelectAll: ["p-hide-select-all", "hideSelectAll"], singleSelect: ["p-single-select", "singleSelect"], selectableEntireLine: ["p-selectable-entire-line", "selectableEntireLine"], actionRight: ["p-actions-right", "actionRight"], maxColumns: ["p-max-columns", "maxColumns"], items: ["p-items", "items"], columns: ["p-columns", "columns"], container: ["p-container", "container"], height: ["p-height", "height"], hideDetail: ["p-hide-detail", "hideDetail"], literals: ["p-literals", "literals"], loading: ["p-loading", "loading"], actions: ["p-actions", "actions"], selectable: ["p-selectable", "selectable"], infiniteScroll: ["p-infinite-scroll", "infiniteScroll"], infiniteScrollDistance: ["p-infinite-scroll-distance", "infiniteScrollDistance"], serviceApi: ["p-service-api", "serviceApi"] }, outputs: { allSelected: "p-all-selected", allUnselected: "p-all-unselected", collapsed: "p-collapsed", expanded: "p-expanded", selected: "p-selected", showMore: "p-show-more", sortBy: "p-sort-by", unselected: "p-unselected", changeVisibleColumns: "p-change-visible-columns", columnRestoreManager: "p-restore-column-manager" }, features: [i0.ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "hideTextOverflow", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "hideColumnsManager", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "autoCollapse", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "loadingShowMore", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "sort", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "showMoreDisabled", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "striped", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "hideSelectAll", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "singleSelect", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "selectableEntireLine", void 0);
__decorate([
    InputBoolean()
], PoTableBaseComponent.prototype, "actionRight", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoDateService }, { type: i2.PoLanguageService }, { type: i3.PoTableService }]; }, { hideTextOverflow: [{
            type: Input,
            args: ['p-hide-text-overflow']
        }], hideColumnsManager: [{
            type: Input,
            args: ['p-hide-columns-manager']
        }], autoCollapse: [{
            type: Input,
            args: ['p-auto-collapse']
        }], loadingShowMore: [{
            type: Input,
            args: ['p-loading-show-more']
        }], sort: [{
            type: Input,
            args: ['p-sort']
        }], showMoreDisabled: [{
            type: Input,
            args: ['p-show-more-disabled']
        }], striped: [{
            type: Input,
            args: ['p-striped']
        }], hideSelectAll: [{
            type: Input,
            args: ['p-hide-select-all']
        }], singleSelect: [{
            type: Input,
            args: ['p-single-select']
        }], selectableEntireLine: [{
            type: Input,
            args: ['p-selectable-entire-line']
        }], actionRight: [{
            type: Input,
            args: ['p-actions-right']
        }], maxColumns: [{
            type: Input,
            args: ['p-max-columns']
        }], allSelected: [{
            type: Output,
            args: ['p-all-selected']
        }], allUnselected: [{
            type: Output,
            args: ['p-all-unselected']
        }], collapsed: [{
            type: Output,
            args: ['p-collapsed']
        }], expanded: [{
            type: Output,
            args: ['p-expanded']
        }], selected: [{
            type: Output,
            args: ['p-selected']
        }], showMore: [{
            type: Output,
            args: ['p-show-more']
        }], sortBy: [{
            type: Output,
            args: ['p-sort-by']
        }], unselected: [{
            type: Output,
            args: ['p-unselected']
        }], changeVisibleColumns: [{
            type: Output,
            args: ['p-change-visible-columns']
        }], columnRestoreManager: [{
            type: Output,
            args: ['p-restore-column-manager']
        }], items: [{
            type: Input,
            args: ['p-items']
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }], container: [{
            type: Input,
            args: ['p-container']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], hideDetail: [{
            type: Input,
            args: ['p-hide-detail']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], loading: [{
            type: Input,
            args: ['p-loading']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], selectable: [{
            type: Input,
            args: ['p-selectable']
        }], infiniteScroll: [{
            type: Input,
            args: ['p-infinite-scroll']
        }], infiniteScrollDistance: [{
            type: Input,
            args: ['p-infinite-scroll-distance']
        }], serviceApi: [{
            type: Input,
            args: ['p-service-api']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFibGUvcG8tdGFibGUtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFLbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQU9oRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNyRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxRQUFRLENBQUM7QUFFaEQsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUc7SUFDcEMsRUFBRSxFQUFtQjtRQUNuQixTQUFTLEVBQUUseUJBQXlCO1FBQ3BDLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLGVBQWUsRUFBRSxtQkFBbUI7UUFDcEMsV0FBVyxFQUFFLFNBQVM7UUFDdEIsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixtQkFBbUIsRUFBRSx1QkFBdUI7UUFDNUMsZ0JBQWdCLEVBQUUsbUJBQW1CO1FBQ3JDLGNBQWMsRUFBRSxpQkFBaUI7S0FDbEM7SUFDRCxFQUFFLEVBQW1CO1FBQ25CLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QixlQUFlLEVBQUUsdUJBQXVC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QUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUN2RSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUxRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWxILElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUU1QixJQUFJLENBQUMsMEJBQTBC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biAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBjb252ZXJ0VG9Cb29sZWFuLCBpc1R5cGVvZiwgc29ydFZhbHVlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tZGF0ZS9wby1kYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb1RhYmxlQWN0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXRhYmxlLWFjdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXRhYmxlLWNvbHVtbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uU29ydCB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby10YWJsZS1jb2x1bW4tc29ydC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uU29ydFR5cGUgfSBmcm9tICcuL2VudW1zL3BvLXRhYmxlLWNvbHVtbi1zb3J0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvVGFibGVMaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby10YWJsZS1saXRlcmFscy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgUG9UYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlUmVzcG9uc2VBcGkgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tdGFibGUtcmVzcG9uc2UtYXBpLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvVGFibGVGaWx0ZXJlZEl0ZW1zUGFyYW1zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXRhYmxlLWZpbHRlcmVkLWl0ZW1zLXBhcmFtcy5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgUXVlcnlQYXJhbXNUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuXHJcbmV4cG9ydCBjb25zdCBwb1RhYmxlQ29udGFpbmVyID0gWydib3JkZXInLCAnc2hhZG93J107XHJcbmV4cG9ydCBjb25zdCBwb1RhYmxlQ29udGFpbmVyRGVmYXVsdCA9ICdib3JkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvVGFibGVMaXRlcmFsc0RlZmF1bHQgPSB7XHJcbiAgZW46IDxQb1RhYmxlTGl0ZXJhbHM+e1xyXG4gICAgbm9Db2x1bW5zOiAnQ29sdW1ucyBhcmUgbm90IGRlZmluZWQnLFxyXG4gICAgbm9EYXRhOiAnTm8gZGF0YSBmb3VuZCcsXHJcbiAgICBub1Zpc2libGVDb2x1bW46ICdObyB2aXNpYmxlIGNvbHVtbicsXHJcbiAgICBsb2FkaW5nRGF0YTogJ0xvYWRpbmcnLFxyXG4gICAgbG9hZE1vcmVEYXRhOiAnTG9hZCBtb3JlIGRhdGEnLFxyXG4gICAgc2VlQ29tcGxldGVTdWJ0aXRsZTogJ1NlZSBjb21wbGV0ZSBzdWJ0aXRsZScsXHJcbiAgICBjb21wbGV0ZVN1YnRpdGxlOiAnQ29tcGxldGUgc3VidGl0bGUnLFxyXG4gICAgY29sdW1uc01hbmFnZXI6ICdDb2x1bW5zIG1hbmFnZXInXHJcbiAgfSxcclxuICBlczogPFBvVGFibGVMaXRlcmFscz57XHJcbiAgICBub0NvbHVtbnM6ICdDb2x1bW5hcyBubyBkZWZpbmlkYXMnLFxyXG4gICAgbm9EYXRhOiAnRGF0b3Mgbm8gZW5jb250cmFkb3MnLFxyXG4gICAgbm9WaXNpYmxlQ29sdW1uOiAnU2luIGNvbHVtbmFzIHZpc2libGVzJyxcclxuICAgIGxvYWRpbmdEYXRhOiAnQ2FyZ2FuZG8gZGF0b3MnLFxyXG4gICAgbG9hZE1vcmVEYXRhOiAnQ2FyZ2FyIG3DoXMgcmVzdWx0YWRvcycsXHJcbiAgICBzZWVDb21wbGV0ZVN1YnRpdGxlOiAnVmVyIHN1YnRpdHVsbyBjb21wbGV0bycsXHJcbiAgICBjb21wbGV0ZVN1YnRpdGxlOiAnU3VidGl0dWxvIGNvbXBsZXRvJyxcclxuICAgIGNvbHVtbnNNYW5hZ2VyOiAnR2VyZW50ZSBkZSBjb2x1bW5hJ1xyXG4gIH0sXHJcbiAgcHQ6IDxQb1RhYmxlTGl0ZXJhbHM+e1xyXG4gICAgbm9Db2x1bW5zOiAnTmVuaHVtYSBkZWZpbmnDp8OjbyBkZSBjb2x1bmFzJyxcclxuICAgIG5vRGF0YTogJ05lbmh1bSBkYWRvIGVuY29udHJhZG8nLFxyXG4gICAgbm9WaXNpYmxlQ29sdW1uOiAnTmVuaHVtYSBjb2x1bmEgdmlzw612ZWwnLFxyXG4gICAgbG9hZGluZ0RhdGE6ICdDYXJyZWdhbmRvJyxcclxuICAgIGxvYWRNb3JlRGF0YTogJ0NhcnJlZ2FyIG1haXMgcmVzdWx0YWRvcycsXHJcbiAgICBzZWVDb21wbGV0ZVN1YnRpdGxlOiAnVmVyIGxlZ2VuZGEgY29tcGxldGEnLFxyXG4gICAgY29tcGxldGVTdWJ0aXRsZTogJ0xlZ2VuZGEgY29tcGxldGEnLFxyXG4gICAgY29sdW1uc01hbmFnZXI6ICdHZXJlbmNpYWRvciBkZSBjb2x1bmFzJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb1RhYmxlTGl0ZXJhbHM+e1xyXG4gICAgbm9Db2x1bW5zOiAn0J3QtdGCINC+0L/RgNC10LTQtdC70LXQvdC40Y8g0YHRgtC+0LvQsdGG0LAnLFxyXG4gICAgbm9EYXRhOiAn0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YsnLFxyXG4gICAgbm9WaXNpYmxlQ29sdW1uOiAn0L3QtdGCINCy0LjQtNC40LzRi9GFINGB0YLQvtC70LHRhtC+0LInLFxyXG4gICAgbG9hZGluZ0RhdGE6ICfQl9Cw0LPRgNGD0LfQutCwJyxcclxuICAgIGxvYWRNb3JlRGF0YTogJ9CX0LDQs9GA0YPQt9C60LAnLFxyXG4gICAgc2VlQ29tcGxldGVTdWJ0aXRsZTogJ9Cf0L7RgdC80L7RgtGA0LXRgtGMINC/0L7Qu9C90YvQuSDRgdGD0LHRgtC40YLRgCcsXHJcbiAgICBjb21wbGV0ZVN1YnRpdGxlOiAn0J/QvtC70L3Ri9C5INC30LDQs9C+0LvQvtCy0L7QuicsXHJcbiAgICBjb2x1bW5zTWFuYWdlcjogJ9C80LXQvdC10LTQttC10YAg0LrQvtC70L7QvdC+0LonXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBFc3RlIGNvbXBvbmVudGUgZGUgdGFiZWxhIMOpIHV0aWxpemFkbyBwYXJhIGV4aWJpw6fDo28gZGUgZGFkb3MgY29tIGRpZmVyZW50ZXMgdGlwb3MgY29tbyBwb3IgZXhlbXBsbyB0ZXh0b3MsIGRhdGEsIGhvcmFzIGUgbsO6bWVyb3MgY29tXHJcbiAqIGZvcm1hdG8gcGVyc29uYWxpemFkby5cclxuICpcclxuICogVGFtYsOpbSDDqSBwb3NzaXZlbCBjcmlhciB0YWJlbGFzIGNvbSBvcmRlbmHDp8OjbyBkZSBkYWRvcywgbGluaGFzIGNvbSBkZXRhbGhlcywgY29sdW5hIHBhcmEgc2VsZcOnw6NvIGRlIGxpbmhhcywgY29sdW5hIGNvbSBhw6fDtWVzIGUgdGFtYsOpbVxyXG4gKiBjYXJyZWdhbWVudG8gcG9yIGRlbWFuZGEgYXRyYXbDqXMgZG8gYm90w6NvICoqQ2FycmVnYXIgbWFpcyByZXN1bHRhZG9zKiouXHJcbiAqXHJcbiAqID4gQXMgbGluaGFzIGRlIGRldGFsaGVzIHBvZGVtIHRhbWLDqW0gc2VyIGN1c3RvbWl6YWRhcyBhdHJhdsOpcyBkbyBbYHAtdGFibGUtcm93LXRlbXBsYXRlYF0oL2RvY3VtZW50YXRpb24vcG8tdGFibGUtcm93LXRlbXBsYXRlKS5cclxuICpcclxuICogPiBBcyBjb2x1bmFzIHBvZGVtIHNlciBjdXN0b21pemFkYXMgYXRyYXbDqXMgZG9zIHRlbXBsYXRlcyBbYHAtdGFibGUtY29sdW1uLXRlbXBsYXRlYF0oL2RvY3VtZW50YXRpb24vcG8tdGFibGUtY29sdW1uLXRlbXBsYXRlKVxyXG4gKiBlIFtgcC10YWJsZS1jZWxsLXRlbXBsYXRlYF0oL2RvY3VtZW50YXRpb24vcG8tdGFibGUtY2VsbC10ZW1wbGF0ZSkuXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBwZXJtaXRlIGdlcmVuY2lhciBhIGV4aWJpw6fDo28gZGFzIGNvbHVuYXMgZGluYW1pY2FtZW50ZS4gRXN0YSBmdW5jaW9uYWxpZGFkZSBwb2RlIHNlciBhY2Vzc2FkYSBhdHJhdsOpcyBkbyDDrWNvbmUgZGUgZW5ncmVuYWdlbVxyXG4gKiBubyBjYW50byBzdXBlcmlvciBkaXJlaXRvIGRvIGNhYmXDp2FsaG8gZGEgdGFiZWxhLlxyXG4gKlxyXG4gKiBDYXNvIGEgbGFyZ3VyYSBkZSB0b2RhcyBhcyBjb2x1bmFzIGZvcmVtIGRlZmluaWRhcyBlIG8gdG90YWwgdWx0cmFwYXNzYXIgbyB0YW1hbmhvIHRhYmVsYSwgc2Vyw6EgZXhpYmlkbyB1bSAqc2Nyb2xsKiBuYSBob3Jpem9udGFsIHBhcmEgYVxyXG4gKiBjb21wbGV0YSB2aXN1YWxpemHDp8OjbyBkb3MgZGFkb3MuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvVGFibGVCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBTZSB2ZXJkYWRlaXJvLCBoYWJpbGl0YSBhIHF1ZWJyYSBkZSB0ZXh0byBhbyB0cmFuc2JvcmRhLWxvIGRlbnRybyBkZSBxdWFscXVlciBjb2x1bmEuXHJcbiAgICogPiBRdWFuZG8gb2NvcnJlciBhIHF1ZWJyYSBkZSB0ZXh0bywgYW8gcGFzc2FyIG8gbW91c2Ugbm8gY29udGXDumRvIGRhIGPDqWx1bGEsXHJcbiAgICogbyBtZXNtbyBzZXLDoSBleGliaWRvIGF0cmF2w6lzIGRvIFtgcG8tdG9vbHRpcGBdKC9kb2N1bWVudGF0aW9uL3BvLXRvb2x0aXApLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXRleHQtb3ZlcmZsb3cnKSBASW5wdXRCb29sZWFuKCkgaGlkZVRleHRPdmVyZmxvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUGVybWl0ZSBxdWUgbyBnZXJlbmNpYWRvciBkZSBjb2x1bmFzLCByZXNwb25zw6F2ZWwgcGVsYSBkZWZpbmnDp8OjbyBkZSBxdWFpcyBjb2x1bmFzIHNlcsOjbyBleGliaWRhcywgc2VqYSBlc2NvbmRpZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtY29sdW1ucy1tYW5hZ2VyJykgQElucHV0Qm9vbGVhbigpIGhpZGVDb2x1bW5zTWFuYWdlcj86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFBlcm1pdGUgZmVjaGFyIHVtIGRldGFsaGUgb3Ugcm93IHRlbXBsYXRlIGF1dG9tYXRpY2FtZW50ZSwgYW8gYWJyaXIgb3V0cm8gaXRlbS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1jb2xsYXBzZScpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ29sbGFwc2U/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQZXJtaXRlIHF1ZSBzZWphIGFkaWNpb25hZG8gbyBlc3RhZG8gZGUgY2FycmVnYW1lbnRvIG5vIGJvdMOjbyBcIkNhcnJlZ2FyIG1haXMgcmVzdWx0YWRvc1wiLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sb2FkaW5nLXNob3ctbW9yZScpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nU2hvd01vcmU/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBIYWJpbGl0YSBlbSB0b2RhcyBhcyBjb2x1bmFzIGEgb3DDp8OjbyBkZSBvcmRlbmHDp8OjbyBkZSBkYWRvcy4gQ2FzbyBhIGNvbHVuYSBzZWphIGRvIHRpcG8gJ2RhdGEnIG91ICdkYXRlVGltZScgYVxyXG4gICAqIG1lc21hIGRldmUgcmVzcGVpdGFyIG9zIHRpcG9zIGRlIGVudHJhZGEgZGVmaW5pZG9zIHBhcmEgcXVlIHNlamFtIG9yZGVuYWRhcy5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc29ydCcpIEBJbnB1dEJvb2xlYW4oKSBzb3J0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogU2UgdmVyZGFkZWlybywgdG9ybmEgaGFiaWxpdGFkbyBvIGJvdMOjbyBcIkNhcnJlZ2FyIG1haXMgcmVzdWx0YWRvc1wiLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zaG93LW1vcmUtZGlzYWJsZWQnKSBASW5wdXRCb29sZWFuKCkgc2hvd01vcmVEaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBIYWJpbGl0YSBvdSBkZXNhYmlsaXRhIG8gZXN0aWxvIGxpc3RyYWRvIGRhIHRhYmVsYSAoYHN0cmlwZWRgKS5cclxuICAgKiA+IFJlY29tZW5kYWRvIHBhcmEgdGFiZWxhcyBjb20gbWFpb3IgbsO6bWVybyBkZSBkYWRvcywgZmFjaWxpdGFuZG8gYSBzdWEgdmlzdWFsaXphw6fDo28gbmEgdGFiZWxhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zdHJpcGVkJykgQElucHV0Qm9vbGVhbigpIHN0cmlwZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXNjb25kZSBvICpjaGVja2JveCogcGFyYSBzZWxlw6fDo28gZGUgdG9kYXMgYXMgbGluaGFzLlxyXG4gICAqXHJcbiAgICogPiBTZW1wcmUgcmVjZWJlcsOhICp0cnVlKiBjYXNvIGEgc2VsZcOnw6NvIGRlIGFwZW5hcyB1bWEgbGluaGEgZXN0ZWphIGF0aXZhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXNlbGVjdC1hbGwnKSBASW5wdXRCb29sZWFuKCkgaGlkZVNlbGVjdEFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBxdWUgc29tZW50ZSB1bWEgbGluaGEgZGEgdGFiZWxhIHBvZGUgc2VyIHNlbGVjaW9uYWRhLlxyXG4gICAqXHJcbiAgICogPiBFc3RhIGRlZmluacOnw6NvIG7Do28gc2UgYXBsaWNhIGFvcyBpdGVucyBmaWxob3MsIG9zIG1lc21vcyBwb3NzdWVtIGNvbXBvcnRhbWVudG8gaW5kZXBlbmRlbnRlIGRvIGl0ZW0gcGFpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zaW5nbGUtc2VsZWN0JykgQElucHV0Qm9vbGVhbigpIHNpbmdsZVNlbGVjdD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQZXJtaXRlIHNlbGVjaW9uYXIgdW0gaXRlbSBkYSB0YWJlbGEgY2xpY2FuZG8gbmEgbGluaGEuXHJcbiAgICpcclxuICAgKiA+IENhc28gaGFqYSBuZWNlc3NpZGFkZSBkZSBzZWxlY2lvbmFyIG8gaXRlbSBhcGVuYXMgdmlhIHJhZGlvIG91IGNoZWNrYm94LCBkZXZlLXNlIGRlZmluaXIgZXN0YSBwcm9wcmllZGFkZSBjb21vIGBmYWxzZWAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgdHJ1ZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2VsZWN0YWJsZS1lbnRpcmUtbGluZScpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RhYmxlRW50aXJlTGluZT86IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHF1ZSBhIGNvbHVuYSBkZSBhw6fDtWVzIGZpY2Fyw6Egbm8gbGFkbyBkaXJlaXRvIGRhIHRhYmVsYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYWN0aW9ucy1yaWdodCcpIEBJbnB1dEJvb2xlYW4oKSBhY3Rpb25SaWdodD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSB1bWEgcXVhbnRpZGFkZSBtw6F4aW1hIGRlIGNvbHVuYXMgcXVlIHNlcsOjbyBleGliaWRhcyBuYSB0YWJlbGEuXHJcbiAgICpcclxuICAgKiBRdWFuZG8gY2hlZ2FyIG5vIHZhbG9yIGluZm9ybWFkbywgYXMgY29sdW5hcyBxdWUgbsOjbyBlc3RpdmVyZW0gc2VsZWNpb25hZGFzIGZpY2Fyw6NvXHJcbiAgICogZGVzYWJpbGl0YWRhcyBlIGNhc28gaG91dmVyIG1haXMgY29sdW5hcyB2aXPDrXZlaXMgZG8gcXVlIG8gcGVybWl0aWRvLCBhcyBleGNlZGVudGVzXHJcbiAgICogc2Vyw6NvIGlnbm9yYWRhcyBwb3Igb3JkZW0gZGUgcG9zacOnw6NvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1tYXgtY29sdW1ucycpIG1heENvbHVtbnM/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRXZlbnRvIGV4ZWN1dGFkbyBxdWFuZG8gdG9kYXMgYXMgbGluaGFzIHPDo28gc2VsZWNpb25hZGFzIHBvciBtZWlvIGRvICpjaGVja2JveCogcXVlIHNlbGVjaW9uYSB0b2RhcyBhcyBsaW5oYXMuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1hbGwtc2VsZWN0ZWQnKSBhbGxTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFdmVudG8gZXhlY3V0YWRvIHF1YW5kbyBhIHNlbGXDp8OjbyBkYXMgbGluaGFzIMOpIGRlc21hcmNhZGEgcG9yIG1laW8gZG8gKmNoZWNrYm94KiBxdWUgc2VsZWNpb25hIHRvZGFzIGFzIGxpbmhhcy5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWFsbC11bnNlbGVjdGVkJykgYWxsVW5zZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBleGVjdXRhZG8gYW8gY29sYXBzYXIgdW1hIGxpbmhhIGRvIGBwby10YWJsZWAuXHJcbiAgICpcclxuICAgKiA+IENvbW8gcGFyw6JtZXRybyBvIGNvbXBvbmVudGUgZW52aWEgbyBpdGVtIGNvbGFwc2Fkby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNvbGxhcHNlZCcpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBleGVjdXRhZG8gYW8gZXhwYW5kaXIgdW1hIGxpbmhhIGRvIGBwby10YWJsZWAuXHJcbiAgICpcclxuICAgKiA+IENvbW8gcGFyw6JtZXRybyBvIGNvbXBvbmVudGUgZW52aWEgbyBpdGVtIGV4cGFuZGlkby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWV4cGFuZGVkJykgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZXhlY3V0YWRvIGFvIHNlbGVjaW9uYXIgdW1hIGxpbmhhIGRvIGBwby10YWJsZWAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1zZWxlY3RlZCcpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUmVjZWJlIHVtYSBhw6fDo28gZGUgY2xpcXVlIHBhcmEgbyBib3TDo28gXCJDYXJyZWdhciBtYWlzIHJlc3VsdGFkb3NcIiwgY2FzbyBuZW5odW1hIGHDp8OjbyBmb3IgZGVmaW5pZGEgbyBtZXNtb1xyXG4gICAqIG7Do28gw6kgdmlzw612ZWwuXHJcbiAgICpcclxuICAgKiBSZWNlYmUgdW0gb2JqZXRvIGB7IGNvbHVtbiwgdHlwZSB9YCBvbmRlOlxyXG4gICAqXHJcbiAgICogLSBjb2x1bW4gKGBQb1RhYmxlQ29sdW1uYCk6IG9iamV0byBkYSBjb2x1bmEgcXVlIGVzdMOhIG9yZGVuYWRhLlxyXG4gICAqIC0gdHlwZSAoYFBvVGFibGVDb2x1bW5Tb3J0VHlwZWApOiB0aXBvIGRhIG9yZGVuYcOnw6NvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3Atc2hvdy1tb3JlJykgc2hvd01vcmU6IEV2ZW50RW1pdHRlcjxQb1RhYmxlQ29sdW1uU29ydD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvVGFibGVDb2x1bW5Tb3J0PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGV4ZWN1dGFkbyBhbyBvcmRlbmFyIGNvbHVuYXMgZGEgdGFiZWxhLlxyXG4gICAqXHJcbiAgICogUmVjZWJlIHVtIG9iamV0byBgeyBjb2x1bW4sIHR5cGUgfWAgb25kZTpcclxuICAgKlxyXG4gICAqIC0gY29sdW1uIChgUG9UYWJsZUNvbHVtbmApOiBvYmpldG8gZGEgY29sdW5hIHF1ZSBmb2kgY2xpY2FkYS9vcmRlbmFkYS5cclxuICAgKiAtIHR5cGUgKGBQb1RhYmxlQ29sdW1uU29ydFR5cGVgKTogdGlwbyBkYSBvcmRlbmHDp8Ojby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNvcnQtYnknKSBzb3J0Qnk6IEV2ZW50RW1pdHRlcjxQb1RhYmxlQ29sdW1uU29ydD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvVGFibGVDb2x1bW5Tb3J0PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEV2ZW50byBleGVjdXRhZG8gYW8gZGVzbWFyY2FyIGEgc2VsZcOnw6NvIGRlIHVtYSBsaW5oYSBkbyBgcG8tdGFibGVgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtdW5zZWxlY3RlZCcpIHVuc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBmZWNoYXIgbyBwb3BvdmVyIGRvIGdlcmVuY2lhZG9yIGRlIGNvbHVuYXMgYXDDs3MgYWx0ZXJhciBhcyBjb2x1bmFzIHZpc8OtdmVpcy5cclxuICAgKlxyXG4gICAqIE8gY29tcG9uZW50ZSBlbnZpYSBjb21vIHBhcsOibWV0cm8gdW0gYXJyYXkgZGUgc3RyaW5nIGNvbSBhcyBjb2x1bmFzIHZpc8OtdmVpcyBhdHVhbGl6YWRhcy5cclxuICAgKiBQb3IgZXhlbXBsbzogW1wiaWRDYXJkXCIsIFwibmFtZVwiLCBcImhpcmVTdGF0dXNcIiwgXCJhZ2VcIl0uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtdmlzaWJsZS1jb2x1bW5zJykgY2hhbmdlVmlzaWJsZUNvbHVtbnMgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZz4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBjbGljYXIgbm8gYm90w6NvIGRlIHJlc3RhdXJhciBwYWRyw6NvIG5vIGdlcmVuY2lhZG9yIGRlIGNvbHVuYXMuXHJcbiAgICpcclxuICAgKiBPIGNvbXBvbmVudGUgZW52aWEgY29tbyBwYXLDom1ldHJvIHVtIGFycmF5IGRlIHN0cmluZyBjb20gYXMgY29sdW5hcyBjb25maWd1cmFkYXMgaW5pY2lhbG1lbnRlLlxyXG4gICAqIFBvciBleGVtcGxvOiBbXCJpZENhcmRcIiwgXCJuYW1lXCIsIFwiaGlyZVN0YXR1c1wiLCBcImFnZVwiXS5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXJlc3RvcmUtY29sdW1uLW1hbmFnZXInKSBjb2x1bW5SZXN0b3JlTWFuYWdlciA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8U3RyaW5nPj4oKTtcclxuXHJcbiAgYWxsQ29sdW1uc1dpZHRoUGl4ZWxzOiBib29sZWFuO1xyXG4gIGNvbHVtbk1hc3RlckRldGFpbDogUG9UYWJsZUNvbHVtbjtcclxuICBoYXNNYWluQ29sdW1uczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1haW5Db2x1bW5zOiBBcnJheTxQb1RhYmxlQ29sdW1uPiA9IFtdO1xyXG4gIHNlbGVjdEFsbCA9IGZhbHNlO1xyXG4gIHNvcnRlZENvbHVtbiA9IHsgcHJvcGVydHk6IDxQb1RhYmxlQ29sdW1uPm51bGwsIGFzY2VuZGluZzogdHJ1ZSB9O1xyXG4gIHN1YnRpdGxlQ29sdW1uczogQXJyYXk8UG9UYWJsZUNvbHVtbj4gPSBbXTtcclxuICBwYWdlID0gMTtcclxuICBwYWdlU2l6ZSA9IDEwO1xyXG4gIGhhc1NlcnZpY2U/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaW5pdGlhbENvbHVtbnM6IEFycmF5PFBvVGFibGVDb2x1bW4+O1xyXG4gIHByaXZhdGUgX2FjdGlvbnM/OiBBcnJheTxQb1RhYmxlQWN0aW9uPiA9IFtdO1xyXG4gIHByaXZhdGUgX2NvbHVtbnM6IEFycmF5PFBvVGFibGVDb2x1bW4+ID0gW107XHJcbiAgcHJpdmF0ZSBfY29udGFpbmVyPzogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hlaWdodD86IG51bWJlcjtcclxuICBwcml2YXRlIF9oaWRlRGV0YWlsPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxQb1RhYmxlQ29sdW1uPjtcclxuICBwcml2YXRlIF9saXRlcmFsczogUG9UYWJsZUxpdGVyYWxzO1xyXG4gIHByaXZhdGUgX2xvYWRpbmc/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZT86IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nID0gcG9Mb2NhbGVEZWZhdWx0O1xyXG4gIHByaXZhdGUgX3NlcnZpY2VBcGk6IHN0cmluZztcclxuICBwcml2YXRlIHBvVGFibGVTZXJ2aWNlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBzb3J0U3RvcmU6IFBvVGFibGVDb2x1bW5Tb3J0O1xyXG4gIHByaXZhdGUgX2luZmluaXRlU2Nyb2xsRGlzdGFuY2U/OiBudW1iZXIgPSAxMDA7XHJcbiAgcHJpdmF0ZSBfaW5maW5pdGVTY3JvbGw/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZGUgaXRlbnMgZGEgdGFiZWxhLlxyXG4gICAqID4gU2UgZmFsc28sIHNlcsOhIGluaWNpYWxpemFkbyBjb21vIHVtICphcnJheSogdmF6aW8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWl0ZW1zJykgc2V0IGl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IEFycmF5LmlzQXJyYXkoaXRlbXMpID8gaXRlbXMgOiBbXTtcclxuXHJcbiAgICAvLyB3aGVuIGhhdmVuJ3QgaXRlbXMsIHNlbGVjdEFsbCBzaG91bGQgYmUgdW5jaGVja2VkLlxyXG4gICAgaWYgKCF0aGlzLmhhc0l0ZW1zKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0NvbHVtbnMpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5nZXREZWZhdWx0Q29sdW1ucyhpdGVtc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGltZW91dCBuZWNlc3NhcmlvIHBhcmEgb3MgaXRlbnMgc2VyZW0gcmVmbGV0aWRvcyBuYSB0YWJlbGFcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja0luZmluaXRlU2Nyb2xsKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIExpc3RhIGRhcyBjb2x1bmFzIGRhIHRhYmVsYSwgZGV2ZSByZWNlYmVyIHVtICphcnJheSogZGUgb2JqZXRvcyBxdWUgaW1wbGVtZW50YW0gYSBpbnRlcmZhY2UgYFBvVGFibGVDb2x1bW5gLlxyXG4gICAqIFBvciBwYWRyw6NvIHJlY2ViZXLDoSBjb21vIHZhbG9yIGEgcHJpbWVpcmEgY29sdW5hIGRhIGxpc3RhIGRlIGl0ZW5zIGRhIHRhYmVsYS5cclxuICAgKiA+IENhc28gbsOjbyBlbmNvbnRyZSB2YWxvciwgYSBtZW5zYWdlbSAnTmVuaHVtYSBkZWZpbmnDp8OjbyBkZSBjb2x1bmFzJyBzZXLDoSBleGliaWRhLlxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNvbHVtbnMnKSBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxQb1RhYmxlQ29sdW1uPikge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbENvbHVtbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxDb2x1bW5zID0gY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucyB8fCBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRDb2x1bW5MaW5rKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzSXRlbXMpIHtcclxuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuZ2V0RGVmYXVsdENvbHVtbnModGhpcy5pdGVtc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZUNvbHVtbnMoKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQWRpY2lvbmEgdW0gY29udG9ybm8gYXJyZWRvbmRhZG8gYW8gYHBvLXRhYmxlYCwgYXMgb3DDp8O1ZXMgc8OjbzpcclxuICAgKiAtIGBib3JkZXJgOiBjb20gYm9yZGFzL2xpbmhhcy5cclxuICAgKiAtIGBzaGFkb3dgOiBjb20gc29tYnJhcy5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBib3JkZXJgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNvbnRhaW5lcicpIHNldCBjb250YWluZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gcG9UYWJsZUNvbnRhaW5lci5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6IHBvVGFibGVDb250YWluZXJEZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRhaW5lcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBhbHR1cmEgZGEgdGFiZWxhIGVtICpwaXhlbHMqIGUgZml4YSBvIGNhYmXDp2FsaG8uXHJcbiAgICpcclxuICAgKiBBbyB1dGlsaXphciBlc3NhIHByb3ByaWVkYWRlIHNlcsOhIGluc2VyaWRvIG8gYHZpcnR1YWwtc2Nyb2xsYCBuYSB0YWJlbGEgbWVsaG9yYW5kbyBhIHBlcmZvcm1hbmNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oZWlnaHQnKSBzZXQgaGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBIYWJpbGl0YSBhIHZpc3VhbGl6YcOnw6NvIGRhIGxpc3RhIGRlIGRldGFsaGVzIGRlIGNhZGEgbGluaGEgZGEgY29sdW5hLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLWRldGFpbCcpIHNldCBoaWRlRGV0YWlsKGhpZGVEZXRhaWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVEZXRhaWwgPSBoaWRlRGV0YWlsICE9IG51bGwgJiYgaGlkZURldGFpbC50b1N0cmluZygpID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKGhpZGVEZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVEZXRhaWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZURldGFpbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gY29tIGFzIGxpdGVyYWlzIHVzYWRhcyBubyBgcG8tdGFibGVgLlxyXG4gICAqXHJcbiAgICogRXhpc3RlbSBkdWFzIG1hbmVpcmFzIGRlIGN1c3RvbWl6YXIgbyBjb21wb25lbnRlLCBwYXNzYW5kbyB1bSBvYmpldG8gY29tIHRvZGFzIGFzIGxpdGVyYWlzIGRpc3BvbsOtdmVpczpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9UYWJsZUxpdGVyYWxzID0ge1xyXG4gICAqICAgIGxvYWRNb3JlRGF0YTogJ0J1c2NhciBtYWlzIGRhZG9zJyxcclxuICAgKiAgICBsb2FkaW5nRGF0YTogJ1Byb2Nlc3NhbmRvJyxcclxuICAgKiAgICBub0NvbHVtbnM6ICdTZW0gY29sdW5hcycsXHJcbiAgICogICAgbm9EYXRhOiAnU2VtIGRhZG9zJyxcclxuICAgKiAgICBzZWVDb21wbGV0ZVN1YnRpdGxlOiAnTW9zdHJhciBsZWdlbmRhIGNvbXBsZXRhJyxcclxuICAgKiAgICBjb21wbGV0ZVN1YnRpdGxlOiAnVG9kYXMgbGVnZW5kYXMnXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBPdSBwYXNzYW5kbyBhcGVuYXMgYXMgbGl0ZXJhaXMgcXVlIGRlc2VqYSBjdXN0b21pemFyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb1RhYmxlTGl0ZXJhbHMgPSB7XHJcbiAgICogICAgbm9EYXRhOiAnU2VtIGRhZG9zJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogRSBwYXJhIGNhcnJlZ2FyIGFzIGxpdGVyYWlzIGN1c3RvbWl6YWRhcywgYmFzdGEgYXBlbmFzIHBhc3NhciBvIG9iamV0byBwYXJhIG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby10YWJsZVxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLXRhYmxlPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBPIG9iamV0byBwYWRyw6NvIGRlIGxpdGVyYWlzIHNlcsOhIHRyYWR1emlkbyBkZSBhY29yZG8gY29tIG8gaWRpb21hIGRvXHJcbiAgICogW2BQb0kxOG5TZXJ2aWNlYF0oL2RvY3VtZW50YXRpb24vcG8taTE4bikgb3UgZG8gYnJvd3Nlci5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBzZXQgbGl0ZXJhbHModmFsdWU6IFBvVGFibGVMaXRlcmFscykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSB7XHJcbiAgICAgICAgLi4ucG9UYWJsZUxpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLnBvVGFibGVMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV0sXHJcbiAgICAgICAgLi4udmFsdWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0gcG9UYWJsZUxpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IGxpdGVyYWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxzIHx8IHBvVGFibGVMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQmxvcXVlaWEgYSBpbnRlcmHDp8OjbyBkbyB1c3XDoXJpbyBjb20gb3MgZGFkb3MgZGEgX3RhYmxlXy5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9hZGluZycpIHNldCBsb2FkaW5nKGxvYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2xvYWRpbmcgPSBjb252ZXJ0VG9Cb29sZWFuKGxvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgdW1hIGxpc3RhIGRlIGHDp8O1ZXMuXHJcbiAgICpcclxuICAgKiBRdWFuZG8gaG91dmVyIGFwZW5hcyB1bWEgYcOnw6NvIGRlZmluaWRhIGVsYSBzZXLDoSBleGliaWRhIGRpcmV0YW1lbnRlIG5hIGNvbHVuYSwgY2FzbyBjb250csOhcmlvLCBvIGNvbXBvbmVudGVcclxuICAgKiBzZSBlbmNhcnJlZ2EgZGUgYWdydXDDoS1sYXMgZXhpYmluZG8gbyDDrWNvbmUgWyoqcG8taWNvbi1tb3JlKipdKC9ndWlkZXMvaWNvbnMpIHF1ZSBsaXN0YXLDoSBhcyBhw6fDtWVzIGFvIHNlciBjbGljYWRvLlxyXG4gICAqXHJcbiAgICogKipBIGNvbHVuYSBkZSBhw6fDtWVzIG7Do28gc2Vyw6EgZXhpYmlkYSBxdWFuZG86KipcclxuICAgKiAgLSBhIGxpc3RhIGNvbnRlciB2YWxvcmVzIGludsOhbGlkb3Mgb3UgaW5kZWZpbmlkb3MuXHJcbiAgICogIC0gdGVuaGEgdW1hIMO6bmljYSBhw6fDo28gZSBhIG1lc21hIG7Do28gZm9yIHZpc8OtdmVsLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb25zJykgc2V0IGFjdGlvbnMoYWN0aW9uczogQXJyYXk8UG9UYWJsZUFjdGlvbj4pIHtcclxuICAgIHRoaXMuX2FjdGlvbnMgPSBhY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQZXJtaXRlIGEgc2VsZcOnw6NvIGRlIGxpbmhhcyBuYSB0YWJlbGEgZSwgY2FzbyBhIHByb3ByaWVkYWRlIGBwLXNpbmdsZS1zZWxlY3RgIGVzdGVqYSBkZWZpbmlkYSBzZXLDoSBwb3Nzw612ZWxcclxuICAgKiBzZWxlY2lvbmFyIGFwZW5hcyB1bWEgw7puaWNhIGxpbmhhLlxyXG4gICAqXHJcbiAgICogKipJbXBvcnRhbnRlOioqXHJcbiAgICogIC0gQXMgbGluaGFzIGRlIGRldGFsaGUgZGVmaW5pZGFzIGVtIGBQb1RhYmxlRGV0YWlsYCBwb3NzdWVtIGNvbXBvcnRhbWVudG8gaW5kZXBlbmRlbnRlIGRhIGxpbmhhIG1lc3RyZTtcclxuICAgKiAgLSBDYWRhIGxpbmhhIHBvc3N1aSBwb3IgcGFkcsOjbyBhIHByb3ByaWVkYWRlIGRpbsOibWljYSBgJHNlbGVjdGVkYCwgbmEgcXVhbCDDqSBwb3Nzw612ZWwgdmFsaWRhciBzZSBhIGxpbmhhXHJcbiAgICogZXN0w6Egc2VsZWNpb25hZGEsIHBvciBleGVtcGxvOiBgaXRlbS4kc2VsZWN0ZWRgIG91IGBpdGVtWyckc2VsZWN0ZWQnXWAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNlbGVjdGFibGUnKSBzZXQgc2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IDxhbnk+dmFsdWUgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBTZSB2ZXJkYWRlaXJvLCBhdGl2YSBhIGZ1bmNpb25hbGlkYWRlIGRlIHNjcm9sbCBpbmZpbml0byBwYXJhIGEgdGFiZWxhIGUgbyBib3TDo28gXCJDYXJyZWdhciBNYWlzXCIgZGVpeGFyw6EgZGUgc2VyIGV4aWJpZG8uIEFvIGNoZWdhciBubyBmaW0gZGEgdGFiZWxhXHJcbiAgICogZXhlY3V0YXLDoSBhIGZ1bsOnw6NvIGBwLXNob3ctbW9yZWAuXHJcbiAgICpcclxuICAgKiAqKlJlZ3JhcyBkZSB1dGlsaXphw6fDo286KipcclxuICAgKiAgLSBPIHNjcm9sbCBpbmZpbml0byBzw7MgZnVuY2lvbmEgcGFyYSB0YWJlbGFzIHF1ZSB1dGlsaXphbSBhIHByb3ByaWVkYWRlIGBwLWhlaWdodGAgZSBxdWUgcG9zc3VlbSBvIHNjcm9sbCBqw6EgbmEgY2FyZ2EgaW5pY2lhbCBkb3MgZGFkb3MuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWluZmluaXRlLXNjcm9sbCcpIHNldCBpbmZpbml0ZVNjcm9sbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW5maW5pdGVTY3JvbGwgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlICYmIHRoaXMuaGVpZ2h0ID4gMCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5maW5pdGVTY3JvbGwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5maW5pdGVTY3JvbGw7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyBwZXJjZW50dWFsIG5lY2Vzc8OhcmlvIHBhcmEgZGlzcGFyYXIgbyBldmVudG8gYHAtc2hvdy1tb3JlYCwgcXVlIMOpIHJlc3BvbnPDoXZlbCBwb3IgY2FycmVnYXIgbWFpcyBkYWRvcyBuYSB0YWJlbGEuIENhc28gbyB2YWxvciBpbmZvcm1hZG8gc2VqYSBtYWlvciBxdWUgMTAwIG91IG1lbm9yXHJcbiAgICogcXVlIDAsIG8gdmFsb3IgcGFkcsOjbyBzZXLDoSAxMDAlXHJcbiAgICpcclxuICAgKiAqKkV4ZW1wbG9zOioqXHJcbiAgICogIC0gcC1pbmZpbml0ZS1zY3JvbGwtZGlzdGFuY2UgPSA4MDogUXVhbmRvIGF0aW5naXIgODAlICBkbyBzY3JvbGwgZGEgdGFiZWxhLCBvIGBwLXNob3ctbW9yZWAgc2Vyw6EgZGlzcGFyYWRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1pbmZpbml0ZS1zY3JvbGwtZGlzdGFuY2UnKSBzZXQgaW5maW5pdGVTY3JvbGxEaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pbmZpbml0ZVNjcm9sbERpc3RhbmNlID0gdmFsdWUgPiAxMDAgfHwgdmFsdWUgPCAwID8gMTAwIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5maW5pdGVTY3JvbGxEaXN0YW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmZpbml0ZVNjcm9sbERpc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFVSTCBkYSBBUEkgcmVzcG9uc8OhdmVsIHBvciByZXRvcm5hciBvcyByZWdpc3Ryb3MuXHJcbiAgICpcclxuICAgKiBBbyByZWFsaXphciBhIGJ1c2NhIGRlIG1haXMgcmVnaXN0cm9zIHZpYSBwYWdpbmHDp8OjbyAoQ2FycmVnYXIgbWFpcyByZXN1bHRhZG9zKSwgc2Vyw6EgZW52aWFkbyBvcyBwYXLDom1ldHJvcyBgcGFnZWAgZSBgcGFnZVNpemVgLCBjb25mb3JtZSBhYmFpeG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB1cmwgKyA/cGFnZT0xJnBhZ2VTaXplPTEwXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBDYXNvIHV0aWxpemFyIG9yZGVuYcOnw6NvLCBhIGNvbHVuYSBvcmRlbmFkYSBzZXLDoSBlbnZpYWRhIGF0cmF2w6lzIGRvIHBhcsOibWV0cm8gYG9yZGVyYCwgcG9yIGV4ZW1wbG86XHJcbiAgICogLSBDb2x1bmEgZGVjcmVzY2VudGU6XHJcbiAgICogYGBgXHJcbiAgICogIHVybCArID9wYWdlPTEmcGFnZVNpemU9MTAmb3JkZXI9LW5hbWVcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIC0gQ29sdW5hIGFzY2VuZGVudGU6XHJcbiAgICogYGBgXHJcbiAgICogIHVybCArID9wYWdlPTEmcGFnZVNpemU9MTAmb3JkZXI9bmFtZVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBFc3RhIFVSTCBkZXZlIHJldG9ybmFyIGUgcmVjZWJlciBvcyBkYWRvcyBubyBwYWRyw6NvIGRlIFtBUEkgZG8gUE8gVUldKGh0dHBzOi8vcG8tdWkuaW8vZ3VpZGVzL2FwaSkuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNlcnZpY2UtYXBpJykgc2V0IHNlcnZpY2VBcGkoc2VydmljZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZXJ2aWNlQXBpID0gc2VydmljZTtcclxuICAgIHRoaXMuc2V0U2VydmljZSh0aGlzLnNlcnZpY2VBcGkpO1xyXG4gICAgdGhpcy5oYXNTZXJ2aWNlID0gISFzZXJ2aWNlO1xyXG4gICAgdGhpcy5zaG93TW9yZURpc2FibGVkID0gIXRoaXMuaGFzU2VydmljZTtcclxuICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICB0aGlzLmluaXRpYWxpemVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VydmljZUFwaSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlQXBpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0NvbHVtbnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zICYmIHRoaXMuY29sdW1ucy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0l0ZW1zKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWVDb2x1bW5EZXRhaWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5NYXN0ZXJEZXRhaWwgPyB0aGlzLmNvbHVtbk1hc3RlckRldGFpbC5wcm9wZXJ0eSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsaWRDb2x1bW5zKCkge1xyXG4gICAgY29uc3QgdHlwZXNWYWxpZCA9IFtcclxuICAgICAgJ3N0cmluZycsXHJcbiAgICAgICdudW1iZXInLFxyXG4gICAgICAnYm9vbGVhbicsXHJcbiAgICAgICdkYXRlJyxcclxuICAgICAgJ3RpbWUnLFxyXG4gICAgICAnZGF0ZVRpbWUnLFxyXG4gICAgICAnY3VycmVuY3knLFxyXG4gICAgICAnc3VidGl0bGUnLFxyXG4gICAgICAnbGluaycsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdpY29uJyxcclxuICAgICAgJ2NlbGxUZW1wbGF0ZScsXHJcbiAgICAgICdjb2x1bW5UZW1wbGF0ZSdcclxuICAgIF07XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcihjb2wgPT4gIWNvbC50eXBlIHx8IHR5cGVzVmFsaWQuaW5jbHVkZXMoY29sLnR5cGUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNvcnRUeXBlKCk6IFBvVGFibGVDb2x1bW5Tb3J0VHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0ZWRDb2x1bW4uYXNjZW5kaW5nID8gUG9UYWJsZUNvbHVtblNvcnRUeXBlLkFzY2VuZGluZyA6IFBvVGFibGVDb2x1bW5Tb3J0VHlwZS5EZXNjZW5kaW5nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBvRGF0ZTogUG9EYXRlU2VydmljZSxcclxuICAgIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvVGFibGVTZXJ2aWNlOiBQb1RhYmxlU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucG9UYWJsZVNlcnZpY2VTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaW5nbGVTZWxlY3QgfHwgdGhpcy5oaWRlU2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGlkZVNlbGVjdEFsbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlSGVpZ2h0VGFibGVDb250YWluZXIodGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsUm93cygpIHtcclxuICAgIGlmICghdGhpcy5oaWRlU2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gIXRoaXMuc2VsZWN0QWxsO1xyXG5cclxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uJHNlbGVjdGVkID0gdGhpcy5zZWxlY3RBbGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5lbWl0U2VsZWN0QWxsRXZlbnRzKHRoaXMuc2VsZWN0QWxsLCBbLi4udGhpcy5pdGVtc10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KHJvdzogYW55KSB7XHJcbiAgICByb3cuJHNlbGVjdGVkID0gIXJvdy4kc2VsZWN0ZWQ7XHJcblxyXG4gICAgdGhpcy5lbWl0U2VsZWN0RXZlbnRzKHJvdyk7XHJcblxyXG4gICAgdGhpcy5jb25maWdBZnRlclNlbGVjdFJvdyh0aGlzLml0ZW1zLCByb3cpO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0YWJsZVJvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5zZWxlY3RhYmxlRW50aXJlTGluZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERldGFpbFJvdyhyb3c6IGFueSkge1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0RXZlbnRzKHJvdyk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc0NvbG9yKHJvdywgY29sdW1uKSB7XHJcbiAgICByZXR1cm4gY29sdW1uLmNvbG9yID8gYHBvLXRleHQtJHt0aGlzLmdldENvbHVtbkNvbG9yKHJvdywgY29sdW1uKX1gIDogJyc7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEZXRhaWwocm93OiBhbnkpIHtcclxuICAgIGNvbnN0IHJvd1Nob3dEZXRhaWwgPSByb3cuJHNob3dEZXRhaWw7XHJcbiAgICBpZiAodGhpcy5hdXRvQ29sbGFwc2UpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZUFsbEl0ZW1zKHRoaXMuaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U2hvd0RldGFpbChyb3csICFyb3dTaG93RGV0YWlsKTtcclxuICAgIHRoaXMuZW1pdEV4cGFuZEV2ZW50cyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUm93QWN0aW9uKHJvdzogYW55KSB7XHJcbiAgICBjb25zdCB0b2dnbGVTaG93QWN0aW9uID0gcm93LiRzaG93QWN0aW9uO1xyXG5cclxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0uJHNob3dBY3Rpb24pIHtcclxuICAgICAgICBpdGVtLiRzaG93QWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcm93LiRzaG93QWN0aW9uID0gIXRvZ2dsZVNob3dBY3Rpb247XHJcbiAgfVxyXG5cclxuICBzb3J0Q29sdW1uKGNvbHVtbjogUG9UYWJsZUNvbHVtbikge1xyXG4gICAgaWYgKCF0aGlzLnNvcnQgfHwgY29sdW1uLnR5cGUgPT09ICdkZXRhaWwnIHx8IGNvbHVtbi5zb3J0YWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29ydGVkQ29sdW1uLmFzY2VuZGluZyA9IHRoaXMuc29ydGVkQ29sdW1uLnByb3BlcnR5ID09PSBjb2x1bW4gPyAhdGhpcy5zb3J0ZWRDb2x1bW4uYXNjZW5kaW5nIDogdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNvcnRBcnJheShjb2x1bW4sIHRoaXMuc29ydGVkQ29sdW1uLmFzY2VuZGluZyk7XHJcbiAgICB0aGlzLnNvcnRCeS5lbWl0KHsgY29sdW1uLCB0eXBlOiB0aGlzLnNvcnRUeXBlIH0pO1xyXG4gICAgaWYgKHRoaXMuaGFzU2VydmljZSAmJiB0aGlzLnNvcnQpIHtcclxuICAgICAgdGhpcy5zb3J0U3RvcmUgPSB7IGNvbHVtbiwgdHlwZTogdGhpcy5zb3J0VHlwZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29ydGVkQ29sdW1uLnByb3BlcnR5ID0gY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgb25TaG93TW9yZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNvcnQgPSB0aGlzLnNvcnRlZENvbHVtbi5wcm9wZXJ0eSA/IHsgY29sdW1uOiB0aGlzLnNvcnRlZENvbHVtbi5wcm9wZXJ0eSwgdHlwZTogdGhpcy5zb3J0VHlwZSB9IDogdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc1NlcnZpY2UpIHtcclxuICAgICAgdGhpcy5wYWdlKys7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMubG9hZGluZ1Nob3dNb3JlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMucG9UYWJsZVNlcnZpY2VTdWJzY3JpcHRpb24gPSB0aGlzLmdldEZpbHRlcmVkSXRlbXMoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5kYXRhLml0ZW1zXTtcclxuICAgICAgICB0aGlzLnNob3dNb3JlRGlzYWJsZWQgPSAhZGF0YS5oYXNOZXh0O1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1Nob3dNb3JlID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd01vcmUuZW1pdChzb3J0KTtcclxuICB9XHJcblxyXG4gIGdldEZpbHRlcmVkSXRlbXMocXVlcnlQYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IFF1ZXJ5UGFyYW1zVHlwZSB9KTogT2JzZXJ2YWJsZTxQb1RhYmxlUmVzcG9uc2VBcGk+IHtcclxuICAgIGNvbnN0IGZpbHRlcmVkUGFyYW1zOiBQb1RhYmxlRmlsdGVyZWRJdGVtc1BhcmFtcyA9IHRoaXMuZ2V0RmlsdGVyZWRQYXJhbXMocXVlcnlQYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBvVGFibGVTZXJ2aWNlLmdldEZpbHRlcmVkSXRlbXMoZmlsdGVyZWRQYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGFibGVSZXNwb25zZVByb3BlcnRpZXMoZGF0YTogUG9UYWJsZVJlc3BvbnNlQXBpKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gZGF0YS5pdGVtcyB8fCBbXTtcclxuICAgIHRoaXMuc2hvd01vcmVEaXNhYmxlZCA9ICFkYXRhLmhhc05leHQ7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVEYXRhKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogUXVlcnlQYXJhbXNUeXBlIH0pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhc1NlcnZpY2UpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5nZXRGaWx0ZXJlZEl0ZW1zKHBhcmFtcykuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0VGFibGVSZXNwb25zZVByb3BlcnRpZXMoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldERlZmF1bHRDb2x1bW5zKGl0ZW06IGFueSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiBrZXlzXHJcbiAgICAgIC5maWx0ZXIoa2V5ID0+IHR5cGVvZiBpdGVtW2tleV0gIT09ICdvYmplY3QnKVxyXG4gICAgICAubWFwKGtleSA9PiAoeyBsYWJlbDogY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGtleSksIHByb3BlcnR5OiBrZXkgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldFNob3dEZXRhaWwocm93SWRlbnRpZmllcjogYW55IHwgbnVtYmVyLCBpc1Nob3dEZXRhaWw6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGlzUm93SW5kZXggPSB0eXBlb2Ygcm93SWRlbnRpZmllciA9PT0gJ251bWJlcicgJiYgdGhpcy5pdGVtc1tyb3dJZGVudGlmaWVyXTtcclxuXHJcbiAgICBjb25zdCByb3cgPSBpc1Jvd0luZGV4ID8gdGhpcy5pdGVtc1tyb3dJZGVudGlmaWVyXSA6IHJvd0lkZW50aWZpZXI7XHJcblxyXG4gICAgcm93LiRzaG93RGV0YWlsID0gaXNTaG93RGV0YWlsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xsYXBzZUFsbEl0ZW1zKGl0ZW1zOiBBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9Pikge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIGlmIChpdGVtLiRzaG93RGV0YWlsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTaG93RGV0YWlsKGl0ZW0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmVtaXRFeHBhbmRFdmVudHMoaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnQWZ0ZXJTZWxlY3RSb3cocm93czogQXJyYXk8YW55Piwgcm93KSB7XHJcbiAgICBpZiAodGhpcy5zaW5nbGVTZWxlY3QpIHtcclxuICAgICAgdGhpcy51bnNlbGVjdE90aGVyUm93cyhyb3dzLCByb3cpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5oaWRlU2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdGhpcy5pc0V2ZXJ5U2VsZWN0ZWQocm93cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRFeHBhbmRFdmVudHMocm93OiBhbnkpIHtcclxuICAgIHJvdy4kc2hvd0RldGFpbCA/IHRoaXMuZXhwYW5kZWQuZW1pdChyb3cpIDogdGhpcy5jb2xsYXBzZWQuZW1pdChyb3cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0U2VsZWN0QWxsRXZlbnRzKHNlbGVjdEFsbDogYm9vbGVhbiwgcm93czogYW55KSB7XHJcbiAgICBzZWxlY3RBbGwgPyB0aGlzLmFsbFNlbGVjdGVkLmVtaXQocm93cykgOiB0aGlzLmFsbFVuc2VsZWN0ZWQuZW1pdChyb3dzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFNlbGVjdEV2ZW50cyhyb3c6IGFueSkge1xyXG4gICAgcm93LiRzZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWQuZW1pdChyb3cpIDogdGhpcy51bnNlbGVjdGVkLmVtaXQocm93KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29sdW1uQ29sb3Iocm93LCBjb2x1bW4pIHtcclxuICAgIGNvbnN0IGNvbHVtbkNvbG9yID0gY29sdW1uLmNvbG9yO1xyXG5cclxuICAgIHJldHVybiBpc1R5cGVvZihjb2x1bW5Db2xvciwgJ2Z1bmN0aW9uJykgPyBjb2x1bW5Db2xvcihyb3csIGNvbHVtbi5wcm9wZXJ0eSkgOiBjb2x1bW5Db2xvcjtcclxuICB9XHJcblxyXG4gIC8vIFJldG9ybmEgYSBjb2x1bmEgZGEgbGlzdGEgZGUgY29sdW5hcyBxdWUgw6kgZG8gdGlwbyBkZXRhaWxcclxuICBwcml2YXRlIGdldENvbHVtbk1hc3RlckRldGFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnMuZmluZChjb2wgPT4gY29sLnR5cGUgPT09ICdkZXRhaWwnKTtcclxuICB9XHJcblxyXG4gIC8vIENvbHVuYXMgcXVlIHPDo28gaW5zZXJpZGFzIG5vIDxoZWFkPiBkYSB0YWJlbGFcclxuICBwcml2YXRlIGdldE1haW5Db2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRDb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnZpc2libGUgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIFJldG9ybmEgYXMgY29sdW5hcyBjb20gc3RhdHVzXHJcbiAgcHJpdmF0ZSBnZXRTdWJ0aXRsZUNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnR5cGUgPT09ICdzdWJ0aXRsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0V2ZXJ5U2VsZWN0ZWQoaXRlbXM6IEFycmF5PGFueT4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNvbWVDaGVja2VkT3JJbmRldGVybWluYXRlID0gaXRlbSA9PiBpdGVtLiRzZWxlY3RlZCB8fCBpdGVtLiRzZWxlY3RlZCA9PT0gbnVsbDtcclxuICAgIGNvbnN0IGV2ZXJ5Q2hlY2tlZCA9IGl0ZW0gPT4gaXRlbS4kc2VsZWN0ZWQ7XHJcblxyXG4gICAgaWYgKGl0ZW1zLmV2ZXJ5KGV2ZXJ5Q2hlY2tlZCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGl0ZW1zLnNvbWUoc29tZUNoZWNrZWRPckluZGV0ZXJtaW5hdGUpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2VDb2x1bW5zKCkge1xyXG4gICAgdGhpcy5zZXRNYWluQ29sdW1ucygpO1xyXG4gICAgdGhpcy5zZXRDb2x1bW5NYXN0ZXJEZXRhaWwoKTtcclxuICAgIHRoaXMuc2V0U3VidGl0bGVDb2x1bW5zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbHVtbkxpbmsoKSB7XHJcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uWyd0eXBlJ10gPT09ICdsaW5rJyAmJiAhY29sdW1uWydsaW5rJ10pIHtcclxuICAgICAgICBjb2x1bW5bJ2xpbmsnXSA9ICdsaW5rJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbHVtbk1hc3RlckRldGFpbCgpIHtcclxuICAgIHRoaXMuY29sdW1uTWFzdGVyRGV0YWlsID0gdGhpcy5nZXRDb2x1bW5NYXN0ZXJEZXRhaWwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWFpbkNvbHVtbnMoKSB7XHJcbiAgICB0aGlzLm1haW5Db2x1bW5zID0gdGhpcy5nZXRNYWluQ29sdW1ucygpO1xyXG5cclxuICAgIHRoaXMuaGFzTWFpbkNvbHVtbnMgPSAhIXRoaXMubWFpbkNvbHVtbnMubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMuYWxsQ29sdW1uc1dpZHRoUGl4ZWxzID0gdGhpcy52ZXJpZnlXaWR0aENvbHVtbnNQaXhlbHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3VidGl0bGVDb2x1bW5zKCkge1xyXG4gICAgdGhpcy5zdWJ0aXRsZUNvbHVtbnMgPSB0aGlzLmdldFN1YnRpdGxlQ29sdW1ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0QXJyYXkoY29sdW1uOiBQb1RhYmxlQ29sdW1uLCBhc2NlbmRpbmc6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IFsuLi50aGlzLml0ZW1zXTtcclxuICAgIGl0ZW1zTGlzdC5zb3J0KChsZWZ0U2lkZSwgcmlnaHRTaWRlKTogbnVtYmVyID0+XHJcbiAgICAgIHNvcnRWYWx1ZXMobGVmdFNpZGVbY29sdW1uLnByb3BlcnR5XSwgcmlnaHRTaWRlW2NvbHVtbi5wcm9wZXJ0eV0sIGFzY2VuZGluZylcclxuICAgICk7XHJcbiAgICB0aGlzLml0ZW1zID0gaXRlbXNMaXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bnNlbGVjdE90aGVyUm93cyhyb3dzOiBBcnJheTxhbnk+LCByb3cpIHtcclxuICAgIHJvd3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0gIT09IHJvdykge1xyXG4gICAgICAgIGl0ZW0uJHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlXaWR0aENvbHVtbnNQaXhlbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXNNYWluQ29sdW1ucyA/IHRoaXMubWFpbkNvbHVtbnMuZXZlcnkoY29sdW1uID0+IGNvbHVtbi53aWR0aCAmJiBjb2x1bW4ud2lkdGguaW5jbHVkZXMoJ3B4JykpIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNlcnZpY2Uoc2VydmljZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc2VydmljZSAmJiBpc1R5cGVvZihzZXJ2aWNlLCAnc3RyaW5nJykpIHtcclxuICAgICAgdGhpcy5wb1RhYmxlU2VydmljZS5zZXRVcmwoc2VydmljZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlcmVkUGFyYW1zKHF1ZXJ5UGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBRdWVyeVBhcmFtc1R5cGUgfSkge1xyXG4gICAgY29uc3QgeyBwYWdlLCBwYWdlU2l6ZSwgc29ydFN0b3JlIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkUGFyYW1zID0ge307XHJcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuZ2V0T3JkZXJQYXJhbShzb3J0U3RvcmUpO1xyXG4gICAgY29uc3QgcGFyYW1zID0geyBwYWdlLCBwYWdlU2l6ZSwgb3JkZXIsIC4uLnF1ZXJ5UGFyYW1zIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwYXJhbXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZmlsdGVyZWRQYXJhbXNba2V5XSA9IHBhcmFtc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsdGVyZWRQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9yZGVyUGFyYW0oc29ydDogUG9UYWJsZUNvbHVtblNvcnQgPSB7IHR5cGU6IHVuZGVmaW5lZCB9KSB7XHJcbiAgICBjb25zdCB7IGNvbHVtbiwgdHlwZSB9ID0gc29ydDtcclxuXHJcbiAgICBpZiAoIWNvbHVtbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFBvVGFibGVDb2x1bW5Tb3J0VHlwZS5EZXNjZW5kaW5nKSB7XHJcbiAgICAgIHJldHVybiBgLSR7Y29sdW1uLnByb3BlcnR5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2NvbHVtbi5wcm9wZXJ0eX1gO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNhbGN1bGF0ZUhlaWdodFRhYmxlQ29udGFpbmVyKGhlaWdodCk7XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjaGVja0luZmluaXRlU2Nyb2xsKCk7XHJcbn1cclxuIl19