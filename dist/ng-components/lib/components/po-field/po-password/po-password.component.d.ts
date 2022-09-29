import { AbstractControl } from '@angular/forms';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 * O po-password é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.
 *
 * @example
 *
 * <example name="po-password-basic" title="PO Password Basic">
 *   <file name="sample-po-password-basic/sample-po-password-basic.component.html"> </file>
 *   <file name="sample-po-password-basic/sample-po-password-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-password-labs" title="PO Password Labs">
 *   <file name="sample-po-password-labs/sample-po-password-labs.component.html"> </file>
 *   <file name="sample-po-password-labs/sample-po-password-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-password-reset" title="PO Password - Reset">
 *   <file name="sample-po-password-reset/sample-po-password-reset.component.html"> </file>
 *   <file name="sample-po-password-reset/sample-po-password-reset.component.ts"> </file>
 * </example>
 */
export declare class PoPasswordComponent extends PoInputGeneric {
    type: string;
    visiblePassword: boolean;
    private _hidePasswordPeek?;
    /**
     * @optional
     *
     * @description
     *
     * Permite esconder a função de espiar a senha digitada.
     *
     * @default `false`
     */
    set hidePasswordPeek(value: boolean);
    get hidePasswordPeek(): boolean;
    get autocomplete(): string;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    showPassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPasswordComponent, "po-password", never, { "hidePasswordPeek": "p-hide-password-peek"; }, {}, never, never, false>;
}