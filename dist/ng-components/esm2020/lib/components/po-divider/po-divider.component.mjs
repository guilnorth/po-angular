import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoDividerBaseComponent } from './po-divider-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoDividerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
/**
 * @docsExtends PoDividerBaseComponent
 *
 * @example
 *
 * <example name="po-divider-basic" title="PO Divider Basic" >
 *  <file name="sample-po-divider-basic/sample-po-divider-basic.component.html"> </file>
 *  <file name="sample-po-divider-basic/sample-po-divider-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-divider-labs" title="PO Divider Labs" >
 *  <file name="sample-po-divider-labs/sample-po-divider-labs.component.html"> </file>
 *  <file name="sample-po-divider-labs/sample-po-divider-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-divider-user-detail" title="PO Divider - User Detail" >
 *  <file name="sample-po-divider-user-detail/sample-po-divider-user-detail.component.html"> </file>
 *  <file name="sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts"> </file>
 * </example>
 */
export class PoDividerComponent extends PoDividerBaseComponent {
}
PoDividerComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoDividerComponent_BaseFactory; return function PoDividerComponent_Factory(t) { return (ɵPoDividerComponent_BaseFactory || (ɵPoDividerComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoDividerComponent)))(t || PoDividerComponent); }; }();
PoDividerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDividerComponent, selectors: [["po-divider"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "po-divider"], ["class", "po-divider-label", 4, "ngIf"], [1, "po-divider-label"]], template: function PoDividerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoDividerComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDividerComponent, [{
        type: Component,
        args: [{ selector: 'po-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-divider\">\r\n  <div *ngIf=\"label\" class=\"po-divider-label\">{{ label }}</div>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZGl2aWRlci9wby1kaXZpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1kaXZpZGVyL3BvLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztJQ0RuRSw4QkFBNEM7SUFBQSxZQUFXO0lBQUEsaUJBQU07OztJQUFqQixlQUFXO0lBQVgsa0NBQVc7O0FER3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBTUgsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjs7a1BBQWpELGtCQUFrQixTQUFsQixrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQzdCL0IsOEJBQXdCO1FBQ3RCLG1FQUE2RDtRQUMvRCxpQkFBTTs7UUFERSxlQUFXO1FBQVgsZ0NBQVc7O3VGRDRCTixrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxZQUFZLG1CQUVMLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0RpdmlkZXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1kaXZpZGVyLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9EaXZpZGVyQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGl2aWRlci1iYXNpY1wiIHRpdGxlPVwiUE8gRGl2aWRlciBCYXNpY1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGl2aWRlci1iYXNpYy9zYW1wbGUtcG8tZGl2aWRlci1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRpdmlkZXItYmFzaWMvc2FtcGxlLXBvLWRpdmlkZXItYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGl2aWRlci1sYWJzXCIgdGl0bGU9XCJQTyBEaXZpZGVyIExhYnNcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRpdmlkZXItbGFicy9zYW1wbGUtcG8tZGl2aWRlci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGl2aWRlci1sYWJzL3NhbXBsZS1wby1kaXZpZGVyLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGl2aWRlci11c2VyLWRldGFpbFwiIHRpdGxlPVwiUE8gRGl2aWRlciAtIFVzZXIgRGV0YWlsXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaXZpZGVyLXVzZXItZGV0YWlsL3NhbXBsZS1wby1kaXZpZGVyLXVzZXItZGV0YWlsLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGl2aWRlci11c2VyLWRldGFpbC9zYW1wbGUtcG8tZGl2aWRlci11c2VyLWRldGFpbC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWRpdmlkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9EaXZpZGVyQ29tcG9uZW50IGV4dGVuZHMgUG9EaXZpZGVyQmFzZUNvbXBvbmVudCB7fVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tZGl2aWRlclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJsYWJlbFwiIGNsYXNzPVwicG8tZGl2aWRlci1sYWJlbFwiPnt7IGxhYmVsIH19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=