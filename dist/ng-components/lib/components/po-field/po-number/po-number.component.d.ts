import { AbstractControl } from '@angular/forms';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { PoNumberBaseComponent } from './po-number-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * O `po-number` é um input específico para receber apenas números.
 * É possível configurar um valor mínimo, máximo e um step com p-min, p-max e p-step,
 * respectivamente.
 *
 * @example
 *
 * <example name="po-number-basic" title="PO Number Basic">
 *  <file name="sample-po-number-basic/sample-po-number-basic.component.html"> </file>
 *  <file name="sample-po-number-basic/sample-po-number-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-number-labs" title="PO Number Labs">
 *  <file name="sample-po-number-labs/sample-po-number-labs.component.html"> </file>
 *  <file name="sample-po-number-labs/sample-po-number-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-number-calculate" title="PO Number - Calculate">
 *  <file name="sample-po-number-calculate/sample-po-number-calculate.component.html"> </file>
 *  <file name="sample-po-number-calculate/sample-po-number-calculate.component.ts"> </file>
 * </example>
 */
export declare class PoNumberComponent extends PoNumberBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Intervalo.
     *
     * @default 1
     */
    step?: string;
    /** Valor mínimo.
     *
     * > Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `p-step` também passando a ela um valor decimal.
     */
    min?: number;
    set setMin(min: number);
    /** Valor máximo.
     *
     * > Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `p-step` também passando a ela um valor decimal.
     */
    max?: number;
    set setMax(max: number);
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    extraValidation(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    getErrorPatternMessage(): string;
    private containsInvalidClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoNumberComponent, "po-number", never, { "step": "p-step"; "setMin": "p-min"; "setMax": "p-max"; }, {}, never, never, false>;
}
