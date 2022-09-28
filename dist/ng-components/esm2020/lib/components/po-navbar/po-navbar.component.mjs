import { Component, ElementRef, ViewChild } from '@angular/core';
import { animate, keyframes, style } from '@angular/animations';
import { delay } from 'rxjs/operators';
import { uuid } from '../../utils/util';
import { PoMenuComponent } from '../po-menu/po-menu.component';
import { PoNavbarBaseComponent } from './po-navbar-base.component';
import { PoNavbarItemsComponent } from './po-navbar-items/po-navbar-items.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
import * as i2 from "@angular/animations";
import * as i3 from "../po-menu/services/po-menu-global.service";
import * as i4 from "@angular/common";
import * as i5 from "./po-navbar-actions/po-navbar-actions.component";
import * as i6 from "./po-navbar-items/po-navbar-items.component";
import * as i7 from "./po-navbar-item-navigation/po-navbar-item-navigation.component";
import * as i8 from "../po-menu/po-menu.component";
import * as i9 from "./po-navbar-logo/po-navbar-logo.component";
function PoNavbarComponent_po_navbar_item_navigation_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-navbar-item-navigation", 6);
    i0.ɵɵlistener("p-click", function PoNavbarComponent_po_navbar_item_navigation_3_Template_po_navbar_item_navigation_p_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.navigateItems($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-disable-left", ctx_r0.navbarItemNavigationDisableLeft)("p-disable-right", ctx_r0.navbarItemNavigationDisableRight);
} }
function PoNavbarComponent_po_menu_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-menu", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-menus", ctx_r1.items);
} }
const _c0 = function (a0) { return { "po-navbar-shadow": a0 }; };
const _c1 = function (a0, a1) { return { "po-navbar-logo-menu": a0, "po-navbar-no-logo": a1 }; };
const poNavbarNavigationWidth = 88;
const poNavbarMenuMedia = 768;
const poNavbarMatchMedia = `(max-width: ${poNavbarMenuMedia}px)`;
const poNavbarTiming = '250ms ease';
/**
 * @docsExtends PoNavbarBaseComponent
 */
