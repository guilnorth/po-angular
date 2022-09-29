import { PoGaugeRanges } from '../interfaces/po-gauge-ranges.interface';
import * as i0 from "@angular/core";
export declare class PoGaugeLegendComponent {
    private _ranges;
    set ranges(value: Array<PoGaugeRanges>);
    get ranges(): Array<PoGaugeRanges>;
    constructor();
    trackBy(index: any): any;
    private filterLabel;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoGaugeLegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoGaugeLegendComponent, "po-gauge-legend", never, { "ranges": "p-ranges"; }, {}, never, never, false>;
}