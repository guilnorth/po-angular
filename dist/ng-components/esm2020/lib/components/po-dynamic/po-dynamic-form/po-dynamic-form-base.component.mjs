import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { InputBoolean } from '../../../decorators';
import { convertToBoolean } from '../../../utils/util';
import * as i0 from "@angular/core";
/**
 *
 * @description
 *
 * Componente para criação de formulários dinâmicos a partir de uma lista de objetos.
 *
 * Também é possível verificar se o formulário está válido e informar valores para a exibição de informações.
 */
export class PoDynamicFormBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Na inicialização do componente será repassado o objeto de formulário utilizado no componente,
         * podendo ser utilizado para validações e/ou detecção de mudança dos valores.
         *
         * Portanto existem duas maneiras de recuperar o formulário,
         * através de *template reference* e através do *output*, veja os exemplos abaixo:
         *
         * > *template reference*
         *
         * ```html
         *  <po-dynamic-form #dynamicForm>
         *  </po-dynamic-form>
         *
         *  <po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
         *  </po-button>
         *
         * ```
         *
         * > *Output*
         *
         * ```html
         *  ...
         *  <po-dynamic-form (p-form)="getForm($event)">
         *  </po-dynamic-form>
         *
         *  <po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
         *  </po-button>
         *  ...
         *
         * ```
         *
         * ```ts
         *  ...
         *
         *  export class AppComponent {
         *
         *    dynamicForm: NgForm;
         *
         *    getForm(form: NgForm) {
         *      this.dynamicForm = form;
         *    }
         *
         *  }
         * ```
         *
         * > Caso a propriedade `p-group-form` for verdadeira não será repassado o formulário, pois o mesmo utilizará
         * o formulário pai.
         */
        this.formOutput = new EventEmitter();
        this._groupForm = false;
        /**
         * @optional
         *
         * @description
         *
         * Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.
         *
         * Pode ser aplicado nos seguintes componentes:
         * - po-input
         * - po-number
         * - po-decimal
         * - po-textarea
         * - po-password
         *
         * Deve informar os campos que deseja receber as emissões na propriedade `p-validate-fields`.
         *
         *
         */
        this.validateOnInput = false;
    }
    /**
     * @optional
     *
     * @description
     * Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `FormControl`
     * e com isso é possível recuperar o valor do formulário e suas validações a partir do formulário pai.
     *
     * ```html
     * <form #parentForm="ngForm">
     *
     *   <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>
     *
     *  <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
     * </form>
     * ```
     */
    set groupForm(value) {
        this._groupForm = value === '' ? true : convertToBoolean(value);
    }
    get groupForm() {
        return this._groupForm;
    }
}
PoDynamicFormBaseComponent.ɵfac = function PoDynamicFormBaseComponent_Factory(t) { return new (t || PoDynamicFormBaseComponent)(); };
PoDynamicFormBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDynamicFormBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], fields: ["p-fields", "fields"], value: ["p-value", "value"], load: ["p-load", "load"], validate: ["p-validate", "validate"], validateFields: ["p-validate-fields", "validateFields"], groupForm: ["p-group-form", "groupForm"], validateOnInput: ["p-validate-on-input", "validateOnInput"] }, outputs: { formOutput: "p-form" } });
__decorate([
    InputBoolean()
], PoDynamicFormBaseComponent.prototype, "validateOnInput", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicFormBaseComponent, [{
        type: Directive
    }], null, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], fields: [{
            type: Input,
            args: ['p-fields']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], formOutput: [{
            type: Output,
            args: ['p-form']
        }], load: [{
            type: Input,
            args: ['p-load']
        }], validate: [{
            type: Input,
            args: ['p-validate']
        }], validateFields: [{
            type: Input,
            args: ['p-validate-fields']
        }], groupForm: [{
            type: Input,
            args: ['p-group-form']
        }], validateOnInput: [{
            type: Input,
            args: ['p-validate-on-input']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy1mb3JtLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWR5bmFtaWMvcG8tZHluYW1pYy1mb3JtL3BvLWR5bmFtaWMtZm9ybS1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBSXZEOzs7Ozs7O0dBT0c7QUFFSCxNQUFNLE9BQU8sMEJBQTBCO0lBRHZDO1FBcURFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FtREc7UUFDZSxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUF1RnhFLGVBQVUsR0FBYSxLQUFLLENBQUM7UUEwQnJDOzs7Ozs7Ozs7Ozs7Ozs7OztXQWlCRztRQUMyQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztLQUNoRjtJQTNDQzs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxJQUEyQixTQUFTLENBQUMsS0FBYztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFRLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztvR0F2TlUsMEJBQTBCOzZFQUExQiwwQkFBMEI7QUEyT1M7SUFBZixZQUFZLEVBQUU7bUVBQWtDO3VGQTNPcEUsMEJBQTBCO2NBRHRDLFNBQVM7Z0JBU2UsU0FBUztrQkFBL0IsS0FBSzttQkFBQyxjQUFjO1lBZ0NGLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQVVDLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQXNERSxVQUFVO2tCQUEzQixNQUFNO21CQUFDLFFBQVE7WUFrQ0MsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBMENNLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQVNTLGNBQWM7a0JBQXpDLEtBQUs7bUJBQUMsbUJBQW1CO1lBb0JDLFNBQVM7a0JBQW5DLEtBQUs7bUJBQUMsY0FBYztZQTBCeUIsZUFBZTtrQkFBNUQsS0FBSzttQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtRmllbGQgfSBmcm9tICcuL3BvLWR5bmFtaWMtZm9ybS1maWVsZC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHBhcmEgY3JpYcOnw6NvIGRlIGZvcm11bMOhcmlvcyBkaW7Dom1pY29zIGEgcGFydGlyIGRlIHVtYSBsaXN0YSBkZSBvYmpldG9zLlxyXG4gKlxyXG4gKiBUYW1iw6ltIMOpIHBvc3PDrXZlbCB2ZXJpZmljYXIgc2UgbyBmb3JtdWzDoXJpbyBlc3TDoSB2w6FsaWRvIGUgaW5mb3JtYXIgdmFsb3JlcyBwYXJhIGEgZXhpYmnDp8OjbyBkZSBpbmZvcm1hw6fDtWVzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0R5bmFtaWNGb3JtQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE5vbWUgZGEgcHJvcHJpZWRhZGUsIGF0cmlidcOtZGEgYW8gYFBvRHluYW1pY0Zvcm1GaWVsZC5wcm9wZXJ0eWAsIHF1ZSBpbmljaWFyw6EgbyBjYW1wbyBjb20gZm9jby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1mb2N1cycpIGF1dG9Gb2N1cz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBDb2xlw6fDo28gZGUgb2JqZXRvcyBxdWUgaW1wbGVtZW50YW0gYSBpbnRlcmZhY2UgYFBvRHluYW1pY0Zvcm1GaWVsZGAsIHBhcmEgZGVmaW5pw6fDo28gZG9zIGNhbXBvcyBxdWUgc2Vyw6NvIGNyaWFkb3NcclxuICAgKiBkaW5hbWljYW1lbnRlLlxyXG4gICAqXHJcbiAgICogPiBFeDogYFsgeyBwcm9wZXJ0eTogJ25hbWUnIH0gXWBcclxuICAgKlxyXG4gICAqIFJlZ3JhcyBkZSB0aXBhZ2VtIGUgY3JpYcOnw6NvIGRvcyBjb21wb25lbnRlczpcclxuICAgKlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqYm9vbGVhbiogbyBjb21wb25lbnRlIGNyaWFkbyBzZXLDoSBvIGBwby1zd2l0Y2hgLlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqY3VycmVuY3kqIGUgbsOjbyBzZWphIGluZm9ybWFkbyB1bSAqbWFzayogb3UgKnBhdHRlcm4qIG8gY29tcG9uZW50ZSBjcmlhZG8gc2Vyw6EgbyBgcG8tZGVjaW1hbGAsXHJcbiAgICogY2FzbyBzZWphIGluZm9ybWFkbyB1bSAqbWFzayogb3UgKnBhdHRlcm4qIG8gY29tcG9uZW50ZSBjcmlhZG8gc2Vyw6EgbyBgcG8taW5wdXRgLlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqbnVtYmVyKiBlIG7Do28gc2VqYSBpbmZvcm1hZG8gdW0gKm1hc2sqIG91ICpwYXR0ZXJuKiBvIGNvbXBvbmVudGUgY3JpYWRvIHNlcsOhIG8gYHBvLW51bWJlcmAsIGNhc28gc2VqYVxyXG4gICAqIGluZm9ybWFkbyB1bSAqbWFzayogb3UgKnBhdHRlcm4qIG8gY29tcG9uZW50ZSBjcmlhZG8gc2Vyw6EgbyBgcG8taW5wdXRgLlxyXG4gICAqIC0gQ2FzbyBhIGxpc3RhIHBvc3N1YSBhIHByb3ByaWVkYWRlIGBvcHRpb25zYCBlIGEgbWVzbWEgcG9zc3VhIGF0w6kgMyBpdGVucyBvIGNvbXBvbmVudGUgY3JpYWRvIHNlcsOhIG8gYHBvLXJhZGlvLWdyb3VwYFxyXG4gICAqIG91IGBwby1jaGVja2JveC1ncm91cGAgc2UgaW5mb3JtYXIgYSBwcm9wcmllZGFkZSBgb3B0aW9uc011bHRpYC5cclxuICAgKiAtIENhc28gYSBtZXNtYSBwb3NzdWEgMyBvdSBtYWlzIGl0ZW5zLCBzZXLDoSBjcmlhZG8gbyBjb21wb25lbnRlIGBwby1zZWxlY3RgIG91LCBgcG8tbXVsdGlzZWxlY3RgIHNlIGEgcHJvcHJpZWRhZGUgYG9wdGlvbnNNdWx0aWBcclxuICAgKiBmb3IgdmVyZGFkZWlyYS5cclxuICAgKiAtIENhc28gbyAqdHlwZSogaW5mb3JtYWRvIHNlamEgKmRhdGUqIG91ICpkYXRldGltZSogbyBjb21wb25lbnRlIGNyaWFkbyBzZXLDoSBvIGBwby1kYXRlcGlja2VyYC5cclxuICAgKiAtIENhc28gc2VqYSBpbmZvcm1hZG8gYSBwcm9wcmllZGFkZSBgb3B0aW9uc1NlcnZpY2VgIG8gY29tcG9uZW50ZSBjcmlhZG8gc2Vyw6EgbyBgcG8tY29tYm9gLlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqdGltZSogbyBjb21wb25lbnRlIGNyaWFkbyBzZXLDoSB1bSBgcG8taW5wdXRgIHBvZGVuZG8gcmVjZWJlciB1bSAqbWFzayogcGFyYSBmb3JtYXRhclxyXG4gICAqIG8gdmFsb3IgZXhpYmlkbywgY2FzbyBuw6NvIHNlamEgaW5mb3JtYWRvIHVtICptYXNrKiBvIGNvbXBvbmVudGUgc2Vyw6EgY3JpYWRvIGNvbSBhIG3DoXNjYXJhICc5OTo5OScgcG9yIHBhZHLDo28uXHJcbiAgICogLSBDYXNvIGEgbGlzdGEgcG9zc3VhIGEgcHJvcHJpZWRhZGUgYHJvd3NgIGUgZXN0YSBzZWphIGRlZmluaWRhIGNvbSB2YWxvciBtYWlvciBvdSBpZ3VhbCBhIDMgbyBjb21wb25lbnRlIGNyaWFkbyBzZXLDoVxyXG4gICAqIG8gYHBvLXRleHRhcmVhYCwgY2FzbyBvIHZhbG9yIGRhIHByb3ByaWVkYWRlIGByb3dzYCBzZWphIG1lbm9yIHF1ZSAzIG8gY29tcG9uZW50ZSBjcmlhZG8gc2Vyw6EgbyBgcG8taW5wdXRgLlxyXG4gICAqIC0gQ2FzbyBzZWphIGluZm9ybWFkYSBhIHByb3ByaWVkYWRlIGBzZWNyZXRgIG8gY29tcG9uZW50ZSBjcmlhZG8gc2Vyw6EgbyBgcG8tcGFzc3dvcmRgLlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqc3RyaW5nKiBvIGNvbXBvbmVudGUgY3JpYWRvIHNlcsOhIG8gYHBvLWlucHV0YC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBbXWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmllbGRzJykgZmllbGRzOiBBcnJheTxQb0R5bmFtaWNGb3JtRmllbGQ+O1xyXG5cclxuICAvKipcclxuICAgKiBPYmpldG8gcXVlIHNlcsOhIHV0aWxpemFkbyBjb21vIHZhbG9yIHBhcmEgZXhpYmlyIGFzIGluZm9ybWHDp8O1ZXMsIHNlcsOhIHJlY3VwZXJhZG8gZSBwcmVlbmNoaWRvIGF0cmF2w6lzIGRvIGF0cmlidXRvICpwcm9wZXJ0eSpcclxuICAgKiBkb3Mgb2JqZXRvcyBjb250aWRvcyBuYSBwcm9wcmlkYWRlIGBwLWZpZWxkc2AuXHJcbiAgICpcclxuICAgKiBQb2RlIGluaWNpYXIgY29tIHZhbG9yIG91IGFwZW5hcyBjb20gdW0gb2JqZXRvIHZhemlvIHF1ZSBzZXLDoSBwcmVlbmNoaWRvIGNvbmZvcm1lIGRlc2NyaXRvIGFjaW1hLlxyXG4gICAqXHJcbiAgICogPiBFeDogYHsgbmFtZTogJ3BvJyB9YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBOYSBpbmljaWFsaXphw6fDo28gZG8gY29tcG9uZW50ZSBzZXLDoSByZXBhc3NhZG8gbyBvYmpldG8gZGUgZm9ybXVsw6FyaW8gdXRpbGl6YWRvIG5vIGNvbXBvbmVudGUsXHJcbiAgICogcG9kZW5kbyBzZXIgdXRpbGl6YWRvIHBhcmEgdmFsaWRhw6fDtWVzIGUvb3UgZGV0ZWPDp8OjbyBkZSBtdWRhbsOnYSBkb3MgdmFsb3Jlcy5cclxuICAgKlxyXG4gICAqIFBvcnRhbnRvIGV4aXN0ZW0gZHVhcyBtYW5laXJhcyBkZSByZWN1cGVyYXIgbyBmb3JtdWzDoXJpbyxcclxuICAgKiBhdHJhdsOpcyBkZSAqdGVtcGxhdGUgcmVmZXJlbmNlKiBlIGF0cmF2w6lzIGRvICpvdXRwdXQqLCB2ZWphIG9zIGV4ZW1wbG9zIGFiYWl4bzpcclxuICAgKlxyXG4gICAqID4gKnRlbXBsYXRlIHJlZmVyZW5jZSpcclxuICAgKlxyXG4gICAqIGBgYGh0bWxcclxuICAgKiAgPHBvLWR5bmFtaWMtZm9ybSAjZHluYW1pY0Zvcm0+XHJcbiAgICogIDwvcG8tZHluYW1pYy1mb3JtPlxyXG4gICAqXHJcbiAgICogIDxwby1idXR0b24gcC1sYWJlbD1cIkFkaWNpb25hclwiIFtwLWRpc2FibGVkXT1cImR5bmFtaWNGb3JtPy5mb3JtLmludmFsaWRcIj5cclxuICAgKiAgPC9wby1idXR0b24+XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gKk91dHB1dCpcclxuICAgKlxyXG4gICAqIGBgYGh0bWxcclxuICAgKiAgLi4uXHJcbiAgICogIDxwby1keW5hbWljLWZvcm0gKHAtZm9ybSk9XCJnZXRGb3JtKCRldmVudClcIj5cclxuICAgKiAgPC9wby1keW5hbWljLWZvcm0+XHJcbiAgICpcclxuICAgKiAgPHBvLWJ1dHRvbiBwLWxhYmVsPVwiQWRpY2lvbmFyXCIgW3AtZGlzYWJsZWRdPVwiZHluYW1pY0Zvcm0/LmludmFsaWRcIj5cclxuICAgKiAgPC9wby1idXR0b24+XHJcbiAgICogIC4uLlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBgYGB0c1xyXG4gICAqICAuLi5cclxuICAgKlxyXG4gICAqICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgKlxyXG4gICAqICAgIGR5bmFtaWNGb3JtOiBOZ0Zvcm07XHJcbiAgICpcclxuICAgKiAgICBnZXRGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAqICAgICAgdGhpcy5keW5hbWljRm9ybSA9IGZvcm07XHJcbiAgICogICAgfVxyXG4gICAqXHJcbiAgICogIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gQ2FzbyBhIHByb3ByaWVkYWRlIGBwLWdyb3VwLWZvcm1gIGZvciB2ZXJkYWRlaXJhIG7Do28gc2Vyw6EgcmVwYXNzYWRvIG8gZm9ybXVsw6FyaW8sIHBvaXMgbyBtZXNtbyB1dGlsaXphcsOhXHJcbiAgICogbyBmb3JtdWzDoXJpbyBwYWkuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1mb3JtJykgZm9ybU91dHB1dDogRXZlbnRFbWl0dGVyPE5nRm9ybT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nRm9ybT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gb3Ugc2VydmnDp28gcXVlIHNlcsOhIGV4ZWN1dGFkbyBuYSBpbmljaWFsaXphw6fDo28gZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIEEgcHJvcHJpZWRhZGUgYWNlaXRhIG9zIHNlZ3VpbnRlcyB0aXBvczpcclxuICAgKiAtIGBzdHJpbmdgOiAqRW5kcG9pbnQqIHVzYWRvIHBlbG8gY29tcG9uZW50ZSBwYXJhIHJlcXVpc2nDp8OjbyB2aWEgYFBPU1RgLlxyXG4gICAqIC0gYGZ1bmN0aW9uYDogTcOpdG9kbyBxdWUgc2Vyw6EgZXhlY3V0YWRvLlxyXG4gICAqXHJcbiAgICogQW8gc2VyIGV4ZWN1dGFkbywgaXLDoSByZWNlYmVyIGNvbW8gcGFyw6JtZXRybyBvIG9iamV0byBpbmZvcm1hZG8gbm8gYHAtdmFsdWVgLlxyXG4gICAqXHJcbiAgICogTyByZXRvcm5vIGRlc3RhIGZ1bsOnw6NvIGRldmUgc2VyIGRvIHRpcG8gW1BvRHluYW1pY0Zvcm1Mb2FkXShkb2N1bWVudGF0aW9uL3BvLWR5bmFtaWMtZm9ybSNwby1keW5hbWljLWZvcm0tbG9hZCksXHJcbiAgICogb25kZSBvIHVzdcOhcmlvIHBvZGVyw6EgZGV0ZXJtaW5hciBhcyBub3ZhcyBhdHVhbGl6YcOnw7VlcyBkb3MgY2FtcG9zLCB2YWxvcmVzIGUgZGV0ZXJtaW5hciBvIGNhbXBvIGEgc2VyIGZvY2Fkby5cclxuICAgKlxyXG4gICAqIFBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogb25Mb2FkRmllbGRzKCk6IFBvRHluYW1pY0Zvcm1Mb2FkIHtcclxuICAgKlxyXG4gICAqICAgcmV0dXJuIHtcclxuICAgKiAgICAgdmFsdWU6IHsgY3BmOiB1bmRlZmluZWQgfSxcclxuICAgKiAgICAgZmllbGRzOiBbXHJcbiAgICogICAgICAgeyBwcm9wZXJ0eTogJ2NwZicgfVxyXG4gICAqICAgICBdLFxyXG4gICAqICAgICBmb2N1czogJ2NwZidcclxuICAgKiAgIH07XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUGFyYSByZWZlcmVuY2lhciBhIHN1YSBmdW7Dp8OjbyB1dGlsaXplIGEgcHJvcHJpZWRhZGUgYGJpbmRgLCBwb3IgZXhlbXBsbzpcclxuICAgKiBgYGBcclxuICAgKiAgW3AtbG9hZF09XCJvbkxvYWRGaWVsZHMuYmluZCh0aGlzKVwiXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxvYWQnKSBsb2FkPzogc3RyaW5nIHwgRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIG91IHNlcnZpw6dvIHBhcmEgdmFsaWRhciBhcyAqKm11ZGFuw6dhcyBkbyBmb3JtdWzDoXJpbyoqLlxyXG4gICAqXHJcbiAgICogQSBwcm9wcmllZGFkZSBhY2VpdGEgb3Mgc2VndWludGVzIHRpcG9zOlxyXG4gICAqIC0gYHN0cmluZ2A6ICpFbmRwb2ludCogdXNhZG8gcGVsbyBjb21wb25lbnRlIHBhcmEgcmVxdWlzacOnw6NvIHZpYSBgUE9TVGAuXHJcbiAgICogLSBgZnVuY3Rpb25gOiBNw6l0b2RvIHF1ZSBzZXLDoSBleGVjdXRhZG8uXHJcbiAgICpcclxuICAgKiBBbyBzZXIgZXhlY3V0YWRvLCBpcsOhIHJlY2ViZXIgY29tbyBwYXLDom1ldHJvIHVtIG9iamV0byBjb20gbyBub21lIGRhIHByb3ByaWVkYWRlXHJcbiAgICogYWx0ZXJhZGEgZSBvIG5vdm8gdmFsb3IsIGNvbmZvcm1lIGEgaW50ZXJmYWNlIGBQb0R5bmFtaWNGb3JtRmllbGRDaGFuZ2VkYDpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIHsgcHJvcGVydHk6ICdwcm9wZXJ0eSBuYW1lJywgdmFsdWU6ICduZXcgdmFsdWUnIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIE8gcmV0b3JubyBkZXN0YSBmdW7Dp8OjbyBkZXZlIHNlciBkbyB0aXBvIFtQb0R5bmFtaWNGb3JtVmFsaWRhdGlvbl0oZG9jdW1lbnRhdGlvbi9wby1keW5hbWljLWZvcm0jcG8tZHluYW1pYy1mb3JtLXZhbGlkYXRpb24pLFxyXG4gICAqIG9uZGUgbyB1c3XDoXJpbyBwb2RlcsOhIGRldGVybWluYXIgYXMgbm92YXMgYXR1YWxpemHDp8O1ZXMgZG9zIGNhbXBvcy5cclxuICAgKiBQb3IgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIG9uQ2hhbmdlRmllbGRzKGNoYW5nZVZhbHVlKTogUG9EeW5hbWljRm9ybVZhbGlkYXRpb24ge1xyXG4gICAqXHJcbiAgICogaWYgKGNoYW5nZVZhbHVlLnByb3BlcnR5ID09PSAnc3RhdGUnKSB7XHJcbiAgICpcclxuICAgKiAgIHJldHVybiB7XHJcbiAgICogICAgIHZhbHVlOiB7IGNpdHk6IHVuZGVmaW5lZCB9LFxyXG4gICAqICAgICBmaWVsZHM6IFtcclxuICAgKiAgICAgICB7IHByb3BlcnR5OiAnY2l0eScsIG9wdGlvbnM6IHRoaXMuZ2V0Q2l0eShjaGFuZ2VWYWx1ZS52YWx1ZS5zdGF0ZSkgfVxyXG4gICAqICAgICBdLFxyXG4gICAqICAgICBmb2N1czogJ2NpdHknXHJcbiAgICogICB9O1xyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIFBhcmEgcmVmZXJlbmNpYXIgYSBzdWEgZnVuw6fDo28gdXRpbGl6ZSBhIHByb3ByaWVkYWRlIGBiaW5kYCwgcG9yIGV4ZW1wbG86XHJcbiAgICogYGBgXHJcbiAgICogIFtwLXZhbGlkYXRlXT1cInRoaXMubXlGdW5jdGlvbi5iaW5kKHRoaXMpXCJcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gU2UgaG91dmVyIHVtYSBsaXN0YSBkZSBjYW1wb3MgcGFyYSB2YWxpZGHDp8OjbyBkZWZpbmlkYSBlbSBgcC12YWxpZGF0ZS1maWVsZHNgLCBhIHByb3ByaWVkYWRlIGB2YWxpZGF0ZWAgc8OzIHJlY2ViZXLDoSBvIGRpc3Bhcm8gcGFyYSBvcyBjYW1wb3MgZXF1aXZhbGVudGVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC12YWxpZGF0ZScpIHZhbGlkYXRlPzogc3RyaW5nIHwgRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBxdWUgZGVmaW5lIG9zIGNhbXBvcyBxdWUgaXLDo28gZGlzcGFyYXIgbyB2YWxpZGF0ZSBkbyBmb3JtLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC12YWxpZGF0ZS1maWVsZHMnKSB2YWxpZGF0ZUZpZWxkcz86IEFycmF5PHN0cmluZz47XHJcblxyXG4gIHByaXZhdGUgX2dyb3VwRm9ybT86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBBbyBpbmZvcm1hciBlc3RhIHByb3ByaWVkYWRlLCBvIGNvbXBvbmVudGUgcGFzc2Fyw6EgYSB1dGlsaXphciBvIGZvcm11bMOhcmlvIHBhaSBwYXJhIGNyaWFyIG9zIGBGb3JtQ29udHJvbGBcclxuICAgKiBlIGNvbSBpc3NvIMOpIHBvc3PDrXZlbCByZWN1cGVyYXIgbyB2YWxvciBkbyBmb3JtdWzDoXJpbyBlIHN1YXMgdmFsaWRhw6fDtWVzIGEgcGFydGlyIGRvIGZvcm11bMOhcmlvIHBhaS5cclxuICAgKlxyXG4gICAqIGBgYGh0bWxcclxuICAgKiA8Zm9ybSAjcGFyZW50Rm9ybT1cIm5nRm9ybVwiPlxyXG4gICAqXHJcbiAgICogICA8cG8tZHluYW1pYy1mb3JtIHAtZ3JvdXAtZm9ybSBbcC1maWVsZHNdPVwiZmllbGRzXCI+PC9wby1keW5hbWljLWZvcm0+XHJcbiAgICpcclxuICAgKiAgPHBvLWJ1dHRvbiBwLWxhYmVsPVwiQWRpY2lvbmFyXCIgW3AtZGlzYWJsZWRdPVwicGFyZW50Rm9ybS5pbnZhbGlkXCI+PC9wby1idXR0b24+XHJcbiAgICogPC9mb3JtPlxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1ncm91cC1mb3JtJykgc2V0IGdyb3VwRm9ybSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZ3JvdXBGb3JtID0gPGFueT52YWx1ZSA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZ3JvdXBGb3JtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwRm9ybTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBbyBpbmZvcm1hciBlc3RhIHByb3ByaWVkYWRlLCBvIGNvbXBvbmVudGUgcGFzc2Fyw6EgYSBlbWl0aXIgbyB2YWxvciBhIGNhZGEgY2FyYWN0ZXJlIGRpZ2l0YWRvLlxyXG4gICAqXHJcbiAgICogUG9kZSBzZXIgYXBsaWNhZG8gbm9zIHNlZ3VpbnRlcyBjb21wb25lbnRlczpcclxuICAgKiAtIHBvLWlucHV0XHJcbiAgICogLSBwby1udW1iZXJcclxuICAgKiAtIHBvLWRlY2ltYWxcclxuICAgKiAtIHBvLXRleHRhcmVhXHJcbiAgICogLSBwby1wYXNzd29yZFxyXG4gICAqXHJcbiAgICogRGV2ZSBpbmZvcm1hciBvcyBjYW1wb3MgcXVlIGRlc2VqYSByZWNlYmVyIGFzIGVtaXNzw7VlcyBuYSBwcm9wcmllZGFkZSBgcC12YWxpZGF0ZS1maWVsZHNgLlxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdmFsaWRhdGUtb24taW5wdXQnKSBASW5wdXRCb29sZWFuKCkgdmFsaWRhdGVPbklucHV0OiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuIl19