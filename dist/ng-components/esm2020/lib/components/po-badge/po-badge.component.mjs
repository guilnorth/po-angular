import { Component } from '@angular/core';
import { PoBadgeBaseComponent } from './po-badge-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoBadgeBaseComponent
 *
 * @docsPrivate
 */
export class PoBadgeComponent extends PoBadgeBaseComponent {
}
PoBadgeComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoBadgeComponent_BaseFactory; return function PoBadgeComponent_Factory(t) { return (ɵPoBadgeComponent_BaseFactory || (ɵPoBadgeComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoBadgeComponent)))(t || PoBadgeComponent); }; }();
PoBadgeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoBadgeComponent, selectors: [["po-badge"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [[1, "po-badge-value"]], template: function PoBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "span", 0);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("po-badge po-", ctx.color, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.badgeValue);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBadgeComponent, [{
        type: Component,
        args: [{ selector: 'po-badge', template: "<div class=\"po-badge po-{{ color }}\">\r\n  <span class=\"po-badge-value\">{{ badgeValue }}</span>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJhZGdlL3BvLWJhZGdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1iYWRnZS9wby1iYWRnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUVqRTs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQjs7d09BQTdDLGdCQUFnQixTQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQ2I3QiwyQkFBcUMsY0FBQTtRQUNOLFlBQWdCO1FBQUEsaUJBQU8sRUFBQTs7UUFEakQsd0RBQStCO1FBQ0wsZUFBZ0I7UUFBaEIsb0NBQWdCOzt1RkRZbEMsZ0JBQWdCO2NBSjVCLFNBQVM7MkJBQ0UsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9CYWRnZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWJhZGdlLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9CYWRnZUJhc2VDb21wb25lbnRcclxuICpcclxuICogQGRvY3NQcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWJhZGdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tYmFkZ2UuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0JhZGdlQ29tcG9uZW50IGV4dGVuZHMgUG9CYWRnZUJhc2VDb21wb25lbnQge31cclxuIiwiPGRpdiBjbGFzcz1cInBvLWJhZGdlIHBvLXt7IGNvbG9yIH19XCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1iYWRnZS12YWx1ZVwiPnt7IGJhZGdlVmFsdWUgfX08L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=