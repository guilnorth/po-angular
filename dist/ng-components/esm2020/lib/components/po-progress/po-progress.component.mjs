import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoProgressBaseComponent } from './po-progress-base.component';
import { PoProgressStatus } from './enums/po-progress-status.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-progress-bar/po-progress-bar.component";
function PoProgressComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.text, " ");
} }
function PoProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
} }
function PoProgressComponent_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("po-progress-info-icon po-icon ", ctx_r3.infoIcon, "");
} }
function PoProgressComponent_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.info);
} }
function PoProgressComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function PoProgressComponent_div_4_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.emitRetry()); });
    i0.ɵɵelementEnd();
} }
function PoProgressComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function PoProgressComponent_div_4_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.emitCancellation()); });
    i0.ɵɵelementEnd();
} }
function PoProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, PoProgressComponent_div_4_span_1_Template, 1, 3, "span", 9);
    i0.ɵɵtemplate(2, PoProgressComponent_div_4_span_2_Template, 2, 1, "span", 10);
    i0.ɵɵtemplate(3, PoProgressComponent_div_4_button_3_Template, 1, 0, "button", 11);
    i0.ɵɵtemplate(4, PoProgressComponent_div_4_button_4_Template, 1, 0, "button", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.infoIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.info);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isAllowRetry);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isAllowCancel);
} }
/**
 * @docsExtends PoProgressBaseComponent
 *
 * @example
 * <example name="po-progress-basic" title="PO Progress Basic">
 *   <file name="sample-po-progress-basic/sample-po-progress-basic.component.html"> </file>
 *   <file name="sample-po-progress-basic/sample-po-progress-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-progress-labs" title="PO Progress Labs">
 *   <file name="sample-po-progress-labs/sample-po-progress-labs.component.html"> </file>
 *   <file name="sample-po-progress-labs/sample-po-progress-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-progress-publication" title="PO Progress - Publication">
 *   <file name="sample-po-progress-publication/sample-po-progress-publication.component.html"> </file>
 *   <file name="sample-po-progress-publication/sample-po-progress-publication.component.ts"> </file>
 * </example>
 */
