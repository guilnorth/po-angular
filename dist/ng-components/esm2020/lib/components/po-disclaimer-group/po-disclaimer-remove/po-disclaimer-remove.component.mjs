import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../po-disclaimer/po-disclaimer.component";
/**
 * @docsPrivate
 *
 * @description
 *
 * Este é um componente interno utilizado pelo po-disclaimer-group, se comporta como um botão e recebe uma ação para remover todos os
 * po-disclaimers do grupo.
 */
export class PoDisclaimerRemoveComponent {
    constructor() {
        /** Ação para remover todos.  */
        this.removeAllAction = new EventEmitter();
    }
    // Emite a ação de remover todos.
    removeAction() {
        this.removeAllAction.emit();
    }
}
PoDisclaimerRemoveComponent.ɵfac = function PoDisclaimerRemoveComponent_Factory(t) { return new (t || PoDisclaimerRemoveComponent)(); };
PoDisclaimerRemoveComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDisclaimerRemoveComponent, selectors: [["po-disclaimer-remove"]], inputs: { label: ["p-label", "label"] }, outputs: { removeAllAction: "p-remove-all-action" }, decls: 1, vars: 1, consts: [["tabindex", "0", "p-hide-close", "true", "p-type", "danger", 1, "po-clickable", 3, "p-label", "click"]], template: function PoDisclaimerRemoveComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-disclaimer", 0);
        i0.ɵɵlistener("click", function PoDisclaimerRemoveComponent_Template_po_disclaimer_click_0_listener() { return ctx.removeAction(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label);
    } }, dependencies: [i1.PoDisclaimerComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDisclaimerRemoveComponent, [{
        type: Component,
        args: [{ selector: 'po-disclaimer-remove', template: "<po-disclaimer\r\n  class=\"po-clickable\"\r\n  tabindex=\"0\"\r\n  p-hide-close=\"true\"\r\n  p-type=\"danger\"\r\n  [p-label]=\"label\"\r\n  (click)=\"removeAction()\"\r\n>\r\n</po-disclaimer>\r\n" }]
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], removeAllAction: [{
            type: Output,
            args: ['p-remove-all-action']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlzY2xhaW1lci1yZW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWRpc2NsYWltZXItZ3JvdXAvcG8tZGlzY2xhaW1lci1yZW1vdmUvcG8tZGlzY2xhaW1lci1yZW1vdmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWRpc2NsYWltZXItZ3JvdXAvcG8tZGlzY2xhaW1lci1yZW1vdmUvcG8tZGlzY2xhaW1lci1yZW1vdmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBQ3ZFOzs7Ozs7O0dBT0c7QUFLSCxNQUFNLE9BQU8sMkJBQTJCO0lBSnhDO1FBUUUsZ0NBQWdDO1FBQ0Qsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBTXJFO0lBSkMsaUNBQWlDO0lBQ2pDLFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7O3NHQVZVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDYnhDLHdDQU9DO1FBREMsK0dBQVMsa0JBQWMsSUFBQztRQUUxQixpQkFBZ0I7O1FBSGQsbUNBQWlCOzt1RkRRTiwyQkFBMkI7Y0FKdkMsU0FBUzsyQkFDRSxzQkFBc0I7Z0JBS2QsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR2UsZUFBZTtrQkFBN0MsTUFBTTttQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBFc3RlIMOpIHVtIGNvbXBvbmVudGUgaW50ZXJubyB1dGlsaXphZG8gcGVsbyBwby1kaXNjbGFpbWVyLWdyb3VwLCBzZSBjb21wb3J0YSBjb21vIHVtIGJvdMOjbyBlIHJlY2ViZSB1bWEgYcOnw6NvIHBhcmEgcmVtb3ZlciB0b2RvcyBvc1xyXG4gKiBwby1kaXNjbGFpbWVycyBkbyBncnVwby5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZGlzY2xhaW1lci1yZW1vdmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1kaXNjbGFpbWVyLXJlbW92ZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRGlzY2xhaW1lclJlbW92ZUNvbXBvbmVudCB7XHJcbiAgLyoqIFRleHRvIGV4aWJpZG8uICAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogQcOnw6NvIHBhcmEgcmVtb3ZlciB0b2Rvcy4gICovXHJcbiAgQE91dHB1dCgncC1yZW1vdmUtYWxsLWFjdGlvbicpIHJlbW92ZUFsbEFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gRW1pdGUgYSBhw6fDo28gZGUgcmVtb3ZlciB0b2Rvcy5cclxuICByZW1vdmVBY3Rpb24oKSB7XHJcbiAgICB0aGlzLnJlbW92ZUFsbEFjdGlvbi5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1kaXNjbGFpbWVyXHJcbiAgY2xhc3M9XCJwby1jbGlja2FibGVcIlxyXG4gIHRhYmluZGV4PVwiMFwiXHJcbiAgcC1oaWRlLWNsb3NlPVwidHJ1ZVwiXHJcbiAgcC10eXBlPVwiZGFuZ2VyXCJcclxuICBbcC1sYWJlbF09XCJsYWJlbFwiXHJcbiAgKGNsaWNrKT1cInJlbW92ZUFjdGlvbigpXCJcclxuPlxyXG48L3BvLWRpc2NsYWltZXI+XHJcbiJdfQ==