import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertDateToISODate, convertDateToISOExtended, convertIsoToDate, convertToBoolean, formatYear, isTypeof, setYearFrom0To100, validateDateRange } from '../../../utils/util';
import { dateFailed, requiredFailed } from './../validators';
import { InputBoolean } from '../../../decorators';
import { PoMask } from '../po-input/po-mask';
import { PoDatepickerIsoFormat } from './enums/po-datepicker-iso-format.enum';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
const poDatepickerFormatDefault = 'dd/mm/yyyy';
/**
 * @description
 *
 * O `po-datepicker` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.
 *
 * O formato de exibição da data, ou seja, o formato que é apresentado ao usuário é o dd/mm/yyyy,
 * mas podem ser definidos outros padrões (veja mais na propriedade `p-format`).
 *
 * O idioma padrão do calendário será exibido de acordo com o navegador, caso tenha necessidade de alterar
 * use a propriedade `p-locale`.
 *
 * O datepicker aceita três formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
 * Date padrão do Javascript.
 *
 * > Por padrão, o formato de saída do *model* se ajustará conforme o formato de entrada. Se por acaso precisar controlar o valor de saída,
 * a propriedade `p-iso-format` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:
 *
 * - Formato de entrada e saída (E8601DZw) - `'2017-11-28T00:00:00-02:00'`;
 *
 * - Formato de entrada e saída (E8601DAw) - `'2017-11-28'`;
 *
 * - Formato de entrada (Date) - `new Date(2017, 10, 28)` e saída (E8601DAw) - `'2017-11-28'`;
 *
 * **Importante:**
 *
 * - Para utilizar datas com ano inferior a 100, verificar o comportamento do [`new Date`](https://www.w3schools.com/js/js_dates.asp)
 * e utilizar o método [`setFullYear`](https://www.w3schools.com/jsref/jsref_setfullyear.asp).
 * - Caso a data esteja inválida, o `model` receberá **'Data inválida'**.
 * - Caso o `input` esteja passando um `[(ngModel)]`, mas não tenha um `name`, então irá ocorrer um erro
 * do próprio Angular (`[ngModelOptions]="{standalone: true}"`).
 *
 * Exemplo:
 *
 * ```
 * <po-datepicker
 *   [(ngModel)]="pessoa.nome"
 *   [ngModelOptions]="{standalone: true}"
 * </po-datepicker>
 * ```
 *
 * > Não esqueça de importar o `FormsModule` em seu módulo, tal como para utilizar o `input default`.
 */
