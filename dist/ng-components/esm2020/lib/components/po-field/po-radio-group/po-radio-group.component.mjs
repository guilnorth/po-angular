import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, ViewChild, ViewChildren } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { removeDuplicatedOptions } from '../../../utils/util';
import { PoRadioGroupBaseComponent } from './po-radio-group-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i3 from "../po-field-container/po-field-container.component";
import * as i4 from "../po-radio/po-radio.component";
const _c0 = ["inp"];
const _c1 = ["inputRadio"];
function PoRadioGroupComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "po-radio", 5, 6);
    i0.ɵɵlistener("keyup", function PoRadioGroupComponent_div_4_Template_po_radio_keyup_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onKeyUp($event, option_r2.value)); })("click", function PoRadioGroupComponent_div_4_Template_po_radio_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.eventClick(option_r2.value, option_r2.disabled === true || ctx_r6.disabled)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("po-radio-group-item po-md-", ctx_r1.mdColumns, " po-lg-", ctx_r1.columns, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r1.name)("p-checked", ctx_r1.value === option_r2.value)("p-disabled", option_r2.disabled === true || ctx_r1.disabled)("p-label", option_r2.label)("p-required", ctx_r1.required)("p-size", ctx_r1.size)("p-value", option_r2.value);
} }
/**
 * @docsExtends PoRadioGroupBaseComponent
 *
 * @example
 *
 * <example name="po-radio-group-basic" title="PO Radio Group Basic">
 *  <file name="sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"> </file>
 *  <file name="sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"> </file>
 *  <file name="sample-po-radio-group-basic/sample-po-radio-group-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-radio-group-basic/sample-po-radio-group-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-radio-group-labs" title="PO Radio Group Labs">
 *  <file name="sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"> </file>
 *  <file name="sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-radio-group-translator" title="PO Radio Group - Translator">
 *  <file name="sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"> </file>
 *  <file name="sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"> </file>
 * </example>
 *
 * <example name="po-radio-group-translator-reactive-form" title="PO Radio Group - Translator Reactive Form">
 *  <file name="sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"> </file>
 *  <file name="sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"> </file>
 * </example>
 *
 */
