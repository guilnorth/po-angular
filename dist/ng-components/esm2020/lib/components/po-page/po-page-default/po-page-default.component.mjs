import { Component } from '@angular/core';
import { isExternalLink, isTypeof, openExternalLink } from '../../../utils/util';
import { PoPageDefaultBaseComponent } from './po-page-default-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-language/po-language.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "../../po-button/po-button.component";
import * as i5 from "../../po-dropdown/po-dropdown.component";
import * as i6 from "../po-page.component";
import * as i7 from "../po-page-content/po-page-content.component";
import * as i8 from "../po-page-header/po-page-header.component";
function PoPageDefaultComponent_po_page_header_1_po_dropdown_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-dropdown", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-label", ctx_r1.literals.otherActions)("p-actions", ctx_r1.dropdownActions);
} }
function PoPageDefaultComponent_po_page_header_1_po_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 7);
    i0.ɵɵlistener("p-click", function PoPageDefaultComponent_po_page_header_1_po_button_3_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.callAction(ctx_r5.visibleActions[2])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-disabled", ctx_r2.actionIsDisabled(ctx_r2.visibleActions[2]))("p-label", ctx_r2.visibleActions[2].label);
} }
function PoPageDefaultComponent_po_page_header_1_po_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 7);
    i0.ɵɵlistener("p-click", function PoPageDefaultComponent_po_page_header_1_po_button_4_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.callAction(ctx_r7.visibleActions[1])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-disabled", ctx_r3.actionIsDisabled(ctx_r3.visibleActions[1]))("p-label", ctx_r3.visibleActions[1].label);
} }
function PoPageDefaultComponent_po_page_header_1_po_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 8);
    i0.ɵɵlistener("p-click", function PoPageDefaultComponent_po_page_header_1_po_button_5_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.callAction(ctx_r9.visibleActions[0])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-disabled", ctx_r4.actionIsDisabled(ctx_r4.visibleActions[0]))("p-icon", ctx_r4.visibleActions[0].icon)("p-label", ctx_r4.visibleActions[0].label);
} }
function PoPageDefaultComponent_po_page_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-page-header", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, PoPageDefaultComponent_po_page_header_1_po_dropdown_2_Template, 1, 2, "po-dropdown", 3);
    i0.ɵɵtemplate(3, PoPageDefaultComponent_po_page_header_1_po_button_3_Template, 1, 2, "po-button", 4);
    i0.ɵɵtemplate(4, PoPageDefaultComponent_po_page_header_1_po_button_4_Template, 1, 2, "po-button", 4);
    i0.ɵɵtemplate(5, PoPageDefaultComponent_po_page_header_1_po_button_5_Template, 1, 3, "po-button", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-breadcrumb", ctx_r0.breadcrumb)("p-title", ctx_r0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions.length > ctx_r0.limitPrimaryActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions.length === 3 && ctx_r0.visibleActions[2] && !ctx_r0.isMobile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions[1] && (ctx_r0.visibleActions.length === 2 || !ctx_r0.isMobile));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions[0]);
} }
const _c0 = ["*"];
/**
 * @docsExtends PoPageDefaultBaseComponent
 *
 * @example
 *
 * <example name="po-page-default-basic" title="PO Page Default Basic">
 *  <file name="sample-po-page-default-basic/sample-po-page-default-basic.component.html"> </file>
 *  <file name="sample-po-page-default-basic/sample-po-page-default-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-default-labs" title="PO Page Default Labs">
 *  <file name="sample-po-page-default-labs/sample-po-page-default-labs.component.html"> </file>
 *  <file name="sample-po-page-default-labs/sample-po-page-default-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-default-dashboard" title="PO Page Default - Dashboard">
 *  <file name="sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"> </file>
 *  <file name="sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"> </file>
 *  <file name="sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"> </file>
 * </example>
 */
