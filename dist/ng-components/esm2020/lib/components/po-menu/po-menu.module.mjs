import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoBadgeModule } from '../po-badge/po-badge.module';
import { PoFieldModule } from '../po-field/po-field.module';
import { PoLoadingModule } from '../po-loading/po-loading.module';
import { PoMenuComponent } from './po-menu.component';
import { PoMenuFilterComponent } from './po-menu-filter/po-menu-filter.component';
import { PoMenuHeaderTemplateDirective } from './po-menu-header-template/po-menu-header-template.directive';
import { PoMenuItemComponent } from './po-menu-item/po-menu-item.component';
import { PoIconModule } from '../po-icon/po-icon.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-menu.
 */
export class PoMenuModule {
}
PoMenuModule.ɵfac = function PoMenuModule_Factory(t) { return new (t || PoMenuModule)(); };
PoMenuModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoMenuModule });
PoMenuModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule, PoBadgeModule, PoFieldModule, PoLoadingModule, PoIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, PoBadgeModule, PoFieldModule, PoLoadingModule, PoIconModule],
                declarations: [PoMenuComponent, PoMenuFilterComponent, PoMenuHeaderTemplateDirective, PoMenuItemComponent],
                exports: [PoMenuComponent, PoMenuHeaderTemplateDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoMenuModule, { declarations: [PoMenuComponent, PoMenuFilterComponent, PoMenuHeaderTemplateDirective, PoMenuItemComponent], imports: [CommonModule, RouterModule, PoBadgeModule, PoFieldModule, PoLoadingModule, PoIconModule], exports: [PoMenuComponent, PoMenuHeaderTemplateDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbWVudS9wby1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFekQ7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyxZQUFZOzt3RUFBWixZQUFZOzhEQUFaLFlBQVk7a0VBSmIsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZO3VGQUl0RixZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztnQkFDbEcsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixDQUFDO2dCQUMxRyxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsNkJBQTZCLENBQUM7YUFDMUQ7O3dGQUNZLFlBQVksbUJBSFIsZUFBZSxFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixhQUQvRixZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksYUFFdkYsZUFBZSxFQUFFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQb0JhZGdlTW9kdWxlIH0gZnJvbSAnLi4vcG8tYmFkZ2UvcG8tYmFkZ2UubW9kdWxlJztcclxuaW1wb3J0IHsgUG9GaWVsZE1vZHVsZSB9IGZyb20gJy4uL3BvLWZpZWxkL3BvLWZpZWxkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL3BvLWxvYWRpbmcvcG8tbG9hZGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9NZW51Q29tcG9uZW50IH0gZnJvbSAnLi9wby1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTWVudUZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tbWVudS1maWx0ZXIvcG8tbWVudS1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9NZW51SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLW1lbnUtaGVhZGVyLXRlbXBsYXRlL3BvLW1lbnUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BvLW1lbnUtaXRlbS9wby1tZW51LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9JY29uTW9kdWxlIH0gZnJvbSAnLi4vcG8taWNvbi9wby1pY29uLm1vZHVsZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gY29tcG9uZW50ZSBwby1tZW51LlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFBvQmFkZ2VNb2R1bGUsIFBvRmllbGRNb2R1bGUsIFBvTG9hZGluZ01vZHVsZSwgUG9JY29uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb01lbnVDb21wb25lbnQsIFBvTWVudUZpbHRlckNvbXBvbmVudCwgUG9NZW51SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIFBvTWVudUl0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb01lbnVDb21wb25lbnQsIFBvTWVudUhlYWRlclRlbXBsYXRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9NZW51TW9kdWxlIHt9XHJcbiJdfQ==