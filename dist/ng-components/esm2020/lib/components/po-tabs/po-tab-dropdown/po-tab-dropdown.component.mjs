import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-popover/po-popover.component";
import * as i3 from "../po-tab-button/po-tab-button.component";
const _c0 = ["popover"];
const _c1 = ["tabDrop"];
function PoTabDropdownComponent_po_tab_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-tab-button", 8);
    i0.ɵɵlistener("p-activated", function PoTabDropdownComponent_po_tab_button_8_Template_po_tab_button_p_activated_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const tab_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.activated.emit(tab_r3)); })("p-change-state", function PoTabDropdownComponent_po_tab_button_8_Template_po_tab_button_p_change_state_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const tab_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.changeState.emit(tab_r3)); })("p-click", function PoTabDropdownComponent_po_tab_button_8_Template_po_tab_button_p_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const tab_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(6); _r1.close(); return i0.ɵɵresetView(ctx_r7.click.emit(tab_r3)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-tab-dropdown-button-active", tab_r3.active);
    i0.ɵɵproperty("p-active", tab_r3.active)("p-disabled", tab_r3.disabled)("p-hide", tab_r3.hide)("p-id", tab_r3.id)("p-label", tab_r3.label)("p-small", ctx_r2.small);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para agrupamento de componentes `po-tab-button` que os rendereiza em uma um caixa de diálogo
 * no formato de lista.
 */
export class PoTabDropdownComponent {
    constructor() {
        // Lista de abas
        this.tabs = [];
        // Evento que será emitido ao ativar uma aba
        this.activated = new EventEmitter();
        // Evento que será emitido a aba for desabilitada ou ocultada
        this.changeState = new EventEmitter();
        // Evento de click
        this.click = new EventEmitter();
    }
    getContainerClass() {
        return this.small ? 'po-tab-dropdown-container-sm' : 'po-tab-dropdown-container';
    }
    togglePopover() {
        this.popover.isHidden ? this.popover.open() : this.popover.close();
    }
}
PoTabDropdownComponent.ɵfac = function PoTabDropdownComponent_Factory(t) { return new (t || PoTabDropdownComponent)(); };
PoTabDropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTabDropdownComponent, selectors: [["po-tab-dropdown"]], viewQuery: function PoTabDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabDropdown = _t.first);
    } }, inputs: { label: ["p-label", "label"], small: ["p-small", "small"], tabs: ["p-tabs", "tabs"] }, outputs: { activated: "p-activated", changeState: "p-change-state", click: "p-click" }, decls: 9, vars: 8, consts: [[1, "po-tab-dropdown-content", "po-tab-button-md", 3, "keyup.enter"], ["tabDrop", ""], [1, "po-tab-button-label"], [1, "po-icon", 3, "ngClass"], ["p-hide-arrow", "", "p-position", "bottom", 3, "p-target"], ["popover", ""], [3, "ngClass"], ["class", "po-tab-dropdown-button", 3, "po-tab-dropdown-button-active", "p-active", "p-disabled", "p-hide", "p-id", "p-label", "p-small", "p-activated", "p-change-state", "p-click", 4, "ngFor", "ngForOf"], [1, "po-tab-dropdown-button", 3, "p-active", "p-disabled", "p-hide", "p-id", "p-label", "p-small", "p-activated", "p-change-state", "p-click"]], template: function PoTabDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("keyup.enter", function PoTabDropdownComponent_Template_div_keyup_enter_0_listener() { return ctx.togglePopover(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelement(4, "span", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "po-popover", 4, 5)(7, "div", 6);
        i0.ɵɵtemplate(8, PoTabDropdownComponent_po_tab_button_8_Template, 1, 8, "po-tab-button", 7);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵclassProp("po-tab-button-sm", ctx.small);
        i0.ɵɵattribute("tabindex", 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", _r1.isHidden ? "po-icon-arrow-down" : "po-icon-arrow-up");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-target", ctx.tabDropdown);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.getContainerClass());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, dependencies: [i1.NgClass, i1.NgForOf, i2.PoPopoverComponent, i3.PoTabButtonComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabDropdownComponent, [{
        type: Component,
        args: [{ selector: 'po-tab-dropdown', template: "<div\r\n  #tabDrop\r\n  class=\"po-tab-dropdown-content po-tab-button-md\"\r\n  [attr.tabindex]=\"0\"\r\n  [class.po-tab-button-sm]=\"small\"\r\n  (keyup.enter)=\"togglePopover()\"\r\n>\r\n  <div class=\"po-tab-button-label\">\r\n    {{ label }}\r\n    <span class=\"po-icon\" [ngClass]=\"popover.isHidden ? 'po-icon-arrow-down' : 'po-icon-arrow-up'\"> </span>\r\n  </div>\r\n</div>\r\n\r\n<po-popover #popover p-hide-arrow p-position=\"bottom\" [p-target]=\"tabDropdown\">\r\n  <div [ngClass]=\"getContainerClass()\">\r\n    <po-tab-button\r\n      *ngFor=\"let tab of tabs\"\r\n      class=\"po-tab-dropdown-button\"\r\n      [class.po-tab-dropdown-button-active]=\"tab.active\"\r\n      [p-active]=\"tab.active\"\r\n      [p-disabled]=\"tab.disabled\"\r\n      [p-hide]=\"tab.hide\"\r\n      [p-id]=\"tab.id\"\r\n      [p-label]=\"tab.label\"\r\n      [p-small]=\"small\"\r\n      (p-activated)=\"activated.emit(tab)\"\r\n      (p-change-state)=\"changeState.emit(tab)\"\r\n      (p-click)=\"popover.close(); click.emit(tab)\"\r\n    >\r\n    </po-tab-button>\r\n  </div>\r\n</po-popover>\r\n" }]
    }], null, { popover: [{
            type: ViewChild,
            args: ['popover', { static: true }]
        }], tabDropdown: [{
            type: ViewChild,
            args: ['tabDrop', { read: ElementRef, static: true }]
        }], label: [{
            type: Input,
            args: ['p-label']
        }], small: [{
            type: Input,
            args: ['p-small']
        }], tabs: [{
            type: Input,
            args: ['p-tabs']
        }], activated: [{
            type: Output,
            args: ['p-activated']
        }], changeState: [{
            type: Output,
            args: ['p-change-state']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFiLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJzL3BvLXRhYi1kcm9wZG93bi9wby10YWItZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYnMvcG8tdGFiLWRyb3Bkb3duL3BvLXRhYi1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ2UxRix3Q0FhQztJQUhDLDBQQUFlLGVBQUEsNkJBQW1CLENBQUEsSUFBQyxtUEFDakIsZUFBQSwrQkFBcUIsQ0FBQSxJQURKLDZQQUV4QixXQUFlLFNBQUUsZUFBQSx5QkFBZSxDQUFBLElBRlI7SUFJckMsaUJBQWdCOzs7O0lBWGQsOERBQWtEO0lBQ2xELHdDQUF1QiwrQkFBQSx1QkFBQSxtQkFBQSx5QkFBQSx5QkFBQTs7QURkN0I7Ozs7Ozs7R0FPRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUFjRSxnQkFBZ0I7UUFDQyxTQUFJLEdBQTBCLEVBQUUsQ0FBQztRQUVsRCw0Q0FBNEM7UUFDckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0QsNkRBQTZEO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVoRSxrQkFBa0I7UUFDQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQVNwRDtJQVBDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQ25GLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckUsQ0FBQzs7NEZBNUJVLHNCQUFzQjt5RUFBdEIsc0JBQXNCOzsrQkFFSCxVQUFVOzs7Ozs7UUNuQjFDLGlDQU1DO1FBREMsNEdBQWUsbUJBQWUsSUFBQztRQUUvQiw4QkFBaUM7UUFDL0IsWUFDQTtRQUFBLDBCQUF1RztRQUN6RyxpQkFBTSxFQUFBO1FBR1Isd0NBQStFLGFBQUE7UUFFM0UsMkZBY2dCO1FBQ2xCLGlCQUFNLEVBQUE7OztRQTFCTiw2Q0FBZ0M7UUFEaEMsNkJBQW1CO1FBS2pCLGVBQ0E7UUFEQSwwQ0FDQTtRQUFzQixlQUF3RTtRQUF4RSxrRkFBd0U7UUFJNUMsZUFBd0I7UUFBeEIsMENBQXdCO1FBQ3ZFLGVBQStCO1FBQS9CLGlEQUErQjtRQUVoQixlQUFPO1FBQVAsa0NBQU87O3VGRENoQixzQkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSxpQkFBaUI7Z0JBSWEsT0FBTztrQkFBOUMsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ29CLFdBQVc7a0JBQXBFLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBR3RDLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdFLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUdRLFNBQVM7a0JBQS9CLE1BQU07bUJBQUMsYUFBYTtZQUdLLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCO1lBR0wsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Qb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcG8tcG9wb3Zlci9wby1wb3BvdmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vcG8tdGFiL3BvLXRhYi5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBwYXJhIGFncnVwYW1lbnRvIGRlIGNvbXBvbmVudGVzIGBwby10YWItYnV0dG9uYCBxdWUgb3MgcmVuZGVyZWl6YSBlbSB1bWEgdW0gY2FpeGEgZGUgZGnDoWxvZ29cclxuICogbm8gZm9ybWF0byBkZSBsaXN0YS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tdGFiLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFiLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJEcm9wZG93bkNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncG9wb3ZlcicsIHsgc3RhdGljOiB0cnVlIH0pIHBvcG92ZXI6IFBvUG9wb3ZlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCd0YWJEcm9wJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgdGFiRHJvcGRvd246IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8vIFLDs3R1bG8gZG8gYHBvLXRhYi1idXR0b25gXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gRGltaW51aSBvIHRhbWFuaG8gZG8gYm90w6NvXHJcbiAgQElucHV0KCdwLXNtYWxsJykgc21hbGw6IGJvb2xlYW47XHJcblxyXG4gIC8vIExpc3RhIGRlIGFiYXNcclxuICBASW5wdXQoJ3AtdGFicycpIHRhYnM6IEFycmF5PFBvVGFiQ29tcG9uZW50PiA9IFtdO1xyXG5cclxuICAvLyBFdmVudG8gcXVlIHNlcsOhIGVtaXRpZG8gYW8gYXRpdmFyIHVtYSBhYmFcclxuICBAT3V0cHV0KCdwLWFjdGl2YXRlZCcpIGFjdGl2YXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBFdmVudG8gcXVlIHNlcsOhIGVtaXRpZG8gYSBhYmEgZm9yIGRlc2FiaWxpdGFkYSBvdSBvY3VsdGFkYVxyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlLXN0YXRlJykgY2hhbmdlU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gRXZlbnRvIGRlIGNsaWNrXHJcbiAgQE91dHB1dCgncC1jbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGdldENvbnRhaW5lckNsYXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc21hbGwgPyAncG8tdGFiLWRyb3Bkb3duLWNvbnRhaW5lci1zbScgOiAncG8tdGFiLWRyb3Bkb3duLWNvbnRhaW5lcic7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQb3BvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3BvdmVyLmlzSGlkZGVuID8gdGhpcy5wb3BvdmVyLm9wZW4oKSA6IHRoaXMucG9wb3Zlci5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgI3RhYkRyb3BcclxuICBjbGFzcz1cInBvLXRhYi1kcm9wZG93bi1jb250ZW50IHBvLXRhYi1idXR0b24tbWRcIlxyXG4gIFthdHRyLnRhYmluZGV4XT1cIjBcIlxyXG4gIFtjbGFzcy5wby10YWItYnV0dG9uLXNtXT1cInNtYWxsXCJcclxuICAoa2V5dXAuZW50ZXIpPVwidG9nZ2xlUG9wb3ZlcigpXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJwby10YWItYnV0dG9uLWxhYmVsXCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJwby1pY29uXCIgW25nQ2xhc3NdPVwicG9wb3Zlci5pc0hpZGRlbiA/ICdwby1pY29uLWFycm93LWRvd24nIDogJ3BvLWljb24tYXJyb3ctdXAnXCI+IDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48cG8tcG9wb3ZlciAjcG9wb3ZlciBwLWhpZGUtYXJyb3cgcC1wb3NpdGlvbj1cImJvdHRvbVwiIFtwLXRhcmdldF09XCJ0YWJEcm9wZG93blwiPlxyXG4gIDxkaXYgW25nQ2xhc3NdPVwiZ2V0Q29udGFpbmVyQ2xhc3MoKVwiPlxyXG4gICAgPHBvLXRhYi1idXR0b25cclxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgICAgY2xhc3M9XCJwby10YWItZHJvcGRvd24tYnV0dG9uXCJcclxuICAgICAgW2NsYXNzLnBvLXRhYi1kcm9wZG93bi1idXR0b24tYWN0aXZlXT1cInRhYi5hY3RpdmVcIlxyXG4gICAgICBbcC1hY3RpdmVdPVwidGFiLmFjdGl2ZVwiXHJcbiAgICAgIFtwLWRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgIFtwLWhpZGVdPVwidGFiLmhpZGVcIlxyXG4gICAgICBbcC1pZF09XCJ0YWIuaWRcIlxyXG4gICAgICBbcC1sYWJlbF09XCJ0YWIubGFiZWxcIlxyXG4gICAgICBbcC1zbWFsbF09XCJzbWFsbFwiXHJcbiAgICAgIChwLWFjdGl2YXRlZCk9XCJhY3RpdmF0ZWQuZW1pdCh0YWIpXCJcclxuICAgICAgKHAtY2hhbmdlLXN0YXRlKT1cImNoYW5nZVN0YXRlLmVtaXQodGFiKVwiXHJcbiAgICAgIChwLWNsaWNrKT1cInBvcG92ZXIuY2xvc2UoKTsgY2xpY2suZW1pdCh0YWIpXCJcclxuICAgID5cclxuICAgIDwvcG8tdGFiLWJ1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9wby1wb3BvdmVyPlxyXG4iXX0=