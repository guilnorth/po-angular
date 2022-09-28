import { Component, Input, ViewChild } from '@angular/core';
import { convertToInt, convertToBoolean } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "../services/po-menu-items.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "../../po-badge/po-badge.component";
import * as i5 from "../../po-icon/po-icon.component";
const _c0 = ["menuSubItems"];
function PoMenuItemComponent_a_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuItemComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtemplate(1, PoMenuItemComponent_a_0_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵproperty("routerLink", ctx_r0.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function PoMenuItemComponent_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuItemComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtemplate(1, PoMenuItemComponent_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵproperty("href", ctx_r1.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function PoMenuItemComponent_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtemplate(1, PoMenuItemComponent_a_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function PoMenuItemComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoMenuItemComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "po-menu-item", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-action", subItem_r12.action)("p-badge-alert", subItem_r12.badgeAlert)("p-badge-color", subItem_r12.badge ? subItem_r12.badge.color : undefined)("p-badge-value", subItem_r12.badge ? subItem_r12.badge.value : undefined)("p-id", subItem_r12.id)("p-label", subItem_r12.label)("p-level", subItem_r12.level)("p-link", subItem_r12.link)("p-sub-items", subItem_r12.subItems)("p-type", subItem_r12.type);
} }
function PoMenuItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, PoMenuItemComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementStart(2, "div", 10, 11);
    i0.ɵɵtemplate(4, PoMenuItemComponent_div_3_div_4_Template, 2, 10, "div", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-height", ctx_r3.maxHeight, "px");
    i0.ɵɵproperty("hidden", ctx_r3.collapsedMenu);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.subItems);
} }
function PoMenuItemComponent_ng_template_4_po_badge_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-badge", 20);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", !ctx_r13.collapsedMenu ? "po-menu-badge-align" : "po-menu-badge-align-collapsed")("p-color", ctx_r13.badgeColor)("p-value", ctx_r13.badgeValue);
} }
function PoMenuItemComponent_ng_template_4_po_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-icon", 21);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-icon", ctx_r14.icon);
} }
function PoMenuItemComponent_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", !ctx_r15.collapsedMenu ? "po-menu-badge-alert" : "po-menu-badge-alert-collapsed");
} }
function PoMenuItemComponent_ng_template_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 23);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-icon-arrow-up", ctx_r16.isOpened)("po-icon-arrow-down", !ctx_r16.isOpened);
} }
function PoMenuItemComponent_ng_template_4_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r17.shortLabel);
} }
function PoMenuItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function PoMenuItemComponent_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.clickMenuItem($event)); });
    i0.ɵɵtemplate(1, PoMenuItemComponent_ng_template_4_po_badge_1_Template, 1, 3, "po-badge", 15);
    i0.ɵɵtemplate(2, PoMenuItemComponent_ng_template_4_po_icon_2_Template, 1, 1, "po-icon", 16);
    i0.ɵɵtemplate(3, PoMenuItemComponent_ng_template_4_div_3_Template, 1, 1, "div", 17);
    i0.ɵɵtemplate(4, PoMenuItemComponent_ng_template_4_span_4_Template, 1, 4, "span", 18);
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, PoMenuItemComponent_ng_template_4_div_7_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-menu-icon-container", ctx_r5.level === 1 && ctx_r5.icon)("po-menu-item-selected", ctx_r5.isSelected)("po-menu-item-level-two", ctx_r5.level === 2)("po-menu-item-level-three", ctx_r5.level === 3)("po-menu-item-level-four", ctx_r5.level === 4)("po-menu-item-grouper-up", ctx_r5.type === "subItems" && ctx_r5.isOpened)("po-menu-item-grouper-down", ctx_r5.type === "subItems" && !ctx_r5.isOpened)("po-menu-sub-item-selected", ctx_r5.isSelectedSubItem);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.canShowBadge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.level === 1 && ctx_r5.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.badgeAlert);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.type === "subItems" && !ctx_r5.collapsedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-menu-icon-label", ctx_r5.level === 1 && ctx_r5.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.collapsedMenu);
} }
// valor para que caibam 3 linhas de `label`
const poMenuItemSubItemSize = 98;
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que implementa cada item do po-menu.
 */
