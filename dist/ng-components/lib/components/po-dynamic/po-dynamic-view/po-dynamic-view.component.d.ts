import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { PoTimePipe } from '../../../pipes/po-time/po-time.pipe';
import { PoDynamicViewBaseComponent } from './po-dynamic-view-base.component';
import { PoDynamicViewService } from './po-dynamic-view.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoDynamicViewBaseComponent
 *
 * @example
 *
 * <example name="po-dynamic-view-basic" title="PO Dynamic View Basic">
 *  <file name="sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"> </file>
 *  <file name="sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-dynamic-view-employee" title="PO Dynamic View - Employee">
 *  <file name="sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"> </file>
 *  <file name="sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"> </file>
 * </example>
 *
 * <example name="po-dynamic-view-employee-on-load" title="PO Dynamic View - Employee on load">
 *  <file name="sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"> </file>
 *  <file name="sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"> </file>
 * </example>
 */
export declare class PoDynamicViewComponent extends PoDynamicViewBaseComponent implements OnChanges, OnInit {
    constructor(currencyPipe: CurrencyPipe, datePipe: DatePipe, decimalPipe: DecimalPipe, timePipe: PoTimePipe, titleCasePipe: TitleCasePipe, dynamicViewService: PoDynamicViewService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private getValuesAndFieldsFromLoad;
    private getVisibleFields;
    private setFieldOnLoad;
    private setFieldsOnLoad;
    private setValueOnLoad;
    private updateValuesAndFieldsOnLoad;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDynamicViewComponent, "po-dynamic-view", never, {}, {}, never, never, false>;
}
