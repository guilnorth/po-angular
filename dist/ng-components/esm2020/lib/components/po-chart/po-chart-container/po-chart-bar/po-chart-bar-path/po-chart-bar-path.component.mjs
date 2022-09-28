import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../directives/po-tooltip/po-tooltip.directive";
const _c0 = ["po-chart-bar-path", ""];
function PoChartBarPathComponent__svg_path_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "path", 1);
    i0.ɵɵlistener("mouseenter", function PoChartBarPathComponent__svg_path_0_Template__svg_path_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onMouseEnter(item_r1)); })("click", function PoChartBarPathComponent__svg_path_0_Template__svg_path_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onClick(item_r1)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap((ctx_r0.color == null ? null : ctx_r0.color.includes("po-color")) ? ctx_r0.color : "");
    i0.ɵɵproperty("p-tooltip", item_r1.tooltipLabel)("p-tooltip-position", ctx_r0.tooltipPosition)("p-append-in-body", true);
    i0.ɵɵattribute("fill", ctx_r0.color)("d", item_r1.coordinates);
} }
export class PoChartBarPathComponent {
    constructor() {
        this.barClick = new EventEmitter();
        this.barHover = new EventEmitter();
    }
    trackBy(index) {
        return index;
    }
    onClick(item) {
        const selectedItem = { label: item.label, data: item.data, category: item.category };
        this.barClick.emit(selectedItem);
    }
    onMouseEnter(item) {
        const selectedItem = { label: item.label, data: item.data, category: item.category };
        this.barHover.emit(selectedItem);
    }
}
PoChartBarPathComponent.ɵfac = function PoChartBarPathComponent_Factory(t) { return new (t || PoChartBarPathComponent)(); };
PoChartBarPathComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartBarPathComponent, selectors: [["", "po-chart-bar-path", ""]], inputs: { color: ["p-color", "color"], coordinates: ["p-coordinates", "coordinates"], tooltipPosition: ["p-tooltip-position", "tooltipPosition"] }, outputs: { barClick: "p-bar-click", barHover: "p-bar-hover" }, attrs: _c0, decls: 1, vars: 2, consts: [["class", "po-chart-bar-path", 3, "p-tooltip", "p-tooltip-position", "p-append-in-body", "class", "mouseenter", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "po-chart-bar-path", 3, "p-tooltip", "p-tooltip-position", "p-append-in-body", "mouseenter", "click"]], template: function PoChartBarPathComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoChartBarPathComponent__svg_path_0_Template, 1, 7, "path", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.coordinates)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i1.NgForOf, i2.PoTooltipDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartBarPathComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-bar-path]', template: "<svg:path *ngFor=\"let item of coordinates; trackBy: trackBy\"\r\n  [p-tooltip]=\"item.tooltipLabel\"\r\n  [p-tooltip-position]=\"tooltipPosition\"\r\n  [p-append-in-body]='true'\r\n  class=\"po-chart-bar-path\"\r\n  [class]=\"color?.includes('po-color') ? color : ''\"\r\n  [attr.fill]=\"color\"\r\n  [attr.d]=\"item.coordinates\"\r\n  (mouseenter)=\"onMouseEnter(item)\"\r\n  (click)=\"onClick(item)\">\r\n</svg:path> \r\n" }]
    }], function () { return []; }, { color: [{
            type: Input,
            args: ['p-color']
        }], coordinates: [{
            type: Input,
            args: ['p-coordinates']
        }], tooltipPosition: [{
            type: Input,
            args: ['p-tooltip-position']
        }], barClick: [{
            type: Output,
            args: ['p-bar-click']
        }], barHover: [{
            type: Output,
            args: ['p-bar-hover']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYmFyLXBhdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1iYXIvcG8tY2hhcnQtYmFyLXBhdGgvcG8tY2hhcnQtYmFyLXBhdGguY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1iYXIvcG8tY2hhcnQtYmFyLXBhdGgvcG8tY2hhcnQtYmFyLXBhdGguY29tcG9uZW50LnN2ZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDQXZFLG1CQVMwQjtJQVQxQiwrQkFTMEI7SUFEeEIsa1BBQWMsZUFBQSw0QkFBa0IsQ0FBQSxJQUFDLDJOQUN4QixlQUFBLHVCQUFhLENBQUEsSUFEVztJQUVuQyxpQkFBVzs7OztJQUxULG9HQUFrRDtJQUpsRCxnREFBK0IsOENBQUEsMEJBQUE7SUFLL0Isb0NBQW1CLDBCQUFBOztBREVyQixNQUFNLE9BQU8sdUJBQXVCO0lBV2xDO1FBSnVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRW5DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRTNDLENBQUM7SUFFaEIsT0FBTyxDQUFDLEtBQUs7UUFDWCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBMkI7UUFDakMsTUFBTSxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBMkI7UUFDdEMsTUFBTSxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OzhGQTNCVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1JwQywrRUFVVzs7UUFWZ0IseUNBQWdCLDZCQUFBOzt1RkRROUIsdUJBQXVCO2NBSm5DLFNBQVM7MkJBQ0UscUJBQXFCO3NDQUliLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUVRLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUVPLGVBQWU7a0JBQTNDLEtBQUs7bUJBQUMsb0JBQW9CO1lBRUosUUFBUTtrQkFBOUIsTUFBTTttQkFBQyxhQUFhO1lBRUUsUUFBUTtrQkFBOUIsTUFBTTttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRCYXJDb29yZGluYXRlcyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtYmFyLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1twby1jaGFydC1iYXItcGF0aF0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jaGFydC1iYXItcGF0aC5jb21wb25lbnQuc3ZnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydEJhclBhdGhDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1jb2xvcicpIGNvbG9yPzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ3AtY29vcmRpbmF0ZXMnKSBjb29yZGluYXRlczogQXJyYXk8UG9DaGFydEJhckNvb3JkaW5hdGVzPjtcclxuXHJcbiAgQElucHV0KCdwLXRvb2x0aXAtcG9zaXRpb24nKSB0b29sdGlwUG9zaXRpb246IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgncC1iYXItY2xpY2snKSBiYXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdwLWJhci1ob3ZlcicpIGJhckhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgdHJhY2tCeShpbmRleCkge1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhpdGVtOiBQb0NoYXJ0QmFyQ29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHsgbGFiZWw6IGl0ZW0ubGFiZWwsIGRhdGE6IGl0ZW0uZGF0YSwgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnkgfTtcclxuXHJcbiAgICB0aGlzLmJhckNsaWNrLmVtaXQoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlcihpdGVtOiBQb0NoYXJ0QmFyQ29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHsgbGFiZWw6IGl0ZW0ubGFiZWwsIGRhdGE6IGl0ZW0uZGF0YSwgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnkgfTtcclxuXHJcbiAgICB0aGlzLmJhckhvdmVyLmVtaXQoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcbn1cclxuIiwiPHN2ZzpwYXRoICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvb3JkaW5hdGVzOyB0cmFja0J5OiB0cmFja0J5XCJcclxuICBbcC10b29sdGlwXT1cIml0ZW0udG9vbHRpcExhYmVsXCJcclxuICBbcC10b29sdGlwLXBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXHJcbiAgW3AtYXBwZW5kLWluLWJvZHldPSd0cnVlJ1xyXG4gIGNsYXNzPVwicG8tY2hhcnQtYmFyLXBhdGhcIlxyXG4gIFtjbGFzc109XCJjb2xvcj8uaW5jbHVkZXMoJ3BvLWNvbG9yJykgPyBjb2xvciA6ICcnXCJcclxuICBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICBbYXR0ci5kXT1cIml0ZW0uY29vcmRpbmF0ZXNcIlxyXG4gIChtb3VzZWVudGVyKT1cIm9uTW91c2VFbnRlcihpdGVtKVwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soaXRlbSlcIj5cclxuPC9zdmc6cGF0aD4gXHJcbiJdfQ==