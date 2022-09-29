import { EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoDateService } from './../../../services/po-date/po-date.service';
import { PoDatepickerRangeLiterals } from './interfaces/po-datepicker-range-literals.interface';
import { PoDatepickerRange } from './interfaces/po-datepicker-range.interface';
import * as i0 from "@angular/core";
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
export declare abstract class PoDatepickerRangeBaseComponent implements ControlValueAccessor, Validator {
    protected poDateService: PoDateService;
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
     * Evento disparado ao alterar valor do campo.
     */
    onChange: EventEmitter<any>;
    errorMessage: string;
    dateRange: PoDatepickerRange;
    protected format: any;
    protected isDateRangeInputFormatValid: boolean;
    protected isStartDateRangeInputValid: boolean;
    protected onTouchedModel: any;
    private _clean?;
    private _disabled?;
    private _endDate?;
    private _literals?;
    private _maxDate;
    private _minDate;
    private _noAutocomplete?;
    private _readonly;
    private _required?;
    private _startDate?;
    private _locale?;
    private language;
    private onChangeModel;
    private validatorChange;
    get isDateRangeInputValid(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Habilita ação para limpar o campo.
     *
     * @default `false`
     */
    set clean(clean: boolean);
    get clean(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o campo.
     *
     * @default `false`
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Data final.
     */
    set endDate(date: string | Date);
    get endDate(): string | Date;
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
    set literals(value: PoDatepickerRangeLiterals);
    get literals(): PoDatepickerRangeLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Define uma data mínima para o `po-datepicker-range`.
     */
    set minDate(value: string | Date);
    get minDate(): string | Date;
    /**
     * @optional
     *
     * @description
     *
     * Define uma data máxima para o `po-datepicker-range`.
     */
    set maxDate(value: string | Date);
    get maxDate(): string | Date;
    /**
     * @optional
     *
     * @description
     *
     * Define a propriedade nativa `autocomplete` do campo como `off`.
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
    set required(required: boolean);
    get required(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Data inicial.
     */
    set startDate(date: string | Date);
    get startDate(): string | Date;
    /**
     * @optional
     *
     * @description
     *
     * Idioma que o calendário utilizará para exibir as datas.
     *
     * > O locale padrão será recuperado com base no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set locale(value: string);
    get locale(): string;
    constructor(poDateService: PoDateService, languageService: PoLanguageService);
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(func: any): void;
    registerOnTouched(func: any): void;
    registerOnValidatorChange?(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors;
    validateDateInRange(startDate: any): boolean;
    writeValue(dateRange: PoDatepickerRange): void;
    protected dateFormatFailed(value: string): boolean;
    protected updateModel(value: any): void;
    protected validateModel(value: any): void;
    protected verifyValidDate(startDate: string, endDate: string): boolean;
    private convertPatternDateFormat;
    private dateRangeFailed;
    private dateRangeFormatFailed;
    private dateRangeObjectFailed;
    private isDateRangeObject;
    private requiredDateRangeFailed;
    private dateIsValid;
    protected abstract resetDateRangeInputValidation(): void;
    protected abstract updateScreenByModel(dateRange: PoDatepickerRange): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDatepickerRangeBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDatepickerRangeBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "help": "p-help"; "label": "p-label"; "optional": "p-optional"; "clean": "p-clean"; "disabled": "p-disabled"; "endDate": "p-end-date"; "literals": "p-literals"; "minDate": "p-min-date"; "maxDate": "p-max-date"; "noAutocomplete": "p-no-autocomplete"; "readonly": "p-readonly"; "required": "p-required"; "startDate": "p-start-date"; "locale": "p-locale"; }, { "onChange": "p-change"; }, never, never, false>;
}