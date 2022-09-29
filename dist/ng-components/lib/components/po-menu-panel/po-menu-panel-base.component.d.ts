import { PoMenuPanelItem } from './po-menu-panel-item/po-menu-panel-item.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Este é um componente de menu lateral composto apenas por ícones e com um nível, utilizado para navegação
 * em páginas internas, externas da aplicação ou aciona uma ação.
 *
 * O componente `po-menu-panel` recebe uma lista de objetos do tipo `MenuPanelItem` com as informações dos
 * itens de menu como textos, links para redirecionamento, ações e ícones.
 */
export declare class PoMenuPanelBaseComponent {
    private _menus;
    private _logo;
    /** Lista dos itens do `po-menu-panel`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio. */
    set menus(menus: Array<PoMenuPanelItem>);
    get menus(): Array<PoMenuPanelItem>;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada na parte superior do menu.
     *
     * > Caso seja indefinida será aplicada a imagem default do PO UI.
     */
    set logo(src: string);
    get logo(): string;
    private setMenuExtraProperties;
    private setMenuItemProperties;
    private setMenuType;
    private validateMenu;
    private validateMenus;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuPanelBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoMenuPanelBaseComponent, never, never, { "menus": "p-menus"; "logo": "p-logo"; }, {}, never, never, false>;
}