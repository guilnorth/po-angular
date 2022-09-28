import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PoDialogService, PoLanguageService, PoNotificationService, PoPageAction, PoStepperItem } from '@po-ui/ng-components';
import { PoJobSchedulerInternal } from './interfaces/po-job-scheduler-internal.interface';
import { PoPageJobSchedulerBaseComponent } from './po-page-job-scheduler-base.component';
import { PoPageJobSchedulerLookupService } from './po-page-job-scheduler-lookup.service';
import { PoPageJobSchedulerService } from './po-page-job-scheduler.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageJobSchedulerBaseComponent
 *
 * @example
 *
 * <example name="po-page-job-scheduler-background-process" title="PO Page Job Scheduler - Background Process">
 *  <file name="sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"> </file>
 *  <file name="sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"> </file>
 * </example>
 *
 */
export declare class PoPageJobSchedulerComponent extends PoPageJobSchedulerBaseComponent implements OnInit {
    poPageDynamicLookupService: PoPageJobSchedulerLookupService;
    private activatedRoute;
    private poDialogService;
    private poNotification;
    protected poPageJobSchedulerService: PoPageJobSchedulerService;
    schedulerExecution: {
        form: NgForm;
    };
    schedulerParameters: {
        form: NgForm;
    };
    isEdit: boolean;
    literals: {
        at: string;
        back: string;
        next: string;
        periodicity: string;
        execution: string;
        process: string;
        enterProcess: string;
        recurrent: string;
        single: string;
        daily: string;
        weekly: string;
        monthly: string;
        scheduling: string;
        parameterization: string;
        conclude: string;
        firstExecution: string;
        startTime: string;
        endTime: string;
        time: string;
        hour: string;
        minute: string;
        day: string;
        endDay: string;
        startDay: string;
        weekDays: string;
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        parameters: string;
        yes: string;
        no: string;
        notReported: string;
        periodicityData: string;
        confirmation: string;
        confirmSaveMessage: string;
        confirmUpdateMessage: string;
        saveNotificationSuccessUpdate: string;
        saveNotificationSuccessSave: string;
        parametersNotFound: string;
        frequency: string;
        to: string;
        from: string;
    };
    publicValues: PoJobSchedulerInternal;
    saveOperation: Observable<any>;
    step: number;
    parametersEmpty: boolean;
    readonly steps: Array<PoStepperItem>;
    private backPageAction;
    private concludePageAction;
    private nextPageAction;
    private concludePageActions;
    private nextPageActions;
    jobSchedulerActions: Array<PoPageAction>;
    constructor(poPageDynamicLookupService: PoPageJobSchedulerLookupService, activatedRoute: ActivatedRoute, poDialogService: PoDialogService, poNotification: PoNotificationService, poPageJobSchedulerService: PoPageJobSchedulerService, languageService: PoLanguageService);
    get stepperOrientation(): 'horizontal' | 'vertical';
    ngOnInit(): void;
    changePageActionsBySteps(currentStep: number, nextStep: number): void;
    nextStep(stepNumber: number): void;
    onChangeProcess(process: {
        processId: string;
        existAPI: boolean;
    }): void;
    private confirmJobScheduler;
    private emitSuccessMessage;
    private getParametersByProcess;
    private hidesSecretValues;
    private isDisabledAdvance;
    private isDisabledBack;
    private isSecretParameter;
    private nextStepOperation;
    private resetJobSchedulerForm;
    private save;
    private setModelRecurrent;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageJobSchedulerComponent, "po-page-job-scheduler", never, {}, {}, never, never, false>;
}
