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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL3BvLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZS9wby1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBRXZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0VHO0FBSUgsTUFBTSxPQUFPLHlDQUF5QztJQUNwRCw0RUFBNEU7SUFDNUUsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7a0lBRnpDLHlDQUF5Qzs0RkFBekMseUNBQXlDO3VGQUF6Qyx5Q0FBeUM7Y0FIckQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHVzZWRCeSBQb1BhZ2VKb2JTY2hlZHVsZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBFc3RhIGRpcmV0aXZhIHBlcm1pdGUgcGVyc29uYWxpemFyIG8gY29udGXDumRvIGRhIGV0YXBhIGRlIHBhcmFtZXRyaXphw6fDo28gZG8gY29tcG9uZW50ZSBkZSBQb1BhZ2VKb2JTY2hlZHVsZXIuXG4gKlxuICogPiAuLi4uLlxuICpcbiAqIFBhcmEgcGVyc29uYWxpemFyIG8gY29udGXDumRvIGRlIGNhZGEgaXRlbSBkYSBsaXN0YSBkZXZlLXNlIHV0aWxpemFyIGEgZGlyZXRpdmEgYHAtY29tYm8tb3B0aW9uLXRlbXBsYXRlYCBjb20gYG5nLXRlbXBsYXRlYFxuICogZGVudHJvIGRhICp0YWcqIGBwby1jb21ib2AuXG4gKlxuICogUGFyYSBvYnRlciBhIHJlZmVyw6puY2lhIGRvIGl0ZW0gYXR1YWwgdXRpbGl6ZSBgbGV0LW9wdGlvbmAsIGNvbSBpc3NvIHZvY8OqIHRlcsOhIGFjZXNzbyBhb3MgdmFsb3JlcyBlIHBvZGVyw6EgcGVyc29uYWxpemFyIHN1YSBleGliacOnw6NvLlxuICpcbiAqIEVzdGEgZGlyZXRpdmEgY29tcMO1ZS1zZSBkZSBkb2lzIG1laW9zIHBhcmEgdXNvLCBkZSBmb3JtYSBleHBsw61jaXRhIHRhbCBjb21vIGVtICpzeW50YXggc3VnYXIqLiBWZWphIGEgc2VndWlyIGFtYm9zLCByZXNwZWN0aXZhbWVudGU6XG4gKiBAdG9kbyBkb2N1bWVudGFyXG4gKiBgYGBcbiAqIC4uLlxuICogPHBvLWNvbWJvXG4gKiAgIG5hbWU9XCJjb21ib1wiXG4gKiAgIFsobmdNb2RlbCldPVwiY29tYm9cIlxuICogICBbcC1vcHRpb25zXT1cIm9wdGlvbnNcIj5cbiAqICAgICA8bmctdGVtcGxhdGUgcC1jb21iby1vcHRpb24tdGVtcGxhdGUgbGV0LW9wdGlvbj5cbiAqICAgICAgIDxvcHRpb24tdGVtcGxhdGUgW29wdGlvbl09XCJvcHRpb25cIj48L29wdGlvbi10ZW1wbGF0ZT5cbiAqICAgICA8L25nLXRlbXBsYXRlPlxuICogPC9wby1jb21ibz5cbiAqIC4uLlxuICogYGBgXG4gKlxuICogYGBgXG4gKiAuLi5cbiAqIDxwby1jb21ib1xuICogICBuYW1lPVwiY29tYm9cIlxuICogICBbKG5nTW9kZWwpXT1cImNvbWJvXCJcbiAqICAgW3Atb3B0aW9uc109XCJvcHRpb25zXCI+XG4gKiAgICAgPGRpdiAqcC1jb21iby1vcHRpb24tdGVtcGxhdGU9XCJsZXQgb3B0aW9uXCI+XG4gKiAgICAgICA8b3B0aW9uLXRlbXBsYXRlIFtvcHRpb25dPVwib3B0aW9uXCI+PC9vcHRpb24tdGVtcGxhdGU+XG4gKiAgICAgPC9kaXY+XG4gKiA8L3BvLWNvbWJvPlxuICogLi4uXG4gKlxuICogYGBgXG4gKiBQYXJhIG8gY2FzbyBkZSBwZXJzb25hbGl6YcOnw6NvIGRlIG9ww6fDtWVzIGNvbSBhZ3J1cGFtZW50b3MsIGRldmUtc2Ugc2VndWlyIGEgbWVzbWEgb3JpZW50YcOnw6NvIGFjaW1hLiBQb3LDqW0sIGNhYmUgYW8gZGVzZW52b2x2ZWRvclxuICogYSByZXNwb25zYWJpbGlkYWRlIGRlIGVzdGlsaXphw6fDo28gZG9zIGVsZW1lbnRvcyBkYSBsaXN0YSwgdGFpcyBjb21vIHTDrXR1bG8gZSBsaW5rcyBkb3MgZ3J1cG9zLiBBYmFpeG8gaMOhIHVtIGV4ZW1wbG8gZGUgYXBsaWNhw6fDo286XG4gKlxuICogYGBgXG4gKiAuLi5cbiAqIDxuZy10ZW1wbGF0ZSBwLWNvbWJvLW9wdGlvbi10ZW1wbGF0ZSBsZXQtb3B0aW9uPlxuICogICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9uLm9wdGlvbnM7IHRoZW4gb3B0aW9uc0dyb3VwVGl0bGU7IGVsc2Ugb3B0aW9uc0dyb3VwTGlzdFwiPjwvbmctY29udGFpbmVyPlxuICogICA8bmctdGVtcGxhdGUgI29wdGlvbnNHcm91cFRpdGxlPlxuICogICAgIDxwIGNsYXNzPVwicG8tY29tYm8taXRlbS10aXRsZVwiIFtpbm5lckh0bWxdPVwib3B0aW9uLmxhYmVsXCI+PC9wPlxuICogICA8L25nLXRlbXBsYXRlPlxuICogICA8bmctdGVtcGxhdGUgI29wdGlvbnNHcm91cExpc3Q+XG4gKiAgICAgPGRpdiBjbGFzcz1cInBvLWNvbWJvLWl0ZW1cIj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cbiAqICAgICAgICAgPHBvLWF2YXRhciBjbGFzcz1cInBvLW1kLTFcIiBwLXNpemU9XCJzbVwiPjwvcG8tYXZhdGFyPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbWQtMTFcIiBbaW5uZXJIdG1sXT1cIm9wdGlvbi5sYWJlbFwiPjwvZGl2PlxuICogICAgICAgPC9kaXY+XG4gKiAgICAgPC9kaXY+XG4gKiAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L25nLXRlbXBsYXRlPlxuICogLi4uXG4gKlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgLy8gTmVjZXNzw6FyaW8gbWFudGVyIHRlbXBsYXRlUmVmIHBhcmEgbyBmdW5jaW9uYW1lbnRvIGRvIHJvdyB0ZW1wbGF0ZS4gQHRvZG9cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuIl19