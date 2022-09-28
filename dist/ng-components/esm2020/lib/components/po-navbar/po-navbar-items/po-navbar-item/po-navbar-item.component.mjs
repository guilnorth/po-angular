import { Component, Input, EventEmitter, Output } from '@angular/core';
import { isExternalLink } from '../../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function PoNavbarItemComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function PoNavbarItemComponent_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.itemClick()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-clickable", ctx_r0.clickable);
    i0.ɵɵproperty("href", ctx_r0.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
function PoNavbarItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function PoNavbarItemComponent_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.itemClick(ctx_r4.label, ctx_r4.link)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-clickable", ctx_r1.clickable);
    i0.ɵɵproperty("routerLink", ctx_r1.link);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, " ");
} }
export class PoNavbarItemComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    get type() {
        return isExternalLink(this.link) ? 'externalLink' : 'internalLink';
    }
    itemClick(label, link) {
        if (this.action) {
            this.action({ label, link });
        }
        this.click.emit();
    }
}
PoNavbarItemComponent.ɵfac = function PoNavbarItemComponent_Factory(t) { return new (t || PoNavbarItemComponent)(); };
PoNavbarItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarItemComponent, selectors: [["po-navbar-item"]], inputs: { action: ["p-action", "action"], clickable: ["p-clickable", "clickable"], label: ["p-label", "label"], link: ["p-link", "link"] }, outputs: { click: "p-click" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], ["class", "po-navbar-item-link", "target", "_blank", 3, "po-clickable", "href", "click", 4, "ngSwitchCase"], ["class", "po-navbar-item-link", 3, "po-clickable", "routerLink", "click", 4, "ngSwitchCase"], ["target", "_blank", 1, "po-navbar-item-link", 3, "href", "click"], [1, "po-navbar-item-link", 3, "routerLink", "click"]], template: function PoNavbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PoNavbarItemComponent_a_1_Template, 2, 4, "a", 1);
        i0.ɵɵtemplate(2, PoNavbarItemComponent_a_2_Template, 2, 4, "a", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "internalLink");
    } }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i2.RouterLinkWithHref], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarItemComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-item', template: "<ng-container [ngSwitch]=\"type\">\r\n  <a\r\n    *ngSwitchCase=\"'externalLink'\"\r\n    class=\"po-navbar-item-link\"\r\n    [class.po-clickable]=\"clickable\"\r\n    [href]=\"link\"\r\n    target=\"_blank\"\r\n    (click)=\"itemClick()\"\r\n  >\r\n    {{ label }}\r\n  </a>\r\n\r\n  <a\r\n    *ngSwitchCase=\"'internalLink'\"\r\n    class=\"po-navbar-item-link\"\r\n    [class.po-clickable]=\"clickable\"\r\n    [routerLink]=\"link\"\r\n    (click)=\"itemClick(label, link)\"\r\n  >\r\n    {{ label }}\r\n  </a>\r\n</ng-container>\r\n" }]
    }], null, { action: [{
            type: Input,
            args: ['p-action']
        }], clickable: [{
            type: Input,
            args: ['p-clickable']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], link: [{
            type: Input,
            args: ['p-link']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW5hdmJhci9wby1uYXZiYXItaXRlbXMvcG8tbmF2YmFyLWl0ZW0vcG8tbmF2YmFyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW5hdmJhci9wby1uYXZiYXItaXRlbXMvcG8tbmF2YmFyLWl0ZW0vcG8tbmF2YmFyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0h0RCw0QkFPQztJQURDLDJKQUFTLGVBQUEsa0JBQVcsQ0FBQSxJQUFDO0lBRXJCLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBTkYsZ0RBQWdDO0lBQ2hDLG9EQUFhO0lBSWIsZUFDRjtJQURFLDZDQUNGOzs7O0lBRUEsNEJBTUM7SUFEQywySkFBUyxlQUFBLDJDQUFzQixDQUFBLElBQUM7SUFFaEMsWUFDRjtJQUFBLGlCQUFJOzs7SUFMRixnREFBZ0M7SUFDaEMsd0NBQW1CO0lBR25CLGVBQ0Y7SUFERSw2Q0FDRjs7QURWRixNQUFNLE9BQU8scUJBQXFCO0lBSmxDO1FBYXFCLFVBQUssR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7S0FhekY7SUFYQyxJQUFJLElBQUk7UUFDTixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYyxFQUFFLElBQWE7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzswRkFyQlUscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNWbEMsZ0NBQWdDO1FBQzlCLGtFQVNJO1FBRUosa0VBUUk7UUFDTiwwQkFBZTs7UUFyQkQsbUNBQWlCO1FBRTFCLGVBQTRCO1FBQTVCLDZDQUE0QjtRQVc1QixlQUE0QjtRQUE1Qiw2Q0FBNEI7O3VGREhwQixxQkFBcUI7Y0FKakMsU0FBUzsyQkFDRSxnQkFBZ0I7Z0JBSVAsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBRUssU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBRUYsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBRUMsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBRUksS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTmF2YmFySXRlbSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tbmF2YmFyLWl0ZW0uaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IGlzRXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW5hdmJhci1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbmF2YmFyLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1hY3Rpb24nKSBhY3Rpb246IEZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoJ3AtY2xpY2thYmxlJykgY2xpY2thYmxlPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLWxpbmsnKSBsaW5rPzogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCdwLWNsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxQb05hdmJhckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb05hdmJhckl0ZW0+KCk7XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuIGlzRXh0ZXJuYWxMaW5rKHRoaXMubGluaykgPyAnZXh0ZXJuYWxMaW5rJyA6ICdpbnRlcm5hbExpbmsnO1xyXG4gIH1cclxuXHJcbiAgaXRlbUNsaWNrKGxhYmVsPzogc3RyaW5nLCBsaW5rPzogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24oeyBsYWJlbCwgbGluayB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsaWNrLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHlwZVwiPlxyXG4gIDxhXHJcbiAgICAqbmdTd2l0Y2hDYXNlPVwiJ2V4dGVybmFsTGluaydcIlxyXG4gICAgY2xhc3M9XCJwby1uYXZiYXItaXRlbS1saW5rXCJcclxuICAgIFtjbGFzcy5wby1jbGlja2FibGVdPVwiY2xpY2thYmxlXCJcclxuICAgIFtocmVmXT1cImxpbmtcIlxyXG4gICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgIChjbGljayk9XCJpdGVtQ2xpY2soKVwiXHJcbiAgPlxyXG4gICAge3sgbGFiZWwgfX1cclxuICA8L2E+XHJcblxyXG4gIDxhXHJcbiAgICAqbmdTd2l0Y2hDYXNlPVwiJ2ludGVybmFsTGluaydcIlxyXG4gICAgY2xhc3M9XCJwby1uYXZiYXItaXRlbS1saW5rXCJcclxuICAgIFtjbGFzcy5wby1jbGlja2FibGVdPVwiY2xpY2thYmxlXCJcclxuICAgIFtyb3V0ZXJMaW5rXT1cImxpbmtcIlxyXG4gICAgKGNsaWNrKT1cIml0ZW1DbGljayhsYWJlbCwgbGluaylcIlxyXG4gID5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgPC9hPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19