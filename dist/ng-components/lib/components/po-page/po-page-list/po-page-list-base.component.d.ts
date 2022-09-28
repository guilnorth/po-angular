import { PoLanguageService } from './../../../services/po-language/po-language.service';
import { PoBreadcrumb } from '../../po-breadcrumb/po-breadcrumb.interface';
import { PoDisclaimerGroup } from '../../po-disclaimer-group/po-disclaimer-group.interface';
import { PoPageAction } from '../po-page-action.interface';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import { PoPageFilter } from './../po-page-filter.interface';
import { PoPageListLiterals } from './po-page-list-literals.interface';
import * as i0 from "@angular/core";
export declare const poPageListLiteralsDefault: {
    en: PoPageListLiterals;
    es: PoPageListLiterals;
    pt: PoPageListLiterals;
    ru: PoPageListLiterals;
};
/**
 * @description
 *
 * O componente `po-page-list` é utilizado como o container principal para as telas de listagem de dados,
 * podendo ser apresentado como lista ou tabela.
 *
 * Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma função que será executada no momento
 * da filtragem. Este comportamento pode ser acionado tanto ao *click* do ícone [po-icon-search](/guides/icons)
 * quanto ao pressionar da tecla *ENTER* quando o foco estiver no campo de pesquisa.
 *
 * Para facilitar a manipulação e visualização dos filtros aplicados, é possível também utilizar o componente
 * [`po-disclaimer-group`](/documentation/po-disclaimer-group).
 */
export declare abstract class PoPageListBaseComponent {
    poPageContent: PoPageContentComponent;
    /**
     * @optional
     *
     * @description
     *
     * Objeto que implementa as propriedades da interface `PoBreadcrumb`.
     */
    breadcrumb?: PoBreadcrumb;
    /**
     * @description
     *
     * Objeto que implementa as propriedades da interface `PoPageFilter`.
     */
    filter: PoPageFilter;
    visibleActions: Array<PoPageAction>;
    protected language: string;
    protected resizeListener: () => void;
    private _actions?;
    private _disclaimerGroup?;
    private _literals;
    private _title;
    /**
     * @optional
     *
     * @description
     *
     * Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`.
     */
    set actions(actions: Array<PoPageAction>);
    get actions(): Array<PoPageAction>;
    /**
     * @optional
     *
     * @description
     *
     * Objeto que implementa as propriedades da interface `PoDisclaimerGroup`.
     */
    set disclaimerGroup(value: PoDisclaimerGroup);
    get disclaimerGroup(): PoDisclaimerGroup;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-list`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageListLiterals = {
     *    otherActions: 'Mais ações'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageListLiterals = {
     *    otherActions: 'Ações da página'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-list
     *   [p-literals]="customLiterals">
     * </po-page-list>
     * ```
     *
     * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set literals(value: PoPageListLiterals);
    get literals(): PoPageListLiterals;
    /** Título da página. */
    set title(title: string);
    get title(): string;
    constructor(languageService: PoLanguageService);
    abstract setDropdownActions(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageListBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageListBaseComponent, never, never, { "breadcrumb": "p-breadcrumb"; "filter": "p-filter"; "actions": "p-actions"; "disclaimerGroup": "p-disclaimer-group"; "literals": "p-literals"; "title": "p-title"; }, {}, never, never, false>;
}
