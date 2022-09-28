import { EventEmitter } from '@angular/core';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoBreadcrumb } from '../../po-breadcrumb/po-breadcrumb.interface';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import { PoPageEditLiterals } from './po-page-edit-literals.interface';
import * as i0 from "@angular/core";
export declare const poPageEditLiteralsDefault: {
    en: PoPageEditLiterals;
    es: PoPageEditLiterals;
    pt: PoPageEditLiterals;
    ru: PoPageEditLiterals;
};
/**
 * @description
 *
 * O componente **po-page-edit** é utilizado como container principal para tela de edição ou adição de um
 * registro, tendo a possibilidade de usar as ações de "Salvar", "Salvar e Novo" e "Cancelar".
 *
 * Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `p-disable-submit`.
 * Esta propriedade pode ser utilizada para desabilitar os botões caso exista um formulário inválido na página ou alguma
 * regra de negócio não tenha sido atendida.
 */
export declare class PoPageEditBaseComponent {
    poPageContent: PoPageContentComponent;
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    /** Desabilita botões de submissão (save e saveNew) */
    disableSubmit?: boolean;
    /**
     * Evento que será disparado ao clicar no botão de "Cancelar".
     *
     * ```
     * <po-page-edit (p-cancel)="myCancelFunction()">
     * </po-page-edit>
     * ```
     *
     * > Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.
     */
    cancel: EventEmitter<any>;
    /**
     * Evento que será disparado ao clicar no botão de "Salvar".
     *
     * ```
     * <po-page-edit (p-save)="mySaveFunction()">
     * </po-page-edit>
     * ```
     *
     * > Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.
     */
    save: EventEmitter<any>;
    /**
     * Evento que será disparado ao clicar no botão de "Salvar e Novo".
     *
     * ```
     * <po-page-edit (p-save-new)="mySaveNewFunction()">
     * </po-page-edit>
     * ```
     *
     * > Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.
     */
    saveNew: EventEmitter<any>;
    private _literals;
    private _title;
    private language;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-edit`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageEditLiterals = {
     *    cancel: 'Voltar',
     *    save: 'Confirmar',
     *    saveNew: 'Confirmar e criar um novo'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageEditLiterals = {
     *    cancel: 'Cancelar processo'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-edit
     *   [p-literals]="customLiterals">
     * </po-page-edit>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value: PoPageEditLiterals);
    get literals(): PoPageEditLiterals;
    /** Título da página. */
    set title(title: string);
    get title(): string;
    constructor(languageService: PoLanguageService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageEditBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageEditBaseComponent, never, never, { "breadcrumb": "p-breadcrumb"; "disableSubmit": "p-disable-submit"; "literals": "p-literals"; "title": "p-title"; }, { "cancel": "p-cancel"; "save": "p-save"; "saveNew": "p-save-new"; }, never, never, false>;
}
