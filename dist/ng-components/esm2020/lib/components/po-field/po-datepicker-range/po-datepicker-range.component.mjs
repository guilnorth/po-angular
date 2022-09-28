import { Component, ElementRef, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoControlPositionService } from './../../../services/po-control-position/po-control-position.service';
import { PoDatepickerRangeBaseComponent } from './po-datepicker-range-base.component';
import { PoMask } from '../po-input/po-mask';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-control-position/po-control-position.service";
import * as i2 from "./../../../services/po-date/po-date.service";
import * as i3 from "../../../services/po-language/po-language.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "../po-clean/po-clean.component";
import * as i7 from "../../po-calendar/po-calendar.component";
import * as i8 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i9 from "../po-field-container/po-field-container.component";
const _c0 = ["dateRangeField"];
const _c1 = ["endDateInput"];
const _c2 = ["startDateInput"];
const _c3 = ["iconCalendar"];
const _c4 = ["calendarPicker"];
function PoDatepickerRangeComponent_po_clean_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 15);
    i0.ɵɵlistener("p-change-event", function PoDatepickerRangeComponent_po_clean_12_Template_po_clean_p_change_event_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.clear()); });
    i0.ɵɵelementEnd();
} }
function PoDatepickerRangeComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 16, 17)(3, "po-calendar", 18);
    i0.ɵɵlistener("ngModelChange", function PoDatepickerRangeComponent_ng_container_17_Template_po_calendar_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onCalendarChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r5.dateRange)("p-max-date", ctx_r5.maxDate)("p-min-date", ctx_r5.minDate)("p-locale", ctx_r5.locale);
} }
const arrowLeftKey = 37;
const arrowRightKey = 39;
const backspaceKey = 8;
const poDatepickerRangeDateLengthDefault = 10;
const poCalendarContentOffset = 8;
const poCalendarPositionDefault = 'bottom-left';
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoDatepickerRangeComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoDatepickerRangeComponent),
        multi: true
    },
    PoControlPositionService
];
/**
 * @docsExtends PoDatepickerRangeBaseComponent
 *
 * @example
 *
 * <example name="po-datepicker-range-basic" title="PO Datepicker Range Basic">
 *  <file name="sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"> </file>
 *  <file name="sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-datepicker-range-labs" title="PO Datepicker Range Labs">
 *  <file name="sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"> </file>
 *  <file name="sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-datepicker-range-vacations" title="PO Datepicker Range - Vacations Suggestion">
 *  <file name="sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"> </file>
 *  <file name="sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.ts"> </file>
 * </example>
 *
 * <example name="po-datepicker-range-vacations-reactive-form" title="PO Datepicker Range - Vacations Reactive Form">
 *  <file name="sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html">
 *  </file>
 *  <file name="sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.ts">
 *  </file>
 * </example>
 */
