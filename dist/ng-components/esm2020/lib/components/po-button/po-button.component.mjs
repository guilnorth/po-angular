import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PoButtonBaseComponent } from './po-button-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-loading/po-loading-icon/po-loading-icon.component";
import * as i3 from "../po-icon/po-icon.component";
const _c0 = ["button"];
function PoButtonComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "po-loading-icon", 6);
    i0.ɵɵelementEnd();
} }
function PoButtonComponent_po_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-icon", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-icon", ctx_r2.icon);
} }
function PoButtonComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.label);
} }
/**
 * @docsExtends PoButtonBaseComponent
 *
 * @example
 *
 * <example name="po-button-basic" title="PO Button Basic">
 *  <file name="sample-po-button-basic/sample-po-button-basic.component.html"> </file>
 *  <file name="sample-po-button-basic/sample-po-button-basic.component.ts"> </file>
 *  <file name="sample-po-button-basic/sample-po-button-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-button-basic/sample-po-button-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-button-labs" title="PO Button Labs">
 *  <file name="sample-po-button-labs/sample-po-button-labs.component.html"> </file>
 *  <file name="sample-po-button-labs/sample-po-button-labs.component.ts"> </file>
 *  <file name="sample-po-button-labs/sample-po-button-labs.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-button-labs/sample-po-button-labs.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-button-social-network" title="PO Button Social Network">
 *  <file name="sample-po-button-social-network/sample-po-button-social-network.component.html"> </file>
 *  <file name="sample-po-button-social-network/sample-po-button-social-network.component.ts"> </file>
 * </example>
 */
