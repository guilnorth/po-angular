import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean } from '../../../decorators';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-page-slide` é utilizado para incluir conteúdos secundários
 * adicionando controles e navegações adicionais, mas mantendo o usuário na
 * página principal.
 *
 * Este componente é ativado a partir do método `#open()` e pode ser  encerrado
 * através do botão que encontra-se no cabeçalho do mesmo ou através do método
 * `#close()`.
 *
 * > Para o correto funcionamento do componente `po-page-slide`, deve ser
 * > importado o módulo `BrowserAnimationsModule` no módulo principal da sua
 * > aplicação.
 */
export class PoPageSlideBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Oculta o botão de encerramento da página.
         *
         * Esta opção só é possível se a propriedade `p-click-out` estiver habilitada.
         *
         * @default `false`
         */
        this.hideClose = false;
        /**
         * @optional
         *
         * @description
         *
         * Define se permite o encerramento da página ao clicar fora da mesma.
         *
         * @default `false`
         */
        this.clickOut = false;
        // Controla se a página está ou não oculta, por padrão é oculto.
        this.hidden = true;
        this._size = 'md';
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho da página.
     *
     * Valores válidos:
     *  - `sm` (pequeno)
     *  - `md` (médio)
     *  - `lg` (grande)
     *  - `xl` (extra-grande)
     *  - `auto` (automático)
     *
     * > Todas as opções de tamanho possuem uma largura máxima de **768px**.
     *
     * @default `md`
     */
    set size(value) {
        const sizes = ['sm', 'md', 'lg', 'xl', 'auto'];
        this._size = sizes.indexOf(value) > -1 ? value : 'md';
    }
    get size() {
        return this._size;
    }
    /**
     * Ativa a visualização da página.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo
     * ser utilizado o `ViewChild` da seguinte forma:
     *
     * ```typescript
     * import { PoPageSlideComponent } from '@po/ng-components';
     *
     * ...
     *
     * @ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;
     *
     * public openPage() {
     *   this.pageSlide.open();
     * }
     * ```
     */
    open() {
        // Evita com que a página seja aberta sem que seja possível fechá-la.
        if (this.hideClose && !this.clickOut) {
            this.hideClose = false;
        }
        this.hidden = false;
    }
    /**
     * Encerra a visualização da página.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo
     * ser utilizado o `ViewChild` da seguinte forma:
     *
     * ```typescript
     * import { PoPageSlideComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;
     *
     * public closePage() {
     *   this.pageSlide.close();
     * }
     * ```
     */
    close() {
        this.hidden = true;
    }
}
PoPageSlideBaseComponent.ɵfac = function PoPageSlideBaseComponent_Factory(t) { return new (t || PoPageSlideBaseComponent)(); };
PoPageSlideBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageSlideBaseComponent, inputs: { title: ["p-title", "title"], subtitle: ["p-subtitle", "subtitle"], hideClose: ["p-hide-close", "hideClose"], clickOut: ["p-click-out", "clickOut"], size: ["p-size", "size"] } });
__decorate([
    InputBoolean()
], PoPageSlideBaseComponent.prototype, "hideClose", void 0);
__decorate([
    InputBoolean()
], PoPageSlideBaseComponent.prototype, "clickOut", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageSlideBaseComponent, [{
        type: Directive
    }], null, { title: [{
            type: Input,
            args: ['p-title']
        }], subtitle: [{
            type: Input,
            args: ['p-subtitle']
        }], hideClose: [{
            type: Input,
            args: ['p-hide-close']
        }], clickOut: [{
            type: Input,
            args: ['p-click-out']
        }], size: [{
            type: Input,
            args: ['p-size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1zbGlkZS1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlL3BvLXBhZ2Utc2xpZGUvcG8tcGFnZS1zbGlkZS1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVuRDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFnQkU7Ozs7Ozs7Ozs7V0FVRztRQUNvQyxjQUFTLEdBQWEsS0FBSyxDQUFDO1FBRW5FOzs7Ozs7OztXQVFHO1FBQ21DLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFFakUsZ0VBQWdFO1FBQ3pELFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFYixVQUFLLEdBQUcsSUFBSSxDQUFDO0tBNkV0QjtJQTNFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxJQUFxQixJQUFJLENBQUMsS0FBYTtRQUNyQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNJLElBQUk7UUFDVCxxRUFBcUU7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Z0dBdEhVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO0FBMEJJO0lBQWYsWUFBWSxFQUFFOzJEQUE2QjtBQVc3QjtJQUFmLFlBQVksRUFBRTswREFBNEI7dUZBckN0RCx3QkFBd0I7Y0FEcEMsU0FBUztnQkFPVSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFPSyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFhb0IsU0FBUztrQkFBL0MsS0FBSzttQkFBQyxjQUFjO1lBV2lCLFFBQVE7a0JBQTdDLEtBQUs7bUJBQUMsYUFBYTtZQXlCQyxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1wYWdlLXNsaWRlYCDDqSB1dGlsaXphZG8gcGFyYSBpbmNsdWlyIGNvbnRlw7pkb3Mgc2VjdW5kw6FyaW9zXHJcbiAqIGFkaWNpb25hbmRvIGNvbnRyb2xlcyBlIG5hdmVnYcOnw7VlcyBhZGljaW9uYWlzLCBtYXMgbWFudGVuZG8gbyB1c3XDoXJpbyBuYVxyXG4gKiBww6FnaW5hIHByaW5jaXBhbC5cclxuICpcclxuICogRXN0ZSBjb21wb25lbnRlIMOpIGF0aXZhZG8gYSBwYXJ0aXIgZG8gbcOpdG9kbyBgI29wZW4oKWAgZSBwb2RlIHNlciAgZW5jZXJyYWRvXHJcbiAqIGF0cmF2w6lzIGRvIGJvdMOjbyBxdWUgZW5jb250cmEtc2Ugbm8gY2FiZcOnYWxobyBkbyBtZXNtbyBvdSBhdHJhdsOpcyBkbyBtw6l0b2RvXHJcbiAqIGAjY2xvc2UoKWAuXHJcbiAqXHJcbiAqID4gUGFyYSBvIGNvcnJldG8gZnVuY2lvbmFtZW50byBkbyBjb21wb25lbnRlIGBwby1wYWdlLXNsaWRlYCwgZGV2ZSBzZXJcclxuICogPiBpbXBvcnRhZG8gbyBtw7NkdWxvIGBCcm93c2VyQW5pbWF0aW9uc01vZHVsZWAgbm8gbcOzZHVsbyBwcmluY2lwYWwgZGEgc3VhXHJcbiAqID4gYXBsaWNhw6fDo28uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvUGFnZVNsaWRlQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBUw610dWxvIGRhIHDDoWdpbmEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBTdWJ0w610dWxvIGRhIHDDoWdpbmEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXN1YnRpdGxlJykgc3VidGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPY3VsdGEgbyBib3TDo28gZGUgZW5jZXJyYW1lbnRvIGRhIHDDoWdpbmEuXHJcbiAgICpcclxuICAgKiBFc3RhIG9ww6fDo28gc8OzIMOpIHBvc3PDrXZlbCBzZSBhIHByb3ByaWVkYWRlIGBwLWNsaWNrLW91dGAgZXN0aXZlciBoYWJpbGl0YWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLWNsb3NlJykgQElucHV0Qm9vbGVhbigpIGhpZGVDbG9zZT86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBwZXJtaXRlIG8gZW5jZXJyYW1lbnRvIGRhIHDDoWdpbmEgYW8gY2xpY2FyIGZvcmEgZGEgbWVzbWEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNsaWNrLW91dCcpIEBJbnB1dEJvb2xlYW4oKSBjbGlja091dD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gQ29udHJvbGEgc2UgYSBww6FnaW5hIGVzdMOhIG91IG7Do28gb2N1bHRhLCBwb3IgcGFkcsOjbyDDqSBvY3VsdG8uXHJcbiAgcHVibGljIGhpZGRlbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgX3NpemUgPSAnbWQnO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gdGFtYW5obyBkYSBww6FnaW5hLlxyXG4gICAqXHJcbiAgICogVmFsb3JlcyB2w6FsaWRvczpcclxuICAgKiAgLSBgc21gIChwZXF1ZW5vKVxyXG4gICAqICAtIGBtZGAgKG3DqWRpbylcclxuICAgKiAgLSBgbGdgIChncmFuZGUpXHJcbiAgICogIC0gYHhsYCAoZXh0cmEtZ3JhbmRlKVxyXG4gICAqICAtIGBhdXRvYCAoYXV0b23DoXRpY28pXHJcbiAgICpcclxuICAgKiA+IFRvZGFzIGFzIG9ww6fDtWVzIGRlIHRhbWFuaG8gcG9zc3VlbSB1bWEgbGFyZ3VyYSBtw6F4aW1hIGRlICoqNzY4cHgqKi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBtZGBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2l6ZScpIHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNpemVzID0gWydzbScsICdtZCcsICdsZycsICd4bCcsICdhdXRvJ107XHJcbiAgICB0aGlzLl9zaXplID0gc2l6ZXMuaW5kZXhPZih2YWx1ZSkgPiAtMSA/IHZhbHVlIDogJ21kJztcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdGl2YSBhIHZpc3VhbGl6YcOnw6NvIGRhIHDDoWdpbmEuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIHRlciBhIGluc3TDom5jaWEgZG8gY29tcG9uZW50ZSBubyBET00sIHBvZGVuZG9cclxuICAgKiBzZXIgdXRpbGl6YWRvIG8gYFZpZXdDaGlsZGAgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogaW1wb3J0IHsgUG9QYWdlU2xpZGVDb21wb25lbnQgfSBmcm9tICdAcG8vbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9QYWdlU2xpZGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2VTbGlkZTogUG9QYWdlU2xpZGVDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBwdWJsaWMgb3BlblBhZ2UoKSB7XHJcbiAgICogICB0aGlzLnBhZ2VTbGlkZS5vcGVuKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcGVuKCkge1xyXG4gICAgLy8gRXZpdGEgY29tIHF1ZSBhIHDDoWdpbmEgc2VqYSBhYmVydGEgc2VtIHF1ZSBzZWphIHBvc3PDrXZlbCBmZWNow6EtbGEuXHJcbiAgICBpZiAodGhpcy5oaWRlQ2xvc2UgJiYgIXRoaXMuY2xpY2tPdXQpIHtcclxuICAgICAgdGhpcy5oaWRlQ2xvc2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5jZXJyYSBhIHZpc3VhbGl6YcOnw6NvIGRhIHDDoWdpbmEuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIHRlciBhIGluc3TDom5jaWEgZG8gY29tcG9uZW50ZSBubyBET00sIHBvZGVuZG9cclxuICAgKiBzZXIgdXRpbGl6YWRvIG8gYFZpZXdDaGlsZGAgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogaW1wb3J0IHsgUG9QYWdlU2xpZGVDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9QYWdlU2xpZGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2VTbGlkZTogUG9QYWdlU2xpZGVDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBwdWJsaWMgY2xvc2VQYWdlKCkge1xyXG4gICAqICAgdGhpcy5wYWdlU2xpZGUuY2xvc2UoKTtcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=