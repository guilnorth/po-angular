import { Component, ViewChild } from '@angular/core';
import { callFunction, isExternalLink, isTypeof, openExternalLink } from '../../../utils/util';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import { PoPageListBaseComponent } from './po-page-list-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-language/po-language.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "../../po-button/po-button.component";
import * as i5 from "../../po-disclaimer-group/po-disclaimer-group.component";
import * as i6 from "../../po-dropdown/po-dropdown.component";
import * as i7 from "../po-page.component";
import * as i8 from "../po-page-content/po-page-content.component";
import * as i9 from "../po-page-header/po-page-header.component";
const _c0 = ["filterInput"];
function PoPageListComponent_po_page_header_1_po_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 9);
    i0.ɵɵlistener("p-click", function PoPageListComponent_po_page_header_1_po_button_3_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.callAction(ctx_r7.visibleActions[0])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-disabled", ctx_r1.actionIsDisabled(ctx_r1.actions[0]))("p-icon", ctx_r1.visibleActions[0].icon)("p-label", ctx_r1.visibleActions[0].label);
} }
function PoPageListComponent_po_page_header_1_po_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 10);
    i0.ɵɵlistener("p-click", function PoPageListComponent_po_page_header_1_po_button_4_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.callAction(ctx_r9.visibleActions[1])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-disabled", ctx_r2.actionIsDisabled(ctx_r2.actions[1]))("p-label", ctx_r2.visibleActions[1].label);
} }
function PoPageListComponent_po_page_header_1_po_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 10);
    i0.ɵɵlistener("p-click", function PoPageListComponent_po_page_header_1_po_button_5_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.callAction(ctx_r11.visibleActions[2])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-disabled", ctx_r3.actionIsDisabled(ctx_r3.visibleActions[2]))("p-label", ctx_r3.visibleActions[2].label);
} }
function PoPageListComponent_po_page_header_1_po_dropdown_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-dropdown", 11);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-actions", ctx_r4.dropdownActions)("p-label", ctx_r4.literals.otherActions);
} }
function PoPageListComponent_po_page_header_1_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 20);
    i0.ɵɵlistener("click", function PoPageListComponent_po_page_header_1_div_7_div_6_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r15.callActionFilter("advancedAction")); })("keydown.enter", function PoPageListComponent_po_page_header_1_div_7_div_6_Template_span_keydown_enter_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r17.callActionFilter("advancedAction")); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.advancedSearch, " ");
} }
function PoPageListComponent_po_page_header_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    i0.ɵɵlistener("click", function PoPageListComponent_po_page_header_1_div_7_Template_span_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.callActionFilter("action")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "input", 16, 17);
    i0.ɵɵlistener("keypress", function PoPageListComponent_po_page_header_1_div_7_Template_input_keypress_4_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.onkeypress($event.keyCode)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, PoPageListComponent_po_page_header_1_div_7_div_6_Template, 3, 1, "div", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r5.hasCustomFilterSize() ? ctx_r5.filterSizeClass(ctx_r5.filter.width) : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.hasCustomFilterSize() ? ctx_r5.filter.advancedAction ? "po-page-filter-input-variable-size" : "po-page-filter-input-variable-size-wo-adv-search" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", ctx_r5.filter.placeholder || "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.filter.advancedAction);
} }
function PoPageListComponent_po_page_header_1_po_disclaimer_group_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer-group", 21);
    i0.ɵɵlistener("p-change", function PoPageListComponent_po_page_header_1_po_disclaimer_group_8_Template_po_disclaimer_group_p_change_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.onChangeDisclaimerGroup($event)); })("p-remove", function PoPageListComponent_po_page_header_1_po_disclaimer_group_8_Template_po_disclaimer_group_p_remove_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.onRemoveDisclaimer($event)); })("p-remove-all", function PoPageListComponent_po_page_header_1_po_disclaimer_group_8_Template_po_disclaimer_group_p_remove_all_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.onRemoveAllDisclaimers($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-page-list-disclaimer-group", !!(ctx_r6.disclaimerGroup == null ? null : ctx_r6.disclaimerGroup.disclaimers == null ? null : ctx_r6.disclaimerGroup.disclaimers.length));
    i0.ɵɵproperty("p-disclaimers", ctx_r6.disclaimerGroup == null ? null : ctx_r6.disclaimerGroup.disclaimers)("p-hide-remove-all", ctx_r6.disclaimerGroup == null ? null : ctx_r6.disclaimerGroup.hideRemoveAll)("p-title", ctx_r6.disclaimerGroup == null ? null : ctx_r6.disclaimerGroup.title);
} }
function PoPageListComponent_po_page_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-page-header", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, PoPageListComponent_po_page_header_1_po_button_3_Template, 1, 3, "po-button", 4);
    i0.ɵɵtemplate(4, PoPageListComponent_po_page_header_1_po_button_4_Template, 1, 2, "po-button", 5);
    i0.ɵɵtemplate(5, PoPageListComponent_po_page_header_1_po_button_5_Template, 1, 2, "po-button", 5);
    i0.ɵɵtemplate(6, PoPageListComponent_po_page_header_1_po_dropdown_6_Template, 1, 2, "po-dropdown", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, PoPageListComponent_po_page_header_1_div_7_Template, 7, 4, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, PoPageListComponent_po_page_header_1_po_disclaimer_group_8_Template, 1, 5, "po-disclaimer-group", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-page-list-header-padding", ctx_r0.filter && !ctx_r0.visibleActions.length);
    i0.ɵɵproperty("p-breadcrumb", ctx_r0.breadcrumb)("p-title", ctx_r0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("po-page-list-actions-padding", ctx_r0.filter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions[0]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions[1] && (ctx_r0.visibleActions.length === 2 || !ctx_r0.isMobile));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions.length === 3 && ctx_r0.visibleActions[2] && !ctx_r0.isMobile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.visibleActions.length > ctx_r0.limitPrimaryActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.filter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r0.disclaimerGroup);
} }
const _c1 = ["*"];
/**
 * @docsExtends PoPageListBaseComponent
 *
 * @example
 *
 * <example name="po-page-list-basic" title="PO Page List Basic">
 *  <file name="sample-po-page-list-basic/sample-po-page-list-basic.component.html"> </file>
 *  <file name="sample-po-page-list-basic/sample-po-page-list-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-list-labs" title="PO Page List Labs">
 *  <file name="sample-po-page-list-labs/sample-po-page-list-labs.component.html"> </file>
 *  <file name="sample-po-page-list-labs/sample-po-page-list-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-list-hiring-processes" title="PO Page List - Hiring Processes">
 *  <file name="sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"> </file>
 *  <file name="sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"> </file>
 *  <file name="sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"> </file>
 * </example>
 */
