import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PoRichTextService } from './po-rich-text.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-rich-text` é um editor de textos enriquecidos.
 *
 * Para edição de texto simples sem formatação recomenda-se o uso do componente [**po-textarea**](/documentation/po-textarea).
 *
 * > No navegador Internet Explorer não é possível alterar a cor do texto.
 */
export declare abstract class PoRichTextBaseComponent implements ControlValueAccessor, Validator {
    private richTextService;
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
     * Define se o alinhamento de texto será desabilitado.
     *
     * @default `false`
     */
    disabledTextAlign: boolean;
    /**
     * @description
     *
     * Mensagem que será apresentada quando a propriedade required estiver habilitada e o campo for limpo após algo ser digitado.
     */
    errorMessage?: string;
    /**
     * @optional
     *
     * @description
     *
     * Texto de apoio do campo.
     */
    help?: string;
    /**
     * @optional
     *
     * @description
     *
     * Rótulo do campo.
     */
    label?: string;
    /** Nome e identificador do campo. */
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
     * Evento disparado ao deixar o campo e que recebe como parâmetro o valor alterado.
     */
    change: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao modificar valor do model e que recebe como parâmetro o valor alterado.
     */
    changeModel: EventEmitter<any>;
    invalid: boolean;
    onChangeModel: any;
    value: string;
    private _height?;
    private _placeholder;
    private _readonly;
    private _required;
    private validatorChange;
    protected onTouched: any;
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da área de edição de texto.
     *
     * > Altura mínima do componente é `94` e a altura máxima é `262`.
     */
    set height(height: number);
    get height(): number;
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
     * @optional
     *
     * @description
     *
     * Indica que o campo será somente leitura.
     *
     * @default `false`
     */
    set readonly(value: boolean);
    get readonly(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(value: boolean);
    get required(): boolean;
    constructor(richTextService: PoRichTextService);
    registerOnChange(func: any): void;
    registerOnTouched(func: any): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    writeValue(value: string): void;
    protected updateModel(value: any): void;
    protected validateModel(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRichTextBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoRichTextBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "disabledTextAlign": "p-disabled-text-align"; "errorMessage": "p-error-message"; "help": "p-help"; "label": "p-label"; "name": "name"; "optional": "p-optional"; "height": "p-height"; "placeholder": "p-placeholder"; "readonly": "p-readonly"; "required": "p-required"; }, { "change": "p-change"; "changeModel": "p-change-model"; }, never, never, false>;
}
