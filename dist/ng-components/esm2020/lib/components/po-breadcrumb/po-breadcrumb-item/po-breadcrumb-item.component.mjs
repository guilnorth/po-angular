import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function PoBreadcrumbItemComponent_li_0_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5)(1, "label", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r2.link);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.label);
} }
function PoBreadcrumbItemComponent_li_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function PoBreadcrumbItemComponent_li_0_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.action(ctx_r5.label)); });
    i0.ɵɵelementStart(1, "label", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.label);
} }
function PoBreadcrumbItemComponent_li_0_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a")(1, "label", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.label);
} }
function PoBreadcrumbItemComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, PoBreadcrumbItemComponent_li_0_a_1_Template, 4, 2, "a", 2);
    i0.ɵɵtemplate(2, PoBreadcrumbItemComponent_li_0_a_2_Template, 4, 1, "a", 3);
    i0.ɵɵtemplate(3, PoBreadcrumbItemComponent_li_0_a_3_Template, 4, 1, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-breadcrumb-item", ctx_r0.link || ctx_r0.action)("po-breadcrumb-item-unclickable", !ctx_r0.link && !ctx_r0.action);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.link && ctx_r0.action);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.link && !ctx_r0.action);
} }
function PoBreadcrumbItemComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 9)(1, "label", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.label);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que renderiza cada item do po-breadcrumb.
 */
