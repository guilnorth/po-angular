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
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 14, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [1, "po-row"], ["p-sequential", "true", 1, "po-lg-3", "po-xl-2", 3, "p-orientation", "p-step", "p-steps", "p-change-step"], [1, "po-lg-8", "po-xl-9"], ["formScheduler", "ngForm"], [1, "po-md-12", 3, "p-no-parameters", "p-no-custom-params-component", "hidden", "p-is-edit", "p-literals", "p-value", "p-change-process"], ["schedulerExecution", ""], ["class", "po-md-12", 3, "p-literals", "p-parameters", "p-value", "p-component", "p-data-props", "p-valueChange", 4, "ngIf"], ["class", "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value", 4, "ngIf"], [1, "po-md-12", 3, "p-literals", "p-parameters", "p-value", "p-component", "p-data-props", "p-valueChange"], ["schedulerParameters", ""], [1, "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value"]], template: function PoPageJobSchedulerComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'po-page-job-scheduler', encapsulation: ViewEncapsulation.None, template: "<po-page-default [p-actions]=\"jobSchedulerActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\n  <div class=\"po-row\">\n    <po-stepper\n      class=\"po-lg-3 po-xl-2\"\n      p-sequential=\"true\"\n      [p-orientation]=\"stepperOrientation\"\n      [p-step]=\"step\"\n      [p-steps]=\"steps\"\n      (p-change-step)=\"nextStep($event)\"\n    >\n    </po-stepper>\n\n    <po-container class=\"po-lg-8 po-xl-9\">\n      <form #formScheduler=\"ngForm\">\n        <div class=\"po-row\">\n          <po-page-job-scheduler-execution\n            [p-no-parameters]=\"parametersEmpty\"\n            [p-no-custom-params-component]=\"!component\"\n            [hidden]=\"step !== 1\"\n            #schedulerExecution\n            class=\"po-md-12\"\n            [p-is-edit]=\"isEdit\"\n            [p-literals]=\"literals\"\n            [p-value]=\"model\"\n            (p-change-process)=\"onChangeProcess($event)\"\n          >\n          </po-page-job-scheduler-execution>\n\n          <po-page-job-scheduler-parameters\n            *ngIf=\"step === 2\"\n            #schedulerParameters\n            class=\"po-md-12\"\n            [p-literals]=\"literals\"\n            [p-parameters]=\"parameters || []\"\n            [(p-value)]=\"model.executionParameter\"\n            [p-component]=\"component\"\n            [p-data-props]=\"dataProps\"\n          >\n          </po-page-job-scheduler-parameters>\n\n          <po-page-job-scheduler-summary\n            [p-no-parameters]=\"parametersEmpty\"\n            *ngIf=\"step === 3\"\n            class=\"po-md-12\"\n            [p-literals]=\"literals\"\n            [p-parameters]=\"parameters\"\n            [p-value]=\"publicValues\"\n          >\n          </po-page-job-scheduler-summary>\n        </div>\n      </form>\n    </po-container>\n  </div>\n</po-page-default>\n", styles: ["po-container .po-container{overflow-y:unset}\n"] }]
    }], function () { return [{ type: i1.PoPageJobSchedulerLookupService }, { type: i2.ActivatedRoute }, { type: i3.PoDialogService }, { type: i3.PoNotificationService }, { type: i4.PoPageJobSchedulerService }, { type: i3.PoLanguageService }]; }, { schedulerExecution: [{
            type: ViewChild,
            args: ['schedulerExecution', { static: true }]
        }], schedulerParameters: [{
            type: ViewChild,
            args: ['schedulerParameters']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLaEYsT0FBTyxFQU9MLGVBQWUsRUFDZixlQUFlLEVBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNRM0UsK0RBU0M7SUFIQyxxUEFBYSx3REFDbkIsSUFENEM7SUFJeEMsaUJBQW1DOzs7SUFOakMsNENBQXVCLGlFQUFBLDRDQUFBLGlDQUFBLGtDQUFBOzs7SUFRekIsb0RBUWdDOzs7SUFQOUIsd0RBQW1DLCtCQUFBLG1DQUFBLGdDQUFBOztBRGpCL0M7Ozs7Ozs7Ozs7R0FVRztBQWFILE1BQU0sT0FBTywyQkFBNEIsU0FBUSwrQkFBK0I7SUF3QzlFLFlBQ1MsMEJBQTJELEVBQzFELGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGNBQXFDLEVBQ25DLHlCQUFvRCxFQUM5RCxlQUFrQztRQUVsQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQVAxQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWlDO1FBQzFELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ25DLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUF6Q2hFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUc7WUFDVCxHQUFHLGlDQUFpQyxDQUFDLGVBQWUsQ0FBQztTQUN0RCxDQUFDO1FBSUYsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixvQkFBZSxHQUFZLElBQUksQ0FBQztRQUV2QixVQUFLLEdBQXlCLEVBQUUsQ0FBQztRQUVsQyxtQkFBYyxHQUFpQjtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7WUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QyxDQUFDO1FBRU0sdUJBQWtCLEdBQWlCO1lBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzVDLENBQUM7UUFFTSxtQkFBYyxHQUFpQjtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7WUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzVDLENBQUM7UUFFTSx3QkFBbUIsR0FBd0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTFGLG9CQUFlLEdBQXdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUYsOERBQThEO1FBQzlELHdCQUFtQixHQUF3QixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBWW5FLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ2hCLEdBQUcsaUNBQWlDLENBQUMsUUFBUSxDQUFDO1NBQy9DLENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDeEYsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRXhCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUUvRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0JBQXdCLENBQUMsV0FBbUIsRUFBRSxRQUFnQjtRQUM1RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUV0QyxJQUFJLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMxRDthQUFNLElBQUksV0FBVyxLQUFLLFdBQVcsSUFBSSxRQUFRLEdBQUcsV0FBVyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQjtRQUN6QixJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkUsT0FBTztTQUNSO1FBRUQsSUFDRSxVQUFVLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUk7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3JDO1lBQ0EsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFckQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBRXZCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFpRDtRQUMvRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwRixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQzthQUNwQztTQUNGO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1FBRXZHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVk7WUFDakMsT0FBTyxFQUFFLGNBQWM7WUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDWixNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxVQUFlLEVBQUUsYUFBOEI7UUFDOUUsTUFBTSxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLHNCQUFzQixDQUFDLE9BQVk7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxLQUE2QjtRQUNyRCxNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7YUFDbEU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixNQUFNLGVBQWUsR0FBRztZQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUM1QixDQUFDO1FBRUYsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQTZCLEVBQUUsU0FBNkI7UUFDcEYsT0FBTyxDQUNMLEtBQUssQ0FBQyxrQkFBa0I7WUFDeEIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDbEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUk7WUFDNUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQzVELENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCLENBQUMsU0FBMkI7UUFDbkQsTUFBTSxVQUFVLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLDZFQUE2RTtRQUM3RSxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7WUFFOUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sSUFBSSxDQUFDLEtBQTZCLEVBQUUsT0FBTztRQUNqRCxNQUFNLGFBQWEsR0FBRyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDL0QsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekQsTUFBTSxVQUFVLEdBQUcsT0FBTztZQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyw2QkFBNkI7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUM7UUFFOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUM1RixDQUFDOztzR0ExT1UsMkJBQTJCOzhFQUEzQiwyQkFBMkI7Ozs7Ozs7O1FDL0N4QywwQ0FBaUcsYUFBQSxvQkFBQTtRQVEzRixrSUFBaUIsb0JBQWdCLElBQUM7UUFFcEMsaUJBQWE7UUFFYix1Q0FBc0Msb0JBQUEsYUFBQSw0Q0FBQTtRQVk5Qiw2SkFBb0IsMkJBQXVCLElBQUM7UUFFOUMsaUJBQWtDO1FBRWxDLHNJQVVtQztRQUVuQyxrSUFRZ0M7UUFDbEMsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFqREcsbURBQWlDLGdDQUFBLHNCQUFBO1FBSzVDLGVBQW9DO1FBQXBDLHNEQUFvQyxvQkFBQSxzQkFBQTtRQVc5QixlQUFtQztRQUFuQyxxREFBbUMsZ0RBQUEsMEJBQUEseUJBQUEsNEJBQUEsc0JBQUE7UUFhbEMsZUFBZ0I7UUFBaEIscUNBQWdCO1FBYWhCLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZES2hCLDJCQUEyQjtjQVp2QyxTQUFTOzJCQUNFLHVCQUF1QixpQkFFbEIsaUJBQWlCLENBQUMsSUFBSTt5UEFVYyxrQkFBa0I7a0JBQXBFLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2YsbUJBQW1CO2tCQUFwRCxTQUFTO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBQb0RpYWxvZ1NlcnZpY2UsXG4gIFBvRHluYW1pY0Zvcm1GaWVsZCxcbiAgUG9MYW5ndWFnZVNlcnZpY2UsXG4gIFBvTm90aWZpY2F0aW9uU2VydmljZSxcbiAgUG9QYWdlQWN0aW9uLFxuICBQb1N0ZXBwZXJJdGVtLFxuICBQb1N0ZXBwZXJTdGF0dXMsXG4gIHBvTG9jYWxlRGVmYXVsdFxufSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tam9iLXNjaGVkdWxlci1pbnRlcm5hbC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVySW50ZXJuYWwgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1pbnRlcm5hbCc7XG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgcG9QYWdlSm9iU2NoZWR1bGVyTGl0ZXJhbHNEZWZhdWx0IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItbGl0ZXJhbHMnO1xuaW1wb3J0IHsgUG9QYWdlSm9iU2NoZWR1bGVyTG9va3VwU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWxvb2t1cC5zZXJ2aWNlJztcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZG9jc0V4dGVuZHMgUG9QYWdlSm9iU2NoZWR1bGVyQmFzZUNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3NcIiB0aXRsZT1cIlBPIFBhZ2UgSm9iIFNjaGVkdWxlciAtIEJhY2tncm91bmQgUHJvY2Vzc1wiPlxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWJhY2tncm91bmQtcHJvY2Vzcy9zYW1wbGUtcG8tcGFnZS1qb2Itc2NoZWR1bGVyLWJhY2tncm91bmQtcHJvY2Vzcy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzL3NhbXBsZS1wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XG4gKiA8L2V4YW1wbGU+XG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWpvYi1zY2hlZHVsZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgcG8tY29udGFpbmVyIC5wby1jb250YWluZXIge1xuICAgICAgICBvdmVyZmxvdy15OiB1bnNldDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9QYWdlSm9iU2NoZWR1bGVyQ29tcG9uZW50IGV4dGVuZHMgUG9QYWdlSm9iU2NoZWR1bGVyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3NjaGVkdWxlckV4ZWN1dGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIHNjaGVkdWxlckV4ZWN1dGlvbjogeyBmb3JtOiBOZ0Zvcm0gfTtcbiAgQFZpZXdDaGlsZCgnc2NoZWR1bGVyUGFyYW1ldGVycycpIHNjaGVkdWxlclBhcmFtZXRlcnM6IHsgZm9ybTogTmdGb3JtIH07XG5cbiAgaXNFZGl0ID0gZmFsc2U7XG4gIGxpdGVyYWxzID0ge1xuICAgIC4uLnBvUGFnZUpvYlNjaGVkdWxlckxpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdXG4gIH07XG5cbiAgcHVibGljVmFsdWVzOiBQb0pvYlNjaGVkdWxlckludGVybmFsO1xuICBzYXZlT3BlcmF0aW9uOiBPYnNlcnZhYmxlPGFueT47XG4gIHN0ZXA6IG51bWJlciA9IDE7XG4gIHBhcmFtZXRlcnNFbXB0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcmVhZG9ubHkgc3RlcHM6IEFycmF5PFBvU3RlcHBlckl0ZW0+ID0gW107XG5cbiAgcHJpdmF0ZSBiYWNrUGFnZUFjdGlvbjogUG9QYWdlQWN0aW9uID0ge1xuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmJhY2ssXG4gICAgYWN0aW9uOiB0aGlzLm5leHRTdGVwT3BlcmF0aW9uLmJpbmQodGhpcywgJ2JhY2snKSxcbiAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkQmFjay5iaW5kKHRoaXMpXG4gIH07XG5cbiAgcHJpdmF0ZSBjb25jbHVkZVBhZ2VBY3Rpb246IFBvUGFnZUFjdGlvbiA9IHtcbiAgICBsYWJlbDogdGhpcy5saXRlcmFscy5jb25jbHVkZSxcbiAgICBhY3Rpb246IHRoaXMuY29uZmlybUpvYlNjaGVkdWxlci5iaW5kKHRoaXMpXG4gIH07XG5cbiAgcHJpdmF0ZSBuZXh0UGFnZUFjdGlvbjogUG9QYWdlQWN0aW9uID0ge1xuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLm5leHQsXG4gICAgYWN0aW9uOiB0aGlzLm5leHRTdGVwT3BlcmF0aW9uLmJpbmQodGhpcywgJ25leHQnKSxcbiAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkQWR2YW5jZS5iaW5kKHRoaXMpXG4gIH07XG5cbiAgcHJpdmF0ZSBjb25jbHVkZVBhZ2VBY3Rpb25zOiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gW3RoaXMuY29uY2x1ZGVQYWdlQWN0aW9uLCB0aGlzLmJhY2tQYWdlQWN0aW9uXTtcblxuICBwcml2YXRlIG5leHRQYWdlQWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFt0aGlzLm5leHRQYWdlQWN0aW9uLCB0aGlzLmJhY2tQYWdlQWN0aW9uXTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICBqb2JTY2hlZHVsZXJBY3Rpb25zOiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gWy4uLnRoaXMubmV4dFBhZ2VBY3Rpb25zXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcG9QYWdlRHluYW1pY0xvb2t1cFNlcnZpY2U6IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwb0RpYWxvZ1NlcnZpY2U6IFBvRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHBvTm90aWZpY2F0aW9uOiBQb05vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2U6IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UsXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihwb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlKTtcblxuICAgIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcblxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XG4gICAgICAuLi50aGlzLmxpdGVyYWxzLFxuICAgICAgLi4ucG9QYWdlSm9iU2NoZWR1bGVyTGl0ZXJhbHNEZWZhdWx0W2xhbmd1YWdlXVxuICAgIH07XG5cbiAgICB0aGlzLmJhY2tQYWdlQWN0aW9uLmxhYmVsID0gdGhpcy5saXRlcmFscy5iYWNrO1xuICAgIHRoaXMuY29uY2x1ZGVQYWdlQWN0aW9uLmxhYmVsID0gdGhpcy5saXRlcmFscy5jb25jbHVkZTtcbiAgICB0aGlzLm5leHRQYWdlQWN0aW9uLmxhYmVsID0gdGhpcy5saXRlcmFscy5uZXh0O1xuXG4gICAgdGhpcy5zdGVwcyA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuc2NoZWR1bGluZyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5wYXJhbWV0ZXJpemF0aW9uIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLmNvbmNsdWRlIH1cbiAgICBdO1xuICB9XG5cbiAgZ2V0IHN0ZXBwZXJPcmllbnRhdGlvbigpOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiA0ODEgJiYgd2luZG93LmlubmVyV2lkdGggPCA5NjAgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcGFyYW1JZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xuXG4gICAgdGhpcy5pc0VkaXQgPSAhIXBhcmFtSWQ7XG5cbiAgICB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UuY29uZmlnU2VydmljZUFwaSh7IGVuZHBvaW50OiB0aGlzLnNlcnZpY2VBcGkgfSk7XG5cbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJzRW1wdHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWREYXRhKHBhcmFtSWQpO1xuICB9XG5cbiAgY2hhbmdlUGFnZUFjdGlvbnNCeVN0ZXBzKGN1cnJlbnRTdGVwOiBudW1iZXIsIG5leHRTdGVwOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGVwc0xlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG5leHRTdGVwID09PSBzdGVwc0xlbmd0aCkge1xuICAgICAgdGhpcy5qb2JTY2hlZHVsZXJBY3Rpb25zID0gWy4uLnRoaXMuY29uY2x1ZGVQYWdlQWN0aW9uc107XG4gICAgfSBlbHNlIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHNMZW5ndGggJiYgbmV4dFN0ZXAgPCBjdXJyZW50U3RlcCkge1xuICAgICAgdGhpcy5qb2JTY2hlZHVsZXJBY3Rpb25zID0gWy4uLnRoaXMubmV4dFBhZ2VBY3Rpb25zXTtcbiAgICB9XG4gIH1cblxuICBuZXh0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpIHtcbiAgICBpZiAoc3RlcE51bWJlciA+IDEgJiYgdGhpcy5zY2hlZHVsZXJFeGVjdXRpb24uZm9ybS5pbnZhbGlkKSB7XG4gICAgICB0aGlzLm1hcmtBc0RpcnR5SW52YWxpZENvbnRyb2xzKHRoaXMuc2NoZWR1bGVyRXhlY3V0aW9uLmZvcm0uY29udHJvbHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN0ZXBOdW1iZXIgPiAyICYmXG4gICAgICB0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnMgJiZcbiAgICAgIHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVycy5mb3JtICYmXG4gICAgICB0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnMuZm9ybS5pbnZhbGlkXG4gICAgKSB7XG4gICAgICB0aGlzLm1hcmtBc0RpcnR5SW52YWxpZENvbnRyb2xzKHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVycy5mb3JtLmNvbnRyb2xzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRNb2RlbFJlY3VycmVudCgpO1xuXG4gICAgY29uc3QgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubW9kZWwpKTtcblxuICAgIGlmIChzdGVwTnVtYmVyID09PSB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wdWJsaWNWYWx1ZXMgPSB0aGlzLmhpZGVzU2VjcmV0VmFsdWVzKG1vZGVsKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZVBhZ2VBY3Rpb25zQnlTdGVwcyh0aGlzLnN0ZXAsIHN0ZXBOdW1iZXIpO1xuXG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLnN0ZXBzW3RoaXMuc3RlcCAtIDFdO1xuICAgIHRoaXMuc3RlcCA9IHN0ZXBOdW1iZXI7XG5cbiAgICBpZiAoc3RlcHMpIHtcbiAgICAgIHN0ZXBzLnN0YXR1cyA9IFBvU3RlcHBlclN0YXR1cy5Eb25lO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlUHJvY2Vzcyhwcm9jZXNzOiB7IHByb2Nlc3NJZDogc3RyaW5nOyBleGlzdEFQSTogYm9vbGVhbiB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZXhpc3RBUEkgJiYgcHJvY2Vzcy5wcm9jZXNzSWQgJiYgdGhpcy5wYXJhbWV0ZXJzRW1wdHkgJiYgIXRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmdldFBhcmFtZXRlcnNCeVByb2Nlc3MocHJvY2Vzcy5wcm9jZXNzSWQpO1xuICAgICAgaWYgKCF0aGlzLmlzRWRpdCkge1xuICAgICAgICB0aGlzLm1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlciA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uZmlybUpvYlNjaGVkdWxlcigpIHtcbiAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG5cbiAgICBjb25zdCBjb25maXJtTWVzc2FnZSA9IHBhcmFtSWQgPyB0aGlzLmxpdGVyYWxzLmNvbmZpcm1VcGRhdGVNZXNzYWdlIDogdGhpcy5saXRlcmFscy5jb25maXJtU2F2ZU1lc3NhZ2U7XG5cbiAgICB0aGlzLnBvRGlhbG9nU2VydmljZS5jb25maXJtKHtcbiAgICAgIHRpdGxlOiB0aGlzLmxpdGVyYWxzLmNvbmZpcm1hdGlvbixcbiAgICAgIG1lc3NhZ2U6IGNvbmZpcm1NZXNzYWdlLFxuICAgICAgY29uZmlybTogKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHsgLi4udGhpcy5tb2RlbCB9O1xuXG4gICAgICAgIHRoaXMuc2F2ZShtb2RlbCwgcGFyYW1JZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVtaXRTdWNjZXNzTWVzc2FnZShtc2dTdWNjZXNzOiBhbnksIHNhdmVPcGVyYXRpb246IE9ic2VydmFibGU8YW55Pikge1xuICAgIGF3YWl0IHNhdmVPcGVyYXRpb24udG9Qcm9taXNlKCk7XG4gICAgdGhpcy5wb05vdGlmaWNhdGlvbi5zdWNjZXNzKG1zZ1N1Y2Nlc3MpO1xuICAgIHRoaXMucmVzZXRKb2JTY2hlZHVsZXJGb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtZXRlcnNCeVByb2Nlc3MocHJvY2VzczogYW55KSB7XG4gICAgdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLmdldFBhcmFtZXRlcnNCeVByb2Nlc3MocHJvY2Vzcykuc3Vic2NyaWJlKHBhcmFtZXRlcnMgPT4ge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZXNTZWNyZXRWYWx1ZXMobW9kZWw6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwpOiBQb0pvYlNjaGVkdWxlckludGVybmFsIHtcbiAgICBjb25zdCBoaWRkZW5TZWNyZXRWYWx1ZSA9ICcqKioqKioqKioqJztcbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaChwYXJhbWV0ZXIgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTZWNyZXRQYXJhbWV0ZXIobW9kZWwsIHBhcmFtZXRlcikpIHtcbiAgICAgICAgbW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyW3BhcmFtZXRlci5wcm9wZXJ0eV0gPSBoaWRkZW5TZWNyZXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBwcml2YXRlIGlzRGlzYWJsZWRBZHZhbmNlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEJ5U3RlcCA9IHtcbiAgICAgIDE6IHRoaXMuc2NoZWR1bGVyRXhlY3V0aW9uLFxuICAgICAgMjogdGhpcy5zY2hlZHVsZXJQYXJhbWV0ZXJzXG4gICAgfTtcblxuICAgIHJldHVybiBjb21wb25lbnRCeVN0ZXBbdGhpcy5zdGVwXT8uZm9ybT8uaW52YWxpZCB8fCBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEaXNhYmxlZEJhY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcCA9PT0gMTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTZWNyZXRQYXJhbWV0ZXIobW9kZWw6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwsIHBhcmFtZXRlcjogUG9EeW5hbWljRm9ybUZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIG1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlciAmJlxuICAgICAgcGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdzZWNyZXQnKSAmJlxuICAgICAgcGFyYW1ldGVyWydzZWNyZXQnXSA9PT0gdHJ1ZSAmJlxuICAgICAgbW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyLmhhc093blByb3BlcnR5KHBhcmFtZXRlci5wcm9wZXJ0eSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0U3RlcE9wZXJhdGlvbihvcGVyYXRpb24/OiAnYmFjaycgfCAnbmV4dCcpIHtcbiAgICBjb25zdCBzdGVwTnVtYmVyID0gb3BlcmF0aW9uID09PSAnYmFjaycgPyB0aGlzLnN0ZXAgLSAxIDogdGhpcy5zdGVwICsgMTtcblxuICAgIHRoaXMubmV4dFN0ZXAoc3RlcE51bWJlcik7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0Sm9iU2NoZWR1bGVyRm9ybSgpIHtcbiAgICB0aGlzLnNjaGVkdWxlckV4ZWN1dGlvbi5mb3JtLnJlc2V0KCk7XG5cbiAgICAvLyByYWRpb2dyb3VwIG7Do28gZXN0YXZhIGF0cmlidWluZG8gbm92byB2YWxvciwgZmljYSB2ZXJtZWxobyBzZW0gbyB0aW1ldG91dC5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgUG9QYWdlSm9iU2NoZWR1bGVySW50ZXJuYWwoKTtcblxuICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgc3RlcC5zdGF0dXMgPSBQb1N0ZXBwZXJTdGF0dXMuRGVmYXVsdDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmpvYlNjaGVkdWxlckFjdGlvbnMgPSBbLi4udGhpcy5uZXh0UGFnZUFjdGlvbnNdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlKG1vZGVsOiBQb0pvYlNjaGVkdWxlckludGVybmFsLCBwYXJhbUlkKSB7XG4gICAgY29uc3Qgc2F2ZU9wZXJhdGlvbiA9IHBhcmFtSWRcbiAgICAgID8gdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLnVwZGF0ZVJlc291cmNlKHBhcmFtSWQsIG1vZGVsKVxuICAgICAgOiB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UuY3JlYXRlUmVzb3VyY2UobW9kZWwpO1xuXG4gICAgY29uc3QgbXNnU3VjY2VzcyA9IHBhcmFtSWRcbiAgICAgID8gdGhpcy5saXRlcmFscy5zYXZlTm90aWZpY2F0aW9uU3VjY2Vzc1VwZGF0ZVxuICAgICAgOiB0aGlzLmxpdGVyYWxzLnNhdmVOb3RpZmljYXRpb25TdWNjZXNzU2F2ZTtcblxuICAgIHRoaXMuZW1pdFN1Y2Nlc3NNZXNzYWdlKG1zZ1N1Y2Nlc3MsIHNhdmVPcGVyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNb2RlbFJlY3VycmVudCgpIHtcbiAgICB0aGlzLm1vZGVsLnJlY3VycmVudCA9IHRoaXMubW9kZWwucGVyaW9kaWNpdHkgPT09ICdzaW5nbGUnID8gZmFsc2UgOiB0aGlzLm1vZGVsLnJlY3VycmVudDtcbiAgfVxufVxuIiwiPHBvLXBhZ2UtZGVmYXVsdCBbcC1hY3Rpb25zXT1cImpvYlNjaGVkdWxlckFjdGlvbnNcIiBbcC1icmVhZGNydW1iXT1cImJyZWFkY3J1bWJcIiBbcC10aXRsZV09XCJ0aXRsZVwiPlxuICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XG4gICAgPHBvLXN0ZXBwZXJcbiAgICAgIGNsYXNzPVwicG8tbGctMyBwby14bC0yXCJcbiAgICAgIHAtc2VxdWVudGlhbD1cInRydWVcIlxuICAgICAgW3Atb3JpZW50YXRpb25dPVwic3RlcHBlck9yaWVudGF0aW9uXCJcbiAgICAgIFtwLXN0ZXBdPVwic3RlcFwiXG4gICAgICBbcC1zdGVwc109XCJzdGVwc1wiXG4gICAgICAocC1jaGFuZ2Utc3RlcCk9XCJuZXh0U3RlcCgkZXZlbnQpXCJcbiAgICA+XG4gICAgPC9wby1zdGVwcGVyPlxuXG4gICAgPHBvLWNvbnRhaW5lciBjbGFzcz1cInBvLWxnLTggcG8teGwtOVwiPlxuICAgICAgPGZvcm0gI2Zvcm1TY2hlZHVsZXI9XCJuZ0Zvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxuICAgICAgICAgIDxwby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uXG4gICAgICAgICAgICBbcC1uby1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnNFbXB0eVwiXG4gICAgICAgICAgICBbcC1uby1jdXN0b20tcGFyYW1zLWNvbXBvbmVudF09XCIhY29tcG9uZW50XCJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwic3RlcCAhPT0gMVwiXG4gICAgICAgICAgICAjc2NoZWR1bGVyRXhlY3V0aW9uXG4gICAgICAgICAgICBjbGFzcz1cInBvLW1kLTEyXCJcbiAgICAgICAgICAgIFtwLWlzLWVkaXRdPVwiaXNFZGl0XCJcbiAgICAgICAgICAgIFtwLWxpdGVyYWxzXT1cImxpdGVyYWxzXCJcbiAgICAgICAgICAgIFtwLXZhbHVlXT1cIm1vZGVsXCJcbiAgICAgICAgICAgIChwLWNoYW5nZS1wcm9jZXNzKT1cIm9uQ2hhbmdlUHJvY2VzcygkZXZlbnQpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uPlxuXG4gICAgICAgICAgPHBvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzXG4gICAgICAgICAgICAqbmdJZj1cInN0ZXAgPT09IDJcIlxuICAgICAgICAgICAgI3NjaGVkdWxlclBhcmFtZXRlcnNcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxuICAgICAgICAgICAgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIlxuICAgICAgICAgICAgW3AtcGFyYW1ldGVyc109XCJwYXJhbWV0ZXJzIHx8IFtdXCJcbiAgICAgICAgICAgIFsocC12YWx1ZSldPVwibW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyXCJcbiAgICAgICAgICAgIFtwLWNvbXBvbmVudF09XCJjb21wb25lbnRcIlxuICAgICAgICAgICAgW3AtZGF0YS1wcm9wc109XCJkYXRhUHJvcHNcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzPlxuXG4gICAgICAgICAgPHBvLXBhZ2Utam9iLXNjaGVkdWxlci1zdW1tYXJ5XG4gICAgICAgICAgICBbcC1uby1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnNFbXB0eVwiXG4gICAgICAgICAgICAqbmdJZj1cInN0ZXAgPT09IDNcIlxuICAgICAgICAgICAgY2xhc3M9XCJwby1tZC0xMlwiXG4gICAgICAgICAgICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXG4gICAgICAgICAgICBbcC1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgW3AtdmFsdWVdPVwicHVibGljVmFsdWVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9wby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9wby1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9wby1wYWdlLWRlZmF1bHQ+XG4iXX0=