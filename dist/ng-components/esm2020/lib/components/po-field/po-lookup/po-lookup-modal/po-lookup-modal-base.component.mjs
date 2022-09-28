import { __decorate } from "tslib";
import { EventEmitter, Input, Output, ViewChild, Directive } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InputBoolean } from '../../../../decorators';
import { isTypeof } from '../../../../utils/util';
import { poLocaleDefault } from '../../../../services/po-language/po-language.constant';
import { PoModalComponent } from '../../../../components/po-modal/po-modal.component';
import { PoTableColumnSortType } from '../../../po-table';
import { poTableLiteralsDefault } from '../../../po-table/po-table-base.component';
import { PoTableComponent } from './../../../po-table/po-table.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/po-language/po-language.service";
export const poLookupLiteralsDefault = {
    en: {
        modalPrimaryActionLabel: 'Select',
        modalSecondaryActionLabel: 'Cancel',
        modalPlaceholder: 'Search',
        modalTitle: 'Select a record',
        modalTableNoColumns: poTableLiteralsDefault.en.noColumns,
        modalTableNoData: poTableLiteralsDefault.en.noData,
        modalTableLoadingData: poTableLiteralsDefault.en.loadingData,
        modalTableLoadMoreData: poTableLiteralsDefault.en.loadMoreData,
        modalAdvancedSearch: 'Advanced search',
        modalAdvancedSearchTitle: 'Advanced search',
        modalAdvancedSearchPrimaryActionLabel: 'Filter',
        modalAdvancedSearchSecondaryActionLabel: 'Return',
        modalDisclaimerGroupTitle: 'Presenting results filtered by:'
    },
    es: {
        modalPrimaryActionLabel: 'Seleccionar',
        modalSecondaryActionLabel: 'Cancelar',
        modalPlaceholder: 'Buscar',
        modalTitle: 'Seleccione un registro',
        modalTableNoColumns: poTableLiteralsDefault.es.noColumns,
        modalTableNoData: poTableLiteralsDefault.es.noData,
        modalTableLoadingData: poTableLiteralsDefault.es.loadingData,
        modalTableLoadMoreData: poTableLiteralsDefault.es.loadMoreData,
        modalAdvancedSearch: 'Búsqueda Avanzada',
        modalAdvancedSearchTitle: 'Búsqueda Avanzada',
        modalAdvancedSearchPrimaryActionLabel: 'Filtrar',
        modalAdvancedSearchSecondaryActionLabel: 'Vuelve',
        modalDisclaimerGroupTitle: 'Presentar resultados filtrados por:'
    },
    pt: {
        modalPrimaryActionLabel: 'Selecionar',
        modalSecondaryActionLabel: 'Cancelar',
        modalPlaceholder: 'Pesquisar',
        modalTitle: 'Selecione um registro',
        modalTableNoColumns: poTableLiteralsDefault.pt.noColumns,
        modalTableNoData: poTableLiteralsDefault.pt.noData,
        modalTableLoadingData: poTableLiteralsDefault.pt.loadingData,
        modalTableLoadMoreData: poTableLiteralsDefault.pt.loadMoreData,
        modalAdvancedSearch: 'Busca avançada',
        modalAdvancedSearchTitle: 'Busca Avançada',
        modalAdvancedSearchPrimaryActionLabel: 'Filtrar',
        modalAdvancedSearchSecondaryActionLabel: 'Voltar',
        modalDisclaimerGroupTitle: 'Apresentando resultados filtrados por:'
    },
    ru: {
        modalPrimaryActionLabel: 'выбирать',
        modalSecondaryActionLabel: 'отменить',
        modalPlaceholder: 'поиск',
        modalTitle: 'Выберите запись',
        modalTableNoColumns: poTableLiteralsDefault.ru.noColumns,
        modalTableNoData: poTableLiteralsDefault.ru.noData,
        modalTableLoadingData: poTableLiteralsDefault.ru.loadingData,
        modalTableLoadMoreData: poTableLiteralsDefault.ru.loadMoreData,
        modalAdvancedSearch: 'Расширенный поиск',
        modalAdvancedSearchTitle: 'Расширенный поиск',
        modalAdvancedSearchPrimaryActionLabel: 'Фильтр',
        modalAdvancedSearchSecondaryActionLabel: 'Вернись',
        modalDisclaimerGroupTitle: 'Представление результатов отфильтровано по:'
    }
};
/**
 * @docsPrivate
 *
 * Classe base do componente Po Lookup Modal.
 */
