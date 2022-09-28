import { Component } from '@angular/core';
import { PoLoadingBaseComponent } from './po-loading-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-loading-icon/po-loading-icon.component";
function PoLoadingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.text);
} }
/**
 * @docsPrivate
 *
 * @docsExtends PoLoadingBaseComponent
 */
export class PoLoadingComponent extends PoLoadingBaseComponent {
}
PoLoadingComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoLoadingComponent_BaseFactory; return function PoLoadingComponent_Factory(t) { return (ɵPoLoadingComponent_BaseFactory || (ɵPoLoadingComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoLoadingComponent)))(t || PoLoadingComponent); }; }();
PoLoadingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoLoadingComponent, selectors: [["po-loading"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "po-loading"], ["class", "po-loading-label po-text-ellipsis", 4, "ngIf"], [1, "po-loading-label", "po-text-ellipsis"]], template: function PoLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "po-loading-icon");
        i0.ɵɵtemplate(2, PoLoadingComponent_span_2_Template, 2, 1, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.text);
    } }, dependencies: [i1.NgIf, i2.PoLoadingIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoadingComponent, [{
        type: Component,
        args: [{ selector: 'po-loading', template: "<div class=\"po-loading\">\r\n  <po-loading-icon></po-loading-icon>\r\n  <span class=\"po-loading-label po-text-ellipsis\" *ngIf=\"text\">{{ text }}</span>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbG9hZGluZy9wby1sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1sb2FkaW5nL3BvLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7SUNBbkUsK0JBQTZEO0lBQUEsWUFBVTtJQUFBLGlCQUFPOzs7SUFBakIsZUFBVTtJQUFWLGlDQUFVOztBREV6RTs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjs7a1BBQWpELGtCQUFrQixTQUFsQixrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ2IvQiw4QkFBd0I7UUFDdEIsa0NBQW1DO1FBQ25DLHFFQUE4RTtRQUNoRixpQkFBTTs7UUFENkMsZUFBVTtRQUFWLCtCQUFVOzt1RkRXaEQsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0UsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Mb2FkaW5nQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tbG9hZGluZy1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0xvYWRpbmdCYXNlQ29tcG9uZW50XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWxvYWRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tbG9hZGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTG9hZGluZ0NvbXBvbmVudCBleHRlbmRzIFBvTG9hZGluZ0Jhc2VDb21wb25lbnQge31cclxuIiwiPGRpdiBjbGFzcz1cInBvLWxvYWRpbmdcIj5cclxuICA8cG8tbG9hZGluZy1pY29uPjwvcG8tbG9hZGluZy1pY29uPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tbG9hZGluZy1sYWJlbCBwby10ZXh0LWVsbGlwc2lzXCIgKm5nSWY9XCJ0ZXh0XCI+e3sgdGV4dCB9fTwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==