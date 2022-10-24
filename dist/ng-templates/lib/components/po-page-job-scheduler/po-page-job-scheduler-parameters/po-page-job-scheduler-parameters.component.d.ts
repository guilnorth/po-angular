import { AfterViewInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { PoJobSchedulerParametersTemplateDirective } from './po-job-scheduler-parameters-template/po-job-scheduler-parameters-template.directive';
import * as i0 from "@angular/core";
export declare class PoPageJobSchedulerParametersComponent implements AfterViewInit {
    form: NgForm;
    literals: any;
    parameters: Array<PoDynamicFormField>;
    /**
     * @optional
     *
     * @description
     * Componente customizado para parametrizações
     * @todo trocar para ng-template
     */
    parametersTemplate: PoJobSchedulerParametersTemplateDirective;
    value: any;
    valueChange: EventEmitter<any>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerParametersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageJobSchedulerParametersComponent, "po-page-job-scheduler-parameters", never, { "literals": "p-literals"; "parameters": "p-parameters"; "parametersTemplate": "p-template"; "value": "p-value"; }, { "valueChange": "p-valueChange"; }, never, never, false>;
}
