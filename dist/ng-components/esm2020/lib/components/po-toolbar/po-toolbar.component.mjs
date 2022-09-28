import { Component } from '@angular/core';
import { PoToolbarBaseComponent } from './po-toolbar-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "./po-toolbar-actions/po-toolbar-actions.component";
import * as i4 from "./po-toolbar-notification/po-toolbar-notification.component";
import * as i5 from "./po-toolbar-profile/po-toolbar-profile.component";
function PoToolbarComponent_po_toolbar_actions_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-toolbar-actions", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-actions", ctx_r0.actions)("p-actions-icon", ctx_r0.actionsIcon);
} }
function PoToolbarComponent_po_toolbar_notification_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-toolbar-notification", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-notification-actions", ctx_r1.notificationActions)("p-notification-number", ctx_r1.notificationNumber);
} }
function PoToolbarComponent_po_toolbar_profile_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-toolbar-profile", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-profile", ctx_r2.profile)("p-profile-actions", ctx_r2.profileActions);
} }
/**
 * @docsExtends PoToolbarBaseComponent
 *
 * @example
 *
 * <example name="po-toolbar-basic" title="PO Toolbar Basic">
 *  <file name="sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"> </file>
 *  <file name="sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-toolbar-labs" title="PO Toolbar Labs">
 *  <file name="sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"> </file>
 *  <file name="sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-toolbar-logged" title="PO Toolbar - Logged">
 *  <file name="sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"> </file>
 *  <file name="sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"> </file>
 * </example>
 */
