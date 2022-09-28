import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-clean/po-clean.component";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
import * as i5 from "../../po-icon/po-icon.component";
function PoInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "po-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("po-field-icon ", ctx_r0.disabled ? "po-icon-input-disabled" : "po-icon-input", "");
    i0.ɵɵclassProp("po-field-icon-disabled", ctx_r0.disabled);
    i0.ɵɵproperty("p-icon", ctx_r0.icon);
} }
function PoInputComponent_po_clean_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 10);
    i0.ɵɵlistener("p-change-event", function PoInputComponent_po_clean_6_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.disabled ? "po-icon-input-disabled" : "po-icon-input");
    i0.ɵɵproperty("p-element-ref", ctx_r2.inputEl);
} }
/**
 * @docsExtends PoInputBaseComponent
 *
 * @example
 *
 * <example name="po-input-basic" title="PO Input Basic">
 *  <file name="sample-po-input-basic/sample-po-input-basic.component.html"> </file>
 *  <file name="sample-po-input-basic/sample-po-input-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-input-labs" title="PO Input Labs">
 *  <file name="sample-po-input-labs/sample-po-input-labs.component.html"> </file>
 *  <file name="sample-po-input-labs/sample-po-input-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-input-reactive-form" title="PO Input - Reactive Form">
 *  <file name="sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"> </file>
 *  <file name="sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"> </file>
 * </example>
 */
