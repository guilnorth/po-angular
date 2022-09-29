import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoSlideCirclesComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("click", function PoSlideCirclesComponent_ng_container_1_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const index_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.click.emit(index_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-slide-active-circle", index_r2 === ctx_r0.currentSlideIndex);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para o conjunto de círculos que faz a passagem de itens do `po-slide`.
 */
export class PoSlideCirclesComponent {
    constructor() {
        /** Evento emitido ao clicar em um controle. */
        this.click = new EventEmitter();
    }
}
PoSlideCirclesComponent.ɵfac = function PoSlideCirclesComponent_Factory(t) { return new (t || PoSlideCirclesComponent)(); };
PoSlideCirclesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoSlideCirclesComponent, selectors: [["po-slide-circles"]], inputs: { currentSlideIndex: ["p-current-slide-index", "currentSlideIndex"], items: ["p-items", "items"] }, outputs: { click: "p-click" }, decls: 2, vars: 1, consts: [[1, "po-slide-circles"], [4, "ngFor", "ngForOf"], [1, "po-slide-circle", 3, "click"]], template: function PoSlideCirclesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoSlideCirclesComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, dependencies: [i1.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideCirclesComponent, [{
        type: Component,
        args: [{ selector: 'po-slide-circles', template: "<div class=\"po-slide-circles\">\r\n  <ng-container *ngFor=\"let item of items; let index = index\">\r\n    <div\r\n      class=\"po-slide-circle\"\r\n      [class.po-slide-active-circle]=\"index === currentSlideIndex\"\r\n      (click)=\"click.emit(index)\"\r\n    ></div>\r\n  </ng-container>\r\n</div>\r\n" }]
    }], null, { currentSlideIndex: [{
            type: Input,
            args: ['p-current-slide-index']
        }], items: [{
            type: Input,
            args: ['p-items']
        }], click: [{
            type: Output,
            args: ['p-click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUtY2lyY2xlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc2xpZGUvcG8tc2xpZGUtY2lyY2xlcy9wby1zbGlkZS1jaXJjbGVzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zbGlkZS9wby1zbGlkZS1jaXJjbGVzL3BvLXNsaWRlLWNpcmNsZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDckUsNkJBQTREO0lBQzFELDhCQUlDO0lBREMsa09BQVMsZUFBQSwyQkFBaUIsQ0FBQSxJQUFDO0lBQzVCLGlCQUFNO0lBQ1QsMEJBQWU7Ozs7SUFIWCxlQUE0RDtJQUE1RCwrRUFBNEQ7O0FERmxFOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyx1QkFBdUI7SUFKcEM7UUFXRSwrQ0FBK0M7UUFDNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FDcEQ7OzhGQVRZLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDYnBDLDhCQUE4QjtRQUM1QiwwRkFNZTtRQUNqQixpQkFBTTs7UUFQMkIsZUFBVTtRQUFWLG1DQUFVOzt1RkRZOUIsdUJBQXVCO2NBSm5DLFNBQVM7MkJBQ0Usa0JBQWtCO2dCQUtJLGlCQUFpQjtrQkFBaEQsS0FBSzttQkFBQyx1QkFBdUI7WUFHWixLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHRyxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBwYXJhIG8gY29uanVudG8gZGUgY8OtcmN1bG9zIHF1ZSBmYXogYSBwYXNzYWdlbSBkZSBpdGVucyBkbyBgcG8tc2xpZGVgLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1zbGlkZS1jaXJjbGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tc2xpZGUtY2lyY2xlcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvU2xpZGVDaXJjbGVzQ29tcG9uZW50IHtcclxuICAvKiogSW5kZXggZG8gc2xpZGUgYXR1YWwuICovXHJcbiAgQElucHV0KCdwLWN1cnJlbnQtc2xpZGUtaW5kZXgnKSBjdXJyZW50U2xpZGVJbmRleDogbnVtYmVyO1xyXG5cclxuICAvKiogSXRlbnMgZG8gc2xpZGUuICovXHJcbiAgQElucHV0KCdwLWl0ZW1zJykgaXRlbXM6IEFycmF5PGFueT47XHJcblxyXG4gIC8qKiBFdmVudG8gZW1pdGlkbyBhbyBjbGljYXIgZW0gdW0gY29udHJvbGUuICovXHJcbiAgQE91dHB1dCgncC1jbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXNsaWRlLWNpcmNsZXNcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXggPSBpbmRleFwiPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cInBvLXNsaWRlLWNpcmNsZVwiXHJcbiAgICAgIFtjbGFzcy5wby1zbGlkZS1hY3RpdmUtY2lyY2xlXT1cImluZGV4ID09PSBjdXJyZW50U2xpZGVJbmRleFwiXHJcbiAgICAgIChjbGljayk9XCJjbGljay5lbWl0KGluZGV4KVwiXHJcbiAgICA+PC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=