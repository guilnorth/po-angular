import { ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { PoTextareaBaseComponent } from './po-textarea-base.component';
import * as i0 from "@angular/core";
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
export declare class PoTextareaComponent extends PoTextareaBaseComponent implements AfterViewInit {
    inputEl: ElementRef;
    valueBeforeChange: any;
    fireChange: boolean;
    constructor(cd: ChangeDetectorRef);
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
    focus(): void;
    ngAfterViewInit(): void;
    writeValueModel(value: any): void;
    validMaxLength(maxlength: number, value: string): string;
    eventOnInput(event: any): void;
    eventOnFocus(): void;
    eventOnBlur(): void;
    controlChangeEmitter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTextareaComponent, "po-textarea", never, {}, {}, never, never, false>;
}