export class PoProgressComponent extends PoProgressBaseComponent {
    get isAllowCancel() {
        return !!this.cancel.observers.length && this.status !== PoProgressStatus.Success;
    }
    get isAllowProgressInfo() {
        return !!(this.info || this.infoIcon || this.isAllowCancel || this.isAllowRetry);
    }
    get isAllowRetry() {
        return !!this.retry.observers.length && this.status === PoProgressStatus.Error;
    }
    get statusClass() {
        if (this.status === PoProgressStatus.Success) {
            return 'po-progress-success';
        }
        if (this.status === PoProgressStatus.Error) {
            return 'po-progress-error';
        }
        return 'po-progress-default';
    }
    emitCancellation() {
        this.cancel.emit(this.status);
    }
    emitRetry() {
        this.retry.emit();
    }
}
PoProgressComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoProgressComponent_BaseFactory; return function PoProgressComponent_Factory(t) { return (ɵPoProgressComponent_BaseFactory || (ɵPoProgressComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoProgressComponent)))(t || PoProgressComponent); }; }();
PoProgressComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoProgressComponent, selectors: [["po-progress"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 6, consts: [[1, "po-progress", 3, "ngClass"], ["class", "po-progress-description-mobile po-progress-description-text", 4, "ngIf"], [1, "po-progress-bar", 3, "p-indeterminate", "p-value"], ["class", "po-progress-description", 4, "ngIf"], ["class", "po-progress-info", 4, "ngIf"], [1, "po-progress-description-mobile", "po-progress-description-text"], [1, "po-progress-description"], [1, "po-progress-description-text"], [1, "po-progress-info"], [3, "class", 4, "ngIf"], ["class", "po-progress-info-text", 4, "ngIf"], ["class", "po-progress-info-icon-action po-icon po-icon-refresh po-clickable", 3, "click", 4, "ngIf"], ["class", "po-progress-info-icon-action po-icon po-icon-close po-clickable", 3, "click", 4, "ngIf"], [1, "po-progress-info-text"], [1, "po-progress-info-icon-action", "po-icon", "po-icon-refresh", "po-clickable", 3, "click"], [1, "po-progress-info-icon-action", "po-icon", "po-icon-close", "po-clickable", 3, "click"]], template: function PoProgressComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoProgressComponent_label_1_Template, 2, 1, "label", 1);
        i0.ɵɵelement(2, "po-progress-bar", 2);
        i0.ɵɵtemplate(3, PoProgressComponent_div_3_Template, 3, 1, "div", 3);
        i0.ɵɵtemplate(4, PoProgressComponent_div_4_Template, 5, 4, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.statusClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-indeterminate", ctx.indeterminate)("p-value", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAllowProgressInfo);
    } }, dependencies: [i1.NgClass, i1.NgIf, i2.PoProgressBarComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoProgressComponent, [{
        type: Component,
        args: [{ selector: 'po-progress', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-progress\" [ngClass]=\"statusClass\">\r\n  <label *ngIf=\"text\" class=\"po-progress-description-mobile po-progress-description-text\">\r\n    {{ text }}\r\n  </label>\r\n\r\n  <po-progress-bar class=\"po-progress-bar\" [p-indeterminate]=\"indeterminate\" [p-value]=\"value\"> </po-progress-bar>\r\n\r\n  <div *ngIf=\"text\" class=\"po-progress-description\">\r\n    <label class=\"po-progress-description-text\">\r\n      {{ text }}\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"isAllowProgressInfo\" class=\"po-progress-info\">\r\n    <span *ngIf=\"infoIcon\" class=\"po-progress-info-icon po-icon {{ infoIcon }}\"></span>\r\n    <span *ngIf=\"info\" class=\"po-progress-info-text\">{{ info }}</span>\r\n\r\n    <button\r\n      *ngIf=\"isAllowRetry\"\r\n      class=\"po-progress-info-icon-action po-icon po-icon-refresh po-clickable\"\r\n      (click)=\"emitRetry()\"\r\n    ></button>\r\n\r\n    <button\r\n      *ngIf=\"isAllowCancel\"\r\n      class=\"po-progress-info-icon-action po-icon po-icon-close po-clickable\"\r\n      (click)=\"emitCancellation()\"\r\n    ></button>\r\n  </div>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXByb2dyZXNzL3BvLXByb2dyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wcm9ncmVzcy9wby1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztJQ0ZqRSxnQ0FBd0Y7SUFDdEYsWUFDRjtJQUFBLGlCQUFROzs7SUFETixlQUNGO0lBREUsNENBQ0Y7OztJQUlBLDhCQUFrRCxlQUFBO0lBRTlDLFlBQ0Y7SUFBQSxpQkFBUSxFQUFBOzs7SUFETixlQUNGO0lBREUsNENBQ0Y7OztJQUlBLHVCQUFtRjs7O0lBQTVELGdGQUFvRDs7O0lBQzNFLGdDQUFpRDtJQUFBLFlBQVU7SUFBQSxpQkFBTzs7O0lBQWpCLGVBQVU7SUFBVixpQ0FBVTs7OztJQUUzRCxrQ0FJQztJQURDLDBLQUFTLGVBQUEsa0JBQVcsQ0FBQSxJQUFDO0lBQ3RCLGlCQUFTOzs7O0lBRVYsa0NBSUM7SUFEQywyS0FBUyxlQUFBLHlCQUFrQixDQUFBLElBQUM7SUFDN0IsaUJBQVM7OztJQWRaLDhCQUEwRDtJQUN4RCw0RUFBbUY7SUFDbkYsNkVBQWtFO0lBRWxFLGlGQUlVO0lBRVYsaUZBSVU7SUFDWixpQkFBTTs7O0lBZEcsZUFBYztJQUFkLHNDQUFjO0lBQ2QsZUFBVTtJQUFWLGtDQUFVO0lBR2QsZUFBa0I7SUFBbEIsMENBQWtCO0lBTWxCLGVBQW1CO0lBQW5CLDJDQUFtQjs7QURuQjFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFNSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsdUJBQXVCO0lBQzlELElBQUksYUFBYTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUNwRixDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNqRixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUM1QyxPQUFPLHFCQUFxQixDQUFDO1NBQzlCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUMxQyxPQUFPLG1CQUFtQixDQUFDO1NBQzVCO1FBRUQsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzt1UEEvQlUsbUJBQW1CLFNBQW5CLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDN0JoQyw4QkFBaUQ7UUFDL0Msd0VBRVE7UUFFUixxQ0FBZ0g7UUFFaEgsb0VBSU07UUFFTixvRUFlTTtRQUNSLGlCQUFNOztRQTdCbUIseUNBQXVCO1FBQ3RDLGVBQVU7UUFBViwrQkFBVTtRQUl1QixlQUFpQztRQUFqQyxtREFBaUMsc0JBQUE7UUFFcEUsZUFBVTtRQUFWLCtCQUFVO1FBTVYsZUFBeUI7UUFBekIsOENBQXlCOzt1RkRnQnBCLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGFBQWEsbUJBRU4sdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvUHJvZ3Jlc3NCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wcm9ncmVzcy1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUHJvZ3Jlc3NTdGF0dXMgfSBmcm9tICcuL2VudW1zL3BvLXByb2dyZXNzLXN0YXR1cy5lbnVtJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Qcm9ncmVzc0Jhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXByb2dyZXNzLWJhc2ljXCIgdGl0bGU9XCJQTyBQcm9ncmVzcyBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcHJvZ3Jlc3MtYmFzaWMvc2FtcGxlLXBvLXByb2dyZXNzLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXByb2dyZXNzLWJhc2ljL3NhbXBsZS1wby1wcm9ncmVzcy1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wcm9ncmVzcy1sYWJzXCIgdGl0bGU9XCJQTyBQcm9ncmVzcyBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wcm9ncmVzcy1sYWJzL3NhbXBsZS1wby1wcm9ncmVzcy1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXByb2dyZXNzLWxhYnMvc2FtcGxlLXBvLXByb2dyZXNzLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcHJvZ3Jlc3MtcHVibGljYXRpb25cIiB0aXRsZT1cIlBPIFByb2dyZXNzIC0gUHVibGljYXRpb25cIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXByb2dyZXNzLXB1YmxpY2F0aW9uL3NhbXBsZS1wby1wcm9ncmVzcy1wdWJsaWNhdGlvbi5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wcm9ncmVzcy1wdWJsaWNhdGlvbi9zYW1wbGUtcG8tcHJvZ3Jlc3MtcHVibGljYXRpb24uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wcm9ncmVzcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Qcm9ncmVzc0NvbXBvbmVudCBleHRlbmRzIFBvUHJvZ3Jlc3NCYXNlQ29tcG9uZW50IHtcclxuICBnZXQgaXNBbGxvd0NhbmNlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggJiYgdGhpcy5zdGF0dXMgIT09IFBvUHJvZ3Jlc3NTdGF0dXMuU3VjY2VzcztcclxuICB9XHJcblxyXG4gIGdldCBpc0FsbG93UHJvZ3Jlc3NJbmZvKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuaW5mbyB8fCB0aGlzLmluZm9JY29uIHx8IHRoaXMuaXNBbGxvd0NhbmNlbCB8fCB0aGlzLmlzQWxsb3dSZXRyeSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBbGxvd1JldHJ5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5yZXRyeS5vYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuc3RhdHVzID09PSBQb1Byb2dyZXNzU3RhdHVzLkVycm9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXR1c0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09IFBvUHJvZ3Jlc3NTdGF0dXMuU3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4gJ3BvLXByb2dyZXNzLXN1Y2Nlc3MnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gUG9Qcm9ncmVzc1N0YXR1cy5FcnJvcikge1xyXG4gICAgICByZXR1cm4gJ3BvLXByb2dyZXNzLWVycm9yJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ3BvLXByb2dyZXNzLWRlZmF1bHQnO1xyXG4gIH1cclxuXHJcbiAgZW1pdENhbmNlbGxhdGlvbigpIHtcclxuICAgIHRoaXMuY2FuY2VsLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgZW1pdFJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeS5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1wcm9ncmVzc1wiIFtuZ0NsYXNzXT1cInN0YXR1c0NsYXNzXCI+XHJcbiAgPGxhYmVsICpuZ0lmPVwidGV4dFwiIGNsYXNzPVwicG8tcHJvZ3Jlc3MtZGVzY3JpcHRpb24tbW9iaWxlIHBvLXByb2dyZXNzLWRlc2NyaXB0aW9uLXRleHRcIj5cclxuICAgIHt7IHRleHQgfX1cclxuICA8L2xhYmVsPlxyXG5cclxuICA8cG8tcHJvZ3Jlc3MtYmFyIGNsYXNzPVwicG8tcHJvZ3Jlc3MtYmFyXCIgW3AtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCIgW3AtdmFsdWVdPVwidmFsdWVcIj4gPC9wby1wcm9ncmVzcy1iYXI+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJ0ZXh0XCIgY2xhc3M9XCJwby1wcm9ncmVzcy1kZXNjcmlwdGlvblwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwicG8tcHJvZ3Jlc3MtZGVzY3JpcHRpb24tdGV4dFwiPlxyXG4gICAgICB7eyB0ZXh0IH19XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiaXNBbGxvd1Byb2dyZXNzSW5mb1wiIGNsYXNzPVwicG8tcHJvZ3Jlc3MtaW5mb1wiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJpbmZvSWNvblwiIGNsYXNzPVwicG8tcHJvZ3Jlc3MtaW5mby1pY29uIHBvLWljb24ge3sgaW5mb0ljb24gfX1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cImluZm9cIiBjbGFzcz1cInBvLXByb2dyZXNzLWluZm8tdGV4dFwiPnt7IGluZm8gfX08L3NwYW4+XHJcblxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAqbmdJZj1cImlzQWxsb3dSZXRyeVwiXHJcbiAgICAgIGNsYXNzPVwicG8tcHJvZ3Jlc3MtaW5mby1pY29uLWFjdGlvbiBwby1pY29uIHBvLWljb24tcmVmcmVzaCBwby1jbGlja2FibGVcIlxyXG4gICAgICAoY2xpY2spPVwiZW1pdFJldHJ5KClcIlxyXG4gICAgPjwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b25cclxuICAgICAgKm5nSWY9XCJpc0FsbG93Q2FuY2VsXCJcclxuICAgICAgY2xhc3M9XCJwby1wcm9ncmVzcy1pbmZvLWljb24tYWN0aW9uIHBvLWljb24gcG8taWNvbi1jbG9zZSBwby1jbGlja2FibGVcIlxyXG4gICAgICAoY2xpY2spPVwiZW1pdENhbmNlbGxhdGlvbigpXCJcclxuICAgID48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==