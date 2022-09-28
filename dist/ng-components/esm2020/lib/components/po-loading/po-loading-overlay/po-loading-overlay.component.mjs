import { Component } from '@angular/core';
import { PoLoadingOverlayBaseComponent } from './po-loading-overlay-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-language/po-language.service";
import * as i2 from "../po-loading.component";
/**
 *
 * @docsExtends PoLoadingOverlayBaseComponent
 *
 * @example
 *
 * <example name="po-loading-overlay-basic" title="PO Loading Overlay Basic">
 *  <file name="sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"> </file>
 *  <file name="sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-loading-overlay-labs" title="PO Loading Overlay Labs">
 *  <file name="sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"> </file>
 *  <file name="sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-loading-overlay-connection-test" title="PO Loading Overlay - Connection Test">
 *  <file name="sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"> </file>
 *  <file name="sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"> </file>
 * </example>
 */
export class PoLoadingOverlayComponent extends PoLoadingOverlayBaseComponent {
    constructor(changeDetector, languageService) {
        super(languageService);
        this.changeDetector = changeDetector;
    }
}
PoLoadingOverlayComponent.ɵfac = function PoLoadingOverlayComponent_Factory(t) { return new (t || PoLoadingOverlayComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoLoadingOverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoLoadingOverlayComponent, selectors: [["po-loading-overlay"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "po-loading-overlay-content", 3, "p-text"]], template: function PoLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "po-loading", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-overlay-absolute", !ctx.screenLock)("po-overlay-fixed", ctx.screenLock);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-text", ctx.text);
    } }, dependencies: [i2.PoLoadingComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoadingOverlayComponent, [{
        type: Component,
        args: [{ selector: 'po-loading-overlay', template: "<div [class.po-overlay-absolute]=\"!screenLock\" [class.po-overlay-fixed]=\"screenLock\">\r\n  <po-loading class=\"po-loading-overlay-content\" [p-text]=\"text\"></po-loading>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PoLanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1sb2FkaW5nL3BvLWxvYWRpbmctb3ZlcmxheS9wby1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWxvYWRpbmcvcG8tbG9hZGluZy1vdmVybGF5L3BvLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUk3RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUVwRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFLSCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsNkJBQTZCO0lBQzFFLFlBQW1CLGNBQWlDLEVBQUUsZUFBa0M7UUFDdEYsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRE4sbUJBQWMsR0FBZCxjQUFjLENBQW1CO0lBRXBELENBQUM7O2tHQUhVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDL0J0QywyQkFBcUY7UUFDbkYsZ0NBQTRFO1FBQzlFLGlCQUFNOztRQUZELHNEQUF5QyxvQ0FBQTtRQUNHLGVBQWU7UUFBZixpQ0FBZTs7dUZEOEJuRCx5QkFBeUI7Y0FKckMsU0FBUzsyQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb0xvYWRpbmdPdmVybGF5QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tbG9hZGluZy1vdmVybGF5LWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Mb2FkaW5nT3ZlcmxheUJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvYWRpbmctb3ZlcmxheS1iYXNpY1wiIHRpdGxlPVwiUE8gTG9hZGluZyBPdmVybGF5IEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvYWRpbmctb3ZlcmxheS1iYXNpYy9zYW1wbGUtcG8tbG9hZGluZy1vdmVybGF5LWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9hZGluZy1vdmVybGF5LWJhc2ljL3NhbXBsZS1wby1sb2FkaW5nLW92ZXJsYXktYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbG9hZGluZy1vdmVybGF5LWxhYnNcIiB0aXRsZT1cIlBPIExvYWRpbmcgT3ZlcmxheSBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvYWRpbmctb3ZlcmxheS1sYWJzL3NhbXBsZS1wby1sb2FkaW5nLW92ZXJsYXktbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvYWRpbmctb3ZlcmxheS1sYWJzL3NhbXBsZS1wby1sb2FkaW5nLW92ZXJsYXktbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1sb2FkaW5nLW92ZXJsYXktY29ubmVjdGlvbi10ZXN0XCIgdGl0bGU9XCJQTyBMb2FkaW5nIE92ZXJsYXkgLSBDb25uZWN0aW9uIFRlc3RcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9hZGluZy1vdmVybGF5LWNvbm5lY3Rpb24tdGVzdC9zYW1wbGUtcG8tbG9hZGluZy1vdmVybGF5LWNvbm5lY3Rpb24tdGVzdC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvYWRpbmctb3ZlcmxheS1jb25uZWN0aW9uLXRlc3Qvc2FtcGxlLXBvLWxvYWRpbmctb3ZlcmxheS1jb25uZWN0aW9uLXRlc3QuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1sb2FkaW5nLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Mb2FkaW5nT3ZlcmxheUNvbXBvbmVudCBleHRlbmRzIFBvTG9hZGluZ092ZXJsYXlCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFtjbGFzcy5wby1vdmVybGF5LWFic29sdXRlXT1cIiFzY3JlZW5Mb2NrXCIgW2NsYXNzLnBvLW92ZXJsYXktZml4ZWRdPVwic2NyZWVuTG9ja1wiPlxyXG4gIDxwby1sb2FkaW5nIGNsYXNzPVwicG8tbG9hZGluZy1vdmVybGF5LWNvbnRlbnRcIiBbcC10ZXh0XT1cInRleHRcIj48L3BvLWxvYWRpbmc+XHJcbjwvZGl2PlxyXG4iXX0=