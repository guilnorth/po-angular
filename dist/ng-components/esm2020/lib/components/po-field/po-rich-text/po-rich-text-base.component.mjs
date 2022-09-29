import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';
import { requiredFailed } from '../validators';
import { InputBoolean } from '../../../decorators';
import * as i0 from "@angular/core";
import * as i1 from "./po-rich-text.service";
/**
 * @description
 *
 * O componente `po-rich-text` é um editor de textos enriquecidos.
 *
 * Para edição de texto simples sem formatação recomenda-se o uso do componente [**po-textarea**](/documentation/po-textarea).
 *
 * > No navegador Internet Explorer não é possível alterar a cor do texto.
 */
export class PoRichTextBaseComponent {
    constructor(richTextService) {
        this.richTextService = richTextService;
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
         * Define se o alinhamento de texto será desabilitado.
         *
         * @default `false`
         */
        this.disabledTextAlign = false;
        /**
         * @description
         *
         * Mensagem que será apresentada quando a propriedade required estiver habilitada e o campo for limpo após algo ser digitado.
         */
        this.errorMessage = '';
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao deixar o campo e que recebe como parâmetro o valor alterado.
         */
        this.change = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao modificar valor do model e que recebe como parâmetro o valor alterado.
         */
        this.changeModel = new EventEmitter();
        this.invalid = false;
        this.onChangeModel = null;
        // eslint-disable-next-line
        this.onTouched = null;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da área de edição de texto.
     *
     * > Altura mínima do componente é `94` e a altura máxima é `262`.
     */
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    /**
     * @optional
     *
     * @description
     *
     * Mensagem que aparecerá enquanto o campo não estiver preenchido.
     *
     * @default ''
     */
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
     * Indica que o campo será somente leitura.
     *
     * @default `false`
     */
    set readonly(value) {
        this._readonly = convertToBoolean(value);
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
     * @default `false`
     */
    set required(value) {
        this._required = convertToBoolean(value);
        this.validateModel(this.value);
    }
    get required() {
        return this._required;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnChange(func) {
        this.onChangeModel = func;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnTouched(func) {
        this.onTouched = func;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    validate(abstractControl) {
        if (requiredFailed(this.required, false, abstractControl.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
    }
    writeValue(value) {
        this.value = value;
        this.richTextService.emitModel(value);
    }
    // Executa a função onChange
    updateModel(value) {
        // Quando o rich-text não possui um formulário, então esta função não é registrada
        if (this.onChangeModel) {
            this.onChangeModel(value);
        }
    }
    validateModel(value) {
        if (this.validatorChange) {
            this.validatorChange(value);
        }
    }
}
PoRichTextBaseComponent.ɵfac = function PoRichTextBaseComponent_Factory(t) { return new (t || PoRichTextBaseComponent)(i0.ɵɵdirectiveInject(i1.PoRichTextService)); };
PoRichTextBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoRichTextBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], disabledTextAlign: ["p-disabled-text-align", "disabledTextAlign"], errorMessage: ["p-error-message", "errorMessage"], help: ["p-help", "help"], label: ["p-label", "label"], name: "name", optional: ["p-optional", "optional"], height: ["p-height", "height"], placeholder: ["p-placeholder", "placeholder"], readonly: ["p-readonly", "readonly"], required: ["p-required", "required"] }, outputs: { change: "p-change", changeModel: "p-change-model" } });
__decorate([
    InputBoolean()
], PoRichTextBaseComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], PoRichTextBaseComponent.prototype, "disabledTextAlign", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoRichTextService }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], disabledTextAlign: [{
            type: Input,
            args: ['p-disabled-text-align']
        }], errorMessage: [{
            type: Input,
            args: ['p-error-message']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], name: [{
            type: Input,
            args: ['name']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], changeModel: [{
            type: Output,
            args: ['p-change-model']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], required: [{
            type: Input,
            args: ['p-required']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXJpY2gtdGV4dC9wby1yaWNoLXRleHQtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUduRDs7Ozs7Ozs7R0FRRztBQUVILE1BQU0sT0FBZ0IsdUJBQXVCO0lBeUszQyxZQUFvQixlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUF4S3REOzs7Ozs7Ozs7O1dBVUc7UUFDb0MsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVsRTs7Ozs7Ozs7V0FRRztRQUM2QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkY7Ozs7V0FJRztRQUN1QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQXNDckQ7Ozs7OztXQU1HO1FBQ2lCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7Ozs7O1dBTUc7UUFDdUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBUzFCLDJCQUEyQjtRQUNqQixjQUFTLEdBQVEsSUFBSSxDQUFDO0lBd0V5QixDQUFDO0lBdEUxRDs7Ozs7Ozs7T0FRRztJQUNILElBQXVCLE1BQU0sQ0FBQyxNQUFjO1FBQzFDLElB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QyxVQUFVO1lBU1EsV0FBVztrQkFBcEMsTUFBTTttQkFBQyxnQkFBZ0I7WUF3QkQsTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVO1lBaUJXLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZTtZQWlCRyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFpQk0sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgUG9SaWNoVGV4dFNlcnZpY2UgfSBmcm9tICcuL3BvLXJpY2gtdGV4dC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1yaWNoLXRleHRgIMOpIHVtIGVkaXRvciBkZSB0ZXh0b3MgZW5yaXF1ZWNpZG9zLlxyXG4gKlxyXG4gKiBQYXJhIGVkacOnw6NvIGRlIHRleHRvIHNpbXBsZXMgc2VtIGZvcm1hdGHDp8OjbyByZWNvbWVuZGEtc2UgbyB1c28gZG8gY29tcG9uZW50ZSBbKipwby10ZXh0YXJlYSoqXSgvZG9jdW1lbnRhdGlvbi9wby10ZXh0YXJlYSkuXHJcbiAqXHJcbiAqID4gTm8gbmF2ZWdhZG9yIEludGVybmV0IEV4cGxvcmVyIG7Do28gw6kgcG9zc8OtdmVsIGFsdGVyYXIgYSBjb3IgZG8gdGV4dG8uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvUmljaFRleHRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEFwbGljYSBmb2NvIG5vIGVsZW1lbnRvIGFvIHNlciBpbmljaWFkby5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBtYWlzIGRlIHVtIGVsZW1lbnRvIHNlamEgY29uZmlndXJhZG8gY29tIGVzc2EgcHJvcHJpZWRhZGUsIGFwZW5hcyBvIMO6bHRpbW8gZWxlbWVudG8gZGVjbGFyYWRvIGNvbSBlbGEgdGVyw6EgbyBmb2NvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hdXRvLWZvY3VzJykgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIG8gYWxpbmhhbWVudG8gZGUgdGV4dG8gc2Vyw6EgZGVzYWJpbGl0YWRvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZC10ZXh0LWFsaWduJykgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkVGV4dEFsaWduOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTWVuc2FnZW0gcXVlIHNlcsOhIGFwcmVzZW50YWRhIHF1YW5kbyBhIHByb3ByaWVkYWRlIHJlcXVpcmVkIGVzdGl2ZXIgaGFiaWxpdGFkYSBlIG8gY2FtcG8gZm9yIGxpbXBvIGFww7NzIGFsZ28gc2VyIGRpZ2l0YWRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1lcnJvci1tZXNzYWdlJykgZXJyb3JNZXNzYWdlPzogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBUZXh0byBkZSBhcG9pbyBkbyBjYW1wby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaGVscCcpIGhlbHA/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBSw7N0dWxvIGRvIGNhbXBvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogTm9tZSBlIGlkZW50aWZpY2Fkb3IgZG8gY2FtcG8uICovXHJcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIGEgaW5kaWNhw6fDo28gZGUgY2FtcG8gb3BjaW9uYWwgc2Vyw6EgZXhpYmlkYS5cclxuICAgKlxyXG4gICAqID4gTsOjbyBzZXLDoSBleGliaWRhIGEgaW5kaWNhw6fDo28gc2U6XHJcbiAgICogLSBPIGNhbXBvIGNvbnRlciBgcC1yZXF1aXJlZGA7XHJcbiAgICogLSBOw6NvIHBvc3N1aXIgYHAtaGVscGAgZS9vdSBgcC1sYWJlbGAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbmFsJykgb3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGRlaXhhciBvIGNhbXBvIGUgcXVlIHJlY2ViZSBjb21vIHBhcsOibWV0cm8gbyB2YWxvciBhbHRlcmFkby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIG1vZGlmaWNhciB2YWxvciBkbyBtb2RlbCBlIHF1ZSByZWNlYmUgY29tbyBwYXLDom1ldHJvIG8gdmFsb3IgYWx0ZXJhZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtbW9kZWwnKSBjaGFuZ2VNb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBvbkNoYW5nZU1vZGVsOiBhbnkgPSBudWxsO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2hlaWdodD86IG51bWJlcjtcclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3JlYWRvbmx5OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHZhbGlkYXRvckNoYW5nZTogYW55O1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIHByb3RlY3RlZCBvblRvdWNoZWQ6IGFueSA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBhbHR1cmEgZGEgw6FyZWEgZGUgZWRpw6fDo28gZGUgdGV4dG8uXHJcbiAgICpcclxuICAgKiA+IEFsdHVyYSBtw61uaW1hIGRvIGNvbXBvbmVudGUgw6kgYDk0YCBlIGEgYWx0dXJhIG3DoXhpbWEgw6kgYDI2MmAuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhlaWdodCcpIHNldCBoZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE1lbnNhZ2VtIHF1ZSBhcGFyZWNlcsOhIGVucXVhbnRvIG8gY2FtcG8gbsOjbyBlc3RpdmVyIHByZWVuY2hpZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCAnJ1xyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wbGFjZWhvbGRlcicpIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBxdWUgbyBjYW1wbyBzZXLDoSBzb21lbnRlIGxlaXR1cmEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlYWRvbmx5Jykgc2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZWFkb25seSA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlYWRvbmx5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBxdWUgbyBjYW1wbyBzZXLDoSBvYnJpZ2F0w7NyaW8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlcXVpcmVkJykgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCByZXF1aXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmljaFRleHRTZXJ2aWNlOiBQb1JpY2hUZXh0U2VydmljZSkge31cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gVXNhZGEgcGFyYSBpbnRlcmNlcHRhciBhcyBtdWRhbsOnYXMgZSBuw6NvIGF0dWFsaXphciBhdXRvbWF0aWNhbWVudGUgbyBNb2RlbFxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZnVuYzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlTW9kZWwgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gVXNhZGEgcGFyYSBpbnRlcmNlcHRhciBhcyBtdWRhbsOnYXMgZSBuw6NvIGF0dWFsaXphciBhdXRvbWF0aWNhbWVudGUgbyBNb2RlbFxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmM6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBpZiAocmVxdWlyZWRGYWlsZWQodGhpcy5yZXF1aXJlZCwgZmFsc2UsIGFic3RyYWN0Q29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5yaWNoVGV4dFNlcnZpY2UuZW1pdE1vZGVsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIEV4ZWN1dGEgYSBmdW7Dp8OjbyBvbkNoYW5nZVxyXG4gIHByb3RlY3RlZCB1cGRhdGVNb2RlbCh2YWx1ZTogYW55KSB7XHJcbiAgICAvLyBRdWFuZG8gbyByaWNoLXRleHQgbsOjbyBwb3NzdWkgdW0gZm9ybXVsw6FyaW8sIGVudMOjbyBlc3RhIGZ1bsOnw6NvIG7Do28gw6kgcmVnaXN0cmFkYVxyXG4gICAgaWYgKHRoaXMub25DaGFuZ2VNb2RlbCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlTW9kZWwodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlTW9kZWwodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdG9yQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19