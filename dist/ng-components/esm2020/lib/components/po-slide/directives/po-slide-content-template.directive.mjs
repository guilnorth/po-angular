import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoSlideComponent
 *
 * @description
 *
 * Esta diretiva permite a customização de um slide.
 *
 * Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.
 *  - Item: `item` determina o item do slide corrente.
 *  - Índice: `index` determina o índice do slide corrente.
 *
 * Esta diretiva pode ser usada de duas formas: explícita ou *syntax sugar*. Veja a seguir ambos, respectivamente:
 *
 * ```
 * ...
 * <po-slide
 *   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">
 *
 *   <ng-template p-slide-content-template let-item let-code="index">
 *     <div class="po-row">
 *       <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>
 *       <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
 *     </div>
 *   </ng-template>
 *
 * </po-slide>
 *
 * ...
 * ```
 *
 * ```
 * ...
 * <po-slide
 *    [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">
 *
 *    <div *p-slide-content-template="let item, let i=index" class="po-row">
 *      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
 *    </div>
 * </po-slide>
 * ...
 *
 * ```
 */
export class PoSlideContentTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoSlideContentTemplateDirective.ɵfac = function PoSlideContentTemplateDirective_Factory(t) { return new (t || PoSlideContentTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoSlideContentTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoSlideContentTemplateDirective, selectors: [["", "p-slide-content-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideContentTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-slide-content-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUtY29udGVudC10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc2xpZGUvZGlyZWN0aXZlcy9wby1zbGlkZS1jb250ZW50LXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQUV2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENHO0FBSUgsTUFBTSxPQUFPLCtCQUErQjtJQUMxQyxzRUFBc0U7SUFDdEUsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7OEdBRnpDLCtCQUErQjtrRkFBL0IsK0JBQStCO3VGQUEvQiwrQkFBK0I7Y0FIM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHVzZWRCeSBQb1NsaWRlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBFc3RhIGRpcmV0aXZhIHBlcm1pdGUgYSBjdXN0b21pemHDp8OjbyBkZSB1bSBzbGlkZS5cclxuICpcclxuICogRGV2ZS1zZSB1dGlsaXphciBjb21vIHBhcsOibWV0cm8gYSByZWZlcsOqbmNpYSBkbyBpdGVtIGUvb3Ugw61uZGljZSwgc2VuZG8gcG9yIHBhZHLDo28gbyBpdGVtLlxyXG4gKiAgLSBJdGVtOiBgaXRlbWAgZGV0ZXJtaW5hIG8gaXRlbSBkbyBzbGlkZSBjb3JyZW50ZS5cclxuICogIC0gw41uZGljZTogYGluZGV4YCBkZXRlcm1pbmEgbyDDrW5kaWNlIGRvIHNsaWRlIGNvcnJlbnRlLlxyXG4gKlxyXG4gKiBFc3RhIGRpcmV0aXZhIHBvZGUgc2VyIHVzYWRhIGRlIGR1YXMgZm9ybWFzOiBleHBsw61jaXRhIG91ICpzeW50YXggc3VnYXIqLiBWZWphIGEgc2VndWlyIGFtYm9zLCByZXNwZWN0aXZhbWVudGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPHBvLXNsaWRlXHJcbiAqICAgW3Atc2xpZGVzXT1cIlt7IGlkOiAxLCBuYW1lOiAnUmVnaXN0ZXInLCBlbWFpbDogJ3JlZ2lzdGVyQHBvLXVpLmNvbScgfV1cIj5cclxuICpcclxuICogICA8bmctdGVtcGxhdGUgcC1zbGlkZS1jb250ZW50LXRlbXBsYXRlIGxldC1pdGVtIGxldC1jb2RlPVwiaW5kZXhcIj5cclxuICogICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICogICAgICAgPHBvLWluZm8gY2xhc3M9XCJwby1tZC02XCIgcC1sYWJlbD1cIkNvZGVcIiBbcC12YWx1ZV09XCJpdGVtLmlkXCI+PC9wby1pbmZvPlxyXG4gKiAgICAgICA8cG8taW5mbyBjbGFzcz1cInBvLW1kLTZcIiBwLWxhYmVsPVwiRW1haWxcIiBbcC12YWx1ZV09XCJpdGVtLmVtYWlsXCI+PC9wby1pbmZvPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgPC9uZy10ZW1wbGF0ZT5cclxuICpcclxuICogPC9wby1zbGlkZT5cclxuICpcclxuICogLi4uXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1zbGlkZVxyXG4gKiAgICBbcC1zbGlkZXNdPVwiW3sgaWQ6IDEsIG5hbWU6ICdSZWdpc3RlcicsIGVtYWlsOiAncmVnaXN0ZXJAcG8tdWkuY29tJyB9XVwiPlxyXG4gKlxyXG4gKiAgICA8ZGl2ICpwLXNsaWRlLWNvbnRlbnQtdGVtcGxhdGU9XCJsZXQgaXRlbSwgbGV0IGk9aW5kZXhcIiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gKiAgICAgIDxwby1pbmZvIGNsYXNzPVwicG8tbWQtMTJcIiBwLWxhYmVsPVwiRW1haWxcIiBbcC12YWx1ZV09XCJpdGVtLmVtYWlsXCI+PC9wby1pbmZvPlxyXG4gKiAgICA8L2Rpdj5cclxuICogPC9wby1zbGlkZT5cclxuICogLi4uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcC1zbGlkZS1jb250ZW50LXRlbXBsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvU2xpZGVDb250ZW50VGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gIC8vIE5lY2Vzc8OhcmlvIG1hbnRlciB0ZW1wbGF0ZVJlZiBwYXJhIG8gZnVuY2lvbmFtZW50byBkbyByb3cgdGVtcGxhdGUuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcbiJdfQ==