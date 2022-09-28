import { Component } from '@angular/core';
import { PoPageEditBaseComponent } from './po-page-edit-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-button/po-button.component";
import * as i3 from "../po-page.component";
import * as i4 from "../po-page-content/po-page-content.component";
import * as i5 from "../po-page-header/po-page-header.component";
function PoPageEditComponent_po_page_header_1_div_1_po_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 7);
    i0.ɵɵlistener("p-click", function PoPageEditComponent_po_page_header_1_div_1_po_button_1_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r5.cancel.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-icon", ctx_r2.getIcon("cancel"))("p-label", ctx_r2.literals.cancel)("p-kind", ctx_r2.getType("cancel"));
} }
function PoPageEditComponent_po_page_header_1_div_1_po_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 8);
    i0.ɵɵlistener("p-click", function PoPageEditComponent_po_page_header_1_div_1_po_button_2_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r7.saveNew.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-disabled", ctx_r3.disableSubmit)("p-icon", ctx_r3.getIcon("saveNew"))("p-label", ctx_r3.literals.saveNew)("p-kind", ctx_r3.getType("saveNew"));
} }
function PoPageEditComponent_po_page_header_1_div_1_po_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 9);
    i0.ɵɵlistener("p-click", function PoPageEditComponent_po_page_header_1_div_1_po_button_3_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r9.save.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-disabled", ctx_r4.disableSubmit)("p-label", ctx_r4.literals.save);
} }
function PoPageEditComponent_po_page_header_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PoPageEditComponent_po_page_header_1_div_1_po_button_1_Template, 1, 3, "po-button", 4);
    i0.ɵɵtemplate(2, PoPageEditComponent_po_page_header_1_div_1_po_button_2_Template, 1, 4, "po-button", 5);
    i0.ɵɵtemplate(3, PoPageEditComponent_po_page_header_1_div_1_po_button_3_Template, 1, 2, "po-button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.hasEvent("cancel"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.hasEvent("saveNew"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.hasEvent("save"));
} }
function PoPageEditComponent_po_page_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-page-header", 1);
    i0.ɵɵtemplate(1, PoPageEditComponent_po_page_header_1_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-breadcrumb", ctx_r0.breadcrumb)("p-title", ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasAnyAction());
} }
const _c0 = ["*"];
/**
 * @docsExtends PoPageEditBaseComponent
 *
 * @example
 *
 * <example name="po-page-edit-basic" title="PO Page Edit Basic">
 *  <file name="sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"> </file>
 *  <file name="sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-edit-labs" title="PO Page Edit Labs">
 *  <file name="sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"> </file>
 *  <file name="sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-edit-user" title="PO Page Edit - User">
 *  <file name="sample-po-page-edit-user/sample-po-page-edit-user.component.html"> </file>
 *  <file name="sample-po-page-edit-user/sample-po-page-edit-user.component.ts"> </file>
 * </example>
 */
