import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { PoColorPaletteEnum } from '../../enums/po-color-palette.enum';
import { PoTagOrientation } from './enums/po-tag-orientation.enum';
import { PoTagType } from './enums/po-tag-type.enum';
import * as i0 from "@angular/core";
const poTagColors = Object.values(PoColorPaletteEnum);
const poTagOrientationDefault = PoTagOrientation.Vertical;
/**
 * @description
 *
 * Este componente permite exibir um valor em forma de um marcador colorido, sendo possível definir uma legenda e realizar customizações
 * na cor, iconografia e tipo.
 *
 * Além disso, é possível definir uma ação que será executada tanto ao *click* quanto através das teclas *enter/space* enquanto navega
 * utilizando a tecla *tab*.
 *
 * Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.
 */
export class PoTagBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Ação que será executada ao clicar sobre o `po-tag` e que receberá como parâmetro um objeto contendo o seu valor e tipo.
         */
        this.click = new EventEmitter();
        this.poTagOrientation = PoTagOrientation;
        this._orientation = poTagOrientationDefault;
    }
    /**
     * @optional
     *
     * @description
     *
     * Determina a cor da tag. As maneiras de customizar as cores são:
     * - Hexadeximal, por exemplo `#c64840`;
     * - RGB, como `rgb(0, 0, 165)`;
     * - O nome da cor, por exemplo `blue`;
     * - Usando uma das cores do tema do PO:
     * Valores válidos:
     *  - <span class="dot po-color-01"></span> `color-01`
     *  - <span class="dot po-color-02"></span> `color-02`
     *  - <span class="dot po-color-03"></span> `color-03`
     *  - <span class="dot po-color-04"></span> `color-04`
     *  - <span class="dot po-color-05"></span> `color-05`
     *  - <span class="dot po-color-06"></span> `color-06`
     *  - <span class="dot po-color-07"></span> `color-07`
     *  - <span class="dot po-color-08"></span> `color-08`
     *  - <span class="dot po-color-09"></span> `color-09`
     *  - <span class="dot po-color-10"></span> `color-10`
     *  - <span class="dot po-color-11"></span> `color-11`
     *  - <span class="dot po-color-12"></span> `color-12`
     *
     * - Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.
     *
     * > **Atenção:** A propriedade `p-type` sobrepõe esta definição.
     */
    set color(value) {
        this._color = poTagColors.includes(value) ? value : undefined;
        if (this._color === undefined) {
            CSS.supports('color', value) ? (this.customColor = value) : (this.customColor = undefined);
        }
    }
    get color() {
        return this._color;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define ou ativa um ícone que será exibido ao lado do valor da *tag*.
     *
     * Quando `p-type` estiver definida, basta informar um valor igual a `true` para que o ícone seja exibido conforme descrições abaixo:
     * - <span class="po-icon po-icon-ok"></span> - `success`
     * - <span class="po-icon po-icon-warning"></span> - `warning`
     * - <span class="po-icon po-icon-close"></span> - `danger`
     * - <span class="po-icon po-icon-info"></span> - `info`
     *
     * Também É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-tag p-icon="po-icon-user" p-value="PO Tag"></po-tag>
     * ```
     * como também utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     *
     * @default `false`
     */
    set icon(value) {
        if (this.type) {
            this._icon = convertToBoolean(value);
        }
        else {
            this._icon = value;
        }
    }
    get icon() {
        return this._icon;
    }
    /**
     * @optional
     *
     * @description
     *
     * Ativa a inversão de cores configuradas no componente, possibilitando uma visualização de status ativo e inativo.
     *
     * > A cor do texto, do ícone e da borda ficam com a cor utilizada na propriedade `p-color` ou a cor correspondente ao `p-type`,
     * e a cor do fundo fica branca.
     *
     * @default `false`
     */
    set inverse(value) {
        this._inverse = convertToBoolean(value);
    }
    get inverse() {
        return this._inverse;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o *layout* de exibição.
     *
     * @default `vertical`
     */
    set orientation(value) {
        this._orientation = Object.values(PoTagOrientation).includes(value) ? value : poTagOrientationDefault;
    }
    get orientation() {
        return this._orientation;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o tipo da *tag*.
     *
     * Valores válidos:
     *  - `success`: cor verde utilizada para simbolizar sucesso ou êxito.
     *  - `warning`: cor amarela que representa aviso ou advertência.
     *  - `danger`: cor vermelha para erro ou aviso crítico.
     *  - `info`: cor cinza escuro que caracteriza conteúdo informativo.
     *
     * > Quando esta propriedade for definida, irá sobrepor a definição de `p-color` e `p-icon` somente será exibido caso seja `true`.
     *
     * @default `info`
     */
    set type(value) {
        this._type = Object.values(PoTagType).includes(value) ? value : undefined;
    }
    get type() {
        return this._type;
    }
}
PoTagBaseComponent.ɵfac = function PoTagBaseComponent_Factory(t) { return new (t || PoTagBaseComponent)(); };
PoTagBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTagBaseComponent, inputs: { label: ["p-label", "label"], value: ["p-value", "value"], color: ["p-color", "color"], icon: ["p-icon", "icon"], inverse: ["p-inverse", "inverse"], orientation: ["p-orientation", "orientation"], type: ["p-type", "type"] }, outputs: { click: "p-click" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTagBaseComponent, [{
        type: Directive
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], color: [{
            type: Input,
            args: ['p-color']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], inverse: [{
            type: Input,
            args: ['p-inverse']
        }], orientation: [{
            type: Input,
            args: ['p-orientation']
        }], type: [{
            type: Input,
            args: ['p-type']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFnLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhZy9wby10YWctYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUVwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXJELE1BQU0sV0FBVyxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM3RCxNQUFNLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztBQUUxRDs7Ozs7Ozs7OztHQVVHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQWNFOzs7Ozs7V0FNRztRQUNnQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFNUQscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFLNUMsaUJBQVksR0FBc0IsdUJBQXVCLENBQUM7S0FvSm5FO0lBakpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EyQkc7SUFDSCxJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0NHO0lBQ0gsSUFBcUIsSUFBSSxDQUFDLEtBQTJDO1FBQ25FLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxJQUF3QixPQUFPLENBQUMsS0FBYztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBNEIsV0FBVyxDQUFDLEtBQXVCO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztJQUMvRyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILElBQXFCLElBQUksQ0FBQyxLQUFnQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O29GQTlLVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBRDlCLFNBQVM7Z0JBU1UsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR0UsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBU0csS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBc0NLLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUztZQTRDSyxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVE7WUF3QlMsT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBaUJVLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZTtZQXlCRCxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9Db2xvclBhbGV0dGVFbnVtIH0gZnJvbSAnLi4vLi4vZW51bXMvcG8tY29sb3ItcGFsZXR0ZS5lbnVtJztcclxuXHJcbmltcG9ydCB7IFBvVGFnSXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby10YWctaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhZ09yaWVudGF0aW9uIH0gZnJvbSAnLi9lbnVtcy9wby10YWctb3JpZW50YXRpb24uZW51bSc7XHJcbmltcG9ydCB7IFBvVGFnVHlwZSB9IGZyb20gJy4vZW51bXMvcG8tdGFnLXR5cGUuZW51bSc7XHJcblxyXG5jb25zdCBwb1RhZ0NvbG9ycyA9ICg8YW55Pk9iamVjdCkudmFsdWVzKFBvQ29sb3JQYWxldHRlRW51bSk7XHJcbmNvbnN0IHBvVGFnT3JpZW50YXRpb25EZWZhdWx0ID0gUG9UYWdPcmllbnRhdGlvbi5WZXJ0aWNhbDtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0ZSBjb21wb25lbnRlIHBlcm1pdGUgZXhpYmlyIHVtIHZhbG9yIGVtIGZvcm1hIGRlIHVtIG1hcmNhZG9yIGNvbG9yaWRvLCBzZW5kbyBwb3Nzw612ZWwgZGVmaW5pciB1bWEgbGVnZW5kYSBlIHJlYWxpemFyIGN1c3RvbWl6YcOnw7Vlc1xyXG4gKiBuYSBjb3IsIGljb25vZ3JhZmlhIGUgdGlwby5cclxuICpcclxuICogQWzDqW0gZGlzc28sIMOpIHBvc3PDrXZlbCBkZWZpbmlyIHVtYSBhw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSB0YW50byBhbyAqY2xpY2sqIHF1YW50byBhdHJhdsOpcyBkYXMgdGVjbGFzICplbnRlci9zcGFjZSogZW5xdWFudG8gbmF2ZWdhXHJcbiAqIHV0aWxpemFuZG8gYSB0ZWNsYSAqdGFiKi5cclxuICpcclxuICogU2V1IHVzbyDDqSByZWNvbWVuZGFkbyBwYXJhIGluZm9ybWHDp8O1ZXMgcXVlIG5lY2Vzc2l0ZW0gZGUgZGVzdGFxdWUgZW0gZm9ybWEgZGUgbWFyY2HDp8Ojby5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9UYWdCYXNlQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHVtYSBsZWdlbmRhIHF1ZSBzZXLDoSBleGliaWRhIGFjaW1hIG91IGFvIGxhZG8gZGEgKnRhZyosIGRlIGFjb3JkbyBjb20gYSBgcC1vcmllbnRhdGlvbmAuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUZXh0byBkYSB0YWcuICovXHJcbiAgQElucHV0KCdwLXZhbHVlJykgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEHDp8OjbyBxdWUgc2Vyw6EgZXhlY3V0YWRhIGFvIGNsaWNhciBzb2JyZSBvIGBwby10YWdgIGUgcXVlIHJlY2ViZXLDoSBjb21vIHBhcsOibWV0cm8gdW0gb2JqZXRvIGNvbnRlbmRvIG8gc2V1IHZhbG9yIGUgdGlwby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb1RhZ0l0ZW0+KCk7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBwb1RhZ09yaWVudGF0aW9uID0gUG9UYWdPcmllbnRhdGlvbjtcclxuICBwdWJsaWMgY3VzdG9tQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3I/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaWNvbj86IGJvb2xlYW4gfCBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwcml2YXRlIF9pbnZlcnNlPzogYm9vbGVhbjtcclxuICBwcml2YXRlIF9vcmllbnRhdGlvbj86IFBvVGFnT3JpZW50YXRpb24gPSBwb1RhZ09yaWVudGF0aW9uRGVmYXVsdDtcclxuICBwcml2YXRlIF90eXBlPzogUG9UYWdUeXBlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGV0ZXJtaW5hIGEgY29yIGRhIHRhZy4gQXMgbWFuZWlyYXMgZGUgY3VzdG9taXphciBhcyBjb3JlcyBzw6NvOlxyXG4gICAqIC0gSGV4YWRleGltYWwsIHBvciBleGVtcGxvIGAjYzY0ODQwYDtcclxuICAgKiAtIFJHQiwgY29tbyBgcmdiKDAsIDAsIDE2NSlgO1xyXG4gICAqIC0gTyBub21lIGRhIGNvciwgcG9yIGV4ZW1wbG8gYGJsdWVgO1xyXG4gICAqIC0gVXNhbmRvIHVtYSBkYXMgY29yZXMgZG8gdGVtYSBkbyBQTzpcclxuICAgKiBWYWxvcmVzIHbDoWxpZG9zOlxyXG4gICAqICAtIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTAxXCI+PC9zcGFuPiBgY29sb3ItMDFgXHJcbiAgICogIC0gPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMDJcIj48L3NwYW4+IGBjb2xvci0wMmBcclxuICAgKiAgLSA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0wM1wiPjwvc3Bhbj4gYGNvbG9yLTAzYFxyXG4gICAqICAtIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTA0XCI+PC9zcGFuPiBgY29sb3ItMDRgXHJcbiAgICogIC0gPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMDVcIj48L3NwYW4+IGBjb2xvci0wNWBcclxuICAgKiAgLSA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0wNlwiPjwvc3Bhbj4gYGNvbG9yLTA2YFxyXG4gICAqICAtIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTA3XCI+PC9zcGFuPiBgY29sb3ItMDdgXHJcbiAgICogIC0gPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMDhcIj48L3NwYW4+IGBjb2xvci0wOGBcclxuICAgKiAgLSA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0wOVwiPjwvc3Bhbj4gYGNvbG9yLTA5YFxyXG4gICAqICAtIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTEwXCI+PC9zcGFuPiBgY29sb3ItMTBgXHJcbiAgICogIC0gPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMTFcIj48L3NwYW4+IGBjb2xvci0xMWBcclxuICAgKiAgLSA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0xMlwiPjwvc3Bhbj4gYGNvbG9yLTEyYFxyXG4gICAqXHJcbiAgICogLSBQYXJhIHVtYSBtZWxob3IgYWNlc3NpYmlsaWRhZGUgbm8gdXNvIGRvIGNvbXBvbmVudGUgw6kgcmVjb21lbmTDoXZlbCB1dGlsaXphciBjb3JlcyBjb20gdW0gbWVsaG9yIGNvbnRyYXN0ZSBlbSByZWxhw6fDo28gYW8gYmFja2dyb3VuZC5cclxuICAgKlxyXG4gICAqID4gKipBdGVuw6fDo286KiogQSBwcm9wcmllZGFkZSBgcC10eXBlYCBzb2JyZXDDtWUgZXN0YSBkZWZpbmnDp8Ojby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtY29sb3InKSBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSBwb1RhZ0NvbG9ycy5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLl9jb2xvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCB2YWx1ZSkgPyAodGhpcy5jdXN0b21Db2xvciA9IHZhbHVlKSA6ICh0aGlzLmN1c3RvbUNvbG9yID0gdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBvdSBhdGl2YSB1bSDDrWNvbmUgcXVlIHNlcsOhIGV4aWJpZG8gYW8gbGFkbyBkbyB2YWxvciBkYSAqdGFnKi5cclxuICAgKlxyXG4gICAqIFF1YW5kbyBgcC10eXBlYCBlc3RpdmVyIGRlZmluaWRhLCBiYXN0YSBpbmZvcm1hciB1bSB2YWxvciBpZ3VhbCBhIGB0cnVlYCBwYXJhIHF1ZSBvIMOtY29uZSBzZWphIGV4aWJpZG8gY29uZm9ybWUgZGVzY3Jpw6fDtWVzIGFiYWl4bzpcclxuICAgKiAtIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLW9rXCI+PC9zcGFuPiAtIGBzdWNjZXNzYFxyXG4gICAqIC0gPHNwYW4gY2xhc3M9XCJwby1pY29uIHBvLWljb24td2FybmluZ1wiPjwvc3Bhbj4gLSBgd2FybmluZ2BcclxuICAgKiAtIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWNsb3NlXCI+PC9zcGFuPiAtIGBkYW5nZXJgXHJcbiAgICogLSA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1pbmZvXCI+PC9zcGFuPiAtIGBpbmZvYFxyXG4gICAqXHJcbiAgICogVGFtYsOpbSDDiSBwb3Nzw612ZWwgdXNhciBxdWFscXVlciB1bSBkb3Mgw61jb25lcyBkYSBbQmlibGlvdGVjYSBkZSDDrWNvbmVzXSgvZ3VpZGVzL2ljb25zKS4gY29uZm9ybWUgZXhlbXBsbyBhYmFpeG86XHJcbiAgICogYGBgXHJcbiAgICogPHBvLXRhZyBwLWljb249XCJwby1pY29uLXVzZXJcIiBwLXZhbHVlPVwiUE8gVGFnXCI+PC9wby10YWc+XHJcbiAgICogYGBgXHJcbiAgICogY29tbyB0YW1iw6ltIHV0aWxpemFyIG91dHJhcyBmb250ZXMgZGUgw61jb25lcywgcG9yIGV4ZW1wbG8gYSBiaWJsaW90ZWNhICpGb250IEF3ZXNvbWUqLCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tdGFnIHAtaWNvbj1cImZhIGZhLXBvZGNhc3RcIiBwLXZhbHVlPVwiUE8gVGFnXCI+PC9wby1idXR0b24+XHJcbiAgICogYGBgXHJcbiAgICogT3V0cmEgb3DDp8OjbyBzZXJpYSBhIGN1c3RvbWl6YcOnw6NvIGRvIMOtY29uZSBhdHJhdsOpcyBkbyBgVGVtcGxhdGVSZWZgLCBjb25mb3JtZSBleGVtcGxvIGFiYWl4bzpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tdGFnIFtwLWljb25dPVwidGVtcGxhdGVcIiBwLXZhbHVlPVwiVGFnIHRlbXBsYXRlIGlvbmljXCI+PC9wby1idXR0b24+XHJcbiAgICpcclxuICAgKiA8bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxyXG4gICAqICA8aW9uLWljb24gc3R5bGU9XCJmb250LXNpemU6IGluaGVyaXRcIiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxyXG4gICAqIDwvbmctdGVtcGxhdGU+XHJcbiAgICogYGBgXHJcbiAgICogPiBQYXJhIG8gw61jb25lIGVucXVhZHJhciBjb3JyZXRhbWVudGUsIGRldmUtc2UgdXRpbGl6YXIgYGZvbnQtc2l6ZTogaW5oZXJpdGAgY2FzbyBvIMOtY29uZSB1dGlsaXphZG8gbsOjbyBhcGxpcXVlLW8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWljb24nKSBzZXQgaWNvbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAodGhpcy50eXBlKSB7XHJcbiAgICAgIHRoaXMuX2ljb24gPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpY29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXRpdmEgYSBpbnZlcnPDo28gZGUgY29yZXMgY29uZmlndXJhZGFzIG5vIGNvbXBvbmVudGUsIHBvc3NpYmlsaXRhbmRvIHVtYSB2aXN1YWxpemHDp8OjbyBkZSBzdGF0dXMgYXRpdm8gZSBpbmF0aXZvLlxyXG4gICAqXHJcbiAgICogPiBBIGNvciBkbyB0ZXh0bywgZG8gw61jb25lIGUgZGEgYm9yZGEgZmljYW0gY29tIGEgY29yIHV0aWxpemFkYSBuYSBwcm9wcmllZGFkZSBgcC1jb2xvcmAgb3UgYSBjb3IgY29ycmVzcG9uZGVudGUgYW8gYHAtdHlwZWAsXHJcbiAgICogZSBhIGNvciBkbyBmdW5kbyBmaWNhIGJyYW5jYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaW52ZXJzZScpIHNldCBpbnZlcnNlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbnZlcnNlID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW52ZXJzZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBvICpsYXlvdXQqIGRlIGV4aWJpw6fDo28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgdmVydGljYWxgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9yaWVudGF0aW9uJykgc2V0IG9yaWVudGF0aW9uKHZhbHVlOiBQb1RhZ09yaWVudGF0aW9uKSB7XHJcbiAgICB0aGlzLl9vcmllbnRhdGlvbiA9ICg8YW55Pk9iamVjdCkudmFsdWVzKFBvVGFnT3JpZW50YXRpb24pLmluY2x1ZGVzKHZhbHVlKSA/IHZhbHVlIDogcG9UYWdPcmllbnRhdGlvbkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgb3JpZW50YXRpb24oKTogUG9UYWdPcmllbnRhdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gdGlwbyBkYSAqdGFnKi5cclxuICAgKlxyXG4gICAqIFZhbG9yZXMgdsOhbGlkb3M6XHJcbiAgICogIC0gYHN1Y2Nlc3NgOiBjb3IgdmVyZGUgdXRpbGl6YWRhIHBhcmEgc2ltYm9saXphciBzdWNlc3NvIG91IMOqeGl0by5cclxuICAgKiAgLSBgd2FybmluZ2A6IGNvciBhbWFyZWxhIHF1ZSByZXByZXNlbnRhIGF2aXNvIG91IGFkdmVydMOqbmNpYS5cclxuICAgKiAgLSBgZGFuZ2VyYDogY29yIHZlcm1lbGhhIHBhcmEgZXJybyBvdSBhdmlzbyBjcsOtdGljby5cclxuICAgKiAgLSBgaW5mb2A6IGNvciBjaW56YSBlc2N1cm8gcXVlIGNhcmFjdGVyaXphIGNvbnRlw7pkbyBpbmZvcm1hdGl2by5cclxuICAgKlxyXG4gICAqID4gUXVhbmRvIGVzdGEgcHJvcHJpZWRhZGUgZm9yIGRlZmluaWRhLCBpcsOhIHNvYnJlcG9yIGEgZGVmaW5pw6fDo28gZGUgYHAtY29sb3JgIGUgYHAtaWNvbmAgc29tZW50ZSBzZXLDoSBleGliaWRvIGNhc28gc2VqYSBgdHJ1ZWAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgaW5mb2BcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdHlwZScpIHNldCB0eXBlKHZhbHVlOiBQb1RhZ1R5cGUpIHtcclxuICAgIHRoaXMuX3R5cGUgPSAoPGFueT5PYmplY3QpLnZhbHVlcyhQb1RhZ1R5cGUpLmluY2x1ZGVzKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKTogUG9UYWdUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxufVxyXG4iXX0=