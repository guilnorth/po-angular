import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoTagBaseComponent } from './po-tag-base.component';
import { PoTagIcon } from './enums/po-tag-icon.enum';
import { PoTagType } from './enums/po-tag-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-icon/po-icon.component";
function PoTagComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.tagOrientation ? ctx_r0.label + ":" : ctx_r0.label);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function PoTagComponent_po_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-icon", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-icon", !ctx_r1.type ? ctx_r1.icon : ctx_r1.iconFromType)("ngStyle", !ctx_r1.tagColor && ctx_r1.inverse ? i0.ɵɵpureFunction1(2, _c0, ctx_r1.customColor) : "");
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0) { return { "border": a0 }; };
const poTagTypeDefault = 'po-tag-' + PoTagType.Info;
/**
 * @docsExtends PoTagBaseComponent
 *
 * @example
 *
 * <example name="po-tag-basic" title="PO Tag Basic">
 *  <file name="sample-po-tag-basic/sample-po-tag-basic.component.html"> </file>
 *  <file name="sample-po-tag-basic/sample-po-tag-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tag-labs" title="PO Tag Labs">
 *  <file name="sample-po-tag-labs/sample-po-tag-labs.component.html"> </file>
 *  <file name="sample-po-tag-labs/sample-po-tag-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tag-bank-account" title="PO Tag - Bank Account">
 *  <file name="sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"> </file>
 *  <file name="sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"> </file>
 * </example>
 */
