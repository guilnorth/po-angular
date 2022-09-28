import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { PoMask } from '../po-input/po-mask';
import { PoDatepickerIsoFormat } from './enums/po-datepicker-iso-format.enum';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
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
export declare abstract class PoDatepickerBaseComponent implements ControlValueAccessor, OnInit, Validator {
    private languageService;
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
     * Mensagem apresentada quando a data for inválida ou fora do período.
     *
     * > Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja obrigatório.
     */
    errorPattern?: string;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao sair do campo.
     */
    onblur: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao alterar valor do campo.
     */
    onchange: EventEmitter<any>;
    protected firstStart: boolean;
    protected hour: string;
    protected isExtendedISO: boolean;
    protected objMask: any;
    protected onChangeModel: any;
    protected validatorChange: any;
    protected onTouchedModel: any;
    private _format?;
    private _isoFormat;
    private _maxDate;
    private _minDate;
    private _noAutocomplete?;
    private _placeholder?;
    private shortLanguage;
    private previousValue;
    private _date;
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
     * Mensagem que aparecerá enquanto o campo não estiver preenchido.
     */
    set placeholder(placeholder: string);
    get placeholder(): string;
    /** Desabilita o campo. */
    disabled?: boolean;
    set setDisabled(disabled: string);
    /** Torna o elemento somente leitura. */
    readonly?: boolean;
    set setReadonly(readonly: string);
    /** Faz com que o campo seja obrigatório. */
    required?: boolean;
    set setRequired(required: string);
    /** Habilita ação para limpar o campo. */
    clean?: boolean;
    set setClean(clean: string);
    /**
     * @optional
     *
     * @description
     *
     * Define uma data mínima para o `po-datepicker`.
     */
    set minDate(value: string | Date);
    get minDate(): string | Date;
    /**
     * @optional
     *
     * @description
     *
     * Define uma data máxima para o `po-datepicker`.
     */
    set maxDate(value: string | Date);
    get maxDate(): string | Date;
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
    set format(value: string);
    get format(): string;
    /**
     * @optional
     *
     * @description
     *
     * Padrão de formatação para saída do *model*, independentemente do formato de entrada.
     *
     * > Veja os valores válidos no *enum* `PoDatepickerIsoFormat`.
     */
    set isoFormat(value: PoDatepickerIsoFormat);
    get isoFormat(): PoDatepickerIsoFormat;
    /**
     * @optional
     *
     * @description
     *
     * Idioma do Datepicker.
     *
     * > O locale padrão sera recuperado com base no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    _locale?: string;
    set locale(value: string);
    get locale(): string;
    constructor(languageService: PoLanguageService);
    set date(value: any);
    get date(): any;
    ngOnInit(): void;
    getDateFromString(dateString: string): Date;
    formatToDate(value: Date): string;
    controlModel(date: Date): void;
    callOnChange(value: any, retry?: boolean): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(func: any): void;
    registerOnTouched(func: any): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    protected validateModel(model: any): void;
    protected buildMask(): PoMask;
    abstract writeValue(value: any): void;
    abstract refreshValue(value: Date): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDatepickerBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDatepickerBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "name": "name"; "optional": "p-optional"; "errorPattern": "p-error-pattern"; "noAutocomplete": "p-no-autocomplete"; "placeholder": "p-placeholder"; "setDisabled": "p-disabled"; "setReadonly": "p-readonly"; "setRequired": "p-required"; "setClean": "p-clean"; "minDate": "p-min-date"; "maxDate": "p-max-date"; "format": "p-format"; "isoFormat": "p-iso-format"; "locale": "p-locale"; }, { "onblur": "p-blur"; "onchange": "p-change"; }, never, never, false>;
}