export class PoNavbarComponent extends PoNavbarBaseComponent {
    constructor(poLanguageService, renderer, builder, changeDetector, menuGlobalService) {
        super(poLanguageService);
        this.renderer = renderer;
        this.builder = builder;
        this.changeDetector = changeDetector;
        this.menuGlobalService = menuGlobalService;
        this.showItemsNavigation = false;
        this.isNavbarUpdateMenu = false;
        this.id = uuid();
        this.offset = 0;
        this.previousMenusItems = [];
        this.onMediaQueryChange = changed => {
            this.changeNavbarMenuItems(changed.matches, this.items, this.literals.navbarLinks);
        };
        this.windowResizeListener = this.renderer.listen(window, 'resize', this.displayItemsNavigation.bind(this));
    }
    get navbarItemNavigationDisableLeft() {
        return this.offset === 0;
    }
    get navbarItemNavigationDisableRight() {
        return this.disableRight && this.offset !== 0;
    }
    set menuComponent(menu) {
        this._menuComponent = menu;
        this.previousMenuComponentId = menu?.id || this.previousMenuComponentId;
    }
    get isCollapsedMedia() {
        return window.innerWidth < poNavbarMenuMedia;
    }
    ngOnInit() {
        // necessário para quando o menu da aplicação carregar os itens lazy e navbar estiver colapsado,
        // quando isso acontece, o navbar inclui 1 item de menu "Navbar links", portanto é removido quando
        // os novos itens de menu é carregado, a partir disso este tratamento é necessario para incluir
        // o navbar links apos a adição dos itens de menu da aplicação.
        this.menusSubscription = this.menuGlobalService.receiveMenus$.subscribe(newMenus => {
            const previousMenusiIsNavbarLinks = this.previousMenusItems?.length === 1 && this.previousMenusItems[0].id === this.id;
            if (this.applicationMenu && this.isCollapsedMedia && this.isNavbarUpdateMenu && previousMenusiIsNavbarLinks) {
                this.isNavbarUpdateMenu = false;
                this.applicationMenu.menus = [
                    { label: this.literals.navbarLinks, subItems: this.items, id: this.id },
                    ...newMenus
                ];
            }
            this.isNavbarUpdateMenu = false;
            this.previousMenusItems = newMenus;
        });
        this.removedMenuSubscription = this.menuGlobalService.receiveRemovedApplicationMenu$.subscribe(removedMenuId => {
            // verifica se o menu removido foi o presente no navbar, caso sim, ele mantem o applictionMenu.
            // é preciso para tratar a sequencia do ngDestroy, quando o menu do navbar era removido do DOM
            // disparava esse evento, sendo necessario tratar, para não tornar indefinido o applicationMenu
            this.applicationMenu =
                this.applicationMenu && this.previousMenuComponentId === removedMenuId ? this.applicationMenu : undefined;
            this.changeDetector.detectChanges();
            if (!this.applicationMenu && this.mediaQuery) {
                this.mediaQuery.removeListener(this.onMediaQueryChange);
            }
        });
        this.applicationMenuSubscription = this.menuGlobalService.receiveApplicationMenu$
            .pipe(delay(100))
            .subscribe(newMenu => {
            this.applicationMenu = this.previousMenuComponentId === newMenu.id ? undefined : newMenu;
            this.changeDetector.detectChanges();
            if (this.applicationMenu) {
                this.initNavbarMenu();
            }
        });
    }
    ngAfterViewInit() {
        this.displayItemsNavigation();
    }
    ngOnDestroy() {
        if (this.mediaQuery) {
            this.mediaQuery.removeListener(this.onMediaQueryChange);
        }
        this.removedMenuSubscription?.unsubscribe();
        this.applicationMenuSubscription?.unsubscribe();
        this.menusSubscription?.unsubscribe();
    }
    navigateItems(orientation) {
        orientation === 'left' ? this.navigateLeft() : this.navigateRight();
        this.animate(this.offset);
    }
    validateMenuLogo() {
        if (this.applicationMenu.logo && this.logo) {
            this.applicationMenu.logo = undefined;
            this.changeDetector.detectChanges();
        }
    }
    allNavbarItemsWidth() {
        return this.navbarItems.allNavbarItems.reduce((previous, current) => previous + current.nativeElement.offsetWidth, 0);
    }
    animate(offset) {
        const animation = this.buildTransitionAnimation(offset);
        this.player = animation.create(this.navbarItems.navbarItemsContainer.nativeElement);
        this.player.play();
    }
    buildTransitionAnimation(offset) {
        return this.builder.build([animate(poNavbarTiming, keyframes([style({ transform: `translateX(${-offset}px)` })]))]);
    }
    changeNavbarMenuItems(isCollapsedMedia, navbarItems, label) {
        if (isCollapsedMedia) {
            this.applicationMenu.menus = [{ label, subItems: navbarItems, id: this.id }, ...this.applicationMenu.menus];
        }
        else {
            this.applicationMenu.menus = this.applicationMenu.menus.filter(m => m.id !== this.id);
        }
        this.isNavbarUpdateMenu = true;
        this.changeDetector.detectChanges();
    }
    calculateLeftNavigation() {
        let calculatedOffset;
        this.navbarItems.allNavbarItems.some(navbarItem => {
            const navbarItemOffset = navbarItem.nativeElement.offsetLeft;
            const navbarItemWidth = navbarItem.nativeElement.offsetWidth;
            if (navbarItemOffset >= this.offset) {
                calculatedOffset = navbarItemOffset - (this.navbarItemsWidth() - navbarItemWidth);
                return true;
            }
        });
        return calculatedOffset;
    }
    calculateRightNavigation(itemBreakPoint) {
        let calculatedOffset;
        this.navbarItems.allNavbarItems.some(navbarItem => {
            const offsetLeft = navbarItem.nativeElement.offsetLeft;
            const finalPosition = navbarItem.nativeElement.offsetWidth + offsetLeft;
            if (itemBreakPoint < finalPosition) {
                calculatedOffset = offsetLeft;
                return true;
            }
        });
        return calculatedOffset;
    }
    displayItemsNavigation() {
        this.showItemsNavigation = this.navbarItemsWidth() < this.allNavbarItemsWidth() + poNavbarNavigationWidth;
        this.changeDetector.detectChanges();
        if (this.offset !== 0) {
            this.setOffsetToZero();
            this.animate(this.offset);
        }
    }
    initNavbarMenu() {
        this.mediaQuery = window.matchMedia(poNavbarMatchMedia);
        if (this.isCollapsedMedia) {
            this.changeNavbarMenuItems(true, this.items, this.literals.navbarLinks);
        }
        this.validateMenuLogo();
        this.mediaQuery.addListener(this.onMediaQueryChange);
    }
    navbarItemsWidth() {
        return this.navbarItemsElement.nativeElement.offsetWidth;
    }
    navigateLeft() {
        this.disableRight = false;
        this.offset = this.calculateLeftNavigation();
        if (this.offset < 0) {
            this.setOffsetToZero();
        }
    }
    navigateRight() {
        const maxAllowedOffset = this.allNavbarItemsWidth() - this.navbarItemsWidth();
        const itemBreakPoint = this.offset + this.navbarItemsWidth();
        this.offset = this.calculateRightNavigation(itemBreakPoint);
        this.validateMaxOffset(maxAllowedOffset);
    }
    setOffsetToZero() {
        this.offset = 0;
    }
    validateMaxOffset(maxAllowedOffset) {
        if (this.offset >= maxAllowedOffset) {
            this.offset = maxAllowedOffset;
            this.disableRight = true;
        }
    }
}
PoNavbarComponent.ɵfac = function PoNavbarComponent_Factory(t) { return new (t || PoNavbarComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.AnimationBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.PoMenuGlobalService)); };
PoNavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarComponent, selectors: [["po-navbar"]], viewQuery: function PoNavbarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoNavbarItemsComponent, 7, ElementRef);
        i0.ɵɵviewQuery(PoNavbarItemsComponent, 7);
        i0.ɵɵviewQuery(PoMenuComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbarItemsElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbarItems = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuComponent = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 12, consts: [[1, "po-navbar", 3, "ngClass"], [1, "po-navbar-logo", 3, "ngClass", "p-logo"], [1, "po-navbar-items", 3, "p-items"], ["class", "po-navbar-item-navigation", 3, "p-disable-left", "p-disable-right", "p-click", 4, "ngIf"], [1, "po-navbar-actions", 3, "p-icon-actions"], [3, "p-menus", 4, "ngIf"], [1, "po-navbar-item-navigation", 3, "p-disable-left", "p-disable-right", "p-click"], [3, "p-menus"]], template: function PoNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0);
        i0.ɵɵelement(1, "po-navbar-logo", 1)(2, "po-navbar-items", 2);
        i0.ɵɵtemplate(3, PoNavbarComponent_po_navbar_item_navigation_3_Template, 1, 2, "po-navbar-item-navigation", 3);
        i0.ɵɵelement(4, "po-navbar-actions", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PoNavbarComponent_po_menu_5_Template, 1, 1, "po-menu", 5);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.shadow));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c1, !!ctx.applicationMenu, !ctx.logo))("p-logo", ctx.logo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-items", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showItemsNavigation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-icon-actions", ctx.iconActions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.applicationMenu);
    } }, dependencies: [i4.NgClass, i4.NgIf, i5.PoNavbarActionsComponent, i6.PoNavbarItemsComponent, i7.PoNavbarItemNavigationComponent, i8.PoMenuComponent, i9.PoNavbarLogoComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar', template: "<header class=\"po-navbar\" [ngClass]=\"{ 'po-navbar-shadow': shadow }\">\r\n  <po-navbar-logo\r\n    class=\"po-navbar-logo\"\r\n    [ngClass]=\"{ 'po-navbar-logo-menu': !!applicationMenu, 'po-navbar-no-logo': !logo }\"\r\n    [p-logo]=\"logo\"\r\n  >\r\n  </po-navbar-logo>\r\n\r\n  <po-navbar-items class=\"po-navbar-items\" [p-items]=\"items\"> </po-navbar-items>\r\n\r\n  <po-navbar-item-navigation\r\n    *ngIf=\"showItemsNavigation\"\r\n    class=\"po-navbar-item-navigation\"\r\n    [p-disable-left]=\"navbarItemNavigationDisableLeft\"\r\n    [p-disable-right]=\"navbarItemNavigationDisableRight\"\r\n    (p-click)=\"navigateItems($event)\"\r\n  >\r\n  </po-navbar-item-navigation>\r\n\r\n  <po-navbar-actions class=\"po-navbar-actions\" [p-icon-actions]=\"iconActions\"> </po-navbar-actions>\r\n</header>\r\n\r\n<po-menu *ngIf=\"!applicationMenu\" [p-menus]=\"items\"> </po-menu>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }, { type: i0.Renderer2 }, { type: i2.AnimationBuilder }, { type: i0.ChangeDetectorRef }, { type: i3.PoMenuGlobalService }]; }, { navbarItemsElement: [{
            type: ViewChild,
            args: [PoNavbarItemsComponent, { read: ElementRef, static: true }]
        }], navbarItems: [{
            type: ViewChild,
            args: [PoNavbarItemsComponent, { static: true }]
        }], menuComponent: [{
            type: ViewChild,
            args: [PoMenuComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1uYXZiYXIvcG8tbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1uYXZiYXIvcG8tbmF2YmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUF1RCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckgsT0FBTyxFQUFFLEtBQUssRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7Ozs7Ozs7O0lDYm5GLG9EQU1DO0lBREMsaU5BQVcsZUFBQSw0QkFBcUIsQ0FBQSxJQUFDO0lBRW5DLGlCQUE0Qjs7O0lBSjFCLHVFQUFrRCw0REFBQTs7O0lBU3RELDZCQUErRDs7O0lBQTdCLHNDQUFpQjs7OztBREduRCxNQUFNLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztBQUNuQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUM5QixNQUFNLGtCQUFrQixHQUFHLGVBQWUsaUJBQWlCLEtBQUssQ0FBQztBQUNqRSxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFFcEM7O0dBRUc7QUFLSCxNQUFNLE9B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QkFBZ0IsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7O2tGQXpQVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjt1QkFDakIsc0JBQXNCLEtBQVUsVUFBVTt1QkFFMUMsc0JBQXNCO3VCQThCdEIsZUFBZTs7Ozs7OztRQ3RFNUIsaUNBQXFFO1FBQ25FLG9DQUtpQix5QkFBQTtRQUlqQiw4R0FPNEI7UUFFNUIsdUNBQWlHO1FBQ25HLGlCQUFTO1FBRVQsMEVBQStEOztRQXRCckMsZ0VBQTBDO1FBR2hFLGVBQW9GO1FBQXBGLHNGQUFvRixvQkFBQTtRQUs3QyxlQUFpQjtRQUFqQixtQ0FBaUI7UUFHdkQsZUFBeUI7UUFBekIsOENBQXlCO1FBUWlCLGVBQThCO1FBQTlCLGdEQUE4QjtRQUduRSxlQUFzQjtRQUF0QiwyQ0FBc0I7O3VGRGVuQixpQkFBaUI7Y0FKN0IsU0FBUzsyQkFDRSxXQUFXOzZMQUlrRCxrQkFBa0I7a0JBQXhGLFNBQVM7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFaEIsV0FBVztrQkFBL0QsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUE4Qm5CLGFBQWE7a0JBQTVDLFNBQVM7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uRmFjdG9yeSwgQW5pbWF0aW9uUGxheWVyLCBrZXlmcmFtZXMsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvTWVudUdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi9wby1tZW51L3NlcnZpY2VzL3BvLW1lbnUtZ2xvYmFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb01lbnVJdGVtIH0gZnJvbSAnLi4vcG8tbWVudS9wby1tZW51LWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9NZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vcG8tbWVudS9wby1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBQb05hdmJhckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLW5hdmJhci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTmF2YmFySXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1uYXZiYXItaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb05hdmJhckl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9wby1uYXZiYXItaXRlbXMvcG8tbmF2YmFyLWl0ZW1zLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwb05hdmJhck5hdmlnYXRpb25XaWR0aCA9IDg4O1xyXG5jb25zdCBwb05hdmJhck1lbnVNZWRpYSA9IDc2ODtcclxuY29uc3QgcG9OYXZiYXJNYXRjaE1lZGlhID0gYChtYXgtd2lkdGg6ICR7cG9OYXZiYXJNZW51TWVkaWF9cHgpYDtcclxuY29uc3QgcG9OYXZiYXJUaW1pbmcgPSAnMjUwbXMgZWFzZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvTmF2YmFyQmFzZUNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1uYXZiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1uYXZiYXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckNvbXBvbmVudCBleHRlbmRzIFBvTmF2YmFyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFBvTmF2YmFySXRlbXNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIG5hdmJhckl0ZW1zRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZChQb05hdmJhckl0ZW1zQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZiYXJJdGVtczogUG9OYXZiYXJJdGVtc0NvbXBvbmVudDtcclxuXHJcbiAgZGlzYWJsZVJpZ2h0OiBib29sZWFuO1xyXG4gIHNob3dJdGVtc05hdmlnYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHdpbmRvd1Jlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIF9tZW51Q29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIGlzTmF2YmFyVXBkYXRlTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaWQgPSB1dWlkKCk7XHJcbiAgcHJpdmF0ZSBtZWRpYVF1ZXJ5OiBhbnk7XHJcbiAgcHJpdmF0ZSBvZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBwbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcclxuICBwcml2YXRlIG1lbnVJdGVtczogQXJyYXk8UG9NZW51SXRlbT47XHJcbiAgcHJpdmF0ZSBwcmV2aW91c01lbnVDb21wb25lbnRJZDtcclxuICBwcml2YXRlIHByZXZpb3VzTWVudXNJdGVtcyA9IFtdO1xyXG5cclxuICBwcml2YXRlIGFwcGxpY2F0aW9uTWVudVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgbWVudXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHJlbW92ZWRNZW51U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGdldCBuYXZiYXJJdGVtTmF2aWdhdGlvbkRpc2FibGVMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ID09PSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hdmJhckl0ZW1OYXZpZ2F0aW9uRGlzYWJsZVJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZVJpZ2h0ICYmIHRoaXMub2Zmc2V0ICE9PSAwO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZChQb01lbnVDb21wb25lbnQpIHNldCBtZW51Q29tcG9uZW50KG1lbnU6IFBvTWVudUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5fbWVudUNvbXBvbmVudCA9IG1lbnU7XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c01lbnVDb21wb25lbnRJZCA9IG1lbnU/LmlkIHx8IHRoaXMucHJldmlvdXNNZW51Q29tcG9uZW50SWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0NvbGxhcHNlZE1lZGlhKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgcG9OYXZiYXJNZW51TWVkaWE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBvTGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBtZW51R2xvYmFsU2VydmljZTogUG9NZW51R2xvYmFsU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocG9MYW5ndWFnZVNlcnZpY2UpO1xyXG4gICAgdGhpcy53aW5kb3dSZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuZGlzcGxheUl0ZW1zTmF2aWdhdGlvbi5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gbmVjZXNzw6FyaW8gcGFyYSBxdWFuZG8gbyBtZW51IGRhIGFwbGljYcOnw6NvIGNhcnJlZ2FyIG9zIGl0ZW5zIGxhenkgZSBuYXZiYXIgZXN0aXZlciBjb2xhcHNhZG8sXHJcbiAgICAvLyBxdWFuZG8gaXNzbyBhY29udGVjZSwgbyBuYXZiYXIgaW5jbHVpIDEgaXRlbSBkZSBtZW51IFwiTmF2YmFyIGxpbmtzXCIsIHBvcnRhbnRvIMOpIHJlbW92aWRvIHF1YW5kb1xyXG4gICAgLy8gb3Mgbm92b3MgaXRlbnMgZGUgbWVudSDDqSBjYXJyZWdhZG8sIGEgcGFydGlyIGRpc3NvIGVzdGUgdHJhdGFtZW50byDDqSBuZWNlc3NhcmlvIHBhcmEgaW5jbHVpclxyXG4gICAgLy8gbyBuYXZiYXIgbGlua3MgYXBvcyBhIGFkacOnw6NvIGRvcyBpdGVucyBkZSBtZW51IGRhIGFwbGljYcOnw6NvLlxyXG4gICAgdGhpcy5tZW51c1N1YnNjcmlwdGlvbiA9IHRoaXMubWVudUdsb2JhbFNlcnZpY2UucmVjZWl2ZU1lbnVzJC5zdWJzY3JpYmUobmV3TWVudXMgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2aW91c01lbnVzaUlzTmF2YmFyTGlua3MgPVxyXG4gICAgICAgIHRoaXMucHJldmlvdXNNZW51c0l0ZW1zPy5sZW5ndGggPT09IDEgJiYgdGhpcy5wcmV2aW91c01lbnVzSXRlbXNbMF0uaWQgPT09IHRoaXMuaWQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbk1lbnUgJiYgdGhpcy5pc0NvbGxhcHNlZE1lZGlhICYmIHRoaXMuaXNOYXZiYXJVcGRhdGVNZW51ICYmIHByZXZpb3VzTWVudXNpSXNOYXZiYXJMaW5rcykge1xyXG4gICAgICAgIHRoaXMuaXNOYXZiYXJVcGRhdGVNZW51ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25NZW51Lm1lbnVzID0gW1xyXG4gICAgICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5uYXZiYXJMaW5rcywgc3ViSXRlbXM6IHRoaXMuaXRlbXMsIGlkOiB0aGlzLmlkIH0sXHJcbiAgICAgICAgICAuLi5uZXdNZW51c1xyXG4gICAgICAgIF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaXNOYXZiYXJVcGRhdGVNZW51ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucHJldmlvdXNNZW51c0l0ZW1zID0gbmV3TWVudXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZWRNZW51U3Vic2NyaXB0aW9uID0gdGhpcy5tZW51R2xvYmFsU2VydmljZS5yZWNlaXZlUmVtb3ZlZEFwcGxpY2F0aW9uTWVudSQuc3Vic2NyaWJlKHJlbW92ZWRNZW51SWQgPT4ge1xyXG4gICAgICAvLyB2ZXJpZmljYSBzZSBvIG1lbnUgcmVtb3ZpZG8gZm9pIG8gcHJlc2VudGUgbm8gbmF2YmFyLCBjYXNvIHNpbSwgZWxlIG1hbnRlbSBvIGFwcGxpY3Rpb25NZW51LlxyXG4gICAgICAvLyDDqSBwcmVjaXNvIHBhcmEgdHJhdGFyIGEgc2VxdWVuY2lhIGRvIG5nRGVzdHJveSwgcXVhbmRvIG8gbWVudSBkbyBuYXZiYXIgZXJhIHJlbW92aWRvIGRvIERPTVxyXG4gICAgICAvLyBkaXNwYXJhdmEgZXNzZSBldmVudG8sIHNlbmRvIG5lY2Vzc2FyaW8gdHJhdGFyLCBwYXJhIG7Do28gdG9ybmFyIGluZGVmaW5pZG8gbyBhcHBsaWNhdGlvbk1lbnVcclxuICAgICAgdGhpcy5hcHBsaWNhdGlvbk1lbnUgPVxyXG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25NZW51ICYmIHRoaXMucHJldmlvdXNNZW51Q29tcG9uZW50SWQgPT09IHJlbW92ZWRNZW51SWQgPyB0aGlzLmFwcGxpY2F0aW9uTWVudSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmFwcGxpY2F0aW9uTWVudSAmJiB0aGlzLm1lZGlhUXVlcnkpIHtcclxuICAgICAgICB0aGlzLm1lZGlhUXVlcnkucmVtb3ZlTGlzdGVuZXIodGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uTWVudVN1YnNjcmlwdGlvbiA9IHRoaXMubWVudUdsb2JhbFNlcnZpY2UucmVjZWl2ZUFwcGxpY2F0aW9uTWVudSRcclxuICAgICAgLnBpcGUoZGVsYXkoMTAwKSlcclxuICAgICAgLnN1YnNjcmliZShuZXdNZW51ID0+IHtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uTWVudSA9IHRoaXMucHJldmlvdXNNZW51Q29tcG9uZW50SWQgPT09IG5ld01lbnUuaWQgPyB1bmRlZmluZWQgOiBuZXdNZW51O1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb25NZW51KSB7XHJcbiAgICAgICAgICB0aGlzLmluaXROYXZiYXJNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZGlzcGxheUl0ZW1zTmF2aWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5tZWRpYVF1ZXJ5KSB7XHJcbiAgICAgIHRoaXMubWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVkTWVudVN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuYXBwbGljYXRpb25NZW51U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5tZW51c1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlSXRlbXMob3JpZW50YXRpb246IHN0cmluZykge1xyXG4gICAgb3JpZW50YXRpb24gPT09ICdsZWZ0JyA/IHRoaXMubmF2aWdhdGVMZWZ0KCkgOiB0aGlzLm5hdmlnYXRlUmlnaHQoKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGUodGhpcy5vZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlTWVudUxvZ28oKSB7XHJcbiAgICBpZiAodGhpcy5hcHBsaWNhdGlvbk1lbnUubG9nbyAmJiB0aGlzLmxvZ28pIHtcclxuICAgICAgdGhpcy5hcHBsaWNhdGlvbk1lbnUubG9nbyA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFsbE5hdmJhckl0ZW1zV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZiYXJJdGVtcy5hbGxOYXZiYXJJdGVtcy5yZWR1Y2UoXHJcbiAgICAgIChwcmV2aW91czogYW55LCBjdXJyZW50OiBhbnkpID0+IHByZXZpb3VzICsgY3VycmVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlKG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBhbmltYXRpb246IEFuaW1hdGlvbkZhY3RvcnkgPSB0aGlzLmJ1aWxkVHJhbnNpdGlvbkFuaW1hdGlvbihvZmZzZXQpO1xyXG5cclxuICAgIHRoaXMucGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLm5hdmJhckl0ZW1zLm5hdmJhckl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5wbGF5ZXIucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRyYW5zaXRpb25BbmltYXRpb24ob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoW2FuaW1hdGUocG9OYXZiYXJUaW1pbmcsIGtleWZyYW1lcyhbc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7LW9mZnNldH1weClgIH0pXSkpXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZU5hdmJhck1lbnVJdGVtcyhpc0NvbGxhcHNlZE1lZGlhOiBhbnksIG5hdmJhckl0ZW1zOiBBcnJheTxQb05hdmJhckl0ZW0+LCBsYWJlbDogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNDb2xsYXBzZWRNZWRpYSkge1xyXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uTWVudS5tZW51cyA9IFt7IGxhYmVsLCBzdWJJdGVtczogbmF2YmFySXRlbXMsIGlkOiB0aGlzLmlkIH0sIC4uLnRoaXMuYXBwbGljYXRpb25NZW51Lm1lbnVzXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXBwbGljYXRpb25NZW51Lm1lbnVzID0gdGhpcy5hcHBsaWNhdGlvbk1lbnUubWVudXMuZmlsdGVyKG0gPT4gbS5pZCAhPT0gdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc05hdmJhclVwZGF0ZU1lbnUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVMZWZ0TmF2aWdhdGlvbigpIHtcclxuICAgIGxldCBjYWxjdWxhdGVkT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgdGhpcy5uYXZiYXJJdGVtcy5hbGxOYXZiYXJJdGVtcy5zb21lKG5hdmJhckl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBuYXZiYXJJdGVtT2Zmc2V0ID0gbmF2YmFySXRlbS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IG5hdmJhckl0ZW1XaWR0aCA9IG5hdmJhckl0ZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIGlmIChuYXZiYXJJdGVtT2Zmc2V0ID49IHRoaXMub2Zmc2V0KSB7XHJcbiAgICAgICAgY2FsY3VsYXRlZE9mZnNldCA9IG5hdmJhckl0ZW1PZmZzZXQgLSAodGhpcy5uYXZiYXJJdGVtc1dpZHRoKCkgLSBuYXZiYXJJdGVtV2lkdGgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVkT2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVSaWdodE5hdmlnYXRpb24oaXRlbUJyZWFrUG9pbnQ6IG51bWJlcikge1xyXG4gICAgbGV0IGNhbGN1bGF0ZWRPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICB0aGlzLm5hdmJhckl0ZW1zLmFsbE5hdmJhckl0ZW1zLnNvbWUobmF2YmFySXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBuYXZiYXJJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3QgZmluYWxQb3NpdGlvbiA9IG5hdmJhckl0ZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIG9mZnNldExlZnQ7XHJcblxyXG4gICAgICBpZiAoaXRlbUJyZWFrUG9pbnQgPCBmaW5hbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlZE9mZnNldCA9IG9mZnNldExlZnQ7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZWRPZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BsYXlJdGVtc05hdmlnYXRpb24oKSB7XHJcbiAgICB0aGlzLnNob3dJdGVtc05hdmlnYXRpb24gPSB0aGlzLm5hdmJhckl0ZW1zV2lkdGgoKSA8IHRoaXMuYWxsTmF2YmFySXRlbXNXaWR0aCgpICsgcG9OYXZiYXJOYXZpZ2F0aW9uV2lkdGg7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0T2Zmc2V0VG9aZXJvKCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLm9mZnNldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXROYXZiYXJNZW51KCkge1xyXG4gICAgdGhpcy5tZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEocG9OYXZiYXJNYXRjaE1lZGlhKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZE1lZGlhKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlTmF2YmFyTWVudUl0ZW1zKHRydWUsIHRoaXMuaXRlbXMsIHRoaXMubGl0ZXJhbHMubmF2YmFyTGlua3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsaWRhdGVNZW51TG9nbygpO1xyXG5cclxuICAgIHRoaXMubWVkaWFRdWVyeS5hZGRMaXN0ZW5lcih0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmJhckl0ZW1zV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZiYXJJdGVtc0VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGVMZWZ0KCkge1xyXG4gICAgdGhpcy5kaXNhYmxlUmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuY2FsY3VsYXRlTGVmdE5hdmlnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5vZmZzZXQgPCAwKSB7XHJcbiAgICAgIHRoaXMuc2V0T2Zmc2V0VG9aZXJvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmlnYXRlUmlnaHQoKSB7XHJcbiAgICBjb25zdCBtYXhBbGxvd2VkT2Zmc2V0ID0gdGhpcy5hbGxOYXZiYXJJdGVtc1dpZHRoKCkgLSB0aGlzLm5hdmJhckl0ZW1zV2lkdGgoKTtcclxuICAgIGNvbnN0IGl0ZW1CcmVha1BvaW50ID0gdGhpcy5vZmZzZXQgKyB0aGlzLm5hdmJhckl0ZW1zV2lkdGgoKTtcclxuXHJcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuY2FsY3VsYXRlUmlnaHROYXZpZ2F0aW9uKGl0ZW1CcmVha1BvaW50KTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTWF4T2Zmc2V0KG1heEFsbG93ZWRPZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1lZGlhUXVlcnlDaGFuZ2UgPSBjaGFuZ2VkID0+IHtcclxuICAgIHRoaXMuY2hhbmdlTmF2YmFyTWVudUl0ZW1zKGNoYW5nZWQubWF0Y2hlcywgdGhpcy5pdGVtcywgdGhpcy5saXRlcmFscy5uYXZiYXJMaW5rcyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRPZmZzZXRUb1plcm8oKSB7XHJcbiAgICB0aGlzLm9mZnNldCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlTWF4T2Zmc2V0KG1heEFsbG93ZWRPZmZzZXQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMub2Zmc2V0ID49IG1heEFsbG93ZWRPZmZzZXQpIHtcclxuICAgICAgdGhpcy5vZmZzZXQgPSBtYXhBbGxvd2VkT2Zmc2V0O1xyXG4gICAgICB0aGlzLmRpc2FibGVSaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxoZWFkZXIgY2xhc3M9XCJwby1uYXZiYXJcIiBbbmdDbGFzc109XCJ7ICdwby1uYXZiYXItc2hhZG93Jzogc2hhZG93IH1cIj5cclxuICA8cG8tbmF2YmFyLWxvZ29cclxuICAgIGNsYXNzPVwicG8tbmF2YmFyLWxvZ29cIlxyXG4gICAgW25nQ2xhc3NdPVwieyAncG8tbmF2YmFyLWxvZ28tbWVudSc6ICEhYXBwbGljYXRpb25NZW51LCAncG8tbmF2YmFyLW5vLWxvZ28nOiAhbG9nbyB9XCJcclxuICAgIFtwLWxvZ29dPVwibG9nb1wiXHJcbiAgPlxyXG4gIDwvcG8tbmF2YmFyLWxvZ28+XHJcblxyXG4gIDxwby1uYXZiYXItaXRlbXMgY2xhc3M9XCJwby1uYXZiYXItaXRlbXNcIiBbcC1pdGVtc109XCJpdGVtc1wiPiA8L3BvLW5hdmJhci1pdGVtcz5cclxuXHJcbiAgPHBvLW5hdmJhci1pdGVtLW5hdmlnYXRpb25cclxuICAgICpuZ0lmPVwic2hvd0l0ZW1zTmF2aWdhdGlvblwiXHJcbiAgICBjbGFzcz1cInBvLW5hdmJhci1pdGVtLW5hdmlnYXRpb25cIlxyXG4gICAgW3AtZGlzYWJsZS1sZWZ0XT1cIm5hdmJhckl0ZW1OYXZpZ2F0aW9uRGlzYWJsZUxlZnRcIlxyXG4gICAgW3AtZGlzYWJsZS1yaWdodF09XCJuYXZiYXJJdGVtTmF2aWdhdGlvbkRpc2FibGVSaWdodFwiXHJcbiAgICAocC1jbGljayk9XCJuYXZpZ2F0ZUl0ZW1zKCRldmVudClcIlxyXG4gID5cclxuICA8L3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24+XHJcblxyXG4gIDxwby1uYXZiYXItYWN0aW9ucyBjbGFzcz1cInBvLW5hdmJhci1hY3Rpb25zXCIgW3AtaWNvbi1hY3Rpb25zXT1cImljb25BY3Rpb25zXCI+IDwvcG8tbmF2YmFyLWFjdGlvbnM+XHJcbjwvaGVhZGVyPlxyXG5cclxuPHBvLW1lbnUgKm5nSWY9XCIhYXBwbGljYXRpb25NZW51XCIgW3AtbWVudXNdPVwiaXRlbXNcIj4gPC9wby1tZW51PlxyXG4iXX0=