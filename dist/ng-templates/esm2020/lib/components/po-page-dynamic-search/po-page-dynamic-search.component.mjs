import { Component, ViewChild } from '@angular/core';
import { PoDynamicFieldType } from '@po-ui/ng-components';
import { capitalizeFirstLetter, getBrowserLanguage } from '../../utils/util';
import { PoAdvancedFilterComponent } from './po-advanced-filter/po-advanced-filter.component';
import { PoPageDynamicSearchBaseComponent } from './po-page-dynamic-search-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
import * as i2 from "../../services/po-page-customization/po-page-customization.service";
import * as i3 from "./po-advanced-filter/po-advanced-filter.component";
const _c0 = ["*"];
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
export class PoPageDynamicSearchComponent extends PoPageDynamicSearchBaseComponent {
    constructor(languageService, poPageCustomizationService, changeDetector) {
        super(languageService);
        this.poPageCustomizationService = poPageCustomizationService;
        this.changeDetector = changeDetector;
        this._disclaimerGroup = {
            remove: this.onRemoveDisclaimer.bind(this),
            removeAll: this.onRemoveAllDisclaimers.bind(this),
            disclaimers: [],
            title: this.literals.disclaimerGroupTitle,
            hideRemoveAll: this.hideRemoveAllDisclaimer
        };
        this._filterSettings = {
            action: this.onAction.bind(this),
            advancedAction: this.onAdvancedAction.bind(this),
            placeholder: this.literals.searchPlaceholder,
            width: this.quickSearchWidth
        };
    }
    get disclaimerGroup() {
        return Object.assign({}, this._disclaimerGroup, {
            title: this.literals.disclaimerGroupTitle,
            hideRemoveAll: this.hideRemoveAllDisclaimer
        });
    }
    get filterSettings() {
        const thereAreValidFilters = this.filters.length > 0 && this.filters.some(filter => filter.visible === true || filter.visible === undefined);
        this._filterSettings.advancedAction = thereAreValidFilters ? this.onAdvancedAction.bind(this) : undefined;
        return Object.assign({}, this._filterSettings, {
            placeholder: this.literals.searchPlaceholder,
            width: this.quickSearchWidth
        });
    }
    ngOnInit() {
        this.setAdvancedFilterLiterals(this.literals);
        if (this.onLoad) {
            this.loadOptionsOnInitialize(this.onLoad);
        }
    }
    ngOnDestroy() {
        if (this.loadSubscription) {
            this.loadSubscription.unsubscribe();
        }
    }
    onChangeFilters(filters) {
        const filterObjectWithValue = filters
            .filter(filter => filter.initValue)
            .reduce((prev, current) => ({ ...prev, ...{ [current.property]: current.initValue } }), {});
        if (Object.keys(filterObjectWithValue).length) {
            this.onAdvancedSearch({ filter: filterObjectWithValue });
        }
    }
    onAction(quickFilter) {
        const disclaimerQuickSearchUpdated = {
            property: 'search',
            label: `${this.literals.quickSearchLabel} ${quickFilter}`,
            value: quickFilter,
            hideClose: this.hideCloseDisclaimers.some(hideCloseDisclaimer => hideCloseDisclaimer === 'search') || false
        };
        const getDisclaimersWithConcatFilters = () => [
            ...this.getDisclaimersWithoutQuickSearch(),
            disclaimerQuickSearchUpdated
        ];
        this._disclaimerGroup.disclaimers = this.concatFilters
            ? getDisclaimersWithConcatFilters()
            : [disclaimerQuickSearchUpdated];
        if (this.quickSearch.observers && this.quickSearch.observers.length > 0) {
            this.quickSearch.emit(quickFilter);
        }
        if (this.keepFilters && !this.concatFilters) {
            this.filters.forEach(element => delete element.initValue);
        }
        this.changeDetector.detectChanges();
    }
    onAdvancedAction() {
        this.poAdvancedFilter.open();
    }
    onAdvancedSearch(filteredItems) {
        const { filter, optionsService } = filteredItems;
        this._disclaimerGroup.disclaimers = this.setDisclaimers(filter, optionsService);
        this.setFilters(filter);
        this.advancedSearch.emit(filter);
    }
    getDisclaimersWithoutQuickSearch() {
        const quickSearchProperty = 'search';
        return this._disclaimerGroup.disclaimers.filter(item => item.property !== quickSearchProperty);
    }
    setFilters(filters) {
        const formattedFilters = this.convertToFilters(filters);
        this.filters.forEach(element => {
            const compatibleObject = formattedFilters.find(item => item.property === element.property);
            if (compatibleObject) {
                element.initValue = compatibleObject.value;
            }
            else {
                delete element.initValue;
            }
        });
    }
    convertToFilters(filters) {
        return Object.entries(filters).map(([property, value]) => ({ property, value }));
    }
    optionsServiceDisclaimerLabel(value, optionsServiceObjectsList) {
        const optionServiceMatch = optionsServiceObjectsList.find(option => option.value === value);
        return optionServiceMatch.label || optionServiceMatch.value;
    }
    applyDisclaimerLabelValue(field, filterValue) {
        const values = Array.isArray(filterValue) ? filterValue : [filterValue];
        const labels = values.map(value => {
            const filteredField = field.options.find(option => option.value === value || option === value);
            if (filteredField) {
                return filteredField.label || filteredField.value || filteredField;
            }
        });
        return labels.join(', ');
    }
    formatDate(date) {
        const year = parseInt(date.substr(0, 4), 10);
        const month = parseInt(date.substr(5, 2), 10);
        const day = parseInt(date.substr(8, 2), 10);
        return new Date(year, month - 1, day).toLocaleDateString(getBrowserLanguage());
    }
    formatArrayToObjectKeyValue(filters) {
        const formattedObject = filters.reduce((result, item) => Object.assign(result, { [item.property]: item.value || item.initValue }), {});
        Object.keys(formattedObject).forEach(key => {
            if (!formattedObject[key]) {
                delete formattedObject[key];
            }
        });
        return formattedObject;
    }
    getFieldByProperty(fields, fieldName) {
        return fields.find((field) => field.property === fieldName);
    }
    getFilterValueToDisclaimer(field, value, optionsServiceObjectsList) {
        if (field.optionsService && optionsServiceObjectsList) {
            return this.optionsServiceDisclaimerLabel(value, optionsServiceObjectsList);
        }
        if (field.type === PoDynamicFieldType.Date) {
            return field.range ? this.formatDate(value.start) + ' - ' + this.formatDate(value.end) : this.formatDate(value);
        }
        if (field.options && value) {
            return this.applyDisclaimerLabelValue(field, value);
        }
        return value;
    }
    onRemoveDisclaimer(removeData) {
        const { currentDisclaimers } = removeData;
        this.emitChangesDisclaimers(currentDisclaimers);
    }
    emitChangesDisclaimers(currentDisclaimers) {
        this.changeDisclaimers.emit(currentDisclaimers);
        this.setFilters(this.formatArrayToObjectKeyValue(currentDisclaimers));
    }
    onRemoveAllDisclaimers() {
        this.emitChangesDisclaimers([]);
    }
    setDisclaimers(filters, optionsServiceObjects) {
        const disclaimers = [];
        const properties = Object.keys(filters);
        properties.forEach(property => {
            const field = this.getFieldByProperty(this.filters, property);
            const label = field.label || capitalizeFirstLetter(field.property);
            const value = filters[property];
            const hideClose = this.hideCloseDisclaimers.some(hideCloseDisclaimer => hideCloseDisclaimer === property) || false;
            const valueDisplayedOnTheDisclaimerLabel = this.getFilterValueToDisclaimer(field, value, optionsServiceObjects);
            if (valueDisplayedOnTheDisclaimerLabel !== '') {
                disclaimers.push({
                    label: `${label}: ${valueDisplayedOnTheDisclaimerLabel}`,
                    property,
                    value,
                    hideClose
                });
            }
        });
        return disclaimers;
    }
    loadOptionsOnInitialize(onLoad) {
        this.loadSubscription = this.getPoDynamicPageOptions(onLoad).subscribe(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption));
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            title: this.title,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            filters: this.filters,
            keepFilters: this.keepFilters,
            concatFilters: this.concatFilters,
            hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
            hideCloseDisclaimers: this.hideCloseDisclaimers,
            quickSearchWidth: this.quickSearchWidth
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'filters',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true,
                    keyForMerge: 'label'
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                },
                {
                    nameProp: 'keepFilters'
                },
                {
                    nameProp: 'concatFilters'
                },
                {
                    nameProp: 'hideRemoveAllDisclaimer'
                },
                {
                    nameProp: 'hideCloseDisclaimers'
                },
                {
                    nameProp: 'quickSearchWidth'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
}
PoPageDynamicSearchComponent.ɵfac = function PoPageDynamicSearchComponent_Factory(t) { return new (t || PoPageDynamicSearchComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i2.PoPageCustomizationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPageDynamicSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicSearchComponent, selectors: [["po-page-dynamic-search"]], viewQuery: function PoPageDynamicSearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoAdvancedFilterComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poAdvancedFilter = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 8, consts: [[3, "p-actions", "p-breadcrumb", "p-disclaimer-group", "p-filter", "p-title"], [3, "p-filters", "p-keep-filters", "p-literals", "p-search-event"]], template: function PoPageDynamicSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "po-page-list", 0)(1, "po-advanced-filter", 1);
        i0.ɵɵlistener("p-search-event", function PoPageDynamicSearchComponent_Template_po_advanced_filter_p_search_event_1_listener($event) { return ctx.onAdvancedSearch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-actions", ctx.actions)("p-breadcrumb", ctx.breadcrumb)("p-disclaimer-group", ctx.disclaimerGroup)("p-filter", ctx.filterSettings)("p-title", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-literals", ctx.advancedFilterLiterals);
    } }, dependencies: [i1.PoPageListComponent, i3.PoAdvancedFilterComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicSearchComponent, [{
        type: Component,
        args: [{ selector: 'po-page-dynamic-search', template: "<po-page-list\r\n  [p-actions]=\"actions\"\r\n  [p-breadcrumb]=\"breadcrumb\"\r\n  [p-disclaimer-group]=\"disclaimerGroup\"\r\n  [p-filter]=\"filterSettings\"\r\n  [p-title]=\"title\"\r\n>\r\n  <po-advanced-filter\r\n    [p-filters]=\"filters\"\r\n    [p-keep-filters]=\"keepFilters\"\r\n    [p-literals]=\"advancedFilterLiterals\"\r\n    (p-search-event)=\"onAdvancedSearch($event)\"\r\n  >\r\n  </po-advanced-filter>\r\n\r\n  <ng-content></ng-content>\r\n</po-page-list>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }, { type: i2.PoPageCustomizationService }, { type: i0.ChangeDetectorRef }]; }, { poAdvancedFilter: [{
            type: ViewChild,
            args: [PoAdvancedFilterComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2gvcG8tcGFnZS1keW5hbWljLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2gvcG8tcGFnZS1keW5hbWljLXNlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFHM0YsT0FBTyxFQUVMLGtCQUFrQixFQU1uQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7QUFPM0Y7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBS0gsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGdDQUFnQztJQW9CaEYsWUFDRSxlQUFrQyxFQUMxQiwwQkFBc0QsRUFDdEQsY0FBaUM7UUFFekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBSGYsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFsQjFCLHFCQUFnQixHQUFzQjtZQUNyRCxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FB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QWZiLHVDQUFxQixnQ0FBQSwyQ0FBQSxnQ0FBQSxzQkFBQTtRQU9uQixlQUFxQjtRQUFyQix1Q0FBcUIsbUNBQUEsMENBQUE7O3VGRG9DWiw0QkFBNEI7Y0FKeEMsU0FBUzsyQkFDRSx3QkFBd0I7NklBSXNCLGdCQUFnQjtrQkFBdkUsU0FBUzttQkFBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBQb0Rpc2NsYWltZXJHcm91cCxcclxuICBQb0R5bmFtaWNGaWVsZFR5cGUsXHJcbiAgUG9EeW5hbWljRm9ybUZpZWxkLFxyXG4gIFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gIFBvUGFnZUZpbHRlcixcclxuICBQb0Rpc2NsYWltZXJHcm91cFJlbW92ZUFjdGlvbixcclxuICBQb0NvbWJvT3B0aW9uXHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBnZXRCcm93c2VyTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9QYWdlQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWN1c3RvbWl6YXRpb24vcG8tcGFnZS1jdXN0b21pemF0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9BZHZhbmNlZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tYWR2YW5jZWQtZmlsdGVyL3BvLWFkdmFuY2VkLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljU2VhcmNoQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1keW5hbWljLXNlYXJjaC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi9wby1wYWdlLWR5bmFtaWMtc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY09wdGlvbnNTY2hlbWEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNTZWFyY2hGaWx0ZXJzIH0gZnJvbSAnLi9wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWZpbHRlcnMuaW50ZXJmYWNlJztcclxuXHJcbnR5cGUgVXJsT3JQb0N1c3RvbWl6YXRpb25GdW5jdGlvbiA9IHN0cmluZyB8ICgoKSA9PiBQb1BhZ2VEeW5hbWljU2VhcmNoT3B0aW9ucyk7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvUGFnZUR5bmFtaWNTZWFyY2hCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWR5bmFtaWMtc2VhcmNoLWJhc2ljXCIgdGl0bGU9XCJQTyBQYWdlIER5bmFtaWMgU2VhcmNoIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1zZWFyY2gtYmFzaWMvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1zZWFyY2gtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWJhc2ljL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtZHluYW1pYy1zZWFyY2gtaGlyaW5nLXByb2Nlc3Nlc1wiIHRpdGxlPVwiUE8gUGFnZSBEeW5hbWljIFNlYXJjaCAtIEhpcmluZyBwcm9jZXNzZXNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1keW5hbWljLXNlYXJjaC1oaXJpbmctcHJvY2Vzc2VzL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWhpcmluZy1wcm9jZXNzZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWhpcmluZy1wcm9jZXNzZXMvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1zZWFyY2gtaGlyaW5nLXByb2Nlc3Nlcy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWhpcmluZy1wcm9jZXNzZXMvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1zZWFyY2gtaGlyaW5nLXByb2Nlc3Nlcy5zZXJ2aWNlLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWR5bmFtaWMtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1keW5hbWljLXNlYXJjaC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBQb1BhZ2VEeW5hbWljU2VhcmNoQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKFBvQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBvQWR2YW5jZWRGaWx0ZXI6IFBvQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgbG9hZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9kaXNjbGFpbWVyR3JvdXA6IFBvRGlzY2xhaW1lckdyb3VwID0ge1xyXG4gICAgcmVtb3ZlOiB0aGlzLm9uUmVtb3ZlRGlzY2xhaW1lci5iaW5kKHRoaXMpLFxyXG4gICAgcmVtb3ZlQWxsOiB0aGlzLm9uUmVtb3ZlQWxsRGlzY2xhaW1lcnMuYmluZCh0aGlzKSxcclxuICAgIGRpc2NsYWltZXJzOiBbXSxcclxuICAgIHRpdGxlOiB0aGlzLmxpdGVyYWxzLmRpc2NsYWltZXJHcm91cFRpdGxlLFxyXG4gICAgaGlkZVJlbW92ZUFsbDogdGhpcy5oaWRlUmVtb3ZlQWxsRGlzY2xhaW1lclxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ZpbHRlclNldHRpbmdzOiBQb1BhZ2VGaWx0ZXIgPSB7XHJcbiAgICBhY3Rpb246IHRoaXMub25BY3Rpb24uYmluZCh0aGlzKSxcclxuICAgIGFkdmFuY2VkQWN0aW9uOiB0aGlzLm9uQWR2YW5jZWRBY3Rpb24uYmluZCh0aGlzKSxcclxuICAgIHBsYWNlaG9sZGVyOiB0aGlzLmxpdGVyYWxzLnNlYXJjaFBsYWNlaG9sZGVyLFxyXG4gICAgd2lkdGg6IHRoaXMucXVpY2tTZWFyY2hXaWR0aFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9QYWdlQ3VzdG9taXphdGlvblNlcnZpY2U6IFBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzY2xhaW1lckdyb3VwKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2Rpc2NsYWltZXJHcm91cCwge1xyXG4gICAgICB0aXRsZTogdGhpcy5saXRlcmFscy5kaXNjbGFpbWVyR3JvdXBUaXRsZSxcclxuICAgICAgaGlkZVJlbW92ZUFsbDogdGhpcy5oaWRlUmVtb3ZlQWxsRGlzY2xhaW1lclxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmlsdGVyU2V0dGluZ3MoKSB7XHJcbiAgICBjb25zdCB0aGVyZUFyZVZhbGlkRmlsdGVycyA9XHJcbiAgICAgIHRoaXMuZmlsdGVycy5sZW5ndGggPiAwICYmIHRoaXMuZmlsdGVycy5zb21lKGZpbHRlciA9PiBmaWx0ZXIudmlzaWJsZSA9PT0gdHJ1ZSB8fCBmaWx0ZXIudmlzaWJsZSA9PT0gdW5kZWZpbmVkKTtcclxuICAgIHRoaXMuX2ZpbHRlclNldHRpbmdzLmFkdmFuY2VkQWN0aW9uID0gdGhlcmVBcmVWYWxpZEZpbHRlcnMgPyB0aGlzLm9uQWR2YW5jZWRBY3Rpb24uYmluZCh0aGlzKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZmlsdGVyU2V0dGluZ3MsIHtcclxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMubGl0ZXJhbHMuc2VhcmNoUGxhY2Vob2xkZXIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLnF1aWNrU2VhcmNoV2lkdGhcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldEFkdmFuY2VkRmlsdGVyTGl0ZXJhbHModGhpcy5saXRlcmFscyk7XHJcbiAgICBpZiAodGhpcy5vbkxvYWQpIHtcclxuICAgICAgdGhpcy5sb2FkT3B0aW9uc09uSW5pdGlhbGl6ZSh0aGlzLm9uTG9hZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmxvYWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5sb2FkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUZpbHRlcnMoZmlsdGVyczogQXJyYXk8UG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnM+KSB7XHJcbiAgICBjb25zdCBmaWx0ZXJPYmplY3RXaXRoVmFsdWUgPSBmaWx0ZXJzXHJcbiAgICAgIC5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5pbml0VmFsdWUpXHJcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+ICh7IC4uLnByZXYsIC4uLnsgW2N1cnJlbnQucHJvcGVydHldOiBjdXJyZW50LmluaXRWYWx1ZSB9IH0pLCB7fSk7XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKGZpbHRlck9iamVjdFdpdGhWYWx1ZSkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMub25BZHZhbmNlZFNlYXJjaCh7IGZpbHRlcjogZmlsdGVyT2JqZWN0V2l0aFZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25BY3Rpb24ocXVpY2tGaWx0ZXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGlzY2xhaW1lclF1aWNrU2VhcmNoVXBkYXRlZCA9IHtcclxuICAgICAgcHJvcGVydHk6ICdzZWFyY2gnLFxyXG4gICAgICBsYWJlbDogYCR7dGhpcy5saXRlcmFscy5xdWlja1NlYXJjaExhYmVsfSAke3F1aWNrRmlsdGVyfWAsXHJcbiAgICAgIHZhbHVlOiBxdWlja0ZpbHRlcixcclxuICAgICAgaGlkZUNsb3NlOiB0aGlzLmhpZGVDbG9zZURpc2NsYWltZXJzLnNvbWUoaGlkZUNsb3NlRGlzY2xhaW1lciA9PiBoaWRlQ2xvc2VEaXNjbGFpbWVyID09PSAnc2VhcmNoJykgfHwgZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGlzY2xhaW1lcnNXaXRoQ29uY2F0RmlsdGVycyA9ICgpID0+IFtcclxuICAgICAgLi4udGhpcy5nZXREaXNjbGFpbWVyc1dpdGhvdXRRdWlja1NlYXJjaCgpLFxyXG4gICAgICBkaXNjbGFpbWVyUXVpY2tTZWFyY2hVcGRhdGVkXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMuX2Rpc2NsYWltZXJHcm91cC5kaXNjbGFpbWVycyA9IHRoaXMuY29uY2F0RmlsdGVyc1xyXG4gICAgICA/IGdldERpc2NsYWltZXJzV2l0aENvbmNhdEZpbHRlcnMoKVxyXG4gICAgICA6IFtkaXNjbGFpbWVyUXVpY2tTZWFyY2hVcGRhdGVkXTtcclxuXHJcbiAgICBpZiAodGhpcy5xdWlja1NlYXJjaC5vYnNlcnZlcnMgJiYgdGhpcy5xdWlja1NlYXJjaC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnF1aWNrU2VhcmNoLmVtaXQocXVpY2tGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmtlZXBGaWx0ZXJzICYmICF0aGlzLmNvbmNhdEZpbHRlcnMpIHtcclxuICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goZWxlbWVudCA9PiBkZWxldGUgZWxlbWVudC5pbml0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgb25BZHZhbmNlZEFjdGlvbigpIHtcclxuICAgIHRoaXMucG9BZHZhbmNlZEZpbHRlci5vcGVuKCk7XHJcbiAgfVxyXG5cclxuICBvbkFkdmFuY2VkU2VhcmNoKGZpbHRlcmVkSXRlbXMpIHtcclxuICAgIGNvbnN0IHsgZmlsdGVyLCBvcHRpb25zU2VydmljZSB9ID0gZmlsdGVyZWRJdGVtcztcclxuXHJcbiAgICB0aGlzLl9kaXNjbGFpbWVyR3JvdXAuZGlzY2xhaW1lcnMgPSB0aGlzLnNldERpc2NsYWltZXJzKGZpbHRlciwgb3B0aW9uc1NlcnZpY2UpO1xyXG5cclxuICAgIHRoaXMuc2V0RmlsdGVycyhmaWx0ZXIpO1xyXG5cclxuICAgIHRoaXMuYWR2YW5jZWRTZWFyY2guZW1pdChmaWx0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREaXNjbGFpbWVyc1dpdGhvdXRRdWlja1NlYXJjaCgpIHtcclxuICAgIGNvbnN0IHF1aWNrU2VhcmNoUHJvcGVydHkgPSAnc2VhcmNoJztcclxuICAgIHJldHVybiB0aGlzLl9kaXNjbGFpbWVyR3JvdXAuZGlzY2xhaW1lcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9wZXJ0eSAhPT0gcXVpY2tTZWFyY2hQcm9wZXJ0eSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZpbHRlcnMoZmlsdGVycykge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRmlsdGVycyA9IHRoaXMuY29udmVydFRvRmlsdGVycyhmaWx0ZXJzKTtcclxuXHJcbiAgICB0aGlzLmZpbHRlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgY29uc3QgY29tcGF0aWJsZU9iamVjdCA9IGZvcm1hdHRlZEZpbHRlcnMuZmluZChpdGVtID0+IGl0ZW0ucHJvcGVydHkgPT09IGVsZW1lbnQucHJvcGVydHkpO1xyXG5cclxuICAgICAgaWYgKGNvbXBhdGlibGVPYmplY3QpIHtcclxuICAgICAgICBlbGVtZW50LmluaXRWYWx1ZSA9IGNvbXBhdGlibGVPYmplY3QudmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuaW5pdFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvRmlsdGVycyhmaWx0ZXJzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZmlsdGVycykubWFwKChbcHJvcGVydHksIHZhbHVlXSkgPT4gKHsgcHJvcGVydHksIHZhbHVlIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uc1NlcnZpY2VEaXNjbGFpbWVyTGFiZWwodmFsdWU6IGFueSwgb3B0aW9uc1NlcnZpY2VPYmplY3RzTGlzdDogQXJyYXk8UG9Db21ib09wdGlvbj4pIHtcclxuICAgIGNvbnN0IG9wdGlvblNlcnZpY2VNYXRjaCA9IG9wdGlvbnNTZXJ2aWNlT2JqZWN0c0xpc3QuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvblNlcnZpY2VNYXRjaC5sYWJlbCB8fCBvcHRpb25TZXJ2aWNlTWF0Y2gudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5RGlzY2xhaW1lckxhYmVsVmFsdWUoZmllbGQ6IGFueSwgZmlsdGVyVmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkgPyBmaWx0ZXJWYWx1ZSA6IFtmaWx0ZXJWYWx1ZV07XHJcblxyXG4gICAgY29uc3QgbGFiZWxzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRmllbGQgPSBmaWVsZC5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUgfHwgb3B0aW9uID09PSB2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoZmlsdGVyZWRGaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZEZpZWxkLmxhYmVsIHx8IGZpbHRlcmVkRmllbGQudmFsdWUgfHwgZmlsdGVyZWRGaWVsZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGxhYmVscy5qb2luKCcsICcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXREYXRlKGRhdGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGUuc3Vic3RyKDAsIDQpLCAxMCk7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGRhdGUuc3Vic3RyKDUsIDIpLCAxMCk7XHJcbiAgICBjb25zdCBkYXkgPSBwYXJzZUludChkYXRlLnN1YnN0cig4LCAyKSwgMTApO1xyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSkudG9Mb2NhbGVEYXRlU3RyaW5nKGdldEJyb3dzZXJMYW5ndWFnZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0QXJyYXlUb09iamVjdEtleVZhbHVlKFxyXG4gICAgZmlsdGVyczogQXJyYXk8eyBwcm9wZXJ0eTogc3RyaW5nOyB2YWx1ZT86IGFueTsgaW5pdFZhbHVlPzogYW55IH0+XHJcbiAgKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRPYmplY3QgPSBmaWx0ZXJzLnJlZHVjZShcclxuICAgICAgKHJlc3VsdCwgaXRlbSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2l0ZW0ucHJvcGVydHldOiBpdGVtLnZhbHVlIHx8IGl0ZW0uaW5pdFZhbHVlIH0pLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhmb3JtYXR0ZWRPYmplY3QpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKCFmb3JtYXR0ZWRPYmplY3Rba2V5XSkge1xyXG4gICAgICAgIGRlbGV0ZSBmb3JtYXR0ZWRPYmplY3Rba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZE9iamVjdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmllbGRCeVByb3BlcnR5KGZpZWxkczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPiwgZmllbGROYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBmaWVsZHMuZmluZCgoZmllbGQ6IFBvRHluYW1pY0Zvcm1GaWVsZCkgPT4gZmllbGQucHJvcGVydHkgPT09IGZpZWxkTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlclZhbHVlVG9EaXNjbGFpbWVyKGZpZWxkOiBhbnksIHZhbHVlOiBhbnksIG9wdGlvbnNTZXJ2aWNlT2JqZWN0c0xpc3Q/OiBBcnJheTxQb0NvbWJvT3B0aW9uPikge1xyXG4gICAgaWYgKGZpZWxkLm9wdGlvbnNTZXJ2aWNlICYmIG9wdGlvbnNTZXJ2aWNlT2JqZWN0c0xpc3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1NlcnZpY2VEaXNjbGFpbWVyTGFiZWwodmFsdWUsIG9wdGlvbnNTZXJ2aWNlT2JqZWN0c0xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50eXBlID09PSBQb0R5bmFtaWNGaWVsZFR5cGUuRGF0ZSkge1xyXG4gICAgICByZXR1cm4gZmllbGQucmFuZ2UgPyB0aGlzLmZvcm1hdERhdGUodmFsdWUuc3RhcnQpICsgJyAtICcgKyB0aGlzLmZvcm1hdERhdGUodmFsdWUuZW5kKSA6IHRoaXMuZm9ybWF0RGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm9wdGlvbnMgJiYgdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXBwbHlEaXNjbGFpbWVyTGFiZWxWYWx1ZShmaWVsZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZW1vdmVEaXNjbGFpbWVyKHJlbW92ZURhdGE6IFBvRGlzY2xhaW1lckdyb3VwUmVtb3ZlQWN0aW9uKSB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnREaXNjbGFpbWVycyB9ID0gcmVtb3ZlRGF0YTtcclxuXHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VzRGlzY2xhaW1lcnMoY3VycmVudERpc2NsYWltZXJzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdENoYW5nZXNEaXNjbGFpbWVycyhjdXJyZW50RGlzY2xhaW1lcnM6IGFueSkge1xyXG4gICAgdGhpcy5jaGFuZ2VEaXNjbGFpbWVycy5lbWl0KGN1cnJlbnREaXNjbGFpbWVycyk7XHJcbiAgICB0aGlzLnNldEZpbHRlcnModGhpcy5mb3JtYXRBcnJheVRvT2JqZWN0S2V5VmFsdWUoY3VycmVudERpc2NsYWltZXJzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVtb3ZlQWxsRGlzY2xhaW1lcnMoKSB7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VzRGlzY2xhaW1lcnMoW10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREaXNjbGFpbWVycyhmaWx0ZXJzLCBvcHRpb25zU2VydmljZU9iamVjdHM/OiBBcnJheTxQb0NvbWJvT3B0aW9uPikge1xyXG4gICAgY29uc3QgZGlzY2xhaW1lcnMgPSBbXTtcclxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKTtcclxuXHJcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZ2V0RmllbGRCeVByb3BlcnR5KHRoaXMuZmlsdGVycywgcHJvcGVydHkpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGZpZWxkLmxhYmVsIHx8IGNhcGl0YWxpemVGaXJzdExldHRlcihmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZmlsdGVyc1twcm9wZXJ0eV07XHJcbiAgICAgIGNvbnN0IGhpZGVDbG9zZSA9XHJcbiAgICAgICAgdGhpcy5oaWRlQ2xvc2VEaXNjbGFpbWVycy5zb21lKGhpZGVDbG9zZURpc2NsYWltZXIgPT4gaGlkZUNsb3NlRGlzY2xhaW1lciA9PT0gcHJvcGVydHkpIHx8IGZhbHNlO1xyXG5cclxuICAgICAgY29uc3QgdmFsdWVEaXNwbGF5ZWRPblRoZURpc2NsYWltZXJMYWJlbCA9IHRoaXMuZ2V0RmlsdGVyVmFsdWVUb0Rpc2NsYWltZXIoZmllbGQsIHZhbHVlLCBvcHRpb25zU2VydmljZU9iamVjdHMpO1xyXG5cclxuICAgICAgaWYgKHZhbHVlRGlzcGxheWVkT25UaGVEaXNjbGFpbWVyTGFiZWwgIT09ICcnKSB7XHJcbiAgICAgICAgZGlzY2xhaW1lcnMucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogYCR7bGFiZWx9OiAke3ZhbHVlRGlzcGxheWVkT25UaGVEaXNjbGFpbWVyTGFiZWx9YCxcclxuICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBoaWRlQ2xvc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc2NsYWltZXJzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkT3B0aW9uc09uSW5pdGlhbGl6ZShvbkxvYWQ6IFVybE9yUG9DdXN0b21pemF0aW9uRnVuY3Rpb24pIHtcclxuICAgIHRoaXMubG9hZFN1YnNjcmlwdGlvbiA9IHRoaXMuZ2V0UG9EeW5hbWljUGFnZU9wdGlvbnMob25Mb2FkKS5zdWJzY3JpYmUocmVzcG9uc2VQb09wdGlvbiA9PlxyXG4gICAgICB0aGlzLnBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlLmNoYW5nZU9yaWdpbmFsT3B0aW9uc1RvTmV3T3B0aW9ucyh0aGlzLCByZXNwb25zZVBvT3B0aW9uKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9EeW5hbWljUGFnZU9wdGlvbnMob25Mb2FkOiBVcmxPclBvQ3VzdG9taXphdGlvbkZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxQb1BhZ2VEeW5hbWljU2VhcmNoT3B0aW9ucz4ge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxPcHRpb246IFBvUGFnZUR5bmFtaWNTZWFyY2hPcHRpb25zID0ge1xyXG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgYWN0aW9uczogdGhpcy5hY3Rpb25zLFxyXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXHJcbiAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcclxuICAgICAga2VlcEZpbHRlcnM6IHRoaXMua2VlcEZpbHRlcnMsXHJcbiAgICAgIGNvbmNhdEZpbHRlcnM6IHRoaXMuY29uY2F0RmlsdGVycyxcclxuICAgICAgaGlkZVJlbW92ZUFsbERpc2NsYWltZXI6IHRoaXMuaGlkZVJlbW92ZUFsbERpc2NsYWltZXIsXHJcbiAgICAgIGhpZGVDbG9zZURpc2NsYWltZXJzOiB0aGlzLmhpZGVDbG9zZURpc2NsYWltZXJzLFxyXG4gICAgICBxdWlja1NlYXJjaFdpZHRoOiB0aGlzLnF1aWNrU2VhcmNoV2lkdGhcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFnZU9wdGlvblNjaGVtYTogUG9QYWdlRHluYW1pY09wdGlvbnNTY2hlbWE8UG9QYWdlRHluYW1pY1NlYXJjaE9wdGlvbnM+ID0ge1xyXG4gICAgICBzY2hlbWE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ2ZpbHRlcnMnLFxyXG4gICAgICAgICAgbWVyZ2U6IHRydWUsXHJcbiAgICAgICAgICBrZXlGb3JNZXJnZTogJ3Byb3BlcnR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdhY3Rpb25zJyxcclxuICAgICAgICAgIG1lcmdlOiB0cnVlLFxyXG4gICAgICAgICAga2V5Rm9yTWVyZ2U6ICdsYWJlbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAnYnJlYWRjcnVtYidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAndGl0bGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ2tlZXBGaWx0ZXJzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdjb25jYXRGaWx0ZXJzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdoaWRlUmVtb3ZlQWxsRGlzY2xhaW1lcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAnaGlkZUNsb3NlRGlzY2xhaW1lcnMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ3F1aWNrU2VhcmNoV2lkdGgnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldEN1c3RvbU9wdGlvbnMob25Mb2FkLCBvcmlnaW5hbE9wdGlvbiwgcGFnZU9wdGlvblNjaGVtYSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1wYWdlLWxpc3RcclxuICBbcC1hY3Rpb25zXT1cImFjdGlvbnNcIlxyXG4gIFtwLWJyZWFkY3J1bWJdPVwiYnJlYWRjcnVtYlwiXHJcbiAgW3AtZGlzY2xhaW1lci1ncm91cF09XCJkaXNjbGFpbWVyR3JvdXBcIlxyXG4gIFtwLWZpbHRlcl09XCJmaWx0ZXJTZXR0aW5nc1wiXHJcbiAgW3AtdGl0bGVdPVwidGl0bGVcIlxyXG4+XHJcbiAgPHBvLWFkdmFuY2VkLWZpbHRlclxyXG4gICAgW3AtZmlsdGVyc109XCJmaWx0ZXJzXCJcclxuICAgIFtwLWtlZXAtZmlsdGVyc109XCJrZWVwRmlsdGVyc1wiXHJcbiAgICBbcC1saXRlcmFsc109XCJhZHZhbmNlZEZpbHRlckxpdGVyYWxzXCJcclxuICAgIChwLXNlYXJjaC1ldmVudCk9XCJvbkFkdmFuY2VkU2VhcmNoKCRldmVudClcIlxyXG4gID5cclxuICA8L3BvLWFkdmFuY2VkLWZpbHRlcj5cclxuXHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3BvLXBhZ2UtbGlzdD5cclxuIl19