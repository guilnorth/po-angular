import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, convertToInt, removeDuplicatedOptions } from '../../../utils/util';
import { InputBoolean } from '../../../decorators';
import { requiredFailed } from '../validators';
import * as i0 from "@angular/core";
const poRadioGroupColumnsDefaultLength = 6;
const poRadioGroupColumnsTotalLength = 12;
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
export class PoRadioGroupBaseComponent {
    constructor() {
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
        this.autoFocus = false;
        /**
         * @optional
         *
         * @description
         *
         * Evento ao alterar valor do campo.
         */
        this.change = new EventEmitter();
        this.mdColumns = poRadioGroupColumnsDefaultLength;
        this.onTouched = null;
        this._columns = poRadioGroupColumnsDefaultLength;
        this._disabled = false;
        this._required = false;
        this.onChangePropagate = null;
    }
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
    set columns(value) {
        const columns = convertToInt(value, poRadioGroupColumnsDefaultLength);
        this._columns = this.getGridSystemColumns(columns, 4);
        this.mdColumns = this.getGridSystemColumns(columns, 2);
    }
    get columns() {
        return this._columns;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será desabilitado.
     *
     * @default `false`
     */
    set disabled(disabled) {
        this._disabled = convertToBoolean(disabled);
        this.validateModel();
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel();
    }
    get required() {
        return this._required;
    }
    /**
     * Lista de opções que serão exibidas.
     * Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.
     */
    set options(value) {
        this._options = value;
        removeDuplicatedOptions(this.options);
    }
    get options() {
        return this._options;
    }
    // Função que controla quando deve ser emitido onChange e atualiza o Model
    changeValue(changedValue) {
        if (this.onChangePropagate) {
            this.onChangePropagate(changedValue);
        }
        if (this.value !== changedValue) {
            this.change.emit(changedValue);
        }
        this.value = changedValue;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onChangePropagate = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    validate(abstractControl) {
        if (requiredFailed(this.required, this.disabled, abstractControl.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
    }
    writeValue(modelValue) {
        this.value = modelValue;
        // Busca radio com o valor especificado
        const element = this.getElementByValue(modelValue);
        if (!element && this.onChangePropagate) {
            this.value = undefined;
            this.onChangePropagate(this.value);
        }
    }
    checkColumnsRange(columns, maxColumns) {
        const minColumns = 1;
        return columns >= minColumns && columns <= maxColumns;
    }
    getGridSystemColumns(columns, maxColumns) {
        const gridSystemColumns = poRadioGroupColumnsTotalLength / columns;
        return this.checkColumnsRange(columns, maxColumns) ? gridSystemColumns : poRadioGroupColumnsDefaultLength;
    }
    validateModel() {
        if (this.validatorChange) {
            this.validatorChange();
        }
    }
}
PoRadioGroupBaseComponent.ɵfac = function PoRadioGroupBaseComponent_Factory(t) { return new (t || PoRadioGroupBaseComponent)(); };
PoRadioGroupBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoRadioGroupBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], name: "name", optional: ["p-optional", "optional"], columns: ["p-columns", "columns"], disabled: ["p-disabled", "disabled"], required: ["p-required", "required"], options: ["p-options", "options"], size: ["p-size", "size"] }, outputs: { change: "p-change" } });
__decorate([
    InputBoolean()
], PoRadioGroupBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRadioGroupBaseComponent, [{
        type: Directive
    }], null, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], name: [{
            type: Input,
            args: ['name']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], size: [{
            type: Input,
            args: ['p-size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmFkaW8tZ3JvdXAtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tcmFkaW8tZ3JvdXAvcG8tcmFkaW8tZ3JvdXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkvQyxNQUFNLGdDQUFnQyxHQUFXLENBQUMsQ0FBQztBQUNuRCxNQUFNLDhCQUE4QixHQUFXLEVBQUUsQ0FBQztBQUVsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUdILE1BQU0sT0FBZ0IseUJBQXlCO0lBRC9DO1FBRUU7Ozs7Ozs7Ozs7V0FVRztRQUNvQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBb0JsRTs7Ozs7O1dBTUc7UUFDaUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhFLGNBQVMsR0FBVyxnQ0FBZ0MsQ0FBQztRQUczQyxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBRXhCLGFBQVEsR0FBVyxnQ0FBZ0MsQ0FBQztRQUNwRCxjQUFTLEdBQWEsS0FBSyxDQUFDO1FBRTVCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFFNUIsc0JBQWlCLEdBQVEsSUFBSSxDQUFDO0tBaUt2QztJQTlKQzs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUNILElBQXdCLE9BQU8sQ0FBQyxLQUFhO1FBQzNDLE1BQU0sT0FB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dHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4sIGNvbnZlcnRUb0ludCwgcmVtb3ZlRHVwbGljYXRlZE9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IHJlcXVpcmVkRmFpbGVkIH0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb1JhZGlvR3JvdXBPcHRpb24gfSBmcm9tICcuL3BvLXJhZGlvLWdyb3VwLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgcG9SYWRpb0dyb3VwQ29sdW1uc0RlZmF1bHRMZW5ndGg6IG51bWJlciA9IDY7XHJcbmNvbnN0IHBvUmFkaW9Hcm91cENvbHVtbnNUb3RhbExlbmd0aDogbnVtYmVyID0gMTI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tcmFkaW8tZ3JvdXBgIGRldmUgc2VyIHV0aWxpemFkbyBwYXJhIGRpc3BvbmliaWxpemFyIG3Dumx0aXBsYXMgb3DDp8O1ZXMgYW8gdXN1w6FyaW8sIHBlcm1pdGluZG8gYSBlbGUgcXVlXHJcbiAqIHNlbGVjaW9uZSBhcGVuYXMgdW1hIGRlbGFzLiBTZXUgdXNvIMOpIHJlY29tZW5kYWRvIHBhcmEgdW0gbsO6bWVybyBwZXF1ZW5vIGRlIG9ww6fDtWVzLCBjYXNvIGNvbnRyw6FyaW8sIHJlY29tZW5kYS1zZSBvIHVzb1xyXG4gKiBkbyBbKipwby1jb21ibyoqXSgvZG9jdW1lbnRhdGlvbi9wby1jb21ibykgb3UgWyoqcG8tc2VsZWN0KipdKC9kb2N1bWVudGF0aW9uL3BvLXNlbGVjdCkuXHJcbiAqXHJcbiAqIEVzdGUgbsOjbyDDqSB1bSBjb21wb25lbnRlIGRlIG11bHRpc2VsZcOnw6NvLCBzZSBmb3IgZXN0ZSBvIGNhc28sIGRldmUtc2UgdXRpbGl6YXIgb1xyXG4gKiBbKipwby1jaGVja2JveC1ncm91cCoqXSgvZG9jdW1lbnRhdGlvbi9wby1jaGVja2JveC1ncm91cCkuXHJcbiAqXHJcbiAqID4gQW8gcGFzc2FyIHVtIHZhbG9yIHBhcmEgbyAqbW9kZWwqIHF1ZSBuw6NvIGVzdGVqYSBuYSBsaXN0YSBkZSBvcMOnw7VlcywgbyBtZXNtbyBzZXLDoSBkZWZpbmlkbyBjb21vIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiAjIyMjIEFjZXNzaWJpbGlkYWRlIHRyYXRhZGEgbm8gY29tcG9uZW50ZSBpbnRlcm5vIGBwby1yYWRpb2A6XHJcbiAqXHJcbiAqIEFsZ3VtYXMgZGlyZXRyaXplcyBkZSBhY2Vzc2liaWxpZGFkZSBqw6Egc8OjbyB0cmF0YWRhcyBubyBjb21wb25lbnRlLCBpbnRlcm5hbWVudGUsIGUgbsOjbyBwb2RlbSBzZXIgYWx0ZXJhZGFzIHBlbG8gcHJvcHJpZXTDoXJpbyBkbyBjb250ZcO6ZG8uIFPDo28gZWxhczpcclxuICpcclxuICogLSBPIGNvbXBvbmVudGUgZm9pIGRlc2Vudm9sdmlkbyB1dGlsaXphbmRvIGNvbnRyb2xlcyBwYWRyw7VlcyBIVE1MIHBhcmEgcGVybWl0aXIgYSBpZGVudGlmaWNhw6fDo28gZG8gbWVzbW8gbmEgaW50ZXJmYWNlIHBvciB0ZWNub2xvZ2lhcyBhc3Npc3RpdmFzLiBbV0NBRyA0LjEuMjogTmFtZSwgUm9sZSwgVmFsdWVdKGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvV0NBRzIxL1VuZGVyc3RhbmRpbmcvbmFtZS1yb2xlLXZhbHVlKVxyXG4gKiAtIEEgY29yIG7Do28gZGV2ZSBzZXIgbyDDum5pY28gbWVpbyBwYXJhIGRpZmVyZW5jaWFyIG8gcmFkaW8gYnV0dG9uIG5vcm1hbCBkbyBzZWxlY2lvbmFkbywgcG9yIGlzc28gZGV2ZS1zZSBtYW50ZXIgdW1hIGRpZmVyZW7Dp2EgdmlzdWFsIGVudHJlIG9zIGVzdGFkb3MuIFtXR0FHIDEuNC4xOiBVc2Ugb2YgQ29sb3IsIDMuMi40OiBDb25zaXN0ZW50IElkZW50aWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvV0FJL1dDQUcyMS9VbmRlcnN0YW5kaW5nL3VzZS1vZi1jb2xvcilcclxuICogLSBRdWFuZG8gZW0gZm9jbywgbyBjb21wb25lbnRlIMOpIGF0aXZhZG8gdXNhbmRvIGFzIHRlY2xhcyBkZSBFc3Bhw6dvIGUgRW50ZXIgZG8gdGVjbGFkby4gW1czQyBXQUktQVJJQSAzLjUgQnV0dG9uIC0gS2V5Ym9hcmQgSW50ZXJhY3Rpb25dKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4xLyNrZXlib2FyZC1pbnRlcmFjdGlvbi0zKVxyXG4gKiAtIEEgw6FyZWEgZG8gZm9jbyBwcmVjaXNhciB0ZXIgdW1hIGVzcGVzc3VyYSBkZSBwZWxvIG1lbm9zIDIgcGl4ZWxzIENTUyBlIG8gZm9jbyBuw6NvIHBvZGUgZmljYXIgZXNjb25kaWRvIHBvciBvdXRyb3MgZWxlbWVudG9zIGRhIHRlbGEuIFsoV0NBRyAyLjQuMTI6IEZvY3VzIEFwcGVhcmFuY2VdKGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvV0NBRzIyL1VuZGVyc3RhbmRpbmcvZm9jdXMtYXBwZWFyYW5jZS1lbmhhbmNlZClcclxuICpcclxuICogQ29uZm9ybWUgZG9jdW1lbnRhw6fDo28gZW06IGh0dHBzOi8vZG9jLmFuaW1hbGlhZHMuaW8vZG9jcy9jb21wb25lbnRzL3JhZGlvXHJcbiAqL1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb1JhZGlvR3JvdXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEFwbGljYSBmb2NvIG5vIGVsZW1lbnRvIGFvIHNlciBpbmljaWFkby5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBtYWlzIGRlIHVtIGVsZW1lbnRvIHNlamEgY29uZmlndXJhZG8gY29tIGVzc2EgcHJvcHJpZWRhZGUsIGFwZW5hcyBvIMO6bHRpbW8gZWxlbWVudG8gZGVjbGFyYWRvIGNvbSBlbGEgdGVyw6EgbyBmb2NvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hdXRvLWZvY3VzJykgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogTm9tZSBkYXMgb3DDp8O1ZXMuICovXHJcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIGEgaW5kaWNhw6fDo28gZGUgY2FtcG8gb3BjaW9uYWwgc2Vyw6EgZXhpYmlkYS5cclxuICAgKlxyXG4gICAqID4gTsOjbyBzZXLDoSBleGliaWRhIGEgaW5kaWNhw6fDo28gc2U6XHJcbiAgICogLSBPIGNhbXBvIGNvbnRlciBgcC1yZXF1aXJlZGA7XHJcbiAgICogLSBOw6NvIHBvc3N1aXIgYHAtaGVscGAgZS9vdSBgcC1sYWJlbGAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbmFsJykgb3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gYW8gYWx0ZXJhciB2YWxvciBkbyBjYW1wby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbWRDb2x1bW5zOiBudW1iZXIgPSBwb1JhZGlvR3JvdXBDb2x1bW5zRGVmYXVsdExlbmd0aDtcclxuICB2YWx1ZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9jb2x1bW5zOiBudW1iZXIgPSBwb1JhZGlvR3JvdXBDb2x1bW5zRGVmYXVsdExlbmd0aDtcclxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9vcHRpb25zOiBBcnJheTxQb1JhZGlvR3JvdXBPcHRpb24+O1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlUHJvcGFnYXRlOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgdmFsaWRhdG9yQ2hhbmdlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgcXVhbnRpZGFkZSBkZSBjb2x1bmFzIHBhcmEgZXhpYmnDp8OjbyBkYXMgb3DDp8O1ZXMuXHJcbiAgICpcclxuICAgKiAqKkNvbnNpZGVyYcOnw7VlczoqKlxyXG4gICAqICAtIMOJIHBvc3PDrXZlbCBleGliaXIgYXMgb3DDp8O1ZXMgZW50cmUgYDFgIGUgYDRgIGNvbHVuYXMuXHJcbiAgICogIC0gTyBuw7ptZXJvIG3DoXhpbW8gZGUgY29sdW5hcyDDqSBpbnZhcmnDoXZlbCBuYXMgc2VndWludGVzIHJlc29sdcOnw7VlczpcclxuICAgKiAgICArIGBzbWA6IGAxYFxyXG4gICAqICAgICsgYG1kYDogYDJgXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgMmBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtY29sdW1ucycpIHNldCBjb2x1bW5zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBjb252ZXJ0VG9JbnQodmFsdWUsIHBvUmFkaW9Hcm91cENvbHVtbnNEZWZhdWx0TGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5nZXRHcmlkU3lzdGVtQ29sdW1ucyhjb2x1bW5zLCA0KTtcclxuICAgIHRoaXMubWRDb2x1bW5zID0gdGhpcy5nZXRHcmlkU3lzdGVtQ29sdW1ucyhjb2x1bW5zLCAyKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIGRlc2FiaWxpdGFkby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbGVhbihkaXNhYmxlZCk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIG9icmlnYXTDs3Jpby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcmVxdWlyZWQnKSBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gY29udmVydFRvQm9vbGVhbihyZXF1aXJlZCk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVxdWlyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0YSBkZSBvcMOnw7VlcyBxdWUgc2Vyw6NvIGV4aWJpZGFzLlxyXG4gICAqIE5lc3RhIHByb3ByaWVkYWRlIGRldmUgc2VyIGRlZmluaWRvIHVtIGFycmF5IGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIFBvUmFkaW9Hcm91cE9wdGlvbi5cclxuICAgKi9cclxuICBASW5wdXQoJ3Atb3B0aW9ucycpIHNldCBvcHRpb25zKHZhbHVlOiBBcnJheTxQb1JhZGlvR3JvdXBPcHRpb24+KSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XHJcbiAgICByZW1vdmVEdXBsaWNhdGVkT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuICBnZXQgb3B0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBvIHRhbWFuaG8gZG8gKnJhZGlvKlxyXG4gICAqIEBkZWZhdWx0IGBtZWRpdW1gXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNpemUnKSBzaXplOiBzdHJpbmc7XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHF1ZSBjb250cm9sYSBxdWFuZG8gZGV2ZSBzZXIgZW1pdGlkbyBvbkNoYW5nZSBlIGF0dWFsaXphIG8gTW9kZWxcclxuICBjaGFuZ2VWYWx1ZShjaGFuZ2VkVmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMub25DaGFuZ2VQcm9wYWdhdGUpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0ZShjaGFuZ2VkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSBjaGFuZ2VkVmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChjaGFuZ2VkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsdWUgPSBjaGFuZ2VkVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIG9zIGVzdGFkb3MgZGUgaGFiaWxpdGFkbyB2aWEgZm9ybXMgYXBpXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0ZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBpZiAocmVxdWlyZWRGYWlsZWQodGhpcy5yZXF1aXJlZCwgdGhpcy5kaXNhYmxlZCwgYWJzdHJhY3RDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG1vZGVsVmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG1vZGVsVmFsdWU7XHJcblxyXG4gICAgLy8gQnVzY2EgcmFkaW8gY29tIG8gdmFsb3IgZXNwZWNpZmljYWRvXHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QnlWYWx1ZShtb2RlbFZhbHVlKTtcclxuICAgIGlmICghZWxlbWVudCAmJiB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VQcm9wYWdhdGUodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQ29sdW1uc1JhbmdlKGNvbHVtbnMsIG1heENvbHVtbnMpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1pbkNvbHVtbnMgPSAxO1xyXG5cclxuICAgIHJldHVybiBjb2x1bW5zID49IG1pbkNvbHVtbnMgJiYgY29sdW1ucyA8PSBtYXhDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRHcmlkU3lzdGVtQ29sdW1ucyhjb2x1bW5zOiBudW1iZXIsIG1heENvbHVtbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBncmlkU3lzdGVtQ29sdW1ucyA9IHBvUmFkaW9Hcm91cENvbHVtbnNUb3RhbExlbmd0aCAvIGNvbHVtbnM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb2x1bW5zUmFuZ2UoY29sdW1ucywgbWF4Q29sdW1ucykgPyBncmlkU3lzdGVtQ29sdW1ucyA6IHBvUmFkaW9Hcm91cENvbHVtbnNEZWZhdWx0TGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1vZGVsKCkge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdG9yQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZXZlIHJldG9ybmFyIG8gdmFsb3IgZWxlbWVudG8gcXVlIGNvbnTDqW0gbyB2YWxvciBwYXNzYWRvIHBvciBwYXLDom1ldHJvXHJcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudEJ5VmFsdWUodmFsdWU6IGFueSk6IGFueTtcclxufVxyXG4iXX0=