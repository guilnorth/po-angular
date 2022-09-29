import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, DoCheck, ElementRef, OnDestroy, ViewContainerRef, OnInit, Renderer2 } from '@angular/core';
import { PoChartBaseComponent } from './po-chart-base.component';
import { PoChartSvgContainerService } from './services/po-chart-svg-container.service';
import { PoColorService } from '../../services/po-color/po-color.service';
import { PoChartMathsService } from './services/po-chart-maths.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoChartBaseComponent
 *
 * @example
 *
 * <example name="po-chart-basic" title="PO Chart Basic">
 *  <file name="sample-po-chart-basic/sample-po-chart-basic.component.html"> </file>
 *  <file name="sample-po-chart-basic/sample-po-chart-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-chart-labs" title="PO Chart Labs">
 *  <file name="sample-po-chart-labs/sample-po-chart-labs.component.html"> </file>
 *  <file name="sample-po-chart-labs/sample-po-chart-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-chart-coffee-ranking" title="PO Chart - Coffee Ranking">
 *  <file name="sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"> </file>
 *  <file name="sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"> </file>
 * </example>
 */
export declare class PoChartComponent extends PoChartBaseComponent implements AfterViewInit, DoCheck, OnDestroy, OnInit {
    protected colorService: PoColorService;
    private changeDetector;
    private containerService;
    private componentFactoryResolver;
    private elementRef;
    private mathsService;
    private renderer;
    chartContainer: ViewContainerRef;
    chartHeader: ElementRef;
    chartLegend: ElementRef;
    chartWrapper: ElementRef;
    private calculatedComponentRefElement;
    private calculatedSvgContainerElement;
    private componentRef;
    private initialized;
    private windowResizeListener;
    private subscription;
    private mappings;
    constructor(colorService: PoColorService, changeDetector: ChangeDetectorRef, containerService: PoChartSvgContainerService, componentFactoryResolver: ComponentFactoryResolver, elementRef: ElementRef, mathsService: PoChartMathsService, renderer: Renderer2);
    onResize: () => void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    resizeAction(): void;
    ngOnInit(): void;
    rebuildComponentRef(): void;
    protected calculateAxisXLabelArea(): number;
    protected getSvgContainerSize(): void;
    private chartLegendHeight;
    private createComponent;
    private dynamicComponentSetting;
    private getAxisXLabelArea;
    private getComponentType;
    private getChartMeasurements;
    private removeWindowResizeListener;
    private setComponentRefProperties;
    private setClickSubscribe;
    private setHoverSubscribe;
    private setResizeListenerSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartComponent, "po-chart", never, {}, {}, never, never, false>;
}