export class PoPageListComponent extends PoPageListBaseComponent {
    /* istanbul ignore next */
    constructor(viewRef, languageService, renderer, router, changeDetector) {
        super(languageService);
        this.renderer = renderer;
        this.router = router;
        this.changeDetector = changeDetector;
        this.limitPrimaryActions = 3;
        this.callFunction = callFunction;
        this.isRecalculate = true;
        this.maxWidthMobile = 480;
        this.initializeListeners();
    }
    ngOnInit() {
        this.advancedSearch = this.initializeFixedLiterals();
    }
    ngAfterContentInit() {
        this.setIsMobile();
        this.setDropdownActions();
    }
    ngOnChanges(changes) {
        this.setDropdownActions();
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    actionIsDisabled(action) {
        return isTypeof(action.disabled, 'function') ? action.disabled(action) : action.disabled;
    }
    callAction(item) {
        if (item.url) {
            isExternalLink(item.url) ? openExternalLink(item.url) : this.router.navigate([item.url]);
        }
        else if (item.action) {
            item.action();
        }
    }
    hasPageHeader() {
        return !!(this.title ||
            (this.visibleActions && this.visibleActions.length) ||
            (this.breadcrumb && this.breadcrumb.items.length));
    }
    hasCustomFilterSize() {
        if (!this.filter) {
            return false;
        }
        return this.filter.width >= 1 && this.filter.width <= 6;
    }
    filterSizeClass(width) {
        const smWidth = Math.max(this.filter?.advancedAction ? 6 : 2, width);
        const mdWidth = Math.max(this.filter?.advancedAction ? 4 : 1, width);
        if (this.filter?.advancedAction) {
            width = Math.max(width, 2);
        }
        return `po-sm-${smWidth} po-md-${mdWidth} po-lg-${width} po-xl-${width}`;
    }
    setDropdownActions() {
        if (this.visibleActions.length > this.limitPrimaryActions) {
            this.dropdownActions = this.visibleActions.slice(this.limitPrimaryActions - 1);
        }
    }
    callActionFilter(field) {
        this.filter[field](this.filterInput.nativeElement.value);
        this.changeDetector.detectChanges();
    }
    /**
     * Limpa o campo de pesquisa.
     */
    clearInputSearch() {
        this.filterInput.nativeElement.value = null;
    }
    onkeypress(key) {
        if (key === 13) {
            this.callActionFilter('action');
        }
    }
    // Recebe evento change do disclaimer e recalcula tela
    onChangeDisclaimerGroup(disclaimers) {
        if ((disclaimers && disclaimers.length && this.isRecalculate) ||
            (disclaimers.length === 0 && !this.isRecalculate)) {
            this.poPageContent.recalculateHeaderSize();
            this.isRecalculate = !this.isRecalculate;
        }
        if (this.disclaimerGroup && this.disclaimerGroup.change) {
            this.disclaimerGroup.change(disclaimers);
        }
    }
    onRemoveDisclaimer(removeData) {
        if (this.disclaimerGroup.remove) {
            this.disclaimerGroup.remove(removeData);
        }
    }
    onRemoveAllDisclaimers(removedDisclaimers) {
        if (this.disclaimerGroup.removeAll) {
            this.disclaimerGroup.removeAll(removedDisclaimers);
        }
    }
    initializeFixedLiterals() {
        const literal = {
            pt: {
                advancedSearch: 'Busca avançada'
            },
            en: {
                advancedSearch: 'Advanced search'
            },
            es: {
                advancedSearch: 'Búsqueda avanzada'
            },
            ru: {
                advancedSearch: 'полный поиск'
            }
        };
        return literal[this.language].advancedSearch;
    }
    initializeListeners() {
        this.resizeListener = this.renderer.listen('window', 'resize', (event) => {
            this.onResize(event);
        });
    }
    removeListeners() {
        this.resizeListener();
    }
    onResize(event) {
        const width = event.target.innerWidth;
        if (width < this.maxWidthMobile) {
            this.isMobile = true;
            this.limitPrimaryActions = 2;
            this.setDropdownActions();
        }
        else {
            this.isMobile = false;
            this.limitPrimaryActions = 3;
            this.setDropdownActions();
        }
    }
    setIsMobile() {
        if (window.innerWidth < this.maxWidthMobile) {
            this.isMobile = true;
            this.limitPrimaryActions = 2;
        }
    }
}
PoPageListComponent.ɵfac = function PoPageListComponent_Factory(t) { return new (t || PoPageListComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPageListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageListComponent, selectors: [["po-page-list"]], viewQuery: function PoPageListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(PoPageContentComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filterInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPageContent = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[3, "po-page-list-header-padding", "p-breadcrumb", "p-title", 4, "ngIf"], [3, "p-breadcrumb", "p-title"], [1, "po-page-list-operations"], [1, "po-page-list-actions"], ["p-kind", "primary", 3, "p-disabled", "p-icon", "p-label", "p-click", 4, "ngIf"], [3, "p-disabled", "p-label", "p-click", 4, "ngIf"], [3, "p-actions", "p-label", 4, "ngIf"], ["class", "po-page-list-filter-wrapper", 3, "ngClass", 4, "ngIf"], [3, "po-page-list-disclaimer-group", "p-disclaimers", "p-hide-remove-all", "p-title", "p-change", "p-remove", "p-remove-all", 4, "ngIf"], ["p-kind", "primary", 3, "p-disabled", "p-icon", "p-label", "p-click"], [3, "p-disabled", "p-label", "p-click"], [3, "p-actions", "p-label"], [1, "po-page-list-filter-wrapper", 3, "ngClass"], [1, "po-field-container-content", "po-page-filter-content", 3, "ngClass"], [1, "po-field-icon-container-right"], [1, "po-icon", "po-icon-search", "po-field-icon", "po-icon-input", 3, "click"], ["name", "model", "type", "text", 1, "po-input", "po-input-icon-right", 3, "placeholder", "keypress"], ["filterInput", ""], ["class", "po-page-list-filter-search", 4, "ngIf"], [1, "po-page-list-filter-search"], ["tabindex", "0", 1, "po-page-list-filter-search-link", 3, "click", "keydown.enter"], [3, "p-disclaimers", "p-hide-remove-all", "p-title", "p-change", "p-remove", "p-remove-all"]], template: function PoPageListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "po-page");
        i0.ɵɵtemplate(1, PoPageListComponent_po_page_header_1_Template, 9, 12, "po-page-header", 0);
        i0.ɵɵelementStart(2, "po-page-content");
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPageHeader());
    } }, dependencies: [i3.NgClass, i3.NgIf, i4.PoButtonComponent, i5.PoDisclaimerGroupComponent, i6.PoDropdownComponent, i7.PoPageComponent, i8.PoPageContentComponent, i9.PoPageHeaderComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageListComponent, [{
        type: Component,
        args: [{ selector: 'po-page-list', template: "<po-page>\r\n  <!-- HEADER -->\r\n  <po-page-header\r\n    *ngIf=\"hasPageHeader()\"\r\n    [class.po-page-list-header-padding]=\"filter && !visibleActions.length\"\r\n    [p-breadcrumb]=\"breadcrumb\"\r\n    [p-title]=\"title\"\r\n  >\r\n    <!-- OPERATIONS -->\r\n    <div class=\"po-page-list-operations\">\r\n      <div class=\"po-page-list-actions\" [class.po-page-list-actions-padding]=\"filter\">\r\n        <po-button\r\n          *ngIf=\"visibleActions[0]\"\r\n          p-kind=\"primary\"\r\n          [p-disabled]=\"actionIsDisabled(actions[0])\"\r\n          [p-icon]=\"visibleActions[0].icon\"\r\n          [p-label]=\"visibleActions[0].label\"\r\n          (p-click)=\"callAction(visibleActions[0])\"\r\n        >\r\n        </po-button>\r\n\r\n        <po-button\r\n          *ngIf=\"visibleActions[1] && (visibleActions.length === 2 || !isMobile)\"\r\n          [p-disabled]=\"actionIsDisabled(actions[1])\"\r\n          [p-label]=\"visibleActions[1].label\"\r\n          (p-click)=\"callAction(visibleActions[1])\"\r\n        >\r\n        </po-button>\r\n\r\n        <po-button\r\n          *ngIf=\"visibleActions.length === 3 && visibleActions[2] && !isMobile\"\r\n          [p-disabled]=\"actionIsDisabled(visibleActions[2])\"\r\n          [p-label]=\"visibleActions[2].label\"\r\n          (p-click)=\"callAction(visibleActions[2])\"\r\n        >\r\n        </po-button>\r\n\r\n        <po-dropdown\r\n          *ngIf=\"visibleActions.length > limitPrimaryActions\"\r\n          [p-actions]=\"dropdownActions\"\r\n          [p-label]=\"literals.otherActions\"\r\n        >\r\n        </po-dropdown>\r\n      </div>\r\n\r\n      <!-- FILTER -->\r\n      <div\r\n        class=\"po-page-list-filter-wrapper\"\r\n        *ngIf=\"filter\"\r\n        [ngClass]=\"hasCustomFilterSize() ? filterSizeClass(filter.width) : ''\"\r\n      >\r\n        <div\r\n          class=\"po-field-container-content po-page-filter-content\"\r\n          [ngClass]=\"\r\n            hasCustomFilterSize()\r\n              ? filter.advancedAction\r\n                ? 'po-page-filter-input-variable-size'\r\n                : 'po-page-filter-input-variable-size-wo-adv-search'\r\n              : ''\r\n          \"\r\n        >\r\n          <div class=\"po-field-icon-container-right\">\r\n            <span class=\"po-icon po-icon-search po-field-icon po-icon-input\" (click)=\"callActionFilter('action')\">\r\n            </span>\r\n          </div>\r\n\r\n          <input\r\n            #filterInput\r\n            class=\"po-input po-input-icon-right\"\r\n            name=\"model\"\r\n            type=\"text\"\r\n            [placeholder]=\"filter.placeholder || ''\"\r\n            (keypress)=\"onkeypress($event.keyCode)\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"po-page-list-filter-search\" *ngIf=\"filter.advancedAction\">\r\n          <span\r\n            class=\"po-page-list-filter-search-link\"\r\n            tabindex=\"0\"\r\n            (click)=\"callActionFilter('advancedAction')\"\r\n            (keydown.enter)=\"callActionFilter('advancedAction')\"\r\n          >\r\n            {{ advancedSearch }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- DISCLAIMER -->\r\n    <po-disclaimer-group\r\n      *ngIf=\"!!disclaimerGroup\"\r\n      [class.po-page-list-disclaimer-group]=\"!!disclaimerGroup?.disclaimers?.length\"\r\n      [p-disclaimers]=\"disclaimerGroup?.disclaimers\"\r\n      [p-hide-remove-all]=\"disclaimerGroup?.hideRemoveAll\"\r\n      [p-title]=\"disclaimerGroup?.title\"\r\n      (p-change)=\"onChangeDisclaimerGroup($event)\"\r\n      (p-remove)=\"onRemoveDisclaimer($event)\"\r\n      (p-remove-all)=\"onRemoveAllDisclaimers($event)\"\r\n    >\r\n    </po-disclaimer-group>\r\n  </po-page-header>\r\n\r\n  <!-- CONTENT -->\r\n  <po-page-content>\r\n    <ng-content></ng-content>\r\n  </po-page-content>\r\n</po-page>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.PoLanguageService }, { type: i0.Renderer2 }, { type: i2.Router }, { type: i0.ChangeDetectorRef }]; }, { filterInput: [{
            type: ViewChild,
            args: ['filterInput']
        }], poPageContent: [{
            type: ViewChild,
            args: [PoPageContentComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlL3BvLXBhZ2UtbGlzdC9wby1wYWdlLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1saXN0L3BvLXBhZ2UtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQU1ULFNBQVMsRUFJVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU8vRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNaaEUsb0NBT0M7SUFEQywrTEFBVyxlQUFBLHdDQUEwQixDQUFDLEVBQUUsQ0FBQSxJQUFDO0lBRTNDLGlCQUFZOzs7SUFMVix1RUFBMkMseUNBQUEsMkNBQUE7Ozs7SUFPN0MscUNBS0M7SUFEQyxnTUFBVyxlQUFBLHdDQUEwQixDQUFDLEVBQUUsQ0FBQSxJQUFDO0lBRTNDLGlCQUFZOzs7SUFKVix1RUFBMkMsMkNBQUE7Ozs7SUFNN0MscUNBS0M7SUFEQyxpTUFBVyxlQUFBLDBDQUEwQixDQUFDLEVBQUUsQ0FBQSxJQUFDO0lBRTNDLGlCQUFZOzs7SUFKViw4RUFBa0QsMkNBQUE7OztJQU1wRCxrQ0FLYzs7O0lBSFosa0RBQTZCLHlDQUFBOzs7O0lBcUMvQiwrQkFBc0UsZUFBQTtJQUlsRSx3TEFBUyxlQUFBLHlCQUFpQixnQkFBZ0IsQ0FBQyxDQUFB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Q3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sUUFBUSxDQUFDLEtBQVk7UUFDM0IsTUFBTSxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQWlCLENBQUMsVUFBVSxDQUFDO1FBRWxELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztzRkFuTFUsbUJBQW1CO3NFQUFuQixtQkFBbUI7O3VCQUluQixzQkFBc0I7Ozs7Ozs7UUN0RG5DLCtCQUFTO1FBRVAsMkZBbUdpQjtRQUdqQix1Q0FBaUI7UUFDZixrQkFBeUI7UUFDM0IsaUJBQWtCLEVBQUE7O1FBdkdmLGVBQXFCO1FBQXJCLDBDQUFxQjs7dUZEK0NiLG1CQUFtQjtjQUovQixTQUFTOzJCQUNFLGNBQWM7Z0xBTUUsV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhO1lBQzZCLGFBQWE7a0JBQWpFLFNBQVM7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IGNhbGxGdW5jdGlvbiwgaXNFeHRlcm5hbExpbmssIGlzVHlwZW9mLCBvcGVuRXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUFjdGlvbiB9IGZyb20gJy4uL3BvLXBhZ2UtYWN0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRGlzY2xhaW1lciB9IGZyb20gJy4uLy4uL3BvLWRpc2NsYWltZXIvcG8tZGlzY2xhaW1lci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0Rpc2NsYWltZXJHcm91cFJlbW92ZUFjdGlvbiB9IGZyb20gJy4uLy4uL3BvLWRpc2NsYWltZXItZ3JvdXAvcG8tZGlzY2xhaW1lci1ncm91cC1yZW1vdmUtYWN0aW9uLmludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vcG8tcGFnZS1jb250ZW50L3BvLXBhZ2UtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VMaXN0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1saXN0LWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9QYWdlTGlzdEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtbGlzdC1iYXNpY1wiIHRpdGxlPVwiUE8gUGFnZSBMaXN0IEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtbGlzdC1iYXNpYy9zYW1wbGUtcG8tcGFnZS1saXN0LWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1saXN0LWJhc2ljL3NhbXBsZS1wby1wYWdlLWxpc3QtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1saXN0LWxhYnNcIiB0aXRsZT1cIlBPIFBhZ2UgTGlzdCBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtbGlzdC1sYWJzL3NhbXBsZS1wby1wYWdlLWxpc3QtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtbGlzdC1sYWJzL3NhbXBsZS1wby1wYWdlLWxpc3QtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWxpc3QtaGlyaW5nLXByb2Nlc3Nlc1wiIHRpdGxlPVwiUE8gUGFnZSBMaXN0IC0gSGlyaW5nIFByb2Nlc3Nlc1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWxpc3QtaGlyaW5nLXByb2Nlc3Nlcy9zYW1wbGUtcG8tcGFnZS1saXN0LWhpcmluZy1wcm9jZXNzZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWxpc3QtaGlyaW5nLXByb2Nlc3Nlcy9zYW1wbGUtcG8tcGFnZS1saXN0LWhpcmluZy1wcm9jZXNzZXMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1saXN0LWhpcmluZy1wcm9jZXNzZXMvc2FtcGxlLXBvLXBhZ2UtbGlzdC1oaXJpbmctcHJvY2Vzc2VzLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2UtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtbGlzdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUxpc3RDb21wb25lbnRcclxuICBleHRlbmRzIFBvUGFnZUxpc3RCYXNlQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoUG9QYWdlQ29udGVudENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcG9QYWdlQ29udGVudDogUG9QYWdlQ29udGVudENvbXBvbmVudDtcclxuXHJcbiAgYWR2YW5jZWRTZWFyY2g6IHN0cmluZztcclxuICBkcm9wZG93bkFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj47XHJcbiAgaXNNb2JpbGU6IGJvb2xlYW47XHJcbiAgbGltaXRQcmltYXJ5QWN0aW9uczogbnVtYmVyID0gMztcclxuXHJcbiAgY2FsbEZ1bmN0aW9uID0gY2FsbEZ1bmN0aW9uO1xyXG5cclxuICBwcml2YXRlIGlzUmVjYWxjdWxhdGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgbWF4V2lkdGhNb2JpbGU6IG51bWJlciA9IDQ4MDtcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZHZhbmNlZFNlYXJjaCA9IHRoaXMuaW5pdGlhbGl6ZUZpeGVkTGl0ZXJhbHMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0SXNNb2JpbGUoKTtcclxuICAgIHRoaXMuc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIHRoaXMuc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBhY3Rpb25Jc0Rpc2FibGVkKGFjdGlvbjogYW55KSB7XHJcbiAgICByZXR1cm4gaXNUeXBlb2YoYWN0aW9uLmRpc2FibGVkLCAnZnVuY3Rpb24nKSA/IGFjdGlvbi5kaXNhYmxlZChhY3Rpb24pIDogYWN0aW9uLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgY2FsbEFjdGlvbihpdGVtOiBQb1BhZ2VBY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmIChpdGVtLnVybCkge1xyXG4gICAgICBpc0V4dGVybmFsTGluayhpdGVtLnVybCkgPyBvcGVuRXh0ZXJuYWxMaW5rKGl0ZW0udXJsKSA6IHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtLnVybF0pO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmFjdGlvbikge1xyXG4gICAgICBpdGVtLmFjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzUGFnZUhlYWRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIShcclxuICAgICAgdGhpcy50aXRsZSB8fFxyXG4gICAgICAodGhpcy52aXNpYmxlQWN0aW9ucyAmJiB0aGlzLnZpc2libGVBY3Rpb25zLmxlbmd0aCkgfHxcclxuICAgICAgKHRoaXMuYnJlYWRjcnVtYiAmJiB0aGlzLmJyZWFkY3J1bWIuaXRlbXMubGVuZ3RoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhc0N1c3RvbUZpbHRlclNpemUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuZmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmZpbHRlci53aWR0aCA+PSAxICYmIHRoaXMuZmlsdGVyLndpZHRoIDw9IDY7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJTaXplQ2xhc3Mod2lkdGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzbVdpZHRoID0gTWF0aC5tYXgodGhpcy5maWx0ZXI/LmFkdmFuY2VkQWN0aW9uID8gNiA6IDIsIHdpZHRoKTtcclxuICAgIGNvbnN0IG1kV2lkdGggPSBNYXRoLm1heCh0aGlzLmZpbHRlcj8uYWR2YW5jZWRBY3Rpb24gPyA0IDogMSwgd2lkdGgpO1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyPy5hZHZhbmNlZEFjdGlvbikge1xyXG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCAyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBgcG8tc20tJHtzbVdpZHRofSBwby1tZC0ke21kV2lkdGh9IHBvLWxnLSR7d2lkdGh9IHBvLXhsLSR7d2lkdGh9YDtcclxuICB9XHJcblxyXG4gIHNldERyb3Bkb3duQWN0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGVBY3Rpb25zLmxlbmd0aCA+IHRoaXMubGltaXRQcmltYXJ5QWN0aW9ucykge1xyXG4gICAgICB0aGlzLmRyb3Bkb3duQWN0aW9ucyA9IHRoaXMudmlzaWJsZUFjdGlvbnMuc2xpY2UodGhpcy5saW1pdFByaW1hcnlBY3Rpb25zIC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsQWN0aW9uRmlsdGVyKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmlsdGVyW2ZpZWxkXSh0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIExpbXBhIG8gY2FtcG8gZGUgcGVzcXVpc2EuXHJcbiAgICovXHJcbiAgY2xlYXJJbnB1dFNlYXJjaCgpIHtcclxuICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbmtleXByZXNzKGtleSkge1xyXG4gICAgaWYgKGtleSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5jYWxsQWN0aW9uRmlsdGVyKCdhY3Rpb24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlY2ViZSBldmVudG8gY2hhbmdlIGRvIGRpc2NsYWltZXIgZSByZWNhbGN1bGEgdGVsYVxyXG4gIG9uQ2hhbmdlRGlzY2xhaW1lckdyb3VwKGRpc2NsYWltZXJzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChkaXNjbGFpbWVycyAmJiBkaXNjbGFpbWVycy5sZW5ndGggJiYgdGhpcy5pc1JlY2FsY3VsYXRlKSB8fFxyXG4gICAgICAoZGlzY2xhaW1lcnMubGVuZ3RoID09PSAwICYmICF0aGlzLmlzUmVjYWxjdWxhdGUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5wb1BhZ2VDb250ZW50LnJlY2FsY3VsYXRlSGVhZGVyU2l6ZSgpO1xyXG4gICAgICB0aGlzLmlzUmVjYWxjdWxhdGUgPSAhdGhpcy5pc1JlY2FsY3VsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpc2NsYWltZXJHcm91cCAmJiB0aGlzLmRpc2NsYWltZXJHcm91cC5jaGFuZ2UpIHtcclxuICAgICAgdGhpcy5kaXNjbGFpbWVyR3JvdXAuY2hhbmdlKGRpc2NsYWltZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlRGlzY2xhaW1lcihyZW1vdmVEYXRhOiBQb0Rpc2NsYWltZXJHcm91cFJlbW92ZUFjdGlvbikge1xyXG4gICAgaWYgKHRoaXMuZGlzY2xhaW1lckdyb3VwLnJlbW92ZSkge1xyXG4gICAgICB0aGlzLmRpc2NsYWltZXJHcm91cC5yZW1vdmUocmVtb3ZlRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZUFsbERpc2NsYWltZXJzKHJlbW92ZWREaXNjbGFpbWVyczogQXJyYXk8UG9EaXNjbGFpbWVyPikge1xyXG4gICAgaWYgKHRoaXMuZGlzY2xhaW1lckdyb3VwLnJlbW92ZUFsbCkge1xyXG4gICAgICB0aGlzLmRpc2NsYWltZXJHcm91cC5yZW1vdmVBbGwocmVtb3ZlZERpc2NsYWltZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUZpeGVkTGl0ZXJhbHMoKSB7XHJcbiAgICBjb25zdCBsaXRlcmFsID0ge1xyXG4gICAgICBwdDoge1xyXG4gICAgICAgIGFkdmFuY2VkU2VhcmNoOiAnQnVzY2EgYXZhbsOnYWRhJ1xyXG4gICAgICB9LFxyXG4gICAgICBlbjoge1xyXG4gICAgICAgIGFkdmFuY2VkU2VhcmNoOiAnQWR2YW5jZWQgc2VhcmNoJ1xyXG4gICAgICB9LFxyXG4gICAgICBlczoge1xyXG4gICAgICAgIGFkdmFuY2VkU2VhcmNoOiAnQsO6c3F1ZWRhIGF2YW56YWRhJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGFkdmFuY2VkU2VhcmNoOiAn0L/QvtC70L3Ri9C5INC/0L7QuNGB0LonXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGxpdGVyYWxbdGhpcy5sYW5ndWFnZV0uYWR2YW5jZWRTZWFyY2g7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5vblJlc2l6ZShldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdpZHRoID0gKGV2ZW50LnRhcmdldCBhcyBXaW5kb3cpLmlubmVyV2lkdGg7XHJcblxyXG4gICAgaWYgKHdpZHRoIDwgdGhpcy5tYXhXaWR0aE1vYmlsZSkge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saW1pdFByaW1hcnlBY3Rpb25zID0gMjtcclxuICAgICAgdGhpcy5zZXREcm9wZG93bkFjdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5saW1pdFByaW1hcnlBY3Rpb25zID0gMztcclxuICAgICAgdGhpcy5zZXREcm9wZG93bkFjdGlvbnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SXNNb2JpbGUoKTogdm9pZCB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCB0aGlzLm1heFdpZHRoTW9iaWxlKSB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxpbWl0UHJpbWFyeUFjdGlvbnMgPSAyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8cG8tcGFnZT5cclxuICA8IS0tIEhFQURFUiAtLT5cclxuICA8cG8tcGFnZS1oZWFkZXJcclxuICAgICpuZ0lmPVwiaGFzUGFnZUhlYWRlcigpXCJcclxuICAgIFtjbGFzcy5wby1wYWdlLWxpc3QtaGVhZGVyLXBhZGRpbmddPVwiZmlsdGVyICYmICF2aXNpYmxlQWN0aW9ucy5sZW5ndGhcIlxyXG4gICAgW3AtYnJlYWRjcnVtYl09XCJicmVhZGNydW1iXCJcclxuICAgIFtwLXRpdGxlXT1cInRpdGxlXCJcclxuICA+XHJcbiAgICA8IS0tIE9QRVJBVElPTlMgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1saXN0LW9wZXJhdGlvbnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbGlzdC1hY3Rpb25zXCIgW2NsYXNzLnBvLXBhZ2UtbGlzdC1hY3Rpb25zLXBhZGRpbmddPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICAgKm5nSWY9XCJ2aXNpYmxlQWN0aW9uc1swXVwiXHJcbiAgICAgICAgICBwLWtpbmQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIFtwLWRpc2FibGVkXT1cImFjdGlvbklzRGlzYWJsZWQoYWN0aW9uc1swXSlcIlxyXG4gICAgICAgICAgW3AtaWNvbl09XCJ2aXNpYmxlQWN0aW9uc1swXS5pY29uXCJcclxuICAgICAgICAgIFtwLWxhYmVsXT1cInZpc2libGVBY3Rpb25zWzBdLmxhYmVsXCJcclxuICAgICAgICAgIChwLWNsaWNrKT1cImNhbGxBY3Rpb24odmlzaWJsZUFjdGlvbnNbMF0pXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1idXR0b24+XHJcblxyXG4gICAgICAgIDxwby1idXR0b25cclxuICAgICAgICAgICpuZ0lmPVwidmlzaWJsZUFjdGlvbnNbMV0gJiYgKHZpc2libGVBY3Rpb25zLmxlbmd0aCA9PT0gMiB8fCAhaXNNb2JpbGUpXCJcclxuICAgICAgICAgIFtwLWRpc2FibGVkXT1cImFjdGlvbklzRGlzYWJsZWQoYWN0aW9uc1sxXSlcIlxyXG4gICAgICAgICAgW3AtbGFiZWxdPVwidmlzaWJsZUFjdGlvbnNbMV0ubGFiZWxcIlxyXG4gICAgICAgICAgKHAtY2xpY2spPVwiY2FsbEFjdGlvbih2aXNpYmxlQWN0aW9uc1sxXSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3BvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICAgKm5nSWY9XCJ2aXNpYmxlQWN0aW9ucy5sZW5ndGggPT09IDMgJiYgdmlzaWJsZUFjdGlvbnNbMl0gJiYgIWlzTW9iaWxlXCJcclxuICAgICAgICAgIFtwLWRpc2FibGVkXT1cImFjdGlvbklzRGlzYWJsZWQodmlzaWJsZUFjdGlvbnNbMl0pXCJcclxuICAgICAgICAgIFtwLWxhYmVsXT1cInZpc2libGVBY3Rpb25zWzJdLmxhYmVsXCJcclxuICAgICAgICAgIChwLWNsaWNrKT1cImNhbGxBY3Rpb24odmlzaWJsZUFjdGlvbnNbMl0pXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1idXR0b24+XHJcblxyXG4gICAgICAgIDxwby1kcm9wZG93blxyXG4gICAgICAgICAgKm5nSWY9XCJ2aXNpYmxlQWN0aW9ucy5sZW5ndGggPiBsaW1pdFByaW1hcnlBY3Rpb25zXCJcclxuICAgICAgICAgIFtwLWFjdGlvbnNdPVwiZHJvcGRvd25BY3Rpb25zXCJcclxuICAgICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLm90aGVyQWN0aW9uc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvcG8tZHJvcGRvd24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBGSUxURVIgLS0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInBvLXBhZ2UtbGlzdC1maWx0ZXItd3JhcHBlclwiXHJcbiAgICAgICAgKm5nSWY9XCJmaWx0ZXJcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cImhhc0N1c3RvbUZpbHRlclNpemUoKSA/IGZpbHRlclNpemVDbGFzcyhmaWx0ZXIud2lkdGgpIDogJydcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudCBwby1wYWdlLWZpbHRlci1jb250ZW50XCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIlxyXG4gICAgICAgICAgICBoYXNDdXN0b21GaWx0ZXJTaXplKClcclxuICAgICAgICAgICAgICA/IGZpbHRlci5hZHZhbmNlZEFjdGlvblxyXG4gICAgICAgICAgICAgICAgPyAncG8tcGFnZS1maWx0ZXItaW5wdXQtdmFyaWFibGUtc2l6ZSdcclxuICAgICAgICAgICAgICAgIDogJ3BvLXBhZ2UtZmlsdGVyLWlucHV0LXZhcmlhYmxlLXNpemUtd28tYWR2LXNlYXJjaCdcclxuICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1zZWFyY2ggcG8tZmllbGQtaWNvbiBwby1pY29uLWlucHV0XCIgKGNsaWNrKT1cImNhbGxBY3Rpb25GaWx0ZXIoJ2FjdGlvbicpXCI+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAjZmlsdGVySW5wdXRcclxuICAgICAgICAgICAgY2xhc3M9XCJwby1pbnB1dCBwby1pbnB1dC1pY29uLXJpZ2h0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm1vZGVsXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmlsdGVyLnBsYWNlaG9sZGVyIHx8ICcnXCJcclxuICAgICAgICAgICAgKGtleXByZXNzKT1cIm9ua2V5cHJlc3MoJGV2ZW50LmtleUNvZGUpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLWxpc3QtZmlsdGVyLXNlYXJjaFwiICpuZ0lmPVwiZmlsdGVyLmFkdmFuY2VkQWN0aW9uXCI+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLXBhZ2UtbGlzdC1maWx0ZXItc2VhcmNoLWxpbmtcIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2FsbEFjdGlvbkZpbHRlcignYWR2YW5jZWRBY3Rpb24nKVwiXHJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cImNhbGxBY3Rpb25GaWx0ZXIoJ2FkdmFuY2VkQWN0aW9uJylcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7eyBhZHZhbmNlZFNlYXJjaCB9fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gRElTQ0xBSU1FUiAtLT5cclxuICAgIDxwby1kaXNjbGFpbWVyLWdyb3VwXHJcbiAgICAgICpuZ0lmPVwiISFkaXNjbGFpbWVyR3JvdXBcIlxyXG4gICAgICBbY2xhc3MucG8tcGFnZS1saXN0LWRpc2NsYWltZXItZ3JvdXBdPVwiISFkaXNjbGFpbWVyR3JvdXA/LmRpc2NsYWltZXJzPy5sZW5ndGhcIlxyXG4gICAgICBbcC1kaXNjbGFpbWVyc109XCJkaXNjbGFpbWVyR3JvdXA/LmRpc2NsYWltZXJzXCJcclxuICAgICAgW3AtaGlkZS1yZW1vdmUtYWxsXT1cImRpc2NsYWltZXJHcm91cD8uaGlkZVJlbW92ZUFsbFwiXHJcbiAgICAgIFtwLXRpdGxlXT1cImRpc2NsYWltZXJHcm91cD8udGl0bGVcIlxyXG4gICAgICAocC1jaGFuZ2UpPVwib25DaGFuZ2VEaXNjbGFpbWVyR3JvdXAoJGV2ZW50KVwiXHJcbiAgICAgIChwLXJlbW92ZSk9XCJvblJlbW92ZURpc2NsYWltZXIoJGV2ZW50KVwiXHJcbiAgICAgIChwLXJlbW92ZS1hbGwpPVwib25SZW1vdmVBbGxEaXNjbGFpbWVycygkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvcG8tZGlzY2xhaW1lci1ncm91cD5cclxuICA8L3BvLXBhZ2UtaGVhZGVyPlxyXG5cclxuICA8IS0tIENPTlRFTlQgLS0+XHJcbiAgPHBvLXBhZ2UtY29udGVudD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L3BvLXBhZ2UtY29udGVudD5cclxuPC9wby1wYWdlPlxyXG4iXX0=