import { PoChartType } from '../enums/po-chart-type.enum';
import * as i0 from "@angular/core";
export declare class PoChartLegendComponent {
    type: PoChartType;
    private _series;
    set series(value: Array<any>);
    get series(): Array<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartLegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartLegendComponent, "po-chart-legend", never, { "type": "p-type"; "series": "p-series"; }, {}, never, never, false>;
}