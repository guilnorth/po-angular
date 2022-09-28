import { EventEmitter } from '@angular/core';
import { PoLanguageService, PoModalAction, PoModalComponent, PoComboOption } from '@po-ui/ng-components';
import { PoAdvancedFilterLiterals } from './po-advanced-filter-literals.interface';
import { PoPageDynamicSearchFilters } from '../po-page-dynamic-search-filters.interface';
import * as i0 from "@angular/core";
export declare const poAdvancedFiltersLiteralsDefault: {
    en: PoAdvancedFilterLiterals;
    es: PoAdvancedFilterLiterals;
    pt: PoAdvancedFilterLiterals;
    ru: PoAdvancedFilterLiterals;
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Filtro de busca avançada criado a partir de um formulário dinâmico.
 * Componente de uso interno.
 */
export declare class PoAdvancedFilterBaseComponent {
    poModal: PoModalComponent;
    /**
     * Mantém na modal de busca avançada os valores preenchidos do último filtro realizado pelo usuário.
     */
    keepFilters: boolean;
    /** Função que será disparada e receberá os valores do formulário ao ser clicado no botão buscar. */
    searchEvent: EventEmitter<any>;
    filter: {};
    language: string;
    primaryAction: PoModalAction;
    secondaryAction: PoModalAction;
    protected optionsServiceChosenOptions: Array<PoComboOption>;
    private _filters;
    private _literals;
    /**
     * Coleção de objetos que implementam a interface PoPageDynamicSearchFilters, para definição dos campos que serão criados
     * dinamicamente.
     */
    set filters(filters: Array<PoPageDynamicSearchFilters>);
    get filters(): Array<PoPageDynamicSearchFilters>;
    /** Objeto com as literais usadas no `po-advanced-filter`. */
    set literals(value: PoAdvancedFilterLiterals);
    get literals(): PoAdvancedFilterLiterals;
    constructor(languageService: PoLanguageService);
    private getValuesFromForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoAdvancedFilterBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoAdvancedFilterBaseComponent, never, never, { "keepFilters": "p-keep-filters"; "filters": "p-filters"; "literals": "p-literals"; }, { "searchEvent": "p-search-event"; }, never, never, false>;
}
