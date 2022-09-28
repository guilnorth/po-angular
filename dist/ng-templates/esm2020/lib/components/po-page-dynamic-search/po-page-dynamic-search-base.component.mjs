import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { InputBoolean, poLocaleDefault } from '@po-ui/ng-components';
import { convertToInt } from '../../utils/util';
import { poAdvancedFiltersLiteralsDefault } from './po-advanced-filter/po-advanced-filter-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
export const poPageDynamicSearchLiteralsDefault = {
    en: {
        disclaimerGroupTitle: 'Displaying results filtered by:',
        filterTitle: poAdvancedFiltersLiteralsDefault.en.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.en.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.en.confirmLabel,
        quickSearchLabel: 'Quick search:',
        searchPlaceholder: 'Search'
    },
    es: {
        disclaimerGroupTitle: 'Presentando resultados filtrados por:',
        filterTitle: poAdvancedFiltersLiteralsDefault.es.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.es.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.es.confirmLabel,
        quickSearchLabel: 'Búsqueda rápida:',
        searchPlaceholder: 'Buscar'
    },
    pt: {
        disclaimerGroupTitle: 'Apresentando resultados filtrados por:',
        filterTitle: poAdvancedFiltersLiteralsDefault.pt.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.pt.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.pt.confirmLabel,
        quickSearchLabel: 'Pesquisa rápida:',
        searchPlaceholder: 'Pesquisar'
    },
    ru: {
        disclaimerGroupTitle: 'Отображение результатов, отфильтрованных по:',
        filterTitle: poAdvancedFiltersLiteralsDefault.ru.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.ru.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.ru.confirmLabel,
        quickSearchLabel: 'Быстрый поиск:',
        searchPlaceholder: 'исследование'
    }
};
/**
 * @description
 *
 * Componente com as ações de pesquisa já definidas, bastando que o desenvolvedor implemente apenas a chamada para as APIs
 * e exiba as informações.
 */
