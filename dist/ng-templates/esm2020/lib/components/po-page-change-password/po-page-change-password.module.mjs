import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoPageBackgroundModule } from '../po-page-background/index';
import { PoPageChangePasswordComponent } from './po-page-change-password.component';
import { PoPageChangePasswordService } from './po-page-change-password.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-change-password.
 */
export class PoPageChangePasswordModule {
}
PoPageChangePasswordModule.ɵfac = function PoPageChangePasswordModule_Factory(t) { return new (t || PoPageChangePasswordModule)(); };
PoPageChangePasswordModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageChangePasswordModule });
PoPageChangePasswordModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageChangePasswordService], imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule],
                declarations: [PoPageChangePasswordComponent],
                providers: [PoPageChangePasswordService],
                exports: [PoPageChangePasswordComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageChangePasswordModule, { declarations: [PoPageChangePasswordComponent], imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule], exports: [PoPageChangePasswordComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRWhGOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sMEJBQTBCOztvR0FBMUIsMEJBQTBCOzRFQUExQiwwQkFBMEI7aUZBSDFCLENBQUMsMkJBQTJCLENBQUMsWUFGOUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHNCQUFzQjt1RkFLeEUsMEJBQTBCO2NBTnRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3BGLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDekM7O3dGQUNZLDBCQUEwQixtQkFKdEIsNkJBQTZCLGFBRGxDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsYUFHekUsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQb01vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlQmFja2dyb3VuZE1vZHVsZSB9IGZyb20gJy4uL3BvLXBhZ2UtYmFja2dyb3VuZC9pbmRleCc7XHJcbmltcG9ydCB7IFBvUGFnZUNoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VDaGFuZ2VQYXNzd29yZFNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIHRlbXBsYXRlIGRvIHBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLCBQb01vZHVsZSwgUG9QYWdlQmFja2dyb3VuZE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9QYWdlQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1BvUGFnZUNoYW5nZVBhc3N3b3JkU2VydmljZV0sXHJcbiAgZXhwb3J0czogW1BvUGFnZUNoYW5nZVBhc3N3b3JkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlQ2hhbmdlUGFzc3dvcmRNb2R1bGUge31cclxuIl19