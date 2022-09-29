import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoCalendarBaseComponent } from './po-calendar-base.component';
import { PoDateService } from '../../services/po-date/po-date.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
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
export declare class PoCalendarComponent extends PoCalendarBaseComponent implements OnInit, OnChanges {
    private changeDetector;
    hoverValue: Date;
    constructor(changeDetector: ChangeDetectorRef, poDate: PoDateService, languageService: PoLanguageService);
    get isResponsive(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getActivateDate(partType: any): any;
    getValue(partType: any): any;
    onSelectDate(selectedDate: any, partType?: any): void;
    onHoverDate(date: any): void;
    onHeaderChange({ month, year }: {
        month: any;
        year: any;
    }, partType: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(func: any): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    writeValue(value: any): void;
    private getValidateStartDate;
    private getValueFromSelectedDate;
    private convertDateToISO;
    private convertDateFromIso;
    private updateModel;
    private writeDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoCalendarComponent, "po-calendar", never, {}, {}, never, never, false>;
}