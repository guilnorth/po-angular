import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @usedBy PoComboComponent
 *
 * @description
 *
 * Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.
 *
 * > Quando utilizada em dispositivos *mobile* será exibido o componente nativo.
 *
 * Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `p-combo-option-template` com `ng-template`
 * dentro da *tag* `po-combo`.
 *
 * Para obter a referência do item atual utilize `let-option`, com isso você terá acesso aos valores e poderá personalizar sua exibição.
 *
 * Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em *syntax sugar*. Veja a seguir ambos, respectivamente:
 *
 * ```
 * ...
 * <po-combo
 *   name="combo"
 *   [(ngModel)]="combo"
 *   [p-options]="options">
 *     <ng-template p-combo-option-template let-option>
 *       <option-template [option]="option"></option-template>
 *     </ng-template>
 * </po-combo>
 * ...
 * ```
 *
 * ```
 * ...
 * <po-combo
 *   name="combo"
 *   [(ngModel)]="combo"
 *   [p-options]="options">
 *     <div *p-combo-option-template="let option">
 *       <option-template [option]="option"></option-template>
 *     </div>
 * </po-combo>
 * ...
 *
 * ```
 * Para o caso de personalização de opções com agrupamentos, deve-se seguir a mesma orientação acima. Porém, cabe ao desenvolvedor
 * a responsabilidade de estilização dos elementos da lista, tais como título e links dos grupos. Abaixo há um exemplo de aplicação:
 *
 * ```
 * ...
 * <ng-template p-combo-option-template let-option>
 *   <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
 *   <ng-template #optionsGroupTitle>
 *     <p class="po-combo-item-title" [innerHtml]="option.label"></p>
 *   </ng-template>
 *   <ng-template #optionsGroupList>
 *     <div class="po-combo-item">
 *       <div class="po-row">
 *         <po-avatar class="po-md-1" p-size="sm"></po-avatar>
 *         <div class="po-md-11" [innerHtml]="option.label"></div>
 *       </div>
 *     </div>
 *   </ng-template>
 * </ng-template>
 * ...
 *
 * ```
 */
export declare class PoComboOptionTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoComboOptionTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoComboOptionTemplateDirective, "[p-combo-option-template]", never, {}, {}, never, never, false>;
}
