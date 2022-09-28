import { ElementRef, Input, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { PO_CONTROL_POSITIONS } from './../../services/po-control-position/po-control-position.constants';
import * as i0 from "@angular/core";
const poPopupDefaultPosition = 'bottom-left';
/**
 * @description
 *
 * O componente `po-popup` é um container pequeno recomendado para ações de navegação:
 * Ele abre sobreposto aos outros componentes.
 *
 * É possível escolher as posições do `po-popup` em relação ao componente alvo, para isto veja a propriedade `p-position`.
 *
 * Também é possível informar um _template_ _header_ para o `po-popup`, que será exibido acima das ações.
 * Para funcionar corretamente é preciso adicionar a propriedade `p-popup-header-template` no elemento que servirá de template, por exemplo:
 *
 * ```
 * <po-popup [p-target]="target">
 *   <div p-popup-header-template>
 *     <div>
 *       Dev PO
 *     </div>
 *     <div>
 *       dev.po@po-ui.com.br
 *     </div>
 *   </div>
 * </po-popup >
 * ```
 */
export class PoPopupBaseComponent {
    constructor() {
        this.arrowDirection = 'top-right';
        this.showPopup = false;
        this._hideArrow = false;
        this._isCornerAlign = false;
        this._position = poPopupDefaultPosition;
    }
    /** Lista de ações que serão exibidas no componente. */
    set actions(value) {
        this._actions = Array.isArray(value) ? value : [];
    }
    get actions() {
        return this._actions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Oculta a seta do componente *popup*.
     *
     * @default `false`
     */
    set hideArrow(value) {
        this._hideArrow = convertToBoolean(value);
    }
    get hideArrow() {
        return this._hideArrow;
    }
    // Define se o `po-popup` será alinhado pelos cantos do elemento target.
    set isCornerAlign(value) {
        this._isCornerAlign = convertToBoolean(value);
    }
    get isCornerAlign() {
        return this._isCornerAlign;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a posição inicial que o `po-popup` abrirá em relação ao componente alvo. Sugere-se que seja
     * usada a orientação `bottom-left` (abaixo e a esquerda), porém o mesmo é flexível e será rotacionado
     * automaticamente para se adequar a tela, caso necessário.
     *
     * > Caso seja definido um `p-custom-positions` o componente irá abrir na posição definida na propriedade `p-position`
     * e caso não caiba na posição inicial ele irá rotacionar seguindo a ordem de posições definidas no `p-custom-positions`.
     *
     * Posições válidas:
     * - `right`: Posiciona o po-popup no lado direito do componente alvo.
     * - `right-bottom`: Posiciona o po-popup no lado direito inferior do componente alvo.
     * - `right-top`: Posiciona o po-popup no lado direito superior do componente alvo.
     * - `bottom`: Posiciona o po-popup abaixo do componente alvo.
     * - `bottom-left`: Posiciona o po-popup abaixo e à esquerda do componente alvo.
     * - `bottom-right`: Posiciona o po-popup abaixo e à direita do componente alvo.
     * - `left`: Posiciona o po-popup no lado esquerdo do componente alvo.
     * - `left-top`: Posiciona o po-popup no lado esquerdo superior do componente alvo.
     * - `left-bottom`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.
     * - `top`: Posiciona o po-popup acima do componente alvo.
     * - `top-right`: Posiciona o po-popup acima e à direita do componente alvo.
     * - `top-left`: Posiciona o po-popup acima e à esquerda do componente alvo.
     *
     * @default `bottom-left`
     */
    set position(value) {
        this._position = PO_CONTROL_POSITIONS.includes(value) ? value : poPopupDefaultPosition;
    }
    get position() {
        return this._position;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define as posições e a sequência que o `po-popup` poderá rotacionar. A sequência será definida pela ordem passada
     * no *array*. Caso não seja definido, o `po-popup` irá rotacionar em todas as posições válidas.
     *
     * > O componente sempre irá abrir na posição definida no `p-position` e caso não caiba na posição definida o mesmo
     * irá rotacionar seguindo a ordem definida pelo `p-custom-position`.
     *
     * Posições válidas:
     * - `right`: Posiciona o po-popup no lado direito do componente alvo.
     * - `right-bottom`: Posiciona o po-popup no lado direito inferior do componente alvo.
     * - `right-top`: Posiciona o po-popup no lado direito superior do componente alvo.
     * - `bottom`: Posiciona o po-popup abaixo do componente alvo.
     * - `bottom-left`: Posiciona o po-popup abaixo e à esquerda do componente alvo.
     * - `bottom-right`: Posiciona o po-popup abaixo e à direita do componente alvo.
     * - `left`: Posiciona o po-popup no lado esquerdo do componente alvo.
     * - `left-top`: Posiciona o po-popup no lado esquerdo superior do componente alvo.
     * - `left-bottom`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.
     * - `top`: Posiciona o po-popup acima do componente alvo.
     * - `top-right`: Posiciona o po-popup acima e à direita do componente alvo.
     * - `top-left`: Posiciona o po-popup acima e à esquerda do componente alvo.
     */
    set customPositions(value) {
        this._customPositions = Array.isArray(value) ? value : [];
    }
    get customPositions() {
        return this._customPositions;
    }
    /**
     * @description
     *
     * Para utilizar o `po-popup` deve-se colocar uma variável local no componente que disparará o evento
     * de abertura no mesmo e com isso, invocará a função `toggle`, por exemplo:
     *
     * ```
     * <span #icon class="po-icon po-icon-credit-payment" (click)="popup.toggle()">
     *   Credit Actions
     * </span>
     *
     * <po-popup #popup
     *   [p-actions]="actions"
     *   [p-target]="icon">
     * </po-popup>
     * ```
     *
     * Caso o elemento alvo for um componente, será preciso obter o `ElementRef` do mesmo e passá-lo à propriedade, por exemplo:
     *
     * ```
     * // component.html
     *
     * <po-button #poButton
     *   p-label="Open Popover"
     *   (p-click)="popup.toggle()">
     * </po-button>
     *
     * <po-popup #popup
     *   [p-actions]="actions"
     *   [p-target]="poButtonRef">
     * </po-popup>
     *
     * // component.ts
     *
     * @ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
     * ```
     */
    set target(value) {
        this._target = value instanceof ElementRef ? value.nativeElement : value;
    }
    get target() {
        return this._target;
    }
}
PoPopupBaseComponent.ɵfac = function PoPopupBaseComponent_Factory(t) { return new (t || PoPopupBaseComponent)(); };
PoPopupBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPopupBaseComponent, inputs: { actions: ["p-actions", "actions"], hideArrow: ["p-hide-arrow", "hideArrow"], isCornerAlign: ["p-is-corner-align", "isCornerAlign"], position: ["p-position", "position"], customPositions: ["p-custom-positions", "customPositions"], target: ["p-target", "target"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPopupBaseComponent, [{
        type: Directive
    }], null, { actions: [{
            type: Input,
            args: ['p-actions']
        }], hideArrow: [{
            type: Input,
            args: ['p-hide-arrow']
        }], isCornerAlign: [{
            type: Input,
            args: ['p-is-corner-align']
        }], position: [{
            type: Input,
            args: ['p-position']
        }], customPositions: [{
            type: Input,
            args: ['p-custom-positions']
        }], target: [{
            type: Input,
            args: ['p-target']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcG9wdXAtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcG9wdXAvcG8tcG9wdXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDOztBQUkxRyxNQUFNLHNCQUFzQixHQUFHLGFBQWEsQ0FBQztBQUU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFFSCxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBRUUsbUJBQWMsR0FBVyxXQUFXLENBQUM7UUFDckMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVNuQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGNBQVMsR0FBWSxzQkFBc0IsQ0FBQztLQXVKckQ7SUFwSkMsdURBQXVEO0lBQ3ZELElBQXdCLE9BQU8sQ0FBQyxLQUEyQjtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBMkIsU0FBUyxDQUFDLEtBQWM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBZ0MsYUFBYSxDQUFDLEtBQWM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMkJHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLEtBQWE7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDekYsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCRztJQUNILElBQWlDLGVBQWUsQ0FBQyxLQUFvQjtRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9DRztJQUNILElBQXVCLE1BQU0sQ0FBQyxLQUFVO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzNFLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7d0ZBbktVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsU0FBUztnQkFrQmdCLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVztZQWlCUyxTQUFTO2tCQUFuQyxLQUFLO21CQUFDLGNBQWM7WUFTVyxhQUFhO2tCQUE1QyxLQUFLO21CQUFDLG1CQUFtQjtZQW9DRCxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFpQ2MsZUFBZTtrQkFBL0MsS0FBSzttQkFBQyxvQkFBb0I7WUE2Q0osTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQT19DT05UUk9MX1BPU0lUSU9OUyB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcG8tY29udHJvbC1wb3NpdGlvbi9wby1jb250cm9sLXBvc2l0aW9uLmNvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb1BvcHVwQWN0aW9uIH0gZnJvbSAnLi9wby1wb3B1cC1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IHBvUG9wdXBEZWZhdWx0UG9zaXRpb24gPSAnYm90dG9tLWxlZnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLXBvcHVwYCDDqSB1bSBjb250YWluZXIgcGVxdWVubyByZWNvbWVuZGFkbyBwYXJhIGHDp8O1ZXMgZGUgbmF2ZWdhw6fDo286XHJcbiAqIEVsZSBhYnJlIHNvYnJlcG9zdG8gYW9zIG91dHJvcyBjb21wb25lbnRlcy5cclxuICpcclxuICogw4kgcG9zc8OtdmVsIGVzY29saGVyIGFzIHBvc2nDp8O1ZXMgZG8gYHBvLXBvcHVwYCBlbSByZWxhw6fDo28gYW8gY29tcG9uZW50ZSBhbHZvLCBwYXJhIGlzdG8gdmVqYSBhIHByb3ByaWVkYWRlIGBwLXBvc2l0aW9uYC5cclxuICpcclxuICogVGFtYsOpbSDDqSBwb3Nzw612ZWwgaW5mb3JtYXIgdW0gX3RlbXBsYXRlXyBfaGVhZGVyXyBwYXJhIG8gYHBvLXBvcHVwYCwgcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZGFzIGHDp8O1ZXMuXHJcbiAqIFBhcmEgZnVuY2lvbmFyIGNvcnJldGFtZW50ZSDDqSBwcmVjaXNvIGFkaWNpb25hciBhIHByb3ByaWVkYWRlIGBwLXBvcHVwLWhlYWRlci10ZW1wbGF0ZWAgbm8gZWxlbWVudG8gcXVlIHNlcnZpcsOhIGRlIHRlbXBsYXRlLCBwb3IgZXhlbXBsbzpcclxuICpcclxuICogYGBgXHJcbiAqIDxwby1wb3B1cCBbcC10YXJnZXRdPVwidGFyZ2V0XCI+XHJcbiAqICAgPGRpdiBwLXBvcHVwLWhlYWRlci10ZW1wbGF0ZT5cclxuICogICAgIDxkaXY+XHJcbiAqICAgICAgIERldiBQT1xyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICBkZXYucG9AcG8tdWkuY29tLmJyXHJcbiAqICAgICA8L2Rpdj5cclxuICogICA8L2Rpdj5cclxuICogPC9wby1wb3B1cCA+XHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb1BvcHVwQmFzZUNvbXBvbmVudCB7XHJcbiAgYXJyb3dEaXJlY3Rpb246IHN0cmluZyA9ICd0b3AtcmlnaHQnO1xyXG4gIHNob3dQb3B1cDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgb2xkVGFyZ2V0O1xyXG4gIHByb3RlY3RlZCBwYXJhbTtcclxuICBwcm90ZWN0ZWQgY2xpY2tvdXRMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICBwcm90ZWN0ZWQgcmVzaXplTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgX2FjdGlvbnM6IEFycmF5PFBvUG9wdXBBY3Rpb24+O1xyXG4gIHByaXZhdGUgX2N1c3RvbVBvc2l0aW9ucz86IEFycmF5PHN0cmluZz47XHJcbiAgcHJpdmF0ZSBfaGlkZUFycm93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaXNDb3JuZXJBbGlnbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uPzogc3RyaW5nID0gcG9Qb3B1cERlZmF1bHRQb3NpdGlvbjtcclxuICBwcml2YXRlIF90YXJnZXQ6IGFueTtcclxuXHJcbiAgLyoqIExpc3RhIGRlIGHDp8O1ZXMgcXVlIHNlcsOjbyBleGliaWRhcyBubyBjb21wb25lbnRlLiAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb25zJykgc2V0IGFjdGlvbnModmFsdWU6IEFycmF5PFBvUG9wdXBBY3Rpb24+KSB7XHJcbiAgICB0aGlzLl9hY3Rpb25zID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPY3VsdGEgYSBzZXRhIGRvIGNvbXBvbmVudGUgKnBvcHVwKi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaGlkZS1hcnJvdycpIHNldCBoaWRlQXJyb3codmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVBcnJvdyA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVBcnJvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlQXJyb3c7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgc2UgbyBgcG8tcG9wdXBgIHNlcsOhIGFsaW5oYWRvIHBlbG9zIGNhbnRvcyBkbyBlbGVtZW50byB0YXJnZXQuXHJcbiAgQElucHV0KCdwLWlzLWNvcm5lci1hbGlnbicpIHNldCBpc0Nvcm5lckFsaWduKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0Nvcm5lckFsaWduID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDb3JuZXJBbGlnbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Nvcm5lckFsaWduO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBhIHBvc2nDp8OjbyBpbmljaWFsIHF1ZSBvIGBwby1wb3B1cGAgYWJyaXLDoSBlbSByZWxhw6fDo28gYW8gY29tcG9uZW50ZSBhbHZvLiBTdWdlcmUtc2UgcXVlIHNlamFcclxuICAgKiB1c2FkYSBhIG9yaWVudGHDp8OjbyBgYm90dG9tLWxlZnRgIChhYmFpeG8gZSBhIGVzcXVlcmRhKSwgcG9yw6ltIG8gbWVzbW8gw6kgZmxleMOtdmVsIGUgc2Vyw6Egcm90YWNpb25hZG9cclxuICAgKiBhdXRvbWF0aWNhbWVudGUgcGFyYSBzZSBhZGVxdWFyIGEgdGVsYSwgY2FzbyBuZWNlc3PDoXJpby5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBzZWphIGRlZmluaWRvIHVtIGBwLWN1c3RvbS1wb3NpdGlvbnNgIG8gY29tcG9uZW50ZSBpcsOhIGFicmlyIG5hIHBvc2nDp8OjbyBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBgcC1wb3NpdGlvbmBcclxuICAgKiBlIGNhc28gbsOjbyBjYWliYSBuYSBwb3Npw6fDo28gaW5pY2lhbCBlbGUgaXLDoSByb3RhY2lvbmFyIHNlZ3VpbmRvIGEgb3JkZW0gZGUgcG9zacOnw7VlcyBkZWZpbmlkYXMgbm8gYHAtY3VzdG9tLXBvc2l0aW9uc2AuXHJcbiAgICpcclxuICAgKiBQb3Npw6fDtWVzIHbDoWxpZGFzOlxyXG4gICAqIC0gYHJpZ2h0YDogUG9zaWNpb25hIG8gcG8tcG9wdXAgbm8gbGFkbyBkaXJlaXRvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGByaWdodC1ib3R0b21gOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBubyBsYWRvIGRpcmVpdG8gaW5mZXJpb3IgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHJpZ2h0LXRvcGA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIG5vIGxhZG8gZGlyZWl0byBzdXBlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgYm90dG9tYDogUG9zaWNpb25hIG8gcG8tcG9wdXAgYWJhaXhvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBib3R0b20tbGVmdGA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIGFiYWl4byBlIMOgIGVzcXVlcmRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBib3R0b20tcmlnaHRgOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBhYmFpeG8gZSDDoCBkaXJlaXRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0YDogUG9zaWNpb25hIG8gcG8tcG9wdXAgbm8gbGFkbyBlc3F1ZXJkbyBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgbGVmdC10b3BgOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBubyBsYWRvIGVzcXVlcmRvIHN1cGVyaW9yIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0LWJvdHRvbWA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIG5vIGxhZG8gZXNxdWVyZG8gaW5mZXJpb3IgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcGA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIGFjaW1hIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGB0b3AtcmlnaHRgOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBhY2ltYSBlIMOgIGRpcmVpdGEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcC1sZWZ0YDogUG9zaWNpb25hIG8gcG8tcG9wdXAgYWNpbWEgZSDDoCBlc3F1ZXJkYSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgYm90dG9tLWxlZnRgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXBvc2l0aW9uJykgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gUE9fQ09OVFJPTF9QT1NJVElPTlMuaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiBwb1BvcHVwRGVmYXVsdFBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGFzIHBvc2nDp8O1ZXMgZSBhIHNlcXXDqm5jaWEgcXVlIG8gYHBvLXBvcHVwYCBwb2RlcsOhIHJvdGFjaW9uYXIuIEEgc2VxdcOqbmNpYSBzZXLDoSBkZWZpbmlkYSBwZWxhIG9yZGVtIHBhc3NhZGFcclxuICAgKiBubyAqYXJyYXkqLiBDYXNvIG7Do28gc2VqYSBkZWZpbmlkbywgbyBgcG8tcG9wdXBgIGlyw6Egcm90YWNpb25hciBlbSB0b2RhcyBhcyBwb3Npw6fDtWVzIHbDoWxpZGFzLlxyXG4gICAqXHJcbiAgICogPiBPIGNvbXBvbmVudGUgc2VtcHJlIGlyw6EgYWJyaXIgbmEgcG9zacOnw6NvIGRlZmluaWRhIG5vIGBwLXBvc2l0aW9uYCBlIGNhc28gbsOjbyBjYWliYSBuYSBwb3Npw6fDo28gZGVmaW5pZGEgbyBtZXNtb1xyXG4gICAqIGlyw6Egcm90YWNpb25hciBzZWd1aW5kbyBhIG9yZGVtIGRlZmluaWRhIHBlbG8gYHAtY3VzdG9tLXBvc2l0aW9uYC5cclxuICAgKlxyXG4gICAqIFBvc2nDp8O1ZXMgdsOhbGlkYXM6XHJcbiAgICogLSBgcmlnaHRgOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBubyBsYWRvIGRpcmVpdG8gZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHJpZ2h0LWJvdHRvbWA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIG5vIGxhZG8gZGlyZWl0byBpbmZlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgcmlnaHQtdG9wYDogUG9zaWNpb25hIG8gcG8tcG9wdXAgbm8gbGFkbyBkaXJlaXRvIHN1cGVyaW9yIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBib3R0b21gOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBhYmFpeG8gZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYGJvdHRvbS1sZWZ0YDogUG9zaWNpb25hIG8gcG8tcG9wdXAgYWJhaXhvIGUgw6AgZXNxdWVyZGEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYGJvdHRvbS1yaWdodGA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIGFiYWl4byBlIMOgIGRpcmVpdGEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYGxlZnRgOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBubyBsYWRvIGVzcXVlcmRvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0LXRvcGA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIG5vIGxhZG8gZXNxdWVyZG8gc3VwZXJpb3IgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYGxlZnQtYm90dG9tYDogUG9zaWNpb25hIG8gcG8tcG9wdXAgbm8gbGFkbyBlc3F1ZXJkbyBpbmZlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgdG9wYDogUG9zaWNpb25hIG8gcG8tcG9wdXAgYWNpbWEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcC1yaWdodGA6IFBvc2ljaW9uYSBvIHBvLXBvcHVwIGFjaW1hIGUgw6AgZGlyZWl0YSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgdG9wLWxlZnRgOiBQb3NpY2lvbmEgbyBwby1wb3B1cCBhY2ltYSBlIMOgIGVzcXVlcmRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtY3VzdG9tLXBvc2l0aW9ucycpIHNldCBjdXN0b21Qb3NpdGlvbnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX2N1c3RvbVBvc2l0aW9ucyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBjdXN0b21Qb3NpdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpemFyIG8gYHBvLXBvcHVwYCBkZXZlLXNlIGNvbG9jYXIgdW1hIHZhcmnDoXZlbCBsb2NhbCBubyBjb21wb25lbnRlIHF1ZSBkaXNwYXJhcsOhIG8gZXZlbnRvXHJcbiAgICogZGUgYWJlcnR1cmEgbm8gbWVzbW8gZSBjb20gaXNzbywgaW52b2NhcsOhIGEgZnVuw6fDo28gYHRvZ2dsZWAsIHBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHNwYW4gI2ljb24gY2xhc3M9XCJwby1pY29uIHBvLWljb24tY3JlZGl0LXBheW1lbnRcIiAoY2xpY2spPVwicG9wdXAudG9nZ2xlKClcIj5cclxuICAgKiAgIENyZWRpdCBBY3Rpb25zXHJcbiAgICogPC9zcGFuPlxyXG4gICAqXHJcbiAgICogPHBvLXBvcHVwICNwb3B1cFxyXG4gICAqICAgW3AtYWN0aW9uc109XCJhY3Rpb25zXCJcclxuICAgKiAgIFtwLXRhcmdldF09XCJpY29uXCI+XHJcbiAgICogPC9wby1wb3B1cD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIENhc28gbyBlbGVtZW50byBhbHZvIGZvciB1bSBjb21wb25lbnRlLCBzZXLDoSBwcmVjaXNvIG9idGVyIG8gYEVsZW1lbnRSZWZgIGRvIG1lc21vIGUgcGFzc8OhLWxvIMOgIHByb3ByaWVkYWRlLCBwb3IgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIC8vIGNvbXBvbmVudC5odG1sXHJcbiAgICpcclxuICAgKiA8cG8tYnV0dG9uICNwb0J1dHRvblxyXG4gICAqICAgcC1sYWJlbD1cIk9wZW4gUG9wb3ZlclwiXHJcbiAgICogICAocC1jbGljayk9XCJwb3B1cC50b2dnbGUoKVwiPlxyXG4gICAqIDwvcG8tYnV0dG9uPlxyXG4gICAqXHJcbiAgICogPHBvLXBvcHVwICNwb3B1cFxyXG4gICAqICAgW3AtYWN0aW9uc109XCJhY3Rpb25zXCJcclxuICAgKiAgIFtwLXRhcmdldF09XCJwb0J1dHRvblJlZlwiPlxyXG4gICAqIDwvcG8tcG9wdXA+XHJcbiAgICpcclxuICAgKiAvLyBjb21wb25lbnQudHNcclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoJ3BvQnV0dG9uJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHBvQnV0dG9uUmVmOiBFbGVtZW50UmVmO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10YXJnZXQnKSBzZXQgdGFyZ2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IHZhbHVlLm5hdGl2ZUVsZW1lbnQgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCB0YXJnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xyXG4gIH1cclxufVxyXG4iXX0=