import { EventEmitter } from '@angular/core';
import { PoDateService } from '../../services/po-date';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoCalendarMode } from './po-calendar-mode.enum';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O `po-calendar` é um componente para seleção de datas. Ele permite uma fácil navegação clicando nas setas
 * de direcionamento e nos *labels* do ano ou mês.
 *
 * Este componente pode receber os seguintes formatos de data:
 *
 * - **Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm**
 * ```
 * this.date = '2017-11-28T00:00:00-02:00';
 * ```
 *
 * - **Data (E8601DAw.): yyyy-mm-dd**
 * ```
 * this.date = '2017-11-28';
 * ```
 *
 * - **JavaScript Date Object:**
 * ```
 * this.date = new Date(2017, 10, 28);
 * ```
 *
 * > Independentemente do formato utilizado, o componente trata o valor do *model* internamente com o
 * formato **Data (E8601DAw.): yyyy-mm-dd**.
 *
 * Importante:
 *
 * - Caso seja definida uma data fora do range da data mínima e data máxima via *ngModel* o componente mostrará
 * a data desabilitada porém o *model* não será alterado.
 * - Caso seja definida uma data inválida a mesma não será atribuída ao calendário porém o *model* manterá a data inválida.
 */
export declare class PoCalendarBaseComponent {
    poDate: PoDateService;
    private languageService;
    /** Evento disparado ao selecionar um dia do calendário. */
    change: EventEmitter<string | {
        start: any;
        end: any;
    }>;
    activateDate: any;
    value: any;
    protected onTouched: any;
    protected propagateChange: any;
    protected today: Date;
    private shortLanguage;
    private _locale;
    private _maxDate;
    private _minDate;
    private _mode;
    /**
     * @optional
     *
     * @description
     *
     * Idioma do calendário.
     *
     * > O locale padrão sera recuperado com base no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set locale(locale: string);
    get locale(): string;
    /**
     * @optional
     *
     * @description
     *
     * Define a data máxima possível de ser selecionada.
     *
     * Pode receber os seguintes formatos de data:
     *
     * - **Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm**
     * ```
     * this.date = '2017-11-28T00:00:00-02:00';
     * ```
     *
     * - **Data (E8601DAw.): yyyy-mm-dd**
     * ```
     * this.date = '2017-11-28';
     * ```
     *
     * - **JavaScript Date Object:**
     * ```
     * this.date = new Date(2017, 10, 28);
     * ```
     */
    set maxDate(maxDate: any);
    get maxDate(): any;
    /**
     * @optional
     *
     * @description
     *
     * Define a data mínima possível de ser selecionada.
     *
     * Pode receber os seguintes formatos de data:
     *
     * - **Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm**
     * ```
     * this.date = '2017-11-28T00:00:00-02:00';
     * ```
     *
     * - **Data (E8601DAw.): yyyy-mm-dd**
     * ```
     * this.date = '2017-11-28';
     * ```
     *
     * - **JavaScript Date Object:**
     * ```
     * this.date = new Date(2017, 10, 28);
     * ```
     */
    set minDate(minDate: any);
    get minDate(): any;
    /**
     * Propriedade que permite informar o modo de exibição do calendar.
     *
     * Implementa o enum `PoCalendarMode`.
     */
    set mode(value: PoCalendarMode);
    get mode(): PoCalendarMode;
    get isRange(): boolean;
    constructor(poDate: PoDateService, languageService: PoLanguageService);
    protected setActivateDate(date?: Date | string): void;
    private verifyActivateDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCalendarBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoCalendarBaseComponent, never, never, { "locale": "p-locale"; "maxDate": "p-max-date"; "minDate": "p-min-date"; "mode": "p-mode"; }, { "change": "p-change"; }, never, never, false>;
}