export class PoTagComponent extends PoTagBaseComponent {
    ngOnInit() {
        this.isClickable = this.click.observers.length > 0;
    }
    get iconFromType() {
        switch (this.type) {
            case PoTagType.Danger:
                return PoTagIcon.Danger;
            case PoTagType.Info:
                return PoTagIcon.Info;
            case PoTagType.Success:
                return PoTagIcon.Success;
            case PoTagType.Warning:
                return PoTagIcon.Warning;
        }
    }
    get tagColor() {
        if (this.type) {
            return this.inverse ? `po-tag-${this.type}-inverse` : `po-tag-${this.type}`;
        }
        if (this.color) {
            return this.inverse ? `po-text-${this.color}` : `po-${this.color}`;
        }
        if (!this.customColor) {
            return this.inverse ? `${poTagTypeDefault}-inverse` : poTagTypeDefault;
        }
    }
    get tagOrientation() {
        return this.orientation === this.poTagOrientation.Horizontal;
    }
    onClick() {
        const submittedTagItem = { value: this.value, type: this.type };
        this.click.emit(submittedTagItem);
    }
    onKeyPressed(event) {
        event.preventDefault();
        event.stopPropagation();
        this.onClick();
    }
}
PoTagComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoTagComponent_BaseFactory; return function PoTagComponent_Factory(t) { return (ɵPoTagComponent_BaseFactory || (ɵPoTagComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoTagComponent)))(t || PoTagComponent); }; }();
PoTagComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTagComponent, selectors: [["po-tag"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 18, consts: [[1, "po-tag-container"], ["class", "po-tag-title po-text-nowrap", 4, "ngIf"], [1, "po-tag-sub-container"], ["tabindex", "0", 1, "po-tag", 3, "ngClass", "ngStyle", "click", "keydown.enter", "keydown.space", "keyup.space"], ["class", "po-tag-icon", 3, "p-icon", "ngStyle", 4, "ngIf"], [1, "po-tag-value", 3, "ngStyle"], [1, "po-tag-title", "po-text-nowrap"], [1, "po-tag-label"], [1, "po-tag-icon", 3, "p-icon", "ngStyle"]], template: function PoTagComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoTagComponent_div_1_Template, 3, 1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
        i0.ɵɵlistener("click", function PoTagComponent_Template_div_click_3_listener() { return ctx.onClick(); })("keydown.enter", function PoTagComponent_Template_div_keydown_enter_3_listener($event) { return ctx.onKeyPressed($event); })("keydown.space", function PoTagComponent_Template_div_keydown_space_3_listener($event) { return $event.preventDefault(); })("keyup.space", function PoTagComponent_Template_div_keyup_space_3_listener($event) { return ctx.onKeyPressed($event); });
        i0.ɵɵtemplate(4, PoTagComponent_po_icon_4_Template, 1, 4, "po-icon", 4);
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-tag-container-horizontal", ctx.tagOrientation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("po-clickable", ctx.isClickable)("po-tag-inverse", ctx.inverse);
        i0.ɵɵproperty("ngClass", ctx.tagColor)("ngStyle", !ctx.tagColor && !ctx.inverse ? i0.ɵɵpureFunction1(12, _c1, ctx.customColor) : !ctx.tagColor && ctx.inverse ? i0.ɵɵpureFunction1(14, _c2, "1px solid " + ctx.customColor) : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", !ctx.tagColor && ctx.inverse ? i0.ɵɵpureFunction1(16, _c0, ctx.customColor) : "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.value);
    } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTagComponent, [{
        type: Component,
        args: [{ selector: 'po-tag', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-tag-container\" [class.po-tag-container-horizontal]=\"tagOrientation\">\r\n  <div *ngIf=\"label\" class=\"po-tag-title po-text-nowrap\">\r\n    <span class=\"po-tag-label\">{{ tagOrientation ? label + ':' : label }}</span>\r\n  </div>\r\n\r\n  <div class=\"po-tag-sub-container\">\r\n    <div\r\n      class=\"po-tag\"\r\n      [class.po-clickable]=\"isClickable\"\r\n      [class.po-tag-inverse]=\"inverse\"\r\n      [ngClass]=\"tagColor\"\r\n      [ngStyle]=\"\r\n        !tagColor && !inverse\r\n          ? { 'background-color': customColor }\r\n          : !tagColor && inverse\r\n          ? { 'border': '1px solid ' + customColor }\r\n          : ''\r\n      \"\r\n      tabindex=\"0\"\r\n      (click)=\"onClick()\"\r\n      (keydown.enter)=\"onKeyPressed($event)\"\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n      (keyup.space)=\"onKeyPressed($event)\"\r\n    >\r\n      <po-icon\r\n        *ngIf=\"icon\"\r\n        class=\"po-tag-icon\"\r\n        [p-icon]=\"!type ? icon : iconFromType\"\r\n        [ngStyle]=\"!tagColor && inverse ? { 'color': customColor } : ''\"\r\n      >\r\n      </po-icon>\r\n\r\n      <span class=\"po-tag-value\" [ngStyle]=\"!tagColor && inverse ? { 'color': customColor } : ''\">{{ value }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWcvcG8tdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWcvcG8tdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXJELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7SUNKbkQsOEJBQXVELGNBQUE7SUFDMUIsWUFBMEM7SUFBQSxpQkFBTyxFQUFBOzs7SUFBakQsZUFBMEM7SUFBMUMsK0VBQTBDOzs7O0lBc0JuRSw2QkFNVTs7O0lBSFIseUVBQXNDLHFHQUFBOzs7O0FEcEI5QyxNQUFNLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBTUgsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFHcEQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssU0FBUyxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUUxQixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFFeEIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBRTNCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3RTtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixVQUFVLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sZ0JBQWdCLEdBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7OzhOQWxEVSxjQUFjLFNBQWQsY0FBYztpRUFBZCxjQUFjO1FDbEMzQiw4QkFBbUY7UUFDakYsK0RBRU07UUFFTiw4QkFBa0MsYUFBQTtRQWM5Qix3RkFBUyxhQUFTLElBQUMsaUdBQ0Ysd0JBQW9CLElBRGxCLGlHQUVGLHVCQUF1QixJQUZyQiw2RkFHSix3QkFBb0IsSUFIaEI7UUFLbkIsdUVBTVU7UUFFViwrQkFBNEY7UUFBQSxZQUFXO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUE7O1FBaEN0RixpRUFBb0Q7UUFDMUUsZUFBVztRQUFYLGdDQUFXO1FBT2IsZUFBa0M7UUFBbEMsK0NBQWtDLCtCQUFBO1FBRWxDLHNDQUFvQiwyTEFBQTtRQWVqQixlQUFVO1FBQVYsK0JBQVU7UUFPYyxlQUFnRTtRQUFoRSwwR0FBZ0U7UUFBQyxlQUFXO1FBQVgsK0JBQVc7O3VGREVoRyxjQUFjO2NBTDFCLFNBQVM7MkJBQ0UsUUFBUSxtQkFFRCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb1RhZ0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXRhZy1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVGFnSWNvbiB9IGZyb20gJy4vZW51bXMvcG8tdGFnLWljb24uZW51bSc7XHJcbmltcG9ydCB7IFBvVGFnSXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby10YWctaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1RhZ1R5cGUgfSBmcm9tICcuL2VudW1zL3BvLXRhZy10eXBlLmVudW0nO1xyXG5cclxuY29uc3QgcG9UYWdUeXBlRGVmYXVsdCA9ICdwby10YWctJyArIFBvVGFnVHlwZS5JbmZvO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1RhZ0Jhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXRhZy1iYXNpY1wiIHRpdGxlPVwiUE8gVGFnIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhZy1iYXNpYy9zYW1wbGUtcG8tdGFnLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFnLWJhc2ljL3NhbXBsZS1wby10YWctYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdGFnLWxhYnNcIiB0aXRsZT1cIlBPIFRhZyBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhZy1sYWJzL3NhbXBsZS1wby10YWctbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhZy1sYWJzL3NhbXBsZS1wby10YWctbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby10YWctYmFuay1hY2NvdW50XCIgdGl0bGU9XCJQTyBUYWcgLSBCYW5rIEFjY291bnRcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdGFnLWJhbmstYWNjb3VudC9zYW1wbGUtcG8tdGFnLWJhbmstYWNjb3VudC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRhZy1iYW5rLWFjY291bnQvc2FtcGxlLXBvLXRhZy1iYW5rLWFjY291bnQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10YWcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RhZ0NvbXBvbmVudCBleHRlbmRzIFBvVGFnQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNDbGlja2FibGU6IGJvb2xlYW47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0NsaWNrYWJsZSA9IHRoaXMuY2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbkZyb21UeXBlKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSBQb1RhZ1R5cGUuRGFuZ2VyOlxyXG4gICAgICAgIHJldHVybiBQb1RhZ0ljb24uRGFuZ2VyO1xyXG5cclxuICAgICAgY2FzZSBQb1RhZ1R5cGUuSW5mbzpcclxuICAgICAgICByZXR1cm4gUG9UYWdJY29uLkluZm87XHJcblxyXG4gICAgICBjYXNlIFBvVGFnVHlwZS5TdWNjZXNzOlxyXG4gICAgICAgIHJldHVybiBQb1RhZ0ljb24uU3VjY2VzcztcclxuXHJcbiAgICAgIGNhc2UgUG9UYWdUeXBlLldhcm5pbmc6XHJcbiAgICAgICAgcmV0dXJuIFBvVGFnSWNvbi5XYXJuaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRhZ0NvbG9yKCkge1xyXG4gICAgaWYgKHRoaXMudHlwZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnZlcnNlID8gYHBvLXRhZy0ke3RoaXMudHlwZX0taW52ZXJzZWAgOiBgcG8tdGFnLSR7dGhpcy50eXBlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29sb3IpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJzZSA/IGBwby10ZXh0LSR7dGhpcy5jb2xvcn1gIDogYHBvLSR7dGhpcy5jb2xvcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5jdXN0b21Db2xvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnZlcnNlID8gYCR7cG9UYWdUeXBlRGVmYXVsdH0taW52ZXJzZWAgOiBwb1RhZ1R5cGVEZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRhZ09yaWVudGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09IHRoaXMucG9UYWdPcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHN1Ym1pdHRlZFRhZ0l0ZW06IFBvVGFnSXRlbSA9IHsgdmFsdWU6IHRoaXMudmFsdWUsIHR5cGU6IHRoaXMudHlwZSB9O1xyXG4gICAgdGhpcy5jbGljay5lbWl0KHN1Ym1pdHRlZFRhZ0l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzc2VkKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm9uQ2xpY2soKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXRhZy1jb250YWluZXJcIiBbY2xhc3MucG8tdGFnLWNvbnRhaW5lci1ob3Jpem9udGFsXT1cInRhZ09yaWVudGF0aW9uXCI+XHJcbiAgPGRpdiAqbmdJZj1cImxhYmVsXCIgY2xhc3M9XCJwby10YWctdGl0bGUgcG8tdGV4dC1ub3dyYXBcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8tdGFnLWxhYmVsXCI+e3sgdGFnT3JpZW50YXRpb24gPyBsYWJlbCArICc6JyA6IGxhYmVsIH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tdGFnLXN1Yi1jb250YWluZXJcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJwby10YWdcIlxyXG4gICAgICBbY2xhc3MucG8tY2xpY2thYmxlXT1cImlzQ2xpY2thYmxlXCJcclxuICAgICAgW2NsYXNzLnBvLXRhZy1pbnZlcnNlXT1cImludmVyc2VcIlxyXG4gICAgICBbbmdDbGFzc109XCJ0YWdDb2xvclwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cIlxyXG4gICAgICAgICF0YWdDb2xvciAmJiAhaW52ZXJzZVxyXG4gICAgICAgICAgPyB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQ29sb3IgfVxyXG4gICAgICAgICAgOiAhdGFnQ29sb3IgJiYgaW52ZXJzZVxyXG4gICAgICAgICAgPyB7ICdib3JkZXInOiAnMXB4IHNvbGlkICcgKyBjdXN0b21Db2xvciB9XHJcbiAgICAgICAgICA6ICcnXHJcbiAgICAgIFwiXHJcbiAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4gICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbktleVByZXNzZWQoJGV2ZW50KVwiXHJcbiAgICAgIChrZXlkb3duLnNwYWNlKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgKGtleXVwLnNwYWNlKT1cIm9uS2V5UHJlc3NlZCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPHBvLWljb25cclxuICAgICAgICAqbmdJZj1cImljb25cIlxyXG4gICAgICAgIGNsYXNzPVwicG8tdGFnLWljb25cIlxyXG4gICAgICAgIFtwLWljb25dPVwiIXR5cGUgPyBpY29uIDogaWNvbkZyb21UeXBlXCJcclxuICAgICAgICBbbmdTdHlsZV09XCIhdGFnQ29sb3IgJiYgaW52ZXJzZSA/IHsgJ2NvbG9yJzogY3VzdG9tQ29sb3IgfSA6ICcnXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWljb24+XHJcblxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBvLXRhZy12YWx1ZVwiIFtuZ1N0eWxlXT1cIiF0YWdDb2xvciAmJiBpbnZlcnNlID8geyAnY29sb3InOiBjdXN0b21Db2xvciB9IDogJydcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19