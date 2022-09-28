import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-clean/po-clean.component";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
import * as i5 from "../../po-icon/po-icon.component";
function PoUrlComponent_div_2_Template(rf, ctx) { if (rf & 1) {
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
function PoUrlComponent_po_clean_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 10);
    i0.ɵɵlistener("p-change-event", function PoUrlComponent_po_clean_6_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.disabled ? "po-icon-input-disabled" : "po-icon-input");
    i0.ɵɵproperty("p-element-ref", ctx_r2.inputEl);
} }
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * po-url é um input específico para receber URL, com o pattern já configurado.
 *
 * @example
 *
 * <example name="po-url-basic" title="PO Url Basic">
 *   <file name="sample-po-url-basic/sample-po-url-basic.component.html"> </file>
 *   <file name="sample-po-url-basic/sample-po-url-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-url-labs" title="PO Url Labs">
 *   <file name="sample-po-url-labs/sample-po-url-labs.component.html"> </file>
 *   <file name="sample-po-url-labs/sample-po-url-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-url-shortener" title="PO Url - Shortener">
 *   <file name="sample-po-url-shortener/sample-po-url-shortener.component.html"> </file>
 *   <file name="sample-po-url-shortener/sample-po-url-shortener.component.ts"> </file>
 * </example>
 *
 */
