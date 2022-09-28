import { Input, Directive } from '@angular/core';
import { convertToBoolean, convertToInt, isExternalLink, isTypeof, validValue, uuid } from '../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "./services/po-menu-global.service";
import * as i2 from "./services/po-menu.service";
import * as i3 from "../../services/po-language/po-language.service";
export const poMenuLiteralsDefault = {
    en: {
        itemNotFound: 'Item not found.',
        emptyLabelError: 'Attribute PoMenuItem.label can not be empty.',
        logomarcaHome: 'Home logo'
    },
    es: {
        itemNotFound: 'Elemento no encontrado.',
        emptyLabelError: 'El atributo PoMenuItem.label no puede ser vacío.',
        logomarcaHome: 'Logomarca inicio'
    },
    pt: {
        itemNotFound: 'Item não encontrado.',
        emptyLabelError: 'O atributo PoMenuItem.label não pode ser vazio.',
        logomarcaHome: 'Logomarca home'
    },
    ru: {
        itemNotFound: 'Предмет не найден.',
        emptyLabelError: 'Атрибут PoMenuItem.label не может быть пустым.',
        logomarcaHome: 'Дом Логомарка'
    }
};
export const MAX_LENGHT = 125;
/**
 * @description
 *
 * Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.
 *
 * O componente po-menu recebe uma lista de objetos do tipo `MenuItem` com as informações dos itens de menu como
 * textos, links para redirecionamento, ações, até 4 níveis de menu e ícones para o primeiro nível de menu.
 */
