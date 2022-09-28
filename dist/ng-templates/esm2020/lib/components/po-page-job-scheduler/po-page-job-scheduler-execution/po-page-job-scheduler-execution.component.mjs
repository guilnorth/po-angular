import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { isTypeof } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "../po-page-job-scheduler.service";
import * as i2 from "../po-page-job-scheduler-lookup.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@po-ui/ng-components";
const _c0 = ["formExecution"];
const _c1 = ["dailyTemplate"];
const _c2 = ["monthlyTemplate"];
const _c3 = ["weeklyTemplate"];
function PoPageJobSchedulerExecutionComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "po-radio-group", 17);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.value.frequency.type = $event); })("p-change", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_radio_group_p_change_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.onChangeFrequencyOptions()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "po-number", 18);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_number_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.value.frequency.value = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r15.value.frequency.type)("p-columns", 3)("p-options", ctx_r15.frequencyOptions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r15.value.frequency.value);
} }
function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerExecutionComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "po-switch", 14);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.containsFrequency = $event); })("p-change", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_p_change_2_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.onChangeContainsFrequency($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template, 3, 4, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 1);
    i0.ɵɵelement(5, "po-divider", 3);
    i0.ɵɵtemplate(6, PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_6_Template, 1, 0, "ng-container", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 1)(8, "po-switch", 16);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.value.recurrent = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.containsFrequency)("p-label", ctx_r2.literals.frequency)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.containsFrequency);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-label", ctx_r2.literals.periodicityData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.periodicityTemplates[ctx_r2.value.periodicity]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.value.recurrent)("p-label", ctx_r2.literals.recurrent)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-lookup", 20);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template_po_lookup_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r26.value.processID = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r25.value.processID)("p-disabled", ctx_r25.isEdit)("p-filter-service", ctx_r25.poPageJobSchedulerLookup)("p-label", ctx_r25.literals.process)("p-placeholder", ctx_r25.literals.enterProcess);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template, 1, 5, "po-lookup", 19);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.noParameters && ctx_r4.noCustomParamsComponent);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-input", 21);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_14_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.value.processID = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r6.value.processID)("p-disabled", ctx_r6.isEdit)("p-label", ctx_r6.literals.process)("p-placeholder", ctx_r6.literals.enterProcess);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoPageJobSchedulerExecutionComponent_ng_template_16_ng_container_0_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r13 = i0.ɵɵreference(23);
    i0.ɵɵproperty("ngTemplateOutlet", _r13);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_18_ng_container_1_Template, 1, 0, "ng-container", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "po-checkbox-group", 22);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_18_Template_po_checkbox_group_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.value.daysOfWeek = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const _r13 = i0.ɵɵreference(23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r10.value.daysOfWeek)("p-label", ctx_r10.literals.weekDays)("p-options", ctx_r10.weekDays);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-number", 25);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template_po_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r36.value.rangeLimitDay = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r34.value.rangeLimitDay)("p-error-pattern", "Dia inv\u00E1lido")("p-label", ctx_r34.literals.endDay)("p-max", 31)("p-pattern", ctx_r34.dayPattern);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-number", 23);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_20_Template_po_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r38.value.dayOfMonth = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template, 1, 5, "po-number", 24);
    i0.ɵɵtemplate(2, PoPageJobSchedulerExecutionComponent_ng_template_20_ng_container_2_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const _r13 = i0.ɵɵreference(23);
    i0.ɵɵproperty("ngModel", ctx_r12.value.dayOfMonth)("p-error-pattern", "Dia inv\u00E1lido")("p-label", ctx_r12.dayLabel)("p-max", 31)("p-pattern", ctx_r12.dayPattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.containsFrequency);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r13);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-input", 28);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.value.rangeLimitHour = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r40.value.rangeLimitHour)("p-label", ctx_r40.literals.endTime)("p-pattern", ctx_r40.timePattern);
} }
function PoPageJobSchedulerExecutionComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-input", 26);
    i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_22_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.value.hour = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template, 1, 3, "po-input", 27);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r14.value.hour)("p-label", ctx_r14.hourLabel)("p-pattern", ctx_r14.timePattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.containsFrequency && ctx_r14.value.frequency.type !== "day");
} }
export class PoPageJobSchedulerExecutionComponent {
    constructor(poPageJobSchedulerService, poPageJobSchedulerLookup) {
        this.poPageJobSchedulerService = poPageJobSchedulerService;
        this.poPageJobSchedulerLookup = poPageJobSchedulerLookup;
        this.isEdit = false;
        this.literals = {};
        this.noParameters = true;
        this.noCustomParamsComponent = true;
        this.changeProcess = new EventEmitter();
        this.dayPattern = '^(3[0-1]|[0-2][0-9]|[1-9]|0[1-9])$';
        this.existProcessAPI = true;
        this.minDateFirstExecution = new Date();
        this.periodicityOptions = [];
        this.timePattern = '^(2[0-3]|[01][0-9]):?([0-5][0-9])$';
        this.weekDays = [];
        this.frequencyOptions = [];
        this.containsFrequency = false;
        this.frequency = 'hour';
        this._value = {};
    }
    set value(value) {
        this._value = value && isTypeof(value, 'object') ? value : {};
        this.containsFrequency = this._value.frequency && this._value.frequency.value ? true : false;
    }
    get value() {
        return this._value;
    }
    get startDateFirstExecution() {
        return this.isEdit ? undefined : this.minDateFirstExecution;
    }
    get hourLabel() {
        return this.containsFrequency ? this.literals.startTime : this.literals.time;
    }
    get dayLabel() {
        return this.containsFrequency ? this.literals.startDay : this.literals.day;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.subscribeProcessIdValueChanges();
            if (this.value.periodicity) {
                this.frequencyOptions = this.frequencyOptions.map(frequencyOption => ({
                    ...frequencyOption,
                    disabled: frequencyOption.value === 'day' && this.value.periodicity !== 'monthly'
                }));
            }
        });
    }
    ngOnInit() {
        this.periodicityTemplates = {
            daily: this.dailyTemplate,
            monthly: this.monthlyTemplate,
            weekly: this.weeklyTempalte
        };
        if (this.noParameters && this.noCustomParamsComponent) {
            this.checkExistsProcessesAPI();
        }
        this.periodicityOptions = this.getPeriodicityOptions();
        this.weekDays = this.getWeekDays();
        this.frequencyOptions = this.getFrequencyOptions();
    }
    onChangeContainsFrequency(containsFrequency) {
        if (containsFrequency) {
            this.value.frequency = { type: 'hour', value: null };
        }
        else {
            this.value.frequency = {};
        }
        this.value.rangeLimitHour = null;
        this.value.rangeLimitDay = null;
        this.value.dayOfMonth = null;
    }
    onChangePeriodicityOptions(periodicity) {
        this.frequencyOptions = this.frequencyOptions.map(frequencyOption => ({
            ...frequencyOption,
            disabled: frequencyOption.value === 'day' && periodicity !== 'monthly'
        }));
        this.value.frequency.type = null;
    }
    onChangeFrequencyOptions() {
        this.value.rangeLimitHour = null;
    }
    checkExistsProcessesAPI() {
        this.poPageJobSchedulerService.getHeadProcesses().subscribe(undefined, error => {
            this.existProcessAPI = false;
        });
    }
    getPeriodicityOptions() {
        return [
            { label: this.literals.single, value: 'single' },
            { label: this.literals.daily, value: 'daily' },
            { label: this.literals.weekly, value: 'weekly' },
            { label: this.literals.monthly, value: 'monthly' }
        ];
    }
    getFrequencyOptions() {
        return [
            { label: this.literals.day, value: 'day' },
            { label: this.literals.hour, value: 'hour' },
            { label: this.literals.minute, value: 'minute' }
        ];
    }
    getWeekDays() {
        return [
            { label: this.literals.sunday, value: 'Sunday' },
            { label: this.literals.monday, value: 'Monday' },
            { label: this.literals.tuesday, value: 'Tuesday' },
            { label: this.literals.wednesday, value: 'Wednesday' },
            { label: this.literals.thursday, value: 'Thursday' },
            { label: this.literals.friday, value: 'Friday' },
            { label: this.literals.saturday, value: 'Saturday' }
        ];
    }
    subscribeProcessIdValueChanges() {
        this.form.controls['processID']?.valueChanges.subscribe(processId => {
            this.changeProcess.emit({ processId, existAPI: this.existProcessAPI });
        });
    }
}
PoPageJobSchedulerExecutionComponent.ɵfac = function PoPageJobSchedulerExecutionComponent_Factory(t) { return new (t || PoPageJobSchedulerExecutionComponent)(i0.ɵɵdirectiveInject(i1.PoPageJobSchedulerService), i0.ɵɵdirectiveInject(i2.PoPageJobSchedulerLookupService)); };
PoPageJobSchedulerExecutionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerExecutionComponent, selectors: [["po-page-job-scheduler-execution"]], viewQuery: function PoPageJobSchedulerExecutionComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
        i0.ɵɵviewQuery(_c2, 7);
        i0.ɵɵviewQuery(_c3, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dailyTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthlyTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.weeklyTempalte = _t.first);
    } }, inputs: { isEdit: ["p-is-edit", "isEdit"], literals: ["p-literals", "literals"], noParameters: ["p-no-parameters", "noParameters"], noCustomParamsComponent: ["p-no-custom-params-component", "noCustomParamsComponent"], value: ["p-value", "value"] }, outputs: { changeProcess: "p-change-process" }, decls: 24, vars: 16, consts: [["formExecution", "ngForm"], [1, "po-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "po-md-12", 3, "p-label"], ["name", "firstExecution", "p-placeholder", "dd/mm/aaaa", "p-required", "", 1, "po-md-4", 3, "ngModel", "p-disabled", "p-label", "p-min-date", "ngModelChange"], ["name", "firstExecutionHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-disabled", "p-label", "p-pattern", "ngModelChange"], ["name", "periodicity", "p-columns", "4", "p-required", "", 1, "po-sm-12", 3, "ngModel", "p-label", "p-options", "ngModelChange", "p-change"], [4, "ngIf"], ["lookupProcessesID", ""], ["inputProcessesID", ""], ["dailyTemplate", ""], ["weeklyTemplate", ""], ["monthlyTemplate", ""], ["inputHourTemplate", ""], ["name", "containsFrequency", 1, "po-md-12", 3, "ngModel", "p-label", "p-label-off", "p-label-on", "ngModelChange", "p-change"], [4, "ngTemplateOutlet"], ["name", "recurrent", 1, "po-md-3", 3, "ngModel", "p-label", "p-label-off", "p-label-on", "ngModelChange"], ["name", "frequencyType", "p-required", "", 1, "po-md-10", 3, "ngModel", "p-columns", "p-options", "ngModelChange", "p-change"], ["name", "frequencyValue", "p-required", "", 1, "po-md-2", 3, "ngModel", "ngModelChange"], ["class", "po-md-12", "name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 3, "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "ngModelChange", 4, "ngIf"], ["name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "ngModelChange"], ["name", "processID", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-disabled", "p-label", "p-placeholder", "ngModelChange"], ["name", "daysOfWeek", "p-columns", "4", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-label", "p-options", "ngModelChange"], ["name", "dayOfMonth", "p-required", "", 1, "po-md-3", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange"], ["class", "po-md-3", "name", "rangeLimitDay", "p-required", "", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange", 4, "ngIf"], ["name", "rangeLimitDay", "p-required", "", 1, "po-md-3", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange"], ["name", "hour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-label", "p-pattern", "ngModelChange"], ["class", "po-md-2", "name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 3, "ngModel", "p-label", "p-pattern", "ngModelChange", 4, "ngIf"], ["name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-label", "p-pattern", "ngModelChange"]], template: function PoPageJobSchedulerExecutionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", null, 0)(2, "div", 1);
        i0.ɵɵtemplate(3, PoPageJobSchedulerExecutionComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelement(5, "po-divider", 3);
        i0.ɵɵelementStart(6, "po-datepicker", 4);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_datepicker_ngModelChange_6_listener($event) { return ctx.value.firstExecution = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "po-input", 5);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_input_ngModelChange_7_listener($event) { return ctx.value.firstExecutionHour = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(8, "hr");
        i0.ɵɵelementStart(9, "div", 1)(10, "po-radio-group", 6);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_ngModelChange_10_listener($event) { return ctx.value.periodicity = $event; })("p-change", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_p_change_10_listener($event) { return ctx.onChangePeriodicityOptions($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, PoPageJobSchedulerExecutionComponent_ng_container_11_Template, 9, 11, "ng-container", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, PoPageJobSchedulerExecutionComponent_ng_template_12_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, PoPageJobSchedulerExecutionComponent_ng_template_14_Template, 1, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, PoPageJobSchedulerExecutionComponent_ng_template_16_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, PoPageJobSchedulerExecutionComponent_ng_template_18_Template, 3, 4, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, PoPageJobSchedulerExecutionComponent_ng_template_20_Template, 3, 7, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(22, PoPageJobSchedulerExecutionComponent_ng_template_22_Template, 2, 4, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(13);
        const _r5 = i0.ɵɵreference(15);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.existProcessAPI)("ngIfThen", _r3)("ngIfElse", _r5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-label", ctx.literals.firstExecution);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.value.firstExecution)("p-disabled", ctx.isEdit)("p-label", ctx.literals.day)("p-min-date", ctx.startDateFirstExecution);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.value.firstExecutionHour)("p-disabled", ctx.isEdit)("p-label", ctx.literals.time)("p-pattern", ctx.timePattern);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.value.periodicity)("p-label", ctx.literals.periodicity)("p-options", ctx.periodicityOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value.periodicity !== "single");
    } }, dependencies: [i3.NgIf, i3.NgTemplateOutlet, i4.ɵNgNoValidate, i4.NgControlStatus, i4.NgControlStatusGroup, i4.NgModel, i4.NgForm, i5.PoDividerComponent, i5.PoCheckboxGroupComponent, i5.PoDatepickerComponent, i5.PoInputComponent, i5.PoLookupComponent, i5.PoNumberComponent, i5.PoRadioGroupComponent, i5.PoSwitchComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerExecutionComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler-execution', template: "<form #formExecution=\"ngForm\">\r\n  <div class=\"po-row\">\r\n    <ng-container *ngIf=\"existProcessAPI; then lookupProcessesID; else inputProcessesID\"></ng-container>\r\n  </div>\r\n\r\n  <div class=\"po-row\">\r\n    <po-divider class=\"po-md-12\" [p-label]=\"literals.firstExecution\"></po-divider>\r\n\r\n    <po-datepicker\r\n      class=\"po-md-4\"\r\n      name=\"firstExecution\"\r\n      [(ngModel)]=\"value.firstExecution\"\r\n      p-placeholder=\"dd/mm/aaaa\"\r\n      p-required\r\n      [p-disabled]=\"isEdit\"\r\n      [p-label]=\"literals.day\"\r\n      [p-min-date]=\"startDateFirstExecution\"\r\n    >\r\n    </po-datepicker>\r\n\r\n    <po-input\r\n      class=\"po-md-2\"\r\n      name=\"firstExecutionHour\"\r\n      [(ngModel)]=\"value.firstExecutionHour\"\r\n      p-mask=\"99:99\"\r\n      p-mask-format-model\r\n      p-placeholder=\"HH:mm\"\r\n      p-required\r\n      [p-disabled]=\"isEdit\"\r\n      [p-label]=\"literals.time\"\r\n      [p-pattern]=\"timePattern\"\r\n    >\r\n    </po-input>\r\n  </div>\r\n\r\n  <hr />\r\n\r\n  <div class=\"po-row\">\r\n    <po-radio-group\r\n      class=\"po-sm-12\"\r\n      name=\"periodicity\"\r\n      [(ngModel)]=\"value.periodicity\"\r\n      p-columns=\"4\"\r\n      p-required\r\n      [p-label]=\"literals.periodicity\"\r\n      [p-options]=\"periodicityOptions\"\r\n      (p-change)=\"onChangePeriodicityOptions($event)\"\r\n    >\r\n    </po-radio-group>\r\n\r\n    <ng-container *ngIf=\"value.periodicity !== 'single'\">\r\n      <div class=\"po-row\">\r\n        <po-switch\r\n          class=\"po-md-12\"\r\n          name=\"containsFrequency\"\r\n          [(ngModel)]=\"containsFrequency\"\r\n          [p-label]=\"literals.frequency\"\r\n          [p-label-off]=\"literals.no\"\r\n          [p-label-on]=\"literals.yes\"\r\n          (p-change)=\"onChangeContainsFrequency($event)\"\r\n        >\r\n        </po-switch>\r\n        <ng-container *ngIf=\"containsFrequency\">\r\n          <po-radio-group\r\n            class=\"po-md-10\"\r\n            name=\"frequencyType\"\r\n            p-required\r\n            [(ngModel)]=\"value.frequency.type\"\r\n            [p-columns]=\"3\"\r\n            [p-options]=\"frequencyOptions\"\r\n            (p-change)=\"onChangeFrequencyOptions()\"\r\n          >\r\n          </po-radio-group>\r\n\r\n          <po-number class=\"po-md-2\" name=\"frequencyValue\" p-required [(ngModel)]=\"value.frequency.value\"> </po-number>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"po-row\">\r\n        <po-divider class=\"po-md-12\" [p-label]=\"literals.periodicityData\"> </po-divider>\r\n\r\n        <ng-container *ngTemplateOutlet=\"periodicityTemplates[value.periodicity]\"> </ng-container>\r\n      </div>\r\n\r\n      <div class=\"po-row\">\r\n        <po-switch\r\n          class=\"po-md-3\"\r\n          name=\"recurrent\"\r\n          [(ngModel)]=\"value.recurrent\"\r\n          [p-label]=\"literals.recurrent\"\r\n          [p-label-off]=\"literals.no\"\r\n          [p-label-on]=\"literals.yes\"\r\n        >\r\n        </po-switch>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ng-template #lookupProcessesID>\r\n    <po-lookup\r\n      *ngIf=\"noParameters && noCustomParamsComponent\"\r\n      class=\"po-md-12\"\r\n      name=\"processID\"\r\n      [(ngModel)]=\"value.processID\"\r\n      p-field-label=\"description\"\r\n      p-field-value=\"processID\"\r\n      p-required\r\n      [p-disabled]=\"isEdit\"\r\n      [p-filter-service]=\"poPageJobSchedulerLookup\"\r\n      [p-label]=\"literals.process\"\r\n      [p-placeholder]=\"literals.enterProcess\"\r\n    >\r\n    </po-lookup>\r\n  </ng-template>\r\n\r\n  <ng-template #inputProcessesID>\r\n    <po-input\r\n      class=\"po-md-12\"\r\n      name=\"processID\"\r\n      [(ngModel)]=\"value.processID\"\r\n      p-required\r\n      [p-disabled]=\"isEdit\"\r\n      [p-label]=\"literals.process\"\r\n      [p-placeholder]=\"literals.enterProcess\"\r\n    >\r\n    </po-input>\r\n  </ng-template>\r\n\r\n  <ng-template #dailyTemplate>\r\n    <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #weeklyTemplate>\r\n    <div class=\"po-row\">\r\n      <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\r\n    </div>\r\n\r\n    <po-checkbox-group\r\n      class=\"po-md-12\"\r\n      name=\"daysOfWeek\"\r\n      [(ngModel)]=\"value.daysOfWeek\"\r\n      p-columns=\"4\"\r\n      p-required\r\n      [p-label]=\"literals.weekDays\"\r\n      [p-options]=\"weekDays\"\r\n    >\r\n    </po-checkbox-group>\r\n  </ng-template>\r\n\r\n  <ng-template #monthlyTemplate>\r\n    <po-number\r\n      class=\"po-md-3\"\r\n      name=\"dayOfMonth\"\r\n      [(ngModel)]=\"value.dayOfMonth\"\r\n      p-required\r\n      [p-error-pattern]=\"'Dia inv\u00E1lido'\"\r\n      [p-label]=\"dayLabel\"\r\n      [p-max]=\"31\"\r\n      [p-pattern]=\"dayPattern\"\r\n    >\r\n    </po-number>\r\n\r\n    <po-number\r\n      *ngIf=\"containsFrequency\"\r\n      class=\"po-md-3\"\r\n      name=\"rangeLimitDay\"\r\n      [(ngModel)]=\"value.rangeLimitDay\"\r\n      p-required\r\n      [p-error-pattern]=\"'Dia inv\u00E1lido'\"\r\n      [p-label]=\"literals.endDay\"\r\n      [p-max]=\"31\"\r\n      [p-pattern]=\"dayPattern\"\r\n    >\r\n    </po-number>\r\n\r\n    <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #inputHourTemplate>\r\n    <po-input\r\n      class=\"po-md-2\"\r\n      name=\"hour\"\r\n      [(ngModel)]=\"value.hour\"\r\n      p-mask=\"99:99\"\r\n      p-mask-format-model\r\n      p-placeholder=\"HH:mm\"\r\n      p-required\r\n      [p-label]=\"hourLabel\"\r\n      [p-pattern]=\"timePattern\"\r\n    >\r\n    </po-input>\r\n\r\n    <po-input\r\n      *ngIf=\"containsFrequency && value.frequency.type !== 'day'\"\r\n      class=\"po-md-2\"\r\n      name=\"rangeLimitHour\"\r\n      [(ngModel)]=\"value.rangeLimitHour\"\r\n      p-mask=\"99:99\"\r\n      p-mask-format-model\r\n      p-placeholder=\"HH:mm\"\r\n      p-required\r\n      [p-label]=\"literals.endTime\"\r\n      [p-pattern]=\"timePattern\"\r\n    >\r\n    </po-input>\r\n  </ng-template>\r\n</form>\r\n" }]
    }], function () { return [{ type: i1.PoPageJobSchedulerService }, { type: i2.PoPageJobSchedulerLookupService }]; }, { form: [{
            type: ViewChild,
            args: ['formExecution', { static: true }]
        }], dailyTemplate: [{
            type: ViewChild,
            args: ['dailyTemplate', { static: true }]
        }], monthlyTemplate: [{
            type: ViewChild,
            args: ['monthlyTemplate', { static: true }]
        }], weeklyTempalte: [{
            type: ViewChild,
            args: ['weeklyTemplate', { static: true }]
        }], isEdit: [{
            type: Input,
            args: ['p-is-edit']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], noParameters: [{
            type: Input,
            args: ['p-no-parameters']
        }], noCustomParamsComponent: [{
            type: Input,
            args: ['p-no-custom-params-component']
        }], changeProcess: [{
            type: Output,
            args: ['p-change-process']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFlLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt0SCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztJQ0gzQyx3QkFBb0c7Ozs7SUE0RGhHLDZCQUF3QztJQUN0QywwQ0FRQztJQUpDLDJPQUFhLHFEQUNwQixJQUR5Qyw4TUFHdEIsZUFBQSxrQ0FBMEIsQ0FBQSxJQUhKO0lBS3BDLGlCQUFpQjtJQUVqQixxQ0FBZ0c7SUFBcEMsc09BQWEsc0RBQTZCLElBQVA7SUFBRSxpQkFBWTtJQUMvRywwQkFBZTs7O0lBUlgsZUFBa0M7SUFBbEMsc0RBQWtDLGdCQUFBLHVDQUFBO0lBT3dCLGVBQW1DO0lBQW5DLHVEQUFtQzs7O0lBT2pHLHdCQUEwRjs7OztJQS9COUYsNkJBQXFEO0lBQ25ELDhCQUFvQixvQkFBQTtJQUloQiw0UUFBK0IsK0xBSW5CLGVBQUEseUNBQWlDLENBQUEsSUFKZDtJ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QU07a0JBQXpCLEtBQUs7bUJBQUMsV0FBVztZQUVHLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVPLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBQ2UsdUJBQXVCO2tCQUE3RCxLQUFLO21CQUFDLDhCQUE4QjtZQUVULGFBQWE7a0JBQXhDLE1BQU07bUJBQUMsa0JBQWtCO1lBZ0JKLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGVja2JveEdyb3VwT3B0aW9uLCBQb1JhZGlvR3JvdXBPcHRpb24gfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBpc1R5cGVvZiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZSB9IGZyb20gJy4uL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1sb29rdXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UgfSBmcm9tICcuLi9wby1wYWdlLWpvYi1zY2hlZHVsZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUpvYlNjaGVkdWxlckV4ZWN1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnZm9ybUV4ZWN1dGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm06IE5nRm9ybTtcclxuXHJcbiAgLy8gdGVtcGxhdGVzXHJcbiAgQFZpZXdDaGlsZCgnZGFpbHlUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGRhaWx5VGVtcGxhdGU7XHJcbiAgQFZpZXdDaGlsZCgnbW9udGhseVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbW9udGhseVRlbXBsYXRlO1xyXG4gIEBWaWV3Q2hpbGQoJ3dlZWtseVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgd2Vla2x5VGVtcGFsdGU7XHJcblxyXG4gIEBJbnB1dCgncC1pcy1lZGl0JykgaXNFZGl0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzID0gPGFueT57fTtcclxuXHJcbiAgQElucHV0KCdwLW5vLXBhcmFtZXRlcnMnKSBub1BhcmFtZXRlcnM6IEJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgncC1uby1jdXN0b20tcGFyYW1zLWNvbXBvbmVudCcpIG5vQ3VzdG9tUGFyYW1zQ29tcG9uZW50OiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtcHJvY2VzcycpIGNoYW5nZVByb2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGRheVBhdHRlcm4gPSAnXigzWzAtMV18WzAtMl1bMC05XXxbMS05XXwwWzEtOV0pJCc7XHJcbiAgZXhpc3RQcm9jZXNzQVBJID0gdHJ1ZTtcclxuICBtaW5EYXRlRmlyc3RFeGVjdXRpb24gPSBuZXcgRGF0ZSgpO1xyXG4gIHBlcmlvZGljaXR5T3B0aW9uczogQXJyYXk8UG9SYWRpb0dyb3VwT3B0aW9uPiA9IFtdO1xyXG4gIHBlcmlvZGljaXR5VGVtcGxhdGVzOiB7IGRhaWx5OiBUZW1wbGF0ZVJlZjxhbnk+OyB3ZWVrbHk6IFRlbXBsYXRlUmVmPGFueT47IG1vbnRobHk6IFRlbXBsYXRlUmVmPGFueT4gfTtcclxuICB0aW1lUGF0dGVybiA9ICdeKDJbMC0zXXxbMDFdWzAtOV0pOj8oWzAtNV1bMC05XSkkJztcclxuICB3ZWVrRGF5czogQXJyYXk8UG9DaGVja2JveEdyb3VwT3B0aW9uPiA9IFtdO1xyXG4gIGZyZXF1ZW5jeU9wdGlvbnM6IEFycmF5PFBvUmFkaW9Hcm91cE9wdGlvbj4gPSBbXTtcclxuICBjb250YWluc0ZyZXF1ZW5jeSA9IGZhbHNlO1xyXG4gIGZyZXF1ZW5jeTogc3RyaW5nID0gJ2hvdXInO1xyXG4gIHJhbmdlTGltaXRIb3VyOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KCdwLXZhbHVlJykgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgJiYgaXNUeXBlb2YodmFsdWUsICdvYmplY3QnKSA/IHZhbHVlIDoge307XHJcblxyXG4gICAgdGhpcy5jb250YWluc0ZyZXF1ZW5jeSA9IHRoaXMuX3ZhbHVlLmZyZXF1ZW5jeSAmJiB0aGlzLl92YWx1ZS5mcmVxdWVuY3kudmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZTogUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSxcclxuICAgIHB1YmxpYyBwb1BhZ2VKb2JTY2hlZHVsZXJMb29rdXA6IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGdldCBzdGFydERhdGVGaXJzdEV4ZWN1dGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRWRpdCA/IHVuZGVmaW5lZCA6IHRoaXMubWluRGF0ZUZpcnN0RXhlY3V0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhvdXJMYWJlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5zRnJlcXVlbmN5ID8gdGhpcy5saXRlcmFscy5zdGFydFRpbWUgOiB0aGlzLmxpdGVyYWxzLnRpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF5TGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluc0ZyZXF1ZW5jeSA/IHRoaXMubGl0ZXJhbHMuc3RhcnREYXkgOiB0aGlzLmxpdGVyYWxzLmRheTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVByb2Nlc3NJZFZhbHVlQ2hhbmdlcygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMudmFsdWUucGVyaW9kaWNpdHkpIHtcclxuICAgICAgICB0aGlzLmZyZXF1ZW5jeU9wdGlvbnMgPSB0aGlzLmZyZXF1ZW5jeU9wdGlvbnMubWFwKGZyZXF1ZW5jeU9wdGlvbiA9PiAoe1xyXG4gICAgICAgICAgLi4uZnJlcXVlbmN5T3B0aW9uLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGZyZXF1ZW5jeU9wdGlvbi52YWx1ZSA9PT0gJ2RheScgJiYgdGhpcy52YWx1ZS5wZXJpb2RpY2l0eSAhPT0gJ21vbnRobHknXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wZXJpb2RpY2l0eVRlbXBsYXRlcyA9IHtcclxuICAgICAgZGFpbHk6IHRoaXMuZGFpbHlUZW1wbGF0ZSxcclxuICAgICAgbW9udGhseTogdGhpcy5tb250aGx5VGVtcGxhdGUsXHJcbiAgICAgIHdlZWtseTogdGhpcy53ZWVrbHlUZW1wYWx0ZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5ub1BhcmFtZXRlcnMgJiYgdGhpcy5ub0N1c3RvbVBhcmFtc0NvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNoZWNrRXhpc3RzUHJvY2Vzc2VzQVBJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wZXJpb2RpY2l0eU9wdGlvbnMgPSB0aGlzLmdldFBlcmlvZGljaXR5T3B0aW9ucygpO1xyXG4gICAgdGhpcy53ZWVrRGF5cyA9IHRoaXMuZ2V0V2Vla0RheXMoKTtcclxuICAgIHRoaXMuZnJlcXVlbmN5T3B0aW9ucyA9IHRoaXMuZ2V0RnJlcXVlbmN5T3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDb250YWluc0ZyZXF1ZW5jeShjb250YWluc0ZyZXF1ZW5jeSkge1xyXG4gICAgaWYgKGNvbnRhaW5zRnJlcXVlbmN5KSB7XHJcbiAgICAgIHRoaXMudmFsdWUuZnJlcXVlbmN5ID0geyB0eXBlOiAnaG91cicsIHZhbHVlOiBudWxsIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlLmZyZXF1ZW5jeSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsdWUucmFuZ2VMaW1pdEhvdXIgPSBudWxsO1xyXG4gICAgdGhpcy52YWx1ZS5yYW5nZUxpbWl0RGF5ID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWUuZGF5T2ZNb250aCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVBlcmlvZGljaXR5T3B0aW9ucyhwZXJpb2RpY2l0eSkge1xyXG4gICAgdGhpcy5mcmVxdWVuY3lPcHRpb25zID0gdGhpcy5mcmVxdWVuY3lPcHRpb25zLm1hcChmcmVxdWVuY3lPcHRpb24gPT4gKHtcclxuICAgICAgLi4uZnJlcXVlbmN5T3B0aW9uLFxyXG4gICAgICBkaXNhYmxlZDogZnJlcXVlbmN5T3B0aW9uLnZhbHVlID09PSAnZGF5JyAmJiBwZXJpb2RpY2l0eSAhPT0gJ21vbnRobHknXHJcbiAgICB9KSk7XHJcblxyXG4gICAgdGhpcy52YWx1ZS5mcmVxdWVuY3kudHlwZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUZyZXF1ZW5jeU9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLnZhbHVlLnJhbmdlTGltaXRIb3VyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tFeGlzdHNQcm9jZXNzZXNBUEkoKSB7XHJcbiAgICB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UuZ2V0SGVhZFByb2Nlc3NlcygpLnN1YnNjcmliZSh1bmRlZmluZWQsIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5leGlzdFByb2Nlc3NBUEkgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQZXJpb2RpY2l0eU9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLnNpbmdsZSwgdmFsdWU6ICdzaW5nbGUnIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuZGFpbHksIHZhbHVlOiAnZGFpbHknIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMud2Vla2x5LCB2YWx1ZTogJ3dlZWtseScgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5tb250aGx5LCB2YWx1ZTogJ21vbnRobHknIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZyZXF1ZW5jeU9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLmRheSwgdmFsdWU6ICdkYXknIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuaG91ciwgdmFsdWU6ICdob3VyJyB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLm1pbnV0ZSwgdmFsdWU6ICdtaW51dGUnIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdlZWtEYXlzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5zdW5kYXksIHZhbHVlOiAnU3VuZGF5JyB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLm1vbmRheSwgdmFsdWU6ICdNb25kYXknIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMudHVlc2RheSwgdmFsdWU6ICdUdWVzZGF5JyB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLndlZG5lc2RheSwgdmFsdWU6ICdXZWRuZXNkYXknIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMudGh1cnNkYXksIHZhbHVlOiAnVGh1cnNkYXknIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuZnJpZGF5LCB2YWx1ZTogJ0ZyaWRheScgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5zYXR1cmRheSwgdmFsdWU6ICdTYXR1cmRheScgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlUHJvY2Vzc0lkVmFsdWVDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwcm9jZXNzSUQnXT8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShwcm9jZXNzSWQgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZVByb2Nlc3MuZW1pdCh7IHByb2Nlc3NJZCwgZXhpc3RBUEk6IHRoaXMuZXhpc3RQcm9jZXNzQVBJIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxmb3JtICNmb3JtRXhlY3V0aW9uPVwibmdGb3JtXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4aXN0UHJvY2Vzc0FQSTsgdGhlbiBsb29rdXBQcm9jZXNzZXNJRDsgZWxzZSBpbnB1dFByb2Nlc3Nlc0lEXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgIDxwby1kaXZpZGVyIGNsYXNzPVwicG8tbWQtMTJcIiBbcC1sYWJlbF09XCJsaXRlcmFscy5maXJzdEV4ZWN1dGlvblwiPjwvcG8tZGl2aWRlcj5cclxuXHJcbiAgICA8cG8tZGF0ZXBpY2tlclxyXG4gICAgICBjbGFzcz1cInBvLW1kLTRcIlxyXG4gICAgICBuYW1lPVwiZmlyc3RFeGVjdXRpb25cIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlLmZpcnN0RXhlY3V0aW9uXCJcclxuICAgICAgcC1wbGFjZWhvbGRlcj1cImRkL21tL2FhYWFcIlxyXG4gICAgICBwLXJlcXVpcmVkXHJcbiAgICAgIFtwLWRpc2FibGVkXT1cImlzRWRpdFwiXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLmRheVwiXHJcbiAgICAgIFtwLW1pbi1kYXRlXT1cInN0YXJ0RGF0ZUZpcnN0RXhlY3V0aW9uXCJcclxuICAgID5cclxuICAgIDwvcG8tZGF0ZXBpY2tlcj5cclxuXHJcbiAgICA8cG8taW5wdXRcclxuICAgICAgY2xhc3M9XCJwby1tZC0yXCJcclxuICAgICAgbmFtZT1cImZpcnN0RXhlY3V0aW9uSG91clwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUuZmlyc3RFeGVjdXRpb25Ib3VyXCJcclxuICAgICAgcC1tYXNrPVwiOTk6OTlcIlxyXG4gICAgICBwLW1hc2stZm9ybWF0LW1vZGVsXHJcbiAgICAgIHAtcGxhY2Vob2xkZXI9XCJISDptbVwiXHJcbiAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgW3AtZGlzYWJsZWRdPVwiaXNFZGl0XCJcclxuICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMudGltZVwiXHJcbiAgICAgIFtwLXBhdHRlcm5dPVwidGltZVBhdHRlcm5cIlxyXG4gICAgPlxyXG4gICAgPC9wby1pbnB1dD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGhyIC8+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgIDxwby1yYWRpby1ncm91cFxyXG4gICAgICBjbGFzcz1cInBvLXNtLTEyXCJcclxuICAgICAgbmFtZT1cInBlcmlvZGljaXR5XCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5wZXJpb2RpY2l0eVwiXHJcbiAgICAgIHAtY29sdW1ucz1cIjRcIlxyXG4gICAgICBwLXJlcXVpcmVkXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnBlcmlvZGljaXR5XCJcclxuICAgICAgW3Atb3B0aW9uc109XCJwZXJpb2RpY2l0eU9wdGlvbnNcIlxyXG4gICAgICAocC1jaGFuZ2UpPVwib25DaGFuZ2VQZXJpb2RpY2l0eU9wdGlvbnMoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLXJhZGlvLWdyb3VwPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWx1ZS5wZXJpb2RpY2l0eSAhPT0gJ3NpbmdsZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgICAgIDxwby1zd2l0Y2hcclxuICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgICAgbmFtZT1cImNvbnRhaW5zRnJlcXVlbmN5XCJcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwiY29udGFpbnNGcmVxdWVuY3lcIlxyXG4gICAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuZnJlcXVlbmN5XCJcclxuICAgICAgICAgIFtwLWxhYmVsLW9mZl09XCJsaXRlcmFscy5ub1wiXHJcbiAgICAgICAgICBbcC1sYWJlbC1vbl09XCJsaXRlcmFscy55ZXNcIlxyXG4gICAgICAgICAgKHAtY2hhbmdlKT1cIm9uQ2hhbmdlQ29udGFpbnNGcmVxdWVuY3koJGV2ZW50KVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvcG8tc3dpdGNoPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250YWluc0ZyZXF1ZW5jeVwiPlxyXG4gICAgICAgICAgPHBvLXJhZGlvLWdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTBcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZnJlcXVlbmN5VHlwZVwiXHJcbiAgICAgICAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5mcmVxdWVuY3kudHlwZVwiXHJcbiAgICAgICAgICAgIFtwLWNvbHVtbnNdPVwiM1wiXHJcbiAgICAgICAgICAgIFtwLW9wdGlvbnNdPVwiZnJlcXVlbmN5T3B0aW9uc1wiXHJcbiAgICAgICAgICAgIChwLWNoYW5nZSk9XCJvbkNoYW5nZUZyZXF1ZW5jeU9wdGlvbnMoKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXJhZGlvLWdyb3VwPlxyXG5cclxuICAgICAgICAgIDxwby1udW1iZXIgY2xhc3M9XCJwby1tZC0yXCIgbmFtZT1cImZyZXF1ZW5jeVZhbHVlXCIgcC1yZXF1aXJlZCBbKG5nTW9kZWwpXT1cInZhbHVlLmZyZXF1ZW5jeS52YWx1ZVwiPiA8L3BvLW51bWJlcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAgICAgICAgPHBvLWRpdmlkZXIgY2xhc3M9XCJwby1tZC0xMlwiIFtwLWxhYmVsXT1cImxpdGVyYWxzLnBlcmlvZGljaXR5RGF0YVwiPiA8L3BvLWRpdmlkZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXJpb2RpY2l0eVRlbXBsYXRlc1t2YWx1ZS5wZXJpb2RpY2l0eV1cIj4gPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgICAgIDxwby1zd2l0Y2hcclxuICAgICAgICAgIGNsYXNzPVwicG8tbWQtM1wiXHJcbiAgICAgICAgICBuYW1lPVwicmVjdXJyZW50XCJcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWUucmVjdXJyZW50XCJcclxuICAgICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnJlY3VycmVudFwiXHJcbiAgICAgICAgICBbcC1sYWJlbC1vZmZdPVwibGl0ZXJhbHMubm9cIlxyXG4gICAgICAgICAgW3AtbGFiZWwtb25dPVwibGl0ZXJhbHMueWVzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1zd2l0Y2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjbG9va3VwUHJvY2Vzc2VzSUQ+XHJcbiAgICA8cG8tbG9va3VwXHJcbiAgICAgICpuZ0lmPVwibm9QYXJhbWV0ZXJzICYmIG5vQ3VzdG9tUGFyYW1zQ29tcG9uZW50XCJcclxuICAgICAgY2xhc3M9XCJwby1tZC0xMlwiXHJcbiAgICAgIG5hbWU9XCJwcm9jZXNzSURcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlLnByb2Nlc3NJRFwiXHJcbiAgICAgIHAtZmllbGQtbGFiZWw9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgIHAtZmllbGQtdmFsdWU9XCJwcm9jZXNzSURcIlxyXG4gICAgICBwLXJlcXVpcmVkXHJcbiAgICAgIFtwLWRpc2FibGVkXT1cImlzRWRpdFwiXHJcbiAgICAgIFtwLWZpbHRlci1zZXJ2aWNlXT1cInBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFwiXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnByb2Nlc3NcIlxyXG4gICAgICBbcC1wbGFjZWhvbGRlcl09XCJsaXRlcmFscy5lbnRlclByb2Nlc3NcIlxyXG4gICAgPlxyXG4gICAgPC9wby1sb29rdXA+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNpbnB1dFByb2Nlc3Nlc0lEPlxyXG4gICAgPHBvLWlucHV0XHJcbiAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICBuYW1lPVwicHJvY2Vzc0lEXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5wcm9jZXNzSURcIlxyXG4gICAgICBwLXJlcXVpcmVkXHJcbiAgICAgIFtwLWRpc2FibGVkXT1cImlzRWRpdFwiXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnByb2Nlc3NcIlxyXG4gICAgICBbcC1wbGFjZWhvbGRlcl09XCJsaXRlcmFscy5lbnRlclByb2Nlc3NcIlxyXG4gICAgPlxyXG4gICAgPC9wby1pbnB1dD5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI2RhaWx5VGVtcGxhdGU+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaW5wdXRIb3VyVGVtcGxhdGVcIj4gPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICN3ZWVrbHlUZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImlucHV0SG91clRlbXBsYXRlXCI+IDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHBvLWNoZWNrYm94LWdyb3VwXHJcbiAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICBuYW1lPVwiZGF5c09mV2Vla1wiXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUuZGF5c09mV2Vla1wiXHJcbiAgICAgIHAtY29sdW1ucz1cIjRcIlxyXG4gICAgICBwLXJlcXVpcmVkXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLndlZWtEYXlzXCJcclxuICAgICAgW3Atb3B0aW9uc109XCJ3ZWVrRGF5c1wiXHJcbiAgICA+XHJcbiAgICA8L3BvLWNoZWNrYm94LWdyb3VwPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjbW9udGhseVRlbXBsYXRlPlxyXG4gICAgPHBvLW51bWJlclxyXG4gICAgICBjbGFzcz1cInBvLW1kLTNcIlxyXG4gICAgICBuYW1lPVwiZGF5T2ZNb250aFwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUuZGF5T2ZNb250aFwiXHJcbiAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgW3AtZXJyb3ItcGF0dGVybl09XCInRGlhIGludsOhbGlkbydcIlxyXG4gICAgICBbcC1sYWJlbF09XCJkYXlMYWJlbFwiXHJcbiAgICAgIFtwLW1heF09XCIzMVwiXHJcbiAgICAgIFtwLXBhdHRlcm5dPVwiZGF5UGF0dGVyblwiXHJcbiAgICA+XHJcbiAgICA8L3BvLW51bWJlcj5cclxuXHJcbiAgICA8cG8tbnVtYmVyXHJcbiAgICAgICpuZ0lmPVwiY29udGFpbnNGcmVxdWVuY3lcIlxyXG4gICAgICBjbGFzcz1cInBvLW1kLTNcIlxyXG4gICAgICBuYW1lPVwicmFuZ2VMaW1pdERheVwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUucmFuZ2VMaW1pdERheVwiXHJcbiAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgW3AtZXJyb3ItcGF0dGVybl09XCInRGlhIGludsOhbGlkbydcIlxyXG4gICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5lbmREYXlcIlxyXG4gICAgICBbcC1tYXhdPVwiMzFcIlxyXG4gICAgICBbcC1wYXR0ZXJuXT1cImRheVBhdHRlcm5cIlxyXG4gICAgPlxyXG4gICAgPC9wby1udW1iZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImlucHV0SG91clRlbXBsYXRlXCI+IDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjaW5wdXRIb3VyVGVtcGxhdGU+XHJcbiAgICA8cG8taW5wdXRcclxuICAgICAgY2xhc3M9XCJwby1tZC0yXCJcclxuICAgICAgbmFtZT1cImhvdXJcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlLmhvdXJcIlxyXG4gICAgICBwLW1hc2s9XCI5OTo5OVwiXHJcbiAgICAgIHAtbWFzay1mb3JtYXQtbW9kZWxcclxuICAgICAgcC1wbGFjZWhvbGRlcj1cIkhIOm1tXCJcclxuICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICBbcC1sYWJlbF09XCJob3VyTGFiZWxcIlxyXG4gICAgICBbcC1wYXR0ZXJuXT1cInRpbWVQYXR0ZXJuXCJcclxuICAgID5cclxuICAgIDwvcG8taW5wdXQ+XHJcblxyXG4gICAgPHBvLWlucHV0XHJcbiAgICAgICpuZ0lmPVwiY29udGFpbnNGcmVxdWVuY3kgJiYgdmFsdWUuZnJlcXVlbmN5LnR5cGUgIT09ICdkYXknXCJcclxuICAgICAgY2xhc3M9XCJwby1tZC0yXCJcclxuICAgICAgbmFtZT1cInJhbmdlTGltaXRIb3VyXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5yYW5nZUxpbWl0SG91clwiXHJcbiAgICAgIHAtbWFzaz1cIjk5Ojk5XCJcclxuICAgICAgcC1tYXNrLWZvcm1hdC1tb2RlbFxyXG4gICAgICBwLXBsYWNlaG9sZGVyPVwiSEg6bW1cIlxyXG4gICAgICBwLXJlcXVpcmVkXHJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLmVuZFRpbWVcIlxyXG4gICAgICBbcC1wYXR0ZXJuXT1cInRpbWVQYXR0ZXJuXCJcclxuICAgID5cclxuICAgIDwvcG8taW5wdXQ+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9mb3JtPlxyXG4iXX0=