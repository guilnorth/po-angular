import { PoToolbarAction } from '../po-toolbar-action.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @usedBy PoToolbarComponent
 *
 * @description
 *
 * O componente `po-toolbar-notification` tem como objetivo notificar o usuário de novas ações da aplicação que necessitam de atenção,
 * como por exemplo um alerta de nova mensagem.
 *
 * O mesmo também permite que a cada nova notificação seja incrementado e exibido, ou não, este número em uma *tag* ao lado do
 * ícone de notificações.
 */
export declare class PoToolbarNotificationComponent {
    /** Define uma lista de ações. */
    notificationActions?: Array<PoToolbarAction>;
    private _notificationNumber?;
    /** Define o número de notificações. */
    set notificationNumber(value: number);
    get notificationNumber(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoToolbarNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoToolbarNotificationComponent, "po-toolbar-notification", never, { "notificationActions": "p-notification-actions"; "notificationNumber": "p-notification-number"; }, {}, never, never, false>;
}