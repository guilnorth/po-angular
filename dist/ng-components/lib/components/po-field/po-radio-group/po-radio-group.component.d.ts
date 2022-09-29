import { AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, IterableDiffers, QueryList } from '@angular/core';
import { PoRadioGroupBaseComponent } from './po-radio-group-base.component';
import * as i0 from "@angular/core";
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
export declare class PoRadioGroupComponent extends PoRadioGroupBaseComponent implements AfterViewInit, DoCheck {
    private cd;
    /** Label do campo. */
    label?: string;
    /** Texto de apoio do campo. */
    help?: string;
    inputEl: ElementRef;
    radioLabels: QueryList<ElementRef>;
    differ: any;
    constructor(differs: IterableDiffers, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    eventClick(value: any, disabled: any): void;
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
    focus(): void;
    getElementByValue(value: any): any;
    onKeyUp(event: KeyboardEvent, value: any): void;
    private isArrowKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoRadioGroupComponent, "po-radio-group", never, { "label": "p-label"; "help": "p-help"; }, {}, never, never, false>;
}