export class PoUrlComponent extends PoInputGeneric {
    /* istanbul ignore next */
    constructor(el, cd) {
        super(el, cd);
        this.icon = 'po-icon-world';
        this.type = 'url';
        this.pattern = '^((https|http):\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-A-Za-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&A-Za-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-A-Za-z\\d_]*)?$';
        this.mask = '';
        this.listener = this.validateClassesForPattern.bind(this);
        this.maxlength = 254;
    }
    ngAfterViewInit() {
        // Se não tem ngModel ou reactive form adiciona validação com classes css
        setTimeout(() => {
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
PoUrlComponent.ɵfac = function PoUrlComponent_Factory(t) { return new (t || PoUrlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoUrlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoUrlComponent, selectors: [["po-url"]], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoUrlComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoUrlComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 18, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], ["class", "po-field-icon-container-left", 4, "ngIf"], [1, "po-input", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "type", "blur", "click", "focus", "input"], ["inp", ""], [1, "po-field-icon-container-right"], [3, "class", "p-element-ref", "p-change-event", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-field-icon-container-left"], [3, "p-icon"], [3, "p-element-ref", "p-change-event"]], template: function PoUrlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoUrlComponent_div_2_Template, 2, 6, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoUrlComponent_Template_input_blur_3_listener($event) { return ctx.eventOnBlur($event); })("click", function PoUrlComponent_Template_input_click_3_listener($event) { return ctx.eventOnClick($event); })("focus", function PoUrlComponent_Template_input_focus_3_listener($event) { return ctx.eventOnFocus($event); })("input", function PoUrlComponent_Template_input_input_3_listener($event) { return ctx.eventOnInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PoUrlComponent_po_clean_6_Template, 1, 4, "po-clean", 6);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUrlComponent, [{
        type: Component,
        args: [{ selector: 'po-url', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoUrlComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoUrlComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div *ngIf=\"icon\" class=\"po-field-icon-container-left\">\r\n      <po-icon\r\n        class=\"po-field-icon {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n        [p-icon]=\"icon\"\r\n      ></po-icon>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input\"\r\n      [attr.name]=\"name\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-icon-left]=\"icon\"\r\n      [class.po-input-icon-right]=\"clean\"\r\n      [attr.aria-label]=\"label\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [type]=\"type\"\r\n      (blur)=\"eventOnBlur($event)\"\r\n      (click)=\"eventOnClick($event)\"\r\n      (focus)=\"eventOnFocus($event)\"\r\n      (input)=\"eventOnInput($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"{{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPattern()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXJsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cmwvcG8tdXJsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1pbnB1dC9wby1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7O0lDVGxFLDhCQUF1RDtJQUNyRCw2QkFJVztJQUNiLGlCQUFNOzs7SUFKRixlQUFpRjtJQUFqRiw2R0FBaUY7SUFDakYseURBQXlDO0lBQ3pDLG9DQUFlOzs7O0lBd0JqQixvQ0FLQztJQURDLDBMQUFrQixlQUFBLG9CQUFhLENBQUEsSUFBQztJQUVsQyxpQkFBVzs7O0lBTFQsMkVBQW1FO0lBRW5FLDhDQUF5Qjs7QURwQmpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFrQkgsTUFBTSxPQUFPLGNBQWUsU0FBUSxjQUFjO0lBaUJoRCwwQkFBMEI7SUFDMUIsWUFBWSxFQUFjLEVBQUUsRUFBcUI7UUFDL0MsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQWxCaEIsU0FBSSxHQUFHLGVBQWUsQ0FBQztRQUV2QixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsWUFBTyxHQUNMLHlCQUF5QixHQUFHLFdBQVc7WUFDdkMsa0RBQWtELEdBQUcsY0FBYztZQUNuRSw2QkFBNkIsR0FBRyxxQkFBcUI7WUFDckQsb0NBQW9DLEdBQUcsZ0JBQWdCO1lBQ3ZELDZCQUE2QixHQUFHLGVBQWU7WUFDL0MsdUJBQXVCLENBQUM7UUFFMUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVGLGFBQVEsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSzNELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IseUVBQXlFO1FBQ3pFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7NEVBekNVLGNBQWM7aUVBQWQsY0FBYyw0REFiZDtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM3QyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM3QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUNyREgsNkNBQTJGLGFBQUE7UUFFdkYsK0RBTU07UUFFTixtQ0FpQkU7UUFKQSw4RkFBUSx1QkFBbUIsSUFBQyxtRkFDbkIsd0JBQW9CLElBREQsbUZBRW5CLHdCQUFvQixJQUZELG1GQUduQix3QkFBb0IsSUFIRDtRQWI5QixpQkFpQkU7UUFFRiw4QkFBMkM7UUFDekMseUVBTVc7UUFDYixpQkFBTSxFQUFBO1FBR1IsK0NBQThGO1FBQ2hHLGlCQUFxQjs7UUF6Q0QsaUNBQWUsc0JBQUEsNkNBQUE7UUFFekIsZUFBVTtRQUFWLCtCQUFVO1FBYWQsZUFBaUM7UUFBakMsOENBQWlDLGtDQUFBO1FBRGpDLCtDQUE2QiwwQkFBQSxvREFBQSwwQkFBQSwwQkFBQSxrQkFBQTtRQUQ3QixnQ0FBa0IseUJBQUE7UUFtQmYsZUFBcUM7UUFBckMsa0VBQXFDO1FBUWpCLGVBQXFDO1FBQXJDLHVEQUFxQzs7dUZEZXJELGNBQWM7Y0FqQjFCLFNBQVM7MkJBQ0UsUUFBUSxtQkFFRCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBvSW5wdXRHZW5lcmljIH0gZnJvbSAnLi4vcG8taW5wdXQtZ2VuZXJpYy9wby1pbnB1dC1nZW5lcmljJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9JbnB1dEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIHBvLXVybCDDqSB1bSBpbnB1dCBlc3BlY8OtZmljbyBwYXJhIHJlY2ViZXIgVVJMLCBjb20gbyBwYXR0ZXJuIGrDoSBjb25maWd1cmFkby5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXVybC1iYXNpY1wiIHRpdGxlPVwiUE8gVXJsIEJhc2ljXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby11cmwtYmFzaWMvc2FtcGxlLXBvLXVybC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby11cmwtYmFzaWMvc2FtcGxlLXBvLXVybC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby11cmwtbGFic1wiIHRpdGxlPVwiUE8gVXJsIExhYnNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXVybC1sYWJzL3NhbXBsZS1wby11cmwtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby11cmwtbGFicy9zYW1wbGUtcG8tdXJsLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdXJsLXNob3J0ZW5lclwiIHRpdGxlPVwiUE8gVXJsIC0gU2hvcnRlbmVyXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby11cmwtc2hvcnRlbmVyL3NhbXBsZS1wby11cmwtc2hvcnRlbmVyLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXVybC1zaG9ydGVuZXIvc2FtcGxlLXBvLXVybC1zaG9ydGVuZXIuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby11cmwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi4vcG8taW5wdXQvcG8taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9VcmxDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9VcmxDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVXJsQ29tcG9uZW50IGV4dGVuZHMgUG9JbnB1dEdlbmVyaWMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIGljb24gPSAncG8taWNvbi13b3JsZCc7XHJcblxyXG4gIHR5cGUgPSAndXJsJztcclxuXHJcbiAgcGF0dGVybiA9XHJcbiAgICAnXigoaHR0cHN8aHR0cCk6XFxcXC9cXFxcLyk/JyArIC8vIHByb3RvY29sXHJcbiAgICAnKCgoW2EtelxcXFxkXShbYS16XFxcXGQtXSpbYS16XFxcXGRdKSopXFxcXC4pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcclxuICAgICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gT1IgaXAgKHY0KSBhZGRyZXNzXHJcbiAgICAnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLUEtWmEtelxcXFxkJV8ufitdKikqJyArIC8vIHBvcnQgYW5kIHBhdGhcclxuICAgICcoXFxcXD9bOyZBLVphLXpcXFxcZCVfLn4rPS1dKik/JyArIC8vIHF1ZXJ5IHN0cmluZ1xyXG4gICAgJyhcXFxcI1stQS1aYS16XFxcXGRfXSopPyQnO1xyXG5cclxuICBtYXNrID0gJyc7XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuZXIgPSB0aGlzLnZhbGlkYXRlQ2xhc3Nlc0ZvclBhdHRlcm4uYmluZCh0aGlzKTtcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbCwgY2QpO1xyXG4gICAgdGhpcy5tYXhsZW5ndGggPSAyNTQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyBTZSBuw6NvIHRlbSBuZ01vZGVsIG91IHJlYWN0aXZlIGZvcm0gYWRpY2lvbmEgdmFsaWRhw6fDo28gY29tIGNsYXNzZXMgY3NzXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKCF0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHRyYVZhbGlkYXRpb24oYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1oZWxwXT1cImhlbHBcIiBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cImljb25cIiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLWxlZnRcIj5cclxuICAgICAgPHBvLWljb25cclxuICAgICAgICBjbGFzcz1cInBvLWZpZWxkLWljb24ge3sgZGlzYWJsZWQgPyAncG8taWNvbi1pbnB1dC1kaXNhYmxlZCcgOiAncG8taWNvbi1pbnB1dCcgfX1cIlxyXG4gICAgICAgIFtjbGFzcy5wby1maWVsZC1pY29uLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbcC1pY29uXT1cImljb25cIlxyXG4gICAgICA+PC9wby1pY29uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGlucHV0XHJcbiAgICAgICNpbnBcclxuICAgICAgY2xhc3M9XCJwby1pbnB1dFwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcclxuICAgICAgW2NsYXNzLnBvLWlucHV0LWljb24tbGVmdF09XCJpY29uXCJcclxuICAgICAgW2NsYXNzLnBvLWlucHV0LWljb24tcmlnaHRdPVwiY2xlYW5cIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cImRpc2FibGVkID8gJycgOiBwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAoYmx1cik9XCJldmVudE9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgKGNsaWNrKT1cImV2ZW50T25DbGljaygkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImV2ZW50T25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgKGlucHV0KT1cImV2ZW50T25JbnB1dCgkZXZlbnQpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwie3sgZGlzYWJsZWQgPyAncG8taWNvbi1pbnB1dC1kaXNhYmxlZCcgOiAncG8taWNvbi1pbnB1dCcgfX1cIlxyXG4gICAgICAgICpuZ0lmPVwiY2xlYW4gJiYgIWRpc2FibGVkICYmICFyZWFkb25seVwiXHJcbiAgICAgICAgW3AtZWxlbWVudC1yZWZdPVwiaW5wdXRFbFwiXHJcbiAgICAgICAgKHAtY2hhbmdlLWV2ZW50KT1cImNsZWFyKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tY2xlYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20gW3AtZXJyb3ItcGF0dGVybl09XCJnZXRFcnJvclBhdHRlcm4oKVwiPiA8L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG4iXX0=