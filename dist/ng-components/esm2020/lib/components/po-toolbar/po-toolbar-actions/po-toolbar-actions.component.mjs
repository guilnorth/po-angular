import { Component, Input, TemplateRef } from '@angular/core';
import { isTypeof } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "../../po-popup/po-popup.component";
import * as i2 from "../../po-icon/po-icon.component";
const poToolbarActionsIconDefault = 'po-icon-more';
/**
 * @docsPrivate
 *
 * @usedBy PoToolbarComponent
 *
 * @description
 *
 * O componente `po-toolbar-actions` tem como objetivo receber uma lista de ações e um ícone que podem ser personalizados.
 */
export class PoToolbarActionsComponent {
    constructor() {
        this._actionsIcon = poToolbarActionsIconDefault;
    }
    /** Define o ícone das ações. */
    set actionsIcon(icon) {
        this._actionsIcon = isTypeof(icon, 'string') || icon instanceof TemplateRef ? icon : poToolbarActionsIconDefault;
    }
    get actionsIcon() {
        return this._actionsIcon;
    }
}
PoToolbarActionsComponent.ɵfac = function PoToolbarActionsComponent_Factory(t) { return new (t || PoToolbarActionsComponent)(); };
PoToolbarActionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoToolbarActionsComponent, selectors: [["po-toolbar-actions"]], inputs: { actions: ["p-actions", "actions"], actionsIcon: ["p-actions-icon", "actionsIcon"] }, decls: 6, vars: 3, consts: [[1, "po-toolbar-actions", 3, "click"], ["toolbarActions", ""], [1, "po-toolbar-icon", "po-clickable", 3, "p-icon"], [3, "p-actions", "p-target"], ["popup", ""]], template: function PoToolbarActionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoToolbarActionsComponent_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(5); return i0.ɵɵresetView(_r1.toggle()); });
        i0.ɵɵelementStart(1, "span", null, 1);
        i0.ɵɵelement(3, "po-icon", 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(4, "po-popup", 3, 4);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("p-icon", ctx.actionsIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-actions", ctx.actions)("p-target", _r0);
    } }, dependencies: [i1.PoPopupComponent, i2.PoIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToolbarActionsComponent, [{
        type: Component,
        args: [{ selector: 'po-toolbar-actions', template: "<div class=\"po-toolbar-actions\" (click)=\"popup.toggle()\">\r\n  <span #toolbarActions>\r\n    <po-icon class=\"po-toolbar-icon po-clickable\" [p-icon]=\"actionsIcon\"></po-icon>\r\n  </span>\r\n</div>\r\n\r\n<po-popup #popup [p-actions]=\"actions\" [p-target]=\"toolbarActions\"> </po-popup>\r\n" }]
    }], null, { actions: [{
            type: Input,
            args: ['p-actions']
        }], actionsIcon: [{
            type: Input,
            args: ['p-actions-icon']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbGJhci1hY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10b29sYmFyL3BvLXRvb2xiYXItYWN0aW9ucy9wby10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRvb2xiYXIvcG8tdG9vbGJhci1hY3Rpb25zL3BvLXRvb2xiYXItYWN0aW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSS9DLE1BQU0sMkJBQTJCLEdBQUcsY0FBYyxDQUFDO0FBRW5EOzs7Ozs7OztHQVFHO0FBS0gsTUFBTSxPQUFPLHlCQUF5QjtJQUp0QztRQVFVLGlCQUFZLEdBQWdDLDJCQUEyQixDQUFDO0tBVWpGO0lBUkMsZ0NBQWdDO0lBQ2hDLElBQTZCLFdBQVcsQ0FBQyxJQUFnQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUNuSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7O2tHQWJVLHlCQUF5Qjs0RUFBekIseUJBQXlCOztRQ3JCdEMsOEJBQXlEO1FBQXpCLHlKQUFTLGVBQUEsWUFBYyxDQUFBLElBQUM7UUFDdEQscUNBQXNCO1FBQ3BCLDZCQUErRTtRQUNqRixpQkFBTyxFQUFBO1FBR1QsaUNBQStFOzs7UUFKN0IsZUFBc0I7UUFBdEIsd0NBQXNCO1FBSXZELGVBQXFCO1FBQXJCLHVDQUFxQixpQkFBQTs7dUZEZXpCLHlCQUF5QjtjQUpyQyxTQUFTOzJCQUNFLG9CQUFvQjtnQkFLVixPQUFPO2tCQUExQixLQUFLO21CQUFDLFdBQVc7WUFLVyxXQUFXO2tCQUF2QyxLQUFLO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc1R5cGVvZiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9Ub29sYmFyQWN0aW9uIH0gZnJvbSAnLi4vcG8tdG9vbGJhci1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IHBvVG9vbGJhckFjdGlvbnNJY29uRGVmYXVsdCA9ICdwby1pY29uLW1vcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAdXNlZEJ5IFBvVG9vbGJhckNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby10b29sYmFyLWFjdGlvbnNgIHRlbSBjb21vIG9iamV0aXZvIHJlY2ViZXIgdW1hIGxpc3RhIGRlIGHDp8O1ZXMgZSB1bSDDrWNvbmUgcXVlIHBvZGVtIHNlciBwZXJzb25hbGl6YWRvcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tdG9vbGJhci1hY3Rpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdG9vbGJhci1hY3Rpb25zLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Ub29sYmFyQWN0aW9uc0NvbXBvbmVudCB7XHJcbiAgLyoqIERlZmluZSB1bWEgbGlzdGEgZGUgYcOnw7Vlcy4gKi9cclxuICBASW5wdXQoJ3AtYWN0aW9ucycpIGFjdGlvbnM/OiBBcnJheTxQb1Rvb2xiYXJBY3Rpb24+O1xyXG5cclxuICBwcml2YXRlIF9hY3Rpb25zSWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gcG9Ub29sYmFyQWN0aW9uc0ljb25EZWZhdWx0O1xyXG5cclxuICAvKiogRGVmaW5lIG8gw61jb25lIGRhcyBhw6fDtWVzLiAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb25zLWljb24nKSBzZXQgYWN0aW9uc0ljb24oaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIHRoaXMuX2FjdGlvbnNJY29uID0gaXNUeXBlb2YoaWNvbiwgJ3N0cmluZycpIHx8IGljb24gaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGljb24gOiBwb1Rvb2xiYXJBY3Rpb25zSWNvbkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aW9uc0ljb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uc0ljb247XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby10b29sYmFyLWFjdGlvbnNcIiAoY2xpY2spPVwicG9wdXAudG9nZ2xlKClcIj5cclxuICA8c3BhbiAjdG9vbGJhckFjdGlvbnM+XHJcbiAgICA8cG8taWNvbiBjbGFzcz1cInBvLXRvb2xiYXItaWNvbiBwby1jbGlja2FibGVcIiBbcC1pY29uXT1cImFjdGlvbnNJY29uXCI+PC9wby1pY29uPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcblxyXG48cG8tcG9wdXAgI3BvcHVwIFtwLWFjdGlvbnNdPVwiYWN0aW9uc1wiIFtwLXRhcmdldF09XCJ0b29sYmFyQWN0aW9uc1wiPiA8L3BvLXBvcHVwPlxyXG4iXX0=