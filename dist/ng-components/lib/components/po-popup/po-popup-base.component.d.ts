import { PoPopupAction } from './po-popup-action.interface';
import * as i0 from "@angular/core";
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
export declare class PoPopupBaseComponent {
    arrowDirection: string;
    showPopup: boolean;
    protected oldTarget: any;
    protected param: any;
    protected clickoutListener: () => void;
    protected resizeListener: () => void;
    private _actions;
    private _customPositions?;
    private _hideArrow;
    private _isCornerAlign;
    private _position?;
    private _target;
    /** Lista de ações que serão exibidas no componente. */
    set actions(value: Array<PoPopupAction>);
    get actions(): Array<PoPopupAction>;
    /**
     * @optional
     *
     * @description
     *
     * Oculta a seta do componente *popup*.
     *
     * @default `false`
     */
    set hideArrow(value: boolean);
    get hideArrow(): boolean;
    set isCornerAlign(value: boolean);
    get isCornerAlign(): boolean;
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
    set position(value: string);
    get position(): string;
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
    set customPositions(value: Array<string>);
    get customPositions(): Array<string>;
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
    set target(value: any);
    get target(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPopupBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPopupBaseComponent, never, never, { "actions": "p-actions"; "hideArrow": "p-hide-arrow"; "isCornerAlign": "p-is-corner-align"; "position": "p-position"; "customPositions": "p-custom-positions"; "target": "p-target"; }, {}, never, never, false>;
}
