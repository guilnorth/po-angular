import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoMenuComponent
 *
 * @description
 *
 * Esta diretiva permite adicionar um conteúdo personalizado entre a logo e o campo de filtro do cabeçalho do
 * [`po-menu`](/documentation/po-menu).
 *
 * Para personalizar o conteúdo do cabeçalho deve-se utilizar a diretiva `p-menu-header-template` dentro da *tag* do
 * [`po-menu`](/documentation/po-menu). Podendo ser utilizada de duas formas:
 *
 * Com `ng-template`
 * ```
 * ...
 * <po-menu [p-menus]="menus">
 *   <ng-template p-menu-header-template>
 *     ...
 *   </ng-template>
 * </po-menu>
 * ...
 * ```
 *
 * ou com *syntax sugar*
 * ```
 * ...
 * <po-menu [p-menus]="menus">
 *   <div *p-menu-header-template>
 *     ...
 *   </div>
 * </po-menu>
 * ...
 * ```
 *
 * > Quando o menu estiver colapsado ou tela for _mobile_ o conteúdo personalizado não será exibido.
 */
export declare class PoMenuHeaderTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuHeaderTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoMenuHeaderTemplateDirective, "[p-menu-header-template]", never, {}, {}, never, never, false>;
}
