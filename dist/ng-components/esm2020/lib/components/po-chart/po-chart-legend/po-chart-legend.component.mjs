import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoChartLegendComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const serie_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap((serie_r1.color == null ? null : serie_r1.color.includes("po-color")) ? serie_r1.color : "");
    i0.ɵɵstyleProp("background", serie_r1.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(serie_r1.label || serie_r1.category);
} }
export class PoChartLegendComponent {
    set series(value) {
        this._series = value;
    }
    get series() {
        return this._series;
    }
}
PoChartLegendComponent.ɵfac = function PoChartLegendComponent_Factory(t) { return new (t || PoChartLegendComponent)(); };
PoChartLegendComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartLegendComponent, selectors: [["po-chart-legend"]], inputs: { type: ["p-type", "type"], series: ["p-series", "series"] }, decls: 3, vars: 1, consts: [[1, "po-chart-legend"], [1, "po-chart-legend-container"], ["class", "po-chart-legend-item", 4, "ngFor", "ngForOf"], [1, "po-chart-legend-item"], [1, "po-chart-legend-square"], [1, "po-chart-legend-text"]], template: function PoChartLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoChartLegendComponent_div_2_Template, 4, 5, "div", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.series);
    } }, dependencies: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartLegendComponent, [{
        type: Component,
        args: [{ selector: 'po-chart-legend', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-chart-legend\">\r\n  <div class=\"po-chart-legend-container\">\r\n    <div class=\"po-chart-legend-item\" *ngFor=\"let serie of series; let i = index\">\r\n      <div\r\n        class=\"po-chart-legend-square\"\r\n        [class]=\"serie.color?.includes('po-color') ? serie.color : ''\"\r\n        [style.background]=\"serie.color\"\r\n      ></div>\r\n      <span class=\"po-chart-legend-text\">{{ serie.label || serie.category }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], null, { type: [{
            type: Input,
            args: ['p-type']
        }], series: [{
            type: Input,
            args: ['p-series']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtbGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1sZWdlbmQvcG8tY2hhcnQtbGVnZW5kLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1sZWdlbmQvcG8tY2hhcnQtbGVnZW5kLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDRXRFLDhCQUE4RTtJQUM1RSx5QkFJTztJQUNQLCtCQUFtQztJQUFBLFlBQW1DO0lBQUEsaUJBQU8sRUFBQTs7O0lBSDNFLGVBQThEO0lBQTlELDBHQUE4RDtJQUM5RCw0Q0FBZ0M7SUFFQyxlQUFtQztJQUFuQyx5REFBbUM7O0FEQzVFLE1BQU0sT0FBTyxzQkFBc0I7SUFLakMsSUFBdUIsTUFBTSxDQUFDLEtBQWlCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7NEZBWFUsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNUbkMsOEJBQTZCLGFBQUE7UUFFekIsdUVBT007UUFDUixpQkFBTSxFQUFBOztRQVJnRCxlQUFXO1FBQVgsb0NBQVc7O3VGRE90RCxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUIsbUJBRVYsdUJBQXVCLENBQUMsTUFBTTtnQkFHOUIsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBSVEsTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRUeXBlIH0gZnJvbSAnLi4vZW51bXMvcG8tY2hhcnQtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tY2hhcnQtbGVnZW5kJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hhcnQtbGVnZW5kLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydExlZ2VuZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLXR5cGUnKSB0eXBlOiBQb0NoYXJ0VHlwZTtcclxuXHJcbiAgcHJpdmF0ZSBfc2VyaWVzOiBBcnJheTxhbnk+O1xyXG5cclxuICBASW5wdXQoJ3Atc2VyaWVzJykgc2V0IHNlcmllcyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5fc2VyaWVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VyaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlcmllcztcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWNoYXJ0LWxlZ2VuZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1jaGFydC1sZWdlbmQtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tY2hhcnQtbGVnZW5kLWl0ZW1cIiAqbmdGb3I9XCJsZXQgc2VyaWUgb2Ygc2VyaWVzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInBvLWNoYXJ0LWxlZ2VuZC1zcXVhcmVcIlxyXG4gICAgICAgIFtjbGFzc109XCJzZXJpZS5jb2xvcj8uaW5jbHVkZXMoJ3BvLWNvbG9yJykgPyBzZXJpZS5jb2xvciA6ICcnXCJcclxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJzZXJpZS5jb2xvclwiXHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwby1jaGFydC1sZWdlbmQtdGV4dFwiPnt7IHNlcmllLmxhYmVsIHx8IHNlcmllLmNhdGVnb3J5IH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=