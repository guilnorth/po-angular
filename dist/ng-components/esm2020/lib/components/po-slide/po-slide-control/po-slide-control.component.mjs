import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a seta que controla a passagem de itens do `po-slide`.
 */
export class PoSlideControlComponent {
    constructor() {
        /** Evento emitido ao clicar em um controle. */
        this.click = new EventEmitter();
    }
}
PoSlideControlComponent.ɵfac = function PoSlideControlComponent_Factory(t) { return new (t || PoSlideControlComponent)(); };
PoSlideControlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoSlideControlComponent, selectors: [["po-slide-control"]], inputs: { control: ["p-control", "control"] }, outputs: { click: "p-click" }, decls: 3, vars: 6, consts: [[1, "po-slide-arrow-circle", 3, "click"]], template: function PoSlideControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "div", 0);
        i0.ɵɵlistener("click", function PoSlideControlComponent_Template_div_click_1_listener() { return ctx.click.emit(); });
        i0.ɵɵelement(2, "div");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("po-slide-control-", ctx.control, "");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("po-slide-arrow po-slide-arrow-", ctx.control, "");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideControlComponent, [{
        type: Component,
        args: [{ selector: 'po-slide-control', template: "<div class=\"po-slide-control-{{ control }}\">\r\n  <div class=\"po-slide-arrow-circle\" (click)=\"click.emit()\">\r\n    <div class=\"po-slide-arrow po-slide-arrow-{{ control }}\"></div>\r\n  </div>\r\n</div>\r\n" }]
    }], null, { control: [{
            type: Input,
            args: ['p-control']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc2xpZGUvcG8tc2xpZGUtY29udHJvbC9wby1zbGlkZS1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zbGlkZS9wby1zbGlkZS1jb250cm9sL3BvLXNsaWRlLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkU7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQVFFLCtDQUErQztRQUM1QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUNwRDs7OEZBTlksdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNicEMsMkJBQTRDLGFBQUE7UUFDUCxpR0FBUyxnQkFBWSxJQUFDO1FBQ3ZELHNCQUErRDtRQUNqRSxpQkFBTSxFQUFBOztRQUhILCtEQUFzQztRQUVsQyxlQUFtRDtRQUFuRCw0RUFBbUQ7O3VGRFcvQyx1QkFBdUI7Y0FKbkMsU0FBUzsyQkFDRSxrQkFBa0I7Z0JBS1IsT0FBTztrQkFBMUIsS0FBSzttQkFBQyxXQUFXO1lBR0MsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBhIHNldGEgcXVlIGNvbnRyb2xhIGEgcGFzc2FnZW0gZGUgaXRlbnMgZG8gYHBvLXNsaWRlYC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tc2xpZGUtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXNsaWRlLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1NsaWRlQ29udHJvbENvbXBvbmVudCB7XHJcbiAgLyoqIFRpcG8gZGUgY29udHJvbGUgcXVlIGFjZWl0YSBvcyB2YWxvcmVzOiAncHJldmlvdXMnIGUgJ25leHQnLiAqL1xyXG4gIEBJbnB1dCgncC1jb250cm9sJykgY29udHJvbDogc3RyaW5nO1xyXG5cclxuICAvKiogRXZlbnRvIGVtaXRpZG8gYW8gY2xpY2FyIGVtIHVtIGNvbnRyb2xlLiAqL1xyXG4gIEBPdXRwdXQoJ3AtY2xpY2snKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1zbGlkZS1jb250cm9sLXt7IGNvbnRyb2wgfX1cIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tc2xpZGUtYXJyb3ctY2lyY2xlXCIgKGNsaWNrKT1cImNsaWNrLmVtaXQoKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXNsaWRlLWFycm93IHBvLXNsaWRlLWFycm93LXt7IGNvbnRyb2wgfX1cIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==