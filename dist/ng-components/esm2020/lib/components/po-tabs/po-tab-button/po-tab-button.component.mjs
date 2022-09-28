import { Component, EventEmitter, Input, Output } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por manipular os botões de aba.
 */
export class PoTabButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // Função sera emitida quando a tab ficar ativada
        this.activated = new EventEmitter();
        // Função sera emitida quando a tab ficar desabilitada ou escondida
        this.changeState = new EventEmitter();
        // Método recebido do usuário para ser disparado quando clicar na aba
        this.click = new EventEmitter();
    }
    // Ativa o botão
    set active(value) {
        this._active = value;
        this.emitActivated();
    }
    get active() {
        return this._active;
    }
    // Oculta o botão
    set hide(value) {
        this._hide = convertToBoolean(value);
        this.setDisplayOnHide();
    }
    get hide() {
        return this._hide;
    }
    ngOnChanges(changes) {
        if ((changes.hide && changes.hide.currentValue) || (changes.disabled && changes.disabled.currentValue)) {
            this.changeState.emit(this);
        }
    }
    onClick() {
        if (!this.disabled) {
            this.click.emit(this.id);
        }
    }
    emitActivated() {
        if (this.active) {
            this.activated.emit(this);
        }
    }
    setDisplayOnHide() {
        this.elementRef.nativeElement.style.display = this.hide ? 'none' : '';
    }
}
PoTabButtonComponent.ɵfac = function PoTabButtonComponent_Factory(t) { return new (t || PoTabButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoTabButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTabButtonComponent, selectors: [["po-tab-button"]], inputs: { disabled: ["p-disabled", "disabled"], id: ["p-id", "id"], label: ["p-label", "label"], small: ["p-small", "small"], active: ["p-active", "active"], hide: ["p-hide", "hide"] }, outputs: { activated: "p-activated", changeState: "p-change-state", click: "p-click" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 8, consts: [[1, "po-tab-button-md", 3, "click", "keyup.enter"], [1, "po-tab-button-label", "po-text-ellipsis"]], template: function PoTabButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoTabButtonComponent_Template_div_click_0_listener() { return ctx.onClick(); })("keyup.enter", function PoTabButtonComponent_Template_div_keyup_enter_0_listener() { return ctx.onClick(); });
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-tab-button-active", ctx.active)("po-tab-button-disabled", ctx.disabled)("po-tab-button-sm", ctx.small);
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : 0);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabButtonComponent, [{
        type: Component,
        args: [{ selector: 'po-tab-button', template: "<div\r\n  class=\"po-tab-button-md\"\r\n  [attr.tabindex]=\"disabled ? null : 0\"\r\n  [class.po-tab-button-active]=\"active\"\r\n  [class.po-tab-button-disabled]=\"disabled\"\r\n  [class.po-tab-button-sm]=\"small\"\r\n  (click)=\"onClick()\"\r\n  (keyup.enter)=\"onClick()\"\r\n>\r\n  <span class=\"po-tab-button-label po-text-ellipsis\">\r\n    {{ label }}\r\n  </span>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }]; }, { disabled: [{
            type: Input,
            args: ['p-disabled']
        }], id: [{
            type: Input,
            args: ['p-id']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], small: [{
            type: Input,
            args: ['p-small']
        }], activated: [{
            type: Output,
            args: ['p-activated']
        }], changeState: [{
            type: Output,
            args: ['p-change-state']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], active: [{
            type: Input,
            args: ['p-active']
        }], hide: [{
            type: Input,
            args: ['p-hide']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFiLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFicy9wby10YWItYnV0dG9uL3BvLXRhYi1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYnMvcG8tdGFiLWJ1dHRvbi9wby10YWItYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV2RDs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBK0MvQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbEMxQyxpREFBaUQ7UUFDMUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEQsbUVBQW1FO1FBQ3pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRCxxRUFBcUU7UUFDbEQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUEyQkQsQ0FBQztJQXRCOUMsZ0JBQWdCO0lBQ2hCLElBQXVCLE1BQU0sQ0FBQyxLQUFjO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsSUFBcUIsSUFBSSxDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN0RyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7d0ZBckVVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDZmpDLDhCQVFDO1FBRkMsOEZBQVMsYUFBUyxJQUFDLDZGQUNKLGFBQVMsSUFETDtRQUduQiwrQkFBbUQ7UUFDakQsWUFDRjtRQUFBLGlCQUFPLEVBQUE7O1FBUlAsa0RBQXFDLHdDQUFBLCtCQUFBO1FBRHJDLG1EQUFxQztRQVFuQyxlQUNGO1FBREUsMENBQ0Y7O3VGRElXLG9CQUFvQjtjQUpoQyxTQUFTOzJCQUNFLGVBQWU7NkRBS0osUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBR0osRUFBRTtrQkFBaEIsS0FBSzttQkFBQyxNQUFNO1lBR0ssS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR0UsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR08sU0FBUztrQkFBL0IsTUFBTTttQkFBQyxhQUFhO1lBR0ssV0FBVztrQkFBcEMsTUFBTTttQkFBQyxnQkFBZ0I7WUFHTCxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFNTSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFXSSxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHJlc3BvbnPDoXZlbCBwb3IgbWFuaXB1bGFyIG9zIGJvdMO1ZXMgZGUgYWJhLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10YWItYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFiLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFiQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAvLyBEZXNhYmlsaXRhIG8gYm90w6NvXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8vIElkZW50aWZpY2Fkb3IgZG8gY29tcG9uZW50ZVxyXG4gIEBJbnB1dCgncC1pZCcpIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8vIFLDs3R1bG8gZG8gYm90w6NvXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gRGltaW51aSBvIHRhbWFuaG8gZG8gYm90w6NvXHJcbiAgQElucHV0KCdwLXNtYWxsJykgc21hbGw6IGJvb2xlYW47XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHNlcmEgZW1pdGlkYSBxdWFuZG8gYSB0YWIgZmljYXIgYXRpdmFkYVxyXG4gIEBPdXRwdXQoJ3AtYWN0aXZhdGVkJykgYWN0aXZhdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBGdW7Dp8OjbyBzZXJhIGVtaXRpZGEgcXVhbmRvIGEgdGFiIGZpY2FyIGRlc2FiaWxpdGFkYSBvdSBlc2NvbmRpZGFcclxuICBAT3V0cHV0KCdwLWNoYW5nZS1zdGF0ZScpIGNoYW5nZVN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBNw6l0b2RvIHJlY2ViaWRvIGRvIHVzdcOhcmlvIHBhcmEgc2VyIGRpc3BhcmFkbyBxdWFuZG8gY2xpY2FyIG5hIGFiYVxyXG4gIEBPdXRwdXQoJ3AtY2xpY2snKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2hpZGU6IGJvb2xlYW47XHJcblxyXG4gIC8vIEF0aXZhIG8gYm90w6NvXHJcbiAgQElucHV0KCdwLWFjdGl2ZScpIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuZW1pdEFjdGl2YXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAvLyBPY3VsdGEgbyBib3TDo29cclxuICBASW5wdXQoJ3AtaGlkZScpIHNldCBoaWRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcblxyXG4gICAgdGhpcy5zZXREaXNwbGF5T25IaWRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoKGNoYW5nZXMuaGlkZSAmJiBjaGFuZ2VzLmhpZGUuY3VycmVudFZhbHVlKSB8fCAoY2hhbmdlcy5kaXNhYmxlZCAmJiBjaGFuZ2VzLmRpc2FibGVkLmN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZS5lbWl0KHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRBY3RpdmF0ZWQoKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWQuZW1pdCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGlzcGxheU9uSGlkZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmhpZGUgPyAnbm9uZScgOiAnJztcclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwicG8tdGFiLWJ1dHRvbi1tZFwiXHJcbiAgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyBudWxsIDogMFwiXHJcbiAgW2NsYXNzLnBvLXRhYi1idXR0b24tYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgW2NsYXNzLnBvLXRhYi1idXR0b24tZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtjbGFzcy5wby10YWItYnV0dG9uLXNtXT1cInNtYWxsXCJcclxuICAoY2xpY2spPVwib25DbGljaygpXCJcclxuICAoa2V5dXAuZW50ZXIpPVwib25DbGljaygpXCJcclxuPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tdGFiLWJ1dHRvbi1sYWJlbCBwby10ZXh0LWVsbGlwc2lzXCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==