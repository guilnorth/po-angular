import { EventEmitter } from '@angular/core';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoBreadcrumb } from '../../po-breadcrumb/po-breadcrumb.interface';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import { PoPageDetailLiterals } from './po-page-detail-literals.interface';
import * as i0 from "@angular/core";
export declare const poPageDetailLiteralsDefault: {
    en: PoPageDetailLiterals;
    es: PoPageDetailLiterals;
    pt: PoPageDetailLiterals;
    ru: PoPageDetailLiterals;
};
/**
 * @description
 *
 * O componente **po-page-detail** é utilizado como container principal para a tela de
 * detalhamento de um registro, tendo a possibilidade de usar as ações de "Voltar", "Editar" e "Remover".
 */
export declare class PoPageDetailBaseComponent {
    poPageContent: PoPageContentComponent;
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb: PoBreadcrumb;
    /**
     * Evento que será disparado ao clicar no botão de "Voltar".
     *
     * ```
     * <po-page-detail (p-back)="myBackFunction()">
     * </po-page-detail>
     * ```
     *
     * > Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.
     */
    back: EventEmitter<any>;
    /**
     * Evento que será disparado ao clicar no botão de "Editar".
     *
     * ```
     * <po-page-detail (p-edit)="myEditFunction()">
     * </po-page-detail>
     * ```
     *
     * > Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.
     */
    edit: EventEmitter<any>;
    /**
     * Evento que será disparado ao clicar no botão de "Remover".
     *
     * ```
     * <po-page-detail (p-remove)="myRemoveFunction()">
     * </po-page-detail>
     * ```
     *
     * > Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.
     */
    remove: EventEmitter<any>;
    private _literals;
    private _title;
    private language;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-detail`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageDetailLiterals = {
     *    edit: 'Edição',
     *    remove: 'Exclusão',
     *    back: 'Menu'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageDetailLiterals = {
     *    remove: 'Excluir registro permanentemente'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-detail
     *   [p-literals]="customLiterals">
     * </po-page-detail>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value: PoPageDetailLiterals);
    get literals(): PoPageDetailLiterals;
    /** Título da página. */
    set title(title: string);
    get title(): string;
    constructor(languageService: PoLanguageService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDetailBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageDetailBaseComponent, never, never, { "breadcrumb": "p-breadcrumb"; "literals": "p-literals"; "title": "p-title"; }, { "back": "p-back"; "edit": "p-edit"; "remove": "p-remove"; }, never, never, false>;
}
