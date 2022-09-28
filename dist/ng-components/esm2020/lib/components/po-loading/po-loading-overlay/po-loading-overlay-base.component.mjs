import { Input, Directive } from '@angular/core';
import { convertToBoolean } from './../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
export const poLoadingOverlayLiteralsDefault = {
    en: {
        loading: 'Loading'
    },
    es: {
        loading: 'Cargando'
    },
    pt: {
        loading: 'Carregando'
    },
    ru: {
        loading: 'Загрузка'
    }
};
/**
 *
 * @description
 *
 * Este componente mostra ao usuário uma imagem de _loading_ e bloqueia a página inteira ou o container escolhido,
 * enquanto aguarda a resposta de alguma requisição.
 */
export class PoLoadingOverlayBaseComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this._screenLock = false;
        this.text = this.getTextDefault();
    }
    /**
     * @optional
     *
     * @description
     *
     * Define se o *overlay* será aplicado a um *container* ou a página inteira.
     *
     * Para utilizar o componente como um *container*, o elemento pai deverá receber uma posição relativa, por exemplo:
     *
     * ```
     * <div style="position: relative">
     *
     *  <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
     *  </po-chart>
     *
     *  <po-loading-overlay>
     *  </po-loading-overlay>
     * </div>
     * ```
     *
     * @default `false`
     */
    set screenLock(screenLock) {
        this._screenLock = convertToBoolean(screenLock);
    }
    get screenLock() {
        return this._screenLock;
    }
    /**
     * @optional
     *
     * @description
     *
     * Texto a ser exibido no componente.
     *
     * > O valor padrão será traduzido acordo com o idioma configurado no [**PoI18n**](/documentation/po-i18n) ou navegador.
     *
     * @default `Carregando`
     */
    set text(value) {
        this._text = value || this.getTextDefault();
    }
    get text() {
        return this._text;
    }
    getTextDefault() {
        const language = this.languageService.getShortLanguage();
        return poLoadingOverlayLiteralsDefault[language].loading;
    }
}
PoLoadingOverlayBaseComponent.ɵfac = function PoLoadingOverlayBaseComponent_Factory(t) { return new (t || PoLoadingOverlayBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoLoadingOverlayBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoLoadingOverlayBaseComponent, inputs: { screenLock: ["p-screen-lock", "screenLock"], text: ["p-text", "text"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoadingOverlayBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { screenLock: [{
            type: Input,
            args: ['p-screen-lock']
        }], text: [{
            type: Input,
            args: ['p-text']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9hZGluZy1vdmVybGF5LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWxvYWRpbmcvcG8tbG9hZGluZy1vdmVybGF5L3BvLWxvYWRpbmctb3ZlcmxheS1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBTXpELE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUFHO0lBQzdDLEVBQUUsRUFBNEI7UUFDNUIsT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxFQUFFLEVBQTRCO1FBQzVCLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QsRUFBRSxFQUE0QjtRQUM1QixPQUFPLEVBQUUsWUFBWTtLQUN0QjtJQUNELEVBQUUsRUFBNEI7UUFDNUIsT0FBTyxFQUFFLFVBQVU7S0FDcEI7Q0FDRixDQUFDO0FBRUY7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLDZCQUE2QjtJQXFEeEMsWUFBb0IsZUFBa0M7UUFBbEMsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBcEQ5QyxnQkFBVyxHQUFhLEtBQUssQ0FBQztRQXFEcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQW5ERDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHO0lBQ0gsSUFBNEIsVUFBVSxDQUFDLFVBQW1CO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILElBQXFCLElBQUksQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFNTyxjQUFjO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV6RCxPQUFPLCtCQUErQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxDQUFDOzswR0E3RFUsNkJBQTZCO2dGQUE3Qiw2QkFBNkI7dUZBQTdCLDZCQUE2QjtjQUR6QyxTQUFTO29FQTJCb0IsVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlO1lBbUJELElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4gfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvTG9hZGluZ092ZXJsYXlMaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1sb2FkaW5nLW92ZXJsYXktbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwb0xvYWRpbmdPdmVybGF5TGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9Mb2FkaW5nT3ZlcmxheUxpdGVyYWxzPntcclxuICAgIGxvYWRpbmc6ICdMb2FkaW5nJ1xyXG4gIH0sXHJcbiAgZXM6IDxQb0xvYWRpbmdPdmVybGF5TGl0ZXJhbHM+e1xyXG4gICAgbG9hZGluZzogJ0NhcmdhbmRvJ1xyXG4gIH0sXHJcbiAgcHQ6IDxQb0xvYWRpbmdPdmVybGF5TGl0ZXJhbHM+e1xyXG4gICAgbG9hZGluZzogJ0NhcnJlZ2FuZG8nXHJcbiAgfSxcclxuICBydTogPFBvTG9hZGluZ092ZXJsYXlMaXRlcmFscz57XHJcbiAgICBsb2FkaW5nOiAn0JfQsNCz0YDRg9C30LrQsCdcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGUgY29tcG9uZW50ZSBtb3N0cmEgYW8gdXN1w6FyaW8gdW1hIGltYWdlbSBkZSBfbG9hZGluZ18gZSBibG9xdWVpYSBhIHDDoWdpbmEgaW50ZWlyYSBvdSBvIGNvbnRhaW5lciBlc2NvbGhpZG8sXHJcbiAqIGVucXVhbnRvIGFndWFyZGEgYSByZXNwb3N0YSBkZSBhbGd1bWEgcmVxdWlzacOnw6NvLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0xvYWRpbmdPdmVybGF5QmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfc2NyZWVuTG9jaz86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIG8gKm92ZXJsYXkqIHNlcsOhIGFwbGljYWRvIGEgdW0gKmNvbnRhaW5lciogb3UgYSBww6FnaW5hIGludGVpcmEuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpemFyIG8gY29tcG9uZW50ZSBjb21vIHVtICpjb250YWluZXIqLCBvIGVsZW1lbnRvIHBhaSBkZXZlcsOhIHJlY2ViZXIgdW1hIHBvc2nDp8OjbyByZWxhdGl2YSwgcG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCI+XHJcbiAgICpcclxuICAgKiAgPHBvLWNoYXJ0IFtwLXNlcmllc109XCJbeyB2YWx1ZTogMTAsIGNhdGVnb3J5OiAnRXhhbXBsZScgfV1cIj5cclxuICAgKiAgPC9wby1jaGFydD5cclxuICAgKlxyXG4gICAqICA8cG8tbG9hZGluZy1vdmVybGF5PlxyXG4gICAqICA8L3BvLWxvYWRpbmctb3ZlcmxheT5cclxuICAgKiA8L2Rpdj5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2NyZWVuLWxvY2snKSBzZXQgc2NyZWVuTG9jayhzY3JlZW5Mb2NrOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zY3JlZW5Mb2NrID0gY29udmVydFRvQm9vbGVhbihzY3JlZW5Mb2NrKTtcclxuICB9XHJcblxyXG4gIGdldCBzY3JlZW5Mb2NrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjcmVlbkxvY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVGV4dG8gYSBzZXIgZXhpYmlkbyBubyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogPiBPIHZhbG9yIHBhZHLDo28gc2Vyw6EgdHJhZHV6aWRvIGFjb3JkbyBjb20gbyBpZGlvbWEgY29uZmlndXJhZG8gbm8gWyoqUG9JMThuKipdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4pIG91IG5hdmVnYWRvci5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBDYXJyZWdhbmRvYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10ZXh0Jykgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlIHx8IHRoaXMuZ2V0VGV4dERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5nZXRUZXh0RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUZXh0RGVmYXVsdCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgcmV0dXJuIHBvTG9hZGluZ092ZXJsYXlMaXRlcmFsc0RlZmF1bHRbbGFuZ3VhZ2VdLmxvYWRpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==