export class PoRadioGroupComponent extends PoRadioGroupBaseComponent {
    constructor(differs, cd) {
        super();
        this.cd = cd;
        this.differ = differs.find([]).create(null);
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngDoCheck() {
        const change = this.differ.diff(this.options);
        if (change) {
            removeDuplicatedOptions(this.options);
        }
        this.cd.markForCheck();
    }
    eventClick(value, disabled) {
        if (!disabled) {
            this.onTouched?.();
            this.changeValue(value);
        }
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoRadioGroupComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;
     *
     * focusRadio() {
     *   this.radio.focus();
     * }
     * ```
     */
    focus() {
        if (this.radioLabels && !this.disabled) {
            const radioLabel = this.radioLabels.find((_, index) => !this.options[index].disabled);
            if (radioLabel) {
                radioLabel.nativeElement.focus();
            }
        }
    }
    getElementByValue(value) {
        return this.inputEl.nativeElement.querySelector(`input[value='${value}']`);
    }
    onKeyUp(event, value) {
        const key = event.keyCode || event.which;
        if (this.isArrowKey(key)) {
            this.changeValue(value);
        }
    }
    isArrowKey(key) {
        return key >= 37 && key <= 40;
    }
}
PoRadioGroupComponent.ɵfac = function PoRadioGroupComponent_Factory(t) { return new (t || PoRadioGroupComponent)(i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoRadioGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRadioGroupComponent, selectors: [["po-radio-group"]], viewQuery: function PoRadioGroupComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.radioLabels = _t);
    } }, inputs: { label: ["p-label", "label"], help: ["p-help", "help"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoRadioGroupComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoRadioGroupComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], ["role", "radiogroup", 1, "po-radio-group"], ["inp", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "name", "p-checked", "p-disabled", "p-label", "p-required", "p-size", "p-value", "keyup", "click"], ["inputRadio", ""]], template: function PoRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "div", 2, 3);
        i0.ɵɵtemplate(4, PoRadioGroupComponent_div_4_Template, 3, 11, "div", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(5, "po-field-container-bottom");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("name", ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", ctx.label)("data-options", ctx.options.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, dependencies: [i1.NgForOf, i2.PoFieldContainerBottomComponent, i3.PoFieldContainerComponent, i4.PoRadioComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRadioGroupComponent, [{
        type: Component,
        args: [{ selector: 'po-radio-group', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoRadioGroupComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoRadioGroupComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\" [attr.name]=\"name\">\r\n    <div #inp class=\"po-radio-group\" role=\"radiogroup\" [attr.aria-label]=\"label\" [attr.data-options]=\"options.length\">\r\n      <div *ngFor=\"let option of options\" class=\"po-radio-group-item po-md-{{ mdColumns }} po-lg-{{ columns }}\">\r\n        <po-radio\r\n          #inputRadio\r\n          [name]=\"name\"\r\n          [p-checked]=\"value === option.value\"\r\n          [p-disabled]=\"option.disabled === true || disabled\"\r\n          [p-label]=\"option.label\"\r\n          [p-required]=\"required\"\r\n          [p-size]=\"size\"\r\n          [p-value]=\"option.value\"\r\n          (keyup)=\"onKeyUp($event, option.value)\"\r\n          (click)=\"eventClick(option.value, option.disabled === true || disabled)\"\r\n        >\r\n        </po-radio>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.IterableDiffers }, { type: i0.ChangeDetectorRef }]; }, { label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: true }]
        }], radioLabels: [{
            type: ViewChildren,
            args: ['inputRadio']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXJhZGlvLWdyb3VwL3BvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1yYWRpby1ncm91cC9wby1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7OztJQ2Z0RSwyQkFBMEcscUJBQUE7SUFVdEcsdU9BQVMsZUFBQSx1Q0FBNkIsQ0FBQSxJQUFDLG9OQUM5QixlQUFBLDBEQUE2QyxJQUFJLG9CQUFhLENBQUEsSUFEaEM7SUFHekMsaUJBQVcsRUFBQTs7OztJQWJ1Qix3R0FBcUU7SUFHckcsZUFBYTtJQUFiLGtDQUFhLCtDQUFBLDhEQUFBLDRCQUFBLCtCQUFBLHVCQUFBLDRCQUFBOztBRGN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBa0JILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7SUFZbEUsWUFBWSxPQUF3QixFQUFVLEVBQXFCO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRG9DLE9BQUUsR0FBRixFQUFF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QzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2tHQUlpQixLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHQyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFFdUMsT0FBTztrQkFBNUQsU0FBUzttQkFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDeEIsV0FBVztrQkFBdEMsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEb0NoZWNrLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyByZW1vdmVEdXBsaWNhdGVkT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9SYWRpb0dyb3VwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcmFkaW8tZ3JvdXAtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1JhZGlvR3JvdXBCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1yYWRpby1ncm91cC1iYXNpY1wiIHRpdGxlPVwiUE8gUmFkaW8gR3JvdXAgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmFkaW8tZ3JvdXAtYmFzaWMvc2FtcGxlLXBvLXJhZGlvLWdyb3VwLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmFkaW8tZ3JvdXAtYmFzaWMvc2FtcGxlLXBvLXJhZGlvLWdyb3VwLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXJhZGlvLWdyb3VwLWJhc2ljL3NhbXBsZS1wby1yYWRpby1ncm91cC1iYXNpYy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1yYWRpby1ncm91cC1iYXNpYy9zYW1wbGUtcG8tcmFkaW8tZ3JvdXAtYmFzaWMuY29tcG9uZW50LnBvLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcmFkaW8tZ3JvdXAtbGFic1wiIHRpdGxlPVwiUE8gUmFkaW8gR3JvdXAgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1yYWRpby1ncm91cC1sYWJzL3NhbXBsZS1wby1yYWRpby1ncm91cC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmFkaW8tZ3JvdXAtbGFicy9zYW1wbGUtcG8tcmFkaW8tZ3JvdXAtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1yYWRpby1ncm91cC10cmFuc2xhdG9yXCIgdGl0bGU9XCJQTyBSYWRpbyBHcm91cCAtIFRyYW5zbGF0b3JcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmFkaW8tZ3JvdXAtdHJhbnNsYXRvci9zYW1wbGUtcG8tcmFkaW8tZ3JvdXAtdHJhbnNsYXRvci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXJhZGlvLWdyb3VwLXRyYW5zbGF0b3Ivc2FtcGxlLXBvLXJhZGlvLWdyb3VwLXRyYW5zbGF0b3IuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcmFkaW8tZ3JvdXAtdHJhbnNsYXRvci1yZWFjdGl2ZS1mb3JtXCIgdGl0bGU9XCJQTyBSYWRpbyBHcm91cCAtIFRyYW5zbGF0b3IgUmVhY3RpdmUgRm9ybVwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1yYWRpby1ncm91cC10cmFuc2xhdG9yLXJlYWN0aXZlLWZvcm0vc2FtcGxlLXBvLXJhZGlvLWdyb3VwLXRyYW5zbGF0b3ItcmVhY3RpdmUtZm9ybS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXJhZGlvLWdyb3VwLXRyYW5zbGF0b3ItcmVhY3RpdmUtZm9ybS9zYW1wbGUtcG8tcmFkaW8tZ3JvdXAtdHJhbnNsYXRvci1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcmFkaW8tZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb1JhZGlvR3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9SYWRpb0dyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1JhZGlvR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBQb1JhZGlvR3JvdXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjayB7XHJcbiAgLyoqIExhYmVsIGRvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogVGV4dG8gZGUgYXBvaW8gZG8gY2FtcG8uICovXHJcbiAgQElucHV0KCdwLWhlbHAnKSBoZWxwPzogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnAnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ2lucHV0UmFkaW8nKSByYWRpb0xhYmVsczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBkaWZmZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgY29uc3QgY2hhbmdlID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLm9wdGlvbnMpO1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICByZW1vdmVEdXBsaWNhdGVkT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGV2ZW50Q2xpY2sodmFsdWU6IGFueSwgZGlzYWJsZWQ6IGFueSkge1xyXG4gICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZD8uKCk7XHJcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIGF0cmlidWkgZm9jbyBhbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogUGFyYSB1dGlsaXrDoS1sYSDDqSBuZWNlc3PDoXJpbyB0ZXIgYSBpbnN0w6JuY2lhIGRvIGNvbXBvbmVudGUgbm8gRE9NLCBwb2RlbmRvIHNlciB1dGlsaXphZG8gbyBWaWV3Q2hpbGQgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBpbXBvcnQgeyBQb1JhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9SYWRpb0dyb3VwQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSByYWRpbzogUG9SYWRpb0dyb3VwQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNSYWRpbygpIHtcclxuICAgKiAgIHRoaXMucmFkaW8uZm9jdXMoKTtcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yYWRpb0xhYmVscyAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCByYWRpb0xhYmVsID0gdGhpcy5yYWRpb0xhYmVscy5maW5kKChfLCBpbmRleCkgPT4gIXRoaXMub3B0aW9uc1tpbmRleF0uZGlzYWJsZWQpO1xyXG5cclxuICAgICAgaWYgKHJhZGlvTGFiZWwpIHtcclxuICAgICAgICByYWRpb0xhYmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudEJ5VmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT0nJHt2YWx1ZX0nXWApO1xyXG4gIH1cclxuXHJcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCwgdmFsdWUpIHtcclxuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBcnJvd0tleShrZXkpKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Fycm93S2V5KGtleTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4ga2V5ID49IDM3ICYmIGtleSA8PSA0MDtcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1oZWxwXT1cImhlbHBcIiBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudFwiIFthdHRyLm5hbWVdPVwibmFtZVwiPlxyXG4gICAgPGRpdiAjaW5wIGNsYXNzPVwicG8tcmFkaW8tZ3JvdXBcIiByb2xlPVwicmFkaW9ncm91cFwiIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIiBbYXR0ci5kYXRhLW9wdGlvbnNdPVwib3B0aW9ucy5sZW5ndGhcIj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIiBjbGFzcz1cInBvLXJhZGlvLWdyb3VwLWl0ZW0gcG8tbWQte3sgbWRDb2x1bW5zIH19IHBvLWxnLXt7IGNvbHVtbnMgfX1cIj5cclxuICAgICAgICA8cG8tcmFkaW9cclxuICAgICAgICAgICNpbnB1dFJhZGlvXHJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgIFtwLWNoZWNrZWRdPVwidmFsdWUgPT09IG9wdGlvbi52YWx1ZVwiXHJcbiAgICAgICAgICBbcC1kaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWQgPT09IHRydWUgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3AtbGFiZWxdPVwib3B0aW9uLmxhYmVsXCJcclxuICAgICAgICAgIFtwLXJlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgICAgIFtwLXNpemVdPVwic2l6ZVwiXHJcbiAgICAgICAgICBbcC12YWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgKGtleXVwKT1cIm9uS2V5VXAoJGV2ZW50LCBvcHRpb24udmFsdWUpXCJcclxuICAgICAgICAgIChjbGljayk9XCJldmVudENsaWNrKG9wdGlvbi52YWx1ZSwgb3B0aW9uLmRpc2FibGVkID09PSB0cnVlIHx8IGRpc2FibGVkKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvcG8tcmFkaW8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+PC9wby1maWVsZC1jb250YWluZXItYm90dG9tPlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19