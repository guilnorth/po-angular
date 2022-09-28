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
export declare class PoContainerBaseComponent {
    private _height?;
    private _noBorder?;
    private _noPadding?;
    private _noShadow?;
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do `po-container`.
     *
     * > Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.
     */
    set height(value: number);
    get height(): number;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a borda e a sombra em torno do `po-container`.
     *
     * @default `false`
     */
    set noBorder(value: boolean);
    get noBorder(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o espaçamento interno do `po-container`.
     *
     * @default `false`
     */
    set noPadding(value: boolean);
    get noPadding(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o sombreamento em torno do `po-container`.
     *
     * @default `false`
     */
    set noShadow(value: boolean);
    get noShadow(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoContainerBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoContainerBaseComponent, never, never, { "height": "p-height"; "noBorder": "p-no-border"; "noPadding": "p-no-padding"; "noShadow": "p-no-shadow"; }, {}, never, never, false>;
}
