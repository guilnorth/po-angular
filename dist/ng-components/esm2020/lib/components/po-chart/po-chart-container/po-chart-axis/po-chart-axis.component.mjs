import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PoChartGridLines, PoChartPadding, PoChartPlotAreaPaddingTop } from '../../helpers/po-chart-default-values.constant';
import { PoChartType } from '../../enums/po-chart-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-chart-maths.service";
import * as i2 from "./po-chart-axis-path/po-chart-axis-path.component";
import * as i3 from "./po-chart-axis-label/po-chart-axis-label.component";
const _c0 = ["po-chart-axis", ""];
export class PoChartAxisComponent {
    constructor(mathsService) {
        this.mathsService = mathsService;
        this.alignByTheCorners = false;
        this.categoriesCoordinates = new EventEmitter();
        this.axisXLabels = [];
        this.axisYLabels = [];
        this.gridLines = PoChartGridLines;
        this.seriesLength = 0;
        this._categories = [];
        this._containerSize = {};
        this._series = [];
    }
    set series(seriesList) {
        const seriesDataArrayFilter = seriesList.filter(serie => Array.isArray(serie.data));
        if (seriesDataArrayFilter.length) {
            this._series = seriesDataArrayFilter;
            this.seriesLength = this.mathsService.seriesGreaterLength(this.series);
            this.checkAxisOptions(this.axisOptions);
            this.setAxisXCoordinates(this.gridLines, this.seriesLength, this.containerSize, this.range, this.type);
            this.setAxisYCoordinates(this.gridLines, this.seriesLength, this.containerSize, this.range, this.type);
        }
        else {
            this._series = [];
            this.cleanUpCoordinates();
        }
    }
    get series() {
        return this._series;
    }
    set categories(value) {
        this._categories = value;
        if (this.type === PoChartType.Bar) {
            this.setAxisXCoordinates(this.gridLines, this.seriesLength, this.containerSize, this.range, this.type);
        }
        else {
            this.setAxisYCoordinates(this.gridLines, this.seriesLength, this.containerSize, this.range, this.type);
        }
    }
    get categories() {
        return this._categories;
    }
    set containerSize(value) {
        this._containerSize = value;
        this.checkAxisOptions(this.axisOptions);
        this.setAxisXCoordinates(this.gridLines, this.seriesLength, this._containerSize, this.range, this.type);
        this.setAxisYCoordinates(this.gridLines, this.seriesLength, this._containerSize, this.range, this.type);
    }
    get containerSize() {
        return this._containerSize;
    }
    set axisOptions(value) {
        this._axisOptions = value;
        this.checkAxisOptions(this._axisOptions);
        if (this.type === PoChartType.Bar) {
            this.setAxisYCoordinates(this.gridLines, this.seriesLength, this.containerSize, this.range, this.type);
        }
        else {
            this.setAxisXCoordinates(this.gridLines, this.seriesLength, this.containerSize, this.range, this.type);
        }
    }
    get axisOptions() {
        return this._axisOptions;
    }
    setAxisXCoordinates(gridLines, seriesLength, containerSize, minMaxAxisValues, type) {
        if (seriesLength) {
            const amountOfAxisLabels = type === PoChartType.Bar ? seriesLength : gridLines;
            this.calculateAxisXLabelCoordinates(amountOfAxisLabels, containerSize, minMaxAxisValues, type);
        }
        const amountOfAxisXLines = this.amountOfAxisXLines(seriesLength, gridLines, type);
        this.calculateAxisXCoordinates(amountOfAxisXLines, containerSize, minMaxAxisValues);
    }
    amountOfAxisXLines(seriesLength, gridLines, type) {
        if (type === PoChartType.Bar) {
            return seriesLength <= 1 ? 2 : seriesLength + 1;
        }
        return gridLines === 0 ? 1 : gridLines;
    }
    setAxisYCoordinates(gridLines, seriesLength, containerSize, minMaxAxisValues, type) {
        const amountOfAxisY = type === PoChartType.Bar ? gridLines : seriesLength;
        if (seriesLength) {
            this.calculateAxisYLabelCoordinates(amountOfAxisY, containerSize, minMaxAxisValues, type);
        }
        if (type === PoChartType.Area) {
            this.getCategoriesRangeForMouseMove(amountOfAxisY, containerSize);
        }
        this.calculateAxisYCoordinates(amountOfAxisY, containerSize, type, minMaxAxisValues);
    }
    calculateAxisXCoordinates(amountOfAxisX, containerSize, range) {
        const startX = containerSize.axisXLabelWidth;
        const endX = containerSize.svgWidth;
        let coordinatesReferedToZero;
        let coordinatesList = [...Array(amountOfAxisX)].map((_, index) => {
            const yCoordinate = this.calculateAxisXCoordinateY(amountOfAxisX, containerSize, index);
            const coordinates = `M${startX} ${yCoordinate} L${endX}, ${yCoordinate}`;
            return { coordinates };
        });
        // Avalia a necessidade de adicionar a linha referente ao valor zero em gráficos do tipo `column`, `area` e `line`.
        if (this.type !== PoChartType.Bar && range.minValue < 0 && !this.axisXLabels.includes('0')) {
            coordinatesReferedToZero = this.getCoordinatesRelatedToZero(containerSize, range, startX, endX);
            coordinatesList = [...coordinatesList, coordinatesReferedToZero];
        }
        this.axisXCoordinates = coordinatesList;
    }
    getCoordinatesRelatedToZero(containerSize, range, start, end, isAxisY = false) {
        const type = isAxisY ? PoChartType.Bar : PoChartType.Column;
        const basePosition = this.axisCoordinatesForValueZero(range, 0, containerSize, isAxisY);
        const coordinates = {
            column: {
                startX: start,
                endX: end,
                startY: basePosition,
                endY: basePosition
            },
            bar: {
                startX: basePosition,
                endX: basePosition,
                startY: start,
                endY: end
            }
        };
        return {
            coordinates: `M${coordinates[type].startX} ${coordinates[type].startY} L${coordinates[type].endX} ${coordinates[type].endY}`
        };
    }
    axisCoordinatesForValueZero(range, data, containerSize, isAxisY) {
        const { axisXLabelWidth, svgWidth, svgPlottingAreaHeight } = containerSize;
        const ratio = this.mathsService.getSeriePercentage(range, data);
        return Math.floor(isAxisY
            ? axisXLabelWidth + (svgWidth - axisXLabelWidth) * ratio
            : svgPlottingAreaHeight - svgPlottingAreaHeight * ratio + PoChartPlotAreaPaddingTop);
    }
    calculateAxisXLabelCoordinates(amountOfAxisX, containerSize, minMaxAxisValues, type) {
        this.axisXLabels = this.getAxisXLabels(type, minMaxAxisValues, amountOfAxisX);
        this.axisXLabelCoordinates = [...Array(amountOfAxisX)].map((_, index) => {
            const label = this.axisXLabels[index];
            const xCoordinate = this.calculateAxisXLabelXCoordinate(containerSize.axisXLabelWidth);
            const yCoordinate = this.calculateAxisXLabelYCoordinate(amountOfAxisX, containerSize, type, index);
            return { label, xCoordinate, yCoordinate };
        });
    }
    calculateAxisYCoordinates(amountOfAxisY, containerSize, type, range) {
        const startY = PoChartPlotAreaPaddingTop;
        const endY = containerSize.svgPlottingAreaHeight + PoChartPlotAreaPaddingTop;
        // tratamento necessário para criar uma linha a mais para fechar o gráfico
        const length = amountOfAxisY === 0 || type === PoChartType.Bar ? amountOfAxisY : amountOfAxisY + 1;
        let coordinatesReferedToZero;
        let coordinatesList = [...Array(length)].map((_, index) => {
            const xCoordinate = this.calculateAxisYCoordinateX(containerSize, amountOfAxisY, index);
            const coordinates = `M${xCoordinate} ${startY} L${xCoordinate}, ${endY}`;
            return { coordinates };
        });
        // Avalia a necessidade de adicionar a linha referente ao valor zero em gráficos do tipo `bar`.
        if (type === PoChartType.Bar && range.minValue < 0 && !this.axisYLabels.includes('0')) {
            coordinatesReferedToZero = this.getCoordinatesRelatedToZero(containerSize, range, startY, endY, true);
            coordinatesList = [...coordinatesList, coordinatesReferedToZero];
        }
        this.axisYCoordinates = [...coordinatesList];
    }
    calculateAxisYLabelCoordinates(amountOfAxisY, containerSize, minMaxAxisValues, type) {
        this.axisYLabels = this.getAxisYLabels(type, minMaxAxisValues, amountOfAxisY);
        this.axisYLabelCoordinates = [...Array(amountOfAxisY)].map((_, index) => {
            const label = this.axisYLabels[index];
            const xCoordinate = this.getAxisXCoordinates(containerSize, amountOfAxisY, type, index);
            const yCoordinate = this.calculateAxisYLabelYCoordinate(containerSize);
            return { label, xCoordinate, yCoordinate };
        });
    }
    calculateAxisXLabelXCoordinate(axisXLabelWidth) {
        const labelPoChartPadding = PoChartPadding / 3;
        return axisXLabelWidth - labelPoChartPadding;
    }
    calculateAxisXLabelYCoordinate(amountOfAxisX, containerSize, type, index) {
        const amountOfLines = type === PoChartType.Bar ? amountOfAxisX : amountOfAxisX - 1;
        const yRatio = index / amountOfLines;
        if (type !== PoChartType.Bar) {
            return (containerSize.svgPlottingAreaHeight - containerSize.svgPlottingAreaHeight * yRatio + PoChartPlotAreaPaddingTop);
        }
        const halfCategoryHeight = containerSize.svgPlottingAreaHeight / amountOfAxisX / 2;
        return (containerSize.svgPlottingAreaHeight -
            halfCategoryHeight -
            containerSize.svgPlottingAreaHeight * yRatio +
            PoChartPlotAreaPaddingTop);
    }
    calculateAxisXCoordinateY(amountOfAxisX, containerSize, index) {
        const yRatio = index / (amountOfAxisX - 1);
        return (containerSize.svgPlottingAreaHeight - containerSize.svgPlottingAreaHeight * yRatio + PoChartPlotAreaPaddingTop);
    }
    calculateAxisYLabelYCoordinate(containerSize) {
        const textPoChartPadding = PoChartPadding / 3;
        return containerSize.svgHeight - textPoChartPadding;
    }
    centeredInCategoryArea(containerSize, amountOfAxisY, type, index) {
        const amountOfLines = type === PoChartType.Bar ? amountOfAxisY - 1 : amountOfAxisY;
        const xRatio = index / amountOfLines;
        if (type === PoChartType.Bar) {
            return Math.round(containerSize.axisXLabelWidth + (containerSize.svgWidth - containerSize.axisXLabelWidth) * xRatio);
        }
        const halfCategoryWidth = (containerSize.svgWidth - containerSize.axisXLabelWidth) / amountOfAxisY / 2;
        return Math.round(containerSize.axisXLabelWidth +
            halfCategoryWidth +
            (containerSize.svgWidth - containerSize.axisXLabelWidth) * xRatio);
    }
    calculateAxisYCoordinateX(containerSize, amountOfAxisY, index, subtractCategoryWidth = false) {
        const amountOfLines = this.alignByTheCorners ? amountOfAxisY - 1 : amountOfAxisY;
        const halfCategoryWidth = this.alignByTheCorners && subtractCategoryWidth
            ? (containerSize.svgWidth - containerSize.axisXLabelWidth) / (amountOfAxisY - 1) / 2
            : 0;
        const divideIndexByAmountOfLines = index / amountOfLines;
        const xRatio = divideIndexByAmountOfLines === Infinity ? 0 : divideIndexByAmountOfLines;
        return Math.round(containerSize.axisXLabelWidth +
            (containerSize.svgWidth - containerSize.axisXLabelWidth) * xRatio -
            halfCategoryWidth);
    }
    checkAxisOptions(options = {}) {
        this.gridLines =
            options.gridLines && this.isValidGridLinesLengthOption(options.gridLines) ? options.gridLines : PoChartGridLines;
    }
    cleanUpCoordinates() {
        this.axisXCoordinates = [];
        this.axisYCoordinates = [];
        this.axisXLabelCoordinates = [];
        this.axisYLabelCoordinates = [];
        this.seriesLength = 0;
    }
    getAxisXCoordinates(containerSize, amountOfAxisY, type, index) {
        return this.alignByTheCorners
            ? this.calculateAxisYCoordinateX(containerSize, amountOfAxisY, index)
            : this.centeredInCategoryArea(containerSize, amountOfAxisY, type, index);
    }
    getCategoriesRangeForMouseMove(amountOfAxisY, containerSize) {
        const categoriesCoordinates = [...Array(amountOfAxisY)].map((_, index) => this.calculateAxisYCoordinateX(containerSize, amountOfAxisY, index, true));
        this.categoriesCoordinates.emit(categoriesCoordinates);
    }
    isValidGridLinesLengthOption(gridLines) {
        return gridLines >= 2 && gridLines <= 10;
    }
    getAxisXLabels(type, minMaxAxisValues, amountOfAxisX) {
        if (type === PoChartType.Bar) {
            const axisXLabelsList = this.formatCategoriesLabels(amountOfAxisX, this.categories);
            return axisXLabelsList.reverse();
        }
        return this.generateAverageOfLabels(minMaxAxisValues, amountOfAxisX);
    }
    getAxisYLabels(type, minMaxAxisValues, amountOfAxisX) {
        return type === PoChartType.Bar
            ? this.generateAverageOfLabels(minMaxAxisValues, amountOfAxisX)
            : this.formatCategoriesLabels(amountOfAxisX, this.categories);
    }
    formatCategoriesLabels(amountOfAxisX, categories = []) {
        return [...Array(amountOfAxisX)].map((_, index) => categories[index] ?? '-');
    }
    generateAverageOfLabels(minMaxAxisValues, amountOfAxisLines) {
        const averageLabelsList = this.mathsService.range(minMaxAxisValues, amountOfAxisLines);
        return averageLabelsList.map(label => {
            const formattedDigit = label.toFixed(label % 1 && 2);
            // Remove dígitos com zero.
            // Também trata caso quando o valor retornado era -0, substituindo-o por 0.
            const removeZeroDigits = formattedDigit.replace(/\.00$/, '').replace(/\-0$/, 0);
            return removeZeroDigits.toString();
        });
    }
}
PoChartAxisComponent.ɵfac = function PoChartAxisComponent_Factory(t) { return new (t || PoChartAxisComponent)(i0.ɵɵdirectiveInject(i1.PoChartMathsService)); };
PoChartAxisComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartAxisComponent, selectors: [["", "po-chart-axis", ""]], inputs: { alignByTheCorners: ["p-align-by-the-corners", "alignByTheCorners"], type: ["p-type", "type"], range: ["p-range", "range"], series: ["p-series", "series"], categories: ["p-categories", "categories"], containerSize: ["p-container-size", "containerSize"], axisOptions: ["p-options", "axisOptions"] }, outputs: { categoriesCoordinates: "p-categories-coordinates" }, attrs: _c0, decls: 2, vars: 6, consts: [["po-chart-axis-path", "", 3, "p-axis-x-coordinates", "p-axis-y-coordinates"], ["po-chart-axis-label", "", 3, "p-align-by-the-corners", "p-axis-x-label-coordinates", "p-axis-y-label-coordinates", "p-type"]], template: function PoChartAxisComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "g", 0)(1, "g", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("p-axis-x-coordinates", ctx.axisXCoordinates)("p-axis-y-coordinates", ctx.axisYCoordinates);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-align-by-the-corners", ctx.alignByTheCorners)("p-axis-x-label-coordinates", ctx.axisXLabelCoordinates)("p-axis-y-label-coordinates", ctx.axisYLabelCoordinates)("p-type", ctx.type);
    } }, dependencies: [i2.PoChartAxisPathComponent, i3.PoChartAxisLabelComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartAxisComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-axis]', template: "<svg:g po-chart-axis-path [p-axis-x-coordinates]=\"axisXCoordinates\" [p-axis-y-coordinates]=\"axisYCoordinates\"></svg:g>\r\n\r\n<svg:g po-chart-axis-label \r\n  [p-align-by-the-corners]=\"alignByTheCorners\" \r\n  [p-axis-x-label-coordinates]=\"axisXLabelCoordinates\" \r\n  [p-axis-y-label-coordinates]=\"axisYLabelCoordinates\" \r\n  [p-type]=\"type\"\r\n  >\r\n</svg:g>" }]
    }], function () { return [{ type: i1.PoChartMathsService }]; }, { alignByTheCorners: [{
            type: Input,
            args: ['p-align-by-the-corners']
        }], type: [{
            type: Input,
            args: ['p-type']
        }], range: [{
            type: Input,
            args: ['p-range']
        }], categoriesCoordinates: [{
            type: Output,
            args: ['p-categories-coordinates']
        }], series: [{
            type: Input,
            args: ['p-series']
        }], categories: [{
            type: Input,
            args: ['p-categories']
        }], containerSize: [{
            type: Input,
            args: ['p-container-size']
        }], axisOptions: [{
            type: Input,
            args: ['p-options']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWF4aXMvcG8tY2hhcnQtYXhpcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWF4aXMvcG8tY2hhcnQtYXhpcy5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QseUJBQXlCLEVBQzFCLE1BQU0sZ0RBQWdELENBQUM7QUFReEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFNN0QsTUFBTSxPQUFPLG9CQUFvQjtJQXNGL0IsWUFBb0IsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBckZwQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFNaEMsMEJBQXFCLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFPcEcsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFDckMsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFHekIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLG1CQUFjLEdBQXlCLEVBQUUsQ0FBQztRQUMxQyxZQUFPLEdBQWUsRUFBRSxDQUFDO0lBZ0V1QixDQUFDO0lBOUR6RCxJQUF1QixNQUFN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QUFDLFFBQVE7WUFFRyxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFb0IscUJBQXFCO2tCQUF4RCxNQUFNO21CQUFDLDBCQUEwQjtZQWlCWCxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFvQlUsVUFBVTtrQkFBcEMsS0FBSzttQkFBQyxjQUFjO1lBY1UsYUFBYTtrQkFBM0MsS0FBSzttQkFBQyxrQkFBa0I7WUFZRCxXQUFXO2tCQUFsQyxLQUFLO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0NoYXJ0R3JpZExpbmVzLFxyXG4gIFBvQ2hhcnRQYWRkaW5nLFxyXG4gIFBvQ2hhcnRQbG90QXJlYVBhZGRpbmdUb3BcclxufSBmcm9tICcuLi8uLi9oZWxwZXJzL3BvLWNoYXJ0LWRlZmF1bHQtdmFsdWVzLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRNYXRoc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1jaGFydC1tYXRocy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9DaGFydENvbnRhaW5lclNpemUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LWNvbnRhaW5lci1zaXplLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRNaW5NYXhWYWx1ZXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LW1pbi1tYXgtdmFsdWVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LXBhdGgtY29vcmRpbmF0ZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydExhYmVsQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LWxhYmVsLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRBeGlzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtYXhpcy1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vZW51bXMvcG8tY2hhcnQtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3BvLWNoYXJ0LWF4aXNdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hhcnQtYXhpcy5jb21wb25lbnQuc3ZnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydEF4aXNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1hbGlnbi1ieS10aGUtY29ybmVycycpIGFsaWduQnlUaGVDb3JuZXJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgncC10eXBlJykgdHlwZTogUG9DaGFydFR5cGU7XHJcblxyXG4gIEBJbnB1dCgncC1yYW5nZScpIHJhbmdlOiBQb0NoYXJ0TWluTWF4VmFsdWVzO1xyXG5cclxuICBAT3V0cHV0KCdwLWNhdGVnb3JpZXMtY29vcmRpbmF0ZXMnKSBjYXRlZ29yaWVzQ29vcmRpbmF0ZXM6IEV2ZW50RW1pdHRlcjxBcnJheTxudW1iZXI+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgYXhpc1hDb29yZGluYXRlczogQXJyYXk8UG9DaGFydFBhdGhDb29yZGluYXRlcz47XHJcbiAgYXhpc1hMYWJlbENvb3JkaW5hdGVzOiBBcnJheTxQb0NoYXJ0TGFiZWxDb29yZGluYXRlcz47XHJcbiAgYXhpc1lDb29yZGluYXRlczogQXJyYXk8UG9DaGFydFBhdGhDb29yZGluYXRlcz47XHJcbiAgYXhpc1lMYWJlbENvb3JkaW5hdGVzOiBBcnJheTxQb0NoYXJ0TGFiZWxDb29yZGluYXRlcz47XHJcblxyXG4gIHByaXZhdGUgYXhpc1hMYWJlbHM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwcml2YXRlIGF4aXNZTGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgcHJpdmF0ZSBncmlkTGluZXM6IG51bWJlciA9IFBvQ2hhcnRHcmlkTGluZXM7XHJcbiAgcHJpdmF0ZSBzZXJpZXNMZW5ndGg6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgX2F4aXNPcHRpb25zOiBQb0NoYXJ0QXhpc09wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfY2F0ZWdvcmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIHByaXZhdGUgX2NvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplID0ge307XHJcbiAgcHJpdmF0ZSBfc2VyaWVzOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gIEBJbnB1dCgncC1zZXJpZXMnKSBzZXQgc2VyaWVzKHNlcmllc0xpc3Q6IEFycmF5PGFueT4pIHtcclxuICAgIGNvbnN0IHNlcmllc0RhdGFBcnJheUZpbHRlciA9IHNlcmllc0xpc3QuZmlsdGVyKHNlcmllID0+IEFycmF5LmlzQXJyYXkoc2VyaWUuZGF0YSkpO1xyXG5cclxuICAgIGlmIChzZXJpZXNEYXRhQXJyYXlGaWx0ZXIubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3NlcmllcyA9IHNlcmllc0RhdGFBcnJheUZpbHRlcjtcclxuXHJcbiAgICAgIHRoaXMuc2VyaWVzTGVuZ3RoID0gdGhpcy5tYXRoc1NlcnZpY2Uuc2VyaWVzR3JlYXRlckxlbmd0aCh0aGlzLnNlcmllcyk7XHJcbiAgICAgIHRoaXMuY2hlY2tBeGlzT3B0aW9ucyh0aGlzLmF4aXNPcHRpb25zKTtcclxuICAgICAgdGhpcy5zZXRBeGlzWENvb3JkaW5hdGVzKHRoaXMuZ3JpZExpbmVzLCB0aGlzLnNlcmllc0xlbmd0aCwgdGhpcy5jb250YWluZXJTaXplLCB0aGlzLnJhbmdlLCB0aGlzLnR5cGUpO1xyXG4gICAgICB0aGlzLnNldEF4aXNZQ29vcmRpbmF0ZXModGhpcy5ncmlkTGluZXMsIHRoaXMuc2VyaWVzTGVuZ3RoLCB0aGlzLmNvbnRhaW5lclNpemUsIHRoaXMucmFuZ2UsIHRoaXMudHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXJpZXMgPSBbXTtcclxuICAgICAgdGhpcy5jbGVhblVwQ29vcmRpbmF0ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZXJpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VyaWVzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLWNhdGVnb3JpZXMnKSBzZXQgY2F0ZWdvcmllcyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFBvQ2hhcnRUeXBlLkJhcikge1xyXG4gICAgICB0aGlzLnNldEF4aXNYQ29vcmRpbmF0ZXModGhpcy5ncmlkTGluZXMsIHRoaXMuc2VyaWVzTGVuZ3RoLCB0aGlzLmNvbnRhaW5lclNpemUsIHRoaXMucmFuZ2UsIHRoaXMudHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEF4aXNZQ29vcmRpbmF0ZXModGhpcy5ncmlkTGluZXMsIHRoaXMuc2VyaWVzTGVuZ3RoLCB0aGlzLmNvbnRhaW5lclNpemUsIHRoaXMucmFuZ2UsIHRoaXMudHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2F0ZWdvcmllcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLWNvbnRhaW5lci1zaXplJykgc2V0IGNvbnRhaW5lclNpemUodmFsdWU6IFBvQ2hhcnRDb250YWluZXJTaXplKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXJTaXplID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5jaGVja0F4aXNPcHRpb25zKHRoaXMuYXhpc09wdGlvbnMpO1xyXG4gICAgdGhpcy5zZXRBeGlzWENvb3JkaW5hdGVzKHRoaXMuZ3JpZExpbmVzLCB0aGlzLnNlcmllc0xlbmd0aCwgdGhpcy5fY29udGFpbmVyU2l6ZSwgdGhpcy5yYW5nZSwgdGhpcy50eXBlKTtcclxuICAgIHRoaXMuc2V0QXhpc1lDb29yZGluYXRlcyh0aGlzLmdyaWRMaW5lcywgdGhpcy5zZXJpZXNMZW5ndGgsIHRoaXMuX2NvbnRhaW5lclNpemUsIHRoaXMucmFuZ2UsIHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGFpbmVyU2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJTaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLW9wdGlvbnMnKSBzZXQgYXhpc09wdGlvbnModmFsdWU6IFBvQ2hhcnRBeGlzT3B0aW9ucykge1xyXG4gICAgdGhpcy5fYXhpc09wdGlvbnMgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmNoZWNrQXhpc09wdGlvbnModGhpcy5fYXhpc09wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFBvQ2hhcnRUeXBlLkJhcikge1xyXG4gICAgICB0aGlzLnNldEF4aXNZQ29vcmRpbmF0ZXModGhpcy5ncmlkTGluZXMsIHRoaXMuc2VyaWVzTGVuZ3RoLCB0aGlzLmNvbnRhaW5lclNpemUsIHRoaXMucmFuZ2UsIHRoaXMudHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEF4aXNYQ29vcmRpbmF0ZXModGhpcy5ncmlkTGluZXMsIHRoaXMuc2VyaWVzTGVuZ3RoLCB0aGlzLmNvbnRhaW5lclNpemUsIHRoaXMucmFuZ2UsIHRoaXMudHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYXhpc09wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXhpc09wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGhzU2VydmljZTogUG9DaGFydE1hdGhzU2VydmljZSkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRBeGlzWENvb3JkaW5hdGVzKFxyXG4gICAgZ3JpZExpbmVzOiBudW1iZXIsXHJcbiAgICBzZXJpZXNMZW5ndGg6IG51bWJlcixcclxuICAgIGNvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplLFxyXG4gICAgbWluTWF4QXhpc1ZhbHVlczogUG9DaGFydE1pbk1heFZhbHVlcyxcclxuICAgIHR5cGU6IFBvQ2hhcnRUeXBlXHJcbiAgKSB7XHJcbiAgICBpZiAoc2VyaWVzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGFtb3VudE9mQXhpc0xhYmVscyA9IHR5cGUgPT09IFBvQ2hhcnRUeXBlLkJhciA/IHNlcmllc0xlbmd0aCA6IGdyaWRMaW5lcztcclxuICAgICAgdGhpcy5jYWxjdWxhdGVBeGlzWExhYmVsQ29vcmRpbmF0ZXMoYW1vdW50T2ZBeGlzTGFiZWxzLCBjb250YWluZXJTaXplLCBtaW5NYXhBeGlzVmFsdWVzLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbW91bnRPZkF4aXNYTGluZXMgPSB0aGlzLmFtb3VudE9mQXhpc1hMaW5lcyhzZXJpZXNMZW5ndGgsIGdyaWRMaW5lcywgdHlwZSk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUF4aXNYQ29vcmRpbmF0ZXMoYW1vdW50T2ZBeGlzWExpbmVzLCBjb250YWluZXJTaXplLCBtaW5NYXhBeGlzVmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW1vdW50T2ZBeGlzWExpbmVzKHNlcmllc0xlbmd0aDogbnVtYmVyLCBncmlkTGluZXM6IG51bWJlciwgdHlwZTogUG9DaGFydFR5cGUpOiBudW1iZXIge1xyXG4gICAgaWYgKHR5cGUgPT09IFBvQ2hhcnRUeXBlLkJhcikge1xyXG4gICAgICByZXR1cm4gc2VyaWVzTGVuZ3RoIDw9IDEgPyAyIDogc2VyaWVzTGVuZ3RoICsgMTtcclxuICAgIH1cclxuICAgIHJldHVybiBncmlkTGluZXMgPT09IDAgPyAxIDogZ3JpZExpbmVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBeGlzWUNvb3JkaW5hdGVzKFxyXG4gICAgZ3JpZExpbmVzOiBudW1iZXIsXHJcbiAgICBzZXJpZXNMZW5ndGg6IG51bWJlcixcclxuICAgIGNvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplLFxyXG4gICAgbWluTWF4QXhpc1ZhbHVlczogUG9DaGFydE1pbk1heFZhbHVlcyxcclxuICAgIHR5cGU6IFBvQ2hhcnRUeXBlXHJcbiAgKSB7XHJcbiAgICBjb25zdCBhbW91bnRPZkF4aXNZID0gdHlwZSA9PT0gUG9DaGFydFR5cGUuQmFyID8gZ3JpZExpbmVzIDogc2VyaWVzTGVuZ3RoO1xyXG5cclxuICAgIGlmIChzZXJpZXNMZW5ndGgpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVBeGlzWUxhYmVsQ29vcmRpbmF0ZXMoYW1vdW50T2ZBeGlzWSwgY29udGFpbmVyU2l6ZSwgbWluTWF4QXhpc1ZhbHVlcywgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFBvQ2hhcnRUeXBlLkFyZWEpIHtcclxuICAgICAgdGhpcy5nZXRDYXRlZ29yaWVzUmFuZ2VGb3JNb3VzZU1vdmUoYW1vdW50T2ZBeGlzWSwgY29udGFpbmVyU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVBeGlzWUNvb3JkaW5hdGVzKGFtb3VudE9mQXhpc1ksIGNvbnRhaW5lclNpemUsIHR5cGUsIG1pbk1heEF4aXNWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBeGlzWENvb3JkaW5hdGVzKFxyXG4gICAgYW1vdW50T2ZBeGlzWDogbnVtYmVyLFxyXG4gICAgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemUsXHJcbiAgICByYW5nZTogUG9DaGFydE1pbk1heFZhbHVlc1xyXG4gICkge1xyXG4gICAgY29uc3Qgc3RhcnRYID0gY29udGFpbmVyU2l6ZS5heGlzWExhYmVsV2lkdGg7XHJcbiAgICBjb25zdCBlbmRYID0gY29udGFpbmVyU2l6ZS5zdmdXaWR0aDtcclxuXHJcbiAgICBsZXQgY29vcmRpbmF0ZXNSZWZlcmVkVG9aZXJvO1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzTGlzdCA9IFsuLi5BcnJheShhbW91bnRPZkF4aXNYKV0ubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gdGhpcy5jYWxjdWxhdGVBeGlzWENvb3JkaW5hdGVZKGFtb3VudE9mQXhpc1gsIGNvbnRhaW5lclNpemUsIGluZGV4KTtcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBgTSR7c3RhcnRYfSAke3lDb29yZGluYXRlfSBMJHtlbmRYfSwgJHt5Q29vcmRpbmF0ZX1gO1xyXG5cclxuICAgICAgcmV0dXJuIHsgY29vcmRpbmF0ZXMgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF2YWxpYSBhIG5lY2Vzc2lkYWRlIGRlIGFkaWNpb25hciBhIGxpbmhhIHJlZmVyZW50ZSBhbyB2YWxvciB6ZXJvIGVtIGdyw6FmaWNvcyBkbyB0aXBvIGBjb2x1bW5gLCBgYXJlYWAgZSBgbGluZWAuXHJcbiAgICBpZiAodGhpcy50eXBlICE9PSBQb0NoYXJ0VHlwZS5CYXIgJiYgcmFuZ2UubWluVmFsdWUgPCAwICYmICF0aGlzLmF4aXNYTGFiZWxzLmluY2x1ZGVzKCcwJykpIHtcclxuICAgICAgY29vcmRpbmF0ZXNSZWZlcmVkVG9aZXJvID0gdGhpcy5nZXRDb29yZGluYXRlc1JlbGF0ZWRUb1plcm8oY29udGFpbmVyU2l6ZSwgcmFuZ2UsIHN0YXJ0WCwgZW5kWCk7XHJcbiAgICAgIGNvb3JkaW5hdGVzTGlzdCA9IFsuLi5jb29yZGluYXRlc0xpc3QsIGNvb3JkaW5hdGVzUmVmZXJlZFRvWmVyb107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5heGlzWENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNMaXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb29yZGluYXRlc1JlbGF0ZWRUb1plcm8oXHJcbiAgICBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSxcclxuICAgIHJhbmdlOiBQb0NoYXJ0TWluTWF4VmFsdWVzLFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyLFxyXG4gICAgaXNBeGlzWTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBjb25zdCB0eXBlID0gaXNBeGlzWSA/IFBvQ2hhcnRUeXBlLkJhciA6IFBvQ2hhcnRUeXBlLkNvbHVtbjtcclxuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IHRoaXMuYXhpc0Nvb3JkaW5hdGVzRm9yVmFsdWVaZXJvKHJhbmdlLCAwLCBjb250YWluZXJTaXplLCBpc0F4aXNZKTtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICBjb2x1bW46IHtcclxuICAgICAgICBzdGFydFg6IHN0YXJ0LFxyXG4gICAgICAgIGVuZFg6IGVuZCxcclxuICAgICAgICBzdGFydFk6IGJhc2VQb3NpdGlvbixcclxuICAgICAgICBlbmRZOiBiYXNlUG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgYmFyOiB7XHJcbiAgICAgICAgc3RhcnRYOiBiYXNlUG9zaXRpb24sXHJcbiAgICAgICAgZW5kWDogYmFzZVBvc2l0aW9uLFxyXG4gICAgICAgIHN0YXJ0WTogc3RhcnQsXHJcbiAgICAgICAgZW5kWTogZW5kXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29vcmRpbmF0ZXM6IGBNJHtjb29yZGluYXRlc1t0eXBlXS5zdGFydFh9ICR7Y29vcmRpbmF0ZXNbdHlwZV0uc3RhcnRZfSBMJHtjb29yZGluYXRlc1t0eXBlXS5lbmRYfSAke2Nvb3JkaW5hdGVzW3R5cGVdLmVuZFl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXhpc0Nvb3JkaW5hdGVzRm9yVmFsdWVaZXJvKFxyXG4gICAgcmFuZ2U6IFBvQ2hhcnRNaW5NYXhWYWx1ZXMsXHJcbiAgICBkYXRhOiBudW1iZXIsXHJcbiAgICBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSxcclxuICAgIGlzQXhpc1k6IGJvb2xlYW5cclxuICApIHtcclxuICAgIGNvbnN0IHsgYXhpc1hMYWJlbFdpZHRoLCBzdmdXaWR0aCwgc3ZnUGxvdHRpbmdBcmVhSGVpZ2h0IH0gPSBjb250YWluZXJTaXplO1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm1hdGhzU2VydmljZS5nZXRTZXJpZVBlcmNlbnRhZ2UocmFuZ2UsIGRhdGEpO1xyXG5cclxuICAgIHJldHVybiBNYXRoLmZsb29yKFxyXG4gICAgICBpc0F4aXNZXHJcbiAgICAgICAgPyBheGlzWExhYmVsV2lkdGggKyAoc3ZnV2lkdGggLSBheGlzWExhYmVsV2lkdGgpICogcmF0aW9cclxuICAgICAgICA6IHN2Z1Bsb3R0aW5nQXJlYUhlaWdodCAtIHN2Z1Bsb3R0aW5nQXJlYUhlaWdodCAqIHJhdGlvICsgUG9DaGFydFBsb3RBcmVhUGFkZGluZ1RvcFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQXhpc1hMYWJlbENvb3JkaW5hdGVzKFxyXG4gICAgYW1vdW50T2ZBeGlzWDogbnVtYmVyLFxyXG4gICAgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemUsXHJcbiAgICBtaW5NYXhBeGlzVmFsdWVzOiBQb0NoYXJ0TWluTWF4VmFsdWVzLFxyXG4gICAgdHlwZTogUG9DaGFydFR5cGVcclxuICApIHtcclxuICAgIHRoaXMuYXhpc1hMYWJlbHMgPSB0aGlzLmdldEF4aXNYTGFiZWxzKHR5cGUsIG1pbk1heEF4aXNWYWx1ZXMsIGFtb3VudE9mQXhpc1gpO1xyXG5cclxuICAgIHRoaXMuYXhpc1hMYWJlbENvb3JkaW5hdGVzID0gWy4uLkFycmF5KGFtb3VudE9mQXhpc1gpXS5tYXAoKF8sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmF4aXNYTGFiZWxzW2luZGV4XTtcclxuICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSB0aGlzLmNhbGN1bGF0ZUF4aXNYTGFiZWxYQ29vcmRpbmF0ZShjb250YWluZXJTaXplLmF4aXNYTGFiZWxXaWR0aCk7XHJcbiAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gdGhpcy5jYWxjdWxhdGVBeGlzWExhYmVsWUNvb3JkaW5hdGUoYW1vdW50T2ZBeGlzWCwgY29udGFpbmVyU2l6ZSwgdHlwZSwgaW5kZXgpO1xyXG5cclxuICAgICAgcmV0dXJuIHsgbGFiZWwsIHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUF4aXNZQ29vcmRpbmF0ZXMoXHJcbiAgICBhbW91bnRPZkF4aXNZOiBudW1iZXIsXHJcbiAgICBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSxcclxuICAgIHR5cGU6IFBvQ2hhcnRUeXBlLFxyXG4gICAgcmFuZ2U6IFBvQ2hhcnRNaW5NYXhWYWx1ZXNcclxuICApIHtcclxuICAgIGNvbnN0IHN0YXJ0WSA9IFBvQ2hhcnRQbG90QXJlYVBhZGRpbmdUb3A7XHJcbiAgICBjb25zdCBlbmRZID0gY29udGFpbmVyU2l6ZS5zdmdQbG90dGluZ0FyZWFIZWlnaHQgKyBQb0NoYXJ0UGxvdEFyZWFQYWRkaW5nVG9wO1xyXG5cclxuICAgIC8vIHRyYXRhbWVudG8gbmVjZXNzw6FyaW8gcGFyYSBjcmlhciB1bWEgbGluaGEgYSBtYWlzIHBhcmEgZmVjaGFyIG8gZ3LDoWZpY29cclxuICAgIGNvbnN0IGxlbmd0aCA9IGFtb3VudE9mQXhpc1kgPT09IDAgfHwgdHlwZSA9PT0gUG9DaGFydFR5cGUuQmFyID8gYW1vdW50T2ZBeGlzWSA6IGFtb3VudE9mQXhpc1kgKyAxO1xyXG5cclxuICAgIGxldCBjb29yZGluYXRlc1JlZmVyZWRUb1plcm87XHJcbiAgICBsZXQgY29vcmRpbmF0ZXNMaXN0ID0gWy4uLkFycmF5KGxlbmd0aCldLm1hcCgoXywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IHRoaXMuY2FsY3VsYXRlQXhpc1lDb29yZGluYXRlWChjb250YWluZXJTaXplLCBhbW91bnRPZkF4aXNZLCBpbmRleCk7XHJcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYE0ke3hDb29yZGluYXRlfSAke3N0YXJ0WX0gTCR7eENvb3JkaW5hdGV9LCAke2VuZFl9YDtcclxuXHJcbiAgICAgIHJldHVybiB7IGNvb3JkaW5hdGVzIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdmFsaWEgYSBuZWNlc3NpZGFkZSBkZSBhZGljaW9uYXIgYSBsaW5oYSByZWZlcmVudGUgYW8gdmFsb3IgemVybyBlbSBncsOhZmljb3MgZG8gdGlwbyBgYmFyYC5cclxuICAgIGlmICh0eXBlID09PSBQb0NoYXJ0VHlwZS5CYXIgJiYgcmFuZ2UubWluVmFsdWUgPCAwICYmICF0aGlzLmF4aXNZTGFiZWxzLmluY2x1ZGVzKCcwJykpIHtcclxuICAgICAgY29vcmRpbmF0ZXNSZWZlcmVkVG9aZXJvID0gdGhpcy5nZXRDb29yZGluYXRlc1JlbGF0ZWRUb1plcm8oY29udGFpbmVyU2l6ZSwgcmFuZ2UsIHN0YXJ0WSwgZW5kWSwgdHJ1ZSk7XHJcbiAgICAgIGNvb3JkaW5hdGVzTGlzdCA9IFsuLi5jb29yZGluYXRlc0xpc3QsIGNvb3JkaW5hdGVzUmVmZXJlZFRvWmVyb107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5heGlzWUNvb3JkaW5hdGVzID0gWy4uLmNvb3JkaW5hdGVzTGlzdF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUF4aXNZTGFiZWxDb29yZGluYXRlcyhcclxuICAgIGFtb3VudE9mQXhpc1k6IG51bWJlcixcclxuICAgIGNvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplLFxyXG4gICAgbWluTWF4QXhpc1ZhbHVlczogUG9DaGFydE1pbk1heFZhbHVlcyxcclxuICAgIHR5cGU6IFBvQ2hhcnRUeXBlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmF4aXNZTGFiZWxzID0gdGhpcy5nZXRBeGlzWUxhYmVscyh0eXBlLCBtaW5NYXhBeGlzVmFsdWVzLCBhbW91bnRPZkF4aXNZKTtcclxuXHJcbiAgICB0aGlzLmF4aXNZTGFiZWxDb29yZGluYXRlcyA9IFsuLi5BcnJheShhbW91bnRPZkF4aXNZKV0ubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5heGlzWUxhYmVsc1tpbmRleF07XHJcblxyXG4gICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IHRoaXMuZ2V0QXhpc1hDb29yZGluYXRlcyhjb250YWluZXJTaXplLCBhbW91bnRPZkF4aXNZLCB0eXBlLCBpbmRleCk7XHJcbiAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gdGhpcy5jYWxjdWxhdGVBeGlzWUxhYmVsWUNvb3JkaW5hdGUoY29udGFpbmVyU2l6ZSk7XHJcblxyXG4gICAgICByZXR1cm4geyBsYWJlbCwgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQXhpc1hMYWJlbFhDb29yZGluYXRlKGF4aXNYTGFiZWxXaWR0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGxhYmVsUG9DaGFydFBhZGRpbmcgPSBQb0NoYXJ0UGFkZGluZyAvIDM7XHJcblxyXG4gICAgcmV0dXJuIGF4aXNYTGFiZWxXaWR0aCAtIGxhYmVsUG9DaGFydFBhZGRpbmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUF4aXNYTGFiZWxZQ29vcmRpbmF0ZShcclxuICAgIGFtb3VudE9mQXhpc1g6IG51bWJlcixcclxuICAgIGNvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplLFxyXG4gICAgdHlwZTogUG9DaGFydFR5cGUsXHJcbiAgICBpbmRleDogbnVtYmVyXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGFtb3VudE9mTGluZXMgPSB0eXBlID09PSBQb0NoYXJ0VHlwZS5CYXIgPyBhbW91bnRPZkF4aXNYIDogYW1vdW50T2ZBeGlzWCAtIDE7XHJcbiAgICBjb25zdCB5UmF0aW8gPSBpbmRleCAvIGFtb3VudE9mTGluZXM7XHJcblxyXG4gICAgaWYgKHR5cGUgIT09IFBvQ2hhcnRUeXBlLkJhcikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGNvbnRhaW5lclNpemUuc3ZnUGxvdHRpbmdBcmVhSGVpZ2h0IC0gY29udGFpbmVyU2l6ZS5zdmdQbG90dGluZ0FyZWFIZWlnaHQgKiB5UmF0aW8gKyBQb0NoYXJ0UGxvdEFyZWFQYWRkaW5nVG9wXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFsZkNhdGVnb3J5SGVpZ2h0ID0gY29udGFpbmVyU2l6ZS5zdmdQbG90dGluZ0FyZWFIZWlnaHQgLyBhbW91bnRPZkF4aXNYIC8gMjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGNvbnRhaW5lclNpemUuc3ZnUGxvdHRpbmdBcmVhSGVpZ2h0IC1cclxuICAgICAgaGFsZkNhdGVnb3J5SGVpZ2h0IC1cclxuICAgICAgY29udGFpbmVyU2l6ZS5zdmdQbG90dGluZ0FyZWFIZWlnaHQgKiB5UmF0aW8gK1xyXG4gICAgICBQb0NoYXJ0UGxvdEFyZWFQYWRkaW5nVG9wXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBeGlzWENvb3JkaW5hdGVZKGFtb3VudE9mQXhpc1g6IG51bWJlciwgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemUsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgeVJhdGlvID0gaW5kZXggLyAoYW1vdW50T2ZBeGlzWCAtIDEpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGNvbnRhaW5lclNpemUuc3ZnUGxvdHRpbmdBcmVhSGVpZ2h0IC0gY29udGFpbmVyU2l6ZS5zdmdQbG90dGluZ0FyZWFIZWlnaHQgKiB5UmF0aW8gKyBQb0NoYXJ0UGxvdEFyZWFQYWRkaW5nVG9wXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBeGlzWUxhYmVsWUNvb3JkaW5hdGUoY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGV4dFBvQ2hhcnRQYWRkaW5nID0gUG9DaGFydFBhZGRpbmcgLyAzO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXJTaXplLnN2Z0hlaWdodCAtIHRleHRQb0NoYXJ0UGFkZGluZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2VudGVyZWRJbkNhdGVnb3J5QXJlYShcclxuICAgIGNvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplLFxyXG4gICAgYW1vdW50T2ZBeGlzWTogbnVtYmVyLFxyXG4gICAgdHlwZTogUG9DaGFydFR5cGUsXHJcbiAgICBpbmRleDogbnVtYmVyXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGFtb3VudE9mTGluZXMgPSB0eXBlID09PSBQb0NoYXJ0VHlwZS5CYXIgPyBhbW91bnRPZkF4aXNZIC0gMSA6IGFtb3VudE9mQXhpc1k7XHJcbiAgICBjb25zdCB4UmF0aW8gPSBpbmRleCAvIGFtb3VudE9mTGluZXM7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFBvQ2hhcnRUeXBlLkJhcikge1xyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChcclxuICAgICAgICBjb250YWluZXJTaXplLmF4aXNYTGFiZWxXaWR0aCArIChjb250YWluZXJTaXplLnN2Z1dpZHRoIC0gY29udGFpbmVyU2l6ZS5heGlzWExhYmVsV2lkdGgpICogeFJhdGlvXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFsZkNhdGVnb3J5V2lkdGggPSAoY29udGFpbmVyU2l6ZS5zdmdXaWR0aCAtIGNvbnRhaW5lclNpemUuYXhpc1hMYWJlbFdpZHRoKSAvIGFtb3VudE9mQXhpc1kgLyAyO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoXHJcbiAgICAgIGNvbnRhaW5lclNpemUuYXhpc1hMYWJlbFdpZHRoICtcclxuICAgICAgICBoYWxmQ2F0ZWdvcnlXaWR0aCArXHJcbiAgICAgICAgKGNvbnRhaW5lclNpemUuc3ZnV2lkdGggLSBjb250YWluZXJTaXplLmF4aXNYTGFiZWxXaWR0aCkgKiB4UmF0aW9cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUF4aXNZQ29vcmRpbmF0ZVgoXHJcbiAgICBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSxcclxuICAgIGFtb3VudE9mQXhpc1k6IG51bWJlcixcclxuICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICBzdWJ0cmFjdENhdGVnb3J5V2lkdGg6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICk6IG51bWJlciB7XHJcbiAgICBjb25zdCBhbW91bnRPZkxpbmVzID0gdGhpcy5hbGlnbkJ5VGhlQ29ybmVycyA/IGFtb3VudE9mQXhpc1kgLSAxIDogYW1vdW50T2ZBeGlzWTtcclxuICAgIGNvbnN0IGhhbGZDYXRlZ29yeVdpZHRoID1cclxuICAgICAgdGhpcy5hbGlnbkJ5VGhlQ29ybmVycyAmJiBzdWJ0cmFjdENhdGVnb3J5V2lkdGhcclxuICAgICAgICA/IChjb250YWluZXJTaXplLnN2Z1dpZHRoIC0gY29udGFpbmVyU2l6ZS5heGlzWExhYmVsV2lkdGgpIC8gKGFtb3VudE9mQXhpc1kgLSAxKSAvIDJcclxuICAgICAgICA6IDA7XHJcbiAgICBjb25zdCBkaXZpZGVJbmRleEJ5QW1vdW50T2ZMaW5lcyA9IGluZGV4IC8gYW1vdW50T2ZMaW5lcztcclxuICAgIGNvbnN0IHhSYXRpbyA9IGRpdmlkZUluZGV4QnlBbW91bnRPZkxpbmVzID09PSBJbmZpbml0eSA/IDAgOiBkaXZpZGVJbmRleEJ5QW1vdW50T2ZMaW5lcztcclxuXHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChcclxuICAgICAgY29udGFpbmVyU2l6ZS5heGlzWExhYmVsV2lkdGggK1xyXG4gICAgICAgIChjb250YWluZXJTaXplLnN2Z1dpZHRoIC0gY29udGFpbmVyU2l6ZS5heGlzWExhYmVsV2lkdGgpICogeFJhdGlvIC1cclxuICAgICAgICBoYWxmQ2F0ZWdvcnlXaWR0aFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tBeGlzT3B0aW9ucyhvcHRpb25zOiBQb0NoYXJ0QXhpc09wdGlvbnMgPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5ncmlkTGluZXMgPVxyXG4gICAgICBvcHRpb25zLmdyaWRMaW5lcyAmJiB0aGlzLmlzVmFsaWRHcmlkTGluZXNMZW5ndGhPcHRpb24ob3B0aW9ucy5ncmlkTGluZXMpID8gb3B0aW9ucy5ncmlkTGluZXMgOiBQb0NoYXJ0R3JpZExpbmVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblVwQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICB0aGlzLmF4aXNYQ29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIHRoaXMuYXhpc1lDb29yZGluYXRlcyA9IFtdO1xyXG4gICAgdGhpcy5heGlzWExhYmVsQ29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIHRoaXMuYXhpc1lMYWJlbENvb3JkaW5hdGVzID0gW107XHJcbiAgICB0aGlzLnNlcmllc0xlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEF4aXNYQ29vcmRpbmF0ZXMoXHJcbiAgICBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSxcclxuICAgIGFtb3VudE9mQXhpc1k6IG51bWJlcixcclxuICAgIHR5cGU6IFBvQ2hhcnRUeXBlLFxyXG4gICAgaW5kZXg6IG51bWJlclxyXG4gICk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hbGlnbkJ5VGhlQ29ybmVyc1xyXG4gICAgICA/IHRoaXMuY2FsY3VsYXRlQXhpc1lDb29yZGluYXRlWChjb250YWluZXJTaXplLCBhbW91bnRPZkF4aXNZLCBpbmRleClcclxuICAgICAgOiB0aGlzLmNlbnRlcmVkSW5DYXRlZ29yeUFyZWEoY29udGFpbmVyU2l6ZSwgYW1vdW50T2ZBeGlzWSwgdHlwZSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDYXRlZ29yaWVzUmFuZ2VGb3JNb3VzZU1vdmUoYW1vdW50T2ZBeGlzWTogbnVtYmVyLCBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllc0Nvb3JkaW5hdGVzID0gWy4uLkFycmF5KGFtb3VudE9mQXhpc1kpXS5tYXAoKF8sIGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQXhpc1lDb29yZGluYXRlWChjb250YWluZXJTaXplLCBhbW91bnRPZkF4aXNZLCBpbmRleCwgdHJ1ZSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jYXRlZ29yaWVzQ29vcmRpbmF0ZXMuZW1pdChjYXRlZ29yaWVzQ29vcmRpbmF0ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkR3JpZExpbmVzTGVuZ3RoT3B0aW9uKGdyaWRMaW5lczogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZ3JpZExpbmVzID49IDIgJiYgZ3JpZExpbmVzIDw9IDEwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBeGlzWExhYmVscyh0eXBlOiBQb0NoYXJ0VHlwZSwgbWluTWF4QXhpc1ZhbHVlczogUG9DaGFydE1pbk1heFZhbHVlcywgYW1vdW50T2ZBeGlzWDogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gUG9DaGFydFR5cGUuQmFyKSB7XHJcbiAgICAgIGNvbnN0IGF4aXNYTGFiZWxzTGlzdCA9IHRoaXMuZm9ybWF0Q2F0ZWdvcmllc0xhYmVscyhhbW91bnRPZkF4aXNYLCB0aGlzLmNhdGVnb3JpZXMpO1xyXG4gICAgICByZXR1cm4gYXhpc1hMYWJlbHNMaXN0LnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUF2ZXJhZ2VPZkxhYmVscyhtaW5NYXhBeGlzVmFsdWVzLCBhbW91bnRPZkF4aXNYKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXhpc1lMYWJlbHModHlwZTogUG9DaGFydFR5cGUsIG1pbk1heEF4aXNWYWx1ZXM6IFBvQ2hhcnRNaW5NYXhWYWx1ZXMsIGFtb3VudE9mQXhpc1g6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IFBvQ2hhcnRUeXBlLkJhclxyXG4gICAgICA/IHRoaXMuZ2VuZXJhdGVBdmVyYWdlT2ZMYWJlbHMobWluTWF4QXhpc1ZhbHVlcywgYW1vdW50T2ZBeGlzWClcclxuICAgICAgOiB0aGlzLmZvcm1hdENhdGVnb3JpZXNMYWJlbHMoYW1vdW50T2ZBeGlzWCwgdGhpcy5jYXRlZ29yaWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0Q2F0ZWdvcmllc0xhYmVscyhhbW91bnRPZkF4aXNYOiBudW1iZXIsIGNhdGVnb3JpZXM6IEFycmF5PHN0cmluZz4gPSBbXSkge1xyXG4gICAgcmV0dXJuIFsuLi5BcnJheShhbW91bnRPZkF4aXNYKV0ubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiBjYXRlZ29yaWVzW2luZGV4XSA/PyAnLScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUF2ZXJhZ2VPZkxhYmVscyhtaW5NYXhBeGlzVmFsdWVzOiBQb0NoYXJ0TWluTWF4VmFsdWVzLCBhbW91bnRPZkF4aXNMaW5lczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBhdmVyYWdlTGFiZWxzTGlzdCA9IHRoaXMubWF0aHNTZXJ2aWNlLnJhbmdlKG1pbk1heEF4aXNWYWx1ZXMsIGFtb3VudE9mQXhpc0xpbmVzKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZUxhYmVsc0xpc3QubWFwKGxhYmVsID0+IHtcclxuICAgICAgY29uc3QgZm9ybWF0dGVkRGlnaXQgPSBsYWJlbC50b0ZpeGVkKGxhYmVsICUgMSAmJiAyKTtcclxuICAgICAgLy8gUmVtb3ZlIGTDrWdpdG9zIGNvbSB6ZXJvLlxyXG4gICAgICAvLyBUYW1iw6ltIHRyYXRhIGNhc28gcXVhbmRvIG8gdmFsb3IgcmV0b3JuYWRvIGVyYSAtMCwgc3Vic3RpdHVpbmRvLW8gcG9yIDAuXHJcbiAgICAgIGNvbnN0IHJlbW92ZVplcm9EaWdpdHMgPSBmb3JtYXR0ZWREaWdpdC5yZXBsYWNlKC9cXC4wMCQvLCAnJykucmVwbGFjZSgvXFwtMCQvLCAwKTtcclxuXHJcbiAgICAgIHJldHVybiByZW1vdmVaZXJvRGlnaXRzLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHN2ZzpnIHBvLWNoYXJ0LWF4aXMtcGF0aCBbcC1heGlzLXgtY29vcmRpbmF0ZXNdPVwiYXhpc1hDb29yZGluYXRlc1wiIFtwLWF4aXMteS1jb29yZGluYXRlc109XCJheGlzWUNvb3JkaW5hdGVzXCI+PC9zdmc6Zz5cclxuXHJcbjxzdmc6ZyBwby1jaGFydC1heGlzLWxhYmVsIFxyXG4gIFtwLWFsaWduLWJ5LXRoZS1jb3JuZXJzXT1cImFsaWduQnlUaGVDb3JuZXJzXCIgXHJcbiAgW3AtYXhpcy14LWxhYmVsLWNvb3JkaW5hdGVzXT1cImF4aXNYTGFiZWxDb29yZGluYXRlc1wiIFxyXG4gIFtwLWF4aXMteS1sYWJlbC1jb29yZGluYXRlc109XCJheGlzWUxhYmVsQ29vcmRpbmF0ZXNcIiBcclxuICBbcC10eXBlXT1cInR5cGVcIlxyXG4gID5cclxuPC9zdmc6Zz4iXX0=