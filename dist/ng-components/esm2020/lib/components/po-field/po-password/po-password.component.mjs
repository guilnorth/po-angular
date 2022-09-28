import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-clean/po-clean.component";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
function PoPasswordComponent_po_clean_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 9);
    i0.ɵɵlistener("p-change-event", function PoPasswordComponent_po_clean_7_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-element-ref", ctx_r1.inputEl);
} }
function PoPasswordComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵlistener("click", function PoPasswordComponent_span_8_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.showPassword()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.visiblePassword ? "po-icon-eye" : "po-icon-eye-off po-field-icon-disabled");
} }
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 * O po-password é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.
 *
 * @example
 *
 * <example name="po-password-basic" title="PO Password Basic">
 *   <file name="sample-po-password-basic/sample-po-password-basic.component.html"> </file>
 *   <file name="sample-po-password-basic/sample-po-password-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-password-labs" title="PO Password Labs">
 *   <file name="sample-po-password-labs/sample-po-password-labs.component.html"> </file>
 *   <file name="sample-po-password-labs/sample-po-password-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-password-reset" title="PO Password - Reset">
 *   <file name="sample-po-password-reset/sample-po-password-reset.component.html"> </file>
 *   <file name="sample-po-password-reset/sample-po-password-reset.component.ts"> </file>
 * </example>
 */
