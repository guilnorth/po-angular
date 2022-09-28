import { ChangeDetectionStrategy, Component, forwardRef, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoRichTextBaseComponent } from './po-rich-text-base.component';
import { PoRichTextBodyComponent } from './po-rich-text-body/po-rich-text-body.component';
import { PoRichTextService } from './po-rich-text.service';
import * as i0 from "@angular/core";
import * as i1 from "./po-rich-text.service";
import * as i2 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i3 from "../po-field-container/po-field-container.component";
import * as i4 from "./po-rich-text-body/po-rich-text-body.component";
import * as i5 from "./po-rich-text-toolbar/po-rich-text-toolbar.component";
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoRichTextComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoRichTextComponent),
        multi: true
    },
    {
        provide: PoRichTextService
    }
];
/**
 * @docsExtends PoRichTextBaseComponent
 *
 * @example
 *
 * <example name="po-rich-text-basic" title="PO Rich Text Basic">
 *   <file name="sample-po-rich-text-basic/sample-po-rich-text-basic.component.html"> </file>
 *   <file name="sample-po-rich-text-basic/sample-po-rich-text-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-rich-text-labs" title="PO Rich Text Labs">
 *   <file name="sample-po-rich-text-labs/sample-po-rich-text-labs.component.html"> </file>
 *   <file name="sample-po-rich-text-labs/sample-po-rich-text-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-rich-text-recipe" title="PO Rich Text Recipe">
 *   <file name="sample-po-rich-text-recipe/sample-po-rich-text-recipe-image-base-64.ts"> </file>
 *   <file name="sample-po-rich-text-recipe/sample-po-rich-text-recipe.component.html"> </file>
 *   <file name="sample-po-rich-text-recipe/sample-po-rich-text-recipe.component.ts"> </file>
 * </example>
 */
