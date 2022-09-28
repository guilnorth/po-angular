import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { PoFieldModel } from './po-field.model';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoFieldModel
 */
export declare abstract class PoFieldValidateModel<T> extends PoFieldModel<T> implements Validator {
    /**
     * @optional
     *
     * @description
     *
     * Define se a indicação de campo opcional será exibida.
     *
     * > Não será exibida a indicação se:
     * - O campo conter `p-required`;
     * - Não possuir `p-help` e/ou `p-label`.
     *
     * @default `false`
     */
    optional: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    required: boolean;
    private onValidatorChange;
    validate(abstractControl: AbstractControl): ValidationErrors;
    registerOnValidatorChange(fn: any): void;
    validateModel(): void;
    abstract extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PoFieldValidateModel<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoFieldValidateModel<any>, never, never, { "optional": "p-optional"; "required": "p-required"; }, {}, never, never, false>;
}