export class PoPageDynamicSearchBaseComponent {
    constructor(languageService) {
        /** Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`. */
        this.actions = [];
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        /**
         * @optional
         *
         * @description
         *
         * Mantém na busca avançada os valores preenchidos do último filtro realizado pelo usuário.
         *
         * @default `false`
         */
        this.keepFilters = false;
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
        this.concatFilters = false;
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
        this.hideRemoveAllDisclaimer = false;
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao executar a pesquisa avançada, o mesmo irá repassar um objeto com os valores preenchidos no modal de pesquisa.
         *
         * > Campos não preenchidos não irão aparecer no objeto passado por parâmetro.
         */
        this.advancedSearch = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao remover um ou todos os disclaimers pelo usuário.
         */
        this.changeDisclaimers = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
         */
        this.quickSearch = new EventEmitter();
        this._filters = [];
        this._hideCloseDisclaimers = [];
        this.language = languageService.getShortLanguage();
    }
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
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poPageDynamicSearchLiteralsDefault[poLocaleDefault],
                ...poPageDynamicSearchLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poPageDynamicSearchLiteralsDefault[this.language];
        }
        this.setAdvancedFilterLiterals(this.literals);
    }
    get literals() {
        return this._literals || poPageDynamicSearchLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista dos campos usados na busca avançada. Caso o mesmo não seja passado a busca avançada não será exibida.
     */
    set filters(filters) {
        this._filters = Array.isArray(filters) ? [...filters] : [];
        if (this.stringify(this._filters) !== this.stringify(this.previousFilters)) {
            this.onChangeFilters(this.filters);
            this.previousFilters = [...this._filters];
        }
    }
    get filters() {
        return this._filters;
    }
    /**
     * @optional
     *
     * @description
     *
     * Largura do campo de busca, utilizando o *Grid System*,
     * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
     * conforme resolução de tela para manter a consistência do layout.
     */
    set quickSearchWidth(value) {
        this._quickSearchWidth = convertToInt(value);
    }
    get quickSearchWidth() {
        return this._quickSearchWidth;
    }
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
    set hideCloseDisclaimers(value) {
        this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
    }
    get hideCloseDisclaimers() {
        return this._hideCloseDisclaimers;
    }
    setAdvancedFilterLiterals(literals) {
        this.advancedFilterLiterals = {
            cancelLabel: literals.filterCancelLabel,
            confirmLabel: literals.filterConfirmLabel,
            title: literals.filterTitle
        };
    }
    stringify(columns) {
        // não faz o stringify da propriedade searchService, pois pode conter objeto complexo e disparar um erro.
        return JSON.stringify(columns, (key, value) => {
            if (key !== 'searchService') {
                return value;
            }
        });
    }
}
PoPageDynamicSearchBaseComponent.ɵfac = function PoPageDynamicSearchBaseComponent_Factory(t) { return new (t || PoPageDynamicSearchBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageDynamicSearchBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageDynamicSearchBaseComponent, inputs: { actions: ["p-actions", "actions"], breadcrumb: ["p-breadcrumb", "breadcrumb"], keepFilters: ["p-keep-filters", "keepFilters"], concatFilters: ["p-concat-filters", "concatFilters"], hideRemoveAllDisclaimer: ["p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer"], onLoad: ["p-load", "onLoad"], title: ["p-title", "title"], literals: ["p-literals", "literals"], filters: ["p-filters", "filters"], quickSearchWidth: ["p-quick-search-width", "quickSearchWidth"], hideCloseDisclaimers: ["p-hide-close-disclaimers", "hideCloseDisclaimers"] }, outputs: { advancedSearch: "p-advanced-search", changeDisclaimers: "p-change-disclaimers", quickSearch: "p-quick-search" } });
__decorate([
    InputBoolean()
], PoPageDynamicSearchBaseComponent.prototype, "keepFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicSearchBaseComponent.prototype, "concatFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicSearchBaseComponent.prototype, "hideRemoveAllDisclaimer", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicSearchBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { actions: [{
            type: Input,
            args: ['p-actions']
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], keepFilters: [{
            type: Input,
            args: ['p-keep-filters']
        }], concatFilters: [{
            type: Input,
            args: ['p-concat-filters']
        }], hideRemoveAllDisclaimer: [{
            type: Input,
            args: ['p-hide-remove-all-disclaimer']
        }], onLoad: [{
            type: Input,
            args: ['p-load']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], advancedSearch: [{
            type: Output,
            args: ['p-advanced-search']
        }], changeDisclaimers: [{
            type: Output,
            args: ['p-change-disclaimers']
        }], quickSearch: [{
            type: Output,
            args: ['p-quick-search']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], filters: [{
            type: Input,
            args: ['p-filters']
        }], quickSearchWidth: [{
            type: Input,
            args: ['p-quick-search-width']
        }], hideCloseDisclaimers: [{
            type: Input,
            args: ['p-hide-close-disclaimers']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLXNlYXJjaC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1keW5hbWljLXNlYXJjaC9wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFDTCxZQUFZLEVBS1osZUFBZSxFQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7O0FBSzFHLE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUFHO0lBQ2hELEVBQUUsRUFBK0I7UUFDL0Isb0JBQW9CLEVBQUUsaUNBQWlDO1FBQ3ZELFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsS0FBSztRQUN0RCxpQkFBaUIsRUFBRSxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsV0FBVztRQUNsRSxrQkFBa0IsRUFBRSxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsWUFBWTtRQUNwRSxnQkFBZ0IsRUFBRSxlQUFlO1FBQ2pDLGlCQUFpQixFQUFFLFFBQVE7S0FDNUI7SUFDRCxFQUFFLEVBQStCO1FBQy9CLG9CQUFvQixFQUFFLHVDQUF1QztRQUM3RCxXQUFXLEVBQUUsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLEtBQUs7UUFDdEQsaUJBQWlCLEVBQUUsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLFdBQVc7UUFDbEUsa0JBQWtCLEVBQUUsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLFlBQVk7UUFDcEUsZ0JBQWdCLEVB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QUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLEtBQUssZUFBZSxFQUFFO2dCQUMzQixPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnSEF4UW1CLGdDQUFnQzttRkFBaEMsZ0NBQWdDO0FBa0JwRDtJQUZDLFlBQVksRUFBRTtxRUFFYztBQXFCN0I7SUFGQyxZQUFZLEVBQUU7dUVBRWdCO0FBZS9CO0lBRkMsWUFBWSxFQUFFO2lGQUUyQjt1RkF0RHRCLGdDQUFnQztjQURyRCxTQUFTO29FQUdZLE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQUdLLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQWFyQixXQUFXO2tCQURWLEtBQUs7bUJBQUMsZ0JBQWdCO1lBc0J2QixhQUFhO2tCQURaLEtBQUs7bUJBQUMsa0JBQWtCO1lBZ0J6Qix1QkFBdUI7a0JBRHRCLEtBQUs7bUJBQUMsOEJBQThCO1lBaUNwQixNQUFNO2tCQUF0QixLQUFLO21CQUFDLFFBQVE7WUFHRyxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFXYSxjQUFjO2tCQUExQyxNQUFNO21CQUFDLG1CQUFtQjtZQVNLLGlCQUFpQjtrQkFBaEQsTUFBTTttQkFBQyxzQkFBc0I7WUFTSixXQUFXO2tCQUFwQyxNQUFNO21CQUFDLGdCQUFnQjtZQWtEQyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUF5QkssT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBdUJpQixnQkFBZ0I7a0JBQWxELEtBQUs7bUJBQUMsc0JBQXNCO1lBcUJVLG9CQUFvQjtrQkFBMUQsS0FBSzttQkFBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgUG9CcmVhZGNydW1iLFxyXG4gIFBvRHluYW1pY0Zvcm1GaWVsZCxcclxuICBQb0xhbmd1YWdlU2VydmljZSxcclxuICBQb1BhZ2VBY3Rpb24sXHJcbiAgcG9Mb2NhbGVEZWZhdWx0XHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvSW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljU2VhcmNoTGl0ZXJhbHMgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2gtbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgcG9BZHZhbmNlZEZpbHRlcnNMaXRlcmFsc0RlZmF1bHQgfSBmcm9tICcuL3BvLWFkdmFuY2VkLWZpbHRlci9wby1hZHZhbmNlZC1maWx0ZXItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0FkdmFuY2VkRmlsdGVyTGl0ZXJhbHMgfSBmcm9tICcuL3BvLWFkdmFuY2VkLWZpbHRlci9wby1hZHZhbmNlZC1maWx0ZXItbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1NlYXJjaE9wdGlvbnMgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljU2VhcmNoRmlsdGVycyB9IGZyb20gJy4vcG8tcGFnZS1keW5hbWljLXNlYXJjaC1maWx0ZXJzLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9QYWdlRHluYW1pY1NlYXJjaExpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogPFBvUGFnZUR5bmFtaWNTZWFyY2hMaXRlcmFscz57XHJcbiAgICBkaXNjbGFpbWVyR3JvdXBUaXRsZTogJ0Rpc3BsYXlpbmcgcmVzdWx0cyBmaWx0ZXJlZCBieTonLFxyXG4gICAgZmlsdGVyVGl0bGU6IHBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0LmVuLnRpdGxlLFxyXG4gICAgZmlsdGVyQ2FuY2VsTGFiZWw6IHBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0LmVuLmNhbmNlbExhYmVsLFxyXG4gICAgZmlsdGVyQ29uZmlybUxhYmVsOiBwb0FkdmFuY2VkRmlsdGVyc0xpdGVyYWxzRGVmYXVsdC5lbi5jb25maXJtTGFiZWwsXHJcbiAgICBxdWlja1NlYXJjaExhYmVsOiAnUXVpY2sgc2VhcmNoOicsXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCdcclxuICB9LFxyXG4gIGVzOiA8UG9QYWdlRHluYW1pY1NlYXJjaExpdGVyYWxzPntcclxuICAgIGRpc2NsYWltZXJHcm91cFRpdGxlOiAnUHJlc2VudGFuZG8gcmVzdWx0YWRvcyBmaWx0cmFkb3MgcG9yOicsXHJcbiAgICBmaWx0ZXJUaXRsZTogcG9BZHZhbmNlZEZpbHRlcnNMaXRlcmFsc0RlZmF1bHQuZXMudGl0bGUsXHJcbiAgICBmaWx0ZXJDYW5jZWxMYWJlbDogcG9BZHZhbmNlZEZpbHRlcnNMaXRlcmFsc0RlZmF1bHQuZXMuY2FuY2VsTGFiZWwsXHJcbiAgICBmaWx0ZXJDb25maXJtTGFiZWw6IHBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0LmVzLmNvbmZpcm1MYWJlbCxcclxuICAgIHF1aWNrU2VhcmNoTGFiZWw6ICdCw7pzcXVlZGEgcsOhcGlkYTonLFxyXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdCdXNjYXInXHJcbiAgfSxcclxuICBwdDogPFBvUGFnZUR5bmFtaWNTZWFyY2hMaXRlcmFscz57XHJcbiAgICBkaXNjbGFpbWVyR3JvdXBUaXRsZTogJ0FwcmVzZW50YW5kbyByZXN1bHRhZG9zIGZpbHRyYWRvcyBwb3I6JyxcclxuICAgIGZpbHRlclRpdGxlOiBwb0FkdmFuY2VkRmlsdGVyc0xpdGVyYWxzRGVmYXVsdC5wdC50aXRsZSxcclxuICAgIGZpbHRlckNhbmNlbExhYmVsOiBwb0FkdmFuY2VkRmlsdGVyc0xpdGVyYWxzRGVmYXVsdC5wdC5jYW5jZWxMYWJlbCxcclxuICAgIGZpbHRlckNvbmZpcm1MYWJlbDogcG9BZHZhbmNlZEZpbHRlcnNMaXRlcmFsc0RlZmF1bHQucHQuY29uZmlybUxhYmVsLFxyXG4gICAgcXVpY2tTZWFyY2hMYWJlbDogJ1Blc3F1aXNhIHLDoXBpZGE6JyxcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnUGVzcXVpc2FyJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb1BhZ2VEeW5hbWljU2VhcmNoTGl0ZXJhbHM+e1xyXG4gICAgZGlzY2xhaW1lckdyb3VwVGl0bGU6ICfQntGC0L7QsdGA0LDQttC10L3QuNC1INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIsINC+0YLRhNC40LvRjNGC0YDQvtCy0LDQvdC90YvRhSDQv9C+OicsXHJcbiAgICBmaWx0ZXJUaXRsZTogcG9BZHZhbmNlZEZpbHRlcnNMaXRlcmFsc0RlZmF1bHQucnUudGl0bGUsXHJcbiAgICBmaWx0ZXJDYW5jZWxMYWJlbDogcG9BZHZhbmNlZEZpbHRlcnNMaXRlcmFsc0RlZmF1bHQucnUuY2FuY2VsTGFiZWwsXHJcbiAgICBmaWx0ZXJDb25maXJtTGFiZWw6IHBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0LnJ1LmNvbmZpcm1MYWJlbCxcclxuICAgIHF1aWNrU2VhcmNoTGFiZWw6ICfQkdGL0YHRgtGA0YvQuSDQv9C+0LjRgdC6OicsXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ9C40YHRgdC70LXQtNC+0LLQsNC90LjQtSdcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgY29tIGFzIGHDp8O1ZXMgZGUgcGVzcXVpc2EgasOhIGRlZmluaWRhcywgYmFzdGFuZG8gcXVlIG8gZGVzZW52b2x2ZWRvciBpbXBsZW1lbnRlIGFwZW5hcyBhIGNoYW1hZGEgcGFyYSBhcyBBUElzXHJcbiAqIGUgZXhpYmEgYXMgaW5mb3JtYcOnw7Vlcy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9QYWdlRHluYW1pY1NlYXJjaEJhc2VDb21wb25lbnQge1xyXG4gIC8qKiBOZXN0YSBwcm9wcmllZGFkZSBkZXZlIHNlciBkZWZpbmlkbyB1bSBhcnJheSBkZSBvYmpldG9zIHF1ZSBpbXBsZW1lbnRhbSBhIGludGVyZmFjZSBgUG9QYWdlQWN0aW9uYC4gKi9cclxuICBASW5wdXQoJ3AtYWN0aW9ucycpIGFjdGlvbnM/OiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gW107XHJcblxyXG4gIC8qKiBPYmpldG8gY29tIHByb3ByaWVkYWRlcyBkbyBicmVhZGNydW1iLiAqL1xyXG4gIEBJbnB1dCgncC1icmVhZGNydW1iJykgYnJlYWRjcnVtYj86IFBvQnJlYWRjcnVtYiA9IHsgaXRlbXM6IFtdIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNYW50w6ltIG5hIGJ1c2NhIGF2YW7Dp2FkYSBvcyB2YWxvcmVzIHByZWVuY2hpZG9zIGRvIMO6bHRpbW8gZmlsdHJvIHJlYWxpemFkbyBwZWxvIHVzdcOhcmlvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIEBJbnB1dCgncC1rZWVwLWZpbHRlcnMnKVxyXG4gIGtlZXBGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQZXJtaXRlIGEgdXRpbGl6YcOnw6NvIGRhIHBlc3F1aXNhIHLDoXBpZGEganVudG8gY29tIGEgcGVzcXVpc2EgYXZhbsOnYWRhLlxyXG4gICAqXHJcbiAgICogRGVzdGEgZm9ybWEsIGFvIHRlciB1bWEgcGVzcXVpc2EgYXZhbsOnYWRhIGVzdGFiZWxlY2lkYSBlIHNlclxyXG4gICAqIHByZWVuY2hpZG8gYSBwZXNxdWlzYSByw6FwaWRhLCBvIGZpbHRybyBzZXLDoSBjb25jYXRlbmFkbyBhZGljaW9uYW5kbyBhIHBlc3F1aXNhXHJcbiAgICogcsOhcGlkYSB0YW1iw6ltIG5hIGxpc3RhIGRlIGBkaXNjbGFpbWVyc2AuXHJcbiAgICpcclxuICAgKiA+IE9zIHZhbG9yZXMgcXVlIHPDo28gZW1pdGlkb3Mgbm8gYHAtcXVpY2stc2VhcmNoYCBlIG5vIGBwLWFkdmFuY2VkLXNlYXJjaGBcclxuICAgKiBwZXJtYW5lY2VtIHNlcGFyYWRvcyBkdXJhbnRlIGEgZW1pc3PDo28gZG9zIHZhbG9yZXMgYWx0ZXJhZG9zLiBBIGNvbmNhdGVuYcOnw6NvXHJcbiAgICogw6kgYXBlbmFzIG5vcyBgZGlzY2xhaW1lcnNgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIEBJbnB1dCgncC1jb25jYXQtZmlsdGVycycpXHJcbiAgY29uY2F0RmlsdGVyczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2N1bHRhIG8gYm90w6NvIHBhcmEgcmVtb3ZlciB0b2RvcyBvcyAqZGlzY2xhaW1lcnMqIGRvIGdydXBvLlxyXG4gICAqXHJcbiAgICogPiBQb3IgcGFkcsOjbywgbyBtZXNtbyDDqSBleGliaWRvIMOgIHBhcnRpciBkZSBkb2lzIG91IG1haXMgKmRpc2NsYWltZXJzKiBjb20gYSBvcMOnw6NvIGBoaWRlQ2xvc2VgIGhhYmlsaXRhZGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQElucHV0KCdwLWhpZGUtcmVtb3ZlLWFsbC1kaXNjbGFpbWVyJylcclxuICBoaWRlUmVtb3ZlQWxsRGlzY2xhaW1lcj86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gb3Ugc2VydmnDp28gcXVlIHNlcsOhIGV4ZWN1dGFkbyBuYSBpbmljaWFsaXphw6fDo28gZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIEEgcHJvcHJpZWRhZGUgYWNlaXRhIG9zIHNlZ3VpbnRlcyB0aXBvczpcclxuICAgKiAtIGBzdHJpbmdgOiAqRW5kcG9pbnQqIHVzYWRvIHBlbG8gY29tcG9uZW50ZSBwYXJhIHJlcXVpc2nDp8OjbyB2aWEgYFBPU1RgLlxyXG4gICAqIC0gYGZ1bmN0aW9uYDogTcOpdG9kbyBxdWUgc2Vyw6EgZXhlY3V0YWRvLlxyXG4gICAqXHJcbiAgICogTyByZXRvcm5vIGRlc3RhIGZ1bsOnw6NvIGRldmUgc2VyIGRvIHRpcG8gYFBvUGFnZUR5bmFtaWNTZWFyY2hPcHRpb25zYCxcclxuICAgKiBvbmRlIG8gdXN1w6FyaW8gcG9kZXLDoSBjdXN0b21pemFyIG5vdm9zIGZpbHRyb3MsIGJyZWFkY3J1bWIsIHRpdGxlIGUgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogUG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBnZXRQYWdlT3B0aW9ucygpOiBQb1BhZ2VEeW5hbWljU2VhcmNoT3B0aW9ucyB7XHJcbiAgICogcmV0dXJuIHtcclxuICAgKiAgIGFjdGlvbnM6IFtcclxuICAgKiAgICAgeyBsYWJlbDogJ0ZpbmQgb24gR29vZ2xlJyB9LFxyXG4gICAqICAgXSxcclxuICAgKiAgIGZpbHRlcnM6IFtcclxuICAgKiAgICAgeyBwcm9wZXJ0eTogJ2lkQ2FyZCcsIGdyaWRDb2x1bW5zOiA2IH1cclxuICAgKiAgIF1cclxuICAgKiB9O1xyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIFBhcmEgcmVmZXJlbmNpYXIgYSBzdWEgZnVuw6fDo28gdXRpbGl6ZSBhIHByb3ByaWVkYWRlIGBiaW5kYCwgcG9yIGV4ZW1wbG86XHJcbiAgICogYGBgXHJcbiAgICogIFtwLWxvYWRdPVwib25Mb2FkT3B0aW9ucy5iaW5kKHRoaXMpXCJcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9hZCcpIG9uTG9hZDogc3RyaW5nIHwgKCgpID0+IFBvUGFnZUR5bmFtaWNTZWFyY2hPcHRpb25zKTtcclxuXHJcbiAgLyoqIFTDrXR1bG8gZGEgcMOhZ2luYS4gKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBleGVjdXRhciBhIHBlc3F1aXNhIGF2YW7Dp2FkYSwgbyBtZXNtbyBpcsOhIHJlcGFzc2FyIHVtIG9iamV0byBjb20gb3MgdmFsb3JlcyBwcmVlbmNoaWRvcyBubyBtb2RhbCBkZSBwZXNxdWlzYS5cclxuICAgKlxyXG4gICAqID4gQ2FtcG9zIG7Do28gcHJlZW5jaGlkb3MgbsOjbyBpcsOjbyBhcGFyZWNlciBubyBvYmpldG8gcGFzc2FkbyBwb3IgcGFyw6JtZXRyby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWFkdmFuY2VkLXNlYXJjaCcpIGFkdmFuY2VkU2VhcmNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gYW8gcmVtb3ZlciB1bSBvdSB0b2RvcyBvcyBkaXNjbGFpbWVycyBwZWxvIHVzdcOhcmlvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlLWRpc2NsYWltZXJzJykgY2hhbmdlRGlzY2xhaW1lcnM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyByZWFsaXphciB1bWEgYnVzY2EgcGVsbyBjYW1wbyBkZSBwZXNxdWlzYSByw6FwaWRhLCBvIG1lc21vIHNlcsOhIGNoYW1hZG8gcmVwYXNzYW5kbyBvIHZhbG9yIGRpZ2l0YWRvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtcXVpY2stc2VhcmNoJykgcXVpY2tTZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBhZHZhbmNlZEZpbHRlckxpdGVyYWxzOiBQb0FkdmFuY2VkRmlsdGVyTGl0ZXJhbHM7XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcnM6IEFycmF5PFBvRHluYW1pY0Zvcm1GaWVsZD4gPSBbXTtcclxuICBwcml2YXRlIF9oaWRlQ2xvc2VEaXNjbGFpbWVyczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb1BhZ2VEeW5hbWljU2VhcmNoTGl0ZXJhbHM7XHJcbiAgcHJpdmF0ZSBfcXVpY2tTZWFyY2hXaWR0aDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzRmlsdGVyczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPjtcclxuICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gY29tIGFzIGxpdGVyYWlzIHVzYWRhcyBubyBgcG8tcGFnZS1keW5hbWljLXNlYXJjaGAuXHJcbiAgICpcclxuICAgKiBFeGlzdGVtIGR1YXMgbWFuZWlyYXMgZGUgY3VzdG9taXphciBvIGNvbXBvbmVudGUsIHBhc3NhbmRvIHVtIG9iamV0byBjb20gdG9kYXMgYXMgbGl0ZXJhaXMgZGlzcG9uw612ZWlzOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb1BhZ2VEeW5hbWljU2VhcmNoTGl0ZXJhbHMgPSB7XHJcbiAgICogICAgZGlzY2xhaW1lckdyb3VwVGl0bGU6ICdGaWx0cm9zIGFwbGljYWRvczonLFxyXG4gICAqICAgIGZpbHRlclRpdGxlOiAnRmlsdHJvIGF2YW7Dp2FkbycsXHJcbiAgICogICAgZmlsdGVyQ2FuY2VsTGFiZWw6ICdGZWNoYXInLFxyXG4gICAqICAgIGZpbHRlckNvbmZpcm1MYWJlbDogJ0FwbGljYXInLFxyXG4gICAqICAgIHF1aWNrU2VhcmNoTGFiZWw6ICdWYWxvciBwZXNxdWlzYWRvOicsXHJcbiAgICogICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdQZXNxdWlzZSBhcXVpJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogT3UgcGFzc2FuZG8gYXBlbmFzIGFzIGxpdGVyYWlzIHF1ZSBkZXNlamEgY3VzdG9taXphcjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9QYWdlRHluYW1pY1NlYXJjaExpdGVyYWxzID0ge1xyXG4gICAqICAgIGZpbHRlclRpdGxlOiAnRmlsdHJvIGF2YW7Dp2FkbydcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEUgcGFyYSBjYXJyZWdhciBhcyBsaXRlcmFpcyBjdXN0b21pemFkYXMsIGJhc3RhIGFwZW5hcyBwYXNzYXIgbyBvYmpldG8gcGFyYSBvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tcGFnZS1keW5hbWljLXNlYXJjaFxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLXBhZ2UtZHluYW1pYy1zZWFyY2g+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IE8gdmFsb3IgcGFkcsOjbyBzZXLDoSB0cmFkdXppZG8gZGUgYWNvcmRvIGNvbSBvIGlkaW9tYSBjb25maWd1cmFkbyBubyBbYFBvSTE4blNlcnZpY2VgXSgvZG9jdW1lbnRhdGlvbi9wby1pMThuKSBvdSAqYnJvd3NlciouXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxpdGVyYWxzJykgc2V0IGxpdGVyYWxzKHZhbHVlOiBQb1BhZ2VEeW5hbWljU2VhcmNoTGl0ZXJhbHMpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0ge1xyXG4gICAgICAgIC4uLnBvUGFnZUR5bmFtaWNTZWFyY2hMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgICAgICAuLi5wb1BhZ2VEeW5hbWljU2VhcmNoTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLFxyXG4gICAgICAgIC4uLnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHBvUGFnZUR5bmFtaWNTZWFyY2hMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRBZHZhbmNlZEZpbHRlckxpdGVyYWxzKHRoaXMubGl0ZXJhbHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxpdGVyYWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxzIHx8IHBvUGFnZUR5bmFtaWNTZWFyY2hMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZG9zIGNhbXBvcyB1c2Fkb3MgbmEgYnVzY2EgYXZhbsOnYWRhLiBDYXNvIG8gbWVzbW8gbsOjbyBzZWphIHBhc3NhZG8gYSBidXNjYSBhdmFuw6dhZGEgbsOjbyBzZXLDoSBleGliaWRhLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXJzJykgc2V0IGZpbHRlcnMoZmlsdGVyczogQXJyYXk8UG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnM+KSB7XHJcbiAgICB0aGlzLl9maWx0ZXJzID0gQXJyYXkuaXNBcnJheShmaWx0ZXJzKSA/IFsuLi5maWx0ZXJzXSA6IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnN0cmluZ2lmeSh0aGlzLl9maWx0ZXJzKSAhPT0gdGhpcy5zdHJpbmdpZnkodGhpcy5wcmV2aW91c0ZpbHRlcnMpKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGaWx0ZXJzKHRoaXMuZmlsdGVycyk7XHJcblxyXG4gICAgICB0aGlzLnByZXZpb3VzRmlsdGVycyA9IFsuLi50aGlzLl9maWx0ZXJzXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJzKCk6IEFycmF5PFBvUGFnZUR5bmFtaWNTZWFyY2hGaWx0ZXJzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMYXJndXJhIGRvIGNhbXBvIGRlIGJ1c2NhLCB1dGlsaXphbmRvIG8gKkdyaWQgU3lzdGVtKixcclxuICAgKiBlIGxpbWl0YWRvIGFvIG3DoXhpbW8gZGUgNiBjb2x1bmFzLiBPIHRhbWFuaG8gbcOtbmltbyDDqSBjb250cm9sYWRvXHJcbiAgICogY29uZm9ybWUgcmVzb2x1w6fDo28gZGUgdGVsYSBwYXJhIG1hbnRlciBhIGNvbnNpc3TDqm5jaWEgZG8gbGF5b3V0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1xdWljay1zZWFyY2gtd2lkdGgnKSBzZXQgcXVpY2tTZWFyY2hXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9xdWlja1NlYXJjaFdpZHRoID0gY29udmVydFRvSW50KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBxdWlja1NlYXJjaFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVpY2tTZWFyY2hXaWR0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBkZSBmaWx0cm9zIHF1ZSB0ZXLDo28gYSBvcMOnw6NvIGRlIGZlY2hhciBvY3VsdGFkYVxyXG4gICAqIGVtIHNldSByZXNwZWN0aXZvIGRpc2NsYWltZXIuIFV0aWxpemFyIG8gYXRyaWJ1dG8gYHByb3BlcnR5YCBkbyBmaWx0cm8uXHJcbiAgICpcclxuICAgKiBFeGVtcGxvIGRlIHV0aWxpemHDp8OjbzpcclxuICAgKiBgYGBcclxuICAgKiBbJ2NpdHknLCduYW1lJ107XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtY2xvc2UtZGlzY2xhaW1lcnMnKSBzZXQgaGlkZUNsb3NlRGlzY2xhaW1lcnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX2hpZGVDbG9zZURpc2NsYWltZXJzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVDbG9zZURpc2NsYWltZXJzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVDbG9zZURpc2NsYWltZXJzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0QWR2YW5jZWRGaWx0ZXJMaXRlcmFscyhsaXRlcmFsczogUG9QYWdlRHluYW1pY1NlYXJjaExpdGVyYWxzKSB7XHJcbiAgICB0aGlzLmFkdmFuY2VkRmlsdGVyTGl0ZXJhbHMgPSB7XHJcbiAgICAgIGNhbmNlbExhYmVsOiBsaXRlcmFscy5maWx0ZXJDYW5jZWxMYWJlbCxcclxuICAgICAgY29uZmlybUxhYmVsOiBsaXRlcmFscy5maWx0ZXJDb25maXJtTGFiZWwsXHJcbiAgICAgIHRpdGxlOiBsaXRlcmFscy5maWx0ZXJUaXRsZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RyaW5naWZ5KGNvbHVtbnM6IEFycmF5PFBvUGFnZUR5bmFtaWNTZWFyY2hGaWx0ZXJzPikge1xyXG4gICAgLy8gbsOjbyBmYXogbyBzdHJpbmdpZnkgZGEgcHJvcHJpZWRhZGUgc2VhcmNoU2VydmljZSwgcG9pcyBwb2RlIGNvbnRlciBvYmpldG8gY29tcGxleG8gZSBkaXNwYXJhciB1bSBlcnJvLlxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNvbHVtbnMsIChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmIChrZXkgIT09ICdzZWFyY2hTZXJ2aWNlJykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBvbkNoYW5nZUZpbHRlcnMoZmlsdGVyczogQXJyYXk8UG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnM+KTtcclxufVxyXG4iXX0=