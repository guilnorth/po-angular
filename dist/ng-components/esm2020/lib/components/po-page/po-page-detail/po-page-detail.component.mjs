import { Component } from '@angular/core';
import { PoPageDetailBaseComponent } from './po-page-detail-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-button/po-button.component";
import * as i3 from "../po-page.component";
import * as i4 from "../po-page-content/po-page-content.component";
import * as i5 from "../po-page-header/po-page-header.component";
function PoPageDetailComponent_po_page_header_1_div_1_po_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 6);
    i0.ɵɵlistener("p-click", function PoPageDetailComponent_po_page_header_1_div_1_po_button_1_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r5.back.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-icon", ctx_r2.hasEditOrRemoveFn("icon"))("p-label", ctx_r2.literals.back)("p-kind", ctx_r2.hasEditOrRemoveFn("type"));
} }
function PoPageDetailComponent_po_page_header_1_div_1_po_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 6);
    i0.ɵɵlistener("p-click", function PoPageDetailComponent_po_page_header_1_div_1_po_button_2_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r7.remove.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-icon", ctx_r3.hasEditFn("icon"))("p-label", ctx_r3.literals.remove)("p-kind", ctx_r3.hasEditFn("type"));
} }
function PoPageDetailComponent_po_page_header_1_div_1_po_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 7);
    i0.ɵɵlistener("p-click", function PoPageDetailComponent_po_page_header_1_div_1_po_button_3_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r9.edit.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-label", ctx_r4.literals.edit);
} }
function PoPageDetailComponent_po_page_header_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PoPageDetailComponent_po_page_header_1_div_1_po_button_1_Template, 1, 3, "po-button", 4);
    i0.ɵɵtemplate(2, PoPageDetailComponent_po_page_header_1_div_1_po_button_2_Template, 1, 3, "po-button", 4);
    i0.ɵɵtemplate(3, PoPageDetailComponent_po_page_header_1_div_1_po_button_3_Template, 1, 1, "po-button", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.hasEvent("back"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.hasEvent("remove"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.hasEvent("edit"));
} }
function PoPageDetailComponent_po_page_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-page-header", 1);
    i0.ɵɵtemplate(1, PoPageDetailComponent_po_page_header_1_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-breadcrumb", ctx_r0.breadcrumb)("p-title", ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasAnyAction());
} }
const _c0 = ["*"];
/**
 * @docsExtends PoPageDetailBaseComponent
 *
 * @example
 *
 * <example name="po-page-detail-basic" title="PO Page Detail Basic">
 *  <file name="sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"> </file>
 *  <file name="sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-detail-labs" title="PO Page Detail Labs">
 *  <file name="sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"> </file>
 *  <file name="sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-detail-user" title="PO Page Detail - User">
 *  <file name="sample-po-page-detail-user/sample-po-page-detail-user.component.html"> </file>
 *  <file name="sample-po-page-detail-user/sample-po-page-detail-user.component.ts"> </file>
 * </example>
 */
