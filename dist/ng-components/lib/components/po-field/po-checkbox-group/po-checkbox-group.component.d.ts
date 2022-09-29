import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, QueryList } from '@angular/core';
import { PoCheckboxGroupBaseComponent } from './po-checkbox-group-base.component';
import { PoCheckboxGroupOption } from './interfaces/po-checkbox-group-option.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoCheckboxGroupBaseComponent
 *
 * @example
 *
 * <example name="po-checkbox-group-basic" title="PO Checkbox Group Basic">
 *  <file name="sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"> </file>
 *  <file name="sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-group-labs" title="PO Checkbox Group Labs">
 *  <file name="sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"> </file>
 *  <file name="sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-group-password-policy" title="PO Checkbox Group – Security policy">
 *  <file name="sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"> </file>
 *  <file name="sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"> </file>
 * </example>
 */
export declare class PoCheckboxGroupComponent extends PoCheckboxGroupBaseComponent implements AfterViewChecked, AfterViewInit {
    private changeDetector;
    checkboxLabels: QueryList<ElementRef>;
    constructor(changeDetector: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoCheckboxGroupComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;
     *
     * focusCheckbox() {
     *   this.checkbox.focus();
     * }
     * ```
     */
    focus(): void;
    onKeyDown(event: KeyboardEvent, option: PoCheckboxGroupOption): void;
    trackByFn(index: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCheckboxGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoCheckboxGroupComponent, "po-checkbox-group", never, {}, {}, never, never, false>;
}