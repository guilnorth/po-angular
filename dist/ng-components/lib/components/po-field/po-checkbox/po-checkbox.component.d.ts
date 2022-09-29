import { ChangeDetectorRef, ElementRef, AfterViewInit } from '@angular/core';
import { PoCheckboxBaseComponent } from './po-checkbox-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoCheckboxBaseComponent
 *
 * @example
 *
 * <example name="po-checkbox-basic" title="PO Checkbox Basic">
 *   <file name="sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"> </file>
 *   <file name="sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-labs" title="PO Checkbox Labs">
 *   <file name="sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"> </file>
 *   <file name="sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-acceptance-term" title="PO Checkbox - Acceptance Term">
 *   <file name="sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"> </file>
 *   <file name="sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"> </file>
 * </example>
 */
export declare class PoCheckboxComponent extends PoCheckboxBaseComponent implements AfterViewInit {
    private changeDetector;
    checkboxLabel: ElementRef;
    constructor(changeDetector: ChangeDetectorRef);
    /**
     * Função que atribui foco ao *checkbox*.
     *
     * Para utilizá-la é necessário capturar a referência do componente no DOM através do `ViewChild`, como por exemplo:
     *
     * ```
     * ...
     * import { ViewChild } from '@angular/core';
     * import { PoCheckboxComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;
     *
     * focusCheckbox() {
     *   this.checkbox.focus();
     * }
     * ```
     */
    focus(): void;
    onBlur(): void;
    ngAfterViewInit(): void;
    onKeyDown(event: KeyboardEvent, value: boolean | string): void;
    protected changeModelValue(value: boolean | null | string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoCheckboxComponent, "po-checkbox", never, {}, {}, never, never, false>;
}