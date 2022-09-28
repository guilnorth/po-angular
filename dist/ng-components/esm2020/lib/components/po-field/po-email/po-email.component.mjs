import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-clean/po-clean.component";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
import * as i5 from "../../po-icon/po-icon.component";
function PoEmailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
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
function PoEmailComponent_po_clean_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 10);
    i0.ɵɵlistener("p-change-event", function PoEmailComponent_po_clean_6_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.disabled ? "po-icon-input-disabled" : "po-icon-input");
    i0.ɵɵproperty("p-element-ref", ctx_r2.inputEl);
} }
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoEmailComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoEmailComponent),
        multi: true
    }
];
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * po-email é um input específico para receber E-mail, com o pattern já configurado.
 *
 * @example
 *
 * <example name="po-email-basic" title="PO Email Basic">
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.html"> </file>
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.ts"> </file>
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-email-labs" title="PO Email Labs">
 *  <file name="sample-po-email-labs/sample-po-email-labs.component.html"> </file>
 *  <file name="sample-po-email-labs/sample-po-email-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-email-newsletter" title="PO Email - Newsletter">
 *  <file name="sample-po-email-newsletter/sample-po-email-newsletter.component.html"> </file>
 *  <file name="sample-po-email-newsletter/sample-po-email-newsletter.component.ts"> </file>
 * </example>
 */
