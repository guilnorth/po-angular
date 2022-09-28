import { Component, ContentChildren, ViewChild } from '@angular/core';
import { isMobile } from './../../utils/util';
import { PoTabComponent } from './po-tab/po-tab.component';
import { PoTabsBaseComponent } from './po-tabs-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-tab-button/po-tab-button.component";
import * as i3 from "./po-tab-dropdown/po-tab-dropdown.component";
const _c0 = ["tabDropdown"];
function PoTabsComponent_ng_container_2_po_tab_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-tab-button", 6);
    i0.ɵɵlistener("keyup.enter", function PoTabsComponent_ng_container_2_po_tab_button_1_Template_po_tab_button_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.closePopover()); })("p-activated", function PoTabsComponent_ng_container_2_po_tab_button_1_Template_po_tab_button_p_activated_0_listener() { i0.ɵɵrestoreView(_r5); const tab_r2 = i0.ɵɵnextContext().$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onTabActive(tab_r2)); })("p-change-state", function PoTabsComponent_ng_container_2_po_tab_button_1_Template_po_tab_button_p_change_state_0_listener() { i0.ɵɵrestoreView(_r5); const tab_r2 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onTabChangeState(tab_r2)); })("p-click", function PoTabsComponent_ng_container_2_po_tab_button_1_Template_po_tab_button_p_click_0_listener() { i0.ɵɵrestoreView(_r5); const tab_r2 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.selectedTab(tab_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-tab-button-mobile", ctx_r3.isMobileDevice);
    i0.ɵɵproperty("p-active", tab_r2.active)("p-disabled", tab_r2.disabled)("p-hide", tab_r2.hide)("p-id", tab_r2.id)("p-label", tab_r2.label)("p-small", ctx_r3.small);
} }
function PoTabsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PoTabsComponent_ng_container_2_po_tab_button_1_Template, 1, 8, "po-tab-button", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isVisibleTab(tab_r2));
} }
function PoTabsComponent_po_tab_dropdown_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-tab-dropdown", 7, 8);
    i0.ɵɵlistener("p-activated", function PoTabsComponent_po_tab_dropdown_3_Template_po_tab_dropdown_p_activated_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onTabActive($event)); })("p-change-state", function PoTabsComponent_po_tab_dropdown_3_Template_po_tab_dropdown_p_change_state_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onTabChangeState($event)); })("p-click", function PoTabsComponent_po_tab_dropdown_3_Template_po_tab_dropdown_p_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.selectedTab($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-small", ctx_r1.small)("p-tabs", ctx_r1.overflowedTabs);
} }
const _c1 = ["*"];
const poTabsMaxNumberOfTabs = 5;
/**
 * @docsExtends PoTabsBaseComponent
 *
 * @example
 *
 * <example name="po-tabs-basic" title="PO Tabs Basic">
 *  <file name="sample-po-tabs-basic/sample-po-tabs-basic.component.html"> </file>
 *  <file name="sample-po-tabs-basic/sample-po-tabs-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tabs-labs" title="PO Tabs Labs">
 *  <file name="sample-po-tabs-labs/sample-po-tabs-labs.component.html"> </file>
 *  <file name="sample-po-tabs-labs/sample-po-tabs-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tabs-travel" title="PO Tabs - Travel">
 *  <file name="sample-po-tabs-travel/sample-po-tabs-travel.component.html"> </file>
 *  <file name="sample-po-tabs-travel/sample-po-tabs-travel.component.ts"> </file>
 * </example>
 *
 * <example name="po-tabs-business-conf" title="PO Tabs - Business Conference">
 *  <file name="sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"> </file>
 *  <file name="sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"> </file>
 * </example>
 */
export class PoTabsComponent extends PoTabsBaseComponent {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
        this.maxNumberOfTabs = poTabsMaxNumberOfTabs;
    }
    get isMobileDevice() {
        return isMobile();
    }
    get isShowTabDropdown() {
        return !this.isMobileDevice && this.visibleTabs.length > this.maxNumberOfTabs;
    }
    // tabs que serão apresentadas na aba "Mais"
    get overflowedTabs() {
        return this.visibleTabs.filter((_tab, index) => index > this.maxNumberOfTabs - 2);
    }
    get visibleTabs() {
        return this.tabs.filter(tab => !tab.hide);
    }
    closePopover() {
        const containsPopoverVisible = this.tabDropdown && this.tabDropdown.popover && !this.tabDropdown.popover.isHidden;
        if (containsPopoverVisible) {
            this.tabDropdown.popover.close();
        }
    }
    isVisibleTab(tab) {
        if (this.isMobileDevice) {
            return true;
        }
        const visibleTabIndex = this.visibleTabs.findIndex(visibleTab => visibleTab.id === tab.id);
        return this.visibleTabs.length <= this.maxNumberOfTabs || visibleTabIndex < this.maxNumberOfTabs - 1;
    }
    // Função disparada quando alguma tab ficar ativa
    onTabActive(tab) {
        this.previousActiveTab = this.tabs.find(tabChild => tabChild.active && tabChild.id !== tab.id);
        this.deactivateTab();
    }
    // funcao será disparada quando mudar o estado do poTab para desabilitado ou escondido.
    onTabChangeState(tab) {
        if (tab.active) {
            tab.active = false;
            this.activeDistinctTab();
            this.changeDetector.detectChanges();
        }
    }
    // selectiona a aba informada por parametro, caso houver click faz a emição do evento.
    selectedTab(tab) {
        tab.active = true;
        if (tab.click) {
            tab.click.emit(tab);
        }
        this.changeDetector.detectChanges();
    }
    trackByFn(_i, tab) {
        return tab.id;
    }
    // ativa a previousActiveTab ou primeira tab encontrada.
    activeDistinctTab() {
        if (this.previousActiveTab) {
            this.previousActiveTab.active = true;
        }
        else {
            this.activeFirstTab();
        }
    }
    // Ativa a primeira Tab que não estiver desabilitada ou escondida.
    activeFirstTab() {
        this.tabs.some(tabChild => {
            if (!tabChild.disabled && !tabChild.hide) {
                tabChild.active = true;
                return true;
            }
        });
    }
    // desativa previousActiveTab e dispara a detecção de mudança.
    deactivateTab() {
        if (this.previousActiveTab) {
            this.previousActiveTab.active = false;
            this.changeDetector.detectChanges();
        }
    }
}
PoTabsComponent.ɵfac = function PoTabsComponent_Factory(t) { return new (t || PoTabsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoTabsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTabsComponent, selectors: [["po-tabs"]], contentQueries: function PoTabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoTabComponent, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabs = _t);
    } }, viewQuery: function PoTabsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabDropdown = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 5, consts: [[1, "po-tabs-container"], [1, "po-tabs-header"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "po-tab-button po-tab-dropdown", "p-label", "Mais", 3, "p-small", "p-tabs", "p-activated", "p-change-state", "p-click", 4, "ngIf"], [1, "po-tabs-content"], ["class", "po-tab-button", 3, "po-tab-button-mobile", "p-active", "p-disabled", "p-hide", "p-id", "p-label", "p-small", "keyup.enter", "p-activated", "p-change-state", "p-click", 4, "ngIf"], [1, "po-tab-button", 3, "p-active", "p-disabled", "p-hide", "p-id", "p-label", "p-small", "keyup.enter", "p-activated", "p-change-state", "p-click"], ["p-label", "Mais", 1, "po-tab-button", "po-tab-dropdown", 3, "p-small", "p-tabs", "p-activated", "p-change-state", "p-click"], ["tabDropdown", ""]], template: function PoTabsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoTabsComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, PoTabsComponent_po_tab_dropdown_3_Template, 2, 2, "po-tab-dropdown", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-tabs-container-mobile", ctx.isMobileDevice);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.tabs)("ngForTrackBy", ctx.trackByFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isShowTabDropdown);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.PoTabButtonComponent, i3.PoTabDropdownComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabsComponent, [{
        type: Component,
        args: [{ selector: 'po-tabs', template: "<div class=\"po-tabs-container\" [class.po-tabs-container-mobile]=\"isMobileDevice\">\r\n  <div class=\"po-tabs-header\">\r\n    <ng-container *ngFor=\"let tab of tabs; trackBy: trackByFn\">\r\n      <po-tab-button\r\n        *ngIf=\"isVisibleTab(tab)\"\r\n        class=\"po-tab-button\"\r\n        [class.po-tab-button-mobile]=\"isMobileDevice\"\r\n        [p-active]=\"tab.active\"\r\n        [p-disabled]=\"tab.disabled\"\r\n        [p-hide]=\"tab.hide\"\r\n        [p-id]=\"tab.id\"\r\n        [p-label]=\"tab.label\"\r\n        [p-small]=\"small\"\r\n        (keyup.enter)=\"closePopover()\"\r\n        (p-activated)=\"onTabActive(tab)\"\r\n        (p-change-state)=\"onTabChangeState(tab)\"\r\n        (p-click)=\"selectedTab(tab)\"\r\n      >\r\n      </po-tab-button>\r\n    </ng-container>\r\n\r\n    <po-tab-dropdown\r\n      #tabDropdown\r\n      *ngIf=\"isShowTabDropdown\"\r\n      class=\"po-tab-button po-tab-dropdown\"\r\n      p-label=\"Mais\"\r\n      [p-small]=\"small\"\r\n      [p-tabs]=\"overflowedTabs\"\r\n      (p-activated)=\"onTabActive($event)\"\r\n      (p-change-state)=\"onTabChangeState($event)\"\r\n      (p-click)=\"selectedTab($event)\"\r\n    >\r\n    </po-tab-dropdown>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"po-tabs-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { tabs: [{
            type: ContentChildren,
            args: [PoTabComponent]
        }], tabDropdown: [{
            type: ViewChild,
            args: ['tabDropdown', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFicy9wby10YWJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJzL3BvLXRhYnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztJQ0h6RCx3Q0FjQztJQUpDLHlNQUFlLGVBQUEscUJBQWMsQ0FBQSxJQUFDLHdPQUNmLGVBQUEsMEJBQWdCLENBQUEsSUFERCw4T0FFWixlQUFBLCtCQUFxQixDQUFBLElBRlQsaU9BR25CLGVBQUEsMkJBQWdCLENBQUEsSUFIRztJQUtoQyxpQkFBZ0I7Ozs7SUFaZCw2REFBNkM7SUFDN0Msd0NBQXVCLCtCQUFBLHVCQUFBLG1CQUFBLHlCQUFBLHlCQUFBOzs7SUFMM0IsNkJBQTJEO0lBQ3pELG1HQWVnQjtJQUNsQiwwQkFBZTs7OztJQWZWLGVBQXVCO0lBQXZCLGtEQUF1Qjs7OztJQWlCNUIsNkNBVUM7SUFIQyxxTUFBZSxlQUFBLDJCQUFtQixDQUFBLElBQUMsOExBQ2pCLGVBQUEsZ0NBQXdCLENBQUEsSUFEUCxnTEFFeEIsZUFBQSwyQkFBbUIsQ0FBQSxJQUZLO0lBSXJDLGlCQUFrQjs7O0lBTmhCLHNDQUFpQixpQ0FBQTs7O0FEbEJ2QixNQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztB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QUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWIvcG8tdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVGFiRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3BvLXRhYi1kcm9wZG93bi9wby10YWItZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJzQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFicy1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwb1RhYnNNYXhOdW1iZXJPZlRhYnMgPSA1O1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1RhYnNCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby10YWJzLWJhc2ljXCIgdGl0bGU9XCJQTyBUYWJzIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYnMtYmFzaWMvc2FtcGxlLXBvLXRhYnMtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJzLWJhc2ljL3NhbXBsZS1wby10YWJzLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhYnMtbGFic1wiIHRpdGxlPVwiUE8gVGFicyBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYnMtbGFicy9zYW1wbGUtcG8tdGFicy1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFicy1sYWJzL3NhbXBsZS1wby10YWJzLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdGFicy10cmF2ZWxcIiB0aXRsZT1cIlBPIFRhYnMgLSBUcmF2ZWxcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFicy10cmF2ZWwvc2FtcGxlLXBvLXRhYnMtdHJhdmVsLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFicy10cmF2ZWwvc2FtcGxlLXBvLXRhYnMtdHJhdmVsLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhYnMtYnVzaW5lc3MtY29uZlwiIHRpdGxlPVwiUE8gVGFicyAtIEJ1c2luZXNzIENvbmZlcmVuY2VcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFicy1idXNpbmVzcy1jb25mL3NhbXBsZS1wby10YWJzLWJ1c2luZXNzLWNvbmYuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJzLWJ1c2luZXNzLWNvbmYvc2FtcGxlLXBvLXRhYnMtYnVzaW5lc3MtY29uZi5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby10YWJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJzQ29tcG9uZW50IGV4dGVuZHMgUG9UYWJzQmFzZUNvbXBvbmVudCB7XHJcbiAgLy8gVGFicyB1dGlsaXphZG9zIG5vIG5nLWNvbnRlbnRcclxuICBAQ29udGVudENoaWxkcmVuKFBvVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8UG9UYWJDb21wb25lbnQ+O1xyXG5cclxuICBAVmlld0NoaWxkKCd0YWJEcm9wZG93bicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYkRyb3Bkb3duOiBQb1RhYkRyb3Bkb3duQ29tcG9uZW50O1xyXG5cclxuICBtYXhOdW1iZXJPZlRhYnMgPSBwb1RhYnNNYXhOdW1iZXJPZlRhYnM7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNBY3RpdmVUYWI6IFBvVGFiQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc01vYmlsZURldmljZSgpIHtcclxuICAgIHJldHVybiBpc01vYmlsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd1RhYkRyb3Bkb3duKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzTW9iaWxlRGV2aWNlICYmIHRoaXMudmlzaWJsZVRhYnMubGVuZ3RoID4gdGhpcy5tYXhOdW1iZXJPZlRhYnM7XHJcbiAgfVxyXG5cclxuICAvLyB0YWJzIHF1ZSBzZXLDo28gYXByZXNlbnRhZGFzIG5hIGFiYSBcIk1haXNcIlxyXG4gIGdldCBvdmVyZmxvd2VkVGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVUYWJzLmZpbHRlcigoX3RhYiwgaW5kZXgpID0+IGluZGV4ID4gdGhpcy5tYXhOdW1iZXJPZlRhYnMgLSAyKTtcclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlVGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYnMuZmlsdGVyKHRhYiA9PiAhdGFiLmhpZGUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3BvdmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFpbnNQb3BvdmVyVmlzaWJsZSA9IHRoaXMudGFiRHJvcGRvd24gJiYgdGhpcy50YWJEcm9wZG93bi5wb3BvdmVyICYmICF0aGlzLnRhYkRyb3Bkb3duLnBvcG92ZXIuaXNIaWRkZW47XHJcblxyXG4gICAgaWYgKGNvbnRhaW5zUG9wb3ZlclZpc2libGUpIHtcclxuICAgICAgdGhpcy50YWJEcm9wZG93bi5wb3BvdmVyLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGVUYWIodGFiKSB7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZURldmljZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2aXNpYmxlVGFiSW5kZXggPSB0aGlzLnZpc2libGVUYWJzLmZpbmRJbmRleCh2aXNpYmxlVGFiID0+IHZpc2libGVUYWIuaWQgPT09IHRhYi5pZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZVRhYnMubGVuZ3RoIDw9IHRoaXMubWF4TnVtYmVyT2ZUYWJzIHx8IHZpc2libGVUYWJJbmRleCA8IHRoaXMubWF4TnVtYmVyT2ZUYWJzIC0gMTtcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGRpc3BhcmFkYSBxdWFuZG8gYWxndW1hIHRhYiBmaWNhciBhdGl2YVxyXG4gIG9uVGFiQWN0aXZlKHRhYikge1xyXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYiA9IHRoaXMudGFicy5maW5kKHRhYkNoaWxkID0+IHRhYkNoaWxkLmFjdGl2ZSAmJiB0YWJDaGlsZC5pZCAhPT0gdGFiLmlkKTtcclxuXHJcbiAgICB0aGlzLmRlYWN0aXZhdGVUYWIoKTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmNhbyBzZXLDoSBkaXNwYXJhZGEgcXVhbmRvIG11ZGFyIG8gZXN0YWRvIGRvIHBvVGFiIHBhcmEgZGVzYWJpbGl0YWRvIG91IGVzY29uZGlkby5cclxuICBvblRhYkNoYW5nZVN0YXRlKHRhYjogUG9UYWJDb21wb25lbnQpIHtcclxuICAgIGlmICh0YWIuYWN0aXZlKSB7XHJcbiAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuYWN0aXZlRGlzdGluY3RUYWIoKTtcclxuXHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc2VsZWN0aW9uYSBhIGFiYSBpbmZvcm1hZGEgcG9yIHBhcmFtZXRybywgY2FzbyBob3V2ZXIgY2xpY2sgZmF6IGEgZW1pw6fDo28gZG8gZXZlbnRvLlxyXG4gIHNlbGVjdGVkVGFiKHRhYjogUG9UYWJDb21wb25lbnQpIHtcclxuICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0YWIuY2xpY2spIHtcclxuICAgICAgdGFiLmNsaWNrLmVtaXQodGFiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlGbihfaSwgdGFiOiBQb1RhYkNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHRhYi5pZDtcclxuICB9XHJcblxyXG4gIC8vIGF0aXZhIGEgcHJldmlvdXNBY3RpdmVUYWIgb3UgcHJpbWVpcmEgdGFiIGVuY29udHJhZGEuXHJcbiAgcHJpdmF0ZSBhY3RpdmVEaXN0aW5jdFRhYigpIHtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzQWN0aXZlVGFiKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRmlyc3RUYWIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEF0aXZhIGEgcHJpbWVpcmEgVGFiIHF1ZSBuw6NvIGVzdGl2ZXIgZGVzYWJpbGl0YWRhIG91IGVzY29uZGlkYS5cclxuICBwcml2YXRlIGFjdGl2ZUZpcnN0VGFiKCkge1xyXG4gICAgdGhpcy50YWJzLnNvbWUodGFiQ2hpbGQgPT4ge1xyXG4gICAgICBpZiAoIXRhYkNoaWxkLmRpc2FibGVkICYmICF0YWJDaGlsZC5oaWRlKSB7XHJcbiAgICAgICAgdGFiQ2hpbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBkZXNhdGl2YSBwcmV2aW91c0FjdGl2ZVRhYiBlIGRpc3BhcmEgYSBkZXRlY8Onw6NvIGRlIG11ZGFuw6dhLlxyXG4gIHByaXZhdGUgZGVhY3RpdmF0ZVRhYigpIHtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzQWN0aXZlVGFiKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXRhYnMtY29udGFpbmVyXCIgW2NsYXNzLnBvLXRhYnMtY29udGFpbmVyLW1vYmlsZV09XCJpc01vYmlsZURldmljZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby10YWJzLWhlYWRlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxyXG4gICAgICA8cG8tdGFiLWJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwiaXNWaXNpYmxlVGFiKHRhYilcIlxyXG4gICAgICAgIGNsYXNzPVwicG8tdGFiLWJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLnBvLXRhYi1idXR0b24tbW9iaWxlXT1cImlzTW9iaWxlRGV2aWNlXCJcclxuICAgICAgICBbcC1hY3RpdmVdPVwidGFiLmFjdGl2ZVwiXHJcbiAgICAgICAgW3AtZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICBbcC1oaWRlXT1cInRhYi5oaWRlXCJcclxuICAgICAgICBbcC1pZF09XCJ0YWIuaWRcIlxyXG4gICAgICAgIFtwLWxhYmVsXT1cInRhYi5sYWJlbFwiXHJcbiAgICAgICAgW3Atc21hbGxdPVwic21hbGxcIlxyXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJjbG9zZVBvcG92ZXIoKVwiXHJcbiAgICAgICAgKHAtYWN0aXZhdGVkKT1cIm9uVGFiQWN0aXZlKHRhYilcIlxyXG4gICAgICAgIChwLWNoYW5nZS1zdGF0ZSk9XCJvblRhYkNoYW5nZVN0YXRlKHRhYilcIlxyXG4gICAgICAgIChwLWNsaWNrKT1cInNlbGVjdGVkVGFiKHRhYilcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tdGFiLWJ1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxwby10YWItZHJvcGRvd25cclxuICAgICAgI3RhYkRyb3Bkb3duXHJcbiAgICAgICpuZ0lmPVwiaXNTaG93VGFiRHJvcGRvd25cIlxyXG4gICAgICBjbGFzcz1cInBvLXRhYi1idXR0b24gcG8tdGFiLWRyb3Bkb3duXCJcclxuICAgICAgcC1sYWJlbD1cIk1haXNcIlxyXG4gICAgICBbcC1zbWFsbF09XCJzbWFsbFwiXHJcbiAgICAgIFtwLXRhYnNdPVwib3ZlcmZsb3dlZFRhYnNcIlxyXG4gICAgICAocC1hY3RpdmF0ZWQpPVwib25UYWJBY3RpdmUoJGV2ZW50KVwiXHJcbiAgICAgIChwLWNoYW5nZS1zdGF0ZSk9XCJvblRhYkNoYW5nZVN0YXRlKCRldmVudClcIlxyXG4gICAgICAocC1jbGljayk9XCJzZWxlY3RlZFRhYigkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvcG8tdGFiLWRyb3Bkb3duPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJwby10YWJzLWNvbnRlbnRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=