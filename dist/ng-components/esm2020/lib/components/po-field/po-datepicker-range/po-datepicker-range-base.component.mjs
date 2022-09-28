import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean } from '../../../decorators';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import { requiredFailed } from '../validators';
import { convertIsoToDate, convertToBoolean, setYearFrom0To100, validateDateRange } from './../../../utils/util';
import { poDatepickerRangeLiteralsDefault } from './po-datepicker-range.literals';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-date/po-date.service";
import * as i2 from "../../../services/po-language/po-language.service";
/**
 * @description
 *
 * O `po-datepicker-range` é um componente para seleção de um período entre duas datas, onde é possível informar apenas
 * a data inicial ou a data final.
 *
 * O componente `[(ngModel)]` do `po-datepicker-range` trabalha com um objeto que implementa a interface
 * `PoDatepickerRange`, contendo as seguintes propriedades:
 * ```
 * { "start": '2017-11-28', "end": '2017-11-30' }
 * ```
 *
 * <a id="accepted-formats"></a>
 * Este componente pode receber os seguintes formatos de data:
 *
 * - **Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm**
 * ```
 * '2017-11-28T00:00:00-02:00';
 * ```
 *
 * - **Data (E8601DAw.): yyyy-mm-dd**
 * ```
 * '2017-11-28';
 * ```
 *
 * - **JavaScript Date Object:**
 * ```
 * new Date(2017, 10, 28);
 * ```
 *
 * > O componente respeitará o formato passado para o *model* via codificação. Porém, caso seja feita alteração em algum
 * dos valores de data em tela, o componente atribuirá o formato **Data (E8601DAw.): yyyy-mm-dd** ao model.
 *
 * Importante:
 *
 * - Quando preenchidas a data inicial e final, a data inicial deve ser sempre menor ou igual a data final;
 * - Ao passar uma data inválida via codificação, o valor será mantido no *model* e o `input` da tela aparecerá vazio;
 * - Permite trabalhar com as duas datas separadamente através das propriedades `p-start-date` e `p-end-date` no lugar do
 * `[(ngModel)]`, no entanto sem a validação do formulário;
 * - Para a validação do formulário, utilize o `[(ngModel)]`.
 */
