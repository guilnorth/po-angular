import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoTableComponent
 *
 * @description
 *
 * Esta diretiva permite que seja possível alterar o conteúdo das células de uma coluna, para que os valores possam ser exibidos
 * de acordo com a necessidade do usuário.
 *
 * Em seu uso, deve-se utilizar como parâmetro de entrada o input [p-property], o qual é responsável por informar ao PO-TABLE qual a coluna que
 * será adicionado o conteúdo do template.
 *
 * Retorno:
 *  - value: valor referente ao conteúdo da linha corrente.
 *
 * Modo de uso:
 * ```html
 * ...
 * <po-table
 *   [p-columns]="columns"
 *   [p-items]="items">
 *   <ng-template p-table-column-template [p-property]="targetProperty" let-value>
 *     <span [innerText]="value"></span>
 *   </ng-template>
 * </po-table>
 * ...
 * ```
 * > No exemplo acima, todas as células correspondentes a coluna `status` terão o conteúdo alterado para `<h1>${value}</h1>`,
 * sendo que `value` refere-se ao conteúdo da linha.
 *
 * ```html
 * ...
 * <po-table
 *   [p-columns]="columns"
 *   [p-items]="items">
 *   <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
 *     <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
 *     <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
 *   </ng-template>
 * </po-table>
 * ...
 * ```
 * > Agora, neste exemplo, com o valor da linha corrente retornado (value), é feito uma validação para
 * definir o template exato para adicionar a uma específica célula.
 *
 * Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.
 * ```typescript
 * ...
 * export class AppComponent {
 *
 *    targetProperty= 'status';
 *
 *    items = [{
 *      code: 1200,
 *      product: 'Rice',
 *      status: 'CANCELED'
 *      },{
 *      code: 1355,
 *      product: 'Bean',
 *      status: 'FINISHED'
 *    }];
 *
 *    columns = [
 *      { property: 'code', label: 'ID' },
 *      { property: 'product', label: 'PRODUTO' },
 *      { property: 'status', label: 'STATUS', type: 'columnTemplate' }
 *    ];
 * }
 * ...
 * ```
 * > Observação: Sempre adicionar o **type** da coluna que deseja manipular com a directiva como `columnTemplate`
 */
