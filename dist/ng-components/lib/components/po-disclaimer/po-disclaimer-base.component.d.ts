import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * O componente po-disclaimer é responsável por representar tags.
 * Seu uso é recomendado em buscas e em campos onde é necessário representar objetos selecionados,
 * como por exemplo, no po-multi-select.
 *
 */
export declare class PoDisclaimerBaseComponent {
    /**
     * Label que aparecerá dentro do po-disclaimer.
     * Quando não for definido um label será apresentada a propriedade p-value.
     */
    label?: string;
    /** Valor do po-disclaimer. */
    value: string;
    /** Nome da propriedade vinculada à este po-disclaimer. */
    property?: string;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao fechar o disclaimer.
     * Para este evento será passado como parâmetro um objeto com value, label e property.
     */
    closeAction: EventEmitter<any>;
    showDisclaimer: boolean;
    private _type;
    private _hideClose?;
    /**
     * @description
     *
     * Esta propriedade esconde o botão para fechamento do po-disclaimer, ao utilizar esta propriedade
     * sem passar valor a mesma é setada como false, onde o botão de fechamento está visível.
     *
     * @default false
     */
    set hideClose(value: boolean);
    get hideClose(): boolean;
    /**
     * @description
     *
     * Tipo do po-disclaimer. Pode ser 'default' ou 'danger'.
     *
     * @default default
     * @optional
     */
    set type(type: string);
    get type(): string;
    close(): void;
    getLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDisclaimerBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDisclaimerBaseComponent, never, never, { "label": "p-label"; "value": "p-value"; "property": "p-property"; "hideClose": "p-hide-close"; "type": "p-type"; }, { "closeAction": "p-close-action"; }, never, never, false>;
}