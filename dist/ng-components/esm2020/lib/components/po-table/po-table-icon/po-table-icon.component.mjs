import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/po-tooltip/po-tooltip.directive";
import * as i3 from "../../po-icon/po-icon.component";
const _c0 = function (a0, a1) { return { "po-clickable": a0, "po-table-icon-disabled": a1 }; };
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por exibir um ícone na tabela.
 */
export class PoTableIconComponent {
    constructor() {
        /** Output click. */
        this.click = new EventEmitter();
    }
    get allowTooltip() {
        return !this.disabled && this.iconTooltip;
    }
    onClick(event) {
        if (this.clickable) {
            this.click.emit(event);
        }
    }
    tooltipMouseEnter() {
        if (this.allowTooltip) {
            this.tooltip = this.iconTooltip;
        }
    }
    tooltipMouseLeave() {
        this.tooltip = undefined;
    }
}
PoTableIconComponent.ɵfac = function PoTableIconComponent_Factory(t) { return new (t || PoTableIconComponent)(); };
PoTableIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableIconComponent, selectors: [["po-table-icon"]], inputs: { clickable: ["p-clickable", "clickable"], color: ["p-color", "color"], disabled: ["p-disabled", "disabled"], icon: ["p-icon", "icon"], iconTooltip: ["p-icon-tooltip", "iconTooltip"] }, outputs: { click: "p-click" }, decls: 1, vars: 9, consts: [[3, "ngClass", "p-icon", "p-tooltip", "click", "mouseenter", "mouseleave"]], template: function PoTableIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-icon", 0);
        i0.ɵɵlistener("click", function PoTableIconComponent_Template_po_icon_click_0_listener($event) { return ctx.onClick($event); })("mouseenter", function PoTableIconComponent_Template_po_icon_mouseenter_0_listener() { return ctx.tooltipMouseEnter(); })("mouseleave", function PoTableIconComponent_Template_po_icon_mouseleave_0_listener() { return ctx.tooltipMouseLeave(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("po-table-icon-content ", ctx.disabled ? "" : ctx.color, "");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0, ctx.clickable, ctx.disabled))("p-icon", ctx.icon)("p-tooltip", ctx.tooltip);
    } }, dependencies: [i1.NgClass, i2.PoTooltipDirective, i3.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableIconComponent, [{
        type: Component,
        args: [{ selector: 'po-table-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-icon\r\n  class=\"po-table-icon-content {{ disabled ? '' : color }}\"\r\n  [ngClass]=\"{ 'po-clickable': clickable, 'po-table-icon-disabled': disabled }\"\r\n  [p-icon]=\"icon\"\r\n  [p-tooltip]=\"tooltip\"\r\n  (click)=\"onClick($event)\"\r\n  (mouseenter)=\"tooltipMouseEnter()\"\r\n  (mouseleave)=\"tooltipMouseLeave()\"\r\n></po-icon>\r\n" }]
    }], null, { clickable: [{
            type: Input,
            args: ['p-clickable']
        }], color: [{
            type: Input,
            args: ['p-color']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], iconTooltip: [{
            type: Input,
            args: ['p-icon-tooltip']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFibGUvcG8tdGFibGUtaWNvbi9wby10YWJsZS1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1pY29uL3BvLXRhYmxlLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRTdHOzs7Ozs7R0FNRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFxQkUsb0JBQW9CO1FBQ0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBdUJsRTtJQW5CQyxJQUFZLFlBQVk7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzt3RkF2Q1Usb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNkakMsa0NBUUM7UUFIQyx3R0FBUyxtQkFBZSxJQUFDLCtGQUNYLHVCQUFtQixJQURSLCtGQUVYLHVCQUFtQixJQUZSO1FBRzFCLGlCQUFVOztRQVBULHNGQUF5RDtRQUN6RCxpRkFBNkUsb0JBQUEsMEJBQUE7O3VGRFlsRSxvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxlQUFlLG1CQUVSLHVCQUF1QixDQUFDLE1BQU07Z0JBSXpCLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUdGLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdLLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUdGLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUdVLFdBQVc7a0JBQW5DLEtBQUs7bUJBQUMsZ0JBQWdCO1lBR0osS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSByZXNwb25zw6F2ZWwgcG9yIGV4aWJpciB1bSDDrWNvbmUgbmEgdGFiZWxhLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10YWJsZS1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFibGUtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFibGVJY29uQ29tcG9uZW50IHtcclxuICAvKiogRGVmaW5lIHNlIG8gw61jb25lIMOpIGNsaWPDoXZlbC4gKi9cclxuICBASW5wdXQoJ3AtY2xpY2thYmxlJykgY2xpY2thYmxlOiBib29sZWFuO1xyXG5cclxuICAvKiogQ29yIGRvIMOtY29uZS4gKi9cclxuICBASW5wdXQoJ3AtY29sb3InKSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKiogRGVzYWJpbGl0YWRvLiAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKiogQ2xhc3NlIGNzcyBkbyDDrWNvbmUuICovXHJcbiAgQElucHV0KCdwLWljb24nKSBpY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLyoqIFRleHRvIGRvIHRvb2x0aXAuICovXHJcbiAgQElucHV0KCdwLWljb24tdG9vbHRpcCcpIGljb25Ub29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBPdXRwdXQgY2xpY2suICovXHJcbiAgQE91dHB1dCgncC1jbGljaycpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgdG9vbHRpcDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGdldCBhbGxvd1Rvb2x0aXAoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5pY29uVG9vbHRpcDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9vbHRpcE1vdXNlRW50ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5hbGxvd1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5pY29uVG9vbHRpcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvb2x0aXBNb3VzZUxlYXZlKCkge1xyXG4gICAgdGhpcy50b29sdGlwID0gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCI8cG8taWNvblxyXG4gIGNsYXNzPVwicG8tdGFibGUtaWNvbi1jb250ZW50IHt7IGRpc2FibGVkID8gJycgOiBjb2xvciB9fVwiXHJcbiAgW25nQ2xhc3NdPVwieyAncG8tY2xpY2thYmxlJzogY2xpY2thYmxlLCAncG8tdGFibGUtaWNvbi1kaXNhYmxlZCc6IGRpc2FibGVkIH1cIlxyXG4gIFtwLWljb25dPVwiaWNvblwiXHJcbiAgW3AtdG9vbHRpcF09XCJ0b29sdGlwXCJcclxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICAobW91c2VlbnRlcik9XCJ0b29sdGlwTW91c2VFbnRlcigpXCJcclxuICAobW91c2VsZWF2ZSk9XCJ0b29sdGlwTW91c2VMZWF2ZSgpXCJcclxuPjwvcG8taWNvbj5cclxuIl19