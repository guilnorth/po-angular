import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente utilizado para exibição da mensagem customizada de erro em um campo de formulário.
 */
export class PoModalPasswordRecoveryErrorMessageComponent {
}
PoModalPasswordRecoveryErrorMessageComponent.ɵfac = function PoModalPasswordRecoveryErrorMessageComponent_Factory(t) { return new (t || PoModalPasswordRecoveryErrorMessageComponent)(); };
PoModalPasswordRecoveryErrorMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalPasswordRecoveryErrorMessageComponent, selectors: [["po-modal-password-recovery-error-message"]], inputs: { text: ["p-text", "text"] }, decls: 4, vars: 1, consts: [[1, "po-field-container-bottom-text-error", "po-field-container-error-item"], [1, "po-icon", "po-icon-exclamation"], [1, "po-field-container-error-text"]], template: function PoModalPasswordRecoveryErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "span", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.text);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryErrorMessageComponent, [{
        type: Component,
        args: [{ selector: 'po-modal-password-recovery-error-message', template: "<div class=\"po-field-container-bottom-text-error po-field-container-error-item\">\r\n  <span class=\"po-icon po-icon-exclamation\"></span>\r\n  <span class=\"po-field-container-error-text\">{{ text }}</span>\r\n</div>\r\n" }]
    }], null, { text: [{
            type: Input,
            args: ['p-text']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5L3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWVycm9yLW1lc3NhZ2UvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5L3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWVycm9yLW1lc3NhZ2UvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLDRDQUE0Qzs7d0lBQTVDLDRDQUE0QzsrRkFBNUMsNENBQTRDO1FDYnpELDhCQUFnRjtRQUM5RSwwQkFBaUQ7UUFDakQsK0JBQTRDO1FBQUEsWUFBVTtRQUFBLGlCQUFPLEVBQUE7O1FBQWpCLGVBQVU7UUFBViw4QkFBVTs7dUZEVzNDLDRDQUE0QztjQUp4RCxTQUFTOzJCQUNFLDBDQUEwQztnQkFLbkMsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSB1dGlsaXphZG8gcGFyYSBleGliacOnw6NvIGRhIG1lbnNhZ2VtIGN1c3RvbWl6YWRhIGRlIGVycm8gZW0gdW0gY2FtcG8gZGUgZm9ybXVsw6FyaW8uXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWVycm9yLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlFcnJvck1lc3NhZ2VDb21wb25lbnQge1xyXG4gIC8qKiBUZXh0byBleGliaWRvIG5hIG1lbnNhZ2VtIGRlIGVycm8uICovXHJcbiAgQElucHV0KCdwLXRleHQnKSB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20tdGV4dC1lcnJvciBwby1maWVsZC1jb250YWluZXItZXJyb3ItaXRlbVwiPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWV4Y2xhbWF0aW9uXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWVycm9yLXRleHRcIj57eyB0ZXh0IH19PC9zcGFuPlxyXG48L2Rpdj5cclxuIl19