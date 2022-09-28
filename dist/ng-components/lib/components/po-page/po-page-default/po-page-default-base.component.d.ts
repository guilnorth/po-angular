import { PoLanguageService } from './../../../services/po-language/po-language.service';
import { PoBreadcrumb } from '../../po-breadcrumb/po-breadcrumb.interface';
import { PoPageAction } from '../po-page-action.interface';
import { PoPageDefaultLiterals } from './po-page-default-literals.interface';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import * as i0 from "@angular/core";
export declare const poPageDefaultLiteralsDefault: {
    en: PoPageDefaultLiterals;
    es: PoPageDefaultLiterals;
    pt: PoPageDefaultLiterals;
    ru: PoPageDefaultLiterals;
};
/**
 * @description
 *
 * O componente `po-page-default` é utilizado como o container principal para as telas sem um template definido.
 */
export declare abstract class PoPageDefaultBaseComponent {
    poPageContent: PoPageContentComponent;
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    visibleActions: Array<PoPageAction>;
    protected language: string;
    private _actions?;
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
     * Objeto com as literais usadas no `po-page-default`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageDefaultLiterals = {
     *    otherActions: 'Mais ações'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageDefaultLiterals = {
     *    otherActions: 'Ações da página'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-default
     *   [p-literals]="customLiterals">
     * </po-page-default>
     * ```
     *
     * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set literals(value: PoPageDefaultLiterals);
    get literals(): PoPageDefaultLiterals;
    /** Título da página. */
    set title(title: string);
    get title(): string;
    constructor(languageService: PoLanguageService);
    abstract setDropdownActions(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDefaultBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageDefaultBaseComponent, never, never, { "breadcrumb": "p-breadcrumb"; "actions": "p-actions"; "literals": "p-literals"; "title": "p-title"; }, {}, never, never, false>;
}
