import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../po-popup/po-popup.component";
export class PoNavbarActionPopupComponent {
    getLastIconAction() {
        if (this.iconActions && this.iconActions.length) {
            return this.iconActions[this.iconActions.length - 1].icon;
        }
    }
}
PoNavbarActionPopupComponent.ɵfac = function PoNavbarActionPopupComponent_Factory(t) { return new (t || PoNavbarActionPopupComponent)(); };
PoNavbarActionPopupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarActionPopupComponent, selectors: [["po-navbar-action-popup"]], inputs: { iconActions: ["p-icon-actions", "iconActions"] }, decls: 5, vars: 5, consts: [["tabindex", "0", 1, "po-navbar-action-popup-content", "po-clickable", 3, "click"], ["target", ""], [3, "p-actions", "p-target"], ["popup", ""]], template: function PoNavbarActionPopupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function PoNavbarActionPopupComponent_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(4); return i0.ɵɵresetView(_r1.toggle()); });
        i0.ɵɵelement(2, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "po-popup", 2, 3);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("po-icon ", ctx.getLastIconAction(), "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-actions", ctx.iconActions)("p-target", _r0);
    } }, dependencies: [i1.PoPopupComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarActionPopupComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-action-popup', template: "<div tabindex=\"0\" #target class=\"po-navbar-action-popup-content po-clickable\" (click)=\"popup.toggle()\">\r\n  <span class=\"po-icon {{ getLastIconAction() }}\"></span>\r\n</div>\r\n\r\n<po-popup #popup [p-actions]=\"iconActions\" [p-target]=\"target\"> </po-popup>\r\n" }]
    }], null, { iconActions: [{
            type: Input,
            args: ['p-icon-actions']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWFjdGlvbi1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1hY3Rpb25zL3BvLW5hdmJhci1hY3Rpb24tcG9wdXAvcG8tbmF2YmFyLWFjdGlvbi1wb3B1cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1hY3Rpb25zL3BvLW5hdmJhci1hY3Rpb24tcG9wdXAvcG8tbmF2YmFyLWFjdGlvbi1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWpELE1BQU0sT0FBTyw0QkFBNEI7SUFHdkMsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzt3R0FQVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjs7UUNSekMsaUNBQXVHO1FBQXpCLDRKQUFTLGVBQUEsWUFBYyxDQUFBLElBQUM7UUFDcEcsdUJBQXVEO1FBQ3pELGlCQUFNO1FBRU4saUNBQTJFOzs7UUFIbkUsZUFBeUM7UUFBekMsa0VBQXlDO1FBR2hDLGVBQXlCO1FBQXpCLDJDQUF5QixpQkFBQTs7dUZESTdCLDRCQUE0QjtjQUp4QyxTQUFTOzJCQUNFLHdCQUF3QjtnQkFJVCxXQUFXO2tCQUFuQyxLQUFLO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTmF2YmFySWNvbkFjdGlvbiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tbmF2YmFyLWljb24tYWN0aW9uLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW5hdmJhci1hY3Rpb24tcG9wdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1uYXZiYXItYWN0aW9uLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9OYXZiYXJBY3Rpb25Qb3B1cENvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLWljb24tYWN0aW9ucycpIGljb25BY3Rpb25zOiBBcnJheTxQb05hdmJhckljb25BY3Rpb24+O1xyXG5cclxuICBnZXRMYXN0SWNvbkFjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmljb25BY3Rpb25zICYmIHRoaXMuaWNvbkFjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmljb25BY3Rpb25zW3RoaXMuaWNvbkFjdGlvbnMubGVuZ3RoIC0gMV0uaWNvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiB0YWJpbmRleD1cIjBcIiAjdGFyZ2V0IGNsYXNzPVwicG8tbmF2YmFyLWFjdGlvbi1wb3B1cC1jb250ZW50IHBvLWNsaWNrYWJsZVwiIChjbGljayk9XCJwb3B1cC50b2dnbGUoKVwiPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8taWNvbiB7eyBnZXRMYXN0SWNvbkFjdGlvbigpIH19XCI+PC9zcGFuPlxyXG48L2Rpdj5cclxuXHJcbjxwby1wb3B1cCAjcG9wdXAgW3AtYWN0aW9uc109XCJpY29uQWN0aW9uc1wiIFtwLXRhcmdldF09XCJ0YXJnZXRcIj4gPC9wby1wb3B1cD5cclxuIl19