export class PoMenuBaseComponent {
    constructor(menuGlobalService, menuService, languageService) {
        this.menuGlobalService = menuGlobalService;
        this.menuService = menuService;
        this.languageService = languageService;
        this.literals = {
            ...poMenuLiteralsDefault[this.languageService.getLanguageDefault()],
            ...poMenuLiteralsDefault[this.languageService.getShortLanguage()]
        };
        this._collapsed = false;
        this._filter = false;
        this._logoAlt = this.literals.logomarcaHome;
        this._maxLevel = 4;
        this._menus = [];
    }
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
    set collapsed(collapsed) {
        this._collapsed = convertToBoolean(collapsed);
        this.validateCollapseClass();
    }
    get collapsed() {
        return this._collapsed;
    }
    /** Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio. */
    set menus(menus) {
        this._menus = Array.isArray(menus) ? menus : [];
        this.menuGlobalService.sendMenus(menus);
        setTimeout(() => {
            const urlRouter = this.checkingRouterChildrenFragments();
            this.checkActiveMenuByUrl(urlRouter);
        });
    }
    get menus() {
        return this._menus;
    }
    get maxLevel() {
        return this._maxLevel;
    }
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
    set filter(filter) {
        this._filter = filter === '' ? true : convertToBoolean(filter);
        this.filteredItems = [...this._menus];
    }
    get filter() {
        return this._filter;
    }
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
    set service(value) {
        this._service = value || undefined;
        this.configService(this.service);
    }
    get service() {
        return this._service;
    }
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
    set params(value) {
        this._params = value && isTypeof(value, 'object') ? value : undefined;
    }
    get params() {
        return this._params;
    }
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
    set logo(value) {
        this._logo = isTypeof(value, 'string') && value.trim() ? value : undefined;
    }
    get logo() {
        return this._logo;
    }
    /**
     * @optional
     *
     * @description
     *
     * Texto alternativo para o logo.
     *
     * > Caso esta propriedade seja indefinida ou inválida o texto padrão será "Logomarca home".
     */
    set logoAlt(value) {
        const alt = isTypeof(value, 'string') && value.trim() ? this.maxLength(value) : undefined;
        this._logoAlt = alt ?? this._logoAlt;
    }
    get logoAlt() {
        return this._logoAlt;
    }
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
    set shortLogo(value) {
        this._shortLogo = isTypeof(value, 'string') && value.trim() ? value : undefined;
    }
    get shortLogo() {
        return this._shortLogo;
    }
    setMenuExtraProperties() {
        this.allowIcons = !!this.menus.length;
        this.allowCollapseMenu = !!this.menus.length;
        this.menus.forEach(menuItem => {
            this._level = 1;
            this.allowIcons = this.allowIcons ? validValue(menuItem.icon) : false;
            this.allowCollapseMenu = this.allowCollapseMenu && this.allowIcons ? validValue(menuItem.shortLabel) : false;
            this.removeBadgeAlert(menuItem);
            this.setMenuItemProperties(menuItem);
            if (menuItem.subItems) {
                this._level++;
                this.processSubItems(menuItem);
            }
        });
    }
    setMenuItemProperties(menuItem) {
        menuItem['id'] = menuItem['id'] || uuid();
        menuItem['level'] = this._level;
        menuItem['type'] = this.setMenuType(menuItem);
    }
    validateMenus(menus) {
        menus.forEach(menu => this.validateMenu(menu));
    }
    setMenuType(menuItem) {
        if (menuItem.subItems && menuItem.subItems.length > 0 && this._level < this.maxLevel) {
            return 'subItems';
        }
        if (!menuItem.link) {
            return 'noLink';
        }
        if (isExternalLink(menuItem.link)) {
            return 'externalLink';
        }
        return 'internalLink';
    }
    configService(service) {
        if (typeof service === 'string' && service.trim()) {
            // service url
            this.menuService.configProperties(service);
            this.filterService = this.menuService;
        }
        else if (typeof service === 'object' && service.getFilteredData) {
            // custom service
            this.filterService = service;
        }
        else {
            this.filterService = undefined;
        }
    }
    processSubItems(menu) {
        menu.subItems.forEach((menuItem, index, menuItems) => {
            const previousItem = menuItems[index - 1];
            if (previousItem && previousItem.subItems) {
                this._level = previousItem['level'];
            }
            if (this._level <= this.maxLevel) {
                this.setMenuItemProperties(menuItem);
                if (menuItem.subItems) {
                    this._level++;
                    this.processSubItems(menuItem);
                }
            }
            if (!menu['badgeAlert']) {
                menu = this.setMenuBadgeAlert(menu, menuItem);
            }
        });
        menu.subItems = Object.assign([], menu.subItems);
    }
    removeBadgeAlert(menuItem) {
        if (menuItem['badgeAlert']) {
            delete menuItem['badgeAlert'];
        }
        if (menuItem.subItems) {
            menuItem.subItems.forEach(subItem => this.removeBadgeAlert(subItem));
        }
    }
    setMenuBadgeAlert(parent, child) {
        const childHasSubItems = child.subItems && child.subItems.length;
        const childHasBadgeAlert = child['badgeAlert'];
        const childHasBadge = child.badge && convertToInt(child.badge.value) >= 0;
        parent['badgeAlert'] = childHasBadgeAlert || (childHasBadge && !childHasSubItems);
        return parent;
    }
    validateMenu(menuItem) {
        if (!menuItem.label || menuItem.label.trim() === '') {
            throw new Error(this.literals.emptyLabelError);
        }
        else if (menuItem.subItems) {
            menuItem.subItems.forEach(subItem => {
                this.validateMenu(subItem);
            });
        }
    }
    maxLength(value) {
        return value.length > MAX_LENGHT ? value.toString().substring(0, MAX_LENGHT) : value;
    }
}
PoMenuBaseComponent.ɵfac = function PoMenuBaseComponent_Factory(t) { return new (t || PoMenuBaseComponent)(i0.ɵɵdirectiveInject(i1.PoMenuGlobalService), i0.ɵɵdirectiveInject(i2.PoMenuService), i0.ɵɵdirectiveInject(i3.PoLanguageService)); };
PoMenuBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoMenuBaseComponent, inputs: { collapsed: ["p-collapsed", "collapsed"], menus: ["p-menus", "menus"], filter: ["p-filter", "filter"], service: ["p-service", "service"], params: ["p-params", "params"], logo: ["p-logo", "logo"], logoAlt: ["p-logo-alt", "logoAlt"], shortLogo: ["p-short-logo", "shortLogo"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoMenuGlobalService }, { type: i2.PoMenuService }, { type: i3.PoLanguageService }]; }, { collapsed: [{
            type: Input,
            args: ['p-collapsed']
        }], menus: [{
            type: Input,
            args: ['p-menus']
        }], filter: [{
            type: Input,
            args: ['p-filter']
        }], service: [{
            type: Input,
            args: ['p-service']
        }], params: [{
            type: Input,
            args: ['p-params']
        }], logo: [{
            type: Input,
            args: ['p-logo']
        }], logoAlt: [{
            type: Input,
            args: ['p-logo-alt']
        }], shortLogo: [{
            type: Input,
            args: ['p-short-logo']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51L3BvLW1lbnUtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osY0FBYyxFQUNkLFFBQVEsRUFDUixVQUFVLEVBQ1YsSUFBSSxFQUNMLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBUzFCLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHO0lBQ25DLEVBQUUsRUFBRTtRQUNGLFlBQVksRUFBRSxpQkFBaUI7UUFDL0IsZUFBZSxFQUFFLDhDQUE4QztRQUMvRCxhQUFhLEVBQUUsV0FBVztLQUMzQjtJQUNELEVBQUUsRUFBRTtRQUNGLFlBQVksRUFBRSx5QkFBeUI7UUFDdkMsZUFBZSxFQUFFLGtEQUFrRDtRQUNuRSxhQUFhLEVBQUUsa0JBQWtCO0tBQ2xDO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsWUFBWSxFQUFFLHNCQUFzQjtRQUNwQyxlQUFlLEVBQUUsaURBQWlEO1FBQ2xFLGFBQWEsRUFBRSxnQkFBZ0I7S0FDaEM7SUFDRCxFQUFFLEVBQUU7UUFDRixZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLGVBQWUsRUFBRSxnREFBZ0Q7UUFDakUsYUFBYSxFQUFFLGVBQWU7S0FDL0I7Q0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFXLEdBQUcsQ0FBQztBQUV0Qzs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFnQixtQkFBbUI7SUF5TnZDLFlBQ1MsaUJBQXNDLEVBQ3RDLFdBQTBCLEVBQzFCLGVBQWtDO1FBRmxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUFDdEMsZ0JBQVcsR0FB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QkFBQyxRQUFRO1lBaUJVLE9BQU87a0JBQS9CLEtBQUs7bUJBQUMsWUFBWTtZQXVCUSxTQUFTO2tCQUFuQyxLQUFLO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGJyb3dzZXJMYW5ndWFnZSxcclxuICBjb252ZXJ0VG9Cb29sZWFuLFxyXG4gIGNvbnZlcnRUb0ludCxcclxuICBpc0V4dGVybmFsTGluayxcclxuICBpc1R5cGVvZixcclxuICB2YWxpZFZhbHVlLFxyXG4gIHV1aWRcclxufSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvTWVudUZpbHRlciB9IGZyb20gJy4vcG8tbWVudS1maWx0ZXIvcG8tbWVudS1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9NZW51SXRlbSB9IGZyb20gJy4vcG8tbWVudS1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTWVudVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvTWVudUdsb2JhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLW1lbnUtZ2xvYmFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9NZW51TGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiB7XHJcbiAgICBpdGVtTm90Rm91bmQ6ICdJdGVtIG5vdCBmb3VuZC4nLFxyXG4gICAgZW1wdHlMYWJlbEVycm9yOiAnQXR0cmlidXRlIFBvTWVudUl0ZW0ubGFiZWwgY2FuIG5vdCBiZSBlbXB0eS4nLFxyXG4gICAgbG9nb21hcmNhSG9tZTogJ0hvbWUgbG9nbydcclxuICB9LFxyXG4gIGVzOiB7XHJcbiAgICBpdGVtTm90Rm91bmQ6ICdFbGVtZW50byBubyBlbmNvbnRyYWRvLicsXHJcbiAgICBlbXB0eUxhYmVsRXJyb3I6ICdFbCBhdHJpYnV0byBQb01lbnVJdGVtLmxhYmVsIG5vIHB1ZWRlIHNlciB2YWPDrW8uJyxcclxuICAgIGxvZ29tYXJjYUhvbWU6ICdMb2dvbWFyY2EgaW5pY2lvJ1xyXG4gIH0sXHJcbiAgcHQ6IHtcclxuICAgIGl0ZW1Ob3RGb3VuZDogJ0l0ZW0gbsOjbyBlbmNvbnRyYWRvLicsXHJcbiAgICBlbXB0eUxhYmVsRXJyb3I6ICdPIGF0cmlidXRvIFBvTWVudUl0ZW0ubGFiZWwgbsOjbyBwb2RlIHNlciB2YXppby4nLFxyXG4gICAgbG9nb21hcmNhSG9tZTogJ0xvZ29tYXJjYSBob21lJ1xyXG4gIH0sXHJcbiAgcnU6IHtcclxuICAgIGl0ZW1Ob3RGb3VuZDogJ9Cf0YDQtdC00LzQtdGCINC90LUg0L3QsNC50LTQtdC9LicsXHJcbiAgICBlbXB0eUxhYmVsRXJyb3I6ICfQkNGC0YDQuNCx0YPRgiBQb01lbnVJdGVtLmxhYmVsINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwuJyxcclxuICAgIGxvZ29tYXJjYUhvbWU6ICfQlNC+0Lwg0JvQvtCz0L7QvNCw0YDQutCwJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfTEVOR0hUOiBudW1iZXIgPSAxMjU7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEVzdGUgw6kgdW0gY29tcG9uZW50ZSBkZSBtZW51IGxhdGVyYWwgcXVlIMOpIHV0aWxpemFkbyBwYXJhIG5hdmVnYcOnw6NvIG5hcyBww6FnaW5hcyBkZSB1bWEgYXBsaWNhw6fDo28uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBwby1tZW51IHJlY2ViZSB1bWEgbGlzdGEgZGUgb2JqZXRvcyBkbyB0aXBvIGBNZW51SXRlbWAgY29tIGFzIGluZm9ybWHDp8O1ZXMgZG9zIGl0ZW5zIGRlIG1lbnUgY29tb1xyXG4gKiB0ZXh0b3MsIGxpbmtzIHBhcmEgcmVkaXJlY2lvbmFtZW50bywgYcOnw7VlcywgYXTDqSA0IG7DrXZlaXMgZGUgbWVudSBlIMOtY29uZXMgcGFyYSBvIHByaW1laXJvIG7DrXZlbCBkZSBtZW51LlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb01lbnVCYXNlQ29tcG9uZW50IHtcclxuICBhbGxvd0ljb25zOiBib29sZWFuO1xyXG4gIGFsbG93Q29sbGFwc2VNZW51OiBib29sZWFuO1xyXG5cclxuICBmaWx0ZXJlZEl0ZW1zO1xyXG4gIGZpbHRlclNlcnZpY2U6IFBvTWVudUZpbHRlcjtcclxuXHJcbiAgcmVhZG9ubHkgbGl0ZXJhbHMgPSB7XHJcbiAgICAuLi5wb01lbnVMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2VEZWZhdWx0KCldLFxyXG4gICAgLi4ucG9NZW51TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKV1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIF9jb2xsYXBzZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9maWx0ZXIgPSBmYWxzZTtcclxuICBwcml2YXRlIF9sZXZlbDtcclxuICBwcml2YXRlIF9sb2dvOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfbG9nb0FsdDogc3RyaW5nID0gdGhpcy5saXRlcmFscy5sb2dvbWFyY2FIb21lO1xyXG4gIHByaXZhdGUgX21heExldmVsID0gNDtcclxuICBwcml2YXRlIF9tZW51cyA9IFtdO1xyXG4gIHByaXZhdGUgX3BhcmFtczogYW55O1xyXG4gIHByaXZhdGUgX3NlcnZpY2U6IHN0cmluZyB8IFBvTWVudUZpbHRlcjtcclxuICBwcml2YXRlIF9zaG9ydExvZ286IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENvbGFwc2EgKHJldHJhaSkgbyBtZW51IGUgY2FzbyByZWNlYmEgbyB2YWxvciBgZmFsc2VgIGV4cGFuZGUgbyBtZW51LlxyXG4gICAqXHJcbiAgICogPiBVdGlsaXplIGVzdGEgcHJvcHJpZWRhZGUgcGFyYSBpbmljaWFyIG8gbWVudSBjb2xhcHNhZG8uXHJcbiAgICpcclxuICAgKiA+IEFvIHV0aWxpemFyIG9zIG3DqXRvZG9zIFtgY29sYXBzZWBdKGRvY3VtZW50YXRpb24vcG8tbWVudSNjb2xhcHNlTWV0aG9kKSwgW2BleHBhbmRgXShkb2N1bWVudGF0aW9uL3BvLW1lbnUjZXhwYW5kTWV0aG9kKSBlXHJcbiAgICogW2B0b2dnbGVgXShkb2N1bWVudGF0aW9uL3BvLW1lbnUjdG9nZ2xlTWV0aG9kKSBvIHZhbG9yIGRlc3RhIHByb3ByaWVkYWRlIG7Do28gw6kgYWx0ZXJhZG8uXHJcbiAgICpcclxuICAgKiAqKkltcG9ydGFudGU6KipcclxuICAgKlxyXG4gICAqID4gTyBtZW51IHNlcsOhIGNvbGFwc2Fkby9leHBhbmRpZG8gYXBlbmFzIHNlIHRvZG9zIG9zIGl0ZW5zIGRlIG1lbnUgdGl2ZXJlbSB2YWxvciBuYXMgcHJvcHJpZWRhZGVzIGBpY29uYCBlIGBzaG9ydExhYmVsYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtY29sbGFwc2VkJykgc2V0IGNvbGxhcHNlZChjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NvbGxhcHNlZCA9IGNvbnZlcnRUb0Jvb2xlYW4oY29sbGFwc2VkKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlQ29sbGFwc2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbGxhcHNlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogTGlzdGEgZG9zIGl0ZW5zIGRvIG1lbnUuIFNlIG8gdmFsb3IgZXN0aXZlciBpbmRlZmluaWRvIG91IGludsOhbGlkbywgc2Vyw6EgaW5pY2lhbGl6YWRvIGNvbW8gdW0gYXJyYXkgdmF6aW8uICovXHJcbiAgQElucHV0KCdwLW1lbnVzJykgc2V0IG1lbnVzKG1lbnVzOiBBcnJheTxQb01lbnVJdGVtPikge1xyXG4gICAgdGhpcy5fbWVudXMgPSBBcnJheS5pc0FycmF5KG1lbnVzKSA/IG1lbnVzIDogW107XHJcblxyXG4gICAgdGhpcy5tZW51R2xvYmFsU2VydmljZS5zZW5kTWVudXMobWVudXMpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB1cmxSb3V0ZXIgPSB0aGlzLmNoZWNraW5nUm91dGVyQ2hpbGRyZW5GcmFnbWVudHMoKTtcclxuICAgICAgdGhpcy5jaGVja0FjdGl2ZU1lbnVCeVVybCh1cmxSb3V0ZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWVudXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWVudXM7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4TGV2ZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4TGV2ZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSGFiaWxpdGEgdW0gY2FtcG8gcGFyYSBwZXNxdWlzYSBubyBtZW51LlxyXG4gICAqIEEgcGVzcXVpc2Egw6kgcmVhbGl6YWRhIGVtIHRvZG9zIG9zIG7DrXZlaXMgZG8gbWVudSBlIGJ1c2NhIGFwZW5hcyBwZWxvcyBpdGVucyBxdWUgY29udMOpbSB1bWEgYcOnw6NvIGUvb3UgbGluayBkZWZpbmlkb3MsXHJcbiAgICogb3UgdGFtYsOpbSwgcG9kZSBzZXIgcmVhbGl6YWRhIGF0cmF2w6lzIGRlIHVtIHNlcnZpw6dvIGRlZmluaWRvIG5hIHByb3ByaWVkYWRlIGBwLXNlcnZpY2VgLlxyXG4gICAqXHJcbiAgICogPiBPIGNhbXBvIGRlIHBlc3F1aXNhIMOpIGRlc2FiaWxpdGFkbyBzZSBvIG1lbnUgZXN0aXZlciBjb2xhcHNhZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWZpbHRlcicpIHNldCBmaWx0ZXIoZmlsdGVyOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9maWx0ZXIgPSA8YW55PmZpbHRlciA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbihmaWx0ZXIpO1xyXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX21lbnVzXTtcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE5lc3RhIHByb3ByaWVkYWRlIGRldmUgc2VyIGluZm9ybWFkYSBhIFVSTCBkbyBzZXJ2acOnbyBlbSBxdWUgc2Vyw6EgdXRpbGl6YWRvIHBhcmEgcmVhbGl6YXIgbyBmaWx0cm8gZGUgaXRlbnMgZG9cclxuICAgKiBtZW51IHF1YW5kbyByZWFsaXphciB1bWEgYnVzY2EuIENhc28gaGFqYSBhIG5lY2Vzc2lkYWRlIGRlIGN1c3RvbWl6YcOnw6NvLCBwb2RlIHNlciBpbmZvcm1hZG8gdW1cclxuICAgKiBzZXJ2acOnbyBpbXBsZW1lbnRhbmRvIGEgaW50ZXJmYWNlIGBQb01lbnVGaWx0ZXJgLlxyXG4gICAqXHJcbiAgICogQ2FzbyB1dGlsaXphZGEgdW1hIFVSTCwgbyBzZXJ2acOnbyBkZXZlIHJldG9ybmFyIG9zIGRhZG9zIGNvbmZvcm1lIG9cclxuICAgKiBbR3VpYSBkZSBpbXBsZW1lbnRhw6fDo28gZGUgQVBJc10oaHR0cHM6Ly9wby11aS5pby9ndWlkZXMvYXBpKSBkbyBQTyBVSS5cclxuICAgKlxyXG4gICAqIFF1YW5kbyB1dGlsaXphZGEgdW1hIFVSTCBkZSBzZXJ2acOnbywgc2Vyw6EgcmVhbGl6YWRvIHVtICpHRVQqIG5hIFVSTCBpbmZvcm1hZGEsIHBhc3NhbmRvIG8gdmFsb3IgZGlnaXRhZG9cclxuICAgKiBubyBwYXLDom1ldHJvIGBzZWFyY2hgLCB2ZWphIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiA+IE8gZmlsdHJvIG5vIHNlcnZpw6dvIHNlcsOhIHJlYWxpemFkbyBjYXNvIGNvbnRlbmhhIG5vIG3DrW5pbW8gdHLDqnMgY2FyYWN0ZXJlcyBubyBjYW1wbyBkZSBidXNjYSwgcG9yIGV4ZW1wbG8gYHRvdGAuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tbWVudSBwLXNlcnZpY2U9XCIvYXBpL3YxL2ZuZC9tZW51XCI+XHJcbiAgICogPC9wby1tZW51PlxyXG4gICAqXHJcbiAgICogUmVxdWlzacOnw6NvOiBHRVQgL2FwaS92MS9mbmQvbWVudT9zZWFyY2g9Y29udGFzXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IMOJIG5lY2Vzc8OhcmlvIHF1ZSBwcm9wcmllZGFkZSBgcC1maWx0ZXJgIGVzdGVqYSBoYWJpbGl0YWRhLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zZXJ2aWNlJykgc2V0IHNlcnZpY2UodmFsdWU6IHN0cmluZyB8IFBvTWVudUZpbHRlcikge1xyXG4gICAgdGhpcy5fc2VydmljZSA9IHZhbHVlIHx8IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UodGhpcy5zZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIGdldCBzZXJ2aWNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGV2ZSBzZXIgaW5mb3JtYWRvIHVtIG9iamV0byBxdWUgZGVzZWphLXNlIHV0aWxpemFyIG5hIHJlcXVpc2nDp8OjbyBkZSBmaWx0cm8gZG9zIGl0ZW5zIGRlIG1lbnUuXHJcbiAgICpcclxuICAgKiBDYXNvIHV0aWxpemFkbyB1bSBzZXJ2acOnbyBjdXN0b21pemFkbywgaW1wbGVtZW50YW5kbyBhIGludGVyZmFjZSBgUG9NZW51RmlsdGVyYCwgbyB2YWxvciBkZXN0YSBwcm9wcmllZGFkZVxyXG4gICAqIHNlcsOhIHBhc3NhZG8gY29tbyBwYXLDom1ldHJvLCBuYSBmdW7Dp8OjbyBgZ2V0RmlsdGVyZWREYXRhYC5cclxuICAgKlxyXG4gICAqIFF1YW5kbyB1dGlsaXphZGEgdW1hIFVSTCBkZSBzZXJ2acOnbywgc2Vyw6EgcmVhbGl6YWRvIHVtICpHRVQqIG5hIFVSTCBpbmZvcm1hZGEsIHBhc3NhbmRvIG9zIHZhbG9yZXMgaW5mb3JtYWRvc1xyXG4gICAqIG5lc3RhIHByb3ByaWVkYWRlIGVtIGNvbmp1bnRvIGNvbSBvIHBhcsOibWV0cm8gYHNlYXJjaGAsIHZlamEgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1tZW51IHAtc2VydmljZT1cIi9hcGkvdjEvZm5kL21lbnVcIiBbcC1wYXJhbXNdPVwieyBjb21wYW55OiAxLCB1c2VyOiAyOTc3Njc1MTIgfVwiPlxyXG4gICAqIDwvcG8tbWVudT5cclxuICAgKlxyXG4gICAqIFJlcXVpc2nDp8OjbzogR0VUIC9hcGkvdjEvZm5kL21lbnU/c2VhcmNoPWNvbnRhcyZjb21wYW55PTEmdXNlcj0yOTc3Njc1MTJcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcGFyYW1zJykgc2V0IHBhcmFtcyh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9wYXJhbXMgPSB2YWx1ZSAmJiBpc1R5cGVvZih2YWx1ZSwgJ29iamVjdCcpID8gdmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFyYW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBDYW1pbmhvIHBhcmEgYSBsb2dvbWFyY2EsIHF1ZSBzZXLDoSBleGliaWRhIHF1YW5kbyBvIGNvbXBvbmVudGUgZXN0aXZlciBleHBhbmRpZG8sIGxvY2FsaXphZGEgbmEgcGFydGUgc3VwZXJpb3IuXHJcbiAgICpcclxuICAgKiA+ICoqSW1wb3J0YW50ZToqKlxyXG4gICAqIC0gQ2FzbyBlc3RhIHByb3ByaWVkYWRlIGVzdGl2ZXIgaW5kZWZpbmlkYSBvdSBpbnbDoWxpZGEgbyBlc3Bhw6dvIHBhcmEgbG9nb21hcmNhIHNlcsOhIHJlbW92aWRvLlxyXG4gICAqIC0gQ29tbyBib2EgcHLDoXRpY2EsIGluZGljYS1zZSB1dGlsaXphciBpbWFnZW5zIGNvbSBhdMOpIGAyNHB4YCBkZSBhbHR1cmEgZSBgMjI0cHhgIGRlIGxhcmd1cmEsXHJcbiAgICogY2FzbyB1bHRyYXBhc3NhciBlc3NlcyB2YWxvcmVzIGEgaW1hZ2VtIHNlcsOhIHJlYWRlcXVhZGEgbm8gZXNwYcOnbyBkaXNwb27DrXZlbC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9nbycpIHNldCBsb2dvKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2xvZ28gPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpICYmIHZhbHVlLnRyaW0oKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvZ28oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9nbztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBUZXh0byBhbHRlcm5hdGl2byBwYXJhIG8gbG9nby5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBlc3RhIHByb3ByaWVkYWRlIHNlamEgaW5kZWZpbmlkYSBvdSBpbnbDoWxpZGEgbyB0ZXh0byBwYWRyw6NvIHNlcsOhIFwiTG9nb21hcmNhIGhvbWVcIi5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9nby1hbHQnKSBzZXQgbG9nb0FsdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhbHQgPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpICYmIHZhbHVlLnRyaW0oKSA/IHRoaXMubWF4TGVuZ3RoKHZhbHVlKSA6IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX2xvZ29BbHQgPSBhbHQgPz8gdGhpcy5fbG9nb0FsdDtcclxuICB9XHJcblxyXG4gIGdldCBsb2dvQWx0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvZ29BbHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQ2FtaW5obyBwYXJhIGEgbG9nb21hcmNhLCBxdWUgc2Vyw6EgZXhpYmlkYSBxdWFuZG8gbyBjb21wb25lbnRlIGVzdGl2ZXIgY29sYXBzYWRvLCBsb2NhbGl6YWRhIG5hIHBhcnRlIHN1cGVyaW9yLlxyXG4gICAqXHJcbiAgICogPiAqKkltcG9ydGFudGU6KipcclxuICAgKiAtIENhc28gZXN0YSBwcm9wcmllZGFkZSBlc3RpdmVyIGluZGVmaW5pZGEgb3UgaW52w6FsaWRhIHBhc3NhIGEgYXNzdW1pciBvIHZhbG9yIGluZm9ybWFkbyBuYSBwcm9wcmllZGFkZSBgcC1sb2dvYCBlIG5hIGF1c8OqbmNpYSBkZXN0YSBvXHJcbiAgICogZXNwYcOnbyBwYXJhIGxvZ29tYXJjYSBzZXLDoSByZW1vdmlkby5cclxuICAgKiAtIENvbW8gYm9hIHByw6F0aWNhLCBpbmRpY2Etc2UgdXRpbGl6YXIgaW1hZ2VucyBjb20gYXTDqSBgNDhweGAgZGUgYWx0dXJhIGUgYDQ4cHhgIGRlIGxhcmd1cmEsXHJcbiAgICogY2FzbyB1bHRyYXBhc3NhciBlc3NlcyB2YWxvcmVzIGEgaW1hZ2VtIHNlcsOhIHJlYWRlcXVhZGEgbm8gZXNwYcOnbyBkaXNwb27DrXZlbC5cclxuICAgKiAtIENhc28gbsOjbyBpbmZvcm1hciB1bSB2YWxvciwgZXN0YSBwcm9wcmllZGFkZSBwYXNzYSBhIGFzc3VtaXIgbyB2YWxvciBpbmZvcm1hZG8gbmEgcHJvcHJpZWRhZGUgYHAtbG9nb2AuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNob3J0LWxvZ28nKSBzZXQgc2hvcnRMb2dvKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3Nob3J0TG9nbyA9IGlzVHlwZW9mKHZhbHVlLCAnc3RyaW5nJykgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvcnRMb2dvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0TG9nbztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG1lbnVHbG9iYWxTZXJ2aWNlOiBQb01lbnVHbG9iYWxTZXJ2aWNlLFxyXG4gICAgcHVibGljIG1lbnVTZXJ2aWNlOiBQb01lbnVTZXJ2aWNlLFxyXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRNZW51RXh0cmFQcm9wZXJ0aWVzKCkge1xyXG4gICAgdGhpcy5hbGxvd0ljb25zID0gISF0aGlzLm1lbnVzLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsb3dDb2xsYXBzZU1lbnUgPSAhIXRoaXMubWVudXMubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMubWVudXMuZm9yRWFjaChtZW51SXRlbSA9PiB7XHJcbiAgICAgIHRoaXMuX2xldmVsID0gMTtcclxuICAgICAgdGhpcy5hbGxvd0ljb25zID0gdGhpcy5hbGxvd0ljb25zID8gdmFsaWRWYWx1ZShtZW51SXRlbS5pY29uKSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmFsbG93Q29sbGFwc2VNZW51ID0gdGhpcy5hbGxvd0NvbGxhcHNlTWVudSAmJiB0aGlzLmFsbG93SWNvbnMgPyB2YWxpZFZhbHVlKG1lbnVJdGVtLnNob3J0TGFiZWwpIDogZmFsc2U7XHJcbiAgICAgIHRoaXMucmVtb3ZlQmFkZ2VBbGVydChtZW51SXRlbSk7XHJcbiAgICAgIHRoaXMuc2V0TWVudUl0ZW1Qcm9wZXJ0aWVzKG1lbnVJdGVtKTtcclxuXHJcbiAgICAgIGlmIChtZW51SXRlbS5zdWJJdGVtcykge1xyXG4gICAgICAgIHRoaXMuX2xldmVsKys7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU3ViSXRlbXMobWVudUl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRNZW51SXRlbVByb3BlcnRpZXMobWVudUl0ZW06IFBvTWVudUl0ZW0pOiB2b2lkIHtcclxuICAgIG1lbnVJdGVtWydpZCddID0gbWVudUl0ZW1bJ2lkJ10gfHwgdXVpZCgpO1xyXG4gICAgbWVudUl0ZW1bJ2xldmVsJ10gPSB0aGlzLl9sZXZlbDtcclxuICAgIG1lbnVJdGVtWyd0eXBlJ10gPSB0aGlzLnNldE1lbnVUeXBlKG1lbnVJdGVtKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZU1lbnVzKG1lbnVzKTogdm9pZCB7XHJcbiAgICBtZW51cy5mb3JFYWNoKG1lbnUgPT4gdGhpcy52YWxpZGF0ZU1lbnUobWVudSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldE1lbnVUeXBlKG1lbnVJdGVtOiBQb01lbnVJdGVtKTogc3RyaW5nIHtcclxuICAgIGlmIChtZW51SXRlbS5zdWJJdGVtcyAmJiBtZW51SXRlbS5zdWJJdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuX2xldmVsIDwgdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICByZXR1cm4gJ3N1Ykl0ZW1zJztcclxuICAgIH1cclxuICAgIGlmICghbWVudUl0ZW0ubGluaykge1xyXG4gICAgICByZXR1cm4gJ25vTGluayc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNFeHRlcm5hbExpbmsobWVudUl0ZW0ubGluaykpIHtcclxuICAgICAgcmV0dXJuICdleHRlcm5hbExpbmsnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdpbnRlcm5hbExpbmsnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlKHNlcnZpY2U6IHN0cmluZyB8IFBvTWVudUZpbHRlcikge1xyXG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlID09PSAnc3RyaW5nJyAmJiBzZXJ2aWNlLnRyaW0oKSkge1xyXG4gICAgICAvLyBzZXJ2aWNlIHVybFxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmNvbmZpZ1Byb3BlcnRpZXMoc2VydmljZSk7XHJcbiAgICAgIHRoaXMuZmlsdGVyU2VydmljZSA9IHRoaXMubWVudVNlcnZpY2U7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXJ2aWNlID09PSAnb2JqZWN0JyAmJiBzZXJ2aWNlLmdldEZpbHRlcmVkRGF0YSkge1xyXG4gICAgICAvLyBjdXN0b20gc2VydmljZVxyXG4gICAgICB0aGlzLmZpbHRlclNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maWx0ZXJTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3ViSXRlbXMobWVudSkge1xyXG4gICAgbWVudS5zdWJJdGVtcy5mb3JFYWNoKChtZW51SXRlbSwgaW5kZXgsIG1lbnVJdGVtcykgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2aW91c0l0ZW0gPSBtZW51SXRlbXNbaW5kZXggLSAxXTtcclxuICAgICAgaWYgKHByZXZpb3VzSXRlbSAmJiBwcmV2aW91c0l0ZW0uc3ViSXRlbXMpIHtcclxuICAgICAgICB0aGlzLl9sZXZlbCA9IHByZXZpb3VzSXRlbVsnbGV2ZWwnXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2xldmVsIDw9IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgICB0aGlzLnNldE1lbnVJdGVtUHJvcGVydGllcyhtZW51SXRlbSk7XHJcblxyXG4gICAgICAgIGlmIChtZW51SXRlbS5zdWJJdGVtcykge1xyXG4gICAgICAgICAgdGhpcy5fbGV2ZWwrKztcclxuICAgICAgICAgIHRoaXMucHJvY2Vzc1N1Ykl0ZW1zKG1lbnVJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghbWVudVsnYmFkZ2VBbGVydCddKSB7XHJcbiAgICAgICAgbWVudSA9IHRoaXMuc2V0TWVudUJhZGdlQWxlcnQobWVudSwgbWVudUl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51LnN1Ykl0ZW1zID0gT2JqZWN0LmFzc2lnbihbXSwgbWVudS5zdWJJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUJhZGdlQWxlcnQobWVudUl0ZW06IFBvTWVudUl0ZW0pOiB2b2lkIHtcclxuICAgIGlmIChtZW51SXRlbVsnYmFkZ2VBbGVydCddKSB7XHJcbiAgICAgIGRlbGV0ZSBtZW51SXRlbVsnYmFkZ2VBbGVydCddO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZW51SXRlbS5zdWJJdGVtcykge1xyXG4gICAgICBtZW51SXRlbS5zdWJJdGVtcy5mb3JFYWNoKHN1Ykl0ZW0gPT4gdGhpcy5yZW1vdmVCYWRnZUFsZXJ0KHN1Ykl0ZW0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWVudUJhZGdlQWxlcnQocGFyZW50OiBQb01lbnVJdGVtLCBjaGlsZDogUG9NZW51SXRlbSk6IFBvTWVudUl0ZW0ge1xyXG4gICAgY29uc3QgY2hpbGRIYXNTdWJJdGVtcyA9IGNoaWxkLnN1Ykl0ZW1zICYmIGNoaWxkLnN1Ykl0ZW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGNoaWxkSGFzQmFkZ2VBbGVydCA9IGNoaWxkWydiYWRnZUFsZXJ0J107XHJcbiAgICBjb25zdCBjaGlsZEhhc0JhZGdlID0gY2hpbGQuYmFkZ2UgJiYgY29udmVydFRvSW50KGNoaWxkLmJhZGdlLnZhbHVlKSA+PSAwO1xyXG5cclxuICAgIHBhcmVudFsnYmFkZ2VBbGVydCddID0gY2hpbGRIYXNCYWRnZUFsZXJ0IHx8IChjaGlsZEhhc0JhZGdlICYmICFjaGlsZEhhc1N1Ykl0ZW1zKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1lbnUobWVudUl0ZW06IFBvTWVudUl0ZW0pOiB2b2lkIHtcclxuICAgIGlmICghbWVudUl0ZW0ubGFiZWwgfHwgbWVudUl0ZW0ubGFiZWwudHJpbSgpID09PSAnJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5saXRlcmFscy5lbXB0eUxhYmVsRXJyb3IpO1xyXG4gICAgfSBlbHNlIGlmIChtZW51SXRlbS5zdWJJdGVtcykge1xyXG4gICAgICBtZW51SXRlbS5zdWJJdGVtcy5mb3JFYWNoKHN1Ykl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVNZW51KHN1Ykl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWF4TGVuZ3RoKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBNQVhfTEVOR0hUID8gdmFsdWUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgTUFYX0xFTkdIVCkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjaGVja0FjdGl2ZU1lbnVCeVVybCh1cmxSb3V0ZXIpO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjaGVja2luZ1JvdXRlckNoaWxkcmVuRnJhZ21lbnRzKCk7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHZhbGlkYXRlQ29sbGFwc2VDbGFzcygpO1xyXG59XHJcbiJdfQ==