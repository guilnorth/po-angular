import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoTreeViewBaseComponent } from './po-tree-view-base.component';
import { PoTreeViewService } from './services/po-tree-view.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/po-tree-view.service";
import * as i2 from "@angular/common";
import * as i3 from "../po-container/po-container.component";
import * as i4 from "./po-tree-view-item/po-tree-view-item.component";
function PoTreeViewComponent_po_container_0_po_tree_view_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-tree-view-item", 4);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-item", item_r2)("p-selectable", ctx_r1.selectable);
} }
function PoTreeViewComponent_po_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-container", 1)(1, "ul", 2);
    i0.ɵɵtemplate(2, PoTreeViewComponent_po_container_0_po_tree_view_item_2_Template, 1, 2, "po-tree-view-item", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.items)("ngForTrackBy", ctx_r0.trackByFunction);
} }
/**
 * @docsExtends PoTreeViewBaseComponent
 *
 * @example
 *
 * <example name="po-tree-view-basic" title="PO Tree View Basic">
 *  <file name="sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"> </file>
 *  <file name="sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tree-view-labs" title="PO Tree View Labs">
 *  <file name="sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"> </file>
 *  <file name="sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tree-view-folder-structure" title="PO Tree View - Folder Structure">
 *  <file name="sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"> </file>
 *  <file name="sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"> </file>
 * </example>
 *
 * <example name="po-tree-view-supermarket" title="PO Tree View - Supermarket">
 *  <file name="sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"> </file>
 *  <file name="sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"> </file>
 * </example>
 */
