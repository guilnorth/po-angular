import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoPageBackgroundModule } from '../po-page-background/index';
import { PoPageBlockedUserComponent } from './po-page-blocked-user.component';
import { PoPageBlockedUserContactsComponent } from './po-page-blocked-user-contacts/po-page-blocked-user-contacts.component';
import { PoPageBlockedUserReasonComponent } from './po-page-blocked-user-reason/po-page-blocked-user-reason.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-blocked-user.
 */
export class PoPageBlockedUserModule {
}
PoPageBlockedUserModule.ɵfac = function PoPageBlockedUserModule_Factory(t) { return new (t || PoPageBlockedUserModule)(); };
PoPageBlockedUserModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageBlockedUserModule });
PoPageBlockedUserModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule],
                declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
                exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageBlockedUserModule, { declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent], imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule], exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1ibG9ja2VkLXVzZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWJsb2NrZWQtdXNlci9wby1wYWdlLWJsb2NrZWQtdXNlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQzs7QUFFdkg7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUFKeEIsWUFBWSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsc0JBQXNCO3VGQUkzRCx1QkFBdUI7Y0FMbkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixDQUFDO2dCQUN2RSxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsQ0FBQztnQkFDaEgsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLENBQUM7YUFDNUc7O3dGQUNZLHVCQUF1QixtQkFIbkIsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLGFBRHJHLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixhQUU1RCwwQkFBMEIsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUG9Nb2R1bGUgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VCYWNrZ3JvdW5kTW9kdWxlIH0gZnJvbSAnLi4vcG8tcGFnZS1iYWNrZ3JvdW5kL2luZGV4JztcclxuaW1wb3J0IHsgUG9QYWdlQmxvY2tlZFVzZXJDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtYmxvY2tlZC11c2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUJsb2NrZWRVc2VyQ29udGFjdHNDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3RzL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWNvbnRhY3RzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24vcG8tcGFnZS1ibG9ja2VkLXVzZXItcmVhc29uLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gdGVtcGxhdGUgZG8gcG8tcGFnZS1ibG9ja2VkLXVzZXIuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgUG9Nb2R1bGUsIFBvUGFnZUJhY2tncm91bmRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvUGFnZUJsb2NrZWRVc2VyQ29tcG9uZW50LCBQb1BhZ2VCbG9ja2VkVXNlckNvbnRhY3RzQ29tcG9uZW50LCBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvUGFnZUJsb2NrZWRVc2VyQ29tcG9uZW50LCBQb1BhZ2VCbG9ja2VkVXNlckNvbnRhY3RzQ29tcG9uZW50LCBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUJsb2NrZWRVc2VyTW9kdWxlIHt9XHJcbiJdfQ==