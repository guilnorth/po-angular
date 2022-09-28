import { Component, Input } from '@angular/core';
import { PoInfoOrientation } from '@po-ui/ng-components';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@po-ui/ng-components";
function PoPageJobSchedulerSummaryComponent_po_info_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-info", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-label", ctx_r0.literals.process)("p-orientation", ctx_r0.infoOrientation)("p-value", ctx_r0.value.processID);
} }
function PoPageJobSchedulerSummaryComponent_po_info_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-info", 2);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-label", ctx_r1.literals.frequency)("p-orientation", ctx_r1.infoOrientation)("p-value", ctx_r1.frequencyValue);
} }
function PoPageJobSchedulerSummaryComponent_po_info_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-info", 2);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-label", ctx_r2.literals.execution)("p-orientation", ctx_r2.infoOrientation)("p-value", ctx_r2.executionValue);
} }
function PoPageJobSchedulerSummaryComponent_po_widget_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-widget", 4);
    i0.ɵɵelement(1, "po-dynamic-view", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-title", ctx_r3.literals.parameters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-fields", ctx_r3.parameters)("p-value", ctx_r3.value.executionParameter);
} }
export class PoPageJobSchedulerSummaryComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.literals = {};
        this.parameters = [];
        this.value = {};
        this.noParameters = true;
        this.executionValue = '';
        this.firstExecutionValue = '';
        this.infoOrientation = PoInfoOrientation.Horizontal;
        this.periodicityValue = '';
        this.frequencyValue = '';
        this.rangeLimitHour = '';
        this.rangeLimitDay = '';
        this.recurrentValue = '';
    }
    ngOnInit() {
        const { periodicity, hour, dayOfMonth, daysOfWeek, recurrent, firstExecution, firstExecutionHour, frequency, rangeLimitHour, rangeLimitDay } = this.value;
        this.periodicityValue = this.getPeriodicityLabel(periodicity);
        if (frequency) {
            this.frequencyValue = this.getFrequencyValue(frequency, periodicity);
        }
        this.executionValue = this.getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay);
        this.firstExecutionValue = this.getFirstExecutionLabel(firstExecution, firstExecutionHour);
        this.recurrentValue = this.getRecurrentValue(recurrent);
    }
    getFrequencyValue(frequency, periodicity) {
        return frequency['value'] && frequency['type'] && periodicity !== 'single'
            ? `${frequency['value']} - ${frequency['type']}`
            : '';
    }
    getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay) {
        switch (periodicity) {
            case 'daily':
                return this.getHourLabel(hour, rangeLimitHour);
            case 'monthly':
                return this.getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay);
            case 'weekly':
                return this.getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour);
            default:
                return this.literals.notReported;
        }
    }
    getFirstExecutionLabel(firstExecution, firstExecutionHour) {
        if (firstExecution) {
            const date = this.datePipe.transform(firstExecution, 'dd/MM/yyyy', '-0200');
            return `${date} ${this.getHourLabel(firstExecutionHour)}`;
        }
        else {
            return this.literals.notReported;
        }
    }
    getHourLabel(hour, rangeLimitHour) {
        return `${rangeLimitHour ? this.literals.from : this.literals.at} ${hour || '00:00'} ${rangeLimitHour ? this.literals.to + ' ' + rangeLimitHour : ''}`;
    }
    getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay) {
        const hourLabel = this.getHourLabel(hour, rangeLimitHour);
        return `${rangeLimitDay ? this.literals.from : ''} ${dayOfMonth} ${rangeLimitDay ? this.literals.to : ''} ${rangeLimitDay ? rangeLimitDay : ''} ${hourLabel}`;
    }
    getPeriodicityLabel(periodicity) {
        switch (periodicity) {
            case 'daily':
                return this.literals.daily;
            case 'monthly':
                return this.literals.monthly;
            case 'weekly':
                return this.literals.weekly;
            default:
                return this.literals.single;
        }
    }
    getRecurrentValue(recurrent) {
        return recurrent ? this.literals.yes : this.literals.no;
    }
    getSorterWeekDays() {
        return {
            'sunday': 0,
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6
        };
    }
    getTranslateWeekDay(day) {
        const days = {
            Sunday: this.literals.sunday,
            Monday: this.literals.monday,
            Tuesday: this.literals.tuesday,
            Wednesday: this.literals.wednesday,
            Thursday: this.literals.thursday,
            Friday: this.literals.friday,
            Saturday: this.literals.saturday
        };
        return days[day] || '';
    }
    getWeekDaysLabel(days = []) {
        const weekDaysSorted = this.sortWeekDays(days);
        return weekDaysSorted.map(day => this.getTranslateWeekDay(day)).join(', ');
    }
    getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour) {
        if (daysOfWeek && Array.isArray(daysOfWeek)) {
            return `${this.getWeekDaysLabel(daysOfWeek)} ${this.getHourLabel(hour, rangeLimitHour)}`;
        }
        else {
            return this.literals.notReported;
        }
    }
    sortWeekDays(days = []) {
        const sorterWeekDays = this.getSorterWeekDays();
        return days.sort((a, b) => {
            const currDay = a.toLowerCase();
            const nextDay = b.toLowerCase();
            return sorterWeekDays[currDay] > sorterWeekDays[nextDay] ? 1 : -1;
        });
    }
}
PoPageJobSchedulerSummaryComponent.ɵfac = function PoPageJobSchedulerSummaryComponent_Factory(t) { return new (t || PoPageJobSchedulerSummaryComponent)(i0.ɵɵdirectiveInject(i1.DatePipe)); };
PoPageJobSchedulerSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerSummaryComponent, selectors: [["po-page-job-scheduler-summary"]], inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], value: ["p-value", "value"], noParameters: ["p-no-parameters", "noParameters"] }, decls: 8, vars: 13, consts: [[1, "po-md-12"], [3, "p-label", "p-orientation", "p-value", 4, "ngIf"], [3, "p-label", "p-orientation", "p-value"], ["class", "po-pt-1 po-pb-1 po-md-12", 3, "p-title", 4, "ngIf"], [1, "po-pt-1", "po-pb-1", "po-md-12", 3, "p-title"], [3, "p-fields", "p-value"]], template: function PoPageJobSchedulerSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoPageJobSchedulerSummaryComponent_po_info_1_Template, 1, 3, "po-info", 1);
        i0.ɵɵelement(2, "po-info", 2);
        i0.ɵɵtemplate(3, PoPageJobSchedulerSummaryComponent_po_info_3_Template, 1, 3, "po-info", 1);
        i0.ɵɵtemplate(4, PoPageJobSchedulerSummaryComponent_po_info_4_Template, 1, 3, "po-info", 1);
        i0.ɵɵelement(5, "po-info", 2)(6, "po-info", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, PoPageJobSchedulerSummaryComponent_po_widget_7_Template, 2, 3, "po-widget", 3);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.noParameters);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-label", ctx.literals.periodicity)("p-orientation", ctx.infoOrientation)("p-value", ctx.periodicityValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.frequencyValue !== "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value.periodicity !== "single");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-label", ctx.literals.recurrent)("p-orientation", ctx.infoOrientation)("p-value", ctx.recurrentValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-label", ctx.literals.firstExecution)("p-orientation", ctx.infoOrientation)("p-value", ctx.firstExecutionValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length);
    } }, dependencies: [i1.NgIf, i2.PoDynamicViewComponent, i2.PoInfoComponent, i2.PoWidgetComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerSummaryComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler-summary', template: "<div class=\"po-md-12\">\r\n  <po-info\r\n    *ngIf=\"noParameters\"\r\n    [p-label]=\"literals.process\"\r\n    [p-orientation]=\"infoOrientation\"\r\n    [p-value]=\"value.processID\"\r\n  >\r\n  </po-info>\r\n\r\n  <po-info [p-label]=\"literals.periodicity\" [p-orientation]=\"infoOrientation\" [p-value]=\"periodicityValue\"> </po-info>\r\n\r\n  <po-info\r\n    *ngIf=\"frequencyValue !== ''\"\r\n    [p-label]=\"literals.frequency\"\r\n    [p-orientation]=\"infoOrientation\"\r\n    [p-value]=\"frequencyValue\"\r\n  >\r\n  </po-info>\r\n\r\n  <po-info\r\n    *ngIf=\"value.periodicity !== 'single'\"\r\n    [p-label]=\"literals.execution\"\r\n    [p-orientation]=\"infoOrientation\"\r\n    [p-value]=\"executionValue\"\r\n  >\r\n  </po-info>\r\n\r\n  <po-info [p-label]=\"literals.recurrent\" [p-orientation]=\"infoOrientation\" [p-value]=\"recurrentValue\"> </po-info>\r\n\r\n  <po-info [p-label]=\"literals.firstExecution\" [p-orientation]=\"infoOrientation\" [p-value]=\"firstExecutionValue\">\r\n  </po-info>\r\n</div>\r\n\r\n<po-widget *ngIf=\"parameters && parameters.length\" class=\"po-pt-1 po-pb-1 po-md-12\" [p-title]=\"literals.parameters\">\r\n  <po-dynamic-view [p-fields]=\"parameters\" [p-value]=\"value.executionParameter\"> </po-dynamic-view>\r\n</po-widget>\r\n" }]
    }], function () { return [{ type: i1.DatePipe }]; }, { literals: [{
            type: Input,
            args: ['p-literals']
        }], parameters: [{
            type: Input,
            args: ['p-parameters']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], noParameters: [{
            type: Input,
            args: ['p-no-parameters']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFzQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQ0YzRSw2QkFNVTs7O0lBSlIsaURBQTRCLHlDQUFBLG1DQUFBOzs7SUFROUIsNkJBTVU7OztJQUpSLG1EQUE4Qix5Q0FBQSxrQ0FBQTs7O0lBTWhDLDZCQU1VOzs7SUFKUixtREFBOEIseUNBQUEsa0NBQUE7OztJQVlsQyxvQ0FBb0g7SUFDbEgscUNBQWlHO0lBQ25HLGlCQUFZOzs7SUFGd0Usb0RBQStCO0lBQ2hHLGVBQXVCO0lBQXZCLDRDQUF1Qiw0Q0FBQTs7QUR2QjFDLE1BQU0sT0FBTyxrQ0FBa0M7SUFrQjdDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFqQmpCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUE4QixFQUFFLENBQUM7UUFFaEQsVUFBSyxHQUFnQyxFQUFFLENBQUM7UUFFaEMsaUJBQVksR0FB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QW5DLHFEQUFtQyxzQ0FBQSxvQ0FBQTtRQUlsQyxlQUFxQztRQUFyQyw4REFBcUM7O3VGRHRCcEMsa0NBQWtDO2NBSjlDLFNBQVM7MkJBQ0UsK0JBQStCOzJEQUlwQixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFSSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFFSCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFVSxZQUFZO2tCQUFyQyxLQUFLO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNWaWV3RmllbGQsIFBvSW5mb09yaWVudGF0aW9uIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tam9iLXNjaGVkdWxlci1pbnRlcm5hbC5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUpvYlNjaGVkdWxlclN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzID0gPGFueT57fTtcclxuXHJcbiAgQElucHV0KCdwLXBhcmFtZXRlcnMnKSBwYXJhbWV0ZXJzOiBBcnJheTxQb0R5bmFtaWNWaWV3RmllbGQ+ID0gW107XHJcblxyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlOiBQb0pvYlNjaGVkdWxlckludGVybmFsID0gPGFueT57fTtcclxuXHJcbiAgQElucHV0KCdwLW5vLXBhcmFtZXRlcnMnKSBub1BhcmFtZXRlcnM6IEJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBleGVjdXRpb25WYWx1ZSA9ICcnO1xyXG4gIGZpcnN0RXhlY3V0aW9uVmFsdWUgPSAnJztcclxuICBpbmZvT3JpZW50YXRpb24gPSBQb0luZm9PcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xyXG4gIHBlcmlvZGljaXR5VmFsdWUgPSAnJztcclxuICBmcmVxdWVuY3lWYWx1ZSA9ICcnO1xyXG4gIHJhbmdlTGltaXRIb3VyID0gJyc7XHJcbiAgcmFuZ2VMaW1pdERheSA9ICcnO1xyXG4gIHJlY3VycmVudFZhbHVlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGVyaW9kaWNpdHksXHJcbiAgICAgIGhvdXIsXHJcbiAgICAgIGRheU9mTW9udGgsXHJcbiAgICAgIGRheXNPZldlZWssXHJcbiAgICAgIHJlY3VycmVudCxcclxuICAgICAgZmlyc3RFeGVjdXRpb24sXHJcbiAgICAgIGZpcnN0RXhlY3V0aW9uSG91cixcclxuICAgICAgZnJlcXVlbmN5LFxyXG4gICAgICByYW5nZUxpbWl0SG91cixcclxuICAgICAgcmFuZ2VMaW1pdERheVxyXG4gICAgfSA9IHRoaXMudmFsdWU7XHJcblxyXG4gICAgdGhpcy5wZXJpb2RpY2l0eVZhbHVlID0gdGhpcy5nZXRQZXJpb2RpY2l0eUxhYmVsKHBlcmlvZGljaXR5KTtcclxuICAgIGlmIChmcmVxdWVuY3kpIHtcclxuICAgICAgdGhpcy5mcmVxdWVuY3lWYWx1ZSA9IHRoaXMuZ2V0RnJlcXVlbmN5VmFsdWUoZnJlcXVlbmN5LCBwZXJpb2RpY2l0eSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV4ZWN1dGlvblZhbHVlID0gdGhpcy5nZXRFeGVjdXRpb25WYWx1ZShcclxuICAgICAgcGVyaW9kaWNpdHksXHJcbiAgICAgIGhvdXIsXHJcbiAgICAgIGRheXNPZldlZWssXHJcbiAgICAgIGRheU9mTW9udGgsXHJcbiAgICAgIHJhbmdlTGltaXRIb3VyLFxyXG4gICAgICByYW5nZUxpbWl0RGF5XHJcbiAgICApO1xyXG4gICAgdGhpcy5maXJzdEV4ZWN1dGlvblZhbHVlID0gdGhpcy5nZXRGaXJzdEV4ZWN1dGlvbkxhYmVsKGZpcnN0RXhlY3V0aW9uLCBmaXJzdEV4ZWN1dGlvbkhvdXIpO1xyXG4gICAgdGhpcy5yZWN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0UmVjdXJyZW50VmFsdWUocmVjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RnJlcXVlbmN5VmFsdWUoZnJlcXVlbmN5LCBwZXJpb2RpY2l0eSkge1xyXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVsndmFsdWUnXSAmJiBmcmVxdWVuY3lbJ3R5cGUnXSAmJiBwZXJpb2RpY2l0eSAhPT0gJ3NpbmdsZSdcclxuICAgICAgPyBgJHtmcmVxdWVuY3lbJ3ZhbHVlJ119IC0gJHtmcmVxdWVuY3lbJ3R5cGUnXX1gXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV4ZWN1dGlvblZhbHVlKFxyXG4gICAgcGVyaW9kaWNpdHk6IHN0cmluZyxcclxuICAgIGhvdXI/OiBzdHJpbmcsXHJcbiAgICBkYXlzT2ZXZWVrPzogQXJyYXk8c3RyaW5nPixcclxuICAgIGRheU9mTW9udGg/OiBudW1iZXIsXHJcbiAgICByYW5nZUxpbWl0SG91cj86IHN0cmluZyxcclxuICAgIHJhbmdlTGltaXREYXk/OiBudW1iZXJcclxuICApIHtcclxuICAgIHN3aXRjaCAocGVyaW9kaWNpdHkpIHtcclxuICAgICAgY2FzZSAnZGFpbHknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEhvdXJMYWJlbChob3VyLCByYW5nZUxpbWl0SG91cik7XHJcbiAgICAgIGNhc2UgJ21vbnRobHknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1vbnRobHlMYWJlbEV4ZWN1dGlvbihkYXlPZk1vbnRoLCBob3VyLCByYW5nZUxpbWl0SG91ciwgcmFuZ2VMaW1pdERheSk7XHJcbiAgICAgIGNhc2UgJ3dlZWtseSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla2x5TGFiZWxFeGVjdXRpb24oZGF5c09mV2VlaywgaG91ciwgcmFuZ2VMaW1pdEhvdXIpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmxpdGVyYWxzLm5vdFJlcG9ydGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaXJzdEV4ZWN1dGlvbkxhYmVsKGZpcnN0RXhlY3V0aW9uOiBEYXRlLCBmaXJzdEV4ZWN1dGlvbkhvdXI/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpcnN0RXhlY3V0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShmaXJzdEV4ZWN1dGlvbiwgJ2RkL01NL3l5eXknLCAnLTAyMDAnKTtcclxuXHJcbiAgICAgIHJldHVybiBgJHtkYXRlfSAke3RoaXMuZ2V0SG91ckxhYmVsKGZpcnN0RXhlY3V0aW9uSG91cil9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpdGVyYWxzLm5vdFJlcG9ydGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIb3VyTGFiZWwoaG91cjogc3RyaW5nLCByYW5nZUxpbWl0SG91cj8pIHtcclxuICAgIHJldHVybiBgJHtyYW5nZUxpbWl0SG91ciA/IHRoaXMubGl0ZXJhbHMuZnJvbSA6IHRoaXMubGl0ZXJhbHMuYXR9ICR7aG91ciB8fCAnMDA6MDAnfSAke1xyXG4gICAgICByYW5nZUxpbWl0SG91ciA/IHRoaXMubGl0ZXJhbHMudG8gKyAnICcgKyByYW5nZUxpbWl0SG91ciA6ICcnXHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TW9udGhseUxhYmVsRXhlY3V0aW9uKGRheU9mTW9udGg6IG51bWJlciwgaG91cjogc3RyaW5nLCByYW5nZUxpbWl0SG91cj86IHN0cmluZywgcmFuZ2VMaW1pdERheT86IG51bWJlcikge1xyXG4gICAgY29uc3QgaG91ckxhYmVsID0gdGhpcy5nZXRIb3VyTGFiZWwoaG91ciwgcmFuZ2VMaW1pdEhvdXIpO1xyXG5cclxuICAgIHJldHVybiBgJHtyYW5nZUxpbWl0RGF5ID8gdGhpcy5saXRlcmFscy5mcm9tIDogJyd9ICR7ZGF5T2ZNb250aH0gJHtyYW5nZUxpbWl0RGF5ID8gdGhpcy5saXRlcmFscy50byA6ICcnfSAke1xyXG4gICAgICByYW5nZUxpbWl0RGF5ID8gcmFuZ2VMaW1pdERheSA6ICcnXHJcbiAgICB9ICR7aG91ckxhYmVsfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBlcmlvZGljaXR5TGFiZWwocGVyaW9kaWNpdHkpIHtcclxuICAgIHN3aXRjaCAocGVyaW9kaWNpdHkpIHtcclxuICAgICAgY2FzZSAnZGFpbHknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmxpdGVyYWxzLmRhaWx5O1xyXG4gICAgICBjYXNlICdtb250aGx5JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5saXRlcmFscy5tb250aGx5O1xyXG4gICAgICBjYXNlICd3ZWVrbHknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmxpdGVyYWxzLndlZWtseTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5saXRlcmFscy5zaW5nbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlY3VycmVudFZhbHVlKHJlY3VycmVudDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcmVjdXJyZW50ID8gdGhpcy5saXRlcmFscy55ZXMgOiB0aGlzLmxpdGVyYWxzLm5vO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTb3J0ZXJXZWVrRGF5cygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdzdW5kYXknOiAwLFxyXG4gICAgICAnbW9uZGF5JzogMSxcclxuICAgICAgJ3R1ZXNkYXknOiAyLFxyXG4gICAgICAnd2VkbmVzZGF5JzogMyxcclxuICAgICAgJ3RodXJzZGF5JzogNCxcclxuICAgICAgJ2ZyaWRheSc6IDUsXHJcbiAgICAgICdzYXR1cmRheSc6IDZcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRyYW5zbGF0ZVdlZWtEYXkoZGF5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZGF5cyA9IHtcclxuICAgICAgU3VuZGF5OiB0aGlzLmxpdGVyYWxzLnN1bmRheSxcclxuICAgICAgTW9uZGF5OiB0aGlzLmxpdGVyYWxzLm1vbmRheSxcclxuICAgICAgVHVlc2RheTogdGhpcy5saXRlcmFscy50dWVzZGF5LFxyXG4gICAgICBXZWRuZXNkYXk6IHRoaXMubGl0ZXJhbHMud2VkbmVzZGF5LFxyXG4gICAgICBUaHVyc2RheTogdGhpcy5saXRlcmFscy50aHVyc2RheSxcclxuICAgICAgRnJpZGF5OiB0aGlzLmxpdGVyYWxzLmZyaWRheSxcclxuICAgICAgU2F0dXJkYXk6IHRoaXMubGl0ZXJhbHMuc2F0dXJkYXlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRheXNbZGF5XSB8fCAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2Vla0RheXNMYWJlbChkYXlzOiBBcnJheTxzdHJpbmc+ID0gW10pOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgd2Vla0RheXNTb3J0ZWQgPSB0aGlzLnNvcnRXZWVrRGF5cyhkYXlzKTtcclxuXHJcbiAgICByZXR1cm4gd2Vla0RheXNTb3J0ZWQubWFwKGRheSA9PiB0aGlzLmdldFRyYW5zbGF0ZVdlZWtEYXkoZGF5KSkuam9pbignLCAnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2Vla2x5TGFiZWxFeGVjdXRpb24oZGF5c09mV2VlazogQXJyYXk8c3RyaW5nPiwgaG91cjogc3RyaW5nLCByYW5nZUxpbWl0SG91cj86IHN0cmluZykge1xyXG4gICAgaWYgKGRheXNPZldlZWsgJiYgQXJyYXkuaXNBcnJheShkYXlzT2ZXZWVrKSkge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5nZXRXZWVrRGF5c0xhYmVsKGRheXNPZldlZWspfSAke3RoaXMuZ2V0SG91ckxhYmVsKGhvdXIsIHJhbmdlTGltaXRIb3VyKX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGl0ZXJhbHMubm90UmVwb3J0ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRXZWVrRGF5cyhkYXlzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICAgIGNvbnN0IHNvcnRlcldlZWtEYXlzID0gdGhpcy5nZXRTb3J0ZXJXZWVrRGF5cygpO1xyXG5cclxuICAgIHJldHVybiBkYXlzLnNvcnQoKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJEYXkgPSBhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IG5leHREYXkgPSBiLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICByZXR1cm4gc29ydGVyV2Vla0RheXNbY3VyckRheV0gPiBzb3J0ZXJXZWVrRGF5c1tuZXh0RGF5XSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tbWQtMTJcIj5cclxuICA8cG8taW5mb1xyXG4gICAgKm5nSWY9XCJub1BhcmFtZXRlcnNcIlxyXG4gICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMucHJvY2Vzc1wiXHJcbiAgICBbcC1vcmllbnRhdGlvbl09XCJpbmZvT3JpZW50YXRpb25cIlxyXG4gICAgW3AtdmFsdWVdPVwidmFsdWUucHJvY2Vzc0lEXCJcclxuICA+XHJcbiAgPC9wby1pbmZvPlxyXG5cclxuICA8cG8taW5mbyBbcC1sYWJlbF09XCJsaXRlcmFscy5wZXJpb2RpY2l0eVwiIFtwLW9yaWVudGF0aW9uXT1cImluZm9PcmllbnRhdGlvblwiIFtwLXZhbHVlXT1cInBlcmlvZGljaXR5VmFsdWVcIj4gPC9wby1pbmZvPlxyXG5cclxuICA8cG8taW5mb1xyXG4gICAgKm5nSWY9XCJmcmVxdWVuY3lWYWx1ZSAhPT0gJydcIlxyXG4gICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuZnJlcXVlbmN5XCJcclxuICAgIFtwLW9yaWVudGF0aW9uXT1cImluZm9PcmllbnRhdGlvblwiXHJcbiAgICBbcC12YWx1ZV09XCJmcmVxdWVuY3lWYWx1ZVwiXHJcbiAgPlxyXG4gIDwvcG8taW5mbz5cclxuXHJcbiAgPHBvLWluZm9cclxuICAgICpuZ0lmPVwidmFsdWUucGVyaW9kaWNpdHkgIT09ICdzaW5nbGUnXCJcclxuICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLmV4ZWN1dGlvblwiXHJcbiAgICBbcC1vcmllbnRhdGlvbl09XCJpbmZvT3JpZW50YXRpb25cIlxyXG4gICAgW3AtdmFsdWVdPVwiZXhlY3V0aW9uVmFsdWVcIlxyXG4gID5cclxuICA8L3BvLWluZm8+XHJcblxyXG4gIDxwby1pbmZvIFtwLWxhYmVsXT1cImxpdGVyYWxzLnJlY3VycmVudFwiIFtwLW9yaWVudGF0aW9uXT1cImluZm9PcmllbnRhdGlvblwiIFtwLXZhbHVlXT1cInJlY3VycmVudFZhbHVlXCI+IDwvcG8taW5mbz5cclxuXHJcbiAgPHBvLWluZm8gW3AtbGFiZWxdPVwibGl0ZXJhbHMuZmlyc3RFeGVjdXRpb25cIiBbcC1vcmllbnRhdGlvbl09XCJpbmZvT3JpZW50YXRpb25cIiBbcC12YWx1ZV09XCJmaXJzdEV4ZWN1dGlvblZhbHVlXCI+XHJcbiAgPC9wby1pbmZvPlxyXG48L2Rpdj5cclxuXHJcbjxwby13aWRnZXQgKm5nSWY9XCJwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMubGVuZ3RoXCIgY2xhc3M9XCJwby1wdC0xIHBvLXBiLTEgcG8tbWQtMTJcIiBbcC10aXRsZV09XCJsaXRlcmFscy5wYXJhbWV0ZXJzXCI+XHJcbiAgPHBvLWR5bmFtaWMtdmlldyBbcC1maWVsZHNdPVwicGFyYW1ldGVyc1wiIFtwLXZhbHVlXT1cInZhbHVlLmV4ZWN1dGlvblBhcmFtZXRlclwiPiA8L3BvLWR5bmFtaWMtdmlldz5cclxuPC9wby13aWRnZXQ+XHJcbiJdfQ==