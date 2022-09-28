import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { minFailed, maxFailed, maxlengpoailed } from '../validators';
import { convertToInt } from '../../../utils/util';
import { PoInputBaseComponent } from '../po-input/po-input-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../po-clean/po-clean.component";
import * as i4 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i5 from "../po-field-container/po-field-container.component";
import * as i6 from "../../po-icon/po-icon.component";
const _c0 = ["inp"];
function PoDecimalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "po-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-field-icon-disabled", ctx_r0.disabled);
    i0.ɵɵproperty("p-icon", ctx_r0.icon);
} }
function PoDecimalComponent_po_clean_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 10);
    i0.ɵɵlistener("p-change-event", function PoDecimalComponent_po_clean_6_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-element-ref", ctx_r2.inputEl);
} }
const poDecimalDefaultDecimalsLength = 2;
const poDecimalDefaultThousandMaxlength = 13;
const poDecimalMaxDecimalsLength = 15;
const poDecimalTotalLengthLimit = 16;
/**
 *
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * <br>
 * - O `po-decimal` é um *input* específico para receber apenas números decimais, por isso recebe as seguintes características:
 *  + Aceita apenas números;
 *  + Utiliza ',' como separador de decimal;
 *  + Utiliza '.' para separação de milhar;
 *  + É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.
 *
 * > **Importante:**
 * Atualmente o JavaScript limita-se a um conjunto de dados de `32 bits`, e para que os valores comportem-se devidamente,
 * o `po-decimal` contém um tratamento que limita em 16 o número total de casas antes e após a vírgula.
 * Veja abaixo as demais regras nas documentações de `p-decimals-length` e `p-thousand-maxlength`.
 *
 * @example
 *
 * <example name="po-decimal-basic" title="PO Decimal Basic">
 *  <file name="sample-po-decimal-basic/sample-po-decimal-basic.component.html"> </file>
 *  <file name="sample-po-decimal-basic/sample-po-decimal-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-decimal-labs" title="PO Decimal Labs">
 *  <file name="sample-po-decimal-labs/sample-po-decimal-labs.component.html"> </file>
 *  <file name="sample-po-decimal-labs/sample-po-decimal-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-decimal-hourly-wage" title="PO Decimal - Hourly Wage">
 *  <file name="sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"> </file>
 *  <file name="sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"> </file>
 * </example>
 *
 * <example name="po-decimal-hourly-wage-reactive-form" title="PO Decimal - Hourly Wage Reactive Form">
 *  <file name="sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"> </file>
 *  <file name="sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"> </file>
 * </example>
 */
