import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoComboComponent
 *
 * @description
 *
 * Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.
 *
 * > Quando utilizada em dispositivos *mobile* será exibido o componente nativo.
 *
 * Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `p-combo-option-template` com `ng-template`
 * dentro da *tag* `po-combo`.
 *
 * Para obter a referência do item atual utilize `let-option`, com isso você terá acesso aos valores e poderá personalizar sua exibição.
 *
 * Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em *syntax sugar*. Veja a seguir ambos, respectivamente:
 *
 * ```
 * ...
 * <po-combo
 *   name="combo"
 *   [(ngModel)]="combo"
 *   [p-options]="options">
 *     <ng-template p-combo-option-template let-option>
 *       <option-template [option]="option"></option-template>
 *     </ng-template>
 * </po-combo>
 * ...
 * ```
 *
 * ```
 * ...
 * <po-combo
 *   name="combo"
 *   [(ngModel)]="combo"
 *   [p-options]="options">
 *     <div *p-combo-option-template="let option">
 *       <option-template [option]="option"></option-template>
 *     </div>
 * </po-combo>
 * ...
 *
 * ```
 * Para o caso de personalização de opções com agrupamentos, deve-se seguir a mesma orientação acima. Porém, cabe ao desenvolvedor
 * a responsabilidade de estilização dos elementos da lista, tais como título e links dos grupos. Abaixo há um exemplo de aplicação:
 *
 * ```
 * ...
 * <ng-template p-combo-option-template let-option>
 *   <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
 *   <ng-template #optionsGroupTitle>
 *     <p class="po-combo-item-title" [innerHtml]="option.label"></p>
 *   </ng-template>
 *   <ng-template #optionsGroupList>
 *     <div class="po-combo-item">
 *       <div class="po-row">
 *         <po-avatar class="po-md-1" p-size="sm"></po-avatar>
 *         <div class="po-md-11" [innerHtml]="option.label"></div>
 *       </div>
 *     </div>
 *   </ng-template>
 * </ng-template>
 * ...
 *
 * ```
 */
