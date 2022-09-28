import { Component, ElementRef, ViewChild } from '@angular/core';
import { PoBreadcrumbBaseComponent } from './po-breadcrumb-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-breadcrumb-dropdown/po-breadcrumb-dropdown.component";
import * as i3 from "./po-breadcrumb-favorite/po-breadcrumb-favorite.component";
import * as i4 from "./po-breadcrumb-item/po-breadcrumb-item.component";
const _c0 = ["breadcrumb"];
const _c1 = ["dropdownIcon"];
function PoBreadcrumbComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7, 8);
    i0.ɵɵlistener("click", function PoBreadcrumbComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleDropdown()); });
    i0.ɵɵelement(2, "span", 9)(3, "div", 10);
    i0.ɵɵelementEnd();
} }
function PoBreadcrumbComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "po-breadcrumb-item", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const itemIndex_r9 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-action", item_r8.action)("p-label", item_r8.label)("p-link", item_r8.link)("p-item-active", itemIndex_r9 === ctx_r2.itemsView.length - 1);
} }
function PoBreadcrumbComponent_po_breadcrumb_favorite_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-breadcrumb-favorite", 12);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-favorite-service", ctx_r3.favoriteService)("p-item-active", ctx_r3.items[ctx_r3.items.length - 1])("p-params-service", ctx_r3.paramsService);
} }
function PoBreadcrumbComponent_po_breadcrumb_dropdown_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-breadcrumb-dropdown", 13);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-items", ctx_r4.dropdownItems);
} }
/**
 * @docsExtends PoBreadcrumbBaseComponent
 *
 * @example
 *
 * <example name="po-breadcrumb-basic" title="PO Breadcrumb Basic">
 *  <file name="sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"> </file>
 *  <file name="sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-breadcrumb-labs" title="PO Breadcrumb Labs">
 *  <file name="sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"> </file>
 *  <file name="sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"> </file>
 * </example>
 */
