import { ChangeDetectionStrategy, Component, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoKeyCodeEnum } from './../../../enums/po-key-code.enum';
import { PoCheckboxBaseComponent } from './po-checkbox-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["checkboxLabel"];
function PoCheckboxComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 4, 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("for", ctx_r0.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
/**
 * @docsExtends PoCheckboxBaseComponent
 *
 * @example
 *
 * <example name="po-checkbox-basic" title="PO Checkbox Basic">
 *   <file name="sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"> </file>
 *   <file name="sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-labs" title="PO Checkbox Labs">
 *   <file name="sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"> </file>
 *   <file name="sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-checkbox-acceptance-term" title="PO Checkbox - Acceptance Term">
 *   <file name="sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"> </file>
 *   <file name="sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"> </file>
 * </example>
 */
export class PoCheckboxComponent extends PoCheckboxBaseComponent {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
    }
    /**
     * Função que atribui foco ao *checkbox*.
     *
     * Para utilizá-la é necessário capturar a referência do componente no DOM através do `ViewChild`, como por exemplo:
     *
     * ```
     * ...
     * import { ViewChild } from '@angular/core';
     * import { PoCheckboxComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;
     *
     * focusCheckbox() {
     *   this.checkbox.focus();
     * }
     * ```
     */
    focus() {
        if (this.checkboxLabel && !this.disabled) {
            this.checkboxLabel.nativeElement.focus();
        }
    }
    onBlur() {
        this.onTouched?.();
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    onKeyDown(event, value) {
        if (event.which === PoKeyCodeEnum.space || event.keyCode === PoKeyCodeEnum.space) {
            this.checkOption(value);
            event.preventDefault();
        }
    }
    changeModelValue(value) {
        if (value === null) {
            this.checkboxValue = 'mixed';
        }
        else {
            this.checkboxValue = typeof value === 'boolean' || value === null ? value : false;
        }
        this.changeDetector.detectChanges();
    }
}
PoCheckboxComponent.ɵfac = function PoCheckboxComponent_Factory(t) { return new (t || PoCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoCheckboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCheckboxComponent, selectors: [["po-checkbox"]], viewQuery: function PoCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkboxLabel = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoCheckboxComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 8, consts: [[1, "container-po-checkbox", 3, "click", "keydown"], ["role", "checkbox", 1, "po-checkbox-outline", 3, "tabindex"], ["aria-label", " ", 1, "po-checkbox", 3, "id"], ["class", "po-checkbox-label", "tabindex", "-1", 3, "for", 4, "ngIf"], ["tabindex", "-1", 1, "po-checkbox-label", 3, "for"], ["checkboxLabel", ""]], template: function PoCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoCheckboxComponent_Template_div_click_0_listener() { return ctx.checkOption(ctx.checkboxValue); })("keydown", function PoCheckboxComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event, ctx.checkboxValue); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵtemplate(3, PoCheckboxComponent_label_3_Template, 3, 2, "label", 3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵattribute("checked", ctx.checkboxValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("tabindex", ctx.disabled ? -1 : 0);
        i0.ɵɵattribute("aria-checked", ctx.checkboxValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id);
        i0.ɵɵattribute("aria-checked", ctx.checkboxValue)("aria-disabled", ctx.disabled)("required", ctx.checkBoxRequired);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'po-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoCheckboxComponent),
                        multi: true
                    }
                ], template: "<div\r\n  class=\"container-po-checkbox\"\r\n  [attr.checked]=\"checkboxValue\"\r\n  (click)=\"checkOption(checkboxValue)\"\r\n  (keydown)=\"onKeyDown($event, checkboxValue)\"\r\n>\r\n  <div role=\"checkbox\" class=\"po-checkbox-outline\" [tabindex]=\"disabled ? -1 : 0\" [attr.aria-checked]=\"checkboxValue\">\r\n    <span\r\n      [attr.aria-checked]=\"checkboxValue\"\r\n      aria-label=\" \"\r\n      [id]=\"id\"\r\n      class=\"po-checkbox\"\r\n      [attr.aria-disabled]=\"disabled\"\r\n      [attr.required]=\"checkBoxRequired\"\r\n    >\r\n    </span>\r\n\r\n    <label *ngIf=\"label\" #checkboxLabel [for]=\"id\" class=\"po-checkbox-label\" tabindex=\"-1\">\r\n      {{ label }}\r\n    </label>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { checkboxLabel: [{
            type: ViewChild,
            args: ['checkboxLabel', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWNoZWNrYm94L3BvLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1jaGVja2JveC9wby1jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7SUNJbkUsbUNBQXVGO0lBQ3JGLFlBQ0Y7SUFBQSxpQkFBUTs7O0lBRjRCLCtCQUFVO0lBQzVDLGVBQ0Y7SUFERSw2Q0FDRjs7QURKSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQWFILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx1QkFBdUI7SUFHOUQsWUFBb0IsY0FBaUM7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFEVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7SUFFckQsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CLEVBQUUsS0FBdUI7UUFDckQsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVTLGdCQUFnQixDQUFDLEtBQThCO1FBQ3ZELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbkY7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O3NGQXpEVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjs7Ozs7MENBUm5CO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbEQsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO1FDN0NILDhCQUtDO1FBRkMsNkZBQVMsa0NBQTBCLElBQUMsMEZBQ3pCLHdDQUFnQyxJQURQO1FBR3BDLDhCQUFvSDtRQUNsSCwwQkFRTztRQUVQLHdFQUVRO1FBQ1YsaUJBQU0sRUFBQTs7UUFsQk4sNENBQThCO1FBSW1CLGVBQThCO1FBQTlCLGdEQUE4QjtRQUFDLGlEQUFtQztRQUkvRyxlQUFTO1FBQVQsMkJBQVM7UUFGVCxpREFBbUMsK0JBQUEsa0NBQUE7UUFTN0IsZUFBVztRQUFYLGdDQUFXOzt1RkQ4QlYsbUJBQW1CO2NBWi9CLFNBQVM7MkJBQ0UsYUFBYSxtQkFFTix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtvRUFHNkMsYUFBYTtrQkFBMUQsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9LZXlDb2RlRW51bSB9IGZyb20gJy4vLi4vLi4vLi4vZW51bXMvcG8ta2V5LWNvZGUuZW51bSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoZWNrYm94QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hlY2tib3gtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0NoZWNrYm94QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY2hlY2tib3gtYmFzaWNcIiB0aXRsZT1cIlBPIENoZWNrYm94IEJhc2ljXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jaGVja2JveC1iYXNpYy9zYW1wbGUtcG8tY2hlY2tib3gtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hlY2tib3gtYmFzaWMvc2FtcGxlLXBvLWNoZWNrYm94LWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNoZWNrYm94LWxhYnNcIiB0aXRsZT1cIlBPIENoZWNrYm94IExhYnNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNoZWNrYm94LWxhYnMvc2FtcGxlLXBvLWNoZWNrYm94LWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2hlY2tib3gtbGFicy9zYW1wbGUtcG8tY2hlY2tib3gtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jaGVja2JveC1hY2NlcHRhbmNlLXRlcm1cIiB0aXRsZT1cIlBPIENoZWNrYm94IC0gQWNjZXB0YW5jZSBUZXJtXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jaGVja2JveC1hY2NlcHRhbmNlLXRlcm0vc2FtcGxlLXBvLWNoZWNrYm94LWFjY2VwdGFuY2UtdGVybS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jaGVja2JveC1hY2NlcHRhbmNlLXRlcm0vc2FtcGxlLXBvLWNoZWNrYm94LWFjY2VwdGFuY2UtdGVybS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9DaGVja2JveENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGVja2JveENvbXBvbmVudCBleHRlbmRzIFBvQ2hlY2tib3hCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnY2hlY2tib3hMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIGNoZWNrYm94TGFiZWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIGF0cmlidWkgZm9jbyBhbyAqY2hlY2tib3gqLlxyXG4gICAqXHJcbiAgICogUGFyYSB1dGlsaXrDoS1sYSDDqSBuZWNlc3PDoXJpbyBjYXB0dXJhciBhIHJlZmVyw6puY2lhIGRvIGNvbXBvbmVudGUgbm8gRE9NIGF0cmF2w6lzIGRvIGBWaWV3Q2hpbGRgLCBjb21vIHBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogLi4uXHJcbiAgICogaW1wb3J0IHsgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAgICogaW1wb3J0IHsgUG9DaGVja2JveENvbXBvbmVudCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICAgKlxyXG4gICAqIC4uLlxyXG4gICAqXHJcbiAgICogQFZpZXdDaGlsZChQb0NoZWNrYm94Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBjaGVja2JveDogUG9DaGVja2JveENvbXBvbmVudDtcclxuICAgKlxyXG4gICAqIGZvY3VzQ2hlY2tib3goKSB7XHJcbiAgICogICB0aGlzLmNoZWNrYm94LmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hMYWJlbCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrYm94TGFiZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5vblRvdWNoZWQ/LigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcclxuICAgIGlmIChldmVudC53aGljaCA9PT0gUG9LZXlDb2RlRW51bS5zcGFjZSB8fCBldmVudC5rZXlDb2RlID09PSBQb0tleUNvZGVFbnVtLnNwYWNlKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tPcHRpb24odmFsdWUpO1xyXG5cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VNb2RlbFZhbHVlKHZhbHVlOiBib29sZWFuIHwgbnVsbCB8IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hWYWx1ZSA9ICdtaXhlZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94VmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gbnVsbCA/IHZhbHVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwiY29udGFpbmVyLXBvLWNoZWNrYm94XCJcclxuICBbYXR0ci5jaGVja2VkXT1cImNoZWNrYm94VmFsdWVcIlxyXG4gIChjbGljayk9XCJjaGVja09wdGlvbihjaGVja2JveFZhbHVlKVwiXHJcbiAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgY2hlY2tib3hWYWx1ZSlcIlxyXG4+XHJcbiAgPGRpdiByb2xlPVwiY2hlY2tib3hcIiBjbGFzcz1cInBvLWNoZWNrYm94LW91dGxpbmVcIiBbdGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IDBcIiBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiY2hlY2tib3hWYWx1ZVwiPlxyXG4gICAgPHNwYW5cclxuICAgICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrYm94VmFsdWVcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiIFwiXHJcbiAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgIGNsYXNzPVwicG8tY2hlY2tib3hcIlxyXG4gICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2F0dHIucmVxdWlyZWRdPVwiY2hlY2tCb3hSZXF1aXJlZFwiXHJcbiAgICA+XHJcbiAgICA8L3NwYW4+XHJcblxyXG4gICAgPGxhYmVsICpuZ0lmPVwibGFiZWxcIiAjY2hlY2tib3hMYWJlbCBbZm9yXT1cImlkXCIgY2xhc3M9XCJwby1jaGVja2JveC1sYWJlbFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAge3sgbGFiZWwgfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=