export class PoEmailComponent extends PoInputGeneric {
    /* istanbul ignore next */
    constructor(el, cd) {
        super(el, cd);
        this.icon = 'po-icon-mail';
        this.type = 'email';
        // Consideramos o uso do nosso pattern com a seguinte expressão.
        // Antes do símbolo @:
        // - não há limite de caracteres.
        // - não pode haver espaços em branco, caracteres acentuados, caracteres especiais ou símbolos.
        // - pode começar com letras, números, hífen ou undescore (underline).
        //
        // Depois do símbolo @:
        // - o domínio tem um limite de até 66 caracteres após um separador.
        // - separador deve ser um 'ponto' (.).
        // - o primeiro bloco pode conter letras, números, hífen ou underscore (underline).
        // - após o primeiro separador é permitido apenas letras.
        // - não pode haver espaços em branco, caracteres acentuados, caracteres especiais ou símbolos.
        //
        // Limite total de 254 caracteres para o e-mail.
        //
        // As recomendações foram consultadas nas RFC 1034, RFC 5321 e RFC 5322.
        //
        // RFC 1034 - https://datatracker.ietf.org/doc/html/rfc1034#section-3
        // RFC 5321 - https://datatracker.ietf.org/doc/html/rfc5321#section-4.5.3.1
        // RFC 5322 - https://datatracker.ietf.org/doc/html/rfc5322#section-3.4
        this.pattern = '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,66}(?:\\.[A-Za-z]{2})?)$';
        this.mask = '';
        this.listener = this.validateClassesForPattern.bind(this);
        this.maxlength = 254;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            // Se não tem ngModel ou reactive form adiciona validação com classes css
            if (!this.onChangePropagate) {
                this.inputEl.nativeElement.addEventListener('keyup', this.listener);
            }
        });
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        if (!this.onChangePropagate) {
            this.inputEl.nativeElement.removeEventListener('keyup', this.listener);
        }
    }
    extraValidation(c) {
        return null;
    }
}
PoEmailComponent.ɵfac = function PoEmailComponent_Factory(t) { return new (t || PoEmailComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoEmailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoEmailComponent, selectors: [["po-email"]], features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 18, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], ["class", "po-field-icon-container-left", 4, "ngIf"], [1, "po-input", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "type", "blur", "click", "focus", "input"], ["inp", ""], [1, "po-field-icon-container-right"], [3, "class", "p-element-ref", "p-change-event", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-field-icon-container-left"], [3, "p-icon"], [3, "p-element-ref", "p-change-event"]], template: function PoEmailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoEmailComponent_div_2_Template, 2, 6, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoEmailComponent_Template_input_blur_3_listener($event) { return ctx.eventOnBlur($event); })("click", function PoEmailComponent_Template_input_click_3_listener($event) { return ctx.eventOnClick($event); })("focus", function PoEmailComponent_Template_input_focus_3_listener($event) { return ctx.eventOnFocus($event); })("input", function PoEmailComponent_Template_input_input_3_listener($event) { return ctx.eventOnInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PoEmailComponent_po_clean_6_Template, 1, 4, "po-clean", 6);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoEmailComponent, [{
        type: Component,
        args: [{ selector: 'po-email', changeDetection: ChangeDetectionStrategy.OnPush, providers: providers, template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div *ngIf=\"icon\" class=\"po-field-icon-container-left\">\r\n      <po-icon\r\n        class=\"po-field-icon {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n        [p-icon]=\"icon\"\r\n      ></po-icon>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input\"\r\n      [attr.name]=\"name\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-icon-left]=\"icon\"\r\n      [class.po-input-icon-right]=\"clean\"\r\n      [attr.aria-label]=\"label\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [type]=\"type\"\r\n      (blur)=\"eventOnBlur($event)\"\r\n      (click)=\"eventOnClick($event)\"\r\n      (focus)=\"eventOnFocus($event)\"\r\n      (input)=\"eventOnInput($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"{{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPattern()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWVtYWlsL3BvLWVtYWlsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1pbnB1dC9wby1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7O0lDVGxFLDhCQUF1RDtJQUNyRCw2QkFJVztJQUNiLGlCQUFNOzs7SUFKRixlQUFpRjtJQUFqRiw2R0FBaUY7SUFDakYseURBQXlDO0lBQ3pDLG9DQUFlOzs7O0lBd0JqQixvQ0FLQztJQURDLDRMQUFrQixlQUFBLG9CQUFhLENBQUEsSUFBQztJQUVsQyxpQkFBVzs7O0lBTFQsMkVBQW1FO0lBRW5FLDhDQUF5Qjs7QURwQmpDLDBCQUEwQjtBQUMxQixNQUFNLFNBQVMsR0FBRztJQUNoQjtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsMkJBQTJCO1FBQzNCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGFBQWE7UUFDdEIsMkJBQTJCO1FBQzNCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQU9ILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBK0JsRCwwQkFBMEI7SUFDMUIsWUFBWSxFQUFjLEVBQUUsRUFBcUI7UUFDL0MsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQWhDaEIsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUV0QixTQUFJLEdBQUcsT0FBTyxDQUFDO1FBRWYsZ0VBQWdFO1FBQ2hFLHNCQUFzQjtRQUN0QixpQ0FBaUM7UUFDakMsK0ZBQStGO1FBQy9GLHNFQUFzRTtRQUN0RSxFQUFFO1FBQ0YsdUJBQXVCO1FBQ3ZCLG9FQUFvRTtRQUNwRSx1Q0FBdUM7UUFDdkMsbUZBQW1GO1FBQ25GLHlEQUF5RDtRQUN6RCwrRkFBK0Y7UUFDL0YsRUFBRTtRQUNGLGdEQUFnRDtRQUNoRCxFQUFFO1FBQ0Ysd0VBQXdFO1FBQ3hFLEVBQUU7UUFDRixxRUFBcUU7UUFDckUsMkVBQTJFO1FBQzNFLHVFQUF1RTtRQUN2RSxZQUFPLEdBQUcsbUdBQW1HLENBQUM7UUFFOUcsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVGLGFBQVEsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSzNELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLHlFQUF5RTtZQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0ZBdkRVLGdCQUFnQjttRUFBaEIsZ0JBQWdCLDhEQUYzQixTQUFTO1FDM0RYLDZDQUEyRixhQUFBO1FBRXZGLGlFQU1NO1FBRU4sbUNBaUJFO1FBSkEsZ0dBQVEsdUJBQW1CLElBQUMscUZBQ25CLHdCQUFvQixJQURELHFGQUVuQix3QkFBb0IsSUFGRCxxRkFHbkIsd0JBQW9CLElBSEQ7UUFiOUIsaUJBaUJFO1FBRUYsOEJBQTJDO1FBQ3pDLDJFQU1XO1FBQ2IsaUJBQU0sRUFBQTtRQUdSLCtDQUE4RjtRQUNoRyxpQkFBcUI7O1FBekNELGlDQUFlLHNCQUFBLDZDQUFBO1FBRXpCLGVBQVU7UUFBViwrQkFBVTtRQWFkLGVBQWlDO1FBQWpDLDhDQUFpQyxrQ0FBQTtRQURqQywrQ0FBNkIsMEJBQUEsb0RBQUEsMEJBQUEsMEJBQUEsa0JBQUE7UUFEN0IsZ0NBQWtCLHlCQUFBO1FBbUJmLGVBQXFDO1FBQXJDLGtFQUFxQztRQVFqQixlQUFxQztRQUFyQyx1REFBcUM7O3VGRHFCckQsZ0JBQWdCO2NBTjVCLFNBQVM7MkJBQ0UsVUFBVSxtQkFFSCx1QkFBdUIsQ0FBQyxNQUFNLGFBQy9DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBvSW5wdXRHZW5lcmljIH0gZnJvbSAnLi4vcG8taW5wdXQtZ2VuZXJpYy9wby1pbnB1dC1nZW5lcmljJztcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmNvbnN0IHByb3ZpZGVycyA9IFtcclxuICB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9FbWFpbENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9FbWFpbENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1cclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9JbnB1dEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIHBvLWVtYWlsIMOpIHVtIGlucHV0IGVzcGVjw61maWNvIHBhcmEgcmVjZWJlciBFLW1haWwsIGNvbSBvIHBhdHRlcm4gasOhIGNvbmZpZ3VyYWRvLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZW1haWwtYmFzaWNcIiB0aXRsZT1cIlBPIEVtYWlsIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWVtYWlsLWJhc2ljL3NhbXBsZS1wby1lbWFpbC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWVtYWlsLWJhc2ljL3NhbXBsZS1wby1lbWFpbC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1lbWFpbC1iYXNpYy9zYW1wbGUtcG8tZW1haWwtYmFzaWMuY29tcG9uZW50LmUyZS1zcGVjLnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZW1haWwtYmFzaWMvc2FtcGxlLXBvLWVtYWlsLWJhc2ljLmNvbXBvbmVudC5wby50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWVtYWlsLWxhYnNcIiB0aXRsZT1cIlBPIEVtYWlsIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZW1haWwtbGFicy9zYW1wbGUtcG8tZW1haWwtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWVtYWlsLWxhYnMvc2FtcGxlLXBvLWVtYWlsLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZW1haWwtbmV3c2xldHRlclwiIHRpdGxlPVwiUE8gRW1haWwgLSBOZXdzbGV0dGVyXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWVtYWlsLW5ld3NsZXR0ZXIvc2FtcGxlLXBvLWVtYWlsLW5ld3NsZXR0ZXIuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1lbWFpbC1uZXdzbGV0dGVyL3NhbXBsZS1wby1lbWFpbC1uZXdzbGV0dGVyLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZW1haWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi4vcG8taW5wdXQvcG8taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyc1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9FbWFpbENvbXBvbmVudCBleHRlbmRzIFBvSW5wdXRHZW5lcmljIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBpY29uID0gJ3BvLWljb24tbWFpbCc7XHJcblxyXG4gIHR5cGUgPSAnZW1haWwnO1xyXG5cclxuICAvLyBDb25zaWRlcmFtb3MgbyB1c28gZG8gbm9zc28gcGF0dGVybiBjb20gYSBzZWd1aW50ZSBleHByZXNzw6NvLlxyXG4gIC8vIEFudGVzIGRvIHPDrW1ib2xvIEA6XHJcbiAgLy8gLSBuw6NvIGjDoSBsaW1pdGUgZGUgY2FyYWN0ZXJlcy5cclxuICAvLyAtIG7Do28gcG9kZSBoYXZlciBlc3Bhw6dvcyBlbSBicmFuY28sIGNhcmFjdGVyZXMgYWNlbnR1YWRvcywgY2FyYWN0ZXJlcyBlc3BlY2lhaXMgb3Ugc8OtbWJvbG9zLlxyXG4gIC8vIC0gcG9kZSBjb21lw6dhciBjb20gbGV0cmFzLCBuw7ptZXJvcywgaMOtZmVuIG91IHVuZGVzY29yZSAodW5kZXJsaW5lKS5cclxuICAvL1xyXG4gIC8vIERlcG9pcyBkbyBzw61tYm9sbyBAOlxyXG4gIC8vIC0gbyBkb23DrW5pbyB0ZW0gdW0gbGltaXRlIGRlIGF0w6kgNjYgY2FyYWN0ZXJlcyBhcMOzcyB1bSBzZXBhcmFkb3IuXHJcbiAgLy8gLSBzZXBhcmFkb3IgZGV2ZSBzZXIgdW0gJ3BvbnRvJyAoLikuXHJcbiAgLy8gLSBvIHByaW1laXJvIGJsb2NvIHBvZGUgY29udGVyIGxldHJhcywgbsO6bWVyb3MsIGjDrWZlbiBvdSB1bmRlcnNjb3JlICh1bmRlcmxpbmUpLlxyXG4gIC8vIC0gYXDDs3MgbyBwcmltZWlybyBzZXBhcmFkb3Igw6kgcGVybWl0aWRvIGFwZW5hcyBsZXRyYXMuXHJcbiAgLy8gLSBuw6NvIHBvZGUgaGF2ZXIgZXNwYcOnb3MgZW0gYnJhbmNvLCBjYXJhY3RlcmVzIGFjZW50dWFkb3MsIGNhcmFjdGVyZXMgZXNwZWNpYWlzIG91IHPDrW1ib2xvcy5cclxuICAvL1xyXG4gIC8vIExpbWl0ZSB0b3RhbCBkZSAyNTQgY2FyYWN0ZXJlcyBwYXJhIG8gZS1tYWlsLlxyXG4gIC8vXHJcbiAgLy8gQXMgcmVjb21lbmRhw6fDtWVzIGZvcmFtIGNvbnN1bHRhZGFzIG5hcyBSRkMgMTAzNCwgUkZDIDUzMjEgZSBSRkMgNTMyMi5cclxuICAvL1xyXG4gIC8vIFJGQyAxMDM0IC0gaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmMxMDM0I3NlY3Rpb24tM1xyXG4gIC8vIFJGQyA1MzIxIC0gaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmM1MzIxI3NlY3Rpb24tNC41LjMuMVxyXG4gIC8vIFJGQyA1MzIyIC0gaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmM1MzIyI3NlY3Rpb24tMy40XHJcbiAgcGF0dGVybiA9ICdeKFtcXFxcdy1dKyg/OlxcXFwuW1xcXFx3LV0rKSopQCgoPzpbXFxcXHctXStcXFxcLikqXFxcXHdbXFxcXHctXXswLDY2fSlcXFxcLihbQS1aYS16XXsyLDY2fSg/OlxcXFwuW0EtWmEtel17Mn0pPykkJztcclxuXHJcbiAgbWFzayA9ICcnO1xyXG5cclxuICBwcml2YXRlIGxpc3RlbmVyID0gdGhpcy52YWxpZGF0ZUNsYXNzZXNGb3JQYXR0ZXJuLmJpbmQodGhpcyk7XHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWwsIGNkKTtcclxuICAgIHRoaXMubWF4bGVuZ3RoID0gMjU0O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIFNlIG7Do28gdGVtIG5nTW9kZWwgb3UgcmVhY3RpdmUgZm9ybSBhZGljaW9uYSB2YWxpZGHDp8OjbyBjb20gY2xhc3NlcyBjc3NcclxuICAgICAgaWYgKCF0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKCF0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHRyYVZhbGlkYXRpb24oYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1oZWxwXT1cImhlbHBcIiBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cImljb25cIiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLWxlZnRcIj5cclxuICAgICAgPHBvLWljb25cclxuICAgICAgICBjbGFzcz1cInBvLWZpZWxkLWljb24ge3sgZGlzYWJsZWQgPyAncG8taWNvbi1pbnB1dC1kaXNhYmxlZCcgOiAncG8taWNvbi1pbnB1dCcgfX1cIlxyXG4gICAgICAgIFtjbGFzcy5wby1maWVsZC1pY29uLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbcC1pY29uXT1cImljb25cIlxyXG4gICAgICA+PC9wby1pY29uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGlucHV0XHJcbiAgICAgICNpbnBcclxuICAgICAgY2xhc3M9XCJwby1pbnB1dFwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcclxuICAgICAgW2NsYXNzLnBvLWlucHV0LWljb24tbGVmdF09XCJpY29uXCJcclxuICAgICAgW2NsYXNzLnBvLWlucHV0LWljb24tcmlnaHRdPVwiY2xlYW5cIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cImRpc2FibGVkID8gJycgOiBwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAoYmx1cik9XCJldmVudE9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgKGNsaWNrKT1cImV2ZW50T25DbGljaygkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImV2ZW50T25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgKGlucHV0KT1cImV2ZW50T25JbnB1dCgkZXZlbnQpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwie3sgZGlzYWJsZWQgPyAncG8taWNvbi1pbnB1dC1kaXNhYmxlZCcgOiAncG8taWNvbi1pbnB1dCcgfX1cIlxyXG4gICAgICAgICpuZ0lmPVwiY2xlYW4gJiYgIWRpc2FibGVkICYmICFyZWFkb25seVwiXHJcbiAgICAgICAgW3AtZWxlbWVudC1yZWZdPVwiaW5wdXRFbFwiXHJcbiAgICAgICAgKHAtY2hhbmdlLWV2ZW50KT1cImNsZWFyKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tY2xlYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20gW3AtZXJyb3ItcGF0dGVybl09XCJnZXRFcnJvclBhdHRlcm4oKVwiPiA8L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG4iXX0=