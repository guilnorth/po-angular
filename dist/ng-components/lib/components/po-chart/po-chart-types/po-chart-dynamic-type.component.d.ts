import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PoChartType } from '../enums/po-chart-type.enum';
import * as i0 from "@angular/core";
export declare abstract class PoChartDynamicTypeComponent {
    chartBody: ElementRef;
    svgContainer: ElementRef;
    centerX: number;
    chartElementCategory: any;
    chartElementDescription: any;
    chartElementValue: any;
    chartHeader: number;
    chartLegend: number;
    chartWrapper: number;
    colors: Array<string>;
    height: number;
    innerRadius: number;
    onSerieClick: Subject<any>;
    onSerieHover: Subject<any>;
    svgElement: HTMLObjectElement;
    svgHeight: number;
    target: HTMLInputElement & EventTarget;
    tooltipElement: HTMLObjectElement;
    tooltipText: string;
    totalValue: number;
    type: PoChartType;
    protected windowResizeListener: () => void;
    protected windowScrollListener: () => void;
    protected _series: Array<any>;
    calculateSVGContainerDimensions(chartWrapperElement: number, chartHeaderElement: number, chartLegendElement: number): void;
    calculateTotalValue(): void;
    set series(value: Array<any>);
    get series(): Array<any>;
    protected getSeriesWithValue(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartDynamicTypeComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoChartDynamicTypeComponent, never, never, {}, {}, never, never, false>;
}