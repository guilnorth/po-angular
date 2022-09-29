import { AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, IterableDiffers, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { PoDateService } from '../../services/po-date/po-date.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoPopupComponent } from '../po-popup/po-popup.component';
import { PoTableAction } from './interfaces/po-table-action.interface';
import { PoTableBaseComponent, QueryParamsType } from './po-table-base.component';
import { PoTableColumn } from './interfaces/po-table-column.interface';
import { PoTableColumnLabel } from './po-table-column-label/po-table-column-label.interface';
import { PoTableRowTemplateDirective } from './po-table-row-template/po-table-row-template.directive';
import { PoTableSubtitleColumn } from './po-table-subtitle-footer/po-table-subtitle-column.interface';
import { PoTableCellTemplateDirective } from './po-table-cell-template/po-table-cell-template.directive';
import { PoTableColumnTemplateDirective } from './po-table-column-template/po-table-column-template.directive';
import { PoTableService } from './services/po-table.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoTableBaseComponent
 *
 * @example
 *
 * <example name="po-table-basic" title="PO Table Basic">
 *  <file name="sample-po-table-basic/sample-po-table-basic.component.ts"> </file>
 *  <file name="sample-po-table-basic/sample-po-table-basic.component.html"> </file>
 * </example>
 *
 * <example name="po-table-labs" title="PO Table Labs">
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.ts"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.html"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.po.ts"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.service.ts"> </file>
 * </example>
 *
 * <example name="po-table-with-api" title="PO Table using API">
 *  <file name="sample-po-table-with-api/sample-po-table-with-api.component.ts"> </file>
 *  <file name="sample-po-table-with-api/sample-po-table-with-api.component.html"> </file>
 * </example>
 *
 * <example name="po-table-transport" title="PO Table - Transport">
 *  <file name="sample-po-table-transport/sample-po-table-transport.component.ts"> </file>
 *  <file name="sample-po-table-transport/sample-po-table-transport.component.html"> </file>
 *  <file name="sample-po-table-transport/sample-po-table-transport.service.ts"> </file>
 * </example>
 *
 * <example name="po-table-airfare" title="PO Table - Airfare">
 *  <file name="sample-po-table-airfare/sample-po-table-airfare.component.ts"> </file>
 *  <file name="sample-po-table-airfare/sample-po-table-airfare.component.html"> </file>
 *  <file name="sample-po-table-airfare/sample-po-table-airfare.service.ts"> </file>
 * </example>
 *
 * <example name="po-table-components" title="PO Table - Po Field Components">
 *  <file name="sample-po-table-components/sample-po-table-components.component.ts"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.enum.ts"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.component.html"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.service.ts"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.component.css"> </file>
 * </example>
 *
 */
export declare class PoTableComponent extends PoTableBaseComponent implements AfterViewInit, DoCheck, OnDestroy {
    private changeDetector;
    private decimalPipe;
    private router;
    private defaultService;
    tableRowTemplate: PoTableRowTemplateDirective;
    tableCellTemplate: PoTableCellTemplateDirective;
    tableColumnTemplates: QueryList<PoTableColumnTemplateDirective>;
    noColumnsHeader: any;
    noColumnsHeaderFixed: any;
    poPopupComponent: PoPopupComponent;
    tableFooterElement: any;
    tableWrapperElement: any;
    poTableTbody: any;
    poTableThead: any;
    poTableTbodyVirtual: any;
    columnManager: any;
    columnManagerFixed: any;
    columnActionLeft: any;
    columnActionLeftFixed: any;
    actionsIconElement: QueryList<any>;
    actionsElement: QueryList<any>;
    heightTableContainer: number;
    heightTableVirtual: number;
    popupTarget: any;
    tableOpacity: number;
    tooltipText: string;
    itemSize: number;
    lastVisibleColumnsSelected: Array<PoTableColumn>;
    private _columnManagerTarget;
    private _columnManagerTargetFixed;
    private differ;
    private footerHeight;
    private headerHeight;
    private initialized;
    private timeoutResize;
    private visibleElement;
    private scrollEvent$;
    private subscriptionScrollEvent;
    private clickListener;
    private resizeListener;
    JSON: JSON;
    set columnManagerTarget(value: ElementRef);
    get columnManagerTarget(): ElementRef;
    set columnManagerTargetFixed(value: ElementRef);
    get columnManagerTargetFixed(): ElementRef;
    constructor(poDate: PoDateService, differs: IterableDiffers, renderer: Renderer2, poLanguageService: PoLanguageService, changeDetector: ChangeDetectorRef, decimalPipe: DecimalPipe, router: Router, defaultService: PoTableService);
    get hasRowTemplateWithArrowDirectionRight(): boolean;
    get columnCount(): number;
    get columnCountForMasterDetail(): number;
    get detailHideSelect(): boolean;
    get hasVisibleActions(): boolean;
    get firstAction(): PoTableAction;
    get hasFooter(): boolean;
    get hasMasterDetailColumn(): boolean;
    get hasRowTemplate(): boolean;
    get hasSelectableColumn(): boolean;
    get hasValidColumns(): boolean;
    get hasVisibleSubtitleColumns(): boolean;
    get isSingleAction(): boolean;
    get visibleActions(): PoTableAction[];
    ngAfterViewInit(): void;
    showMoreInfiniteScroll({ target }: {
        target: any;
    }): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /**
     * Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.
     *
     * Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:
     * ```
     * url + ?page=1&pageSize=10
     * ```
     * > Obs: os parâmetros `page` e `pageSize` sempre serão chamados independente de ser enviados outros parâmetros.
     *
     * Caso sejam informados os parâmetros `{ name: 'JOHN', age: '23' }`, todos serão adicionados ao GET, conforme abaixo:
     * ```
     * url + ?page=1&pageSize=10&name=JOHN&age=23
     * ```
     *
     * @param { { key: value } } queryParams Formato do objeto a ser enviado.
     * > Pode ser utilizada qualquer string como key, e qualquer string ou number como value.
     */
    applyFilters(queryParams?: {
        [key: string]: QueryParamsType;
    }): void;
    /**
     * Método que colapsa uma linha com detalhe quando executada.
     *
     * @param { number } rowIndex Índice da linha que será colapsada.
     * > Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.
     */
    collapse(rowIndex: number): void;
    /**
     * Método que expande uma linha com detalhe quando executada.
     *
     * @param { number } rowIndex Índice da linha que será expandida.
     * > Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.
     */
    expand(rowIndex: number): void;
    /**
     * Retorna as linhas do `po-table` que estão selecionadas.
     */
    getSelectedRows(): any[];
    /**
     * Retorna as linhas do `po-table` que não estão selecionadas.
     */
    getUnselectedRows(): any[];
    /**
     * Desmarca as linhas que estão selecionadas.
     */
    unselectRows(): void;
    checkDisabled(row: any, column: PoTableColumn): any;
    containsMasterDetail(row: any): any;
    executeTableAction(row: any, tableAction: any): void;
    /**
     * Desmarca uma linha que está selecionada.
     */
    unselectRowItem(itemfn: {
        [key: string]: any;
    } | ((item: any) => boolean)): void;
    /**
     * Seleciona uma linha do 'po-table'.
     */
    selectRowItem(itemfn: {
        [key: string]: any;
    } | ((item: any) => boolean)): void;
    formatNumber(value: any, format: string): any;
    getCellData(row: any, column: PoTableColumn): any;
    getBooleanLabel(rowValue: any, columnBoolean: PoTableColumn): string;
    getColumnIcons(row: any, column: PoTableColumn): any;
    getColumnLabel(row: any, columnLabel: PoTableColumn): PoTableColumnLabel;
    getSubtitleColumn(row: any, subtitleColumn: PoTableColumn): PoTableSubtitleColumn;
    isShowMasterDetail(row: any): boolean;
    isShowRowTemplate(row: any, index: number): boolean;
    onClickLink(event: any, row: any, column: PoTableColumn): void;
    onChangeVisibleColumns(columns: Array<string>): void;
    onColumnRestoreManager(value: Array<String>): void;
    onVisibleColumnsChange(columns: Array<PoTableColumn>): void;
    tooltipMouseEnter(event: any, column?: PoTableColumn, row?: any): any;
    tooltipMouseLeave(): void;
    togglePopup(row: any, targetRef: any): void;
    trackBy(index: number): number;
    validateTableAction(row: any, tableAction: any): any;
    onOpenColumnManager(): void;
    /**
     * Método que remove um item da tabela.
     *
     * @param { number | { key: value } } item Índice da linha ou o item que será removido.
     * > Ao remover o item, a linha que o representa será excluída da tabela.
     */
    removeItem(item: number | {
        [key: string]: any;
    }): void;
    /**
     * Método que atualiza um item da tabela.
     *
     * @param { number | { key: value } } item Índice da linha ou o item que será atualizado.
     * @param { { key: value } } updatedItem Item que foi atualizado.
     * > Ao atualizar o item, a informação será alterada na tabela.
     */
    updateItem(item: number | {
        [key: string]: any;
    }, updatedItem: {
        [key: string]: any;
    }): void;
    getTemplate(column: PoTableColumn): TemplateRef<any>;
    syncronizeHorizontalScroll(): void;
    getWidthColumnManager(): any;
    getColumnWidthActionsLeft(): any;
    protected calculateHeightTableContainer(height: any): void;
    protected checkInfiniteScroll(): void;
    private checkChangesItems;
    private checkingIfColumnHasTooltip;
    private debounceResize;
    private findCustomIcon;
    private getHeightTableFooter;
    private getHeightTableHeader;
    private hasInfiniteScroll;
    private includeInfiniteScroll;
    private mergeCustomIcons;
    private removeListeners;
    private setTableOpacity;
    private verifyChangeHeightInFooter;
    private verifyChangeHeightInHeader;
    protected verifyCalculateHeightTableContainer(): void;
    private toggleSelect;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTableComponent, "po-table", never, {}, {}, ["tableRowTemplate", "tableCellTemplate", "tableColumnTemplates"], never, false>;
}