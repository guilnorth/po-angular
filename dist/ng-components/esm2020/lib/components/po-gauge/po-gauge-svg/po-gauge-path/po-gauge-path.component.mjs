import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["po-gauge-path", ""];
function PoGaugePathComponent__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path");
} if (rf & 2) {
    const range_r1 = ctx.$implicit;
    i0.ɵɵclassMap((range_r1 == null ? null : range_r1.color == null ? null : range_r1.color.includes("po-color")) ? range_r1.color : "");
    i0.ɵɵattribute("d", range_r1 == null ? null : range_r1.coordinates)("fill", range_r1 == null ? null : range_r1.color);
} }
export class PoGaugePathComponent {
    constructor() { }
    ngOnInit() { }
    trackBy(index) {
        return index;
    }
}
PoGaugePathComponent.ɵfac = function PoGaugePathComponent_Factory(t) { return new (t || PoGaugePathComponent)(); };
PoGaugePathComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugePathComponent, selectors: [["", "po-gauge-path", ""]], inputs: { baseCoordinates: ["p-base-coordinates", "baseCoordinates"], rangesCoordinates: ["p-ranges-coordinates", "rangesCoordinates"] }, attrs: _c0, decls: 3, vars: 3, consts: [[1, "po-gauge-base"], [3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function PoGaugePathComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵelement(1, "path", 0);
        i0.ɵɵtemplate(2, PoGaugePathComponent__svg_path_2_Template, 1, 4, "path", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("d", ctx.baseCoordinates == null ? null : ctx.baseCoordinates.coordinates);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.rangesCoordinates)("ngForTrackBy", ctx.trackBy);
    } }, dependencies: [i1.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugePathComponent, [{
        type: Component,
        args: [{ selector: '[po-gauge-path]', template: "<svg:g>\r\n  <svg:path\r\n    class=\"po-gauge-base\"\r\n    [attr.d]=\"baseCoordinates?.coordinates\">\r\n  </svg:path> \r\n\r\n  <svg:path *ngFor=\"let range of rangesCoordinates; trackBy: trackBy\"\r\n    [class]=\"range?.color?.includes('po-color') ? range.color : ''\"\r\n    [attr.d]=\"range?.coordinates\"\r\n    [attr.fill]=\"range?.color\">\r\n  </svg:path> \r\n</svg:g>\r\n" }]
    }], function () { return []; }, { baseCoordinates: [{
            type: Input,
            args: ['p-base-coordinates']
        }], rangesCoordinates: [{
            type: Input,
            args: ['p-ranges-coordinates']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UtcGF0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ2F1Z2UvcG8tZ2F1Z2Utc3ZnL3BvLWdhdWdlLXBhdGgvcG8tZ2F1Z2UtcGF0aC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ2F1Z2UvcG8tZ2F1Z2Utc3ZnL3BvLWdhdWdlLXBhdGgvcG8tZ2F1Z2UtcGF0aC5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNNdkQsdUJBSVc7OztJQUhULG9JQUErRDtJQUMvRCxtRUFBNkIsa0RBQUE7O0FEQWpDLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0IsZ0JBQWUsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixPQUFPLENBQUMsS0FBSztRQUNYLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7d0ZBWFUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNSakMsbUJBQU87UUFBUCx5QkFBTztRQUNMLDBCQUdXO1FBRVgsNEVBSVc7UUFDYixpQkFBUTs7UUFSSixlQUF1QztRQUF2Qyx5RkFBdUM7UUFHYixlQUFzQjtRQUF0QiwrQ0FBc0IsNkJBQUE7O3VGREV2QyxvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxpQkFBaUI7c0NBSUUsZUFBZTtrQkFBM0MsS0FBSzttQkFBQyxvQkFBb0I7WUFFSSxpQkFBaUI7a0JBQS9DLEtBQUs7bUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0dhdWdlQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BvLWdhdWdlLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1twby1nYXVnZS1wYXRoXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWdhdWdlLXBhdGguY29tcG9uZW50LnN2ZydcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvR2F1Z2VQYXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ3AtYmFzZS1jb29yZGluYXRlcycpIGJhc2VDb29yZGluYXRlczogUG9HYXVnZUNvb3JkaW5hdGVzO1xyXG5cclxuICBASW5wdXQoJ3AtcmFuZ2VzLWNvb3JkaW5hdGVzJykgcmFuZ2VzQ29vcmRpbmF0ZXM6IEFycmF5PFBvR2F1Z2VDb29yZGluYXRlcz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICB0cmFja0J5KGluZGV4KSB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6Zz5cclxuICA8c3ZnOnBhdGhcclxuICAgIGNsYXNzPVwicG8tZ2F1Z2UtYmFzZVwiXHJcbiAgICBbYXR0ci5kXT1cImJhc2VDb29yZGluYXRlcz8uY29vcmRpbmF0ZXNcIj5cclxuICA8L3N2ZzpwYXRoPiBcclxuXHJcbiAgPHN2ZzpwYXRoICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXNDb29yZGluYXRlczsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICBbY2xhc3NdPVwicmFuZ2U/LmNvbG9yPy5pbmNsdWRlcygncG8tY29sb3InKSA/IHJhbmdlLmNvbG9yIDogJydcIlxyXG4gICAgW2F0dHIuZF09XCJyYW5nZT8uY29vcmRpbmF0ZXNcIlxyXG4gICAgW2F0dHIuZmlsbF09XCJyYW5nZT8uY29sb3JcIj5cclxuICA8L3N2ZzpwYXRoPiBcclxuPC9zdmc6Zz5cclxuIl19