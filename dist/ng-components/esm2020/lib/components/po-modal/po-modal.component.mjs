import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { PoModalBaseComponent } from './po-modal-base.component';
import { PoModalFooterComponent } from './po-modal-footer/po-modal-footer.component';
import { uuid } from '../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-active-overlay/po-active-overlay.service";
import * as i2 from "../../services/po-language/po-language.service";
import * as i3 from "@angular/common";
import * as i4 from "../po-button/po-button.component";
import * as i5 from "./po-modal-footer/po-modal-footer.component";
const _c0 = ["modalContent"];
function PoModalComponent_div_0_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵlistener("click", function PoModalComponent_div_0_a_9_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.close(true)); });
    i0.ɵɵelement(1, "span", 14);
    i0.ɵɵelementEnd();
} }
function PoModalComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function PoModalComponent_div_0_ng_template_13_po_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 17);
    i0.ɵɵlistener("p-click", function PoModalComponent_div_0_ng_template_13_po_button_1_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r9.secondaryAction.action()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-danger", ctx_r8.getSecondaryActionButtonDanger())("p-disabled", ctx_r8.secondaryAction.disabled)("p-label", ctx_r8.secondaryAction.label)("p-loading", ctx_r8.secondaryAction.loading);
} }
function PoModalComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-modal-footer");
    i0.ɵɵtemplate(1, PoModalComponent_div_0_ng_template_13_po_button_1_Template, 1, 4, "po-button", 15);
    i0.ɵɵelementStart(2, "po-button", 16);
    i0.ɵɵlistener("p-click", function PoModalComponent_div_0_ng_template_13_Template_po_button_p_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.primaryAction.action()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.secondaryAction);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-danger", ctx_r5.primaryAction.danger)("p-disabled", ctx_r5.primaryAction.disabled)("p-label", ctx_r5.primaryAction.label)("p-loading", ctx_r5.primaryAction.loading);
} }
function PoModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("keydown.esc", function PoModalComponent_div_0_Template_div_keydown_esc_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.closeModalOnEscapeKey($event)); });
    i0.ɵɵelementStart(1, "div", 2)(2, "div", 3);
    i0.ɵɵlistener("mousedown", function PoModalComponent_div_0_Template_div_mousedown_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onClickOut($event)); });
    i0.ɵɵelementStart(3, "div", 4)(4, "div", 5, 6)(6, "div", 7)(7, "div", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, PoModalComponent_div_0_a_9_Template, 2, 0, "a", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵprojection(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, PoModalComponent_div_0_ng_container_12_Template, 2, 0, "ng-container", 11);
    i0.ɵɵtemplate(13, PoModalComponent_div_0_ng_template_13_Template, 3, 5, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(14);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("po-modal-content po-modal-", ctx_r0.size, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.hideClose);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.modalFooter)("ngIfElse", _r4);
} }
const _c1 = ["*", [["po-modal-footer"]]];
const _c2 = ["*", "po-modal-footer"];
/**
 * @docsExtends PoModalBaseComponent
 *
 * @example
 *
 * <example name="po-modal-basic" title="PO Modal Basic">
 *  <file name="sample-po-modal-basic/sample-po-modal-basic.component.html"> </file>
 *  <file name="sample-po-modal-basic/sample-po-modal-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-modal-labs" title="PO Modal Labs">
 *  <file name="sample-po-modal-labs/sample-po-modal-labs.component.html"> </file>
 *  <file name="sample-po-modal-labs/sample-po-modal-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-modal-fruits-salad" title="PO Modal - Fruits Salad">
 *  <file name="sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"> </file>
 *  <file name="sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"> </file>
 * </example>
 */
