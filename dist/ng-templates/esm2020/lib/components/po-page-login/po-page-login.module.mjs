import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoPageBackgroundModule } from '../po-page-background/index';
import { PoPageLoginComponent } from './po-page-login.component';
import { PoPageLoginPopoverComponent } from './po-page-login-popover/po-page-login-popover.component';
import { PoPageLoginService } from './po-page-login.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-login.
 */
export class PoPageLoginModule {
}
PoPageLoginModule.ɵfac = function PoPageLoginModule_Factory(t) { return new (t || PoPageLoginModule)(); };
PoPageLoginModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageLoginModule });
PoPageLoginModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageLoginService], imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule],
                declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent],
                exports: [PoPageLoginComponent],
                providers: [PoPageLoginService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageLoginModule, { declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent], imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule], exports: [PoPageLoginComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtbG9naW4vcG8tcGFnZS1sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTdEOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8saUJBQWlCOztrRkFBakIsaUJBQWlCO21FQUFqQixpQkFBaUI7d0VBRmpCLENBQUMsa0JBQWtCLENBQUMsWUFIckIsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsUUFBUTt1RkFLeEUsaUJBQWlCO2NBTjdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxRQUFRLENBQUM7Z0JBQ3BGLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLDJCQUEyQixDQUFDO2dCQUNqRSxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEM7O3dGQUNZLGlCQUFpQixtQkFKYixvQkFBb0IsRUFBRSwyQkFBMkIsYUFEdEQsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxhQUV6RSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlDb21wb25lbnQgfSBmcm9tICcuLi9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VCYWNrZ3JvdW5kTW9kdWxlIH0gZnJvbSAnLi4vcG8tcGFnZS1iYWNrZ3JvdW5kL2luZGV4JztcclxuaW1wb3J0IHsgUG9QYWdlTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlTG9naW5Qb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWxvZ2luLXBvcG92ZXIvcG8tcGFnZS1sb2dpbi1wb3BvdmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUxvZ2luU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1sb2dpbi5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyB0ZW1wbGF0ZSBkbyBwby1wYWdlLWxvZ2luLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLCBQb1BhZ2VCYWNrZ3JvdW5kTW9kdWxlLCBQb01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9QYWdlTG9naW5Db21wb25lbnQsIFBvUGFnZUxvZ2luUG9wb3ZlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvUGFnZUxvZ2luQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VMb2dpblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VMb2dpbk1vZHVsZSB7fVxyXG4iXX0=