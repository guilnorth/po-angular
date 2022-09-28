import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-chart-maths.service";
export class PoChartBarBaseComponent {
    constructor(mathsService) {
        this.mathsService = mathsService;
        this.barClick = new EventEmitter();
        this.barHover = new EventEmitter();
        this._containerSize = {};
        this._range = {};
        this._series = [];
    }
    set range(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._range = value;
            this.calculateSeriesPathsCoordinates(this.containerSize, this._series, this._range);
        }
    }
    get range() {
        return this._range;
    }
    set containerSize(value) {
        this._containerSize = value;
        this.calculateSeriesPathsCoordinates(this._containerSize, this.series, this.range);
    }
    get containerSize() {
        return this._containerSize;
    }
    set series(seriesList) {
        const seriesDataArrayFilter = seriesList.filter(serie => Array.isArray(serie.data));
        if (seriesDataArrayFilter.length) {
            this._series = seriesDataArrayFilter;
            this.seriesGreaterLength = this.mathsService.seriesGreaterLength(this.series);
            this.calculateSeriesPathsCoordinates(this.containerSize, seriesDataArrayFilter, this.range);
        }
        else {
            this._series = [];
        }
    }
    get series() {
        return this._series;
    }
    onSerieBarClick(selectedItem) {
        this.barClick.emit(selectedItem);
    }
    onSerieBarHover(selectedItem) {
        this.barHover.emit(selectedItem);
    }
    trackBy(index) {
        return index;
    }
    calculateSeriesPathsCoordinates(containerSize, series, range) {
        this.seriesPathsCoordinates = series.map((serie, seriesIndex) => {
            if (Array.isArray(serie.data)) {
                let pathCoordinates = [];
                serie.data.forEach((data, serieDataIndex) => {
                    if (this.mathsService.verifyIfFloatOrInteger(data)) {
                        const coordinates = this.barCoordinates(seriesIndex, serieDataIndex, containerSize, range, data);
                        const category = this.serieCategory(serieDataIndex, this.categories);
                        const label = serie['label'];
                        const color = serie['color'];
                        const tooltip = serie['tooltip'];
                        const tooltipLabel = this.getTooltipLabel(data, label, tooltip);
                        pathCoordinates = [...pathCoordinates, { category, color, label, tooltipLabel, data, coordinates }];
                    }
                });
                return pathCoordinates;
            }
        });
    }
    getTooltipLabel(data, label, tooltipLabel) {
        const dataLabel = label ? `${label}: ` : '';
        const dataValue = data.toString();
        return tooltipLabel || `${dataLabel}${dataValue}`;
    }
    serieCategory(index, categories = []) {
        return categories[index] ?? undefined;
    }
}
PoChartBarBaseComponent.ɵfac = function PoChartBarBaseComponent_Factory(t) { return new (t || PoChartBarBaseComponent)(i0.ɵɵdirectiveInject(i1.PoChartMathsService)); };
PoChartBarBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoChartBarBaseComponent, inputs: { categories: ["p-categories", "categories"], range: ["p-range", "range"], containerSize: ["p-container-size", "containerSize"], series: ["p-series", "series"] }, outputs: { barClick: "p-bar-click", barHover: "p-bar-hover" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartBarBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoChartMathsService }]; }, { categories: [{
            type: Input,
            args: ['p-categories']
        }], barClick: [{
            type: Output,
            args: ['p-bar-click']
        }], barHover: [{
            type: Output,
            args: ['p-bar-hover']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYmFyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1iYXIvcG8tY2hhcnQtYmFyLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVV2RSxNQUFNLE9BQWdCLHVCQUF1QjtJQXFEM0MsWUFBc0IsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBbERoQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVuQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU1sRCxtQkFBYyxHQUF5QixFQUFFLENBQUM7UUFDMUMsV0FBTSxHQUF3QixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUF3QixFQUFFLENBQUM7SUF3Q2dCLENBQUM7SUF0QzNELElBQXNCLEtBQUssQ0FBQyxLQUEwQjtRQUNwRCxJQUFJLEtBQUssWUFBWSxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVwQixJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRjtJQUNILENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQStCLGFBQWEsQ0FBQyxLQUEyQjtRQUN0RSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FB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Q0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLFlBQW9CO1FBQ3ZFLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsQyxPQUFPLFlBQVksSUFBSSxHQUFHLFNBQVMsR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWEsRUFBRSxhQUE0QixFQUFFO1FBQ2pFLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUN4QyxDQUFDOzs4RkF4R21CLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FENUMsU0FBUztzRUFFZSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFFRSxRQUFRO2tCQUE5QixNQUFNO21CQUFDLGFBQWE7WUFFRSxRQUFRO2tCQUE5QixNQUFNO21CQUFDLGFBQWE7WUFVQyxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVM7WUFZZSxhQUFhO2tCQUEzQyxLQUFLO21CQUFDLGtCQUFrQjtZQVVGLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0TWF0aHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tY2hhcnQtbWF0aHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0Q29udGFpbmVyU2l6ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtY29udGFpbmVyLXNpemUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydE1pbk1heFZhbHVlcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtbWluLW1heC12YWx1ZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydEJhckNvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1iYXItY29vcmRpbmF0ZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydFNlcmllIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1zZXJpZS5pbnRlcmZhY2UnO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0NoYXJ0QmFyQmFzZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLWNhdGVnb3JpZXMnKSBjYXRlZ29yaWVzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICBAT3V0cHV0KCdwLWJhci1jbGljaycpIGJhckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3AtYmFyLWhvdmVyJykgYmFySG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgc2VyaWVzUGF0aHNDb29yZGluYXRlczogQXJyYXk8QXJyYXk8UG9DaGFydEJhckNvb3JkaW5hdGVzPj47XHJcblxyXG4gIHByb3RlY3RlZCBzZXJpZXNHcmVhdGVyTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5lclNpemU6IFBvQ2hhcnRDb250YWluZXJTaXplID0ge307XHJcbiAgcHJpdmF0ZSBfcmFuZ2U6IFBvQ2hhcnRNaW5NYXhWYWx1ZXMgPSB7fTtcclxuICBwcml2YXRlIF9zZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4gPSBbXTtcclxuXHJcbiAgQElucHV0KCdwLXJhbmdlJykgc2V0IHJhbmdlKHZhbHVlOiBQb0NoYXJ0TWluTWF4VmFsdWVzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9yYW5nZSA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5jYWxjdWxhdGVTZXJpZXNQYXRoc0Nvb3JkaW5hdGVzKHRoaXMuY29udGFpbmVyU2l6ZSwgdGhpcy5fc2VyaWVzLCB0aGlzLl9yYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3AtY29udGFpbmVyLXNpemUnKSBzZXQgY29udGFpbmVyU2l6ZSh2YWx1ZTogUG9DaGFydENvbnRhaW5lclNpemUpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lclNpemUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZVNlcmllc1BhdGhzQ29vcmRpbmF0ZXModGhpcy5fY29udGFpbmVyU2l6ZSwgdGhpcy5zZXJpZXMsIHRoaXMucmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRhaW5lclNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyU2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgncC1zZXJpZXMnKSBzZXQgc2VyaWVzKHNlcmllc0xpc3Q6IEFycmF5PFBvQ2hhcnRTZXJpZT4pIHtcclxuICAgIGNvbnN0IHNlcmllc0RhdGFBcnJheUZpbHRlciA9IHNlcmllc0xpc3QuZmlsdGVyKHNlcmllID0+IEFycmF5LmlzQXJyYXkoc2VyaWUuZGF0YSkpO1xyXG5cclxuICAgIGlmIChzZXJpZXNEYXRhQXJyYXlGaWx0ZXIubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3NlcmllcyA9IHNlcmllc0RhdGFBcnJheUZpbHRlcjtcclxuICAgICAgdGhpcy5zZXJpZXNHcmVhdGVyTGVuZ3RoID0gdGhpcy5tYXRoc1NlcnZpY2Uuc2VyaWVzR3JlYXRlckxlbmd0aCh0aGlzLnNlcmllcyk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2VyaWVzUGF0aHNDb29yZGluYXRlcyh0aGlzLmNvbnRhaW5lclNpemUsIHNlcmllc0RhdGFBcnJheUZpbHRlciwgdGhpcy5yYW5nZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXJpZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZXJpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VyaWVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1hdGhzU2VydmljZTogUG9DaGFydE1hdGhzU2VydmljZSkge31cclxuXHJcbiAgb25TZXJpZUJhckNsaWNrKHNlbGVjdGVkSXRlbTogYW55KSB7XHJcbiAgICB0aGlzLmJhckNsaWNrLmVtaXQoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcblxyXG4gIG9uU2VyaWVCYXJIb3ZlcihzZWxlY3RlZEl0ZW06IGFueSkge1xyXG4gICAgdGhpcy5iYXJIb3Zlci5lbWl0KHNlbGVjdGVkSXRlbSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5KGluZGV4KSB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVNlcmllc1BhdGhzQ29vcmRpbmF0ZXMoXHJcbiAgICBjb250YWluZXJTaXplOiBQb0NoYXJ0Q29udGFpbmVyU2l6ZSxcclxuICAgIHNlcmllczogQXJyYXk8UG9DaGFydFNlcmllPixcclxuICAgIHJhbmdlOiBQb0NoYXJ0TWluTWF4VmFsdWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcmllc1BhdGhzQ29vcmRpbmF0ZXMgPSBzZXJpZXMubWFwKChzZXJpZTogUG9DaGFydFNlcmllLCBzZXJpZXNJbmRleCkgPT4ge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZXJpZS5kYXRhKSkge1xyXG4gICAgICAgIGxldCBwYXRoQ29vcmRpbmF0ZXM6IEFycmF5PFBvQ2hhcnRCYXJDb29yZGluYXRlcz4gPSBbXTtcclxuXHJcbiAgICAgICAgc2VyaWUuZGF0YS5mb3JFYWNoKChkYXRhLCBzZXJpZURhdGFJbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubWF0aHNTZXJ2aWNlLnZlcmlmeUlmRmxvYXRPckludGVnZXIoZGF0YSkpIHtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLmJhckNvb3JkaW5hdGVzKHNlcmllc0luZGV4LCBzZXJpZURhdGFJbmRleCwgY29udGFpbmVyU2l6ZSwgcmFuZ2UsIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnNlcmllQ2F0ZWdvcnkoc2VyaWVEYXRhSW5kZXgsIHRoaXMuY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gc2VyaWVbJ2xhYmVsJ107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc2VyaWVbJ2NvbG9yJ107XHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBzZXJpZVsndG9vbHRpcCddO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwTGFiZWwgPSB0aGlzLmdldFRvb2x0aXBMYWJlbChkYXRhLCBsYWJlbCwgdG9vbHRpcCk7XHJcblxyXG4gICAgICAgICAgICBwYXRoQ29vcmRpbmF0ZXMgPSBbLi4ucGF0aENvb3JkaW5hdGVzLCB7IGNhdGVnb3J5LCBjb2xvciwgbGFiZWwsIHRvb2x0aXBMYWJlbCwgZGF0YSwgY29vcmRpbmF0ZXMgfV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoQ29vcmRpbmF0ZXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUb29sdGlwTGFiZWwoZGF0YTogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCB0b29sdGlwTGFiZWw6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YUxhYmVsID0gbGFiZWwgPyBgJHtsYWJlbH06IGAgOiAnJztcclxuICAgIGNvbnN0IGRhdGFWYWx1ZSA9IGRhdGEudG9TdHJpbmcoKTtcclxuXHJcbiAgICByZXR1cm4gdG9vbHRpcExhYmVsIHx8IGAke2RhdGFMYWJlbH0ke2RhdGFWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXJpZUNhdGVnb3J5KGluZGV4OiBudW1iZXIsIGNhdGVnb3JpZXM6IEFycmF5PHN0cmluZz4gPSBbXSkge1xyXG4gICAgcmV0dXJuIGNhdGVnb3JpZXNbaW5kZXhdID8/IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBiYXJDb29yZGluYXRlcyhcclxuICAgIHNlcmllc0luZGV4OiBudW1iZXIsXHJcbiAgICBzZXJpZURhdGFJbmRleDogbnVtYmVyLFxyXG4gICAgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemUsXHJcbiAgICByYW5nZTogUG9DaGFydE1pbk1heFZhbHVlcyxcclxuICAgIHNlcmllVmFsdWU6IG51bWJlclxyXG4gICk7XHJcbn1cclxuIl19