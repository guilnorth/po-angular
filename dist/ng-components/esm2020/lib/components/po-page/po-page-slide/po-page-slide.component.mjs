import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { getFocusableElements, uuid } from '../../../utils/util';
import { PoPageSlideBaseComponent } from './po-page-slide-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-active-overlay/po-active-overlay.service";
import * as i2 from "@angular/common";
const _c0 = ["pageContent"];
function PoPageSlideComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function PoPageSlideComponent_div_0_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.close()); })("key.enter", function PoPageSlideComponent_div_0_button_9_Template_button_key_enter_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.close()); });
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementEnd();
} }
function PoPageSlideComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.subtitle);
} }
function PoPageSlideComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵlistener("mousedown", function PoPageSlideComponent_div_0_Template_div_mousedown_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onClickOut($event)); });
    i0.ɵɵelementStart(2, "div")(3, "div", 3, 4)(5, "div", 5)(6, "div", 6)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, PoPageSlideComponent_div_0_button_9_Template, 2, 0, "button", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PoPageSlideComponent_div_0_div_10_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 9);
    i0.ɵɵprojection(12);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("po-page-slide-container po-page-slide-right po-page-slide-", ctx_r0.size, "");
    i0.ɵɵproperty("@slide", undefined);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.hideClose);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.subtitle);
} }
const _c1 = ["*"];
/**
 * @docsExtends PoPageSlideBaseComponent
 *
 * @example
 *
 * <example name="po-page-slide-basic" title="PO Page Slide Basic">
 *  <file name="sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"> </file>
 *  <file name="sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-slide-labs" title="PO Page Slide Labs">
 *  <file name="sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"> </file>
 *  <file name="sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-slide-configuration" title="PO Page Slide - Configuration">
 *  <file name="sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"> </file>
 *  <file name="sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"> </file>
 * </example>
 */
