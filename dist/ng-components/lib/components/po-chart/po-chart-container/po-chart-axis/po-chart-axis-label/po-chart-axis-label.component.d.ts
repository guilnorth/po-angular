import { PoChartType } from '../../../enums/po-chart-type.enum';
import { PoChartLabelCoordinates } from '../../../interfaces/po-chart-label-coordinates.interface';
import * as i0 from "@angular/core";
export declare class PoChartAxisLabelComponent {
    alignByTheCorners: boolean;
    axisXLabelCoordinates: Array<PoChartLabelCoordinates>;
    axisYLabelCoordinates: Array<PoChartLabelCoordinates>;
    type: PoChartType;
    constructor();
    trackBy(index: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartAxisLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartAxisLabelComponent, "[po-chart-axis-label]", never, { "alignByTheCorners": "p-align-by-the-corners"; "axisXLabelCoordinates": "p-axis-x-label-coordinates"; "axisYLabelCoordinates": "p-axis-y-label-coordinates"; "type": "p-type"; }, {}, never, never, false>;
}