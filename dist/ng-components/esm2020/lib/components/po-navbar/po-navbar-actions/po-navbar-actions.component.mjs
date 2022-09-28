import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-navbar-action/po-navbar-action.component";
import * as i3 from "./po-navbar-action-popup/po-navbar-action-popup.component";
function PoNavbarActionsComponent_po_navbar_action_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-navbar-action", 2);
} if (rf & 2) {
    const iconAction_r1 = ctx.$implicit;
    i0.ɵɵproperty("p-action", iconAction_r1.action)("p-icon", iconAction_r1.icon)("p-label", iconAction_r1.label)("p-link", iconAction_r1.link)("p-tooltip-text", iconAction_r1.tooltip);
} }
export class PoNavbarActionsComponent {
    set iconActions(actions) {
        this._iconActions = actions.map(action => ({ ...action, separator: true, url: action.link }));
    }
    get iconActions() {
        return this._iconActions;
    }
}
PoNavbarActionsComponent.ɵfac = function PoNavbarActionsComponent_Factory(t) { return new (t || PoNavbarActionsComponent)(); };
PoNavbarActionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarActionsComponent, selectors: [["po-navbar-actions"]], inputs: { iconActions: ["p-icon-actions", "iconActions"] }, decls: 2, vars: 2, consts: [["class", "po-navbar-action", 3, "p-action", "p-icon", "p-label", "p-link", "p-tooltip-text", 4, "ngFor", "ngForOf"], [1, "po-navbar-action-popup", 3, "p-icon-actions"], [1, "po-navbar-action", 3, "p-action", "p-icon", "p-label", "p-link", "p-tooltip-text"]], template: function PoNavbarActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoNavbarActionsComponent_po_navbar_action_0_Template, 1, 5, "po-navbar-action", 0);
        i0.ɵɵelement(1, "po-navbar-action-popup", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.iconActions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-icon-actions", ctx.iconActions);
    } }, dependencies: [i1.NgForOf, i2.PoNavbarActionComponent, i3.PoNavbarActionPopupComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarActionsComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-actions', template: "<po-navbar-action\r\n  *ngFor=\"let iconAction of iconActions\"\r\n  class=\"po-navbar-action\"\r\n  [p-action]=\"iconAction.action\"\r\n  [p-icon]=\"iconAction.icon\"\r\n  [p-label]=\"iconAction.label\"\r\n  [p-link]=\"iconAction.link\"\r\n  [p-tooltip-text]=\"iconAction.tooltip\"\r\n>\r\n</po-navbar-action>\r\n\r\n<po-navbar-action-popup class=\"po-navbar-action-popup\" [p-icon-actions]=\"iconActions\"> </po-navbar-action-popup>\r\n" }]
    }], null, { iconActions: [{
            type: Input,
            args: ['p-icon-actions']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW5hdmJhci9wby1uYXZiYXItYWN0aW9ucy9wby1uYXZiYXItYWN0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1hY3Rpb25zL3BvLW5hdmJhci1hY3Rpb25zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNBakQsc0NBU21COzs7SUFOakIsK0NBQThCLDhCQUFBLGdDQUFBLDhCQUFBLHlDQUFBOztBREtoQyxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLElBQTZCLFdBQVcsQ0FBQyxPQUFrQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7O2dHQVRVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDUnJDLG1HQVNtQjtRQUVuQiw0Q0FBZ0g7O1FBVnZGLHlDQUFjO1FBVWdCLGVBQThCO1FBQTlCLGdEQUE4Qjs7dUZESHhFLHdCQUF3QjtjQUpwQyxTQUFTOzJCQUNFLG1CQUFtQjtnQkFNQSxXQUFXO2tCQUF2QyxLQUFLO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTmF2YmFySWNvbkFjdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tbmF2YmFyLWljb24tYWN0aW9uLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW5hdmJhci1hY3Rpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbmF2YmFyLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckFjdGlvbnNDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX2ljb25BY3Rpb25zOiBBcnJheTxQb05hdmJhckljb25BY3Rpb24+O1xyXG5cclxuICBASW5wdXQoJ3AtaWNvbi1hY3Rpb25zJykgc2V0IGljb25BY3Rpb25zKGFjdGlvbnM6IEFycmF5PFBvTmF2YmFySWNvbkFjdGlvbj4pIHtcclxuICAgIHRoaXMuX2ljb25BY3Rpb25zID0gYWN0aW9ucy5tYXAoYWN0aW9uID0+ICh7IC4uLmFjdGlvbiwgc2VwYXJhdG9yOiB0cnVlLCB1cmw6IGFjdGlvbi5saW5rIH0pKTtcclxuICB9XHJcblxyXG4gIGdldCBpY29uQWN0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uQWN0aW9ucztcclxuICB9XHJcbn1cclxuIiwiPHBvLW5hdmJhci1hY3Rpb25cclxuICAqbmdGb3I9XCJsZXQgaWNvbkFjdGlvbiBvZiBpY29uQWN0aW9uc1wiXHJcbiAgY2xhc3M9XCJwby1uYXZiYXItYWN0aW9uXCJcclxuICBbcC1hY3Rpb25dPVwiaWNvbkFjdGlvbi5hY3Rpb25cIlxyXG4gIFtwLWljb25dPVwiaWNvbkFjdGlvbi5pY29uXCJcclxuICBbcC1sYWJlbF09XCJpY29uQWN0aW9uLmxhYmVsXCJcclxuICBbcC1saW5rXT1cImljb25BY3Rpb24ubGlua1wiXHJcbiAgW3AtdG9vbHRpcC10ZXh0XT1cImljb25BY3Rpb24udG9vbHRpcFwiXHJcbj5cclxuPC9wby1uYXZiYXItYWN0aW9uPlxyXG5cclxuPHBvLW5hdmJhci1hY3Rpb24tcG9wdXAgY2xhc3M9XCJwby1uYXZiYXItYWN0aW9uLXBvcHVwXCIgW3AtaWNvbi1hY3Rpb25zXT1cImljb25BY3Rpb25zXCI+IDwvcG8tbmF2YmFyLWFjdGlvbi1wb3B1cD5cclxuIl19