export class PoPageEditComponent extends PoPageEditBaseComponent {
    getIcon(icon) {
        if (icon === 'cancel') {
            return this.isPrimaryAction('cancel') ? 'po-icon-close' : '';
        }
        if (icon === 'saveNew') {
            return this.isPrimaryAction('saveNew') ? 'po-icon-ok' : '';
        }
        return '';
    }
    getType(type) {
        const isCancelPrimaryAction = type === 'cancel' && this.isPrimaryAction('cancel');
        const isSaveNewPrimaryAction = type === 'saveNew' && this.isPrimaryAction('saveNew');
        return isCancelPrimaryAction || isSaveNewPrimaryAction ? 'primary' : 'secondary';
    }
    hasAnyAction() {
        return this.hasEvent('cancel') || this.hasEvent('saveNew') || this.hasEvent('save');
    }
    hasPageHeader() {
        return !!(this.title || this.hasAnyAction() || (this.breadcrumb && this.breadcrumb.items.length));
    }
    hasEvent(event) {
        return !!this[event].observers.length;
    }
    isPrimaryAction(action) {
        const hasSaveAction = this.hasEvent('save');
        if (action === 'saveNew') {
            return !hasSaveAction;
        }
        if (action === 'cancel') {
            const hasSaveNewAction = this.hasEvent('saveNew');
            return !hasSaveNewAction && !hasSaveAction;
        }
        return false;
    }
}
PoPageEditComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoPageEditComponent_BaseFactory; return function PoPageEditComponent_Factory(t) { return (ɵPoPageEditComponent_BaseFactory || (ɵPoPageEditComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoPageEditComponent)))(t || PoPageEditComponent); }; }();
PoPageEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageEditComponent, selectors: [["po-page-edit"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[3, "p-breadcrumb", "p-title", 4, "ngIf"], [3, "p-breadcrumb", "p-title"], ["class", "po-page-header-actions", 4, "ngIf"], [1, "po-page-header-actions"], [3, "p-icon", "p-label", "p-kind", "p-click", 4, "ngIf"], [3, "p-disabled", "p-icon", "p-label", "p-kind", "p-click", 4, "ngIf"], ["p-icon", "po-icon-ok", "p-kind", "primary", 3, "p-disabled", "p-label", "p-click", 4, "ngIf"], [3, "p-icon", "p-label", "p-kind", "p-click"], [3, "p-disabled", "p-icon", "p-label", "p-kind", "p-click"], ["p-icon", "po-icon-ok", "p-kind", "primary", 3, "p-disabled", "p-label", "p-click"]], template: function PoPageEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "po-page");
        i0.ɵɵtemplate(1, PoPageEditComponent_po_page_header_1_Template, 2, 3, "po-page-header", 0);
        i0.ɵɵelementStart(2, "po-page-content");
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPageHeader());
    } }, dependencies: [i1.NgIf, i2.PoButtonComponent, i3.PoPageComponent, i4.PoPageContentComponent, i5.PoPageHeaderComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageEditComponent, [{
        type: Component,
        args: [{ selector: 'po-page-edit', template: "<po-page>\r\n  <!-- HEADER -->\r\n  <po-page-header *ngIf=\"hasPageHeader()\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n    <!-- OPERATIONS -->\r\n    <div *ngIf=\"hasAnyAction()\" class=\"po-page-header-actions\">\r\n      <po-button\r\n        *ngIf=\"hasEvent('cancel')\"\r\n        [p-icon]=\"getIcon('cancel')\"\r\n        [p-label]=\"literals.cancel\"\r\n        [p-kind]=\"getType('cancel')\"\r\n        (p-click)=\"cancel.emit()\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        *ngIf=\"hasEvent('saveNew')\"\r\n        [p-disabled]=\"disableSubmit\"\r\n        [p-icon]=\"getIcon('saveNew')\"\r\n        [p-label]=\"literals.saveNew\"\r\n        [p-kind]=\"getType('saveNew')\"\r\n        (p-click)=\"saveNew.emit()\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        *ngIf=\"hasEvent('save')\"\r\n        p-icon=\"po-icon-ok\"\r\n        p-kind=\"primary\"\r\n        [p-disabled]=\"disableSubmit\"\r\n        [p-label]=\"literals.save\"\r\n        (p-click)=\"save.emit()\"\r\n      >\r\n      </po-button>\r\n    </div>\r\n  </po-page-header>\r\n\r\n  <!-- CONTENT -->\r\n  <po-page-content>\r\n    <ng-content> </ng-content>\r\n  </po-page-content>\r\n</po-page>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlL3BvLXBhZ2UtZWRpdC9wby1wYWdlLWVkaXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1lZGl0L3BvLXBhZ2UtZWRpdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7SUNHbEUsb0NBTUM7SUFEQyxxTUFBVyxlQUFBLG9CQUFhLENBQUEsSUFBQztJQUUzQixpQkFBWTs7O0lBTFYsaURBQTRCLG1DQUFBLG9DQUFBOzs7O0lBTzlCLG9DQU9DO0lBREMscU1BQVcsZUFBQSxxQkFBYyxDQUFBLElBQUM7SUFFNUIsaUJBQVk7OztJQU5WLGlEQUE0QixxQ0FBQSxvQ0FBQSxxQ0FBQTs7OztJQVE5QixvQ0FPQztJQURDLHNNQUFXLGVBQUEsa0JBQVcsQ0FBQSxJQUFDO0lBRXpCLGlCQUFZOzs7SUFKVixpREFBNEIsaUNBQUE7OztJQXhCaEMsOEJBQTJEO0lBQ3pELHVHQU9ZO0lBRVosdUdBUVk7SUFFWix1R0FRWTtJQUNkLGlCQUFNOzs7SUEzQkQsZUFBd0I7SUFBeEIsZ0RBQXdCO0lBU3hCLGVBQXlCO0lBQXpCLGlEQUF5QjtJQVV6QixlQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQXZCN0IseUNBQXNGO0lBRXBGLHFGQTZCTTtJQUNSLGlCQUFpQjs7O0lBaEN1QixnREFBMkIseUJBQUE7SUFFM0QsZUFBb0I7SUFBcEIsNENBQW9COzs7QURBOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFLSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsdUJBQXVCO0lBQzlELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQzlEO1FBRUQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDNUQ7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixNQUFNLHFCQUFxQixHQUFHLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRixNQUFNLHNCQUFzQixHQUFHLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRixPQUFPLHFCQUFxQixJQUFJLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNuRixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQWM7UUFDcEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUN2QjtRQUVELElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUN2QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbEQsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzVDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt1UEE5Q1UsbUJBQW1CLFNBQW5CLG1CQUFtQjtzRUFBbkIsbUJBQW1COztRQzVCaEMsK0JBQVM7UUFFUCwwRkFnQ2lCO1FBR2pCLHVDQUFpQjtRQUNmLGtCQUEwQjtRQUM1QixpQkFBa0IsRUFBQTs7UUFyQ0QsZUFBcUI7UUFBckIsMENBQXFCOzt1RkQwQjNCLG1CQUFtQjtjQUovQixTQUFTOzJCQUNFLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUVkaXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWVkaXQtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VFZGl0QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1lZGl0LWJhc2ljXCIgdGl0bGU9XCJQTyBQYWdlIEVkaXQgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1lZGl0LWJhc2ljL3NhbXBsZS1wby1wYWdlLWVkaXQtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWVkaXQtYmFzaWMvc2FtcGxlLXBvLXBhZ2UtZWRpdC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWVkaXQtbGFic1wiIHRpdGxlPVwiUE8gUGFnZSBFZGl0IExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1lZGl0LWxhYnMvc2FtcGxlLXBvLXBhZ2UtZWRpdC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1lZGl0LWxhYnMvc2FtcGxlLXBvLXBhZ2UtZWRpdC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtZWRpdC11c2VyXCIgdGl0bGU9XCJQTyBQYWdlIEVkaXQgLSBVc2VyXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZWRpdC11c2VyL3NhbXBsZS1wby1wYWdlLWVkaXQtdXNlci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZWRpdC11c2VyL3NhbXBsZS1wby1wYWdlLWVkaXQtdXNlci5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2UtZWRpdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtZWRpdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUVkaXRDb21wb25lbnQgZXh0ZW5kcyBQb1BhZ2VFZGl0QmFzZUNvbXBvbmVudCB7XHJcbiAgZ2V0SWNvbihpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGljb24gPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzUHJpbWFyeUFjdGlvbignY2FuY2VsJykgPyAncG8taWNvbi1jbG9zZScgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaWNvbiA9PT0gJ3NhdmVOZXcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzUHJpbWFyeUFjdGlvbignc2F2ZU5ldycpID8gJ3BvLWljb24tb2snIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaXNDYW5jZWxQcmltYXJ5QWN0aW9uID0gdHlwZSA9PT0gJ2NhbmNlbCcgJiYgdGhpcy5pc1ByaW1hcnlBY3Rpb24oJ2NhbmNlbCcpO1xyXG4gICAgY29uc3QgaXNTYXZlTmV3UHJpbWFyeUFjdGlvbiA9IHR5cGUgPT09ICdzYXZlTmV3JyAmJiB0aGlzLmlzUHJpbWFyeUFjdGlvbignc2F2ZU5ldycpO1xyXG5cclxuICAgIHJldHVybiBpc0NhbmNlbFByaW1hcnlBY3Rpb24gfHwgaXNTYXZlTmV3UHJpbWFyeUFjdGlvbiA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xyXG4gIH1cclxuXHJcbiAgaGFzQW55QWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzRXZlbnQoJ2NhbmNlbCcpIHx8IHRoaXMuaGFzRXZlbnQoJ3NhdmVOZXcnKSB8fCB0aGlzLmhhc0V2ZW50KCdzYXZlJyk7XHJcbiAgfVxyXG5cclxuICBoYXNQYWdlSGVhZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMudGl0bGUgfHwgdGhpcy5oYXNBbnlBY3Rpb24oKSB8fCAodGhpcy5icmVhZGNydW1iICYmIHRoaXMuYnJlYWRjcnVtYi5pdGVtcy5sZW5ndGgpKTtcclxuICB9XHJcblxyXG4gIGhhc0V2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIXRoaXNbZXZlbnRdLm9ic2VydmVycy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJpbWFyeUFjdGlvbihhY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaGFzU2F2ZUFjdGlvbiA9IHRoaXMuaGFzRXZlbnQoJ3NhdmUnKTtcclxuXHJcbiAgICBpZiAoYWN0aW9uID09PSAnc2F2ZU5ldycpIHtcclxuICAgICAgcmV0dXJuICFoYXNTYXZlQWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24gPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgIGNvbnN0IGhhc1NhdmVOZXdBY3Rpb24gPSB0aGlzLmhhc0V2ZW50KCdzYXZlTmV3Jyk7XHJcblxyXG4gICAgICByZXR1cm4gIWhhc1NhdmVOZXdBY3Rpb24gJiYgIWhhc1NhdmVBY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tcGFnZT5cclxuICA8IS0tIEhFQURFUiAtLT5cclxuICA8cG8tcGFnZS1oZWFkZXIgKm5nSWY9XCJoYXNQYWdlSGVhZGVyKClcIiBbcC1icmVhZGNydW1iXT1cImJyZWFkY3J1bWJcIiBbcC10aXRsZV09XCJ0aXRsZVwiPlxyXG4gICAgPCEtLSBPUEVSQVRJT05TIC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cImhhc0FueUFjdGlvbigpXCIgY2xhc3M9XCJwby1wYWdlLWhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgIDxwby1idXR0b25cclxuICAgICAgICAqbmdJZj1cImhhc0V2ZW50KCdjYW5jZWwnKVwiXHJcbiAgICAgICAgW3AtaWNvbl09XCJnZXRJY29uKCdjYW5jZWwnKVwiXHJcbiAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuY2FuY2VsXCJcclxuICAgICAgICBbcC1raW5kXT1cImdldFR5cGUoJ2NhbmNlbCcpXCJcclxuICAgICAgICAocC1jbGljayk9XCJjYW5jZWwuZW1pdCgpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWJ1dHRvbj5cclxuXHJcbiAgICAgIDxwby1idXR0b25cclxuICAgICAgICAqbmdJZj1cImhhc0V2ZW50KCdzYXZlTmV3JylcIlxyXG4gICAgICAgIFtwLWRpc2FibGVkXT1cImRpc2FibGVTdWJtaXRcIlxyXG4gICAgICAgIFtwLWljb25dPVwiZ2V0SWNvbignc2F2ZU5ldycpXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5zYXZlTmV3XCJcclxuICAgICAgICBbcC1raW5kXT1cImdldFR5cGUoJ3NhdmVOZXcnKVwiXHJcbiAgICAgICAgKHAtY2xpY2spPVwic2F2ZU5ldy5lbWl0KClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwiaGFzRXZlbnQoJ3NhdmUnKVwiXHJcbiAgICAgICAgcC1pY29uPVwicG8taWNvbi1va1wiXHJcbiAgICAgICAgcC1raW5kPVwicHJpbWFyeVwiXHJcbiAgICAgICAgW3AtZGlzYWJsZWRdPVwiZGlzYWJsZVN1Ym1pdFwiXHJcbiAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuc2F2ZVwiXHJcbiAgICAgICAgKHAtY2xpY2spPVwic2F2ZS5lbWl0KClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wby1wYWdlLWhlYWRlcj5cclxuXHJcbiAgPCEtLSBDT05URU5UIC0tPlxyXG4gIDxwby1wYWdlLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudD4gPC9uZy1jb250ZW50PlxyXG4gIDwvcG8tcGFnZS1jb250ZW50PlxyXG48L3BvLXBhZ2U+XHJcbiJdfQ==