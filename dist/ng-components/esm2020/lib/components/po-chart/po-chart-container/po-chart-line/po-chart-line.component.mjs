import { Component } from '@angular/core';
import { PoChartLineBaseComponent } from './po-chart-line-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-chart-maths.service";
import * as i2 from "@angular/common";
import * as i3 from "./po-chart-path/po-chart-path.component";
import * as i4 from "./po-chart-series-point/po-chart-series-point.component";
const _c0 = ["po-chart-line", ""];
function PoChartLineComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵlistener("mouseenter", function PoChartLineComponent__svg_g_2_Template__svg_g_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const i_r3 = restoredCtx.index; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onEnter(i_r3)); })("mouseleave", function PoChartLineComponent__svg_g_2_Template__svg_g_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const i_r3 = restoredCtx.index; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onLeave(i_r3)); });
    i0.ɵɵelement(1, "g", 3);
    i0.ɵɵelementStart(2, "g", 4);
    i0.ɵɵlistener("p-point-click", function PoChartLineComponent__svg_g_2_Template__svg_g_p_point_click_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onSeriePointClick($event)); })("p-point-hover", function PoChartLineComponent__svg_g_2_Template__svg_g_p_point_hover_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSeriePointHover($event)); });
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
export class PoChartLineComponent extends PoChartLineBaseComponent {
    constructor(mathsService, renderer, elementRef) {
        super(mathsService, renderer, elementRef);
        this.mathsService = mathsService;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    onEnter(serieIndex) {
        return null;
    }
    onLeave(serieIndex) {
        return null;
    }
    onSeriePointHover(selectedItem) {
        const { relativeTo, ...item } = selectedItem;
        this.reorderSVGGroup(relativeTo);
        this.pointHover.emit(item);
    }
    // É necessário reordenar os svgs on hover pois eventualmente os elemntos svg ficam por trás de outros. Não há z-index para svgElement.
    reorderSVGGroup(pathGroup) {
        const pathGroupElement = this.elementRef.nativeElement.querySelectorAll(`.${pathGroup}`);
        this.animate = false;
        this.renderer.appendChild(this.chartLine.nativeElement, pathGroupElement[0]);
    }
}
PoChartLineComponent.ɵfac = function PoChartLineComponent_Factory(t) { return new (t || PoChartLineComponent)(i0.ɵɵdirectiveInject(i1.PoChartMathsService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoChartLineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartLineComponent, selectors: [["", "po-chart-line", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 2, consts: [["chartLine", ""], [3, "class", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseenter", "mouseleave"], ["po-chart-path", "", 3, "p-chart-line", "p-animate", "p-color", "p-coordinates", "p-is-active"], ["po-chart-series-point", "", 3, "p-animate", "p-chart-line", "p-color", "p-coordinates", "p-is-active", "p-relative-to", "p-point-click", "p-point-hover"]], template: function PoChartLineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", null, 0);
        i0.ɵɵtemplate(2, PoChartLineComponent__svg_g_2_Template, 3, 15, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.seriesPathsCoordinates)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i2.NgForOf, i3.PoChartPathComponent, i4.PoChartSeriesPointComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartLineComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-line]', template: "<svg:g #chartLine>\r\n\r\n  <svg:g *ngFor=\"let item of seriesPathsCoordinates; let i = index; trackBy: trackBy\"\r\n    [class]=\"'po-chart-line-path-group-' + i\"\r\n    (mouseenter)=\"onEnter(i)\"\r\n    (mouseleave)=\"onLeave(i)\"\r\n  >\r\n    <!-- SERIES PATHS -->\r\n    <svg:g po-chart-path\r\n      [p-chart-line]=\"chartType === 'line'\"\r\n      [attr.key]=\"'po-chart-line-path-' + i\"\r\n      [p-animate]=\"animate\"\r\n      [p-color]=\"item.color\" \r\n      [p-coordinates]=\"item?.coordinates\"\r\n      [p-is-active]=\"item.isActive\"\r\n      >\r\n      </svg:g>\r\n\r\n    <!-- SERIES POINTS -->\r\n    <svg:g po-chart-series-point\r\n      [p-animate]=\"animate\"\r\n      [p-chart-line]=\"chartType === 'line'\"\r\n      [p-color]=\"item.color\"\r\n      [p-coordinates]=\"seriesPointsCoordinates[i]\"\r\n      [p-is-active]=\"activeTooltip\"\r\n      [p-relative-to]=\"'po-chart-line-path-group-' + i\" \r\n      [attr.key]=\"'po-chart-line-path-points-group-' + i\"\r\n      (p-point-click)=\"onSeriePointClick($event)\"\r\n      (p-point-hover)=\"onSeriePointHover($event)\"\r\n      ></svg:g>\r\n  </svg:g>\r\n\r\n</svg:g>" }]
    }], function () { return [{ type: i1.PoChartMathsService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtbGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWxpbmUvcG8tY2hhcnQtbGluZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWxpbmUvcG8tY2hhcnQtbGluZS5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7O0lDQXhFLDRCQUlDO0lBRkMsa09BQWMsZUFBQSxvQkFBVSxDQUFBLElBQUMscU5BQ1gsZUFBQSxvQkFBVSxDQUFBLElBREM7SUFJekIsdUJBUVU7SUFHViw0QkFVRztJQUZELDBMQUFpQixlQUFBLGdDQUF5QixDQUFBLElBQUMsNktBQzFCLGVBQUEsZ0NBQXlCLENBQUEsSUFEQztJQUUxQyxpQkFBUSxFQUFBOzs7OztJQTFCWCxpREFBeUM7SUFNdkMsZUFBcUM7SUFBckMsMERBQXFDLDZCQUFBLDBCQUFBLCtEQUFBLGlDQUFBO0lBQ3JDLG1EQUFzQztJQVV0QyxlQUFxQjtJQUFyQiwwQ0FBcUIsNkNBQUEsMEJBQUEsdURBQUEscUNBQUEscURBQUE7SUFNckIsZ0VBQW1EOztBRGpCekQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3QjtJQUNoRSxZQUNZLFlBQWlDLEVBQ2pDLFFBQW1CLEVBQ25CLFVBQXNCO1FBRWhDLEtBQUssQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSmhDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7SUFHbEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxVQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxPQUFPLENBQUMsVUFBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsWUFBaUI7UUFDakMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQztRQUU3QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx1SUFBdUk7SUFDL0gsZUFBZSxDQUFDLFNBQWlCO1FBQ3ZDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7d0ZBN0JVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDVGpDLG1CQUFrQjtRQUFsQixrQ0FBa0I7UUFFaEIsdUVBNEJRO1FBRVYsaUJBQVE7O1FBOUJrQixlQUEyQjtRQUEzQixvREFBMkIsNkJBQUE7O3VGRE94QyxvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGFydExpbmVCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1saW5lLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydE1hdGhzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWNoYXJ0LW1hdGhzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbcG8tY2hhcnQtbGluZV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jaGFydC1saW5lLmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0TGluZUNvbXBvbmVudCBleHRlbmRzIFBvQ2hhcnRMaW5lQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgbWF0aHNTZXJ2aWNlOiBQb0NoYXJ0TWF0aHNTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIobWF0aHNTZXJ2aWNlLCByZW5kZXJlciwgZWxlbWVudFJlZik7XHJcbiAgfVxyXG5cclxuICBvbkVudGVyKHNlcmllSW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIG9uTGVhdmUoc2VyaWVJbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uU2VyaWVQb2ludEhvdmVyKHNlbGVjdGVkSXRlbTogYW55KSB7XHJcbiAgICBjb25zdCB7IHJlbGF0aXZlVG8sIC4uLml0ZW0gfSA9IHNlbGVjdGVkSXRlbTtcclxuXHJcbiAgICB0aGlzLnJlb3JkZXJTVkdHcm91cChyZWxhdGl2ZVRvKTtcclxuICAgIHRoaXMucG9pbnRIb3Zlci5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgLy8gw4kgbmVjZXNzw6FyaW8gcmVvcmRlbmFyIG9zIHN2Z3Mgb24gaG92ZXIgcG9pcyBldmVudHVhbG1lbnRlIG9zIGVsZW1udG9zIHN2ZyBmaWNhbSBwb3IgdHLDoXMgZGUgb3V0cm9zLiBOw6NvIGjDoSB6LWluZGV4IHBhcmEgc3ZnRWxlbWVudC5cclxuICBwcml2YXRlIHJlb3JkZXJTVkdHcm91cChwYXRoR3JvdXA6IHN0cmluZykge1xyXG4gICAgY29uc3QgcGF0aEdyb3VwRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BhdGhHcm91cH1gKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGFydExpbmUubmF0aXZlRWxlbWVudCwgcGF0aEdyb3VwRWxlbWVudFswXSk7XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6ZyAjY2hhcnRMaW5lPlxyXG5cclxuICA8c3ZnOmcgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VyaWVzUGF0aHNDb29yZGluYXRlczsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICBbY2xhc3NdPVwiJ3BvLWNoYXJ0LWxpbmUtcGF0aC1ncm91cC0nICsgaVwiXHJcbiAgICAobW91c2VlbnRlcik9XCJvbkVudGVyKGkpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cIm9uTGVhdmUoaSlcIlxyXG4gID5cclxuICAgIDwhLS0gU0VSSUVTIFBBVEhTIC0tPlxyXG4gICAgPHN2ZzpnIHBvLWNoYXJ0LXBhdGhcclxuICAgICAgW3AtY2hhcnQtbGluZV09XCJjaGFydFR5cGUgPT09ICdsaW5lJ1wiXHJcbiAgICAgIFthdHRyLmtleV09XCIncG8tY2hhcnQtbGluZS1wYXRoLScgKyBpXCJcclxuICAgICAgW3AtYW5pbWF0ZV09XCJhbmltYXRlXCJcclxuICAgICAgW3AtY29sb3JdPVwiaXRlbS5jb2xvclwiIFxyXG4gICAgICBbcC1jb29yZGluYXRlc109XCJpdGVtPy5jb29yZGluYXRlc1wiXHJcbiAgICAgIFtwLWlzLWFjdGl2ZV09XCJpdGVtLmlzQWN0aXZlXCJcclxuICAgICAgPlxyXG4gICAgICA8L3N2ZzpnPlxyXG5cclxuICAgIDwhLS0gU0VSSUVTIFBPSU5UUyAtLT5cclxuICAgIDxzdmc6ZyBwby1jaGFydC1zZXJpZXMtcG9pbnRcclxuICAgICAgW3AtYW5pbWF0ZV09XCJhbmltYXRlXCJcclxuICAgICAgW3AtY2hhcnQtbGluZV09XCJjaGFydFR5cGUgPT09ICdsaW5lJ1wiXHJcbiAgICAgIFtwLWNvbG9yXT1cIml0ZW0uY29sb3JcIlxyXG4gICAgICBbcC1jb29yZGluYXRlc109XCJzZXJpZXNQb2ludHNDb29yZGluYXRlc1tpXVwiXHJcbiAgICAgIFtwLWlzLWFjdGl2ZV09XCJhY3RpdmVUb29sdGlwXCJcclxuICAgICAgW3AtcmVsYXRpdmUtdG9dPVwiJ3BvLWNoYXJ0LWxpbmUtcGF0aC1ncm91cC0nICsgaVwiIFxyXG4gICAgICBbYXR0ci5rZXldPVwiJ3BvLWNoYXJ0LWxpbmUtcGF0aC1wb2ludHMtZ3JvdXAtJyArIGlcIlxyXG4gICAgICAocC1wb2ludC1jbGljayk9XCJvblNlcmllUG9pbnRDbGljaygkZXZlbnQpXCJcclxuICAgICAgKHAtcG9pbnQtaG92ZXIpPVwib25TZXJpZVBvaW50SG92ZXIoJGV2ZW50KVwiXHJcbiAgICAgID48L3N2ZzpnPlxyXG4gIDwvc3ZnOmc+XHJcblxyXG48L3N2ZzpnPiJdfQ==