export class PoDecimalComponent extends PoInputBaseComponent {
    constructor(el, poLanguageService, cd) {
        super(cd);
        this.el = el;
        this.poLanguageService = poLanguageService;
        this._decimalsLength = poDecimalDefaultDecimalsLength;
        this._thousandMaxlength = poDecimalDefaultThousandMaxlength;
        this.fireChange = false;
        this.isKeyboardAndroid = false;
        this.minusSign = '-';
        this.oldDotsLength = null;
        this.regex = {
            thousand: new RegExp('\\' + ',', 'g'),
            decimal: new RegExp('\\' + '.', 'g')
        };
        this.isKeyboardAndroid = !!navigator.userAgent.match(/Android/i);
    }
    get autocomplete() {
        return this.noAutocomplete ? 'off' : 'on';
    }
    /**
     * @optional
     *
     * @description
     *
     * Quantidade máxima de casas decimais.
     *
     * > **Importante:**
     * - O valor máximo permitido é 15;
     * - A soma total de `p-decimals-length` com `p-thousand-maxlength` limita-se à 16;
     * - Esta propriedade sobrepõe apenas o valor **padrão** de `p-thousand-maxlength`;
     * - Caso `p-thousand-maxlength` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).
     *
     * @default `2`
     */
    set decimalsLength(value) {
        let decimalsLength = convertToInt(value);
        decimalsLength = this.isValueBetweenAllowed(decimalsLength, poDecimalMaxDecimalsLength)
            ? decimalsLength
            : poDecimalDefaultDecimalsLength;
        if (this.isGreaterThanTotalLengthLimit(decimalsLength, this.thousandMaxlength)) {
            this.thousandMaxlength = poDecimalTotalLengthLimit - decimalsLength;
        }
        this._decimalsLength = decimalsLength;
    }
    get decimalsLength() {
        return this._decimalsLength;
    }
    /**
     * @optional
     *
     * @description
     *
     * Quantidade máxima de dígitos antes do separador decimal.
     *
     * > **Importante:**
     * - O valor máximo permitido é 13;
     * - A soma total de `p-decimals-length` com `p-thousand-maxlength` limita-se à 16;
     * - Esta propriedade sobrepõe o valor definido em `p-decimals-length`.
     *
     * @default `13`
     */
    set thousandMaxlength(value) {
        let thousandMaxlength = convertToInt(value);
        if (this.decimalsLength > poDecimalDefaultDecimalsLength && !thousandMaxlength) {
            thousandMaxlength = poDecimalTotalLengthLimit - this.decimalsLength;
        }
        thousandMaxlength = this.isValueBetweenAllowed(thousandMaxlength, poDecimalDefaultThousandMaxlength)
            ? thousandMaxlength
            : poDecimalDefaultThousandMaxlength;
        if (this.isGreaterThanTotalLengthLimit(this.decimalsLength, thousandMaxlength)) {
            this.decimalsLength = poDecimalTotalLengthLimit - thousandMaxlength;
        }
        this._thousandMaxlength = thousandMaxlength;
    }
    get thousandMaxlength() {
        return this._thousandMaxlength;
    }
    /**
     * @optional
     *
     * @description
     *
     * Informa o locale(país) para a formatação do valor.
     * Por padrão o valor será configurado segundo a o módulo [`I18n`](documentation/po-i18n)
     *
     * > Para ver quais linguagens suportadas acesse [`I18n`](documentation/po-i18n)
     *
     */
    set locale(locale) {
        this._locale = locale;
        this.setNumbersSeparators();
    }
    /**
     * @optional
     *
     * @description
     *
     * Valor mínimo.
     */
    set min(value) {
        if (!isNaN(value)) {
            this._min = value;
            this.validateModel();
        }
        else if (!value) {
            this._min = undefined;
            this.validateModel();
        }
    }
    get min() {
        return this._min;
    }
    /**
     * @optional
     *
     * @description
     *
     * Valor máximo.
     */
    set max(value) {
        if (!isNaN(value)) {
            this._max = value;
            this.validateModel();
        }
        else if (!value) {
            this._max = undefined;
            this.validateModel();
        }
    }
    get max() {
        return this._max;
    }
    ngOnInit() {
        this.setNumbersSeparators();
    }
    setNumbersSeparators() {
        const { decimalSeparator, thousandSeparator } = this.poLanguageService.getNumberSeparators(this._locale);
        this.decimalSeparator = decimalSeparator;
        this.thousandSeparator = thousandSeparator;
        this.regex = {
            thousand: new RegExp('\\' + thousandSeparator, 'g'),
            decimal: new RegExp('\\' + decimalSeparator, 'g')
        };
    }
    ngAfterViewInit() {
        this.verifyAutoFocus();
        this.setPaddingInput();
    }
    clear(value) {
        this.callOnChange(value);
        this.controlChangeEmitter();
    }
    extraValidation(abstractControl) {
        const value = abstractControl.value;
        const thousandValue = Math.trunc(value);
        // Verifica se já possui algum error pattern padrão.
        this.errorPattern = this.errorPattern !== 'Valor Inválido' ? this.errorPattern : '';
        if (minFailed(this.min, value)) {
            return {
                min: {
                    valid: false
                }
            };
        }
        if (maxFailed(this.max, value)) {
            return {
                max: {
                    valid: false
                }
            };
        }
        if ((maxlengpoailed(this.thousandMaxlength, thousandValue) &&
            this.thousandMaxlength < poDecimalDefaultThousandMaxlength) ||
            maxlengpoailed(poDecimalTotalLengthLimit, value)) {
            return {
                max: {
                    valid: false
                }
            };
        }
        return null;
    }
    focus() {
        if (!this.disabled) {
            this.inputEl.nativeElement.focus();
        }
    }
    getScreenValue() {
        return this.inputEl ? this.inputEl.nativeElement.value : '';
    }
    hasInvalidClass() {
        return (this.el.nativeElement.classList.contains('ng-invalid') &&
            this.el.nativeElement.classList.contains('ng-dirty') &&
            this.getScreenValue() !== '');
    }
    hasLetters(value = '') {
        return value.match(/[a-zA-Z:;+=_´`^~"'?!@#$%¨&*()><{}çÇ\[\]/\\|]+/);
    }
    isValidNumber(event) {
        // - event.key não existia em alguns browsers, como Samsung browser e Firefox.
        const keyValue = String.fromCharCode(event.which);
        const validKey = event.which !== 8 && event.which !== 0;
        return !this.hasLetters(keyValue) && validKey;
    }
    // função responsável por adicionar os zeroes com as casa decimais ao sair do campo.
    onBlur(event) {
        this.onTouched?.();
        const value = event.target.value;
        if (value) {
            if (this.hasLetters(value) || this.containsMoreThanOneDecimalSeparator(value)) {
                this.setViewValue('');
                this.callOnChange(undefined);
                return;
            }
            const valueWithoutThousandSeparator = this.formatValueWithoutThousandSeparator(value);
            this.setViewValue(this.formatToViewValue(valueWithoutThousandSeparator));
        }
        this.blur.emit();
        this.controlChangeEmitter();
    }
    onFocus(event) {
        // Atualiza valor da variável que será usada para verificar se o campo teve alteração
        this.valueBeforeChange = this.getScreenValue();
        // Dispara evento quando o usuário entrar no campo
        // Este evento também é disparado quando o campo inicia com foco.
        this.enter.emit();
    }
    onInput(event) {
        const selectionStart = event.target.selectionStart;
        const selectionEnd = event.target.selectionEnd;
        let modelValue;
        // - Browsers nativos do Android ex: Samsung Browser.
        if (this.isKeyboardAndroid) {
            this.onInputKeyboardAndroid(event);
        }
        modelValue = this.formatValueWithoutThousandSeparator(event.target.value);
        modelValue = this.addZeroBefore(modelValue);
        const viewValue = this.formatMask(modelValue);
        // validação para não quebrar IE com placeholder definido e Input vazio
        if (viewValue) {
            this.setViewValue(viewValue);
            this.setCursorInput(event, selectionStart, selectionEnd);
        }
        this.callOnChange(this.formatToModelValue(modelValue));
    }
    onInputKeyboardAndroid(event) {
        const inputValue = event.target.value;
        const selectionStart = event.target.selectionStart;
        const hasLetters = this.hasLetters(inputValue);
        if (hasLetters) {
            this.setViewValue(inputValue.replace(hasLetters[0], ''));
            return event.preventDefault();
        }
        else {
            const position = selectionStart - 1;
            const key = inputValue.charAt(position);
            this.setPositionValue(event);
            if (this.isValidKey(event, key)) {
                this.setViewValue(inputValue);
            }
        }
    }
    onKeyPress(event) {
        this.isValidKey(event);
    }
    setPaddingInput() {
        setTimeout(() => {
            const selectorIcons = '.po-field-icon-container:not(.po-field-icon-container-left) > .po-icon';
            let icons = this.el.nativeElement.querySelectorAll(selectorIcons).length;
            if (this.clean) {
                icons++;
            }
            if (icons) {
                this.inputEl.nativeElement.style.paddingRight = `${icons * 36}px`;
            }
        });
    }
    writeValueModel(value) {
        if (this.inputEl) {
            if (value || value === 0) {
                const formatedViewValue = this.formatToViewValue(value);
                this.setViewValue(formatedViewValue);
            }
            else {
                this.setViewValue('');
            }
        }
        if (value) {
            this.change.emit(value);
        }
    }
    getErrorPatternMessage() {
        return this.errorPattern !== '' && this.hasInvalidClass() ? this.errorPattern : '';
    }
    // responsável por adicionar 0 antes da virgula (decimalSeparator).
    addZeroBefore(value) {
        const isDecimalSeparator = value === this.decimalSeparator;
        return isDecimalSeparator ? `0${value}` : value;
    }
    containsComma(value) {
        return value.includes(this.decimalSeparator);
    }
    containsMoreThanOneDecimalSeparator(value = '') {
        const foundComma = value.match(this.regex.decimal);
        return !!(foundComma && foundComma.length > 1);
    }
    controlChangeEmitter() {
        const elementValue = this.getScreenValue();
        // Emite o evento change manualmente quando o campo é alterado
        // Este evento é controlado manualmente devido ao preventDefault existente na máscara
        // e devido ao controle do p-clean, que também precisa emitir change
        if (elementValue !== this.valueBeforeChange) {
            this.fireChange = true;
            setTimeout(() => {
                this.change.emit(elementValue);
            }, 200);
        }
    }
    formatMask(value) {
        // necessário para não adicionar . nas casa decimais.
        // por exemplo: 12.345,123.45 (errado)
        // 12.345,12345 (correto)
        if (value.match(this.regex.decimal)) {
            const regex = new RegExp(`(\\d)(?=(\\d{3})+(?!\\d)${this.decimalSeparator})`, 'g');
            return value.toString().replace(regex, `$1${this.thousandSeparator}`);
        }
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${this.thousandSeparator}`);
    }
    formatToModelValue(value) {
        const formattedValue = this.replaceCommaToDot(value);
        const parsedValue = formattedValue ? parseFloat(Number(formattedValue).toFixed(this.decimalsLength)) : undefined;
        return parsedValue === 0 || parsedValue ? parsedValue : undefined;
    }
    formatToViewValue(value) {
        // - Necessário para tratar valores que contenham decimalSeparator
        value = this.replaceCommaToDot(value);
        const numberValue = Number(value).toFixed(this.decimalsLength);
        const valueBeforeDot = this.getValueBeforeSeparator(numberValue, '.');
        const valueAfterDot = this.getValueAfterSeparator(numberValue, '.');
        const formatedNumber = this.formatMask(valueBeforeDot);
        if (this.decimalsLength === 0) {
            return formatedNumber;
        }
        else {
            return `${formatedNumber}${this.decimalSeparator}${valueAfterDot}`;
        }
    }
    formatValueWithoutThousandSeparator(value = '') {
        return value.toString().replace(this.regex.thousand, '');
    }
    getValueAfterSeparator(value = '', separator) {
        return value.split(separator)[1] || '';
    }
    getValueBeforeSeparator(value = '', separator) {
        return value.split(separator)[0] || '';
    }
    hasLessDot(value) {
        if (value) {
            const dots = value.match(this.regex.thousand);
            const dotsLength = dots && dots.length;
            if (dotsLength < this.oldDotsLength) {
                this.oldDotsLength = dotsLength;
                return true;
            }
        }
        if (!value) {
            this.oldDotsLength = null;
        }
        return false;
    }
    hasMoreDot(value) {
        if (value) {
            const dots = value.match(this.regex.thousand);
            const dotsLength = dots && dots.length;
            if (dotsLength > this.oldDotsLength) {
                this.oldDotsLength = dotsLength;
                return true;
            }
        }
        if (!value) {
            this.oldDotsLength = null;
        }
        return false;
    }
    hasMinusSignInvalidPosition(event) {
        const keyIsMinusSign = event.key === this.minusSign;
        const selectionStart = event.target.selectionStart;
        return keyIsMinusSign && selectionStart !== 0;
    }
    isInvalidKey(event, charCode) {
        const isInvalidNumber = !this.isValidNumber(event);
        return (this.verifyInsertComma(event) ||
            this.verifyThousandLength(event) ||
            this.verifyValueAfterComma(event) ||
            this.verifyInsertMinusSign(event) ||
            this.hasMinusSignInvalidPosition(event) ||
            isInvalidNumber ||
            this.validateCursorPositionBeforeSeparator(event) ||
            this.verifyDecimalLengthIsZeroAndKeyPressedIsComma(charCode));
    }
    isGreaterThanTotalLengthLimit(decimalsMaxLength, thousandMaxlength) {
        return decimalsMaxLength + thousandMaxlength > poDecimalTotalLengthLimit;
    }
    isKeyDecimalSeparator(event) {
        return event.key === this.decimalSeparator || event.char === this.decimalSeparator;
    }
    isPositionAfterDecimalSeparator(positionCursor, value) {
        const indexComma = value && value.indexOf(this.decimalSeparator);
        if (indexComma && this.decimalsLength > 0) {
            return positionCursor > indexComma;
        }
    }
    isSelectionStartDifferentSelectionEnd(target) {
        return target.selectionStart !== target.selectionEnd;
    }
    isValidKey(event, key) {
        const charCode = event.which || event.keyCode;
        const validKey = event.which === 8 || event.which === 0;
        if (validKey && !this.isKeyboardAndroid) {
            return;
        }
        if (key) {
            event.key = key;
        }
        if (this.isInvalidKey(event, charCode)) {
            event.preventDefault();
            return false;
        }
        return true;
    }
    isValueBetweenAllowed(value, maxAllowed) {
        return value >= 0 && value <= maxAllowed;
    }
    // Quando decimalsLength for 0 não deve permitir informar vírgula (decimalSeparator)
    verifyDecimalLengthIsZeroAndKeyPressedIsComma(charCode) {
        return charCode === 44 && this.decimalsLength === 0;
    }
    verifyAutoFocus() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    setInitialSelectionRange(target, selectionStart, selectionEnd) {
        if (selectionStart === 1 && selectionEnd === 1) {
            return target.setSelectionRange(selectionStart + 1, selectionEnd + 1);
        }
        return target.setSelectionRange(selectionStart - 1, selectionEnd - 1);
    }
    replaceAt(value, index, replace) {
        return value.substring(0, index) + replace + value.substring(index + 1);
    }
    replaceCommaToDot(value = '') {
        if (this.decimalSeparator === ',') {
            value = value.toString().replace(this.regex.decimal, '.');
        }
        return value;
    }
    setCursorInput(event, selectionStart, selectionEnd) {
        const target = event.target;
        const viewValue = target.value;
        // Caso houver mais . do que anteriormente soma o valor com 1.
        if (this.hasMoreDot(viewValue) || viewValue === '0' + this.decimalSeparator) {
            return target.setSelectionRange(selectionStart + 1, selectionEnd + 1);
        }
        // Caso houver menos . do que anteriormente subtrai o valor por 1.
        if (this.hasLessDot(viewValue)) {
            this.setInitialSelectionRange(target, selectionStart, selectionEnd);
        }
        return target.setSelectionRange(selectionStart, selectionEnd);
    }
    setPositionValue(event) {
        const value = event.target.value;
        const position = event.target.selectionStart - 1;
        if (position > 0 && event.key === this.minusSign) {
            event.target.value = value.substring(0, position) + value.substr(position + 1);
        }
    }
    setViewValue(value) {
        this.inputEl.nativeElement.value = value;
    }
    validateCursorPositionBeforeSeparator(event) {
        const target = event.target;
        const originalValue = this.formatValueWithoutThousandSeparator(target.value);
        const valueBeforeSeparator = this.getValueBeforeSeparator(target.value, this.decimalSeparator);
        const valueBeforeSeparatorOriginal = this.getValueBeforeSeparator(originalValue, this.decimalSeparator);
        if (this.isSelectionStartDifferentSelectionEnd(target)) {
            return false;
        }
        return (target.selectionStart <= valueBeforeSeparator.length &&
            valueBeforeSeparatorOriginal.length === this.thousandMaxlength &&
            !this.isKeyDecimalSeparator(event));
    }
    verifyThousandLength(event) {
        const target = event.target;
        const originalValue = this.formatValueWithoutThousandSeparator(target.value);
        const valueBeforeSeparatorOriginal = this.getValueBeforeSeparator(originalValue, this.decimalSeparator);
        if (this.isSelectionStartDifferentSelectionEnd(target)) {
            return false;
        }
        return (valueBeforeSeparatorOriginal.length >= this.thousandMaxlength &&
            !this.isKeyDecimalSeparator(event) &&
            this.isPositionAfterDecimalSeparator(target.selectionStart - this.decimalsLength, target.value));
    }
    verifyInsertComma(e) {
        const hasComma = this.containsComma(e.target.value);
        return hasComma && e.key === this.decimalSeparator;
    }
    verifyInsertMinusSign(event) {
        const value = event.target.value;
        const indexMinusSign = value.lastIndexOf(this.minusSign) !== -1;
        const positionMinusSign = value.lastIndexOf('-');
        const occurancesMinusSign = value.match(new RegExp('-', 'g'));
        if (this.isKeyboardAndroid && indexMinusSign && occurancesMinusSign.length > 1) {
            event.target.value = this.replaceAt(value, positionMinusSign, '');
        }
        return indexMinusSign && event.key === this.minusSign;
    }
    verifyValueAfterComma(event) {
        const value = event.target.value;
        const selectionStart = event.target.selectionStart;
        const valueAfterSeparator = this.getValueAfterSeparator(value, this.decimalSeparator);
        return (this.isPositionAfterDecimalSeparator(selectionStart, value) && valueAfterSeparator.length >= this.decimalsLength);
    }
}
PoDecimalComponent.ɵfac = function PoDecimalComponent_Factory(t) { return new (t || PoDecimalComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoDecimalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDecimalComponent, selectors: [["po-decimal"]], viewQuery: function PoDecimalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
    } }, inputs: { decimalsLength: ["p-decimals-length", "decimalsLength"], thousandMaxlength: ["p-thousand-maxlength", "thousandMaxlength"], locale: ["p-locale", "locale"], min: ["p-min", "min"], max: ["p-max", "max"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoDecimalComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoDecimalComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 19, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-field-container-content"], ["class", "po-field-icon-container-left", 4, "ngIf"], ["inputmode", "decimal", "type", "text", 1, "po-input", 3, "autocomplete", "disabled", "placeholder", "readonly", "required", "blur", "focus", "input", "keypress"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-element-ref", "p-change-event", 4, "ngIf"], [3, "p-error-pattern"], [1, "po-field-icon-container-left"], [1, "po-field-icon", "po-icon-input", 3, "p-icon"], [1, "po-icon-input", 3, "p-element-ref", "p-change-event"]], template: function PoDecimalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoDecimalComponent_div_2_Template, 2, 3, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("blur", function PoDecimalComponent_Template_input_blur_3_listener($event) { return ctx.onBlur($event); })("focus", function PoDecimalComponent_Template_input_focus_3_listener($event) { return ctx.onFocus($event); })("input", function PoDecimalComponent_Template_input_input_3_listener($event) { return ctx.onInput($event); })("keypress", function PoDecimalComponent_Template_input_keypress_3_listener($event) { return ctx.onKeyPress($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PoDecimalComponent_po_clean_6_Template, 1, 1, "po-clean", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(7, "po-field-container-bottom", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-input-icon-left", ctx.icon)("po-input-icon-right", ctx.clean);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required);
        i0.ɵɵattribute("max", ctx.max)("min", ctx.min)("name", ctx.name)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled && !ctx.readonly);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorPatternMessage());
    } }, dependencies: [i2.NgIf, i3.PoCleanComponent, i4.PoFieldContainerBottomComponent, i5.PoFieldContainerComponent, i6.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDecimalComponent, [{
        type: Component,
        args: [{ selector: 'po-decimal', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoDecimalComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoDecimalComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div *ngIf=\"icon\" class=\"po-field-icon-container-left\">\r\n      <po-icon class=\"po-field-icon po-icon-input\" [class.po-field-icon-disabled]=\"disabled\" [p-icon]=\"icon\"></po-icon>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input\"\r\n      [attr.max]=\"max\"\r\n      [attr.min]=\"min\"\r\n      [attr.name]=\"name\"\r\n      [attr.aria-label]=\"label\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [class.po-input-icon-left]=\"icon\"\r\n      [class.po-input-icon-right]=\"clean\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      inputmode=\"decimal\"\r\n      type=\"text\"\r\n      (blur)=\"onBlur($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (input)=\"onInput($event)\"\r\n      (keypress)=\"onKeyPress($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear($event)\"\r\n      >\r\n      </po-clean>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPatternMessage()\"> </po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.PoLanguageService }, { type: i0.ChangeDetectorRef }]; }, { inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: true }]
        }], decimalsLength: [{
            type: Input,
            args: ['p-decimals-length']
        }], thousandMaxlength: [{
            type: Input,
            args: ['p-thousand-maxlength']
        }], locale: [{
            type: Input,
            args: ['p-locale']
        }], min: [{
            type: Input,
            args: ['p-min']
        }], max: [{
            type: Input,
            args: ['p-max']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGVjaW1hbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZGVjaW1hbC9wby1kZWNpbWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1kZWNpbWFsL3BvLWRlY2ltYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7OztJQ2Z2RSw4QkFBdUQ7SUFDckQsNkJBQWlIO0lBQ25ILGlCQUFNOzs7SUFEeUMsZUFBeUM7SUFBekMseURBQXlDO0lBQUMsb0NBQWU7Ozs7SUEwQnRHLG9DQUtDO0lBREMsOExBQWtCLGVBQUEsb0JBQWEsQ0FBQSxJQUFDO0lBRWxDLGlCQUFXOzs7SUFIVCw4Q0FBeUI7O0FEYmpDLE1BQU0sOEJBQThCLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0saUNBQWlDLEdBQUcsRUFBRSxDQUFDO0FBQzdDLE1BQU0sMEJBQTBCLEdBQUcsRUFBRSxDQUFDO0FBQ3RDLE1BQU0seUJBQXlCLEdBQUcsRUFBRSxDQUFDO0FBRXJDOzs7Ozs7Ozs7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QUMsc0JBQXNCO1lBaUNOLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVTtZQVlHLEdBQUc7a0JBQXRCLEtBQUs7bUJBQUMsT0FBTztZQXVCTSxHQUFHO2tCQUF0QixLQUFLO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBtaW5GYWlsZWQsIG1heEZhaWxlZCwgbWF4bGVuZ3BvYWlsZWQgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0ludCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0lucHV0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL3BvLWlucHV0L3BvLWlucHV0LWJhc2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHBvRGVjaW1hbERlZmF1bHREZWNpbWFsc0xlbmd0aCA9IDI7XHJcbmNvbnN0IHBvRGVjaW1hbERlZmF1bHRUaG91c2FuZE1heGxlbmd0aCA9IDEzO1xyXG5jb25zdCBwb0RlY2ltYWxNYXhEZWNpbWFsc0xlbmd0aCA9IDE1O1xyXG5jb25zdCBwb0RlY2ltYWxUb3RhbExlbmd0aExpbWl0ID0gMTY7XHJcblxyXG4vKipcclxuICpcclxuICogQGRvY3NFeHRlbmRzIFBvSW5wdXRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiA8YnI+XHJcbiAqIC0gTyBgcG8tZGVjaW1hbGAgw6kgdW0gKmlucHV0KiBlc3BlY8OtZmljbyBwYXJhIHJlY2ViZXIgYXBlbmFzIG7Dum1lcm9zIGRlY2ltYWlzLCBwb3IgaXNzbyByZWNlYmUgYXMgc2VndWludGVzIGNhcmFjdGVyw61zdGljYXM6XHJcbiAqICArIEFjZWl0YSBhcGVuYXMgbsO6bWVyb3M7XHJcbiAqICArIFV0aWxpemEgJywnIGNvbW8gc2VwYXJhZG9yIGRlIGRlY2ltYWw7XHJcbiAqICArIFV0aWxpemEgJy4nIHBhcmEgc2VwYXJhw6fDo28gZGUgbWlsaGFyO1xyXG4gKiAgKyDDiSBwb3Nzw612ZWwgY29uZmlndXJhciBhIHF1YW50aWRhZGUgZGUgY2FzYXMgZGVjaW1haXMgZSBhIHF1YW50aWRhZGUgZGUgZGlnaXRvcyBkbyBjYW1wby5cclxuICpcclxuICogPiAqKkltcG9ydGFudGU6KipcclxuICogQXR1YWxtZW50ZSBvIEphdmFTY3JpcHQgbGltaXRhLXNlIGEgdW0gY29uanVudG8gZGUgZGFkb3MgZGUgYDMyIGJpdHNgLCBlIHBhcmEgcXVlIG9zIHZhbG9yZXMgY29tcG9ydGVtLXNlIGRldmlkYW1lbnRlLFxyXG4gKiBvIGBwby1kZWNpbWFsYCBjb250w6ltIHVtIHRyYXRhbWVudG8gcXVlIGxpbWl0YSBlbSAxNiBvIG7Dum1lcm8gdG90YWwgZGUgY2FzYXMgYW50ZXMgZSBhcMOzcyBhIHbDrXJndWxhLlxyXG4gKiBWZWphIGFiYWl4byBhcyBkZW1haXMgcmVncmFzIG5hcyBkb2N1bWVudGHDp8O1ZXMgZGUgYHAtZGVjaW1hbHMtbGVuZ3RoYCBlIGBwLXRob3VzYW5kLW1heGxlbmd0aGAuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1kZWNpbWFsLWJhc2ljXCIgdGl0bGU9XCJQTyBEZWNpbWFsIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRlY2ltYWwtYmFzaWMvc2FtcGxlLXBvLWRlY2ltYWwtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kZWNpbWFsLWJhc2ljL3NhbXBsZS1wby1kZWNpbWFsLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRlY2ltYWwtbGFic1wiIHRpdGxlPVwiUE8gRGVjaW1hbCBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRlY2ltYWwtbGFicy9zYW1wbGUtcG8tZGVjaW1hbC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGVjaW1hbC1sYWJzL3NhbXBsZS1wby1kZWNpbWFsLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGVjaW1hbC1ob3VybHktd2FnZVwiIHRpdGxlPVwiUE8gRGVjaW1hbCAtIEhvdXJseSBXYWdlXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRlY2ltYWwtaG91cmx5LXdhZ2Uvc2FtcGxlLXBvLWRlY2ltYWwtaG91cmx5LXdhZ2UuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kZWNpbWFsLWhvdXJseS13YWdlL3NhbXBsZS1wby1kZWNpbWFsLWhvdXJseS13YWdlLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRlY2ltYWwtaG91cmx5LXdhZ2UtcmVhY3RpdmUtZm9ybVwiIHRpdGxlPVwiUE8gRGVjaW1hbCAtIEhvdXJseSBXYWdlIFJlYWN0aXZlIEZvcm1cIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGVjaW1hbC1ob3VybHktd2FnZS1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1kZWNpbWFsLWhvdXJseS13YWdlLXJlYWN0aXZlLWZvcm0uY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kZWNpbWFsLWhvdXJseS13YWdlLXJlYWN0aXZlLWZvcm0vc2FtcGxlLXBvLWRlY2ltYWwtaG91cmx5LXdhZ2UtcmVhY3RpdmUtZm9ybS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWRlY2ltYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1kZWNpbWFsLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvRGVjaW1hbENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0RlY2ltYWxDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRGVjaW1hbENvbXBvbmVudCBleHRlbmRzIFBvSW5wdXRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdpbnAnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIF9kZWNpbWFsc0xlbmd0aD86IG51bWJlciA9IHBvRGVjaW1hbERlZmF1bHREZWNpbWFsc0xlbmd0aDtcclxuICBwcml2YXRlIF90aG91c2FuZE1heGxlbmd0aD86IG51bWJlciA9IHBvRGVjaW1hbERlZmF1bHRUaG91c2FuZE1heGxlbmd0aDtcclxuICBwcml2YXRlIF9sb2NhbGU/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfbWluPzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX21heD86IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmaXJlQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc0tleWJvYXJkQW5kcm9pZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbWludXNTaWduOiBzdHJpbmcgPSAnLSc7XHJcbiAgcHJpdmF0ZSBvbGREb3RzTGVuZ3RoID0gbnVsbDtcclxuICBwcml2YXRlIHRob3VzYW5kU2VwYXJhdG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB2YWx1ZUJlZm9yZUNoYW5nZTogYW55O1xyXG5cclxuICBwcml2YXRlIHJlZ2V4ID0ge1xyXG4gICAgdGhvdXNhbmQ6IG5ldyBSZWdFeHAoJ1xcXFwnICsgJywnLCAnZycpLFxyXG4gICAgZGVjaW1hbDogbmV3IFJlZ0V4cCgnXFxcXCcgKyAnLicsICdnJylcclxuICB9O1xyXG5cclxuICBnZXQgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9BdXRvY29tcGxldGUgPyAnb2ZmJyA6ICdvbic7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUXVhbnRpZGFkZSBtw6F4aW1hIGRlIGNhc2FzIGRlY2ltYWlzLlxyXG4gICAqXHJcbiAgICogPiAqKkltcG9ydGFudGU6KipcclxuICAgKiAtIE8gdmFsb3IgbcOheGltbyBwZXJtaXRpZG8gw6kgMTU7XHJcbiAgICogLSBBIHNvbWEgdG90YWwgZGUgYHAtZGVjaW1hbHMtbGVuZ3RoYCBjb20gYHAtdGhvdXNhbmQtbWF4bGVuZ3RoYCBsaW1pdGEtc2Ugw6AgMTY7XHJcbiAgICogLSBFc3RhIHByb3ByaWVkYWRlIHNvYnJlcMO1ZSBhcGVuYXMgbyB2YWxvciAqKnBhZHLDo28qKiBkZSBgcC10aG91c2FuZC1tYXhsZW5ndGhgO1xyXG4gICAqIC0gQ2FzbyBgcC10aG91c2FuZC1tYXhsZW5ndGhgIHRlbmhhIHVtIHZhbG9yIGRlZmluaWRvLCBlc3RhIHByb3ByaWVkYWRlIHBvZGVyw6EgcmVjZWJlciBhcGVuYXMgbyB2YWxvciByZXN0YW50ZSBkbyBsaW1pdGUgdG90YWwgKDE2KS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGAyYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kZWNpbWFscy1sZW5ndGgnKSBzZXQgZGVjaW1hbHNMZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgbGV0IGRlY2ltYWxzTGVuZ3RoID0gY29udmVydFRvSW50KHZhbHVlKTtcclxuXHJcbiAgICBkZWNpbWFsc0xlbmd0aCA9IHRoaXMuaXNWYWx1ZUJldHdlZW5BbGxvd2VkKGRlY2ltYWxzTGVuZ3RoLCBwb0RlY2ltYWxNYXhEZWNpbWFsc0xlbmd0aClcclxuICAgICAgPyBkZWNpbWFsc0xlbmd0aFxyXG4gICAgICA6IHBvRGVjaW1hbERlZmF1bHREZWNpbWFsc0xlbmd0aDtcclxuXHJcbiAgICBpZiAodGhpcy5pc0dyZWF0ZXJUaGFuVG90YWxMZW5ndGhMaW1pdChkZWNpbWFsc0xlbmd0aCwgdGhpcy50aG91c2FuZE1heGxlbmd0aCkpIHtcclxuICAgICAgdGhpcy50aG91c2FuZE1heGxlbmd0aCA9IHBvRGVjaW1hbFRvdGFsTGVuZ3RoTGltaXQgLSBkZWNpbWFsc0xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kZWNpbWFsc0xlbmd0aCA9IGRlY2ltYWxzTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlY2ltYWxzTGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxzTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFF1YW50aWRhZGUgbcOheGltYSBkZSBkw61naXRvcyBhbnRlcyBkbyBzZXBhcmFkb3IgZGVjaW1hbC5cclxuICAgKlxyXG4gICAqID4gKipJbXBvcnRhbnRlOioqXHJcbiAgICogLSBPIHZhbG9yIG3DoXhpbW8gcGVybWl0aWRvIMOpIDEzO1xyXG4gICAqIC0gQSBzb21hIHRvdGFsIGRlIGBwLWRlY2ltYWxzLWxlbmd0aGAgY29tIGBwLXRob3VzYW5kLW1heGxlbmd0aGAgbGltaXRhLXNlIMOgIDE2O1xyXG4gICAqIC0gRXN0YSBwcm9wcmllZGFkZSBzb2JyZXDDtWUgbyB2YWxvciBkZWZpbmlkbyBlbSBgcC1kZWNpbWFscy1sZW5ndGhgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDEzYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10aG91c2FuZC1tYXhsZW5ndGgnKSBzZXQgdGhvdXNhbmRNYXhsZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgbGV0IHRob3VzYW5kTWF4bGVuZ3RoID0gY29udmVydFRvSW50KHZhbHVlKTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWNpbWFsc0xlbmd0aCA+IHBvRGVjaW1hbERlZmF1bHREZWNpbWFsc0xlbmd0aCAmJiAhdGhvdXNhbmRNYXhsZW5ndGgpIHtcclxuICAgICAgdGhvdXNhbmRNYXhsZW5ndGggPSBwb0RlY2ltYWxUb3RhbExlbmd0aExpbWl0IC0gdGhpcy5kZWNpbWFsc0xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aG91c2FuZE1heGxlbmd0aCA9IHRoaXMuaXNWYWx1ZUJldHdlZW5BbGxvd2VkKHRob3VzYW5kTWF4bGVuZ3RoLCBwb0RlY2ltYWxEZWZhdWx0VGhvdXNhbmRNYXhsZW5ndGgpXHJcbiAgICAgID8gdGhvdXNhbmRNYXhsZW5ndGhcclxuICAgICAgOiBwb0RlY2ltYWxEZWZhdWx0VGhvdXNhbmRNYXhsZW5ndGg7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNHcmVhdGVyVGhhblRvdGFsTGVuZ3RoTGltaXQodGhpcy5kZWNpbWFsc0xlbmd0aCwgdGhvdXNhbmRNYXhsZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMuZGVjaW1hbHNMZW5ndGggPSBwb0RlY2ltYWxUb3RhbExlbmd0aExpbWl0IC0gdGhvdXNhbmRNYXhsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdGhvdXNhbmRNYXhsZW5ndGggPSB0aG91c2FuZE1heGxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldCB0aG91c2FuZE1heGxlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aG91c2FuZE1heGxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmZvcm1hIG8gbG9jYWxlKHBhw61zKSBwYXJhIGEgZm9ybWF0YcOnw6NvIGRvIHZhbG9yLlxyXG4gICAqIFBvciBwYWRyw6NvIG8gdmFsb3Igc2Vyw6EgY29uZmlndXJhZG8gc2VndW5kbyBhIG8gbcOzZHVsbyBbYEkxOG5gXShkb2N1bWVudGF0aW9uL3BvLWkxOG4pXHJcbiAgICpcclxuICAgKiA+IFBhcmEgdmVyIHF1YWlzIGxpbmd1YWdlbnMgc3Vwb3J0YWRhcyBhY2Vzc2UgW2BJMThuYF0oZG9jdW1lbnRhdGlvbi9wby1pMThuKVxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxvY2FsZScpIHNldCBsb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcclxuICAgIHRoaXMuc2V0TnVtYmVyc1NlcGFyYXRvcnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBWYWxvciBtw61uaW1vLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1taW4nKSBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX21pbiA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9taW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLnZhbGlkYXRlTW9kZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9taW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVmFsb3IgbcOheGltby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbWF4Jykgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9tYXggPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMudmFsaWRhdGVNb2RlbCgpO1xyXG4gICAgfSBlbHNlIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5fbWF4ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBwb0xhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoY2QpO1xyXG4gICAgdGhpcy5pc0tleWJvYXJkQW5kcm9pZCA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXROdW1iZXJzU2VwYXJhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyc1NlcGFyYXRvcnMoKSB7XHJcbiAgICBjb25zdCB7IGRlY2ltYWxTZXBhcmF0b3IsIHRob3VzYW5kU2VwYXJhdG9yIH0gPSB0aGlzLnBvTGFuZ3VhZ2VTZXJ2aWNlLmdldE51bWJlclNlcGFyYXRvcnModGhpcy5fbG9jYWxlKTtcclxuICAgIHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9IGRlY2ltYWxTZXBhcmF0b3I7XHJcbiAgICB0aGlzLnRob3VzYW5kU2VwYXJhdG9yID0gdGhvdXNhbmRTZXBhcmF0b3I7XHJcbiAgICB0aGlzLnJlZ2V4ID0ge1xyXG4gICAgICB0aG91c2FuZDogbmV3IFJlZ0V4cCgnXFxcXCcgKyB0aG91c2FuZFNlcGFyYXRvciwgJ2cnKSxcclxuICAgICAgZGVjaW1hbDogbmV3IFJlZ0V4cCgnXFxcXCcgKyBkZWNpbWFsU2VwYXJhdG9yLCAnZycpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy52ZXJpZnlBdXRvRm9jdXMoKTtcclxuICAgIHRoaXMuc2V0UGFkZGluZ0lucHV0KCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcih2YWx1ZSkge1xyXG4gICAgdGhpcy5jYWxsT25DaGFuZ2UodmFsdWUpO1xyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlRW1pdHRlcigpO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFWYWxpZGF0aW9uKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFic3RyYWN0Q29udHJvbC52YWx1ZTtcclxuICAgIGNvbnN0IHRob3VzYW5kVmFsdWUgPSBNYXRoLnRydW5jKHZhbHVlKTtcclxuXHJcbiAgICAvLyBWZXJpZmljYSBzZSBqw6EgcG9zc3VpIGFsZ3VtIGVycm9yIHBhdHRlcm4gcGFkcsOjby5cclxuICAgIHRoaXMuZXJyb3JQYXR0ZXJuID0gdGhpcy5lcnJvclBhdHRlcm4gIT09ICdWYWxvciBJbnbDoWxpZG8nID8gdGhpcy5lcnJvclBhdHRlcm4gOiAnJztcclxuXHJcbiAgICBpZiAobWluRmFpbGVkKHRoaXMubWluLCB2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtaW46IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4RmFpbGVkKHRoaXMubWF4LCB2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYXg6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChtYXhsZW5ncG9haWxlZCh0aGlzLnRob3VzYW5kTWF4bGVuZ3RoLCB0aG91c2FuZFZhbHVlKSAmJlxyXG4gICAgICAgIHRoaXMudGhvdXNhbmRNYXhsZW5ndGggPCBwb0RlY2ltYWxEZWZhdWx0VGhvdXNhbmRNYXhsZW5ndGgpIHx8XHJcbiAgICAgIG1heGxlbmdwb2FpbGVkKHBvRGVjaW1hbFRvdGFsTGVuZ3RoTGltaXQsIHZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF4OiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2NyZWVuVmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsID8gdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiAnJztcclxuICB9XHJcblxyXG4gIGhhc0ludmFsaWRDbGFzcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSAmJlxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1kaXJ0eScpICYmXHJcbiAgICAgIHRoaXMuZ2V0U2NyZWVuVmFsdWUoKSAhPT0gJydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoYXNMZXR0ZXJzKHZhbHVlOiBzdHJpbmcgPSAnJykge1xyXG4gICAgcmV0dXJuIHZhbHVlLm1hdGNoKC9bYS16QS1aOjsrPV/CtGBeflwiJz8hQCMkJcKoJiooKT48e33Dp8OHXFxbXFxdL1xcXFx8XSsvKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWROdW1iZXIoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gLSBldmVudC5rZXkgbsOjbyBleGlzdGlhIGVtIGFsZ3VucyBicm93c2VycywgY29tbyBTYW1zdW5nIGJyb3dzZXIgZSBGaXJlZm94LlxyXG4gICAgY29uc3Qga2V5VmFsdWUgPSA8YW55PlN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpO1xyXG4gICAgY29uc3QgdmFsaWRLZXkgPSBldmVudC53aGljaCAhPT0gOCAmJiBldmVudC53aGljaCAhPT0gMDtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMuaGFzTGV0dGVycyhrZXlWYWx1ZSkgJiYgdmFsaWRLZXk7XHJcbiAgfVxyXG5cclxuICAvLyBmdW7Dp8OjbyByZXNwb25zw6F2ZWwgcG9yIGFkaWNpb25hciBvcyB6ZXJvZXMgY29tIGFzIGNhc2EgZGVjaW1haXMgYW8gc2FpciBkbyBjYW1wby5cclxuICBvbkJsdXIoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vblRvdWNoZWQ/LigpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc0xldHRlcnModmFsdWUpIHx8IHRoaXMuY29udGFpbnNNb3JlVGhhbk9uZURlY2ltYWxTZXBhcmF0b3IodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUoJycpO1xyXG4gICAgICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2YWx1ZVdpdGhvdXRUaG91c2FuZFNlcGFyYXRvciA9IHRoaXMuZm9ybWF0VmFsdWVXaXRob3V0VGhvdXNhbmRTZXBhcmF0b3IodmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFZpZXdWYWx1ZSh0aGlzLmZvcm1hdFRvVmlld1ZhbHVlKHZhbHVlV2l0aG91dFRob3VzYW5kU2VwYXJhdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcclxuICAgIHRoaXMuY29udHJvbENoYW5nZUVtaXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIC8vIEF0dWFsaXphIHZhbG9yIGRhIHZhcmnDoXZlbCBxdWUgc2Vyw6EgdXNhZGEgcGFyYSB2ZXJpZmljYXIgc2UgbyBjYW1wbyB0ZXZlIGFsdGVyYcOnw6NvXHJcbiAgICB0aGlzLnZhbHVlQmVmb3JlQ2hhbmdlID0gdGhpcy5nZXRTY3JlZW5WYWx1ZSgpO1xyXG5cclxuICAgIC8vIERpc3BhcmEgZXZlbnRvIHF1YW5kbyBvIHVzdcOhcmlvIGVudHJhciBubyBjYW1wb1xyXG4gICAgLy8gRXN0ZSBldmVudG8gdGFtYsOpbSDDqSBkaXNwYXJhZG8gcXVhbmRvIG8gY2FtcG8gaW5pY2lhIGNvbSBmb2NvLlxyXG4gICAgdGhpcy5lbnRlci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uRW5kID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZDtcclxuXHJcbiAgICBsZXQgbW9kZWxWYWx1ZTtcclxuXHJcbiAgICAvLyAtIEJyb3dzZXJzIG5hdGl2b3MgZG8gQW5kcm9pZCBleDogU2Ftc3VuZyBCcm93c2VyLlxyXG4gICAgaWYgKHRoaXMuaXNLZXlib2FyZEFuZHJvaWQpIHtcclxuICAgICAgdGhpcy5vbklucHV0S2V5Ym9hcmRBbmRyb2lkKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBtb2RlbFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZVdpdGhvdXRUaG91c2FuZFNlcGFyYXRvcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgbW9kZWxWYWx1ZSA9IHRoaXMuYWRkWmVyb0JlZm9yZShtb2RlbFZhbHVlKTtcclxuICAgIGNvbnN0IHZpZXdWYWx1ZSA9IHRoaXMuZm9ybWF0TWFzayhtb2RlbFZhbHVlKTtcclxuXHJcbiAgICAvLyB2YWxpZGHDp8OjbyBwYXJhIG7Do28gcXVlYnJhciBJRSBjb20gcGxhY2Vob2xkZXIgZGVmaW5pZG8gZSBJbnB1dCB2YXppb1xyXG4gICAgaWYgKHZpZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFZpZXdWYWx1ZSh2aWV3VmFsdWUpO1xyXG4gICAgICB0aGlzLnNldEN1cnNvcklucHV0KGV2ZW50LCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGxPbkNoYW5nZSh0aGlzLmZvcm1hdFRvTW9kZWxWYWx1ZShtb2RlbFZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0S2V5Ym9hcmRBbmRyb2lkKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGhhc0xldHRlcnMgPSB0aGlzLmhhc0xldHRlcnMoaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgaWYgKGhhc0xldHRlcnMpIHtcclxuICAgICAgdGhpcy5zZXRWaWV3VmFsdWUoaW5wdXRWYWx1ZS5yZXBsYWNlKGhhc0xldHRlcnNbMF0sICcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xyXG4gICAgICBjb25zdCBrZXkgPSBpbnB1dFZhbHVlLmNoYXJBdChwb3NpdGlvbik7XHJcblxyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uVmFsdWUoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNWYWxpZEtleShldmVudCwga2V5KSkge1xyXG4gICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKGlucHV0VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmlzVmFsaWRLZXkoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFkZGluZ0lucHV0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdG9ySWNvbnMgPSAnLnBvLWZpZWxkLWljb24tY29udGFpbmVyOm5vdCgucG8tZmllbGQtaWNvbi1jb250YWluZXItbGVmdCkgPiAucG8taWNvbic7XHJcbiAgICAgIGxldCBpY29ucyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ySWNvbnMpLmxlbmd0aDtcclxuICAgICAgaWYgKHRoaXMuY2xlYW4pIHtcclxuICAgICAgICBpY29ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpY29ucykge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2ljb25zICogMzZ9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWVNb2RlbCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbCkge1xyXG4gICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcclxuICAgICAgICBjb25zdCBmb3JtYXRlZFZpZXdWYWx1ZSA9IHRoaXMuZm9ybWF0VG9WaWV3VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKGZvcm1hdGVkVmlld1ZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvclBhdHRlcm5NZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JQYXR0ZXJuICE9PSAnJyAmJiB0aGlzLmhhc0ludmFsaWRDbGFzcygpID8gdGhpcy5lcnJvclBhdHRlcm4gOiAnJztcclxuICB9XHJcblxyXG4gIC8vIHJlc3BvbnPDoXZlbCBwb3IgYWRpY2lvbmFyIDAgYW50ZXMgZGEgdmlyZ3VsYSAoZGVjaW1hbFNlcGFyYXRvcikuXHJcbiAgcHJpdmF0ZSBhZGRaZXJvQmVmb3JlKHZhbHVlKSB7XHJcbiAgICBjb25zdCBpc0RlY2ltYWxTZXBhcmF0b3IgPSB2YWx1ZSA9PT0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yO1xyXG5cclxuICAgIHJldHVybiBpc0RlY2ltYWxTZXBhcmF0b3IgPyBgMCR7dmFsdWV9YCA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb250YWluc0NvbW1hKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUuaW5jbHVkZXModGhpcy5kZWNpbWFsU2VwYXJhdG9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udGFpbnNNb3JlVGhhbk9uZURlY2ltYWxTZXBhcmF0b3IodmFsdWU6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBjb25zdCBmb3VuZENvbW1hID0gdmFsdWUubWF0Y2godGhpcy5yZWdleC5kZWNpbWFsKTtcclxuXHJcbiAgICByZXR1cm4gISEoZm91bmRDb21tYSAmJiBmb3VuZENvbW1hLmxlbmd0aCA+IDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb250cm9sQ2hhbmdlRW1pdHRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IHRoaXMuZ2V0U2NyZWVuVmFsdWUoKTtcclxuXHJcbiAgICAvLyBFbWl0ZSBvIGV2ZW50byBjaGFuZ2UgbWFudWFsbWVudGUgcXVhbmRvIG8gY2FtcG8gw6kgYWx0ZXJhZG9cclxuICAgIC8vIEVzdGUgZXZlbnRvIMOpIGNvbnRyb2xhZG8gbWFudWFsbWVudGUgZGV2aWRvIGFvIHByZXZlbnREZWZhdWx0IGV4aXN0ZW50ZSBuYSBtw6FzY2FyYVxyXG4gICAgLy8gZSBkZXZpZG8gYW8gY29udHJvbGUgZG8gcC1jbGVhbiwgcXVlIHRhbWLDqW0gcHJlY2lzYSBlbWl0aXIgY2hhbmdlXHJcbiAgICBpZiAoZWxlbWVudFZhbHVlICE9PSB0aGlzLnZhbHVlQmVmb3JlQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZmlyZUNoYW5nZSA9IHRydWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZWxlbWVudFZhbHVlKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TWFzayh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAvLyBuZWNlc3PDoXJpbyBwYXJhIG7Do28gYWRpY2lvbmFyIC4gbmFzIGNhc2EgZGVjaW1haXMuXHJcbiAgICAvLyBwb3IgZXhlbXBsbzogMTIuMzQ1LDEyMy40NSAoZXJyYWRvKVxyXG4gICAgLy8gMTIuMzQ1LDEyMzQ1IChjb3JyZXRvKVxyXG5cclxuICAgIGlmICh2YWx1ZS5tYXRjaCh0aGlzLnJlZ2V4LmRlY2ltYWwpKSB7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKFxcXFxkKSg/PShcXFxcZHszfSkrKD8hXFxcXGQpJHt0aGlzLmRlY2ltYWxTZXBhcmF0b3J9KWAsICdnJyk7XHJcbiAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UocmVnZXgsIGAkMSR7dGhpcy50aG91c2FuZFNlcGFyYXRvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csIGAkMSR7dGhpcy50aG91c2FuZFNlcGFyYXRvcn1gKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VG9Nb2RlbFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5yZXBsYWNlQ29tbWFUb0RvdCh2YWx1ZSk7XHJcbiAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlID8gcGFyc2VGbG9hdChOdW1iZXIoZm9ybWF0dGVkVmFsdWUpLnRvRml4ZWQodGhpcy5kZWNpbWFsc0xlbmd0aCkpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiBwYXJzZWRWYWx1ZSA9PT0gMCB8fCBwYXJzZWRWYWx1ZSA/IHBhcnNlZFZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRUb1ZpZXdWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAvLyAtIE5lY2Vzc8OhcmlvIHBhcmEgdHJhdGFyIHZhbG9yZXMgcXVlIGNvbnRlbmhhbSBkZWNpbWFsU2VwYXJhdG9yXHJcbiAgICB2YWx1ZSA9IHRoaXMucmVwbGFjZUNvbW1hVG9Eb3QodmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IG51bWJlclZhbHVlID0gTnVtYmVyKHZhbHVlKS50b0ZpeGVkKHRoaXMuZGVjaW1hbHNMZW5ndGgpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlQmVmb3JlRG90ID0gdGhpcy5nZXRWYWx1ZUJlZm9yZVNlcGFyYXRvcihudW1iZXJWYWx1ZSwgJy4nKTtcclxuICAgIGNvbnN0IHZhbHVlQWZ0ZXJEb3QgPSB0aGlzLmdldFZhbHVlQWZ0ZXJTZXBhcmF0b3IobnVtYmVyVmFsdWUsICcuJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0ZWROdW1iZXIgPSB0aGlzLmZvcm1hdE1hc2sodmFsdWVCZWZvcmVEb3QpO1xyXG5cclxuICAgIGlmICh0aGlzLmRlY2ltYWxzTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmb3JtYXRlZE51bWJlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHtmb3JtYXRlZE51bWJlcn0ke3RoaXMuZGVjaW1hbFNlcGFyYXRvcn0ke3ZhbHVlQWZ0ZXJEb3R9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VmFsdWVXaXRob3V0VGhvdXNhbmRTZXBhcmF0b3IodmFsdWU6IHN0cmluZyA9ICcnKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKHRoaXMucmVnZXgudGhvdXNhbmQsICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmFsdWVBZnRlclNlcGFyYXRvcih2YWx1ZSA9ICcnLCBzZXBhcmF0b3IpIHtcclxuICAgIHJldHVybiB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpWzFdIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZUJlZm9yZVNlcGFyYXRvcih2YWx1ZSA9ICcnLCBzZXBhcmF0b3IpIHtcclxuICAgIHJldHVybiB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpWzBdIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNMZXNzRG90KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgY29uc3QgZG90cyA9IHZhbHVlLm1hdGNoKHRoaXMucmVnZXgudGhvdXNhbmQpO1xyXG4gICAgICBjb25zdCBkb3RzTGVuZ3RoID0gZG90cyAmJiBkb3RzLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChkb3RzTGVuZ3RoIDwgdGhpcy5vbGREb3RzTGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5vbGREb3RzTGVuZ3RoID0gZG90c0xlbmd0aDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5vbGREb3RzTGVuZ3RoID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc01vcmVEb3QodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBkb3RzID0gdmFsdWUubWF0Y2godGhpcy5yZWdleC50aG91c2FuZCk7XHJcbiAgICAgIGNvbnN0IGRvdHNMZW5ndGggPSBkb3RzICYmIGRvdHMubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGRvdHNMZW5ndGggPiB0aGlzLm9sZERvdHNMZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9sZERvdHNMZW5ndGggPSBkb3RzTGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLm9sZERvdHNMZW5ndGggPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzTWludXNTaWduSW52YWxpZFBvc2l0aW9uKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGtleUlzTWludXNTaWduID0gZXZlbnQua2V5ID09PSB0aGlzLm1pbnVzU2lnbjtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xyXG5cclxuICAgIHJldHVybiBrZXlJc01pbnVzU2lnbiAmJiBzZWxlY3Rpb25TdGFydCAhPT0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbnZhbGlkS2V5KGV2ZW50OiBhbnksIGNoYXJDb2RlOiBhbnkpIHtcclxuICAgIGNvbnN0IGlzSW52YWxpZE51bWJlciA9ICF0aGlzLmlzVmFsaWROdW1iZXIoZXZlbnQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMudmVyaWZ5SW5zZXJ0Q29tbWEoZXZlbnQpIHx8XHJcbiAgICAgIHRoaXMudmVyaWZ5VGhvdXNhbmRMZW5ndGgoZXZlbnQpIHx8XHJcbiAgICAgIHRoaXMudmVyaWZ5VmFsdWVBZnRlckNvbW1hKGV2ZW50KSB8fFxyXG4gICAgICB0aGlzLnZlcmlmeUluc2VydE1pbnVzU2lnbihldmVudCkgfHxcclxuICAgICAgdGhpcy5oYXNNaW51c1NpZ25JbnZhbGlkUG9zaXRpb24oZXZlbnQpIHx8XHJcbiAgICAgIGlzSW52YWxpZE51bWJlciB8fFxyXG4gICAgICB0aGlzLnZhbGlkYXRlQ3Vyc29yUG9zaXRpb25CZWZvcmVTZXBhcmF0b3IoZXZlbnQpIHx8XHJcbiAgICAgIHRoaXMudmVyaWZ5RGVjaW1hbExlbmd0aElzWmVyb0FuZEtleVByZXNzZWRJc0NvbW1hKGNoYXJDb2RlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNHcmVhdGVyVGhhblRvdGFsTGVuZ3RoTGltaXQoZGVjaW1hbHNNYXhMZW5ndGg6IG51bWJlciwgdGhvdXNhbmRNYXhsZW5ndGg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGRlY2ltYWxzTWF4TGVuZ3RoICsgdGhvdXNhbmRNYXhsZW5ndGggPiBwb0RlY2ltYWxUb3RhbExlbmd0aExpbWl0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0tleURlY2ltYWxTZXBhcmF0b3IoZXZlbnQpIHtcclxuICAgIHJldHVybiBldmVudC5rZXkgPT09IHRoaXMuZGVjaW1hbFNlcGFyYXRvciB8fCBldmVudC5jaGFyID09PSB0aGlzLmRlY2ltYWxTZXBhcmF0b3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUG9zaXRpb25BZnRlckRlY2ltYWxTZXBhcmF0b3IocG9zaXRpb25DdXJzb3IsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBpbmRleENvbW1hID0gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZih0aGlzLmRlY2ltYWxTZXBhcmF0b3IpO1xyXG5cclxuICAgIGlmIChpbmRleENvbW1hICYmIHRoaXMuZGVjaW1hbHNMZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBwb3NpdGlvbkN1cnNvciA+IGluZGV4Q29tbWE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU2VsZWN0aW9uU3RhcnREaWZmZXJlbnRTZWxlY3Rpb25FbmQodGFyZ2V0OiBhbnkpIHtcclxuICAgIHJldHVybiB0YXJnZXQuc2VsZWN0aW9uU3RhcnQgIT09IHRhcmdldC5zZWxlY3Rpb25FbmQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRLZXkoZXZlbnQ6IGFueSwga2V5Pzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjaGFyQ29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XHJcbiAgICBjb25zdCB2YWxpZEtleSA9IGV2ZW50LndoaWNoID09PSA4IHx8IGV2ZW50LndoaWNoID09PSAwO1xyXG5cclxuICAgIGlmICh2YWxpZEtleSAmJiAhdGhpcy5pc0tleWJvYXJkQW5kcm9pZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleSkge1xyXG4gICAgICBldmVudC5rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkS2V5KGV2ZW50LCBjaGFyQ29kZSkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsdWVCZXR3ZWVuQWxsb3dlZCh2YWx1ZTogbnVtYmVyLCBtYXhBbGxvd2VkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IG1heEFsbG93ZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBRdWFuZG8gZGVjaW1hbHNMZW5ndGggZm9yIDAgbsOjbyBkZXZlIHBlcm1pdGlyIGluZm9ybWFyIHbDrXJndWxhIChkZWNpbWFsU2VwYXJhdG9yKVxyXG4gIHByaXZhdGUgdmVyaWZ5RGVjaW1hbExlbmd0aElzWmVyb0FuZEtleVByZXNzZWRJc0NvbW1hKGNoYXJDb2RlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjaGFyQ29kZSA9PT0gNDQgJiYgdGhpcy5kZWNpbWFsc0xlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5QXV0b0ZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5pdGlhbFNlbGVjdGlvblJhbmdlKHRhcmdldDogYW55LCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IDEgJiYgc2VsZWN0aW9uRW5kID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB0YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQgKyAxLCBzZWxlY3Rpb25FbmQgKyAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQgLSAxLCBzZWxlY3Rpb25FbmQgLSAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVwbGFjZUF0KHZhbHVlLCBpbmRleCwgcmVwbGFjZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBpbmRleCkgKyByZXBsYWNlICsgdmFsdWUuc3Vic3RyaW5nKGluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcGxhY2VDb21tYVRvRG90KHZhbHVlOiBzdHJpbmcgPSAnJykge1xyXG4gICAgaWYgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJywnKSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKHRoaXMucmVnZXguZGVjaW1hbCwgJy4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEN1cnNvcklucHV0KGV2ZW50LCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCB2aWV3VmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG4gICAgLy8gQ2FzbyBob3V2ZXIgbWFpcyAuIGRvIHF1ZSBhbnRlcmlvcm1lbnRlIHNvbWEgbyB2YWxvciBjb20gMS5cclxuICAgIGlmICh0aGlzLmhhc01vcmVEb3Qodmlld1ZhbHVlKSB8fCB2aWV3VmFsdWUgPT09ICcwJyArIHRoaXMuZGVjaW1hbFNlcGFyYXRvcikge1xyXG4gICAgICByZXR1cm4gdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0ICsgMSwgc2VsZWN0aW9uRW5kICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FzbyBob3V2ZXIgbWVub3MgLiBkbyBxdWUgYW50ZXJpb3JtZW50ZSBzdWJ0cmFpIG8gdmFsb3IgcG9yIDEuXHJcbiAgICBpZiAodGhpcy5oYXNMZXNzRG90KHZpZXdWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZXRJbml0aWFsU2VsZWN0aW9uUmFuZ2UodGFyZ2V0LCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBvc2l0aW9uVmFsdWUoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCAtIDE7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID4gMCAmJiBldmVudC5rZXkgPT09IHRoaXMubWludXNTaWduKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbikgKyB2YWx1ZS5zdWJzdHIocG9zaXRpb24gKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Vmlld1ZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlQ3Vyc29yUG9zaXRpb25CZWZvcmVTZXBhcmF0b3IoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWVXaXRob3V0VGhvdXNhbmRTZXBhcmF0b3IodGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IHZhbHVlQmVmb3JlU2VwYXJhdG9yID0gdGhpcy5nZXRWYWx1ZUJlZm9yZVNlcGFyYXRvcih0YXJnZXQudmFsdWUsIHRoaXMuZGVjaW1hbFNlcGFyYXRvcik7XHJcbiAgICBjb25zdCB2YWx1ZUJlZm9yZVNlcGFyYXRvck9yaWdpbmFsID0gdGhpcy5nZXRWYWx1ZUJlZm9yZVNlcGFyYXRvcihvcmlnaW5hbFZhbHVlLCB0aGlzLmRlY2ltYWxTZXBhcmF0b3IpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzU2VsZWN0aW9uU3RhcnREaWZmZXJlbnRTZWxlY3Rpb25FbmQodGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0YXJnZXQuc2VsZWN0aW9uU3RhcnQgPD0gdmFsdWVCZWZvcmVTZXBhcmF0b3IubGVuZ3RoICYmXHJcbiAgICAgIHZhbHVlQmVmb3JlU2VwYXJhdG9yT3JpZ2luYWwubGVuZ3RoID09PSB0aGlzLnRob3VzYW5kTWF4bGVuZ3RoICYmXHJcbiAgICAgICF0aGlzLmlzS2V5RGVjaW1hbFNlcGFyYXRvcihldmVudClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeVRob3VzYW5kTGVuZ3RoKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlV2l0aG91dFRob3VzYW5kU2VwYXJhdG9yKHRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCB2YWx1ZUJlZm9yZVNlcGFyYXRvck9yaWdpbmFsID0gdGhpcy5nZXRWYWx1ZUJlZm9yZVNlcGFyYXRvcihvcmlnaW5hbFZhbHVlLCB0aGlzLmRlY2ltYWxTZXBhcmF0b3IpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzU2VsZWN0aW9uU3RhcnREaWZmZXJlbnRTZWxlY3Rpb25FbmQodGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB2YWx1ZUJlZm9yZVNlcGFyYXRvck9yaWdpbmFsLmxlbmd0aCA+PSB0aGlzLnRob3VzYW5kTWF4bGVuZ3RoICYmXHJcbiAgICAgICF0aGlzLmlzS2V5RGVjaW1hbFNlcGFyYXRvcihldmVudCkgJiZcclxuICAgICAgdGhpcy5pc1Bvc2l0aW9uQWZ0ZXJEZWNpbWFsU2VwYXJhdG9yKHRhcmdldC5zZWxlY3Rpb25TdGFydCAtIHRoaXMuZGVjaW1hbHNMZW5ndGgsIHRhcmdldC52YWx1ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeUluc2VydENvbW1hKGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaGFzQ29tbWEgPSB0aGlzLmNvbnRhaW5zQ29tbWEoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBoYXNDb21tYSAmJiBlLmtleSA9PT0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlJbnNlcnRNaW51c1NpZ24oZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBpbmRleE1pbnVzU2lnbiA9IHZhbHVlLmxhc3RJbmRleE9mKHRoaXMubWludXNTaWduKSAhPT0gLTE7XHJcbiAgICBjb25zdCBwb3NpdGlvbk1pbnVzU2lnbiA9IHZhbHVlLmxhc3RJbmRleE9mKCctJyk7XHJcbiAgICBjb25zdCBvY2N1cmFuY2VzTWludXNTaWduID0gdmFsdWUubWF0Y2gobmV3IFJlZ0V4cCgnLScsICdnJykpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzS2V5Ym9hcmRBbmRyb2lkICYmIGluZGV4TWludXNTaWduICYmIG9jY3VyYW5jZXNNaW51c1NpZ24ubGVuZ3RoID4gMSkge1xyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnJlcGxhY2VBdCh2YWx1ZSwgcG9zaXRpb25NaW51c1NpZ24sICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleE1pbnVzU2lnbiAmJiBldmVudC5rZXkgPT09IHRoaXMubWludXNTaWduO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlWYWx1ZUFmdGVyQ29tbWEoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IHZhbHVlQWZ0ZXJTZXBhcmF0b3IgPSB0aGlzLmdldFZhbHVlQWZ0ZXJTZXBhcmF0b3IodmFsdWUsIHRoaXMuZGVjaW1hbFNlcGFyYXRvcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc1Bvc2l0aW9uQWZ0ZXJEZWNpbWFsU2VwYXJhdG9yKHNlbGVjdGlvblN0YXJ0LCB2YWx1ZSkgJiYgdmFsdWVBZnRlclNlcGFyYXRvci5sZW5ndGggPj0gdGhpcy5kZWNpbWFsc0xlbmd0aFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLWhlbHBdPVwiaGVscFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cImljb25cIiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLWxlZnRcIj5cclxuICAgICAgPHBvLWljb24gY2xhc3M9XCJwby1maWVsZC1pY29uIHBvLWljb24taW5wdXRcIiBbY2xhc3MucG8tZmllbGQtaWNvbi1kaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtwLWljb25dPVwiaWNvblwiPjwvcG8taWNvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wXHJcbiAgICAgIGNsYXNzPVwicG8taW5wdXRcIlxyXG4gICAgICBbYXR0ci5tYXhdPVwibWF4XCJcclxuICAgICAgW2F0dHIubWluXT1cIm1pblwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1pY29uLWxlZnRdPVwiaWNvblwiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1pY29uLXJpZ2h0XT1cImNsZWFuXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cImRpc2FibGVkID8gJycgOiBwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIGlucHV0bW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxyXG4gICAgICAoa2V5cHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgKm5nSWY9XCJjbGVhbiAmJiAhZGlzYWJsZWQgJiYgIXJlYWRvbmx5XCJcclxuICAgICAgICBbcC1lbGVtZW50LXJlZl09XCJpbnB1dEVsXCJcclxuICAgICAgICAocC1jaGFuZ2UtZXZlbnQpPVwiY2xlYXIoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPC9wby1jbGVhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbSBbcC1lcnJvci1wYXR0ZXJuXT1cImdldEVycm9yUGF0dGVybk1lc3NhZ2UoKVwiPiA8L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG4iXX0=