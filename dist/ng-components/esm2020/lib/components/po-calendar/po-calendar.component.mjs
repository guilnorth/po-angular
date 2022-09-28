import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoCalendarBaseComponent } from './po-calendar-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-date/po-date.service";
import * as i2 from "../../services/po-language/po-language.service";
import * as i3 from "@angular/common";
import * as i4 from "./po-calendar-wrapper/po-calendar-wrapper.component";
function PoCalendarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoCalendarComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoCalendarComponent_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function () { return { partType: "end" }; };
function PoCalendarComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PoCalendarComponent_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c0));
} }
const _c1 = function () { return { partType: "start" }; };
function PoCalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, PoCalendarComponent_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵtemplate(2, PoCalendarComponent_ng_template_1_ng_container_2_Template, 2, 3, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction0(3, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.isResponsive);
} }
function PoCalendarComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function PoCalendarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, PoCalendarComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PoCalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-calendar-wrapper", 9);
    i0.ɵɵlistener("p-header-change", function PoCalendarComponent_ng_template_5_Template_po_calendar_wrapper_p_header_change_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const partType_r11 = restoredCtx.partType; const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onHeaderChange($event, partType_r11)); })("p-select-date", function PoCalendarComponent_ng_template_5_Template_po_calendar_wrapper_p_select_date_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const partType_r11 = restoredCtx.partType; const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onSelectDate($event, partType_r11)); })("p-hover-date", function PoCalendarComponent_ng_template_5_Template_po_calendar_wrapper_p_hover_date_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onHoverDate($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r11 = ctx.partType;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-value", ctx_r6.getValue(partType_r11))("p-activate-date", ctx_r6.getActivateDate(partType_r11))("p-locale", ctx_r6.locale)("p-min-date", ctx_r6.minDate)("p-max-date", ctx_r6.maxDate)("p-part-type", partType_r11)("p-range", ctx_r6.isRange)("p-responsive", ctx_r6.isResponsive)("p-selected-value", ctx_r6.value)("p-hover-value", ctx_r6.hoverValue);
} }
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoCalendarComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoCalendarComponent),
        multi: true
    }
];
const poCalendarRangeWidth = 600;
/**
 * @docsExtends PoCalendarBaseComponent
 *
 * @example
 *
 * <example name="po-calendar-basic" title="PO Calendar Basic" >
 *  <file name="sample-po-calendar-basic/sample-po-calendar-basic.component.html"> </file>
 *  <file name="sample-po-calendar-basic/sample-po-calendar-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-calendar-labs" title="PO Calendar Labs" >
 *  <file name="sample-po-calendar-labs/sample-po-calendar-labs.component.html"> </file>
 *  <file name="sample-po-calendar-labs/sample-po-calendar-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-calendar-ticket-sales" title="PO Calendar - Ticket Sales" >
 *  <file name="sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.html"> </file>
 *  <file name="sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.ts"> </file>
 * </example>
 */