export class PoTableColumnTemplateDirective {
    // Necessário manter templateRef para o funcionamento do column template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoTableColumnTemplateDirective.ɵfac = function PoTableColumnTemplateDirective_Factory(t) { return new (t || PoTableColumnTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoTableColumnTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTableColumnTemplateDirective, selectors: [["", "p-table-column-template", ""]], inputs: { targetProperty: ["p-property", "targetProperty"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableColumnTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-table-column-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { targetProperty: [{
            type: Input,
            args: ['p-property']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtY29sdW1uLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1jb2x1bW4tdGVtcGxhdGUvcG8tdGFibGUtY29sdW1uLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzRUc7QUFLSCxNQUFNLE9BQU8sOEJBQThCO0lBWXpDLHlFQUF5RTtJQUN6RSxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDOzs0R0FiekMsOEJBQThCO2lGQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUgxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs4REFXc0IsY0FBYztrQkFBbEMsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAdXNlZEJ5IFBvVGFibGVDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGEgZGlyZXRpdmEgcGVybWl0ZSBxdWUgc2VqYSBwb3Nzw612ZWwgYWx0ZXJhciBvIGNvbnRlw7pkbyBkYXMgY8OpbHVsYXMgZGUgdW1hIGNvbHVuYSwgcGFyYSBxdWUgb3MgdmFsb3JlcyBwb3NzYW0gc2VyIGV4aWJpZG9zXHJcbiAqIGRlIGFjb3JkbyBjb20gYSBuZWNlc3NpZGFkZSBkbyB1c3XDoXJpby5cclxuICpcclxuICogRW0gc2V1IHVzbywgZGV2ZS1zZSB1dGlsaXphciBjb21vIHBhcsOibWV0cm8gZGUgZW50cmFkYSBvIGlucHV0IFtwLXByb3BlcnR5XSwgbyBxdWFsIMOpIHJlc3BvbnPDoXZlbCBwb3IgaW5mb3JtYXIgYW8gUE8tVEFCTEUgcXVhbCBhIGNvbHVuYSBxdWVcclxuICogc2Vyw6EgYWRpY2lvbmFkbyBvIGNvbnRlw7pkbyBkbyB0ZW1wbGF0ZS5cclxuICpcclxuICogUmV0b3JubzpcclxuICogIC0gdmFsdWU6IHZhbG9yIHJlZmVyZW50ZSBhbyBjb250ZcO6ZG8gZGEgbGluaGEgY29ycmVudGUuXHJcbiAqXHJcbiAqIE1vZG8gZGUgdXNvOlxyXG4gKiBgYGBodG1sXHJcbiAqIC4uLlxyXG4gKiA8cG8tdGFibGVcclxuICogICBbcC1jb2x1bW5zXT1cImNvbHVtbnNcIlxyXG4gKiAgIFtwLWl0ZW1zXT1cIml0ZW1zXCI+XHJcbiAqICAgPG5nLXRlbXBsYXRlIHAtdGFibGUtY29sdW1uLXRlbXBsYXRlIFtwLXByb3BlcnR5XT1cInRhcmdldFByb3BlcnR5XCIgbGV0LXZhbHVlPlxyXG4gKiAgICAgPHNwYW4gW2lubmVyVGV4dF09XCJ2YWx1ZVwiPjwvc3Bhbj5cclxuICogICA8L25nLXRlbXBsYXRlPlxyXG4gKiA8L3BvLXRhYmxlPlxyXG4gKiAuLi5cclxuICogYGBgXHJcbiAqID4gTm8gZXhlbXBsbyBhY2ltYSwgdG9kYXMgYXMgY8OpbHVsYXMgY29ycmVzcG9uZGVudGVzIGEgY29sdW5hIGBzdGF0dXNgIHRlcsOjbyBvIGNvbnRlw7pkbyBhbHRlcmFkbyBwYXJhIGA8aDE+JHt2YWx1ZX08L2gxPmAsXHJcbiAqIHNlbmRvIHF1ZSBgdmFsdWVgIHJlZmVyZS1zZSBhbyBjb250ZcO6ZG8gZGEgbGluaGEuXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogLi4uXHJcbiAqIDxwby10YWJsZVxyXG4gKiAgIFtwLWNvbHVtbnNdPVwiY29sdW1uc1wiXHJcbiAqICAgW3AtaXRlbXNdPVwiaXRlbXNcIj5cclxuICogICA8bmctdGVtcGxhdGUgIHAtdGFibGUtY29sdW1uLXRlbXBsYXRlIFtwLXByb3BlcnR5XT1cInRhcmdldFByb3BlcnR5XCIgbGV0LXZhbHVlPlxyXG4gKiAgICAgPHNwYW4gKm5nSWY9XCJ2YWx1ZSA9PT0gJ0ZJTklTSEVEJ1wiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIidzaWx2ZXInXCIgW2lubmVyVGV4dF09XCJ2YWx1ZVwiPjwvc3Bhbj5cclxuICogICAgIDxzcGFuICpuZ0lmPVwidmFsdWUgPT09ICdPUEVORUQnXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiJ2dyYXknXCIgW2lubmVyVGV4dF09XCJ2YWx1ZVwiPjwvc3Bhbj5cclxuICogICA8L25nLXRlbXBsYXRlPlxyXG4gKiA8L3BvLXRhYmxlPlxyXG4gKiAuLi5cclxuICogYGBgXHJcbiAqID4gQWdvcmEsIG5lc3RlIGV4ZW1wbG8sIGNvbSBvIHZhbG9yIGRhIGxpbmhhIGNvcnJlbnRlIHJldG9ybmFkbyAodmFsdWUpLCDDqSBmZWl0byB1bWEgdmFsaWRhw6fDo28gcGFyYVxyXG4gKiBkZWZpbmlyIG8gdGVtcGxhdGUgZXhhdG8gcGFyYSBhZGljaW9uYXIgYSB1bWEgZXNwZWPDrWZpY2EgY8OpbHVsYS5cclxuICpcclxuICogQWJhaXhvLCBhIGRlY2xhcmHDp8OjbyBkb3MgZGFkb3MgZGUgZW50cmFkYSBkbyBQTy1UQUJMRSBwYXJhIG8gdXNvIGRhIGRpcmVjdGl2YS5cclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAuLi5cclxuICogZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAqXHJcbiAqICAgIHRhcmdldFByb3BlcnR5PSAnc3RhdHVzJztcclxuICpcclxuICogICAgaXRlbXMgPSBbe1xyXG4gKiAgICAgIGNvZGU6IDEyMDAsXHJcbiAqICAgICAgcHJvZHVjdDogJ1JpY2UnLFxyXG4gKiAgICAgIHN0YXR1czogJ0NBTkNFTEVEJ1xyXG4gKiAgICAgIH0se1xyXG4gKiAgICAgIGNvZGU6IDEzNTUsXHJcbiAqICAgICAgcHJvZHVjdDogJ0JlYW4nLFxyXG4gKiAgICAgIHN0YXR1czogJ0ZJTklTSEVEJ1xyXG4gKiAgICB9XTtcclxuICpcclxuICogICAgY29sdW1ucyA9IFtcclxuICogICAgICB7IHByb3BlcnR5OiAnY29kZScsIGxhYmVsOiAnSUQnIH0sXHJcbiAqICAgICAgeyBwcm9wZXJ0eTogJ3Byb2R1Y3QnLCBsYWJlbDogJ1BST0RVVE8nIH0sXHJcbiAqICAgICAgeyBwcm9wZXJ0eTogJ3N0YXR1cycsIGxhYmVsOiAnU1RBVFVTJywgdHlwZTogJ2NvbHVtblRlbXBsYXRlJyB9XHJcbiAqICAgIF07XHJcbiAqIH1cclxuICogLi4uXHJcbiAqIGBgYFxyXG4gKiA+IE9ic2VydmHDp8OjbzogU2VtcHJlIGFkaWNpb25hciBvICoqdHlwZSoqIGRhIGNvbHVuYSBxdWUgZGVzZWphIG1hbmlwdWxhciBjb20gYSBkaXJlY3RpdmEgY29tbyBgY29sdW1uVGVtcGxhdGVgXHJcbiAqL1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcC10YWJsZS1jb2x1bW4tdGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZUNvbHVtblRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVmFyacOhdmVsIHJlc3BvbnPDoXZlbCBwb3IgYXJtYXplbmFyIGEgcHJvcGVydHkgZGEgY29sdW5hIGRhIHRhYmVsYSBxdWUgc2Vyw6EgYWRpY2lvbmFkbyBvIHRlbXBsYXRlLlxyXG4gICAqXHJcbiAgICogQ2FzbyBuw6NvIHNlamEgaW5mb3JtYWRhIGVzdGEgcHJvcHJpZWRhZGUsIHNlcsOjbyBhcHJlc2VudGFkb3Mgbm9ybWFsbWVudGUgb3MgZGFkb3MgZGEgY29sdW5hLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wcm9wZXJ0eScpIHRhcmdldFByb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gIC8vIE5lY2Vzc8OhcmlvIG1hbnRlciB0ZW1wbGF0ZVJlZiBwYXJhIG8gZnVuY2lvbmFtZW50byBkbyBjb2x1bW4gdGVtcGxhdGUuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcbiJdfQ==