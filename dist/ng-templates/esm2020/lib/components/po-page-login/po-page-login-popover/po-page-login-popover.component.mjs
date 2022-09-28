import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isExternalLink, isTypeof } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@po-ui/ng-components";
function PoPageLoginPopoverComponent_div_17_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r1.recovery);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.literals == null ? null : ctx_r1.literals.iForgotMyPassword, " ");
} }
function PoPageLoginPopoverComponent_div_17_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r2.recovery, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.literals == null ? null : ctx_r2.literals.iForgotMyPassword, " ");
} }
function PoPageLoginPopoverComponent_div_17_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵlistener("click", function PoPageLoginPopoverComponent_div_17_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onForgotPasswordClick(ctx_r4.recovery)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.literals == null ? null : ctx_r3.literals.iForgotMyPassword, " ");
} }
function PoPageLoginPopoverComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, PoPageLoginPopoverComponent_div_17_a_1_Template, 2, 2, "a", 9);
    i0.ɵɵtemplate(2, PoPageLoginPopoverComponent_div_17_a_2_Template, 2, 2, "a", 10);
    i0.ɵɵtemplate(3, PoPageLoginPopoverComponent_div_17_a_3_Template, 2, 1, "a", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.recoveryType === "internalLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.recoveryType === "externalLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.recoveryType);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para definição da mensagem de aviso de bloqueio do `po-page-login`.
 */
