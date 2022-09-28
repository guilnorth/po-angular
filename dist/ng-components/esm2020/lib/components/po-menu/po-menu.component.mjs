import { Component, ContentChild } from '@angular/core';
import { NavigationCancel, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { getFormattedLink, isMobile, openExternalLink, uuid } from '../../utils/util';
import { PoMenuBaseComponent } from './po-menu-base.component';
import { PoMenuHeaderTemplateDirective } from './po-menu-header-template/po-menu-header-template.directive';
import { PoMenuItemsService } from './services/po-menu-items.service';
import { PoMenuService } from './services/po-menu.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./services/po-menu-items.service";
import * as i3 from "./services/po-menu-global.service";
import * as i4 from "./services/po-menu.service";
import * as i5 from "../../services/po-language/po-language.service";
import * as i6 from "@angular/common";
import * as i7 from "../po-icon/po-icon.component";
import * as i8 from "./po-menu-filter/po-menu-filter.component";
import * as i9 from "./po-menu-item/po-menu-item.component";
function PoMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function PoMenuComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.toggleMenuMobile()); });
    i0.ɵɵelementEnd();
} }
function PoMenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "a", 16);
    i0.ɵɵelement(2, "img", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.enableCollapse ? "po-menu-short-logo" : "po-menu-logo")("src", ctx_r1.enableCollapse ? ctx_r1.shortLogo || ctx_r1.logo : ctx_r1.logo, i0.ɵɵsanitizeUrl)("alt", ctx_r1.logoAlt);
} }
function PoMenuComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, PoMenuComponent_div_7_ng_container_1_Template, 1, 0, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.menuHeaderTemplate.templateRef);
} }
function PoMenuComponent_po_menu_filter_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-menu-filter", 20);
    i0.ɵɵlistener("p-filter", function PoMenuComponent_po_menu_filter_8_Template_po_menu_filter_p_filter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.debounceFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-loading", ctx_r3.filterLoading);
} }
function PoMenuComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    i0.ɵɵelement(3, "po-icon", 24);
    i0.ɵɵelementStart(4, "div", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.literals.itemNotFound);
} }
function PoMenuComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "po-menu-item", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r12 = ctx.$implicit;
    const menuIndex_r13 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-menu-item-first", menuIndex_r13 === 0);
    i0.ɵɵproperty("p-action", menu_r12.action)("p-badge-alert", menu_r12.badgeAlert)("p-badge-color", menu_r12.badge ? menu_r12.badge.color : undefined)("p-badge-value", menu_r12.badge ? menu_r12.badge.value : undefined)("p-collapsed-menu", ctx_r5.enableCollapse)("p-icon", ctx_r5.allowIcons ? menu_r12.icon : null)("p-id", menu_r12.id)("p-label", menu_r12.label)("p-level", menu_r12.level)("p-link", menu_r12.link)("p-short-label", menu_r12.shortLabel)("p-sub-items", menu_r12.subItems)("p-type", menu_r12.type);
} }
function PoMenuComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "a", 28);
    i0.ɵɵlistener("click", function PoMenuComponent_div_14_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.toggle()); });
    i0.ɵɵelement(2, "span", 29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("po-icon-menu-close", ctx_r6.enableCollapseButton)("po-icon-menu-open", ctx_r6.enableCollapse);
} }
const _c0 = function (a0) { return { "po-menu-animation": a0 }; };
const poMenuDebounceTime = 400;
const poMenuMinLength = 3;
const poMenuRootLevel = 1;
/**
 * @docsExtends PoMenuBaseComponent
 *
 * @description
 *
 * Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.
 *
 * O menu também pode ser colapsado. Essa opção é habilitada quando todos os itens de primeiro nível possuírem ícones e textos curtos.
 * Se colapsado, somente os itens de primeiro nível serão exibidos e, caso o item selecionado possua sub-níveis,
 * então o menu alternará novamente para o estado aberto.
 *
 * Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.
 *
 * E para adicionar um conteúdo personalizado entre a logomarca e o campo de filtro,
 * basta adicionar este conteúdo com a diretiva [**p-menu-header-template**](/documentation/po-menu-header-template).
 *
 * Caso utilizar o filtro de menus, é possível realizar buscas em serviço, apenas informando a URL do serviço ou a instância de
 * um serviço customizado implementando a interface `PoMenuFilter`.
 *
 * Para o menu funcionar corretamente é necessário importar o `RouterModule` e `Routes` do módulo principal de
 *  sua aplicação:
 *
 * ````
 * import { RouterModule, Routes } from '@angular/router';
 *
 * ...
 *
 * @NgModule({
 *   imports: [
 *     RouterModule,
 *     Routes,
 *     ...
 *     PoModule,
 *     ...
 *   ],
 *   declarations: [
 *     AppComponent
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 *
 * Além disso é necessário criar um módulo configurando as rotas da aplicação.
 *
 * ```
 * import { NgModule } from '@angular/core';
 *
 * import { RouterModule, Routes } from '@angular/router';
 *
 * import { HelloWorldComponent } from './hello-world/hello-world.component';
 *
 * const routes: Routes = [
 *   {path: 'hello-world', component: HelloWorldComponent}
 * ];
 *
 * @NgModule({
 *   imports: [RouterModule.forRoot(routes, {useHash: true})],
 *   exports: [RouterModule]
 * })
 * export class AppRoutingModule {}
 * ```
 *
 * @example
 *
 * <example name="po-menu-basic" title="PO Menu Basic">
 *   <file name="sample-po-menu-basic/sample-po-menu-basic.component.html"> </file>
 *   <file name="sample-po-menu-basic/sample-po-menu-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-menu-labs" title="PO Menu Labs">
 *   <file name="sample-po-menu-labs/sample-po-menu-labs.component.html"> </file>
 *   <file name="sample-po-menu-labs/sample-po-menu-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-menu-human-resources" title="PO Menu - Human Resources">
 *   <file name="sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"> </file>
 *   <file name="sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"> </file>
 *   <file name="sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"> </file>
 * </example>
 */
