import { PoMenuFilter } from './po-menu-filter/po-menu-filter.interface';
import { PoMenuItem } from './po-menu-item.interface';
import { PoMenuService } from './services/po-menu.service';
import { PoMenuGlobalService } from './services/po-menu-global.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
export declare const poMenuLiteralsDefault: {
    en: {
        itemNotFound: string;
        emptyLabelError: string;
        logomarcaHome: string;
    };
    es: {
        itemNotFound: string;
        emptyLabelError: string;
        logomarcaHome: string;
    };
    pt: {
        itemNotFound: string;
        emptyLabelError: string;
        logomarcaHome: string;
    };
    ru: {
        itemNotFound: string;
        emptyLabelError: string;
        logomarcaHome: string;
    };
};
export declare const MAX_LENGHT: number;
/**
 * @description
 *
 * Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.
 *
 * O componente po-menu recebe uma lista de objetos do tipo `MenuItem` com as informações dos itens de menu como
 * textos, links para redirecionamento, ações, até 4 níveis de menu e ícones para o primeiro nível de menu.
 */
export declare abstract class PoMenuBaseComponent {
    menuGlobalService: PoMenuGlobalService;
    menuService: PoMenuService;
    languageService: PoLanguageService;
    allowIcons: boolean;
    allowCollapseMenu: boolean;
    filteredItems: any;
    filterService: PoMenuFilter;
    readonly literals: any;
    private _collapsed;
    private _filter;
    private _level;
    private _logo;
    private _logoAlt;
    private _maxLevel;
    private _menus;
    private _params;
    private _service;
    private _shortLogo;
    /**
     * @optional
     *
     * @description
     *
     * Colapsa (retrai) o menu e caso receba o valor `false` expande o menu.
     *
     * > Utilize esta propriedade para iniciar o menu colapsado.
     *
     * > Ao utilizar os métodos [`colapse`](documentation/po-menu#colapseMethod), [`expand`](documentation/po-menu#expandMethod) e
     * [`toggle`](documentation/po-menu#toggleMethod) o valor desta propriedade não é alterado.
     *
     * **Importante:**
     *
     * > O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `icon` e `shortLabel`.
     *
     * @default `false`
     */
    set collapsed(collapsed: boolean);
    get collapsed(): boolean;
    /** Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio. */
    set menus(menus: Array<PoMenuItem>);
    get menus(): Array<PoMenuItem>;
    get maxLevel(): number;
    /**
     * @optional
     *
     * @description
     *
     * Habilita um campo para pesquisa no menu.
     * A pesquisa é realizada em todos os níveis do menu e busca apenas pelos itens que contém uma ação e/ou link definidos,
     * ou também, pode ser realizada através de um serviço definido na propriedade `p-service`.
     *
     * > O campo de pesquisa é desabilitado se o menu estiver colapsado.
     *
     * @default `false`
     */
    set filter(filter: boolean);
    get filter(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Nesta propriedade deve ser informada a URL do serviço em que será utilizado para realizar o filtro de itens do
     * menu quando realizar uma busca. Caso haja a necessidade de customização, pode ser informado um
     * serviço implementando a interface `PoMenuFilter`.
     *
     * Caso utilizada uma URL, o serviço deve retornar os dados conforme o
     * [Guia de implementação de APIs](https://po-ui.io/guides/api) do PO UI.
     *
     * Quando utilizada uma URL de serviço, será realizado um *GET* na URL informada, passando o valor digitado
     * no parâmetro `search`, veja exemplo:
     *
     * > O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `tot`.
     *
     * ```
     * <po-menu p-service="/api/v1/fnd/menu">
     * </po-menu>
     *
     * Requisição: GET /api/v1/fnd/menu?search=contas
     * ```
     *
     * > É necessário que propriedade `p-filter` esteja habilitada.
     */
    set service(value: string | PoMenuFilter);
    get service(): string | PoMenuFilter;
    /**
     * @optional
     *
     * @description
     *
     * Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.
     *
     * Caso utilizado um serviço customizado, implementando a interface `PoMenuFilter`, o valor desta propriedade
     * será passado como parâmetro, na função `getFilteredData`.
     *
     * Quando utilizada uma URL de serviço, será realizado um *GET* na URL informada, passando os valores informados
     * nesta propriedade em conjunto com o parâmetro `search`, veja exemplo:
     *
     * ```
     * <po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
     * </po-menu>
     *
     * Requisição: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
     * ```
     */
    set params(value: any);
    get params(): any;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.
     *
     * > **Importante:**
     * - Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.
     * - Como boa prática, indica-se utilizar imagens com até `24px` de altura e `224px` de largura,
     * caso ultrapassar esses valores a imagem será readequada no espaço disponível.
     */
    set logo(value: any);
    get logo(): any;
    /**
     * @optional
     *
     * @description
     *
     * Texto alternativo para o logo.
     *
     * > Caso esta propriedade seja indefinida ou inválida o texto padrão será "Logomarca home".
     */
    set logoAlt(value: string);
    get logoAlt(): string;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.
     *
     * > **Importante:**
     * - Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `p-logo` e na ausência desta o
     * espaço para logomarca será removido.
     * - Como boa prática, indica-se utilizar imagens com até `48px` de altura e `48px` de largura,
     * caso ultrapassar esses valores a imagem será readequada no espaço disponível.
     * - Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `p-logo`.
     */
    set shortLogo(value: any);
    get shortLogo(): any;
    constructor(menuGlobalService: PoMenuGlobalService, menuService: PoMenuService, languageService: PoLanguageService);
    protected setMenuExtraProperties(): void;
    protected setMenuItemProperties(menuItem: PoMenuItem): void;
    protected validateMenus(menus: any): void;
    protected setMenuType(menuItem: PoMenuItem): string;
    private configService;
    private processSubItems;
    private removeBadgeAlert;
    private setMenuBadgeAlert;
    private validateMenu;
    private maxLength;
    protected abstract checkActiveMenuByUrl(urlRouter: any): any;
    protected abstract checkingRouterChildrenFragments(): any;
    protected abstract validateCollapseClass(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoMenuBaseComponent, never, never, { "collapsed": "p-collapsed"; "menus": "p-menus"; "filter": "p-filter"; "service": "p-service"; "params": "p-params"; "logo": "p-logo"; "logoAlt": "p-logo-alt"; "shortLogo": "p-short-logo"; }, {}, never, never, false>;
}