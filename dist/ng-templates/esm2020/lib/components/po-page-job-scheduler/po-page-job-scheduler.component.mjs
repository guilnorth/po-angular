import { Component, ContentChild, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoStepperStatus, poLocaleDefault } from '@po-ui/ng-components';
import { PoPageJobSchedulerInternal } from './po-page-job-scheduler-internal';
import { PoPageJobSchedulerBaseComponent } from './po-page-job-scheduler-base.component';
import { poPageJobSchedulerLiteralsDefault } from './po-page-job-scheduler-literals';
import { PoJobSchedulerParametersTemplateDirective } from './po-page-job-scheduler-parameters';
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
        i0.ɵɵcontentQuery(dirIndex, PoJobSchedulerParametersTemplateDirective, 7);
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
            args: [PoJobSchedulerParametersTemplateDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlGLE9BQU8sRUFPTCxlQUFlLEVBQ2YsZUFBZSxFQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3JGLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDS3JGLCtEQVNDO0lBRkMscVBBQWEsd0RBQ3BCLElBRDZDO0lBR3hDLGlCQUFtQzs7O0lBUmpDLDBDQUFxQiwrQkFBQSxpRUFBQSw0Q0FBQSx5Q0FBQTs7Ozs7SUFVdkIsb0RBUWdDOzs7SUFQOUIsd0RBQW1DLCtCQUFBLDZGQUFBLGdDQUFBOztBRGhCL0M7Ozs7Ozs7Ozs7R0FVRztBQWFILE1BQU0sT0FBTywyQkFBNEIsU0FBUSwrQkFBK0I7SUEyQzlFLFlBQ1MsMEJBQTJELEVBQzFELGNBQThCLEVBQzlCLGVBQWdDLEVB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QWlCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUM1RixDQUFDOztzR0FoUFUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7b0NBR3hCLHlDQUF5Qzs7Ozs7Ozs7Ozs7O1FDbkR6RCwwQ0FBaUcsYUFBQSxvQkFBQTtRQVEzRixrSUFBaUIsb0JBQWdCLElBQUM7UUFFcEMsaUJBQWE7UUFFYix1Q0FBc0Msb0JBQUEsYUFBQSw0Q0FBQTtRQVk5Qiw2SkFBb0IsMkJBQXVCLElBQUM7UUFFOUMsaUJBQWtDO1FBRWxDLHNJQVVtQztRQUVuQyxrSUFRZ0M7UUFDbEMsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFqREcsbURBQWlDLGdDQUFBLHNCQUFBO1FBSzVDLGVBQW9DO1FBQXBDLHNEQUFvQyxvQkFBQSxzQkFBQTtRQVc5QixlQUFtQztRQUFuQyxxREFBbUMsK0dBQUEsMEJBQUEseUJBQUEsNEJBQUEsc0JBQUE7UUFhbEMsZUFBK0I7UUFBL0Isb0RBQStCO1FBYS9CLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZETWhCLDJCQUEyQjtjQVp2QyxTQUFTOzJCQUNFLHVCQUF1QixpQkFFbEIsaUJBQWlCLENBQUMsSUFBSTt5UEFVYyxrQkFBa0I7a0JBQXBFLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2YsbUJBQW1CO2tCQUFwRCxTQUFTO21CQUFDLHFCQUFxQjtZQUMyQyxrQkFBa0I7a0JBQTVGLFlBQVk7bUJBQUMseUNBQXlDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0RpYWxvZ1NlcnZpY2UsXHJcbiAgUG9EeW5hbWljRm9ybUZpZWxkLFxyXG4gIFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gIFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICBQb1BhZ2VBY3Rpb24sXHJcbiAgUG9TdGVwcGVySXRlbSxcclxuICBQb1N0ZXBwZXJTdGF0dXMsXHJcbiAgcG9Mb2NhbGVEZWZhdWx0XHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1qb2Itc2NoZWR1bGVyLWludGVybmFsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckludGVybmFsIH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItaW50ZXJuYWwnO1xyXG5pbXBvcnQgeyBQb1BhZ2VKb2JTY2hlZHVsZXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBwb1BhZ2VKb2JTY2hlZHVsZXJMaXRlcmFsc0RlZmF1bHQgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1saXRlcmFscyc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlckxvb2t1cFNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1sb29rdXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9QYWdlSm9iU2NoZWR1bGVyQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1qb2Itc2NoZWR1bGVyLWJhY2tncm91bmQtcHJvY2Vzc1wiIHRpdGxlPVwiUE8gUGFnZSBKb2IgU2NoZWR1bGVyIC0gQmFja2dyb3VuZCBQcm9jZXNzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3Mvc2FtcGxlLXBvLXBhZ2Utam9iLXNjaGVkdWxlci1iYWNrZ3JvdW5kLXByb2Nlc3MuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzL3NhbXBsZS1wby1wYWdlLWpvYi1zY2hlZHVsZXItYmFja2dyb3VuZC1wcm9jZXNzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1qb2Itc2NoZWR1bGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBwby1jb250YWluZXIgLnBvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogdW5zZXQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJDb21wb25lbnQgZXh0ZW5kcyBQb1BhZ2VKb2JTY2hlZHVsZXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdzY2hlZHVsZXJFeGVjdXRpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzY2hlZHVsZXJFeGVjdXRpb246IHsgZm9ybTogTmdGb3JtIH07XHJcbiAgQFZpZXdDaGlsZCgnc2NoZWR1bGVyUGFyYW1ldGVycycpIHNjaGVkdWxlclBhcmFtZXRlcnM6IHsgZm9ybTogTmdGb3JtIH07XHJcbiAgQENvbnRlbnRDaGlsZChQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcGFyYW1ldGVyc1RlbXBsYXRlOiBQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZTtcclxuXHJcbiAgaXNFZGl0ID0gZmFsc2U7XHJcbiAgbGl0ZXJhbHMgPSB7XHJcbiAgICAuLi5wb1BhZ2VKb2JTY2hlZHVsZXJMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XVxyXG4gIH07XHJcblxyXG4gIHB1YmxpY1ZhbHVlczogUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbDtcclxuICBzYXZlT3BlcmF0aW9uOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgc3RlcDogbnVtYmVyID0gMTtcclxuICBwYXJhbWV0ZXJzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBzdGVwUGFyYW1ldGVyc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIHJlYWRvbmx5IHN0ZXBzOiBBcnJheTxQb1N0ZXBwZXJJdGVtPiA9IFtdO1xyXG5cclxuICBwcml2YXRlIGJhY2tQYWdlQWN0aW9uOiBQb1BhZ2VBY3Rpb24gPSB7XHJcbiAgICBsYWJlbDogdGhpcy5saXRlcmFscy5iYWNrLFxyXG4gICAgYWN0aW9uOiB0aGlzLm5leHRTdGVwT3BlcmF0aW9uLmJpbmQodGhpcywgJ2JhY2snKSxcclxuICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWRCYWNrLmJpbmQodGhpcylcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNvbmNsdWRlUGFnZUFjdGlvbjogUG9QYWdlQWN0aW9uID0ge1xyXG4gICAgbGFiZWw6IHRoaXMubGl0ZXJhbHMuY29uY2x1ZGUsXHJcbiAgICBhY3Rpb246IHRoaXMuY29uZmlybUpvYlNjaGVkdWxlci5iaW5kKHRoaXMpXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUFjdGlvbjogUG9QYWdlQWN0aW9uID0ge1xyXG4gICAgbGFiZWw6IHRoaXMubGl0ZXJhbHMubmV4dCxcclxuICAgIGFjdGlvbjogdGhpcy5uZXh0U3RlcE9wZXJhdGlvbi5iaW5kKHRoaXMsICduZXh0JyksXHJcbiAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkQWR2YW5jZS5iaW5kKHRoaXMpXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjb25jbHVkZVBhZ2VBY3Rpb25zOiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gW3RoaXMuY29uY2x1ZGVQYWdlQWN0aW9uLCB0aGlzLmJhY2tQYWdlQWN0aW9uXTtcclxuXHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbdGhpcy5uZXh0UGFnZUFjdGlvbiwgdGhpcy5iYWNrUGFnZUFjdGlvbl07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgam9iU2NoZWR1bGVyQWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFsuLi50aGlzLm5leHRQYWdlQWN0aW9uc107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHBvUGFnZUR5bmFtaWNMb29rdXBTZXJ2aWNlOiBQb1BhZ2VKb2JTY2hlZHVsZXJMb29rdXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHBvRGlhbG9nU2VydmljZTogUG9EaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb05vdGlmaWNhdGlvbjogUG9Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIHBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2U6IFBvUGFnZUpvYlNjaGVkdWxlclNlcnZpY2UsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlKTtcclxuXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4udGhpcy5saXRlcmFscyxcclxuICAgICAgLi4ucG9QYWdlSm9iU2NoZWR1bGVyTGl0ZXJhbHNEZWZhdWx0W2xhbmd1YWdlXVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJhY2tQYWdlQWN0aW9uLmxhYmVsID0gdGhpcy5saXRlcmFscy5iYWNrO1xyXG4gICAgdGhpcy5jb25jbHVkZVBhZ2VBY3Rpb24ubGFiZWwgPSB0aGlzLmxpdGVyYWxzLmNvbmNsdWRlO1xyXG4gICAgdGhpcy5uZXh0UGFnZUFjdGlvbi5sYWJlbCA9IHRoaXMubGl0ZXJhbHMubmV4dDtcclxuXHJcbiAgICB0aGlzLnN0ZXBzID0gW1xyXG4gICAgICB7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLnNjaGVkdWxpbmcgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5saXRlcmFscy5wYXJhbWV0ZXJpemF0aW9uIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMuY29uY2x1ZGUgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldCBzdGVwcGVyT3JpZW50YXRpb24oKTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiA0ODEgJiYgd2luZG93LmlubmVyV2lkdGggPCA5NjAgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcblxyXG4gICAgdGhpcy5pc0VkaXQgPSAhIXBhcmFtSWQ7XHJcblxyXG4gICAgdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLmNvbmZpZ1NlcnZpY2VBcGkoeyBlbmRwb2ludDogdGhpcy5zZXJ2aWNlQXBpIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtZXRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucGFyYW1ldGVyc0VtcHR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkRGF0YShwYXJhbUlkKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2VBY3Rpb25zQnlTdGVwcyhjdXJyZW50U3RlcDogbnVtYmVyLCBuZXh0U3RlcDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzdGVwc0xlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xyXG5cclxuICAgIGlmIChuZXh0U3RlcCA9PT0gc3RlcHNMZW5ndGgpIHtcclxuICAgICAgdGhpcy5qb2JTY2hlZHVsZXJBY3Rpb25zID0gWy4uLnRoaXMuY29uY2x1ZGVQYWdlQWN0aW9uc107XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTdGVwID09PSBzdGVwc0xlbmd0aCAmJiBuZXh0U3RlcCA8IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgIHRoaXMuam9iU2NoZWR1bGVyQWN0aW9ucyA9IFsuLi50aGlzLm5leHRQYWdlQWN0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RlcFBhcmFtZXRlcnNJbml0aWFsaXplZCA9IHRoaXMuc3RlcFBhcmFtZXRlcnNJbml0aWFsaXplZCB8fCBzdGVwTnVtYmVyID09PSAyO1xyXG5cclxuICAgIGlmIChzdGVwTnVtYmVyID4gMSAmJiB0aGlzLnNjaGVkdWxlckV4ZWN1dGlvbi5mb3JtLmludmFsaWQpIHtcclxuICAgICAgdGhpcy5tYXJrQXNEaXJ0eUludmFsaWRDb250cm9scyh0aGlzLnNjaGVkdWxlckV4ZWN1dGlvbi5mb3JtLmNvbnRyb2xzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgc3RlcE51bWJlciA+IDIgJiZcclxuICAgICAgdGhpcy5zY2hlZHVsZXJQYXJhbWV0ZXJzICYmXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVycy5mb3JtICYmXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVycy5mb3JtLmludmFsaWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLm1hcmtBc0RpcnR5SW52YWxpZENvbnRyb2xzKHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVycy5mb3JtLmNvbnRyb2xzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRNb2RlbFJlY3VycmVudCgpO1xyXG5cclxuICAgIGNvbnN0IG1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKSk7XHJcblxyXG4gICAgaWYgKHN0ZXBOdW1iZXIgPT09IHRoaXMuc3RlcHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHVibGljVmFsdWVzID0gdGhpcy5oaWRlc1NlY3JldFZhbHVlcyhtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VQYWdlQWN0aW9uc0J5U3RlcHModGhpcy5zdGVwLCBzdGVwTnVtYmVyKTtcclxuXHJcbiAgICBjb25zdCBzdGVwcyA9IHRoaXMuc3RlcHNbdGhpcy5zdGVwIC0gMV07XHJcbiAgICB0aGlzLnN0ZXAgPSBzdGVwTnVtYmVyO1xyXG5cclxuICAgIGlmIChzdGVwcykge1xyXG4gICAgICBzdGVwcy5zdGF0dXMgPSBQb1N0ZXBwZXJTdGF0dXMuRG9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlUHJvY2Vzcyhwcm9jZXNzOiB7IHByb2Nlc3NJZDogc3RyaW5nOyBleGlzdEFQSTogYm9vbGVhbiB9KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5leGlzdEFQSSAmJiBwcm9jZXNzLnByb2Nlc3NJZCAmJiB0aGlzLnBhcmFtZXRlcnNFbXB0eSAmJiAhdGhpcy5wYXJhbWV0ZXJzVGVtcGxhdGU/LnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuZ2V0UGFyYW1ldGVyc0J5UHJvY2Vzcyhwcm9jZXNzLnByb2Nlc3NJZCk7XHJcbiAgICAgIGlmICghdGhpcy5pc0VkaXQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlciA9IHt9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpcm1Kb2JTY2hlZHVsZXIoKSB7XHJcbiAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcblxyXG4gICAgY29uc3QgY29uZmlybU1lc3NhZ2UgPSBwYXJhbUlkID8gdGhpcy5saXRlcmFscy5jb25maXJtVXBkYXRlTWVzc2FnZSA6IHRoaXMubGl0ZXJhbHMuY29uZmlybVNhdmVNZXNzYWdlO1xyXG5cclxuICAgIHRoaXMucG9EaWFsb2dTZXJ2aWNlLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogdGhpcy5saXRlcmFscy5jb25maXJtYXRpb24sXHJcbiAgICAgIG1lc3NhZ2U6IGNvbmZpcm1NZXNzYWdlLFxyXG4gICAgICBjb25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSB7IC4uLnRoaXMubW9kZWwgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlKG1vZGVsLCBwYXJhbUlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGVtaXRTdWNjZXNzTWVzc2FnZShtc2dTdWNjZXNzOiBhbnksIHNhdmVPcGVyYXRpb246IE9ic2VydmFibGU8YW55Pikge1xyXG4gICAgYXdhaXQgc2F2ZU9wZXJhdGlvbi50b1Byb21pc2UoKTtcclxuICAgIHRoaXMucG9Ob3RpZmljYXRpb24uc3VjY2Vzcyhtc2dTdWNjZXNzKTtcclxuICAgIHRoaXMucmVzZXRKb2JTY2hlZHVsZXJGb3JtKCk7XHJcbiAgICAvLyBAdG9kbyBlbWl0aXIgZXZlbnRvIGRlIGZpbmFsaXphw6fDo29cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFyYW1ldGVyc0J5UHJvY2Vzcyhwcm9jZXNzOiBhbnkpIHtcclxuICAgIHRoaXMucG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZS5nZXRQYXJhbWV0ZXJzQnlQcm9jZXNzKHByb2Nlc3MpLnN1YnNjcmliZShwYXJhbWV0ZXJzID0+IHtcclxuICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlc1NlY3JldFZhbHVlcyhtb2RlbDogUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCk6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwge1xyXG4gICAgY29uc3QgaGlkZGVuU2VjcmV0VmFsdWUgPSAnKioqKioqKioqKic7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaChwYXJhbWV0ZXIgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pc1NlY3JldFBhcmFtZXRlcihtb2RlbCwgcGFyYW1ldGVyKSkge1xyXG4gICAgICAgIG1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlcltwYXJhbWV0ZXIucHJvcGVydHldID0gaGlkZGVuU2VjcmV0VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkQWR2YW5jZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudEJ5U3RlcCA9IHtcclxuICAgICAgMTogdGhpcy5zY2hlZHVsZXJFeGVjdXRpb24sXHJcbiAgICAgIDI6IHRoaXMuc2NoZWR1bGVyUGFyYW1ldGVyc1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50QnlTdGVwW3RoaXMuc3RlcF0/LmZvcm0/LmludmFsaWQgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGlzYWJsZWRCYWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RlcCA9PT0gMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTZWNyZXRQYXJhbWV0ZXIobW9kZWw6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwsIHBhcmFtZXRlcjogUG9EeW5hbWljRm9ybUZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBtb2RlbC5leGVjdXRpb25QYXJhbWV0ZXIgJiZcclxuICAgICAgcGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdzZWNyZXQnKSAmJlxyXG4gICAgICBwYXJhbWV0ZXJbJ3NlY3JldCddID09PSB0cnVlICYmXHJcbiAgICAgIG1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eShwYXJhbWV0ZXIucHJvcGVydHkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZXh0U3RlcE9wZXJhdGlvbihvcGVyYXRpb24/OiAnYmFjaycgfCAnbmV4dCcpIHtcclxuICAgIGNvbnN0IHN0ZXBOdW1iZXIgPSBvcGVyYXRpb24gPT09ICdiYWNrJyA/IHRoaXMuc3RlcCAtIDEgOiB0aGlzLnN0ZXAgKyAxO1xyXG5cclxuICAgIHRoaXMubmV4dFN0ZXAoc3RlcE51bWJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0Sm9iU2NoZWR1bGVyRm9ybSgpIHtcclxuICAgIHRoaXMuc2NoZWR1bGVyRXhlY3V0aW9uLmZvcm0ucmVzZXQoKTtcclxuXHJcbiAgICAvLyByYWRpb2dyb3VwIG7Do28gZXN0YXZhIGF0cmlidWluZG8gbm92byB2YWxvciwgZmljYSB2ZXJtZWxobyBzZW0gbyB0aW1ldG91dC5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IFBvUGFnZUpvYlNjaGVkdWxlckludGVybmFsKCk7XHJcblxyXG4gICAgICB0aGlzLnN0ZXAgPSAxO1xyXG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcC5zdGF0dXMgPSBQb1N0ZXBwZXJTdGF0dXMuRGVmYXVsdDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmpvYlNjaGVkdWxlckFjdGlvbnMgPSBbLi4udGhpcy5uZXh0UGFnZUFjdGlvbnNdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmUobW9kZWw6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwsIHBhcmFtSWQpIHtcclxuICAgIGNvbnN0IHNhdmVPcGVyYXRpb24gPSBwYXJhbUlkXHJcbiAgICAgID8gdGhpcy5wb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlLnVwZGF0ZVJlc291cmNlKHBhcmFtSWQsIG1vZGVsKVxyXG4gICAgICA6IHRoaXMucG9QYWdlSm9iU2NoZWR1bGVyU2VydmljZS5jcmVhdGVSZXNvdXJjZShtb2RlbCk7XHJcblxyXG4gICAgY29uc3QgbXNnU3VjY2VzcyA9IHBhcmFtSWRcclxuICAgICAgPyB0aGlzLmxpdGVyYWxzLnNhdmVOb3RpZmljYXRpb25TdWNjZXNzVXBkYXRlXHJcbiAgICAgIDogdGhpcy5saXRlcmFscy5zYXZlTm90aWZpY2F0aW9uU3VjY2Vzc1NhdmU7XHJcblxyXG4gICAgdGhpcy5lbWl0U3VjY2Vzc01lc3NhZ2UobXNnU3VjY2Vzcywgc2F2ZU9wZXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1vZGVsUmVjdXJyZW50KCkge1xyXG4gICAgdGhpcy5tb2RlbC5yZWN1cnJlbnQgPSB0aGlzLm1vZGVsLnBlcmlvZGljaXR5ID09PSAnc2luZ2xlJyA/IGZhbHNlIDogdGhpcy5tb2RlbC5yZWN1cnJlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1wYWdlLWRlZmF1bHQgW3AtYWN0aW9uc109XCJqb2JTY2hlZHVsZXJBY3Rpb25zXCIgW3AtYnJlYWRjcnVtYl09XCJicmVhZGNydW1iXCIgW3AtdGl0bGVdPVwidGl0bGVcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAgICA8cG8tc3RlcHBlclxyXG4gICAgICBjbGFzcz1cInBvLWxnLTMgcG8teGwtMlwiXHJcbiAgICAgIHAtc2VxdWVudGlhbD1cInRydWVcIlxyXG4gICAgICBbcC1vcmllbnRhdGlvbl09XCJzdGVwcGVyT3JpZW50YXRpb25cIlxyXG4gICAgICBbcC1zdGVwXT1cInN0ZXBcIlxyXG4gICAgICBbcC1zdGVwc109XCJzdGVwc1wiXHJcbiAgICAgIChwLWNoYW5nZS1zdGVwKT1cIm5leHRTdGVwKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9wby1zdGVwcGVyPlxyXG5cclxuICAgIDxwby1jb250YWluZXIgY2xhc3M9XCJwby1sZy04IHBvLXhsLTlcIj5cclxuICAgICAgPGZvcm0gI2Zvcm1TY2hlZHVsZXI9XCJuZ0Zvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAgICAgICAgICA8cG8tcGFnZS1qb2Itc2NoZWR1bGVyLWV4ZWN1dGlvblxyXG4gICAgICAgICAgICBbcC1uby1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnNFbXB0eVwiXHJcbiAgICAgICAgICAgIFtwLW5vLWN1c3RvbS1wYXJhbXMtY29tcG9uZW50XT1cIiFwYXJhbWV0ZXJzVGVtcGxhdGU/LnRlbXBsYXRlUmVmXCJcclxuICAgICAgICAgICAgW2hpZGRlbl09XCJzdGVwICE9PSAxXCJcclxuICAgICAgICAgICAgI3NjaGVkdWxlckV4ZWN1dGlvblxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLW1kLTEyXCJcclxuICAgICAgICAgICAgW3AtaXMtZWRpdF09XCJpc0VkaXRcIlxyXG4gICAgICAgICAgICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXHJcbiAgICAgICAgICAgIFtwLXZhbHVlXT1cIm1vZGVsXCJcclxuICAgICAgICAgICAgKHAtY2hhbmdlLXByb2Nlc3MpPVwib25DaGFuZ2VQcm9jZXNzKCRldmVudClcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9wby1wYWdlLWpvYi1zY2hlZHVsZXItZXhlY3V0aW9uPlxyXG5cclxuICAgICAgICAgIDxwby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAqbmdJZj1cInN0ZXBQYXJhbWV0ZXJzSW5pdGlhbGl6ZWRcIlxyXG4gICAgICAgICAgICBbaGlkZGVuXT1cInN0ZXAgIT09IDJcIlxyXG4gICAgICAgICAgICAjc2NoZWR1bGVyUGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBjbGFzcz1cInBvLW1kLTEyXCJcclxuICAgICAgICAgICAgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIlxyXG4gICAgICAgICAgICBbcC1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnMgfHwgW11cIlxyXG4gICAgICAgICAgICBbKHAtdmFsdWUpXT1cIm1vZGVsLmV4ZWN1dGlvblBhcmFtZXRlclwiXHJcbiAgICAgICAgICAgIFtwLXRlbXBsYXRlXT1cInBhcmFtZXRlcnNUZW1wbGF0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzPlxyXG5cclxuICAgICAgICAgIDxwby1wYWdlLWpvYi1zY2hlZHVsZXItc3VtbWFyeVxyXG4gICAgICAgICAgICBbcC1uby1wYXJhbWV0ZXJzXT1cInBhcmFtZXRlcnNFbXB0eVwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwic3RlcCA9PT0gM1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgICAgICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXHJcbiAgICAgICAgICAgIFtwLXBhcmFtZXRlcnNdPVwicGFyYW1ldGVycyB8fCBbe31dXCJcclxuICAgICAgICAgICAgW3AtdmFsdWVdPVwicHVibGljVmFsdWVzXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXN1bW1hcnk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvcG8tY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L3BvLXBhZ2UtZGVmYXVsdD5cclxuIl19