import { Directive, Output, EventEmitter } from '@angular/core';

/**
 * @description
 * Classe base que deve ser estendida para o uso de componente customizado na etapa de parametrização
 */
@Directive()
export abstract class PoPageJobSchedulerParametersCustomBase {
  /**
   * @description
   * Event Emitter used to allow advancing to the wizard step
   */
  // @Output('t-continue-to-wizard') tContinueToWizard = new EventEmitter();

  disabledAdvance: boolean = false; // isDisabledAdvance() function on po-page-job-scheduler

  getExecutionParameter: () => Object;
}

/* //@Directive()
export interface PoPageJobSchedulerParametersCustomBase {
    /**
     * @description
     * Event Emitter used to allow advancing to the wizard step
     *
   // @Output('t-continue-to-wizard') tContinueToWizard = new EventEmitter();

    disabledAdvance: boolean; // isDisabledAdvance() function on po-page-job-scheduler

    getExecutionParameter: () => Object;
} */
