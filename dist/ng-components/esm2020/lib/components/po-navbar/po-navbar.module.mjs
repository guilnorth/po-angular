import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoMenuModule } from '../po-menu/po-menu.module';
import { PoNavbarActionsModule } from './po-navbar-actions/po-navbar-actions.module';
import { PoNavbarComponent } from './po-navbar.component';
import { PoNavbarItemsModule } from './po-navbar-items/po-navbar-items.module';
import { PoNavbarLogoComponent } from './po-navbar-logo/po-navbar-logo.component';
import { PoNavbarItemNavigationModule } from './po-navbar-item-navigation/po-navbar-item-navigation.module';
import { PoIconModule } from './../po-icon/po-icon.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-navbar`.
 *
 * > Para o correto funcionamento do componente `po-navbar`, deve ser importado o módulo `BrowserAnimationsModule` no
 * > módulo principal da sua aplicação.
 *
 * Módulo da aplicação:
 * ```
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { PoModule } from '@po-ui/ng-components';
 * ...
 *
 * @NgModule({
 *   imports: [
 *     BrowserModule,
 *     BrowserAnimationsModule,
 *     ...
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent,
 *     ...
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 */
export class PoNavbarModule {
}
PoNavbarModule.ɵfac = function PoNavbarModule_Factory(t) { return new (t || PoNavbarModule)(); };
PoNavbarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoNavbarModule });
PoNavbarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        PoNavbarActionsModule,
        PoNavbarItemsModule,
        PoNavbarItemNavigationModule,
        PoMenuModule,
        PoIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    PoNavbarActionsModule,
                    PoNavbarItemsModule,
                    PoNavbarItemNavigationModule,
                    PoMenuModule,
                    PoIconModule
                ],
                declarations: [PoNavbarComponent, PoNavbarLogoComponent],
                exports: [PoNavbarComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoNavbarModule, { declarations: [PoNavbarComponent, PoNavbarLogoComponent], imports: [CommonModule,
        PoNavbarActionsModule,
        PoNavbarItemsModule,
        PoNavbarItemNavigationModule,
        PoMenuModule,
        PoIconModule], exports: [PoNavbarComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1uYXZiYXIvcG8tbmF2YmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUUzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBYUgsTUFBTSxPQUFPLGNBQWM7OzRFQUFkLGNBQWM7Z0VBQWQsY0FBYztvRUFWdkIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLFlBQVk7UUFDWixZQUFZO3VGQUtILGNBQWM7Y0FaMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDeEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0I7O3dGQUNZLGNBQWMsbUJBSFYsaUJBQWlCLEVBQUUscUJBQXFCLGFBUHJELFlBQVk7UUFDWixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osWUFBWSxhQUdKLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBQb01lbnVNb2R1bGUgfSBmcm9tICcuLi9wby1tZW51L3BvLW1lbnUubW9kdWxlJztcclxuaW1wb3J0IHsgUG9OYXZiYXJBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9wby1uYXZiYXItYWN0aW9ucy9wby1uYXZiYXItYWN0aW9ucy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb05hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vcG8tbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTmF2YmFySXRlbXNNb2R1bGUgfSBmcm9tICcuL3BvLW5hdmJhci1pdGVtcy9wby1uYXZiYXItaXRlbXMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9OYXZiYXJMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9wby1uYXZiYXItbG9nby9wby1uYXZiYXItbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb05hdmJhckl0ZW1OYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9wby1uYXZiYXItaXRlbS1uYXZpZ2F0aW9uL3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9JY29uTW9kdWxlIH0gZnJvbSAnLi8uLi9wby1pY29uL3BvLWljb24ubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIGBwby1uYXZiYXJgLlxyXG4gKlxyXG4gKiA+IFBhcmEgbyBjb3JyZXRvIGZ1bmNpb25hbWVudG8gZG8gY29tcG9uZW50ZSBgcG8tbmF2YmFyYCwgZGV2ZSBzZXIgaW1wb3J0YWRvIG8gbcOzZHVsbyBgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVgIG5vXHJcbiAqID4gbcOzZHVsbyBwcmluY2lwYWwgZGEgc3VhIGFwbGljYcOnw6NvLlxyXG4gKlxyXG4gKiBNw7NkdWxvIGRhIGFwbGljYcOnw6NvOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG4gKiBpbXBvcnQgeyBQb01vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICogLi4uXHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcclxuICogICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gKiAgICAgLi4uXHJcbiAqICAgICBQb01vZHVsZVxyXG4gKiAgIF0sXHJcbiAqICAgZGVjbGFyYXRpb25zOiBbXHJcbiAqICAgICBBcHBDb21wb25lbnQsXHJcbiAqICAgICAuLi5cclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW10sXHJcbiAqICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4gKiBgYGBcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUG9OYXZiYXJBY3Rpb25zTW9kdWxlLFxyXG4gICAgUG9OYXZiYXJJdGVtc01vZHVsZSxcclxuICAgIFBvTmF2YmFySXRlbU5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBQb01lbnVNb2R1bGUsXHJcbiAgICBQb0ljb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvTmF2YmFyQ29tcG9uZW50LCBQb05hdmJhckxvZ29Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb05hdmJhckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTmF2YmFyTW9kdWxlIHt9XHJcbiJdfQ==