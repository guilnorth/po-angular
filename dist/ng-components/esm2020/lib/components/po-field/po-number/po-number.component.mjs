import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { minFailed, maxFailed } from '../validators';
import { PoNumberBaseComponent } from './po-number-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-clean/po-clean.component";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
import * as i5 from "../../po-icon/po-icon.component";
function PoNumberComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "po-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-field-icon-disabled", ctx_r0.disabled);
    i0.ɵɵproperty("p-icon", ctx_r0.icon);
} }
function PoNumberComponent_po_clean_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 10);
    i0.ɵɵlistener("p-change-event", function PoNumberComponent_po_clean_6_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-default-value", null)("p-element-ref", ctx_r2.inputEl);
} }
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * O `po-number` é um input específico para receber apenas números.
 * É possível configurar um valor mínimo, máximo e um step com p-min, p-max e p-step,
 * respectivamente.
 *
 * @example
 *
 * <example name="po-number-basic" title="PO Number Basic">
 *  <file name="sample-po-number-basic/sample-po-number-basic.component.html"> </file>
 *  <file name="sample-po-number-basic/sample-po-number-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-number-labs" title="PO Number Labs">
 *  <file name="sample-po-number-labs/sample-po-number-labs.component.html"> </file>
 *  <file name="sample-po-number-labs/sample-po-number-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-number-calculate" title="PO Number - Calculate">
 *  <file name="sample-po-number-calculate/sample-po-number-calculate.component.html"> </file>
 *  <file name="sample-po-number-calculate/sample-po-number-calculate.component.ts"> </file>
 * </example>
 */
