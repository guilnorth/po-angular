import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @usedBy PoButton
 *
 * @description
 *
 * Permite a exibição de ícones.
 */
export declare class PoIconComponent {
    class: string;
    private _icon;
    constructor();
    /**
     * Define o ícone a ser exibido.
     *
     * É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-button p-icon="po-icon-user" p-label="PO button"></po-button>
     * ```
     * Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-button [p-icon]="template" p-label="button template ionic"></po-button>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     */
    set icon(value: string | TemplateRef<void>);
    get icon(): string | TemplateRef<void>;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoIconComponent, "po-icon", never, { "icon": "p-icon"; }, {}, never, never, false>;
}
