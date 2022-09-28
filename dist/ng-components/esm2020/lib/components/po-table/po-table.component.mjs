import { Component, ContentChild, ElementRef, ViewChild, ViewChildren, ContentChildren } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { PoDateService } from '../../services/po-date/po-date.service';
import { PoTableBaseComponent } from './po-table-base.component';
import { PoTableRowTemplateDirective } from './po-table-row-template/po-table-row-template.directive';
import { PoTableCellTemplateDirective } from './po-table-cell-template/po-table-cell-template.directive';
import { PoTableColumnTemplateDirective } from './po-table-column-template/po-table-column-template.directive';
import { PoTableRowTemplateArrowDirection } from './enums/po-table-row-template-arrow-direction.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-date/po-date.service";
import * as i2 from "../../services/po-language/po-language.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "./services/po-table.service";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/cdk/scrolling";
import * as i8 from "../po-button/po-button.component";
import * as i9 from "../po-container/po-container.component";
import * as i10 from "../po-loading/po-loading.component";
import * as i11 from "../po-popup/po-popup.component";
import * as i12 from "../../directives/po-tooltip/po-tooltip.directive";
import * as i13 from "../po-icon/po-icon.component";
import * as i14 from "../po-field/po-checkbox/po-checkbox.component";
import * as i15 from "./po-table-column-icon/po-table-column-icon.component";
import * as i16 from "./po-table-column-label/po-table-column-label.component";
import * as i17 from "./po-table-column-link/po-table-column-link.component";
import * as i18 from "./po-table-column-manager/po-table-column-manager.component";
import * as i19 from "./po-table-detail/po-table-detail.component";
import * as i20 from "./po-table-subtitle-circle/po-table-subtitle-circle.component";
import * as i21 from "./po-table-subtitle-footer/po-table-subtitle-footer.component";
import * as i22 from "../../pipes/po-time/po-time.pipe";
const _c0 = ["noColumnsHeader"];
const _c1 = ["noColumnsHeaderFixed"];
const _c2 = ["popup"];
const _c3 = ["tableFooter"];
const _c4 = ["tableWrapper"];
const _c5 = ["poTableTbody"];
const _c6 = ["poTableThead"];
const _c7 = ["poTableTbodyVirtual"];
const _c8 = ["columnManager"];
const _c9 = ["columnManagerFixed"];
const _c10 = ["columnActionLeft"];
const _c11 = ["columnActionLeftFixed"];
const _c12 = ["columnManagerTarget"];
const _c13 = ["columnManagerTargetFixed"];
const _c14 = ["actionsIconElement"];
const _c15 = ["actionsElement"];
function PoTableComponent_po_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_po_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-container", 16);
    i0.ɵɵtemplate(1, PoTableComponent_po_container_0_ng_container_1_Template, 1, 0, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵproperty("p-no-shadow", ctx_r0.container === "border");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function PoTableComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "po-loading", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-text", ctx_r27.literals.loadingData);
} }
function PoTableComponent_ng_template_1_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_1_div_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28, 29);
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_1_div_5_ng_container_3_Template, 1, 0, "ng-container", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 30, 31);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_1_div_5_ng_container_6_Template, 1, 0, "ng-container", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(5);
    const _r6 = i0.ɵɵreference(7);
    const _r8 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("height", ctx_r29.heightTableContainer, "px");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r29.height)("ngIfThen", _r6)("ngIfElse", _r8);
} }
function PoTableComponent_ng_template_1_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_1_div_6_ng_container_1_Template, 1, 0, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r8 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function PoTableComponent_ng_template_1_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "po-table-subtitle-footer", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r38 = ctx.$implicit;
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-literals", ctx_r37.literals)("p-subtitles", column_r38.subtitles);
} }
function PoTableComponent_ng_template_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_1_div_7_ng_container_1_Template, 2, 2, "ng-container", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r31.subtitleColumns)("ngForTrackBy", ctx_r31.trackBy);
} }
function PoTableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_1_div_1_Template, 2, 1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19)(3, "div", 20, 21);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_1_div_5_Template, 7, 6, "div", 22);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_1_div_6_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_1_div_7_Template, 2, 2, "div", 24);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-table-container-relative", ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("opacity", ctx_r2.tableOpacity);
    i0.ɵɵclassProp("po-table-header-fixed-columns-pixels", ctx_r2.allColumnsWidthPixels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.hasFooter);
} }
function PoTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36, 37)(2, "po-button", 38);
    i0.ɵɵlistener("p-click", function PoTableComponent_div_3_Template_po_button_p_click_2_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r40.onShowMore()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-invisible", ctx_r3.showMore.observers.length === 0 && !ctx_r3.hasService);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-disabled", ctx_r3.showMoreDisabled)("p-label", ctx_r3.literals.loadMoreData)("p-loading", ctx_r3.loadingShowMore);
} }
function PoTableComponent_ng_template_4_th_3_po_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-checkbox", 49);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_4_th_3_po_checkbox_2_Template_po_checkbox_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r51.selectAllRows()); })("p-change", function PoTableComponent_ng_template_4_th_3_po_checkbox_2_Template_po_checkbox_p_change_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r53 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r53.selectAllRows()); })("ngModelChange", function PoTableComponent_ng_template_4_th_3_po_checkbox_2_Template_po_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r54 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r54.selectAll = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r50.selectAll);
} }
function PoTableComponent_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 47)(1, "div");
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_4_th_3_po_checkbox_2_Template, 1, 1, "po-checkbox", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-header-fixed-inner", ctx_r42.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r42.hideSelectAll);
} }
function PoTableComponent_ng_template_4_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 50);
} }
function PoTableComponent_ng_template_4_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", null, 51);
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-table-header-master-detail", !ctx_r44.isSingleAction)("po-table-header-single-action", ctx_r44.isSingleAction);
} }
function PoTableComponent_ng_template_4_th_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_4_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 52, 53);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_4_th_6_ng_container_2_Template, 1, 0, "ng-container", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(2);
    const _r19 = i0.ɵɵreference(21);
    const _r21 = i0.ɵɵreference(23);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r45.height)("ngIfThen", _r19)("ngIfElse", _r21);
} }
function PoTableComponent_ng_template_4_th_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c16 = function (a0) { return { $implicit: a0 }; };
function PoTableComponent_ng_template_4_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 54);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_4_th_7_Template_th_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r62); const column_r58 = restoredCtx.$implicit; const ctx_r61 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r61.sortColumn(column_r58)); });
    i0.ɵɵelementStart(1, "div", 55);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_4_th_7_ng_container_2_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r58 = ctx.$implicit;
    const ctx_r46 = i0.ɵɵnextContext(2);
    const _r17 = i0.ɵɵreference(19);
    i0.ɵɵstyleProp("width", column_r58.width)("max-width", column_r58.width)("min-width", column_r58.width);
    i0.ɵɵclassProp("po-clickable", ctx_r46.sort && column_r58.sortable !== false || ctx_r46.hasService)("po-table-header-subtitle", column_r58.type === "subtitle");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-header-fixed-inner", ctx_r46.height)("po-table-header-flex-right", column_r58.type === "currency" || column_r58.type === "number")("po-table-header-flex-center", column_r58.type === "subtitle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction1(18, _c16, column_r58));
} }
function PoTableComponent_ng_template_4_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 50);
} }
function PoTableComponent_ng_template_4_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-table-header-single-action", ctx_r48.isSingleAction && !ctx_r48.hideColumnsManager)("po-table-header-actions", !ctx_r48.isSingleAction);
} }
function PoTableComponent_ng_template_4_th_10_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", null, 57)(2, "div")(3, "button", 58, 59);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_4_th_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r66); const ctx_r65 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r65.onOpenColumnManager()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r63 = i0.ɵɵreference(1);
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-table-header-column-manager", !ctx_r49.isSingleAction || !ctx_r49.actionRight)("po-table-header-column-manager-border", !ctx_r49.height && ctx_r49.container)("po-table-header-single-action", ctx_r49.isSingleAction && ctx_r49.actionRight);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r49.height && ctx_r49.visibleActions.length ? _r63.offsetWidth : undefined, "px");
    i0.ɵɵclassProp("po-table-header-column-manager-border", ctx_r49.height && ctx_r49.container)("po-table-header-column-manager-fixed-inner", ctx_r49.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-tooltip", ctx_r49.literals.columnsManager);
    i0.ɵɵattribute("aria-label", ctx_r49.literals.columnsManager);
} }
function PoTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 39)(1, "thead")(2, "tr");
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_4_th_3_Template, 3, 3, "th", 40);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_4_th_4_Template, 1, 0, "th", 41);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_4_th_5_Template, 2, 4, "th", 42);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_4_th_6_Template, 3, 3, "th", 43);
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_4_th_7_Template, 3, 20, "th", 44);
    i0.ɵɵtemplate(8, PoTableComponent_ng_template_4_th_8_Template, 1, 0, "th", 41);
    i0.ɵɵtemplate(9, PoTableComponent_ng_template_4_th_9_Template, 1, 4, "th", 45);
    i0.ɵɵtemplate(10, PoTableComponent_ng_template_4_th_10_Template, 5, 14, "th", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-table-striped", ctx_r5.striped)("po-table-layout-fixed", ctx_r5.hideTextOverflow);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("po-table-header", ctx_r5.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.hasSelectableColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r5.hasMasterDetailColumn || ctx_r5.hasRowTemplate) && !ctx_r5.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.actionRight && (ctx_r5.visibleActions.length > 1 || ctx_r5.isSingleAction));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.hasMainColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.mainColumns)("ngForTrackBy", ctx_r5.trackBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.hasRowTemplateWithArrowDirectionRight && (ctx_r5.hasVisibleActions || ctx_r5.hideColumnsManager));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.hasVisibleActions && ctx_r5.hideColumnsManager && ctx_r5.actionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.hasValidColumns && !ctx_r5.hideColumnsManager);
} }
function PoTableComponent_ng_template_6_tbody_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 63)(1, "tr", 64)(2, "td", 65)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("colSpan", ctx_r68.columnCount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r68.literals.noData, " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 47);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_2_ng_container_1_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r73 = i0.ɵɵnextContext(3);
    const _r13 = i0.ɵɵreference(15);
    const _r15 = i0.ɵɵreference(17);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r73.singleSelect ? _r13 : _r15)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c16, row_r71));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_3_ng_template_1_Template(rf, ctx) { }
