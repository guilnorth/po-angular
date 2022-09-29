import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoSlideComponent
 *
 * @description
 *
 * Esta diretiva permite a customização de um slide.
 *
 * Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.
 *  - Item: `item` determina o item do slide corrente.
 *  - Índice: `index` determina o índice do slide corrente.
 *
 * Esta diretiva pode ser usada de duas formas: explícita ou *syntax sugar*. Veja a seguir ambos, respectivamente:
 *
 * ```
 * ...
 * <po-slide
 *   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">
 *
 *   <ng-template p-slide-content-template let-item let-code="index">
 *     <div class="po-row">
 *       <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>
 *       <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
 *     </div>
 *   </ng-template>
 *
 * </po-slide>
 *
 * ...
 * ```
 *
 * ```
 * ...
 * <po-slide
 *    [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">
 *
 *    <div *p-slide-content-template="let item, let i=index" class="po-row">
 *      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
 *    </div>
 * </po-slide>
 * ...
 *
 * ```
 */
export declare class PoSlideContentTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSlideContentTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoSlideContentTemplateDirective, "[p-slide-content-template]", never, {}, {}, never, never, false>;
}