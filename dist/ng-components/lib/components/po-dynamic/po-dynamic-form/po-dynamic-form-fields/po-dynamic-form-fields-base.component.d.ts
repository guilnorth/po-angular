import { EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { PoDynamicFormField } from '../po-dynamic-form-field.interface';
import { PoDynamicFormFieldInternal } from './po-dynamic-form-field-internal.interface';
import * as i0 from "@angular/core";
export declare class PoDynamicFormFieldsBaseComponent {
    private titleCasePipe;
    autoFocus?: string;
    disabledForm: boolean;
    validate?: string | Function;
    formValidate: EventEmitter<any>;
    fieldsChange: EventEmitter<any>;
    objectValue: EventEmitter<any>;
    validateOnInput: boolean;
    visibleFields: Array<PoDynamicFormFieldInternal>;
    private _fields;
    private _validateFields;
    private _value?;
    set fields(value: Array<PoDynamicFormField>);
    get fields(): Array<PoDynamicFormField>;
    set value(value: any);
    get value(): any;
    set validateFields(value: Array<string>);
    get validateFields(): Array<string>;
    constructor(titleCasePipe: TitleCasePipe);
    compareTo(value: any, compareTo: any): boolean;
    protected getVisibleFields(): any[];
    private convertOptions;
    private createField;
    private existsProperty;
    private getComponentControl;
    private hasFocus;
    private isCheckboxGroup;
    private isCombo;
    private isCurrencyType;
    private isLookupFilter;
    private isComboFilter;
    private isLookup;
    private isMultiselect;
    private isNumberType;
    private isPassword;
    private isRadioGroup;
    private verifyforceOptionComponent;
    private isSelect;
    private isTextarea;
    private printError;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicFormFieldsBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDynamicFormFieldsBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "disabledForm": "p-disabled-form"; "validate": "p-validate"; "validateOnInput": "p-validate-on-input"; "fields": "p-fields"; "value": "p-value"; "validateFields": "p-validate-fields"; }, { "formValidate": "p-form-validate"; "fieldsChange": "p-fieldsChange"; "objectValue": "p-object-value"; }, never, never, false>;
}