export class PoRichTextComponent extends PoRichTextBaseComponent {
    constructor(element, richTextService) {
        super(richTextService);
        this.element = element;
        this.listener = this.validateClassesForRequired.bind(this);
    }
    get errorMsg() {
        return this.errorMessage !== '' && !this.value && this.required && this.invalid ? this.errorMessage : '';
    }
    ngAfterViewInit() {
        // Se não tem ngModel ou reactive form adiciona validação com classes css
        this.addKeyListeners();
        this.verifyAutoFocus();
    }
    ngOnDestroy() {
        if (!this.onChangeModel) {
            this.element.nativeElement.removeEventListener('keyup', this.listener);
            this.element.nativeElement.removeEventListener('keydown', this.listener);
            this.element.nativeElement.removeEventListener('cut', this.listener);
            this.element.nativeElement.removeEventListener('paste', this.listener);
        }
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoRichTextComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoRichTextComponent, { static: true }) richText: PoRichTextComponent;
     *
     * focusRichText() {
     *   this.richText.focus();
     * }
     * ```
     */
    focus() {
        this.bodyElement.focus();
    }
    onBlur() {
        this.onTouched?.();
    }
    onChangeValue(value) {
        this.change.emit(value);
    }
    updateValue(value) {
        this.value = value;
        this.invalid = !value;
        this.controlChangeModelEmitter(this.value);
        this.updateModel(this.value);
    }
    addKeyListeners() {
        if (!this.onChangeModel) {
            this.element.nativeElement.addEventListener('keyup', this.listener);
            this.element.nativeElement.addEventListener('keydown', this.listener);
            this.element.nativeElement.addEventListener('cut', this.listener);
            this.element.nativeElement.addEventListener('paste', this.listener);
        }
    }
    controlChangeModelEmitter(value) {
        if (this.modelLastUpdate !== value) {
            this.changeModel.emit(value);
            this.modelLastUpdate = value;
        }
    }
    verifyAutoFocus() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    validateClassesForRequired() {
        setTimeout(() => {
            const value = this.value;
            const element = this.element.nativeElement;
            if (!value && this.required) {
                element.classList.add('ng-invalid');
                element.classList.add('ng-dirty');
            }
            else {
                element.classList.remove('ng-invalid');
            }
        });
    }
}
PoRichTextComponent.ɵfac = function PoRichTextComponent_Factory(t) { return new (t || PoRichTextComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PoRichTextService)); };
PoRichTextComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRichTextComponent, selectors: [["po-rich-text"]], viewQuery: function PoRichTextComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoRichTextBodyComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyElement = _t.first);
    } }, features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 10, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], [3, "p-height", "p-model-value", "p-placeholder", "p-readonly", "p-change", "p-commands", "p-selected-link", "p-shortcut-command", "p-value", "p-blur"], ["richTextBody", ""], [3, "p-readonly", "p-disabled-text-align", "p-link-editing", "p-command"], ["richTextToolbar", ""], [3, "p-error-pattern"]], template: function PoRichTextComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "po-rich-text-body", 2, 3);
        i0.ɵɵlistener("p-change", function PoRichTextComponent_Template_po_rich_text_body_p_change_2_listener($event) { return ctx.onChangeValue($event); })("p-commands", function PoRichTextComponent_Template_po_rich_text_body_p_commands_2_listener($event) { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(5); return i0.ɵɵresetView(_r1.setButtonsStates($event)); })("p-selected-link", function PoRichTextComponent_Template_po_rich_text_body_p_selected_link_2_listener($event) { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(5); return i0.ɵɵresetView(_r1.selectedLink($event)); })("p-shortcut-command", function PoRichTextComponent_Template_po_rich_text_body_p_shortcut_command_2_listener() { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(5); return i0.ɵɵresetView(_r1.shortcutTrigger()); })("p-value", function PoRichTextComponent_Template_po_rich_text_body_p_value_2_listener($event) { return ctx.updateValue($event); })("p-blur", function PoRichTextComponent_Template_po_rich_text_body_p_blur_2_listener() { return ctx.onBlur(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "po-rich-text-toolbar", 4, 5);
        i0.ɵɵlistener("p-link-editing", function PoRichTextComponent_Template_po_rich_text_toolbar_p_link_editing_4_listener($event) { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(3); return i0.ɵɵresetView(_r0.linkEditing($event)); })("p-command", function PoRichTextComponent_Template_po_rich_text_toolbar_p_command_4_listener($event) { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(3); return i0.ɵɵresetView(_r0.executeCommand($event)); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(6, "po-field-container-bottom", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-height", ctx.height)("p-model-value", ctx.value)("p-placeholder", ctx.placeholder)("p-readonly", ctx.readonly);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-readonly", ctx.readonly)("p-disabled-text-align", ctx.disabledTextAlign);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-error-pattern", ctx.errorMsg);
    } }, dependencies: [i2.PoFieldContainerBottomComponent, i3.PoFieldContainerComponent, i4.PoRichTextBodyComponent, i5.PoRichTextToolbarComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextComponent, [{
        type: Component,
        args: [{ selector: 'po-rich-text', providers: providers, changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <po-rich-text-body\r\n      #richTextBody\r\n      [p-height]=\"height\"\r\n      [p-model-value]=\"value\"\r\n      [p-placeholder]=\"placeholder\"\r\n      [p-readonly]=\"readonly\"\r\n      (p-change)=\"onChangeValue($event)\"\r\n      (p-commands)=\"richTextToolbar.setButtonsStates($event)\"\r\n      (p-selected-link)=\"richTextToolbar.selectedLink($event)\"\r\n      (p-shortcut-command)=\"richTextToolbar.shortcutTrigger()\"\r\n      (p-value)=\"updateValue($event)\"\r\n      (p-blur)=\"onBlur()\"\r\n    >\r\n    </po-rich-text-body>\r\n\r\n    <po-rich-text-toolbar\r\n      #richTextToolbar\r\n      [p-readonly]=\"readonly\"\r\n      [p-disabled-text-align]=\"disabledTextAlign\"\r\n      (p-link-editing)=\"richTextBody.linkEditing($event)\"\r\n      (p-command)=\"richTextBody.executeCommand($event)\"\r\n    >\r\n    </po-rich-text-toolbar>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"errorMsg\"></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.PoRichTextService }]; }, { bodyElement: [{
            type: ViewChild,
            args: [PoRichTextBodyComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1yaWNoLXRleHQvcG8tcmljaC10ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1yaWNoLXRleHQvcG8tcmljaC10ZXh0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsRUFFVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBRTNELDBCQUEwQjtBQUMxQixNQUFNLFNBQVMsR0FBRztJQUNoQjtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsMkJBQTJCO1FBQzNCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDbEQsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGFBQWE7UUFDdEIsMkJBQTJCO1FBQzNCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDbEQsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtLQUMzQjtDQUNGLENBQUM7QUFFRjs7Ozs7Ozs7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QkFBcUI7O1FBNUJELGlDQUFlLHNCQUFBLDZDQUFBO1FBSTdCLGVBQW1CO1FBQW5CLHFDQUFtQiw0QkFBQSxrQ0FBQSw0QkFBQTtRQWVuQixlQUF1QjtRQUF2Qix5Q0FBdUIsZ0RBQUE7UUFRQSxlQUE0QjtRQUE1Qiw4Q0FBNEI7O3VGRG1DNUMsbUJBQW1CO2NBTi9CLFNBQVM7MkJBQ0UsY0FBYyxhQUV4QixTQUFTLG1CQUNRLHVCQUF1QixDQUFDLE1BQU07NkZBR08sV0FBVztrQkFBaEUsU0FBUzttQkFBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBvUmljaFRleHRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1yaWNoLXRleHQtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1JpY2hUZXh0Qm9keUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcmljaC10ZXh0LWJvZHkvcG8tcmljaC10ZXh0LWJvZHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9SaWNoVGV4dFNlcnZpY2UgfSBmcm9tICcuL3BvLXJpY2gtdGV4dC5zZXJ2aWNlJztcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmNvbnN0IHByb3ZpZGVycyA9IFtcclxuICB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9SaWNoVGV4dENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9SaWNoVGV4dENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvdmlkZTogUG9SaWNoVGV4dFNlcnZpY2VcclxuICB9XHJcbl07XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvUmljaFRleHRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1yaWNoLXRleHQtYmFzaWNcIiB0aXRsZT1cIlBPIFJpY2ggVGV4dCBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmljaC10ZXh0LWJhc2ljL3NhbXBsZS1wby1yaWNoLXRleHQtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmljaC10ZXh0LWJhc2ljL3NhbXBsZS1wby1yaWNoLXRleHQtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcmljaC10ZXh0LWxhYnNcIiB0aXRsZT1cIlBPIFJpY2ggVGV4dCBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1yaWNoLXRleHQtbGFicy9zYW1wbGUtcG8tcmljaC10ZXh0LWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcmljaC10ZXh0LWxhYnMvc2FtcGxlLXBvLXJpY2gtdGV4dC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXJpY2gtdGV4dC1yZWNpcGVcIiB0aXRsZT1cIlBPIFJpY2ggVGV4dCBSZWNpcGVcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXJpY2gtdGV4dC1yZWNpcGUvc2FtcGxlLXBvLXJpY2gtdGV4dC1yZWNpcGUtaW1hZ2UtYmFzZS02NC50c1wiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1yaWNoLXRleHQtcmVjaXBlL3NhbXBsZS1wby1yaWNoLXRleHQtcmVjaXBlLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXJpY2gtdGV4dC1yZWNpcGUvc2FtcGxlLXBvLXJpY2gtdGV4dC1yZWNpcGUuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1yaWNoLXRleHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1yaWNoLXRleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVycyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9SaWNoVGV4dENvbXBvbmVudCBleHRlbmRzIFBvUmljaFRleHRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKFBvUmljaFRleHRCb2R5Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBib2R5RWxlbWVudDogUG9SaWNoVGV4dEJvZHlDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuZXIgPSB0aGlzLnZhbGlkYXRlQ2xhc3Nlc0ZvclJlcXVpcmVkLmJpbmQodGhpcyk7XHJcbiAgcHJpdmF0ZSBtb2RlbExhc3RVcGRhdGU6IGFueTtcclxuXHJcbiAgZ2V0IGVycm9yTXNnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICE9PSAnJyAmJiAhdGhpcy52YWx1ZSAmJiB0aGlzLnJlcXVpcmVkICYmIHRoaXMuaW52YWxpZCA/IHRoaXMuZXJyb3JNZXNzYWdlIDogJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJpY2hUZXh0U2VydmljZTogUG9SaWNoVGV4dFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKHJpY2hUZXh0U2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyBTZSBuw6NvIHRlbSBuZ01vZGVsIG91IHJlYWN0aXZlIGZvcm0gYWRpY2lvbmEgdmFsaWRhw6fDo28gY29tIGNsYXNzZXMgY3NzXHJcbiAgICB0aGlzLmFkZEtleUxpc3RlbmVycygpO1xyXG4gICAgdGhpcy52ZXJpZnlBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKCF0aGlzLm9uQ2hhbmdlTW9kZWwpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjdXQnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBhdHJpYnVpIGZvY28gYW8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gdGVyIGEgaW5zdMOibmNpYSBkbyBjb21wb25lbnRlIG5vIERPTSwgcG9kZW5kbyBzZXIgdXRpbGl6YWRvIG8gVmlld0NoaWxkIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaW1wb3J0IHsgUG9SaWNoVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICAgKlxyXG4gICAqIC4uLlxyXG4gICAqXHJcbiAgICogQFZpZXdDaGlsZChQb1JpY2hUZXh0Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSByaWNoVGV4dDogUG9SaWNoVGV4dENvbXBvbmVudDtcclxuICAgKlxyXG4gICAqIGZvY3VzUmljaFRleHQoKSB7XHJcbiAgICogICB0aGlzLnJpY2hUZXh0LmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ib2R5RWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5vblRvdWNoZWQ/LigpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaW52YWxpZCA9ICF2YWx1ZTtcclxuICAgIHRoaXMuY29udHJvbENoYW5nZU1vZGVsRW1pdHRlcih0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlTW9kZWwodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEtleUxpc3RlbmVycygpIHtcclxuICAgIGlmICghdGhpcy5vbkNoYW5nZU1vZGVsKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY3V0JywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnRyb2xDaGFuZ2VNb2RlbEVtaXR0ZXIodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubW9kZWxMYXN0VXBkYXRlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZU1vZGVsLmVtaXQodmFsdWUpO1xyXG4gICAgICB0aGlzLm1vZGVsTGFzdFVwZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlBdXRvRm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUNsYXNzZXNGb3JSZXF1aXJlZCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIGlmICghdmFsdWUgJiYgdGhpcy5yZXF1aXJlZCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmctaW52YWxpZCcpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmctZGlydHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25nLWludmFsaWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtaGVscF09XCJoZWxwXCIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxwby1yaWNoLXRleHQtYm9keVxyXG4gICAgICAjcmljaFRleHRCb2R5XHJcbiAgICAgIFtwLWhlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgICBbcC1tb2RlbC12YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtwLXBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgW3AtcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICAocC1jaGFuZ2UpPVwib25DaGFuZ2VWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgKHAtY29tbWFuZHMpPVwicmljaFRleHRUb29sYmFyLnNldEJ1dHRvbnNTdGF0ZXMoJGV2ZW50KVwiXHJcbiAgICAgIChwLXNlbGVjdGVkLWxpbmspPVwicmljaFRleHRUb29sYmFyLnNlbGVjdGVkTGluaygkZXZlbnQpXCJcclxuICAgICAgKHAtc2hvcnRjdXQtY29tbWFuZCk9XCJyaWNoVGV4dFRvb2xiYXIuc2hvcnRjdXRUcmlnZ2VyKClcIlxyXG4gICAgICAocC12YWx1ZSk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgKHAtYmx1cik9XCJvbkJsdXIoKVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLXJpY2gtdGV4dC1ib2R5PlxyXG5cclxuICAgIDxwby1yaWNoLXRleHQtdG9vbGJhclxyXG4gICAgICAjcmljaFRleHRUb29sYmFyXHJcbiAgICAgIFtwLXJlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgICAgW3AtZGlzYWJsZWQtdGV4dC1hbGlnbl09XCJkaXNhYmxlZFRleHRBbGlnblwiXHJcbiAgICAgIChwLWxpbmstZWRpdGluZyk9XCJyaWNoVGV4dEJvZHkubGlua0VkaXRpbmcoJGV2ZW50KVwiXHJcbiAgICAgIChwLWNvbW1hbmQpPVwicmljaFRleHRCb2R5LmV4ZWN1dGVDb21tYW5kKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9wby1yaWNoLXRleHQtdG9vbGJhcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20gW3AtZXJyb3ItcGF0dGVybl09XCJlcnJvck1zZ1wiPjwvcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT5cclxuPC9wby1maWVsZC1jb250YWluZXI+XHJcbiJdfQ==