export class PoModalComponent extends PoModalBaseComponent {
    constructor(poActiveOverlayService, poLanguageService) {
        super(poLanguageService);
        this.poActiveOverlayService = poActiveOverlayService;
        this.focusableElements = 'input, select, textarea, button:not([disabled]), a';
        this.id = uuid();
    }
    close(xClosed = false) {
        this.poActiveOverlayService.activeOverlay.pop();
        super.close(xClosed);
        this.removeEventListeners();
        if (this.sourceElement) {
            this.sourceElement.focus();
        }
    }
    closeModalOnEscapeKey(event) {
        if (!this.hideClose) {
            event.preventDefault();
            event.stopPropagation();
            this.close();
        }
    }
    getSecondaryActionButtonDanger() {
        return this.secondaryAction && this.secondaryAction.danger && !this.primaryAction.danger ? 'true' : 'false';
    }
    onClickOut(event) {
        if (this.clickOut && !this.modalContent.nativeElement.contains(event.target)) {
            this.close();
        }
    }
    open() {
        this.sourceElement = document.activeElement;
        super.open();
        this.handleFocus();
    }
    handleFocus() {
        this.poActiveOverlayService.activeOverlay.push(this.id);
        setTimeout(() => {
            if (this.modalContent) {
                this.initFocus();
                document.addEventListener('focus', this.focusFunction, true);
            }
        });
    }
    initFocus() {
        this.focusFunction = (event) => {
            const modalElement = this.modalContent.nativeElement;
            if (!modalElement.contains(event.target) &&
                this.poActiveOverlayService.activeOverlay[this.poActiveOverlayService.activeOverlay.length - 1] === this.id) {
                event.stopPropagation();
                this.firstElement.focus();
            }
        };
        this.setFirstElement();
        if (this.hideClose) {
            this.firstElement.focus();
        }
        else {
            const firstFieldElement = this.modalContent.nativeElement.querySelectorAll(this.focusableElements)[1] || this.modalContent.nativeElement;
            firstFieldElement.focus();
        }
    }
    removeEventListeners() {
        document.removeEventListener('focus', this.focusFunction, true);
    }
    setFirstElement() {
        this.firstElement =
            this.modalContent.nativeElement.querySelector(this.focusableElements) || this.modalContent.nativeElement;
    }
}
PoModalComponent.ɵfac = function PoModalComponent_Factory(t) { return new (t || PoModalComponent)(i0.ɵɵdirectiveInject(i1.PoActiveOverlayService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalComponent, selectors: [["po-modal"]], contentQueries: function PoModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoModalFooterComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
    } }, viewQuery: function PoModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["class", "po-modal", "tabindex", "0", 3, "keydown.esc", 4, "ngIf"], ["tabindex", "0", 1, "po-modal", 3, "keydown.esc"], [1, "po-modal-overlay"], [1, "po-modal-container", "po-pb-2", "po-pt-2", 3, "mousedown"], [1, "po-modal-vertical-align"], ["tabindex", "-1"], ["modalContent", ""], [1, "po-modal-header"], [1, "po-modal-title", "po-text-ellipsis"], ["class", "po-modal-header-close-button", "tabindex", "0", 3, "click", 4, "ngIf"], [1, "po-modal-body"], [4, "ngIf", "ngIfElse"], ["defaultModalFooterTemplate", ""], ["tabindex", "0", 1, "po-modal-header-close-button", 3, "click"], [1, "po-icon", "po-icon-close"], ["p-kind", "secondary", 3, "p-danger", "p-disabled", "p-label", "p-loading", "p-click", 4, "ngIf"], ["p-kind", "primary", 1, "po-button-modal-first-action", 3, "p-danger", "p-disabled", "p-label", "p-loading", "p-click"], ["p-kind", "secondary", 3, "p-danger", "p-disabled", "p-label", "p-loading", "p-click"]], template: function PoModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, PoModalComponent_div_0_Template, 15, 7, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isHidden);
    } }, dependencies: [i3.NgIf, i4.PoButtonComponent, i5.PoModalFooterComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalComponent, [{
        type: Component,
        args: [{ selector: 'po-modal', template: "<div *ngIf=\"!isHidden\" class=\"po-modal\" tabindex=\"0\" (keydown.esc)=\"closeModalOnEscapeKey($event)\">\r\n  <div class=\"po-modal-overlay\">\r\n    <div class=\"po-modal-container po-pb-2 po-pt-2\" (mousedown)=\"onClickOut($event)\">\r\n      <div class=\"po-modal-vertical-align\">\r\n        <div #modalContent class=\"po-modal-content po-modal-{{ size }}\" tabindex=\"-1\">\r\n          <div class=\"po-modal-header\">\r\n            <div class=\"po-modal-title po-text-ellipsis\">\r\n              {{ title }}\r\n            </div>\r\n\r\n            <a *ngIf=\"!hideClose\" class=\"po-modal-header-close-button\" tabindex=\"0\" (click)=\"close(true)\">\r\n              <span class=\"po-icon po-icon-close\"></span>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"po-modal-body\">\r\n            <ng-content></ng-content>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"modalFooter; else defaultModalFooterTemplate\">\r\n            <ng-content select=\"po-modal-footer\"></ng-content>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultModalFooterTemplate>\r\n            <po-modal-footer>\r\n              <po-button\r\n                *ngIf=\"secondaryAction\"\r\n                [p-danger]=\"getSecondaryActionButtonDanger()\"\r\n                [p-disabled]=\"secondaryAction.disabled\"\r\n                [p-label]=\"secondaryAction.label\"\r\n                [p-loading]=\"secondaryAction.loading\"\r\n                p-kind=\"secondary\"\r\n                (p-click)=\"secondaryAction.action()\"\r\n              >\r\n              </po-button>\r\n\r\n              <po-button\r\n                class=\"po-button-modal-first-action\"\r\n                [p-danger]=\"primaryAction.danger\"\r\n                [p-disabled]=\"primaryAction.disabled\"\r\n                [p-label]=\"primaryAction.label\"\r\n                [p-loading]=\"primaryAction.loading\"\r\n                p-kind=\"primary\"\r\n                (p-click)=\"primaryAction.action()\"\r\n              >\r\n              </po-button>\r\n            </po-modal-footer>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoActiveOverlayService }, { type: i2.PoLanguageService }]; }, { modalContent: [{
            type: ViewChild,
            args: ['modalContent', { read: ElementRef }]
        }], modalFooter: [{
            type: ContentChild,
            args: [PoModalFooterComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1vZGFsL3BvLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tb2RhbC9wby1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7OztJQ001Qiw2QkFBOEY7SUFBdEIsNkpBQVMsZUFBQSxhQUFNLElBQUksQ0FBQyxDQUFBLElBQUM7SUFDM0YsMkJBQTJDO0lBQzdDLGlCQUFJOzs7SUFPTiw2QkFBbUU7SUFDakUscUJBQWtEO0lBQ3BELDBCQUFlOzs7O0lBSVgscUNBUUM7SUFEQyxpTUFBVyxlQUFBLCtCQUF3QixDQUFBLElBQUM7SUFFdEMsaUJBQVk7OztJQVBWLGtFQUE2QywrQ0FBQSx5Q0FBQSw2Q0FBQTs7OztJQUhqRCx1Q0FBaUI7SUFDZixtR0FTWTtJQUVaLHFDQVFDO0lBREMsc0xBQVcsZUFBQSw4QkFBc0IsQ0FBQSxJQUFDO0lBRXBDLGlCQUFZLEVBQUE7OztJQW5CVCxlQUFxQjtJQUFyQiw2Q0FBcUI7SUFZdEIsZUFBaUM7SUFBakMsc0RBQWlDLDZDQUFBLHVDQUFBLDJDQUFBOzs7O0lBdENqRCw4QkFBbUc7SUFBOUMsOEtBQWUsZUFBQSxxQ0FBNkIsQ0FBQSxJQUFDO0lBQ2hHLDhC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Z0JBQWdCO2NBSjVCLFNBQVM7MkJBQ0UsVUFBVTt5R0FJNkIsWUFBWTtrQkFBNUQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ1QsV0FBVztrQkFBaEQsWUFBWTttQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb01vZGFsQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tbW9kYWwtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb01vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1tb2RhbC1mb290ZXIvcG8tbW9kYWwtZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvQWN0aXZlT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1hY3RpdmUtb3ZlcmxheS9wby1hY3RpdmUtb3ZlcmxheS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Nb2RhbEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW1vZGFsLWJhc2ljXCIgdGl0bGU9XCJQTyBNb2RhbCBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tb2RhbC1iYXNpYy9zYW1wbGUtcG8tbW9kYWwtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tb2RhbC1iYXNpYy9zYW1wbGUtcG8tbW9kYWwtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbW9kYWwtbGFic1wiIHRpdGxlPVwiUE8gTW9kYWwgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tb2RhbC1sYWJzL3NhbXBsZS1wby1tb2RhbC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbW9kYWwtbGFicy9zYW1wbGUtcG8tbW9kYWwtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1tb2RhbC1mcnVpdHMtc2FsYWRcIiB0aXRsZT1cIlBPIE1vZGFsIC0gRnJ1aXRzIFNhbGFkXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1vZGFsLWZydWl0cy1zYWxhZC9zYW1wbGUtcG8tbW9kYWwtZnJ1aXRzLXNhbGFkLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbW9kYWwtZnJ1aXRzLXNhbGFkL3NhbXBsZS1wby1tb2RhbC1mcnVpdHMtc2FsYWQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tb2RhbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBQb01vZGFsQmFzZUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIG1vZGFsQ29udGVudDogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkKFBvTW9kYWxGb290ZXJDb21wb25lbnQpIG1vZGFsRm9vdGVyOiBQb01vZGFsRm9vdGVyQ29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIGZpcnN0RWxlbWVudDtcclxuICBwcml2YXRlIGZvY3VzRnVuY3Rpb247XHJcbiAgcHJpdmF0ZSBmb2N1c2FibGVFbGVtZW50cyA9ICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgYSc7XHJcbiAgcHJpdmF0ZSBpZDogc3RyaW5nID0gdXVpZCgpO1xyXG4gIHByaXZhdGUgc291cmNlRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlOiBQb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlLCBwb0xhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKHBvTGFuZ3VhZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHhDbG9zZWQgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5wb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlLmFjdGl2ZU92ZXJsYXkucG9wKCk7XHJcblxyXG4gICAgc3VwZXIuY2xvc2UoeENsb3NlZCk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zb3VyY2VFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsT25Fc2NhcGVLZXkoZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oaWRlQ2xvc2UpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlY29uZGFyeUFjdGlvbkJ1dHRvbkRhbmdlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnNlY29uZGFyeUFjdGlvbiAmJiB0aGlzLnNlY29uZGFyeUFjdGlvbi5kYW5nZXIgJiYgIXRoaXMucHJpbWFyeUFjdGlvbi5kYW5nZXIgPyAndHJ1ZScgOiAnZmFsc2UnO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dChldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2xpY2tPdXQgJiYgIXRoaXMubW9kYWxDb250ZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5zb3VyY2VFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuaGFuZGxlRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRm9jdXMoKTogYW55IHtcclxuICAgIHRoaXMucG9BY3RpdmVPdmVybGF5U2VydmljZS5hY3RpdmVPdmVybGF5LnB1c2godGhpcy5pZCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGFsQ29udGVudCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEZvY3VzKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmZvY3VzRnVuY3Rpb24sIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEZvY3VzKCkge1xyXG4gICAgdGhpcy5mb2N1c0Z1bmN0aW9uID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbENvbnRlbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhbW9kYWxFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgICB0aGlzLnBvQWN0aXZlT3ZlcmxheVNlcnZpY2UuYWN0aXZlT3ZlcmxheVt0aGlzLnBvQWN0aXZlT3ZlcmxheVNlcnZpY2UuYWN0aXZlT3ZlcmxheS5sZW5ndGggLSAxXSA9PT0gdGhpcy5pZFxyXG4gICAgICApIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmZpcnN0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0Rmlyc3RFbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaGlkZUNsb3NlKSB7XHJcbiAgICAgIHRoaXMuZmlyc3RFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaXJzdEZpZWxkRWxlbWVudCA9XHJcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9jdXNhYmxlRWxlbWVudHMpWzFdIHx8IHRoaXMubW9kYWxDb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGZpcnN0RmllbGRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmZvY3VzRnVuY3Rpb24sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGaXJzdEVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9XHJcbiAgICAgIHRoaXMubW9kYWxDb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvY3VzYWJsZUVsZW1lbnRzKSB8fCB0aGlzLm1vZGFsQ29udGVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiIWlzSGlkZGVuXCIgY2xhc3M9XCJwby1tb2RhbFwiIHRhYmluZGV4PVwiMFwiIChrZXlkb3duLmVzYyk9XCJjbG9zZU1vZGFsT25Fc2NhcGVLZXkoJGV2ZW50KVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1tb2RhbC1vdmVybGF5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tbW9kYWwtY29udGFpbmVyIHBvLXBiLTIgcG8tcHQtMlwiIChtb3VzZWRvd24pPVwib25DbGlja091dCgkZXZlbnQpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1tb2RhbC12ZXJ0aWNhbC1hbGlnblwiPlxyXG4gICAgICAgIDxkaXYgI21vZGFsQ29udGVudCBjbGFzcz1cInBvLW1vZGFsLWNvbnRlbnQgcG8tbW9kYWwte3sgc2l6ZSB9fVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1tb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvLW1vZGFsLXRpdGxlIHBvLXRleHQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxhICpuZ0lmPVwiIWhpZGVDbG9zZVwiIGNsYXNzPVwicG8tbW9kYWwtaGVhZGVyLWNsb3NlLWJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIChjbGljayk9XCJjbG9zZSh0cnVlKVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kYWxGb290ZXI7IGVsc2UgZGVmYXVsdE1vZGFsRm9vdGVyVGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicG8tbW9kYWwtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0TW9kYWxGb290ZXJUZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHBvLW1vZGFsLWZvb3Rlcj5cclxuICAgICAgICAgICAgICA8cG8tYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInNlY29uZGFyeUFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBbcC1kYW5nZXJdPVwiZ2V0U2Vjb25kYXJ5QWN0aW9uQnV0dG9uRGFuZ2VyKClcIlxyXG4gICAgICAgICAgICAgICAgW3AtZGlzYWJsZWRdPVwic2Vjb25kYXJ5QWN0aW9uLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIFtwLWxhYmVsXT1cInNlY29uZGFyeUFjdGlvbi5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBbcC1sb2FkaW5nXT1cInNlY29uZGFyeUFjdGlvbi5sb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgIHAta2luZD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAocC1jbGljayk9XCJzZWNvbmRhcnlBY3Rpb24uYWN0aW9uKClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L3BvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwby1idXR0b24tbW9kYWwtZmlyc3QtYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIFtwLWRhbmdlcl09XCJwcmltYXJ5QWN0aW9uLmRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBbcC1kaXNhYmxlZF09XCJwcmltYXJ5QWN0aW9uLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIFtwLWxhYmVsXT1cInByaW1hcnlBY3Rpb24ubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgW3AtbG9hZGluZ109XCJwcmltYXJ5QWN0aW9uLmxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgcC1raW5kPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAocC1jbGljayk9XCJwcmltYXJ5QWN0aW9uLmFjdGlvbigpXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9wby1idXR0b24+XHJcbiAgICAgICAgICAgIDwvcG8tbW9kYWwtZm9vdGVyPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==