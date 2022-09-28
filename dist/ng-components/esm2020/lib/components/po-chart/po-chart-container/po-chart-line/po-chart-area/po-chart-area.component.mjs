import { Component } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { PoChartLineBaseComponent } from '../po-chart-line-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-chart-maths.service";
import * as i2 from "@angular/common";
import * as i3 from "../po-chart-path/po-chart-path.component";
import * as i4 from "../po-chart-series-point/po-chart-series-point.component";
const _c0 = ["po-chart-area", ""];
function PoChartAreaComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵlistener("mouseenter", function PoChartAreaComponent__svg_g_2_Template__svg_g_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const i_r3 = restoredCtx.index; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onEnter(i_r3)); })("mouseleave", function PoChartAreaComponent__svg_g_2_Template__svg_g_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const i_r3 = restoredCtx.index; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onLeave(i_r3)); });
    i0.ɵɵelement(1, "g", 3);
    i0.ɵɵelementStart(2, "g", 4);
    i0.ɵɵlistener("p-point-click", function PoChartAreaComponent__svg_g_2_Template__svg_g_p_point_click_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onSeriePointClick($event)); })("p-point-hover", function PoChartAreaComponent__svg_g_2_Template__svg_g_p_point_hover_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSeriePointHover($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("po-chart-line-path-group-" + i_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-chart-line", ctx_r1.chartType === "line")("p-animate", ctx_r1.animate)("p-color", item_r2.color)("p-coordinates", item_r2 == null ? null : item_r2.coordinates)("p-is-active", item_r2.isActive);
    i0.ɵɵattribute("key", "po-chart-line-path-" + i_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-animate", ctx_r1.animate)("p-chart-line", ctx_r1.chartType === "line")("p-color", item_r2.color)("p-coordinates", ctx_r1.seriesPointsCoordinates[i_r3])("p-is-active", ctx_r1.activeTooltip)("p-relative-to", "po-chart-line-path-group-" + i_r3);
    i0.ɵɵattribute("key", "po-chart-line-path-points-group-" + i_r3);
} }
export class PoChartAreaComponent extends PoChartLineBaseComponent {
    constructor(mathsService, renderer, elementRef) {
        super(mathsService, renderer, elementRef);
        this.mathsService = mathsService;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    onEnter(serieIndex) {
        this.applyActiveItem(this.seriesPathsCoordinates, serieIndex);
        this.initializeListener(serieIndex);
        this.activeTooltip = true;
    }
    onLeave(serieIndex) {
        this.removeListener();
        this.applyActiveItem(this.seriesPathsCoordinates);
        this.applyActiveItem(this.seriesPointsCoordinates[serieIndex], null);
    }
    onSeriePointHover(selectedItem) {
        const { relativeTo, ...item } = selectedItem;
        this.pointHover.emit(item);
    }
    applyActiveItem(list, index) {
        list.forEach((serie, seriesIndex) => {
            serie['isActive'] = index === undefined ? true : index === seriesIndex;
        });
    }
    getMouseCoordinates(event) {
        event.preventDefault();
        const { svgDomMatrix, svgPoint } = this.svgSpace;
        svgPoint.x = event.clientX;
        svgPoint.y = event.clientY;
        // Retorna as coordenadas do mouse em relação ao container svg.
        return svgPoint.matrixTransform(svgDomMatrix);
    }
    initializeListener(serieIndex) {
        let pointPosition;
        this.previousActiveSerieIndex = undefined;
        this.mouseMoveSubscription$ = fromEvent(this.elementRef.nativeElement, 'mousemove')
            .pipe(debounceTime(10), tap((event) => (pointPosition = this.getMouseCoordinates(event))), switchMap(() => of(this.verifyActiveArea(pointPosition))))
            .subscribe(activeObjIndex => {
            if (activeObjIndex !== undefined) {
                this.applyActiveItem(this.seriesPointsCoordinates[serieIndex], activeObjIndex);
            }
        });
    }
    removeListener() {
        this.mouseMoveSubscription$.unsubscribe();
    }
    verifyActiveArea(pointPosition) {
        const { x } = pointPosition;
        this.currentActiveSerieIndex = this.categoriesCoordinates.findIndex((category, index) => (x >= category && index === this.categoriesCoordinates.length - 1) ||
            (x >= category && x <= this.categoriesCoordinates[index + 1]));
        if (this.currentActiveSerieIndex >= 0 && this.currentActiveSerieIndex !== this.previousActiveSerieIndex) {
            this.previousActiveSerieIndex = this.currentActiveSerieIndex;
            return this.currentActiveSerieIndex;
        }
        return undefined;
    }
}
PoChartAreaComponent.ɵfac = function PoChartAreaComponent_Factory(t) { return new (t || PoChartAreaComponent)(i0.ɵɵdirectiveInject(i1.PoChartMathsService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoChartAreaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartAreaComponent, selectors: [["", "po-chart-area", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 2, consts: [["chartLine", ""], [3, "class", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseenter", "mouseleave"], ["po-chart-path", "", 3, "p-chart-line", "p-animate", "p-color", "p-coordinates", "p-is-active"], ["po-chart-series-point", "", 3, "p-animate", "p-chart-line", "p-color", "p-coordinates", "p-is-active", "p-relative-to", "p-point-click", "p-point-hover"]], template: function PoChartAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", null, 0);
        i0.ɵɵtemplate(2, PoChartAreaComponent__svg_g_2_Template, 3, 15, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.seriesPathsCoordinates)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i2.NgForOf, i3.PoChartPathComponent, i4.PoChartSeriesPointComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartAreaComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-area]', template: "<svg:g #chartLine>\r\n\r\n  <svg:g *ngFor=\"let item of seriesPathsCoordinates; let i = index; trackBy: trackBy\"\r\n    [class]=\"'po-chart-line-path-group-' + i\"\r\n    (mouseenter)=\"onEnter(i)\"\r\n    (mouseleave)=\"onLeave(i)\"\r\n  >\r\n    <!-- SERIES PATHS -->\r\n    <svg:g po-chart-path\r\n      [p-chart-line]=\"chartType === 'line'\"\r\n      [attr.key]=\"'po-chart-line-path-' + i\"\r\n      [p-animate]=\"animate\"\r\n      [p-color]=\"item.color\" \r\n      [p-coordinates]=\"item?.coordinates\"\r\n      [p-is-active]=\"item.isActive\"\r\n      >\r\n      </svg:g>\r\n\r\n    <!-- SERIES POINTS -->\r\n    <svg:g po-chart-series-point\r\n      [p-animate]=\"animate\"\r\n      [p-chart-line]=\"chartType === 'line'\"\r\n      [p-color]=\"item.color\"\r\n      [p-coordinates]=\"seriesPointsCoordinates[i]\"\r\n      [p-is-active]=\"activeTooltip\"\r\n      [p-relative-to]=\"'po-chart-line-path-group-' + i\" \r\n      [attr.key]=\"'po-chart-line-path-points-group-' + i\"\r\n      (p-point-click)=\"onSeriePointClick($event)\"\r\n      (p-point-hover)=\"onSeriePointHover($event)\"\r\n      ></svg:g>\r\n  </svg:g>\r\n\r\n</svg:g>" }]
    }], function () { return [{ type: i1.PoChartMathsService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWxpbmUvcG8tY2hhcnQtYXJlYS9wby1jaGFydC1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1saW5lLmNvbXBvbmVudC5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7O0lDSHpFLDRCQUlDO0lBRkMsa09BQWMsZUFBQSxvQkFBVSxDQUFBLElBQUMscU5BQ1gsZUFBQSxvQkFBVSxDQUFBLElBREM7SUFJekIsdUJBUVU7SUFHViw0QkFVRztJQUZELDBMQUFpQixlQUFBLGdDQUF5QixDQUFBLElBQUMsNktBQzFCLGVBQUEsZ0NBQXlCLENBQUEsSUFEQztJQUUxQyxpQkFBUSxFQUFBOzs7OztJQTFCWCxpREFBeUM7SUFNdkMsZUFBcUM7SUFBckMsMERBQXFDLDZCQUFBLDBCQUFBLCtEQUFBLGlDQUFBO0lBQ3JDLG1EQUFzQztJQVV0QyxlQUFxQjtJQUFyQiwwQ0FBcUIsNkNBQUEsMEJBQUEsdURBQUEscUNBQUEscURBQUE7SUFNckIsZ0VB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YztRQUNwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVPLGdCQUFnQixDQUFDLGFBQXVCO1FBQzlDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7UUFFNUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQ2pFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ2xCLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ2hFLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLHVCQUF1QixLQUFLLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUN2RyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7d0ZBcEZVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDZGpDLG1CQUFrQjtRQUFsQixrQ0FBa0I7UUFFaEIsdUVBNEJRO1FBRVYsaUJBQVE7O1FBOUJrQixlQUEyQjtRQUEzQixvREFBMkIsNkJBQUE7O3VGRFl4QyxvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0TGluZUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9wby1jaGFydC1saW5lLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydE1hdGhzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWNoYXJ0LW1hdGhzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0UGF0aENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1wYXRoLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtcG9pbnRzLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1twby1jaGFydC1hcmVhXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuLi9wby1jaGFydC1saW5lLmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0QXJlYUNvbXBvbmVudCBleHRlbmRzIFBvQ2hhcnRMaW5lQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBjdXJyZW50QWN0aXZlU2VyaWVJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbW91c2VNb3ZlU3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgcHJldmlvdXNBY3RpdmVTZXJpZUluZGV4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIG1hdGhzU2VydmljZTogUG9DaGFydE1hdGhzU2VydmljZSxcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHN1cGVyKG1hdGhzU2VydmljZSwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xyXG4gIH1cclxuXHJcbiAgb25FbnRlcihzZXJpZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYXBwbHlBY3RpdmVJdGVtPFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXM+KHRoaXMuc2VyaWVzUGF0aHNDb29yZGluYXRlcywgc2VyaWVJbmRleCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcihzZXJpZUluZGV4KTtcclxuICAgIHRoaXMuYWN0aXZlVG9vbHRpcCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkxlYXZlKHNlcmllSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5hcHBseUFjdGl2ZUl0ZW08UG9DaGFydFBhdGhDb29yZGluYXRlcz4odGhpcy5zZXJpZXNQYXRoc0Nvb3JkaW5hdGVzKTtcclxuICAgIHRoaXMuYXBwbHlBY3RpdmVJdGVtPFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcz4odGhpcy5zZXJpZXNQb2ludHNDb29yZGluYXRlc1tzZXJpZUluZGV4XSwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBvblNlcmllUG9pbnRIb3ZlcihzZWxlY3RlZEl0ZW06IGFueSkge1xyXG4gICAgY29uc3QgeyByZWxhdGl2ZVRvLCAuLi5pdGVtIH0gPSBzZWxlY3RlZEl0ZW07XHJcblxyXG4gICAgdGhpcy5wb2ludEhvdmVyLmVtaXQoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5QWN0aXZlSXRlbTxUPihsaXN0OiBBcnJheTxUPiwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxpc3QuZm9yRWFjaCgoc2VyaWUsIHNlcmllc0luZGV4KSA9PiB7XHJcbiAgICAgIHNlcmllWydpc0FjdGl2ZSddID0gaW5kZXggPT09IHVuZGVmaW5lZCA/IHRydWUgOiBpbmRleCA9PT0gc2VyaWVzSW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TW91c2VDb29yZGluYXRlcyhldmVudDogTW91c2VFdmVudCk6IFNWR1BvaW50IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IHN2Z0RvbU1hdHJpeCwgc3ZnUG9pbnQgfSA9IHRoaXMuc3ZnU3BhY2U7XHJcblxyXG4gICAgc3ZnUG9pbnQueCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICBzdmdQb2ludC55ID0gZXZlbnQuY2xpZW50WTtcclxuXHJcbiAgICAvLyBSZXRvcm5hIGFzIGNvb3JkZW5hZGFzIGRvIG1vdXNlIGVtIHJlbGHDp8OjbyBhbyBjb250YWluZXIgc3ZnLlxyXG4gICAgcmV0dXJuIHN2Z1BvaW50Lm1hdHJpeFRyYW5zZm9ybShzdmdEb21NYXRyaXgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplTGlzdGVuZXIoc2VyaWVJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgcG9pbnRQb3NpdGlvbjogU1ZHUG9pbnQ7XHJcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZlU2VyaWVJbmRleCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbiQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZW1vdmUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTApLFxyXG4gICAgICAgIHRhcCgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IChwb2ludFBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZUNvb3JkaW5hdGVzKGV2ZW50KSkpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBvZih0aGlzLnZlcmlmeUFjdGl2ZUFyZWEocG9pbnRQb3NpdGlvbikpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlT2JqSW5kZXggPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmVPYmpJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmFwcGx5QWN0aXZlSXRlbTxQb0NoYXJ0UG9pbnRzQ29vcmRpbmF0ZXM+KHRoaXMuc2VyaWVzUG9pbnRzQ29vcmRpbmF0ZXNbc2VyaWVJbmRleF0sIGFjdGl2ZU9iakluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9uJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlBY3RpdmVBcmVhKHBvaW50UG9zaXRpb246IFNWR1BvaW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHsgeCB9ID0gcG9pbnRQb3NpdGlvbjtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRBY3RpdmVTZXJpZUluZGV4ID0gdGhpcy5jYXRlZ29yaWVzQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxyXG4gICAgICAoY2F0ZWdvcnksIGluZGV4KSA9PlxyXG4gICAgICAgICh4ID49IGNhdGVnb3J5ICYmIGluZGV4ID09PSB0aGlzLmNhdGVnb3JpZXNDb29yZGluYXRlcy5sZW5ndGggLSAxKSB8fFxyXG4gICAgICAgICh4ID49IGNhdGVnb3J5ICYmIHggPD0gdGhpcy5jYXRlZ29yaWVzQ29vcmRpbmF0ZXNbaW5kZXggKyAxXSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudEFjdGl2ZVNlcmllSW5kZXggPj0gMCAmJiB0aGlzLmN1cnJlbnRBY3RpdmVTZXJpZUluZGV4ICE9PSB0aGlzLnByZXZpb3VzQWN0aXZlU2VyaWVJbmRleCkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzQWN0aXZlU2VyaWVJbmRleCA9IHRoaXMuY3VycmVudEFjdGl2ZVNlcmllSW5kZXg7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3RpdmVTZXJpZUluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6ZyAjY2hhcnRMaW5lPlxyXG5cclxuICA8c3ZnOmcgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VyaWVzUGF0aHNDb29yZGluYXRlczsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICBbY2xhc3NdPVwiJ3BvLWNoYXJ0LWxpbmUtcGF0aC1ncm91cC0nICsgaVwiXHJcbiAgICAobW91c2VlbnRlcik9XCJvbkVudGVyKGkpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cIm9uTGVhdmUoaSlcIlxyXG4gID5cclxuICAgIDwhLS0gU0VSSUVTIFBBVEhTIC0tPlxyXG4gICAgPHN2ZzpnIHBvLWNoYXJ0LXBhdGhcclxuICAgICAgW3AtY2hhcnQtbGluZV09XCJjaGFydFR5cGUgPT09ICdsaW5lJ1wiXHJcbiAgICAgIFthdHRyLmtleV09XCIncG8tY2hhcnQtbGluZS1wYXRoLScgKyBpXCJcclxuICAgICAgW3AtYW5pbWF0ZV09XCJhbmltYXRlXCJcclxuICAgICAgW3AtY29sb3JdPVwiaXRlbS5jb2xvclwiIFxyXG4gICAgICBbcC1jb29yZGluYXRlc109XCJpdGVtPy5jb29yZGluYXRlc1wiXHJcbiAgICAgIFtwLWlzLWFjdGl2ZV09XCJpdGVtLmlzQWN0aXZlXCJcclxuICAgICAgPlxyXG4gICAgICA8L3N2ZzpnPlxyXG5cclxuICAgIDwhLS0gU0VSSUVTIFBPSU5UUyAtLT5cclxuICAgIDxzdmc6ZyBwby1jaGFydC1zZXJpZXMtcG9pbnRcclxuICAgICAgW3AtYW5pbWF0ZV09XCJhbmltYXRlXCJcclxuICAgICAgW3AtY2hhcnQtbGluZV09XCJjaGFydFR5cGUgPT09ICdsaW5lJ1wiXHJcbiAgICAgIFtwLWNvbG9yXT1cIml0ZW0uY29sb3JcIlxyXG4gICAgICBbcC1jb29yZGluYXRlc109XCJzZXJpZXNQb2ludHNDb29yZGluYXRlc1tpXVwiXHJcbiAgICAgIFtwLWlzLWFjdGl2ZV09XCJhY3RpdmVUb29sdGlwXCJcclxuICAgICAgW3AtcmVsYXRpdmUtdG9dPVwiJ3BvLWNoYXJ0LWxpbmUtcGF0aC1ncm91cC0nICsgaVwiIFxyXG4gICAgICBbYXR0ci5rZXldPVwiJ3BvLWNoYXJ0LWxpbmUtcGF0aC1wb2ludHMtZ3JvdXAtJyArIGlcIlxyXG4gICAgICAocC1wb2ludC1jbGljayk9XCJvblNlcmllUG9pbnRDbGljaygkZXZlbnQpXCJcclxuICAgICAgKHAtcG9pbnQtaG92ZXIpPVwib25TZXJpZVBvaW50SG92ZXIoJGV2ZW50KVwiXHJcbiAgICAgID48L3N2ZzpnPlxyXG4gIDwvc3ZnOmc+XHJcblxyXG48L3N2ZzpnPiJdfQ==