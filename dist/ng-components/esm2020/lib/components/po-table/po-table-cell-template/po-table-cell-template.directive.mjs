import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoTableComponent
 *
 * @description
 *
 * Esta diretiva permite que seja possível alterar o conteúdo das células de uma coluna, para que os valores possam ser exibidos
 * de acordo com a necessidade do usuário.
 *
 * Em seu uso, deve-se apenas adicionar a diretiva **p-table-cell-template** à tag `ng-template`.
 *
 * Retorno:
 *  - `column`: conteúdo da coluna corrente.
 *  - `row`: conteúdo da linha corrente
 *
 * Modo de uso:
 *
 * ```
 * ...
 * <po-table
 *   [p-columns]="columns"
 *   [p-items]="items">
 *     <ng-template p-table-cell-template let-column="column" let-row="row">
 *      <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
 *        <h1 [style.background]="'red'">CANCELADA</h1>
 *        <span (click)="onClick()"><small>clique aqui</small></span>
 *      </div>
 *      <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
 *      <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
 *      <h1 *ngIf="column.property === 'status2'">Conteúdo do status 2</h1>
 *      <h1 *ngIf="column.property === 'status3'">Conteúdo do status 3</h1>
 *    </ng-template>
 * ...
 * ```
 * > No exemplo acima, o usuário tem como retorno `row` e a `column` corrente, neste caso ele tem total liberdade para manipular os objetos.
 *
 * Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.
 * ```
 * ...
 * export class AppComponent {
 *
 *    items = [{
 *      code: 1200,
 *      product: 'Rice',
 *      status: 'CANCELED',
 *      status2: '',
 *      status3: ''
 *      },{
 *      code: 1355,
 *      product: 'Bean',
 *      status: 'FINISHED',
 *      status2: '',
 *      status3: ''
 *      }];
 *
 *    columns = [
 *       { property: 'code', label: 'ID' },
 *       { property: 'product', label: 'PRODUTO' },
 *       { property: 'status', label: 'STATUS', type: 'cellTemplate' },
 *       { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
 *       { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
 *    ];
 * }
 * ...
 * ```
 * > Observação: Sempre adicionar o **type** da coluna que deseja manipular com a directiva como `cellTemplate`
 */
