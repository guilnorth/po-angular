import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["svgLabel"];
const _c1 = ["po-chart-circular-label", ""];
export class PoChartCircularLabelComponent {
    constructor(changeDetection, renderer) {
        this.changeDetection = changeDetection;
        this.renderer = renderer;
    }
    applyCoordinates(coordinates) {
        this.renderer.setAttribute(this.svgLabel.nativeElement, 'x', coordinates.xCoordinate.toString());
        this.renderer.setAttribute(this.svgLabel.nativeElement, 'y', coordinates.yCoordinate.toString());
        this.showLabel = true;
        this.changeDetection.detectChanges();
    }
}
PoChartCircularLabelComponent.ɵfac = function PoChartCircularLabelComponent_Factory(t) { return new (t || PoChartCircularLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoChartCircularLabelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartCircularLabelComponent, selectors: [["", "po-chart-circular-label", ""]], viewQuery: function PoChartCircularLabelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgLabel = _t.first);
    } }, inputs: { serie: ["p-serie", "serie"], showLabel: ["p-show-label", "showLabel"] }, attrs: _c1, decls: 3, vars: 6, consts: [["dominant-baseline", "middle", 1, "po-chart-label"], ["svgLabel", ""]], template: function PoChartCircularLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "text", 0, 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-invisible", !ctx.showLabel);
        i0.ɵɵattribute("fill", ctx.serie == null ? null : ctx.serie.color)("x", ctx.serie == null ? null : ctx.serie.xCoordinate)("y", ctx.serie == null ? null : ctx.serie.yCoordinate);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.serie == null ? null : ctx.serie.label, "\n");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartCircularLabelComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-circular-label]', template: "<svg:text #svgLabel \r\n  class=\"po-chart-label\" \r\n  dominant-baseline=\"middle\"\r\n  [class.po-invisible]=\"!showLabel\"\r\n  [attr.fill]=\"serie?.color\"\r\n  [attr.x]=\"serie?.xCoordinate\"\r\n  [attr.y]=\"serie?.yCoordinate\">\r\n  {{ serie?.label }}\r\n</svg:text> " }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { serie: [{
            type: Input,
            args: ['p-serie']
        }], showLabel: [{
            type: Input,
            args: ['p-show-label']
        }], svgLabel: [{
            type: ViewChild,
            args: ['svgLabel', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtY2lyY3VsYXItbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1jaXJjdWxhci9wby1jaGFydC1jaXJjdWxhci1sYWJlbC9wby1jaGFydC1jaXJjdWxhci1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLWxhYmVsL3BvLWNoYXJ0LWNpcmN1bGFyLWxhYmVsLmNvbXBvbmVudC5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRdEcsTUFBTSxPQUFPLDZCQUE2QjtJQU94QyxZQUFvQixlQUFrQyxFQUFVLFFBQW1CO1FBQS9ELG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDO0lBRXZGLGdCQUFnQixDQUFDLFdBQW9DO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OzBHQWRVLDZCQUE2QjtnRkFBN0IsNkJBQTZCOytCQUtULFVBQVU7Ozs7O1FDYjNDLG1CQU1nQztRQU5oQyxrQ0FNZ0M7UUFDOUIsWUFDRjtRQUFBLGlCQUFXOztRQUxULDhDQUFpQztRQUNqQyxrRUFBMEIsdURBQUEsdURBQUE7UUFHMUIsZUFDRjtRQURFLDRFQUNGOzt1RkRBYSw2QkFBNkI7Y0FKekMsU0FBUzsyQkFDRSwyQkFBMkI7NEZBSW5CLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUVPLFNBQVM7a0JBQS9CLEtBQUs7bUJBQUMsY0FBYztZQUV3QixRQUFRO2tCQUFwRCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRMYWJlbENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1sYWJlbC1jb29yZGluYXRlcy5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbcG8tY2hhcnQtY2lyY3VsYXItbGFiZWxdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hhcnQtY2lyY3VsYXItbGFiZWwuY29tcG9uZW50LnN2ZydcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2hhcnRDaXJjdWxhckxhYmVsQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3Atc2VyaWUnKSBzZXJpZTogUG9DaGFydExhYmVsQ29vcmRpbmF0ZXM7XHJcblxyXG4gIEBJbnB1dCgncC1zaG93LWxhYmVsJykgc2hvd0xhYmVsOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdzdmdMYWJlbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzdmdMYWJlbDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIGFwcGx5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IFBvQ2hhcnRMYWJlbENvb3JkaW5hdGVzKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnN2Z0xhYmVsLm5hdGl2ZUVsZW1lbnQsICd4JywgY29vcmRpbmF0ZXMueENvb3JkaW5hdGUudG9TdHJpbmcoKSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnN2Z0xhYmVsLm5hdGl2ZUVsZW1lbnQsICd5JywgY29vcmRpbmF0ZXMueUNvb3JkaW5hdGUudG9TdHJpbmcoKSk7XHJcbiAgICB0aGlzLnNob3dMYWJlbCA9IHRydWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6dGV4dCAjc3ZnTGFiZWwgXHJcbiAgY2xhc3M9XCJwby1jaGFydC1sYWJlbFwiIFxyXG4gIGRvbWluYW50LWJhc2VsaW5lPVwibWlkZGxlXCJcclxuICBbY2xhc3MucG8taW52aXNpYmxlXT1cIiFzaG93TGFiZWxcIlxyXG4gIFthdHRyLmZpbGxdPVwic2VyaWU/LmNvbG9yXCJcclxuICBbYXR0ci54XT1cInNlcmllPy54Q29vcmRpbmF0ZVwiXHJcbiAgW2F0dHIueV09XCJzZXJpZT8ueUNvb3JkaW5hdGVcIj5cclxuICB7eyBzZXJpZT8ubGFiZWwgfX1cclxuPC9zdmc6dGV4dD4gIl19