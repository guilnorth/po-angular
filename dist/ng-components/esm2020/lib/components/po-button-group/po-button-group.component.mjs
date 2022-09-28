import { Component } from '@angular/core';
import { PoButtonGroupBaseComponent } from './po-button-group-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-button/po-button.component";
import * as i3 from "../../directives/po-tooltip/po-tooltip.directive";
function PoButtonGroupComponent_po_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 2);
    i0.ɵɵlistener("p-click", function PoButtonGroupComponent_po_button_1_Template_po_button_p_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const button_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.onButtonClick(button_r1, i_r2); return i0.ɵɵresetView(button_r1.action(button_r1)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-button-group-button-selected", button_r1.selected)("po-button-group-disabled", button_r1.disabled);
    i0.ɵɵproperty("p-disabled", button_r1.disabled)("p-icon", button_r1.icon)("p-label", button_r1.label)("p-small", ctx_r0.small)("p-tooltip", !button_r1.disabled ? button_r1.tooltip : undefined);
} }
/**
 * @docsExtends PoButtonGroupBaseComponent
 *
 * @example
 *
 * <example name="po-button-group-basic" title="PO Button Group Basic">
 *  <file name="sample-po-button-group-basic/sample-po-button-group-basic.component.html"> </file>
 *  <file name="sample-po-button-group-basic/sample-po-button-group-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-button-group-labs" title="PO Button Group Labs">
 *  <file name="sample-po-button-group-labs/sample-po-button-group-labs.component.html"> </file>
 *  <file name="sample-po-button-group-labs/sample-po-button-group-labs.component.ts"> </file>
 * </example>
 *
 *
 * <example name="po-button-group-attendance" title="PO Button Group - Attendance">
 *  <file name="sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"> </file>
 *  <file name="sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"> </file>
 * </example>
 *
 * <example name="po-button-group-post" title="PO Button Group - Post">
 *  <file name="sample-po-button-group-post/sample-po-button-group-post.component.html"> </file>
 *  <file name="sample-po-button-group-post/sample-po-button-group-post.component.ts"> </file>
 * </example>
 */
export class PoButtonGroupComponent extends PoButtonGroupBaseComponent {
    constructor(viewRef) {
        super();
    }
}
PoButtonGroupComponent.ɵfac = function PoButtonGroupComponent_Factory(t) { return new (t || PoButtonGroupComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
PoButtonGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoButtonGroupComponent, selectors: [["po-button-group"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "po-button-group-container"], ["class", "po-sm-12 po-button-group", "p-tooltip-position", "bottom", 3, "po-button-group-button-selected", "po-button-group-disabled", "p-disabled", "p-icon", "p-label", "p-small", "p-tooltip", "p-click", 4, "ngFor", "ngForOf"], ["p-tooltip-position", "bottom", 1, "po-sm-12", "po-button-group", 3, "p-disabled", "p-icon", "p-label", "p-small", "p-tooltip", "p-click"]], template: function PoButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoButtonGroupComponent_po_button_1_Template, 1, 9, "po-button", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.buttons);
    } }, dependencies: [i1.NgForOf, i2.PoButtonComponent, i3.PoTooltipDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'po-button-group', template: "<div class=\"po-button-group-container\">\r\n  <po-button\r\n    *ngFor=\"let button of buttons; index as i\"\r\n    class=\"po-sm-12 po-button-group\"\r\n    [class.po-button-group-button-selected]=\"button.selected\"\r\n    [class.po-button-group-disabled]=\"button.disabled\"\r\n    p-tooltip-position=\"bottom\"\r\n    [p-disabled]=\"button.disabled\"\r\n    [p-icon]=\"button.icon\"\r\n    [p-label]=\"button.label\"\r\n    [p-small]=\"small\"\r\n    [p-tooltip]=\"!button.disabled ? button.tooltip : undefined\"\r\n    (p-click)=\"onButtonClick(button, i); button.action(button)\"\r\n  >\r\n  </po-button>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1idXR0b24tZ3JvdXAvcG8tYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1idXR0b24tZ3JvdXAvcG8tYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7O0lDRDVFLG9DQVlDO0lBREMsc1FBQVcscUNBQXdCLFNBQUUsZUFBQSwyQkFBcUIsQ0FBQSxJQUFDO0lBRTdELGlCQUFZOzs7O0lBVlYscUVBQXlELGdEQUFBO0lBR3pELCtDQUE4QiwwQkFBQSw0QkFBQSx5QkFBQSxrRUFBQTs7QURIbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFLSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsMEJBQTBCO0lBQ3BFLFlBQVksT0FBeUI7UUFDbkMsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzs0RkFIVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ2xDbkMsOEJBQXVDO1FBQ3JDLG1GQWFZO1FBQ2QsaUJBQU07O1FBYmlCLGVBQVk7UUFBWixxQ0FBWTs7dUZEZ0N0QixzQkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQnV0dG9uR3JvdXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1idXR0b24tZ3JvdXAtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0J1dHRvbkdyb3VwQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tYnV0dG9uLWdyb3VwLWJhc2ljXCIgdGl0bGU9XCJQTyBCdXR0b24gR3JvdXAgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLWdyb3VwLWJhc2ljL3NhbXBsZS1wby1idXR0b24tZ3JvdXAtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tZ3JvdXAtYmFzaWMvc2FtcGxlLXBvLWJ1dHRvbi1ncm91cC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1idXR0b24tZ3JvdXAtbGFic1wiIHRpdGxlPVwiUE8gQnV0dG9uIEdyb3VwIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLWdyb3VwLWxhYnMvc2FtcGxlLXBvLWJ1dHRvbi1ncm91cC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLWdyb3VwLWxhYnMvc2FtcGxlLXBvLWJ1dHRvbi1ncm91cC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWJ1dHRvbi1ncm91cC1hdHRlbmRhbmNlXCIgdGl0bGU9XCJQTyBCdXR0b24gR3JvdXAgLSBBdHRlbmRhbmNlXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWJ1dHRvbi1ncm91cC1hdHRlbmRhbmNlL3NhbXBsZS1wby1idXR0b24tZ3JvdXAtYXR0ZW5kYW5jZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWJ1dHRvbi1ncm91cC1hdHRlbmRhbmNlL3NhbXBsZS1wby1idXR0b24tZ3JvdXAtYXR0ZW5kYW5jZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1idXR0b24tZ3JvdXAtcG9zdFwiIHRpdGxlPVwiUE8gQnV0dG9uIEdyb3VwIC0gUG9zdFwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tZ3JvdXAtcG9zdC9zYW1wbGUtcG8tYnV0dG9uLWdyb3VwLXBvc3QuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tZ3JvdXAtcG9zdC9zYW1wbGUtcG8tYnV0dG9uLWdyb3VwLXBvc3QuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1idXR0b24tZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0J1dHRvbkdyb3VwQ29tcG9uZW50IGV4dGVuZHMgUG9CdXR0b25Hcm91cEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1idXR0b24tZ3JvdXAtY29udGFpbmVyXCI+XHJcbiAgPHBvLWJ1dHRvblxyXG4gICAgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBidXR0b25zOyBpbmRleCBhcyBpXCJcclxuICAgIGNsYXNzPVwicG8tc20tMTIgcG8tYnV0dG9uLWdyb3VwXCJcclxuICAgIFtjbGFzcy5wby1idXR0b24tZ3JvdXAtYnV0dG9uLXNlbGVjdGVkXT1cImJ1dHRvbi5zZWxlY3RlZFwiXHJcbiAgICBbY2xhc3MucG8tYnV0dG9uLWdyb3VwLWRpc2FibGVkXT1cImJ1dHRvbi5kaXNhYmxlZFwiXHJcbiAgICBwLXRvb2x0aXAtcG9zaXRpb249XCJib3R0b21cIlxyXG4gICAgW3AtZGlzYWJsZWRdPVwiYnV0dG9uLmRpc2FibGVkXCJcclxuICAgIFtwLWljb25dPVwiYnV0dG9uLmljb25cIlxyXG4gICAgW3AtbGFiZWxdPVwiYnV0dG9uLmxhYmVsXCJcclxuICAgIFtwLXNtYWxsXT1cInNtYWxsXCJcclxuICAgIFtwLXRvb2x0aXBdPVwiIWJ1dHRvbi5kaXNhYmxlZCA/IGJ1dHRvbi50b29sdGlwIDogdW5kZWZpbmVkXCJcclxuICAgIChwLWNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uLCBpKTsgYnV0dG9uLmFjdGlvbihidXR0b24pXCJcclxuICA+XHJcbiAgPC9wby1idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=