import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { removeDuplicatedOptions, removeDuplicatedOptionsWithFieldValue, removeUndefinedAndNullOptions, removeUndefinedAndNullOptionsWithFieldValue, validValue } from '../../../utils/util';
import { InputBoolean } from '../../../decorators';
import { PoFieldValidateModel } from '../po-field-validate.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i4 from "../po-field-container/po-field-container.component";
const _c0 = ["select"];
function PoSelectComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    let tmp_3_0;
    i0.ɵɵproperty("disabled", !!ctx_r1.placeholder)("hidden", !ctx_r1.selectedValue && !ctx_r1.placeholder)("selected", !ctx_r1.selectedValue)("value", (tmp_3_0 = ctx_r1.placeholder) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.placeholder, " ");
} }
function PoSelectComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.readonly)("value", option_r3 == null ? null : option_r3[ctx_r2.fieldValue]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r3 == null ? null : option_r3[ctx_r2.fieldLabel], " ");
} }
const PO_SELECT_FIELD_LABEL_DEFAULT = 'label';
const PO_SELECT_FIELD_VALUE_DEFAULT = 'value';
/**
 * @docsExtends PoFieldValidateModel
 *
 * @example
 *
 * <example name="po-select-basic" title="PO Select Basic">
 *   <file name="sample-po-select-basic/sample-po-select-basic.component.html"> </file>
 *   <file name="sample-po-select-basic/sample-po-select-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-select-labs" title="PO Select Labs">
 *   <file name="sample-po-select-labs/sample-po-select-labs.component.html"> </file>
 *   <file name="sample-po-select-labs/sample-po-select-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-select-customer-registration" title="PO Select - Customer registration">
 *   <file name="sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"> </file>
 *   <file name="sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"> </file>
 *   <file name="sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"> </file>
 *   <file name='sample-po-select-customer-registration/sample-po-select-customer-registration.component.e2e-spec.ts'> </file>
 *   <file name='sample-po-select-customer-registration/sample-po-select-customer-registration.component.po.ts'> </file>
 * </example>
 *
 * <example name="po-select-companies" title="PO Select Companies">
 *   <file name="sample-po-select-companies/sample-po-select-companies.component.html"> </file>
 *   <file name="sample-po-select-companies/sample-po-select-companies.component.ts"> </file>
 * </example>
 *
 * @description
 *
 * O componente po-select exibe uma lista de valores e permite que o usuário selecione um desses valores.
 * Os valores listados podem ser fixos ou dinâmicos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
 * O po-select não permite que o usuário informe um valor diferente dos valores listados, isso garante a consistência da informação.
 * O po-select não permite que sejam passados valores duplicados, undefined e null para as opções, excluindo-os da lista.
 *
 * > Ao passar um valor para o _model_ que não está na lista de opções, o mesmo será definido como `undefined`.
 *
 * Também existe a possibilidade de utilizar um _template_ para a exibição dos itens da lista,
 * veja mais em **[p-combo-option-template](/documentation/po-combo-option-template)**.
 *
 * > Obs: o template **[p-select-option-template](/documentation/po-select-option-template)** será depreciado na versão 14.x.x.
 */
