import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
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
} from '@po-ui/ng-components';

import { PoPageJobSchedulerComponent } from './po-page-job-scheduler.component';
import { PoPageJobSchedulerExecutionComponent } from './po-page-job-scheduler-execution/po-page-job-scheduler-execution.component';
import { PoPageJobSchedulerLookupService } from './po-page-job-scheduler-lookup.service';
import { PoPageJobSchedulerParametersComponent } from './po-page-job-scheduler-parameters/po-page-job-scheduler-parameters.component';
import { PoPageJobSchedulerService } from './po-page-job-scheduler.service';
import { PoPageJobSchedulerSummaryComponent } from './po-page-job-scheduler-summary/po-page-job-scheduler-summary.component';
import { DynamicContentComponent } from './po-page-job-scheduler-parameters/dynamic-content.component';
import { DynamicContentDirective } from './po-page-job-scheduler-parameters/dynamic-component.directive';
import { PoJobSchedulerParametersTemplateDirective } from './po-page-job-scheduler-parameters/po-job-scheduler-parameters-template/po-job-scheduler-parameters-template.directive';

@NgModule({
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
})
export class PoPageJobSchedulerModule {}
