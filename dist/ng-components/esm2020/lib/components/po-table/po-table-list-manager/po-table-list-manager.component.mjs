import { Component, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import { PoCheckboxGroupComponent } from '../../po-field/po-checkbox-group/po-checkbox-group.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../../po-button/po-button.component";
import * as i4 from "../../../directives/po-tooltip/po-tooltip.directive";
import * as i5 from "../../po-field/po-checkbox/po-checkbox.component";
function PoTableListManagerComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 1)(1, "div", 2)(2, "po-checkbox", 3, 4);
    i0.ɵɵlistener("click", function PoTableListManagerComponent_li_0_Template_po_checkbox_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.checkOption(option_r1)); })("keydown", function PoTableListManagerComponent_li_0_Template_po_checkbox_keydown_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onKeyDown($event, option_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5)(5, "po-button", 6);
    i0.ɵɵlistener("click", function PoTableListManagerComponent_li_0_Template_po_button_click_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); ctx_r6.emitChangePosition(option_r1, "up"); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "po-button", 7);
    i0.ɵɵlistener("click", function PoTableListManagerComponent_li_0_Template_po_button_click_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); ctx_r7.emitChangePosition(option_r1, "down"); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-checkbox-group-item-disabled", option_r1.disabled || ctx_r0.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-label", option_r1.label)("p-disabled", option_r1.disabled || ctx_r0.disabled)("p-checkboxValue", ctx_r0.checkedOptions[option_r1.value] === null ? "mixed" : ctx_r0.checkedOptions[option_r1.value])("p-required", ctx_r0.required);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("p-tooltip", ctx_r0.literals.up)("p-disabled", ctx_r0.verifyArrowDisabled(option_r1, "up"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-tooltip", ctx_r0.literals.down)("p-disabled", ctx_r0.verifyArrowDisabled(option_r1, "down"));
} }
export const poTableListManagerLiterals = {
    en: {
        up: 'up',
        down: 'down'
    },
    es: {
        up: 'arriba',
        down: 'abajo'
    },
    pt: {
        up: 'acima',
        down: 'abaixo'
    },
    ru: {
        up: 'вверх',
        down: 'вниз'
    }
};
export class PoTableListManagerComponent extends PoCheckboxGroupComponent {
    constructor(languageService, changeDetector) {
        super(changeDetector);
        this.changePosition = new EventEmitter();
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poTableListManagerLiterals[poLocaleDefault],
            ...poTableListManagerLiterals[language]
        };
    }
    emitChangePosition(option, direction) {
        const infoPosition = { option, direction };
        const hasDisabled = this.verifyArrowDisabled(option, direction);
        if (!hasDisabled) {
            this.changePosition.emit(infoPosition);
        }
    }
    verifyArrowDisabled(option, direction) {
        const index = this.columnsManager.findIndex(el => el.property === option.value);
        const existsDetail = this.columnsManager.some(function (el) {
            return el.property === 'detail';
        });
        const valueSubtraction = existsDetail ? 2 : 1;
        if (index === 0 && direction === 'up') {
            return true;
        }
        if (index === this.columnsManager.length - valueSubtraction && direction === 'down') {
            return true;
        }
        return false;
    }
}
PoTableListManagerComponent.ɵfac = function PoTableListManagerComponent_Factory(t) { return new (t || PoTableListManagerComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoTableListManagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableListManagerComponent, selectors: [["po-table-list-manager"]], inputs: { columnsManager: ["p-columns-manager", "columnsManager"] }, outputs: { changePosition: "p-change-position" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoTableListManagerComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 2, consts: [["class", "po-table-list-manager-container", 3, "po-checkbox-group-item-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "po-table-list-manager-container"], [1, "po-table-list-manager-item"], [3, "p-label", "p-disabled", "p-checkboxValue", "p-required", "click", "keydown"], ["checkboxLabel", ""], [1, "po-container-icons-arrows-columns-manager"], ["p-tooltip-position", "left", "p-kind", "tertiary", "p-icon", "po-icon po-icon-arrow-up", 3, "p-tooltip", "p-disabled", "click"], ["p-tooltip-position", "top", "p-kind", "tertiary", "p-icon", "po-icon po-icon-arrow-down", 3, "p-tooltip", "p-disabled", "click"]], template: function PoTableListManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoTableListManagerComponent_li_0_Template, 7, 10, "li", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.checkboxGroupOptionsView)("ngForTrackBy", ctx.trackByFn);
    } }, dependencies: [i2.NgForOf, i3.PoButtonComponent, i4.PoTooltipDirective, i5.PoCheckboxComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableListManagerComponent, [{
        type: Component,
        args: [{ selector: 'po-table-list-manager', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoTableListManagerComponent),
                        multi: true
                    }
                ], template: "<li\r\n  class=\"po-table-list-manager-container\"\r\n  *ngFor=\"let option of checkboxGroupOptionsView; trackBy: trackByFn\"\r\n  [class.po-checkbox-group-item-disabled]=\"option.disabled || disabled\"\r\n>\r\n  <div class=\"po-table-list-manager-item\">\r\n    <po-checkbox\r\n      #checkboxLabel\r\n      [p-label]=\"option.label\"\r\n      [p-disabled]=\"option.disabled || disabled\"\r\n      (click)=\"checkOption(option)\"\r\n      (keydown)=\"onKeyDown($event, option)\"\r\n      [p-checkboxValue]=\"checkedOptions[option.value] === null ? 'mixed' : checkedOptions[option.value]\"\r\n      [p-required]=\"required\"\r\n    >\r\n    </po-checkbox>\r\n    <div class=\"po-container-icons-arrows-columns-manager\">\r\n      <po-button\r\n        [p-tooltip]=\"literals.up\"\r\n        p-tooltip-position=\"left\"\r\n        p-kind=\"tertiary\"\r\n        p-icon=\"po-icon po-icon-arrow-up\"\r\n        [p-disabled]=\"verifyArrowDisabled(option, 'up')\"\r\n        (click)=\"emitChangePosition(option, 'up'); $event.stopPropagation()\"\r\n      >\r\n      </po-button>\r\n\r\n      <po-button\r\n        [p-tooltip]=\"literals.down\"\r\n        p-tooltip-position=\"top\"\r\n        p-kind=\"tertiary\"\r\n        p-icon=\"po-icon po-icon-arrow-down\"\r\n        [p-disabled]=\"verifyArrowDisabled(option, 'down')\"\r\n        (click)=\"emitChangePosition(option, 'down'); $event.stopPropagation()\"\r\n      >\r\n      </po-button>\r\n    </div>\r\n  </div>\r\n</li>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }, { type: i0.ChangeDetectorRef }]; }, { changePosition: [{
            type: Output,
            args: ['p-change-position']
        }], columnsManager: [{
            type: Input,
            args: ['p-columns-manager']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtbGlzdC1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1saXN0LW1hbmFnZXIvcG8tdGFibGUtbGlzdC1tYW5hZ2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1saXN0LW1hbmFnZXIvcG8tdGFibGUtbGlzdC1tYW5hZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7Ozs7OztJQ054Ryw2QkFJQyxhQUFBLHdCQUFBO0lBTUsseU9BQVMsZUFBQSw2QkFBbUIsQ0FBQSxJQUFDLHNPQUNsQixlQUFBLG1DQUF5QixDQUFBLElBRFA7SUFLL0IsaUJBQWM7SUFDZCw4QkFBdUQsbUJBQUE7SUFPbkQsc09BQVMscUNBQTJCLElBQUksQ0FBQyxTQUFFLGVBQUEsd0JBQXdCLENBQUEsSUFBQztJQUV0RSxpQkFBWTtJQUVaLG9DQU9DO0lBREMsc09BQVMscUNBQTJCLE1BQU0sQ0FBQyxTQUFFLGVBQUEsd0JBQXdCLENBQUEsSUFBQztJQUV4RSxpQkFBWSxFQUFBLEVBQUEsRUFBQTs7OztJQWhDaEIsd0ZBQXFFO0lBS2pFLGVBQXdCO0lBQXhCLHlDQUF3QixxREFBQSx1SEFB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QWM7a0JBRHJCLE1BQU07bUJBQUMsbUJBQW1CO1lBR0MsY0FBYztrQkFBekMsS0FBSzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby10YWJsZS1jb2x1bW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBQb0NoZWNrYm94R3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wby1maWVsZC9wby1jaGVja2JveC1ncm91cC9wby1jaGVja2JveC1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvVGFibGVMaXN0TWFuYWdlckxpdGVyYWxzID0ge1xyXG4gIGVuOiB7XHJcbiAgICB1cDogJ3VwJyxcclxuICAgIGRvd246ICdkb3duJ1xyXG4gIH0sXHJcbiAgZXM6IHtcclxuICAgIHVwOiAnYXJyaWJhJyxcclxuICAgIGRvd246ICdhYmFqbydcclxuICB9LFxyXG4gIHB0OiB7XHJcbiAgICB1cDogJ2FjaW1hJyxcclxuICAgIGRvd246ICdhYmFpeG8nXHJcbiAgfSxcclxuICBydToge1xyXG4gICAgdXA6ICfQstCy0LXRgNGFJyxcclxuICAgIGRvd246ICfQstC90LjQtydcclxuICB9XHJcbn07XHJcblxyXG50eXBlIERpcmVjdGlvbiA9ICd1cCcgfCAnZG93bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlLWxpc3QtbWFuYWdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRhYmxlLWxpc3QtbWFuYWdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb1RhYmxlTGlzdE1hbmFnZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFibGVMaXN0TWFuYWdlckNvbXBvbmVudCBleHRlbmRzIFBvQ2hlY2tib3hHcm91cENvbXBvbmVudCB7XHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtcG9zaXRpb24nKVxyXG4gIHByaXZhdGUgY2hhbmdlUG9zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCdwLWNvbHVtbnMtbWFuYWdlcicpIGNvbHVtbnNNYW5hZ2VyOiBBcnJheTxQb1RhYmxlQ29sdW1uPjtcclxuXHJcbiAgbGl0ZXJhbHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UsIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3IpO1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICB0aGlzLmxpdGVyYWxzID0ge1xyXG4gICAgICAuLi5wb1RhYmxlTGlzdE1hbmFnZXJMaXRlcmFsc1twb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAuLi5wb1RhYmxlTGlzdE1hbmFnZXJMaXRlcmFsc1tsYW5ndWFnZV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBlbWl0Q2hhbmdlUG9zaXRpb24ob3B0aW9uLCBkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgY29uc3QgaW5mb1Bvc2l0aW9uID0geyBvcHRpb24sIGRpcmVjdGlvbiB9O1xyXG4gICAgY29uc3QgaGFzRGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLnZlcmlmeUFycm93RGlzYWJsZWQob3B0aW9uLCBkaXJlY3Rpb24pO1xyXG4gICAgaWYgKCFoYXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uLmVtaXQoaW5mb1Bvc2l0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlcmlmeUFycm93RGlzYWJsZWQob3B0aW9uLCBkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNvbHVtbnNNYW5hZ2VyLmZpbmRJbmRleChlbCA9PiBlbC5wcm9wZXJ0eSA9PT0gb3B0aW9uLnZhbHVlKTtcclxuICAgIGNvbnN0IGV4aXN0c0RldGFpbCA9IHRoaXMuY29sdW1uc01hbmFnZXIuc29tZShmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgcmV0dXJuIGVsLnByb3BlcnR5ID09PSAnZGV0YWlsJztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdmFsdWVTdWJ0cmFjdGlvbiA9IGV4aXN0c0RldGFpbCA/IDIgOiAxO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gMCAmJiBkaXJlY3Rpb24gPT09ICd1cCcpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmNvbHVtbnNNYW5hZ2VyLmxlbmd0aCAtIHZhbHVlU3VidHJhY3Rpb24gJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCI8bGlcclxuICBjbGFzcz1cInBvLXRhYmxlLWxpc3QtbWFuYWdlci1jb250YWluZXJcIlxyXG4gICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2hlY2tib3hHcm91cE9wdGlvbnNWaWV3OyB0cmFja0J5OiB0cmFja0J5Rm5cIlxyXG4gIFtjbGFzcy5wby1jaGVja2JveC1ncm91cC1pdGVtLWRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwicG8tdGFibGUtbGlzdC1tYW5hZ2VyLWl0ZW1cIj5cclxuICAgIDxwby1jaGVja2JveFxyXG4gICAgICAjY2hlY2tib3hMYWJlbFxyXG4gICAgICBbcC1sYWJlbF09XCJvcHRpb24ubGFiZWxcIlxyXG4gICAgICBbcC1kaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAoY2xpY2spPVwiY2hlY2tPcHRpb24ob3B0aW9uKVwiXHJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIG9wdGlvbilcIlxyXG4gICAgICBbcC1jaGVja2JveFZhbHVlXT1cImNoZWNrZWRPcHRpb25zW29wdGlvbi52YWx1ZV0gPT09IG51bGwgPyAnbWl4ZWQnIDogY2hlY2tlZE9wdGlvbnNbb3B0aW9uLnZhbHVlXVwiXHJcbiAgICAgIFtwLXJlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgID5cclxuICAgIDwvcG8tY2hlY2tib3g+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tY29udGFpbmVyLWljb25zLWFycm93cy1jb2x1bW5zLW1hbmFnZXJcIj5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgIFtwLXRvb2x0aXBdPVwibGl0ZXJhbHMudXBcIlxyXG4gICAgICAgIHAtdG9vbHRpcC1wb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgIHAta2luZD1cInRlcnRpYXJ5XCJcclxuICAgICAgICBwLWljb249XCJwby1pY29uIHBvLWljb24tYXJyb3ctdXBcIlxyXG4gICAgICAgIFtwLWRpc2FibGVkXT1cInZlcmlmeUFycm93RGlzYWJsZWQob3B0aW9uLCAndXAnKVwiXHJcbiAgICAgICAgKGNsaWNrKT1cImVtaXRDaGFuZ2VQb3NpdGlvbihvcHRpb24sICd1cCcpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tYnV0dG9uPlxyXG5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgIFtwLXRvb2x0aXBdPVwibGl0ZXJhbHMuZG93blwiXHJcbiAgICAgICAgcC10b29sdGlwLXBvc2l0aW9uPVwidG9wXCJcclxuICAgICAgICBwLWtpbmQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgcC1pY29uPVwicG8taWNvbiBwby1pY29uLWFycm93LWRvd25cIlxyXG4gICAgICAgIFtwLWRpc2FibGVkXT1cInZlcmlmeUFycm93RGlzYWJsZWQob3B0aW9uLCAnZG93bicpXCJcclxuICAgICAgICAoY2xpY2spPVwiZW1pdENoYW5nZVBvc2l0aW9uKG9wdGlvbiwgJ2Rvd24nKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2xpPlxyXG4iXX0=