export class PoInputComponent extends PoInputGeneric {
    /* istanbul ignore next */
    constructor(el, cd) {
        super(el, cd);
    }
    extraValidation(c) {
        return null;
    }
}
PoInputComponent.ɵfac = function PoInputComponent_Factory(t) { return new (t || PoInputComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoInputComponent, selectors: [["po-input"]], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoInputComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoInputComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 18, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], ["class", "po-field-icon-container-left", 4, "ngIf"], [1, "po-input", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "type", "blur", "click", "focus", "input"], ["inp", ""], [1, "po-field-icon-container-right"], [3, "class", "p-element-ref", "p-change-event", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-field-icon-container-left"], [3, "p-icon"], [3, "p-element-ref", "p-change-event"]], template: function PoInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoInputComponent_div_2_Template, 2, 6, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoInputComponent_Template_input_blur_3_listener($event) { return ctx.eventOnBlur($event); })("click", function PoInputComponent_Template_input_click_3_listener($event) { return ctx.eventOnClick($event); })("focus", function PoInputComponent_Template_input_focus_3_listener($event) { return ctx.eventOnFocus($event); })("input", function PoInputComponent_Template_input_input_3_listener($event) { return ctx.eventOnInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PoInputComponent_po_clean_6_Template, 1, 4, "po-clean", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(7, "po-field-container-bottom", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-input-icon-left", ctx.icon)("po-input-icon-right", ctx.clean);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required)("type", ctx.type);
        i0.ɵɵattribute("name", ctx.name)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled && !ctx.readonly);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorPattern());
    } }, dependencies: [i1.NgIf, i2.PoCleanComponent, i3.PoFieldContainerBottomComponent, i4.PoFieldContainerComponent, i5.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoInputComponent, [{
        type: Component,
        args: [{ selector: 'po-input', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoInputComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoInputComponent),
                        multi: true
                    }
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div *ngIf=\"icon\" class=\"po-field-icon-container-left\">\r\n      <po-icon\r\n        class=\"po-field-icon {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n        [p-icon]=\"icon\"\r\n      ></po-icon>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input\"\r\n      [attr.name]=\"name\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-icon-left]=\"icon\"\r\n      [class.po-input-icon-right]=\"clean\"\r\n      [attr.aria-label]=\"label\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [type]=\"type\"\r\n      (blur)=\"eventOnBlur($event)\"\r\n      (click)=\"eventOnClick($event)\"\r\n      (focus)=\"eventOnFocus($event)\"\r\n      (input)=\"eventOnInput($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"{{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPattern()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWlucHV0L3BvLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1pbnB1dC9wby1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7O0lDRGxFLDhCQUF1RDtJQUNyRCw2QkFJVztJQUNiLGlCQUFNOzs7SUFKRixlQUFpRjtJQUFqRiw2R0FBaUY7SUFDakYseURBQXlDO0lBQ3pDLG9DQUFlOzs7O0lBd0JqQixvQ0FLQztJQURDLDRMQUFrQixlQUFBLG9CQUFhLENBQUEsSUFBQztJQUVsQyxpQkFBVzs7O0lBTFQsMkVBQW1FO0lBRW5FLDhDQUF5Qjs7QUQ1QmpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBa0JILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBQ2xELDBCQUEwQjtJQUMxQixZQUFZLEVBQWMsRUFBRSxFQUFxQjtRQUMvQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlLENBQUMsQ0FBa0I7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnRkFSVSxnQkFBZ0I7bUVBQWhCLGdCQUFnQiw4REFkaEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMvQyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9DLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQ3ZDSCw2Q0FBMkYsYUFBQTtRQUV2RixpRUFNTTtRQUVOLG1DQWlCRTtRQUpBLGdHQUFRLHVCQUFtQixJQUFDLHFGQUNuQix3QkFBb0IsSUFERCxxRkFFbkIsd0JBQW9CLElBRkQscUZBR25CLHdCQUFvQixJQUhEO1FBYjlCLGlCQWlCRTtRQUVGLDhCQUEyQztRQUN6QywyRUFNVztRQUNiLGlCQUFNLEVBQUE7UUFHUiwrQ0FBOEY7UUFDaEcsaUJBQXFCOztRQXpDRCxpQ0FBZSxzQkFBQSw2Q0FBQTtRQUV6QixlQUFVO1FBQVYsK0JBQVU7UUFhZCxlQUFpQztRQUFqQyw4Q0FBaUMsa0NBQUE7UUFEakMsK0NBQTZCLDBCQUFBLG9EQUFBLDBCQUFBLDBCQUFBLGtCQUFBO1FBRDdCLGdDQUFrQix5QkFBQTtRQW1CZixlQUFxQztRQUFyQyxrRUFBcUM7UUFRakIsZUFBcUM7UUFBckMsdURBQXFDOzt1RkRFckQsZ0JBQWdCO2NBakI1QixTQUFTOzJCQUNFLFVBQVUsYUFFVDtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQzt3QkFDL0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDO3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRixtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQb0lucHV0R2VuZXJpYyB9IGZyb20gJy4uL3BvLWlucHV0LWdlbmVyaWMvcG8taW5wdXQtZ2VuZXJpYyc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvSW5wdXRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1pbnB1dC1iYXNpY1wiIHRpdGxlPVwiUE8gSW5wdXQgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8taW5wdXQtYmFzaWMvc2FtcGxlLXBvLWlucHV0LWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8taW5wdXQtYmFzaWMvc2FtcGxlLXBvLWlucHV0LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWlucHV0LWxhYnNcIiB0aXRsZT1cIlBPIElucHV0IExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8taW5wdXQtbGFicy9zYW1wbGUtcG8taW5wdXQtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWlucHV0LWxhYnMvc2FtcGxlLXBvLWlucHV0LWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8taW5wdXQtcmVhY3RpdmUtZm9ybVwiIHRpdGxlPVwiUE8gSW5wdXQgLSBSZWFjdGl2ZSBGb3JtXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWlucHV0LXJlYWN0aXZlLWZvcm0vc2FtcGxlLXBvLWlucHV0LXJlYWN0aXZlLWZvcm0uY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1pbnB1dC1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1pbnB1dC1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8taW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0lucHV0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBQb0lucHV0R2VuZXJpYyB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbCwgY2QpO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFWYWxpZGF0aW9uKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtaGVscF09XCJoZWxwXCIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1sZWZ0XCI+XHJcbiAgICAgIDxwby1pY29uXHJcbiAgICAgICAgY2xhc3M9XCJwby1maWVsZC1pY29uIHt7IGRpc2FibGVkID8gJ3BvLWljb24taW5wdXQtZGlzYWJsZWQnIDogJ3BvLWljb24taW5wdXQnIH19XCJcclxuICAgICAgICBbY2xhc3MucG8tZmllbGQtaWNvbi1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3AtaWNvbl09XCJpY29uXCJcclxuICAgICAgPjwvcG8taWNvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wXHJcbiAgICAgIGNsYXNzPVwicG8taW5wdXRcIlxyXG4gICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1pY29uLWxlZnRdPVwiaWNvblwiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1pY29uLXJpZ2h0XT1cImNsZWFuXCJcclxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJkaXNhYmxlZCA/ICcnIDogcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgKGJsdXIpPVwiZXZlbnRPbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgIChjbGljayk9XCJldmVudE9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJldmVudE9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChpbnB1dCk9XCJldmVudE9uSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1yaWdodFwiPlxyXG4gICAgICA8cG8tY2xlYW5cclxuICAgICAgICBjbGFzcz1cInt7IGRpc2FibGVkID8gJ3BvLWljb24taW5wdXQtZGlzYWJsZWQnIDogJ3BvLWljb24taW5wdXQnIH19XCJcclxuICAgICAgICAqbmdJZj1cImNsZWFuICYmICFkaXNhYmxlZCAmJiAhcmVhZG9ubHlcIlxyXG4gICAgICAgIFtwLWVsZW1lbnQtcmVmXT1cImlucHV0RWxcIlxyXG4gICAgICAgIChwLWNoYW5nZS1ldmVudCk9XCJjbGVhcigkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWNsZWFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxwby1maWVsZC1jb250YWluZXItYm90dG9tIFtwLWVycm9yLXBhdHRlcm5dPVwiZ2V0RXJyb3JQYXR0ZXJuKClcIj4gPC9wby1maWVsZC1jb250YWluZXItYm90dG9tPlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19