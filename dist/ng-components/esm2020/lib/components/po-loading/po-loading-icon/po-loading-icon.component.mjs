import { Component, Input } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que exibe um ícone de carregamento de conteúdo. A cor padrão para ele é a primária conforme o tema utilizado.
 * É possível alterá-la para um tom cinza conforme a necessidade.
 */
export class PoLoadingIconComponent {
    /**
     * @optional
     *
     * @description
     *
     * Definição para cor neutra (cinza) para o ícone de carregamento.
     *
     * @default `false`
     */
    set neutralColor(value) {
        this._neutralColor = convertToBoolean(value);
    }
    get neutralColor() {
        return this._neutralColor;
    }
}
PoLoadingIconComponent.ɵfac = function PoLoadingIconComponent_Factory(t) { return new (t || PoLoadingIconComponent)(); };
PoLoadingIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoLoadingIconComponent, selectors: [["po-loading-icon"]], inputs: { neutralColor: ["p-neutral-color", "neutralColor"] }, decls: 9, vars: 2, consts: [[1, "po-loading-icon"], [1, "po-loading-icon-bar", "po-loading-icon-bar-1"], [1, "po-loading-icon-bar", "po-loading-icon-bar-2"], [1, "po-loading-icon-bar", "po-loading-icon-bar-3"], [1, "po-loading-icon-bar", "po-loading-icon-bar-4"], [1, "po-loading-icon-bar", "po-loading-icon-bar-5"], [1, "po-loading-icon-bar", "po-loading-icon-bar-6"], [1, "po-loading-icon-bar", "po-loading-icon-bar-7"], [1, "po-loading-icon-bar", "po-loading-icon-bar-8"]], template: function PoLoadingIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "span", 1)(2, "span", 2)(3, "span", 3)(4, "span", 4)(5, "span", 5)(6, "span", 6)(7, "span", 7)(8, "span", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-loading-icon-neutral-color", ctx.neutralColor);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoadingIconComponent, [{
        type: Component,
        args: [{ selector: 'po-loading-icon', template: "<div class=\"po-loading-icon\" [class.po-loading-icon-neutral-color]=\"neutralColor\">\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-1\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-2\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-3\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-4\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-5\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-6\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-7\"></span>\r\n  <span class=\"po-loading-icon-bar po-loading-icon-bar-8\"></span>\r\n</div>\r\n" }]
    }], null, { neutralColor: [{
            type: Input,
            args: ['p-neutral-color']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9hZGluZy1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1sb2FkaW5nL3BvLWxvYWRpbmctaWNvbi9wby1sb2FkaW5nLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWxvYWRpbmcvcG8tbG9hZGluZy1pY29uL3BvLWxvYWRpbmctaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQ7Ozs7Ozs7R0FPRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFHakM7Ozs7Ozs7O09BUUc7SUFDSCxJQUE4QixZQUFZLENBQUMsS0FBYztRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7NEZBbEJVLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDaEJuQyw4QkFBa0Y7UUFDaEYsMEJBQStELGNBQUEsY0FBQSxjQUFBLGNBQUEsY0FBQSxjQUFBLGNBQUE7UUFRakUsaUJBQU07O1FBVHVCLGlFQUFvRDs7dUZEZ0JwRSxzQkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSxpQkFBaUI7Z0JBZUcsWUFBWTtrQkFBekMsS0FBSzttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSBleGliZSB1bSDDrWNvbmUgZGUgY2FycmVnYW1lbnRvIGRlIGNvbnRlw7pkby4gQSBjb3IgcGFkcsOjbyBwYXJhIGVsZSDDqSBhIHByaW3DoXJpYSBjb25mb3JtZSBvIHRlbWEgdXRpbGl6YWRvLlxyXG4gKiDDiSBwb3Nzw612ZWwgYWx0ZXLDoS1sYSBwYXJhIHVtIHRvbSBjaW56YSBjb25mb3JtZSBhIG5lY2Vzc2lkYWRlLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1sb2FkaW5nLWljb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tbG9hZGluZy1pY29uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Mb2FkaW5nSWNvbkNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfbmV1dHJhbENvbG9yOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5pw6fDo28gcGFyYSBjb3IgbmV1dHJhIChjaW56YSkgcGFyYSBvIMOtY29uZSBkZSBjYXJyZWdhbWVudG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW5ldXRyYWwtY29sb3InKSBzZXQgbmV1dHJhbENvbG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9uZXV0cmFsQ29sb3IgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuZXV0cmFsQ29sb3IoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmV1dHJhbENvbG9yO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tbG9hZGluZy1pY29uXCIgW2NsYXNzLnBvLWxvYWRpbmctaWNvbi1uZXV0cmFsLWNvbG9yXT1cIm5ldXRyYWxDb2xvclwiPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tbG9hZGluZy1pY29uLWJhciBwby1sb2FkaW5nLWljb24tYmFyLTFcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1sb2FkaW5nLWljb24tYmFyIHBvLWxvYWRpbmctaWNvbi1iYXItMlwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cInBvLWxvYWRpbmctaWNvbi1iYXIgcG8tbG9hZGluZy1pY29uLWJhci0zXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tbG9hZGluZy1pY29uLWJhciBwby1sb2FkaW5nLWljb24tYmFyLTRcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1sb2FkaW5nLWljb24tYmFyIHBvLWxvYWRpbmctaWNvbi1iYXItNVwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cInBvLWxvYWRpbmctaWNvbi1iYXIgcG8tbG9hZGluZy1pY29uLWJhci02XCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tbG9hZGluZy1pY29uLWJhciBwby1sb2FkaW5nLWljb24tYmFyLTdcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1sb2FkaW5nLWljb24tYmFyIHBvLWxvYWRpbmctaWNvbi1iYXItOFwiPjwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==