export class PoMenuComponent extends PoMenuBaseComponent {
    constructor(changeDetector, element, renderer, router, menuItemsService, menuGlobalService, menuService, languageService) {
        super(menuGlobalService, menuService, languageService);
        this.changeDetector = changeDetector;
        this.element = element;
        this.renderer = renderer;
        this.router = router;
        this.menuItemsService = menuItemsService;
        this.filterLoading = false;
        this.id = uuid();
        this.mobileOpened = false;
        this.noData = false;
        this.filteringItems = false;
        this.menuInitialized = false;
        this.menuPrevious = null;
    }
    get isActiveItemMenuSubMenu() {
        return this.activeMenuItem['level'] > this.groupedMenuItem['level'];
    }
    get enableCollapse() {
        return this.isCollapsed && !this.collapsedMobile;
    }
    get enableCollapseButton() {
        return this.allowCollapseMenu && !this.collapsed && !this.mobileOpened;
    }
    get hasFooter() {
        return this.enableCollapseButton || this.enableCollapse;
    }
    get isCollapsed() {
        return this.allowCollapseMenu && this.collapsed;
    }
    ngDoCheck() {
        if (this.filteringItems && this.filter) {
            return;
        }
        const menuCurrent = this.stringify(this.menus);
        if (this.menuPrevious !== menuCurrent || !this.menuInitialized) {
            this.updateMenu();
            this.validateCollapseClass();
        }
    }
    ngOnDestroy() {
        this.itemSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
        if (this.resizeListener) {
            this.resizeListener();
        }
        this.menuGlobalService.sendRemovedApplicationMenu(this.id);
    }
    ngOnInit() {
        this.subscribeToMenuItem();
        this.subscribeToRoute();
    }
    ngAfterViewInit() {
        this.menuGlobalService.sendApplicationMenu(this);
    }
    activateMenuByUrl(urlPath, menus) {
        if (menus) {
            const urlPathWithoutLastFragment = urlPath.substr(0, urlPath.lastIndexOf('/'));
            return menus.some(menu => {
                const formattedMenuLink = getFormattedLink(menu.link);
                const menuLinkPath = `${urlPathWithoutLastFragment}${formattedMenuLink.substr(formattedMenuLink.lastIndexOf('/'))}`;
                if (menuLinkPath === urlPath && menuLinkPath === formattedMenuLink) {
                    this.linkActive = formattedMenuLink;
                    this.activateMenuItem(menu);
                    return true;
                }
                else {
                    return this.activateMenuByUrl(urlPath, menu.subItems);
                }
            });
        }
    }
    checkActiveMenuByUrl(urlPath) {
        if (!this.linkActive || this.linkActive !== urlPath) {
            this.activateMenuByUrl(urlPath, this.menus);
        }
    }
    /**
     * <a id="colapseMethod"></a>
     *
     * *Método para colapsar (retrair) o menu.
     */
    collapse() {
        this.validateToggleMenu(true);
    }
    debounceFilter(filter) {
        clearTimeout(this.timeoutFilter);
        this.timeoutFilter = setTimeout(() => {
            this.filterProcess(filter);
        }, poMenuDebounceTime);
    }
    /**
     * <a id="expandMethod"></a>
     *
     * *Método para expandir (aumentar) o menu.
     */
    expand() {
        this.validateToggleMenu(false);
    }
    subscribeToMenuItem() {
        this.itemSubscription = this.menuItemsService.receiveFromChildMenuClicked().subscribe((menu) => {
            this.clickMenuItem(menu);
        });
    }
    subscribeToRoute() {
        this.routeSubscription = this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd || val instanceof NavigationCancel) {
                const urlRouter = this.checkingRouterChildrenFragments();
                this.checkActiveMenuByUrl(urlRouter);
            }
        });
    }
    /**
     * <a id="toggleMethod"></a>
     * *Método que colapsa e expande o menu alternadamente.
     *
     * > *Os métodos apenas vão colapsar/expandir o menu se:
     *  - Todos os itens de menu tiverem valor nas propriedades `icon` e `shortLabel`.
     */
    toggle() {
        this.validateToggleMenu(!this.collapsed);
    }
    toggleMenuMobile() {
        this.mobileOpened = !this.mobileOpened;
        this.collapsedMobile = this.collapsed && this.mobileOpened;
        this.validateCollapseClass(this.collapsedMobile);
        if (isMobile()) {
            return;
        }
        if (this.mobileOpened) {
            this.createResizeListener();
        }
    }
    checkingRouterChildrenFragments() {
        const childrenPrimary = this.router.parseUrl(this.router.url).root.children['primary'];
        return childrenPrimary ? `/${childrenPrimary.segments.map(it => it.path).join('/')}` : '';
    }
    validateCollapseClass(collapsedMobile = false) {
        const wrapper = this.element.nativeElement.parentNode;
        this.renderer[this.isCollapsed && !collapsedMobile ? 'addClass' : 'removeClass'](wrapper, 'po-collapsed-menu');
    }
    activateCollapseSubMenuItem() {
        this.clearGroupMenuIfFirstLevel(this.activeMenuItem);
        if (!this.collapsed && this.activeMenuItem['level'] > poMenuRootLevel && this.isActiveItemMenuSubMenu) {
            this.openParentMenu(this.activeMenuItem);
        }
    }
    activateMenuItem(menu) {
        this.activeMenuItem = menu;
        this.linkActive = menu.link;
        if (this.activeMenuItem['level'] > poMenuRootLevel) {
            this.openParentMenu(this.activeMenuItem);
        }
        else {
            this.groupedMenuItem = null;
        }
        this.menuItemsService.sendToChildMenuClicked({
            active: this.activeMenuItem,
            grouped: this.groupedMenuItem,
            activatedByRoute: true
        });
    }
    areSubMenus(menus) {
        return menus.every(menu => menu['level'] > poMenuRootLevel);
    }
    clearGroupMenuIfFirstLevel(activeMenuItem) {
        if (activeMenuItem['level'] === poMenuRootLevel) {
            this.groupedMenuItem = undefined;
        }
    }
    clickMenuItem(menu) {
        if (menu.action) {
            this.executeMenuAction(menu);
        }
        if (menu['type'] === 'externalLink') {
            openExternalLink(menu.link);
        }
        else if (menu['type'] === 'internalLink') {
            this.activateMenuItem(menu);
        }
        else if (menu['type'] === 'subItems') {
            if (this.filteringItems) {
                this.filteringItems = false;
            }
            this.groupMenuItem(menu);
        }
        if (menu['type'] !== 'subItems') {
            this.mobileOpened = false;
        }
    }
    convertToMenuItemFiltered(menuItem = { label: '', link: '' }) {
        const { label, link } = menuItem;
        const menuItemFiltered = { label, link };
        this.setMenuItemProperties(menuItemFiltered);
        return menuItemFiltered;
    }
    createResizeListener() {
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            this.toggleResize();
            this.resizeListener();
        });
    }
    executeMenuAction(menu) {
        menu.action(menu);
    }
    async filterItems(filter) {
        const trimFilter = filter && filter.trim();
        if (trimFilter) {
            this.filteredItems = [];
            this.filteredItems = this.filterService
                ? await this.filterOnService(trimFilter)
                : this.filterLocalItems(trimFilter);
            this.filteringItems = true;
        }
        else {
            this.filteredItems = [...this.menus];
            this.filteringItems = false;
        }
    }
    filterLocalItems(filter) {
        const filteredItems = [];
        this.findItems(this.menus, filter.toLowerCase(), filteredItems);
        return filteredItems;
    }
    filterProcess(filter) {
        this.filterLoading = true;
        this.filterItems(filter)
            .then(() => {
            this.filterLoading = false;
            this.showNoData();
            this.changeDetector.detectChanges();
            this.menuItemsService.sendToChildMenuClicked({ active: this.activeMenuItem, grouped: this.groupedMenuItem });
        })
            .catch(error => {
            this.filterLoading = false;
            Promise.reject(error);
        });
    }
    async filterOnService(search = '') {
        if (search.length >= poMenuMinLength) {
            return await this.filterService
                .getFilteredData(search, this.params)
                .pipe(map(menuItemsFiltered => menuItemsFiltered.map(menuItem => this.convertToMenuItemFiltered(menuItem))))
                .toPromise();
        }
        else {
            return this.filteredItems;
        }
    }
    findItems(menus, filter, filteredItems) {
        menus.forEach(menu => {
            const hasAction = menu.action || menu.link;
            const labelHasFilter = menu.label.toLowerCase().includes(filter);
            if (labelHasFilter && hasAction) {
                const newMenu = { ...menu };
                if (newMenu.subItems?.length) {
                    delete newMenu.subItems;
                    newMenu['type'] = this.setMenuType(newMenu);
                }
                filteredItems.push(newMenu);
            }
            if (menu.subItems) {
                this.findItems(menu.subItems, filter, filteredItems);
            }
        });
    }
    findParent(menus, menuItem) {
        const getParent = function (menuItems, id) {
            if (menuItems) {
                for (let index = 0; index < menuItems.length; index++) {
                    const menu = menuItems[index];
                    if (menu.subItems && menu.subItems.find(subItem => subItem['id'] === id)) {
                        return menu;
                    }
                    const found = getParent(menu.subItems, id);
                    if (found) {
                        return found;
                    }
                }
            }
        };
        return getParent(menus, menuItem['id']);
    }
    findRootParent(menus, menu) {
        const findParent = this.findParent;
        const getRootParent = function (menuItems, menuItem) {
            let parent = findParent(menuItems, menuItem);
            if (parent['level'] !== poMenuRootLevel) {
                parent = getRootParent(menuItems, parent);
            }
            return parent;
        };
        return getRootParent(menus, menu);
    }
    getActiveMenuParent(menus, activeMenuItem, groupedMenuItem) {
        if (this.areSubMenus([groupedMenuItem, activeMenuItem])) {
            return this.findRootParent(menus, activeMenuItem);
        }
    }
    groupMenuItem(menu) {
        if (this.collapsed) {
            this.toggleMenuCollapse();
        }
        menu['isOpened'] = !menu['isOpened'];
        this.groupedMenuItem = menu;
        if (this.activeMenuItem &&
            menu['isOpened'] &&
            this.isActiveItemMenuSubMenu &&
            this.isRootMenuEqualGroupedMenu(this.menus, this.activeMenuItem, menu)) {
            this.activateMenuItem(this.activeMenuItem);
        }
        this.menuItemsService.sendToChildMenuClicked({ active: this.activeMenuItem, grouped: this.groupedMenuItem });
    }
    isRootMenuEqualGroupedMenu(menus, activeMenuItem, groupedMenuItem) {
        const activeMenuRootParent = this.findRootParent(menus, activeMenuItem);
        return activeMenuRootParent['id'] === groupedMenuItem['id'];
    }
    openParentMenu(childMenu) {
        const parent = this.findParent(this.menus, childMenu);
        parent['isOpened'] = true;
        this.groupedMenuItem = parent;
    }
    showNoData() {
        this.noData = this.filteredItems.length === 0;
    }
    stringify(menus) {
        // não faz o stringify da propriedade icon, pois pode conter objeto complexo e disparar um erro.
        return JSON.stringify(this.menus, (key, value) => {
            if (key !== 'icon') {
                return value;
            }
        });
    }
    toggleGroupedMenuItem() {
        this.groupedMenuItem['isOpened'] = !this.collapsed && this.allowCollapseMenu;
    }
    toggleMenuCollapse(collapsed = false) {
        this.collapsed = collapsed;
        if (this.groupedMenuItem && this.activeMenuItem) {
            this.groupedMenuItem =
                this.getActiveMenuParent(this.menus, this.activeMenuItem, this.groupedMenuItem) || this.groupedMenuItem;
            this.toggleGroupedMenuItem();
        }
        if (this.activeMenuItem) {
            this.activateCollapseSubMenuItem();
            this.menuItemsService.sendToChildMenuClicked({
                active: this.activeMenuItem,
                grouped: this.groupedMenuItem,
                activatedByRoute: true
            });
        }
        this.updateMenu();
    }
    toggleResize() {
        if (this.mobileOpened) {
            this.mobileOpened = false;
            this.collapsedMobile = false;
            this.validateCollapseClass(this.collapsedMobile);
        }
    }
    validateToggleMenu(collapsed) {
        if (!this.allowCollapseMenu) {
            return;
        }
        this.toggleMenuCollapse(collapsed);
    }
    updateMenu() {
        this.menuInitialized = true;
        this.setMenuExtraProperties();
        this.filteredItems = [...this.menus];
        this.menuPrevious = this.stringify(this.menus);
        this.validateMenus(this.menus);
    }
}
PoMenuComponent.ɵfac = function PoMenuComponent_Factory(t) { return new (t || PoMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.PoMenuItemsService), i0.ɵɵdirectiveInject(i3.PoMenuGlobalService), i0.ɵɵdirectiveInject(i4.PoMenuService), i0.ɵɵdirectiveInject(i5.PoLanguageService)); };
PoMenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMenuComponent, selectors: [["po-menu"]], contentQueries: function PoMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoMenuHeaderTemplateDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuHeaderTemplate = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([PoMenuItemsService, PoMenuService]), i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 10, consts: [["class", "po-menu-overlay", 3, "click", 4, "ngIf"], [1, "po-menu-mobile", "po-clickable", 3, "click"], [1, "po-icon", "po-icon-menu"], [1, "po-menu", 3, "ngClass"], [1, "po-menu-header"], ["class", "po-menu-header-container-logo", 4, "ngIf"], ["class", "po-menu-header-template", 4, "ngIf"], [3, "p-loading", "p-filter", 4, "ngIf"], [1, "po-menu-body"], [1, "po-menu-outer"], [1, "po-menu-inner"], ["class", "po-menu-item-wrapper", 4, "ngIf"], ["class", "po-menu-item-wrapper", 4, "ngFor", "ngForOf"], ["class", "po-menu-footer", 4, "ngIf"], [1, "po-menu-overlay", 3, "click"], [1, "po-menu-header-container-logo"], ["href", "./"], [3, "ngClass", "src", "alt"], [1, "po-menu-header-template"], [4, "ngTemplateOutlet"], [3, "p-loading", "p-filter"], [1, "po-menu-item-wrapper"], [1, "po-menu-item-first"], [1, "po-menu-icon-container", "po-menu-item-no-data"], [1, "po-icon", "po-icon-info", "po-menu-icon-item", "po-lg-2"], [1, "po-lg-10", "po-menu-icon-label"], [3, "p-action", "p-badge-alert", "p-badge-color", "p-badge-value", "p-collapsed-menu", "p-icon", "p-id", "p-label", "p-level", "p-link", "p-short-label", "p-sub-items", "p-type"], [1, "po-menu-footer"], [1, "po-menu-collapse-button-icon", "po-clickable", 3, "click"], [1, "po-icon"]], template: function PoMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoMenuComponent_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵelementStart(1, "nav")(2, "div", 1);
        i0.ɵɵlistener("click", function PoMenuComponent_Template_div_click_2_listener() { return ctx.toggleMenuMobile(); });
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3)(5, "div", 4);
        i0.ɵɵtemplate(6, PoMenuComponent_div_6_Template, 3, 3, "div", 5);
        i0.ɵɵtemplate(7, PoMenuComponent_div_7_Template, 2, 1, "div", 6);
        i0.ɵɵtemplate(8, PoMenuComponent_po_menu_filter_8_Template, 1, 1, "po-menu-filter", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8)(10, "div", 9)(11, "div", 10);
        i0.ɵɵtemplate(12, PoMenuComponent_div_12_Template, 6, 1, "div", 11);
        i0.ɵɵtemplate(13, PoMenuComponent_div_13_Template, 2, 15, "div", 12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(14, PoMenuComponent_div_14_Template, 3, 4, "div", 13);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.mobileOpened);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx.mobileOpened));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.logo || ctx.shortLogo && ctx.enableCollapse);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.enableCollapse && ctx.menuHeaderTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filter && !ctx.enableCollapse);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.noData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.filteredItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFooter);
    } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i6.NgTemplateOutlet, i7.PoIconComponent, i8.PoMenuFilterComponent, i9.PoMenuItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuComponent, [{
        type: Component,
        args: [{ selector: 'po-menu', providers: [PoMenuItemsService, PoMenuService], template: "<div *ngIf=\"mobileOpened\" class=\"po-menu-overlay\" (click)=\"toggleMenuMobile()\"></div>\r\n<nav>\r\n  <div class=\"po-menu-mobile po-clickable\" (click)=\"toggleMenuMobile()\">\r\n    <span class=\"po-icon po-icon-menu\"></span>\r\n  </div>\r\n\r\n  <div class=\"po-menu\" [ngClass]=\"{ 'po-menu-animation': mobileOpened }\">\r\n    <div class=\"po-menu-header\">\r\n      <div *ngIf=\"logo || (shortLogo && enableCollapse)\" class=\"po-menu-header-container-logo\">\r\n        <a href=\"./\">\r\n          <img\r\n            [ngClass]=\"enableCollapse ? 'po-menu-short-logo' : 'po-menu-logo'\"\r\n            [src]=\"enableCollapse ? shortLogo || logo : logo\"\r\n            [alt]=\"logoAlt\"\r\n          />\r\n        </a>\r\n      </div>\r\n\r\n      <div *ngIf=\"!enableCollapse && menuHeaderTemplate\" class=\"po-menu-header-template\">\r\n        <ng-container *ngTemplateOutlet=\"menuHeaderTemplate.templateRef\"></ng-container>\r\n      </div>\r\n\r\n      <po-menu-filter *ngIf=\"filter && !enableCollapse\" [p-loading]=\"filterLoading\" (p-filter)=\"debounceFilter($event)\">\r\n      </po-menu-filter>\r\n    </div>\r\n\r\n    <div class=\"po-menu-body\">\r\n      <!-- Inner e outer para esconder scroll -->\r\n      <div class=\"po-menu-outer\">\r\n        <div class=\"po-menu-inner\">\r\n          <div *ngIf=\"noData\" class=\"po-menu-item-wrapper\">\r\n            <div class=\"po-menu-item-first\">\r\n              <div class=\"po-menu-icon-container po-menu-item-no-data\">\r\n                <po-icon class=\"po-icon po-icon-info po-menu-icon-item po-lg-2\"></po-icon>\r\n                <div class=\"po-lg-10 po-menu-icon-label\">{{ literals.itemNotFound }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngFor=\"let menu of filteredItems; let menuIndex = index\" class=\"po-menu-item-wrapper\">\r\n            <po-menu-item\r\n              [class.po-menu-item-first]=\"menuIndex === 0\"\r\n              [p-action]=\"menu.action\"\r\n              [p-badge-alert]=\"menu.badgeAlert\"\r\n              [p-badge-color]=\"menu.badge ? menu.badge.color : undefined\"\r\n              [p-badge-value]=\"menu.badge ? menu.badge.value : undefined\"\r\n              [p-collapsed-menu]=\"enableCollapse\"\r\n              [p-icon]=\"allowIcons ? menu.icon : null\"\r\n              [p-id]=\"menu.id\"\r\n              [p-label]=\"menu.label\"\r\n              [p-level]=\"menu.level\"\r\n              [p-link]=\"menu.link\"\r\n              [p-short-label]=\"menu.shortLabel\"\r\n              [p-sub-items]=\"menu.subItems\"\r\n              [p-type]=\"menu.type\"\r\n            >\r\n            </po-menu-item>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"hasFooter\" class=\"po-menu-footer\">\r\n      <a class=\"po-menu-collapse-button-icon po-clickable\" (click)=\"toggle()\">\r\n        <span\r\n          class=\"po-icon\"\r\n          [class.po-icon-menu-close]=\"enableCollapseButton\"\r\n          [class.po-icon-menu-open]=\"enableCollapse\"\r\n        >\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.Router }, { type: i2.PoMenuItemsService }, { type: i3.PoMenuGlobalService }, { type: i4.PoMenuService }, { type: i5.PoLanguageService }]; }, { menuHeaderTemplate: [{
            type: ContentChild,
            args: [PoMenuHeaderTemplateDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbWVudS9wby1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51L3BvLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxZQUFZLEVBTWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRzVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ3pCM0QsK0JBQStFO0lBQTdCLHlKQUFTLGVBQUEseUJBQWtCLENBQUEsSUFBQztJQUFDLGlCQUFNOzs7SUFRL0UsK0JBQXlGLFlBQUE7SUFFckYsMEJBSUU7SUFDSixpQkFBSSxFQUFBOzs7SUFKQSxlQUFrRTtJQUFsRSx1RkFBa0UsZ0dBQUEsdUJBQUE7OztJQVF0RSx3QkFBZ0Y7OztJQURsRiwrQkFBbUY7SUFDakYseUZBQWdGO0lBQ2xGLGlCQUFNOzs7SUFEVyxlQUFnRDtJQUFoRCx3RUFBZ0Q7Ozs7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RjtRQUNyRiwyQkFBSyxhQUFBO1FBQ3NDLHlGQUFTLHNCQUFrQixJQUFDO1FBQ25FLDBCQUEwQztRQUM1QyxpQkFBTTtRQUVOLDhCQUF1RSxhQUFBO1FBRW5FLGdFQVFNO1FBRU4sZ0VBRU07UUFFTixzRkFDaUI7UUFDbkIsaUJBQU07UUFFTiw4QkFBMEIsY0FBQSxlQUFBO1FBSXBCLG1FQU9NO1FBRU4sb0VBa0JNO1FBQ1IsaUJBQU0sRUFBQSxFQUFBO1FBSVYsbUVBU007UUFDUixpQkFBTSxFQUFBOztRQXhFRix1Q0FBa0I7UUFNRCxlQUFpRDtRQUFqRCxzRUFBaUQ7UUFFNUQsZUFBMkM7UUFBM0Msc0VBQTJDO1FBVTNDLGVBQTJDO1FBQTNDLG9FQUEyQztRQUloQyxlQUErQjtRQUEvQix3REFBK0I7UUFRdEMsZUFBWTtRQUFaLGlDQUFZO1FBU0ksZUFBa0I7UUFBbEIsMkNBQWtCO1FBdUJ4QyxlQUFlO1FBQWYsb0NBQWU7O3VGRHlEWixlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsU0FBUyxhQUVSLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO3lRQUdpQixrQkFBa0I7a0JBQWhGLFlBQVk7bUJBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGdldEZvcm1hdHRlZExpbmssIGlzTW9iaWxlLCBvcGVuRXh0ZXJuYWxMaW5rLCB1dWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb01lbnVCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1tZW51LWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9NZW51SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLW1lbnUtaGVhZGVyLXRlbXBsYXRlL3BvLW1lbnUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvTWVudUl0ZW0gfSBmcm9tICcuL3BvLW1lbnUtaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb01lbnVJdGVtRmlsdGVyZWQgfSBmcm9tICcuL3BvLW1lbnUtaXRlbS9wby1tZW51LWl0ZW0tZmlsdGVyZWQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9NZW51SXRlbXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1tZW51LWl0ZW1zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb01lbnVHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1tZW51LWdsb2JhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9NZW51U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHBvTWVudURlYm91bmNlVGltZSA9IDQwMDtcclxuY29uc3QgcG9NZW51TWluTGVuZ3RoID0gMztcclxuY29uc3QgcG9NZW51Um9vdExldmVsID0gMTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9NZW51QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQXBhcmVjZSBjb21wbGV0byBlbSB0ZWxhcyBjb20gbGFyZ3VyYSBtYWlvciBxdWUgMTIwMHB4LCBjYXNvIGNvbnRyw6FyaW8gbyBtZW51IMOpIGVzY29uZGlkbyBlIGNoYW1hZG8gcG9yIG1laW8gZGUgdW0gYm90w6NvLlxyXG4gKlxyXG4gKiBPIG1lbnUgdGFtYsOpbSBwb2RlIHNlciBjb2xhcHNhZG8uIEVzc2Egb3DDp8OjbyDDqSBoYWJpbGl0YWRhIHF1YW5kbyB0b2RvcyBvcyBpdGVucyBkZSBwcmltZWlybyBuw612ZWwgcG9zc3XDrXJlbSDDrWNvbmVzIGUgdGV4dG9zIGN1cnRvcy5cclxuICogU2UgY29sYXBzYWRvLCBzb21lbnRlIG9zIGl0ZW5zIGRlIHByaW1laXJvIG7DrXZlbCBzZXLDo28gZXhpYmlkb3MgZSwgY2FzbyBvIGl0ZW0gc2VsZWNpb25hZG8gcG9zc3VhIHN1Yi1uw612ZWlzLFxyXG4gKiBlbnTDo28gbyBtZW51IGFsdGVybmFyw6Egbm92YW1lbnRlIHBhcmEgbyBlc3RhZG8gYWJlcnRvLlxyXG4gKlxyXG4gKiBFeGlzdGUgYSBwb3NzaWJpbGlkYWRlIGRlIGN1c3RvbWl6YXIgYSBsb2dvbWFyY2EsIHF1ZSDDqSBleGliaWRhIG5hIHBhcnRlIHN1cGVyaW9yIGRvIGNvbXBvbmVudGUuXHJcbiAqXHJcbiAqIEUgcGFyYSBhZGljaW9uYXIgdW0gY29udGXDumRvIHBlcnNvbmFsaXphZG8gZW50cmUgYSBsb2dvbWFyY2EgZSBvIGNhbXBvIGRlIGZpbHRybyxcclxuICogYmFzdGEgYWRpY2lvbmFyIGVzdGUgY29udGXDumRvIGNvbSBhIGRpcmV0aXZhIFsqKnAtbWVudS1oZWFkZXItdGVtcGxhdGUqKl0oL2RvY3VtZW50YXRpb24vcG8tbWVudS1oZWFkZXItdGVtcGxhdGUpLlxyXG4gKlxyXG4gKiBDYXNvIHV0aWxpemFyIG8gZmlsdHJvIGRlIG1lbnVzLCDDqSBwb3Nzw612ZWwgcmVhbGl6YXIgYnVzY2FzIGVtIHNlcnZpw6dvLCBhcGVuYXMgaW5mb3JtYW5kbyBhIFVSTCBkbyBzZXJ2acOnbyBvdSBhIGluc3TDom5jaWEgZGVcclxuICogdW0gc2VydmnDp28gY3VzdG9taXphZG8gaW1wbGVtZW50YW5kbyBhIGludGVyZmFjZSBgUG9NZW51RmlsdGVyYC5cclxuICpcclxuICogUGFyYSBvIG1lbnUgZnVuY2lvbmFyIGNvcnJldGFtZW50ZSDDqSBuZWNlc3PDoXJpbyBpbXBvcnRhciBvIGBSb3V0ZXJNb2R1bGVgIGUgYFJvdXRlc2AgZG8gbcOzZHVsbyBwcmluY2lwYWwgZGVcclxuICogIHN1YSBhcGxpY2HDp8OjbzpcclxuICpcclxuICogYGBgYFxyXG4gKiBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZSxcclxuICogICAgIFJvdXRlcyxcclxuICogICAgIC4uLlxyXG4gKiAgICAgUG9Nb2R1bGUsXHJcbiAqICAgICAuLi5cclxuICogICBdLFxyXG4gKiAgIGRlY2xhcmF0aW9uczogW1xyXG4gKiAgICAgQXBwQ29tcG9uZW50XHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtdLFxyXG4gKiAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEFsw6ltIGRpc3NvIMOpIG5lY2Vzc8OhcmlvIGNyaWFyIHVtIG3Ds2R1bG8gY29uZmlndXJhbmRvIGFzIHJvdGFzIGRhIGFwbGljYcOnw6NvLlxyXG4gKlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICpcclxuICogaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4gKlxyXG4gKiBpbXBvcnQgeyBIZWxsb1dvcmxkQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxsby13b3JsZC9oZWxsby13b3JsZC5jb21wb25lbnQnO1xyXG4gKlxyXG4gKiBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICogICB7cGF0aDogJ2hlbGxvLXdvcmxkJywgY29tcG9uZW50OiBIZWxsb1dvcmxkQ29tcG9uZW50fVxyXG4gKiBdO1xyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHt1c2VIYXNoOiB0cnVlfSldLFxyXG4gKiAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbWVudS1iYXNpY1wiIHRpdGxlPVwiUE8gTWVudSBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1iYXNpYy9zYW1wbGUtcG8tbWVudS1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tZW51LWJhc2ljL3NhbXBsZS1wby1tZW51LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW1lbnUtbGFic1wiIHRpdGxlPVwiUE8gTWVudSBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tZW51LWxhYnMvc2FtcGxlLXBvLW1lbnUtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tZW51LWxhYnMvc2FtcGxlLXBvLW1lbnUtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1tZW51LWh1bWFuLXJlc291cmNlc1wiIHRpdGxlPVwiUE8gTWVudSAtIEh1bWFuIFJlc291cmNlc1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1odW1hbi1yZXNvdXJjZXMvc2FtcGxlLXBvLW1lbnUtaHVtYW4tcmVzb3VyY2VzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1lbnUtaHVtYW4tcmVzb3VyY2VzL3NhbXBsZS1wby1tZW51LWh1bWFuLXJlc291cmNlcy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1odW1hbi1yZXNvdXJjZXMvc2FtcGxlLXBvLW1lbnUtaHVtYW4tcmVzb3VyY2VzLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQb01lbnVJdGVtc1NlcnZpY2UsIFBvTWVudVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVDb21wb25lbnQgZXh0ZW5kcyBQb01lbnVCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQsIERvQ2hlY2sge1xyXG4gIEBDb250ZW50Q2hpbGQoUG9NZW51SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG1lbnVIZWFkZXJUZW1wbGF0ZTogUG9NZW51SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmU7XHJcblxyXG4gIGFjdGl2ZU1lbnVJdGVtOiBQb01lbnVJdGVtO1xyXG4gIGNvbGxhcHNlZE1vYmlsZTogYm9vbGVhbjtcclxuICBmaWx0ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgZ3JvdXBlZE1lbnVJdGVtOiBQb01lbnVJdGVtO1xyXG4gIGlkID0gdXVpZCgpO1xyXG4gIGxpbmtBY3RpdmU6IHN0cmluZztcclxuICBtb2JpbGVPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBub0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0aW1lb3V0RmlsdGVyOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyaW5nSXRlbXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIG1lbnVJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbWVudVByZXZpb3VzID0gbnVsbDtcclxuICBwcml2YXRlIHJlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIGl0ZW1TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIG1lbnVJdGVtc1NlcnZpY2U6IFBvTWVudUl0ZW1zU2VydmljZSxcclxuICAgIG1lbnVHbG9iYWxTZXJ2aWNlOiBQb01lbnVHbG9iYWxTZXJ2aWNlLFxyXG4gICAgbWVudVNlcnZpY2U6IFBvTWVudVNlcnZpY2UsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihtZW51R2xvYmFsU2VydmljZSwgbWVudVNlcnZpY2UsIGxhbmd1YWdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0FjdGl2ZUl0ZW1NZW51U3ViTWVudSgpIHtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZU1lbnVJdGVtWydsZXZlbCddID4gdGhpcy5ncm91cGVkTWVudUl0ZW1bJ2xldmVsJ107XHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlQ29sbGFwc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0NvbGxhcHNlZCAmJiAhdGhpcy5jb2xsYXBzZWRNb2JpbGU7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlQ29sbGFwc2VCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hbGxvd0NvbGxhcHNlTWVudSAmJiAhdGhpcy5jb2xsYXBzZWQgJiYgIXRoaXMubW9iaWxlT3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0Zvb3RlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmVuYWJsZUNvbGxhcHNlQnV0dG9uIHx8IHRoaXMuZW5hYmxlQ29sbGFwc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDb2xsYXBzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hbGxvd0NvbGxhcHNlTWVudSAmJiB0aGlzLmNvbGxhcHNlZDtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICh0aGlzLmZpbHRlcmluZ0l0ZW1zICYmIHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZW51Q3VycmVudCA9IHRoaXMuc3RyaW5naWZ5KHRoaXMubWVudXMpO1xyXG5cclxuICAgIGlmICh0aGlzLm1lbnVQcmV2aW91cyAhPT0gbWVudUN1cnJlbnQgfHwgIXRoaXMubWVudUluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTWVudSgpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29sbGFwc2VDbGFzcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLml0ZW1TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZXNpemVMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZW51R2xvYmFsU2VydmljZS5zZW5kUmVtb3ZlZEFwcGxpY2F0aW9uTWVudSh0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb01lbnVJdGVtKCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvUm91dGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubWVudUdsb2JhbFNlcnZpY2Uuc2VuZEFwcGxpY2F0aW9uTWVudSh0aGlzKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlTWVudUJ5VXJsKHVybFBhdGg6IHN0cmluZywgbWVudXM6IEFycmF5PFBvTWVudUl0ZW0+KSB7XHJcbiAgICBpZiAobWVudXMpIHtcclxuICAgICAgY29uc3QgdXJsUGF0aFdpdGhvdXRMYXN0RnJhZ21lbnQgPSB1cmxQYXRoLnN1YnN0cigwLCB1cmxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xyXG4gICAgICByZXR1cm4gbWVudXMuc29tZShtZW51ID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRNZW51TGluayA9IGdldEZvcm1hdHRlZExpbmsobWVudS5saW5rKTtcclxuICAgICAgICBjb25zdCBtZW51TGlua1BhdGggPSBgJHt1cmxQYXRoV2l0aG91dExhc3RGcmFnbWVudH0ke2Zvcm1hdHRlZE1lbnVMaW5rLnN1YnN0cihcclxuICAgICAgICAgIGZvcm1hdHRlZE1lbnVMaW5rLmxhc3RJbmRleE9mKCcvJylcclxuICAgICAgICApfWA7XHJcblxyXG4gICAgICAgIGlmIChtZW51TGlua1BhdGggPT09IHVybFBhdGggJiYgbWVudUxpbmtQYXRoID09PSBmb3JtYXR0ZWRNZW51TGluaykge1xyXG4gICAgICAgICAgdGhpcy5saW5rQWN0aXZlID0gZm9ybWF0dGVkTWVudUxpbms7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlTWVudUl0ZW0obWVudSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVNZW51QnlVcmwodXJsUGF0aCwgbWVudS5zdWJJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQWN0aXZlTWVudUJ5VXJsKHVybFBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxpbmtBY3RpdmUgfHwgdGhpcy5saW5rQWN0aXZlICE9PSB1cmxQYXRoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVNZW51QnlVcmwodXJsUGF0aCwgdGhpcy5tZW51cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA8YSBpZD1cImNvbGFwc2VNZXRob2RcIj48L2E+XHJcbiAgICpcclxuICAgKiAqTcOpdG9kbyBwYXJhIGNvbGFwc2FyIChyZXRyYWlyKSBvIG1lbnUuXHJcbiAgICovXHJcbiAgY29sbGFwc2UoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlVG9nZ2xlTWVudSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGRlYm91bmNlRmlsdGVyKGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0RmlsdGVyKTtcclxuXHJcbiAgICB0aGlzLnRpbWVvdXRGaWx0ZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5maWx0ZXJQcm9jZXNzKGZpbHRlcik7XHJcbiAgICB9LCBwb01lbnVEZWJvdW5jZVRpbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPGEgaWQ9XCJleHBhbmRNZXRob2RcIj48L2E+XHJcbiAgICpcclxuICAgKiAqTcOpdG9kbyBwYXJhIGV4cGFuZGlyIChhdW1lbnRhcikgbyBtZW51LlxyXG4gICAqL1xyXG4gIGV4cGFuZCgpIHtcclxuICAgIHRoaXMudmFsaWRhdGVUb2dnbGVNZW51KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZVRvTWVudUl0ZW0oKSB7XHJcbiAgICB0aGlzLml0ZW1TdWJzY3JpcHRpb24gPSB0aGlzLm1lbnVJdGVtc1NlcnZpY2UucmVjZWl2ZUZyb21DaGlsZE1lbnVDbGlja2VkKCkuc3Vic2NyaWJlKChtZW51OiBQb01lbnVJdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xpY2tNZW51SXRlbShtZW51KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlVG9Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IHZhbCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpIHtcclxuICAgICAgICBjb25zdCB1cmxSb3V0ZXIgPSB0aGlzLmNoZWNraW5nUm91dGVyQ2hpbGRyZW5GcmFnbWVudHMoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQWN0aXZlTWVudUJ5VXJsKHVybFJvdXRlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPGEgaWQ9XCJ0b2dnbGVNZXRob2RcIj48L2E+XHJcbiAgICogKk3DqXRvZG8gcXVlIGNvbGFwc2EgZSBleHBhbmRlIG8gbWVudSBhbHRlcm5hZGFtZW50ZS5cclxuICAgKlxyXG4gICAqID4gKk9zIG3DqXRvZG9zIGFwZW5hcyB2w6NvIGNvbGFwc2FyL2V4cGFuZGlyIG8gbWVudSBzZTpcclxuICAgKiAgLSBUb2RvcyBvcyBpdGVucyBkZSBtZW51IHRpdmVyZW0gdmFsb3IgbmFzIHByb3ByaWVkYWRlcyBgaWNvbmAgZSBgc2hvcnRMYWJlbGAuXHJcbiAgICovXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy52YWxpZGF0ZVRvZ2dsZU1lbnUoIXRoaXMuY29sbGFwc2VkKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnVNb2JpbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vYmlsZU9wZW5lZCA9ICF0aGlzLm1vYmlsZU9wZW5lZDtcclxuICAgIHRoaXMuY29sbGFwc2VkTW9iaWxlID0gdGhpcy5jb2xsYXBzZWQgJiYgdGhpcy5tb2JpbGVPcGVuZWQ7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZUNvbGxhcHNlQ2xhc3ModGhpcy5jb2xsYXBzZWRNb2JpbGUpO1xyXG5cclxuICAgIGlmIChpc01vYmlsZSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tb2JpbGVPcGVuZWQpIHtcclxuICAgICAgdGhpcy5jcmVhdGVSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoZWNraW5nUm91dGVyQ2hpbGRyZW5GcmFnbWVudHMoKSB7XHJcbiAgICBjb25zdCBjaGlsZHJlblByaW1hcnkgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh0aGlzLnJvdXRlci51cmwpLnJvb3QuY2hpbGRyZW5bJ3ByaW1hcnknXTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGRyZW5QcmltYXJ5ID8gYC8ke2NoaWxkcmVuUHJpbWFyeS5zZWdtZW50cy5tYXAoaXQgPT4gaXQucGF0aCkuam9pbignLycpfWAgOiAnJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZUNvbGxhcHNlQ2xhc3MoY29sbGFwc2VkTW9iaWxlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy5yZW5kZXJlclt0aGlzLmlzQ29sbGFwc2VkICYmICFjb2xsYXBzZWRNb2JpbGUgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10od3JhcHBlciwgJ3BvLWNvbGxhcHNlZC1tZW51Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2YXRlQ29sbGFwc2VTdWJNZW51SXRlbSgpIHtcclxuICAgIHRoaXMuY2xlYXJHcm91cE1lbnVJZkZpcnN0TGV2ZWwodGhpcy5hY3RpdmVNZW51SXRlbSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbGxhcHNlZCAmJiB0aGlzLmFjdGl2ZU1lbnVJdGVtWydsZXZlbCddID4gcG9NZW51Um9vdExldmVsICYmIHRoaXMuaXNBY3RpdmVJdGVtTWVudVN1Yk1lbnUpIHtcclxuICAgICAgdGhpcy5vcGVuUGFyZW50TWVudSh0aGlzLmFjdGl2ZU1lbnVJdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWN0aXZhdGVNZW51SXRlbShtZW51OiBQb01lbnVJdGVtKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtID0gbWVudTtcclxuICAgIHRoaXMubGlua0FjdGl2ZSA9IG1lbnUubGluaztcclxuICAgIGlmICh0aGlzLmFjdGl2ZU1lbnVJdGVtWydsZXZlbCddID4gcG9NZW51Um9vdExldmVsKSB7XHJcbiAgICAgIHRoaXMub3BlblBhcmVudE1lbnUodGhpcy5hY3RpdmVNZW51SXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdyb3VwZWRNZW51SXRlbSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1lbnVJdGVtc1NlcnZpY2Uuc2VuZFRvQ2hpbGRNZW51Q2xpY2tlZCh7XHJcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmVNZW51SXRlbSxcclxuICAgICAgZ3JvdXBlZDogdGhpcy5ncm91cGVkTWVudUl0ZW0sXHJcbiAgICAgIGFjdGl2YXRlZEJ5Um91dGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcmVTdWJNZW51cyhtZW51czogQXJyYXk8UG9NZW51SXRlbT4pIHtcclxuICAgIHJldHVybiBtZW51cy5ldmVyeShtZW51ID0+IG1lbnVbJ2xldmVsJ10gPiBwb01lbnVSb290TGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckdyb3VwTWVudUlmRmlyc3RMZXZlbChhY3RpdmVNZW51SXRlbTogUG9NZW51SXRlbSkge1xyXG4gICAgaWYgKGFjdGl2ZU1lbnVJdGVtWydsZXZlbCddID09PSBwb01lbnVSb290TGV2ZWwpIHtcclxuICAgICAgdGhpcy5ncm91cGVkTWVudUl0ZW0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsaWNrTWVudUl0ZW0obWVudTogUG9NZW51SXRlbSkge1xyXG4gICAgaWYgKG1lbnUuYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZU1lbnVBY3Rpb24obWVudSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lbnVbJ3R5cGUnXSA9PT0gJ2V4dGVybmFsTGluaycpIHtcclxuICAgICAgb3BlbkV4dGVybmFsTGluayhtZW51LmxpbmspO1xyXG4gICAgfSBlbHNlIGlmIChtZW51Wyd0eXBlJ10gPT09ICdpbnRlcm5hbExpbmsnKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVNZW51SXRlbShtZW51KTtcclxuICAgIH0gZWxzZSBpZiAobWVudVsndHlwZSddID09PSAnc3ViSXRlbXMnKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbHRlcmluZ0l0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdJdGVtcyA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmdyb3VwTWVudUl0ZW0obWVudSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lbnVbJ3R5cGUnXSAhPT0gJ3N1Ykl0ZW1zJykge1xyXG4gICAgICB0aGlzLm1vYmlsZU9wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VG9NZW51SXRlbUZpbHRlcmVkKG1lbnVJdGVtOiBhbnkgPSB7IGxhYmVsOiAnJywgbGluazogJycgfSk6IFBvTWVudUl0ZW1GaWx0ZXJlZCB7XHJcbiAgICBjb25zdCB7IGxhYmVsLCBsaW5rIH0gPSBtZW51SXRlbTtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbUZpbHRlcmVkOiBQb01lbnVJdGVtRmlsdGVyZWQgPSB7IGxhYmVsLCBsaW5rIH07XHJcblxyXG4gICAgdGhpcy5zZXRNZW51SXRlbVByb3BlcnRpZXMobWVudUl0ZW1GaWx0ZXJlZCk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVJdGVtRmlsdGVyZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVJlc2l6ZUxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRvZ2dsZVJlc2l6ZSgpO1xyXG4gICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZU1lbnVBY3Rpb24obWVudTogUG9NZW51SXRlbSk6IHZvaWQge1xyXG4gICAgbWVudS5hY3Rpb24obWVudSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGZpbHRlckl0ZW1zKGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0cmltRmlsdGVyID0gZmlsdGVyICYmIGZpbHRlci50cmltKCk7XHJcblxyXG4gICAgaWYgKHRyaW1GaWx0ZXIpIHtcclxuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyU2VydmljZVxyXG4gICAgICAgID8gYXdhaXQgdGhpcy5maWx0ZXJPblNlcnZpY2UodHJpbUZpbHRlcilcclxuICAgICAgICA6IHRoaXMuZmlsdGVyTG9jYWxJdGVtcyh0cmltRmlsdGVyKTtcclxuICAgICAgdGhpcy5maWx0ZXJpbmdJdGVtcyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbLi4udGhpcy5tZW51c107XHJcbiAgICAgIHRoaXMuZmlsdGVyaW5nSXRlbXMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyTG9jYWxJdGVtcyhmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZmluZEl0ZW1zKHRoaXMubWVudXMsIGZpbHRlci50b0xvd2VyQ2FzZSgpLCBmaWx0ZXJlZEl0ZW1zKTtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWRJdGVtcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyUHJvY2VzcyhmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dOb0RhdGEoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtc1NlcnZpY2Uuc2VuZFRvQ2hpbGRNZW51Q2xpY2tlZCh7IGFjdGl2ZTogdGhpcy5hY3RpdmVNZW51SXRlbSwgZ3JvdXBlZDogdGhpcy5ncm91cGVkTWVudUl0ZW0gfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZmlsdGVyT25TZXJ2aWNlKHNlYXJjaDogc3RyaW5nID0gJycpIHtcclxuICAgIGlmIChzZWFyY2gubGVuZ3RoID49IHBvTWVudU1pbkxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5maWx0ZXJTZXJ2aWNlXHJcbiAgICAgICAgLmdldEZpbHRlcmVkRGF0YShzZWFyY2gsIHRoaXMucGFyYW1zKVxyXG4gICAgICAgIC5waXBlKG1hcChtZW51SXRlbXNGaWx0ZXJlZCA9PiBtZW51SXRlbXNGaWx0ZXJlZC5tYXAobWVudUl0ZW0gPT4gdGhpcy5jb252ZXJ0VG9NZW51SXRlbUZpbHRlcmVkKG1lbnVJdGVtKSkpKVxyXG4gICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRJdGVtcyhtZW51czogQXJyYXk8UG9NZW51SXRlbT4sIGZpbHRlcjogc3RyaW5nLCBmaWx0ZXJlZEl0ZW1zOiBBcnJheTxhbnk+KSB7XHJcbiAgICBtZW51cy5mb3JFYWNoKG1lbnUgPT4ge1xyXG4gICAgICBjb25zdCBoYXNBY3Rpb24gPSBtZW51LmFjdGlvbiB8fCBtZW51Lmxpbms7XHJcbiAgICAgIGNvbnN0IGxhYmVsSGFzRmlsdGVyID0gbWVudS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcik7XHJcblxyXG4gICAgICBpZiAobGFiZWxIYXNGaWx0ZXIgJiYgaGFzQWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TWVudSA9IHsgLi4ubWVudSB9O1xyXG5cclxuICAgICAgICBpZiAobmV3TWVudS5zdWJJdGVtcz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBkZWxldGUgbmV3TWVudS5zdWJJdGVtcztcclxuICAgICAgICAgIG5ld01lbnVbJ3R5cGUnXSA9IHRoaXMuc2V0TWVudVR5cGUobmV3TWVudSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2gobmV3TWVudSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtZW51LnN1Ykl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5maW5kSXRlbXMobWVudS5zdWJJdGVtcywgZmlsdGVyLCBmaWx0ZXJlZEl0ZW1zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRQYXJlbnQobWVudXM6IEFycmF5PFBvTWVudUl0ZW0+LCBtZW51SXRlbTogUG9NZW51SXRlbSk6IFBvTWVudUl0ZW0ge1xyXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gZnVuY3Rpb24gKG1lbnVJdGVtczogQXJyYXk8UG9NZW51SXRlbT4sIGlkKSB7XHJcbiAgICAgIGlmIChtZW51SXRlbXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVudUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgY29uc3QgbWVudSA9IG1lbnVJdGVtc1tpbmRleF07XHJcbiAgICAgICAgICBpZiAobWVudS5zdWJJdGVtcyAmJiBtZW51LnN1Ykl0ZW1zLmZpbmQoc3ViSXRlbSA9PiBzdWJJdGVtWydpZCddID09PSBpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBmb3VuZCA9IGdldFBhcmVudChtZW51LnN1Ykl0ZW1zLCBpZCk7XHJcbiAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBnZXRQYXJlbnQobWVudXMsIG1lbnVJdGVtWydpZCddKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZFJvb3RQYXJlbnQobWVudXM6IEFycmF5PFBvTWVudUl0ZW0+LCBtZW51OiBQb01lbnVJdGVtKTogUG9NZW51SXRlbSB7XHJcbiAgICBjb25zdCBmaW5kUGFyZW50ID0gdGhpcy5maW5kUGFyZW50O1xyXG5cclxuICAgIGNvbnN0IGdldFJvb3RQYXJlbnQgPSBmdW5jdGlvbiAobWVudUl0ZW1zOiBBcnJheTxQb01lbnVJdGVtPiwgbWVudUl0ZW0pOiBQb01lbnVJdGVtIHtcclxuICAgICAgbGV0IHBhcmVudCA9IGZpbmRQYXJlbnQobWVudUl0ZW1zLCBtZW51SXRlbSk7XHJcblxyXG4gICAgICBpZiAocGFyZW50WydsZXZlbCddICE9PSBwb01lbnVSb290TGV2ZWwpIHtcclxuICAgICAgICBwYXJlbnQgPSBnZXRSb290UGFyZW50KG1lbnVJdGVtcywgcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBnZXRSb290UGFyZW50KG1lbnVzLCBtZW51KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWN0aXZlTWVudVBhcmVudChtZW51czogQXJyYXk8UG9NZW51SXRlbT4sIGFjdGl2ZU1lbnVJdGVtOiBQb01lbnVJdGVtLCBncm91cGVkTWVudUl0ZW06IFBvTWVudUl0ZW0pIHtcclxuICAgIGlmICh0aGlzLmFyZVN1Yk1lbnVzKFtncm91cGVkTWVudUl0ZW0sIGFjdGl2ZU1lbnVJdGVtXSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmluZFJvb3RQYXJlbnQobWVudXMsIGFjdGl2ZU1lbnVJdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ3JvdXBNZW51SXRlbShtZW51OiBQb01lbnVJdGVtKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy50b2dnbGVNZW51Q29sbGFwc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51Wydpc09wZW5lZCddID0gIW1lbnVbJ2lzT3BlbmVkJ107XHJcbiAgICB0aGlzLmdyb3VwZWRNZW51SXRlbSA9IG1lbnU7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtICYmXHJcbiAgICAgIG1lbnVbJ2lzT3BlbmVkJ10gJiZcclxuICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1NZW51U3ViTWVudSAmJlxyXG4gICAgICB0aGlzLmlzUm9vdE1lbnVFcXVhbEdyb3VwZWRNZW51KHRoaXMubWVudXMsIHRoaXMuYWN0aXZlTWVudUl0ZW0sIG1lbnUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZU1lbnVJdGVtKHRoaXMuYWN0aXZlTWVudUl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVudUl0ZW1zU2VydmljZS5zZW5kVG9DaGlsZE1lbnVDbGlja2VkKHsgYWN0aXZlOiB0aGlzLmFjdGl2ZU1lbnVJdGVtLCBncm91cGVkOiB0aGlzLmdyb3VwZWRNZW51SXRlbSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNSb290TWVudUVxdWFsR3JvdXBlZE1lbnUoXHJcbiAgICBtZW51czogQXJyYXk8UG9NZW51SXRlbT4sXHJcbiAgICBhY3RpdmVNZW51SXRlbTogUG9NZW51SXRlbSxcclxuICAgIGdyb3VwZWRNZW51SXRlbTogUG9NZW51SXRlbVxyXG4gICkge1xyXG4gICAgY29uc3QgYWN0aXZlTWVudVJvb3RQYXJlbnQgPSB0aGlzLmZpbmRSb290UGFyZW50KG1lbnVzLCBhY3RpdmVNZW51SXRlbSk7XHJcbiAgICByZXR1cm4gYWN0aXZlTWVudVJvb3RQYXJlbnRbJ2lkJ10gPT09IGdyb3VwZWRNZW51SXRlbVsnaWQnXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlblBhcmVudE1lbnUoY2hpbGRNZW51OiBQb01lbnVJdGVtKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmZpbmRQYXJlbnQodGhpcy5tZW51cywgY2hpbGRNZW51KTtcclxuICAgIHBhcmVudFsnaXNPcGVuZWQnXSA9IHRydWU7XHJcbiAgICB0aGlzLmdyb3VwZWRNZW51SXRlbSA9IHBhcmVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd05vRGF0YSgpIHtcclxuICAgIHRoaXMubm9EYXRhID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RyaW5naWZ5KG1lbnVzOiBBcnJheTxQb01lbnVJdGVtPik6IHN0cmluZyB7XHJcbiAgICAvLyBuw6NvIGZheiBvIHN0cmluZ2lmeSBkYSBwcm9wcmllZGFkZSBpY29uLCBwb2lzIHBvZGUgY29udGVyIG9iamV0byBjb21wbGV4byBlIGRpc3BhcmFyIHVtIGVycm8uXHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5tZW51cywgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgaWYgKGtleSAhPT0gJ2ljb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlR3JvdXBlZE1lbnVJdGVtKCkge1xyXG4gICAgdGhpcy5ncm91cGVkTWVudUl0ZW1bJ2lzT3BlbmVkJ10gPSAhdGhpcy5jb2xsYXBzZWQgJiYgdGhpcy5hbGxvd0NvbGxhcHNlTWVudTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlTWVudUNvbGxhcHNlKGNvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcclxuXHJcbiAgICBpZiAodGhpcy5ncm91cGVkTWVudUl0ZW0gJiYgdGhpcy5hY3RpdmVNZW51SXRlbSkge1xyXG4gICAgICB0aGlzLmdyb3VwZWRNZW51SXRlbSA9XHJcbiAgICAgICAgdGhpcy5nZXRBY3RpdmVNZW51UGFyZW50KHRoaXMubWVudXMsIHRoaXMuYWN0aXZlTWVudUl0ZW0sIHRoaXMuZ3JvdXBlZE1lbnVJdGVtKSB8fCB0aGlzLmdyb3VwZWRNZW51SXRlbTtcclxuICAgICAgdGhpcy50b2dnbGVHcm91cGVkTWVudUl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hY3RpdmVNZW51SXRlbSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlQ29sbGFwc2VTdWJNZW51SXRlbSgpO1xyXG4gICAgICB0aGlzLm1lbnVJdGVtc1NlcnZpY2Uuc2VuZFRvQ2hpbGRNZW51Q2xpY2tlZCh7XHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZU1lbnVJdGVtLFxyXG4gICAgICAgIGdyb3VwZWQ6IHRoaXMuZ3JvdXBlZE1lbnVJdGVtLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Um91dGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVNZW51KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLm1vYmlsZU9wZW5lZCkge1xyXG4gICAgICB0aGlzLm1vYmlsZU9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbGxhcHNlZE1vYmlsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29sbGFwc2VDbGFzcyh0aGlzLmNvbGxhcHNlZE1vYmlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlVG9nZ2xlTWVudShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5hbGxvd0NvbGxhcHNlTWVudSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2dnbGVNZW51Q29sbGFwc2UoY29sbGFwc2VkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTWVudSgpIHtcclxuICAgIHRoaXMubWVudUluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0TWVudUV4dHJhUHJvcGVydGllcygpO1xyXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMubWVudXNdO1xyXG4gICAgdGhpcy5tZW51UHJldmlvdXMgPSB0aGlzLnN0cmluZ2lmeSh0aGlzLm1lbnVzKTtcclxuICAgIHRoaXMudmFsaWRhdGVNZW51cyh0aGlzLm1lbnVzKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cIm1vYmlsZU9wZW5lZFwiIGNsYXNzPVwicG8tbWVudS1vdmVybGF5XCIgKGNsaWNrKT1cInRvZ2dsZU1lbnVNb2JpbGUoKVwiPjwvZGl2PlxyXG48bmF2PlxyXG4gIDxkaXYgY2xhc3M9XCJwby1tZW51LW1vYmlsZSBwby1jbGlja2FibGVcIiAoY2xpY2spPVwidG9nZ2xlTWVudU1vYmlsZSgpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1tZW51XCI+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tbWVudVwiIFtuZ0NsYXNzXT1cInsgJ3BvLW1lbnUtYW5pbWF0aW9uJzogbW9iaWxlT3BlbmVkIH1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1tZW51LWhlYWRlclwiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwibG9nbyB8fCAoc2hvcnRMb2dvICYmIGVuYWJsZUNvbGxhcHNlKVwiIGNsYXNzPVwicG8tbWVudS1oZWFkZXItY29udGFpbmVyLWxvZ29cIj5cclxuICAgICAgICA8YSBocmVmPVwiLi9cIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiZW5hYmxlQ29sbGFwc2UgPyAncG8tbWVudS1zaG9ydC1sb2dvJyA6ICdwby1tZW51LWxvZ28nXCJcclxuICAgICAgICAgICAgW3NyY109XCJlbmFibGVDb2xsYXBzZSA/IHNob3J0TG9nbyB8fCBsb2dvIDogbG9nb1wiXHJcbiAgICAgICAgICAgIFthbHRdPVwibG9nb0FsdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWVuYWJsZUNvbGxhcHNlICYmIG1lbnVIZWFkZXJUZW1wbGF0ZVwiIGNsYXNzPVwicG8tbWVudS1oZWFkZXItdGVtcGxhdGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUhlYWRlclRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHBvLW1lbnUtZmlsdGVyICpuZ0lmPVwiZmlsdGVyICYmICFlbmFibGVDb2xsYXBzZVwiIFtwLWxvYWRpbmddPVwiZmlsdGVyTG9hZGluZ1wiIChwLWZpbHRlcik9XCJkZWJvdW5jZUZpbHRlcigkZXZlbnQpXCI+XHJcbiAgICAgIDwvcG8tbWVudS1maWx0ZXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tbWVudS1ib2R5XCI+XHJcbiAgICAgIDwhLS0gSW5uZXIgZSBvdXRlciBwYXJhIGVzY29uZGVyIHNjcm9sbCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLW1lbnUtb3V0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbWVudS1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cIm5vRGF0YVwiIGNsYXNzPVwicG8tbWVudS1pdGVtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvLW1lbnUtaXRlbS1maXJzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1tZW51LWljb24tY29udGFpbmVyIHBvLW1lbnUtaXRlbS1uby1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8cG8taWNvbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1pbmZvIHBvLW1lbnUtaWNvbi1pdGVtIHBvLWxnLTJcIj48L3BvLWljb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbGctMTAgcG8tbWVudS1pY29uLWxhYmVsXCI+e3sgbGl0ZXJhbHMuaXRlbU5vdEZvdW5kIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbWVudSBvZiBmaWx0ZXJlZEl0ZW1zOyBsZXQgbWVudUluZGV4ID0gaW5kZXhcIiBjbGFzcz1cInBvLW1lbnUtaXRlbS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxwby1tZW51LWl0ZW1cclxuICAgICAgICAgICAgICBbY2xhc3MucG8tbWVudS1pdGVtLWZpcnN0XT1cIm1lbnVJbmRleCA9PT0gMFwiXHJcbiAgICAgICAgICAgICAgW3AtYWN0aW9uXT1cIm1lbnUuYWN0aW9uXCJcclxuICAgICAgICAgICAgICBbcC1iYWRnZS1hbGVydF09XCJtZW51LmJhZGdlQWxlcnRcIlxyXG4gICAgICAgICAgICAgIFtwLWJhZGdlLWNvbG9yXT1cIm1lbnUuYmFkZ2UgPyBtZW51LmJhZGdlLmNvbG9yIDogdW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICBbcC1iYWRnZS12YWx1ZV09XCJtZW51LmJhZGdlID8gbWVudS5iYWRnZS52YWx1ZSA6IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgW3AtY29sbGFwc2VkLW1lbnVdPVwiZW5hYmxlQ29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIFtwLWljb25dPVwiYWxsb3dJY29ucyA/IG1lbnUuaWNvbiA6IG51bGxcIlxyXG4gICAgICAgICAgICAgIFtwLWlkXT1cIm1lbnUuaWRcIlxyXG4gICAgICAgICAgICAgIFtwLWxhYmVsXT1cIm1lbnUubGFiZWxcIlxyXG4gICAgICAgICAgICAgIFtwLWxldmVsXT1cIm1lbnUubGV2ZWxcIlxyXG4gICAgICAgICAgICAgIFtwLWxpbmtdPVwibWVudS5saW5rXCJcclxuICAgICAgICAgICAgICBbcC1zaG9ydC1sYWJlbF09XCJtZW51LnNob3J0TGFiZWxcIlxyXG4gICAgICAgICAgICAgIFtwLXN1Yi1pdGVtc109XCJtZW51LnN1Ykl0ZW1zXCJcclxuICAgICAgICAgICAgICBbcC10eXBlXT1cIm1lbnUudHlwZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wby1tZW51LWl0ZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaGFzRm9vdGVyXCIgY2xhc3M9XCJwby1tZW51LWZvb3RlclwiPlxyXG4gICAgICA8YSBjbGFzcz1cInBvLW1lbnUtY29sbGFwc2UtYnV0dG9uLWljb24gcG8tY2xpY2thYmxlXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzPVwicG8taWNvblwiXHJcbiAgICAgICAgICBbY2xhc3MucG8taWNvbi1tZW51LWNsb3NlXT1cImVuYWJsZUNvbGxhcHNlQnV0dG9uXCJcclxuICAgICAgICAgIFtjbGFzcy5wby1pY29uLW1lbnUtb3Blbl09XCJlbmFibGVDb2xsYXBzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmF2PlxyXG4iXX0=