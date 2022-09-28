import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { convertToBoolean, isTypeof, uuid } from '../../utils/util';
import * as i0 from "@angular/core";
/**
 *
 * @description
 *
 * O componente `po-widget` é recomendado para exibição de *dashboards*, podendo ser utilizado
 * para incluir vários tipos de conteúdo como: gráficos, tabelas, grids e imagens.
 *
 * Além da exibição de conteúdos, este componente possibilita adicionar ações e um link
 * para ajuda, como também possibilita ser utilizado com ou sem sombra.
 *
 * Para controlar sua largura, é possível utilizar o [Grid System](/guides/grid-system) para um maior
 * controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resoluções.
 */
export class PoWidgetBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Ação que será executada quando o usuário clicar sobre a área total do `po-widget`.
         */
        this.click = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Função que será disparada com o valor do `p-disabled` quando esta propriedade for alterada.
         */
        this.onDisabled = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Função que será chamada na primeira ação.
         */
        this.primaryAction = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Função que será chamada na segunda ação.
         */
        this.secondaryAction = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Função chamada ao clicar no ícone de configuração
         */
        this.setting = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Função que será chamada ao clicar no título.
         */
        this.titleAction = new EventEmitter();
        this.containerHeight = 'auto';
        this.id = uuid();
        this._disabled = false;
        this._noShadow = false;
        this._primary = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Aplicação de imagem de fundo.
     * > Se a imagem escolhida intervir na legibilidade do texto contido no `p-widget`,
     * pode-se utilizar a propriedade `p-primary` em conjunto para que os textos fiquem na cor branca.
     *
     */
    set background(value) {
        this._background = value && typeof value === 'string' ? value : undefined;
    }
    get background() {
        return this._background;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita todas as ações do componente.
     *
     * @default `false`
     */
    set disabled(value) {
        this._disabled = convertToBoolean(value);
        this.onDisabled.emit(this.disabled);
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do `po-widget`.
     * A altura mínima para o `po-widget` depende do que será exibido através das propriedades `p-primary-label`,
     * `p-setting`, `p-help` e `p-title`.
     * > Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.
     */
    set height(value) {
        this._height = parseInt(value, 10);
        this.setHeight(this.height);
    }
    get height() {
        return this._height;
    }
    /**
     * @optional
     *
     * @description
     *
     * Link de ajuda
     */
    set help(value) {
        this._help = isTypeof(value, 'string') ? value : '';
        this.setHeight(this.height);
    }
    get help() {
        return this._help;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a sombra do `po-widget`.
     *
     * @default `true`
     */
    set noShadow(value) {
        this._noShadow = value === '' ? true : convertToBoolean(value);
        this.setHeight(this.height);
    }
    get noShadow() {
        return this._noShadow;
    }
    /**
     * @optional
     *
     * @description
     *
     * Opção para que o `po-widget` fique em destaque.
     *
     * @default `false`
     */
    set primary(value) {
        this._primary = value === '' ? true : convertToBoolean(value);
    }
    get primary() {
        return this._primary;
    }
    /**
     * @optional
     *
     * @description
     *
     * Descrição da primeira ação.
     *
     * @default `false`
     */
    set primaryLabel(value) {
        this._primaryLabel = isTypeof(value, 'string') ? value : '';
        this.setHeight(this.height);
    }
    get primaryLabel() {
        return this._primaryLabel;
    }
    /**
     * @optional
     *
     * @description
     *
     * Título do `po-widget`.
     *
     * @default `false`
     */
    set title(value) {
        this._title = isTypeof(value, 'string') ? value : '';
        this.setHeight(this.height);
    }
    get title() {
        return this._title;
    }
}
PoWidgetBaseComponent.ɵfac = function PoWidgetBaseComponent_Factory(t) { return new (t || PoWidgetBaseComponent)(); };
PoWidgetBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoWidgetBaseComponent, inputs: { secondaryLabel: ["p-secondary-label", "secondaryLabel"], background: ["p-background", "background"], disabled: ["p-disabled", "disabled"], height: ["p-height", "height"], help: ["p-help", "help"], noShadow: ["p-no-shadow", "noShadow"], primary: ["p-primary", "primary"], primaryLabel: ["p-primary-label", "primaryLabel"], title: ["p-title", "title"] }, outputs: { click: "p-click", onDisabled: "p-on-disabled", primaryAction: "p-primary-action", secondaryAction: "p-secondary-action", setting: "p-setting", titleAction: "p-title-action" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoWidgetBaseComponent, [{
        type: Directive
    }], null, { secondaryLabel: [{
            type: Input,
            args: ['p-secondary-label']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], onDisabled: [{
            type: Output,
            args: ['p-on-disabled']
        }], primaryAction: [{
            type: Output,
            args: ['p-primary-action']
        }], secondaryAction: [{
            type: Output,
            args: ['p-secondary-action']
        }], setting: [{
            type: Output,
            args: ['p-setting']
        }], titleAction: [{
            type: Output,
            args: ['p-title-action']
        }], background: [{
            type: Input,
            args: ['p-background']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], noShadow: [{
            type: Input,
            args: ['p-no-shadow']
        }], primary: [{
            type: Input,
            args: ['p-primary']
        }], primaryLabel: [{
            type: Input,
            args: ['p-primary-label']
        }], title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8td2lkZ2V0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXdpZGdldC9wby13aWRnZXQtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVwRTs7Ozs7Ozs7Ozs7O0dBWUc7QUFFSCxNQUFNLE9BQWdCLHFCQUFxQjtJQUQzQztRQUtFOzs7Ozs7V0FNRztRQUNnQixVQUFLLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFFcEY7Ozs7OztXQU1HO1FBQ3NCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqRjs7Ozs7O1dBTUc7UUFDeUIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2Rjs7Ozs7O1dBTUc7UUFDMkIsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzRjs7Ozs7V0FLRztRQUNrQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFMUU7Ozs7O1dBS0c7UUFDdUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVuRixvQkFBZSxHQUFZLE1BQU0sQ0FBQztRQUNsQyxPQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFHSixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBRzVCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsYUFBUSxHQUFhLEtBQUssQ0FBQztLQW9KcEM7SUFoSkM7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBMkIsVUFBVSxDQUFDLEtBQWE7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQXlCLFFBQVEsQ0FBQyxLQUFjO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQXVCLE1BQU0sQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFNLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFxQixJQUFJLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBMEIsUUFBUSxDQUFDLEtBQWM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBUSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBd0IsT0FBTyxDQUFDLEtBQWM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBUSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBOEIsWUFBWSxDQUFDLEtBQWE7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQXNCLEtBQUssQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzswRkFqTm1CLHFCQUFxQjt3RUFBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEMUMsU0FBUztnQkFHb0IsY0FBYztrQkFBekMsS0FBSzttQkFBQyxtQkFBbUI7WUFTUCxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFTUSxVQUFVO2tCQUFsQyxNQUFNO21CQUFDLGVBQWU7WUFTSyxhQUFhO2tCQUF4QyxNQUFNO21CQUFDLGtCQUFrQjtZQVNJLGVBQWU7a0JBQTVDLE1BQU07bUJBQUMsb0JBQW9CO1lBUVAsT0FBTztrQkFBM0IsTUFBTTttQkFBQyxXQUFXO1lBUU8sV0FBVztrQkFBcEMsTUFBTTttQkFBQyxnQkFBZ0I7WUF3QkcsVUFBVTtrQkFBcEMsS0FBSzttQkFBQyxjQUFjO1lBaUJJLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQW9CSSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFnQkksSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRO1lBa0JXLFFBQVE7a0JBQWpDLEtBQUs7bUJBQUMsYUFBYTtZQWtCSSxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUFpQlksWUFBWTtrQkFBekMsS0FBSzttQkFBQyxpQkFBaUI7WUFrQkYsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4sIGlzVHlwZW9mLCB1dWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG4vKipcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8td2lkZ2V0YCDDqSByZWNvbWVuZGFkbyBwYXJhIGV4aWJpw6fDo28gZGUgKmRhc2hib2FyZHMqLCBwb2RlbmRvIHNlciB1dGlsaXphZG9cclxuICogcGFyYSBpbmNsdWlyIHbDoXJpb3MgdGlwb3MgZGUgY29udGXDumRvIGNvbW86IGdyw6FmaWNvcywgdGFiZWxhcywgZ3JpZHMgZSBpbWFnZW5zLlxyXG4gKlxyXG4gKiBBbMOpbSBkYSBleGliacOnw6NvIGRlIGNvbnRlw7pkb3MsIGVzdGUgY29tcG9uZW50ZSBwb3NzaWJpbGl0YSBhZGljaW9uYXIgYcOnw7VlcyBlIHVtIGxpbmtcclxuICogcGFyYSBhanVkYSwgY29tbyB0YW1iw6ltIHBvc3NpYmlsaXRhIHNlciB1dGlsaXphZG8gY29tIG91IHNlbSBzb21icmEuXHJcbiAqXHJcbiAqIFBhcmEgY29udHJvbGFyIHN1YSBsYXJndXJhLCDDqSBwb3Nzw612ZWwgdXRpbGl6YXIgbyBbR3JpZCBTeXN0ZW1dKC9ndWlkZXMvZ3JpZC1zeXN0ZW0pIHBhcmEgdW0gbWFpb3JcclxuICogY29udHJvbGUgZGUgc2V1IHJlZGltZW5zaW9uYW1lbnRvLCBhc3NpbSBwb3NzaWJpbGl0YW5kbyBvIHRyYXRhbWVudG8gcGFyYSBkaWZlcmVudGVzIHJlc29sdcOnw7Vlcy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9XaWRnZXRCYXNlQ29tcG9uZW50IHtcclxuICAvKiogRGVzY3Jpw6fDo28gZGEgc2VndW5kYSBhw6fDo28uICovXHJcbiAgQElucHV0KCdwLXNlY29uZGFyeS1sYWJlbCcpIHNlY29uZGFyeUxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQcOnw6NvIHF1ZSBzZXLDoSBleGVjdXRhZGEgcXVhbmRvIG8gdXN1w6FyaW8gY2xpY2FyIHNvYnJlIGEgw6FyZWEgdG90YWwgZG8gYHBvLXdpZGdldGAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jbGljaycpIGNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgZGlzcGFyYWRhIGNvbSBvIHZhbG9yIGRvIGBwLWRpc2FibGVkYCBxdWFuZG8gZXN0YSBwcm9wcmllZGFkZSBmb3IgYWx0ZXJhZGEuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1vbi1kaXNhYmxlZCcpIG9uRGlzYWJsZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgY2hhbWFkYSBuYSBwcmltZWlyYSBhw6fDo28uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1wcmltYXJ5LWFjdGlvbicpIHByaW1hcnlBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgY2hhbWFkYSBuYSBzZWd1bmRhIGHDp8Ojby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNlY29uZGFyeS1hY3Rpb24nKSBzZWNvbmRhcnlBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRnVuw6fDo28gY2hhbWFkYSBhbyBjbGljYXIgbm8gw61jb25lIGRlIGNvbmZpZ3VyYcOnw6NvXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1zZXR0aW5nJykgc2V0dGluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgY2hhbWFkYSBhbyBjbGljYXIgbm8gdMOtdHVsby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXRpdGxlLWFjdGlvbicpIHRpdGxlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb250YWluZXJIZWlnaHQ/OiBzdHJpbmcgPSAnYXV0byc7XHJcbiAgaWQgPSB1dWlkKCk7XHJcblxyXG4gIHByaXZhdGUgX2JhY2tncm91bmQ/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2hlbHA/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfbm9TaGFkb3c/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfcHJpbWFyeT86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9wcmltYXJ5TGFiZWw/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBcGxpY2HDp8OjbyBkZSBpbWFnZW0gZGUgZnVuZG8uXHJcbiAgICogPiBTZSBhIGltYWdlbSBlc2NvbGhpZGEgaW50ZXJ2aXIgbmEgbGVnaWJpbGlkYWRlIGRvIHRleHRvIGNvbnRpZG8gbm8gYHAtd2lkZ2V0YCxcclxuICAgKiBwb2RlLXNlIHV0aWxpemFyIGEgcHJvcHJpZWRhZGUgYHAtcHJpbWFyeWAgZW0gY29uanVudG8gcGFyYSBxdWUgb3MgdGV4dG9zIGZpcXVlbSBuYSBjb3IgYnJhbmNhLlxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWJhY2tncm91bmQnKSBzZXQgYmFja2dyb3VuZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kID0gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJhY2tncm91bmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZXNhYmlsaXRhIHRvZGFzIGFzIGHDp8O1ZXMgZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcblxyXG4gICAgdGhpcy5vbkRpc2FibGVkLmVtaXQodGhpcy5kaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgYWx0dXJhIGRvIGBwby13aWRnZXRgLlxyXG4gICAqIEEgYWx0dXJhIG3DrW5pbWEgcGFyYSBvIGBwby13aWRnZXRgIGRlcGVuZGUgZG8gcXVlIHNlcsOhIGV4aWJpZG8gYXRyYXbDqXMgZGFzIHByb3ByaWVkYWRlcyBgcC1wcmltYXJ5LWxhYmVsYCxcclxuICAgKiBgcC1zZXR0aW5nYCwgYHAtaGVscGAgZSBgcC10aXRsZWAuXHJcbiAgICogPiBDYXNvIG7Do28gc2VqYSBpbmZvcm1hZG8gdmFsb3IsIGEgcHJvcHJpZWRhZGUgaXLDoSBhc3N1bWlyIG8gdGFtYW5obyBkbyBjb250ZcO6ZG8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhlaWdodCcpIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gcGFyc2VJbnQoPGFueT52YWx1ZSwgMTApO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaW5rIGRlIGFqdWRhXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhlbHAnKSBzZXQgaGVscCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9oZWxwID0gaXNUeXBlb2YodmFsdWUsICdzdHJpbmcnKSA/IHZhbHVlIDogJyc7XHJcbiAgICB0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVscCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlbHA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzYWJpbGl0YSBhIHNvbWJyYSBkbyBgcG8td2lkZ2V0YC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGB0cnVlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1uby1zaGFkb3cnKSBzZXQgbm9TaGFkb3codmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX25vU2hhZG93ID0gPGFueT52YWx1ZSA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbm9TaGFkb3coKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9TaGFkb3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT3DDp8OjbyBwYXJhIHF1ZSBvIGBwby13aWRnZXRgIGZpcXVlIGVtIGRlc3RhcXVlLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wcmltYXJ5Jykgc2V0IHByaW1hcnkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3ByaW1hcnkgPSA8YW55PnZhbHVlID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBwcmltYXJ5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzY3Jpw6fDo28gZGEgcHJpbWVpcmEgYcOnw6NvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wcmltYXJ5LWxhYmVsJykgc2V0IHByaW1hcnlMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcmltYXJ5TGFiZWwgPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpID8gdmFsdWUgOiAnJztcclxuICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGdldCBwcmltYXJ5TGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmltYXJ5TGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVMOtdHVsbyBkbyBgcG8td2lkZ2V0YC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpID8gdmFsdWUgOiAnJztcclxuICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3Qgc2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTtcclxufVxyXG4iXX0=