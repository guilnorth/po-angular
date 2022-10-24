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
import { PoJobSchedulerParametersTemplateDirective } from './po-page-job-scheduler-parameters/po-job-scheduler-parameters-template/po-job-scheduler-parameters-template.directive';
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
        PoWidgetModule] });
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
                    PoJobSchedulerParametersTemplateDirective
                ],
                exports: [PoPageJobSchedulerComponent, PoJobSchedulerParametersTemplateDirective],
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
                    PoWidgetModule
                ],
                providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageJobSchedulerModule, { declarations: [PoPageJobSchedulerComponent,
        PoPageJobSchedulerExecutionComponent,
        PoPageJobSchedulerParametersComponent,
        PoPageJobSchedulerSummaryComponent,
        DynamicContentComponent,
        DynamicContentDirective,
        PoJobSchedulerParametersTemplateDirective], imports: [CommonModule,
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
        PoWidgetModule], exports: [PoPageJobSchedulerComponent, PoJobSchedulerParametersTemplateDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2YsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN0SSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSx3SEFBd0gsQ0FBQzs7QUE2Qm5MLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7MEVBQXhCLHdCQUF3QjsrRUFGeEIsQ0FBQyx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQyxZQWJyRSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWM7dUZBSUwsd0JBQXdCO2NBM0JwQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLDJCQUEyQjtvQkFDM0Isb0NBQW9DO29CQUNwQyxxQ0FBcUM7b0JBQ3JDLGtDQUFrQztvQkFDbEMsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHlDQUF5QztpQkFDMUM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUseUNBQXlDLENBQUM7Z0JBQ2pGLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztpQkFDZjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQzthQUN4RTs7d0ZBQ1ksd0JBQXdCLG1CQXpCakMsMkJBQTJCO1FBQzNCLG9DQUFvQztRQUNwQyxxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ2xDLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUNBQXlDLGFBSXpDLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsY0FBYyxhQWJOLDJCQUEyQixFQUFFLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0J1dHRvbk1vZHVsZSxcclxuICBQb0NvbnRhaW5lck1vZHVsZSxcclxuICBQb0RpYWxvZ01vZHVsZSxcclxuICBQb0RpdmlkZXJNb2R1bGUsXHJcbiAgUG9EeW5hbWljTW9kdWxlLFxyXG4gIFBvRmllbGRNb2R1bGUsXHJcbiAgUG9JbmZvTW9kdWxlLFxyXG4gIFBvUGFnZU1vZHVsZSxcclxuICBQb1N0ZXBwZXJNb2R1bGUsXHJcbiAgUG9XaWRnZXRNb2R1bGVcclxufSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJFeGVjdXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJMb29rdXBTZXJ2aWNlIH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItbG9va3VwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJQYXJhbWV0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy9wby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlIH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1zdW1tYXJ5L3BvLXBhZ2Utam9iLXNjaGVkdWxlci1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0NvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL2R5bmFtaWMtY29tcG9uZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy9wby1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGUvcG8tam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9QYWdlSm9iU2NoZWR1bGVyQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlSm9iU2NoZWR1bGVyRXhlY3V0aW9uQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlSm9iU2NoZWR1bGVyUGFyYW1ldGVyc0NvbXBvbmVudCxcclxuICAgIFBvUGFnZUpvYlNjaGVkdWxlclN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBEeW5hbWljQ29udGVudENvbXBvbmVudCxcclxuICAgIER5bmFtaWNDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnQsIFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFBvQnV0dG9uTW9kdWxlLFxyXG4gICAgUG9Db250YWluZXJNb2R1bGUsXHJcbiAgICBQb0RpYWxvZ01vZHVsZSxcclxuICAgIFBvRGl2aWRlck1vZHVsZSxcclxuICAgIFBvRHluYW1pY01vZHVsZSxcclxuICAgIFBvRmllbGRNb2R1bGUsXHJcbiAgICBQb0luZm9Nb2R1bGUsXHJcbiAgICBQb1BhZ2VNb2R1bGUsXHJcbiAgICBQb1N0ZXBwZXJNb2R1bGUsXHJcbiAgICBQb1dpZGdldE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSwgUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUpvYlNjaGVkdWxlck1vZHVsZSB7fVxyXG4iXX0=