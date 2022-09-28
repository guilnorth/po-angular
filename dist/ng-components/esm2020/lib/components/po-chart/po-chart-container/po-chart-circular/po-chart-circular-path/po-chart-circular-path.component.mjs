import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./po-chart-tooltip.directive";
const _c0 = ["svgPath"];
const _c1 = ["po-chart-circular-path", ""];
export class PoChartCircularPathComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onClick = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    applyCoordinates(coordinates) {
        this.renderer.setAttribute(this.svgPath.nativeElement, 'd', coordinates);
    }
    onMouseClick() {
        const { label, data } = this.serie;
        this.onClick.emit({ label, data });
    }
    onMouseEnter() {
        const { label, data } = this.serie;
        this.onHover.emit({ label, data });
    }
}
PoChartCircularPathComponent.ɵfac = function PoChartCircularPathComponent_Factory(t) { return new (t || PoChartCircularPathComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoChartCircularPathComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartCircularPathComponent, selectors: [["", "po-chart-circular-path", ""]], viewQuery: function PoChartCircularPathComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgPath = _t.first);
    } }, inputs: { serie: ["p-serie", "serie"] }, outputs: { onClick: "p-on-click", onHover: "p-on-hover" }, attrs: _c1, decls: 2, vars: 4, consts: [[1, "po-path-item", 3, "p-chart-tooltip", "click", "mouseenter"], ["svgPath", ""]], template: function PoChartCircularPathComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "path", 0, 1);
        i0.ɵɵlistener("click", function PoChartCircularPathComponent_Template__svg_path_click_0_listener() { return ctx.onMouseClick(); })("mouseenter", function PoChartCircularPathComponent_Template__svg_path_mouseenter_0_listener() { return ctx.onMouseEnter(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap((ctx.serie == null ? null : ctx.serie.color.includes("po-color")) ? ctx.serie.color : "");
        i0.ɵɵproperty("p-chart-tooltip", ctx.serie == null ? null : ctx.serie.tooltipLabel);
        i0.ɵɵattribute("fill", ctx.serie == null ? null : ctx.serie.color);
    } }, dependencies: [i1.PoChartTooltipDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartCircularPathComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-circular-path]', template: "<svg:path #svgPath\r\n  class=\"po-path-item\"\r\n  [class]=\"serie?.color.includes('po-color') ? serie.color : ''\"\r\n  [p-chart-tooltip]=\"serie?.tooltipLabel\"\r\n  [attr.fill]=\"serie?.color\"\r\n  (click)=\"onMouseClick()\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  >\r\n</svg:path> \r\n" }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { serie: [{
            type: Input,
            args: ['p-serie']
        }], onClick: [{
            type: Output,
            args: ['p-on-click']
        }], onHover: [{
            type: Output,
            args: ['p-on-hover']
        }], svgPath: [{
            type: ViewChild,
            args: ['svgPath', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtY2lyY3VsYXItcGF0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLXBhdGgvcG8tY2hhcnQtY2lyY3VsYXItcGF0aC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLXBhdGgvcG8tY2hhcnQtY2lyY3VsYXItcGF0aC5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRekcsTUFBTSxPQUFPLDRCQUE0QjtJQVN2QyxZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTmpCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWxDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSWQsQ0FBQztJQUUzQyxnQkFBZ0IsQ0FBQyxXQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O3dHQXpCVSw0QkFBNEI7K0VBQTVCLDRCQUE0QjsrQkFPVCxVQUFVOzs7OztRQ2YxQyxtQkFPRztRQVBILGtDQU9HO1FBRkQsNEdBQVMsa0JBQWMsSUFBQyx5R0FDVixrQkFBYyxJQURKO1FBRzFCLGlCQUFXOztRQU5ULHVHQUE4RDtRQUM5RCxtRkFBdUM7UUFDdkMsa0VBQTBCOzt1RkRJZiw0QkFBNEI7Y0FKeEMsU0FBUzsyQkFDRSwwQkFBMEI7NERBSWxCLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUVNLE9BQU87a0JBQTVCLE1BQU07bUJBQUMsWUFBWTtZQUVFLE9BQU87a0JBQTVCLE1BQU07bUJBQUMsWUFBWTtZQUV3QixPQUFPO2tCQUFsRCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LXBhdGgtY29vcmRpbmF0ZXMuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3BvLWNoYXJ0LWNpcmN1bGFyLXBhdGhdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hhcnQtY2lyY3VsYXItcGF0aC5jb21wb25lbnQuc3ZnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydENpcmN1bGFyUGF0aENvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLXNlcmllJykgc2VyaWU6IFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXM7XHJcblxyXG4gIEBPdXRwdXQoJ3Atb24tY2xpY2snKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3Atb24taG92ZXInKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3N2Z1BhdGgnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc3ZnUGF0aDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBhcHBseUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuc3ZnUGF0aC5uYXRpdmVFbGVtZW50LCAnZCcsIGNvb3JkaW5hdGVzKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VDbGljaygpIHtcclxuICAgIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IHRoaXMuc2VyaWU7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoeyBsYWJlbCwgZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlcigpIHtcclxuICAgIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IHRoaXMuc2VyaWU7XHJcblxyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBsYWJlbCwgZGF0YSB9KTtcclxuICB9XHJcbn1cclxuIiwiPHN2ZzpwYXRoICNzdmdQYXRoXHJcbiAgY2xhc3M9XCJwby1wYXRoLWl0ZW1cIlxyXG4gIFtjbGFzc109XCJzZXJpZT8uY29sb3IuaW5jbHVkZXMoJ3BvLWNvbG9yJykgPyBzZXJpZS5jb2xvciA6ICcnXCJcclxuICBbcC1jaGFydC10b29sdGlwXT1cInNlcmllPy50b29sdGlwTGFiZWxcIlxyXG4gIFthdHRyLmZpbGxdPVwic2VyaWU/LmNvbG9yXCJcclxuICAoY2xpY2spPVwib25Nb3VzZUNsaWNrKClcIlxyXG4gIChtb3VzZWVudGVyKT1cIm9uTW91c2VFbnRlcigpXCJcclxuICA+XHJcbjwvc3ZnOnBhdGg+IFxyXG4iXX0=