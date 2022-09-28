import { Component } from '@angular/core';

import { PoBreadcrumb, PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html'
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };

  component = PoButtonComponent;

  clickFn = ev => {
    console.log(ev, 'teste');
  };

  dataProps = {
    'click': this.clickFn.bind(this),
    label: 'Teste'
  };
}
