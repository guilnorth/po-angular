import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-tab` renderiza uma aba na qual envolve um conteúdo HTML.
 *
 * Com este componente é possível atribuir um rótulo para auxiliar na identificação do conteúdo, ativar para que o mesmo seja exibido,
 * desabilitar para impossibilitar o acesso, bem como ocultar para indisponibilizar a aba.
 *
 * > Para controlar a navegação entre diversas abas, utilizar o componente [`po-tabs`](/documentation/po-tabs).
 */
export declare abstract class PoTabBaseComponent {
    /** Rótulo da aba. */
    label: string;
    /** Método disparado ao clicar na aba. */
    click: EventEmitter<any>;
    id?: string;
    private _active?;
    private _disabled?;
    private _hide?;
    /**
     * @optional
     *
     * @description
     *
     * Ativa a aba exibindo seu conteúdo.
     *
     * > Sugere-se utilizar na aba de conteúdo inicial.
     *
     * @default `false`
     */
    set active(active: boolean);
    get active(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a aba.
     *
     * @default `false`
     */
    set disabled(disabled: boolean);
    get disabled(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Oculta a aba.
     *
     * @default `false`
     */
    set hide(hide: boolean);
    get hide(): boolean;
    protected abstract setDisplayOnActive(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTabBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTabBaseComponent, never, never, { "label": "p-label"; "active": "p-active"; "disabled": "p-disabled"; "hide": "p-hide"; }, { "click": "p-click"; }, never, never, false>;
}