import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';
import { requiredFailed, maxlengpoailed, minlengpoailed, patternFailed } from './../validators';
import { InputBoolean } from '../../../decorators';
import { PoMask } from './po-mask';
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
export class PoInputBaseComponent {
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
         * @description
         *
         * Mensagem que será apresentada quando o `pattern` ou a máscara não for satisfeita.
         *
         * > Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
         */
        this.errorPattern = '';
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
        this.onChangePropagate = null;
        this.onTouched = null;
        this.passedWriteValue = false;
        this._noAutocomplete = false;
        this._placeholder = '';
        /**
         * @description
         *
         * Se verdadeiro, desabilita o campo.
         *
         * @default `false`
         */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.disabled = false;
        /** Indica que o campo será somente leitura. */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.readonly = false;
        /**
         * @description
         *
         * Indica que o campo será obrigatório.
         *
         * > Esta propriedade é desconsiderada quando o input está desabilitado `(p-disabled)`.
         *
         * @default `false`
         */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.required = false;
        /** Se verdadeiro, o campo receberá um botão para ser limpo. */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.clean = false;
        /**
         * @description
         *
         * Indica uma máscara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
         * A máscara gera uma validação automática do campo, podendo esta ser substituída por um REGEX específico
         * através da propriedade p-pattern.
         * O campo será sinalizado e o formulário ficará inválido quando o valor informado estiver fora do padrão definido,
         * mesmo quando desabilitado.
         */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.mask = '';
        /**
         * @description
         *
         * Indica se o `model` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).
         *
         * @default `false`
         */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.maskFormatModel = false;
    }
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
    set noAutocomplete(value) {
        this._noAutocomplete = convertToBoolean(value);
    }
    get noAutocomplete() {
        return this._noAutocomplete;
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
    set setDisabled(disabled) {
        this.disabled = disabled === '' ? true : convertToBoolean(disabled);
        this.validateModel();
    }
    set setReadonly(readonly) {
        this.readonly = readonly === '' ? true : convertToBoolean(readonly);
    }
    set setRequired(required) {
        this.required = required === '' ? true : convertToBoolean(required);
        this.validateModel();
    }
    set setClean(clean) {
        this.clean = clean === '' ? true : convertToBoolean(clean);
    }
    set setPattern(pattern) {
        this.pattern = pattern;
        this.validateModel();
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade máxima de caracteres que o campo aceita.
     */
    set maxlength(value) {
        if (!isNaN(parseInt(value, 10))) {
            this._maxlength = parseInt(value, 10);
            this.validateModel();
        }
        else if (!value) {
            this._maxlength = undefined;
            this.validateModel();
        }
    }
    get maxlength() {
        return this._maxlength;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica a quantidade mínima de caracteres que o campo aceita.
     */
    set minlength(value) {
        if (!isNaN(parseInt(value, 10))) {
            this._minlength = parseInt(value, 10);
            this.validateModel();
        }
        else if (!value) {
            this._minlength = undefined;
            this.validateModel();
        }
    }
    get minlength() {
        return this._minlength;
    }
    set setMask(mask) {
        this.mask = mask;
        // Atualiza Máscara do Campo
        this.objMask = new PoMask(this.mask, this.maskFormatModel);
    }
    set setMaskFormatModel(maskFormatModel) {
        this.maskFormatModel = maskFormatModel === '' ? true : convertToBoolean(maskFormatModel);
        if (this.objMask instanceof PoMask) {
            this.objMask.formatModel = this.maskFormatModel;
            this.validateModel();
        }
    }
    callOnChange(value) {
        this.updateModel(value);
        this.controlChangeModelEmitter(value);
    }
    callUpdateModelWithTimeout(value) {
        setTimeout(() => this.updateModel(value));
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
        this.cd?.markForCheck();
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnChange(func) {
        this.onChangePropagate = func;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnTouched(func) {
        this.onTouched = func;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    updateModel(value) {
        // Quando o input não possui um formulário, então esta função não é registrada
        if (this.onChangePropagate) {
            this.onChangePropagate(value);
        }
    }
    validate(c) {
        if (requiredFailed(this.required, this.disabled, this.getScreenValue())) {
            return {
                required: {
                    valid: false
                }
            };
        }
        if (maxlengpoailed(this.maxlength, this.getScreenValue())) {
            return {
                maxlength: {
                    valid: false
                }
            };
        }
        if (minlengpoailed(this.minlength, this.getScreenValue())) {
            return {
                minlength: {
                    valid: false
                }
            };
        }
        if (patternFailed(this.pattern, c.value)) {
            this.validatePatternOnWriteValue(c.value);
            return {
                pattern: {
                    valid: false
                }
            };
        }
        return this.extraValidation(c);
    }
    // Função implementada do ControlValueAccessor
    writeValue(value) {
        this.writeValueModel(value);
        this.cd?.markForCheck();
    }
    validateModel() {
        if (this.validatorChange) {
            this.validatorChange();
        }
    }
    // utilizado para validar o pattern na inicializacao, fazendo dessa forma o campo fica sujo (dirty).
    validatePatternOnWriteValue(value) {
        if (value && this.passedWriteValue) {
            setTimeout(() => {
                this.updateModel(value);
            });
            this.passedWriteValue = false;
        }
    }
}
PoInputBaseComponent.ɵfac = function PoInputBaseComponent_Factory(t) { return new (t || PoInputBaseComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoInputBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoInputBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], icon: ["p-icon", "icon"], label: ["p-label", "label"], help: ["p-help", "help"], name: "name", errorPattern: ["p-error-pattern", "errorPattern"], optional: ["p-optional", "optional"], noAutocomplete: ["p-no-autocomplete", "noAutocomplete"], placeholder: ["p-placeholder", "placeholder"], setDisabled: ["p-disabled", "setDisabled"], setReadonly: ["p-readonly", "setReadonly"], setRequired: ["p-required", "setRequired"], setClean: ["p-clean", "setClean"], setPattern: ["p-pattern", "setPattern"], maxlength: ["p-maxlength", "maxlength"], minlength: ["p-minlength", "minlength"], setMask: ["p-mask", "setMask"], setMaskFormatModel: ["p-mask-format-model", "setMaskFormatModel"] }, outputs: { blur: "p-blur", enter: "p-enter", change: "p-change", changeModel: "p-change-model" } });
__decorate([
    InputBoolean()
], PoInputBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoInputBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], name: [{
            type: Input,
            args: ['name']
        }], errorPattern: [{
            type: Input,
            args: ['p-error-pattern']
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
        }], noAutocomplete: [{
            type: Input,
            args: ['p-no-autocomplete']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], setDisabled: [{
            type: Input,
            args: ['p-disabled']
        }], setReadonly: [{
            type: Input,
            args: ['p-readonly']
        }], setRequired: [{
            type: Input,
            args: ['p-required']
        }], setClean: [{
            type: Input,
            args: ['p-clean']
        }], setPattern: [{
            type: Input,
            args: ['p-pattern']
        }], maxlength: [{
            type: Input,
            args: ['p-maxlength']
        }], minlength: [{
            type: Input,
            args: ['p-minlength']
        }], setMask: [{
            type: Input,
            args: ['p-mask']
        }], setMaskFormatModel: [{
            type: Input,
            args: ['p-mask-format-model']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taW5wdXQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8taW5wdXQvcG8taW5wdXQtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWtDLE1BQU0sZUFBZSxDQUFDO0FBR3ZHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFbkM7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsTUFBTSxPQUFnQixvQkFBb0I7SUFnVHhDLFlBQW9CLEVBQXNCO1FBQXRCLE9BQUUsR0FBRixFQUFFLENBQW9CO1FBL1MxQzs7Ozs7Ozs7OztXQVVHO1FBQ29DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFzQ2xFOzs7Ozs7V0FNRztRQUN1QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQWlCckQ7Ozs7OztXQU1HO1FBQ2UsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9EOzs7Ozs7V0FNRztRQUNnQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakU7Ozs7OztXQU1HO1FBQ2lCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7Ozs7O1dBTUc7UUFDdUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk5RSxzQkFBaUIsR0FBUSxJQUFJLENBQUM7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QUFLO21CQUFDLFdBQVc7WUFhUSxTQUFTO2tCQUFsQyxLQUFLO21CQUFDLGFBQWE7WUF1Qk0sU0FBUztrQkFBbEMsS0FBSzttQkFBQyxhQUFhO1lBMkJDLE9BQU87a0JBQTNCLEtBQUs7bUJBQUMsUUFBUTtZQWdCbUIsa0JBQWtCO2tCQUFuRCxLQUFLO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCwgbWF4bGVuZ3BvYWlsZWQsIG1pbmxlbmdwb2FpbGVkLCBwYXR0ZXJuRmFpbGVkIH0gZnJvbSAnLi8uLi92YWxpZGF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IFBvTWFzayB9IGZyb20gJy4vcG8tbWFzayc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGUgw6kgdW0gY29tcG9uZW50ZSBiYXNlYWRvIGVtIGlucHV0LCBjb20gdsOhcmlhcyBwcm9wcmllZGFkZXMgZG8gaW5wdXQgbmF0aXZvIGUgb3V0cmFzXHJcbiAqIHByb3ByaWVkYWRlcyBleHRyYXMgY29tbzogbcOhc2NhcmEsIHBhdHRlcm4sIG1lbnNhZ2VtIGRlIGVycm8gZSBldGMuXHJcbiAqIFZvY8OqIGRldmUgaW5mb3JtYXIgYSB2YXJpw6F2ZWwgcXVlIGNvbnTDqW0gbyB2YWxvciBjb21vIFsobmdNb2RlbCldPVwidmFyaWF2ZWxcIiwgcGFyYSBxdWUgb1xyXG4gKiBpbnB1dCByZWNlYmEgbyB2YWxvciBkYSB2YXJpw6F2ZWwgZSBwYXJhIHF1ZSBlbGEgcmVjZWJhIGFzIGFsdGVyYcOnw7VlcyBkbyB2YWxvciAodHdvLXdheS1kYXRhYmluZGluZykuXHJcbiAqIEEgcHJvcHJpZWRhZGUgbmFtZSDDqSBvYnJpZ2F0w7NyaWEgcGFyYSBxdWUgbyBmb3JtdWzDoXJpbyBlIG8gbW9kZWwgZnVuY2lvbmVtIGNvcnJldGFtZW50ZS5cclxuICpcclxuICogSW1wb3J0YW50ZTpcclxuICpcclxuICogLSBDYXNvIG8gaW5wdXQgdGVuaGEgdW0gWyhuZ01vZGVsKV0gc2VtIG8gYXRyaWJ1dG8gbmFtZSwgb2NvcnJlcsOhIHVtIGVycm8gZGUgYW5ndWxhci5cclxuICogRW50w6NvIHZvY8OqIHByZWNpc2EgaW5mb3JtYXIgbyBhdHJpYnV0byBuYW1lIG91IG8gYXRyaWJ1dG8gW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiLlxyXG4gKiBFeGVtcGxvOiBbKG5nTW9kZWwpXT1cInBlc3NvYS5ub21lXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiLlxyXG4gKlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0lucHV0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBcGxpY2EgZm9jbyBubyBlbGVtZW50byBhbyBzZXIgaW5pY2lhZG8uXHJcbiAgICpcclxuICAgKiA+IENhc28gbWFpcyBkZSB1bSBlbGVtZW50byBzZWphIGNvbmZpZ3VyYWRvIGNvbSBlc3NhIHByb3ByaWVkYWRlLCBhcGVuYXMgbyDDumx0aW1vIGVsZW1lbnRvIGRlY2xhcmFkbyBjb20gZWxhIHRlcsOhIG8gZm9jby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1mb2N1cycpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBvIMOtY29uZSBxdWUgc2Vyw6EgZXhpYmlkbyBubyBpbsOtY2lvIGRvIGNhbXBvLlxyXG4gICAqXHJcbiAgICogw4kgcG9zc8OtdmVsIHVzYXIgcXVhbHF1ZXIgdW0gZG9zIMOtY29uZXMgZGEgW0JpYmxpb3RlY2EgZGUgw61jb25lc10oL2d1aWRlcy9pY29ucykuIGNvbmZvcm1lIGV4ZW1wbG8gYWJhaXhvOlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1pbnB1dCBwLWljb249XCJwby1pY29uLXVzZXJcIiBwLWxhYmVsPVwiUE8gaW5wdXRcIj48L3BvLWlucHV0PlxyXG4gICAqIGBgYFxyXG4gICAqIFRhbWLDqW0gw6kgcG9zc8OtdmVsIHV0aWxpemFyIG91dHJhcyBmb250ZXMgZGUgw61jb25lcywgcG9yIGV4ZW1wbG8gYSBiaWJsaW90ZWNhICpGb250IEF3ZXNvbWUqLCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKiBgYGBcclxuICAgKiA8cG8taW5wdXQgcC1pY29uPVwiZmEgZmEtcG9kY2FzdFwiIHAtbGFiZWw9XCJQTyBpbnB1dFwiPjwvcG8taW5wdXQ+XHJcbiAgICogYGBgXHJcbiAgICogT3V0cmEgb3DDp8OjbyBzZXJpYSBhIGN1c3RvbWl6YcOnw6NvIGRvIMOtY29uZSBhdHJhdsOpcyBkbyBgVGVtcGxhdGVSZWZgLCBjb25mb3JtZSBleGVtcGxvIGFiYWl4bzpcclxuICAgKiBgYGBcclxuICAgKiA8cG8taW5wdXQgW3AtaWNvbl09XCJ0ZW1wbGF0ZVwiIHAtbGFiZWw9XCJpbnB1dCB0ZW1wbGF0ZSBpb25pY1wiPjwvcG8taW5wdXQ+XHJcbiAgICpcclxuICAgKiA8bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxyXG4gICAqICA8aW9uLWljb24gc3R5bGU9XCJmb250LXNpemU6IGluaGVyaXRcIiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxyXG4gICAqIDwvbmctdGVtcGxhdGU+XHJcbiAgICogYGBgXHJcbiAgICogPiBQYXJhIG8gw61jb25lIGVucXVhZHJhciBjb3JyZXRhbWVudGUsIGRldmUtc2UgdXRpbGl6YXIgYGZvbnQtc2l6ZTogaW5oZXJpdGAgY2FzbyBvIMOtY29uZSB1dGlsaXphZG8gbsOjbyBhcGxpcXVlLW8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWljb24nKSBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIC8qKiBSw7N0dWxvIGRvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogVGV4dG8gZGUgYXBvaW8gZG8gY2FtcG8uICovXHJcbiAgQElucHV0KCdwLWhlbHAnKSBoZWxwPzogc3RyaW5nO1xyXG5cclxuICAvKiogTm9tZSBlIGlkZW50aWZpY2Fkb3IgZG8gY2FtcG8uICovXHJcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE1lbnNhZ2VtIHF1ZSBzZXLDoSBhcHJlc2VudGFkYSBxdWFuZG8gbyBgcGF0dGVybmAgb3UgYSBtw6FzY2FyYSBuw6NvIGZvciBzYXRpc2ZlaXRhLlxyXG4gICAqXHJcbiAgICogPiBFc3RhIG1lbnNhZ2VtIG7Do28gw6kgYXByZXNlbnRhZGEgcXVhbmRvIG8gY2FtcG8gZXN0aXZlciB2YXppbywgbWVzbW8gcXVlIGVsZSBzZWphIHJlcXVlcmlkby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtZXJyb3ItcGF0dGVybicpIGVycm9yUGF0dGVybj86IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIGEgaW5kaWNhw6fDo28gZGUgY2FtcG8gb3BjaW9uYWwgc2Vyw6EgZXhpYmlkYS5cclxuICAgKlxyXG4gICAqID4gTsOjbyBzZXLDoSBleGliaWRhIGEgaW5kaWNhw6fDo28gc2U6XHJcbiAgICogLSBPIGNhbXBvIGNvbnRlciBgcC1yZXF1aXJlZGA7XHJcbiAgICogLSBOw6NvIHBvc3N1aXIgYHAtaGVscGAgZS9vdSBgcC1sYWJlbGAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbmFsJykgb3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIHNhaXIgZG8gY2FtcG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1ibHVyJykgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGVudHJhciBkbyBjYW1wby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWVudGVyJykgZW50ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBhbHRlcmFyIHZhbG9yIGUgZGVpeGFyIG8gY2FtcG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBhbHRlcmFyIHZhbG9yIGRvIG1vZGVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlLW1vZGVsJykgY2hhbmdlTW9kZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIG9uQ2hhbmdlUHJvcGFnYXRlOiBhbnkgPSBudWxsO1xyXG4gIG9iak1hc2s6IGFueTtcclxuICBtb2RlbExhc3RVcGRhdGU6IGFueTtcclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcm90ZWN0ZWQgcGFzc2VkV3JpdGVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCB2YWxpZGF0b3JDaGFuZ2U6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbWF4bGVuZ3RoPzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX21pbmxlbmd0aD86IG51bWJlcjtcclxuICBwcml2YXRlIF9ub0F1dG9jb21wbGV0ZT86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcj86IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgcHJvcHJpZWRhZGUgbmF0aXZhIGBhdXRvY29tcGxldGVgIGRvIGNhbXBvIGNvbW8gYG9mZmAuXHJcbiAgICpcclxuICAgKiA+IE5vIGNvbXBvbmVudGUgYHBvLXBhc3N3b3JkYCBzZXLDoSBkZWZpbmlkbyBjb21vIGBuZXctcGFzc3dvcmRgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1uby1hdXRvY29tcGxldGUnKSBzZXQgbm9BdXRvY29tcGxldGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX25vQXV0b2NvbXBsZXRlID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbm9BdXRvY29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9BdXRvY29tcGxldGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTWVuc2FnZW0gcXVlIGFwYXJlY2Vyw6EgZW5xdWFudG8gbyBjYW1wbyBuw6NvIGVzdGl2ZXIgcHJlZW5jaGlkby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICcnXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXBsYWNlaG9sZGVyJykgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWUgfHwgJyc7XHJcbiAgfVxyXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogU2UgdmVyZGFkZWlybywgZGVzYWJpbGl0YSBvIGNhbXBvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgc2V0IHNldERpc2FibGVkKGRpc2FibGVkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZCA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbihkaXNhYmxlZCk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIHNvbWVudGUgbGVpdHVyYS4gKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHJlYWRvbmx5PzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1yZWFkb25seScpIHNldCBzZXRSZWFkb25seShyZWFkb25seTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlYWRvbmx5ID0gcmVhZG9ubHkgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4ocmVhZG9ubHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgcXVlIG8gY2FtcG8gc2Vyw6Egb2JyaWdhdMOzcmlvLlxyXG4gICAqXHJcbiAgICogPiBFc3RhIHByb3ByaWVkYWRlIMOpIGRlc2NvbnNpZGVyYWRhIHF1YW5kbyBvIGlucHV0IGVzdMOhIGRlc2FiaWxpdGFkbyBgKHAtZGlzYWJsZWQpYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHJlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1yZXF1aXJlZCcpIHNldCBzZXRSZXF1aXJlZChyZXF1aXJlZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4ocmVxdWlyZWQpO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNlIHZlcmRhZGVpcm8sIG8gY2FtcG8gcmVjZWJlcsOhIHVtIGJvdMOjbyBwYXJhIHNlciBsaW1wby4gKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIGNsZWFuPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1jbGVhbicpIHNldCBzZXRDbGVhbihjbGVhbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNsZWFuID0gY2xlYW4gPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4oY2xlYW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFeHByZXNzw6NvIHJlZ3VsYXIgcGFyYSB2YWxpZGFyIG8gY2FtcG8uXHJcbiAgICogUXVhbmRvIG8gY2FtcG8gcG9zc3VpciB1bWEgbcOhc2NhcmEgYChwLW1hc2spYCBzZXLDoSBhdXRvbWF0aWNhbWVudGUgdmFsaWRhZG8gcG9yIGVsYSwgcG9yw6ltXHJcbiAgICogw6kgcG9zc8OtdmVsIGRlZmluaXIgdW0gcC1wYXR0ZXJuIHBhcmEgc3Vic3RpdHVpciBhIHZhbGlkYcOnw6NvIGRhIG3DoXNjYXJhLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgcGF0dGVybj86IHN0cmluZztcclxuICBASW5wdXQoJ3AtcGF0dGVybicpIHNldCBzZXRQYXR0ZXJuKHBhdHRlcm46IHN0cmluZykge1xyXG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgYSBxdWFudGlkYWRlIG3DoXhpbWEgZGUgY2FyYWN0ZXJlcyBxdWUgbyBjYW1wbyBhY2VpdGEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW1heGxlbmd0aCcpIHNldCBtYXhsZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKCFpc05hTihwYXJzZUludCg8YW55PnZhbHVlLCAxMCkpKSB7XHJcbiAgICAgIHRoaXMuX21heGxlbmd0aCA9IHBhcnNlSW50KDxhbnk+dmFsdWUsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gICAgfSBlbHNlIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5fbWF4bGVuZ3RoID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4bGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heGxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgYSBxdWFudGlkYWRlIG3DrW5pbWEgZGUgY2FyYWN0ZXJlcyBxdWUgbyBjYW1wbyBhY2VpdGEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW1pbmxlbmd0aCcpIHNldCBtaW5sZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKCFpc05hTihwYXJzZUludCg8YW55PnZhbHVlLCAxMCkpKSB7XHJcbiAgICAgIHRoaXMuX21pbmxlbmd0aCA9IHBhcnNlSW50KDxhbnk+dmFsdWUsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gICAgfSBlbHNlIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5fbWlubGVuZ3RoID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWlubGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHVtYSBtw6FzY2FyYSBwYXJhIG8gY2FtcG8uIEV4ZW1wbG9zOiAoKzk5KSAoOTkpIDk5OTk5Py05OTk5LCA5OTk5OS05OTksIDk5OS45OTkuOTk5LTk5LlxyXG4gICAqIEEgbcOhc2NhcmEgZ2VyYSB1bWEgdmFsaWRhw6fDo28gYXV0b23DoXRpY2EgZG8gY2FtcG8sIHBvZGVuZG8gZXN0YSBzZXIgc3Vic3RpdHXDrWRhIHBvciB1bSBSRUdFWCBlc3BlY8OtZmljb1xyXG4gICAqIGF0cmF2w6lzIGRhIHByb3ByaWVkYWRlIHAtcGF0dGVybi5cclxuICAgKiBPIGNhbXBvIHNlcsOhIHNpbmFsaXphZG8gZSBvIGZvcm11bMOhcmlvIGZpY2Fyw6EgaW52w6FsaWRvIHF1YW5kbyBvIHZhbG9yIGluZm9ybWFkbyBlc3RpdmVyIGZvcmEgZG8gcGFkcsOjbyBkZWZpbmlkbyxcclxuICAgKiBtZXNtbyBxdWFuZG8gZGVzYWJpbGl0YWRvLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgbWFzaz86IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgncC1tYXNrJykgc2V0IHNldE1hc2sobWFzazogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xyXG5cclxuICAgIC8vIEF0dWFsaXphIE3DoXNjYXJhIGRvIENhbXBvXHJcbiAgICB0aGlzLm9iak1hc2sgPSBuZXcgUG9NYXNrKHRoaXMubWFzaywgdGhpcy5tYXNrRm9ybWF0TW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2Egc2UgbyBgbW9kZWxgIHJlY2ViZXLDoSBvIHZhbG9yIGZvcm1hdGFkbyBwZWxhIG3DoXNjYXJhIG91IGFwZW5hcyBvIHZhbG9yIHB1cm8gKHNlbSBmb3JtYXRhw6fDo28pLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgbWFza0Zvcm1hdE1vZGVsPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1tYXNrLWZvcm1hdC1tb2RlbCcpIHNldCBzZXRNYXNrRm9ybWF0TW9kZWwobWFza0Zvcm1hdE1vZGVsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWFza0Zvcm1hdE1vZGVsID0gbWFza0Zvcm1hdE1vZGVsID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKG1hc2tGb3JtYXRNb2RlbCk7XHJcblxyXG4gICAgaWYgKHRoaXMub2JqTWFzayBpbnN0YW5jZW9mIFBvTWFzaykge1xyXG4gICAgICB0aGlzLm9iak1hc2suZm9ybWF0TW9kZWwgPSB0aGlzLm1hc2tGb3JtYXRNb2RlbDtcclxuXHJcbiAgICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZD86IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBjYWxsT25DaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy51cGRhdGVNb2RlbCh2YWx1ZSk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlTW9kZWxFbWl0dGVyKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNhbGxVcGRhdGVNb2RlbFdpdGhUaW1lb3V0KHZhbHVlKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlTW9kZWwodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGNvbnRyb2xDaGFuZ2VNb2RlbEVtaXR0ZXIodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubW9kZWxMYXN0VXBkYXRlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZU1vZGVsLmVtaXQodmFsdWUpO1xyXG4gICAgICB0aGlzLm1vZGVsTGFzdFVwZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gVXNhZGEgcGFyYSBpbnRlcmNlcHRhciBvcyBlc3RhZG9zIGRlIGhhYmlsaXRhZG8gdmlhIGZvcm1zIGFwaVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkPy5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIFVzYWRhIHBhcmEgaW50ZXJjZXB0YXIgYXMgbXVkYW7Dp2FzIGUgbsOjbyBhdHVhbGl6YXIgYXV0b21hdGljYW1lbnRlIG8gTW9kZWxcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZ1bmM6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0ZSA9IGZ1bmM7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIGFzIG11ZGFuw6dhcyBlIG7Do28gYXR1YWxpemFyIGF1dG9tYXRpY2FtZW50ZSBvIE1vZGVsXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZnVuYzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmM7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRvckNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTW9kZWwodmFsdWU6IGFueSkge1xyXG4gICAgLy8gUXVhbmRvIG8gaW5wdXQgbsOjbyBwb3NzdWkgdW0gZm9ybXVsw6FyaW8sIGVudMOjbyBlc3RhIGZ1bsOnw6NvIG7Do28gw6kgcmVnaXN0cmFkYVxyXG4gICAgaWYgKHRoaXMub25DaGFuZ2VQcm9wYWdhdGUpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIGlmIChyZXF1aXJlZEZhaWxlZCh0aGlzLnJlcXVpcmVkLCB0aGlzLmRpc2FibGVkLCB0aGlzLmdldFNjcmVlblZhbHVlKCkpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4bGVuZ3BvYWlsZWQodGhpcy5tYXhsZW5ndGgsIHRoaXMuZ2V0U2NyZWVuVmFsdWUoKSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYXhsZW5ndGg6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWlubGVuZ3BvYWlsZWQodGhpcy5taW5sZW5ndGgsIHRoaXMuZ2V0U2NyZWVuVmFsdWUoKSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtaW5sZW5ndGg6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF0dGVybkZhaWxlZCh0aGlzLnBhdHRlcm4sIGMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVQYXR0ZXJuT25Xcml0ZVZhbHVlKGMudmFsdWUpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5leHRyYVZhbGlkYXRpb24oYyk7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMud3JpdGVWYWx1ZU1vZGVsKHZhbHVlKTtcclxuICAgIHRoaXMuY2Q/Lm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlTW9kZWwoKSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0b3JDaGFuZ2UpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHV0aWxpemFkbyBwYXJhIHZhbGlkYXIgbyBwYXR0ZXJuIG5hIGluaWNpYWxpemFjYW8sIGZhemVuZG8gZGVzc2EgZm9ybWEgbyBjYW1wbyBmaWNhIHN1am8gKGRpcnR5KS5cclxuICBwcml2YXRlIHZhbGlkYXRlUGF0dGVybk9uV3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5wYXNzZWRXcml0ZVZhbHVlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucGFzc2VkV3JpdGVWYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIGF0cmlidWkgZm9jbyBhbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogUGFyYSB1dGlsaXrDoS1sYSDDqSBuZWNlc3PDoXJpbyB0ZXIgYSBpbnN0w6JuY2lhIGRvIGNvbXBvbmVudGUgbm8gRE9NLCBwb2RlbmRvIHNlciB1dGlsaXphZG8gbyBWaWV3Q2hpbGQgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBpbXBvcnQgeyBQb05vbWVEb0NvbXBvbmVudGVDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9Ob21lRG9Db21wb25lbnRlQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBub21lRG9Db21wb25lbnRlOiBQb05vbWVEb0NvbXBvbmVudGVDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c0NvbXBvbmVudCgpIHtcclxuICAgKiAgIHRoaXMubm9tZURvQ29tcG9uZW50ZS5mb2N1cygpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBhYnN0cmFjdCBmb2N1cygpOiB2b2lkO1xyXG5cclxuICAvLyBNw6l0b2RvIHF1ZSByZWNlYmVyw6EgbyB2YWxvciBkbyBtb2RlbFxyXG4gIGFic3RyYWN0IHdyaXRlVmFsdWVNb2RlbCh2YWx1ZTogYW55KTogdm9pZDtcclxuXHJcbiAgLy8gVmFsaWRhw6fDtWVzIGRvIGNhbXBvXHJcbiAgYWJzdHJhY3QgZXh0cmFWYWxpZGF0aW9uKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcblxyXG4gIC8vIERldmUgcmV0b3JuYXIgbyB2YWxvciBkbyBjYW1wb1xyXG4gIGFic3RyYWN0IGdldFNjcmVlblZhbHVlKCk6IHN0cmluZztcclxufVxyXG4iXX0=