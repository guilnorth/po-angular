import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoPageJobScheduler
 *
 * @description
 *
 * Esta diretiva permite personalizar o conteúdo da etapa de parametrização do componente de PoPageJobScheduler.
 *
 * > .....
 *
 * Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `p-combo-option-template` com `ng-template`
 * dentro da *tag* `po-combo`.
 *
 * Para obter a referência do item atual utilize `let-option`, com isso você terá acesso aos valores e poderá personalizar sua exibição.
 *
 * Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em *syntax sugar*. Veja a seguir ambos, respectivamente:
 * @todo documentar
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
export class PoJobSchedulerParametersTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template. @todo
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoJobSchedulerParametersTemplateDirective.ɵfac = function PoJobSchedulerParametersTemplateDirective_Factory(t) { return new (t || PoJobSchedulerParametersTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoJobSchedulerParametersTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoJobSchedulerParametersTemplateDirective, selectors: [["", "p-job-scheduler-parameters-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoJobSchedulerParametersTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-job-scheduler-parameters-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL3BvLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZS9wby1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBRXZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0VHO0FBSUgsTUFBTSxPQUFPLHlDQUF5QztJQUNwRCw0RUFBNEU7SUFDNUUsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7a0lBRnpDLHlDQUF5Qzs0RkFBekMseUNBQXlDO3VGQUF6Qyx5Q0FBeUM7Y0FIckQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHVzZWRCeSBQb1BhZ2VKb2JTY2hlZHVsZXJcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGEgZGlyZXRpdmEgcGVybWl0ZSBwZXJzb25hbGl6YXIgbyBjb250ZcO6ZG8gZGEgZXRhcGEgZGUgcGFyYW1ldHJpemHDp8OjbyBkbyBjb21wb25lbnRlIGRlIFBvUGFnZUpvYlNjaGVkdWxlci5cclxuICpcclxuICogPiAuLi4uLlxyXG4gKlxyXG4gKiBQYXJhIHBlcnNvbmFsaXphciBvIGNvbnRlw7pkbyBkZSBjYWRhIGl0ZW0gZGEgbGlzdGEgZGV2ZS1zZSB1dGlsaXphciBhIGRpcmV0aXZhIGBwLWNvbWJvLW9wdGlvbi10ZW1wbGF0ZWAgY29tIGBuZy10ZW1wbGF0ZWBcclxuICogZGVudHJvIGRhICp0YWcqIGBwby1jb21ib2AuXHJcbiAqXHJcbiAqIFBhcmEgb2J0ZXIgYSByZWZlcsOqbmNpYSBkbyBpdGVtIGF0dWFsIHV0aWxpemUgYGxldC1vcHRpb25gLCBjb20gaXNzbyB2b2PDqiB0ZXLDoSBhY2Vzc28gYW9zIHZhbG9yZXMgZSBwb2RlcsOhIHBlcnNvbmFsaXphciBzdWEgZXhpYmnDp8Ojby5cclxuICpcclxuICogRXN0YSBkaXJldGl2YSBjb21ww7VlLXNlIGRlIGRvaXMgbWVpb3MgcGFyYSB1c28sIGRlIGZvcm1hIGV4cGzDrWNpdGEgdGFsIGNvbW8gZW0gKnN5bnRheCBzdWdhciouIFZlamEgYSBzZWd1aXIgYW1ib3MsIHJlc3BlY3RpdmFtZW50ZTpcclxuICogQHRvZG8gZG9jdW1lbnRhclxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1jb21ib1xyXG4gKiAgIG5hbWU9XCJjb21ib1wiXHJcbiAqICAgWyhuZ01vZGVsKV09XCJjb21ib1wiXHJcbiAqICAgW3Atb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAqICAgICA8bmctdGVtcGxhdGUgcC1jb21iby1vcHRpb24tdGVtcGxhdGUgbGV0LW9wdGlvbj5cclxuICogICAgICAgPG9wdGlvbi10ZW1wbGF0ZSBbb3B0aW9uXT1cIm9wdGlvblwiPjwvb3B0aW9uLXRlbXBsYXRlPlxyXG4gKiAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICogPC9wby1jb21ibz5cclxuICogLi4uXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1jb21ib1xyXG4gKiAgIG5hbWU9XCJjb21ib1wiXHJcbiAqICAgWyhuZ01vZGVsKV09XCJjb21ib1wiXHJcbiAqICAgW3Atb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAqICAgICA8ZGl2ICpwLWNvbWJvLW9wdGlvbi10ZW1wbGF0ZT1cImxldCBvcHRpb25cIj5cclxuICogICAgICAgPG9wdGlvbi10ZW1wbGF0ZSBbb3B0aW9uXT1cIm9wdGlvblwiPjwvb3B0aW9uLXRlbXBsYXRlPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqIDwvcG8tY29tYm8+XHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBgYGBcclxuICogUGFyYSBvIGNhc28gZGUgcGVyc29uYWxpemHDp8OjbyBkZSBvcMOnw7VlcyBjb20gYWdydXBhbWVudG9zLCBkZXZlLXNlIHNlZ3VpciBhIG1lc21hIG9yaWVudGHDp8OjbyBhY2ltYS4gUG9yw6ltLCBjYWJlIGFvIGRlc2Vudm9sdmVkb3JcclxuICogYSByZXNwb25zYWJpbGlkYWRlIGRlIGVzdGlsaXphw6fDo28gZG9zIGVsZW1lbnRvcyBkYSBsaXN0YSwgdGFpcyBjb21vIHTDrXR1bG8gZSBsaW5rcyBkb3MgZ3J1cG9zLiBBYmFpeG8gaMOhIHVtIGV4ZW1wbG8gZGUgYXBsaWNhw6fDo286XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPG5nLXRlbXBsYXRlIHAtY29tYm8tb3B0aW9uLXRlbXBsYXRlIGxldC1vcHRpb24+XHJcbiAqICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbi5vcHRpb25zOyB0aGVuIG9wdGlvbnNHcm91cFRpdGxlOyBlbHNlIG9wdGlvbnNHcm91cExpc3RcIj48L25nLWNvbnRhaW5lcj5cclxuICogICA8bmctdGVtcGxhdGUgI29wdGlvbnNHcm91cFRpdGxlPlxyXG4gKiAgICAgPHAgY2xhc3M9XCJwby1jb21iby1pdGVtLXRpdGxlXCIgW2lubmVySHRtbF09XCJvcHRpb24ubGFiZWxcIj48L3A+XHJcbiAqICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICA8bmctdGVtcGxhdGUgI29wdGlvbnNHcm91cExpc3Q+XHJcbiAqICAgICA8ZGl2IGNsYXNzPVwicG8tY29tYm8taXRlbVwiPlxyXG4gKiAgICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAqICAgICAgICAgPHBvLWF2YXRhciBjbGFzcz1cInBvLW1kLTFcIiBwLXNpemU9XCJzbVwiPjwvcG8tYXZhdGFyPlxyXG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1tZC0xMVwiIFtpbm5lckh0bWxdPVwib3B0aW9uLmxhYmVsXCI+PC9kaXY+XHJcbiAqICAgICAgIDwvZGl2PlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgPC9uZy10ZW1wbGF0ZT5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICogLi4uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcC1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gIC8vIE5lY2Vzc8OhcmlvIG1hbnRlciB0ZW1wbGF0ZVJlZiBwYXJhIG8gZnVuY2lvbmFtZW50byBkbyByb3cgdGVtcGxhdGUuIEB0b2RvXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcbiJdfQ==