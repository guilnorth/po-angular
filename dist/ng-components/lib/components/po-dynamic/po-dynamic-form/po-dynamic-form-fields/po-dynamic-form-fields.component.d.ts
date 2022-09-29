import { ChangeDetectorRef, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { PoDynamicFormField } from '../po-dynamic-form-field.interface';
import { PoDynamicFormFieldsBaseComponent } from './po-dynamic-form-fields-base.component';
import { PoDynamicFormValidationService } from '../po-dynamic-form-validation/po-dynamic-form-validation.service';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente de criação dos campos dinâmicos.
 */
export declare class PoDynamicFormFieldsComponent extends PoDynamicFormFieldsBaseComponent implements OnChanges {
    private validationService;
    private changes;
    private form;
    components: QueryList<{
        name: string;
        focus: () => void;
    }>;
    private previousValue;
    constructor(titleCasePipe: TitleCasePipe, validationService: PoDynamicFormValidationService, changes: ChangeDetectorRef, form: NgForm);
    ngOnChanges(changes: SimpleChanges): void;
    focus(property: string): void;
    isDisabled(field: PoDynamicFormField): boolean;
    onChangeField(visibleField: PoDynamicFormField, objectValue?: any): Promise<void>;
    onChangeFieldModel(visibleField: PoDynamicFormField): void;
    updatePreviousValue(): void;
    trackBy(index: any): any;
    private applyFieldValidation;
    private getField;
    private triggerValidationOnForm;
    private updateFields;
    private validateFieldsChecker;
    private validateField;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicFormFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDynamicFormFieldsComponent, "po-dynamic-form-fields", never, {}, {}, never, never, false>;
}