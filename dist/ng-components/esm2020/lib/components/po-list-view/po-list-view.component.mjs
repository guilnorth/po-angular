import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, ViewChild } from '@angular/core';
import { isTypeof } from '../../utils/util';
import { PoListViewBaseComponent } from './po-list-view-base.component';
import { PoListViewContentTemplateDirective } from './po-list-view-content-template/po-list-view-content-template.directive';
import { PoListViewDetailTemplateDirective } from './po-list-view-detail-template/po-list-view-detail-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "../po-button/po-button.component";
import * as i6 from "../po-popup/po-popup.component";
import * as i7 from "../po-field/po-checkbox/po-checkbox.component";
const _c0 = ["popup"];
function PoListViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "po-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function PoListViewComponent_div_1_Template_po_checkbox_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectAll = $event); })("p-change", function PoListViewComponent_div_1_Template_po_checkbox_p_change_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectAllListItems()); })("click", function PoListViewComponent_div_1_Template_po_checkbox_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.selectAllListItems()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.selectAll)("p-label", ctx_r0.literals.selectAll);
} }
function PoListViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.literals.noData, " ");
} }
function PoListViewComponent_ng_container_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "po-checkbox", 26);
    i0.ɵɵlistener("ngModelChange", function PoListViewComponent_ng_container_4_div_5_Template_po_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r22); const item_r9 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r9.$selected = $event); })("p-change", function PoListViewComponent_ng_container_4_div_5_Template_po_checkbox_p_change_1_listener() { i0.ɵɵrestoreView(_r22); const item_r9 = i0.ɵɵnextContext().$implicit; const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.selectListItem(item_r9)); })("click", function PoListViewComponent_ng_container_4_div_5_Template_po_checkbox_click_1_listener() { i0.ɵɵrestoreView(_r22); const item_r9 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.selectListItem(item_r9)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", item_r9.$selected);
} }
function PoListViewComponent_ng_container_4_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 27);
    i0.ɵɵlistener("click", function PoListViewComponent_ng_container_4_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r30); const item_r9 = i0.ɵɵnextContext().$implicit; const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.runTitleAction(item_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", item_r9[ctx_r12.propertyLink], i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.getItemTitle(item_r9), " ");
} }
function PoListViewComponent_ng_container_4_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 28);
    i0.ɵɵlistener("click", function PoListViewComponent_ng_container_4_a_7_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r34); const item_r9 = i0.ɵɵnextContext().$implicit; const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.runTitleAction(item_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", item_r9[ctx_r13.propertyLink]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.getItemTitle(item_r9), " ");
} }
function PoListViewComponent_ng_container_4_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵlistener("click", function PoListViewComponent_ng_container_4_span_8_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r37); const item_r9 = i0.ɵɵnextContext().$implicit; const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.titleHasAction && ctx_r36.runTitleAction(item_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-list-view-title-link", ctx_r14.titleHasAction);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.getItemTitle(item_r9), " ");
} }
function PoListViewComponent_ng_container_4_div_9_po_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 32);
    i0.ɵɵlistener("p-click", function PoListViewComponent_ng_container_4_div_9_po_button_1_Template_po_button_p_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const action_r41 = restoredCtx.$implicit; const item_r9 = i0.ɵɵnextContext(2).$implicit; const ctx_r42 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r42.onClickAction(action_r41, item_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r41 = ctx.$implicit;
    const item_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r40 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-disabled", ctx_r40.returnBooleanValue(action_r41, item_r9))("p-icon", action_r41.icon)("p-label", action_r41.label)("p-kind", action_r41.type);
} }
function PoListViewComponent_ng_container_4_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, PoListViewComponent_ng_container_4_div_9_po_button_1_Template, 1, 4, "po-button", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.visibleActions);
} }
function PoListViewComponent_ng_container_4_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "span", 34, 35);
    i0.ɵɵlistener("click", function PoListViewComponent_ng_container_4_div_10_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r49); const _r46 = i0.ɵɵreference(2); const item_r9 = i0.ɵɵnextContext().$implicit; const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.togglePopup(item_r9, _r46)); });
    i0.ɵɵelementEnd()();
} }
function PoListViewComponent_ng_container_4_div_11_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function PoListViewComponent_ng_container_4_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵtemplate(1, PoListViewComponent_ng_container_4_div_11_ng_template_1_Template, 0, 0, "ng-template", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext();
    const item_r9 = ctx_r51.$implicit;
    const index_r10 = ctx_r51.index;
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r17.listViewContentTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c1, item_r9, index_r10));
} }
function PoListViewComponent_ng_container_4_div_12_ng_template_1_Template(rf, ctx) { }
function PoListViewComponent_ng_container_4_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtemplate(1, PoListViewComponent_ng_container_4_div_12_ng_template_1_Template, 0, 0, "ng-template", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext();
    const item_r9 = ctx_r53.$implicit;
    const index_r10 = ctx_r53.index;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@showHideDetail", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r18.listViewDetailTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c1, item_r9, index_r10));
} }
function PoListViewComponent_ng_container_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "span", 40);
    i0.ɵɵlistener("click", function PoListViewComponent_ng_container_4_div_13_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r56); const item_r9 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r9.$showDetail = !item_r9.$showDetail); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r9.$showDetail ? ctx_r19.literals.hideDetails : ctx_r19.literals.showDetails, " ");
} }
function PoListViewComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 11)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    i0.ɵɵtemplate(5, PoListViewComponent_ng_container_4_div_5_Template, 2, 1, "div", 16);
    i0.ɵɵtemplate(6, PoListViewComponent_ng_container_4_a_6_Template, 2, 2, "a", 17);
    i0.ɵɵtemplate(7, PoListViewComponent_ng_container_4_a_7_Template, 2, 2, "a", 18);
    i0.ɵɵtemplate(8, PoListViewComponent_ng_container_4_span_8_Template, 2, 3, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, PoListViewComponent_ng_container_4_div_9_Template, 2, 1, "div", 20);
    i0.ɵɵtemplate(10, PoListViewComponent_ng_container_4_div_10_Template, 3, 0, "div", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, PoListViewComponent_ng_container_4_div_11_Template, 2, 5, "div", 22);
    i0.ɵɵtemplate(12, PoListViewComponent_ng_container_4_div_12_Template, 2, 6, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, PoListViewComponent_ng_container_4_div_13_Template, 3, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngSwitch", ctx_r2.checkTitleType(item_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.select);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "externalLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "internalLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "noLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showButtonsActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showPopupActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.hasContentTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.hasDetailTemplate && item_r9.$showDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.hasDetailTemplate);
} }
function PoListViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "po-button", 42);
    i0.ɵɵlistener("p-click", function PoListViewComponent_div_5_Template_po_button_p_click_1_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r58.onShowMore()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-disabled", ctx_r3.showMoreDisabled)("p-label", ctx_r3.literals.loadMoreData);
} }
/**
 * @docsExtends PoListViewBaseComponent
 *
 * @example
 *
 * <example name="po-list-view-basic" title="PO List View Basic">
 *  <file name="sample-po-list-view-basic/sample-po-list-view-basic.component.html"> </file>
 *  <file name="sample-po-list-view-basic/sample-po-list-view-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-list-view-labs" title="PO List View Labs">
 *  <file name="sample-po-list-view-labs/sample-po-list-view-labs.component.html"> </file>
 *  <file name="sample-po-list-view-labs/sample-po-list-view-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-list-view-hiring-processes" title="PO List View - Hiring Processes">
 *  <file name="sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"> </file>
 *  <file name="sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"> </file>
 *  <file name="sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"> </file>
 * </example>
 */
