import { AfterContentInit, ChangeDetectorRef, QueryList } from '@angular/core';
import { PoStepComponent } from './po-step/po-step.component';
import { PoStepperBaseComponent } from './po-stepper-base.component';
import { PoStepperItem } from './po-stepper-item.interface';
import * as i0 from "@angular/core";
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
export declare class PoStepperComponent extends PoStepperBaseComponent implements AfterContentInit {
    private changeDetector;
    poSteps: QueryList<PoStepComponent>;
    private currentActiveStep;
    get currentStepIndex(): number;
    get stepList(): QueryList<PoStepComponent> | Array<PoStepperItem>;
    get usePoSteps(): boolean;
    constructor(changeDetector: ChangeDetectorRef);
    ngAfterContentInit(): void;
    /**
     * Altera o status do *step* para ativo.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     *
     * @param {number} index Índice do `po-step` que se deseja ativar.
     */
    active(index: number): void;
    /**
     * Ativa o primeiro *step*.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     */
    first(): void;
    /**
     * Ativa o próximo *step*.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     */
    next(): void;
    /**
     * Ativa o *step* anterior.
     *
     * > Este método é valido apenas para as implementações que utilizam o componente [**po-step**](/documentation/po-step).
     */
    previous(): void;
    changeStep(stepIndex: number, step?: PoStepComponent): void;
    onStepActive(step: PoStepComponent): void;
    trackByFn(step: PoStepComponent): string;
    private activeFirstStep;
    private allowNextStep;
    private canActiveNextStep;
    private controlStepsStatus;
    private getStepperStatusByCanActive;
    private getStepsAndIndex;
    private getPoSteps;
    private isBeforeStep;
    private setFinalSteppersAsDisabled;
    private setStepAsActive;
    private setNextStepAsDefault;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoStepperComponent, "po-stepper", never, {}, {}, ["poSteps"], ["*"], false>;
}