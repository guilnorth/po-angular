import { Component, ElementRef, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PoChartAxisXLabelArea, PoChartPadding } from './helpers/po-chart-default-values.constant';
import { PoDefaultColors } from '../../services/po-color/po-colors.constant';
import { PoChartBaseComponent } from './po-chart-base.component';
import { PoChartType } from './enums/po-chart-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-color/po-color.service";
import * as i2 from "./services/po-chart-svg-container.service";
import * as i3 from "./services/po-chart-maths.service";
import * as i4 from "@angular/common";
import * as i5 from "./po-chart-container/po-chart-container.component";
import * as i6 from "./po-chart-legend/po-chart-legend.component";
import * as i7 from "./directives/po-resize-observer.directive";
const _c0 = ["chartContainer"];
const _c1 = ["chartHeader"];
const _c2 = ["chartLegend"];
const _c3 = ["chartWrapper"];
function PoChartComponent_ng_template_7_Template(rf, ctx) { }
function PoChartComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoChartComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, PoChartComponent_div_9_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(11);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PoChartComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-chart-legend", 10, 11);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-series", ctx_r6.chartSeries)("p-type", ctx_r6.type);
} }
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
export class PoChartComponent extends PoChartBaseComponent {
    constructor(colorService, changeDetector, containerService, componentFactoryResolver, elementRef, mathsService, renderer) {
        super(colorService);
        this.colorService = colorService;
        this.changeDetector = changeDetector;
        this.containerService = containerService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.mathsService = mathsService;
        this.renderer = renderer;
        this.calculatedComponentRefElement = false;
        this.calculatedSvgContainerElement = false;
        this.initialized = false;
        this.windowResizeListener = new Subject();
        this.subscription = new Subscription();
        this.mappings = {};
        this.onResize = () => {
            this.getSvgContainerSize();
            this.windowResizeListener.next({});
        };
    }
    ngAfterViewInit() {
        this.initialized = true;
        this.getSvgContainerSize();
    }
    ngDoCheck() {
        const charWrapperWidth = this.chartWrapper.nativeElement.offsetWidth;
        const isDynamicChart = this.getComponentType(this.type);
        // Permite que o chart seja calculado na primeira vez que o componente torna-se visível,
        // evitando com isso, problemas com Tabs ou Divs que iniciem escondidas.
        // Quando modificada a estrutura dos gráficos do tipo circular isto será melhorado.
        if (charWrapperWidth && this.initialized && !isDynamicChart && !this.calculatedSvgContainerElement) {
            this.getSvgContainerSize();
            this.calculatedSvgContainerElement = true;
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.removeWindowResizeListener();
    }
    resizeAction() {
        this.getSvgContainerSize();
        this.windowResizeListener.next({});
        this.changeDetector.detectChanges();
    }
    ngOnInit() {
        this.getSvgContainerSize();
    }
    rebuildComponentRef() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    calculateAxisXLabelArea() {
        const axisXLabels = this.chartType === PoChartType.Bar ? this.categories : this.chartSeries;
        return this.getAxisXLabelArea(this.mathsService.getLongestDataValue(axisXLabels, this.chartType, this.options));
    }
    getSvgContainerSize() {
        let axisXLabelWidth;
        const { chartHeaderHeight, chartLegendHeight, chartWrapperWidth } = this.getChartMeasurements();
        if (!this.isTypeCircular) {
            axisXLabelWidth = this.calculateAxisXLabelArea();
        }
        this.svgContainerSize = {
            ...this.containerService.calculateSVGContainerMeasurements(this.height, chartWrapperWidth, chartHeaderHeight, chartLegendHeight),
            axisXLabelWidth
        };
    }
    chartLegendHeight(chartLegend) {
        return chartLegend ? chartLegend.nativeElement.offsetHeight : 0;
    }
    createComponent() {
        const componentType = this.getComponentType(this.type);
        const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.chartContainer.createComponent(factory);
        const instance = this.componentRef.instance;
        this.setComponentRefProperties(instance);
        return instance;
    }
    dynamicComponentSetting() {
        const instance = this.createComponent();
        this.setResizeListenerSubscribe(instance);
        this.changeDetector.detectChanges();
        this.setClickSubscribe(instance);
        this.setHoverSubscribe(instance);
    }
    getAxisXLabelArea(axisXLabel) {
        const labelPoChartPadding = PoChartPadding / 3;
        const spanElement = this.renderer.createElement('span');
        this.renderer.addClass(spanElement, 'po-chart-axis-x-label');
        spanElement.innerHTML = axisXLabel;
        this.renderer.appendChild(this.elementRef.nativeElement, spanElement);
        const axisXLabelWidth = Math.ceil(spanElement.offsetWidth) + labelPoChartPadding;
        this.renderer.removeChild(this.elementRef.nativeElement, spanElement);
        return axisXLabelWidth > PoChartAxisXLabelArea ? axisXLabelWidth : PoChartAxisXLabelArea;
    }
    getComponentType(typeName) {
        return this.mappings[typeName];
    }
    getChartMeasurements() {
        const chartWrapperWidth = this.chartWrapper.nativeElement.offsetWidth;
        const chartHeaderHeight = this.chartHeader.nativeElement.offsetHeight;
        const chartLegendHeight = this.chartLegendHeight(this.chartLegend);
        return { chartWrapperWidth, chartHeaderHeight, chartLegendHeight };
    }
    removeWindowResizeListener() {
        if (this.onResize) {
            this.onResize = () => { };
        }
    }
    setComponentRefProperties(instance) {
        const { chartHeaderHeight, chartLegendHeight, chartWrapperWidth } = this.getChartMeasurements();
        instance.chartHeader = chartHeaderHeight;
        instance.chartLegend = chartLegendHeight;
        instance.chartWrapper = chartWrapperWidth;
        instance.colors = PoDefaultColors[0];
        instance.height = this.height;
        instance.type = this.type;
        instance.series = this.chartSeries || [];
    }
    setClickSubscribe(instance) {
        this.subscription.add(instance.onSerieClick.subscribe(event => {
            this.onSeriesClick(event);
        }));
    }
    setHoverSubscribe(instance) {
        this.subscription.add(instance.onSerieHover.subscribe(event => {
            this.onSeriesHover(event);
        }));
    }
    setResizeListenerSubscribe(instance) {
        this.subscription.add(this.windowResizeListener.subscribe(() => {
            const measuresForComponentRef = this.getChartMeasurements();
            instance.chartWrapper = measuresForComponentRef.chartWrapperWidth;
            instance.chartHeader = measuresForComponentRef.chartHeaderHeight;
            instance.chartLegend = measuresForComponentRef.chartLegendHeight;
        }));
    }
}
PoChartComponent.ɵfac = function PoChartComponent_Factory(t) { return new (t || PoChartComponent)(i0.ɵɵdirectiveInject(i1.PoColorService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.PoChartSvgContainerService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.PoChartMathsService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartComponent, selectors: [["po-chart"]], viewQuery: function PoChartComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
        i0.ɵɵviewQuery(_c1, 7);
        i0.ɵɵviewQuery(_c2, 5, ElementRef);
        i0.ɵɵviewQuery(_c3, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartHeader = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartLegend = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartWrapper = _t.first);
    } }, hostBindings: function PoChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function PoChartComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 7, consts: [[1, "po-chart-wrapper", 3, "p-resize-observer"], ["chartWrapper", ""], [1, "po-chart-header"], ["chartHeader", ""], [1, "po-chart-title"], [3, "p-options", "p-type", "p-series", "p-categories", "p-container-size", "p-serie-click", "p-serie-hover"], ["chartContainer", ""], [4, "ngIf"], ["chartLegendGroup", ""], [4, "ngTemplateOutlet"], [3, "p-series", "p-type"], ["chartLegend", ""]], template: function PoChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("p-resize-observer", function PoChartComponent_Template_div_p_resize_observer_0_listener() { return ctx.resizeAction(); });
        i0.ɵɵelementStart(2, "div", 2, 3)(4, "div", 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "po-chart-container", 5);
        i0.ɵɵlistener("p-serie-click", function PoChartComponent_Template_po_chart_container_p_serie_click_6_listener($event) { return ctx.onSeriesClick($event); })("p-serie-hover", function PoChartComponent_Template_po_chart_container_p_serie_hover_6_listener($event) { return ctx.onSeriesHover($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, PoChartComponent_ng_template_7_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, PoChartComponent_div_9_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, PoChartComponent_ng_template_10_Template, 2, 2, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-options", ctx.options)("p-type", ctx.chartType)("p-series", ctx.chartSeries)("p-categories", ctx.categories)("p-container-size", ctx.svgContainerSize);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", (ctx.options == null ? null : ctx.options.legend) !== false);
    } }, dependencies: [i4.NgIf, i4.NgTemplateOutlet, i5.PoChartContainerComponent, i6.PoChartLegendComponent, i7.PoResizeObserverDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartComponent, [{
        type: Component,
        args: [{ selector: 'po-chart', template: "<div #chartWrapper class=\"po-chart-wrapper\" (p-resize-observer)=\"resizeAction()\">\r\n  <div #chartHeader class=\"po-chart-header\">\r\n    <div class=\"po-chart-title\">{{ title }}</div>\r\n  </div>\r\n\r\n  <po-chart-container\r\n    [p-options]=\"options\"\r\n    [p-type]=\"chartType\"\r\n    [p-series]=\"chartSeries\"\r\n    [p-categories]=\"categories\"\r\n    [p-container-size]=\"svgContainerSize\"\r\n    (p-serie-click)=\"onSeriesClick($event)\"\r\n    (p-serie-hover)=\"onSeriesHover($event)\"\r\n  ></po-chart-container>\r\n\r\n  <!-- Inje\u00E7\u00E3o de gr\u00E1ficos do tipo gauge. Remover na deprecia\u00E7\u00E3o.  -->\r\n  <ng-template #chartContainer></ng-template>\r\n\r\n  <div *ngIf=\"options?.legend !== false\">\r\n    <ng-container *ngTemplateOutlet=\"chartLegendGroup\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #chartLegendGroup>\r\n  <po-chart-legend #chartLegend [p-series]=\"chartSeries\" [p-type]=\"type\"> </po-chart-legend>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.PoColorService }, { type: i0.ChangeDetectorRef }, { type: i2.PoChartSvgContainerService }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i3.PoChartMathsService }, { type: i0.Renderer2 }]; }, { chartContainer: [{
            type: ViewChild,
            args: ['chartContainer', { read: ViewContainerRef, static: true }]
        }], chartHeader: [{
            type: ViewChild,
            args: ['chartHeader', { static: true }]
        }], chartLegend: [{
            type: ViewChild,
            args: ['chartLegend', { read: ElementRef }]
        }], chartWrapper: [{
            type: ViewChild,
            args: ['chartWrapper', { static: true }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUlULFVBQVUsRUFDVixZQUFZLEVBRVosU0FBUyxFQUNULGdCQUFnQixFQUdqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDTHJELHdCQUFrRTs7O0lBRHBFLDJCQUF1QztJQUNyQyx5RkFBa0U7SUFDcEUsaUJBQU07Ozs7SUFEVyxlQUFrQztJQUFsQyxzQ0FBa0M7OztJQUtuRCwwQ0FBMEY7OztJQUE1RCw2Q0FBd0IsdUJBQUE7O0FESXhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBS0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQjtJQWtCeEQsWUFDWSxZQUE0QixFQUM5QixjQUFpQyxFQUNqQyxnQkFBNEMsRUFDNUMsd0JBQWtELEVBQ2xELFVBQXNCLEVBQ3RCLFlBQWlDLEVBQ2pDLFFBQW1CO1FBRTNCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztR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RUFBRTtZQUVNLFdBQVc7a0JBQTFELFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUVELFlBQVk7a0JBQXhELFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQXdCM0MsUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkRlc3Ryb3ksXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0QXhpc1hMYWJlbEFyZWEsIFBvQ2hhcnRQYWRkaW5nIH0gZnJvbSAnLi9oZWxwZXJzL3BvLWNoYXJ0LWRlZmF1bHQtdmFsdWVzLmNvbnN0YW50JztcclxuaW1wb3J0IHsgUG9EZWZhdWx0Q29sb3JzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tY29sb3IvcG8tY29sb3JzLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRTdmdDb250YWluZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1jaGFydC1zdmctY29udGFpbmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0RHluYW1pY1R5cGVDb21wb25lbnQgfSBmcm9tICcuL3BvLWNoYXJ0LXR5cGVzL3BvLWNoYXJ0LWR5bmFtaWMtdHlwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0VHlwZSB9IGZyb20gJy4vZW51bXMvcG8tY2hhcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgUG9Db2xvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1jb2xvci9wby1jb2xvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9DaGFydE1hdGhzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tY2hhcnQtbWF0aHMuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvQ2hhcnRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jaGFydC1iYXNpY1wiIHRpdGxlPVwiUE8gQ2hhcnQgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hhcnQtYmFzaWMvc2FtcGxlLXBvLWNoYXJ0LWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hhcnQtYmFzaWMvc2FtcGxlLXBvLWNoYXJ0LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNoYXJ0LWxhYnNcIiB0aXRsZT1cIlBPIENoYXJ0IExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hhcnQtbGFicy9zYW1wbGUtcG8tY2hhcnQtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNoYXJ0LWxhYnMvc2FtcGxlLXBvLWNoYXJ0LWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY2hhcnQtY29mZmVlLXJhbmtpbmdcIiB0aXRsZT1cIlBPIENoYXJ0IC0gQ29mZmVlIFJhbmtpbmdcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hhcnQtY29mZmVlLXJhbmtpbmcvc2FtcGxlLXBvLWNoYXJ0LWNvZmZlZS1yYW5raW5nLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hhcnQtY29mZmVlLXJhbmtpbmcvc2FtcGxlLXBvLWNoYXJ0LWNvZmZlZS1yYW5raW5nLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jaGFydC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBQb0NoYXJ0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdjaGFydENvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGNoYXJ0Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdjaGFydEhlYWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIGNoYXJ0SGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdjaGFydExlZ2VuZCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjaGFydExlZ2VuZDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2hhcnRXcmFwcGVyJywgeyBzdGF0aWM6IHRydWUgfSkgY2hhcnRXcmFwcGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZWRDb21wb25lbnRSZWZFbGVtZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVkU3ZnQ29udGFpbmVyRWxlbWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8e30+O1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZUxpc3RlbmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBwcml2YXRlIG1hcHBpbmdzID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNvbG9yU2VydmljZTogUG9Db2xvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY29udGFpbmVyU2VydmljZTogUG9DaGFydFN2Z0NvbnRhaW5lclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBtYXRoc1NlcnZpY2U6IFBvQ2hhcnRNYXRoc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGNvbG9yU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBvblJlc2l6ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuZ2V0U3ZnQ29udGFpbmVyU2l6ZSgpO1xyXG4gICAgdGhpcy53aW5kb3dSZXNpemVMaXN0ZW5lci5uZXh0KHt9KTtcclxuICB9O1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2V0U3ZnQ29udGFpbmVyU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgY29uc3QgY2hhcldyYXBwZXJXaWR0aCA9IHRoaXMuY2hhcnRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBjb25zdCBpc0R5bmFtaWNDaGFydCA9IHRoaXMuZ2V0Q29tcG9uZW50VHlwZSh0aGlzLnR5cGUpO1xyXG5cclxuICAgIC8vIFBlcm1pdGUgcXVlIG8gY2hhcnQgc2VqYSBjYWxjdWxhZG8gbmEgcHJpbWVpcmEgdmV6IHF1ZSBvIGNvbXBvbmVudGUgdG9ybmEtc2Ugdmlzw612ZWwsXHJcbiAgICAvLyBldml0YW5kbyBjb20gaXNzbywgcHJvYmxlbWFzIGNvbSBUYWJzIG91IERpdnMgcXVlIGluaWNpZW0gZXNjb25kaWRhcy5cclxuICAgIC8vIFF1YW5kbyBtb2RpZmljYWRhIGEgZXN0cnV0dXJhIGRvcyBncsOhZmljb3MgZG8gdGlwbyBjaXJjdWxhciBpc3RvIHNlcsOhIG1lbGhvcmFkby5cclxuICAgIGlmIChjaGFyV3JhcHBlcldpZHRoICYmIHRoaXMuaW5pdGlhbGl6ZWQgJiYgIWlzRHluYW1pY0NoYXJ0ICYmICF0aGlzLmNhbGN1bGF0ZWRTdmdDb250YWluZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZ2V0U3ZnQ29udGFpbmVyU2l6ZSgpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZWRTdmdDb250YWluZXJFbGVtZW50ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZUFjdGlvbigpIHtcclxuICAgIHRoaXMuZ2V0U3ZnQ29udGFpbmVyU2l6ZSgpO1xyXG4gICAgdGhpcy53aW5kb3dSZXNpemVMaXN0ZW5lci5uZXh0KHt9KTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFN2Z0NvbnRhaW5lclNpemUoKTtcclxuICB9XHJcblxyXG4gIHJlYnVpbGRDb21wb25lbnRSZWYoKSB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZUF4aXNYTGFiZWxBcmVhKCkge1xyXG4gICAgY29uc3QgYXhpc1hMYWJlbHMgPSB0aGlzLmNoYXJ0VHlwZSA9PT0gUG9DaGFydFR5cGUuQmFyID8gdGhpcy5jYXRlZ29yaWVzIDogdGhpcy5jaGFydFNlcmllcztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRBeGlzWExhYmVsQXJlYSh0aGlzLm1hdGhzU2VydmljZS5nZXRMb25nZXN0RGF0YVZhbHVlKGF4aXNYTGFiZWxzLCB0aGlzLmNoYXJ0VHlwZSwgdGhpcy5vcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0U3ZnQ29udGFpbmVyU2l6ZSgpIHtcclxuICAgIGxldCBheGlzWExhYmVsV2lkdGg7XHJcbiAgICBjb25zdCB7IGNoYXJ0SGVhZGVySGVpZ2h0LCBjaGFydExlZ2VuZEhlaWdodCwgY2hhcnRXcmFwcGVyV2lkdGggfSA9IHRoaXMuZ2V0Q2hhcnRNZWFzdXJlbWVudHMoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNUeXBlQ2lyY3VsYXIpIHtcclxuICAgICAgYXhpc1hMYWJlbFdpZHRoID0gdGhpcy5jYWxjdWxhdGVBeGlzWExhYmVsQXJlYSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3ZnQ29udGFpbmVyU2l6ZSA9IHtcclxuICAgICAgLi4udGhpcy5jb250YWluZXJTZXJ2aWNlLmNhbGN1bGF0ZVNWR0NvbnRhaW5lck1lYXN1cmVtZW50cyhcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICBjaGFydFdyYXBwZXJXaWR0aCxcclxuICAgICAgICBjaGFydEhlYWRlckhlaWdodCxcclxuICAgICAgICBjaGFydExlZ2VuZEhlaWdodFxyXG4gICAgICApLFxyXG4gICAgICBheGlzWExhYmVsV2lkdGhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYXJ0TGVnZW5kSGVpZ2h0KGNoYXJ0TGVnZW5kOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZXR1cm4gY2hhcnRMZWdlbmQgPyBjaGFydExlZ2VuZC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLmdldENvbXBvbmVudFR5cGUodGhpcy50eXBlKTtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY2hhcnRDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cclxuICAgIGNvbnN0IGluc3RhbmNlID0gPFBvQ2hhcnREeW5hbWljVHlwZUNvbXBvbmVudD50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuXHJcbiAgICB0aGlzLnNldENvbXBvbmVudFJlZlByb3BlcnRpZXMoaW5zdGFuY2UpO1xyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHluYW1pY0NvbXBvbmVudFNldHRpbmcoKSB7XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcblxyXG4gICAgdGhpcy5zZXRSZXNpemVMaXN0ZW5lclN1YnNjcmliZShpbnN0YW5jZSk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuc2V0Q2xpY2tTdWJzY3JpYmUoaW5zdGFuY2UpO1xyXG4gICAgdGhpcy5zZXRIb3ZlclN1YnNjcmliZShpbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEF4aXNYTGFiZWxBcmVhKGF4aXNYTGFiZWw6IGFueSkge1xyXG4gICAgY29uc3QgbGFiZWxQb0NoYXJ0UGFkZGluZyA9IFBvQ2hhcnRQYWRkaW5nIC8gMztcclxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzcGFuRWxlbWVudCwgJ3BvLWNoYXJ0LWF4aXMteC1sYWJlbCcpO1xyXG4gICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gYXhpc1hMYWJlbDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzcGFuRWxlbWVudCk7XHJcbiAgICBjb25zdCBheGlzWExhYmVsV2lkdGggPSBNYXRoLmNlaWwoc3BhbkVsZW1lbnQub2Zmc2V0V2lkdGgpICsgbGFiZWxQb0NoYXJ0UGFkZGluZztcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHNwYW5FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gYXhpc1hMYWJlbFdpZHRoID4gUG9DaGFydEF4aXNYTGFiZWxBcmVhID8gYXhpc1hMYWJlbFdpZHRoIDogUG9DaGFydEF4aXNYTGFiZWxBcmVhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRUeXBlKHR5cGVOYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXBwaW5nc1t0eXBlTmFtZV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENoYXJ0TWVhc3VyZW1lbnRzKCkge1xyXG4gICAgY29uc3QgY2hhcnRXcmFwcGVyV2lkdGggPSB0aGlzLmNoYXJ0V3JhcHBlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgY2hhcnRIZWFkZXJIZWlnaHQgPSB0aGlzLmNoYXJ0SGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3QgY2hhcnRMZWdlbmRIZWlnaHQgPSB0aGlzLmNoYXJ0TGVnZW5kSGVpZ2h0KHRoaXMuY2hhcnRMZWdlbmQpO1xyXG5cclxuICAgIHJldHVybiB7IGNoYXJ0V3JhcHBlcldpZHRoLCBjaGFydEhlYWRlckhlaWdodCwgY2hhcnRMZWdlbmRIZWlnaHQgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAodGhpcy5vblJlc2l6ZSkge1xyXG4gICAgICB0aGlzLm9uUmVzaXplID0gKCkgPT4ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbXBvbmVudFJlZlByb3BlcnRpZXMoaW5zdGFuY2U6IFBvQ2hhcnREeW5hbWljVHlwZUNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgeyBjaGFydEhlYWRlckhlaWdodCwgY2hhcnRMZWdlbmRIZWlnaHQsIGNoYXJ0V3JhcHBlcldpZHRoIH0gPSB0aGlzLmdldENoYXJ0TWVhc3VyZW1lbnRzKCk7XHJcblxyXG4gICAgaW5zdGFuY2UuY2hhcnRIZWFkZXIgPSBjaGFydEhlYWRlckhlaWdodDtcclxuICAgIGluc3RhbmNlLmNoYXJ0TGVnZW5kID0gY2hhcnRMZWdlbmRIZWlnaHQ7XHJcbiAgICBpbnN0YW5jZS5jaGFydFdyYXBwZXIgPSBjaGFydFdyYXBwZXJXaWR0aDtcclxuICAgIGluc3RhbmNlLmNvbG9ycyA9IFBvRGVmYXVsdENvbG9yc1swXTtcclxuICAgIGluc3RhbmNlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgaW5zdGFuY2UudHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGluc3RhbmNlLnNlcmllcyA9IHRoaXMuY2hhcnRTZXJpZXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsaWNrU3Vic2NyaWJlKGluc3RhbmNlOiBQb0NoYXJ0RHluYW1pY1R5cGVDb21wb25lbnQpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgaW5zdGFuY2Uub25TZXJpZUNsaWNrLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5vblNlcmllc0NsaWNrKGV2ZW50KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEhvdmVyU3Vic2NyaWJlKGluc3RhbmNlOiBQb0NoYXJ0RHluYW1pY1R5cGVDb21wb25lbnQpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgaW5zdGFuY2Uub25TZXJpZUhvdmVyLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5vblNlcmllc0hvdmVyKGV2ZW50KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJlc2l6ZUxpc3RlbmVyU3Vic2NyaWJlKGluc3RhbmNlOiBQb0NoYXJ0RHluYW1pY1R5cGVDb21wb25lbnQpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgdGhpcy53aW5kb3dSZXNpemVMaXN0ZW5lci5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lYXN1cmVzRm9yQ29tcG9uZW50UmVmID0gdGhpcy5nZXRDaGFydE1lYXN1cmVtZW50cygpO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5jaGFydFdyYXBwZXIgPSBtZWFzdXJlc0ZvckNvbXBvbmVudFJlZi5jaGFydFdyYXBwZXJXaWR0aDtcclxuICAgICAgICBpbnN0YW5jZS5jaGFydEhlYWRlciA9IG1lYXN1cmVzRm9yQ29tcG9uZW50UmVmLmNoYXJ0SGVhZGVySGVpZ2h0O1xyXG4gICAgICAgIGluc3RhbmNlLmNoYXJ0TGVnZW5kID0gbWVhc3VyZXNGb3JDb21wb25lbnRSZWYuY2hhcnRMZWdlbmRIZWlnaHQ7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNjaGFydFdyYXBwZXIgY2xhc3M9XCJwby1jaGFydC13cmFwcGVyXCIgKHAtcmVzaXplLW9ic2VydmVyKT1cInJlc2l6ZUFjdGlvbigpXCI+XHJcbiAgPGRpdiAjY2hhcnRIZWFkZXIgY2xhc3M9XCJwby1jaGFydC1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1jaGFydC10aXRsZVwiPnt7IHRpdGxlIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxwby1jaGFydC1jb250YWluZXJcclxuICAgIFtwLW9wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICBbcC10eXBlXT1cImNoYXJ0VHlwZVwiXHJcbiAgICBbcC1zZXJpZXNdPVwiY2hhcnRTZXJpZXNcIlxyXG4gICAgW3AtY2F0ZWdvcmllc109XCJjYXRlZ29yaWVzXCJcclxuICAgIFtwLWNvbnRhaW5lci1zaXplXT1cInN2Z0NvbnRhaW5lclNpemVcIlxyXG4gICAgKHAtc2VyaWUtY2xpY2spPVwib25TZXJpZXNDbGljaygkZXZlbnQpXCJcclxuICAgIChwLXNlcmllLWhvdmVyKT1cIm9uU2VyaWVzSG92ZXIoJGV2ZW50KVwiXHJcbiAgPjwvcG8tY2hhcnQtY29udGFpbmVyPlxyXG5cclxuICA8IS0tIEluamXDp8OjbyBkZSBncsOhZmljb3MgZG8gdGlwbyBnYXVnZS4gUmVtb3ZlciBuYSBkZXByZWNpYcOnw6NvLiAgLS0+XHJcbiAgPG5nLXRlbXBsYXRlICNjaGFydENvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwib3B0aW9ucz8ubGVnZW5kICE9PSBmYWxzZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNoYXJ0TGVnZW5kR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2NoYXJ0TGVnZW5kR3JvdXA+XHJcbiAgPHBvLWNoYXJ0LWxlZ2VuZCAjY2hhcnRMZWdlbmQgW3Atc2VyaWVzXT1cImNoYXJ0U2VyaWVzXCIgW3AtdHlwZV09XCJ0eXBlXCI+IDwvcG8tY2hhcnQtbGVnZW5kPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=