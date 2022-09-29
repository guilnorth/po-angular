import { ChangeDetectorRef, DoCheck, ElementRef } from '@angular/core';
import { PoColorService } from '../../services/po-color/po-color.service';
import { PoGaugeBaseComponent } from './po-gauge-base.component';
import { PoGaugeSvgContainer } from './interfaces/po-gauge-svg-container.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoGaugeBaseComponent
 *
 * @example
 *
 * <example name="po-gauge-basic" title="PO Gauge Basic">
 *  <file name="sample-po-gauge-basic/sample-po-gauge-basic.component.html"> </file>
 *  <file name="sample-po-gauge-basic/sample-po-gauge-basic.component.ts"> </file>
 * </example>
 * <example name="po-gauge-labs" title="PO Gauge Labs">
 *  <file name="sample-po-gauge-labs/sample-po-gauge-labs.component.html"> </file>
 *  <file name="sample-po-gauge-labs/sample-po-gauge-labs.component.ts"> </file>
 * </example>
 * <example name="po-gauge-summary" title="PO Gauge Summary">
 *  <file name="sample-po-gauge-summary/sample-po-gauge-summary.component.html"> </file>
 *  <file name="sample-po-gauge-summary/sample-po-gauge-summary.component.ts"> </file>
 * </example>
 */
export declare class PoGaugeComponent extends PoGaugeBaseComponent implements DoCheck {
    protected colorService: PoColorService;
    private changeDetector;
    descriptionEl: ElementRef;
    legendEl: ElementRef;
    titleEl: ElementRef;
    svgEl: ElementRef;
    svgContainer: PoGaugeSvgContainer;
    private isLoaded;
    constructor(colorService: PoColorService, changeDetector: ChangeDetectorRef);
    private get hasElementRef();
    get hasRanges(): boolean;
    ngDoCheck(): void;
    protected svgContainerSize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoGaugeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoGaugeComponent, "po-gauge", never, {}, {}, never, never, false>;
}