export class PoNumberComponent extends PoNumberBaseComponent {
    /* istanbul ignore next */
    constructor(el, cd) {
        super(el, cd);
        /**
         * @optional
         *
         * @description
         *
         * Intervalo.
         *
         * @default 1
         */
        this.step = '1';
    }
    set setMin(min) {
        this.min = !isNaN(min) ? min : undefined;
        this.validateModel();
    }
    set setMax(max) {
        this.max = !isNaN(max) ? max : undefined;
        this.validateModel();
    }
    extraValidation(abstractControl) {
        // Verifica se já possui algum error pattern padrão.
        this.errorPattern = this.errorPattern !== 'Valor Inválido' ? this.errorPattern : '';
        if (minFailed(this.min, abstractControl.value)) {
            return {
                min: {
                    valid: false
                }
            };
        }
        if (maxFailed(this.max, abstractControl.value)) {
            return {
                max: {
                    valid: false
                }
            };
        }
        if (this.invalidInputValueOnBlur) {
            this.errorPattern = this.errorPattern || 'Valor Inválido';
            return {
                number: {
                    valid: false
                }
            };
        }
        return null;
    }
    getErrorPatternMessage() {
        return this.errorPattern !== '' && this.containsInvalidClass() ? this.errorPattern : '';
    }
    containsInvalidClass() {
        return ((this.el.nativeElement.classList.contains('ng-invalid') &&
            this.el.nativeElement.classList.contains('ng-dirty') &&
            this.inputEl.nativeElement.value !== '') ||
            this.invalidInputValueOnBlur);
    }
}
PoNumberComponent.ɵfac = function PoNumberComponent_Factory(t) { return new (t || PoNumberComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoNumberComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNumberComponent, selectors: [["po-number"]], inputs: { step: ["p-step", "step"], setMin: ["p-min", "setMin"], setMax: ["p-max", "setMax"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoNumberComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoNumberComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 21, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], ["class", "po-field-icon-container-left", 4, "ngIf"], ["type", "number", 1, "po-input", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "tabindex", "blur", "focus", "input", "keydown"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-default-value", "p-element-ref", "p-change-event", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-field-icon-container-left"], [1, "po-field-icon", "po-icon-input", 3, "p-icon"], [1, "po-icon-input", 3, "p-default-value", "p-element-ref", "p-change-event"]], template: function PoNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoNumberComponent_div_2_Template, 2, 3, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoNumberComponent_Template_input_blur_3_listener($event) { return ctx.onBlur($event); })("focus", function PoNumberComponent_Template_input_focus_3_listener($event) { return ctx.eventOnFocus($event); })("input", function PoNumberComponent_Template_input_input_3_listener($event) { return ctx.eventOnInput($event); })("keydown", function PoNumberComponent_Template_input_keydown_3_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PoNumberComponent_po_clean_6_Template, 1, 2, "po-clean", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(7, "po-field-container-bottom", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-input-icon-left", ctx.icon)("po-input-icon-right", ctx.clean);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required)("tabindex", ctx.disabled ? -1 : 0);
        i0.ɵɵattribute("max", ctx.max)("min", ctx.min)("name", ctx.name)("step", ctx.step)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled && !ctx.readonly);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorPatternMessage());
    } }, dependencies: [i1.NgIf, i2.PoCleanComponent, i3.PoFieldContainerBottomComponent, i4.PoFieldContainerComponent, i5.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNumberComponent, [{
        type: Component,
        args: [{ selector: 'po-number', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoNumberComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoNumberComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div *ngIf=\"icon\" class=\"po-field-icon-container-left\">\r\n      <po-icon class=\"po-field-icon po-icon-input\" [class.po-field-icon-disabled]=\"disabled\" [p-icon]=\"icon\"></po-icon>\r\n    </div>\r\n    <input\r\n      #inp\r\n      class=\"po-input\"\r\n      type=\"number\"\r\n      [attr.max]=\"max\"\r\n      [attr.min]=\"min\"\r\n      [attr.name]=\"name\"\r\n      [attr.step]=\"step\"\r\n      [attr.aria-label]=\"label\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-icon-left]=\"icon\"\r\n      [class.po-input-icon-right]=\"clean\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [tabindex]=\"disabled ? -1 : 0\"\r\n      (blur)=\"onBlur($event)\"\r\n      (focus)=\"eventOnFocus($event)\"\r\n      (input)=\"eventOnInput($event)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-default-value]=\"null\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPatternMessage()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { step: [{
            type: Input,
            args: ['p-step']
        }], setMin: [{
            type: Input,
            args: ['p-min']
        }], setMax: [{
            type: Input,
            args: ['p-max']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1udW1iZXIvcG8tbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1udW1iZXIvcG8tbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFxQix1QkFBdUIsRUFBRSxTQUFTLEVBQWMsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7SUNIL0QsOEJBQXVEO0lBQ3JELDZCQUFpSDtJQUNuSCxpQkFBTTs7O0lBRHlDLGVBQXlDO0lBQXpDLHlEQUF5QztJQUFDLG9DQUFlOzs7O0lBMEJ0RyxvQ0FNQztJQURDLDZMQUFrQixlQUFBLG9CQUFhLENBQUEsSUFBQztJQUVsQyxpQkFBVzs7O0lBSlQsc0NBQXdCLGlDQUFBOztBRHpCaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFrQkgsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFxQjtJQWdDMUQsMEJBQTBCO0lBQzFCLFlBQVksRUFBYyxFQUFFLEVBQXFCO1FBQy9DLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFqQ2hCOzs7Ozs7OztXQVFHO1FBQ2MsU0FBSSxHQUFZLEdBQUcsQ0FBQztJQXlCckMsQ0FBQztJQWxCRCxJQUFv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RXpCLGVBQVU7UUFBViwrQkFBVTtRQWFkLGVBQWlDO1FBQWpDLDhDQUFpQyxrQ0FBQTtRQURqQywrQ0FBNkIsMEJBQUEsb0RBQUEsMEJBQUEsMEJBQUEsbUNBQUE7UUFMN0IsOEJBQWdCLGdCQUFBLGtCQUFBLGtCQUFBLHlCQUFBO1FBc0JiLGVBQXFDO1FBQXJDLGtFQUFxQztRQVNqQixlQUE0QztRQUE1Qyw4REFBNEM7O3VGRFU1RCxpQkFBaUI7Y0FqQjdCLFNBQVM7MkJBQ0UsV0FBVyxtQkFFSix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzZGQVlnQixJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFPSyxNQUFNO2tCQUF6QixLQUFLO21CQUFDLE9BQU87WUFVTSxNQUFNO2tCQUF6QixLQUFLO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG1pbkZhaWxlZCwgbWF4RmFpbGVkIH0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb051bWJlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLW51bWJlci1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvSW5wdXRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1udW1iZXJgIMOpIHVtIGlucHV0IGVzcGVjw61maWNvIHBhcmEgcmVjZWJlciBhcGVuYXMgbsO6bWVyb3MuXHJcbiAqIMOJIHBvc3PDrXZlbCBjb25maWd1cmFyIHVtIHZhbG9yIG3DrW5pbW8sIG3DoXhpbW8gZSB1bSBzdGVwIGNvbSBwLW1pbiwgcC1tYXggZSBwLXN0ZXAsXHJcbiAqIHJlc3BlY3RpdmFtZW50ZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW51bWJlci1iYXNpY1wiIHRpdGxlPVwiUE8gTnVtYmVyIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW51bWJlci1iYXNpYy9zYW1wbGUtcG8tbnVtYmVyLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbnVtYmVyLWJhc2ljL3NhbXBsZS1wby1udW1iZXItYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbnVtYmVyLWxhYnNcIiB0aXRsZT1cIlBPIE51bWJlciBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW51bWJlci1sYWJzL3NhbXBsZS1wby1udW1iZXItbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW51bWJlci1sYWJzL3NhbXBsZS1wby1udW1iZXItbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1udW1iZXItY2FsY3VsYXRlXCIgdGl0bGU9XCJQTyBOdW1iZXIgLSBDYWxjdWxhdGVcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbnVtYmVyLWNhbGN1bGF0ZS9zYW1wbGUtcG8tbnVtYmVyLWNhbGN1bGF0ZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW51bWJlci1jYWxjdWxhdGUvc2FtcGxlLXBvLW51bWJlci1jYWxjdWxhdGUuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1udW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9OdW1iZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9OdW1iZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgUG9OdW1iZXJCYXNlQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW50ZXJ2YWxvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgMVxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zdGVwJykgc3RlcD86IHN0cmluZyA9ICcxJztcclxuXHJcbiAgLyoqIFZhbG9yIG3DrW5pbW8uXHJcbiAgICpcclxuICAgKiA+IFF1YW5kbyBvIHZhbG9yIG3DrW5pbW8gZm9yIHVtIG7Dum1lcm8gY29tIGRlY2ltYWlzIGFjb25zZWxoYS1zZSB1dGlsaXphciBqdW50byBkYSBwcm9wcmllZGFkZSBgcC1zdGVwYCB0YW1iw6ltIHBhc3NhbmRvIGEgZWxhIHVtIHZhbG9yIGRlY2ltYWwuXHJcbiAgICovXHJcbiAgbWluPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgncC1taW4nKSBzZXQgc2V0TWluKG1pbjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1pbiA9ICFpc05hTihtaW4pID8gbWluIDogdW5kZWZpbmVkO1xyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgfVxyXG5cclxuICAvKiogVmFsb3IgbcOheGltby5cclxuICAgKlxyXG4gICAqID4gUXVhbmRvIG8gdmFsb3IgbcOheGltbyBmb3IgdW0gbsO6bWVybyBjb20gZGVjaW1haXMgYWNvbnNlbGhhLXNlIHV0aWxpemFyIGp1bnRvIGRhIHByb3ByaWVkYWRlIGBwLXN0ZXBgIHRhbWLDqW0gcGFzc2FuZG8gYSBlbGEgdW0gdmFsb3IgZGVjaW1hbC5cclxuICAgKi9cclxuICBtYXg/OiBudW1iZXI7XHJcbiAgQElucHV0KCdwLW1heCcpIHNldCBzZXRNYXgobWF4OiBudW1iZXIpIHtcclxuICAgIHRoaXMubWF4ID0gIWlzTmFOKG1heCkgPyBtYXggOiB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwoKTtcclxuICB9XHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWwsIGNkKTtcclxuICB9XHJcblxyXG4gIGV4dHJhVmFsaWRhdGlvbihhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgLy8gVmVyaWZpY2Egc2UgasOhIHBvc3N1aSBhbGd1bSBlcnJvciBwYXR0ZXJuIHBhZHLDo28uXHJcbiAgICB0aGlzLmVycm9yUGF0dGVybiA9IHRoaXMuZXJyb3JQYXR0ZXJuICE9PSAnVmFsb3IgSW52w6FsaWRvJyA/IHRoaXMuZXJyb3JQYXR0ZXJuIDogJyc7XHJcblxyXG4gICAgaWYgKG1pbkZhaWxlZCh0aGlzLm1pbiwgYWJzdHJhY3RDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjoge1xyXG4gICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXhGYWlsZWQodGhpcy5tYXgsIGFic3RyYWN0Q29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYXg6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnZhbGlkSW5wdXRWYWx1ZU9uQmx1cikge1xyXG4gICAgICB0aGlzLmVycm9yUGF0dGVybiA9IHRoaXMuZXJyb3JQYXR0ZXJuIHx8ICdWYWxvciBJbnbDoWxpZG8nO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldEVycm9yUGF0dGVybk1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lcnJvclBhdHRlcm4gIT09ICcnICYmIHRoaXMuY29udGFpbnNJbnZhbGlkQ2xhc3MoKSA/IHRoaXMuZXJyb3JQYXR0ZXJuIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnRhaW5zSW52YWxpZENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSAmJlxyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWRpcnR5JykgJiZcclxuICAgICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSAhPT0gJycpIHx8XHJcbiAgICAgIHRoaXMuaW52YWxpZElucHV0VmFsdWVPbkJsdXJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtaGVscF09XCJoZWxwXCIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1sZWZ0XCI+XHJcbiAgICAgIDxwby1pY29uIGNsYXNzPVwicG8tZmllbGQtaWNvbiBwby1pY29uLWlucHV0XCIgW2NsYXNzLnBvLWZpZWxkLWljb24tZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbcC1pY29uXT1cImljb25cIj48L3BvLWljb24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wXHJcbiAgICAgIGNsYXNzPVwicG8taW5wdXRcIlxyXG4gICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgW2F0dHIubWF4XT1cIm1heFwiXHJcbiAgICAgIFthdHRyLm1pbl09XCJtaW5cIlxyXG4gICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbYXR0ci5zdGVwXT1cInN0ZXBcIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxyXG4gICAgICBbY2xhc3MucG8taW5wdXQtaWNvbi1sZWZ0XT1cImljb25cIlxyXG4gICAgICBbY2xhc3MucG8taW5wdXQtaWNvbi1yaWdodF09XCJjbGVhblwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJkaXNhYmxlZCA/ICcnIDogcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbdGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IDBcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJldmVudE9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChpbnB1dCk9XCJldmVudE9uSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgKm5nSWY9XCJjbGVhbiAmJiAhZGlzYWJsZWQgJiYgIXJlYWRvbmx5XCJcclxuICAgICAgICBbcC1kZWZhdWx0LXZhbHVlXT1cIm51bGxcIlxyXG4gICAgICAgIFtwLWVsZW1lbnQtcmVmXT1cImlucHV0RWxcIlxyXG4gICAgICAgIChwLWNoYW5nZS1ldmVudCk9XCJjbGVhcigkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWNsZWFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxwby1maWVsZC1jb250YWluZXItYm90dG9tIFtwLWVycm9yLXBhdHRlcm5dPVwiZ2V0RXJyb3JQYXR0ZXJuTWVzc2FnZSgpXCI+IDwvcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT5cclxuPC9wby1maWVsZC1jb250YWluZXI+XHJcbiJdfQ==