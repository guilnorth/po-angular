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
        args: [{ selector: 'po-page-job-scheduler-execution', template: "<form #formExecution=\"ngForm\">\n  <div class=\"po-row\">\n    <ng-container *ngIf=\"existProcessAPI; then lookupProcessesID; else inputProcessesID\"></ng-container>\n  </div>\n\n  <div class=\"po-row\">\n    <po-divider class=\"po-md-12\" [p-label]=\"literals.firstExecution\"></po-divider>\n\n    <po-datepicker\n      class=\"po-md-4\"\n      name=\"firstExecution\"\n      [(ngModel)]=\"value.firstExecution\"\n      p-placeholder=\"dd/mm/aaaa\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-label]=\"literals.day\"\n      [p-min-date]=\"startDateFirstExecution\"\n    >\n    </po-datepicker>\n\n    <po-input\n      class=\"po-md-2\"\n      name=\"firstExecutionHour\"\n      [(ngModel)]=\"value.firstExecutionHour\"\n      p-mask=\"99:99\"\n      p-mask-format-model\n      p-placeholder=\"HH:mm\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-label]=\"literals.time\"\n      [p-pattern]=\"timePattern\"\n    >\n    </po-input>\n  </div>\n\n  <hr />\n\n  <div class=\"po-row\">\n    <po-radio-group\n      class=\"po-sm-12\"\n      name=\"periodicity\"\n      [(ngModel)]=\"value.periodicity\"\n      p-columns=\"4\"\n      p-required\n      [p-label]=\"literals.periodicity\"\n      [p-options]=\"periodicityOptions\"\n      (p-change)=\"onChangePeriodicityOptions($event)\"\n    >\n    </po-radio-group>\n\n    <ng-container *ngIf=\"value.periodicity !== 'single'\">\n      <div class=\"po-row\">\n        <po-switch\n          class=\"po-md-12\"\n          name=\"containsFrequency\"\n          [(ngModel)]=\"containsFrequency\"\n          [p-label]=\"literals.frequency\"\n          [p-label-off]=\"literals.no\"\n          [p-label-on]=\"literals.yes\"\n          (p-change)=\"onChangeContainsFrequency($event)\"\n        >\n        </po-switch>\n        <ng-container *ngIf=\"containsFrequency\">\n          <po-radio-group\n            class=\"po-md-10\"\n            name=\"frequencyType\"\n            p-required\n            [(ngModel)]=\"value.frequency.type\"\n            [p-columns]=\"3\"\n            [p-options]=\"frequencyOptions\"\n            (p-change)=\"onChangeFrequencyOptions()\"\n          >\n          </po-radio-group>\n\n          <po-number class=\"po-md-2\" name=\"frequencyValue\" p-required [(ngModel)]=\"value.frequency.value\"> </po-number>\n        </ng-container>\n      </div>\n\n      <div class=\"po-row\">\n        <po-divider class=\"po-md-12\" [p-label]=\"literals.periodicityData\"> </po-divider>\n\n        <ng-container *ngTemplateOutlet=\"periodicityTemplates[value.periodicity]\"> </ng-container>\n      </div>\n\n      <div class=\"po-row\">\n        <po-switch\n          class=\"po-md-3\"\n          name=\"recurrent\"\n          [(ngModel)]=\"value.recurrent\"\n          [p-label]=\"literals.recurrent\"\n          [p-label-off]=\"literals.no\"\n          [p-label-on]=\"literals.yes\"\n        >\n        </po-switch>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-template #lookupProcessesID>\n    <po-lookup\n      *ngIf=\"noParameters && noCustomParamsComponent\"\n      class=\"po-md-12\"\n      name=\"processID\"\n      [(ngModel)]=\"value.processID\"\n      p-field-label=\"description\"\n      p-field-value=\"processID\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-filter-service]=\"poPageJobSchedulerLookup\"\n      [p-label]=\"literals.process\"\n      [p-placeholder]=\"literals.enterProcess\"\n    >\n    </po-lookup>\n  </ng-template>\n\n  <ng-template #inputProcessesID>\n    <po-input\n      class=\"po-md-12\"\n      name=\"processID\"\n      [(ngModel)]=\"value.processID\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-label]=\"literals.process\"\n      [p-placeholder]=\"literals.enterProcess\"\n    >\n    </po-input>\n  </ng-template>\n\n  <ng-template #dailyTemplate>\n    <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\n  </ng-template>\n\n  <ng-template #weeklyTemplate>\n    <div class=\"po-row\">\n      <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\n    </div>\n\n    <po-checkbox-group\n      class=\"po-md-12\"\n      name=\"daysOfWeek\"\n      [(ngModel)]=\"value.daysOfWeek\"\n      p-columns=\"4\"\n      p-required\n      [p-label]=\"literals.weekDays\"\n      [p-options]=\"weekDays\"\n    >\n    </po-checkbox-group>\n  </ng-template>\n\n  <ng-template #monthlyTemplate>\n    <po-number\n      class=\"po-md-3\"\n      name=\"dayOfMonth\"\n      [(ngModel)]=\"value.dayOfMonth\"\n      p-required\n      [p-error-pattern]=\"'Dia inv\u00E1lido'\"\n      [p-label]=\"dayLabel\"\n      [p-max]=\"31\"\n      [p-pattern]=\"dayPattern\"\n    >\n    </po-number>\n\n    <po-number\n      *ngIf=\"containsFrequency\"\n      class=\"po-md-3\"\n      name=\"rangeLimitDay\"\n      [(ngModel)]=\"value.rangeLimitDay\"\n      p-required\n      [p-error-pattern]=\"'Dia inv\u00E1lido'\"\n      [p-label]=\"literals.endDay\"\n      [p-max]=\"31\"\n      [p-pattern]=\"dayPattern\"\n    >\n    </po-number>\n\n    <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\n  </ng-template>\n\n  <ng-template #inputHourTemplate>\n    <po-input\n      class=\"po-md-2\"\n      name=\"hour\"\n      [(ngModel)]=\"value.hour\"\n      p-mask=\"99:99\"\n      p-mask-format-model\n      p-placeholder=\"HH:mm\"\n      p-required\n      [p-label]=\"hourLabel\"\n      [p-pattern]=\"timePattern\"\n    >\n    </po-input>\n\n    <po-input\n      *ngIf=\"containsFrequency && value.frequency.type !== 'day'\"\n      class=\"po-md-2\"\n      name=\"rangeLimitHour\"\n      [(ngModel)]=\"value.rangeLimitHour\"\n      p-mask=\"99:99\"\n      p-mask-format-model\n      p-placeholder=\"HH:mm\"\n      p-required\n      [p-label]=\"literals.endTime\"\n      [p-pattern]=\"timePattern\"\n    >\n    </po-input>\n  </ng-template>\n</form>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFlLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt0SCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztJQ0gzQyx3QkFBb0c7Ozs7SUE0RGhHLDZCQUF3QztJQUN0QywwQ0FRQztJQUpDLDJPQUFhLHFEQUNuQixJQUR3Qyw4TUFHdEIsZUFBQSxrQ0FBMEIsQ0FBQSxJQUhKO0lBS3BDLGlCQUFpQjtJQUVqQixxQ0FBZ0c7SUFBcEMsc09BQWEsc0RBQTZCLElBQVA7SUFBRSxpQkFBWTtJQUMvRywwQkFBZTs7O0lBUlgsZUFBa0M7SUFBbEMsc0RBQWtDLGdCQUFBLHVDQUFBO0lBT3dCLGVBQW1DO0lBQW5DLHVEQUFtQzs7O0lBT2pHLHdCQUEwRjs7OztJQS9COUYsNkJBQXFEO0lBQ25ELDhCQUFvQixvQkFBQTtJQUloQiw0UUFBK0IsK0xBSW5CLGVBQUEseUNBQWlDLENBQUEsSUFKZDtJ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QU07a0JBQXpCLEtBQUs7bUJBQUMsV0FBVztZQUVHLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVPLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBQ2UsdUJBQXVCO2tCQUE3RCxLQUFLO21CQUFDLDhCQUE4QjtZQUVULGFBQWE7a0JBQXhDLE1BQU07bUJBQUMsa0JBQWtCO1lBZ0JKLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUG9DaGVja2JveEdyb3VwT3B0aW9uLCBQb1JhZGlvR3JvdXBPcHRpb24gfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGlzVHlwZW9mIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XG5cbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2UgfSBmcm9tICcuLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItbG9va3VwLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSB9IGZyb20gJy4uL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbicsXG4gIHRlbXBsYXRlVXJsOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUG9QYWdlSm9iU2NoZWR1bGVyRXhlY3V0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnZm9ybUV4ZWN1dGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm06IE5nRm9ybTtcblxuICAvLyB0ZW1wbGF0ZXNcbiAgQFZpZXdDaGlsZCgnZGFpbHlUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGRhaWx5VGVtcGxhdGU7XG4gIEBWaWV3Q2hpbGQoJ21vbnRobHlUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG1vbnRobHlUZW1wbGF0ZTtcbiAgQFZpZXdDaGlsZCgnd2Vla2x5VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB3ZWVrbHlUZW1wYWx0ZTtcblxuICBASW5wdXQoJ3AtaXMtZWRpdCcpIGlzRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzID0gPGFueT57fTtcblxuICBASW5wdXQoJ3Atbm8tcGFyYW1ldGVycycpIG5vUGFyYW1ldGVyczogQm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgncC1uby1jdXN0b20tcGFyYW1zLWNvbXBvbmVudCcpIG5vQ3VzdG9tUGFyYW1zQ29tcG9uZW50OiBCb29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCdwLWNoYW5nZS1wcm9jZXNzJykgY2hhbmdlUHJvY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkYXlQYXR0ZXJuID0gJ14oM1swLTFdfFswLTJdWzAtOV18WzEtOV18MFsxLTldKSQnO1xuICBleGlzdFByb2Nlc3NBUEkgPSB0cnVlO1xuICBtaW5EYXRlRmlyc3RFeGVjdXRpb24gPSBuZXcgRGF0ZSgpO1xuICBwZXJpb2RpY2l0eU9wdGlvbnM6IEFycmF5PFBvUmFkaW9Hcm91cE9wdGlvbj4gPSBbXTtcbiAgcGVyaW9kaWNpdHlUZW1wbGF0ZXM6IHsgZGFpbHk6IFRlbXBsYXRlUmVmPGFueT47IHdlZWtseTogVGVtcGxhdGVSZWY8YW55PjsgbW9udGhseTogVGVtcGxhdGVSZWY8YW55PiB9O1xuICB0aW1lUGF0dGVybiA9ICdeKDJbMC0zXXxbMDFdWzAtOV0pOj8oWzAtNV1bMC05XSkkJztcbiAgd2Vla0RheXM6IEFycmF5PFBvQ2hlY2tib3hHcm91cE9wdGlvbj4gPSBbXTtcbiAgZnJlcXVlbmN5T3B0aW9uczogQXJyYXk8UG9SYWRpb0dyb3VwT3B0aW9uPiA9IFtdO1xuICBjb250YWluc0ZyZXF1ZW5jeSA9IGZhbHNlO1xuICBmcmVxdWVuY3k6IHN0cmluZyA9ICdob3VyJztcbiAgcmFuZ2VMaW1pdEhvdXI6IHN0cmluZztcblxuICBwcml2YXRlIF92YWx1ZTogYW55ID0ge307XG5cbiAgQElucHV0KCdwLXZhbHVlJykgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlICYmIGlzVHlwZW9mKHZhbHVlLCAnb2JqZWN0JykgPyB2YWx1ZSA6IHt9O1xuXG4gICAgdGhpcy5jb250YWluc0ZyZXF1ZW5jeSA9IHRoaXMuX3ZhbHVlLmZyZXF1ZW5jeSAmJiB0aGlzLl92YWx1ZS5mcmVxdWVuY3kudmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlOiBQb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBwb1BhZ2VKb2JTY2hlZHVsZXJMb29rdXA6IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBzdGFydERhdGVGaXJzdEV4ZWN1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXQgPyB1bmRlZmluZWQgOiB0aGlzLm1pbkRhdGVGaXJzdEV4ZWN1dGlvbjtcbiAgfVxuXG4gIGdldCBob3VyTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnNGcmVxdWVuY3kgPyB0aGlzLmxpdGVyYWxzLnN0YXJ0VGltZSA6IHRoaXMubGl0ZXJhbHMudGltZTtcbiAgfVxuXG4gIGdldCBkYXlMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluc0ZyZXF1ZW5jeSA/IHRoaXMubGl0ZXJhbHMuc3RhcnREYXkgOiB0aGlzLmxpdGVyYWxzLmRheTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlUHJvY2Vzc0lkVmFsdWVDaGFuZ2VzKCk7XG5cbiAgICAgIGlmICh0aGlzLnZhbHVlLnBlcmlvZGljaXR5KSB7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5T3B0aW9ucyA9IHRoaXMuZnJlcXVlbmN5T3B0aW9ucy5tYXAoZnJlcXVlbmN5T3B0aW9uID0+ICh7XG4gICAgICAgICAgLi4uZnJlcXVlbmN5T3B0aW9uLFxuICAgICAgICAgIGRpc2FibGVkOiBmcmVxdWVuY3lPcHRpb24udmFsdWUgPT09ICdkYXknICYmIHRoaXMudmFsdWUucGVyaW9kaWNpdHkgIT09ICdtb250aGx5J1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBlcmlvZGljaXR5VGVtcGxhdGVzID0ge1xuICAgICAgZGFpbHk6IHRoaXMuZGFpbHlUZW1wbGF0ZSxcbiAgICAgIG1vbnRobHk6IHRoaXMubW9udGhseVRlbXBsYXRlLFxuICAgICAgd2Vla2x5OiB0aGlzLndlZWtseVRlbXBhbHRlXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm5vUGFyYW1ldGVycyAmJiB0aGlzLm5vQ3VzdG9tUGFyYW1zQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNoZWNrRXhpc3RzUHJvY2Vzc2VzQVBJKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wZXJpb2RpY2l0eU9wdGlvbnMgPSB0aGlzLmdldFBlcmlvZGljaXR5T3B0aW9ucygpO1xuICAgIHRoaXMud2Vla0RheXMgPSB0aGlzLmdldFdlZWtEYXlzKCk7XG4gICAgdGhpcy5mcmVxdWVuY3lPcHRpb25zID0gdGhpcy5nZXRGcmVxdWVuY3lPcHRpb25zKCk7XG4gIH1cblxuICBvbkNoYW5nZUNvbnRhaW5zRnJlcXVlbmN5KGNvbnRhaW5zRnJlcXVlbmN5KSB7XG4gICAgaWYgKGNvbnRhaW5zRnJlcXVlbmN5KSB7XG4gICAgICB0aGlzLnZhbHVlLmZyZXF1ZW5jeSA9IHsgdHlwZTogJ2hvdXInLCB2YWx1ZTogbnVsbCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlLmZyZXF1ZW5jeSA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUucmFuZ2VMaW1pdEhvdXIgPSBudWxsO1xuICAgIHRoaXMudmFsdWUucmFuZ2VMaW1pdERheSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZS5kYXlPZk1vbnRoID0gbnVsbDtcbiAgfVxuXG4gIG9uQ2hhbmdlUGVyaW9kaWNpdHlPcHRpb25zKHBlcmlvZGljaXR5KSB7XG4gICAgdGhpcy5mcmVxdWVuY3lPcHRpb25zID0gdGhpcy5mcmVxdWVuY3lPcHRpb25zLm1hcChmcmVxdWVuY3lPcHRpb24gPT4gKHtcbiAgICAgIC4uLmZyZXF1ZW5jeU9wdGlvbixcbiAgICAgIGRpc2FibGVkOiBmcmVxdWVuY3lPcHRpb24udmFsdWUgPT09ICdkYXknICYmIHBlcmlvZGljaXR5ICE9PSAnbW9udGhseSdcbiAgICB9KSk7XG5cbiAgICB0aGlzLnZhbHVlLmZyZXF1ZW5jeS50eXBlID0gbnVsbDtcbiAgfVxuXG4gIG9uQ2hhbmdlRnJlcXVlbmN5T3B0aW9ucygpIHtcbiAgICB0aGlzLnZhbHVlLnJhbmdlTGltaXRIb3VyID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFeGlzdHNQcm9jZXNzZXNBUEkoKSB7XG4gICAgdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLmdldEhlYWRQcm9jZXNzZXMoKS5zdWJzY3JpYmUodW5kZWZpbmVkLCBlcnJvciA9PiB7XG4gICAgICB0aGlzLmV4aXN0UHJvY2Vzc0FQSSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQZXJpb2RpY2l0eU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuc2luZ2xlLCB2YWx1ZTogJ3NpbmdsZScgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuZGFpbHksIHZhbHVlOiAnZGFpbHknIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLndlZWtseSwgdmFsdWU6ICd3ZWVrbHknIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLm1vbnRobHksIHZhbHVlOiAnbW9udGhseScgfVxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIGdldEZyZXF1ZW5jeU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuZGF5LCB2YWx1ZTogJ2RheScgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuaG91ciwgdmFsdWU6ICdob3VyJyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5taW51dGUsIHZhbHVlOiAnbWludXRlJyB9XG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla0RheXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuc3VuZGF5LCB2YWx1ZTogJ1N1bmRheScgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMubW9uZGF5LCB2YWx1ZTogJ01vbmRheScgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMudHVlc2RheSwgdmFsdWU6ICdUdWVzZGF5JyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy53ZWRuZXNkYXksIHZhbHVlOiAnV2VkbmVzZGF5JyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy50aHVyc2RheSwgdmFsdWU6ICdUaHVyc2RheScgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuZnJpZGF5LCB2YWx1ZTogJ0ZyaWRheScgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuc2F0dXJkYXksIHZhbHVlOiAnU2F0dXJkYXknIH1cbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVQcm9jZXNzSWRWYWx1ZUNoYW5nZXMoKSB7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwcm9jZXNzSUQnXT8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShwcm9jZXNzSWQgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9jZXNzLmVtaXQoeyBwcm9jZXNzSWQsIGV4aXN0QVBJOiB0aGlzLmV4aXN0UHJvY2Vzc0FQSSB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGZvcm0gI2Zvcm1FeGVjdXRpb249XCJuZ0Zvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJleGlzdFByb2Nlc3NBUEk7IHRoZW4gbG9va3VwUHJvY2Vzc2VzSUQ7IGVsc2UgaW5wdXRQcm9jZXNzZXNJRFwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XG4gICAgPHBvLWRpdmlkZXIgY2xhc3M9XCJwby1tZC0xMlwiIFtwLWxhYmVsXT1cImxpdGVyYWxzLmZpcnN0RXhlY3V0aW9uXCI+PC9wby1kaXZpZGVyPlxuXG4gICAgPHBvLWRhdGVwaWNrZXJcbiAgICAgIGNsYXNzPVwicG8tbWQtNFwiXG4gICAgICBuYW1lPVwiZmlyc3RFeGVjdXRpb25cIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5maXJzdEV4ZWN1dGlvblwiXG4gICAgICBwLXBsYWNlaG9sZGVyPVwiZGQvbW0vYWFhYVwiXG4gICAgICBwLXJlcXVpcmVkXG4gICAgICBbcC1kaXNhYmxlZF09XCJpc0VkaXRcIlxuICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuZGF5XCJcbiAgICAgIFtwLW1pbi1kYXRlXT1cInN0YXJ0RGF0ZUZpcnN0RXhlY3V0aW9uXCJcbiAgICA+XG4gICAgPC9wby1kYXRlcGlja2VyPlxuXG4gICAgPHBvLWlucHV0XG4gICAgICBjbGFzcz1cInBvLW1kLTJcIlxuICAgICAgbmFtZT1cImZpcnN0RXhlY3V0aW9uSG91clwiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlLmZpcnN0RXhlY3V0aW9uSG91clwiXG4gICAgICBwLW1hc2s9XCI5OTo5OVwiXG4gICAgICBwLW1hc2stZm9ybWF0LW1vZGVsXG4gICAgICBwLXBsYWNlaG9sZGVyPVwiSEg6bW1cIlxuICAgICAgcC1yZXF1aXJlZFxuICAgICAgW3AtZGlzYWJsZWRdPVwiaXNFZGl0XCJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnRpbWVcIlxuICAgICAgW3AtcGF0dGVybl09XCJ0aW1lUGF0dGVyblwiXG4gICAgPlxuICAgIDwvcG8taW5wdXQ+XG4gIDwvZGl2PlxuXG4gIDxociAvPlxuXG4gIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cbiAgICA8cG8tcmFkaW8tZ3JvdXBcbiAgICAgIGNsYXNzPVwicG8tc20tMTJcIlxuICAgICAgbmFtZT1cInBlcmlvZGljaXR5XCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUucGVyaW9kaWNpdHlcIlxuICAgICAgcC1jb2x1bW5zPVwiNFwiXG4gICAgICBwLXJlcXVpcmVkXG4gICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5wZXJpb2RpY2l0eVwiXG4gICAgICBbcC1vcHRpb25zXT1cInBlcmlvZGljaXR5T3B0aW9uc1wiXG4gICAgICAocC1jaGFuZ2UpPVwib25DaGFuZ2VQZXJpb2RpY2l0eU9wdGlvbnMoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvcG8tcmFkaW8tZ3JvdXA+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsdWUucGVyaW9kaWNpdHkgIT09ICdzaW5nbGUnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XG4gICAgICAgIDxwby1zd2l0Y2hcbiAgICAgICAgICBjbGFzcz1cInBvLW1kLTEyXCJcbiAgICAgICAgICBuYW1lPVwiY29udGFpbnNGcmVxdWVuY3lcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiY29udGFpbnNGcmVxdWVuY3lcIlxuICAgICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLmZyZXF1ZW5jeVwiXG4gICAgICAgICAgW3AtbGFiZWwtb2ZmXT1cImxpdGVyYWxzLm5vXCJcbiAgICAgICAgICBbcC1sYWJlbC1vbl09XCJsaXRlcmFscy55ZXNcIlxuICAgICAgICAgIChwLWNoYW5nZSk9XCJvbkNoYW5nZUNvbnRhaW5zRnJlcXVlbmN5KCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgIDwvcG8tc3dpdGNoPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGFpbnNGcmVxdWVuY3lcIj5cbiAgICAgICAgICA8cG8tcmFkaW8tZ3JvdXBcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTBcIlxuICAgICAgICAgICAgbmFtZT1cImZyZXF1ZW5jeVR5cGVcIlxuICAgICAgICAgICAgcC1yZXF1aXJlZFxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5mcmVxdWVuY3kudHlwZVwiXG4gICAgICAgICAgICBbcC1jb2x1bW5zXT1cIjNcIlxuICAgICAgICAgICAgW3Atb3B0aW9uc109XCJmcmVxdWVuY3lPcHRpb25zXCJcbiAgICAgICAgICAgIChwLWNoYW5nZSk9XCJvbkNoYW5nZUZyZXF1ZW5jeU9wdGlvbnMoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvcG8tcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgICA8cG8tbnVtYmVyIGNsYXNzPVwicG8tbWQtMlwiIG5hbWU9XCJmcmVxdWVuY3lWYWx1ZVwiIHAtcmVxdWlyZWQgWyhuZ01vZGVsKV09XCJ2YWx1ZS5mcmVxdWVuY3kudmFsdWVcIj4gPC9wby1udW1iZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cbiAgICAgICAgPHBvLWRpdmlkZXIgY2xhc3M9XCJwby1tZC0xMlwiIFtwLWxhYmVsXT1cImxpdGVyYWxzLnBlcmlvZGljaXR5RGF0YVwiPiA8L3BvLWRpdmlkZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcmlvZGljaXR5VGVtcGxhdGVzW3ZhbHVlLnBlcmlvZGljaXR5XVwiPiA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XG4gICAgICAgIDxwby1zd2l0Y2hcbiAgICAgICAgICBjbGFzcz1cInBvLW1kLTNcIlxuICAgICAgICAgIG5hbWU9XCJyZWN1cnJlbnRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWUucmVjdXJyZW50XCJcbiAgICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5yZWN1cnJlbnRcIlxuICAgICAgICAgIFtwLWxhYmVsLW9mZl09XCJsaXRlcmFscy5ub1wiXG4gICAgICAgICAgW3AtbGFiZWwtb25dPVwibGl0ZXJhbHMueWVzXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BvLXN3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8bmctdGVtcGxhdGUgI2xvb2t1cFByb2Nlc3Nlc0lEPlxuICAgIDxwby1sb29rdXBcbiAgICAgICpuZ0lmPVwibm9QYXJhbWV0ZXJzICYmIG5vQ3VzdG9tUGFyYW1zQ29tcG9uZW50XCJcbiAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxuICAgICAgbmFtZT1cInByb2Nlc3NJRFwiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlLnByb2Nlc3NJRFwiXG4gICAgICBwLWZpZWxkLWxhYmVsPVwiZGVzY3JpcHRpb25cIlxuICAgICAgcC1maWVsZC12YWx1ZT1cInByb2Nlc3NJRFwiXG4gICAgICBwLXJlcXVpcmVkXG4gICAgICBbcC1kaXNhYmxlZF09XCJpc0VkaXRcIlxuICAgICAgW3AtZmlsdGVyLXNlcnZpY2VdPVwicG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwXCJcbiAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnByb2Nlc3NcIlxuICAgICAgW3AtcGxhY2Vob2xkZXJdPVwibGl0ZXJhbHMuZW50ZXJQcm9jZXNzXCJcbiAgICA+XG4gICAgPC9wby1sb29rdXA+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLXRlbXBsYXRlICNpbnB1dFByb2Nlc3Nlc0lEPlxuICAgIDxwby1pbnB1dFxuICAgICAgY2xhc3M9XCJwby1tZC0xMlwiXG4gICAgICBuYW1lPVwicHJvY2Vzc0lEXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUucHJvY2Vzc0lEXCJcbiAgICAgIHAtcmVxdWlyZWRcbiAgICAgIFtwLWRpc2FibGVkXT1cImlzRWRpdFwiXG4gICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5wcm9jZXNzXCJcbiAgICAgIFtwLXBsYWNlaG9sZGVyXT1cImxpdGVyYWxzLmVudGVyUHJvY2Vzc1wiXG4gICAgPlxuICAgIDwvcG8taW5wdXQ+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLXRlbXBsYXRlICNkYWlseVRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbnB1dEhvdXJUZW1wbGF0ZVwiPiA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgI3dlZWtseVRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbnB1dEhvdXJUZW1wbGF0ZVwiPiA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDxwby1jaGVja2JveC1ncm91cFxuICAgICAgY2xhc3M9XCJwby1tZC0xMlwiXG4gICAgICBuYW1lPVwiZGF5c09mV2Vla1wiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlLmRheXNPZldlZWtcIlxuICAgICAgcC1jb2x1bW5zPVwiNFwiXG4gICAgICBwLXJlcXVpcmVkXG4gICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy53ZWVrRGF5c1wiXG4gICAgICBbcC1vcHRpb25zXT1cIndlZWtEYXlzXCJcbiAgICA+XG4gICAgPC9wby1jaGVja2JveC1ncm91cD5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgI21vbnRobHlUZW1wbGF0ZT5cbiAgICA8cG8tbnVtYmVyXG4gICAgICBjbGFzcz1cInBvLW1kLTNcIlxuICAgICAgbmFtZT1cImRheU9mTW9udGhcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5kYXlPZk1vbnRoXCJcbiAgICAgIHAtcmVxdWlyZWRcbiAgICAgIFtwLWVycm9yLXBhdHRlcm5dPVwiJ0RpYSBpbnbDoWxpZG8nXCJcbiAgICAgIFtwLWxhYmVsXT1cImRheUxhYmVsXCJcbiAgICAgIFtwLW1heF09XCIzMVwiXG4gICAgICBbcC1wYXR0ZXJuXT1cImRheVBhdHRlcm5cIlxuICAgID5cbiAgICA8L3BvLW51bWJlcj5cblxuICAgIDxwby1udW1iZXJcbiAgICAgICpuZ0lmPVwiY29udGFpbnNGcmVxdWVuY3lcIlxuICAgICAgY2xhc3M9XCJwby1tZC0zXCJcbiAgICAgIG5hbWU9XCJyYW5nZUxpbWl0RGF5XCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWUucmFuZ2VMaW1pdERheVwiXG4gICAgICBwLXJlcXVpcmVkXG4gICAgICBbcC1lcnJvci1wYXR0ZXJuXT1cIidEaWEgaW52w6FsaWRvJ1wiXG4gICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5lbmREYXlcIlxuICAgICAgW3AtbWF4XT1cIjMxXCJcbiAgICAgIFtwLXBhdHRlcm5dPVwiZGF5UGF0dGVyblwiXG4gICAgPlxuICAgIDwvcG8tbnVtYmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImlucHV0SG91clRlbXBsYXRlXCI+IDwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjaW5wdXRIb3VyVGVtcGxhdGU+XG4gICAgPHBvLWlucHV0XG4gICAgICBjbGFzcz1cInBvLW1kLTJcIlxuICAgICAgbmFtZT1cImhvdXJcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5ob3VyXCJcbiAgICAgIHAtbWFzaz1cIjk5Ojk5XCJcbiAgICAgIHAtbWFzay1mb3JtYXQtbW9kZWxcbiAgICAgIHAtcGxhY2Vob2xkZXI9XCJISDptbVwiXG4gICAgICBwLXJlcXVpcmVkXG4gICAgICBbcC1sYWJlbF09XCJob3VyTGFiZWxcIlxuICAgICAgW3AtcGF0dGVybl09XCJ0aW1lUGF0dGVyblwiXG4gICAgPlxuICAgIDwvcG8taW5wdXQ+XG5cbiAgICA8cG8taW5wdXRcbiAgICAgICpuZ0lmPVwiY29udGFpbnNGcmVxdWVuY3kgJiYgdmFsdWUuZnJlcXVlbmN5LnR5cGUgIT09ICdkYXknXCJcbiAgICAgIGNsYXNzPVwicG8tbWQtMlwiXG4gICAgICBuYW1lPVwicmFuZ2VMaW1pdEhvdXJcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5yYW5nZUxpbWl0SG91clwiXG4gICAgICBwLW1hc2s9XCI5OTo5OVwiXG4gICAgICBwLW1hc2stZm9ybWF0LW1vZGVsXG4gICAgICBwLXBsYWNlaG9sZGVyPVwiSEg6bW1cIlxuICAgICAgcC1yZXF1aXJlZFxuICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuZW5kVGltZVwiXG4gICAgICBbcC1wYXR0ZXJuXT1cInRpbWVQYXR0ZXJuXCJcbiAgICA+XG4gICAgPC9wby1pbnB1dD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZm9ybT5cbiJdfQ==