import { Directive, Input } from '@angular/core';
import { PoTableRowTemplateArrowDirection } from '../enums/po-table-row-template-arrow-direction.enum';
import * as i0 from "@angular/core";
/**
 * @usedBy PoTableComponent
 *
 * @description
 *
 * Esta diretiva permite que seja apresentada informações adicionais a respeito de uma determinada linha de
 * dados, de forma que possam ser exibidas e ocultadas através do botão de acionamento.
 *
 * > Quando utilizada, sobrepõe as funcionalidade básicas do *master-detail*.
 *
 * Em seu uso, deve-se utilizar como parâmetro a referência da _linha_ e/ou _índice_, sendo por padrão linha. Caso não seja declarado,
 * o componente não exibirá conteúdo.
 *  - Linha: `row` determina o item da linha corrente.
 *  - Índice: `rowIndex` determina o índice da linha corrente.
 *
 * Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em *syntax sugar*. Veja a seguir ambos, respectivamente:
 *
 * ```
 * ...
 * <po-table
 *   [p-columns]="columns"
 *   [p-items]="items">
 *     <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
 *       <detail-row [row]="rowItem"></detail-row>
 *     </ng-template>
 * ...
 * ```
 *
 * ```
 * ...
 * <po-table
 *   [p-columns]="columns"
 *   [p-items]="items">
 *     <div *p-table-row-template="let rowItem, let i=rowIndex">
 *       <detail-row [row]="rowItem"></detail-row>
 *     </div>
 * ...
 *
 * ```
 *
 * A diretiva **p-table-row-template**, possibilita também que determinada linha apresente ou não seu _template_. Para isto,
 * é necessário atribuir a referência da função que faz esta verificação, à propriedade `p-table-row-template-show`,
 * a mesma deve retornar um valor do tipo *boolean*. Veja o exemplo a seguir:
 *
 * ```
 * ...
 * @Component({
 *    selector: 'app-root',
 *    templateUrl: `
 *      ...
 *      <po-table
 *        [p-columns]="columns"
 *        [p-items]="items">
 *          <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isUndelivered">
 *            <detail-row [row]="rowItem"> </detail-row>
 *          </div>
 *      ...
 *    `
 * })
 * export class AppComponent {
 *    public dataTable = [{
 *      code: 1200,
 *      product: 'Rice',
 *      costumer: 'Supermarket 1',
 *      quantity: 3,
 *      status: 'delivered',
 *      license_plate: 'MDJD9191',
 *      batch_product: 18041822,
 *      driver: 'José Oliveira'
 *    }, {
 *      code: 1355,
 *      product: 'Bean',
 *      costumer: 'Supermarket 2',
 *      quantity: 1,
 *      status: 'transport',
 *      license_plate: 'XXA5454',
 *      batch_product: 18041821,
 *      driver: 'Francisco Pereira'
 *    }];
 *
 *    isUndelivered(row, index: number) {
 *      return row.status !== 'delivered';
 *    }
 * }
 * ```
 * > No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `status`
 * não correspondam à *delivered*.
 */
