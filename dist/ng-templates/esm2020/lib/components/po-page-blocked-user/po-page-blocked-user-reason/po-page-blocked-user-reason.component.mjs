import { Component, Input } from '@angular/core';
import { poLocaleDefault } from '@po-ui/ng-components';
import { poPageBlockedUserLiterals } from './../literals/i18n/po-page-blocked-user-literals';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
import * as i2 from "@angular/common";
function PoPageBlockedUserReasonComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.literals == null ? null : ctx_r0.literals.thirdPhrase);
} }
export class PoPageBlockedUserReasonComponent {
    constructor(changeDetector, languageService) {
        this.changeDetector = changeDetector;
        this.language = languageService.getShortLanguage();
    }
    ngOnChanges(changes) {
        if (changes.reason || changes.params) {
            this.getLiterals();
        }
    }
    ngOnInit() {
        this.getLiterals();
    }
    getImageByReasonType() {
        let reasonImage;
        switch (this.reason) {
            case 'none': {
                reasonImage = 'big-lock';
                break;
            }
            case 'exceededAttempts': {
                reasonImage = 'blocked-user';
                break;
            }
            case 'expiredPassword': {
                reasonImage = 'expired';
                break;
            }
        }
        return `./assets/images/${reasonImage}.svg`;
    }
    getParams() {
        this.literalParams =
            this.reason === 'expiredPassword'
                ? [this.params.days, this.params.days]
                : [this.params.attempts, this.params.hours];
    }
    getLiterals() {
        this.getParams();
        this.literals = {
            ...poPageBlockedUserLiterals[this.reason][poLocaleDefault],
            ...poPageBlockedUserLiterals[this.reason][this.language]
        };
        this.changeDetector.detectChanges();
    }
}
PoPageBlockedUserReasonComponent.ɵfac = function PoPageBlockedUserReasonComponent_Factory(t) { return new (t || PoPageBlockedUserReasonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageBlockedUserReasonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBlockedUserReasonComponent, selectors: [["po-page-blocked-user-reason"]], inputs: { params: ["p-params", "params"], reason: ["p-reason", "reason"] }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 8, consts: [[1, "po-page-blocked-user-reason-content"], [1, "po-page-blocked-user-image", "po-mb-3", 3, "src"], [1, "po-page-blocked-user-header", "po-mb-md-3", "po-row"], [1, "po-md-12"], [1, "po-page-blocked-user-text", "po-font-text", "po-row"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12", "po-page-blocked-user-text-bold"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12"], ["class", "po-mb-sm-2 po-mb-md-3 po-md-12", 4, "ngIf"]], template: function PoPageBlockedUserReasonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 4)(6, "div", 5);
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "poI18n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, PoPageBlockedUserReasonComponent_div_11_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.getImageByReasonType(), i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.literals == null ? null : ctx.literals.title);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(8, 5, ctx.literals == null ? null : ctx.literals.firstPhrase, ctx.literalParams), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.literals == null ? null : ctx.literals.secondPhrase);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.literals == null ? null : ctx.literals.thirdPhrase);
    } }, dependencies: [i2.NgIf, i1.PoI18nPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserReasonComponent, [{
        type: Component,
        args: [{ selector: 'po-page-blocked-user-reason', template: "<div class=\"po-page-blocked-user-reason-content\">\r\n  <img class=\"po-page-blocked-user-image po-mb-3\" [src]=\"getImageByReasonType()\" />\r\n  <div class=\"po-page-blocked-user-header po-mb-md-3 po-row\">\r\n    <div class=\"po-md-12\">{{ literals?.title }}</div>\r\n  </div>\r\n  <div class=\"po-page-blocked-user-text po-font-text po-row\">\r\n    <div class=\"po-mb-sm-2 po-mb-md-3 po-md-12 po-page-blocked-user-text-bold\">\r\n      {{ literals?.firstPhrase | poI18n: literalParams }}\r\n    </div>\r\n    <div class=\"po-mb-sm-2 po-mb-md-3 po-md-12\">{{ literals?.secondPhrase }}</div>\r\n    <div class=\"po-mb-sm-2 po-mb-md-3 po-md-12\" *ngIf=\"literals?.thirdPhrase\">{{ literals?.thirdPhrase }}</div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PoLanguageService }]; }, { params: [{
            type: Input,
            args: ['p-params']
        }], reason: [{
            type: Input,
            args: ['p-reason']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1ibG9ja2VkLXVzZXItcmVhc29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1ibG9ja2VkLXVzZXIvcG8tcGFnZS1ibG9ja2VkLXVzZXItcmVhc29uL3BvLXBhZ2UtYmxvY2tlZC11c2VyLXJlYXNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtYmxvY2tlZC11c2VyL3BvLXBhZ2UtYmxvY2tlZC11c2VyLXJlYXNvbi9wby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUV0RyxPQUFPLEVBQXFCLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7OztJQ016Riw4QkFBMEU7SUFBQSxZQUEyQjtJQUFBLGlCQUFNOzs7SUFBakMsZUFBMkI7SUFBM0Isa0ZBQTJCOztBREV6RyxNQUFNLE9BQU8sZ0NBQWdDO0lBVTNDLFlBQW9CLGNBQWlDLEVBQUUsZUFBa0M7UUFBckUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksV0FBVyxDQUFDO1FBRWhCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQixLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLFdBQVcsR0FBRyxVQUFVLENBQUM7Z0JBQ3pCLE1BQU07YUFDUDtZQUNELEtBQUssa0JBQWtCLENBQUMsQ0FBQztnQkFDdkIsV0FBVyxHQUFHLGNBQWMsQ0FBQztnQkFDN0IsTUFBTTthQUNQO1lBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN0QixXQUFXLEdBQUcsU0FBUyxDQUFDO2dCQUN4QixNQUFNO2FBQ1A7U0FDRjtRQUNELE9BQU8sbUJBQW1CLFdBQVcsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGFBQWE7WUFDaEIsSUFBSSxDQUFDLE1BQU0sS0FBSyxpQkFBaUI7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQzFELEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDekQsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0hBNURVLGdDQUFnQzttRkFBaEMsZ0NBQWdDO1FDWjdDLDhCQUFpRDtRQUMvQyx5QkFBaUY7UUFDakYsOEJBQTJELGFBQUE7UUFDbkMsWUFBcUI7UUFBQSxpQkFBTSxFQUFBO1FBRW5ELDhCQUEyRCxhQUFBO1FBRXZELFlBQ0Y7O1FBQUEsaUJBQU07UUFDTiw4QkFBNEM7UUFBQSxhQUE0QjtRQUFBLGlCQUFNO1FBQzlFLG1GQUEyRztRQUM3RyxpQkFBTSxFQUFBOztRQVYwQyxlQUE4QjtRQUE5QixrRUFBOEI7UUFFdEQsZUFBcUI7UUFBckIsc0VBQXFCO1FBSXpDLGVBQ0Y7UUFERSxnSUFDRjtRQUM0QyxlQUE0QjtRQUE1Qiw2RUFBNEI7UUFDM0IsZUFBMkI7UUFBM0IsNkVBQTJCOzt1RkRFL0QsZ0NBQWdDO2NBSjVDLFNBQVM7MkJBQ0UsNkJBQTZCO29HQUlwQixNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFFRSxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlLCBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBwb1BhZ2VCbG9ja2VkVXNlckxpdGVyYWxzIH0gZnJvbSAnLi8uLi9saXRlcmFscy9pMThuL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWxpdGVyYWxzJztcclxuaW1wb3J0IHsgUG9QYWdlQmxvY2tlZFVzZXJSZWFzb24gfSBmcm9tICcuLi9lbnVtcy9wby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24uZW51bSc7XHJcbmltcG9ydCB7IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24tcGFyYW1zLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2UtYmxvY2tlZC11c2VyLXJlYXNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtYmxvY2tlZC11c2VyLXJlYXNvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIEBJbnB1dCgncC1wYXJhbXMnKSBwYXJhbXM6IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uUGFyYW1zO1xyXG5cclxuICBASW5wdXQoJ3AtcmVhc29uJykgcmVhc29uOiBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbjtcclxuXHJcbiAgbGl0ZXJhbFBhcmFtcztcclxuICBsaXRlcmFsczogeyB0aXRsZTogc3RyaW5nOyBmaXJzdFBocmFzZTogc3RyaW5nOyBzZWNvbmRQaHJhc2U6IHN0cmluZzsgdGhpcmRQaHJhc2U6IHN0cmluZyB9O1xyXG5cclxuICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnJlYXNvbiB8fCBjaGFuZ2VzLnBhcmFtcykge1xyXG4gICAgICB0aGlzLmdldExpdGVyYWxzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0TGl0ZXJhbHMoKTtcclxuICB9XHJcblxyXG4gIGdldEltYWdlQnlSZWFzb25UeXBlKCkge1xyXG4gICAgbGV0IHJlYXNvbkltYWdlO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5yZWFzb24pIHtcclxuICAgICAgY2FzZSAnbm9uZSc6IHtcclxuICAgICAgICByZWFzb25JbWFnZSA9ICdiaWctbG9jayc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZXhjZWVkZWRBdHRlbXB0cyc6IHtcclxuICAgICAgICByZWFzb25JbWFnZSA9ICdibG9ja2VkLXVzZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2V4cGlyZWRQYXNzd29yZCc6IHtcclxuICAgICAgICByZWFzb25JbWFnZSA9ICdleHBpcmVkJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAuL2Fzc2V0cy9pbWFnZXMvJHtyZWFzb25JbWFnZX0uc3ZnYDtcclxuICB9XHJcblxyXG4gIGdldFBhcmFtcygpIHtcclxuICAgIHRoaXMubGl0ZXJhbFBhcmFtcyA9XHJcbiAgICAgIHRoaXMucmVhc29uID09PSAnZXhwaXJlZFBhc3N3b3JkJ1xyXG4gICAgICAgID8gW3RoaXMucGFyYW1zLmRheXMsIHRoaXMucGFyYW1zLmRheXNdXHJcbiAgICAgICAgOiBbdGhpcy5wYXJhbXMuYXR0ZW1wdHMsIHRoaXMucGFyYW1zLmhvdXJzXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGl0ZXJhbHMoKSB7XHJcbiAgICB0aGlzLmdldFBhcmFtcygpO1xyXG5cclxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XHJcbiAgICAgIC4uLnBvUGFnZUJsb2NrZWRVc2VyTGl0ZXJhbHNbdGhpcy5yZWFzb25dW3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgIC4uLnBvUGFnZUJsb2NrZWRVc2VyTGl0ZXJhbHNbdGhpcy5yZWFzb25dW3RoaXMubGFuZ3VhZ2VdXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItcmVhc29uLWNvbnRlbnRcIj5cclxuICA8aW1nIGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItaW1hZ2UgcG8tbWItM1wiIFtzcmNdPVwiZ2V0SW1hZ2VCeVJlYXNvblR5cGUoKVwiIC8+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWhlYWRlciBwby1tYi1tZC0zIHBvLXJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLW1kLTEyXCI+e3sgbGl0ZXJhbHM/LnRpdGxlIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLXRleHQgcG8tZm9udC10ZXh0IHBvLXJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLW1iLXNtLTIgcG8tbWItbWQtMyBwby1tZC0xMiBwby1wYWdlLWJsb2NrZWQtdXNlci10ZXh0LWJvbGRcIj5cclxuICAgICAge3sgbGl0ZXJhbHM/LmZpcnN0UGhyYXNlIHwgcG9JMThuOiBsaXRlcmFsUGFyYW1zIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1tYi1zbS0yIHBvLW1iLW1kLTMgcG8tbWQtMTJcIj57eyBsaXRlcmFscz8uc2Vjb25kUGhyYXNlIH19PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tbWItc20tMiBwby1tYi1tZC0zIHBvLW1kLTEyXCIgKm5nSWY9XCJsaXRlcmFscz8udGhpcmRQaHJhc2VcIj57eyBsaXRlcmFscz8udGhpcmRQaHJhc2UgfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==