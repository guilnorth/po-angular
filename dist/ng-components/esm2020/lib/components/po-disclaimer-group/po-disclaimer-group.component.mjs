import { Component } from '@angular/core';
import { PoDisclaimerGroupBaseComponent } from './po-disclaimer-group-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../po-disclaimer/po-disclaimer.component";
import * as i4 from "./po-disclaimer-remove/po-disclaimer-remove.component";
function PoDisclaimerGroupComponent_div_0_po_disclaimer_remove_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer-remove", 5);
    i0.ɵɵlistener("keydown", function PoDisclaimerGroupComponent_div_0_po_disclaimer_remove_3_Template_po_disclaimer_remove_keydown_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onKeyPress($event)); })("p-remove-all-action", function PoDisclaimerGroupComponent_div_0_po_disclaimer_remove_3_Template_po_disclaimer_remove_p_remove_all_action_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.removeAllItems()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-label", ctx_r1.literals.removeAll);
} }
function PoDisclaimerGroupComponent_div_0_po_disclaimer_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer", 6);
    i0.ɵɵlistener("p-close-action", function PoDisclaimerGroupComponent_div_0_po_disclaimer_4_Template_po_disclaimer_p_close_action_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const disclaimer_r6 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.onCloseAction(disclaimer_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const disclaimer_r6 = ctx.$implicit;
    i0.ɵɵproperty("p-hide-close", disclaimer_r6.hideClose)("p-label", disclaimer_r6.label)("p-property", disclaimer_r6.property)("p-value", disclaimer_r6.value);
} }
function PoDisclaimerGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PoDisclaimerGroupComponent_div_0_po_disclaimer_remove_3_Template, 1, 1, "po-disclaimer-remove", 3);
    i0.ɵɵtemplate(4, PoDisclaimerGroupComponent_div_0_po_disclaimer_4_Template, 1, 4, "po-disclaimer", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isRemoveAll());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.disclaimers);
} }
/**
 * @docsExtends PoDisclaimerGroupBaseComponent
 *
 * @example
 *
 * <example name="po-disclaimer-group-basic" title="PO Disclaimer Group Basic">
 *   <file name="sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"> </file>
 *   <file name="sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-disclaimer-group-labs" title="PO Disclaimer Group Labs">
 *   <file name="sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"> </file>
 *   <file name="sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-disclaimer-group-sw-planets" title="PO Disclaimer Group - Star Wars Planets">
 *   <file name="sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"> </file>
 *   <file name="sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"> </file>
 *   <file name="sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"> </file>
 * </example>
 *
 */
