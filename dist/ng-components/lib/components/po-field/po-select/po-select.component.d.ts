import { ChangeDetectorRef, DoCheck, ElementRef, EventEmitter, IterableDiffers, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoFieldValidateModel } from '../po-field-validate.model';
import * as i0 from "@angular/core";
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
export declare class PoSelectComponent extends PoFieldValidateModel<any> implements DoCheck {
    private changeDetector;
    renderer: Renderer2;
    selectElement: ElementRef;
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
    ngModelChange: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será somente para leitura.
     *
     * @default `false`
     */
    readonly: boolean;
    /** Mensagem que aparecerá enquanto nenhuma opção estiver selecionada. */
    placeholder?: string;
    displayValue: any;
    modelValue: any;
    selectedValue: any;
    onModelTouched: any;
    private differ;
    private _fieldLabel?;
    private _fieldValue?;
    private _options;
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
    set options(options: Array<any>);
    get options(): Array<any>;
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.
     *
     * @default `label`
     */
    set fieldLabel(value: string);
    get fieldLabel(): string;
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo valor de cada item da lista.
     *
     * @default `value`
     */
    set fieldValue(value: string);
    get fieldValue(): string;
    constructor(changeDetector: ChangeDetectorRef, differs: IterableDiffers, renderer: Renderer2);
    ngDoCheck(): void;
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
    focus(): void;
    onBlur(): void;
    onSelectChange(value: any): void;
    onUpdateOptions(): void;
    updateValues(option: any): void;
    onWriteValue(value: any): void;
    extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    private isEqual;
    private findOptionValue;
    private validateOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoSelectComponent, "po-select", never, { "readonly": "p-readonly"; "placeholder": "p-placeholder"; "options": "p-options"; "fieldLabel": "p-field-label"; "fieldValue": "p-field-value"; }, { "ngModelChange": "ngModelChange"; }, never, never, false>;
}
