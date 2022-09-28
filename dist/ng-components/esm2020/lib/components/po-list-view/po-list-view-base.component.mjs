import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { poLocaleDefault } from '../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
export const poListViewLiteralsDefault = {
    en: {
        hideDetails: 'Hide details',
        loadMoreData: 'Load more data',
        noData: 'No data found',
        selectAll: 'Select all',
        showDetails: 'Show details'
    },
    es: {
        hideDetails: 'Ocultar detalles',
        loadMoreData: 'Cargar más resultados',
        noData: 'Datos no encontrados',
        selectAll: 'Seleccionar todos',
        showDetails: 'Mostrar detalles'
    },
    pt: {
        hideDetails: 'Ocultar detalhes',
        loadMoreData: 'Carregar mais resultados',
        noData: 'Nenhum dado encontrado',
        selectAll: 'Selecionar todos',
        showDetails: 'Exibir detalhes'
    },
    ru: {
        hideDetails: 'Скрыть детали',
        loadMoreData: 'Загрузить больше результатов',
        noData: 'Данные не найдены',
        selectAll: 'Выбрать все',
        showDetails: 'Посмотреть детали'
    }
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
export class PoListViewBaseComponent {
    constructor(languageService) {
        /**
         * @optional
         *
         * @description
         *
         * Recebe uma ação, que será executada quando clicar no botão "Carregar mais resultados".
         *
         * > Caso nenhuma ação for definida o mesmo não ficará visível.
         */
        this.showMore = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Ação que será executada ao clicar no título.
         *
         * Ao ser disparado, o método inserido na ação irá receber como parâmetro o item da lista clicado.
         */
        this.titleAction = new EventEmitter();
        this.selectAll = false;
        this.showHeader = false;
        this.language = poLocaleDefault;
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações que serão exibidas no componente.
     */
    set actions(value) {
        this._actions = Array.isArray(value) ? value : [];
    }
    get actions() {
        return this._actions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do `po-list-view` em *pixels*.
     */
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    /**
     * @description
     *
     * Esconde o *checkbox* para seleção de todos os itens.
     *
     * @default `false`
     */
    set hideSelectAll(hideSelectAll) {
        this._hideSelectAll = convertToBoolean(hideSelectAll);
        this.showMainHeader();
    }
    get hideSelectAll() {
        return this._hideSelectAll;
    }
    /** Lista de itens que serão exibidos no componente. */
    set items(value) {
        this._items = Array.isArray(value) ? value : [];
    }
    get items() {
        return this._items;
    }
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
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poListViewLiteralsDefault[poLocaleDefault],
                ...poListViewLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poListViewLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poListViewLiteralsDefault[this.language];
    }
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
    set select(select) {
        this._select = convertToBoolean(select);
        this.showMainHeader();
    }
    get select() {
        return this._select;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o botão `Carregar Mais Resultados` será desabilitado.
     */
    set showMoreDisabled(value) {
        this._showMoreDisabled = convertToBoolean(value);
    }
    get showMoreDisabled() {
        return this._showMoreDisabled;
    }
    onClickAction(listViewAction, item) {
        const cleanItem = this.deleteInternalAttrs(item);
        if (listViewAction.action) {
            listViewAction.action(cleanItem);
        }
    }
    onShowMore() {
        this.showMore.emit();
    }
    runTitleAction(listItem) {
        const itemWithPublicProperties = this.deleteInternalAttrs(listItem);
        this.titleAction.emit(itemWithPublicProperties);
    }
    selectAllListItems() {
        if (!this.hideSelectAll) {
            this.selectAll = !this.selectAll;
            this.items.forEach(item => {
                item.$selected = this.selectAll;
            });
        }
    }
    selectListItem(row) {
        row.$selected = !row.$selected;
        this.selectAll = this.checkIfItemsAreSelected(this.items);
    }
    deleteInternalAttrs(item) {
        const itemCopy = item ? { ...item } : undefined;
        for (const key in itemCopy) {
            if (itemCopy.hasOwnProperty(key) && key.startsWith('$')) {
                delete itemCopy[key];
            }
        }
        return itemCopy;
    }
    checkIfItemsAreSelected(items) {
        const someCheckedOrIndeterminate = item => item.$selected || item.$selected === null;
        const everyChecked = item => item.$selected;
        if (items.every(everyChecked)) {
            return true;
        }
        if (items.some(someCheckedOrIndeterminate)) {
            return null;
        }
        return false;
    }
    showMainHeader() {
        this.showHeader = !!(this.select && !this.hideSelectAll && this.items && this.items.length);
    }
}
PoListViewBaseComponent.ɵfac = function PoListViewBaseComponent_Factory(t) { return new (t || PoListViewBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoListViewBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoListViewBaseComponent, inputs: { propertyLink: ["p-property-link", "propertyLink"], propertyTitle: ["p-property-title", "propertyTitle"], actions: ["p-actions", "actions"], height: ["p-height", "height"], hideSelectAll: ["p-hide-select-all", "hideSelectAll"], items: ["p-items", "items"], literals: ["p-literals", "literals"], select: ["p-select", "select"], showMoreDisabled: ["p-show-more-disabled", "showMoreDisabled"] }, outputs: { showMore: "p-show-more", titleAction: "p-title-action" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoListViewBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { propertyLink: [{
            type: Input,
            args: ['p-property-link']
        }], propertyTitle: [{
            type: Input,
            args: ['p-property-title']
        }], showMore: [{
            type: Output,
            args: ['p-show-more']
        }], titleAction: [{
            type: Output,
            args: ['p-title-action']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], hideSelectAll: [{
            type: Input,
            args: ['p-hide-select-all']
        }], items: [{
            type: Input,
            args: ['p-items']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], select: [{
            type: Input,
            args: ['p-select']
        }], showMoreDisabled: [{
            type: Input,
            args: ['p-show-more-disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGlzdC12aWV3LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWxpc3Qtdmlldy9wby1saXN0LXZpZXctYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7OztBQUlsRixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2QyxFQUFFLEVBQXNCO1FBQ3RCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFLGNBQWM7S0FDNUI7SUFDRCxFQUFFLEVBQXNCO1FBQ3RCLFdBQVcsRUFBRSxrQkFBa0I7UUFDL0IsWUFBWSxFQUFFLHVCQUF1QjtRQUNyQyxNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsV0FBVyxFQUFFLGtCQUFrQjtLQUNoQztJQUNELEVBQUUsRUFBc0I7UUFDdEIsV0FBVyxFQUFFLGtCQUFrQjtRQUMvQixZQUFZLEVBQUUsMEJBQTBCO1FBQ3hDLE1BQU0sRUFBRSx3QkFBd0I7UUFDaEMsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixXQUFXLEVBQUUsaUJBQWlCO0tBQy9CO0lBQ0QsRUFBRSxFQUFzQjtRQUN0QixXQUFXLEVBQUUsZUFBZTtRQUM1QixZQUFZLEVBQUUsOEJBQThCO1FBQzVDLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsU0FBUyxFQUFFLGFBQWE7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QkFBQyxpQkFBaUI7WUFHRyxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQjtZQVdGLFFBQVE7a0JBQTlCLE1BQU07bUJBQUMsYUFBYTtZQVdLLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCO1lBc0JBLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVztZQWVLLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVTtZQWVlLGFBQWE7a0JBQTVDLEtBQUs7bUJBQUMsbUJBQW1CO1lBVUosS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTO1lBNkNTLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQWtDSSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFnQmtCLGdCQUFnQjtrQkFBbEQsS0FBSzttQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcbmltcG9ydCB7IFBvTGlzdFZpZXdBY3Rpb24gfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tbGlzdC12aWV3LWFjdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0xpc3RWaWV3TGl0ZXJhbHMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tbGlzdC12aWV3LWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9MaXN0Vmlld0xpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogPFBvTGlzdFZpZXdMaXRlcmFscz57XHJcbiAgICBoaWRlRGV0YWlsczogJ0hpZGUgZGV0YWlscycsXHJcbiAgICBsb2FkTW9yZURhdGE6ICdMb2FkIG1vcmUgZGF0YScsXHJcbiAgICBub0RhdGE6ICdObyBkYXRhIGZvdW5kJyxcclxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwnLFxyXG4gICAgc2hvd0RldGFpbHM6ICdTaG93IGRldGFpbHMnXHJcbiAgfSxcclxuICBlczogPFBvTGlzdFZpZXdMaXRlcmFscz57XHJcbiAgICBoaWRlRGV0YWlsczogJ09jdWx0YXIgZGV0YWxsZXMnLFxyXG4gICAgbG9hZE1vcmVEYXRhOiAnQ2FyZ2FyIG3DoXMgcmVzdWx0YWRvcycsXHJcbiAgICBub0RhdGE6ICdEYXRvcyBubyBlbmNvbnRyYWRvcycsXHJcbiAgICBzZWxlY3RBbGw6ICdTZWxlY2Npb25hciB0b2RvcycsXHJcbiAgICBzaG93RGV0YWlsczogJ01vc3RyYXIgZGV0YWxsZXMnXHJcbiAgfSxcclxuICBwdDogPFBvTGlzdFZpZXdMaXRlcmFscz57XHJcbiAgICBoaWRlRGV0YWlsczogJ09jdWx0YXIgZGV0YWxoZXMnLFxyXG4gICAgbG9hZE1vcmVEYXRhOiAnQ2FycmVnYXIgbWFpcyByZXN1bHRhZG9zJyxcclxuICAgIG5vRGF0YTogJ05lbmh1bSBkYWRvIGVuY29udHJhZG8nLFxyXG4gICAgc2VsZWN0QWxsOiAnU2VsZWNpb25hciB0b2RvcycsXHJcbiAgICBzaG93RGV0YWlsczogJ0V4aWJpciBkZXRhbGhlcydcclxuICB9LFxyXG4gIHJ1OiA8UG9MaXN0Vmlld0xpdGVyYWxzPntcclxuICAgIGhpZGVEZXRhaWxzOiAn0KHQutGA0YvRgtGMINC00LXRgtCw0LvQuCcsXHJcbiAgICBsb2FkTW9yZURhdGE6ICfQl9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1INGA0LXQt9GD0LvRjNGC0LDRgtC+0LInLFxyXG4gICAgbm9EYXRhOiAn0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YsnLFxyXG4gICAgc2VsZWN0QWxsOiAn0JLRi9Cx0YDQsNGC0Ywg0LLRgdC1JyxcclxuICAgIHNob3dEZXRhaWxzOiAn0J/QvtGB0LzQvtGC0YDQtdGC0Ywg0LTQtdGC0LDQu9C4J1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBkZSBsaXN0YSBxdWUgcmVjZWJlIHVtIGFycmF5IGRlIG9iamV0b3MgZSByZW5kZXJpemEgZGUgZm9ybWEgZGluw6JtaWNhIG9zIGRhZG9zIGRlXHJcbiAqIGFjb3JkbyBjb20gYSBuZWNlc3NpZGFkZSBkZSBjYWRhIHRlbGEgZSBkZXZlIHNlciB1dGlsaXphZG8gZW0gY29uanVudG8gY29tIGFzIGRpcmV0aXZhcyBkZSAqdGVtcGxhdGVzKlxyXG4gKiAgKipbcC1saXN0LXZpZXctY29udGVudC10ZW1wbGF0ZV0oL2RvY3VtZW50YXRpb24vcG8tbGlzdC12aWV3LWNvbnRlbnQtdGVtcGxhdGUpKiogZVxyXG4gKiAqKltwLWxpc3Qtdmlldy1kZXRhaWwtdGVtcGxhdGVdKC9kb2N1bWVudGF0aW9uL3BvLWxpc3Qtdmlldy1kZXRhaWwtdGVtcGxhdGUpKiouXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBkaXNwb25pYmlsaXphIHVtYSDDoXJlYSBlc3BlY8OtZmljYSBwYXJhIGV4aWJpw6fDo28gaW5mb3JtYcOnw7VlcyBhZGljaW9uYWlzLFxyXG4gKiBhdHJhdsOpcyBkYSBkaXJldGl2YSAqKltwLWxpc3Qtdmlldy1kZXRhaWwtdGVtcGxhdGVdKC9kb2N1bWVudGF0aW9uL3BvLWxpc3Qtdmlldy1kZXRhaWwtdGVtcGxhdGUpKiouXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvTGlzdFZpZXdCYXNlQ29tcG9uZW50IHtcclxuICAvKiogUmVjZWJlIHVtYSBwcm9wcmllZGFkZSBxdWUgc2Vyw6EgdXRpbGl6YWRhIHBhcmEgcmVjdXBlcmFyIG8gdmFsb3IgZG8gb2JqZXRvIHF1ZSBzZXLDoSB1c2FkbyBjb21vIGxpbmsgcGFyYSBvIHTDrXR1bG8uICovXHJcbiAgQElucHV0KCdwLXByb3BlcnR5LWxpbmsnKSBwcm9wZXJ0eUxpbms/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBSZWNlYmUgdW1hIHByb3ByaWVkYWRlIHF1ZSBzZXLDoSB1dGlsaXphZGEgcGFyYSByZWN1cGVyYXIgbyB2YWxvciBkbyBvYmpldG8gcXVlIHNlcsOhIGV4aWJpZG8gY29tbyBvIHTDrXR1bG8gZGUgY2FkYSBpdGVtLiAqL1xyXG4gIEBJbnB1dCgncC1wcm9wZXJ0eS10aXRsZScpIHByb3BlcnR5VGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBSZWNlYmUgdW1hIGHDp8OjbywgcXVlIHNlcsOhIGV4ZWN1dGFkYSBxdWFuZG8gY2xpY2FyIG5vIGJvdMOjbyBcIkNhcnJlZ2FyIG1haXMgcmVzdWx0YWRvc1wiLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG5lbmh1bWEgYcOnw6NvIGZvciBkZWZpbmlkYSBvIG1lc21vIG7Do28gZmljYXLDoSB2aXPDrXZlbC5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNob3ctbW9yZScpIHNob3dNb3JlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQcOnw6NvIHF1ZSBzZXLDoSBleGVjdXRhZGEgYW8gY2xpY2FyIG5vIHTDrXR1bG8uXHJcbiAgICpcclxuICAgKiBBbyBzZXIgZGlzcGFyYWRvLCBvIG3DqXRvZG8gaW5zZXJpZG8gbmEgYcOnw6NvIGlyw6EgcmVjZWJlciBjb21vIHBhcsOibWV0cm8gbyBpdGVtIGRhIGxpc3RhIGNsaWNhZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC10aXRsZS1hY3Rpb24nKSB0aXRsZUFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcG9wdXBUYXJnZXQ6IGFueTtcclxuICBzZWxlY3RBbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93SGVhZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX2FjdGlvbnM6IEFycmF5PFBvTGlzdFZpZXdBY3Rpb24+O1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2hpZGVTZWxlY3RBbGw6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXRlbXM6IEFycmF5PGFueT47XHJcbiAgcHJpdmF0ZSBfbGl0ZXJhbHM6IFBvTGlzdFZpZXdMaXRlcmFscztcclxuICBwcml2YXRlIF9zZWxlY3Q6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfc2hvd01vcmVEaXNhYmxlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmcgPSBwb0xvY2FsZURlZmF1bHQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBkZSBhw6fDtWVzIHF1ZSBzZXLDo28gZXhpYmlkYXMgbm8gY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtYWN0aW9ucycpIHNldCBhY3Rpb25zKHZhbHVlOiBBcnJheTxQb0xpc3RWaWV3QWN0aW9uPikge1xyXG4gICAgdGhpcy5fYWN0aW9ucyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBhY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgYWx0dXJhIGRvIGBwby1saXN0LXZpZXdgIGVtICpwaXhlbHMqLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oZWlnaHQnKSBzZXQgaGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXNjb25kZSBvICpjaGVja2JveCogcGFyYSBzZWxlw6fDo28gZGUgdG9kb3Mgb3MgaXRlbnMuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtc2VsZWN0LWFsbCcpIHNldCBoaWRlU2VsZWN0QWxsKGhpZGVTZWxlY3RBbGw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVTZWxlY3RBbGwgPSBjb252ZXJ0VG9Cb29sZWFuKGhpZGVTZWxlY3RBbGwpO1xyXG4gICAgdGhpcy5zaG93TWFpbkhlYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVTZWxlY3RBbGwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZVNlbGVjdEFsbDtcclxuICB9XHJcblxyXG4gIC8qKiBMaXN0YSBkZSBpdGVucyBxdWUgc2Vyw6NvIGV4aWJpZG9zIG5vIGNvbXBvbmVudGUuICovXHJcbiAgQElucHV0KCdwLWl0ZW1zJykgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gY29tIGFzIGxpdGVyYWlzIHVzYWRhcyBubyBgcG8tbGlzdC12aWV3YC5cclxuICAgKlxyXG4gICAqIEV4aXN0ZW0gZHVhcyBtYW5laXJhcyBkZSBjdXN0b21pemFyIG8gY29tcG9uZW50ZSwgcGFzc2FuZG8gdW0gb2JqZXRvIGNvbSB0b2RhcyBhcyBsaXRlcmFpcyBkaXNwb27DrXZlaXM6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvTGlzdFZpZXdMaXRlcmFscyA9IHtcclxuICAgKiAgICBoaWRlRGV0YWlsOiAnT2N1bHRhciBkZXRhbGhlcyBjb21wbGV0YW1lbnRlJyxcclxuICAgKiAgICBsb2FkTW9yZURhdGE6ICdNYWlzIGRhZG9zJyxcclxuICAgKiAgICBzaG93RGV0YWlsOiAnTW9zdHJhciBtYWlzIGRldGFsaGVzJyxcclxuICAgKiAgICBzZWxlY3RBbGw6ICdTZWxlY2lvbmFyIHRvZG9zIG9zIGl0ZW5zJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogT3UgcGFzc2FuZG8gYXBlbmFzIGFzIGxpdGVyYWlzIHF1ZSBkZXNlamEgY3VzdG9taXphcjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9MaXN0Vmlld0xpdGVyYWxzID0ge1xyXG4gICAqICAgIHNob3dEZXRhaWw6ICdNb3N0cmFyIG1haXMgZGV0YWxoZXMnXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBFIHBhcmEgY2FycmVnYXIgYXMgbGl0ZXJhaXMgY3VzdG9taXphZGFzLCBiYXN0YSBhcGVuYXMgcGFzc2FyIG8gb2JqZXRvIHBhcmEgbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLWxpc3Qtdmlld1xyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLWxpc3Qtdmlldz5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gTyBvYmpldG8gcGFkcsOjbyBkZSBsaXRlcmFpcyBzZXLDoSB0cmFkdXppZG8gZGUgYWNvcmRvIGNvbSBvIGlkaW9tYSBkb1xyXG4gICAqIFtgUG9JMThuU2VydmljZWBdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4pIG91IGRvIGJyb3dzZXIuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxpdGVyYWxzJykgc2V0IGxpdGVyYWxzKHZhbHVlOiBQb0xpc3RWaWV3TGl0ZXJhbHMpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0ge1xyXG4gICAgICAgIC4uLnBvTGlzdFZpZXdMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgICAgICAuLi5wb0xpc3RWaWV3TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLFxyXG4gICAgICAgIC4uLnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHBvTGlzdFZpZXdMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbGl0ZXJhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGl0ZXJhbHMgfHwgcG9MaXN0Vmlld0xpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBIYWJpbGl0YSB1bSAqY2hlY2tib3gqIHBhcmEgY2FkYSBpdGVtIGRhIGxpc3RhLiBUb2RvcyBvcyBpdGVtcyBwb3NzdWVtIGEgcHJvcHJpZWRhZGUgZGluw6JtaWNhIGAkc2VsZWN0ZWRgIHBhcmEgaWRlbnRpZmljYXIgc2Ugb1xyXG4gICAqIGl0ZW0gZXN0w6Egc2VsZWNpb25hZG8sIHBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGl0ZW0uJHNlbGVjdGVkXHJcbiAgICpcclxuICAgKiAgLy8gb3VcclxuICAgKlxyXG4gICAqICBpdGVtWyckc2VsZWN0ZWQnXVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zZWxlY3QnKSBzZXQgc2VsZWN0KHNlbGVjdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0ID0gY29udmVydFRvQm9vbGVhbihzZWxlY3QpO1xyXG4gICAgdGhpcy5zaG93TWFpbkhlYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGJvdMOjbyBgQ2FycmVnYXIgTWFpcyBSZXN1bHRhZG9zYCBzZXLDoSBkZXNhYmlsaXRhZG8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNob3ctbW9yZS1kaXNhYmxlZCcpIHNldCBzaG93TW9yZURpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93TW9yZURpc2FibGVkID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd01vcmVEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93TW9yZURpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQWN0aW9uKGxpc3RWaWV3QWN0aW9uOiBQb0xpc3RWaWV3QWN0aW9uLCBpdGVtKSB7XHJcbiAgICBjb25zdCBjbGVhbkl0ZW0gPSB0aGlzLmRlbGV0ZUludGVybmFsQXR0cnMoaXRlbSk7XHJcbiAgICBpZiAobGlzdFZpZXdBY3Rpb24uYWN0aW9uKSB7XHJcbiAgICAgIGxpc3RWaWV3QWN0aW9uLmFjdGlvbihjbGVhbkl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93TW9yZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd01vcmUuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcnVuVGl0bGVBY3Rpb24obGlzdEl0ZW06IGFueSkge1xyXG4gICAgY29uc3QgaXRlbVdpdGhQdWJsaWNQcm9wZXJ0aWVzID0gdGhpcy5kZWxldGVJbnRlcm5hbEF0dHJzKGxpc3RJdGVtKTtcclxuICAgIHRoaXMudGl0bGVBY3Rpb24uZW1pdChpdGVtV2l0aFB1YmxpY1Byb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsTGlzdEl0ZW1zKCkge1xyXG4gICAgaWYgKCF0aGlzLmhpZGVTZWxlY3RBbGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGwgPSAhdGhpcy5zZWxlY3RBbGw7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS4kc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdEFsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RMaXN0SXRlbShyb3c6IGFueSkge1xyXG4gICAgcm93LiRzZWxlY3RlZCA9ICFyb3cuJHNlbGVjdGVkO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0QWxsID0gdGhpcy5jaGVja0lmSXRlbXNBcmVTZWxlY3RlZCh0aGlzLml0ZW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlSW50ZXJuYWxBdHRycyhpdGVtKSB7XHJcbiAgICBjb25zdCBpdGVtQ29weSA9IGl0ZW0gPyB7IC4uLml0ZW0gfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtQ29weSkge1xyXG4gICAgICBpZiAoaXRlbUNvcHkuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkuc3RhcnRzV2l0aCgnJCcpKSB7XHJcbiAgICAgICAgZGVsZXRlIGl0ZW1Db3B5W2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbUNvcHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrSWZJdGVtc0FyZVNlbGVjdGVkKGl0ZW1zOiBBcnJheTxhbnk+KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzb21lQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZSA9IGl0ZW0gPT4gaXRlbS4kc2VsZWN0ZWQgfHwgaXRlbS4kc2VsZWN0ZWQgPT09IG51bGw7XHJcbiAgICBjb25zdCBldmVyeUNoZWNrZWQgPSBpdGVtID0+IGl0ZW0uJHNlbGVjdGVkO1xyXG5cclxuICAgIGlmIChpdGVtcy5ldmVyeShldmVyeUNoZWNrZWQpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtcy5zb21lKHNvbWVDaGVja2VkT3JJbmRldGVybWluYXRlKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dNYWluSGVhZGVyKCkge1xyXG4gICAgdGhpcy5zaG93SGVhZGVyID0gISEodGhpcy5zZWxlY3QgJiYgIXRoaXMuaGlkZVNlbGVjdEFsbCAmJiB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoKTtcclxuICB9XHJcbn1cclxuIl19