import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["po-chart-axis-path", ""];
function PoChartAxisPathComponent__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 1);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵattribute("d", item_r2.coordinates);
} }
function PoChartAxisPathComponent__svg_path_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 1);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵattribute("d", item_r3.coordinates);
} }
export class PoChartAxisPathComponent {
    constructor() { }
    trackBy(index) {
        return index;
    }
}
PoChartAxisPathComponent.ɵfac = function PoChartAxisPathComponent_Factory(t) { return new (t || PoChartAxisPathComponent)(); };
PoChartAxisPathComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartAxisPathComponent, selectors: [["", "po-chart-axis-path", ""]], inputs: { axisXCoordinates: ["p-axis-x-coordinates", "axisXCoordinates"], axisYCoordinates: ["p-axis-y-coordinates", "axisYCoordinates"] }, attrs: _c0, decls: 4, vars: 4, consts: [["class", "po-chart-axis-path", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "po-chart-axis-path"]], template: function PoChartAxisPathComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, PoChartAxisPathComponent__svg_path_1_Template, 1, 1, "path", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "g");
        i0.ɵɵtemplate(3, PoChartAxisPathComponent__svg_path_3_Template, 1, 1, "path", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.axisXCoordinates)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.axisYCoordinates)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i1.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartAxisPathComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-axis-path]', template: "<svg:g>\r\n  <svg:path *ngFor=\"let item of axisXCoordinates; trackBy: trackBy\"\r\n    class=\"po-chart-axis-path\" \r\n    [attr.d]=\"item.coordinates\">\r\n  </svg:path> \r\n</svg:g>\r\n\r\n<svg:g>\r\n  <svg:path *ngFor=\"let item of axisYCoordinates; trackBy: trackBy\"\r\n    class=\"po-chart-axis-path\" \r\n    [attr.d]=\"item.coordinates\">\r\n  </svg:path> \r\n</svg:g>" }]
    }], function () { return []; }, { axisXCoordinates: [{
            type: Input,
            args: ['p-axis-x-coordinates']
        }], axisYCoordinates: [{
            type: Input,
            args: ['p-axis-y-coordinates']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYXhpcy1wYXRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYXhpcy9wby1jaGFydC1heGlzLXBhdGgvcG8tY2hhcnQtYXhpcy1wYXRoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYXhpcy9wby1jaGFydC1heGlzLXBhdGgvcG8tY2hhcnQtYXhpcy1wYXRoLmNvbXBvbmVudC5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0MvQywwQkFHVzs7O0lBRFQsd0NBQTJCOzs7O0lBSzdCLDBCQUdXOzs7SUFEVCx3Q0FBMkI7O0FERi9CLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsZ0JBQWUsQ0FBQztJQUVoQixPQUFPLENBQUMsS0FBSztRQUNYLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0dBVFUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNSckMsbUJBQU87UUFBUCx5QkFBTztRQUNMLGdGQUdXO1FBQ2IsaUJBQVE7UUFFUix5QkFBTztRQUNMLGdGQUdXO1FBQ2IsaUJBQVE7O1FBWHFCLGVBQXFCO1FBQXJCLDhDQUFxQiw2QkFBQTtRQU9yQixlQUFxQjtRQUFyQiw4Q0FBcUIsNkJBQUE7O3VGREFyQyx3QkFBd0I7Y0FKcEMsU0FBUzsyQkFDRSxzQkFBc0I7c0NBSUQsZ0JBQWdCO2tCQUE5QyxLQUFLO21CQUFDLHNCQUFzQjtZQUVFLGdCQUFnQjtrQkFBOUMsS0FBSzttQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0UGF0aENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9wby1jaGFydC1wYXRoLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1twby1jaGFydC1heGlzLXBhdGhdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hhcnQtYXhpcy1wYXRoLmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0QXhpc1BhdGhDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1heGlzLXgtY29vcmRpbmF0ZXMnKSBheGlzWENvb3JkaW5hdGVzOiBBcnJheTxQb0NoYXJ0UGF0aENvb3JkaW5hdGVzPjtcclxuXHJcbiAgQElucHV0KCdwLWF4aXMteS1jb29yZGluYXRlcycpIGF4aXNZQ29vcmRpbmF0ZXM6IEFycmF5PFBvQ2hhcnRQYXRoQ29vcmRpbmF0ZXM+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcbn1cclxuIiwiPHN2ZzpnPlxyXG4gIDxzdmc6cGF0aCAqbmdGb3I9XCJsZXQgaXRlbSBvZiBheGlzWENvb3JkaW5hdGVzOyB0cmFja0J5OiB0cmFja0J5XCJcclxuICAgIGNsYXNzPVwicG8tY2hhcnQtYXhpcy1wYXRoXCIgXHJcbiAgICBbYXR0ci5kXT1cIml0ZW0uY29vcmRpbmF0ZXNcIj5cclxuICA8L3N2ZzpwYXRoPiBcclxuPC9zdmc6Zz5cclxuXHJcbjxzdmc6Zz5cclxuICA8c3ZnOnBhdGggKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXhpc1lDb29yZGluYXRlczsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICBjbGFzcz1cInBvLWNoYXJ0LWF4aXMtcGF0aFwiIFxyXG4gICAgW2F0dHIuZF09XCJpdGVtLmNvb3JkaW5hdGVzXCI+XHJcbiAgPC9zdmc6cGF0aD4gXHJcbjwvc3ZnOmc+Il19