export class PoDatepickerRangeBaseComponent {
    constructor(poDateService, languageService) {
        this.poDateService = poDateService;
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
         * Evento disparado ao alterar valor do campo.
         */
        this.onChange = new EventEmitter();
        this.errorMessage = '';
        this.dateRange = { start: '', end: '' };
        this.format = 'dd/mm/yyyy';
        this.isDateRangeInputFormatValid = true;
        this.isStartDateRangeInputValid = true;
        this._clean = false;
        this._noAutocomplete = false;
        this._readonly = false;
        this._required = false;
        this.language = languageService.getShortLanguage();
    }
    get isDateRangeInputValid() {
        return this.isDateRangeInputFormatValid && this.isStartDateRangeInputValid;
    }
    /**
     * @optional
     *
     * @description
     *
     * Habilita ação para limpar o campo.
     *
     * @default `false`
     */
    set clean(clean) {
        this._clean = convertToBoolean(clean);
    }
    get clean() {
        return this._clean;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o campo.
     *
     * @default `false`
     */
    set disabled(value) {
        this._disabled = convertToBoolean(value);
        this.validateModel(this.dateRange);
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Data final.
     */
    set endDate(date) {
        this._endDate = this.convertPatternDateFormat(date);
        this.dateRange.end = this.endDate;
        this.updateScreenByModel(this.dateRange);
        this.updateModel(this.dateRange);
    }
    get endDate() {
        return this._endDate;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-datepicker-range`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoDatepickerRangeLiterals = {
     *    invalidFormat: 'Date in inconsistent format',
     *    startDateGreaterThanEndDate: 'End date less than start date'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoDatepickerRangeLiterals = {
     *    invalidFormat: 'Date in inconsistent format'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-datepicker-range
     *   [p-literals]="customLiterals">
     * </po-datepicker-range>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poDatepickerRangeLiteralsDefault[poLocaleDefault],
                ...poDatepickerRangeLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poDatepickerRangeLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poDatepickerRangeLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma data mínima para o `po-datepicker-range`.
     */
    set minDate(value) {
        if (value instanceof Date) {
            const year = value.getFullYear();
            const date = new Date(year, value.getMonth(), value.getDate(), 0, 0, 0);
            setYearFrom0To100(date, year);
            this._minDate = date;
        }
        else {
            this._minDate = convertIsoToDate(value, true, false);
        }
    }
    get minDate() {
        return this._minDate;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma data máxima para o `po-datepicker-range`.
     */
    set maxDate(value) {
        if (value instanceof Date) {
            const year = value.getFullYear();
            const date = new Date(year, value.getMonth(), value.getDate(), 23, 59, 59);
            setYearFrom0To100(date, year);
            this._maxDate = date;
        }
        else {
            this._maxDate = convertIsoToDate(value, false, true);
        }
    }
    get maxDate() {
        return this._maxDate;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a propriedade nativa `autocomplete` do campo como `off`.
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
     * Indica que o campo será somente leitura.
     *
     * @default `false`
     */
    set readonly(value) {
        this._readonly = convertToBoolean(value);
        this.validateModel(this.dateRange);
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
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel(this.dateRange);
    }
    get required() {
        return this._required;
    }
    /**
     * @optional
     *
     * @description
     *
     * Data inicial.
     */
    set startDate(date) {
        this._startDate = this.convertPatternDateFormat(date);
        this.dateRange.start = this.startDate;
        this.updateScreenByModel(this.dateRange);
        this.updateModel(this.dateRange);
    }
    get startDate() {
        return this._startDate;
    }
    /**
     * @optional
     *
     * @description
     *
     * Idioma que o calendário utilizará para exibir as datas.
     *
     * > O locale padrão será recuperado com base no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set locale(value) {
        if (value) {
            this._locale = value.length >= 2 ? value : poLocaleDefault;
        }
        else {
            this._locale = this.language;
        }
    }
    get locale() {
        return this._locale || this.language;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnChange(func) {
        this.onChangeModel = func;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnTouched(func) {
        this.onTouchedModel = func;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    validate(control) {
        const value = control.value || {};
        const startDate = value.start ? this.convertPatternDateFormat(value.start) : '';
        const endDate = value.end ? this.convertPatternDateFormat(value.end) : '';
        if (this.requiredDateRangeFailed(startDate, endDate)) {
            this.errorMessage = '';
            return {
                required: {
                    valid: false
                }
            };
        }
        if (!this.verifyValidDate(startDate, endDate)) {
            this.errorMessage = this.literals.invalidDate;
            return {
                date: {
                    valid: false
                }
            };
        }
        if (this.dateRangeObjectFailed(control.value) || this.dateRangeFormatFailed(startDate, endDate)) {
            this.errorMessage = this.literals.invalidFormat;
            return {
                date: {
                    valid: false
                }
            };
        }
        if (this.dateRangeFailed(startDate, endDate)) {
            this.errorMessage = this.literals.startDateGreaterThanEndDate;
            return {
                date: {
                    valid: false
                }
            };
        }
        if ((startDate && !this.validateDateInRange(startDate)) || (endDate && !this.validateDateInRange(endDate))) {
            this.errorMessage = this.literals.dateOutOfPeriod;
            return {
                date: {
                    valid: false
                }
            };
        }
        return null;
    }
    validateDateInRange(startDate) {
        return validateDateRange(convertIsoToDate(startDate, false, false), this._minDate, this._maxDate);
    }
    writeValue(dateRange) {
        this.resetDateRangeInputValidation();
        if (!dateRange || this.dateRangeObjectFailed(dateRange)) {
            this.dateRange = { start: '', end: '' };
        }
        if (!dateRange) {
            this.validateModel(this.dateRange);
        }
        if (this.dateRangeObjectFailed(dateRange)) {
            this.updateModel(dateRange);
        }
        if (this.isDateRangeObject(dateRange)) {
            this.dateRange = {
                start: this.convertPatternDateFormat(dateRange.start),
                end: this.convertPatternDateFormat(dateRange.end)
            };
            this.updateModel(this.dateRange);
        }
        this.updateScreenByModel(this.dateRange);
    }
    dateFormatFailed(value) {
        return value && !this.poDateService.isValidIso(value);
    }
    // Executa a função onChange
    updateModel(value) {
        const model = typeof value === 'object' ? { ...value } : value;
        // Quando o input não possui um formulário, então esta função não é registrada
        if (this.onChangeModel) {
            this.onChangeModel(model);
        }
    }
    validateModel(value) {
        const model = { ...value };
        if (this.validatorChange) {
            this.validatorChange(model);
        }
    }
    verifyValidDate(startDate, endDate) {
        if (startDate !== '' && endDate !== '') {
            return this.dateIsValid(startDate) && this.dateIsValid(endDate);
        }
        else if (startDate !== '') {
            return this.dateIsValid(startDate);
        }
        else {
            return this.dateIsValid(endDate);
        }
    }
    convertPatternDateFormat(value) {
        if (value instanceof Date) {
            return this.poDateService.convertDateToISO(value);
        }
        return value;
    }
    dateRangeFailed(startDate, endDate) {
        return !this.poDateService.isDateRangeValid(endDate, startDate) || !this.isStartDateRangeInputValid;
    }
    dateRangeFormatFailed(startDate, endDate) {
        return this.dateFormatFailed(endDate) || this.dateFormatFailed(startDate) || !this.isDateRangeInputFormatValid;
    }
    dateRangeObjectFailed(value) {
        return value && !this.isDateRangeObject(value);
    }
    isDateRangeObject(value) {
        return value && value.hasOwnProperty('start') && value.hasOwnProperty('end');
    }
    requiredDateRangeFailed(startDate, endDate) {
        return (this.isDateRangeInputValid &&
            requiredFailed(this.required, this.disabled, startDate) &&
            requiredFailed(this.required, this.disabled, endDate));
    }
    dateIsValid(date) {
        const [strYear, strMonth, strDay] = date.split('-');
        const year = Number(strYear);
        const month = Number(strMonth);
        const day = Number(strDay);
        //verificação dos meses com 31 dias
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            return day < 1 || day > 31 ? false : true;
        }
        else if (month === 4 || month === 6 || month === 9 || month === 11) {
            //verificação dos meses com 30 dias
            return day < 1 || day > 30 ? false : true;
        }
        else {
            //verificacao de ano bissexto para verificar até qual dia irá o mês de fevereiro
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return day < 1 || day > 29 ? false : true;
            }
            else {
                return day < 1 || day > 28 ? false : true;
            }
        }
    }
}
PoDatepickerRangeBaseComponent.ɵfac = function PoDatepickerRangeBaseComponent_Factory(t) { return new (t || PoDatepickerRangeBaseComponent)(i0.ɵɵdirectiveInject(i1.PoDateService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoDatepickerRangeBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDatepickerRangeBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], help: ["p-help", "help"], label: ["p-label", "label"], optional: ["p-optional", "optional"], clean: ["p-clean", "clean"], disabled: ["p-disabled", "disabled"], endDate: ["p-end-date", "endDate"], literals: ["p-literals", "literals"], minDate: ["p-min-date", "minDate"], maxDate: ["p-max-date", "maxDate"], noAutocomplete: ["p-no-autocomplete", "noAutocomplete"], readonly: ["p-readonly", "readonly"], required: ["p-required", "required"], startDate: ["p-start-date", "startDate"], locale: ["p-locale", "locale"] }, outputs: { onChange: "p-change" } });
__decorate([
    InputBoolean()
], PoDatepickerRangeBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDatepickerRangeBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoDateService }, { type: i2.PoLanguageService }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], onChange: [{
            type: Output,
            args: ['p-change']
        }], clean: [{
            type: Input,
            args: ['p-clean']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], endDate: [{
            type: Input,
            args: ['p-end-date']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], minDate: [{
            type: Input,
            args: ['p-min-date']
        }], maxDate: [{
            type: Input,
            args: ['p-max-date']
        }], noAutocomplete: [{
            type: Input,
            args: ['p-no-autocomplete']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], startDate: [{
            type: Input,
            args: ['p-start-date']
        }], locale: [{
            type: Input,
            args: ['p-locale']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0ZXBpY2tlci1yYW5nZS1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1kYXRlcGlja2VyLXJhbmdlL3BvLWRhdGVwaWNrZXItcmFuZ2UtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDRztBQUVILE1BQU0sT0FBZ0IsOEJBQThCO0lBNlVsRCxZQUFzQixhQUE0QixFQUFFLGVBQWtDO1FBQWhFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBNVVsRDs7Ozs7Ozs7OztXQVVHO1FBQ29DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFtQ2xFOzs7Ozs7V0FNRztRQUNpQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFMUUsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFzQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTVDLFdBQU0sR0FB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OEJBQThCO0FBWVg7SUFBZixZQUFZLEVBQUU7aUVBQTRCO3VGQVo5Qyw4QkFBOEI7Y0FEbkQsU0FBUztnR0FhK0IsU0FBUztrQkFBL0MsS0FBSzttQkFBQyxjQUFjO1lBU0osSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBU0csS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBZUssUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBU0MsUUFBUTtrQkFBM0IsTUFBTTttQkFBQyxVQUFVO1lBdUNJLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUztZQWlCUyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFpQk0sT0FBTztrQkFBL0IsS0FBSzttQkFBQyxZQUFZO1lBK0NNLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQXVCTSxPQUFPO2tCQUEvQixLQUFLO21CQUFDLFlBQVk7WUF3Qk0sT0FBTztrQkFBL0IsS0FBSzttQkFBQyxZQUFZO1lBMEJhLGNBQWM7a0JBQTdDLEtBQUs7bUJBQUMsbUJBQW1CO1lBaUJELFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQW1CTSxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFpQlEsU0FBUztrQkFBbkMsS0FBSzttQkFBQyxjQUFjO1lBcUJFLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHJlcXVpcmVkRmFpbGVkIH0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7IFBvRGF0ZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWRhdGUvcG8tZGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY29udmVydElzb1RvRGF0ZSwgY29udmVydFRvQm9vbGVhbiwgc2V0WWVhckZyb20wVG8xMDAsIHZhbGlkYXRlRGF0ZVJhbmdlIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9EYXRlcGlja2VyUmFuZ2VMaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1kYXRlcGlja2VyLXJhbmdlLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRGF0ZXBpY2tlclJhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWRhdGVwaWNrZXItcmFuZ2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgcG9EYXRlcGlja2VyUmFuZ2VMaXRlcmFsc0RlZmF1bHQgfSBmcm9tICcuL3BvLWRhdGVwaWNrZXItcmFuZ2UubGl0ZXJhbHMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1kYXRlcGlja2VyLXJhbmdlYCDDqSB1bSBjb21wb25lbnRlIHBhcmEgc2VsZcOnw6NvIGRlIHVtIHBlcsOtb2RvIGVudHJlIGR1YXMgZGF0YXMsIG9uZGUgw6kgcG9zc8OtdmVsIGluZm9ybWFyIGFwZW5hc1xyXG4gKiBhIGRhdGEgaW5pY2lhbCBvdSBhIGRhdGEgZmluYWwuXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgWyhuZ01vZGVsKV1gIGRvIGBwby1kYXRlcGlja2VyLXJhbmdlYCB0cmFiYWxoYSBjb20gdW0gb2JqZXRvIHF1ZSBpbXBsZW1lbnRhIGEgaW50ZXJmYWNlXHJcbiAqIGBQb0RhdGVwaWNrZXJSYW5nZWAsIGNvbnRlbmRvIGFzIHNlZ3VpbnRlcyBwcm9wcmllZGFkZXM6XHJcbiAqIGBgYFxyXG4gKiB7IFwic3RhcnRcIjogJzIwMTctMTEtMjgnLCBcImVuZFwiOiAnMjAxNy0xMS0zMCcgfVxyXG4gKiBgYGBcclxuICpcclxuICogPGEgaWQ9XCJhY2NlcHRlZC1mb3JtYXRzXCI+PC9hPlxyXG4gKiBFc3RlIGNvbXBvbmVudGUgcG9kZSByZWNlYmVyIG9zIHNlZ3VpbnRlcyBmb3JtYXRvcyBkZSBkYXRhOlxyXG4gKlxyXG4gKiAtICoqRGF0YSBlIGhvcmEgY29tYmluYWRvcyAoRTg2MDFEWncpOiB5eXl5LW1tLWRkVGhoOm1tOnNzK3wtaGg6bW0qKlxyXG4gKiBgYGBcclxuICogJzIwMTctMTEtMjhUMDA6MDA6MDAtMDI6MDAnO1xyXG4gKiBgYGBcclxuICpcclxuICogLSAqKkRhdGEgKEU4NjAxREF3Lik6IHl5eXktbW0tZGQqKlxyXG4gKiBgYGBcclxuICogJzIwMTctMTEtMjgnO1xyXG4gKiBgYGBcclxuICpcclxuICogLSAqKkphdmFTY3JpcHQgRGF0ZSBPYmplY3Q6KipcclxuICogYGBgXHJcbiAqIG5ldyBEYXRlKDIwMTcsIDEwLCAyOCk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiA+IE8gY29tcG9uZW50ZSByZXNwZWl0YXLDoSBvIGZvcm1hdG8gcGFzc2FkbyBwYXJhIG8gKm1vZGVsKiB2aWEgY29kaWZpY2HDp8Ojby4gUG9yw6ltLCBjYXNvIHNlamEgZmVpdGEgYWx0ZXJhw6fDo28gZW0gYWxndW1cclxuICogZG9zIHZhbG9yZXMgZGUgZGF0YSBlbSB0ZWxhLCBvIGNvbXBvbmVudGUgYXRyaWJ1aXLDoSBvIGZvcm1hdG8gKipEYXRhIChFODYwMURBdy4pOiB5eXl5LW1tLWRkKiogYW8gbW9kZWwuXHJcbiAqXHJcbiAqIEltcG9ydGFudGU6XHJcbiAqXHJcbiAqIC0gUXVhbmRvIHByZWVuY2hpZGFzIGEgZGF0YSBpbmljaWFsIGUgZmluYWwsIGEgZGF0YSBpbmljaWFsIGRldmUgc2VyIHNlbXByZSBtZW5vciBvdSBpZ3VhbCBhIGRhdGEgZmluYWw7XHJcbiAqIC0gQW8gcGFzc2FyIHVtYSBkYXRhIGludsOhbGlkYSB2aWEgY29kaWZpY2HDp8OjbywgbyB2YWxvciBzZXLDoSBtYW50aWRvIG5vICptb2RlbCogZSBvIGBpbnB1dGAgZGEgdGVsYSBhcGFyZWNlcsOhIHZhemlvO1xyXG4gKiAtIFBlcm1pdGUgdHJhYmFsaGFyIGNvbSBhcyBkdWFzIGRhdGFzIHNlcGFyYWRhbWVudGUgYXRyYXbDqXMgZGFzIHByb3ByaWVkYWRlcyBgcC1zdGFydC1kYXRlYCBlIGBwLWVuZC1kYXRlYCBubyBsdWdhciBkb1xyXG4gKiBgWyhuZ01vZGVsKV1gLCBubyBlbnRhbnRvIHNlbSBhIHZhbGlkYcOnw6NvIGRvIGZvcm11bMOhcmlvO1xyXG4gKiAtIFBhcmEgYSB2YWxpZGHDp8OjbyBkbyBmb3JtdWzDoXJpbywgdXRpbGl6ZSBvIGBbKG5nTW9kZWwpXWAuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvRGF0ZXBpY2tlclJhbmdlQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBcGxpY2EgZm9jbyBubyBlbGVtZW50byBhbyBzZXIgaW5pY2lhZG8uXHJcbiAgICpcclxuICAgKiA+IENhc28gbWFpcyBkZSB1bSBlbGVtZW50byBzZWphIGNvbmZpZ3VyYWRvIGNvbSBlc3NhIHByb3ByaWVkYWRlLCBhcGVuYXMgbyDDumx0aW1vIGVsZW1lbnRvIGRlY2xhcmFkbyBjb20gZWxhIHRlcsOhIG8gZm9jby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1mb2N1cycpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFRleHRvIGRlIGFwb2lvIGRvIGNhbXBvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oZWxwJykgaGVscD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFLDs3R1bG8gZG8gY2FtcG8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgc2UgYSBpbmRpY2HDp8OjbyBkZSBjYW1wbyBvcGNpb25hbCBzZXLDoSBleGliaWRhLlxyXG4gICAqXHJcbiAgICogPiBOw6NvIHNlcsOhIGV4aWJpZGEgYSBpbmRpY2HDp8OjbyBzZTpcclxuICAgKiAtIE8gY2FtcG8gY29udGVyIGBwLXJlcXVpcmVkYDtcclxuICAgKiAtIE7Do28gcG9zc3VpciBgcC1oZWxwYCBlL291IGBwLWxhYmVsYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atb3B0aW9uYWwnKSBvcHRpb25hbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gYW8gYWx0ZXJhciB2YWxvciBkbyBjYW1wby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIGRhdGVSYW5nZTogUG9EYXRlcGlja2VyUmFuZ2UgPSB7IHN0YXJ0OiAnJywgZW5kOiAnJyB9O1xyXG5cclxuICBwcm90ZWN0ZWQgZm9ybWF0OiBhbnkgPSAnZGQvbW0veXl5eSc7XHJcbiAgcHJvdGVjdGVkIGlzRGF0ZVJhbmdlSW5wdXRGb3JtYXRWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHJvdGVjdGVkIGlzU3RhcnREYXRlUmFuZ2VJbnB1dFZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkTW9kZWw6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfY2xlYW4/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/O1xyXG4gIHByaXZhdGUgX2VuZERhdGU/O1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzPzogYW55O1xyXG4gIHByaXZhdGUgX21heERhdGU6IERhdGU7XHJcbiAgcHJpdmF0ZSBfbWluRGF0ZTogRGF0ZTtcclxuICBwcml2YXRlIF9ub0F1dG9jb21wbGV0ZT86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9yZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3N0YXJ0RGF0ZT87XHJcbiAgcHJpdmF0ZSBfbG9jYWxlPzogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGxhbmd1YWdlO1xyXG4gIHByaXZhdGUgb25DaGFuZ2VNb2RlbDogYW55O1xyXG4gIHByaXZhdGUgdmFsaWRhdG9yQ2hhbmdlOiBhbnk7XHJcblxyXG4gIGdldCBpc0RhdGVSYW5nZUlucHV0VmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0RhdGVSYW5nZUlucHV0Rm9ybWF0VmFsaWQgJiYgdGhpcy5pc1N0YXJ0RGF0ZVJhbmdlSW5wdXRWYWxpZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBIYWJpbGl0YSBhw6fDo28gcGFyYSBsaW1wYXIgbyBjYW1wby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtY2xlYW4nKSBzZXQgY2xlYW4oY2xlYW46IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NsZWFuID0gY29udmVydFRvQm9vbGVhbihjbGVhbik7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xlYW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xlYW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzYWJpbGl0YSBvIGNhbXBvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZCcpIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERhdGEgZmluYWwuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWVuZC1kYXRlJykgc2V0IGVuZERhdGUoZGF0ZTogc3RyaW5nIHwgRGF0ZSkge1xyXG4gICAgdGhpcy5fZW5kRGF0ZSA9IHRoaXMuY29udmVydFBhdHRlcm5EYXRlRm9ybWF0KGRhdGUpO1xyXG4gICAgdGhpcy5kYXRlUmFuZ2UuZW5kID0gdGhpcy5lbmREYXRlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2NyZWVuQnlNb2RlbCh0aGlzLmRhdGVSYW5nZSk7XHJcbiAgICB0aGlzLnVwZGF0ZU1vZGVsKHRoaXMuZGF0ZVJhbmdlKTtcclxuICB9XHJcblxyXG4gIGdldCBlbmREYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VuZERhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhcyBsaXRlcmFpcyB1c2FkYXMgbm8gYHBvLWRhdGVwaWNrZXItcmFuZ2VgLlxyXG4gICAqXHJcbiAgICogRXhpc3RlbSBkdWFzIG1hbmVpcmFzIGRlIGN1c3RvbWl6YXIgbyBjb21wb25lbnRlLCBwYXNzYW5kbyB1bSBvYmpldG8gY29tIHRvZGFzIGFzIGxpdGVyYWlzIGRpc3BvbsOtdmVpczpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9EYXRlcGlja2VyUmFuZ2VMaXRlcmFscyA9IHtcclxuICAgKiAgICBpbnZhbGlkRm9ybWF0OiAnRGF0ZSBpbiBpbmNvbnNpc3RlbnQgZm9ybWF0JyxcclxuICAgKiAgICBzdGFydERhdGVHcmVhdGVyVGhhbkVuZERhdGU6ICdFbmQgZGF0ZSBsZXNzIHRoYW4gc3RhcnQgZGF0ZSdcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIE91IHBhc3NhbmRvIGFwZW5hcyBhcyBsaXRlcmFpcyBxdWUgZGVzZWphIGN1c3RvbWl6YXI6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvRGF0ZXBpY2tlclJhbmdlTGl0ZXJhbHMgPSB7XHJcbiAgICogICAgaW52YWxpZEZvcm1hdDogJ0RhdGUgaW4gaW5jb25zaXN0ZW50IGZvcm1hdCdcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEUgcGFyYSBjYXJyZWdhciBhcyBsaXRlcmFpcyBjdXN0b21pemFkYXMsIGJhc3RhIGFwZW5hcyBwYXNzYXIgbyBvYmpldG8gcGFyYSBvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tZGF0ZXBpY2tlci1yYW5nZVxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLWRhdGVwaWNrZXItcmFuZ2U+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IE8gb2JqZXRvIHBhZHLDo28gZGUgbGl0ZXJhaXMgc2Vyw6EgdHJhZHV6aWRvIGRlIGFjb3JkbyBjb20gbyBpZGlvbWEgZG9cclxuICAgKiBbYFBvSTE4blNlcnZpY2VgXSgvZG9jdW1lbnRhdGlvbi9wby1pMThuKSBvdSBkbyBicm93c2VyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIHNldCBsaXRlcmFscyh2YWx1ZTogUG9EYXRlcGlja2VyUmFuZ2VMaXRlcmFscykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSB7XHJcbiAgICAgICAgLi4ucG9EYXRlcGlja2VyUmFuZ2VMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgICAgICAuLi5wb0RhdGVwaWNrZXJSYW5nZUxpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXSxcclxuICAgICAgICAuLi52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSBwb0RhdGVwaWNrZXJSYW5nZUxpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsaXRlcmFscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9saXRlcmFscyB8fCBwb0RhdGVwaWNrZXJSYW5nZUxpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgdW1hIGRhdGEgbcOtbmltYSBwYXJhIG8gYHBvLWRhdGVwaWNrZXItcmFuZ2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1taW4tZGF0ZScpIHNldCBtaW5EYXRlKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSwgMCwgMCwgMCk7XHJcbiAgICAgIHNldFllYXJGcm9tMFRvMTAwKGRhdGUsIHllYXIpO1xyXG5cclxuICAgICAgdGhpcy5fbWluRGF0ZSA9IGRhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9taW5EYXRlID0gY29udmVydElzb1RvRGF0ZSh2YWx1ZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1pbkRhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgdW1hIGRhdGEgbcOheGltYSBwYXJhIG8gYHBvLWRhdGVwaWNrZXItcmFuZ2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1tYXgtZGF0ZScpIHNldCBtYXhEYXRlKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSwgMjMsIDU5LCA1OSk7XHJcbiAgICAgIHNldFllYXJGcm9tMFRvMTAwKGRhdGUsIHllYXIpO1xyXG5cclxuICAgICAgdGhpcy5fbWF4RGF0ZSA9IGRhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tYXhEYXRlID0gY29udmVydElzb1RvRGF0ZSh2YWx1ZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1heERhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBwcm9wcmllZGFkZSBuYXRpdmEgYGF1dG9jb21wbGV0ZWAgZG8gY2FtcG8gY29tbyBgb2ZmYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atbm8tYXV0b2NvbXBsZXRlJykgc2V0IG5vQXV0b2NvbXBsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9ub0F1dG9jb21wbGV0ZSA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5vQXV0b2NvbXBsZXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vQXV0b2NvbXBsZXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBxdWUgbyBjYW1wbyBzZXLDoSBzb21lbnRlIGxlaXR1cmEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlYWRvbmx5Jykgc2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZWFkb25seSA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbCh0aGlzLmRhdGVSYW5nZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVhZG9ubHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIG9icmlnYXTDs3Jpby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcmVxdWlyZWQnKSBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gY29udmVydFRvQm9vbGVhbihyZXF1aXJlZCk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKHRoaXMuZGF0ZVJhbmdlKTtcclxuICB9XHJcblxyXG4gIGdldCByZXF1aXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEYXRhIGluaWNpYWwuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXN0YXJ0LWRhdGUnKSBzZXQgc3RhcnREYXRlKGRhdGU6IHN0cmluZyB8IERhdGUpIHtcclxuICAgIHRoaXMuX3N0YXJ0RGF0ZSA9IHRoaXMuY29udmVydFBhdHRlcm5EYXRlRm9ybWF0KGRhdGUpO1xyXG4gICAgdGhpcy5kYXRlUmFuZ2Uuc3RhcnQgPSB0aGlzLnN0YXJ0RGF0ZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNjcmVlbkJ5TW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gICAgdGhpcy51cGRhdGVNb2RlbCh0aGlzLmRhdGVSYW5nZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhcnREYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0RGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJZGlvbWEgcXVlIG8gY2FsZW5kw6FyaW8gdXRpbGl6YXLDoSBwYXJhIGV4aWJpciBhcyBkYXRhcy5cclxuICAgKlxyXG4gICAqID4gTyBsb2NhbGUgcGFkcsOjbyBzZXLDoSByZWN1cGVyYWRvIGNvbSBiYXNlIG5vIFtgUG9JMThuU2VydmljZWBdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4pIG91ICpicm93c2VyKi5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9jYWxlJykgc2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5fbG9jYWxlID0gdmFsdWUubGVuZ3RoID49IDIgPyB2YWx1ZSA6IHBvTG9jYWxlRGVmYXVsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvY2FsZSA9IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlIHx8IHRoaXMubGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcG9EYXRlU2VydmljZTogUG9EYXRlU2VydmljZSwgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIG9zIGVzdGFkb3MgZGUgaGFiaWxpdGFkbyB2aWEgZm9ybXMgYXBpXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIFVzYWRhIHBhcmEgaW50ZXJjZXB0YXIgYXMgbXVkYW7Dp2FzIGUgbsOjbyBhdHVhbGl6YXIgYXV0b21hdGljYW1lbnRlIG8gTW9kZWxcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZ1bmM6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZU1vZGVsID0gZnVuYztcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIFVzYWRhIHBhcmEgaW50ZXJjZXB0YXIgYXMgbXVkYW7Dp2FzIGUgbsOjbyBhdHVhbGl6YXIgYXV0b21hdGljYW1lbnRlIG8gTW9kZWxcclxuICByZWdpc3Rlck9uVG91Y2hlZChmdW5jOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkTW9kZWwgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZT8oZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcclxuICAgIGNvbnN0IHZhbHVlOiBQb0RhdGVwaWNrZXJSYW5nZSA9IGNvbnRyb2wudmFsdWUgfHwge307XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSB2YWx1ZS5zdGFydCA/IHRoaXMuY29udmVydFBhdHRlcm5EYXRlRm9ybWF0KHZhbHVlLnN0YXJ0KSA6ICcnO1xyXG4gICAgY29uc3QgZW5kRGF0ZSA9IHZhbHVlLmVuZCA/IHRoaXMuY29udmVydFBhdHRlcm5EYXRlRm9ybWF0KHZhbHVlLmVuZCkgOiAnJztcclxuXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlZERhdGVSYW5nZUZhaWxlZChzdGFydERhdGUsIGVuZERhdGUpKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnZlcmlmeVZhbGlkRGF0ZShzdGFydERhdGUsIGVuZERhdGUpKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdGhpcy5saXRlcmFscy5pbnZhbGlkRGF0ZTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZVJhbmdlT2JqZWN0RmFpbGVkKGNvbnRyb2wudmFsdWUpIHx8IHRoaXMuZGF0ZVJhbmdlRm9ybWF0RmFpbGVkKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0aGlzLmxpdGVyYWxzLmludmFsaWRGb3JtYXQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlUmFuZ2VGYWlsZWQoc3RhcnREYXRlLCBlbmREYXRlKSkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMubGl0ZXJhbHMuc3RhcnREYXRlR3JlYXRlclRoYW5FbmREYXRlO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChzdGFydERhdGUgJiYgIXRoaXMudmFsaWRhdGVEYXRlSW5SYW5nZShzdGFydERhdGUpKSB8fCAoZW5kRGF0ZSAmJiAhdGhpcy52YWxpZGF0ZURhdGVJblJhbmdlKGVuZERhdGUpKSkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMubGl0ZXJhbHMuZGF0ZU91dE9mUGVyaW9kO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZURhdGVJblJhbmdlKHN0YXJ0RGF0ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsaWRhdGVEYXRlUmFuZ2UoY29udmVydElzb1RvRGF0ZShzdGFydERhdGUsIGZhbHNlLCBmYWxzZSksIHRoaXMuX21pbkRhdGUsIHRoaXMuX21heERhdGUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShkYXRlUmFuZ2U6IFBvRGF0ZXBpY2tlclJhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0RGF0ZVJhbmdlSW5wdXRWYWxpZGF0aW9uKCk7XHJcblxyXG4gICAgaWYgKCFkYXRlUmFuZ2UgfHwgdGhpcy5kYXRlUmFuZ2VPYmplY3RGYWlsZWQoZGF0ZVJhbmdlKSkge1xyXG4gICAgICB0aGlzLmRhdGVSYW5nZSA9IHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkYXRlUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZU1vZGVsKHRoaXMuZGF0ZVJhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlUmFuZ2VPYmplY3RGYWlsZWQoZGF0ZVJhbmdlKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKGRhdGVSYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNEYXRlUmFuZ2VPYmplY3QoZGF0ZVJhbmdlKSkge1xyXG4gICAgICB0aGlzLmRhdGVSYW5nZSA9IHtcclxuICAgICAgICBzdGFydDogdGhpcy5jb252ZXJ0UGF0dGVybkRhdGVGb3JtYXQoZGF0ZVJhbmdlLnN0YXJ0KSxcclxuICAgICAgICBlbmQ6IHRoaXMuY29udmVydFBhdHRlcm5EYXRlRm9ybWF0KGRhdGVSYW5nZS5lbmQpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKHRoaXMuZGF0ZVJhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNjcmVlbkJ5TW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRhdGVGb3JtYXRGYWlsZWQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmICF0aGlzLnBvRGF0ZVNlcnZpY2UuaXNWYWxpZElzbyh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBFeGVjdXRhIGEgZnVuw6fDo28gb25DaGFuZ2VcclxuICBwcm90ZWN0ZWQgdXBkYXRlTW9kZWwodmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgbW9kZWwgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8geyAuLi52YWx1ZSB9IDogdmFsdWU7XHJcbiAgICAvLyBRdWFuZG8gbyBpbnB1dCBuw6NvIHBvc3N1aSB1bSBmb3JtdWzDoXJpbywgZW50w6NvIGVzdGEgZnVuw6fDo28gbsOjbyDDqSByZWdpc3RyYWRhXHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZU1vZGVsKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VNb2RlbChtb2RlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNb2RlbCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBtb2RlbCA9IHsgLi4udmFsdWUgfTtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRvckNoYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckNoYW5nZShtb2RlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmVyaWZ5VmFsaWREYXRlKHN0YXJ0RGF0ZTogc3RyaW5nLCBlbmREYXRlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzdGFydERhdGUgIT09ICcnICYmIGVuZERhdGUgIT09ICcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVJc1ZhbGlkKHN0YXJ0RGF0ZSkgJiYgdGhpcy5kYXRlSXNWYWxpZChlbmREYXRlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnREYXRlICE9PSAnJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRlSXNWYWxpZChzdGFydERhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0ZUlzVmFsaWQoZW5kRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRQYXR0ZXJuRGF0ZUZvcm1hdCh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvRGF0ZVNlcnZpY2UuY29udmVydERhdGVUb0lTTyh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkYXRlUmFuZ2VGYWlsZWQoc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnBvRGF0ZVNlcnZpY2UuaXNEYXRlUmFuZ2VWYWxpZChlbmREYXRlLCBzdGFydERhdGUpIHx8ICF0aGlzLmlzU3RhcnREYXRlUmFuZ2VJbnB1dFZhbGlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkYXRlUmFuZ2VGb3JtYXRGYWlsZWQoc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdEZhaWxlZChlbmREYXRlKSB8fCB0aGlzLmRhdGVGb3JtYXRGYWlsZWQoc3RhcnREYXRlKSB8fCAhdGhpcy5pc0RhdGVSYW5nZUlucHV0Rm9ybWF0VmFsaWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRhdGVSYW5nZU9iamVjdEZhaWxlZCh2YWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmICF0aGlzLmlzRGF0ZVJhbmdlT2JqZWN0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmFuZ2VPYmplY3QodmFsdWUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RhcnQnKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZW5kJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcXVpcmVkRGF0ZVJhbmdlRmFpbGVkKHN0YXJ0RGF0ZTogc3RyaW5nLCBlbmREYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNEYXRlUmFuZ2VJbnB1dFZhbGlkICYmXHJcbiAgICAgIHJlcXVpcmVkRmFpbGVkKHRoaXMucmVxdWlyZWQsIHRoaXMuZGlzYWJsZWQsIHN0YXJ0RGF0ZSkgJiZcclxuICAgICAgcmVxdWlyZWRGYWlsZWQodGhpcy5yZXF1aXJlZCwgdGhpcy5kaXNhYmxlZCwgZW5kRGF0ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRhdGVJc1ZhbGlkKGRhdGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgW3N0clllYXIsIHN0ck1vbnRoLCBzdHJEYXldID0gZGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgY29uc3QgeWVhciA9IE51bWJlcihzdHJZZWFyKTtcclxuICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKHN0ck1vbnRoKTtcclxuICAgIGNvbnN0IGRheSA9IE51bWJlcihzdHJEYXkpO1xyXG5cclxuICAgIC8vdmVyaWZpY2HDp8OjbyBkb3MgbWVzZXMgY29tIDMxIGRpYXNcclxuICAgIGlmIChtb250aCA9PT0gMSB8fCBtb250aCA9PT0gMyB8fCBtb250aCA9PT0gNSB8fCBtb250aCA9PT0gNyB8fCBtb250aCA9PT0gOCB8fCBtb250aCA9PT0gMTAgfHwgbW9udGggPT09IDEyKSB7XHJcbiAgICAgIHJldHVybiBkYXkgPCAxIHx8IGRheSA+IDMxID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChtb250aCA9PT0gNCB8fCBtb250aCA9PT0gNiB8fCBtb250aCA9PT0gOSB8fCBtb250aCA9PT0gMTEpIHtcclxuICAgICAgLy92ZXJpZmljYcOnw6NvIGRvcyBtZXNlcyBjb20gMzAgZGlhc1xyXG4gICAgICByZXR1cm4gZGF5IDwgMSB8fCBkYXkgPiAzMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vdmVyaWZpY2FjYW8gZGUgYW5vIGJpc3NleHRvIHBhcmEgdmVyaWZpY2FyIGF0w6kgcXVhbCBkaWEgaXLDoSBvIG3DqnMgZGUgZmV2ZXJlaXJvXHJcbiAgICAgIGlmICgoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBkYXkgPCAxIHx8IGRheSA+IDI5ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXkgPCAxIHx8IGRheSA+IDI4ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVzZXREYXRlUmFuZ2VJbnB1dFZhbGlkYXRpb24oKTogdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHVwZGF0ZVNjcmVlbkJ5TW9kZWwoZGF0ZVJhbmdlOiBQb0RhdGVwaWNrZXJSYW5nZSk7XHJcbn1cclxuIl19