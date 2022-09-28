import { Component } from '@angular/core';
import { PoPageHeaderBaseComponent } from './po-page-header-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-breadcrumb/po-breadcrumb.component";
function PoPageHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "po-breadcrumb", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-favorite-service", ctx_r0.breadcrumb.favorite)("p-items", ctx_r0.breadcrumb.items)("p-params-service", ctx_r0.breadcrumb.params);
} }
function PoPageHeaderComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.title, " ");
} }
const _c0 = ["*"];
/**
 * @docsPrivate
 * @docsExtends PoPageHeaderBaseComponent
 */
export class PoPageHeaderComponent extends PoPageHeaderBaseComponent {
}
PoPageHeaderComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoPageHeaderComponent_BaseFactory; return function PoPageHeaderComponent_Factory(t) { return (ɵPoPageHeaderComponent_BaseFactory || (ɵPoPageHeaderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoPageHeaderComponent)))(t || PoPageHeaderComponent); }; }();
PoPageHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageHeaderComponent, selectors: [["po-page-header"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "po-page-header"], ["class", "po-page-header-breadcrumb", 4, "ngIf"], [1, "po-pt-1"], ["class", "po-page-header-title", 4, "ngIf"], [1, "po-page-header-breadcrumb"], [3, "p-favorite-service", "p-items", "p-params-service"], [1, "po-page-header-title"]], template: function PoPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoPageHeaderComponent_div_1_Template, 2, 3, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, PoPageHeaderComponent_h1_3_Template, 2, 1, "h1", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.breadcrumb && ctx.breadcrumb.items.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, dependencies: [i1.NgIf, i2.PoBreadcrumbComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageHeaderComponent, [{
        type: Component,
        args: [{ selector: 'po-page-header', template: "<div class=\"po-page-header\">\r\n  <!-- Breadcrumb -->\r\n  <div class=\"po-page-header-breadcrumb\" *ngIf=\"breadcrumb && breadcrumb.items.length\">\r\n    <po-breadcrumb\r\n      [p-favorite-service]=\"breadcrumb.favorite\"\r\n      [p-items]=\"breadcrumb.items\"\r\n      [p-params-service]=\"breadcrumb.params\"\r\n    >\r\n    </po-breadcrumb>\r\n  </div>\r\n\r\n  <div class=\"po-pt-1\">\r\n    <!-- Titulo -->\r\n    <h1 class=\"po-page-header-title\" *ngIf=\"title\">\r\n      {{ title }}\r\n    </h1>\r\n\r\n    <!-- Opera\u00E7\u00F5es -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1oZWFkZXIvcG8tcGFnZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1oZWFkZXIvcG8tcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7SUNBMUUsOEJBQXFGO0lBQ25GLG1DQUtnQjtJQUNsQixpQkFBTTs7O0lBTEYsZUFBMEM7SUFBMUMsK0RBQTBDLG9DQUFBLDhDQUFBOzs7SUFTNUMsNkJBQStDO0lBQzdDLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLDZDQUNGOzs7QURYSjs7O0dBR0c7QUFLSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEseUJBQXlCOztpUUFBdkQscUJBQXFCLFNBQXJCLHFCQUFxQjt3RUFBckIscUJBQXFCOztRQ1psQyw4QkFBNEI7UUFFMUIsc0VBT007UUFFTiw4QkFBcUI7UUFFbkIsb0VBRUs7UUFHTCxrQkFBeUI7UUFDM0IsaUJBQU0sRUFBQTs7UUFqQmtDLGVBQTJDO1FBQTNDLG9FQUEyQztRQVcvQyxlQUFXO1FBQVgsZ0NBQVc7O3VGRERwQyxxQkFBcUI7Y0FKakMsU0FBUzsyQkFDRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUhlYWRlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtaGVhZGVyLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICogQGRvY3NFeHRlbmRzIFBvUGFnZUhlYWRlckJhc2VDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIFBvUGFnZUhlYWRlckJhc2VDb21wb25lbnQge31cclxuIiwiPGRpdiBjbGFzcz1cInBvLXBhZ2UtaGVhZGVyXCI+XHJcbiAgPCEtLSBCcmVhZGNydW1iIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1wYWdlLWhlYWRlci1icmVhZGNydW1iXCIgKm5nSWY9XCJicmVhZGNydW1iICYmIGJyZWFkY3J1bWIuaXRlbXMubGVuZ3RoXCI+XHJcbiAgICA8cG8tYnJlYWRjcnVtYlxyXG4gICAgICBbcC1mYXZvcml0ZS1zZXJ2aWNlXT1cImJyZWFkY3J1bWIuZmF2b3JpdGVcIlxyXG4gICAgICBbcC1pdGVtc109XCJicmVhZGNydW1iLml0ZW1zXCJcclxuICAgICAgW3AtcGFyYW1zLXNlcnZpY2VdPVwiYnJlYWRjcnVtYi5wYXJhbXNcIlxyXG4gICAgPlxyXG4gICAgPC9wby1icmVhZGNydW1iPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tcHQtMVwiPlxyXG4gICAgPCEtLSBUaXR1bG8gLS0+XHJcbiAgICA8aDEgY2xhc3M9XCJwby1wYWdlLWhlYWRlci10aXRsZVwiICpuZ0lmPVwidGl0bGVcIj5cclxuICAgICAge3sgdGl0bGUgfX1cclxuICAgIDwvaDE+XHJcblxyXG4gICAgPCEtLSBPcGVyYcOnw7VlcyAtLT5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==