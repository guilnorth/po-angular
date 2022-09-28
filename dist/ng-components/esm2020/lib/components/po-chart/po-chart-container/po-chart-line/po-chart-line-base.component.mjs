import { Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PoChartType } from '../../enums/po-chart-type.enum';
import { PoChartPlotAreaPaddingTop } from '../../helpers/po-chart-default-values.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-chart-maths.service";
const _c0 = ["chartLine"];
export class PoChartLineBaseComponent {
    constructor(mathsService, renderer, elementRef) {
        this.mathsService = mathsService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.alignByTheCorners = false;
        this.pointClick = new EventEmitter();
        this.pointHover = new EventEmitter();
        this.animate = true;
        this.seriesPointsCoordinates = [];
        this._containerSize = {};
        this._range = {};
        this._series = [];
    }
    set range(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._range = value;
            this.seriePathPointsDefinition(this.containerSize, this._series, this._range);
        }
    }
    get range() {
        return this._range;
    }
    set containerSize(value) {
        this._containerSize = value;
        this.seriePathPointsDefinition(this._containerSize, this.series, this.range);
    }
    get containerSize() {
        return this._containerSize;
    }
    set series(seriesList) {
        const seriesDataArrayFilter = seriesList.filter(serie => Array.isArray(serie.data));
        if (seriesDataArrayFilter.length) {
            this._series = seriesDataArrayFilter;
            this.animate = true;
            this.seriesLength = this.mathsService.seriesGreaterLength(this.series);
            this.chartType = this._series[0].type;
            this.seriePathPointsDefinition(this.containerSize, seriesDataArrayFilter, this.range);
        }
        else {
            this._series = [];
        }
    }
    get series() {
        return this._series;
    }
    onSeriePointClick(selectedItem) {
        this.pointClick.emit(selectedItem);
    }
    trackBy(index) {
        return index;
    }
    getTooltipLabel(data, label, tooltipLabel) {
        const dataLabel = label ? `${label}: ` : '';
        const dataValue = data.toString();
        return tooltipLabel || `${dataLabel}${dataValue}`;
    }
    svgPathCommand() {
        const command = this.firstValidItemFromSerieArray ? 'M' : 'L';
        // firstValidItemFromSerieArray: tratamento para permitir ao usuário definir o primeiro valor como null para que seja ignorado;
        this.firstValidItemFromSerieArray = false;
        return command;
    }
    xCoordinate(index, containerSize) {
        const halfCategoryWidth = !this.alignByTheCorners
            ? (containerSize.svgWidth - containerSize.axisXLabelWidth) / this.seriesLength / 2
            : 0;
        const divideIndexBySeriesLength = index / (this.alignByTheCorners ? this.seriesLength - 1 : this.seriesLength);
        const xRatio = isNaN(divideIndexBySeriesLength) ? 0 : divideIndexBySeriesLength;
        return Math.floor(containerSize.axisXLabelWidth +
            halfCategoryWidth +
            (containerSize.svgWidth - containerSize.axisXLabelWidth) * xRatio);
    }
    serieCategory(index, categories = []) {
        return categories[index] ?? undefined;
    }
    seriePathPointsDefinition(containerSize, series, range) {
        this.seriesPointsCoordinates = [];
        this.seriesPathsCoordinates = series.map((serie) => {
            if (Array.isArray(serie.data)) {
                let pathCoordinates = '';
                let pointCoordinates = [];
                const color = serie.color;
                this.firstValidItemFromSerieArray = true;
                serie.data.forEach((data, index) => {
                    if (this.mathsService.verifyIfFloatOrInteger(data)) {
                        const svgPathCommand = this.svgPathCommand();
                        const xCoordinate = this.xCoordinate(index, containerSize);
                        const yCoordinate = this.yCoordinate(range, data, containerSize);
                        const category = this.serieCategory(index, this.categories);
                        const label = serie.label;
                        const tooltip = serie.tooltip;
                        const tooltipLabel = this.getTooltipLabel(data, label, tooltip);
                        const isActive = this.chartType === PoChartType.Line;
                        pointCoordinates = [
                            ...pointCoordinates,
                            { category, label, tooltipLabel, data: data, xCoordinate, yCoordinate, color, isActive }
                        ];
                        pathCoordinates += ` ${svgPathCommand}${xCoordinate} ${yCoordinate}`;
                    }
                });
                pathCoordinates = this.verifyIfClosePath(pathCoordinates, serie.data.length - 1, range, 0, containerSize);
                this.seriesPointsCoordinates = [...this.seriesPointsCoordinates, pointCoordinates];
                return { coordinates: pathCoordinates, color, isActive: true };
            }
        });
    }
    verifyIfClosePath(pathCoordinates, lastIndex, range, data, containerSize) {
        const { axisXLabelWidth, svgWidth } = containerSize;
        if (this.chartType === PoChartType.Area) {
            const xLastPosition = this.xCoordinate(lastIndex, containerSize);
            const baseYCoordinate = this.yCoordinate(range, data, containerSize);
            const xInitialPosition = Math.floor(this.alignByTheCorners
                ? axisXLabelWidth
                : axisXLabelWidth + (svgWidth - axisXLabelWidth) / this.seriesLength / 2);
            return `${pathCoordinates} ${xLastPosition} ${baseYCoordinate} L${xInitialPosition} ${baseYCoordinate} Z`;
        }
        return pathCoordinates;
    }
    yCoordinate(range, data, containerSize) {
        const yRratio = this.mathsService.getSeriePercentage(range, data);
        const yCoordinate = containerSize.svgPlottingAreaHeight - containerSize.svgPlottingAreaHeight * yRratio + PoChartPlotAreaPaddingTop;
        return Math.floor(yCoordinate);
    }
}
PoChartLineBaseComponent.ɵfac = function PoChartLineBaseComponent_Factory(t) { return new (t || PoChartLineBaseComponent)(i0.ɵɵdirectiveInject(i1.PoChartMathsService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoChartLineBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoChartLineBaseComponent, viewQuery: function PoChartLineBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartLine = _t.first);
    } }, inputs: { alignByTheCorners: ["p-align-by-the-corners", "alignByTheCorners"], categories: ["p-categories", "categories"], categoriesCoordinates: ["p-categories-coordinates", "categoriesCoordinates"], svgSpace: ["p-svg-space", "svgSpace"], range: ["p-range", "range"], containerSize: ["p-container-size", "containerSize"], series: ["p-series", "series"] }, outputs: { pointClick: "p-point-click", pointHover: "p-point-hover" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartLineBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoChartMathsService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { alignByTheCorners: [{
            type: Input,
            args: ['p-align-by-the-corners']
        }], categories: [{
            type: Input,
            args: ['p-categories']
        }], categoriesCoordinates: [{
            type: Input,
            args: ['p-categories-coordinates']
        }], svgSpace: [{
            type: Input,
            args: ['p-svg-space']
        }], pointClick: [{
            type: Output,
            args: ['p-point-click']
        }], pointHover: [{
            type: Output,
            args: ['p-point-hover']
        }], chartLine: [{
            type: ViewChild,
            args: ['chartLine']
        }], range: [{
            type: Input,
            args: ['p-range']
        }], containerSize: [{
            type: Input,
            args: ['p-container-size']
        }], series: [{
            type: Input,
            args: ['p-series']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtbGluZS1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1saW5lLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQVUzRixNQUFNLE9BQWdCLHdCQUF3QjtJQW9FNUMsWUFDWSxZQUFpQyxFQUNqQyxRQUFtQixFQUNuQixVQUFzQjtRQUZ0QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdEVELHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQVEzQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUs5RCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLDRCQUF1QixHQUEyQyxFQUFFLENBQUM7UUFLN0QsbUJBQWMsR0FBeUIsRUFBRSxDQUFDO1FBQzFDLFdBQU0sR0FBd0IsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBd0IsRUFBRSxDQUFDO0lBOEN2QyxDQUFDO0lBNUNKLElBQXNCLEtBQUssQ0FBQyxLQUEwQjtRQUNwRCxJQUFJLEtBQUssWUFBWSxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN4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LHFCQUFxQixHQUFHLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQztRQUVsSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0dBckxtQix3QkFBd0I7MkVBQXhCLHdCQUF3Qjs7Ozs7O3VGQUF4Qix3QkFBd0I7Y0FEN0MsU0FBUzt1SEFFeUIsaUJBQWlCO2tCQUFqRCxLQUFLO21CQUFDLHdCQUF3QjtZQUVSLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUVjLHFCQUFxQjtrQkFBdkQsS0FBSzttQkFBQywwQkFBMEI7WUFFWCxRQUFRO2tCQUE3QixLQUFLO21CQUFDLGFBQWE7WUFFSyxVQUFVO2tCQUFsQyxNQUFNO21CQUFDLGVBQWU7WUFFRSxVQUFVO2tCQUFsQyxNQUFNO21CQUFDLGVBQWU7WUFFQyxTQUFTO2tCQUFoQyxTQUFTO21CQUFDLFdBQVc7WUFlQSxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVM7WUFZZSxhQUFhO2tCQUEzQyxLQUFLO21CQUFDLGtCQUFrQjtZQVVGLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGFydFR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy9wby1jaGFydC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0NoYXJ0UGxvdEFyZWFQYWRkaW5nVG9wIH0gZnJvbSAnLi4vLi4vaGVscGVycy9wby1jaGFydC1kZWZhdWx0LXZhbHVlcy5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0Q29udGFpbmVyU2l6ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtY29udGFpbmVyLXNpemUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydE1hdGhzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWNoYXJ0LW1hdGhzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0TWluTWF4VmFsdWVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1taW4tbWF4LXZhbHVlcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0UGF0aENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1wYXRoLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtcG9pbnRzLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRTZXJpZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtc2VyaWUuaW50ZXJmYWNlJztcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9DaGFydExpbmVCYXNlQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtYWxpZ24tYnktdGhlLWNvcm5lcnMnKSBhbGlnbkJ5VGhlQ29ybmVyczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ3AtY2F0ZWdvcmllcycpIGNhdGVnb3JpZXM6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIEBJbnB1dCgncC1jYXRlZ29yaWVzLWNvb3JkaW5hdGVzJykgY2F0ZWdvcmllc0Nvb3JkaW5hdGVzOiBBcnJheTxudW1iZXI+O1xyXG5cclxuICBASW5wdXQoJ3Atc3ZnLXNwYWNlJykgc3ZnU3BhY2U7XHJcblxyXG4gIEBPdXRwdXQoJ3AtcG9pbnQtY2xpY2snKSBwb2ludENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3AtcG9pbnQtaG92ZXInKSBwb2ludEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0TGluZScpIGNoYXJ0TGluZTogRWxlbWVudFJlZjtcclxuXHJcbiAgYWN0aXZlVG9vbHRpcDogYm9vbGVhbjtcclxuICBhbmltYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICBjaGFydFR5cGU6IFBvQ2hhcnRUeXBlO1xyXG4gIHNlcmllc1BhdGhzQ29vcmRpbmF0ZXM6IEFycmF5PFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXM+O1xyXG4gIHNlcmllc1BvaW50c0Nvb3JkaW5hdGVzOiBBcnJheTxBcnJheTxQb0NoYXJ0UG9pbnRzQ29vcmRpbmF0ZXM+PiA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgZmlyc3RWYWxpZEl0ZW1Gcm9tU2VyaWVBcnJheTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgc2VyaWVzTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplID0ge307XHJcbiAgcHJpdmF0ZSBfcmFuZ2U6IFBvQ2hhcnRNaW5NYXhWYWx1ZXMgPSB7fTtcclxuICBwcml2YXRlIF9zZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4gPSBbXTtcclxuXHJcbiAgQElucHV0KCdwLXJhbmdlJykgc2V0IHJhbmdlKHZhbHVlOiBQb0NoYXJ0TWluTWF4VmFsdWVzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9yYW5nZSA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5zZXJpZVBhdGhQb2ludHNEZWZpbml0aW9uKHRoaXMuY29udGFpbmVyU2l6ZSwgdGhpcy5fc2VyaWVzLCB0aGlzLl9yYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3AtY29udGFpbmVyLXNpemUnKSBzZXQgY29udGFpbmVyU2l6ZSh2YWx1ZTogUG9DaGFydENvbnRhaW5lclNpemUpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lclNpemUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLnNlcmllUGF0aFBvaW50c0RlZmluaXRpb24odGhpcy5fY29udGFpbmVyU2l6ZSwgdGhpcy5zZXJpZXMsIHRoaXMucmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRhaW5lclNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyU2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgncC1zZXJpZXMnKSBzZXQgc2VyaWVzKHNlcmllc0xpc3Q6IEFycmF5PFBvQ2hhcnRTZXJpZT4pIHtcclxuICAgIGNvbnN0IHNlcmllc0RhdGFBcnJheUZpbHRlciA9IHNlcmllc0xpc3QuZmlsdGVyKHNlcmllID0+IEFycmF5LmlzQXJyYXkoc2VyaWUuZGF0YSkpO1xyXG5cclxuICAgIGlmIChzZXJpZXNEYXRhQXJyYXlGaWx0ZXIubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3NlcmllcyA9IHNlcmllc0RhdGFBcnJheUZpbHRlcjtcclxuICAgICAgdGhpcy5hbmltYXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXJpZXNMZW5ndGggPSB0aGlzLm1hdGhzU2VydmljZS5zZXJpZXNHcmVhdGVyTGVuZ3RoKHRoaXMuc2VyaWVzKTtcclxuICAgICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLl9zZXJpZXNbMF0udHlwZTtcclxuICAgICAgdGhpcy5zZXJpZVBhdGhQb2ludHNEZWZpbml0aW9uKHRoaXMuY29udGFpbmVyU2l6ZSwgc2VyaWVzRGF0YUFycmF5RmlsdGVyLCB0aGlzLnJhbmdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NlcmllcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlcmllcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXJpZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBtYXRoc1NlcnZpY2U6IFBvQ2hhcnRNYXRoc1NlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuICBvblNlcmllUG9pbnRDbGljayhzZWxlY3RlZEl0ZW06IGFueSkge1xyXG4gICAgdGhpcy5wb2ludENsaWNrLmVtaXQoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VG9vbHRpcExhYmVsKGRhdGE6IG51bWJlciwgbGFiZWw6IHN0cmluZywgdG9vbHRpcExhYmVsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGFMYWJlbCA9IGxhYmVsID8gYCR7bGFiZWx9OiBgIDogJyc7XHJcbiAgICBjb25zdCBkYXRhVmFsdWUgPSBkYXRhLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIHRvb2x0aXBMYWJlbCB8fCBgJHtkYXRhTGFiZWx9JHtkYXRhVmFsdWV9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3ZnUGF0aENvbW1hbmQoKSB7XHJcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5maXJzdFZhbGlkSXRlbUZyb21TZXJpZUFycmF5ID8gJ00nIDogJ0wnO1xyXG4gICAgLy8gZmlyc3RWYWxpZEl0ZW1Gcm9tU2VyaWVBcnJheTogdHJhdGFtZW50byBwYXJhIHBlcm1pdGlyIGFvIHVzdcOhcmlvIGRlZmluaXIgbyBwcmltZWlybyB2YWxvciBjb21vIG51bGwgcGFyYSBxdWUgc2VqYSBpZ25vcmFkbztcclxuICAgIHRoaXMuZmlyc3RWYWxpZEl0ZW1Gcm9tU2VyaWVBcnJheSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjb21tYW5kO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB4Q29vcmRpbmF0ZShpbmRleDogbnVtYmVyLCBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSkge1xyXG4gICAgY29uc3QgaGFsZkNhdGVnb3J5V2lkdGggPSAhdGhpcy5hbGlnbkJ5VGhlQ29ybmVyc1xyXG4gICAgICA/IChjb250YWluZXJTaXplLnN2Z1dpZHRoIC0gY29udGFpbmVyU2l6ZS5heGlzWExhYmVsV2lkdGgpIC8gdGhpcy5zZXJpZXNMZW5ndGggLyAyXHJcbiAgICAgIDogMDtcclxuXHJcbiAgICBjb25zdCBkaXZpZGVJbmRleEJ5U2VyaWVzTGVuZ3RoID0gaW5kZXggLyAodGhpcy5hbGlnbkJ5VGhlQ29ybmVycyA/IHRoaXMuc2VyaWVzTGVuZ3RoIC0gMSA6IHRoaXMuc2VyaWVzTGVuZ3RoKTtcclxuICAgIGNvbnN0IHhSYXRpbyA9IGlzTmFOKGRpdmlkZUluZGV4QnlTZXJpZXNMZW5ndGgpID8gMCA6IGRpdmlkZUluZGV4QnlTZXJpZXNMZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoXHJcbiAgICAgIGNvbnRhaW5lclNpemUuYXhpc1hMYWJlbFdpZHRoICtcclxuICAgICAgICBoYWxmQ2F0ZWdvcnlXaWR0aCArXHJcbiAgICAgICAgKGNvbnRhaW5lclNpemUuc3ZnV2lkdGggLSBjb250YWluZXJTaXplLmF4aXNYTGFiZWxXaWR0aCkgKiB4UmF0aW9cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlcmllQ2F0ZWdvcnkoaW5kZXg6IG51bWJlciwgY2F0ZWdvcmllczogQXJyYXk8c3RyaW5nPiA9IFtdKSB7XHJcbiAgICByZXR1cm4gY2F0ZWdvcmllc1tpbmRleF0gPz8gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXJpZVBhdGhQb2ludHNEZWZpbml0aW9uKFxyXG4gICAgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemUsXHJcbiAgICBzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4sXHJcbiAgICByYW5nZTogUG9DaGFydE1pbk1heFZhbHVlc1xyXG4gICkge1xyXG4gICAgdGhpcy5zZXJpZXNQb2ludHNDb29yZGluYXRlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuc2VyaWVzUGF0aHNDb29yZGluYXRlcyA9IHNlcmllcy5tYXAoKHNlcmllOiBQb0NoYXJ0U2VyaWUpID0+IHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VyaWUuZGF0YSkpIHtcclxuICAgICAgICBsZXQgcGF0aENvb3JkaW5hdGVzOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBsZXQgcG9pbnRDb29yZGluYXRlczogQXJyYXk8UG9DaGFydFBvaW50c0Nvb3JkaW5hdGVzPiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gc2VyaWUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5maXJzdFZhbGlkSXRlbUZyb21TZXJpZUFycmF5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc2VyaWUuZGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubWF0aHNTZXJ2aWNlLnZlcmlmeUlmRmxvYXRPckludGVnZXIoZGF0YSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnUGF0aENvbW1hbmQgPSB0aGlzLnN2Z1BhdGhDb21tYW5kKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gdGhpcy54Q29vcmRpbmF0ZShpbmRleCwgY29udGFpbmVyU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gdGhpcy55Q29vcmRpbmF0ZShyYW5nZSwgZGF0YSwgY29udGFpbmVyU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5zZXJpZUNhdGVnb3J5KGluZGV4LCB0aGlzLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHNlcmllLmxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gc2VyaWUudG9vbHRpcDtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcExhYmVsID0gdGhpcy5nZXRUb29sdGlwTGFiZWwoZGF0YSwgbGFiZWwsIHRvb2x0aXApO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuY2hhcnRUeXBlID09PSBQb0NoYXJ0VHlwZS5MaW5lO1xyXG4gICAgICAgICAgICBwb2ludENvb3JkaW5hdGVzID0gW1xyXG4gICAgICAgICAgICAgIC4uLnBvaW50Q29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgeyBjYXRlZ29yeSwgbGFiZWwsIHRvb2x0aXBMYWJlbCwgZGF0YTogZGF0YSwgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlLCBjb2xvciwgaXNBY3RpdmUgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBwYXRoQ29vcmRpbmF0ZXMgKz0gYCAke3N2Z1BhdGhDb21tYW5kfSR7eENvb3JkaW5hdGV9ICR7eUNvb3JkaW5hdGV9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGF0aENvb3JkaW5hdGVzID0gdGhpcy52ZXJpZnlJZkNsb3NlUGF0aChwYXRoQ29vcmRpbmF0ZXMsIHNlcmllLmRhdGEubGVuZ3RoIC0gMSwgcmFuZ2UsIDAsIGNvbnRhaW5lclNpemUpO1xyXG5cclxuICAgICAgICB0aGlzLnNlcmllc1BvaW50c0Nvb3JkaW5hdGVzID0gWy4uLnRoaXMuc2VyaWVzUG9pbnRzQ29vcmRpbmF0ZXMsIHBvaW50Q29vcmRpbmF0ZXNdO1xyXG5cclxuICAgICAgICByZXR1cm4geyBjb29yZGluYXRlczogcGF0aENvb3JkaW5hdGVzLCBjb2xvciwgaXNBY3RpdmU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeUlmQ2xvc2VQYXRoKHBhdGhDb29yZGluYXRlcywgbGFzdEluZGV4LCByYW5nZSwgZGF0YSwgY29udGFpbmVyU2l6ZSkge1xyXG4gICAgY29uc3QgeyBheGlzWExhYmVsV2lkdGgsIHN2Z1dpZHRoIH0gPSBjb250YWluZXJTaXplO1xyXG5cclxuICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gUG9DaGFydFR5cGUuQXJlYSkge1xyXG4gICAgICBjb25zdCB4TGFzdFBvc2l0aW9uID0gdGhpcy54Q29vcmRpbmF0ZShsYXN0SW5kZXgsIGNvbnRhaW5lclNpemUpO1xyXG4gICAgICBjb25zdCBiYXNlWUNvb3JkaW5hdGUgPSB0aGlzLnlDb29yZGluYXRlKHJhbmdlLCBkYXRhLCBjb250YWluZXJTaXplKTtcclxuICAgICAgY29uc3QgeEluaXRpYWxQb3NpdGlvbiA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgdGhpcy5hbGlnbkJ5VGhlQ29ybmVyc1xyXG4gICAgICAgICAgPyBheGlzWExhYmVsV2lkdGhcclxuICAgICAgICAgIDogYXhpc1hMYWJlbFdpZHRoICsgKHN2Z1dpZHRoIC0gYXhpc1hMYWJlbFdpZHRoKSAvIHRoaXMuc2VyaWVzTGVuZ3RoIC8gMlxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIGAke3BhdGhDb29yZGluYXRlc30gJHt4TGFzdFBvc2l0aW9ufSAke2Jhc2VZQ29vcmRpbmF0ZX0gTCR7eEluaXRpYWxQb3NpdGlvbn0gJHtiYXNlWUNvb3JkaW5hdGV9IFpgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRoQ29vcmRpbmF0ZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHlDb29yZGluYXRlKHJhbmdlOiBQb0NoYXJ0TWluTWF4VmFsdWVzLCBkYXRhOiBudW1iZXIsIGNvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplKSB7XHJcbiAgICBjb25zdCB5UnJhdGlvID0gdGhpcy5tYXRoc1NlcnZpY2UuZ2V0U2VyaWVQZXJjZW50YWdlKHJhbmdlLCBkYXRhKTtcclxuICAgIGNvbnN0IHlDb29yZGluYXRlID1cclxuICAgICAgY29udGFpbmVyU2l6ZS5zdmdQbG90dGluZ0FyZWFIZWlnaHQgLSBjb250YWluZXJTaXplLnN2Z1Bsb3R0aW5nQXJlYUhlaWdodCAqIHlScmF0aW8gKyBQb0NoYXJ0UGxvdEFyZWFQYWRkaW5nVG9wO1xyXG5cclxuICAgIHJldHVybiBNYXRoLmZsb29yKHlDb29yZGluYXRlKTtcclxuICB9XHJcbn1cclxuIl19