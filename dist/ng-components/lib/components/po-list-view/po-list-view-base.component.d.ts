import { EventEmitter } from '@angular/core';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoListViewAction } from './interfaces/po-list-view-action.interface';
import { PoListViewLiterals } from './interfaces/po-list-view-literals.interface';
import * as i0 from "@angular/core";
export declare const poListViewLiteralsDefault: {
    en: PoListViewLiterals;
    es: PoListViewLiterals;
    pt: PoListViewLiterals;
    ru: PoListViewLiterals;
};
/**
 * @description
 *
 * Componente de lista que recebe um array de objetos e renderiza de forma dinâmica os dados de
 * acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de *templates*
 *  **[p-list-view-content-template](/documentation/po-list-view-content-template)** e
 * **[p-list-view-detail-template](/documentation/po-list-view-detail-template)**.
 *
 * O componente disponibiliza uma área específica para exibição informações adicionais,
 * através da diretiva **[p-list-view-detail-template](/documentation/po-list-view-detail-template)**.
 */
export declare class PoListViewBaseComponent {
    /** Recebe uma propriedade que será utilizada para recuperar o valor do objeto que será usado como link para o título. */
    propertyLink?: string;
    /** Recebe uma propriedade que será utilizada para recuperar o valor do objeto que será exibido como o título de cada item. */
    propertyTitle?: string;
    /**
     * @optional
     *
     * @description
     *
     * Recebe uma ação, que será executada quando clicar no botão "Carregar mais resultados".
     *
     * > Caso nenhuma ação for definida o mesmo não ficará visível.
     */
    showMore: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Ação que será executada ao clicar no título.
     *
     * Ao ser disparado, o método inserido na ação irá receber como parâmetro o item da lista clicado.
     */
    titleAction: EventEmitter<any>;
    popupTarget: any;
    selectAll: boolean;
    showHeader: boolean;
    private _actions;
    private _height;
    private _hideSelectAll;
    private _items;
    private _literals;
    private _select;
    private _showMoreDisabled;
    private language;
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações que serão exibidas no componente.
     */
    set actions(value: Array<PoListViewAction>);
    get actions(): Array<PoListViewAction>;
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do `po-list-view` em *pixels*.
     */
    set height(height: number);
    get height(): number;
    /**
     * @description
     *
     * Esconde o *checkbox* para seleção de todos os itens.
     *
     * @default `false`
     */
    set hideSelectAll(hideSelectAll: boolean);
    get hideSelectAll(): boolean;
    /** Lista de itens que serão exibidos no componente. */
    set items(value: Array<any>);
    get items(): Array<any>;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-list-view`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoListViewLiterals = {
     *    hideDetail: 'Ocultar detalhes completamente',
     *    loadMoreData: 'Mais dados',
     *    showDetail: 'Mostrar mais detalhes',
     *    selectAll: 'Selecionar todos os itens'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoListViewLiterals = {
     *    showDetail: 'Mostrar mais detalhes'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-list-view
     *   [p-literals]="customLiterals">
     * </po-list-view>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value: PoListViewLiterals);
    get literals(): PoListViewLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Habilita um *checkbox* para cada item da lista. Todos os items possuem a propriedade dinâmica `$selected` para identificar se o
     * item está selecionado, por exemplo:
     *
     * ```
     *  item.$selected
     *
     *  // ou
     *
     *  item['$selected']
     * ```
     *
     * @default `false`
     */
    set select(select: boolean);
    get select(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o botão `Carregar Mais Resultados` será desabilitado.
     */
    set showMoreDisabled(value: boolean);
    get showMoreDisabled(): boolean;
    constructor(languageService: PoLanguageService);
    onClickAction(listViewAction: PoListViewAction, item: any): void;
    onShowMore(): void;
    runTitleAction(listItem: any): void;
    selectAllListItems(): void;
    selectListItem(row: any): void;
    private deleteInternalAttrs;
    private checkIfItemsAreSelected;
    private showMainHeader;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoListViewBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoListViewBaseComponent, never, never, { "propertyLink": "p-property-link"; "propertyTitle": "p-property-title"; "actions": "p-actions"; "height": "p-height"; "hideSelectAll": "p-hide-select-all"; "items": "p-items"; "literals": "p-literals"; "select": "p-select"; "showMoreDisabled": "p-show-more-disabled"; }, { "showMore": "p-show-more"; "titleAction": "p-title-action"; }, never, never, false>;
}