import { Component } from '@angular/core';
import { poLocaleDefault } from '@po-ui/ng-components';
import { isExternalLink } from '../../utils/util';
import { PoPageBlockedUserBaseComponent } from './po-page-blocked-user-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@po-ui/ng-components";
import * as i3 from "../po-page-background/po-page-background.component";
import * as i4 from "./po-page-blocked-user-contacts/po-page-blocked-user-contacts.component";
import * as i5 from "./po-page-blocked-user-reason/po-page-blocked-user-reason.component";
export const poPageBlockedUserButtonLiterals = {
    en: {
        primaryButton: 'Back to home screen'
    },
    es: {
        primaryButton: 'Volver al inicio'
    },
    pt: {
        primaryButton: 'Voltar para o início'
    },
    ru: {
        primaryButton: 'Перейти к началу страницы'
    }
};
/**
 * @docsExtends PoPageBlockedUserBaseComponent
 *
 * @example
 *
 * <example name="po-page-blocked-user-basic" title="PO Page Blocked User Basic">
 *  <file name="sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-labs" title="PO Page Blocked User Labs">
 *  <file name="sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-exceeded-attempts" title="PO Page Blocked User Exceeded Attempts">
 *  <file name="sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-expired-password" title="PO Page Blocked User Expired Password">
 *  <file name="sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"> </file>
 * </example>
 */
export class PoPageBlockedUserComponent extends PoPageBlockedUserBaseComponent {
    constructor(activatedRoute, router, languageService) {
        super();
        this.activatedRoute = activatedRoute;
        this.router = router;
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poPageBlockedUserButtonLiterals[poLocaleDefault],
            ...poPageBlockedUserButtonLiterals[language]
        };
    }
    ngOnInit() {
        this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
    }
    navigateTo(url) {
        isExternalLink(url) ? window.open(url) : this.router.navigate([url || '/']);
    }
    checkingForMetadataProperty(object, property) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            return object[property];
        }
    }
    checkingForRouteMetadata(data) {
        if (Object.keys(data).length !== 0) {
            this.contactEmail = this.checkingForMetadataProperty(data, 'contactEmail') || this.contactEmail;
            this.contactPhone = this.checkingForMetadataProperty(data, 'contactPhone') || this.contactPhone;
            this.reason = this.checkingForMetadataProperty(data, 'reason') || this.reason;
            this.urlBack = this.checkingForMetadataProperty(data, 'urlBack') || this.urlBack;
        }
    }
}
PoPageBlockedUserComponent.ɵfac = function PoPageBlockedUserComponent_Factory(t) { return new (t || PoPageBlockedUserComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageBlockedUserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBlockedUserComponent, selectors: [["po-page-blocked-user"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 8, consts: [[1, "po-page-blocked-user-wrapper"], [1, "po-page-background-wrap"], [3, "p-hide-logo", "p-logo", "p-secondary-logo"], [3, "p-params", "p-reason"], [1, "po-page-blocked-user-mobile-bottom-alignment"], [3, "p-email", "p-phone"], [1, "po-row"], ["p-kind", "primary", 1, "po-lg-12", "po-sm-12", "po-page-blocked-user-button", 3, "p-label", "p-click"]], template: function PoPageBlockedUserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "po-page-background", 2);
        i0.ɵɵelement(3, "po-page-blocked-user-reason", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "po-page-blocked-user-contacts", 5);
        i0.ɵɵelementStart(6, "div", 6)(7, "po-button", 7);
        i0.ɵɵlistener("p-click", function PoPageBlockedUserComponent_Template_po_button_p_click_7_listener() { return ctx.navigateTo(ctx.urlBack); });
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-hide-logo", true)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-params", ctx.params)("p-reason", ctx.reason);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-email", ctx.contactEmail)("p-phone", ctx.contactPhone);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-label", ctx.literals == null ? null : ctx.literals.primaryButton);
    } }, dependencies: [i2.PoButtonComponent, i3.PoPageBackgroundComponent, i4.PoPageBlockedUserContactsComponent, i5.PoPageBlockedUserReasonComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserComponent, [{
        type: Component,
        args: [{ selector: 'po-page-blocked-user', template: "<div class=\"po-page-blocked-user-wrapper\">\r\n  <div class=\"po-page-background-wrap\">\r\n    <po-page-background [p-hide-logo]=\"true\" [p-logo]=\"logo\" [p-secondary-logo]=\"secondaryLogo\">\r\n      <po-page-blocked-user-reason [p-params]=\"params\" [p-reason]=\"reason\"> </po-page-blocked-user-reason>\r\n\r\n      <div class=\"po-page-blocked-user-mobile-bottom-alignment\">\r\n        <po-page-blocked-user-contacts [p-email]=\"contactEmail\" [p-phone]=\"contactPhone\">\r\n        </po-page-blocked-user-contacts>\r\n\r\n        <div class=\"po-row\">\r\n          <po-button\r\n            class=\"po-lg-12 po-sm-12 po-page-blocked-user-button\"\r\n            p-kind=\"primary\"\r\n            [p-label]=\"literals?.primaryButton\"\r\n            (p-click)=\"navigateTo(urlBack)\"\r\n          >\r\n          </po-button>\r\n        </div>\r\n      </div>\r\n    </po-page-background>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.PoLanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1ibG9ja2VkLXVzZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWJsb2NrZWQtdXNlci9wby1wYWdlLWJsb2NrZWQtdXNlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtYmxvY2tlZC11c2VyL3BvLXBhZ2UtYmxvY2tlZC11c2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFxQixlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7QUFFdkYsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQVc7SUFDckQsRUFBRSxFQUFPO1FBQ1AsYUFBYSxFQUFFLHFCQUFxQjtLQUNyQztJQUNELEVBQUUsRUFBTztRQUNQLGFBQWEsRUFBRSxrQkFBa0I7S0FDbEM7SUFDRCxFQUFFLEVBQU87UUFDUCxhQUFhLEVBQUUsc0JBQXNCO0tBQ3RDO0lBQ0QsRUFBRSxFQUFPO1FBQ1AsYUFBYSxFQUFFLDJCQUEyQjtLQUMzQztDQUNGLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBTUgsTUFBTSxPQUFPLDBCQUEyQixTQUFRLDhCQUE4QjtJQUc1RSxZQUFvQixjQUE4QixFQUFVLE1BQWMsRUFBRSxlQUFrQztRQUM1RyxLQUFLLEVBQUUsQ0FBQztRQURVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFHeEUsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFcEQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEdBQUcsK0JBQStCLENBQUMsZUFBZSxDQUFDO1lBQ25ELEdBQUcsK0JBQStCLENBQUMsUUFBUSxDQUFDO1NBQzdDLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDcEIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsUUFBUTtRQUNsRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDMUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sd0JBQXdCLENBQUMsSUFBSTtRQUNuQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNsRjtJQUNILENBQUM7O29HQW5DVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ3REdkMsOEJBQTBDLGFBQUEsNEJBQUE7UUFHcEMsaURBQW9HO1FBRXBHLDhCQUEwRDtRQUN4RCxtREFDZ0M7UUFFaEMsOEJBQW9CLG1CQUFBO1FBS2hCLDhHQUFXLDJCQUFtQixJQUFDO1FBRWpDLGlCQUFZLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFkRSxlQUFvQjtRQUFwQixrQ0FBb0Isb0JBQUEsdUNBQUE7UUFDVCxlQUFtQjtRQUFuQixxQ0FBbUIsd0JBQUE7UUFHZixlQUF3QjtRQUF4QiwwQ0FBd0IsNkJBQUE7UUFPbkQsZUFBbUM7UUFBbkMsa0ZBQW1DOzt1RkR5Q2xDLDBCQUEwQjtjQUp0QyxTQUFTOzJCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UsIHBvTG9jYWxlRGVmYXVsdCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGlzRXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VCbG9ja2VkVXNlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWJhc2UuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBwb1BhZ2VCbG9ja2VkVXNlckJ1dHRvbkxpdGVyYWxzOiBPYmplY3QgPSB7XHJcbiAgZW46IDxhbnk+e1xyXG4gICAgcHJpbWFyeUJ1dHRvbjogJ0JhY2sgdG8gaG9tZSBzY3JlZW4nXHJcbiAgfSxcclxuICBlczogPGFueT57XHJcbiAgICBwcmltYXJ5QnV0dG9uOiAnVm9sdmVyIGFsIGluaWNpbydcclxuICB9LFxyXG4gIHB0OiA8YW55PntcclxuICAgIHByaW1hcnlCdXR0b246ICdWb2x0YXIgcGFyYSBvIGluw61jaW8nXHJcbiAgfSxcclxuICBydTogPGFueT57XHJcbiAgICBwcmltYXJ5QnV0dG9uOiAn0J/QtdGA0LXQudGC0Lgg0Log0L3QsNGH0LDQu9GDINGB0YLRgNCw0L3QuNGG0YsnXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VCbG9ja2VkVXNlckJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWJhc2ljXCIgdGl0bGU9XCJQTyBQYWdlIEJsb2NrZWQgVXNlciBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWJsb2NrZWQtdXNlci1iYXNpYy9zYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWJsb2NrZWQtdXNlci1iYXNpYy9zYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItbGFic1wiIHRpdGxlPVwiUE8gUGFnZSBCbG9ja2VkIFVzZXIgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWJsb2NrZWQtdXNlci1sYWJzL3NhbXBsZS1wby1wYWdlLWJsb2NrZWQtdXNlci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItbGFicy9zYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWJsb2NrZWQtdXNlci1leGNlZWRlZC1hdHRlbXB0c1wiIHRpdGxlPVwiUE8gUGFnZSBCbG9ja2VkIFVzZXIgRXhjZWVkZWQgQXR0ZW1wdHNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItZXhjZWVkZWQtYXR0ZW1wdHMvc2FtcGxlLXBvLXBhZ2UtYmxvY2tlZC11c2VyLWV4Y2VlZGVkLWF0dGVtcHRzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItZXhjZWVkZWQtYXR0ZW1wdHMvc2FtcGxlLXBvLXBhZ2UtYmxvY2tlZC11c2VyLWV4Y2VlZGVkLWF0dGVtcHRzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWV4cGlyZWQtcGFzc3dvcmRcIiB0aXRsZT1cIlBPIFBhZ2UgQmxvY2tlZCBVc2VyIEV4cGlyZWQgUGFzc3dvcmRcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItZXhwaXJlZC1wYXNzd29yZC9zYW1wbGUtcG8tcGFnZS1ibG9ja2VkLXVzZXItZXhwaXJlZC1wYXNzd29yZC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtYmxvY2tlZC11c2VyLWV4cGlyZWQtcGFzc3dvcmQvc2FtcGxlLXBvLXBhZ2UtYmxvY2tlZC11c2VyLWV4cGlyZWQtcGFzc3dvcmQuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1ibG9ja2VkLXVzZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wYWdlLWJsb2NrZWQtdXNlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUJsb2NrZWRVc2VyQ29tcG9uZW50IGV4dGVuZHMgUG9QYWdlQmxvY2tlZFVzZXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBsaXRlcmFscztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG5cclxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XHJcbiAgICAgIC4uLnBvUGFnZUJsb2NrZWRVc2VyQnV0dG9uTGl0ZXJhbHNbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgICAgLi4ucG9QYWdlQmxvY2tlZFVzZXJCdXR0b25MaXRlcmFsc1tsYW5ndWFnZV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hlY2tpbmdGb3JSb3V0ZU1ldGFkYXRhKHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKHVybDogc3RyaW5nKSB7XHJcbiAgICBpc0V4dGVybmFsTGluayh1cmwpID8gd2luZG93Lm9wZW4odXJsKSA6IHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmwgfHwgJy8nXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XHJcbiAgICAgIHJldHVybiBvYmplY3RbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja2luZ0ZvclJvdXRlTWV0YWRhdGEoZGF0YSkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB0aGlzLmNvbnRhY3RFbWFpbCA9IHRoaXMuY2hlY2tpbmdGb3JNZXRhZGF0YVByb3BlcnR5KGRhdGEsICdjb250YWN0RW1haWwnKSB8fCB0aGlzLmNvbnRhY3RFbWFpbDtcclxuICAgICAgdGhpcy5jb250YWN0UGhvbmUgPSB0aGlzLmNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShkYXRhLCAnY29udGFjdFBob25lJykgfHwgdGhpcy5jb250YWN0UGhvbmU7XHJcbiAgICAgIHRoaXMucmVhc29uID0gdGhpcy5jaGVja2luZ0Zvck1ldGFkYXRhUHJvcGVydHkoZGF0YSwgJ3JlYXNvbicpIHx8IHRoaXMucmVhc29uO1xyXG4gICAgICB0aGlzLnVybEJhY2sgPSB0aGlzLmNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShkYXRhLCAndXJsQmFjaycpIHx8IHRoaXMudXJsQmFjaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLXdyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1iYWNrZ3JvdW5kLXdyYXBcIj5cclxuICAgIDxwby1wYWdlLWJhY2tncm91bmQgW3AtaGlkZS1sb2dvXT1cInRydWVcIiBbcC1sb2dvXT1cImxvZ29cIiBbcC1zZWNvbmRhcnktbG9nb109XCJzZWNvbmRhcnlMb2dvXCI+XHJcbiAgICAgIDxwby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24gW3AtcGFyYW1zXT1cInBhcmFtc1wiIFtwLXJlYXNvbl09XCJyZWFzb25cIj4gPC9wby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItbW9iaWxlLWJvdHRvbS1hbGlnbm1lbnRcIj5cclxuICAgICAgICA8cG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdHMgW3AtZW1haWxdPVwiY29udGFjdEVtYWlsXCIgW3AtcGhvbmVdPVwiY29udGFjdFBob25lXCI+XHJcbiAgICAgICAgPC9wby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0cz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLWxnLTEyIHBvLXNtLTEyIHBvLXBhZ2UtYmxvY2tlZC11c2VyLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIHAta2luZD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscz8ucHJpbWFyeUJ1dHRvblwiXHJcbiAgICAgICAgICAgIChwLWNsaWNrKT1cIm5hdmlnYXRlVG8odXJsQmFjaylcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9wby1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wby1wYWdlLWJhY2tncm91bmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=