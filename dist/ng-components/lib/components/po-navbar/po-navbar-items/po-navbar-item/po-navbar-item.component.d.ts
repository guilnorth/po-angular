import { EventEmitter } from '@angular/core';
import { PoNavbarItem } from '../../interfaces/po-navbar-item.interface';
import * as i0 from "@angular/core";
export declare class PoNavbarItemComponent {
    action: Function;
    clickable?: boolean;
    label: string;
    link?: string;
    click: EventEmitter<PoNavbarItem>;
    get type(): "externalLink" | "internalLink";
    itemClick(label?: string, link?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNavbarItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoNavbarItemComponent, "po-navbar-item", never, { "action": "p-action"; "clickable": "p-clickable"; "label": "p-label"; "link": "p-link"; }, { "click": "p-click"; }, never, never, false>;
}
