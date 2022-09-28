import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoDividerModule, PoFieldModule } from '@po-ui/ng-components';
import { PoPageBackgroundComponent } from './po-page-background.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-background.
 */
export class PoPageBackgroundModule {
}
PoPageBackgroundModule.ɵfac = function PoPageBackgroundModule_Factory(t) { return new (t || PoPageBackgroundModule)(); };
PoPageBackgroundModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageBackgroundModule });
PoPageBackgroundModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBackgroundModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule],
                declarations: [PoPageBackgroundComponent],
                exports: [PoPageBackgroundComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageBackgroundModule, { declarations: [PoPageBackgroundComponent], imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule], exports: [PoPageBackgroundComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1iYWNrZ3JvdW5kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1iYWNrZ3JvdW5kL3BvLXBhZ2UtYmFja2dyb3VuZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUUzRTs7OztHQUlHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjt3RUFBdEIsc0JBQXNCOzRFQUp2QixZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYTt1RkFJdEUsc0JBQXNCO2NBTGxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO2dCQUNsRixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckM7O3dGQUNZLHNCQUFzQixtQkFIbEIseUJBQXlCLGFBRDlCLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLGFBRXZFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUG9EaXZpZGVyTW9kdWxlLCBQb0ZpZWxkTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlQmFja2dyb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1iYWNrZ3JvdW5kLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gdGVtcGxhdGUgZG8gcG8tcGFnZS1iYWNrZ3JvdW5kLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLCBQb0RpdmlkZXJNb2R1bGUsIFBvRmllbGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvUGFnZUJhY2tncm91bmRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb1BhZ2VCYWNrZ3JvdW5kQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlQmFja2dyb3VuZE1vZHVsZSB7fVxyXG4iXX0=