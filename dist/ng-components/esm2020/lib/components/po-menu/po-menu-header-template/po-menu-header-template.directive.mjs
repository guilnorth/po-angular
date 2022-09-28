import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoMenuComponent
 *
 * @description
 *
 * Esta diretiva permite adicionar um conteúdo personalizado entre a logo e o campo de filtro do cabeçalho do
 * [`po-menu`](/documentation/po-menu).
 *
 * Para personalizar o conteúdo do cabeçalho deve-se utilizar a diretiva `p-menu-header-template` dentro da *tag* do
 * [`po-menu`](/documentation/po-menu). Podendo ser utilizada de duas formas:
 *
 * Com `ng-template`
 * ```
 * ...
 * <po-menu [p-menus]="menus">
 *   <ng-template p-menu-header-template>
 *     ...
 *   </ng-template>
 * </po-menu>
 * ...
 * ```
 *
 * ou com *syntax sugar*
 * ```
 * ...
 * <po-menu [p-menus]="menus">
 *   <div *p-menu-header-template>
 *     ...
 *   </div>
 * </po-menu>
 * ...
 * ```
 *
 * > Quando o menu estiver colapsado ou tela for _mobile_ o conteúdo personalizado não será exibido.
 */
export class PoMenuHeaderTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template.
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoMenuHeaderTemplateDirective.ɵfac = function PoMenuHeaderTemplateDirective_Factory(t) { return new (t || PoMenuHeaderTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoMenuHeaderTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoMenuHeaderTemplateDirective, selectors: [["", "p-menu-header-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuHeaderTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[p-menu-header-template]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUvcG8tbWVudS1oZWFkZXItdGVtcGxhdGUvcG8tbWVudS1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBRXZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0NHO0FBSUgsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxzRUFBc0U7SUFDdEUsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7MEdBRnpDLDZCQUE2QjtnRkFBN0IsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FIekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHVzZWRCeSBQb01lbnVDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGEgZGlyZXRpdmEgcGVybWl0ZSBhZGljaW9uYXIgdW0gY29udGXDumRvIHBlcnNvbmFsaXphZG8gZW50cmUgYSBsb2dvIGUgbyBjYW1wbyBkZSBmaWx0cm8gZG8gY2FiZcOnYWxobyBkb1xyXG4gKiBbYHBvLW1lbnVgXSgvZG9jdW1lbnRhdGlvbi9wby1tZW51KS5cclxuICpcclxuICogUGFyYSBwZXJzb25hbGl6YXIgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxobyBkZXZlLXNlIHV0aWxpemFyIGEgZGlyZXRpdmEgYHAtbWVudS1oZWFkZXItdGVtcGxhdGVgIGRlbnRybyBkYSAqdGFnKiBkb1xyXG4gKiBbYHBvLW1lbnVgXSgvZG9jdW1lbnRhdGlvbi9wby1tZW51KS4gUG9kZW5kbyBzZXIgdXRpbGl6YWRhIGRlIGR1YXMgZm9ybWFzOlxyXG4gKlxyXG4gKiBDb20gYG5nLXRlbXBsYXRlYFxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqIDxwby1tZW51IFtwLW1lbnVzXT1cIm1lbnVzXCI+XHJcbiAqICAgPG5nLXRlbXBsYXRlIHAtbWVudS1oZWFkZXItdGVtcGxhdGU+XHJcbiAqICAgICAuLi5cclxuICogICA8L25nLXRlbXBsYXRlPlxyXG4gKiA8L3BvLW1lbnU+XHJcbiAqIC4uLlxyXG4gKiBgYGBcclxuICpcclxuICogb3UgY29tICpzeW50YXggc3VnYXIqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogPHBvLW1lbnUgW3AtbWVudXNdPVwibWVudXNcIj5cclxuICogICA8ZGl2ICpwLW1lbnUtaGVhZGVyLXRlbXBsYXRlPlxyXG4gKiAgICAgLi4uXHJcbiAqICAgPC9kaXY+XHJcbiAqIDwvcG8tbWVudT5cclxuICogLi4uXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiA+IFF1YW5kbyBvIG1lbnUgZXN0aXZlciBjb2xhcHNhZG8gb3UgdGVsYSBmb3IgX21vYmlsZV8gbyBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBuw6NvIHNlcsOhIGV4aWJpZG8uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1twLW1lbnUtaGVhZGVyLXRlbXBsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTWVudUhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAvLyBOZWNlc3PDoXJpbyBtYW50ZXIgdGVtcGxhdGVSZWYgcGFyYSBvIGZ1bmNpb25hbWVudG8gZG8gcm93IHRlbXBsYXRlLlxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cclxufVxyXG4iXX0=