export class PoToolbarComponent extends PoToolbarBaseComponent {
    constructor(titleService, viewRef) {
        super();
        this.titleService = titleService;
    }
    ngOnInit() {
        this.setTitle(this.title);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}
PoToolbarComponent.ɵfac = function PoToolbarComponent_Factory(t) { return new (t || PoToolbarComponent)(i0.ɵɵdirectiveInject(i1.Title), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
PoToolbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoToolbarComponent, selectors: [["po-toolbar"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 4, consts: [[1, "po-toolbar"], [1, "po-toolbar-title"], [1, "po-toolbar-group-icon"], [3, "p-actions", "p-actions-icon", 4, "ngIf"], [3, "p-notification-actions", "p-notification-number", 4, "ngIf"], [3, "p-profile", "p-profile-actions", 4, "ngIf"], [3, "p-actions", "p-actions-icon"], [3, "p-notification-actions", "p-notification-number"], [3, "p-profile", "p-profile-actions"]], template: function PoToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, PoToolbarComponent_po_toolbar_actions_4_Template, 1, 2, "po-toolbar-actions", 3);
        i0.ɵɵtemplate(5, PoToolbarComponent_po_toolbar_notification_5_Template, 1, 2, "po-toolbar-notification", 4);
        i0.ɵɵtemplate(6, PoToolbarComponent_po_toolbar_profile_6_Template, 1, 2, "po-toolbar-profile", 5);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.actions && ctx.actions.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showNotification && ctx.notificationActions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isShowProfile);
    } }, dependencies: [i2.NgIf, i3.PoToolbarActionsComponent, i4.PoToolbarNotificationComponent, i5.PoToolbarProfileComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToolbarComponent, [{
        type: Component,
        args: [{ selector: 'po-toolbar', template: "<div class=\"po-toolbar\">\r\n  <div class=\"po-toolbar-title\">{{ title }}</div>\r\n\r\n  <div class=\"po-toolbar-group-icon\">\r\n    <po-toolbar-actions *ngIf=\"actions && actions.length\" [p-actions]=\"actions\" [p-actions-icon]=\"actionsIcon\">\r\n    </po-toolbar-actions>\r\n\r\n    <po-toolbar-notification\r\n      *ngIf=\"showNotification && notificationActions\"\r\n      [p-notification-actions]=\"notificationActions\"\r\n      [p-notification-number]=\"notificationNumber\"\r\n    >\r\n    </po-toolbar-notification>\r\n\r\n    <po-toolbar-profile *ngIf=\"isShowProfile\" [p-profile]=\"profile\" [p-profile-actions]=\"profileActions\">\r\n    </po-toolbar-profile>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.Title }, { type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdG9vbGJhci9wby10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10b29sYmFyL3BvLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0lDQ2pFLHdDQUNxQjs7O0lBRGlDLDBDQUFxQixzQ0FBQTs7O0lBRzNFLDZDQUswQjs7O0lBSHhCLG1FQUE4QyxvREFBQTs7O0lBS2hELHdDQUNxQjs7O0lBRHFCLDBDQUFxQiw0Q0FBQTs7QURUbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFLSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBQzVELFlBQW9CLFlBQW1CLEVBQUUsT0FBeUI7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFEVSxpQkFBWSxHQUFaLFlBQVksQ0FBTztJQUV2QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxRQUFRLENBQUMsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7b0ZBWFUsa0JBQWtCO3FFQUFsQixrQkFBa0I7UUM3Qi9CLDhCQUF3QixhQUFBO1FBQ1EsWUFBVztRQUFBLGlCQUFNO1FBRS9DLDhCQUFtQztRQUNqQyxpR0FDcUI7UUFFckIsMkdBSzBCO1FBRTFCLGlHQUNxQjtRQUN2QixpQkFBTSxFQUFBOztRQWZ3QixlQUFXO1FBQVgsK0JBQVc7UUFHbEIsZUFBK0I7UUFBL0Isd0RBQStCO1FBSWpELGVBQTZDO1FBQTdDLHNFQUE2QztRQU0zQixlQUFtQjtRQUFuQix3Q0FBbUI7O3VGRGUvQixrQkFBa0I7Y0FKOUIsU0FBUzsyQkFDRSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7IFBvVG9vbGJhckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXRvb2xiYXItYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1Rvb2xiYXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby10b29sYmFyLWJhc2ljXCIgdGl0bGU9XCJQTyBUb29sYmFyIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRvb2xiYXItYmFzaWMvc2FtcGxlLXBvLXRvb2xiYXItYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10b29sYmFyLWJhc2ljL3NhbXBsZS1wby10b29sYmFyLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRvb2xiYXItbGFic1wiIHRpdGxlPVwiUE8gVG9vbGJhciBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRvb2xiYXItbGFicy9zYW1wbGUtcG8tdG9vbGJhci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdG9vbGJhci1sYWJzL3NhbXBsZS1wby10b29sYmFyLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdG9vbGJhci1sb2dnZWRcIiB0aXRsZT1cIlBPIFRvb2xiYXIgLSBMb2dnZWRcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdG9vbGJhci1sb2dnZWQvc2FtcGxlLXBvLXRvb2xiYXItbG9nZ2VkLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdG9vbGJhci1sb2dnZWQvc2FtcGxlLXBvLXRvb2xiYXItbG9nZ2VkLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1Rvb2xiYXJDb21wb25lbnQgZXh0ZW5kcyBQb1Rvb2xiYXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VGl0bGUodGhpcy50aXRsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRpdGxlKG5ld1RpdGxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXRvb2xiYXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tdG9vbGJhci10aXRsZVwiPnt7IHRpdGxlIH19PC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby10b29sYmFyLWdyb3VwLWljb25cIj5cclxuICAgIDxwby10b29sYmFyLWFjdGlvbnMgKm5nSWY9XCJhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoXCIgW3AtYWN0aW9uc109XCJhY3Rpb25zXCIgW3AtYWN0aW9ucy1pY29uXT1cImFjdGlvbnNJY29uXCI+XHJcbiAgICA8L3BvLXRvb2xiYXItYWN0aW9ucz5cclxuXHJcbiAgICA8cG8tdG9vbGJhci1ub3RpZmljYXRpb25cclxuICAgICAgKm5nSWY9XCJzaG93Tm90aWZpY2F0aW9uICYmIG5vdGlmaWNhdGlvbkFjdGlvbnNcIlxyXG4gICAgICBbcC1ub3RpZmljYXRpb24tYWN0aW9uc109XCJub3RpZmljYXRpb25BY3Rpb25zXCJcclxuICAgICAgW3Atbm90aWZpY2F0aW9uLW51bWJlcl09XCJub3RpZmljYXRpb25OdW1iZXJcIlxyXG4gICAgPlxyXG4gICAgPC9wby10b29sYmFyLW5vdGlmaWNhdGlvbj5cclxuXHJcbiAgICA8cG8tdG9vbGJhci1wcm9maWxlICpuZ0lmPVwiaXNTaG93UHJvZmlsZVwiIFtwLXByb2ZpbGVdPVwicHJvZmlsZVwiIFtwLXByb2ZpbGUtYWN0aW9uc109XCJwcm9maWxlQWN0aW9uc1wiPlxyXG4gICAgPC9wby10b29sYmFyLXByb2ZpbGU+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=