export class PoMenuItemComponent {
    constructor(menuItemsService) {
        this.menuItemsService = menuItemsService;
        this.maxHeight = 0;
        this._isSelected = false;
        this._isSubItem = false;
    }
    // Valor do badge.
    set badgeValue(badgeValue) {
        this._badgeValue = convertToInt(badgeValue);
    }
    get badgeValue() {
        return this._badgeValue;
    }
    // Indica se o item está selecionado.
    set isSelected(value) {
        this._isSelected = convertToBoolean(value);
        this.isSelectedSubItem = this.isSelected && this.isSubItem;
    }
    get isSelected() {
        return this._isSelected;
    }
    // Indica se o item é um sub item
    set isSubItem(value) {
        this._isSubItem = convertToBoolean(value);
    }
    get isSubItem() {
        return this._isSubItem;
    }
    // Lista de sub-items.
    set subItems(subitems) {
        this._subItems = subitems;
        if (this.isOpened) {
            this.calcMenuSubItemsMaxHeight();
        }
    }
    get subItems() {
        return this._subItems;
    }
    get canShowBadge() {
        return this.type !== 'subItems' && (this.badgeValue || this.badgeValue === 0) && this.badgeValue >= 0;
    }
    ngOnDestroy() {
        this.itemSubscription.unsubscribe();
    }
    ngOnInit() {
        // subscribe to menu component messages
        this.itemSubscription = this.menuItemsService.receiveFromParentMenuClicked().subscribe(menu => {
            this.processMenuItem(menu);
        });
    }
    clickMenuItem(event) {
        if (!(event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            // Emmit to parent
            this.menuItemsService.sendToParentMenuClicked({
                link: this.link,
                action: this.action,
                id: this.id,
                icon: this.icon,
                label: this.label,
                level: this.level,
                subItems: this.subItems,
                isSelected: this.isSelected,
                isOpened: this.isOpened,
                shortLabel: this.shortLabel,
                type: this.type
            });
        }
    }
    accordionAnimation(menuActive, menuOpened, hasSubItemOpened, activatedByRoute) {
        if (this.id === menuOpened['id']) {
            this.maxHeight = this.subItems.length * poMenuItemSubItemSize;
        }
        if (hasSubItemOpened) {
            this.maxHeight = menuOpened['isOpened']
                ? this.maxHeight + menuOpened.subItems.length * poMenuItemSubItemSize
                : this.maxHeight - menuOpened.subItems.length * poMenuItemSubItemSize;
            if (activatedByRoute) {
                this.maxHeight = this.getMinimumHeight(0, this, menuActive);
            }
        }
    }
    activateMenu(menu) {
        this.isSelected = menu && this.id === menu.id;
    }
    calcMenuSubItemsMaxHeight() {
        setTimeout(() => {
            const subItems = Array.from(this.menuSubItems.nativeElement.querySelectorAll('.po-menu-item'));
            subItems.forEach((menuItem) => (this.maxHeight += menuItem.offsetHeight));
        });
    }
    getMinimumHeight(minimumHeight, menuItem, menuActive) {
        minimumHeight += poMenuItemSubItemSize;
        if (menuItem.subItems && this.hasSubItem(menuItem.subItems, menuActive['id'])) {
            for (let index = 0; index < menuItem.subItems.length; index++) {
                minimumHeight = this.getMinimumHeight(minimumHeight, menuItem.subItems[index], menuActive);
            }
        }
        return minimumHeight;
    }
    groupedMenu(menuActive, menuOpened, activatedByRoute = false) {
        const hasSubItemOpened = menuOpened && this.id !== menuOpened['id'] ? this.hasSubItem(this.subItems, menuOpened['id']) : false;
        this.isOpened = this.isMenuOpened(menuOpened, hasSubItemOpened);
        this.isSelected = menuActive && !this.isOpened ? this.hasSubItem(this.subItems, menuActive['id']) : false;
        if (!this.isOpened) {
            this.maxHeight = 0;
            return;
        }
        this.accordionAnimation(menuActive, menuOpened, hasSubItemOpened, activatedByRoute);
    }
    hasSubItem(subItems, id) {
        if (subItems) {
            return subItems.some(item => (item['id'] === id ? true : this.hasSubItem(item.subItems, id)));
        }
    }
    isMenuOpened(menuOpened, hasSubItemOpened) {
        if (menuOpened) {
            return this.id === menuOpened['id'] ? menuOpened['isOpened'] : hasSubItemOpened;
        }
        return false;
    }
    processMenuItem(menu) {
        if (this.type === 'internalLink') {
            this.activateMenu(menu.active);
            return;
        }
        if (this.type === 'subItems') {
            this.groupedMenu(menu.active, menu.grouped, menu.activatedByRoute);
        }
    }
}
PoMenuItemComponent.ɵfac = function PoMenuItemComponent_Factory(t) { return new (t || PoMenuItemComponent)(i0.ɵɵdirectiveInject(i1.PoMenuItemsService)); };
PoMenuItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMenuItemComponent, selectors: [["po-menu-item"]], viewQuery: function PoMenuItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuSubItems = _t.first);
    } }, inputs: { action: ["p-action", "action"], badgeAlert: ["p-badge-alert", "badgeAlert"], badgeColor: ["p-badge-color", "badgeColor"], collapsedMenu: ["p-collapsed-menu", "collapsedMenu"], icon: ["p-icon", "icon"], id: ["p-id", "id"], isOpened: ["p-is-opened", "isOpened"], label: ["p-label", "label"], level: ["p-level", "level"], link: ["p-link", "link"], shortLabel: ["p-short-label", "shortLabel"], type: ["p-type", "type"], badgeValue: ["p-badge-value", "badgeValue"], isSelected: ["p-is-selected", "isSelected"], isSubItem: ["p-is-sub-item", "isSubItem"], subItems: ["p-sub-items", "subItems"] }, decls: 6, vars: 4, consts: [["class", "po-menu-item-link", 3, "routerLink", 4, "ngIf"], ["class", "po-menu-item-link", 3, "href", 4, "ngIf"], ["class", "po-menu-item-link", "href", "javascript:;", 4, "ngIf"], ["class", "po-menu-item-link po-clickable", 4, "ngIf"], ["menuItemTemplate", ""], [1, "po-menu-item-link", 3, "routerLink"], [4, "ngTemplateOutlet"], [1, "po-menu-item-link", 3, "href"], ["href", "javascript:;", 1, "po-menu-item-link"], [1, "po-menu-item-link", "po-clickable"], [1, "po-menu-sub-items", 3, "hidden"], ["menuSubItems", ""], [4, "ngFor", "ngForOf"], ["p-is-sub-item", "", 3, "p-action", "p-badge-alert", "p-badge-color", "p-badge-value", "p-id", "p-label", "p-level", "p-link", "p-sub-items", "p-type"], [1, "po-menu-item", 3, "click"], [3, "ngClass", "p-color", "p-value", 4, "ngIf"], ["class", "po-menu-icon-item", 3, "p-icon", 4, "ngIf"], ["class", "po-color-07", 3, "ngClass", 4, "ngIf"], ["class", "po-icon po-menu-group-icon", 3, "po-icon-arrow-up", "po-icon-arrow-down", 4, "ngIf"], ["class", "po-menu-short-label", 4, "ngIf"], [3, "ngClass", "p-color", "p-value"], [1, "po-menu-icon-item", 3, "p-icon"], [1, "po-color-07", 3, "ngClass"], [1, "po-icon", "po-menu-group-icon"], [1, "po-menu-short-label"]], template: function PoMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoMenuItemComponent_a_0_Template, 2, 2, "a", 0);
        i0.ɵɵtemplate(1, PoMenuItemComponent_a_1_Template, 2, 2, "a", 1);
        i0.ɵɵtemplate(2, PoMenuItemComponent_a_2_Template, 2, 1, "a", 2);
        i0.ɵɵtemplate(3, PoMenuItemComponent_div_3_Template, 5, 5, "div", 3);
        i0.ɵɵtemplate(4, PoMenuItemComponent_ng_template_4_Template, 8, 24, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type === "internalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "noLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "subItems");
    } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.RouterLinkWithHref, i4.PoBadgeComponent, i5.PoIconComponent, PoMenuItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'po-menu-item', template: "<!-- menu com link interno -->\r\n<a *ngIf=\"type === 'internalLink'\" class=\"po-menu-item-link\" [routerLink]=\"link\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n</a>\r\n<!-- menu com link externo -->\r\n<a *ngIf=\"type === 'externalLink'\" class=\"po-menu-item-link\" [href]=\"link\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n</a>\r\n<!-- menu sem link -->\r\n<a *ngIf=\"type === 'noLink'\" class=\"po-menu-item-link\" href=\"javascript:;\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n</a>\r\n<!-- menu com sub itens -->\r\n<div *ngIf=\"type === 'subItems'\" class=\"po-menu-item-link po-clickable\">\r\n  <ng-container *ngTemplateOutlet=\"menuItemTemplate\"></ng-container>\r\n  <div #menuSubItems class=\"po-menu-sub-items\" [hidden]=\"collapsedMenu\" [style.maxHeight.px]=\"maxHeight\">\r\n    <div *ngFor=\"let subItem of subItems\">\r\n      <po-menu-item\r\n        p-is-sub-item\r\n        [p-action]=\"subItem.action\"\r\n        [p-badge-alert]=\"subItem.badgeAlert\"\r\n        [p-badge-color]=\"subItem.badge ? subItem.badge.color : undefined\"\r\n        [p-badge-value]=\"subItem.badge ? subItem.badge.value : undefined\"\r\n        [p-id]=\"subItem.id\"\r\n        [p-label]=\"subItem.label\"\r\n        [p-level]=\"subItem.level\"\r\n        [p-link]=\"subItem.link\"\r\n        [p-sub-items]=\"subItem.subItems\"\r\n        [p-type]=\"subItem.type\"\r\n      >\r\n      </po-menu-item>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #menuItemTemplate>\r\n  <div\r\n    class=\"po-menu-item\"\r\n    [class.po-menu-icon-container]=\"level === 1 && icon\"\r\n    [class.po-menu-item-selected]=\"isSelected\"\r\n    [class.po-menu-item-level-two]=\"level === 2\"\r\n    [class.po-menu-item-level-three]=\"level === 3\"\r\n    [class.po-menu-item-level-four]=\"level === 4\"\r\n    [class.po-menu-item-grouper-up]=\"type === 'subItems' && isOpened\"\r\n    [class.po-menu-item-grouper-down]=\"type === 'subItems' && !isOpened\"\r\n    [class.po-menu-sub-item-selected]=\"isSelectedSubItem\"\r\n    (click)=\"clickMenuItem($event)\"\r\n  >\r\n    <po-badge\r\n      *ngIf=\"canShowBadge\"\r\n      [ngClass]=\"!collapsedMenu ? 'po-menu-badge-align' : 'po-menu-badge-align-collapsed'\"\r\n      [p-color]=\"badgeColor\"\r\n      [p-value]=\"badgeValue\"\r\n    >\r\n    </po-badge>\r\n    <po-icon *ngIf=\"level === 1 && icon\" class=\"po-menu-icon-item\" [p-icon]=\"icon\"></po-icon>\r\n    <div\r\n      *ngIf=\"badgeAlert\"\r\n      class=\"po-color-07\"\r\n      [ngClass]=\"!collapsedMenu ? 'po-menu-badge-alert' : 'po-menu-badge-alert-collapsed'\"\r\n    ></div>\r\n    <span\r\n      *ngIf=\"type === 'subItems' && !collapsedMenu\"\r\n      class=\"po-icon po-menu-group-icon\"\r\n      [class.po-icon-arrow-up]=\"isOpened\"\r\n      [class.po-icon-arrow-down]=\"!isOpened\"\r\n    >\r\n    </span>\r\n    <div [class.po-menu-icon-label]=\"level === 1 && icon\">\r\n      {{ label }}\r\n    </div>\r\n    <div *ngIf=\"collapsedMenu\" class=\"po-menu-short-label\">{{ shortLabel }}</div>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.PoMenuItemsService }]; }, { action: [{
            type: Input,
            args: ['p-action']
        }], badgeAlert: [{
            type: Input,
            args: ['p-badge-alert']
        }], badgeColor: [{
            type: Input,
            args: ['p-badge-color']
        }], collapsedMenu: [{
            type: Input,
            args: ['p-collapsed-menu']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], id: [{
            type: Input,
            args: ['p-id']
        }], isOpened: [{
            type: Input,
            args: ['p-is-opened']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], level: [{
            type: Input,
            args: ['p-level']
        }], link: [{
            type: Input,
            args: ['p-link']
        }], shortLabel: [{
            type: Input,
            args: ['p-short-label']
        }], type: [{
            type: Input,
            args: ['p-type']
        }], menuSubItems: [{
            type: ViewChild,
            args: ['menuSubItems']
        }], badgeValue: [{
            type: Input,
            args: ['p-badge-value']
        }], isSelected: [{
            type: Input,
            args: ['p-is-selected']
        }], isSubItem: [{
            type: Input,
            args: ['p-is-sub-item']
        }], subItems: [{
            type: Input,
            args: ['p-sub-items']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51L3BvLW1lbnUtaXRlbS9wby1tZW51LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUvcG8tbWVudS1pdGVtL3BvLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBa0MsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXhHLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0lDRm5FLHdCQUFrRTs7O0lBRHBFLDRCQUFpRjtJQUMvRSwwRkFBa0U7SUFDcEUsaUJBQUk7Ozs7SUFGeUQsd0NBQW1CO0lBQy9ELGVBQWtDO0lBQWxDLHNDQUFrQzs7O0lBSWpELHdCQUFrRTs7O0lBRHBFLDRCQUEyRTtJQUN6RSwwRkFBa0U7SUFDcEUsaUJBQUk7Ozs7SUFGeUQsb0RBQWE7SUFDekQsZUFBa0M7SUFBbEMsc0NBQWtDOzs7SUFJakQsd0JBQWtFOzs7SUFEcEUsNEJBQTJFO0lBQ3pFLDBGQUFrRTtJQUNwRSxpQkFBSTs7OztJQURhLGVBQWtDO0lBQWxDLHNDQUFrQzs7O0lBSWpELHdCQUFrRTs7O0lBRWhFLDJCQUFzQztJQUNwQyxtQ0FhZTtJQUNqQixpQkFBTTs7O0lBWkYsZUFBMkI7SUFBM0IsNkNBQTJCLHlDQUFBLDBFQUFBLDBFQUFBLHdCQUFBLDhCQUFBLDhCQUFBLDRCQUFBLHFDQUFBLDRCQUFBOzs7SUFObkMsOEJBQXdFO0lBQ3RFLDRGQUFrRTtJQUNsRSxtQ0FBdUc7SUFDckcsNEVBZU07SUFDUixpQkFBTSxFQUFBOzs7O0lBbEJTLGVBQWtDO0lBQWxDLHNDQUFrQztJQUNxQixlQUFnQztJQUFoQyxvREFBZ0M7SUFBekQsNkNBQXdCO0lBQzFDLGVBQVc7SUFBWCx5Q0FBVzs7O0lBZ0NwQywrQkFNVzs7O0lBSlQsMEdBQW9GLCtCQUFBLCtCQUFBOzs7SUFLdEYsOEJBQXlGOzs7SUFBMUIscUNBQWU7OztJQUM5RSwwQkFJTzs7O0lBREwsMEdBQW9GOzs7SUFFdEYsMkJBTU87OztJQUhMLG9EQUFtQyx5Q0FBQTs7O0lBT3JDLCtCQUF1RDtJQUFBLFlBQWdCO0lBQUEsaUJBQU07OztJQUF0QixlQUFnQjtJQUFoQix3Q0FBZ0I7Ozs7SUFuQ3pFLCtCQVdDO0lBREMsNktBQVMsZUFBQSw2QkFBcUIsQ0FBQSxJQUFDO0lBRS9CLDZGQU1XO0lBQ1gsMkZBQXlGO0lBQ3pGLG1GQUlPO0lBQ1AscUZBTU87SUFDUCwyQkFBc0Q7SUFDcEQsWUFDRjtJQUFBLGlCQUFNO0lBQ04sbUZBQTZFO0lBQy9FLGlCQUFNOzs7SUFsQ0osMkVBQW9ELDRDQUFBLDhDQUFBLGdEQUFBLCtDQUFBLDBFQUFBLDZFQUFBLHVEQUFBO0lBV2pELGVBQWtCO0lBQWxCLDBDQUFrQjtJQU1YLGVBQXlCO0lBQXpCLHdEQUF5QjtJQUVoQyxlQUFnQjtJQUFoQix3Q0FBZ0I7SUFLaEIsZUFBMkM7SUFBM0MsMEVBQTJDO0lBTXpDLGVBQWdEO0lBQWhELHVFQUFnRDtJQUNuRCxlQUNGO0lBREUsNkNBQ0Y7SUFDTSxlQUFtQjtJQUFuQiwyQ0FBbUI7O0FEOUQ3Qiw0Q0FBNEM7QUFDNUMsTUFBTSxxQkFBcUIsR0FBRyxFQUFFLENBQUM7QUFFakM7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLG1CQUFtQjtJQTRGOUIsWUFBb0IsZ0JBQW9DO1FBQXBDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFwRHhELGNBQVMsR0FBVyxDQUFDLENBQUM7UUFJZCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQVksS0FBSyxDQUFDO0lBK0N1QixDQUFDO0lBNUM1RCxrQkFBa0I7SUFDbEIsSUFBNEIsVUFBVSxDQUFDLFVBQWtCO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxJQUE0QixVQUFVLENBQUMsS0FBYztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLElBQTRCLFNBQVMsQ0FBQyxLQUFjO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLElBQTBCLFFBQVEsQ0FBQyxRQUEyQjtRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFJRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ04sdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDNUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sa0JBQWtCLENBQ3hCLFVBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLGdCQUF5QixFQUN6QixnQkFBeUI7UUFFekIsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO1NBQy9EO1FBRUQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHFCQUFxQjtnQkFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7WUFFeEUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM3RDtTQUNGO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFTO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRU8seUJBQXlCO1FBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDL0YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGdCQUFnQixDQUFDLGFBQXFCLEVBQUUsUUFBb0IsRUFBRSxVQUFzQjtRQUMxRixhQUFhLElBQUkscUJBQXFCLENBQUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUM3RSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzdELGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDNUY7U0FDRjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxXQUFXLENBQUMsVUFBc0IsRUFBRSxVQUFzQixFQUFFLG1CQUE0QixLQUFLO1FBQ25HLE1BQU0sZ0JBQWdCLEdBQ3BCLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFeEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFMUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU8sVUFBVSxDQUFDLFFBQTJCLEVBQUUsRUFBVTtRQUN4RCxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxVQUFzQixFQUFFLGdCQUF5QjtRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7U0FDakY7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxlQUFlLENBQUMsSUFBSTtRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOztzRkFoTlUsbUJBQW1CO3NFQUFuQixtQkFBbUI7Ozs7OztRQ3RCaEMsZ0VBRUk7UUFFSixnRUFFSTtRQUVKLGdFQUVJO1FBRUosb0VBb0JNO1FBRU4sc0hBc0NjOztRQXhFVixrREFBNkI7UUFJN0IsZUFBNkI7UUFBN0Isa0RBQTZCO1FBSTdCLGVBQXVCO1FBQXZCLDRDQUF1QjtRQUlyQixlQUF5QjtRQUF6Qiw4Q0FBeUI7OElEVWxCLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSi9CLFNBQVM7MkJBQ0UsY0FBYztxRUFLTCxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFHTyxVQUFVO2tCQUFqQyxLQUFLO21CQUFDLGVBQWU7WUFHRSxVQUFVO2tCQUFqQyxLQUFLO21CQUFDLGVBQWU7WUFHSyxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQjtZQUdSLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUdBLEVBQUU7a0JBQWhCLEtBQUs7bUJBQUMsTUFBTTtZQUdTLFFBQVE7a0JBQTdCLEtBQUs7bUJBQUMsYUFBYTtZQUdGLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdFLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUdTLFVBQVU7a0JBQWpDLEtBQUs7bUJBQUMsZUFBZTtZQUdMLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUVZLFlBQVk7a0JBQXRDLFNBQVM7bUJBQUMsY0FBYztZQVlHLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQVNNLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQVVNLFNBQVM7a0JBQXBDLEtBQUs7bUJBQUMsZUFBZTtZQVNJLFFBQVE7a0JBQWpDLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0ludCwgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9NZW51SXRlbSB9IGZyb20gJy4uL3BvLW1lbnUtaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb01lbnVJdGVtc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wby1tZW51LWl0ZW1zLnNlcnZpY2UnO1xyXG5cclxuLy8gdmFsb3IgcGFyYSBxdWUgY2FpYmFtIDMgbGluaGFzIGRlIGBsYWJlbGBcclxuY29uc3QgcG9NZW51SXRlbVN1Ykl0ZW1TaXplID0gOTg7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSBpbXBsZW1lbnRhIGNhZGEgaXRlbSBkbyBwby1tZW51LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1tZW51LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIC8vIEHDp8OjbyBxdWUgc2Vyw6EgY2hhbWFkYSBhbyBjbGljYXIgbm8gaXRlbS5cclxuICBASW5wdXQoJ3AtYWN0aW9uJykgYWN0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgLy8gSW5kaWNhIHNlIGNvbnTDqW0gYWxndW0gaXRlbSBmaWxobyBjb20gbyBiYWRnZS5cclxuICBASW5wdXQoJ3AtYmFkZ2UtYWxlcnQnKSBiYWRnZUFsZXJ0OiBib29sZWFuO1xyXG5cclxuICAvLyBDb3IgZG8gYmFkZ2UuXHJcbiAgQElucHV0KCdwLWJhZGdlLWNvbG9yJykgYmFkZ2VDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvLyBJbmRpY2Egc2UgbyBtZW51IGVzdMOhIGNvbGFwc2Fkb1xyXG4gIEBJbnB1dCgncC1jb2xsYXBzZWQtbWVudScpIGNvbGxhcHNlZE1lbnU6IGJvb2xlYW47XHJcblxyXG4gIC8vIMONY29uZSBkZSBtZW51XHJcbiAgQElucHV0KCdwLWljb24nKSBpY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLy8gSWRlbnRpZmljYWRvciBkbyBpdGVtLlxyXG4gIEBJbnB1dCgncC1pZCcpIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8vIEluZGljYSBzZSBvIGl0ZW0gZXN0w6EgYWJlcnRvIChtZW51IGFncnVwYWRvKVxyXG4gIEBJbnB1dCgncC1pcy1vcGVuZWQnKSBpc09wZW5lZDogYm9vbGVhbjtcclxuXHJcbiAgLy8gVGV4dG8gcXVlIGFwYXJlY2Vyw6EgcmVwcmVzZW50YW5kbyBvIGl0ZW0uXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gSW5kaWNhIHF1YWwgZW0gbsOtdmVsIGRvIHBvLW1lbnUgZW5jb250cmEtc2UuXHJcbiAgQElucHV0KCdwLWxldmVsJykgbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgLy8gTGluayBkbyBpdGVtLlxyXG4gIEBJbnB1dCgncC1saW5rJykgbGluaz86IHN0cmluZztcclxuXHJcbiAgLy8gVGV4dG8gcXVlIGFwYXJlY2Vyw6EgcmVwcmVzZW50YW5kbyBvIGl0ZW0uXHJcbiAgQElucHV0KCdwLXNob3J0LWxhYmVsJykgc2hvcnRMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvLyBJbmRpY2EgbyB0aXBvIGRlIGl0ZW0sIGNvbW8gJ2ludGVybmFsTGluaycgb3UgJ3N1Ykl0ZW1zJy5cclxuICBASW5wdXQoJ3AtdHlwZScpIHR5cGU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnbWVudVN1Ykl0ZW1zJykgbWVudVN1Ykl0ZW1zOiBFbGVtZW50UmVmO1xyXG5cclxuICBpc1NlbGVjdGVkU3ViSXRlbTtcclxuICBtYXhIZWlnaHQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgaXRlbVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2JhZGdlVmFsdWU6IG51bWJlcjtcclxuICBwcml2YXRlIF9pc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaXNTdWJJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3ViSXRlbXM6IEFycmF5PFBvTWVudUl0ZW0+O1xyXG5cclxuICAvLyBWYWxvciBkbyBiYWRnZS5cclxuICBASW5wdXQoJ3AtYmFkZ2UtdmFsdWUnKSBzZXQgYmFkZ2VWYWx1ZShiYWRnZVZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2JhZGdlVmFsdWUgPSBjb252ZXJ0VG9JbnQoYmFkZ2VWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgYmFkZ2VWYWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9iYWRnZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5kaWNhIHNlIG8gaXRlbSBlc3TDoSBzZWxlY2lvbmFkby5cclxuICBASW5wdXQoJ3AtaXMtc2VsZWN0ZWQnKSBzZXQgaXNTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNTZWxlY3RlZCA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG5cclxuICAgIHRoaXMuaXNTZWxlY3RlZFN1Ykl0ZW0gPSB0aGlzLmlzU2VsZWN0ZWQgJiYgdGhpcy5pc1N1Ykl0ZW07XHJcbiAgfVxyXG4gIGdldCBpc1NlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBJbmRpY2Egc2UgbyBpdGVtIMOpIHVtIHN1YiBpdGVtXHJcbiAgQElucHV0KCdwLWlzLXN1Yi1pdGVtJykgc2V0IGlzU3ViSXRlbSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNTdWJJdGVtID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTdWJJdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU3ViSXRlbTtcclxuICB9XHJcblxyXG4gIC8vIExpc3RhIGRlIHN1Yi1pdGVtcy5cclxuICBASW5wdXQoJ3Atc3ViLWl0ZW1zJykgc2V0IHN1Ykl0ZW1zKHN1Yml0ZW1zOiBBcnJheTxQb01lbnVJdGVtPikge1xyXG4gICAgdGhpcy5fc3ViSXRlbXMgPSBzdWJpdGVtcztcclxuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgIHRoaXMuY2FsY01lbnVTdWJJdGVtc01heEhlaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHN1Ykl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N1Ykl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhblNob3dCYWRnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgIT09ICdzdWJJdGVtcycgJiYgKHRoaXMuYmFkZ2VWYWx1ZSB8fCB0aGlzLmJhZGdlVmFsdWUgPT09IDApICYmIHRoaXMuYmFkZ2VWYWx1ZSA+PSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZW51SXRlbXNTZXJ2aWNlOiBQb01lbnVJdGVtc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHN1YnNjcmliZSB0byBtZW51IGNvbXBvbmVudCBtZXNzYWdlc1xyXG4gICAgdGhpcy5pdGVtU3Vic2NyaXB0aW9uID0gdGhpcy5tZW51SXRlbXNTZXJ2aWNlLnJlY2VpdmVGcm9tUGFyZW50TWVudUNsaWNrZWQoKS5zdWJzY3JpYmUobWVudSA9PiB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc01lbnVJdGVtKG1lbnUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja01lbnVJdGVtKGV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIShldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBFbW1pdCB0byBwYXJlbnRcclxuICAgICAgdGhpcy5tZW51SXRlbXNTZXJ2aWNlLnNlbmRUb1BhcmVudE1lbnVDbGlja2VkKHtcclxuICAgICAgICBsaW5rOiB0aGlzLmxpbmssXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBpY29uOiB0aGlzLmljb24sXHJcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXHJcbiAgICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXHJcbiAgICAgICAgc3ViSXRlbXM6IHRoaXMuc3ViSXRlbXMsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkLFxyXG4gICAgICAgIGlzT3BlbmVkOiB0aGlzLmlzT3BlbmVkLFxyXG4gICAgICAgIHNob3J0TGFiZWw6IHRoaXMuc2hvcnRMYWJlbCxcclxuICAgICAgICB0eXBlOiB0aGlzLnR5cGVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjY29yZGlvbkFuaW1hdGlvbihcclxuICAgIG1lbnVBY3RpdmU6IFBvTWVudUl0ZW0sXHJcbiAgICBtZW51T3BlbmVkOiBQb01lbnVJdGVtLFxyXG4gICAgaGFzU3ViSXRlbU9wZW5lZDogYm9vbGVhbixcclxuICAgIGFjdGl2YXRlZEJ5Um91dGU6IGJvb2xlYW5cclxuICApIHtcclxuICAgIGlmICh0aGlzLmlkID09PSBtZW51T3BlbmVkWydpZCddKSB7XHJcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5zdWJJdGVtcy5sZW5ndGggKiBwb01lbnVJdGVtU3ViSXRlbVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc1N1Ykl0ZW1PcGVuZWQpIHtcclxuICAgICAgdGhpcy5tYXhIZWlnaHQgPSBtZW51T3BlbmVkWydpc09wZW5lZCddXHJcbiAgICAgICAgPyB0aGlzLm1heEhlaWdodCArIG1lbnVPcGVuZWQuc3ViSXRlbXMubGVuZ3RoICogcG9NZW51SXRlbVN1Ykl0ZW1TaXplXHJcbiAgICAgICAgOiB0aGlzLm1heEhlaWdodCAtIG1lbnVPcGVuZWQuc3ViSXRlbXMubGVuZ3RoICogcG9NZW51SXRlbVN1Ykl0ZW1TaXplO1xyXG5cclxuICAgICAgaWYgKGFjdGl2YXRlZEJ5Um91dGUpIHtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgwLCB0aGlzLCBtZW51QWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZU1lbnUobWVudTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBtZW51ICYmIHRoaXMuaWQgPT09IG1lbnUuaWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGNNZW51U3ViSXRlbXNNYXhIZWlnaHQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc3ViSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMubWVudVN1Ykl0ZW1zLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvLW1lbnUtaXRlbScpKTtcclxuICAgICAgc3ViSXRlbXMuZm9yRWFjaCgobWVudUl0ZW06IGFueSkgPT4gKHRoaXMubWF4SGVpZ2h0ICs9IG1lbnVJdGVtLm9mZnNldEhlaWdodCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1pbmltdW1IZWlnaHQobWluaW11bUhlaWdodDogbnVtYmVyLCBtZW51SXRlbTogUG9NZW51SXRlbSwgbWVudUFjdGl2ZTogUG9NZW51SXRlbSkge1xyXG4gICAgbWluaW11bUhlaWdodCArPSBwb01lbnVJdGVtU3ViSXRlbVNpemU7XHJcblxyXG4gICAgaWYgKG1lbnVJdGVtLnN1Ykl0ZW1zICYmIHRoaXMuaGFzU3ViSXRlbShtZW51SXRlbS5zdWJJdGVtcywgbWVudUFjdGl2ZVsnaWQnXSkpIHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lbnVJdGVtLnN1Ykl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQobWluaW11bUhlaWdodCwgbWVudUl0ZW0uc3ViSXRlbXNbaW5kZXhdLCBtZW51QWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBncm91cGVkTWVudShtZW51QWN0aXZlOiBQb01lbnVJdGVtLCBtZW51T3BlbmVkOiBQb01lbnVJdGVtLCBhY3RpdmF0ZWRCeVJvdXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhhc1N1Ykl0ZW1PcGVuZWQgPVxyXG4gICAgICBtZW51T3BlbmVkICYmIHRoaXMuaWQgIT09IG1lbnVPcGVuZWRbJ2lkJ10gPyB0aGlzLmhhc1N1Ykl0ZW0odGhpcy5zdWJJdGVtcywgbWVudU9wZW5lZFsnaWQnXSkgOiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmlzT3BlbmVkID0gdGhpcy5pc01lbnVPcGVuZWQobWVudU9wZW5lZCwgaGFzU3ViSXRlbU9wZW5lZCk7XHJcblxyXG4gICAgdGhpcy5pc1NlbGVjdGVkID0gbWVudUFjdGl2ZSAmJiAhdGhpcy5pc09wZW5lZCA/IHRoaXMuaGFzU3ViSXRlbSh0aGlzLnN1Ykl0ZW1zLCBtZW51QWN0aXZlWydpZCddKSA6IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5pc09wZW5lZCkge1xyXG4gICAgICB0aGlzLm1heEhlaWdodCA9IDA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYWNjb3JkaW9uQW5pbWF0aW9uKG1lbnVBY3RpdmUsIG1lbnVPcGVuZWQsIGhhc1N1Ykl0ZW1PcGVuZWQsIGFjdGl2YXRlZEJ5Um91dGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNTdWJJdGVtKHN1Ykl0ZW1zOiBBcnJheTxQb01lbnVJdGVtPiwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHN1Ykl0ZW1zKSB7XHJcbiAgICAgIHJldHVybiBzdWJJdGVtcy5zb21lKGl0ZW0gPT4gKGl0ZW1bJ2lkJ10gPT09IGlkID8gdHJ1ZSA6IHRoaXMuaGFzU3ViSXRlbShpdGVtLnN1Ykl0ZW1zLCBpZCkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNZW51T3BlbmVkKG1lbnVPcGVuZWQ6IFBvTWVudUl0ZW0sIGhhc1N1Ykl0ZW1PcGVuZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmIChtZW51T3BlbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlkID09PSBtZW51T3BlbmVkWydpZCddID8gbWVudU9wZW5lZFsnaXNPcGVuZWQnXSA6IGhhc1N1Ykl0ZW1PcGVuZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzTWVudUl0ZW0obWVudSkge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ludGVybmFsTGluaycpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZU1lbnUobWVudS5hY3RpdmUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3N1Ykl0ZW1zJykge1xyXG4gICAgICB0aGlzLmdyb3VwZWRNZW51KG1lbnUuYWN0aXZlLCBtZW51Lmdyb3VwZWQsIG1lbnUuYWN0aXZhdGVkQnlSb3V0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gbWVudSBjb20gbGluayBpbnRlcm5vIC0tPlxyXG48YSAqbmdJZj1cInR5cGUgPT09ICdpbnRlcm5hbExpbmsnXCIgY2xhc3M9XCJwby1tZW51LWl0ZW0tbGlua1wiIFtyb3V0ZXJMaW5rXT1cImxpbmtcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L2E+XHJcbjwhLS0gbWVudSBjb20gbGluayBleHRlcm5vIC0tPlxyXG48YSAqbmdJZj1cInR5cGUgPT09ICdleHRlcm5hbExpbmsnXCIgY2xhc3M9XCJwby1tZW51LWl0ZW0tbGlua1wiIFtocmVmXT1cImxpbmtcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L2E+XHJcbjwhLS0gbWVudSBzZW0gbGluayAtLT5cclxuPGEgKm5nSWY9XCJ0eXBlID09PSAnbm9MaW5rJ1wiIGNsYXNzPVwicG8tbWVudS1pdGVtLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVJdGVtVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuPC9hPlxyXG48IS0tIG1lbnUgY29tIHN1YiBpdGVucyAtLT5cclxuPGRpdiAqbmdJZj1cInR5cGUgPT09ICdzdWJJdGVtcydcIiBjbGFzcz1cInBvLW1lbnUtaXRlbS1saW5rIHBvLWNsaWNrYWJsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPGRpdiAjbWVudVN1Ykl0ZW1zIGNsYXNzPVwicG8tbWVudS1zdWItaXRlbXNcIiBbaGlkZGVuXT1cImNvbGxhcHNlZE1lbnVcIiBbc3R5bGUubWF4SGVpZ2h0LnB4XT1cIm1heEhlaWdodFwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgc3ViSXRlbSBvZiBzdWJJdGVtc1wiPlxyXG4gICAgICA8cG8tbWVudS1pdGVtXHJcbiAgICAgICAgcC1pcy1zdWItaXRlbVxyXG4gICAgICAgIFtwLWFjdGlvbl09XCJzdWJJdGVtLmFjdGlvblwiXHJcbiAgICAgICAgW3AtYmFkZ2UtYWxlcnRdPVwic3ViSXRlbS5iYWRnZUFsZXJ0XCJcclxuICAgICAgICBbcC1iYWRnZS1jb2xvcl09XCJzdWJJdGVtLmJhZGdlID8gc3ViSXRlbS5iYWRnZS5jb2xvciA6IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgW3AtYmFkZ2UtdmFsdWVdPVwic3ViSXRlbS5iYWRnZSA/IHN1Ykl0ZW0uYmFkZ2UudmFsdWUgOiB1bmRlZmluZWRcIlxyXG4gICAgICAgIFtwLWlkXT1cInN1Ykl0ZW0uaWRcIlxyXG4gICAgICAgIFtwLWxhYmVsXT1cInN1Ykl0ZW0ubGFiZWxcIlxyXG4gICAgICAgIFtwLWxldmVsXT1cInN1Ykl0ZW0ubGV2ZWxcIlxyXG4gICAgICAgIFtwLWxpbmtdPVwic3ViSXRlbS5saW5rXCJcclxuICAgICAgICBbcC1zdWItaXRlbXNdPVwic3ViSXRlbS5zdWJJdGVtc1wiXHJcbiAgICAgICAgW3AtdHlwZV09XCJzdWJJdGVtLnR5cGVcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tbWVudS1pdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNtZW51SXRlbVRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwicG8tbWVudS1pdGVtXCJcclxuICAgIFtjbGFzcy5wby1tZW51LWljb24tY29udGFpbmVyXT1cImxldmVsID09PSAxICYmIGljb25cIlxyXG4gICAgW2NsYXNzLnBvLW1lbnUtaXRlbS1zZWxlY3RlZF09XCJpc1NlbGVjdGVkXCJcclxuICAgIFtjbGFzcy5wby1tZW51LWl0ZW0tbGV2ZWwtdHdvXT1cImxldmVsID09PSAyXCJcclxuICAgIFtjbGFzcy5wby1tZW51LWl0ZW0tbGV2ZWwtdGhyZWVdPVwibGV2ZWwgPT09IDNcIlxyXG4gICAgW2NsYXNzLnBvLW1lbnUtaXRlbS1sZXZlbC1mb3VyXT1cImxldmVsID09PSA0XCJcclxuICAgIFtjbGFzcy5wby1tZW51LWl0ZW0tZ3JvdXBlci11cF09XCJ0eXBlID09PSAnc3ViSXRlbXMnICYmIGlzT3BlbmVkXCJcclxuICAgIFtjbGFzcy5wby1tZW51LWl0ZW0tZ3JvdXBlci1kb3duXT1cInR5cGUgPT09ICdzdWJJdGVtcycgJiYgIWlzT3BlbmVkXCJcclxuICAgIFtjbGFzcy5wby1tZW51LXN1Yi1pdGVtLXNlbGVjdGVkXT1cImlzU2VsZWN0ZWRTdWJJdGVtXCJcclxuICAgIChjbGljayk9XCJjbGlja01lbnVJdGVtKCRldmVudClcIlxyXG4gID5cclxuICAgIDxwby1iYWRnZVxyXG4gICAgICAqbmdJZj1cImNhblNob3dCYWRnZVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIiFjb2xsYXBzZWRNZW51ID8gJ3BvLW1lbnUtYmFkZ2UtYWxpZ24nIDogJ3BvLW1lbnUtYmFkZ2UtYWxpZ24tY29sbGFwc2VkJ1wiXHJcbiAgICAgIFtwLWNvbG9yXT1cImJhZGdlQ29sb3JcIlxyXG4gICAgICBbcC12YWx1ZV09XCJiYWRnZVZhbHVlXCJcclxuICAgID5cclxuICAgIDwvcG8tYmFkZ2U+XHJcbiAgICA8cG8taWNvbiAqbmdJZj1cImxldmVsID09PSAxICYmIGljb25cIiBjbGFzcz1cInBvLW1lbnUtaWNvbi1pdGVtXCIgW3AtaWNvbl09XCJpY29uXCI+PC9wby1pY29uPlxyXG4gICAgPGRpdlxyXG4gICAgICAqbmdJZj1cImJhZGdlQWxlcnRcIlxyXG4gICAgICBjbGFzcz1cInBvLWNvbG9yLTA3XCJcclxuICAgICAgW25nQ2xhc3NdPVwiIWNvbGxhcHNlZE1lbnUgPyAncG8tbWVudS1iYWRnZS1hbGVydCcgOiAncG8tbWVudS1iYWRnZS1hbGVydC1jb2xsYXBzZWQnXCJcclxuICAgID48L2Rpdj5cclxuICAgIDxzcGFuXHJcbiAgICAgICpuZ0lmPVwidHlwZSA9PT0gJ3N1Ykl0ZW1zJyAmJiAhY29sbGFwc2VkTWVudVwiXHJcbiAgICAgIGNsYXNzPVwicG8taWNvbiBwby1tZW51LWdyb3VwLWljb25cIlxyXG4gICAgICBbY2xhc3MucG8taWNvbi1hcnJvdy11cF09XCJpc09wZW5lZFwiXHJcbiAgICAgIFtjbGFzcy5wby1pY29uLWFycm93LWRvd25dPVwiIWlzT3BlbmVkXCJcclxuICAgID5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgW2NsYXNzLnBvLW1lbnUtaWNvbi1sYWJlbF09XCJsZXZlbCA9PT0gMSAmJiBpY29uXCI+XHJcbiAgICAgIHt7IGxhYmVsIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJjb2xsYXBzZWRNZW51XCIgY2xhc3M9XCJwby1tZW51LXNob3J0LWxhYmVsXCI+e3sgc2hvcnRMYWJlbCB9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=