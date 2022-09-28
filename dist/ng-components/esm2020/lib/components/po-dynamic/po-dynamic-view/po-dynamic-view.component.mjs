import { Component } from '@angular/core';
import { PoDynamicViewBaseComponent } from './po-dynamic-view-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../pipes/po-time/po-time.pipe";
import * as i3 from "./po-dynamic-view.service";
import * as i4 from "../../po-divider/po-divider.component";
import * as i5 from "../../po-info/po-info.component";
import * as i6 from "../../po-tag/po-tag.component";
function PoDynamicViewComponent_div_0_ng_template_1_po_divider_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-divider", 7);
} if (rf & 2) {
    const field_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("p-label", field_r6.divider);
} }
function PoDynamicViewComponent_div_0_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function PoDynamicViewComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoDynamicViewComponent_div_0_ng_template_1_po_divider_0_Template, 1, 1, "po-divider", 5);
    i0.ɵɵtemplate(1, PoDynamicViewComponent_div_0_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 6);
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngIf", field_r6 == null ? null : field_r6.divider == null ? null : field_r6.divider.trim());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", !field_r6.tag ? _r1 : _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, field_r6));
} }
function PoDynamicViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PoDynamicViewComponent_div_0_ng_template_1_Template, 2, 5, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.visibleFields);
} }
function PoDynamicViewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-info", 8);
} if (rf & 2) {
    const field_r10 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", field_r10.cssClass)("p-label", field_r10.label)("p-value", field_r10.value);
} }
function PoDynamicViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-tag", 9);
} if (rf & 2) {
    const field_r11 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", field_r11.cssClass)("p-color", field_r11.color)("p-icon", field_r11.icon)("p-inverse", field_r11.inverse)("p-label", field_r11.label)("p-value", field_r11.value);
} }
/**
 * @docsExtends PoDynamicViewBaseComponent
 *
 * @example
 *
 * <example name="po-dynamic-view-basic" title="PO Dynamic View Basic">
 *  <file name="sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"> </file>
 *  <file name="sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-dynamic-view-employee" title="PO Dynamic View - Employee">
 *  <file name="sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"> </file>
 *  <file name="sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"> </file>
 * </example>
 *
 * <example name="po-dynamic-view-employee-on-load" title="PO Dynamic View - Employee on load">
 *  <file name="sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"> </file>
 *  <file name="sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"> </file>
 * </example>
 */
