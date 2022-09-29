import { ElementRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { PoMenuItem } from '../po-menu-item.interface';
import { PoMenuItemsService } from '../services/po-menu-items.service';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que implementa cada item do po-menu.
 */
export declare class PoMenuItemComponent implements OnDestroy, OnInit {
    private menuItemsService;
    action: Function;
    badgeAlert: boolean;
    badgeColor: string;
    collapsedMenu: boolean;
    icon: string | TemplateRef<void>;
    id: string;
    isOpened: boolean;
    label: string;
    level: number;
    link?: string;
    shortLabel: string;
    type: string;
    menuSubItems: ElementRef;
    isSelectedSubItem: any;
    maxHeight: number;
    private itemSubscription;
    private _badgeValue;
    private _isSelected;
    private _isSubItem;
    private _subItems;
    set badgeValue(badgeValue: number);
    get badgeValue(): number;
    set isSelected(value: boolean);
    get isSelected(): boolean;
    set isSubItem(value: boolean);
    get isSubItem(): boolean;
    set subItems(subitems: Array<PoMenuItem>);
    get subItems(): Array<PoMenuItem>;
    get canShowBadge(): boolean;
    constructor(menuItemsService: PoMenuItemsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    clickMenuItem(event: any): void;
    private accordionAnimation;
    private activateMenu;
    private calcMenuSubItemsMaxHeight;
    private getMinimumHeight;
    private groupedMenu;
    private hasSubItem;
    private isMenuOpened;
    private processMenuItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoMenuItemComponent, "po-menu-item", never, { "action": "p-action"; "badgeAlert": "p-badge-alert"; "badgeColor": "p-badge-color"; "collapsedMenu": "p-collapsed-menu"; "icon": "p-icon"; "id": "p-id"; "isOpened": "p-is-opened"; "label": "p-label"; "level": "p-level"; "link": "p-link"; "shortLabel": "p-short-label"; "type": "p-type"; "badgeValue": "p-badge-value"; "isSelected": "p-is-selected"; "isSubItem": "p-is-sub-item"; "subItems": "p-sub-items"; }, {}, never, never, false>;
}