import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatYear, isMobile, setYearFrom0To100 } from '../../../utils/util';
import { PoControlPositionService } from './../../../services/po-control-position/po-control-position.service';
import { PoDatepickerBaseComponent } from './po-datepicker-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-control-position/po-control-position.service";
import * as i2 from "../../../services/po-language/po-language.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i6 from "../po-field-container/po-field-container.component";
import * as i7 from "../po-clean/po-clean.component";
import * as i8 from "../../po-calendar/po-calendar.component";
const _c0 = ["calendar"];
const _c1 = ["dialogPicker"];
const _c2 = ["iconDatepicker"];
const _c3 = ["inp"];
function PoDatepickerComponent_po_clean_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 13);
    i0.ɵɵlistener("p-change-event", function PoDatepickerComponent_po_clean_5_Template_po_clean_p_change_event_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.clear()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-element-ref", ctx_r1.inputEl);
} }
function PoDatepickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
const poCalendarContentOffset = 8;
const poCalendarPositionDefault = 'bottom-left';
/**
 * @docsExtends PoDatepickerBaseComponent
 *
 * @example
 *
 * <example name="po-datepicker-basic" title="PO Datepicker Basic">
 *  <file name="sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"> </file>
 *  <file name="sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"> </file>
 *  <file name="sample-po-datepicker-basic/sample-po-datepicker-basic.component.po.ts"> </file>
 *  <file name="sample-po-datepicker-basic/sample-po-datepicker-basic.component.e2e-spec.ts"> </file>
 * </example>
 *
 * <example name="po-datepicker-labs" title="PO Datepicker Labs">
 *  <file name="sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"> </file>
 *  <file name="sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-datepicker-airfare" title="PO Datepicker - Airfare">
 *  <file name="sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"> </file>
 *  <file name="sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"> </file>
 * </example>
 *
 * <example name="po-datepicker-airfare-reactive-form" title="PO Datepicker - Airfare Reactive Form">
 *  <file name="sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"> </file>
 *  <file name="sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"> </file>
 * </example>
 */
