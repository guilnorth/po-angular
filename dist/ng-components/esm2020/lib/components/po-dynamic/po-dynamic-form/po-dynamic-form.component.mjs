import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { PoDynamicFormBaseComponent } from './po-dynamic-form-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./po-dynamic-form-load/po-dynamic-form-load.service";
import * as i2 from "./po-dynamic-form-validation/po-dynamic-form-validation.service";
const _c0 = ["fieldsComponent"];
const _c1 = ["dynamicForm"];
function PoDynamicFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoDynamicFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-dynamic-form-fields", 3, 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-auto-focus", ctx_r2.autoFocus)("p-fields", ctx_r2.fields)("p-value", ctx_r2.value);
} }
function PoDynamicFormComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", null, 5)(2, "po-dynamic-form-fields", 6, 4);
    i0.ɵɵlistener("p-fieldsChange", function PoDynamicFormComponent_ng_template_3_Template_po_dynamic_form_fields_p_fieldsChange_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.fields = $event); })("p-object-value", function PoDynamicFormComponent_ng_template_3_Template_po_dynamic_form_fields_p_object_value_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.sendObjectValue($event)); })("p-form-validate", function PoDynamicFormComponent_ng_template_3_Template_po_dynamic_form_fields_p_form_validate_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.validateForm($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-fields", ctx_r4.fields)("p-auto-focus", ctx_r4.autoFocus)("p-disabled-form", ctx_r4.disabledForm)("p-validate", ctx_r4.validate)("p-validate-fields", ctx_r4.validateFields)("p-validate-on-input", ctx_r4.validateOnInput)("p-value", ctx_r4.value);
} }
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
export class PoDynamicFormComponent extends PoDynamicFormBaseComponent {
    constructor(changes, loadService, validationService) {
        super();
        this.changes = changes;
        this.loadService = loadService;
        this.validationService = validationService;
        this.comboOptionSubject = new Subject();
    }
    set form(value) {
        // necessario para nao ocorrer o ExpressionChangedAfterItHasBeenCheckedError
        setTimeout(() => {
            this._form = value;
            this.emitForm();
        });
    }
    get form() {
        return this._form || {};
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    ngOnInit() {
        if (this.load) {
            this.loadDataOnInitialize();
        }
    }
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
    focus(property) {
        this.fieldsComponent.focus(property);
    }
    getObjectValue() {
        return this.comboOptionSubject.asObservable();
    }
    sendObjectValue(objectValue) {
        this.comboOptionSubject.next(objectValue);
    }
    validateForm(field) {
        const previousFocusElement = document.activeElement;
        this.disableForm(true);
        const errorOnValidation = () => this.disableForm(false);
        this.sendFormSubscription = this.validationService
            .sendFormChange(this.validate, field, this.value)
            .subscribe(this.applyFormValidation(previousFocusElement), errorOnValidation);
    }
    applyFormUpdatesOnLoad(previousFocusElement) {
        return dynamicFormData => {
            this.updateModelOnLoad(dynamicFormData);
            this.disableForm(false);
            this.setFocusOnFieldByProperty(dynamicFormData.focus, previousFocusElement);
        };
    }
    applyFormValidation(previousFocusElement) {
        return dynamicFormData => {
            this.updateModelWithValidation(dynamicFormData);
            this.disableForm(false);
            this.setFocusOnFieldByProperty(dynamicFormData.focus, previousFocusElement);
        };
    }
    disableForm(value) {
        this.disabledForm = value;
        this.changes.detectChanges();
    }
    emitForm() {
        if (!this.groupForm && this.formOutput.observers.length) {
            this.formOutput.emit(this.form);
        }
    }
    loadDataOnInitialize() {
        const previousFocusElement = document.activeElement;
        this.disabledForm = true;
        const errorOnLoad = () => (this.disabledForm = false);
        this.onLoadSubscription = this.loadService
            .executeLoad(this.load, this.value)
            .subscribe(this.applyFormUpdatesOnLoad(previousFocusElement), errorOnLoad);
    }
    removeListeners() {
        if (this.onLoadSubscription) {
            this.onLoadSubscription.unsubscribe();
        }
        if (this.sendFormSubscription) {
            this.sendFormSubscription.unsubscribe();
        }
    }
    setFocusOnFieldByProperty(property, previousFocusElement) {
        if (property) {
            // precisa do timeout para que o valor seja atribuido no campo antes de setar o focus,
            // para nao disparar a mudança posteriormente. Situação ocorre quando retornar campo com valor e focus atribuido a ele.
            setTimeout(() => this.focus(property));
        }
        else {
            previousFocusElement['focus']();
        }
    }
    updateModelOnLoad(loadedFormData) {
        Object.assign(this.value, loadedFormData.value);
        this.fields = this.loadService.createAndUpdateFieldsForm(loadedFormData.fields, this.fields);
    }
    updateModelWithValidation(formData) {
        Object.assign(this.value, formData.value);
        this.fieldsComponent.updatePreviousValue();
        this.fields = this.validationService.updateFieldsForm(formData.fields, this.fields);
    }
}
PoDynamicFormComponent.ɵfac = function PoDynamicFormComponent_Factory(t) { return new (t || PoDynamicFormComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.PoDynamicFormLoadService), i0.ɵɵdirectiveInject(i2.PoDynamicFormValidationService)); };
PoDynamicFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDynamicFormComponent, selectors: [["po-dynamic-form"]], viewQuery: function PoDynamicFormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldsComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["reuseFormTemplate", ""], ["uniqueFormTemplate", ""], [3, "p-auto-focus", "p-fields", "p-value"], ["fieldsComponent", ""], ["dynamicForm", "ngForm"], [3, "p-fields", "p-auto-focus", "p-disabled-form", "p-validate", "p-validate-fields", "p-validate-on-input", "p-value", "p-fieldsChange", "p-object-value", "p-form-validate"]], template: function PoDynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoDynamicFormComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PoDynamicFormComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoDynamicFormComponent_ng_template_3_Template, 4, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", ctx.groupForm)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicFormComponent, [{
        type: Component,
        args: [{ selector: 'po-dynamic-form', template: "<ng-container *ngIf=\"groupForm; then reuseFormTemplate; else uniqueFormTemplate\"></ng-container>\r\n\r\n<ng-template #reuseFormTemplate>\r\n  <po-dynamic-form-fields #fieldsComponent [p-auto-focus]=\"autoFocus\" [p-fields]=\"fields\" [p-value]=\"value\">\r\n  </po-dynamic-form-fields>\r\n</ng-template>\r\n\r\n<ng-template #uniqueFormTemplate>\r\n  <form #dynamicForm=\"ngForm\">\r\n    <po-dynamic-form-fields\r\n      #fieldsComponent\r\n      [(p-fields)]=\"fields\"\r\n      [p-auto-focus]=\"autoFocus\"\r\n      [p-disabled-form]=\"disabledForm\"\r\n      [p-validate]=\"validate\"\r\n      [p-validate-fields]=\"validateFields\"\r\n      [p-validate-on-input]=\"validateOnInput\"\r\n      [p-value]=\"value\"\r\n      (p-object-value)=\"sendObjectValue($event)\"\r\n      (p-form-validate)=\"validateForm($event)\"\r\n    >\r\n    </po-dynamic-form-fields>\r\n  </form>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PoDynamicFormLoadService }, { type: i2.PoDynamicFormValidationService }]; }, { fieldsComponent: [{
            type: ViewChild,
            args: ['fieldsComponent']
        }], form: [{
            type: ViewChild,
            args: ['dynamicForm']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1keW5hbWljL3BvLWR5bmFtaWMtZm9ybS9wby1keW5hbWljLWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWR5bmFtaWMvcG8tZHluYW1pYy1mb3JtL3BvLWR5bmFtaWMtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF3QyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0YsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7SUNMOUUsd0JBQWdHOzs7SUFHOUYsK0NBQ3lCOzs7SUFEZ0IsK0NBQTBCLDJCQUFBLHlCQUFBOzs7O0lBS25FLHFDQUE0QixtQ0FBQTtJQUd4Qiw2UEFBcUIsdU1BT0gsZUFBQSwrQkFBdUIsQ0FBQSxJQVBwQix5TUFRRixlQUFBLDRCQUFvQixDQUFBLElBUmxCO0lBVXZCLGlCQUF5QixFQUFBOzs7SUFWdkIsZUFBcUI7SUFBckIsd0NBQXFCLGtDQUFBLHdDQUFBLCtCQUFBLDRDQUFBLCtDQUFBLHlCQUFBOztBREMzQjs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFNSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsMEJBQTBCO0lBd0JwRSxZQUNVLE9BQTBCLEVBQzFCLFdBQXFDLEVBQ3JDLGlCQUFpRDtRQUV6RCxLQUFLLEVBQUUsQ0FBQztRQUpBLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlC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QUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFTyx5QkFBeUIsQ0FBQyxRQUFpQztRQUNqRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RixDQUFDOzs0RkFoS1Usc0JBQXNCO3lFQUF0QixzQkFBc0I7Ozs7Ozs7O1FDakNuQyx5RkFBZ0c7UUFFaEcsd0hBR2M7UUFFZCx3SEFnQmM7Ozs7UUF2QkMsb0NBQWlCLGlCQUFBLGlCQUFBOzt1RkRpQ25CLHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLGlCQUFpQjt3SkFJRyxlQUFlO2tCQUE1QyxTQUFTO21CQUFDLGlCQUFpQjtZQVVFLElBQUk7a0JBQWpDLFNBQVM7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZHluYW1pYy1mb3JtLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9EeW5hbWljRm9ybUZpZWxkIH0gZnJvbSAnLi9wby1keW5hbWljLWZvcm0tZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9EeW5hbWljRm9ybUxvYWQgfSBmcm9tICcuL3BvLWR5bmFtaWMtZm9ybS1sb2FkL3BvLWR5bmFtaWMtZm9ybS1sb2FkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1Mb2FkU2VydmljZSB9IGZyb20gJy4vcG8tZHluYW1pYy1mb3JtLWxvYWQvcG8tZHluYW1pYy1mb3JtLWxvYWQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1WYWxpZGF0aW9uIH0gZnJvbSAnLi9wby1keW5hbWljLWZvcm0tdmFsaWRhdGlvbi9wby1keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BvLWR5bmFtaWMtZm9ybS12YWxpZGF0aW9uL3BvLWR5bmFtaWMtZm9ybS12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0R5bmFtaWNGb3JtQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZHluYW1pYy1mb3JtLWJhc2ljXCIgdGl0bGU9XCJQTyBEeW5hbWljIEZvcm0gQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHluYW1pYy1mb3JtLWJhc2ljL3NhbXBsZS1wby1keW5hbWljLWZvcm0tYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1keW5hbWljLWZvcm0tYmFzaWMvc2FtcGxlLXBvLWR5bmFtaWMtZm9ybS1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1keW5hbWljLWZvcm0tcmVnaXN0ZXJcIiB0aXRsZT1cIlBPIER5bmFtaWMgRm9ybSAtIFJlZ2lzdGVyXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWR5bmFtaWMtZm9ybS1yZWdpc3Rlci9zYW1wbGUtcG8tZHluYW1pYy1mb3JtLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHluYW1pYy1mb3JtLXJlZ2lzdGVyL3NhbXBsZS1wby1keW5hbWljLWZvcm0tcmVnaXN0ZXIuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHluYW1pYy1mb3JtLXJlZ2lzdGVyL3NhbXBsZS1wby1keW5hbWljLWZvcm0tcmVnaXN0ZXIuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWR5bmFtaWMtZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWR5bmFtaWMtZm9ybS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRHluYW1pY0Zvcm1Db21wb25lbnQgZXh0ZW5kcyBQb0R5bmFtaWNGb3JtQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdmaWVsZHNDb21wb25lbnQnKSBmaWVsZHNDb21wb25lbnQ6IHsgZm9jdXM6IChwcm9wZXJ0eTogc3RyaW5nKSA9PiB2b2lkOyB1cGRhdGVQcmV2aW91c1ZhbHVlOiAoKSA9PiB2b2lkIH07XHJcblxyXG4gIGRpc2FibGVkRm9ybTogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfZm9ybTogTmdGb3JtO1xyXG5cclxuICBwcml2YXRlIG9uTG9hZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc2VuZEZvcm1TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGNvbWJvT3B0aW9uU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZHluYW1pY0Zvcm0nKSBzZXQgZm9ybSh2YWx1ZTogTmdGb3JtKSB7XHJcbiAgICAvLyBuZWNlc3NhcmlvIHBhcmEgbmFvIG9jb3JyZXIgbyBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fZm9ybSA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0Rm9ybSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtIHx8IDxhbnk+e307XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlczogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGxvYWRTZXJ2aWNlOiBQb0R5bmFtaWNGb3JtTG9hZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBQb0R5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmxvYWQpIHtcclxuICAgICAgdGhpcy5sb2FkRGF0YU9uSW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIGF0cmlidWkgZm9jbyBhbyBjYW1wbyBkZXNlamFkby5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gY2FwdHVyYXIgYSBpbnN0w6JuY2lhIGRvIGBkeW5hbWljIGZvcm1gLCBjb21vIHBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgIGh0bWxcclxuICAgKiA8cG8tZHluYW1pYy1mb3JtICNkeW5hbWljRm9ybSBbcC1maWVsZHNdPVwiZmllbGRzXCI+PC9wby1keW5hbWljLWZvcm0+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBgYGAgamF2YXNjcmlwdFxyXG4gICAqIGltcG9ydCB7IFBvRHluYW1pY0Zvcm1Db21wb25lbnQsIFBvRHluYW1pY0Zvcm1GaWVsZCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICAgKlxyXG4gICAqIC4uLlxyXG4gICAqXHJcbiAgICogQFZpZXdDaGlsZCgnZHluYW1pY0Zvcm0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljRm9ybTogUG9EeW5hbWljRm9ybUNvbXBvbmVudDtcclxuICAgKlxyXG4gICAqIGZpZWxkczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPiA9IFtcclxuICAgKiAgIHsgcHJvcGVydHk6ICdmaWVsZE9uZScgfSxcclxuICAgKiAgIHsgcHJvcGVydHk6ICdmaWVsZFR3bycgfVxyXG4gICAqIF07XHJcbiAgICpcclxuICAgKiBmaWVsZEZvY3VzKCkge1xyXG4gICAqICAgdGhpcy5keW5hbWljRm9ybS5mb2N1cygnZmllbGRUd28nKTtcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTm9tZSBkYSBwcm9wcmllZGFkZSBhdHJpYnXDrWRhIGFvIGBQb0R5bmFtaWNGb3JtRmllbGQucHJvcGVydHlgLlxyXG4gICAqL1xyXG4gIGZvY3VzKHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmllbGRzQ29tcG9uZW50LmZvY3VzKHByb3BlcnR5KTtcclxuICB9XHJcblxyXG4gIGdldE9iamVjdFZhbHVlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21ib09wdGlvblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZW5kT2JqZWN0VmFsdWUob2JqZWN0VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5jb21ib09wdGlvblN1YmplY3QubmV4dChvYmplY3RWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUZvcm0oZmllbGQ6IFBvRHluYW1pY0Zvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNGb2N1c0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuZGlzYWJsZUZvcm0odHJ1ZSk7XHJcbiAgICBjb25zdCBlcnJvck9uVmFsaWRhdGlvbiA9ICgpID0+IHRoaXMuZGlzYWJsZUZvcm0oZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuc2VuZEZvcm1TdWJzY3JpcHRpb24gPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZW5kRm9ybUNoYW5nZSh0aGlzLnZhbGlkYXRlLCBmaWVsZCwgdGhpcy52YWx1ZSlcclxuICAgICAgLnN1YnNjcmliZSh0aGlzLmFwcGx5Rm9ybVZhbGlkYXRpb24ocHJldmlvdXNGb2N1c0VsZW1lbnQpLCBlcnJvck9uVmFsaWRhdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5Rm9ybVVwZGF0ZXNPbkxvYWQocHJldmlvdXNGb2N1c0VsZW1lbnQ6IEVsZW1lbnQpOiAoZHluYW1pY0Zvcm1EYXRhOiBQb0R5bmFtaWNGb3JtTG9hZCkgPT4gdm9pZCB7XHJcbiAgICByZXR1cm4gZHluYW1pY0Zvcm1EYXRhID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVNb2RlbE9uTG9hZChkeW5hbWljRm9ybURhdGEpO1xyXG4gICAgICB0aGlzLmRpc2FibGVGb3JtKGZhbHNlKTtcclxuICAgICAgdGhpcy5zZXRGb2N1c09uRmllbGRCeVByb3BlcnR5KGR5bmFtaWNGb3JtRGF0YS5mb2N1cywgcHJldmlvdXNGb2N1c0VsZW1lbnQpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlGb3JtVmFsaWRhdGlvbihwcmV2aW91c0ZvY3VzRWxlbWVudDogRWxlbWVudCk6IChkeW5hbWljRm9ybURhdGE6IFBvRHluYW1pY0Zvcm1WYWxpZGF0aW9uKSA9PiB2b2lkIHtcclxuICAgIHJldHVybiBkeW5hbWljRm9ybURhdGEgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsV2l0aFZhbGlkYXRpb24oZHluYW1pY0Zvcm1EYXRhKTtcclxuICAgICAgdGhpcy5kaXNhYmxlRm9ybShmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2V0Rm9jdXNPbkZpZWxkQnlQcm9wZXJ0eShkeW5hbWljRm9ybURhdGEuZm9jdXMsIHByZXZpb3VzRm9jdXNFbGVtZW50KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVGb3JtKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkRm9ybSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jaGFuZ2VzLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdEZvcm0oKSB7XHJcbiAgICBpZiAoIXRoaXMuZ3JvdXBGb3JtICYmIHRoaXMuZm9ybU91dHB1dC5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZm9ybU91dHB1dC5lbWl0KHRoaXMuZm9ybSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREYXRhT25Jbml0aWFsaXplKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNGb2N1c0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuZGlzYWJsZWRGb3JtID0gdHJ1ZTtcclxuICAgIGNvbnN0IGVycm9yT25Mb2FkID0gKCkgPT4gKHRoaXMuZGlzYWJsZWRGb3JtID0gZmFsc2UpO1xyXG5cclxuICAgIHRoaXMub25Mb2FkU3Vic2NyaXB0aW9uID0gdGhpcy5sb2FkU2VydmljZVxyXG4gICAgICAuZXhlY3V0ZUxvYWQodGhpcy5sb2FkLCB0aGlzLnZhbHVlKVxyXG4gICAgICAuc3Vic2NyaWJlKHRoaXMuYXBwbHlGb3JtVXBkYXRlc09uTG9hZChwcmV2aW91c0ZvY3VzRWxlbWVudCksIGVycm9yT25Mb2FkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgaWYgKHRoaXMub25Mb2FkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMub25Mb2FkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VuZEZvcm1TdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zZW5kRm9ybVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGb2N1c09uRmllbGRCeVByb3BlcnR5KHByb3BlcnR5OiBzdHJpbmcsIHByZXZpb3VzRm9jdXNFbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICBpZiAocHJvcGVydHkpIHtcclxuICAgICAgLy8gcHJlY2lzYSBkbyB0aW1lb3V0IHBhcmEgcXVlIG8gdmFsb3Igc2VqYSBhdHJpYnVpZG8gbm8gY2FtcG8gYW50ZXMgZGUgc2V0YXIgbyBmb2N1cyxcclxuICAgICAgLy8gcGFyYSBuYW8gZGlzcGFyYXIgYSBtdWRhbsOnYSBwb3N0ZXJpb3JtZW50ZS4gU2l0dWHDp8OjbyBvY29ycmUgcXVhbmRvIHJldG9ybmFyIGNhbXBvIGNvbSB2YWxvciBlIGZvY3VzIGF0cmlidWlkbyBhIGVsZS5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKHByb3BlcnR5KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmV2aW91c0ZvY3VzRWxlbWVudFsnZm9jdXMnXSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVNb2RlbE9uTG9hZChsb2FkZWRGb3JtRGF0YTogUG9EeW5hbWljRm9ybUxvYWQpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy52YWx1ZSwgbG9hZGVkRm9ybURhdGEudmFsdWUpO1xyXG4gICAgdGhpcy5maWVsZHMgPSB0aGlzLmxvYWRTZXJ2aWNlLmNyZWF0ZUFuZFVwZGF0ZUZpZWxkc0Zvcm0obG9hZGVkRm9ybURhdGEuZmllbGRzLCB0aGlzLmZpZWxkcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZU1vZGVsV2l0aFZhbGlkYXRpb24oZm9ybURhdGE6IFBvRHluYW1pY0Zvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmFsdWUsIGZvcm1EYXRhLnZhbHVlKTtcclxuICAgIHRoaXMuZmllbGRzQ29tcG9uZW50LnVwZGF0ZVByZXZpb3VzVmFsdWUoKTtcclxuICAgIHRoaXMuZmllbGRzID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS51cGRhdGVGaWVsZHNGb3JtKGZvcm1EYXRhLmZpZWxkcywgdGhpcy5maWVsZHMpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JvdXBGb3JtOyB0aGVuIHJldXNlRm9ybVRlbXBsYXRlOyBlbHNlIHVuaXF1ZUZvcm1UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNyZXVzZUZvcm1UZW1wbGF0ZT5cclxuICA8cG8tZHluYW1pYy1mb3JtLWZpZWxkcyAjZmllbGRzQ29tcG9uZW50IFtwLWF1dG8tZm9jdXNdPVwiYXV0b0ZvY3VzXCIgW3AtZmllbGRzXT1cImZpZWxkc1wiIFtwLXZhbHVlXT1cInZhbHVlXCI+XHJcbiAgPC9wby1keW5hbWljLWZvcm0tZmllbGRzPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN1bmlxdWVGb3JtVGVtcGxhdGU+XHJcbiAgPGZvcm0gI2R5bmFtaWNGb3JtPVwibmdGb3JtXCI+XHJcbiAgICA8cG8tZHluYW1pYy1mb3JtLWZpZWxkc1xyXG4gICAgICAjZmllbGRzQ29tcG9uZW50XHJcbiAgICAgIFsocC1maWVsZHMpXT1cImZpZWxkc1wiXHJcbiAgICAgIFtwLWF1dG8tZm9jdXNdPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgW3AtZGlzYWJsZWQtZm9ybV09XCJkaXNhYmxlZEZvcm1cIlxyXG4gICAgICBbcC12YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgIFtwLXZhbGlkYXRlLWZpZWxkc109XCJ2YWxpZGF0ZUZpZWxkc1wiXHJcbiAgICAgIFtwLXZhbGlkYXRlLW9uLWlucHV0XT1cInZhbGlkYXRlT25JbnB1dFwiXHJcbiAgICAgIFtwLXZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgKHAtb2JqZWN0LXZhbHVlKT1cInNlbmRPYmplY3RWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgKHAtZm9ybS12YWxpZGF0ZSk9XCJ2YWxpZGF0ZUZvcm0oJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLWR5bmFtaWMtZm9ybS1maWVsZHM+XHJcbiAgPC9mb3JtPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=