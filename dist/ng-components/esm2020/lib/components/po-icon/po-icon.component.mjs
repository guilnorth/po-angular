import { Input, TemplateRef, Component, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoIconComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 2);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.class);
} }
/**
 * @docsPrivate
 *
 * @usedBy PoButton
 *
 * @description
 *
 * Permite a exibição de ícones.
 */
export class PoIconComponent {
    constructor() { }
    /**
     * Define o ícone a ser exibido.
     *
     * É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-button p-icon="po-icon-user" p-label="PO button"></po-button>
     * ```
     * Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-button [p-icon]="template" p-label="button template ionic"></po-button>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     */
    set icon(value) {
        if (typeof value === 'string') {
            this.addClasses(value);
        }
        else if (value instanceof TemplateRef) {
            this._icon = value;
        }
    }
    get icon() {
        return this._icon;
    }
    addClasses(value) {
        this.class = value.startsWith('po-icon-')
            ? (this.class = `po-icon ${value}`)
            : (this.class = `po-fonts-icon ${value}`);
    }
}
PoIconComponent.ɵfac = function PoIconComponent_Factory(t) { return new (t || PoIconComponent)(); };
PoIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoIconComponent, selectors: [["po-icon"]], inputs: { icon: ["p-icon", "icon"] }, decls: 3, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["fontTemplate", ""], ["aria-hidden", "true"]], template: function PoIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoIconComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PoIconComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.class)("ngIfThen", _r1)("ngIfElse", ctx.icon);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoIconComponent, [{
        type: Component,
        args: [{ selector: 'po-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"class; then fontTemplate; else icon\"></ng-container>\r\n\r\n<ng-template #fontTemplate>\r\n  <i [class]=\"class\" aria-hidden=\"true\"></i>\r\n</ng-template>\r\n" }]
    }], function () { return []; }, { icon: [{
            type: Input,
            args: ['p-icon']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8taWNvbi9wby1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1pY29uL3BvLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQXZGLHdCQUF5RTs7O0lBR3ZFLHVCQUEwQzs7O0lBQXZDLDJCQUFlOztBRERwQjs7Ozs7Ozs7R0FRRztBQU1ILE1BQU0sT0FBTyxlQUFlO0lBSTFCLGdCQUFlLENBQUM7SUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ0gsSUFBcUIsSUFBSSxDQUFDLEtBQWlDO1FBQ3pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OzhFQTNDVSxlQUFlO2tFQUFmLGVBQWU7UUNoQjVCLGtGQUF5RTtRQUV6RSxpSEFFYzs7O1FBSkMsZ0NBQWEsaUJBQUEsc0JBQUE7O3VGRGdCZixlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsU0FBUyxtQkFFRix1QkFBdUIsQ0FBQyxNQUFNO3NDQTZCMUIsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEB1c2VkQnkgUG9CdXR0b25cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFBlcm1pdGUgYSBleGliacOnw6NvIGRlIMOtY29uZXMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWljb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9JY29uQ29tcG9uZW50IHtcclxuICBjbGFzczogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2ljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBvIMOtY29uZSBhIHNlciBleGliaWRvLlxyXG4gICAqXHJcbiAgICogw4kgcG9zc8OtdmVsIHVzYXIgcXVhbHF1ZXIgdW0gZG9zIMOtY29uZXMgZGEgW0JpYmxpb3RlY2EgZGUgw61jb25lc10oL2d1aWRlcy9pY29ucykuIGNvbmZvcm1lIGV4ZW1wbG8gYWJhaXhvOlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1idXR0b24gcC1pY29uPVwicG8taWNvbi11c2VyXCIgcC1sYWJlbD1cIlBPIGJ1dHRvblwiPjwvcG8tYnV0dG9uPlxyXG4gICAqIGBgYFxyXG4gICAqIFRhbWLDqW0gw6kgcG9zc8OtdmVsIHV0aWxpemFyIG91dHJhcyBmb250ZXMgZGUgw61jb25lcywgcG9yIGV4ZW1wbG8gYSBiaWJsaW90ZWNhICpGb250IEF3ZXNvbWUqLCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tYnV0dG9uIHAtaWNvbj1cImZhIGZhLXBvZGNhc3RcIiBwLWxhYmVsPVwiUE8gYnV0dG9uXCI+PC9wby1idXR0b24+XHJcbiAgICogYGBgXHJcbiAgICogT3V0cmEgb3DDp8OjbyBzZXJpYSBhIGN1c3RvbWl6YcOnw6NvIGRvIMOtY29uZSBhdHJhdsOpcyBkbyBgVGVtcGxhdGVSZWZgLCBjb25mb3JtZSBleGVtcGxvIGFiYWl4bzpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tYnV0dG9uIFtwLWljb25dPVwidGVtcGxhdGVcIiBwLWxhYmVsPVwiYnV0dG9uIHRlbXBsYXRlIGlvbmljXCI+PC9wby1idXR0b24+XHJcbiAgICpcclxuICAgKiA8bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxyXG4gICAqICA8aW9uLWljb24gc3R5bGU9XCJmb250LXNpemU6IGluaGVyaXRcIiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxyXG4gICAqIDwvbmctdGVtcGxhdGU+XHJcbiAgICogYGBgXHJcbiAgICogPiBQYXJhIG8gw61jb25lIGVucXVhZHJhciBjb3JyZXRhbWVudGUsIGRldmUtc2UgdXRpbGl6YXIgYGZvbnQtc2l6ZTogaW5oZXJpdGAgY2FzbyBvIMOtY29uZSB1dGlsaXphZG8gbsOjbyBhcGxpcXVlLW8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWljb24nKSBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuYWRkQ2xhc3Nlcyh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGljb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQ2xhc3Nlcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNsYXNzID0gdmFsdWUuc3RhcnRzV2l0aCgncG8taWNvbi0nKVxyXG4gICAgICA/ICh0aGlzLmNsYXNzID0gYHBvLWljb24gJHt2YWx1ZX1gKVxyXG4gICAgICA6ICh0aGlzLmNsYXNzID0gYHBvLWZvbnRzLWljb24gJHt2YWx1ZX1gKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsYXNzOyB0aGVuIGZvbnRUZW1wbGF0ZTsgZWxzZSBpY29uXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2ZvbnRUZW1wbGF0ZT5cclxuICA8aSBbY2xhc3NdPVwiY2xhc3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==