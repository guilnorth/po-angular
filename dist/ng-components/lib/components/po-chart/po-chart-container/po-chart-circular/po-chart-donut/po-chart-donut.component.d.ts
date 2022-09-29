import { ChangeDetectorRef, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { PoChartCircularComponent } from '../po-chart-circular.component';
import * as i0 from "@angular/core";
export declare class PoChartDonutComponent extends PoChartCircularComponent implements OnChanges {
    private readonly poChartBlackColor;
    private readonly poChartWhiteColor;
    constructor(ngZone: NgZone, changeDetector: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    protected calculateCoordinates(height: number, startRadianAngle: number, endRadianAngle: number): string;
    protected getTooltipLabel(data: number, label?: string, tooltipLabel?: string): string;
    private applySeriesLabels;
    private calculateLabelCoordinates;
    private getInnerRadius;
    private getPercentValue;
    private getTextColor;
    private verifyDisplayLabels;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartDonutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartDonutComponent, "[po-chart-donut]", never, {}, {}, never, never, false>;
}