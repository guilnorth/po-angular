import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';
import { PoLookupModalBaseComponent } from '../po-lookup-modal/po-lookup-modal-base.component';
import { PoDynamicFormComponent } from './../../../po-dynamic/po-dynamic-form/po-dynamic-form.component';
import { PoTableComponent } from './../../../po-table/po-table.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../../po-disclaimer-group/po-disclaimer-group.component";
import * as i5 from "../../po-field-container/po-field-container.component";
import * as i6 from "../../../po-modal/po-modal.component";
import * as i7 from "../../../po-table/po-table.component";
const _c0 = ["inpsearch"];
const _c1 = ["container"];
function PoLookupModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 17);
    i0.ɵɵlistener("click", function PoLookupModalComponent_div_9_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onAdvancedFilter()); })("keydown.enter", function PoLookupModalComponent_div_9_Template_span_keydown_enter_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onAdvancedFilter()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.modalAdvancedSearch, " ");
} }
function PoLookupModalComponent_po_disclaimer_group_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer-group", 18);
    i0.ɵɵlistener("p-change", function PoLookupModalComponent_po_disclaimer_group_10_Template_po_disclaimer_group_p_change_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onChangeDisclaimerGroup()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-disclaimers", ctx_r3.disclaimerGroup == null ? null : ctx_r3.disclaimerGroup.disclaimers)("p-title", ctx_r3.disclaimerGroup == null ? null : ctx_r3.disclaimerGroup.title);
} }
function PoLookupModalComponent_po_disclaimer_group_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer-group", 19);
    i0.ɵɵlistener("p-remove", function PoLookupModalComponent_po_disclaimer_group_14_Template_po_disclaimer_group_p_remove_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onUnselectFromDisclaimer($event.removedDisclaimer)); })("p-remove-all", function PoLookupModalComponent_po_disclaimer_group_14_Template_po_disclaimer_group_p_remove_all_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onAllUnselected($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-disclaimers", ctx_r5.selecteds);
} }
/**
 * @docsPrivate
 *
 * @docsExtends PoLookupModalBaseComponent
 */