export class PoSelectComponent extends PoFieldValidateModel {
    /* istanbul ignore next */
    constructor(changeDetector, differs, renderer) {
        super();
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        /**
         * @optional
         *
         * @description
         *
         * Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.
         *
         * Na versão 12.2.0 do Angular a verificação `strictTemplates` vem true como default. Portanto, para utilizar
         * two-way binding no componente deve se utilizar da seguinte forma:
         *
         * ```
         * <po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
         * ```
         */
        this.ngModelChange = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Indica que o campo será somente para leitura.
         *
         * @default `false`
         */
        this.readonly = false;
        this._fieldLabel = PO_SELECT_FIELD_LABEL_DEFAULT;
        this._fieldValue = PO_SELECT_FIELD_VALUE_DEFAULT;
        this.differ = differs.find([]).create(null);
    }
    /**
     * Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `PoSelectOption`.
     *
     * Caso esta lista estiver vazia, o model será `undefined`.
     *
     * > Essa propriedade é imutável, ou seja, sempre que quiser atualizar a lista de opções disponíveis
     * atualize a referência do objeto:
     *
     * ```
     * // atualiza a referência do objeto garantindo a atualização do template
     * this.options = [...this.options, { value: 'x', label: 'Nova opção' }];
     *
     * // evite, pois não atualiza a referência do objeto podendo gerar atrasos na atualização do template
     * this.options.push({ value: 'x', label: 'Nova opção' });
     * ```
     */
    set options(options) {
        if (this.fieldLabel && this.fieldValue) {
            options.map(option => {
                option.label = option[this.fieldLabel];
                option.value = option[this.fieldValue];
            });
        }
        this.validateOptions([...options]);
        this.onUpdateOptions();
        this._options = [...options];
    }
    get options() {
        return this._options;
    }
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.
     *
     * @default `label`
     */
    set fieldLabel(value) {
        this._fieldLabel = value || PO_SELECT_FIELD_LABEL_DEFAULT;
        if (this.options && this.options.length > 0) {
            this.options = [...this.options];
        }
    }
    get fieldLabel() {
        return this._fieldLabel;
    }
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo valor de cada item da lista.
     *
     * @default `value`
     */
    set fieldValue(value) {
        this._fieldValue = value || PO_SELECT_FIELD_VALUE_DEFAULT;
        if (this.options && this.options.length > 0) {
            this.options = [...this.options];
        }
    }
    get fieldValue() {
        return this._fieldValue;
    }
    ngDoCheck() {
        const change = this.differ.diff(this.options);
        if (change) {
            this.validateOptions(this.options);
        }
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoSelectComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;
     *
     * focusSelect() {
     *   this.select.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.selectElement.nativeElement.focus();
        }
    }
    onBlur() {
        this.onModelTouched?.();
    }
    // Altera o valor ao selecionar um item.
    onSelectChange(value) {
        if (value && this.options && this.options.length) {
            const optionFound = this.findOptionValue(value);
            if (optionFound) {
                this.updateValues(optionFound);
            }
        }
    }
    onUpdateOptions() {
        if (this.modelValue) {
            this.onSelectChange(this.modelValue);
        }
    }
    // Atualiza valores
    updateValues(option) {
        if (this.selectedValue !== option[this.fieldValue]) {
            this.selectedValue = option[this.fieldValue];
            this.selectElement.nativeElement.value = option[this.fieldValue];
            this.updateModel(option[this.fieldValue]);
            this.displayValue = option[this.fieldLabel];
            this.emitChange(option[this.fieldValue]);
        }
    }
    // Recebe as alterações do model
    onWriteValue(value) {
        const optionFound = this.findOptionValue(value);
        if (optionFound) {
            this.selectElement.nativeElement.value = optionFound.value;
            this.selectedValue = optionFound[this.fieldValue];
            this.displayValue = optionFound[this.fieldLabel];
        }
        else if (validValue(this.selectedValue)) {
            this.selectElement.nativeElement.value = undefined;
            this.updateModel(undefined);
            this.selectedValue = undefined;
            this.displayValue = undefined;
        }
        this.modelValue = value;
        this.changeDetector.detectChanges();
    }
    extraValidation(c) {
        return null;
    }
    isEqual(value, inputValue) {
        if ((value || value === 0) && inputValue) {
            return value.toString() === inputValue.toString();
        }
        if ((value === null && inputValue !== null) || (value === undefined && inputValue !== undefined)) {
            value = `${value}`; // Transformando em string
        }
        return value === inputValue;
    }
    findOptionValue(value) {
        return this.options.find(option => this.isEqual(option.value, value));
    }
    validateOptions(options) {
        removeDuplicatedOptions(options);
        removeUndefinedAndNullOptions(options);
        removeDuplicatedOptionsWithFieldValue(options, this.fieldValue);
        removeUndefinedAndNullOptionsWithFieldValue(options, this.fieldValue);
    }
}
PoSelectComponent.ɵfac = function PoSelectComponent_Factory(t) { return new (t || PoSelectComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoSelectComponent, selectors: [["po-select"]], viewQuery: function PoSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElement = _t.first);
    } }, inputs: { readonly: ["p-readonly", "readonly"], placeholder: ["p-placeholder", "placeholder"], options: ["p-options", "options"], fieldLabel: ["p-field-label", "fieldLabel"], fieldValue: ["p-field-value", "fieldValue"] }, outputs: { ngModelChange: "ngModelChange" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoSelectComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoSelectComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 11, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-field-container-content"], [1, "po-select", 3, "disabled", "required", "blur", "change"], ["select", ""], [3, "disabled", "hidden", "selected", "value", 4, "ngIf"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [3, "disabled", "hidden", "selected", "value"], [3, "disabled", "value"]], template: function PoSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "select", 2, 3);
        i0.ɵɵlistener("blur", function PoSelectComponent_Template_select_blur_2_listener() { return ctx.onBlur(); })("change", function PoSelectComponent_Template_select_change_2_listener($event) { return ctx.onSelectChange($event.target.value); });
        i0.ɵɵtemplate(4, PoSelectComponent_option_4_Template, 2, 5, "option", 4);
        i0.ɵɵtemplate(5, PoSelectComponent_option_5_Template, 2, 3, "option", 5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(6, "po-field-container-bottom");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("po-select-placeholder", !ctx.selectedValue && !!ctx.placeholder);
        i0.ɵɵproperty("disabled", ctx.disabled)("required", ctx.required);
        i0.ɵɵattribute("aria-label", ctx.label)("name", ctx.name);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.selectedValue || !!ctx.placeholder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i3.PoFieldContainerBottomComponent, i4.PoFieldContainerComponent], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], PoSelectComponent.prototype, "readonly", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSelectComponent, [{
        type: Component,
        args: [{ selector: 'po-select', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoSelectComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoSelectComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <select\r\n      #select\r\n      class=\"po-select\"\r\n      [attr.aria-label]=\"label\"\r\n      [attr.name]=\"name\"\r\n      [class.po-select-placeholder]=\"!selectedValue && !!placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [required]=\"required\"\r\n      (blur)=\"onBlur()\"\r\n      (change)=\"onSelectChange($event.target.value)\"\r\n    >\r\n      <option\r\n        *ngIf=\"!selectedValue || !!placeholder\"\r\n        [disabled]=\"!!placeholder\"\r\n        [hidden]=\"!selectedValue && !placeholder\"\r\n        [selected]=\"!selectedValue\"\r\n        [value]=\"placeholder ?? ''\"\r\n      >\r\n        {{ placeholder }}\r\n      </option>\r\n      <option *ngFor=\"let option of options\" [disabled]=\"readonly\" [value]=\"option?.[this.fieldValue]\">\r\n        {{ option?.[this.fieldLabel] }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.IterableDiffers }, { type: i0.Renderer2 }]; }, { selectElement: [{
            type: ViewChild,
            args: ['select', { read: ElementRef, static: true }]
        }], ngModelChange: [{
            type: Output,
            args: ['ngModelChange']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], fieldLabel: [{
            type: Input,
            args: ['p-field-label']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1zZWxlY3QvcG8tc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1zZWxlY3QvcG8tc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIscUNBQXFDLEVBQ3JDLDZCQUE2QixFQUM3QiwyQ0FBMkMsRUFDM0MsVUFBVSxFQUNYLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7OztJQ1o1RCxpQ0FNQztJQUNDLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQU5QLCtDQUEwQix3REFBQSxtQ0FBQSwwRkFBQTtJQUsxQixlQUNGO0lBREUsbURBQ0Y7OztJQUNBLGlDQUFpRztJQUMvRixZQUNGO0lBQUEsaUJBQVM7Ozs7SUFGOEIsMENBQXFCLGtFQUFBO0lBQzFELGVBQ0Y7SUFERSx3RkFDRjs7QURJTixNQUFNLDZCQUE2QixHQUFHLE9BQU8sQ0FBQztBQUM5QyxNQUFNLDZCQUE2QixHQUFHLE9BQU8sQ0FBQztBQUU5Qzs7Ozs7Ozs7Ozs7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QkQsbUNBQWlCLG9CQUFBLDZDQUFBO1FBTy9CLGVBQStEO1FBQS9ELGdGQUErRDtRQUMvRCx1Q0FBcUIsMEJBQUE7UUFIckIsdUNBQXlCLGtCQUFBO1FBU3RCLGVBQXFDO1FBQXJDLDhEQUFxQztRQVFiLGVBQVU7UUFBVixxQ0FBVTs7QURnR0o7SUFBZixZQUFZLEVBQUU7bURBQTJCO3VGQTVCcEQsaUJBQWlCO2NBakI3QixTQUFTOzJCQUNFLFdBQVcsbUJBRUosdUJBQXVCLENBQUMsTUFBTSxhQUNwQztvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjswSEFHd0QsYUFBYTtrQkFBckUsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFnQjlCLGFBQWE7a0JBQXJDLE1BQU07bUJBQUMsZUFBZTtZQVdjLFFBQVE7a0JBQTVDLEtBQUs7bUJBQUMsWUFBWTtZQUdLLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQTRCRSxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUEwQlUsVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlO1lBb0JNLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVtb3ZlRHVwbGljYXRlZE9wdGlvbnMsXHJcbiAgcmVtb3ZlRHVwbGljYXRlZE9wdGlvbnNXaXRoRmllbGRWYWx1ZSxcclxuICByZW1vdmVVbmRlZmluZWRBbmROdWxsT3B0aW9ucyxcclxuICByZW1vdmVVbmRlZmluZWRBbmROdWxsT3B0aW9uc1dpdGhGaWVsZFZhbHVlLFxyXG4gIHZhbGlkVmFsdWVcclxufSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBQb0ZpZWxkVmFsaWRhdGVNb2RlbCB9IGZyb20gJy4uL3BvLWZpZWxkLXZhbGlkYXRlLm1vZGVsJztcclxuaW1wb3J0IHsgUG9TZWxlY3RPcHRpb24gfSBmcm9tICcuL3BvLXNlbGVjdC1vcHRpb24uaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFBPX1NFTEVDVF9GSUVMRF9MQUJFTF9ERUZBVUxUID0gJ2xhYmVsJztcclxuY29uc3QgUE9fU0VMRUNUX0ZJRUxEX1ZBTFVFX0RFRkFVTFQgPSAndmFsdWUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0ZpZWxkVmFsaWRhdGVNb2RlbFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tc2VsZWN0LWJhc2ljXCIgdGl0bGU9XCJQTyBTZWxlY3QgQmFzaWNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNlbGVjdC1iYXNpYy9zYW1wbGUtcG8tc2VsZWN0LWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNlbGVjdC1iYXNpYy9zYW1wbGUtcG8tc2VsZWN0LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXNlbGVjdC1sYWJzXCIgdGl0bGU9XCJQTyBTZWxlY3QgTGFic1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc2VsZWN0LWxhYnMvc2FtcGxlLXBvLXNlbGVjdC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNlbGVjdC1sYWJzL3NhbXBsZS1wby1zZWxlY3QtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1zZWxlY3QtY3VzdG9tZXItcmVnaXN0cmF0aW9uXCIgdGl0bGU9XCJQTyBTZWxlY3QgLSBDdXN0b21lciByZWdpc3RyYXRpb25cIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNlbGVjdC1jdXN0b21lci1yZWdpc3RyYXRpb24vc2FtcGxlLXBvLXNlbGVjdC1jdXN0b21lci1yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc2VsZWN0LWN1c3RvbWVyLXJlZ2lzdHJhdGlvbi9zYW1wbGUtcG8tc2VsZWN0LWN1c3RvbWVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc2VsZWN0LWN1c3RvbWVyLXJlZ2lzdHJhdGlvbi9zYW1wbGUtcG8tc2VsZWN0LWN1c3RvbWVyLXJlZ2lzdHJhdGlvbi5zZXJ2aWNlLnRzXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPSdzYW1wbGUtcG8tc2VsZWN0LWN1c3RvbWVyLXJlZ2lzdHJhdGlvbi9zYW1wbGUtcG8tc2VsZWN0LWN1c3RvbWVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuZTJlLXNwZWMudHMnPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT0nc2FtcGxlLXBvLXNlbGVjdC1jdXN0b21lci1yZWdpc3RyYXRpb24vc2FtcGxlLXBvLXNlbGVjdC1jdXN0b21lci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnBvLnRzJz4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1zZWxlY3QtY29tcGFuaWVzXCIgdGl0bGU9XCJQTyBTZWxlY3QgQ29tcGFuaWVzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zZWxlY3QtY29tcGFuaWVzL3NhbXBsZS1wby1zZWxlY3QtY29tcGFuaWVzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNlbGVjdC1jb21wYW5pZXMvc2FtcGxlLXBvLXNlbGVjdC1jb21wYW5pZXMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIHBvLXNlbGVjdCBleGliZSB1bWEgbGlzdGEgZGUgdmFsb3JlcyBlIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gc2VsZWNpb25lIHVtIGRlc3NlcyB2YWxvcmVzLlxyXG4gKiBPcyB2YWxvcmVzIGxpc3RhZG9zIHBvZGVtIHNlciBmaXhvcyBvdSBkaW7Dom1pY29zIGRlIGFjb3JkbyBjb20gYSBuZWNlc3NpZGFkZSBkbyBkZXNlbnZvbHZlZG9yLCBkYW5kbyBtYWlzIGZsZXhpYmlsaWRhZGUgYW8gY29tcG9uZW50ZS5cclxuICogTyBwby1zZWxlY3QgbsOjbyBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGluZm9ybWUgdW0gdmFsb3IgZGlmZXJlbnRlIGRvcyB2YWxvcmVzIGxpc3RhZG9zLCBpc3NvIGdhcmFudGUgYSBjb25zaXN0w6puY2lhIGRhIGluZm9ybWHDp8Ojby5cclxuICogTyBwby1zZWxlY3QgbsOjbyBwZXJtaXRlIHF1ZSBzZWphbSBwYXNzYWRvcyB2YWxvcmVzIGR1cGxpY2Fkb3MsIHVuZGVmaW5lZCBlIG51bGwgcGFyYSBhcyBvcMOnw7VlcywgZXhjbHVpbmRvLW9zIGRhIGxpc3RhLlxyXG4gKlxyXG4gKiA+IEFvIHBhc3NhciB1bSB2YWxvciBwYXJhIG8gX21vZGVsXyBxdWUgbsOjbyBlc3TDoSBuYSBsaXN0YSBkZSBvcMOnw7VlcywgbyBtZXNtbyBzZXLDoSBkZWZpbmlkbyBjb21vIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiBUYW1iw6ltIGV4aXN0ZSBhIHBvc3NpYmlsaWRhZGUgZGUgdXRpbGl6YXIgdW0gX3RlbXBsYXRlXyBwYXJhIGEgZXhpYmnDp8OjbyBkb3MgaXRlbnMgZGEgbGlzdGEsXHJcbiAqIHZlamEgbWFpcyBlbSAqKltwLWNvbWJvLW9wdGlvbi10ZW1wbGF0ZV0oL2RvY3VtZW50YXRpb24vcG8tY29tYm8tb3B0aW9uLXRlbXBsYXRlKSoqLlxyXG4gKlxyXG4gKiA+IE9iczogbyB0ZW1wbGF0ZSAqKltwLXNlbGVjdC1vcHRpb24tdGVtcGxhdGVdKC9kb2N1bWVudGF0aW9uL3BvLXNlbGVjdC1vcHRpb24tdGVtcGxhdGUpKiogc2Vyw6EgZGVwcmVjaWFkbyBuYSB2ZXJzw6NvIDE0LngueC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1NlbGVjdENvbXBvbmVudCBleHRlbmRzIFBvRmllbGRWYWxpZGF0ZU1vZGVsPGFueT4gaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuICBAVmlld0NoaWxkKCdzZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRnVuw6fDo28gcGFyYSBhdHVhbGl6YXIgbyBuZ01vZGVsIGRvIGNvbXBvbmVudGUsIG5lY2Vzc8OhcmlvIHF1YW5kbyBuw6NvIGZvciB1dGlsaXphZG8gZGVudHJvIGRhIHRhZyBmb3JtLlxyXG4gICAqXHJcbiAgICogTmEgdmVyc8OjbyAxMi4yLjAgZG8gQW5ndWxhciBhIHZlcmlmaWNhw6fDo28gYHN0cmljdFRlbXBsYXRlc2AgdmVtIHRydWUgY29tbyBkZWZhdWx0LiBQb3J0YW50bywgcGFyYSB1dGlsaXphclxyXG4gICAqIHR3by13YXkgYmluZGluZyBubyBjb21wb25lbnRlIGRldmUgc2UgdXRpbGl6YXIgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tc2VsZWN0IC4uLiBbbmdNb2RlbF09XCJzZWxlY3RNb2RlbFwiIChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdE1vZGVsID0gJGV2ZW50XCI+IDwvcG8tc2VsZWN0PlxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ25nTW9kZWxDaGFuZ2UnKSBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIHNvbWVudGUgcGFyYSBsZWl0dXJhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZWFkb25seScpIEBJbnB1dEJvb2xlYW4oKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogTWVuc2FnZW0gcXVlIGFwYXJlY2Vyw6EgZW5xdWFudG8gbmVuaHVtYSBvcMOnw6NvIGVzdGl2ZXIgc2VsZWNpb25hZGEuICovXHJcbiAgQElucHV0KCdwLXBsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcblxyXG4gIGRpc3BsYXlWYWx1ZTtcclxuICBtb2RlbFZhbHVlOiBhbnk7XHJcbiAgc2VsZWN0ZWRWYWx1ZTogYW55O1xyXG4gIG9uTW9kZWxUb3VjaGVkOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZGlmZmVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBfZmllbGRMYWJlbD86IHN0cmluZyA9IFBPX1NFTEVDVF9GSUVMRF9MQUJFTF9ERUZBVUxUO1xyXG4gIHByaXZhdGUgX2ZpZWxkVmFsdWU/OiBzdHJpbmcgPSBQT19TRUxFQ1RfRklFTERfVkFMVUVfREVGQVVMVDtcclxuICBwcml2YXRlIF9vcHRpb25zOiBBcnJheTxQb1NlbGVjdE9wdGlvbj4gfCBBcnJheTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBOZXN0YSBwcm9wcmllZGFkZSBkZXZlIHNlciBkZWZpbmlkbyB1bWEgY29sZcOnw6NvIGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIGBQb1NlbGVjdE9wdGlvbmAuXHJcbiAgICpcclxuICAgKiBDYXNvIGVzdGEgbGlzdGEgZXN0aXZlciB2YXppYSwgbyBtb2RlbCBzZXLDoSBgdW5kZWZpbmVkYC5cclxuICAgKlxyXG4gICAqID4gRXNzYSBwcm9wcmllZGFkZSDDqSBpbXV0w6F2ZWwsIG91IHNlamEsIHNlbXByZSBxdWUgcXVpc2VyIGF0dWFsaXphciBhIGxpc3RhIGRlIG9ww6fDtWVzIGRpc3BvbsOtdmVpc1xyXG4gICAqIGF0dWFsaXplIGEgcmVmZXLDqm5jaWEgZG8gb2JqZXRvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogLy8gYXR1YWxpemEgYSByZWZlcsOqbmNpYSBkbyBvYmpldG8gZ2FyYW50aW5kbyBhIGF0dWFsaXphw6fDo28gZG8gdGVtcGxhdGVcclxuICAgKiB0aGlzLm9wdGlvbnMgPSBbLi4udGhpcy5vcHRpb25zLCB7IHZhbHVlOiAneCcsIGxhYmVsOiAnTm92YSBvcMOnw6NvJyB9XTtcclxuICAgKlxyXG4gICAqIC8vIGV2aXRlLCBwb2lzIG7Do28gYXR1YWxpemEgYSByZWZlcsOqbmNpYSBkbyBvYmpldG8gcG9kZW5kbyBnZXJhciBhdHJhc29zIG5hIGF0dWFsaXphw6fDo28gZG8gdGVtcGxhdGVcclxuICAgKiB0aGlzLm9wdGlvbnMucHVzaCh7IHZhbHVlOiAneCcsIGxhYmVsOiAnTm92YSBvcMOnw6NvJyB9KTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atb3B0aW9ucycpIHNldCBvcHRpb25zKG9wdGlvbnM6IEFycmF5PGFueT4pIHtcclxuICAgIGlmICh0aGlzLmZpZWxkTGFiZWwgJiYgdGhpcy5maWVsZFZhbHVlKSB7XHJcbiAgICAgIG9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmxhYmVsID0gb3B0aW9uW3RoaXMuZmllbGRMYWJlbF07XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsaWRhdGVPcHRpb25zKFsuLi5vcHRpb25zXSk7XHJcbiAgICB0aGlzLm9uVXBkYXRlT3B0aW9ucygpO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IFsuLi5vcHRpb25zXTtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIERldmUgc2VyIGluZm9ybWFkbyBvIG5vbWUgZGEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGFyYSBhIGNvbnZlcnPDo28gZG9zIGl0ZW5zIGFwcmVzZW50YWRvcyBuYSBsaXN0YSBkbyBjb21wb25lbnRlXHJcbiAgICogKGBwLW9wdGlvbnNgKSwgZXN0YSBwcm9wcmllZGFkZSBzZXLDoSByZXNwb25zw6F2ZWwgcGVsbyB0ZXh0byBkZSBhcHJlc2VudGHDp8OjbyBkZSBjYWRhIGl0ZW0gZGEgbGlzdGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgbGFiZWxgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWZpZWxkLWxhYmVsJykgc2V0IGZpZWxkTGFiZWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmllbGRMYWJlbCA9IHZhbHVlIHx8IFBPX1NFTEVDVF9GSUVMRF9MQUJFTF9ERUZBVUxUO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBbLi4udGhpcy5vcHRpb25zXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWVsZExhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIERldmUgc2VyIGluZm9ybWFkbyBvIG5vbWUgZGEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGFyYSBhIGNvbnZlcnPDo28gZG9zIGl0ZW5zIGFwcmVzZW50YWRvcyBuYSBsaXN0YSBkbyBjb21wb25lbnRlXHJcbiAgICogKGBwLW9wdGlvbnNgKSwgZXN0YSBwcm9wcmllZGFkZSBzZXLDoSByZXNwb25zw6F2ZWwgcGVsbyB2YWxvciBkZSBjYWRhIGl0ZW0gZGEgbGlzdGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgdmFsdWVgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWZpZWxkLXZhbHVlJykgc2V0IGZpZWxkVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmllbGRWYWx1ZSA9IHZhbHVlIHx8IFBPX1NFTEVDVF9GSUVMRF9WQUxVRV9ERUZBVUxUO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBbLi4udGhpcy5vcHRpb25zXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWVsZFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGNvbnN0IGNoYW5nZSA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVPcHRpb25zKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBxdWUgYXRyaWJ1aSBmb2NvIGFvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIHRlciBhIGluc3TDom5jaWEgZG8gY29tcG9uZW50ZSBubyBET00sIHBvZGVuZG8gc2VyIHV0aWxpemFkbyBvIFZpZXdDaGlsZCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGltcG9ydCB7IFBvU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiBAVmlld0NoaWxkKFBvU2VsZWN0Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3Q6IFBvU2VsZWN0Q29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNTZWxlY3QoKSB7XHJcbiAgICogICB0aGlzLnNlbGVjdC5mb2N1cygpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZD8uKCk7XHJcbiAgfVxyXG5cclxuICAvLyBBbHRlcmEgbyB2YWxvciBhbyBzZWxlY2lvbmFyIHVtIGl0ZW0uXHJcbiAgb25TZWxlY3RDaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkZvdW5kOiBhbnkgPSB0aGlzLmZpbmRPcHRpb25WYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAob3B0aW9uRm91bmQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyhvcHRpb25Gb3VuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVXBkYXRlT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLm1vZGVsVmFsdWUpIHtcclxuICAgICAgdGhpcy5vblNlbGVjdENoYW5nZSh0aGlzLm1vZGVsVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXR1YWxpemEgdmFsb3Jlc1xyXG4gIHVwZGF0ZVZhbHVlcyhvcHRpb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSAhPT0gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0pIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV07XHJcbiAgICAgIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV07XHJcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwob3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0pO1xyXG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IG9wdGlvblt0aGlzLmZpZWxkTGFiZWxdO1xyXG4gICAgICB0aGlzLmVtaXRDaGFuZ2Uob3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVjZWJlIGFzIGFsdGVyYcOnw7VlcyBkbyBtb2RlbFxyXG4gIG9uV3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBvcHRpb25Gb3VuZDogYW55ID0gdGhpcy5maW5kT3B0aW9uVmFsdWUodmFsdWUpO1xyXG5cclxuICAgIGlmIChvcHRpb25Gb3VuZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG9wdGlvbkZvdW5kLnZhbHVlO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBvcHRpb25Gb3VuZFt0aGlzLmZpZWxkVmFsdWVdO1xyXG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IG9wdGlvbkZvdW5kW3RoaXMuZmllbGRMYWJlbF07XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy51cGRhdGVNb2RlbCh1bmRlZmluZWQpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9kZWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBleHRyYVZhbGlkYXRpb24oYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNFcXVhbCh2YWx1ZTogYW55LCBpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICgodmFsdWUgfHwgdmFsdWUgPT09IDApICYmIGlucHV0VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkgPT09IGlucHV0VmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHZhbHVlID09PSBudWxsICYmIGlucHV0VmFsdWUgIT09IG51bGwpIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1gOyAvLyBUcmFuc2Zvcm1hbmRvIGVtIHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZSA9PT0gaW5wdXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZE9wdGlvblZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmluZChvcHRpb24gPT4gdGhpcy5pc0VxdWFsKG9wdGlvbi52YWx1ZSwgdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVPcHRpb25zKG9wdGlvbnM6IEFycmF5PGFueT4pIHtcclxuICAgIHJlbW92ZUR1cGxpY2F0ZWRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgcmVtb3ZlVW5kZWZpbmVkQW5kTnVsbE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICByZW1vdmVEdXBsaWNhdGVkT3B0aW9uc1dpdGhGaWVsZFZhbHVlKG9wdGlvbnMsIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICByZW1vdmVVbmRlZmluZWRBbmROdWxsT3B0aW9uc1dpdGhGaWVsZFZhbHVlKG9wdGlvbnMsIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1oZWxwXT1cImhlbHBcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxzZWxlY3RcclxuICAgICAgI3NlbGVjdFxyXG4gICAgICBjbGFzcz1cInBvLXNlbGVjdFwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbY2xhc3MucG8tc2VsZWN0LXBsYWNlaG9sZGVyXT1cIiFzZWxlY3RlZFZhbHVlICYmICEhcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXHJcbiAgICAgIChjaGFuZ2UpPVwib25TZWxlY3RDaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uXHJcbiAgICAgICAgKm5nSWY9XCIhc2VsZWN0ZWRWYWx1ZSB8fCAhIXBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiISFwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2hpZGRlbl09XCIhc2VsZWN0ZWRWYWx1ZSAmJiAhcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtzZWxlY3RlZF09XCIhc2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInBsYWNlaG9sZGVyID8/ICcnXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XHJcbiAgICAgIDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiIFtkaXNhYmxlZF09XCJyZWFkb25seVwiIFt2YWx1ZV09XCJvcHRpb24/Llt0aGlzLmZpZWxkVmFsdWVdXCI+XHJcbiAgICAgICAge3sgb3B0aW9uPy5bdGhpcy5maWVsZExhYmVsXSB9fVxyXG4gICAgICA8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT48L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG4iXX0=