import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { PoRichTextBaseComponent } from './po-rich-text-base.component';
import { PoRichTextBodyComponent } from './po-rich-text-body/po-rich-text-body.component';
import { PoRichTextService } from './po-rich-text.service';
import * as i0 from "@angular/core";
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
export declare class PoRichTextComponent extends PoRichTextBaseComponent implements AfterViewInit, OnDestroy {
    private element;
    bodyElement: PoRichTextBodyComponent;
    private listener;
    private modelLastUpdate;
    get errorMsg(): string;
    constructor(element: ElementRef, richTextService: PoRichTextService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
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
    focus(): void;
    onBlur(): void;
    onChangeValue(value: any): void;
    updateValue(value: string): void;
    private addKeyListeners;
    private controlChangeModelEmitter;
    private verifyAutoFocus;
    private validateClassesForRequired;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRichTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoRichTextComponent, "po-rich-text", never, {}, {}, never, never, false>;
}
