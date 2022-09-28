import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoAvatarModule } from './../po-avatar/po-avatar.module';
import { PoIconModule } from './../po-icon/po-icon.module';
import { PoPopupModule } from '../po-popup/po-popup.module';
import { PoToolbarActionsComponent } from './po-toolbar-actions/po-toolbar-actions.component';
import { PoToolbarComponent } from './po-toolbar.component';
import { PoToolbarNotificationComponent } from './po-toolbar-notification/po-toolbar-notification.component';
import { PoToolbarProfileComponent } from './po-toolbar-profile/po-toolbar-profile.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-toolbar
 *
 */
export class PoToolbarModule {
}
PoToolbarModule.ɵfac = function PoToolbarModule_Factory(t) { return new (t || PoToolbarModule)(); };
PoToolbarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoToolbarModule });
PoToolbarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoAvatarModule, PoPopupModule, PoIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToolbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoAvatarModule, PoPopupModule, PoIconModule],
                declarations: [
                    PoToolbarActionsComponent,
                    PoToolbarComponent,
                    PoToolbarNotificationComponent,
                    PoToolbarProfileComponent
                ],
                exports: [PoToolbarComponent],
                providers: [],
                schemas: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoToolbarModule, { declarations: [PoToolbarActionsComponent,
        PoToolbarComponent,
        PoToolbarNotificationComponent,
        PoToolbarProfileComponent], imports: [CommonModule, PoAvatarModule, PoPopupModule, PoIconModule], exports: [PoToolbarComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbGJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdG9vbGJhci9wby10b29sYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFOUY7Ozs7O0dBS0c7QUFhSCxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTtpRUFBZixlQUFlO3FFQVhoQixZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZO3VGQVd4RCxlQUFlO2NBWjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQ3BFLFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLGtCQUFrQjtvQkFDbEIsOEJBQThCO29CQUM5Qix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsRUFBRTthQUNaOzt3RkFDWSxlQUFlLG1CQVR4Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5Qix5QkFBeUIsYUFMakIsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxhQU96RCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUG9BdmF0YXJNb2R1bGUgfSBmcm9tICcuLy4uL3BvLWF2YXRhci9wby1hdmF0YXIubW9kdWxlJztcclxuaW1wb3J0IHsgUG9JY29uTW9kdWxlIH0gZnJvbSAnLi8uLi9wby1pY29uL3BvLWljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Qb3B1cE1vZHVsZSB9IGZyb20gJy4uL3BvLXBvcHVwL3BvLXBvcHVwLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvVG9vbGJhckFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3BvLXRvb2xiYXItYWN0aW9ucy9wby10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9Ub29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wby10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVG9vbGJhck5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcG8tdG9vbGJhci1ub3RpZmljYXRpb24vcG8tdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9Ub29sYmFyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tdG9vbGJhci1wcm9maWxlL3BvLXRvb2xiYXItcHJvZmlsZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8tdG9vbGJhclxyXG4gKlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb0F2YXRhck1vZHVsZSwgUG9Qb3B1cE1vZHVsZSwgUG9JY29uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvVG9vbGJhckFjdGlvbnNDb21wb25lbnQsXHJcbiAgICBQb1Rvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQb1Rvb2xiYXJOb3RpZmljYXRpb25Db21wb25lbnQsXHJcbiAgICBQb1Rvb2xiYXJQcm9maWxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbUG9Ub29sYmFyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHNjaGVtYXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1Rvb2xiYXJNb2R1bGUge31cclxuIl19