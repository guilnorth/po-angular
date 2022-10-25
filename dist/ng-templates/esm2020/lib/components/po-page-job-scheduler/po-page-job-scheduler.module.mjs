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
import { PoJobSchedulerParametersTemplateDirective } from './po-page-job-scheduler-parameters';
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
                exports: [
                    PoJobSchedulerParametersTemplateDirective,
                    PoPageJobSchedulerComponent
                ],
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
        PoWidgetModule], exports: [PoJobSchedulerParametersTemplateDirective,
        PoPageJobSchedulerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2YsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN0SSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFnQy9GLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7MEVBQXhCLHdCQUF3QjsrRUFGeEIsQ0FBQyx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQyxZQWJyRSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWM7dUZBSUwsd0JBQXdCO2NBOUJwQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLDJCQUEyQjtvQkFDM0Isb0NBQW9DO29CQUNwQyxxQ0FBcUM7b0JBQ3JDLGtDQUFrQztvQkFDbEMsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHlDQUF5QztpQkFDMUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlDQUF5QztvQkFDekMsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixlQUFlO29CQUNmLGNBQWM7aUJBQ2Y7Z0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLEVBQUUsK0JBQStCLENBQUM7YUFDeEU7O3dGQUNZLHdCQUF3QixtQkE1QmpDLDJCQUEyQjtRQUMzQixvQ0FBb0M7UUFDcEMscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHlDQUF5QyxhQU96QyxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWMsYUFmZCx5Q0FBeUM7UUFDekMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFBvQnV0dG9uTW9kdWxlLFxyXG4gIFBvQ29udGFpbmVyTW9kdWxlLFxyXG4gIFBvRGlhbG9nTW9kdWxlLFxyXG4gIFBvRGl2aWRlck1vZHVsZSxcclxuICBQb0R5bmFtaWNNb2R1bGUsXHJcbiAgUG9GaWVsZE1vZHVsZSxcclxuICBQb0luZm9Nb2R1bGUsXHJcbiAgUG9QYWdlTW9kdWxlLFxyXG4gIFBvU3RlcHBlck1vZHVsZSxcclxuICBQb1dpZGdldE1vZHVsZVxyXG59IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckV4ZWN1dGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvbi9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1sb29rdXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclBhcmFtZXRlcnNDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL2R5bmFtaWMtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnQsXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJFeGVjdXRpb25Db21wb25lbnQsXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJQYXJhbWV0ZXJzQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlSm9iU2NoZWR1bGVyU3VtbWFyeUNvbXBvbmVudCxcclxuICAgIER5bmFtaWNDb250ZW50Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0NvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUG9CdXR0b25Nb2R1bGUsXHJcbiAgICBQb0NvbnRhaW5lck1vZHVsZSxcclxuICAgIFBvRGlhbG9nTW9kdWxlLFxyXG4gICAgUG9EaXZpZGVyTW9kdWxlLFxyXG4gICAgUG9EeW5hbWljTW9kdWxlLFxyXG4gICAgUG9GaWVsZE1vZHVsZSxcclxuICAgIFBvSW5mb01vZHVsZSxcclxuICAgIFBvUGFnZU1vZHVsZSxcclxuICAgIFBvU3RlcHBlck1vZHVsZSxcclxuICAgIFBvV2lkZ2V0TW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLCBQb1BhZ2VKb2JTY2hlZHVsZXJMb29rdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlSm9iU2NoZWR1bGVyTW9kdWxlIHsgfVxyXG4iXX0=