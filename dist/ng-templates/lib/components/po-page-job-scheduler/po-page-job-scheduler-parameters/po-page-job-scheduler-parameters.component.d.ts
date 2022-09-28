import { AfterViewInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField } from '@po-ui/ng-components';
import * as i0 from "@angular/core";
export declare class PoPageJobSchedulerParametersComponent implements AfterViewInit {
    form: NgForm;
    literals: any;
    parameters: Array<PoDynamicFormField>;
    /**
     * Componente customizado para parametrizações
     */
    component: any;
    /**
     * Propriedades de @Input e @Output do componente customizado em formato chave: valor
     */
    dataProps: Object;
    value: any;
    valueChange: EventEmitter<any>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerParametersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageJobSchedulerParametersComponent, "po-page-job-scheduler-parameters", never, { "literals": "p-literals"; "parameters": "p-parameters"; "component": "p-component"; "dataProps": "p-data-props"; "value": "p-value"; }, { "valueChange": "p-valueChange"; }, never, never, false>;
}
