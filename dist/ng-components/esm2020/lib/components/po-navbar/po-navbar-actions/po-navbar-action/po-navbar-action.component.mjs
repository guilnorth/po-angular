import { Component, Input } from '@angular/core';
import { isExternalLink, openExternalLink } from '../../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../../directives/po-tooltip/po-tooltip.directive";
import * as i3 from "../../../po-icon/po-icon.component";
export class PoNavbarActionComponent {
    constructor(viewContainerRef, router) {
        this.router = router;
    }
    click() {
        if (this.action) {
            this.action();
            return;
        }
        if (this.link) {
            return this.openUrl(this.link);
        }
    }
    openUrl(url) {
        if (isExternalLink(url)) {
            return openExternalLink(url);
        }
        if (url) {
            return this.router.navigate([url]);
        }
    }
}
PoNavbarActionComponent.ɵfac = function PoNavbarActionComponent_Factory(t) { return new (t || PoNavbarActionComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.Router)); };
PoNavbarActionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarActionComponent, selectors: [["po-navbar-action"]], inputs: { action: ["p-action", "action"], icon: ["p-icon", "icon"], label: ["p-label", "label"], link: ["p-link", "link"], tooltip: ["p-tooltip-text", "tooltip"] }, decls: 1, vars: 2, consts: [["tabindex", "0", 1, "po-navbar-action-content", "po-clickable", 3, "p-icon", "p-tooltip", "click"]], template: function PoNavbarActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-icon", 0);
        i0.ɵɵlistener("click", function PoNavbarActionComponent_Template_po_icon_click_0_listener() { return ctx.click(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-icon", ctx.icon)("p-tooltip", ctx.tooltip);
    } }, dependencies: [i2.PoTooltipDirective, i3.PoIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarActionComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-action', template: "<po-icon\r\n  tabindex=\"0\"\r\n  class=\"po-navbar-action-content po-clickable\"\r\n  [p-icon]=\"icon\"\r\n  [p-tooltip]=\"tooltip\"\r\n  (click)=\"click()\"\r\n></po-icon>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.Router }]; }, { action: [{
            type: Input,
            args: ['p-action']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], link: [{
            type: Input,
            args: ['p-link']
        }], tooltip: [{
            type: Input,
            args: ['p-tooltip-text']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWFjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1hY3Rpb25zL3BvLW5hdmJhci1hY3Rpb24vcG8tbmF2YmFyLWFjdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1hY3Rpb25zL3BvLW5hdmJhci1hY3Rpb24vcG8tbmF2YmFyLWFjdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFHaEYsT0FBTyxFQUFnQixjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFNeEYsTUFBTSxPQUFPLHVCQUF1QjtJQVdsQyxZQUFZLGdCQUFrQyxFQUFVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUUxRSxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTyxPQUFPLENBQUMsR0FBVztRQUN6QixJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7OzhGQWhDVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1RwQyxrQ0FNQztRQURDLHFHQUFTLFdBQU8sSUFBQztRQUNsQixpQkFBVTs7UUFIVCxpQ0FBZSwwQkFBQTs7dUZETUosdUJBQXVCO2NBSm5DLFNBQVM7MkJBQ0Usa0JBQWtCO3dGQUlULE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUVBLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUVHLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUVDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUVVLE9BQU87a0JBQS9CLEtBQUs7bUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IGNhbGxGdW5jdGlvbiwgaXNFeHRlcm5hbExpbmssIG9wZW5FeHRlcm5hbExpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbmF2YmFyLWFjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLW5hdmJhci1hY3Rpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckFjdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLWFjdGlvbicpIGFjdGlvbj86IEZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoJ3AtaWNvbicpIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ3AtbGluaycpIGxpbms/OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncC10b29sdGlwLXRleHQnKSB0b29sdGlwPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBjbGljaygpIHtcclxuICAgIGlmICh0aGlzLmFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGluaykge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcGVuVXJsKHRoaXMubGluayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5VcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc0V4dGVybmFsTGluayh1cmwpKSB7XHJcbiAgICAgIHJldHVybiBvcGVuRXh0ZXJuYWxMaW5rKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8cG8taWNvblxyXG4gIHRhYmluZGV4PVwiMFwiXHJcbiAgY2xhc3M9XCJwby1uYXZiYXItYWN0aW9uLWNvbnRlbnQgcG8tY2xpY2thYmxlXCJcclxuICBbcC1pY29uXT1cImljb25cIlxyXG4gIFtwLXRvb2x0aXBdPVwidG9vbHRpcFwiXHJcbiAgKGNsaWNrKT1cImNsaWNrKClcIlxyXG4+PC9wby1pY29uPlxyXG4iXX0=