import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoMenuComponent } from '../po-menu';
import { PoNavbarIconAction } from './interfaces/po-navbar-icon-action.interface';
import { PoNavbarItem } from './interfaces/po-navbar-item.interface';
import { PoNavbarLiterals } from './interfaces/po-navbar-literals.interface';
import * as i0 from "@angular/core";
export declare const poNavbarLiteralsDefault: {
    en: PoNavbarLiterals;
    es: PoNavbarLiterals;
    pt: PoNavbarLiterals;
    ru: PoNavbarLiterals;
};
/**
 * @description
 *
 * O componente `po-navbar` é um cabeçalho fixo que permite apresentar uma lista de links para facilitar a navegação pelas
 * páginas da aplicação. Também possui ícones com ações.
 *
 * Quando utilizado em uma resolução menor que `768px`, o componente utilizará o menu corrente da aplicação para
 * incluir seus itens.
 *
 * Ao utilizar Navbar com Menu e ambos tiverem logo, será mantido o logo do Navbar.
 */
export declare abstract class PoNavbarBaseComponent {
    applicationMenu: PoMenuComponent;
    private _iconActions;
    private _items;
    private _literals;
    private _logo;
    private _shadow;
    private language;
    /**
     * @optional
     *
     * @description
     *
     * Define uma lista de ações apresentadas em ícones no lado direito do `po-navbar`.
     */
    set iconActions(value: Array<PoNavbarIconAction>);
    get iconActions(): Array<PoNavbarIconAction>;
    /**
     * @optional
     *
     * @description
     *
     * Define uma lista de items do `po-navbar`.
     */
    set items(value: Array<PoNavbarItem>);
    get items(): Array<PoNavbarItem>;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com a literal usada na propriedade `p-literals`.
     *
     * Para customizar a literal, basta declarar um objeto do tipo `PoNavbarLiterals` conforme exemplo abaixo:
     *
     * ```
     *  const customLiterals: PoNavbarLiterals = {
     *    navbarLinks: 'Itens de navegação'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-navbar
     *   [p-literals]="customLiterals">
     * </po-navbar>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value: PoNavbarLiterals);
    get literals(): PoNavbarLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Define a logo apresentada `po-navbar`.
     */
    set logo(value: string);
    get logo(): string;
    /**
     * @optional
     *
     * @description
     *
     * Aplica uma sombra na parte inferior do `po-navbar`.
     *
     * @default `false`
     */
    set shadow(value: boolean);
    get shadow(): boolean;
    constructor(languageService: PoLanguageService);
    protected abstract validateMenuLogo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNavbarBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoNavbarBaseComponent, never, never, { "iconActions": "p-icon-actions"; "items": "p-items"; "literals": "p-literals"; "logo": "p-logo"; "shadow": "p-shadow"; }, {}, never, never, false>;
}