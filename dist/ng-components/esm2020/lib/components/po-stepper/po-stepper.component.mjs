import { Component, ContentChildren } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { take, tap, catchError } from 'rxjs/operators';
import { PoStepperStatus } from './enums/po-stepper-status.enum';
import { PoStepComponent } from './po-step/po-step.component';
import { PoStepperBaseComponent } from './po-stepper-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-stepper-step/po-stepper-step.component";
function PoStepperComponent_po_stepper_step_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-stepper-step", 3);
    i0.ɵɵlistener("p-activated", function PoStepperComponent_po_stepper_step_2_Template_po_stepper_step_p_activated_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const step_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onStepActive(step_r2)); })("p-click", function PoStepperComponent_po_stepper_step_2_Template_po_stepper_step_p_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const index_r3 = restoredCtx.index; const step_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.changeStep(index_r3, step_r2)); })("p-enter", function PoStepperComponent_po_stepper_step_2_Template_po_stepper_step_p_enter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const index_r3 = restoredCtx.index; const step_r2 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.changeStep(index_r3, step_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    let tmp_6_0;
    i0.ɵɵproperty("p-circle-content", index_r3 + 1)("p-label", step_r2.label)("p-orientation", ctx_r0.orientation)("p-status", step_r2.status)("p-step-icons", ctx_r0.stepIcons)("p-step-size", ctx_r0.stepSize)("p-next-status", (tmp_6_0 = ctx_r0.poSteps.get(index_r3 + 1)) == null ? null : tmp_6_0.status);
} }
function PoStepperComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
/**
 * @docsExtends PoStepperBaseComponent
 *
 * @example
 *
 * <example name="po-stepper-basic" title="PO Stepper Basic">
 *  <file name="sample-po-stepper-basic/sample-po-stepper-basic.component.html"> </file>
 *  <file name="sample-po-stepper-basic/sample-po-stepper-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-stepper-labs" title="PO Stepper Labs">
 *  <file name="sample-po-stepper-labs/sample-po-stepper-labs.component.html"> </file>
 *  <file name="sample-po-stepper-labs/sample-po-stepper-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-stepper-sales" title="PO Stepper - Sales">
 *  <file name="sample-po-stepper-sales/sample-po-stepper-sales.component.html"> </file>
 *  <file name="sample-po-stepper-sales/sample-po-stepper-sales.component.ts"> </file>
 * </example>
 *
 * <example name="po-stepper-active" title="PO Stepper - Active">
 *  <file name="sample-po-stepper-active/sample-po-stepper-active.component.html"> </file>
 *  <file name="sample-po-stepper-active/sample-po-stepper-active.component.ts"> </file>
 *  <file name="sample-po-stepper-active/sample-po-stepper-active.service.ts"> </file>
 * </example>
 */
