import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["contactGroup"];
const _c1 = ["mailItem"];
const _c2 = ["phoneItem"];
const poPageBlockedUserContactItemMargin = 16;
export class PoPageBlockedUserContactsComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.overflowItem = true;
    }
    set email(value) {
        this._email = value;
        this.checkContactItemWidth();
    }
    get email() {
        return this._email;
    }
    set phone(value) {
        this._phone = value;
        this.checkContactItemWidth();
    }
    get phone() {
        return this._phone;
    }
    checkContactItemWidth() {
        this.overflowItem = true;
        if (this.phone && this.email) {
            this.changeDetector.detectChanges();
            const phoneWidth = this.phoneItem.nativeElement.offsetWidth;
            const mailWidth = this.mailItem.nativeElement.offsetWidth;
            const contactGroupHalfWidth = this.contactGroup.nativeElement.offsetWidth / 2 - poPageBlockedUserContactItemMargin;
            this.overflowItem =
                phoneWidth > contactGroupHalfWidth || mailWidth > contactGroupHalfWidth - poPageBlockedUserContactItemMargin;
        }
    }
}
PoPageBlockedUserContactsComponent.ɵfac = function PoPageBlockedUserContactsComponent_Factory(t) { return new (t || PoPageBlockedUserContactsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPageBlockedUserContactsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBlockedUserContactsComponent, selectors: [["po-page-blocked-user-contacts"]], viewQuery: function PoPageBlockedUserContactsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
        i0.ɵɵviewQuery(_c2, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contactGroup = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mailItem = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.phoneItem = _t.first);
    } }, inputs: { email: ["p-email", "email"], phone: ["p-phone", "phone"] }, decls: 16, vars: 14, consts: [[1, "po-page-blocked-user-contact-group", "po-row", "po-mb-3"], ["contactGroup", ""], [1, "po-page-blocked-user-contact-item", 3, "ngClass"], ["target", "_self", 1, "po-page-blocked-user-link", "po-clickable", 3, "href"], [1, "po-page-blocked-user-contact-group-item"], [1, "po-page-blocked-user-contact-icon", "po-icon", "po-icon-telephone", "po-pr-1"], [1, "po-page-blocked-user-contact-text", "po-font-text"], ["phoneItem", ""], [1, "po-page-blocked-user-contact-item", "po-page-blocked-user-contact-mail", 3, "ngClass"], [1, "po-page-blocked-user-contact-icon", "po-icon", "po-icon-mail", "po-pr-1"], ["mailItem", ""]], template: function PoPageBlockedUserContactsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
        i0.ɵɵelement(5, "span", 5);
        i0.ɵɵelementStart(6, "div", 6, 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(9, "div", 8)(10, "a", 3)(11, "div", 4);
        i0.ɵɵelement(12, "span", 9);
        i0.ɵɵelementStart(13, "div", 6, 10);
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("po-invisible", !ctx.phone);
        i0.ɵɵproperty("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
        i0.ɵɵpropertyInterpolate1("href", "tel:", ctx.phone, "", i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.phone);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-invisible", !ctx.email);
        i0.ɵɵproperty("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
        i0.ɵɵpropertyInterpolate1("href", "mailto:", ctx.email, "", i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.email);
    } }, dependencies: [i1.NgClass], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserContactsComponent, [{
        type: Component,
        args: [{ selector: 'po-page-blocked-user-contacts', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #contactGroup class=\"po-page-blocked-user-contact-group po-row po-mb-3\">\r\n  <div\r\n    class=\"po-page-blocked-user-contact-item\"\r\n    [class.po-invisible]=\"!phone\"\r\n    [ngClass]=\"overflowItem ? 'po-md-12' : 'po-md-6'\"\r\n  >\r\n    <a\r\n      class=\"po-page-blocked-user-link po-clickable\"\r\n      [class.po-page-blocked-user-contact-content-inline]=\"overflowItem\"\r\n      href=\"tel:{{ phone }}\"\r\n      target=\"_self\"\r\n    >\r\n      <div class=\"po-page-blocked-user-contact-group-item\">\r\n        <span class=\"po-page-blocked-user-contact-icon po-icon po-icon-telephone po-pr-1\"></span>\r\n        <div #phoneItem class=\"po-page-blocked-user-contact-text po-font-text\">{{ phone }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div\r\n    class=\"po-page-blocked-user-contact-item po-page-blocked-user-contact-mail\"\r\n    [class.po-invisible]=\"!email\"\r\n    [ngClass]=\"overflowItem ? 'po-md-12' : 'po-md-6'\"\r\n  >\r\n    <a\r\n      class=\"po-page-blocked-user-link po-clickable\"\r\n      [class.po-page-blocked-user-contact-content-inline]=\"overflowItem\"\r\n      href=\"mailto:{{ email }}\"\r\n      target=\"_self\"\r\n    >\r\n      <div class=\"po-page-blocked-user-contact-group-item\">\r\n        <span class=\"po-page-blocked-user-contact-icon po-icon po-icon-mail po-pr-1\"></span>\r\n        <div #mailItem class=\"po-page-blocked-user-contact-text po-font-text\">{{ email }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { contactGroup: [{
            type: ViewChild,
            args: ['contactGroup', { static: true }]
        }], mailItem: [{
            type: ViewChild,
            args: ['mailItem', { static: true }]
        }], phoneItem: [{
            type: ViewChild,
            args: ['phoneItem', { static: true }]
        }], email: [{
            type: Input,
            args: ['p-email']
        }], phone: [{
            type: Input,
            args: ['p-phone']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWJsb2NrZWQtdXNlci9wby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0cy9wby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtYmxvY2tlZC11c2VyL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3RzL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3RzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUVwSCxNQUFNLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQztBQU85QyxNQUFNLE9BQU8sa0NBQWtDO0lBZ0M3QyxZQUFvQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUF6QnJELGlCQUFZLEdBQVksSUFBSSxDQUFDO0lBeUIyQixDQUFDO0lBcEJ6RCxJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFJTyxxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDNUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQzFELE1BQU0scUJBQXFCLEdBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsa0NBQWtDLENBQUM7WUFFdkYsSUFBSSxDQUFDLFlBQVk7Z0JBQ2YsVUFBVSxHQUFHLHFCQUFxQixJQUFJLFNBQVMsR0FBRyxxQkFBcUIsR0FBRyxrQ0FBa0MsQ0FBQztTQUNoSDtJQUNILENBQUM7O29IQWhEVSxrQ0FBa0M7cUZBQWxDLGtDQUFrQzs7Ozs7Ozs7OztRQ1QvQyxpQ0FBNkUsYUFBQSxXQUFBLGFBQUE7UUFhckUsMEJBQXlGO1FBQ3pGLGlDQUF1RTtRQUFBLFlBQVc7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQTtRQUk5Riw4QkFJQyxZQUFBLGNBQUE7UUFRSywyQkFBb0Y7UUFDcEYsbUNBQXNFO1FBQUEsYUFBVztRQUFBLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBNUIzRixlQUE2QjtRQUE3QiwwQ0FBNkI7UUFDN0IsbUVBQWlEO1FBSS9DLGVBQWtFO1FBQWxFLCtFQUFrRTtRQUNsRSwwRUFBc0I7UUFLbUQsZUFBVztRQUFYLCtCQUFXO1FBTXRGLGVBQTZCO1FBQTdCLDBDQUE2QjtRQUM3QixtRUFBaUQ7UUFJL0MsZUFBa0U7UUFBbEUsK0VBQWtFO1FBQ2xFLDZFQUF5QjtRQUsrQyxlQUFXO1FBQVgsK0JBQVc7O3VGRHRCNUUsa0NBQWtDO2NBTDlDLFNBQVM7MkJBQ0UsK0JBQStCLG1CQUV4Qix1QkFBdUIsQ0FBQyxNQUFNO29FQUdGLFlBQVk7a0JBQXhELFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVGLFFBQVE7a0JBQWhELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVHLFNBQVM7a0JBQWxELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQU9sQixLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVM7WUFVTSxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY29uc3QgcG9QYWdlQmxvY2tlZFVzZXJDb250YWN0SXRlbU1hcmdpbiA9IDE2O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlQmxvY2tlZFVzZXJDb250YWN0c0NvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFjdEdyb3VwJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGFjdEdyb3VwOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdtYWlsSXRlbScsIHsgc3RhdGljOiB0cnVlIH0pIG1haWxJdGVtOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdwaG9uZUl0ZW0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBwaG9uZUl0ZW06IEVsZW1lbnRSZWY7XHJcblxyXG4gIG92ZXJmbG93SXRlbTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgX2VtYWlsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcGhvbmU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLWVtYWlsJykgc2V0IGVtYWlsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2VtYWlsID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5jaGVja0NvbnRhY3RJdGVtV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbWFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbWFpbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgncC1waG9uZScpIHNldCBwaG9uZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9waG9uZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuY2hlY2tDb250YWN0SXRlbVdpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGhvbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGhvbmU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0NvbnRhY3RJdGVtV2lkdGgoKSB7XHJcbiAgICB0aGlzLm92ZXJmbG93SXRlbSA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMucGhvbmUgJiYgdGhpcy5lbWFpbCkge1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgIGNvbnN0IHBob25lV2lkdGggPSB0aGlzLnBob25lSXRlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICBjb25zdCBtYWlsV2lkdGggPSB0aGlzLm1haWxJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3RHcm91cEhhbGZXaWR0aCA9XHJcbiAgICAgICAgdGhpcy5jb250YWN0R3JvdXAubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDIgLSBwb1BhZ2VCbG9ja2VkVXNlckNvbnRhY3RJdGVtTWFyZ2luO1xyXG5cclxuICAgICAgdGhpcy5vdmVyZmxvd0l0ZW0gPVxyXG4gICAgICAgIHBob25lV2lkdGggPiBjb250YWN0R3JvdXBIYWxmV2lkdGggfHwgbWFpbFdpZHRoID4gY29udGFjdEdyb3VwSGFsZldpZHRoIC0gcG9QYWdlQmxvY2tlZFVzZXJDb250YWN0SXRlbU1hcmdpbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAjY29udGFjdEdyb3VwIGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdC1ncm91cCBwby1yb3cgcG8tbWItM1wiPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdC1pdGVtXCJcclxuICAgIFtjbGFzcy5wby1pbnZpc2libGVdPVwiIXBob25lXCJcclxuICAgIFtuZ0NsYXNzXT1cIm92ZXJmbG93SXRlbSA/ICdwby1tZC0xMicgOiAncG8tbWQtNidcIlxyXG4gID5cclxuICAgIDxhXHJcbiAgICAgIGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItbGluayBwby1jbGlja2FibGVcIlxyXG4gICAgICBbY2xhc3MucG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdC1jb250ZW50LWlubGluZV09XCJvdmVyZmxvd0l0ZW1cIlxyXG4gICAgICBocmVmPVwidGVsOnt7IHBob25lIH19XCJcclxuICAgICAgdGFyZ2V0PVwiX3NlbGZcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0LWljb24gcG8taWNvbiBwby1pY29uLXRlbGVwaG9uZSBwby1wci0xXCI+PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgI3Bob25lSXRlbSBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3QtdGV4dCBwby1mb250LXRleHRcIj57eyBwaG9uZSB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3QtaXRlbSBwby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0LW1haWxcIlxyXG4gICAgW2NsYXNzLnBvLWludmlzaWJsZV09XCIhZW1haWxcIlxyXG4gICAgW25nQ2xhc3NdPVwib3ZlcmZsb3dJdGVtID8gJ3BvLW1kLTEyJyA6ICdwby1tZC02J1wiXHJcbiAgPlxyXG4gICAgPGFcclxuICAgICAgY2xhc3M9XCJwby1wYWdlLWJsb2NrZWQtdXNlci1saW5rIHBvLWNsaWNrYWJsZVwiXHJcbiAgICAgIFtjbGFzcy5wby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0LWNvbnRlbnQtaW5saW5lXT1cIm92ZXJmbG93SXRlbVwiXHJcbiAgICAgIGhyZWY9XCJtYWlsdG86e3sgZW1haWwgfX1cIlxyXG4gICAgICB0YXJnZXQ9XCJfc2VsZlwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLWJsb2NrZWQtdXNlci1jb250YWN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3QtaWNvbiBwby1pY29uIHBvLWljb24tbWFpbCBwby1wci0xXCI+PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgI21haWxJdGVtIGNsYXNzPVwicG8tcGFnZS1ibG9ja2VkLXVzZXItY29udGFjdC10ZXh0IHBvLWZvbnQtdGV4dFwiPnt7IGVtYWlsIH19PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19