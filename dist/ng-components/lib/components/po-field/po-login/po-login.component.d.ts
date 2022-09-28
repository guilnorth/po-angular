import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 * O po-login é um input específico para login. Já possui tipo, estilo e ícone predefinidos.
 *
 * @example
 *
 * <example name="po-login-basic" title="PO Login Basic">
 *  <file name="sample-po-login-basic/sample-po-login-basic.component.html"> </file>
 *  <file name="sample-po-login-basic/sample-po-login-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-login-labs" title="PO Login Labs">
 *  <file name="sample-po-login-labs/sample-po-login-labs.component.html"> </file>
 *  <file name="sample-po-login-labs/sample-po-login-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-login-confirm" title="PO Login - Confirm Identity">
 *  <file name="sample-po-login-confirm/sample-po-login-confirm.component.html"> </file>
 *  <file name="sample-po-login-confirm/sample-po-login-confirm.component.ts"> </file>
 * </example>
 *
 */
export declare class PoLoginComponent extends PoInputGeneric {
    type: string;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoLoginComponent, "po-login", never, {}, {}, never, never, false>;
}
