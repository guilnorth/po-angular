import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Este é um componente interno utilizado pelo po-disclaimer-group, se comporta como um botão e recebe uma ação para remover todos os
 * po-disclaimers do grupo.
 */
export declare class PoDisclaimerRemoveComponent {
    /** Texto exibido.  */
    label?: string;
    /** Ação para remover todos.  */
    removeAllAction: EventEmitter<any>;
    removeAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDisclaimerRemoveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDisclaimerRemoveComponent, "po-disclaimer-remove", never, { "label": "p-label"; }, { "removeAllAction": "p-remove-all-action"; }, never, never, false>;
}