import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PoCalendarService } from '../services/po-calendar.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/po-calendar.service";
import * as i2 from "../services/po-calendar.lang.service";
import * as i3 from "../../../services/po-date/po-date.service";
import * as i4 from "@angular/common";
import * as i5 from "../po-calendar-header/po-calendar-header.component";
function PoCalendarWrapperComponent_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const weekDay_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", weekDay_r6, " ");
} }
function PoCalendarWrapperComponent_ng_container_1_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r8.getDayForegroundColor(day_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r7.getDate(), " ");
} }
function PoCalendarWrapperComponent_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_1_div_10_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const day_r7 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.onSelectDate(day_r7)); })("mouseenter", function PoCalendarWrapperComponent_ng_container_1_div_10_Template_div_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const day_r7 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.onMouseEnter(day_r7)); })("mouseleave", function PoCalendarWrapperComponent_ng_container_1_div_10_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.onMouseLeave()); });
    i0.ɵɵtemplate(1, PoCalendarWrapperComponent_ng_container_1_div_10_span_1_Template, 2, 2, "span", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r5.getDayBackgroundColor(day_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", day_r7 !== 0);
} }
function PoCalendarWrapperComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "po-calendar-header", 2);
    i0.ɵɵlistener("p-previous", function PoCalendarWrapperComponent_ng_container_1_Template_po_calendar_header_p_previous_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onPreviousMonth()); })("p-next", function PoCalendarWrapperComponent_ng_container_1_Template_po_calendar_header_p_next_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onNextMonth()); });
    i0.ɵɵelementStart(2, "span", 3);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_1_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.selectDisplayMode("month")); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 4);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_1_Template_span_click_4_listener() { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.selectDisplayMode("year")); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 5)(7, "div", 6);
    i0.ɵɵtemplate(8, PoCalendarWrapperComponent_ng_container_1_div_8_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵtemplate(10, PoCalendarWrapperComponent_ng_container_1_div_10_Template, 2, 2, "div", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-hide-previous", ctx_r0.isEndPart)("p-hide-next", ctx_r0.isStartPart && !ctx_r0.responsive);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayMonth);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayYear);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.displayWeekDays);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.displayDays);
} }
function PoCalendarWrapperComponent_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_2_div_9_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const i_r21 = restoredCtx.index; const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.onSelectMonth(ctx_r22.displayYear, i_r21)); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r19.getBackgroundColor(i_r21, ctx_r19.displayMonthNumber));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r19.getForegroundColor(i_r21, ctx_r19.displayMonthNumber));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r20, " ");
} }
function PoCalendarWrapperComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "po-calendar-header", 14);
    i0.ɵɵlistener("p-previous", function PoCalendarWrapperComponent_ng_container_2_Template_po_calendar_header_p_previous_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.updateYear(-1)); })("p-next", function PoCalendarWrapperComponent_ng_container_2_Template_po_calendar_header_p_next_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.updateYear(1)); });
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_2_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.selectDisplayMode("year")); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 5)(5, "div", 6)(6, "div", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 15);
    i0.ɵɵtemplate(9, PoCalendarWrapperComponent_ng_container_2_div_9_Template, 3, 3, "div", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.displayYear, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.monthLabel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.displayMonths);
} }
function PoCalendarWrapperComponent_ng_container_3_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_3_div_8_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r32); const year_r29 = restoredCtx.$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r31.onSelectYear(year_r29, ctx_r31.displayMonthNumber)); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const year_r29 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r28.getBackgroundColor(year_r29, ctx_r28.currentYear));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r28.getForegroundColor(year_r29, ctx_r28.currentYear));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", year_r29, " ");
} }
function PoCalendarWrapperComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "po-calendar-header", 14);
    i0.ɵɵlistener("p-previous", function PoCalendarWrapperComponent_ng_container_3_Template_po_calendar_header_p_previous_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.updateYear(-10)); })("p-next", function PoCalendarWrapperComponent_ng_container_3_Template_po_calendar_header_p_next_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r35.updateYear(10)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5)(4, "div", 6)(5, "div", 10);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 18);
    i0.ɵɵtemplate(8, PoCalendarWrapperComponent_ng_container_3_div_8_Template, 3, 3, "div", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.displayStartDecade, " - ", ctx_r2.displayFinalDecade, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.yearLabel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.displayDecade);
} }
function PoCalendarWrapperComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 21)(2, "div", 22)(3, "button", 23);
    i0.ɵɵlistener("click", function PoCalendarWrapperComponent_ng_container_4_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.onSelectDate(ctx_r36.today)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r3.isTodayUnavailable());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.displayToday, " ");
} }
export class PoCalendarWrapperComponent {
    constructor(poCalendarService, poCalendarLangService, poDate) {
        this.poCalendarService = poCalendarService;
        this.poCalendarLangService = poCalendarLangService;
        this.poDate = poDate;
        this.mode = 'day';
        this.responsive = false;
        this.range = false;
        this.activateDate = new Date();
        this.headerChange = new EventEmitter();
        this.selectDate = new EventEmitter();
        this.hoverDate = new Subject().pipe(debounceTime(100));
        this.displayMonths = Array();
        this.displayWeekDays = Array();
        this.today = new Date();
    }
    set locale(value) {
        this._locale = value;
        this.initializeLanguage();
    }
    get locale() {
        return this._locale;
    }
    get monthLabel() {
        return this.poCalendarLangService.getMonthLabel();
    }
    get yearLabel() {
        return this.poCalendarLangService.getYearLabel();
    }
    get isDayVisible() {
        return this.mode === 'day';
    }
    get isMonthVisible() {
        return this.mode === 'month';
    }
    get isYearVisible() {
        return this.mode === 'year';
    }
    get isStartPart() {
        return this.partType === 'start';
    }
    get isEndPart() {
        return this.partType === 'end';
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        const { activateDate } = changes;
        if (activateDate) {
            this.updateDate(activateDate.currentValue);
        }
    }
    getBackgroundColor(displayValue, propertyValue) {
        return displayValue === propertyValue ? 'po-calendar-box-background-selected' : 'po-calendar-box-background';
    }
    getDayBackgroundColor(date) {
        return this.getDayColor(date, 'background');
    }
    getDayForegroundColor(date) {
        return this.getDayColor(date, 'foreground');
    }
    getForegroundColor(displayValue, propertyValue) {
        return displayValue === propertyValue ? 'po-calendar-box-foreground-selected' : 'po-calendar-box-foreground';
    }
    isTodayUnavailable() {
        return this.minDate > this.today || this.maxDate < this.today;
    }
    onNextMonth() {
        this.displayMonthNumber < 11
            ? this.updateDisplay(this.displayYear, this.displayMonthNumber + 1)
            : this.updateDisplay(this.displayYear + 1, 0);
        this.headerChange.emit({ month: this.displayMonthNumber, year: this.displayYear });
    }
    onPreviousMonth() {
        if (this.displayMonthNumber > 0) {
            this.updateDisplay(this.displayYear, this.displayMonthNumber - 1);
        }
        else {
            this.updateDisplay(this.displayYear - 1, 11);
        }
        this.headerChange.emit({ month: this.displayMonthNumber, year: this.displayYear });
    }
    onMouseEnter(day) {
        this.hoverDate.next(day);
    }
    onMouseLeave() {
        this.hoverDate.next(null);
    }
    // Ao selecionar uma data
    onSelectDate(date) {
        this.selectDate.emit(date);
    }
    // Ao selecionar um mês
    onSelectMonth(year, month) {
        this.selectDisplayMode('day');
        this.updateDisplay(year, month);
        this.headerChange.emit({ month, year });
    }
    // Ao selecionar um ano
    onSelectYear(year, month) {
        // Se veio da tela de seleção de mês
        this.selectDisplayMode(this.lastDisplay === 'month' ? 'month' : 'day');
        this.currentYear = year;
        this.updateDisplay(year, month);
        this.headerChange.emit({ month, year });
    }
    selectDisplayMode(mode) {
        this.lastDisplay = this.mode;
        this.mode = mode;
    }
    updateYear(value) {
        this.updateDisplay(this.displayYear + value, this.displayMonthNumber);
    }
    addAllYearsInDecade(year) {
        let i;
        for (i = year; i < year + 10; i++) {
            this.displayDecade.push(i);
        }
    }
    equalsDate(date1, date2) {
        try {
            return (date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate());
        }
        catch (error) {
            return false;
        }
    }
    // Obtém um array de todos os anos desta década
    getDecadeArray(year) {
        this.displayDecade = Array();
        if (year % 10 !== 0) {
            while (year % 10 !== 0) {
                year--;
            }
        }
        this.updateDecade(year);
    }
    getColorForDate(date, local) {
        return this.poDate.validateDateRange(date, this.minDate, this.maxDate)
            ? `po-calendar-box-${local}-selected`
            : `po-calendar-box-${local}-selected-disabled`;
    }
    getColorForDefaultDate(date, local) {
        return this.poDate.validateDateRange(date, this.minDate, this.maxDate)
            ? `po-calendar-box-${local}`
            : `po-calendar-box-${local}-disabled`;
    }
    getColorForToday(date, local) {
        return this.poDate.validateDateRange(date, this.minDate, this.maxDate)
            ? `po-calendar-box-${local}-today`
            : `po-calendar-box-${local}-today-disabled`;
    }
    getColorForDateRange(date, local) {
        return this.poDate.validateDateRange(date, this.minDate, this.maxDate)
            ? `po-calendar-box-${local}-in-range`
            : `po-calendar-box-${local}-in-range-disabled`;
    }
    getDayColor(date, local) {
        const start = this.selectedValue?.start;
        const end = this.selectedValue?.end;
        if (this.range && (this.equalsDate(date, start) || this.equalsDate(date, end))) {
            return this.getColorForDate(date, local);
        }
        else if (this.range && start && end && date > start && date < end) {
            return this.getColorForDateRange(date, local);
        }
        else if (this.range && start && !end && date > start && date < this.hoverValue) {
            return `po-calendar-box-${local}-hover`;
        }
        else if (!this.range && this.equalsDate(date, this.value)) {
            return this.getColorForDate(date, local);
        }
        else if (this.equalsDate(date, this.today)) {
            return this.getColorForToday(date, local);
        }
        else {
            return this.getColorForDefaultDate(date, local);
        }
    }
    init() {
        this.updateDate(this.activateDate);
        this.initializeLanguage();
        this.selectDisplayMode('day');
    }
    initializeLanguage() {
        this.poCalendarLangService.setLanguage(this.locale);
        this.displayWeekDays = this.poCalendarLangService.getWeekDaysArray();
        this.displayMonths = this.poCalendarLangService.getMonthsArray();
        this.displayMonth = this.displayMonths[this.displayMonthNumber];
        this.displayToday = this.poCalendarLangService.getTodayLabel();
    }
    updateDate(value = new Date()) {
        const date = new Date(value);
        this.currentMonthNumber = date.getMonth();
        this.currentYear = date.getFullYear();
        this.updateDisplay(this.currentYear, this.currentMonthNumber);
    }
    updateDecade(year) {
        this.addAllYearsInDecade(year);
        this.displayStartDecade = year;
        this.displayFinalDecade = year + 9;
    }
    updateDisplay(year, month) {
        const calendarArray = this.poCalendarService.monthDays(year, month);
        this.displayDays = [].concat.apply([], calendarArray);
        this.displayMonthNumber = month;
        this.displayMonth = this.displayMonths[month];
        this.displayYear = year;
        this.getDecadeArray(year);
    }
}
PoCalendarWrapperComponent.ɵfac = function PoCalendarWrapperComponent_Factory(t) { return new (t || PoCalendarWrapperComponent)(i0.ɵɵdirectiveInject(i1.PoCalendarService), i0.ɵɵdirectiveInject(i2.PoCalendarLangService), i0.ɵɵdirectiveInject(i3.PoDateService)); };
PoCalendarWrapperComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCalendarWrapperComponent, selectors: [["po-calendar-wrapper"]], inputs: { value: ["p-value", "value"], mode: ["p-mode", "mode"], responsive: ["p-responsive", "responsive"], partType: ["p-part-type", "partType"], range: ["p-range", "range"], activateDate: ["p-activate-date", "activateDate"], selectedValue: ["p-selected-value", "selectedValue"], minDate: ["p-min-date", "minDate"], maxDate: ["p-max-date", "maxDate"], hoverValue: ["p-hover-value", "hoverValue"], locale: ["p-locale", "locale"] }, outputs: { headerChange: "p-header-change", selectDate: "p-select-date", hoverDate: "p-hover-date" }, features: [i0.ɵɵProvidersFeature([PoCalendarService]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 4, consts: [[1, "po-calendar-wrapper"], [4, "ngIf"], [3, "p-hide-previous", "p-hide-next", "p-previous", "p-next"], [1, "po-clickable", "po-mr-1", 3, "click"], [1, "po-clickable", 3, "click"], [1, "po-calendar-content"], [1, "po-calendar-labels"], ["class", "po-calendar-label", 4, "ngFor", "ngForOf"], [1, "po-calendar-content-list-day"], ["class", "po-calendar-day", "attr-calendar", "", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "po-calendar-label"], ["attr-calendar", "", 1, "po-calendar-day", 3, "ngClass", "click", "mouseenter", "mouseleave"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "p-previous", "p-next"], [1, "po-calendar-content-list-month"], ["class", "po-calendar-month", "attr-calendar", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["attr-calendar", "", 1, "po-calendar-month", 3, "ngClass", "click"], [1, "po-calendar-content-list-year"], ["class", "po-calendar-year", "attr-calendar", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["attr-calendar", "", 1, "po-calendar-year", 3, "ngClass", "click"], [1, "po-calendar-footer"], [1, "po-calendar-footer-today"], ["type", "button", 1, "po-calendar-footer-today-button", 3, "disabled", "click"]], template: function PoCalendarWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoCalendarWrapperComponent_ng_container_1_Template, 11, 6, "ng-container", 1);
        i0.ɵɵtemplate(2, PoCalendarWrapperComponent_ng_container_2_Template, 10, 3, "ng-container", 1);
        i0.ɵɵtemplate(3, PoCalendarWrapperComponent_ng_container_3_Template, 9, 4, "ng-container", 1);
        i0.ɵɵtemplate(4, PoCalendarWrapperComponent_ng_container_4_Template, 5, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isDayVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isMonthVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isYearVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.range);
    } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i5.PoCalendarHeaderComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCalendarWrapperComponent, [{
        type: Component,
        args: [{ selector: 'po-calendar-wrapper', providers: [PoCalendarService], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-calendar-wrapper\">\r\n  <ng-container *ngIf=\"isDayVisible\">\r\n    <po-calendar-header\r\n      [p-hide-previous]=\"isEndPart\"\r\n      [p-hide-next]=\"isStartPart && !responsive\"\r\n      (p-previous)=\"onPreviousMonth()\"\r\n      (p-next)=\"onNextMonth()\"\r\n    >\r\n      <span class=\"po-clickable po-mr-1\" (click)=\"selectDisplayMode('month')\">{{ displayMonth }}</span>\r\n      <span class=\"po-clickable\" (click)=\"selectDisplayMode('year')\">{{ displayYear }}</span>\r\n    </po-calendar-header>\r\n\r\n    <div class=\"po-calendar-content\">\r\n      <div class=\"po-calendar-labels\">\r\n        <div class=\"po-calendar-label\" *ngFor=\"let weekDay of displayWeekDays\">\r\n          {{ weekDay }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"po-calendar-content-list-day\">\r\n        <div\r\n          *ngFor=\"let day of displayDays\"\r\n          class=\"po-calendar-day\"\r\n          [ngClass]=\"getDayBackgroundColor(day)\"\r\n          (click)=\"onSelectDate(day)\"\r\n          (mouseenter)=\"onMouseEnter(day)\"\r\n          (mouseleave)=\"onMouseLeave()\"\r\n          attr-calendar\r\n        >\r\n          <span *ngIf=\"day !== 0\" [ngClass]=\"getDayForegroundColor(day)\">\r\n            {{ day.getDate() }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"isMonthVisible\">\r\n    <po-calendar-header (p-previous)=\"updateYear(-1)\" (p-next)=\"updateYear(1)\">\r\n      <span class=\"po-clickable\" (click)=\"selectDisplayMode('year')\">\r\n        {{ displayYear }}\r\n      </span>\r\n    </po-calendar-header>\r\n\r\n    <div class=\"po-calendar-content\">\r\n      <div class=\"po-calendar-labels\">\r\n        <div class=\"po-calendar-label\">\r\n          {{ monthLabel }}\r\n        </div>\r\n      </div>\r\n      <div class=\"po-calendar-content-list-month\">\r\n        <div\r\n          *ngFor=\"let month of displayMonths; let i = index\"\r\n          class=\"po-calendar-month\"\r\n          [ngClass]=\"getBackgroundColor(i, displayMonthNumber)\"\r\n          (click)=\"onSelectMonth(displayYear, i)\"\r\n          attr-calendar\r\n        >\r\n          <span [ngClass]=\"getForegroundColor(i, displayMonthNumber)\">\r\n            {{ month }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"isYearVisible\">\r\n    <po-calendar-header (p-previous)=\"updateYear(-10)\" (p-next)=\"updateYear(10)\">\r\n      {{ displayStartDecade }} - {{ displayFinalDecade }}\r\n    </po-calendar-header>\r\n\r\n    <div class=\"po-calendar-content\">\r\n      <div class=\"po-calendar-labels\">\r\n        <div class=\"po-calendar-label\">\r\n          {{ yearLabel }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"po-calendar-content-list-year\">\r\n        <div\r\n          *ngFor=\"let year of displayDecade; let i = index\"\r\n          class=\"po-calendar-year\"\r\n          [ngClass]=\"getBackgroundColor(year, currentYear)\"\r\n          (click)=\"onSelectYear(year, displayMonthNumber)\"\r\n          attr-calendar\r\n        >\r\n          <span [ngClass]=\"getForegroundColor(year, currentYear)\">\r\n            {{ year }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!range\">\r\n    <div class=\"po-calendar-footer\">\r\n      <div class=\"po-calendar-footer-today\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"po-calendar-footer-today-button\"\r\n          (click)=\"onSelectDate(today)\"\r\n          [disabled]=\"isTodayUnavailable()\"\r\n        >\r\n          {{ displayToday }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoCalendarService }, { type: i2.PoCalendarLangService }, { type: i3.PoDateService }]; }, { value: [{
            type: Input,
            args: ['p-value']
        }], mode: [{
            type: Input,
            args: ['p-mode']
        }], responsive: [{
            type: Input,
            args: ['p-responsive']
        }], partType: [{
            type: Input,
            args: ['p-part-type']
        }], range: [{
            type: Input,
            args: ['p-range']
        }], activateDate: [{
            type: Input,
            args: ['p-activate-date']
        }], selectedValue: [{
            type: Input,
            args: ['p-selected-value']
        }], minDate: [{
            type: Input,
            args: ['p-min-date']
        }], maxDate: [{
            type: Input,
            args: ['p-max-date']
        }], hoverValue: [{
            type: Input,
            args: ['p-hover-value']
        }], headerChange: [{
            type: Output,
            args: ['p-header-change']
        }], selectDate: [{
            type: Output,
            args: ['p-select-date']
        }], hoverDate: [{
            type: Output,
            args: ['p-hover-date']
        }], locale: [{
            type: Input,
            args: ['p-locale']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2FsZW5kYXIvcG8tY2FsZW5kYXItd3JhcHBlci9wby1jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jYWxlbmRhci9wby1jYWxlbmRhci13cmFwcGVyL3BvLWNhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7O0lDUTVELCtCQUF1RTtJQUNyRSxZQUNGO0lBQUEsaUJBQU07OztJQURKLGVBQ0Y7SUFERSwyQ0FDRjs7O0lBYUUsZ0NBQStEO0lBQzdELFlBQ0Y7SUFBQSxpQkFBTzs7OztJQUZpQiw4REFBc0M7SUFDNUQsZUFDRjtJQURFLGlEQUNGOzs7O0lBWEYsK0JBUUM7SUFKQyxpUEFBUyxlQUFBLDRCQUFpQixDQUFBLElBQUMsOE9BQ2IsZUFBQSw0QkFBaUIsQ0FBQSxJQURKLG9MQUViLGVBQUEsc0JBQWMsQ0FBQSxJQUZEO0lBSzNCLG9HQUVPO0lBQ1QsaUJBQU07Ozs7SUFUSiw4REFBc0M7SUFNL0IsZUFBZTtJQUFmLG1DQUFlOzs7O0lBNUI5Qiw2QkFBbUM7SUFDakMsNkNBS0M7SUFGQyx3TUFBYyxl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O29HQWpTVSwwQkFBMEI7NkVBQTFCLDBCQUEwQixnbUJBSDFCLENBQUMsaUJBQWlCLENBQUM7UUNaaEMsOEJBQWlDO1FBQy9CLDhGQWtDZTtRQUVmLDhGQTJCZTtRQUVmLDZGQTBCZTtRQUVmLDZGQWFlO1FBQ2pCLGlCQUFNOztRQTNHVyxlQUFrQjtRQUFsQix1Q0FBa0I7UUFvQ2xCLGVBQW9CO1FBQXBCLHlDQUFvQjtRQTZCcEIsZUFBbUI7UUFBbkIsd0NBQW1CO1FBNEJuQixlQUFZO1FBQVosaUNBQVk7O3VGRC9FaEIsMEJBQTBCO2NBTnRDLFNBQVM7MkJBQ0UscUJBQXFCLGFBRXBCLENBQUMsaUJBQWlCLENBQUMsbUJBQ2IsdUJBQXVCLENBQUMsTUFBTTtvSUFHN0IsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBRUMsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBRVEsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBRUMsUUFBUTtrQkFBN0IsS0FBSzttQkFBQyxhQUFhO1lBRUYsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBRVUsWUFBWTtrQkFBckMsS0FBSzttQkFBQyxpQkFBaUI7WUFFRyxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQjtZQUVKLE9BQU87a0JBQTNCLEtBQUs7bUJBQUMsWUFBWTtZQUVFLE9BQU87a0JBQTNCLEtBQUs7bUJBQUMsWUFBWTtZQUVLLFVBQVU7a0JBQWpDLEtBQUs7bUJBQUMsZUFBZTtZQUVLLFlBQVk7a0JBQXRDLE1BQU07bUJBQUMsaUJBQWlCO1lBRUEsVUFBVTtrQkFBbEMsTUFBTTttQkFBQyxlQUFlO1lBRUMsU0FBUztrQkFBaEMsTUFBTTttQkFBQyxjQUFjO1lBcUJDLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9DYWxlbmRhckxhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcG8tY2FsZW5kYXIubGFuZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9DYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wby1jYWxlbmRhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9EYXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWRhdGUvcG8tZGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tY2FsZW5kYXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BvQ2FsZW5kYXJTZXJ2aWNlXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DYWxlbmRhcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCdwLXZhbHVlJykgdmFsdWU7XHJcblxyXG4gIEBJbnB1dCgncC1tb2RlJykgbW9kZTogJ2RheScgfCAnbW9udGgnIHwgJ3llYXInID0gJ2RheSc7XHJcblxyXG4gIEBJbnB1dCgncC1yZXNwb25zaXZlJykgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ3AtcGFydC10eXBlJykgcGFydFR5cGU6ICdzdGFydCcgfCAnZW5kJztcclxuXHJcbiAgQElucHV0KCdwLXJhbmdlJykgcmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdwLWFjdGl2YXRlLWRhdGUnKSBhY3RpdmF0ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBASW5wdXQoJ3Atc2VsZWN0ZWQtdmFsdWUnKSBzZWxlY3RlZFZhbHVlO1xyXG5cclxuICBASW5wdXQoJ3AtbWluLWRhdGUnKSBtaW5EYXRlO1xyXG5cclxuICBASW5wdXQoJ3AtbWF4LWRhdGUnKSBtYXhEYXRlO1xyXG5cclxuICBASW5wdXQoJ3AtaG92ZXItdmFsdWUnKSBob3ZlclZhbHVlOiBEYXRlO1xyXG5cclxuICBAT3V0cHV0KCdwLWhlYWRlci1jaGFuZ2UnKSBoZWFkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1zZWxlY3QtZGF0ZScpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1ob3Zlci1kYXRlJykgaG92ZXJEYXRlID0gbmV3IFN1YmplY3Q8RGF0ZT4oKS5waXBlKGRlYm91bmNlVGltZSgxMDApKTtcclxuXHJcbiAgY3VycmVudFllYXI6IG51bWJlcjtcclxuICBkaXNwbGF5RGF5czogQXJyYXk8bnVtYmVyPjtcclxuICBkaXNwbGF5RGVjYWRlOiBBcnJheTxudW1iZXI+O1xyXG4gIGRpc3BsYXlGaW5hbERlY2FkZTogbnVtYmVyO1xyXG4gIGRpc3BsYXlNb250aDogYW55O1xyXG4gIGRpc3BsYXlNb250aE51bWJlcjogbnVtYmVyO1xyXG4gIGRpc3BsYXlNb250aHM6IEFycmF5PGFueT4gPSBBcnJheSgpO1xyXG4gIGRpc3BsYXlTdGFydERlY2FkZTogbnVtYmVyO1xyXG4gIGRpc3BsYXlXZWVrRGF5czogQXJyYXk8YW55PiA9IEFycmF5KCk7XHJcbiAgZGlzcGxheVllYXI6IG51bWJlcjtcclxuICBkaXNwbGF5VG9kYXk6IHN0cmluZztcclxuICB0b2RheTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIHByb3RlY3RlZCBjdXJyZW50TW9udGhOdW1iZXI6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgZGF0ZTogRGF0ZTtcclxuICBwcm90ZWN0ZWQgbGFzdERpc3BsYXk6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncC1sb2NhbGUnKSBzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5pbml0aWFsaXplTGFuZ3VhZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vbnRoTGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb0NhbGVuZGFyTGFuZ1NlcnZpY2UuZ2V0TW9udGhMYWJlbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHllYXJMYWJlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBvQ2FsZW5kYXJMYW5nU2VydmljZS5nZXRZZWFyTGFiZWwoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0RheVZpc2libGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGF5JztcclxuICB9XHJcblxyXG4gIGdldCBpc01vbnRoVmlzaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtb250aCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNZZWFyVmlzaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd5ZWFyJztcclxuICB9XHJcblxyXG4gIGdldCBpc1N0YXJ0UGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnRUeXBlID09PSAnc3RhcnQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRW5kUGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnRUeXBlID09PSAnZW5kJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwb0NhbGVuZGFyU2VydmljZTogUG9DYWxlbmRhclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvQ2FsZW5kYXJMYW5nU2VydmljZTogUG9DYWxlbmRhckxhbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb0RhdGU6IFBvRGF0ZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2YXRlRGF0ZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAoYWN0aXZhdGVEYXRlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZShhY3RpdmF0ZURhdGUuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEJhY2tncm91bmRDb2xvcihkaXNwbGF5VmFsdWU6IG51bWJlciwgcHJvcGVydHlWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGlzcGxheVZhbHVlID09PSBwcm9wZXJ0eVZhbHVlID8gJ3BvLWNhbGVuZGFyLWJveC1iYWNrZ3JvdW5kLXNlbGVjdGVkJyA6ICdwby1jYWxlbmRhci1ib3gtYmFja2dyb3VuZCc7XHJcbiAgfVxyXG5cclxuICBnZXREYXlCYWNrZ3JvdW5kQ29sb3IoZGF0ZTogRGF0ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF5Q29sb3IoZGF0ZSwgJ2JhY2tncm91bmQnKTtcclxuICB9XHJcblxyXG4gIGdldERheUZvcmVncm91bmRDb2xvcihkYXRlOiBEYXRlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXREYXlDb2xvcihkYXRlLCAnZm9yZWdyb3VuZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9yZWdyb3VuZENvbG9yKGRpc3BsYXlWYWx1ZTogbnVtYmVyLCBwcm9wZXJ0eVZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBkaXNwbGF5VmFsdWUgPT09IHByb3BlcnR5VmFsdWUgPyAncG8tY2FsZW5kYXItYm94LWZvcmVncm91bmQtc2VsZWN0ZWQnIDogJ3BvLWNhbGVuZGFyLWJveC1mb3JlZ3JvdW5kJztcclxuICB9XHJcblxyXG4gIGlzVG9kYXlVbmF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbkRhdGUgPiB0aGlzLnRvZGF5IHx8IHRoaXMubWF4RGF0ZSA8IHRoaXMudG9kYXk7XHJcbiAgfVxyXG5cclxuICBvbk5leHRNb250aCgpIHtcclxuICAgIHRoaXMuZGlzcGxheU1vbnRoTnVtYmVyIDwgMTFcclxuICAgICAgPyB0aGlzLnVwZGF0ZURpc3BsYXkodGhpcy5kaXNwbGF5WWVhciwgdGhpcy5kaXNwbGF5TW9udGhOdW1iZXIgKyAxKVxyXG4gICAgICA6IHRoaXMudXBkYXRlRGlzcGxheSh0aGlzLmRpc3BsYXlZZWFyICsgMSwgMCk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJDaGFuZ2UuZW1pdCh7IG1vbnRoOiB0aGlzLmRpc3BsYXlNb250aE51bWJlciwgeWVhcjogdGhpcy5kaXNwbGF5WWVhciB9KTtcclxuICB9XHJcblxyXG4gIG9uUHJldmlvdXNNb250aCgpIHtcclxuICAgIGlmICh0aGlzLmRpc3BsYXlNb250aE51bWJlciA+IDApIHtcclxuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRoaXMuZGlzcGxheVllYXIsIHRoaXMuZGlzcGxheU1vbnRoTnVtYmVyIC0gMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodGhpcy5kaXNwbGF5WWVhciAtIDEsIDExKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhlYWRlckNoYW5nZS5lbWl0KHsgbW9udGg6IHRoaXMuZGlzcGxheU1vbnRoTnVtYmVyLCB5ZWFyOiB0aGlzLmRpc3BsYXlZZWFyIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUVudGVyKGRheSkge1xyXG4gICAgKDxTdWJqZWN0PERhdGU+PnRoaXMuaG92ZXJEYXRlKS5uZXh0KGRheSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAoPFN1YmplY3Q8RGF0ZT4+dGhpcy5ob3ZlckRhdGUpLm5leHQobnVsbCk7XHJcbiAgfVxyXG5cclxuICAvLyBBbyBzZWxlY2lvbmFyIHVtYSBkYXRhXHJcbiAgb25TZWxlY3REYXRlKGRhdGU6IERhdGUpIHtcclxuICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQW8gc2VsZWNpb25hciB1bSBtw6pzXHJcbiAgb25TZWxlY3RNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0RGlzcGxheU1vZGUoJ2RheScpO1xyXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KHllYXIsIG1vbnRoKTtcclxuXHJcbiAgICB0aGlzLmhlYWRlckNoYW5nZS5lbWl0KHsgbW9udGgsIHllYXIgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBBbyBzZWxlY2lvbmFyIHVtIGFub1xyXG4gIG9uU2VsZWN0WWVhcih5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcclxuICAgIC8vIFNlIHZlaW8gZGEgdGVsYSBkZSBzZWxlw6fDo28gZGUgbcOqc1xyXG4gICAgdGhpcy5zZWxlY3REaXNwbGF5TW9kZSh0aGlzLmxhc3REaXNwbGF5ID09PSAnbW9udGgnID8gJ21vbnRoJyA6ICdkYXknKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRZZWFyID0geWVhcjtcclxuICAgIHRoaXMudXBkYXRlRGlzcGxheSh5ZWFyLCBtb250aCk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJDaGFuZ2UuZW1pdCh7IG1vbnRoLCB5ZWFyIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlzcGxheU1vZGUobW9kZTogJ21vbnRoJyB8ICdkYXknIHwgJ3llYXInKSB7XHJcbiAgICB0aGlzLmxhc3REaXNwbGF5ID0gdGhpcy5tb2RlO1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVllYXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KHRoaXMuZGlzcGxheVllYXIgKyB2YWx1ZSwgdGhpcy5kaXNwbGF5TW9udGhOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRBbGxZZWFyc0luRGVjYWRlKHllYXI6IG51bWJlcikge1xyXG4gICAgbGV0IGk7XHJcbiAgICBmb3IgKGkgPSB5ZWFyOyBpIDwgeWVhciArIDEwOyBpKyspIHtcclxuICAgICAgdGhpcy5kaXNwbGF5RGVjYWRlLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVxdWFsc0RhdGUoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXHJcbiAgICAgICAgZGF0ZTEuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKClcclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE9idMOpbSB1bSBhcnJheSBkZSB0b2RvcyBvcyBhbm9zIGRlc3RhIGTDqWNhZGFcclxuICBwcml2YXRlIGdldERlY2FkZUFycmF5KHllYXIpIHtcclxuICAgIHRoaXMuZGlzcGxheURlY2FkZSA9IEFycmF5KCk7XHJcblxyXG4gICAgaWYgKHllYXIgJSAxMCAhPT0gMCkge1xyXG4gICAgICB3aGlsZSAoeWVhciAlIDEwICE9PSAwKSB7XHJcbiAgICAgICAgeWVhci0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZURlY2FkZSh5ZWFyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29sb3JGb3JEYXRlKGRhdGU6IERhdGUsIGxvY2FsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnBvRGF0ZS52YWxpZGF0ZURhdGVSYW5nZShkYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSlcclxuICAgICAgPyBgcG8tY2FsZW5kYXItYm94LSR7bG9jYWx9LXNlbGVjdGVkYFxyXG4gICAgICA6IGBwby1jYWxlbmRhci1ib3gtJHtsb2NhbH0tc2VsZWN0ZWQtZGlzYWJsZWRgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2xvckZvckRlZmF1bHREYXRlKGRhdGU6IERhdGUsIGxvY2FsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnBvRGF0ZS52YWxpZGF0ZURhdGVSYW5nZShkYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSlcclxuICAgICAgPyBgcG8tY2FsZW5kYXItYm94LSR7bG9jYWx9YFxyXG4gICAgICA6IGBwby1jYWxlbmRhci1ib3gtJHtsb2NhbH0tZGlzYWJsZWRgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2xvckZvclRvZGF5KGRhdGU6IERhdGUsIGxvY2FsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnBvRGF0ZS52YWxpZGF0ZURhdGVSYW5nZShkYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSlcclxuICAgICAgPyBgcG8tY2FsZW5kYXItYm94LSR7bG9jYWx9LXRvZGF5YFxyXG4gICAgICA6IGBwby1jYWxlbmRhci1ib3gtJHtsb2NhbH0tdG9kYXktZGlzYWJsZWRgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2xvckZvckRhdGVSYW5nZShkYXRlOiBEYXRlLCBsb2NhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb0RhdGUudmFsaWRhdGVEYXRlUmFuZ2UoZGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpXHJcbiAgICAgID8gYHBvLWNhbGVuZGFyLWJveC0ke2xvY2FsfS1pbi1yYW5nZWBcclxuICAgICAgOiBgcG8tY2FsZW5kYXItYm94LSR7bG9jYWx9LWluLXJhbmdlLWRpc2FibGVkYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF5Q29sb3IoZGF0ZTogRGF0ZSwgbG9jYWw6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnNlbGVjdGVkVmFsdWU/LnN0YXJ0O1xyXG4gICAgY29uc3QgZW5kID0gdGhpcy5zZWxlY3RlZFZhbHVlPy5lbmQ7XHJcblxyXG4gICAgaWYgKHRoaXMucmFuZ2UgJiYgKHRoaXMuZXF1YWxzRGF0ZShkYXRlLCBzdGFydCkgfHwgdGhpcy5lcXVhbHNEYXRlKGRhdGUsIGVuZCkpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yRm9yRGF0ZShkYXRlLCBsb2NhbCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2UgJiYgc3RhcnQgJiYgZW5kICYmIGRhdGUgPiBzdGFydCAmJiBkYXRlIDwgZW5kKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yRm9yRGF0ZVJhbmdlKGRhdGUsIGxvY2FsKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5yYW5nZSAmJiBzdGFydCAmJiAhZW5kICYmIGRhdGUgPiBzdGFydCAmJiBkYXRlIDwgdGhpcy5ob3ZlclZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBgcG8tY2FsZW5kYXItYm94LSR7bG9jYWx9LWhvdmVyYDtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMucmFuZ2UgJiYgdGhpcy5lcXVhbHNEYXRlKGRhdGUsIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yRm9yRGF0ZShkYXRlLCBsb2NhbCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXF1YWxzRGF0ZShkYXRlLCB0aGlzLnRvZGF5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2xvckZvclRvZGF5KGRhdGUsIGxvY2FsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yRm9yRGVmYXVsdERhdGUoZGF0ZSwgbG9jYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKHRoaXMuYWN0aXZhdGVEYXRlKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUxhbmd1YWdlKCk7XHJcbiAgICB0aGlzLnNlbGVjdERpc3BsYXlNb2RlKCdkYXknKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxhbmd1YWdlKCkge1xyXG4gICAgdGhpcy5wb0NhbGVuZGFyTGFuZ1NlcnZpY2Uuc2V0TGFuZ3VhZ2UodGhpcy5sb2NhbGUpO1xyXG4gICAgdGhpcy5kaXNwbGF5V2Vla0RheXMgPSB0aGlzLnBvQ2FsZW5kYXJMYW5nU2VydmljZS5nZXRXZWVrRGF5c0FycmF5KCk7XHJcbiAgICB0aGlzLmRpc3BsYXlNb250aHMgPSB0aGlzLnBvQ2FsZW5kYXJMYW5nU2VydmljZS5nZXRNb250aHNBcnJheSgpO1xyXG4gICAgdGhpcy5kaXNwbGF5TW9udGggPSB0aGlzLmRpc3BsYXlNb250aHNbdGhpcy5kaXNwbGF5TW9udGhOdW1iZXJdO1xyXG4gICAgdGhpcy5kaXNwbGF5VG9kYXkgPSB0aGlzLnBvQ2FsZW5kYXJMYW5nU2VydmljZS5nZXRUb2RheUxhYmVsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURhdGUodmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudE1vbnRoTnVtYmVyID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgdGhpcy5jdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIHRoaXMudXBkYXRlRGlzcGxheSh0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aE51bWJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURlY2FkZSh5ZWFyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWRkQWxsWWVhcnNJbkRlY2FkZSh5ZWFyKTtcclxuICAgIHRoaXMuZGlzcGxheVN0YXJ0RGVjYWRlID0geWVhcjtcclxuICAgIHRoaXMuZGlzcGxheUZpbmFsRGVjYWRlID0geWVhciArIDk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURpc3BsYXkoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjYWxlbmRhckFycmF5ID0gdGhpcy5wb0NhbGVuZGFyU2VydmljZS5tb250aERheXMoeWVhciwgbW9udGgpO1xyXG4gICAgdGhpcy5kaXNwbGF5RGF5cyA9IFtdLmNvbmNhdC5hcHBseShbXSwgY2FsZW5kYXJBcnJheSk7XHJcbiAgICB0aGlzLmRpc3BsYXlNb250aE51bWJlciA9IG1vbnRoO1xyXG4gICAgdGhpcy5kaXNwbGF5TW9udGggPSB0aGlzLmRpc3BsYXlNb250aHNbbW9udGhdO1xyXG4gICAgdGhpcy5kaXNwbGF5WWVhciA9IHllYXI7XHJcbiAgICB0aGlzLmdldERlY2FkZUFycmF5KHllYXIpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItd3JhcHBlclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RheVZpc2libGVcIj5cclxuICAgIDxwby1jYWxlbmRhci1oZWFkZXJcclxuICAgICAgW3AtaGlkZS1wcmV2aW91c109XCJpc0VuZFBhcnRcIlxyXG4gICAgICBbcC1oaWRlLW5leHRdPVwiaXNTdGFydFBhcnQgJiYgIXJlc3BvbnNpdmVcIlxyXG4gICAgICAocC1wcmV2aW91cyk9XCJvblByZXZpb3VzTW9udGgoKVwiXHJcbiAgICAgIChwLW5leHQpPVwib25OZXh0TW9udGgoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicG8tY2xpY2thYmxlIHBvLW1yLTFcIiAoY2xpY2spPVwic2VsZWN0RGlzcGxheU1vZGUoJ21vbnRoJylcIj57eyBkaXNwbGF5TW9udGggfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicG8tY2xpY2thYmxlXCIgKGNsaWNrKT1cInNlbGVjdERpc3BsYXlNb2RlKCd5ZWFyJylcIj57eyBkaXNwbGF5WWVhciB9fTwvc3Bhbj5cclxuICAgIDwvcG8tY2FsZW5kYXItaGVhZGVyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1jYWxlbmRhci1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1jYWxlbmRhci1sYWJlbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItbGFiZWxcIiAqbmdGb3I9XCJsZXQgd2Vla0RheSBvZiBkaXNwbGF5V2Vla0RheXNcIj5cclxuICAgICAgICAgIHt7IHdlZWtEYXkgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItY29udGVudC1saXN0LWRheVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGlzcGxheURheXNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJwby1jYWxlbmRhci1kYXlcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0RGF5QmFja2dyb3VuZENvbG9yKGRheSlcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0RGF0ZShkYXkpXCJcclxuICAgICAgICAgIChtb3VzZWVudGVyKT1cIm9uTW91c2VFbnRlcihkYXkpXCJcclxuICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgpXCJcclxuICAgICAgICAgIGF0dHItY2FsZW5kYXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImRheSAhPT0gMFwiIFtuZ0NsYXNzXT1cImdldERheUZvcmVncm91bmRDb2xvcihkYXkpXCI+XHJcbiAgICAgICAgICAgIHt7IGRheS5nZXREYXRlKCkgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTW9udGhWaXNpYmxlXCI+XHJcbiAgICA8cG8tY2FsZW5kYXItaGVhZGVyIChwLXByZXZpb3VzKT1cInVwZGF0ZVllYXIoLTEpXCIgKHAtbmV4dCk9XCJ1cGRhdGVZZWFyKDEpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicG8tY2xpY2thYmxlXCIgKGNsaWNrKT1cInNlbGVjdERpc3BsYXlNb2RlKCd5ZWFyJylcIj5cclxuICAgICAgICB7eyBkaXNwbGF5WWVhciB9fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3BvLWNhbGVuZGFyLWhlYWRlcj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItbGFiZWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLWNhbGVuZGFyLWxhYmVsXCI+XHJcbiAgICAgICAgICB7eyBtb250aExhYmVsIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItY29udGVudC1saXN0LW1vbnRoXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1vbnRoIG9mIGRpc3BsYXlNb250aHM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgY2xhc3M9XCJwby1jYWxlbmRhci1tb250aFwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJnZXRCYWNrZ3JvdW5kQ29sb3IoaSwgZGlzcGxheU1vbnRoTnVtYmVyKVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3RNb250aChkaXNwbGF5WWVhciwgaSlcIlxyXG4gICAgICAgICAgYXR0ci1jYWxlbmRhclxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cImdldEZvcmVncm91bmRDb2xvcihpLCBkaXNwbGF5TW9udGhOdW1iZXIpXCI+XHJcbiAgICAgICAgICAgIHt7IG1vbnRoIH19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1llYXJWaXNpYmxlXCI+XHJcbiAgICA8cG8tY2FsZW5kYXItaGVhZGVyIChwLXByZXZpb3VzKT1cInVwZGF0ZVllYXIoLTEwKVwiIChwLW5leHQpPVwidXBkYXRlWWVhcigxMClcIj5cclxuICAgICAge3sgZGlzcGxheVN0YXJ0RGVjYWRlIH19IC0ge3sgZGlzcGxheUZpbmFsRGVjYWRlIH19XHJcbiAgICA8L3BvLWNhbGVuZGFyLWhlYWRlcj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItbGFiZWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLWNhbGVuZGFyLWxhYmVsXCI+XHJcbiAgICAgICAgICB7eyB5ZWFyTGFiZWwgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItY29udGVudC1saXN0LXllYXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgeWVhciBvZiBkaXNwbGF5RGVjYWRlOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgIGNsYXNzPVwicG8tY2FsZW5kYXIteWVhclwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJnZXRCYWNrZ3JvdW5kQ29sb3IoeWVhciwgY3VycmVudFllYXIpXCJcclxuICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdFllYXIoeWVhciwgZGlzcGxheU1vbnRoTnVtYmVyKVwiXHJcbiAgICAgICAgICBhdHRyLWNhbGVuZGFyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiZ2V0Rm9yZWdyb3VuZENvbG9yKHllYXIsIGN1cnJlbnRZZWFyKVwiPlxyXG4gICAgICAgICAgICB7eyB5ZWFyIH19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmFuZ2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1jYWxlbmRhci1mb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLWNhbGVuZGFyLWZvb3Rlci10b2RheVwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3M9XCJwby1jYWxlbmRhci1mb290ZXItdG9kYXktYnV0dG9uXCJcclxuICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdERhdGUodG9kYXkpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc1RvZGF5VW5hdmFpbGFibGUoKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgZGlzcGxheVRvZGF5IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=