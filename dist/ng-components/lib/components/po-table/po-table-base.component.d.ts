import { EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { PoDateService } from '../../services/po-date/po-date.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoTableAction } from './interfaces/po-table-action.interface';
import { PoTableColumn } from './interfaces/po-table-column.interface';
import { PoTableColumnSort } from './interfaces/po-table-column-sort.interface';
import { PoTableLiterals } from './interfaces/po-table-literals.interface';
import { PoTableService } from './services/po-table.service';
import { PoTableResponseApi } from './interfaces/po-table-response-api.interface';
import * as i0 from "@angular/core";
export declare type QueryParamsType = string | number | boolean;
export declare const poTableContainer: string[];
export declare const poTableContainerDefault = "border";
export declare const poTableLiteralsDefault: {
    en: PoTableLiterals;
    es: PoTableLiterals;
    pt: PoTableLiterals;
    ru: PoTableLiterals;
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
export declare abstract class PoTableBaseComponent implements OnChanges, OnDestroy {
    private poDate;
    private poTableService;
    /**
     * @optional
     *
     * @description
     *
     * Se verdadeiro, habilita a quebra de texto ao transborda-lo dentro de qualquer coluna.
     * > Quando ocorrer a quebra de texto, ao passar o mouse no conteúdo da célula,
     * o mesmo será exibido através do [`po-tooltip`](/documentation/po-tooltip).
     */
    hideTextOverflow: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.
     *
     * @default `false`
     */
    hideColumnsManager?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.
     *
     * @default `false`
     */
    autoCollapse?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".
     *
     * @default `false`
     */
    loadingShowMore?: boolean;
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
    sort: boolean;
    /**
     * @description
     *
     * Se verdadeiro, torna habilitado o botão "Carregar mais resultados".
     *
     * @default `false`
     */
    showMoreDisabled?: boolean;
    /**
     * @description
     *
     * Habilita ou desabilita o estilo listrado da tabela (`striped`).
     * > Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.
     *
     * @default `false`
     */
    striped?: boolean;
    /**
     * @description
     *
     * Esconde o *checkbox* para seleção de todas as linhas.
     *
     * > Sempre receberá *true* caso a seleção de apenas uma linha esteja ativa.
     *
     * @default `false`
     */
    hideSelectAll: boolean;
    /**
     * @description
     *
     * Define que somente uma linha da tabela pode ser selecionada.
     *
     * > Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.
     */
    singleSelect?: boolean;
    /**
     * @description
     *
     * Permite selecionar um item da tabela clicando na linha.
     *
     * > Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `false`.
     *
     * @default `true`
     */
    selectableEntireLine?: boolean;
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
     * Define uma quantidade máxima de colunas que serão exibidas na tabela.
     *
     * Quando chegar no valor informado, as colunas que não estiverem selecionadas ficarão
     * desabilitadas e caso houver mais colunas visíveis do que o permitido, as excedentes
     * serão ignoradas por ordem de posição.
     */
    maxColumns?: number;
    /**
     * @optional
     *
     * @description
     * Evento executado quando todas as linhas são selecionadas por meio do *checkbox* que seleciona todas as linhas.
     */
    allSelected: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     * Evento executado quando a seleção das linhas é desmarcada por meio do *checkbox* que seleciona todas as linhas.
     */
    allUnselected: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento executado ao colapsar uma linha do `po-table`.
     *
     * > Como parâmetro o componente envia o item colapsado.
     */
    collapsed: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento executado ao expandir uma linha do `po-table`.
     *
     * > Como parâmetro o componente envia o item expandido.
     */
    expanded: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento executado ao selecionar uma linha do `po-table`.
     */
    selected: EventEmitter<any>;
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
    showMore: EventEmitter<PoTableColumnSort>;
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
    /**
     * @optional
     *
     * @description
     * Evento executado ao desmarcar a seleção de uma linha do `po-table`.
     */
    unselected: EventEmitter<any>;
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
    allColumnsWidthPixels: boolean;
    columnMasterDetail: PoTableColumn;
    hasMainColumns: boolean;
    mainColumns: Array<PoTableColumn>;
    selectAll: boolean;
    sortedColumn: {
        property: PoTableColumn;
        ascending: boolean;
    };
    subtitleColumns: Array<PoTableColumn>;
    page: number;
    pageSize: number;
    hasService?: boolean;
    initialColumns: Array<PoTableColumn>;
    private _actions?;
    private _columns;
    private _container?;
    private _height?;
    private _hideDetail?;
    private _items;
    private _literals;
    private _loading?;
    private _selectable?;
    private language;
    private _serviceApi;
    private poTableServiceSubscription;
    private sortStore;
    private _infiniteScrollDistance?;
    private _infiniteScroll?;
    /**
     * @description
     *
     * Lista de itens da tabela.
     * > Se falso, será inicializado como um *array* vazio.
     */
    set items(items: Array<any>);
    get items(): Array<any>;
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
    set columns(columns: Array<PoTableColumn>);
    get columns(): Array<PoTableColumn>;
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
    set container(value: string);
    get container(): string;
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da tabela em *pixels* e fixa o cabeçalho.
     *
     * Ao utilizar essa propriedade será inserido o `virtual-scroll` na tabela melhorando a performance.
     */
    set height(height: number);
    get height(): number;
    /**
     * @optional
     *
     * @description
     *
     * Habilita a visualização da lista de detalhes de cada linha da coluna.
     *
     * @default `false`
     */
    set hideDetail(hideDetail: boolean);
    get hideDetail(): boolean;
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
    set literals(value: PoTableLiterals);
    get literals(): PoTableLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Bloqueia a interação do usuário com os dados da _table_.
     *
     * @default `false`
     */
    set loading(loading: boolean);
    get loading(): boolean;
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
    set actions(actions: Array<PoTableAction>);
    get actions(): Array<PoTableAction>;
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
    set selectable(value: boolean);
    get selectable(): boolean;
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
    set infiniteScroll(value: boolean);
    get infiniteScroll(): boolean;
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
    set infiniteScrollDistance(value: number);
    get infiniteScrollDistance(): number;
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
    set serviceApi(service: string);
    get serviceApi(): string;
    get hasColumns(): boolean;
    get hasItems(): boolean;
    get nameColumnDetail(): string;
    get validColumns(): PoTableColumn[];
    private get sortType();
    constructor(poDate: PoDateService, languageService: PoLanguageService, poTableService: PoTableService);
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    selectAllRows(): void;
    selectRow(row: any): void;
    hasSelectableRow(): boolean;
    selectDetailRow(row: any): void;
    getClassColor(row: any, column: any): string;
    toggleDetail(row: any): void;
    toggleRowAction(row: any): void;
    sortColumn(column: PoTableColumn): void;
    onShowMore(): void;
    getFilteredItems(queryParams?: {
        [key: string]: QueryParamsType;
    }): Observable<PoTableResponseApi>;
    setTableResponseProperties(data: PoTableResponseApi): void;
    initializeData(params?: {
        [key: string]: QueryParamsType;
    }): void;
    protected getDefaultColumns(item: any): {
        label: string;
        property: string;
    }[];
    protected setShowDetail(rowIdentifier: any | number, isShowDetail: boolean): void;
    private collapseAllItems;
    private configAfterSelectRow;
    private emitExpandEvents;
    private emitSelectAllEvents;
    private emitSelectEvents;
    private getColumnColor;
    private getColumnMasterDetail;
    private getMainColumns;
    private getSubtitleColumns;
    private isEverySelected;
    private onChangeColumns;
    private setColumnLink;
    private setColumnMasterDetail;
    private setMainColumns;
    private setSubtitleColumns;
    private sortArray;
    private unselectOtherRows;
    private verifyWidthColumnsPixels;
    private setService;
    private getFilteredParams;
    private getOrderParam;
    protected abstract calculateHeightTableContainer(height: any): any;
    protected abstract checkInfiniteScroll(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTableBaseComponent, never, never, { "hideTextOverflow": "p-hide-text-overflow"; "hideColumnsManager": "p-hide-columns-manager"; "autoCollapse": "p-auto-collapse"; "loadingShowMore": "p-loading-show-more"; "sort": "p-sort"; "showMoreDisabled": "p-show-more-disabled"; "striped": "p-striped"; "hideSelectAll": "p-hide-select-all"; "singleSelect": "p-single-select"; "selectableEntireLine": "p-selectable-entire-line"; "actionRight": "p-actions-right"; "maxColumns": "p-max-columns"; "items": "p-items"; "columns": "p-columns"; "container": "p-container"; "height": "p-height"; "hideDetail": "p-hide-detail"; "literals": "p-literals"; "loading": "p-loading"; "actions": "p-actions"; "selectable": "p-selectable"; "infiniteScroll": "p-infinite-scroll"; "infiniteScrollDistance": "p-infinite-scroll-distance"; "serviceApi": "p-service-api"; }, { "allSelected": "p-all-selected"; "allUnselected": "p-all-unselected"; "collapsed": "p-collapsed"; "expanded": "p-expanded"; "selected": "p-selected"; "showMore": "p-show-more"; "sortBy": "p-sort-by"; "unselected": "p-unselected"; "changeVisibleColumns": "p-change-visible-columns"; "columnRestoreManager": "p-restore-column-manager"; }, never, never, false>;
}
