import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoListViewComponent
 *
 * @description
 *
 * Esta diretiva permite que sejam apresentadas informações essenciais de cada item.
 *
 * Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.
 *  - Item: `item` determina o item da linha corrente.
 *  - Índice: `index` determina o índice da linha corrente.
 *
 * Esta diretiva pode ser usada de duas formas: explícita ou *syntax sugar*. Veja a seguir ambos, respectivamente:
 *
 * ```
 * ...
 * <po-list-view
 *   p-property-title="name"
 *   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">
 *
 *   <ng-template p-list-view-content-template let-item let-code="index">
 *     <div class="po-row">
 *       <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
 *       <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
 *     </div>
 *   </ng-template>
 *
 * </po-list-view>
 *
 * ...
 * ```
 *
 * ```
 * ...
 * <po-list-view
 *    p-property-title="name"
 *    [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">
 *
 *    <div *p-list-view-content-template="let item, let i=index" class="po-row">
 *      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
 *    </div>
 * </po-list-view>
 * ...
 *
 * ```
 *
 * A diretiva **p-list-view-content-template**, possibilita também alterar o título dos itens. Para isto,
 * é necessário atribuir a referência da função que faz a alteração, à propriedade `p-title`,
 * a mesma deve retornar um valor do tipo *string*. Veja o exemplo a seguir:
 *
 * ```
 * ...
 * @Component({
 *    selector: 'app-root',
 *    template: `
 *      ...
 *      <po-list-view
 *        [p-items]="items">
 *        <ng-template p-list-view-content-template let-item [p-title]="customTitle">
 *          <div class="po-row">
 *            <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
 *          </div>
 *        </ng-template>
 *      ...
 *    `
 * })
 * export class AppComponent {
 *    public items = [{
 *      code: 1200,
 *      product: 'Rice',
 *      customer: 'Supermarket 1',
 *    }, {
 *      code: 1355,
 *      product: 'Bean',
 *      customer: 'Supermarket 2'
 *    }];
 *
 *    customTitle(item) {
 *      return `${item.code} - ${item.product}`;
 *    }
 * }
 * ```
 */
