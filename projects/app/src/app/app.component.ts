import { Component, Input, OnInit } from '@angular/core';
import { PoJobSchedulerCustomSteps } from '../../../templates/src/lib/components/po-page-job-scheduler/interfaces/po-job-scheduler-custom-steps.interface';
import { PoPageJobSchedulerParametersCustomBase } from '../../../templates/src/lib/components/po-page-job-scheduler/po-page-job-scheduler-parameters/po-page-job-scheduler-parameters-custom-base.component';
import { PoBreadcrumb, PoDynamicFormComponent } from '../../../ui/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   //this.selected = undefined
   setTimeout(()=>{ this.selected = this.customSteps[0] },0)
   //this.selected = this.customSteps[0]
   //this.componentDirect = this.selected.parameters.component
  }

  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };

 // component = TestComponent;
  component;

  clickFn = ev => {
    console.log(ev, 'teste');
  };

  componentDirect
  
  pParameter =  []/* [{
    property: 'hobbies',
    divider: 'MORE INFO',
    gridColumns: 6,
    gridSmColumns: 12,
    optional: true,
    options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
    optionsMulti: true
  }] */
  
  customSteps: PoJobSchedulerCustomSteps[] = [{
    parameters: {
      component: TestComponent,
      properties: {fields: [{property: 'texto'}]}
    }
  },

  {
    parameters: {
      component: TestComponent2,
      properties: {fields: [{property: 'texto 22'}]}
    }
  }
]
  selected;
  setComponent() {
    console.log('call setComponent', this.customSteps[1])
    this.selected.parameters.component = undefined
   this.selected = this.customSteps[1]
   this.componentDirect = this.selected.parameters.component;
  }
}


@Component({
  selector: 'test-1',
  template: `
    <input type="text">
  `
})
export class TestComponent implements OnInit, PoPageJobSchedulerParametersCustomBase{
  ngOnInit(): void {
    console.log('init ....')
  }

  constructor(){
  }

  disabledAdvance: boolean = false;

  getExecutionParameter() {
    return {
      "SourceUsuario": "mestre",
        "RemoveOldPermissions": false,
        "CopyToAllApplications": true,
        "CodSistema": "P",
        "NewUser": {
            "Usuario": null,
            "Nome": null,
            "Senha": null,
            "Email": null,
            "codAcesso": null,
            "UsuariodeRede": null
        },
    }
  };
}

@Component({
  selector: 'test-2',
  template: `<p>change</p>`
})
export class TestComponent2 implements OnInit, PoPageJobSchedulerParametersCustomBase {

  @Input() tProp: string
  ngOnInit(): void {
      console.log('teste TestComponent', this.tProp)
  }

  disabledAdvance: boolean = false;

  getExecutionParameter() {
    return {}
  }

}