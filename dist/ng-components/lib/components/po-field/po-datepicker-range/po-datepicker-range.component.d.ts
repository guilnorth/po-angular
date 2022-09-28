import { ChangeDetectorRef, ElementRef, OnInit, AfterViewInit, Renderer2, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { PoControlPositionService } from './../../../services/po-control-position/po-control-position.service';
import { PoDatepickerRange } from './interfaces/po-datepicker-range.interface';
import { PoDatepickerRangeBaseComponent } from './po-datepicker-range-base.component';
import { PoDateService } from './../../../services/po-date/po-date.service';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
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
export declare class PoDatepickerRangeComponent extends PoDatepickerRangeBaseComponent implements AfterViewInit, OnInit, OnDestroy, OnChanges {
    private changeDetector;
    private controlPosition;
    private renderer;
    private cd;
    dateRangeField: ElementRef;
    endDateInput: ElementRef;
    startDateInput: ElementRef;
    iconCalendar: ElementRef;
    calendarPicker: ElementRef;
    isCalendarVisible: boolean;
    private clickListener;
    private eventResizeListener;
    private poDatepickerRangeElement;
    private poMaskObject;
    get autocomplete(): "on" | "off";
    get enableCleaner(): boolean;
    get endDateInputName(): string;
    get endDateInputValue(): string;
    get getErrorMessage(): string;
    get isDateRangeInputUncompleted(): boolean;
    get isDirtyDateRangeInput(): boolean;
    get startDateInputName(): string;
    get startDateInputValue(): string;
    constructor(changeDetector: ChangeDetectorRef, controlPosition: PoControlPositionService, renderer: Renderer2, cd: ChangeDetectorRef, poDateService: PoDateService, poDatepickerRangeElement: ElementRef, poLanguageService: PoLanguageService);
    static getKeyCode(event: KeyboardEvent): number;
    static getTargetElement(event: any): any;
    static isValidKey(keyCode: number): boolean;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    clear(): void;
    eventOnClick($event: any): void;
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
    focus(): void;
    onBlur(event: any): void;
    onCalendarChange({ start, end }: {
        start: any;
        end: any;
    }): void;
    onFocus(event: any): void;
    onKeydown(event?: any): void;
    onKeyup(event: any): void;
    resetDateRangeInputValidation(): void;
    toggleCalendar(): void;
    updateScreenByModel(model: PoDatepickerRange): void;
    private applyFocusOnDatePickerRangeField;
    private buildMask;
    private formatDate;
    private formatScreenToModel;
    private formatModelToScreen;
    private getDateRangeFormatValidation;
    private getValidatedModel;
    private hasAttrCalendar;
    private hasInvalidClass;
    private initializeListeners;
    private isEqualBeforeValue;
    private isSetFocusOnBackspace;
    private onScroll;
    private removeFocusFromDatePickerRangeField;
    private setDateRangeInputValidation;
    private setFocus;
    private setFocusAndPosition;
    private focusOnElement;
    private removeListeners;
    private setCalendarPosition;
    private setFocusOnArrowLeft;
    private setFocusOnArrowRight;
    private setFocusOnBackspace;
    private setFocusOnStartDateCompleted;
    private updateModelWhenComplete;
    private updateModelByScreen;
    private verifyFormattedDates;
    private wasClickedOnPicker;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDatepickerRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDatepickerRangeComponent, "po-datepicker-range", never, {}, {}, never, never, false>;
}
