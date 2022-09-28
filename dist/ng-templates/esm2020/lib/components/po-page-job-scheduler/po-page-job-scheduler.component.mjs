import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoStepperStatus, poLocaleDefault } from '@po-ui/ng-components';
import { PoPageJobSchedulerInternal } from './po-page-job-scheduler-internal';
import { PoPageJobSchedulerBaseComponent } from './po-page-job-scheduler-base.component';
import { poPageJobSchedulerLiteralsDefault } from './po-page-job-scheduler-literals';
import * as i0 from "@angular/core";
import * as i1 from "./po-page-job-scheduler-lookup.service";
import * as i2 from "@angular/router";
import * as i3 from "@po-ui/ng-components";
import * as i4 from "./po-page-job-scheduler.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "./po-page-job-scheduler-execution/po-page-job-scheduler-execution.component";
import * as i8 from "./po-page-job-scheduler-parameters/po-page-job-scheduler-parameters.component";
import * as i9 from "./po-page-job-scheduler-summary/po-page-job-scheduler-summary.component";
const _c0 = ["schedulerExecution"];
const _c1 = ["schedulerParameters"];
const _c2 = function () { return []; };
function PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-page-job-scheduler-parameters", 9, 10);
    i0.ɵɵlistener("p-valueChange", function PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template_po_page_job_scheduler_parameters_p_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.model.executionParameter = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters || i0.ɵɵpureFunction0(5, _c2))("p-value", ctx_r2.model.executionParameter)("p-component", ctx_r2.component)("p-data-props", ctx_r2.dataProps);
} }
function PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-page-job-scheduler-summary", 11);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-no-parameters", ctx_r3.parametersEmpty)("p-literals", ctx_r3.literals)("p-parameters", ctx_r3.parameters)("p-value", ctx_r3.publicValues);
} }
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
export class PoPageJobSchedulerComponent extends PoPageJobSchedulerBaseComponent {
    constructor(poPageDynamicLookupService, activatedRoute, poDialogService, poNotification, poPageJobSchedulerService, languageService) {
        super(poPageJobSchedulerService);
        this.poPageDynamicLookupService = poPageDynamicLookupService;
        this.activatedRoute = activatedRoute;
        this.poDialogService = poDialogService;
        this.poNotification = poNotification;
        this.poPageJobSchedulerService = poPageJobSchedulerService;
        this.isEdit = false;
        this.literals = {
            ...poPageJobSchedulerLiteralsDefault[poLocaleDefault]
        };
        this.step = 1;
        this.parametersEmpty = true;
        this.steps = [];
        this.backPageAction = {
            label: this.literals.back,
            action: this.nextStepOperation.bind(this, 'back'),
            disabled: this.isDisabledBack.bind(this)
        };
        this.concludePageAction = {
            label: this.literals.conclude,
            action: this.confirmJobScheduler.bind(this)
        };
        this.nextPageAction = {
            label: this.literals.next,
            action: this.nextStepOperation.bind(this, 'next'),
            disabled: this.isDisabledAdvance.bind(this)
        };
        this.concludePageActions = [this.concludePageAction, this.backPageAction];
        this.nextPageActions = [this.nextPageAction, this.backPageAction];
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.jobSchedulerActions = [...this.nextPageActions];
        const language = languageService.getShortLanguage();
        this.literals = {
            ...this.literals,
            ...poPageJobSchedulerLiteralsDefault[language]
        };
        this.backPageAction.label = this.literals.back;
        this.concludePageAction.label = this.literals.conclude;
        this.nextPageAction.label = this.literals.next;
        this.steps = [
            { label: this.literals.scheduling },
            { label: this.literals.parameterization },
            { label: this.literals.conclude }
        ];
    }
    get stepperOrientation() {
        return window.innerWidth > 481 && window.innerWidth < 960 ? 'horizontal' : 'vertical';
    }
    ngOnInit() {
        const paramId = this.activatedRoute.snapshot.params['id'];
        this.isEdit = !!paramId;
        this.poPageJobSchedulerService.configServiceApi({ endpoint: this.serviceApi });
        if (this.parameters.length) {
            this.parametersEmpty = false;
        }
        this.loadData(paramId);
    }
    changePageActionsBySteps(currentStep, nextStep) {
        const stepsLength = this.steps.length;
        if (nextStep === stepsLength) {
            this.jobSchedulerActions = [...this.concludePageActions];
        }
        else if (currentStep === stepsLength && nextStep < currentStep) {
            this.jobSchedulerActions = [...this.nextPageActions];
        }
    }
    nextStep(stepNumber) {
        if (stepNumber > 1 && this.schedulerExecution.form.invalid) {
            this.markAsDirtyInvalidControls(this.schedulerExecution.form.controls);
            return;
        }
        if (stepNumber > 2 &&
            this.schedulerParameters &&
            this.schedulerParameters.form &&
            this.schedulerParameters.form.invalid) {
            this.markAsDirtyInvalidControls(this.schedulerParameters.form.controls);
            return;
        }
        this.setModelRecurrent();
        const model = JSON.parse(JSON.stringify(this.model));
        if (stepNumber === this.steps.length) {
            this.publicValues = this.hidesSecretValues(model);
        }
        this.changePageActionsBySteps(this.step, stepNumber);
        const steps = this.steps[this.step - 1];
        this.step = stepNumber;
        if (steps) {
            steps.status = PoStepperStatus.Done;
        }
    }
    onChangeProcess(process) {
        if (process.existAPI && process.processId && this.parametersEmpty && !this.component) {
            this.getParametersByProcess(process.processId);
            if (!this.isEdit) {
                this.model.executionParameter = {};
            }
        }
    }
    confirmJobScheduler() {
        const paramId = this.activatedRoute.snapshot.params['id'];
        const confirmMessage = paramId ? this.literals.confirmUpdateMessage : this.literals.confirmSaveMessage;
        this.poDialogService.confirm({
            title: this.literals.confirmation,
            message: confirmMessage,
            confirm: () => {
                const model = { ...this.model };
                this.save(model, paramId);
            }
        });
    }
    async emitSuccessMessage(msgSuccess, saveOperation) {
        await saveOperation.toPromise();
        this.poNotification.success(msgSuccess);
        this.resetJobSchedulerForm();
    }
    getParametersByProcess(process) {
        this.poPageJobSchedulerService.getParametersByProcess(process).subscribe(parameters => {
            this.parameters = parameters;
        });
    }
    hidesSecretValues(model) {
        const hiddenSecretValue = '**********';
        this.parameters.forEach(parameter => {
            if (this.isSecretParameter(model, parameter)) {
                model.executionParameter[parameter.property] = hiddenSecretValue;
            }
        });
        return model;
    }
    isDisabledAdvance() {
        const componentByStep = {
            1: this.schedulerExecution,
            2: this.schedulerParameters
        };
        return componentByStep[this.step]?.form?.invalid || false;
    }
    isDisabledBack() {
        return this.step === 1;
    }
    isSecretParameter(model, parameter) {
        return (model.executionParameter &&
            parameter.hasOwnProperty('secret') &&
            parameter['secret'] === true &&
            model.executionParameter.hasOwnProperty(parameter.property));
    }
    nextStepOperation(operation) {
        const stepNumber = operation === 'back' ? this.step - 1 : this.step + 1;
        this.nextStep(stepNumber);
    }
    resetJobSchedulerForm() {
        this.schedulerExecution.form.reset();
        // radiogroup não estava atribuindo novo valor, fica vermelho sem o timetout.
        setTimeout(() => {
            this.model = new PoPageJobSchedulerInternal();
            this.step = 1;
            this.steps.forEach(step => {
                step.status = PoStepperStatus.Default;
            });
            this.jobSchedulerActions = [...this.nextPageActions];
        });
    }
    save(model, paramId) {
        const saveOperation = paramId
            ? this.poPageJobSchedulerService.updateResource(paramId, model)
            : this.poPageJobSchedulerService.createResource(model);
        const msgSuccess = paramId
            ? this.literals.saveNotificationSuccessUpdate
            : this.literals.saveNotificationSuccessSave;
        this.emitSuccessMessage(msgSuccess, saveOperation);
    }
    setModelRecurrent() {
        this.model.recurrent = this.model.periodicity === 'single' ? false : this.model.recurrent;
    }
}
PoPageJobSchedulerComponent.ɵfac = function PoPageJobSchedulerComponent_Factory(t) { return new (t || PoPageJobSchedulerComponent)(i0.ɵɵdirectiveInject(i1.PoPageJobSchedulerLookupService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.PoDialogService), i0.ɵɵdirectiveInject(i3.PoNotificationService), i0.ɵɵdirectiveInject(i4.PoPageJobSchedulerService), i0.ɵɵdirectiveInject(i3.PoLanguageService)); };
PoPageJobSchedulerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerComponent, selectors: [["po-page-job-scheduler"]], viewQuery: function PoPageJobSchedulerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.schedulerExecution = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.schedulerParameters = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 14, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [1, "po-row"], ["p-sequential", "true", 1, "po-lg-3", "po-xl-2", 3, "p-orientation", "p-step", "p-steps", "p-change-step"], [1, "po-lg-8", "po-xl-6"], ["formScheduler", "ngForm"], [1, "po-md-12", 3, "p-no-parameters", "p-no-custom-params-component", "hidden", "p-is-edit", "p-literals", "p-value", "p-change-process"], ["schedulerExecution", ""], ["class", "po-md-12", 3, "p-literals", "p-parameters", "p-value", "p-component", "p-data-props", "p-valueChange", 4, "ngIf"], ["class", "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value", 4, "ngIf"], [1, "po-md-12", 3, "p-literals", "p-parameters", "p-value", "p-component", "p-data-props", "p-valueChange"], ["schedulerParameters", ""], [1, "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value"]], template: function PoPageJobSchedulerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-page-default", 0)(1, "div", 1)(2, "po-stepper", 2);
        i0.ɵɵlistener("p-change-step", function PoPageJobSchedulerComponent_Template_po_stepper_p_change_step_2_listener($event) { return ctx.nextStep($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "po-container", 3)(4, "form", null, 4)(6, "div", 1)(7, "po-page-job-scheduler-execution", 5, 6);
        i0.ɵɵlistener("p-change-process", function PoPageJobSchedulerComponent_Template_po_page_job_scheduler_execution_p_change_process_7_listener($event) { return ctx.onChangeProcess($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template, 2, 6, "po-page-job-scheduler-parameters", 7);
        i0.ɵɵtemplate(10, PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template, 1, 4, "po-page-job-scheduler-summary", 8);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵproperty("p-actions", ctx.jobSchedulerActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-orientation", ctx.stepperOrientation)("p-step", ctx.step)("p-steps", ctx.steps);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("p-no-parameters", ctx.parametersEmpty)("p-no-custom-params-component", !ctx.component)("hidden", ctx.step !== 1)("p-is-edit", ctx.isEdit)("p-literals", ctx.literals)("p-value", ctx.model);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.step === 2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.step === 3);
    } }, dependencies: [i5.NgIf, i6.ɵNgNoValidate, i6.NgControlStatusGroup, i6.NgForm, i3.PoContainerComponent, i3.PoPageDefaultComponent, i3.PoStepperComponent, i7.PoPageJobSchedulerExecutionComponent, i8.PoPageJobSchedulerParametersComponent, i9.PoPageJobSchedulerSummaryComponent], styles: ["po-container .po-container{overflow-y:unset}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler', encapsulation: ViewEncapsulation.None, template: "<po-page-default [p-actions]=\"jobSchedulerActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <div class=\"po-row\">\r\n    <po-stepper\r\n      class=\"po-lg-3 po-xl-2\"\r\n      p-sequential=\"true\"\r\n      [p-orientation]=\"stepperOrientation\"\r\n      [p-step]=\"step\"\r\n      [p-steps]=\"steps\"\r\n      (p-change-step)=\"nextStep($event)\"\r\n    >\r\n    </po-stepper>\r\n\r\n    <po-container class=\"po-lg-8 po-xl-6\">\r\n      <form #formScheduler=\"ngForm\">\r\n        <div class=\"po-row\">\r\n          <po-page-job-scheduler-execution\r\n            [p-no-parameters]=\"parametersEmpty\"\r\n            [p-no-custom-params-component]=\"!component\"\r\n            [hidden]=\"step !== 1\"\r\n            #schedulerExecution\r\n            class=\"po-md-12\"\r\n            [p-is-edit]=\"isEdit\"\r\n            [p-literals]=\"literals\"\r\n            [p-value]=\"model\"\r\n            (p-change-process)=\"onChangeProcess($event)\"\r\n          >\r\n          </po-page-job-scheduler-execution>\r\n\r\n          <po-page-job-scheduler-parameters\r\n            *ngIf=\"step === 2\"\r\n            #schedulerParameters\r\n            class=\"po-md-12\"\r\n            [p-literals]=\"literals\"\r\n            [p-parameters]=\"parameters || []\"\r\n            [(p-value)]=\"model.executionParameter\"\r\n            [p-component]=\"component\"\r\n            [p-data-props]=\"dataProps\"\r\n          >\r\n          </po-page-job-scheduler-parameters>\r\n\r\n          <po-page-job-scheduler-summary\r\n            [p-no-parameters]=\"parametersEmpty\"\r\n            *ngIf=\"step === 3\"\r\n            class=\"po-md-12\"\r\n            [p-literals]=\"literals\"\r\n            [p-parameters]=\"parameters\"\r\n            [p-value]=\"publicValues\"\r\n          >\r\n          </po-page-job-scheduler-summary>\r\n        </div>\r\n      </form>\r\n    </po-container>\r\n  </div>\r\n</po-page-default>\r\n", styles: ["po-container .po-container{overflow-y:unset}\n"] }]
    }], function () { return [{ type: i1.PoPageJobSchedulerLookupService }, { type: i2.ActivatedRoute }, { type: i3.PoDialogService }, { type: i3.PoNotificationService }, { type: i4.PoPageJobSchedulerService }, { type: i3.PoLanguageService }]; }, { schedulerExecution: [{
            type: ViewChild,
            args: ['schedulerExecution', { static: true }]
        }], schedulerParameters: [{
            type: ViewChild,
            args: ['schedulerParameters']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLaEYsT0FBTyxFQU9MLGVBQWUsRUFDZixlQUFlLEVBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNRM0UsK0RBU0M7SUFIQyxxUEFBYSx3REFDcEIsSUFENkM7SUFJeEMsaUJBQW1DOzs7SUFOakMsNENBQXVCLGlFQUFBLDRDQUFBLGlDQUFBLGtDQUFBOzs7SUFRekIsb0RBUWdDOzs7SUFQOUIsd0RBQW1DLCtCQUFBLG1DQUFBLGdDQUFBOztBRGpCL0M7Ozs7Ozs7Ozs7R0FVRztBQWFILE1BQU0sT0FBTywyQkFBNEIsU0FBUSwrQkFBK0I7SUF3QzlFLFlBQ1MsMEJBQTJELEVBQzFELGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGNBQXFDLEVBQ25DLHlCQUFvRCxFQUM5RCxlQUFrQztRQUVsQyxLQUFLLENBQUMseUJBQXlC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Ozs7Ozs7O1FDL0N4QywwQ0FBaUcsYUFBQSxvQkFBQTtRQVEzRixrSUFBaUIsb0JBQWdCLElBQUM7UUFFcEMsaUJBQWE7UUFFYix1Q0FBc0Msb0JBQUEsYUFBQSw0Q0FBQTtRQVk5Qiw2SkFBb0IsMkJBQXVCLElBQUM7UUFFOUMsaUJBQWtDO1FBRWxDLHNJQVVtQztRQUVuQyxrSUFRZ0M7UUFDbEMsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFqREcsbURBQWlDLGdDQUFBLHNCQUFBO1FBSzVDLGVBQW9DO1FBQXBDLHNEQUFvQyxvQkFBQSxzQkFBQTtRQVc5QixlQUFtQztRQUFuQyxxREFBbUMsZ0RBQUEsMEJBQUEseUJBQUEsNEJBQUEsc0JBQUE7UUFhbEMsZUFBZ0I7UUFBaEIscUNBQWdCO1FBYWhCLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZES2hCLDJCQUEyQjtjQVp2QyxTQUFTOzJCQUNFLHVCQUF1QixpQkFFbEIsaUJBQWlCLENBQUMsSUFBSTt5UEFVYyxrQkFBa0I7a0JBQXBFLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2YsbUJBQW1CO2tCQUFwRCxTQUFTO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFBvRGlhbG9nU2VydmljZSxcclxuICBQb0R5bmFtaWNGb3JtRmllbGQsXHJcbiAgUG9MYW5ndWFnZVNlcnZpY2UsXHJcbiAgUG9Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gIFBvUGFnZUFjdGlvbixcclxuICBQb1N0ZXBwZXJJdGVtLFxyXG4gIFBvU3RlcHBlclN0YXR1cyxcclxuICBwb0xvY2FsZURlZmF1bHRcclxufSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb0pvYlNjaGVkdWxlckludGVybmFsIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWpvYi1zY2hlZHVsZXItaW50ZXJuYWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVySW50ZXJuYWwgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1pbnRlcm5hbCc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHBvUGFnZUpvYlNjaGVkdWxlckxpdGVyYWxzRGVmYXVsdCB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWxpdGVyYWxzJztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWxvb2t1cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VKb2JTY2hlZHVsZXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzXCIgdGl0bGU9XCJQTyBQYWdlIEpvYiBTY2hlZHVsZXIgLSBCYWNrZ3JvdW5kIFByb2Nlc3NcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWJhY2tncm91bmQtcHJvY2Vzcy9zYW1wbGUtcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWJhY2tncm91bmQtcHJvY2Vzcy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3Mvc2FtcGxlLXBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3MuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWpvYi1zY2hlZHVsZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIHBvLWNvbnRhaW5lciAucG8tY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy15OiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUpvYlNjaGVkdWxlckNvbXBvbmVudCBleHRlbmRzIFBvUGFnZUpvYlNjaGVkdWxlckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3NjaGVkdWxlckV4ZWN1dGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIHNjaGVkdWxlckV4ZWN1dGlvbjogeyBmb3JtOiBOZ0Zvcm0gfTtcclxuICBAVmlld0NoaWxkKCdzY2hlZHVsZXJQYXJhbWV0ZXJzJykgc2NoZWR1bGVyUGFyYW1ldGVyczogeyBmb3JtOiBOZ0Zvcm0gfTtcclxuXHJcbiAgaXNFZGl0ID0gZmFsc2U7XHJcbiAgbGl0ZXJhbHMgPSB7XHJcbiAgICAuLi5wb1BhZ2VKb2JTY2hlZHVsZXJMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XVxyXG4gIH07XHJcblxyXG4gIHB1YmxpY1ZhbHVlczogUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbDtcclxuICBzYXZlT3BlcmF0aW9uOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgc3RlcDogbnVtYmVyID0gMTtcclxuICBwYXJhbWV0ZXJzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICByZWFkb25seSBzdGVwczogQXJyYXk8UG9TdGVwcGVySXRlbT4gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBiYWNrUGFnZUFjdGlvbjogUG9QYWdlQWN0aW9uID0ge1xyXG4gICAgbGFiZWw6IHRoaXMubGl0ZXJhbHMuYmFjayxcclxuICAgIGFjdGlvbjogdGhpcy5uZXh0U3RlcE9wZXJhdGlvbi5iaW5kKHRoaXMsICdiYWNrJyksXHJcbiAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkQmFjay5iaW5kKHRoaXMpXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjb25jbHVkZVBhZ2VBY3Rpb246IFBvUGFnZUFjdGlvbiA9IHtcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmNvbmNsdWRlLFxyXG4gICAgYWN0aW9uOiB0aGlzLmNvbmZpcm1Kb2JTY2hlZHVsZXIuYmluZCh0aGlzKVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbmV4dFBhZ2VBY3Rpb246IFBvUGFnZUFjdGlvbiA9IHtcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLm5leHQsXHJcbiAgICBhY3Rpb246IHRoaXMubmV4dFN0ZXBPcGVyYXRpb24uYmluZCh0aGlzLCAnbmV4dCcpLFxyXG4gICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZEFkdmFuY2UuYmluZCh0aGlzKVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY29uY2x1ZGVQYWdlQWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFt0aGlzLmNvbmNsdWRlUGFnZUFjdGlvbiwgdGhpcy5iYWNrUGFnZUFjdGlvbl07XHJcblxyXG4gIHByaXZhdGUgbmV4dFBhZ2VBY3Rpb25zOiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gW3RoaXMubmV4dFBhZ2VBY3Rpb24sIHRoaXMuYmFja1BhZ2VBY3Rpb25dO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIGpvYlNjaGVkdWxlckFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbLi4udGhpcy5uZXh0UGFnZUFjdGlvbnNdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBwb1BhZ2VEeW5hbWljTG9va3VwU2VydmljZTogUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZSxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBwb0RpYWxvZ1NlcnZpY2U6IFBvRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9Ob3RpZmljYXRpb246IFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBwb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlOiBQb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLFxyXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSk7XHJcblxyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG5cclxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XHJcbiAgICAgIC4uLnRoaXMubGl0ZXJhbHMsXHJcbiAgICAgIC4uLnBvUGFnZUpvYlNjaGVkdWxlckxpdGVyYWxzRGVmYXVsdFtsYW5ndWFnZV1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5iYWNrUGFnZUFjdGlvbi5sYWJlbCA9IHRoaXMubGl0ZXJhbHMuYmFjaztcclxuICAgIHRoaXMuY29uY2x1ZGVQYWdlQWN0aW9uLmxhYmVsID0gdGhpcy5saXRlcmFscy5jb25jbHVkZTtcclxuICAgIHRoaXMubmV4dFBhZ2VBY3Rpb24ubGFiZWwgPSB0aGlzLmxpdGVyYWxzLm5leHQ7XHJcblxyXG4gICAgdGhpcy5zdGVwcyA9IFtcclxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5zY2hlZHVsaW5nIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMucGFyYW1ldGVyaXphdGlvbiB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLmNvbmNsdWRlIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXQgc3RlcHBlck9yaWVudGF0aW9uKCk6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gNDgxICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgcGFyYW1JZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG5cclxuICAgIHRoaXMuaXNFZGl0ID0gISFwYXJhbUlkO1xyXG5cclxuICAgIHRoaXMucG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZS5jb25maWdTZXJ2aWNlQXBpKHsgZW5kcG9pbnQ6IHRoaXMuc2VydmljZUFwaSB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnBhcmFtZXRlcnNFbXB0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZERhdGEocGFyYW1JZCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlQWN0aW9uc0J5U3RlcHMoY3VycmVudFN0ZXA6IG51bWJlciwgbmV4dFN0ZXA6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3RlcHNMZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAobmV4dFN0ZXAgPT09IHN0ZXBzTGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuam9iU2NoZWR1bGVyQWN0aW9ucyA9IFsuLi50aGlzLmNvbmNsdWRlUGFnZUFjdGlvbnNdO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHNMZW5ndGggJiYgbmV4dFN0ZXAgPCBjdXJyZW50U3RlcCkge1xyXG4gICAgICB0aGlzLmpvYlNjaGVkdWxlckFjdGlvbnMgPSBbLi4udGhpcy5uZXh0UGFnZUFjdGlvbnNdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBpZiAoc3RlcE51bWJlciA+IDEgJiYgdGhpcy5zY2hlZHVsZXJFeGVjdXRpb24uZm9ybS5pbnZhbGlkKSB7XHJcbiAgICAgIHRoaXMubWFya0FzRGlydHlJbnZhbGlkQ29udHJvbHModGhpcy5zY2hlZHVsZXJFeGVjdXRpb24uZm9ybS5jb250cm9scyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHN0ZXBOdW1iZXIgPiAyICYmXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVycyAmJlxyXG4gICAgICB0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnMuZm9ybSAmJlxyXG4gICAgICB0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnMuZm9ybS5pbnZhbGlkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5tYXJrQXNEaXJ0eUludmFsaWRDb250cm9scyh0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnMuZm9ybS5jb250cm9scyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0TW9kZWxSZWN1cnJlbnQoKTtcclxuXHJcbiAgICBjb25zdCBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5tb2RlbCkpO1xyXG5cclxuICAgIGlmIChzdGVwTnVtYmVyID09PSB0aGlzLnN0ZXBzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnB1YmxpY1ZhbHVlcyA9IHRoaXMuaGlkZXNTZWNyZXRWYWx1ZXMobW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlUGFnZUFjdGlvbnNCeVN0ZXBzKHRoaXMuc3RlcCwgc3RlcE51bWJlcik7XHJcblxyXG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLnN0ZXBzW3RoaXMuc3RlcCAtIDFdO1xyXG4gICAgdGhpcy5zdGVwID0gc3RlcE51bWJlcjtcclxuXHJcbiAgICBpZiAoc3RlcHMpIHtcclxuICAgICAgc3RlcHMuc3RhdHVzID0gUG9TdGVwcGVyU3RhdHVzLkRvbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVByb2Nlc3MocHJvY2VzczogeyBwcm9jZXNzSWQ6IHN0cmluZzsgZXhpc3RBUEk6IGJvb2xlYW4gfSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZXhpc3RBUEkgJiYgcHJvY2Vzcy5wcm9jZXNzSWQgJiYgdGhpcy5wYXJhbWV0ZXJzRW1wdHkgJiYgIXRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuZ2V0UGFyYW1ldGVyc0J5UHJvY2Vzcyhwcm9jZXNzLnByb2Nlc3NJZCk7XHJcbiAgICAgIGlmICghdGhpcy5pc0VkaXQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlciA9IHt9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpcm1Kb2JTY2hlZHVsZXIoKSB7XHJcbiAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcblxyXG4gICAgY29uc3QgY29uZmlybU1lc3NhZ2UgPSBwYXJhbUlkID8gdGhpcy5saXRlcmFscy5jb25maXJtVXBkYXRlTWVzc2FnZSA6IHRoaXMubGl0ZXJhbHMuY29uZmlybVNhdmVNZXNzYWdlO1xyXG5cclxuICAgIHRoaXMucG9EaWFsb2dTZXJ2aWNlLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogdGhpcy5saXRlcmFscy5jb25maXJtYXRpb24sXHJcbiAgICAgIG1lc3NhZ2U6IGNvbmZpcm1NZXNzYWdlLFxyXG4gICAgICBjb25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSB7IC4uLnRoaXMubW9kZWwgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlKG1vZGVsLCBwYXJhbUlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGVtaXRTdWNjZXNzTWVzc2FnZShtc2dTdWNjZXNzOiBhbnksIHNhdmVPcGVyYXRpb246IE9ic2VydmFibGU8YW55Pikge1xyXG4gICAgYXdhaXQgc2F2ZU9wZXJhdGlvbi50b1Byb21pc2UoKTtcclxuICAgIHRoaXMucG9Ob3RpZmljYXRpb24uc3VjY2Vzcyhtc2dTdWNjZXNzKTtcclxuICAgIHRoaXMucmVzZXRKb2JTY2hlZHVsZXJGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcmFtZXRlcnNCeVByb2Nlc3MocHJvY2VzczogYW55KSB7XHJcbiAgICB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UuZ2V0UGFyYW1ldGVyc0J5UHJvY2Vzcyhwcm9jZXNzKS5zdWJzY3JpYmUocGFyYW1ldGVycyA9PiB7XHJcbiAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZXNTZWNyZXRWYWx1ZXMobW9kZWw6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwpOiBQb0pvYlNjaGVkdWxlckludGVybmFsIHtcclxuICAgIGNvbnN0IGhpZGRlblNlY3JldFZhbHVlID0gJyoqKioqKioqKionO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2gocGFyYW1ldGVyID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNTZWNyZXRQYXJhbWV0ZXIobW9kZWwsIHBhcmFtZXRlcikpIHtcclxuICAgICAgICBtb2RlbC5leGVjdXRpb25QYXJhbWV0ZXJbcGFyYW1ldGVyLnByb3BlcnR5XSA9IGhpZGRlblNlY3JldFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtb2RlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEaXNhYmxlZEFkdmFuY2UoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRCeVN0ZXAgPSB7XHJcbiAgICAgIDE6IHRoaXMuc2NoZWR1bGVyRXhlY3V0aW9uLFxyXG4gICAgICAyOiB0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnNcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudEJ5U3RlcFt0aGlzLnN0ZXBdPy5mb3JtPy5pbnZhbGlkIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkQmFjaygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0ZXAgPT09IDE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU2VjcmV0UGFyYW1ldGVyKG1vZGVsOiBQb0pvYlNjaGVkdWxlckludGVybmFsLCBwYXJhbWV0ZXI6IFBvRHluYW1pY0Zvcm1GaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyICYmXHJcbiAgICAgIHBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eSgnc2VjcmV0JykgJiZcclxuICAgICAgcGFyYW1ldGVyWydzZWNyZXQnXSA9PT0gdHJ1ZSAmJlxyXG4gICAgICBtb2RlbC5leGVjdXRpb25QYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkocGFyYW1ldGVyLnByb3BlcnR5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV4dFN0ZXBPcGVyYXRpb24ob3BlcmF0aW9uPzogJ2JhY2snIHwgJ25leHQnKSB7XHJcbiAgICBjb25zdCBzdGVwTnVtYmVyID0gb3BlcmF0aW9uID09PSAnYmFjaycgPyB0aGlzLnN0ZXAgLSAxIDogdGhpcy5zdGVwICsgMTtcclxuXHJcbiAgICB0aGlzLm5leHRTdGVwKHN0ZXBOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEpvYlNjaGVkdWxlckZvcm0oKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlckV4ZWN1dGlvbi5mb3JtLnJlc2V0KCk7XHJcblxyXG4gICAgLy8gcmFkaW9ncm91cCBuw6NvIGVzdGF2YSBhdHJpYnVpbmRvIG5vdm8gdmFsb3IsIGZpY2EgdmVybWVsaG8gc2VtIG8gdGltZXRvdXQuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBQb1BhZ2VKb2JTY2hlZHVsZXJJbnRlcm5hbCgpO1xyXG5cclxuICAgICAgdGhpcy5zdGVwID0gMTtcclxuICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIHN0ZXAuc3RhdHVzID0gUG9TdGVwcGVyU3RhdHVzLkRlZmF1bHQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5qb2JTY2hlZHVsZXJBY3Rpb25zID0gWy4uLnRoaXMubmV4dFBhZ2VBY3Rpb25zXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlKG1vZGVsOiBQb0pvYlNjaGVkdWxlckludGVybmFsLCBwYXJhbUlkKSB7XHJcbiAgICBjb25zdCBzYXZlT3BlcmF0aW9uID0gcGFyYW1JZFxyXG4gICAgICA/IHRoaXMucG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZS51cGRhdGVSZXNvdXJjZShwYXJhbUlkLCBtb2RlbClcclxuICAgICAgOiB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UuY3JlYXRlUmVzb3VyY2UobW9kZWwpO1xyXG5cclxuICAgIGNvbnN0IG1zZ1N1Y2Nlc3MgPSBwYXJhbUlkXHJcbiAgICAgID8gdGhpcy5saXRlcmFscy5zYXZlTm90aWZpY2F0aW9uU3VjY2Vzc1VwZGF0ZVxyXG4gICAgICA6IHRoaXMubGl0ZXJhbHMuc2F2ZU5vdGlmaWNhdGlvblN1Y2Nlc3NTYXZlO1xyXG5cclxuICAgIHRoaXMuZW1pdFN1Y2Nlc3NNZXNzYWdlKG1zZ1N1Y2Nlc3MsIHNhdmVPcGVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRNb2RlbFJlY3VycmVudCgpIHtcclxuICAgIHRoaXMubW9kZWwucmVjdXJyZW50ID0gdGhpcy5tb2RlbC5wZXJpb2RpY2l0eSA9PT0gJ3NpbmdsZScgPyBmYWxzZSA6IHRoaXMubW9kZWwucmVjdXJyZW50O1xyXG4gIH1cclxufVxyXG4iLCI8cG8tcGFnZS1kZWZhdWx0IFtwLWFjdGlvbnNdPVwiam9iU2NoZWR1bGVyQWN0aW9uc1wiIFtwLWJyZWFkY3J1bWJdPVwiYnJlYWRjcnVtYlwiIFtwLXRpdGxlXT1cInRpdGxlXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgPHBvLXN0ZXBwZXJcclxuICAgICAgY2xhc3M9XCJwby1sZy0zIHBvLXhsLTJcIlxyXG4gICAgICBwLXNlcXVlbnRpYWw9XCJ0cnVlXCJcclxuICAgICAgW3Atb3JpZW50YXRpb25dPVwic3RlcHBlck9yaWVudGF0aW9uXCJcclxuICAgICAgW3Atc3RlcF09XCJzdGVwXCJcclxuICAgICAgW3Atc3RlcHNdPVwic3RlcHNcIlxyXG4gICAgICAocC1jaGFuZ2Utc3RlcCk9XCJuZXh0U3RlcCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvcG8tc3RlcHBlcj5cclxuXHJcbiAgICA8cG8tY29udGFpbmVyIGNsYXNzPVwicG8tbGctOCBwby14bC02XCI+XHJcbiAgICAgIDxmb3JtICNmb3JtU2NoZWR1bGVyPVwibmdGb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgICAgICAgPHBvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb25cclxuICAgICAgICAgICAgW3Atbm8tcGFyYW1ldGVyc109XCJwYXJhbWV0ZXJzRW1wdHlcIlxyXG4gICAgICAgICAgICBbcC1uby1jdXN0b20tcGFyYW1zLWNvbXBvbmVudF09XCIhY29tcG9uZW50XCJcclxuICAgICAgICAgICAgW2hpZGRlbl09XCJzdGVwICE9PSAxXCJcclxuICAgICAgICAgICAgI3NjaGVkdWxlckV4ZWN1dGlvblxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLW1kLTEyXCJcclxuICAgICAgICAgICAgW3AtaXMtZWRpdF09XCJpc0VkaXRcIlxyXG4gICAgICAgICAgICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXHJcbiAgICAgICAgICAgIFtwLXZhbHVlXT1cIm1vZGVsXCJcclxuICAgICAgICAgICAgKHAtY2hhbmdlLXByb2Nlc3MpPVwib25DaGFuZ2VQcm9jZXNzKCRldmVudClcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uPlxyXG5cclxuICAgICAgICAgIDxwby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAqbmdJZj1cInN0ZXAgPT09IDJcIlxyXG4gICAgICAgICAgICAjc2NoZWR1bGVyUGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBjbGFzcz1cInBvLW1kLTEyXCJcclxuICAgICAgICAgICAgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIlxyXG4gICAgICAgICAgICBbcC1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnMgfHwgW11cIlxyXG4gICAgICAgICAgICBbKHAtdmFsdWUpXT1cIm1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlclwiXHJcbiAgICAgICAgICAgIFtwLWNvbXBvbmVudF09XCJjb21wb25lbnRcIlxyXG4gICAgICAgICAgICBbcC1kYXRhLXByb3BzXT1cImRhdGFQcm9wc1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzPlxyXG5cclxuICAgICAgICAgIDxwby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeVxyXG4gICAgICAgICAgICBbcC1uby1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnNFbXB0eVwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwic3RlcCA9PT0gM1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgICAgICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXHJcbiAgICAgICAgICAgIFtwLXBhcmFtZXRlcnNdPVwicGFyYW1ldGVyc1wiXHJcbiAgICAgICAgICAgIFtwLXZhbHVlXT1cInB1YmxpY1ZhbHVlc1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXBhZ2Utam9iLXNjaGVkdWxlci1zdW1tYXJ5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3BvLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9wby1wYWdlLWRlZmF1bHQ+XHJcbiJdfQ==