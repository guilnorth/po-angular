import { EventEmitter } from '@angular/core';
import { PoBreadcrumb, PoLanguageService, PoPageAction } from '@po-ui/ng-components';
import { PoPageDynamicSearchLiterals } from './po-page-dynamic-search-literals.interface';
import { PoAdvancedFilterLiterals } from './po-advanced-filter/po-advanced-filter-literals.interface';
import { PoPageDynamicSearchOptions } from './po-page-dynamic-search-options.interface';
import { PoPageDynamicSearchFilters } from './po-page-dynamic-search-filters.interface';
import * as i0 from "@angular/core";
export declare const poPageDynamicSearchLiteralsDefault: {
    en: PoPageDynamicSearchLiterals;
    es: PoPageDynamicSearchLiterals;
    pt: PoPageDynamicSearchLiterals;
    ru: PoPageDynamicSearchLiterals;
};
/**
 * @description
 *
 * Componente com as ações de pesquisa já definidas, bastando que o desenvolvedor implemente apenas a chamada para as APIs
 * e exiba as informações.
 */
export declare abstract class PoPageDynamicSearchBaseComponent {
    /** Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`. */
    actions?: Array<PoPageAction>;
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    /**
     * @optional
     *
     * @description
     *
     * Mantém na busca avançada os valores preenchidos do último filtro realizado pelo usuário.
     *
     * @default `false`
     */
    keepFilters: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
     *
     * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
     * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
     * rápida também na lista de `disclaimers`.
     *
     * > Os valores que são emitidos no `p-quick-search` e no `p-advanced-search`
     * permanecem separados durante a emissão dos valores alterados. A concatenação
     * é apenas nos `disclaimers`.
     *
     * @default `false`
     */
    concatFilters: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Oculta o botão para remover todos os *disclaimers* do grupo.
     *
     * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
     *
     * @default `false`
     */
    hideRemoveAllDisclaimer?: boolean;
    /**
     * Função ou serviço que será executado na inicialização do componente.
     *
     * A propriedade aceita os seguintes tipos:
     * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
     * - `function`: Método que será executado.
     *
     * O retorno desta função deve ser do tipo `PoPageDynamicSearchOptions`,
     * onde o usuário poderá customizar novos filtros, breadcrumb, title e actions
     *
     * Por exemplo:
     *
     * ```
     * getPageOptions(): PoPageDynamicSearchOptions {
     * return {
     *   actions: [
     *     { label: 'Find on Google' },
     *   ],
     *   filters: [
     *     { property: 'idCard', gridColumns: 6 }
     *   ]
     * };
     * }
     *
     * ```
     * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
     * ```
     *  [p-load]="onLoadOptions.bind(this)"
     * ```
     */
    onLoad: string | (() => PoPageDynamicSearchOptions);
    /** Título da página. */
    title: string;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao executar a pesquisa avançada, o mesmo irá repassar um objeto com os valores preenchidos no modal de pesquisa.
     *
     * > Campos não preenchidos não irão aparecer no objeto passado por parâmetro.
     */
    advancedSearch: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao remover um ou todos os disclaimers pelo usuário.
     */
    changeDisclaimers: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
     */
    quickSearch: EventEmitter<string>;
    advancedFilterLiterals: PoAdvancedFilterLiterals;
    private _filters;
    private _hideCloseDisclaimers;
    private _literals;
    private _quickSearchWidth;
    private previousFilters;
    private language;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-dynamic-search`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageDynamicSearchLiterals = {
     *    disclaimerGroupTitle: 'Filtros aplicados:',
     *    filterTitle: 'Filtro avançado',
     *    filterCancelLabel: 'Fechar',
     *    filterConfirmLabel: 'Aplicar',
     *    quickSearchLabel: 'Valor pesquisado:',
     *    searchPlaceholder: 'Pesquise aqui'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageDynamicSearchLiterals = {
     *    filterTitle: 'Filtro avançado'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-dynamic-search
     *   [p-literals]="customLiterals">
     * </po-page-dynamic-search>
     * ```
     *
     * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set literals(value: PoPageDynamicSearchLiterals);
    get literals(): PoPageDynamicSearchLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Lista dos campos usados na busca avançada. Caso o mesmo não seja passado a busca avançada não será exibida.
     */
    set filters(filters: Array<PoPageDynamicSearchFilters>);
    get filters(): Array<PoPageDynamicSearchFilters>;
    /**
     * @optional
     *
     * @description
     *
     * Largura do campo de busca, utilizando o *Grid System*,
     * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
     * conforme resolução de tela para manter a consistência do layout.
     */
    set quickSearchWidth(value: number);
    get quickSearchWidth(): number;
    /**
     * @optional
     *
     * @description
     *
     * Lista de filtros que terão a opção de fechar ocultada
     * em seu respectivo disclaimer. Utilizar o atributo `property` do filtro.
     *
     * Exemplo de utilização:
     * ```
     * ['city','name'];
     * ```
     */
    set hideCloseDisclaimers(value: Array<string>);
    get hideCloseDisclaimers(): Array<string>;
    constructor(languageService: PoLanguageService);
    protected setAdvancedFilterLiterals(literals: PoPageDynamicSearchLiterals): void;
    private stringify;
    abstract onChangeFilters(filters: Array<PoPageDynamicSearchFilters>): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicSearchBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageDynamicSearchBaseComponent, never, never, { "actions": "p-actions"; "breadcrumb": "p-breadcrumb"; "keepFilters": "p-keep-filters"; "concatFilters": "p-concat-filters"; "hideRemoveAllDisclaimer": "p-hide-remove-all-disclaimer"; "onLoad": "p-load"; "title": "p-title"; "literals": "p-literals"; "filters": "p-filters"; "quickSearchWidth": "p-quick-search-width"; "hideCloseDisclaimers": "p-hide-close-disclaimers"; }, { "advancedSearch": "p-advanced-search"; "changeDisclaimers": "p-change-disclaimers"; "quickSearch": "p-quick-search"; }, never, never, false>;
}