export class PoLookupModalComponent extends PoLookupModalBaseComponent {
    constructor(componentFactory, poLanguage, changeDetector) {
        super(poLanguage, changeDetector);
        this.componentFactory = componentFactory;
        this.keyUpObservable = null;
        this.containerHeight = 375;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setTableHeight();
    }
    ngAfterViewInit() {
        this.initializeEventInput();
    }
    // Seleciona um item na tabela
    onSelect(item) {
        if (this.multiple) {
            this.selecteds = [...this.selecteds, { value: item[this.fieldValue], label: item[this.fieldLabel], ...item }];
        }
        else {
            this.selecteds = [{ value: item[this.fieldValue], label: item[this.fieldLabel], ...item }];
        }
    }
    // Remove a seleção de um item na tabela
    onUnselect(unselectedItem) {
        this.selecteds = this.selecteds.filter(itemSelected => itemSelected.value !== unselectedItem[this.fieldValue]);
    }
    onUnselectFromDisclaimer(removedDisclaimer) {
        this.poTable.unselectRowItem(item => item[this.fieldValue] === removedDisclaimer.value);
    }
    // Seleciona todos os itens visíveis na tabela
    onAllSelected(items) {
        this.selecteds = items.map(item => ({ value: item[this.fieldValue], label: item[this.fieldLabel], ...item }));
    }
    // Remove a seleção de todos os itens visíveis na tabela
    onAllUnselected(items) {
        this.poTable.unselectRows();
        this.selecteds = [];
    }
    initializeEventInput() {
        this.keyUpObservable = fromEvent(this.inputSearchEl.nativeElement, 'keyup').pipe(filter((e) => this.validateEnterPressed(e)), debounceTime(400));
        this.keyUpObservable.subscribe(() => {
            this.search();
        });
    }
    openModal() {
        this.poModal.open();
    }
    sortBy(sort) {
        this.sort = sort;
    }
    destroyDynamicForm() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    onAdvancedFilter() {
        this.setupModalAdvancedFilter();
        this.createDynamicForm();
    }
    setTableHeight() {
        if (this.multiple) {
            if (this.selecteds?.length !== 0) {
                this.tableHeight = 300;
            }
            else {
                this.tableHeight = 370;
                this.containerHeight = 375;
            }
        }
        // precisa ser 315 por as linhas terem altura de 32px (quando tela menor que 1366px).
        // O retorno padrão é 10 itens fazendo com que gere scroll caso houver paginação, 370 não gerava.
        this.tableHeight = this.infiniteScroll ? 315 : 370;
        if (window.innerHeight < 615) {
            this.tableHeight -= 50;
            this.containerHeight -= 50;
        }
    }
    validateEnterPressed(e) {
        return e.keyCode === 13;
    }
    setupModalAdvancedFilter() {
        this.dynamicFormValue = {};
        this.isAdvancedFilter = true;
    }
    createDynamicForm() {
        const component = this.componentFactory.resolveComponentFactory(PoDynamicFormComponent);
        this.componentRef = this.container.createComponent(component);
        this.componentRef.instance.fields = this.advancedFilters;
        this.componentRef.instance.value = this.dynamicFormValue;
        this.componentRef.instance.formOutput
            .pipe(tap(form => {
            this.dynamicForm = form;
            this.primaryActionAdvancedFilter.disabled = this.dynamicForm.invalid;
        }), switchMap(form => form.valueChanges))
            .subscribe(() => {
            this.primaryActionAdvancedFilter.disabled = this.dynamicForm.invalid;
        });
        this.changeDetector.markForCheck();
    }
}
PoLookupModalComponent.ɵfac = function PoLookupModalComponent_Factory(t) { return new (t || PoLookupModalComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoLookupModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoLookupModalComponent, selectors: [["po-lookup-modal"]], viewQuery: function PoLookupModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoTableComponent, 7);
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poTable = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputSearchEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 18, vars: 24, consts: [["p-click-out", "false", "p-hide-close", "false", "p-size", "lg", 3, "p-primary-action", "p-secondary-action", "p-title"], [3, "hidden"], [1, "po-lookup-header", "po-pull-right", 3, "p-optional"], [1, "po-lookup-filter-content"], [1, "po-field-icon-container-right"], [1, "po-icon", "po-field-icon", "po-icon-search", "po-icon-input", 3, "click"], ["iconLookup", ""], ["name", "contentSearch", "type", "text", 1, "po-input", "po-input-icon-right", 3, "ngModel", "placeholder", "ngModelChange"], ["inpsearch", ""], ["class", "po-lookup-advanced-search", 4, "ngIf"], ["class", "po-md-12", 3, "p-disclaimers", "p-title", "p-change", 4, "ngIf"], [1, "po-row", "po-lookup-container-table"], [1, "po-md-12", 3, "p-selectable", "p-hide-detail", "p-single-select", "p-sort", "p-columns", "p-height", "p-items", "p-literals", "p-loading", "p-show-more-disabled", "p-infinite-scroll", "p-selected", "p-unselected", "p-all-selected", "p-all-unselected", "p-show-more", "p-sort-by", "p-change-visible-columns", "p-restore-column-manager"], ["poTable", ""], ["class", "po-md-12", 3, "p-disclaimers", "p-remove", "p-remove-all", 4, "ngIf"], ["container", ""], [1, "po-lookup-advanced-search"], ["tabindex", "0", "tabindex", "0", 1, "po-lookup-advanced-search-link", "po-icon-input", 3, "click", "keydown.enter"], [1, "po-md-12", 3, "p-disclaimers", "p-title", "p-change"], [1, "po-md-12", 3, "p-disclaimers", "p-remove", "p-remove-all"]], template: function PoLookupModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0)(1, "div", 1)(2, "po-field-container", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5, 6);
        i0.ɵɵlistener("click", function PoLookupModalComponent_Template_span_click_5_listener() { return ctx.search(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "input", 7, 8);
        i0.ɵɵlistener("ngModelChange", function PoLookupModalComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchValue = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(9, PoLookupModalComponent_div_9_Template, 3, 1, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, PoLookupModalComponent_po_disclaimer_group_10_Template, 1, 2, "po-disclaimer-group", 10);
        i0.ɵɵelementStart(11, "div", 11)(12, "po-table", 12, 13);
        i0.ɵɵlistener("p-selected", function PoLookupModalComponent_Template_po_table_p_selected_12_listener($event) { return ctx.onSelect($event); })("p-unselected", function PoLookupModalComponent_Template_po_table_p_unselected_12_listener($event) { return ctx.onUnselect($event); })("p-all-selected", function PoLookupModalComponent_Template_po_table_p_all_selected_12_listener($event) { return ctx.onAllSelected($event); })("p-all-unselected", function PoLookupModalComponent_Template_po_table_p_all_unselected_12_listener($event) { return ctx.onAllUnselected($event); })("p-show-more", function PoLookupModalComponent_Template_po_table_p_show_more_12_listener() { return ctx.showMoreEvent(); })("p-sort-by", function PoLookupModalComponent_Template_po_table_p_sort_by_12_listener($event) { return ctx.sortBy($event); })("p-change-visible-columns", function PoLookupModalComponent_Template_po_table_p_change_visible_columns_12_listener($event) { return ctx.changeVisibleColumns.emit($event); })("p-restore-column-manager", function PoLookupModalComponent_Template_po_table_p_restore_column_manager_12_listener($event) { return ctx.columnRestoreManager.emit($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(14, PoLookupModalComponent_po_disclaimer_group_14_Template, 1, 1, "po-disclaimer-group", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 1);
        i0.ɵɵelementContainer(16, null, 15);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("p-primary-action", ctx.isAdvancedFilter ? ctx.primaryActionAdvancedFilter : ctx.primaryAction)("p-secondary-action", ctx.isAdvancedFilter ? ctx.secondaryActionAdvancedFilter : ctx.secondaryAction)("p-title", ctx.isAdvancedFilter ? ctx.advancedFilterModalTitle : ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", ctx.isAdvancedFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-optional", false);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.searchValue)("placeholder", ctx.literals.modalPlaceholder);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.advancedFilters && ctx.advancedFilters.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !!ctx.disclaimerGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.containerHeight, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-selectable", true)("p-hide-detail", true)("p-single-select", !ctx.multiple)("p-sort", true)("p-columns", ctx.columns)("p-height", ctx.tableHeight)("p-items", ctx.items)("p-literals", ctx.tableLiterals)("p-loading", ctx.isLoading)("p-show-more-disabled", !ctx.hasNext)("p-infinite-scroll", ctx.infiniteScroll);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.multiple);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.isAdvancedFilter);
    } }, dependencies: [i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.PoDisclaimerGroupComponent, i5.PoFieldContainerComponent, i6.PoModalComponent, i7.PoTableComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLookupModalComponent, [{
        type: Component,
        args: [{ selector: 'po-lookup-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-modal\r\n  p-click-out=\"false\"\r\n  p-hide-close=\"false\"\r\n  p-size=\"lg\"\r\n  [p-primary-action]=\"isAdvancedFilter ? primaryActionAdvancedFilter : primaryAction\"\r\n  [p-secondary-action]=\"isAdvancedFilter ? secondaryActionAdvancedFilter : secondaryAction\"\r\n  [p-title]=\"isAdvancedFilter ? advancedFilterModalTitle : title\"\r\n>\r\n  <div [hidden]=\"isAdvancedFilter\">\r\n    <po-field-container class=\"po-lookup-header po-pull-right\" [p-optional]=\"false\">\r\n      <div class=\"po-lookup-filter-content\">\r\n        <div class=\"po-field-icon-container-right\">\r\n          <span #iconLookup class=\"po-icon po-field-icon po-icon-search po-icon-input\" (click)=\"search()\"> </span>\r\n        </div>\r\n\r\n        <input\r\n          #inpsearch\r\n          class=\"po-input po-input-icon-right\"\r\n          name=\"contentSearch\"\r\n          [(ngModel)]=\"searchValue\"\r\n          [placeholder]=\"literals.modalPlaceholder\"\r\n          type=\"text\"\r\n        />\r\n      </div>\r\n\r\n      <div *ngIf=\"advancedFilters && advancedFilters.length > 0\" class=\"po-lookup-advanced-search\">\r\n        <span\r\n          class=\"po-lookup-advanced-search-link po-icon-input\"\r\n          tabindex=\"0\"\r\n          (click)=\"onAdvancedFilter()\"\r\n          (keydown.enter)=\"onAdvancedFilter()\"\r\n          tabindex=\"0\"\r\n        >\r\n          {{ literals.modalAdvancedSearch }}\r\n        </span>\r\n      </div>\r\n    </po-field-container>\r\n\r\n    <!-- DISCLAIMER -->\r\n    <po-disclaimer-group\r\n      *ngIf=\"!!disclaimerGroup\"\r\n      class=\"po-md-12\"\r\n      [p-disclaimers]=\"disclaimerGroup?.disclaimers\"\r\n      [p-title]=\"disclaimerGroup?.title\"\r\n      (p-change)=\"onChangeDisclaimerGroup()\"\r\n    >\r\n    </po-disclaimer-group>\r\n\r\n    <div class=\"po-row po-lookup-container-table\" [style.height.px]=\"containerHeight\">\r\n      <po-table\r\n        #poTable\r\n        class=\"po-md-12\"\r\n        [p-selectable]=\"true\"\r\n        [p-hide-detail]=\"true\"\r\n        [p-single-select]=\"!multiple\"\r\n        [p-sort]=\"true\"\r\n        [p-columns]=\"columns\"\r\n        [p-height]=\"tableHeight\"\r\n        [p-items]=\"items\"\r\n        [p-literals]=\"tableLiterals\"\r\n        [p-loading]=\"isLoading\"\r\n        [p-show-more-disabled]=\"!hasNext\"\r\n        [p-infinite-scroll]=\"infiniteScroll\"\r\n        (p-selected)=\"onSelect($event)\"\r\n        (p-unselected)=\"onUnselect($event)\"\r\n        (p-all-selected)=\"onAllSelected($event)\"\r\n        (p-all-unselected)=\"onAllUnselected($event)\"\r\n        (p-show-more)=\"showMoreEvent()\"\r\n        (p-sort-by)=\"sortBy($event)\"\r\n        (p-change-visible-columns)=\"changeVisibleColumns.emit($event)\"\r\n        (p-restore-column-manager)=\"columnRestoreManager.emit($event)\"\r\n      >\r\n      </po-table>\r\n    </div>\r\n\r\n    <!-- DISCLAIMER -->\r\n    <po-disclaimer-group\r\n      *ngIf=\"multiple\"\r\n      class=\"po-md-12\"\r\n      [p-disclaimers]=\"selecteds\"\r\n      (p-remove)=\"onUnselectFromDisclaimer($event.removedDisclaimer)\"\r\n      (p-remove-all)=\"onAllUnselected($event)\"\r\n    >\r\n    </po-disclaimer-group>\r\n  </div>\r\n  <div [hidden]=\"!isAdvancedFilter\">\r\n    <ng-container #container> </ng-container>\r\n  </div>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.PoLanguageService }, { type: i0.ChangeDetectorRef }]; }, { poTable: [{
            type: ViewChild,
            args: [PoTableComponent, { static: true }]
        }], inputSearchEl: [{
            type: ViewChild,
            args: ['inpsearch']
        }], container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9va3VwLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1sb29rdXAvcG8tbG9va3VwLW1vZGFsL3BvLWxvb2t1cC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tbG9va3VwL3BvLWxvb2t1cC1tb2RhbC9wby1sb29rdXAtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBS1QsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUUvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ01wRSwrQkFBNkYsZUFBQTtJQUl6RixpS0FBUyxlQUFBLHlCQUFrQixDQUFBLElBQUMsb0tBQ1gsZUFBQSx5QkFBa0IsQ0FBQSxJQURQO0lBSTVCLFlBQ0Y7SUFBQSxpQkFBTyxFQUFBOzs7SUFETCxlQUNGO0lBREUsb0VBQ0Y7Ozs7SUFLSiwrQ0FNQztJQURDLHlNQUFZLGVBQUEsaUNBQXlCLENBQUEsSUFBQztJQUV4QyxpQkFBc0I7OztJQUpwQiwwR0FBOEMsaUZBQUE7Ozs7SUFr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LFNBQVM7bUJBQUMsV0FBVztZQUM4QixTQUFTO2tCQUE1RCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBvVGFibGVDb2x1bW5Tb3J0IH0gZnJvbSAnLi4vLi4vLi4vcG8tdGFibGUvaW50ZXJmYWNlcy9wby10YWJsZS1jb2x1bW4tc29ydC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0xvb2t1cE1vZGFsQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL3BvLWxvb2t1cC1tb2RhbC9wby1sb29rdXAtbW9kYWwtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3BvLWR5bmFtaWMvcG8tZHluYW1pYy1mb3JtL3BvLWR5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi8uLi9wby10YWJsZS9wby10YWJsZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Mb29rdXBNb2RhbEJhc2VDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbG9va3VwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbG9va3VwLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Mb29rdXBNb2RhbENvbXBvbmVudCBleHRlbmRzIFBvTG9va3VwTW9kYWxCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKFBvVGFibGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBvVGFibGU6IFBvVGFibGVDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnaW5wc2VhcmNoJykgaW5wdXRTZWFyY2hFbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBrZXlVcE9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XHJcblxyXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyID0gMzc1O1xyXG4gIHRhYmxlSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFBvRHluYW1pY0Zvcm1Db21wb25lbnQ+O1xyXG4gIGR5bmFtaWNGb3JtOiBOZ0Zvcm07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwb0xhbmd1YWdlOiBQb0xhbmd1YWdlU2VydmljZSxcclxuICAgIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIocG9MYW5ndWFnZSwgY2hhbmdlRGV0ZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5zZXRUYWJsZUhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplRXZlbnRJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2VsZWNpb25hIHVtIGl0ZW0gbmEgdGFiZWxhXHJcbiAgb25TZWxlY3QoaXRlbSkge1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZHMgPSBbLi4udGhpcy5zZWxlY3RlZHMsIHsgdmFsdWU6IGl0ZW1bdGhpcy5maWVsZFZhbHVlXSwgbGFiZWw6IGl0ZW1bdGhpcy5maWVsZExhYmVsXSwgLi4uaXRlbSB9XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRzID0gW3sgdmFsdWU6IGl0ZW1bdGhpcy5maWVsZFZhbHVlXSwgbGFiZWw6IGl0ZW1bdGhpcy5maWVsZExhYmVsXSwgLi4uaXRlbSB9XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBhIHNlbGXDp8OjbyBkZSB1bSBpdGVtIG5hIHRhYmVsYVxyXG4gIG9uVW5zZWxlY3QodW5zZWxlY3RlZEl0ZW0pIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRzID0gdGhpcy5zZWxlY3RlZHMuZmlsdGVyKGl0ZW1TZWxlY3RlZCA9PiBpdGVtU2VsZWN0ZWQudmFsdWUgIT09IHVuc2VsZWN0ZWRJdGVtW3RoaXMuZmllbGRWYWx1ZV0pO1xyXG4gIH1cclxuXHJcbiAgb25VbnNlbGVjdEZyb21EaXNjbGFpbWVyKHJlbW92ZWREaXNjbGFpbWVyKSB7XHJcbiAgICB0aGlzLnBvVGFibGUudW5zZWxlY3RSb3dJdGVtKGl0ZW0gPT4gaXRlbVt0aGlzLmZpZWxkVmFsdWVdID09PSByZW1vdmVkRGlzY2xhaW1lci52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZWxlY2lvbmEgdG9kb3Mgb3MgaXRlbnMgdmlzw612ZWlzIG5hIHRhYmVsYVxyXG4gIG9uQWxsU2VsZWN0ZWQoaXRlbXMpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRzID0gaXRlbXMubWFwKGl0ZW0gPT4gKHsgdmFsdWU6IGl0ZW1bdGhpcy5maWVsZFZhbHVlXSwgbGFiZWw6IGl0ZW1bdGhpcy5maWVsZExhYmVsXSwgLi4uaXRlbSB9KSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgYSBzZWxlw6fDo28gZGUgdG9kb3Mgb3MgaXRlbnMgdmlzw612ZWlzIG5hIHRhYmVsYVxyXG4gIG9uQWxsVW5zZWxlY3RlZChpdGVtcykge1xyXG4gICAgdGhpcy5wb1RhYmxlLnVuc2VsZWN0Um93cygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVFdmVudElucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5rZXlVcE9ic2VydmFibGUgPSBmcm9tRXZlbnQodGhpcy5pbnB1dFNlYXJjaEVsLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXHJcbiAgICAgIGZpbHRlcigoZTogYW55KSA9PiB0aGlzLnZhbGlkYXRlRW50ZXJQcmVzc2VkKGUpKSxcclxuICAgICAgZGVib3VuY2VUaW1lKDQwMClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5rZXlVcE9ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5wb01vZGFsLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIHNvcnRCeShzb3J0OiBQb1RhYmxlQ29sdW1uU29ydCkge1xyXG4gICAgdGhpcy5zb3J0ID0gc29ydDtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lEeW5hbWljRm9ybSgpIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFkdmFuY2VkRmlsdGVyKCkge1xyXG4gICAgdGhpcy5zZXR1cE1vZGFsQWR2YW5jZWRGaWx0ZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlRHluYW1pY0Zvcm0oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFibGVIZWlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZHM/Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMudGFibGVIZWlnaHQgPSAzMDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YWJsZUhlaWdodCA9IDM3MDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IDM3NTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByZWNpc2Egc2VyIDMxNSBwb3IgYXMgbGluaGFzIHRlcmVtIGFsdHVyYSBkZSAzMnB4IChxdWFuZG8gdGVsYSBtZW5vciBxdWUgMTM2NnB4KS5cclxuICAgIC8vIE8gcmV0b3JubyBwYWRyw6NvIMOpIDEwIGl0ZW5zIGZhemVuZG8gY29tIHF1ZSBnZXJlIHNjcm9sbCBjYXNvIGhvdXZlciBwYWdpbmHDp8OjbywgMzcwIG7Do28gZ2VyYXZhLlxyXG4gICAgdGhpcy50YWJsZUhlaWdodCA9IHRoaXMuaW5maW5pdGVTY3JvbGwgPyAzMTUgOiAzNzA7XHJcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgNjE1KSB7XHJcbiAgICAgIHRoaXMudGFibGVIZWlnaHQgLT0gNTA7XHJcbiAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0IC09IDUwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUVudGVyUHJlc3NlZChlOiBhbnkpIHtcclxuICAgIHJldHVybiBlLmtleUNvZGUgPT09IDEzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cE1vZGFsQWR2YW5jZWRGaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNGb3JtVmFsdWUgPSB7fTtcclxuICAgIHRoaXMuaXNBZHZhbmNlZEZpbHRlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNGb3JtKCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5LnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvRHluYW1pY0Zvcm1Db21wb25lbnQpO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50PFBvRHluYW1pY0Zvcm1Db21wb25lbnQ+KGNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5maWVsZHMgPSB0aGlzLmFkdmFuY2VkRmlsdGVycztcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnZhbHVlID0gdGhpcy5keW5hbWljRm9ybVZhbHVlO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZvcm1PdXRwdXRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKGZvcm0gPT4ge1xyXG4gICAgICAgICAgdGhpcy5keW5hbWljRm9ybSA9IGZvcm07XHJcbiAgICAgICAgICB0aGlzLnByaW1hcnlBY3Rpb25BZHZhbmNlZEZpbHRlci5kaXNhYmxlZCA9IHRoaXMuZHluYW1pY0Zvcm0uaW52YWxpZDtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzd2l0Y2hNYXAoZm9ybSA9PiBmb3JtLnZhbHVlQ2hhbmdlcylcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnByaW1hcnlBY3Rpb25BZHZhbmNlZEZpbHRlci5kaXNhYmxlZCA9IHRoaXMuZHluYW1pY0Zvcm0uaW52YWxpZDtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tbW9kYWxcclxuICBwLWNsaWNrLW91dD1cImZhbHNlXCJcclxuICBwLWhpZGUtY2xvc2U9XCJmYWxzZVwiXHJcbiAgcC1zaXplPVwibGdcIlxyXG4gIFtwLXByaW1hcnktYWN0aW9uXT1cImlzQWR2YW5jZWRGaWx0ZXIgPyBwcmltYXJ5QWN0aW9uQWR2YW5jZWRGaWx0ZXIgOiBwcmltYXJ5QWN0aW9uXCJcclxuICBbcC1zZWNvbmRhcnktYWN0aW9uXT1cImlzQWR2YW5jZWRGaWx0ZXIgPyBzZWNvbmRhcnlBY3Rpb25BZHZhbmNlZEZpbHRlciA6IHNlY29uZGFyeUFjdGlvblwiXHJcbiAgW3AtdGl0bGVdPVwiaXNBZHZhbmNlZEZpbHRlciA/IGFkdmFuY2VkRmlsdGVyTW9kYWxUaXRsZSA6IHRpdGxlXCJcclxuPlxyXG4gIDxkaXYgW2hpZGRlbl09XCJpc0FkdmFuY2VkRmlsdGVyXCI+XHJcbiAgICA8cG8tZmllbGQtY29udGFpbmVyIGNsYXNzPVwicG8tbG9va3VwLWhlYWRlciBwby1wdWxsLXJpZ2h0XCIgW3Atb3B0aW9uYWxdPVwiZmFsc2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLWxvb2t1cC1maWx0ZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1yaWdodFwiPlxyXG4gICAgICAgICAgPHNwYW4gI2ljb25Mb29rdXAgY2xhc3M9XCJwby1pY29uIHBvLWZpZWxkLWljb24gcG8taWNvbi1zZWFyY2ggcG8taWNvbi1pbnB1dFwiIChjbGljayk9XCJzZWFyY2goKVwiPiA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgI2lucHNlYXJjaFxyXG4gICAgICAgICAgY2xhc3M9XCJwby1pbnB1dCBwby1pbnB1dC1pY29uLXJpZ2h0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb250ZW50U2VhcmNoXCJcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoVmFsdWVcIlxyXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImxpdGVyYWxzLm1vZGFsUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiAqbmdJZj1cImFkdmFuY2VkRmlsdGVycyAmJiBhZHZhbmNlZEZpbHRlcnMubGVuZ3RoID4gMFwiIGNsYXNzPVwicG8tbG9va3VwLWFkdmFuY2VkLXNlYXJjaFwiPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzcz1cInBvLWxvb2t1cC1hZHZhbmNlZC1zZWFyY2gtbGluayBwby1pY29uLWlucHV0XCJcclxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25BZHZhbmNlZEZpbHRlcigpXCJcclxuICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uQWR2YW5jZWRGaWx0ZXIoKVwiXHJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGxpdGVyYWxzLm1vZGFsQWR2YW5jZWRTZWFyY2ggfX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wby1maWVsZC1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBESVNDTEFJTUVSIC0tPlxyXG4gICAgPHBvLWRpc2NsYWltZXItZ3JvdXBcclxuICAgICAgKm5nSWY9XCIhIWRpc2NsYWltZXJHcm91cFwiXHJcbiAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICBbcC1kaXNjbGFpbWVyc109XCJkaXNjbGFpbWVyR3JvdXA/LmRpc2NsYWltZXJzXCJcclxuICAgICAgW3AtdGl0bGVdPVwiZGlzY2xhaW1lckdyb3VwPy50aXRsZVwiXHJcbiAgICAgIChwLWNoYW5nZSk9XCJvbkNoYW5nZURpc2NsYWltZXJHcm91cCgpXCJcclxuICAgID5cclxuICAgIDwvcG8tZGlzY2xhaW1lci1ncm91cD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tcm93IHBvLWxvb2t1cC1jb250YWluZXItdGFibGVcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImNvbnRhaW5lckhlaWdodFwiPlxyXG4gICAgICA8cG8tdGFibGVcclxuICAgICAgICAjcG9UYWJsZVxyXG4gICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgIFtwLXNlbGVjdGFibGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgW3AtaGlkZS1kZXRhaWxdPVwidHJ1ZVwiXHJcbiAgICAgICAgW3Atc2luZ2xlLXNlbGVjdF09XCIhbXVsdGlwbGVcIlxyXG4gICAgICAgIFtwLXNvcnRdPVwidHJ1ZVwiXHJcbiAgICAgICAgW3AtY29sdW1uc109XCJjb2x1bW5zXCJcclxuICAgICAgICBbcC1oZWlnaHRdPVwidGFibGVIZWlnaHRcIlxyXG4gICAgICAgIFtwLWl0ZW1zXT1cIml0ZW1zXCJcclxuICAgICAgICBbcC1saXRlcmFsc109XCJ0YWJsZUxpdGVyYWxzXCJcclxuICAgICAgICBbcC1sb2FkaW5nXT1cImlzTG9hZGluZ1wiXHJcbiAgICAgICAgW3Atc2hvdy1tb3JlLWRpc2FibGVkXT1cIiFoYXNOZXh0XCJcclxuICAgICAgICBbcC1pbmZpbml0ZS1zY3JvbGxdPVwiaW5maW5pdGVTY3JvbGxcIlxyXG4gICAgICAgIChwLXNlbGVjdGVkKT1cIm9uU2VsZWN0KCRldmVudClcIlxyXG4gICAgICAgIChwLXVuc2VsZWN0ZWQpPVwib25VbnNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAocC1hbGwtc2VsZWN0ZWQpPVwib25BbGxTZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgICAgICAocC1hbGwtdW5zZWxlY3RlZCk9XCJvbkFsbFVuc2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgKHAtc2hvdy1tb3JlKT1cInNob3dNb3JlRXZlbnQoKVwiXHJcbiAgICAgICAgKHAtc29ydC1ieSk9XCJzb3J0QnkoJGV2ZW50KVwiXHJcbiAgICAgICAgKHAtY2hhbmdlLXZpc2libGUtY29sdW1ucyk9XCJjaGFuZ2VWaXNpYmxlQ29sdW1ucy5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIChwLXJlc3RvcmUtY29sdW1uLW1hbmFnZXIpPVwiY29sdW1uUmVzdG9yZU1hbmFnZXIuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLXRhYmxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBESVNDTEFJTUVSIC0tPlxyXG4gICAgPHBvLWRpc2NsYWltZXItZ3JvdXBcclxuICAgICAgKm5nSWY9XCJtdWx0aXBsZVwiXHJcbiAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICBbcC1kaXNjbGFpbWVyc109XCJzZWxlY3RlZHNcIlxyXG4gICAgICAocC1yZW1vdmUpPVwib25VbnNlbGVjdEZyb21EaXNjbGFpbWVyKCRldmVudC5yZW1vdmVkRGlzY2xhaW1lcilcIlxyXG4gICAgICAocC1yZW1vdmUtYWxsKT1cIm9uQWxsVW5zZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvcG8tZGlzY2xhaW1lci1ncm91cD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtoaWRkZW5dPVwiIWlzQWR2YW5jZWRGaWx0ZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgI2NvbnRhaW5lcj4gPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvcG8tbW9kYWw+XHJcbiJdfQ==