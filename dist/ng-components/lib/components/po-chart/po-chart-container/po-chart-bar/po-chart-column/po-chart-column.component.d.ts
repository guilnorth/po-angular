import { PoChartBarBaseComponent } from '../po-chart-bar-base.component';
import { PoChartMathsService } from '../../../services/po-chart-maths.service';
import { PoChartContainerSize } from '../../../interfaces/po-chart-container-size.interface';
import { PoChartMinMaxValues } from '../../../interfaces/po-chart-min-max-values.interface';
import * as i0 from "@angular/core";
export declare class PoChartColumnComponent extends PoChartBarBaseComponent {
    protected mathsService: PoChartMathsService;
    readonly tooltipPosition = "top";
    constructor(mathsService: PoChartMathsService);
    protected barCoordinates(seriesIndex: number, serieItemDataIndex: number, containerSize: PoChartContainerSize, minMaxSeriesValues: PoChartMinMaxValues, serieValue: number): string;
    private calculateElementsMeasurements;
    private xCoordinates;
    private yCoordinates;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartColumnComponent, "[po-chart-column]", never, {}, {}, never, never, false>;
}