export class PoBreadcrumbItemComponent {
    constructor() {
        // Especifica se item é o link ativo.
        this.itemActive = false;
    }
}
PoBreadcrumbItemComponent.ɵfac = function PoBreadcrumbItemComponent_Factory(t) { return new (t || PoBreadcrumbItemComponent)(); };
PoBreadcrumbItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoBreadcrumbItemComponent, selectors: [["po-breadcrumb-item"]], inputs: { action: ["p-action", "action"], label: ["p-label", "label"], link: ["p-link", "link"], itemActive: ["p-item-active", "itemActive"] }, decls: 2, vars: 2, consts: [[3, "po-breadcrumb-item", "po-breadcrumb-item-unclickable", 4, "ngIf"], ["class", "po-breadcrumb-item-unclickable", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], [1, "po-breadcrumb-label"], [1, "po-breadcrumb-arrow"], [3, "click"], [1, "po-breadcrumb-item-unclickable"]], template: function PoBreadcrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoBreadcrumbItemComponent_li_0_Template, 4, 7, "li", 0);
        i0.ɵɵtemplate(1, PoBreadcrumbItemComponent_li_1_Template, 3, 1, "li", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.itemActive);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.itemActive);
    } }, dependencies: [i1.NgIf, i2.RouterLinkWithHref], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBreadcrumbItemComponent, [{
        type: Component,
        args: [{ selector: 'po-breadcrumb-item', template: "<li\r\n  *ngIf=\"!itemActive\"\r\n  [class.po-breadcrumb-item]=\"link || action\"\r\n  [class.po-breadcrumb-item-unclickable]=\"!link && !action\"\r\n>\r\n  <a *ngIf=\"link\" [routerLink]=\"link\">\r\n    <label class=\"po-breadcrumb-label\">{{ label }}</label>\r\n    <div class=\"po-breadcrumb-arrow\"></div>\r\n  </a>\r\n\r\n  <a *ngIf=\"!link && action\" (click)=\"action(label)\">\r\n    <label class=\"po-breadcrumb-label\">{{ label }}</label>\r\n    <div class=\"po-breadcrumb-arrow\"></div>\r\n  </a>\r\n\r\n  <a *ngIf=\"!link && !action\">\r\n    <label class=\"po-breadcrumb-label\">{{ label }}</label>\r\n    <div class=\"po-breadcrumb-arrow\"></div>\r\n  </a>\r\n</li>\r\n\r\n<li *ngIf=\"itemActive\" class=\"po-breadcrumb-item-unclickable\">\r\n  <label class=\"po-breadcrumb-label\">{{ label }}</label>\r\n</li>\r\n" }]
    }], null, { action: [{
            type: Input,
            args: ['p-action']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], link: [{
            type: Input,
            args: ['p-link']
        }], itemActive: [{
            type: Input,
            args: ['p-item-active']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1icmVhZGNydW1iL3BvLWJyZWFkY3J1bWItaXRlbS9wby1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJyZWFkY3J1bWIvcG8tYnJlYWRjcnVtYi1pdGVtL3BvLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNLL0MsNEJBQW9DLGVBQUE7SUFDQyxZQUFXO0lBQUEsaUJBQVE7SUFDdEQseUJBQXVDO0lBQ3pDLGlCQUFJOzs7SUFIWSx3Q0FBbUI7SUFDRSxlQUFXO0lBQVgsa0NBQVc7Ozs7SUFJaEQsNEJBQW1EO0lBQXhCLHFLQUFTLGVBQUEsMkJBQWEsQ0FBQSxJQUFDO0lBQ2hELGdDQUFtQztJQUFBLFlBQVc7SUFBQSxpQkFBUTtJQUN0RCx5QkFBdUM7SUFDekMsaUJBQUk7OztJQUZpQyxlQUFXO0lBQVgsa0NBQVc7OztJQUloRCx5QkFBNEIsZUFBQTtJQUNTLFlBQVc7SUFBQSxpQkFBUTtJQUN0RCx5QkFBdUM7SUFDekMsaUJBQUk7OztJQUZpQyxlQUFXO0lBQVgsa0NBQVc7OztJQWhCbEQsMEJBSUM7SUFDQywyRUFHSTtJQUVKLDJFQUdJO0lBRUosMkVBR0k7SUFDTixpQkFBSzs7O0lBakJILGtFQUEyQyxrRUFBQTtJQUd2QyxlQUFVO0lBQVYsa0NBQVU7SUFLVixlQUFxQjtJQUFyQixvREFBcUI7SUFLckIsZUFBc0I7SUFBdEIscURBQXNCOzs7SUFNNUIsNkJBQThELGVBQUE7SUFDekIsWUFBVztJQUFBLGlCQUFRLEVBQUE7OztJQUFuQixlQUFXO0lBQVgsa0NBQVc7O0FEcEJoRDs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8seUJBQXlCO0lBSnRDO1FBY0UscUNBQXFDO1FBQ2IsZUFBVSxHQUFZLEtBQUssQ0FBQztLQUNyRDs7a0dBWlkseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNidEMsd0VBbUJLO1FBRUwsd0VBRUs7O1FBdEJGLHNDQUFpQjtRQW9CZixlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGRFJSLHlCQUF5QjtjQUpyQyxTQUFTOzJCQUNFLG9CQUFvQjtnQkFLWCxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFHQyxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHQyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFHUyxVQUFVO2tCQUFqQyxLQUFLO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSByZW5kZXJpemEgY2FkYSBpdGVtIGRvIHBvLWJyZWFkY3J1bWIuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWJyZWFkY3J1bWItaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQge1xyXG4gIC8vIEHDp8OjbyBxdWUgc2Vyw6EgZXhlY3V0YWRhIGFvIGNsaWNhciBzb2JyZSBvIGl0ZW0uXHJcbiAgQElucHV0KCdwLWFjdGlvbicpIGFjdGlvbjogRnVuY3Rpb247XHJcblxyXG4gIC8vIExhYmVsIGRvIGl0ZW0uXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gTGluayBkbyBpdGVtLlxyXG4gIEBJbnB1dCgncC1saW5rJykgbGluazogc3RyaW5nO1xyXG5cclxuICAvLyBFc3BlY2lmaWNhIHNlIGl0ZW0gw6kgbyBsaW5rIGF0aXZvLlxyXG4gIEBJbnB1dCgncC1pdGVtLWFjdGl2ZScpIGl0ZW1BY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4iLCI8bGlcclxuICAqbmdJZj1cIiFpdGVtQWN0aXZlXCJcclxuICBbY2xhc3MucG8tYnJlYWRjcnVtYi1pdGVtXT1cImxpbmsgfHwgYWN0aW9uXCJcclxuICBbY2xhc3MucG8tYnJlYWRjcnVtYi1pdGVtLXVuY2xpY2thYmxlXT1cIiFsaW5rICYmICFhY3Rpb25cIlxyXG4+XHJcbiAgPGEgKm5nSWY9XCJsaW5rXCIgW3JvdXRlckxpbmtdPVwibGlua1wiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1icmVhZGNydW1iLWFycm93XCI+PC9kaXY+XHJcbiAgPC9hPlxyXG5cclxuICA8YSAqbmdJZj1cIiFsaW5rICYmIGFjdGlvblwiIChjbGljayk9XCJhY3Rpb24obGFiZWwpXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJwby1icmVhZGNydW1iLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWJyZWFkY3J1bWItYXJyb3dcIj48L2Rpdj5cclxuICA8L2E+XHJcblxyXG4gIDxhICpuZ0lmPVwiIWxpbmsgJiYgIWFjdGlvblwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1icmVhZGNydW1iLWFycm93XCI+PC9kaXY+XHJcbiAgPC9hPlxyXG48L2xpPlxyXG5cclxuPGxpICpuZ0lmPVwiaXRlbUFjdGl2ZVwiIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1pdGVtLXVuY2xpY2thYmxlXCI+XHJcbiAgPGxhYmVsIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuPC9saT5cclxuIl19