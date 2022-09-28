import { Input, OnInit, ViewContainerRef, Component, ViewChild, EventEmitter } from '@angular/core';
import { DynamicContentDirective } from './dynamic-component.directive';

@Component({
  selector: 'dynamic-load-component',
  template: ` <ng-template dynamicContent></ng-template> `
})
export class DynamicContentComponent implements OnInit {
  /**
   * Componente que será renderizado dinamicamente
   */
  @Input() component: any;
  /**
   * Propriedades de @Input e @Output do componente em formato chave: valor
   * Pode ser passado eventos como exemplo:
   * 
   * clickFn = (ev) => { console.log(ev, 'teste') }
   * 
    dataProps = {
    'click': this.clickFn.bind(this),
    label: 'Teste',
    }
   */
  @Input() dataProps: Object;

  @ViewChild(DynamicContentDirective, { static: true }) dynamicContent!: DynamicContentDirective;

  constructor() {}

  ngOnInit() {
    const componentRef = this.createComponent();
    this.setInstance(componentRef);
  }

  private createComponent() {
    const viewContainerRef: ViewContainerRef = this.dynamicContent.viewContainerRef;
    viewContainerRef.clear();
    return viewContainerRef.createComponent<any>(this.component);
  }

  private setInstance(componentRef) {
    if (typeof this.dataProps === 'object' && this.dataProps !== null) {
      Object.keys(this.dataProps).forEach(key => {
        if (componentRef.instance[key] instanceof EventEmitter) {
          // subscribe function to EventEmitter
          componentRef.instance[key].subscribe(
            ev => typeof this.dataProps[key] === 'function' && this.dataProps[key](ev)
          );
        } else {
          componentRef.instance[key] = this.dataProps[key];
        }
      });
    }
  }
}
