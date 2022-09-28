import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoLanguageModule } from './../../services/po-language/po-language.module';
import { PoLoadingComponent } from './po-loading.component';
import { PoLoadingIconComponent } from './po-loading-icon/po-loading-icon.component';
import { PoLoadingOverlayComponent } from './po-loading-overlay/po-loading-overlay.component';
import * as i0 from "@angular/core";
/**
 *
 * @description
 *
 * Módulo do componente po-loading-overlay.
 */
export class PoLoadingModule {
}
PoLoadingModule.ɵfac = function PoLoadingModule_Factory(t) { return new (t || PoLoadingModule)(); };
PoLoadingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoLoadingModule });
PoLoadingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoLanguageModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoLanguageModule],
                declarations: [PoLoadingComponent, PoLoadingIconComponent, PoLoadingOverlayComponent],
                exports: [PoLoadingComponent, PoLoadingIconComponent, PoLoadingOverlayComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoLoadingModule, { declarations: [PoLoadingComponent, PoLoadingIconComponent, PoLoadingOverlayComponent], imports: [CommonModule, PoLanguageModule], exports: [PoLoadingComponent, PoLoadingIconComponent, PoLoadingOverlayComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbG9hZGluZy9wby1sb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFOUY7Ozs7O0dBS0c7QUFNSCxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTtpRUFBZixlQUFlO3FFQUpoQixZQUFZLEVBQUUsZ0JBQWdCO3VGQUk3QixlQUFlO2NBTDNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixDQUFDO2dCQUNyRixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsQ0FBQzthQUNqRjs7d0ZBQ1ksZUFBZSxtQkFIWCxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsYUFEMUUsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG8tbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0xvYWRpbmdJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9wby1sb2FkaW5nLWljb24vcG8tbG9hZGluZy1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTG9hZGluZ092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL3BvLWxvYWRpbmctb3ZlcmxheS9wby1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIHBvLWxvYWRpbmctb3ZlcmxheS5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9MYW5ndWFnZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9Mb2FkaW5nQ29tcG9uZW50LCBQb0xvYWRpbmdJY29uQ29tcG9uZW50LCBQb0xvYWRpbmdPdmVybGF5Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9Mb2FkaW5nQ29tcG9uZW50LCBQb0xvYWRpbmdJY29uQ29tcG9uZW50LCBQb0xvYWRpbmdPdmVybGF5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Mb2FkaW5nTW9kdWxlIHt9XHJcbiJdfQ==