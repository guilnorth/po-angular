import { EventEmitter } from '@angular/core';
import { PoChartBarCoordinates } from '../../../interfaces/po-chart-bar-coordinates.interface';
import * as i0 from "@angular/core";
export declare class PoChartBarPathComponent {
    color?: string;
    coordinates: Array<PoChartBarCoordinates>;
    tooltipPosition: string;
    barClick: EventEmitter<any>;
    barHover: EventEmitter<any>;
    constructor();
    trackBy(index: any): any;
    onClick(item: PoChartBarCoordinates): void;
    onMouseEnter(item: PoChartBarCoordinates): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartBarPathComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartBarPathComponent, "[po-chart-bar-path]", never, { "color": "p-color"; "coordinates": "p-coordinates"; "tooltipPosition": "p-tooltip-position"; }, { "barClick": "p-bar-click"; "barHover": "p-bar-hover"; }, never, never, false>;
}
