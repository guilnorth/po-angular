import { OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PoMenuPanelBaseComponent } from './po-menu-panel-base.component';
import { PoMenuPanelItem } from './po-menu-panel-item/po-menu-panel-item.interface';
import { PoMenuPanelItemsService } from './services/po-menu-panel-items.service';
import * as i0 from "@angular/core";
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
export declare class PoMenuPanelComponent extends PoMenuPanelBaseComponent implements OnDestroy, OnInit {
    private location;
    private menuItemsService;
    private router;
    activeMenuItem: PoMenuPanelItem;
    linkActive: string;
    private routeSubscription;
    private itemSubscription;
    constructor(viewRef: ViewContainerRef, location: Location, menuItemsService: PoMenuPanelItemsService, router: Router);
    ngOnDestroy(): void;
    ngOnInit(): void;
    private activateMenuByUrl;
    private activateMenuItem;
    private checkActiveMenuByUrl;
    private clickMenuItem;
    private subscribeToRoute;
    private subscribeToMenuItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoMenuPanelComponent, "po-menu-panel", never, {}, {}, never, never, false>;
}
