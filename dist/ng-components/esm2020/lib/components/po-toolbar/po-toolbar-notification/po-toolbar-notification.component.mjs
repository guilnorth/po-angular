import { Component, Input } from '@angular/core';
import { PoControlPositionService } from '../../../services/po-control-position/po-control-position.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-popup/po-popup.component";
function PoToolbarNotificationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.notificationNumber, " ");
} }
/**
 * @docsPrivate
 *
 * @usedBy PoToolbarComponent
 *
 * @description
 *
 * O componente `po-toolbar-notification` tem como objetivo notificar o usuário de novas ações da aplicação que necessitam de atenção,
 * como por exemplo um alerta de nova mensagem.
 *
 * O mesmo também permite que a cada nova notificação seja incrementado e exibido, ou não, este número em uma *tag* ao lado do
 * ícone de notificações.
 */
export class PoToolbarNotificationComponent {
    constructor() {
        this._notificationNumber = 0;
    }
    /** Define o número de notificações. */
    set notificationNumber(value) {
        this._notificationNumber = Number.isInteger(value) ? value : 0;
    }
    get notificationNumber() {
        return this._notificationNumber;
    }
}
PoToolbarNotificationComponent.ɵfac = function PoToolbarNotificationComponent_Factory(t) { return new (t || PoToolbarNotificationComponent)(); };
PoToolbarNotificationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoToolbarNotificationComponent, selectors: [["po-toolbar-notification"]], inputs: { notificationActions: ["p-notification-actions", "notificationActions"], notificationNumber: ["p-notification-number", "notificationNumber"] }, features: [i0.ɵɵProvidersFeature([PoControlPositionService])], decls: 6, vars: 3, consts: [[1, "po-toolbar-notification", "po-clickable", 3, "click"], [1, "po-icon", "po-icon-notification", "po-toolbar-icon"], ["notification", ""], ["class", "po-toolbar-notification-badge", 4, "ngIf"], [3, "p-actions", "p-target"], ["popup", ""], [1, "po-toolbar-notification-badge"]], template: function PoToolbarNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoToolbarNotificationComponent_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const _r2 = i0.ɵɵreference(5); return i0.ɵɵresetView(_r2.toggle()); });
        i0.ɵɵelement(1, "span", 1, 2);
        i0.ɵɵtemplate(3, PoToolbarNotificationComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "po-popup", 4, 5);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.notificationNumber);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-actions", ctx.notificationActions)("p-target", _r0);
    } }, dependencies: [i1.NgIf, i2.PoPopupComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToolbarNotificationComponent, [{
        type: Component,
        args: [{ selector: 'po-toolbar-notification', providers: [PoControlPositionService], template: "<div class=\"po-toolbar-notification po-clickable\" (click)=\"popup.toggle()\">\r\n  <span #notification class=\"po-icon po-icon-notification po-toolbar-icon\"></span>\r\n  <div *ngIf=\"notificationNumber\" class=\"po-toolbar-notification-badge\">\r\n    {{ notificationNumber }}\r\n  </div>\r\n</div>\r\n\r\n<po-popup #popup [p-actions]=\"notificationActions\" [p-target]=\"notification\"> </po-popup>\r\n" }]
    }], null, { notificationActions: [{
            type: Input,
            args: ['p-notification-actions']
        }], notificationNumber: [{
            type: Input,
            args: ['p-notification-number']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRvb2xiYXIvcG8tdG9vbGJhci1ub3RpZmljYXRpb24vcG8tdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRvb2xiYXIvcG8tdG9vbGJhci1ub3RpZmljYXRpb24vcG8tdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7Ozs7O0lDQTNHLDhCQUFzRTtJQUNwRSxZQUNGO0lBQUEsaUJBQU07OztJQURKLGVBQ0Y7SUFERSwwREFDRjs7QURFRjs7Ozs7Ozs7Ozs7O0dBWUc7QUFNSCxNQUFNLE9BQU8sOEJBQThCO0lBTDNDO1FBU1Usd0JBQW1CLEdBQVksQ0FBQyxDQUFDO0tBVTFDO0lBUkMsdUNBQXVDO0lBQ3ZDLElBQW9DLGtCQUFrQixDQUFDLEtBQWE7UUFDbEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs0R0FiVSw4QkFBOEI7aUZBQTlCLDhCQUE4QixzT0FGOUIsQ0FBQyx3QkFBd0IsQ0FBQzs7UUN0QnZDLDhCQUEyRTtRQUF6Qiw4SkFBUyxlQUFBLFlBQWMsQ0FBQSxJQUFDO1FBQ3hFLDZCQUFnRjtRQUNoRiwrRUFFTTtRQUNSLGlCQUFNO1FBRU4saUNBQXlGOzs7UUFMakYsZUFBd0I7UUFBeEIsNkNBQXdCO1FBS2YsZUFBaUM7UUFBakMsbURBQWlDLGlCQUFBOzt1RkRpQnJDLDhCQUE4QjtjQUwxQyxTQUFTOzJCQUNFLHlCQUF5QixhQUV4QixDQUFDLHdCQUF3QixDQUFDO2dCQUlKLG1CQUFtQjtrQkFBbkQsS0FBSzttQkFBQyx3QkFBd0I7WUFLSyxrQkFBa0I7a0JBQXJELEtBQUs7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tY29udHJvbC1wb3NpdGlvbi9wby1jb250cm9sLXBvc2l0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9Ub29sYmFyQWN0aW9uIH0gZnJvbSAnLi4vcG8tdG9vbGJhci1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQHVzZWRCeSBQb1Rvb2xiYXJDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tdG9vbGJhci1ub3RpZmljYXRpb25gIHRlbSBjb21vIG9iamV0aXZvIG5vdGlmaWNhciBvIHVzdcOhcmlvIGRlIG5vdmFzIGHDp8O1ZXMgZGEgYXBsaWNhw6fDo28gcXVlIG5lY2Vzc2l0YW0gZGUgYXRlbsOnw6NvLFxyXG4gKiBjb21vIHBvciBleGVtcGxvIHVtIGFsZXJ0YSBkZSBub3ZhIG1lbnNhZ2VtLlxyXG4gKlxyXG4gKiBPIG1lc21vIHRhbWLDqW0gcGVybWl0ZSBxdWUgYSBjYWRhIG5vdmEgbm90aWZpY2HDp8OjbyBzZWphIGluY3JlbWVudGFkbyBlIGV4aWJpZG8sIG91IG7Do28sIGVzdGUgbsO6bWVybyBlbSB1bWEgKnRhZyogYW8gbGFkbyBkb1xyXG4gKiDDrWNvbmUgZGUgbm90aWZpY2HDp8O1ZXMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRvb2xiYXItbm90aWZpY2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BvQ29udHJvbFBvc2l0aW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVG9vbGJhck5vdGlmaWNhdGlvbkNvbXBvbmVudCB7XHJcbiAgLyoqIERlZmluZSB1bWEgbGlzdGEgZGUgYcOnw7Vlcy4gKi9cclxuICBASW5wdXQoJ3Atbm90aWZpY2F0aW9uLWFjdGlvbnMnKSBub3RpZmljYXRpb25BY3Rpb25zPzogQXJyYXk8UG9Ub29sYmFyQWN0aW9uPjtcclxuXHJcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uTnVtYmVyPzogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqIERlZmluZSBvIG7Dum1lcm8gZGUgbm90aWZpY2HDp8O1ZXMuICovXHJcbiAgQElucHV0KCdwLW5vdGlmaWNhdGlvbi1udW1iZXInKSBzZXQgbm90aWZpY2F0aW9uTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX25vdGlmaWNhdGlvbk51bWJlciA9IE51bWJlci5pc0ludGVnZXIodmFsdWUpID8gdmFsdWUgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5vdGlmaWNhdGlvbk51bWJlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25OdW1iZXI7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby10b29sYmFyLW5vdGlmaWNhdGlvbiBwby1jbGlja2FibGVcIiAoY2xpY2spPVwicG9wdXAudG9nZ2xlKClcIj5cclxuICA8c3BhbiAjbm90aWZpY2F0aW9uIGNsYXNzPVwicG8taWNvbiBwby1pY29uLW5vdGlmaWNhdGlvbiBwby10b29sYmFyLWljb25cIj48L3NwYW4+XHJcbiAgPGRpdiAqbmdJZj1cIm5vdGlmaWNhdGlvbk51bWJlclwiIGNsYXNzPVwicG8tdG9vbGJhci1ub3RpZmljYXRpb24tYmFkZ2VcIj5cclxuICAgIHt7IG5vdGlmaWNhdGlvbk51bWJlciB9fVxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxwby1wb3B1cCAjcG9wdXAgW3AtYWN0aW9uc109XCJub3RpZmljYXRpb25BY3Rpb25zXCIgW3AtdGFyZ2V0XT1cIm5vdGlmaWNhdGlvblwiPiA8L3BvLXBvcHVwPlxyXG4iXX0=