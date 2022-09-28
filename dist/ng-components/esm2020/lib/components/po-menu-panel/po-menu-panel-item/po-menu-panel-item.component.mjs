import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/po-menu-panel-items.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "../../../directives/po-tooltip/po-tooltip.directive";
function PoMenuPanelItemComponent_a_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuPanelItemComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtemplate(1, PoMenuPanelItemComponent_a_0_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("routerLink", ctx_r0.menuItemInternal.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function PoMenuPanelItemComponent_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuPanelItemComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtemplate(1, PoMenuPanelItemComponent_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("href", ctx_r1.menuItemInternal.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function PoMenuPanelItemComponent_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuPanelItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtemplate(1, PoMenuPanelItemComponent_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function PoMenuPanelItemComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function PoMenuPanelItemComponent_ng_template_3_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.clickMenuItem($event)); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-menu-panel-item-selected", ctx_r4.menuItemInternal.isSelected);
    i0.ɵɵproperty("p-tooltip", ctx_r4.menuItemInternal.label);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("po-icon ", ctx_r4.menuItemInternal.icon, "");
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que implementa cada item do po-menu-panel.
 */
export class PoMenuPanelItemComponent {
    constructor(menuItemsService) {
        this.menuItemsService = menuItemsService;
    }
    ngOnDestroy() {
        this.itemsSubscription.unsubscribe();
    }
    ngOnInit() {
        // subscribe to menu component messages
        this.subscribeMenuClickedFromParent();
    }
    clickMenuItem(event) {
        if (!(event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            // Emmit to parent
            this.menuItemsService.sendToParentMenuClicked(this.menuItemInternal);
        }
    }
    activateMenu(menu) {
        this.menuItemInternal.isSelected = this.menuItemInternal.id === menu.id;
    }
    processMenuItem(menu) {
        if (this.menuItemInternal.type === 'internalLink') {
            this.activateMenu(menu.active);
        }
    }
    subscribeMenuClickedFromParent() {
        this.itemsSubscription = this.menuItemsService.receiveFromParentMenuClicked().subscribe(menu => {
            this.processMenuItem(menu);
        });
    }
}
PoMenuPanelItemComponent.ɵfac = function PoMenuPanelItemComponent_Factory(t) { return new (t || PoMenuPanelItemComponent)(i0.ɵɵdirectiveInject(i1.PoMenuPanelItemsService)); };
PoMenuPanelItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMenuPanelItemComponent, selectors: [["po-menu-panel-item"]], inputs: { menuItemInternal: ["p-menu-item-internal", "menuItemInternal"] }, decls: 5, vars: 3, consts: [[3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], ["href", "javascript:;", 4, "ngIf"], ["menuItemTemplate", ""], [3, "routerLink"], [4, "ngTemplateOutlet"], [3, "href"], ["href", "javascript:;"], ["p-tooltip-position", "right", 1, "po-menu-panel-item", 3, "p-tooltip", "click"]], template: function PoMenuPanelItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoMenuPanelItemComponent_a_0_Template, 2, 2, "a", 0);
        i0.ɵɵtemplate(1, PoMenuPanelItemComponent_a_1_Template, 2, 2, "a", 1);
        i0.ɵɵtemplate(2, PoMenuPanelItemComponent_a_2_Template, 2, 1, "a", 2);
        i0.ɵɵtemplate(3, PoMenuPanelItemComponent_ng_template_3_Template, 2, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.menuItemInternal.type === "internalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.menuItemInternal.type === "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.menuItemInternal.type === "noLink");
    } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i3.RouterLinkWithHref, i4.PoTooltipDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuPanelItemComponent, [{
        type: Component,
        args: [{ selector: 'po-menu-panel-item', template: "<!-- menu com link interno -->\r\n<a *ngIf=\"menuItemInternal.type === 'internalLink'\" [routerLink]=\"menuItemInternal.link\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n</a>\r\n\r\n<!-- menu com link externo -->\r\n<a *ngIf=\"menuItemInternal.type === 'externalLink'\" [href]=\"menuItemInternal.link\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n</a>\r\n\r\n<!-- menu sem link -->\r\n<a *ngIf=\"menuItemInternal.type === 'noLink'\" href=\"javascript:;\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n</a>\r\n\r\n<ng-template #menuItemTemplate>\r\n  <div\r\n    class=\"po-menu-panel-item\"\r\n    p-tooltip-position=\"right\"\r\n    [class.po-menu-panel-item-selected]=\"menuItemInternal.isSelected\"\r\n    [p-tooltip]=\"menuItemInternal.label\"\r\n    (click)=\"clickMenuItem($event)\"\r\n  >\r\n    <span class=\"po-icon {{ menuItemInternal.icon }}\"></span>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.PoMenuPanelItemsService }]; }, { menuItemInternal: [{
            type: Input,
            args: ['p-menu-item-internal']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1wYW5lbC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51LXBhbmVsL3BvLW1lbnUtcGFuZWwtaXRlbS9wby1tZW51LXBhbmVsLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUtcGFuZWwvcG8tbWVudS1wYW5lbC1pdGVtL3BvLW1lbnUtcGFuZWwtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNFbEUsd0JBQWtFOzs7SUFEcEUsNEJBQXlGO0lBQ3ZGLCtGQUFrRTtJQUNwRSxpQkFBSTs7OztJQUZnRCx5REFBb0M7SUFDdkUsZUFBa0M7SUFBbEMsc0NBQWtDOzs7SUFLakQsd0JBQWtFOzs7SUFEcEUsNEJBQW1GO0lBQ2pGLCtGQUFrRTtJQUNwRSxpQkFBSTs7OztJQUZnRCxxRUFBOEI7SUFDakUsZUFBa0M7SUFBbEMsc0NBQWtDOzs7SUFLakQsd0JBQWtFOzs7SUFEcEUsNEJBQWtFO0lBQ2hFLCtGQUFrRTtJQUNwRSxpQkFBSTs7OztJQURhLGVBQWtDO0lBQWxDLHNDQUFrQzs7OztJQUlqRCw4QkFNQztJQURDLGdMQUFTLGVBQUEsNEJBQXFCLENBQUEsSUFBQztJQUUvQix1QkFBeUQ7SUFDM0QsaUJBQU07OztJQUxKLGlGQUFpRTtJQUNqRSx5REFBb0M7SUFHOUIsZUFBMkM7SUFBM0MsdUVBQTJDOztBRGhCckQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQyxZQUFvQixnQkFBeUM7UUFBekMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtJQUFHLENBQUM7SUFFakUsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUTtRQUNOLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXZCLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFDLElBQTZCO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFFTyxlQUFlLENBQUMsSUFBSTtRQUMxQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVPLDhCQUE4QjtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnR0F2Q1Usd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNqQnJDLHFFQUVJO1FBR0oscUVBRUk7UUFHSixxRUFFSTtRQUVKLDBIQVVjOztRQXhCVixtRUFBOEM7UUFLOUMsZUFBOEM7UUFBOUMsbUVBQThDO1FBSzlDLGVBQXdDO1FBQXhDLDZEQUF3Qzs7dUZETy9CLHdCQUF3QjtjQUpwQyxTQUFTOzJCQUNFLG9CQUFvQjswRUFJQyxnQkFBZ0I7a0JBQTlDLEtBQUs7bUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9NZW51UGFuZWxJdGVtSW50ZXJuYWwgfSBmcm9tICcuL3BvLW1lbnUtcGFuZWwtaXRlbS1pbnRlcm5hbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb01lbnVQYW5lbEl0ZW1zU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BvLW1lbnUtcGFuZWwtaXRlbXMuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSBpbXBsZW1lbnRhIGNhZGEgaXRlbSBkbyBwby1tZW51LXBhbmVsLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1tZW51LXBhbmVsLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tZW51LXBhbmVsLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVQYW5lbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgQElucHV0KCdwLW1lbnUtaXRlbS1pbnRlcm5hbCcpIG1lbnVJdGVtSW50ZXJuYWw6IFBvTWVudVBhbmVsSXRlbUludGVybmFsO1xyXG5cclxuICBpdGVtc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lbnVJdGVtc1NlcnZpY2U6IFBvTWVudVBhbmVsSXRlbXNTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaXRlbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gc3Vic2NyaWJlIHRvIG1lbnUgY29tcG9uZW50IG1lc3NhZ2VzXHJcbiAgICB0aGlzLnN1YnNjcmliZU1lbnVDbGlja2VkRnJvbVBhcmVudCgpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tNZW51SXRlbShldmVudCkge1xyXG4gICAgaWYgKCEoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gRW1taXQgdG8gcGFyZW50XHJcbiAgICAgIHRoaXMubWVudUl0ZW1zU2VydmljZS5zZW5kVG9QYXJlbnRNZW51Q2xpY2tlZCh0aGlzLm1lbnVJdGVtSW50ZXJuYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZU1lbnUobWVudTogUG9NZW51UGFuZWxJdGVtSW50ZXJuYWwpIHtcclxuICAgIHRoaXMubWVudUl0ZW1JbnRlcm5hbC5pc1NlbGVjdGVkID0gdGhpcy5tZW51SXRlbUludGVybmFsLmlkID09PSBtZW51LmlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzTWVudUl0ZW0obWVudSkge1xyXG4gICAgaWYgKHRoaXMubWVudUl0ZW1JbnRlcm5hbC50eXBlID09PSAnaW50ZXJuYWxMaW5rJykge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlTWVudShtZW51LmFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU1lbnVDbGlja2VkRnJvbVBhcmVudCgpIHtcclxuICAgIHRoaXMuaXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLm1lbnVJdGVtc1NlcnZpY2UucmVjZWl2ZUZyb21QYXJlbnRNZW51Q2xpY2tlZCgpLnN1YnNjcmliZShtZW51ID0+IHtcclxuICAgICAgdGhpcy5wcm9jZXNzTWVudUl0ZW0obWVudSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBtZW51IGNvbSBsaW5rIGludGVybm8gLS0+XHJcbjxhICpuZ0lmPVwibWVudUl0ZW1JbnRlcm5hbC50eXBlID09PSAnaW50ZXJuYWxMaW5rJ1wiIFtyb3V0ZXJMaW5rXT1cIm1lbnVJdGVtSW50ZXJuYWwubGlua1wiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbjwvYT5cclxuXHJcbjwhLS0gbWVudSBjb20gbGluayBleHRlcm5vIC0tPlxyXG48YSAqbmdJZj1cIm1lbnVJdGVtSW50ZXJuYWwudHlwZSA9PT0gJ2V4dGVybmFsTGluaydcIiBbaHJlZl09XCJtZW51SXRlbUludGVybmFsLmxpbmtcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L2E+XHJcblxyXG48IS0tIG1lbnUgc2VtIGxpbmsgLS0+XHJcbjxhICpuZ0lmPVwibWVudUl0ZW1JbnRlcm5hbC50eXBlID09PSAnbm9MaW5rJ1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L2E+XHJcblxyXG48bmctdGVtcGxhdGUgI21lbnVJdGVtVGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJwby1tZW51LXBhbmVsLWl0ZW1cIlxyXG4gICAgcC10b29sdGlwLXBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgW2NsYXNzLnBvLW1lbnUtcGFuZWwtaXRlbS1zZWxlY3RlZF09XCJtZW51SXRlbUludGVybmFsLmlzU2VsZWN0ZWRcIlxyXG4gICAgW3AtdG9vbHRpcF09XCJtZW51SXRlbUludGVybmFsLmxhYmVsXCJcclxuICAgIChjbGljayk9XCJjbGlja01lbnVJdGVtKCRldmVudClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiB7eyBtZW51SXRlbUludGVybmFsLmljb24gfX1cIj48L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==