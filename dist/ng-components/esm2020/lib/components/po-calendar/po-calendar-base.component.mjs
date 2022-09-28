import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { poLocales } from '../../services/po-language/po-language.constant';
import { PoCalendarMode } from './po-calendar-mode.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-date";
import * as i2 from "../../services/po-language/po-language.service";
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
export class PoCalendarBaseComponent {
    constructor(poDate, languageService) {
        this.poDate = poDate;
        this.languageService = languageService;
        /** Evento disparado ao selecionar um dia do calendário. */
        this.change = new EventEmitter();
        this.onTouched = null;
        this.propagateChange = null;
        this.today = new Date();
        this._locale = this.languageService.getShortLanguage();
        this.shortLanguage = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Idioma do calendário.
     *
     * > O locale padrão sera recuperado com base no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set locale(locale) {
        this._locale = poLocales.includes(locale) ? locale : this.shortLanguage;
    }
    get locale() {
        return this._locale;
    }
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
    set maxDate(maxDate) {
        this._maxDate = this.poDate.getDateForDateRange(maxDate, false);
    }
    get maxDate() {
        return this._maxDate;
    }
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
    set minDate(minDate) {
        this._minDate = this.poDate.getDateForDateRange(minDate, true);
    }
    get minDate() {
        return this._minDate;
    }
    /**
     * Propriedade que permite informar o modo de exibição do calendar.
     *
     * Implementa o enum `PoCalendarMode`.
     */
    set mode(value) {
        this._mode = value;
        this.setActivateDate();
    }
    get mode() {
        return this._mode;
    }
    get isRange() {
        return this.mode === PoCalendarMode.Range;
    }
    setActivateDate(date) {
        const activateDate = date ? date : this.verifyActivateDate();
        if (this.isRange) {
            const checkedStart = typeof activateDate === 'string' ? this.poDate.convertIsoToDate(activateDate) : new Date(activateDate);
            const checkedEnd = new Date(new Date(checkedStart).setMonth(checkedStart.getMonth() + 1));
            this.activateDate = { start: checkedStart, end: checkedEnd };
        }
        else {
            this.activateDate = new Date(activateDate);
        }
    }
    verifyActivateDate() {
        let today = this.today;
        if (this.minDate && this.minDate > this.today) {
            today = this.minDate;
        }
        else if (this.maxDate && this.maxDate < this.today) {
            today = this.maxDate;
        }
        return today;
    }
}
PoCalendarBaseComponent.ɵfac = function PoCalendarBaseComponent_Factory(t) { return new (t || PoCalendarBaseComponent)(i0.ɵɵdirectiveInject(i1.PoDateService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoCalendarBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoCalendarBaseComponent, inputs: { locale: ["p-locale", "locale"], maxDate: ["p-max-date", "maxDate"], minDate: ["p-min-date", "minDate"], mode: ["p-mode", "mode"] }, outputs: { change: "p-change" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCalendarBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoDateService }, { type: i2.PoLanguageService }]; }, { change: [{
            type: Output,
            args: ['p-change']
        }], locale: [{
            type: Input,
            args: ['p-locale']
        }], maxDate: [{
            type: Input,
            args: ['p-max-date']
        }], minDate: [{
            type: Input,
            args: ['p-min-date']
        }], mode: [{
            type: Input,
            args: ['p-mode']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2FsZW5kYXItYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2FsZW5kYXIvcG8tY2FsZW5kYXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRXpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JHO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQWtIbEMsWUFBbUIsTUFBcUIsRUFBVSxlQUFrQztRQUFqRSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBakhwRiwyREFBMkQ7UUFDdkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBSy9ELGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBUSxJQUFJLENBQUM7UUFDNUIsVUFBSyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFHM0IsWUFBTyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQXVHaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBbkdEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBdUIsTUFBTSxDQUFDLE1BQWM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUks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bUJBQUMsWUFBWTtZQVlFLElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tZGF0ZSc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvQ2FsZW5kYXJNb2RlIH0gZnJvbSAnLi9wby1jYWxlbmRhci1tb2RlLmVudW0nO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1jYWxlbmRhcmAgw6kgdW0gY29tcG9uZW50ZSBwYXJhIHNlbGXDp8OjbyBkZSBkYXRhcy4gRWxlIHBlcm1pdGUgdW1hIGbDoWNpbCBuYXZlZ2HDp8OjbyBjbGljYW5kbyBuYXMgc2V0YXNcclxuICogZGUgZGlyZWNpb25hbWVudG8gZSBub3MgKmxhYmVscyogZG8gYW5vIG91IG3DqnMuXHJcbiAqXHJcbiAqIEVzdGUgY29tcG9uZW50ZSBwb2RlIHJlY2ViZXIgb3Mgc2VndWludGVzIGZvcm1hdG9zIGRlIGRhdGE6XHJcbiAqXHJcbiAqIC0gKipEYXRhIGUgaG9yYSBjb21iaW5hZG9zIChFODYwMURadyk6IHl5eXktbW0tZGRUaGg6bW06c3MrfC1oaDptbSoqXHJcbiAqIGBgYFxyXG4gKiB0aGlzLmRhdGUgPSAnMjAxNy0xMS0yOFQwMDowMDowMC0wMjowMCc7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAtICoqRGF0YSAoRTg2MDFEQXcuKTogeXl5eS1tbS1kZCoqXHJcbiAqIGBgYFxyXG4gKiB0aGlzLmRhdGUgPSAnMjAxNy0xMS0yOCc7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAtICoqSmF2YVNjcmlwdCBEYXRlIE9iamVjdDoqKlxyXG4gKiBgYGBcclxuICogdGhpcy5kYXRlID0gbmV3IERhdGUoMjAxNywgMTAsIDI4KTtcclxuICogYGBgXHJcbiAqXHJcbiAqID4gSW5kZXBlbmRlbnRlbWVudGUgZG8gZm9ybWF0byB1dGlsaXphZG8sIG8gY29tcG9uZW50ZSB0cmF0YSBvIHZhbG9yIGRvICptb2RlbCogaW50ZXJuYW1lbnRlIGNvbSBvXHJcbiAqIGZvcm1hdG8gKipEYXRhIChFODYwMURBdy4pOiB5eXl5LW1tLWRkKiouXHJcbiAqXHJcbiAqIEltcG9ydGFudGU6XHJcbiAqXHJcbiAqIC0gQ2FzbyBzZWphIGRlZmluaWRhIHVtYSBkYXRhIGZvcmEgZG8gcmFuZ2UgZGEgZGF0YSBtw61uaW1hIGUgZGF0YSBtw6F4aW1hIHZpYSAqbmdNb2RlbCogbyBjb21wb25lbnRlIG1vc3RyYXLDoVxyXG4gKiBhIGRhdGEgZGVzYWJpbGl0YWRhIHBvcsOpbSBvICptb2RlbCogbsOjbyBzZXLDoSBhbHRlcmFkby5cclxuICogLSBDYXNvIHNlamEgZGVmaW5pZGEgdW1hIGRhdGEgaW52w6FsaWRhIGEgbWVzbWEgbsOjbyBzZXLDoSBhdHJpYnXDrWRhIGFvIGNhbGVuZMOhcmlvIHBvcsOpbSBvICptb2RlbCogbWFudGVyw6EgYSBkYXRhIGludsOhbGlkYS5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9DYWxlbmRhckJhc2VDb21wb25lbnQge1xyXG4gIC8qKiBFdmVudG8gZGlzcGFyYWRvIGFvIHNlbGVjaW9uYXIgdW0gZGlhIGRvIGNhbGVuZMOhcmlvLiAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlJykgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IHN0YXJ0OyBlbmQgfT4oKTtcclxuXHJcbiAgYWN0aXZhdGVEYXRlO1xyXG4gIHZhbHVlO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiBhbnkgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBwcm9wYWdhdGVDaGFuZ2U6IGFueSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBzaG9ydExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogRGF0ZTtcclxuICBwcml2YXRlIF9taW5EYXRlOiBEYXRlO1xyXG4gIHByaXZhdGUgX21vZGU6IFBvQ2FsZW5kYXJNb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSWRpb21hIGRvIGNhbGVuZMOhcmlvLlxyXG4gICAqXHJcbiAgICogPiBPIGxvY2FsZSBwYWRyw6NvIHNlcmEgcmVjdXBlcmFkbyBjb20gYmFzZSBubyBbYFBvSTE4blNlcnZpY2VgXSgvZG9jdW1lbnRhdGlvbi9wby1pMThuKSBvdSAqYnJvd3NlciouXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxvY2FsZScpIHNldCBsb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IHBvTG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUpID8gbG9jYWxlIDogdGhpcy5zaG9ydExhbmd1YWdlO1xyXG4gIH1cclxuICBnZXQgbG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBkYXRhIG3DoXhpbWEgcG9zc8OtdmVsIGRlIHNlciBzZWxlY2lvbmFkYS5cclxuICAgKlxyXG4gICAqIFBvZGUgcmVjZWJlciBvcyBzZWd1aW50ZXMgZm9ybWF0b3MgZGUgZGF0YTpcclxuICAgKlxyXG4gICAqIC0gKipEYXRhIGUgaG9yYSBjb21iaW5hZG9zIChFODYwMURadyk6IHl5eXktbW0tZGRUaGg6bW06c3MrfC1oaDptbSoqXHJcbiAgICogYGBgXHJcbiAgICogdGhpcy5kYXRlID0gJzIwMTctMTEtMjhUMDA6MDA6MDAtMDI6MDAnO1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogLSAqKkRhdGEgKEU4NjAxREF3Lik6IHl5eXktbW0tZGQqKlxyXG4gICAqIGBgYFxyXG4gICAqIHRoaXMuZGF0ZSA9ICcyMDE3LTExLTI4JztcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIC0gKipKYXZhU2NyaXB0IERhdGUgT2JqZWN0OioqXHJcbiAgICogYGBgXHJcbiAgICogdGhpcy5kYXRlID0gbmV3IERhdGUoMjAxNywgMTAsIDI4KTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbWF4LWRhdGUnKSBzZXQgbWF4RGF0ZShtYXhEYXRlOiBhbnkpIHtcclxuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLnBvRGF0ZS5nZXREYXRlRm9yRGF0ZVJhbmdlKG1heERhdGUsIGZhbHNlKTtcclxuICB9XHJcbiAgZ2V0IG1heERhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBkYXRhIG3DrW5pbWEgcG9zc8OtdmVsIGRlIHNlciBzZWxlY2lvbmFkYS5cclxuICAgKlxyXG4gICAqIFBvZGUgcmVjZWJlciBvcyBzZWd1aW50ZXMgZm9ybWF0b3MgZGUgZGF0YTpcclxuICAgKlxyXG4gICAqIC0gKipEYXRhIGUgaG9yYSBjb21iaW5hZG9zIChFODYwMURadyk6IHl5eXktbW0tZGRUaGg6bW06c3MrfC1oaDptbSoqXHJcbiAgICogYGBgXHJcbiAgICogdGhpcy5kYXRlID0gJzIwMTctMTEtMjhUMDA6MDA6MDAtMDI6MDAnO1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogLSAqKkRhdGEgKEU4NjAxREF3Lik6IHl5eXktbW0tZGQqKlxyXG4gICAqIGBgYFxyXG4gICAqIHRoaXMuZGF0ZSA9ICcyMDE3LTExLTI4JztcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIC0gKipKYXZhU2NyaXB0IERhdGUgT2JqZWN0OioqXHJcbiAgICogYGBgXHJcbiAgICogdGhpcy5kYXRlID0gbmV3IERhdGUoMjAxNywgMTAsIDI4KTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbWluLWRhdGUnKSBzZXQgbWluRGF0ZShtaW5EYXRlOiBhbnkpIHtcclxuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLnBvRGF0ZS5nZXREYXRlRm9yRGF0ZVJhbmdlKG1pbkRhdGUsIHRydWUpO1xyXG4gIH1cclxuICBnZXQgbWluRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcHJpZWRhZGUgcXVlIHBlcm1pdGUgaW5mb3JtYXIgbyBtb2RvIGRlIGV4aWJpw6fDo28gZG8gY2FsZW5kYXIuXHJcbiAgICpcclxuICAgKiBJbXBsZW1lbnRhIG8gZW51bSBgUG9DYWxlbmRhck1vZGVgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1tb2RlJykgc2V0IG1vZGUodmFsdWU6IFBvQ2FsZW5kYXJNb2RlKSB7XHJcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5zZXRBY3RpdmF0ZURhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBtb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNSYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IFBvQ2FsZW5kYXJNb2RlLlJhbmdlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBvRGF0ZTogUG9EYXRlU2VydmljZSwgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNob3J0TGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldEFjdGl2YXRlRGF0ZShkYXRlPzogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgY29uc3QgYWN0aXZhdGVEYXRlID0gZGF0ZSA/IGRhdGUgOiB0aGlzLnZlcmlmeUFjdGl2YXRlRGF0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgY2hlY2tlZFN0YXJ0ID1cclxuICAgICAgICB0eXBlb2YgYWN0aXZhdGVEYXRlID09PSAnc3RyaW5nJyA/IHRoaXMucG9EYXRlLmNvbnZlcnRJc29Ub0RhdGUoYWN0aXZhdGVEYXRlKSA6IG5ldyBEYXRlKGFjdGl2YXRlRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGNoZWNrZWRFbmQgPSBuZXcgRGF0ZShuZXcgRGF0ZShjaGVja2VkU3RhcnQpLnNldE1vbnRoKGNoZWNrZWRTdGFydC5nZXRNb250aCgpICsgMSkpO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlRGF0ZSA9IHsgc3RhcnQ6IGNoZWNrZWRTdGFydCwgZW5kOiBjaGVja2VkRW5kIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlRGF0ZSA9IG5ldyBEYXRlKGFjdGl2YXRlRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeUFjdGl2YXRlRGF0ZSgpOiBEYXRlIHtcclxuICAgIGxldCB0b2RheSA9IHRoaXMudG9kYXk7XHJcbiAgICBpZiAodGhpcy5taW5EYXRlICYmIHRoaXMubWluRGF0ZSA+IHRoaXMudG9kYXkpIHtcclxuICAgICAgdG9kYXkgPSB0aGlzLm1pbkRhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubWF4RGF0ZSAmJiB0aGlzLm1heERhdGUgPCB0aGlzLnRvZGF5KSB7XHJcbiAgICAgIHRvZGF5ID0gdGhpcy5tYXhEYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvZGF5O1xyXG4gIH1cclxufVxyXG4iXX0=