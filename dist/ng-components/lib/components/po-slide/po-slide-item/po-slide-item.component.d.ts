import { ElementRef } from '@angular/core';
import { PoSlideContentTemplateDirective } from '../directives/po-slide-content-template.directive';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para cada item do po-slide.
 */
export declare class PoSlideItemComponent {
    itemElement: ElementRef;
    /** Ação executada ao clicar em uma imagem */
    action: Function;
    /** Texto alternativo quando a imagem não é encontrada */
    alt: string;
    /** Dados para o template customizado */
    data: Array<any>;
    /** Caminho da imagem */
    image: string;
    /** Altura da imagem */
    imageHeight: number;
    /** Template customizado */
    template: PoSlideContentTemplateDirective;
    /** Link executado ao clicar em uma imagem */
    link: string;
    isIEOrEdge: any;
    setLinkType(): "externalLink" | "internalLink" | "noLink";
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSlideItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoSlideItemComponent, "po-slide-item", never, { "action": "p-action"; "alt": "p-alt"; "data": "p-data"; "image": "p-image"; "imageHeight": "p-image-height"; "template": "p-template"; "link": "p-link"; }, {}, never, never, false>;
}
