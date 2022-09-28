import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoAvatarBaseComponent } from './po-avatar-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoAvatarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoAvatarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 4);
    i0.ɵɵlistener("error", function PoAvatarComponent_ng_template_2_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onError()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r2.src, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("loading", ctx_r2.loading);
} }
function PoAvatarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} }
/**
 * @docsExtends PoAvatarBaseComponent
 *
 * @example
 *
 * <example name="po-avatar-basic" title="PO Avatar Basic" >
 *  <file name="sample-po-avatar-basic/sample-po-avatar-basic.component.html"> </file>
 *  <file name="sample-po-avatar-basic/sample-po-avatar-basic.component.ts"> </file>
 *  <file name="sample-po-avatar-basic/sample-po-avatar-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-avatar-basic/sample-po-avatar-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-avatar-labs" title="PO Avatar Labs" >
 *  <file name="sample-po-avatar-labs/sample-po-avatar-labs.component.html"> </file>
 *  <file name="sample-po-avatar-labs/sample-po-avatar-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-avatar-business-card" title="PO Avatar - Business Card" >
 *  <file name="sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"> </file>
 *  <file name="sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"> </file>
 * </example>
 */
export class PoAvatarComponent extends PoAvatarBaseComponent {
    ngOnInit() {
        if (!this.src) {
            this.src = undefined;
        }
    }
    onError() {
        this.src = undefined;
    }
}
PoAvatarComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoAvatarComponent_BaseFactory; return function PoAvatarComponent_Factory(t) { return (ɵPoAvatarComponent_BaseFactory || (ɵPoAvatarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoAvatarComponent)))(t || PoAvatarComponent); }; }();
PoAvatarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAvatarComponent, selectors: [["po-avatar"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 8, consts: [[3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["sourceImage", ""], ["defaultIcon", ""], ["alt", "", 1, "po-avatar-image", 3, "src", "error"], [1, "po-icon", "po-icon-user", "po-avatar-default-icon"]], template: function PoAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoAvatarComponent_Template_div_click_0_listener() { return ctx.click.emit(); });
        i0.ɵɵtemplate(1, PoAvatarComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoAvatarComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PoAvatarComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵclassMapInterpolate1("po-avatar po-avatar-", ctx.size, "");
        i0.ɵɵclassProp("po-clickable", ctx.hasClickEvent);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.src)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAvatarComponent, [{
        type: Component,
        args: [{ selector: 'po-avatar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-avatar po-avatar-{{ size }}\" [class.po-clickable]=\"hasClickEvent\" (click)=\"click.emit()\">\r\n  <ng-container *ngIf=\"src; then sourceImage; else defaultIcon\"></ng-container>\r\n</div>\r\n\r\n<ng-template #sourceImage>\r\n  <img class=\"po-avatar-image\" [src]=\"src\" alt=\"\" [attr.loading]=\"loading\" (error)=\"onError()\" />\r\n</ng-template>\r\n\r\n<ng-template #defaultIcon>\r\n  <span class=\"po-icon po-icon-user po-avatar-default-icon\"></span>\r\n</ng-template>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1hdmF0YXIvcG8tYXZhdGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1hdmF0YXIvcG8tYXZhdGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7SUNEakUsd0JBQTZFOzs7O0lBSTdFLDhCQUErRjtJQUF0QixtS0FBUyxlQUFBLGdCQUFTLENBQUEsSUFBQztJQUE1RixpQkFBK0Y7OztJQUFsRSxrREFBVztJQUFRLHlDQUF3Qjs7O0lBSXhFLDBCQUFpRTs7QURMbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU1ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxxQkFBcUI7SUFDMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7OzZPQVRVLGlCQUFpQixTQUFqQixpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQy9COUIsOEJBQXdHO1FBQXZCLDJGQUFTLGdCQUFZLElBQUM7UUFDckcsb0ZBQTZFO1FBQy9FLGlCQUFNO1FBRU4sbUhBRWM7UUFFZCxtSEFFYzs7OztRQVZULCtEQUFzQztRQUFDLGlEQUFvQztRQUMvRCxlQUFXO1FBQVgsOEJBQVcsaUJBQUEsaUJBQUE7O3VGRDhCZixpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSxXQUFXLG1CQUVKLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQXZhdGFyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tYXZhdGFyLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9BdmF0YXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1hdmF0YXItYmFzaWNcIiB0aXRsZT1cIlBPIEF2YXRhciBCYXNpY1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYXZhdGFyLWJhc2ljL3NhbXBsZS1wby1hdmF0YXItYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hdmF0YXItYmFzaWMvc2FtcGxlLXBvLWF2YXRhci1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hdmF0YXItYmFzaWMvc2FtcGxlLXBvLWF2YXRhci1iYXNpYy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hdmF0YXItYmFzaWMvc2FtcGxlLXBvLWF2YXRhci1iYXNpYy5jb21wb25lbnQucG8udHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1hdmF0YXItbGFic1wiIHRpdGxlPVwiUE8gQXZhdGFyIExhYnNcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWF2YXRhci1sYWJzL3NhbXBsZS1wby1hdmF0YXItbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWF2YXRhci1sYWJzL3NhbXBsZS1wby1hdmF0YXItbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1hdmF0YXItYnVzaW5lc3MtY2FyZFwiIHRpdGxlPVwiUE8gQXZhdGFyIC0gQnVzaW5lc3MgQ2FyZFwiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYXZhdGFyLWJ1c2luZXNzLWNhcmQvc2FtcGxlLXBvLWF2YXRhci1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYXZhdGFyLWJ1c2luZXNzLWNhcmQvc2FtcGxlLXBvLWF2YXRhci1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tYXZhdGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9BdmF0YXJDb21wb25lbnQgZXh0ZW5kcyBQb0F2YXRhckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNyYykge1xyXG4gICAgICB0aGlzLnNyYyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXJyb3IoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNyYyA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWF2YXRhciBwby1hdmF0YXIte3sgc2l6ZSB9fVwiIFtjbGFzcy5wby1jbGlja2FibGVdPVwiaGFzQ2xpY2tFdmVudFwiIChjbGljayk9XCJjbGljay5lbWl0KClcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic3JjOyB0aGVuIHNvdXJjZUltYWdlOyBlbHNlIGRlZmF1bHRJY29uXCI+PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNzb3VyY2VJbWFnZT5cclxuICA8aW1nIGNsYXNzPVwicG8tYXZhdGFyLWltYWdlXCIgW3NyY109XCJzcmNcIiBhbHQ9XCJcIiBbYXR0ci5sb2FkaW5nXT1cImxvYWRpbmdcIiAoZXJyb3IpPVwib25FcnJvcigpXCIgLz5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEljb24+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1pY29uIHBvLWljb24tdXNlciBwby1hdmF0YXItZGVmYXVsdC1pY29uXCI+PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=