export class PoPageSlideComponent extends PoPageSlideBaseComponent {
    constructor(poActiveOverlayService) {
        super();
        this.poActiveOverlayService = poActiveOverlayService;
        this.id = uuid();
        this.loadingCompleted = new ReplaySubject();
    }
    set pageContent(pageContent) {
        if (pageContent) {
            this._pageContent = pageContent;
            this.loadingCompleted.next();
        }
    }
    get pageContent() {
        return this._pageContent;
    }
    open() {
        this.sourceElement = document.activeElement;
        super.open();
        this.loadingCompleted.pipe(take(1)).pipe(delay(0)).subscribe(this.handleFocus.bind(this));
    }
    close() {
        this.poActiveOverlayService.activeOverlay.pop();
        super.close();
        this.removeEventListeners();
        this.sourceElement.focus();
    }
    onClickOut(event) {
        if (this.clickOut && !this.pageContent.nativeElement.contains(event.target)) {
            this.close();
        }
    }
    handleFocus() {
        this.poActiveOverlayService.activeOverlay.push(this.id);
        this.loadFirstElement();
        this.initFocus();
        document.addEventListener('focus', this.focusEvent, true);
    }
    initFocus() {
        // O foco não pode sair da página.
        this.focusEvent = (event) => {
            if (!this.pageContent.nativeElement.contains(event.target) &&
                this.poActiveOverlayService.activeOverlay[this.poActiveOverlayService.activeOverlay.length - 1] === this.id) {
                event.stopPropagation();
                this.firstElement.focus();
            }
        };
        if (this.hideClose) {
            this.firstElement.focus();
        }
        else {
            const elements = getFocusableElements(this.pageContent.nativeElement);
            const element = elements[1] || this.pageContent.nativeElement;
            element.focus();
        }
    }
    loadFirstElement() {
        this.firstElement = getFocusableElements(this.pageContent.nativeElement)[0] || this.pageContent.nativeElement;
    }
    removeEventListeners() {
        document.removeEventListener('focus', this.focusEvent, true);
        this.loadingCompleted.complete();
    }
}
PoPageSlideComponent.ɵfac = function PoPageSlideComponent_Factory(t) { return new (t || PoPageSlideComponent)(i0.ɵɵdirectiveInject(i1.PoActiveOverlayService)); };
PoPageSlideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageSlideComponent, selectors: [["po-page-slide"]], viewQuery: function PoPageSlideComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageContent = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "po-page-slide", "tabindex", "0", 4, "ngIf"], ["tabindex", "0", 1, "po-page-slide"], [1, "po-page-slide-overlay", 3, "mousedown"], ["tabindex", "-1", 1, "po-page-slide-content"], ["pageContent", ""], [1, "po-page-slide-header"], [1, "po-page-slide-title"], ["class", "po-page-slide-close-button", 3, "click", "key.enter", 4, "ngIf"], ["class", "po-page-slide-subtitle", 4, "ngIf"], [1, "po-page-slide-body"], [1, "po-page-slide-close-button", 3, "click", "key.enter"], [1, "po-icon", "po-icon-close"], [1, "po-page-slide-subtitle"]], template: function PoPageSlideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, PoPageSlideComponent_div_0_Template, 13, 8, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.hidden);
    } }, dependencies: [i2.NgIf], encapsulation: 2, data: { animation: [
            trigger('fade', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    group([animate('150ms', style({ opacity: 1 })), query('@slide', animateChild())])
                ]),
                transition(':leave', group([query('@slide', animateChild()), animate('150ms', style({ opacity: 0 }))]))
            ]),
            trigger('slide', [
                transition(':enter', [
                    style({ transform: 'translateX(50px)' }),
                    animate('691ms ease-in-out', style({ transform: 'none' }))
                ]),
                transition(':leave', [animate('150ms', style({ transform: 'translateX(50px)' }))])
            ])
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageSlideComponent, [{
        type: Component,
        args: [{ selector: 'po-page-slide', providers: [], animations: [
                    trigger('fade', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            group([animate('150ms', style({ opacity: 1 })), query('@slide', animateChild())])
                        ]),
                        transition(':leave', group([query('@slide', animateChild()), animate('150ms', style({ opacity: 0 }))]))
                    ]),
                    trigger('slide', [
                        transition(':enter', [
                            style({ transform: 'translateX(50px)' }),
                            animate('691ms ease-in-out', style({ transform: 'none' }))
                        ]),
                        transition(':leave', [animate('150ms', style({ transform: 'translateX(50px)' }))])
                    ])
                ], template: "<div class=\"po-page-slide\" tabindex=\"0\" *ngIf=\"!hidden\" [@fade]>\r\n  <div class=\"po-page-slide-overlay\" (mousedown)=\"onClickOut($event)\">\r\n    <div class=\"po-page-slide-container po-page-slide-right po-page-slide-{{ size }}\" [@slide]>\r\n      <div class=\"po-page-slide-content\" tabindex=\"-1\" #pageContent>\r\n        <div class=\"po-page-slide-header\">\r\n          <div class=\"po-page-slide-title\">\r\n            <span>{{ title }}</span>\r\n            <button *ngIf=\"!hideClose\" class=\"po-page-slide-close-button\" (click)=\"close()\" (key.enter)=\"close()\">\r\n              <span class=\"po-icon po-icon-close\"></span>\r\n            </button>\r\n          </div>\r\n          <div class=\"po-page-slide-subtitle\" *ngIf=\"subtitle\">{{ subtitle }}</div>\r\n        </div>\r\n        <div class=\"po-page-slide-body\">\r\n          <ng-content></ng-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoActiveOverlayService }]; }, { pageContent: [{
            type: ViewChild,
            args: ['pageContent', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1zbGlkZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS9wby1wYWdlLXNsaWRlL3BvLXBhZ2Utc2xpZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1zbGlkZS9wby1wYWdlLXNsaWRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ0Q5RCxrQ0FBc0c7SUFBeEMsMktBQVMsZUFBQSxjQUFPLENBQUEsSUFBQyxzS0FBYyxlQUFBLGNBQU8sQ0FBQSxJQUFyQjtJQUM3RSwyQkFBMkM7SUFDN0MsaUJBQVM7OztJQUVYLCtCQUFxRDtJQUFBLFlBQWM7SUFBQSxpQkFBTTs7O0lBQXBCLGVBQWM7SUFBZCxxQ0FBYzs7OztJQVg3RSw4QkFBZ0UsYUFBQTtJQUMzQiw0S0FBYSxlQUFBLHlCQUFrQixDQUFBLElBQUM7SUFDakUsMkJBQTJGLGdCQUFBLGFBQUEsYUFBQSxXQUFBO0lBSTdFLFlBQVc7SUFBQSxpQkFBTztJQUN4QixpRkFFUztJQUNYLGlCQUFNO0lBQ04sNkVBQXlFO0lBQzNFLGlCQUFNO0lBQ04sK0JBQWdDO0lBQzlCLG1CQUF5QjtJQUMzQixpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBOzs7SUFmMEMsaUNBQU87SUFFdEQsZUFBNEU7SUFBNUUsd0dBQTRFO0lBQUMsa0NBQVE7SUFJNUUsZUFBVztJQUFYLGtDQUFXO0lBQ1IsZUFBZ0I7SUFBaEIsd0NBQWdCO0lBSVUsZUFBYztJQUFkLHNDQUFjOzs7QUREN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFzQkgsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3QjtJQXFCaEUsWUFBb0Isc0JBQThDO1FBQ2hFLEtBQUssRUFBRSxDQUFDO1FBRFUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQWpCMUQsT0FBRSxHQUFXLElBQUksRUFBRSxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFrQnJELENBQUM7SUFiRCxJQUFvRCxXQUFXLENBQUMsV0FBdUI7UUFDckYsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFNTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzVDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBaUI7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyxTQUFTO1FBQ2Ysa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNqQyxJQUNFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFDM0c7Z0JBQ0EsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLE1BQU0sUUFBUSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzlELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ2hILENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzt3RkFqRlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7K0JBVUcsVUFBVTs7OzswQ0E1QmpDLEVBQUU7O1FDakNmLHNFQW1CTTs7UUFuQm1DLGtDQUFhO3VFRGtDeEM7WUFDVixPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNkLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDckIsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsRixDQUFDO2dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEcsQ0FBQztZQUNGLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDM0QsQ0FBQztnQkFDRixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRixDQUFDO1NBQ0g7dUZBRVUsb0JBQW9CO2NBckJoQyxTQUFTOzJCQUNFLGVBQWUsYUFFZCxFQUFFLGNBQ0Q7b0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDZCxVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDbEYsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN4RyxDQUFDO29CQUNGLE9BQU8sQ0FBQyxPQUFPLEVBQUU7d0JBQ2YsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUM7NEJBQ3hDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt5QkFDM0QsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbkYsQ0FBQztpQkFDSDt5RUFZbUQsV0FBVztrQkFBOUQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgYW5pbWF0ZUNoaWxkLCBncm91cCwgcXVlcnksIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBnZXRGb2N1c2FibGVFbGVtZW50cywgdXVpZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9BY3RpdmVPdmVybGF5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWFjdGl2ZS1vdmVybGF5L3BvLWFjdGl2ZS1vdmVybGF5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VTbGlkZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utc2xpZGUtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VTbGlkZUJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2Utc2xpZGUtYmFzaWNcIiB0aXRsZT1cIlBPIFBhZ2UgU2xpZGUgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1zbGlkZS1iYXNpYy9zYW1wbGUtcG8tcGFnZS1zbGlkZS1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2Utc2xpZGUtYmFzaWMvc2FtcGxlLXBvLXBhZ2Utc2xpZGUtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1zbGlkZS1sYWJzXCIgdGl0bGU9XCJQTyBQYWdlIFNsaWRlIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1zbGlkZS1sYWJzL3NhbXBsZS1wby1wYWdlLXNsaWRlLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLXNsaWRlLWxhYnMvc2FtcGxlLXBvLXBhZ2Utc2xpZGUtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLXNsaWRlLWNvbmZpZ3VyYXRpb25cIiB0aXRsZT1cIlBPIFBhZ2UgU2xpZGUgLSBDb25maWd1cmF0aW9uXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2Utc2xpZGUtY29uZmlndXJhdGlvbi9zYW1wbGUtcG8tcGFnZS1zbGlkZS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1zbGlkZS1jb25maWd1cmF0aW9uL3NhbXBsZS1wby1wYWdlLXNsaWRlLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLXNsaWRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1zbGlkZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIGdyb3VwKFthbmltYXRlKCcxNTBtcycsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksIHF1ZXJ5KCdAc2xpZGUnLCBhbmltYXRlQ2hpbGQoKSldKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgZ3JvdXAoW3F1ZXJ5KCdAc2xpZGUnLCBhbmltYXRlQ2hpbGQoKSksIGFuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKV0pKVxyXG4gICAgXSksXHJcbiAgICB0cmlnZ2VyKCdzbGlkZScsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1MHB4KScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnNjkxbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ25vbmUnIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW2FuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUwcHgpJyB9KSldKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VTbGlkZUNvbXBvbmVudCBleHRlbmRzIFBvUGFnZVNsaWRlQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfcGFnZUNvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgZmlyc3RFbGVtZW50OiBhbnk7XHJcbiAgcHJpdmF0ZSBpZDogc3RyaW5nID0gdXVpZCgpO1xyXG4gIHByaXZhdGUgbG9hZGluZ0NvbXBsZXRlZCA9IG5ldyBSZXBsYXlTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBzb3VyY2VFbGVtZW50OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZm9jdXNFdmVudDogRXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFnZUNvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2V0IHBhZ2VDb250ZW50KHBhZ2VDb250ZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICBpZiAocGFnZUNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5fcGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudDtcclxuICAgICAgdGhpcy5sb2FkaW5nQ29tcGxldGVkLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwYWdlQ29udGVudCgpOiBFbGVtZW50UmVmIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlQ29udGVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9BY3RpdmVPdmVybGF5U2VydmljZTogUG9BY3RpdmVPdmVybGF5U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zb3VyY2VFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMubG9hZGluZ0NvbXBsZXRlZC5waXBlKHRha2UoMSkpLnBpcGUoZGVsYXkoMCkpLnN1YnNjcmliZSh0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlLmFjdGl2ZU92ZXJsYXkucG9wKCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuc291cmNlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tPdXQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNsaWNrT3V0ICYmICF0aGlzLnBhZ2VDb250ZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlLmFjdGl2ZU92ZXJsYXkucHVzaCh0aGlzLmlkKTtcclxuICAgIHRoaXMubG9hZEZpcnN0RWxlbWVudCgpO1xyXG4gICAgdGhpcy5pbml0Rm9jdXMoKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuZm9jdXNFdmVudCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRGb2N1cygpIHtcclxuICAgIC8vIE8gZm9jbyBuw6NvIHBvZGUgc2FpciBkYSBww6FnaW5hLlxyXG4gICAgdGhpcy5mb2N1c0V2ZW50ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMucGFnZUNvbnRlbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgdGhpcy5wb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlLmFjdGl2ZU92ZXJsYXlbdGhpcy5wb0FjdGl2ZU92ZXJsYXlTZXJ2aWNlLmFjdGl2ZU92ZXJsYXkubGVuZ3RoIC0gMV0gPT09IHRoaXMuaWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5maXJzdEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5oaWRlQ2xvc2UpIHtcclxuICAgICAgdGhpcy5maXJzdEVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHModGhpcy5wYWdlQ29udGVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzWzFdIHx8IHRoaXMucGFnZUNvbnRlbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRmlyc3RFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBnZXRGb2N1c2FibGVFbGVtZW50cyh0aGlzLnBhZ2VDb250ZW50Lm5hdGl2ZUVsZW1lbnQpWzBdIHx8IHRoaXMucGFnZUNvbnRlbnQubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuZm9jdXNFdmVudCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmxvYWRpbmdDb21wbGV0ZWQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXBhZ2Utc2xpZGVcIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cIiFoaWRkZW5cIiBbQGZhZGVdPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1wYWdlLXNsaWRlLW92ZXJsYXlcIiAobW91c2Vkb3duKT1cIm9uQ2xpY2tPdXQoJGV2ZW50KVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXBhZ2Utc2xpZGUtY29udGFpbmVyIHBvLXBhZ2Utc2xpZGUtcmlnaHQgcG8tcGFnZS1zbGlkZS17eyBzaXplIH19XCIgW0BzbGlkZV0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLXNsaWRlLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCIgI3BhZ2VDb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLXNsaWRlLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvLXBhZ2Utc2xpZGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgdGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGlkZUNsb3NlXCIgY2xhc3M9XCJwby1wYWdlLXNsaWRlLWNsb3NlLWJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgpXCIgKGtleS5lbnRlcik9XCJjbG9zZSgpXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwby1pY29uIHBvLWljb24tY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1zbGlkZS1zdWJ0aXRsZVwiICpuZ0lmPVwic3VidGl0bGVcIj57eyBzdWJ0aXRsZSB9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLXNsaWRlLWJvZHlcIj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==