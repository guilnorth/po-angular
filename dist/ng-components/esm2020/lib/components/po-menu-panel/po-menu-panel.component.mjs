import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { getFormattedLink, openExternalLink } from '../../utils/util';
import { PoMenuPanelBaseComponent } from './po-menu-panel-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./services/po-menu-panel-items.service";
import * as i3 from "@angular/router";
import * as i4 from "./po-menu-panel-item/po-menu-panel-item.component";
function PoMenuPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "po-menu-panel-item", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const menuIndex_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-menu-panel-item-first", menuIndex_r2 === 0);
    i0.ɵɵproperty("p-menu-item-internal", menu_r1);
} }
/**
 * @docsExtends PoMenuPanelBaseComponent
 *
 * @description
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
 * <example name="po-menu-panel-basic" title="PO Menu Panel Basic">
 *   <file name="sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"> </file>
 *   <file name="sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-menu-panel-labs" title="PO Menu Panel Labs">
 *   <file name="sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"> </file>
 *   <file name="sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-menu-panel-customer" title="PO Menu Panel - Customers">
 *   <file name="sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"> </file>
 *   <file name="sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"> </file>
 * </example>
 */
export class PoMenuPanelComponent extends PoMenuPanelBaseComponent {
    constructor(viewRef, location, menuItemsService, router) {
        super();
        this.location = location;
        this.menuItemsService = menuItemsService;
        this.router = router;
    }
    ngOnDestroy() {
        this.itemSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToMenuItem();
        this.subscribeToRoute();
    }
    activateMenuByUrl(urlPath, menus) {
        if (menus) {
            return menus.some(menu => {
                if (getFormattedLink(menu.link) === urlPath) {
                    this.activateMenuItem(menu);
                    return true;
                }
            });
        }
    }
    activateMenuItem(menu) {
        this.activeMenuItem = menu;
        this.linkActive = getFormattedLink(menu.link);
        this.menuItemsService.sendToChildMenuClicked({ active: this.activeMenuItem, activatedByRoute: true });
    }
    checkActiveMenuByUrl(urlPath) {
        if (!this.linkActive || this.linkActive !== urlPath) {
            this.activateMenuByUrl(urlPath, this.menus);
        }
    }
    clickMenuItem(menu) {
        if (menu.action) {
            menu.action(menu);
        }
        if (menu.type === 'externalLink') {
            openExternalLink(menu.link);
        }
        else if (menu.type === 'internalLink') {
            this.activateMenuItem(menu);
        }
    }
    subscribeToRoute() {
        this.routeSubscription = this.router.events.subscribe(rounterEvent => {
            if (rounterEvent instanceof NavigationEnd) {
                this.checkActiveMenuByUrl(this.location.path());
            }
        });
    }
    subscribeToMenuItem() {
        this.itemSubscription = this.menuItemsService
            .receiveFromChildMenuClicked()
            .subscribe((menu) => this.clickMenuItem(menu));
    }
}
PoMenuPanelComponent.ɵfac = function PoMenuPanelComponent_Factory(t) { return new (t || PoMenuPanelComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.Location), i0.ɵɵdirectiveInject(i2.PoMenuPanelItemsService), i0.ɵɵdirectiveInject(i3.Router)); };
PoMenuPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMenuPanelComponent, selectors: [["po-menu-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 2, consts: [[1, "po-menu-panel"], [1, "po-menu-panel-logo-container"], ["href", "./"], ["alt", "main-logo", 1, "po-menu-panel-logo", 3, "src"], [1, "po-menu-panel-container"], [1, "po-menu-panel-inner"], ["class", "po-menu-panel-item-wrapper", 4, "ngFor", "ngForOf"], [1, "po-menu-panel-item-wrapper"], [3, "p-menu-item-internal"]], template: function PoMenuPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "nav", 4)(5, "div", 5);
        i0.ɵɵtemplate(6, PoMenuPanelComponent_div_6_Template, 2, 3, "div", 6);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("src", ctx.logo, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.menus);
    } }, dependencies: [i1.NgForOf, i4.PoMenuPanelItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuPanelComponent, [{
        type: Component,
        args: [{ selector: 'po-menu-panel', template: "<div class=\"po-menu-panel\">\r\n  <div class=\"po-menu-panel-logo-container\">\r\n    <a href=\"./\">\r\n      <img class=\"po-menu-panel-logo\" alt=\"main-logo\" [src]=\"logo\" />\r\n    </a>\r\n  </div>\r\n\r\n  <nav class=\"po-menu-panel-container\">\r\n    <div class=\"po-menu-panel-inner\">\r\n      <div *ngFor=\"let menu of menus; let menuIndex = index\" class=\"po-menu-panel-item-wrapper\">\r\n        <po-menu-panel-item [class.po-menu-panel-item-first]=\"menuIndex === 0\" [p-menu-item-internal]=\"menu\">\r\n        </po-menu-panel-item>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.Location }, { type: i2.PoMenuPanelItemsService }, { type: i3.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbWVudS1wYW5lbC9wby1tZW51LXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51LXBhbmVsL3BvLW1lbnUtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBSXhELE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ0NwRSw4QkFBMEY7SUFDeEYsd0NBQ3FCO0lBQ3ZCLGlCQUFNOzs7O0lBRmdCLGVBQWtEO0lBQWxELDhEQUFrRDtJQUFDLDhDQUE2Qjs7QURHNUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtFRztBQU1ILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7SUFPaEUsWUFDRSxPQUF5QixFQUNqQixRQUFrQixFQUNsQixnQkFBeUMsRUFDekMsTUFBYztRQUV0QixLQUFLLEVBQUUsQ0FBQztRQUpBLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBR3hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxPQUFlLEVBQUUsS0FBNkI7UUFDdEUsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sRUFBRTtvQkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixPQUFPLElBQUksQ0FBQztpQkFDYjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsSUFBcUI7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRU8sb0JBQW9CLENBQUMsT0FBZTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTtZQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTyxhQUFhLENBQUMsSUFBNkI7UUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDaEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDbkUsSUFBSSxZQUFZLFlBQVksYUFBYSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQzFDLDJCQUEyQixFQUFFO2FBQzdCLFNBQVMsQ0FBQyxDQUFDLElBQTZCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzt3RkF6RVUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNyRmpDLDhCQUEyQixhQUFBLFdBQUE7UUFHckIseUJBQStEO1FBQ2pFLGlCQUFJLEVBQUE7UUFHTiw4QkFBcUMsYUFBQTtRQUVqQyxxRUFHTTtRQUNSLGlCQUFNLEVBQUEsRUFBQTs7UUFWNEMsZUFBWTtRQUFaLGdEQUFZO1FBTXRDLGVBQVU7UUFBVixtQ0FBVTs7dUZENEV6QixvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGNhbGxGdW5jdGlvbiwgZ2V0Rm9ybWF0dGVkTGluaywgb3BlbkV4dGVybmFsTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9NZW51UGFuZWxCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1tZW51LXBhbmVsLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9NZW51UGFuZWxJdGVtIH0gZnJvbSAnLi9wby1tZW51LXBhbmVsLWl0ZW0vcG8tbWVudS1wYW5lbC1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTWVudVBhbmVsSXRlbUludGVybmFsIH0gZnJvbSAnLi9wby1tZW51LXBhbmVsLWl0ZW0vcG8tbWVudS1wYW5lbC1pdGVtLWludGVybmFsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTWVudVBhbmVsSXRlbXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1tZW51LXBhbmVsLWl0ZW1zLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb01lbnVQYW5lbEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFBhcmEgbyBtZW51IGZ1bmNpb25hciBjb3JyZXRhbWVudGUgw6kgbmVjZXNzw6FyaW8gaW1wb3J0YXIgbyBgUm91dGVyTW9kdWxlYCBlIGBSb3V0ZXNgIGRvIG3Ds2R1bG8gcHJpbmNpcGFsIGRlXHJcbiAqICBzdWEgYXBsaWNhw6fDo286XHJcbiAqXHJcbiAqIGBgYGBcclxuICogaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAqICAgICBSb3V0ZXMsXHJcbiAqICAgICAuLi5cclxuICogICAgIFBvTW9kdWxlLFxyXG4gKiAgICAgLi4uXHJcbiAqICAgXSxcclxuICogICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgIEFwcENvbXBvbmVudFxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXSxcclxuICogICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBbMOpbSBkaXNzbyDDqSBuZWNlc3PDoXJpbyBjcmlhciB1bSBtw7NkdWxvIGNvbmZpZ3VyYW5kbyBhcyByb3RhcyBkYSBhcGxpY2HDp8Ojby5cclxuICpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqXHJcbiAqIGltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuICpcclxuICogaW1wb3J0IHsgSGVsbG9Xb3JsZENvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8td29ybGQvaGVsbG8td29ybGQuY29tcG9uZW50JztcclxuICpcclxuICogY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAqICAge3BhdGg6ICdoZWxsby13b3JsZCcsIGNvbXBvbmVudDogSGVsbG9Xb3JsZENvbXBvbmVudH1cclxuICogXTtcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7dXNlSGFzaDogdHJ1ZX0pXSxcclxuICogICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW1lbnUtcGFuZWwtYmFzaWNcIiB0aXRsZT1cIlBPIE1lbnUgUGFuZWwgQmFzaWNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1lbnUtcGFuZWwtYmFzaWMvc2FtcGxlLXBvLW1lbnUtcGFuZWwtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1wYW5lbC1iYXNpYy9zYW1wbGUtcG8tbWVudS1wYW5lbC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1tZW51LXBhbmVsLWxhYnNcIiB0aXRsZT1cIlBPIE1lbnUgUGFuZWwgTGFic1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1wYW5lbC1sYWJzL3NhbXBsZS1wby1tZW51LXBhbmVsLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1wYW5lbC1sYWJzL3NhbXBsZS1wby1tZW51LXBhbmVsLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbWVudS1wYW5lbC1jdXN0b21lclwiIHRpdGxlPVwiUE8gTWVudSBQYW5lbCAtIEN1c3RvbWVyc1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbWVudS1wYW5lbC1jdXN0b21lci9zYW1wbGUtcG8tbWVudS1wYW5lbC1jdXN0b21lci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tZW51LXBhbmVsLWN1c3RvbWVyL3NhbXBsZS1wby1tZW51LXBhbmVsLWN1c3RvbWVyLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW1lbnUtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tZW51LXBhbmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9NZW51UGFuZWxDb21wb25lbnQgZXh0ZW5kcyBQb01lbnVQYW5lbEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgYWN0aXZlTWVudUl0ZW06IFBvTWVudVBhbmVsSXRlbTtcclxuICBsaW5rQWN0aXZlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcm91dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGl0ZW1TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIG1lbnVJdGVtc1NlcnZpY2U6IFBvTWVudVBhbmVsSXRlbXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5pdGVtU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9NZW51SXRlbSgpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1JvdXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2YXRlTWVudUJ5VXJsKHVybFBhdGg6IHN0cmluZywgbWVudXM6IEFycmF5PFBvTWVudVBhbmVsSXRlbT4pIHtcclxuICAgIGlmIChtZW51cykge1xyXG4gICAgICByZXR1cm4gbWVudXMuc29tZShtZW51ID0+IHtcclxuICAgICAgICBpZiAoZ2V0Rm9ybWF0dGVkTGluayhtZW51LmxpbmspID09PSB1cmxQYXRoKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlTWVudUl0ZW0obWVudSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZU1lbnVJdGVtKG1lbnU6IFBvTWVudVBhbmVsSXRlbSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVNZW51SXRlbSA9IG1lbnU7XHJcbiAgICB0aGlzLmxpbmtBY3RpdmUgPSBnZXRGb3JtYXR0ZWRMaW5rKG1lbnUubGluayk7XHJcbiAgICB0aGlzLm1lbnVJdGVtc1NlcnZpY2Uuc2VuZFRvQ2hpbGRNZW51Q2xpY2tlZCh7IGFjdGl2ZTogdGhpcy5hY3RpdmVNZW51SXRlbSwgYWN0aXZhdGVkQnlSb3V0ZTogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tBY3RpdmVNZW51QnlVcmwodXJsUGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubGlua0FjdGl2ZSB8fCB0aGlzLmxpbmtBY3RpdmUgIT09IHVybFBhdGgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZU1lbnVCeVVybCh1cmxQYXRoLCB0aGlzLm1lbnVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xpY2tNZW51SXRlbShtZW51OiBQb01lbnVQYW5lbEl0ZW1JbnRlcm5hbCkge1xyXG4gICAgaWYgKG1lbnUuYWN0aW9uKSB7XHJcbiAgICAgIG1lbnUuYWN0aW9uKG1lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZW51LnR5cGUgPT09ICdleHRlcm5hbExpbmsnKSB7XHJcbiAgICAgIG9wZW5FeHRlcm5hbExpbmsobWVudS5saW5rKTtcclxuICAgIH0gZWxzZSBpZiAobWVudS50eXBlID09PSAnaW50ZXJuYWxMaW5rJykge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlTWVudUl0ZW0obWVudSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShyb3VudGVyRXZlbnQgPT4ge1xyXG4gICAgICBpZiAocm91bnRlckV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBY3RpdmVNZW51QnlVcmwodGhpcy5sb2NhdGlvbi5wYXRoKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9NZW51SXRlbSgpIHtcclxuICAgIHRoaXMuaXRlbVN1YnNjcmlwdGlvbiA9IHRoaXMubWVudUl0ZW1zU2VydmljZVxyXG4gICAgICAucmVjZWl2ZUZyb21DaGlsZE1lbnVDbGlja2VkKClcclxuICAgICAgLnN1YnNjcmliZSgobWVudTogUG9NZW51UGFuZWxJdGVtSW50ZXJuYWwpID0+IHRoaXMuY2xpY2tNZW51SXRlbShtZW51KSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1tZW51LXBhbmVsXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLW1lbnUtcGFuZWwtbG9nby1jb250YWluZXJcIj5cclxuICAgIDxhIGhyZWY9XCIuL1wiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwicG8tbWVudS1wYW5lbC1sb2dvXCIgYWx0PVwibWFpbi1sb2dvXCIgW3NyY109XCJsb2dvXCIgLz5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPG5hdiBjbGFzcz1cInBvLW1lbnUtcGFuZWwtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tbWVudS1wYW5lbC1pbm5lclwiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVzOyBsZXQgbWVudUluZGV4ID0gaW5kZXhcIiBjbGFzcz1cInBvLW1lbnUtcGFuZWwtaXRlbS13cmFwcGVyXCI+XHJcbiAgICAgICAgPHBvLW1lbnUtcGFuZWwtaXRlbSBbY2xhc3MucG8tbWVudS1wYW5lbC1pdGVtLWZpcnN0XT1cIm1lbnVJbmRleCA9PT0gMFwiIFtwLW1lbnUtaXRlbS1pbnRlcm5hbF09XCJtZW51XCI+XHJcbiAgICAgICAgPC9wby1tZW51LXBhbmVsLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbjwvZGl2PlxyXG4iXX0=