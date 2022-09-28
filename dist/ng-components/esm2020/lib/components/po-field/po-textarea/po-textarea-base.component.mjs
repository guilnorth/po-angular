import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, convertToInt } from '../../../utils/util';
import { maxlengpoailed, minlengpoailed, requiredFailed } from '../validators';
import { InputBoolean } from '../../../decorators';
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
export class PoTextareaBaseComponent {
    constructor(cd) {
        this.cd = cd;
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
         * Evento disparado ao sair do campo.
         */
        this.blur = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao entrar do campo.
         */
        this.enter = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao alterar valor e deixar o campo.
         */
        this.change = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao alterar valor do model.
         */
        this.changeModel = new EventEmitter();
        this._disabled = false;
        this._placeholder = '';
        this._readonly = false;
        this._required = false;
        this._rows = 3;
        this.onChangePropagate = null;
        // eslint-disable-next-line
        this.onTouched = null;
    }
    /** Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido. */
    set placeholder(value) {
        this._placeholder = value || '';
    }
    get placeholder() {
        return this._placeholder;
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
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será somente leitura.
     *
     * @default `false`
     */
    set readonly(readonly) {
        this._readonly = convertToBoolean(readonly);
    }
    get readonly() {
        return this._readonly;
    }
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
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel();
    }
    get required() {
        return this._required;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade mínima de caracteres que o campo aceita.
     */
    set minlength(minlength) {
        this._minlength = convertToInt(minlength);
        this.validateModel();
    }
    get minlength() {
        return this._minlength;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade máxima de caracteres que o campo aceita.
     */
    set maxlength(maxlength) {
        this._maxlength = convertToInt(maxlength);
        this.validateModel();
    }
    get maxlength() {
        return this._maxlength;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade de linhas que serão exibidas.
     *
     * @default `3`
     */
    set rows(value) {
        this._rows = isNaN(parseInt(value, 10)) || value < 3 ? 3 : parseInt(value, 10);
    }
    get rows() {
        return this._rows;
    }
    callOnChange(value) {
        // Quando o input não possui um formulário, então esta função não é registrada
        if (this.onChangePropagate) {
            this.onChangePropagate(value);
        }
        this.controlChangeModelEmitter(value);
    }
    controlChangeModelEmitter(value) {
        if (this.modelLastUpdate !== value) {
            this.changeModel.emit(value);
            this.modelLastUpdate = value;
        }
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cd.markForCheck();
    }
    // Funções `registerOnChange`, `registerOnTouched` e `registerOnValidatorChange` implementadas referentes ao ControlValueAccessor
    // usadas para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnChange(func) {
        this.onChangePropagate = func;
    }
    registerOnTouched(func) {
        this.onTouched = func;
    }
    registerOnValidatorChange(func) {
        this.validatorChange = func;
    }
    validate(abstractControl) {
        if (requiredFailed(this.required, this.disabled, abstractControl.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
        if (minlengpoailed(this.minlength, abstractControl.value)) {
            return {
                minlength: {
                    valid: false
                }
            };
        }
        if (maxlengpoailed(this.maxlength, abstractControl.value)) {
            return {
                maxlength: {
                    valid: false
                }
            };
        }
    }
    // Função implementada do ControlValueAccessor
    writeValue(value) {
        this.writeValueModel(value);
        this.cd.markForCheck();
    }
    validateModel() {
        if (this.validatorChange) {
            this.validatorChange();
        }
    }
}
PoTextareaBaseComponent.ɵfac = function PoTextareaBaseComponent_Factory(t) { return new (t || PoTextareaBaseComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoTextareaBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTextareaBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], label: ["p-label", "label"], help: ["p-help", "help"], name: "name", optional: ["p-optional", "optional"], placeholder: ["p-placeholder", "placeholder"], disabled: ["p-disabled", "disabled"], readonly: ["p-readonly", "readonly"], required: ["p-required", "required"], minlength: ["p-minlength", "minlength"], maxlength: ["p-maxlength", "maxlength"], rows: ["p-rows", "rows"] }, outputs: { blur: "p-blur", enter: "p-enter", change: "p-change", changeModel: "p-change-model" } });
__decorate([
    InputBoolean()
], PoTextareaBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTextareaBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], name: [{
            type: Input,
            args: ['name']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], blur: [{
            type: Output,
            args: ['p-blur']
        }], enter: [{
            type: Output,
            args: ['p-enter']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], changeModel: [{
            type: Output,
            args: ['p-change-model']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], minlength: [{
            type: Input,
            args: ['p-minlength']
        }], maxlength: [{
            type: Input,
            args: ['p-maxlength']
        }], rows: [{
            type: Input,
            args: ['p-rows']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGV4dGFyZWEtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tdGV4dGFyZWEvcG8tdGV4dGFyZWEtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBRUgsTUFBTSxPQUFnQix1QkFBdUI7SUF3TTNDLFlBQW1CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBdk14Qzs7Ozs7Ozs7OztXQVVHO1FBQ29DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUEwQmxFOzs7Ozs7V0FNRztRQUNlLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVwRTs7Ozs7O1dBTUc7UUFDZ0IsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXRFOzs7Ozs7V0FNRztRQUNpQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEU7Ozs7OztXQU1HO1FBQ3VCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0UsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUczQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FB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QUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OEZBblJtQix1QkFBdUI7MEVBQXZCLHVCQUF1QjtBQVlKO0lBQWYsWUFBWSxFQUFFOzBEQUE0Qjt1RkFaOUMsdUJBQXVCO2NBRDVDLFNBQVM7b0VBYStCLFNBQVM7a0JBQS9DLEtBQUs7bUJBQUMsY0FBYztZQUdILEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUdBLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQWVRLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQVNELElBQUk7a0JBQXJCLE1BQU07bUJBQUMsUUFBUTtZQVNHLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQVNHLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQVNRLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCO1lBaUJJLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZTtZQWlCRyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFpQk0sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBbUJNLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQWlCTyxTQUFTO2tCQUFsQyxLQUFLO21CQUFDLGFBQWE7WUFnQk0sU0FBUztrQkFBbEMsS0FBSzttQkFBQyxhQUFhO1lBa0JDLElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuLCBjb252ZXJ0VG9JbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgbWF4bGVuZ3BvYWlsZWQsIG1pbmxlbmdwb2FpbGVkLCByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0ZSDDqSB1bSBjb21wb25lbnRlIGRlIGVudHJhZGEgZGUgZGFkb3MgcXVlIHBvc3NpYmlsaXRhIG8gcHJlZWNoaW1lbnRvIGNvbSBtw7psdGlwbGFzIGxpbmhhcy5cclxuICogw4kgcmVjb21lbmRhZG8gcGFyYSBvYnNlcnZhw6fDtWVzLCBkZXRhbGhhbWVudG9zIGUgb3V0cmFzIHNpdHVhw6fDtWVzIG9uZGUgbyB1c3XDoXJpbyBkZXZhIHByZWVuY2hlciBjb20gdW0gdGV4dG8uXHJcbiAqXHJcbiAqIEltcG9ydGFudGU6XHJcbiAqXHJcbiAqIC0gQSBwcm9wcmllZGFkZSBgbmFtZWAgw6kgb2JyaWdhdMOzcmlhIHBhcmEgcXVlIG8gZm9ybXVsw6FyaW8gZSBvIGBtb2RlbGAgZnVuY2lvbmVtIGNvcnJldGFtZW50ZS4gRG8gY29udHLDoXJpbywgb2NvcnJlcsOhIHVtIGVycm8gZGVcclxuICogX0FuZ3VsYXJfLCBvbmRlIHNlcsOhIG5lY2Vzc8OhcmlvIGluZm9ybWFyIG8gYXRyaWJ1dG8gYG5hbWVgIG91IG8gYXRyaWJ1dG8gYFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cImAsIHBvciBleGVtcGxvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHBvLXRleHRhcmVhXHJcbiAqICAgWyhuZ01vZGVsKV09XCJwZXNzb2Eubm9tZVwiXHJcbiAqICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxyXG4gKiA8L3BvLXRleHRhcmVhPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIyBBY2Vzc2liaWxpZGFkZSB0cmF0YWRhIG5vIGNvbXBvbmVudGVcclxuICogQWxndW1hcyBkaXJldHJpemVzIGRlIGFjZXNzaWJpbGlkYWRlIGrDoSBzw6NvIHRyYXRhZGFzIG5vIGNvbXBvbmVudGUsIGludGVybmFtZW50ZSwgZSBuw6NvIHBvZGVtIHNlciBhbHRlcmFkYXMuIFPDo28gZWxhczpcclxuICpcclxuICogLSBPIFRleHQgYXJlYSBmb2kgZGVzZW52b2x2aWRvIGNvbSB1c28gZGUgY29udHJvbGVzIHBhZHLDtWVzIEhUTUwsIG8gcXVlIHBlcm1pdGUgYSBpZGVudGlmaWNhw6fDo28gZG8gbWVzbW8gbmEgaW50ZXJmYWNlIHBvciB0ZWNub2xvZ2lhc1xyXG4gKiBhc3Npc3RpdmFzLiBbV0NBRyA0LjEuMjogTmFtZSwgUm9sZSwgVmFsdWVdKGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvV0NBRzIxL1VuZGVyc3RhbmRpbmcvbmFtZS1yb2xlLXZhbHVlKVxyXG4gKiAtIE8gZm9jbyDDqSB2aXPDrXZlbCBlIHBvc3N1aSB1bWEgZXNwZXNzdXJhIHN1cGVyaW9yIGEgMiBwaXhlbHMgQ1NTLCBuw6NvIGZpY2FuZG8gZXNjb25kaWRvIHBvciBvdXRyb3NcclxuICogZWxlbWVudG9zIGRhIHRlbGEuIFtXQ0FHIDIuNC4xMjogRm9jdXMgQXBwZWFyYW5jZSldKGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvV0NBRzIyL1VuZGVyc3RhbmRpbmcvZm9jdXMtYXBwZWFyYW5jZS1lbmhhbmNlZClcclxuICogLSBBIGlkZW50aWZpY2HDp8OjbyBkbyBlcnJvIGFjb250ZWNlIHRhbWLDqW0gYXRyYXbDqXMgZGEgbXVkYW7Dp2EgZGUgY29yIGRvIGNhbXBvLCBtYXMgdGFtYsOpbSBkZSB1bSDDrWNvbmVcclxuICoganVudG8gZGEgbWVuc2FnZW0uIFtXR0FHIDEuNC4xOiBVc2Ugb2YgQ29sb3IsIDMuMi40OiBDb25zaXN0ZW50IElkZW50aWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvV0FJL1dDQUcyMS9VbmRlcnN0YW5kaW5nL3VzZS1vZi1jb2xvcilcclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9UZXh0YXJlYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIGZvY28gbm8gZWxlbWVudG8gYW8gc2VyIGluaWNpYWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG1haXMgZGUgdW0gZWxlbWVudG8gc2VqYSBjb25maWd1cmFkbyBjb20gZXNzYSBwcm9wcmllZGFkZSwgYXBlbmFzIG8gw7psdGltbyBlbGVtZW50byBkZWNsYXJhZG8gY29tIGVsYSB0ZXLDoSBvIGZvY28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8tZm9jdXMnKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBMYWJlbCBkbyBjYW1wby4gKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqIFRleHRvIGRlIGFwb2lvIGRvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1oZWxwJykgaGVscD86IHN0cmluZztcclxuXHJcbiAgLyoqIE5vbWUgZSBJZCBkbyBjb21wb25lbnRlLiAqL1xyXG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBhIGluZGljYcOnw6NvIGRlIGNhbXBvIG9wY2lvbmFsIHNlcsOhIGV4aWJpZGEuXHJcbiAgICpcclxuICAgKiA+IE7Do28gc2Vyw6EgZXhpYmlkYSBhIGluZGljYcOnw6NvIHNlOlxyXG4gICAqIC0gTyBjYW1wbyBjb250ZXIgYHAtcmVxdWlyZWRgO1xyXG4gICAqIC0gTsOjbyBwb3NzdWlyIGBwLWhlbHBgIGUvb3UgYHAtbGFiZWxgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcHRpb25hbCcpIG9wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBzYWlyIGRvIGNhbXBvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtYmx1cicpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGVudHJhciBkbyBjYW1wby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWVudGVyJykgZW50ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGFsdGVyYXIgdmFsb3IgZSBkZWl4YXIgbyBjYW1wby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gYW8gYWx0ZXJhciB2YWxvciBkbyBtb2RlbC5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZS1tb2RlbCcpIGNoYW5nZU1vZGVsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX21heGxlbmd0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX21pbmxlbmd0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIF9yZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfcm93czogbnVtYmVyID0gMztcclxuXHJcbiAgcHJpdmF0ZSBtb2RlbExhc3RVcGRhdGU6IGFueTtcclxuICBwcml2YXRlIG9uQ2hhbmdlUHJvcGFnYXRlOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgdmFsaWRhdG9yQ2hhbmdlOiBhbnk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZDogYW55ID0gbnVsbDtcclxuXHJcbiAgLyoqIFBsYWNlaG9sZGVyLCBtZW5zYWdlbSBxdWUgYXBhcmVjZXLDoSBlbnF1YW50byBvIGNhbXBvIG7Do28gZXN0aXZlciBwcmVlbmNoaWRvLiAqL1xyXG4gIEBJbnB1dCgncC1wbGFjZWhvbGRlcicpIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBxdWUgbyBjYW1wbyBzZXLDoSBkZXNhYmlsaXRhZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvbnZlcnRUb0Jvb2xlYW4oZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBxdWUgbyBjYW1wbyBzZXLDoSBzb21lbnRlIGxlaXR1cmEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlYWRvbmx5Jykgc2V0IHJlYWRvbmx5KHJlYWRvbmx5OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZWFkb25seSA9IGNvbnZlcnRUb0Jvb2xlYW4ocmVhZG9ubHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBxdWUgbyBjYW1wbyBzZXLDoSBvYnJpZ2F0w7NyaW8uXHJcbiAgICpcclxuICAgKiA+IEVzdGEgcHJvcHJpZWRhZGUgw6kgZGVzY29uc2lkZXJhZGEgcXVhbmRvIG8gX2lucHV0XyBlc3TDoSBkZXNhYmlsaXRhZG8gYChwLWRpc2FibGVkKWAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlcXVpcmVkJykgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvbnZlcnRUb0Jvb2xlYW4ocmVxdWlyZWQpO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBhIHF1YW50aWRhZGUgbcOtbmltYSBkZSBjYXJhY3RlcmVzIHF1ZSBvIGNhbXBvIGFjZWl0YS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbWlubGVuZ3RoJykgc2V0IG1pbmxlbmd0aChtaW5sZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWlubGVuZ3RoID0gY29udmVydFRvSW50KG1pbmxlbmd0aCk7XHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwoKTtcclxuICB9XHJcblxyXG4gIGdldCBtaW5sZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIGEgcXVhbnRpZGFkZSBtw6F4aW1hIGRlIGNhcmFjdGVyZXMgcXVlIG8gY2FtcG8gYWNlaXRhLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1tYXhsZW5ndGgnKSBzZXQgbWF4bGVuZ3RoKG1heGxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9tYXhsZW5ndGggPSBjb252ZXJ0VG9JbnQobWF4bGVuZ3RoKTtcclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1heGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heGxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgYSBxdWFudGlkYWRlIGRlIGxpbmhhcyBxdWUgc2Vyw6NvIGV4aWJpZGFzLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDNgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJvd3MnKSBzZXQgcm93cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9yb3dzID0gaXNOYU4ocGFyc2VJbnQoPGFueT52YWx1ZSwgMTApKSB8fCB2YWx1ZSA8IDMgPyAzIDogcGFyc2VJbnQoPGFueT52YWx1ZSwgMTApO1xyXG4gIH1cclxuICBnZXQgcm93cygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBjYWxsT25DaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgLy8gUXVhbmRvIG8gaW5wdXQgbsOjbyBwb3NzdWkgdW0gZm9ybXVsw6FyaW8sIGVudMOjbyBlc3RhIGZ1bsOnw6NvIG7Do28gw6kgcmVnaXN0cmFkYVxyXG4gICAgaWYgKHRoaXMub25DaGFuZ2VQcm9wYWdhdGUpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlTW9kZWxFbWl0dGVyKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnRyb2xDaGFuZ2VNb2RlbEVtaXR0ZXIodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubW9kZWxMYXN0VXBkYXRlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZU1vZGVsLmVtaXQodmFsdWUpO1xyXG4gICAgICB0aGlzLm1vZGVsTGFzdFVwZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gVXNhZGEgcGFyYSBpbnRlcmNlcHRhciBvcyBlc3RhZG9zIGRlIGhhYmlsaXRhZG8gdmlhIGZvcm1zIGFwaVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDtWVzIGByZWdpc3Rlck9uQ2hhbmdlYCwgYHJlZ2lzdGVyT25Ub3VjaGVkYCBlIGByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlYCBpbXBsZW1lbnRhZGFzIHJlZmVyZW50ZXMgYW8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyB1c2FkYXMgcGFyYSBpbnRlcmNlcHRhciBhcyBtdWRhbsOnYXMgZSBuw6NvIGF0dWFsaXphciBhdXRvbWF0aWNhbWVudGUgbyBNb2RlbFxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZnVuYzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlID0gZnVuYztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmM6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmdW5jOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlID0gZnVuYztcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBpZiAocmVxdWlyZWRGYWlsZWQodGhpcy5yZXF1aXJlZCwgdGhpcy5kaXNhYmxlZCwgYWJzdHJhY3RDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pbmxlbmdwb2FpbGVkKHRoaXMubWlubGVuZ3RoLCBhYnN0cmFjdENvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWlubGVuZ3RoOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1heGxlbmdwb2FpbGVkKHRoaXMubWF4bGVuZ3RoLCBhYnN0cmFjdENvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMud3JpdGVWYWx1ZU1vZGVsKHZhbHVlKTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNb2RlbCgpIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRvckNoYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3Qgd3JpdGVWYWx1ZU1vZGVsKHZhbHVlOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==