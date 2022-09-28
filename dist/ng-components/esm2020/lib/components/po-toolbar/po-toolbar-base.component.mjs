import { Input, Directive } from '@angular/core';
import { convertToInt } from '../../utils/util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-toolbar` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade.
 */
export class PoToolbarBaseComponent {
    constructor() {
        /** Se falso, oculta o ícone de notificações. */
        this.showNotification = true;
    }
    /**
     * @optional
     *
     * @description
     *
     * Número de notificações.
     */
    set notificationNumber(value) {
        this._notificationNumber = convertToInt(value, 0);
    }
    get notificationNumber() {
        return this._notificationNumber;
    }
    get isShowProfile() {
        return !!(this.profile || this.profileActions);
    }
}
PoToolbarBaseComponent.ɵfac = function PoToolbarBaseComponent_Factory(t) { return new (t || PoToolbarBaseComponent)(); };
PoToolbarBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoToolbarBaseComponent, inputs: { actions: ["p-actions", "actions"], actionsIcon: ["p-actions-icon", "actionsIcon"], profile: ["p-profile", "profile"], profileActions: ["p-profile-actions", "profileActions"], showNotification: ["p-show-notification", "showNotification"], title: ["p-title", "title"], notificationActions: ["p-notification-actions", "notificationActions"], notificationNumber: ["p-notification-number", "notificationNumber"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToolbarBaseComponent, [{
        type: Directive
    }], null, { actions: [{
            type: Input,
            args: ['p-actions']
        }], actionsIcon: [{
            type: Input,
            args: ['p-actions-icon']
        }], profile: [{
            type: Input,
            args: ['p-profile']
        }], profileActions: [{
            type: Input,
            args: ['p-profile-actions']
        }], showNotification: [{
            type: Input,
            args: ['p-show-notification']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], notificationActions: [{
            type: Input,
            args: ['p-notification-actions']
        }], notificationNumber: [{
            type: Input,
            args: ['p-notification-number']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbGJhci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10b29sYmFyL3BvLXRvb2xiYXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUtoRDs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLHNCQUFzQjtJQURuQztRQWdERSxnREFBZ0Q7UUFDbEIscUJBQWdCLEdBQWEsSUFBSSxDQUFDO0tBa0NqRTtJQWxCQzs7Ozs7O09BTUc7SUFDSCxJQUFvQyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ2xFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs0RkFqRlUsc0JBQXNCO3lFQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2dCQVNZLE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQStCTyxXQUFXO2tCQUFuQyxLQUFLO21CQUFDLGdCQUFnQjtZQUdILE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQUdVLGNBQWM7a0JBQXpDLEtBQUs7bUJBQUMsbUJBQW1CO1lBR0ksZ0JBQWdCO2tCQUE3QyxLQUFLO21CQUFDLHFCQUFxQjtZQUdWLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQVNpQixtQkFBbUI7a0JBQW5ELEtBQUs7bUJBQUMsd0JBQXdCO1lBV0ssa0JBQWtCO2tCQUFyRCxLQUFLO21CQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9JbnQgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvVG9vbGJhckFjdGlvbiB9IGZyb20gJy4vcG8tdG9vbGJhci1hY3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Ub29sYmFyUHJvZmlsZSB9IGZyb20gJy4vcG8tdG9vbGJhci1wcm9maWxlL3BvLXRvb2xiYXItcHJvZmlsZS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLXRvb2xiYXJgIMOpIHVtIGNhYmXDp2FsaG8gcGFyYSBvIHTDrXR1bG8gZGEgYXBsaWNhw6fDo28gZSBpbmZvcm1hw6fDtWVzIGRlIHVzdcOhcmlvIGUgbm90aWZpY2HDp8O1ZXMgcXVhbmRvIGhvdXZlciBuZWNlc3NpZGFkZS5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9Ub29sYmFyQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSB1bWEgbGlzdGEgZGUgYcOnw7VlcyBxdWUgc2Vyw6NvIGV4aWJpZGFzIGFvIGNsaWNhciBubyDDrWNvbmUgZGVjbGFyYWRvIGVtIGBwLWFjdGlvbnMtaWNvbmAuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWFjdGlvbnMnKSBhY3Rpb25zPzogQXJyYXk8UG9Ub29sYmFyQWN0aW9uPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSB1bSBbw61jb25lXSgvZ3VpZGVzL2ljb25zKSBwYXJhIGEgcHJvcHJpZWRhZGUgYHAtYWN0aW9uc2AuXHJcbiAgICpcclxuICAgKiDDiSBwb3Nzw612ZWwgdXNhciBxdWFscXVlciB1bSBkb3Mgw61jb25lcyBkYSBbQmlibGlvdGVjYSBkZSDDrWNvbmVzXSgvZ3VpZGVzL2ljb25zKS4gY29uZm9ybWUgZXhlbXBsbyBhYmFpeG86XHJcbiAgICogYGBgXHJcbiAgICogPHBvLXRvb2xiYXIgcC1hY3Rpb25zLWljb249XCJwby1pY29uLXVzZXJcIiBbcC1hY3Rpb25zXT1cImFjdGlvbnNcIj48L3BvLXRvb2xiYXI+XHJcbiAgICogYGBgXHJcbiAgICogVGFtYsOpbSDDqSBwb3Nzw612ZWwgdXRpbGl6YXIgb3V0cmFzIGZvbnRlcyBkZSDDrWNvbmVzLCBwb3IgZXhlbXBsbyBhIGJpYmxpb3RlY2EgKkZvbnQgQXdlc29tZSosIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby10b29sYmFyIHAtYWN0aW9ucy1pY29uPVwiZmFyIGZhLWNvbW1lbnQtYWx0XCIgW3AtYWN0aW9uc109XCJhY3Rpb25zXCI+PC9wby10b29sYmFyPlxyXG4gICAqIGBgYFxyXG4gICAqIE91dHJhIG9ww6fDo28gc2VyaWEgYSBjdXN0b21pemHDp8OjbyBkbyDDrWNvbmUgYXRyYXbDqXMgZG8gYFRlbXBsYXRlUmVmYCwgY29uZm9ybWUgZXhlbXBsbyBhYmFpeG86XHJcbiAgICogYGBgXHJcbiAgICogPHBvLXRvb2xiYXIgW3AtYWN0aW9ucy1pY29uXT1cInRlbXBsYXRlXCIgW3AtYWN0aW9uc109XCJhY3Rpb25zXCI+PC9wby10b29sYmFyPlxyXG4gICAqXHJcbiAgICogPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cclxuICAgKiAgPGlvbi1pY29uIHN0eWxlPVwiZm9udC1zaXplOiBpbmhlcml0XCIgbmFtZT1cImhlYXJ0XCI+PC9pb24taWNvbj5cclxuICAgKiA8L25nLXRlbXBsYXRlPlxyXG4gICAqIGBgYFxyXG4gICAqID4gUGFyYSBvIMOtY29uZSBlbnF1YWRyYXIgY29ycmV0YW1lbnRlLCBkZXZlLXNlIHV0aWxpemFyIGBmb250LXNpemU6IGluaGVyaXRgIGNhc28gbyDDrWNvbmUgdXRpbGl6YWRvIG7Do28gYXBsaXF1ZS1vLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG7Do28gaGFqYSBhw6fDtWVzIGRlZmluaWRhcyBlbSBgcC1hY3Rpb25zYCwgbyDDrWNvbmUgbsOjbyBzZXLDoSBleGliaWRvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYHBvLWljb24tbW9yZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYWN0aW9ucy1pY29uJykgYWN0aW9uc0ljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLyoqIERlZmluZSBvIG9iamV0byBxdWUgc2Vyw6EgbyBjYWJlw6dhbGhvIGRhIGxpc3RhIGRlIGHDp8O1ZXMgY29tIGFzIGluZm9ybWHDp8O1ZXMgZG8gcGVyZmlsLiAqL1xyXG4gIEBJbnB1dCgncC1wcm9maWxlJykgcHJvZmlsZT86IFBvVG9vbGJhclByb2ZpbGU7XHJcblxyXG4gIC8qKiBEZWZpbmUgdW1hIGxpc3RhIGRlIGHDp8O1ZXMgcXVlIHNlcsOjbyBleGliaWRhcyBhbyBjbGljYXIgbm8gw61jb25lIGRvIHBlcmZpbC4gKi9cclxuICBASW5wdXQoJ3AtcHJvZmlsZS1hY3Rpb25zJykgcHJvZmlsZUFjdGlvbnM/OiBBcnJheTxQb1Rvb2xiYXJBY3Rpb24+O1xyXG5cclxuICAvKiogU2UgZmFsc28sIG9jdWx0YSBvIMOtY29uZSBkZSBub3RpZmljYcOnw7Vlcy4gKi9cclxuICBASW5wdXQoJ3Atc2hvdy1ub3RpZmljYXRpb24nKSBzaG93Tm90aWZpY2F0aW9uPzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBUw610dWxvIGRvICp0b29sYmFyKiBlIGFwbGljYcOnw6NvLiAqL1xyXG4gIEBJbnB1dCgncC10aXRsZScpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBkZSBhw6fDtWVzIGRhIG5vdGlmaWNhw6fDo28uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW5vdGlmaWNhdGlvbi1hY3Rpb25zJykgbm90aWZpY2F0aW9uQWN0aW9ucz86IEFycmF5PFBvVG9vbGJhckFjdGlvbj47XHJcblxyXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbk51bWJlcj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE7Dum1lcm8gZGUgbm90aWZpY2HDp8O1ZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW5vdGlmaWNhdGlvbi1udW1iZXInKSBzZXQgbm90aWZpY2F0aW9uTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX25vdGlmaWNhdGlvbk51bWJlciA9IGNvbnZlcnRUb0ludCh2YWx1ZSwgMCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbm90aWZpY2F0aW9uTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd1Byb2ZpbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5wcm9maWxlIHx8IHRoaXMucHJvZmlsZUFjdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=