export class PoLookupModalBaseComponent {
    constructor(languageService, changeDetector) {
        this.changeDetector = changeDetector;
        /** Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta. */
        this.infiniteScroll = false;
        /** Se verdadeiro, ativa a funcionalidade de multipla seleção. */
        this.multiple = false;
        /** Evento utilizado ao selecionar um registro da tabela. */
        this.model = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
         *
         * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.changeVisibleColumns = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
         *
         * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.columnRestoreManager = new EventEmitter();
        this.hasNext = true;
        this.isLoading = false;
        this.page = 1;
        this.pageSize = 10;
        this.searchValue = '';
        // Propriedade da modal de busca avançada:
        this.advancedFilterModalTitle = '';
        this.dynamicFormValue = {};
        this.isAdvancedFilter = false;
        this.selecteds = [];
        this.language = poLocaleDefault;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.primaryAction = {
            action: () => {
                let selectedsItems = [];
                if (!this.multiple) {
                    this.items.forEach(element => {
                        if (element['$selected']) {
                            selectedsItems.push(element);
                        }
                    });
                }
                else {
                    selectedsItems = this.selecteds;
                }
                this.model.emit(selectedsItems);
                this.poModal.close();
            },
            label: this.literals.modalPrimaryActionLabel
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.secondaryAction = {
            action: () => {
                this.model.emit(null);
                this.poModal.close();
            },
            label: this.literals.modalSecondaryActionLabel
        };
        this.language = languageService.getShortLanguage();
    }
    /** Objeto com as literais usadas no `po-lookup-modal`. */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poLookupLiteralsDefault[poLocaleDefault],
                ...poLookupLiteralsDefault[this.language],
                ...value
            };
            if (value.modalTitle) {
                this.title = this.literals.modalTitle;
            }
        }
        else {
            this._literals = poLookupLiteralsDefault[this.language];
        }
        this.primaryAction.label = this.literals.modalPrimaryActionLabel;
        this.secondaryAction.label = this.literals.modalSecondaryActionLabel;
        this.setTableLiterals();
    }
    get literals() {
        return this._literals || poLookupLiteralsDefault[this.language];
    }
    /** Título da modal. */
    set title(value) {
        this._title = isTypeof(value, 'string') ? value : this.literals.modalTitle;
    }
    get title() {
        return this._title;
    }
    ngOnDestroy() {
        if (this.filterSubscription) {
            this.filterSubscription.unsubscribe();
        }
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
        if (this.showMoreSubscription) {
            this.showMoreSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        this.setAdvancedFilterModalProperties();
        this.initializeData();
        this.setTableLiterals();
    }
    createDisclaimer() {
        this.disclaimerGroup.disclaimers = [];
        this.searchValue = '';
        for (const [key, value] of Object.entries(this.dynamicFormValue)) {
            this.addDisclaimer(value, key);
        }
        if (!Object.values(this.dynamicFormValue).some(v => v !== null && typeof v !== 'undefined')) {
            this.initializeData();
        }
    }
    addDisclaimer(value, property) {
        this.disclaimer = { property: property };
        this.disclaimer.value = value;
        this.disclaimerGroup.disclaimers = [...this.disclaimerGroup.disclaimers, this.disclaimer];
    }
    onChangeDisclaimerGroup() {
        if (!this.searchValue) {
            this.isLoading = true;
            this.searchValue = '';
            this.searchFilteredItems();
        }
    }
    search() {
        this.page = 1;
        if (this.searchValue) {
            this.isLoading = true;
            this.disclaimerGroup.disclaimers = [];
            this.searchFilteredItems();
        }
        else {
            this.initializeData();
        }
    }
    searchFilteredItems() {
        this.searchSubscription = this.getFilteredItems(this.searchValue)
            .pipe(catchError(error => {
            this.setLookupResponseProperties();
            return throwError(error);
        }))
            .subscribe((data) => this.setLookupResponseProperties(data), () => { });
    }
    showMoreEvent() {
        this.page++;
        this.isLoading = true;
        this.showMoreSubscription = this.getFilteredItems(this.searchValue)
            .pipe(catchError(error => {
            this.hasNext = false;
            this.isLoading = false;
            return throwError(error);
        }))
            .subscribe((data) => {
            this.items = [...this.items, ...data.items];
            this.hasNext = data.hasNext;
            this.isLoading = false;
            this.changeDetector.detectChanges();
            this.setSelectedItems();
        }, () => { });
    }
    //Método responsável por selecionar as linhas quando abre o modal.
    setSelectedItems() {
        this.selecteds.forEach(selectedItem => {
            if (this.multiple) {
                this.poTable.selectRowItem(item => item[this.fieldValue] === selectedItem.value);
            }
            else {
                this.poTable.selectRowItem(item => item[this.fieldValue] === selectedItem[this.fieldValue]);
            }
        });
    }
    //Método responsável por criar os disclaimers quando abre o modal.
    setDisclaimersItems() {
        if (this.selectedItems && !Array.isArray(this.selectedItems)) {
            this.multiple ? (this.selecteds = [{ value: this.selectedItems }]) : (this.selecteds = [this.selectedItems]);
            return;
        }
        if (this.selectedItems && this.selectedItems.length) {
            this.selecteds = [...this.selectedItems];
        }
    }
    setAdvancedFilterModalProperties() {
        this.advancedFilterModalTitle = this.literals.modalAdvancedSearchTitle;
        this.disclaimerGroup = {
            title: this.literals.modalDisclaimerGroupTitle,
            disclaimers: []
        };
        this.primaryActionAdvancedFilter = {
            action: () => {
                this.destroyDynamicForm();
                this.isAdvancedFilter = false;
                this.page = 1;
                this.createDisclaimer();
            },
            label: this.literals.modalAdvancedSearchPrimaryActionLabel
        };
        this.secondaryActionAdvancedFilter = {
            action: () => {
                this.destroyDynamicForm();
                this.isAdvancedFilter = false;
            },
            label: this.literals.modalAdvancedSearchSecondaryActionLabel
        };
    }
    getAdvancedFilters(advancedParams) {
        if (advancedParams && advancedParams.length > 0) {
            const filters = {};
            let validatedAdvacendFilters;
            advancedParams.forEach((filter) => {
                filters[filter.property] = filter.value instanceof Array ? filter.value.join() : filter.value;
                validatedAdvacendFilters = { ...validatedAdvacendFilters, ...filters };
            });
            return validatedAdvacendFilters;
        }
        return undefined;
    }
    getFilteredItems(filter) {
        const filteredParams = this.getFilteredParams(filter);
        return this.filterService.getFilteredItems(filteredParams);
    }
    getFilteredParams(filter) {
        const { page, pageSize, filterParams, sort } = this;
        const filteredParams = {};
        const order = this.getOrderParam(sort);
        const advancedFilters = this.getAdvancedFilters(this.disclaimerGroup.disclaimers);
        const params = { filter, page, pageSize, order, filterParams, advancedFilters };
        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined) {
                filteredParams[key] = params[key];
            }
        }
        return filteredParams;
    }
    getOrderParam(sort = { type: undefined }) {
        const { column, type } = sort;
        if (!column) {
            return;
        }
        if (type === PoTableColumnSortType.Descending) {
            return `-${column.property}`;
        }
        return `${column.property}`;
    }
    initializeData() {
        this.isLoading = true;
        this.filterSubscription = this.getFilteredItems('').subscribe(data => {
            this.setLookupResponseProperties(data);
        });
    }
    setLookupResponseProperties(data) {
        this.items = data?.items ?? [];
        this.hasNext = data?.hasNext ?? false;
        this.isLoading = false;
        this.changeDetector.detectChanges();
        this.setDisclaimersItems();
        this.setSelectedItems();
    }
    setTableLiterals() {
        this.tableLiterals = {
            'noColumns': this.literals.modalTableNoColumns,
            'noData': this.literals.modalTableNoData,
            'loadingData': this.literals.modalTableLoadingData,
            'loadMoreData': this.literals.modalTableLoadMoreData
        };
    }
}
PoLookupModalBaseComponent.ɵfac = function PoLookupModalBaseComponent_Factory(t) { return new (t || PoLookupModalBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoLookupModalBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoLookupModalBaseComponent, viewQuery: function PoLookupModalBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoModalComponent, 7);
        i0.ɵɵviewQuery(PoTableComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poModal = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poTable = _t.first);
    } }, inputs: { advancedFilters: ["p-advanced-filters", "advancedFilters"], columns: ["p-columns", "columns"], items: ["p-items", "items"], filterService: ["p-filter-service", "filterService"], filterParams: ["p-filter-params", "filterParams"], infiniteScroll: ["p-infinite-scroll", "infiniteScroll"], multiple: ["p-multiple", "multiple"], selectedItems: ["p-selected-items", "selectedItems"], fieldLabel: ["p-field-label", "fieldLabel"], fieldValue: ["p-field-value", "fieldValue"], literals: ["p-literals", "literals"], title: ["p-title", "title"] }, outputs: { model: "p-change-model", changeVisibleColumns: "p-change-visible-columns", columnRestoreManager: "p-restore-column-manager" } });