export class PoPageLoginPopoverComponent {
    constructor() {
        /** se 'p-recovery' for do tipo Function ou PoPageLoginRecovery, emite para o método 'openUrl' do componente 'po-page-login' */
        this.forgotPassword = new EventEmitter();
    }
    /** exibe o link de 'esqueci minha senha' e verifica se o valor é um link interno ou externo */
    set recovery(value) {
        this._recovery = value;
        if (isTypeof(value, 'string')) {
            this.recoveryType = isExternalLink(value) ? 'externalLink' : 'internalLink';
        }
    }
    get recovery() {
        return this._recovery;
    }
    onForgotPasswordClick(recovery) {
        this.forgotPassword.emit(recovery);
    }
}
PoPageLoginPopoverComponent.ɵfac = function PoPageLoginPopoverComponent_Factory(t) { return new (t || PoPageLoginPopoverComponent)(); };
PoPageLoginPopoverComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageLoginPopoverComponent, selectors: [["po-page-login-popover"]], inputs: { literals: ["p-literals", "literals"], recovery: ["p-recovery", "recovery"], remainingAttempts: ["p-remaining-attempts", "remainingAttempts"] }, outputs: { forgotPassword: "p-forgot-password" }, decls: 18, vars: 10, consts: [[1, "po-page-login-popover-container"], [1, "po-page-login-popover"], [1, "po-page-login-popover-arrow"], [1, "po-page-login-popover-content"], [1, "po-font-text-bold", "po-page-login-popover-title"], [1, "po-font-text"], [1, "po-font-text-bold", "po-page-login-popover-attempts"], ["class", "po-font-text-bold po-mt-1 po-page-login-popover-link-container", 4, "ngIf"], [1, "po-font-text-bold", "po-mt-1", "po-page-login-popover-link-container"], ["class", "po-page-login-popover-link", 3, "routerLink", 4, "ngIf"], ["class", "po-page-login-popover-link", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "po-page-login-popover-link", 3, "click", 4, "ngIf"], [1, "po-page-login-popover-link", 3, "routerLink"], ["target", "_blank", 1, "po-page-login-popover-link", 3, "href"], [1, "po-page-login-popover-link", 3, "click"]], template: function PoPageLoginPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3)(4, "p", 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 5);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p", 5);
        i0.ɵɵtext(9);
        i0.ɵɵelementStart(10, "span", 6);
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "poI18n");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "br");
        i0.ɵɵelementStart(15, "p", 5);
        i0.ɵɵtext(16);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, PoPageLoginPopoverComponent_div_17_Template, 4, 3, "div", 7);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.titlePopover, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.forgotYourPassword, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.ifYouTryHarder, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(12, 7, ctx.literals == null ? null : ctx.literals.attempts, ctx.remainingAttempts), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.literals == null ? null : ctx.literals.yourUserWillBeBlocked, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.createANewPasswordNow, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.recovery);
    } }, dependencies: [i1.NgIf, i2.RouterLinkWithHref, i3.PoI18nPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginPopoverComponent, [{
        type: Component,
        args: [{ selector: 'po-page-login-popover', template: "<div class=\"po-page-login-popover-container\">\r\n  <div class=\"po-page-login-popover\">\r\n    <div class=\"po-page-login-popover-arrow\"></div>\r\n    <div class=\"po-page-login-popover-content\">\r\n      <p class=\"po-font-text-bold po-page-login-popover-title\">\r\n        {{ literals?.titlePopover }}\r\n      </p>\r\n      <p class=\"po-font-text\">\r\n        {{ literals?.forgotYourPassword }}\r\n      </p>\r\n      <p class=\"po-font-text\">\r\n        {{ literals?.ifYouTryHarder }}\r\n        <span class=\"po-font-text-bold po-page-login-popover-attempts\">\r\n          {{ literals?.attempts | poI18n: remainingAttempts }} </span\r\n        >{{ literals?.yourUserWillBeBlocked }}\r\n      </p>\r\n      <br />\r\n      <p class=\"po-font-text\">\r\n        {{ literals?.createANewPasswordNow }}\r\n      </p>\r\n      <div *ngIf=\"recovery\" class=\"po-font-text-bold po-mt-1 po-page-login-popover-link-container\">\r\n        <a *ngIf=\"recoveryType === 'internalLink'\" class=\"po-page-login-popover-link\" [routerLink]=\"recovery\">\r\n          {{ literals?.iForgotMyPassword }}\r\n        </a>\r\n        <a *ngIf=\"recoveryType === 'externalLink'\" class=\"po-page-login-popover-link\" [href]=\"recovery\" target=\"_blank\">\r\n          {{ literals?.iForgotMyPassword }}\r\n        </a>\r\n        <a *ngIf=\"!recoveryType\" class=\"po-page-login-popover-link\" (click)=\"onForgotPasswordClick(recovery)\">\r\n          {{ literals?.iForgotMyPassword }}\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], null, { literals: [{
            type: Input,
            args: ['p-literals']
        }], recovery: [{
            type: Input,
            args: ['p-recovery']
        }], remainingAttempts: [{
            type: Input,
            args: ['p-remaining-attempts']
        }], forgotPassword: [{
            type: Output,
            args: ['p-forgot-password']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1sb2dpbi1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1sb2dpbi9wby1wYWdlLWxvZ2luLXBvcG92ZXIvcG8tcGFnZS1sb2dpbi1wb3BvdmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1sb2dpbi9wby1wYWdlLWxvZ2luLXBvcG92ZXIvcG8tcGFnZS1sb2dpbi1wb3BvdmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lDbUJ2RCw2QkFBc0c7SUFDcEcsWUFDRjtJQUFBLGlCQUFJOzs7SUFGMEUsNENBQXVCO0lBQ25HLGVBQ0Y7SUFERSxtR0FDRjs7O0lBQ0EsNkJBQWdIO0lBQzlHLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBRjBFLHdEQUFpQjtJQUM3RixlQUNGO0lBREUsbUdBQ0Y7Ozs7SUFDQSw2QkFBc0c7SUFBMUMseUtBQVMsZUFBQSw2Q0FBK0IsQ0FBQSxJQUFDO0lBQ25HLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBREYsZUFDRjtJQURFLG1HQUNGOzs7SUFURiw4QkFBNkY7SUFDM0YsK0VBRUk7SUFDSixnRkFFSTtJQUNKLGdGQUVJO0lBQ04saUJBQU07OztJQVRBLGVBQXFDO0lBQXJDLDZEQUFxQztJQUdyQyxlQUFxQztJQUFyQyw2REFBcUM7SUFHckMsZUFBbUI7SUFBbkIsMkNBQW1COztBRGYvQjs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8sMkJBQTJCO0lBWnhDO1FBK0JFLCtIQUErSDtRQUNsRyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FTdkU7SUExQkMsK0ZBQStGO0lBQy9GLElBQXlCLFFBQVEsQ0FBQyxLQUE4QztRQUM5RSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBWUQscUJBQXFCLENBQUMsUUFBUTtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOztzR0E1QlUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUNuQnhDLDhCQUE2QyxhQUFBO1FBRXpDLHlCQUErQztRQUMvQyw4QkFBMkMsV0FBQTtRQUV2QyxZQUNGO1FBQUEsaUJBQUk7UUFDSiw0QkFBd0I7UUFDdEIsWUFDRjtRQUFBLGlCQUFJO1FBQ0osNEJBQXdCO1FBQ3RCLFlBQ0E7UUFBQSxnQ0FBK0Q7UUFDN0QsYUFBcUQ7O1FBQUEsaUJBQ3REO1FBQUEsYUFDSDtRQUFBLGlCQUFJO1FBQ0osc0JBQU07UUFDTiw2QkFBd0I7UUFDdEIsYUFDRjtRQUFBLGlCQUFJO1FBQ0osOEVBVU07UUFDUixpQkFBTSxFQUFBLEVBQUE7O1FBMUJGLGVBQ0Y7UUFERSx3RkFDRjtRQUVFLGVBQ0Y7UUFERSw4RkFDRjtRQUVFLGVBQ0E7UUFEQSwwRkFDQTtRQUNFLGVBQXFEO1FBQXJELGtJQUFxRDtRQUN0RCxlQUNIO1FBREcsZ0dBQ0g7UUFHRSxlQUNGO1FBREUsaUdBQ0Y7UUFDTSxlQUFjO1FBQWQsbUNBQWM7O3VGRERiLDJCQUEyQjtjQVp2QyxTQUFTOzJCQUNFLHVCQUF1QjtnQkFZWixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFHTSxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFhWSxpQkFBaUI7a0JBQS9DLEtBQUs7bUJBQUMsc0JBQXNCO1lBR0EsY0FBYztrQkFBMUMsTUFBTTttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNFeHRlcm5hbExpbmssIGlzVHlwZW9mIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VMb2dpbkxpdGVyYWxzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1wYWdlLWxvZ2luLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUxvZ2luUmVjb3ZlcnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLXBhZ2UtbG9naW4tcmVjb3ZlcnkuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1sb2dpbi1wb3BvdmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1sb2dpbi1wb3BvdmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBwYXJhIGRlZmluacOnw6NvIGRhIG1lbnNhZ2VtIGRlIGF2aXNvIGRlIGJsb3F1ZWlvIGRvIGBwby1wYWdlLWxvZ2luYC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VMb2dpblBvcG92ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzOiBQb1BhZ2VMb2dpbkxpdGVyYWxzO1xyXG5cclxuICAvKiogZXhpYmUgbyBsaW5rIGRlICdlc3F1ZWNpIG1pbmhhIHNlbmhhJyBlIHZlcmlmaWNhIHNlIG8gdmFsb3Igw6kgdW0gbGluayBpbnRlcm5vIG91IGV4dGVybm8gKi9cclxuICBASW5wdXQoJ3AtcmVjb3ZlcnknKSBzZXQgcmVjb3ZlcnkodmFsdWU6IHN0cmluZyB8IEZ1bmN0aW9uIHwgUG9QYWdlTG9naW5SZWNvdmVyeSkge1xyXG4gICAgdGhpcy5fcmVjb3ZlcnkgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAoaXNUeXBlb2YodmFsdWUsICdzdHJpbmcnKSkge1xyXG4gICAgICB0aGlzLnJlY292ZXJ5VHlwZSA9IGlzRXh0ZXJuYWxMaW5rKHZhbHVlKSA/ICdleHRlcm5hbExpbmsnIDogJ2ludGVybmFsTGluayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmVjb3ZlcnkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVjb3Zlcnk7XHJcbiAgfVxyXG5cclxuICAvKiogZGVmaW5lIHNlIGEgbWVuc2FnZW0gZGV2ZXLDoSBzZXIgZXhpYmlkYSBjYXNvIHNlamEgbWFpb3IgcXVlIDAoemVybykgKi9cclxuICBASW5wdXQoJ3AtcmVtYWluaW5nLWF0dGVtcHRzJykgcmVtYWluaW5nQXR0ZW1wdHM6IG51bWJlcjtcclxuXHJcbiAgLyoqIHNlICdwLXJlY292ZXJ5JyBmb3IgZG8gdGlwbyBGdW5jdGlvbiBvdSBQb1BhZ2VMb2dpblJlY292ZXJ5LCBlbWl0ZSBwYXJhIG8gbcOpdG9kbyAnb3BlblVybCcgZG8gY29tcG9uZW50ZSAncG8tcGFnZS1sb2dpbicgKi9cclxuICBAT3V0cHV0KCdwLWZvcmdvdC1wYXNzd29yZCcpIGZvcmdvdFBhc3N3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHJlY292ZXJ5VHlwZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9yZWNvdmVyeTogc3RyaW5nIHwgRnVuY3Rpb24gfCBQb1BhZ2VMb2dpblJlY292ZXJ5O1xyXG5cclxuICBvbkZvcmdvdFBhc3N3b3JkQ2xpY2socmVjb3ZlcnkpIHtcclxuICAgIHRoaXMuZm9yZ290UGFzc3dvcmQuZW1pdChyZWNvdmVyeSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1wYWdlLWxvZ2luLXBvcG92ZXItY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbG9naW4tcG9wb3ZlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbG9naW4tcG9wb3Zlci1hcnJvd1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbG9naW4tcG9wb3Zlci1jb250ZW50XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicG8tZm9udC10ZXh0LWJvbGQgcG8tcGFnZS1sb2dpbi1wb3BvdmVyLXRpdGxlXCI+XHJcbiAgICAgICAge3sgbGl0ZXJhbHM/LnRpdGxlUG9wb3ZlciB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwicG8tZm9udC10ZXh0XCI+XHJcbiAgICAgICAge3sgbGl0ZXJhbHM/LmZvcmdvdFlvdXJQYXNzd29yZCB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwicG8tZm9udC10ZXh0XCI+XHJcbiAgICAgICAge3sgbGl0ZXJhbHM/LmlmWW91VHJ5SGFyZGVyIH19XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwby1mb250LXRleHQtYm9sZCBwby1wYWdlLWxvZ2luLXBvcG92ZXItYXR0ZW1wdHNcIj5cclxuICAgICAgICAgIHt7IGxpdGVyYWxzPy5hdHRlbXB0cyB8IHBvSTE4bjogcmVtYWluaW5nQXR0ZW1wdHMgfX0gPC9zcGFuXHJcbiAgICAgICAgPnt7IGxpdGVyYWxzPy55b3VyVXNlcldpbGxCZUJsb2NrZWQgfX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJwby1mb250LXRleHRcIj5cclxuICAgICAgICB7eyBsaXRlcmFscz8uY3JlYXRlQU5ld1Bhc3N3b3JkTm93IH19XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiAqbmdJZj1cInJlY292ZXJ5XCIgY2xhc3M9XCJwby1mb250LXRleHQtYm9sZCBwby1tdC0xIHBvLXBhZ2UtbG9naW4tcG9wb3Zlci1saW5rLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhICpuZ0lmPVwicmVjb3ZlcnlUeXBlID09PSAnaW50ZXJuYWxMaW5rJ1wiIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1wb3BvdmVyLWxpbmtcIiBbcm91dGVyTGlua109XCJyZWNvdmVyeVwiPlxyXG4gICAgICAgICAge3sgbGl0ZXJhbHM/LmlGb3Jnb3RNeVBhc3N3b3JkIH19XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhICpuZ0lmPVwicmVjb3ZlcnlUeXBlID09PSAnZXh0ZXJuYWxMaW5rJ1wiIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1wb3BvdmVyLWxpbmtcIiBbaHJlZl09XCJyZWNvdmVyeVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAge3sgbGl0ZXJhbHM/LmlGb3Jnb3RNeVBhc3N3b3JkIH19XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhICpuZ0lmPVwiIXJlY292ZXJ5VHlwZVwiIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1wb3BvdmVyLWxpbmtcIiAoY2xpY2spPVwib25Gb3Jnb3RQYXNzd29yZENsaWNrKHJlY292ZXJ5KVwiPlxyXG4gICAgICAgICAge3sgbGl0ZXJhbHM/LmlGb3Jnb3RNeVBhc3N3b3JkIH19XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19