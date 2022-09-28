import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
const PO_AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const PO_AVATAR_SIZE_DEFAULT = 'md';
/**
 * @description
 *
 * O componente `po-avatar` é um container para imagens em miniatura, possui um formato redondo e cinco opções de
 * tamanho, pode ser utilizado para mostrar a foto do perfil de um usuário, entre outras possibilidades.
 *
 * Além de poder ser utilizado separadamente, é possível usar o `po-avatar` juntamente com outros componentes e criar
 * layouts ricos e bem interessantes para os usuários, como por exemplo, uma lista de itens ou produtos.
 */
export class PoAvatarBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Indica como o navegador deve carregar a imagem.
         *
         * Valores válidos:
         *  - `eager` (a imagem é carregada imediatamente, independente de estar visível ou não)
         *  - `lazy` (a imagem só é carregada quando estiver próxima de ser renderizada)
         *
         * @default `eager`
         */
        this.loading = 'eager';
        /** Evento disparado ao clicar na imagem do *avatar*. */
        this.click = new EventEmitter();
        this._size = 'md';
    }
    /**
     * @optional
     *
     * @description
     *
     * Tamanho de exibição do componente.
     *
     * Valores válidos:
     *  - `xs` (24x24)
     *  - `sm` (32x32)
     *  - `md` (64x64)
     *  - `lg` (96x96)
     *  - `xl` (144x144)
     *
     * @default `md`
     */
    set size(value) {
        this._size = PO_AVATAR_SIZES.includes(value) ? value : PO_AVATAR_SIZE_DEFAULT;
    }
    get size() {
        return this._size;
    }
    get hasClickEvent() {
        return !!this.click.observers.length;
    }
}
PoAvatarBaseComponent.ɵfac = function PoAvatarBaseComponent_Factory(t) { return new (t || PoAvatarBaseComponent)(); };
PoAvatarBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoAvatarBaseComponent, inputs: { src: ["p-src", "src"], loading: ["p-loading", "loading"], size: ["p-size", "size"] }, outputs: { click: "p-click" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAvatarBaseComponent, [{
        type: Directive
    }], null, { src: [{
            type: Input,
            args: ['p-src']
        }], loading: [{
            type: Input,
            args: ['p-loading']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], size: [{
            type: Input,
            args: ['p-size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYXZhdGFyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWF2YXRhci9wby1hdmF0YXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkUsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkQsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFFcEM7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBUUU7Ozs7Ozs7Ozs7OztXQVlHO1FBQ2lCLFlBQU8sR0FBcUIsT0FBTyxDQUFDO1FBRXhELHdEQUF3RDtRQUNyQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxVQUFLLEdBQVcsSUFBSSxDQUFDO0tBNEI5QjtJQTFCQzs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxJQUFxQixJQUFJLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDaEYsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7OzBGQXBEVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFNBQVM7Z0JBTVEsR0FBRztrQkFBbEIsS0FBSzttQkFBQyxPQUFPO1lBZU0sT0FBTztrQkFBMUIsS0FBSzttQkFBQyxXQUFXO1lBR0MsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBb0JJLElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBQT19BVkFUQVJfU0laRVMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107XHJcbmNvbnN0IFBPX0FWQVRBUl9TSVpFX0RFRkFVTFQgPSAnbWQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLWF2YXRhcmAgw6kgdW0gY29udGFpbmVyIHBhcmEgaW1hZ2VucyBlbSBtaW5pYXR1cmEsIHBvc3N1aSB1bSBmb3JtYXRvIHJlZG9uZG8gZSBjaW5jbyBvcMOnw7VlcyBkZVxyXG4gKiB0YW1hbmhvLCBwb2RlIHNlciB1dGlsaXphZG8gcGFyYSBtb3N0cmFyIGEgZm90byBkbyBwZXJmaWwgZGUgdW0gdXN1w6FyaW8sIGVudHJlIG91dHJhcyBwb3NzaWJpbGlkYWRlcy5cclxuICpcclxuICogQWzDqW0gZGUgcG9kZXIgc2VyIHV0aWxpemFkbyBzZXBhcmFkYW1lbnRlLCDDqSBwb3Nzw612ZWwgdXNhciBvIGBwby1hdmF0YXJgIGp1bnRhbWVudGUgY29tIG91dHJvcyBjb21wb25lbnRlcyBlIGNyaWFyXHJcbiAqIGxheW91dHMgcmljb3MgZSBiZW0gaW50ZXJlc3NhbnRlcyBwYXJhIG9zIHVzdcOhcmlvcywgY29tbyBwb3IgZXhlbXBsbywgdW1hIGxpc3RhIGRlIGl0ZW5zIG91IHByb2R1dG9zLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0F2YXRhckJhc2VDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEZvbnRlIGRhIGltYWdlbSBxdWUgcG9kZSBzZXIgdW0gY2FtaW5obyBsb2NhbCAoYC4vYXNzZXRzL2ltYWdlcy9sb2dvLWJsYWNrLXNtYWxsLnBuZ2ApXHJcbiAgICogb3UgdW0gc2Vydmlkb3IgZXh0ZXJubyAoYGh0dHBzOi8vcG8tdWkuaW8vYXNzZXRzL2ltYWdlcy9sb2dvLWJsYWNrLXNtYWxsLnBuZ2ApLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zcmMnKSBzcmM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBjb21vIG8gbmF2ZWdhZG9yIGRldmUgY2FycmVnYXIgYSBpbWFnZW0uXHJcbiAgICpcclxuICAgKiBWYWxvcmVzIHbDoWxpZG9zOlxyXG4gICAqICAtIGBlYWdlcmAgKGEgaW1hZ2VtIMOpIGNhcnJlZ2FkYSBpbWVkaWF0YW1lbnRlLCBpbmRlcGVuZGVudGUgZGUgZXN0YXIgdmlzw612ZWwgb3UgbsOjbylcclxuICAgKiAgLSBgbGF6eWAgKGEgaW1hZ2VtIHPDsyDDqSBjYXJyZWdhZGEgcXVhbmRvIGVzdGl2ZXIgcHLDs3hpbWEgZGUgc2VyIHJlbmRlcml6YWRhKVxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGVhZ2VyYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sb2FkaW5nJykgbG9hZGluZzogJ2VhZ2VyJyB8ICdsYXp5JyA9ICdlYWdlcic7XHJcblxyXG4gIC8qKiBFdmVudG8gZGlzcGFyYWRvIGFvIGNsaWNhciBuYSBpbWFnZW0gZG8gKmF2YXRhciouICovXHJcbiAgQE91dHB1dCgncC1jbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgX3NpemU6IHN0cmluZyA9ICdtZCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBUYW1hbmhvIGRlIGV4aWJpw6fDo28gZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFZhbG9yZXMgdsOhbGlkb3M6XHJcbiAgICogIC0gYHhzYCAoMjR4MjQpXHJcbiAgICogIC0gYHNtYCAoMzJ4MzIpXHJcbiAgICogIC0gYG1kYCAoNjR4NjQpXHJcbiAgICogIC0gYGxnYCAoOTZ4OTYpXHJcbiAgICogIC0gYHhsYCAoMTQ0eDE0NClcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBtZGBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2l6ZScpIHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NpemUgPSBQT19BVkFUQVJfU0laRVMuaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiBQT19BVkFUQVJfU0laRV9ERUZBVUxUO1xyXG4gIH1cclxuICBnZXQgc2l6ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzQ2xpY2tFdmVudCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMuY2xpY2sub2JzZXJ2ZXJzLmxlbmd0aDtcclxuICB9XHJcbn1cclxuIl19