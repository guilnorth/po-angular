import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../po-field/po-checkbox/po-checkbox.component";
const _c0 = ["inputCheckbox"];
function PoTreeViewItemHeaderComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function PoTreeViewItemHeaderComponent_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.expanded.emit($event)); });
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-tree-view-item-header-button-icon-transform", ctx_r0.item.expanded);
} }
function PoTreeViewItemHeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTreeViewItemHeaderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-tree-view-item-header-padding", !ctx_r3.hasSubItems);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.item.label, " ");
} }
function PoTreeViewItemHeaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-checkbox", 8);
    i0.ɵɵlistener("ngModelChange", function PoTreeViewItemHeaderComponent_ng_template_5_Template_po_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.item.selected = $event); })("p-change", function PoTreeViewItemHeaderComponent_ng_template_5_Template_po_checkbox_p_change_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.selected.emit(ctx_r10.item)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-tree-view-item-header-padding", !ctx_r5.hasSubItems);
    i0.ɵɵproperty("p-label", ctx_r5.item.label)("ngModel", ctx_r5.item.selected);
} }
export class PoTreeViewItemHeaderComponent {
    constructor() {
        this.selectable = false;
        this.expanded = new EventEmitter();
        this.selected = new EventEmitter();
    }
    get hasSubItems() {
        return !!(this.item.subItems && this.item.subItems.length);
    }
}
PoTreeViewItemHeaderComponent.ɵfac = function PoTreeViewItemHeaderComponent_Factory(t) { return new (t || PoTreeViewItemHeaderComponent)(); };
PoTreeViewItemHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTreeViewItemHeaderComponent, selectors: [["po-tree-view-item-header"]], viewQuery: function PoTreeViewItemHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputCheckbox = _t.first);
    } }, inputs: { item: ["p-item", "item"], selectable: ["p-selectable", "selectable"] }, outputs: { expanded: "p-expanded", selected: "p-selected" }, decls: 7, vars: 4, consts: [[1, "po-tree-view-item-header"], ["class", "po-tree-view-item-header-button", 3, "click", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["labelTemplate", ""], ["checkboxTemplate", ""], [1, "po-tree-view-item-header-button", 3, "click"], [1, "po-icon", "po-icon-arrow-down", "po-tree-view-item-header-button-icon"], [1, "po-tree-view-item-header-label"], [1, "po-tree-view-item-header-checkbox", 3, "p-label", "ngModel", "ngModelChange", "p-change"]], template: function PoTreeViewItemHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoTreeViewItemHeaderComponent_button_1_Template, 2, 2, "button", 1);
        i0.ɵɵtemplate(2, PoTreeViewItemHeaderComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, PoTreeViewItemHeaderComponent_ng_template_3_Template, 2, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoTreeViewItemHeaderComponent_ng_template_5_Template, 1, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(4);
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasSubItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectable)("ngIfThen", _r4)("ngIfElse", _r2);
    } }, dependencies: [i1.NgIf, i2.NgControlStatus, i2.NgModel, i3.PoCheckboxComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTreeViewItemHeaderComponent, [{
        type: Component,
        args: [{ selector: 'po-tree-view-item-header', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-tree-view-item-header\">\r\n  <button *ngIf=\"hasSubItems\" class=\"po-tree-view-item-header-button\" (click)=\"expanded.emit($event)\">\r\n    <span\r\n      class=\"po-icon po-icon-arrow-down po-tree-view-item-header-button-icon\"\r\n      [class.po-tree-view-item-header-button-icon-transform]=\"item.expanded\"\r\n    >\r\n    </span>\r\n  </button>\r\n\r\n  <ng-container *ngIf=\"selectable; then checkboxTemplate; else labelTemplate\"></ng-container>\r\n</div>\r\n\r\n<ng-template #labelTemplate>\r\n  <span class=\"po-tree-view-item-header-label\" [class.po-tree-view-item-header-padding]=\"!hasSubItems\">\r\n    {{ item.label }}\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #checkboxTemplate>\r\n  <po-checkbox\r\n    class=\"po-tree-view-item-header-checkbox\"\r\n    [class.po-tree-view-item-header-padding]=\"!hasSubItems\"\r\n    [p-label]=\"item.label\"\r\n    [(ngModel)]=\"item.selected\"\r\n    (p-change)=\"selected.emit(item)\"\r\n  >\r\n  </po-checkbox>\r\n</ng-template>\r\n" }]
    }], null, { inputCheckbox: [{
            type: ViewChild,
            args: ['inputCheckbox']
        }], item: [{
            type: Input,
            args: ['p-item']
        }], selectable: [{
            type: Input,
            args: ['p-selectable']
        }], expanded: [{
            type: Output,
            args: ['p-expanded']
        }], selected: [{
            type: Output,
            args: ['p-selected']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10cmVlLXZpZXcvcG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyL3BvLXRyZWUtdmlldy1pdGVtLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdHJlZS12aWV3L3BvLXRyZWUtdmlldy1pdGVtLWhlYWRlci9wby10cmVlLXZpZXctaXRlbS1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDQ3pHLGlDQUFvRztJQUFoQyxtTEFBUyxlQUFBLDRCQUFxQixDQUFBLElBQUM7SUFDakcsMEJBSU87SUFDVCxpQkFBUzs7O0lBSEwsZUFBc0U7SUFBdEUsc0ZBQXNFOzs7SUFLMUUsd0JBQTJGOzs7SUFJM0YsK0JBQXFHO0lBQ25HLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBRnNDLHVFQUF1RDtJQUNsRyxlQUNGO0lBREUsa0RBQ0Y7Ozs7SUFJQSxzQ0FNQztJQUZDLDZNQUFhLDZDQUNaLElBRDBCLGlMQUNmLGVBQUEsbUNBQW1CLENBQUEsSUFESjtJQUc3QixpQkFBYzs7O0lBTFosdUVBQXVEO0lBQ3ZELDJDQUFzQixpQ0FBQTs7QURiMUIsTUFBTSxPQUFPLDZCQUE2QjtJQUwxQztRQVV5QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTdCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTFDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBSzFEO0lBSEMsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDOzswR0FiVSw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjs7Ozs7O1FDVDFDLDhCQUFzQztRQUNwQyxvRkFNUztRQUVULGdHQUEyRjtRQUM3RixpQkFBTTtRQUVOLCtIQUljO1FBRWQsK0hBU2M7Ozs7UUExQkgsZUFBaUI7UUFBakIsc0NBQWlCO1FBUVgsZUFBa0I7UUFBbEIscUNBQWtCLGlCQUFBLGlCQUFBOzt1RkRBdEIsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0UsMEJBQTBCLG1CQUVuQix1QkFBdUIsQ0FBQyxNQUFNO2dCQUduQixhQUFhO2tCQUF4QyxTQUFTO21CQUFDLGVBQWU7WUFFVCxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFFUSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFFQyxRQUFRO2tCQUE3QixNQUFNO21CQUFDLFlBQVk7WUFFRSxRQUFRO2tCQUE3QixNQUFNO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UcmVlVmlld0l0ZW0gfSBmcm9tICcuLi9wby10cmVlLXZpZXctaXRlbS9wby10cmVlLXZpZXctaXRlbS5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10cmVlLXZpZXctaXRlbS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby10cmVlLXZpZXctaXRlbS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RyZWVWaWV3SXRlbUhlYWRlckNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRDaGVja2JveCcpIGlucHV0Q2hlY2tib3g7XHJcblxyXG4gIEBJbnB1dCgncC1pdGVtJykgaXRlbTogUG9UcmVlVmlld0l0ZW07XHJcblxyXG4gIEBJbnB1dCgncC1zZWxlY3RhYmxlJykgc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCdwLWV4cGFuZGVkJykgZXhwYW5kZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3Atc2VsZWN0ZWQnKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBnZXQgaGFzU3ViSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gISEodGhpcy5pdGVtLnN1Ykl0ZW1zICYmIHRoaXMuaXRlbS5zdWJJdGVtcy5sZW5ndGgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyXCI+XHJcbiAgPGJ1dHRvbiAqbmdJZj1cImhhc1N1Ykl0ZW1zXCIgY2xhc3M9XCJwby10cmVlLXZpZXctaXRlbS1oZWFkZXItYnV0dG9uXCIgKGNsaWNrKT1cImV4cGFuZGVkLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPHNwYW5cclxuICAgICAgY2xhc3M9XCJwby1pY29uIHBvLWljb24tYXJyb3ctZG93biBwby10cmVlLXZpZXctaXRlbS1oZWFkZXItYnV0dG9uLWljb25cIlxyXG4gICAgICBbY2xhc3MucG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyLWJ1dHRvbi1pY29uLXRyYW5zZm9ybV09XCJpdGVtLmV4cGFuZGVkXCJcclxuICAgID5cclxuICAgIDwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGFibGU7IHRoZW4gY2hlY2tib3hUZW1wbGF0ZTsgZWxzZSBsYWJlbFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNsYWJlbFRlbXBsYXRlPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyLWxhYmVsXCIgW2NsYXNzLnBvLXRyZWUtdmlldy1pdGVtLWhlYWRlci1wYWRkaW5nXT1cIiFoYXNTdWJJdGVtc1wiPlxyXG4gICAge3sgaXRlbS5sYWJlbCB9fVxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY2hlY2tib3hUZW1wbGF0ZT5cclxuICA8cG8tY2hlY2tib3hcclxuICAgIGNsYXNzPVwicG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyLWNoZWNrYm94XCJcclxuICAgIFtjbGFzcy5wby10cmVlLXZpZXctaXRlbS1oZWFkZXItcGFkZGluZ109XCIhaGFzU3ViSXRlbXNcIlxyXG4gICAgW3AtbGFiZWxdPVwiaXRlbS5sYWJlbFwiXHJcbiAgICBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgKHAtY2hhbmdlKT1cInNlbGVjdGVkLmVtaXQoaXRlbSlcIlxyXG4gID5cclxuICA8L3BvLWNoZWNrYm94PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=