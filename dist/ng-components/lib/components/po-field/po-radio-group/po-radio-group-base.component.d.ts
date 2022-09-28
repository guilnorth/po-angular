import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PoRadioGroupOption } from './po-radio-group-option.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-radio-group` deve ser utilizado para disponibilizar múltiplas opções ao usuário, permitindo a ele que
 * selecione apenas uma delas. Seu uso é recomendado para um número pequeno de opções, caso contrário, recomenda-se o uso
 * do [**po-combo**](/documentation/po-combo) ou [**po-select**](/documentation/po-select).
 *
 * Este não é um componente de multiseleção, se for este o caso, deve-se utilizar o
 * [**po-checkbox-group**](/documentation/po-checkbox-group).
 *
 * > Ao passar um valor para o *model* que não esteja na lista de opções, o mesmo será definido como `undefined`.
 *
 * #### Acessibilidade tratada no componente interno `po-radio`:
 *
 * Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:
 *
 * - O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. [WCAG 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
 * - A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. [WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color)
 * - Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. [W3C WAI-ARIA 3.5 Button - Keyboard Interaction](https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3)
 * - A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. [(WCAG 2.4.12: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced)
 *
 * Conforme documentação em: https://doc.animaliads.io/docs/components/radio
 */
export declare abstract class PoRadioGroupBaseComponent implements ControlValueAccessor, Validator {
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
    /** Nome das opções. */
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
     * Evento ao alterar valor do campo.
     */
    change: EventEmitter<any>;
    mdColumns: number;
    value: any;
    protected onTouched: any;
    private _columns;
    private _disabled?;
    private _options;
    private _required?;
    private onChangePropagate;
    private validatorChange;
    /**
     * @optional
     *
     * @description
     *
     * Define a quantidade de colunas para exibição das opções.
     *
     * **Considerações:**
     *  - É possível exibir as opções entre `1` e `4` colunas.
     *  - O número máximo de colunas é invariável nas seguintes resoluções:
     *    + `sm`: `1`
     *    + `md`: `2`
     *
     * @default `2`
     */
    set columns(value: number);
    get columns(): number;
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
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    /**
     * Lista de opções que serão exibidas.
     * Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.
     */
    set options(value: Array<PoRadioGroupOption>);
    get options(): Array<PoRadioGroupOption>;
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho do *radio*
     * @default `medium`
     */
    size: string;
    changeValue(changedValue: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    registerOnValidatorChange(fn: any): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    writeValue(modelValue: any): void;
    private checkColumnsRange;
    private getGridSystemColumns;
    private validateModel;
    abstract getElementByValue(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRadioGroupBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoRadioGroupBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "name": "name"; "optional": "p-optional"; "columns": "p-columns"; "disabled": "p-disabled"; "required": "p-required"; "options": "p-options"; "size": "p-size"; }, { "change": "p-change"; }, never, never, false>;
}