export class PoPageDetailComponent extends PoPageDetailBaseComponent {
    hasAnyAction() {
        return this.hasEvent('back') || this.hasEvent('edit') || this.hasEvent('remove');
    }
    hasEditFn(property) {
        if (property === 'icon') {
            return this.hasEvent('edit') ? '' : 'po-icon-delete';
        }
        else if (property === 'type') {
            return this.hasEvent('edit') ? 'secondary' : 'primary';
        }
        else {
            return '';
        }
    }
    hasEditOrRemoveFn(property) {
        if (property === 'icon') {
            return this.hasEvent('edit') || this.hasEvent('remove') ? '' : 'po-icon-arrow-left';
        }
        else if (property === 'type') {
            return this.hasEvent('edit') || this.hasEvent('remove') ? 'secondary' : 'primary';
        }
        else {
            return '';
        }
    }
    hasEvent(event) {
        return !!this[event].observers.length;
    }
    hasPageHeader() {
        return !!(this.title || this.hasAnyAction() || (this.breadcrumb && this.breadcrumb.items.length));
    }
}
PoPageDetailComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoPageDetailComponent_BaseFactory; return function PoPageDetailComponent_Factory(t) { return (ɵPoPageDetailComponent_BaseFactory || (ɵPoPageDetailComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoPageDetailComponent)))(t || PoPageDetailComponent); }; }();
PoPageDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDetailComponent, selectors: [["po-page-detail"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[3, "p-breadcrumb", "p-title", 4, "ngIf"], [3, "p-breadcrumb", "p-title"], ["class", "po-page-header-actions", 4, "ngIf"], [1, "po-page-header-actions"], [3, "p-icon", "p-label", "p-kind", "p-click", 4, "ngIf"], ["p-icon", "po-icon-edit", "p-kind", "primary", 3, "p-label", "p-click", 4, "ngIf"], [3, "p-icon", "p-label", "p-kind", "p-click"], ["p-icon", "po-icon-edit", "p-kind", "primary", 3, "p-label", "p-click"]], template: function PoPageDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "po-page");
        i0.ɵɵtemplate(1, PoPageDetailComponent_po_page_header_1_Template, 2, 3, "po-page-header", 0);
        i0.ɵɵelementStart(2, "po-page-content");
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPageHeader());
    } }, dependencies: [i1.NgIf, i2.PoButtonComponent, i3.PoPageComponent, i4.PoPageContentComponent, i5.PoPageHeaderComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDetailComponent, [{
        type: Component,
        args: [{ selector: 'po-page-detail', template: "<po-page>\r\n  <!-- HEADER -->\r\n  <po-page-header *ngIf=\"hasPageHeader()\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n    <!-- OPERATIONS -->\r\n    <div *ngIf=\"hasAnyAction()\" class=\"po-page-header-actions\">\r\n      <po-button\r\n        *ngIf=\"hasEvent('back')\"\r\n        [p-icon]=\"hasEditOrRemoveFn('icon')\"\r\n        [p-label]=\"literals.back\"\r\n        [p-kind]=\"hasEditOrRemoveFn('type')\"\r\n        (p-click)=\"back.emit()\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        *ngIf=\"hasEvent('remove')\"\r\n        [p-icon]=\"hasEditFn('icon')\"\r\n        [p-label]=\"literals.remove\"\r\n        [p-kind]=\"hasEditFn('type')\"\r\n        (p-click)=\"remove.emit()\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        *ngIf=\"hasEvent('edit')\"\r\n        p-icon=\"po-icon-edit\"\r\n        p-kind=\"primary\"\r\n        [p-label]=\"literals.edit\"\r\n        (p-click)=\"edit.emit()\"\r\n      >\r\n      </po-button>\r\n    </div>\r\n  </po-page-header>\r\n\r\n  <!-- CONTENT -->\r\n  <po-page-content>\r\n    <ng-content> </ng-content>\r\n  </po-page-content>\r\n</po-page>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1kZXRhaWwvcG8tcGFnZS1kZXRhaWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1kZXRhaWwvcG8tcGFnZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7O0lDR3RFLG9DQU1DO0lBREMsdU1BQVcsZUFBQSxrQkFBVyxDQUFBLElBQUM7SUFFekIsaUJBQVk7OztJQUxWLHlEQUFvQyxpQ0FBQSw0Q0FBQTs7OztJQU90QyxvQ0FNQztJQURDLHVNQUFXLGVBQUEsb0JBQWEsQ0FBQSxJQUFDO0lBRTNCLGlCQUFZOzs7SUFMVixpREFBNEIsbUNBQUEsb0NBQUE7Ozs7SUFPOUIsb0NBTUM7SUFEQyx3TUFBVyxlQUFBLGtCQUFXLENBQUEsSUFBQztJQUV6QixpQkFBWTs7O0lBSFYsOENBQXlCOzs7SUF2QjdCLDhCQUEyRDtJQUN6RCx5R0FPWTtJQUVaLHlHQU9ZO0lBRVoseUdBT1k7SUFDZCxpQkFBTTs7O0lBekJELGVBQXNCO0lBQXRCLDhDQUFzQjtJQVN0QixlQUF3QjtJQUF4QixnREFBd0I7SUFTeEIsZUFBc0I7SUFBdEIsOENBQXNCOzs7SUF0QjdCLHlDQUFzRjtJQUVwRix1RkEyQk07SUFDUixpQkFBaUI7OztJQTlCdUIsZ0RBQTJCLHlCQUFBO0lBRTNELGVBQW9CO0lBQXBCLDRDQUFvQjs7O0FEQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBS0gsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHlCQUF5QjtJQUNsRSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7U0FDdEQ7YUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxRQUFnQjtRQUNoQyxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7U0FDckY7YUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ25GO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDOztpUUEvQlUscUJBQXFCLFNBQXJCLHFCQUFxQjt3RUFBckIscUJBQXFCOztRQzVCbEMsK0JBQVM7UUFFUCw0RkE4QmlCO1FBR2pCLHVDQUFpQjtRQUNmLGtCQUEwQjtRQUM1QixpQkFBa0IsRUFBQTs7UUFuQ0QsZUFBcUI7UUFBckIsMENBQXFCOzt1RkQwQjNCLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNFLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRGV0YWlsQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1kZXRhaWwtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VEZXRhaWxCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWRldGFpbC1iYXNpY1wiIHRpdGxlPVwiUE8gUGFnZSBEZXRhaWwgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZXRhaWwtYmFzaWMvc2FtcGxlLXBvLXBhZ2UtZGV0YWlsLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZXRhaWwtYmFzaWMvc2FtcGxlLXBvLXBhZ2UtZGV0YWlsLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtZGV0YWlsLWxhYnNcIiB0aXRsZT1cIlBPIFBhZ2UgRGV0YWlsIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZXRhaWwtbGFicy9zYW1wbGUtcG8tcGFnZS1kZXRhaWwtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZGV0YWlsLWxhYnMvc2FtcGxlLXBvLXBhZ2UtZGV0YWlsLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1kZXRhaWwtdXNlclwiIHRpdGxlPVwiUE8gUGFnZSBEZXRhaWwgLSBVc2VyXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZGV0YWlsLXVzZXIvc2FtcGxlLXBvLXBhZ2UtZGV0YWlsLXVzZXIuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWRldGFpbC11c2VyL3NhbXBsZS1wby1wYWdlLWRldGFpbC11c2VyLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wYWdlLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZURldGFpbENvbXBvbmVudCBleHRlbmRzIFBvUGFnZURldGFpbEJhc2VDb21wb25lbnQge1xyXG4gIGhhc0FueUFjdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmhhc0V2ZW50KCdiYWNrJykgfHwgdGhpcy5oYXNFdmVudCgnZWRpdCcpIHx8IHRoaXMuaGFzRXZlbnQoJ3JlbW92ZScpO1xyXG4gIH1cclxuXHJcbiAgaGFzRWRpdEZuKHByb3BlcnR5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHByb3BlcnR5ID09PSAnaWNvbicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFzRXZlbnQoJ2VkaXQnKSA/ICcnIDogJ3BvLWljb24tZGVsZXRlJztcclxuICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICd0eXBlJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYXNFdmVudCgnZWRpdCcpID8gJ3NlY29uZGFyeScgOiAncHJpbWFyeSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXNFZGl0T3JSZW1vdmVGbihwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2ljb24nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhc0V2ZW50KCdlZGl0JykgfHwgdGhpcy5oYXNFdmVudCgncmVtb3ZlJykgPyAnJyA6ICdwby1pY29uLWFycm93LWxlZnQnO1xyXG4gICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ3R5cGUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhc0V2ZW50KCdlZGl0JykgfHwgdGhpcy5oYXNFdmVudCgncmVtb3ZlJykgPyAnc2Vjb25kYXJ5JyA6ICdwcmltYXJ5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc0V2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIXRoaXNbZXZlbnRdLm9ic2VydmVycy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBoYXNQYWdlSGVhZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMudGl0bGUgfHwgdGhpcy5oYXNBbnlBY3Rpb24oKSB8fCAodGhpcy5icmVhZGNydW1iICYmIHRoaXMuYnJlYWRjcnVtYi5pdGVtcy5sZW5ndGgpKTtcclxuICB9XHJcbn1cclxuIiwiPHBvLXBhZ2U+XHJcbiAgPCEtLSBIRUFERVIgLS0+XHJcbiAgPHBvLXBhZ2UtaGVhZGVyICpuZ0lmPVwiaGFzUGFnZUhlYWRlcigpXCIgW3AtYnJlYWRjcnVtYl09XCJicmVhZGNydW1iXCIgW3AtdGl0bGVdPVwidGl0bGVcIj5cclxuICAgIDwhLS0gT1BFUkFUSU9OUyAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJoYXNBbnlBY3Rpb24oKVwiIGNsYXNzPVwicG8tcGFnZS1oZWFkZXItYWN0aW9uc1wiPlxyXG4gICAgICA8cG8tYnV0dG9uXHJcbiAgICAgICAgKm5nSWY9XCJoYXNFdmVudCgnYmFjaycpXCJcclxuICAgICAgICBbcC1pY29uXT1cImhhc0VkaXRPclJlbW92ZUZuKCdpY29uJylcIlxyXG4gICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLmJhY2tcIlxyXG4gICAgICAgIFtwLWtpbmRdPVwiaGFzRWRpdE9yUmVtb3ZlRm4oJ3R5cGUnKVwiXHJcbiAgICAgICAgKHAtY2xpY2spPVwiYmFjay5lbWl0KClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwiaGFzRXZlbnQoJ3JlbW92ZScpXCJcclxuICAgICAgICBbcC1pY29uXT1cImhhc0VkaXRGbignaWNvbicpXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5yZW1vdmVcIlxyXG4gICAgICAgIFtwLWtpbmRdPVwiaGFzRWRpdEZuKCd0eXBlJylcIlxyXG4gICAgICAgIChwLWNsaWNrKT1cInJlbW92ZS5lbWl0KClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwiaGFzRXZlbnQoJ2VkaXQnKVwiXHJcbiAgICAgICAgcC1pY29uPVwicG8taWNvbi1lZGl0XCJcclxuICAgICAgICBwLWtpbmQ9XCJwcmltYXJ5XCJcclxuICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5lZGl0XCJcclxuICAgICAgICAocC1jbGljayk9XCJlZGl0LmVtaXQoKVwiXHJcbiAgICAgID5cclxuICAgICAgPC9wby1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L3BvLXBhZ2UtaGVhZGVyPlxyXG5cclxuICA8IS0tIENPTlRFTlQgLS0+XHJcbiAgPHBvLXBhZ2UtY29udGVudD5cclxuICAgIDxuZy1jb250ZW50PiA8L25nLWNvbnRlbnQ+XHJcbiAgPC9wby1wYWdlLWNvbnRlbnQ+XHJcbjwvcG8tcGFnZT5cclxuIl19