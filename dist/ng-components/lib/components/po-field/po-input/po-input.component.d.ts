import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInputBaseComponent
 *
 * @example
 *
 * <example name="po-input-basic" title="PO Input Basic">
 *  <file name="sample-po-input-basic/sample-po-input-basic.component.html"> </file>
 *  <file name="sample-po-input-basic/sample-po-input-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-input-labs" title="PO Input Labs">
 *  <file name="sample-po-input-labs/sample-po-input-labs.component.html"> </file>
 *  <file name="sample-po-input-labs/sample-po-input-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-input-reactive-form" title="PO Input - Reactive Form">
 *  <file name="sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"> </file>
 *  <file name="sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"> </file>
 * </example>
 */
export declare class PoInputComponent extends PoInputGeneric {
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PoInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoInputComponent, "po-input", never, {}, {}, never, never, false>;
}