export class PoDatepickerComponent extends PoDatepickerBaseComponent {
    constructor(controlPosition, languageService, renderer, el) {
        super(languageService);
        this.controlPosition = controlPosition;
        this.renderer = renderer;
        this.visible = false;
        this.dateRegex = new RegExp('^(?:[0-9])\\d{1}(?:[0-9])\\d{1}-' + '(?:0[1-9]|1[0-2])-' + '(?:0[1-9]|[12]\\d|3[01])$');
        this.isoRegex = new RegExp('^(?:[0-9])\\d{1}(?:[0-9])\\d{1}-' +
            '(?:0[1-9]|1[0-2])-' +
            '(?:0[1-9]|[12]\\d|3[01])' +
            'T(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:Z|-0[1-9]|-1\\d|-2[0-3]|' +
            '-00:?(?:0[1-9]|[0-5]\\d)|\\+[01]\\d|\\+2[0-3])' +
            '(?:|:?[0-5]\\d)$');
        this.onScroll = () => {
            this.controlPosition.adjustPosition(poCalendarPositionDefault);
        };
        this.el = el;
    }
    get autocomplete() {
        return this.noAutocomplete ? 'off' : 'on';
    }
    onKeyup($event) {
        if (this.readonly) {
            return;
        }
        this.objMask.keyup($event);
        // Controla a atualização do model, verificando se a data é valida
        if (this.objMask.valueToModel || this.objMask.valueToModel === '') {
            if (this.objMask.valueToModel.length >= 10) {
                this.controlModel(this.getDateFromString(this.inputEl.nativeElement.value));
                this.date = this.getDateFromString(this.inputEl.nativeElement.value);
            }
            else {
                this.date = undefined;
                this.controlModel(this.date);
            }
        }
        else {
            this.date = undefined;
        }
    }
    onKeydown($event) {
        if (this.readonly) {
            return;
        }
        this.objMask.keydown($event);
    }
    ngAfterViewInit() {
        this.setDialogPickerStyleDisplay('none');
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoDatepickerComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;
     *
     * focusDatepicker() {
     *   this.datepicker.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.inputEl.nativeElement.focus();
        }
    }
    togglePicker() {
        if (this.disabled || this.readonly) {
            return;
        }
        if (!this.visible) {
            this.setCalendarPosition();
            this.initializeListeners();
            this.visible = true;
        }
        else {
            this.inputEl.nativeElement.disabled = false;
            this.closeCalendar();
        }
    }
    dateSelected() {
        this.onTouchedModel?.();
        if (!this.verifyMobile()) {
            this.inputEl.nativeElement.focus();
        }
        this.inputEl.nativeElement.value = this.formatToDate(this.date);
        this.controlModel(this.date);
        this.controlChangeEmitter();
        this.closeCalendar();
    }
    // Esconde Picker quando for clicado fora
    wasClickedOnPicker(event) {
        if (!this.dialogPicker || !this.iconDatepicker) {
            return;
        }
        if ((!this.dialogPicker.nativeElement.contains(event.target) || this.hasOverlayClass(event.target)) &&
            !this.iconDatepicker.nativeElement.contains(event.target) &&
            !this.hasAttrCalendar(event.target)) {
            this.closeCalendar();
        }
    }
    hasInvalidClass() {
        return (this.el.nativeElement.classList.contains('ng-invalid') &&
            this.el.nativeElement.classList.contains('ng-dirty') &&
            this.inputEl.nativeElement.value !== '');
    }
    getErrorPattern() {
        return this.errorPattern !== '' && this.hasInvalidClass() ? this.errorPattern : '';
    }
    clear() {
        this.valueBeforeChange = this.formatToDate(this.date);
        this.date = undefined;
        this.controlModel(this.date);
        this.controlChangeEmitter();
    }
    eventOnBlur($event) {
        this.onTouchedModel?.();
        const date = this.inputEl.nativeElement.value;
        const newDate = date ? this.getDateFromString(date) : undefined;
        this.objMask.blur($event);
        this.onblur.emit();
        if (this.objMask.valueToModel) {
            if (this.objMask.valueToModel.length >= 10) {
                this.controlModel(newDate);
                this.date = newDate;
            }
            else {
                this.date = null;
                this.controlModel(this.date);
            }
        }
        else {
            this.date = undefined;
            this.callOnChange(this.date);
        }
        this.controlChangeEmitter();
    }
    eventOnClick($event) {
        if (this.verifyMobile()) {
            $event.target.blur();
            // abre o calendar quando clicar no input somente no mobile
            setTimeout(() => this.togglePicker(), 0);
        }
        else {
            // Atualiza a posição do cursor ao clicar
            this.objMask.click($event);
        }
    }
    formatToDate(value) {
        if (!value) {
            return undefined;
        }
        let dateFormatted = this.format;
        dateFormatted = dateFormatted.replace('dd', ('0' + value.getDate()).slice(-2));
        dateFormatted = dateFormatted.replace('mm', ('0' + (value.getMonth() + 1)).slice(-2));
        dateFormatted = dateFormatted.replace('yyyy', formatYear(value.getFullYear()));
        return dateFormatted;
    }
    refreshValue(value) {
        if (value) {
            this.inputEl.nativeElement.value = this.formatToDate(value);
        }
    }
    // Função implementada do ControlValueAccessor
    writeValue(value) {
        if (this.inputEl && value) {
            if (value instanceof Date) {
                const dateString = value.toString();
                this.hour =
                    'T' + dateString.substring(16, 24) + dateString.substring(28, 31) + ':' + dateString.substring(31, 33);
                this.date = value;
                this.inputEl.nativeElement.value = this.formatToDate(value);
            }
            else if (this.isValidDateIso(value) || this.isValidExtendedIso(value)) {
                if (this.isValidExtendedIso(value)) {
                    this.hour = value.substring(10, 25);
                }
                if (this.isoFormat === undefined) {
                    this.isExtendedISO = this.isValidExtendedIso(value);
                }
                const day = parseInt(value.substring(8, 10), 10);
                const month = parseInt(value.substring(5, 7), 10) - 1;
                const year = parseInt(value.substring(0, 4), 10);
                const dateTemp = new Date(year, month, day);
                setYearFrom0To100(dateTemp, year);
                this.date = dateTemp;
                this.inputEl.nativeElement.value = this.formatToDate(dateTemp);
            }
            else {
                this.inputEl.nativeElement.value = '';
                this.date = undefined;
            }
            this.controlModel(this.date);
        }
        else if (this.inputEl) {
            this.inputEl.nativeElement.value = '';
            this.date = undefined;
            this.callOnChange(this.date, false);
        }
        this.valueBeforeChange = this.formatToDate(this.date);
    }
    isValidDateIso(value) {
        return this.dateRegex.test(value);
    }
    isValidExtendedIso(value) {
        return this.isoRegex.test(value);
    }
    hasOverlayClass(element) {
        return element.classList.contains('po-datepicker-calendar-overlay');
    }
    /* istanbul ignore next */
    verifyMobile() {
        return isMobile();
    }
    closeCalendar() {
        this.visible = false;
        this.removeListeners();
        this.setDialogPickerStyleDisplay('none');
    }
    controlChangeEmitter() {
        const dateModelFormatted = this.formatToDate(this.date);
        if (dateModelFormatted !== this.valueBeforeChange) {
            this.valueBeforeChange = dateModelFormatted;
            clearTimeout(this.timeoutChange);
            this.timeoutChange = setTimeout(() => {
                this.onchange.emit(dateModelFormatted);
            }, 200);
        }
    }
    hasAttrCalendar(element) {
        const attrCalendar = 'attr-calendar';
        return ((element && element.hasAttribute(attrCalendar)) ||
            (element.parentElement && element.parentElement.hasAttribute(attrCalendar)));
    }
    initializeListeners() {
        this.clickListener = this.renderer.listen('document', 'click', (event) => {
            this.wasClickedOnPicker(event);
        });
        this.eventResizeListener = this.renderer.listen('window', 'resize', () => {
            this.closeCalendar();
        });
        window.addEventListener('scroll', this.onScroll, true);
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
    setDialogPickerStyleDisplay(value) {
        this.dialogPicker.nativeElement.style.display = value;
    }
    setCalendarPosition() {
        this.setDialogPickerStyleDisplay('block');
        this.controlPosition.setElements(this.dialogPicker.nativeElement, poCalendarContentOffset, this.inputEl, ['top-left', 'top-right', 'bottom-left', 'bottom-right'], false, true);
        this.controlPosition.adjustPosition(poCalendarPositionDefault);
    }
}
PoDatepickerComponent.ɵfac = function PoDatepickerComponent_Factory(t) { return new (t || PoDatepickerComponent)(i0.ɵɵdirectiveInject(i1.PoControlPositionService), i0.ɵɵdirectiveInject(i2.PoLanguageService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoDatepickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDatepickerComponent, selectors: [["po-datepicker"]], viewQuery: function PoDatepickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7, ElementRef);
        i0.ɵɵviewQuery(_c2, 7, ElementRef);
        i0.ɵɵviewQuery(_c3, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendar = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dialogPicker = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iconDatepicker = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
    } }, hostBindings: function PoDatepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keyup", function PoDatepickerComponent_keyup_HostBindingHandler($event) { return ctx.onKeyup($event); })("keydown", function PoDatepickerComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { label: ["p-label", "label"], help: ["p-help", "help"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoDatepickerComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoDatepickerComponent),
                multi: true
            },
            PoControlPositionService
        ]), i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 26, consts: [[3, "p-help", "p-label", "p-optional"], [1, "po-field-container-content"], ["type", "text", 1, "po-input", "po-datepicker", 3, "ngClass", "autocomplete", "disabled", "placeholder", "readonly", "required", "blur", "click"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-element-ref", "p-change-event", 4, "ngIf"], [1, "po-icon", "po-field-icon", "po-icon-calendar", "po-icon-input", 3, "click"], ["iconDatepicker", ""], ["dialogPicker", ""], ["class", "po-datepicker-calendar-overlay", 4, "ngIf"], [3, "ngModel", "p-max-date", "p-min-date", "p-locale", "ngModelChange", "p-change"], ["calendar", ""], [3, "p-error-pattern"], [1, "po-icon-input", 3, "p-element-ref", "p-change-event"], [1, "po-datepicker-calendar-overlay"]], template: function PoDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "input", 2, 3);
        i0.ɵɵlistener("blur", function PoDatepickerComponent_Template_input_blur_2_listener($event) { return ctx.eventOnBlur($event); })("click", function PoDatepickerComponent_Template_input_click_2_listener($event) { return ctx.eventOnClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, PoDatepickerComponent_po_clean_5_Template, 1, 1, "po-clean", 5);
        i0.ɵɵelementStart(6, "span", 6, 7);
        i0.ɵɵlistener("click", function PoDatepickerComponent_Template_span_click_6_listener() { return ctx.togglePicker(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "div", null, 8);
        i0.ɵɵtemplate(10, PoDatepickerComponent_div_10_Template, 1, 0, "div", 9);
        i0.ɵɵelementStart(11, "po-calendar", 10, 11);
        i0.ɵɵlistener("ngModelChange", function PoDatepickerComponent_Template_po_calendar_ngModelChange_11_listener($event) { return ctx.date = $event; })("p-change", function PoDatepickerComponent_Template_po_calendar_p_change_11_listener() { return ctx.dateSelected(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(13, "po-field-container-bottom", 12);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.clean && _r0.value ? "po-input-double-icon-right" : "po-input-icon-right")("autocomplete", ctx.autocomplete)("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("readonly", ctx.readonly)("required", ctx.required);
        i0.ɵɵattribute("name", ctx.name)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled && !ctx.readonly);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-field-icon", !ctx.disabled && !ctx.readonly)("po-field-icon-disabled", ctx.disabled || ctx.readonly);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("po-datepicker-popup-calendar", !ctx.verifyMobile());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.verifyMobile());
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-datepicker-calendar-mobile", ctx.verifyMobile());
        i0.ɵɵproperty("ngModel", ctx.date)("p-max-date", ctx.maxDate)("p-min-date", ctx.minDate)("p-locale", ctx.locale);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-error-pattern", ctx.getErrorPattern());
    } }, dependencies: [i3.NgClass, i3.NgIf, i4.NgControlStatus, i4.NgModel, i5.PoFieldContainerBottomComponent, i6.PoFieldContainerComponent, i7.PoCleanComponent, i8.PoCalendarComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDatepickerComponent, [{
        type: Component,
        args: [{ selector: 'po-datepicker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoDatepickerComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoDatepickerComponent),
                        multi: true
                    },
                    PoControlPositionService
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <input\r\n      #inp\r\n      class=\"po-input po-datepicker\"\r\n      [ngClass]=\"clean && inp.value ? 'po-input-double-icon-right' : 'po-input-icon-right'\"\r\n      type=\"text\"\r\n      [attr.name]=\"name\"\r\n      [attr.aria-label]=\"label\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [readonly]=\"readonly\"\r\n      [required]=\"required\"\r\n      (blur)=\"eventOnBlur($event)\"\r\n      (click)=\"eventOnClick($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled && !readonly\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"clear()\"\r\n      >\r\n      </po-clean>\r\n\r\n      <span\r\n        #iconDatepicker\r\n        class=\"po-icon po-field-icon po-icon-calendar po-icon-input\"\r\n        [class.po-field-icon]=\"!disabled && !readonly\"\r\n        [class.po-field-icon-disabled]=\"disabled || readonly\"\r\n        (click)=\"togglePicker()\"\r\n      >\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div #dialogPicker [class.po-datepicker-popup-calendar]=\"!verifyMobile()\">\r\n    <div *ngIf=\"verifyMobile()\" class=\"po-datepicker-calendar-overlay\"></div>\r\n    <po-calendar\r\n      [class.po-datepicker-calendar-mobile]=\"verifyMobile()\"\r\n      #calendar\r\n      [(ngModel)]=\"date\"\r\n      [p-max-date]=\"maxDate\"\r\n      [p-min-date]=\"minDate\"\r\n      [p-locale]=\"locale\"\r\n      (p-change)=\"dateSelected()\"\r\n    >\r\n    </po-calendar>\r\n  </div>\r\n\r\n  <po-field-container-bottom [p-error-pattern]=\"getErrorPattern()\"></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i1.PoControlPositionService }, { type: i2.PoLanguageService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { calendar: [{
            type: ViewChild,
            args: ['calendar', { static: true }]
        }], dialogPicker: [{
            type: ViewChild,
            args: ['dialogPicker', { read: ElementRef, static: true }]
        }], iconDatepicker: [{
            type: ViewChild,
            args: ['iconDatepicker', { read: ElementRef, static: true }]
        }], inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: true }]
        }], label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], onKeyup: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZGF0ZXBpY2tlci9wby1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1kYXRlcGlja2VyL3BvLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUcvRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ0NyRSxvQ0FLQztJQURDLDJMQUFrQixlQUFBLGNBQU8sQ0FBQSxJQUFDO0lBRTVCLGlCQUFXOzs7SUFIVCw4Q0FBeUI7OztJQWlCN0IsMEJBQXlFOztBRGxCN0UsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7QUFDbEMsTUFBTSx5QkFBeUIsR0FBRyxhQUFhLENBQUM7QUFFaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBbUJILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7SUFzQ2xFLFlBQ1UsZUFBeUMsRUFDakQsZUFBa0MsRUFDMUIs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Q3pCLG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNOzRKQUdOLFFBQVE7a0JBQWhELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN3QixZQUFZO2tCQUExRSxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNJLGNBQWM7a0JBQTlFLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDVCxPQUFPO2tCQUE1RCxTQUFTO21CQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUdsQyxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHQyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUF1Q2YsT0FBTztrQkFETixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQXNCakMsU0FBUztrQkFEUixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGZvcm1hdFllYXIsIGlzTW9iaWxlLCBzZXRZZWFyRnJvbTBUbzEwMCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0NvbnRyb2xQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWNvbnRyb2wtcG9zaXRpb24vcG8tY29udHJvbC1wb3NpdGlvbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wby1jYWxlbmRhci9wby1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0RhdGVwaWNrZXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1kYXRlcGlja2VyLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHBvQ2FsZW5kYXJDb250ZW50T2Zmc2V0ID0gODtcclxuY29uc3QgcG9DYWxlbmRhclBvc2l0aW9uRGVmYXVsdCA9ICdib3R0b20tbGVmdCc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvRGF0ZXBpY2tlckJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRhdGVwaWNrZXItYmFzaWNcIiB0aXRsZT1cIlBPIERhdGVwaWNrZXIgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGF0ZXBpY2tlci1iYXNpYy9zYW1wbGUtcG8tZGF0ZXBpY2tlci1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItYmFzaWMvc2FtcGxlLXBvLWRhdGVwaWNrZXItYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGF0ZXBpY2tlci1iYXNpYy9zYW1wbGUtcG8tZGF0ZXBpY2tlci1iYXNpYy5jb21wb25lbnQucG8udHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kYXRlcGlja2VyLWJhc2ljL3NhbXBsZS1wby1kYXRlcGlja2VyLWJhc2ljLmNvbXBvbmVudC5lMmUtc3BlYy50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRhdGVwaWNrZXItbGFic1wiIHRpdGxlPVwiUE8gRGF0ZXBpY2tlciBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItbGFicy9zYW1wbGUtcG8tZGF0ZXBpY2tlci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGF0ZXBpY2tlci1sYWJzL3NhbXBsZS1wby1kYXRlcGlja2VyLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGF0ZXBpY2tlci1haXJmYXJlXCIgdGl0bGU9XCJQTyBEYXRlcGlja2VyIC0gQWlyZmFyZVwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kYXRlcGlja2VyLWFpcmZhcmUvc2FtcGxlLXBvLWRhdGVwaWNrZXItYWlyZmFyZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItYWlyZmFyZS9zYW1wbGUtcG8tZGF0ZXBpY2tlci1haXJmYXJlLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRhdGVwaWNrZXItYWlyZmFyZS1yZWFjdGl2ZS1mb3JtXCIgdGl0bGU9XCJQTyBEYXRlcGlja2VyIC0gQWlyZmFyZSBSZWFjdGl2ZSBGb3JtXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItYWlyZmFyZS1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1kYXRlcGlja2VyLWFpcmZhcmUtcmVhY3RpdmUtZm9ybS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRhdGVwaWNrZXItYWlyZmFyZS1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1kYXRlcGlja2VyLWFpcmZhcmUtcmVhY3RpdmUtZm9ybS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWRhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvRGF0ZXBpY2tlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0RhdGVwaWNrZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFBvQ29udHJvbFBvc2l0aW9uU2VydmljZVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRGF0ZXBpY2tlckNvbXBvbmVudCBleHRlbmRzIFBvRGF0ZXBpY2tlckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFyJywgeyBzdGF0aWM6IHRydWUgfSkgY2FsZW5kYXI6IFBvQ2FsZW5kYXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZGlhbG9nUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgZGlhbG9nUGlja2VyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ljb25EYXRlcGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgaWNvbkRhdGVwaWNrZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIFLDs3R1bG8gZG8gY2FtcG8uICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUZXh0byBkZSBhcG9pbyBkbyBjYW1wby4gKi9cclxuICBASW5wdXQoJ3AtaGVscCcpIGhlbHA/OiBzdHJpbmc7XHJcblxyXG4gIGVsOiBFbGVtZW50UmVmO1xyXG4gIGhvdXI6IHN0cmluZztcclxuICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGV2ZW50TGlzdGVuZXJGdW5jdGlvbjogKCkgPT4gdm9pZDtcclxuICBldmVudFJlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIGNsaWNrTGlzdGVuZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgJ14oPzpbMC05XSlcXFxcZHsxfSg/OlswLTldKVxcXFxkezF9LScgKyAnKD86MFsxLTldfDFbMC0yXSktJyArICcoPzowWzEtOV18WzEyXVxcXFxkfDNbMDFdKSQnXHJcbiAgKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGlzb1JlZ2V4ID0gbmV3IFJlZ0V4cChcclxuICAgICdeKD86WzAtOV0pXFxcXGR7MX0oPzpbMC05XSlcXFxcZHsxfS0nICtcclxuICAgICAgJyg/OjBbMS05XXwxWzAtMl0pLScgK1xyXG4gICAgICAnKD86MFsxLTldfFsxMl1cXFxcZHwzWzAxXSknICtcclxuICAgICAgJ1QoPzpbMDFdXFxcXGR8MlswLTNdKTpbMC01XVxcXFxkOlswLTVdXFxcXGQoPzpafC0wWzEtOV18LTFcXFxcZHwtMlswLTNdfCcgK1xyXG4gICAgICAnLTAwOj8oPzowWzEtOV18WzAtNV1cXFxcZCl8XFxcXCtbMDFdXFxcXGR8XFxcXCsyWzAtM10pJyArXHJcbiAgICAgICcoPzp8Oj9bMC01XVxcXFxkKSQnXHJcbiAgKTtcclxuICBwcml2YXRlIHRpbWVvdXRDaGFuZ2U6IGFueTtcclxuICBwcml2YXRlIHZhbHVlQmVmb3JlQ2hhbmdlOiBzdHJpbmc7XHJcblxyXG4gIGdldCBhdXRvY29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub0F1dG9jb21wbGV0ZSA/ICdvZmYnIDogJ29uJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb250cm9sUG9zaXRpb246IFBvQ29udHJvbFBvc2l0aW9uU2VydmljZSxcclxuICAgIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbDogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIobGFuZ3VhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcclxuICBvbktleXVwKCRldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5yZWFkb25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vYmpNYXNrLmtleXVwKCRldmVudCk7XHJcbiAgICAvLyBDb250cm9sYSBhIGF0dWFsaXphw6fDo28gZG8gbW9kZWwsIHZlcmlmaWNhbmRvIHNlIGEgZGF0YSDDqSB2YWxpZGFcclxuICAgIGlmICh0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsIHx8IHRoaXMub2JqTWFzay52YWx1ZVRvTW9kZWwgPT09ICcnKSB7XHJcbiAgICAgIGlmICh0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbE1vZGVsKHRoaXMuZ2V0RGF0ZUZyb21TdHJpbmcodGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUpKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLmdldERhdGVGcm9tU3RyaW5nKHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jb250cm9sTW9kZWwodGhpcy5kYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duKCRldmVudD86IGFueSkge1xyXG4gICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub2JqTWFzay5rZXlkb3duKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNldERpYWxvZ1BpY2tlclN0eWxlRGlzcGxheSgnbm9uZScpO1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBhdHJpYnVpIGZvY28gYW8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gdGVyIGEgaW5zdMOibmNpYSBkbyBjb21wb25lbnRlIG5vIERPTSwgcG9kZW5kbyBzZXIgdXRpbGl6YWRvIG8gVmlld0NoaWxkIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaW1wb3J0IHsgUG9EYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiBAVmlld0NoaWxkKFBvRGF0ZXBpY2tlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgZGF0ZXBpY2tlcjogUG9EYXRlcGlja2VyQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNEYXRlcGlja2VyKCkge1xyXG4gICAqICAgdGhpcy5kYXRlcGlja2VyLmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQaWNrZXIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnNldENhbGVuZGFyUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRhdGVTZWxlY3RlZCgpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkTW9kZWw/LigpO1xyXG4gICAgaWYgKCF0aGlzLnZlcmlmeU1vYmlsZSgpKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmZvcm1hdFRvRGF0ZSh0aGlzLmRhdGUpO1xyXG4gICAgdGhpcy5jb250cm9sTW9kZWwodGhpcy5kYXRlKTtcclxuICAgIHRoaXMuY29udHJvbENoYW5nZUVtaXR0ZXIoKTtcclxuICAgIHRoaXMuY2xvc2VDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXNjb25kZSBQaWNrZXIgcXVhbmRvIGZvciBjbGljYWRvIGZvcmFcclxuICB3YXNDbGlja2VkT25QaWNrZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpYWxvZ1BpY2tlciB8fCAhdGhpcy5pY29uRGF0ZXBpY2tlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAoIXRoaXMuZGlhbG9nUGlja2VyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fCB0aGlzLmhhc092ZXJsYXlDbGFzcyhldmVudC50YXJnZXQpKSAmJlxyXG4gICAgICAhdGhpcy5pY29uRGF0ZXBpY2tlci5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgIXRoaXMuaGFzQXR0ckNhbGVuZGFyKGV2ZW50LnRhcmdldClcclxuICAgICkge1xyXG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc0ludmFsaWRDbGFzcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSAmJlxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1kaXJ0eScpICYmXHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlICE9PSAnJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yUGF0dGVybigpIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yUGF0dGVybiAhPT0gJycgJiYgdGhpcy5oYXNJbnZhbGlkQ2xhc3MoKSA/IHRoaXMuZXJyb3JQYXR0ZXJuIDogJyc7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMudmFsdWVCZWZvcmVDaGFuZ2UgPSB0aGlzLmZvcm1hdFRvRGF0ZSh0aGlzLmRhdGUpO1xyXG4gICAgdGhpcy5kYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb250cm9sTW9kZWwodGhpcy5kYXRlKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xDaGFuZ2VFbWl0dGVyKCk7XHJcbiAgfVxyXG5cclxuICBldmVudE9uQmx1cigkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vblRvdWNoZWRNb2RlbD8uKCk7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gZGF0ZSA/IHRoaXMuZ2V0RGF0ZUZyb21TdHJpbmcoZGF0ZSkgOiB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm9iak1hc2suYmx1cigkZXZlbnQpO1xyXG4gICAgdGhpcy5vbmJsdXIuZW1pdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsKSB7XHJcbiAgICAgIGlmICh0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbE1vZGVsKG5ld0RhdGUpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRyb2xNb2RlbCh0aGlzLmRhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHRoaXMuZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlRW1pdHRlcigpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRPbkNsaWNrKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMudmVyaWZ5TW9iaWxlKCkpIHtcclxuICAgICAgJGV2ZW50LnRhcmdldC5ibHVyKCk7XHJcblxyXG4gICAgICAvLyBhYnJlIG8gY2FsZW5kYXIgcXVhbmRvIGNsaWNhciBubyBpbnB1dCBzb21lbnRlIG5vIG1vYmlsZVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudG9nZ2xlUGlja2VyKCksIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQXR1YWxpemEgYSBwb3Npw6fDo28gZG8gY3Vyc29yIGFvIGNsaWNhclxyXG4gICAgICB0aGlzLm9iak1hc2suY2xpY2soJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdFRvRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRlRm9ybWF0dGVkID0gdGhpcy5mb3JtYXQ7XHJcblxyXG4gICAgZGF0ZUZvcm1hdHRlZCA9IGRhdGVGb3JtYXR0ZWQucmVwbGFjZSgnZGQnLCAoJzAnICsgdmFsdWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikpO1xyXG4gICAgZGF0ZUZvcm1hdHRlZCA9IGRhdGVGb3JtYXR0ZWQucmVwbGFjZSgnbW0nLCAoJzAnICsgKHZhbHVlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpKTtcclxuICAgIGRhdGVGb3JtYXR0ZWQgPSBkYXRlRm9ybWF0dGVkLnJlcGxhY2UoJ3l5eXknLCBmb3JtYXRZZWFyKHZhbHVlLmdldEZ1bGxZZWFyKCkpKTtcclxuXHJcbiAgICByZXR1cm4gZGF0ZUZvcm1hdHRlZDtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5mb3JtYXRUb0RhdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsICYmIHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmhvdXIgPVxyXG4gICAgICAgICAgJ1QnICsgZGF0ZVN0cmluZy5zdWJzdHJpbmcoMTYsIDI0KSArIGRhdGVTdHJpbmcuc3Vic3RyaW5nKDI4LCAzMSkgKyAnOicgKyBkYXRlU3RyaW5nLnN1YnN0cmluZygzMSwgMzMpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5mb3JtYXRUb0RhdGUodmFsdWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNWYWxpZERhdGVJc28odmFsdWUpIHx8IHRoaXMuaXNWYWxpZEV4dGVuZGVkSXNvKHZhbHVlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRFeHRlbmRlZElzbyh2YWx1ZSkpIHtcclxuICAgICAgICAgIHRoaXMuaG91ciA9IHZhbHVlLnN1YnN0cmluZygxMCwgMjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNvRm9ybWF0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuaXNFeHRlbmRlZElTTyA9IHRoaXMuaXNWYWxpZEV4dGVuZGVkSXNvKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZyg4LCAxMCksIDEwKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZyg1LCA3KSwgMTApIC0gMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKDAsIDQpLCAxMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVUZW1wID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XHJcblxyXG4gICAgICAgIHNldFllYXJGcm9tMFRvMTAwKGRhdGVUZW1wLCB5ZWFyKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVRlbXA7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmZvcm1hdFRvRGF0ZShkYXRlVGVtcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250cm9sTW9kZWwodGhpcy5kYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dEVsKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5jYWxsT25DaGFuZ2UodGhpcy5kYXRlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZUJlZm9yZUNoYW5nZSA9IHRoaXMuZm9ybWF0VG9EYXRlKHRoaXMuZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkRGF0ZUlzbyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlUmVnZXgudGVzdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkRXh0ZW5kZWRJc28odmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzb1JlZ2V4LnRlc3QodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaGFzT3ZlcmxheUNsYXNzKGVsZW1lbnQ6IGFueSkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwby1kYXRlcGlja2VyLWNhbGVuZGFyLW92ZXJsYXknKTtcclxuICB9XHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgdmVyaWZ5TW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIGlzTW9iaWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlQ2FsZW5kYXIoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnNldERpYWxvZ1BpY2tlclN0eWxlRGlzcGxheSgnbm9uZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb250cm9sQ2hhbmdlRW1pdHRlcigpIHtcclxuICAgIGNvbnN0IGRhdGVNb2RlbEZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0VG9EYXRlKHRoaXMuZGF0ZSk7XHJcblxyXG4gICAgaWYgKGRhdGVNb2RlbEZvcm1hdHRlZCAhPT0gdGhpcy52YWx1ZUJlZm9yZUNoYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbHVlQmVmb3JlQ2hhbmdlID0gZGF0ZU1vZGVsRm9ybWF0dGVkO1xyXG5cclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoYW5nZSk7XHJcbiAgICAgIHRoaXMudGltZW91dENoYW5nZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25jaGFuZ2UuZW1pdChkYXRlTW9kZWxGb3JtYXR0ZWQpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBdHRyQ2FsZW5kYXIoZWxlbWVudDogYW55KSB7XHJcbiAgICBjb25zdCBhdHRyQ2FsZW5kYXIgPSAnYXR0ci1jYWxlbmRhcic7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgKGVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0ckNhbGVuZGFyKSkgfHxcclxuICAgICAgKGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJDYWxlbmRhcikpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMud2FzQ2xpY2tlZE9uUGlja2VyKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TY3JvbGwgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLmNvbnRyb2xQb3NpdGlvbi5hZGp1c3RQb3NpdGlvbihwb0NhbGVuZGFyUG9zaXRpb25EZWZhdWx0KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGlmICh0aGlzLmNsaWNrTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5jbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZXZlbnRSZXNpemVMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmV2ZW50UmVzaXplTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERpYWxvZ1BpY2tlclN0eWxlRGlzcGxheSh2YWx1ZSkge1xyXG4gICAgdGhpcy5kaWFsb2dQaWNrZXIubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENhbGVuZGFyUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnNldERpYWxvZ1BpY2tlclN0eWxlRGlzcGxheSgnYmxvY2snKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xQb3NpdGlvbi5zZXRFbGVtZW50cyhcclxuICAgICAgdGhpcy5kaWFsb2dQaWNrZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgcG9DYWxlbmRhckNvbnRlbnRPZmZzZXQsXHJcbiAgICAgIHRoaXMuaW5wdXRFbCxcclxuICAgICAgWyd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0J10sXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udHJvbFBvc2l0aW9uLmFkanVzdFBvc2l0aW9uKHBvQ2FsZW5kYXJQb3NpdGlvbkRlZmF1bHQpO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tZmllbGQtY29udGFpbmVyIFtwLWhlbHBdPVwiaGVscFwiIFtwLWxhYmVsXT1cImxhYmVsXCIgW3Atb3B0aW9uYWxdPVwiIXJlcXVpcmVkICYmIG9wdGlvbmFsXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1jb250ZW50XCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucFxyXG4gICAgICBjbGFzcz1cInBvLWlucHV0IHBvLWRhdGVwaWNrZXJcIlxyXG4gICAgICBbbmdDbGFzc109XCJjbGVhbiAmJiBpbnAudmFsdWUgPyAncG8taW5wdXQtZG91YmxlLWljb24tcmlnaHQnIDogJ3BvLWlucHV0LWljb24tcmlnaHQnXCJcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiZGlzYWJsZWQgPyAnJyA6IHBsYWNlaG9sZGVyXCJcclxuICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgKGJsdXIpPVwiZXZlbnRPbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgIChjbGljayk9XCJldmVudE9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAvPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1yaWdodFwiPlxyXG4gICAgICA8cG8tY2xlYW5cclxuICAgICAgICBjbGFzcz1cInBvLWljb24taW5wdXRcIlxyXG4gICAgICAgICpuZ0lmPVwiY2xlYW4gJiYgIWRpc2FibGVkICYmICFyZWFkb25seVwiXHJcbiAgICAgICAgW3AtZWxlbWVudC1yZWZdPVwiaW5wdXRFbFwiXHJcbiAgICAgICAgKHAtY2hhbmdlLWV2ZW50KT1cImNsZWFyKClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tY2xlYW4+XHJcblxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICNpY29uRGF0ZXBpY2tlclxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbiBwby1maWVsZC1pY29uIHBvLWljb24tY2FsZW5kYXIgcG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgW2NsYXNzLnBvLWZpZWxkLWljb25dPVwiIWRpc2FibGVkICYmICFyZWFkb25seVwiXHJcbiAgICAgICAgW2NsYXNzLnBvLWZpZWxkLWljb24tZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxyXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVQaWNrZXIoKVwiXHJcbiAgICAgID5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgI2RpYWxvZ1BpY2tlciBbY2xhc3MucG8tZGF0ZXBpY2tlci1wb3B1cC1jYWxlbmRhcl09XCIhdmVyaWZ5TW9iaWxlKClcIj5cclxuICAgIDxkaXYgKm5nSWY9XCJ2ZXJpZnlNb2JpbGUoKVwiIGNsYXNzPVwicG8tZGF0ZXBpY2tlci1jYWxlbmRhci1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICA8cG8tY2FsZW5kYXJcclxuICAgICAgW2NsYXNzLnBvLWRhdGVwaWNrZXItY2FsZW5kYXItbW9iaWxlXT1cInZlcmlmeU1vYmlsZSgpXCJcclxuICAgICAgI2NhbGVuZGFyXHJcbiAgICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXHJcbiAgICAgIFtwLW1heC1kYXRlXT1cIm1heERhdGVcIlxyXG4gICAgICBbcC1taW4tZGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgW3AtbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgIChwLWNoYW5nZSk9XCJkYXRlU2VsZWN0ZWQoKVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLWNhbGVuZGFyPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbSBbcC1lcnJvci1wYXR0ZXJuXT1cImdldEVycm9yUGF0dGVybigpXCI+PC9wby1maWVsZC1jb250YWluZXItYm90dG9tPlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19