import { Component } from '@angular/core';
import { isKeyCodeEnter } from '../../utils/util';
import { PoDisclaimerBaseComponent } from './po-disclaimer-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoDisclaimerComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵlistener("click", function PoDisclaimerComponent_div_0_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.close()); })("keydown", function PoDisclaimerComponent_div_0_span_3_Template_span_keydown_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onKeyPress($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-disclaimer-remove-danger", ctx_r1.type === "danger");
} }
function PoDisclaimerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PoDisclaimerComponent_div_0_span_3_Template, 1, 2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-disclaimer-label-danger", ctx_r0.type === "danger");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getLabel(), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hideClose === false);
} }
/**
 * @docsPrivate
 *
 * @docsExtends PoDisclaimerBaseComponent
 *
 * @examplePrivate
 *
 * <example-private name="po-disclaimer" title="PO Disclaimer">
 *   <file name="sample-po-disclaimer.component.html"> </file>
 *   <file name="sample-po-disclaimer.component.ts"> </file>
 * </example-private>
 */
export class PoDisclaimerComponent extends PoDisclaimerBaseComponent {
    onKeyPress(event) {
        if (isKeyCodeEnter(event)) {
            this.close();
        }
    }
}
PoDisclaimerComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoDisclaimerComponent_BaseFactory; return function PoDisclaimerComponent_Factory(t) { return (ɵPoDisclaimerComponent_BaseFactory || (ɵPoDisclaimerComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoDisclaimerComponent)))(t || PoDisclaimerComponent); }; }();
PoDisclaimerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDisclaimerComponent, selectors: [["po-disclaimer"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "po-disclaimer", 4, "ngIf"], [1, "po-disclaimer"], [1, "po-disclaimer-label"], ["class", "po-disclaimer-remove po-icon po-icon-close po-clickable", "tabindex", "0", 3, "po-disclaimer-remove-danger", "click", "keydown", 4, "ngIf"], ["tabindex", "0", 1, "po-disclaimer-remove", "po-icon", "po-icon-close", "po-clickable", 3, "click", "keydown"]], template: function PoDisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoDisclaimerComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showDisclaimer === true);
    } }, dependencies: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDisclaimerComponent, [{
        type: Component,
        args: [{ selector: 'po-disclaimer', template: "<div *ngIf=\"showDisclaimer === true\" class=\"po-disclaimer\">\r\n  <span class=\"po-disclaimer-label\" [class.po-disclaimer-label-danger]=\"type === 'danger'\">\r\n    {{ getLabel() }}\r\n  </span>\r\n\r\n  <span\r\n    *ngIf=\"hideClose === false\"\r\n    class=\"po-disclaimer-remove po-icon po-icon-close po-clickable\"\r\n    tabindex=\"0\"\r\n    [class.po-disclaimer-remove-danger]=\"type === 'danger'\"\r\n    (click)=\"close()\"\r\n    (keydown)=\"onKeyPress($event)\"\r\n  >\r\n  </span>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlzY2xhaW1lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZGlzY2xhaW1lci9wby1kaXNjbGFpbWVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1kaXNjbGFpbWVyL3BvLWRpc2NsYWltZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0lDQ3pFLCtCQU9DO0lBRkMsd0tBQVMsZUFBQSxjQUFPLENBQUEsSUFBQyxxS0FDTixlQUFBLHlCQUFrQixDQUFBLElBRFo7SUFHbkIsaUJBQU87OztJQUpMLHVFQUF1RDs7O0lBVDNELDhCQUEyRCxjQUFBO0lBRXZELFlBQ0Y7SUFBQSxpQkFBTztJQUVQLDhFQVFPO0lBQ1QsaUJBQU07OztJQWI4QixlQUFzRDtJQUF0RCxzRUFBc0Q7SUFDdEYsZUFDRjtJQURFLGtEQUNGO0lBR0csZUFBeUI7SUFBekIsaURBQXlCOztBREE5Qjs7Ozs7Ozs7Ozs7R0FXRztBQUtILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7SUFDbEUsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztpUUFMVSxxQkFBcUIsU0FBckIscUJBQXFCO3dFQUFyQixxQkFBcUI7UUN0QmxDLHNFQWNNOztRQWRBLGtEQUE2Qjs7dUZEc0J0QixxQkFBcUI7Y0FKakMsU0FBUzsyQkFDRSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0tleUNvZGVFbnRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9EaXNjbGFpbWVyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZGlzY2xhaW1lci1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0Rpc2NsYWltZXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlUHJpdmF0ZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZS1wcml2YXRlIG5hbWU9XCJwby1kaXNjbGFpbWVyXCIgdGl0bGU9XCJQTyBEaXNjbGFpbWVyXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaXNjbGFpbWVyLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRpc2NsYWltZXIuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlLXByaXZhdGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWRpc2NsYWltZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1kaXNjbGFpbWVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9EaXNjbGFpbWVyQ29tcG9uZW50IGV4dGVuZHMgUG9EaXNjbGFpbWVyQmFzZUNvbXBvbmVudCB7XHJcbiAgb25LZXlQcmVzcyhldmVudDogYW55KSB7XHJcbiAgICBpZiAoaXNLZXlDb2RlRW50ZXIoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cInNob3dEaXNjbGFpbWVyID09PSB0cnVlXCIgY2xhc3M9XCJwby1kaXNjbGFpbWVyXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1kaXNjbGFpbWVyLWxhYmVsXCIgW2NsYXNzLnBvLWRpc2NsYWltZXItbGFiZWwtZGFuZ2VyXT1cInR5cGUgPT09ICdkYW5nZXInXCI+XHJcbiAgICB7eyBnZXRMYWJlbCgpIH19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8c3BhblxyXG4gICAgKm5nSWY9XCJoaWRlQ2xvc2UgPT09IGZhbHNlXCJcclxuICAgIGNsYXNzPVwicG8tZGlzY2xhaW1lci1yZW1vdmUgcG8taWNvbiBwby1pY29uLWNsb3NlIHBvLWNsaWNrYWJsZVwiXHJcbiAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgW2NsYXNzLnBvLWRpc2NsYWltZXItcmVtb3ZlLWRhbmdlcl09XCJ0eXBlID09PSAnZGFuZ2VyJ1wiXHJcbiAgICAoY2xpY2spPVwiY2xvc2UoKVwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleVByZXNzKCRldmVudClcIlxyXG4gID5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=