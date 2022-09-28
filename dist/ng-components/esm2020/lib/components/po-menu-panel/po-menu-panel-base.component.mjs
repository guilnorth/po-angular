import { Input, Directive } from '@angular/core';
import { isExternalLink, uuid } from '../../utils/util';
import * as i0 from "@angular/core";
const poDefaultLogo = 'https://po-ui.io/assets/po-logos/po_black.svg';
/**
 * @description
 *
 * Este é um componente de menu lateral composto apenas por ícones e com um nível, utilizado para navegação
 * em páginas internas, externas da aplicação ou aciona uma ação.
 *
 * O componente `po-menu-panel` recebe uma lista de objetos do tipo `MenuPanelItem` com as informações dos
 * itens de menu como textos, links para redirecionamento, ações e ícones.
 */
export class PoMenuPanelBaseComponent {
    constructor() {
        this._logo = poDefaultLogo;
    }
    /** Lista dos itens do `po-menu-panel`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio. */
    set menus(menus) {
        this._menus = Array.isArray(menus) ? menus : [];
        this.setMenuExtraProperties(this._menus);
        this.validateMenus(this._menus);
    }
    get menus() {
        return this._menus;
    }
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada na parte superior do menu.
     *
     * > Caso seja indefinida será aplicada a imagem default do PO UI.
     */
    set logo(src) {
        this._logo = src ?? poDefaultLogo;
    }
    get logo() {
        return this._logo;
    }
    setMenuExtraProperties(menus) {
        menus.forEach(menuItem => this.setMenuItemProperties(menuItem));
    }
    setMenuItemProperties(menuItem) {
        menuItem.id = menuItem.id || uuid();
        menuItem.type = this.setMenuType(menuItem);
    }
    setMenuType(menuItem) {
        if (!menuItem.link) {
            return 'noLink';
        }
        if (isExternalLink(menuItem.link)) {
            return 'externalLink';
        }
        return 'internalLink';
    }
    validateMenu(menuItem) {
        if (!menuItem.label) {
            throw new Error('O atributo PoMenuPanelItem.label não pode ser vazio.');
        }
        if (!menuItem.icon) {
            throw new Error('O atributo PoMenuPanelItem.icon não pode ser vazio.');
        }
    }
    validateMenus(menus) {
        menus.forEach(menu => this.validateMenu(menu));
    }
}
PoMenuPanelBaseComponent.ɵfac = function PoMenuPanelBaseComponent_Factory(t) { return new (t || PoMenuPanelBaseComponent)(); };
PoMenuPanelBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoMenuPanelBaseComponent, inputs: { menus: ["p-menus", "menus"], logo: ["p-logo", "logo"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuPanelBaseComponent, [{
        type: Directive
    }], null, { menus: [{
            type: Input,
            args: ['p-menus']
        }], logo: [{
            type: Input,
            args: ['p-logo']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1wYW5lbC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51LXBhbmVsL3BvLW1lbnUtcGFuZWwtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFLeEQsTUFBTSxhQUFhLEdBQUcsK0NBQStDLENBQUM7QUFFdEU7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBR1UsVUFBSyxHQUFXLGFBQWEsQ0FBQztLQWlFdkM7SUEvREMsNEhBQTRIO0lBQzVILElBQXNCLEtBQUssQ0FBQyxLQUE2QjtRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRWhELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUFxQixJQUFJLENBQUMsR0FBVztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU8sc0JBQXNCLENBQUMsS0FBNkI7UUFDMUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBMEIsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRU8scUJBQXFCLENBQUMsUUFBaUM7UUFDN0QsUUFBUSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQXlCO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVPLFlBQVksQ0FBQyxRQUF5QjtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQUs7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnR0FsRVUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQURwQyxTQUFTO2dCQU1jLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUztZQW9CSyxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0V4dGVybmFsTGluaywgdXVpZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9NZW51UGFuZWxJdGVtIH0gZnJvbSAnLi9wby1tZW51LXBhbmVsLWl0ZW0vcG8tbWVudS1wYW5lbC1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTWVudVBhbmVsSXRlbUludGVybmFsIH0gZnJvbSAnLi9wby1tZW51LXBhbmVsLWl0ZW0vcG8tbWVudS1wYW5lbC1pdGVtLWludGVybmFsLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBwb0RlZmF1bHRMb2dvID0gJ2h0dHBzOi8vcG8tdWkuaW8vYXNzZXRzL3BvLWxvZ29zL3BvX2JsYWNrLnN2Zyc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGUgw6kgdW0gY29tcG9uZW50ZSBkZSBtZW51IGxhdGVyYWwgY29tcG9zdG8gYXBlbmFzIHBvciDDrWNvbmVzIGUgY29tIHVtIG7DrXZlbCwgdXRpbGl6YWRvIHBhcmEgbmF2ZWdhw6fDo29cclxuICogZW0gcMOhZ2luYXMgaW50ZXJuYXMsIGV4dGVybmFzIGRhIGFwbGljYcOnw6NvIG91IGFjaW9uYSB1bWEgYcOnw6NvLlxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLW1lbnUtcGFuZWxgIHJlY2ViZSB1bWEgbGlzdGEgZGUgb2JqZXRvcyBkbyB0aXBvIGBNZW51UGFuZWxJdGVtYCBjb20gYXMgaW5mb3JtYcOnw7VlcyBkb3NcclxuICogaXRlbnMgZGUgbWVudSBjb21vIHRleHRvcywgbGlua3MgcGFyYSByZWRpcmVjaW9uYW1lbnRvLCBhw6fDtWVzIGUgw61jb25lcy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9NZW51UGFuZWxCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9tZW51cztcclxuICBwcml2YXRlIF9sb2dvOiBzdHJpbmcgPSBwb0RlZmF1bHRMb2dvO1xyXG5cclxuICAvKiogTGlzdGEgZG9zIGl0ZW5zIGRvIGBwby1tZW51LXBhbmVsYC4gU2UgbyB2YWxvciBlc3RpdmVyIGluZGVmaW5pZG8gb3UgaW52w6FsaWRvLCBzZXLDoSBpbmljaWFsaXphZG8gY29tbyB1bSBhcnJheSB2YXppby4gKi9cclxuICBASW5wdXQoJ3AtbWVudXMnKSBzZXQgbWVudXMobWVudXM6IEFycmF5PFBvTWVudVBhbmVsSXRlbT4pIHtcclxuICAgIHRoaXMuX21lbnVzID0gQXJyYXkuaXNBcnJheShtZW51cykgPyBtZW51cyA6IFtdO1xyXG5cclxuICAgIHRoaXMuc2V0TWVudUV4dHJhUHJvcGVydGllcyh0aGlzLl9tZW51cyk7XHJcbiAgICB0aGlzLnZhbGlkYXRlTWVudXModGhpcy5fbWVudXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lbnVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21lbnVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENhbWluaG8gcGFyYSBhIGxvZ29tYXJjYSBsb2NhbGl6YWRhIG5hIHBhcnRlIHN1cGVyaW9yIGRvIG1lbnUuXHJcbiAgICpcclxuICAgKiA+IENhc28gc2VqYSBpbmRlZmluaWRhIHNlcsOhIGFwbGljYWRhIGEgaW1hZ2VtIGRlZmF1bHQgZG8gUE8gVUkuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxvZ28nKSBzZXQgbG9nbyhzcmM6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbG9nbyA9IHNyYyA/PyBwb0RlZmF1bHRMb2dvO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvZ28oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9nbztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWVudUV4dHJhUHJvcGVydGllcyhtZW51czogQXJyYXk8UG9NZW51UGFuZWxJdGVtPikge1xyXG4gICAgbWVudXMuZm9yRWFjaChtZW51SXRlbSA9PiB0aGlzLnNldE1lbnVJdGVtUHJvcGVydGllcyg8UG9NZW51UGFuZWxJdGVtSW50ZXJuYWw+bWVudUl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWVudUl0ZW1Qcm9wZXJ0aWVzKG1lbnVJdGVtOiBQb01lbnVQYW5lbEl0ZW1JbnRlcm5hbCkge1xyXG4gICAgbWVudUl0ZW0uaWQgPSBtZW51SXRlbS5pZCB8fCB1dWlkKCk7XHJcbiAgICBtZW51SXRlbS50eXBlID0gdGhpcy5zZXRNZW51VHlwZShtZW51SXRlbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1lbnVUeXBlKG1lbnVJdGVtOiBQb01lbnVQYW5lbEl0ZW0pOiBzdHJpbmcge1xyXG4gICAgaWYgKCFtZW51SXRlbS5saW5rKSB7XHJcbiAgICAgIHJldHVybiAnbm9MaW5rJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNFeHRlcm5hbExpbmsobWVudUl0ZW0ubGluaykpIHtcclxuICAgICAgcmV0dXJuICdleHRlcm5hbExpbmsnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnaW50ZXJuYWxMaW5rJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVNZW51KG1lbnVJdGVtOiBQb01lbnVQYW5lbEl0ZW0pIHtcclxuICAgIGlmICghbWVudUl0ZW0ubGFiZWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPIGF0cmlidXRvIFBvTWVudVBhbmVsSXRlbS5sYWJlbCBuw6NvIHBvZGUgc2VyIHZhemlvLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbWVudUl0ZW0uaWNvbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ08gYXRyaWJ1dG8gUG9NZW51UGFuZWxJdGVtLmljb24gbsOjbyBwb2RlIHNlciB2YXppby4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVNZW51cyhtZW51cyk6IHZvaWQge1xyXG4gICAgbWVudXMuZm9yRWFjaChtZW51ID0+IHRoaXMudmFsaWRhdGVNZW51KG1lbnUpKTtcclxuICB9XHJcbn1cclxuIl19