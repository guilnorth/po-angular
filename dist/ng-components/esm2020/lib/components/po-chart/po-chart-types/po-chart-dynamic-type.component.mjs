import { ViewChild, Directive } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["chartBody"];
const _c1 = ["svgContainer"];
const Padding = 24;
/* eslint-disable @angular-eslint/directive-class-suffix */
export class PoChartDynamicTypeComponent {
    constructor() {
        this.innerRadius = 0;
        this.onSerieClick = new Subject();
        this.onSerieHover = new Subject();
        // eslint-disable-next-line
        this._series = [];
    }
    calculateSVGContainerDimensions(chartWrapperElement, chartHeaderElement, chartLegendElement) {
        const svgContainerHeightCalc = this.height - chartHeaderElement - chartLegendElement - Padding * 2;
        this.svgHeight = svgContainerHeightCalc <= 0 ? 0 : svgContainerHeightCalc;
        this.centerX = chartWrapperElement / 2;
    }
    calculateTotalValue() {
        this.totalValue = this.series.reduce((previousValue, serie) => previousValue + (serie.data ? serie.data : serie.value), 0);
    }
    set series(value) {
        this._series = this.getSeriesWithValue(value);
    }
    get series() {
        return this._series;
    }
    getSeriesWithValue(value) {
        return value;
    }
}
PoChartDynamicTypeComponent.ɵfac = function PoChartDynamicTypeComponent_Factory(t) { return new (t || PoChartDynamicTypeComponent)(); };
PoChartDynamicTypeComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoChartDynamicTypeComponent, viewQuery: function PoChartDynamicTypeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartBody = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgContainer = _t.first);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartDynamicTypeComponent, [{
        type: Directive
    }], null, { chartBody: [{
            type: ViewChild,
            args: ['chartBody', { static: true }]
        }], svgContainer: [{
            type: ViewChild,
            args: ['svgContainer', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtZHluYW1pYy10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC10eXBlcy9wby1jaGFydC1keW5hbWljLXR5cGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJL0IsTUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDO0FBRTNCLDJEQUEyRDtBQUUzRCxNQUFNLE9BQWdCLDJCQUEyQjtJQURqRDtRQWVFLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0MsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVczQywyQkFBMkI7UUFDakIsWUFBTyxHQUFlLEVBQUUsQ0FBQztLQTJCcEM7SUF6QkMsK0JBQStCLENBQUMsbUJBQTJCLEVBQUUsa0JBQTBCLEVBQUUsa0JBQTBCO1FBQ2pILE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRW5HLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO1FBQzFFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDbEMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ2pGLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWlCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVTLGtCQUFrQixDQUFDLEtBQUs7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztzR0F0RG1CLDJCQUEyQjs4RUFBM0IsMkJBQTJCOzs7Ozs7Ozt1RkFBM0IsMkJBQTJCO2NBRGhELFNBQVM7Z0JBRWtDLFNBQVM7a0JBQWxELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVLLFlBQVk7a0JBQXhELFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0VHlwZSB9IGZyb20gJy4uL2VudW1zL3BvLWNoYXJ0LXR5cGUuZW51bSc7XHJcblxyXG5jb25zdCBQYWRkaW5nOiBudW1iZXIgPSAyNDtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtY2xhc3Mtc3VmZml4ICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9DaGFydER5bmFtaWNUeXBlQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdjaGFydEJvZHknLCB7IHN0YXRpYzogdHJ1ZSB9KSBjaGFydEJvZHk6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3N2Z0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHN2Z0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgY2VudGVyWDogbnVtYmVyO1xyXG4gIGNoYXJ0RWxlbWVudENhdGVnb3J5OiBhbnk7XHJcbiAgY2hhcnRFbGVtZW50RGVzY3JpcHRpb246IGFueTtcclxuICBjaGFydEVsZW1lbnRWYWx1ZTogYW55O1xyXG4gIGNoYXJ0SGVhZGVyOiBudW1iZXI7XHJcbiAgY2hhcnRMZWdlbmQ6IG51bWJlcjtcclxuICBjaGFydFdyYXBwZXI6IG51bWJlcjtcclxuICBjb2xvcnM6IEFycmF5PHN0cmluZz47XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgaW5uZXJSYWRpdXM6IG51bWJlciA9IDA7XHJcbiAgb25TZXJpZUNsaWNrOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIG9uU2VyaWVIb3ZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBzdmdFbGVtZW50OiBIVE1MT2JqZWN0RWxlbWVudDtcclxuICBzdmdIZWlnaHQ6IG51bWJlcjtcclxuICB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgJiBFdmVudFRhcmdldDtcclxuICB0b29sdGlwRWxlbWVudDogSFRNTE9iamVjdEVsZW1lbnQ7XHJcbiAgdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICB0b3RhbFZhbHVlOiBudW1iZXI7XHJcbiAgdHlwZTogUG9DaGFydFR5cGU7XHJcblxyXG4gIHByb3RlY3RlZCB3aW5kb3dSZXNpemVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICBwcm90ZWN0ZWQgd2luZG93U2Nyb2xsTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHJvdGVjdGVkIF9zZXJpZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgY2FsY3VsYXRlU1ZHQ29udGFpbmVyRGltZW5zaW9ucyhjaGFydFdyYXBwZXJFbGVtZW50OiBudW1iZXIsIGNoYXJ0SGVhZGVyRWxlbWVudDogbnVtYmVyLCBjaGFydExlZ2VuZEVsZW1lbnQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3ZnQ29udGFpbmVySGVpZ2h0Q2FsYyA9IHRoaXMuaGVpZ2h0IC0gY2hhcnRIZWFkZXJFbGVtZW50IC0gY2hhcnRMZWdlbmRFbGVtZW50IC0gUGFkZGluZyAqIDI7XHJcblxyXG4gICAgdGhpcy5zdmdIZWlnaHQgPSBzdmdDb250YWluZXJIZWlnaHRDYWxjIDw9IDAgPyAwIDogc3ZnQ29udGFpbmVySGVpZ2h0Q2FsYztcclxuICAgIHRoaXMuY2VudGVyWCA9IGNoYXJ0V3JhcHBlckVsZW1lbnQgLyAyO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlVG90YWxWYWx1ZSgpIHtcclxuICAgIHRoaXMudG90YWxWYWx1ZSA9IHRoaXMuc2VyaWVzLnJlZHVjZShcclxuICAgICAgKHByZXZpb3VzVmFsdWUsIHNlcmllKSA9PiBwcmV2aW91c1ZhbHVlICsgKHNlcmllLmRhdGEgPyBzZXJpZS5kYXRhIDogc2VyaWUudmFsdWUpLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlcmllcyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5fc2VyaWVzID0gdGhpcy5nZXRTZXJpZXNXaXRoVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlcmllcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXJpZXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0U2VyaWVzV2l0aFZhbHVlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==