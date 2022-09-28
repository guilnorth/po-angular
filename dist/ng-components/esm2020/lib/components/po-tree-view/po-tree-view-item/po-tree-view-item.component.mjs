import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/po-tree-view.service";
import * as i2 from "@angular/common";
import * as i3 from "../po-tree-view-item-header/po-tree-view-item-header.component";
function PoTreeViewItemComponent_ul_2_po_tree_view_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-tree-view-item", 5);
} if (rf & 2) {
    const subItem_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-item", subItem_r2)("p-selectable", ctx_r1.selectable);
} }
function PoTreeViewItemComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵtemplate(1, PoTreeViewItemComponent_ul_2_po_tree_view_item_1_Template, 1, 2, "po-tree-view-item", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@toggleBody", ctx_r0.item.expanded ? "expanded" : "collapsed");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.item.subItems)("ngForTrackBy", ctx_r0.trackByFunction);
} }
export class PoTreeViewItemComponent {
    constructor(treeViewService) {
        this.treeViewService = treeViewService;
    }
    get hasSubItems() {
        return !!(this.item.subItems && this.item.subItems.length);
    }
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.item.expanded = !this.item.expanded;
        this.treeViewService.emitExpandedEvent({ ...this.item });
    }
    onSelect(selectedItem) {
        this.treeViewService.emitSelectedEvent({ ...selectedItem });
    }
    trackByFunction(index) {
        return index;
    }
}
PoTreeViewItemComponent.ɵfac = function PoTreeViewItemComponent_Factory(t) { return new (t || PoTreeViewItemComponent)(i0.ɵɵdirectiveInject(i1.PoTreeViewService)); };
PoTreeViewItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTreeViewItemComponent, selectors: [["po-tree-view-item"]], inputs: { item: ["p-item", "item"], selectable: ["p-selectable", "selectable"] }, decls: 3, vars: 3, consts: [[1, "po-tree-view-item"], [3, "p-item", "p-selectable", "p-expanded", "p-selected"], ["class", "po-tree-view-item-group", 4, "ngIf"], [1, "po-tree-view-item-group"], [3, "p-item", "p-selectable", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "p-item", "p-selectable"]], template: function PoTreeViewItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 0)(1, "po-tree-view-item-header", 1);
        i0.ɵɵlistener("p-expanded", function PoTreeViewItemComponent_Template_po_tree_view_item_header_p_expanded_1_listener($event) { return ctx.onClick($event); })("p-selected", function PoTreeViewItemComponent_Template_po_tree_view_item_header_p_selected_1_listener() { return ctx.onSelect(ctx.item); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoTreeViewItemComponent_ul_2_Template, 2, 3, "ul", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-item", ctx.item)("p-selectable", ctx.selectable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasSubItems);
    } }, dependencies: [i2.NgForOf, i2.NgIf, PoTreeViewItemComponent, i3.PoTreeViewItemHeaderComponent], encapsulation: 2, data: { animation: [
            trigger('toggleBody', [
                state('collapsed', style({
                    'overflow-y': 'hidden',
                    visibility: 'hidden',
                    opacity: 0,
                    height: '0'
                })),
                transition('expanded => collapsed', [
                    style({ height: '*' }),
                    animate(100, style({ opacity: 0 })),
                    animate(200, style({ height: 0 }))
                ]),
                transition('collapsed => expanded', [
                    style({ height: '0' }),
                    animate(100, style({ opacity: 1 })),
                    animate(200, style({ height: '*' }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTreeViewItemComponent, [{
        type: Component,
        args: [{ selector: 'po-tree-view-item', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    trigger('toggleBody', [
                        state('collapsed', style({
                            'overflow-y': 'hidden',
                            visibility: 'hidden',
                            opacity: 0,
                            height: '0'
                        })),
                        transition('expanded => collapsed', [
                            style({ height: '*' }),
                            animate(100, style({ opacity: 0 })),
                            animate(200, style({ height: 0 }))
                        ]),
                        transition('collapsed => expanded', [
                            style({ height: '0' }),
                            animate(100, style({ opacity: 1 })),
                            animate(200, style({ height: '*' }))
                        ])
                    ])
                ], template: "<li class=\"po-tree-view-item\">\r\n  <po-tree-view-item-header\r\n    [p-item]=\"item\"\r\n    [p-selectable]=\"selectable\"\r\n    (p-expanded)=\"onClick($event)\"\r\n    (p-selected)=\"onSelect(item)\"\r\n  >\r\n  </po-tree-view-item-header>\r\n\r\n  <ul *ngIf=\"hasSubItems\" class=\"po-tree-view-item-group\" [@toggleBody]=\"item.expanded ? 'expanded' : 'collapsed'\">\r\n    <po-tree-view-item\r\n      *ngFor=\"let subItem of item.subItems; trackBy: trackByFunction\"\r\n      [p-item]=\"subItem\"\r\n      [p-selectable]=\"selectable\"\r\n    >\r\n    </po-tree-view-item>\r\n  </ul>\r\n</li>\r\n" }]
    }], function () { return [{ type: i1.PoTreeViewService }]; }, { item: [{
            type: Input,
            args: ['p-item']
        }], selectable: [{
            type: Input,
            args: ['p-selectable']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdHJlZS12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRyZWUtdmlldy9wby10cmVlLXZpZXctaXRlbS9wby10cmVlLXZpZXctaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdHJlZS12aWV3L3BvLXRyZWUtdmlldy1pdGVtL3BvLXRyZWUtdmlldy1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ1N0RSx1Q0FLb0I7Ozs7SUFIbEIsbUNBQWtCLG1DQUFBOzs7SUFIdEIsNkJBQWlIO0lBQy9HLHlHQUtvQjtJQUN0QixpQkFBSzs7O0lBUG1ELDZFQUF3RDtJQUV4RixlQUFrQjtJQUFsQiw4Q0FBa0Isd0NBQUE7O0FEdUI1QyxNQUFNLE9BQU8sdUJBQXVCO0lBU2xDLFlBQW9CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtJQUFHLENBQUM7SUFKMUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBSUQsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7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QUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO3lCQUNyQyxDQUFDO3FCQUNILENBQUM7aUJBQ0g7b0VBR2dCLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUVRLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UcmVlVmlld0l0ZW0gfSBmcm9tICcuL3BvLXRyZWUtdmlldy1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvVHJlZVZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcG8tdHJlZS12aWV3LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10cmVlLXZpZXctaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRyZWUtdmlldy1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCd0b2dnbGVCb2R5JywgW1xyXG4gICAgICBzdGF0ZShcclxuICAgICAgICAnY29sbGFwc2VkJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAnb3ZlcmZsb3cteSc6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMCdcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA9PiBjb2xsYXBzZWQnLCBbXHJcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSxcclxuICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcclxuICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPT4gZXhwYW5kZWQnLCBbXHJcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwJyB9KSxcclxuICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSxcclxuICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSlcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UcmVlVmlld0l0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1pdGVtJykgaXRlbTogUG9UcmVlVmlld0l0ZW07XHJcblxyXG4gIEBJbnB1dCgncC1zZWxlY3RhYmxlJykgc2VsZWN0YWJsZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IGhhc1N1Ykl0ZW1zKCkge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuaXRlbS5zdWJJdGVtcyAmJiB0aGlzLml0ZW0uc3ViSXRlbXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZVZpZXdTZXJ2aWNlOiBQb1RyZWVWaWV3U2VydmljZSkge31cclxuXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuaXRlbS5leHBhbmRlZCA9ICF0aGlzLml0ZW0uZXhwYW5kZWQ7XHJcblxyXG4gICAgdGhpcy50cmVlVmlld1NlcnZpY2UuZW1pdEV4cGFuZGVkRXZlbnQoeyAuLi50aGlzLml0ZW0gfSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChzZWxlY3RlZEl0ZW06IFBvVHJlZVZpZXdJdGVtKSB7XHJcbiAgICB0aGlzLnRyZWVWaWV3U2VydmljZS5lbWl0U2VsZWN0ZWRFdmVudCh7IC4uLnNlbGVjdGVkSXRlbSB9KTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlGdW5jdGlvbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG59XHJcbiIsIjxsaSBjbGFzcz1cInBvLXRyZWUtdmlldy1pdGVtXCI+XHJcbiAgPHBvLXRyZWUtdmlldy1pdGVtLWhlYWRlclxyXG4gICAgW3AtaXRlbV09XCJpdGVtXCJcclxuICAgIFtwLXNlbGVjdGFibGVdPVwic2VsZWN0YWJsZVwiXHJcbiAgICAocC1leHBhbmRlZCk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgKHAtc2VsZWN0ZWQpPVwib25TZWxlY3QoaXRlbSlcIlxyXG4gID5cclxuICA8L3BvLXRyZWUtdmlldy1pdGVtLWhlYWRlcj5cclxuXHJcbiAgPHVsICpuZ0lmPVwiaGFzU3ViSXRlbXNcIiBjbGFzcz1cInBvLXRyZWUtdmlldy1pdGVtLWdyb3VwXCIgW0B0b2dnbGVCb2R5XT1cIml0ZW0uZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCdcIj5cclxuICAgIDxwby10cmVlLXZpZXctaXRlbVxyXG4gICAgICAqbmdGb3I9XCJsZXQgc3ViSXRlbSBvZiBpdGVtLnN1Ykl0ZW1zOyB0cmFja0J5OiB0cmFja0J5RnVuY3Rpb25cIlxyXG4gICAgICBbcC1pdGVtXT1cInN1Ykl0ZW1cIlxyXG4gICAgICBbcC1zZWxlY3RhYmxlXT1cInNlbGVjdGFibGVcIlxyXG4gICAgPlxyXG4gICAgPC9wby10cmVlLXZpZXctaXRlbT5cclxuICA8L3VsPlxyXG48L2xpPlxyXG4iXX0=