import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoGaugeLegendComponent_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function PoGaugeLegendComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵtemplate(1, PoGaugeLegendComponent_li_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementStart(2, "p", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const range_r5 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(3);
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", (range_r5.color == null ? null : range_r5.color.includes("po-color")) ? _r1 : _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, range_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(range_r5.label);
} }
function PoGaugeLegendComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const range_r7 = ctx.$implicit;
    i0.ɵɵclassMap(range_r7.color);
} }
function PoGaugeLegendComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const range_r8 = ctx.$implicit;
    i0.ɵɵstyleProp("background", range_r8.color);
} }
export class PoGaugeLegendComponent {
    constructor() { }
    set ranges(value) {
        this._ranges = value.length ? this.filterLabel(value) : [];
    }
    get ranges() {
        return this._ranges;
    }
    trackBy(index) {
        return index;
    }
    filterLabel(ranges) {
        return ranges.filter(range => range.label);
    }
}
PoGaugeLegendComponent.ɵfac = function PoGaugeLegendComponent_Factory(t) { return new (t || PoGaugeLegendComponent)(); };
PoGaugeLegendComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugeLegendComponent, selectors: [["po-gauge-legend"]], inputs: { ranges: ["p-ranges", "ranges"] }, decls: 6, vars: 2, consts: [[1, "po-gauge-legend"], ["class", "po-gauge-legend-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["colorpalette", ""], ["colorstyle", ""], [1, "po-gauge-legend-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "po-gauge-legend-text"], [1, "po-gauge-legend-square"]], template: function PoGaugeLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, PoGaugeLegendComponent_li_1_Template, 4, 5, "li", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoGaugeLegendComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PoGaugeLegendComponent_ng_template_4_Template, 1, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ranges)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i1.NgForOf, i1.NgTemplateOutlet], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeLegendComponent, [{
        type: Component,
        args: [{ selector: 'po-gauge-legend', template: "<ul class=\"po-gauge-legend\">\r\n  <li class=\"po-gauge-legend-item\" *ngFor=\"let range of ranges; trackBy: trackBy\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"range.color?.includes('po-color') ? colorpalette : colorstyle; context: { $implicit: range }\"\r\n    ></ng-container>\r\n    <p class=\"po-gauge-legend-text\">{{ range.label }}</p>\r\n  </li>\r\n</ul>\r\n\r\n<ng-template #colorpalette let-range>\r\n  <span class=\"po-gauge-legend-square\" [class]=\"range.color\"></span>\r\n</ng-template>\r\n\r\n<ng-template #colorstyle let-range>\r\n  <span class=\"po-gauge-legend-square\" [style.background]=\"range.color\"></span>\r\n</ng-template>\r\n" }]
    }], function () { return []; }, { ranges: [{
            type: Input,
            args: ['p-ranges']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UtbGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS1sZWdlbmQvcG8tZ2F1Z2UtbGVnZW5kLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS1sZWdlbmQvcG8tZ2F1Z2UtbGVnZW5kLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDRTdDLHdCQUVnQjs7OztJQUhsQiw2QkFBZ0Y7SUFDOUUsOEZBRWdCO0lBQ2hCLDRCQUFnQztJQUFBLFlBQWlCO0lBQUEsaUJBQUksRUFBQTs7Ozs7O0lBRmxELGVBQWlGO0lBQWpGLG9IQUFpRixpRUFBQTtJQUVwRCxlQUFpQjtJQUFqQixvQ0FBaUI7OztJQUtuRCwwQkFBa0U7OztJQUE3Qiw2QkFBcUI7OztJQUkxRCwwQkFBNkU7OztJQUF4Qyw0Q0FBZ0M7O0FETnZFLE1BQU0sT0FBTyxzQkFBc0I7SUFXakMsZ0JBQWUsQ0FBQztJQVJoQixJQUF1QixNQUFNLENBQUMsS0FBMkI7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBSUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxXQUFXLENBQUMsTUFBNEI7UUFDOUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7OzRGQW5CVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ1JuQyw2QkFBNEI7UUFDMUIscUVBS0s7UUFDUCxpQkFBSztRQUVMLHdIQUVjO1FBRWQsd0hBRWM7O1FBZHVDLGVBQVc7UUFBWCxvQ0FBVyw2QkFBQTs7dUZET25ELHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLGlCQUFpQjtzQ0FNSixNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0dhdWdlUmFuZ2VzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1nYXVnZS1yYW5nZXMuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZ2F1Z2UtbGVnZW5kJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZ2F1Z2UtbGVnZW5kLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9HYXVnZUxlZ2VuZENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfcmFuZ2VzOiBBcnJheTxQb0dhdWdlUmFuZ2VzPjtcclxuXHJcbiAgQElucHV0KCdwLXJhbmdlcycpIHNldCByYW5nZXModmFsdWU6IEFycmF5PFBvR2F1Z2VSYW5nZXM+KSB7XHJcbiAgICB0aGlzLl9yYW5nZXMgPSB2YWx1ZS5sZW5ndGggPyB0aGlzLmZpbHRlckxhYmVsKHZhbHVlKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJhbmdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyTGFiZWwocmFuZ2VzOiBBcnJheTxQb0dhdWdlUmFuZ2VzPikge1xyXG4gICAgcmV0dXJuIHJhbmdlcy5maWx0ZXIocmFuZ2UgPT4gcmFuZ2UubGFiZWwpO1xyXG4gIH1cclxufVxyXG4iLCI8dWwgY2xhc3M9XCJwby1nYXVnZS1sZWdlbmRcIj5cclxuICA8bGkgY2xhc3M9XCJwby1nYXVnZS1sZWdlbmQtaXRlbVwiICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXM7IHRyYWNrQnk6IHRyYWNrQnlcIj5cclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyYW5nZS5jb2xvcj8uaW5jbHVkZXMoJ3BvLWNvbG9yJykgPyBjb2xvcnBhbGV0dGUgOiBjb2xvcnN0eWxlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogcmFuZ2UgfVwiXHJcbiAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICA8cCBjbGFzcz1cInBvLWdhdWdlLWxlZ2VuZC10ZXh0XCI+e3sgcmFuZ2UubGFiZWwgfX08L3A+XHJcbiAgPC9saT5cclxuPC91bD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY29sb3JwYWxldHRlIGxldC1yYW5nZT5cclxuICA8c3BhbiBjbGFzcz1cInBvLWdhdWdlLWxlZ2VuZC1zcXVhcmVcIiBbY2xhc3NdPVwicmFuZ2UuY29sb3JcIj48L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2NvbG9yc3R5bGUgbGV0LXJhbmdlPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tZ2F1Z2UtbGVnZW5kLXNxdWFyZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInJhbmdlLmNvbG9yXCI+PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=