export class PoStepperComponent extends PoStepperBaseComponent {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
    }
    get currentStepIndex() {
        return this.step - 1;
    }
    get stepList() {
        return (this.usePoSteps && this.poSteps) || this.steps;
    }
    get usePoSteps() {
        return !!this.poSteps.length;
    }
    ngAfterContentInit() {
        this.activeFirstStep();
        this.poSteps.changes.subscribe(() => {
            this.controlStepsStatus(0, this.poSteps.first);
        });
    }
    /**
     * Altera o status do *step* para ativo.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     *
     * @param {number} index Índice do `po-step` que se deseja ativar.
     */
    active(index) {
        if (!this.usePoSteps) {
            return;
        }
        const stepsArray = this.getPoSteps();
        const step = stepsArray[index];
        this.changeStep(index, step);
    }
    /**
     * Ativa o primeiro *step*.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     */
    first() {
        if (!this.usePoSteps) {
            return;
        }
        const firstStep = this.poSteps.first;
        const firstStepIndex = 0;
        this.changeStep(firstStepIndex, firstStep);
    }
    /**
     * Ativa o próximo *step*.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     */
    next() {
        if (!this.usePoSteps) {
            return;
        }
        const { steps, stepIndex } = this.getStepsAndIndex(this.currentActiveStep);
        const nextIndex = stepIndex + 1;
        const nextStep = steps[nextIndex];
        this.changeStep(nextIndex, nextStep);
    }
    /**
     * Ativa o *step* anterior.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     */
    previous() {
        if (!this.usePoSteps) {
            return;
        }
        const { steps, stepIndex } = this.getStepsAndIndex(this.currentActiveStep);
        const previousIndex = stepIndex - 1;
        const previousStep = steps[previousIndex];
        this.changeStep(previousIndex, previousStep);
    }
    changeStep(stepIndex, step) {
        this.allowNextStep(stepIndex)
            .pipe(take(1))
            .subscribe(nextStepAllowed => {
            if (nextStepAllowed) {
                const isDifferentStep = !this.currentActiveStep || step.id !== this.currentActiveStep.id;
                if (this.usePoSteps && isDifferentStep) {
                    this.controlStepsStatus(stepIndex, step);
                    this.onChangeStep.emit(step);
                }
                else if (!this.usePoSteps && stepIndex !== this.currentStepIndex) {
                    // if para tratamento do modelo antigo do po-stepper
                    this.onChangeStep.emit(stepIndex + 1);
                }
            }
        });
    }
    onStepActive(step) {
        this.currentActiveStep = step;
        const { stepIndex } = this.getStepsAndIndex(this.currentActiveStep);
        this.poSteps.forEach((stepChild, i) => {
            if (i < stepIndex) {
                stepChild.status = PoStepperStatus.Done;
            }
        });
    }
    trackByFn(step) {
        return step.id;
    }
    activeFirstStep() {
        const hasStepActive = this.poSteps.some(poStep => poStep.status === PoStepperStatus.Active);
        if (this.usePoSteps && !hasStepActive) {
            this.changeStep(0, this.poSteps.first);
        }
    }
    allowNextStep(nextStepIndex) {
        if (!this.sequential) {
            return of(true);
        }
        const isAllowNextStep$ = this.usePoSteps
            ? this.isBeforeStep(nextStepIndex) || this.canActiveNextStep(this.currentActiveStep)
            : this.steps.slice(this.step, nextStepIndex).every(step => step.status === PoStepperStatus.Done);
        return typeof isAllowNextStep$ === 'boolean' ? of(isAllowNextStep$) : isAllowNextStep$;
    }
    canActiveNextStep(currentActiveStep = {}) {
        if (!currentActiveStep.canActiveNextStep) {
            return of(true);
        }
        const canActiveNextStep = currentActiveStep.canActiveNextStep(currentActiveStep);
        const canActiveNextStep$ = canActiveNextStep instanceof Observable ? canActiveNextStep : of(canActiveNextStep);
        return canActiveNextStep$.pipe(tap(isCanActiveNextStep => {
            currentActiveStep.status = this.getStepperStatusByCanActive(isCanActiveNextStep);
        }), catchError(err => {
            currentActiveStep.status = PoStepperStatus.Error;
            return throwError(err);
        }));
    }
    controlStepsStatus(stepIndex, step) {
        if (this.usePoSteps) {
            this.setStepAsActive(step);
            this.setNextStepAsDefault(step);
            if (this.isBeforeStep(stepIndex)) {
                this.setFinalSteppersAsDisabled(stepIndex);
            }
            this.changeDetector.detectChanges();
        }
    }
    getStepperStatusByCanActive(canActiveNextStep) {
        return canActiveNextStep ? PoStepperStatus.Done : PoStepperStatus.Error;
    }
    getStepsAndIndex(step = {}) {
        const steps = this.getPoSteps();
        const stepIndex = steps.findIndex(poStep => poStep.id === step.id);
        return { steps, stepIndex };
    }
    getPoSteps() {
        return this.poSteps.toArray();
    }
    isBeforeStep(stepIndex) {
        const currentActiveStepIndex = () => this.getPoSteps().findIndex(step => step.id === this.currentActiveStep.id);
        return !!this.currentActiveStep && currentActiveStepIndex() >= stepIndex;
    }
    setFinalSteppersAsDisabled(stepIndex) {
        this.getPoSteps()
            .filter((step, index) => step && index >= stepIndex + 2)
            .forEach(step => (step.status = PoStepperStatus.Disabled));
    }
    setStepAsActive(step) {
        step.status = PoStepperStatus.Active;
    }
    setNextStepAsDefault(currentStep) {
        const { steps, stepIndex } = this.getStepsAndIndex(currentStep);
        const nextIndex = stepIndex + 1;
        if (nextIndex < this.poSteps.length) {
            steps[nextIndex].status = PoStepperStatus.Default;
        }
    }
}
PoStepperComponent.ɵfac = function PoStepperComponent_Factory(t) { return new (t || PoStepperComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoStepperComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoStepperComponent, selectors: [["po-stepper"]], contentQueries: function PoStepperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoStepComponent, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poSteps = _t);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[1, "po-stepper-container"], ["class", "po-stepper-step-position", 3, "p-circle-content", "p-label", "p-orientation", "p-status", "p-step-icons", "p-step-size", "p-next-status", "p-activated", "p-click", "p-enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "po-stepper-content", 4, "ngIf"], [1, "po-stepper-step-position", 3, "p-circle-content", "p-label", "p-orientation", "p-status", "p-step-icons", "p-step-size", "p-next-status", "p-activated", "p-click", "p-enter"], [1, "po-stepper-content"]], template: function PoStepperComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div")(1, "div", 0);
        i0.ɵɵtemplate(2, PoStepperComponent_po_stepper_step_2_Template, 1, 7, "po-stepper-step", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, PoStepperComponent_div_3_Template, 2, 0, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("po-stepper po-stepper-", ctx.orientation, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.stepList)("ngForTrackBy", ctx.trackByFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.usePoSteps);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.PoStepperStepComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStepperComponent, [{
        type: Component,
        args: [{ selector: 'po-stepper', template: "<div class=\"po-stepper po-stepper-{{ orientation }}\">\r\n  <div class=\"po-stepper-container\">\r\n    <po-stepper-step\r\n      *ngFor=\"let step of stepList; let index = index; trackBy: trackByFn\"\r\n      class=\"po-stepper-step-position\"\r\n      [p-circle-content]=\"index + 1\"\r\n      [p-label]=\"step.label\"\r\n      [p-orientation]=\"orientation\"\r\n      [p-status]=\"step.status\"\r\n      [p-step-icons]=\"stepIcons\"\r\n      [p-step-size]=\"stepSize\"\r\n      [p-next-status]=\"poSteps.get(index + 1)?.status\"\r\n      (p-activated)=\"onStepActive(step)\"\r\n      (p-click)=\"changeStep(index, step)\"\r\n      (p-enter)=\"changeStep(index, step)\"\r\n    >\r\n    </po-stepper-step>\r\n  </div>\r\n\r\n  <div *ngIf=\"usePoSteps\" class=\"po-stepper-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { poSteps: [{
            type: ContentChildren,
            args: [PoStepComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc3RlcHBlci9wby1zdGVwcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zdGVwcGVyL3BvLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QyxTQUFTLEVBQUUsZUFBZSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTNHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7SUNMakUsMENBYUM7SUFIQywyUEFBZSxlQUFBLDRCQUFrQixDQUFBLElBQUMsMFFBQ3ZCLGVBQUEsb0NBQXVCLENBQUEsSUFEQSwwUUFFdkIsZUFBQSxvQ0FBdUIsQ0FBQSxJQUZBO0lBSXBDLGlCQUFrQjs7Ozs7O0lBWGhCLCtDQUE4QiwwQkFBQSxxQ0FBQSw0QkFBQSxrQ0FBQSxnQ0FBQSwrRkFBQTs7O0lBY2xDLDhCQUFtRDtJQUNqRCxrQkFBeUI7SUFDM0IsaUJBQU07OztBRFhSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBS0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtJQWlCNUQsWUFBb0IsY0FBaUM7UUFDbkQsS0FBSyxFQUFFLENB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QU0sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7b0ZBOU5VLGtCQUFrQjtxRUFBbEIsa0JBQWtCO29DQUNaLGVBQWU7Ozs7OztRQ3pDbEMsMkJBQXFELGFBQUE7UUFFakQsMkZBY2tCO1FBQ3BCLGlCQUFNO1FBRU4sbUVBRU07UUFDUixpQkFBTTs7UUF0QkQsd0VBQStDO1FBRzdCLGVBQWE7UUFBYixzQ0FBYSwrQkFBQTtRQWdCNUIsZUFBZ0I7UUFBaEIscUNBQWdCOzt1RkRxQlgsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0UsWUFBWTtvRUFJWSxPQUFPO2tCQUF4QyxlQUFlO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9TdGVwcGVyU3RhdHVzIH0gZnJvbSAnLi9lbnVtcy9wby1zdGVwcGVyLXN0YXR1cy5lbnVtJztcclxuaW1wb3J0IHsgUG9TdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9wby1zdGVwL3BvLXN0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9TdGVwcGVyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tc3RlcHBlci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvU3RlcHBlckl0ZW0gfSBmcm9tICcuL3BvLXN0ZXBwZXItaXRlbS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1N0ZXBwZXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1zdGVwcGVyLWJhc2ljXCIgdGl0bGU9XCJQTyBTdGVwcGVyIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN0ZXBwZXItYmFzaWMvc2FtcGxlLXBvLXN0ZXBwZXItYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zdGVwcGVyLWJhc2ljL3NhbXBsZS1wby1zdGVwcGVyLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXN0ZXBwZXItbGFic1wiIHRpdGxlPVwiUE8gU3RlcHBlciBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN0ZXBwZXItbGFicy9zYW1wbGUtcG8tc3RlcHBlci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc3RlcHBlci1sYWJzL3NhbXBsZS1wby1zdGVwcGVyLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tc3RlcHBlci1zYWxlc1wiIHRpdGxlPVwiUE8gU3RlcHBlciAtIFNhbGVzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN0ZXBwZXItc2FsZXMvc2FtcGxlLXBvLXN0ZXBwZXItc2FsZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zdGVwcGVyLXNhbGVzL3NhbXBsZS1wby1zdGVwcGVyLXNhbGVzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXN0ZXBwZXItYWN0aXZlXCIgdGl0bGU9XCJQTyBTdGVwcGVyIC0gQWN0aXZlXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN0ZXBwZXItYWN0aXZlL3NhbXBsZS1wby1zdGVwcGVyLWFjdGl2ZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN0ZXBwZXItYWN0aXZlL3NhbXBsZS1wby1zdGVwcGVyLWFjdGl2ZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zdGVwcGVyLWFjdGl2ZS9zYW1wbGUtcG8tc3RlcHBlci1hY3RpdmUuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tc3RlcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1N0ZXBwZXJDb21wb25lbnQgZXh0ZW5kcyBQb1N0ZXBwZXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihQb1N0ZXBDb21wb25lbnQpIHBvU3RlcHM6IFF1ZXJ5TGlzdDxQb1N0ZXBDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRBY3RpdmVTdGVwOiBQb1N0ZXBDb21wb25lbnQ7XHJcblxyXG4gIGdldCBjdXJyZW50U3RlcEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGVwIC0gMTtcclxuICB9XHJcblxyXG4gIGdldCBzdGVwTGlzdCgpOiBRdWVyeUxpc3Q8UG9TdGVwQ29tcG9uZW50PiB8IEFycmF5PFBvU3RlcHBlckl0ZW0+IHtcclxuICAgIHJldHVybiAodGhpcy51c2VQb1N0ZXBzICYmIHRoaXMucG9TdGVwcykgfHwgdGhpcy5zdGVwcztcclxuICB9XHJcblxyXG4gIGdldCB1c2VQb1N0ZXBzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5wb1N0ZXBzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmVGaXJzdFN0ZXAoKTtcclxuXHJcbiAgICB0aGlzLnBvU3RlcHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xTdGVwc1N0YXR1cygwLCB0aGlzLnBvU3RlcHMuZmlyc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbHRlcmEgbyBzdGF0dXMgZG8gKnN0ZXAqIHBhcmEgYXRpdm8uXHJcbiAgICpcclxuICAgKiA+IEVzdGUgbcOpdG9kbyDDqSB2YWxpZG8gYXBlbmFzIHBhcmEgYXMgaW1wbGVtZW50YcOnw7VlcyBxdWUgdXRpbGl6YW0gbyBjb21wb25lbnRlIFsqKnBvLXN0ZXAqKl0oL2RvY3VtZW50YXRpb24vcG8tc3RlcCkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggw41uZGljZSBkbyBgcG8tc3RlcGAgcXVlIHNlIGRlc2VqYSBhdGl2YXIuXHJcbiAgICovXHJcbiAgYWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy51c2VQb1N0ZXBzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGVwc0FycmF5ID0gdGhpcy5nZXRQb1N0ZXBzKCk7XHJcbiAgICBjb25zdCBzdGVwID0gc3RlcHNBcnJheVtpbmRleF07XHJcbiAgICB0aGlzLmNoYW5nZVN0ZXAoaW5kZXgsIHN0ZXApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXRpdmEgbyBwcmltZWlybyAqc3RlcCouXHJcbiAgICpcclxuICAgKiA+IEVzdGUgbcOpdG9kbyDDqSB2YWxpZG8gYXBlbmFzIHBhcmEgYXMgaW1wbGVtZW50YcOnw7VlcyBxdWUgdXRpbGl6YW0gbyBjb21wb25lbnRlIFsqKnBvLXN0ZXAqKl0oL2RvY3VtZW50YXRpb24vcG8tc3RlcCkuXHJcbiAgICovXHJcbiAgZmlyc3QoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudXNlUG9TdGVwcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RTdGVwID0gdGhpcy5wb1N0ZXBzLmZpcnN0O1xyXG4gICAgY29uc3QgZmlyc3RTdGVwSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlU3RlcChmaXJzdFN0ZXBJbmRleCwgZmlyc3RTdGVwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0aXZhIG8gcHLDs3hpbW8gKnN0ZXAqLlxyXG4gICAqXHJcbiAgICogPiBFc3RlIG3DqXRvZG8gw6kgdmFsaWRvIGFwZW5hcyBwYXJhIGFzIGltcGxlbWVudGHDp8O1ZXMgcXVlIHV0aWxpemFtIG8gY29tcG9uZW50ZSBbKipwby1zdGVwKipdKC9kb2N1bWVudGF0aW9uL3BvLXN0ZXApLlxyXG4gICAqL1xyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudXNlUG9TdGVwcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzdGVwcywgc3RlcEluZGV4IH0gPSB0aGlzLmdldFN0ZXBzQW5kSW5kZXgodGhpcy5jdXJyZW50QWN0aXZlU3RlcCk7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBzdGVwSW5kZXggKyAxO1xyXG4gICAgY29uc3QgbmV4dFN0ZXAgPSBzdGVwc1tuZXh0SW5kZXhdO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlU3RlcChuZXh0SW5kZXgsIG5leHRTdGVwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0aXZhIG8gKnN0ZXAqIGFudGVyaW9yLlxyXG4gICAqXHJcbiAgICogPiBFc3RlIG3DqXRvZG8gw6kgdmFsaWRvIGFwZW5hcyBwYXJhIGFzIGltcGxlbWVudGHDp8O1ZXMgcXVlIHV0aWxpemFtIG8gY29tcG9uZW50ZSBbKipwby1zdGVwKipdKC9kb2N1bWVudGF0aW9uL3BvLXN0ZXApLlxyXG4gICAqL1xyXG4gIHByZXZpb3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnVzZVBvU3RlcHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc3RlcHMsIHN0ZXBJbmRleCB9ID0gdGhpcy5nZXRTdGVwc0FuZEluZGV4KHRoaXMuY3VycmVudEFjdGl2ZVN0ZXApO1xyXG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHN0ZXBJbmRleCAtIDE7XHJcbiAgICBjb25zdCBwcmV2aW91c1N0ZXAgPSBzdGVwc1twcmV2aW91c0luZGV4XTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZVN0ZXAocHJldmlvdXNJbmRleCwgcHJldmlvdXNTdGVwKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVN0ZXAoc3RlcEluZGV4OiBudW1iZXIsIHN0ZXA/OiBQb1N0ZXBDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuYWxsb3dOZXh0U3RlcChzdGVwSW5kZXgpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUobmV4dFN0ZXBBbGxvd2VkID0+IHtcclxuICAgICAgICBpZiAobmV4dFN0ZXBBbGxvd2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBpc0RpZmZlcmVudFN0ZXAgPSAhdGhpcy5jdXJyZW50QWN0aXZlU3RlcCB8fCBzdGVwLmlkICE9PSB0aGlzLmN1cnJlbnRBY3RpdmVTdGVwLmlkO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnVzZVBvU3RlcHMgJiYgaXNEaWZmZXJlbnRTdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFN0ZXBzU3RhdHVzKHN0ZXBJbmRleCwgc3RlcCk7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VTdGVwLmVtaXQoc3RlcCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnVzZVBvU3RlcHMgJiYgc3RlcEluZGV4ICE9PSB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gaWYgcGFyYSB0cmF0YW1lbnRvIGRvIG1vZGVsbyBhbnRpZ28gZG8gcG8tc3RlcHBlclxyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlU3RlcC5lbWl0KHN0ZXBJbmRleCArIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblN0ZXBBY3RpdmUoc3RlcDogUG9TdGVwQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRBY3RpdmVTdGVwID0gc3RlcDtcclxuXHJcbiAgICBjb25zdCB7IHN0ZXBJbmRleCB9ID0gdGhpcy5nZXRTdGVwc0FuZEluZGV4KHRoaXMuY3VycmVudEFjdGl2ZVN0ZXApO1xyXG5cclxuICAgIHRoaXMucG9TdGVwcy5mb3JFYWNoKChzdGVwQ2hpbGQsIGkpID0+IHtcclxuICAgICAgaWYgKGkgPCBzdGVwSW5kZXgpIHtcclxuICAgICAgICBzdGVwQ2hpbGQuc3RhdHVzID0gUG9TdGVwcGVyU3RhdHVzLkRvbmU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuKHN0ZXA6IFBvU3RlcENvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHN0ZXAuaWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUZpcnN0U3RlcCgpIHtcclxuICAgIGNvbnN0IGhhc1N0ZXBBY3RpdmUgPSB0aGlzLnBvU3RlcHMuc29tZShwb1N0ZXAgPT4gcG9TdGVwLnN0YXR1cyA9PT0gUG9TdGVwcGVyU3RhdHVzLkFjdGl2ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlUG9TdGVwcyAmJiAhaGFzU3RlcEFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVN0ZXAoMCwgdGhpcy5wb1N0ZXBzLmZpcnN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWxsb3dOZXh0U3RlcChuZXh0U3RlcEluZGV4OiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XHJcbiAgICAgIHJldHVybiBvZih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0FsbG93TmV4dFN0ZXAkID0gdGhpcy51c2VQb1N0ZXBzXHJcbiAgICAgID8gdGhpcy5pc0JlZm9yZVN0ZXAobmV4dFN0ZXBJbmRleCkgfHwgdGhpcy5jYW5BY3RpdmVOZXh0U3RlcCh0aGlzLmN1cnJlbnRBY3RpdmVTdGVwKVxyXG4gICAgICA6IHRoaXMuc3RlcHMuc2xpY2UodGhpcy5zdGVwLCBuZXh0U3RlcEluZGV4KS5ldmVyeShzdGVwID0+IHN0ZXAuc3RhdHVzID09PSBQb1N0ZXBwZXJTdGF0dXMuRG9uZSk7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBpc0FsbG93TmV4dFN0ZXAkID09PSAnYm9vbGVhbicgPyBvZihpc0FsbG93TmV4dFN0ZXAkKSA6IGlzQWxsb3dOZXh0U3RlcCQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbkFjdGl2ZU5leHRTdGVwKGN1cnJlbnRBY3RpdmVTdGVwID0gPFBvU3RlcENvbXBvbmVudD57fSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKCFjdXJyZW50QWN0aXZlU3RlcC5jYW5BY3RpdmVOZXh0U3RlcCkge1xyXG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FuQWN0aXZlTmV4dFN0ZXAgPSBjdXJyZW50QWN0aXZlU3RlcC5jYW5BY3RpdmVOZXh0U3RlcChjdXJyZW50QWN0aXZlU3RlcCk7XHJcblxyXG4gICAgY29uc3QgY2FuQWN0aXZlTmV4dFN0ZXAkID0gY2FuQWN0aXZlTmV4dFN0ZXAgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gY2FuQWN0aXZlTmV4dFN0ZXAgOiBvZihjYW5BY3RpdmVOZXh0U3RlcCk7XHJcblxyXG4gICAgcmV0dXJuIGNhbkFjdGl2ZU5leHRTdGVwJC5waXBlKFxyXG4gICAgICB0YXAoaXNDYW5BY3RpdmVOZXh0U3RlcCA9PiB7XHJcbiAgICAgICAgY3VycmVudEFjdGl2ZVN0ZXAuc3RhdHVzID0gdGhpcy5nZXRTdGVwcGVyU3RhdHVzQnlDYW5BY3RpdmUoaXNDYW5BY3RpdmVOZXh0U3RlcCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgY3VycmVudEFjdGl2ZVN0ZXAuc3RhdHVzID0gUG9TdGVwcGVyU3RhdHVzLkVycm9yO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udHJvbFN0ZXBzU3RhdHVzKHN0ZXBJbmRleDogbnVtYmVyLCBzdGVwOiBQb1N0ZXBDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnVzZVBvU3RlcHMpIHtcclxuICAgICAgdGhpcy5zZXRTdGVwQXNBY3RpdmUoc3RlcCk7XHJcbiAgICAgIHRoaXMuc2V0TmV4dFN0ZXBBc0RlZmF1bHQoc3RlcCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0JlZm9yZVN0ZXAoc3RlcEluZGV4KSkge1xyXG4gICAgICAgIHRoaXMuc2V0RmluYWxTdGVwcGVyc0FzRGlzYWJsZWQoc3RlcEluZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0ZXBwZXJTdGF0dXNCeUNhbkFjdGl2ZShjYW5BY3RpdmVOZXh0U3RlcDogYm9vbGVhbik6IFBvU3RlcHBlclN0YXR1cyB7XHJcbiAgICByZXR1cm4gY2FuQWN0aXZlTmV4dFN0ZXAgPyBQb1N0ZXBwZXJTdGF0dXMuRG9uZSA6IFBvU3RlcHBlclN0YXR1cy5FcnJvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3RlcHNBbmRJbmRleChzdGVwOiBQb1N0ZXBDb21wb25lbnQgPSA8YW55Pnt9KTogeyBzdGVwczogQXJyYXk8UG9TdGVwQ29tcG9uZW50Pjsgc3RlcEluZGV4OiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCBzdGVwcyA9IHRoaXMuZ2V0UG9TdGVwcygpO1xyXG4gICAgY29uc3Qgc3RlcEluZGV4ID0gc3RlcHMuZmluZEluZGV4KHBvU3RlcCA9PiBwb1N0ZXAuaWQgPT09IHN0ZXAuaWQpO1xyXG5cclxuICAgIHJldHVybiB7IHN0ZXBzLCBzdGVwSW5kZXggfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9TdGVwcygpOiBBcnJheTxQb1N0ZXBDb21wb25lbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLnBvU3RlcHMudG9BcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0JlZm9yZVN0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVTdGVwSW5kZXggPSAoKSA9PiB0aGlzLmdldFBvU3RlcHMoKS5maW5kSW5kZXgoc3RlcCA9PiBzdGVwLmlkID09PSB0aGlzLmN1cnJlbnRBY3RpdmVTdGVwLmlkKTtcclxuXHJcbiAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRBY3RpdmVTdGVwICYmIGN1cnJlbnRBY3RpdmVTdGVwSW5kZXgoKSA+PSBzdGVwSW5kZXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZpbmFsU3RlcHBlcnNBc0Rpc2FibGVkKHN0ZXBJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFBvU3RlcHMoKVxyXG4gICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gc3RlcCAmJiBpbmRleCA+PSBzdGVwSW5kZXggKyAyKVxyXG4gICAgICAuZm9yRWFjaChzdGVwID0+IChzdGVwLnN0YXR1cyA9IFBvU3RlcHBlclN0YXR1cy5EaXNhYmxlZCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdGVwQXNBY3RpdmUoc3RlcDogUG9TdGVwQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBzdGVwLnN0YXR1cyA9IFBvU3RlcHBlclN0YXR1cy5BY3RpdmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE5leHRTdGVwQXNEZWZhdWx0KGN1cnJlbnRTdGVwOiBQb1N0ZXBDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgc3RlcHMsIHN0ZXBJbmRleCB9ID0gdGhpcy5nZXRTdGVwc0FuZEluZGV4KGN1cnJlbnRTdGVwKTtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IHN0ZXBJbmRleCArIDE7XHJcblxyXG4gICAgaWYgKG5leHRJbmRleCA8IHRoaXMucG9TdGVwcy5sZW5ndGgpIHtcclxuICAgICAgc3RlcHNbbmV4dEluZGV4XS5zdGF0dXMgPSBQb1N0ZXBwZXJTdGF0dXMuRGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXN0ZXBwZXIgcG8tc3RlcHBlci17eyBvcmllbnRhdGlvbiB9fVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1zdGVwcGVyLWNvbnRhaW5lclwiPlxyXG4gICAgPHBvLXN0ZXBwZXItc3RlcFxyXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwTGlzdDsgbGV0IGluZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlGblwiXHJcbiAgICAgIGNsYXNzPVwicG8tc3RlcHBlci1zdGVwLXBvc2l0aW9uXCJcclxuICAgICAgW3AtY2lyY2xlLWNvbnRlbnRdPVwiaW5kZXggKyAxXCJcclxuICAgICAgW3AtbGFiZWxdPVwic3RlcC5sYWJlbFwiXHJcbiAgICAgIFtwLW9yaWVudGF0aW9uXT1cIm9yaWVudGF0aW9uXCJcclxuICAgICAgW3Atc3RhdHVzXT1cInN0ZXAuc3RhdHVzXCJcclxuICAgICAgW3Atc3RlcC1pY29uc109XCJzdGVwSWNvbnNcIlxyXG4gICAgICBbcC1zdGVwLXNpemVdPVwic3RlcFNpemVcIlxyXG4gICAgICBbcC1uZXh0LXN0YXR1c109XCJwb1N0ZXBzLmdldChpbmRleCArIDEpPy5zdGF0dXNcIlxyXG4gICAgICAocC1hY3RpdmF0ZWQpPVwib25TdGVwQWN0aXZlKHN0ZXApXCJcclxuICAgICAgKHAtY2xpY2spPVwiY2hhbmdlU3RlcChpbmRleCwgc3RlcClcIlxyXG4gICAgICAocC1lbnRlcik9XCJjaGFuZ2VTdGVwKGluZGV4LCBzdGVwKVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLXN0ZXBwZXItc3RlcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cInVzZVBvU3RlcHNcIiBjbGFzcz1cInBvLXN0ZXBwZXItY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19