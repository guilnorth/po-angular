import { Component, ContentChildren } from '@angular/core';
import { PoAccordionBaseComponent } from './po-accordion-base.component';
import { PoAccordionItemComponent } from './po-accordion-item/po-accordion-item.component';
import { PoAccordionService } from './services/po-accordion.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/po-accordion.service";
import * as i2 from "@angular/common";
import * as i3 from "./po-accordion-item-body/po-accordion-item-body.component";
import * as i4 from "./po-accordion-item-header/po-accordion-item-header.component";
function PoAccordionComponent_section_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoAccordionComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2)(1, "po-accordion-item-header", 3);
    i0.ɵɵlistener("p-toggle", function PoAccordionComponent_section_1_Template_po_accordion_item_header_p_toggle_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const poAccordionItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.headerToggle($event, poAccordionItem_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "po-accordion-item-body", 4);
    i0.ɵɵtemplate(3, PoAccordionComponent_section_1_ng_container_3_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const poAccordionItem_r1 = ctx.$implicit;
    i0.ɵɵclassProp("po-accordion-item-active", poAccordionItem_r1.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-expanded", poAccordionItem_r1.expanded)("p-label", poAccordionItem_r1.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-expanded", poAccordionItem_r1.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", poAccordionItem_r1.templateRef);
} }
/**
 * @docsExtends PoAccordionBaseComponent
 *
 * @example
 *
 * <example name="po-accordion-basic" title="PO Accordion Basic" >
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.html"> </file>
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.ts"> </file>
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-accordion-labs" title="PO Accordion Labs" >
 *  <file name="sample-po-accordion-labs/sample-po-accordion-labs.component.html"> </file>
 *  <file name="sample-po-accordion-labs/sample-po-accordion-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-accordion-faq" title="PO Accordion - FAQs" >
 *  <file name="sample-po-accordion-faq/sample-po-accordion-faq.component.html"> </file>
 *  <file name="sample-po-accordion-faq/sample-po-accordion-faq.component.ts"> </file>
 * </example>
 */
export class PoAccordionComponent extends PoAccordionBaseComponent {
    constructor(accordionService) {
        super();
        this.accordionService = accordionService;
        this.receiveFromChildAccordionSubscription();
    }
    ngOnDestroy() {
        this.accordionServiceSubscription.unsubscribe();
    }
    headerToggle(event, poAccordionItem) {
        poAccordionItem.expanded = event;
        this.accordionService.sendToParentAccordionItemClicked(poAccordionItem);
    }
    receiveFromChildAccordionSubscription() {
        this.accordionServiceSubscription = this.accordionService
            .receiveFromChildAccordionClicked()
            .subscribe(poAccordionItem => this.toggle(poAccordionItem));
    }
    toggle(poAccordionItem) {
        const isCurrentAccordionCollapsed = !poAccordionItem.expanded;
        if (isCurrentAccordionCollapsed) {
            this.expandedActiveAccordionItem = null;
            return;
        }
        if (this.expandedActiveAccordionItem) {
            this.expandedActiveAccordionItem.collapse();
        }
        this.expandedActiveAccordionItem = poAccordionItem;
    }
}
PoAccordionComponent.ɵfac = function PoAccordionComponent_Factory(t) { return new (t || PoAccordionComponent)(i0.ɵɵdirectiveInject(i1.PoAccordionService)); };
PoAccordionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAccordionComponent, selectors: [["po-accordion"]], contentQueries: function PoAccordionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoAccordionItemComponent, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poAccordionItems = _t);
    } }, features: [i0.ɵɵProvidersFeature([PoAccordionService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "po-accordion", "po-container", "po-container-no-padding"], ["class", "po-accordion-item", 3, "po-accordion-item-active", 4, "ngFor", "ngForOf"], [1, "po-accordion-item"], [3, "p-expanded", "p-label", "p-toggle"], [3, "p-expanded"], [4, "ngTemplateOutlet"]], template: function PoAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoAccordionComponent_section_1_Template, 4, 6, "section", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.poAccordionItems);
    } }, dependencies: [i2.NgForOf, i2.NgTemplateOutlet, i3.PoAccordionItemBodyComponent, i4.PoAccordionItemHeaderComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAccordionComponent, [{
        type: Component,
        args: [{ selector: 'po-accordion', providers: [PoAccordionService], template: "<div class=\"po-accordion po-container po-container-no-padding\">\r\n  <section\r\n    *ngFor=\"let poAccordionItem of poAccordionItems\"\r\n    class=\"po-accordion-item\"\r\n    [class.po-accordion-item-active]=\"poAccordionItem.expanded\"\r\n  >\r\n    <po-accordion-item-header\r\n      [p-expanded]=\"poAccordionItem.expanded\"\r\n      [p-label]=\"poAccordionItem.label\"\r\n      (p-toggle)=\"headerToggle($event, poAccordionItem)\"\r\n    >\r\n    </po-accordion-item-header>\r\n\r\n    <po-accordion-item-body [p-expanded]=\"poAccordionItem.expanded\">\r\n      <ng-container *ngTemplateOutlet=\"poAccordionItem.templateRef\"></ng-container>\r\n    </po-accordion-item-body>\r\n  </section>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoAccordionService }]; }, { poAccordionItems: [{
            type: ContentChildren,
            args: [PoAccordionItemComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1hY2NvcmRpb24vcG8tYWNjb3JkaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1hY2NvcmRpb24vcG8tYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUlqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ1EvRCx3QkFBNkU7Ozs7SUFiakYsa0NBSUMsa0NBQUE7SUFJRyx5UUFBWSxlQUFBLCtDQUFxQyxDQUFBLElBQUM7SUFFcEQsaUJBQTJCO0lBRTNCLGlEQUFnRTtJQUM5RCxpR0FBNkU7SUFDL0UsaUJBQXlCLEVBQUE7OztJQVh6Qix1RUFBMkQ7SUFHekQsZUFBdUM7SUFBdkMsd0RBQXVDLHFDQUFBO0lBTWpCLGVBQXVDO0lBQXZDLHdEQUF1QztJQUM5QyxlQUE2QztJQUE3QyxpRUFBNkM7O0FETmxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFNSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXdCO0lBTWhFLFlBQW9CLGdCQUFvQztRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQURVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFFdEQsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFjLEVBQUUsZUFBeUM7UUFDcEUsZUFBZSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyxxQ0FBcUM7UUFDM0MsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEQsZ0NBQWdDLEVBQUU7YUFDbEMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxNQUFNLENBQUMsZUFBeUM7UUFDdEQsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFOUQsSUFBSSwyQkFBMkIsRUFBRTtZQUMvQixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3QztRQUVELElBQUksQ0FBQywyQkFBMkIsR0FBRyxlQUFlLENBQUM7SUFDckQsQ0FBQzs7d0ZBeENVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO29DQUNkLHdCQUF3Qjs7OzswQ0FIOUIsQ0FBQyxrQkFBa0IsQ0FBQztRQ2pDakMsOEJBQStEO1FBQzdELDZFQWVVO1FBQ1osaUJBQU07O1FBZjBCLGVBQW1CO1FBQW5CLDhDQUFtQjs7dUZEaUN0QyxvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxjQUFjLGFBRWIsQ0FBQyxrQkFBa0IsQ0FBQztxRUFHWSxnQkFBZ0I7a0JBQTFELGVBQWU7bUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBvQWNjb3JkaW9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tYWNjb3JkaW9uLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9BY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wby1hY2NvcmRpb24taXRlbS9wby1hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0FjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLWFjY29yZGlvbi5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9BY2NvcmRpb25CYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1hY2NvcmRpb24tYmFzaWNcIiB0aXRsZT1cIlBPIEFjY29yZGlvbiBCYXNpY1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYWNjb3JkaW9uLWJhc2ljL3NhbXBsZS1wby1hY2NvcmRpb24tYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hY2NvcmRpb24tYmFzaWMvc2FtcGxlLXBvLWFjY29yZGlvbi1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hY2NvcmRpb24tYmFzaWMvc2FtcGxlLXBvLWFjY29yZGlvbi1iYXNpYy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hY2NvcmRpb24tYmFzaWMvc2FtcGxlLXBvLWFjY29yZGlvbi1iYXNpYy5jb21wb25lbnQucG8udHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1hY2NvcmRpb24tbGFic1wiIHRpdGxlPVwiUE8gQWNjb3JkaW9uIExhYnNcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWFjY29yZGlvbi1sYWJzL3NhbXBsZS1wby1hY2NvcmRpb24tbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWFjY29yZGlvbi1sYWJzL3NhbXBsZS1wby1hY2NvcmRpb24tbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1hY2NvcmRpb24tZmFxXCIgdGl0bGU9XCJQTyBBY2NvcmRpb24gLSBGQVFzXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hY2NvcmRpb24tZmFxL3NhbXBsZS1wby1hY2NvcmRpb24tZmFxLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYWNjb3JkaW9uLWZhcS9zYW1wbGUtcG8tYWNjb3JkaW9uLWZhcS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWFjY29yZGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwby1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BvQWNjb3JkaW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQWNjb3JkaW9uQ29tcG9uZW50IGV4dGVuZHMgUG9BY2NvcmRpb25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkcmVuKFBvQWNjb3JkaW9uSXRlbUNvbXBvbmVudCkgcG9BY2NvcmRpb25JdGVtczogUXVlcnlMaXN0PFBvQWNjb3JkaW9uSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIHByaXZhdGUgYWNjb3JkaW9uU2VydmljZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgZXhwYW5kZWRBY3RpdmVBY2NvcmRpb25JdGVtOiBQb0FjY29yZGlvbkl0ZW1Db21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uU2VydmljZTogUG9BY2NvcmRpb25TZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5yZWNlaXZlRnJvbUNoaWxkQWNjb3JkaW9uU3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyVG9nZ2xlKGV2ZW50OiBib29sZWFuLCBwb0FjY29yZGlvbkl0ZW06IFBvQWNjb3JkaW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgcG9BY2NvcmRpb25JdGVtLmV4cGFuZGVkID0gZXZlbnQ7XHJcblxyXG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLnNlbmRUb1BhcmVudEFjY29yZGlvbkl0ZW1DbGlja2VkKHBvQWNjb3JkaW9uSXRlbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVGcm9tQ2hpbGRBY2NvcmRpb25TdWJzY3JpcHRpb24oKSB7XHJcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2VTdWJzY3JpcHRpb24gPSB0aGlzLmFjY29yZGlvblNlcnZpY2VcclxuICAgICAgLnJlY2VpdmVGcm9tQ2hpbGRBY2NvcmRpb25DbGlja2VkKClcclxuICAgICAgLnN1YnNjcmliZShwb0FjY29yZGlvbkl0ZW0gPT4gdGhpcy50b2dnbGUocG9BY2NvcmRpb25JdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZShwb0FjY29yZGlvbkl0ZW06IFBvQWNjb3JkaW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgaXNDdXJyZW50QWNjb3JkaW9uQ29sbGFwc2VkID0gIXBvQWNjb3JkaW9uSXRlbS5leHBhbmRlZDtcclxuXHJcbiAgICBpZiAoaXNDdXJyZW50QWNjb3JkaW9uQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWRBY3RpdmVBY2NvcmRpb25JdGVtID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmV4cGFuZGVkQWN0aXZlQWNjb3JkaW9uSXRlbSkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkQWN0aXZlQWNjb3JkaW9uSXRlbS5jb2xsYXBzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwYW5kZWRBY3RpdmVBY2NvcmRpb25JdGVtID0gcG9BY2NvcmRpb25JdGVtO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tYWNjb3JkaW9uIHBvLWNvbnRhaW5lciBwby1jb250YWluZXItbm8tcGFkZGluZ1wiPlxyXG4gIDxzZWN0aW9uXHJcbiAgICAqbmdGb3I9XCJsZXQgcG9BY2NvcmRpb25JdGVtIG9mIHBvQWNjb3JkaW9uSXRlbXNcIlxyXG4gICAgY2xhc3M9XCJwby1hY2NvcmRpb24taXRlbVwiXHJcbiAgICBbY2xhc3MucG8tYWNjb3JkaW9uLWl0ZW0tYWN0aXZlXT1cInBvQWNjb3JkaW9uSXRlbS5leHBhbmRlZFwiXHJcbiAgPlxyXG4gICAgPHBvLWFjY29yZGlvbi1pdGVtLWhlYWRlclxyXG4gICAgICBbcC1leHBhbmRlZF09XCJwb0FjY29yZGlvbkl0ZW0uZXhwYW5kZWRcIlxyXG4gICAgICBbcC1sYWJlbF09XCJwb0FjY29yZGlvbkl0ZW0ubGFiZWxcIlxyXG4gICAgICAocC10b2dnbGUpPVwiaGVhZGVyVG9nZ2xlKCRldmVudCwgcG9BY2NvcmRpb25JdGVtKVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cclxuXHJcbiAgICA8cG8tYWNjb3JkaW9uLWl0ZW0tYm9keSBbcC1leHBhbmRlZF09XCJwb0FjY29yZGlvbkl0ZW0uZXhwYW5kZWRcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBvQWNjb3JkaW9uSXRlbS50ZW1wbGF0ZVJlZlwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9wby1hY2NvcmRpb24taXRlbS1ib2R5PlxyXG4gIDwvc2VjdGlvbj5cclxuPC9kaXY+XHJcbiJdfQ==