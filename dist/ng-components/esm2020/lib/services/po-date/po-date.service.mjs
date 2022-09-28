import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço responsável por gerenciar o tratamento dos formatos de data e hora.
 */
export class PoDateService {
    constructor() {
        this.dateRegex = new RegExp('^(?:[0-9])\\d{1}(?:[0-9])\\d{1}-' + '(?:0[1-9]|1[0-2])-' + '(?:0[1-9]|[12]\\d|3[01])$');
        this.isoRegex = new RegExp('^(?:[0-9])\\d{1}(?:[0-9])\\d{1}-' +
            '(?:0[1-9]|1[0-2])-' +
            '(?:0[1-9]|[12]\\d|3[01])' +
            'T(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:Z|-0[1-9]|-1\\d|-2[0-3]|' +
            '-00:?(?:0[1-9]|[0-5]\\d)|\\+[01]\\d|\\+2[0-3])' +
            '(?:|:?[0-5]\\d)$');
    }
    /**
     * Método responsável por converter datas do formato `yyyy-mm-ddThh:mm:ss+|-hh:mm` para o formato `Date`.
     *
     * @param dateString Data no formato `yyyy-mm-ddThh:mm:ss+|-hh:mm`.
     * @param minDate Definir `true` caso seja `minDate`.
     * @param maxDate Definir `true` caso seja `maxDate`.
     */
    convertIsoToDate(dateString, minDate, maxDate) {
        if (dateString) {
            const { year, month, day } = this.getDateFromIso(dateString);
            if (minDate) {
                const date = new Date(year, month - 1, day, 0, 0, 0);
                this.setYearFrom0To100(date, year);
                return date;
            }
            else if (maxDate) {
                const date = new Date(year, month - 1, day, 23, 59, 59);
                this.setYearFrom0To100(date, year);
                return date;
            }
            else {
                const miliseconds = Date.parse(dateString);
                const timezone = new Date().getTimezoneOffset() * 60000;
                return new Date(miliseconds + timezone);
            }
        }
    }
    /**
     * Método responsável por converter data do formato `Date` para o formato `yyyy-mm-dd`.
     *
     * @param date Data no formato `Date`.
     */
    convertDateToISO(date) {
        if (date) {
            const fullYear = date.getFullYear();
            const getMonth = date.getMonth() + 1;
            const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            const month = getMonth < 10 ? '0' + getMonth : getMonth;
            const year = this.formatYear(fullYear);
            return year + '-' + month + '-' + day;
        }
        else {
            return null;
        }
    }
    /**
     * Método responsável por adicionar zeros a esquerda do anos em formato string.
     *
     * @param year Ano a ser validado.
     */
    formatYear(year) {
        if (year > 999) {
            return year.toString();
        }
        if (year > 99 && year < 1000) {
            return `0${year}`;
        }
        if (year > 9 && year < 100) {
            return `00${year}`;
        }
        if (year >= 0 && year < 10) {
            return `000${year}`;
        }
    }
    /**
     * Método responsável por retornar o dia, mês e ano separados em formato de objeto.
     *
     * @param isoDate Ano em formato string.
     */
    getDateFromIso(isoDate) {
        const day = parseInt(isoDate.substring(8, 10), 10);
        const month = parseInt(isoDate.substring(5, 7), 10);
        const year = parseInt(isoDate.substring(0, 4), 10);
        return { year, month, day };
    }
    /**
     * Método responsável por retornar a data com a hora definida para `00:00:00` caso `isMinDate` for igual a `true` ou `23:59:59`
     * caso `isMindate` seja igual a `false` .
     *
     * @param date Data no formato `Date` ou `yyyy-mm-ddThh:mm:ss+|-hh:mm`.
     * @param isMinDate Caso `true` aplica `00:00:00`, caso `false` aplica `23:59:59` a hora da data informada.
     */
    getDateForDateRange(date, isMinDate) {
        const lastHour = isMinDate ? [0, 0, 0] : [23, 59, 59];
        if (date instanceof Date) {
            const { year, month, day } = this.splitDate(date);
            const validDate = new Date(year, month, day, ...lastHour);
            this.setYearFrom0To100(validDate, year);
            return validDate;
        }
        else if (this.isValidIso(date)) {
            return this.convertIsoToDate(date, isMinDate, !isMinDate);
        }
    }
    /**
     * Retorna `true` caso o período seja válido, para isso a primeira data deve ser maior que a segunda data.
     *
     * @param dateA primeira data
     * @param dateB segunda data
     */
    isDateRangeValid(dateA = '', dateB = '') {
        const dateASplitted = dateA.split('-').map(item => parseInt(item, 10));
        const dateBSplitted = dateB.split('-').map(item => parseInt(item, 10));
        for (let index = 0; index <= dateASplitted.length; index++) {
            if (dateASplitted[index] > dateBSplitted[index]) {
                return true;
            }
            else if (dateASplitted[index] < dateBSplitted[index]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Método responsável por validar se uma data está no formato `yyyy-mm-ddThh:mm:ss+|-hh:mm` ou `yyyy-mm-dd`.
     *
     * @param stringDate Data.
     */
    isValidIso(stringDate) {
        return this.dateRegex.test(stringDate) || this.isoRegex.test(stringDate);
    }
    /**
     * Método responsável por corrigir a data caso a mesma esteja entre os anos 0 e 99.
     *
     * @param date Data.
     * @param year .
     */
    setYearFrom0To100(date, year) {
        if (year >= 0 && year < 100) {
            date.setFullYear(year);
        }
    }
    /**
     * Método responsável por retornar o dia , mês e ano de uma data informada.
     *
     * @param date Valor da data.
     */
    splitDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return { year, month, day };
    }
    /**
     * Método responsável por validar se uma data está entre a `minDate` e `maxDate`.
     *
     * @param date Data a ser validada.
     * @param minDate Data inicial.
     * @param maxDate Data final.
     */
    validateDateRange(date, minDate, maxDate) {
        if (minDate && maxDate) {
            return date >= minDate && date <= maxDate;
        }
        else if (minDate && !maxDate) {
            return date >= minDate;
        }
        else if (!minDate && maxDate) {
            return date <= maxDate;
        }
        else {
            return true;
        }
    }
    /**
     * Método responsável por validar se a data foi informada nos padrões 'yyyy-mm-dd', 'yyyy-mm-ddThh:mm:ss+|-hh:mm' ou
     * 'Date' padrão do javascript.
     *
     * @param date Data que será validada.
     */
    validateDate(date) {
        const validDate = date instanceof Date ? this.convertDateToISO(date) : date;
        return this.isValidIso(validDate) ? validDate : undefined;
    }
}
PoDateService.ɵfac = function PoDateService_Factory(t) { return new (t || PoDateService)(); };
PoDateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoDateService, factory: PoDateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9zZXJ2aWNlcy9wby1kYXRlL3BvLWRhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQzs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQUltQixjQUFTLEdBQUcsSUFBSSxNQUFNLENBQ3JDLGtDQUFrQyxHQUFHLG9CQUFvQixHQUFHLDJCQUEyQixDQUN4RixDQUFDO1FBRWUsYUFBUSxHQUFHLElBQUksTUFBTSxDQUNwQyxrQ0FBa0M7WUFDaEMsb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQixrRUFBa0U7WUFDbEUsZ0RBQWdEO1lBQ2hELGtCQUFrQixDQUNyQixDQUFDO0tBMExIO0lBeExDOzs7Ozs7T0FNRztJQUNILGdCQUFnQixDQUFDLFVBQWtCLEVBQUUsT0FBaUIsRUFBRSxPQUFpQjtRQUN2RSxJQUFJLFVBQVUsRUFBRTtZQUNkLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFN0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxPQUFPLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdB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TyxJQUFJLE9BQU8sRUFBRTtZQUM5QixPQUFPLElBQUksSUFBSSxPQUFPLENBQUM7U0FDeEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxZQUFZLENBQUMsSUFBbUI7UUFDdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFNUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RCxDQUFDOzswRUFyTVUsYUFBYTttRUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgc29ydFZhbHVlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VydmnDp28gcmVzcG9uc8OhdmVsIHBvciBnZXJlbmNpYXIgbyB0cmF0YW1lbnRvIGRvcyBmb3JtYXRvcyBkZSBkYXRhIGUgaG9yYS5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChcclxuICAgICdeKD86WzAtOV0pXFxcXGR7MX0oPzpbMC05XSlcXFxcZHsxfS0nICsgJyg/OjBbMS05XXwxWzAtMl0pLScgKyAnKD86MFsxLTldfFsxMl1cXFxcZHwzWzAxXSkkJ1xyXG4gICk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgaXNvUmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgJ14oPzpbMC05XSlcXFxcZHsxfSg/OlswLTldKVxcXFxkezF9LScgK1xyXG4gICAgICAnKD86MFsxLTldfDFbMC0yXSktJyArXHJcbiAgICAgICcoPzowWzEtOV18WzEyXVxcXFxkfDNbMDFdKScgK1xyXG4gICAgICAnVCg/OlswMV1cXFxcZHwyWzAtM10pOlswLTVdXFxcXGQ6WzAtNV1cXFxcZCg/Olp8LTBbMS05XXwtMVxcXFxkfC0yWzAtM118JyArXHJcbiAgICAgICctMDA6Pyg/OjBbMS05XXxbMC01XVxcXFxkKXxcXFxcK1swMV1cXFxcZHxcXFxcKzJbMC0zXSknICtcclxuICAgICAgJyg/Onw6P1swLTVdXFxcXGQpJCdcclxuICApO1xyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgY29udmVydGVyIGRhdGFzIGRvIGZvcm1hdG8gYHl5eXktbW0tZGRUaGg6bW06c3MrfC1oaDptbWAgcGFyYSBvIGZvcm1hdG8gYERhdGVgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGVTdHJpbmcgRGF0YSBubyBmb3JtYXRvIGB5eXl5LW1tLWRkVGhoOm1tOnNzK3wtaGg6bW1gLlxyXG4gICAqIEBwYXJhbSBtaW5EYXRlIERlZmluaXIgYHRydWVgIGNhc28gc2VqYSBgbWluRGF0ZWAuXHJcbiAgICogQHBhcmFtIG1heERhdGUgRGVmaW5pciBgdHJ1ZWAgY2FzbyBzZWphIGBtYXhEYXRlYC5cclxuICAgKi9cclxuICBjb252ZXJ0SXNvVG9EYXRlKGRhdGVTdHJpbmc6IHN0cmluZywgbWluRGF0ZT86IGJvb2xlYW4sIG1heERhdGU/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgICBpZiAoZGF0ZVN0cmluZykge1xyXG4gICAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IHRoaXMuZ2V0RGF0ZUZyb21Jc28oZGF0ZVN0cmluZyk7XHJcblxyXG4gICAgICBpZiAobWluRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zZXRZZWFyRnJvbTBUbzEwMChkYXRlLCB5ZWFyKTtcclxuICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgfSBlbHNlIGlmIChtYXhEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCAyMywgNTksIDU5KTtcclxuICAgICAgICB0aGlzLnNldFllYXJGcm9tMFRvMTAwKGRhdGUsIHllYXIpO1xyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1pbGlzZWNvbmRzID0gRGF0ZS5wYXJzZShkYXRlU3RyaW5nKTtcclxuICAgICAgICBjb25zdCB0aW1lem9uZSA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShtaWxpc2Vjb25kcyArIHRpbWV6b25lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIGNvbnZlcnRlciBkYXRhIGRvIGZvcm1hdG8gYERhdGVgIHBhcmEgbyBmb3JtYXRvIGB5eXl5LW1tLWRkYC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGEgbm8gZm9ybWF0byBgRGF0ZWAuXHJcbiAgICovXHJcbiAgY29udmVydERhdGVUb0lTTyhkYXRlOiBEYXRlKSB7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBmdWxsWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgZ2V0TW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKSA8IDEwID8gJzAnICsgZGF0ZS5nZXREYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgbW9udGggPSBnZXRNb250aCA8IDEwID8gJzAnICsgZ2V0TW9udGggOiBnZXRNb250aDtcclxuICAgICAgY29uc3QgeWVhciA9IHRoaXMuZm9ybWF0WWVhcihmdWxsWWVhcik7XHJcbiAgICAgIHJldHVybiB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBhZGljaW9uYXIgemVyb3MgYSBlc3F1ZXJkYSBkbyBhbm9zIGVtIGZvcm1hdG8gc3RyaW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHllYXIgQW5vIGEgc2VyIHZhbGlkYWRvLlxyXG4gICAqL1xyXG4gIGZvcm1hdFllYXIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBpZiAoeWVhciA+IDk5OSkge1xyXG4gICAgICByZXR1cm4geWVhci50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ZWFyID4gOTkgJiYgeWVhciA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIGAwJHt5ZWFyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHllYXIgPiA5ICYmIHllYXIgPCAxMDApIHtcclxuICAgICAgcmV0dXJuIGAwMCR7eWVhcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ZWFyID49IDAgJiYgeWVhciA8IDEwKSB7XHJcbiAgICAgIHJldHVybiBgMDAwJHt5ZWFyfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgcmV0b3JuYXIgbyBkaWEsIG3DqnMgZSBhbm8gc2VwYXJhZG9zIGVtIGZvcm1hdG8gZGUgb2JqZXRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlzb0RhdGUgQW5vIGVtIGZvcm1hdG8gc3RyaW5nLlxyXG4gICAqL1xyXG4gIGdldERhdGVGcm9tSXNvKGlzb0RhdGU6IHN0cmluZyk6IHsgeWVhcjogbnVtYmVyOyBtb250aDogbnVtYmVyOyBkYXk6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KGlzb0RhdGUuc3Vic3RyaW5nKDgsIDEwKSwgMTApO1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChpc29EYXRlLnN1YnN0cmluZyg1LCA3KSwgMTApO1xyXG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGlzb0RhdGUuc3Vic3RyaW5nKDAsIDQpLCAxMCk7XHJcblxyXG4gICAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIHJldG9ybmFyIGEgZGF0YSBjb20gYSBob3JhIGRlZmluaWRhIHBhcmEgYDAwOjAwOjAwYCBjYXNvIGBpc01pbkRhdGVgIGZvciBpZ3VhbCBhIGB0cnVlYCBvdSBgMjM6NTk6NTlgXHJcbiAgICogY2FzbyBgaXNNaW5kYXRlYCBzZWphIGlndWFsIGEgYGZhbHNlYCAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRhIG5vIGZvcm1hdG8gYERhdGVgIG91IGB5eXl5LW1tLWRkVGhoOm1tOnNzK3wtaGg6bW1gLlxyXG4gICAqIEBwYXJhbSBpc01pbkRhdGUgQ2FzbyBgdHJ1ZWAgYXBsaWNhIGAwMDowMDowMGAsIGNhc28gYGZhbHNlYCBhcGxpY2EgYDIzOjU5OjU5YCBhIGhvcmEgZGEgZGF0YSBpbmZvcm1hZGEuXHJcbiAgICovXHJcbiAgZ2V0RGF0ZUZvckRhdGVSYW5nZShkYXRlOiBhbnksIGlzTWluRGF0ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgbGFzdEhvdXIgPSBpc01pbkRhdGUgPyBbMCwgMCwgMF0gOiBbMjMsIDU5LCA1OV07XHJcbiAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSB0aGlzLnNwbGl0RGF0ZShkYXRlKTtcclxuICAgICAgY29uc3QgdmFsaWREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgLi4ubGFzdEhvdXIpO1xyXG4gICAgICB0aGlzLnNldFllYXJGcm9tMFRvMTAwKHZhbGlkRGF0ZSwgeWVhcik7XHJcbiAgICAgIHJldHVybiB2YWxpZERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNWYWxpZElzbyhkYXRlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0SXNvVG9EYXRlKGRhdGUsIGlzTWluRGF0ZSwgIWlzTWluRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGB0cnVlYCBjYXNvIG8gcGVyw61vZG8gc2VqYSB2w6FsaWRvLCBwYXJhIGlzc28gYSBwcmltZWlyYSBkYXRhIGRldmUgc2VyIG1haW9yIHF1ZSBhIHNlZ3VuZGEgZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRlQSBwcmltZWlyYSBkYXRhXHJcbiAgICogQHBhcmFtIGRhdGVCIHNlZ3VuZGEgZGF0YVxyXG4gICAqL1xyXG4gIGlzRGF0ZVJhbmdlVmFsaWQoZGF0ZUE6IHN0cmluZyA9ICcnLCBkYXRlQjogc3RyaW5nID0gJycpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGVBU3BsaXR0ZWQgPSBkYXRlQS5zcGxpdCgnLScpLm1hcChpdGVtID0+IHBhcnNlSW50KGl0ZW0sIDEwKSk7XHJcbiAgICBjb25zdCBkYXRlQlNwbGl0dGVkID0gZGF0ZUIuc3BsaXQoJy0nKS5tYXAoaXRlbSA9PiBwYXJzZUludChpdGVtLCAxMCkpO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gZGF0ZUFTcGxpdHRlZC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGRhdGVBU3BsaXR0ZWRbaW5kZXhdID4gZGF0ZUJTcGxpdHRlZFtpbmRleF0pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRlQVNwbGl0dGVkW2luZGV4XSA8IGRhdGVCU3BsaXR0ZWRbaW5kZXhdKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgdmFsaWRhciBzZSB1bWEgZGF0YSBlc3TDoSBubyBmb3JtYXRvIGB5eXl5LW1tLWRkVGhoOm1tOnNzK3wtaGg6bW1gIG91IGB5eXl5LW1tLWRkYC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdHJpbmdEYXRlIERhdGEuXHJcbiAgICovXHJcbiAgaXNWYWxpZElzbyhzdHJpbmdEYXRlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVSZWdleC50ZXN0KHN0cmluZ0RhdGUpIHx8IHRoaXMuaXNvUmVnZXgudGVzdChzdHJpbmdEYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBjb3JyaWdpciBhIGRhdGEgY2FzbyBhIG1lc21hIGVzdGVqYSBlbnRyZSBvcyBhbm9zIDAgZSA5OS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRlIERhdGEuXHJcbiAgICogQHBhcmFtIHllYXIgLlxyXG4gICAqL1xyXG4gIHNldFllYXJGcm9tMFRvMTAwKGRhdGU6IERhdGUsIHllYXI6IG51bWJlcikge1xyXG4gICAgaWYgKHllYXIgPj0gMCAmJiB5ZWFyIDwgMTAwKSB7XHJcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgcmV0b3JuYXIgbyBkaWEgLCBtw6pzIGUgYW5vIGRlIHVtYSBkYXRhIGluZm9ybWFkYS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRlIFZhbG9yIGRhIGRhdGEuXHJcbiAgICovXHJcbiAgc3BsaXREYXRlKGRhdGU6IERhdGUpIHtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIHZhbGlkYXIgc2UgdW1hIGRhdGEgZXN0w6EgZW50cmUgYSBgbWluRGF0ZWAgZSBgbWF4RGF0ZWAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRhIGEgc2VyIHZhbGlkYWRhLlxyXG4gICAqIEBwYXJhbSBtaW5EYXRlIERhdGEgaW5pY2lhbC5cclxuICAgKiBAcGFyYW0gbWF4RGF0ZSBEYXRhIGZpbmFsLlxyXG4gICAqL1xyXG4gIHZhbGlkYXRlRGF0ZVJhbmdlKGRhdGU6IERhdGUsIG1pbkRhdGU6IERhdGUsIG1heERhdGU6IERhdGUpIHtcclxuICAgIGlmIChtaW5EYXRlICYmIG1heERhdGUpIHtcclxuICAgICAgcmV0dXJuIGRhdGUgPj0gbWluRGF0ZSAmJiBkYXRlIDw9IG1heERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKG1pbkRhdGUgJiYgIW1heERhdGUpIHtcclxuICAgICAgcmV0dXJuIGRhdGUgPj0gbWluRGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoIW1pbkRhdGUgJiYgbWF4RGF0ZSkge1xyXG4gICAgICByZXR1cm4gZGF0ZSA8PSBtYXhEYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgdmFsaWRhciBzZSBhIGRhdGEgZm9pIGluZm9ybWFkYSBub3MgcGFkcsO1ZXMgJ3l5eXktbW0tZGQnLCAneXl5eS1tbS1kZFRoaDptbTpzcyt8LWhoOm1tJyBvdVxyXG4gICAqICdEYXRlJyBwYWRyw6NvIGRvIGphdmFzY3JpcHQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGF0ZSBEYXRhIHF1ZSBzZXLDoSB2YWxpZGFkYS5cclxuICAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlRGF0ZShkYXRlOiBzdHJpbmcgfCBEYXRlKSB7XHJcbiAgICBjb25zdCB2YWxpZERhdGUgPSBkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IHRoaXMuY29udmVydERhdGVUb0lTTyhkYXRlKSA6IGRhdGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElzbyh2YWxpZERhdGUpID8gdmFsaWREYXRlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iXX0=