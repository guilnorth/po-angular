import { TemplateRef } from '@angular/core';
import { PoToolbarAction } from './po-toolbar-action.interface';
import { PoToolbarProfile } from './po-toolbar-profile/po-toolbar-profile.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-toolbar` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade.
 */
export declare class PoToolbarBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `p-actions-icon`.
     */
    actions?: Array<PoToolbarAction>;
    /**
     * @optional
     *
     * @description
     *
     * Define um [ícone](/guides/icons) para a propriedade `p-actions`.
     *
     * É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-toolbar p-actions-icon="po-icon-user" [p-actions]="actions"></po-toolbar>
     * ```
     * Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     *
     * > Caso não haja ações definidas em `p-actions`, o ícone não será exibido.
     *
     * @default `po-icon-more`
     */
    actionsIcon?: string | TemplateRef<void>;
    /** Define o objeto que será o cabeçalho da lista de ações com as informações do perfil. */
    profile?: PoToolbarProfile;
    /** Define uma lista de ações que serão exibidas ao clicar no ícone do perfil. */
    profileActions?: Array<PoToolbarAction>;
    /** Se falso, oculta o ícone de notificações. */
    showNotification?: boolean;
    /** Título do *toolbar* e aplicação. */
    title: string;
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações da notificação.
     */
    notificationActions?: Array<PoToolbarAction>;
    private _notificationNumber?;
    /**
     * @optional
     *
     * @description
     *
     * Número de notificações.
     */
    set notificationNumber(value: number);
    get notificationNumber(): number;
    get isShowProfile(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoToolbarBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoToolbarBaseComponent, never, never, { "actions": "p-actions"; "actionsIcon": "p-actions-icon"; "profile": "p-profile"; "profileActions": "p-profile-actions"; "showNotification": "p-show-notification"; "title": "p-title"; "notificationActions": "p-notification-actions"; "notificationNumber": "p-notification-number"; }, {}, never, never, false>;
}
