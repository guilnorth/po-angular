import { Component } from '@angular/core';
import { PoCleanBaseComponent } from './po-clean-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoCleanComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵlistener("click", function PoCleanComponent_span_0_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clear()); });
    i0.ɵɵelementEnd();
} }
/**
 * @docsPrivate
 *
 * @docsExtends PoCleanBaseComponent
 *
 * @examplePrivate
 *
 * <example-private name="po-clean-labs" title="PO Clean Labs">
 *   <file name="sample-po-clean-labs.component.html"> </file>
 *   <file name="sample-po-clean-labs.component.ts"> </file>
 * </example-private>
 */
export class PoCleanComponent extends PoCleanBaseComponent {
    setInputValue(value) {
        if (this.inputRef && this.inputRef.nativeElement) {
            this.inputRef.nativeElement.value = value;
        }
    }
    getInputValue() {
        if (this.inputRef && this.inputRef.nativeElement) {
            return this.inputRef.nativeElement.value;
        }
    }
}
PoCleanComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoCleanComponent_BaseFactory; return function PoCleanComponent_Factory(t) { return (ɵPoCleanComponent_BaseFactory || (ɵPoCleanComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoCleanComponent)))(t || PoCleanComponent); }; }();
PoCleanComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCleanComponent, selectors: [["po-clean"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "po-icon po-field-icon po-icon-close", 3, "click", 4, "ngIf"], [1, "po-icon", "po-field-icon", "po-icon-close", 3, "click"]], template: function PoCleanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoCleanComponent_span_0_Template, 1, 0, "span", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showIcon());
    } }, dependencies: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCleanComponent, [{
        type: Component,
        args: [{ selector: 'po-clean', template: "<span *ngIf=\"showIcon()\" class=\"po-icon po-field-icon po-icon-close\" (click)=\"clear()\"> </span>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2xlYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWNsZWFuL3BvLWNsZWFuLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1jbGVhbi9wby1jbGVhbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztJQ0ZqRSwrQkFBdUY7SUFBbEIsNEpBQVMsZUFBQSxjQUFPLENBQUEsSUFBQztJQUFFLGlCQUFPOztBREkvRjs7Ozs7Ozs7Ozs7R0FXRztBQUtILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFBb0I7SUFDeEQsYUFBYSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztTQUMxQztJQUNILENBQUM7O3dPQVhVLGdCQUFnQixTQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQ3BCN0IsbUVBQStGOztRQUF4RixxQ0FBZ0I7O3VGRG9CVixnQkFBZ0I7Y0FKNUIsU0FBUzsyQkFDRSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NsZWFuQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tY2xlYW4tYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9DbGVhbkJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVQcml2YXRlXHJcbiAqXHJcbiAqIDxleGFtcGxlLXByaXZhdGUgbmFtZT1cInBvLWNsZWFuLWxhYnNcIiB0aXRsZT1cIlBPIENsZWFuIExhYnNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNsZWFuLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY2xlYW4tbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGUtcHJpdmF0ZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tY2xlYW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1jbGVhbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2xlYW5Db21wb25lbnQgZXh0ZW5kcyBQb0NsZWFuQmFzZUNvbXBvbmVudCB7XHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYgJiYgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXRWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmICYmIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8c3BhbiAqbmdJZj1cInNob3dJY29uKClcIiBjbGFzcz1cInBvLWljb24gcG8tZmllbGQtaWNvbiBwby1pY29uLWNsb3NlXCIgKGNsaWNrKT1cImNsZWFyKClcIj4gPC9zcGFuPlxyXG4iXX0=