export class PoDisclaimerGroupComponent extends PoDisclaimerGroupBaseComponent {
    constructor(differs, languageService) {
        super(differs, languageService);
    }
}
PoDisclaimerGroupComponent.ɵfac = function PoDisclaimerGroupComponent_Factory(t) { return new (t || PoDisclaimerGroupComponent)(i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoDisclaimerGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDisclaimerGroupComponent, selectors: [["po-disclaimer-group"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "po-disclaimer-group", 4, "ngIf"], [1, "po-disclaimer-group"], [1, "po-disclaimer-group-title"], ["class", "po-disclaimer-group-disclaimer-align", 3, "p-label", "keydown", "p-remove-all-action", 4, "ngIf"], ["class", "po-disclaimer-group-disclaimer-align", 3, "p-hide-close", "p-label", "p-property", "p-value", "p-close-action", 4, "ngFor", "ngForOf"], [1, "po-disclaimer-group-disclaimer-align", 3, "p-label", "keydown", "p-remove-all-action"], [1, "po-disclaimer-group-disclaimer-align", 3, "p-hide-close", "p-label", "p-property", "p-value", "p-close-action"]], template: function PoDisclaimerGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoDisclaimerGroupComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.disclaimers.length > 0);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PoDisclaimerComponent, i4.PoDisclaimerRemoveComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDisclaimerGroupComponent, [{
        type: Component,
        args: [{ selector: 'po-disclaimer-group', template: "<div class=\"po-disclaimer-group\" *ngIf=\"disclaimers.length > 0\">\r\n  <div class=\"po-disclaimer-group-title\">{{ title }}</div>\r\n\r\n  <po-disclaimer-remove\r\n    *ngIf=\"isRemoveAll()\"\r\n    class=\"po-disclaimer-group-disclaimer-align\"\r\n    [p-label]=\"literals.removeAll\"\r\n    (keydown)=\"onKeyPress($event)\"\r\n    (p-remove-all-action)=\"removeAllItems()\"\r\n  >\r\n  </po-disclaimer-remove>\r\n\r\n  <po-disclaimer\r\n    *ngFor=\"let disclaimer of disclaimers\"\r\n    class=\"po-disclaimer-group-disclaimer-align\"\r\n    [p-hide-close]=\"disclaimer.hideClose\"\r\n    [p-label]=\"disclaimer.label\"\r\n    [p-property]=\"disclaimer.property\"\r\n    [p-value]=\"disclaimer.value\"\r\n    (p-close-action)=\"onCloseAction(disclaimer)\"\r\n  >\r\n  </po-disclaimer>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.IterableDiffers }, { type: i1.PoLanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlzY2xhaW1lci1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZGlzY2xhaW1lci1ncm91cC9wby1kaXNjbGFpbWVyLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1kaXNjbGFpbWVyLWdyb3VwL3BvLWRpc2NsYWltZXItZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFJM0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7O0lDRHBGLCtDQU1DO0lBRkMsdU5BQVcsZUFBQSx5QkFBa0IsQ0FBQSxJQUFDLDROQUNQLGVBQUEsdUJBQWdCLENBQUEsSUFEVDtJQUdoQyxpQkFBdUI7OztJQUpyQixtREFBOEI7Ozs7SUFNaEMsd0NBUUM7SUFEQyxrUkFBa0IsZUFBQSxtQ0FBeUIsQ0FBQSxJQUFDO0lBRTlDLGlCQUFnQjs7O0lBTmQsc0RBQXFDLGdDQUFBLHNDQUFBLGdDQUFBOzs7SUFmekMsOEJBQWdFLGFBQUE7SUFDdkIsWUFBVztJQUFBLGlCQUFNO0lBRXhELG1IQU91QjtJQUV2QixxR0FTZ0I7SUFDbEIsaUJBQU07OztJQXJCbUMsZUFBVztJQUFYLGtDQUFXO0lBRy9DLGVBQW1CO0lBQW5CLDJDQUFtQjtJQVNHLGVBQWM7SUFBZCw0Q0FBYzs7QURQekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUtILE1BQU0sT0FBTywwQkFBMkIsU0FBUSw4QkFBOEI7SUFDNUUsWUFBWSxPQUF3QixFQUFFLGVBQWtDO1FBQ3RFLEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7b0dBSFUsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUNoQ3ZDLDJFQXNCTTs7UUF0QjRCLGlEQUE0Qjs7dUZEZ0NqRCwwQkFBMEI7Y0FKdEMsU0FBUzsyQkFDRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEl0ZXJhYmxlRGlmZmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvRGlzY2xhaW1lckdyb3VwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZGlzY2xhaW1lci1ncm91cC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvRGlzY2xhaW1lckdyb3VwQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGlzY2xhaW1lci1ncm91cC1iYXNpY1wiIHRpdGxlPVwiUE8gRGlzY2xhaW1lciBHcm91cCBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlzY2xhaW1lci1ncm91cC1iYXNpYy9zYW1wbGUtcG8tZGlzY2xhaW1lci1ncm91cC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaXNjbGFpbWVyLWdyb3VwLWJhc2ljL3NhbXBsZS1wby1kaXNjbGFpbWVyLWdyb3VwLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRpc2NsYWltZXItZ3JvdXAtbGFic1wiIHRpdGxlPVwiUE8gRGlzY2xhaW1lciBHcm91cCBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaXNjbGFpbWVyLWdyb3VwLWxhYnMvc2FtcGxlLXBvLWRpc2NsYWltZXItZ3JvdXAtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaXNjbGFpbWVyLWdyb3VwLWxhYnMvc2FtcGxlLXBvLWRpc2NsYWltZXItZ3JvdXAtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1kaXNjbGFpbWVyLWdyb3VwLXN3LXBsYW5ldHNcIiB0aXRsZT1cIlBPIERpc2NsYWltZXIgR3JvdXAgLSBTdGFyIFdhcnMgUGxhbmV0c1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlzY2xhaW1lci1ncm91cC1zdy1wbGFuZXRzL3NhbXBsZS1wby1kaXNjbGFpbWVyLWdyb3VwLXN3LXBsYW5ldHMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlzY2xhaW1lci1ncm91cC1zdy1wbGFuZXRzL3NhbXBsZS1wby1kaXNjbGFpbWVyLWdyb3VwLXN3LXBsYW5ldHMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRpc2NsYWltZXItZ3JvdXAtc3ctcGxhbmV0cy9zYW1wbGUtcG8tZGlzY2xhaW1lci1ncm91cC1zdy1wbGFuZXRzLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWRpc2NsYWltZXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1kaXNjbGFpbWVyLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9EaXNjbGFpbWVyR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBQb0Rpc2NsYWltZXJHcm91cEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgc3VwZXIoZGlmZmVycywgbGFuZ3VhZ2VTZXJ2aWNlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWRpc2NsYWltZXItZ3JvdXBcIiAqbmdJZj1cImRpc2NsYWltZXJzLmxlbmd0aCA+IDBcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZGlzY2xhaW1lci1ncm91cC10aXRsZVwiPnt7IHRpdGxlIH19PC9kaXY+XHJcblxyXG4gIDxwby1kaXNjbGFpbWVyLXJlbW92ZVxyXG4gICAgKm5nSWY9XCJpc1JlbW92ZUFsbCgpXCJcclxuICAgIGNsYXNzPVwicG8tZGlzY2xhaW1lci1ncm91cC1kaXNjbGFpbWVyLWFsaWduXCJcclxuICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnJlbW92ZUFsbFwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleVByZXNzKCRldmVudClcIlxyXG4gICAgKHAtcmVtb3ZlLWFsbC1hY3Rpb24pPVwicmVtb3ZlQWxsSXRlbXMoKVwiXHJcbiAgPlxyXG4gIDwvcG8tZGlzY2xhaW1lci1yZW1vdmU+XHJcblxyXG4gIDxwby1kaXNjbGFpbWVyXHJcbiAgICAqbmdGb3I9XCJsZXQgZGlzY2xhaW1lciBvZiBkaXNjbGFpbWVyc1wiXHJcbiAgICBjbGFzcz1cInBvLWRpc2NsYWltZXItZ3JvdXAtZGlzY2xhaW1lci1hbGlnblwiXHJcbiAgICBbcC1oaWRlLWNsb3NlXT1cImRpc2NsYWltZXIuaGlkZUNsb3NlXCJcclxuICAgIFtwLWxhYmVsXT1cImRpc2NsYWltZXIubGFiZWxcIlxyXG4gICAgW3AtcHJvcGVydHldPVwiZGlzY2xhaW1lci5wcm9wZXJ0eVwiXHJcbiAgICBbcC12YWx1ZV09XCJkaXNjbGFpbWVyLnZhbHVlXCJcclxuICAgIChwLWNsb3NlLWFjdGlvbik9XCJvbkNsb3NlQWN0aW9uKGRpc2NsYWltZXIpXCJcclxuICA+XHJcbiAgPC9wby1kaXNjbGFpbWVyPlxyXG48L2Rpdj5cclxuIl19