export class PoTableCellTemplateDirective {
    // Necessário manter templateRef para o funcionamento do cell template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoTableCellTemplateDirective.ɵfac = function PoTableCellTemplateDirective_Factory(t) { return new (t || PoTableCellTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoTableCellTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTableCellTemplateDirective, selectors: [["", "p-table-cell-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableCellTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-table-cell-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtY2VsbC10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFibGUvcG8tdGFibGUtY2VsbC10ZW1wbGF0ZS9wby10YWJsZS1jZWxsLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQUN2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRUc7QUFJSCxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLHVFQUF1RTtJQUN2RSxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDOzt3R0FGekMsNEJBQTRCOytFQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLyoqXHJcbiAqIEB1c2VkQnkgUG9UYWJsZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0YSBkaXJldGl2YSBwZXJtaXRlIHF1ZSBzZWphIHBvc3PDrXZlbCBhbHRlcmFyIG8gY29udGXDumRvIGRhcyBjw6lsdWxhcyBkZSB1bWEgY29sdW5hLCBwYXJhIHF1ZSBvcyB2YWxvcmVzIHBvc3NhbSBzZXIgZXhpYmlkb3NcclxuICogZGUgYWNvcmRvIGNvbSBhIG5lY2Vzc2lkYWRlIGRvIHVzdcOhcmlvLlxyXG4gKlxyXG4gKiBFbSBzZXUgdXNvLCBkZXZlLXNlIGFwZW5hcyBhZGljaW9uYXIgYSBkaXJldGl2YSAqKnAtdGFibGUtY2VsbC10ZW1wbGF0ZSoqIMOgIHRhZyBgbmctdGVtcGxhdGVgLlxyXG4gKlxyXG4gKiBSZXRvcm5vOlxyXG4gKiAgLSBgY29sdW1uYDogY29udGXDumRvIGRhIGNvbHVuYSBjb3JyZW50ZS5cclxuICogIC0gYHJvd2A6IGNvbnRlw7pkbyBkYSBsaW5oYSBjb3JyZW50ZVxyXG4gKlxyXG4gKiBNb2RvIGRlIHVzbzpcclxuICpcclxuICogYGBgXHJcbiAqIC4uLlxyXG4gKiA8cG8tdGFibGVcclxuICogICBbcC1jb2x1bW5zXT1cImNvbHVtbnNcIlxyXG4gKiAgIFtwLWl0ZW1zXT1cIml0ZW1zXCI+XHJcbiAqICAgICA8bmctdGVtcGxhdGUgcC10YWJsZS1jZWxsLXRlbXBsYXRlIGxldC1jb2x1bW49XCJjb2x1bW5cIiBsZXQtcm93PVwicm93XCI+XHJcbiAqICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi5wcm9wZXJ0eSA9PT0gJ3N0YXR1cycgJiYgcm93LnN0YXR1cyA9PT0gJ0NBTkNFTEVEJ1wiPlxyXG4gKiAgICAgICAgPGgxIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIidyZWQnXCI+Q0FOQ0VMQURBPC9oMT5cclxuICogICAgICAgIDxzcGFuIChjbGljayk9XCJvbkNsaWNrKClcIj48c21hbGw+Y2xpcXVlIGFxdWk8L3NtYWxsPjwvc3Bhbj5cclxuICogICAgICA8L2Rpdj5cclxuICogICAgICA8aDEgKm5nSWY9XCJjb2x1bW4ucHJvcGVydHkgPT09ICdzdGF0dXMnICYmIHJvdy5zdGF0dXMgPT09ICdGSU5JU0hFRCdcIiBbc3R5bGUuYmFja2dyb3VuZF09XCInZ3JlZW4nXCI+RklOQUxJWkFEQTwvaDE+XHJcbiAqICAgICAgPGgxICpuZ0lmPVwiY29sdW1uLnByb3BlcnR5ID09PSAnc3RhdHVzJyAmJiByb3cuc3RhdHVzID09PSAnT1BFTkVEJ1wiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIidvcmFuZ2UnXCI+QUJFUlRBPC9oMT5cclxuICogICAgICA8aDEgKm5nSWY9XCJjb2x1bW4ucHJvcGVydHkgPT09ICdzdGF0dXMyJ1wiPkNvbnRlw7pkbyBkbyBzdGF0dXMgMjwvaDE+XHJcbiAqICAgICAgPGgxICpuZ0lmPVwiY29sdW1uLnByb3BlcnR5ID09PSAnc3RhdHVzMydcIj5Db250ZcO6ZG8gZG8gc3RhdHVzIDM8L2gxPlxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAuLi5cclxuICogYGBgXHJcbiAqID4gTm8gZXhlbXBsbyBhY2ltYSwgbyB1c3XDoXJpbyB0ZW0gY29tbyByZXRvcm5vIGByb3dgIGUgYSBgY29sdW1uYCBjb3JyZW50ZSwgbmVzdGUgY2FzbyBlbGUgdGVtIHRvdGFsIGxpYmVyZGFkZSBwYXJhIG1hbmlwdWxhciBvcyBvYmpldG9zLlxyXG4gKlxyXG4gKiBBYmFpeG8sIGEgZGVjbGFyYcOnw6NvIGRvcyBkYWRvcyBkZSBlbnRyYWRhIGRvIFBPLVRBQkxFIHBhcmEgbyB1c28gZGEgZGlyZWN0aXZhLlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gKlxyXG4gKiAgICBpdGVtcyA9IFt7XHJcbiAqICAgICAgY29kZTogMTIwMCxcclxuICogICAgICBwcm9kdWN0OiAnUmljZScsXHJcbiAqICAgICAgc3RhdHVzOiAnQ0FOQ0VMRUQnLFxyXG4gKiAgICAgIHN0YXR1czI6ICcnLFxyXG4gKiAgICAgIHN0YXR1czM6ICcnXHJcbiAqICAgICAgfSx7XHJcbiAqICAgICAgY29kZTogMTM1NSxcclxuICogICAgICBwcm9kdWN0OiAnQmVhbicsXHJcbiAqICAgICAgc3RhdHVzOiAnRklOSVNIRUQnLFxyXG4gKiAgICAgIHN0YXR1czI6ICcnLFxyXG4gKiAgICAgIHN0YXR1czM6ICcnXHJcbiAqICAgICAgfV07XHJcbiAqXHJcbiAqICAgIGNvbHVtbnMgPSBbXHJcbiAqICAgICAgIHsgcHJvcGVydHk6ICdjb2RlJywgbGFiZWw6ICdJRCcgfSxcclxuICogICAgICAgeyBwcm9wZXJ0eTogJ3Byb2R1Y3QnLCBsYWJlbDogJ1BST0RVVE8nIH0sXHJcbiAqICAgICAgIHsgcHJvcGVydHk6ICdzdGF0dXMnLCBsYWJlbDogJ1NUQVRVUycsIHR5cGU6ICdjZWxsVGVtcGxhdGUnIH0sXHJcbiAqICAgICAgIHsgcHJvcGVydHk6ICdzdGF0dXMyJywgbGFiZWw6ICdTVEFUVVMgMicsIHR5cGU6ICdjZWxsVGVtcGxhdGUnIH0sXHJcbiAqICAgICAgIHsgcHJvcGVydHk6ICdzdGF0dXMzJywgbGFiZWw6ICdTVEFUVVMgMycsIHR5cGU6ICdjZWxsVGVtcGxhdGUnIH1cclxuICogICAgXTtcclxuICogfVxyXG4gKiAuLi5cclxuICogYGBgXHJcbiAqID4gT2JzZXJ2YcOnw6NvOiBTZW1wcmUgYWRpY2lvbmFyIG8gKip0eXBlKiogZGEgY29sdW5hIHF1ZSBkZXNlamEgbWFuaXB1bGFyIGNvbSBhIGRpcmVjdGl2YSBjb21vIGBjZWxsVGVtcGxhdGVgXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1twLXRhYmxlLWNlbGwtdGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZUNlbGxUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgLy8gTmVjZXNzw6FyaW8gbWFudGVyIHRlbXBsYXRlUmVmIHBhcmEgbyBmdW5jaW9uYW1lbnRvIGRvIGNlbGwgdGVtcGxhdGUuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcbiJdfQ==