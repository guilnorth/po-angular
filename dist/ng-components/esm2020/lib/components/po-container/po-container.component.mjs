import { Component } from '@angular/core';
import { PoContainerBaseComponent } from './po-container-base.component';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @docsExtends PoContainerBaseComponent
 *
 * @example
 *
 * <example name="po-container-basic" title="PO Container Basic">
 *  <file name="sample-po-container-basic/sample-po-container-basic.component.html"> </file>
 *  <file name="sample-po-container-basic/sample-po-container-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-container-labs" title="PO Container Labs">
 *  <file name="sample-po-container-labs/sample-po-container-labs.component.html"> </file>
 *  <file name="sample-po-container-labs/sample-po-container-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-container-dashboard" title="PO Container - Dashboard">
 *  <file name="sample-po-container-dashboard/sample-po-container-dashboard.component.html"> </file>
 *  <file name="sample-po-container-dashboard/sample-po-container-dashboard.component.ts"> </file>
 *  <file name="sample-po-container-dashboard/sample-po-container-dashboard.service.ts"> </file>
 * </example>
 */
export class PoContainerComponent extends PoContainerBaseComponent {
}
PoContainerComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoContainerComponent_BaseFactory; return function PoContainerComponent_Factory(t) { return (ɵPoContainerComponent_BaseFactory || (ɵPoContainerComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoContainerComponent)))(t || PoContainerComponent); }; }();
PoContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoContainerComponent, selectors: [["po-container"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 8, consts: [[1, "po-container"]], template: function PoContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height ? ctx.height + "px" : "auto");
        i0.ɵɵclassProp("po-container-no-border", ctx.noBorder)("po-container-no-padding", ctx.noPadding)("po-container-no-shadow", ctx.noShadow);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoContainerComponent, [{
        type: Component,
        args: [{ selector: 'po-container', template: "<div\r\n  class=\"po-container\"\r\n  [class.po-container-no-border]=\"noBorder\"\r\n  [class.po-container-no-padding]=\"noPadding\"\r\n  [class.po-container-no-shadow]=\"noShadow\"\r\n  [style.height]=\"height ? height + 'px' : 'auto'\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jb250YWluZXIvcG8tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jb250YWluZXIvcG8tY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUV6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFLSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXdCOzs0UEFBckQsb0JBQW9CLFNBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9COztRQzdCakMsOEJBTUM7UUFDQyxrQkFBeUI7UUFDM0IsaUJBQU07O1FBSEosaUVBQWdEO1FBSGhELHNEQUF5QywwQ0FBQSx3Q0FBQTs7dUZEMkI5QixvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbnRhaW5lckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWNvbnRhaW5lci1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvQ29udGFpbmVyQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY29udGFpbmVyLWJhc2ljXCIgdGl0bGU9XCJQTyBDb250YWluZXIgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29udGFpbmVyLWJhc2ljL3NhbXBsZS1wby1jb250YWluZXItYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb250YWluZXItYmFzaWMvc2FtcGxlLXBvLWNvbnRhaW5lci1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jb250YWluZXItbGFic1wiIHRpdGxlPVwiUE8gQ29udGFpbmVyIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29udGFpbmVyLWxhYnMvc2FtcGxlLXBvLWNvbnRhaW5lci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29udGFpbmVyLWxhYnMvc2FtcGxlLXBvLWNvbnRhaW5lci1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNvbnRhaW5lci1kYXNoYm9hcmRcIiB0aXRsZT1cIlBPIENvbnRhaW5lciAtIERhc2hib2FyZFwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb250YWluZXItZGFzaGJvYXJkL3NhbXBsZS1wby1jb250YWluZXItZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29udGFpbmVyLWRhc2hib2FyZC9zYW1wbGUtcG8tY29udGFpbmVyLWRhc2hib2FyZC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb250YWluZXItZGFzaGJvYXJkL3NhbXBsZS1wby1jb250YWluZXItZGFzaGJvYXJkLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgUG9Db250YWluZXJCYXNlQ29tcG9uZW50IHt9XHJcbiIsIjxkaXZcclxuICBjbGFzcz1cInBvLWNvbnRhaW5lclwiXHJcbiAgW2NsYXNzLnBvLWNvbnRhaW5lci1uby1ib3JkZXJdPVwibm9Cb3JkZXJcIlxyXG4gIFtjbGFzcy5wby1jb250YWluZXItbm8tcGFkZGluZ109XCJub1BhZGRpbmdcIlxyXG4gIFtjbGFzcy5wby1jb250YWluZXItbm8tc2hhZG93XT1cIm5vU2hhZG93XCJcclxuICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodCA/IGhlaWdodCArICdweCcgOiAnYXV0bydcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19