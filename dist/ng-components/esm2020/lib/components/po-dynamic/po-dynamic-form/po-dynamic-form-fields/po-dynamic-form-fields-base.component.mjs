import { Input, EventEmitter, Output, Directive } from '@angular/core';
import { isTypeof, sortFields } from '../../../../utils/util';
import { getGridColumnsClasses, isVisibleField } from '../../po-dynamic.util';
import { PoDynamicFieldType } from '../../po-dynamic-field-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PoDynamicFormFieldsBaseComponent {
    constructor(titleCasePipe) {
        this.titleCasePipe = titleCasePipe;
        this.formValidate = new EventEmitter();
        this.fieldsChange = new EventEmitter();
        // Evento disparado se existir optionsService em visibleField. Necessário resgatar referência do objeto selecionado para quando se tratar de recebimento de opções via serviço.
        this.objectValue = new EventEmitter();
        this.visibleFields = [];
        this._value = {};
    }
    // array de objetos que implementam a interface PoDynamicFormField, que serão exibidos no componente.
    set fields(value) {
        this._fields = Array.isArray(value) ? [...value] : [];
    }
    get fields() {
        return this._fields;
    }
    // valor que será utilizado para iniciar valor no componente.
    set value(value) {
        this._value = value && isTypeof(value, 'object') ? value : {};
    }
    get value() {
        return this._value;
    }
    set validateFields(value) {
        this._validateFields = Array.isArray(value) ? [...value] : [];
    }
    get validateFields() {
        return this._validateFields;
    }
    compareTo(value, compareTo) {
        return value === compareTo;
    }
    // retorna um array com os objetos configurados e visiveis.
    getVisibleFields() {
        const visibleFields = [];
        this.fields.forEach(field => {
            if (this.existsProperty(visibleFields, field.property)) {
                this.printError(`"po-dynamic-form" property "${field.property}" está duplicado. Interface: PoDynamicFormField.`);
                return;
            }
            if (!field['property']) {
                this.printError('"po-dynamic-form" É obrigatório ser especificado um property.');
                return;
            }
            if (isVisibleField(field)) {
                visibleFields.push(this.createField(field));
            }
        });
        return sortFields(visibleFields);
    }
    // converte um array em string para um array de objetos que contem label e value.
    convertOptions(options) {
        const everyOptionString = options.every(option => typeof option === 'string');
        if (everyOptionString) {
            return options.map(value => ({ label: value, value }));
        }
        return options;
    }
    // cria um novo objeto com as classes de grid system, com control (tipo do componente) e label default.
    createField(field) {
        const control = this.getComponentControl(field);
        const options = !!field.options ? this.convertOptions(field.options) : undefined;
        const focus = this.hasFocus(field);
        const type = field && field.type ? field.type.toLocaleLowerCase() : 'string';
        const componentClass = getGridColumnsClasses(field.gridColumns, field.offsetColumns, {
            smGrid: field.gridSmColumns,
            mdGrid: field.gridMdColumns,
            lgGrid: field.gridLgColumns,
            xlGrid: field.gridXlColumns
        }, {
            smOffset: field.offsetSmColumns,
            mdOffset: field.offsetMdColumns,
            lgOffset: field.offsetLgColumns,
            xlOffset: field.offsetXlColumns
        }, {
            smPull: field.gridSmPull,
            mdPull: field.gridMdPull,
            lgPull: field.gridLgPull,
            xlPull: field.gridXlPull
        });
        return {
            label: this.titleCasePipe.transform(field.property),
            maskFormatModel: this.compareTo(type, PoDynamicFieldType.Time),
            ...field,
            componentClass,
            control,
            focus,
            options
        };
    }
    existsProperty(fields, property) {
        return fields.some(field => field.property === property);
    }
    // recupera o componente de acordo com algumas regras do field.
    getComponentControl(field = {}) {
        const type = field && field.type ? field.type.toLocaleLowerCase() : 'string';
        const forceOptionComponent = this.verifyforceOptionComponent(field);
        if (forceOptionComponent) {
            const { forceOptionsComponentType } = field;
            return forceOptionsComponentType;
        }
        if (this.isNumberType(field, type)) {
            return 'number';
        }
        else if (this.isCurrencyType(field, type)) {
            return 'decimal';
        }
        else if (this.isSelect(field)) {
            return 'select';
        }
        else if (this.isRadioGroup(field)) {
            return 'radioGroup';
        }
        else if (this.isCheckboxGroup(field)) {
            return 'checkboxGroup';
        }
        else if (this.isMultiselect(field)) {
            return 'multiselect';
        }
        else if (this.compareTo(type, PoDynamicFieldType.Boolean)) {
            return 'switch';
        }
        else if (this.compareTo(type, PoDynamicFieldType.Date) || this.compareTo(type, PoDynamicFieldType.DateTime)) {
            return field.range ? 'datepickerrange' : 'datepicker';
        }
        else if (this.compareTo(type, PoDynamicFieldType.Time)) {
            field.mask = field.mask || '99:99';
            return 'input';
        }
        else if (this.isCombo(field)) {
            return 'combo';
        }
        else if (this.isLookup(field)) {
            return 'lookup';
        }
        else if (this.isTextarea(field)) {
            return 'textarea';
        }
        else if (this.isPassword(field)) {
            return 'password';
        }
        return 'input';
    }
    hasFocus(field) {
        return !!this.autoFocus && this.autoFocus === field.property;
    }
    isCheckboxGroup(field) {
        const { optionsService, optionsMulti, options } = field;
        return !optionsService && optionsMulti && !!options && options.length <= 3;
    }
    isCombo(field) {
        const { optionsService } = field;
        return !!optionsService && (isTypeof(optionsService, 'string') || this.isComboFilter(optionsService));
    }
    isCurrencyType(field, type) {
        const { mask, pattern } = field;
        return this.compareTo(type, PoDynamicFieldType.Currency) && !mask && !pattern;
    }
    isLookupFilter(object) {
        return object && object.getObjectByValue !== undefined;
    }
    isComboFilter(object) {
        return object && object.getFilteredData !== undefined;
    }
    isLookup(field) {
        const { searchService } = field;
        return !!searchService && (isTypeof(searchService, 'string') || this.isLookupFilter(searchService));
    }
    isMultiselect(field) {
        const { optionsService, optionsMulti, options } = field;
        return optionsMulti && (!!optionsService || (!!options && options.length > 3));
    }
    isNumberType(field, type) {
        const { mask, pattern } = field;
        return this.compareTo(type, PoDynamicFieldType.Number) && !mask && !pattern;
    }
    isPassword(field) {
        const { secret } = field;
        return secret;
    }
    isRadioGroup(field) {
        const { optionsMulti, options } = field;
        return !optionsMulti && !!options && options.length <= 3;
    }
    verifyforceOptionComponent(field) {
        const { optionsMulti, optionsService, forceOptionsComponentType } = field;
        if (forceOptionsComponentType && !optionsMulti && !optionsService) {
            return true;
        }
        return false;
    }
    isSelect(field) {
        const { optionsMulti, options } = field;
        return !optionsMulti && !!options && options.length > 3;
    }
    isTextarea(field) {
        const { rows } = field;
        return rows && rows >= 3;
    }
    printError(error) {
        console.error(error);
    }
}
PoDynamicFormFieldsBaseComponent.ɵfac = function PoDynamicFormFieldsBaseComponent_Factory(t) { return new (t || PoDynamicFormFieldsBaseComponent)(i0.ɵɵdirectiveInject(i1.TitleCasePipe)); };
PoDynamicFormFieldsBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDynamicFormFieldsBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], disabledForm: ["p-disabled-form", "disabledForm"], validate: ["p-validate", "validate"], validateOnInput: ["p-validate-on-input", "validateOnInput"], fields: ["p-fields", "fields"], value: ["p-value", "value"], validateFields: ["p-validate-fields", "validateFields"] }, outputs: { formValidate: "p-form-validate", fieldsChange: "p-fieldsChange", objectValue: "p-object-value" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicFormFieldsBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.TitleCasePipe }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], disabledForm: [{
            type: Input,
            args: ['p-disabled-form']
        }], validate: [{
            type: Input,
            args: ['p-validate']
        }], formValidate: [{
            type: Output,
            args: ['p-form-validate']
        }], fieldsChange: [{
            type: Output,
            args: ['p-fieldsChange']
        }], objectValue: [{
            type: Output,
            args: ['p-object-value']
        }], validateOnInput: [{
            type: Input,
            args: ['p-validate-on-input']
        }], fields: [{
            type: Input,
            args: ['p-fields']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], validateFields: [{
            type: Input,
            args: ['p-validate-fields']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy1mb3JtLWZpZWxkcy1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1keW5hbWljL3BvLWR5bmFtaWMtZm9ybS9wby1keW5hbWljLWZvcm0tZmllbGRzL3BvLWR5bmFtaWMtZm9ybS1maWVsZHMtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7O0FBT3RFLE1BQU0sT0FBTyxnQ0FBZ0M7SUFnRDNDLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBekNyQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpFLCtLQUErSztRQUNySixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFJaEUsa0JBQWEsR0FBc0MsRUFBRSxDQUFDO1FBSTlDLFdBQU0sR0FBUyxFQUFFLENBQUM7SUE0QnlCLENBQUM7SUExQnBELHFHQUFxRztJQUNyRyxJQUF1QixNQUFNLENBQUMsS0FBZ0M7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUs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LEtBQWE7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOztnSEFyUVUsZ0NBQWdDO21GQUFoQyxnQ0FBZ0M7dUZBQWhDLGdDQUFnQztjQUQ1QyxTQUFTO2dFQUVlLFNBQVM7a0JBQS9CLEtBQUs7bUJBQUMsY0FBYztZQUVLLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRUgsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRVEsWUFBWTtrQkFBdEMsTUFBTTttQkFBQyxpQkFBaUI7WUFFQyxZQUFZO2tCQUFyQyxNQUFNO21CQUFDLGdCQUFnQjtZQUdFLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCO1lBRU0sZUFBZTtrQkFBNUMsS0FBSzttQkFBQyxxQkFBcUI7WUFTTCxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFTSyxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVM7WUFRZ0IsY0FBYztrQkFBN0MsS0FBSzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IGlzVHlwZW9mLCBzb3J0RmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBnZXRHcmlkQ29sdW1uc0NsYXNzZXMsIGlzVmlzaWJsZUZpZWxkIH0gZnJvbSAnLi4vLi4vcG8tZHluYW1pYy51dGlsJztcclxuaW1wb3J0IHsgUG9EeW5hbWljRmllbGRUeXBlIH0gZnJvbSAnLi4vLi4vcG8tZHluYW1pYy1maWVsZC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtRmllbGQgfSBmcm9tICcuLi9wby1keW5hbWljLWZvcm0tZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9EeW5hbWljRm9ybUZpZWxkSW50ZXJuYWwgfSBmcm9tICcuL3BvLWR5bmFtaWMtZm9ybS1maWVsZC1pbnRlcm5hbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NvbWJvRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vcG8tZmllbGQvcG8tY29tYm8vaW50ZXJmYWNlcy9wby1jb21iby1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Mb29rdXBGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9wby1maWVsZC9wby1sb29rdXAvaW50ZXJmYWNlcy9wby1sb29rdXAtZmlsdGVyLmludGVyZmFjZSc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvRHluYW1pY0Zvcm1GaWVsZHNCYXNlQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtYXV0by1mb2N1cycpIGF1dG9Gb2N1cz86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLWRpc2FibGVkLWZvcm0nKSBkaXNhYmxlZEZvcm06IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgncC12YWxpZGF0ZScpIHZhbGlkYXRlPzogc3RyaW5nIHwgRnVuY3Rpb247XHJcblxyXG4gIEBPdXRwdXQoJ3AtZm9ybS12YWxpZGF0ZScpIGZvcm1WYWxpZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdwLWZpZWxkc0NoYW5nZScpIGZpZWxkc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBFdmVudG8gZGlzcGFyYWRvIHNlIGV4aXN0aXIgb3B0aW9uc1NlcnZpY2UgZW0gdmlzaWJsZUZpZWxkLiBOZWNlc3PDoXJpbyByZXNnYXRhciByZWZlcsOqbmNpYSBkbyBvYmpldG8gc2VsZWNpb25hZG8gcGFyYSBxdWFuZG8gc2UgdHJhdGFyIGRlIHJlY2ViaW1lbnRvIGRlIG9ww6fDtWVzIHZpYSBzZXJ2acOnby5cclxuICBAT3V0cHV0KCdwLW9iamVjdC12YWx1ZScpIG9iamVjdFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgncC12YWxpZGF0ZS1vbi1pbnB1dCcpIHZhbGlkYXRlT25JbnB1dDogYm9vbGVhbjtcclxuXHJcbiAgdmlzaWJsZUZpZWxkczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkSW50ZXJuYWw+ID0gW107XHJcblxyXG4gIHByaXZhdGUgX2ZpZWxkczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPjtcclxuICBwcml2YXRlIF92YWxpZGF0ZUZpZWxkczogQXJyYXk8c3RyaW5nPjtcclxuICBwcml2YXRlIF92YWx1ZT86IGFueSA9IHt9O1xyXG5cclxuICAvLyBhcnJheSBkZSBvYmpldG9zIHF1ZSBpbXBsZW1lbnRhbSBhIGludGVyZmFjZSBQb0R5bmFtaWNGb3JtRmllbGQsIHF1ZSBzZXLDo28gZXhpYmlkb3Mgbm8gY29tcG9uZW50ZS5cclxuICBASW5wdXQoJ3AtZmllbGRzJykgc2V0IGZpZWxkcyh2YWx1ZTogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPikge1xyXG4gICAgdGhpcy5fZmllbGRzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBbLi4udmFsdWVdIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcclxuICB9XHJcblxyXG4gIC8vIHZhbG9yIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGFyYSBpbmljaWFyIHZhbG9yIG5vIGNvbXBvbmVudGUuXHJcbiAgQElucHV0KCdwLXZhbHVlJykgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgJiYgaXNUeXBlb2YodmFsdWUsICdvYmplY3QnKSA/IHZhbHVlIDoge307XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3AtdmFsaWRhdGUtZmllbGRzJykgc2V0IHZhbGlkYXRlRmllbGRzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gWy4uLnZhbHVlXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbGlkYXRlRmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aXRsZUNhc2VQaXBlOiBUaXRsZUNhc2VQaXBlKSB7fVxyXG5cclxuICBjb21wYXJlVG8odmFsdWUsIGNvbXBhcmVUbykge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBjb21wYXJlVG87XHJcbiAgfVxyXG5cclxuICAvLyByZXRvcm5hIHVtIGFycmF5IGNvbSBvcyBvYmpldG9zIGNvbmZpZ3VyYWRvcyBlIHZpc2l2ZWlzLlxyXG4gIHByb3RlY3RlZCBnZXRWaXNpYmxlRmllbGRzKCkge1xyXG4gICAgY29uc3QgdmlzaWJsZUZpZWxkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5leGlzdHNQcm9wZXJ0eSh2aXNpYmxlRmllbGRzLCBmaWVsZC5wcm9wZXJ0eSkpIHtcclxuICAgICAgICB0aGlzLnByaW50RXJyb3IoXHJcbiAgICAgICAgICBgXCJwby1keW5hbWljLWZvcm1cIiBwcm9wZXJ0eSBcIiR7ZmllbGQucHJvcGVydHl9XCIgZXN0w6EgZHVwbGljYWRvLiBJbnRlcmZhY2U6IFBvRHluYW1pY0Zvcm1GaWVsZC5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZmllbGRbJ3Byb3BlcnR5J10pIHtcclxuICAgICAgICB0aGlzLnByaW50RXJyb3IoJ1wicG8tZHluYW1pYy1mb3JtXCIgw4kgb2JyaWdhdMOzcmlvIHNlciBlc3BlY2lmaWNhZG8gdW0gcHJvcGVydHkuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNWaXNpYmxlRmllbGQoZmllbGQpKSB7XHJcbiAgICAgICAgdmlzaWJsZUZpZWxkcy5wdXNoKHRoaXMuY3JlYXRlRmllbGQoZmllbGQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNvcnRGaWVsZHModmlzaWJsZUZpZWxkcyk7XHJcbiAgfVxyXG5cclxuICAvLyBjb252ZXJ0ZSB1bSBhcnJheSBlbSBzdHJpbmcgcGFyYSB1bSBhcnJheSBkZSBvYmpldG9zIHF1ZSBjb250ZW0gbGFiZWwgZSB2YWx1ZS5cclxuICBwcml2YXRlIGNvbnZlcnRPcHRpb25zKG9wdGlvbnM6IEFycmF5PGFueT4pOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4ge1xyXG4gICAgY29uc3QgZXZlcnlPcHRpb25TdHJpbmcgPSBvcHRpb25zLmV2ZXJ5KG9wdGlvbiA9PiB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyk7XHJcblxyXG4gICAgaWYgKGV2ZXJ5T3B0aW9uU3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zLm1hcCh2YWx1ZSA9PiAoeyBsYWJlbDogdmFsdWUsIHZhbHVlIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8vIGNyaWEgdW0gbm92byBvYmpldG8gY29tIGFzIGNsYXNzZXMgZGUgZ3JpZCBzeXN0ZW0sIGNvbSBjb250cm9sICh0aXBvIGRvIGNvbXBvbmVudGUpIGUgbGFiZWwgZGVmYXVsdC5cclxuICBwcml2YXRlIGNyZWF0ZUZpZWxkKGZpZWxkOiBQb0R5bmFtaWNGb3JtRmllbGQpOiBQb0R5bmFtaWNGb3JtRmllbGRJbnRlcm5hbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb21wb25lbnRDb250cm9sKGZpZWxkKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSAhIWZpZWxkLm9wdGlvbnMgPyB0aGlzLmNvbnZlcnRPcHRpb25zKGZpZWxkLm9wdGlvbnMpIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgZm9jdXMgPSB0aGlzLmhhc0ZvY3VzKGZpZWxkKTtcclxuICAgIGNvbnN0IHR5cGUgPSBmaWVsZCAmJiBmaWVsZC50eXBlID8gZmllbGQudHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpIDogJ3N0cmluZyc7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBnZXRHcmlkQ29sdW1uc0NsYXNzZXMoXHJcbiAgICAgIGZpZWxkLmdyaWRDb2x1bW5zLFxyXG4gICAgICBmaWVsZC5vZmZzZXRDb2x1bW5zLFxyXG4gICAgICB7XHJcbiAgICAgICAgc21HcmlkOiBmaWVsZC5ncmlkU21Db2x1bW5zLFxyXG4gICAgICAgIG1kR3JpZDogZmllbGQuZ3JpZE1kQ29sdW1ucyxcclxuICAgICAgICBsZ0dyaWQ6IGZpZWxkLmdyaWRMZ0NvbHVtbnMsXHJcbiAgICAgICAgeGxHcmlkOiBmaWVsZC5ncmlkWGxDb2x1bW5zXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzbU9mZnNldDogZmllbGQub2Zmc2V0U21Db2x1bW5zLFxyXG4gICAgICAgIG1kT2Zmc2V0OiBmaWVsZC5vZmZzZXRNZENvbHVtbnMsXHJcbiAgICAgICAgbGdPZmZzZXQ6IGZpZWxkLm9mZnNldExnQ29sdW1ucyxcclxuICAgICAgICB4bE9mZnNldDogZmllbGQub2Zmc2V0WGxDb2x1bW5zXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzbVB1bGw6IGZpZWxkLmdyaWRTbVB1bGwsXHJcbiAgICAgICAgbWRQdWxsOiBmaWVsZC5ncmlkTWRQdWxsLFxyXG4gICAgICAgIGxnUHVsbDogZmllbGQuZ3JpZExnUHVsbCxcclxuICAgICAgICB4bFB1bGw6IGZpZWxkLmdyaWRYbFB1bGxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogdGhpcy50aXRsZUNhc2VQaXBlLnRyYW5zZm9ybShmaWVsZC5wcm9wZXJ0eSksXHJcbiAgICAgIG1hc2tGb3JtYXRNb2RlbDogdGhpcy5jb21wYXJlVG8odHlwZSwgUG9EeW5hbWljRmllbGRUeXBlLlRpbWUpLFxyXG4gICAgICAuLi5maWVsZCxcclxuICAgICAgY29tcG9uZW50Q2xhc3MsXHJcbiAgICAgIGNvbnRyb2wsXHJcbiAgICAgIGZvY3VzLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGlzdHNQcm9wZXJ0eShmaWVsZHM6IEFycmF5PFBvRHluYW1pY0Zvcm1GaWVsZD4sIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBmaWVsZHMuc29tZShmaWVsZCA9PiBmaWVsZC5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVjdXBlcmEgbyBjb21wb25lbnRlIGRlIGFjb3JkbyBjb20gYWxndW1hcyByZWdyYXMgZG8gZmllbGQuXHJcbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRDb250cm9sKGZpZWxkOiBQb0R5bmFtaWNGb3JtRmllbGQgPSA8YW55Pnt9KSB7XHJcbiAgICBjb25zdCB0eXBlID0gZmllbGQgJiYgZmllbGQudHlwZSA/IGZpZWxkLnR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA6ICdzdHJpbmcnO1xyXG5cclxuICAgIGNvbnN0IGZvcmNlT3B0aW9uQ29tcG9uZW50ID0gdGhpcy52ZXJpZnlmb3JjZU9wdGlvbkNvbXBvbmVudChmaWVsZCk7XHJcbiAgICBpZiAoZm9yY2VPcHRpb25Db21wb25lbnQpIHtcclxuICAgICAgY29uc3QgeyBmb3JjZU9wdGlvbnNDb21wb25lbnRUeXBlIH0gPSBmaWVsZDtcclxuICAgICAgcmV0dXJuIGZvcmNlT3B0aW9uc0NvbXBvbmVudFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNOdW1iZXJUeXBlKGZpZWxkLCB0eXBlKSkge1xyXG4gICAgICByZXR1cm4gJ251bWJlcic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDdXJyZW5jeVR5cGUoZmllbGQsIHR5cGUpKSB7XHJcbiAgICAgIHJldHVybiAnZGVjaW1hbCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNTZWxlY3QoZmllbGQpKSB7XHJcbiAgICAgIHJldHVybiAnc2VsZWN0JztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhZGlvR3JvdXAoZmllbGQpKSB7XHJcbiAgICAgIHJldHVybiAncmFkaW9Hcm91cCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDaGVja2JveEdyb3VwKGZpZWxkKSkge1xyXG4gICAgICByZXR1cm4gJ2NoZWNrYm94R3JvdXAnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzTXVsdGlzZWxlY3QoZmllbGQpKSB7XHJcbiAgICAgIHJldHVybiAnbXVsdGlzZWxlY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmVUbyh0eXBlLCBQb0R5bmFtaWNGaWVsZFR5cGUuQm9vbGVhbikpIHtcclxuICAgICAgcmV0dXJuICdzd2l0Y2gnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmVUbyh0eXBlLCBQb0R5bmFtaWNGaWVsZFR5cGUuRGF0ZSkgfHwgdGhpcy5jb21wYXJlVG8odHlwZSwgUG9EeW5hbWljRmllbGRUeXBlLkRhdGVUaW1lKSkge1xyXG4gICAgICByZXR1cm4gZmllbGQucmFuZ2UgPyAnZGF0ZXBpY2tlcnJhbmdlJyA6ICdkYXRlcGlja2VyJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJlVG8odHlwZSwgUG9EeW5hbWljRmllbGRUeXBlLlRpbWUpKSB7XHJcbiAgICAgIGZpZWxkLm1hc2sgPSBmaWVsZC5tYXNrIHx8ICc5OTo5OSc7XHJcblxyXG4gICAgICByZXR1cm4gJ2lucHV0JztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbWJvKGZpZWxkKSkge1xyXG4gICAgICByZXR1cm4gJ2NvbWJvJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0xvb2t1cChmaWVsZCkpIHtcclxuICAgICAgcmV0dXJuICdsb29rdXAnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzVGV4dGFyZWEoZmllbGQpKSB7XHJcbiAgICAgIHJldHVybiAndGV4dGFyZWEnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGFzc3dvcmQoZmllbGQpKSB7XHJcbiAgICAgIHJldHVybiAncGFzc3dvcmQnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnaW5wdXQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNGb2N1cyhmaWVsZDogUG9EeW5hbWljRm9ybUZpZWxkKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmF1dG9Gb2N1cyAmJiB0aGlzLmF1dG9Gb2N1cyA9PT0gZmllbGQucHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ2hlY2tib3hHcm91cChmaWVsZDogUG9EeW5hbWljRm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCB7IG9wdGlvbnNTZXJ2aWNlLCBvcHRpb25zTXVsdGksIG9wdGlvbnMgfSA9IGZpZWxkO1xyXG5cclxuICAgIHJldHVybiAhb3B0aW9uc1NlcnZpY2UgJiYgb3B0aW9uc011bHRpICYmICEhb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA8PSAzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0NvbWJvKGZpZWxkOiBQb0R5bmFtaWNGb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IHsgb3B0aW9uc1NlcnZpY2UgfSA9IGZpZWxkO1xyXG5cclxuICAgIHJldHVybiAhIW9wdGlvbnNTZXJ2aWNlICYmIChpc1R5cGVvZihvcHRpb25zU2VydmljZSwgJ3N0cmluZycpIHx8IHRoaXMuaXNDb21ib0ZpbHRlcihvcHRpb25zU2VydmljZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0N1cnJlbmN5VHlwZShmaWVsZDogUG9EeW5hbWljRm9ybUZpZWxkLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHsgbWFzaywgcGF0dGVybiB9ID0gZmllbGQ7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVRvKHR5cGUsIFBvRHluYW1pY0ZpZWxkVHlwZS5DdXJyZW5jeSkgJiYgIW1hc2sgJiYgIXBhdHRlcm47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTG9va3VwRmlsdGVyKG9iamVjdDogYW55KTogb2JqZWN0IGlzIFBvTG9va3VwRmlsdGVyIHtcclxuICAgIHJldHVybiBvYmplY3QgJiYgKDxQb0xvb2t1cEZpbHRlcj5vYmplY3QpLmdldE9iamVjdEJ5VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNDb21ib0ZpbHRlcihvYmplY3Q6IGFueSk6IG9iamVjdCBpcyBQb0NvbWJvRmlsdGVyIHtcclxuICAgIHJldHVybiBvYmplY3QgJiYgKDxQb0NvbWJvRmlsdGVyPm9iamVjdCkuZ2V0RmlsdGVyZWREYXRhICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTG9va3VwKGZpZWxkOiBQb0R5bmFtaWNGb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IHsgc2VhcmNoU2VydmljZSB9ID0gZmllbGQ7XHJcblxyXG4gICAgcmV0dXJuICEhc2VhcmNoU2VydmljZSAmJiAoaXNUeXBlb2Yoc2VhcmNoU2VydmljZSwgJ3N0cmluZycpIHx8IHRoaXMuaXNMb29rdXBGaWx0ZXIoc2VhcmNoU2VydmljZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc011bHRpc2VsZWN0KGZpZWxkOiBQb0R5bmFtaWNGb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IHsgb3B0aW9uc1NlcnZpY2UsIG9wdGlvbnNNdWx0aSwgb3B0aW9ucyB9ID0gZmllbGQ7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnNNdWx0aSAmJiAoISFvcHRpb25zU2VydmljZSB8fCAoISFvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc051bWJlclR5cGUoZmllbGQ6IFBvRHluYW1pY0Zvcm1GaWVsZCwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB7IG1hc2ssIHBhdHRlcm4gfSA9IGZpZWxkO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVUbyh0eXBlLCBQb0R5bmFtaWNGaWVsZFR5cGUuTnVtYmVyKSAmJiAhbWFzayAmJiAhcGF0dGVybjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQYXNzd29yZChmaWVsZDogUG9EeW5hbWljRm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCB7IHNlY3JldCB9ID0gZmllbGQ7XHJcblxyXG4gICAgcmV0dXJuIHNlY3JldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNSYWRpb0dyb3VwKGZpZWxkOiBQb0R5bmFtaWNGb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IHsgb3B0aW9uc011bHRpLCBvcHRpb25zIH0gPSBmaWVsZDtcclxuXHJcbiAgICByZXR1cm4gIW9wdGlvbnNNdWx0aSAmJiAhIW9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPD0gMztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Zm9yY2VPcHRpb25Db21wb25lbnQoZmllbGQ6IFBvRHluYW1pY0Zvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zTXVsdGksIG9wdGlvbnNTZXJ2aWNlLCBmb3JjZU9wdGlvbnNDb21wb25lbnRUeXBlIH0gPSBmaWVsZDtcclxuXHJcbiAgICBpZiAoZm9yY2VPcHRpb25zQ29tcG9uZW50VHlwZSAmJiAhb3B0aW9uc011bHRpICYmICFvcHRpb25zU2VydmljZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTZWxlY3QoZmllbGQ6IFBvRHluYW1pY0Zvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zTXVsdGksIG9wdGlvbnMgfSA9IGZpZWxkO1xyXG5cclxuICAgIHJldHVybiAhb3B0aW9uc011bHRpICYmICEhb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVGV4dGFyZWEoZmllbGQ6IFBvRHluYW1pY0Zvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgeyByb3dzIH0gPSBmaWVsZDtcclxuXHJcbiAgICByZXR1cm4gcm93cyAmJiByb3dzID49IDM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByaW50RXJyb3IoZXJyb3I6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==