export class PoCalendarComponent extends PoCalendarBaseComponent {
    constructor(changeDetector, poDate, languageService) {
        super(poDate, languageService);
        this.changeDetector = changeDetector;
    }
    get isResponsive() {
        return window.innerWidth < poCalendarRangeWidth;
    }
    ngOnInit() {
        this.setActivateDate();
    }
    ngOnChanges(changes) {
        if (changes.minDate || changes.maxDate) {
            this.setActivateDate();
        }
    }
    getActivateDate(partType) {
        if (this.isRange && this.activateDate) {
            return this.activateDate[partType];
        }
        else {
            return this.activateDate;
        }
    }
    getValue(partType) {
        if (this.isRange && this.value) {
            return this.value[partType];
        }
        else {
            return this.value;
        }
    }
    onSelectDate(selectedDate, partType) {
        let newValue;
        if (this.isRange) {
            newValue = this.getValueFromSelectedDate(selectedDate);
            if (partType === 'end' && (!this.value?.start || (this.value.start && this.value.end))) {
                this.setActivateDate(selectedDate);
            }
        }
        else {
            newValue = selectedDate;
            this.setActivateDate(selectedDate);
        }
        this.value = newValue;
        const newModel = this.convertDateToISO(this.value);
        this.updateModel(newModel);
        this.change.emit(newModel);
    }
    onHoverDate(date) {
        this.hoverValue = date;
    }
    onHeaderChange({ month, year }, partType) {
        if (this.isRange) {
            let newStart;
            let newEnd;
            const { start, end } = this.activateDate;
            if (partType === 'end') {
                const newYear = month === 0 ? year - 1 : year;
                newStart = new Date(new Date(start.setMonth(month - 1)).setFullYear(newYear));
                newEnd = new Date(new Date(end.setMonth(month)).setFullYear(year));
            }
            else {
                const newYear = month === 11 ? year + 1 : year;
                newEnd = new Date(new Date(end.setMonth(month + 1)).setFullYear(newYear));
                newStart = new Date(new Date(start.setMonth(month)).setFullYear(year));
            }
            this.activateDate = { start: newStart, end: newEnd };
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(func) {
        this.onTouched = func;
    }
    validate(c) {
        return null;
    }
    writeValue(value) {
        if (value) {
            this.writeDate(value);
        }
        else {
            this.value = null;
        }
        const activateDate = this.getValidateStartDate(value);
        this.setActivateDate(activateDate);
        this.changeDetector.markForCheck();
    }
    getValidateStartDate(value) {
        if (this.isRange) {
            return value?.start || null;
        }
        else if (value instanceof Date || typeof value === 'string') {
            return value;
        }
        return null;
    }
    getValueFromSelectedDate(selectedDate) {
        if (!this.value?.start || this.value.start > selectedDate || (this.value.end && this.value.start)) {
            return { start: new Date(selectedDate), end: null };
        }
        return { start: new Date(this.value.start), end: new Date(selectedDate) };
    }
    convertDateToISO(date) {
        if (this.isRange) {
            const start = date?.start instanceof Date ? this.poDate.convertDateToISO(date.start) : null;
            const end = date?.end instanceof Date ? this.poDate.convertDateToISO(date.end) : null;
            return { start, end };
        }
        else {
            return this.poDate.convertDateToISO(date);
        }
    }
    convertDateFromIso(stringDate) {
        if (stringDate && typeof stringDate === 'string') {
            const { year, month, day } = this.poDate.getDateFromIso(stringDate);
            const date = new Date(year, month - 1, day);
            this.poDate.setYearFrom0To100(date, year);
            return date;
        }
        return null;
    }
    updateModel(value) {
        if (this.propagateChange) {
            this.propagateChange(value);
        }
    }
    writeDate(value) {
        if (this.isRange) {
            const start = value?.start;
            const end = value?.end;
            const newStart = start instanceof Date ? new Date(start) : this.convertDateFromIso(start);
            const newEnd = end instanceof Date ? new Date(end) : this.convertDateFromIso(end);
            this.value = { start: newStart, end: newEnd };
        }
        else {
            this.value = value instanceof Date ? new Date(value) : this.convertDateFromIso(value);
        }
    }
}
PoCalendarComponent.ɵfac = function PoCalendarComponent_Factory(t) { return new (t || PoCalendarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.PoDateService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoCalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCalendarComponent, selectors: [["po-calendar"]], features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["rangeTemplate", ""], ["calendarTemplate", ""], ["calendarWrapper", ""], [1, "po-calendar-range"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "po-calendar"], [3, "ngTemplateOutlet"], [3, "p-value", "p-activate-date", "p-locale", "p-min-date", "p-max-date", "p-part-type", "p-range", "p-responsive", "p-selected-value", "p-hover-value", "p-header-change", "p-select-date", "p-hover-date"]], template: function PoCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoCalendarComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PoCalendarComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoCalendarComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoCalendarComponent_ng_template_5_Template, 1, 10, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", ctx.isRange)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, dependencies: [i3.NgIf, i3.NgTemplateOutlet, i4.PoCalendarWrapperComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCalendarComponent, [{
        type: Component,
        args: [{ selector: 'po-calendar', changeDetection: ChangeDetectionStrategy.OnPush, providers: providers, template: "<ng-container *ngIf=\"isRange; then rangeTemplate; else calendarTemplate\"></ng-container>\r\n\r\n<ng-template #rangeTemplate>\r\n  <div class=\"po-calendar-range\">\r\n    <ng-container *ngTemplateOutlet=\"calendarWrapper; context: { partType: 'start' }\"></ng-container>\r\n    <ng-container *ngIf=\"!isResponsive\">\r\n      <ng-container *ngTemplateOutlet=\"calendarWrapper; context: { partType: 'end' }\"></ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #calendarTemplate>\r\n  <div class=\"po-calendar\">\r\n    <ng-template [ngTemplateOutlet]=\"calendarWrapper\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #calendarWrapper let-partType=\"partType\">\r\n  <po-calendar-wrapper\r\n    [p-value]=\"getValue(partType)\"\r\n    [p-activate-date]=\"getActivateDate(partType)\"\r\n    [p-locale]=\"locale\"\r\n    [p-min-date]=\"minDate\"\r\n    [p-max-date]=\"maxDate\"\r\n    [p-part-type]=\"partType\"\r\n    [p-range]=\"isRange\"\r\n    [p-responsive]=\"isResponsive\"\r\n    [p-selected-value]=\"value\"\r\n    [p-hover-value]=\"hoverValue\"\r\n    (p-header-change)=\"onHeaderChange($event, partType)\"\r\n    (p-select-date)=\"onSelectDate($event, partType)\"\r\n    (p-hover-date)=\"onHoverDate($event)\"\r\n  >\r\n  </po-calendar-wrapper>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PoDateService }, { type: i2.PoLanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNhbGVuZGFyL3BvLWNhbGVuZGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jYWxlbmRhci9wby1jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBSVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztJQ1h2RSx3QkFBd0Y7OztJQUlwRix3QkFBaUc7OztJQUUvRix3QkFBK0Y7Ozs7SUFEakcsNkJBQW9DO0lBQ2xDLG1IQUErRjtJQUNqRywwQkFBZTs7OztJQURFLGVBQW1DO0lBQW5DLHNDQUFtQyx1REFBQTs7OztJQUh0RCw4QkFBK0I7SUFDN0Isb0dBQWlHO0lBQ2pHLG9HQUVlO0lBQ2pCLGlCQUFNOzs7O0lBSlcsZUFBbUM7SUFBbkMsc0NBQW1DLHVEQUFBO0lBQ25DLGVBQW1CO0lBQW5CLDJDQUFtQjs7OztJQU1wQyw4QkFBeUI7SUFDdkIsa0dBQWdFO0lBQ2xFLGlCQUFNOzs7O0lBRFMsZUFBb0M7SUFBcEMsc0NBQW9DOzs7O0lBS25ELDhDQWNDO0lBSEMsZ1JBQW1CLGVBQUEsNENBQWdDLENBQUEsSUFBQywrUEFDbkMsZUFBQSwwQ0FBOEIsQ0FBQSxJQURLLDhMQUVwQyxlQUFBLDJCQUFtQixDQUFBLElBRmlCO0lBSXRELGlCQUFzQjs7OztJQWRwQix1REFBOEIseURBQUEsMkJBQUEsOEJBQUEsOEJB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LENBQUM7U0FDdkY7SUFDSCxDQUFDOztzRkF2S1UsbUJBQW1CO3NFQUFuQixtQkFBbUIsaUVBRjlCLFNBQVM7UUMxRFgsc0ZBQXdGO1FBRXhGLHFIQU9jO1FBQ2QscUhBSWM7UUFFZCxzSEFpQmM7Ozs7UUFqQ0Msa0NBQWUsaUJBQUEsaUJBQUE7O3VGRDREakIsbUJBQW1CO2NBTi9CLFNBQVM7MkJBQ0UsYUFBYSxtQkFFTix1QkFBdUIsQ0FBQyxNQUFNLGFBQy9DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9DYWxlbmRhckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWNhbGVuZGFyLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DYWxlbmRhckxhbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1jYWxlbmRhci5sYW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tZGF0ZS9wby1kYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuY29uc3QgcHJvdmlkZXJzID0gW1xyXG4gIHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0NhbGVuZGFyQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0NhbGVuZGFyQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgcG9DYWxlbmRhclJhbmdlV2lkdGggPSA2MDA7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvQ2FsZW5kYXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jYWxlbmRhci1iYXNpY1wiIHRpdGxlPVwiUE8gQ2FsZW5kYXIgQmFzaWNcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNhbGVuZGFyLWJhc2ljL3NhbXBsZS1wby1jYWxlbmRhci1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNhbGVuZGFyLWJhc2ljL3NhbXBsZS1wby1jYWxlbmRhci1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jYWxlbmRhci1sYWJzXCIgdGl0bGU9XCJQTyBDYWxlbmRhciBMYWJzXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jYWxlbmRhci1sYWJzL3NhbXBsZS1wby1jYWxlbmRhci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2FsZW5kYXItbGFicy9zYW1wbGUtcG8tY2FsZW5kYXItbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jYWxlbmRhci10aWNrZXQtc2FsZXNcIiB0aXRsZT1cIlBPIENhbGVuZGFyIC0gVGlja2V0IFNhbGVzXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jYWxlbmRhci10aWNrZXQtc2FsZXMvc2FtcGxlLXBvLWNhbGVuZGFyLXRpY2tldC1zYWxlcy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNhbGVuZGFyLXRpY2tldC1zYWxlcy9zYW1wbGUtcG8tY2FsZW5kYXItdGlja2V0LXNhbGVzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tY2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgUG9DYWxlbmRhckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaG92ZXJWYWx1ZTogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHBvRGF0ZTogUG9EYXRlU2VydmljZSwgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgc3VwZXIocG9EYXRlLCBsYW5ndWFnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzUmVzcG9uc2l2ZSgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IHBvQ2FsZW5kYXJSYW5nZVdpZHRoO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldEFjdGl2YXRlRGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSB8fCBjaGFuZ2VzLm1heERhdGUpIHtcclxuICAgICAgdGhpcy5zZXRBY3RpdmF0ZURhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGl2YXRlRGF0ZShwYXJ0VHlwZSkge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLmFjdGl2YXRlRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZURhdGVbcGFydFR5cGVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUocGFydFR5cGUpIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVtwYXJ0VHlwZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0RGF0ZShzZWxlY3RlZERhdGUsIHBhcnRUeXBlPykge1xyXG4gICAgbGV0IG5ld1ZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVNlbGVjdGVkRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgaWYgKHBhcnRUeXBlID09PSAnZW5kJyAmJiAoIXRoaXMudmFsdWU/LnN0YXJ0IHx8ICh0aGlzLnZhbHVlLnN0YXJ0ICYmIHRoaXMudmFsdWUuZW5kKSkpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2YXRlRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkRGF0ZTtcclxuICAgICAgdGhpcy5zZXRBY3RpdmF0ZURhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICBjb25zdCBuZXdNb2RlbCA9IHRoaXMuY29udmVydERhdGVUb0lTTyh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlTW9kZWwobmV3TW9kZWwpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXdNb2RlbCk7XHJcbiAgfVxyXG5cclxuICBvbkhvdmVyRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBkYXRlO1xyXG4gIH1cclxuXHJcbiAgb25IZWFkZXJDaGFuZ2UoeyBtb250aCwgeWVhciB9LCBwYXJ0VHlwZSkge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBsZXQgbmV3U3RhcnQ7XHJcbiAgICAgIGxldCBuZXdFbmQ7XHJcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5hY3RpdmF0ZURhdGU7XHJcblxyXG4gICAgICBpZiAocGFydFR5cGUgPT09ICdlbmQnKSB7XHJcbiAgICAgICAgY29uc3QgbmV3WWVhciA9IG1vbnRoID09PSAwID8geWVhciAtIDEgOiB5ZWFyO1xyXG5cclxuICAgICAgICBuZXdTdGFydCA9IG5ldyBEYXRlKG5ldyBEYXRlKHN0YXJ0LnNldE1vbnRoKG1vbnRoIC0gMSkpLnNldEZ1bGxZZWFyKG5ld1llYXIpKTtcclxuICAgICAgICBuZXdFbmQgPSBuZXcgRGF0ZShuZXcgRGF0ZShlbmQuc2V0TW9udGgobW9udGgpKS5zZXRGdWxsWWVhcih5ZWFyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbmV3WWVhciA9IG1vbnRoID09PSAxMSA/IHllYXIgKyAxIDogeWVhcjtcclxuXHJcbiAgICAgICAgbmV3RW5kID0gbmV3IERhdGUobmV3IERhdGUoZW5kLnNldE1vbnRoKG1vbnRoICsgMSkpLnNldEZ1bGxZZWFyKG5ld1llYXIpKTtcclxuICAgICAgICBuZXdTdGFydCA9IG5ldyBEYXRlKG5ldyBEYXRlKHN0YXJ0LnNldE1vbnRoKG1vbnRoKSkuc2V0RnVsbFllYXIoeWVhcikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFjdGl2YXRlRGF0ZSA9IHsgc3RhcnQ6IG5ld1N0YXJ0LCBlbmQ6IG5ld0VuZCB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZnVuYzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmM7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy53cml0ZURhdGUodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhdGVEYXRlID0gdGhpcy5nZXRWYWxpZGF0ZVN0YXJ0RGF0ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEFjdGl2YXRlRGF0ZShhY3RpdmF0ZURhdGUpO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZhbGlkYXRlU3RhcnREYXRlKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZT8uc3RhcnQgfHwgbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZUZyb21TZWxlY3RlZERhdGUoc2VsZWN0ZWREYXRlOiBEYXRlKTogeyBzdGFydDogRGF0ZTsgZW5kPzogRGF0ZSB9IHtcclxuICAgIGlmICghdGhpcy52YWx1ZT8uc3RhcnQgfHwgdGhpcy52YWx1ZS5zdGFydCA+IHNlbGVjdGVkRGF0ZSB8fCAodGhpcy52YWx1ZS5lbmQgJiYgdGhpcy52YWx1ZS5zdGFydCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3RhcnQ6IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSksIGVuZDogbnVsbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN0YXJ0OiBuZXcgRGF0ZSh0aGlzLnZhbHVlLnN0YXJ0KSwgZW5kOiBuZXcgRGF0ZShzZWxlY3RlZERhdGUpIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnREYXRlVG9JU08oZGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBzdGFydCA9IGRhdGU/LnN0YXJ0IGluc3RhbmNlb2YgRGF0ZSA/IHRoaXMucG9EYXRlLmNvbnZlcnREYXRlVG9JU08oZGF0ZS5zdGFydCkgOiBudWxsO1xyXG4gICAgICBjb25zdCBlbmQgPSBkYXRlPy5lbmQgaW5zdGFuY2VvZiBEYXRlID8gdGhpcy5wb0RhdGUuY29udmVydERhdGVUb0lTTyhkYXRlLmVuZCkgOiBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9EYXRlLmNvbnZlcnREYXRlVG9JU08oZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnREYXRlRnJvbUlzbyhzdHJpbmdEYXRlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzdHJpbmdEYXRlICYmIHR5cGVvZiBzdHJpbmdEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IHRoaXMucG9EYXRlLmdldERhdGVGcm9tSXNvKHN0cmluZ0RhdGUpO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG4gICAgICB0aGlzLnBvRGF0ZS5zZXRZZWFyRnJvbTBUbzEwMChkYXRlLCB5ZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVNb2RlbCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgd3JpdGVEYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3Qgc3RhcnQgPSB2YWx1ZT8uc3RhcnQ7XHJcbiAgICAgIGNvbnN0IGVuZCA9IHZhbHVlPy5lbmQ7XHJcblxyXG4gICAgICBjb25zdCBuZXdTdGFydCA9IHN0YXJ0IGluc3RhbmNlb2YgRGF0ZSA/IG5ldyBEYXRlKHN0YXJ0KSA6IHRoaXMuY29udmVydERhdGVGcm9tSXNvKHN0YXJ0KTtcclxuICAgICAgY29uc3QgbmV3RW5kID0gZW5kIGluc3RhbmNlb2YgRGF0ZSA/IG5ldyBEYXRlKGVuZCkgOiB0aGlzLmNvbnZlcnREYXRlRnJvbUlzbyhlbmQpO1xyXG5cclxuICAgICAgdGhpcy52YWx1ZSA9IHsgc3RhcnQ6IG5ld1N0YXJ0LCBlbmQ6IG5ld0VuZCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IHRoaXMuY29udmVydERhdGVGcm9tSXNvKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2U7IHRoZW4gcmFuZ2VUZW1wbGF0ZTsgZWxzZSBjYWxlbmRhclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI3JhbmdlVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWNhbGVuZGFyLXJhbmdlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2FsZW5kYXJXcmFwcGVyOyBjb250ZXh0OiB7IHBhcnRUeXBlOiAnc3RhcnQnIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNSZXNwb25zaXZlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjYWxlbmRhcldyYXBwZXI7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdlbmQnIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2NhbGVuZGFyVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWNhbGVuZGFyXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2FsZW5kYXJXcmFwcGVyXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY2FsZW5kYXJXcmFwcGVyIGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgPHBvLWNhbGVuZGFyLXdyYXBwZXJcclxuICAgIFtwLXZhbHVlXT1cImdldFZhbHVlKHBhcnRUeXBlKVwiXHJcbiAgICBbcC1hY3RpdmF0ZS1kYXRlXT1cImdldEFjdGl2YXRlRGF0ZShwYXJ0VHlwZSlcIlxyXG4gICAgW3AtbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICBbcC1taW4tZGF0ZV09XCJtaW5EYXRlXCJcclxuICAgIFtwLW1heC1kYXRlXT1cIm1heERhdGVcIlxyXG4gICAgW3AtcGFydC10eXBlXT1cInBhcnRUeXBlXCJcclxuICAgIFtwLXJhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgW3AtcmVzcG9uc2l2ZV09XCJpc1Jlc3BvbnNpdmVcIlxyXG4gICAgW3Atc2VsZWN0ZWQtdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgW3AtaG92ZXItdmFsdWVdPVwiaG92ZXJWYWx1ZVwiXHJcbiAgICAocC1oZWFkZXItY2hhbmdlKT1cIm9uSGVhZGVyQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgIChwLXNlbGVjdC1kYXRlKT1cIm9uU2VsZWN0RGF0ZSgkZXZlbnQsIHBhcnRUeXBlKVwiXHJcbiAgICAocC1ob3Zlci1kYXRlKT1cIm9uSG92ZXJEYXRlKCRldmVudClcIlxyXG4gID5cclxuICA8L3BvLWNhbGVuZGFyLXdyYXBwZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==