import { AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuBaseComponent } from './po-menu-base.component';
import { PoMenuHeaderTemplateDirective } from './po-menu-header-template/po-menu-header-template.directive';
import { PoMenuItem } from './po-menu-item.interface';
import { PoMenuItemsService } from './services/po-menu-items.service';
import { PoMenuGlobalService } from './services/po-menu-global.service';
import { PoMenuService } from './services/po-menu.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
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
export declare class PoMenuComponent extends PoMenuBaseComponent implements AfterViewInit, OnDestroy, OnInit, DoCheck {
    changeDetector: ChangeDetectorRef;
    private element;
    private renderer;
    private router;
    private menuItemsService;
    menuHeaderTemplate: PoMenuHeaderTemplateDirective;
    activeMenuItem: PoMenuItem;
    collapsedMobile: boolean;
    filterLoading: boolean;
    groupedMenuItem: PoMenuItem;
    id: string;
    linkActive: string;
    mobileOpened: boolean;
    noData: boolean;
    timeoutFilter: any;
    private filteringItems;
    private menuInitialized;
    private menuPrevious;
    private resizeListener;
    private itemSubscription;
    private routeSubscription;
    constructor(changeDetector: ChangeDetectorRef, element: ElementRef, renderer: Renderer2, router: Router, menuItemsService: PoMenuItemsService, menuGlobalService: PoMenuGlobalService, menuService: PoMenuService, languageService: PoLanguageService);
    private get isActiveItemMenuSubMenu();
    get enableCollapse(): boolean;
    get enableCollapseButton(): boolean;
    get hasFooter(): boolean;
    get isCollapsed(): boolean;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    activateMenuByUrl(urlPath: string, menus: Array<PoMenuItem>): any;
    checkActiveMenuByUrl(urlPath: string): void;
    /**
     * <a id="colapseMethod"></a>
     *
     * *Método para colapsar (retrair) o menu.
     */
    collapse(): void;
    debounceFilter(filter: string): void;
    /**
     * <a id="expandMethod"></a>
     *
     * *Método para expandir (aumentar) o menu.
     */
    expand(): void;
    subscribeToMenuItem(): void;
    subscribeToRoute(): void;
    /**
     * <a id="toggleMethod"></a>
     * *Método que colapsa e expande o menu alternadamente.
     *
     * > *Os métodos apenas vão colapsar/expandir o menu se:
     *  - Todos os itens de menu tiverem valor nas propriedades `icon` e `shortLabel`.
     */
    toggle(): void;
    toggleMenuMobile(): void;
    protected checkingRouterChildrenFragments(): string;
    protected validateCollapseClass(collapsedMobile?: boolean): void;
    private activateCollapseSubMenuItem;
    private activateMenuItem;
    private areSubMenus;
    private clearGroupMenuIfFirstLevel;
    private clickMenuItem;
    private convertToMenuItemFiltered;
    private createResizeListener;
    private executeMenuAction;
    private filterItems;
    private filterLocalItems;
    private filterProcess;
    private filterOnService;
    private findItems;
    private findParent;
    private findRootParent;
    private getActiveMenuParent;
    private groupMenuItem;
    private isRootMenuEqualGroupedMenu;
    private openParentMenu;
    private showNoData;
    private stringify;
    private toggleGroupedMenuItem;
    private toggleMenuCollapse;
    private toggleResize;
    private validateToggleMenu;
    private updateMenu;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoMenuComponent, "po-menu", never, {}, {}, ["menuHeaderTemplate"], never, false>;
}