const _c17 = function (a0, a1) { return { row: a0, rowIndex: a1 }; };
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 71);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_3_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r89); const row_r71 = i0.ɵɵnextContext().$implicit; const ctx_r87 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r87.toggleDetail(row_r71)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_3_ng_template_1_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const row_r71 = ctx_r90.$implicit;
    const rowIndex_r72 = ctx_r90.index;
    i0.ɵɵnextContext(3);
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r71, rowIndex_r72));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_4_ng_template_0_Template(rf, ctx) { }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoTableComponent_ng_template_6_ng_container_4_tbody_1_4_ng_template_0_Template, 0, 0, "ng-template", 72);
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext();
    const row_r71 = ctx_r92.$implicit;
    const rowIndex_r72 = ctx_r92.index;
    i0.ɵɵnextContext(3);
    const _r23 = i0.ɵɵreference(25);
    i0.ɵɵproperty("ngTemplateOutlet", _r23)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r71, rowIndex_r72));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_5_ng_template_1_Template(rf, ctx) { }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 71);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_5_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r96); const row_r71 = i0.ɵɵnextContext().$implicit; const ctx_r94 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r94.toggleDetail(row_r71)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_5_ng_template_1_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext();
    const row_r71 = ctx_r97.$implicit;
    const rowIndex_r72 = ctx_r97.index;
    i0.ɵɵnextContext(3);
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r71, rowIndex_r72));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_2_ng_container_1_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r100 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r100.getTemplate(column_r98))("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c16, ctx_r100.getCellData(row_r71, column_r98)));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c18 = function (a0, a1) { return { row: a0, column: a1 }; };
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_3_ng_container_1_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r101 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r101.tableCellTemplate == null ? null : ctx_r101.tableCellTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c18, row_r71, column_r98));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r102 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r102.getBooleanLabel(ctx_r102.getCellData(row_r71, column_r98), column_r98), " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r103 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, ctx_r103.getCellData(row_r71, column_r98), column_r98.format, "symbol", "1.2-2"), " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r104 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r104.getCellData(row_r71, column_r98), column_r98.format || "dd/MM/yyyy"), " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "po_time");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r105 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r105.getCellData(row_r71, column_r98), column_r98.format || "HH:mm:ss.ffffff"), " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r106 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r106.getCellData(row_r71, column_r98), column_r98.format || "dd/MM/yyyy HH:mm:ss"), " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r107 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r107.formatNumber(ctx_r107.getCellData(row_r71, column_r98), column_r98.format), " ");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_po_table_column_link_10_Template(rf, ctx) { if (rf & 1) {
    const _r133 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-table-column-link", 79);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_po_table_column_link_10_Template_po_table_column_link_click_0_listener($event) { i0.ɵɵrestoreView(_r133); const column_r98 = i0.ɵɵnextContext().$implicit; const row_r71 = i0.ɵɵnextContext().$implicit; const ctx_r131 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r131.onClickLink($event, row_r71, column_r98)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r108 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-action", column_r98.action)("p-disabled", ctx_r108.checkDisabled(row_r71, column_r98))("p-link", row_r71[column_r98.link])("p-row", row_r71)("p-value", ctx_r108.getCellData(row_r71, column_r98));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_po_table_column_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-table-column-icon", 80);
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r109 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-column", column_r98)("p-icons", ctx_r109.getColumnIcons(row_r71, column_r98))("p-row", row_r71);
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "po-table-subtitle-circle", 81);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r110 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-subtitle", ctx_r110.getSubtitleColumn(row_r71, column_r98));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "po-table-column-label", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r111 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-value", ctx_r111.getColumnLabel(row_r71, column_r98));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r98 = i0.ɵɵnextContext().$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r112 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r112.getCellData(row_r71, column_r98));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r146); const row_r71 = i0.ɵɵnextContext().$implicit; const ctx_r145 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r145.hasSelectableRow() ? ctx_r145.selectRow(row_r71) : "javascript:;"); });
    i0.ɵɵelementStart(1, "div", 74);
    i0.ɵɵlistener("mouseenter", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_Template_div_mouseenter_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r146); const column_r98 = restoredCtx.$implicit; const row_r71 = i0.ɵɵnextContext().$implicit; const ctx_r148 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r148.tooltipMouseEnter($event, column_r98, row_r71)); })("mouseleave", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r146); const ctx_r150 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r150.tooltipMouseLeave()); });
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_2_Template, 2, 4, "span", 75);
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_3_Template, 2, 5, "span", 75);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_4_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_5_Template, 3, 6, "span", 75);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_6_Template, 3, 4, "span", 75);
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_7_Template, 3, 4, "span", 75);
    i0.ɵɵtemplate(8, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_8_Template, 3, 4, "span", 75);
    i0.ɵɵtemplate(9, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_9_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(10, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_po_table_column_link_10_Template, 1, 5, "po-table-column-link", 76);
    i0.ɵɵtemplate(11, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_po_table_column_icon_11_Template, 1, 3, "po-table-column-icon", 77);
    i0.ɵɵtemplate(12, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_12_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(13, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_13_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(14, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_span_14_Template, 2, 1, "span", 78);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r98 = ctx.$implicit;
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r77 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", column_r98.width)("max-width", column_r98.width)("min-width", column_r98.width);
    i0.ɵɵclassProp("po-table-column", column_r98.type !== "icon")("po-table-column-right", column_r98.type === "currency" || column_r98.type === "number")("po-table-column-center", column_r98.type === "subtitle")("po-table-column-icons", column_r98.type === "icon");
    i0.ɵɵproperty("ngClass", ctx_r77.getClassColor(row_r71, column_r98));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r77.noColumnsHeaderFixed == null ? null : ctx_r77.noColumnsHeaderFixed.nativeElement.parentElement == null ? null : ctx_r77.noColumnsHeaderFixed.nativeElement.parentElement.offsetWidth, "px");
    i0.ɵɵclassProp("po-table-body-ellipsis", ctx_r77.hideTextOverflow);
    i0.ɵɵproperty("ngSwitch", column_r98.type)("p-tooltip", ctx_r77.tooltipText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "columnTemplate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "cellTemplate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "boolean");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "currency");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "time");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "dateTime");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "link");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "subtitle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "label");
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_7_ng_template_1_Template(rf, ctx) { }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 71);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_7_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r155); const row_r71 = i0.ɵɵnextContext().$implicit; const ctx_r153 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r153.toggleDetail(row_r71)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_7_ng_template_1_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r156 = i0.ɵɵnextContext();
    const row_r71 = ctx_r156.$implicit;
    const rowIndex_r72 = ctx_r156.index;
    i0.ɵɵnextContext(3);
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r71, rowIndex_r72));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_8_ng_template_0_Template(rf, ctx) { }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoTableComponent_ng_template_6_ng_container_4_tbody_1_8_ng_template_0_Template, 0, 0, "ng-template", 72);
} if (rf & 2) {
    const ctx_r158 = i0.ɵɵnextContext();
    const row_r71 = ctx_r158.$implicit;
    const rowIndex_r72 = ctx_r158.index;
    i0.ɵɵnextContext(3);
    const _r23 = i0.ɵɵreference(25);
    i0.ɵɵproperty("ngTemplateOutlet", _r23)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r71, rowIndex_r72));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "td", 83);
    i0.ɵɵelementContainerEnd();
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 84);
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_11_ng_template_2_Template(rf, ctx) { }
const _c19 = function (a0, a1) { return { $implicit: a0, rowIndex: a1 }; };
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 85);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_11_ng_template_2_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r160 = i0.ɵɵnextContext();
    const row_r71 = ctx_r160.$implicit;
    const rowIndex_r72 = ctx_r160.index;
    const ctx_r82 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", ctx_r82.columnCountForMasterDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r82.tableRowTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c19, row_r71, rowIndex_r72));
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 86)(2, "po-table-detail", 87);
    i0.ɵɵlistener("p-select-row", function PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_12_Template_po_table_detail_p_select_row_2_listener($event) { i0.ɵɵrestoreView(_r162); const ctx_r161 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r161.selectDetailRow($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r83 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", ctx_r83.columnCountForMasterDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-selectable", ctx_r83.selectable && !ctx_r83.detailHideSelect)("p-detail", ctx_r83.columnMasterDetail.detail)("p-items", row_r71[ctx_r83.nameColumnDetail]);
} }
function PoTableComponent_ng_template_6_ng_container_4_tbody_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 63)(1, "tr", 67);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_2_Template, 2, 4, "td", 40);
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_3_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_6_ng_container_4_tbody_1_4_Template, 1, 5, null, 23);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_5_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_6_Template, 15, 33, "td", 69);
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_7_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(8, PoTableComponent_ng_template_6_ng_container_4_tbody_1_8_Template, 1, 5, null, 23);
    i0.ɵɵtemplate(9, PoTableComponent_ng_template_6_ng_container_4_tbody_1_ng_container_9_Template, 2, 0, "ng-container", 23);
    i0.ɵɵtemplate(10, PoTableComponent_ng_template_6_ng_container_4_tbody_1_td_10_Template, 1, 0, "td", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_11_Template, 3, 6, "tr", 23);
    i0.ɵɵtemplate(12, PoTableComponent_ng_template_6_ng_container_4_tbody_1_tr_12_Template, 3, 4, "tr", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    const rowIndex_r72 = ctx.index;
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-row-active", row_r71.$selected || row_r71.$selected === null && ctx_r70.selectable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.selectable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.columnMasterDetail && !ctx_r70.hideDetail && !ctx_r70.hasRowTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r70.actionRight && (ctx_r70.visibleActions.length > 1 || ctx_r70.isSingleAction));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.hasRowTemplate && !ctx_r70.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r70.mainColumns)("ngForTrackBy", ctx_r70.trackBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.actionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r70.actionRight && (ctx_r70.visibleActions.length > 1 || ctx_r70.isSingleAction) && !ctx_r70.hideColumnsManager);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r70.hasVisibleActions && !ctx_r70.hideColumnsManager && !ctx_r70.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.hasMainColumns && ctx_r70.hasRowTemplate && row_r71.$showDetail && ctx_r70.isShowRowTemplate(row_r71, rowIndex_r72));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.hasMainColumns && ctx_r70.isShowMasterDetail(row_r71));
} }
function PoTableComponent_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_6_ng_container_4_tbody_1_Template, 13, 14, "tbody", 66);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkVirtualForOf", ctx_r69.items)("cdkVirtualForTrackBy", ctx_r69.trackBy);
} }
function PoTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 60, 61);
    i0.ɵɵlistener("scroll", function PoTableComponent_ng_template_6_Template_cdk_virtual_scroll_viewport_scroll_0_listener() { i0.ɵɵrestoreView(_r165); const ctx_r164 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r164.syncronizeHorizontalScroll()); });
    i0.ɵɵelementStart(2, "table", 39);
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_6_tbody_3_Template, 5, 2, "tbody", 62);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_6_ng_container_4_Template, 2, 2, "ng-container", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r7.heightTableVirtual, "px");
    i0.ɵɵproperty("itemSize", ctx_r7.itemSize)("minBufferPx", ctx_r7.heightTableVirtual < 100 ? 100 : ctx_r7.heightTableVirtual)("maxBufferPx", ctx_r7.heightTableVirtual < 200 ? 200 : ctx_r7.heightTableVirtual);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("po-table-striped", ctx_r7.striped)("po-table-layout-fixed", ctx_r7.hideTextOverflow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.hasItems || !ctx_r7.hasMainColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.hasMainColumns);
} }
function PoTableComponent_ng_template_8_th_3_po_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r178 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-checkbox", 49);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_th_3_po_checkbox_2_Template_po_checkbox_click_0_listener() { i0.ɵɵrestoreView(_r178); const ctx_r177 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r177.selectAllRows()); })("p-change", function PoTableComponent_ng_template_8_th_3_po_checkbox_2_Template_po_checkbox_p_change_0_listener() { i0.ɵɵrestoreView(_r178); const ctx_r179 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r179.selectAllRows()); })("ngModelChange", function PoTableComponent_ng_template_8_th_3_po_checkbox_2_Template_po_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r178); const ctx_r180 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r180.selectAll = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r176 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r176.selectAll);
} }
function PoTableComponent_ng_template_8_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 47)(1, "div");
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_8_th_3_po_checkbox_2_Template, 1, 1, "po-checkbox", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r166 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-header-fixed-inner", ctx_r166.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r166.hideSelectAll);
} }
function PoTableComponent_ng_template_8_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 50);
} }
function PoTableComponent_ng_template_8_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", null, 88);
} if (rf & 2) {
    const ctx_r168 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-table-header-master-detail", !ctx_r168.isSingleAction)("po-table-header-single-action", ctx_r168.isSingleAction);
} }
function PoTableComponent_ng_template_8_th_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_8_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 52, 89);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_8_th_6_ng_container_2_Template, 1, 0, "ng-container", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r169 = i0.ɵɵnextContext(2);
    const _r19 = i0.ɵɵreference(21);
    const _r21 = i0.ɵɵreference(23);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r169.height)("ngIfThen", _r19)("ngIfElse", _r21);
} }
function PoTableComponent_ng_template_8_th_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_8_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r188 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 54);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_th_7_Template_th_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r188); const column_r184 = restoredCtx.$implicit; const ctx_r187 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r187.sortColumn(column_r184)); });
    i0.ɵɵelementStart(1, "div", 55);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_8_th_7_ng_container_2_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r184 = ctx.$implicit;
    const ctx_r170 = i0.ɵɵnextContext(2);
    const _r17 = i0.ɵɵreference(19);
    i0.ɵɵstyleProp("width", column_r184.width)("max-width", column_r184.width)("min-width", column_r184.width);
    i0.ɵɵclassProp("po-clickable", ctx_r170.sort && column_r184.sortable !== false || ctx_r170.hasService)("po-table-header-subtitle", column_r184.type === "subtitle");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-header-fixed-inner", ctx_r170.height)("po-table-header-flex-right", column_r184.type === "currency" || column_r184.type === "number")("po-table-header-flex-center", column_r184.type === "subtitle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction1(18, _c16, column_r184));
} }
function PoTableComponent_ng_template_8_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 50);
} }
function PoTableComponent_ng_template_8_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} if (rf & 2) {
    const ctx_r172 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-table-header-single-action", ctx_r172.isSingleAction)("po-table-header-actions", !ctx_r172.isSingleAction);
} }
function PoTableComponent_ng_template_8_th_10_Template(rf, ctx) { if (rf & 1) {
    const _r192 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", null, 90)(2, "div")(3, "button", 58, 91);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_th_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r192); const ctx_r191 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r191.onOpenColumnManager()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r189 = i0.ɵɵreference(1);
    const ctx_r173 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-table-header-column-manager", !ctx_r173.isSingleAction || !ctx_r173.actionRight)("po-table-header-column-manager-border", !ctx_r173.height && ctx_r173.container)("po-table-header-single-action", ctx_r173.isSingleAction && ctx_r173.actionRight);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r173.height && ctx_r173.visibleActions.length ? _r189.offsetWidth : undefined, "px");
    i0.ɵɵclassProp("po-table-header-column-manager-border", ctx_r173.height && ctx_r173.container)("po-table-header-column-manager-fixed-inner", ctx_r173.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-tooltip", ctx_r173.literals.columnsManager);
    i0.ɵɵattribute("aria-label", ctx_r173.literals.columnsManager);
} }
function PoTableComponent_ng_template_8_tbody_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 63)(1, "tr", 64)(2, "td", 65)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r174 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("colSpan", ctx_r174.columnCount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r174.literals.noData, " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 47);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_2_ng_container_1_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r196 = i0.ɵɵnextContext(3);
    const _r13 = i0.ɵɵreference(15);
    const _r15 = i0.ɵɵreference(17);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r196.singleSelect ? _r13 : _r15)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c16, row_r194));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_3_ng_template_1_Template(rf, ctx) { }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r212 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 71);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_3_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r212); const row_r194 = i0.ɵɵnextContext().$implicit; const ctx_r210 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r210.toggleDetail(row_r194)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_3_ng_template_1_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r213 = i0.ɵɵnextContext();
    const row_r194 = ctx_r213.$implicit;
    const rowIndex_r195 = ctx_r213.index;
    i0.ɵɵnextContext(3);
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r194, rowIndex_r195));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_4_ng_template_0_Template(rf, ctx) { }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoTableComponent_ng_template_8_ng_container_12_tbody_1_4_ng_template_0_Template, 0, 0, "ng-template", 72);
} if (rf & 2) {
    const ctx_r215 = i0.ɵɵnextContext();
    const row_r194 = ctx_r215.$implicit;
    const rowIndex_r195 = ctx_r215.index;
    i0.ɵɵnextContext(3);
    const _r23 = i0.ɵɵreference(25);
    i0.ɵɵproperty("ngTemplateOutlet", _r23)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r194, rowIndex_r195));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_5_ng_template_1_Template(rf, ctx) { }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r219 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 71);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_5_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r219); const row_r194 = i0.ɵɵnextContext().$implicit; const ctx_r217 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r217.toggleDetail(row_r194)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_5_ng_template_1_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r220 = i0.ɵɵnextContext();
    const row_r194 = ctx_r220.$implicit;
    const rowIndex_r195 = ctx_r220.index;
    i0.ɵɵnextContext(3);
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r194, rowIndex_r195));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_2_ng_container_1_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r223 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r223.getTemplate(column_r221))("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c16, ctx_r223.getCellData(row_r194, column_r221)));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_3_ng_container_1_Template, 1, 0, "ng-container", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r224 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r224.tableCellTemplate == null ? null : ctx_r224.tableCellTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c18, row_r194, column_r221));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r225 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r225.getBooleanLabel(ctx_r225.getCellData(row_r194, column_r221), column_r221), " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r226 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, ctx_r226.getCellData(row_r194, column_r221), column_r221.format, "symbol", "1.2-2"), " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r227 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r227.getCellData(row_r194, column_r221), column_r221.format || "dd/MM/yyyy"), " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "po_time");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r228 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r228.getCellData(row_r194, column_r221), column_r221.format || "HH:mm:ss.ffffff"), " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r229 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r229.getCellData(row_r194, column_r221), column_r221.format || "dd/MM/yyyy HH:mm:ss"), " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r230 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r230.formatNumber(ctx_r230.getCellData(row_r194, column_r221), column_r221.format), " ");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_po_table_column_link_10_Template(rf, ctx) { if (rf & 1) {
    const _r256 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-table-column-link", 79);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_po_table_column_link_10_Template_po_table_column_link_click_0_listener($event) { i0.ɵɵrestoreView(_r256); const column_r221 = i0.ɵɵnextContext().$implicit; const row_r194 = i0.ɵɵnextContext().$implicit; const ctx_r254 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r254.onClickLink($event, row_r194, column_r221)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r231 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-action", column_r221.action)("p-disabled", ctx_r231.checkDisabled(row_r194, column_r221))("p-link", row_r194[column_r221.link])("p-row", row_r194)("p-value", ctx_r231.getCellData(row_r194, column_r221));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_po_table_column_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-table-column-icon", 80);
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r232 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-column", column_r221)("p-icons", ctx_r232.getColumnIcons(row_r194, column_r221))("p-row", row_r194);
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "po-table-subtitle-circle", 81);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r233 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-subtitle", ctx_r233.getSubtitleColumn(row_r194, column_r221));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "po-table-column-label", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r234 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-value", ctx_r234.getColumnLabel(row_r194, column_r221));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r221 = i0.ɵɵnextContext().$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r235 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r235.getCellData(row_r194, column_r221));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r269 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r269); const row_r194 = i0.ɵɵnextContext().$implicit; const ctx_r268 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r268.hasSelectableRow() ? ctx_r268.selectRow(row_r194) : "javascript:;"); });
    i0.ɵɵelementStart(1, "div", 74);
    i0.ɵɵlistener("mouseenter", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_Template_div_mouseenter_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r269); const column_r221 = restoredCtx.$implicit; const row_r194 = i0.ɵɵnextContext().$implicit; const ctx_r271 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r271.tooltipMouseEnter($event, column_r221, row_r194)); })("mouseleave", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r269); const ctx_r273 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r273.tooltipMouseLeave()); });
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_2_Template, 2, 4, "span", 75);
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_3_Template, 2, 5, "span", 75);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_4_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_5_Template, 3, 6, "span", 75);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_6_Template, 3, 4, "span", 75);
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_7_Template, 3, 4, "span", 75);
    i0.ɵɵtemplate(8, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_8_Template, 3, 4, "span", 75);
    i0.ɵɵtemplate(9, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_9_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(10, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_po_table_column_link_10_Template, 1, 5, "po-table-column-link", 76);
    i0.ɵɵtemplate(11, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_po_table_column_icon_11_Template, 1, 3, "po-table-column-icon", 77);
    i0.ɵɵtemplate(12, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_12_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(13, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_13_Template, 2, 1, "span", 75);
    i0.ɵɵtemplate(14, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_span_14_Template, 2, 1, "span", 78);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r221 = ctx.$implicit;
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r200 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", column_r221.width)("max-width", column_r221.width)("min-width", column_r221.width);
    i0.ɵɵclassProp("po-table-column", column_r221.type !== "icon")("po-table-column-right", column_r221.type === "currency" || column_r221.type === "number")("po-table-column-center", column_r221.type === "subtitle")("po-table-column-icons", column_r221.type === "icon");
    i0.ɵɵproperty("ngClass", ctx_r200.getClassColor(row_r194, column_r221));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-body-ellipsis", ctx_r200.hideTextOverflow);
    i0.ɵɵproperty("ngSwitch", column_r221.type)("p-tooltip", ctx_r200.tooltipText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "columnTemplate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "cellTemplate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "boolean");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "currency");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "time");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "dateTime");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "link");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "subtitle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "label");
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_7_ng_template_1_Template(rf, ctx) { }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r278 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 71);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_7_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r278); const row_r194 = i0.ɵɵnextContext().$implicit; const ctx_r276 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r276.toggleDetail(row_r194)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_7_ng_template_1_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r279 = i0.ɵɵnextContext();
    const row_r194 = ctx_r279.$implicit;
    const rowIndex_r195 = ctx_r279.index;
    i0.ɵɵnextContext(3);
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r194, rowIndex_r195));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_8_ng_template_0_Template(rf, ctx) { }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoTableComponent_ng_template_8_ng_container_12_tbody_1_8_ng_template_0_Template, 0, 0, "ng-template", 72);
} if (rf & 2) {
    const ctx_r281 = i0.ɵɵnextContext();
    const row_r194 = ctx_r281.$implicit;
    const rowIndex_r195 = ctx_r281.index;
    i0.ɵɵnextContext(3);
    const _r23 = i0.ɵɵreference(25);
    i0.ɵɵproperty("ngTemplateOutlet", _r23)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c17, row_r194, rowIndex_r195));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "td", 93);
    i0.ɵɵelementContainerEnd();
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 84);
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_11_ng_template_2_Template(rf, ctx) { }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 85);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_11_ng_template_2_Template, 0, 0, "ng-template", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r283 = i0.ɵɵnextContext();
    const row_r194 = ctx_r283.$implicit;
    const rowIndex_r195 = ctx_r283.index;
    const ctx_r205 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", ctx_r205.columnCountForMasterDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r205.tableRowTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c19, row_r194, rowIndex_r195));
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r285 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 86)(2, "po-table-detail", 87);
    i0.ɵɵlistener("p-select-row", function PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_12_Template_po_table_detail_p_select_row_2_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r284 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r284.selectDetailRow($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r206 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", ctx_r206.columnCountForMasterDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-selectable", ctx_r206.selectable && !ctx_r206.detailHideSelect)("p-detail", ctx_r206.columnMasterDetail.detail)("p-items", row_r194[ctx_r206.nameColumnDetail]);
} }
function PoTableComponent_ng_template_8_ng_container_12_tbody_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 63)(1, "tr", 67);
    i0.ɵɵtemplate(2, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_2_Template, 2, 4, "td", 40);
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_3_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_8_ng_container_12_tbody_1_4_Template, 1, 5, null, 23);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_5_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_6_Template, 15, 31, "td", 69);
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_7_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(8, PoTableComponent_ng_template_8_ng_container_12_tbody_1_8_Template, 1, 5, null, 23);
    i0.ɵɵtemplate(9, PoTableComponent_ng_template_8_ng_container_12_tbody_1_ng_container_9_Template, 2, 0, "ng-container", 23);
    i0.ɵɵtemplate(10, PoTableComponent_ng_template_8_ng_container_12_tbody_1_td_10_Template, 1, 0, "td", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_11_Template, 3, 6, "tr", 23);
    i0.ɵɵtemplate(12, PoTableComponent_ng_template_8_ng_container_12_tbody_1_tr_12_Template, 3, 4, "tr", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r194 = ctx.$implicit;
    const rowIndex_r195 = ctx.index;
    const ctx_r193 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-table-row-active", row_r194.$selected || row_r194.$selected === null && ctx_r193.selectable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.selectable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.columnMasterDetail && !ctx_r193.hideDetail && !ctx_r193.hasRowTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r193.actionRight && (ctx_r193.visibleActions.length > 1 || ctx_r193.isSingleAction));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.hasRowTemplate && !ctx_r193.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r193.mainColumns)("ngForTrackBy", ctx_r193.trackBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.actionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r193.actionRight && (ctx_r193.visibleActions.length > 1 || ctx_r193.isSingleAction) && !ctx_r193.hideColumnsManager);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r193.hasVisibleActions && !ctx_r193.hideColumnsManager && !ctx_r193.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.hasMainColumns && ctx_r193.hasRowTemplate && row_r194.$showDetail && ctx_r193.isShowRowTemplate(row_r194, rowIndex_r195));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.hasMainColumns && ctx_r193.isShowMasterDetail(row_r194));
} }
function PoTableComponent_ng_template_8_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_8_ng_container_12_tbody_1_Template, 13, 14, "tbody", 92);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r175 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r175.items)("ngForTrackBy", ctx_r175.trackBy);
} }
function PoTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 39)(1, "thead")(2, "tr");
    i0.ɵɵtemplate(3, PoTableComponent_ng_template_8_th_3_Template, 3, 3, "th", 40);
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_8_th_4_Template, 1, 0, "th", 41);
    i0.ɵɵtemplate(5, PoTableComponent_ng_template_8_th_5_Template, 2, 4, "th", 42);
    i0.ɵɵtemplate(6, PoTableComponent_ng_template_8_th_6_Template, 3, 3, "th", 43);
    i0.ɵɵtemplate(7, PoTableComponent_ng_template_8_th_7_Template, 3, 20, "th", 44);
    i0.ɵɵtemplate(8, PoTableComponent_ng_template_8_th_8_Template, 1, 0, "th", 41);
    i0.ɵɵtemplate(9, PoTableComponent_ng_template_8_th_9_Template, 1, 4, "th", 45);
    i0.ɵɵtemplate(10, PoTableComponent_ng_template_8_th_10_Template, 5, 14, "th", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, PoTableComponent_ng_template_8_tbody_11_Template, 5, 2, "tbody", 62);
    i0.ɵɵtemplate(12, PoTableComponent_ng_template_8_ng_container_12_Template, 2, 2, "ng-container", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-table-striped", ctx_r9.striped)("po-table-layout-fixed", ctx_r9.hideTextOverflow);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("po-table-header", !ctx_r9.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.hasSelectableColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r9.hasMasterDetailColumn || ctx_r9.hasRowTemplate) && !ctx_r9.hasRowTemplateWithArrowDirectionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.actionRight && (ctx_r9.visibleActions.length > 1 || ctx_r9.isSingleAction));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.hasMainColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.mainColumns)("ngForTrackBy", ctx_r9.trackBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.hasRowTemplateWithArrowDirectionRight && (ctx_r9.hasVisibleActions || ctx_r9.hideColumnsManager));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.hasVisibleActions && ctx_r9.hideColumnsManager && ctx_r9.actionRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.hasValidColumns && !ctx_r9.hideColumnsManager);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.hasItems || !ctx_r9.hasMainColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.hasMainColumns);
} }
function PoTableComponent_ng_template_12_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 95);
} if (rf & 2) {
    const row_r287 = i0.ɵɵnextContext().row;
    i0.ɵɵclassProp("po-icon-arrow-up", row_r287.$showDetail)("po-icon-arrow-down", !row_r287.$showDetail);
} }
function PoTableComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoTableComponent_ng_template_12_span_0_Template, 1, 4, "span", 94);
} if (rf & 2) {
    const row_r287 = ctx.row;
    const rowIndex_r288 = ctx.rowIndex;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r12.containsMasterDetail(row_r287) && !ctx_r12.hasRowTemplate || ctx_r12.isShowRowTemplate(row_r287, rowIndex_r288) && ctx_r12.hasRowTemplate);
} }
function PoTableComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r293 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "input", 96);
    i0.ɵɵelementStart(1, "label", 97);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_14_Template_label_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r293); const row_r291 = restoredCtx.$implicit; const ctx_r292 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r292.selectable ? ctx_r292.selectRow(row_r291) : "javascript:;"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r291 = ctx.$implicit;
    i0.ɵɵclassProp("po-table-radio-checked", row_r291.$selected);
} }
function PoTableComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r296 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-checkbox", 98);
    i0.ɵɵlistener("p-change", function PoTableComponent_ng_template_16_Template_po_checkbox_p_change_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r296); const row_r294 = restoredCtx.$implicit; const ctx_r295 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r295.selectable ? ctx_r295.selectRow(row_r294) : "javascript:;"); })("ngModelChange", function PoTableComponent_ng_template_16_Template_po_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r296); const row_r294 = restoredCtx.$implicit; return i0.ɵɵresetView(row_r294.$selected = $event); })("click", function PoTableComponent_ng_template_16_Template_po_checkbox_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r296); const row_r294 = restoredCtx.$implicit; const ctx_r298 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r298.selectable ? ctx_r298.selectRow(row_r294) : "javascript:;"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r294 = ctx.$implicit;
    i0.ɵɵproperty("ngModel", row_r294.$selected);
} }
function PoTableComponent_ng_template_18_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const column_r299 = i0.ɵɵnextContext().$implicit;
    const ctx_r301 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-table-header-icon-unselected", ctx_r301.JSON.stringify(ctx_r301.sortedColumn == null ? null : ctx_r301.sortedColumn.property) !== ctx_r301.JSON.stringify(column_r299))("po-table-header-icon-descending", ctx_r301.JSON.stringify(ctx_r301.sortedColumn == null ? null : ctx_r301.sortedColumn.property) === ctx_r301.JSON.stringify(column_r299) && ctx_r301.sortedColumn.ascending)("po-table-header-icon-ascending", ctx_r301.JSON.stringify(ctx_r301.sortedColumn == null ? null : ctx_r301.sortedColumn.property) === ctx_r301.JSON.stringify(column_r299) && !ctx_r301.sortedColumn.ascending);
} }
function PoTableComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r304 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 99, 100);
    i0.ɵɵlistener("mouseenter", function PoTableComponent_ng_template_18_Template_span_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r304); const ctx_r303 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r303.tooltipMouseEnter($event)); })("mouseleave", function PoTableComponent_ng_template_18_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r304); const ctx_r305 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r305.tooltipMouseLeave()); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PoTableComponent_ng_template_18_span_4_Template, 1, 6, "span", 101);
} if (rf & 2) {
    const column_r299 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-tooltip", ctx_r18.tooltipText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", column_r299.label || i0.ɵɵpipeBind1(3, 3, column_r299.property), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r18.sort && column_r299.sortable !== false);
} }
function PoTableComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r20.noColumnsHeader == null ? null : ctx_r20.noColumnsHeader.nativeElement.offsetWidth, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.hasValidColumns ? ctx_r20.literals.noVisibleColumn : ctx_r20.literals.noColumns, " ");
} }
function PoTableComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r22.hasValidColumns ? ctx_r22.literals.noVisibleColumn : ctx_r22.literals.noColumns, "\n");
} }
function PoTableComponent_ng_template_24_td_0_div_1_po_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-icon", 109);
} if (rf & 2) {
    const ctx_r311 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("p-icon", ctx_r311.firstAction.icon);
} }
function PoTableComponent_ng_template_24_td_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r314 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_24_td_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r314); const row_r306 = i0.ɵɵnextContext(2).row; const ctx_r312 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r312.executeTableAction(row_r306, ctx_r312.firstAction)); });
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_24_td_0_div_1_po_icon_1_Template, 1, 1, "po-icon", 108);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r306 = i0.ɵɵnextContext(2).row;
    const ctx_r310 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-table-action-disabled", ctx_r310.firstAction.disabled ? ctx_r310.validateTableAction(row_r306, ctx_r310.firstAction) : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r310.firstAction.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r310.firstAction.label, " ");
} }
function PoTableComponent_ng_template_24_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 105);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_24_td_0_div_1_Template, 3, 4, "div", 106);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r308 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r308.height && ctx_r308.actionRight ? ctx_r308.getWidthColumnManager() : "", "px")("max-width", ctx_r308.height && !ctx_r308.actionRight ? ctx_r308.getColumnWidthActionsLeft() : "", "px")("width", ctx_r308.height && !ctx_r308.actionRight ? ctx_r308.getColumnWidthActionsLeft() : "", "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r308.firstAction.visible !== false);
} }
function PoTableComponent_ng_template_24_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r319 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 110)(1, "span", 111, 112);
    i0.ɵɵlistener("click", function PoTableComponent_ng_template_24_td_1_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r319); const _r316 = i0.ɵɵreference(2); const row_r306 = i0.ɵɵnextContext().row; const ctx_r317 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r317.togglePopup(row_r306, _r316)); });
    i0.ɵɵelementEnd()();
} }
function PoTableComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoTableComponent_ng_template_24_td_0_Template, 2, 7, "td", 103);
    i0.ɵɵtemplate(1, PoTableComponent_ng_template_24_td_1_Template, 3, 0, "td", 104);
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r24.isSingleAction);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.visibleActions.length > 1);
} }
function PoTableComponent_po_table_column_manager_26_Template(rf, ctx) { if (rf & 1) {
    const _r321 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-table-column-manager", 113);
    i0.ɵɵlistener("p-visible-columns-change", function PoTableComponent_po_table_column_manager_26_Template_po_table_column_manager_p_visible_columns_change_0_listener($event) { i0.ɵɵrestoreView(_r321); const ctx_r320 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r320.onVisibleColumnsChange($event)); })("p-change-visible-columns", function PoTableComponent_po_table_column_manager_26_Template_po_table_column_manager_p_change_visible_columns_0_listener($event) { i0.ɵɵrestoreView(_r321); const ctx_r322 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r322.onChangeVisibleColumns($event)); })("p-initial-columns", function PoTableComponent_po_table_column_manager_26_Template_po_table_column_manager_p_initial_columns_0_listener($event) { i0.ɵɵrestoreView(_r321); const ctx_r323 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r323.onColumnRestoreManager($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-columns", ctx_r25.columns)("p-max-columns", ctx_r25.maxColumns)("p-target", ctx_r25.height ? ctx_r25.columnManagerTargetFixed : ctx_r25.columnManagerTarget)("p-last-visible-columns-selected", ctx_r25.lastVisibleColumnsSelected)("p-columns-default", ctx_r25.initialColumns);
} }
/**
 * @docsExtends PoTableBaseComponent
 *
 * @example
 *
 * <example name="po-table-basic" title="PO Table Basic">
 *  <file name="sample-po-table-basic/sample-po-table-basic.component.ts"> </file>
 *  <file name="sample-po-table-basic/sample-po-table-basic.component.html"> </file>
 * </example>
 *
 * <example name="po-table-labs" title="PO Table Labs">
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.ts"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.html"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.component.po.ts"> </file>
 *  <file name="sample-po-table-labs/sample-po-table-labs.service.ts"> </file>
 * </example>
 *
 * <example name="po-table-with-api" title="PO Table using API">
 *  <file name="sample-po-table-with-api/sample-po-table-with-api.component.ts"> </file>
 *  <file name="sample-po-table-with-api/sample-po-table-with-api.component.html"> </file>
 * </example>
 *
 * <example name="po-table-transport" title="PO Table - Transport">
 *  <file name="sample-po-table-transport/sample-po-table-transport.component.ts"> </file>
 *  <file name="sample-po-table-transport/sample-po-table-transport.component.html"> </file>
 *  <file name="sample-po-table-transport/sample-po-table-transport.service.ts"> </file>
 * </example>
 *
 * <example name="po-table-airfare" title="PO Table - Airfare">
 *  <file name="sample-po-table-airfare/sample-po-table-airfare.component.ts"> </file>
 *  <file name="sample-po-table-airfare/sample-po-table-airfare.component.html"> </file>
 *  <file name="sample-po-table-airfare/sample-po-table-airfare.service.ts"> </file>
 * </example>
 *
 * <example name="po-table-components" title="PO Table - Po Field Components">
 *  <file name="sample-po-table-components/sample-po-table-components.component.ts"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.enum.ts"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.component.html"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.service.ts"> </file>
 *  <file name="sample-po-table-components/sample-po-table-components.component.css"> </file>
 * </example>
 *
 */
export class PoTableComponent extends PoTableBaseComponent {
    constructor(poDate, differs, renderer, poLanguageService, changeDetector, decimalPipe, router, defaultService) {
        super(poDate, poLanguageService, defaultService);
        this.changeDetector = changeDetector;
        this.decimalPipe = decimalPipe;
        this.router = router;
        this.defaultService = defaultService;
        this.tableOpacity = 0;
        this.itemSize = 32;
        this.initialized = false;
        this.visibleElement = false;
        this.JSON = JSON;
        this.differ = differs.find([]).create(null);
        // TODO: #5550 ao remover este listener, no portal, quando as colunas forem fixas não sofrem
        // alteração de largura, pois o ngDoCheck não é executado.
        this.clickListener = renderer.listen('document', 'click', () => { });
        this.resizeListener = renderer.listen('window', 'resize', (event) => {
            this.debounceResize();
        });
    }
    set columnManagerTarget(value) {
        this._columnManagerTarget = value;
        this.changeDetector.detectChanges();
    }
    get columnManagerTarget() {
        return this._columnManagerTarget;
    }
    set columnManagerTargetFixed(value) {
        this._columnManagerTargetFixed = value;
        this.changeDetector.detectChanges();
    }
    get columnManagerTargetFixed() {
        return this._columnManagerTargetFixed;
    }
    get hasRowTemplateWithArrowDirectionRight() {
        return this.tableRowTemplate?.tableRowTemplateArrowDirection === PoTableRowTemplateArrowDirection.Right;
    }
    get columnCount() {
        const columnCount = this.mainColumns.length +
            (this.actions.length > 0 ? 1 : 0) +
            (this.selectable ? 1 : 0) +
            (!this.hideDetail && this.columnMasterDetail !== undefined ? 1 : 0);
        return columnCount || 1;
    }
    get columnCountForMasterDetail() {
        // caso tiver ações será utilizado a sua coluna para exibir o columnManager
        const columnManager = this.actions.length ? 0 : 1;
        return this.mainColumns.length + 1 + (this.actions.length > 0 ? 1 : 0) + (this.selectable ? 1 : 0) + columnManager;
    }
    get detailHideSelect() {
        const masterDetail = this.columnMasterDetail;
        return masterDetail && masterDetail.detail ? masterDetail.detail.hideSelect : false;
    }
    get hasVisibleActions() {
        return !!this.visibleActions.length;
    }
    get firstAction() {
        return this.visibleActions && this.visibleActions[0];
    }
    get hasFooter() {
        return this.hasItems && this.hasVisibleSubtitleColumns;
    }
    get hasMasterDetailColumn() {
        return (this.hasMainColumns && this.hasItems && !this.hideDetail && !!(this.columnMasterDetail || this.hasRowTemplate));
    }
    get hasRowTemplate() {
        return !!this.tableRowTemplate;
    }
    get hasSelectableColumn() {
        return this.selectable && this.hasItems && this.hasMainColumns;
    }
    get hasValidColumns() {
        return !!this.validColumns.length;
    }
    get hasVisibleSubtitleColumns() {
        return this.subtitleColumns.some(column => column.visible !== false);
    }
    get isSingleAction() {
        return this.visibleActions.length === 1;
    }
    get visibleActions() {
        return this.actions && this.actions.filter(action => action && action.visible !== false);
    }
    ngAfterViewInit() {
        this.initialized = true;
    }
    showMoreInfiniteScroll({ target }) {
        const scrollPosition = target.offsetHeight + target.scrollTop;
        if (!this.showMoreDisabled && scrollPosition >= target.scrollHeight * (this.infiniteScrollDistance / 110)) {
            this.onShowMore();
        }
    }
    ngDoCheck() {
        this.checkChangesItems();
        this.verifyCalculateHeightTableContainer();
        // Permite que os cabeçalhos sejam calculados na primeira vez que o componente torna-se visível,
        // evitando com isso, problemas com Tabs ou Divs que iniciem escondidas.
        if (this.tableWrapperElement?.nativeElement.offsetWidth && !this.visibleElement && this.initialized) {
            this.debounceResize();
            this.checkInfiniteScroll();
            this.visibleElement = true;
        }
        this.itemSize = document.body.offsetWidth > 1366 ? 44 : 32;
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    /**
     * Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.
     *
     * Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:
     * ```
     * url + ?page=1&pageSize=10
     * ```
     * > Obs: os parâmetros `page` e `pageSize` sempre serão chamados independente de ser enviados outros parâmetros.
     *
     * Caso sejam informados os parâmetros `{ name: 'JOHN', age: '23' }`, todos serão adicionados ao GET, conforme abaixo:
     * ```
     * url + ?page=1&pageSize=10&name=JOHN&age=23
     * ```
     *
     * @param { { key: value } } queryParams Formato do objeto a ser enviado.
     * > Pode ser utilizada qualquer string como key, e qualquer string ou number como value.
     */
    applyFilters(queryParams) {
        this.page = 1;
        this.initializeData(queryParams);
    }
    /**
     * Método que colapsa uma linha com detalhe quando executada.
     *
     * @param { number } rowIndex Índice da linha que será colapsada.
     * > Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.
     */
    collapse(rowIndex) {
        this.setShowDetail(rowIndex, false);
    }
    /**
     * Método que expande uma linha com detalhe quando executada.
     *
     * @param { number } rowIndex Índice da linha que será expandida.
     * > Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.
     */
    expand(rowIndex) {
        this.setShowDetail(rowIndex, true);
    }
    /**
     * Retorna as linhas do `po-table` que estão selecionadas.
     */
    getSelectedRows() {
        return this.items.filter(item => item.$selected);
    }
    /**
     * Retorna as linhas do `po-table` que não estão selecionadas.
     */
    getUnselectedRows() {
        return this.items.filter(item => !item.$selected);
    }
    /**
     * Desmarca as linhas que estão selecionadas.
     */
    unselectRows() {
        const columnDetail = this.nameColumnDetail;
        this.items.forEach(item => {
            const detailItems = columnDetail ? item[columnDetail] : null;
            if (Array.isArray(detailItems)) {
                detailItems.forEach(detailItem => {
                    detailItem.$selected = false;
                });
            }
            item.$selected = false;
        });
        this.selectAll = false;
    }
    checkDisabled(row, column) {
        return column.disabled ? column.disabled(row) : false;
    }
    containsMasterDetail(row) {
        return row[this.nameColumnDetail] && row[this.nameColumnDetail].length;
    }
    executeTableAction(row, tableAction) {
        if (!row.disabled && !this.validateTableAction(row, tableAction)) {
            tableAction.action(row);
            this.toggleRowAction(row);
        }
    }
    /**
     * Desmarca uma linha que está selecionada.
     */
    unselectRowItem(itemfn) {
        this.toggleSelect(itemfn, false);
        if (this.items.every(item => !item.$selected)) {
            this.selectAll = false;
        }
        else {
            this.selectAll = null;
        }
    }
    /**
     * Seleciona uma linha do 'po-table'.
     */
    selectRowItem(itemfn) {
        this.toggleSelect(itemfn, true);
        if (this.items.every(item => item.$selected)) {
            this.selectAll = true;
        }
        else {
            this.selectAll = null;
        }
    }
    formatNumber(value, format) {
        if (!format) {
            return value;
        }
        return this.decimalPipe.transform(value, format);
    }
    getCellData(row, column) {
        const arrayProperty = column.property.split('.');
        if (arrayProperty.length > 1) {
            const nestedProperties = arrayProperty;
            let value = row;
            for (const property of nestedProperties) {
                value = value[property] || value[property] === 0 ? value[property] : '';
            }
            return value;
        }
        else {
            return row[column.property];
        }
    }
    getBooleanLabel(rowValue, columnBoolean) {
        if (rowValue || rowValue === false || rowValue === 0) {
            rowValue = convertToBoolean(rowValue);
            if (columnBoolean.boolean) {
                return rowValue ? columnBoolean.boolean.trueLabel || 'Sim' : columnBoolean.boolean.falseLabel || 'Não';
            }
            else {
                return rowValue ? 'Sim' : 'Não';
            }
        }
        return rowValue;
    }
    getColumnIcons(row, column) {
        const rowIcons = this.getCellData(row, column);
        if (column.icons) {
            if (Array.isArray(rowIcons)) {
                return this.mergeCustomIcons(rowIcons, column.icons);
            }
            else {
                return this.findCustomIcon(rowIcons, column);
            }
        }
        return rowIcons;
    }
    getColumnLabel(row, columnLabel) {
        return columnLabel.labels.find(labelItem => this.getCellData(row, columnLabel) === labelItem.value);
    }
    getSubtitleColumn(row, subtitleColumn) {
        return subtitleColumn.subtitles.find(subtitleItem => this.getCellData(row, subtitleColumn) === subtitleItem.value);
    }
    isShowMasterDetail(row) {
        return (!this.hideDetail &&
            this.nameColumnDetail &&
            row.$showDetail &&
            this.containsMasterDetail(row) &&
            !this.hasRowTemplate);
    }
    isShowRowTemplate(row, index) {
        if (this.tableRowTemplate && this.tableRowTemplate.poTableRowTemplateShow) {
            return this.tableRowTemplate.poTableRowTemplateShow(row, index);
        }
        return true;
    }
    onClickLink(event, row, column) {
        if (!this.checkDisabled(row, column)) {
            event.stopPropagation();
        }
    }
    onChangeVisibleColumns(columns) {
        this.changeVisibleColumns.emit(columns);
    }
    onColumnRestoreManager(value) {
        this.columnRestoreManager.emit(value);
    }
    onVisibleColumnsChange(columns) {
        this.columns = columns;
        this.changeDetector.detectChanges();
    }
    tooltipMouseEnter(event, column, row) {
        this.tooltipText = undefined;
        if (this.hideTextOverflow && event.target.offsetWidth < event.target.scrollWidth && event.target.innerText.trim()) {
            return (this.tooltipText = event.target.innerText);
        }
        if (column) {
            this.checkingIfColumnHasTooltip(column, row);
        }
    }
    tooltipMouseLeave() {
        this.tooltipText = undefined;
    }
    togglePopup(row, targetRef) {
        this.popupTarget = targetRef;
        this.changeDetector.detectChanges();
        this.poPopupComponent.toggle(row);
    }
    trackBy(index) {
        return index;
    }
    validateTableAction(row, tableAction) {
        if (typeof tableAction.disabled === 'function') {
            return tableAction.disabled(row);
        }
        else {
            return tableAction.disabled;
        }
    }
    onOpenColumnManager() {
        this.lastVisibleColumnsSelected = [...this.columns];
    }
    /**
     * Método que remove um item da tabela.
     *
     * @param { number | { key: value } } item Índice da linha ou o item que será removido.
     * > Ao remover o item, a linha que o representa será excluída da tabela.
     */
    removeItem(item) {
        if (item instanceof Object) {
            this.items = this.items.filter(filterItem => filterItem !== item);
        }
        else if (typeof item === 'number') {
            const index = item;
            this.items.splice(index, 1);
        }
    }
    /**
     * Método que atualiza um item da tabela.
     *
     * @param { number | { key: value } } item Índice da linha ou o item que será atualizado.
     * @param { { key: value } } updatedItem Item que foi atualizado.
     * > Ao atualizar o item, a informação será alterada na tabela.
     */
    updateItem(item, updatedItem) {
        if (typeof item === 'number') {
            this.items.splice(item, 1, updatedItem);
        }
        else {
            const index = this.items.findIndex(indexItem => indexItem === item);
            this.items.splice(index, 1, updatedItem);
        }
    }
    getTemplate(column) {
        const template = this.tableColumnTemplates.find(tableColumnTemplate => tableColumnTemplate.targetProperty === column.property);
        if (!template) {
            console.warn(`Não foi possível encontrar o template para a coluna: ${column.property}, por gentileza informe a propriedade [p-property]`);
            return null;
        }
        return template.templateRef;
    }
    syncronizeHorizontalScroll() {
        this.poTableThead.nativeElement.scrollLeft = this.poTableTbodyVirtual.nativeElement.scrollLeft;
    }
    getWidthColumnManager() {
        return this.height
            ? this.columnManagerFixed?.nativeElement.offsetWidth
            : this.columnManager?.nativeElement.offsetWidth;
    }
    getColumnWidthActionsLeft() {
        return this.height
            ? this.columnActionLeftFixed?.nativeElement.offsetWidth
            : this.columnActionLeft?.nativeElement.offsetWidth;
    }
    calculateHeightTableContainer(height) {
        const value = parseFloat(height);
        this.heightTableContainer = value ? value - this.getHeightTableFooter() : undefined;
        this.heightTableVirtual = this.heightTableContainer
            ? this.heightTableContainer - this.getHeightTableHeader()
            : undefined;
        this.setTableOpacity(1);
        this.changeDetector.detectChanges();
    }
    checkInfiniteScroll() {
        if (this.hasInfiniteScroll()) {
            if (this.poTableTbodyVirtual.nativeElement.scrollHeight >= this.height) {
                this.includeInfiniteScroll();
            }
            else {
                this.infiniteScroll = false;
            }
        }
        this.changeDetector.detectChanges();
    }
    checkChangesItems() {
        const changesItems = this.differ.diff(this.items);
        if (changesItems && this.selectAll) {
            this.selectAll = null;
        }
        if (changesItems && !this.hasColumns && this.hasItems) {
            this.columns = this.getDefaultColumns(this.items[0]);
        }
    }
    checkingIfColumnHasTooltip(column, row) {
        if (column.type === 'link' && column.tooltip && !this.checkDisabled(row, column)) {
            return (this.tooltipText = column.tooltip);
        }
        if (column.type === 'label') {
            const columnLabel = this.getColumnLabel(row, column);
            return (this.tooltipText = columnLabel?.tooltip);
        }
    }
    debounceResize() {
        clearTimeout(this.timeoutResize);
        this.timeoutResize = setTimeout(() => {
            // show the table
            this.setTableOpacity(1);
        });
    }
    findCustomIcon(rowIcons, column) {
        const customIcon = column.icons.find(icon => rowIcons === icon.value);
        return customIcon ? [customIcon] : undefined;
    }
    getHeightTableFooter() {
        return this.tableFooterElement ? this.tableFooterElement.nativeElement.offsetHeight : 0;
    }
    getHeightTableHeader() {
        return this.poTableThead?.nativeElement?.offsetHeight
            ? this.poTableThead.nativeElement.offsetHeight
            : this.itemSize;
    }
    hasInfiniteScroll() {
        return (this.infiniteScroll &&
            this.hasItems &&
            !this.subscriptionScrollEvent &&
            this.height &&
            this.poTableTbodyVirtual.nativeElement.scrollHeight);
    }
    includeInfiniteScroll() {
        this.scrollEvent$ = this.defaultService.scrollListener(this.poTableTbodyVirtual.nativeElement);
        this.subscriptionScrollEvent = this.scrollEvent$.subscribe(event => this.showMoreInfiniteScroll(event));
        this.changeDetector.detectChanges();
    }
    mergeCustomIcons(rowIcons, customIcons) {
        const mergedIcons = [];
        rowIcons.forEach(columnValue => {
            const foundCustomIcon = customIcons.find(customIcon => columnValue === customIcon.icon || columnValue === customIcon.value);
            foundCustomIcon ? mergedIcons.push(foundCustomIcon) : mergedIcons.push(columnValue);
        });
        return mergedIcons;
    }
    removeListeners() {
        if (this.resizeListener) {
            this.resizeListener();
        }
        if (this.clickListener) {
            this.clickListener();
        }
        if (this.subscriptionScrollEvent) {
            this.subscriptionScrollEvent.unsubscribe();
        }
    }
    setTableOpacity(value) {
        this.tableOpacity = value;
    }
    verifyChangeHeightInFooter() {
        return this.footerHeight !== this.getHeightTableFooter();
    }
    verifyChangeHeightInHeader() {
        return this.headerHeight !== this.getHeightTableHeader();
    }
    verifyCalculateHeightTableContainer() {
        if (this.height && this.verifyChangeHeightInFooter()) {
            this.footerHeight = this.getHeightTableFooter();
            if (this.verifyChangeHeightInHeader()) {
                this.headerHeight = this.getHeightTableHeader();
            }
            this.calculateHeightTableContainer(this.height);
        }
    }
    toggleSelect(compare, selectValue) {
        if (typeof compare !== 'function') {
            this.items.forEach(item => {
                if (item === compare) {
                    item.$selected = selectValue;
                }
            });
        }
        else {
            this.items.forEach(item => {
                if (compare(item)) {
                    item.$selected = selectValue;
                }
            });
        }
    }
}
PoTableComponent.ɵfac = function PoTableComponent_Factory(t) { return new (t || PoTableComponent)(i0.ɵɵdirectiveInject(i1.PoDateService), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.PoLanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.DecimalPipe), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.PoTableService)); };
PoTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableComponent, selectors: [["po-table"]], contentQueries: function PoTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoTableRowTemplateDirective, 7);
        i0.ɵɵcontentQuery(dirIndex, PoTableCellTemplateDirective, 5);
        i0.ɵɵcontentQuery(dirIndex, PoTableColumnTemplateDirective, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableRowTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableCellTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableColumnTemplates = _t);
    } }, viewQuery: function PoTableComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
        i0.ɵɵviewQuery(_c1, 5, ElementRef);
        i0.ɵɵviewQuery(_c2, 5);
        i0.ɵɵviewQuery(_c3, 5, ElementRef);
        i0.ɵɵviewQuery(_c4, 5, ElementRef);
        i0.ɵɵviewQuery(_c5, 5, ElementRef);
        i0.ɵɵviewQuery(_c6, 5, ElementRef);
        i0.ɵɵviewQuery(_c7, 5, ElementRef);
        i0.ɵɵviewQuery(_c8, 5, ElementRef);
        i0.ɵɵviewQuery(_c9, 5, ElementRef);
        i0.ɵɵviewQuery(_c10, 5, ElementRef);
        i0.ɵɵviewQuery(_c11, 5, ElementRef);
        i0.ɵɵviewQuery(_c12, 5);
        i0.ɵɵviewQuery(_c13, 5);
        i0.ɵɵviewQuery(_c14, 5, ElementRef);
        i0.ɵɵviewQuery(_c15, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noColumnsHeader = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noColumnsHeaderFixed = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPopupComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableFooterElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableWrapperElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poTableTbody = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poTableThead = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poTableTbodyVirtual = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnManager = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnManagerFixed = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnActionLeft = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnActionLeftFixed = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnManagerTarget = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnManagerTargetFixed = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsIconElement = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsElement = _t);
    } }, features: [i0.ɵɵProvidersFeature([PoDateService]), i0.ɵɵInheritDefinitionFeature], decls: 27, vars: 6, consts: [["p-no-padding", "", 3, "p-no-shadow", 4, "ngIf", "ngIfElse"], ["tableContainerTemplate", ""], ["class", "po-row po-table-footer-show-more", 3, "po-invisible", 4, "ngIf"], ["tableHeaderTemplate", ""], ["tableBodyTemplate", ""], ["tableTemplate", ""], [3, "p-actions", "p-target"], ["popup", ""], ["poTableColumnDetail", ""], ["inputRadio", ""], ["inputCheckbox", ""], ["contentHeaderTemplate", ""], ["noColumnsWithHeight", ""], ["noColumnsWithoutHeight", ""], ["ActionsColumnTemplate", ""], [3, "p-columns", "p-max-columns", "p-target", "p-last-visible-columns-selected", "p-columns-default", "p-visible-columns-change", "p-change-visible-columns", "p-initial-columns", 4, "ngIf"], ["p-no-padding", "", 3, "p-no-shadow"], [4, "ngTemplateOutlet"], ["class", "po-table-overlay", 4, "ngIf"], [1, "po-table-main-container"], [1, "po-table-wrapper"], ["tableWrapper", ""], ["class", "po-table-container", 3, "height", 4, "ngIf"], [4, "ngIf"], ["class", "po-table-footer", 4, "ngIf"], [1, "po-table-overlay"], [1, "po-table-overlay-content", 3, "p-text"], [1, "po-table-container"], [1, "po-table-header-fixed", "po-table-header"], ["poTableThead", ""], [1, "po-table-container-fixed-inner"], ["poTableTbody", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "po-table-footer"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "p-literals", "p-subtitles"], [1, "po-row", "po-table-footer-show-more"], ["tableFooter", ""], [1, "po-offset-xl-4", "po-offset-lg-4", "po-offset-md-3", "po-lg-4", "po-md-6", 3, "p-disabled", "p-label", "p-loading", "p-click"], [1, "po-table"], ["class", "po-table-column-selectable", 4, "ngIf"], ["class", "po-table-header-column po-table-header-master-detail", 4, "ngIf"], [3, "po-table-header-master-detail", "po-table-header-single-action", 4, "ngIf"], ["class", "po-table-header-column po-text-center", 4, "ngIf"], ["class", "po-table-header-ellipsis", 3, "width", "max-width", "min-width", "po-clickable", "po-table-header-subtitle", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "po-table-header-single-action", "po-table-header-actions", 4, "ngIf"], [3, "po-table-header-column-manager", "po-table-header-column-manager-border", "po-table-header-single-action", 4, "ngIf"], [1, "po-table-column-selectable"], ["name", "selectAll", 3, "ngModel", "click", "p-change", "ngModelChange", 4, "ngIf"], ["name", "selectAll", 3, "ngModel", "click", "p-change", "ngModelChange"], [1, "po-table-header-column", "po-table-header-master-detail"], ["columnActionLeftFixed", ""], [1, "po-table-header-column", "po-text-center"], ["noColumnsHeaderFixed", ""], [1, "po-table-header-ellipsis", 3, "click"], [1, "po-table-header-flex"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["columnManagerFixed", ""], ["type", "button", "p-tooltip-position", "left", 1, "po-table-header-column-manager-button", "po-icon", "po-icon-settings", "po-clickable", 3, "p-tooltip", "click"], ["columnManagerTargetFixed", ""], [3, "itemSize", "minBufferPx", "maxBufferPx", "scroll"], ["poTableTbodyVirtual", ""], ["class", "po-table-group-row", 4, "ngIf"], [1, "po-table-group-row"], [1, "po-table-row", "po-table-row-no-data"], [1, "po-table-no-data", "po-text-center", 3, "colSpan"], ["class", "po-table-group-row", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "po-table-row"], ["class", "po-table-column-detail-toggle", 3, "click", 4, "ngIf"], [3, "width", "max-width", "min-width", "po-table-column", "po-table-column-right", "po-table-column-center", "po-table-column-icons", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "po-table-column", 4, "ngIf"], [1, "po-table-column-detail-toggle", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", "click"], [1, "po-table-column-cell", "notranslate", 3, "ngSwitch", "p-tooltip", "mouseenter", "mouseleave"], [4, "ngSwitchCase"], [3, "p-action", "p-disabled", "p-link", "p-row", "p-value", "click", 4, "ngSwitchCase"], [3, "p-column", "p-icons", "p-row", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "p-action", "p-disabled", "p-link", "p-row", "p-value", "click"], [3, "p-column", "p-icons", "p-row"], [3, "p-subtitle"], [3, "p-value"], [1, "po-table-column", "po-table-column-empty"], [1, "po-table-column"], [1, "po-table-row-template-container", 3, "colSpan"], [1, "po-table-column-detail", 3, "colSpan"], [3, "p-selectable", "p-detail", "p-items", "p-select-row"], ["columnActionLeft", ""], ["noColumnsHeader", ""], ["columnManager", ""], ["columnManagerTarget", ""], ["class", "po-table-group-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "po-table-row-no-data", "po-table-column-empty"], ["class", "po-icon po-clickable", 3, "po-icon-arrow-up", "po-icon-arrow-down", 4, "ngIf"], [1, "po-icon", "po-clickable"], ["type", "radio", 1, "po-table-radio"], [1, "po-table-radio-label", "po-clickable", 3, "click"], ["name", "checkbox", 3, "ngModel", "p-change", "ngModelChange", "click"], [1, "po-table-header-ellipsis", 3, "p-tooltip", "mouseenter", "mouseleave"], ["columnHeader", ""], [3, "po-table-header-icon-unselected", "po-table-header-icon-descending", "po-table-header-icon-ascending", 4, "ngIf"], [1, "po-table-header-fixed-inner"], ["class", "po-table-column po-table-column-single-action", 3, "width", "max-width", 4, "ngIf"], ["class", "po-table-column-actions", 4, "ngIf"], [1, "po-table-column", "po-table-column-single-action"], ["class", "po-table-single-action po-clickable", 3, "po-table-action-disabled", "click", 4, "ngIf"], [1, "po-table-single-action", "po-clickable", 3, "click"], ["class", "po-table-single-action-content", 3, "p-icon", 4, "ngIf"], [1, "po-table-single-action-content", 3, "p-icon"], [1, "po-table-column-actions"], [1, "po-icon", "po-icon-more", "po-clickable", 3, "click"], ["popupTarget", ""], [3, "p-columns", "p-max-columns", "p-target", "p-last-visible-columns-selected", "p-columns-default", "p-visible-columns-change", "p-change-visible-columns", "p-initial-columns"]], template: function PoTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoTableComponent_po_container_0_Template, 2, 2, "po-container", 0);
        i0.ɵɵtemplate(1, PoTableComponent_ng_template_1_Template, 8, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoTableComponent_div_3_Template, 3, 5, "div", 2);
        i0.ɵɵtemplate(4, PoTableComponent_ng_template_4_Template, 11, 15, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, PoTableComponent_ng_template_6_Template, 5, 11, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, PoTableComponent_ng_template_8_Template, 13, 17, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelement(10, "po-popup", 6, 7);
        i0.ɵɵtemplate(12, PoTableComponent_ng_template_12_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, PoTableComponent_ng_template_14_Template, 2, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, PoTableComponent_ng_template_16_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, PoTableComponent_ng_template_18_Template, 5, 5, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, PoTableComponent_ng_template_20_Template, 2, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(22, PoTableComponent_ng_template_22_Template, 1, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(24, PoTableComponent_ng_template_24_Template, 2, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(26, PoTableComponent_po_table_column_manager_26_Template, 1, 5, "po-table-column-manager", 15);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.container)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.infiniteScroll);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("p-actions", ctx.actions)("p-target", ctx.popupTarget);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("ngIf", !ctx.hideColumnsManager);
    } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i6.NgControlStatus, i6.NgModel, i7.CdkFixedSizeVirtualScroll, i7.CdkVirtualForOf, i7.CdkVirtualScrollViewport, i8.PoButtonComponent, i9.PoContainerComponent, i10.PoLoadingComponent, i11.PoPopupComponent, i12.PoTooltipDirective, i13.PoIconComponent, i14.PoCheckboxComponent, i15.PoTableColumnIconComponent, i16.PoTableColumnLabelComponent, i17.PoTableColumnLinkComponent, i18.PoTableColumnManagerComponent, i19.PoTableDetailComponent, i20.PoTableSubtitleCircleComponent, i21.PoTableSubtitleFooterComponent, i3.TitleCasePipe, i3.CurrencyPipe, i3.DatePipe, i22.PoTimePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableComponent, [{
        type: Component,
        args: [{ selector: 'po-table', providers: [PoDateService], template: "<po-container *ngIf=\"container; else tableContainerTemplate\" p-no-padding [p-no-shadow]=\"container === 'border'\">\r\n  <ng-container *ngTemplateOutlet=\"tableContainerTemplate\"></ng-container>\r\n</po-container>\r\n\r\n<ng-template #tableContainerTemplate>\r\n  <div [class.po-table-container-relative]=\"loading\">\r\n    <div *ngIf=\"loading\" class=\"po-table-overlay\">\r\n      <po-loading class=\"po-table-overlay-content\" [p-text]=\"literals.loadingData\"></po-loading>\r\n    </div>\r\n\r\n    <div class=\"po-table-main-container\">\r\n      <div\r\n        #tableWrapper\r\n        class=\"po-table-wrapper\"\r\n        [class.po-table-header-fixed-columns-pixels]=\"allColumnsWidthPixels\"\r\n        [style.opacity]=\"tableOpacity\"\r\n      >\r\n        <div *ngIf=\"height\" class=\"po-table-container\" [style.height.px]=\"heightTableContainer\">\r\n          <div #poTableThead class=\"po-table-header-fixed po-table-header\">\r\n            <ng-container *ngTemplateOutlet=\"tableHeaderTemplate\"></ng-container>\r\n          </div>\r\n\r\n          <div #poTableTbody class=\"po-table-container-fixed-inner\">\r\n            <ng-container *ngIf=\"height; then tableBodyTemplate; else tableTemplate\"></ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!height\">\r\n          <ng-container *ngTemplateOutlet=\"tableTemplate\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"po-table-footer\" *ngIf=\"hasFooter\">\r\n    <ng-container *ngFor=\"let column of subtitleColumns; trackBy: trackBy\">\r\n      <po-table-subtitle-footer [p-literals]=\"literals\" [p-subtitles]=\"column.subtitles\"> </po-table-subtitle-footer>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<div\r\n  *ngIf=\"!infiniteScroll\"\r\n  class=\"po-row po-table-footer-show-more\"\r\n  [class.po-invisible]=\"showMore.observers.length === 0 && !hasService\"\r\n  #tableFooter\r\n>\r\n  <po-button\r\n    class=\"po-offset-xl-4 po-offset-lg-4 po-offset-md-3 po-lg-4 po-md-6\"\r\n    [p-disabled]=\"showMoreDisabled\"\r\n    [p-label]=\"literals.loadMoreData\"\r\n    [p-loading]=\"loadingShowMore\"\r\n    (p-click)=\"onShowMore()\"\r\n  >\r\n  </po-button>\r\n</div>\r\n\r\n<ng-template #tableHeaderTemplate>\r\n  <table class=\"po-table\" [class.po-table-striped]=\"striped\" [class.po-table-layout-fixed]=\"hideTextOverflow\">\r\n    <thead>\r\n      <tr [class.po-table-header]=\"height\">\r\n        <th *ngIf=\"hasSelectableColumn\" class=\"po-table-column-selectable\">\r\n          <div [class.po-table-header-fixed-inner]=\"height\">\r\n            <po-checkbox\r\n              name=\"selectAll\"\r\n              *ngIf=\"!hideSelectAll\"\r\n              (click)=\"selectAllRows()\"\r\n              (p-change)=\"selectAllRows()\"\r\n              [(ngModel)]=\"selectAll\"\r\n            ></po-checkbox>\r\n          </div>\r\n        </th>\r\n\r\n        <th\r\n          *ngIf=\"(hasMasterDetailColumn || hasRowTemplate) && !hasRowTemplateWithArrowDirectionRight\"\r\n          class=\"po-table-header-column po-table-header-master-detail\"\r\n        ></th>\r\n\r\n        <!-- Coluna criada para caso as a\u00E7\u00F5es fiquem no lado esquerdo -->\r\n        <th\r\n          #columnActionLeftFixed\r\n          *ngIf=\"!actionRight && (visibleActions.length > 1 || isSingleAction)\"\r\n          [class.po-table-header-master-detail]=\"!isSingleAction\"\r\n          [class.po-table-header-single-action]=\"isSingleAction\"\r\n        ></th>\r\n\r\n        <th *ngIf=\"!hasMainColumns\" #noColumnsHeaderFixed class=\"po-table-header-column po-text-center\">\r\n          <ng-container *ngIf=\"height; then noColumnsWithHeight; else noColumnsWithoutHeight\"> </ng-container>\r\n        </th>\r\n\r\n        <th\r\n          *ngFor=\"let column of mainColumns; let i = index; trackBy: trackBy\"\r\n          class=\"po-table-header-ellipsis\"\r\n          [style.width]=\"column.width\"\r\n          [style.max-width]=\"column.width\"\r\n          [style.min-width]=\"column.width\"\r\n          [class.po-clickable]=\"(sort && column.sortable !== false) || hasService\"\r\n          [class.po-table-header-subtitle]=\"column.type === 'subtitle'\"\r\n          (click)=\"sortColumn(column)\"\r\n        >\r\n          <div\r\n            class=\"po-table-header-flex\"\r\n            [class.po-table-header-fixed-inner]=\"height\"\r\n            [class.po-table-header-flex-right]=\"column.type === 'currency' || column.type === 'number'\"\r\n            [class.po-table-header-flex-center]=\"column.type === 'subtitle'\"\r\n          >\r\n            <ng-container *ngTemplateOutlet=\"contentHeaderTemplate; context: { $implicit: column }\"> </ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <th\r\n          *ngIf=\"hasRowTemplateWithArrowDirectionRight && (hasVisibleActions || hideColumnsManager)\"\r\n          class=\"po-table-header-column po-table-header-master-detail\"\r\n        ></th>\r\n\r\n        <th\r\n          *ngIf=\"hasVisibleActions && hideColumnsManager && actionRight\"\r\n          [class.po-table-header-single-action]=\"isSingleAction && !hideColumnsManager\"\r\n          [class.po-table-header-actions]=\"!isSingleAction\"\r\n        ></th>\r\n\r\n        <th\r\n          #columnManagerFixed\r\n          *ngIf=\"hasValidColumns && !hideColumnsManager\"\r\n          [class.po-table-header-column-manager]=\"!isSingleAction || !actionRight\"\r\n          [class.po-table-header-column-manager-border]=\"!height && container\"\r\n          [class.po-table-header-single-action]=\"isSingleAction && actionRight\"\r\n        >\r\n          <div\r\n            [class.po-table-header-column-manager-border]=\"height && container\"\r\n            [class.po-table-header-column-manager-fixed-inner]=\"height\"\r\n            [style.width.px]=\"height && visibleActions.length ? columnManagerFixed.offsetWidth : undefined\"\r\n          >\r\n            <button\r\n              #columnManagerTargetFixed\r\n              type=\"button\"\r\n              [attr.aria-label]=\"literals.columnsManager\"\r\n              class=\"po-table-header-column-manager-button po-icon po-icon-settings po-clickable\"\r\n              p-tooltip-position=\"left\"\r\n              [p-tooltip]=\"literals.columnsManager\"\r\n              (click)=\"onOpenColumnManager()\"\r\n            ></button>\r\n          </div>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n  </table>\r\n</ng-template>\r\n\r\n<!-- s\u00F3 virtual -->\r\n<ng-template #tableBodyTemplate>\r\n  <cdk-virtual-scroll-viewport\r\n    #poTableTbodyVirtual\r\n    [itemSize]=\"itemSize\"\r\n    [style.height.px]=\"heightTableVirtual\"\r\n    [minBufferPx]=\"heightTableVirtual < 100 ? 100 : heightTableVirtual\"\r\n    [maxBufferPx]=\"heightTableVirtual < 200 ? 200 : heightTableVirtual\"\r\n    (scroll)=\"syncronizeHorizontalScroll()\"\r\n  >\r\n    <table class=\"po-table\" [class.po-table-striped]=\"striped\" [class.po-table-layout-fixed]=\"hideTextOverflow\">\r\n      <tbody class=\"po-table-group-row\" *ngIf=\"!hasItems || !hasMainColumns\">\r\n        <tr class=\"po-table-row po-table-row-no-data\">\r\n          <td [colSpan]=\"columnCount\" class=\"po-table-no-data po-text-center\">\r\n            <span> {{ literals.noData }} </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <ng-container *ngIf=\"hasMainColumns\">\r\n        <tbody class=\"po-table-group-row\" *cdkVirtualFor=\"let row of items; let rowIndex = index; trackBy: trackBy\">\r\n          <tr\r\n            class=\"po-table-row\"\r\n            [class.po-table-row-active]=\"row.$selected || (row.$selected === null && selectable)\"\r\n          >\r\n            <td *ngIf=\"selectable\" class=\"po-table-column-selectable\">\r\n              <ng-container *ngTemplateOutlet=\"singleSelect ? inputRadio : inputCheckbox; context: { $implicit: row }\">\r\n              </ng-container>\r\n            </td>\r\n\r\n            <!-- Valida se a origem do detail \u00E9 pelo input do po-table -->\r\n            <td\r\n              *ngIf=\"columnMasterDetail && !hideDetail && !hasRowTemplate\"\r\n              class=\"po-table-column-detail-toggle\"\r\n              (click)=\"toggleDetail(row)\"\r\n            >\r\n              <ng-template\r\n                [ngTemplateOutlet]=\"poTableColumnDetail\"\r\n                [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n              >\r\n              </ng-template>\r\n            </td>\r\n\r\n            <!-- Coluna com as a\u00E7\u00F5es na esquerda (padr\u00E3o)-->\r\n            <ng-template\r\n              *ngIf=\"!actionRight && (visibleActions.length > 1 || isSingleAction)\"\r\n              [ngTemplateOutlet]=\"ActionsColumnTemplate\"\r\n              [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n            >\r\n            </ng-template>\r\n\r\n            <!-- Valida se a origem do detail \u00E9 pela diretiva -->\r\n            <td\r\n              *ngIf=\"hasRowTemplate && !hasRowTemplateWithArrowDirectionRight\"\r\n              class=\"po-table-column-detail-toggle\"\r\n              (click)=\"toggleDetail(row)\"\r\n            >\r\n              <ng-template\r\n                [ngTemplateOutlet]=\"poTableColumnDetail\"\r\n                [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n              >\r\n              </ng-template>\r\n            </td>\r\n\r\n            <td\r\n              *ngFor=\"let column of mainColumns; let columnIndex = index; trackBy: trackBy\"\r\n              [style.width]=\"column.width\"\r\n              [style.max-width]=\"column.width\"\r\n              [style.min-width]=\"column.width\"\r\n              [class.po-table-column]=\"column.type !== 'icon'\"\r\n              [class.po-table-column-right]=\"column.type === 'currency' || column.type === 'number'\"\r\n              [class.po-table-column-center]=\"column.type === 'subtitle'\"\r\n              [class.po-table-column-icons]=\"column.type === 'icon'\"\r\n              [ngClass]=\"getClassColor(row, column)\"\r\n              (click)=\"hasSelectableRow() ? selectRow(row) : 'javascript:;'\"\r\n            >\r\n              <div\r\n                class=\"po-table-column-cell notranslate\"\r\n                [class.po-table-body-ellipsis]=\"hideTextOverflow\"\r\n                [ngSwitch]=\"column.type\"\r\n                [p-tooltip]=\"tooltipText\"\r\n                [style.width.px]=\"noColumnsHeaderFixed?.nativeElement.parentElement?.offsetWidth\"\r\n                (mouseenter)=\"tooltipMouseEnter($event, column, row)\"\r\n                (mouseleave)=\"tooltipMouseLeave()\"\r\n              >\r\n                <span *ngSwitchCase=\"'columnTemplate'\">\r\n                  <ng-container\r\n                    *ngTemplateOutlet=\"getTemplate(column); context: { $implicit: getCellData(row, column) }\"\r\n                  >\r\n                  </ng-container>\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'cellTemplate'\">\r\n                  <ng-container\r\n                    *ngTemplateOutlet=\"tableCellTemplate?.templateRef; context: { row: row, column: column }\"\r\n                  >\r\n                  </ng-container>\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'boolean'\">\r\n                  {{ getBooleanLabel(getCellData(row, column), column) }}\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'currency'\">\r\n                  {{ getCellData(row, column) | currency: column.format:'symbol':'1.2-2' }}\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'date'\">\r\n                  {{ getCellData(row, column) | date: column.format || 'dd/MM/yyyy' }}\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'time'\">\r\n                  {{ getCellData(row, column) | po_time: column.format || 'HH:mm:ss.ffffff' }}\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'dateTime'\">\r\n                  {{ getCellData(row, column) | date: column.format || 'dd/MM/yyyy HH:mm:ss' }}\r\n                </span>\r\n\r\n                <span *ngSwitchCase=\"'number'\">\r\n                  {{ formatNumber(getCellData(row, column), column.format) }}\r\n                </span>\r\n\r\n                <po-table-column-link\r\n                  *ngSwitchCase=\"'link'\"\r\n                  [p-action]=\"column.action\"\r\n                  [p-disabled]=\"checkDisabled(row, column)\"\r\n                  [p-link]=\"row[column.link]\"\r\n                  [p-row]=\"row\"\r\n                  [p-value]=\"getCellData(row, column)\"\r\n                  (click)=\"onClickLink($event, row, column)\"\r\n                >\r\n                </po-table-column-link>\r\n\r\n                <po-table-column-icon\r\n                  *ngSwitchCase=\"'icon'\"\r\n                  [p-column]=\"column\"\r\n                  [p-icons]=\"getColumnIcons(row, column)\"\r\n                  [p-row]=\"row\"\r\n                >\r\n                </po-table-column-icon>\r\n\r\n                <span *ngSwitchCase=\"'subtitle'\">\r\n                  <po-table-subtitle-circle [p-subtitle]=\"getSubtitleColumn(row, column)\"></po-table-subtitle-circle>\r\n                </span>\r\n                <span *ngSwitchCase=\"'label'\">\r\n                  <po-table-column-label [p-value]=\"getColumnLabel(row, column)\"> </po-table-column-label>\r\n                </span>\r\n                <span *ngSwitchDefault>{{ getCellData(row, column) }}</span>\r\n              </div>\r\n            </td>\r\n\r\n            <td\r\n              *ngIf=\"hasRowTemplateWithArrowDirectionRight\"\r\n              class=\"po-table-column-detail-toggle\"\r\n              (click)=\"toggleDetail(row)\"\r\n            >\r\n              <ng-template\r\n                [ngTemplateOutlet]=\"poTableColumnDetail\"\r\n                [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n              >\r\n              </ng-template>\r\n            </td>\r\n\r\n            <!-- Coluna de a\u00E7oes na direita -->\r\n            <ng-template\r\n              *ngIf=\"actionRight\"\r\n              [ngTemplateOutlet]=\"ActionsColumnTemplate\"\r\n              [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n            >\r\n            </ng-template>\r\n\r\n            <!-- Coluna para n\u00E3o ficar em branco nas linhas de gerenciamento -->\r\n            <ng-container *ngIf=\"!actionRight && (visibleActions.length > 1 || isSingleAction) && !hideColumnsManager\">\r\n              <td class=\"po-table-column po-table-column-empty\"></td>\r\n            </ng-container>\r\n\r\n            <!-- Column Manager -->\r\n            <td\r\n              *ngIf=\"!hasVisibleActions && !hideColumnsManager && !hasRowTemplateWithArrowDirectionRight\"\r\n              class=\"po-table-column\"\r\n            ></td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"hasMainColumns && hasRowTemplate && row.$showDetail && isShowRowTemplate(row, rowIndex)\">\r\n            <td class=\"po-table-row-template-container\" [colSpan]=\"columnCountForMasterDetail\">\r\n              <ng-template\r\n                [ngTemplateOutlet]=\"tableRowTemplate.templateRef\"\r\n                [ngTemplateOutletContext]=\"{ $implicit: row, rowIndex: rowIndex }\"\r\n              >\r\n              </ng-template>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"hasMainColumns && isShowMasterDetail(row)\">\r\n            <td class=\"po-table-column-detail\" [colSpan]=\"columnCountForMasterDetail\">\r\n              <po-table-detail\r\n                [p-selectable]=\"selectable && !detailHideSelect\"\r\n                [p-detail]=\"columnMasterDetail.detail\"\r\n                [p-items]=\"row[nameColumnDetail]\"\r\n                (p-select-row)=\"selectDetailRow($event)\"\r\n              >\r\n              </po-table-detail>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </ng-container>\r\n    </table>\r\n  </cdk-virtual-scroll-viewport>\r\n</ng-template>\r\n\r\n<ng-template #tableTemplate>\r\n  <table class=\"po-table\" [class.po-table-striped]=\"striped\" [class.po-table-layout-fixed]=\"hideTextOverflow\">\r\n    <thead>\r\n      <tr [class.po-table-header]=\"!height\">\r\n        <th *ngIf=\"hasSelectableColumn\" class=\"po-table-column-selectable\">\r\n          <div [class.po-table-header-fixed-inner]=\"height\">\r\n            <po-checkbox\r\n              name=\"selectAll\"\r\n              *ngIf=\"!hideSelectAll\"\r\n              (click)=\"selectAllRows()\"\r\n              (p-change)=\"selectAllRows()\"\r\n              [(ngModel)]=\"selectAll\"\r\n            ></po-checkbox>\r\n          </div>\r\n        </th>\r\n\r\n        <th\r\n          *ngIf=\"(hasMasterDetailColumn || hasRowTemplate) && !hasRowTemplateWithArrowDirectionRight\"\r\n          class=\"po-table-header-column po-table-header-master-detail\"\r\n        ></th>\r\n\r\n        <!-- Coluna criada para caso as a\u00E7\u00F5es fiquem no lado esquerdo -->\r\n        <th\r\n          #columnActionLeft\r\n          *ngIf=\"!actionRight && (visibleActions.length > 1 || isSingleAction)\"\r\n          [class.po-table-header-master-detail]=\"!isSingleAction\"\r\n          [class.po-table-header-single-action]=\"isSingleAction\"\r\n        ></th>\r\n\r\n        <th *ngIf=\"!hasMainColumns\" #noColumnsHeader class=\"po-table-header-column po-text-center\">\r\n          <ng-container *ngIf=\"height; then noColumnsWithHeight; else noColumnsWithoutHeight\"> </ng-container>\r\n        </th>\r\n\r\n        <th\r\n          *ngFor=\"let column of mainColumns; let i = index; trackBy: trackBy\"\r\n          class=\"po-table-header-ellipsis\"\r\n          [style.width]=\"column.width\"\r\n          [style.max-width]=\"column.width\"\r\n          [style.min-width]=\"column.width\"\r\n          [class.po-clickable]=\"(sort && column.sortable !== false) || hasService\"\r\n          [class.po-table-header-subtitle]=\"column.type === 'subtitle'\"\r\n          (click)=\"sortColumn(column)\"\r\n        >\r\n          <div\r\n            class=\"po-table-header-flex\"\r\n            [class.po-table-header-fixed-inner]=\"height\"\r\n            [class.po-table-header-flex-right]=\"column.type === 'currency' || column.type === 'number'\"\r\n            [class.po-table-header-flex-center]=\"column.type === 'subtitle'\"\r\n          >\r\n            <ng-container *ngTemplateOutlet=\"contentHeaderTemplate; context: { $implicit: column }\"> </ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <th\r\n          *ngIf=\"hasRowTemplateWithArrowDirectionRight && (hasVisibleActions || hideColumnsManager)\"\r\n          class=\"po-table-header-column po-table-header-master-detail\"\r\n        ></th>\r\n\r\n        <th\r\n          *ngIf=\"hasVisibleActions && hideColumnsManager && actionRight\"\r\n          [class.po-table-header-single-action]=\"isSingleAction\"\r\n          [class.po-table-header-actions]=\"!isSingleAction\"\r\n        ></th>\r\n\r\n        <th\r\n          #columnManager\r\n          *ngIf=\"hasValidColumns && !hideColumnsManager\"\r\n          [class.po-table-header-column-manager]=\"!isSingleAction || !actionRight\"\r\n          [class.po-table-header-column-manager-border]=\"!height && container\"\r\n          [class.po-table-header-single-action]=\"isSingleAction && actionRight\"\r\n        >\r\n          <div\r\n            [class.po-table-header-column-manager-border]=\"height && container\"\r\n            [class.po-table-header-column-manager-fixed-inner]=\"height\"\r\n            [style.width.px]=\"height && visibleActions.length ? columnManager.offsetWidth : undefined\"\r\n          >\r\n            <button\r\n              #columnManagerTarget\r\n              type=\"button\"\r\n              [attr.aria-label]=\"literals.columnsManager\"\r\n              class=\"po-table-header-column-manager-button po-icon po-icon-settings po-clickable\"\r\n              p-tooltip-position=\"left\"\r\n              [p-tooltip]=\"literals.columnsManager\"\r\n              (click)=\"onOpenColumnManager()\"\r\n            ></button>\r\n          </div>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody class=\"po-table-group-row\" *ngIf=\"!hasItems || !hasMainColumns\">\r\n      <tr class=\"po-table-row po-table-row-no-data\">\r\n        <td [colSpan]=\"columnCount\" class=\"po-table-no-data po-text-center\">\r\n          <span> {{ literals.noData }} </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n    <ng-container *ngIf=\"hasMainColumns\">\r\n      <tbody class=\"po-table-group-row\" *ngFor=\"let row of items; let rowIndex = index; trackBy: trackBy\">\r\n        <tr class=\"po-table-row\" [class.po-table-row-active]=\"row.$selected || (row.$selected === null && selectable)\">\r\n          <td *ngIf=\"selectable\" class=\"po-table-column-selectable\">\r\n            <ng-container *ngTemplateOutlet=\"singleSelect ? inputRadio : inputCheckbox; context: { $implicit: row }\">\r\n            </ng-container>\r\n          </td>\r\n\r\n          <!-- Valida se a origem do detail \u00E9 pelo input do po-table -->\r\n          <td\r\n            *ngIf=\"columnMasterDetail && !hideDetail && !hasRowTemplate\"\r\n            class=\"po-table-column-detail-toggle\"\r\n            (click)=\"toggleDetail(row)\"\r\n          >\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"poTableColumnDetail\"\r\n              [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n            >\r\n            </ng-template>\r\n          </td>\r\n\r\n          <!-- Coluna com as a\u00E7\u00F5es na esquerda (padr\u00E3o)-->\r\n          <ng-template\r\n            *ngIf=\"!actionRight && (visibleActions.length > 1 || isSingleAction)\"\r\n            [ngTemplateOutlet]=\"ActionsColumnTemplate\"\r\n            [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n          >\r\n          </ng-template>\r\n\r\n          <!-- Valida se a origem do detail \u00E9 pela diretiva -->\r\n          <td\r\n            *ngIf=\"hasRowTemplate && !hasRowTemplateWithArrowDirectionRight\"\r\n            class=\"po-table-column-detail-toggle\"\r\n            (click)=\"toggleDetail(row)\"\r\n          >\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"poTableColumnDetail\"\r\n              [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n            >\r\n            </ng-template>\r\n          </td>\r\n\r\n          <td\r\n            *ngFor=\"let column of mainColumns; let columnIndex = index; trackBy: trackBy\"\r\n            [style.width]=\"column.width\"\r\n            [style.max-width]=\"column.width\"\r\n            [style.min-width]=\"column.width\"\r\n            [class.po-table-column]=\"column.type !== 'icon'\"\r\n            [class.po-table-column-right]=\"column.type === 'currency' || column.type === 'number'\"\r\n            [class.po-table-column-center]=\"column.type === 'subtitle'\"\r\n            [class.po-table-column-icons]=\"column.type === 'icon'\"\r\n            [ngClass]=\"getClassColor(row, column)\"\r\n            (click)=\"hasSelectableRow() ? selectRow(row) : 'javascript:;'\"\r\n          >\r\n            <div\r\n              class=\"po-table-column-cell notranslate\"\r\n              [class.po-table-body-ellipsis]=\"hideTextOverflow\"\r\n              [ngSwitch]=\"column.type\"\r\n              [p-tooltip]=\"tooltipText\"\r\n              (mouseenter)=\"tooltipMouseEnter($event, column, row)\"\r\n              (mouseleave)=\"tooltipMouseLeave()\"\r\n            >\r\n              <span *ngSwitchCase=\"'columnTemplate'\">\r\n                <ng-container *ngTemplateOutlet=\"getTemplate(column); context: { $implicit: getCellData(row, column) }\">\r\n                </ng-container>\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'cellTemplate'\">\r\n                <ng-container *ngTemplateOutlet=\"tableCellTemplate?.templateRef; context: { row: row, column: column }\">\r\n                </ng-container>\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'boolean'\">\r\n                {{ getBooleanLabel(getCellData(row, column), column) }}\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'currency'\">\r\n                {{ getCellData(row, column) | currency: column.format:'symbol':'1.2-2' }}\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'date'\">\r\n                {{ getCellData(row, column) | date: column.format || 'dd/MM/yyyy' }}\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'time'\">\r\n                {{ getCellData(row, column) | po_time: column.format || 'HH:mm:ss.ffffff' }}\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'dateTime'\">\r\n                {{ getCellData(row, column) | date: column.format || 'dd/MM/yyyy HH:mm:ss' }}\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'number'\">\r\n                {{ formatNumber(getCellData(row, column), column.format) }}\r\n              </span>\r\n\r\n              <po-table-column-link\r\n                *ngSwitchCase=\"'link'\"\r\n                [p-action]=\"column.action\"\r\n                [p-disabled]=\"checkDisabled(row, column)\"\r\n                [p-link]=\"row[column.link]\"\r\n                [p-row]=\"row\"\r\n                [p-value]=\"getCellData(row, column)\"\r\n                (click)=\"onClickLink($event, row, column)\"\r\n              >\r\n              </po-table-column-link>\r\n\r\n              <po-table-column-icon\r\n                *ngSwitchCase=\"'icon'\"\r\n                [p-column]=\"column\"\r\n                [p-icons]=\"getColumnIcons(row, column)\"\r\n                [p-row]=\"row\"\r\n              >\r\n              </po-table-column-icon>\r\n\r\n              <span *ngSwitchCase=\"'subtitle'\">\r\n                <po-table-subtitle-circle [p-subtitle]=\"getSubtitleColumn(row, column)\"></po-table-subtitle-circle>\r\n              </span>\r\n              <span *ngSwitchCase=\"'label'\">\r\n                <po-table-column-label [p-value]=\"getColumnLabel(row, column)\"> </po-table-column-label>\r\n              </span>\r\n              <span *ngSwitchDefault>{{ getCellData(row, column) }}</span>\r\n            </div>\r\n          </td>\r\n\r\n          <td\r\n            *ngIf=\"hasRowTemplateWithArrowDirectionRight\"\r\n            class=\"po-table-column-detail-toggle\"\r\n            (click)=\"toggleDetail(row)\"\r\n          >\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"poTableColumnDetail\"\r\n              [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n            >\r\n            </ng-template>\r\n          </td>\r\n\r\n          <!-- Coluna de a\u00E7oes na direita -->\r\n          <ng-template\r\n            *ngIf=\"actionRight\"\r\n            [ngTemplateOutlet]=\"ActionsColumnTemplate\"\r\n            [ngTemplateOutletContext]=\"{ row: row, rowIndex: rowIndex }\"\r\n          >\r\n          </ng-template>\r\n\r\n          <!-- Coluna para n\u00E3o ficar em branco nas linhas de gerenciamento -->\r\n          <ng-container *ngIf=\"!actionRight && (visibleActions.length > 1 || isSingleAction) && !hideColumnsManager\">\r\n            <td class=\"po-table-row-no-data po-table-column-empty\"></td>\r\n          </ng-container>\r\n\r\n          <!-- Column Manager -->\r\n          <td\r\n            *ngIf=\"!hasVisibleActions && !hideColumnsManager && !hasRowTemplateWithArrowDirectionRight\"\r\n            class=\"po-table-column\"\r\n          ></td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"hasMainColumns && hasRowTemplate && row.$showDetail && isShowRowTemplate(row, rowIndex)\">\r\n          <td class=\"po-table-row-template-container\" [colSpan]=\"columnCountForMasterDetail\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"tableRowTemplate.templateRef\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: row, rowIndex: rowIndex }\"\r\n            >\r\n            </ng-template>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"hasMainColumns && isShowMasterDetail(row)\">\r\n          <td class=\"po-table-column-detail\" [colSpan]=\"columnCountForMasterDetail\">\r\n            <po-table-detail\r\n              [p-selectable]=\"selectable && !detailHideSelect\"\r\n              [p-detail]=\"columnMasterDetail.detail\"\r\n              [p-items]=\"row[nameColumnDetail]\"\r\n              (p-select-row)=\"selectDetailRow($event)\"\r\n            >\r\n            </po-table-detail>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<po-popup #popup [p-actions]=\"actions\" [p-target]=\"popupTarget\"> </po-popup>\r\n\r\n<ng-template #poTableColumnDetail let-row=\"row\" let-rowIndex=\"rowIndex\">\r\n  <span\r\n    *ngIf=\"(containsMasterDetail(row) && !hasRowTemplate) || (isShowRowTemplate(row, rowIndex) && hasRowTemplate)\"\r\n    class=\"po-icon po-clickable\"\r\n    [class.po-icon-arrow-up]=\"row.$showDetail\"\r\n    [class.po-icon-arrow-down]=\"!row.$showDetail\"\r\n  >\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #inputRadio let-row>\r\n  <input type=\"radio\" class=\"po-table-radio\" [class.po-table-radio-checked]=\"row.$selected\" />\r\n  <label class=\"po-table-radio-label po-clickable\" (click)=\"selectable ? selectRow(row) : 'javascript:;'\"></label>\r\n</ng-template>\r\n\r\n<ng-template #inputCheckbox let-row>\r\n  <po-checkbox\r\n    name=\"checkbox\"\r\n    (p-change)=\"selectable ? selectRow(row) : 'javascript:;'\"\r\n    [(ngModel)]=\"row.$selected\"\r\n    (click)=\"selectable ? selectRow(row) : 'javascript:;'\"\r\n  ></po-checkbox>\r\n</ng-template>\r\n\r\n<ng-template #contentHeaderTemplate let-column>\r\n  <span\r\n    #columnHeader\r\n    class=\"po-table-header-ellipsis\"\r\n    [p-tooltip]=\"tooltipText\"\r\n    (mouseenter)=\"tooltipMouseEnter($event)\"\r\n    (mouseleave)=\"tooltipMouseLeave()\"\r\n  >\r\n    {{ column.label || (column.property | titlecase) }}\r\n  </span>\r\n  <span\r\n    *ngIf=\"sort && column.sortable !== false\"\r\n    [class.po-table-header-icon-unselected]=\"JSON.stringify(sortedColumn?.property) !== JSON.stringify(column)\"\r\n    [class.po-table-header-icon-descending]=\"\r\n      JSON.stringify(sortedColumn?.property) === JSON.stringify(column) && sortedColumn.ascending\r\n    \"\r\n    [class.po-table-header-icon-ascending]=\"\r\n      JSON.stringify(sortedColumn?.property) === JSON.stringify(column) && !sortedColumn.ascending\r\n    \"\r\n  >\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #noColumnsWithHeight>\r\n  <div class=\"po-table-header-fixed-inner\" [style.width.px]=\"noColumnsHeader?.nativeElement.offsetWidth\">\r\n    {{ hasValidColumns ? literals.noVisibleColumn : literals.noColumns }}\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #noColumnsWithoutHeight>\r\n  {{ hasValidColumns ? literals.noVisibleColumn : literals.noColumns }}\r\n</ng-template>\r\n\r\n<!-- Template de a\u00E7\u00F5es -->\r\n<ng-template #ActionsColumnTemplate let-row=\"row\" let-rowIndex=\"rowIndex\">\r\n  <td\r\n    *ngIf=\"isSingleAction\"\r\n    class=\"po-table-column po-table-column-single-action\"\r\n    [style.width.px]=\"height && actionRight ? getWidthColumnManager() : ''\"\r\n    [style.max-width.px]=\"height && !actionRight ? getColumnWidthActionsLeft() : ''\"\r\n    [style.width.px]=\"height && !actionRight ? getColumnWidthActionsLeft() : ''\"\r\n  >\r\n    <div\r\n      *ngIf=\"firstAction.visible !== false\"\r\n      class=\"po-table-single-action po-clickable\"\r\n      [class.po-table-action-disabled]=\"firstAction.disabled ? validateTableAction(row, firstAction) : false\"\r\n      (click)=\"executeTableAction(row, firstAction)\"\r\n    >\r\n      <po-icon *ngIf=\"firstAction.icon\" class=\"po-table-single-action-content\" [p-icon]=\"firstAction.icon\"></po-icon>\r\n      {{ firstAction.label }}\r\n    </div>\r\n  </td>\r\n\r\n  <td *ngIf=\"visibleActions.length > 1\" class=\"po-table-column-actions\">\r\n    <span #popupTarget class=\"po-icon po-icon-more po-clickable\" (click)=\"togglePopup(row, popupTarget)\"></span>\r\n  </td>\r\n</ng-template>\r\n\r\n<po-table-column-manager\r\n  *ngIf=\"!hideColumnsManager\"\r\n  [p-columns]=\"columns\"\r\n  [p-max-columns]=\"maxColumns\"\r\n  [p-target]=\"height ? columnManagerTargetFixed : columnManagerTarget\"\r\n  [p-last-visible-columns-selected]=\"lastVisibleColumnsSelected\"\r\n  (p-visible-columns-change)=\"onVisibleColumnsChange($event)\"\r\n  (p-change-visible-columns)=\"onChangeVisibleColumns($event)\"\r\n  [p-columns-default]=\"initialColumns\"\r\n  (p-initial-columns)=\"onColumnRestoreManager($event)\"\r\n>\r\n</po-table-column-manager>\r\n" }]
    }], function () { return [{ type: i1.PoDateService }, { type: i0.IterableDiffers }, { type: i0.Renderer2 }, { type: i2.PoLanguageService }, { type: i0.ChangeDetectorRef }, { type: i3.DecimalPipe }, { type: i4.Router }, { type: i5.PoTableService }]; }, { tableRowTemplate: [{
            type: ContentChild,
            args: [PoTableRowTemplateDirective, { static: true }]
        }], tableCellTemplate: [{
            type: ContentChild,
            args: [PoTableCellTemplateDirective]
        }], tableColumnTemplates: [{
            type: ContentChildren,
            args: [PoTableColumnTemplateDirective]
        }], noColumnsHeader: [{
            type: ViewChild,
            args: ['noColumnsHeader', { read: ElementRef }]
        }], noColumnsHeaderFixed: [{
            type: ViewChild,
            args: ['noColumnsHeaderFixed', { read: ElementRef }]
        }], poPopupComponent: [{
            type: ViewChild,
            args: ['popup']
        }], tableFooterElement: [{
            type: ViewChild,
            args: ['tableFooter', { read: ElementRef, static: false }]
        }], tableWrapperElement: [{
            type: ViewChild,
            args: ['tableWrapper', { read: ElementRef, static: false }]
        }], poTableTbody: [{
            type: ViewChild,
            args: ['poTableTbody', { read: ElementRef, static: false }]
        }], poTableThead: [{
            type: ViewChild,
            args: ['poTableThead', { read: ElementRef, static: false }]
        }], poTableTbodyVirtual: [{
            type: ViewChild,
            args: ['poTableTbodyVirtual', { read: ElementRef, static: false }]
        }], columnManager: [{
            type: ViewChild,
            args: ['columnManager', { read: ElementRef, static: false }]
        }], columnManagerFixed: [{
            type: ViewChild,
            args: ['columnManagerFixed', { read: ElementRef, static: false }]
        }], columnActionLeft: [{
            type: ViewChild,
            args: ['columnActionLeft', { read: ElementRef, static: false }]
        }], columnActionLeftFixed: [{
            type: ViewChild,
            args: ['columnActionLeftFixed', { read: ElementRef, static: false }]
        }], actionsIconElement: [{
            type: ViewChildren,
            args: ['actionsIconElement', { read: ElementRef }]
        }], actionsElement: [{
            type: ViewChildren,
            args: ['actionsElement', { read: ElementRef }]
        }], columnManagerTarget: [{
            type: ViewChild,
            args: ['columnManagerTarget']
        }], columnManagerTargetFixed: [{
            type: ViewChild,
            args: ['columnManagerTargetFixed']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYmxlL3BvLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBR0wsU0FBUyxFQUNULFlBQVksRUFFWixVQUFVLEVBS1YsU0FBUyxFQUNULFlBQVksRUFFWixlQUFlLEVBRWhCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUt2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7QUFHbEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFdEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDekcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDL0csT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakNwRyx3QkFBd0U7OztJQUQxRSx3Q0FBaUg7SUFDL0csbUdBQXdFO0lBQzFFLGlCQUFlOzs7O0lBRjJELDJEQUFzQztJQUMvRixlQUF3QztJQUF4QyxzQ0FBd0M7OztJQUtyRCwrQkFBOEM7SUFDNUMsaUNBQTBGO0lBQzVGLGlCQUFNOzs7SUFEeUMsZUFBK0I7SUFBL0IscURBQStCOzs7SUFZdEUsd0JBQXFFOzs7SUFJckUsd0JBQXdGOzs7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QUFLLEVBQUU7WUFDRSxZQUFZO2tCQUEzRSxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNTLG1CQUFtQjtrQkFBekYsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNKLGFBQWE7a0JBQTdFLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ08sa0JBQWtCO2tCQUF2RixTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0EsZ0JBQWdCO2tCQUFuRixTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ08scUJBQXFCO2tCQUE3RixTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRWIsa0JBQWtCO2tCQUEzRSxZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNGLGNBQWM7a0JBQW5FLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBeUJkLG1CQUFtQjtrQkFBeEQsU0FBUzttQkFBQyxxQkFBcUI7WUFTVyx3QkFBd0I7a0JBQWxFLFNBQVM7bUJBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1kYXRlL3BvLWRhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUG9wdXBDb21wb25lbnQgfSBmcm9tICcuLi9wby1wb3B1cC9wby1wb3B1cC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUG9UYWJsZUFjdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby10YWJsZS1hY3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9UYWJsZUJhc2VDb21wb25lbnQsIFF1ZXJ5UGFyYW1zVHlwZSB9IGZyb20gJy4vcG8tdGFibGUtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXRhYmxlLWNvbHVtbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uTGFiZWwgfSBmcm9tICcuL3BvLXRhYmxlLWNvbHVtbi1sYWJlbC9wby10YWJsZS1jb2x1bW4tbGFiZWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9UYWJsZVJvd1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby10YWJsZS1yb3ctdGVtcGxhdGUvcG8tdGFibGUtcm93LXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvVGFibGVTdWJ0aXRsZUNvbHVtbiB9IGZyb20gJy4vcG8tdGFibGUtc3VidGl0bGUtZm9vdGVyL3BvLXRhYmxlLXN1YnRpdGxlLWNvbHVtbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby10YWJsZS1jZWxsLXRlbXBsYXRlL3BvLXRhYmxlLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbHVtblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby10YWJsZS1jb2x1bW4tdGVtcGxhdGUvcG8tdGFibGUtY29sdW1uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvVGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uIH0gZnJvbSAnLi9lbnVtcy9wby10YWJsZS1yb3ctdGVtcGxhdGUtYXJyb3ctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQgeyBQb1RhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tdGFibGUuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvVGFibGVCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby10YWJsZS1iYXNpY1wiIHRpdGxlPVwiUE8gVGFibGUgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtYmFzaWMvc2FtcGxlLXBvLXRhYmxlLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLWJhc2ljL3NhbXBsZS1wby10YWJsZS1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhYmxlLWxhYnNcIiB0aXRsZT1cIlBPIFRhYmxlIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtbGFicy9zYW1wbGUtcG8tdGFibGUtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJsZS1sYWJzL3NhbXBsZS1wby10YWJsZS1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtbGFicy9zYW1wbGUtcG8tdGFibGUtbGFicy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJsZS1sYWJzL3NhbXBsZS1wby10YWJsZS1sYWJzLmNvbXBvbmVudC5wby50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLWxhYnMvc2FtcGxlLXBvLXRhYmxlLWxhYnMuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhYmxlLXdpdGgtYXBpXCIgdGl0bGU9XCJQTyBUYWJsZSB1c2luZyBBUElcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtd2l0aC1hcGkvc2FtcGxlLXBvLXRhYmxlLXdpdGgtYXBpLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLXdpdGgtYXBpL3NhbXBsZS1wby10YWJsZS13aXRoLWFwaS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhYmxlLXRyYW5zcG9ydFwiIHRpdGxlPVwiUE8gVGFibGUgLSBUcmFuc3BvcnRcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtdHJhbnNwb3J0L3NhbXBsZS1wby10YWJsZS10cmFuc3BvcnQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtdHJhbnNwb3J0L3NhbXBsZS1wby10YWJsZS10cmFuc3BvcnQuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJsZS10cmFuc3BvcnQvc2FtcGxlLXBvLXRhYmxlLXRyYW5zcG9ydC5zZXJ2aWNlLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdGFibGUtYWlyZmFyZVwiIHRpdGxlPVwiUE8gVGFibGUgLSBBaXJmYXJlXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLWFpcmZhcmUvc2FtcGxlLXBvLXRhYmxlLWFpcmZhcmUuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFibGUtYWlyZmFyZS9zYW1wbGUtcG8tdGFibGUtYWlyZmFyZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLWFpcmZhcmUvc2FtcGxlLXBvLXRhYmxlLWFpcmZhcmUuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhYmxlLWNvbXBvbmVudHNcIiB0aXRsZT1cIlBPIFRhYmxlIC0gUG8gRmllbGQgQ29tcG9uZW50c1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJsZS1jb21wb25lbnRzL3NhbXBsZS1wby10YWJsZS1jb21wb25lbnRzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLWNvbXBvbmVudHMvc2FtcGxlLXBvLXRhYmxlLWNvbXBvbmVudHMuZW51bS50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhYmxlLWNvbXBvbmVudHMvc2FtcGxlLXBvLXRhYmxlLWNvbXBvbmVudHMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJsZS1jb21wb25lbnRzL3NhbXBsZS1wby10YWJsZS1jb21wb25lbnRzLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10YWJsZS1jb21wb25lbnRzL3NhbXBsZS1wby10YWJsZS1jb21wb25lbnRzLmNvbXBvbmVudC5jc3NcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BvRGF0ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RhYmxlQ29tcG9uZW50IGV4dGVuZHMgUG9UYWJsZUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGQoUG9UYWJsZVJvd1RlbXBsYXRlRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJsZVJvd1RlbXBsYXRlOiBQb1RhYmxlUm93VGVtcGxhdGVEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChQb1RhYmxlQ2VsbFRlbXBsYXRlRGlyZWN0aXZlKSB0YWJsZUNlbGxUZW1wbGF0ZTogUG9UYWJsZUNlbGxUZW1wbGF0ZURpcmVjdGl2ZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihQb1RhYmxlQ29sdW1uVGVtcGxhdGVEaXJlY3RpdmUpIHRhYmxlQ29sdW1uVGVtcGxhdGVzOiBRdWVyeUxpc3Q8UG9UYWJsZUNvbHVtblRlbXBsYXRlRGlyZWN0aXZlPjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbm9Db2x1bW5zSGVhZGVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIG5vQ29sdW1uc0hlYWRlcjtcclxuICBAVmlld0NoaWxkKCdub0NvbHVtbnNIZWFkZXJGaXhlZCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBub0NvbHVtbnNIZWFkZXJGaXhlZDtcclxuICBAVmlld0NoaWxkKCdwb3B1cCcpIHBvUG9wdXBDb21wb25lbnQ6IFBvUG9wdXBDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndGFibGVGb290ZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgdGFibGVGb290ZXJFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlV3JhcHBlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSB0YWJsZVdyYXBwZXJFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3BvVGFibGVUYm9keScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBwb1RhYmxlVGJvZHk7XHJcbiAgQFZpZXdDaGlsZCgncG9UYWJsZVRoZWFkJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIHBvVGFibGVUaGVhZDtcclxuICBAVmlld0NoaWxkKCdwb1RhYmxlVGJvZHlWaXJ0dWFsJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIHBvVGFibGVUYm9keVZpcnR1YWw7XHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uTWFuYWdlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb2x1bW5NYW5hZ2VyO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtbk1hbmFnZXJGaXhlZCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb2x1bW5NYW5hZ2VyRml4ZWQ7XHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uQWN0aW9uTGVmdCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb2x1bW5BY3Rpb25MZWZ0O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtbkFjdGlvbkxlZnRGaXhlZCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb2x1bW5BY3Rpb25MZWZ0Rml4ZWQ7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oJ2FjdGlvbnNJY29uRWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhY3Rpb25zSWNvbkVsZW1lbnQ6IFF1ZXJ5TGlzdDxhbnk+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ2FjdGlvbnNFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGFjdGlvbnNFbGVtZW50OiBRdWVyeUxpc3Q8YW55PjtcclxuXHJcbiAgaGVpZ2h0VGFibGVDb250YWluZXI6IG51bWJlcjtcclxuICBoZWlnaHRUYWJsZVZpcnR1YWw6IG51bWJlcjtcclxuICBwb3B1cFRhcmdldDtcclxuICB0YWJsZU9wYWNpdHk6IG51bWJlciA9IDA7XHJcbiAgdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICBpdGVtU2l6ZTogbnVtYmVyID0gMzI7XHJcbiAgbGFzdFZpc2libGVDb2x1bW5zU2VsZWN0ZWQ6IEFycmF5PFBvVGFibGVDb2x1bW4+O1xyXG5cclxuICBwcml2YXRlIF9jb2x1bW5NYW5hZ2VyVGFyZ2V0OiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgX2NvbHVtbk1hbmFnZXJUYXJnZXRGaXhlZDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGRpZmZlcjtcclxuICBwcml2YXRlIGZvb3RlckhlaWdodDtcclxuICBwcml2YXRlIGhlYWRlckhlaWdodDtcclxuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0UmVzaXplO1xyXG4gIHByaXZhdGUgdmlzaWJsZUVsZW1lbnQgPSBmYWxzZTtcclxuICBwcml2YXRlIHNjcm9sbEV2ZW50JDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uU2Nyb2xsRXZlbnQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjbGlja0xpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgcmVzaXplTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgSlNPTjogSlNPTjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uTWFuYWdlclRhcmdldCcpIHNldCBjb2x1bW5NYW5hZ2VyVGFyZ2V0KHZhbHVlOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLl9jb2x1bW5NYW5hZ2VyVGFyZ2V0ID0gdmFsdWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5NYW5hZ2VyVGFyZ2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbk1hbmFnZXJUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdjb2x1bW5NYW5hZ2VyVGFyZ2V0Rml4ZWQnKSBzZXQgY29sdW1uTWFuYWdlclRhcmdldEZpeGVkKHZhbHVlOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLl9jb2x1bW5NYW5hZ2VyVGFyZ2V0Rml4ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbHVtbk1hbmFnZXJUYXJnZXRGaXhlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2x1bW5NYW5hZ2VyVGFyZ2V0Rml4ZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBvRGF0ZTogUG9EYXRlU2VydmljZSxcclxuICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwb0xhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZGVjaW1hbFBpcGU6IERlY2ltYWxQaXBlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZGVmYXVsdFNlcnZpY2U6IFBvVGFibGVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwb0RhdGUsIHBvTGFuZ3VhZ2VTZXJ2aWNlLCBkZWZhdWx0U2VydmljZSk7XHJcbiAgICB0aGlzLkpTT04gPSBKU09OO1xyXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBUT0RPOiAjNTU1MCBhbyByZW1vdmVyIGVzdGUgbGlzdGVuZXIsIG5vIHBvcnRhbCwgcXVhbmRvIGFzIGNvbHVuYXMgZm9yZW0gZml4YXMgbsOjbyBzb2ZyZW1cclxuICAgIC8vIGFsdGVyYcOnw6NvIGRlIGxhcmd1cmEsIHBvaXMgbyBuZ0RvQ2hlY2sgbsOjbyDDqSBleGVjdXRhZG8uXHJcbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKCkgPT4ge30pO1xyXG5cclxuICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmRlYm91bmNlUmVzaXplKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNSb3dUZW1wbGF0ZVdpdGhBcnJvd0RpcmVjdGlvblJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVSb3dUZW1wbGF0ZT8udGFibGVSb3dUZW1wbGF0ZUFycm93RGlyZWN0aW9uID09PSBQb1RhYmxlUm93VGVtcGxhdGVBcnJvd0RpcmVjdGlvbi5SaWdodDtcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5Db3VudCgpIHtcclxuICAgIGNvbnN0IGNvbHVtbkNvdW50ID1cclxuICAgICAgdGhpcy5tYWluQ29sdW1ucy5sZW5ndGggK1xyXG4gICAgICAodGhpcy5hY3Rpb25zLmxlbmd0aCA+IDAgPyAxIDogMCkgK1xyXG4gICAgICAodGhpcy5zZWxlY3RhYmxlID8gMSA6IDApICtcclxuICAgICAgKCF0aGlzLmhpZGVEZXRhaWwgJiYgdGhpcy5jb2x1bW5NYXN0ZXJEZXRhaWwgIT09IHVuZGVmaW5lZCA/IDEgOiAwKTtcclxuXHJcbiAgICByZXR1cm4gY29sdW1uQ291bnQgfHwgMTtcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5Db3VudEZvck1hc3RlckRldGFpbCgpIHtcclxuICAgIC8vIGNhc28gdGl2ZXIgYcOnw7VlcyBzZXLDoSB1dGlsaXphZG8gYSBzdWEgY29sdW5hIHBhcmEgZXhpYmlyIG8gY29sdW1uTWFuYWdlclxyXG4gICAgY29uc3QgY29sdW1uTWFuYWdlciA9IHRoaXMuYWN0aW9ucy5sZW5ndGggPyAwIDogMTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYWluQ29sdW1ucy5sZW5ndGggKyAxICsgKHRoaXMuYWN0aW9ucy5sZW5ndGggPiAwID8gMSA6IDApICsgKHRoaXMuc2VsZWN0YWJsZSA/IDEgOiAwKSArIGNvbHVtbk1hbmFnZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgZGV0YWlsSGlkZVNlbGVjdCgpIHtcclxuICAgIGNvbnN0IG1hc3RlckRldGFpbCA9IHRoaXMuY29sdW1uTWFzdGVyRGV0YWlsO1xyXG4gICAgcmV0dXJuIG1hc3RlckRldGFpbCAmJiBtYXN0ZXJEZXRhaWwuZGV0YWlsID8gbWFzdGVyRGV0YWlsLmRldGFpbC5oaWRlU2VsZWN0IDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzVmlzaWJsZUFjdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnZpc2libGVBY3Rpb25zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldCBmaXJzdEFjdGlvbigpOiBQb1RhYmxlQWN0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVBY3Rpb25zICYmIHRoaXMudmlzaWJsZUFjdGlvbnNbMF07XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzSXRlbXMgJiYgdGhpcy5oYXNWaXNpYmxlU3VidGl0bGVDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc01hc3RlckRldGFpbENvbHVtbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaGFzTWFpbkNvbHVtbnMgJiYgdGhpcy5oYXNJdGVtcyAmJiAhdGhpcy5oaWRlRGV0YWlsICYmICEhKHRoaXMuY29sdW1uTWFzdGVyRGV0YWlsIHx8IHRoaXMuaGFzUm93VGVtcGxhdGUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc1Jvd1RlbXBsYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy50YWJsZVJvd1RlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc1NlbGVjdGFibGVDb2x1bW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlICYmIHRoaXMuaGFzSXRlbXMgJiYgdGhpcy5oYXNNYWluQ29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldCBoYXNWYWxpZENvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnZhbGlkQ29sdW1ucy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzVmlzaWJsZVN1YnRpdGxlQ29sdW1ucygpIHtcclxuICAgIHJldHVybiB0aGlzLnN1YnRpdGxlQ29sdW1ucy5zb21lKGNvbHVtbiA9PiBjb2x1bW4udmlzaWJsZSAhPT0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2luZ2xlQWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZUFjdGlvbnMubGVuZ3RoID09PSAxO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc2libGVBY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucyAmJiB0aGlzLmFjdGlvbnMuZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24gJiYgYWN0aW9uLnZpc2libGUgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vcmVJbmZpbml0ZVNjcm9sbCh7IHRhcmdldCB9KTogdm9pZCB7XHJcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyB0YXJnZXQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKCF0aGlzLnNob3dNb3JlRGlzYWJsZWQgJiYgc2Nyb2xsUG9zaXRpb24gPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAqICh0aGlzLmluZmluaXRlU2Nyb2xsRGlzdGFuY2UgLyAxMTApKSB7XHJcbiAgICAgIHRoaXMub25TaG93TW9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy5jaGVja0NoYW5nZXNJdGVtcygpO1xyXG4gICAgdGhpcy52ZXJpZnlDYWxjdWxhdGVIZWlnaHRUYWJsZUNvbnRhaW5lcigpO1xyXG4gICAgLy8gUGVybWl0ZSBxdWUgb3MgY2FiZcOnYWxob3Mgc2VqYW0gY2FsY3VsYWRvcyBuYSBwcmltZWlyYSB2ZXogcXVlIG8gY29tcG9uZW50ZSB0b3JuYS1zZSB2aXPDrXZlbCxcclxuICAgIC8vIGV2aXRhbmRvIGNvbSBpc3NvLCBwcm9ibGVtYXMgY29tIFRhYnMgb3UgRGl2cyBxdWUgaW5pY2llbSBlc2NvbmRpZGFzLlxyXG4gICAgaWYgKHRoaXMudGFibGVXcmFwcGVyRWxlbWVudD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAmJiAhdGhpcy52aXNpYmxlRWxlbWVudCAmJiB0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuZGVib3VuY2VSZXNpemUoKTtcclxuICAgICAgdGhpcy5jaGVja0luZmluaXRlU2Nyb2xsKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZUVsZW1lbnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbVNpemUgPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoID4gMTM2NiA/IDQ0IDogMzI7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgcmVhbGl6YXIgYnVzY2Egbm8gc2VydmnDp28gZGUgZGFkb3MgcG9kZW5kbyBpbmZvcm1hciBmaWx0cm9zIGUgY29tIG8gcmV0b3JubywgYXR1YWxpemEgYSB0YWJlbGEuXHJcbiAgICpcclxuICAgKiBDYXNvIG7Do28gc2VqYSBpbmZvcm1hZG8gcGFyw6JtZXRybywgbmFkYSBzZXLDoSBhZGljaW9uYWRvIGFvIEdFVCwgY29uZm9ybWUgYWJhaXhvOlxyXG4gICAqIGBgYFxyXG4gICAqIHVybCArID9wYWdlPTEmcGFnZVNpemU9MTBcclxuICAgKiBgYGBcclxuICAgKiA+IE9iczogb3MgcGFyw6JtZXRyb3MgYHBhZ2VgIGUgYHBhZ2VTaXplYCBzZW1wcmUgc2Vyw6NvIGNoYW1hZG9zIGluZGVwZW5kZW50ZSBkZSBzZXIgZW52aWFkb3Mgb3V0cm9zIHBhcsOibWV0cm9zLlxyXG4gICAqXHJcbiAgICogQ2FzbyBzZWphbSBpbmZvcm1hZG9zIG9zIHBhcsOibWV0cm9zIGB7IG5hbWU6ICdKT0hOJywgYWdlOiAnMjMnIH1gLCB0b2RvcyBzZXLDo28gYWRpY2lvbmFkb3MgYW8gR0VULCBjb25mb3JtZSBhYmFpeG86XHJcbiAgICogYGBgXHJcbiAgICogdXJsICsgP3BhZ2U9MSZwYWdlU2l6ZT0xMCZuYW1lPUpPSE4mYWdlPTIzXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyB7IGtleTogdmFsdWUgfSB9IHF1ZXJ5UGFyYW1zIEZvcm1hdG8gZG8gb2JqZXRvIGEgc2VyIGVudmlhZG8uXHJcbiAgICogPiBQb2RlIHNlciB1dGlsaXphZGEgcXVhbHF1ZXIgc3RyaW5nIGNvbW8ga2V5LCBlIHF1YWxxdWVyIHN0cmluZyBvdSBudW1iZXIgY29tbyB2YWx1ZS5cclxuICAgKi9cclxuICBhcHBseUZpbHRlcnMocXVlcnlQYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IFF1ZXJ5UGFyYW1zVHlwZSB9KSB7XHJcbiAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgdGhpcy5pbml0aWFsaXplRGF0YShxdWVyeVBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHF1ZSBjb2xhcHNhIHVtYSBsaW5oYSBjb20gZGV0YWxoZSBxdWFuZG8gZXhlY3V0YWRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsgbnVtYmVyIH0gcm93SW5kZXggw41uZGljZSBkYSBsaW5oYSBxdWUgc2Vyw6EgY29sYXBzYWRhLlxyXG4gICAqID4gQW8gcmVvcmRlbmFyIG9zIGRhZG9zIGRhIHRhYmVsYSwgbyB2YWxvciBjb250aWRvIG5lc3RlIMOtbmRpY2Ugc2Vyw6EgYWx0ZXJhZG8gY29uZm9ybWUgYSBvcmRlbmHDp8Ojby5cclxuICAgKi9cclxuICBjb2xsYXBzZShyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNldFNob3dEZXRhaWwocm93SW5kZXgsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcXVlIGV4cGFuZGUgdW1hIGxpbmhhIGNvbSBkZXRhbGhlIHF1YW5kbyBleGVjdXRhZGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyBudW1iZXIgfSByb3dJbmRleCDDjW5kaWNlIGRhIGxpbmhhIHF1ZSBzZXLDoSBleHBhbmRpZGEuXHJcbiAgICogPiBBbyByZW9yZGVuYXIgb3MgZGFkb3MgZGEgdGFiZWxhLCBvIHZhbG9yIGNvbnRpZG8gbmVzdGUgw61uZGljZSBzZXLDoSBhbHRlcmFkbyBjb25mb3JtZSBhIG9yZGVuYcOnw6NvLlxyXG4gICAqL1xyXG4gIGV4cGFuZChyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNldFNob3dEZXRhaWwocm93SW5kZXgsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBhcyBsaW5oYXMgZG8gYHBvLXRhYmxlYCBxdWUgZXN0w6NvIHNlbGVjaW9uYWRhcy5cclxuICAgKi9cclxuICBnZXRTZWxlY3RlZFJvd3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLiRzZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGFzIGxpbmhhcyBkbyBgcG8tdGFibGVgIHF1ZSBuw6NvIGVzdMOjbyBzZWxlY2lvbmFkYXMuXHJcbiAgICovXHJcbiAgZ2V0VW5zZWxlY3RlZFJvd3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiAhaXRlbS4kc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzbWFyY2EgYXMgbGluaGFzIHF1ZSBlc3TDo28gc2VsZWNpb25hZGFzLlxyXG4gICAqL1xyXG4gIHVuc2VsZWN0Um93cygpIHtcclxuICAgIGNvbnN0IGNvbHVtbkRldGFpbCA9IHRoaXMubmFtZUNvbHVtbkRldGFpbDtcclxuXHJcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGRldGFpbEl0ZW1zID0gY29sdW1uRGV0YWlsID8gaXRlbVtjb2x1bW5EZXRhaWxdIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRldGFpbEl0ZW1zKSkge1xyXG4gICAgICAgIGRldGFpbEl0ZW1zLmZvckVhY2goZGV0YWlsSXRlbSA9PiB7XHJcbiAgICAgICAgICBkZXRhaWxJdGVtLiRzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtLiRzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNoZWNrRGlzYWJsZWQocm93LCBjb2x1bW46IFBvVGFibGVDb2x1bW4pIHtcclxuICAgIHJldHVybiBjb2x1bW4uZGlzYWJsZWQgPyBjb2x1bW4uZGlzYWJsZWQocm93KSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbnNNYXN0ZXJEZXRhaWwocm93KSB7XHJcbiAgICByZXR1cm4gcm93W3RoaXMubmFtZUNvbHVtbkRldGFpbF0gJiYgcm93W3RoaXMubmFtZUNvbHVtbkRldGFpbF0ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVRhYmxlQWN0aW9uKHJvdzogYW55LCB0YWJsZUFjdGlvbjogYW55KSB7XHJcbiAgICBpZiAoIXJvdy5kaXNhYmxlZCAmJiAhdGhpcy52YWxpZGF0ZVRhYmxlQWN0aW9uKHJvdywgdGFibGVBY3Rpb24pKSB7XHJcbiAgICAgIHRhYmxlQWN0aW9uLmFjdGlvbihyb3cpO1xyXG4gICAgICB0aGlzLnRvZ2dsZVJvd0FjdGlvbihyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzbWFyY2EgdW1hIGxpbmhhIHF1ZSBlc3TDoSBzZWxlY2lvbmFkYS5cclxuICAgKi9cclxuICB1bnNlbGVjdFJvd0l0ZW0oaXRlbWZuOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgKChpdGVtKSA9PiBib29sZWFuKSkge1xyXG4gICAgdGhpcy50b2dnbGVTZWxlY3QoaXRlbWZuLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXMuZXZlcnkoaXRlbSA9PiAhaXRlbS4kc2VsZWN0ZWQpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY2lvbmEgdW1hIGxpbmhhIGRvICdwby10YWJsZScuXHJcbiAgICovXHJcbiAgc2VsZWN0Um93SXRlbShpdGVtZm46IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCAoKGl0ZW0pID0+IGJvb2xlYW4pKSB7XHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdChpdGVtZm4sIHRydWUpO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zLmV2ZXJ5KGl0ZW0gPT4gaXRlbS4kc2VsZWN0ZWQpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdE51bWJlcih2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZykge1xyXG4gICAgaWYgKCFmb3JtYXQpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmRlY2ltYWxQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIGdldENlbGxEYXRhKHJvdzogYW55LCBjb2x1bW46IFBvVGFibGVDb2x1bW4pOiBhbnkge1xyXG4gICAgY29uc3QgYXJyYXlQcm9wZXJ0eSA9IGNvbHVtbi5wcm9wZXJ0eS5zcGxpdCgnLicpO1xyXG4gICAgaWYgKGFycmF5UHJvcGVydHkubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0aWVzID0gYXJyYXlQcm9wZXJ0eTtcclxuICAgICAgbGV0IHZhbHVlOiBhbnkgPSByb3c7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgbmVzdGVkUHJvcGVydGllcykge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWVbcHJvcGVydHldIHx8IHZhbHVlW3Byb3BlcnR5XSA9PT0gMCA/IHZhbHVlW3Byb3BlcnR5XSA6ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByb3dbY29sdW1uLnByb3BlcnR5XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEJvb2xlYW5MYWJlbChyb3dWYWx1ZTogYW55LCBjb2x1bW5Cb29sZWFuOiBQb1RhYmxlQ29sdW1uKTogc3RyaW5nIHtcclxuICAgIGlmIChyb3dWYWx1ZSB8fCByb3dWYWx1ZSA9PT0gZmFsc2UgfHwgcm93VmFsdWUgPT09IDApIHtcclxuICAgICAgcm93VmFsdWUgPSBjb252ZXJ0VG9Cb29sZWFuKHJvd1ZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChjb2x1bW5Cb29sZWFuLmJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gcm93VmFsdWUgPyBjb2x1bW5Cb29sZWFuLmJvb2xlYW4udHJ1ZUxhYmVsIHx8ICdTaW0nIDogY29sdW1uQm9vbGVhbi5ib29sZWFuLmZhbHNlTGFiZWwgfHwgJ07Do28nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA/ICdTaW0nIDogJ07Do28nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvd1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uSWNvbnMocm93OiBhbnksIGNvbHVtbjogUG9UYWJsZUNvbHVtbikge1xyXG4gICAgY29uc3Qgcm93SWNvbnMgPSB0aGlzLmdldENlbGxEYXRhKHJvdywgY29sdW1uKTtcclxuXHJcbiAgICBpZiAoY29sdW1uLmljb25zKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd0ljb25zKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lcmdlQ3VzdG9tSWNvbnMocm93SWNvbnMsIGNvbHVtbi5pY29ucyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEN1c3RvbUljb24ocm93SWNvbnMsIGNvbHVtbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm93SWNvbnM7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5MYWJlbChyb3c6IGFueSwgY29sdW1uTGFiZWw6IFBvVGFibGVDb2x1bW4pOiBQb1RhYmxlQ29sdW1uTGFiZWwge1xyXG4gICAgcmV0dXJuIGNvbHVtbkxhYmVsLmxhYmVscy5maW5kKGxhYmVsSXRlbSA9PiB0aGlzLmdldENlbGxEYXRhKHJvdywgY29sdW1uTGFiZWwpID09PSBsYWJlbEl0ZW0udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3VidGl0bGVDb2x1bW4ocm93OiBhbnksIHN1YnRpdGxlQ29sdW1uOiBQb1RhYmxlQ29sdW1uKTogUG9UYWJsZVN1YnRpdGxlQ29sdW1uIHtcclxuICAgIHJldHVybiBzdWJ0aXRsZUNvbHVtbi5zdWJ0aXRsZXMuZmluZChzdWJ0aXRsZUl0ZW0gPT4gdGhpcy5nZXRDZWxsRGF0YShyb3csIHN1YnRpdGxlQ29sdW1uKSA9PT0gc3VidGl0bGVJdGVtLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGlzU2hvd01hc3RlckRldGFpbChyb3cpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICF0aGlzLmhpZGVEZXRhaWwgJiZcclxuICAgICAgdGhpcy5uYW1lQ29sdW1uRGV0YWlsICYmXHJcbiAgICAgIHJvdy4kc2hvd0RldGFpbCAmJlxyXG4gICAgICB0aGlzLmNvbnRhaW5zTWFzdGVyRGV0YWlsKHJvdykgJiZcclxuICAgICAgIXRoaXMuaGFzUm93VGVtcGxhdGVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1Nob3dSb3dUZW1wbGF0ZShyb3csIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnRhYmxlUm93VGVtcGxhdGUgJiYgdGhpcy50YWJsZVJvd1RlbXBsYXRlLnBvVGFibGVSb3dUZW1wbGF0ZVNob3cpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVSb3dUZW1wbGF0ZS5wb1RhYmxlUm93VGVtcGxhdGVTaG93KHJvdywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0xpbmsoZXZlbnQsIHJvdywgY29sdW1uOiBQb1RhYmxlQ29sdW1uKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tEaXNhYmxlZChyb3csIGNvbHVtbikpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVZpc2libGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUNvbHVtbnMuZW1pdChjb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIG9uQ29sdW1uUmVzdG9yZU1hbmFnZXIodmFsdWU6IEFycmF5PFN0cmluZz4pIHtcclxuICAgIHRoaXMuY29sdW1uUmVzdG9yZU1hbmFnZXIuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvblZpc2libGVDb2x1bW5zQ2hhbmdlKGNvbHVtbnM6IEFycmF5PFBvVGFibGVDb2x1bW4+KSB7XHJcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG9vbHRpcE1vdXNlRW50ZXIoZXZlbnQ6IGFueSwgY29sdW1uPzogUG9UYWJsZUNvbHVtbiwgcm93PzogYW55KSB7XHJcbiAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLmhpZGVUZXh0T3ZlcmZsb3cgJiYgZXZlbnQudGFyZ2V0Lm9mZnNldFdpZHRoIDwgZXZlbnQudGFyZ2V0LnNjcm9sbFdpZHRoICYmIGV2ZW50LnRhcmdldC5pbm5lclRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy50b29sdGlwVGV4dCA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2x1bW4pIHtcclxuICAgICAgdGhpcy5jaGVja2luZ0lmQ29sdW1uSGFzVG9vbHRpcChjb2x1bW4sIHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b29sdGlwTW91c2VMZWF2ZSgpIHtcclxuICAgIHRoaXMudG9vbHRpcFRleHQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQb3B1cChyb3csIHRhcmdldFJlZikge1xyXG4gICAgdGhpcy5wb3B1cFRhcmdldCA9IHRhcmdldFJlZjtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMucG9Qb3B1cENvbXBvbmVudC50b2dnbGUocm93KTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVUYWJsZUFjdGlvbihyb3c6IGFueSwgdGFibGVBY3Rpb246IGFueSkge1xyXG4gICAgaWYgKHR5cGVvZiB0YWJsZUFjdGlvbi5kaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gdGFibGVBY3Rpb24uZGlzYWJsZWQocm93KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0YWJsZUFjdGlvbi5kaXNhYmxlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3BlbkNvbHVtbk1hbmFnZXIoKSB7XHJcbiAgICB0aGlzLmxhc3RWaXNpYmxlQ29sdW1uc1NlbGVjdGVkID0gWy4uLnRoaXMuY29sdW1uc107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHF1ZSByZW1vdmUgdW0gaXRlbSBkYSB0YWJlbGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyBudW1iZXIgfCB7IGtleTogdmFsdWUgfSB9IGl0ZW0gw41uZGljZSBkYSBsaW5oYSBvdSBvIGl0ZW0gcXVlIHNlcsOhIHJlbW92aWRvLlxyXG4gICAqID4gQW8gcmVtb3ZlciBvIGl0ZW0sIGEgbGluaGEgcXVlIG8gcmVwcmVzZW50YSBzZXLDoSBleGNsdcOtZGEgZGEgdGFiZWxhLlxyXG4gICAqL1xyXG4gIHJlbW92ZUl0ZW0oaXRlbTogbnVtYmVyIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGZpbHRlckl0ZW0gPT4gZmlsdGVySXRlbSAhPT0gaXRlbSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnbnVtYmVyJykge1xyXG4gICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gaXRlbTtcclxuICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyBxdWUgYXR1YWxpemEgdW0gaXRlbSBkYSB0YWJlbGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyBudW1iZXIgfCB7IGtleTogdmFsdWUgfSB9IGl0ZW0gw41uZGljZSBkYSBsaW5oYSBvdSBvIGl0ZW0gcXVlIHNlcsOhIGF0dWFsaXphZG8uXHJcbiAgICogQHBhcmFtIHsgeyBrZXk6IHZhbHVlIH0gfSB1cGRhdGVkSXRlbSBJdGVtIHF1ZSBmb2kgYXR1YWxpemFkby5cclxuICAgKiA+IEFvIGF0dWFsaXphciBvIGl0ZW0sIGEgaW5mb3JtYcOnw6NvIHNlcsOhIGFsdGVyYWRhIG5hIHRhYmVsYS5cclxuICAgKi9cclxuICB1cGRhdGVJdGVtKGl0ZW06IG51bWJlciB8IHsgW2tleTogc3RyaW5nXTogYW55IH0sIHVwZGF0ZWRJdGVtOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGl0ZW0sIDEsIHVwZGF0ZWRJdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoaW5kZXhJdGVtID0+IGluZGV4SXRlbSA9PT0gaXRlbSk7XHJcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxLCB1cGRhdGVkSXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VGVtcGxhdGUoY29sdW1uOiBQb1RhYmxlQ29sdW1uKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZTogUG9UYWJsZUNvbHVtblRlbXBsYXRlRGlyZWN0aXZlID0gdGhpcy50YWJsZUNvbHVtblRlbXBsYXRlcy5maW5kKFxyXG4gICAgICB0YWJsZUNvbHVtblRlbXBsYXRlID0+IHRhYmxlQ29sdW1uVGVtcGxhdGUudGFyZ2V0UHJvcGVydHkgPT09IGNvbHVtbi5wcm9wZXJ0eVxyXG4gICAgKTtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBOw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIG8gdGVtcGxhdGUgcGFyYSBhIGNvbHVuYTogJHtjb2x1bW4ucHJvcGVydHl9LCBwb3IgZ2VudGlsZXphIGluZm9ybWUgYSBwcm9wcmllZGFkZSBbcC1wcm9wZXJ0eV1gXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlLnRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN5bmNyb25pemVIb3Jpem9udGFsU2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wb1RhYmxlVGhlYWQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy5wb1RhYmxlVGJvZHlWaXJ0dWFsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXaWR0aENvbHVtbk1hbmFnZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHRcclxuICAgICAgPyB0aGlzLmNvbHVtbk1hbmFnZXJGaXhlZD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxyXG4gICAgICA6IHRoaXMuY29sdW1uTWFuYWdlcj8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb2x1bW5XaWR0aEFjdGlvbnNMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0XHJcbiAgICAgID8gdGhpcy5jb2x1bW5BY3Rpb25MZWZ0Rml4ZWQ/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcclxuICAgICAgOiB0aGlzLmNvbHVtbkFjdGlvbkxlZnQ/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FsY3VsYXRlSGVpZ2h0VGFibGVDb250YWluZXIoaGVpZ2h0KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoaGVpZ2h0KTtcclxuICAgIHRoaXMuaGVpZ2h0VGFibGVDb250YWluZXIgPSB2YWx1ZSA/IHZhbHVlIC0gdGhpcy5nZXRIZWlnaHRUYWJsZUZvb3RlcigpIDogdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5oZWlnaHRUYWJsZVZpcnR1YWwgPSB0aGlzLmhlaWdodFRhYmxlQ29udGFpbmVyXHJcbiAgICAgID8gdGhpcy5oZWlnaHRUYWJsZUNvbnRhaW5lciAtIHRoaXMuZ2V0SGVpZ2h0VGFibGVIZWFkZXIoKVxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuc2V0VGFibGVPcGFjaXR5KDEpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hlY2tJbmZpbml0ZVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhc0luZmluaXRlU2Nyb2xsKCkpIHtcclxuICAgICAgaWYgKHRoaXMucG9UYWJsZVRib2R5VmlydHVhbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA+PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZUluZmluaXRlU2Nyb2xsKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbmZpbml0ZVNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tDaGFuZ2VzSXRlbXMoKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VzSXRlbXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMuaXRlbXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzSXRlbXMgJiYgdGhpcy5zZWxlY3RBbGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGwgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzSXRlbXMgJiYgIXRoaXMuaGFzQ29sdW1ucyAmJiB0aGlzLmhhc0l0ZW1zKSB7XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuZ2V0RGVmYXVsdENvbHVtbnModGhpcy5pdGVtc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNraW5nSWZDb2x1bW5IYXNUb29sdGlwKGNvbHVtbiwgcm93KSB7XHJcbiAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdsaW5rJyAmJiBjb2x1bW4udG9vbHRpcCAmJiAhdGhpcy5jaGVja0Rpc2FibGVkKHJvdywgY29sdW1uKSkge1xyXG4gICAgICByZXR1cm4gKHRoaXMudG9vbHRpcFRleHQgPSBjb2x1bW4udG9vbHRpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbHVtbi50eXBlID09PSAnbGFiZWwnKSB7XHJcbiAgICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gdGhpcy5nZXRDb2x1bW5MYWJlbChyb3csIGNvbHVtbik7XHJcbiAgICAgIHJldHVybiAodGhpcy50b29sdGlwVGV4dCA9IGNvbHVtbkxhYmVsPy50b29sdGlwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVib3VuY2VSZXNpemUoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0UmVzaXplKTtcclxuICAgIHRoaXMudGltZW91dFJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBzaG93IHRoZSB0YWJsZVxyXG4gICAgICB0aGlzLnNldFRhYmxlT3BhY2l0eSgxKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kQ3VzdG9tSWNvbihyb3dJY29ucywgY29sdW1uOiBQb1RhYmxlQ29sdW1uKSB7XHJcbiAgICBjb25zdCBjdXN0b21JY29uID0gY29sdW1uLmljb25zLmZpbmQoaWNvbiA9PiByb3dJY29ucyA9PT0gaWNvbi52YWx1ZSk7XHJcbiAgICByZXR1cm4gY3VzdG9tSWNvbiA/IFtjdXN0b21JY29uXSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SGVpZ2h0VGFibGVGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZUZvb3RlckVsZW1lbnQgPyB0aGlzLnRhYmxlRm9vdGVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEhlaWdodFRhYmxlSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucG9UYWJsZVRoZWFkPy5uYXRpdmVFbGVtZW50Py5vZmZzZXRIZWlnaHRcclxuICAgICAgPyB0aGlzLnBvVGFibGVUaGVhZC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICA6IHRoaXMuaXRlbVNpemU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0luZmluaXRlU2Nyb2xsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pbmZpbml0ZVNjcm9sbCAmJlxyXG4gICAgICB0aGlzLmhhc0l0ZW1zICYmXHJcbiAgICAgICF0aGlzLnN1YnNjcmlwdGlvblNjcm9sbEV2ZW50ICYmXHJcbiAgICAgIHRoaXMuaGVpZ2h0ICYmXHJcbiAgICAgIHRoaXMucG9UYWJsZVRib2R5VmlydHVhbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5jbHVkZUluZmluaXRlU2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY3JvbGxFdmVudCQgPSB0aGlzLmRlZmF1bHRTZXJ2aWNlLnNjcm9sbExpc3RlbmVyKHRoaXMucG9UYWJsZVRib2R5VmlydHVhbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uU2Nyb2xsRXZlbnQgPSB0aGlzLnNjcm9sbEV2ZW50JC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5zaG93TW9yZUluZmluaXRlU2Nyb2xsKGV2ZW50KSk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1lcmdlQ3VzdG9tSWNvbnMocm93SWNvbnM6IEFycmF5PHN0cmluZz4sIGN1c3RvbUljb25zOiBBcnJheTxhbnk+KSB7XHJcbiAgICBjb25zdCBtZXJnZWRJY29ucyA9IFtdO1xyXG5cclxuICAgIHJvd0ljb25zLmZvckVhY2goY29sdW1uVmFsdWUgPT4ge1xyXG4gICAgICBjb25zdCBmb3VuZEN1c3RvbUljb24gPSBjdXN0b21JY29ucy5maW5kKFxyXG4gICAgICAgIGN1c3RvbUljb24gPT4gY29sdW1uVmFsdWUgPT09IGN1c3RvbUljb24uaWNvbiB8fCBjb2x1bW5WYWx1ZSA9PT0gY3VzdG9tSWNvbi52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBmb3VuZEN1c3RvbUljb24gPyBtZXJnZWRJY29ucy5wdXNoKGZvdW5kQ3VzdG9tSWNvbikgOiBtZXJnZWRJY29ucy5wdXNoKGNvbHVtblZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtZXJnZWRJY29ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgaWYgKHRoaXMucmVzaXplTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5yZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNsaWNrTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5jbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU2Nyb2xsRXZlbnQpIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25TY3JvbGxFdmVudC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYWJsZU9wYWNpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy50YWJsZU9wYWNpdHkgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Q2hhbmdlSGVpZ2h0SW5Gb290ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb290ZXJIZWlnaHQgIT09IHRoaXMuZ2V0SGVpZ2h0VGFibGVGb290ZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Q2hhbmdlSGVpZ2h0SW5IZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWFkZXJIZWlnaHQgIT09IHRoaXMuZ2V0SGVpZ2h0VGFibGVIZWFkZXIoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2ZXJpZnlDYWxjdWxhdGVIZWlnaHRUYWJsZUNvbnRhaW5lcigpIHtcclxuICAgIGlmICh0aGlzLmhlaWdodCAmJiB0aGlzLnZlcmlmeUNoYW5nZUhlaWdodEluRm9vdGVyKCkpIHtcclxuICAgICAgdGhpcy5mb290ZXJIZWlnaHQgPSB0aGlzLmdldEhlaWdodFRhYmxlRm9vdGVyKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy52ZXJpZnlDaGFuZ2VIZWlnaHRJbkhlYWRlcigpKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJIZWlnaHQgPSB0aGlzLmdldEhlaWdodFRhYmxlSGVhZGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlSGVpZ2h0VGFibGVDb250YWluZXIodGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVTZWxlY3QoY29tcGFyZSwgc2VsZWN0VmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YgY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09IGNvbXBhcmUpIHtcclxuICAgICAgICAgIGl0ZW0uJHNlbGVjdGVkID0gc2VsZWN0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoY29tcGFyZShpdGVtKSkge1xyXG4gICAgICAgICAgaXRlbS4kc2VsZWN0ZWQgPSBzZWxlY3RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8cG8tY29udGFpbmVyICpuZ0lmPVwiY29udGFpbmVyOyBlbHNlIHRhYmxlQ29udGFpbmVyVGVtcGxhdGVcIiBwLW5vLXBhZGRpbmcgW3Atbm8tc2hhZG93XT1cImNvbnRhaW5lciA9PT0gJ2JvcmRlcidcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGFibGVDb250YWluZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L3BvLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdGFibGVDb250YWluZXJUZW1wbGF0ZT5cclxuICA8ZGl2IFtjbGFzcy5wby10YWJsZS1jb250YWluZXItcmVsYXRpdmVdPVwibG9hZGluZ1wiPlxyXG4gICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInBvLXRhYmxlLW92ZXJsYXlcIj5cclxuICAgICAgPHBvLWxvYWRpbmcgY2xhc3M9XCJwby10YWJsZS1vdmVybGF5LWNvbnRlbnRcIiBbcC10ZXh0XT1cImxpdGVyYWxzLmxvYWRpbmdEYXRhXCI+PC9wby1sb2FkaW5nPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXRhYmxlLW1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAjdGFibGVXcmFwcGVyXHJcbiAgICAgICAgY2xhc3M9XCJwby10YWJsZS13cmFwcGVyXCJcclxuICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLWZpeGVkLWNvbHVtbnMtcGl4ZWxzXT1cImFsbENvbHVtbnNXaWR0aFBpeGVsc1wiXHJcbiAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwidGFibGVPcGFjaXR5XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJoZWlnaHRcIiBjbGFzcz1cInBvLXRhYmxlLWNvbnRhaW5lclwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0VGFibGVDb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgI3BvVGFibGVUaGVhZCBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1maXhlZCBwby10YWJsZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRhYmxlSGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgI3BvVGFibGVUYm9keSBjbGFzcz1cInBvLXRhYmxlLWNvbnRhaW5lci1maXhlZC1pbm5lclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGVpZ2h0OyB0aGVuIHRhYmxlQm9keVRlbXBsYXRlOyBlbHNlIHRhYmxlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWhlaWdodFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRhYmxlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInBvLXRhYmxlLWZvb3RlclwiICpuZ0lmPVwiaGFzRm9vdGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc3VidGl0bGVDb2x1bW5zOyB0cmFja0J5OiB0cmFja0J5XCI+XHJcbiAgICAgIDxwby10YWJsZS1zdWJ0aXRsZS1mb290ZXIgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIiBbcC1zdWJ0aXRsZXNdPVwiY29sdW1uLnN1YnRpdGxlc1wiPiA8L3BvLXRhYmxlLXN1YnRpdGxlLWZvb3Rlcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPGRpdlxyXG4gICpuZ0lmPVwiIWluZmluaXRlU2Nyb2xsXCJcclxuICBjbGFzcz1cInBvLXJvdyBwby10YWJsZS1mb290ZXItc2hvdy1tb3JlXCJcclxuICBbY2xhc3MucG8taW52aXNpYmxlXT1cInNob3dNb3JlLm9ic2VydmVycy5sZW5ndGggPT09IDAgJiYgIWhhc1NlcnZpY2VcIlxyXG4gICN0YWJsZUZvb3RlclxyXG4+XHJcbiAgPHBvLWJ1dHRvblxyXG4gICAgY2xhc3M9XCJwby1vZmZzZXQteGwtNCBwby1vZmZzZXQtbGctNCBwby1vZmZzZXQtbWQtMyBwby1sZy00IHBvLW1kLTZcIlxyXG4gICAgW3AtZGlzYWJsZWRdPVwic2hvd01vcmVEaXNhYmxlZFwiXHJcbiAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5sb2FkTW9yZURhdGFcIlxyXG4gICAgW3AtbG9hZGluZ109XCJsb2FkaW5nU2hvd01vcmVcIlxyXG4gICAgKHAtY2xpY2spPVwib25TaG93TW9yZSgpXCJcclxuICA+XHJcbiAgPC9wby1idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICN0YWJsZUhlYWRlclRlbXBsYXRlPlxyXG4gIDx0YWJsZSBjbGFzcz1cInBvLXRhYmxlXCIgW2NsYXNzLnBvLXRhYmxlLXN0cmlwZWRdPVwic3RyaXBlZFwiIFtjbGFzcy5wby10YWJsZS1sYXlvdXQtZml4ZWRdPVwiaGlkZVRleHRPdmVyZmxvd1wiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHIgW2NsYXNzLnBvLXRhYmxlLWhlYWRlcl09XCJoZWlnaHRcIj5cclxuICAgICAgICA8dGggKm5nSWY9XCJoYXNTZWxlY3RhYmxlQ29sdW1uXCIgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tc2VsZWN0YWJsZVwiPlxyXG4gICAgICAgICAgPGRpdiBbY2xhc3MucG8tdGFibGUtaGVhZGVyLWZpeGVkLWlubmVyXT1cImhlaWdodFwiPlxyXG4gICAgICAgICAgICA8cG8tY2hlY2tib3hcclxuICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0QWxsXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlU2VsZWN0QWxsXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0QWxsUm93cygpXCJcclxuICAgICAgICAgICAgICAocC1jaGFuZ2UpPVwic2VsZWN0QWxsUm93cygpXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdEFsbFwiXHJcbiAgICAgICAgICAgID48L3BvLWNoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPHRoXHJcbiAgICAgICAgICAqbmdJZj1cIihoYXNNYXN0ZXJEZXRhaWxDb2x1bW4gfHwgaGFzUm93VGVtcGxhdGUpICYmICFoYXNSb3dUZW1wbGF0ZVdpdGhBcnJvd0RpcmVjdGlvblJpZ2h0XCJcclxuICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtaGVhZGVyLWNvbHVtbiBwby10YWJsZS1oZWFkZXItbWFzdGVyLWRldGFpbFwiXHJcbiAgICAgICAgPjwvdGg+XHJcblxyXG4gICAgICAgIDwhLS0gQ29sdW5hIGNyaWFkYSBwYXJhIGNhc28gYXMgYcOnw7VlcyBmaXF1ZW0gbm8gbGFkbyBlc3F1ZXJkbyAtLT5cclxuICAgICAgICA8dGhcclxuICAgICAgICAgICNjb2x1bW5BY3Rpb25MZWZ0Rml4ZWRcclxuICAgICAgICAgICpuZ0lmPVwiIWFjdGlvblJpZ2h0ICYmICh2aXNpYmxlQWN0aW9ucy5sZW5ndGggPiAxIHx8IGlzU2luZ2xlQWN0aW9uKVwiXHJcbiAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLW1hc3Rlci1kZXRhaWxdPVwiIWlzU2luZ2xlQWN0aW9uXCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItc2luZ2xlLWFjdGlvbl09XCJpc1NpbmdsZUFjdGlvblwiXHJcbiAgICAgICAgPjwvdGg+XHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cIiFoYXNNYWluQ29sdW1uc1wiICNub0NvbHVtbnNIZWFkZXJGaXhlZCBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1jb2x1bW4gcG8tdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWlnaHQ7IHRoZW4gbm9Db2x1bW5zV2l0aEhlaWdodDsgZWxzZSBub0NvbHVtbnNXaXRob3V0SGVpZ2h0XCI+IDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aFxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBtYWluQ29sdW1uczsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1lbGxpcHNpc1wiXHJcbiAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5taW4td2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtjbGFzcy5wby1jbGlja2FibGVdPVwiKHNvcnQgJiYgY29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSkgfHwgaGFzU2VydmljZVwiXHJcbiAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLXN1YnRpdGxlXT1cImNvbHVtbi50eXBlID09PSAnc3VidGl0bGUnXCJcclxuICAgICAgICAgIChjbGljayk9XCJzb3J0Q29sdW1uKGNvbHVtbilcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJwby10YWJsZS1oZWFkZXItZmxleFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItZml4ZWQtaW5uZXJdPVwiaGVpZ2h0XCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1mbGV4LXJpZ2h0XT1cImNvbHVtbi50eXBlID09PSAnY3VycmVuY3knIHx8IGNvbHVtbi50eXBlID09PSAnbnVtYmVyJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItZmxleC1jZW50ZXJdPVwiY29sdW1uLnR5cGUgPT09ICdzdWJ0aXRsZSdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudEhlYWRlclRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1uIH1cIj4gPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGhcclxuICAgICAgICAgICpuZ0lmPVwiaGFzUm93VGVtcGxhdGVXaXRoQXJyb3dEaXJlY3Rpb25SaWdodCAmJiAoaGFzVmlzaWJsZUFjdGlvbnMgfHwgaGlkZUNvbHVtbnNNYW5hZ2VyKVwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1jb2x1bW4gcG8tdGFibGUtaGVhZGVyLW1hc3Rlci1kZXRhaWxcIlxyXG4gICAgICAgID48L3RoPlxyXG5cclxuICAgICAgICA8dGhcclxuICAgICAgICAgICpuZ0lmPVwiaGFzVmlzaWJsZUFjdGlvbnMgJiYgaGlkZUNvbHVtbnNNYW5hZ2VyICYmIGFjdGlvblJpZ2h0XCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItc2luZ2xlLWFjdGlvbl09XCJpc1NpbmdsZUFjdGlvbiAmJiAhaGlkZUNvbHVtbnNNYW5hZ2VyXCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItYWN0aW9uc109XCIhaXNTaW5nbGVBY3Rpb25cIlxyXG4gICAgICAgID48L3RoPlxyXG5cclxuICAgICAgICA8dGhcclxuICAgICAgICAgICNjb2x1bW5NYW5hZ2VyRml4ZWRcclxuICAgICAgICAgICpuZ0lmPVwiaGFzVmFsaWRDb2x1bW5zICYmICFoaWRlQ29sdW1uc01hbmFnZXJcIlxyXG4gICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1jb2x1bW4tbWFuYWdlcl09XCIhaXNTaW5nbGVBY3Rpb24gfHwgIWFjdGlvblJpZ2h0XCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItY29sdW1uLW1hbmFnZXItYm9yZGVyXT1cIiFoZWlnaHQgJiYgY29udGFpbmVyXCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItc2luZ2xlLWFjdGlvbl09XCJpc1NpbmdsZUFjdGlvbiAmJiBhY3Rpb25SaWdodFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLWNvbHVtbi1tYW5hZ2VyLWJvcmRlcl09XCJoZWlnaHQgJiYgY29udGFpbmVyXCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1jb2x1bW4tbWFuYWdlci1maXhlZC1pbm5lcl09XCJoZWlnaHRcIlxyXG4gICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiaGVpZ2h0ICYmIHZpc2libGVBY3Rpb25zLmxlbmd0aCA/IGNvbHVtbk1hbmFnZXJGaXhlZC5vZmZzZXRXaWR0aCA6IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAjY29sdW1uTWFuYWdlclRhcmdldEZpeGVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsaXRlcmFscy5jb2x1bW5zTWFuYWdlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwby10YWJsZS1oZWFkZXItY29sdW1uLW1hbmFnZXItYnV0dG9uIHBvLWljb24gcG8taWNvbi1zZXR0aW5ncyBwby1jbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgIHAtdG9vbHRpcC1wb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIFtwLXRvb2x0aXBdPVwibGl0ZXJhbHMuY29sdW1uc01hbmFnZXJcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJvbk9wZW5Db2x1bW5NYW5hZ2VyKClcIlxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICA8L3RhYmxlPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBzw7MgdmlydHVhbCAtLT5cclxuPG5nLXRlbXBsYXRlICN0YWJsZUJvZHlUZW1wbGF0ZT5cclxuICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XHJcbiAgICAjcG9UYWJsZVRib2R5VmlydHVhbFxyXG4gICAgW2l0ZW1TaXplXT1cIml0ZW1TaXplXCJcclxuICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0VGFibGVWaXJ0dWFsXCJcclxuICAgIFttaW5CdWZmZXJQeF09XCJoZWlnaHRUYWJsZVZpcnR1YWwgPCAxMDAgPyAxMDAgOiBoZWlnaHRUYWJsZVZpcnR1YWxcIlxyXG4gICAgW21heEJ1ZmZlclB4XT1cImhlaWdodFRhYmxlVmlydHVhbCA8IDIwMCA/IDIwMCA6IGhlaWdodFRhYmxlVmlydHVhbFwiXHJcbiAgICAoc2Nyb2xsKT1cInN5bmNyb25pemVIb3Jpem9udGFsU2Nyb2xsKClcIlxyXG4gID5cclxuICAgIDx0YWJsZSBjbGFzcz1cInBvLXRhYmxlXCIgW2NsYXNzLnBvLXRhYmxlLXN0cmlwZWRdPVwic3RyaXBlZFwiIFtjbGFzcy5wby10YWJsZS1sYXlvdXQtZml4ZWRdPVwiaGlkZVRleHRPdmVyZmxvd1wiPlxyXG4gICAgICA8dGJvZHkgY2xhc3M9XCJwby10YWJsZS1ncm91cC1yb3dcIiAqbmdJZj1cIiFoYXNJdGVtcyB8fCAhaGFzTWFpbkNvbHVtbnNcIj5cclxuICAgICAgICA8dHIgY2xhc3M9XCJwby10YWJsZS1yb3cgcG8tdGFibGUtcm93LW5vLWRhdGFcIj5cclxuICAgICAgICAgIDx0ZCBbY29sU3Bhbl09XCJjb2x1bW5Db3VudFwiIGNsYXNzPVwicG8tdGFibGUtbm8tZGF0YSBwby10ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ge3sgbGl0ZXJhbHMubm9EYXRhIH19IDwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc01haW5Db2x1bW5zXCI+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzPVwicG8tdGFibGUtZ3JvdXAtcm93XCIgKmNka1ZpcnR1YWxGb3I9XCJsZXQgcm93IG9mIGl0ZW1zOyBsZXQgcm93SW5kZXggPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVwiPlxyXG4gICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtcm93XCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLXJvdy1hY3RpdmVdPVwicm93LiRzZWxlY3RlZCB8fCAocm93LiRzZWxlY3RlZCA9PT0gbnVsbCAmJiBzZWxlY3RhYmxlKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNlbGVjdGFibGVcIiBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbi1zZWxlY3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNpbmdsZVNlbGVjdCA/IGlucHV0UmFkaW8gOiBpbnB1dENoZWNrYm94OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogcm93IH1cIj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gVmFsaWRhIHNlIGEgb3JpZ2VtIGRvIGRldGFpbCDDqSBwZWxvIGlucHV0IGRvIHBvLXRhYmxlIC0tPlxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAqbmdJZj1cImNvbHVtbk1hc3RlckRldGFpbCAmJiAhaGlkZURldGFpbCAmJiAhaGFzUm93VGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLWRldGFpbC10b2dnbGVcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVEZXRhaWwocm93KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBvVGFibGVDb2x1bW5EZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgcm93OiByb3csIHJvd0luZGV4OiByb3dJbmRleCB9XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQ29sdW5hIGNvbSBhcyBhw6fDtWVzIG5hIGVzcXVlcmRhIChwYWRyw6NvKS0tPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICAqbmdJZj1cIiFhY3Rpb25SaWdodCAmJiAodmlzaWJsZUFjdGlvbnMubGVuZ3RoID4gMSB8fCBpc1NpbmdsZUFjdGlvbilcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIkFjdGlvbnNDb2x1bW5UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgcm93OiByb3csIHJvd0luZGV4OiByb3dJbmRleCB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBWYWxpZGEgc2UgYSBvcmlnZW0gZG8gZGV0YWlsIMOpIHBlbGEgZGlyZXRpdmEgLS0+XHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiaGFzUm93VGVtcGxhdGUgJiYgIWhhc1Jvd1RlbXBsYXRlV2l0aEFycm93RGlyZWN0aW9uUmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLWRldGFpbC10b2dnbGVcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVEZXRhaWwocm93KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBvVGFibGVDb2x1bW5EZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgcm93OiByb3csIHJvd0luZGV4OiByb3dJbmRleCB9XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgbWFpbkNvbHVtbnM7IGxldCBjb2x1bW5JbmRleCA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5XCJcclxuICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgICAgICBbc3R5bGUubWF4LXdpZHRoXT1cImNvbHVtbi53aWR0aFwiXHJcbiAgICAgICAgICAgICAgW3N0eWxlLm1pbi13aWR0aF09XCJjb2x1bW4ud2lkdGhcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1jb2x1bW5dPVwiY29sdW1uLnR5cGUgIT09ICdpY29uJ1wiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWNvbHVtbi1yaWdodF09XCJjb2x1bW4udHlwZSA9PT0gJ2N1cnJlbmN5JyB8fCBjb2x1bW4udHlwZSA9PT0gJ251bWJlcidcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1jb2x1bW4tY2VudGVyXT1cImNvbHVtbi50eXBlID09PSAnc3VidGl0bGUnXCJcclxuICAgICAgICAgICAgICBbY2xhc3MucG8tdGFibGUtY29sdW1uLWljb25zXT1cImNvbHVtbi50eXBlID09PSAnaWNvbidcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzQ29sb3Iocm93LCBjb2x1bW4pXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwiaGFzU2VsZWN0YWJsZVJvdygpID8gc2VsZWN0Um93KHJvdykgOiAnamF2YXNjcmlwdDo7J1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbi1jZWxsIG5vdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1ib2R5LWVsbGlwc2lzXT1cImhpZGVUZXh0T3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgW25nU3dpdGNoXT1cImNvbHVtbi50eXBlXCJcclxuICAgICAgICAgICAgICAgIFtwLXRvb2x0aXBdPVwidG9vbHRpcFRleHRcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIm5vQ29sdW1uc0hlYWRlckZpeGVkPy5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ/Lm9mZnNldFdpZHRoXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInRvb2x0aXBNb3VzZUVudGVyKCRldmVudCwgY29sdW1uLCByb3cpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cInRvb2x0aXBNb3VzZUxlYXZlKClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInY29sdW1uVGVtcGxhdGUnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImdldFRlbXBsYXRlKGNvbHVtbik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBnZXRDZWxsRGF0YShyb3csIGNvbHVtbikgfVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidjZWxsVGVtcGxhdGUnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInRhYmxlQ2VsbFRlbXBsYXRlPy50ZW1wbGF0ZVJlZjsgY29udGV4dDogeyByb3c6IHJvdywgY29sdW1uOiBjb2x1bW4gfVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidib29sZWFuJ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBnZXRCb29sZWFuTGFiZWwoZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pLCBjb2x1bW4pIH19XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidjdXJyZW5jeSdcIj5cclxuICAgICAgICAgICAgICAgICAge3sgZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pIHwgY3VycmVuY3k6IGNvbHVtbi5mb3JtYXQ6J3N5bWJvbCc6JzEuMi0yJyB9fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj5cclxuICAgICAgICAgICAgICAgICAge3sgZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pIHwgZGF0ZTogY29sdW1uLmZvcm1hdCB8fCAnZGQvTU0veXl5eScgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3RpbWUnXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGdldENlbGxEYXRhKHJvdywgY29sdW1uKSB8IHBvX3RpbWU6IGNvbHVtbi5mb3JtYXQgfHwgJ0hIOm1tOnNzLmZmZmZmZicgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGVUaW1lJ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBnZXRDZWxsRGF0YShyb3csIGNvbHVtbikgfCBkYXRlOiBjb2x1bW4uZm9ybWF0IHx8ICdkZC9NTS95eXl5IEhIOm1tOnNzJyB9fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBmb3JtYXROdW1iZXIoZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pLCBjb2x1bW4uZm9ybWF0KSB9fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwby10YWJsZS1jb2x1bW4tbGlua1xyXG4gICAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCJcclxuICAgICAgICAgICAgICAgICAgW3AtYWN0aW9uXT1cImNvbHVtbi5hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICBbcC1kaXNhYmxlZF09XCJjaGVja0Rpc2FibGVkKHJvdywgY29sdW1uKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtwLWxpbmtdPVwicm93W2NvbHVtbi5saW5rXVwiXHJcbiAgICAgICAgICAgICAgICAgIFtwLXJvd109XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICBbcC12YWx1ZV09XCJnZXRDZWxsRGF0YShyb3csIGNvbHVtbilcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGlja0xpbmsoJGV2ZW50LCByb3csIGNvbHVtbilcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9wby10YWJsZS1jb2x1bW4tbGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cG8tdGFibGUtY29sdW1uLWljb25cclxuICAgICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpY29uJ1wiXHJcbiAgICAgICAgICAgICAgICAgIFtwLWNvbHVtbl09XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICBbcC1pY29uc109XCJnZXRDb2x1bW5JY29ucyhyb3csIGNvbHVtbilcIlxyXG4gICAgICAgICAgICAgICAgICBbcC1yb3ddPVwicm93XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvcG8tdGFibGUtY29sdW1uLWljb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidzdWJ0aXRsZSdcIj5cclxuICAgICAgICAgICAgICAgICAgPHBvLXRhYmxlLXN1YnRpdGxlLWNpcmNsZSBbcC1zdWJ0aXRsZV09XCJnZXRTdWJ0aXRsZUNvbHVtbihyb3csIGNvbHVtbilcIj48L3BvLXRhYmxlLXN1YnRpdGxlLWNpcmNsZT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwby10YWJsZS1jb2x1bW4tbGFiZWwgW3AtdmFsdWVdPVwiZ2V0Q29sdW1uTGFiZWwocm93LCBjb2x1bW4pXCI+IDwvcG8tdGFibGUtY29sdW1uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoRGVmYXVsdD57eyBnZXRDZWxsRGF0YShyb3csIGNvbHVtbikgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAqbmdJZj1cImhhc1Jvd1RlbXBsYXRlV2l0aEFycm93RGlyZWN0aW9uUmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLWRldGFpbC10b2dnbGVcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVEZXRhaWwocm93KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBvVGFibGVDb2x1bW5EZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgcm93OiByb3csIHJvd0luZGV4OiByb3dJbmRleCB9XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQ29sdW5hIGRlIGHDp29lcyBuYSBkaXJlaXRhIC0tPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICAqbmdJZj1cImFjdGlvblJpZ2h0XCJcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJBY3Rpb25zQ29sdW1uVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHJvdzogcm93LCByb3dJbmRleDogcm93SW5kZXggfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQ29sdW5hIHBhcmEgbsOjbyBmaWNhciBlbSBicmFuY28gbmFzIGxpbmhhcyBkZSBnZXJlbmNpYW1lbnRvIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFjdGlvblJpZ2h0ICYmICh2aXNpYmxlQWN0aW9ucy5sZW5ndGggPiAxIHx8IGlzU2luZ2xlQWN0aW9uKSAmJiAhaGlkZUNvbHVtbnNNYW5hZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicG8tdGFibGUtY29sdW1uIHBvLXRhYmxlLWNvbHVtbi1lbXB0eVwiPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBDb2x1bW4gTWFuYWdlciAtLT5cclxuICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhaGFzVmlzaWJsZUFjdGlvbnMgJiYgIWhpZGVDb2x1bW5zTWFuYWdlciAmJiAhaGFzUm93VGVtcGxhdGVXaXRoQXJyb3dEaXJlY3Rpb25SaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwby10YWJsZS1jb2x1bW5cIlxyXG4gICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgPHRyICpuZ0lmPVwiaGFzTWFpbkNvbHVtbnMgJiYgaGFzUm93VGVtcGxhdGUgJiYgcm93LiRzaG93RGV0YWlsICYmIGlzU2hvd1Jvd1RlbXBsYXRlKHJvdywgcm93SW5kZXgpXCI+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInBvLXRhYmxlLXJvdy10ZW1wbGF0ZS1jb250YWluZXJcIiBbY29sU3Bhbl09XCJjb2x1bW5Db3VudEZvck1hc3RlckRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFibGVSb3dUZW1wbGF0ZS50ZW1wbGF0ZVJlZlwiXHJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHJvdywgcm93SW5kZXg6IHJvd0luZGV4IH1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICA8dHIgKm5nSWY9XCJoYXNNYWluQ29sdW1ucyAmJiBpc1Nob3dNYXN0ZXJEZXRhaWwocm93KVwiPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tZGV0YWlsXCIgW2NvbFNwYW5dPVwiY29sdW1uQ291bnRGb3JNYXN0ZXJEZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8cG8tdGFibGUtZGV0YWlsXHJcbiAgICAgICAgICAgICAgICBbcC1zZWxlY3RhYmxlXT1cInNlbGVjdGFibGUgJiYgIWRldGFpbEhpZGVTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgW3AtZGV0YWlsXT1cImNvbHVtbk1hc3RlckRldGFpbC5kZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgW3AtaXRlbXNdPVwicm93W25hbWVDb2x1bW5EZXRhaWxdXCJcclxuICAgICAgICAgICAgICAgIChwLXNlbGVjdC1yb3cpPVwic2VsZWN0RGV0YWlsUm93KCRldmVudClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L3BvLXRhYmxlLWRldGFpbD5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN0YWJsZVRlbXBsYXRlPlxyXG4gIDx0YWJsZSBjbGFzcz1cInBvLXRhYmxlXCIgW2NsYXNzLnBvLXRhYmxlLXN0cmlwZWRdPVwic3RyaXBlZFwiIFtjbGFzcy5wby10YWJsZS1sYXlvdXQtZml4ZWRdPVwiaGlkZVRleHRPdmVyZmxvd1wiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHIgW2NsYXNzLnBvLXRhYmxlLWhlYWRlcl09XCIhaGVpZ2h0XCI+XHJcbiAgICAgICAgPHRoICpuZ0lmPVwiaGFzU2VsZWN0YWJsZUNvbHVtblwiIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLXNlbGVjdGFibGVcIj5cclxuICAgICAgICAgIDxkaXYgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1maXhlZC1pbm5lcl09XCJoZWlnaHRcIj5cclxuICAgICAgICAgICAgPHBvLWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdEFsbFwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhaGlkZVNlbGVjdEFsbFwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MoKVwiXHJcbiAgICAgICAgICAgICAgKHAtY2hhbmdlKT1cInNlbGVjdEFsbFJvd3MoKVwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxcIlxyXG4gICAgICAgICAgICA+PC9wby1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aFxyXG4gICAgICAgICAgKm5nSWY9XCIoaGFzTWFzdGVyRGV0YWlsQ29sdW1uIHx8IGhhc1Jvd1RlbXBsYXRlKSAmJiAhaGFzUm93VGVtcGxhdGVXaXRoQXJyb3dEaXJlY3Rpb25SaWdodFwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1jb2x1bW4gcG8tdGFibGUtaGVhZGVyLW1hc3Rlci1kZXRhaWxcIlxyXG4gICAgICAgID48L3RoPlxyXG5cclxuICAgICAgICA8IS0tIENvbHVuYSBjcmlhZGEgcGFyYSBjYXNvIGFzIGHDp8O1ZXMgZmlxdWVtIG5vIGxhZG8gZXNxdWVyZG8gLS0+XHJcbiAgICAgICAgPHRoXHJcbiAgICAgICAgICAjY29sdW1uQWN0aW9uTGVmdFxyXG4gICAgICAgICAgKm5nSWY9XCIhYWN0aW9uUmlnaHQgJiYgKHZpc2libGVBY3Rpb25zLmxlbmd0aCA+IDEgfHwgaXNTaW5nbGVBY3Rpb24pXCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItbWFzdGVyLWRldGFpbF09XCIhaXNTaW5nbGVBY3Rpb25cIlxyXG4gICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1zaW5nbGUtYWN0aW9uXT1cImlzU2luZ2xlQWN0aW9uXCJcclxuICAgICAgICA+PC90aD5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwiIWhhc01haW5Db2x1bW5zXCIgI25vQ29sdW1uc0hlYWRlciBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1jb2x1bW4gcG8tdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWlnaHQ7IHRoZW4gbm9Db2x1bW5zV2l0aEhlaWdodDsgZWxzZSBub0NvbHVtbnNXaXRob3V0SGVpZ2h0XCI+IDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aFxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBtYWluQ29sdW1uczsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1lbGxpcHNpc1wiXHJcbiAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtzdHlsZS5taW4td2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgIFtjbGFzcy5wby1jbGlja2FibGVdPVwiKHNvcnQgJiYgY29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSkgfHwgaGFzU2VydmljZVwiXHJcbiAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLXN1YnRpdGxlXT1cImNvbHVtbi50eXBlID09PSAnc3VidGl0bGUnXCJcclxuICAgICAgICAgIChjbGljayk9XCJzb3J0Q29sdW1uKGNvbHVtbilcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJwby10YWJsZS1oZWFkZXItZmxleFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItZml4ZWQtaW5uZXJdPVwiaGVpZ2h0XCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1mbGV4LXJpZ2h0XT1cImNvbHVtbi50eXBlID09PSAnY3VycmVuY3knIHx8IGNvbHVtbi50eXBlID09PSAnbnVtYmVyJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItZmxleC1jZW50ZXJdPVwiY29sdW1uLnR5cGUgPT09ICdzdWJ0aXRsZSdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudEhlYWRlclRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1uIH1cIj4gPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGhcclxuICAgICAgICAgICpuZ0lmPVwiaGFzUm93VGVtcGxhdGVXaXRoQXJyb3dEaXJlY3Rpb25SaWdodCAmJiAoaGFzVmlzaWJsZUFjdGlvbnMgfHwgaGlkZUNvbHVtbnNNYW5hZ2VyKVwiXHJcbiAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWhlYWRlci1jb2x1bW4gcG8tdGFibGUtaGVhZGVyLW1hc3Rlci1kZXRhaWxcIlxyXG4gICAgICAgID48L3RoPlxyXG5cclxuICAgICAgICA8dGhcclxuICAgICAgICAgICpuZ0lmPVwiaGFzVmlzaWJsZUFjdGlvbnMgJiYgaGlkZUNvbHVtbnNNYW5hZ2VyICYmIGFjdGlvblJpZ2h0XCJcclxuICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItc2luZ2xlLWFjdGlvbl09XCJpc1NpbmdsZUFjdGlvblwiXHJcbiAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLWFjdGlvbnNdPVwiIWlzU2luZ2xlQWN0aW9uXCJcclxuICAgICAgICA+PC90aD5cclxuXHJcbiAgICAgICAgPHRoXHJcbiAgICAgICAgICAjY29sdW1uTWFuYWdlclxyXG4gICAgICAgICAgKm5nSWY9XCJoYXNWYWxpZENvbHVtbnMgJiYgIWhpZGVDb2x1bW5zTWFuYWdlclwiXHJcbiAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLWNvbHVtbi1tYW5hZ2VyXT1cIiFpc1NpbmdsZUFjdGlvbiB8fCAhYWN0aW9uUmlnaHRcIlxyXG4gICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1jb2x1bW4tbWFuYWdlci1ib3JkZXJdPVwiIWhlaWdodCAmJiBjb250YWluZXJcIlxyXG4gICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1zaW5nbGUtYWN0aW9uXT1cImlzU2luZ2xlQWN0aW9uICYmIGFjdGlvblJpZ2h0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItY29sdW1uLW1hbmFnZXItYm9yZGVyXT1cImhlaWdodCAmJiBjb250YWluZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MucG8tdGFibGUtaGVhZGVyLWNvbHVtbi1tYW5hZ2VyLWZpeGVkLWlubmVyXT1cImhlaWdodFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJoZWlnaHQgJiYgdmlzaWJsZUFjdGlvbnMubGVuZ3RoID8gY29sdW1uTWFuYWdlci5vZmZzZXRXaWR0aCA6IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAjY29sdW1uTWFuYWdlclRhcmdldFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGl0ZXJhbHMuY29sdW1uc01hbmFnZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtaGVhZGVyLWNvbHVtbi1tYW5hZ2VyLWJ1dHRvbiBwby1pY29uIHBvLWljb24tc2V0dGluZ3MgcG8tY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICBwLXRvb2x0aXAtcG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBbcC10b29sdGlwXT1cImxpdGVyYWxzLmNvbHVtbnNNYW5hZ2VyXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwib25PcGVuQ29sdW1uTWFuYWdlcigpXCJcclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgPHRib2R5IGNsYXNzPVwicG8tdGFibGUtZ3JvdXAtcm93XCIgKm5nSWY9XCIhaGFzSXRlbXMgfHwgIWhhc01haW5Db2x1bW5zXCI+XHJcbiAgICAgIDx0ciBjbGFzcz1cInBvLXRhYmxlLXJvdyBwby10YWJsZS1yb3ctbm8tZGF0YVwiPlxyXG4gICAgICAgIDx0ZCBbY29sU3Bhbl09XCJjb2x1bW5Db3VudFwiIGNsYXNzPVwicG8tdGFibGUtbm8tZGF0YSBwby10ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4+IHt7IGxpdGVyYWxzLm5vRGF0YSB9fSA8L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc01haW5Db2x1bW5zXCI+XHJcbiAgICAgIDx0Ym9keSBjbGFzcz1cInBvLXRhYmxlLWdyb3VwLXJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2YgaXRlbXM7IGxldCByb3dJbmRleCA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5XCI+XHJcbiAgICAgICAgPHRyIGNsYXNzPVwicG8tdGFibGUtcm93XCIgW2NsYXNzLnBvLXRhYmxlLXJvdy1hY3RpdmVdPVwicm93LiRzZWxlY3RlZCB8fCAocm93LiRzZWxlY3RlZCA9PT0gbnVsbCAmJiBzZWxlY3RhYmxlKVwiPlxyXG4gICAgICAgICAgPHRkICpuZ0lmPVwic2VsZWN0YWJsZVwiIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLXNlbGVjdGFibGVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNpbmdsZVNlbGVjdCA/IGlucHV0UmFkaW8gOiBpbnB1dENoZWNrYm94OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogcm93IH1cIj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgIDwhLS0gVmFsaWRhIHNlIGEgb3JpZ2VtIGRvIGRldGFpbCDDqSBwZWxvIGlucHV0IGRvIHBvLXRhYmxlIC0tPlxyXG4gICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICpuZ0lmPVwiY29sdW1uTWFzdGVyRGV0YWlsICYmICFoaWRlRGV0YWlsICYmICFoYXNSb3dUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLWRldGFpbC10b2dnbGVcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRGV0YWlsKHJvdylcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJwb1RhYmxlQ29sdW1uRGV0YWlsXCJcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyByb3c6IHJvdywgcm93SW5kZXg6IHJvd0luZGV4IH1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgIDwhLS0gQ29sdW5hIGNvbSBhcyBhw6fDtWVzIG5hIGVzcXVlcmRhIChwYWRyw6NvKS0tPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIWFjdGlvblJpZ2h0ICYmICh2aXNpYmxlQWN0aW9ucy5sZW5ndGggPiAxIHx8IGlzU2luZ2xlQWN0aW9uKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIkFjdGlvbnNDb2x1bW5UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHJvdzogcm93LCByb3dJbmRleDogcm93SW5kZXggfVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgIDwhLS0gVmFsaWRhIHNlIGEgb3JpZ2VtIGRvIGRldGFpbCDDqSBwZWxhIGRpcmV0aXZhIC0tPlxyXG4gICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICpuZ0lmPVwiaGFzUm93VGVtcGxhdGUgJiYgIWhhc1Jvd1RlbXBsYXRlV2l0aEFycm93RGlyZWN0aW9uUmlnaHRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbi1kZXRhaWwtdG9nZ2xlXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZURldGFpbChyb3cpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwicG9UYWJsZUNvbHVtbkRldGFpbFwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgcm93OiByb3csIHJvd0luZGV4OiByb3dJbmRleCB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBtYWluQ29sdW1uczsgbGV0IGNvbHVtbkluZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlcIlxyXG4gICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1heC13aWR0aF09XCJjb2x1bW4ud2lkdGhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluLXdpZHRoXT1cImNvbHVtbi53aWR0aFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1jb2x1bW5dPVwiY29sdW1uLnR5cGUgIT09ICdpY29uJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1jb2x1bW4tcmlnaHRdPVwiY29sdW1uLnR5cGUgPT09ICdjdXJyZW5jeScgfHwgY29sdW1uLnR5cGUgPT09ICdudW1iZXInXCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXRhYmxlLWNvbHVtbi1jZW50ZXJdPVwiY29sdW1uLnR5cGUgPT09ICdzdWJ0aXRsZSdcIlxyXG4gICAgICAgICAgICBbY2xhc3MucG8tdGFibGUtY29sdW1uLWljb25zXT1cImNvbHVtbi50eXBlID09PSAnaWNvbidcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJnZXRDbGFzc0NvbG9yKHJvdywgY29sdW1uKVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJoYXNTZWxlY3RhYmxlUm93KCkgPyBzZWxlY3RSb3cocm93KSA6ICdqYXZhc2NyaXB0OjsnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLWNlbGwgbm90cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5wby10YWJsZS1ib2R5LWVsbGlwc2lzXT1cImhpZGVUZXh0T3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgIFtuZ1N3aXRjaF09XCJjb2x1bW4udHlwZVwiXHJcbiAgICAgICAgICAgICAgW3AtdG9vbHRpcF09XCJ0b29sdGlwVGV4dFwiXHJcbiAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwidG9vbHRpcE1vdXNlRW50ZXIoJGV2ZW50LCBjb2x1bW4sIHJvdylcIlxyXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cInRvb2x0aXBNb3VzZUxlYXZlKClcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidjb2x1bW5UZW1wbGF0ZSdcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJnZXRUZW1wbGF0ZShjb2x1bW4pOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pIH1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidjZWxsVGVtcGxhdGUnXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGFibGVDZWxsVGVtcGxhdGU/LnRlbXBsYXRlUmVmOyBjb250ZXh0OiB7IHJvdzogcm93LCBjb2x1bW46IGNvbHVtbiB9XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInYm9vbGVhbidcIj5cclxuICAgICAgICAgICAgICAgIHt7IGdldEJvb2xlYW5MYWJlbChnZXRDZWxsRGF0YShyb3csIGNvbHVtbiksIGNvbHVtbikgfX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInY3VycmVuY3knXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBnZXRDZWxsRGF0YShyb3csIGNvbHVtbikgfCBjdXJyZW5jeTogY29sdW1uLmZvcm1hdDonc3ltYm9sJzonMS4yLTInIH19XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBnZXRDZWxsRGF0YShyb3csIGNvbHVtbikgfCBkYXRlOiBjb2x1bW4uZm9ybWF0IHx8ICdkZC9NTS95eXl5JyB9fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIid0aW1lJ1wiPlxyXG4gICAgICAgICAgICAgICAge3sgZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pIHwgcG9fdGltZTogY29sdW1uLmZvcm1hdCB8fCAnSEg6bW06c3MuZmZmZmZmJyB9fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidkYXRlVGltZSdcIj5cclxuICAgICAgICAgICAgICAgIHt7IGdldENlbGxEYXRhKHJvdywgY29sdW1uKSB8IGRhdGU6IGNvbHVtbi5mb3JtYXQgfHwgJ2RkL01NL3l5eXkgSEg6bW06c3MnIH19XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIj5cclxuICAgICAgICAgICAgICAgIHt7IGZvcm1hdE51bWJlcihnZXRDZWxsRGF0YShyb3csIGNvbHVtbiksIGNvbHVtbi5mb3JtYXQpIH19XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8cG8tdGFibGUtY29sdW1uLWxpbmtcclxuICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGluaydcIlxyXG4gICAgICAgICAgICAgICAgW3AtYWN0aW9uXT1cImNvbHVtbi5hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgW3AtZGlzYWJsZWRdPVwiY2hlY2tEaXNhYmxlZChyb3csIGNvbHVtbilcIlxyXG4gICAgICAgICAgICAgICAgW3AtbGlua109XCJyb3dbY29sdW1uLmxpbmtdXCJcclxuICAgICAgICAgICAgICAgIFtwLXJvd109XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgW3AtdmFsdWVdPVwiZ2V0Q2VsbERhdGEocm93LCBjb2x1bW4pXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrTGluaygkZXZlbnQsIHJvdywgY29sdW1uKVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvcG8tdGFibGUtY29sdW1uLWxpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxwby10YWJsZS1jb2x1bW4taWNvblxyXG4gICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpY29uJ1wiXHJcbiAgICAgICAgICAgICAgICBbcC1jb2x1bW5dPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgIFtwLWljb25zXT1cImdldENvbHVtbkljb25zKHJvdywgY29sdW1uKVwiXHJcbiAgICAgICAgICAgICAgICBbcC1yb3ddPVwicm93XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9wby10YWJsZS1jb2x1bW4taWNvbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidzdWJ0aXRsZSdcIj5cclxuICAgICAgICAgICAgICAgIDxwby10YWJsZS1zdWJ0aXRsZS1jaXJjbGUgW3Atc3VidGl0bGVdPVwiZ2V0U3VidGl0bGVDb2x1bW4ocm93LCBjb2x1bW4pXCI+PC9wby10YWJsZS1zdWJ0aXRsZS1jaXJjbGU+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcbiAgICAgICAgICAgICAgICA8cG8tdGFibGUtY29sdW1uLWxhYmVsIFtwLXZhbHVlXT1cImdldENvbHVtbkxhYmVsKHJvdywgY29sdW1uKVwiPiA8L3BvLXRhYmxlLWNvbHVtbi1sYWJlbD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoRGVmYXVsdD57eyBnZXRDZWxsRGF0YShyb3csIGNvbHVtbikgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgKm5nSWY9XCJoYXNSb3dUZW1wbGF0ZVdpdGhBcnJvd0RpcmVjdGlvblJpZ2h0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwby10YWJsZS1jb2x1bW4tZGV0YWlsLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVEZXRhaWwocm93KVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBvVGFibGVDb2x1bW5EZXRhaWxcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHJvdzogcm93LCByb3dJbmRleDogcm93SW5kZXggfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBDb2x1bmEgZGUgYcOnb2VzIG5hIGRpcmVpdGEgLS0+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgKm5nSWY9XCJhY3Rpb25SaWdodFwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIkFjdGlvbnNDb2x1bW5UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHJvdzogcm93LCByb3dJbmRleDogcm93SW5kZXggfVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgIDwhLS0gQ29sdW5hIHBhcmEgbsOjbyBmaWNhciBlbSBicmFuY28gbmFzIGxpbmhhcyBkZSBnZXJlbmNpYW1lbnRvIC0tPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhY3Rpb25SaWdodCAmJiAodmlzaWJsZUFjdGlvbnMubGVuZ3RoID4gMSB8fCBpc1NpbmdsZUFjdGlvbikgJiYgIWhpZGVDb2x1bW5zTWFuYWdlclwiPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJwby10YWJsZS1yb3ctbm8tZGF0YSBwby10YWJsZS1jb2x1bW4tZW1wdHlcIj48L3RkPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPCEtLSBDb2x1bW4gTWFuYWdlciAtLT5cclxuICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAqbmdJZj1cIiFoYXNWaXNpYmxlQWN0aW9ucyAmJiAhaGlkZUNvbHVtbnNNYW5hZ2VyICYmICFoYXNSb3dUZW1wbGF0ZVdpdGhBcnJvd0RpcmVjdGlvblJpZ2h0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwby10YWJsZS1jb2x1bW5cIlxyXG4gICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgPHRyICpuZ0lmPVwiaGFzTWFpbkNvbHVtbnMgJiYgaGFzUm93VGVtcGxhdGUgJiYgcm93LiRzaG93RGV0YWlsICYmIGlzU2hvd1Jvd1RlbXBsYXRlKHJvdywgcm93SW5kZXgpXCI+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJwby10YWJsZS1yb3ctdGVtcGxhdGUtY29udGFpbmVyXCIgW2NvbFNwYW5dPVwiY29sdW1uQ291bnRGb3JNYXN0ZXJEZXRhaWxcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFibGVSb3dUZW1wbGF0ZS50ZW1wbGF0ZVJlZlwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiByb3csIHJvd0luZGV4OiByb3dJbmRleCB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICA8dHIgKm5nSWY9XCJoYXNNYWluQ29sdW1ucyAmJiBpc1Nob3dNYXN0ZXJEZXRhaWwocm93KVwiPlxyXG4gICAgICAgICAgPHRkIGNsYXNzPVwicG8tdGFibGUtY29sdW1uLWRldGFpbFwiIFtjb2xTcGFuXT1cImNvbHVtbkNvdW50Rm9yTWFzdGVyRGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxwby10YWJsZS1kZXRhaWxcclxuICAgICAgICAgICAgICBbcC1zZWxlY3RhYmxlXT1cInNlbGVjdGFibGUgJiYgIWRldGFpbEhpZGVTZWxlY3RcIlxyXG4gICAgICAgICAgICAgIFtwLWRldGFpbF09XCJjb2x1bW5NYXN0ZXJEZXRhaWwuZGV0YWlsXCJcclxuICAgICAgICAgICAgICBbcC1pdGVtc109XCJyb3dbbmFtZUNvbHVtbkRldGFpbF1cIlxyXG4gICAgICAgICAgICAgIChwLXNlbGVjdC1yb3cpPVwic2VsZWN0RGV0YWlsUm93KCRldmVudClcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvcG8tdGFibGUtZGV0YWlsPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC90YWJsZT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxwby1wb3B1cCAjcG9wdXAgW3AtYWN0aW9uc109XCJhY3Rpb25zXCIgW3AtdGFyZ2V0XT1cInBvcHVwVGFyZ2V0XCI+IDwvcG8tcG9wdXA+XHJcblxyXG48bmctdGVtcGxhdGUgI3BvVGFibGVDb2x1bW5EZXRhaWwgbGV0LXJvdz1cInJvd1wiIGxldC1yb3dJbmRleD1cInJvd0luZGV4XCI+XHJcbiAgPHNwYW5cclxuICAgICpuZ0lmPVwiKGNvbnRhaW5zTWFzdGVyRGV0YWlsKHJvdykgJiYgIWhhc1Jvd1RlbXBsYXRlKSB8fCAoaXNTaG93Um93VGVtcGxhdGUocm93LCByb3dJbmRleCkgJiYgaGFzUm93VGVtcGxhdGUpXCJcclxuICAgIGNsYXNzPVwicG8taWNvbiBwby1jbGlja2FibGVcIlxyXG4gICAgW2NsYXNzLnBvLWljb24tYXJyb3ctdXBdPVwicm93LiRzaG93RGV0YWlsXCJcclxuICAgIFtjbGFzcy5wby1pY29uLWFycm93LWRvd25dPVwiIXJvdy4kc2hvd0RldGFpbFwiXHJcbiAgPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjaW5wdXRSYWRpbyBsZXQtcm93PlxyXG4gIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInBvLXRhYmxlLXJhZGlvXCIgW2NsYXNzLnBvLXRhYmxlLXJhZGlvLWNoZWNrZWRdPVwicm93LiRzZWxlY3RlZFwiIC8+XHJcbiAgPGxhYmVsIGNsYXNzPVwicG8tdGFibGUtcmFkaW8tbGFiZWwgcG8tY2xpY2thYmxlXCIgKGNsaWNrKT1cInNlbGVjdGFibGUgPyBzZWxlY3RSb3cocm93KSA6ICdqYXZhc2NyaXB0OjsnXCI+PC9sYWJlbD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjaW5wdXRDaGVja2JveCBsZXQtcm93PlxyXG4gIDxwby1jaGVja2JveFxyXG4gICAgbmFtZT1cImNoZWNrYm94XCJcclxuICAgIChwLWNoYW5nZSk9XCJzZWxlY3RhYmxlID8gc2VsZWN0Um93KHJvdykgOiAnamF2YXNjcmlwdDo7J1wiXHJcbiAgICBbKG5nTW9kZWwpXT1cInJvdy4kc2VsZWN0ZWRcIlxyXG4gICAgKGNsaWNrKT1cInNlbGVjdGFibGUgPyBzZWxlY3RSb3cocm93KSA6ICdqYXZhc2NyaXB0OjsnXCJcclxuICA+PC9wby1jaGVja2JveD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudEhlYWRlclRlbXBsYXRlIGxldC1jb2x1bW4+XHJcbiAgPHNwYW5cclxuICAgICNjb2x1bW5IZWFkZXJcclxuICAgIGNsYXNzPVwicG8tdGFibGUtaGVhZGVyLWVsbGlwc2lzXCJcclxuICAgIFtwLXRvb2x0aXBdPVwidG9vbHRpcFRleHRcIlxyXG4gICAgKG1vdXNlZW50ZXIpPVwidG9vbHRpcE1vdXNlRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAobW91c2VsZWF2ZSk9XCJ0b29sdGlwTW91c2VMZWF2ZSgpXCJcclxuICA+XHJcbiAgICB7eyBjb2x1bW4ubGFiZWwgfHwgKGNvbHVtbi5wcm9wZXJ0eSB8IHRpdGxlY2FzZSkgfX1cclxuICA8L3NwYW4+XHJcbiAgPHNwYW5cclxuICAgICpuZ0lmPVwic29ydCAmJiBjb2x1bW4uc29ydGFibGUgIT09IGZhbHNlXCJcclxuICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItaWNvbi11bnNlbGVjdGVkXT1cIkpTT04uc3RyaW5naWZ5KHNvcnRlZENvbHVtbj8ucHJvcGVydHkpICE9PSBKU09OLnN0cmluZ2lmeShjb2x1bW4pXCJcclxuICAgIFtjbGFzcy5wby10YWJsZS1oZWFkZXItaWNvbi1kZXNjZW5kaW5nXT1cIlxyXG4gICAgICBKU09OLnN0cmluZ2lmeShzb3J0ZWRDb2x1bW4/LnByb3BlcnR5KSA9PT0gSlNPTi5zdHJpbmdpZnkoY29sdW1uKSAmJiBzb3J0ZWRDb2x1bW4uYXNjZW5kaW5nXHJcbiAgICBcIlxyXG4gICAgW2NsYXNzLnBvLXRhYmxlLWhlYWRlci1pY29uLWFzY2VuZGluZ109XCJcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoc29ydGVkQ29sdW1uPy5wcm9wZXJ0eSkgPT09IEpTT04uc3RyaW5naWZ5KGNvbHVtbikgJiYgIXNvcnRlZENvbHVtbi5hc2NlbmRpbmdcclxuICAgIFwiXHJcbiAgPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbm9Db2x1bW5zV2l0aEhlaWdodD5cclxuICA8ZGl2IGNsYXNzPVwicG8tdGFibGUtaGVhZGVyLWZpeGVkLWlubmVyXCIgW3N0eWxlLndpZHRoLnB4XT1cIm5vQ29sdW1uc0hlYWRlcj8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFwiPlxyXG4gICAge3sgaGFzVmFsaWRDb2x1bW5zID8gbGl0ZXJhbHMubm9WaXNpYmxlQ29sdW1uIDogbGl0ZXJhbHMubm9Db2x1bW5zIH19XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI25vQ29sdW1uc1dpdGhvdXRIZWlnaHQ+XHJcbiAge3sgaGFzVmFsaWRDb2x1bW5zID8gbGl0ZXJhbHMubm9WaXNpYmxlQ29sdW1uIDogbGl0ZXJhbHMubm9Db2x1bW5zIH19XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIFRlbXBsYXRlIGRlIGHDp8O1ZXMgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjQWN0aW9uc0NvbHVtblRlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtcm93SW5kZXg9XCJyb3dJbmRleFwiPlxyXG4gIDx0ZFxyXG4gICAgKm5nSWY9XCJpc1NpbmdsZUFjdGlvblwiXHJcbiAgICBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbiBwby10YWJsZS1jb2x1bW4tc2luZ2xlLWFjdGlvblwiXHJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwiaGVpZ2h0ICYmIGFjdGlvblJpZ2h0ID8gZ2V0V2lkdGhDb2x1bW5NYW5hZ2VyKCkgOiAnJ1wiXHJcbiAgICBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImhlaWdodCAmJiAhYWN0aW9uUmlnaHQgPyBnZXRDb2x1bW5XaWR0aEFjdGlvbnNMZWZ0KCkgOiAnJ1wiXHJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwiaGVpZ2h0ICYmICFhY3Rpb25SaWdodCA/IGdldENvbHVtbldpZHRoQWN0aW9uc0xlZnQoKSA6ICcnXCJcclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgICpuZ0lmPVwiZmlyc3RBY3Rpb24udmlzaWJsZSAhPT0gZmFsc2VcIlxyXG4gICAgICBjbGFzcz1cInBvLXRhYmxlLXNpbmdsZS1hY3Rpb24gcG8tY2xpY2thYmxlXCJcclxuICAgICAgW2NsYXNzLnBvLXRhYmxlLWFjdGlvbi1kaXNhYmxlZF09XCJmaXJzdEFjdGlvbi5kaXNhYmxlZCA/IHZhbGlkYXRlVGFibGVBY3Rpb24ocm93LCBmaXJzdEFjdGlvbikgOiBmYWxzZVwiXHJcbiAgICAgIChjbGljayk9XCJleGVjdXRlVGFibGVBY3Rpb24ocm93LCBmaXJzdEFjdGlvbilcIlxyXG4gICAgPlxyXG4gICAgICA8cG8taWNvbiAqbmdJZj1cImZpcnN0QWN0aW9uLmljb25cIiBjbGFzcz1cInBvLXRhYmxlLXNpbmdsZS1hY3Rpb24tY29udGVudFwiIFtwLWljb25dPVwiZmlyc3RBY3Rpb24uaWNvblwiPjwvcG8taWNvbj5cclxuICAgICAge3sgZmlyc3RBY3Rpb24ubGFiZWwgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvdGQ+XHJcblxyXG4gIDx0ZCAqbmdJZj1cInZpc2libGVBY3Rpb25zLmxlbmd0aCA+IDFcIiBjbGFzcz1cInBvLXRhYmxlLWNvbHVtbi1hY3Rpb25zXCI+XHJcbiAgICA8c3BhbiAjcG9wdXBUYXJnZXQgY2xhc3M9XCJwby1pY29uIHBvLWljb24tbW9yZSBwby1jbGlja2FibGVcIiAoY2xpY2spPVwidG9nZ2xlUG9wdXAocm93LCBwb3B1cFRhcmdldClcIj48L3NwYW4+XHJcbiAgPC90ZD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxwby10YWJsZS1jb2x1bW4tbWFuYWdlclxyXG4gICpuZ0lmPVwiIWhpZGVDb2x1bW5zTWFuYWdlclwiXHJcbiAgW3AtY29sdW1uc109XCJjb2x1bW5zXCJcclxuICBbcC1tYXgtY29sdW1uc109XCJtYXhDb2x1bW5zXCJcclxuICBbcC10YXJnZXRdPVwiaGVpZ2h0ID8gY29sdW1uTWFuYWdlclRhcmdldEZpeGVkIDogY29sdW1uTWFuYWdlclRhcmdldFwiXHJcbiAgW3AtbGFzdC12aXNpYmxlLWNvbHVtbnMtc2VsZWN0ZWRdPVwibGFzdFZpc2libGVDb2x1bW5zU2VsZWN0ZWRcIlxyXG4gIChwLXZpc2libGUtY29sdW1ucy1jaGFuZ2UpPVwib25WaXNpYmxlQ29sdW1uc0NoYW5nZSgkZXZlbnQpXCJcclxuICAocC1jaGFuZ2UtdmlzaWJsZS1jb2x1bW5zKT1cIm9uQ2hhbmdlVmlzaWJsZUNvbHVtbnMoJGV2ZW50KVwiXHJcbiAgW3AtY29sdW1ucy1kZWZhdWx0XT1cImluaXRpYWxDb2x1bW5zXCJcclxuICAocC1pbml0aWFsLWNvbHVtbnMpPVwib25Db2x1bW5SZXN0b3JlTWFuYWdlcigkZXZlbnQpXCJcclxuPlxyXG48L3BvLXRhYmxlLWNvbHVtbi1tYW5hZ2VyPlxyXG4iXX0=