__decorate([
    InputBoolean()
], PoLookupModalBaseComponent.prototype, "infiniteScroll", void 0);
__decorate([
    InputBoolean()
], PoLookupModalBaseComponent.prototype, "multiple", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLookupModalBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }, { type: i0.ChangeDetectorRef }]; }, { poModal: [{
            type: ViewChild,
            args: [PoModalComponent, { static: true }]
        }], poTable: [{
            type: ViewChild,
            args: [PoTableComponent, { static: true }]
        }], advancedFilters: [{
            type: Input,
            args: ['p-advanced-filters']
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }], items: [{
            type: Input,
            args: ['p-items']
        }], filterService: [{
            type: Input,
            args: ['p-filter-service']
        }], filterParams: [{
            type: Input,
            args: ['p-filter-params']
        }], infiniteScroll: [{
            type: Input,
            args: ['p-infinite-scroll']
        }], multiple: [{
            type: Input,
            args: ['p-multiple']
        }], model: [{
            type: Output,
            args: ['p-change-model']
        }], selectedItems: [{
            type: Input,
            args: ['p-selected-items']
        }], fieldLabel: [{
            type: Input,
            args: ['p-field-label']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }], changeVisibleColumns: [{
            type: Output,
            args: ['p-change-visible-columns']
        }], columnRestoreManager: [{
            type: Output,
            args: ['p-restore-column-manager']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9va3VwLW1vZGFsLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWxvb2t1cC9wby1sb29rdXAtbW9kYWwvcG8tbG9va3VwLW1vZGFsLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXhILE9BQU8sRUFBNEIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUV4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQVduRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBRTFFLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDLEVBQUUsRUFBb0I7UUFDcEIsdUJBQXVCLEVBQUUsUUFBUTtRQUNqQyx5QkFBeUIsRUFBRSxRQUFRO1FBQ25DLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsU0FBUztRQUN4RCxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsTUFBTTtRQUNsRCxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVztRQUM1RCxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsWUFBWTtRQUM5RCxtQkFBbUIsRUFBRSxpQkFBaUI7UUFDdEMsd0JBQXdCLEVBQUUsaUJBQWlCO1FBQzNDLHFDQUFxQyxFQUFFLFFBQVE7UUFDL0MsdUNBQXVDLEVBQUUsUUFBUTtRQUNqRCx5QkFBeUIsRUFBRSxpQ0FBaUM7S0FDN0Q7SUFDRCxFQUFFLEVBQW9CO1FBQ3BCLHVCQUF1QixFQUFFLGFBQWE7UUFDdEMseUJBQXlCLEVBQUUsVUFBVTtRQUNyQyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFVBQVUsRUFBRSx3QkFBd0I7UUFDcEMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFNBQVM7UUFDeEQsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLE1BQU07UUFDbEQscUJBQXFCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFdBQVc7UUFDNUQsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFlBQVk7UUFDOUQsbUJBQW1CLEVBQUUsbUJBQW1CO1FBQ3hDLHdCQUF3QixFQUFFLG1CQUFtQjtRQUM3QyxxQ0FBcUMsRUFBRSxTQUFTO1FBQ2hELHVDQUF1QyxFQUFFLFFBQVE7UUFDakQseUJBQXlCLEVBQUUscUNBQXFDO0tBQ2pFO0lBQ0QsRUFBRSxFQUFvQjtRQUNwQix1QkFBdUIsRUFBRSxZQUFZO1FBQ3JDLHlCQUF5QixFQUFFLFVBQVU7UUFDckMsZ0JBQWdCLEVBQUUsV0FBVztRQUM3QixVQUFVLEVBQUUsdUJBQXVCO1FBQ25DLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxTQUFTO1FBQ3hELGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxNQUFNO1FBQ2xELHFCQUFxQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxXQUFXO1FBQzVELHNCQUFzQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxZQUFZO1FBQzlELG1CQUFtQixFQUFFLGdCQUFnQjtRQUNyQyx3QkFBd0IsRUFBRSxnQkFBZ0I7UUFDMUMscUNBQXFDLEVBQUUsU0FBUztRQUNoRCx1Q0FBdUMsRUFBRSxRQUFRO1FBQ2pELHlCQUF5QixFQUFFLHdDQUF3QztLQUNwRTtJQUNELEVBQUUsRUFBb0I7UUFDcEIsdUJBQXVCLEVBQUUsVUFBVTtRQUNuQyx5QkFBeUIsRUFBRSxVQUFVO1FBQ3JDLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsU0FBUztRQUN4RCxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsTUFBTTtRQUNsRCxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVztRQUM1RCxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsWUFBWTtRQUM5RCxtQkFBbUIsRUFBRSxtQkFBbUI7UUFDeEMsd0JBQXdCLEVBQUUsbUJBQW1CO1FBQzdDLHFDQUFxQyxFQUFFLFFBQVE7UUFDL0MsdUNBQXVDLEVBQUUsU0FBUztRQUNsRCx5QkFBeUIsRUFBRSw2Q0FBNkM7S0FDekU7Q0FDRixDQUFDO0FBRUY7Ozs7R0FJRztBQUVILE1BQU0sT0FBZ0IsMEJBQTBCO0lBcUs5QyxZQUFZLGVBQWtDLEVBQVksY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBckkzRiw2R0FBNkc7UUFDakUsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFNUUsaUVBQWlFO1FBQzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFL0QsNERBQTREO1FBQ2xDLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWlCN0U7Ozs7Ozs7O1dBUUc7UUFDaUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFN0Y7Ozs7Ozs7O1dBUUc7UUFDaUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFN0YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QiwwQ0FBMEM7UUFDMUMsNkJBQXdCLEdBQUcsRUFBRSxDQUFDO1FBQzlCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUd0QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFHekIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQVVuQixhQUFRLEdBQVcsZUFBZSxDQUFDO1FBRTNDLDhEQUE4RDtRQUM5RCxrQkFBYSxHQUFrQjtZQUM3QixNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNYLElBQUksY0FBYyxHQUFlLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUMzQixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTs0QkFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDOUI7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ2pDO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUI7U0FDN0MsQ0FBQztRQUVGLDhEQUE4RDtRQUM5RCxvQkFBZSxHQUFrQjtZQUMvQixNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUI7U0FDL0MsQ0FBQztRQW1DQSxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFsQ0QsMERBQTBEO0lBQzFELElBQXlCLFFBQVEsQ0FBQyxLQUF1QjtRQUN2RCxJQUFJLEtBQUssWUFBWSxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDO2dCQUMzQyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pDLEdBQUcsS0FBSzthQUNULENBQUM7WUFDRixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDdkM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHVCQUF1QjtJQUN2QixJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDN0UsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBTUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQzNGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVSxFQUFFLFFBQWdCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELHVCQUF1QjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFZCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRXRDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM5RCxJQUFJLENBQ0gsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxDQUNSLENBQUMsSUFBeUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxFQUNyRSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hFLElBQUksQ0FDSCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQ1IsQ0FBQyxJQUF5QixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQ0QsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUNULENBQUM7SUFDTixDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQzdGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM3RyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVPLGdDQUFnQztRQUN0QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztRQUV2RSxJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QjtZQUM5QyxXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBRUYsSUFBSSxDQUFDLDJCQUEyQixHQUFHO1lBQ2pDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQ0FBcUM7U0FDM0QsQ0FBQztRQUVGLElBQUksQ0FBQyw2QkFBNkIsR0FBRztZQUNuQyxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNYLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUM7WUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1Q0FBdUM7U0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxjQUFtQjtRQUM1QyxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxNQUFNLE9BQU8sR0FBVyxFQUFFLENBQUM7WUFDM0IsSUFBSSx3QkFBNkIsQ0FBQztZQUVsQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRTlGLHdCQUF3QixHQUFHLEVBQUUsR0FBRyx3QkFBd0IsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyx3QkFBd0IsQ0FBQztTQUNqQztRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFjO1FBQ3JDLE1BQU0sY0FBYyxHQUFnQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkYsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxNQUFjO1FBQ3RDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFcEQsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEYsTUFBTSxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxDQUFDO1FBRWhGLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUMzRCxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQTBCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtRQUNqRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUU5QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLEtBQUsscUJBQXFCLENBQUMsVUFBVSxFQUFFO1lBQzdDLE9BQU8sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7UUFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywyQkFBMkIsQ0FBQyxJQUEwQjtRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CO1lBQzlDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQjtZQUN4QyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUI7WUFDbEQsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCO1NBQ3JELENBQUM7SUFDSixDQUFDOztvR0E3WW1CLDBCQUEwQjs2RUFBMUIsMEJBQTBCO3VCQUNuQyxnQkFBZ0I7dUJBQ2hCLGdCQUFnQjs7Ozs7O0FBK0JpQjtJQUFmLFlBQVksRUFBRTtrRUFBaUM7QUFHdkM7SUFBZixZQUFZLEVBQUU7NERBQTJCO3VGQXBDM0MsMEJBQTBCO2NBRC9DLFNBQVM7b0dBRXVDLE9BQU87a0JBQXJELFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0UsT0FBTztrQkFBckQsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFhaEIsZUFBZTtrQkFBM0MsS0FBSzttQkFBQyxvQkFBb0I7WUFNUCxPQUFPO2tCQUExQixLQUFLO21CQUFDLFdBQVc7WUFHQSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHVyxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQjtZQUdDLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBR29CLGNBQWM7a0JBQXpELEtBQUs7bUJBQUMsbUJBQW1CO1lBR1csUUFBUTtrQkFBNUMsS0FBSzttQkFBQyxZQUFZO1lBR08sS0FBSztrQkFBOUIsTUFBTTttQkFBQyxnQkFBZ0I7WUFHRyxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQjtZQUdELFVBQVU7a0JBQWpDLEtBQUs7bUJBQUMsZUFBZTtZQVNFLFVBQVU7a0JBQWpDLEtBQUs7bUJBQUMsZUFBZTtZQVdjLG9CQUFvQjtrQkFBdkQsTUFBTTttQkFBQywwQkFBMEI7WUFXRSxvQkFBb0I7a0JBQXZELE1BQU07bUJBQUMsMEJBQTBCO1lBMERULFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQXVCRyxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIERpcmVjdGl2ZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjb3JhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc1R5cGVvZiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcbmltcG9ydCB7IFBvTW9kYWxBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BvLW1vZGFsJztcclxuaW1wb3J0IHsgUG9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcG8tbW9kYWwvcG8tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbHVtblNvcnQgfSBmcm9tICcuLi8uLi8uLi9wby10YWJsZS9pbnRlcmZhY2VzL3BvLXRhYmxlLWNvbHVtbi1zb3J0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvVGFibGVDb2x1bW5Tb3J0VHlwZSB9IGZyb20gJy4uLy4uLy4uL3BvLXRhYmxlJztcclxuaW1wb3J0IHsgcG9UYWJsZUxpdGVyYWxzRGVmYXVsdCB9IGZyb20gJy4uLy4uLy4uL3BvLXRhYmxlL3BvLXRhYmxlLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvTG9va3VwQ29sdW1uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1sb29rdXAtY29sdW1uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTG9va3VwRmlsdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1sb29rdXAtZmlsdGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTG9va3VwRmlsdGVyZWRJdGVtc1BhcmFtcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tbG9va3VwLWZpbHRlcmVkLWl0ZW1zLXBhcmFtcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0xvb2t1cExpdGVyYWxzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1sb29rdXAtbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Mb29rdXBSZXNwb25zZUFwaSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tbG9va3VwLXJlc3BvbnNlLWFwaS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0Rpc2NsYWltZXIgfSBmcm9tICcuLy4uLy4uLy4uL3BvLWRpc2NsYWltZXIvcG8tZGlzY2xhaW1lci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0Rpc2NsYWltZXJHcm91cCB9IGZyb20gJy4vLi4vLi4vLi4vcG8tZGlzY2xhaW1lci1ncm91cC9wby1kaXNjbGFpbWVyLWdyb3VwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTG9va3VwQWR2YW5jZWRGaWx0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWxvb2t1cC1hZHZhbmNlZC1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vLi4vcG8tdGFibGUvcG8tdGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBwb0xvb2t1cExpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogPFBvTG9va3VwTGl0ZXJhbHM+e1xyXG4gICAgbW9kYWxQcmltYXJ5QWN0aW9uTGFiZWw6ICdTZWxlY3QnLFxyXG4gICAgbW9kYWxTZWNvbmRhcnlBY3Rpb25MYWJlbDogJ0NhbmNlbCcsXHJcbiAgICBtb2RhbFBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcclxuICAgIG1vZGFsVGl0bGU6ICdTZWxlY3QgYSByZWNvcmQnLFxyXG4gICAgbW9kYWxUYWJsZU5vQ29sdW1uczogcG9UYWJsZUxpdGVyYWxzRGVmYXVsdC5lbi5ub0NvbHVtbnMsXHJcbiAgICBtb2RhbFRhYmxlTm9EYXRhOiBwb1RhYmxlTGl0ZXJhbHNEZWZhdWx0LmVuLm5vRGF0YSxcclxuICAgIG1vZGFsVGFibGVMb2FkaW5nRGF0YTogcG9UYWJsZUxpdGVyYWxzRGVmYXVsdC5lbi5sb2FkaW5nRGF0YSxcclxuICAgIG1vZGFsVGFibGVMb2FkTW9yZURhdGE6IHBvVGFibGVMaXRlcmFsc0RlZmF1bHQuZW4ubG9hZE1vcmVEYXRhLFxyXG4gICAgbW9kYWxBZHZhbmNlZFNlYXJjaDogJ0FkdmFuY2VkIHNlYXJjaCcsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoVGl0bGU6ICdBZHZhbmNlZCBzZWFyY2gnLFxyXG4gICAgbW9kYWxBZHZhbmNlZFNlYXJjaFByaW1hcnlBY3Rpb25MYWJlbDogJ0ZpbHRlcicsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoU2Vjb25kYXJ5QWN0aW9uTGFiZWw6ICdSZXR1cm4nLFxyXG4gICAgbW9kYWxEaXNjbGFpbWVyR3JvdXBUaXRsZTogJ1ByZXNlbnRpbmcgcmVzdWx0cyBmaWx0ZXJlZCBieTonXHJcbiAgfSxcclxuICBlczogPFBvTG9va3VwTGl0ZXJhbHM+e1xyXG4gICAgbW9kYWxQcmltYXJ5QWN0aW9uTGFiZWw6ICdTZWxlY2Npb25hcicsXHJcbiAgICBtb2RhbFNlY29uZGFyeUFjdGlvbkxhYmVsOiAnQ2FuY2VsYXInLFxyXG4gICAgbW9kYWxQbGFjZWhvbGRlcjogJ0J1c2NhcicsXHJcbiAgICBtb2RhbFRpdGxlOiAnU2VsZWNjaW9uZSB1biByZWdpc3RybycsXHJcbiAgICBtb2RhbFRhYmxlTm9Db2x1bW5zOiBwb1RhYmxlTGl0ZXJhbHNEZWZhdWx0LmVzLm5vQ29sdW1ucyxcclxuICAgIG1vZGFsVGFibGVOb0RhdGE6IHBvVGFibGVMaXRlcmFsc0RlZmF1bHQuZXMubm9EYXRhLFxyXG4gICAgbW9kYWxUYWJsZUxvYWRpbmdEYXRhOiBwb1RhYmxlTGl0ZXJhbHNEZWZhdWx0LmVzLmxvYWRpbmdEYXRhLFxyXG4gICAgbW9kYWxUYWJsZUxvYWRNb3JlRGF0YTogcG9UYWJsZUxpdGVyYWxzRGVmYXVsdC5lcy5sb2FkTW9yZURhdGEsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoOiAnQsO6c3F1ZWRhIEF2YW56YWRhJyxcclxuICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hUaXRsZTogJ0LDunNxdWVkYSBBdmFuemFkYScsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoUHJpbWFyeUFjdGlvbkxhYmVsOiAnRmlsdHJhcicsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoU2Vjb25kYXJ5QWN0aW9uTGFiZWw6ICdWdWVsdmUnLFxyXG4gICAgbW9kYWxEaXNjbGFpbWVyR3JvdXBUaXRsZTogJ1ByZXNlbnRhciByZXN1bHRhZG9zIGZpbHRyYWRvcyBwb3I6J1xyXG4gIH0sXHJcbiAgcHQ6IDxQb0xvb2t1cExpdGVyYWxzPntcclxuICAgIG1vZGFsUHJpbWFyeUFjdGlvbkxhYmVsOiAnU2VsZWNpb25hcicsXHJcbiAgICBtb2RhbFNlY29uZGFyeUFjdGlvbkxhYmVsOiAnQ2FuY2VsYXInLFxyXG4gICAgbW9kYWxQbGFjZWhvbGRlcjogJ1Blc3F1aXNhcicsXHJcbiAgICBtb2RhbFRpdGxlOiAnU2VsZWNpb25lIHVtIHJlZ2lzdHJvJyxcclxuICAgIG1vZGFsVGFibGVOb0NvbHVtbnM6IHBvVGFibGVMaXRlcmFsc0RlZmF1bHQucHQubm9Db2x1bW5zLFxyXG4gICAgbW9kYWxUYWJsZU5vRGF0YTogcG9UYWJsZUxpdGVyYWxzRGVmYXVsdC5wdC5ub0RhdGEsXHJcbiAgICBtb2RhbFRhYmxlTG9hZGluZ0RhdGE6IHBvVGFibGVMaXRlcmFsc0RlZmF1bHQucHQubG9hZGluZ0RhdGEsXHJcbiAgICBtb2RhbFRhYmxlTG9hZE1vcmVEYXRhOiBwb1RhYmxlTGl0ZXJhbHNEZWZhdWx0LnB0LmxvYWRNb3JlRGF0YSxcclxuICAgIG1vZGFsQWR2YW5jZWRTZWFyY2g6ICdCdXNjYSBhdmFuw6dhZGEnLFxyXG4gICAgbW9kYWxBZHZhbmNlZFNlYXJjaFRpdGxlOiAnQnVzY2EgQXZhbsOnYWRhJyxcclxuICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hQcmltYXJ5QWN0aW9uTGFiZWw6ICdGaWx0cmFyJyxcclxuICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hTZWNvbmRhcnlBY3Rpb25MYWJlbDogJ1ZvbHRhcicsXHJcbiAgICBtb2RhbERpc2NsYWltZXJHcm91cFRpdGxlOiAnQXByZXNlbnRhbmRvIHJlc3VsdGFkb3MgZmlsdHJhZG9zIHBvcjonXHJcbiAgfSxcclxuICBydTogPFBvTG9va3VwTGl0ZXJhbHM+e1xyXG4gICAgbW9kYWxQcmltYXJ5QWN0aW9uTGFiZWw6ICfQstGL0LHQuNGA0LDRgtGMJyxcclxuICAgIG1vZGFsU2Vjb25kYXJ5QWN0aW9uTGFiZWw6ICfQvtGC0LzQtdC90LjRgtGMJyxcclxuICAgIG1vZGFsUGxhY2Vob2xkZXI6ICfQv9C+0LjRgdC6JyxcclxuICAgIG1vZGFsVGl0bGU6ICfQktGL0LHQtdGA0LjRgtC1INC30LDQv9C40YHRjCcsXHJcbiAgICBtb2RhbFRhYmxlTm9Db2x1bW5zOiBwb1RhYmxlTGl0ZXJhbHNEZWZhdWx0LnJ1Lm5vQ29sdW1ucyxcclxuICAgIG1vZGFsVGFibGVOb0RhdGE6IHBvVGFibGVMaXRlcmFsc0RlZmF1bHQucnUubm9EYXRhLFxyXG4gICAgbW9kYWxUYWJsZUxvYWRpbmdEYXRhOiBwb1RhYmxlTGl0ZXJhbHNEZWZhdWx0LnJ1LmxvYWRpbmdEYXRhLFxyXG4gICAgbW9kYWxUYWJsZUxvYWRNb3JlRGF0YTogcG9UYWJsZUxpdGVyYWxzRGVmYXVsdC5ydS5sb2FkTW9yZURhdGEsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoOiAn0KDQsNGB0YjQuNGA0LXQvdC90YvQuSDQv9C+0LjRgdC6JyxcclxuICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hUaXRsZTogJ9Cg0LDRgdGI0LjRgNC10L3QvdGL0Lkg0L/QvtC40YHQuicsXHJcbiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoUHJpbWFyeUFjdGlvbkxhYmVsOiAn0KTQuNC70YzRgtGAJyxcclxuICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hTZWNvbmRhcnlBY3Rpb25MYWJlbDogJ9CS0LXRgNC90LjRgdGMJyxcclxuICAgIG1vZGFsRGlzY2xhaW1lckdyb3VwVGl0bGU6ICfQn9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSDRgNC10LfRg9C70YzRgtCw0YLQvtCyINC+0YLRhNC40LvRjNGC0YDQvtCy0LDQvdC+INC/0L46J1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQ2xhc3NlIGJhc2UgZG8gY29tcG9uZW50ZSBQbyBMb29rdXAgTW9kYWwuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvTG9va3VwTW9kYWxCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoUG9Nb2RhbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcG9Nb2RhbDogUG9Nb2RhbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKFBvVGFibGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBvVGFibGU6IFBvVGFibGVDb21wb25lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9iamV0byBjb20gb3MgY2FtcG9zIHF1ZSBzZXLDo28gY3JpYWRvcyBubyBidXNjYSBhdmFuw6dhZGEuXHJcbiAgICpcclxuICAgKiA+IENhc28gbsOjbyBzZWphIHBhc3NhZG8gdW0gb2JqZXRvIG91IGVudMOjbyBlbGUgZXN0ZWphIGVtIGJyYW5jbyBvIGxpbmsgZGUgYnVzY2EgYXZhbsOnYWRhIGZpY2Fyw6EgZXNjb25kaWRvLlxyXG4gICAqXHJcbiAgICogRXhlbXBsbyBkZSBVUkwgY29tIGJ1c2NhIGF2YW7Dp2FkYTogaHR0cDovL2xvY2FsaG9zdDozMDAwL3YxL2hlcm9lcz9maWx0ZXI9JnBhZ2U9MSZwYWdlU2l6ZT0xMGAmbmFtZT1Ub255JTIwU3Rhcmsmbmlja25hbWU9SG9tZW0lMjBkZSUyMEZlcnJvJmVtYWlsPWlybm1hbkBtYXJ2ZWwuY29tYFxyXG4gICAqXHJcbiAgICogQ2FzbyBhbGd1bSBwYXLDom1ldHJvIHNlamEgdW1hIGxpc3RhLCBhIGNvbmNhdGVuYcOnw6NvIMOpIGZlaXRhIHV0aWxpemFuZG8gdmlyZ3VsYS5cclxuICAgKiBFeGVtcGxvOiBodHRwOi8vbG9jYWxob3N0OjMwMDAvdjEvaGVyb2VzP2ZpbHRlcj0mcGFnZT0xJnBhZ2VTaXplPTEwYCZuYW1lPVRvbnklMjBTdGFyayxQZXRlciUyMFBhcmtlcixHb2hhbmBcclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hZHZhbmNlZC1maWx0ZXJzJykgYWR2YW5jZWRGaWx0ZXJzOiBBcnJheTxQb0xvb2t1cEFkdmFuY2VkRmlsdGVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGEgZGFzIGNvbHVuYXMgZGEgdGFiZWxhLlxyXG4gICAqIEVzc2EgcHJvcHJpZWRhZGUgZGV2ZSByZWNlYmVyIHVtIGFycmF5IGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIFBvTG9va3VwQ29sdW1uLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1jb2x1bW5zJykgY29sdW1uczogQXJyYXk8UG9Mb29rdXBDb2x1bW4+O1xyXG5cclxuICAvKiogTGlzdGEgZGUgaXRlbnMgZGEgdGFiZWxhLiAqL1xyXG4gIEBJbnB1dCgncC1pdGVtcycpIGl0ZW1zOiBBcnJheTxhbnk+O1xyXG5cclxuICAvKiogQ2xhc3NlIGRlIHNlcnZpw6dvIGNvbSBhIGltcGxlbWVudGHDp8OjbyBkbyBjbGllbnRlLiAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXItc2VydmljZScpIGZpbHRlclNlcnZpY2U6IFBvTG9va3VwRmlsdGVyO1xyXG5cclxuICAvKiogQ2xhc3NlIGRlIHNlcnZpw6dvIGNvbSBhIGltcGxlbWVudGHDp8OjbyBkbyBjbGllbnRlLiAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXItcGFyYW1zJykgZmlsdGVyUGFyYW1zOiBhbnk7XHJcblxyXG4gIC8qKiBTZSB2ZXJkYWRlaXJvLCBhdGl2YSBhIGZ1bmNpb25hbGlkYWRlIGRlIHNjcm9sbCBpbmZpbml0byBwYXJhIGEgdGFiZWxhIGV4aWJpZGEgbm8gcmV0b3JubyBkYSBjb25zdWx0YS4gKi9cclxuICBASW5wdXQoJ3AtaW5maW5pdGUtc2Nyb2xsJykgQElucHV0Qm9vbGVhbigpIGluZmluaXRlU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZSB2ZXJkYWRlaXJvLCBhdGl2YSBhIGZ1bmNpb25hbGlkYWRlIGRlIG11bHRpcGxhIHNlbGXDp8Ojby4gKi9cclxuICBASW5wdXQoJ3AtbXVsdGlwbGUnKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEV2ZW50byB1dGlsaXphZG8gYW8gc2VsZWNpb25hciB1bSByZWdpc3RybyBkYSB0YWJlbGEuICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtbW9kZWwnKSBtb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIENsYXNzZSBkZSBzZXJ2acOnbyBjb20gaXRlbXMgc2VsZWNpb25hZG9zICovXHJcbiAgQElucHV0KCdwLXNlbGVjdGVkLWl0ZW1zJykgc2VsZWN0ZWRJdGVtczogYW55O1xyXG5cclxuICAvKiogSW5kaWNhIGEgY29sdW5hIHF1ZSBzZXLDoSB1dGlsaXphZGEgY29tbyBkZXNjcmnDp8OjbyBkbyBjYW1wbyBlIGNvbW8gZmlsdHJvIGRlbnRybyBkYSBqYW5lbGEuICovXHJcbiAgQElucHV0KCdwLWZpZWxkLWxhYmVsJykgZmllbGRMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBhIGNvbHVuYSBxdWUgc2Vyw6EgdXRpbGl6YWRhIGNvbW8gdmFsb3IgZG8gY2FtcG8uXHJcbiAgICpcclxuICAgKiA+IEF0ZW7Dp8OjbzogQ2FzbyBuw6NvIHNlamEgcGFzc2FkYSBvdSB0ZW5oYSBvIGNvbnRlw7pkbyBpbmNvcnJldG8sIG7Do28gaXLDoSBhdHVhbGl6YXIgbyBtb2RlbCBkbyBmb3JtdWzDoXJpby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmllbGQtdmFsdWUnKSBmaWVsZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBmZWNoYXIgbyBwb3BvdmVyIGRvIGdlcmVuY2lhZG9yIGRlIGNvbHVuYXMgYXDDs3MgYWx0ZXJhciBhcyBjb2x1bmFzIHZpc8OtdmVpcy5cclxuICAgKlxyXG4gICAqIE8gY29tcG9uZW50ZSBlbnZpYSBjb21vIHBhcsOibWV0cm8gdW0gYXJyYXkgZGUgc3RyaW5nIGNvbSBhcyBjb2x1bmFzIHZpc8OtdmVpcyBhdHVhbGl6YWRhcy5cclxuICAgKiBQb3IgZXhlbXBsbzogW1wiaWRDYXJkXCIsIFwibmFtZVwiLCBcImhpcmVTdGF0dXNcIiwgXCJhZ2VcIl0uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UtdmlzaWJsZS1jb2x1bW5zJykgY2hhbmdlVmlzaWJsZUNvbHVtbnMgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZz4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBjbGljYXIgbm8gYm90w6NvIGRlIHJlc3RhdXJhciBwYWRyw6NvIG5vIGdlcmVuY2lhZG9yIGRlIGNvbHVuYXMuXHJcbiAgICpcclxuICAgKiBPIGNvbXBvbmVudGUgZW52aWEgY29tbyBwYXLDom1ldHJvIHVtIGFycmF5IGRlIHN0cmluZyBjb20gYXMgY29sdW5hcyBjb25maWd1cmFkYXMgaW5pY2lhbG1lbnRlLlxyXG4gICAqIFBvciBleGVtcGxvOiBbXCJpZENhcmRcIiwgXCJuYW1lXCIsIFwiaGlyZVN0YXR1c1wiLCBcImFnZVwiXS5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXJlc3RvcmUtY29sdW1uLW1hbmFnZXInKSBjb2x1bW5SZXN0b3JlTWFuYWdlciA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8U3RyaW5nPj4oKTtcclxuXHJcbiAgaGFzTmV4dCA9IHRydWU7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcGFnZSA9IDE7XHJcbiAgcGFnZVNpemUgPSAxMDtcclxuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgdGFibGVMaXRlcmFsczogYW55O1xyXG5cclxuICAvLyBQcm9wcmllZGFkZSBkYSBtb2RhbCBkZSBidXNjYSBhdmFuw6dhZGE6XHJcbiAgYWR2YW5jZWRGaWx0ZXJNb2RhbFRpdGxlID0gJyc7XHJcbiAgZHluYW1pY0Zvcm1WYWx1ZSA9IHt9O1xyXG4gIGRpc2NsYWltZXIhOiBQb0Rpc2NsYWltZXI7XHJcbiAgZGlzY2xhaW1lckdyb3VwITogUG9EaXNjbGFpbWVyR3JvdXA7XHJcbiAgaXNBZHZhbmNlZEZpbHRlciA9IGZhbHNlO1xyXG4gIHByaW1hcnlBY3Rpb25BZHZhbmNlZEZpbHRlciE6IFBvTW9kYWxBY3Rpb247XHJcbiAgc2Vjb25kYXJ5QWN0aW9uQWR2YW5jZWRGaWx0ZXIhOiBQb01vZGFsQWN0aW9uO1xyXG4gIHNlbGVjdGVkczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgc29ydDogUG9UYWJsZUNvbHVtblNvcnQ7XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBzZWFyY2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHNob3dNb3JlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb0xvb2t1cExpdGVyYWxzO1xyXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nID0gcG9Mb2NhbGVEZWZhdWx0O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHByaW1hcnlBY3Rpb246IFBvTW9kYWxBY3Rpb24gPSB7XHJcbiAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgbGV0IHNlbGVjdGVkc0l0ZW1zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgIGlmIChlbGVtZW50Wyckc2VsZWN0ZWQnXSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZHNJdGVtcy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGVjdGVkc0l0ZW1zID0gdGhpcy5zZWxlY3RlZHM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tb2RlbC5lbWl0KHNlbGVjdGVkc0l0ZW1zKTtcclxuICAgICAgdGhpcy5wb01vZGFsLmNsb3NlKCk7XHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHRoaXMubGl0ZXJhbHMubW9kYWxQcmltYXJ5QWN0aW9uTGFiZWxcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHNlY29uZGFyeUFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHtcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGVsLmVtaXQobnVsbCk7XHJcbiAgICAgIHRoaXMucG9Nb2RhbC5jbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLm1vZGFsU2Vjb25kYXJ5QWN0aW9uTGFiZWxcclxuICB9O1xyXG5cclxuICAvKiogT2JqZXRvIGNvbSBhcyBsaXRlcmFpcyB1c2FkYXMgbm8gYHBvLWxvb2t1cC1tb2RhbGAuICovXHJcbiAgQElucHV0KCdwLWxpdGVyYWxzJykgc2V0IGxpdGVyYWxzKHZhbHVlOiBQb0xvb2t1cExpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb0xvb2t1cExpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLnBvTG9va3VwTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLFxyXG4gICAgICAgIC4uLnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh2YWx1ZS5tb2RhbFRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMubGl0ZXJhbHMubW9kYWxUaXRsZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSBwb0xvb2t1cExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICAgIH1cclxuICAgIHRoaXMucHJpbWFyeUFjdGlvbi5sYWJlbCA9IHRoaXMubGl0ZXJhbHMubW9kYWxQcmltYXJ5QWN0aW9uTGFiZWw7XHJcbiAgICB0aGlzLnNlY29uZGFyeUFjdGlvbi5sYWJlbCA9IHRoaXMubGl0ZXJhbHMubW9kYWxTZWNvbmRhcnlBY3Rpb25MYWJlbDtcclxuICAgIHRoaXMuc2V0VGFibGVMaXRlcmFscygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxpdGVyYWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxzIHx8IHBvTG9va3VwTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgLyoqIFTDrXR1bG8gZGEgbW9kYWwuICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gaXNUeXBlb2YodmFsdWUsICdzdHJpbmcnKSA/IHZhbHVlIDogdGhpcy5saXRlcmFscy5tb2RhbFRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSwgcHJvdGVjdGVkIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmZpbHRlclN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlYXJjaFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnNlYXJjaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNob3dNb3JlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2hvd01vcmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRBZHZhbmNlZEZpbHRlck1vZGFsUHJvcGVydGllcygpO1xyXG4gICAgdGhpcy5pbml0aWFsaXplRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRUYWJsZUxpdGVyYWxzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEaXNjbGFpbWVyKCkge1xyXG4gICAgdGhpcy5kaXNjbGFpbWVyR3JvdXAuZGlzY2xhaW1lcnMgPSBbXTtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmR5bmFtaWNGb3JtVmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuYWRkRGlzY2xhaW1lcih2YWx1ZSwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIU9iamVjdC52YWx1ZXModGhpcy5keW5hbWljRm9ybVZhbHVlKS5zb21lKHYgPT4gdiAhPT0gbnVsbCAmJiB0eXBlb2YgdiAhPT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZERpc2NsYWltZXIodmFsdWU6IGFueSwgcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgdGhpcy5kaXNjbGFpbWVyID0gPGFueT57IHByb3BlcnR5OiBwcm9wZXJ0eSB9O1xyXG4gICAgdGhpcy5kaXNjbGFpbWVyLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5kaXNjbGFpbWVyR3JvdXAuZGlzY2xhaW1lcnMgPSBbLi4udGhpcy5kaXNjbGFpbWVyR3JvdXAuZGlzY2xhaW1lcnMsIHRoaXMuZGlzY2xhaW1lcl07XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZURpc2NsYWltZXJHcm91cCgpIHtcclxuICAgIGlmICghdGhpcy5zZWFyY2hWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcclxuXHJcbiAgICAgIHRoaXMuc2VhcmNoRmlsdGVyZWRJdGVtcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlID0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWFyY2hWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzY2xhaW1lckdyb3VwLmRpc2NsYWltZXJzID0gW107XHJcblxyXG4gICAgICB0aGlzLnNlYXJjaEZpbHRlcmVkSXRlbXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaEZpbHRlcmVkSXRlbXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFN1YnNjcmlwdGlvbiA9IHRoaXMuZ2V0RmlsdGVyZWRJdGVtcyh0aGlzLnNlYXJjaFZhbHVlKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0TG9va3VwUmVzcG9uc2VQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChkYXRhOiBQb0xvb2t1cFJlc3BvbnNlQXBpKSA9PiB0aGlzLnNldExvb2t1cFJlc3BvbnNlUHJvcGVydGllcyhkYXRhKSxcclxuICAgICAgICAoKSA9PiB7fVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vcmVFdmVudCgpIHtcclxuICAgIHRoaXMucGFnZSsrO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd01vcmVTdWJzY3JpcHRpb24gPSB0aGlzLmdldEZpbHRlcmVkSXRlbXModGhpcy5zZWFyY2hWYWx1ZSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhc05leHQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChkYXRhOiBQb0xvb2t1cFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMsIC4uLmRhdGEuaXRlbXNdO1xyXG4gICAgICAgICAgdGhpcy5oYXNOZXh0ID0gZGF0YS5oYXNOZXh0O1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7fVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9Nw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3Igc2VsZWNpb25hciBhcyBsaW5oYXMgcXVhbmRvIGFicmUgbyBtb2RhbC5cclxuICBzZXRTZWxlY3RlZEl0ZW1zKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZHMuZm9yRWFjaChzZWxlY3RlZEl0ZW0gPT4ge1xyXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMucG9UYWJsZS5zZWxlY3RSb3dJdGVtKGl0ZW0gPT4gaXRlbVt0aGlzLmZpZWxkVmFsdWVdID09PSBzZWxlY3RlZEl0ZW0udmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9UYWJsZS5zZWxlY3RSb3dJdGVtKGl0ZW0gPT4gaXRlbVt0aGlzLmZpZWxkVmFsdWVdID09PSBzZWxlY3RlZEl0ZW1bdGhpcy5maWVsZFZhbHVlXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9Nw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgY3JpYXIgb3MgZGlzY2xhaW1lcnMgcXVhbmRvIGFicmUgbyBtb2RhbC5cclxuICBzZXREaXNjbGFpbWVyc0l0ZW1zKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkSXRlbXMpKSB7XHJcbiAgICAgIHRoaXMubXVsdGlwbGUgPyAodGhpcy5zZWxlY3RlZHMgPSBbeyB2YWx1ZTogdGhpcy5zZWxlY3RlZEl0ZW1zIH1dKSA6ICh0aGlzLnNlbGVjdGVkcyA9IFt0aGlzLnNlbGVjdGVkSXRlbXNdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkcyA9IFsuLi50aGlzLnNlbGVjdGVkSXRlbXNdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBZHZhbmNlZEZpbHRlck1vZGFsUHJvcGVydGllcygpIHtcclxuICAgIHRoaXMuYWR2YW5jZWRGaWx0ZXJNb2RhbFRpdGxlID0gdGhpcy5saXRlcmFscy5tb2RhbEFkdmFuY2VkU2VhcmNoVGl0bGU7XHJcblxyXG4gICAgdGhpcy5kaXNjbGFpbWVyR3JvdXAgPSB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmxpdGVyYWxzLm1vZGFsRGlzY2xhaW1lckdyb3VwVGl0bGUsXHJcbiAgICAgIGRpc2NsYWltZXJzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnByaW1hcnlBY3Rpb25BZHZhbmNlZEZpbHRlciA9IHtcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95RHluYW1pY0Zvcm0oKTtcclxuICAgICAgICB0aGlzLmlzQWR2YW5jZWRGaWx0ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGlzY2xhaW1lcigpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYWJlbDogdGhpcy5saXRlcmFscy5tb2RhbEFkdmFuY2VkU2VhcmNoUHJpbWFyeUFjdGlvbkxhYmVsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2Vjb25kYXJ5QWN0aW9uQWR2YW5jZWRGaWx0ZXIgPSB7XHJcbiAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveUR5bmFtaWNGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5pc0FkdmFuY2VkRmlsdGVyID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLm1vZGFsQWR2YW5jZWRTZWFyY2hTZWNvbmRhcnlBY3Rpb25MYWJlbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWR2YW5jZWRGaWx0ZXJzKGFkdmFuY2VkUGFyYW1zOiBhbnkpIHtcclxuICAgIGlmIChhZHZhbmNlZFBhcmFtcyAmJiBhZHZhbmNlZFBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcnM6IE9iamVjdCA9IHt9O1xyXG4gICAgICBsZXQgdmFsaWRhdGVkQWR2YWNlbmRGaWx0ZXJzOiBhbnk7XHJcblxyXG4gICAgICBhZHZhbmNlZFBhcmFtcy5mb3JFYWNoKChmaWx0ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcnNbZmlsdGVyLnByb3BlcnR5XSA9IGZpbHRlci52YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gZmlsdGVyLnZhbHVlLmpvaW4oKSA6IGZpbHRlci52YWx1ZTtcclxuXHJcbiAgICAgICAgdmFsaWRhdGVkQWR2YWNlbmRGaWx0ZXJzID0geyAuLi52YWxpZGF0ZWRBZHZhY2VuZEZpbHRlcnMsIC4uLmZpbHRlcnMgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gdmFsaWRhdGVkQWR2YWNlbmRGaWx0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlcmVkSXRlbXMoZmlsdGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBvTG9va3VwUmVzcG9uc2VBcGk+IHtcclxuICAgIGNvbnN0IGZpbHRlcmVkUGFyYW1zOiBQb0xvb2t1cEZpbHRlcmVkSXRlbXNQYXJhbXMgPSB0aGlzLmdldEZpbHRlcmVkUGFyYW1zKGZpbHRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyU2VydmljZS5nZXRGaWx0ZXJlZEl0ZW1zKGZpbHRlcmVkUGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmlsdGVyZWRQYXJhbXMoZmlsdGVyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHsgcGFnZSwgcGFnZVNpemUsIGZpbHRlclBhcmFtcywgc29ydCB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZFBhcmFtcyA9IHt9O1xyXG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLmdldE9yZGVyUGFyYW0oc29ydCk7XHJcbiAgICBjb25zdCBhZHZhbmNlZEZpbHRlcnMgPSB0aGlzLmdldEFkdmFuY2VkRmlsdGVycyh0aGlzLmRpc2NsYWltZXJHcm91cC5kaXNjbGFpbWVycyk7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7IGZpbHRlciwgcGFnZSwgcGFnZVNpemUsIG9yZGVyLCBmaWx0ZXJQYXJhbXMsIGFkdmFuY2VkRmlsdGVycyB9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xyXG4gICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkgJiYgcGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpbHRlcmVkUGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFBhcmFtcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3JkZXJQYXJhbShzb3J0OiBQb1RhYmxlQ29sdW1uU29ydCA9IHsgdHlwZTogdW5kZWZpbmVkIH0pIHtcclxuICAgIGNvbnN0IHsgY29sdW1uLCB0eXBlIH0gPSBzb3J0O1xyXG5cclxuICAgIGlmICghY29sdW1uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gUG9UYWJsZUNvbHVtblNvcnRUeXBlLkRlc2NlbmRpbmcpIHtcclxuICAgICAgcmV0dXJuIGAtJHtjb2x1bW4ucHJvcGVydHl9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7Y29sdW1uLnByb3BlcnR5fWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZmlsdGVyU3Vic2NyaXB0aW9uID0gdGhpcy5nZXRGaWx0ZXJlZEl0ZW1zKCcnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TG9va3VwUmVzcG9uc2VQcm9wZXJ0aWVzKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExvb2t1cFJlc3BvbnNlUHJvcGVydGllcyhkYXRhPzogUG9Mb29rdXBSZXNwb25zZUFwaSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGRhdGE/Lml0ZW1zID8/IFtdO1xyXG4gICAgdGhpcy5oYXNOZXh0ID0gZGF0YT8uaGFzTmV4dCA/PyBmYWxzZTtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuc2V0RGlzY2xhaW1lcnNJdGVtcygpO1xyXG4gICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRhYmxlTGl0ZXJhbHMoKSB7XHJcbiAgICB0aGlzLnRhYmxlTGl0ZXJhbHMgPSB7XHJcbiAgICAgICdub0NvbHVtbnMnOiB0aGlzLmxpdGVyYWxzLm1vZGFsVGFibGVOb0NvbHVtbnMsXHJcbiAgICAgICdub0RhdGEnOiB0aGlzLmxpdGVyYWxzLm1vZGFsVGFibGVOb0RhdGEsXHJcbiAgICAgICdsb2FkaW5nRGF0YSc6IHRoaXMubGl0ZXJhbHMubW9kYWxUYWJsZUxvYWRpbmdEYXRhLFxyXG4gICAgICAnbG9hZE1vcmVEYXRhJzogdGhpcy5saXRlcmFscy5tb2RhbFRhYmxlTG9hZE1vcmVEYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIGFicmlyIGEgbW9kYWwgZGUgYnVzY2EgZGFzIGluZm9ybWHDp8O1ZXMuXHJcbiAgYWJzdHJhY3Qgb3Blbk1vZGFsKCk6IHZvaWQ7XHJcblxyXG4gIC8vIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBkZXN0cnVpciBvIGR5bmFtaWNGb3JtXHJcbiAgYWJzdHJhY3QgZGVzdHJveUR5bmFtaWNGb3JtKCk6IHZvaWQ7XHJcbn1cclxuIl19