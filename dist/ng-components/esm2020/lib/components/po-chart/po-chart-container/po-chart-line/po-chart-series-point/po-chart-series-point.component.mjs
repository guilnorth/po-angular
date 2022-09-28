import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { from, timer } from 'rxjs';
import { concatMap, mapTo, scan, tap } from 'rxjs/operators';
import { isIE } from '../../../../../utils/util';
import { InputBoolean } from '../../../../../decorators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../directives/po-tooltip/po-tooltip.directive";
const _c0 = ["po-chart-series-point", ""];
function PoChartSeriesPointComponent__svg_circle_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "circle", 1);
    i0.ɵɵlistener("click", function PoChartSeriesPointComponent__svg_circle_0_Template__svg_circle_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onClick(item_r1)); })("mouseenter", function PoChartSeriesPointComponent__svg_circle_0_Template__svg_circle_mouseenter_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onMouseEnter($event, item_r1)); })("mouseleave", function PoChartSeriesPointComponent__svg_circle_0_Template__svg_circle_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onMouseLeave($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap((ctx_r0.strokeColor == null ? null : ctx_r0.strokeColor.includes("po-border-color")) ? ctx_r0.strokeColor : "");
    i0.ɵɵclassProp("po-chart-active-point", item_r1.isActive);
    i0.ɵɵproperty("p-tooltip", item_r1.tooltipLabel)("p-append-in-body", true)("p-display-tooltip", !ctx_r0.chartLine && item_r1.isActive);
    i0.ɵɵattribute("cx", item_r1.xCoordinate)("cy", item_r1.yCoordinate)("r", ctx_r0.radius)("stroke", ctx_r0.strokeColor);
} }
const RADIUS_DEFAULT_SIZE = 5;
const RADIUS_HOVER_SIZE = 10;
const ANIMATION_DURATION_TIME = 700;
export class PoChartSeriesPointComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.chartLine = false;
        this.pointClick = new EventEmitter();
        this.pointHover = new EventEmitter();
        this.radius = RADIUS_DEFAULT_SIZE;
        this._coordinates = [];
        this.animationState = true;
    }
    set color(value) {
        this.strokeColor = value.includes('po-color') ? value.replace('po-color', 'po-border-color') : value;
        this._color = value;
    }
    get color() {
        return this._color;
    }
    set coordinates(value) {
        this._coordinates = value;
        this.coordinates$ = this.displayPointsWithDelay(this._coordinates);
    }
    get coordinates() {
        return this._coordinates;
    }
    trackBy(index) {
        return index;
    }
    onClick(point) {
        const selectedItem = { label: point.label, data: point.data, category: point.category };
        this.pointClick.emit(selectedItem);
    }
    onMouseEnter(event, point) {
        this.setPointAttribute(event.target, true);
        const selectedItem = { label: point.label, data: point.data, category: point.category };
        this.pointHover.emit({ relativeTo: this.relativeTo, ...selectedItem });
    }
    onMouseLeave(event) {
        this.setPointAttribute(event.target, false);
    }
    displayPointsWithDelay(coordinates) {
        if (this.animationState && !isIE()) {
            const animationTimer = ANIMATION_DURATION_TIME / coordinates.length;
            return from(coordinates).pipe(concatMap((item, index) => timer(index === 0 || !this.animate ? 0 : animationTimer).pipe(mapTo(item))), scan((acc, curr) => acc.concat(curr), []), tap(() => (this.animationState = false)));
        }
        else {
            return from([coordinates]);
        }
    }
    setPointAttribute(target, isHover) {
        this.renderer.setAttribute(target, 'r', isHover ? RADIUS_HOVER_SIZE.toString() : RADIUS_DEFAULT_SIZE.toString());
        if (this.color.includes('po-color')) {
            this.renderer.setAttribute(target, 'class', isHover ? `${this.strokeColor} ${this.color}` : `po-chart-line-point po-chart-active-point ${this.strokeColor}`);
        }
        else {
            this.renderer[isHover ? 'setStyle' : 'removeStyle'](target, 'fill', isHover ? this.color : undefined);
        }
    }
}
PoChartSeriesPointComponent.ɵfac = function PoChartSeriesPointComponent_Factory(t) { return new (t || PoChartSeriesPointComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoChartSeriesPointComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartSeriesPointComponent, selectors: [["", "po-chart-series-point", ""]], inputs: { animate: ["p-animate", "animate"], isActive: ["p-is-active", "isActive"], chartLine: ["p-chart-line", "chartLine"], relativeTo: ["p-relative-to", "relativeTo"], color: ["p-color", "color"], coordinates: ["p-coordinates", "coordinates"] }, outputs: { pointClick: "p-point-click", pointHover: "p-point-hover" }, attrs: _c0, decls: 2, vars: 4, consts: [["p-tooltip-position", "top", "class", "po-chart-line-point", 3, "p-tooltip", "p-append-in-body", "p-display-tooltip", "class", "po-chart-active-point", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["p-tooltip-position", "top", 1, "po-chart-line-point", 3, "p-tooltip", "p-append-in-body", "p-display-tooltip", "click", "mouseenter", "mouseleave"]], template: function PoChartSeriesPointComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoChartSeriesPointComponent__svg_circle_0_Template, 1, 11, "circle", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 2, ctx.coordinates$))("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i1.NgForOf, i2.PoTooltipDirective, i1.AsyncPipe], encapsulation: 2 });
__decorate([
    InputBoolean()
], PoChartSeriesPointComponent.prototype, "isActive", void 0);
__decorate([
    InputBoolean()
], PoChartSeriesPointComponent.prototype, "chartLine", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartSeriesPointComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-series-point]', template: "<svg:circle *ngFor=\"let item of coordinates$ | async; trackBy: trackBy\" \r\n  [p-tooltip]=\"item.tooltipLabel\"\r\n  [p-append-in-body]='true'\r\n  [p-display-tooltip]=\"!chartLine && item.isActive\"\r\n  p-tooltip-position=\"top\"\r\n  class=\"po-chart-line-point\"\r\n  [class]=\"strokeColor?.includes('po-border-color') ? strokeColor : ''\"\r\n  [class.po-chart-active-point]=\"item.isActive\"\r\n  [attr.cx]=\"item.xCoordinate\"\r\n  [attr.cy]=\"item.yCoordinate\"\r\n  [attr.r]=\"radius\"\r\n  [attr.stroke]=\"strokeColor\"\r\n  (click)=\"onClick(item)\"\r\n  (mouseenter)=\"onMouseEnter($event, item)\"\r\n  (mouseleave)=\"onMouseLeave($event)\"\r\n  >\r\n</svg:circle>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { animate: [{
            type: Input,
            args: ['p-animate']
        }], isActive: [{
            type: Input,
            args: ['p-is-active']
        }], chartLine: [{
            type: Input,
            args: ['p-chart-line']
        }], relativeTo: [{
            type: Input,
            args: ['p-relative-to']
        }], pointClick: [{
            type: Output,
            args: ['p-point-click']
        }], pointHover: [{
            type: Output,
            args: ['p-point-hover']
        }], color: [{
            type: Input,
            args: ['p-color']
        }], coordinates: [{
            type: Input,
            args: ['p-coordinates']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtc2VyaWVzLXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1zZXJpZXMtcG9pbnQvcG8tY2hhcnQtc2VyaWVzLXBvaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1zZXJpZXMtcG9pbnQvcG8tY2hhcnQtc2VyaWVzLXBvaW50LmNvbXBvbmVudC5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLElBQUksRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7SUNMekQsbUJBZUc7SUFmSCxpQ0FlRztJQUhELGdQQUFTLGVBQUEsdUJBQWEsQ0FBQSxJQUFDLG1QQUNULGVBQUEsb0NBQTBCLENBQUEsSUFEakIsd0xBRVQsZUFBQSwyQkFBb0IsQ0FBQSxJQUZYO0lBSXpCLGlCQUFhOzs7O0lBVlgsNkhBQXFFO0lBQ3JFLHlEQUE2QztJQU43QyxnREFBK0IsMEJBQUEsNERBQUE7SUFPL0IseUNB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QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkc7SUFDSCxDQUFDOztzR0E1RlUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUNqQnhDLHdGQWdCYTs7O1FBaEJnQixnRUFBeUIsNkJBQUE7O0FEb0JkO0lBQWYsWUFBWSxFQUFFOzZEQUFtQjtBQUVqQjtJQUFmLFlBQVksRUFBRTs4REFBNEI7dUZBTHZELDJCQUEyQjtjQUp2QyxTQUFTOzJCQUNFLHlCQUF5QjtxRkFJZixPQUFPO2tCQUExQixLQUFLO21CQUFDLFdBQVc7WUFFb0IsUUFBUTtrQkFBN0MsS0FBSzttQkFBQyxhQUFhO1lBRW1CLFNBQVM7a0JBQS9DLEtBQUs7bUJBQUMsY0FBYztZQUdHLFVBQVU7a0JBQWpDLEtBQUs7bUJBQUMsZUFBZTtZQUVHLFVBQVU7a0JBQWxDLE1BQU07bUJBQUMsZUFBZTtZQUVFLFVBQVU7a0JBQWxDLE1BQU07bUJBQUMsZUFBZTtZQVdELEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUztZQVNZLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY29uY2F0TWFwLCBtYXBUbywgc2NhbiwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtcG9pbnRzLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBSQURJVVNfREVGQVVMVF9TSVpFID0gNTtcclxuY29uc3QgUkFESVVTX0hPVkVSX1NJWkUgPSAxMDtcclxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OX1RJTUUgPSA3MDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1twby1jaGFydC1zZXJpZXMtcG9pbnRdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hhcnQtc2VyaWVzLXBvaW50LmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0U2VyaWVzUG9pbnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1hbmltYXRlJykgYW5pbWF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWlzLWFjdGl2ZScpIEBJbnB1dEJvb2xlYW4oKSBpc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWNoYXJ0LWxpbmUnKSBASW5wdXRCb29sZWFuKCkgY2hhcnRMaW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIFJlZmVyw6puY2lhIHBhcmEgbyBzdmdQYXRoR3JvdXAgYW8gcXVhbCBwZXJ0ZW5jZSBvIHBvbnRvLiBOZWNlc3PDoXJpbyBwYXJhIHJlb3JkZW5hw6fDo28gZG9zIHN2Z0VsZW1lbnRzIG5vIERPTSBwYXJhIHRyYXRhbWVudG8gb25Ib3ZlclxyXG4gIEBJbnB1dCgncC1yZWxhdGl2ZS10bycpIHJlbGF0aXZlVG86IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgncC1wb2ludC1jbGljaycpIHBvaW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1wb2ludC1ob3ZlcicpIHBvaW50SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29vcmRpbmF0ZXMkOiBPYnNlcnZhYmxlPEFycmF5PFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcz4+O1xyXG4gIHJhZGl1czogbnVtYmVyID0gUkFESVVTX0RFRkFVTFRfU0laRTtcclxuICBzdHJva2VDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2Nvb3JkaW5hdGVzOiBBcnJheTxQb0NoYXJ0UG9pbnRzQ29vcmRpbmF0ZXM+ID0gW107XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0aW9uU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoJ3AtY29sb3InKSBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdHJva2VDb2xvciA9IHZhbHVlLmluY2x1ZGVzKCdwby1jb2xvcicpID8gdmFsdWUucmVwbGFjZSgncG8tY29sb3InLCAncG8tYm9yZGVyLWNvbG9yJykgOiB2YWx1ZTtcclxuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3AtY29vcmRpbmF0ZXMnKSBzZXQgY29vcmRpbmF0ZXModmFsdWU6IEFycmF5PFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcz4pIHtcclxuICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5jb29yZGluYXRlcyQgPSB0aGlzLmRpc3BsYXlQb2ludHNXaXRoRGVsYXkodGhpcy5fY29vcmRpbmF0ZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvb3JkaW5hdGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvb3JkaW5hdGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socG9pbnQ6IFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcykge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0geyBsYWJlbDogcG9pbnQubGFiZWwsIGRhdGE6IHBvaW50LmRhdGEsIGNhdGVnb3J5OiBwb2ludC5jYXRlZ29yeSB9O1xyXG5cclxuICAgIHRoaXMucG9pbnRDbGljay5lbWl0KHNlbGVjdGVkSXRlbSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRW50ZXIoZXZlbnQ6IGFueSwgcG9pbnQ6IFBvQ2hhcnRQb2ludHNDb29yZGluYXRlcykge1xyXG4gICAgdGhpcy5zZXRQb2ludEF0dHJpYnV0ZShldmVudC50YXJnZXQsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHsgbGFiZWw6IHBvaW50LmxhYmVsLCBkYXRhOiBwb2ludC5kYXRhLCBjYXRlZ29yeTogcG9pbnQuY2F0ZWdvcnkgfTtcclxuICAgIHRoaXMucG9pbnRIb3Zlci5lbWl0KHsgcmVsYXRpdmVUbzogdGhpcy5yZWxhdGl2ZVRvLCAuLi5zZWxlY3RlZEl0ZW0gfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTGVhdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zZXRQb2ludEF0dHJpYnV0ZShldmVudC50YXJnZXQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGxheVBvaW50c1dpdGhEZWxheShcclxuICAgIGNvb3JkaW5hdGVzOiBBcnJheTxQb0NoYXJ0UG9pbnRzQ29vcmRpbmF0ZXM+XHJcbiAgKTogT2JzZXJ2YWJsZTxBcnJheTxQb0NoYXJ0UG9pbnRzQ29vcmRpbmF0ZXM+PiB7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25TdGF0ZSAmJiAhaXNJRSgpKSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvblRpbWVyID0gQU5JTUFUSU9OX0RVUkFUSU9OX1RJTUUgLyBjb29yZGluYXRlcy5sZW5ndGg7XHJcblxyXG4gICAgICByZXR1cm4gZnJvbShjb29yZGluYXRlcykucGlwZShcclxuICAgICAgICBjb25jYXRNYXAoKGl0ZW0sIGluZGV4KSA9PiB0aW1lcihpbmRleCA9PT0gMCB8fCAhdGhpcy5hbmltYXRlID8gMCA6IGFuaW1hdGlvblRpbWVyKS5waXBlKG1hcFRvKGl0ZW0pKSksXHJcbiAgICAgICAgc2NhbigoYWNjLCBjdXJyOiBQb0NoYXJ0UG9pbnRzQ29vcmRpbmF0ZXMpID0+IGFjYy5jb25jYXQoY3VyciksIFtdKSxcclxuICAgICAgICB0YXAoKCkgPT4gKHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBmYWxzZSkpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZnJvbShbY29vcmRpbmF0ZXNdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UG9pbnRBdHRyaWJ1dGUodGFyZ2V0OiBTVkdFbGVtZW50LCBpc0hvdmVyOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdyJywgaXNIb3ZlciA/IFJBRElVU19IT1ZFUl9TSVpFLnRvU3RyaW5nKCkgOiBSQURJVVNfREVGQVVMVF9TSVpFLnRvU3RyaW5nKCkpO1xyXG4gICAgaWYgKHRoaXMuY29sb3IuaW5jbHVkZXMoJ3BvLWNvbG9yJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICdjbGFzcycsXHJcbiAgICAgICAgaXNIb3ZlciA/IGAke3RoaXMuc3Ryb2tlQ29sb3J9ICR7dGhpcy5jb2xvcn1gIDogYHBvLWNoYXJ0LWxpbmUtcG9pbnQgcG8tY2hhcnQtYWN0aXZlLXBvaW50ICR7dGhpcy5zdHJva2VDb2xvcn1gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyW2lzSG92ZXIgPyAnc2V0U3R5bGUnIDogJ3JlbW92ZVN0eWxlJ10odGFyZ2V0LCAnZmlsbCcsIGlzSG92ZXIgPyB0aGlzLmNvbG9yIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHN2ZzpjaXJjbGUgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29vcmRpbmF0ZXMkIHwgYXN5bmM7IHRyYWNrQnk6IHRyYWNrQnlcIiBcclxuICBbcC10b29sdGlwXT1cIml0ZW0udG9vbHRpcExhYmVsXCJcclxuICBbcC1hcHBlbmQtaW4tYm9keV09J3RydWUnXHJcbiAgW3AtZGlzcGxheS10b29sdGlwXT1cIiFjaGFydExpbmUgJiYgaXRlbS5pc0FjdGl2ZVwiXHJcbiAgcC10b29sdGlwLXBvc2l0aW9uPVwidG9wXCJcclxuICBjbGFzcz1cInBvLWNoYXJ0LWxpbmUtcG9pbnRcIlxyXG4gIFtjbGFzc109XCJzdHJva2VDb2xvcj8uaW5jbHVkZXMoJ3BvLWJvcmRlci1jb2xvcicpID8gc3Ryb2tlQ29sb3IgOiAnJ1wiXHJcbiAgW2NsYXNzLnBvLWNoYXJ0LWFjdGl2ZS1wb2ludF09XCJpdGVtLmlzQWN0aXZlXCJcclxuICBbYXR0ci5jeF09XCJpdGVtLnhDb29yZGluYXRlXCJcclxuICBbYXR0ci5jeV09XCJpdGVtLnlDb29yZGluYXRlXCJcclxuICBbYXR0ci5yXT1cInJhZGl1c1wiXHJcbiAgW2F0dHIuc3Ryb2tlXT1cInN0cm9rZUNvbG9yXCJcclxuICAoY2xpY2spPVwib25DbGljayhpdGVtKVwiXHJcbiAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKCRldmVudCwgaXRlbSlcIlxyXG4gIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcclxuICA+XHJcbjwvc3ZnOmNpcmNsZT5cclxuIl19