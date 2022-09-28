import * as i0 from "@angular/core";
/**
 * @description
 *
 * A diretiva po-tooltip deve ser utilizada para oferecer informações adicionais quando os usuários
 * passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela está atribuída.
 *
 * O conteúdo é formado por um pequeno texto que deve contribuir para uma tomada de decisão ou
 * orientação do usuário. A ativação dele pode estar em qualquer componente ou tag HTML.
 *
 * Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
 * conteúdo deve-se utilizar o [**po-popover**](https://po-ui.io/documentation/po-popover?view=doc).
 */
export declare abstract class PoTooltipBaseDirective {
    /**
     * @optional
     *
     * @description
     *
     * Define que o po-tooltip será incluido no body e não dentro do elemento ao qual o tooltip foi especificado.
     * Opção necessária para o caso de uso de tooltip em um elemento SVG.
     *
     * @default `false`
     */
    appendInBody: boolean;
    protected _tooltipPosition?: string;
    protected tooltipContent: any;
    private _displayTooltip;
    private _tooltip;
    /**
     * @description
     *
     * Habilita e atribui um texto ao po-tooltip.
     *
     * **Como boa prática, indica-se utilizar um texto com até 140 caracteres.**
     */
    set tooltip(tooltip: string);
    get tooltip(): string;
    /**
     * @optional
     *
     * @description
     *
     * Define a posição que o po-tooltip abrirá em relação ao componente alvo. Sugere-se que seja
     * usada a orientação "bottom" (abaixo), porém o mesmo é flexível e será rotacionado
     * automaticamente para se adequar a tela, caso necessário.
     *
     * Posições válidas:
     * - `right`: Posiciona o po-tooltip no lado direito do componente alvo.
     * - `right-bottom`: Posiciona o po-tooltip no lado direito inferior do componente alvo.
     * - `right-top`: Posiciona o po-tooltip no lado direito superior do componente alvo.
     * - `bottom`: Posiciona o po-tooltip abaixo do componente alvo.
     * - `bottom-left`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.
     * - `bottom-right`: Posiciona o po-tooltip abaixo e à direita do componente alvo.
     * - `left`: Posiciona o po-tooltip no lado esquerdo do componente alvo.
     * - `left-top`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.
     * - `left-bottom`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.
     * - `top`: Posiciona o po-tooltip acima do componente alvo.
     * - `top-right`: Posiciona o po-tooltip acima e à direita do componente alvo.
     * - `top-left`: Posiciona o po-tooltip acima e à esquerda do componente alvo.
     *
     * @default bottom
     */
    set tooltipPosition(position: string);
    get tooltipPosition(): string;
    set displayTooltip(value: boolean);
    get displayTooltip(): boolean;
    protected abstract addTooltipAction(): any;
    protected abstract removeTooltipAction(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTooltipBaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTooltipBaseDirective, never, never, { "appendInBody": "p-append-in-body"; "tooltip": "p-tooltip"; "tooltipPosition": "p-tooltip-position"; "displayTooltip": "p-display-tooltip"; }, {}, never, never, false>;
}
