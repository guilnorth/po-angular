import { PoPageJobSchedulerParametersCustomBase } from '../po-page-job-scheduler-parameters/po-page-job-scheduler-parameters-custom-base.component';
/**
 * @description
 * General interface for component class
 */
export declare interface ComponentType<T> extends Function {
    new (...args: any[]): T;
}
/**
 * @description
 * Component interface for general use of dynamic components
 */
export interface ComponentWithProperties<T> {
    /**
     * @description
     * component to dynamic render
     */
    component: ComponentType<T>;
    /**
     * @description
     * Propriedades de @Input e @Output do componente customizado em formato chave: valor
     * Events can be passed as an example:
     *
     * clickFn = (ev) => { console.log(ev, 'teste') }
     *
      properties = {
        'click': this.clickFn.bind(this),
        label: 'Test',
      }
     */
    properties?: Object;
}
/**
 * @usedBy PoPageJobSchedulerComponent
 *
 * @description
 *
 * Interfaces para as customizações das etapas de 'parametrização' e 'conclusão' do *Job Scheduler*.
 */
export interface PoJobSchedulerCustomSteps {
    /**
     * @description
     * Allows customization for parameters step
     * if pParameters is filled, it will be ignored
     */
    parameters?: ComponentWithProperties<PoPageJobSchedulerParametersCustomBase>;
    /**
     * @description
     * Allows customization for conclusion step
     * @todo will be implemented
     */
    ending?: ComponentWithProperties<any>;
}
