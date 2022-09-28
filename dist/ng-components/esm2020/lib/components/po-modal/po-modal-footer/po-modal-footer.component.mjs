import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @description
 *
 * O componente `po-modal-footer` pode ser utilizado para incluir os botões de ações no rodapé da [`PoModal`](/documentation/po-modal), bem como para dar liberdade ao desenvolvedor de incluir outros itens necessários.
 * > Como boa prática, deve-se observar a utilização de apenas um botão primário.
 *
 * ```
 * <po-modal p-title="Title Modal" #modal>
 *  <po-modal-footer>
 *    <po-button p-label="Close" (p-click)="modal.close()"> </po-button>
 *    <po-button p-label="Clean" (p-click)="clean()"> </po-button>
 *    <po-button p-label="Confirm" p-kind="primary" (p-click)="confirm()"> </po-button>
 *  </po-modal-footer>
 * </po-modal>
 * ```
 */
export class PoModalFooterComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Desabilita o alinhamento padrão, à direita, dos botões de ações que ficam no rodapé da [`PoModal`](/documentation/po-modal).
         *
         * > Caso a propriedade esteja habilitada, o alinhamento deverá ser a esquerda e pode ser personalizado.
         *
         * @default false
         */
        this.disabledAlign = false;
    }
}
PoModalFooterComponent.ɵfac = function PoModalFooterComponent_Factory(t) { return new (t || PoModalFooterComponent)(); };
PoModalFooterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalFooterComponent, selectors: [["po-modal-footer"]], inputs: { disabledAlign: ["p-disabled-align", "disabledAlign"] }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "po-modal-footer"]], template: function PoModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-modal-footer-align-right", !ctx.disabledAlign);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalFooterComponent, [{
        type: Component,
        args: [{ selector: 'po-modal-footer', template: "<div class=\"po-modal-footer\" [class.po-modal-footer-align-right]=\"!disabledAlign\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
    }], null, { disabledAlign: [{
            type: Input,
            args: ['p-disabled-align']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tb2RhbC9wby1tb2RhbC1mb290ZXIvcG8tbW9kYWwtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tb2RhbC9wby1tb2RhbC1mb290ZXIvcG8tbW9kYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFakQ7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBS0gsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQUtFOzs7Ozs7Ozs7O1dBVUc7UUFDd0Isa0JBQWEsR0FBYSxLQUFLLENBQUM7S0FDNUQ7OzRGQWJZLHNCQUFzQjt5RUFBdEIsc0JBQXNCOztRQ3RCbkMsOEJBQWtGO1FBQ2hGLGtCQUF5QjtRQUMzQixpQkFBTTs7UUFGdUIsaUVBQW9EOzt1RkRzQnBFLHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLGlCQUFpQjtnQkFlQSxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1tb2RhbC1mb290ZXJgIHBvZGUgc2VyIHV0aWxpemFkbyBwYXJhIGluY2x1aXIgb3MgYm90w7VlcyBkZSBhw6fDtWVzIG5vIHJvZGFww6kgZGEgW2BQb01vZGFsYF0oL2RvY3VtZW50YXRpb24vcG8tbW9kYWwpLCBiZW0gY29tbyBwYXJhIGRhciBsaWJlcmRhZGUgYW8gZGVzZW52b2x2ZWRvciBkZSBpbmNsdWlyIG91dHJvcyBpdGVucyBuZWNlc3PDoXJpb3MuXHJcbiAqID4gQ29tbyBib2EgcHLDoXRpY2EsIGRldmUtc2Ugb2JzZXJ2YXIgYSB1dGlsaXphw6fDo28gZGUgYXBlbmFzIHVtIGJvdMOjbyBwcmltw6FyaW8uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8cG8tbW9kYWwgcC10aXRsZT1cIlRpdGxlIE1vZGFsXCIgI21vZGFsPlxyXG4gKiAgPHBvLW1vZGFsLWZvb3Rlcj5cclxuICogICAgPHBvLWJ1dHRvbiBwLWxhYmVsPVwiQ2xvc2VcIiAocC1jbGljayk9XCJtb2RhbC5jbG9zZSgpXCI+IDwvcG8tYnV0dG9uPlxyXG4gKiAgICA8cG8tYnV0dG9uIHAtbGFiZWw9XCJDbGVhblwiIChwLWNsaWNrKT1cImNsZWFuKClcIj4gPC9wby1idXR0b24+XHJcbiAqICAgIDxwby1idXR0b24gcC1sYWJlbD1cIkNvbmZpcm1cIiBwLWtpbmQ9XCJwcmltYXJ5XCIgKHAtY2xpY2spPVwiY29uZmlybSgpXCI+IDwvcG8tYnV0dG9uPlxyXG4gKiAgPC9wby1tb2RhbC1mb290ZXI+XHJcbiAqIDwvcG8tbW9kYWw+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1tb2RhbC1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tb2RhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb01vZGFsRm9vdGVyQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzYWJpbGl0YSBvIGFsaW5oYW1lbnRvIHBhZHLDo28sIMOgIGRpcmVpdGEsIGRvcyBib3TDtWVzIGRlIGHDp8O1ZXMgcXVlIGZpY2FtIG5vIHJvZGFww6kgZGEgW2BQb01vZGFsYF0oL2RvY3VtZW50YXRpb24vcG8tbW9kYWwpLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIGEgcHJvcHJpZWRhZGUgZXN0ZWphIGhhYmlsaXRhZGEsIG8gYWxpbmhhbWVudG8gZGV2ZXLDoSBzZXIgYSBlc3F1ZXJkYSBlIHBvZGUgc2VyIHBlcnNvbmFsaXphZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZC1hbGlnbicpIGRpc2FibGVkQWxpZ24/OiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLW1vZGFsLWZvb3RlclwiIFtjbGFzcy5wby1tb2RhbC1mb290ZXItYWxpZ24tcmlnaHRdPVwiIWRpc2FibGVkQWxpZ25cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=