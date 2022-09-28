import { Injectable } from '@angular/core';
import { poLocales, poLocaleDefault } from '../../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
export class PoCalendarLangService {
    constructor() {
        this.language = poLocaleDefault;
        this.months = [
            {
                pt: 'Janeiro',
                en: 'January',
                es: 'Enero',
                ru: 'Январь'
            },
            {
                pt: 'Fevereiro',
                en: 'February',
                es: 'Febrero',
                ru: 'Февраль'
            },
            {
                pt: 'Março',
                en: 'March',
                es: 'Marzo',
                ru: 'Март'
            },
            {
                pt: 'Abril',
                en: 'April',
                es: 'Abril',
                ru: 'Апрель'
            },
            {
                pt: 'Maio',
                en: 'May',
                es: 'Mayo',
                ru: 'Май'
            },
            {
                pt: 'Junho',
                en: 'June',
                es: 'Junio',
                ru: 'Июнь'
            },
            {
                pt: 'Julho',
                en: 'July',
                es: 'Julio',
                ru: 'Июль'
            },
            {
                pt: 'Agosto',
                en: 'August',
                es: 'Agosto',
                ru: 'Август'
            },
            {
                pt: 'Setembro',
                en: 'September',
                es: 'Setiembre',
                ru: 'Сентябрь'
            },
            {
                pt: 'Outubro',
                en: 'October',
                es: 'Octubre',
                ru: 'Октябрь'
            },
            {
                pt: 'Novembro',
                en: 'November',
                es: 'Noviembre',
                ru: 'Ноябрь'
            },
            {
                pt: 'Dezembro',
                en: 'December',
                es: 'Diciembre',
                ru: 'Декабрь'
            }
        ];
        this.shortWeekDays = [
            {
                pt: 'Dom',
                en: 'Sun',
                es: 'Dom',
                ru: 'Вс'
            },
            {
                pt: 'Seg',
                en: 'Mon',
                es: 'Lun',
                ru: 'Пн'
            },
            {
                pt: 'Ter',
                en: 'Tue',
                es: 'Mar',
                ru: 'Вт'
            },
            {
                pt: 'Qua',
                en: 'Wed',
                es: 'Mié',
                ru: 'Ср'
            },
            {
                pt: 'Qui',
                en: 'Thu',
                es: 'Jue',
                ru: 'Чт'
            },
            {
                pt: 'Sex',
                en: 'Fri',
                es: 'Vie',
                ru: 'Пт'
            },
            {
                pt: 'Sáb',
                en: 'Sat',
                es: 'Sáb',
                ru: 'Сб'
            }
        ];
        this.monthLabel = {
            pt: 'Mês',
            en: 'Month',
            es: 'Mes',
            ru: 'Месяц'
        };
        this.yearLabel = {
            pt: 'Ano',
            en: 'Year',
            es: 'Año',
            ru: 'Год'
        };
        this.todayLabel = {
            pt: 'Hoje',
            en: 'Today',
            es: 'Hoy',
            ru: 'Сегодня'
        };
    }
    getMonth(month) {
        return this.months[month][this.language];
    }
    getMonthLabel() {
        return this.monthLabel[this.language];
    }
    getMonthsArray() {
        const arrMonths = Array();
        for (let i = 0; i < this.months.length; i++) {
            arrMonths.push(this.months[i][this.language]);
        }
        return arrMonths;
    }
    getWeekDays(day) {
        return this.shortWeekDays[day][this.language];
    }
    getWeekDaysArray() {
        const arrWeekDays = Array();
        for (let i = 0; i < this.shortWeekDays.length; i++) {
            const weekDay = this.shortWeekDays[i][this.language];
            arrWeekDays.push(weekDay.toLowerCase());
        }
        return arrWeekDays;
    }
    getYearLabel() {
        return this.yearLabel[this.language];
    }
    getTodayLabel() {
        return this.todayLabel[this.language];
    }
    setLanguage(language) {
        if (language && language.length >= 2) {
            language = language.toLowerCase().slice(0, 2);
            this.language = poLocales.includes(language) ? language : poLocaleDefault;
        }
    }
}
PoCalendarLangService.ɵfac = function PoCalendarLangService_Factory(t) { return new (t || PoCalendarLangService)(); };
PoCalendarLangService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoCalendarLangService, factory: PoCalendarLangService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCalendarLangService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2FsZW5kYXIubGFuZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNhbGVuZGFyL3NlcnZpY2VzL3BvLWNhbGVuZGFyLmxhbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBS2hHLE1BQU0sT0FBTyxxQkFBcUI7SUFIbEM7UUFJVSxhQUFRLEdBQUcsZUFBZSxDQUFDO1FBRTNCLFdBQU0sR0FBRztZQUNmO2dCQUNFLEVBQUUsRUFBRSxTQUFTO2dCQUNiLEVBQUUsRUFBRSxTQUFTO2dCQUNiLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsV0FBVztnQkFDZixFQUFFLEVBQUUsVUFBVTtnQkFDZCxFQUFFLEVBQUUsU0FBUztnQkFDYixFQUFFLEVBQUUsU0FBUzthQUNkO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLE1BQU07YUFDWDtZQUNEO2dCQUNFLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEVBQUUsRUFBRSxRQUFRO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsTUFBTTtnQkFDVixFQUFFLEVBQUUsS0FBSztnQkFDVCxFQUFFLEVBQUUsTUFBTTtnQkFDVixFQUFFLEVBQUUsS0FBSzthQUNWO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsRUFBRSxFQUFF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QyxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztTQUMzRTtJQUNILENBQUM7OzBGQTFMVSxxQkFBcUI7MkVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07dUZBRVAscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHBvTG9jYWxlcywgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DYWxlbmRhckxhbmdTZXJ2aWNlIHtcclxuICBwcml2YXRlIGxhbmd1YWdlID0gcG9Mb2NhbGVEZWZhdWx0O1xyXG5cclxuICBwcml2YXRlIG1vbnRocyA9IFtcclxuICAgIHtcclxuICAgICAgcHQ6ICdKYW5laXJvJyxcclxuICAgICAgZW46ICdKYW51YXJ5JyxcclxuICAgICAgZXM6ICdFbmVybycsXHJcbiAgICAgIHJ1OiAn0K/QvdCy0LDRgNGMJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHQ6ICdGZXZlcmVpcm8nLFxyXG4gICAgICBlbjogJ0ZlYnJ1YXJ5JyxcclxuICAgICAgZXM6ICdGZWJyZXJvJyxcclxuICAgICAgcnU6ICfQpNC10LLRgNCw0LvRjCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHB0OiAnTWFyw6dvJyxcclxuICAgICAgZW46ICdNYXJjaCcsXHJcbiAgICAgIGVzOiAnTWFyem8nLFxyXG4gICAgICBydTogJ9Cc0LDRgNGCJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHQ6ICdBYnJpbCcsXHJcbiAgICAgIGVuOiAnQXByaWwnLFxyXG4gICAgICBlczogJ0FicmlsJyxcclxuICAgICAgcnU6ICfQkNC/0YDQtdC70YwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ01haW8nLFxyXG4gICAgICBlbjogJ01heScsXHJcbiAgICAgIGVzOiAnTWF5bycsXHJcbiAgICAgIHJ1OiAn0JzQsNC5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHQ6ICdKdW5obycsXHJcbiAgICAgIGVuOiAnSnVuZScsXHJcbiAgICAgIGVzOiAnSnVuaW8nLFxyXG4gICAgICBydTogJ9CY0Y7QvdGMJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHQ6ICdKdWxobycsXHJcbiAgICAgIGVuOiAnSnVseScsXHJcbiAgICAgIGVzOiAnSnVsaW8nLFxyXG4gICAgICBydTogJ9CY0Y7Qu9GMJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHQ6ICdBZ29zdG8nLFxyXG4gICAgICBlbjogJ0F1Z3VzdCcsXHJcbiAgICAgIGVzOiAnQWdvc3RvJyxcclxuICAgICAgcnU6ICfQkNCy0LPRg9GB0YInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ1NldGVtYnJvJyxcclxuICAgICAgZW46ICdTZXB0ZW1iZXInLFxyXG4gICAgICBlczogJ1NldGllbWJyZScsXHJcbiAgICAgIHJ1OiAn0KHQtdC90YLRj9Cx0YDRjCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHB0OiAnT3V0dWJybycsXHJcbiAgICAgIGVuOiAnT2N0b2JlcicsXHJcbiAgICAgIGVzOiAnT2N0dWJyZScsXHJcbiAgICAgIHJ1OiAn0J7QutGC0Y/QsdGA0YwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ05vdmVtYnJvJyxcclxuICAgICAgZW46ICdOb3ZlbWJlcicsXHJcbiAgICAgIGVzOiAnTm92aWVtYnJlJyxcclxuICAgICAgcnU6ICfQndC+0Y/QsdGA0YwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ0RlemVtYnJvJyxcclxuICAgICAgZW46ICdEZWNlbWJlcicsXHJcbiAgICAgIGVzOiAnRGljaWVtYnJlJyxcclxuICAgICAgcnU6ICfQlNC10LrQsNCx0YDRjCdcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBwcml2YXRlIHNob3J0V2Vla0RheXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHB0OiAnRG9tJyxcclxuICAgICAgZW46ICdTdW4nLFxyXG4gICAgICBlczogJ0RvbScsXHJcbiAgICAgIHJ1OiAn0JLRgSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHB0OiAnU2VnJyxcclxuICAgICAgZW46ICdNb24nLFxyXG4gICAgICBlczogJ0x1bicsXHJcbiAgICAgIHJ1OiAn0J/QvSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHB0OiAnVGVyJyxcclxuICAgICAgZW46ICdUdWUnLFxyXG4gICAgICBlczogJ01hcicsXHJcbiAgICAgIHJ1OiAn0JLRgidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHB0OiAnUXVhJyxcclxuICAgICAgZW46ICdXZWQnLFxyXG4gICAgICBlczogJ01pw6knLFxyXG4gICAgICBydTogJ9Ch0YAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ1F1aScsXHJcbiAgICAgIGVuOiAnVGh1JyxcclxuICAgICAgZXM6ICdKdWUnLFxyXG4gICAgICBydTogJ9Cn0YInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ1NleCcsXHJcbiAgICAgIGVuOiAnRnJpJyxcclxuICAgICAgZXM6ICdWaWUnLFxyXG4gICAgICBydTogJ9Cf0YInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwdDogJ1PDoWInLFxyXG4gICAgICBlbjogJ1NhdCcsXHJcbiAgICAgIGVzOiAnU8OhYicsXHJcbiAgICAgIHJ1OiAn0KHQsSdcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBwcml2YXRlIG1vbnRoTGFiZWwgPSB7XHJcbiAgICBwdDogJ03DqnMnLFxyXG4gICAgZW46ICdNb250aCcsXHJcbiAgICBlczogJ01lcycsXHJcbiAgICBydTogJ9Cc0LXRgdGP0YYnXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB5ZWFyTGFiZWwgPSB7XHJcbiAgICBwdDogJ0FubycsXHJcbiAgICBlbjogJ1llYXInLFxyXG4gICAgZXM6ICdBw7FvJyxcclxuICAgIHJ1OiAn0JPQvtC0J1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdG9kYXlMYWJlbCA9IHtcclxuICAgIHB0OiAnSG9qZScsXHJcbiAgICBlbjogJ1RvZGF5JyxcclxuICAgIGVzOiAnSG95JyxcclxuICAgIHJ1OiAn0KHQtdCz0L7QtNC90Y8nXHJcbiAgfTtcclxuXHJcbiAgZ2V0TW9udGgobW9udGg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMubW9udGhzW21vbnRoXVt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoTGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb250aExhYmVsW3RoaXMubGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhzQXJyYXkoKSB7XHJcbiAgICBjb25zdCBhcnJNb250aHMgPSBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vbnRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJNb250aHMucHVzaCh0aGlzLm1vbnRoc1tpXVt0aGlzLmxhbmd1YWdlXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyTW9udGhzO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla0RheXMoZGF5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3J0V2Vla0RheXNbZGF5XVt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtEYXlzQXJyYXkoKSB7XHJcbiAgICBjb25zdCBhcnJXZWVrRGF5cyA9IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hvcnRXZWVrRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB3ZWVrRGF5ID0gdGhpcy5zaG9ydFdlZWtEYXlzW2ldW3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgICBhcnJXZWVrRGF5cy5wdXNoKHdlZWtEYXkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyV2Vla0RheXM7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFyTGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy55ZWFyTGFiZWxbdGhpcy5sYW5ndWFnZV07XHJcbiAgfVxyXG5cclxuICBnZXRUb2RheUxhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kYXlMYWJlbFt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgIGlmIChsYW5ndWFnZSAmJiBsYW5ndWFnZS5sZW5ndGggPj0gMikge1xyXG4gICAgICBsYW5ndWFnZSA9IGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgMik7XHJcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBwb0xvY2FsZXMuaW5jbHVkZXMobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiBwb0xvY2FsZURlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==