export class PoComboOptionTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoComboOptionTemplateDirective.ɵfac = function PoComboOptionTemplateDirective_Factory(t) { return new (t || PoComboOptionTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoComboOptionTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoComboOptionTemplateDirective, selectors: [["", "p-combo-option-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoComboOptionTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-combo-option-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29tYm8tb3B0aW9uLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1jb21iby9wby1jb21iby1vcHRpb24tdGVtcGxhdGUvcG8tY29tYm8tb3B0aW9uLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQUV2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdFRztBQUlILE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsc0VBQXNFO0lBQ3RFLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7OzRHQUZ6Qyw4QkFBOEI7aUZBQTlCLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBSDFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEB1c2VkQnkgUG9Db21ib0NvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0YSBkaXJldGl2YSBwZXJtaXRlIHBlcnNvbmFsaXphciBvIGNvbnRlw7pkbyBkb3MgaXRlbnMgZXhpYmlkb3MgbmEgbGlzdGEgZGUgb3DDp8O1ZXMgZG8gY29tcG9uZW50ZS5cclxuICpcclxuICogPiBRdWFuZG8gdXRpbGl6YWRhIGVtIGRpc3Bvc2l0aXZvcyAqbW9iaWxlKiBzZXLDoSBleGliaWRvIG8gY29tcG9uZW50ZSBuYXRpdm8uXHJcbiAqXHJcbiAqIFBhcmEgcGVyc29uYWxpemFyIG8gY29udGXDumRvIGRlIGNhZGEgaXRlbSBkYSBsaXN0YSBkZXZlLXNlIHV0aWxpemFyIGEgZGlyZXRpdmEgYHAtY29tYm8tb3B0aW9uLXRlbXBsYXRlYCBjb20gYG5nLXRlbXBsYXRlYFxyXG4gKiBkZW50cm8gZGEgKnRhZyogYHBvLWNvbWJvYC5cclxuICpcclxuICogUGFyYSBvYnRlciBhIHJlZmVyw6puY2lhIGRvIGl0ZW0gYXR1YWwgdXRpbGl6ZSBgbGV0LW9wdGlvbmAsIGNvbSBpc3NvIHZvY8OqIHRlcsOhIGFjZXNzbyBhb3MgdmFsb3JlcyBlIHBvZGVyw6EgcGVyc29uYWxpemFyIHN1YSBleGliacOnw6NvLlxyXG4gKlxyXG4gKiBFc3RhIGRpcmV0aXZhIGNvbXDDtWUtc2UgZGUgZG9pcyBtZWlvcyBwYXJhIHVzbywgZGUgZm9ybWEgZXhwbMOtY2l0YSB0YWwgY29tbyBlbSAqc3ludGF4IHN1Z2FyKi4gVmVqYSBhIHNlZ3VpciBhbWJvcywgcmVzcGVjdGl2YW1lbnRlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1jb21ib1xyXG4gKiAgIG5hbWU9XCJjb21ib1wiXHJcbiAqICAgWyhuZ01vZGVsKV09XCJjb21ib1wiXHJcbiAqICAgW3Atb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAqICAgICA8bmctdGVtcGxhdGUgcC1jb21iby1vcHRpb24tdGVtcGxhdGUgbGV0LW9wdGlvbj5cclxuICogICAgICAgPG9wdGlvbi10ZW1wbGF0ZSBbb3B0aW9uXT1cIm9wdGlvblwiPjwvb3B0aW9uLXRlbXBsYXRlPlxyXG4gKiAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICogPC9wby1jb21ibz5cclxuICogLi4uXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1jb21ib1xyXG4gKiAgIG5hbWU9XCJjb21ib1wiXHJcbiAqICAgWyhuZ01vZGVsKV09XCJjb21ib1wiXHJcbiAqICAgW3Atb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAqICAgICA8ZGl2ICpwLWNvbWJvLW9wdGlvbi10ZW1wbGF0ZT1cImxldCBvcHRpb25cIj5cclxuICogICAgICAgPG9wdGlvbi10ZW1wbGF0ZSBbb3B0aW9uXT1cIm9wdGlvblwiPjwvb3B0aW9uLXRlbXBsYXRlPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqIDwvcG8tY29tYm8+XHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBgYGBcclxuICogUGFyYSBvIGNhc28gZGUgcGVyc29uYWxpemHDp8OjbyBkZSBvcMOnw7VlcyBjb20gYWdydXBhbWVudG9zLCBkZXZlLXNlIHNlZ3VpciBhIG1lc21hIG9yaWVudGHDp8OjbyBhY2ltYS4gUG9yw6ltLCBjYWJlIGFvIGRlc2Vudm9sdmVkb3JcclxuICogYSByZXNwb25zYWJpbGlkYWRlIGRlIGVzdGlsaXphw6fDo28gZG9zIGVsZW1lbnRvcyBkYSBsaXN0YSwgdGFpcyBjb21vIHTDrXR1bG8gZSBsaW5rcyBkb3MgZ3J1cG9zLiBBYmFpeG8gaMOhIHVtIGV4ZW1wbG8gZGUgYXBsaWNhw6fDo286XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPG5nLXRlbXBsYXRlIHAtY29tYm8tb3B0aW9uLXRlbXBsYXRlIGxldC1vcHRpb24+XHJcbiAqICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbi5vcHRpb25zOyB0aGVuIG9wdGlvbnNHcm91cFRpdGxlOyBlbHNlIG9wdGlvbnNHcm91cExpc3RcIj48L25nLWNvbnRhaW5lcj5cclxuICogICA8bmctdGVtcGxhdGUgI29wdGlvbnNHcm91cFRpdGxlPlxyXG4gKiAgICAgPHAgY2xhc3M9XCJwby1jb21iby1pdGVtLXRpdGxlXCIgW2lubmVySHRtbF09XCJvcHRpb24ubGFiZWxcIj48L3A+XHJcbiAqICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICA8bmctdGVtcGxhdGUgI29wdGlvbnNHcm91cExpc3Q+XHJcbiAqICAgICA8ZGl2IGNsYXNzPVwicG8tY29tYm8taXRlbVwiPlxyXG4gKiAgICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAqICAgICAgICAgPHBvLWF2YXRhciBjbGFzcz1cInBvLW1kLTFcIiBwLXNpemU9XCJzbVwiPjwvcG8tYXZhdGFyPlxyXG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1tZC0xMVwiIFtpbm5lckh0bWxdPVwib3B0aW9uLmxhYmVsXCI+PC9kaXY+XHJcbiAqICAgICAgIDwvZGl2PlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgPC9uZy10ZW1wbGF0ZT5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICogLi4uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcC1jb21iby1vcHRpb24tdGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Db21ib09wdGlvblRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAvLyBOZWNlc3PDoXJpbyBtYW50ZXIgdGVtcGxhdGVSZWYgcGFyYSBvIGZ1bmNpb25hbWVudG8gZG8gcm93IHRlbXBsYXRlLlxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cclxufVxyXG4iXX0=