export class PoTreeViewComponent extends PoTreeViewBaseComponent {
    constructor(treeViewService) {
        super();
        this.treeViewService = treeViewService;
    }
    get hasItems() {
        return !!(this.items && this.items.length);
    }
    ngOnInit() {
        this.treeViewService.onExpand().subscribe((treeViewItem) => {
            this.emitExpanded(treeViewItem);
        });
        this.treeViewService.onSelect().subscribe((treeViewItem) => {
            this.emitSelected(treeViewItem);
        });
    }
    trackByFunction(index) {
        return index;
    }
}
PoTreeViewComponent.ɵfac = function PoTreeViewComponent_Factory(t) { return new (t || PoTreeViewComponent)(i0.ɵɵdirectiveInject(i1.PoTreeViewService)); };
PoTreeViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTreeViewComponent, selectors: [["po-tree-view"]], features: [i0.ɵɵProvidersFeature([PoTreeViewService]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["p-no-padding", "", "p-no-shadow", "", 4, "ngIf"], ["p-no-padding", "", "p-no-shadow", ""], [1, "po-tree-view"], [3, "p-item", "p-selectable", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "p-item", "p-selectable"]], template: function PoTreeViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoTreeViewComponent_po_container_0_Template, 3, 2, "po-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasItems);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PoContainerComponent, i4.PoTreeViewItemComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTreeViewComponent, [{
        type: Component,
        args: [{ selector: 'po-tree-view', changeDetection: ChangeDetectionStrategy.OnPush, providers: [PoTreeViewService], template: "<po-container *ngIf=\"hasItems\" p-no-padding p-no-shadow>\r\n  <ul class=\"po-tree-view\">\r\n    <po-tree-view-item *ngFor=\"let item of items; trackBy: trackByFunction\" [p-item]=\"item\" [p-selectable]=\"selectable\">\r\n    </po-tree-view-item>\r\n  </ul>\r\n</po-container>\r\n" }]
    }], function () { return [{ type: i1.PoTreeViewService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdHJlZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10cmVlLXZpZXcvcG8tdHJlZS12aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10cmVlLXZpZXcvcG8tdHJlZS12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7SUNGaEUsdUNBQ29COzs7O0lBRG9ELGdDQUFlLG1DQUFBOzs7SUFGM0YsdUNBQXdELFlBQUE7SUFFcEQsK0dBQ29CO0lBQ3RCLGlCQUFLLEVBQUE7OztJQUZpQyxlQUFVO0lBQVYsc0NBQVUsd0NBQUE7O0FESWxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFPSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsdUJBQXVCO0lBSzlELFlBQW9CLGVBQWtDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFUsb0JBQWUsR0FBZixlQUFlLENBQW1CO0lBRXRELENBQUM7SUFORCxJQUFJLFFBQVE7UUFDVixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBNEIsRUFBRSxFQUFFO1lBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQTRCLEVBQUUsRUFBRTtZQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFhO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7c0ZBckJVLG1CQUFtQjtzRUFBbkIsbUJBQW1CLGtFQUZuQixDQUFDLGlCQUFpQixDQUFDO1FDbkNoQyxzRkFLZTs7UUFMQSxtQ0FBYzs7dUZEcUNoQixtQkFBbUI7Y0FOL0IsU0FBUzsyQkFDRSxjQUFjLG1CQUVQLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UcmVlVmlld0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXRyZWUtdmlldy1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVHJlZVZpZXdJdGVtIH0gZnJvbSAnLi9wby10cmVlLXZpZXctaXRlbS9wby10cmVlLXZpZXctaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RyZWVWaWV3U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tdHJlZS12aWV3LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1RyZWVWaWV3QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdHJlZS12aWV3LWJhc2ljXCIgdGl0bGU9XCJQTyBUcmVlIFZpZXcgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdHJlZS12aWV3LWJhc2ljL3NhbXBsZS1wby10cmVlLXZpZXctYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10cmVlLXZpZXctYmFzaWMvc2FtcGxlLXBvLXRyZWUtdmlldy1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby10cmVlLXZpZXctbGFic1wiIHRpdGxlPVwiUE8gVHJlZSBWaWV3IExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdHJlZS12aWV3LWxhYnMvc2FtcGxlLXBvLXRyZWUtdmlldy1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdHJlZS12aWV3LWxhYnMvc2FtcGxlLXBvLXRyZWUtdmlldy1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRyZWUtdmlldy1mb2xkZXItc3RydWN0dXJlXCIgdGl0bGU9XCJQTyBUcmVlIFZpZXcgLSBGb2xkZXIgU3RydWN0dXJlXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRyZWUtdmlldy1mb2xkZXItc3RydWN0dXJlL3NhbXBsZS1wby10cmVlLXZpZXctZm9sZGVyLXN0cnVjdHVyZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRyZWUtdmlldy1mb2xkZXItc3RydWN0dXJlL3NhbXBsZS1wby10cmVlLXZpZXctZm9sZGVyLXN0cnVjdHVyZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby10cmVlLXZpZXctc3VwZXJtYXJrZXRcIiB0aXRsZT1cIlBPIFRyZWUgVmlldyAtIFN1cGVybWFya2V0XCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRyZWUtdmlldy1zdXBlcm1hcmtldC9zYW1wbGUtcG8tdHJlZS12aWV3LXN1cGVybWFya2V0LmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdHJlZS12aWV3LXN1cGVybWFya2V0L3NhbXBsZS1wby10cmVlLXZpZXctc3VwZXJtYXJrZXQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10cmVlLXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby10cmVlLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1BvVHJlZVZpZXdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UcmVlVmlld0NvbXBvbmVudCBleHRlbmRzIFBvVHJlZVZpZXdCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBnZXQgaGFzSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gISEodGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVWaWV3U2VydmljZTogUG9UcmVlVmlld1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudHJlZVZpZXdTZXJ2aWNlLm9uRXhwYW5kKCkuc3Vic2NyaWJlKCh0cmVlVmlld0l0ZW06IFBvVHJlZVZpZXdJdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdEV4cGFuZGVkKHRyZWVWaWV3SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVWaWV3U2VydmljZS5vblNlbGVjdCgpLnN1YnNjcmliZSgodHJlZVZpZXdJdGVtOiBQb1RyZWVWaWV3SXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRTZWxlY3RlZCh0cmVlVmlld0l0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RnVuY3Rpb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxufVxyXG4iLCI8cG8tY29udGFpbmVyICpuZ0lmPVwiaGFzSXRlbXNcIiBwLW5vLXBhZGRpbmcgcC1uby1zaGFkb3c+XHJcbiAgPHVsIGNsYXNzPVwicG8tdHJlZS12aWV3XCI+XHJcbiAgICA8cG8tdHJlZS12aWV3LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IHRyYWNrQnk6IHRyYWNrQnlGdW5jdGlvblwiIFtwLWl0ZW1dPVwiaXRlbVwiIFtwLXNlbGVjdGFibGVdPVwic2VsZWN0YWJsZVwiPlxyXG4gICAgPC9wby10cmVlLXZpZXctaXRlbT5cclxuICA8L3VsPlxyXG48L3BvLWNvbnRhaW5lcj5cclxuIl19