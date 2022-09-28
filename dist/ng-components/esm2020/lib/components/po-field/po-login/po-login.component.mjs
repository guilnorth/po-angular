import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-clean/po-clean.component";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
function PoLoginComponent_po_clean_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 8);
    i0.ɵɵlistener("p-change-event", function PoLoginComponent_po_clean_7_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-element-ref", ctx_r1.inputEl);
} }
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoLoginComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoLoginComponent),
        multi: true
    }
];
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 * O po-login é um input específico para login. Já possui tipo, estilo e ícone predefinidos.
 *
 * @example
 *
 * <example name="po-login-basic" title="PO Login Basic">
 *  <file name="sample-po-login-basic/sample-po-login-basic.component.html"> </file>
 *  <file name="sample-po-login-basic/sample-po-login-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-login-labs" title="PO Login Labs">
 *  <file name="sample-po-login-labs/sample-po-login-labs.component.html"> </file>
 *  <file name="sample-po-login-labs/sample-po-login-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-login-confirm" title="PO Login - Confirm Identity">
 *  <file name="sample-po-login-confirm/sample-po-login-confirm.component.html"> </file>
 *  <file name="sample-po-login-confirm/sample-po-login-confirm.component.ts"> </file>
 * </example>
 *
 */
export class PoLoginComponent extends PoInputGeneric {
    /* istanbul ignore next */
    constructor(el, cd) {
        super(el, cd);
        this.type = 'text';
    }
    extraValidation(c) {
        return null;
    }
}
PoLoginComponent.ɵfac = function PoLoginComponent_Factory(t) { return new (t || PoLoginComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoLoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoLoginComponent, selectors: [["po-login"]], features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 20, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-field-container-content"], [1, "po-field-icon-container-left"], [1, "po-input", "po-input-icon-left", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "type", "blur", "click", "focus", "input"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-element-ref", "p-change-event", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-icon-input", 3, "p-element-ref", "p-change-event"]], template: function PoLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoLoginComponent_Template_input_blur_4_listener($event) { return ctx.eventOnBlur($event); })("click", function PoLoginComponent_Template_input_click_4_listener($event) { return ctx.eventOnClick($event); })("focus", function PoLoginComponent_Template_input_focus_4_listener($event) { return ctx.eventOnFocus($event); })("input", function PoLoginComponent_Template_input_input_4_listener($event) { return ctx.eventOnInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵtemplate(7, PoLoginComponent_po_clean_7_Template, 1, 1, "po-clean", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(8, "po-field-container-bottom", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(3);
        i0.ɵɵclassMapInterpolate1("po-icon po-field-icon po-icon-user ", ctx.disabled ? "po-icon-input-disabled" : "po-icon-input", "");
        i0.ɵɵclassProp("po-field-icon-disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-input-icon-right", ctx.clean);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required)("type", ctx.type);
        i0.ɵɵattribute("name", ctx.name)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled && !ctx.readonly);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorPattern());
    } }, dependencies: [i1.NgIf, i2.PoCleanComponent, i3.PoFieldContainerBottomComponent, i4.PoFieldContainerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoginComponent, [{
        type: Component,
        args: [{ selector: 'po-login', changeDetection: ChangeDetectionStrategy.OnPush, providers: providers, template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div class=\"po-field-icon-container-left\">\r\n      <span\r\n        class=\"po-icon po-field-icon po-icon-user {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n      ></span>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input po-input-icon-left\"\r\n      [attr.name]=\"name\"\r\n      [attr.aria-label]=\"label\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-icon-right]=\"clean\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [type]=\"type\"\r\n      (blur)=\"eventOnBlur($event)\"\r\n      (click)=\"eventOnClick($event)\"\r\n      (focus)=\"eventOnFocus($event)\"\r\n      (input)=\"eventOnInput($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPattern()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWxvZ2luL3BvLWxvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1sb2dpbi9wby1sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7O0lDeUJoRSxtQ0FLQztJQURDLDRMQUFrQixlQUFBLG9CQUFhLENBQUEsSUFBQztJQUVsQyxpQkFBVzs7O0lBSFQsOENBQXlCOztBRDFCakMsMEJBQTBCO0FBQzFCLE1BQU0sU0FBUyxHQUFHO0lBQ2hCO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQiwyQkFBMkI7UUFDM0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsYUFBYTtRQUN0QiwyQkFBMkI7UUFDM0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQU9ILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBR2xELDBCQUEwQjtJQUMxQixZQUFZLEVBQWMsRUFBRSxFQUFxQjtRQUMvQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBSmhCLFNBQUksR0FBRyxNQUFNLENBQUM7SUFLZCxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0ZBVlUsZ0JBQWdCO21FQUFoQixnQkFBZ0IsOERBRjNCLFNBQVM7UUNqRFgsNkNBQTJGLGFBQUEsYUFBQTtRQUdyRix1QkFHUTtRQUNWLGlCQUFNO1FBRU4sbUNBZ0JFO1FBSkEsZ0dBQVEsdUJBQW1CLElBQUMscUZBQ25CLHdCQUFvQixJQURELHFGQUVuQix3QkFBb0IsSUFGRCxxRkFHbkIsd0JBQW9CLElBSEQ7UUFaOUIsaUJBZ0JFO1FBRUYsOEJBQTJDO1FBQ3pDLDJFQU1XO1FBQ2IsaUJBQU0sRUFBQTtRQUdSLCtDQUE4RjtRQUNoRyxpQkFBcUI7O1FBdkNELG1DQUFpQixvQkFBQSw2Q0FBQTtRQUk3QixlQUFzRztRQUF0RywrSEFBc0c7UUFDdEcsc0RBQXlDO1FBVTNDLGVBQW1DO1FBQW5DLGdEQUFtQztRQURuQywrQ0FBNkIsMEJBQUEsb0RBQUEsMEJBQUEsMEJBQUEsa0JBQUE7UUFGN0IsZ0NBQWtCLHlCQUFBO1FBa0JmLGVBQXFDO1FBQXJDLGtFQUFxQztRQVFqQixlQUFxQztRQUFyQyx1REFBcUM7O3VGRGFyRCxnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDRSxVQUFVLG1CQUVILHVCQUF1QixDQUFDLE1BQU0sYUFDL0MsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQb0lucHV0R2VuZXJpYyB9IGZyb20gJy4uL3BvLWlucHV0LWdlbmVyaWMvcG8taW5wdXQtZ2VuZXJpYyc7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5jb25zdCBwcm92aWRlcnMgPSBbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvTG9naW5Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvTG9naW5Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XHJcbl07XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvSW5wdXRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBPIHBvLWxvZ2luIMOpIHVtIGlucHV0IGVzcGVjw61maWNvIHBhcmEgbG9naW4uIErDoSBwb3NzdWkgdGlwbywgZXN0aWxvIGUgw61jb25lIHByZWRlZmluaWRvcy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvZ2luLWJhc2ljXCIgdGl0bGU9XCJQTyBMb2dpbiBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb2dpbi1iYXNpYy9zYW1wbGUtcG8tbG9naW4tYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb2dpbi1iYXNpYy9zYW1wbGUtcG8tbG9naW4tYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbG9naW4tbGFic1wiIHRpdGxlPVwiUE8gTG9naW4gTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb2dpbi1sYWJzL3NhbXBsZS1wby1sb2dpbi1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9naW4tbGFicy9zYW1wbGUtcG8tbG9naW4tbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1sb2dpbi1jb25maXJtXCIgdGl0bGU9XCJQTyBMb2dpbiAtIENvbmZpcm0gSWRlbnRpdHlcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9naW4tY29uZmlybS9zYW1wbGUtcG8tbG9naW4tY29uZmlybS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvZ2luLWNvbmZpcm0vc2FtcGxlLXBvLWxvZ2luLWNvbmZpcm0uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWxvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnNcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTG9naW5Db21wb25lbnQgZXh0ZW5kcyBQb0lucHV0R2VuZXJpYyB7XHJcbiAgdHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbCwgY2QpO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFWYWxpZGF0aW9uKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1oZWxwXT1cImhlbHBcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1sZWZ0XCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJwby1pY29uIHBvLWZpZWxkLWljb24gcG8taWNvbi11c2VyIHt7IGRpc2FibGVkID8gJ3BvLWljb24taW5wdXQtZGlzYWJsZWQnIDogJ3BvLWljb24taW5wdXQnIH19XCJcclxuICAgICAgICBbY2xhc3MucG8tZmllbGQtaWNvbi1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucFxyXG4gICAgICBjbGFzcz1cInBvLWlucHV0IHBvLWlucHV0LWljb24tbGVmdFwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1pY29uLXJpZ2h0XT1cImNsZWFuXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cImRpc2FibGVkID8gJycgOiBwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAoYmx1cik9XCJldmVudE9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgKGNsaWNrKT1cImV2ZW50T25DbGljaygkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImV2ZW50T25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgKGlucHV0KT1cImV2ZW50T25JbnB1dCgkZXZlbnQpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgKm5nSWY9XCJjbGVhbiAmJiAhZGlzYWJsZWQgJiYgIXJlYWRvbmx5XCJcclxuICAgICAgICBbcC1lbGVtZW50LXJlZl09XCJpbnB1dEVsXCJcclxuICAgICAgICAocC1jaGFuZ2UtZXZlbnQpPVwiY2xlYXIoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPC9wby1jbGVhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbSBbcC1lcnJvci1wYXR0ZXJuXT1cImdldEVycm9yUGF0dGVybigpXCI+IDwvcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT5cclxuPC9wby1maWVsZC1jb250YWluZXI+XHJcbiJdfQ==