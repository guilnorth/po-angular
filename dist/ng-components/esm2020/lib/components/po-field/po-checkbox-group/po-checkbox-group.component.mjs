import { ChangeDetectionStrategy, Component, forwardRef, ViewChildren } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoCheckboxGroupBaseComponent } from './po-checkbox-group-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i3 from "../po-field-container/po-field-container.component";
import * as i4 from "../po-checkbox/po-checkbox.component";
const _c0 = ["checkboxLabel"];
function PoCheckboxGroupComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "po-checkbox", 4, 5);
    i0.ɵɵlistener("click", function PoCheckboxGroupComponent_li_3_Template_po_checkbox_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.checkOption(option_r1)); })("keydown", function PoCheckboxGroupComponent_li_3_Template_po_checkbox_keydown_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onKeyDown($event, option_r1)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("po-checkbox-group-item po-md-", ctx_r0.mdColumns, " po-lg-", ctx_r0.columns, "");
    i0.ɵɵclassProp("po-checkbox-group-item-disabled", option_r1.disabled || ctx_r0.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-label", option_r1.label)("p-disabled", option_r1.disabled || ctx_r0.disabled)("p-checkboxValue", ctx_r0.checkedOptions[option_r1.value] === null ? "mixed" : ctx_r0.checkedOptions[option_r1.value])("p-required", ctx_r0.required);
} }
/**
 * @docsExtends PoCheckboxGroupBaseComponent
 *
 * @example
 *
 * <example name="po-checkbox-group-basic" title="PO Checkbox Group Basic">
 *  <file name="sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"> </file>
 *  <file name="sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-group-labs" title="PO Checkbox Group Labs">
 *  <file name="sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"> </file>
 *  <file name="sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-group-password-policy" title="PO Checkbox Group – Security policy">
 *  <file name="sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"> </file>
 *  <file name="sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"> </file>
 * </example>
 */
