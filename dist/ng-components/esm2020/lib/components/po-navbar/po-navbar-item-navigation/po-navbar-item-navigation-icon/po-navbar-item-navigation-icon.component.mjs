import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "po-navbar-item-navigation-icon-disabled": a0, "po-clickable": a1 }; };
export class PoNavbarItemNavigationIconComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
PoNavbarItemNavigationIconComponent.ɵfac = function PoNavbarItemNavigationIconComponent_Factory(t) { return new (t || PoNavbarItemNavigationIconComponent)(); };
PoNavbarItemNavigationIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarItemNavigationIconComponent, selectors: [["po-navbar-item-navigation-icon"]], inputs: { disabled: ["p-disabled", "disabled"], icon: ["p-icon", "icon"] }, outputs: { click: "p-click" }, decls: 2, vars: 7, consts: [["tabindex", "0", 3, "ngClass", "click"]], template: function PoNavbarItemNavigationIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoNavbarItemNavigationIconComponent_Template_div_click_0_listener() { return ctx.disabled ? undefined : ctx.click.emit(ctx.icon); });
        i0.ɵɵelement(1, "span");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.disabled, !ctx.disabled));
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("po-icon po-icon-arrow-", ctx.icon, "");
    } }, dependencies: [i1.NgClass], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarItemNavigationIconComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-item-navigation-icon', template: "<div\r\n  [ngClass]=\"{ 'po-navbar-item-navigation-icon-disabled': disabled, 'po-clickable': !disabled }\"\r\n  tabindex=\"0\"\r\n  (click)=\"disabled ? undefined : click.emit(icon)\"\r\n>\r\n  <span class=\"po-icon po-icon-arrow-{{ icon }}\"></span>\r\n</div>\r\n" }]
    }], null, { disabled: [{
            type: Input,
            args: ['p-disabled']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1uYXZiYXIvcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi9wby1uYXZiYXItaXRlbS1uYXZpZ2F0aW9uLWljb24vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1uYXZiYXIvcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi9wby1uYXZiYXItaXRlbS1uYXZpZ2F0aW9uLWljb24vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNdkUsTUFBTSxPQUFPLG1DQUFtQztJQUpoRDtRQVNxQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7S0FDdkU7O3NIQU5ZLG1DQUFtQztzRkFBbkMsbUNBQW1DO1FDTmhELDhCQUlDO1FBREMsNEhBQW9CLFNBQVMsR0FBRyx3QkFBZ0IsSUFBQztRQUVqRCx1QkFBc0Q7UUFDeEQsaUJBQU07O1FBTEosaUZBQThGO1FBSXhGLGVBQXdDO1FBQXhDLGlFQUF3Qzs7dUZEQ25DLG1DQUFtQztjQUovQyxTQUFTOzJCQUNFLGdDQUFnQztnQkFJckIsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRUYsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBRUksS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9OYXZiYXJJdGVtTmF2aWdhdGlvbkljb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoJ3AtaWNvbicpIGljb246IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoJ3AtY2xpY2snKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxufVxyXG4iLCI8ZGl2XHJcbiAgW25nQ2xhc3NdPVwieyAncG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uLWRpc2FibGVkJzogZGlzYWJsZWQsICdwby1jbGlja2FibGUnOiAhZGlzYWJsZWQgfVwiXHJcbiAgdGFiaW5kZXg9XCIwXCJcclxuICAoY2xpY2spPVwiZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBjbGljay5lbWl0KGljb24pXCJcclxuPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWFycm93LXt7IGljb24gfX1cIj48L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=