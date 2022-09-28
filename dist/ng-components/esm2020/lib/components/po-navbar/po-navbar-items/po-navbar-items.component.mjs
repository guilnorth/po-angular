import { Component, ElementRef, Input, ViewChild, ViewChildren } from '@angular/core';
import { NavigationCancel, NavigationEnd } from '@angular/router';
import { PoNavbarItemComponent } from './po-navbar-item/po-navbar-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./po-navbar-item/po-navbar-item.component";
const _c0 = ["navbarItemsContainer"];
function PoNavbarItemsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 3);
    i0.ɵɵelement(1, "po-navbar-item", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-navbar-item-selected", ctx_r1.selectedItem === item_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-action", item_r2.action)("p-clickable", ctx_r1.selectedItem !== item_r2)("p-label", item_r2.label)("p-link", item_r2.link);
} }
export class PoNavbarItemsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToRoute();
    }
    checkActiveItemByUrl(urlRouter) {
        const urlArray = urlRouter.split('/');
        let counter = urlArray.length;
        while (counter >= 0) {
            const url = urlArray.slice(0, counter).join('/');
            this.selectedItem = this.items.find(item => item.link === url);
            if (this.selectedItem) {
                break;
            }
            counter--;
        }
    }
    checkRouterChildrenFragments() {
        const childrenPrimary = this.router.parseUrl(this.router.url).root.children['primary'];
        return childrenPrimary ? `/${childrenPrimary.segments.map(it => it.path).join('/')}` : '/';
    }
    subscribeToRoute() {
        this.routeSubscription = this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd || val instanceof NavigationCancel) {
                const urlRouter = this.checkRouterChildrenFragments();
                this.checkActiveItemByUrl(urlRouter);
            }
        });
    }
}
PoNavbarItemsComponent.ɵfac = function PoNavbarItemsComponent_Factory(t) { return new (t || PoNavbarItemsComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
PoNavbarItemsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarItemsComponent, selectors: [["po-navbar-items"]], viewQuery: function PoNavbarItemsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(PoNavbarItemComponent, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbarItemsContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allNavbarItems = _t);
    } }, inputs: { items: ["p-items", "items"] }, decls: 4, vars: 1, consts: [[1, "po-navbar-items-container"], ["navbarItemsContainer", ""], ["class", "po-navbar-item", 3, "po-navbar-item-selected", 4, "ngFor", "ngForOf"], [1, "po-navbar-item"], [3, "p-action", "p-clickable", "p-label", "p-link"]], template: function PoNavbarItemsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav")(1, "ul", 0, 1);
        i0.ɵɵtemplate(3, PoNavbarItemsComponent_li_3_Template, 2, 6, "li", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, dependencies: [i2.NgForOf, i3.PoNavbarItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarItemsComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-items', template: "<nav>\r\n  <ul class=\"po-navbar-items-container\" #navbarItemsContainer>\r\n    <li *ngFor=\"let item of items\" class=\"po-navbar-item\" [class.po-navbar-item-selected]=\"selectedItem === item\">\r\n      <po-navbar-item\r\n        [p-action]=\"item.action\"\r\n        [p-clickable]=\"selectedItem !== item\"\r\n        [p-label]=\"item.label\"\r\n        [p-link]=\"item.link\"\r\n      >\r\n      </po-navbar-item>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n" }]
    }], function () { return [{ type: i1.Router }]; }, { navbarItemsContainer: [{
            type: ViewChild,
            args: ['navbarItemsContainer', { read: ElementRef, static: true }]
        }], allNavbarItems: [{
            type: ViewChildren,
            args: [PoNavbarItemComponent, { read: ElementRef }]
        }], items: [{
            type: Input,
            args: ['p-items']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1uYXZiYXIvcG8tbmF2YmFyLWl0ZW1zL3BvLW5hdmJhci1pdGVtcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1pdGVtcy9wby1uYXZiYXItaXRlbXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFnQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUsxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7OztJQ0o5RSw2QkFBOEc7SUFDNUcsb0NBTWlCO0lBQ25CLGlCQUFLOzs7O0lBUmlELDBFQUF1RDtJQUV6RyxlQUF3QjtJQUF4Qix5Q0FBd0IsZ0RBQUEsMEJBQUEsd0JBQUE7O0FEUWhDLE1BQU0sT0FBTyxzQkFBc0I7SUFXakMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sb0JBQW9CLENBQUMsU0FBaUI7UUFDNUMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTlCLE9BQU8sT0FBTyxJQUFJLENBQUMsRUFBRTtZQUNuQixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFL0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixNQUFNO2FBQ1A7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVPLDRCQUE0QjtRQUNsQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkYsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3RixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFlBQVksYUFBYSxJQUFJLEdBQUcsWUFBWSxnQkFBZ0IsRUFBRTtnQkFDbkUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEZBakRVLHNCQUFzQjt5RUFBdEIsc0JBQXNCOytCQUNVLFVBQVU7dUJBRXZDLHFCQUFxQixLQUFVLFVBQVU7Ozs7OztRQ2Z6RCwyQkFBSyxlQUFBO1FBRUQscUVBUUs7UUFDUCxpQkFBSyxFQUFBOztRQVRrQixlQUFRO1FBQVIsbUNBQVE7O3VGRFVwQixzQkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSxpQkFBaUI7eURBSTRDLG9CQUFvQjtrQkFBMUYsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVWLGNBQWM7a0JBQXhFLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBRXZDLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBvTmF2YmFySXRlbSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tbmF2YmFyLWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9OYXZiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wby1uYXZiYXItaXRlbS9wby1uYXZiYXItaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1uYXZiYXItaXRlbXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1uYXZiYXItaXRlbXMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ25hdmJhckl0ZW1zQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgbmF2YmFySXRlbXNDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oUG9OYXZiYXJJdGVtQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYWxsTmF2YmFySXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xyXG5cclxuICBASW5wdXQoJ3AtaXRlbXMnKSBpdGVtczogQXJyYXk8UG9OYXZiYXJJdGVtPjtcclxuXHJcbiAgc2VsZWN0ZWRJdGVtOiBQb05hdmJhckl0ZW07XHJcblxyXG4gIHByaXZhdGUgcm91dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9Sb3V0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0FjdGl2ZUl0ZW1CeVVybCh1cmxSb3V0ZXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXJsQXJyYXkgPSB1cmxSb3V0ZXIuc3BsaXQoJy8nKTtcclxuICAgIGxldCBjb3VudGVyID0gdXJsQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb3VudGVyID49IDApIHtcclxuICAgICAgY29uc3QgdXJsID0gdXJsQXJyYXkuc2xpY2UoMCwgY291bnRlcikuam9pbignLycpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0ubGluayA9PT0gdXJsKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvdW50ZXItLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tSb3V0ZXJDaGlsZHJlbkZyYWdtZW50cygpIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuUHJpbWFyeSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyLnVybCkucm9vdC5jaGlsZHJlblsncHJpbWFyeSddO1xyXG5cclxuICAgIHJldHVybiBjaGlsZHJlblByaW1hcnkgPyBgLyR7Y2hpbGRyZW5QcmltYXJ5LnNlZ21lbnRzLm1hcChpdCA9PiBpdC5wYXRoKS5qb2luKCcvJyl9YCA6ICcvJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IHZhbCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpIHtcclxuICAgICAgICBjb25zdCB1cmxSb3V0ZXIgPSB0aGlzLmNoZWNrUm91dGVyQ2hpbGRyZW5GcmFnbWVudHMoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQWN0aXZlSXRlbUJ5VXJsKHVybFJvdXRlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8bmF2PlxyXG4gIDx1bCBjbGFzcz1cInBvLW5hdmJhci1pdGVtcy1jb250YWluZXJcIiAjbmF2YmFySXRlbXNDb250YWluZXI+XHJcbiAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cInBvLW5hdmJhci1pdGVtXCIgW2NsYXNzLnBvLW5hdmJhci1pdGVtLXNlbGVjdGVkXT1cInNlbGVjdGVkSXRlbSA9PT0gaXRlbVwiPlxyXG4gICAgICA8cG8tbmF2YmFyLWl0ZW1cclxuICAgICAgICBbcC1hY3Rpb25dPVwiaXRlbS5hY3Rpb25cIlxyXG4gICAgICAgIFtwLWNsaWNrYWJsZV09XCJzZWxlY3RlZEl0ZW0gIT09IGl0ZW1cIlxyXG4gICAgICAgIFtwLWxhYmVsXT1cIml0ZW0ubGFiZWxcIlxyXG4gICAgICAgIFtwLWxpbmtdPVwiaXRlbS5saW5rXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLW5hdmJhci1pdGVtPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5cclxuIl19