import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PoCheckboxGroupOption } from './interfaces/po-checkbox-group-option.interface';
import { PoCheckboxGroupOptionView } from './interfaces/po-checkbox-group-option-view.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-checkbox-group` exibe uma lista de múltipla escolha onde o usuário pode marcar e desmarcar,
 * utilizando a tecla de espaço ou o clique do mouse, várias opções.
 *
 * > Para seleção única, utilize o [**PO Radio Group**](/documentation/po-radio-group).
 *
 * Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.
 *
 * ```
 * favorites = ['PO', 'Angular'];
 * ```
 *
 * Na maioria das situações, o array com os objetos setados já atende as necessidades mas, caso o desenvolvedor
 * tenha necessidade de usar um valor indeterminado (`null`), ou seja, nem marcado (`true`) e nem desmarcado (`false`),
 * deve setar a propriedade `p-indeterminate` como `true`.
 *
 * Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.
 *
 * ```
 * favorites = {
 *  PO: true,
 *  Angular: true,
 *  VueJS: false,
 *  React: null // indeterminado
 * };
 * ```
 */
export declare class PoCheckboxGroupBaseComponent implements ControlValueAccessor, Validator {
    /**
     * @optional
     *
     * @description
     *
     * Aplica foco no elemento ao ser iniciado.
     *
     * > Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.
     *
     * @default `false`
     */
    autoFocus: boolean;
    /** Nome dos checkboxes */
    name: string;
    /** Texto de apoio do campo */
    help?: string;
    /** Label do campo */
    label?: string;
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
     * Função para atualizar o `ngModel` do componente, necessário quando não for utilizado dentro da tag form.
     *
     * Na versão 12.2.0 do Angular a verificação `strictTemplates` vem true como default. Portanto, para utilizar
     * two-way binding no componente deve se utilizar da seguinte forma:
     *
     * ```
     * <po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
     * ```
     *
     */
    ngModelChange: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao alterar valor do campo
     */
    change: EventEmitter<any>;
    checkboxGroupOptionsView: Array<PoCheckboxGroupOptionView>;
    checkedOptions: any;
    checkedOptionsList: any;
    mdColumns: number;
    propagateChange: any;
    validatorChange: any;
    private _columns;
    private _disabled?;
    private _indeterminate?;
    private _options?;
    private _required?;
    /**
     * @optional
     *
     * @description
     *
     * Possibilita definir a quantidade de colunas para exibição dos itens do *checkbox*.
     * - É possível exibir as opções entre `1` e `4` colunas.
     * - Para resolução `sm` a colunagem invariavelmente passa para `1` coluna.
     * - Quando se trata de resolução `md` e o valor estabelecido para colunas for superior a `2`,
     * o *grid system* será composto por `2` colunas.
     * - Para evitar a quebra de linha, prefira a utilização de `1` coluna para opções com textos grandes.
     *
     * @default `2`
     *
     */
    set columns(value: number);
    get columns(): number;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita todos os itens do checkbox.
     *
     * @default `false`
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Caso exista a necessidade de usar o valor indeterminado (`null`) dentro da lista de opções, é necessário setar
     * a propriedade `p-indeterminate` como `true`, por padrão essa propriedade vem desabilitada (`false`).
     *
     * Quando essa propriedade é setada como `true`, o *po-checkbox-group* passa a devolver um objeto completo para o
     * `ngModel`, diferente do array que contém apenas os valores selecionados.
     *
     * @default `false`
     */
    set indeterminate(indeterminate: boolean);
    get indeterminate(): boolean;
    /**
     * @optional
     *
     * @description
     * Lista de opções que serão exibidas
     * Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption
     */
    set options(value: Array<PoCheckboxGroupOption>);
    get options(): Array<PoCheckboxGroupOption>;
    /**
     * @optional
     *
     * @description
     *
     * Define que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    changeValue(): void;
    checkIndeterminate(): any;
    checkOption(value: PoCheckboxGroupOption): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(optionsModel: any): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    protected validateModel(model: any): void;
    private checkColumnsRange;
    private checkOptionModel;
    private generateCheckOptions;
    private getGridSystemColumns;
    private isInvalidIndeterminate;
    private removeDuplicatedOptions;
    private setCheckboxGroupOptionsView;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCheckboxGroupBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoCheckboxGroupBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "name": "name"; "help": "p-help"; "label": "p-label"; "optional": "p-optional"; "columns": "p-columns"; "disabled": "p-disabled"; "indeterminate": "p-indeterminate"; "options": "p-options"; "required": "p-required"; }, { "ngModelChange": "ngModelChange"; "change": "p-change"; }, never, never, false>;
}