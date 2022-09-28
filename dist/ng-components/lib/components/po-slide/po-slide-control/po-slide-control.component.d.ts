import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a seta que controla a passagem de itens do `po-slide`.
 */
export declare class PoSlideControlComponent {
    /** Tipo de controle que aceita os valores: 'previous' e 'next'. */
    control: string;
    /** Evento emitido ao clicar em um controle. */
    click: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSlideControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoSlideControlComponent, "po-slide-control", never, { "control": "p-control"; }, { "click": "p-click"; }, never, never, false>;
}
