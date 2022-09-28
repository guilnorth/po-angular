import { Injectable } from '@angular/core';
import { PoChartPadding } from '../helpers/po-chart-default-values.constant';
import * as i0 from "@angular/core";
export class PoChartSvgContainerService {
    constructor() { }
    /**
     * Retorna um objeto do tipo PoChartContainerSize contendo as dimensões necessárias para plotagem do SVG.
     *
     * @param chartHeight
     * @param chartWrapperWidth
     * @param chartHeaderHeight
     * @param chartLegendHeight
     */
    calculateSVGContainerMeasurements(chartHeight = 0, chartWrapperWidth = 0, chartHeaderHeight = 0, chartLegendHeight = 0) {
        const svgWidth = this.svgWidth(chartWrapperWidth);
        const centerX = this.center(chartWrapperWidth);
        const svgHeight = this.svgHeight(chartHeight, chartHeaderHeight, chartLegendHeight);
        const centerY = this.center(svgHeight);
        const svgPlottingAreaHeight = this.svgPlottingAreaHeight(svgHeight);
        return {
            svgWidth,
            svgHeight,
            centerX,
            centerY,
            svgPlottingAreaHeight
        };
    }
    // Largura do container.
    svgWidth(chartWrapperWidth) {
        const wrapperWidth = chartWrapperWidth - PoChartPadding * 2;
        return wrapperWidth > 0 ? wrapperWidth : 0;
    }
    // O centro do container. Usado para gráficos do tipo circular.
    center(dimension) {
        return dimension / 2;
    }
    // Altura do container
    svgHeight(chartHeight, chartHeaderHeight, chartLegendHeight) {
        const subtractedHeights = chartHeight - chartHeaderHeight - chartLegendHeight - PoChartPadding * 2;
        return subtractedHeights <= 0 ? 0 : subtractedHeights;
    }
    /**
     * Altura da área de plotagem.
     * Subtrai a altura do container SVG pelo padding superior + área para overflow de labels do eixo X.
     */
    svgPlottingAreaHeight(svgHeight) {
        return svgHeight - PoChartPadding - 8;
    }
}
PoChartSvgContainerService.ɵfac = function PoChartSvgContainerService_Factory(t) { return new (t || PoChartSvgContainerService)(); };
PoChartSvgContainerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoChartSvgContainerService, factory: PoChartSvgContainerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartSvgContainerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtc3ZnLWNvbnRhaW5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3NlcnZpY2VzL3BvLWNoYXJ0LXN2Zy1jb250YWluZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFNN0UsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxnQkFBZSxDQUFDO0lBRWhCOzs7Ozs7O09BT0c7SUFDSCxpQ0FBaUMsQ0FDL0IsY0FBc0IsQ0FBQyxFQUN2QixvQkFBNEIsQ0FBQyxFQUM3QixvQkFBNEIsQ0FBQyxFQUM3QixvQkFBNEIsQ0FBQztRQUU3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVwRSxPQUFPO1lBQ0wsUUFBUTtZQUNSLFNBQVM7WUFDVCxPQUFPO1lBQ1AsT0FBTztZQUNQLHFCQUFxQjtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVELHdCQUF3QjtJQUNoQixRQUFRLENBQUMsaUJBQXlCO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLGlCQUFpQixHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFFNUQsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0RBQStEO0lBQ3ZELE1BQU0sQ0FBQyxTQUFpQjtRQUM5QixPQUFPLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHNCQUFzQjtJQUNkLFNBQVMsQ0FBQyxXQUFtQixFQUFFLGlCQUF5QixFQUFFLGlCQUF5QjtRQUN6RixNQUFNLGlCQUFpQixHQUFHLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5HLE9BQU8saUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSyxxQkFBcUIsQ0FBQyxTQUFpQjtRQUM3QyxPQUFPLFNBQVMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O29HQXpEVSwwQkFBMEI7Z0ZBQTFCLDBCQUEwQixXQUExQiwwQkFBMEIsbUJBRnpCLE1BQU07dUZBRVAsMEJBQTBCO2NBSHRDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRQYWRkaW5nIH0gZnJvbSAnLi4vaGVscGVycy9wby1jaGFydC1kZWZhdWx0LXZhbHVlcy5jb25zdGFudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRDb250YWluZXJTaXplIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1jaGFydC1jb250YWluZXItc2l6ZS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydFN2Z0NvbnRhaW5lclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1bSBvYmpldG8gZG8gdGlwbyBQb0NoYXJ0Q29udGFpbmVyU2l6ZSBjb250ZW5kbyBhcyBkaW1lbnPDtWVzIG5lY2Vzc8OhcmlhcyBwYXJhIHBsb3RhZ2VtIGRvIFNWRy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjaGFydEhlaWdodFxyXG4gICAqIEBwYXJhbSBjaGFydFdyYXBwZXJXaWR0aFxyXG4gICAqIEBwYXJhbSBjaGFydEhlYWRlckhlaWdodFxyXG4gICAqIEBwYXJhbSBjaGFydExlZ2VuZEhlaWdodFxyXG4gICAqL1xyXG4gIGNhbGN1bGF0ZVNWR0NvbnRhaW5lck1lYXN1cmVtZW50cyhcclxuICAgIGNoYXJ0SGVpZ2h0OiBudW1iZXIgPSAwLFxyXG4gICAgY2hhcnRXcmFwcGVyV2lkdGg6IG51bWJlciA9IDAsXHJcbiAgICBjaGFydEhlYWRlckhlaWdodDogbnVtYmVyID0gMCxcclxuICAgIGNoYXJ0TGVnZW5kSGVpZ2h0OiBudW1iZXIgPSAwXHJcbiAgKTogUG9DaGFydENvbnRhaW5lclNpemUge1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSB0aGlzLnN2Z1dpZHRoKGNoYXJ0V3JhcHBlcldpZHRoKTtcclxuICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLmNlbnRlcihjaGFydFdyYXBwZXJXaWR0aCk7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSB0aGlzLnN2Z0hlaWdodChjaGFydEhlaWdodCwgY2hhcnRIZWFkZXJIZWlnaHQsIGNoYXJ0TGVnZW5kSGVpZ2h0KTtcclxuICAgIGNvbnN0IGNlbnRlclkgPSB0aGlzLmNlbnRlcihzdmdIZWlnaHQpO1xyXG4gICAgY29uc3Qgc3ZnUGxvdHRpbmdBcmVhSGVpZ2h0ID0gdGhpcy5zdmdQbG90dGluZ0FyZWFIZWlnaHQoc3ZnSGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdmdXaWR0aCxcclxuICAgICAgc3ZnSGVpZ2h0LFxyXG4gICAgICBjZW50ZXJYLFxyXG4gICAgICBjZW50ZXJZLFxyXG4gICAgICBzdmdQbG90dGluZ0FyZWFIZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBMYXJndXJhIGRvIGNvbnRhaW5lci5cclxuICBwcml2YXRlIHN2Z1dpZHRoKGNoYXJ0V3JhcHBlcldpZHRoOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJXaWR0aCA9IGNoYXJ0V3JhcHBlcldpZHRoIC0gUG9DaGFydFBhZGRpbmcgKiAyO1xyXG5cclxuICAgIHJldHVybiB3cmFwcGVyV2lkdGggPiAwID8gd3JhcHBlcldpZHRoIDogMDtcclxuICB9XHJcblxyXG4gIC8vIE8gY2VudHJvIGRvIGNvbnRhaW5lci4gVXNhZG8gcGFyYSBncsOhZmljb3MgZG8gdGlwbyBjaXJjdWxhci5cclxuICBwcml2YXRlIGNlbnRlcihkaW1lbnNpb246IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvbiAvIDI7XHJcbiAgfVxyXG5cclxuICAvLyBBbHR1cmEgZG8gY29udGFpbmVyXHJcbiAgcHJpdmF0ZSBzdmdIZWlnaHQoY2hhcnRIZWlnaHQ6IG51bWJlciwgY2hhcnRIZWFkZXJIZWlnaHQ6IG51bWJlciwgY2hhcnRMZWdlbmRIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3VidHJhY3RlZEhlaWdodHMgPSBjaGFydEhlaWdodCAtIGNoYXJ0SGVhZGVySGVpZ2h0IC0gY2hhcnRMZWdlbmRIZWlnaHQgLSBQb0NoYXJ0UGFkZGluZyAqIDI7XHJcblxyXG4gICAgcmV0dXJuIHN1YnRyYWN0ZWRIZWlnaHRzIDw9IDAgPyAwIDogc3VidHJhY3RlZEhlaWdodHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbHR1cmEgZGEgw6FyZWEgZGUgcGxvdGFnZW0uXHJcbiAgICogU3VidHJhaSBhIGFsdHVyYSBkbyBjb250YWluZXIgU1ZHIHBlbG8gcGFkZGluZyBzdXBlcmlvciArIMOhcmVhIHBhcmEgb3ZlcmZsb3cgZGUgbGFiZWxzIGRvIGVpeG8gWC5cclxuICAgKi9cclxuICBwcml2YXRlIHN2Z1Bsb3R0aW5nQXJlYUhlaWdodChzdmdIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHN2Z0hlaWdodCAtIFBvQ2hhcnRQYWRkaW5nIC0gODtcclxuICB9XHJcbn1cclxuIl19