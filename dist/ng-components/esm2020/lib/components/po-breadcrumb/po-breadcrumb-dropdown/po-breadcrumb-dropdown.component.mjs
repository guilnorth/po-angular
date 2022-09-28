import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function PoBreadcrumbDropdownComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵlistener("click", function PoBreadcrumbDropdownComponent_li_1_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r1.action == null ? null : item_r1.action()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r1.link);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r1.label, " ");
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que renderiza o dropdown do po-breadcrumb.
 */
export class PoBreadcrumbDropdownComponent {
}
PoBreadcrumbDropdownComponent.ɵfac = function PoBreadcrumbDropdownComponent_Factory(t) { return new (t || PoBreadcrumbDropdownComponent)(); };
PoBreadcrumbDropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoBreadcrumbDropdownComponent, selectors: [["po-breadcrumb-dropdown"]], inputs: { items: ["p-items", "items"] }, decls: 2, vars: 1, consts: [[1, "po-breadcrumb-dropdown"], ["class", "po-breadcrumb-dropdown-item", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "po-breadcrumb-dropdown-item", 3, "routerLink", "click"]], template: function PoBreadcrumbDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, PoBreadcrumbDropdownComponent_li_1_Template, 2, 2, "li", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, dependencies: [i1.NgForOf, i2.RouterLink], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBreadcrumbDropdownComponent, [{
        type: Component,
        args: [{ selector: 'po-breadcrumb-dropdown', template: "<ul class=\"po-breadcrumb-dropdown\">\r\n  <li class=\"po-breadcrumb-dropdown-item\" *ngFor=\"let item of items\" [routerLink]=\"item.link\" (click)=\"item.action?.()\">\r\n    {{ item.label }}\r\n  </li>\r\n</ul>\r\n" }]
    }], null, { items: [{
            type: Input,
            args: ['p-items']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnJlYWRjcnVtYi1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYnJlYWRjcnVtYi9wby1icmVhZGNydW1iLWRyb3Bkb3duL3BvLWJyZWFkY3J1bWItZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJyZWFkY3J1bWIvcG8tYnJlYWRjcnVtYi1kcm9wZG93bi9wby1icmVhZGNydW1iLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDL0MsNkJBQXNIO0lBQTFCLDRPQUFTLGdCQUFlLEtBQUM7SUFDbkgsWUFDRjtJQUFBLGlCQUFLOzs7SUFGOEQseUNBQXdCO0lBQ3pGLGVBQ0Y7SUFERSw4Q0FDRjs7QURDRjs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sNkJBQTZCOzswR0FBN0IsNkJBQTZCO2dGQUE3Qiw2QkFBNkI7UUNmMUMsNkJBQW1DO1FBQ2pDLDRFQUVLO1FBQ1AsaUJBQUs7O1FBSHNELGVBQVE7UUFBUixtQ0FBUTs7dUZEY3RELDZCQUE2QjtjQUp6QyxTQUFTOzJCQUNFLHdCQUF3QjtnQkFLaEIsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9CcmVhZGNydW1iSXRlbSB9IGZyb20gJy4vLi4vcG8tYnJlYWRjcnVtYi1pdGVtLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSByZW5kZXJpemEgbyBkcm9wZG93biBkbyBwby1icmVhZGNydW1iLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1icmVhZGNydW1iLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tYnJlYWRjcnVtYi1kcm9wZG93bi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQnJlYWRjcnVtYkRyb3Bkb3duQ29tcG9uZW50IHtcclxuICAvLyBJdGVucyBhIHNlcmVtIGFwcmVzZW50YWRvcyBuYSBsaXN0YSBkbyBkcm9wZG93bi5cclxuICBASW5wdXQoJ3AtaXRlbXMnKSBpdGVtczogQXJyYXk8UG9CcmVhZGNydW1iSXRlbT47XHJcbn1cclxuIiwiPHVsIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1kcm9wZG93blwiPlxyXG4gIDxsaSBjbGFzcz1cInBvLWJyZWFkY3J1bWItZHJvcGRvd24taXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW3JvdXRlckxpbmtdPVwiaXRlbS5saW5rXCIgKGNsaWNrKT1cIml0ZW0uYWN0aW9uPy4oKVwiPlxyXG4gICAge3sgaXRlbS5sYWJlbCB9fVxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbiJdfQ==