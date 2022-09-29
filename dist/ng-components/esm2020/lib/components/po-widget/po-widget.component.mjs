import { Component } from '@angular/core';
import { PoWidgetBaseComponent } from './po-widget-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-container/po-container.component";
function PoWidgetComponent_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵlistener("click", function PoWidgetComponent_div_1_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.runTitleAction($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.title, " ");
} }
function PoWidgetComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate(ctx_r4.title);
} }
function PoWidgetComponent_div_1_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵlistener("click", function PoWidgetComponent_div_1_div_4_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r10.settingOutput($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate1("id", "settingAction-", ctx_r8.id, "");
} }
function PoWidgetComponent_div_1_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵlistener("click", function PoWidgetComponent_div_1_div_4_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r12.openHelp($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate1("id", "helpLink-", ctx_r9.id, "");
} }
function PoWidgetComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, PoWidgetComponent_div_1_div_4_span_1_Template, 1, 1, "span", 11);
    i0.ɵɵtemplate(2, PoWidgetComponent_div_1_div_4_span_2_Template, 1, 1, "span", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.setting.observers[0]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.help);
} }
function PoWidgetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, PoWidgetComponent_div_1_span_1_Template, 2, 1, "span", 6);
    i0.ɵɵtemplate(2, PoWidgetComponent_div_1_ng_template_2_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PoWidgetComponent_div_1_div_4_Template, 3, 2, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showTitleAction)("ngIfElse", _r3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.setting.observers[0] || ctx_r0.help);
} }
function PoWidgetComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "a", 19);
    i0.ɵɵlistener("click", function PoWidgetComponent_div_5_div_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.runPrimaryAction($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("id", "primaryAct-", ctx_r14.id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.primaryLabel);
} }
function PoWidgetComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "a", 19);
    i0.ɵɵlistener("click", function PoWidgetComponent_div_5_div_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.runPrimaryAction($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("id", "primaryAct-", ctx_r15.id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r15.primaryLabel);
} }
function PoWidgetComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "a", 19);
    i0.ɵɵlistener("click", function PoWidgetComponent_div_5_div_3_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.runSecondaryAction($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("id", "secondaryAct-", ctx_r16.id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r16.secondaryLabel);
} }
function PoWidgetComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, PoWidgetComponent_div_5_div_1_Template, 3, 2, "div", 16);
    i0.ɵɵtemplate(2, PoWidgetComponent_div_5_div_2_Template, 3, 2, "div", 17);
    i0.ɵɵtemplate(3, PoWidgetComponent_div_5_div_3_Template, 3, 2, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.secondaryLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.secondaryLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.secondaryLabel);
} }
const _c0 = ["*"];
/**
 * @docsExtends PoWidgetBaseComponent
 *
 * @example
 *
 * <example name="po-widget-basic" title="PO Widget Basic">
 *  <file name="sample-po-widget-basic/sample-po-widget-basic.component.html"> </file>
 *  <file name="sample-po-widget-basic/sample-po-widget-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-widget-labs" title="PO Widget Labs">
 *  <file name="sample-po-widget-labs/sample-po-widget-labs.component.html"> </file>
 *  <file name="sample-po-widget-labs/sample-po-widget-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-widget-finance-dashboard" title="PO Widget - Finance dashboard">
 *  <file name="sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"> </file>
 *  <file name="sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"> </file>
 * </example>
 *
 * <example name="po-widget-card" title="PO Widget - Card">
 *  <file name="sample-po-widget-card/sample-po-widget-card.component.html"> </file>
 *  <file name="sample-po-widget-card/sample-po-widget-card.component.ts"> </file>
 * </example>
 *
 */
export class PoWidgetComponent extends PoWidgetBaseComponent {
    constructor(viewRef) {
        super();
    }
    get showTitleAction() {
        return !!this.titleAction.observers[0];
    }
    ngOnInit() {
        this.setHeight(this.height);
    }
    hasTitleHelpOrSetting() {
        return !!this.title || !!this.help || !!this.setting.observers[0];
    }
    onClick(event) {
        if (!this.disabled) {
            this.click.emit(event);
        }
    }
    openHelp(event) {
        if (!this.disabled) {
            event.stopPropagation();
            window.open(this.help, '_blank');
        }
    }
    runPrimaryAction(event) {
        if (!this.disabled) {
            event.stopPropagation();
            this.primaryAction.emit();
        }
    }
    runSecondaryAction(event) {
        if (!this.disabled) {
            event.stopPropagation();
            this.secondaryAction.emit();
        }
    }
    runTitleAction(event) {
        if (!this.disabled) {
            event.stopPropagation();
            this.titleAction.emit();
        }
    }
    setHeight(height) {
        if (height) {
            let bodyHeight = height;
            const hasSettingOrHelp = this.setting.observers.length > 0 || this.help;
            const footerBorder = 1;
            const footerHeight = 40;
            const settingHeight = 37;
            const shadowHeight = 2;
            const titleHeight = 50;
            if (this.noShadow) {
                bodyHeight -= shadowHeight;
            }
            if (hasSettingOrHelp && !this.title) {
                bodyHeight -= settingHeight;
            }
            if (this.title) {
                bodyHeight -= titleHeight;
            }
            if (this.primaryLabel) {
                bodyHeight -= footerHeight + footerBorder;
            }
            this.containerHeight = `${bodyHeight}px`;
        }
        else {
            this.containerHeight = `auto`;
        }
    }
    settingOutput(event) {
        if (!this.disabled) {
            event.stopPropagation();
            this.setting.emit();
        }
    }
}
PoWidgetComponent.ɵfac = function PoWidgetComponent_Factory(t) { return new (t || PoWidgetComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
PoWidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoWidgetComponent, selectors: [["po-widget"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 6, vars: 15, consts: [[3, "click"], ["class", "po-widget-header", 4, "ngIf"], ["p-no-border", "", 3, "p-height"], [1, "po-widget-body"], ["class", "po-widget-footer", 4, "ngIf"], [1, "po-widget-header"], ["class", "po-widget-title-action", 3, "click", 4, "ngIf", "ngIfElse"], ["noTitleAction", ""], ["class", "po-pull-right", 4, "ngIf"], [1, "po-widget-title-action", 3, "click"], [1, "po-pull-right"], ["class", "po-clickable po-icon po-icon-settings", 3, "id", "click", 4, "ngIf"], ["class", "po-clickable po-icon po-icon-help", 3, "id", "click", 4, "ngIf"], [1, "po-clickable", "po-icon", "po-icon-settings", 3, "id", "click"], [1, "po-clickable", "po-icon", "po-icon-help", 3, "id", "click"], [1, "po-widget-footer"], ["class", "po-widget-xl", 4, "ngIf"], ["class", "po-widget-md", 4, "ngIf"], [1, "po-widget-xl"], [1, "po-widget-action", 3, "id", "click"], [1, "po-widget-md"]], template: function PoWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoWidgetComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        i0.ɵɵtemplate(1, PoWidgetComponent_div_1_Template, 5, 3, "div", 1);
        i0.ɵɵelementStart(2, "po-container", 2)(3, "div", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(5, PoWidgetComponent_div_5_Template, 4, 3, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("background-image", ctx.background ? "url(" + ctx.background + ")" : undefined);
        i0.ɵɵclassProp("po-clickable", ctx.click.observers.length)("po-widget", !ctx.primary)("po-widget-disabled", ctx.disabled)("po-widget-primary", ctx.primary)("po-widget-no-shadow", ctx.noShadow);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasTitleHelpOrSetting());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-height", ctx.containerHeight);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.primaryLabel);
    } }, dependencies: [i1.NgIf, i2.PoContainerComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoWidgetComponent, [{
        type: Component,
        args: [{ selector: 'po-widget', template: "<div\r\n  [class.po-clickable]=\"click.observers.length\"\r\n  [class.po-widget]=\"!primary\"\r\n  [class.po-widget-disabled]=\"disabled\"\r\n  [class.po-widget-primary]=\"primary\"\r\n  [class.po-widget-no-shadow]=\"noShadow\"\r\n  [style.background-image]=\"background ? 'url(' + background + ')' : undefined\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <div *ngIf=\"hasTitleHelpOrSetting()\" class=\"po-widget-header\">\r\n    <span *ngIf=\"showTitleAction; else noTitleAction\" class=\"po-widget-title-action\" (click)=\"runTitleAction($event)\">\r\n      {{ title }}\r\n    </span>\r\n    <ng-template #noTitleAction>{{ title }}</ng-template>\r\n\r\n    <div *ngIf=\"setting.observers[0] || help\" class=\"po-pull-right\">\r\n      <span\r\n        id=\"settingAction-{{ id }}\"\r\n        *ngIf=\"setting.observers[0]\"\r\n        class=\"po-clickable po-icon po-icon-settings\"\r\n        (click)=\"settingOutput($event)\"\r\n      >\r\n      </span>\r\n      <span id=\"helpLink-{{ id }}\" *ngIf=\"help\" class=\"po-clickable po-icon po-icon-help\" (click)=\"openHelp($event)\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <po-container p-no-border [p-height]=\"containerHeight\">\r\n    <div class=\"po-widget-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </po-container>\r\n\r\n  <div *ngIf=\"primaryLabel\" class=\"po-widget-footer\">\r\n    <div class=\"po-widget-xl\" *ngIf=\"!secondaryLabel\">\r\n      <a class=\"po-widget-action\" id=\"primaryAct-{{ id }}\" (click)=\"runPrimaryAction($event)\">{{ primaryLabel }}</a>\r\n    </div>\r\n\r\n    <div class=\"po-widget-md\" *ngIf=\"secondaryLabel\">\r\n      <a class=\"po-widget-action\" id=\"primaryAct-{{ id }}\" (click)=\"runPrimaryAction($event)\">{{ primaryLabel }}</a>\r\n    </div>\r\n    <div class=\"po-widget-md\" *ngIf=\"secondaryLabel\">\r\n      <a class=\"po-widget-action\" id=\"secondaryAct-{{ id }}\" (click)=\"runSecondaryAction($event)\">{{\r\n        secondaryLabel\r\n      }}</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby13aWRnZXQvcG8td2lkZ2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby13aWRnZXQvcG8td2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7SUNRL0QsK0JBQWtIO0lBQWpDLDBLQUFTLGVBQUEsNkJBQXNCLENBQUEsSUFBQztJQUMvRyxZQUNGO0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSw2Q0FDRjs7O0lBQzRCLFlBQVc7OztJQUFYLGtDQUFXOzs7O0lBR3JDLGdDQUtDO0lBREMsa0xBQVMsZUFBQSw2QkFBcUIsQ0FBQSxJQUFDO0lBRWpDLGlCQUFPOzs7SUFMTCxnRUFBMkI7Ozs7SUFNN0IsZ0NBQStHO0lBQTNCLGtMQUFTLGVBQUEsd0JBQWdCLENBQUEsSUFBQztJQUM5RyxpQkFBTzs7O0lBREQsMkRBQXNCOzs7SUFSOUIsK0JBQWdFO0lBQzlELGlGQU1PO0lBQ1AsaUZBQ087SUFDVCxpQkFBTTs7O0lBUEQsZUFBMEI7SUFBMUIsa0RBQTBCO0lBS0MsZUFBVTtJQUFWLGtDQUFVOzs7SUFkNUMsOEJBQThEO0lBQzVELDBFQUVPO0lBQ1AseUhBQXFEO0lBRXJELHdFQVVNO0lBQ1IsaUJBQU07Ozs7SUFoQkcsZUFBdUI7SUFBdkIsNkNBQXVCLGlCQUFBO0lBS3hCLGVBQWtDO0lBQWxDLGlFQUFrQzs7OztJQW9CeEMsK0JBQWtELFlBQUE7SUFDSyx3S0FBUyxlQUFBLGdDQUF3QixDQUFBLElBQUM7SUFBQyxZQUFrQjtJQUFBLGlCQUFJLEVBQUE7OztJQUFsRixlQUF3QjtJQUF4Qiw4REFBd0I7SUFBb0MsZUFBa0I7SUFBbEIsMENBQWtCOzs7O0lBRzVHLCtCQUFpRCxZQUFBO0lBQ00sd0tBQVMsZUFBQSxnQ0FBd0IsQ0FBQSxJQUFDO0lBQUMsWUFBa0I7SUFBQSxpQkFBSSxFQUFBOzs7SUFBbEYsZUFBd0I7SUFBeEIsOERBQXdCO0lBQW9DLGVBQWtCO0lBQWxCLDBDQUFrQjs7OztJQUU1RywrQkFBaUQsWUFBQTtJQUNRLHdLQUFTLGVBQUEsa0NBQTBCLENBQUEsSUFBQztJQUFDLFlBRTFGO0lBQUEsaUJBQUksRUFBQTs7O0lBRnNCLGVBQTBCO0lBQTFCLGdFQUEwQjtJQUFzQyxlQUUxRjtJQUYwRiw0Q0FFMUY7OztJQVhOLCtCQUFtRDtJQUNqRCx5RUFFTTtJQUVOLHlFQUVNO0lBQ04seUVBSU07SUFDUixpQkFBTTs7O0lBWnVCLGVBQXFCO0lBQXJCLDZDQUFxQjtJQUlyQixlQUFvQjtJQUFwQiw0Q0FBb0I7SUFHcEIsZUFBb0I7SUFBcEIsNENBQW9COzs7QUR0Q25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBS0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFxQjtJQUsxRCxZQUFZLE9BQXlCO1FBQ25DLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQU5ELElBQUksZUFBZTtRQUNqQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBaUI7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFpQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxjQUFjLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEUsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDekIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUV2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLFVBQVUsSUFBSSxZQUFZLENBQUM7YUFDNUI7WUFFRCxJQUFJLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbkMsVUFBVSxJQUFJLGFBQWEsQ0FBQzthQUM3QjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxVQUFVLElBQUksV0FBVyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixVQUFVLElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQzthQUMzQztZQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7a0ZBeEZVLGlCQUFpQjtvRUFBakIsaUJBQWlCOztRQ2xDOUIsOEJBUUM7UUFEQyxpR0FBUyxtQkFBZSxJQUFDO1FBRXpCLGtFQWlCTTtRQUVOLHVDQUF1RCxhQUFBO1FBRW5ELGtCQUF5QjtRQUMzQixpQkFBTSxFQUFBO1FBR1Isa0VBYU07UUFDUixpQkFBTTs7UUExQ0osOEZBQTZFO1FBTDdFLDBEQUE2QywyQkFBQSxvQ0FBQSxrQ0FBQSxxQ0FBQTtRQVF2QyxlQUE2QjtRQUE3QixrREFBNkI7UUFtQlQsZUFBNEI7UUFBNUIsOENBQTRCO1FBTWhELGVBQWtCO1FBQWxCLHVDQUFrQjs7dUZEQWIsaUJBQWlCO2NBSjdCLFNBQVM7MkJBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb1dpZGdldEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXdpZGdldC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvV2lkZ2V0QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8td2lkZ2V0LWJhc2ljXCIgdGl0bGU9XCJQTyBXaWRnZXQgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8td2lkZ2V0LWJhc2ljL3NhbXBsZS1wby13aWRnZXQtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby13aWRnZXQtYmFzaWMvc2FtcGxlLXBvLXdpZGdldC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby13aWRnZXQtbGFic1wiIHRpdGxlPVwiUE8gV2lkZ2V0IExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8td2lkZ2V0LWxhYnMvc2FtcGxlLXBvLXdpZGdldC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8td2lkZ2V0LWxhYnMvc2FtcGxlLXBvLXdpZGdldC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXdpZGdldC1maW5hbmNlLWRhc2hib2FyZFwiIHRpdGxlPVwiUE8gV2lkZ2V0IC0gRmluYW5jZSBkYXNoYm9hcmRcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8td2lkZ2V0LWZpbmFuY2UtZGFzaGJvYXJkL3NhbXBsZS1wby13aWRnZXQtZmluYW5jZS1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby13aWRnZXQtZmluYW5jZS1kYXNoYm9hcmQvc2FtcGxlLXBvLXdpZGdldC1maW5hbmNlLWRhc2hib2FyZC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby13aWRnZXQtY2FyZFwiIHRpdGxlPVwiUE8gV2lkZ2V0IC0gQ2FyZFwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby13aWRnZXQtY2FyZC9zYW1wbGUtcG8td2lkZ2V0LWNhcmQuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby13aWRnZXQtY2FyZC9zYW1wbGUtcG8td2lkZ2V0LWNhcmQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby13aWRnZXQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1dpZGdldENvbXBvbmVudCBleHRlbmRzIFBvV2lkZ2V0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ2V0IHNob3dUaXRsZUFjdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMudGl0bGVBY3Rpb24ub2JzZXJ2ZXJzWzBdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iodmlld1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgaGFzVGl0bGVIZWxwT3JTZXR0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy50aXRsZSB8fCAhIXRoaXMuaGVscCB8fCAhIXRoaXMuc2V0dGluZy5vYnNlcnZlcnNbMF07XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGljay5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5IZWxwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaGVscCwgJ19ibGFuaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcnVuUHJpbWFyeUFjdGlvbihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnByaW1hcnlBY3Rpb24uZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcnVuU2Vjb25kYXJ5QWN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5QWN0aW9uLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJ1blRpdGxlQWN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMudGl0bGVBY3Rpb24uZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaGVpZ2h0KSB7XHJcbiAgICAgIGxldCBib2R5SGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICBjb25zdCBoYXNTZXR0aW5nT3JIZWxwID0gdGhpcy5zZXR0aW5nLm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMuaGVscDtcclxuICAgICAgY29uc3QgZm9vdGVyQm9yZGVyID0gMTtcclxuICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gNDA7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdIZWlnaHQgPSAzNztcclxuICAgICAgY29uc3Qgc2hhZG93SGVpZ2h0ID0gMjtcclxuICAgICAgY29uc3QgdGl0bGVIZWlnaHQgPSA1MDtcclxuXHJcbiAgICAgIGlmICh0aGlzLm5vU2hhZG93KSB7XHJcbiAgICAgICAgYm9keUhlaWdodCAtPSBzaGFkb3dIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChoYXNTZXR0aW5nT3JIZWxwICYmICF0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgYm9keUhlaWdodCAtPSBzZXR0aW5nSGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50aXRsZSkge1xyXG4gICAgICAgIGJvZHlIZWlnaHQgLT0gdGl0bGVIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByaW1hcnlMYWJlbCkge1xyXG4gICAgICAgIGJvZHlIZWlnaHQgLT0gZm9vdGVySGVpZ2h0ICsgZm9vdGVyQm9yZGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IGAke2JvZHlIZWlnaHR9cHhgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSBgYXV0b2A7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXR0aW5nT3V0cHV0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0dGluZy5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBbY2xhc3MucG8tY2xpY2thYmxlXT1cImNsaWNrLm9ic2VydmVycy5sZW5ndGhcIlxyXG4gIFtjbGFzcy5wby13aWRnZXRdPVwiIXByaW1hcnlcIlxyXG4gIFtjbGFzcy5wby13aWRnZXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtjbGFzcy5wby13aWRnZXQtcHJpbWFyeV09XCJwcmltYXJ5XCJcclxuICBbY2xhc3MucG8td2lkZ2V0LW5vLXNoYWRvd109XCJub1NoYWRvd1wiXHJcbiAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiYmFja2dyb3VuZCA/ICd1cmwoJyArIGJhY2tncm91bmQgKyAnKScgOiB1bmRlZmluZWRcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiAqbmdJZj1cImhhc1RpdGxlSGVscE9yU2V0dGluZygpXCIgY2xhc3M9XCJwby13aWRnZXQtaGVhZGVyXCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cInNob3dUaXRsZUFjdGlvbjsgZWxzZSBub1RpdGxlQWN0aW9uXCIgY2xhc3M9XCJwby13aWRnZXQtdGl0bGUtYWN0aW9uXCIgKGNsaWNrKT1cInJ1blRpdGxlQWN0aW9uKCRldmVudClcIj5cclxuICAgICAge3sgdGl0bGUgfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm9UaXRsZUFjdGlvbj57eyB0aXRsZSB9fTwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cInNldHRpbmcub2JzZXJ2ZXJzWzBdIHx8IGhlbHBcIiBjbGFzcz1cInBvLXB1bGwtcmlnaHRcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBpZD1cInNldHRpbmdBY3Rpb24te3sgaWQgfX1cIlxyXG4gICAgICAgICpuZ0lmPVwic2V0dGluZy5vYnNlcnZlcnNbMF1cIlxyXG4gICAgICAgIGNsYXNzPVwicG8tY2xpY2thYmxlIHBvLWljb24gcG8taWNvbi1zZXR0aW5nc1wiXHJcbiAgICAgICAgKGNsaWNrKT1cInNldHRpbmdPdXRwdXQoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBpZD1cImhlbHBMaW5rLXt7IGlkIH19XCIgKm5nSWY9XCJoZWxwXCIgY2xhc3M9XCJwby1jbGlja2FibGUgcG8taWNvbiBwby1pY29uLWhlbHBcIiAoY2xpY2spPVwib3BlbkhlbHAoJGV2ZW50KVwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWNvbnRhaW5lciBwLW5vLWJvcmRlciBbcC1oZWlnaHRdPVwiY29udGFpbmVySGVpZ2h0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8td2lkZ2V0LWJvZHlcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wby1jb250YWluZXI+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJwcmltYXJ5TGFiZWxcIiBjbGFzcz1cInBvLXdpZGdldC1mb290ZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby13aWRnZXQteGxcIiAqbmdJZj1cIiFzZWNvbmRhcnlMYWJlbFwiPlxyXG4gICAgICA8YSBjbGFzcz1cInBvLXdpZGdldC1hY3Rpb25cIiBpZD1cInByaW1hcnlBY3Qte3sgaWQgfX1cIiAoY2xpY2spPVwicnVuUHJpbWFyeUFjdGlvbigkZXZlbnQpXCI+e3sgcHJpbWFyeUxhYmVsIH19PC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXdpZGdldC1tZFwiICpuZ0lmPVwic2Vjb25kYXJ5TGFiZWxcIj5cclxuICAgICAgPGEgY2xhc3M9XCJwby13aWRnZXQtYWN0aW9uXCIgaWQ9XCJwcmltYXJ5QWN0LXt7IGlkIH19XCIgKGNsaWNrKT1cInJ1blByaW1hcnlBY3Rpb24oJGV2ZW50KVwiPnt7IHByaW1hcnlMYWJlbCB9fTwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXdpZGdldC1tZFwiICpuZ0lmPVwic2Vjb25kYXJ5TGFiZWxcIj5cclxuICAgICAgPGEgY2xhc3M9XCJwby13aWRnZXQtYWN0aW9uXCIgaWQ9XCJzZWNvbmRhcnlBY3Qte3sgaWQgfX1cIiAoY2xpY2spPVwicnVuU2Vjb25kYXJ5QWN0aW9uKCRldmVudClcIj57e1xyXG4gICAgICAgIHNlY29uZGFyeUxhYmVsXHJcbiAgICAgIH19PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=