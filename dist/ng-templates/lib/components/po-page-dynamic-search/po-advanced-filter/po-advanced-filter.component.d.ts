import { OnDestroy, OnInit } from '@angular/core';
import { PoDynamicFormComponent, PoLanguageService } from '@po-ui/ng-components';
import { PoAdvancedFilterBaseComponent } from './po-advanced-filter-base.component';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @docsExtends PoAdvancedFilterBaseComponent
 *
 * @examplePrivate
 *
 * <example-private name="po-advanced-filter" title="PO Busca Avançada">
 *   <file name="sample-po-advanced-filter.component.html"> </file>
 *   <file name="sample-po-advanced-filter.component.ts"> </file>
 * </example-private>
 */
export declare class PoAdvancedFilterComponent extends PoAdvancedFilterBaseComponent implements OnDestroy, OnInit {
    poDynamicForm: PoDynamicFormComponent;
    private subscription;
    constructor(languageService: PoLanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    open(): void;
    private getOptionsServiceItem;
    private getInitialValuesFromFilter;
    private optionsServiceSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoAdvancedFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoAdvancedFilterComponent, "po-advanced-filter", never, {}, {}, never, never, false>;
}