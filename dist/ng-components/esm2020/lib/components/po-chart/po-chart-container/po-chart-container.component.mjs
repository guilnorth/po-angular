import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PoChartType } from '../enums/po-chart-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../services/po-chart-maths.service";
import * as i2 from "@angular/common";
import * as i3 from "./po-chart-line/po-chart-area/po-chart-area.component";
import * as i4 from "./po-chart-axis/po-chart-axis.component";
import * as i5 from "./po-chart-line/po-chart-line.component";
import * as i6 from "./po-chart-circular/po-chart-pie/po-chart-pie.component";
import * as i7 from "./po-chart-circular/po-chart-donut/po-chart-donut.component";
import * as i8 from "./po-chart-bar/po-chart-bar.component";
import * as i9 from "./po-chart-bar/po-chart-column/po-chart-column.component";
const _c0 = ["svgELement"];
function PoChartContainerComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 9);
    i0.ɵɵlistener("p-categories-coordinates", function PoChartContainerComponent__svg_g_2_Template__svg_g_p_categories_coordinates_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.getCategoriesCoordinates($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-align-by-the-corners", ctx_r1.alignByTheCorners)("p-range", ctx_r1.range)("p-type", ctx_r1.type)("p-series", ctx_r1.series)("p-container-size", ctx_r1.containerSize)("p-options", ctx_r1.axisOptions)("p-categories", ctx_r1.categories);
} }
function PoChartContainerComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 10);
    i0.ɵɵlistener("p-bar-hover", function PoChartContainerComponent__svg_g_3_Template__svg_g_p_bar_hover_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onSerieHover($event)); })("p-bar-click", function PoChartContainerComponent__svg_g_3_Template__svg_g_p_bar_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onSerieClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-align-by-the-corners", ctx_r2.alignByTheCorners)("p-svg-space", ctx_r2.svgSpace)("p-categories", ctx_r2.categories)("p-categories-coordinates", ctx_r2.categoriesCoordinates)("p-range", ctx_r2.range)("p-series", ctx_r2.seriesByType["area"])("p-container-size", ctx_r2.containerSize);
} }
function PoChartContainerComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 11);
    i0.ɵɵlistener("p-bar-hover", function PoChartContainerComponent__svg_g_4_Template__svg_g_p_bar_hover_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onSerieHover($event)); })("p-bar-click", function PoChartContainerComponent__svg_g_4_Template__svg_g_p_bar_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onSerieClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-categories", ctx_r3.categories)("p-range", ctx_r3.range)("p-series", ctx_r3.seriesByType["column"])("p-container-size", ctx_r3.containerSize);
} }
function PoChartContainerComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 12);
    i0.ɵɵlistener("p-point-hover", function PoChartContainerComponent__svg_g_5_Template__svg_g_p_point_hover_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onSerieHover($event)); })("p-point-click", function PoChartContainerComponent__svg_g_5_Template__svg_g_p_point_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onSerieClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-categories", ctx_r4.categories)("p-range", ctx_r4.range)("p-series", ctx_r4.seriesByType["line"])("p-container-size", ctx_r4.containerSize);
} }
function PoChartContainerComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 13);
    i0.ɵɵlistener("p-bar-hover", function PoChartContainerComponent__svg_g_6_Template__svg_g_p_bar_hover_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.onSerieHover($event)); })("p-bar-click", function PoChartContainerComponent__svg_g_6_Template__svg_g_p_bar_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.onSerieClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-categories", ctx_r5.categories)("p-range", ctx_r5.range)("p-series", ctx_r5.seriesByType["bar"])("p-container-size", ctx_r5.containerSize);
} }
function PoChartContainerComponent__svg_g_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 14);
    i0.ɵɵlistener("p-circular-hover", function PoChartContainerComponent__svg_g_7_Template__svg_g_p_circular_hover_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.onSerieHover($event)); })("p-circular-click", function PoChartContainerComponent__svg_g_7_Template__svg_g_p_circular_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.onSerieClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-series", ctx_r6.seriesByType["pie"])("p-container-size", ctx_r6.containerSize);
} }
function PoChartContainerComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 15);
    i0.ɵɵlistener("p-circular-hover", function PoChartContainerComponent__svg_g_8_Template__svg_g_p_circular_hover_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.onSerieHover($event)); })("p-circular-click", function PoChartContainerComponent__svg_g_8_Template__svg_g_p_circular_click_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.onSerieClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-options", ctx_r7.options)("p-series", ctx_r7.seriesByType["donut"])("p-container-size", ctx_r7.containerSize);
} }
export class PoChartContainerComponent {
    constructor(mathsService) {
        this.mathsService = mathsService;
        this.serieClick = new EventEmitter();
        this.serieHover = new EventEmitter();
        this._series = [];
    }
    set options(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._options = value;
            this.verifyAxisOptions(this._options);
        }
    }
    get options() {
        return this._options;
    }
    set series(data) {
        this._series = data;
        this.setAlignByTheCorners(this._series);
        this.setSeriesByType(this._series);
        this.setRange(this._series, this.options);
    }
    get series() {
        return this._series;
    }
    get isTypeCircular() {
        return this.type === PoChartType.Pie || this.type === PoChartType.Donut;
    }
    ngOnChanges(changes) {
        if (changes.type || changes.containerSize) {
            this.setViewBox();
            this.setSvgSpace();
        }
    }
    getCategoriesCoordinates(value) {
        this.categoriesCoordinates = value;
    }
    onSerieClick(event) {
        this.serieClick.emit(event);
    }
    onSerieHover(event) {
        this.serieHover.emit(event);
    }
    getRange(series, options = {}) {
        const domain = this.mathsService.calculateMinAndMaxValues(series);
        const minValue = !options.axis?.minRange && domain.minValue > 0
            ? 0
            : options.axis?.minRange < domain.minValue
                ? options.axis.minRange
                : domain.minValue;
        const maxValue = options.axis?.maxRange > domain.maxValue ? options.axis.maxRange : domain.maxValue;
        const updatedDomainValues = { minValue, maxValue };
        return { ...domain, ...updatedDomainValues };
    }
    setSvgSpace() {
        // Representa um ponto 2D dentro do viewport do SVG. Ele é a representação do cursor do mouse para comparação de coordenadas com cada dado de série.
        const svgPoint = this.svgELement.nativeElement.createSVGPoint();
        // Retorna um DOMMatrix representando as matrizes 2D e 3D transformadas a partir das coordenadas do elemento, em relação ao document, para coordenadas relativas ao viewport do SVG.
        // É utilizado nos gráficos do tipo área para que seja possível equiparar as coordenadas do evento com cada dado de série, para assim ativar o ponto de dado equivalente.
        const svgDomMatrix = this.svgELement.nativeElement.getScreenCTM()?.inverse();
        this.svgSpace = { svgPoint, svgDomMatrix };
    }
    setAlignByTheCorners(series) {
        this.alignByTheCorners = series.every(serie => serie.type === PoChartType.Area || serie.type === PoChartType.Bar);
    }
    setRange(series, options = {}) {
        if (!this.isTypeCircular) {
            this.range = this.getRange(series, options);
        }
    }
    setSeriesByType(series) {
        this.seriesByType = {
            [PoChartType.Area]: series.filter(serie => serie.type === PoChartType.Area),
            [PoChartType.Column]: series.filter(serie => serie.type === PoChartType.Column),
            [PoChartType.Bar]: series.filter(serie => serie.type === PoChartType.Bar),
            [PoChartType.Line]: series.filter(serie => serie.type === PoChartType.Line),
            [PoChartType.Donut]: series.filter(serie => serie.type === PoChartType.Donut),
            [PoChartType.Pie]: series.filter(serie => serie.type === PoChartType.Pie)
        };
    }
    setViewBox() {
        const { svgWidth, svgHeight } = this.containerSize;
        const viewBoxWidth = this.isTypeCircular ? svgHeight : svgWidth;
        // Tratamento necessário para que não corte o vetor nas extremidades
        const offsetXY = 1;
        this.viewBox = `${offsetXY} -${offsetXY} ${viewBoxWidth} ${this.containerSize.svgHeight}`;
    }
    verifyAxisOptions(options) {
        if (!this.isTypeCircular && options.hasOwnProperty('axis')) {
            this.range = this.getRange(this.series, this.options);
            this.axisOptions = {
                ...this.axisOptions,
                ...options.axis
            };
        }
    }
}
PoChartContainerComponent.ɵfac = function PoChartContainerComponent_Factory(t) { return new (t || PoChartContainerComponent)(i0.ɵɵdirectiveInject(i1.PoChartMathsService)); };
PoChartContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartContainerComponent, selectors: [["po-chart-container"]], viewQuery: function PoChartContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgELement = _t.first);
    } }, inputs: { categories: ["p-categories", "categories"], type: ["p-type", "type"], containerSize: ["p-container-size", "containerSize"], options: ["p-options", "options"], series: ["p-series", "series"] }, outputs: { serieClick: "p-serie-click", serieHover: "p-serie-hover" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 10, consts: [["preserveAspectRatio", "xMidYMin meet", 1, "po-chart-svg-element"], ["svgELement", ""], ["po-chart-axis", "", 3, "p-align-by-the-corners", "p-range", "p-type", "p-series", "p-container-size", "p-options", "p-categories", "p-categories-coordinates", 4, "ngIf"], ["po-chart-area", "", 3, "p-align-by-the-corners", "p-svg-space", "p-categories", "p-categories-coordinates", "p-range", "p-series", "p-container-size", "p-bar-hover", "p-bar-click", 4, "ngIf"], ["po-chart-column", "", 3, "p-categories", "p-range", "p-series", "p-container-size", "p-bar-hover", "p-bar-click", 4, "ngIf"], ["po-chart-line", "", 3, "p-categories", "p-range", "p-series", "p-container-size", "p-point-hover", "p-point-click", 4, "ngIf"], ["po-chart-bar", "", 3, "p-categories", "p-range", "p-series", "p-container-size", "p-bar-hover", "p-bar-click", 4, "ngIf"], ["po-chart-pie", "", 3, "p-series", "p-container-size", "p-circular-hover", "p-circular-click", 4, "ngIf"], ["po-chart-donut", "", 3, "p-options", "p-series", "p-container-size", "p-circular-hover", "p-circular-click", 4, "ngIf"], ["po-chart-axis", "", 3, "p-align-by-the-corners", "p-range", "p-type", "p-series", "p-container-size", "p-options", "p-categories", "p-categories-coordinates"], ["po-chart-area", "", 3, "p-align-by-the-corners", "p-svg-space", "p-categories", "p-categories-coordinates", "p-range", "p-series", "p-container-size", "p-bar-hover", "p-bar-click"], ["po-chart-column", "", 3, "p-categories", "p-range", "p-series", "p-container-size", "p-bar-hover", "p-bar-click"], ["po-chart-line", "", 3, "p-categories", "p-range", "p-series", "p-container-size", "p-point-hover", "p-point-click"], ["po-chart-bar", "", 3, "p-categories", "p-range", "p-series", "p-container-size", "p-bar-hover", "p-bar-click"], ["po-chart-pie", "", 3, "p-series", "p-container-size", "p-circular-hover", "p-circular-click"], ["po-chart-donut", "", 3, "p-options", "p-series", "p-container-size", "p-circular-hover", "p-circular-click"]], template: function PoChartContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0, 1);
        i0.ɵɵtemplate(2, PoChartContainerComponent__svg_g_2_Template, 1, 7, "g", 2);
        i0.ɵɵtemplate(3, PoChartContainerComponent__svg_g_3_Template, 1, 7, "g", 3);
        i0.ɵɵtemplate(4, PoChartContainerComponent__svg_g_4_Template, 1, 4, "g", 4);
        i0.ɵɵtemplate(5, PoChartContainerComponent__svg_g_5_Template, 1, 4, "g", 5);
        i0.ɵɵtemplate(6, PoChartContainerComponent__svg_g_6_Template, 1, 4, "g", 6);
        i0.ɵɵtemplate(7, PoChartContainerComponent__svg_g_7_Template, 1, 2, "g", 7);
        i0.ɵɵtemplate(8, PoChartContainerComponent__svg_g_8_Template, 1, 3, "g", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("viewBox", ctx.viewBox)("width", ctx.containerSize.svgWidth)("height", ctx.containerSize.svgHeight);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isTypeCircular);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.type === "area" || ctx.type === "line" || ctx.type === "column") && ctx.seriesByType["area"].length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.type === "area" || ctx.type === "line" || ctx.type === "column") && ctx.seriesByType["column"].length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.type === "area" || ctx.type === "line" || ctx.type === "column") && ctx.seriesByType["line"].length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "bar");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "pie");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "donut");
    } }, dependencies: [i2.NgIf, i3.PoChartAreaComponent, i4.PoChartAxisComponent, i5.PoChartLineComponent, i6.PoChartPieComponent, i7.PoChartDonutComponent, i8.PoChartBarComponent, i9.PoChartColumnComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartContainerComponent, [{
        type: Component,
        args: [{ selector: 'po-chart-container', template: "<svg:svg\r\n  #svgELement\r\n  class=\"po-chart-svg-element\"\r\n  preserveAspectRatio=\"xMidYMin meet\"\r\n  [attr.viewBox]=\"viewBox\"\r\n  [attr.width]=\"containerSize.svgWidth\"\r\n  [attr.height]=\"containerSize.svgHeight\"\r\n>\r\n  <!-- axis -->\r\n  <svg:g\r\n    *ngIf=\"!isTypeCircular\"\r\n    po-chart-axis\r\n    [p-align-by-the-corners]=\"alignByTheCorners\"\r\n    [p-range]=\"range\"\r\n    [p-type]=\"type\"\r\n    [p-series]=\"series\"\r\n    [p-container-size]=\"containerSize\"\r\n    [p-options]=\"axisOptions\"\r\n    [p-categories]=\"categories\"\r\n    (p-categories-coordinates)=\"getCategoriesCoordinates($event)\"\r\n  ></svg:g>\r\n\r\n  <!-- chart area -->\r\n  <svg:g\r\n    *ngIf=\"(type === 'area' || type === 'line' || type === 'column') && seriesByType['area'].length\"\r\n    po-chart-area\r\n    [p-align-by-the-corners]=\"alignByTheCorners\"\r\n    [p-svg-space]=\"svgSpace\"\r\n    [p-categories]=\"categories\"\r\n    [p-categories-coordinates]=\"categoriesCoordinates\"\r\n    [p-range]=\"range\"\r\n    [p-series]=\"seriesByType['area']\"\r\n    [p-container-size]=\"containerSize\"\r\n    (p-bar-hover)=\"onSerieHover($event)\"\r\n    (p-bar-click)=\"onSerieClick($event)\"\r\n  ></svg:g>\r\n\r\n  <!-- chart column -->\r\n  <svg:g\r\n    *ngIf=\"(type === 'area' || type === 'line' || type === 'column') && seriesByType['column'].length\"\r\n    po-chart-column\r\n    [p-categories]=\"categories\"\r\n    [p-range]=\"range\"\r\n    [p-series]=\"seriesByType['column']\"\r\n    [p-container-size]=\"containerSize\"\r\n    (p-bar-hover)=\"onSerieHover($event)\"\r\n    (p-bar-click)=\"onSerieClick($event)\"\r\n  ></svg:g>\r\n\r\n  <!-- chart line -->\r\n  <svg:g\r\n    *ngIf=\"(type === 'area' || type === 'line' || type === 'column') && seriesByType['line'].length\"\r\n    po-chart-line\r\n    [p-categories]=\"categories\"\r\n    [p-range]=\"range\"\r\n    [p-series]=\"seriesByType['line']\"\r\n    [p-container-size]=\"containerSize\"\r\n    (p-point-hover)=\"onSerieHover($event)\"\r\n    (p-point-click)=\"onSerieClick($event)\"\r\n  ></svg:g>\r\n\r\n  <!-- chart bar -->\r\n  <svg:g\r\n    *ngIf=\"type === 'bar'\"\r\n    po-chart-bar\r\n    [p-categories]=\"categories\"\r\n    [p-range]=\"range\"\r\n    [p-series]=\"seriesByType['bar']\"\r\n    [p-container-size]=\"containerSize\"\r\n    (p-bar-hover)=\"onSerieHover($event)\"\r\n    (p-bar-click)=\"onSerieClick($event)\"\r\n  ></svg:g>\r\n\r\n  <svg:g\r\n    *ngIf=\"type === 'pie'\"\r\n    po-chart-pie\r\n    [p-series]=\"seriesByType['pie']\"\r\n    [p-container-size]=\"containerSize\"\r\n    (p-circular-hover)=\"onSerieHover($event)\"\r\n    (p-circular-click)=\"onSerieClick($event)\"\r\n  ></svg:g>\r\n\r\n  <svg:g\r\n    *ngIf=\"type === 'donut'\"\r\n    po-chart-donut\r\n    [p-options]=\"options\"\r\n    [p-series]=\"seriesByType['donut']\"\r\n    [p-container-size]=\"containerSize\"\r\n    (p-circular-hover)=\"onSerieHover($event)\"\r\n    (p-circular-click)=\"onSerieClick($event)\"\r\n  ></svg:g>\r\n</svg:svg>\r\n" }]
    }], function () { return [{ type: i1.PoChartMathsService }]; }, { categories: [{
            type: Input,
            args: ['p-categories']
        }], type: [{
            type: Input,
            args: ['p-type']
        }], containerSize: [{
            type: Input,
            args: ['p-container-size']
        }], serieClick: [{
            type: Output,
            args: ['p-serie-click']
        }], serieHover: [{
            type: Output,
            args: ['p-serie-hover']
        }], svgELement: [{
            type: ViewChild,
            args: ['svgELement', { static: true }]
        }], options: [{
            type: Input,
            args: ['p-options']
        }], series: [{
            type: Input,
            args: ['p-series']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ094RCw0QkFXQztJQURDLHFOQUE0QixlQUFBLHVDQUFnQyxDQUFBLElBQUM7SUFDOUQsaUJBQVE7OztJQVJQLGlFQUE0Qyx5QkFBQSx1QkFBQSwyQkFBQSwwQ0FBQSxpQ0FBQSxtQ0FBQTs7Ozs7SUFXOUMsNkJBWUM7SUFGQyw2TEFBZSxlQUFBLDRCQUFvQixDQUFBLElBQUMsZ0xBQ3JCLGVBQUEsNEJBQW9CLENBQUEsSUFEQztJQUVyQyxpQkFBUTs7O0lBVFAsaUVBQTRDLGdDQUFBLG1DQUFBLDBEQUFBLHlCQUFBLHlDQUFBLDBDQUFBOzs7OztJQVk5Qyw2QkFTQztJQUZDLDZMQUFlLGVBQUEsNEJBQW9CLENBQUEsSUFBQyxnTEFDckIsZUFBQSw0QkFBb0IsQ0FBQSxJQURDO0lBRXJDLGlCQUFROzs7SUFOUCxnREFBMkIseUJBQUEsMkNBQUEsMENBQUE7Ozs7O0lBUzdCLDZCQVNDO0lBRkMsaU1BQWlCLGVBQUEsNEJBQW9CLENBQUEsSUFBQyxvTEFDckIs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SEFBOEY7UUFZOUYsZUFBb0I7UUFBcEIseUNBQW9CO1FBV3BCLGVBQW9CO1FBQXBCLHlDQUFvQjtRQVNwQixlQUFzQjtRQUF0QiwyQ0FBc0I7O3VGRHJFZCx5QkFBeUI7Y0FKckMsU0FBUzsyQkFDRSxvQkFBb0I7c0VBSVAsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBRUosSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBRVksYUFBYTtrQkFBdkMsS0FBSzttQkFBQyxrQkFBa0I7WUFFQSxVQUFVO2tCQUFsQyxNQUFNO21CQUFDLGVBQWU7WUFFRSxVQUFVO2tCQUFsQyxNQUFNO21CQUFDLGVBQWU7WUFFb0IsVUFBVTtrQkFBcEQsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBYWpCLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVztZQVlLLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGFydFR5cGUgfSBmcm9tICcuLi9lbnVtcy9wby1jaGFydC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0NoYXJ0Q29udGFpbmVyU2l6ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtY29udGFpbmVyLXNpemUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydEF4aXNPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1jaGFydC1heGlzLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydE1hdGhzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BvLWNoYXJ0LW1hdGhzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0TWluTWF4VmFsdWVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1jaGFydC1taW4tbWF4LXZhbHVlcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0U2VyaWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LXNlcmllLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWNoYXJ0LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNoYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2hhcnRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgncC1jYXRlZ29yaWVzJykgY2F0ZWdvcmllczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgQElucHV0KCdwLXR5cGUnKSB0eXBlOiBQb0NoYXJ0VHlwZTtcclxuXHJcbiAgQElucHV0KCdwLWNvbnRhaW5lci1zaXplJykgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemU7XHJcblxyXG4gIEBPdXRwdXQoJ3Atc2VyaWUtY2xpY2snKSBzZXJpZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3Atc2VyaWUtaG92ZXInKSBzZXJpZUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3N2Z0VMZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdmdFTGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBhbGlnbkJ5VGhlQ29ybmVyczogYm9vbGVhbjtcclxuICBheGlzT3B0aW9uczogUG9DaGFydEF4aXNPcHRpb25zO1xyXG4gIGNhdGVnb3JpZXNDb29yZGluYXRlczogQXJyYXk8bnVtYmVyPjtcclxuICByYW5nZTogUG9DaGFydE1pbk1heFZhbHVlcztcclxuICBzZXJpZXNCeVR5cGU7XHJcbiAgc3ZnU3BhY2U7XHJcbiAgdmlld0JveDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9vcHRpb25zOiBQb0NoYXJ0T3B0aW9ucztcclxuICBwcml2YXRlIF9zZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4gPSBbXTtcclxuXHJcbiAgQElucHV0KCdwLW9wdGlvbnMnKSBzZXQgb3B0aW9ucyh2YWx1ZTogUG9DaGFydE9wdGlvbnMpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMudmVyaWZ5QXhpc09wdGlvbnModGhpcy5fb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLXNlcmllcycpIHNldCBzZXJpZXMoZGF0YTogQXJyYXk8UG9DaGFydFNlcmllPikge1xyXG4gICAgdGhpcy5fc2VyaWVzID0gZGF0YTtcclxuICAgIHRoaXMuc2V0QWxpZ25CeVRoZUNvcm5lcnModGhpcy5fc2VyaWVzKTtcclxuICAgIHRoaXMuc2V0U2VyaWVzQnlUeXBlKHRoaXMuX3Nlcmllcyk7XHJcbiAgICB0aGlzLnNldFJhbmdlKHRoaXMuX3NlcmllcywgdGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldCBzZXJpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VyaWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVHlwZUNpcmN1bGFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUG9DaGFydFR5cGUuUGllIHx8IHRoaXMudHlwZSA9PT0gUG9DaGFydFR5cGUuRG9udXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGhzU2VydmljZTogUG9DaGFydE1hdGhzU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudHlwZSB8fCBjaGFuZ2VzLmNvbnRhaW5lclNpemUpIHtcclxuICAgICAgdGhpcy5zZXRWaWV3Qm94KCk7XHJcbiAgICAgIHRoaXMuc2V0U3ZnU3BhY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENhdGVnb3JpZXNDb29yZGluYXRlcyh2YWx1ZTogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzQ29vcmRpbmF0ZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uU2VyaWVDbGljayhldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNlcmllQ2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblNlcmllSG92ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zZXJpZUhvdmVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5nZShzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4sIG9wdGlvbnM6IFBvQ2hhcnRPcHRpb25zID0ge30pOiBQb0NoYXJ0TWluTWF4VmFsdWVzIHtcclxuICAgIGNvbnN0IGRvbWFpbiA9IHRoaXMubWF0aHNTZXJ2aWNlLmNhbGN1bGF0ZU1pbkFuZE1heFZhbHVlcyhzZXJpZXMpO1xyXG4gICAgY29uc3QgbWluVmFsdWUgPVxyXG4gICAgICAhb3B0aW9ucy5heGlzPy5taW5SYW5nZSAmJiBkb21haW4ubWluVmFsdWUgPiAwXHJcbiAgICAgICAgPyAwXHJcbiAgICAgICAgOiBvcHRpb25zLmF4aXM/Lm1pblJhbmdlIDwgZG9tYWluLm1pblZhbHVlXHJcbiAgICAgICAgPyBvcHRpb25zLmF4aXMubWluUmFuZ2VcclxuICAgICAgICA6IGRvbWFpbi5taW5WYWx1ZTtcclxuICAgIGNvbnN0IG1heFZhbHVlID0gb3B0aW9ucy5heGlzPy5tYXhSYW5nZSA+IGRvbWFpbi5tYXhWYWx1ZSA/IG9wdGlvbnMuYXhpcy5tYXhSYW5nZSA6IGRvbWFpbi5tYXhWYWx1ZTtcclxuICAgIGNvbnN0IHVwZGF0ZWREb21haW5WYWx1ZXMgPSB7IG1pblZhbHVlLCBtYXhWYWx1ZSB9O1xyXG5cclxuICAgIHJldHVybiB7IC4uLmRvbWFpbiwgLi4udXBkYXRlZERvbWFpblZhbHVlcyB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdmdTcGFjZSgpIHtcclxuICAgIC8vIFJlcHJlc2VudGEgdW0gcG9udG8gMkQgZGVudHJvIGRvIHZpZXdwb3J0IGRvIFNWRy4gRWxlIMOpIGEgcmVwcmVzZW50YcOnw6NvIGRvIGN1cnNvciBkbyBtb3VzZSBwYXJhIGNvbXBhcmHDp8OjbyBkZSBjb29yZGVuYWRhcyBjb20gY2FkYSBkYWRvIGRlIHPDqXJpZS5cclxuICAgIGNvbnN0IHN2Z1BvaW50ID0gdGhpcy5zdmdFTGVtZW50Lm5hdGl2ZUVsZW1lbnQuY3JlYXRlU1ZHUG9pbnQoKTtcclxuICAgIC8vIFJldG9ybmEgdW0gRE9NTWF0cml4IHJlcHJlc2VudGFuZG8gYXMgbWF0cml6ZXMgMkQgZSAzRCB0cmFuc2Zvcm1hZGFzIGEgcGFydGlyIGRhcyBjb29yZGVuYWRhcyBkbyBlbGVtZW50bywgZW0gcmVsYcOnw6NvIGFvIGRvY3VtZW50LCBwYXJhIGNvb3JkZW5hZGFzIHJlbGF0aXZhcyBhbyB2aWV3cG9ydCBkbyBTVkcuXHJcbiAgICAvLyDDiSB1dGlsaXphZG8gbm9zIGdyw6FmaWNvcyBkbyB0aXBvIMOhcmVhIHBhcmEgcXVlIHNlamEgcG9zc8OtdmVsIGVxdWlwYXJhciBhcyBjb29yZGVuYWRhcyBkbyBldmVudG8gY29tIGNhZGEgZGFkbyBkZSBzw6lyaWUsIHBhcmEgYXNzaW0gYXRpdmFyIG8gcG9udG8gZGUgZGFkbyBlcXVpdmFsZW50ZS5cclxuICAgIGNvbnN0IHN2Z0RvbU1hdHJpeCA9IHRoaXMuc3ZnRUxlbWVudC5uYXRpdmVFbGVtZW50LmdldFNjcmVlbkNUTSgpPy5pbnZlcnNlKCk7XHJcblxyXG4gICAgdGhpcy5zdmdTcGFjZSA9IHsgc3ZnUG9pbnQsIHN2Z0RvbU1hdHJpeCB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBbGlnbkJ5VGhlQ29ybmVycyhzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4pOiB2b2lkIHtcclxuICAgIHRoaXMuYWxpZ25CeVRoZUNvcm5lcnMgPSBzZXJpZXMuZXZlcnkoc2VyaWUgPT4gc2VyaWUudHlwZSA9PT0gUG9DaGFydFR5cGUuQXJlYSB8fCBzZXJpZS50eXBlID09PSBQb0NoYXJ0VHlwZS5CYXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSYW5nZShzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4sIG9wdGlvbnM6IFBvQ2hhcnRPcHRpb25zID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1R5cGVDaXJjdWxhcikge1xyXG4gICAgICB0aGlzLnJhbmdlID0gdGhpcy5nZXRSYW5nZShzZXJpZXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTZXJpZXNCeVR5cGUoc2VyaWVzOiBBcnJheTxQb0NoYXJ0U2VyaWU+KSB7XHJcbiAgICB0aGlzLnNlcmllc0J5VHlwZSA9IHtcclxuICAgICAgW1BvQ2hhcnRUeXBlLkFyZWFdOiBzZXJpZXMuZmlsdGVyKHNlcmllID0+IHNlcmllLnR5cGUgPT09IFBvQ2hhcnRUeXBlLkFyZWEpLFxyXG4gICAgICBbUG9DaGFydFR5cGUuQ29sdW1uXTogc2VyaWVzLmZpbHRlcihzZXJpZSA9PiBzZXJpZS50eXBlID09PSBQb0NoYXJ0VHlwZS5Db2x1bW4pLFxyXG4gICAgICBbUG9DaGFydFR5cGUuQmFyXTogc2VyaWVzLmZpbHRlcihzZXJpZSA9PiBzZXJpZS50eXBlID09PSBQb0NoYXJ0VHlwZS5CYXIpLFxyXG4gICAgICBbUG9DaGFydFR5cGUuTGluZV06IHNlcmllcy5maWx0ZXIoc2VyaWUgPT4gc2VyaWUudHlwZSA9PT0gUG9DaGFydFR5cGUuTGluZSksXHJcbiAgICAgIFtQb0NoYXJ0VHlwZS5Eb251dF06IHNlcmllcy5maWx0ZXIoc2VyaWUgPT4gc2VyaWUudHlwZSA9PT0gUG9DaGFydFR5cGUuRG9udXQpLFxyXG4gICAgICBbUG9DaGFydFR5cGUuUGllXTogc2VyaWVzLmZpbHRlcihzZXJpZSA9PiBzZXJpZS50eXBlID09PSBQb0NoYXJ0VHlwZS5QaWUpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWaWV3Qm94KCkge1xyXG4gICAgY29uc3QgeyBzdmdXaWR0aCwgc3ZnSGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lclNpemU7XHJcbiAgICBjb25zdCB2aWV3Qm94V2lkdGggPSB0aGlzLmlzVHlwZUNpcmN1bGFyID8gc3ZnSGVpZ2h0IDogc3ZnV2lkdGg7XHJcbiAgICAvLyBUcmF0YW1lbnRvIG5lY2Vzc8OhcmlvIHBhcmEgcXVlIG7Do28gY29ydGUgbyB2ZXRvciBuYXMgZXh0cmVtaWRhZGVzXHJcbiAgICBjb25zdCBvZmZzZXRYWSA9IDE7XHJcblxyXG4gICAgdGhpcy52aWV3Qm94ID0gYCR7b2Zmc2V0WFl9IC0ke29mZnNldFhZfSAke3ZpZXdCb3hXaWR0aH0gJHt0aGlzLmNvbnRhaW5lclNpemUuc3ZnSGVpZ2h0fWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeUF4aXNPcHRpb25zKG9wdGlvbnM6IFBvQ2hhcnRPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNUeXBlQ2lyY3VsYXIgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYXhpcycpKSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLmdldFJhbmdlKHRoaXMuc2VyaWVzLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICB0aGlzLmF4aXNPcHRpb25zID0ge1xyXG4gICAgICAgIC4uLnRoaXMuYXhpc09wdGlvbnMsXHJcbiAgICAgICAgLi4ub3B0aW9ucy5heGlzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6c3ZnXHJcbiAgI3N2Z0VMZW1lbnRcclxuICBjbGFzcz1cInBvLWNoYXJ0LXN2Zy1lbGVtZW50XCJcclxuICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaW4gbWVldFwiXHJcbiAgW2F0dHIudmlld0JveF09XCJ2aWV3Qm94XCJcclxuICBbYXR0ci53aWR0aF09XCJjb250YWluZXJTaXplLnN2Z1dpZHRoXCJcclxuICBbYXR0ci5oZWlnaHRdPVwiY29udGFpbmVyU2l6ZS5zdmdIZWlnaHRcIlxyXG4+XHJcbiAgPCEtLSBheGlzIC0tPlxyXG4gIDxzdmc6Z1xyXG4gICAgKm5nSWY9XCIhaXNUeXBlQ2lyY3VsYXJcIlxyXG4gICAgcG8tY2hhcnQtYXhpc1xyXG4gICAgW3AtYWxpZ24tYnktdGhlLWNvcm5lcnNdPVwiYWxpZ25CeVRoZUNvcm5lcnNcIlxyXG4gICAgW3AtcmFuZ2VdPVwicmFuZ2VcIlxyXG4gICAgW3AtdHlwZV09XCJ0eXBlXCJcclxuICAgIFtwLXNlcmllc109XCJzZXJpZXNcIlxyXG4gICAgW3AtY29udGFpbmVyLXNpemVdPVwiY29udGFpbmVyU2l6ZVwiXHJcbiAgICBbcC1vcHRpb25zXT1cImF4aXNPcHRpb25zXCJcclxuICAgIFtwLWNhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAocC1jYXRlZ29yaWVzLWNvb3JkaW5hdGVzKT1cImdldENhdGVnb3JpZXNDb29yZGluYXRlcygkZXZlbnQpXCJcclxuICA+PC9zdmc6Zz5cclxuXHJcbiAgPCEtLSBjaGFydCBhcmVhIC0tPlxyXG4gIDxzdmc6Z1xyXG4gICAgKm5nSWY9XCIodHlwZSA9PT0gJ2FyZWEnIHx8IHR5cGUgPT09ICdsaW5lJyB8fCB0eXBlID09PSAnY29sdW1uJykgJiYgc2VyaWVzQnlUeXBlWydhcmVhJ10ubGVuZ3RoXCJcclxuICAgIHBvLWNoYXJ0LWFyZWFcclxuICAgIFtwLWFsaWduLWJ5LXRoZS1jb3JuZXJzXT1cImFsaWduQnlUaGVDb3JuZXJzXCJcclxuICAgIFtwLXN2Zy1zcGFjZV09XCJzdmdTcGFjZVwiXHJcbiAgICBbcC1jYXRlZ29yaWVzXT1cImNhdGVnb3JpZXNcIlxyXG4gICAgW3AtY2F0ZWdvcmllcy1jb29yZGluYXRlc109XCJjYXRlZ29yaWVzQ29vcmRpbmF0ZXNcIlxyXG4gICAgW3AtcmFuZ2VdPVwicmFuZ2VcIlxyXG4gICAgW3Atc2VyaWVzXT1cInNlcmllc0J5VHlwZVsnYXJlYSddXCJcclxuICAgIFtwLWNvbnRhaW5lci1zaXplXT1cImNvbnRhaW5lclNpemVcIlxyXG4gICAgKHAtYmFyLWhvdmVyKT1cIm9uU2VyaWVIb3ZlcigkZXZlbnQpXCJcclxuICAgIChwLWJhci1jbGljayk9XCJvblNlcmllQ2xpY2soJGV2ZW50KVwiXHJcbiAgPjwvc3ZnOmc+XHJcblxyXG4gIDwhLS0gY2hhcnQgY29sdW1uIC0tPlxyXG4gIDxzdmc6Z1xyXG4gICAgKm5nSWY9XCIodHlwZSA9PT0gJ2FyZWEnIHx8IHR5cGUgPT09ICdsaW5lJyB8fCB0eXBlID09PSAnY29sdW1uJykgJiYgc2VyaWVzQnlUeXBlWydjb2x1bW4nXS5sZW5ndGhcIlxyXG4gICAgcG8tY2hhcnQtY29sdW1uXHJcbiAgICBbcC1jYXRlZ29yaWVzXT1cImNhdGVnb3JpZXNcIlxyXG4gICAgW3AtcmFuZ2VdPVwicmFuZ2VcIlxyXG4gICAgW3Atc2VyaWVzXT1cInNlcmllc0J5VHlwZVsnY29sdW1uJ11cIlxyXG4gICAgW3AtY29udGFpbmVyLXNpemVdPVwiY29udGFpbmVyU2l6ZVwiXHJcbiAgICAocC1iYXItaG92ZXIpPVwib25TZXJpZUhvdmVyKCRldmVudClcIlxyXG4gICAgKHAtYmFyLWNsaWNrKT1cIm9uU2VyaWVDbGljaygkZXZlbnQpXCJcclxuICA+PC9zdmc6Zz5cclxuXHJcbiAgPCEtLSBjaGFydCBsaW5lIC0tPlxyXG4gIDxzdmc6Z1xyXG4gICAgKm5nSWY9XCIodHlwZSA9PT0gJ2FyZWEnIHx8IHR5cGUgPT09ICdsaW5lJyB8fCB0eXBlID09PSAnY29sdW1uJykgJiYgc2VyaWVzQnlUeXBlWydsaW5lJ10ubGVuZ3RoXCJcclxuICAgIHBvLWNoYXJ0LWxpbmVcclxuICAgIFtwLWNhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiXHJcbiAgICBbcC1yYW5nZV09XCJyYW5nZVwiXHJcbiAgICBbcC1zZXJpZXNdPVwic2VyaWVzQnlUeXBlWydsaW5lJ11cIlxyXG4gICAgW3AtY29udGFpbmVyLXNpemVdPVwiY29udGFpbmVyU2l6ZVwiXHJcbiAgICAocC1wb2ludC1ob3Zlcik9XCJvblNlcmllSG92ZXIoJGV2ZW50KVwiXHJcbiAgICAocC1wb2ludC1jbGljayk9XCJvblNlcmllQ2xpY2soJGV2ZW50KVwiXHJcbiAgPjwvc3ZnOmc+XHJcblxyXG4gIDwhLS0gY2hhcnQgYmFyIC0tPlxyXG4gIDxzdmc6Z1xyXG4gICAgKm5nSWY9XCJ0eXBlID09PSAnYmFyJ1wiXHJcbiAgICBwby1jaGFydC1iYXJcclxuICAgIFtwLWNhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiXHJcbiAgICBbcC1yYW5nZV09XCJyYW5nZVwiXHJcbiAgICBbcC1zZXJpZXNdPVwic2VyaWVzQnlUeXBlWydiYXInXVwiXHJcbiAgICBbcC1jb250YWluZXItc2l6ZV09XCJjb250YWluZXJTaXplXCJcclxuICAgIChwLWJhci1ob3Zlcik9XCJvblNlcmllSG92ZXIoJGV2ZW50KVwiXHJcbiAgICAocC1iYXItY2xpY2spPVwib25TZXJpZUNsaWNrKCRldmVudClcIlxyXG4gID48L3N2ZzpnPlxyXG5cclxuICA8c3ZnOmdcclxuICAgICpuZ0lmPVwidHlwZSA9PT0gJ3BpZSdcIlxyXG4gICAgcG8tY2hhcnQtcGllXHJcbiAgICBbcC1zZXJpZXNdPVwic2VyaWVzQnlUeXBlWydwaWUnXVwiXHJcbiAgICBbcC1jb250YWluZXItc2l6ZV09XCJjb250YWluZXJTaXplXCJcclxuICAgIChwLWNpcmN1bGFyLWhvdmVyKT1cIm9uU2VyaWVIb3ZlcigkZXZlbnQpXCJcclxuICAgIChwLWNpcmN1bGFyLWNsaWNrKT1cIm9uU2VyaWVDbGljaygkZXZlbnQpXCJcclxuICA+PC9zdmc6Zz5cclxuXHJcbiAgPHN2ZzpnXHJcbiAgICAqbmdJZj1cInR5cGUgPT09ICdkb251dCdcIlxyXG4gICAgcG8tY2hhcnQtZG9udXRcclxuICAgIFtwLW9wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICBbcC1zZXJpZXNdPVwic2VyaWVzQnlUeXBlWydkb251dCddXCJcclxuICAgIFtwLWNvbnRhaW5lci1zaXplXT1cImNvbnRhaW5lclNpemVcIlxyXG4gICAgKHAtY2lyY3VsYXItaG92ZXIpPVwib25TZXJpZUhvdmVyKCRldmVudClcIlxyXG4gICAgKHAtY2lyY3VsYXItY2xpY2spPVwib25TZXJpZUNsaWNrKCRldmVudClcIlxyXG4gID48L3N2ZzpnPlxyXG48L3N2Zzpzdmc+XHJcbiJdfQ==