export class PoCheckboxGroupComponent extends PoCheckboxGroupBaseComponent {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoCheckboxGroupComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;
     *
     * focusCheckbox() {
     *   this.checkbox.focus();
     * }
     * ```
     */
    focus() {
        if (this.checkboxLabels && !this.disabled) {
            const checkboxLabel = this.checkboxLabels.find((_, index) => !this.options[index].disabled);
            if (checkboxLabel) {
                checkboxLabel.nativeElement.focus();
            }
        }
    }
    onKeyDown(event, option) {
        const spaceBar = 32;
        if (event.which === spaceBar || event.keyCode === spaceBar) {
            this.checkOption(option);
            event.preventDefault();
        }
    }
    trackByFn(index) {
        return index;
    }
}
PoCheckboxGroupComponent.ɵfac = function PoCheckboxGroupComponent_Factory(t) { return new (t || PoCheckboxGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoCheckboxGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCheckboxGroupComponent, selectors: [["po-checkbox-group"]], viewQuery: function PoCheckboxGroupComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkboxLabels = _t);
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoCheckboxGroupComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoCheckboxGroupComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 6, consts: [[3, "p-help", "p-label", "p-optional"], ["role", "group", 1, "po-field-container-content", "po-checkbox-group-content"], [1, "po-row", "po-pt-2", "po-pb-1"], [3, "class", "po-checkbox-group-item-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "p-label", "p-disabled", "p-checkboxValue", "p-required", "click", "keydown"], ["checkboxLabel", ""]], template: function PoCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "ul", 2);
        i0.ɵɵtemplate(3, PoCheckboxGroupComponent_li_3_Template, 3, 10, "li", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(4, "po-field-container-bottom");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-help", ctx.help)("p-label", ctx.label)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", ctx.label);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.checkboxGroupOptionsView)("ngForTrackBy", ctx.trackByFn);
    } }, dependencies: [i1.NgForOf, i2.PoFieldContainerBottomComponent, i3.PoFieldContainerComponent, i4.PoCheckboxComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCheckboxGroupComponent, [{
        type: Component,
        args: [{ selector: 'po-checkbox-group', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoCheckboxGroupComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoCheckboxGroupComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-help]=\"help\" [p-label]=\"label\" [p-optional]=\"!required && optional\">\r\n  <div role=\"group\" [attr.aria-label]=\"label\" class=\"po-field-container-content po-checkbox-group-content\">\r\n    <ul class=\"po-row po-pt-2 po-pb-1\">\r\n      <li\r\n        *ngFor=\"let option of checkboxGroupOptionsView; trackBy: trackByFn\"\r\n        class=\"po-checkbox-group-item po-md-{{ mdColumns }} po-lg-{{ columns }}\"\r\n        [class.po-checkbox-group-item-disabled]=\"option.disabled || disabled\"\r\n      >\r\n        <po-checkbox\r\n          #checkboxLabel\r\n          [p-label]=\"option.label\"\r\n          [p-disabled]=\"option.disabled || disabled\"\r\n          (click)=\"checkOption(option)\"\r\n          (keydown)=\"onKeyDown($event, option)\"\r\n          [p-checkboxValue]=\"checkedOptions[option.value] === null ? 'mixed' : checkedOptions[option.value]\"\r\n          [p-required]=\"required\"\r\n        >\r\n        </po-checkbox>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { checkboxLabels: [{
            type: ViewChildren,
            args: ['checkboxLabel']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWNoZWNrYm94LWdyb3VwL3BvLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1jaGVja2JveC1ncm91cC9wby1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBRVYsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7O0lDVjVFLDBCQUlDLHdCQUFBO0lBS0csc09BQVMsZUFBQSw2QkFBbUIsQ0FBQSxJQUFDLG1PQUNsQixlQUFBLG1DQUF5QixDQUFBLElBRFA7SUFLL0IsaUJBQWMsRUFBQTs7OztJQVpkLDJHQUF3RTtJQUN4RSx3RkFBcUU7SUFJbkUsZUFBd0I7SUFBeEIseUNBQXdCLHFEQUFBLHVIQUFBLCtCQUFBOztBRE1sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQWtCSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsNEJBQTRCO0lBR3hFLFlBQW9CLGNBQWlDO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRFUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0lBRXJELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVGLElBQUksYUFBYSxFQUFFO2dCQUNqQixhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3JDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CLEVBQUUsTUFBNkI7UUFDM0QsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQUs7UUFDYixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dHQXhEVSx3QkFBd0I7MkVBQXhCLHdCQUF3Qjs7Ozs7MENBYnhCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDdkQsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUN2RCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUNuREgsNkNBQTJGLGFBQUEsWUFBQTtRQUdyRix3RUFlSztRQUNQLGlCQUFLLEVBQUE7UUFHUCw0Q0FBdUQ7UUFDekQsaUJBQXFCOztRQXZCRCxpQ0FBZSxzQkFBQSw2Q0FBQTtRQUNmLGVBQXlCO1FBQXpCLHVDQUF5QjtRQUdsQixlQUE2QjtRQUE3QixzREFBNkIsK0JBQUE7O3VGRGlEM0Msd0JBQXdCO2NBakJwQyxTQUFTOzJCQUNFLG1CQUFtQixtQkFFWix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHlCQUF5QixDQUFDO3dCQUN2RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO29FQUc4QixjQUFjO2tCQUE1QyxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGRyZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQb0NoZWNrYm94R3JvdXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGVja2JveC1ncm91cC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hlY2tib3hHcm91cE9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jaGVja2JveC1ncm91cC1vcHRpb24uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9DaGVja2JveEdyb3VwQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY2hlY2tib3gtZ3JvdXAtYmFzaWNcIiB0aXRsZT1cIlBPIENoZWNrYm94IEdyb3VwIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNoZWNrYm94LWdyb3VwLWJhc2ljL3NhbXBsZS1wby1jaGVja2JveC1ncm91cC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNoZWNrYm94LWdyb3VwLWJhc2ljL3NhbXBsZS1wby1jaGVja2JveC1ncm91cC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jaGVja2JveC1ncm91cC1sYWJzXCIgdGl0bGU9XCJQTyBDaGVja2JveCBHcm91cCBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNoZWNrYm94LWdyb3VwLWxhYnMvc2FtcGxlLXBvLWNoZWNrYm94LWdyb3VwLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jaGVja2JveC1ncm91cC1sYWJzL3NhbXBsZS1wby1jaGVja2JveC1ncm91cC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNoZWNrYm94LWdyb3VwLXBhc3N3b3JkLXBvbGljeVwiIHRpdGxlPVwiUE8gQ2hlY2tib3ggR3JvdXAg4oCTIFNlY3VyaXR5IHBvbGljeVwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jaGVja2JveC1ncm91cC1wYXNzd29yZC1wb2xpY3kvc2FtcGxlLXBvLWNoZWNrYm94LWdyb3VwLXBhc3N3b3JkLXBvbGljeS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNoZWNrYm94LWdyb3VwLXBhc3N3b3JkLXBvbGljeS9zYW1wbGUtcG8tY2hlY2tib3gtZ3JvdXAtcGFzc3dvcmQtcG9saWN5LmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tY2hlY2tib3gtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0NoZWNrYm94R3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9DaGVja2JveEdyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoZWNrYm94R3JvdXBDb21wb25lbnQgZXh0ZW5kcyBQb0NoZWNrYm94R3JvdXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZHJlbignY2hlY2tib3hMYWJlbCcpIGNoZWNrYm94TGFiZWxzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIGF0cmlidWkgZm9jbyBhbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogUGFyYSB1dGlsaXrDoS1sYSDDqSBuZWNlc3PDoXJpbyB0ZXIgYSBpbnN0w6JuY2lhIGRvIGNvbXBvbmVudGUgbm8gRE9NLCBwb2RlbmRvIHNlciB1dGlsaXphZG8gbyBWaWV3Q2hpbGQgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBpbXBvcnQgeyBQb0NoZWNrYm94R3JvdXBDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9DaGVja2JveEdyb3VwQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBjaGVja2JveDogUG9DaGVja2JveEdyb3VwQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNDaGVja2JveCgpIHtcclxuICAgKiAgIHRoaXMuY2hlY2tib3guZm9jdXMoKTtcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jaGVja2JveExhYmVscyAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCBjaGVja2JveExhYmVsID0gdGhpcy5jaGVja2JveExhYmVscy5maW5kKChfLCBpbmRleCkgPT4gIXRoaXMub3B0aW9uc1tpbmRleF0uZGlzYWJsZWQpO1xyXG5cclxuICAgICAgaWYgKGNoZWNrYm94TGFiZWwpIHtcclxuICAgICAgICBjaGVja2JveExhYmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBvcHRpb246IFBvQ2hlY2tib3hHcm91cE9wdGlvbikge1xyXG4gICAgY29uc3Qgc3BhY2VCYXIgPSAzMjtcclxuXHJcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IHNwYWNlQmFyIHx8IGV2ZW50LmtleUNvZGUgPT09IHNwYWNlQmFyKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tPcHRpb24ob3B0aW9uKTtcclxuXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Rm4oaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1oZWxwXT1cImhlbHBcIiBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgcm9sZT1cImdyb3VwXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiIGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnQgcG8tY2hlY2tib3gtZ3JvdXAtY29udGVudFwiPlxyXG4gICAgPHVsIGNsYXNzPVwicG8tcm93IHBvLXB0LTIgcG8tcGItMVwiPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNoZWNrYm94R3JvdXBPcHRpb25zVmlldzsgdHJhY2tCeTogdHJhY2tCeUZuXCJcclxuICAgICAgICBjbGFzcz1cInBvLWNoZWNrYm94LWdyb3VwLWl0ZW0gcG8tbWQte3sgbWRDb2x1bW5zIH19IHBvLWxnLXt7IGNvbHVtbnMgfX1cIlxyXG4gICAgICAgIFtjbGFzcy5wby1jaGVja2JveC1ncm91cC1pdGVtLWRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8cG8tY2hlY2tib3hcclxuICAgICAgICAgICNjaGVja2JveExhYmVsXHJcbiAgICAgICAgICBbcC1sYWJlbF09XCJvcHRpb24ubGFiZWxcIlxyXG4gICAgICAgICAgW3AtZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICAgICAgICAgIChjbGljayk9XCJjaGVja09wdGlvbihvcHRpb24pXCJcclxuICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIG9wdGlvbilcIlxyXG4gICAgICAgICAgW3AtY2hlY2tib3hWYWx1ZV09XCJjaGVja2VkT3B0aW9uc1tvcHRpb24udmFsdWVdID09PSBudWxsID8gJ21peGVkJyA6IGNoZWNrZWRPcHRpb25zW29wdGlvbi52YWx1ZV1cIlxyXG4gICAgICAgICAgW3AtcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3BvLWNoZWNrYm94PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+PC9wby1maWVsZC1jb250YWluZXItYm90dG9tPlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19