import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PoMenuPanelItemInternal } from './po-menu-panel-item-internal.interface';
import { PoMenuPanelItemsService } from '../services/po-menu-panel-items.service';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que implementa cada item do po-menu-panel.
 */
export declare class PoMenuPanelItemComponent implements OnDestroy, OnInit {
    private menuItemsService;
    menuItemInternal: PoMenuPanelItemInternal;
    itemsSubscription: Subscription;
    constructor(menuItemsService: PoMenuPanelItemsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    clickMenuItem(event: any): void;
    private activateMenu;
    private processMenuItem;
    private subscribeMenuClickedFromParent;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuPanelItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoMenuPanelItemComponent, "po-menu-panel-item", never, { "menuItemInternal": "p-menu-item-internal"; }, {}, never, never, false>;
}
