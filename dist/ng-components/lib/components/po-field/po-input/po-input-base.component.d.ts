import { EventEmitter, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Este é um componente baseado em input, com várias propriedades do input nativo e outras
 * propriedades extras como: máscara, pattern, mensagem de erro e etc.
 * Você deve informar a variável que contém o valor como [(ngModel)]="variavel", para que o
 * input receba o valor da variável e para que ela receba as alterações do valor (two-way-databinding).
 * A propriedade name é obrigatória para que o formulário e o model funcionem corretamente.
 *
 * Importante:
 *
 * - Caso o input tenha um [(ngModel)] sem o atributo name, ocorrerá um erro de angular.
 * Então você precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
 * Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".
 *
 */
export declare abstract class PoInputBaseComponent implements ControlValueAccessor, Validator {
    private cd?;
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
    /**
     * @optional
     *
     * @description
     *
     * Define o ícone que será exibido no início do campo.
     *
     * É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-input p-icon="po-icon-user" p-label="PO input"></po-input>
     * ```
     * Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-input [p-icon]="template" p-label="input template ionic"></po-input>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     */
    icon?: string | TemplateRef<void>;
    /** Rótulo do campo. */
    label?: string;
    /** Texto de apoio do campo. */
    help?: string;
    /** Nome e identificador do campo. */
    name: string;
    /**
     * @description
     *
     * Mensagem que será apresentada quando o `pattern` ou a máscara não for satisfeita.
     *
     * > Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
     */
    errorPattern?: string;
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
    type: string;
    onChangePropagate: any;
    objMask: any;
    modelLastUpdate: any;
    protected onTouched: any;
    protected passedWriteValue: boolean;
    protected validatorChange: any;
    private _maxlength?;
    private _minlength?;
    private _noAutocomplete?;
    private _placeholder?;
    /**
     * @optional
     *
     * @description
     *
     * Define a propriedade nativa `autocomplete` do campo como `off`.
     *
     * > No componente `po-password` será definido como `new-password`.
     *
     * @default `false`
     */
    set noAutocomplete(value: boolean);
    get noAutocomplete(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Mensagem que aparecerá enquanto o campo não estiver preenchido.
     *
     * @default ''
     */
    set placeholder(value: string);
    get placeholder(): string;
    /**
     * @description
     *
     * Se verdadeiro, desabilita o campo.
     *
     * @default `false`
     */
    disabled?: boolean;
    set setDisabled(disabled: string);
    /** Indica que o campo será somente leitura. */
    readonly?: boolean;
    set setReadonly(readonly: string);
    /**
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * > Esta propriedade é desconsiderada quando o input está desabilitado `(p-disabled)`.
     *
     * @default `false`
     */
    required?: boolean;
    set setRequired(required: string);
    /** Se verdadeiro, o campo receberá um botão para ser limpo. */
    clean?: boolean;
    set setClean(clean: string);
    /**
     * @description
     *
     * Expressão regular para validar o campo.
     * Quando o campo possuir uma máscara `(p-mask)` será automaticamente validado por ela, porém
     * é possível definir um p-pattern para substituir a validação da máscara.
     */
    pattern?: string;
    set setPattern(pattern: string);
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade máxima de caracteres que o campo aceita.
     */
    set maxlength(value: number);
    get maxlength(): number;
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade mínima de caracteres que o campo aceita.
     */
    set minlength(value: number);
    get minlength(): number;
    /**
     * @description
     *
     * Indica uma máscara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
     * A máscara gera uma validação automática do campo, podendo esta ser substituída por um REGEX específico
     * através da propriedade p-pattern.
     * O campo será sinalizado e o formulário ficará inválido quando o valor informado estiver fora do padrão definido,
     * mesmo quando desabilitado.
     */
    mask?: string;
    set setMask(mask: string);
    /**
     * @description
     *
     * Indica se o `model` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).
     *
     * @default `false`
     */
    maskFormatModel?: boolean;
    set setMaskFormatModel(maskFormatModel: string);
    constructor(cd?: ChangeDetectorRef);
    callOnChange(value: any): void;
    callUpdateModelWithTimeout(value: any): void;
    controlChangeModelEmitter(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(func: any): void;
    registerOnTouched(func: any): void;
    registerOnValidatorChange(fn: () => void): void;
    updateModel(value: any): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    writeValue(value: any): void;
    protected validateModel(): void;
    private validatePatternOnWriteValue;
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;
     *
     * focusComponent() {
     *   this.nomeDoComponente.focus();
     * }
     * ```
     */
    abstract focus(): void;
    abstract writeValueModel(value: any): void;
    abstract extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    abstract getScreenValue(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoInputBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoInputBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "icon": "p-icon"; "label": "p-label"; "help": "p-help"; "name": "name"; "errorPattern": "p-error-pattern"; "optional": "p-optional"; "noAutocomplete": "p-no-autocomplete"; "placeholder": "p-placeholder"; "setDisabled": "p-disabled"; "setReadonly": "p-readonly"; "setRequired": "p-required"; "setClean": "p-clean"; "setPattern": "p-pattern"; "maxlength": "p-maxlength"; "minlength": "p-minlength"; "setMask": "p-mask"; "setMaskFormatModel": "p-mask-format-model"; }, { "blur": "p-blur"; "enter": "p-enter"; "change": "p-change"; "changeModel": "p-change-model"; }, never, never, false>;
}