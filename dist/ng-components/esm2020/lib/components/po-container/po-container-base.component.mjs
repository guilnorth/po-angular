import { Input, Directive } from '@angular/core';
import { convertToBoolean, convertToInt } from '../../utils/util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O `po-container` é um componente que visa facilitar o agrupamento de conteúdos.
 * Por padrão o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espaçamento em sua parte interna, os quais
 * podem ser desabilitados. Ao remover sua borda a sombra também será removida. Além disso, sua altura acompanha a
 * quantidade do conteúdo, porém pode ser fixada. Para controlar sua largura, utilize o [Grid System](/guides/grid-system),
 * assim possibilitando o tratamento para diferentes resoluções.
 */
export class PoContainerBaseComponent {
    constructor() {
        this._noBorder = false;
        this._noPadding = false;
        this._noShadow = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do `po-container`.
     *
     * > Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.
     */
    set height(value) {
        this._height = convertToInt(value);
    }
    get height() {
        return this._height;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a borda e a sombra em torno do `po-container`.
     *
     * @default `false`
     */
    set noBorder(value) {
        this._noBorder = convertToBoolean(value);
    }
    get noBorder() {
        return this._noBorder;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o espaçamento interno do `po-container`.
     *
     * @default `false`
     */
    set noPadding(value) {
        this._noPadding = convertToBoolean(value);
    }
    get noPadding() {
        return this._noPadding;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o sombreamento em torno do `po-container`.
     *
     * @default `false`
     */
    set noShadow(value) {
        this._noShadow = convertToBoolean(value);
    }
    get noShadow() {
        return this._noShadow;
    }
}
PoContainerBaseComponent.ɵfac = function PoContainerBaseComponent_Factory(t) { return new (t || PoContainerBaseComponent)(); };
PoContainerBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoContainerBaseComponent, inputs: { height: ["p-height", "height"], noBorder: ["p-no-border", "noBorder"], noPadding: ["p-no-padding", "noPadding"], noShadow: ["p-no-shadow", "noShadow"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoContainerBaseComponent, [{
        type: Directive
    }], null, { height: [{
            type: Input,
            args: ['p-height']
        }], noBorder: [{
            type: Input,
            args: ['p-no-border']
        }], noPadding: [{
            type: Input,
            args: ['p-no-padding']
        }], noShadow: [{
            type: Input,
            args: ['p-no-shadow']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29udGFpbmVyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNvbnRhaW5lci9wby1jb250YWluZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVsRTs7Ozs7Ozs7R0FRRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFHVSxjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFhLEtBQUssQ0FBQztLQXFFckM7SUFuRUM7Ozs7Ozs7O09BUUc7SUFDSCxJQUF1QixNQUFNLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQTBCLFFBQVEsQ0FBQyxLQUFjO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUEyQixTQUFTLENBQUMsS0FBYztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBMEIsUUFBUSxDQUFDLEtBQWM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7O2dHQXhFVSx3QkFBd0I7MkVBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRHBDLFNBQVM7Z0JBZ0JlLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVTtZQWlCUyxRQUFRO2tCQUFqQyxLQUFLO21CQUFDLGFBQWE7WUFpQk8sU0FBUztrQkFBbkMsS0FBSzttQkFBQyxjQUFjO1lBaUJLLFFBQVE7a0JBQWpDLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4sIGNvbnZlcnRUb0ludCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1jb250YWluZXJgIMOpIHVtIGNvbXBvbmVudGUgcXVlIHZpc2EgZmFjaWxpdGFyIG8gYWdydXBhbWVudG8gZGUgY29udGXDumRvcy5cclxuICogUG9yIHBhZHLDo28gbyBtZXNtbyBleGliZSB1bWEgYm9yZGEsIHVtIGVmZWl0byBkZSBzb21icmEgYW8gc2V1IHJlZG9yIGUgdW0gZXNwYcOnYW1lbnRvIGVtIHN1YSBwYXJ0ZSBpbnRlcm5hLCBvcyBxdWFpc1xyXG4gKiBwb2RlbSBzZXIgZGVzYWJpbGl0YWRvcy4gQW8gcmVtb3ZlciBzdWEgYm9yZGEgYSBzb21icmEgdGFtYsOpbSBzZXLDoSByZW1vdmlkYS4gQWzDqW0gZGlzc28sIHN1YSBhbHR1cmEgYWNvbXBhbmhhIGFcclxuICogcXVhbnRpZGFkZSBkbyBjb250ZcO6ZG8sIHBvcsOpbSBwb2RlIHNlciBmaXhhZGEuIFBhcmEgY29udHJvbGFyIHN1YSBsYXJndXJhLCB1dGlsaXplIG8gW0dyaWQgU3lzdGVtXSgvZ3VpZGVzL2dyaWQtc3lzdGVtKSxcclxuICogYXNzaW0gcG9zc2liaWxpdGFuZG8gbyB0cmF0YW1lbnRvIHBhcmEgZGlmZXJlbnRlcyByZXNvbHXDp8O1ZXMuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvQ29udGFpbmVyQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX25vQm9yZGVyPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX25vUGFkZGluZz86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9ub1NoYWRvdz86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBhIGFsdHVyYSBkbyBgcG8tY29udGFpbmVyYC5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHNlamEgZGVmaW5pZG8gdW0gdmFsb3IsIGEgYWx0dXJhIHNlIGFqdXN0YXLDoSBkZSBhY29yZG8gY29tIG8gY29udGXDumRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oZWlnaHQnKSBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IGNvbnZlcnRUb0ludCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlc2FiaWxpdGEgYSBib3JkYSBlIGEgc29tYnJhIGVtIHRvcm5vIGRvIGBwby1jb250YWluZXJgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1uby1ib3JkZXInKSBzZXQgbm9Cb3JkZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX25vQm9yZGVyID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbm9Cb3JkZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9Cb3JkZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzYWJpbGl0YSBvIGVzcGHDp2FtZW50byBpbnRlcm5vIGRvIGBwby1jb250YWluZXJgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1uby1wYWRkaW5nJykgc2V0IG5vUGFkZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbm9QYWRkaW5nID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbm9QYWRkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vUGFkZGluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZXNhYmlsaXRhIG8gc29tYnJlYW1lbnRvIGVtIHRvcm5vIGRvIGBwby1jb250YWluZXJgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1uby1zaGFkb3cnKSBzZXQgbm9TaGFkb3codmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX25vU2hhZG93ID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbm9TaGFkb3coKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9TaGFkb3c7XHJcbiAgfVxyXG59XHJcbiJdfQ==