export class PoPasswordComponent extends PoInputGeneric {
    /* istanbul ignore next */
    constructor(el, cd) {
        super(el, cd);
        this.type = 'password';
        this.visiblePassword = false;
        this._hidePasswordPeek = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Permite esconder a função de espiar a senha digitada.
     *
     * @default `false`
     */
    set hidePasswordPeek(value) {
        this._hidePasswordPeek = convertToBoolean(value);
        if (value) {
            this.visiblePassword = false;
            this.type = 'password';
        }
    }
    get hidePasswordPeek() {
        return this._hidePasswordPeek;
    }
    get autocomplete() {
        return this.noAutocomplete ? 'new-password' : 'on';
    }
    extraValidation(c) {
        return null;
    }
    showPassword() {
        this.visiblePassword = !this.visiblePassword;
        this.type = this.type === 'password' ? 'text' : 'password';
    }
}
PoPasswordComponent.ɵfac = function PoPasswordComponent_Factory(t) { return new (t || PoPasswordComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPasswordComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPasswordComponent, selectors: [["po-password"]], inputs: { hidePasswordPeek: ["p-hide-password-peek", "hidePasswordPeek"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoPasswordComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoPasswordComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 23, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-field-container-content"], [1, "po-field-icon-container-left"], [1, "po-input", "po-input-icon-left", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "type", "blur", "click", "focus", "input"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-element-ref", "p-change-event", 4, "ngIf"], ["class", "po-icon po-field-icon po-icon-input", 3, "ngClass", "click", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-icon-input", 3, "p-element-ref", "p-change-event"], [1, "po-icon", "po-field-icon", "po-icon-input", 3, "ngClass", "click"]], template: function PoPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoPasswordComponent_Template_input_blur_4_listener($event) { return ctx.eventOnBlur($event); })("click", function PoPasswordComponent_Template_input_click_4_listener($event) { return ctx.eventOnClick($event); })("focus", function PoPasswordComponent_Template_input_focus_4_listener($event) { return ctx.eventOnFocus($event); })("input", function PoPasswordComponent_Template_input_input_4_listener($event) { return ctx.eventOnInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵtemplate(7, PoPasswordComponent_po_clean_7_Template, 1, 1, "po-clean", 6);
        i0.ɵɵtemplate(8, PoPasswordComponent_span_8_Template, 1, 1, "span", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(9, "po-field-container-bottom", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(3);
        i0.ɵɵclassMapInterpolate1("po-icon po-field-icon po-icon-lock ", ctx.disabled ? "po-icon-input-disabled" : "po-icon-input", "");
        i0.ɵɵclassProp("po-field-icon-disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-input-double-icon-right", ctx.clean && _r0.value && !ctx.hidePasswordPeek)("po-input-icon-right", ctx.clean || !ctx.hidePasswordPeek);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required)("type", ctx.disabled ? "password" : ctx.type);
        i0.ɵɵattribute("name", ctx.name)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled && !ctx.readonly);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hidePasswordPeek && !ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorPattern());
    } }, dependencies: [i1.NgClass, i1.NgIf, i2.PoCleanComponent, i3.PoFieldContainerBottomComponent, i4.PoFieldContainerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPasswordComponent, [{
        type: Component,
        args: [{ selector: 'po-password', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoPasswordComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoPasswordComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div class=\"po-field-icon-container-left\">\r\n      <span\r\n        class=\"po-icon po-field-icon po-icon-lock {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n      >\r\n      </span>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input po-input-icon-left\"\r\n      [attr.name]=\"name\"\r\n      [attr.aria-label]=\"label\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-double-icon-right]=\"clean && inp.value && !hidePasswordPeek\"\r\n      [class.po-input-icon-right]=\"clean || !hidePasswordPeek\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [type]=\"disabled ? 'password' : type\"\r\n      (blur)=\"eventOnBlur($event)\"\r\n      (click)=\"eventOnClick($event)\"\r\n      (focus)=\"eventOnFocus($event)\"\r\n      (input)=\"eventOnInput($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n\r\n      <span\r\n        *ngIf=\"!hidePasswordPeek && !disabled\"\r\n        class=\"po-icon po-field-icon po-icon-input\"\r\n        [ngClass]=\"visiblePassword ? 'po-icon-eye' : 'po-icon-eye-off po-field-icon-disabled'\"\r\n        (click)=\"showPassword()\"\r\n      >\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPattern()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { hidePasswordPeek: [{
            type: Input,
            args: ['p-hide-password-peek']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXBhc3N3b3JkL3BvLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1wYXNzd29yZC9wby1wYXNzd29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7OztJQzBCaEUsbUNBS0M7SUFEQywrTEFBa0IsZUFBQSxvQkFBYSxDQUFBLElBQUM7SUFFbEMsaUJBQVc7OztJQUhULDhDQUF5Qjs7OztJQUszQixnQ0FLQztJQURDLCtKQUFTLGVBQUEscUJBQWMsQ0FBQSxJQUFDO0lBRTFCLGlCQUFPOzs7SUFITCwyR0FBc0Y7O0FEbkM5Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQWtCSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYztJQStCckQsMEJBQTBCO0lBQzFCLFlBQVksRUFBYyxFQUFFLEVBQXFCO1FBQy9DLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFoQ2hCLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFaEIsc0JBQWlCLEdBQWEsS0FBSyxDQUFDO0lBOEI1QyxDQUFDO0lBNUJEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBbUMsZ0JBQWdCLENBQUMsS0FBYztRQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBT0QsZUFBZSxDQUFDLENBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM3RCxDQUFDOztzRkEzQ1UsbUJBQW1CO3NFQUFuQixtQkFBbUIsNklBYm5CO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbEQsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNsRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUM1Q0gsNkNBQTJGLGFBQUEsYUFBQTtRQUdyRix1QkFJTztRQUNULGlCQUFNO1FBRU4sbUNBaUJFO1FBSkEsbUdBQVEsdUJBQW1CLElBQUMsd0ZBQ25CLHdCQUFvQixJQURELHdGQUVuQix3QkFBb0IsSUFGRCx3RkFHbkIsd0JBQW9CLElBSEQ7UUFiOUIsaUJBaUJFO1FBRUYsOEJBQTJDO1FBQ3pDLDhFQU1XO1FBRVgsc0VBTU87UUFDVCxpQkFBTSxFQUFBO1FBR1IsK0NBQThGO1FBQ2hHLGlCQUFxQjs7O1FBakRELG1DQUFpQixvQkFBQSw2Q0FBQTtRQUk3QixlQUFzRztRQUF0RywrSEFBc0c7UUFDdEcsc0RBQXlDO1FBVzNDLGVBQTRFO1FBQTVFLDZGQUE0RSwyREFBQTtRQUQ1RSwrQ0FBNkIsMEJBQUEsb0RBQUEsMEJBQUEsMEJBQUEsOENBQUE7UUFGN0IsZ0NBQWtCLHlCQUFBO1FBbUJmLGVBQXFDO1FBQXJDLGtFQUFxQztRQU9yQyxlQUFvQztRQUFwQyw2REFBb0M7UUFTaEIsZUFBcUM7UUFBckMsdURBQXFDOzt1RkRGckQsbUJBQW1CO2NBakIvQixTQUFTOzJCQUNFLGFBQWEsbUJBRU4sdUJBQXVCLENBQUMsTUFBTSxhQUNwQztvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs2RkFpQmtDLGdCQUFnQjtrQkFBbEQsS0FBSzttQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9JbnB1dEdlbmVyaWMgfSBmcm9tICcuLi9wby1pbnB1dC1nZW5lcmljL3BvLWlucHV0LWdlbmVyaWMnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0lucHV0QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTyBwby1wYXNzd29yZCDDqSB1bSBpbnB1dCBlc3BlY8OtZmljbyBwYXJhIHNlbmhhcy4gSsOhIHBvc3N1aSB0aXBvLCBlc3RpbG8gZSDDrWNvbmUgcHJlZGVmaW5pZG9zLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFzc3dvcmQtYmFzaWNcIiB0aXRsZT1cIlBPIFBhc3N3b3JkIEJhc2ljXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYXNzd29yZC1iYXNpYy9zYW1wbGUtcG8tcGFzc3dvcmQtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFzc3dvcmQtYmFzaWMvc2FtcGxlLXBvLXBhc3N3b3JkLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhc3N3b3JkLWxhYnNcIiB0aXRsZT1cIlBPIFBhc3N3b3JkIExhYnNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhc3N3b3JkLWxhYnMvc2FtcGxlLXBvLXBhc3N3b3JkLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFzc3dvcmQtbGFicy9zYW1wbGUtcG8tcGFzc3dvcmQtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYXNzd29yZC1yZXNldFwiIHRpdGxlPVwiUE8gUGFzc3dvcmQgLSBSZXNldFwiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFzc3dvcmQtcmVzZXQvc2FtcGxlLXBvLXBhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhc3N3b3JkLXJlc2V0L3NhbXBsZS1wby1wYXNzd29yZC1yZXNldC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9QYXNzd29yZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb1Bhc3N3b3JkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1Bhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgUG9JbnB1dEdlbmVyaWMge1xyXG4gIHR5cGUgPSAncGFzc3dvcmQnO1xyXG4gIHZpc2libGVQYXNzd29yZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9oaWRlUGFzc3dvcmRQZWVrPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUGVybWl0ZSBlc2NvbmRlciBhIGZ1bsOnw6NvIGRlIGVzcGlhciBhIHNlbmhhIGRpZ2l0YWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXBhc3N3b3JkLXBlZWsnKSBzZXQgaGlkZVBhc3N3b3JkUGVlayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faGlkZVBhc3N3b3JkUGVlayA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZVBhc3N3b3JkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZVBhc3N3b3JkUGVlaygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlUGFzc3dvcmRQZWVrO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9jb21wbGV0ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubm9BdXRvY29tcGxldGUgPyAnbmV3LXBhc3N3b3JkJyA6ICdvbic7XHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsLCBjZCk7XHJcbiAgfVxyXG5cclxuICBleHRyYVZhbGlkYXRpb24oYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHNob3dQYXNzd29yZCgpIHtcclxuICAgIHRoaXMudmlzaWJsZVBhc3N3b3JkID0gIXRoaXMudmlzaWJsZVBhc3N3b3JkO1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy50eXBlID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLWhlbHBdPVwiaGVscFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLWxlZnRcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzcz1cInBvLWljb24gcG8tZmllbGQtaWNvbiBwby1pY29uLWxvY2sge3sgZGlzYWJsZWQgPyAncG8taWNvbi1pbnB1dC1kaXNhYmxlZCcgOiAncG8taWNvbi1pbnB1dCcgfX1cIlxyXG4gICAgICAgIFtjbGFzcy5wby1maWVsZC1pY29uLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucFxyXG4gICAgICBjbGFzcz1cInBvLWlucHV0IHBvLWlucHV0LWljb24tbGVmdFwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1kb3VibGUtaWNvbi1yaWdodF09XCJjbGVhbiAmJiBpbnAudmFsdWUgJiYgIWhpZGVQYXNzd29yZFBlZWtcIlxyXG4gICAgICBbY2xhc3MucG8taW5wdXQtaWNvbi1yaWdodF09XCJjbGVhbiB8fCAhaGlkZVBhc3N3b3JkUGVla1wiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJkaXNhYmxlZCA/ICcnIDogcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbdHlwZV09XCJkaXNhYmxlZCA/ICdwYXNzd29yZCcgOiB0eXBlXCJcclxuICAgICAgKGJsdXIpPVwiZXZlbnRPbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgIChjbGljayk9XCJldmVudE9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJldmVudE9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChpbnB1dCk9XCJldmVudE9uSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1yaWdodFwiPlxyXG4gICAgICA8cG8tY2xlYW5cclxuICAgICAgICBjbGFzcz1cInBvLWljb24taW5wdXRcIlxyXG4gICAgICAgICpuZ0lmPVwiY2xlYW4gJiYgIWRpc2FibGVkICYmICFyZWFkb25seVwiXHJcbiAgICAgICAgW3AtZWxlbWVudC1yZWZdPVwiaW5wdXRFbFwiXHJcbiAgICAgICAgKHAtY2hhbmdlLWV2ZW50KT1cImNsZWFyKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tY2xlYW4+XHJcblxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiIWhpZGVQYXNzd29yZFBlZWsgJiYgIWRpc2FibGVkXCJcclxuICAgICAgICBjbGFzcz1cInBvLWljb24gcG8tZmllbGQtaWNvbiBwby1pY29uLWlucHV0XCJcclxuICAgICAgICBbbmdDbGFzc109XCJ2aXNpYmxlUGFzc3dvcmQgPyAncG8taWNvbi1leWUnIDogJ3BvLWljb24tZXllLW9mZiBwby1maWVsZC1pY29uLWRpc2FibGVkJ1wiXHJcbiAgICAgICAgKGNsaWNrKT1cInNob3dQYXNzd29yZCgpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20gW3AtZXJyb3ItcGF0dGVybl09XCJnZXRFcnJvclBhdHRlcm4oKVwiPiA8L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG4iXX0=