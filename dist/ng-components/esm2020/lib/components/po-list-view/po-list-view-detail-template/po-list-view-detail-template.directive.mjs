import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoListViewComponent
 *
 * @description
 *
 * Esta diretiva permite que sejam apresentadas informações adicionais de cada item, construindo um
 * botão `Exibir detalhes` abaixo do conteúdo principal do item.
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
 *   [p-items]="items">
 *
 *   <ng-template p-list-view-detail-template let-item let-code="index">
 *     <div class="po-row">
 *       <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
 *       <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
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
 *    [p-items]="items">
 *    <div *p-list-view-detail-template="let item, let i=index" class="po-row">
 *      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
 *    </div>
 * </po-list-view>
 * ...
 *
 * ```
 */
export class PoListViewDetailTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoListViewDetailTemplateDirective.ɵfac = function PoListViewDetailTemplateDirective_Factory(t) { return new (t || PoListViewDetailTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoListViewDetailTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoListViewDetailTemplateDirective, selectors: [["", "p-list-view-detail-template", ""]], inputs: { showDetail: ["p-show-detail", "showDetail"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoListViewDetailTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-list-view-detail-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { showDetail: [{
            type: Input,
            args: ['p-show-detail']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGlzdC12aWV3LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbGlzdC12aWV3L3BvLWxpc3Qtdmlldy1kZXRhaWwtdGVtcGxhdGUvcG8tbGlzdC12aWV3LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDRztBQUlILE1BQU0sT0FBTyxpQ0FBaUM7SUFZNUMsc0VBQXNFO0lBQ3RFLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7O2tIQWJ6QyxpQ0FBaUM7b0ZBQWpDLGlDQUFpQzt1RkFBakMsaUNBQWlDO2NBSDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2FBQzFDOzhEQVd5QixVQUFVO2tCQUFqQyxLQUFLO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEB1c2VkQnkgUG9MaXN0Vmlld0NvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0YSBkaXJldGl2YSBwZXJtaXRlIHF1ZSBzZWphbSBhcHJlc2VudGFkYXMgaW5mb3JtYcOnw7VlcyBhZGljaW9uYWlzIGRlIGNhZGEgaXRlbSwgY29uc3RydWluZG8gdW1cclxuICogYm90w6NvIGBFeGliaXIgZGV0YWxoZXNgIGFiYWl4byBkbyBjb250ZcO6ZG8gcHJpbmNpcGFsIGRvIGl0ZW0uXHJcbiAqXHJcbiAqIERldmUtc2UgdXRpbGl6YXIgY29tbyBwYXLDom1ldHJvIGEgcmVmZXLDqm5jaWEgZG8gaXRlbSBlL291IMOtbmRpY2UsIHNlbmRvIHBvciBwYWRyw6NvIG8gaXRlbS5cclxuICogIC0gSXRlbTogYGl0ZW1gIGRldGVybWluYSBvIGl0ZW0gZGEgbGluaGEgY29ycmVudGUuXHJcbiAqICAtIMONbmRpY2U6IGBpbmRleGAgZGV0ZXJtaW5hIG8gw61uZGljZSBkYSBsaW5oYSBjb3JyZW50ZS5cclxuICpcclxuICogRXN0YSBkaXJldGl2YSBwb2RlIHNlciB1c2FkYSBkZSBkdWFzIGZvcm1hczogZXhwbMOtY2l0YSBvdSAqc3ludGF4IHN1Z2FyKi4gVmVqYSBhIHNlZ3VpciBhbWJvcywgcmVzcGVjdGl2YW1lbnRlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1saXN0LXZpZXdcclxuICogICBwLXByb3BlcnR5LXRpdGxlPVwibmFtZVwiXHJcbiAqICAgW3AtaXRlbXNdPVwiaXRlbXNcIj5cclxuICpcclxuICogICA8bmctdGVtcGxhdGUgcC1saXN0LXZpZXctZGV0YWlsLXRlbXBsYXRlIGxldC1pdGVtIGxldC1jb2RlPVwiaW5kZXhcIj5cclxuICogICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICogICAgICAgPHBvLWluZm8gY2xhc3M9XCJwby1tZC02XCIgcC1sYWJlbD1cIkNvZGVcIiBbcC12YWx1ZV09XCJjb2RlXCI+PC9wby1pbmZvPlxyXG4gKiAgICAgICA8cG8taW5mbyBjbGFzcz1cInBvLW1kLTEyXCIgcC1sYWJlbD1cIkVtYWlsXCIgW3AtdmFsdWVdPVwiaXRlbS5lbWFpbFwiPjwvcG8taW5mbz5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgIDwvbmctdGVtcGxhdGU+XHJcbiAqXHJcbiAqIDwvcG8tbGlzdC12aWV3PlxyXG4gKlxyXG4gKiAuLi5cclxuICogYGBgXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPHBvLWxpc3Qtdmlld1xyXG4gKiAgICBwLXByb3BlcnR5LXRpdGxlPVwibmFtZVwiXHJcbiAqICAgIFtwLWl0ZW1zXT1cIml0ZW1zXCI+XHJcbiAqICAgIDxkaXYgKnAtbGlzdC12aWV3LWRldGFpbC10ZW1wbGF0ZT1cImxldCBpdGVtLCBsZXQgaT1pbmRleFwiIGNsYXNzPVwicG8tcm93XCI+XHJcbiAqICAgICAgPHBvLWluZm8gY2xhc3M9XCJwby1tZC0xMlwiIHAtbGFiZWw9XCJFbWFpbFwiIFtwLXZhbHVlXT1cIml0ZW0uZW1haWxcIj48L3BvLWluZm8+XHJcbiAqICAgIDwvZGl2PlxyXG4gKiA8L3BvLWxpc3Qtdmlldz5cclxuICogLi4uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcC1saXN0LXZpZXctZGV0YWlsLXRlbXBsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTGlzdFZpZXdEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBkZXZlIHJldG9ybmFyIHVtIHZhbG9yIGRvIHRpcG8gYGJvb2xlYW5gLCBxdWUgc2Vyw6EgdXRpbGl6YWRvIGNvbW8gYSB2YWxpZGHDp8OjbyBwYXJhIHF1ZSBvIGRldGFsaGUgZGUgaXRlbVxyXG4gICAqIGRhIGxpc3RhIGluaWNpZSBhYmVydG8gb3UgZmVjaGFkby5cclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zaG93LWRldGFpbCcpIHNob3dEZXRhaWw6IChpdGVtKSA9PiBib29sZWFuO1xyXG5cclxuICAvLyBOZWNlc3PDoXJpbyBtYW50ZXIgdGVtcGxhdGVSZWYgcGFyYSBvIGZ1bmNpb25hbWVudG8gZG8gcm93IHRlbXBsYXRlLlxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cclxufVxyXG4iXX0=