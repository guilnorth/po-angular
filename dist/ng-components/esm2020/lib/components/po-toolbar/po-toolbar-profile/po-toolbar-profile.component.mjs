import { Component, Input } from '@angular/core';
import { PoControlPositionService } from '../../../services/po-control-position/po-control-position.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-avatar/po-avatar.component";
import * as i3 from "../../po-popup/po-popup.component";
function PoToolbarProfileComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.profile.subtitle, " ");
} }
function PoToolbarProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "po-avatar", 7);
    i0.ɵɵelementStart(2, "div")(3, "div", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PoToolbarProfileComponent_div_5_div_5_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-src", ctx_r2.profileAvatar);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.profile.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.profile.subtitle);
} }
/**
 * @docsPrivate
 *
 * @docsExtends PoToolbarProfileComponent
 *
 * @description
 *
 * Componente `po-toolbar-profile`.
 */
export class PoToolbarProfileComponent {
    get profileAvatar() {
        return this.profile ? this.profile.avatar : undefined;
    }
}
PoToolbarProfileComponent.ɵfac = function PoToolbarProfileComponent_Factory(t) { return new (t || PoToolbarProfileComponent)(); };
PoToolbarProfileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoToolbarProfileComponent, selectors: [["po-toolbar-profile"]], inputs: { profile: ["p-profile", "profile"], profileActions: ["p-profile-actions", "profileActions"] }, features: [i0.ɵɵProvidersFeature([PoControlPositionService])], decls: 6, vars: 4, consts: [[1, "po-toolbar-profile", "po-clickable", 3, "click"], ["profileElement", ""], ["p-size", "xs", 3, "p-src"], [3, "p-actions", "p-target"], ["popup", ""], ["p-popup-header-template", "", "class", "po-toolbar-profile-item-header", 4, "ngIf"], ["p-popup-header-template", "", 1, "po-toolbar-profile-item-header"], ["p-size", "sm", 1, "po-toolbar-profile-item-avatar", 3, "p-src"], [1, "po-toolbar-profile-item-header-title"], ["class", "po-toolbar-profile-item-header-subtitle", 4, "ngIf"], [1, "po-toolbar-profile-item-header-subtitle"]], template: function PoToolbarProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function PoToolbarProfileComponent_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const _r1 = i0.ɵɵreference(4); return i0.ɵɵresetView(_r1.toggle()); });
        i0.ɵɵelement(2, "po-avatar", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "po-popup", 3, 4);
        i0.ɵɵtemplate(5, PoToolbarProfileComponent_div_5_Template, 6, 3, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-src", ctx.profileAvatar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-actions", ctx.profileActions)("p-target", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.profile == null ? null : ctx.profile.title);
    } }, dependencies: [i1.NgIf, i2.PoAvatarComponent, i3.PoPopupComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToolbarProfileComponent, [{
        type: Component,
        args: [{ selector: 'po-toolbar-profile', providers: [PoControlPositionService], template: "<div #profileElement class=\"po-toolbar-profile po-clickable\" (click)=\"popup.toggle()\">\r\n  <po-avatar p-size=\"xs\" [p-src]=\"profileAvatar\"></po-avatar>\r\n</div>\r\n\r\n<po-popup #popup [p-actions]=\"profileActions\" [p-target]=\"profileElement\">\r\n  <div p-popup-header-template *ngIf=\"profile?.title\" class=\"po-toolbar-profile-item-header\">\r\n    <po-avatar class=\"po-toolbar-profile-item-avatar\" p-size=\"sm\" [p-src]=\"profileAvatar\"> </po-avatar>\r\n\r\n    <div>\r\n      <div class=\"po-toolbar-profile-item-header-title\">\r\n        {{ profile.title }}\r\n      </div>\r\n\r\n      <div *ngIf=\"profile.subtitle\" class=\"po-toolbar-profile-item-header-subtitle\">\r\n        {{ profile.subtitle }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</po-popup>\r\n" }]
    }], null, { profile: [{
            type: Input,
            args: ['p-profile']
        }], profileActions: [{
            type: Input,
            args: ['p-profile-actions']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbGJhci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10b29sYmFyL3BvLXRvb2xiYXItcHJvZmlsZS9wby10b29sYmFyLXByb2ZpbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRvb2xiYXIvcG8tdG9vbGJhci1wcm9maWxlL3BvLXRvb2xiYXItcHJvZmlsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7Ozs7O0lDV3ZHLCtCQUE4RTtJQUM1RSxZQUNGO0lBQUEsaUJBQU07OztJQURKLGVBQ0Y7SUFERSx3REFDRjs7O0lBVkosOEJBQTJGO0lBQ3pGLCtCQUFtRztJQUVuRywyQkFBSyxhQUFBO0lBRUQsWUFDRjtJQUFBLGlCQUFNO0lBRU4sZ0ZBRU07SUFDUixpQkFBTSxFQUFBOzs7SUFWd0QsZUFBdUI7SUFBdkIsNENBQXVCO0lBSWpGLGVBQ0Y7SUFERSxxREFDRjtJQUVNLGVBQXNCO0lBQXRCLDhDQUFzQjs7QURObEM7Ozs7Ozs7O0dBUUc7QUFNSCxNQUFNLE9BQU8seUJBQXlCO0lBT3BDLElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOztrR0FUVSx5QkFBeUI7NEVBQXpCLHlCQUF5QixnTEFGekIsQ0FBQyx3QkFBd0IsQ0FBQzs7UUNuQnZDLGlDQUFzRjtRQUF6Qix5SkFBUyxlQUFBLFlBQWMsQ0FBQSxJQUFDO1FBQ25GLCtCQUEyRDtRQUM3RCxpQkFBTTtRQUVOLHNDQUEwRTtRQUN4RSwwRUFZTTtRQUNSLGlCQUFXOzs7UUFqQmMsZUFBdUI7UUFBdkIseUNBQXVCO1FBRy9CLGVBQTRCO1FBQTVCLDhDQUE0QixpQkFBQTtRQUNiLGVBQW9CO1FBQXBCLHFFQUFvQjs7dUZEZ0J2Qyx5QkFBeUI7Y0FMckMsU0FBUzsyQkFDRSxvQkFBb0IsYUFFbkIsQ0FBQyx3QkFBd0IsQ0FBQztnQkFJakIsT0FBTztrQkFBMUIsS0FBSzttQkFBQyxXQUFXO1lBR1UsY0FBYztrQkFBekMsS0FBSzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbnRyb2xQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb1Rvb2xiYXJQcm9maWxlIH0gZnJvbSAnLi9wby10b29sYmFyLXByb2ZpbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Ub29sYmFyQWN0aW9uIH0gZnJvbSAnLi4vcG8tdG9vbGJhci1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRvY3NFeHRlbmRzIFBvVG9vbGJhclByb2ZpbGVDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgYHBvLXRvb2xiYXItcHJvZmlsZWAuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRvb2xiYXItcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRvb2xiYXItcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Ub29sYmFyUHJvZmlsZUNvbXBvbmVudCB7XHJcbiAgLyoqIE9iamV0byBxdWUgaW1wbGVtZW50YSBhIGludGVyZmFjZSBgUG9Ub29sYmFyUHJvZmlsZWAuICovXHJcbiAgQElucHV0KCdwLXByb2ZpbGUnKSBwcm9maWxlOiBQb1Rvb2xiYXJQcm9maWxlO1xyXG5cclxuICAvKiogRGVmaW5lIHVtYSBsaXN0YSBkZSBhw6fDtWVzLiAqL1xyXG4gIEBJbnB1dCgncC1wcm9maWxlLWFjdGlvbnMnKSBwcm9maWxlQWN0aW9ucz86IEFycmF5PFBvVG9vbGJhckFjdGlvbj47XHJcblxyXG4gIGdldCBwcm9maWxlQXZhdGFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZSA/IHRoaXMucHJvZmlsZS5hdmF0YXIgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgI3Byb2ZpbGVFbGVtZW50IGNsYXNzPVwicG8tdG9vbGJhci1wcm9maWxlIHBvLWNsaWNrYWJsZVwiIChjbGljayk9XCJwb3B1cC50b2dnbGUoKVwiPlxyXG4gIDxwby1hdmF0YXIgcC1zaXplPVwieHNcIiBbcC1zcmNdPVwicHJvZmlsZUF2YXRhclwiPjwvcG8tYXZhdGFyPlxyXG48L2Rpdj5cclxuXHJcbjxwby1wb3B1cCAjcG9wdXAgW3AtYWN0aW9uc109XCJwcm9maWxlQWN0aW9uc1wiIFtwLXRhcmdldF09XCJwcm9maWxlRWxlbWVudFwiPlxyXG4gIDxkaXYgcC1wb3B1cC1oZWFkZXItdGVtcGxhdGUgKm5nSWY9XCJwcm9maWxlPy50aXRsZVwiIGNsYXNzPVwicG8tdG9vbGJhci1wcm9maWxlLWl0ZW0taGVhZGVyXCI+XHJcbiAgICA8cG8tYXZhdGFyIGNsYXNzPVwicG8tdG9vbGJhci1wcm9maWxlLWl0ZW0tYXZhdGFyXCIgcC1zaXplPVwic21cIiBbcC1zcmNdPVwicHJvZmlsZUF2YXRhclwiPiA8L3BvLWF2YXRhcj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tdG9vbGJhci1wcm9maWxlLWl0ZW0taGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAge3sgcHJvZmlsZS50aXRsZSB9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJwcm9maWxlLnN1YnRpdGxlXCIgY2xhc3M9XCJwby10b29sYmFyLXByb2ZpbGUtaXRlbS1oZWFkZXItc3VidGl0bGVcIj5cclxuICAgICAgICB7eyBwcm9maWxlLnN1YnRpdGxlIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvcG8tcG9wdXA+XHJcbiJdfQ==