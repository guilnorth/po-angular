import { Component, ElementRef, ViewChild } from '@angular/core';
import { isKeyCodeEnter } from './../../utils/util';
import { PoDropdownBaseComponent } from './po-dropdown-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-popup/po-popup.component";
const _c0 = ["dropdownRef"];
const _c1 = ["popupRef"];
const _c2 = function (a0) { return { "po-dropdown-button-disabled": a0 }; };
const _c3 = function () { return ["bottom-left", "top-left"]; };
/**
 * @docsExtends PoDropdownBaseComponent
 *
 * @example
 *
 * <example name="po-dropdown-basic" title="PO Dropdown Basic" >
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"> </file>
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"> </file>
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-dropdown-labs" title="PO Dropdown Labs" >
 *  <file name="sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"> </file>
 *  <file name="sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-dropdown-social-network" title="PO Dropdown - Social Network" >
 *  <file name="sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"> </file>
 *  <file name="sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"> </file>
 * </example>
 */
export class PoDropdownComponent extends PoDropdownBaseComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.onScroll = ({ target }) => {
            if (this.open && target.className !== 'po-popup-container') {
                this.hideDropdown();
            }
        };
    }
    onKeyDown(event) {
        if (isKeyCodeEnter(event)) {
            this.toggleDropdown();
        }
    }
    toggleDropdown() {
        this.dropdownRef && !this.open && !this.disabled ? this.showDropdown() : this.hideDropdown();
    }
    checkClickArea(event) {
        return this.dropdownRef && this.dropdownRef.nativeElement.contains(event.target);
    }
    hideDropdown() {
        this.icon = 'po-icon-arrow-down';
        this.removeListeners();
        this.popupRef.close();
        this.open = false;
    }
    initializeListeners() {
        this.clickoutListener = this.renderer.listen('document', 'click', (event) => {
            this.wasClickedOnDropdown(event);
        });
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            this.hideDropdown();
        });
        window.addEventListener('scroll', this.onScroll, true);
    }
    removeListeners() {
        if (this.clickoutListener) {
            this.clickoutListener();
        }
        if (this.resizeListener) {
            this.resizeListener();
        }
        window.removeEventListener('scroll', this.onScroll, true);
    }
    showDropdown() {
        this.icon = 'po-icon-arrow-up';
        this.initializeListeners();
        this.popupRef.open();
        this.open = true;
    }
    wasClickedOnDropdown(event) {
        const clickedOnDropdown = this.checkClickArea(event);
        if (!clickedOnDropdown) {
            this.hideDropdown();
        }
    }
}
PoDropdownComponent.ɵfac = function PoDropdownComponent_Factory(t) { return new (t || PoDropdownComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoDropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDropdownComponent, selectors: [["po-dropdown"]], viewQuery: function PoDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popupRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 12, consts: [[1, "po-dropdown", 3, "tabindex", "click", "keydown"], ["dropdownRef", ""], [1, "po-dropdown-button", 3, "ngClass"], ["p-hide-arrow", "", "p-is-corner-align", "", "p-position", "bottom-left", 3, "p-actions", "p-custom-positions", "p-target"], ["popupRef", ""]], template: function PoDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function PoDropdownComponent_Template_div_click_0_listener() { return ctx.toggleDropdown(); })("keydown", function PoDropdownComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelement(4, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "po-popup", 3, 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵpropertyInterpolate("tabindex", ctx.disabled ? -1 : 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c2, ctx.disabled));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("po-dropdown-icon po-icon ", ctx.icon, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-actions", ctx.actions)("p-custom-positions", i0.ɵɵpureFunction0(11, _c3))("p-target", _r0);
    } }, dependencies: [i1.NgClass, i2.PoPopupComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDropdownComponent, [{
        type: Component,
        args: [{ selector: 'po-dropdown', template: "<div\r\n  #dropdownRef\r\n  class=\"po-dropdown\"\r\n  tabindex=\"{{ disabled ? -1 : 0 }}\"\r\n  (click)=\"toggleDropdown()\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n>\r\n  <div class=\"po-dropdown-button\" [ngClass]=\"{ 'po-dropdown-button-disabled': disabled }\">\r\n    {{ label }}\r\n    <div class=\"po-dropdown-icon po-icon {{ icon }}\"></div>\r\n  </div>\r\n\r\n  <po-popup\r\n    #popupRef\r\n    p-hide-arrow\r\n    p-is-corner-align\r\n    p-position=\"bottom-left\"\r\n    [p-actions]=\"actions\"\r\n    [p-custom-positions]=\"['bottom-left', 'top-left']\"\r\n    [p-target]=\"dropdownRef\"\r\n  >\r\n  </po-popup>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { dropdownRef: [{
            type: ViewChild,
            args: ['dropdownRef', { read: ElementRef, static: true }]
        }], popupRef: [{
            type: ViewChild,
            args: ['popupRef']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWRyb3Bkb3duL3BvLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1kcm9wZG93bi9wby1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztBQUV2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBS0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHVCQUF1QjtJQU85RCxZQUFvQixRQUFtQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQURVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFxQy9CLGFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQVEsRUFBRTtZQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDO0lBdkNGLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNLZXlDb2RlRW50ZXIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9Ecm9wZG93bkJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWRyb3Bkb3duLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Ecm9wZG93bkJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRyb3Bkb3duLWJhc2ljXCIgdGl0bGU9XCJQTyBEcm9wZG93biBCYXNpY1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHJvcGRvd24tYmFzaWMvc2FtcGxlLXBvLWRyb3Bkb3duLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHJvcGRvd24tYmFzaWMvc2FtcGxlLXBvLWRyb3Bkb3duLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRyb3Bkb3duLWJhc2ljL3NhbXBsZS1wby1kcm9wZG93bi1iYXNpYy5jb21wb25lbnQuZTJlLXNwZWMudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kcm9wZG93bi1iYXNpYy9zYW1wbGUtcG8tZHJvcGRvd24tYmFzaWMuY29tcG9uZW50LnBvLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZHJvcGRvd24tbGFic1wiIHRpdGxlPVwiUE8gRHJvcGRvd24gTGFic1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZHJvcGRvd24tbGFicy9zYW1wbGUtcG8tZHJvcGRvd24tbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRyb3Bkb3duLWxhYnMvc2FtcGxlLXBvLWRyb3Bkb3duLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZHJvcGRvd24tc29jaWFsLW5ldHdvcmtcIiB0aXRsZT1cIlBPIERyb3Bkb3duIC0gU29jaWFsIE5ldHdvcmtcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRyb3Bkb3duLXNvY2lhbC1uZXR3b3JrL3NhbXBsZS1wby1kcm9wZG93bi1zb2NpYWwtbmV0d29yay5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWRyb3Bkb3duLXNvY2lhbC1uZXR3b3JrL3NhbXBsZS1wby1kcm9wZG93bi1zb2NpYWwtbmV0d29yay5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0Ryb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgUG9Ecm9wZG93bkJhc2VDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duUmVmJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgZHJvcGRvd25SZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncG9wdXBSZWYnKSBwb3B1cFJlZjogYW55O1xyXG5cclxuICBwcml2YXRlIGNsaWNrb3V0TGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSByZXNpemVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmIChpc0tleUNvZGVFbnRlcihldmVudCkpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3Bkb3duUmVmICYmICF0aGlzLm9wZW4gJiYgIXRoaXMuZGlzYWJsZWQgPyB0aGlzLnNob3dEcm9wZG93bigpIDogdGhpcy5oaWRlRHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tDbGlja0FyZWEoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duUmVmICYmIHRoaXMuZHJvcGRvd25SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLmljb24gPSAncG8taWNvbi1hcnJvdy1kb3duJztcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnBvcHVwUmVmLmNsb3NlKCk7XHJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2xpY2tvdXRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLndhc0NsaWNrZWRPbkRyb3Bkb3duKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TY3JvbGwgPSAoeyB0YXJnZXQgfSk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRoaXMub3BlbiAmJiB0YXJnZXQuY2xhc3NOYW1lICE9PSAncG8tcG9wdXAtY29udGFpbmVyJykge1xyXG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgaWYgKHRoaXMuY2xpY2tvdXRMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmNsaWNrb3V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yZXNpemVMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLmljb24gPSAncG8taWNvbi1hcnJvdy11cCc7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucG9wdXBSZWYub3BlbigpO1xyXG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FzQ2xpY2tlZE9uRHJvcGRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRPbkRyb3Bkb3duID0gdGhpcy5jaGVja0NsaWNrQXJlYShldmVudCk7XHJcblxyXG4gICAgaWYgKCFjbGlja2VkT25Ecm9wZG93bikge1xyXG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgI2Ryb3Bkb3duUmVmXHJcbiAgY2xhc3M9XCJwby1kcm9wZG93blwiXHJcbiAgdGFiaW5kZXg9XCJ7eyBkaXNhYmxlZCA/IC0xIDogMCB9fVwiXHJcbiAgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKClcIlxyXG4gIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1kcm9wZG93bi1idXR0b25cIiBbbmdDbGFzc109XCJ7ICdwby1kcm9wZG93bi1idXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCB9XCI+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWRyb3Bkb3duLWljb24gcG8taWNvbiB7eyBpY29uIH19XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxwby1wb3B1cFxyXG4gICAgI3BvcHVwUmVmXHJcbiAgICBwLWhpZGUtYXJyb3dcclxuICAgIHAtaXMtY29ybmVyLWFsaWduXHJcbiAgICBwLXBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIlxyXG4gICAgW3AtYWN0aW9uc109XCJhY3Rpb25zXCJcclxuICAgIFtwLWN1c3RvbS1wb3NpdGlvbnNdPVwiWydib3R0b20tbGVmdCcsICd0b3AtbGVmdCddXCJcclxuICAgIFtwLXRhcmdldF09XCJkcm9wZG93blJlZlwiXHJcbiAgPlxyXG4gIDwvcG8tcG9wdXA+XHJcbjwvZGl2PlxyXG4iXX0=