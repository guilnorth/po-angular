import { Directive, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { PoChartStartAngle, PoChartCompleteCircle, PoChartAngleStepInterval } from '../../helpers/po-chart-default-values.constant';
import * as i0 from "@angular/core";
const _c0 = ["svgPaths"];
const _c1 = ["svgLabels"];
export class PoChartCircularComponent {
    constructor(ngZone, changeDetector) {
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        this.circularClick = new EventEmitter();
        this.circularHover = new EventEmitter();
        this.canDisplayLabels = false;
        this.seriesLabels = [];
        this.showLabels = false;
    }
    set options(value) {
        if (!isNaN(value?.innerRadius)) {
            this._options = value;
            this.innerRadius = Math.min(Math.max(this._options.innerRadius, 0), 100);
        }
    }
    get options() {
        return this._options;
    }
    set series(value) {
        this._series = value;
        this.animate = true;
    }
    get series() {
        return this._series;
    }
    onSerieClick(selectedItem) {
        this.circularClick.emit(selectedItem);
    }
    onSerieHover(selectedItem) {
        this.circularHover.emit(selectedItem);
    }
    calculateAngle(data, totalValue) {
        return (data / totalValue) * (Math.PI * 2);
    }
    drawSeries(series = [], height) {
        this.seriesList = [];
        this.showLabels = false;
        this.totalValue = this.calculateTotalValue(series);
        if (this.totalValue && this.totalValue > 0) {
            this.seriesList = this.validateSeries(series);
            this.changeDetector.detectChanges();
            if (this.seriesList.length && this.svgPaths) {
                this.initDrawPaths(this.seriesList, this.totalValue, height);
            }
        }
    }
    calculateTotalValue(series) {
        return series.reduce((previousValue, serie) => {
            const data = serie.data ? serie.data : serie.value;
            return previousValue + (data > 0 ? data : 0);
        }, 0);
    }
    calculateSerieCoordinates(series, totalValue, height) {
        let startRadianAngle;
        let endRadianAngle = PoChartStartAngle;
        series.forEach((serie, index) => {
            startRadianAngle = endRadianAngle;
            endRadianAngle = startRadianAngle + this.calculateAngle(serie.data, totalValue) - PoChartCompleteCircle;
            const coordinates = this.calculateCoordinates(height, startRadianAngle, endRadianAngle);
            this.svgPaths.toArray()[index].applyCoordinates(coordinates);
            this.showLabels = this.canDisplayLabels;
        });
    }
    calculateCoordinatesWithAnimation(series, totalValue, height, startRadianAngle, endRadianAngle, currentRadianAngle = 0, seriesIndex = 0) {
        const finishedCurrentSerie = currentRadianAngle > endRadianAngle;
        const finishedAllSeries = seriesIndex === series.length;
        if (finishedAllSeries) {
            this.animate = false;
            return;
        }
        if (finishedCurrentSerie) {
            this.setSerieLabelCoordinates(seriesIndex);
            currentRadianAngle = 0;
            seriesIndex++;
            startRadianAngle = startRadianAngle + endRadianAngle;
            endRadianAngle =
                seriesIndex < series.length ? this.calculateAngle(series[seriesIndex].data, totalValue) : undefined;
        }
        else {
            currentRadianAngle += PoChartAngleStepInterval;
            const currentEndRadianAngle = this.calculateCurrentEndAngle(currentRadianAngle, startRadianAngle, endRadianAngle);
            const coordinates = this.calculateCoordinates(height, startRadianAngle, currentEndRadianAngle);
            this.svgPaths.toArray()[seriesIndex].applyCoordinates(coordinates);
        }
        window.requestAnimationFrame(this.calculateCoordinatesWithAnimation.bind(this, series, totalValue, height, startRadianAngle, endRadianAngle, currentRadianAngle, seriesIndex));
    }
    calculateCurrentEndAngle(currentRadianAngle, startRadianAngle, endRadianAngle) {
        const isSerieDrawCompleted = startRadianAngle + currentRadianAngle > startRadianAngle + endRadianAngle;
        return isSerieDrawCompleted
            ? startRadianAngle + endRadianAngle - PoChartCompleteCircle
            : startRadianAngle + currentRadianAngle;
    }
    initDrawPaths(seriesList, totalValue, height) {
        if (!this.animate) {
            this.calculateSerieCoordinates(seriesList, totalValue, height);
        }
        else {
            const startRadianAngle = PoChartStartAngle;
            const endRadianAngle = this.calculateAngle(seriesList[0].data, totalValue);
            this.ngZone.runOutsideAngular(() => this.calculateCoordinatesWithAnimation(seriesList, totalValue, height, startRadianAngle, endRadianAngle));
        }
    }
    setSerieLabelCoordinates(index) {
        if (this.svgLabels.toArray().length) {
            this.svgLabels.toArray()[index].applyCoordinates(this.seriesLabels[index]);
        }
    }
    validateSeries(series) {
        return series.reduce((seriesList, serie) => {
            const data = serie.data ?? serie.value;
            if (data && data > 0) {
                const color = serie.color;
                const label = serie.label;
                const tooltip = serie.tooltip;
                const tooltipLabel = this.getTooltipLabel(data, label, tooltip);
                seriesList = [...seriesList, { data, color, label, tooltipLabel }];
            }
            return seriesList;
        }, []);
    }
}
PoChartCircularComponent.ɵfac = function PoChartCircularComponent_Factory(t) { return new (t || PoChartCircularComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoChartCircularComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoChartCircularComponent, viewQuery: function PoChartCircularComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgPaths = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgLabels = _t);
    } }, inputs: { containerSize: ["p-container-size", "containerSize"], options: ["p-options", "options"], series: ["p-series", "series"] }, outputs: { circularClick: "p-circular-click", circularHover: "p-circular-hover" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartCircularComponent, [{
        type: Directive
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, { containerSize: [{
            type: Input,
            args: ['p-container-size']
        }], circularClick: [{
            type: Output,
            args: ['p-circular-click']
        }], circularHover: [{
            type: Output,
            args: ['p-circular-hover']
        }], svgPaths: [{
            type: ViewChildren,
            args: ['svgPaths']
        }], svgLabels: [{
            type: ViewChildren,
            args: ['svgLabels']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], series: [{
            type: Input,
            args: ['p-series']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtY2lyY3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1jaXJjdWxhci9wby1jaGFydC1jaXJjdWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3pCLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFXeEQsTUFBTSxPQUFnQix3QkFBd0I7SUE2QzVDLFlBQW9CLE1BQWMsRUFBVSxjQUFpQztRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBMUNqRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTXBFLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFtQyxFQUFFLENBQUM7UUFFbEQsZUFBVSxHQUFZLEtBQUssQ0FBQztJQStCb0QsQ0FBQztJQXJCakYsSUFBd0IsT0FBTyxDQUFDLEtBQXFCO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcs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UTtrQkFBekMsWUFBWTttQkFBQyxVQUFVO1lBRVcsU0FBUztrQkFBM0MsWUFBWTttQkFBQyxXQUFXO1lBZUQsT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBV0ssTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZHJlblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0NoYXJ0U3RhcnRBbmdsZSxcclxuICBQb0NoYXJ0Q29tcGxldGVDaXJjbGUsXHJcbiAgUG9DaGFydEFuZ2xlU3RlcEludGVydmFsXHJcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9wby1jaGFydC1kZWZhdWx0LXZhbHVlcy5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0Q2lyY3VsYXJMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hhcnQtY2lyY3VsYXItbGFiZWwvcG8tY2hhcnQtY2lyY3VsYXItbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydENpcmN1bGFyUGF0aENvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hhcnQtY2lyY3VsYXItcGF0aC9wby1jaGFydC1jaXJjdWxhci1wYXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRDb250YWluZXJTaXplIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1jb250YWluZXItc2l6ZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0TGFiZWxDb29yZGluYXRlcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtbGFiZWwtY29vcmRpbmF0ZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydE9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9DaGFydFBhdGhDb29yZGluYXRlcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtcGF0aC1jb29yZGluYXRlcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0U2VyaWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LXNlcmllLmludGVyZmFjZSc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvQ2hhcnRDaXJjdWxhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLWNvbnRhaW5lci1zaXplJykgY29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemU7XHJcblxyXG4gIEBPdXRwdXQoJ3AtY2lyY3VsYXItY2xpY2snKSBjaXJjdWxhckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3AtY2lyY3VsYXItaG92ZXInKSBjaXJjdWxhckhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oJ3N2Z1BhdGhzJykgcHJpdmF0ZSBzdmdQYXRoczogUXVlcnlMaXN0PFBvQ2hhcnRDaXJjdWxhclBhdGhDb21wb25lbnQ+O1xyXG5cclxuICBAVmlld0NoaWxkcmVuKCdzdmdMYWJlbHMnKSBwcml2YXRlIHN2Z0xhYmVsczogUXVlcnlMaXN0PFBvQ2hhcnRDaXJjdWxhckxhYmVsQ29tcG9uZW50PjtcclxuXHJcbiAgY2FuRGlzcGxheUxhYmVsczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNlcmllc0xhYmVsczogQXJyYXk8UG9DaGFydExhYmVsQ29vcmRpbmF0ZXM+ID0gW107XHJcbiAgc2VyaWVzTGlzdDogQXJyYXk8UG9DaGFydFBhdGhDb29yZGluYXRlcz47XHJcbiAgc2hvd0xhYmVsczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgaW5uZXJSYWRpdXM6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgdG90YWxWYWx1ZTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9vcHRpb25zOiBQb0NoYXJ0T3B0aW9ucztcclxuICBwcml2YXRlIF9zZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT47XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLW9wdGlvbnMnKSBzZXQgb3B0aW9ucyh2YWx1ZTogUG9DaGFydE9wdGlvbnMpIHtcclxuICAgIGlmICghaXNOYU4odmFsdWU/LmlubmVyUmFkaXVzKSkge1xyXG4gICAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaW5uZXJSYWRpdXMgPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLl9vcHRpb25zLmlubmVyUmFkaXVzLCAwKSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3Atc2VyaWVzJykgc2V0IHNlcmllcyh2YWx1ZTogQXJyYXk8UG9DaGFydFNlcmllPikge1xyXG4gICAgdGhpcy5fc2VyaWVzID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5hbmltYXRlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZXJpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VyaWVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG9uU2VyaWVDbGljayhzZWxlY3RlZEl0ZW06IGFueSkge1xyXG4gICAgdGhpcy5jaXJjdWxhckNsaWNrLmVtaXQoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcblxyXG4gIG9uU2VyaWVIb3ZlcihzZWxlY3RlZEl0ZW06IGFueSkge1xyXG4gICAgdGhpcy5jaXJjdWxhckhvdmVyLmVtaXQoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVBbmdsZShkYXRhOiBudW1iZXIsIHRvdGFsVmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChkYXRhIC8gdG90YWxWYWx1ZSkgKiAoTWF0aC5QSSAqIDIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRyYXdTZXJpZXMoc2VyaWVzOiBBcnJheTxQb0NoYXJ0U2VyaWU+ID0gW10sIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlcmllc0xpc3QgPSBbXTtcclxuICAgIHRoaXMuc2hvd0xhYmVscyA9IGZhbHNlO1xyXG4gICAgdGhpcy50b3RhbFZhbHVlID0gdGhpcy5jYWxjdWxhdGVUb3RhbFZhbHVlKHNlcmllcyk7XHJcbiAgICBpZiAodGhpcy50b3RhbFZhbHVlICYmIHRoaXMudG90YWxWYWx1ZSA+IDApIHtcclxuICAgICAgdGhpcy5zZXJpZXNMaXN0ID0gdGhpcy52YWxpZGF0ZVNlcmllcyhzZXJpZXMpO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlcmllc0xpc3QubGVuZ3RoICYmIHRoaXMuc3ZnUGF0aHMpIHtcclxuICAgICAgICB0aGlzLmluaXREcmF3UGF0aHModGhpcy5zZXJpZXNMaXN0LCB0aGlzLnRvdGFsVmFsdWUsIGhlaWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVG90YWxWYWx1ZShzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4pIHtcclxuICAgIHJldHVybiBzZXJpZXMucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBzZXJpZTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBzZXJpZS5kYXRhID8gc2VyaWUuZGF0YSA6IHNlcmllLnZhbHVlO1xyXG5cclxuICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyAoZGF0YSA+IDAgPyBkYXRhIDogMCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlU2VyaWVDb29yZGluYXRlcyhzZXJpZXM6IEFycmF5PFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXM+LCB0b3RhbFZhbHVlOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBsZXQgc3RhcnRSYWRpYW5BbmdsZTtcclxuICAgIGxldCBlbmRSYWRpYW5BbmdsZSA9IFBvQ2hhcnRTdGFydEFuZ2xlO1xyXG5cclxuICAgIHNlcmllcy5mb3JFYWNoKChzZXJpZTogYW55LCBpbmRleCkgPT4ge1xyXG4gICAgICBzdGFydFJhZGlhbkFuZ2xlID0gZW5kUmFkaWFuQW5nbGU7XHJcbiAgICAgIGVuZFJhZGlhbkFuZ2xlID0gc3RhcnRSYWRpYW5BbmdsZSArIHRoaXMuY2FsY3VsYXRlQW5nbGUoc2VyaWUuZGF0YSwgdG90YWxWYWx1ZSkgLSBQb0NoYXJ0Q29tcGxldGVDaXJjbGU7XHJcblxyXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuY2FsY3VsYXRlQ29vcmRpbmF0ZXMoaGVpZ2h0LCBzdGFydFJhZGlhbkFuZ2xlLCBlbmRSYWRpYW5BbmdsZSk7XHJcblxyXG4gICAgICB0aGlzLnN2Z1BhdGhzLnRvQXJyYXkoKVtpbmRleF0uYXBwbHlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XHJcbiAgICAgIHRoaXMuc2hvd0xhYmVscyA9IHRoaXMuY2FuRGlzcGxheUxhYmVscztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVDb29yZGluYXRlc1dpdGhBbmltYXRpb24oXHJcbiAgICBzZXJpZXM6IEFycmF5PFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXM+LFxyXG4gICAgdG90YWxWYWx1ZTogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICBzdGFydFJhZGlhbkFuZ2xlOiBudW1iZXIsXHJcbiAgICBlbmRSYWRpYW5BbmdsZTogbnVtYmVyLFxyXG4gICAgY3VycmVudFJhZGlhbkFuZ2xlOiBudW1iZXIgPSAwLFxyXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlciA9IDBcclxuICApIHtcclxuICAgIGNvbnN0IGZpbmlzaGVkQ3VycmVudFNlcmllID0gY3VycmVudFJhZGlhbkFuZ2xlID4gZW5kUmFkaWFuQW5nbGU7XHJcbiAgICBjb25zdCBmaW5pc2hlZEFsbFNlcmllcyA9IHNlcmllc0luZGV4ID09PSBzZXJpZXMubGVuZ3RoO1xyXG5cclxuICAgIGlmIChmaW5pc2hlZEFsbFNlcmllcykge1xyXG4gICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaW5pc2hlZEN1cnJlbnRTZXJpZSkge1xyXG4gICAgICB0aGlzLnNldFNlcmllTGFiZWxDb29yZGluYXRlcyhzZXJpZXNJbmRleCk7XHJcbiAgICAgIGN1cnJlbnRSYWRpYW5BbmdsZSA9IDA7XHJcbiAgICAgIHNlcmllc0luZGV4Kys7XHJcbiAgICAgIHN0YXJ0UmFkaWFuQW5nbGUgPSBzdGFydFJhZGlhbkFuZ2xlICsgZW5kUmFkaWFuQW5nbGU7XHJcbiAgICAgIGVuZFJhZGlhbkFuZ2xlID1cclxuICAgICAgICBzZXJpZXNJbmRleCA8IHNlcmllcy5sZW5ndGggPyB0aGlzLmNhbGN1bGF0ZUFuZ2xlKHNlcmllc1tzZXJpZXNJbmRleF0uZGF0YSwgdG90YWxWYWx1ZSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50UmFkaWFuQW5nbGUgKz0gUG9DaGFydEFuZ2xlU3RlcEludGVydmFsO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudEVuZFJhZGlhbkFuZ2xlID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50RW5kQW5nbGUoY3VycmVudFJhZGlhbkFuZ2xlLCBzdGFydFJhZGlhbkFuZ2xlLCBlbmRSYWRpYW5BbmdsZSk7XHJcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5jYWxjdWxhdGVDb29yZGluYXRlcyhoZWlnaHQsIHN0YXJ0UmFkaWFuQW5nbGUsIGN1cnJlbnRFbmRSYWRpYW5BbmdsZSk7XHJcblxyXG4gICAgICB0aGlzLnN2Z1BhdGhzLnRvQXJyYXkoKVtzZXJpZXNJbmRleF0uYXBwbHlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShcclxuICAgICAgdGhpcy5jYWxjdWxhdGVDb29yZGluYXRlc1dpdGhBbmltYXRpb24uYmluZChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHNlcmllcyxcclxuICAgICAgICB0b3RhbFZhbHVlLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgICBzdGFydFJhZGlhbkFuZ2xlLFxyXG4gICAgICAgIGVuZFJhZGlhbkFuZ2xlLFxyXG4gICAgICAgIGN1cnJlbnRSYWRpYW5BbmdsZSxcclxuICAgICAgICBzZXJpZXNJbmRleFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVDdXJyZW50RW5kQW5nbGUoY3VycmVudFJhZGlhbkFuZ2xlOiBudW1iZXIsIHN0YXJ0UmFkaWFuQW5nbGU6IG51bWJlciwgZW5kUmFkaWFuQW5nbGU6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXNTZXJpZURyYXdDb21wbGV0ZWQgPSBzdGFydFJhZGlhbkFuZ2xlICsgY3VycmVudFJhZGlhbkFuZ2xlID4gc3RhcnRSYWRpYW5BbmdsZSArIGVuZFJhZGlhbkFuZ2xlO1xyXG5cclxuICAgIHJldHVybiBpc1NlcmllRHJhd0NvbXBsZXRlZFxyXG4gICAgICA/IHN0YXJ0UmFkaWFuQW5nbGUgKyBlbmRSYWRpYW5BbmdsZSAtIFBvQ2hhcnRDb21wbGV0ZUNpcmNsZVxyXG4gICAgICA6IHN0YXJ0UmFkaWFuQW5nbGUgKyBjdXJyZW50UmFkaWFuQW5nbGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXREcmF3UGF0aHMoc2VyaWVzTGlzdDogQXJyYXk8UG9DaGFydFBhdGhDb29yZGluYXRlcz4sIHRvdGFsVmFsdWU6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5hbmltYXRlKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2VyaWVDb29yZGluYXRlcyhzZXJpZXNMaXN0LCB0b3RhbFZhbHVlLCBoZWlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc3RhcnRSYWRpYW5BbmdsZSA9IFBvQ2hhcnRTdGFydEFuZ2xlO1xyXG4gICAgICBjb25zdCBlbmRSYWRpYW5BbmdsZSA9IHRoaXMuY2FsY3VsYXRlQW5nbGUoc2VyaWVzTGlzdFswXS5kYXRhLCB0b3RhbFZhbHVlKTtcclxuXHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVDb29yZGluYXRlc1dpdGhBbmltYXRpb24oc2VyaWVzTGlzdCwgdG90YWxWYWx1ZSwgaGVpZ2h0LCBzdGFydFJhZGlhbkFuZ2xlLCBlbmRSYWRpYW5BbmdsZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U2VyaWVMYWJlbENvb3JkaW5hdGVzKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnN2Z0xhYmVscy50b0FycmF5KCkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc3ZnTGFiZWxzLnRvQXJyYXkoKVtpbmRleF0uYXBwbHlDb29yZGluYXRlcyh0aGlzLnNlcmllc0xhYmVsc1tpbmRleF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlcmllcyhzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4pIHtcclxuICAgIHJldHVybiBzZXJpZXMucmVkdWNlKChzZXJpZXNMaXN0LCBzZXJpZTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBzZXJpZS5kYXRhID8/IHNlcmllLnZhbHVlO1xyXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gc2VyaWUuY29sb3I7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBzZXJpZS5sYWJlbDtcclxuICAgICAgICBjb25zdCB0b29sdGlwID0gc2VyaWUudG9vbHRpcDtcclxuICAgICAgICBjb25zdCB0b29sdGlwTGFiZWwgPSB0aGlzLmdldFRvb2x0aXBMYWJlbChkYXRhLCBsYWJlbCwgdG9vbHRpcCk7XHJcblxyXG4gICAgICAgIHNlcmllc0xpc3QgPSBbLi4uc2VyaWVzTGlzdCwgeyBkYXRhLCBjb2xvciwgbGFiZWwsIHRvb2x0aXBMYWJlbCB9XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNlcmllc0xpc3Q7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2FsY3VsYXRlQ29vcmRpbmF0ZXMoaGVpZ2h0LCBzdGFydFJhZGlhbkFuZ2xlLCBjdXJyZW50RW5kUmFkaWFuQW5nbGUpO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRUb29sdGlwTGFiZWwoZGF0YSwgbGFiZWwsIHRvb2x0aXApO1xyXG59XHJcbiJdfQ==