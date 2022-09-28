import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PoDynamicFormBaseComponent } from './po-dynamic-form-base.component';
import { PoDynamicFormField } from './po-dynamic-form-field.interface';
import { PoDynamicFormLoadService } from './po-dynamic-form-load/po-dynamic-form-load.service';
import { PoDynamicFormValidationService } from './po-dynamic-form-validation/po-dynamic-form-validation.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoDynamicFormBaseComponent
 *
 * @example
 *
 * <example name="po-dynamic-form-basic" title="PO Dynamic Form Basic">
 *  <file name="sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"> </file>
 *  <file name="sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-dynamic-form-register" title="PO Dynamic Form - Register">
 *  <file name="sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"> </file>
 *  <file name="sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"> </file>
 *  <file name="sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"> </file>
 * </example>
 */
export declare class PoDynamicFormComponent extends PoDynamicFormBaseComponent implements OnInit, OnDestroy {
    private changes;
    private loadService;
    private validationService;
    fieldsComponent: {
        focus: (property: string) => void;
        updatePreviousValue: () => void;
    };
    disabledForm: boolean;
    private _form;
    private onLoadSubscription;
    private sendFormSubscription;
    private comboOptionSubject;
    set form(value: NgForm);
    get form(): NgForm;
    constructor(changes: ChangeDetectorRef, loadService: PoDynamicFormLoadService, validationService: PoDynamicFormValidationService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    /**
     * Função que atribui foco ao campo desejado.
     *
     * Para utilizá-la é necessário capturar a instância do `dynamic form`, como por exemplo:
     *
     * ``` html
     * <po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
     * ```
     *
     * ``` javascript
     * import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
     *
     * fields: Array<PoDynamicFormField> = [
     *   { property: 'fieldOne' },
     *   { property: 'fieldTwo' }
     * ];
     *
     * fieldFocus() {
     *   this.dynamicForm.focus('fieldTwo');
     * }
     * ```
     *
     * @param {string} property Nome da propriedade atribuída ao `PoDynamicFormField.property`.
     */
    focus(property: string): void;
    getObjectValue(): Observable<any>;
    sendObjectValue(objectValue: any): void;
    validateForm(field: PoDynamicFormField): void;
    private applyFormUpdatesOnLoad;
    private applyFormValidation;
    private disableForm;
    private emitForm;
    private loadDataOnInitialize;
    private removeListeners;
    private setFocusOnFieldByProperty;
    private updateModelOnLoad;
    private updateModelWithValidation;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDynamicFormComponent, "po-dynamic-form", never, {}, {}, never, never, false>;
}
