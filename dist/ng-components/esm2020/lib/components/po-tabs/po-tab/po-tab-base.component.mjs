import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, uuid } from '../../../utils/util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-tab` renderiza uma aba na qual envolve um conteúdo HTML.
 *
 * Com este componente é possível atribuir um rótulo para auxiliar na identificação do conteúdo, ativar para que o mesmo seja exibido,
 * desabilitar para impossibilitar o acesso, bem como ocultar para indisponibilizar a aba.
 *
 * > Para controlar a navegação entre diversas abas, utilizar o componente [`po-tabs`](/documentation/po-tabs).
 */
export class PoTabBaseComponent {
    constructor() {
        /** Método disparado ao clicar na aba. */
        this.click = new EventEmitter();
        // ID da aba
        this.id = uuid();
        this._active = false;
        this._disabled = false;
        this._hide = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Ativa a aba exibindo seu conteúdo.
     *
     * > Sugere-se utilizar na aba de conteúdo inicial.
     *
     * @default `false`
     */
    set active(active) {
        this._active = convertToBoolean(active);
        this.setDisplayOnActive();
    }
    get active() {
        return this._active;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a aba.
     *
     * @default `false`
     */
    set disabled(disabled) {
        this._disabled = convertToBoolean(disabled);
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Oculta a aba.
     *
     * @default `false`
     */
    set hide(hide) {
        this._hide = convertToBoolean(hide);
    }
    get hide() {
        return this._hide;
    }
}
PoTabBaseComponent.ɵfac = function PoTabBaseComponent_Factory(t) { return new (t || PoTabBaseComponent)(); };
PoTabBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTabBaseComponent, inputs: { label: ["p-label", "label"], active: ["p-active", "active"], disabled: ["p-disabled", "disabled"], hide: ["p-hide", "hide"] }, outputs: { click: "p-click" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabBaseComponent, [{
        type: Directive
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], active: [{
            type: Input,
            args: ['p-active']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], hide: [{
            type: Input,
            args: ['p-hide']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFiLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYnMvcG8tdGFiL3BvLXRhYi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0Q7Ozs7Ozs7OztHQVNHO0FBRUgsTUFBTSxPQUFnQixrQkFBa0I7SUFEeEM7UUFLRSx5Q0FBeUM7UUFDdEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsWUFBWTtRQUNaLE9BQUUsR0FBWSxJQUFJLEVBQUUsQ0FBQztRQUViLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUM1QixVQUFLLEdBQWEsS0FBSyxDQUFDO0tBeURqQztJQXZEQzs7Ozs7Ozs7OztPQVVHO0lBQ0gsSUFBdUIsTUFBTSxDQUFDLE1BQWU7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQXlCLFFBQVEsQ0FBQyxRQUFpQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBcUIsSUFBSSxDQUFDLElBQWE7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O29GQWxFbUIsa0JBQWtCO3FFQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUR2QyxTQUFTO2dCQUdVLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdHLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQW9CTSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFrQlEsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBaUJFLElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuLCB1dWlkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tdGFiYCByZW5kZXJpemEgdW1hIGFiYSBuYSBxdWFsIGVudm9sdmUgdW0gY29udGXDumRvIEhUTUwuXHJcbiAqXHJcbiAqIENvbSBlc3RlIGNvbXBvbmVudGUgw6kgcG9zc8OtdmVsIGF0cmlidWlyIHVtIHLDs3R1bG8gcGFyYSBhdXhpbGlhciBuYSBpZGVudGlmaWNhw6fDo28gZG8gY29udGXDumRvLCBhdGl2YXIgcGFyYSBxdWUgbyBtZXNtbyBzZWphIGV4aWJpZG8sXHJcbiAqIGRlc2FiaWxpdGFyIHBhcmEgaW1wb3NzaWJpbGl0YXIgbyBhY2Vzc28sIGJlbSBjb21vIG9jdWx0YXIgcGFyYSBpbmRpc3BvbmliaWxpemFyIGEgYWJhLlxyXG4gKlxyXG4gKiA+IFBhcmEgY29udHJvbGFyIGEgbmF2ZWdhw6fDo28gZW50cmUgZGl2ZXJzYXMgYWJhcywgdXRpbGl6YXIgbyBjb21wb25lbnRlIFtgcG8tdGFic2BdKC9kb2N1bWVudGF0aW9uL3BvLXRhYnMpLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb1RhYkJhc2VDb21wb25lbnQge1xyXG4gIC8qKiBSw7N0dWxvIGRhIGFiYS4gKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogTcOpdG9kbyBkaXNwYXJhZG8gYW8gY2xpY2FyIG5hIGFiYS4gKi9cclxuICBAT3V0cHV0KCdwLWNsaWNrJykgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIElEIGRhIGFiYVxyXG4gIGlkPzogc3RyaW5nID0gdXVpZCgpO1xyXG5cclxuICBwcml2YXRlIF9hY3RpdmU/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaGlkZT86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEF0aXZhIGEgYWJhIGV4aWJpbmRvIHNldSBjb250ZcO6ZG8uXHJcbiAgICpcclxuICAgKiA+IFN1Z2VyZS1zZSB1dGlsaXphciBuYSBhYmEgZGUgY29udGXDumRvIGluaWNpYWwuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWFjdGl2ZScpIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSBjb252ZXJ0VG9Cb29sZWFuKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldERpc3BsYXlPbkFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzYWJpbGl0YSBhIGFiYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbGVhbihkaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2N1bHRhIGEgYWJhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlJykgc2V0IGhpZGUoaGlkZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faGlkZSA9IGNvbnZlcnRUb0Jvb2xlYW4oaGlkZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHNldERpc3BsYXlPbkFjdGl2ZSgpO1xyXG59XHJcbiJdfQ==