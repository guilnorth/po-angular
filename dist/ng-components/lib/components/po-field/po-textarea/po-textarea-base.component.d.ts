import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Este é um componente de entrada de dados que possibilita o preechimento com múltiplas linhas.
 * É recomendado para observações, detalhamentos e outras situações onde o usuário deva preencher com um texto.
 *
 * Importante:
 *
 * - A propriedade `name` é obrigatória para que o formulário e o `model` funcionem corretamente. Do contrário, ocorrerá um erro de
 * _Angular_, onde será necessário informar o atributo `name` ou o atributo `[ngModelOptions]="{standalone: true}"`, por exemplo:
 *
 * ```
 * <po-textarea
 *   [(ngModel)]="pessoa.nome"
 *   [ngModelOptions]="{standalone: true}">
 * </po-textarea>
 * ```
 *
 * #### Acessibilidade tratada no componente
 * Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:
 *
 * - O Text area foi desenvolvido com uso de controles padrões HTML, o que permite a identificação do mesmo na interface por tecnologias
 * assistivas. [WCAG 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
 * - O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros
 * elementos da tela. [WCAG 2.4.12: Focus Appearance)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced)
 * - A identificação do erro acontece também através da mudança de cor do campo, mas também de um ícone
 * junto da mensagem. [WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color)
 */
export declare abstract class PoTextareaBaseComponent implements ControlValueAccessor, Validator {
    cd: ChangeDetectorRef;
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
    /** Label do campo. */
    label?: string;
    /** Texto de apoio do campo. */
    help?: string;
    /** Nome e Id do componente. */
    name: string;
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
     * Evento disparado ao sair do campo.
     */
    blur: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao entrar do campo.
     */
    enter: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao alterar valor e deixar o campo.
     */
    change: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao alterar valor do model.
     */
    changeModel: EventEmitter<any>;
    private _disabled;
    private _maxlength;
    private _minlength;
    private _placeholder;
    private _readonly;
    private _required;
    private _rows;
    private modelLastUpdate;
    private onChangePropagate;
    private validatorChange;
    protected onTouched: any;
    /** Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido. */
    set placeholder(value: string);
    get placeholder(): string;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será desabilitado.
     *
     * @default `false`
     */
    set disabled(disabled: boolean);
    get disabled(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será somente leitura.
     *
     * @default `false`
     */
    set readonly(readonly: boolean);
    get readonly(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * > Esta propriedade é desconsiderada quando o _input_ está desabilitado `(p-disabled)`.
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade mínima de caracteres que o campo aceita.
     */
    set minlength(minlength: number);
    get minlength(): number;
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade máxima de caracteres que o campo aceita.
     */
    set maxlength(maxlength: number);
    get maxlength(): number;
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade de linhas que serão exibidas.
     *
     * @default `3`
     */
    set rows(value: number);
    get rows(): number;
    constructor(cd: ChangeDetectorRef);
    callOnChange(value: any): void;
    controlChangeModelEmitter(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(func: any): void;
    registerOnTouched(func: any): void;
    registerOnValidatorChange(func: any): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    writeValue(value: any): void;
    protected validateModel(): void;
    abstract writeValueModel(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTextareaBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTextareaBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "label": "p-label"; "help": "p-help"; "name": "name"; "optional": "p-optional"; "placeholder": "p-placeholder"; "disabled": "p-disabled"; "readonly": "p-readonly"; "required": "p-required"; "minlength": "p-minlength"; "maxlength": "p-maxlength"; "rows": "p-rows"; }, { "blur": "p-blur"; "enter": "p-enter"; "change": "p-change"; "changeModel": "p-change-model"; }, never, never, false>;
}