export class PoListViewComponent extends PoListViewBaseComponent {
    constructor(changeDetector, differs, languageService) {
        super(languageService);
        this.changeDetector = changeDetector;
        this.differ = differs.find([]).create(null);
    }
    get hasContentTemplate() {
        return !!this.listViewContentTemplate;
    }
    get hasDetailTemplate() {
        return !!this.listViewDetailTemplate;
    }
    get displayShowMoreButton() {
        return this.items && this.items.length > 0 && this.showMore.observers.length > 0;
    }
    get showButtonsActions() {
        return this.visibleActions && this.visibleActions.length > 0 && this.visibleActions.length <= 2;
    }
    get showPopupActions() {
        return this.visibleActions && this.visibleActions.length > 2;
    }
    get titleHasAction() {
        return this.titleAction.observers.length > 0;
    }
    get visibleActions() {
        return this.actions && this.actions.filter(action => action.visible !== false);
    }
    ngAfterContentInit() {
        this.initShowDetail();
    }
    ngDoCheck() {
        this.checkItemsChange();
    }
    checkTitleType(item) {
        if (this.propertyLink && item[this.propertyLink]) {
            return item[this.propertyLink].startsWith('http') ? 'externalLink' : 'internalLink';
        }
        return 'noLink';
    }
    getItemTitle(item) {
        return this.hasContentTemplate && this.listViewContentTemplate.title
            ? this.listViewContentTemplate.title(item)
            : item[this.propertyTitle];
    }
    hasItems() {
        return this.items && this.items.length > 0;
    }
    returnBooleanValue(listViewAction, item) {
        return isTypeof(listViewAction.disabled, 'function')
            ? listViewAction.disabled(item)
            : listViewAction.disabled;
    }
    trackBy(index) {
        return index;
    }
    togglePopup(item, targetRef) {
        this.popupTarget = targetRef;
        this.changeDetector.detectChanges();
        this.poPopupComponent.toggle(item);
    }
    checkItemsChange() {
        const changesItems = this.differ.diff(this.items);
        if (changesItems && this.selectAll) {
            this.selectAll = null;
        }
        if (changesItems && this.items && this.items.length && this.select && !this.hideSelectAll) {
            this.showHeader = true;
        }
    }
    initShowDetail() {
        if (this.items && this.items.length > 0 && this.hasDetailTemplate && this.listViewDetailTemplate.showDetail) {
            this.items.forEach(item => (item.$showDetail = this.listViewDetailTemplate.showDetail(item)));
        }
    }
}
PoListViewComponent.ɵfac = function PoListViewComponent_Factory(t) { return new (t || PoListViewComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoListViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoListViewComponent, selectors: [["po-list-view"]], contentQueries: function PoListViewComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoListViewContentTemplateDirective, 7);
        i0.ɵɵcontentQuery(dirIndex, PoListViewDetailTemplateDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listViewContentTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listViewDetailTemplate = _t.first);
    } }, viewQuery: function PoListViewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPopupComponent = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 13, consts: [["class", "po-list-view-main-header", 4, "ngIf"], [1, "po-list-view-main-content"], ["class", "po-list-view", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "po-mb-2 po-text-center", 4, "ngIf"], [3, "p-actions", "p-target"], ["popup", ""], [1, "po-list-view-main-header"], [1, "po-checkbox-group-item"], [1, "po-list-view-main-select"], ["name", "selectAll", 3, "ngModel", "p-label", "ngModelChange", "p-change", "click"], [1, "po-list-view"], [1, "po-list-view-container-no-data", "po-text-center"], [1, "po-list-view-container"], [1, "po-list-view-header"], [1, "po-list-view-title", 3, "ngSwitch"], ["class", "po-list-view-select", 4, "ngIf"], ["class", "po-list-view-title-link", "target", "_blank", 3, "href", "click", 4, "ngSwitchCase"], ["class", "po-list-view-title-link", 3, "routerLink", "click", 4, "ngSwitchCase"], ["class", "po-list-view-title-no-link", 3, "po-list-view-title-link", "click", 4, "ngSwitchCase"], ["class", "po-list-view-actions", 4, "ngIf"], ["class", "po-list-view-more-actions", 4, "ngIf"], ["class", "po-list-view-content", 4, "ngIf"], ["class", "po-list-view-detail", 4, "ngIf"], ["class", "po-list-view-detail-button", 4, "ngIf"], [1, "po-list-view-select"], ["name", "checkbox", 3, "ngModel", "ngModelChange", "p-change", "click"], ["target", "_blank", 1, "po-list-view-title-link", 3, "href", "click"], [1, "po-list-view-title-link", 3, "routerLink", "click"], [1, "po-list-view-title-no-link", 3, "click"], [1, "po-list-view-actions"], [3, "p-disabled", "p-icon", "p-label", "p-kind", "p-click", 4, "ngFor", "ngForOf"], [3, "p-disabled", "p-icon", "p-label", "p-kind", "p-click"], [1, "po-list-view-more-actions"], [1, "po-icon", "po-icon-more", "po-list-view-more-icon", "po-clickable", 3, "click"], ["popupTarget", ""], [1, "po-list-view-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "po-list-view-detail"], [1, "po-list-view-detail-button"], [1, "po-clickable", 3, "click"], [1, "po-mb-2", "po-text-center"], [3, "p-disabled", "p-label", "p-click"]], template: function PoListViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, PoListViewComponent_div_1_Template, 4, 2, "div", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, PoListViewComponent_div_3_Template, 4, 1, "div", 2);
        i0.ɵɵtemplate(4, PoListViewComponent_ng_container_4_Template, 14, 10, "ng-container", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(5, PoListViewComponent_div_5_Template, 2, 2, "div", 4);
        i0.ɵɵelement(6, "po-popup", 5, 6);
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height, "px");
        i0.ɵɵclassProp("po-list-view-main-container-header", ctx.showHeader)("po-list-view-main-container", !ctx.showHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showHeader);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hasItems());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayShowMoreButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-actions", ctx.actions)("p-target", ctx.popupTarget);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i3.NgControlStatus, i3.NgModel, i4.RouterLinkWithHref, i5.PoButtonComponent, i6.PoPopupComponent, i7.PoCheckboxComponent], encapsulation: 2, data: { animation: [
            trigger('showHideDetail', [
                state('*', style({ 'overflow-y': 'visible' })),
                state('void', style({ 'overflow-y': 'hidden' })),
                transition('* => void', [style({ height: '*', 'overflow-y': 'hidden' }), animate(100, style({ height: 0 }))]),
                transition('void => *', [style({ height: '0' }), animate(100, style({ height: '*' }))])
            ])
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoListViewComponent, [{
        type: Component,
        args: [{ selector: 'po-list-view', animations: [
                    trigger('showHideDetail', [
                        state('*', style({ 'overflow-y': 'visible' })),
                        state('void', style({ 'overflow-y': 'hidden' })),
                        transition('* => void', [style({ height: '*', 'overflow-y': 'hidden' }), animate(100, style({ height: 0 }))]),
                        transition('void => *', [style({ height: '0' }), animate(100, style({ height: '*' }))])
                    ])
                ], template: "<div\r\n  [class.po-list-view-main-container-header]=\"showHeader\"\r\n  [class.po-list-view-main-container]=\"!showHeader\"\r\n  [style.height.px]=\"height\"\r\n>\r\n  <div *ngIf=\"showHeader\" class=\"po-list-view-main-header\">\r\n    <div class=\"po-checkbox-group-item\">\r\n      <div class=\"po-list-view-main-select\">\r\n        <po-checkbox\r\n          name=\"selectAll\"\r\n          [(ngModel)]=\"selectAll\"\r\n          [p-label]=\"literals.selectAll\"\r\n          (p-change)=\"selectAllListItems()\"\r\n          (click)=\"selectAllListItems()\"\r\n        ></po-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"po-list-view-main-content\">\r\n    <div class=\"po-list-view\" *ngIf=\"!hasItems()\">\r\n      <div class=\"po-list-view-container-no-data po-text-center\">\r\n        <span> {{ literals.noData }} </span>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngFor=\"let item of items; let index = index; trackBy: trackBy\">\r\n      <div class=\"po-list-view\">\r\n        <div class=\"po-list-view-container\">\r\n          <div class=\"po-list-view-header\">\r\n            <div class=\"po-list-view-title\" [ngSwitch]=\"checkTitleType(item)\">\r\n              <div *ngIf=\"select\" class=\"po-list-view-select\">\r\n                <po-checkbox\r\n                  [(ngModel)]=\"item.$selected\"\r\n                  name=\"checkbox\"\r\n                  (p-change)=\"selectListItem(item)\"\r\n                  (click)=\"selectListItem(item)\"\r\n                ></po-checkbox>\r\n              </div>\r\n              <a\r\n                *ngSwitchCase=\"'externalLink'\"\r\n                class=\"po-list-view-title-link\"\r\n                target=\"_blank\"\r\n                [href]=\"item[propertyLink]\"\r\n                (click)=\"runTitleAction(item)\"\r\n              >\r\n                {{ getItemTitle(item) }}\r\n              </a>\r\n              <a\r\n                *ngSwitchCase=\"'internalLink'\"\r\n                class=\"po-list-view-title-link\"\r\n                [routerLink]=\"item[propertyLink]\"\r\n                (click)=\"runTitleAction(item)\"\r\n              >\r\n                {{ getItemTitle(item) }}\r\n              </a>\r\n              <span\r\n                *ngSwitchCase=\"'noLink'\"\r\n                class=\"po-list-view-title-no-link\"\r\n                [class.po-list-view-title-link]=\"titleHasAction\"\r\n                (click)=\"titleHasAction && runTitleAction(item)\"\r\n              >\r\n                {{ getItemTitle(item) }}\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"showButtonsActions\" class=\"po-list-view-actions\">\r\n              <po-button\r\n                *ngFor=\"let action of visibleActions\"\r\n                [p-disabled]=\"returnBooleanValue(action, item)\"\r\n                [p-icon]=\"action.icon\"\r\n                [p-label]=\"action.label\"\r\n                [p-kind]=\"action.type\"\r\n                (p-click)=\"onClickAction(action, item)\"\r\n              >\r\n              </po-button>\r\n            </div>\r\n\r\n            <div *ngIf=\"showPopupActions\" class=\"po-list-view-more-actions\">\r\n              <span\r\n                #popupTarget\r\n                class=\"po-icon po-icon-more po-list-view-more-icon po-clickable\"\r\n                (click)=\"togglePopup(item, popupTarget)\"\r\n              >\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"hasContentTemplate\" class=\"po-list-view-content\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"listViewContentTemplate.templateRef\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"\r\n            >\r\n            </ng-template>\r\n          </div>\r\n\r\n          <div @showHideDetail *ngIf=\"hasDetailTemplate && item.$showDetail\" class=\"po-list-view-detail\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"listViewDetailTemplate.templateRef\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"\r\n            >\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"hasDetailTemplate\" class=\"po-list-view-detail-button\">\r\n          <span class=\"po-clickable\" (click)=\"item.$showDetail = !item.$showDetail\">\r\n            {{ item.$showDetail ? literals.hideDetails : literals.showDetails }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"displayShowMoreButton\" class=\"po-mb-2 po-text-center\">\r\n  <po-button [p-disabled]=\"showMoreDisabled\" [p-label]=\"literals.loadMoreData\" (p-click)=\"onShowMore()\"> </po-button>\r\n</div>\r\n\r\n<po-popup #popup [p-actions]=\"actions\" [p-target]=\"popupTarget\"> </po-popup>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.IterableDiffers }, { type: i1.PoLanguageService }]; }, { listViewContentTemplate: [{
            type: ContentChild,
            args: [PoListViewContentTemplateDirective, { static: true }]
        }], listViewDetailTemplate: [{
            type: ContentChild,
            args: [PoListViewDetailTemplateDirective, { static: true }]
        }], poPopupComponent: [{
            type: ViewChild,
            args: ['popup', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1saXN0LXZpZXcvcG8tbGlzdC12aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1saXN0LXZpZXcvcG8tbGlzdC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUdMLFNBQVMsRUFDVCxZQUFZLEVBR1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUs1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDYnhILDhCQUF5RCxhQUFBLGFBQUEsc0JBQUE7SUFLakQsd09BQXVCLDhKQUVYLGVBQUEsMkJBQW9CLENBQUEsSUFGVCx3SkFHZCxlQUFBLDJCQUFvQixDQUFBLElBSE47SUFJeEIsaUJBQWMsRUFBQSxFQUFBLEVBQUE7OztJQUpiLGVBQXVCO0lBQXZCLDBDQUF1QixzQ0FBQTs7O0lBVTdCLCtCQUE4QyxjQUFBLFdBQUE7SUFFbkMsWUFBc0I7SUFBQSxpQkFBTyxFQUFBLEVBQUE7OztJQUE3QixlQUFzQjtJQUF0Qix1REFBc0I7Ozs7SUFTdkIsK0JBQWdELHNCQUFBO0lBRTVDLHNOQUFhLDBDQUMxQixJQUR5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QUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3hGLENBQUM7aUJBQ0g7a0lBSUQsdUJBQXVCO2tCQUR0QixZQUFZO21CQUFDLGtDQUFrQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUdsRSxzQkFBc0I7a0JBRHJCLFlBQVk7bUJBQUMsaUNBQWlDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRzNCLGdCQUFnQjtrQkFBckQsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIERvQ2hlY2ssXHJcbiAgSXRlcmFibGVEaWZmZXJzLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNUeXBlb2YgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Qb3B1cENvbXBvbmVudCB9IGZyb20gJy4uL3BvLXBvcHVwL3BvLXBvcHVwLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBQb0xpc3RWaWV3QWN0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWxpc3Qtdmlldy1hY3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9MaXN0Vmlld0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWxpc3Qtdmlldy1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTGlzdFZpZXdDb250ZW50VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLWxpc3Qtdmlldy1jb250ZW50LXRlbXBsYXRlL3BvLWxpc3Qtdmlldy1jb250ZW50LXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvTGlzdFZpZXdEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcG8tbGlzdC12aWV3LWRldGFpbC10ZW1wbGF0ZS9wby1saXN0LXZpZXctZGV0YWlsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvTGlzdFZpZXdCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1saXN0LXZpZXctYmFzaWNcIiB0aXRsZT1cIlBPIExpc3QgVmlldyBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1saXN0LXZpZXctYmFzaWMvc2FtcGxlLXBvLWxpc3Qtdmlldy1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxpc3Qtdmlldy1iYXNpYy9zYW1wbGUtcG8tbGlzdC12aWV3LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxpc3Qtdmlldy1sYWJzXCIgdGl0bGU9XCJQTyBMaXN0IFZpZXcgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1saXN0LXZpZXctbGFicy9zYW1wbGUtcG8tbGlzdC12aWV3LWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1saXN0LXZpZXctbGFicy9zYW1wbGUtcG8tbGlzdC12aWV3LWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbGlzdC12aWV3LWhpcmluZy1wcm9jZXNzZXNcIiB0aXRsZT1cIlBPIExpc3QgVmlldyAtIEhpcmluZyBQcm9jZXNzZXNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbGlzdC12aWV3LWhpcmluZy1wcm9jZXNzZXMvc2FtcGxlLXBvLWxpc3Qtdmlldy1oaXJpbmctcHJvY2Vzc2VzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbGlzdC12aWV3LWhpcmluZy1wcm9jZXNzZXMvc2FtcGxlLXBvLWxpc3Qtdmlldy1oaXJpbmctcHJvY2Vzc2VzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxpc3Qtdmlldy1oaXJpbmctcHJvY2Vzc2VzL3NhbXBsZS1wby1saXN0LXZpZXctaGlyaW5nLXByb2Nlc3Nlcy5zZXJ2aWNlLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1saXN0LXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1saXN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Nob3dIaWRlRGV0YWlsJywgW1xyXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHsgJ292ZXJmbG93LXknOiAndmlzaWJsZScgfSkpLFxyXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgJ292ZXJmbG93LXknOiAnaGlkZGVuJyB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtzdHlsZSh7IGhlaWdodDogJyonLCAnb3ZlcmZsb3cteSc6ICdoaWRkZW4nIH0pLCBhbmltYXRlKDEwMCwgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtzdHlsZSh7IGhlaWdodDogJzAnIH0pLCBhbmltYXRlKDEwMCwgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSldKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0xpc3RWaWV3Q29tcG9uZW50IGV4dGVuZHMgUG9MaXN0Vmlld0Jhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBEb0NoZWNrIHtcclxuICBAQ29udGVudENoaWxkKFBvTGlzdFZpZXdDb250ZW50VGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgbGlzdFZpZXdDb250ZW50VGVtcGxhdGU6IFBvTGlzdFZpZXdDb250ZW50VGVtcGxhdGVEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChQb0xpc3RWaWV3RGV0YWlsVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgbGlzdFZpZXdEZXRhaWxUZW1wbGF0ZTogUG9MaXN0Vmlld0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKCdwb3B1cCcsIHsgc3RhdGljOiB0cnVlIH0pIHBvUG9wdXBDb21wb25lbnQ6IFBvUG9wdXBDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgZGlmZmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNDb250ZW50VGVtcGxhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmxpc3RWaWV3Q29udGVudFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0RldGFpbFRlbXBsYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5saXN0Vmlld0RldGFpbFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc3BsYXlTaG93TW9yZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLnNob3dNb3JlLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dCdXR0b25zQWN0aW9ucygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVBY3Rpb25zICYmIHRoaXMudmlzaWJsZUFjdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnZpc2libGVBY3Rpb25zLmxlbmd0aCA8PSAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dQb3B1cEFjdGlvbnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlQWN0aW9ucyAmJiB0aGlzLnZpc2libGVBY3Rpb25zLmxlbmd0aCA+IDI7XHJcbiAgfVxyXG5cclxuICBnZXQgdGl0bGVIYXNBY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZUFjdGlvbi5vYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlQWN0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmFjdGlvbnMgJiYgdGhpcy5hY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLnZpc2libGUgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFNob3dEZXRhaWwoKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuY2hlY2tJdGVtc0NoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tUaXRsZVR5cGUoaXRlbTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wZXJ0eUxpbmsgJiYgaXRlbVt0aGlzLnByb3BlcnR5TGlua10pIHtcclxuICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5wcm9wZXJ0eUxpbmtdLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/ICdleHRlcm5hbExpbmsnIDogJ2ludGVybmFsTGluayc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICdub0xpbmsnO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVRpdGxlKGl0ZW0pIHtcclxuICAgIHJldHVybiB0aGlzLmhhc0NvbnRlbnRUZW1wbGF0ZSAmJiB0aGlzLmxpc3RWaWV3Q29udGVudFRlbXBsYXRlLnRpdGxlXHJcbiAgICAgID8gdGhpcy5saXN0Vmlld0NvbnRlbnRUZW1wbGF0ZS50aXRsZShpdGVtKVxyXG4gICAgICA6IGl0ZW1bdGhpcy5wcm9wZXJ0eVRpdGxlXTtcclxuICB9XHJcblxyXG4gIGhhc0l0ZW1zKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuQm9vbGVhblZhbHVlKGxpc3RWaWV3QWN0aW9uOiBQb0xpc3RWaWV3QWN0aW9uLCBpdGVtOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1R5cGVvZihsaXN0Vmlld0FjdGlvbi5kaXNhYmxlZCwgJ2Z1bmN0aW9uJylcclxuICAgICAgPyAoPGFueT5saXN0Vmlld0FjdGlvbikuZGlzYWJsZWQoaXRlbSlcclxuICAgICAgOiBsaXN0Vmlld0FjdGlvbi5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBvcHVwKGl0ZW0sIHRhcmdldFJlZjogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMucG9wdXBUYXJnZXQgPSB0YXJnZXRSZWY7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICB0aGlzLnBvUG9wdXBDb21wb25lbnQudG9nZ2xlKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0l0ZW1zQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgY2hhbmdlc0l0ZW1zID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLml0ZW1zKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlc0l0ZW1zICYmIHRoaXMuc2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlc0l0ZW1zICYmIHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggJiYgdGhpcy5zZWxlY3QgJiYgIXRoaXMuaGlkZVNlbGVjdEFsbCkge1xyXG4gICAgICB0aGlzLnNob3dIZWFkZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0U2hvd0RldGFpbCgpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmhhc0RldGFpbFRlbXBsYXRlICYmIHRoaXMubGlzdFZpZXdEZXRhaWxUZW1wbGF0ZS5zaG93RGV0YWlsKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IChpdGVtLiRzaG93RGV0YWlsID0gdGhpcy5saXN0Vmlld0RldGFpbFRlbXBsYXRlLnNob3dEZXRhaWwoaXRlbSkpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIFtjbGFzcy5wby1saXN0LXZpZXctbWFpbi1jb250YWluZXItaGVhZGVyXT1cInNob3dIZWFkZXJcIlxyXG4gIFtjbGFzcy5wby1saXN0LXZpZXctbWFpbi1jb250YWluZXJdPVwiIXNob3dIZWFkZXJcIlxyXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93SGVhZGVyXCIgY2xhc3M9XCJwby1saXN0LXZpZXctbWFpbi1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1jaGVja2JveC1ncm91cC1pdGVtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1saXN0LXZpZXctbWFpbi1zZWxlY3RcIj5cclxuICAgICAgICA8cG8tY2hlY2tib3hcclxuICAgICAgICAgIG5hbWU9XCJzZWxlY3RBbGxcIlxyXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxcIlxyXG4gICAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuc2VsZWN0QWxsXCJcclxuICAgICAgICAgIChwLWNoYW5nZSk9XCJzZWxlY3RBbGxMaXN0SXRlbXMoKVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0QWxsTGlzdEl0ZW1zKClcIlxyXG4gICAgICAgID48L3BvLWNoZWNrYm94PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tbGlzdC12aWV3LW1haW4tY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWxpc3Qtdmlld1wiICpuZ0lmPVwiIWhhc0l0ZW1zKClcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLWxpc3Qtdmlldy1jb250YWluZXItbm8tZGF0YSBwby10ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuPiB7eyBsaXRlcmFscy5ub0RhdGEgfX0gPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpbmRleCA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1saXN0LXZpZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbGlzdC12aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvLWxpc3Qtdmlldy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvLWxpc3Qtdmlldy10aXRsZVwiIFtuZ1N3aXRjaF09XCJjaGVja1RpdGxlVHlwZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RcIiBjbGFzcz1cInBvLWxpc3Qtdmlldy1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxwby1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0uJHNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgKHAtY2hhbmdlKT1cInNlbGVjdExpc3RJdGVtKGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdExpc3RJdGVtKGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgID48L3BvLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2V4dGVybmFsTGluaydcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwby1saXN0LXZpZXctdGl0bGUtbGlua1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgW2hyZWZdPVwiaXRlbVtwcm9wZXJ0eUxpbmtdXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJydW5UaXRsZUFjdGlvbihpdGVtKVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgZ2V0SXRlbVRpdGxlKGl0ZW0pIH19XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2ludGVybmFsTGluaydcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwby1saXN0LXZpZXctdGl0bGUtbGlua1wiXHJcbiAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJpdGVtW3Byb3BlcnR5TGlua11cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJ1blRpdGxlQWN0aW9uKGl0ZW0pXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7eyBnZXRJdGVtVGl0bGUoaXRlbSkgfX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbm9MaW5rJ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvLWxpc3Qtdmlldy10aXRsZS1uby1saW5rXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5wby1saXN0LXZpZXctdGl0bGUtbGlua109XCJ0aXRsZUhhc0FjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidGl0bGVIYXNBY3Rpb24gJiYgcnVuVGl0bGVBY3Rpb24oaXRlbSlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt7IGdldEl0ZW1UaXRsZShpdGVtKSB9fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0J1dHRvbnNBY3Rpb25zXCIgY2xhc3M9XCJwby1saXN0LXZpZXctYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxwby1idXR0b25cclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgdmlzaWJsZUFjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgW3AtZGlzYWJsZWRdPVwicmV0dXJuQm9vbGVhblZhbHVlKGFjdGlvbiwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgW3AtaWNvbl09XCJhY3Rpb24uaWNvblwiXHJcbiAgICAgICAgICAgICAgICBbcC1sYWJlbF09XCJhY3Rpb24ubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgW3Ata2luZF09XCJhY3Rpb24udHlwZVwiXHJcbiAgICAgICAgICAgICAgICAocC1jbGljayk9XCJvbkNsaWNrQWN0aW9uKGFjdGlvbiwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L3BvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1BvcHVwQWN0aW9uc1wiIGNsYXNzPVwicG8tbGlzdC12aWV3LW1vcmUtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAjcG9wdXBUYXJnZXRcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG8taWNvbiBwby1pY29uLW1vcmUgcG8tbGlzdC12aWV3LW1vcmUtaWNvbiBwby1jbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVBvcHVwKGl0ZW0sIHBvcHVwVGFyZ2V0KVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaGFzQ29udGVudFRlbXBsYXRlXCIgY2xhc3M9XCJwby1saXN0LXZpZXctY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJsaXN0Vmlld0NvbnRlbnRUZW1wbGF0ZS50ZW1wbGF0ZVJlZlwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtLCBpbmRleDogaW5kZXggfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgQHNob3dIaWRlRGV0YWlsICpuZ0lmPVwiaGFzRGV0YWlsVGVtcGxhdGUgJiYgaXRlbS4kc2hvd0RldGFpbFwiIGNsYXNzPVwicG8tbGlzdC12aWV3LWRldGFpbFwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJsaXN0Vmlld0RldGFpbFRlbXBsYXRlLnRlbXBsYXRlUmVmXCJcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpbmRleCB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJoYXNEZXRhaWxUZW1wbGF0ZVwiIGNsYXNzPVwicG8tbGlzdC12aWV3LWRldGFpbC1idXR0b25cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG8tY2xpY2thYmxlXCIgKGNsaWNrKT1cIml0ZW0uJHNob3dEZXRhaWwgPSAhaXRlbS4kc2hvd0RldGFpbFwiPlxyXG4gICAgICAgICAgICB7eyBpdGVtLiRzaG93RGV0YWlsID8gbGl0ZXJhbHMuaGlkZURldGFpbHMgOiBsaXRlcmFscy5zaG93RGV0YWlscyB9fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCJkaXNwbGF5U2hvd01vcmVCdXR0b25cIiBjbGFzcz1cInBvLW1iLTIgcG8tdGV4dC1jZW50ZXJcIj5cclxuICA8cG8tYnV0dG9uIFtwLWRpc2FibGVkXT1cInNob3dNb3JlRGlzYWJsZWRcIiBbcC1sYWJlbF09XCJsaXRlcmFscy5sb2FkTW9yZURhdGFcIiAocC1jbGljayk9XCJvblNob3dNb3JlKClcIj4gPC9wby1idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPHBvLXBvcHVwICNwb3B1cCBbcC1hY3Rpb25zXT1cImFjdGlvbnNcIiBbcC10YXJnZXRdPVwicG9wdXBUYXJnZXRcIj4gPC9wby1wb3B1cD5cclxuIl19