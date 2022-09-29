import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoFieldContainerBottomComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵelement(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorPattern, " ");
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente de uso interno, responsável por gerar uma margem inferior nos componentes que utilizam o po-field-container.
 * Essa margem inferior pode conter uma mensagem de erro.
 */
export class PoFieldContainerBottomComponent {
    constructor() {
        /**
         * Mensagem que será apresentada quando o pattern ou a máscara não for satisfeita.
         * Obs: Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
         */
        this.errorPattern = '';
    }
}
PoFieldContainerBottomComponent.ɵfac = function PoFieldContainerBottomComponent_Factory(t) { return new (t || PoFieldContainerBottomComponent)(); };
PoFieldContainerBottomComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoFieldContainerBottomComponent, selectors: [["po-field-container-bottom"]], inputs: { errorPattern: ["p-error-pattern", "errorPattern"] }, decls: 2, vars: 1, consts: [[1, "po-field-container-bottom"], ["class", "po-field-container-bottom-text-error", 4, "ngIf"], [1, "po-field-container-bottom-text-error"], [1, "po-icon", "po-icon-warning", "po-field-container-icon-error"]], template: function PoFieldContainerBottomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoFieldContainerBottomComponent_span_1_Template, 3, 1, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.errorPattern);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoFieldContainerBottomComponent, [{
        type: Component,
        args: [{ selector: 'po-field-container-bottom', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-field-container-bottom\">\r\n  <span *ngIf=\"errorPattern\" class=\"po-field-container-bottom-text-error\">\r\n    <span class=\"po-icon po-icon-warning po-field-container-icon-error\"></span>\r\n    {{ errorPattern }}\r\n  </span>\r\n</div>\r\n" }]
    }], null, { errorPattern: [{
            type: Input,
            args: ['p-error-pattern']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZmllbGQtY29udGFpbmVyLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZmllbGQtY29udGFpbmVyL3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20vcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZmllbGQtY29udGFpbmVyL3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20vcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0N4RSwrQkFBd0U7SUFDdEUsMEJBQTJFO0lBQzNFLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBREwsZUFDRjtJQURFLG9EQUNGOztBREZGOzs7Ozs7O0dBT0c7QUFNSCxNQUFNLE9BQU8sK0JBQStCO0lBTDVDO1FBTUU7OztXQUdHO1FBQ3VCLGlCQUFZLEdBQVksRUFBRSxDQUFDO0tBQ3REOzs4R0FOWSwrQkFBK0I7a0ZBQS9CLCtCQUErQjtRQ2Y1Qyw4QkFBdUM7UUFDckMsa0ZBR087UUFDVCxpQkFBTTs7UUFKRyxlQUFrQjtRQUFsQix1Q0FBa0I7O3VGRGNkLCtCQUErQjtjQUwzQyxTQUFTOzJCQUNFLDJCQUEyQixtQkFFcEIsdUJBQXVCLENBQUMsTUFBTTtnQkFPckIsWUFBWTtrQkFBckMsS0FBSzttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBkZSB1c28gaW50ZXJubywgcmVzcG9uc8OhdmVsIHBvciBnZXJhciB1bWEgbWFyZ2VtIGluZmVyaW9yIG5vcyBjb21wb25lbnRlcyBxdWUgdXRpbGl6YW0gbyBwby1maWVsZC1jb250YWluZXIuXHJcbiAqIEVzc2EgbWFyZ2VtIGluZmVyaW9yIHBvZGUgY29udGVyIHVtYSBtZW5zYWdlbSBkZSBlcnJvLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1maWVsZC1jb250YWluZXItYm90dG9tJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRmllbGRDb250YWluZXJCb3R0b21Db21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1lbnNhZ2VtIHF1ZSBzZXLDoSBhcHJlc2VudGFkYSBxdWFuZG8gbyBwYXR0ZXJuIG91IGEgbcOhc2NhcmEgbsOjbyBmb3Igc2F0aXNmZWl0YS5cclxuICAgKiBPYnM6IEVzdGEgbWVuc2FnZW0gbsOjbyDDqSBhcHJlc2VudGFkYSBxdWFuZG8gbyBjYW1wbyBlc3RpdmVyIHZhemlvLCBtZXNtbyBxdWUgZWxlIHNlamEgcmVxdWVyaWRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1lcnJvci1wYXR0ZXJuJykgZXJyb3JQYXR0ZXJuPzogc3RyaW5nID0gJyc7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b21cIj5cclxuICA8c3BhbiAqbmdJZj1cImVycm9yUGF0dGVyblwiIGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWJvdHRvbS10ZXh0LWVycm9yXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi13YXJuaW5nIHBvLWZpZWxkLWNvbnRhaW5lci1pY29uLWVycm9yXCI+PC9zcGFuPlxyXG4gICAge3sgZXJyb3JQYXR0ZXJuIH19XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuIl19