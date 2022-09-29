import { AfterViewInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PoControlPositionService } from './../../../services/po-control-position/po-control-position.service';
import { PoCalendarComponent } from '../../po-calendar/po-calendar.component';
import { PoDatepickerBaseComponent } from './po-datepicker-base.component';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
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
export declare class PoDatepickerComponent extends PoDatepickerBaseComponent implements AfterViewInit, OnDestroy {
    private controlPosition;
    private renderer;
    calendar: PoCalendarComponent;
    dialogPicker: ElementRef;
    iconDatepicker: ElementRef;
    inputEl: ElementRef;
    /** Rótulo do campo. */
    label?: string;
    /** Texto de apoio do campo. */
    help?: string;
    el: ElementRef;
    hour: string;
    visible: boolean;
    eventListenerFunction: () => void;
    eventResizeListener: () => void;
    private clickListener;
    private readonly dateRegex;
    private readonly isoRegex;
    private timeoutChange;
    private valueBeforeChange;
    get autocomplete(): "on" | "off";
    constructor(controlPosition: PoControlPositionService, languageService: PoLanguageService, renderer: Renderer2, el: ElementRef);
    onKeyup($event: any): void;
    onKeydown($event?: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
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
    focus(): void;
    togglePicker(): void;
    dateSelected(): void;
    wasClickedOnPicker(event: any): void;
    hasInvalidClass(): boolean;
    getErrorPattern(): string;
    clear(): void;
    eventOnBlur($event: any): void;
    eventOnClick($event: any): void;
    formatToDate(value: Date): string;
    refreshValue(value: Date): void;
    writeValue(value: any): void;
    isValidDateIso(value: string): boolean;
    isValidExtendedIso(value: any): boolean;
    hasOverlayClass(element: any): any;
    verifyMobile(): RegExpMatchArray;
    private closeCalendar;
    private controlChangeEmitter;
    private hasAttrCalendar;
    private initializeListeners;
    private onScroll;
    private removeListeners;
    private setDialogPickerStyleDisplay;
    private setCalendarPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDatepickerComponent, "po-datepicker", never, { "label": "p-label"; "help": "p-help"; }, {}, never, never, false>;
}