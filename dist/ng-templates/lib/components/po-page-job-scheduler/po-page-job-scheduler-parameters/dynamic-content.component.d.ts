import { OnInit } from '@angular/core';
import { DynamicContentDirective } from './dynamic-component.directive';
import * as i0 from "@angular/core";
export declare class DynamicContentComponent implements OnInit {
    /**
     * Componente que será renderizado dinamicamente
     */
    component: any;
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
    dataProps: Object;
    dynamicContent: DynamicContentDirective;
    constructor();
    ngOnInit(): void;
    private createComponent;
    private setInstance;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicContentComponent, "dynamic-load-component", never, { "component": "component"; "dataProps": "dataProps"; }, {}, never, never, false>;
}
