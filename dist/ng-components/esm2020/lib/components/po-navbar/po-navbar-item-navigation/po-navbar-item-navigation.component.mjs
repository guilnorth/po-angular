import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./po-navbar-item-navigation-icon/po-navbar-item-navigation-icon.component";
export class PoNavbarItemNavigationComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
PoNavbarItemNavigationComponent.ɵfac = function PoNavbarItemNavigationComponent_Factory(t) { return new (t || PoNavbarItemNavigationComponent)(); };
PoNavbarItemNavigationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarItemNavigationComponent, selectors: [["po-navbar-item-navigation"]], inputs: { disableLeft: ["p-disable-left", "disableLeft"], disableRight: ["p-disable-right", "disableRight"] }, outputs: { click: "p-click" }, decls: 2, vars: 2, consts: [["p-icon", "left", 1, "po-navbar-item-navigation-icon", 3, "p-disabled", "p-click"], ["p-icon", "right", 1, "po-navbar-item-navigation-icon", 3, "p-disabled", "p-click"]], template: function PoNavbarItemNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-navbar-item-navigation-icon", 0);
        i0.ɵɵlistener("p-click", function PoNavbarItemNavigationComponent_Template_po_navbar_item_navigation_icon_p_click_0_listener($event) { return ctx.click.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "po-navbar-item-navigation-icon", 1);
        i0.ɵɵlistener("p-click", function PoNavbarItemNavigationComponent_Template_po_navbar_item_navigation_icon_p_click_1_listener($event) { return ctx.click.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-disabled", ctx.disableLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-disabled", ctx.disableRight);
    } }, dependencies: [i1.PoNavbarItemNavigationIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarItemNavigationComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-item-navigation', template: "<po-navbar-item-navigation-icon\r\n  class=\"po-navbar-item-navigation-icon\"\r\n  p-icon=\"left\"\r\n  [p-disabled]=\"disableLeft\"\r\n  (p-click)=\"click.emit($event)\"\r\n>\r\n</po-navbar-item-navigation-icon>\r\n\r\n<po-navbar-item-navigation-icon\r\n  class=\"po-navbar-item-navigation-icon\"\r\n  p-icon=\"right\"\r\n  [p-disabled]=\"disableRight\"\r\n  (p-click)=\"click.emit($event)\"\r\n>\r\n</po-navbar-item-navigation-icon>\r\n" }]
    }], null, { disableLeft: [{
            type: Input,
            args: ['p-disable-left']
        }], disableRight: [{
            type: Input,
            args: ['p-disable-right']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNdkUsTUFBTSxPQUFPLCtCQUErQjtJQUo1QztRQVNxQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7S0FDdkU7OzhHQU5ZLCtCQUErQjtrRkFBL0IsK0JBQStCO1FDTjVDLHlEQUtDO1FBREMsOElBQVcsc0JBQWtCLElBQUM7UUFFaEMsaUJBQWlDO1FBRWpDLHlEQUtDO1FBREMsOElBQVcsc0JBQWtCLElBQUM7UUFFaEMsaUJBQWlDOztRQVgvQiw0Q0FBMEI7UUFRMUIsZUFBMkI7UUFBM0IsNkNBQTJCOzt1RkRMaEIsK0JBQStCO2NBSjNDLFNBQVM7MkJBQ0UsMkJBQTJCO2dCQUlaLFdBQVc7a0JBQW5DLEtBQUs7bUJBQUMsZ0JBQWdCO1lBRUcsWUFBWTtrQkFBckMsS0FBSzttQkFBQyxpQkFBaUI7WUFFTCxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1uYXZiYXItaXRlbS1uYXZpZ2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTmF2YmFySXRlbU5hdmlnYXRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlLWxlZnQnKSBkaXNhYmxlTGVmdDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWRpc2FibGUtcmlnaHQnKSBkaXNhYmxlUmlnaHQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoJ3AtY2xpY2snKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxufVxyXG4iLCI8cG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uXHJcbiAgY2xhc3M9XCJwby1uYXZiYXItaXRlbS1uYXZpZ2F0aW9uLWljb25cIlxyXG4gIHAtaWNvbj1cImxlZnRcIlxyXG4gIFtwLWRpc2FibGVkXT1cImRpc2FibGVMZWZ0XCJcclxuICAocC1jbGljayk9XCJjbGljay5lbWl0KCRldmVudClcIlxyXG4+XHJcbjwvcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uPlxyXG5cclxuPHBvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24taWNvblxyXG4gIGNsYXNzPVwicG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uXCJcclxuICBwLWljb249XCJyaWdodFwiXHJcbiAgW3AtZGlzYWJsZWRdPVwiZGlzYWJsZVJpZ2h0XCJcclxuICAocC1jbGljayk9XCJjbGljay5lbWl0KCRldmVudClcIlxyXG4+XHJcbjwvcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi1pY29uPlxyXG4iXX0=