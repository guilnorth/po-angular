import { PoSlideItem } from './interfaces/po-slide-item.interface';
import * as i0 from "@angular/core";
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
export declare abstract class PoSlideBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Define a exibição das setas de navegação.
     *
     * @default `false`
     */
    hideArrows: boolean;
    private _interval;
    private _height?;
    private _slides;
    /**
     * @optional
     *
     * @description
     * Altura do po-slide, caso seja slide com template customizado, não assume o valor `default`.
     *
     * @default `336`
     */
    set height(value: number);
    get height(): number;
    /**
     * @optional
     *
     * @description
     *
     * Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `1000` os slides não trocam automaticamente.
     *
     * @default `4000`
     */
    set interval(value: number);
    get interval(): number;
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
    set slides(value: Array<PoSlideItem | string | any>);
    get slides(): Array<PoSlideItem | string | any>;
    abstract setSlideHeight(height: number): void;
    protected abstract cancelInterval(): void;
    protected abstract setSlideItems(value: Array<PoSlideItem | string | any>): void;
    protected abstract startSlide(): void;
    protected abstract startInterval(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSlideBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoSlideBaseComponent, never, never, { "hideArrows": "p-hide-arrows"; "height": "p-height"; "interval": "p-interval"; "slides": "p-slides"; }, {}, never, never, false>;
}