import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { capitalizeFirstLetter, convertToInt } from '../../../utils/util';
import { PoPopoverComponent } from '../../po-popover/po-popover.component';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../po-button/po-button.component";
import * as i5 from "../../po-popover/po-popover.component";
import * as i6 from "../po-table-list-manager/po-table-list-manager.component";
function PoTableColumnManagerComponent_po_popover_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-popover", 1, 2);
    i0.ɵɵlistener("p-close", function PoTableColumnManagerComponent_po_popover_0_Template_po_popover_p_close_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkChanges([], true)); });
    i0.ɵɵelementStart(2, "div", 3)(3, "div", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5)(6, "button", 6);
    i0.ɵɵlistener("click", function PoTableColumnManagerComponent_po_popover_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(1); return i0.ɵɵresetView(_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 7)(8, "po-table-list-manager", 8);
    i0.ɵɵlistener("ngModelChange", function PoTableColumnManagerComponent_po_popover_0_Template_po_table_list_manager_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.visibleColumns = $event); })("p-change", function PoTableColumnManagerComponent_po_popover_0_Template_po_table_list_manager_p_change_8_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.checkChanges($event, false)); })("p-change-position", function PoTableColumnManagerComponent_po_popover_0_Template_po_table_list_manager_p_change_position_8_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.changePosition($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 9)(10, "po-button", 10);
    i0.ɵɵlistener("p-click", function PoTableColumnManagerComponent_po_popover_0_Template_po_button_p_click_10_listener() { i0.ɵɵrestoreView(_r3); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.restore()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-target", ctx_r0.target);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.literals.columnsManager);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.visibleColumns)("p-options", ctx_r0.columnsOptions)("p-columns-manager", ctx_r0.columns);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-label", ctx_r0.literals.restoreDefault);
} }
const PoTableColumnManagerMaxColumnsDefault = 99999;
export const poTableColumnManagerLiteralsDefault = {
    en: {
        columnsManager: 'Columns manager',
        restoreDefault: 'Restore default'
    },
    es: {
        columnsManager: 'Gerente de columna',
        restoreDefault: 'Restaurar por defecto'
    },
    pt: {
        columnsManager: 'Gerenciador de colunas',
        restoreDefault: 'Restaurar padrão'
    },
    ru: {
        columnsManager: 'менеджер колонок',
        restoreDefault: 'сброс настроек'
    }
};
export class PoTableColumnManagerComponent {
    constructor(renderer, languageService) {
        this.renderer = renderer;
        this.columns = [];
        this.lastVisibleColumnsSelected = [];
        this.visibleColumnsChange = new EventEmitter();
        // Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
        // O po-table envia como parâmetro um array de string com as colunas visíveis atualizadas. Por exemplo: ["idCard", "name", "hireStatus", "age"].
        this.changeVisibleColumns = new EventEmitter();
        this.initialColumns = new EventEmitter();
        this.columnsOptions = [];
        this.visibleColumns = [];
        this._maxColumns = PoTableColumnManagerMaxColumnsDefault;
        this.defaultColumns = [];
        this.minColumns = 1;
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poTableColumnManagerLiteralsDefault[poLocaleDefault],
            ...poTableColumnManagerLiteralsDefault[language]
        };
    }
    set maxColumns(value) {
        this._maxColumns = convertToInt(value, PoTableColumnManagerMaxColumnsDefault);
    }
    get maxColumns() {
        return this._maxColumns;
    }
    ngOnChanges(changes) {
        const { columns, maxColumns, target } = changes;
        if (target && target.firstChange) {
            this.initializeListeners();
        }
        if (columns) {
            this.onChangeColumns(columns);
        }
        if (maxColumns) {
            this.updateValues(this.columns);
        }
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    // aqui chegam os eventos do checkbox e do close do popover que também é disparado no resize
    checkChanges(event = [], emit = false) {
        this.verifyToEmitChange(event);
        if (emit) {
            // controla emissões para o dev
            this.verifyToEmitVisibleColumns();
        }
    }
    restore() {
        this.restoreDefaultEvent = true;
        const defaultColumns = this.getVisibleColumns(this.defaultColumns);
        this.initialColumns.emit(this.getVisibleColumns(this.colunsDefault));
        this.checkChanges(defaultColumns, this.restoreDefaultEvent);
    }
    changePosition({ option, direction }) {
        const indexColumn = this.columns.findIndex(el => el.property === option.value);
        const newColumn = [...this.columns];
        this.changePositionColumn(newColumn, indexColumn, direction);
        this.columns = newColumn;
        this.visibleColumnsChange.emit(this.columns);
    }
    changePositionColumn(array, index, direction) {
        if (direction === 'up') {
            array.splice(index, 0, array.splice(index - 1, 1)[0]);
        }
        if (direction === 'down') {
            array.splice(index, 0, array.splice(index + 1, 1)[0]);
        }
    }
    verifyToEmitChange(event) {
        const newColumns = [...event];
        if (newColumns.length >= 1 && this.allowsChangeVisibleColumns()) {
            this.emitChangesToSelectedColumns(newColumns);
        }
        // Desabilita ultimo checkbox ativo
        if (newColumns.length === 1) {
            const columnsOptions = this.mapTableColumnsToCheckboxOptions(this.columnUpdate);
            this.columnsOptions = this.disabledLastColumn(columnsOptions);
        }
    }
    emitChangesToSelectedColumns(newColumns) {
        this.visibleColumns = [...newColumns];
        const visibleTableColumns = this.getVisibleTableColumns(this.visibleColumns);
        // emite alteração nas colunas selecionadas, porém não emite para o dev.
        this.visibleColumnsChange.emit(visibleTableColumns);
    }
    allowsChangeVisibleColumns() {
        const visibleTableColumns = this.getVisibleTableColumns(this.visibleColumns);
        return this.stringify(visibleTableColumns) !== this.stringify(this.columns);
    }
    verifyToEmitVisibleColumns() {
        if (this.restoreDefaultEvent) {
            // veio do restore default
            this.verifyRestoreValues();
        }
        else {
            // foi disparado no close popover;
            this.verifyOnClose();
        }
    }
    verifyRestoreValues() {
        const defaultColumns = [...this.defaultColumns];
        const defaultVisibleColumns = this.getVisibleColumns(defaultColumns);
        if (this.allowsChangeSelectedColumns(defaultVisibleColumns)) {
            this.visibleColumnsChange.emit(this.defaultColumns);
        }
        this.restoreDefaultEvent = false;
    }
    allowsChangeSelectedColumns(defaultVisibleColumns) {
        const visibleColumns = this.getVisibleColumns(this.columns);
        return !this.isEqualArrays(defaultVisibleColumns, visibleColumns);
    }
    verifyOnClose() {
        if (this.allowsEmission()) {
            this.emitVisibleColumns();
        }
    }
    emitVisibleColumns() {
        this.lastEmittedValue = [...this.visibleColumns];
        this.changeVisibleColumns.emit(this.visibleColumns);
    }
    allowsEmission() {
        const updatedVisibleColumns = this.visibleColumns ? [...this.visibleColumns] : [];
        const lastEmittedValue = this.lastEmittedValue ? [...this.lastEmittedValue] : [];
        const lastVisibleColumnsSelected = this.lastVisibleColumnsSelected ? [...this.lastVisibleColumnsSelected] : [];
        const lastVisibleColumns = this.getVisibleColumns(lastVisibleColumnsSelected);
        return (this.isUpdate(updatedVisibleColumns, lastEmittedValue) ||
            this.isFirstTime(updatedVisibleColumns, lastVisibleColumns));
    }
    isFirstTime(updatedVisibleColumns, lastVisibleColumns) {
        return !this.lastEmittedValue && !this.isEqualArrays(updatedVisibleColumns, lastVisibleColumns);
    }
    isUpdate(updatedVisibleColumns, lastEmittedValue) {
        return this.lastEmittedValue && !this.isEqualArrays(updatedVisibleColumns, lastEmittedValue);
    }
    isEqualArrays(first, second) {
        const one = first ? [...first] : [];
        const two = second ? [...second] : [];
        const firstSort = one.slice();
        const secondSort = two.slice();
        const firstString = JSON.stringify(firstSort);
        const secondString = JSON.stringify(secondSort);
        return firstString === secondString;
    }
    // desabilitará as colunas, que não estiverem selecionadas, após exeder o numero maximo de colunas.
    disableColumnsOptions(columns = []) {
        return columns.map(column => ({
            ...column,
            disabled: this.isDisableColumn(column.value)
        }));
    }
    getColumnTitleLabel(column) {
        return column.label || capitalizeFirstLetter(column.property);
    }
    /** Retorna um Array de column.property das colunas que são visiveis. */
    getVisibleColumns(columns) {
        let visibleColumns = [];
        columns.forEach(column => {
            if (this.isVisibleColumn(column, visibleColumns)) {
                visibleColumns = [...visibleColumns, column.property];
            }
        });
        return visibleColumns;
    }
    isVisibleColumn(column, visibleColumns) {
        return column.visible !== false && visibleColumns.length < this.maxColumns && column.type !== 'detail';
    }
    /** Retorna um Array PoTableColumn a partir das colunas visiveis no gerenciador de colunas. */
    getVisibleTableColumns(visibleColumns) {
        const columns = this.columns ? [...this.columns] : [];
        return columns.map(column => ({
            ...column,
            visible: visibleColumns.includes(column.property) || column.type === 'detail'
        }));
    }
    initializeListeners() {
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            if (this.popover && !this.popover.isHidden) {
                this.popover.close();
            }
        });
    }
    isDisableColumn(property) {
        return this.visibleColumns.length >= this.maxColumns ? !this.visibleColumns.includes(property) : false;
    }
    mapTableColumnsToCheckboxOptions(columns = []) {
        const tableColumns = [...columns];
        const columnsOptions = [];
        tableColumns.forEach(column => {
            if (column.type !== 'detail') {
                columnsOptions.push({
                    value: column.property,
                    label: this.getColumnTitleLabel(column),
                    disabled: this.isDisableColumn(column.property),
                    visible: column.visible
                });
            }
        });
        return columnsOptions;
    }
    disabledLastColumn(columns) {
        return columns.map(column => ({
            ...column,
            disabled: column.type !== 'detail' && column.visible ? true : false
        }));
    }
    onChangeColumns(columns) {
        const { currentValue = [], previousValue = [] } = columns;
        this.columnUpdate = columns.currentValue;
        // atualizara o defaultColumns, quando for a primeira vez ou quando o defaultColumns for diferente do currentValue
        if (!this.lastVisibleColumnsSelected && this.stringify(this.defaultColumns) !== this.stringify(currentValue)) {
            this.defaultColumns = [...currentValue];
        }
        // verifica se o valor anterior é diferente do atual para atualizar as columnsOptions apenas quando for necessario
        if (this.stringify(previousValue) !== this.stringify(currentValue)) {
            this.updateValues(currentValue);
        }
    }
    updateValues(currentValue) {
        const visibleColumns = this.getVisibleColumns(currentValue);
        this.visibleColumns = [...visibleColumns];
        const columnsOptions = this.mapTableColumnsToCheckboxOptions(currentValue);
        this.columnsOptions = this.disableColumnsOptions(columnsOptions);
        this.checkChanges(visibleColumns, false);
    }
    removeListeners() {
        if (this.resizeListener) {
            this.resizeListener();
        }
    }
    stringify(columns) {
        // não faz o stringify da propriedade icon e searchService, pois pode conter objeto complexo e disparar um erro.
        return JSON.stringify(columns, (key, value) => {
            if (key !== 'icon' && key !== 'searchService') {
                return value;
            }
        });
    }
}
PoTableColumnManagerComponent.ɵfac = function PoTableColumnManagerComponent_Factory(t) { return new (t || PoTableColumnManagerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoTableColumnManagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableColumnManagerComponent, selectors: [["po-table-column-manager"]], viewQuery: function PoTableColumnManagerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoPopoverComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
    } }, inputs: { columns: ["p-columns", "columns"], target: ["p-target", "target"], colunsDefault: ["p-columns-default", "colunsDefault"], lastVisibleColumnsSelected: ["p-last-visible-columns-selected", "lastVisibleColumnsSelected"], maxColumns: ["p-max-columns", "maxColumns"] }, outputs: { visibleColumnsChange: "p-visible-columns-change", changeVisibleColumns: "p-change-visible-columns", initialColumns: "p-initial-columns" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["p-position", "bottom-left", 3, "p-target", "p-close", 4, "ngIf"], ["p-position", "bottom-left", 3, "p-target", "p-close"], ["popover", ""], [1, "po-table-column-manager-header"], [1, "po-table-column-manager-header-title"], [1, "po-table-column-manager-header-close"], [1, "po-table-column-manager-header-close-button", "po-clickable", "po-icon", "po-icon-close", 3, "click"], [1, "po-table-column-manager-body"], ["name", "visibleColumns", "p-columns", "1", 3, "ngModel", "p-options", "p-columns-manager", "ngModelChange", "p-change", "p-change-position"], [1, "po-table-column-manager-footer"], ["p-kind", "tertiary", 1, "po-table-column-manager-footer-restore", 3, "p-label", "p-click"]], template: function PoTableColumnManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoTableColumnManagerComponent_po_popover_0_Template, 11, 6, "po-popover", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.target);
    } }, dependencies: [i2.NgIf, i3.NgControlStatus, i3.NgModel, i4.PoButtonComponent, i5.PoPopoverComponent, i6.PoTableListManagerComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableColumnManagerComponent, [{
        type: Component,
        args: [{ selector: 'po-table-column-manager', template: "<po-popover #popover *ngIf=\"target\" [p-target]=\"target\" p-position=\"bottom-left\" (p-close)=\"checkChanges([], true)\">\r\n  <div class=\"po-table-column-manager-header\">\r\n    <div class=\"po-table-column-manager-header-title\">{{ literals.columnsManager }}</div>\r\n\r\n    <div class=\"po-table-column-manager-header-close\">\r\n      <button\r\n        class=\"po-table-column-manager-header-close-button po-clickable po-icon po-icon-close\"\r\n        (click)=\"popover.close()\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"po-table-column-manager-body\">\r\n    <po-table-list-manager\r\n      name=\"visibleColumns\"\r\n      [(ngModel)]=\"visibleColumns\"\r\n      p-columns=\"1\"\r\n      [p-options]=\"columnsOptions\"\r\n      (p-change)=\"checkChanges($event, false)\"\r\n      (p-change-position)=\"changePosition($event)\"\r\n      [p-columns-manager]=\"columns\"\r\n    >\r\n    </po-table-list-manager>\r\n  </div>\r\n\r\n  <div class=\"po-table-column-manager-footer\">\r\n    <po-button\r\n      class=\"po-table-column-manager-footer-restore\"\r\n      p-kind=\"tertiary\"\r\n      [p-label]=\"literals.restoreDefault\"\r\n      (p-click)=\"restore()\"\r\n    >\r\n    </po-button>\r\n  </div>\r\n</po-popover>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.PoLanguageService }]; }, { popover: [{
            type: ViewChild,
            args: [PoPopoverComponent]
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }], target: [{
            type: Input,
            args: ['p-target']
        }], colunsDefault: [{
            type: Input,
            args: ['p-columns-default']
        }], lastVisibleColumnsSelected: [{
            type: Input,
            args: ['p-last-visible-columns-selected']
        }], visibleColumnsChange: [{
            type: Output,
            args: ['p-visible-columns-change']
        }], changeVisibleColumns: [{
            type: Output,
            args: ['p-change-visible-columns']
        }], initialColumns: [{
            type: Output,
            args: ['p-initial-columns']
        }], maxColumns: [{
            type: Input,
            args: ['p-max-columns']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYmxlL3BvLXRhYmxlLWNvbHVtbi1tYW5hZ2VyL3BvLXRhYmxlLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1jb2x1bW4tbWFuYWdlci9wby10YWJsZS1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUlOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7O0lDbEJyRix3Q0FBb0g7SUFBbkMseUxBQVcsZUFBQSx3QkFBaUIsSUFBSSxDQUFDLENBQUEsSUFBQztJQUNqSCw4QkFBNEMsYUFBQTtJQUNRLFlBQTZCO0lBQUEsaUJBQU07SUFFckYsOEJBQWtELGdCQUFBO0lBRzlDLDZLQUFTLGVBQUEsV0FBZSxDQUFBLElBQUM7SUFDMUIsaUJBQVMsRUFBQSxFQUFBO0lBSWQsOEJBQTBDLCtCQUFBO0lBR3RDLHdRQUE0QiwrTEFHaEIsZUFBQSw0QkFBcUIsS0FBSyxDQUFDLENBQUEsSUFIWCxpTkFJUCxlQUFBLDZCQUFzQixDQUFBLElBSmY7SUFPOUIsaUJBQXdCLEVBQUE7SUFHMUIsOEJBQTRDLHFCQUFBO0lB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QTZCO3VCQUM3QixrQkFBa0I7Ozs7O1FDakQvQiw2RkFrQ2E7O1FBbENTLGlDQUFZOzt1RkRnRHJCLDZCQUE2QjtjQUp6QyxTQUFTOzJCQUNFLHlCQUF5Qjs0RkFJSixPQUFPO2tCQUFyQyxTQUFTO21CQUFDLGtCQUFrQjtZQUVULE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQUVDLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUVXLGFBQWE7a0JBQXhDLEtBQUs7bUJBQUMsbUJBQW1CO1lBRWdCLDBCQUEwQjtrQkFBbkUsS0FBSzttQkFBQyxpQ0FBaUM7WUFFSixvQkFBb0I7a0JBQXZELE1BQU07bUJBQUMsMEJBQTBCO1lBSUUsb0JBQW9CO2tCQUF2RCxNQUFNO21CQUFDLDBCQUEwQjtZQUVMLGNBQWM7a0JBQTFDLE1BQU07bUJBQUMsbUJBQW1CO1lBY0MsVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBjb252ZXJ0VG9JbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9DaGVja2JveEdyb3VwT3B0aW9uIH0gZnJvbSAnLi4vLi4vcG8tZmllbGQvcG8tY2hlY2tib3gtZ3JvdXAvaW50ZXJmYWNlcy9wby1jaGVja2JveC1ncm91cC1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Qb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcG8tcG9wb3Zlci9wby1wb3BvdmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvTG9jYWxlRGVmYXVsdCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50JztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbHVtbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tdGFibGUtY29sdW1uLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBQb1RhYmxlQ29sdW1uTWFuYWdlck1heENvbHVtbnNEZWZhdWx0ID0gOTk5OTk7XHJcblxyXG5leHBvcnQgY29uc3QgcG9UYWJsZUNvbHVtbk1hbmFnZXJMaXRlcmFsc0RlZmF1bHQgPSB7XHJcbiAgZW46IHtcclxuICAgIGNvbHVtbnNNYW5hZ2VyOiAnQ29sdW1ucyBtYW5hZ2VyJyxcclxuICAgIHJlc3RvcmVEZWZhdWx0OiAnUmVzdG9yZSBkZWZhdWx0J1xyXG4gIH0sXHJcbiAgZXM6IHtcclxuICAgIGNvbHVtbnNNYW5hZ2VyOiAnR2VyZW50ZSBkZSBjb2x1bW5hJyxcclxuICAgIHJlc3RvcmVEZWZhdWx0OiAnUmVzdGF1cmFyIHBvciBkZWZlY3RvJ1xyXG4gIH0sXHJcbiAgcHQ6IHtcclxuICAgIGNvbHVtbnNNYW5hZ2VyOiAnR2VyZW5jaWFkb3IgZGUgY29sdW5hcycsXHJcbiAgICByZXN0b3JlRGVmYXVsdDogJ1Jlc3RhdXJhciBwYWRyw6NvJ1xyXG4gIH0sXHJcbiAgcnU6IHtcclxuICAgIGNvbHVtbnNNYW5hZ2VyOiAn0LzQtdC90LXQtNC20LXRgCDQutC+0LvQvtC90L7QuicsXHJcbiAgICByZXN0b3JlRGVmYXVsdDogJ9GB0LHRgNC+0YEg0L3QsNGB0YLRgNC+0LXQuidcclxuICB9XHJcbn07XHJcblxyXG50eXBlIERpcmVjdGlvbiA9ICd1cCcgfCAnZG93bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlLWNvbHVtbi1tYW5hZ2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFibGUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RhYmxlQ29sdW1uTWFuYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKFBvUG9wb3ZlckNvbXBvbmVudCkgcG9wb3ZlcjogUG9Qb3BvdmVyQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoJ3AtY29sdW1ucycpIGNvbHVtbnM6IEFycmF5PFBvVGFibGVDb2x1bW4+ID0gW107XHJcblxyXG4gIEBJbnB1dCgncC10YXJnZXQnKSB0YXJnZXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgncC1jb2x1bW5zLWRlZmF1bHQnKSBjb2x1bnNEZWZhdWx0OiBBcnJheTxQb1RhYmxlQ29sdW1uPjtcclxuXHJcbiAgQElucHV0KCdwLWxhc3QtdmlzaWJsZS1jb2x1bW5zLXNlbGVjdGVkJykgbGFzdFZpc2libGVDb2x1bW5zU2VsZWN0ZWQ6IEFycmF5PFBvVGFibGVDb2x1bW4+ID0gW107XHJcblxyXG4gIEBPdXRwdXQoJ3AtdmlzaWJsZS1jb2x1bW5zLWNoYW5nZScpIHZpc2libGVDb2x1bW5zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxQb1RhYmxlQ29sdW1uPj4oKTtcclxuXHJcbiAgLy8gRXZlbnRvIGRpc3BhcmFkbyBhbyBmZWNoYXIgbyBwb3BvdmVyIGRvIGdlcmVuY2lhZG9yIGRlIGNvbHVuYXMgYXDDs3MgYWx0ZXJhciBhcyBjb2x1bmFzIHZpc8OtdmVpcy5cclxuICAvLyBPIHBvLXRhYmxlIGVudmlhIGNvbW8gcGFyw6JtZXRybyB1bSBhcnJheSBkZSBzdHJpbmcgY29tIGFzIGNvbHVuYXMgdmlzw612ZWlzIGF0dWFsaXphZGFzLiBQb3IgZXhlbXBsbzogW1wiaWRDYXJkXCIsIFwibmFtZVwiLCBcImhpcmVTdGF0dXNcIiwgXCJhZ2VcIl0uXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtdmlzaWJsZS1jb2x1bW5zJykgY2hhbmdlVmlzaWJsZUNvbHVtbnMgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZz4+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3AtaW5pdGlhbC1jb2x1bW5zJykgaW5pdGlhbENvbHVtbnMgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PFN0cmluZz4+KCk7XHJcblxyXG4gIGxpdGVyYWxzO1xyXG4gIGNvbHVtbnNPcHRpb25zOiBBcnJheTxQb0NoZWNrYm94R3JvdXBPcHRpb24+ID0gW107XHJcbiAgdmlzaWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBjb2x1bW5VcGRhdGU7XHJcblxyXG4gIHByaXZhdGUgX21heENvbHVtbnM6IG51bWJlciA9IFBvVGFibGVDb2x1bW5NYW5hZ2VyTWF4Q29sdW1uc0RlZmF1bHQ7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0Q29sdW1uczogQXJyYXk8UG9UYWJsZUNvbHVtbj4gPSBbXTtcclxuICBwcml2YXRlIHJlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgcmVzdG9yZURlZmF1bHRFdmVudDogYm9vbGVhbjtcclxuICBwcml2YXRlIGxhc3RFbWl0dGVkVmFsdWU6IEFycmF5PHN0cmluZz47XHJcbiAgcHJpdmF0ZSBtaW5Db2x1bW5zOiBudW1iZXIgPSAxO1xyXG5cclxuICBASW5wdXQoJ3AtbWF4LWNvbHVtbnMnKSBzZXQgbWF4Q29sdW1ucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9tYXhDb2x1bW5zID0gY29udmVydFRvSW50KHZhbHVlLCBQb1RhYmxlQ29sdW1uTWFuYWdlck1heENvbHVtbnNEZWZhdWx0KTtcclxuICB9XHJcblxyXG4gIGdldCBtYXhDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heENvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICB0aGlzLmxpdGVyYWxzID0ge1xyXG4gICAgICAuLi5wb1RhYmxlQ29sdW1uTWFuYWdlckxpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAuLi5wb1RhYmxlQ29sdW1uTWFuYWdlckxpdGVyYWxzRGVmYXVsdFtsYW5ndWFnZV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCB7IGNvbHVtbnMsIG1heENvbHVtbnMsIHRhcmdldCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sdW1ucykge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ29sdW1ucyhjb2x1bW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4Q29sdW1ucykge1xyXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh0aGlzLmNvbHVtbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLy8gYXF1aSBjaGVnYW0gb3MgZXZlbnRvcyBkbyBjaGVja2JveCBlIGRvIGNsb3NlIGRvIHBvcG92ZXIgcXVlIHRhbWLDqW0gw6kgZGlzcGFyYWRvIG5vIHJlc2l6ZVxyXG4gIGNoZWNrQ2hhbmdlcyhldmVudDogQXJyYXk8c3RyaW5nPiA9IFtdLCBlbWl0OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMudmVyaWZ5VG9FbWl0Q2hhbmdlKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICAvLyBjb250cm9sYSBlbWlzc8O1ZXMgcGFyYSBvIGRldlxyXG4gICAgICB0aGlzLnZlcmlmeVRvRW1pdFZpc2libGVDb2x1bW5zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN0b3JlKCkge1xyXG4gICAgdGhpcy5yZXN0b3JlRGVmYXVsdEV2ZW50ID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRlZmF1bHRDb2x1bW5zID0gdGhpcy5nZXRWaXNpYmxlQ29sdW1ucyh0aGlzLmRlZmF1bHRDb2x1bW5zKTtcclxuICAgIHRoaXMuaW5pdGlhbENvbHVtbnMuZW1pdCh0aGlzLmdldFZpc2libGVDb2x1bW5zKHRoaXMuY29sdW5zRGVmYXVsdCkpO1xyXG4gICAgdGhpcy5jaGVja0NoYW5nZXMoZGVmYXVsdENvbHVtbnMsIHRoaXMucmVzdG9yZURlZmF1bHRFdmVudCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQb3NpdGlvbih7IG9wdGlvbiwgZGlyZWN0aW9uIH0pIHtcclxuICAgIGNvbnN0IGluZGV4Q29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmRJbmRleChlbCA9PiBlbC5wcm9wZXJ0eSA9PT0gb3B0aW9uLnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NvbHVtbiA9IFsuLi50aGlzLmNvbHVtbnNdO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlUG9zaXRpb25Db2x1bW4obmV3Q29sdW1uLCBpbmRleENvbHVtbiwgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMuY29sdW1ucyA9IG5ld0NvbHVtbjtcclxuICAgIHRoaXMudmlzaWJsZUNvbHVtbnNDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VQb3NpdGlvbkNvbHVtbihhcnJheTogQXJyYXk8UG9UYWJsZUNvbHVtbj4sIGluZGV4OiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMCwgYXJyYXkuc3BsaWNlKGluZGV4IC0gMSwgMSlbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xyXG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDAsIGFycmF5LnNwbGljZShpbmRleCArIDEsIDEpWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5VG9FbWl0Q2hhbmdlKGV2ZW50OiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBjb25zdCBuZXdDb2x1bW5zID0gWy4uLmV2ZW50XTtcclxuICAgIGlmIChuZXdDb2x1bW5zLmxlbmd0aCA+PSAxICYmIHRoaXMuYWxsb3dzQ2hhbmdlVmlzaWJsZUNvbHVtbnMoKSkge1xyXG4gICAgICB0aGlzLmVtaXRDaGFuZ2VzVG9TZWxlY3RlZENvbHVtbnMobmV3Q29sdW1ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBEZXNhYmlsaXRhIHVsdGltbyBjaGVja2JveCBhdGl2b1xyXG4gICAgaWYgKG5ld0NvbHVtbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IGNvbHVtbnNPcHRpb25zID0gdGhpcy5tYXBUYWJsZUNvbHVtbnNUb0NoZWNrYm94T3B0aW9ucyh0aGlzLmNvbHVtblVwZGF0ZSk7XHJcbiAgICAgIHRoaXMuY29sdW1uc09wdGlvbnMgPSB0aGlzLmRpc2FibGVkTGFzdENvbHVtbihjb2x1bW5zT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VzVG9TZWxlY3RlZENvbHVtbnMobmV3Q29sdW1uczogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgdGhpcy52aXNpYmxlQ29sdW1ucyA9IFsuLi5uZXdDb2x1bW5zXTtcclxuICAgIGNvbnN0IHZpc2libGVUYWJsZUNvbHVtbnMgPSB0aGlzLmdldFZpc2libGVUYWJsZUNvbHVtbnModGhpcy52aXNpYmxlQ29sdW1ucyk7XHJcblxyXG4gICAgLy8gZW1pdGUgYWx0ZXJhw6fDo28gbmFzIGNvbHVuYXMgc2VsZWNpb25hZGFzLCBwb3LDqW0gbsOjbyBlbWl0ZSBwYXJhIG8gZGV2LlxyXG4gICAgdGhpcy52aXNpYmxlQ29sdW1uc0NoYW5nZS5lbWl0KHZpc2libGVUYWJsZUNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbGxvd3NDaGFuZ2VWaXNpYmxlQ29sdW1ucygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZpc2libGVUYWJsZUNvbHVtbnMgPSB0aGlzLmdldFZpc2libGVUYWJsZUNvbHVtbnModGhpcy52aXNpYmxlQ29sdW1ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KHZpc2libGVUYWJsZUNvbHVtbnMpICE9PSB0aGlzLnN0cmluZ2lmeSh0aGlzLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlUb0VtaXRWaXNpYmxlQ29sdW1ucygpIHtcclxuICAgIGlmICh0aGlzLnJlc3RvcmVEZWZhdWx0RXZlbnQpIHtcclxuICAgICAgLy8gdmVpbyBkbyByZXN0b3JlIGRlZmF1bHRcclxuICAgICAgdGhpcy52ZXJpZnlSZXN0b3JlVmFsdWVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmb2kgZGlzcGFyYWRvIG5vIGNsb3NlIHBvcG92ZXI7XHJcbiAgICAgIHRoaXMudmVyaWZ5T25DbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlSZXN0b3JlVmFsdWVzKCkge1xyXG4gICAgY29uc3QgZGVmYXVsdENvbHVtbnMgPSBbLi4udGhpcy5kZWZhdWx0Q29sdW1uc107XHJcbiAgICBjb25zdCBkZWZhdWx0VmlzaWJsZUNvbHVtbnMgPSB0aGlzLmdldFZpc2libGVDb2x1bW5zKGRlZmF1bHRDb2x1bW5zKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd3NDaGFuZ2VTZWxlY3RlZENvbHVtbnMoZGVmYXVsdFZpc2libGVDb2x1bW5zKSkge1xyXG4gICAgICB0aGlzLnZpc2libGVDb2x1bW5zQ2hhbmdlLmVtaXQodGhpcy5kZWZhdWx0Q29sdW1ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXN0b3JlRGVmYXVsdEV2ZW50ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFsbG93c0NoYW5nZVNlbGVjdGVkQ29sdW1ucyhkZWZhdWx0VmlzaWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIGNvbnN0IHZpc2libGVDb2x1bW5zID0gdGhpcy5nZXRWaXNpYmxlQ29sdW1ucyh0aGlzLmNvbHVtbnMpO1xyXG5cclxuICAgIHJldHVybiAhdGhpcy5pc0VxdWFsQXJyYXlzKGRlZmF1bHRWaXNpYmxlQ29sdW1ucywgdmlzaWJsZUNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlPbkNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuYWxsb3dzRW1pc3Npb24oKSkge1xyXG4gICAgICB0aGlzLmVtaXRWaXNpYmxlQ29sdW1ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJsZUNvbHVtbnMoKSB7XHJcbiAgICB0aGlzLmxhc3RFbWl0dGVkVmFsdWUgPSBbLi4udGhpcy52aXNpYmxlQ29sdW1uc107XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVDb2x1bW5zLmVtaXQodGhpcy52aXNpYmxlQ29sdW1ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFsbG93c0VtaXNzaW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFZpc2libGVDb2x1bW5zID0gdGhpcy52aXNpYmxlQ29sdW1ucyA/IFsuLi50aGlzLnZpc2libGVDb2x1bW5zXSA6IFtdO1xyXG4gICAgY29uc3QgbGFzdEVtaXR0ZWRWYWx1ZSA9IHRoaXMubGFzdEVtaXR0ZWRWYWx1ZSA/IFsuLi50aGlzLmxhc3RFbWl0dGVkVmFsdWVdIDogW107XHJcbiAgICBjb25zdCBsYXN0VmlzaWJsZUNvbHVtbnNTZWxlY3RlZCA9IHRoaXMubGFzdFZpc2libGVDb2x1bW5zU2VsZWN0ZWQgPyBbLi4udGhpcy5sYXN0VmlzaWJsZUNvbHVtbnNTZWxlY3RlZF0gOiBbXTtcclxuICAgIGNvbnN0IGxhc3RWaXNpYmxlQ29sdW1ucyA9IHRoaXMuZ2V0VmlzaWJsZUNvbHVtbnMobGFzdFZpc2libGVDb2x1bW5zU2VsZWN0ZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNVcGRhdGUodXBkYXRlZFZpc2libGVDb2x1bW5zLCBsYXN0RW1pdHRlZFZhbHVlKSB8fFxyXG4gICAgICB0aGlzLmlzRmlyc3RUaW1lKHVwZGF0ZWRWaXNpYmxlQ29sdW1ucywgbGFzdFZpc2libGVDb2x1bW5zKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNGaXJzdFRpbWUodXBkYXRlZFZpc2libGVDb2x1bW5zOiBBcnJheTxzdHJpbmc+LCBsYXN0VmlzaWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5sYXN0RW1pdHRlZFZhbHVlICYmICF0aGlzLmlzRXF1YWxBcnJheXModXBkYXRlZFZpc2libGVDb2x1bW5zLCBsYXN0VmlzaWJsZUNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1VwZGF0ZSh1cGRhdGVkVmlzaWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz4sIGxhc3RFbWl0dGVkVmFsdWU6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmxhc3RFbWl0dGVkVmFsdWUgJiYgIXRoaXMuaXNFcXVhbEFycmF5cyh1cGRhdGVkVmlzaWJsZUNvbHVtbnMsIGxhc3RFbWl0dGVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0VxdWFsQXJyYXlzKGZpcnN0OiBBcnJheTxzdHJpbmc+LCBzZWNvbmQ6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG9uZSA9IGZpcnN0ID8gWy4uLmZpcnN0XSA6IFtdO1xyXG4gICAgY29uc3QgdHdvID0gc2Vjb25kID8gWy4uLnNlY29uZF0gOiBbXTtcclxuICAgIGNvbnN0IGZpcnN0U29ydCA9IG9uZS5zbGljZSgpO1xyXG4gICAgY29uc3Qgc2Vjb25kU29ydCA9IHR3by5zbGljZSgpO1xyXG4gICAgY29uc3QgZmlyc3RTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmaXJzdFNvcnQpO1xyXG4gICAgY29uc3Qgc2Vjb25kU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc2Vjb25kU29ydCk7XHJcblxyXG4gICAgcmV0dXJuIGZpcnN0U3RyaW5nID09PSBzZWNvbmRTdHJpbmc7XHJcbiAgfVxyXG5cclxuICAvLyBkZXNhYmlsaXRhcsOhIGFzIGNvbHVuYXMsIHF1ZSBuw6NvIGVzdGl2ZXJlbSBzZWxlY2lvbmFkYXMsIGFww7NzIGV4ZWRlciBvIG51bWVybyBtYXhpbW8gZGUgY29sdW5hcy5cclxuICBwcml2YXRlIGRpc2FibGVDb2x1bW5zT3B0aW9ucyhjb2x1bW5zOiBBcnJheTxQb0NoZWNrYm94R3JvdXBPcHRpb24+ID0gW10pIHtcclxuICAgIHJldHVybiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKHtcclxuICAgICAgLi4uY29sdW1uLFxyXG4gICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVDb2x1bW4oY29sdW1uLnZhbHVlKVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2x1bW5UaXRsZUxhYmVsKGNvbHVtbjogUG9UYWJsZUNvbHVtbikge1xyXG4gICAgcmV0dXJuIGNvbHVtbi5sYWJlbCB8fCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoY29sdW1uLnByb3BlcnR5KTtcclxuICB9XHJcblxyXG4gIC8qKiBSZXRvcm5hIHVtIEFycmF5IGRlIGNvbHVtbi5wcm9wZXJ0eSBkYXMgY29sdW5hcyBxdWUgc8OjbyB2aXNpdmVpcy4gKi9cclxuICBwcml2YXRlIGdldFZpc2libGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PFBvVGFibGVDb2x1bW4+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBsZXQgdmlzaWJsZUNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlQ29sdW1uKGNvbHVtbiwgdmlzaWJsZUNvbHVtbnMpKSB7XHJcbiAgICAgICAgdmlzaWJsZUNvbHVtbnMgPSBbLi4udmlzaWJsZUNvbHVtbnMsIGNvbHVtbi5wcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB2aXNpYmxlQ29sdW1ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWaXNpYmxlQ29sdW1uKGNvbHVtbjogUG9UYWJsZUNvbHVtbiwgdmlzaWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjb2x1bW4udmlzaWJsZSAhPT0gZmFsc2UgJiYgdmlzaWJsZUNvbHVtbnMubGVuZ3RoIDwgdGhpcy5tYXhDb2x1bW5zICYmIGNvbHVtbi50eXBlICE9PSAnZGV0YWlsJztcclxuICB9XHJcblxyXG4gIC8qKiBSZXRvcm5hIHVtIEFycmF5IFBvVGFibGVDb2x1bW4gYSBwYXJ0aXIgZGFzIGNvbHVuYXMgdmlzaXZlaXMgbm8gZ2VyZW5jaWFkb3IgZGUgY29sdW5hcy4gKi9cclxuICBwcml2YXRlIGdldFZpc2libGVUYWJsZUNvbHVtbnModmlzaWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxQb1RhYmxlQ29sdW1uPiB7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zID8gWy4uLnRoaXMuY29sdW1uc10gOiBbXTtcclxuXHJcbiAgICByZXR1cm4gY29sdW1ucy5tYXAoY29sdW1uID0+ICh7XHJcbiAgICAgIC4uLmNvbHVtbixcclxuICAgICAgdmlzaWJsZTogdmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLnByb3BlcnR5KSB8fCBjb2x1bW4udHlwZSA9PT0gJ2RldGFpbCdcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcclxuICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucG9wb3ZlciAmJiAhdGhpcy5wb3BvdmVyLmlzSGlkZGVuKSB7XHJcbiAgICAgICAgdGhpcy5wb3BvdmVyLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Rpc2FibGVDb2x1bW4ocHJvcGVydHk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZUNvbHVtbnMubGVuZ3RoID49IHRoaXMubWF4Q29sdW1ucyA/ICF0aGlzLnZpc2libGVDb2x1bW5zLmluY2x1ZGVzKHByb3BlcnR5KSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXBUYWJsZUNvbHVtbnNUb0NoZWNrYm94T3B0aW9ucyhjb2x1bW5zOiBBcnJheTxQb1RhYmxlQ29sdW1uPiA9IFtdKSB7XHJcbiAgICBjb25zdCB0YWJsZUNvbHVtbnMgPSBbLi4uY29sdW1uc107XHJcbiAgICBjb25zdCBjb2x1bW5zT3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRhYmxlQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udHlwZSAhPT0gJ2RldGFpbCcpIHtcclxuICAgICAgICBjb2x1bW5zT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBjb2x1bW4ucHJvcGVydHksXHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5nZXRDb2x1bW5UaXRsZUxhYmVsKGNvbHVtbiksXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVDb2x1bW4oY29sdW1uLnByb3BlcnR5KSxcclxuICAgICAgICAgIHZpc2libGU6IGNvbHVtbi52aXNpYmxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2x1bW5zT3B0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZWRMYXN0Q29sdW1uKGNvbHVtbnM6IEFycmF5PGFueT4pIHtcclxuICAgIHJldHVybiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKHtcclxuICAgICAgLi4uY29sdW1uLFxyXG4gICAgICBkaXNhYmxlZDogY29sdW1uLnR5cGUgIT09ICdkZXRhaWwnICYmIGNvbHVtbi52aXNpYmxlID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlQ29sdW1ucyhjb2x1bW5zOiBTaW1wbGVDaGFuZ2UpIHtcclxuICAgIGNvbnN0IHsgY3VycmVudFZhbHVlID0gW10sIHByZXZpb3VzVmFsdWUgPSBbXSB9ID0gY29sdW1ucztcclxuICAgIHRoaXMuY29sdW1uVXBkYXRlID0gY29sdW1ucy5jdXJyZW50VmFsdWU7XHJcblxyXG4gICAgLy8gYXR1YWxpemFyYSBvIGRlZmF1bHRDb2x1bW5zLCBxdWFuZG8gZm9yIGEgcHJpbWVpcmEgdmV6IG91IHF1YW5kbyBvIGRlZmF1bHRDb2x1bW5zIGZvciBkaWZlcmVudGUgZG8gY3VycmVudFZhbHVlXHJcbiAgICBpZiAoIXRoaXMubGFzdFZpc2libGVDb2x1bW5zU2VsZWN0ZWQgJiYgdGhpcy5zdHJpbmdpZnkodGhpcy5kZWZhdWx0Q29sdW1ucykgIT09IHRoaXMuc3RyaW5naWZ5KGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0Q29sdW1ucyA9IFsuLi5jdXJyZW50VmFsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZlcmlmaWNhIHNlIG8gdmFsb3IgYW50ZXJpb3Igw6kgZGlmZXJlbnRlIGRvIGF0dWFsIHBhcmEgYXR1YWxpemFyIGFzIGNvbHVtbnNPcHRpb25zIGFwZW5hcyBxdWFuZG8gZm9yIG5lY2Vzc2FyaW9cclxuICAgIGlmICh0aGlzLnN0cmluZ2lmeShwcmV2aW91c1ZhbHVlKSAhPT0gdGhpcy5zdHJpbmdpZnkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlcyhjdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZXMoY3VycmVudFZhbHVlOiBBcnJheTxQb1RhYmxlQ29sdW1uPikge1xyXG4gICAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB0aGlzLmdldFZpc2libGVDb2x1bW5zKGN1cnJlbnRWYWx1ZSk7XHJcbiAgICB0aGlzLnZpc2libGVDb2x1bW5zID0gWy4uLnZpc2libGVDb2x1bW5zXTtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zT3B0aW9ucyA9IHRoaXMubWFwVGFibGVDb2x1bW5zVG9DaGVja2JveE9wdGlvbnMoY3VycmVudFZhbHVlKTtcclxuICAgIHRoaXMuY29sdW1uc09wdGlvbnMgPSB0aGlzLmRpc2FibGVDb2x1bW5zT3B0aW9ucyhjb2x1bW5zT3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5jaGVja0NoYW5nZXModmlzaWJsZUNvbHVtbnMsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgaWYgKHRoaXMucmVzaXplTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5yZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdHJpbmdpZnkoY29sdW1uczogQXJyYXk8UG9UYWJsZUNvbHVtbj4pIHtcclxuICAgIC8vIG7Do28gZmF6IG8gc3RyaW5naWZ5IGRhIHByb3ByaWVkYWRlIGljb24gZSBzZWFyY2hTZXJ2aWNlLCBwb2lzIHBvZGUgY29udGVyIG9iamV0byBjb21wbGV4byBlIGRpc3BhcmFyIHVtIGVycm8uXHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29sdW1ucywgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgaWYgKGtleSAhPT0gJ2ljb24nICYmIGtleSAhPT0gJ3NlYXJjaFNlcnZpY2UnKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHBvLXBvcG92ZXIgI3BvcG92ZXIgKm5nSWY9XCJ0YXJnZXRcIiBbcC10YXJnZXRdPVwidGFyZ2V0XCIgcC1wb3NpdGlvbj1cImJvdHRvbS1sZWZ0XCIgKHAtY2xvc2UpPVwiY2hlY2tDaGFuZ2VzKFtdLCB0cnVlKVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tbWFuYWdlci1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tbWFuYWdlci1oZWFkZXItdGl0bGVcIj57eyBsaXRlcmFscy5jb2x1bW5zTWFuYWdlciB9fTwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tbWFuYWdlci1oZWFkZXItY2xvc2VcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLW1hbmFnZXItaGVhZGVyLWNsb3NlLWJ1dHRvbiBwby1jbGlja2FibGUgcG8taWNvbiBwby1pY29uLWNsb3NlXCJcclxuICAgICAgICAoY2xpY2spPVwicG9wb3Zlci5jbG9zZSgpXCJcclxuICAgICAgPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tbWFuYWdlci1ib2R5XCI+XHJcbiAgICA8cG8tdGFibGUtbGlzdC1tYW5hZ2VyXHJcbiAgICAgIG5hbWU9XCJ2aXNpYmxlQ29sdW1uc1wiXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmlzaWJsZUNvbHVtbnNcIlxyXG4gICAgICBwLWNvbHVtbnM9XCIxXCJcclxuICAgICAgW3Atb3B0aW9uc109XCJjb2x1bW5zT3B0aW9uc1wiXHJcbiAgICAgIChwLWNoYW5nZSk9XCJjaGVja0NoYW5nZXMoJGV2ZW50LCBmYWxzZSlcIlxyXG4gICAgICAocC1jaGFuZ2UtcG9zaXRpb24pPVwiY2hhbmdlUG9zaXRpb24oJGV2ZW50KVwiXHJcbiAgICAgIFtwLWNvbHVtbnMtbWFuYWdlcl09XCJjb2x1bW5zXCJcclxuICAgID5cclxuICAgIDwvcG8tdGFibGUtbGlzdC1tYW5hZ2VyPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tdGFibGUtY29sdW1uLW1hbmFnZXItZm9vdGVyXCI+XHJcbiAgICA8cG8tYnV0dG9uXHJcbiAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLW1hbmFnZXItZm9vdGVyLXJlc3RvcmVcIlxyXG4gICAgICBwLWtpbmQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnJlc3RvcmVEZWZhdWx0XCJcclxuICAgICAgKHAtY2xpY2spPVwicmVzdG9yZSgpXCJcclxuICAgID5cclxuICAgIDwvcG8tYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3BvLXBvcG92ZXI+XHJcbiJdfQ==