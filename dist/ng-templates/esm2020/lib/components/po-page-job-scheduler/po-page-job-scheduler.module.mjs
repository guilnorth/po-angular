import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoButtonModule, PoContainerModule, PoDialogModule, PoDividerModule, PoDynamicModule, PoFieldModule, PoInfoModule, PoPageModule, PoStepperModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageJobSchedulerComponent } from './po-page-job-scheduler.component';
import { PoPageJobSchedulerExecutionComponent } from './po-page-job-scheduler-execution/po-page-job-scheduler-execution.component';
import { PoPageJobSchedulerLookupService } from './po-page-job-scheduler-lookup.service';
import { PoPageJobSchedulerParametersComponent } from './po-page-job-scheduler-parameters/po-page-job-scheduler-parameters.component';
import { PoPageJobSchedulerService } from './po-page-job-scheduler.service';
import { PoPageJobSchedulerSummaryComponent } from './po-page-job-scheduler-summary/po-page-job-scheduler-summary.component';
import { DynamicContentComponent } from './po-page-job-scheduler-parameters/dynamic-content.component';
import { DynamicContentDirective } from './po-page-job-scheduler-parameters/dynamic-component.directive';
import { PoJobSchedulerParametersTemplateModule } from './po-page-job-scheduler-parameters/po-job-scheduler-parameters-template/po-job-scheduler-parameters-template.module';
import * as i0 from "@angular/core";
export class PoPageJobSchedulerModule {
}
PoPageJobSchedulerModule.ɵfac = function PoPageJobSchedulerModule_Factory(t) { return new (t || PoPageJobSchedulerModule)(); };
PoPageJobSchedulerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageJobSchedulerModule });
PoPageJobSchedulerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService], imports: [CommonModule,
        FormsModule,
        PoButtonModule,
        PoContainerModule,
        PoDialogModule,
        PoDividerModule,
        PoDynamicModule,
        PoFieldModule,
        PoInfoModule,
        PoPageModule,
        PoStepperModule,
        PoWidgetModule,
        PoJobSchedulerParametersTemplateModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PoPageJobSchedulerComponent,
                    PoPageJobSchedulerExecutionComponent,
                    PoPageJobSchedulerParametersComponent,
                    PoPageJobSchedulerSummaryComponent,
                    DynamicContentComponent,
                    DynamicContentDirective,
                ],
                exports: [PoPageJobSchedulerComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    PoButtonModule,
                    PoContainerModule,
                    PoDialogModule,
                    PoDividerModule,
                    PoDynamicModule,
                    PoFieldModule,
                    PoInfoModule,
                    PoPageModule,
                    PoStepperModule,
                    PoWidgetModule,
                    PoJobSchedulerParametersTemplateModule
                ],
                providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageJobSchedulerModule, { declarations: [PoPageJobSchedulerComponent,
        PoPageJobSchedulerExecutionComponent,
        PoPageJobSchedulerParametersComponent,
        PoPageJobSchedulerSummaryComponent,
        DynamicContentComponent,
        DynamicContentDirective], imports: [CommonModule,
        FormsModule,
        PoButtonModule,
        PoContainerModule,
        PoDialogModule,
        PoDividerModule,
        PoDynamicModule,
        PoFieldModule,
        PoInfoModule,
        PoPageModule,
        PoStepperModule,
        PoWidgetModule,
        PoJobSchedulerParametersTemplateModule], exports: [PoPageJobSchedulerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2YsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN0SSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxxSEFBcUgsQ0FBQzs7QUE2QjdLLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7MEVBQXhCLHdCQUF3QjsrRUFGeEIsQ0FBQyx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQyxZQWRyRSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWM7UUFDZCxzQ0FBc0M7dUZBSTdCLHdCQUF3QjtjQTNCcEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiwyQkFBMkI7b0JBQzNCLG9DQUFvQztvQkFDcEMscUNBQXFDO29CQUNyQyxrQ0FBa0M7b0JBQ2xDLHVCQUF1QjtvQkFDdkIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixZQUFZO29CQUNaLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixjQUFjO29CQUNkLHNDQUFzQztpQkFDdkM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLEVBQUUsK0JBQStCLENBQUM7YUFDeEU7O3dGQUNZLHdCQUF3QixtQkF6QmpDLDJCQUEyQjtRQUMzQixvQ0FBb0M7UUFDcEMscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFDdkIsdUJBQXVCLGFBSXZCLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsY0FBYztRQUNkLHNDQUFzQyxhQWQ5QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUG9CdXR0b25Nb2R1bGUsXHJcbiAgUG9Db250YWluZXJNb2R1bGUsXHJcbiAgUG9EaWFsb2dNb2R1bGUsXHJcbiAgUG9EaXZpZGVyTW9kdWxlLFxyXG4gIFBvRHluYW1pY01vZHVsZSxcclxuICBQb0ZpZWxkTW9kdWxlLFxyXG4gIFBvSW5mb01vZHVsZSxcclxuICBQb1BhZ2VNb2R1bGUsXHJcbiAgUG9TdGVwcGVyTW9kdWxlLFxyXG4gIFBvV2lkZ2V0TW9kdWxlXHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyRXhlY3V0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWxvb2t1cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyUGFyYW1ldGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeS9wby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvZHluYW1pYy1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLXRlbXBsYXRlL3BvLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvUGFnZUpvYlNjaGVkdWxlckNvbXBvbmVudCxcclxuICAgIFBvUGFnZUpvYlNjaGVkdWxlckV4ZWN1dGlvbkNvbXBvbmVudCxcclxuICAgIFBvUGFnZUpvYlNjaGVkdWxlclBhcmFtZXRlcnNDb21wb25lbnQsXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJTdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0NvbnRlbnRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljQ29udGVudERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUG9CdXR0b25Nb2R1bGUsXHJcbiAgICBQb0NvbnRhaW5lck1vZHVsZSxcclxuICAgIFBvRGlhbG9nTW9kdWxlLFxyXG4gICAgUG9EaXZpZGVyTW9kdWxlLFxyXG4gICAgUG9EeW5hbWljTW9kdWxlLFxyXG4gICAgUG9GaWVsZE1vZHVsZSxcclxuICAgIFBvSW5mb01vZHVsZSxcclxuICAgIFBvUGFnZU1vZHVsZSxcclxuICAgIFBvU3RlcHBlck1vZHVsZSxcclxuICAgIFBvV2lkZ2V0TW9kdWxlLFxyXG4gICAgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1BvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UsIFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJNb2R1bGUgeyB9XHJcbiJdfQ==