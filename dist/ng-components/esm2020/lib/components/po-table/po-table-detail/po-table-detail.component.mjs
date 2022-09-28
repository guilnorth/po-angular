import { Component, EventEmitter, Input, Output } from '@angular/core';
import { capitalizeFirstLetter, isTypeof } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../po-field/po-checkbox/po-checkbox.component";
import * as i4 from "../../../pipes/po-time/po-time.pipe";
function PoTableDetailComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 6);
} }
function PoTableDetailComponent_thead_1_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getColumnTitleLabel(detail_r4), " ");
} }
function PoTableDetailComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead")(1, "tr");
    i0.ɵɵtemplate(2, PoTableDetailComponent_thead_1_th_2_Template, 1, 0, "th", 3);
    i0.ɵɵelement(3, "th", 4);
    i0.ɵɵtemplate(4, PoTableDetailComponent_thead_1_th_4_Template, 2, 1, "th", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isSelectable);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.detail.columns);
} }
function PoTableDetailComponent_tr_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "td", 12);
    i0.ɵɵelementStart(2, "td", 13)(3, "po-checkbox", 14);
    i0.ɵɵlistener("click", function PoTableDetailComponent_tr_3_ng_container_1_Template_po_checkbox_click_3_listener() { i0.ɵɵrestoreView(_r12); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onSelectRow(item_r5)); })("p-change", function PoTableDetailComponent_tr_3_ng_container_1_Template_po_checkbox_p_change_3_listener() { i0.ɵɵrestoreView(_r12); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onSelectRow(item_r5)); })("ngModelChange", function PoTableDetailComponent_tr_3_ng_container_1_Template_po_checkbox_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const item_r5 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r5.$selected = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", item_r5.$selected);
} }
function PoTableDetailComponent_tr_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 15);
} }
function PoTableDetailComponent_tr_3_td_4_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.getColumnTitleLabel(detail_r18), ": ");
} }
function PoTableDetailComponent_tr_3_td_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(2, 1, ctx_r20.getDetailData(item_r5, detail_r18), detail_r18.format, "symbol", "1.2-2"));
} }
function PoTableDetailComponent_tr_3_td_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r21.getDetailData(item_r5, detail_r18), detail_r18.format || "dd/MM/yyyy"));
} }
function PoTableDetailComponent_tr_3_td_4_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "po_time");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r22.getDetailData(item_r5, detail_r18), detail_r18.format || "HH:mm:ss.ffffff"));
} }
function PoTableDetailComponent_tr_3_td_4_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r23.getDetailData(item_r5, detail_r18), detail_r18.format || "dd/MM/yyyy HH:mm:ss"), " ");
} }
function PoTableDetailComponent_tr_3_td_4_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.formatNumberDetail(ctx_r24.getDetailData(item_r5, detail_r18), detail_r18.format));
} }
function PoTableDetailComponent_tr_3_td_4_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = i0.ɵɵnextContext().$implicit;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r25.getDetailData(item_r5, detail_r18));
} }
function PoTableDetailComponent_tr_3_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵlistener("click", function PoTableDetailComponent_tr_3_td_4_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r40); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r39 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r39.isSelectable ? ctx_r39.onSelectRow(item_r5) : "javascript:;"); });
    i0.ɵɵtemplate(1, PoTableDetailComponent_tr_3_td_4_strong_1_Template, 2, 1, "strong", 1);
    i0.ɵɵelementContainerStart(2, 17);
    i0.ɵɵtemplate(3, PoTableDetailComponent_tr_3_td_4_span_3_Template, 3, 6, "span", 18);
    i0.ɵɵtemplate(4, PoTableDetailComponent_tr_3_td_4_span_4_Template, 3, 4, "span", 18);
    i0.ɵɵtemplate(5, PoTableDetailComponent_tr_3_td_4_span_5_Template, 3, 4, "span", 18);
    i0.ɵɵtemplate(6, PoTableDetailComponent_tr_3_td_4_span_6_Template, 3, 4, "span", 18);
    i0.ɵɵtemplate(7, PoTableDetailComponent_tr_3_td_4_span_7_Template, 2, 1, "span", 18);
    i0.ɵɵtemplate(8, PoTableDetailComponent_tr_3_td_4_span_8_Template, 2, 1, "span", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r18 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.typeHeaderInline);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", detail_r18.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "currency");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "time");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "dateTime");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "number");
} }
function PoTableDetailComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 8);
    i0.ɵɵtemplate(1, PoTableDetailComponent_tr_3_ng_container_1_Template, 4, 1, "ng-container", 9);
    i0.ɵɵtemplate(2, PoTableDetailComponent_tr_3_ng_template_2_Template, 1, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PoTableDetailComponent_tr_3_td_4_Template, 9, 7, "td", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-table-row-active", item_r5.$selected && ctx_r1.isSelectable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isSelectable)("ngIfElse", _r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.detailColumns);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por apresentar o detalhe de cada linha da tabela.
 */
export class PoTableDetailComponent {
    constructor(decimalPipe) {
        this.decimalPipe = decimalPipe;
        /**
         * Define se a tabela possui a opção de `selectable` habilitada.
         */
        this.isSelectable = false;
        /**
         * @optional
         *
         * @description
         *
         * Ação executada ao selecionar ou desmarcar a seleção de uma linha de detalhe do `po-table`.
         */
        this.selectRow = new EventEmitter();
    }
    /**
     * Configuração da linha de detalhes.
     */
    set detail(value) {
        this._detail = this.returnPoTableDetailObject(value);
    }
    get detail() {
        return this._detail;
    }
    get detailColumns() {
        return this.detail?.columns || [];
    }
    get typeHeaderInline() {
        return (this.detail && !this.detail['typeHeader']) || this.detail['typeHeader'] === 'inline';
    }
    get typeHeaderTop() {
        return this.detail && this.detail['typeHeader'] === 'top';
    }
    formatNumberDetail(value, format) {
        if (!format) {
            return value;
        }
        return this.decimalPipe.transform(value, format);
    }
    getColumnTitleLabel(detail) {
        return detail.label || capitalizeFirstLetter(detail.property);
    }
    getDetailData(item, detail) {
        const arrayProperty = detail.property.split('.');
        if (arrayProperty.length > 1) {
            const nestedProperties = arrayProperty;
            let value = item;
            for (const property of nestedProperties) {
                value = value[property] || value[property] === 0 ? value[property] : '';
            }
            return value;
        }
        else {
            return item[detail.property];
        }
    }
    onSelectRow(item) {
        item.$selected = !item.$selected;
        this.selectRow.emit(item);
    }
    returnPoTableDetailObject(value) {
        if (value && isTypeof(value, 'object')) {
            if (value.columns) {
                value.columns.forEach(column => (column.property = column.property || column.column));
            }
            if (Array.isArray(value)) {
                return { columns: value };
            }
            if (value.columns) {
                return value;
            }
        }
    }
}
PoTableDetailComponent.ɵfac = function PoTableDetailComponent_Factory(t) { return new (t || PoTableDetailComponent)(i0.ɵɵdirectiveInject(i1.DecimalPipe)); };
PoTableDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableDetailComponent, selectors: [["po-table-detail"]], inputs: { items: ["p-items", "items"], isSelectable: ["p-selectable", "isSelectable"], detail: ["p-detail", "detail"] }, outputs: { selectRow: "p-select-row" }, decls: 4, vars: 2, consts: [[1, "po-table-master-detail"], [4, "ngIf"], ["class", "po-table-detail-row", 3, "po-table-row-active", 4, "ngFor", "ngForOf"], ["class", "po-table-header po-table-column-selectable", 4, "ngIf"], [1, "po-table-header", "po-table-header-column", "po-table-header-master-detail"], ["class", "po-table-header po-table-header-ellipsis", 4, "ngFor", "ngForOf"], [1, "po-table-header", "po-table-column-selectable"], [1, "po-table-header", "po-table-header-ellipsis"], [1, "po-table-detail-row"], [4, "ngIf", "ngIfElse"], ["masterDetailSpace", ""], ["class", "po-table-column-master-detail po-table-master-detail-label", 3, "click", 4, "ngFor", "ngForOf"], [1, "po-table-column-master-detail-space-checkbox"], [1, "po-table-column", "po-table-column-selectable"], ["name", "checkbox", 3, "ngModel", "click", "p-change", "ngModelChange"], [1, "po-table-column-master-detail-space"], [1, "po-table-column-master-detail", "po-table-master-detail-label", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function PoTableDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, PoTableDetailComponent_thead_1_Template, 5, 2, "thead", 1);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, PoTableDetailComponent_tr_3_Template, 5, 5, "tr", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.typeHeaderTop);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.NgControlStatus, i2.NgModel, i3.PoCheckboxComponent, i1.CurrencyPipe, i1.DatePipe, i4.PoTimePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableDetailComponent, [{
        type: Component,
        args: [{ selector: 'po-table-detail', template: "<table class=\"po-table-master-detail\">\r\n  <thead *ngIf=\"typeHeaderTop\">\r\n    <tr>\r\n      <th class=\"po-table-header po-table-column-selectable\" *ngIf=\"isSelectable\"></th>\r\n      <th class=\"po-table-header po-table-header-column po-table-header-master-detail\"></th>\r\n      <th class=\"po-table-header po-table-header-ellipsis\" *ngFor=\"let detail of detail.columns\">\r\n        {{ getColumnTitleLabel(detail) }}\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr\r\n      class=\"po-table-detail-row\"\r\n      [class.po-table-row-active]=\"item.$selected && isSelectable\"\r\n      *ngFor=\"let item of items\"\r\n    >\r\n      <ng-container *ngIf=\"isSelectable; else masterDetailSpace\">\r\n        <td class=\"po-table-column-master-detail-space-checkbox\"></td>\r\n        <td class=\"po-table-column po-table-column-selectable\">\r\n          <po-checkbox\r\n            name=\"checkbox\"\r\n            (click)=\"onSelectRow(item)\"\r\n            (p-change)=\"onSelectRow(item)\"\r\n            [(ngModel)]=\"item.$selected\"\r\n          ></po-checkbox>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-template #masterDetailSpace>\r\n        <td class=\"po-table-column-master-detail-space\"></td>\r\n      </ng-template>\r\n\r\n      <td\r\n        class=\"po-table-column-master-detail po-table-master-detail-label\"\r\n        (click)=\"isSelectable ? onSelectRow(item) : 'javascript:;'\"\r\n        *ngFor=\"let detail of detailColumns\"\r\n      >\r\n        <strong *ngIf=\"typeHeaderInline\"> {{ getColumnTitleLabel(detail) }}: </strong>\r\n\r\n        <ng-container [ngSwitch]=\"detail.type\">\r\n          <span *ngSwitchCase=\"'currency'\">{{\r\n            getDetailData(item, detail) | currency: detail.format:'symbol':'1.2-2'\r\n          }}</span>\r\n          <span *ngSwitchCase=\"'date'\">{{ getDetailData(item, detail) | date: detail.format || 'dd/MM/yyyy' }}</span>\r\n          <span *ngSwitchCase=\"'time'\">{{\r\n            getDetailData(item, detail) | po_time: detail.format || 'HH:mm:ss.ffffff'\r\n          }}</span>\r\n          <span *ngSwitchCase=\"'dateTime'\">\r\n            {{ getDetailData(item, detail) | date: detail.format || 'dd/MM/yyyy HH:mm:ss' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'number'\">{{ formatNumberDetail(getDetailData(item, detail), detail.format) }}</span>\r\n          <span *ngSwitchDefault>{{ getDetailData(item, detail) }}</span>\r\n        </ng-container>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n" }]
    }], function () { return [{ type: i1.DecimalPipe }]; }, { items: [{
            type: Input,
            args: ['p-items']
        }], isSelectable: [{
            type: Input,
            args: ['p-selectable']
        }], selectRow: [{
            type: Output,
            args: ['p-select-row']
        }], detail: [{
            type: Input,
            args: ['p-detail']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1kZXRhaWwvcG8tdGFibGUtZGV0YWlsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1kZXRhaWwvcG8tdGFibGUtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDQWhFLHdCQUFpRjs7O0lBRWpGLDZCQUEyRjtJQUN6RixZQUNGO0lBQUEsaUJBQUs7Ozs7SUFESCxlQUNGO0lBREUsc0VBQ0Y7OztJQU5KLDZCQUE2QixTQUFBO0lBRXpCLDZFQUFpRjtJQUNqRix3QkFBc0Y7SUFDdEYsNkVBRUs7SUFDUCxpQkFBSyxFQUFBOzs7SUFMcUQsZUFBa0I7SUFBbEIsMENBQWtCO0lBRUYsZUFBaUI7SUFBakIsK0NBQWlCOzs7O0lBV3pGLDZCQUEyRDtJQUN6RCx5QkFBOEQ7SUFDOUQsOEJBQXVELHNCQUFBO0lBR25ELHNPQUFTLGVBQUEsNEJBQWlCLENBQUEsSUFBQywrTkFDZixlQUFBLDRCQUFpQixDQUFBLElBREYsMk1BRWQsMENBQ3BCLElBSGtDO0lBRzVCLGlCQUFjLEVBQUE7SUFFbkIsMEJBQWU7OztJQUhULGVBQTRCO0lBQTVCLDJDQUE0Qjs7O0lBTWhDLHlCQUFxRDs7O0lBUXJELDhCQUFpQztJQUFDLFlBQW1DO0lBQUEsaUJBQVM7Ozs7SUFBNUMsZUFBbUM7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RUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzNCO1lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDOzs0RkE1RlUsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNuQm5DLGdDQUFzQztRQUNwQywyRUFRUTtRQUNSLDZCQUFPO1FBQ0wscUVBMkNLO1FBQ1AsaUJBQVEsRUFBQTs7UUF0REEsZUFBbUI7UUFBbkIsd0NBQW1CO1FBYU4sZUFBUTtRQUFSLG1DQUFROzt1RkRLbEIsc0JBQXNCO2NBSmxDLFNBQVM7MkJBQ0UsaUJBQWlCOzhEQU9ULEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUtPLFlBQVk7a0JBQWxDLEtBQUs7bUJBQUMsY0FBYztZQVNHLFNBQVM7a0JBQWhDLE1BQU07bUJBQUMsY0FBYztZQU9DLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgaXNUeXBlb2YgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvVGFibGVEZXRhaWwgfSBmcm9tICcuL3BvLXRhYmxlLWRldGFpbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlRGV0YWlsQ29sdW1uIH0gZnJvbSAnLi9wby10YWJsZS1kZXRhaWwtY29sdW1uLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHJlc3BvbnPDoXZlbCBwb3IgYXByZXNlbnRhciBvIGRldGFsaGUgZGUgY2FkYSBsaW5oYSBkYSB0YWJlbGEuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRhYmxlLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFibGVEZXRhaWxDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIExpc3RhIGRlIGl0ZW5zIGRvIF9kZXRhaWxfIGRhIHRhYmVsYS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaXRlbXMnKSBpdGVtczogQXJyYXk8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lIHNlIGEgdGFiZWxhIHBvc3N1aSBhIG9ww6fDo28gZGUgYHNlbGVjdGFibGVgIGhhYmlsaXRhZGEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNlbGVjdGFibGUnKSBpc1NlbGVjdGFibGU/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBw6fDo28gZXhlY3V0YWRhIGFvIHNlbGVjaW9uYXIgb3UgZGVzbWFyY2FyIGEgc2VsZcOnw6NvIGRlIHVtYSBsaW5oYSBkZSBkZXRhbGhlIGRvIGBwby10YWJsZWAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1zZWxlY3Qtcm93Jykgc2VsZWN0Um93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcml2YXRlIF9kZXRhaWw6IFBvVGFibGVEZXRhaWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbmZpZ3VyYcOnw6NvIGRhIGxpbmhhIGRlIGRldGFsaGVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kZXRhaWwnKSBzZXQgZGV0YWlsKHZhbHVlOiBQb1RhYmxlRGV0YWlsKSB7XHJcbiAgICB0aGlzLl9kZXRhaWwgPSB0aGlzLnJldHVyblBvVGFibGVEZXRhaWxPYmplY3QodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRldGFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXRhaWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlY2ltYWxQaXBlOiBEZWNpbWFsUGlwZSkge31cclxuXHJcbiAgZ2V0IGRldGFpbENvbHVtbnMoKTogQXJyYXk8UG9UYWJsZURldGFpbENvbHVtbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV0YWlsPy5jb2x1bW5zIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGVIZWFkZXJJbmxpbmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHRoaXMuZGV0YWlsICYmICF0aGlzLmRldGFpbFsndHlwZUhlYWRlciddKSB8fCB0aGlzLmRldGFpbFsndHlwZUhlYWRlciddID09PSAnaW5saW5lJztcclxuICB9XHJcblxyXG4gIGdldCB0eXBlSGVhZGVyVG9wKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV0YWlsICYmIHRoaXMuZGV0YWlsWyd0eXBlSGVhZGVyJ10gPT09ICd0b3AnO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TnVtYmVyRGV0YWlsKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWZvcm1hdCkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZGVjaW1hbFBpcGUudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uVGl0bGVMYWJlbChkZXRhaWw6IFBvVGFibGVEZXRhaWxDb2x1bW4pIHtcclxuICAgIHJldHVybiBkZXRhaWwubGFiZWwgfHwgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGRldGFpbC5wcm9wZXJ0eSk7XHJcbiAgfVxyXG5cclxuICBnZXREZXRhaWxEYXRhKGl0ZW06IGFueSwgZGV0YWlsOiBQb1RhYmxlRGV0YWlsQ29sdW1uKSB7XHJcbiAgICBjb25zdCBhcnJheVByb3BlcnR5ID0gZGV0YWlsLnByb3BlcnR5LnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoYXJyYXlQcm9wZXJ0eS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IG5lc3RlZFByb3BlcnRpZXMgPSBhcnJheVByb3BlcnR5O1xyXG4gICAgICBsZXQgdmFsdWU6IGFueSA9IGl0ZW07XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgbmVzdGVkUHJvcGVydGllcykge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWVbcHJvcGVydHldIHx8IHZhbHVlW3Byb3BlcnR5XSA9PT0gMCA/IHZhbHVlW3Byb3BlcnR5XSA6ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpdGVtW2RldGFpbC5wcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFJvdyhpdGVtKSB7XHJcbiAgICBpdGVtLiRzZWxlY3RlZCA9ICFpdGVtLiRzZWxlY3RlZDtcclxuICAgIHRoaXMuc2VsZWN0Um93LmVtaXQoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJldHVyblBvVGFibGVEZXRhaWxPYmplY3QodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlICYmIGlzVHlwZW9mKHZhbHVlLCAnb2JqZWN0JykpIHtcclxuICAgICAgaWYgKHZhbHVlLmNvbHVtbnMpIHtcclxuICAgICAgICB2YWx1ZS5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IChjb2x1bW4ucHJvcGVydHkgPSBjb2x1bW4ucHJvcGVydHkgfHwgY29sdW1uLmNvbHVtbikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4geyBjb2x1bW5zOiB2YWx1ZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUuY29sdW1ucykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8dGFibGUgY2xhc3M9XCJwby10YWJsZS1tYXN0ZXItZGV0YWlsXCI+XHJcbiAgPHRoZWFkICpuZ0lmPVwidHlwZUhlYWRlclRvcFwiPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGggY2xhc3M9XCJwby10YWJsZS1oZWFkZXIgcG8tdGFibGUtY29sdW1uLXNlbGVjdGFibGVcIiAqbmdJZj1cImlzU2VsZWN0YWJsZVwiPjwvdGg+XHJcbiAgICAgIDx0aCBjbGFzcz1cInBvLXRhYmxlLWhlYWRlciBwby10YWJsZS1oZWFkZXItY29sdW1uIHBvLXRhYmxlLWhlYWRlci1tYXN0ZXItZGV0YWlsXCI+PC90aD5cclxuICAgICAgPHRoIGNsYXNzPVwicG8tdGFibGUtaGVhZGVyIHBvLXRhYmxlLWhlYWRlci1lbGxpcHNpc1wiICpuZ0Zvcj1cImxldCBkZXRhaWwgb2YgZGV0YWlsLmNvbHVtbnNcIj5cclxuICAgICAgICB7eyBnZXRDb2x1bW5UaXRsZUxhYmVsKGRldGFpbCkgfX1cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHJcclxuICAgICAgY2xhc3M9XCJwby10YWJsZS1kZXRhaWwtcm93XCJcclxuICAgICAgW2NsYXNzLnBvLXRhYmxlLXJvdy1hY3RpdmVdPVwiaXRlbS4kc2VsZWN0ZWQgJiYgaXNTZWxlY3RhYmxlXCJcclxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTZWxlY3RhYmxlOyBlbHNlIG1hc3RlckRldGFpbFNwYWNlXCI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLW1hc3Rlci1kZXRhaWwtc3BhY2UtY2hlY2tib3hcIj48L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbiBwby10YWJsZS1jb2x1bW4tc2VsZWN0YWJsZVwiPlxyXG4gICAgICAgICAgPHBvLWNoZWNrYm94XHJcbiAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdFJvdyhpdGVtKVwiXHJcbiAgICAgICAgICAgIChwLWNoYW5nZSk9XCJvblNlbGVjdFJvdyhpdGVtKVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS4kc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgPjwvcG8tY2hlY2tib3g+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctdGVtcGxhdGUgI21hc3RlckRldGFpbFNwYWNlPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbi1tYXN0ZXItZGV0YWlsLXNwYWNlXCI+PC90ZD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDx0ZFxyXG4gICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLW1hc3Rlci1kZXRhaWwgcG8tdGFibGUtbWFzdGVyLWRldGFpbC1sYWJlbFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImlzU2VsZWN0YWJsZSA/IG9uU2VsZWN0Um93KGl0ZW0pIDogJ2phdmFzY3JpcHQ6OydcIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBkZXRhaWwgb2YgZGV0YWlsQ29sdW1uc1wiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Ryb25nICpuZ0lmPVwidHlwZUhlYWRlcklubGluZVwiPiB7eyBnZXRDb2x1bW5UaXRsZUxhYmVsKGRldGFpbCkgfX06IDwvc3Ryb25nPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJkZXRhaWwudHlwZVwiPlxyXG4gICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidjdXJyZW5jeSdcIj57e1xyXG4gICAgICAgICAgICBnZXREZXRhaWxEYXRhKGl0ZW0sIGRldGFpbCkgfCBjdXJyZW5jeTogZGV0YWlsLmZvcm1hdDonc3ltYm9sJzonMS4yLTInXHJcbiAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj57eyBnZXREZXRhaWxEYXRhKGl0ZW0sIGRldGFpbCkgfCBkYXRlOiBkZXRhaWwuZm9ybWF0IHx8ICdkZC9NTS95eXl5JyB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCIndGltZSdcIj57e1xyXG4gICAgICAgICAgICBnZXREZXRhaWxEYXRhKGl0ZW0sIGRldGFpbCkgfCBwb190aW1lOiBkZXRhaWwuZm9ybWF0IHx8ICdISDptbTpzcy5mZmZmZmYnXHJcbiAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZGF0ZVRpbWUnXCI+XHJcbiAgICAgICAgICAgIHt7IGdldERldGFpbERhdGEoaXRlbSwgZGV0YWlsKSB8IGRhdGU6IGRldGFpbC5mb3JtYXQgfHwgJ2RkL01NL3l5eXkgSEg6bW06c3MnIH19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIj57eyBmb3JtYXROdW1iZXJEZXRhaWwoZ2V0RGV0YWlsRGF0YShpdGVtLCBkZXRhaWwpLCBkZXRhaWwuZm9ybWF0KSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ+e3sgZ2V0RGV0YWlsRGF0YShpdGVtLCBkZXRhaWwpIH19PC9zcGFuPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4iXX0=