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
//import { DynamicContentComponent } from './po-page-job-scheduler-parameters/dynamic-content.component';
//import { DynamicContentDirective } from './po-page-job-scheduler-parameters/dynamic-component.directive';
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
                    /*  DynamicContentComponent,
                     DynamicContentDirective, */
                    PoJobSchedulerParametersTemplateDirective,
                ],
                exports: [
                    PoJobSchedulerParametersTemplateDirective,
                    PoPageJobSchedulerComponent,
                    /* DynamicContentComponent,
                    DynamicContentDirective, */
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
        /*  DynamicContentComponent,
         DynamicContentDirective, */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2YsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN0SSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCx5R0FBeUc7QUFDekcsMkdBQTJHO0FBQzNHLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQWtDL0YsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3QjswRUFBeEIsd0JBQXdCOytFQUZ4QixDQUFDLHlCQUF5QixFQUFFLCtCQUErQixDQUFDLFlBYnJFLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsY0FBYzt1RkFJTCx3QkFBd0I7Y0FoQ3BDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osMkJBQTJCO29CQUMzQixvQ0FBb0M7b0JBQ3BDLHFDQUFxQztvQkFDckMsa0NBQWtDO29CQUNuQztnREFDNEI7b0JBQzNCLHlDQUF5QztpQkFDMUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlDQUF5QztvQkFDekMsMkJBQTJCO29CQUMzQjsrQ0FDMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztpQkFDZjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQzthQUN4RTs7d0ZBQ1ksd0JBQXdCLG1CQTlCakMsMkJBQTJCO1FBQzNCLG9DQUFvQztRQUNwQyxxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ25DO29DQUM0QjtRQUMzQix5Q0FBeUMsYUFTekMsWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixjQUFjLGFBakJkLHlDQUF5QztRQUN6QywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUG9CdXR0b25Nb2R1bGUsXHJcbiAgUG9Db250YWluZXJNb2R1bGUsXHJcbiAgUG9EaWFsb2dNb2R1bGUsXHJcbiAgUG9EaXZpZGVyTW9kdWxlLFxyXG4gIFBvRHluYW1pY01vZHVsZSxcclxuICBQb0ZpZWxkTW9kdWxlLFxyXG4gIFBvSW5mb01vZHVsZSxcclxuICBQb1BhZ2VNb2R1bGUsXHJcbiAgUG9TdGVwcGVyTW9kdWxlLFxyXG4gIFBvV2lkZ2V0TW9kdWxlXHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyRXhlY3V0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWxvb2t1cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyUGFyYW1ldGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeS9wby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeS5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IER5bmFtaWNDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50JztcclxuLy9pbXBvcnQgeyBEeW5hbWljQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnQsXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJFeGVjdXRpb25Db21wb25lbnQsXHJcbiAgICBQb1BhZ2VKb2JTY2hlZHVsZXJQYXJhbWV0ZXJzQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlSm9iU2NoZWR1bGVyU3VtbWFyeUNvbXBvbmVudCxcclxuICAgLyogIER5bmFtaWNDb250ZW50Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0NvbnRlbnREaXJlY3RpdmUsICovXHJcbiAgICBQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgUG9QYWdlSm9iU2NoZWR1bGVyQ29tcG9uZW50LFxyXG4gICAgLyogRHluYW1pY0NvbnRlbnRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljQ29udGVudERpcmVjdGl2ZSwgKi9cclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUG9CdXR0b25Nb2R1bGUsXHJcbiAgICBQb0NvbnRhaW5lck1vZHVsZSxcclxuICAgIFBvRGlhbG9nTW9kdWxlLFxyXG4gICAgUG9EaXZpZGVyTW9kdWxlLFxyXG4gICAgUG9EeW5hbWljTW9kdWxlLFxyXG4gICAgUG9GaWVsZE1vZHVsZSxcclxuICAgIFBvSW5mb01vZHVsZSxcclxuICAgIFBvUGFnZU1vZHVsZSxcclxuICAgIFBvU3RlcHBlck1vZHVsZSxcclxuICAgIFBvV2lkZ2V0TW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLCBQb1BhZ2VKb2JTY2hlZHVsZXJMb29rdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlSm9iU2NoZWR1bGVyTW9kdWxlIHsgfVxyXG4iXX0=