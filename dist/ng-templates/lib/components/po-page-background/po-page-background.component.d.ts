import { EventEmitter, OnInit } from '@angular/core';
import { PoSelectOption, PoLanguageService, PoLanguage } from '@po-ui/ng-components';
import * as i0 from "@angular/core";
export declare class PoPageBackgroundComponent implements OnInit {
    poLanguageService: PoLanguageService;
    /** Insere uma imagem de destaque ao lado direito do container. */
    background?: string;
    /** Idioma inicial selecionado no combo */
    initialSelectLanguage?: string;
    /** Designa se o logotipo deve desaparecer em resoluções menores. */
    hideLogo?: boolean;
    /** Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `p-background`. */
    highlightInfo?: string;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao selecionar alguma opção no seletor de idiomas.
     * Para este evento será passado como parâmetro o valor de idioma selecionado.
     */
    selectedLanguage: EventEmitter<string>;
    selectedLanguageOption: string;
    private _logo?;
    private _secondaryLogo?;
    private _showSelectLanguage?;
    private _languagesList;
    private _selectLanguageOptions;
    /** Lista de idiomas para o combo box */
    set languagesList(value: Array<PoLanguage>);
    get languagesList(): Array<PoLanguage>;
    /** Caminho para a logomarca localizada na parte superior. */
    set logo(value: any);
    get logo(): any;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada no rodapé.
     */
    set secondaryLogo(value: any);
    get secondaryLogo(): any;
    /** Define se o seletor de idiomas deve ser exibido. */
    set showSelectLanguage(showSelectLanguage: boolean);
    get showSelectLanguage(): boolean;
    constructor(poLanguageService: PoLanguageService);
    ngOnInit(): void;
    onChangeLanguage(): void;
    get selectLanguageOptions(): Array<PoSelectOption>;
    private setLanguageOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageBackgroundComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageBackgroundComponent, "po-page-background", never, { "background": "p-background"; "initialSelectLanguage": "p-initial-language"; "hideLogo": "p-hide-logo"; "highlightInfo": "p-highlight-info"; "languagesList": "p-languages"; "logo": "p-logo"; "secondaryLogo": "p-secondary-logo"; "showSelectLanguage": "p-show-select-language"; }, { "selectedLanguage": "p-selected-language"; }, never, ["*"], false>;
}