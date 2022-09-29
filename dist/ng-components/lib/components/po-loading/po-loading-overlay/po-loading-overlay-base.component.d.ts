import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoLoadingOverlayLiterals } from './interfaces/po-loading-overlay-literals.interface';
import * as i0 from "@angular/core";
export declare const poLoadingOverlayLiteralsDefault: {
    en: PoLoadingOverlayLiterals;
    es: PoLoadingOverlayLiterals;
    pt: PoLoadingOverlayLiterals;
    ru: PoLoadingOverlayLiterals;
};
/**
 *
 * @description
 *
 * Este componente mostra ao usuário uma imagem de _loading_ e bloqueia a página inteira ou o container escolhido,
 * enquanto aguarda a resposta de alguma requisição.
 */
export declare class PoLoadingOverlayBaseComponent {
    private languageService;
    private _screenLock?;
    private _text?;
    /**
     * @optional
     *
     * @description
     *
     * Define se o *overlay* será aplicado a um *container* ou a página inteira.
     *
     * Para utilizar o componente como um *container*, o elemento pai deverá receber uma posição relativa, por exemplo:
     *
     * ```
     * <div style="position: relative">
     *
     *  <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
     *  </po-chart>
     *
     *  <po-loading-overlay>
     *  </po-loading-overlay>
     * </div>
     * ```
     *
     * @default `false`
     */
    set screenLock(screenLock: boolean);
    get screenLock(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Texto a ser exibido no componente.
     *
     * > O valor padrão será traduzido acordo com o idioma configurado no [**PoI18n**](/documentation/po-i18n) ou navegador.
     *
     * @default `Carregando`
     */
    set text(value: string);
    get text(): string;
    constructor(languageService: PoLanguageService);
    private getTextDefault;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLoadingOverlayBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoLoadingOverlayBaseComponent, never, never, { "screenLock": "p-screen-lock"; "text": "p-text"; }, {}, never, never, false>;
}