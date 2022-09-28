import { AfterViewInit, DoCheck, ElementRef, NgZone } from '@angular/core';
import { PoCodeEditorBaseComponent } from './po-code-editor-base.component';
import { PoCodeEditorRegister } from './po-code-editor-register.service';
import { PoCodeEditorRegisterableSuggestion } from './interfaces/po-code-editor-registerable-suggestion.interface';
import { PoCodeEditorSuggestionService } from './po-code-editor-suggestion.service';
import * as i0 from "@angular/core";
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
export declare class PoCodeEditorComponent extends PoCodeEditorBaseComponent implements AfterViewInit, DoCheck {
    private zone;
    private el;
    private poCodeEditorSuggestionService;
    private codeEditorRegister?;
    editorContainer: ElementRef;
    canLoad: boolean;
    constructor(zone: NgZone, el: ElementRef, poCodeEditorSuggestionService: PoCodeEditorSuggestionService, codeEditorRegister?: PoCodeEditorRegister);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    monacoCreateModel(value: string): any;
    setValueInEditor(): void;
    setLanguage(language: string): void;
    setTheme(theme: string): void;
    setReadOnly(readOnly: boolean): void;
    setSuggestions(newSuggestions: Array<PoCodeEditorRegisterableSuggestion>, language?: string): void;
    writeValue(value: any): void;
    private initMonaco;
    private setMonacoLanguage;
    private registerCustomLanguage;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCodeEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoCodeEditorComponent, "po-code-editor", never, {}, {}, never, never, false>;
}