export class PoTableRowTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template.
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._tableRowTemplateArrowDirection = PoTableRowTemplateArrowDirection.Left;
    }
    /**
     * @optional
     *
     * @description
     *
     * Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.
     *
     * @default `'LEFT'`
     */
    set tableRowTemplateArrowDirection(value) {
        value = value?.toUpperCase();
        this._tableRowTemplateArrowDirection = Object.values(PoTableRowTemplateArrowDirection).includes(value)
            ? value
            : PoTableRowTemplateArrowDirection.Left;
    }
    get tableRowTemplateArrowDirection() {
        return this._tableRowTemplateArrowDirection;
    }
}
PoTableRowTemplateDirective.ɵfac = function PoTableRowTemplateDirective_Factory(t) { return new (t || PoTableRowTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoTableRowTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTableRowTemplateDirective, selectors: [["", "p-table-row-template", ""]], inputs: { poTableRowTemplateShow: ["p-table-row-template-show", "poTableRowTemplateShow"], tableRowTemplateArrowDirection: ["p-table-row-template-arrow-direction", "tableRowTemplateArrowDirection"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableRowTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-table-row-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { poTableRowTemplateShow: [{
            type: Input,
            args: ['p-table-row-template-show']
        }], tableRowTemplateArrowDirection: [{
            type: Input,
            args: ['p-table-row-template-arrow-direction']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtcm93LXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1yb3ctdGVtcGxhdGUvcG8tdGFibGUtcm93LXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFFdkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVGRztBQUlILE1BQU0sT0FBTywyQkFBMkI7SUF3Q3RDLHNFQUFzRTtJQUN0RSxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUF6QnhDLG9DQUErQixHQUFxQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUM7SUF5Qi9ELENBQUM7SUF2QnBEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBbUQsOEJBQThCLENBQy9FLEtBQXVDO1FBRXZDLEtBQUssR0FBRyxLQUFLLEVBQUUsV0FBVyxFQUFzQyxDQUFDO1FBQ2pFLElBQUksQ0FBQywrQkFBK0IsR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMzRyxDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksOEJBQThCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUFDO0lBQzlDLENBQUM7O3NHQXRDVSwyQkFBMkI7OEVBQTNCLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBSHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzhEQWVxQyxzQkFBc0I7a0JBQXpELEtBQUs7bUJBQUMsMkJBQTJCO1lBYWlCLDhCQUE4QjtrQkFBaEYsS0FBSzttQkFBQyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb1RhYmxlUm93VGVtcGxhdGVBcnJvd0RpcmVjdGlvbiB9IGZyb20gJy4uL2VudW1zL3BvLXRhYmxlLXJvdy10ZW1wbGF0ZS1hcnJvdy1kaXJlY3Rpb24uZW51bSc7XHJcblxyXG4vKipcclxuICogQHVzZWRCeSBQb1RhYmxlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBFc3RhIGRpcmV0aXZhIHBlcm1pdGUgcXVlIHNlamEgYXByZXNlbnRhZGEgaW5mb3JtYcOnw7VlcyBhZGljaW9uYWlzIGEgcmVzcGVpdG8gZGUgdW1hIGRldGVybWluYWRhIGxpbmhhIGRlXHJcbiAqIGRhZG9zLCBkZSBmb3JtYSBxdWUgcG9zc2FtIHNlciBleGliaWRhcyBlIG9jdWx0YWRhcyBhdHJhdsOpcyBkbyBib3TDo28gZGUgYWNpb25hbWVudG8uXHJcbiAqXHJcbiAqID4gUXVhbmRvIHV0aWxpemFkYSwgc29icmVww7VlIGFzIGZ1bmNpb25hbGlkYWRlIGLDoXNpY2FzIGRvICptYXN0ZXItZGV0YWlsKi5cclxuICpcclxuICogRW0gc2V1IHVzbywgZGV2ZS1zZSB1dGlsaXphciBjb21vIHBhcsOibWV0cm8gYSByZWZlcsOqbmNpYSBkYSBfbGluaGFfIGUvb3UgX8OtbmRpY2VfLCBzZW5kbyBwb3IgcGFkcsOjbyBsaW5oYS4gQ2FzbyBuw6NvIHNlamEgZGVjbGFyYWRvLFxyXG4gKiBvIGNvbXBvbmVudGUgbsOjbyBleGliaXLDoSBjb250ZcO6ZG8uXHJcbiAqICAtIExpbmhhOiBgcm93YCBkZXRlcm1pbmEgbyBpdGVtIGRhIGxpbmhhIGNvcnJlbnRlLlxyXG4gKiAgLSDDjW5kaWNlOiBgcm93SW5kZXhgIGRldGVybWluYSBvIMOtbmRpY2UgZGEgbGluaGEgY29ycmVudGUuXHJcbiAqXHJcbiAqIEVzdGEgZGlyZXRpdmEgY29tcMO1ZS1zZSBkZSBkb2lzIG1laW9zIHBhcmEgdXNvLCBkZSBmb3JtYSBleHBsw61jaXRhIHRhbCBjb21vIGVtICpzeW50YXggc3VnYXIqLiBWZWphIGEgc2VndWlyIGFtYm9zLCByZXNwZWN0aXZhbWVudGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPHBvLXRhYmxlXHJcbiAqICAgW3AtY29sdW1uc109XCJjb2x1bW5zXCJcclxuICogICBbcC1pdGVtc109XCJpdGVtc1wiPlxyXG4gKiAgICAgPG5nLXRlbXBsYXRlIHAtdGFibGUtcm93LXRlbXBsYXRlIGxldC1yb3dJdGVtIGxldC1pPVwicm93SW5kZXhcIiBbcC10YWJsZS1yb3ctdGVtcGxhdGUtc2hvd109XCJpc1Nob3dcIj5cclxuICogICAgICAgPGRldGFpbC1yb3cgW3Jvd109XCJyb3dJdGVtXCI+PC9kZXRhaWwtcm93PlxyXG4gKiAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICogLi4uXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby10YWJsZVxyXG4gKiAgIFtwLWNvbHVtbnNdPVwiY29sdW1uc1wiXHJcbiAqICAgW3AtaXRlbXNdPVwiaXRlbXNcIj5cclxuICogICAgIDxkaXYgKnAtdGFibGUtcm93LXRlbXBsYXRlPVwibGV0IHJvd0l0ZW0sIGxldCBpPXJvd0luZGV4XCI+XHJcbiAqICAgICAgIDxkZXRhaWwtcm93IFtyb3ddPVwicm93SXRlbVwiPjwvZGV0YWlsLXJvdz5cclxuICogICAgIDwvZGl2PlxyXG4gKiAuLi5cclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEEgZGlyZXRpdmEgKipwLXRhYmxlLXJvdy10ZW1wbGF0ZSoqLCBwb3NzaWJpbGl0YSB0YW1iw6ltIHF1ZSBkZXRlcm1pbmFkYSBsaW5oYSBhcHJlc2VudGUgb3UgbsOjbyBzZXUgX3RlbXBsYXRlXy4gUGFyYSBpc3RvLFxyXG4gKiDDqSBuZWNlc3PDoXJpbyBhdHJpYnVpciBhIHJlZmVyw6puY2lhIGRhIGZ1bsOnw6NvIHF1ZSBmYXogZXN0YSB2ZXJpZmljYcOnw6NvLCDDoCBwcm9wcmllZGFkZSBgcC10YWJsZS1yb3ctdGVtcGxhdGUtc2hvd2AsXHJcbiAqIGEgbWVzbWEgZGV2ZSByZXRvcm5hciB1bSB2YWxvciBkbyB0aXBvICpib29sZWFuKi4gVmVqYSBvIGV4ZW1wbG8gYSBzZWd1aXI6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogQENvbXBvbmVudCh7XHJcbiAqICAgIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gKiAgICB0ZW1wbGF0ZVVybDogYFxyXG4gKiAgICAgIC4uLlxyXG4gKiAgICAgIDxwby10YWJsZVxyXG4gKiAgICAgICAgW3AtY29sdW1uc109XCJjb2x1bW5zXCJcclxuICogICAgICAgIFtwLWl0ZW1zXT1cIml0ZW1zXCI+XHJcbiAqICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwLXRhYmxlLXJvdy10ZW1wbGF0ZSBsZXQtcm93SXRlbSBsZXQtaT1cInJvd0luZGV4XCIgW3AtdGFibGUtcm93LXRlbXBsYXRlLXNob3ddPVwiaXNVbmRlbGl2ZXJlZFwiPlxyXG4gKiAgICAgICAgICAgIDxkZXRhaWwtcm93IFtyb3ddPVwicm93SXRlbVwiPiA8L2RldGFpbC1yb3c+XHJcbiAqICAgICAgICAgIDwvZGl2PlxyXG4gKiAgICAgIC4uLlxyXG4gKiAgICBgXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gKiAgICBwdWJsaWMgZGF0YVRhYmxlID0gW3tcclxuICogICAgICBjb2RlOiAxMjAwLFxyXG4gKiAgICAgIHByb2R1Y3Q6ICdSaWNlJyxcclxuICogICAgICBjb3N0dW1lcjogJ1N1cGVybWFya2V0IDEnLFxyXG4gKiAgICAgIHF1YW50aXR5OiAzLFxyXG4gKiAgICAgIHN0YXR1czogJ2RlbGl2ZXJlZCcsXHJcbiAqICAgICAgbGljZW5zZV9wbGF0ZTogJ01ESkQ5MTkxJyxcclxuICogICAgICBiYXRjaF9wcm9kdWN0OiAxODA0MTgyMixcclxuICogICAgICBkcml2ZXI6ICdKb3PDqSBPbGl2ZWlyYSdcclxuICogICAgfSwge1xyXG4gKiAgICAgIGNvZGU6IDEzNTUsXHJcbiAqICAgICAgcHJvZHVjdDogJ0JlYW4nLFxyXG4gKiAgICAgIGNvc3R1bWVyOiAnU3VwZXJtYXJrZXQgMicsXHJcbiAqICAgICAgcXVhbnRpdHk6IDEsXHJcbiAqICAgICAgc3RhdHVzOiAndHJhbnNwb3J0JyxcclxuICogICAgICBsaWNlbnNlX3BsYXRlOiAnWFhBNTQ1NCcsXHJcbiAqICAgICAgYmF0Y2hfcHJvZHVjdDogMTgwNDE4MjEsXHJcbiAqICAgICAgZHJpdmVyOiAnRnJhbmNpc2NvIFBlcmVpcmEnXHJcbiAqICAgIH1dO1xyXG4gKlxyXG4gKiAgICBpc1VuZGVsaXZlcmVkKHJvdywgaW5kZXg6IG51bWJlcikge1xyXG4gKiAgICAgIHJldHVybiByb3cuc3RhdHVzICE9PSAnZGVsaXZlcmVkJztcclxuICogICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiA+IE5vIGV4ZW1wbG8gYWNpbWEsIHNvbWVudGUgc2Vyw6EgZGlzcG9uaWJpbGl6YWRvIG9zIGRldGFsaGVzIGRlIGluZm9ybWHDp8O1ZXMgbmFzIGxpbmhhcyBjdWpvIG8gdmFsb3IgZGUgYHN0YXR1c2BcclxuICogbsOjbyBjb3JyZXNwb25kYW0gw6AgKmRlbGl2ZXJlZCouXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1twLXRhYmxlLXJvdy10ZW1wbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RhYmxlUm93VGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgZGV2ZSByZXRvcm5hciB1bSB2YWxvciBib29sZWFubywgaW5mb3JtYW5kbyBzZSBhcHJlc2VudGFyw6EgbyB0ZW1wbGF0ZSBkYSBsaW5oYS5cclxuICAgKiBTZXLDo28gcGFzc2Fkb3MgbyBvYmpldG8gZGEgbGluaGEgZSBvIGluZGljZSBkYSBtZXNtYSBwb3IgcGFyw6JtZXRybywgcGFyYSBxdWUgc2VqYSBwb3Nzw612ZWxcclxuICAgKiB0b21hciB1bWEgZGVjaXPDo28gYSBwYXJ0aXIgZG8gb2JqZXRvIGRhIGxpbmhhIGNvcnJlbnRlLlxyXG4gICAqXHJcbiAgICogQ2FzbyBuw6NvIHNlciB1dGlsaXphZG8gZXN0YSBwcm9wcmllZGFkZSwgc2Vyw6NvIGFwcmVzZW50YWRvcyB0b2RvcyBvcyBkZXRhbGhlcyBkYXMgbGluaGFzLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYHRydWVgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXRhYmxlLXJvdy10ZW1wbGF0ZS1zaG93JykgcG9UYWJsZVJvd1RlbXBsYXRlU2hvdzogKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF90YWJsZVJvd1RlbXBsYXRlQXJyb3dEaXJlY3Rpb246IFBvVGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uID0gUG9UYWJsZVJvd1RlbXBsYXRlQXJyb3dEaXJlY3Rpb24uTGVmdDtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFByb3ByaWVkYWRlIHJlc3BvbnPDoXZlbCBwb3IgaW5mb3JtYXIgYSBwb3Npw6fDo28gZG8gY29sYXBzZSBxdWUgYWJyaXLDoSBvcyBkZXRhbGhlcyBkYSBsaW5oYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGAnTEVGVCdgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXRhYmxlLXJvdy10ZW1wbGF0ZS1hcnJvdy1kaXJlY3Rpb24nKSBzZXQgdGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uKFxyXG4gICAgdmFsdWU6IFBvVGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uXHJcbiAgKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlPy50b1VwcGVyQ2FzZSgpIGFzIFBvVGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uO1xyXG4gICAgdGhpcy5fdGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoUG9UYWJsZVJvd1RlbXBsYXRlQXJyb3dEaXJlY3Rpb24pLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgICA/IHZhbHVlXHJcbiAgICAgIDogUG9UYWJsZVJvd1RlbXBsYXRlQXJyb3dEaXJlY3Rpb24uTGVmdDtcclxuICB9XHJcblxyXG4gIGdldCB0YWJsZVJvd1RlbXBsYXRlQXJyb3dEaXJlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gTmVjZXNzw6FyaW8gbWFudGVyIHRlbXBsYXRlUmVmIHBhcmEgbyBmdW5jaW9uYW1lbnRvIGRvIHJvdyB0ZW1wbGF0ZS5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuIl19