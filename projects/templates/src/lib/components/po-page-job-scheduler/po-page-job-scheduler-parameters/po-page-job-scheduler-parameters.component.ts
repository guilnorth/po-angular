import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'po-page-job-scheduler-parameters',
  templateUrl: 'po-page-job-scheduler-parameters.component.html'
})
export class PoPageJobSchedulerParametersComponent implements AfterViewInit {
  @ViewChild('parametersForm') form: NgForm;

  @Input('p-literals') literals = <any>{};

  @Input('p-parameters') parameters: Array<PoDynamicFormField> = [];

  /**
   * @description
   * Componente customizado para parametrizações
   * @todo criar interface
   */
  @Input('p-component') component: any;

  /**
   * @description
   * Propriedades de @Input e @Output do componente customizado em formato chave: valor
   */
  @Input('p-data-props') dataProps: Object;

  @Input('p-value') value;

  @Output('p-valueChange') valueChange: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit() {
    if (this.form) {
      setTimeout(() => {
        this.form.valueChanges.subscribe(value => {
          this.valueChange.emit(value);
        });
      });
    }
  }
}
