import { Component, ContentChild, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoStepperStatus, poLocaleDefault } from '@po-ui/ng-components';
import { PoPageJobSchedulerInternal } from './po-page-job-scheduler-internal';
import { PoPageJobSchedulerBaseComponent } from './po-page-job-scheduler-base.component';
import { poPageJobSchedulerLiteralsDefault } from './po-page-job-scheduler-literals';
import { PoJobSchedulerParametersTemplateDirective } from './po-page-job-scheduler-parameters/po-job-scheduler-parameters-template/po-job-scheduler-parameters-template.directive';
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
    i0.ɵɵproperty("hidden", ctx_r2.step !== 2)("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters || i0.ɵɵpureFunction0(5, _c2))("p-value", ctx_r2.model.executionParameter)("p-template", ctx_r2.parametersTemplate);
} }
const _c3 = function () { return {}; };
const _c4 = function (a0) { return [a0]; };
function PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-page-job-scheduler-summary", 11);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-no-parameters", ctx_r3.parametersEmpty)("p-literals", ctx_r3.literals)("p-parameters", ctx_r3.parameters || i0.ɵɵpureFunction1(5, _c4, i0.ɵɵpureFunction0(4, _c3)))("p-value", ctx_r3.publicValues);
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
        this.stepParametersInitialized = false;
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
        this.stepParametersInitialized = this.stepParametersInitialized || stepNumber === 2;
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
        if (process.existAPI && process.processId && this.parametersEmpty && !this.parametersTemplate?.templateRef) {
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
        // @todo emitir evento de finalização
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
PoPageJobSchedulerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerComponent, selectors: [["po-page-job-scheduler"]], contentQueries: function PoPageJobSchedulerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoJobSchedulerParametersTemplateDirective, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.parametersTemplate = _t.first);
    } }, viewQuery: function PoPageJobSchedulerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.schedulerExecution = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.schedulerParameters = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 14, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [1, "po-row"], ["p-sequential", "true", 1, "po-lg-3", "po-xl-2", 3, "p-orientation", "p-step", "p-steps", "p-change-step"], [1, "po-lg-8", "po-xl-9"], ["formScheduler", "ngForm"], [1, "po-md-12", 3, "p-no-parameters", "p-no-custom-params-component", "hidden", "p-is-edit", "p-literals", "p-value", "p-change-process"], ["schedulerExecution", ""], ["class", "po-md-12", 3, "hidden", "p-literals", "p-parameters", "p-value", "p-template", "p-valueChange", 4, "ngIf"], ["class", "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value", 4, "ngIf"], [1, "po-md-12", 3, "hidden", "p-literals", "p-parameters", "p-value", "p-template", "p-valueChange"], ["schedulerParameters", ""], [1, "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value"]], template: function PoPageJobSchedulerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-page-default", 0)(1, "div", 1)(2, "po-stepper", 2);
        i0.ɵɵlistener("p-change-step", function PoPageJobSchedulerComponent_Template_po_stepper_p_change_step_2_listener($event) { return ctx.nextStep($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "po-container", 3)(4, "form", null, 4)(6, "div", 1)(7, "po-page-job-scheduler-execution", 5, 6);
        i0.ɵɵlistener("p-change-process", function PoPageJobSchedulerComponent_Template_po_page_job_scheduler_execution_p_change_process_7_listener($event) { return ctx.onChangeProcess($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template, 2, 6, "po-page-job-scheduler-parameters", 7);
        i0.ɵɵtemplate(10, PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template, 1, 7, "po-page-job-scheduler-summary", 8);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵproperty("p-actions", ctx.jobSchedulerActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-orientation", ctx.stepperOrientation)("p-step", ctx.step)("p-steps", ctx.steps);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("p-no-parameters", ctx.parametersEmpty)("p-no-custom-params-component", !(ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef))("hidden", ctx.step !== 1)("p-is-edit", ctx.isEdit)("p-literals", ctx.literals)("p-value", ctx.model);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.stepParametersInitialized);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.step === 3);
    } }, dependencies: [i5.NgIf, i6.ɵNgNoValidate, i6.NgControlStatusGroup, i6.NgForm, i3.PoContainerComponent, i3.PoPageDefaultComponent, i3.PoStepperComponent, i7.PoPageJobSchedulerExecutionComponent, i8.PoPageJobSchedulerParametersComponent, i9.PoPageJobSchedulerSummaryComponent], styles: ["po-container .po-container{overflow-y:unset}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler', encapsulation: ViewEncapsulation.None, template: "<po-page-default [p-actions]=\"jobSchedulerActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <div class=\"po-row\">\r\n    <po-stepper\r\n      class=\"po-lg-3 po-xl-2\"\r\n      p-sequential=\"true\"\r\n      [p-orientation]=\"stepperOrientation\"\r\n      [p-step]=\"step\"\r\n      [p-steps]=\"steps\"\r\n      (p-change-step)=\"nextStep($event)\"\r\n    >\r\n    </po-stepper>\r\n\r\n    <po-container class=\"po-lg-8 po-xl-9\">\r\n      <form #formScheduler=\"ngForm\">\r\n        <div class=\"po-row\">\r\n          <po-page-job-scheduler-execution\r\n            [p-no-parameters]=\"parametersEmpty\"\r\n            [p-no-custom-params-component]=\"!parametersTemplate?.templateRef\"\r\n            [hidden]=\"step !== 1\"\r\n            #schedulerExecution\r\n            class=\"po-md-12\"\r\n            [p-is-edit]=\"isEdit\"\r\n            [p-literals]=\"literals\"\r\n            [p-value]=\"model\"\r\n            (p-change-process)=\"onChangeProcess($event)\"\r\n          >\r\n          </po-page-job-scheduler-execution>\r\n\r\n          <po-page-job-scheduler-parameters\r\n            *ngIf=\"stepParametersInitialized\"\r\n            [hidden]=\"step !== 2\"\r\n            #schedulerParameters\r\n            class=\"po-md-12\"\r\n            [p-literals]=\"literals\"\r\n            [p-parameters]=\"parameters || []\"\r\n            [(p-value)]=\"model.executionParameter\"\r\n            [p-template]=\"parametersTemplate\"\r\n          >\r\n          </po-page-job-scheduler-parameters>\r\n\r\n          <po-page-job-scheduler-summary\r\n            [p-no-parameters]=\"parametersEmpty\"\r\n            *ngIf=\"step === 3\"\r\n            class=\"po-md-12\"\r\n            [p-literals]=\"literals\"\r\n            [p-parameters]=\"parameters || [{}]\"\r\n            [p-value]=\"publicValues\"\r\n          >\r\n          </po-page-job-scheduler-summary>\r\n        </div>\r\n      </form>\r\n    </po-container>\r\n  </div>\r\n</po-page-default>\r\n", styles: ["po-container .po-container{overflow-y:unset}\n"] }]
    }], function () { return [{ type: i1.PoPageJobSchedulerLookupService }, { type: i2.ActivatedRoute }, { type: i3.PoDialogService }, { type: i3.PoNotificationService }, { type: i4.PoPageJobSchedulerService }, { type: i3.PoLanguageService }]; }, { schedulerExecution: [{
            type: ViewChild,
            args: ['schedulerExecution', { static: true }]
        }], schedulerParameters: [{
            type: ViewChild,
            args: ['schedulerParameters']
        }], parametersTemplate: [{
            type: ContentChild,
            args: [PoJobSchedulerParametersTemplateDirective]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlGLE9BQU8sRUFPTCxlQUFlLEVBQ2YsZUFBZSxFQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3JGLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdIQUF3SCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDS3pLLCtEQVNDO0lBRkMscVBBQWEsd0RBQ3BCLElBRDZDO0lBR3hDLGlCQUFtQzs7O0lBUmpDLDBDQUFxQiwrQkFBQSxpRUFBQSw0Q0FBQSx5Q0FBQTs7Ozs7SUFVdkIsb0RBUWdDOzs7SUFQOUIsd0RBQW1DLCtCQUFBLDZGQUFBLGdDQUFBOztBRGhCL0M7Ozs7Ozs7Ozs7R0FVRztBQWFILE1BQU0sT0FBTywyQkFBNEIsU0FBUSwrQkFBK0I7SUE0QzlFLFlBQ1MsMEJBQTJELEVBQzFELGNBQThCLEVBQzlCLGVBQWdDLEVB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QWlCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUM1RixDQUFDOztzR0FqUFUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7b0NBR3hCLHlDQUF5Qzs7Ozs7Ozs7Ozs7O1FDbkR6RCwwQ0FBaUcsYUFBQSxvQkFBQTtRQVEzRixrSUFBaUIsb0JBQWdCLElBQUM7UUFFcEMsaUJBQWE7UUFFYix1Q0FBc0Msb0JBQUEsYUFBQSw0Q0FBQTtRQVk5Qiw2SkFBb0IsMkJBQXVCLElBQUM7UUFFOUMsaUJBQWtDO1FBRWxDLHNJQVVtQztRQUVuQyxrSUFRZ0M7UUFDbEMsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFqREcsbURBQWlDLGdDQUFBLHNCQUFBO1FBSzVDLGVBQW9DO1FBQXBDLHNEQUFvQyxvQkFBQSxzQkFBQTtRQVc5QixlQUFtQztRQUFuQyxxREFBbUMsK0dBQUEsMEJBQUEseUJBQUEsNEJBQUEsc0JBQUE7UUFhbEMsZUFBK0I7UUFBL0Isb0RBQStCO1FBYS9CLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZETWhCLDJCQUEyQjtjQVp2QyxTQUFTOzJCQUNFLHVCQUF1QixpQkFFbEIsaUJBQWlCLENBQUMsSUFBSTt5UEFVYyxrQkFBa0I7a0JBQXBFLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2YsbUJBQW1CO2tCQUFwRCxTQUFTO21CQUFDLHFCQUFxQjtZQUVoQyxrQkFBa0I7a0JBRGpCLFlBQVk7bUJBQUMseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0RpYWxvZ1NlcnZpY2UsXHJcbiAgUG9EeW5hbWljRm9ybUZpZWxkLFxyXG4gIFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gIFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICBQb1BhZ2VBY3Rpb24sXHJcbiAgUG9TdGVwcGVySXRlbSxcclxuICBQb1N0ZXBwZXJTdGF0dXMsXHJcbiAgcG9Mb2NhbGVEZWZhdWx0XHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1qb2Itc2NoZWR1bGVyLWludGVybmFsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckludGVybmFsIH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItaW50ZXJuYWwnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBwb1BhZ2VKb2JTY2hlZHVsZXJMaXRlcmFsc0RlZmF1bHQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1saXRlcmFscyc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1sb29rdXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL3BvLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZS9wby1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9QYWdlSm9iU2NoZWR1bGVyQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1qb2Itc2NoZWR1bGVyLWJhY2tncm91bmQtcHJvY2Vzc1wiIHRpdGxlPVwiUE8gUGFnZSBKb2IgU2NoZWR1bGVyIC0gQmFja2dyb3VuZCBQcm9jZXNzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3Mvc2FtcGxlLXBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3MuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzL3NhbXBsZS1wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBwby1jb250YWluZXIgLnBvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogdW5zZXQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnQgZXh0ZW5kcyBQb1BhZ2VKb2JTY2hlZHVsZXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdzY2hlZHVsZXJFeGVjdXRpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzY2hlZHVsZXJFeGVjdXRpb246IHsgZm9ybTogTmdGb3JtIH07XHJcbiAgQFZpZXdDaGlsZCgnc2NoZWR1bGVyUGFyYW1ldGVycycpIHNjaGVkdWxlclBhcmFtZXRlcnM6IHsgZm9ybTogTmdGb3JtIH07XHJcbiAgQENvbnRlbnRDaGlsZChQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZSlcclxuICBwYXJhbWV0ZXJzVGVtcGxhdGU6IFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlO1xyXG5cclxuICBpc0VkaXQgPSBmYWxzZTtcclxuICBsaXRlcmFscyA9IHtcclxuICAgIC4uLnBvUGFnZUpvYlNjaGVkdWxlckxpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdXHJcbiAgfTtcclxuXHJcbiAgcHVibGljVmFsdWVzOiBQb0pvYlNjaGVkdWxlckludGVybmFsO1xyXG4gIHNhdmVPcGVyYXRpb246IE9ic2VydmFibGU8YW55PjtcclxuICBzdGVwOiBudW1iZXIgPSAxO1xyXG4gIHBhcmFtZXRlcnNFbXB0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHN0ZXBQYXJhbWV0ZXJzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgcmVhZG9ubHkgc3RlcHM6IEFycmF5PFBvU3RlcHBlckl0ZW0+ID0gW107XHJcblxyXG4gIHByaXZhdGUgYmFja1BhZ2VBY3Rpb246IFBvUGFnZUFjdGlvbiA9IHtcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmJhY2ssXHJcbiAgICBhY3Rpb246IHRoaXMubmV4dFN0ZXBPcGVyYXRpb24uYmluZCh0aGlzLCAnYmFjaycpLFxyXG4gICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZEJhY2suYmluZCh0aGlzKVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY29uY2x1ZGVQYWdlQWN0aW9uOiBQb1BhZ2VBY3Rpb24gPSB7XHJcbiAgICBsYWJlbDogdGhpcy5saXRlcmFscy5jb25jbHVkZSxcclxuICAgIGFjdGlvbjogdGhpcy5jb25maXJtSm9iU2NoZWR1bGVyLmJpbmQodGhpcylcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG5leHRQYWdlQWN0aW9uOiBQb1BhZ2VBY3Rpb24gPSB7XHJcbiAgICBsYWJlbDogdGhpcy5saXRlcmFscy5uZXh0LFxyXG4gICAgYWN0aW9uOiB0aGlzLm5leHRTdGVwT3BlcmF0aW9uLmJpbmQodGhpcywgJ25leHQnKSxcclxuICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWRBZHZhbmNlLmJpbmQodGhpcylcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNvbmNsdWRlUGFnZUFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbdGhpcy5jb25jbHVkZVBhZ2VBY3Rpb24sIHRoaXMuYmFja1BhZ2VBY3Rpb25dO1xyXG5cclxuICBwcml2YXRlIG5leHRQYWdlQWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFt0aGlzLm5leHRQYWdlQWN0aW9uLCB0aGlzLmJhY2tQYWdlQWN0aW9uXTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcclxuICBqb2JTY2hlZHVsZXJBY3Rpb25zOiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gWy4uLnRoaXMubmV4dFBhZ2VBY3Rpb25zXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcG9QYWdlRHluYW1pY0xvb2t1cFNlcnZpY2U6IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcG9EaWFsb2dTZXJ2aWNlOiBQb0RpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvTm90aWZpY2F0aW9uOiBQb05vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgcG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZTogUG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZSxcclxuICAgIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKHBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UpO1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICB0aGlzLmxpdGVyYWxzID0ge1xyXG4gICAgICAuLi50aGlzLmxpdGVyYWxzLFxyXG4gICAgICAuLi5wb1BhZ2VKb2JTY2hlZHVsZXJMaXRlcmFsc0RlZmF1bHRbbGFuZ3VhZ2VdXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYmFja1BhZ2VBY3Rpb24ubGFiZWwgPSB0aGlzLmxpdGVyYWxzLmJhY2s7XHJcbiAgICB0aGlzLmNvbmNsdWRlUGFnZUFjdGlvbi5sYWJlbCA9IHRoaXMubGl0ZXJhbHMuY29uY2x1ZGU7XHJcbiAgICB0aGlzLm5leHRQYWdlQWN0aW9uLmxhYmVsID0gdGhpcy5saXRlcmFscy5uZXh0O1xyXG5cclxuICAgIHRoaXMuc3RlcHMgPSBbXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuc2NoZWR1bGluZyB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLnBhcmFtZXRlcml6YXRpb24gfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5jb25jbHVkZSB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0ZXBwZXJPcmllbnRhdGlvbigpOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHtcclxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IDQ4MSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IHBhcmFtSWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcclxuXHJcbiAgICB0aGlzLmlzRWRpdCA9ICEhcGFyYW1JZDtcclxuXHJcbiAgICB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UuY29uZmlnU2VydmljZUFwaSh7IGVuZHBvaW50OiB0aGlzLnNlcnZpY2VBcGkgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1ldGVycy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5wYXJhbWV0ZXJzRW1wdHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWREYXRhKHBhcmFtSWQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZUFjdGlvbnNCeVN0ZXBzKGN1cnJlbnRTdGVwOiBudW1iZXIsIG5leHRTdGVwOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN0ZXBzTGVuZ3RoID0gdGhpcy5zdGVwcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKG5leHRTdGVwID09PSBzdGVwc0xlbmd0aCkge1xyXG4gICAgICB0aGlzLmpvYlNjaGVkdWxlckFjdGlvbnMgPSBbLi4udGhpcy5jb25jbHVkZVBhZ2VBY3Rpb25zXTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudFN0ZXAgPT09IHN0ZXBzTGVuZ3RoICYmIG5leHRTdGVwIDwgY3VycmVudFN0ZXApIHtcclxuICAgICAgdGhpcy5qb2JTY2hlZHVsZXJBY3Rpb25zID0gWy4uLnRoaXMubmV4dFBhZ2VBY3Rpb25zXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHRTdGVwKHN0ZXBOdW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGVwUGFyYW1ldGVyc0luaXRpYWxpemVkID0gdGhpcy5zdGVwUGFyYW1ldGVyc0luaXRpYWxpemVkIHx8IHN0ZXBOdW1iZXIgPT09IDI7XHJcblxyXG4gICAgaWYgKHN0ZXBOdW1iZXIgPiAxICYmIHRoaXMuc2NoZWR1bGVyRXhlY3V0aW9uLmZvcm0uaW52YWxpZCkge1xyXG4gICAgICB0aGlzLm1hcmtBc0RpcnR5SW52YWxpZENvbnRyb2xzKHRoaXMuc2NoZWR1bGVyRXhlY3V0aW9uLmZvcm0uY29udHJvbHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBzdGVwTnVtYmVyID4gMiAmJlxyXG4gICAgICB0aGlzLnNjaGVkdWxlclBhcmFtZXRlcnMgJiZcclxuICAgICAgdGhpcy5zY2hlZHVsZXJQYXJhbWV0ZXJzLmZvcm0gJiZcclxuICAgICAgdGhpcy5zY2hlZHVsZXJQYXJhbWV0ZXJzLmZvcm0uaW52YWxpZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubWFya0FzRGlydHlJbnZhbGlkQ29udHJvbHModGhpcy5zY2hlZHVsZXJQYXJhbWV0ZXJzLmZvcm0uY29udHJvbHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldE1vZGVsUmVjdXJyZW50KCk7XHJcblxyXG4gICAgY29uc3QgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubW9kZWwpKTtcclxuXHJcbiAgICBpZiAoc3RlcE51bWJlciA9PT0gdGhpcy5zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5wdWJsaWNWYWx1ZXMgPSB0aGlzLmhpZGVzU2VjcmV0VmFsdWVzKG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZVBhZ2VBY3Rpb25zQnlTdGVwcyh0aGlzLnN0ZXAsIHN0ZXBOdW1iZXIpO1xyXG5cclxuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5zdGVwc1t0aGlzLnN0ZXAgLSAxXTtcclxuICAgIHRoaXMuc3RlcCA9IHN0ZXBOdW1iZXI7XHJcblxyXG4gICAgaWYgKHN0ZXBzKSB7XHJcbiAgICAgIHN0ZXBzLnN0YXR1cyA9IFBvU3RlcHBlclN0YXR1cy5Eb25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQcm9jZXNzKHByb2Nlc3M6IHsgcHJvY2Vzc0lkOiBzdHJpbmc7IGV4aXN0QVBJOiBib29sZWFuIH0pIHtcclxuICAgIGlmIChwcm9jZXNzLmV4aXN0QVBJICYmIHByb2Nlc3MucHJvY2Vzc0lkICYmIHRoaXMucGFyYW1ldGVyc0VtcHR5ICYmICF0aGlzLnBhcmFtZXRlcnNUZW1wbGF0ZT8udGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5nZXRQYXJhbWV0ZXJzQnlQcm9jZXNzKHByb2Nlc3MucHJvY2Vzc0lkKTtcclxuICAgICAgaWYgKCF0aGlzLmlzRWRpdCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyID0ge307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlybUpvYlNjaGVkdWxlcigpIHtcclxuICAgIGNvbnN0IHBhcmFtSWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcclxuXHJcbiAgICBjb25zdCBjb25maXJtTWVzc2FnZSA9IHBhcmFtSWQgPyB0aGlzLmxpdGVyYWxzLmNvbmZpcm1VcGRhdGVNZXNzYWdlIDogdGhpcy5saXRlcmFscy5jb25maXJtU2F2ZU1lc3NhZ2U7XHJcblxyXG4gICAgdGhpcy5wb0RpYWxvZ1NlcnZpY2UuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmxpdGVyYWxzLmNvbmZpcm1hdGlvbixcclxuICAgICAgbWVzc2FnZTogY29uZmlybU1lc3NhZ2UsXHJcbiAgICAgIGNvbmZpcm06ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHsgLi4udGhpcy5tb2RlbCB9O1xyXG5cclxuICAgICAgICB0aGlzLnNhdmUobW9kZWwsIHBhcmFtSWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZW1pdFN1Y2Nlc3NNZXNzYWdlKG1zZ1N1Y2Nlc3M6IGFueSwgc2F2ZU9wZXJhdGlvbjogT2JzZXJ2YWJsZTxhbnk+KSB7XHJcbiAgICBhd2FpdCBzYXZlT3BlcmF0aW9uLnRvUHJvbWlzZSgpO1xyXG4gICAgdGhpcy5wb05vdGlmaWNhdGlvbi5zdWNjZXNzKG1zZ1N1Y2Nlc3MpO1xyXG4gICAgdGhpcy5yZXNldEpvYlNjaGVkdWxlckZvcm0oKTtcclxuICAgIC8vIEB0b2RvIGVtaXRpciBldmVudG8gZGUgZmluYWxpemHDp8Ojb1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXJhbWV0ZXJzQnlQcm9jZXNzKHByb2Nlc3M6IGFueSkge1xyXG4gICAgdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLmdldFBhcmFtZXRlcnNCeVByb2Nlc3MocHJvY2Vzcykuc3Vic2NyaWJlKHBhcmFtZXRlcnMgPT4ge1xyXG4gICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVzU2VjcmV0VmFsdWVzKG1vZGVsOiBQb0pvYlNjaGVkdWxlckludGVybmFsKTogUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCB7XHJcbiAgICBjb25zdCBoaWRkZW5TZWNyZXRWYWx1ZSA9ICcqKioqKioqKioqJztcclxuICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoKHBhcmFtZXRlciA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzU2VjcmV0UGFyYW1ldGVyKG1vZGVsLCBwYXJhbWV0ZXIpKSB7XHJcbiAgICAgICAgbW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyW3BhcmFtZXRlci5wcm9wZXJ0eV0gPSBoaWRkZW5TZWNyZXRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGlzYWJsZWRBZHZhbmNlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50QnlTdGVwID0ge1xyXG4gICAgICAxOiB0aGlzLnNjaGVkdWxlckV4ZWN1dGlvbixcclxuICAgICAgMjogdGhpcy5zY2hlZHVsZXJQYXJhbWV0ZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRCeVN0ZXBbdGhpcy5zdGVwXT8uZm9ybT8uaW52YWxpZCB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEaXNhYmxlZEJhY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGVwID09PSAxO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NlY3JldFBhcmFtZXRlcihtb2RlbDogUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCwgcGFyYW1ldGVyOiBQb0R5bmFtaWNGb3JtRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlciAmJlxyXG4gICAgICBwYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ3NlY3JldCcpICYmXHJcbiAgICAgIHBhcmFtZXRlclsnc2VjcmV0J10gPT09IHRydWUgJiZcclxuICAgICAgbW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyLmhhc093blByb3BlcnR5KHBhcmFtZXRlci5wcm9wZXJ0eSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5leHRTdGVwT3BlcmF0aW9uKG9wZXJhdGlvbj86ICdiYWNrJyB8ICduZXh0Jykge1xyXG4gICAgY29uc3Qgc3RlcE51bWJlciA9IG9wZXJhdGlvbiA9PT0gJ2JhY2snID8gdGhpcy5zdGVwIC0gMSA6IHRoaXMuc3RlcCArIDE7XHJcblxyXG4gICAgdGhpcy5uZXh0U3RlcChzdGVwTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRKb2JTY2hlZHVsZXJGb3JtKCkge1xyXG4gICAgdGhpcy5zY2hlZHVsZXJFeGVjdXRpb24uZm9ybS5yZXNldCgpO1xyXG5cclxuICAgIC8vIHJhZGlvZ3JvdXAgbsOjbyBlc3RhdmEgYXRyaWJ1aW5kbyBub3ZvIHZhbG9yLCBmaWNhIHZlcm1lbGhvIHNlbSBvIHRpbWV0b3V0LlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgUG9QYWdlSm9iU2NoZWR1bGVySW50ZXJuYWwoKTtcclxuXHJcbiAgICAgIHRoaXMuc3RlcCA9IDE7XHJcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBzdGVwLnN0YXR1cyA9IFBvU3RlcHBlclN0YXR1cy5EZWZhdWx0O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuam9iU2NoZWR1bGVyQWN0aW9ucyA9IFsuLi50aGlzLm5leHRQYWdlQWN0aW9uc107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZShtb2RlbDogUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCwgcGFyYW1JZCkge1xyXG4gICAgY29uc3Qgc2F2ZU9wZXJhdGlvbiA9IHBhcmFtSWRcclxuICAgICAgPyB0aGlzLnBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UudXBkYXRlUmVzb3VyY2UocGFyYW1JZCwgbW9kZWwpXHJcbiAgICAgIDogdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLmNyZWF0ZVJlc291cmNlKG1vZGVsKTtcclxuXHJcbiAgICBjb25zdCBtc2dTdWNjZXNzID0gcGFyYW1JZFxyXG4gICAgICA/IHRoaXMubGl0ZXJhbHMuc2F2ZU5vdGlmaWNhdGlvblN1Y2Nlc3NVcGRhdGVcclxuICAgICAgOiB0aGlzLmxpdGVyYWxzLnNhdmVOb3RpZmljYXRpb25TdWNjZXNzU2F2ZTtcclxuXHJcbiAgICB0aGlzLmVtaXRTdWNjZXNzTWVzc2FnZShtc2dTdWNjZXNzLCBzYXZlT3BlcmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TW9kZWxSZWN1cnJlbnQoKSB7XHJcbiAgICB0aGlzLm1vZGVsLnJlY3VycmVudCA9IHRoaXMubW9kZWwucGVyaW9kaWNpdHkgPT09ICdzaW5nbGUnID8gZmFsc2UgOiB0aGlzLm1vZGVsLnJlY3VycmVudDtcclxuICB9XHJcbn1cclxuIiwiPHBvLXBhZ2UtZGVmYXVsdCBbcC1hY3Rpb25zXT1cImpvYlNjaGVkdWxlckFjdGlvbnNcIiBbcC1icmVhZGNydW1iXT1cImJyZWFkY3J1bWJcIiBbcC10aXRsZV09XCJ0aXRsZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgIDxwby1zdGVwcGVyXHJcbiAgICAgIGNsYXNzPVwicG8tbGctMyBwby14bC0yXCJcclxuICAgICAgcC1zZXF1ZW50aWFsPVwidHJ1ZVwiXHJcbiAgICAgIFtwLW9yaWVudGF0aW9uXT1cInN0ZXBwZXJPcmllbnRhdGlvblwiXHJcbiAgICAgIFtwLXN0ZXBdPVwic3RlcFwiXHJcbiAgICAgIFtwLXN0ZXBzXT1cInN0ZXBzXCJcclxuICAgICAgKHAtY2hhbmdlLXN0ZXApPVwibmV4dFN0ZXAoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLXN0ZXBwZXI+XHJcblxyXG4gICAgPHBvLWNvbnRhaW5lciBjbGFzcz1cInBvLWxnLTggcG8teGwtOVwiPlxyXG4gICAgICA8Zm9ybSAjZm9ybVNjaGVkdWxlcj1cIm5nRm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgICAgICAgIDxwby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uXHJcbiAgICAgICAgICAgIFtwLW5vLXBhcmFtZXRlcnNdPVwicGFyYW1ldGVyc0VtcHR5XCJcclxuICAgICAgICAgICAgW3Atbm8tY3VzdG9tLXBhcmFtcy1jb21wb25lbnRdPVwiIXBhcmFtZXRlcnNUZW1wbGF0ZT8udGVtcGxhdGVSZWZcIlxyXG4gICAgICAgICAgICBbaGlkZGVuXT1cInN0ZXAgIT09IDFcIlxyXG4gICAgICAgICAgICAjc2NoZWR1bGVyRXhlY3V0aW9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgICAgICBbcC1pcy1lZGl0XT1cImlzRWRpdFwiXHJcbiAgICAgICAgICAgIFtwLWxpdGVyYWxzXT1cImxpdGVyYWxzXCJcclxuICAgICAgICAgICAgW3AtdmFsdWVdPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAocC1jaGFuZ2UtcHJvY2Vzcyk9XCJvbkNoYW5nZVByb2Nlc3MoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXBhZ2Utam9iLXNjaGVkdWxlci1leGVjdXRpb24+XHJcblxyXG4gICAgICAgICAgPHBvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICpuZ0lmPVwic3RlcFBhcmFtZXRlcnNJbml0aWFsaXplZFwiXHJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwic3RlcCAhPT0gMlwiXHJcbiAgICAgICAgICAgICNzY2hlZHVsZXJQYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgICAgICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXHJcbiAgICAgICAgICAgIFtwLXBhcmFtZXRlcnNdPVwicGFyYW1ldGVycyB8fCBbXVwiXHJcbiAgICAgICAgICAgIFsocC12YWx1ZSldPVwibW9kZWwuZXhlY3V0aW9uUGFyYW1ldGVyXCJcclxuICAgICAgICAgICAgW3AtdGVtcGxhdGVdPVwicGFyYW1ldGVyc1RlbXBsYXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnM+XHJcblxyXG4gICAgICAgICAgPHBvLXBhZ2Utam9iLXNjaGVkdWxlci1zdW1tYXJ5XHJcbiAgICAgICAgICAgIFtwLW5vLXBhcmFtZXRlcnNdPVwicGFyYW1ldGVyc0VtcHR5XCJcclxuICAgICAgICAgICAgKm5nSWY9XCJzdGVwID09PSAzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwby1tZC0xMlwiXHJcbiAgICAgICAgICAgIFtwLWxpdGVyYWxzXT1cImxpdGVyYWxzXCJcclxuICAgICAgICAgICAgW3AtcGFyYW1ldGVyc109XCJwYXJhbWV0ZXJzIHx8IFt7fV1cIlxyXG4gICAgICAgICAgICBbcC12YWx1ZV09XCJwdWJsaWNWYWx1ZXNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9wby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9wby1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvcG8tcGFnZS1kZWZhdWx0PlxyXG4iXX0=