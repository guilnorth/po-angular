import { Component, ElementRef, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoTextareaBaseComponent } from './po-textarea-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i2 from "../po-field-container/po-field-container.component";
const _c0 = ["inp"];
/**
 * @docsExtends PoTextareaBaseComponent
 *
 * @example
 *
 * <example name="po-textarea-basic" title="PO Textarea Basic" >
 *  <file name="sample-po-textarea-basic/sample-po-textarea-basic.component.html"> </file>
 *  <file name="sample-po-textarea-basic/sample-po-textarea-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-textarea-labs" title="PO Textarea Labs" >
 *  <file name="sample-po-textarea-labs/sample-po-textarea-labs.component.html"> </file>
 *  <file name="sample-po-textarea-labs/sample-po-textarea-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-textarea-email" title="PO Textarea - Email" >
 *  <file name="sample-po-textarea-email/sample-po-textarea-email.component.html"> </file>
 *  <file name="sample-po-textarea-email/sample-po-textarea-email.component.ts"> </file>
 * </example>
 *
 * <example name="po-textarea-email-reactive-form" title="PO Textarea - Email Reactive Form" >
 *  <file name="sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"> </file>
 *  <file name="sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"> </file>
 * </example>
 *
 */
export class PoTextareaComponent extends PoTextareaBaseComponent {
    constructor(cd) {
        super(cd);
        this.fireChange = false;
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoTextareaComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;
     *
     * focusTextarea() {
     *   this.textarea.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.inputEl.nativeElement.focus();
        }
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    writeValueModel(value) {
        if (this.inputEl) {
            if (!value) {
                // Se for o valor for undefined, deve limpar o campo
                this.inputEl.nativeElement.value = '';
            }
            else {
                this.inputEl.nativeElement.value = value;
            }
        }
        // Emite evento quando o model é atualizado, inclusive a primeira vez
        if (value) {
            this.change.emit(value);
        }
    }
    validMaxLength(maxlength, value) {
        return maxlength && value.length > maxlength ? value.toString().substring(0, maxlength) : value;
    }
    eventOnInput(event) {
        const value = this.validMaxLength(this.maxlength, event.target.value);
        this.callOnChange(value);
        this.inputEl.nativeElement.value = value;
    }
    eventOnFocus() {
        // Atualiza valor da variável que será usada para verificar se o campo teve alteração
        this.valueBeforeChange = this.inputEl.nativeElement.value;
        // Dispara evento quando o usuário entrar no campo
        // Este evento também é disparado quando o campo inicia com foco.
        this.enter.emit();
    }
    eventOnBlur() {
        this.onTouched?.();
        this.blur.emit();
        this.controlChangeEmitter();
    }
    controlChangeEmitter() {
        const elementValue = this.inputEl.nativeElement.value;
        if (elementValue !== this.valueBeforeChange) {
            this.change.emit(elementValue);
        }
    }
}
PoTextareaComponent.ɵfac = function PoTextareaComponent_Factory(t) { return new (t || PoTextareaComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoTextareaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTextareaComponent, selectors: [["po-textarea"]], viewQuery: function PoTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoTextareaComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoTextareaComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 10, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], [1, "po-textarea", 3, "disabled", "placeholder", "readonly", "required", "rows", "blur", "focus", "input"], ["inp", ""]], template: function PoTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "textarea", 2, 3);
        i0.ɵɵlistener("blur", function PoTextareaComponent_Template_textarea_blur_2_listener() { return ctx.eventOnBlur(); })("focus", function PoTextareaComponent_Template_textarea_focus_2_listener() { return ctx.eventOnFocus(); })("input", function PoTextareaComponent_Template_textarea_input_2_listener($event) { return ctx.eventOnInput($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(4, "po-field-container-bottom");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required)("rows", ctx.rows);
        i0.ɵɵattribute("name", ctx.name)("aria-label", ctx.label);
    } }, dependencies: [i1.PoFieldContainerBottomComponent, i2.PoFieldContainerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTextareaComponent, [{
        type: Component,
        args: [{ selector: 'po-textarea', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoTextareaComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoTextareaComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <textarea\r\n      #inp\r\n      class=\"po-textarea\"\r\n      (blur)=\"eventOnBlur()\"\r\n      (focus)=\"eventOnFocus()\"\r\n      (input)=\"eventOnInput($event)\"\r\n      [attr.name]=\"name\"\r\n      [attr.aria-label]=\"label\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      [rows]=\"rows\"\r\n    ></textarea>\r\n  </div>\r\n\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXRleHRhcmVhL3BvLXRleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby10ZXh0YXJlYS9wby10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixVQUFVLEVBQ1YsU0FBUyxFQUVULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRXZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBa0JILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx1QkFBdUI7SUFNOUQsWUFBWSxFQUFxQjtRQUMvQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFIWixlQUFVLEdBQVksS0FBSyxDQUFDO0lBSTVCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksSUFB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b0JBQW9CLENBQUM7d0JBQ2xELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7b0VBR3FELE9BQU87a0JBQTVELFNBQVM7bUJBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9UZXh0YXJlYUJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXRleHRhcmVhLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9UZXh0YXJlYUJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRleHRhcmVhLWJhc2ljXCIgdGl0bGU9XCJQTyBUZXh0YXJlYSBCYXNpY1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGV4dGFyZWEtYmFzaWMvc2FtcGxlLXBvLXRleHRhcmVhLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGV4dGFyZWEtYmFzaWMvc2FtcGxlLXBvLXRleHRhcmVhLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRleHRhcmVhLWxhYnNcIiB0aXRsZT1cIlBPIFRleHRhcmVhIExhYnNcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRleHRhcmVhLWxhYnMvc2FtcGxlLXBvLXRleHRhcmVhLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10ZXh0YXJlYS1sYWJzL3NhbXBsZS1wby10ZXh0YXJlYS1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRleHRhcmVhLWVtYWlsXCIgdGl0bGU9XCJQTyBUZXh0YXJlYSAtIEVtYWlsXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10ZXh0YXJlYS1lbWFpbC9zYW1wbGUtcG8tdGV4dGFyZWEtZW1haWwuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10ZXh0YXJlYS1lbWFpbC9zYW1wbGUtcG8tdGV4dGFyZWEtZW1haWwuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdGV4dGFyZWEtZW1haWwtcmVhY3RpdmUtZm9ybVwiIHRpdGxlPVwiUE8gVGV4dGFyZWEgLSBFbWFpbCBSZWFjdGl2ZSBGb3JtXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10ZXh0YXJlYS1lbWFpbC1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby10ZXh0YXJlYS1lbWFpbC1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGV4dGFyZWEtZW1haWwtcmVhY3RpdmUtZm9ybS9zYW1wbGUtcG8tdGV4dGFyZWEtZW1haWwtcmVhY3RpdmUtZm9ybS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRleHRhcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9UZXh0YXJlYUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb1RleHRhcmVhQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgUG9UZXh0YXJlYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdpbnAnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsOiBFbGVtZW50UmVmO1xyXG5cclxuICB2YWx1ZUJlZm9yZUNoYW5nZTogYW55O1xyXG4gIGZpcmVDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihjZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBxdWUgYXRyaWJ1aSBmb2NvIGFvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIHRlciBhIGluc3TDom5jaWEgZG8gY29tcG9uZW50ZSBubyBET00sIHBvZGVuZG8gc2VyIHV0aWxpemFkbyBvIFZpZXdDaGlsZCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGltcG9ydCB7IFBvVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9UZXh0YXJlYUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgdGV4dGFyZWE6IFBvVGV4dGFyZWFDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c1RleHRhcmVhKCkge1xyXG4gICAqICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWVNb2RlbCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsKSB7XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAvLyBTZSBmb3IgbyB2YWxvciBmb3IgdW5kZWZpbmVkLCBkZXZlIGxpbXBhciBvIGNhbXBvXHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1pdGUgZXZlbnRvIHF1YW5kbyBvIG1vZGVsIMOpIGF0dWFsaXphZG8sIGluY2x1c2l2ZSBhIHByaW1laXJhIHZlelxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRNYXhMZW5ndGgobWF4bGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBtYXhsZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gbWF4bGVuZ3RoID8gdmFsdWUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgbWF4bGVuZ3RoKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRPbklucHV0KGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWxpZE1heExlbmd0aCh0aGlzLm1heGxlbmd0aCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBldmVudE9uRm9jdXMoKSB7XHJcbiAgICAvLyBBdHVhbGl6YSB2YWxvciBkYSB2YXJpw6F2ZWwgcXVlIHNlcsOhIHVzYWRhIHBhcmEgdmVyaWZpY2FyIHNlIG8gY2FtcG8gdGV2ZSBhbHRlcmHDp8Ojb1xyXG4gICAgdGhpcy52YWx1ZUJlZm9yZUNoYW5nZSA9IHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG5cclxuICAgIC8vIERpc3BhcmEgZXZlbnRvIHF1YW5kbyBvIHVzdcOhcmlvIGVudHJhciBubyBjYW1wb1xyXG4gICAgLy8gRXN0ZSBldmVudG8gdGFtYsOpbSDDqSBkaXNwYXJhZG8gcXVhbmRvIG8gY2FtcG8gaW5pY2lhIGNvbSBmb2NvLlxyXG4gICAgdGhpcy5lbnRlci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBldmVudE9uQmx1cigpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkPy4oKTtcclxuICAgIHRoaXMuYmx1ci5lbWl0KCk7XHJcbiAgICB0aGlzLmNvbnRyb2xDaGFuZ2VFbWl0dGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb250cm9sQ2hhbmdlRW1pdHRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG5cclxuICAgIGlmIChlbGVtZW50VmFsdWUgIT09IHRoaXMudmFsdWVCZWZvcmVDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChlbGVtZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8cG8tZmllbGQtY29udGFpbmVyIFtwLWhlbHBdPVwiaGVscFwiIFtwLWxhYmVsXT1cImxhYmVsXCIgW3Atb3B0aW9uYWxdPVwiIXJlcXVpcmVkICYmIG9wdGlvbmFsXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1jb250ZW50XCI+XHJcbiAgICA8dGV4dGFyZWFcclxuICAgICAgI2lucFxyXG4gICAgICBjbGFzcz1cInBvLXRleHRhcmVhXCJcclxuICAgICAgKGJsdXIpPVwiZXZlbnRPbkJsdXIoKVwiXHJcbiAgICAgIChmb2N1cyk9XCJldmVudE9uRm9jdXMoKVwiXHJcbiAgICAgIChpbnB1dCk9XCJldmVudE9uSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiZGlzYWJsZWQgPyAnJyA6IHBsYWNlaG9sZGVyXCJcclxuICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICA+PC90ZXh0YXJlYT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+PC9wby1maWVsZC1jb250YWluZXItYm90dG9tPlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19