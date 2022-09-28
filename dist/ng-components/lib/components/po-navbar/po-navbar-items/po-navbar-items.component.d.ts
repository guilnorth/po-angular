import { ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { PoNavbarItem } from '../interfaces/po-navbar-item.interface';
import * as i0 from "@angular/core";
export declare class PoNavbarItemsComponent implements OnInit, OnDestroy {
    private router;
    navbarItemsContainer: ElementRef;
    allNavbarItems: QueryList<any>;
    items: Array<PoNavbarItem>;
    selectedItem: PoNavbarItem;
    private routeSubscription;
    constructor(router: Router);
    ngOnDestroy(): void;
    ngOnInit(): void;
    private checkActiveItemByUrl;
    private checkRouterChildrenFragments;
    private subscribeToRoute;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNavbarItemsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoNavbarItemsComponent, "po-navbar-items", never, { "items": "p-items"; }, {}, never, never, false>;
}
