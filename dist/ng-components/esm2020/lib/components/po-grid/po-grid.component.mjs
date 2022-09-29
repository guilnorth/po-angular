import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-grid-cell-action/po-grid-cell-action.component";
import * as i3 from "./po-grid-cell/po-grid-cell.component";
import * as i4 from "./po-grid-head/po-grid-head.component";
const _c0 = ["table"];
const _c1 = ["wrapper"];
function PoGridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "br");
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "br");
    i0.ɵɵtext(5);
    i0.ɵɵelement(6, "br")(7, "hr");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "json");
    i0.ɵɵelement(10, "hr");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" lastCell: ", ctx_r1.lastCell, " | currencyCell: ", ctx_r1.currencyCell, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" lastRow: ", ctx_r1.lastRow, " | currencyRow: ", ctx_r1.currencyRow, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" lastColumn: ", ctx_r1.lastColumn, " | currencyColumn: ", ctx_r1.currencyColumn, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" currencyObj: ", i0.ɵɵpipeBind1(9, 7, ctx_r1.currencyObj), " ");
} }
function PoGridComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoGridComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, PoGridComponent_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function PoGridComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoGridComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoGridComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, PoGridComponent_div_10_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r10 = i0.ɵɵreference(16);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function PoGridComponent_ng_template_11_po_grid_head_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-grid-head", 21);
} if (rf & 2) {
    const column_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵstyleProp("width", column_r16.cssWidth)("max-width", column_r16.cssWidth)("min-width", column_r16.cssWidth);
    i0.ɵɵpropertyInterpolate("p-position", "0-" + i_r17);
    i0.ɵɵproperty("p-width", column_r16.width)("p-align", column_r16.align)("p-title", column_r16.label);
} }
function PoGridComponent_ng_template_11_div_5_po_grid_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-grid-cell", 24);
    i0.ɵɵlistener("p-valueChange", function PoGridComponent_ng_template_11_div_5_po_grid_cell_1_Template_po_grid_cell_p_valueChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r25); const column_r21 = restoredCtx.$implicit; const row_r18 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((row_r18[column_r21.property] = $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r26 = i0.ɵɵnextContext();
    const j_r19 = ctx_r26.index;
    const row_r18 = ctx_r26.$implicit;
    i0.ɵɵstyleProp("width", column_r21.cssWidth)("max-width", column_r21.cssWidth)("min-width", column_r21.cssWidth);
    i0.ɵɵpropertyInterpolate("p-position", j_r19 + 1 + "-" + i_r22);
    i0.ɵɵproperty("p-align", column_r21.align)("p-readonly", column_r21.readonly)("p-required", column_r21.required)("p-width", column_r21.width)("p-value", row_r18[column_r21.property]);
} }
function PoGridComponent_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("keydown.control.delete", function PoGridComponent_ng_template_11_div_5_Template_div_keydown_control_delete_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r28); const row_r18 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.removeRow($event, row_r18)); })("keydown.esc", function PoGridComponent_ng_template_11_div_5_Template_div_keydown_esc_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r28); const row_r18 = restoredCtx.$implicit; const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.cancelRow($event, row_r18)); });
    i0.ɵɵtemplate(1, PoGridComponent_ng_template_11_div_5_po_grid_cell_1_Template, 1, 12, "po-grid-cell", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.freezeColumns);
} }
function PoGridComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    i0.ɵɵtemplate(3, PoGridComponent_ng_template_11_po_grid_head_3_Template, 1, 10, "po-grid-head", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtemplate(5, PoGridComponent_ng_template_11_div_5_Template, 2, 1, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r7.freezeColumns);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r7.data);
} }
function PoGridComponent_ng_template_13_po_grid_head_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-grid-head", 27);
} if (rf & 2) {
    const column_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", column_r32.cssWidth)("max-width", column_r32.cssWidth)("min-width", column_r32.cssWidth);
    i0.ɵɵpropertyInterpolate("p-position", "0-" + (i_r33 + ctx_r30.freezeColumns.length));
    i0.ɵɵproperty("p-align", column_r32.align)("p-title", column_r32.label)("p-width", column_r32.width);
} }
function PoGridComponent_ng_template_13_div_5_po_grid_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-grid-cell", 29);
    i0.ɵɵlistener("p-valueChange", function PoGridComponent_ng_template_13_div_5_po_grid_cell_1_Template_po_grid_cell_p_valueChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r41); const column_r37 = restoredCtx.$implicit; const row_r34 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((row_r34[column_r37.property] = $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r42 = i0.ɵɵnextContext();
    const j_r35 = ctx_r42.index;
    const row_r34 = ctx_r42.$implicit;
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", column_r37.cssWidth)("max-width", column_r37.cssWidth)("min-width", column_r37.cssWidth);
    i0.ɵɵpropertyInterpolate("p-position", j_r35 + 1 + "-" + (i_r38 + ctx_r36.freezeColumns.length));
    i0.ɵɵproperty("p-align", column_r37.align)("p-readonly", column_r37.readonly)("p-required", column_r37.required)("p-value", row_r34[column_r37.property])("p-width", column_r37.width);
} }
function PoGridComponent_ng_template_13_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("keydown.control.delete", function PoGridComponent_ng_template_13_div_5_Template_div_keydown_control_delete_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r44); const row_r34 = restoredCtx.$implicit; const ctx_r43 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r43.removeRow($event, row_r34)); })("keydown.esc", function PoGridComponent_ng_template_13_div_5_Template_div_keydown_esc_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r44); const row_r34 = restoredCtx.$implicit; const ctx_r45 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r45.cancelRow($event, row_r34)); });
    i0.ɵɵtemplate(1, PoGridComponent_ng_template_13_div_5_po_grid_cell_1_Template, 1, 12, "po-grid-cell", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r31.columns);
} }
function PoGridComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 17)(2, "div", 18);
    i0.ɵɵtemplate(3, PoGridComponent_ng_template_13_po_grid_head_3_Template, 1, 10, "po-grid-head", 26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtemplate(5, PoGridComponent_ng_template_13_div_5_Template, 2, 1, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r9.columns);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r9.data);
} }
function PoGridComponent_ng_template_15_po_grid_head_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-grid-head", 32);
} if (rf & 2) {
    const column_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    const ctx_r46 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("p-position", "0-" + (i_r49 + ctx_r46.freezeColumns.length + ctx_r46.columns.length));
    i0.ɵɵproperty("p-title", column_r48.label)("p-align", column_r48.align);
} }
function PoGridComponent_ng_template_15_div_5_po_grid_cell_action_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-grid-cell-action", 34);
} if (rf & 2) {
    const column_r53 = ctx.$implicit;
    const i_r54 = ctx.index;
    const ctx_r55 = i0.ɵɵnextContext();
    const j_r51 = ctx_r55.index;
    const row_r50 = ctx_r55.$implicit;
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("p-position", j_r51 + 1 + "-" + (i_r54 + ctx_r52.freezeColumns.length + ctx_r52.columns.length));
    i0.ɵɵproperty("p-value", row_r50[column_r53.property]);
} }
function PoGridComponent_ng_template_15_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("keydown.control.delete", function PoGridComponent_ng_template_15_div_5_Template_div_keydown_control_delete_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r57); const row_r50 = restoredCtx.$implicit; const ctx_r56 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r56.removeRow($event, row_r50)); })("keydown.esc", function PoGridComponent_ng_template_15_div_5_Template_div_keydown_esc_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r57); const row_r50 = restoredCtx.$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r58.cancelRow($event, row_r50)); });
    i0.ɵɵtemplate(1, PoGridComponent_ng_template_15_div_5_po_grid_cell_action_1_Template, 1, 2, "po-grid-cell-action", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r47.actionColumns);
} }
function PoGridComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 17)(2, "div", 18);
    i0.ɵɵtemplate(3, PoGridComponent_ng_template_15_po_grid_head_3_Template, 1, 3, "po-grid-head", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtemplate(5, PoGridComponent_ng_template_15_div_5_Template, 2, 1, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r11.actionColumns);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r11.data);
} }
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
export class PoGridComponent {
    constructor(changeDetectorRef, elRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        /**
         * @description
         *
         * Ações disparadas quando uma linha do grid é manipulada.
         */
        this.rowActions = {};
        /**
         * Lista com os dados que serão exibidos no grid.
         */
        this.data = [];
        this.lastCell = '0-0';
        this.lastRow = 0;
        this.lastColumn = 0;
        this.currencyCell = '0-0';
        this.currencyRow = 0;
        this.currencyColumn = 0;
        this.logger = false;
        this.width = '100%';
        this.widporeeze = 0;
        this.widthActions = 0;
        this._columns = [];
        this.debounceResize();
        this.resizeListener = renderer.listen('window', 'resize', (event) => {
            this.debounceResize();
        });
    }
    /**
     * Colunas exibidas no grid.
     */
    set columns(value) {
        this._columns = [...value];
        this._columns.forEach(column => {
            column.label = column.label || column.property;
            if (column.freeze === true) {
                column.cssWidth = `${column.width || 100}px`;
            }
            else {
                column.cssWidth = column.width ? `${column.width}px` : '100%';
            }
        });
    }
    get columns() {
        return this._columns.filter(column => column.freeze !== true && column.action !== true);
    }
    ngOnDestroy() {
        if (this.resizeListener) {
            this.resizeListener();
        }
    }
    get freezeColumns() {
        const freezeColumns = this._columns.filter(column => column.freeze === true);
        this.widporeeze = freezeColumns.reduce((prev, current) => prev + (current.width || 100), 0);
        return freezeColumns;
    }
    get actionColumns() {
        const actionsColumns = this._columns.filter(column => column.action === true);
        this.widthActions = actionsColumns.length > 0 ? 56 : 0;
        return actionsColumns;
    }
    cancelRow(event, row) {
        const el = this.getEventPath(event).find(element => element.id);
        if (!el) {
            return;
        }
        const [x] = el.id.split('-');
        if (this.isEmptyRow(x)) {
            if (!this.removeRow(event, row)) {
                return;
            }
            this.currencyObj = Object.assign({}, this.data[this.currencyRow - 1]);
        }
        else {
            this.data[+x - 1] = Object.assign({}, this.currencyObj);
            setTimeout(() => this.selectCell(this.currencyRow, this.currencyColumn));
        }
    }
    removeRow(event, row) {
        if (this.rowActions.beforeRemove && !this.rowActions.beforeRemove(Object.assign({}, row))) {
            return false;
        }
        const index = this.data.indexOf(row);
        this.data.splice(index, 1);
        this.changeDetectorRef.detectChanges();
        if (this.data.length === 0 || index === this.data.length) {
            this.selectCell(this.currencyRow - 1, this.currencyColumn);
        }
        else {
            this.selectCell(this.currencyRow, this.currencyColumn);
        }
        return true;
    }
    tableKeydown(event, direction) {
        let [row, col] = event.target.id.split('-');
        row = +row;
        col = +col;
        let prow = +row;
        let pcol = +col;
        if (direction === 'down') {
            if (row <= this.data.length) {
                prow++;
            }
            if (row === this.data.length) {
                if (row === 0 || !this.isEmptyRow(row)) {
                    if (this.saveRow(row)) {
                        if (!this.insertRow()) {
                            return;
                        }
                    }
                    else {
                        return;
                    }
                }
                else {
                    prow--;
                }
            }
        }
        else if (direction === 'up' && row > 0) {
            prow--;
        }
        else if (direction === 'left' && col > 0) {
            pcol--;
        }
        else if (direction === 'right' && col < this._columns.length - 1) {
            pcol++;
        }
        else if (direction === 'next') {
            if (col < this._columns.length - 1) {
                pcol++;
                event.preventDefault();
            }
            else if (row < this.data.length) {
                pcol = 0;
                prow++;
                event.preventDefault();
            }
        }
        else if (direction === 'prior') {
            if (col > 0) {
                pcol--;
                event.preventDefault();
            }
            else if (row > 0) {
                pcol = this._columns.length - 1;
                prow--;
                event.preventDefault();
            }
        }
        if (this.currencyCell === `${prow}-${pcol}`) {
            return;
        }
        if (prow !== this.currencyRow && row > 0 && this.data.length >= row) {
            if (!this.isEmptyRow(row)) {
                if (!this.saveRow(row)) {
                    return;
                }
            }
            else {
                if (!this.removeRow(event, row)) {
                    return;
                }
            }
        }
        if (this.currencyRow !== prow) {
            this.currencyObj = Object.assign({}, this.data[prow - 1]);
        }
        this.lastCell = event.target.id;
        this.lastRow = row;
        this.lastColumn = col;
        this.selectCell(prow, pcol);
    }
    tableClick(event) {
        const el = this.getEventPath(event).find(element => element.id);
        if (!el) {
            this.selectCell(this.currencyRow, this.currencyColumn);
            return;
        }
        if (this.currencyCell === el.id) {
            return;
        }
        const [row, col] = el.id.split('-');
        const prow = +row;
        const pcol = +col;
        if (prow !== this.currencyRow) {
            if (this.currencyRow > 0) {
                if (!this.isEmptyRow(this.currencyRow)) {
                    if (!this.saveRow(this.currencyRow)) {
                        this.selectCell(this.currencyRow, this.currencyColumn);
                        return;
                    }
                }
                else {
                    if (!this.removeRow(event, row)) {
                        return;
                    }
                }
            }
            this.currencyObj = Object.assign({}, this.data[prow - 1]);
        }
        this.lastCell = this.currencyCell;
        this.lastRow = this.currencyRow;
        this.lastColumn = this.currencyColumn;
        this.currencyCell = el.id;
        this.currencyRow = prow;
        this.currencyColumn = pcol;
    }
    saveRow(row) {
        const obj = this.data[row - 1];
        if (!Object.keys(obj).some(prop => obj[prop] !== this.currencyObj[prop])) {
            return true;
        }
        if (this.rowActions.beforeSave && !this.rowActions.beforeSave(obj, this.currencyObj)) {
            return false;
        }
        const requireds = [];
        this.columns.forEach(column => {
            if (column.required === true && !obj[column.property]) {
                requireds.push(column.property);
            }
        });
        return requireds.length === 0;
    }
    insertRow() {
        const obj = {};
        if (this.rowActions.beforeInsert && !this.rowActions.beforeInsert(obj)) {
            return false;
        }
        this.data.push(obj);
        this.changeDetectorRef.detectChanges();
        return true;
    }
    isEmptyRow(row) {
        const obj = this.data[row - 1];
        if (!obj) {
            // title
            return false;
        }
        const filled = Object.keys(obj).some(property => obj[property]);
        return !filled;
    }
    selectCell(row, col) {
        const nextCell = this.elRef.nativeElement.querySelector(`[id='${row}-${col}']`);
        if (nextCell) {
            this.currencyCell = `${row}-${col}`;
            this.currencyRow = row;
            this.currencyColumn = col;
            nextCell.focus();
        }
    }
    debounceResize() {
        clearTimeout(this.timeoutResize);
        this.timeoutResize = setTimeout(() => {
            const widthTableWrapper = this.tableWrapper.nativeElement.offsetWidth;
            this.width = `${widthTableWrapper - (this.widporeeze + 8) - this.widthActions}px`;
        }, 100);
    }
    getEventPath(event) {
        // firefox do not have support to event.path
        return event.path || event.composedPath();
    }
}
PoGridComponent.ɵfac = function PoGridComponent_Factory(t) { return new (t || PoGridComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoGridComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGridComponent, selectors: [["po-grid"]], viewQuery: function PoGridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableWrapper = _t.first);
    } }, inputs: { rowActions: ["p-row-actions", "rowActions"], data: ["p-data", "data"], columns: ["p-columns", "columns"] }, decls: 17, vars: 10, consts: [[1, "po-grid-wrapper", "po-grid-row-wrapper"], ["wrapper", ""], [4, "ngIf"], [1, "po-grid"], [1, "po-grid-body"], [1, "po-grid-row", 3, "keydown.arrowup", "keydown.arrowdown", "keydown.arrowleft", "keydown.arrowright", "keydown.tab", "keydown.shift.tab", "click", "contextmenu", "dblclick"], ["table", ""], ["class", "po-grid-cell po-grid-cell-freeze", 4, "ngIf"], [1, "po-grid-cell", "po-grid-cell-normal"], [4, "ngTemplateOutlet"], ["class", "po-grid-cell po-grid-cell-action", 4, "ngIf"], ["divFreezeColumns", ""], ["divColumns", ""], ["divActionColumns", ""], [1, "po-grid-cell", "po-grid-cell-freeze"], [1, "po-grid-cell", "po-grid-cell-action"], [1, "po-grid", "po-grid-freeze"], [1, "po-grid-header-group"], [1, "po-grid-row"], ["class", "po-grid-title", "p-freeze", "true", 3, "width", "max-width", "min-width", "p-position", "p-width", "p-align", "p-title", 4, "ngFor", "ngForOf"], ["class", "po-grid-row", 3, "keydown.control.delete", "keydown.esc", 4, "ngFor", "ngForOf"], ["p-freeze", "true", 1, "po-grid-title", 3, "p-position", "p-width", "p-align", "p-title"], [1, "po-grid-row", 3, "keydown.control.delete", "keydown.esc"], ["class", "po-grid-cell", "p-freeze", "true", 3, "width", "max-width", "min-width", "p-align", "p-readonly", "p-required", "p-position", "p-width", "p-value", "p-valueChange", 4, "ngFor", "ngForOf"], ["p-freeze", "true", 1, "po-grid-cell", 3, "p-align", "p-readonly", "p-required", "p-position", "p-width", "p-value", "p-valueChange"], [1, "po-grid", "po-grid-normal"], ["class", "po-grid-title", 3, "width", "max-width", "min-width", "p-align", "p-position", "p-title", "p-width", 4, "ngFor", "ngForOf"], [1, "po-grid-title", 3, "p-align", "p-position", "p-title", "p-width"], ["class", "po-grid-cell", 3, "width", "max-width", "min-width", "p-align", "p-readonly", "p-required", "p-position", "p-value", "p-width", "p-valueChange", 4, "ngFor", "ngForOf"], [1, "po-grid-cell", 3, "p-align", "p-readonly", "p-required", "p-position", "p-value", "p-width", "p-valueChange"], [1, "po-grid", "po-grid-actions"], ["class", "po-grid-title", 3, "p-position", "p-title", "p-align", 4, "ngFor", "ngForOf"], [1, "po-grid-title", 3, "p-position", "p-title", "p-align"], ["class", "po-grid-cell", 3, "p-position", "p-value", 4, "ngFor", "ngForOf"], [1, "po-grid-cell", 3, "p-position", "p-value"]], template: function PoGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PoGridComponent_div_2_Template, 11, 9, "div", 2);
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5, 6);
        i0.ɵɵlistener("keydown.arrowup", function PoGridComponent_Template_div_keydown_arrowup_5_listener($event) { return ctx.tableKeydown($event, "up"); })("keydown.arrowdown", function PoGridComponent_Template_div_keydown_arrowdown_5_listener($event) { return ctx.tableKeydown($event, "down"); })("keydown.arrowleft", function PoGridComponent_Template_div_keydown_arrowleft_5_listener($event) { return ctx.tableKeydown($event, "left"); })("keydown.arrowright", function PoGridComponent_Template_div_keydown_arrowright_5_listener($event) { return ctx.tableKeydown($event, "right"); })("keydown.tab", function PoGridComponent_Template_div_keydown_tab_5_listener($event) { return ctx.tableKeydown($event, "next"); })("keydown.shift.tab", function PoGridComponent_Template_div_keydown_shift_tab_5_listener($event) { return ctx.tableKeydown($event, "prior"); })("click", function PoGridComponent_Template_div_click_5_listener($event) { return ctx.tableClick($event); })("contextmenu", function PoGridComponent_Template_div_contextmenu_5_listener($event) { return ctx.tableClick($event); })("dblclick", function PoGridComponent_Template_div_dblclick_5_listener($event) { return ctx.tableClick($event); });
        i0.ɵɵtemplate(7, PoGridComponent_div_7_Template, 2, 1, "div", 7);
        i0.ɵɵelementStart(8, "div", 8);
        i0.ɵɵtemplate(9, PoGridComponent_ng_container_9_Template, 1, 0, "ng-container", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, PoGridComponent_div_10_Template, 2, 1, "div", 10);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(11, PoGridComponent_ng_template_11_Template, 6, 2, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(13, PoGridComponent_ng_template_13_Template, 6, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(15, PoGridComponent_ng_template_15_Template, 6, 2, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r8 = i0.ɵɵreference(14);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.logger);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.freezeColumns.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.width)("max-width", ctx.width)("min-width", ctx.width);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", _r8);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.actionColumns.length > 0);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.PoGridCellActionComponent, i3.PoGridCellComponent, i4.PoGridHeadComponent, i1.JsonPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGridComponent, [{
        type: Component,
        args: [{ selector: 'po-grid', template: "<div class=\"po-grid-wrapper po-grid-row-wrapper\" #wrapper>\r\n  <div *ngIf=\"logger\">\r\n    lastCell: {{ lastCell }} | currencyCell: {{ currencyCell }} <br />\r\n    lastRow: {{ lastRow }} | currencyRow: {{ currencyRow }} <br />\r\n    lastColumn: {{ lastColumn }} | currencyColumn: {{ currencyColumn }} <br />\r\n    <hr />\r\n    currencyObj: {{ currencyObj | json }}\r\n    <hr />\r\n  </div>\r\n\r\n  <div class=\"po-grid\">\r\n    <div class=\"po-grid-body\">\r\n      <div\r\n        class=\"po-grid-row\"\r\n        #table\r\n        (keydown.arrowup)=\"tableKeydown($event, 'up')\"\r\n        (keydown.arrowdown)=\"tableKeydown($event, 'down')\"\r\n        (keydown.arrowleft)=\"tableKeydown($event, 'left')\"\r\n        (keydown.arrowright)=\"tableKeydown($event, 'right')\"\r\n        (keydown.tab)=\"tableKeydown($event, 'next')\"\r\n        (keydown.shift.tab)=\"tableKeydown($event, 'prior')\"\r\n        (click)=\"tableClick($event)\"\r\n        (contextmenu)=\"tableClick($event)\"\r\n        (dblclick)=\"tableClick($event)\"\r\n      >\r\n        <div class=\"po-grid-cell po-grid-cell-freeze\" *ngIf=\"freezeColumns.length > 0\">\r\n          <ng-container *ngTemplateOutlet=\"divFreezeColumns\"></ng-container>\r\n        </div>\r\n\r\n        <div\r\n          class=\"po-grid-cell po-grid-cell-normal\"\r\n          [style.width]=\"width\"\r\n          [style.max-width]=\"width\"\r\n          [style.min-width]=\"width\"\r\n        >\r\n          <ng-container *ngTemplateOutlet=\"divColumns\"></ng-container>\r\n        </div>\r\n\r\n        <div class=\"po-grid-cell po-grid-cell-action\" *ngIf=\"actionColumns.length > 0\">\r\n          <ng-container *ngTemplateOutlet=\"divActionColumns\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Coluna com as colunas congeladas -->\r\n<ng-template #divFreezeColumns>\r\n  <div class=\"po-grid po-grid-freeze\">\r\n    <div class=\"po-grid-header-group\">\r\n      <div class=\"po-grid-row\">\r\n        <po-grid-head\r\n          *ngFor=\"let column of freezeColumns; index as i\"\r\n          class=\"po-grid-title\"\r\n          [style.width]=\"column.cssWidth\"\r\n          [style.max-width]=\"column.cssWidth\"\r\n          [style.min-width]=\"column.cssWidth\"\r\n          p-freeze=\"true\"\r\n          p-position=\"{{ '0-' + i }}\"\r\n          [p-width]=\"column.width\"\r\n          [p-align]=\"column.align\"\r\n          [p-title]=\"column.label\"\r\n        >\r\n        </po-grid-head>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"po-grid-body\">\r\n      <div\r\n        class=\"po-grid-row\"\r\n        *ngFor=\"let row of data; index as j\"\r\n        (keydown.control.delete)=\"removeRow($event, row)\"\r\n        (keydown.esc)=\"cancelRow($event, row)\"\r\n      >\r\n        <po-grid-cell\r\n          *ngFor=\"let column of freezeColumns; index as i\"\r\n          class=\"po-grid-cell\"\r\n          [style.width]=\"column.cssWidth\"\r\n          [style.max-width]=\"column.cssWidth\"\r\n          [style.min-width]=\"column.cssWidth\"\r\n          p-freeze=\"true\"\r\n          [p-align]=\"column.align\"\r\n          [p-readonly]=\"column.readonly\"\r\n          [p-required]=\"column.required\"\r\n          p-position=\"{{ j + 1 + '-' + i }}\"\r\n          [p-width]=\"column.width\"\r\n          [(p-value)]=\"row[column.property]\"\r\n        >\r\n        </po-grid-cell>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!-- FIM: Coluna com as colunas congeladas -->\r\n\r\n<!-- Coluna com as colunas nornais -->\r\n<ng-template #divColumns>\r\n  <div class=\"po-grid po-grid-normal\">\r\n    <div class=\"po-grid-header-group\">\r\n      <div class=\"po-grid-row\">\r\n        <po-grid-head\r\n          *ngFor=\"let column of columns; index as i\"\r\n          class=\"po-grid-title\"\r\n          [style.width]=\"column.cssWidth\"\r\n          [style.max-width]=\"column.cssWidth\"\r\n          [style.min-width]=\"column.cssWidth\"\r\n          [p-align]=\"column.align\"\r\n          p-position=\"{{ '0-' + (i + freezeColumns.length) }}\"\r\n          [p-title]=\"column.label\"\r\n          [p-width]=\"column.width\"\r\n        >\r\n        </po-grid-head>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"po-grid-body\">\r\n      <div\r\n        class=\"po-grid-row\"\r\n        *ngFor=\"let row of data; index as j\"\r\n        (keydown.control.delete)=\"removeRow($event, row)\"\r\n        (keydown.esc)=\"cancelRow($event, row)\"\r\n      >\r\n        <po-grid-cell\r\n          *ngFor=\"let column of columns; index as i\"\r\n          class=\"po-grid-cell\"\r\n          [style.width]=\"column.cssWidth\"\r\n          [style.max-width]=\"column.cssWidth\"\r\n          [style.min-width]=\"column.cssWidth\"\r\n          [p-align]=\"column.align\"\r\n          [p-readonly]=\"column.readonly\"\r\n          [p-required]=\"column.required\"\r\n          p-position=\"{{ j + 1 + '-' + (i + freezeColumns.length) }}\"\r\n          [(p-value)]=\"row[column.property]\"\r\n          [p-width]=\"column.width\"\r\n        >\r\n        </po-grid-cell>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!-- FIM: Coluna com as colunas nornais -->\r\n\r\n<!-- Coluna com as colunas de a\u00E7\u00E3o -->\r\n<ng-template #divActionColumns>\r\n  <div class=\"po-grid po-grid-actions\">\r\n    <div class=\"po-grid-header-group\">\r\n      <div class=\"po-grid-row\">\r\n        <po-grid-head\r\n          *ngFor=\"let column of actionColumns; index as i\"\r\n          class=\"po-grid-title\"\r\n          p-position=\"{{ '0-' + (i + freezeColumns.length + columns.length) }}\"\r\n          [p-title]=\"column.label\"\r\n          [p-align]=\"column.align\"\r\n        >\r\n        </po-grid-head>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"po-grid-body\">\r\n      <div\r\n        class=\"po-grid-row\"\r\n        *ngFor=\"let row of data; index as j\"\r\n        (keydown.control.delete)=\"removeRow($event, row)\"\r\n        (keydown.esc)=\"cancelRow($event, row)\"\r\n      >\r\n        <po-grid-cell-action\r\n          *ngFor=\"let column of actionColumns; index as i\"\r\n          class=\"po-grid-cell\"\r\n          p-position=\"{{ j + 1 + '-' + (i + freezeColumns.length + columns.length) }}\"\r\n          [p-value]=\"row[column.property]\"\r\n        >\r\n        </po-grid-cell-action>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!-- FIM: Coluna com as colunas de a\u00E7\u00E3o -->\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { tableElement: [{
            type: ViewChild,
            args: ['table', { static: true }]
        }], tableWrapper: [{
            type: ViewChild,
            args: ['wrapper', { static: true }]
        }], rowActions: [{
            type: Input,
            args: ['p-row-actions']
        }], data: [{
            type: Input,
            args: ['p-data']
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ3JpZC9wby1ncmlkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1ncmlkL3BvLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUF3QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0MvRywyQkFBb0I7SUFDbEIsWUFBNEQ7SUFBQSxxQkFBTTtJQUNsRSxZQUF3RDtJQUFBLHFCQUFNO0lBQzlELFlBQW9FO0lBQUEscUJBQU0sU0FBQTtJQUUxRSxZQUNBOztJQUFBLHNCQUFNO0lBQ1IsaUJBQU07OztJQU5KLGVBQTREO0lBQTVELG9HQUE0RDtJQUM1RCxlQUF3RDtJQUF4RCxnR0FBd0Q7SUFDeEQsZUFBb0U7SUFBcEUsNEdBQW9FO0lBRXBFLGVBQ0E7SUFEQSxzRkFDQTs7O0lBbUJNLHdCQUFrRTs7O0lBRHBFLCtCQUErRTtJQUM3RSx3RkFBa0U7SUFDcEUsaUJBQU07Ozs7SUFEVyxlQUFrQztJQUFsQyxzQ0FBa0M7OztJQVNqRCx3QkFBNEQ7OztJQUk1RCx3QkFBa0U7OztJQURwRSwrQkFBK0U7SUFDN0UseUZBQWtFO0lBQ3BFLGlCQUFNOzs7O0lBRFcsZUFBa0M7SUFBbEMsdUNBQWtDOzs7SUFZbkQsbUNBWWU7Ozs7SUFUYiw0Q0FBK0Isa0NBQUEsa0NBQUE7SUFJL0Isb0RBQTJCO0lBQzNCLDBDQUF3Qiw2QkFBQSw2QkFBQTs7OztJQWUxQix3Q0FhQztJQURDLDJWQUFrQztJQUVwQyxpQkFBZTs7Ozs7OztJQVhiLDRDQUErQixrQ0FBQSxrQ0FBQTtJQU8vQiwrREFBa0M7SUFIbEMsMENBQXdCLG1D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bXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9HcmlkUm93QWN0aW9ucyB9IGZyb20gJy4vcG8tZ3JpZC1yb3ctYWN0aW9ucy5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiA+IENvbXBvbmVudGUgZW0gZGVzZW52b2x2aW1lbnRvLCBwb2RlbmRvIGhhdmVyIEJSRUFLSU5HIENIQU5HRVMgbmFzIHByw7N4aW1hcyB2ZXJzw7Vlcy5cclxuICpcclxuICogQ29tcG9uZW50ZSBncmlkLlxyXG4gKlxyXG4gKiBBw6fDtWVzIC8gYXRhbGhvczpcclxuICpcclxuICogLSBBUlJPVy1VUDogTmF2ZWdhIHBhcmEgY2VsdWxhIHN1cGVyaW9yIC8gTmEgdWx0aW1hIGxpbmhhIGFkaWNpb25hIHVtYSBsaW5oYSBlbSBicmFuY28gbm8gZ3JpZDtcclxuICogLSBBUlJPVy1ET1dOOiBOYXZlZ2EgcGFyYSBjZWx1bGEgaW5mZXJpb3I7XHJcbiAqIC0gQVJST1ctUklHSFQ6IE5hdmVnYSBwYXJhIGNlbHVsYSBkaXJlaXRhO1xyXG4gKiAtIEFSUk9XLUxFRlQ6IE5hdmVnYSBwYXJhIGNlbHVsYSBlc3F1ZXJkYTtcclxuICogLSBUQUI6IE5hdmVnYSBwYXJhIHByw7N4aW1hIGNlbHVsYTtcclxuICogLSBTSElGVCtUQUI6IE5hdmVnYSBwYXJhIGNlbHVsYSBhbnRlcmlvcjtcclxuICogLSBDVFJMK0RFTDogUmVtb3ZlIGxpbmhhO1xyXG4gKiAtIERFTC9CQUNLU1BBQ0U6IExpbXBhIGNlbHVsYTtcclxuICogLSBFTlRFUjogRWRpdGEgbGluaGEgY29tIHZhbG9yIGF0dWFsL0NvbmZpcm1hIGVkacOnw6NvIGRhIGNlbHVsYTtcclxuICogLSBET1VCTEUtQ0xJQ0s6IEVkaXRhIGxpbmhhIGNvbSB2YWxvciBhdHVhbDtcclxuICogLSBFU0M6IENhbmNlbGEgZWRpw6fDo28gZGEgY2VsdWxhIC8gQ2FuY2VsYSBpbnNlcsOnw6NvIGRlIGxpbmhhcyBlbSBicmFuY287XHJcbiAqIC0gQS4uWi8wLi45OiBJbmljaWEgZWRpw6fDo28gY29tIHZhbG9yIGVtIGJyYW5jby5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWdyaWQtYmFzaWNcIiB0aXRsZT1cIlBPIEdyaWQgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZ3JpZC1iYXNpYy9zYW1wbGUtcG8tZ3JpZC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWdyaWQtYmFzaWMvc2FtcGxlLXBvLWdyaWQtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1ncmlkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZ3JpZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJsZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYmxlV3JhcHBlcjogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBw6fDtWVzIGRpc3BhcmFkYXMgcXVhbmRvIHVtYSBsaW5oYSBkbyBncmlkIMOpIG1hbmlwdWxhZGEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJvdy1hY3Rpb25zJykgcm93QWN0aW9uczogUG9HcmlkUm93QWN0aW9ucyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBMaXN0YSBjb20gb3MgZGFkb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBncmlkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kYXRhJykgZGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICBsYXN0Q2VsbDogc3RyaW5nID0gJzAtMCc7XHJcbiAgbGFzdFJvdzogbnVtYmVyID0gMDtcclxuICBsYXN0Q29sdW1uOiBudW1iZXIgPSAwO1xyXG4gIGN1cnJlbmN5Q2VsbDogc3RyaW5nID0gJzAtMCc7XHJcbiAgY3VycmVuY3lSb3c6IG51bWJlciA9IDA7XHJcbiAgY3VycmVuY3lDb2x1bW46IG51bWJlciA9IDA7XHJcbiAgY3VycmVuY3lPYmo6IGFueTtcclxuXHJcbiAgbG9nZ2VyID0gZmFsc2U7XHJcblxyXG4gIHdpZHRoID0gJzEwMCUnO1xyXG4gIHdpZHBvcmVlemUgPSAwO1xyXG4gIHdpZHRoQWN0aW9ucyA9IDA7XHJcblxyXG4gIHByaXZhdGUgcmVzaXplTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0UmVzaXplO1xyXG5cclxuICBwcml2YXRlIF9jb2x1bW5zID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbHVuYXMgZXhpYmlkYXMgbm8gZ3JpZC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtY29sdW1ucycpIHNldCBjb2x1bW5zKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLl9jb2x1bW5zID0gWy4uLnZhbHVlXTtcclxuXHJcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgY29sdW1uLmxhYmVsID0gY29sdW1uLmxhYmVsIHx8IGNvbHVtbi5wcm9wZXJ0eTtcclxuXHJcbiAgICAgIGlmIChjb2x1bW4uZnJlZXplID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29sdW1uLmNzc1dpZHRoID0gYCR7Y29sdW1uLndpZHRoIHx8IDEwMH1weGA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uLmNzc1dpZHRoID0gY29sdW1uLndpZHRoID8gYCR7Y29sdW1uLndpZHRofXB4YCA6ICcxMDAlJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldCBjb2x1bW5zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4uZnJlZXplICE9PSB0cnVlICYmIGNvbHVtbi5hY3Rpb24gIT09IHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZGVib3VuY2VSZXNpemUoKTtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5kZWJvdW5jZVJlc2l6ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnJlc2l6ZUxpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMucmVzaXplTGlzdGVuZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmcmVlemVDb2x1bW5zKCkge1xyXG4gICAgY29uc3QgZnJlZXplQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4uZnJlZXplID09PSB0cnVlKTtcclxuXHJcbiAgICB0aGlzLndpZHBvcmVlemUgPSBmcmVlemVDb2x1bW5zLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gcHJldiArIChjdXJyZW50LndpZHRoIHx8IDEwMCksIDApO1xyXG5cclxuICAgIHJldHVybiBmcmVlemVDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGlvbkNvbHVtbnMoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25zQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4uYWN0aW9uID09PSB0cnVlKTtcclxuXHJcbiAgICB0aGlzLndpZHRoQWN0aW9ucyA9IGFjdGlvbnNDb2x1bW5zLmxlbmd0aCA+IDAgPyA1NiA6IDA7XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbnNDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsUm93KGV2ZW50OiBhbnksIHJvdzogYW55KSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RXZlbnRQYXRoKGV2ZW50KS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCk7XHJcblxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3hdID0gZWwuaWQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0VtcHR5Um93KHgpKSB7XHJcbiAgICAgIGlmICghdGhpcy5yZW1vdmVSb3coZXZlbnQsIHJvdykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3VycmVuY3lPYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGFbdGhpcy5jdXJyZW5jeVJvdyAtIDFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVsreCAtIDFdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jdXJyZW5jeU9iaik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWxlY3RDZWxsKHRoaXMuY3VycmVuY3lSb3csIHRoaXMuY3VycmVuY3lDb2x1bW4pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVJvdyhldmVudDogYW55LCByb3c6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMucm93QWN0aW9ucy5iZWZvcmVSZW1vdmUgJiYgIXRoaXMucm93QWN0aW9ucy5iZWZvcmVSZW1vdmUoT2JqZWN0LmFzc2lnbih7fSwgcm93KSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2Yocm93KTtcclxuXHJcbiAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PT0gMCB8fCBpbmRleCA9PT0gdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdENlbGwodGhpcy5jdXJyZW5jeVJvdyAtIDEsIHRoaXMuY3VycmVuY3lDb2x1bW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RDZWxsKHRoaXMuY3VycmVuY3lSb3csIHRoaXMuY3VycmVuY3lDb2x1bW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdGFibGVLZXlkb3duKGV2ZW50OiBhbnksIGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICBsZXQgW3JvdywgY29sXSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdCgnLScpO1xyXG4gICAgcm93ID0gK3JvdztcclxuICAgIGNvbCA9ICtjb2w7XHJcbiAgICBsZXQgcHJvdyA9ICtyb3c7XHJcbiAgICBsZXQgcGNvbCA9ICtjb2w7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgIGlmIChyb3cgPD0gdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHByb3crKztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJvdyA9PT0gdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChyb3cgPT09IDAgfHwgIXRoaXMuaXNFbXB0eVJvdyhyb3cpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zYXZlUm93KHJvdykpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmluc2VydFJvdygpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb3ctLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndXAnICYmIHJvdyA+IDApIHtcclxuICAgICAgcHJvdy0tO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBjb2wgPiAwKSB7XHJcbiAgICAgIHBjb2wtLTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnICYmIGNvbCA8IHRoaXMuX2NvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBwY29sKys7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgIGlmIChjb2wgPCB0aGlzLl9jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBwY29sKys7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChyb3cgPCB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgcGNvbCA9IDA7XHJcbiAgICAgICAgcHJvdysrO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncHJpb3InKSB7XHJcbiAgICAgIGlmIChjb2wgPiAwKSB7XHJcbiAgICAgICAgcGNvbC0tO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocm93ID4gMCkge1xyXG4gICAgICAgIHBjb2wgPSB0aGlzLl9jb2x1bW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgcHJvdy0tO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW5jeUNlbGwgPT09IGAke3Byb3d9LSR7cGNvbH1gKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvdyAhPT0gdGhpcy5jdXJyZW5jeVJvdyAmJiByb3cgPiAwICYmIHRoaXMuZGF0YS5sZW5ndGggPj0gcm93KSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0VtcHR5Um93KHJvdykpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2F2ZVJvdyhyb3cpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVSb3coZXZlbnQsIHJvdykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW5jeVJvdyAhPT0gcHJvdykge1xyXG4gICAgICB0aGlzLmN1cnJlbmN5T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhW3Byb3cgLSAxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0Q2VsbCA9IGV2ZW50LnRhcmdldC5pZDtcclxuICAgIHRoaXMubGFzdFJvdyA9IHJvdztcclxuICAgIHRoaXMubGFzdENvbHVtbiA9IGNvbDtcclxuXHJcbiAgICB0aGlzLnNlbGVjdENlbGwocHJvdywgcGNvbCk7XHJcbiAgfVxyXG5cclxuICB0YWJsZUNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFdmVudFBhdGgoZXZlbnQpLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkKTtcclxuXHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q2VsbCh0aGlzLmN1cnJlbmN5Um93LCB0aGlzLmN1cnJlbmN5Q29sdW1uKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbmN5Q2VsbCA9PT0gZWwuaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBlbC5pZC5zcGxpdCgnLScpO1xyXG4gICAgY29uc3QgcHJvdyA9ICtyb3c7XHJcbiAgICBjb25zdCBwY29sID0gK2NvbDtcclxuXHJcbiAgICBpZiAocHJvdyAhPT0gdGhpcy5jdXJyZW5jeVJvdykge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW5jeVJvdyA+IDApIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbXB0eVJvdyh0aGlzLmN1cnJlbmN5Um93KSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLnNhdmVSb3codGhpcy5jdXJyZW5jeVJvdykpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RDZWxsKHRoaXMuY3VycmVuY3lSb3csIHRoaXMuY3VycmVuY3lDb2x1bW4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghdGhpcy5yZW1vdmVSb3coZXZlbnQsIHJvdykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW5jeU9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YVtwcm93IC0gMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdENlbGwgPSB0aGlzLmN1cnJlbmN5Q2VsbDtcclxuICAgIHRoaXMubGFzdFJvdyA9IHRoaXMuY3VycmVuY3lSb3c7XHJcbiAgICB0aGlzLmxhc3RDb2x1bW4gPSB0aGlzLmN1cnJlbmN5Q29sdW1uO1xyXG5cclxuICAgIHRoaXMuY3VycmVuY3lDZWxsID0gZWwuaWQ7XHJcbiAgICB0aGlzLmN1cnJlbmN5Um93ID0gcHJvdztcclxuICAgIHRoaXMuY3VycmVuY3lDb2x1bW4gPSBwY29sO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVJvdyhyb3c6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgb2JqID0gdGhpcy5kYXRhW3JvdyAtIDFdO1xyXG5cclxuICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5zb21lKHByb3AgPT4gb2JqW3Byb3BdICE9PSB0aGlzLmN1cnJlbmN5T2JqW3Byb3BdKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yb3dBY3Rpb25zLmJlZm9yZVNhdmUgJiYgIXRoaXMucm93QWN0aW9ucy5iZWZvcmVTYXZlKG9iaiwgdGhpcy5jdXJyZW5jeU9iaikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4ucmVxdWlyZWQgPT09IHRydWUgJiYgIW9ialtjb2x1bW4ucHJvcGVydHldKSB7XHJcbiAgICAgICAgcmVxdWlyZWRzLnB1c2goY29sdW1uLnByb3BlcnR5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcXVpcmVkcy5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRSb3coKSB7XHJcbiAgICBjb25zdCBvYmogPSB7fTtcclxuXHJcbiAgICBpZiAodGhpcy5yb3dBY3Rpb25zLmJlZm9yZUluc2VydCAmJiAhdGhpcy5yb3dBY3Rpb25zLmJlZm9yZUluc2VydChvYmopKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRhdGEucHVzaChvYmopO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5Um93KHJvdzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBvYmogPSB0aGlzLmRhdGFbcm93IC0gMV07XHJcblxyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgLy8gdGl0bGVcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGxlZCA9IE9iamVjdC5rZXlzKG9iaikuc29tZShwcm9wZXJ0eSA9PiBvYmpbcHJvcGVydHldKTtcclxuXHJcbiAgICByZXR1cm4gIWZpbGxlZDtcclxuICB9XHJcblxyXG4gIHNlbGVjdENlbGwocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBuZXh0Q2VsbCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9JyR7cm93fS0ke2NvbH0nXWApO1xyXG5cclxuICAgIGlmIChuZXh0Q2VsbCkge1xyXG4gICAgICB0aGlzLmN1cnJlbmN5Q2VsbCA9IGAke3Jvd30tJHtjb2x9YDtcclxuICAgICAgdGhpcy5jdXJyZW5jeVJvdyA9IHJvdztcclxuICAgICAgdGhpcy5jdXJyZW5jeUNvbHVtbiA9IGNvbDtcclxuICAgICAgbmV4dENlbGwuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVib3VuY2VSZXNpemUoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0UmVzaXplKTtcclxuXHJcbiAgICB0aGlzLnRpbWVvdXRSZXNpemUgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3Qgd2lkdGhUYWJsZVdyYXBwZXIgPSB0aGlzLnRhYmxlV3JhcHBlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICB0aGlzLndpZHRoID0gYCR7d2lkdGhUYWJsZVdyYXBwZXIgLSAodGhpcy53aWRwb3JlZXplICsgOCkgLSB0aGlzLndpZHRoQWN0aW9uc31weGA7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFdmVudFBhdGgoZXZlbnQpIHtcclxuICAgIC8vIGZpcmVmb3ggZG8gbm90IGhhdmUgc3VwcG9ydCB0byBldmVudC5wYXRoXHJcbiAgICByZXR1cm4gZXZlbnQucGF0aCB8fCBldmVudC5jb21wb3NlZFBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWdyaWQtd3JhcHBlciBwby1ncmlkLXJvdy13cmFwcGVyXCIgI3dyYXBwZXI+XHJcbiAgPGRpdiAqbmdJZj1cImxvZ2dlclwiPlxyXG4gICAgbGFzdENlbGw6IHt7IGxhc3RDZWxsIH19IHwgY3VycmVuY3lDZWxsOiB7eyBjdXJyZW5jeUNlbGwgfX0gPGJyIC8+XHJcbiAgICBsYXN0Um93OiB7eyBsYXN0Um93IH19IHwgY3VycmVuY3lSb3c6IHt7IGN1cnJlbmN5Um93IH19IDxiciAvPlxyXG4gICAgbGFzdENvbHVtbjoge3sgbGFzdENvbHVtbiB9fSB8IGN1cnJlbmN5Q29sdW1uOiB7eyBjdXJyZW5jeUNvbHVtbiB9fSA8YnIgLz5cclxuICAgIDxociAvPlxyXG4gICAgY3VycmVuY3lPYmo6IHt7IGN1cnJlbmN5T2JqIHwganNvbiB9fVxyXG4gICAgPGhyIC8+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1ncmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tZ3JpZC1ib2R5XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInBvLWdyaWQtcm93XCJcclxuICAgICAgICAjdGFibGVcclxuICAgICAgICAoa2V5ZG93bi5hcnJvd3VwKT1cInRhYmxlS2V5ZG93bigkZXZlbnQsICd1cCcpXCJcclxuICAgICAgICAoa2V5ZG93bi5hcnJvd2Rvd24pPVwidGFibGVLZXlkb3duKCRldmVudCwgJ2Rvd24nKVwiXHJcbiAgICAgICAgKGtleWRvd24uYXJyb3dsZWZ0KT1cInRhYmxlS2V5ZG93bigkZXZlbnQsICdsZWZ0JylcIlxyXG4gICAgICAgIChrZXlkb3duLmFycm93cmlnaHQpPVwidGFibGVLZXlkb3duKCRldmVudCwgJ3JpZ2h0JylcIlxyXG4gICAgICAgIChrZXlkb3duLnRhYik9XCJ0YWJsZUtleWRvd24oJGV2ZW50LCAnbmV4dCcpXCJcclxuICAgICAgICAoa2V5ZG93bi5zaGlmdC50YWIpPVwidGFibGVLZXlkb3duKCRldmVudCwgJ3ByaW9yJylcIlxyXG4gICAgICAgIChjbGljayk9XCJ0YWJsZUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIChjb250ZXh0bWVudSk9XCJ0YWJsZUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIChkYmxjbGljayk9XCJ0YWJsZUNsaWNrKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLWdyaWQtY2VsbCBwby1ncmlkLWNlbGwtZnJlZXplXCIgKm5nSWY9XCJmcmVlemVDb2x1bW5zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkaXZGcmVlemVDb2x1bW5zXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwicG8tZ3JpZC1jZWxsIHBvLWdyaWQtY2VsbC1ub3JtYWxcIlxyXG4gICAgICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGhdPVwid2lkdGhcIlxyXG4gICAgICAgICAgW3N0eWxlLm1pbi13aWR0aF09XCJ3aWR0aFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRpdkNvbHVtbnNcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLWdyaWQtY2VsbCBwby1ncmlkLWNlbGwtYWN0aW9uXCIgKm5nSWY9XCJhY3Rpb25Db2x1bW5zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkaXZBY3Rpb25Db2x1bW5zXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBDb2x1bmEgY29tIGFzIGNvbHVuYXMgY29uZ2VsYWRhcyAtLT5cclxuPG5nLXRlbXBsYXRlICNkaXZGcmVlemVDb2x1bW5zPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1ncmlkIHBvLWdyaWQtZnJlZXplXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tZ3JpZC1oZWFkZXItZ3JvdXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLWdyaWQtcm93XCI+XHJcbiAgICAgICAgPHBvLWdyaWQtaGVhZFxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBmcmVlemVDb2x1bW5zOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgIGNsYXNzPVwicG8tZ3JpZC10aXRsZVwiXHJcbiAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLmNzc1dpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGhdPVwiY29sdW1uLmNzc1dpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5taW4td2lkdGhdPVwiY29sdW1uLmNzc1dpZHRoXCJcclxuICAgICAgICAgIHAtZnJlZXplPVwidHJ1ZVwiXHJcbiAgICAgICAgICBwLXBvc2l0aW9uPVwie3sgJzAtJyArIGkgfX1cIlxyXG4gICAgICAgICAgW3Atd2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtwLWFsaWduXT1cImNvbHVtbi5hbGlnblwiXHJcbiAgICAgICAgICBbcC10aXRsZV09XCJjb2x1bW4ubGFiZWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3BvLWdyaWQtaGVhZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tZ3JpZC1ib2R5XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInBvLWdyaWQtcm93XCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgcm93IG9mIGRhdGE7IGluZGV4IGFzIGpcIlxyXG4gICAgICAgIChrZXlkb3duLmNvbnRyb2wuZGVsZXRlKT1cInJlbW92ZVJvdygkZXZlbnQsIHJvdylcIlxyXG4gICAgICAgIChrZXlkb3duLmVzYyk9XCJjYW5jZWxSb3coJGV2ZW50LCByb3cpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwby1ncmlkLWNlbGxcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZnJlZXplQ29sdW1uczsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLWdyaWQtY2VsbFwiXHJcbiAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLmNzc1dpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGhdPVwiY29sdW1uLmNzc1dpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5taW4td2lkdGhdPVwiY29sdW1uLmNzc1dpZHRoXCJcclxuICAgICAgICAgIHAtZnJlZXplPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbcC1hbGlnbl09XCJjb2x1bW4uYWxpZ25cIlxyXG4gICAgICAgICAgW3AtcmVhZG9ubHldPVwiY29sdW1uLnJlYWRvbmx5XCJcclxuICAgICAgICAgIFtwLXJlcXVpcmVkXT1cImNvbHVtbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICBwLXBvc2l0aW9uPVwie3sgaiArIDEgKyAnLScgKyBpIH19XCJcclxuICAgICAgICAgIFtwLXdpZHRoXT1cImNvbHVtbi53aWR0aFwiXHJcbiAgICAgICAgICBbKHAtdmFsdWUpXT1cInJvd1tjb2x1bW4ucHJvcGVydHldXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1ncmlkLWNlbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwhLS0gRklNOiBDb2x1bmEgY29tIGFzIGNvbHVuYXMgY29uZ2VsYWRhcyAtLT5cclxuXHJcbjwhLS0gQ29sdW5hIGNvbSBhcyBjb2x1bmFzIG5vcm5haXMgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjZGl2Q29sdW1ucz5cclxuICA8ZGl2IGNsYXNzPVwicG8tZ3JpZCBwby1ncmlkLW5vcm1hbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWdyaWQtaGVhZGVyLWdyb3VwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1ncmlkLXJvd1wiPlxyXG4gICAgICAgIDxwby1ncmlkLWhlYWRcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uczsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLWdyaWQtdGl0bGVcIlxyXG4gICAgICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi5jc3NXaWR0aFwiXHJcbiAgICAgICAgICBbc3R5bGUubWF4LXdpZHRoXT1cImNvbHVtbi5jc3NXaWR0aFwiXHJcbiAgICAgICAgICBbc3R5bGUubWluLXdpZHRoXT1cImNvbHVtbi5jc3NXaWR0aFwiXHJcbiAgICAgICAgICBbcC1hbGlnbl09XCJjb2x1bW4uYWxpZ25cIlxyXG4gICAgICAgICAgcC1wb3NpdGlvbj1cInt7ICcwLScgKyAoaSArIGZyZWV6ZUNvbHVtbnMubGVuZ3RoKSB9fVwiXHJcbiAgICAgICAgICBbcC10aXRsZV09XCJjb2x1bW4ubGFiZWxcIlxyXG4gICAgICAgICAgW3Atd2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1ncmlkLWhlYWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWdyaWQtYm9keVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJwby1ncmlkLXJvd1wiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHJvdyBvZiBkYXRhOyBpbmRleCBhcyBqXCJcclxuICAgICAgICAoa2V5ZG93bi5jb250cm9sLmRlbGV0ZSk9XCJyZW1vdmVSb3coJGV2ZW50LCByb3cpXCJcclxuICAgICAgICAoa2V5ZG93bi5lc2MpPVwiY2FuY2VsUm93KCRldmVudCwgcm93KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8cG8tZ3JpZC1jZWxsXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnM7IGluZGV4IGFzIGlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJwby1ncmlkLWNlbGxcIlxyXG4gICAgICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi5jc3NXaWR0aFwiXHJcbiAgICAgICAgICBbc3R5bGUubWF4LXdpZHRoXT1cImNvbHVtbi5jc3NXaWR0aFwiXHJcbiAgICAgICAgICBbc3R5bGUubWluLXdpZHRoXT1cImNvbHVtbi5jc3NXaWR0aFwiXHJcbiAgICAgICAgICBbcC1hbGlnbl09XCJjb2x1bW4uYWxpZ25cIlxyXG4gICAgICAgICAgW3AtcmVhZG9ubHldPVwiY29sdW1uLnJlYWRvbmx5XCJcclxuICAgICAgICAgIFtwLXJlcXVpcmVkXT1cImNvbHVtbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICBwLXBvc2l0aW9uPVwie3sgaiArIDEgKyAnLScgKyAoaSArIGZyZWV6ZUNvbHVtbnMubGVuZ3RoKSB9fVwiXHJcbiAgICAgICAgICBbKHAtdmFsdWUpXT1cInJvd1tjb2x1bW4ucHJvcGVydHldXCJcclxuICAgICAgICAgIFtwLXdpZHRoXT1cImNvbHVtbi53aWR0aFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvcG8tZ3JpZC1jZWxsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48IS0tIEZJTTogQ29sdW5hIGNvbSBhcyBjb2x1bmFzIG5vcm5haXMgLS0+XHJcblxyXG48IS0tIENvbHVuYSBjb20gYXMgY29sdW5hcyBkZSBhw6fDo28gLS0+XHJcbjxuZy10ZW1wbGF0ZSAjZGl2QWN0aW9uQ29sdW1ucz5cclxuICA8ZGl2IGNsYXNzPVwicG8tZ3JpZCBwby1ncmlkLWFjdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1ncmlkLWhlYWRlci1ncm91cFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tZ3JpZC1yb3dcIj5cclxuICAgICAgICA8cG8tZ3JpZC1oZWFkXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGFjdGlvbkNvbHVtbnM7IGluZGV4IGFzIGlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJwby1ncmlkLXRpdGxlXCJcclxuICAgICAgICAgIHAtcG9zaXRpb249XCJ7eyAnMC0nICsgKGkgKyBmcmVlemVDb2x1bW5zLmxlbmd0aCArIGNvbHVtbnMubGVuZ3RoKSB9fVwiXHJcbiAgICAgICAgICBbcC10aXRsZV09XCJjb2x1bW4ubGFiZWxcIlxyXG4gICAgICAgICAgW3AtYWxpZ25dPVwiY29sdW1uLmFsaWduXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1ncmlkLWhlYWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWdyaWQtYm9keVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJwby1ncmlkLXJvd1wiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHJvdyBvZiBkYXRhOyBpbmRleCBhcyBqXCJcclxuICAgICAgICAoa2V5ZG93bi5jb250cm9sLmRlbGV0ZSk9XCJyZW1vdmVSb3coJGV2ZW50LCByb3cpXCJcclxuICAgICAgICAoa2V5ZG93bi5lc2MpPVwiY2FuY2VsUm93KCRldmVudCwgcm93KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8cG8tZ3JpZC1jZWxsLWFjdGlvblxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBhY3Rpb25Db2x1bW5zOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgIGNsYXNzPVwicG8tZ3JpZC1jZWxsXCJcclxuICAgICAgICAgIHAtcG9zaXRpb249XCJ7eyBqICsgMSArICctJyArIChpICsgZnJlZXplQ29sdW1ucy5sZW5ndGggKyBjb2x1bW5zLmxlbmd0aCkgfX1cIlxyXG4gICAgICAgICAgW3AtdmFsdWVdPVwicm93W2NvbHVtbi5wcm9wZXJ0eV1cIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3BvLWdyaWQtY2VsbC1hY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwhLS0gRklNOiBDb2x1bmEgY29tIGFzIGNvbHVuYXMgZGUgYcOnw6NvIC0tPlxyXG4iXX0=