export class PoDatepickerRangeComponent extends PoDatepickerRangeBaseComponent {
    constructor(changeDetector, controlPosition, renderer, cd, poDateService, poDatepickerRangeElement, poLanguageService) {
        super(poDateService, poLanguageService);
        this.changeDetector = changeDetector;
        this.controlPosition = controlPosition;
        this.renderer = renderer;
        this.cd = cd;
        this.isCalendarVisible = false;
        this.onScroll = () => {
            if (this.isCalendarVisible) {
                this.controlPosition.adjustPosition(poCalendarPositionDefault);
            }
        };
        this.poDatepickerRangeElement = poDatepickerRangeElement;
    }
    get autocomplete() {
        return this.noAutocomplete ? 'off' : 'on';
    }
    get enableCleaner() {
        return this.clean && (this.startDateInputValue || this.endDateInputValue) && !this.disabled && !this.readonly;
    }
    get endDateInputName() {
        return 'end-date';
    }
    get endDateInputValue() {
        return this.endDateInput.nativeElement.value;
    }
    get getErrorMessage() {
        return this.errorMessage !== '' && this.hasInvalidClass() ? this.errorMessage : '';
    }
    get isDateRangeInputUncompleted() {
        return (this.endDateInputValue.length < poDatepickerRangeDateLengthDefault &&
            this.startDateInputValue.length < poDatepickerRangeDateLengthDefault);
    }
    get isDirtyDateRangeInput() {
        return this.endDateInputValue.length > 0 || this.startDateInputValue.length > 0;
    }
    get startDateInputName() {
        return 'start-date';
    }
    get startDateInputValue() {
        return this.startDateInput.nativeElement.value;
    }
    static getKeyCode(event) {
        return event.keyCode || event.which;
    }
    static getTargetElement(event) {
        return event.target || event.srcElement;
    }
    static isValidKey(keyCode) {
        const isNumericKey = keyCode >= 48 && keyCode <= 57;
        const isNumericNumpadKey = keyCode >= 96 && keyCode <= 105;
        return isNumericKey || isNumericNumpadKey;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnInit() {
        // Classe de máscara
        this.poMaskObject = this.buildMask();
    }
    ngOnChanges(changes) {
        if (changes.minDate || changes.maxDate) {
            this.validateModel(this.dateRange);
        }
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    clear() {
        this.resetDateRangeInputValidation();
        this.dateRange = { start: '', end: '' };
        this.updateScreenByModel(this.dateRange);
        this.updateModel(this.dateRange);
    }
    eventOnClick($event) {
        this.poMaskObject.click($event);
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoDatepickerRangeComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;
     *
     * focusDatepickerRange() {
     *   this.datepickerRange.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.startDateInput.nativeElement.focus();
        }
    }
    onBlur(event) {
        this.onTouchedModel?.();
        const isStartDateTargetEvent = event.target.name === this.startDateInputName;
        this.updateModelByScreen(isStartDateTargetEvent);
        this.removeFocusFromDatePickerRangeField();
    }
    onCalendarChange({ start, end }) {
        const isStartDateTargetEvent = start && !end;
        this.updateScreenByModel({ start: start || '', end: end || '' });
        this.updateModelByScreen(isStartDateTargetEvent, start || '', end || '');
        if (start && end) {
            setTimeout(() => {
                this.isCalendarVisible = false;
                this.cd.markForCheck();
            }, 300);
        }
    }
    onFocus(event) {
        this.applyFocusOnDatePickerRangeField();
        this.poMaskObject.resetPositions(event);
    }
    onKeydown(event) {
        if (this.readonly) {
            return;
        }
        if (this.isSetFocusOnBackspace(event)) {
            event.preventDefault();
            this.setFocusOnBackspace();
        }
        else {
            this.poMaskObject.keydown(event);
        }
    }
    onKeyup(event) {
        if (this.readonly) {
            return;
        }
        const isStartDateTargetEvent = event.target.name === this.startDateInputName;
        this.setFocus(event);
        this.poMaskObject.keyup(event);
        this.updateModelWhenComplete(isStartDateTargetEvent, this.startDateInputValue, this.endDateInputValue);
    }
    resetDateRangeInputValidation() {
        this.isStartDateRangeInputValid = true;
        this.isDateRangeInputFormatValid = true;
    }
    toggleCalendar() {
        if (this.disabled || this.readonly) {
            return;
        }
        this.isCalendarVisible = !this.isCalendarVisible;
        this.changeDetector.detectChanges();
        if (this.isCalendarVisible) {
            this.setCalendarPosition();
            this.initializeListeners();
        }
        else {
            this.removeListeners();
        }
    }
    updateScreenByModel(model) {
        const dateRange = { start: model.start, end: model.end };
        const isStartDateValid = this.poDateService.isDateRangeValid(dateRange.end, dateRange.start);
        const isDateValid = date => !this.dateFormatFailed(date) && isStartDateValid;
        const endDateFormated = isDateValid(dateRange.end) ? this.formatModelToScreen(dateRange.end) : '';
        const startDateFormated = isDateValid(dateRange.start) ? this.formatModelToScreen(dateRange.start) : '';
        this.endDateInput.nativeElement.value = endDateFormated;
        this.startDateInput.nativeElement.value = startDateFormated;
        this.changeDetector.detectChanges();
    }
    applyFocusOnDatePickerRangeField() {
        this.dateRangeField.nativeElement.classList.add('po-datepicker-range-field-focused');
    }
    // Retorna um objeto do tipo PoMask com a mascara configurada.
    buildMask() {
        let mask = this.format.toUpperCase();
        mask = mask.replace(/DD/g, '99');
        mask = mask.replace(/MM/g, '99');
        mask = mask.replace(/YYYY/g, '9999');
        return new PoMask(mask, true);
    }
    formatDate(format, day = '', month = '', year = '') {
        let dateFormatted = format;
        day = day && day.includes('T') ? day.slice(0, 2) : day;
        dateFormatted = dateFormatted.replace('dd', ('0' + day).slice(-2));
        dateFormatted = dateFormatted.replace('mm', ('0' + month).slice(-2));
        dateFormatted = dateFormatted.replace('yyyy', String(year));
        return dateFormatted;
    }
    formatScreenToModel(value = '') {
        const [day, month, year] = value.split('/');
        return value ? this.formatDate('yyyy-mm-dd', day, month, year) : '';
    }
    formatModelToScreen(value = '') {
        const [year, month, day] = value.split('-');
        return value ? this.formatDate(this.format, day, month, year) : '';
    }
    getDateRangeFormatValidation(startDate, endDate, isStartDateTargetEvent) {
        this.setDateRangeInputValidation(startDate, endDate);
        return {
            isValid: this.isDateRangeInputFormatValid && this.isStartDateRangeInputValid && this.verifyValidDate(startDate, endDate),
            dateRangeModel: this.getValidatedModel(startDate, endDate, isStartDateTargetEvent)
        };
    }
    getValidatedModel(startDate, endDate, isStartDateTargetEvent) {
        const dateRangeModel = { start: '', end: '' };
        dateRangeModel.end =
            (isStartDateTargetEvent || this.isStartDateRangeInputValid) && !this.dateFormatFailed(endDate) ? endDate : '';
        dateRangeModel.start =
            (!isStartDateTargetEvent || this.isStartDateRangeInputValid) && !this.dateFormatFailed(startDate)
                ? startDate
                : '';
        return dateRangeModel;
    }
    hasAttrCalendar(element) {
        const attrCalendar = 'attr-calendar';
        return element?.hasAttribute(attrCalendar) || element?.parentElement?.hasAttribute(attrCalendar);
    }
    hasInvalidClass() {
        return (this.poDatepickerRangeElement.nativeElement.classList.contains('ng-invalid') &&
            this.poDatepickerRangeElement.nativeElement.classList.contains('ng-dirty'));
    }
    initializeListeners() {
        this.clickListener = this.renderer.listen('document', 'click', (event) => {
            this.wasClickedOnPicker(event);
        });
        this.eventResizeListener = this.renderer.listen('window', 'resize', () => {
            this.isCalendarVisible = false;
        });
        window.addEventListener('scroll', this.onScroll, true);
    }
    isEqualBeforeValue(startDate, endDate) {
        return this.isDateRangeInputFormatValid && endDate === this.dateRange.end && startDate === this.dateRange.start;
    }
    isSetFocusOnBackspace(event) {
        return (event.target.name === this.endDateInputName &&
            this.endDateInput.nativeElement.selectionStart === 0 &&
            this.endDateInput.nativeElement.selectionEnd === 0 &&
            event.keyCode === backspaceKey);
    }
    removeFocusFromDatePickerRangeField() {
        this.dateRangeField.nativeElement.classList.remove('po-datepicker-range-field-focused');
    }
    setDateRangeInputValidation(startDate, endDate) {
        this.isStartDateRangeInputValid = this.poDateService.isDateRangeValid(endDate, startDate);
        this.isDateRangeInputFormatValid = !this.dateFormatFailed(startDate) && !this.dateFormatFailed(endDate);
    }
    setFocus(event) {
        const inputElement = PoDatepickerRangeComponent.getTargetElement(event);
        const keyCode = PoDatepickerRangeComponent.getKeyCode(event);
        const inputName = inputElement['name'];
        this.setFocusOnArrowLeft(keyCode, inputName);
        this.setFocusOnArrowRight(keyCode, inputName, inputElement);
        this.setFocusOnStartDateCompleted(keyCode, inputName);
    }
    setFocusAndPosition(position, inputElement, selectionRange) {
        this.focusOnElement(inputElement);
        setTimeout(() => {
            inputElement.nativeElement.setSelectionRange(selectionRange, selectionRange);
            this.poMaskObject.initialPosition = position;
            this.poMaskObject.finalPosition = position;
        });
    }
    focusOnElement(inputElement) {
        inputElement.nativeElement.focus();
    }
    removeListeners() {
        if (this.clickListener) {
            this.clickListener();
        }
        if (this.eventResizeListener) {
            this.eventResizeListener();
        }
        window.removeEventListener('scroll', this.onScroll, true);
    }
    setCalendarPosition() {
        this.controlPosition.setElements(this.calendarPicker.nativeElement, poCalendarContentOffset, this.dateRangeField, ['bottom-left', 'bottom-right', 'top-left', 'top-right'], false, true);
        this.controlPosition.adjustPosition(poCalendarPositionDefault);
    }
    setFocusOnArrowLeft(keyCode, inputName) {
        const isCursorAtStartOfInput = this.endDateInput.nativeElement.selectionStart === 0;
        if (inputName === this.endDateInputName && isCursorAtStartOfInput && keyCode === arrowLeftKey) {
            const inputLength = this.startDateInput.nativeElement.value.length;
            this.setFocusAndPosition(inputLength, this.startDateInput, inputLength);
        }
    }
    setFocusOnArrowRight(keyCode, inputName, inputElement) {
        const isCursorAtEndOfInput = this.startDateInput.nativeElement.selectionStart === inputElement.value.length;
        if (inputName === this.startDateInputName && isCursorAtEndOfInput && keyCode === arrowRightKey) {
            this.setFocusAndPosition(0, this.endDateInput, 0);
        }
    }
    setFocusOnBackspace() {
        const inputLength = this.startDateInput.nativeElement.value.length;
        this.startDateInput.nativeElement.value = this.startDateInputValue.slice(0, -1);
        this.setFocusAndPosition(inputLength, this.startDateInput, inputLength);
    }
    setFocusOnStartDateCompleted(keyCode, inputName) {
        const isLastKeyPressed = this.startDateInput.nativeElement.selectionStart === poDatepickerRangeDateLengthDefault;
        const isNewDateCompleted = this.startDateInputValue.length === poDatepickerRangeDateLengthDefault && isLastKeyPressed;
        const isValidKey = PoDatepickerRangeComponent.isValidKey(keyCode);
        if (inputName === this.startDateInputName && isNewDateCompleted && isValidKey) {
            this.setFocusAndPosition(0, this.endDateInput, 0);
        }
    }
    updateModelWhenComplete(isStartDateTargetEvent, startDate, endDate) {
        const endDateFormatted = this.formatScreenToModel(endDate);
        const startDateFormatted = this.formatScreenToModel(startDate);
        const dateFormatValidation = this.getDateRangeFormatValidation(startDateFormatted, endDateFormatted, isStartDateTargetEvent);
        if (this.isEqualBeforeValue(startDateFormatted, endDateFormatted)) {
            this.resetDateRangeInputValidation();
            this.validateModel(this.dateRange);
            return;
        }
        if (dateFormatValidation.isValid) {
            this.dateRange = { start: startDateFormatted, end: endDateFormatted };
            this.updateModel(this.dateRange);
            this.onChange.emit({ ...this.dateRange });
        }
    }
    updateModelByScreen(isStartDateTargetEvent, startDate, endDate) {
        const endDateFormatted = endDate || this.formatScreenToModel(this.endDateInputValue);
        const startDateFormatted = startDate || this.formatScreenToModel(this.startDateInputValue);
        if (this.isDateRangeInputUncompleted && this.isDirtyDateRangeInput) {
            this.updateModel(this.dateRange);
            return;
        }
        if (this.isEqualBeforeValue(startDateFormatted, endDateFormatted)) {
            this.resetDateRangeInputValidation();
            this.validateModel(this.dateRange);
            return;
        }
        const dateFormatValidation = this.getDateRangeFormatValidation(startDateFormatted, endDateFormatted, isStartDateTargetEvent);
        if (dateFormatValidation.isValid) {
            this.dateRange = { start: startDateFormatted, end: endDateFormatted };
            this.updateModel(this.dateRange);
            this.onChange.emit({ ...this.dateRange });
        }
        if (!dateFormatValidation.isValid && this.verifyFormattedDates(startDateFormatted, endDateFormatted)) {
            this.dateRange = { ...dateFormatValidation.dateRangeModel };
            this.updateModel(dateFormatValidation.dateRangeModel);
        }
    }
    verifyFormattedDates(start, end) {
        return !!start || !!end;
    }
    wasClickedOnPicker(event) {
        if (!this.isCalendarVisible) {
            return;
        }
        if (!this.calendarPicker.nativeElement.contains(event.target) &&
            !this.iconCalendar.nativeElement.contains(event.target) &&
            !this.hasAttrCalendar(event.target)) {
            this.isCalendarVisible = false;
        }
        this.cd.markForCheck();
    }
}
PoDatepickerRangeComponent.ɵfac = function PoDatepickerRangeComponent_Factory(t) { return new (t || PoDatepickerRangeComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.PoControlPositionService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.PoDateService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.PoLanguageService)); };
PoDatepickerRangeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDatepickerRangeComponent, selectors: [["po-datepicker-range"]], viewQuery: function PoDatepickerRangeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(_c1, 7, ElementRef);
        i0.ɵɵviewQuery(_c2, 7, ElementRef);
        i0.ɵɵviewQuery(_c3, 7, ElementRef);
        i0.ɵɵviewQuery(_c4, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateRangeField = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.endDateInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.startDateInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iconCalendar = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarPicker = _t.first);
    } }, features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 18, vars: 27, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-datepicker-range-field", "po-input"], ["dateRangeField", ""], [1, "po-datepicker-range-start-date"], ["maxlength", "10", "type", "text", 1, "po-datepicker-range-input", 3, "autocomplete", "disabled", "name", "readonly", "blur", "focus", "keydown", "keyup", "click"], ["startDateInput", ""], [1, "po-datepicker-range-separator"], [1, "po-datepicker-range-end-date"], ["endDateInput", ""], [1, "po-datepicker-range-icon"], ["class", "po-icon-input", 3, "p-change-event", 4, "ngIf"], [3, "click"], ["iconCalendar", ""], [3, "p-error-pattern"], [4, "ngIf"], [1, "po-icon-input", 3, "p-change-event"], [1, "po-calendar-range-picker"], ["calendarPicker", ""], ["p-mode", "range", 3, "ngModel", "p-max-date", "p-min-date", "p-locale", "ngModelChange"]], template: function PoDatepickerRangeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1, 2)(3, "div", 3)(4, "input", 4, 5);
        i0.ɵɵlistener("blur", function PoDatepickerRangeComponent_Template_input_blur_4_listener($event) { return ctx.onBlur($event); })("focus", function PoDatepickerRangeComponent_Template_input_focus_4_listener($event) { return ctx.onFocus($event); })("keydown", function PoDatepickerRangeComponent_Template_input_keydown_4_listener($event) { return ctx.onKeydown($event); })("keyup", function PoDatepickerRangeComponent_Template_input_keyup_4_listener($event) { return ctx.onKeyup($event); })("click", function PoDatepickerRangeComponent_Template_input_click_4_listener($event) { return ctx.eventOnClick($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵtext(7, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7)(9, "input", 4, 8);
        i0.ɵɵlistener("blur", function PoDatepickerRangeComponent_Template_input_blur_9_listener($event) { return ctx.onBlur($event); })("focus", function PoDatepickerRangeComponent_Template_input_focus_9_listener($event) { return ctx.onFocus($event); })("keydown", function PoDatepickerRangeComponent_Template_input_keydown_9_listener($event) { return ctx.onKeydown($event); })("keyup", function PoDatepickerRangeComponent_Template_input_keyup_9_listener($event) { return ctx.onKeyup($event); })("click", function PoDatepickerRangeComponent_Template_input_click_9_listener($event) { return ctx.eventOnClick($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵtemplate(12, PoDatepickerRangeComponent_po_clean_12_Template, 1, 0, "po-clean", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9)(14, "span", 11, 12);
        i0.ɵɵlistener("click", function PoDatepickerRangeComponent_Template_span_click_14_listener() { return ctx.toggleCalendar(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(16, "po-field-container-bottom", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, PoDatepickerRangeComponent_ng_container_17_Template, 4, 4, "ng-container", 14);
    } if (rf & 2) {
        i0.ɵɵclassProp("po-date-picker-container-disabled", ctx.disabled);
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-datepicker-range-field-disabled", ctx.disabled);
        i0.ɵɵattribute("disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("name", ctx.startDateInputName)("readonly", ctx.readonly);
        i0.ɵɵattribute("aria-label", ctx.label);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("name", ctx.endDateInputName)("readonly", ctx.readonly);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.enableCleaner);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("po-icon po-field-icon po-icon-calendar ", ctx.disabled ? "po-icon-input-disabled" : "po-icon-input", "");
        i0.ɵɵclassProp("po-clickable", !ctx.disabled && !ctx.readonly)("po-field-icon-disabled", ctx.disabled || ctx.readonly);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isCalendarVisible);
    } }, dependencies: [i4.NgIf, i5.NgControlStatus, i5.NgModel, i6.PoCleanComponent, i7.PoCalendarComponent, i8.PoFieldContainerBottomComponent, i9.PoFieldContainerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDatepickerRangeComponent, [{
        type: Component,
        args: [{ selector: 'po-datepicker-range', providers: providers, changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-field-container\r\n  [class.po-date-picker-container-disabled]=\"disabled\"\r\n  [p-help]=\"help\"\r\n  [p-label]=\"label\"\r\n  [p-optional]=\"!required && optional\"\r\n>\r\n  <div\r\n    #dateRangeField\r\n    class=\"po-datepicker-range-field po-input\"\r\n    [class.po-datepicker-range-field-disabled]=\"disabled\"\r\n    [attr.disabled]=\"disabled\"\r\n  >\r\n    <div class=\"po-datepicker-range-start-date\">\r\n      <input\r\n        #startDateInput\r\n        class=\"po-datepicker-range-input\"\r\n        maxlength=\"10\"\r\n        type=\"text\"\r\n        [attr.aria-label]=\"label\"\r\n        [autocomplete]=\"autocomplete\"\r\n        [disabled]=\"disabled\"\r\n        [name]=\"startDateInputName\"\r\n        [readonly]=\"readonly\"\r\n        (blur)=\"onBlur($event)\"\r\n        (focus)=\"onFocus($event)\"\r\n        (keydown)=\"onKeydown($event)\"\r\n        (keyup)=\"onKeyup($event)\"\r\n        (click)=\"eventOnClick($event)\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"po-datepicker-range-separator\">-</div>\r\n\r\n    <div class=\"po-datepicker-range-end-date\">\r\n      <input\r\n        #endDateInput\r\n        class=\"po-datepicker-range-input\"\r\n        maxlength=\"10\"\r\n        type=\"text\"\r\n        [autocomplete]=\"autocomplete\"\r\n        [disabled]=\"disabled\"\r\n        [name]=\"endDateInputName\"\r\n        [readonly]=\"readonly\"\r\n        (blur)=\"onBlur($event)\"\r\n        (focus)=\"onFocus($event)\"\r\n        (keydown)=\"onKeydown($event)\"\r\n        (keyup)=\"onKeyup($event)\"\r\n        (click)=\"eventOnClick($event)\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"po-datepicker-range-icon\">\r\n      <po-clean class=\"po-icon-input\" *ngIf=\"enableCleaner\" (p-change-event)=\"clear()\"></po-clean>\r\n    </div>\r\n\r\n    <div class=\"po-datepicker-range-icon\">\r\n      <span\r\n        #iconCalendar\r\n        class=\"po-icon po-field-icon po-icon-calendar {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n        [class.po-clickable]=\"!disabled && !readonly\"\r\n        [class.po-field-icon-disabled]=\"disabled || readonly\"\r\n        (click)=\"toggleCalendar()\"\r\n      >\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorMessage\"></po-field-container-bottom>\r\n</po-field-container>\r\n\r\n<ng-container *ngIf=\"isCalendarVisible\">\r\n  <div #calendarPicker class=\"po-calendar-range-picker\">\r\n    <po-calendar\r\n      p-mode=\"range\"\r\n      [ngModel]=\"dateRange\"\r\n      [p-max-date]=\"maxDate\"\r\n      [p-min-date]=\"minDate\"\r\n      [p-locale]=\"locale\"\r\n      (ngModelChange)=\"onCalendarChange($event)\"\r\n    ></po-calendar>\r\n  </div>\r\n</ng-container>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PoControlPositionService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.PoDateService }, { type: i0.ElementRef }, { type: i3.PoLanguageService }]; }, { dateRangeField: [{
            type: ViewChild,
            args: ['dateRangeField', { read: ElementRef, static: true }]
        }], endDateInput: [{
            type: ViewChild,
            args: ['endDateInput', { read: ElementRef, static: true }]
        }], startDateInput: [{
            type: ViewChild,
            args: ['startDateInput', { read: ElementRef, static: true }]
        }], iconCalendar: [{
            type: ViewChild,
            args: ['iconCalendar', { read: ElementRef, static: true }]
        }], calendarPicker: [{
            type: ViewChild,
            args: ['calendarPicker', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZGF0ZXBpY2tlci1yYW5nZS9wby1kYXRlcGlja2VyLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1kYXRlcGlja2VyLXJhbmdlL3BvLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUVWLFNBQVMsRUFNVCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRy9HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDK0J2QyxvQ0FBaUY7SUFBM0IsaU1BQWtCLGVBQUEsY0FBTyxDQUFBLElBQUM7SUFBQyxpQkFBVzs7OztJQWtCbEcsNkJBQXdDO0lBQ3RDLG1DQUFzRCxzQkFBQTtJQU9sRCw2TUFBaUIsZUFBQSwrQkFBd0IsQ0FBQSxJQUFDO0lBQzNDLGlCQUFjLEVBQUE7SUFFbkIsMEJBQWU7OztJQVBULGVBQXFCO0lBQXJCLDBDQUFxQiw4QkFBQSw4QkFBQSwyQkFBQTs7QURsRDNCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN4QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDekIs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bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb0RhdGVwaWNrZXJSYW5nZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1kYXRlcGlja2VyLXJhbmdlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRGF0ZXBpY2tlclJhbmdlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZGF0ZXBpY2tlci1yYW5nZS1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvRGF0ZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWRhdGUvcG8tZGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9NYXNrIH0gZnJvbSAnLi4vcG8taW5wdXQvcG8tbWFzayc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5jb25zdCBhcnJvd0xlZnRLZXkgPSAzNztcclxuY29uc3QgYXJyb3dSaWdodEtleSA9IDM5O1xyXG5jb25zdCBiYWNrc3BhY2VLZXkgPSA4O1xyXG5jb25zdCBwb0RhdGVwaWNrZXJSYW5nZURhdGVMZW5ndGhEZWZhdWx0ID0gMTA7XHJcblxyXG5jb25zdCBwb0NhbGVuZGFyQ29udGVudE9mZnNldCA9IDg7XHJcbmNvbnN0IHBvQ2FsZW5kYXJQb3NpdGlvbkRlZmF1bHQgPSAnYm90dG9tLWxlZnQnO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuY29uc3QgcHJvdmlkZXJzID0gW1xyXG4gIHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0RhdGVwaWNrZXJSYW5nZUNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9LFxyXG4gIFBvQ29udHJvbFBvc2l0aW9uU2VydmljZVxyXG5dO1xyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvRGF0ZXBpY2tlclJhbmdlQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGF0ZXBpY2tlci1yYW5nZS1iYXNpY1wiIHRpdGxlPVwiUE8gRGF0ZXBpY2tlciBSYW5nZSBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kYXRlcGlja2VyLXJhbmdlLWJhc2ljL3NhbXBsZS1wby1kYXRlcGlja2VyLXJhbmdlLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGF0ZXBpY2tlci1yYW5nZS1iYXNpYy9zYW1wbGUtcG8tZGF0ZXBpY2tlci1yYW5nZS1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1kYXRlcGlja2VyLXJhbmdlLWxhYnNcIiB0aXRsZT1cIlBPIERhdGVwaWNrZXIgUmFuZ2UgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kYXRlcGlja2VyLXJhbmdlLWxhYnMvc2FtcGxlLXBvLWRhdGVwaWNrZXItcmFuZ2UtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItcmFuZ2UtbGFicy9zYW1wbGUtcG8tZGF0ZXBpY2tlci1yYW5nZS1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRhdGVwaWNrZXItcmFuZ2UtdmFjYXRpb25zXCIgdGl0bGU9XCJQTyBEYXRlcGlja2VyIFJhbmdlIC0gVmFjYXRpb25zIFN1Z2dlc3Rpb25cIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGF0ZXBpY2tlci1yYW5nZS12YWNhdGlvbnMvc2FtcGxlLXBvLWRhdGVwaWNrZXItcmFuZ2UtdmFjYXRpb25zLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGF0ZXBpY2tlci1yYW5nZS12YWNhdGlvbnMvc2FtcGxlLXBvLWRhdGVwaWNrZXItcmFuZ2UtdmFjYXRpb25zLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRhdGVwaWNrZXItcmFuZ2UtdmFjYXRpb25zLXJlYWN0aXZlLWZvcm1cIiB0aXRsZT1cIlBPIERhdGVwaWNrZXIgUmFuZ2UgLSBWYWNhdGlvbnMgUmVhY3RpdmUgRm9ybVwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kYXRlcGlja2VyLXJhbmdlLXZhY2F0aW9ucy1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1kYXRlcGlja2VyLXJhbmdlLXZhY2F0aW9ucy1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5odG1sXCI+XHJcbiAqICA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItcmFuZ2UtdmFjYXRpb25zLXJlYWN0aXZlLWZvcm0vc2FtcGxlLXBvLWRhdGVwaWNrZXItcmFuZ2UtdmFjYXRpb25zLXJlYWN0aXZlLWZvcm0uY29tcG9uZW50LnRzXCI+XHJcbiAqICA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZGF0ZXBpY2tlci1yYW5nZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVycyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnRcclxuICBleHRlbmRzIFBvRGF0ZXBpY2tlclJhbmdlQmFzZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlRmllbGQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkYXRlUmFuZ2VGaWVsZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdlbmREYXRlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBlbmREYXRlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc3RhcnREYXRlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBzdGFydERhdGVJbnB1dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpY29uQ2FsZW5kYXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpY29uQ2FsZW5kYXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXJQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2FsZW5kYXJQaWNrZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGlzQ2FsZW5kYXJWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgY2xpY2tMaXN0ZW5lcjtcclxuICBwcml2YXRlIGV2ZW50UmVzaXplTGlzdGVuZXI7XHJcbiAgcHJpdmF0ZSBwb0RhdGVwaWNrZXJSYW5nZUVsZW1lbnQ6IEVsZW1lbnRSZWY8YW55PjtcclxuICBwcml2YXRlIHBvTWFza09iamVjdDogUG9NYXNrO1xyXG5cclxuICBnZXQgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9BdXRvY29tcGxldGUgPyAnb2ZmJyA6ICdvbic7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlQ2xlYW5lcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNsZWFuICYmICh0aGlzLnN0YXJ0RGF0ZUlucHV0VmFsdWUgfHwgdGhpcy5lbmREYXRlSW5wdXRWYWx1ZSkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5kRGF0ZUlucHV0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdlbmQtZGF0ZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5kRGF0ZUlucHV0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVuZERhdGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICE9PSAnJyAmJiB0aGlzLmhhc0ludmFsaWRDbGFzcygpID8gdGhpcy5lcnJvck1lc3NhZ2UgOiAnJztcclxuICB9XHJcblxyXG4gIGdldCBpc0RhdGVSYW5nZUlucHV0VW5jb21wbGV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmVuZERhdGVJbnB1dFZhbHVlLmxlbmd0aCA8IHBvRGF0ZXBpY2tlclJhbmdlRGF0ZUxlbmd0aERlZmF1bHQgJiZcclxuICAgICAgdGhpcy5zdGFydERhdGVJbnB1dFZhbHVlLmxlbmd0aCA8IHBvRGF0ZXBpY2tlclJhbmdlRGF0ZUxlbmd0aERlZmF1bHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXJ0eURhdGVSYW5nZUlucHV0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5kRGF0ZUlucHV0VmFsdWUubGVuZ3RoID4gMCB8fCB0aGlzLnN0YXJ0RGF0ZUlucHV0VmFsdWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGdldCBzdGFydERhdGVJbnB1dE5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc3RhcnQtZGF0ZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhcnREYXRlSW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhcnREYXRlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNvbnRyb2xQb3NpdGlvbjogUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwb0RhdGVTZXJ2aWNlOiBQb0RhdGVTZXJ2aWNlLFxyXG4gICAgcG9EYXRlcGlja2VyUmFuZ2VFbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcG9MYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwb0RhdGVTZXJ2aWNlLCBwb0xhbmd1YWdlU2VydmljZSk7XHJcbiAgICB0aGlzLnBvRGF0ZXBpY2tlclJhbmdlRWxlbWVudCA9IHBvRGF0ZXBpY2tlclJhbmdlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRLZXlDb2RlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICByZXR1cm4gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUYXJnZXRFbGVtZW50KGV2ZW50OiBhbnkpIHtcclxuICAgIHJldHVybiBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1ZhbGlkS2V5KGtleUNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0ga2V5Q29kZSA+PSA0OCAmJiBrZXlDb2RlIDw9IDU3O1xyXG4gICAgY29uc3QgaXNOdW1lcmljTnVtcGFkS2V5ID0ga2V5Q29kZSA+PSA5NiAmJiBrZXlDb2RlIDw9IDEwNTtcclxuXHJcbiAgICByZXR1cm4gaXNOdW1lcmljS2V5IHx8IGlzTnVtZXJpY051bXBhZEtleTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIENsYXNzZSBkZSBtw6FzY2FyYVxyXG4gICAgdGhpcy5wb01hc2tPYmplY3QgPSB0aGlzLmJ1aWxkTWFzaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSB8fCBjaGFuZ2VzLm1heERhdGUpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZU1vZGVsKHRoaXMuZGF0ZVJhbmdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5yZXNldERhdGVSYW5nZUlucHV0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5kYXRlUmFuZ2UgPSB7IHN0YXJ0OiAnJywgZW5kOiAnJyB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2NyZWVuQnlNb2RlbCh0aGlzLmRhdGVSYW5nZSk7XHJcbiAgICB0aGlzLnVwZGF0ZU1vZGVsKHRoaXMuZGF0ZVJhbmdlKTtcclxuICB9XHJcblxyXG4gIGV2ZW50T25DbGljaygkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5wb01hc2tPYmplY3QuY2xpY2soJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBhdHJpYnVpIGZvY28gYW8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gdGVyIGEgaW5zdMOibmNpYSBkbyBjb21wb25lbnRlIG5vIERPTSwgcG9kZW5kbyBzZXIgdXRpbGl6YWRvIG8gVmlld0NoaWxkIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaW1wb3J0IHsgUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGRhdGVwaWNrZXJSYW5nZTogUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c0RhdGVwaWNrZXJSYW5nZSgpIHtcclxuICAgKiAgIHRoaXMuZGF0ZXBpY2tlclJhbmdlLmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc3RhcnREYXRlSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkTW9kZWw/LigpO1xyXG4gICAgY29uc3QgaXNTdGFydERhdGVUYXJnZXRFdmVudCA9IGV2ZW50LnRhcmdldC5uYW1lID09PSB0aGlzLnN0YXJ0RGF0ZUlucHV0TmFtZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZU1vZGVsQnlTY3JlZW4oaXNTdGFydERhdGVUYXJnZXRFdmVudCk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVGb2N1c0Zyb21EYXRlUGlja2VyUmFuZ2VGaWVsZCgpO1xyXG4gIH1cclxuXHJcbiAgb25DYWxlbmRhckNoYW5nZSh7IHN0YXJ0LCBlbmQgfSkge1xyXG4gICAgY29uc3QgaXNTdGFydERhdGVUYXJnZXRFdmVudCA9IHN0YXJ0ICYmICFlbmQ7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTY3JlZW5CeU1vZGVsKHsgc3RhcnQ6IHN0YXJ0IHx8ICcnLCBlbmQ6IGVuZCB8fCAnJyB9KTtcclxuICAgIHRoaXMudXBkYXRlTW9kZWxCeVNjcmVlbihpc1N0YXJ0RGF0ZVRhcmdldEV2ZW50LCBzdGFydCB8fCAnJywgZW5kIHx8ICcnKTtcclxuXHJcbiAgICBpZiAoc3RhcnQgJiYgZW5kKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNDYWxlbmRhclZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmFwcGx5Rm9jdXNPbkRhdGVQaWNrZXJSYW5nZUZpZWxkKCk7XHJcbiAgICB0aGlzLnBvTWFza09iamVjdC5yZXNldFBvc2l0aW9ucyhldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbktleWRvd24oZXZlbnQ/OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1NldEZvY3VzT25CYWNrc3BhY2UoZXZlbnQpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc2V0Rm9jdXNPbkJhY2tzcGFjZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wb01hc2tPYmplY3Qua2V5ZG93bihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc1N0YXJ0RGF0ZVRhcmdldEV2ZW50ID0gZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMuc3RhcnREYXRlSW5wdXROYW1lO1xyXG5cclxuICAgIHRoaXMuc2V0Rm9jdXMoZXZlbnQpO1xyXG4gICAgdGhpcy5wb01hc2tPYmplY3Qua2V5dXAoZXZlbnQpO1xyXG4gICAgdGhpcy51cGRhdGVNb2RlbFdoZW5Db21wbGV0ZShpc1N0YXJ0RGF0ZVRhcmdldEV2ZW50LCB0aGlzLnN0YXJ0RGF0ZUlucHV0VmFsdWUsIHRoaXMuZW5kRGF0ZUlucHV0VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXREYXRlUmFuZ2VJbnB1dFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLmlzU3RhcnREYXRlUmFuZ2VJbnB1dFZhbGlkID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNEYXRlUmFuZ2VJbnB1dEZvcm1hdFZhbGlkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNhbGVuZGFyKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0NhbGVuZGFyVmlzaWJsZSA9ICF0aGlzLmlzQ2FsZW5kYXJWaXNpYmxlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDYWxlbmRhclZpc2libGUpIHtcclxuICAgICAgdGhpcy5zZXRDYWxlbmRhclBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbkJ5TW9kZWwobW9kZWw6IFBvRGF0ZXBpY2tlclJhbmdlKSB7XHJcbiAgICBjb25zdCBkYXRlUmFuZ2UgPSB7IHN0YXJ0OiBtb2RlbC5zdGFydCBhcyBzdHJpbmcsIGVuZDogbW9kZWwuZW5kIGFzIHN0cmluZyB9O1xyXG4gICAgY29uc3QgaXNTdGFydERhdGVWYWxpZCA9IHRoaXMucG9EYXRlU2VydmljZS5pc0RhdGVSYW5nZVZhbGlkKGRhdGVSYW5nZS5lbmQsIGRhdGVSYW5nZS5zdGFydCk7XHJcbiAgICBjb25zdCBpc0RhdGVWYWxpZCA9IGRhdGUgPT4gIXRoaXMuZGF0ZUZvcm1hdEZhaWxlZChkYXRlKSAmJiBpc1N0YXJ0RGF0ZVZhbGlkO1xyXG5cclxuICAgIGNvbnN0IGVuZERhdGVGb3JtYXRlZCA9IGlzRGF0ZVZhbGlkKGRhdGVSYW5nZS5lbmQpID8gdGhpcy5mb3JtYXRNb2RlbFRvU2NyZWVuKGRhdGVSYW5nZS5lbmQpIDogJyc7XHJcbiAgICBjb25zdCBzdGFydERhdGVGb3JtYXRlZCA9IGlzRGF0ZVZhbGlkKGRhdGVSYW5nZS5zdGFydCkgPyB0aGlzLmZvcm1hdE1vZGVsVG9TY3JlZW4oZGF0ZVJhbmdlLnN0YXJ0KSA6ICcnO1xyXG5cclxuICAgIHRoaXMuZW5kRGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBlbmREYXRlRm9ybWF0ZWQ7XHJcbiAgICB0aGlzLnN0YXJ0RGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBzdGFydERhdGVGb3JtYXRlZDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUZvY3VzT25EYXRlUGlja2VyUmFuZ2VGaWVsZCgpIHtcclxuICAgIHRoaXMuZGF0ZVJhbmdlRmllbGQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwby1kYXRlcGlja2VyLXJhbmdlLWZpZWxkLWZvY3VzZWQnKTtcclxuICB9XHJcblxyXG4gIC8vIFJldG9ybmEgdW0gb2JqZXRvIGRvIHRpcG8gUG9NYXNrIGNvbSBhIG1hc2NhcmEgY29uZmlndXJhZGEuXHJcbiAgcHJpdmF0ZSBidWlsZE1hc2soKTogUG9NYXNrIHtcclxuICAgIGxldCBtYXNrID0gdGhpcy5mb3JtYXQudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICBtYXNrID0gbWFzay5yZXBsYWNlKC9ERC9nLCAnOTknKTtcclxuICAgIG1hc2sgPSBtYXNrLnJlcGxhY2UoL01NL2csICc5OScpO1xyXG4gICAgbWFzayA9IG1hc2sucmVwbGFjZSgvWVlZWS9nLCAnOTk5OScpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9NYXNrKG1hc2ssIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXREYXRlKGZvcm1hdDogc3RyaW5nLCBkYXk6IHN0cmluZyA9ICcnLCBtb250aDogc3RyaW5nID0gJycsIHllYXI6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGxldCBkYXRlRm9ybWF0dGVkID0gZm9ybWF0O1xyXG5cclxuICAgIGRheSA9IGRheSAmJiBkYXkuaW5jbHVkZXMoJ1QnKSA/IGRheS5zbGljZSgwLCAyKSA6IGRheTtcclxuXHJcbiAgICBkYXRlRm9ybWF0dGVkID0gZGF0ZUZvcm1hdHRlZC5yZXBsYWNlKCdkZCcsICgnMCcgKyBkYXkpLnNsaWNlKC0yKSk7XHJcbiAgICBkYXRlRm9ybWF0dGVkID0gZGF0ZUZvcm1hdHRlZC5yZXBsYWNlKCdtbScsICgnMCcgKyBtb250aCkuc2xpY2UoLTIpKTtcclxuICAgIGRhdGVGb3JtYXR0ZWQgPSBkYXRlRm9ybWF0dGVkLnJlcGxhY2UoJ3l5eXknLCBTdHJpbmcoeWVhcikpO1xyXG5cclxuICAgIHJldHVybiBkYXRlRm9ybWF0dGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRTY3JlZW5Ub01vZGVsKHZhbHVlOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSB2YWx1ZS5zcGxpdCgnLycpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZSA/IHRoaXMuZm9ybWF0RGF0ZSgneXl5eS1tbS1kZCcsIGRheSwgbW9udGgsIHllYXIpIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE1vZGVsVG9TY3JlZW4odmFsdWU6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IHZhbHVlLnNwbGl0KCctJyk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5mb3JtYXREYXRlKHRoaXMuZm9ybWF0LCBkYXksIG1vbnRoLCB5ZWFyKSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRlUmFuZ2VGb3JtYXRWYWxpZGF0aW9uKFxyXG4gICAgc3RhcnREYXRlOiBzdHJpbmcsXHJcbiAgICBlbmREYXRlOiBzdHJpbmcsXHJcbiAgICBpc1N0YXJ0RGF0ZVRhcmdldEV2ZW50OiBib29sZWFuXHJcbiAgKTogeyBpc1ZhbGlkOiBib29sZWFuOyBkYXRlUmFuZ2VNb2RlbDogUG9EYXRlcGlja2VyUmFuZ2UgfSB7XHJcbiAgICB0aGlzLnNldERhdGVSYW5nZUlucHV0VmFsaWRhdGlvbihzdGFydERhdGUsIGVuZERhdGUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNWYWxpZDpcclxuICAgICAgICB0aGlzLmlzRGF0ZVJhbmdlSW5wdXRGb3JtYXRWYWxpZCAmJiB0aGlzLmlzU3RhcnREYXRlUmFuZ2VJbnB1dFZhbGlkICYmIHRoaXMudmVyaWZ5VmFsaWREYXRlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSksXHJcbiAgICAgIGRhdGVSYW5nZU1vZGVsOiB0aGlzLmdldFZhbGlkYXRlZE1vZGVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgaXNTdGFydERhdGVUYXJnZXRFdmVudClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZhbGlkYXRlZE1vZGVsKHN0YXJ0RGF0ZTogc3RyaW5nLCBlbmREYXRlOiBzdHJpbmcsIGlzU3RhcnREYXRlVGFyZ2V0RXZlbnQ6IGJvb2xlYW4pOiBQb0RhdGVwaWNrZXJSYW5nZSB7XHJcbiAgICBjb25zdCBkYXRlUmFuZ2VNb2RlbCA9IHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH07XHJcblxyXG4gICAgZGF0ZVJhbmdlTW9kZWwuZW5kID1cclxuICAgICAgKGlzU3RhcnREYXRlVGFyZ2V0RXZlbnQgfHwgdGhpcy5pc1N0YXJ0RGF0ZVJhbmdlSW5wdXRWYWxpZCkgJiYgIXRoaXMuZGF0ZUZvcm1hdEZhaWxlZChlbmREYXRlKSA/IGVuZERhdGUgOiAnJztcclxuXHJcbiAgICBkYXRlUmFuZ2VNb2RlbC5zdGFydCA9XHJcbiAgICAgICghaXNTdGFydERhdGVUYXJnZXRFdmVudCB8fCB0aGlzLmlzU3RhcnREYXRlUmFuZ2VJbnB1dFZhbGlkKSAmJiAhdGhpcy5kYXRlRm9ybWF0RmFpbGVkKHN0YXJ0RGF0ZSlcclxuICAgICAgICA/IHN0YXJ0RGF0ZVxyXG4gICAgICAgIDogJyc7XHJcblxyXG4gICAgcmV0dXJuIGRhdGVSYW5nZU1vZGVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBdHRyQ2FsZW5kYXIoZWxlbWVudCkge1xyXG4gICAgY29uc3QgYXR0ckNhbGVuZGFyID0gJ2F0dHItY2FsZW5kYXInO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50Py5oYXNBdHRyaWJ1dGUoYXR0ckNhbGVuZGFyKSB8fCBlbGVtZW50Py5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoYXR0ckNhbGVuZGFyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzSW52YWxpZENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5wb0RhdGVwaWNrZXJSYW5nZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSAmJlxyXG4gICAgICB0aGlzLnBvRGF0ZXBpY2tlclJhbmdlRWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctZGlydHknKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLndhc0NsaWNrZWRPblBpY2tlcihldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50UmVzaXplTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5pc0NhbGVuZGFyVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0VxdWFsQmVmb3JlVmFsdWUoc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEYXRlUmFuZ2VJbnB1dEZvcm1hdFZhbGlkICYmIGVuZERhdGUgPT09IHRoaXMuZGF0ZVJhbmdlLmVuZCAmJiBzdGFydERhdGUgPT09IHRoaXMuZGF0ZVJhbmdlLnN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NldEZvY3VzT25CYWNrc3BhY2UoZXZlbnQ6IGFueSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMuZW5kRGF0ZUlucHV0TmFtZSAmJlxyXG4gICAgICB0aGlzLmVuZERhdGVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID09PSAwICYmXHJcbiAgICAgIHRoaXMuZW5kRGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID09PSAwICYmXHJcbiAgICAgIGV2ZW50LmtleUNvZGUgPT09IGJhY2tzcGFjZUtleVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TY3JvbGwgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodGhpcy5pc0NhbGVuZGFyVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xQb3NpdGlvbi5hZGp1c3RQb3NpdGlvbihwb0NhbGVuZGFyUG9zaXRpb25EZWZhdWx0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW92ZUZvY3VzRnJvbURhdGVQaWNrZXJSYW5nZUZpZWxkKCkge1xyXG4gICAgdGhpcy5kYXRlUmFuZ2VGaWVsZC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvLWRhdGVwaWNrZXItcmFuZ2UtZmllbGQtZm9jdXNlZCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREYXRlUmFuZ2VJbnB1dFZhbGlkYXRpb24oc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pc1N0YXJ0RGF0ZVJhbmdlSW5wdXRWYWxpZCA9IHRoaXMucG9EYXRlU2VydmljZS5pc0RhdGVSYW5nZVZhbGlkKGVuZERhdGUsIHN0YXJ0RGF0ZSk7XHJcblxyXG4gICAgdGhpcy5pc0RhdGVSYW5nZUlucHV0Rm9ybWF0VmFsaWQgPSAhdGhpcy5kYXRlRm9ybWF0RmFpbGVkKHN0YXJ0RGF0ZSkgJiYgIXRoaXMuZGF0ZUZvcm1hdEZhaWxlZChlbmREYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Rm9jdXMoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnQuZ2V0VGFyZ2V0RWxlbWVudChldmVudCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gUG9EYXRlcGlja2VyUmFuZ2VDb21wb25lbnQuZ2V0S2V5Q29kZShldmVudCk7XHJcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBpbnB1dEVsZW1lbnRbJ25hbWUnXTtcclxuXHJcbiAgICB0aGlzLnNldEZvY3VzT25BcnJvd0xlZnQoa2V5Q29kZSwgaW5wdXROYW1lKTtcclxuICAgIHRoaXMuc2V0Rm9jdXNPbkFycm93UmlnaHQoa2V5Q29kZSwgaW5wdXROYW1lLCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgdGhpcy5zZXRGb2N1c09uU3RhcnREYXRlQ29tcGxldGVkKGtleUNvZGUsIGlucHV0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZvY3VzQW5kUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmLCBzZWxlY3Rpb25SYW5nZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZvY3VzT25FbGVtZW50KGlucHV0RWxlbWVudCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblJhbmdlLCBzZWxlY3Rpb25SYW5nZSk7XHJcbiAgICAgIHRoaXMucG9NYXNrT2JqZWN0LmluaXRpYWxQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICB0aGlzLnBvTWFza09iamVjdC5maW5hbFBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9jdXNPbkVsZW1lbnQoaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICBpbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBpZiAodGhpcy5jbGlja0xpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50UmVzaXplTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5ldmVudFJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDYWxlbmRhclBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5jb250cm9sUG9zaXRpb24uc2V0RWxlbWVudHMoXHJcbiAgICAgIHRoaXMuY2FsZW5kYXJQaWNrZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgcG9DYWxlbmRhckNvbnRlbnRPZmZzZXQsXHJcbiAgICAgIHRoaXMuZGF0ZVJhbmdlRmllbGQsXHJcbiAgICAgIFsnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddLFxyXG4gICAgICBmYWxzZSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xQb3NpdGlvbi5hZGp1c3RQb3NpdGlvbihwb0NhbGVuZGFyUG9zaXRpb25EZWZhdWx0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Rm9jdXNPbkFycm93TGVmdChrZXlDb2RlOiBudW1iZXIsIGlucHV0TmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpc0N1cnNvckF0U3RhcnRPZklucHV0ID0gdGhpcy5lbmREYXRlSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gMDtcclxuXHJcbiAgICBpZiAoaW5wdXROYW1lID09PSB0aGlzLmVuZERhdGVJbnB1dE5hbWUgJiYgaXNDdXJzb3JBdFN0YXJ0T2ZJbnB1dCAmJiBrZXlDb2RlID09PSBhcnJvd0xlZnRLZXkpIHtcclxuICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSB0aGlzLnN0YXJ0RGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoO1xyXG4gICAgICB0aGlzLnNldEZvY3VzQW5kUG9zaXRpb24oaW5wdXRMZW5ndGgsIHRoaXMuc3RhcnREYXRlSW5wdXQsIGlucHV0TGVuZ3RoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Rm9jdXNPbkFycm93UmlnaHQoa2V5Q29kZTogbnVtYmVyLCBpbnB1dE5hbWU6IHN0cmluZywgaW5wdXRFbGVtZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlzQ3Vyc29yQXRFbmRPZklucHV0ID0gdGhpcy5zdGFydERhdGVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID09PSBpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoO1xyXG5cclxuICAgIGlmIChpbnB1dE5hbWUgPT09IHRoaXMuc3RhcnREYXRlSW5wdXROYW1lICYmIGlzQ3Vyc29yQXRFbmRPZklucHV0ICYmIGtleUNvZGUgPT09IGFycm93UmlnaHRLZXkpIHtcclxuICAgICAgdGhpcy5zZXRGb2N1c0FuZFBvc2l0aW9uKDAsIHRoaXMuZW5kRGF0ZUlucHV0LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Rm9jdXNPbkJhY2tzcGFjZSgpIHtcclxuICAgIGNvbnN0IGlucHV0TGVuZ3RoID0gdGhpcy5zdGFydERhdGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICB0aGlzLnN0YXJ0RGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnN0YXJ0RGF0ZUlucHV0VmFsdWUuc2xpY2UoMCwgLTEpO1xyXG4gICAgdGhpcy5zZXRGb2N1c0FuZFBvc2l0aW9uKGlucHV0TGVuZ3RoLCB0aGlzLnN0YXJ0RGF0ZUlucHV0LCBpbnB1dExlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZvY3VzT25TdGFydERhdGVDb21wbGV0ZWQoa2V5Q29kZTogbnVtYmVyLCBpbnB1dE5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgaXNMYXN0S2V5UHJlc3NlZCA9IHRoaXMuc3RhcnREYXRlSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gcG9EYXRlcGlja2VyUmFuZ2VEYXRlTGVuZ3RoRGVmYXVsdDtcclxuICAgIGNvbnN0IGlzTmV3RGF0ZUNvbXBsZXRlZCA9XHJcbiAgICAgIHRoaXMuc3RhcnREYXRlSW5wdXRWYWx1ZS5sZW5ndGggPT09IHBvRGF0ZXBpY2tlclJhbmdlRGF0ZUxlbmd0aERlZmF1bHQgJiYgaXNMYXN0S2V5UHJlc3NlZDtcclxuICAgIGNvbnN0IGlzVmFsaWRLZXkgPSBQb0RhdGVwaWNrZXJSYW5nZUNvbXBvbmVudC5pc1ZhbGlkS2V5KGtleUNvZGUpO1xyXG5cclxuICAgIGlmIChpbnB1dE5hbWUgPT09IHRoaXMuc3RhcnREYXRlSW5wdXROYW1lICYmIGlzTmV3RGF0ZUNvbXBsZXRlZCAmJiBpc1ZhbGlkS2V5KSB7XHJcbiAgICAgIHRoaXMuc2V0Rm9jdXNBbmRQb3NpdGlvbigwLCB0aGlzLmVuZERhdGVJbnB1dCwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZU1vZGVsV2hlbkNvbXBsZXRlKGlzU3RhcnREYXRlVGFyZ2V0RXZlbnQ6IGJvb2xlYW4sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgY29uc3QgZW5kRGF0ZUZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0U2NyZWVuVG9Nb2RlbChlbmREYXRlKTtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZUZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0U2NyZWVuVG9Nb2RlbChzdGFydERhdGUpO1xyXG4gICAgY29uc3QgZGF0ZUZvcm1hdFZhbGlkYXRpb24gPSB0aGlzLmdldERhdGVSYW5nZUZvcm1hdFZhbGlkYXRpb24oXHJcbiAgICAgIHN0YXJ0RGF0ZUZvcm1hdHRlZCxcclxuICAgICAgZW5kRGF0ZUZvcm1hdHRlZCxcclxuICAgICAgaXNTdGFydERhdGVUYXJnZXRFdmVudFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0VxdWFsQmVmb3JlVmFsdWUoc3RhcnREYXRlRm9ybWF0dGVkLCBlbmREYXRlRm9ybWF0dGVkKSkge1xyXG4gICAgICB0aGlzLnJlc2V0RGF0ZVJhbmdlSW5wdXRWYWxpZGF0aW9uKCk7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVNb2RlbCh0aGlzLmRhdGVSYW5nZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZUZvcm1hdFZhbGlkYXRpb24uaXNWYWxpZCkge1xyXG4gICAgICB0aGlzLmRhdGVSYW5nZSA9IHsgc3RhcnQ6IHN0YXJ0RGF0ZUZvcm1hdHRlZCwgZW5kOiBlbmREYXRlRm9ybWF0dGVkIH07XHJcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyAuLi50aGlzLmRhdGVSYW5nZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTW9kZWxCeVNjcmVlbihpc1N0YXJ0RGF0ZVRhcmdldEV2ZW50OiBib29sZWFuLCBzdGFydERhdGU/LCBlbmREYXRlPykge1xyXG4gICAgY29uc3QgZW5kRGF0ZUZvcm1hdHRlZCA9IGVuZERhdGUgfHwgdGhpcy5mb3JtYXRTY3JlZW5Ub01vZGVsKHRoaXMuZW5kRGF0ZUlucHV0VmFsdWUpO1xyXG4gICAgY29uc3Qgc3RhcnREYXRlRm9ybWF0dGVkID0gc3RhcnREYXRlIHx8IHRoaXMuZm9ybWF0U2NyZWVuVG9Nb2RlbCh0aGlzLnN0YXJ0RGF0ZUlucHV0VmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuaXNEYXRlUmFuZ2VJbnB1dFVuY29tcGxldGVkICYmIHRoaXMuaXNEaXJ0eURhdGVSYW5nZUlucHV0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFcXVhbEJlZm9yZVZhbHVlKHN0YXJ0RGF0ZUZvcm1hdHRlZCwgZW5kRGF0ZUZvcm1hdHRlZCkpIHtcclxuICAgICAgdGhpcy5yZXNldERhdGVSYW5nZUlucHV0VmFsaWRhdGlvbigpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlTW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZUZvcm1hdFZhbGlkYXRpb24gPSB0aGlzLmdldERhdGVSYW5nZUZvcm1hdFZhbGlkYXRpb24oXHJcbiAgICAgIHN0YXJ0RGF0ZUZvcm1hdHRlZCxcclxuICAgICAgZW5kRGF0ZUZvcm1hdHRlZCxcclxuICAgICAgaXNTdGFydERhdGVUYXJnZXRFdmVudFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZGF0ZUZvcm1hdFZhbGlkYXRpb24uaXNWYWxpZCkge1xyXG4gICAgICB0aGlzLmRhdGVSYW5nZSA9IHsgc3RhcnQ6IHN0YXJ0RGF0ZUZvcm1hdHRlZCwgZW5kOiBlbmREYXRlRm9ybWF0dGVkIH07XHJcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwodGhpcy5kYXRlUmFuZ2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyAuLi50aGlzLmRhdGVSYW5nZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRhdGVGb3JtYXRWYWxpZGF0aW9uLmlzVmFsaWQgJiYgdGhpcy52ZXJpZnlGb3JtYXR0ZWREYXRlcyhzdGFydERhdGVGb3JtYXR0ZWQsIGVuZERhdGVGb3JtYXR0ZWQpKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVJhbmdlID0geyAuLi5kYXRlRm9ybWF0VmFsaWRhdGlvbi5kYXRlUmFuZ2VNb2RlbCB9O1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKGRhdGVGb3JtYXRWYWxpZGF0aW9uLmRhdGVSYW5nZU1vZGVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Rm9ybWF0dGVkRGF0ZXMoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXN0YXJ0IHx8ICEhZW5kO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YXNDbGlja2VkT25QaWNrZXIoZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0NhbGVuZGFyVmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jYWxlbmRhclBpY2tlci5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgIXRoaXMuaWNvbkNhbGVuZGFyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAhdGhpcy5oYXNBdHRyQ2FsZW5kYXIoZXZlbnQudGFyZ2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaXNDYWxlbmRhclZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXJcclxuICBbY2xhc3MucG8tZGF0ZS1waWNrZXItY29udGFpbmVyLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbcC1oZWxwXT1cImhlbHBcIlxyXG4gIFtwLWxhYmVsXT1cImxhYmVsXCJcclxuICBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgI2RhdGVSYW5nZUZpZWxkXHJcbiAgICBjbGFzcz1cInBvLWRhdGVwaWNrZXItcmFuZ2UtZmllbGQgcG8taW5wdXRcIlxyXG4gICAgW2NsYXNzLnBvLWRhdGVwaWNrZXItcmFuZ2UtZmllbGQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1kYXRlcGlja2VyLXJhbmdlLXN0YXJ0LWRhdGVcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgI3N0YXJ0RGF0ZUlucHV0XHJcbiAgICAgICAgY2xhc3M9XCJwby1kYXRlcGlja2VyLXJhbmdlLWlucHV0XCJcclxuICAgICAgICBtYXhsZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuYW1lXT1cInN0YXJ0RGF0ZUlucHV0TmFtZVwiXHJcbiAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIlxyXG4gICAgICAgIChrZXl1cCk9XCJvbktleXVwKCRldmVudClcIlxyXG4gICAgICAgIChjbGljayk9XCJldmVudE9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tZGF0ZXBpY2tlci1yYW5nZS1zZXBhcmF0b3JcIj4tPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWRhdGVwaWNrZXItcmFuZ2UtZW5kLWRhdGVcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgI2VuZERhdGVJbnB1dFxyXG4gICAgICAgIGNsYXNzPVwicG8tZGF0ZXBpY2tlci1yYW5nZS1pbnB1dFwiXHJcbiAgICAgICAgbWF4bGVuZ3RoPVwiMTBcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbmFtZV09XCJlbmREYXRlSW5wdXROYW1lXCJcclxuICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgKGtleXVwKT1cIm9uS2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNsaWNrKT1cImV2ZW50T25DbGljaygkZXZlbnQpXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1kYXRlcGlja2VyLXJhbmdlLWljb25cIj5cclxuICAgICAgPHBvLWNsZWFuIGNsYXNzPVwicG8taWNvbi1pbnB1dFwiICpuZ0lmPVwiZW5hYmxlQ2xlYW5lclwiIChwLWNoYW5nZS1ldmVudCk9XCJjbGVhcigpXCI+PC9wby1jbGVhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1kYXRlcGlja2VyLXJhbmdlLWljb25cIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAjaWNvbkNhbGVuZGFyXHJcbiAgICAgICAgY2xhc3M9XCJwby1pY29uIHBvLWZpZWxkLWljb24gcG8taWNvbi1jYWxlbmRhciB7eyBkaXNhYmxlZCA/ICdwby1pY29uLWlucHV0LWRpc2FibGVkJyA6ICdwby1pY29uLWlucHV0JyB9fVwiXHJcbiAgICAgICAgW2NsYXNzLnBvLWNsaWNrYWJsZV09XCIhZGlzYWJsZWQgJiYgIXJlYWRvbmx5XCJcclxuICAgICAgICBbY2xhc3MucG8tZmllbGQtaWNvbi1kaXNhYmxlZF09XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUNhbGVuZGFyKClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbSBbcC1lcnJvci1wYXR0ZXJuXT1cImdldEVycm9yTWVzc2FnZVwiPjwvcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT5cclxuPC9wby1maWVsZC1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiaXNDYWxlbmRhclZpc2libGVcIj5cclxuICA8ZGl2ICNjYWxlbmRhclBpY2tlciBjbGFzcz1cInBvLWNhbGVuZGFyLXJhbmdlLXBpY2tlclwiPlxyXG4gICAgPHBvLWNhbGVuZGFyXHJcbiAgICAgIHAtbW9kZT1cInJhbmdlXCJcclxuICAgICAgW25nTW9kZWxdPVwiZGF0ZVJhbmdlXCJcclxuICAgICAgW3AtbWF4LWRhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgIFtwLW1pbi1kYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICBbcC1sb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DYWxlbmRhckNoYW5nZSgkZXZlbnQpXCJcclxuICAgID48L3BvLWNhbGVuZGFyPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19