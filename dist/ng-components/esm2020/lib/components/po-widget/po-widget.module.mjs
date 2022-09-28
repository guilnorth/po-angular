import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoContainerModule } from '../po-container/index';
import { PoWidgetComponent } from './po-widget.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-widget
 */
export class PoWidgetModule {
}
PoWidgetModule.ɵfac = function PoWidgetModule_Factory(t) { return new (t || PoWidgetModule)(); };
PoWidgetModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoWidgetModule });
PoWidgetModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoContainerModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoWidgetModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoContainerModule],
                exports: [PoWidgetComponent],
                declarations: [PoWidgetComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoWidgetModule, { declarations: [PoWidgetComponent], imports: [CommonModule, PoContainerModule], exports: [PoWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8td2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby13aWRnZXQvcG8td2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO2dFQUFkLGNBQWM7b0VBSmYsWUFBWSxFQUFFLGlCQUFpQjt1RkFJOUIsY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDbEM7O3dGQUNZLGNBQWMsbUJBRlYsaUJBQWlCLGFBRnRCLFlBQVksRUFBRSxpQkFBaUIsYUFDL0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFBvQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi4vcG8tY29udGFpbmVyL2luZGV4JztcclxuaW1wb3J0IHsgUG9XaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3BvLXdpZGdldC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8td2lkZ2V0XHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvQ29udGFpbmVyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbUG9XaWRnZXRDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvV2lkZ2V0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9XaWRnZXRNb2R1bGUge31cclxuIl19