export class PoDynamicViewComponent extends PoDynamicViewBaseComponent {
    constructor(currencyPipe, datePipe, decimalPipe, timePipe, titleCasePipe, dynamicViewService) {
        super(currencyPipe, datePipe, decimalPipe, timePipe, titleCasePipe, dynamicViewService);
    }
    ngOnChanges(changes) {
        if (changes.fields || changes.value || changes.showAllValue) {
            this.visibleFields = this.getVisibleFields();
        }
    }
    ngOnInit() {
        if (this.load) {
            this.updateValuesAndFieldsOnLoad();
        }
    }
    async getValuesAndFieldsFromLoad() {
        let valueAndFieldsFromLoad;
        if (typeof this.load === 'string') {
            valueAndFieldsFromLoad = await this.dynamicViewService.onLoad(this.load, this.value);
        }
        else if (typeof this.load === 'function') {
            valueAndFieldsFromLoad = this.load();
        }
        return valueAndFieldsFromLoad || {};
    }
    getVisibleFields() {
        if (this.showAllValue) {
            return this.getMergedFields();
        }
        return this.value && this.fields.length ? this.getConfiguredFields() : this.getValueFields();
    }
    setFieldOnLoad(fieldOnLoad) {
        const index = this.fields.findIndex(field => field.property === fieldOnLoad.property);
        if (index >= 0) {
            this.fields[index] = { ...this.fields[index], ...fieldOnLoad };
        }
        else {
            this.fields.push({ ...fieldOnLoad });
        }
    }
    setFieldsOnLoad(fields) {
        if (fields) {
            fields.forEach(fieldOnLoad => {
                this.setFieldOnLoad(fieldOnLoad);
            });
        }
    }
    setValueOnLoad(newValue) {
        Object.assign(this.value, newValue);
    }
    async updateValuesAndFieldsOnLoad() {
        const { value, fields } = await this.getValuesAndFieldsFromLoad();
        this.setValueOnLoad(value);
        this.setFieldsOnLoad(fields);
        this.visibleFields = this.getVisibleFields();
    }
}
PoDynamicViewComponent.ɵfac = function PoDynamicViewComponent_Factory(t) { return new (t || PoDynamicViewComponent)(i0.ɵɵdirectiveInject(i1.CurrencyPipe), i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i1.DecimalPipe), i0.ɵɵdirectiveInject(i2.PoTimePipe), i0.ɵɵdirectiveInject(i1.TitleCasePipe), i0.ɵɵdirectiveInject(i3.PoDynamicViewService)); };
PoDynamicViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDynamicViewComponent, selectors: [["po-dynamic-view"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["class", "po-dynamic-view po-row", 4, "ngIf"], ["poInfo", ""], ["poTag", ""], [1, "po-dynamic-view", "po-row"], ["ngFor", "", 3, "ngForOf"], ["class", "po-sm-12", 3, "p-label", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "po-sm-12", 3, "p-label"], [3, "ngClass", "p-label", "p-value"], [3, "ngClass", "p-color", "p-icon", "p-inverse", "p-label", "p-value"]], template: function PoDynamicViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoDynamicViewComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵtemplate(1, PoDynamicViewComponent_ng_template_1_Template, 1, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoDynamicViewComponent_ng_template_3_Template, 1, 6, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visibleFields.length);
    } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i4.PoDividerComponent, i5.PoInfoComponent, i6.PoTagComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicViewComponent, [{
        type: Component,
        args: [{ selector: 'po-dynamic-view', template: "<div class=\"po-dynamic-view po-row\" *ngIf=\"visibleFields.length\">\r\n  <ng-template ngFor let-field [ngForOf]=\"visibleFields\">\r\n    <po-divider *ngIf=\"field?.divider?.trim()\" class=\"po-sm-12\" [p-label]=\"field.divider\"> </po-divider>\r\n\r\n    <ng-container *ngTemplateOutlet=\"!field.tag ? poInfo : poTag; context: { $implicit: field }\"> </ng-container>\r\n  </ng-template>\r\n</div>\r\n\r\n<ng-template #poInfo let-field>\r\n  <po-info [ngClass]=\"field.cssClass\" [p-label]=\"field.label\" [p-value]=\"field.value\"> </po-info>\r\n</ng-template>\r\n\r\n<ng-template #poTag let-field>\r\n  <po-tag\r\n    [ngClass]=\"field.cssClass\"\r\n    [p-color]=\"field.color\"\r\n    [p-icon]=\"field.icon\"\r\n    [p-inverse]=\"field.inverse\"\r\n    [p-label]=\"field.label\"\r\n    [p-value]=\"field.value\"\r\n  >\r\n  </po-tag>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.CurrencyPipe }, { type: i1.DatePipe }, { type: i1.DecimalPipe }, { type: i2.PoTimePipe }, { type: i1.TitleCasePipe }, { type: i3.PoDynamicViewService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1keW5hbWljL3BvLWR5bmFtaWMtdmlldy9wby1keW5hbWljLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWR5bmFtaWMvcG8tZHluYW1pYy12aWV3L3BvLWR5bmFtaWMtdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQU01RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0lDSjFFLGdDQUFvRzs7O0lBQXhDLDBDQUF5Qjs7O0lBRXJGLHdCQUE2Rzs7OztJQUY3Ryx5R0FBb0c7SUFFcEcsNkdBQTZHOzs7Ozs7SUFGaEcsMEdBQTRCO0lBRTFCLGVBQStDO0lBQS9DLDREQUErQyxpRUFBQTs7O0lBSmxFLDhCQUFpRTtJQUMvRCw2RkFJYztJQUNoQixpQkFBTTs7O0lBTHlCLGVBQXlCO0lBQXpCLDhDQUF5Qjs7O0lBUXRELDZCQUErRjs7O0lBQXRGLDRDQUEwQiw0QkFBQSw0QkFBQTs7O0lBSW5DLDRCQVFTOzs7SUFQUCw0Q0FBMEIsNEJBQUEsMEJBQUEsZ0NBQUEsNEJBQUEsNEJBQUE7O0FETDlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBS0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDBCQUEwQjtJQUNwRSxZQUNFLFlBQTBCLEVBQzFCLFFBQWtCLEVBQ2xCLFdBQXdCLEVBQ3hCLFFBQW9CLEVBQ3BCLGFBQTRCLEVBQzVCLGtCQUF3QztRQUV4QyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxF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QkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIERlY2ltYWxQaXBlLCBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFBvVGltZVBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9wby10aW1lL3BvLXRpbWUucGlwZSc7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNWaWV3RmllbGQgfSBmcm9tICcuLy4uL3BvLWR5bmFtaWMtdmlldy9wby1keW5hbWljLXZpZXctZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9EeW5hbWljVmlld0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWR5bmFtaWMtdmlldy1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvRHluYW1pY1ZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9wby1keW5hbWljLXZpZXcuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvRHluYW1pY1ZpZXdCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1keW5hbWljLXZpZXctYmFzaWNcIiB0aXRsZT1cIlBPIER5bmFtaWMgVmlldyBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1keW5hbWljLXZpZXctYmFzaWMvc2FtcGxlLXBvLWR5bmFtaWMtdmlldy1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWR5bmFtaWMtdmlldy1iYXNpYy9zYW1wbGUtcG8tZHluYW1pYy12aWV3LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWR5bmFtaWMtdmlldy1lbXBsb3llZVwiIHRpdGxlPVwiUE8gRHluYW1pYyBWaWV3IC0gRW1wbG95ZWVcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHluYW1pYy12aWV3LWVtcGxveWVlL3NhbXBsZS1wby1keW5hbWljLXZpZXctZW1wbG95ZWUuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1keW5hbWljLXZpZXctZW1wbG95ZWUvc2FtcGxlLXBvLWR5bmFtaWMtdmlldy1lbXBsb3llZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1keW5hbWljLXZpZXctZW1wbG95ZWUtb24tbG9hZFwiIHRpdGxlPVwiUE8gRHluYW1pYyBWaWV3IC0gRW1wbG95ZWUgb24gbG9hZFwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1keW5hbWljLXZpZXctZW1wbG95ZWUtb24tbG9hZC9zYW1wbGUtcG8tZHluYW1pYy12aWV3LWVtcGxveWVlLW9uLWxvYWQuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1keW5hbWljLXZpZXctZW1wbG95ZWUtb24tbG9hZC9zYW1wbGUtcG8tZHluYW1pYy12aWV3LWVtcGxveWVlLW9uLWxvYWQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1keW5hbWljLXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1keW5hbWljLXZpZXcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0R5bmFtaWNWaWV3Q29tcG9uZW50IGV4dGVuZHMgUG9EeW5hbWljVmlld0Jhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjdXJyZW5jeVBpcGU6IEN1cnJlbmN5UGlwZSxcclxuICAgIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIGRlY2ltYWxQaXBlOiBEZWNpbWFsUGlwZSxcclxuICAgIHRpbWVQaXBlOiBQb1RpbWVQaXBlLFxyXG4gICAgdGl0bGVDYXNlUGlwZTogVGl0bGVDYXNlUGlwZSxcclxuICAgIGR5bmFtaWNWaWV3U2VydmljZTogUG9EeW5hbWljVmlld1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGN1cnJlbmN5UGlwZSwgZGF0ZVBpcGUsIGRlY2ltYWxQaXBlLCB0aW1lUGlwZSwgdGl0bGVDYXNlUGlwZSwgZHluYW1pY1ZpZXdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmZpZWxkcyB8fCBjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuc2hvd0FsbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZUZpZWxkcyA9IHRoaXMuZ2V0VmlzaWJsZUZpZWxkcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVzQW5kRmllbGRzT25Mb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldFZhbHVlc0FuZEZpZWxkc0Zyb21Mb2FkKCk6IFByb21pc2U8eyB2YWx1ZT86IGFueTsgZmllbGRzPzogQXJyYXk8UG9EeW5hbWljVmlld0ZpZWxkPiB9PiB7XHJcbiAgICBsZXQgdmFsdWVBbmRGaWVsZHNGcm9tTG9hZDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMubG9hZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdmFsdWVBbmRGaWVsZHNGcm9tTG9hZCA9IGF3YWl0IHRoaXMuZHluYW1pY1ZpZXdTZXJ2aWNlLm9uTG9hZCh0aGlzLmxvYWQsIHRoaXMudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5sb2FkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHZhbHVlQW5kRmllbGRzRnJvbUxvYWQgPSB0aGlzLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWVBbmRGaWVsZHNGcm9tTG9hZCB8fCB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmlzaWJsZUZpZWxkcygpIHtcclxuICAgIGlmICh0aGlzLnNob3dBbGxWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRNZXJnZWRGaWVsZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAmJiB0aGlzLmZpZWxkcy5sZW5ndGggPyB0aGlzLmdldENvbmZpZ3VyZWRGaWVsZHMoKSA6IHRoaXMuZ2V0VmFsdWVGaWVsZHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmllbGRPbkxvYWQoZmllbGRPbkxvYWQ6IFBvRHluYW1pY1ZpZXdGaWVsZCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpZWxkcy5maW5kSW5kZXgoZmllbGQgPT4gZmllbGQucHJvcGVydHkgPT09IGZpZWxkT25Mb2FkLnByb3BlcnR5KTtcclxuXHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLmZpZWxkc1tpbmRleF0gPSB7IC4uLnRoaXMuZmllbGRzW2luZGV4XSwgLi4uZmllbGRPbkxvYWQgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmllbGRzLnB1c2goeyAuLi5maWVsZE9uTG9hZCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmllbGRzT25Mb2FkKGZpZWxkczogQXJyYXk8UG9EeW5hbWljVmlld0ZpZWxkPikge1xyXG4gICAgaWYgKGZpZWxkcykge1xyXG4gICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZE9uTG9hZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZE9uTG9hZChmaWVsZE9uTG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZU9uTG9hZChuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmFsdWUsIG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlVmFsdWVzQW5kRmllbGRzT25Mb2FkKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZmllbGRzIH0gPSBhd2FpdCB0aGlzLmdldFZhbHVlc0FuZEZpZWxkc0Zyb21Mb2FkKCk7XHJcblxyXG4gICAgdGhpcy5zZXRWYWx1ZU9uTG9hZCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEZpZWxkc09uTG9hZChmaWVsZHMpO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZUZpZWxkcyA9IHRoaXMuZ2V0VmlzaWJsZUZpZWxkcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tZHluYW1pYy12aWV3IHBvLXJvd1wiICpuZ0lmPVwidmlzaWJsZUZpZWxkcy5sZW5ndGhcIj5cclxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWZpZWxkIFtuZ0Zvck9mXT1cInZpc2libGVGaWVsZHNcIj5cclxuICAgIDxwby1kaXZpZGVyICpuZ0lmPVwiZmllbGQ/LmRpdmlkZXI/LnRyaW0oKVwiIGNsYXNzPVwicG8tc20tMTJcIiBbcC1sYWJlbF09XCJmaWVsZC5kaXZpZGVyXCI+IDwvcG8tZGl2aWRlcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiIWZpZWxkLnRhZyA/IHBvSW5mbyA6IHBvVGFnOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZmllbGQgfVwiPiA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcG9JbmZvIGxldC1maWVsZD5cclxuICA8cG8taW5mbyBbbmdDbGFzc109XCJmaWVsZC5jc3NDbGFzc1wiIFtwLWxhYmVsXT1cImZpZWxkLmxhYmVsXCIgW3AtdmFsdWVdPVwiZmllbGQudmFsdWVcIj4gPC9wby1pbmZvPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNwb1RhZyBsZXQtZmllbGQ+XHJcbiAgPHBvLXRhZ1xyXG4gICAgW25nQ2xhc3NdPVwiZmllbGQuY3NzQ2xhc3NcIlxyXG4gICAgW3AtY29sb3JdPVwiZmllbGQuY29sb3JcIlxyXG4gICAgW3AtaWNvbl09XCJmaWVsZC5pY29uXCJcclxuICAgIFtwLWludmVyc2VdPVwiZmllbGQuaW52ZXJzZVwiXHJcbiAgICBbcC1sYWJlbF09XCJmaWVsZC5sYWJlbFwiXHJcbiAgICBbcC12YWx1ZV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgPlxyXG4gIDwvcG8tdGFnPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=