export class PoBreadcrumbComponent extends PoBreadcrumbBaseComponent {
    constructor(differs, element, renderer) {
        super();
        this.element = element;
        this.renderer = renderer;
        this.showDropdown = false;
        this.showDropdownToggle = false;
        this._breadcrumbItemsLenght = 0;
        this.calculatedElement = false;
        this.hiddenWithoutResize = false;
        this.initialized = false;
        this.wasClickedonDropdown = (event) => {
            const clickedOutIconDropdown = this.checkClickOutElement(event, this.dropdownIcon);
            if (clickedOutIconDropdown) {
                this.showDropdown = false;
                this.removeClickoutListener();
            }
        };
        this.differ = differs.find([]).create(null);
    }
    ngAfterViewInit() {
        this.initialized = true;
        this.initializeResizeListener();
    }
    ngDoCheck() {
        const breadcrumbWidth = this.breadcrumbElement.nativeElement.offsetWidth;
        // Permite que os disclaimers sejam calculados na primeira vez que o componente torna-se visível,
        // evitando com isso, problemas com Tabs ou Divs que iniciem escondidas.
        if (breadcrumbWidth && !this.calculatedElement && this.initialized) {
            this.initBreadcrumbSize();
        }
        if (this.hiddenWithoutResize) {
            this.debounceResize();
            this.hiddenWithoutResize = false;
        }
        this.checkChangeOnItems();
    }
    ngOnDestroy() {
        this.removeClickoutListener();
        this.removeResizeListener();
    }
    toggleDropdown() {
        this.showDropdown = !this.showDropdown;
        this.initializeClickoutListener();
    }
    checkClickOutElement(event, element) {
        return element && !element.nativeElement.contains(event.target);
    }
    checkChangeOnItems() {
        if (this.differ) {
            const changes = this.differ.diff(this.items);
            if (changes) {
                this.calcBreadcrumbItemsWidth();
                this.calculatedElement = false;
            }
        }
    }
    calcBreadcrumb() {
        const breadcrumbFavorite = this.getBreadcrumbFavoriteWidth();
        const breadcrumb = this.getBreadcrumbWidth(breadcrumbFavorite);
        if (breadcrumb <= this._breadcrumbItemsLenght) {
            this.enableBreadcrumbResponsive();
        }
        else {
            this.disableBreadcrumbResponsive();
        }
    }
    getBreadcrumbFavoriteWidth() {
        return this.favoriteService
            ? this.element.nativeElement.querySelector('.po-breadcrumb-favorite').offsetWidth + 20
            : 0;
    }
    getBreadcrumbWidth(breadcrumbFavorite) {
        return this.element.nativeElement.querySelector('.po-breadcrumb').offsetWidth - breadcrumbFavorite;
    }
    calcBreadcrumbItemsWidth() {
        const breadcrumbItem = this.element.nativeElement.querySelectorAll('.po-breadcrumb-item, .po-breadcrumb-item-unclickable');
        this._breadcrumbItemsLenght = Array.from(breadcrumbItem)
            .map(breadcrumb => breadcrumb['offsetWidth'])
            .reduce((a, b) => a + b, 16);
    }
    enableBreadcrumbResponsive() {
        this.showDropdownToggle = true;
        this.itemsView = this.items.slice(-2);
        this.dropdownItems = this.items.slice(0, -2).reverse();
    }
    disableBreadcrumbResponsive() {
        this.showDropdownToggle = false;
        this.itemsView = [].concat(this.items);
        this.showDropdown = false;
    }
    debounceResize() {
        clearTimeout(this.timeoutResize);
        this.timeoutResize = setTimeout(() => {
            if (this.calculatedElement &&
                !this.hiddenWithoutResize &&
                this.breadcrumbElement.nativeElement.offsetWidth === 0) {
                this.hiddenWithoutResize = true;
            }
            else {
                this.calcBreadcrumb();
            }
        }, 50);
    }
    initBreadcrumbSize() {
        this.calcBreadcrumbItemsWidth();
        this.calcBreadcrumb();
        this.calculatedElement = true;
    }
    initializeClickoutListener() {
        this.clickoutListener = this.renderer.listen('document', 'click', this.wasClickedonDropdown);
    }
    initializeResizeListener() {
        this.resizeListener = this.renderer.listen('window', 'resize', (event) => {
            this.debounceResize();
        });
    }
    removeClickoutListener() {
        if (this.clickoutListener) {
            this.clickoutListener();
        }
    }
    removeResizeListener() {
        this.resizeListener();
    }
}
PoBreadcrumbComponent.ɵfac = function PoBreadcrumbComponent_Factory(t) { return new (t || PoBreadcrumbComponent)(i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoBreadcrumbComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoBreadcrumbComponent, selectors: [["po-breadcrumb"]], viewQuery: function PoBreadcrumbComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(_c1, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.breadcrumbElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownIcon = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 4, consts: [[1, "po-breadcrumb"], ["breadcrumb", ""], [1, "po-breadcrumb-items"], ["class", "po-breadcrumb-item po-clickable", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "p-favorite-service", "p-item-active", "p-params-service", 4, "ngIf"], [3, "p-items", 4, "ngIf"], [1, "po-breadcrumb-item", "po-clickable", 3, "click"], ["dropdownIcon", ""], [1, "po-breadcrumb-icon-more", "po-icon", "po-icon-more"], [1, "po-breadcrumb-arrow"], [3, "p-action", "p-label", "p-link", "p-item-active"], [3, "p-favorite-service", "p-item-active", "p-params-service"], [3, "p-items"]], template: function PoBreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1)(2, "ul", 2);
        i0.ɵɵtemplate(3, PoBreadcrumbComponent_li_3_Template, 4, 0, "li", 3);
        i0.ɵɵtemplate(4, PoBreadcrumbComponent_div_4_Template, 2, 4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PoBreadcrumbComponent_po_breadcrumb_favorite_5_Template, 1, 3, "po-breadcrumb-favorite", 5);
        i0.ɵɵtemplate(6, PoBreadcrumbComponent_po_breadcrumb_dropdown_6_Template, 1, 1, "po-breadcrumb-dropdown", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.showDropdownToggle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.itemsView);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.favoriteService);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showDropdown);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.PoBreadcrumbDropdownComponent, i3.PoBreadcrumbFavoriteComponent, i4.PoBreadcrumbItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'po-breadcrumb', template: "<div class=\"po-breadcrumb\" #breadcrumb>\r\n  <ul class=\"po-breadcrumb-items\">\r\n    <li #dropdownIcon *ngIf=\"showDropdownToggle\" class=\"po-breadcrumb-item po-clickable\" (click)=\"toggleDropdown()\">\r\n      <span class=\"po-breadcrumb-icon-more po-icon po-icon-more\"></span>\r\n      <div class=\"po-breadcrumb-arrow\"></div>\r\n    </li>\r\n\r\n    <div *ngFor=\"let item of itemsView; let itemIndex = index\">\r\n      <po-breadcrumb-item\r\n        [p-action]=\"item.action\"\r\n        [p-label]=\"item.label\"\r\n        [p-link]=\"item.link\"\r\n        [p-item-active]=\"itemIndex === itemsView.length - 1\"\r\n      >\r\n      </po-breadcrumb-item>\r\n    </div>\r\n  </ul>\r\n\r\n  <po-breadcrumb-favorite\r\n    *ngIf=\"favoriteService\"\r\n    [p-favorite-service]=\"favoriteService\"\r\n    [p-item-active]=\"items[items.length - 1]\"\r\n    [p-params-service]=\"paramsService\"\r\n  >\r\n  </po-breadcrumb-favorite>\r\n\r\n  <po-breadcrumb-dropdown *ngIf=\"showDropdown\" [p-items]=\"dropdownItems\"> </po-breadcrumb-dropdown>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.IterableDiffers }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { breadcrumbElement: [{
            type: ViewChild,
            args: ['breadcrumb', { read: ElementRef, static: true }]
        }], dropdownIcon: [{
            type: ViewChild,
            args: ['dropdownIcon', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYnJlYWRjcnVtYi9wby1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1icmVhZGNydW1iL3BvLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBSVYsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7O0lDVHZFLGdDQUFnSDtJQUEzQiw2SkFBUyxlQUFBLHVCQUFnQixDQUFBLElBQUM7SUFDN0csMEJBQWtFLGNBQUE7SUFFcEUsaUJBQUs7OztJQUVMLDJCQUEyRDtJQUN6RCx5Q0FNcUI7SUFDdkIsaUJBQU07Ozs7O0lBTkYsZUFBd0I7SUFBeEIseUNBQXdCLDBCQUFBLHdCQUFBLCtEQUFBOzs7SUFTOUIsNkNBTXlCOzs7SUFKdkIsMkRBQXNDLHdEQUFBLDBDQUFBOzs7SUFNeEMsNkNBQWlHOzs7SUFBcEQsOENBQXlCOztBRFp4RTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUtILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7SUFlbEUsWUFBWSxPQUF3QixFQUFVLE9BQW1CLEVBQVMsUUFBbUI7UUFDM0YsS0FBSyxFQUFFLENBQUM7UUFEb0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFYN0YsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBRzVCLDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxzQkFBaUIs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VTsrQkFDUixVQUFVOzs7Ozs7UUNuQy9DLGlDQUF1QyxZQUFBO1FBRW5DLG9FQUdLO1FBRUwsc0VBUU07UUFDUixpQkFBSztRQUVMLDRHQU15QjtRQUV6Qiw0R0FBaUc7UUFDbkcsaUJBQU07O1FBekJpQixlQUF3QjtRQUF4Qiw2Q0FBd0I7UUFLckIsZUFBYztRQUFkLHVDQUFjO1FBWW5DLGVBQXFCO1FBQXJCLDBDQUFxQjtRQU9DLGVBQWtCO1FBQWxCLHVDQUFrQjs7dUZET2hDLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNFLGVBQWU7bUhBSW9DLGlCQUFpQjtrQkFBN0UsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDVixZQUFZO2tCQUE1RCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQnJlYWRjcnVtYkJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWJyZWFkY3J1bWItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0JyZWFkY3J1bWJJdGVtIH0gZnJvbSAnLi9wby1icmVhZGNydW1iLWl0ZW0uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9CcmVhZGNydW1iQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tYnJlYWRjcnVtYi1iYXNpY1wiIHRpdGxlPVwiUE8gQnJlYWRjcnVtYiBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1icmVhZGNydW1iLWJhc2ljL3NhbXBsZS1wby1icmVhZGNydW1iLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnJlYWRjcnVtYi1iYXNpYy9zYW1wbGUtcG8tYnJlYWRjcnVtYi1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1icmVhZGNydW1iLWxhYnNcIiB0aXRsZT1cIlBPIEJyZWFkY3J1bWIgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1icmVhZGNydW1iLWxhYnMvc2FtcGxlLXBvLWJyZWFkY3J1bWItbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWJyZWFkY3J1bWItbGFicy9zYW1wbGUtcG8tYnJlYWRjcnVtYi1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0JyZWFkY3J1bWJDb21wb25lbnQgZXh0ZW5kcyBQb0JyZWFkY3J1bWJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdicmVhZGNydW1iJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgYnJlYWRjcnVtYkVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25JY29uJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRyb3Bkb3duSWNvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgc2hvd0Ryb3Bkb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0Ryb3Bkb3duVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZHJvcGRvd25JdGVtczogQXJyYXk8UG9CcmVhZGNydW1iSXRlbT47XHJcblxyXG4gIHByaXZhdGUgX2JyZWFkY3J1bWJJdGVtc0xlbmdodDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGNhbGN1bGF0ZWRFbGVtZW50ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkaWZmZXI7XHJcbiAgcHJpdmF0ZSBoaWRkZW5XaXRob3V0UmVzaXplID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZW91dFJlc2l6ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZVJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBjb25zdCBicmVhZGNydW1iV2lkdGggPSB0aGlzLmJyZWFkY3J1bWJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgLy8gUGVybWl0ZSBxdWUgb3MgZGlzY2xhaW1lcnMgc2VqYW0gY2FsY3VsYWRvcyBuYSBwcmltZWlyYSB2ZXogcXVlIG8gY29tcG9uZW50ZSB0b3JuYS1zZSB2aXPDrXZlbCxcclxuICAgIC8vIGV2aXRhbmRvIGNvbSBpc3NvLCBwcm9ibGVtYXMgY29tIFRhYnMgb3UgRGl2cyBxdWUgaW5pY2llbSBlc2NvbmRpZGFzLlxyXG4gICAgaWYgKGJyZWFkY3J1bWJXaWR0aCAmJiAhdGhpcy5jYWxjdWxhdGVkRWxlbWVudCAmJiB0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdEJyZWFkY3J1bWJTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaGlkZGVuV2l0aG91dFJlc2l6ZSkge1xyXG4gICAgICB0aGlzLmRlYm91bmNlUmVzaXplKCk7XHJcbiAgICAgIHRoaXMuaGlkZGVuV2l0aG91dFJlc2l6ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGFuZ2VPbkl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2xpY2tvdXRMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5yZW1vdmVSZXNpemVMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLnNob3dEcm9wZG93biA9ICF0aGlzLnNob3dEcm9wZG93bjtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUNsaWNrb3V0TGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FzQ2xpY2tlZG9uRHJvcGRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGNsaWNrZWRPdXRJY29uRHJvcGRvd24gPSB0aGlzLmNoZWNrQ2xpY2tPdXRFbGVtZW50KGV2ZW50LCB0aGlzLmRyb3Bkb3duSWNvbik7XHJcblxyXG4gICAgaWYgKGNsaWNrZWRPdXRJY29uRHJvcGRvd24pIHtcclxuICAgICAgdGhpcy5zaG93RHJvcGRvd24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZW1vdmVDbGlja291dExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja0NsaWNrT3V0RWxlbWVudChldmVudCwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQgJiYgIWVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0NoYW5nZU9uSXRlbXMoKSB7XHJcbiAgICBpZiAodGhpcy5kaWZmZXIpIHtcclxuICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5pdGVtcyk7XHJcbiAgICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjQnJlYWRjcnVtYkl0ZW1zV2lkdGgoKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZWRFbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY0JyZWFkY3J1bWIoKSB7XHJcbiAgICBjb25zdCBicmVhZGNydW1iRmF2b3JpdGUgPSB0aGlzLmdldEJyZWFkY3J1bWJGYXZvcml0ZVdpZHRoKCk7XHJcbiAgICBjb25zdCBicmVhZGNydW1iID0gdGhpcy5nZXRCcmVhZGNydW1iV2lkdGgoYnJlYWRjcnVtYkZhdm9yaXRlKTtcclxuXHJcbiAgICBpZiAoYnJlYWRjcnVtYiA8PSB0aGlzLl9icmVhZGNydW1iSXRlbXNMZW5naHQpIHtcclxuICAgICAgdGhpcy5lbmFibGVCcmVhZGNydW1iUmVzcG9uc2l2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNhYmxlQnJlYWRjcnVtYlJlc3BvbnNpdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnJlYWRjcnVtYkZhdm9yaXRlV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVNlcnZpY2VcclxuICAgICAgPyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG8tYnJlYWRjcnVtYi1mYXZvcml0ZScpLm9mZnNldFdpZHRoICsgMjBcclxuICAgICAgOiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCcmVhZGNydW1iV2lkdGgoYnJlYWRjcnVtYkZhdm9yaXRlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvLWJyZWFkY3J1bWInKS5vZmZzZXRXaWR0aCAtIGJyZWFkY3J1bWJGYXZvcml0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY0JyZWFkY3J1bWJJdGVtc1dpZHRoKCkge1xyXG4gICAgY29uc3QgYnJlYWRjcnVtYkl0ZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLnBvLWJyZWFkY3J1bWItaXRlbSwgLnBvLWJyZWFkY3J1bWItaXRlbS11bmNsaWNrYWJsZSdcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fYnJlYWRjcnVtYkl0ZW1zTGVuZ2h0ID0gQXJyYXkuZnJvbShicmVhZGNydW1iSXRlbSlcclxuICAgICAgLm1hcChicmVhZGNydW1iID0+IGJyZWFkY3J1bWJbJ29mZnNldFdpZHRoJ10pXHJcbiAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAxNik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUJyZWFkY3J1bWJSZXNwb25zaXZlKCkge1xyXG4gICAgdGhpcy5zaG93RHJvcGRvd25Ub2dnbGUgPSB0cnVlO1xyXG4gICAgdGhpcy5pdGVtc1ZpZXcgPSB0aGlzLml0ZW1zLnNsaWNlKC0yKTtcclxuICAgIHRoaXMuZHJvcGRvd25JdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UoMCwgLTIpLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUJyZWFkY3J1bWJSZXNwb25zaXZlKCkge1xyXG4gICAgdGhpcy5zaG93RHJvcGRvd25Ub2dnbGUgPSBmYWxzZTtcclxuICAgIHRoaXMuaXRlbXNWaWV3ID0gW10uY29uY2F0KHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5zaG93RHJvcGRvd24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVib3VuY2VSZXNpemUoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0UmVzaXplKTtcclxuICAgIHRoaXMudGltZW91dFJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVkRWxlbWVudCAmJlxyXG4gICAgICAgICF0aGlzLmhpZGRlbldpdGhvdXRSZXNpemUgJiZcclxuICAgICAgICB0aGlzLmJyZWFkY3J1bWJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggPT09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5XaXRob3V0UmVzaXplID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhbGNCcmVhZGNydW1iKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEJyZWFkY3J1bWJTaXplKCkge1xyXG4gICAgdGhpcy5jYWxjQnJlYWRjcnVtYkl0ZW1zV2lkdGgoKTtcclxuICAgIHRoaXMuY2FsY0JyZWFkY3J1bWIoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlZEVsZW1lbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQ2xpY2tvdXRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuY2xpY2tvdXRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIHRoaXMud2FzQ2xpY2tlZG9uRHJvcGRvd24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplUmVzaXplTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kZWJvdW5jZVJlc2l6ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUNsaWNrb3V0TGlzdGVuZXIoKSB7XHJcbiAgICBpZiAodGhpcy5jbGlja291dExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tvdXRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVSZXNpemVMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMucmVzaXplTGlzdGVuZXIoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWJyZWFkY3J1bWJcIiAjYnJlYWRjcnVtYj5cclxuICA8dWwgY2xhc3M9XCJwby1icmVhZGNydW1iLWl0ZW1zXCI+XHJcbiAgICA8bGkgI2Ryb3Bkb3duSWNvbiAqbmdJZj1cInNob3dEcm9wZG93blRvZ2dsZVwiIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1pdGVtIHBvLWNsaWNrYWJsZVwiIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicG8tYnJlYWRjcnVtYi1pY29uLW1vcmUgcG8taWNvbiBwby1pY29uLW1vcmVcIj48L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1icmVhZGNydW1iLWFycm93XCI+PC9kaXY+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNWaWV3OyBsZXQgaXRlbUluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgPHBvLWJyZWFkY3J1bWItaXRlbVxyXG4gICAgICAgIFtwLWFjdGlvbl09XCJpdGVtLmFjdGlvblwiXHJcbiAgICAgICAgW3AtbGFiZWxdPVwiaXRlbS5sYWJlbFwiXHJcbiAgICAgICAgW3AtbGlua109XCJpdGVtLmxpbmtcIlxyXG4gICAgICAgIFtwLWl0ZW0tYWN0aXZlXT1cIml0ZW1JbmRleCA9PT0gaXRlbXNWaWV3Lmxlbmd0aCAtIDFcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnJlYWRjcnVtYi1pdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC91bD5cclxuXHJcbiAgPHBvLWJyZWFkY3J1bWItZmF2b3JpdGVcclxuICAgICpuZ0lmPVwiZmF2b3JpdGVTZXJ2aWNlXCJcclxuICAgIFtwLWZhdm9yaXRlLXNlcnZpY2VdPVwiZmF2b3JpdGVTZXJ2aWNlXCJcclxuICAgIFtwLWl0ZW0tYWN0aXZlXT1cIml0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdXCJcclxuICAgIFtwLXBhcmFtcy1zZXJ2aWNlXT1cInBhcmFtc1NlcnZpY2VcIlxyXG4gID5cclxuICA8L3BvLWJyZWFkY3J1bWItZmF2b3JpdGU+XHJcblxyXG4gIDxwby1icmVhZGNydW1iLWRyb3Bkb3duICpuZ0lmPVwic2hvd0Ryb3Bkb3duXCIgW3AtaXRlbXNdPVwiZHJvcGRvd25JdGVtc1wiPiA8L3BvLWJyZWFkY3J1bWItZHJvcGRvd24+XHJcbjwvZGl2PlxyXG4iXX0=