export class PoButtonComponent extends PoButtonBaseComponent {
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoButtonComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;
     *
     * focusButton() {
     *   this.button.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.buttonElement.nativeElement.focus();
        }
    }
    onClick() {
        this.click.emit(null);
    }
}
PoButtonComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoButtonComponent_BaseFactory; return function PoButtonComponent_Factory(t) { return (ɵPoButtonComponent_BaseFactory || (ɵPoButtonComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoButtonComponent)))(t || PoButtonComponent); }; }();
PoButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoButtonComponent, selectors: [["po-button"]], viewQuery: function PoButtonComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonElement = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 9, consts: [["type", "button", 1, "po-button", 3, "disabled", "click"], ["button", ""], ["class", "po-button-loading-icon", 4, "ngIf"], ["class", "po-button-icon", 3, "p-icon", 4, "ngIf"], ["class", "po-button-label", 4, "ngIf"], [1, "po-button-loading-icon"], ["p-neutral-color", ""], [1, "po-button-icon", 3, "p-icon"], [1, "po-button-label"]], template: function PoButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function PoButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵtemplate(2, PoButtonComponent_div_2_Template, 2, 0, "div", 2);
        i0.ɵɵtemplate(3, PoButtonComponent_po_icon_3_Template, 1, 1, "po-icon", 3);
        i0.ɵɵtemplate(4, PoButtonComponent_span_4_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-button-sm", ctx.small);
        i0.ɵɵproperty("disabled", ctx.disabled || ctx.loading);
        i0.ɵɵattribute("p-size", ctx.size)("p-kind", ctx.kind)("p-danger", ctx.danger);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
    } }, dependencies: [i1.NgIf, i2.PoLoadingIconComponent, i3.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoButtonComponent, [{
        type: Component,
        args: [{ selector: 'po-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\r\n  #button\r\n  class=\"po-button\"\r\n  type=\"button\"\r\n  [attr.p-size]=\"size\"\r\n  [attr.p-kind]=\"kind\"\r\n  [attr.p-danger]=\"danger\"\r\n  [class.po-button-sm]=\"small\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick()\"\r\n>\r\n  <div *ngIf=\"loading\" class=\"po-button-loading-icon\">\r\n    <po-loading-icon p-neutral-color></po-loading-icon>\r\n  </div>\r\n\r\n  <po-icon *ngIf=\"icon\" class=\"po-button-icon\" [p-icon]=\"icon\"></po-icon>\r\n  <span *ngIf=\"label\" class=\"po-button-label\">{{ label }}</span>\r\n</button>\r\n" }]
    }], null, { buttonElement: [{
            type: ViewChild,
            args: ['button', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1idXR0b24vcG8tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1idXR0b24vcG8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQ1NqRSw4QkFBb0Q7SUFDbEQscUNBQW1EO0lBQ3JELGlCQUFNOzs7SUFFTiw2QkFBdUU7OztJQUExQixvQ0FBZTs7O0lBQzVELCtCQUE0QztJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCxrQ0FBVzs7QURaekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBTUgsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFxQjtJQUcxRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Nk9BNUJVLGlCQUFpQixTQUFqQixpQkFBaUI7b0VBQWpCLGlCQUFpQjs7Ozs7O1FDakM5QixvQ0FVQztRQURDLDhGQUFTLGFBQVMsSUFBQztRQUVuQixrRUFFTTtRQUVOLDBFQUF1RTtRQUN2RSxvRUFBOEQ7UUFDaEUsaUJBQVM7O1FBVlAseUNBQTRCO1FBQzVCLHNEQUFnQztRQUpoQyxrQ0FBb0Isb0JBQUEsd0JBQUE7UUFPZCxlQUFhO1FBQWIsa0NBQWE7UUFJVCxlQUFVO1FBQVYsK0JBQVU7UUFDYixlQUFXO1FBQVgsZ0NBQVc7O3VGRGlCUCxpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSxXQUFXLG1CQUVKLHVCQUF1QixDQUFDLE1BQU07Z0JBR1IsYUFBYTtrQkFBbkQsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0J1dHRvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWJ1dHRvbi1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvQnV0dG9uQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tYnV0dG9uLWJhc2ljXCIgdGl0bGU9XCJQTyBCdXR0b24gQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLWJhc2ljL3NhbXBsZS1wby1idXR0b24tYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tYmFzaWMvc2FtcGxlLXBvLWJ1dHRvbi1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tYmFzaWMvc2FtcGxlLXBvLWJ1dHRvbi1iYXNpYy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tYmFzaWMvc2FtcGxlLXBvLWJ1dHRvbi1iYXNpYy5jb21wb25lbnQucG8udHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1idXR0b24tbGFic1wiIHRpdGxlPVwiUE8gQnV0dG9uIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLWxhYnMvc2FtcGxlLXBvLWJ1dHRvbi1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLWxhYnMvc2FtcGxlLXBvLWJ1dHRvbi1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWJ1dHRvbi1sYWJzL3NhbXBsZS1wby1idXR0b24tbGFicy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tbGFicy9zYW1wbGUtcG8tYnV0dG9uLWxhYnMuY29tcG9uZW50LnBvLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tYnV0dG9uLXNvY2lhbC1uZXR3b3JrXCIgdGl0bGU9XCJQTyBCdXR0b24gU29jaWFsIE5ldHdvcmtcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tYnV0dG9uLXNvY2lhbC1uZXR3b3JrL3NhbXBsZS1wby1idXR0b24tc29jaWFsLW5ldHdvcmsuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1idXR0b24tc29jaWFsLW5ldHdvcmsvc2FtcGxlLXBvLWJ1dHRvbi1zb2NpYWwtbmV0d29yay5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUG9CdXR0b25CYXNlQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdidXR0b24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25FbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBxdWUgYXRyaWJ1aSBmb2NvIGFvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIHRlciBhIGluc3TDom5jaWEgZG8gY29tcG9uZW50ZSBubyBET00sIHBvZGVuZG8gc2VyIHV0aWxpemFkbyBvIFZpZXdDaGlsZCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGltcG9ydCB7IFBvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiBAVmlld0NoaWxkKFBvQnV0dG9uQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b246IFBvQnV0dG9uQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNCdXR0b24oKSB7XHJcbiAgICogICB0aGlzLmJ1dHRvbi5mb2N1cygpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMuY2xpY2suZW1pdChudWxsKTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICNidXR0b25cclxuICBjbGFzcz1cInBvLWJ1dHRvblwiXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgW2F0dHIucC1zaXplXT1cInNpemVcIlxyXG4gIFthdHRyLnAta2luZF09XCJraW5kXCJcclxuICBbYXR0ci5wLWRhbmdlcl09XCJkYW5nZXJcIlxyXG4gIFtjbGFzcy5wby1idXR0b24tc21dPVwic21hbGxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICAoY2xpY2spPVwib25DbGljaygpXCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJwby1idXR0b24tbG9hZGluZy1pY29uXCI+XHJcbiAgICA8cG8tbG9hZGluZy1pY29uIHAtbmV1dHJhbC1jb2xvcj48L3BvLWxvYWRpbmctaWNvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWljb24gKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJwby1idXR0b24taWNvblwiIFtwLWljb25dPVwiaWNvblwiPjwvcG8taWNvbj5cclxuICA8c3BhbiAqbmdJZj1cImxhYmVsXCIgY2xhc3M9XCJwby1idXR0b24tbGFiZWxcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==