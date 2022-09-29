import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PoGridRowActions } from './po-grid-row-actions.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * > Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.
 *
 * Componente grid.
 *
 * Ações / atalhos:
 *
 * - ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;
 * - ARROW-DOWN: Navega para celula inferior;
 * - ARROW-RIGHT: Navega para celula direita;
 * - ARROW-LEFT: Navega para celula esquerda;
 * - TAB: Navega para próxima celula;
 * - SHIFT+TAB: Navega para celula anterior;
 * - CTRL+DEL: Remove linha;
 * - DEL/BACKSPACE: Limpa celula;
 * - ENTER: Edita linha com valor atual/Confirma edição da celula;
 * - DOUBLE-CLICK: Edita linha com valor atual;
 * - ESC: Cancela edição da celula / Cancela inserção de linhas em branco;
 * - A..Z/0..9: Inicia edição com valor em branco.
 *
 * @example
 *
 * <example name="po-grid-basic" title="PO Grid Basic">
 *  <file name="sample-po-grid-basic/sample-po-grid-basic.component.html"> </file>
 *  <file name="sample-po-grid-basic/sample-po-grid-basic.component.ts"> </file>
 * </example>
 */
export declare class PoGridComponent implements OnDestroy {
    private changeDetectorRef;
    private elRef;
    tableElement: ElementRef;
    tableWrapper: ElementRef;
    /**
     * @description
     *
     * Ações disparadas quando uma linha do grid é manipulada.
     */
    rowActions: PoGridRowActions;
    /**
     * Lista com os dados que serão exibidos no grid.
     */
    data: Array<any>;
    lastCell: string;
    lastRow: number;
    lastColumn: number;
    currencyCell: string;
    currencyRow: number;
    currencyColumn: number;
    currencyObj: any;
    logger: boolean;
    width: string;
    widporeeze: number;
    widthActions: number;
    private resizeListener;
    private timeoutResize;
    private _columns;
    /**
     * Colunas exibidas no grid.
     */
    set columns(value: Array<any>);
    get columns(): Array<any>;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, renderer: Renderer2);
    ngOnDestroy(): void;
    get freezeColumns(): any[];
    get actionColumns(): any[];
    cancelRow(event: any, row: any): void;
    removeRow(event: any, row: any): boolean;
    tableKeydown(event: any, direction: string): void;
    tableClick(event: any): void;
    saveRow(row: number): boolean;
    insertRow(): boolean;
    isEmptyRow(row: number): boolean;
    selectCell(row: number, col: number): void;
    private debounceResize;
    private getEventPath;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoGridComponent, "po-grid", never, { "rowActions": "p-row-actions"; "data": "p-data"; "columns": "p-columns"; }, {}, never, never, false>;
}