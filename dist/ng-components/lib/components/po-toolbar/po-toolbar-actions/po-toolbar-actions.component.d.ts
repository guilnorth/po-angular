import { TemplateRef } from '@angular/core';
import { PoToolbarAction } from '../po-toolbar-action.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @usedBy PoToolbarComponent
 *
 * @description
 *
 * O componente `po-toolbar-actions` tem como objetivo receber uma lista de ações e um ícone que podem ser personalizados.
 */
export declare class PoToolbarActionsComponent {
    /** Define uma lista de ações. */
    actions?: Array<PoToolbarAction>;
    private _actionsIcon?;
    /** Define o ícone das ações. */
    set actionsIcon(icon: string | TemplateRef<void>);
    get actionsIcon(): string | TemplateRef<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoToolbarActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoToolbarActionsComponent, "po-toolbar-actions", never, { "actions": "p-actions"; "actionsIcon": "p-actions-icon"; }, {}, never, never, false>;
}