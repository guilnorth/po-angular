import { __decorate } from "tslib";
import { Input, Directive } from '@angular/core';
import { InputBoolean } from '../../decorators';
import { convertToInt } from './../../utils/util';
import * as i0 from "@angular/core";
const poSlideIntervalDefault = 4000;
/**
 * @description
 *
 * Componente de slide para visualização e controle de elementos de forma cíclica. Exibe um conjunto de imagens ou dados que permitem
 * customizar sua visualização utilizando a diretiva **[p-slide-content-template](/documentation/po-slide-content-template)**.
 *
 * #### Boas práticas:
 * - Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.
 * - Evitar utilizar apenas um slide isolado, utilize pelo menos dois.
 * - Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.
 */
export class PoSlideBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Define a exibição das setas de navegação.
         *
         * @default `false`
         */
        this.hideArrows = false;
        this._interval = poSlideIntervalDefault;
    }
    /**
     * @optional
     *
     * @description
     * Altura do po-slide, caso seja slide com template customizado, não assume o valor `default`.
     *
     * @default `336`
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
     * Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `1000` os slides não trocam automaticamente.
     *
     * @default `4000`
     */
    set interval(value) {
        this._interval = convertToInt(value, poSlideIntervalDefault);
        this._interval >= 1000 ? this.startInterval() : this.cancelInterval();
    }
    get interval() {
        return this._interval;
    }
    /**
     * @description
     *
     * Array de imagens ou dados para o slide, pode ser de três formas:
     *
     * - Array implementando objetos da interface `PoSlideItem`:
     * ```
     * [{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
     * ```
     * - Array de `strings` com os caminhos das imagens:
     * ```
     * ['/assets/image-1', '/assets/image-2' ]
     * ```
     * - Array com lista de itens (para utilizar template):
     * ```
     * [{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
     * ```
     *
     * > As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.
     */
    set slides(value) {
        this._slides = value;
        this.setSlideItems(value);
        if (value && value.length) {
            this.startSlide();
        }
    }
    get slides() {
        return this._slides;
    }
}
PoSlideBaseComponent.ɵfac = function PoSlideBaseComponent_Factory(t) { return new (t || PoSlideBaseComponent)(); };
PoSlideBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoSlideBaseComponent, inputs: { hideArrows: ["p-hide-arrows", "hideArrows"], height: ["p-height", "height"], interval: ["p-interval", "interval"], slides: ["p-slides", "slides"] } });
__decorate([
    InputBoolean()
], PoSlideBaseComponent.prototype, "hideArrows", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideBaseComponent, [{
        type: Directive
    }], null, { hideArrows: [{
            type: Input,
            args: ['p-hide-arrows']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], interval: [{
            type: Input,
            args: ['p-interval']
        }], slides: [{
            type: Input,
            args: ['p-slides']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc2xpZGUvcG8tc2xpZGUtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBSWxELE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBRXBDOzs7Ozs7Ozs7O0dBVUc7QUFFSCxNQUFNLE9BQWdCLG9CQUFvQjtJQUQxQztRQUVFOzs7Ozs7OztXQVFHO1FBQ3FDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUQsY0FBUyxHQUFXLHNCQUFzQixDQUFDO0tBNkVwRDtJQXpFQzs7Ozs7OztPQU9HO0lBQ0gsSUFBdUIsTUFBTSxDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUF5QixRQUFRLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDSCxJQUF1QixNQUFNLENBQUMsS0FBd0M7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7d0ZBakZtQixvQkFBb0I7dUVBQXBCLG9CQUFvQjtBQVVBO0lBQWYsWUFBWSxFQUFFO3dEQUE2Qjt1RkFWaEQsb0JBQW9CO2NBRHpDLFNBQVM7Z0JBV2dDLFVBQVU7a0JBQWpELEtBQUs7bUJBQUMsZUFBZTtZQWNDLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVTtZQWlCUSxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUE2QkksTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IGNvbnZlcnRUb0ludCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1NsaWRlSXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1zbGlkZS1pdGVtLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBwb1NsaWRlSW50ZXJ2YWxEZWZhdWx0ID0gNDAwMDtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBkZSBzbGlkZSBwYXJhIHZpc3VhbGl6YcOnw6NvIGUgY29udHJvbGUgZGUgZWxlbWVudG9zIGRlIGZvcm1hIGPDrWNsaWNhLiBFeGliZSB1bSBjb25qdW50byBkZSBpbWFnZW5zIG91IGRhZG9zIHF1ZSBwZXJtaXRlbVxyXG4gKiBjdXN0b21pemFyIHN1YSB2aXN1YWxpemHDp8OjbyB1dGlsaXphbmRvIGEgZGlyZXRpdmEgKipbcC1zbGlkZS1jb250ZW50LXRlbXBsYXRlXSgvZG9jdW1lbnRhdGlvbi9wby1zbGlkZS1jb250ZW50LXRlbXBsYXRlKSoqLlxyXG4gKlxyXG4gKiAjIyMjIEJvYXMgcHLDoXRpY2FzOlxyXG4gKiAtIFV0aWxpemFyIGltYWdlbnMgbm8gc2xpZGUsIG1lc21vIHF1YW5kbyBwb3NzdWkgY29udGXDumRvIHBlcnNvbmFsaXphZG8uXHJcbiAqIC0gRXZpdGFyIHV0aWxpemFyIGFwZW5hcyB1bSBzbGlkZSBpc29sYWRvLCB1dGlsaXplIHBlbG8gbWVub3MgZG9pcy5cclxuICogLSBFdml0YXIgdXRpbGl6YXIgbWFpcyBkZSA1IHNsaWRlcywgcG9pcyBhIGlkZWlhIGRvIGNvbXBvbmVudGUgw6kgZGVzdGFjYXIgYXBlbmFzIGluZm9ybWHDp8O1ZXMgaW1wb3J0YW50ZXMuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvU2xpZGVCYXNlQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgZXhpYmnDp8OjbyBkYXMgc2V0YXMgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtYXJyb3dzJykgQElucHV0Qm9vbGVhbigpIGhpZGVBcnJvd3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw6IG51bWJlciA9IHBvU2xpZGVJbnRlcnZhbERlZmF1bHQ7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3NsaWRlczogQXJyYXk8UG9TbGlkZUl0ZW0gfCBzdHJpbmcgfCBhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEFsdHVyYSBkbyBwby1zbGlkZSwgY2FzbyBzZWphIHNsaWRlIGNvbSB0ZW1wbGF0ZSBjdXN0b21pemFkbywgbsOjbyBhc3N1bWUgbyB2YWxvciBgZGVmYXVsdGAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgMzM2YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oZWlnaHQnKSBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IGNvbnZlcnRUb0ludCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFZhbG9yIGVtIG1pbGlzc2VndW5kb3MgcXVlIGRlZmluZSBvIHRlbXBvIGRlIHRyb2NhIGRvcyBzbGlkZXMsIGNhc28gbyB2YWxvciBzZWphIG1lbm9yIHF1ZSBgMTAwMGAgb3Mgc2xpZGVzIG7Do28gdHJvY2FtIGF1dG9tYXRpY2FtZW50ZS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGA0MDAwYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1pbnRlcnZhbCcpIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pbnRlcnZhbCA9IGNvbnZlcnRUb0ludCh2YWx1ZSwgcG9TbGlkZUludGVydmFsRGVmYXVsdCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbCA+PSAxMDAwID8gdGhpcy5zdGFydEludGVydmFsKCkgOiB0aGlzLmNhbmNlbEludGVydmFsKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXJyYXkgZGUgaW1hZ2VucyBvdSBkYWRvcyBwYXJhIG8gc2xpZGUsIHBvZGUgc2VyIGRlIHRyw6pzIGZvcm1hczpcclxuICAgKlxyXG4gICAqIC0gQXJyYXkgaW1wbGVtZW50YW5kbyBvYmpldG9zIGRhIGludGVyZmFjZSBgUG9TbGlkZUl0ZW1gOlxyXG4gICAqIGBgYFxyXG4gICAqIFt7IGltYWdlOiAnL2Fzc2V0cy9pbWFnZS0xJywgYWN0aW9uOiAnaW1hZ2VDbGljay5iaW5kKHRoaXMpJ30sIHsgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlLTInIH1dXHJcbiAgICogYGBgXHJcbiAgICogLSBBcnJheSBkZSBgc3RyaW5nc2AgY29tIG9zIGNhbWluaG9zIGRhcyBpbWFnZW5zOlxyXG4gICAqIGBgYFxyXG4gICAqIFsnL2Fzc2V0cy9pbWFnZS0xJywgJy9hc3NldHMvaW1hZ2UtMicgXVxyXG4gICAqIGBgYFxyXG4gICAqIC0gQXJyYXkgY29tIGxpc3RhIGRlIGl0ZW5zIChwYXJhIHV0aWxpemFyIHRlbXBsYXRlKTpcclxuICAgKiBgYGBcclxuICAgKiBbeyBsYWJlbDogJzEnLCBpbWc6ICcvYXNzZXRzL2ltYWdlLTEnIH0sIHsgbGFiZWw6ICcyJywgaW1nOiAnL2Fzc2V0cy9pbWFnZS0xJyB9XVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBBcyBzZXRhcyBkZSBuYXZlZ2HDp8OjbyBlIG8gY29udHJvbGUgY29tIGPDrXJjdWxvcyBhcGVuYXMgc2Vyw6NvIHJlbmRlcml6YWRvcyBjYXNvIHBvc3N1YSBtYWlzIGRlIHVtIHNsaWRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zbGlkZXMnKSBzZXQgc2xpZGVzKHZhbHVlOiBBcnJheTxQb1NsaWRlSXRlbSB8IHN0cmluZyB8IGFueT4pIHtcclxuICAgIHRoaXMuX3NsaWRlcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRTbGlkZUl0ZW1zKHZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRTbGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWRlcygpOiBBcnJheTxQb1NsaWRlSXRlbSB8IHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcztcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IHNldFNsaWRlSGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNhbmNlbEludGVydmFsKCk6IHZvaWQ7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHNldFNsaWRlSXRlbXModmFsdWU6IEFycmF5PFBvU2xpZGVJdGVtIHwgc3RyaW5nIHwgYW55Pik6IHZvaWQ7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHN0YXJ0U2xpZGUoKTogdm9pZDtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc3RhcnRJbnRlcnZhbCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==