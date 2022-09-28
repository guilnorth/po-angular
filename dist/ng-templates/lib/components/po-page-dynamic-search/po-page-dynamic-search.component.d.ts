import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PoDisclaimerGroup, PoLanguageService, PoPageFilter } from '@po-ui/ng-components';
import { PoPageCustomizationService } from '../../services/po-page-customization/po-page-customization.service';
import { PoAdvancedFilterComponent } from './po-advanced-filter/po-advanced-filter.component';
import { PoPageDynamicSearchBaseComponent } from './po-page-dynamic-search-base.component';
import { PoPageDynamicSearchFilters } from './po-page-dynamic-search-filters.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageDynamicSearchBaseComponent
 *
 * @example
 *
 * <example name="po-page-dynamic-search-basic" title="PO Page Dynamic Search Basic">
 *  <file name="sample-po-page-dynamic-search-basic/sample-po-page-dynamic-search-basic.component.html"> </file>
 *  <file name="sample-po-page-dynamic-search-basic/sample-po-page-dynamic-search-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-search-hiring-processes" title="PO Page Dynamic Search - Hiring processes">
 *  <file name="sample-po-page-dynamic-search-hiring-processes/sample-po-page-dynamic-search-hiring-processes.component.html"> </file>
 *  <file name="sample-po-page-dynamic-search-hiring-processes/sample-po-page-dynamic-search-hiring-processes.component.ts"> </file>
 *  <file name="sample-po-page-dynamic-search-hiring-processes/sample-po-page-dynamic-search-hiring-processes.service.ts"> </file>
 * </example>
 */
export declare class PoPageDynamicSearchComponent extends PoPageDynamicSearchBaseComponent implements OnInit, OnDestroy {
    private poPageCustomizationService;
    private changeDetector;
    poAdvancedFilter: PoAdvancedFilterComponent;
    private loadSubscription;
    private readonly _disclaimerGroup;
    private readonly _filterSettings;
    constructor(languageService: PoLanguageService, poPageCustomizationService: PoPageCustomizationService, changeDetector: ChangeDetectorRef);
    get disclaimerGroup(): PoDisclaimerGroup & {
        title: string;
        hideRemoveAll: boolean;
    };
    get filterSettings(): PoPageFilter & {
        placeholder: string;
        width: number;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    onChangeFilters(filters: Array<PoPageDynamicSearchFilters>): void;
    onAction(quickFilter: string): void;
    onAdvancedAction(): void;
    onAdvancedSearch(filteredItems: any): void;
    private getDisclaimersWithoutQuickSearch;
    private setFilters;
    private convertToFilters;
    private optionsServiceDisclaimerLabel;
    private applyDisclaimerLabelValue;
    private formatDate;
    private formatArrayToObjectKeyValue;
    private getFieldByProperty;
    private getFilterValueToDisclaimer;
    private onRemoveDisclaimer;
    private emitChangesDisclaimers;
    private onRemoveAllDisclaimers;
    private setDisclaimers;
    private loadOptionsOnInitialize;
    private getPoDynamicPageOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageDynamicSearchComponent, "po-page-dynamic-search", never, {}, {}, never, ["*"], false>;
}