export class PoPageDefaultComponent extends PoPageDefaultBaseComponent {
    constructor(viewRef, languageService, renderer, router) {
        super(languageService);
        this.renderer = renderer;
        this.router = router;
        this.limitPrimaryActions = 3;
        this.maxWidthMobile = 480;
    }
    ngAfterContentInit() {
        this.setIsMobile();
        this.setDropdownActions();
        this.renderer.listen('window', 'resize', (event) => {
            this.onResize(event);
        });
    }
    ngOnChanges(changes) {
        this.setDropdownActions();
    }
    actionIsDisabled(action) {
        return isTypeof(action.disabled, 'function') ? action.disabled(action) : action.disabled;
    }
    callAction(item) {
        if (item.url) {
            isExternalLink(item.url) ? openExternalLink(item.url) : this.router.navigate([item.url]);
        }
        else if (item.action) {
            item.action();
        }
    }
    hasPageHeader() {
        return !!(this.title ||
            (this.visibleActions && this.visibleActions.length) ||
            (this.breadcrumb && this.breadcrumb.items.length));
    }
    setDropdownActions() {
        if (this.visibleActions.length > this.limitPrimaryActions) {
            this.dropdownActions = this.visibleActions.slice(this.limitPrimaryActions - 1);
        }
    }
    onResize(event) {
        const width = event.target.innerWidth;
        if (width < this.maxWidthMobile) {
            this.isMobile = true;
            this.limitPrimaryActions = 2;
            this.setDropdownActions();
        }
        else {
            this.isMobile = false;
            this.limitPrimaryActions = 3;
            this.setDropdownActions();
        }
    }
    setIsMobile() {
        if (window.innerWidth < this.maxWidthMobile) {
            this.isMobile = true;
            this.limitPrimaryActions = 2;
        }
    }
}
PoPageDefaultComponent.ɵfac = function PoPageDefaultComponent_Factory(t) { return new (t || PoPageDefaultComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Router)); };
PoPageDefaultComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDefaultComponent, selectors: [["po-page-default"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[3, "p-breadcrumb", "p-title", 4, "ngIf"], [3, "p-breadcrumb", "p-title"], [1, "po-page-header-actions"], [3, "p-label", "p-actions", 4, "ngIf"], [3, "p-disabled", "p-label", "p-click", 4, "ngIf"], ["p-kind", "primary", 3, "p-disabled", "p-icon", "p-label", "p-click", 4, "ngIf"], [3, "p-label", "p-actions"], [3, "p-disabled", "p-label", "p-click"], ["p-kind", "primary", 3, "p-disabled", "p-icon", "p-label", "p-click"]], template: function PoPageDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "po-page");
        i0.ɵɵtemplate(1, PoPageDefaultComponent_po_page_header_1_Template, 6, 6, "po-page-header", 0);
        i0.ɵɵelementStart(2, "po-page-content");
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPageHeader());
    } }, dependencies: [i3.NgIf, i4.PoButtonComponent, i5.PoDropdownComponent, i6.PoPageComponent, i7.PoPageContentComponent, i8.PoPageHeaderComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDefaultComponent, [{
        type: Component,
        args: [{ selector: 'po-page-default', template: "<po-page>\r\n  <!-- HEADER -->\r\n  <po-page-header *ngIf=\"hasPageHeader()\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n    <!-- OPERATIONS -->\r\n    <div class=\"po-page-header-actions\">\r\n      <po-dropdown\r\n        *ngIf=\"visibleActions.length > limitPrimaryActions\"\r\n        [p-label]=\"literals.otherActions\"\r\n        [p-actions]=\"dropdownActions\"\r\n      >\r\n      </po-dropdown>\r\n\r\n      <po-button\r\n        *ngIf=\"visibleActions.length === 3 && visibleActions[2] && !isMobile\"\r\n        [p-disabled]=\"actionIsDisabled(visibleActions[2])\"\r\n        [p-label]=\"visibleActions[2].label\"\r\n        (p-click)=\"callAction(visibleActions[2])\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        *ngIf=\"visibleActions[1] && (visibleActions.length === 2 || !isMobile)\"\r\n        [p-disabled]=\"actionIsDisabled(visibleActions[1])\"\r\n        [p-label]=\"visibleActions[1].label\"\r\n        (p-click)=\"callAction(visibleActions[1])\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        *ngIf=\"visibleActions[0]\"\r\n        p-kind=\"primary\"\r\n        [p-disabled]=\"actionIsDisabled(visibleActions[0])\"\r\n        [p-icon]=\"visibleActions[0].icon\"\r\n        [p-label]=\"visibleActions[0].label\"\r\n        (p-click)=\"callAction(visibleActions[0])\"\r\n      >\r\n      </po-button>\r\n    </div>\r\n  </po-page-header>\r\n\r\n  <!-- CONTENT -->\r\n  <po-page-content>\r\n    <ng-content></ng-content>\r\n  </po-page-content>\r\n</po-page>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.PoLanguageService }, { type: i0.Renderer2 }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1kZWZhdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlL3BvLXBhZ2UtZGVmYXVsdC9wby1wYWdlLWRlZmF1bHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1kZWZhdWx0L3BvLXBhZ2UtZGVmYXVsdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBd0QsTUFBTSxlQUFlLENBQUM7QUFLbEgsT0FBTyxFQUFnQixjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7O0lDSHhFLGlDQUtjOzs7SUFIWixzREFBaUMscUNBQUE7Ozs7SUFLbkMsb0NBS0M7SUFEQyxrTUFBVyxlQUFBLHdDQUEwQixDQUFDLEVBQUUsQ0FBQSxJQUFDO0lBRTNDLGlCQUFZOzs7SUFKViw4RUFBa0QsMkNBQUE7Ozs7SUFNcEQsb0NBS0M7SUFEQyxrTUFBVyxlQUFBLHdDQUEwQixDQUFDLEVBQUUsQ0FBQSxJQUFDO0lBRTNDLGlCQUFZOzs7SUFKViw4RUFBa0QsMkNBQUE7Ozs7SUFNcEQsb0NBT0M7SUFEQyxtTUFBVyxlQUFBLHdDQUEwQixDQUFDLEVBQUUsQ0FBQSxJQUFDO0lBRTNDLGlCQUFZOzs7SUFMViw4RUFBa0QseUNBQUEsMkNBQUE7OztJQTdCeEQseUNBQXNGLGFBQUE7SUFHbEYsd0dBS2M7SUFFZCxvR0FNWTtJQUVaLG9HQU1ZO0lBRVosb0dBUVk7SUFDZCxpQkFBTSxFQUFBOzs7SUFuQ2dDLGdEQUEyQix5QkFBQTtJQUk1RCxlQUFpRDtJQUFqRCxnRkFBaUQ7SUFPakQsZUFBbUU7SUFBbkUseUdBQW1FO0lBUW5FLGVBQXFFO0lBQXJFLDJHQUFxRTtJQVFyRSxlQUF1QjtJQUF2QiwrQ0FBdUI7OztBRG5CaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBS0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDBCQUEwQjtJQU9wRSxZQUNFLE9BQXlCLEVBQ3pCLGVBQWtDLEVBQzFCLFFBQW1CLEVBQ25CLE1BQWM7UUFFdEIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBSGYsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVnhCLHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQUl4QixtQkFBYyxHQUFXLEdBQUcsQ0FBQztJQVNyQyxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBNkM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVc7UUFDMUIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUMzRixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWtCO1FBQzNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLENBQUMsQ0FDUCxJQUFJLENBQUMsS0FBSztZQUNWLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUNuRCxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUVPLFFBQVEsQ0FBQyxLQUFZO1FBQzNCLE1BQU0sS0FBSyxHQUFJLEtBQUssQ0FBQyxNQUFpQixDQUFDLFVBQVUsQ0FBQztRQUVsRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7NEZBMUVVLHNCQUFzQjt5RUFBdEIsc0JBQXNCOztRQ25DbkMsK0JBQVM7UUFFUCw2RkFvQ2lCO1FBR2pCLHVDQUFpQjtRQUNmLGtCQUF5QjtRQUMzQixpQkFBa0IsRUFBQTs7UUF6Q0QsZUFBcUI7UUFBckIsMENBQXFCOzt1RkRpQzNCLHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgY2FsbEZ1bmN0aW9uLCBpc0V4dGVybmFsTGluaywgaXNUeXBlb2YsIG9wZW5FeHRlcm5hbExpbmsgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9QYWdlQWN0aW9uIH0gZnJvbSAnLi4vcG8tcGFnZS1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZURlZmF1bHRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWRlZmF1bHQtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VEZWZhdWx0QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1kZWZhdWx0LWJhc2ljXCIgdGl0bGU9XCJQTyBQYWdlIERlZmF1bHQgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZWZhdWx0LWJhc2ljL3NhbXBsZS1wby1wYWdlLWRlZmF1bHQtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWRlZmF1bHQtYmFzaWMvc2FtcGxlLXBvLXBhZ2UtZGVmYXVsdC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWRlZmF1bHQtbGFic1wiIHRpdGxlPVwiUE8gUGFnZSBEZWZhdWx0IExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZWZhdWx0LWxhYnMvc2FtcGxlLXBvLXBhZ2UtZGVmYXVsdC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZWZhdWx0LWxhYnMvc2FtcGxlLXBvLXBhZ2UtZGVmYXVsdC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtZGVmYXVsdC1kYXNoYm9hcmRcIiB0aXRsZT1cIlBPIFBhZ2UgRGVmYXVsdCAtIERhc2hib2FyZFwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWRlZmF1bHQtZGFzaGJvYXJkL3NhbXBsZS1wby1wYWdlLWRlZmF1bHQtZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1kZWZhdWx0LWRhc2hib2FyZC9zYW1wbGUtcG8tcGFnZS1kZWZhdWx0LWRhc2hib2FyZC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWRlZmF1bHQtZGFzaGJvYXJkL3NhbXBsZS1wby1wYWdlLWRlZmF1bHQtZGFzaGJvYXJkLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2UtZGVmYXVsdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtZGVmYXVsdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZURlZmF1bHRDb21wb25lbnQgZXh0ZW5kcyBQb1BhZ2VEZWZhdWx0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgbGltaXRQcmltYXJ5QWN0aW9uczogbnVtYmVyID0gMztcclxuICBkcm9wZG93bkFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj47XHJcbiAgaXNNb2JpbGU6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgbWF4V2lkdGhNb2JpbGU6IG51bWJlciA9IDQ4MDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRJc01vYmlsZSgpO1xyXG4gICAgdGhpcy5zZXREcm9wZG93bkFjdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5vblJlc2l6ZShldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgdGhpcy5zZXREcm9wZG93bkFjdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIGFjdGlvbklzRGlzYWJsZWQoYWN0aW9uOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1R5cGVvZihhY3Rpb24uZGlzYWJsZWQsICdmdW5jdGlvbicpID8gYWN0aW9uLmRpc2FibGVkKGFjdGlvbikgOiBhY3Rpb24uZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjYWxsQWN0aW9uKGl0ZW06IFBvUGFnZUFjdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKGl0ZW0udXJsKSB7XHJcbiAgICAgIGlzRXh0ZXJuYWxMaW5rKGl0ZW0udXJsKSA/IG9wZW5FeHRlcm5hbExpbmsoaXRlbS51cmwpIDogdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW0udXJsXSk7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0uYWN0aW9uKSB7XHJcbiAgICAgIGl0ZW0uYWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXNQYWdlSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuICEhKFxyXG4gICAgICB0aGlzLnRpdGxlIHx8XHJcbiAgICAgICh0aGlzLnZpc2libGVBY3Rpb25zICYmIHRoaXMudmlzaWJsZUFjdGlvbnMubGVuZ3RoKSB8fFxyXG4gICAgICAodGhpcy5icmVhZGNydW1iICYmIHRoaXMuYnJlYWRjcnVtYi5pdGVtcy5sZW5ndGgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0RHJvcGRvd25BY3Rpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZUFjdGlvbnMubGVuZ3RoID4gdGhpcy5saW1pdFByaW1hcnlBY3Rpb25zKSB7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25BY3Rpb25zID0gdGhpcy52aXNpYmxlQWN0aW9ucy5zbGljZSh0aGlzLmxpbWl0UHJpbWFyeUFjdGlvbnMgLSAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB3aWR0aCA9IChldmVudC50YXJnZXQgYXMgV2luZG93KS5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmICh3aWR0aCA8IHRoaXMubWF4V2lkdGhNb2JpbGUpIHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubGltaXRQcmltYXJ5QWN0aW9ucyA9IDI7XHJcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubGltaXRQcmltYXJ5QWN0aW9ucyA9IDM7XHJcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElzTW9iaWxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5tYXhXaWR0aE1vYmlsZSkge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saW1pdFByaW1hcnlBY3Rpb25zID0gMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHBvLXBhZ2U+XHJcbiAgPCEtLSBIRUFERVIgLS0+XHJcbiAgPHBvLXBhZ2UtaGVhZGVyICpuZ0lmPVwiaGFzUGFnZUhlYWRlcigpXCIgW3AtYnJlYWRjcnVtYl09XCJicmVhZGNydW1iXCIgW3AtdGl0bGVdPVwidGl0bGVcIj5cclxuICAgIDwhLS0gT1BFUkFUSU9OUyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLWhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgIDxwby1kcm9wZG93blxyXG4gICAgICAgICpuZ0lmPVwidmlzaWJsZUFjdGlvbnMubGVuZ3RoID4gbGltaXRQcmltYXJ5QWN0aW9uc1wiXHJcbiAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMub3RoZXJBY3Rpb25zXCJcclxuICAgICAgICBbcC1hY3Rpb25zXT1cImRyb3Bkb3duQWN0aW9uc1wiXHJcbiAgICAgID5cclxuICAgICAgPC9wby1kcm9wZG93bj5cclxuXHJcbiAgICAgIDxwby1idXR0b25cclxuICAgICAgICAqbmdJZj1cInZpc2libGVBY3Rpb25zLmxlbmd0aCA9PT0gMyAmJiB2aXNpYmxlQWN0aW9uc1syXSAmJiAhaXNNb2JpbGVcIlxyXG4gICAgICAgIFtwLWRpc2FibGVkXT1cImFjdGlvbklzRGlzYWJsZWQodmlzaWJsZUFjdGlvbnNbMl0pXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJ2aXNpYmxlQWN0aW9uc1syXS5sYWJlbFwiXHJcbiAgICAgICAgKHAtY2xpY2spPVwiY2FsbEFjdGlvbih2aXNpYmxlQWN0aW9uc1syXSlcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwidmlzaWJsZUFjdGlvbnNbMV0gJiYgKHZpc2libGVBY3Rpb25zLmxlbmd0aCA9PT0gMiB8fCAhaXNNb2JpbGUpXCJcclxuICAgICAgICBbcC1kaXNhYmxlZF09XCJhY3Rpb25Jc0Rpc2FibGVkKHZpc2libGVBY3Rpb25zWzFdKVwiXHJcbiAgICAgICAgW3AtbGFiZWxdPVwidmlzaWJsZUFjdGlvbnNbMV0ubGFiZWxcIlxyXG4gICAgICAgIChwLWNsaWNrKT1cImNhbGxBY3Rpb24odmlzaWJsZUFjdGlvbnNbMV0pXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWJ1dHRvbj5cclxuXHJcbiAgICAgIDxwby1idXR0b25cclxuICAgICAgICAqbmdJZj1cInZpc2libGVBY3Rpb25zWzBdXCJcclxuICAgICAgICBwLWtpbmQ9XCJwcmltYXJ5XCJcclxuICAgICAgICBbcC1kaXNhYmxlZF09XCJhY3Rpb25Jc0Rpc2FibGVkKHZpc2libGVBY3Rpb25zWzBdKVwiXHJcbiAgICAgICAgW3AtaWNvbl09XCJ2aXNpYmxlQWN0aW9uc1swXS5pY29uXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJ2aXNpYmxlQWN0aW9uc1swXS5sYWJlbFwiXHJcbiAgICAgICAgKHAtY2xpY2spPVwiY2FsbEFjdGlvbih2aXNpYmxlQWN0aW9uc1swXSlcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wby1wYWdlLWhlYWRlcj5cclxuXHJcbiAgPCEtLSBDT05URU5UIC0tPlxyXG4gIDxwby1wYWdlLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9wby1wYWdlLWNvbnRlbnQ+XHJcbjwvcG8tcGFnZT5cclxuIl19