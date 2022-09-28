import { EventEmitter } from '@angular/core';
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
export declare abstract class PoWidgetBaseComponent {
    /** Descrição da segunda ação. */
    secondaryLabel?: string;
    /**
     * @optional
     *
     * @description
     *
     * Ação que será executada quando o usuário clicar sobre a área total do `po-widget`.
     */
    click: EventEmitter<MouseEvent>;
    /**
     * @optional
     *
     * @description
     *
     * Função que será disparada com o valor do `p-disabled` quando esta propriedade for alterada.
     */
    onDisabled: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Função que será chamada na primeira ação.
     */
    primaryAction: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Função que será chamada na segunda ação.
     */
    secondaryAction: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     * Função chamada ao clicar no ícone de configuração
     */
    setting: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     * Função que será chamada ao clicar no título.
     */
    titleAction: EventEmitter<any>;
    containerHeight?: string;
    id: string;
    private _background?;
    private _disabled?;
    private _height?;
    private _help?;
    private _noShadow?;
    private _primary?;
    private _primaryLabel?;
    private _title?;
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
    set background(value: string);
    get background(): string;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita todas as ações do componente.
     *
     * @default `false`
     */
    set disabled(value: boolean);
    get disabled(): boolean;
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
    set height(value: number);
    get height(): number;
    /**
     * @optional
     *
     * @description
     *
     * Link de ajuda
     */
    set help(value: string);
    get help(): string;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a sombra do `po-widget`.
     *
     * @default `true`
     */
    set noShadow(value: boolean);
    get noShadow(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Opção para que o `po-widget` fique em destaque.
     *
     * @default `false`
     */
    set primary(value: boolean);
    get primary(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Descrição da primeira ação.
     *
     * @default `false`
     */
    set primaryLabel(value: string);
    get primaryLabel(): string;
    /**
     * @optional
     *
     * @description
     *
     * Título do `po-widget`.
     *
     * @default `false`
     */
    set title(value: string);
    get title(): string;
    abstract setHeight(height: number): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoWidgetBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoWidgetBaseComponent, never, never, { "secondaryLabel": "p-secondary-label"; "background": "p-background"; "disabled": "p-disabled"; "height": "p-height"; "help": "p-help"; "noShadow": "p-no-shadow"; "primary": "p-primary"; "primaryLabel": "p-primary-label"; "title": "p-title"; }, { "click": "p-click"; "onDisabled": "p-on-disabled"; "primaryAction": "p-primary-action"; "secondaryAction": "p-secondary-action"; "setting": "p-setting"; "titleAction": "p-title-action"; }, never, never, false>;
}