export class PoDatepickerBaseComponent {
    constructor(languageService) {
        this.languageService = languageService;
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
         * Mensagem apresentada quando a data for inválida ou fora do período.
         *
         * > Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja obrigatório.
         */
        this.errorPattern = '';
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao sair do campo.
         */
        this.onblur = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao alterar valor do campo.
         */
        this.onchange = new EventEmitter();
        this.firstStart = true;
        this.hour = 'T00:00:01-00:00';
        this.isExtendedISO = false;
        this.onChangeModel = null;
        this.onTouchedModel = null;
        this._format = poDatepickerFormatDefault;
        this._noAutocomplete = false;
        this._placeholder = '';
        /** Desabilita o campo. */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.disabled = false;
        /** Torna o elemento somente leitura. */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.readonly = false;
        /** Faz com que o campo seja obrigatório. */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.required = false;
        /** Habilita ação para limpar o campo. */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.clean = false;
        this.shortLanguage = this.languageService.getShortLanguage();
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
     * Mensagem que aparecerá enquanto o campo não estiver preenchido.
     */
    set placeholder(placeholder) {
        this._placeholder = isTypeof(placeholder, 'string') ? placeholder : '';
    }
    get placeholder() {
        return this._placeholder;
    }
    set setDisabled(disabled) {
        this.disabled = disabled === '' ? true : convertToBoolean(disabled);
        this.validateModel(convertDateToISOExtended(this.date, this.hour));
    }
    set setReadonly(readonly) {
        this.readonly = readonly === '' ? true : convertToBoolean(readonly);
    }
    set setRequired(required) {
        this.required = required === '' ? true : convertToBoolean(required);
        this.validateModel(convertDateToISOExtended(this.date, this.hour));
    }
    set setClean(clean) {
        this.clean = clean === '' ? true : convertToBoolean(clean);
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma data mínima para o `po-datepicker`.
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
        this.validateModel(convertDateToISOExtended(this.date, this.hour));
    }
    get minDate() {
        return this._minDate;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma data máxima para o `po-datepicker`.
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
        this.validateModel(convertDateToISOExtended(this.date, this.hour));
    }
    get maxDate() {
        return this._maxDate;
    }
    /**
     * @optional
     *
     * @description
     *
     * Formato de exibição da data.
     *
     * Valores válidos:
     *  - `dd/mm/yyyy`
     *  - `mm/dd/yyyy`
     *  - `yyyy/mm/dd`
     *
     * @default `dd/mm/yyyy`
     */
    set format(value) {
        if (value) {
            value = value.toLowerCase();
            if (value.match(/dd/) && value.match(/mm/) && value.match(/yyyy/)) {
                this._format = value;
                this.objMask = this.buildMask();
                this.refreshValue(this.date);
                return;
            }
        }
        this._format = poDatepickerFormatDefault;
        this.objMask = this.buildMask();
    }
    get format() {
        return this._format;
    }
    /**
     * @optional
     *
     * @description
     *
     * Padrão de formatação para saída do *model*, independentemente do formato de entrada.
     *
     * > Veja os valores válidos no *enum* `PoDatepickerIsoFormat`.
     */
    set isoFormat(value) {
        if (Object.values(PoDatepickerIsoFormat).includes(value)) {
            this._isoFormat = value;
            this.isExtendedISO = value === PoDatepickerIsoFormat.Extended;
        }
    }
    get isoFormat() {
        return this._isoFormat;
    }
    set locale(value) {
        if (value) {
            this._locale = value.length >= 2 ? value : poLocaleDefault;
        }
        else {
            this._locale = this.shortLanguage;
        }
    }
    get locale() {
        return this._locale || this.shortLanguage;
    }
    set date(value) {
        this._date = typeof value === 'string' ? convertIsoToDate(value, false, false) : value;
    }
    get date() {
        return this._date;
    }
    ngOnInit() {
        // Classe de máscara
        this.objMask = this.buildMask();
    }
    // Converte um objeto string em Date
    getDateFromString(dateString) {
        const day = parseInt(dateString.substring(this.format.indexOf('d'), this.format.indexOf('d') + 2), 10);
        const month = parseInt(dateString.substring(this.format.indexOf('m'), this.format.indexOf('m') + 2), 10) - 1;
        const year = parseInt(dateString.substring(this.format.indexOf('y'), this.format.indexOf('y') + 4), 10);
        const date = new Date(year, month, day);
        setYearFrom0To100(date, year);
        return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day ? date : null;
    }
    // Formata a data.
    formatToDate(value) {
        let dateFormatted = this.format;
        dateFormatted = dateFormatted.replace('dd', ('0' + value.getDate()).slice(-2));
        dateFormatted = dateFormatted.replace('mm', ('0' + (value.getMonth() + 1)).slice(-2));
        dateFormatted = dateFormatted.replace('yyyy', formatYear(value.getFullYear()));
        return dateFormatted;
    }
    // Método responsável por controlar o modelo.
    controlModel(date) {
        this.date = date;
        if (date && this.isExtendedISO) {
            this.callOnChange(convertDateToISOExtended(this.date, this.hour));
        }
        else if (date && !this.isExtendedISO) {
            this.callOnChange(convertDateToISODate(this.date));
        }
        else {
            date === undefined ? this.callOnChange('') : this.callOnChange('Data inválida');
        }
    }
    // Executa a função onChange
    callOnChange(value, retry = true) {
        if (this.onChangeModel && value !== this.previousValue) {
            this.onChangeModel(value);
            this.previousValue = value;
        }
        else if (retry) {
            setTimeout(() => this.callOnChange(value, false));
        }
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
    validate(c) {
        // Verifica se já possui algum error pattern padrão.
        this.errorPattern =
            this.errorPattern !== 'Data inválida' && this.errorPattern !== 'Data fora do período' ? this.errorPattern : '';
        if (dateFailed(c.value)) {
            this.errorPattern = this.errorPattern || 'Data inválida';
            return {
                date: {
                    valid: false
                }
            };
        }
        if (requiredFailed(this.required, this.disabled, c.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
        if (this.date && !validateDateRange(this.date, this._minDate, this._maxDate)) {
            this.errorPattern = this.errorPattern || 'Data fora do período';
            return {
                date: {
                    valid: false
                }
            };
        }
        return null;
    }
    validateModel(model) {
        if (this.validatorChange) {
            this.validatorChange(model);
        }
    }
    // Retorna um objeto do tipo PoMask com a mascara configurada.
    buildMask() {
        let mask = this.format.toUpperCase();
        mask = mask.replace(/DD/g, '99');
        mask = mask.replace(/MM/g, '99');
        mask = mask.replace(/YYYY/g, '9999');
        return new PoMask(mask, true);
    }
}
PoDatepickerBaseComponent.ɵfac = function PoDatepickerBaseComponent_Factory(t) { return new (t || PoDatepickerBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoDatepickerBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDatepickerBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], name: "name", optional: ["p-optional", "optional"], errorPattern: ["p-error-pattern", "errorPattern"], noAutocomplete: ["p-no-autocomplete", "noAutocomplete"], placeholder: ["p-placeholder", "placeholder"], setDisabled: ["p-disabled", "setDisabled"], setReadonly: ["p-readonly", "setReadonly"], setRequired: ["p-required", "setRequired"], setClean: ["p-clean", "setClean"], minDate: ["p-min-date", "minDate"], maxDate: ["p-max-date", "maxDate"], format: ["p-format", "format"], isoFormat: ["p-iso-format", "isoFormat"], locale: ["p-locale", "locale"] }, outputs: { onblur: "p-blur", onchange: "p-change" } });
__decorate([
    InputBoolean()
], PoDatepickerBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDatepickerBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], name: [{
            type: Input,
            args: ['name']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], errorPattern: [{
            type: Input,
            args: ['p-error-pattern']
        }], onblur: [{
            type: Output,
            args: ['p-blur']
        }], onchange: [{
            type: Output,
            args: ['p-change']
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
        }], minDate: [{
            type: Input,
            args: ['p-min-date']
        }], maxDate: [{
            type: Input,
            args: ['p-max-date']
        }], format: [{
            type: Input,
            args: ['p-format']
        }], isoFormat: [{
            type: Input,
            args: ['p-iso-format']
        }], locale: [{
            type: Input,
            args: ['p-locale']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0ZXBpY2tlci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1kYXRlcGlja2VyL3BvLWRhdGVwaWNrZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDbEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFFckYsTUFBTSx5QkFBeUIsR0FBVyxZQUFZLENBQUM7QUFFdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUNHO0FBRUgsTUFBTSxPQUFnQix5QkFBeUI7SUF5UTdDLFlBQW9CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQXhRdEQ7Ozs7Ozs7Ozs7V0FVRztRQUNvQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBb0JsRTs7OztXQUlHO1FBQ3VCLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRXJEOzs7Ozs7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QXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBU04sTUFBTTtrQkFBdkIsTUFBTTttQkFBQyxRQUFRO1lBU0ksUUFBUTtrQkFBM0IsTUFBTTttQkFBQyxVQUFVO1lBNkJjLGNBQWM7a0JBQTdDLEtBQUs7bUJBQUMsbUJBQW1CO1lBZUUsV0FBVztrQkFBdEMsS0FBSzttQkFBQyxlQUFlO1lBV0csV0FBVztrQkFBbkMsS0FBSzttQkFBQyxZQUFZO1lBU00sV0FBVztrQkFBbkMsS0FBSzttQkFBQyxZQUFZO1lBT00sV0FBVztrQkFBbkMsS0FBSzttQkFBQyxZQUFZO1lBU0csUUFBUTtrQkFBN0IsS0FBSzttQkFBQyxTQUFTO1lBV1MsT0FBTztrQkFBL0IsS0FBSzttQkFBQyxZQUFZO1lBMEJNLE9BQU87a0JBQS9CLEtBQUs7bUJBQUMsWUFBWTtZQWlDSSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUEyQlUsU0FBUztrQkFBbkMsS0FBSzttQkFBQyxjQUFjO1lBc0JFLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjb252ZXJ0RGF0ZVRvSVNPRGF0ZSxcclxuICBjb252ZXJ0RGF0ZVRvSVNPRXh0ZW5kZWQsXHJcbiAgY29udmVydElzb1RvRGF0ZSxcclxuICBjb252ZXJ0VG9Cb29sZWFuLFxyXG4gIGZvcm1hdFllYXIsXHJcbiAgaXNUeXBlb2YsXHJcbiAgc2V0WWVhckZyb20wVG8xMDAsXHJcbiAgdmFsaWRhdGVEYXRlUmFuZ2VcclxufSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgZGF0ZUZhaWxlZCwgcmVxdWlyZWRGYWlsZWQgfSBmcm9tICcuLy4uL3ZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgUG9NYXNrIH0gZnJvbSAnLi4vcG8taW5wdXQvcG8tbWFzayc7XHJcblxyXG5pbXBvcnQgeyBQb0RhdGVwaWNrZXJJc29Gb3JtYXQgfSBmcm9tICcuL2VudW1zL3BvLWRhdGVwaWNrZXItaXNvLWZvcm1hdC5lbnVtJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5cclxuY29uc3QgcG9EYXRlcGlja2VyRm9ybWF0RGVmYXVsdDogc3RyaW5nID0gJ2RkL21tL3l5eXknO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1kYXRlcGlja2VyYCDDqSB1bSBjb21wb25lbnRlIGVzcGVjw61maWNvIHBhcmEgbWFuaXB1bGHDp8OjbyBkZSBkYXRhcyBwZXJtaXRpbmRvIGEgZGlnaXRhw6fDo28gZSAvIG91IHNlbGXDp8Ojby5cclxuICpcclxuICogTyBmb3JtYXRvIGRlIGV4aWJpw6fDo28gZGEgZGF0YSwgb3Ugc2VqYSwgbyBmb3JtYXRvIHF1ZSDDqSBhcHJlc2VudGFkbyBhbyB1c3XDoXJpbyDDqSBvIGRkL21tL3l5eXksXHJcbiAqIG1hcyBwb2RlbSBzZXIgZGVmaW5pZG9zIG91dHJvcyBwYWRyw7VlcyAodmVqYSBtYWlzIG5hIHByb3ByaWVkYWRlIGBwLWZvcm1hdGApLlxyXG4gKlxyXG4gKiBPIGlkaW9tYSBwYWRyw6NvIGRvIGNhbGVuZMOhcmlvIHNlcsOhIGV4aWJpZG8gZGUgYWNvcmRvIGNvbSBvIG5hdmVnYWRvciwgY2FzbyB0ZW5oYSBuZWNlc3NpZGFkZSBkZSBhbHRlcmFyXHJcbiAqIHVzZSBhIHByb3ByaWVkYWRlIGBwLWxvY2FsZWAuXHJcbiAqXHJcbiAqIE8gZGF0ZXBpY2tlciBhY2VpdGEgdHLDqnMgZm9ybWF0b3MgZGUgZGF0YTogbyBFODYwMURadyAoeXl5eS1tbS1kZFRoaDptbTpzcyt8LWhoOm1tKSwgbyBFODYwMURBdyAoeXl5eS1tbS1kZCkgZSBvXHJcbiAqIERhdGUgcGFkcsOjbyBkbyBKYXZhc2NyaXB0LlxyXG4gKlxyXG4gKiA+IFBvciBwYWRyw6NvLCBvIGZvcm1hdG8gZGUgc2HDrWRhIGRvICptb2RlbCogc2UgYWp1c3RhcsOhIGNvbmZvcm1lIG8gZm9ybWF0byBkZSBlbnRyYWRhLiBTZSBwb3IgYWNhc28gcHJlY2lzYXIgY29udHJvbGFyIG8gdmFsb3IgZGUgc2HDrWRhLFxyXG4gKiBhIHByb3ByaWVkYWRlIGBwLWlzby1mb3JtYXRgIHByb3bDqiBlc3NlIGNvbnRyb2xlIGluZGVwZW5kZW50ZW1lbnRlIGRvIGZvcm1hdG8gZGUgZW50cmFkYS4gVmVqYSBhYmFpeG8gb3MgZm9ybWF0b3MgZGlzcG9uw612ZWlzOlxyXG4gKlxyXG4gKiAtIEZvcm1hdG8gZGUgZW50cmFkYSBlIHNhw61kYSAoRTg2MDFEWncpIC0gYCcyMDE3LTExLTI4VDAwOjAwOjAwLTAyOjAwJ2A7XHJcbiAqXHJcbiAqIC0gRm9ybWF0byBkZSBlbnRyYWRhIGUgc2HDrWRhIChFODYwMURBdykgLSBgJzIwMTctMTEtMjgnYDtcclxuICpcclxuICogLSBGb3JtYXRvIGRlIGVudHJhZGEgKERhdGUpIC0gYG5ldyBEYXRlKDIwMTcsIDEwLCAyOClgIGUgc2HDrWRhIChFODYwMURBdykgLSBgJzIwMTctMTEtMjgnYDtcclxuICpcclxuICogKipJbXBvcnRhbnRlOioqXHJcbiAqXHJcbiAqIC0gUGFyYSB1dGlsaXphciBkYXRhcyBjb20gYW5vIGluZmVyaW9yIGEgMTAwLCB2ZXJpZmljYXIgbyBjb21wb3J0YW1lbnRvIGRvIFtgbmV3IERhdGVgXShodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2pzL2pzX2RhdGVzLmFzcClcclxuICogZSB1dGlsaXphciBvIG3DqXRvZG8gW2BzZXRGdWxsWWVhcmBdKGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vanNyZWYvanNyZWZfc2V0ZnVsbHllYXIuYXNwKS5cclxuICogLSBDYXNvIGEgZGF0YSBlc3RlamEgaW52w6FsaWRhLCBvIGBtb2RlbGAgcmVjZWJlcsOhICoqJ0RhdGEgaW52w6FsaWRhJyoqLlxyXG4gKiAtIENhc28gbyBgaW5wdXRgIGVzdGVqYSBwYXNzYW5kbyB1bSBgWyhuZ01vZGVsKV1gLCBtYXMgbsOjbyB0ZW5oYSB1bSBgbmFtZWAsIGVudMOjbyBpcsOhIG9jb3JyZXIgdW0gZXJyb1xyXG4gKiBkbyBwcsOzcHJpbyBBbmd1bGFyIChgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiYCkuXHJcbiAqXHJcbiAqIEV4ZW1wbG86XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8cG8tZGF0ZXBpY2tlclxyXG4gKiAgIFsobmdNb2RlbCldPVwicGVzc29hLm5vbWVcIlxyXG4gKiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gKiA8L3BvLWRhdGVwaWNrZXI+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiA+IE7Do28gZXNxdWXDp2EgZGUgaW1wb3J0YXIgbyBgRm9ybXNNb2R1bGVgIGVtIHNldSBtw7NkdWxvLCB0YWwgY29tbyBwYXJhIHV0aWxpemFyIG8gYGlucHV0IGRlZmF1bHRgLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0RhdGVwaWNrZXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgVmFsaWRhdG9yIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIGZvY28gbm8gZWxlbWVudG8gYW8gc2VyIGluaWNpYWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG1haXMgZGUgdW0gZWxlbWVudG8gc2VqYSBjb25maWd1cmFkbyBjb20gZXNzYSBwcm9wcmllZGFkZSwgYXBlbmFzIG8gw7psdGltbyBlbGVtZW50byBkZWNsYXJhZG8gY29tIGVsYSB0ZXLDoSBvIGZvY28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8tZm9jdXMnKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qIE5vbWUgZG8gY29tcG9uZW50ZSBkYXRlcGlja2VyLiAqL1xyXG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBhIGluZGljYcOnw6NvIGRlIGNhbXBvIG9wY2lvbmFsIHNlcsOhIGV4aWJpZGEuXHJcbiAgICpcclxuICAgKiA+IE7Do28gc2Vyw6EgZXhpYmlkYSBhIGluZGljYcOnw6NvIHNlOlxyXG4gICAqIC0gTyBjYW1wbyBjb250ZXIgYHAtcmVxdWlyZWRgO1xyXG4gICAqIC0gTsOjbyBwb3NzdWlyIGBwLWhlbHBgIGUvb3UgYHAtbGFiZWxgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcHRpb25hbCcpIG9wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBNZW5zYWdlbSBhcHJlc2VudGFkYSBxdWFuZG8gYSBkYXRhIGZvciBpbnbDoWxpZGEgb3UgZm9yYSBkbyBwZXLDrW9kby5cclxuICAgKlxyXG4gICAqID4gRXN0YSBtZW5zYWdlbSBuw6NvIMOpIGFwcmVzZW50YWRhIHF1YW5kbyBvIGNhbXBvIGVzdGl2ZXIgdmF6aW8sIG1lc21vIHF1ZSBlbGUgc2VqYSBvYnJpZ2F0w7NyaW8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWVycm9yLXBhdHRlcm4nKSBlcnJvclBhdHRlcm4/OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gYW8gc2FpciBkbyBjYW1wby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWJsdXInKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGFsdGVyYXIgdmFsb3IgZG8gY2FtcG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UnKSBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIGZpcnN0U3RhcnQgPSB0cnVlO1xyXG4gIHByb3RlY3RlZCBob3VyOiBzdHJpbmcgPSAnVDAwOjAwOjAxLTAwOjAwJztcclxuICBwcm90ZWN0ZWQgaXNFeHRlbmRlZElTTzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBvYmpNYXNrOiBhbnk7XHJcbiAgcHJvdGVjdGVkIG9uQ2hhbmdlTW9kZWw6IGFueSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRvckNoYW5nZTogYW55O1xyXG4gIHByb3RlY3RlZCBvblRvdWNoZWRNb2RlbDogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfZm9ybWF0Pzogc3RyaW5nID0gcG9EYXRlcGlja2VyRm9ybWF0RGVmYXVsdDtcclxuICBwcml2YXRlIF9pc29Gb3JtYXQ6IFBvRGF0ZXBpY2tlcklzb0Zvcm1hdDtcclxuICBwcml2YXRlIF9tYXhEYXRlOiBEYXRlO1xyXG4gIHByaXZhdGUgX21pbkRhdGU6IERhdGU7XHJcbiAgcHJpdmF0ZSBfbm9BdXRvY29tcGxldGU/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI/OiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIHNob3J0TGFuZ3VhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IGFueTtcclxuICBwcml2YXRlIF9kYXRlOiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgcHJvcHJpZWRhZGUgbmF0aXZhIGBhdXRvY29tcGxldGVgIGRvIGNhbXBvIGNvbW8gYG9mZmAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW5vLWF1dG9jb21wbGV0ZScpIHNldCBub0F1dG9jb21wbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbm9BdXRvY29tcGxldGUgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBub0F1dG9jb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0F1dG9jb21wbGV0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNZW5zYWdlbSBxdWUgYXBhcmVjZXLDoSBlbnF1YW50byBvIGNhbXBvIG7Do28gZXN0aXZlciBwcmVlbmNoaWRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wbGFjZWhvbGRlcicpIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IGlzVHlwZW9mKHBsYWNlaG9sZGVyLCAnc3RyaW5nJykgPyBwbGFjZWhvbGRlciA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqIERlc2FiaWxpdGEgbyBjYW1wby4gKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZCcpIHNldCBzZXREaXNhYmxlZChkaXNhYmxlZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4oZGlzYWJsZWQpO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbChjb252ZXJ0RGF0ZVRvSVNPRXh0ZW5kZWQodGhpcy5kYXRlLCB0aGlzLmhvdXIpKTtcclxuICB9XHJcblxyXG4gIC8qKiBUb3JuYSBvIGVsZW1lbnRvIHNvbWVudGUgbGVpdHVyYS4gKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHJlYWRvbmx5PzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1yZWFkb25seScpIHNldCBzZXRSZWFkb25seShyZWFkb25seTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlYWRvbmx5ID0gcmVhZG9ubHkgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4ocmVhZG9ubHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZheiBjb20gcXVlIG8gY2FtcG8gc2VqYSBvYnJpZ2F0w7NyaW8uICovXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcclxuICByZXF1aXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoJ3AtcmVxdWlyZWQnKSBzZXQgc2V0UmVxdWlyZWQocmVxdWlyZWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKHJlcXVpcmVkKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwoY29udmVydERhdGVUb0lTT0V4dGVuZGVkKHRoaXMuZGF0ZSwgdGhpcy5ob3VyKSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFiaWxpdGEgYcOnw6NvIHBhcmEgbGltcGFyIG8gY2FtcG8uICovXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcclxuICBjbGVhbj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoJ3AtY2xlYW4nKSBzZXQgc2V0Q2xlYW4oY2xlYW46IHN0cmluZykge1xyXG4gICAgdGhpcy5jbGVhbiA9IGNsZWFuID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKGNsZWFuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgdW1hIGRhdGEgbcOtbmltYSBwYXJhIG8gYHBvLWRhdGVwaWNrZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1taW4tZGF0ZScpIHNldCBtaW5EYXRlKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSwgMCwgMCwgMCk7XHJcbiAgICAgIHNldFllYXJGcm9tMFRvMTAwKGRhdGUsIHllYXIpO1xyXG5cclxuICAgICAgdGhpcy5fbWluRGF0ZSA9IGRhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9taW5EYXRlID0gY29udmVydElzb1RvRGF0ZSh2YWx1ZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNb2RlbChjb252ZXJ0RGF0ZVRvSVNPRXh0ZW5kZWQodGhpcy5kYXRlLCB0aGlzLmhvdXIpKTtcclxuICB9XHJcblxyXG4gIGdldCBtaW5EYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbkRhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHVtYSBkYXRhIG3DoXhpbWEgcGFyYSBvIGBwby1kYXRlcGlja2VyYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbWF4LWRhdGUnKSBzZXQgbWF4RGF0ZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICBjb25zdCB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCB2YWx1ZS5nZXRNb250aCgpLCB2YWx1ZS5nZXREYXRlKCksIDIzLCA1OSwgNTkpO1xyXG4gICAgICBzZXRZZWFyRnJvbTBUbzEwMChkYXRlLCB5ZWFyKTtcclxuXHJcbiAgICAgIHRoaXMuX21heERhdGUgPSBkYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbWF4RGF0ZSA9IGNvbnZlcnRJc29Ub0RhdGUodmFsdWUsIGZhbHNlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwoY29udmVydERhdGVUb0lTT0V4dGVuZGVkKHRoaXMuZGF0ZSwgdGhpcy5ob3VyKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4RGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEZvcm1hdG8gZGUgZXhpYmnDp8OjbyBkYSBkYXRhLlxyXG4gICAqXHJcbiAgICogVmFsb3JlcyB2w6FsaWRvczpcclxuICAgKiAgLSBgZGQvbW0veXl5eWBcclxuICAgKiAgLSBgbW0vZGQveXl5eWBcclxuICAgKiAgLSBgeXl5eS9tbS9kZGBcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBkZC9tbS95eXl5YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1mb3JtYXQnKSBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICh2YWx1ZS5tYXRjaCgvZGQvKSAmJiB2YWx1ZS5tYXRjaCgvbW0vKSAmJiB2YWx1ZS5tYXRjaCgveXl5eS8pKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vYmpNYXNrID0gdGhpcy5idWlsZE1hc2soKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hWYWx1ZSh0aGlzLmRhdGUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybWF0ID0gcG9EYXRlcGlja2VyRm9ybWF0RGVmYXVsdDtcclxuICAgIHRoaXMub2JqTWFzayA9IHRoaXMuYnVpbGRNYXNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQYWRyw6NvIGRlIGZvcm1hdGHDp8OjbyBwYXJhIHNhw61kYSBkbyAqbW9kZWwqLCBpbmRlcGVuZGVudGVtZW50ZSBkbyBmb3JtYXRvIGRlIGVudHJhZGEuXHJcbiAgICpcclxuICAgKiA+IFZlamEgb3MgdmFsb3JlcyB2w6FsaWRvcyBubyAqZW51bSogYFBvRGF0ZXBpY2tlcklzb0Zvcm1hdGAuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWlzby1mb3JtYXQnKSBzZXQgaXNvRm9ybWF0KHZhbHVlOiBQb0RhdGVwaWNrZXJJc29Gb3JtYXQpIHtcclxuICAgIGlmIChPYmplY3QudmFsdWVzKFBvRGF0ZXBpY2tlcklzb0Zvcm1hdCkuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2lzb0Zvcm1hdCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmlzRXh0ZW5kZWRJU08gPSB2YWx1ZSA9PT0gUG9EYXRlcGlja2VySXNvRm9ybWF0LkV4dGVuZGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzb0Zvcm1hdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pc29Gb3JtYXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSWRpb21hIGRvIERhdGVwaWNrZXIuXHJcbiAgICpcclxuICAgKiA+IE8gbG9jYWxlIHBhZHLDo28gc2VyYSByZWN1cGVyYWRvIGNvbSBiYXNlIG5vIFtgUG9JMThuU2VydmljZWBdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4pIG91ICpicm93c2VyKi5cclxuICAgKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIF9sb2NhbGU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCdwLWxvY2FsZScpIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlLmxlbmd0aCA+PSAyID8gdmFsdWUgOiBwb0xvY2FsZURlZmF1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2NhbGUgPSB0aGlzLnNob3J0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlIHx8IHRoaXMuc2hvcnRMYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zaG9ydExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhdGUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fZGF0ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBjb252ZXJ0SXNvVG9EYXRlKHZhbHVlLCBmYWxzZSwgZmFsc2UpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBDbGFzc2UgZGUgbcOhc2NhcmFcclxuICAgIHRoaXMub2JqTWFzayA9IHRoaXMuYnVpbGRNYXNrKCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0ZSB1bSBvYmpldG8gc3RyaW5nIGVtIERhdGVcclxuICBnZXREYXRlRnJvbVN0cmluZyhkYXRlU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KGRhdGVTdHJpbmcuc3Vic3RyaW5nKHRoaXMuZm9ybWF0LmluZGV4T2YoJ2QnKSwgdGhpcy5mb3JtYXQuaW5kZXhPZignZCcpICsgMiksIDEwKTtcclxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZGF0ZVN0cmluZy5zdWJzdHJpbmcodGhpcy5mb3JtYXQuaW5kZXhPZignbScpLCB0aGlzLmZvcm1hdC5pbmRleE9mKCdtJykgKyAyKSwgMTApIC0gMTtcclxuICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlU3RyaW5nLnN1YnN0cmluZyh0aGlzLmZvcm1hdC5pbmRleE9mKCd5JyksIHRoaXMuZm9ybWF0LmluZGV4T2YoJ3knKSArIDQpLCAxMCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xyXG5cclxuICAgIHNldFllYXJGcm9tMFRvMTAwKGRhdGUsIHllYXIpO1xyXG5cclxuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZGF0ZS5nZXRNb250aCgpID09PSBtb250aCAmJiBkYXRlLmdldERhdGUoKSA9PT0gZGF5ID8gZGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBGb3JtYXRhIGEgZGF0YS5cclxuICBmb3JtYXRUb0RhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIGxldCBkYXRlRm9ybWF0dGVkID0gdGhpcy5mb3JtYXQ7XHJcblxyXG4gICAgZGF0ZUZvcm1hdHRlZCA9IGRhdGVGb3JtYXR0ZWQucmVwbGFjZSgnZGQnLCAoJzAnICsgdmFsdWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikpO1xyXG4gICAgZGF0ZUZvcm1hdHRlZCA9IGRhdGVGb3JtYXR0ZWQucmVwbGFjZSgnbW0nLCAoJzAnICsgKHZhbHVlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpKTtcclxuICAgIGRhdGVGb3JtYXR0ZWQgPSBkYXRlRm9ybWF0dGVkLnJlcGxhY2UoJ3l5eXknLCBmb3JtYXRZZWFyKHZhbHVlLmdldEZ1bGxZZWFyKCkpKTtcclxuXHJcbiAgICByZXR1cm4gZGF0ZUZvcm1hdHRlZDtcclxuICB9XHJcblxyXG4gIC8vIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBjb250cm9sYXIgbyBtb2RlbG8uXHJcbiAgY29udHJvbE1vZGVsKGRhdGU6IERhdGUpIHtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICBpZiAoZGF0ZSAmJiB0aGlzLmlzRXh0ZW5kZWRJU08pIHtcclxuICAgICAgdGhpcy5jYWxsT25DaGFuZ2UoY29udmVydERhdGVUb0lTT0V4dGVuZGVkKHRoaXMuZGF0ZSwgdGhpcy5ob3VyKSk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGUgJiYgIXRoaXMuaXNFeHRlbmRlZElTTykge1xyXG4gICAgICB0aGlzLmNhbGxPbkNoYW5nZShjb252ZXJ0RGF0ZVRvSVNPRGF0ZSh0aGlzLmRhdGUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGUgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsbE9uQ2hhbmdlKCcnKSA6IHRoaXMuY2FsbE9uQ2hhbmdlKCdEYXRhIGludsOhbGlkYScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRXhlY3V0YSBhIGZ1bsOnw6NvIG9uQ2hhbmdlXHJcbiAgY2FsbE9uQ2hhbmdlKHZhbHVlOiBhbnksIHJldHJ5OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKHRoaXMub25DaGFuZ2VNb2RlbCAmJiB2YWx1ZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VNb2RlbCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIGlmIChyZXRyeSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsbE9uQ2hhbmdlKHZhbHVlLCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gVXNhZGEgcGFyYSBpbnRlcmNlcHRhciBvcyBlc3RhZG9zIGRlIGhhYmlsaXRhZG8gdmlhIGZvcm1zIGFwaVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIGFzIG11ZGFuw6dhcyBlIG7Do28gYXR1YWxpemFyIGF1dG9tYXRpY2FtZW50ZSBvIE1vZGVsXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmdW5jOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VNb2RlbCA9IGZ1bmM7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIGFzIG11ZGFuw6dhcyBlIG7Do28gYXR1YWxpemFyIGF1dG9tYXRpY2FtZW50ZSBvIE1vZGVsXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZnVuYzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZE1vZGVsID0gZnVuYztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpIHtcclxuICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIC8vIFZlcmlmaWNhIHNlIGrDoSBwb3NzdWkgYWxndW0gZXJyb3IgcGF0dGVybiBwYWRyw6NvLlxyXG4gICAgdGhpcy5lcnJvclBhdHRlcm4gPVxyXG4gICAgICB0aGlzLmVycm9yUGF0dGVybiAhPT0gJ0RhdGEgaW52w6FsaWRhJyAmJiB0aGlzLmVycm9yUGF0dGVybiAhPT0gJ0RhdGEgZm9yYSBkbyBwZXLDrW9kbycgPyB0aGlzLmVycm9yUGF0dGVybiA6ICcnO1xyXG5cclxuICAgIGlmIChkYXRlRmFpbGVkKGMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JQYXR0ZXJuID0gdGhpcy5lcnJvclBhdHRlcm4gfHwgJ0RhdGEgaW52w6FsaWRhJztcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXF1aXJlZEZhaWxlZCh0aGlzLnJlcXVpcmVkLCB0aGlzLmRpc2FibGVkLCBjLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZSAmJiAhdmFsaWRhdGVEYXRlUmFuZ2UodGhpcy5kYXRlLCB0aGlzLl9taW5EYXRlLCB0aGlzLl9tYXhEYXRlKSkge1xyXG4gICAgICB0aGlzLmVycm9yUGF0dGVybiA9IHRoaXMuZXJyb3JQYXR0ZXJuIHx8ICdEYXRhIGZvcmEgZG8gcGVyw61vZG8nO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNb2RlbChtb2RlbDogYW55KSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0b3JDaGFuZ2UpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UobW9kZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmV0b3JuYSB1bSBvYmpldG8gZG8gdGlwbyBQb01hc2sgY29tIGEgbWFzY2FyYSBjb25maWd1cmFkYS5cclxuICBwcm90ZWN0ZWQgYnVpbGRNYXNrKCkge1xyXG4gICAgbGV0IG1hc2sgPSB0aGlzLmZvcm1hdC50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIG1hc2sgPSBtYXNrLnJlcGxhY2UoL0REL2csICc5OScpO1xyXG4gICAgbWFzayA9IG1hc2sucmVwbGFjZSgvTU0vZywgJzk5Jyk7XHJcbiAgICBtYXNrID0gbWFzay5yZXBsYWNlKC9ZWVlZL2csICc5OTk5Jyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb01hc2sobWFzaywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xyXG5cclxuICBhYnN0cmFjdCByZWZyZXNoVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkO1xyXG59XHJcbiJdfQ==