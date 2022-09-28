import { ChangeDetectorRef, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { PoChartCircularComponent } from '../po-chart-circular.component';
import * as i0 from "@angular/core";
export declare class PoChartPieComponent extends PoChartCircularComponent implements OnChanges {
    constructor(ngZone: NgZone, changeDetector: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    protected calculateCoordinates(height: number, startRadianAngle: number, endRadianAngle: number): string;
    protected getTooltipLabel(data: number, label?: string, tooltipLabel?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartPieComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartPieComponent, "[po-chart-pie]", never, {}, {}, never, never, false>;
}