export class PoListViewContentTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoListViewContentTemplateDirective.ɵfac = function PoListViewContentTemplateDirective_Factory(t) { return new (t || PoListViewContentTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoListViewContentTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoListViewContentTemplateDirective, selectors: [["", "p-list-view-content-template", ""]], inputs: { title: ["p-title", "title"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoListViewContentTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-list-view-content-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGlzdC12aWV3LWNvbnRlbnQtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWxpc3Qtdmlldy9wby1saXN0LXZpZXctY29udGVudC10ZW1wbGF0ZS9wby1saXN0LXZpZXctY29udGVudC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBRTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRkc7QUFJSCxNQUFNLE9BQU8sa0NBQWtDO0lBWTdDLHNFQUFzRTtJQUN0RSxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDOztvSEFiekMsa0NBQWtDO3FGQUFsQyxrQ0FBa0M7dUZBQWxDLGtDQUFrQztjQUg5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQzthQUMzQzs4REFXbUIsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAdXNlZEJ5IFBvTGlzdFZpZXdDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGEgZGlyZXRpdmEgcGVybWl0ZSBxdWUgc2VqYW0gYXByZXNlbnRhZGFzIGluZm9ybWHDp8O1ZXMgZXNzZW5jaWFpcyBkZSBjYWRhIGl0ZW0uXHJcbiAqXHJcbiAqIERldmUtc2UgdXRpbGl6YXIgY29tbyBwYXLDom1ldHJvIGEgcmVmZXLDqm5jaWEgZG8gaXRlbSBlL291IMOtbmRpY2UsIHNlbmRvIHBvciBwYWRyw6NvIG8gaXRlbS5cclxuICogIC0gSXRlbTogYGl0ZW1gIGRldGVybWluYSBvIGl0ZW0gZGEgbGluaGEgY29ycmVudGUuXHJcbiAqICAtIMONbmRpY2U6IGBpbmRleGAgZGV0ZXJtaW5hIG8gw61uZGljZSBkYSBsaW5oYSBjb3JyZW50ZS5cclxuICpcclxuICogRXN0YSBkaXJldGl2YSBwb2RlIHNlciB1c2FkYSBkZSBkdWFzIGZvcm1hczogZXhwbMOtY2l0YSBvdSAqc3ludGF4IHN1Z2FyKi4gVmVqYSBhIHNlZ3VpciBhbWJvcywgcmVzcGVjdGl2YW1lbnRlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1saXN0LXZpZXdcclxuICogICBwLXByb3BlcnR5LXRpdGxlPVwibmFtZVwiXHJcbiAqICAgW3AtaXRlbXNdPVwiW3tpZDogMSwgbmFtZTogXCJSZWdpc3RlclwiLCBlbWFpbDogcmVnaXN0ZXJAcG8tdWkuY29tfV1cIj5cclxuICpcclxuICogICA8bmctdGVtcGxhdGUgcC1saXN0LXZpZXctY29udGVudC10ZW1wbGF0ZSBsZXQtaXRlbSBsZXQtY29kZT1cImluZGV4XCI+XHJcbiAqICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAqICAgICAgIDxwby1pbmZvIGNsYXNzPVwicG8tbWQtNlwiIHAtbGFiZWw9XCJDb2RlXCIgW3AtdmFsdWVdPVwiY29kZVwiPjwvcG8taW5mbz5cclxuICogICAgICAgPHBvLWluZm8gY2xhc3M9XCJwby1tZC02XCIgcC1sYWJlbD1cIkVtYWlsXCIgW3AtdmFsdWVdPVwiaXRlbS5lbWFpbFwiPjwvcG8taW5mbz5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgIDwvbmctdGVtcGxhdGU+XHJcbiAqXHJcbiAqIDwvcG8tbGlzdC12aWV3PlxyXG4gKlxyXG4gKiAuLi5cclxuICogYGBgXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPHBvLWxpc3Qtdmlld1xyXG4gKiAgICBwLXByb3BlcnR5LXRpdGxlPVwibmFtZVwiXHJcbiAqICAgIFtwLWl0ZW1zXT1cIlt7aWQ6IDEsIG5hbWU6IFwiUmVnaXN0ZXJcIiwgZW1haWw6IHJlZ2lzdGVyQHBvLXVpLmNvbX1dXCI+XHJcbiAqXHJcbiAqICAgIDxkaXYgKnAtbGlzdC12aWV3LWNvbnRlbnQtdGVtcGxhdGU9XCJsZXQgaXRlbSwgbGV0IGk9aW5kZXhcIiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gKiAgICAgIDxwby1pbmZvIGNsYXNzPVwicG8tbWQtMTJcIiBwLWxhYmVsPVwiRW1haWxcIiBbcC12YWx1ZV09XCJpdGVtLmVtYWlsXCI+PC9wby1pbmZvPlxyXG4gKiAgICA8L2Rpdj5cclxuICogPC9wby1saXN0LXZpZXc+XHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogQSBkaXJldGl2YSAqKnAtbGlzdC12aWV3LWNvbnRlbnQtdGVtcGxhdGUqKiwgcG9zc2liaWxpdGEgdGFtYsOpbSBhbHRlcmFyIG8gdMOtdHVsbyBkb3MgaXRlbnMuIFBhcmEgaXN0byxcclxuICogw6kgbmVjZXNzw6FyaW8gYXRyaWJ1aXIgYSByZWZlcsOqbmNpYSBkYSBmdW7Dp8OjbyBxdWUgZmF6IGEgYWx0ZXJhw6fDo28sIMOgIHByb3ByaWVkYWRlIGBwLXRpdGxlYCxcclxuICogYSBtZXNtYSBkZXZlIHJldG9ybmFyIHVtIHZhbG9yIGRvIHRpcG8gKnN0cmluZyouIFZlamEgbyBleGVtcGxvIGEgc2VndWlyOlxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICogICAgdGVtcGxhdGU6IGBcclxuICogICAgICAuLi5cclxuICogICAgICA8cG8tbGlzdC12aWV3XHJcbiAqICAgICAgICBbcC1pdGVtc109XCJpdGVtc1wiPlxyXG4gKiAgICAgICAgPG5nLXRlbXBsYXRlIHAtbGlzdC12aWV3LWNvbnRlbnQtdGVtcGxhdGUgbGV0LWl0ZW0gW3AtdGl0bGVdPVwiY3VzdG9tVGl0bGVcIj5cclxuICogICAgICAgICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gKiAgICAgICAgICAgIDxwby1pbmZvIGNsYXNzPVwicG8tbWQtMTJcIiBwLWxhYmVsPVwiQ3VzdG9tZXJcIiBbcC12YWx1ZV09XCJpdGVtLmN1c3RvbWVyXCI+PC9wby1pbmZvPlxyXG4gKiAgICAgICAgICA8L2Rpdj5cclxuICogICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqICAgICAgLi4uXHJcbiAqICAgIGBcclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAqICAgIHB1YmxpYyBpdGVtcyA9IFt7XHJcbiAqICAgICAgY29kZTogMTIwMCxcclxuICogICAgICBwcm9kdWN0OiAnUmljZScsXHJcbiAqICAgICAgY3VzdG9tZXI6ICdTdXBlcm1hcmtldCAxJyxcclxuICogICAgfSwge1xyXG4gKiAgICAgIGNvZGU6IDEzNTUsXHJcbiAqICAgICAgcHJvZHVjdDogJ0JlYW4nLFxyXG4gKiAgICAgIGN1c3RvbWVyOiAnU3VwZXJtYXJrZXQgMidcclxuICogICAgfV07XHJcbiAqXHJcbiAqICAgIGN1c3RvbVRpdGxlKGl0ZW0pIHtcclxuICogICAgICByZXR1cm4gYCR7aXRlbS5jb2RlfSAtICR7aXRlbS5wcm9kdWN0fWA7XHJcbiAqICAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3AtbGlzdC12aWV3LWNvbnRlbnQtdGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9MaXN0Vmlld0NvbnRlbnRUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBkZXZlIHJldG9ybmFyIHVtIHZhbG9yIGRvIHRpcG8gYHN0cmluZ2AsIHF1ZSBzZXLDoSB1dGlsaXphZG8gY29tbyBvIHTDrXR1bG8gZGUgY2FkYSBpdGVtIGRhIGxpc3RhLlxyXG4gICAqXHJcbiAgICogPiBQb3IgcGFyw6JtZXRybyBzZXLDoSBlbnZpYWRvIG8gaXRlbSBjb3JyZW50ZSwgb25kZSBwb2RlcsOhIHV0aWxpesOhLWxvIHBhcmEgcmVjdXBlcmFyIGRhZG9zIHNvYnJlIG8gbWVzbW8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU6IChpdGVtKSA9PiBzdHJpbmc7XHJcblxyXG4gIC8vIE5lY2Vzc8OhcmlvIG1hbnRlciB0ZW1wbGF0ZVJlZiBwYXJhIG8gZnVuY2lvbmFtZW50byBkbyByb3cgdGVtcGxhdGUuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcbiJdfQ==