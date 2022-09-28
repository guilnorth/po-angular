import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["po-chart-axis-label", ""];
function PoChartAxisLabelComponent__svg_text_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵattribute("x", item_r2.xCoordinate)("y", item_r2.yCoordinate);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r2.label, " ");
} }
function PoChartAxisLabelComponent__svg_text_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-chart-centered-label", !ctx_r1.alignByTheCorners);
    i0.ɵɵattribute("x", item_r3.xCoordinate)("y", item_r3.yCoordinate);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
export class PoChartAxisLabelComponent {
    constructor() {
        this.alignByTheCorners = false;
    }
    trackBy(index) {
        return index;
    }
}
PoChartAxisLabelComponent.ɵfac = function PoChartAxisLabelComponent_Factory(t) { return new (t || PoChartAxisLabelComponent)(); };
PoChartAxisLabelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartAxisLabelComponent, selectors: [["", "po-chart-axis-label", ""]], inputs: { alignByTheCorners: ["p-align-by-the-corners", "alignByTheCorners"], axisXLabelCoordinates: ["p-axis-x-label-coordinates", "axisXLabelCoordinates"], axisYLabelCoordinates: ["p-axis-y-label-coordinates", "axisYLabelCoordinates"], type: ["p-type", "type"] }, attrs: _c0, decls: 4, vars: 4, consts: [["class", "po-chart-axis-x-label", "dominant-baseline", "middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "po-chart-axis-y-label", 3, "po-chart-centered-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["dominant-baseline", "middle", 1, "po-chart-axis-x-label"], [1, "po-chart-axis-y-label"]], template: function PoChartAxisLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, PoChartAxisLabelComponent__svg_text_1_Template, 2, 3, "text", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "g");
        i0.ɵɵtemplate(3, PoChartAxisLabelComponent__svg_text_3_Template, 2, 5, "text", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.axisXLabelCoordinates)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.axisYLabelCoordinates)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i1.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartAxisLabelComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-axis-label]', template: "<svg:g>\r\n  <svg:text *ngFor=\"let item of axisXLabelCoordinates; trackBy: trackBy\"\r\n    class=\"po-chart-axis-x-label\" \r\n    dominant-baseline=\"middle\"\r\n    [attr.x]=\"item.xCoordinate\"\r\n    [attr.y]=\"item.yCoordinate\">\r\n    {{ item.label }}\r\n  </svg:text> \r\n</svg:g>\r\n\r\n<svg:g>\r\n  <svg:text *ngFor=\"let item of axisYLabelCoordinates; let first = first; let last = last; trackBy: trackBy\"\r\n    class=\"po-chart-axis-y-label\" \r\n    [class.po-chart-centered-label]=\"!alignByTheCorners\"\r\n    [attr.x]=\"item.xCoordinate\"\r\n    [attr.y]=\"item.yCoordinate\">\r\n    {{ item.label }}\r\n  </svg:text> \r\n</svg:g>" }]
    }], function () { return []; }, { alignByTheCorners: [{
            type: Input,
            args: ['p-align-by-the-corners']
        }], axisXLabelCoordinates: [{
            type: Input,
            args: ['p-axis-x-label-coordinates']
        }], axisYLabelCoordinates: [{
            type: Input,
            args: ['p-axis-y-label-coordinates']
        }], type: [{
            type: Input,
            args: ['p-type']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYXhpcy1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWF4aXMvcG8tY2hhcnQtYXhpcy1sYWJlbC9wby1jaGFydC1heGlzLWxhYmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYXhpcy9wby1jaGFydC1heGlzLWxhYmVsL3BvLWNoYXJ0LWF4aXMtbGFiZWwuY29tcG9uZW50LnN2ZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQy9DLCtCQUk4QjtJQUM1QixZQUNGO0lBQUEsaUJBQVc7OztJQUhULHdDQUEyQiwwQkFBQTtJQUUzQixlQUNGO0lBREUsOENBQ0Y7Ozs7SUFJQSwrQkFJOEI7SUFDNUIsWUFDRjtJQUFBLGlCQUFXOzs7O0lBSlQsb0VBQW9EO0lBQ3BELHdDQUEyQiwwQkFBQTtJQUUzQixlQUNGO0lBREUsOENBQ0Y7O0FEUkYsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQztRQVJpQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFRckQsQ0FBQztJQUVoQixPQUFPLENBQUMsS0FBSztRQUNYLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7a0dBYlUseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNUdEMsbUJBQU87UUFBUCx5QkFBTztRQUNMLGlGQU1XO1FBQ2IsaUJBQVE7UUFFUix5QkFBTztRQUNMLGlGQU1XO1FBQ2IsaUJBQVE7O1FBakJxQixlQUEwQjtRQUExQixtREFBMEIsNkJBQUE7UUFVMUIsZUFBMEI7UUFBMUIsbURBQTBCLDZCQUFBOzt1RkRGMUMseUJBQXlCO2NBSnJDLFNBQVM7MkJBQ0UsdUJBQXVCO3NDQUlBLGlCQUFpQjtrQkFBakQsS0FBSzttQkFBQyx3QkFBd0I7WUFFTSxxQkFBcUI7a0JBQXpELEtBQUs7bUJBQUMsNEJBQTRCO1lBRUUscUJBQXFCO2tCQUF6RCxLQUFLO21CQUFDLDRCQUE0QjtZQUVsQixJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL2VudW1zL3BvLWNoYXJ0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRMYWJlbENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1sYWJlbC1jb29yZGluYXRlcy5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbcG8tY2hhcnQtYXhpcy1sYWJlbF0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jaGFydC1heGlzLWxhYmVsLmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0QXhpc0xhYmVsQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtYWxpZ24tYnktdGhlLWNvcm5lcnMnKSBhbGlnbkJ5VGhlQ29ybmVyczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ3AtYXhpcy14LWxhYmVsLWNvb3JkaW5hdGVzJykgYXhpc1hMYWJlbENvb3JkaW5hdGVzOiBBcnJheTxQb0NoYXJ0TGFiZWxDb29yZGluYXRlcz47XHJcblxyXG4gIEBJbnB1dCgncC1heGlzLXktbGFiZWwtY29vcmRpbmF0ZXMnKSBheGlzWUxhYmVsQ29vcmRpbmF0ZXM6IEFycmF5PFBvQ2hhcnRMYWJlbENvb3JkaW5hdGVzPjtcclxuXHJcbiAgQElucHV0KCdwLXR5cGUnKSB0eXBlOiBQb0NoYXJ0VHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICB0cmFja0J5KGluZGV4KSB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6Zz5cclxuICA8c3ZnOnRleHQgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXhpc1hMYWJlbENvb3JkaW5hdGVzOyB0cmFja0J5OiB0cmFja0J5XCJcclxuICAgIGNsYXNzPVwicG8tY2hhcnQtYXhpcy14LWxhYmVsXCIgXHJcbiAgICBkb21pbmFudC1iYXNlbGluZT1cIm1pZGRsZVwiXHJcbiAgICBbYXR0ci54XT1cIml0ZW0ueENvb3JkaW5hdGVcIlxyXG4gICAgW2F0dHIueV09XCJpdGVtLnlDb29yZGluYXRlXCI+XHJcbiAgICB7eyBpdGVtLmxhYmVsIH19XHJcbiAgPC9zdmc6dGV4dD4gXHJcbjwvc3ZnOmc+XHJcblxyXG48c3ZnOmc+XHJcbiAgPHN2Zzp0ZXh0ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGF4aXNZTGFiZWxDb29yZGluYXRlczsgbGV0IGZpcnN0ID0gZmlyc3Q7IGxldCBsYXN0ID0gbGFzdDsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICBjbGFzcz1cInBvLWNoYXJ0LWF4aXMteS1sYWJlbFwiIFxyXG4gICAgW2NsYXNzLnBvLWNoYXJ0LWNlbnRlcmVkLWxhYmVsXT1cIiFhbGlnbkJ5VGhlQ29ybmVyc1wiXHJcbiAgICBbYXR0ci54XT1cIml0ZW0ueENvb3JkaW5hdGVcIlxyXG4gICAgW2F0dHIueV09XCJpdGVtLnlDb29yZGluYXRlXCI+XHJcbiAgICB7eyBpdGVtLmxhYmVsIH19XHJcbiAgPC9zdmc6dGV4dD4gXHJcbjwvc3ZnOmc+Il19