import { Component, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoCodeEditorBaseComponent } from './po-code-editor-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./po-code-editor-suggestion.service";
import * as i2 from "./po-code-editor-register.service";
const _c0 = ["editorContainer"];
// variáveis relacionadas ao Monaco
let loadedMonaco = false;
let loadPromise;
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoCodeEditorComponent),
        multi: true
    }
];
/**
 * @docsExtends PoCodeEditorBaseComponent
 *
 * @example
 *
 * <example name="po-code-editor-basic" title="PO Code Editor Basic">
 *  <file name="sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"> </file>
 *  <file name="sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-labs" title="PO Code Editor Labs">
 *  <file name="sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"> </file>
 *  <file name="sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-diff" title="PO Code Editor - Diff">
 *  <file name="sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"> </file>
 *  <file name="sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-terraform" title="PO Code Editor - Terraform">
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"> </file>
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"> </file>
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"> </file>
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-suggestion" title="PO Code Editor Suggestion">
 *  <file name="sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"> </file>
 *  <file name="sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"> </file>
 * </example>
 */
export class PoCodeEditorComponent extends PoCodeEditorBaseComponent {
    constructor(zone, el, poCodeEditorSuggestionService, codeEditorRegister) {
        super();
        this.zone = zone;
        this.el = el;
        this.poCodeEditorSuggestionService = poCodeEditorSuggestionService;
        this.codeEditorRegister = codeEditorRegister;
        this.canLoad = false;
    }
    /* istanbul ignore next */
    ngAfterViewInit() {
        if (loadedMonaco) {
            /* istanbul ignore next */
            loadPromise.then(() => {
                setTimeout(() => {
                    if (this.el.nativeElement.offsetWidth) {
                        this.registerCustomLanguage();
                        this.initMonaco(this.getOptions());
                    }
                    else {
                        this.canLoad = true;
                    }
                });
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise((resolve) => {
                /* istanbul ignore next */
                const onGotAmdLoader = () => {
                    window.require.config({ paths: { 'vs': './assets/monaco/vs' } });
                    window.require(['vs/editor/editor.main'], () => {
                        setTimeout(() => {
                            if (this.el.nativeElement.offsetWidth) {
                                this.registerCustomLanguage();
                                this.initMonaco(this.getOptions());
                            }
                            else {
                                this.canLoad = true;
                            }
                            resolve();
                        });
                    });
                };
                if (!window.require) {
                    const loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = './assets/monaco/vs/loader.js';
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
            });
        }
    }
    ngDoCheck() {
        if (this.canLoad && this.el.nativeElement.offsetWidth) {
            this.registerCustomLanguage();
            this.initMonaco(this.getOptions());
            this.canLoad = false;
        }
    }
    /* istanbul ignore next */
    monacoCreateModel(value) {
        return monaco.editor.createModel(value);
    }
    setValueInEditor() {
        if (this.showDiff) {
            setTimeout(() => {
                if (this.editor) {
                    this.editor.setModel({
                        original: this.monacoCreateModel(this.value),
                        modified: this.monacoCreateModel(this.modifiedValue)
                    });
                }
            });
        }
        else {
            setTimeout(() => {
                if (this.editor) {
                    this.editor.setValue(this.value);
                }
            });
        }
    }
    setLanguage(language) {
        if (this.showDiff) {
            this.setMonacoLanguage(this.editor.getModel().original, language);
            this.setMonacoLanguage(this.editor.getModel().modified, language);
        }
        else {
            this.setMonacoLanguage(this.editor.getModel(), language);
        }
    }
    /* istanbul ignore next */
    setTheme(theme) {
        monaco.editor.setTheme(theme);
    }
    setReadOnly(readOnly) {
        this.editor.updateOptions({ readOnly: readOnly });
    }
    /* istanbul ignore next */
    setSuggestions(newSuggestions, language = this.language) {
        if (!newSuggestions) {
            return;
        }
        const suggestions = this.poCodeEditorSuggestionService.getSuggestion(language, newSuggestions);
        monaco.languages.registerCompletionItemProvider(language, {
            provideCompletionItems: () => ({ suggestions })
        });
    }
    writeValue(value) {
        this.value = value && value instanceof Array ? value[0] : value;
        this.modifiedValue = value && value instanceof Array && value.length > 0 ? value[1] : '';
        this.setValueInEditor();
    }
    /* istanbul ignore next */
    initMonaco(options) {
        if (this.showDiff) {
            this.editor = monaco.editor.createDiffEditor(this.editorContainer.nativeElement, options);
            this.editor.setModel({
                original: monaco.editor.createModel(this.value),
                modified: monaco.editor.createModel(this.modifiedValue)
            });
            this.editor.onDidUpdateDiff((e) => {
                const original = this.editor.getModel().original.getValue();
                const modified = this.editor.getModel().modified.getValue();
                this.onChangePropagate([original, modified]);
            });
        }
        else {
            this.editor = monaco.editor.create(this.editorContainer.nativeElement, options);
            this.editor.setValue(this.value);
            this.editor.onDidChangeModelContent((e) => {
                const value = this.editor.getValue();
                this.onChangePropagate(value);
                this.zone.run(() => (this.value = value));
            });
        }
        setTimeout(() => {
            this.setLanguage(this.language);
            this.setSuggestions(this.suggestions);
        }, 500);
    }
    /* istanbul ignore next */
    setMonacoLanguage(model, language) {
        monaco.editor.setModelLanguage(model, language);
    }
    registerCustomLanguage() {
        if (this.codeEditorRegister.language) {
            monaco.languages.register({ id: this.codeEditorRegister.language });
            if (this.codeEditorRegister.options) {
                monaco.languages.setMonarchTokensProvider(this.codeEditorRegister.language, this.codeEditorRegister.options);
            }
            if (this.codeEditorRegister.suggestions) {
                this.setSuggestions(this.codeEditorRegister.suggestions.provideCompletionItems().suggestions, this.codeEditorRegister.language);
            }
        }
    }
}
PoCodeEditorComponent.ɵfac = function PoCodeEditorComponent_Factory(t) { return new (t || PoCodeEditorComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PoCodeEditorSuggestionService), i0.ɵɵdirectiveInject(i2.PoCodeEditorRegister)); };
PoCodeEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCodeEditorComponent, selectors: [["po-code-editor"]], viewQuery: function PoCodeEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorContainer = _t.first);
    } }, features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["editorContainer", ""]], template: function PoCodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorComponent, [{
        type: Component,
        args: [{ selector: 'po-code-editor', providers: providers, template: "<div #editorContainer [style.height]=\"height\"></div>\r\n" }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i1.PoCodeEditorSuggestionService }, { type: i2.PoCodeEditorRegister }]; }, { editorContainer: [{
            type: ViewChild,
            args: ['editorContainer', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29kZS1lZGl0b3Ivc3JjL2xpYi9jb21wb25lbnRzL3BvLWNvZGUtZWRpdG9yL3BvLWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvZGUtZWRpdG9yL3NyYy9saWIvY29tcG9uZW50cy9wby1jb2RlLWVkaXRvci9wby1jb2RlLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBdUIsVUFBVSxFQUFVLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFLNUUsbUNBQW1DO0FBQ25DLElBQUksWUFBWSxHQUFZLEtBQUssQ0FBQztBQUNsQyxJQUFJLFdBQTBCLENBQUM7QUFNL0IsMEJBQTBCO0FBQzFCLE1BQU0sU0FBUyxHQUFvQjtJQUNqQztRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsMkJBQTJCO1FBQzNCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDcEQsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCRztBQU1ILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7SUFLbEUsWUFDVSxJQUFZLEVBQ1osRUFBYyxFQUNkLDZCQUE0RCxFQUM1RCxrQkFBeUM7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFMQSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGtD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ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRG9DaGVjaywgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgTmdab25lLCBWaWV3Q2hpbGQsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9Db2RlRWRpdG9yQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tY29kZS1lZGl0b3ItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NvZGVFZGl0b3JSZWdpc3RlciB9IGZyb20gJy4vcG8tY29kZS1lZGl0b3ItcmVnaXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24gfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29kZS1lZGl0b3ItcmVnaXN0ZXJhYmxlLXN1Z2dlc3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Db2RlRWRpdG9yU3VnZ2VzdGlvblNlcnZpY2UgfSBmcm9tICcuL3BvLWNvZGUtZWRpdG9yLXN1Z2dlc3Rpb24uc2VydmljZSc7XHJcblxyXG4vLyB2YXJpw6F2ZWlzIHJlbGFjaW9uYWRhcyBhbyBNb25hY29cclxubGV0IGxvYWRlZE1vbmFjbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5sZXQgbG9hZFByb21pc2U6IFByb21pc2U8dm9pZD47XHJcblxyXG5kZWNsYXJlIGNvbnN0IG1vbmFjbzogYW55O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuZGVjbGFyZSBjb25zdCByZXF1aXJlOiBhbnk7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5jb25zdCBwcm92aWRlcnM6IEFycmF5PFByb3ZpZGVyPiA9IFtcclxuICB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9Db2RlRWRpdG9yQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0NvZGVFZGl0b3JCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jb2RlLWVkaXRvci1iYXNpY1wiIHRpdGxlPVwiUE8gQ29kZSBFZGl0b3IgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29kZS1lZGl0b3ItYmFzaWMvc2FtcGxlLXBvLWNvZGUtZWRpdG9yLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29kZS1lZGl0b3ItYmFzaWMvc2FtcGxlLXBvLWNvZGUtZWRpdG9yLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNvZGUtZWRpdG9yLWxhYnNcIiB0aXRsZT1cIlBPIENvZGUgRWRpdG9yIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29kZS1lZGl0b3ItbGFicy9zYW1wbGUtcG8tY29kZS1lZGl0b3ItbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvZGUtZWRpdG9yLWxhYnMvc2FtcGxlLXBvLWNvZGUtZWRpdG9yLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY29kZS1lZGl0b3ItZGlmZlwiIHRpdGxlPVwiUE8gQ29kZSBFZGl0b3IgLSBEaWZmXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvZGUtZWRpdG9yLWRpZmYvc2FtcGxlLXBvLWNvZGUtZWRpdG9yLWRpZmYuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb2RlLWVkaXRvci1kaWZmL3NhbXBsZS1wby1jb2RlLWVkaXRvci1kaWZmLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNvZGUtZWRpdG9yLXRlcnJhZm9ybVwiIHRpdGxlPVwiUE8gQ29kZSBFZGl0b3IgLSBUZXJyYWZvcm1cIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29kZS1lZGl0b3ItdGVycmFmb3JtL3NhbXBsZS1wby1jb2RlLWVkaXRvci10ZXJyYWZvcm0uY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb2RlLWVkaXRvci10ZXJyYWZvcm0vc2FtcGxlLXBvLWNvZGUtZWRpdG9yLXRlcnJhZm9ybS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb2RlLWVkaXRvci10ZXJyYWZvcm0vc2FtcGxlLXBvLWNvZGUtZWRpdG9yLXRlcnJhZm9ybS5jb25zdGFudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvZGUtZWRpdG9yLXRlcnJhZm9ybS9zYW1wbGUtcG8tY29kZS1lZGl0b3ItdGVycmFmb3JtLm1vZHVsZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNvZGUtZWRpdG9yLXN1Z2dlc3Rpb25cIiB0aXRsZT1cIlBPIENvZGUgRWRpdG9yIFN1Z2dlc3Rpb25cIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29kZS1lZGl0b3Itc3VnZ2VzdGlvbi9zYW1wbGUtcG8tY29kZS1lZGl0b3Itc3VnZ2VzdGlvbi5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvZGUtZWRpdG9yLXN1Z2dlc3Rpb24vc2FtcGxlLXBvLWNvZGUtZWRpdG9yLXN1Z2dlc3Rpb24uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1jb2RlLWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNvZGUtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnNcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ29kZUVkaXRvckNvbXBvbmVudCBleHRlbmRzIFBvQ29kZUVkaXRvckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrIHtcclxuICBAVmlld0NoaWxkKCdlZGl0b3JDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBlZGl0b3JDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNhbkxvYWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHBvQ29kZUVkaXRvclN1Z2dlc3Rpb25TZXJ2aWNlOiBQb0NvZGVFZGl0b3JTdWdnZXN0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29kZUVkaXRvclJlZ2lzdGVyPzogUG9Db2RlRWRpdG9yUmVnaXN0ZXJcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChsb2FkZWRNb25hY28pIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgbG9hZFByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDdXN0b21MYW5ndWFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRNb25hY28odGhpcy5nZXRPcHRpb25zKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Mb2FkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xyXG4gICAgICBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiBhbnkpID0+IHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGNvbnN0IG9uR290QW1kTG9hZGVyOiBhbnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAoPGFueT53aW5kb3cpLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgJ3ZzJzogJy4vYXNzZXRzL21vbmFjby92cycgfSB9KTtcclxuICAgICAgICAgICg8YW55PndpbmRvdykucmVxdWlyZShbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDdXN0b21MYW5ndWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuZ2V0T3B0aW9ucygpKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Mb2FkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghKDxhbnk+d2luZG93KS5yZXF1aXJlKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkZXJTY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICBsb2FkZXJTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgICAgbG9hZGVyU2NyaXB0LnNyYyA9ICcuL2Fzc2V0cy9tb25hY28vdnMvbG9hZGVyLmpzJztcclxuICAgICAgICAgIGxvYWRlclNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Hb3RBbWRMb2FkZXIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkZXJTY3JpcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAodGhpcy5jYW5Mb2FkICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ3VzdG9tTGFuZ3VhZ2UoKTtcclxuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuZ2V0T3B0aW9ucygpKTtcclxuICAgICAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIG1vbmFjb0NyZWF0ZU1vZGVsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlSW5FZGl0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5zaG93RGlmZikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGVsKHtcclxuICAgICAgICAgICAgb3JpZ2luYWw6IHRoaXMubW9uYWNvQ3JlYXRlTW9kZWwodGhpcy52YWx1ZSksXHJcbiAgICAgICAgICAgIG1vZGlmaWVkOiB0aGlzLm1vbmFjb0NyZWF0ZU1vZGVsKHRoaXMubW9kaWZpZWRWYWx1ZSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5zaG93RGlmZikge1xyXG4gICAgICB0aGlzLnNldE1vbmFjb0xhbmd1YWdlKHRoaXMuZWRpdG9yLmdldE1vZGVsKCkub3JpZ2luYWwsIGxhbmd1YWdlKTtcclxuICAgICAgdGhpcy5zZXRNb25hY29MYW5ndWFnZSh0aGlzLmVkaXRvci5nZXRNb2RlbCgpLm1vZGlmaWVkLCBsYW5ndWFnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldE1vbmFjb0xhbmd1YWdlKHRoaXMuZWRpdG9yLmdldE1vZGVsKCksIGxhbmd1YWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgc2V0VGhlbWUodGhlbWU6IHN0cmluZykge1xyXG4gICAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBzZXRSZWFkT25seShyZWFkT25seTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5lZGl0b3IudXBkYXRlT3B0aW9ucyh7IHJlYWRPbmx5OiByZWFkT25seSB9KTtcclxuICB9XHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgc2V0U3VnZ2VzdGlvbnMobmV3U3VnZ2VzdGlvbnM6IEFycmF5PFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24+LCBsYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2UpIHtcclxuICAgIGlmICghbmV3U3VnZ2VzdGlvbnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5wb0NvZGVFZGl0b3JTdWdnZXN0aW9uU2VydmljZS5nZXRTdWdnZXN0aW9uKGxhbmd1YWdlLCBuZXdTdWdnZXN0aW9ucyk7XHJcblxyXG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIobGFuZ3VhZ2UsIHtcclxuICAgICAgcHJvdmlkZUNvbXBsZXRpb25JdGVtczogKCkgPT4gKHsgc3VnZ2VzdGlvbnMgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZVswXSA6IHZhbHVlO1xyXG4gICAgdGhpcy5tb2RpZmllZFZhbHVlID0gdmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gdmFsdWVbMV0gOiAnJztcclxuICAgIHRoaXMuc2V0VmFsdWVJbkVkaXRvcigpO1xyXG4gIH1cclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBwcml2YXRlIGluaXRNb25hY28ob3B0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93RGlmZikge1xyXG4gICAgICB0aGlzLmVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVkaXRvckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGVsKHtcclxuICAgICAgICBvcmlnaW5hbDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlKSxcclxuICAgICAgICBtb2RpZmllZDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLm1vZGlmaWVkVmFsdWUpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5lZGl0b3Iub25EaWRVcGRhdGVEaWZmKChlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbCA9IHRoaXMuZWRpdG9yLmdldE1vZGVsKCkub3JpZ2luYWwuZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZCA9IHRoaXMuZWRpdG9yLmdldE1vZGVsKCkubW9kaWZpZWQuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKFtvcmlnaW5hbCwgbW9kaWZpZWRdKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5lZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+ICh0aGlzLnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcclxuICAgICAgdGhpcy5zZXRTdWdnZXN0aW9ucyh0aGlzLnN1Z2dlc3Rpb25zKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIHByaXZhdGUgc2V0TW9uYWNvTGFuZ3VhZ2UobW9kZWwsIGxhbmd1YWdlKSB7XHJcbiAgICBtb25hY28uZWRpdG9yLnNldE1vZGVsTGFuZ3VhZ2UobW9kZWwsIGxhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJDdXN0b21MYW5ndWFnZSgpIHtcclxuICAgIGlmICh0aGlzLmNvZGVFZGl0b3JSZWdpc3Rlci5sYW5ndWFnZSkge1xyXG4gICAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyKHsgaWQ6IHRoaXMuY29kZUVkaXRvclJlZ2lzdGVyLmxhbmd1YWdlIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY29kZUVkaXRvclJlZ2lzdGVyLm9wdGlvbnMpIHtcclxuICAgICAgICBtb25hY28ubGFuZ3VhZ2VzLnNldE1vbmFyY2hUb2tlbnNQcm92aWRlcih0aGlzLmNvZGVFZGl0b3JSZWdpc3Rlci5sYW5ndWFnZSwgdGhpcy5jb2RlRWRpdG9yUmVnaXN0ZXIub3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmNvZGVFZGl0b3JSZWdpc3Rlci5zdWdnZXN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0U3VnZ2VzdGlvbnMoXHJcbiAgICAgICAgICB0aGlzLmNvZGVFZGl0b3JSZWdpc3Rlci5zdWdnZXN0aW9ucy5wcm92aWRlQ29tcGxldGlvbkl0ZW1zKCkuc3VnZ2VzdGlvbnMsXHJcbiAgICAgICAgICB0aGlzLmNvZGVFZGl0b3JSZWdpc3Rlci5sYW5ndWFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAjZWRpdG9yQ29udGFpbmVyIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XHJcbiJdfQ==