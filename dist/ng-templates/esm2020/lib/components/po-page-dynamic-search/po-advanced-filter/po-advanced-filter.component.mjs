import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PoDynamicFormComponent } from '@po-ui/ng-components';
import { PoAdvancedFilterBaseComponent } from './po-advanced-filter-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
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
export class PoAdvancedFilterComponent extends PoAdvancedFilterBaseComponent {
    constructor(languageService) {
        super(languageService);
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.optionsServiceSubscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    open() {
        this.filter = this.keepFilters ? this.getInitialValuesFromFilter(this.filters) : {};
        this.poModal.open();
    }
    getOptionsServiceItem(optionServiceObject) {
        const objectItem = this.optionsServiceChosenOptions.map(option => option.value).indexOf(optionServiceObject.value);
        if (objectItem === -1) {
            this.optionsServiceChosenOptions = [...this.optionsServiceChosenOptions, optionServiceObject];
        }
    }
    getInitialValuesFromFilter(filters) {
        return filters.reduce((result, item) => Object.assign(result, { [item.property]: item.initValue }), {});
    }
    // Se inscreve para receber valores referentes a campos do tipo combo.
    optionsServiceSubscribe() {
        this.subscription.add(this.poDynamicForm.getObjectValue().subscribe(optionServiceObject => {
            if (optionServiceObject) {
                this.getOptionsServiceItem(optionServiceObject);
            }
        }));
    }
}
PoAdvancedFilterComponent.ɵfac = function PoAdvancedFilterComponent_Factory(t) { return new (t || PoAdvancedFilterComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoAdvancedFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAdvancedFilterComponent, selectors: [["po-advanced-filter"]], viewQuery: function PoAdvancedFilterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoDynamicFormComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poDynamicForm = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["p-hide-close", "", 3, "p-primary-action", "p-secondary-action", "p-title"], [3, "p-fields", "p-value"]], template: function PoAdvancedFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0);
        i0.ɵɵelement(1, "po-dynamic-form", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.literals.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-fields", ctx.filters)("p-value", ctx.filter);
    } }, dependencies: [i1.PoDynamicFormComponent, i1.PoModalComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAdvancedFilterComponent, [{
        type: Component,
        args: [{ selector: 'po-advanced-filter', template: "<po-modal\r\n  p-hide-close\r\n  [p-primary-action]=\"primaryAction\"\r\n  [p-secondary-action]=\"secondaryAction\"\r\n  [p-title]=\"literals.title\"\r\n>\r\n  <po-dynamic-form [p-fields]=\"filters\" [p-value]=\"filter\"> </po-dynamic-form>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poDynamicForm: [{
            type: ViewChild,
            args: [PoDynamicFormComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWR2YW5jZWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1keW5hbWljLXNlYXJjaC9wby1hZHZhbmNlZC1maWx0ZXIvcG8tYWR2YW5jZWQtZmlsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1keW5hbWljLXNlYXJjaC9wby1hZHZhbmNlZC1maWx0ZXIvcG8tYWR2YW5jZWQtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBaUIsc0JBQXNCLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFFaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7OztBQUdwRjs7Ozs7Ozs7Ozs7R0FXRztBQUtILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSw2QkFBNkI7SUFLMUUsWUFBWSxlQUFrQztRQUM1QyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFIakIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTFDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8scUJBQXFCLENBQUMsbUJBQWtDO1FBQzlELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ILElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDL0Y7SUFDSCxDQUFDO0lBRU8sMEJBQTBCLENBQUMsT0FBMEM7UUFDM0UsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsc0VBQXNFO0lBQzlELHVCQUF1QjtRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNsRSxJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztrR0E1Q1UseUJBQXlCOzRFQUF6Qix5QkFBeUI7dUJBQ3pCLHNCQUFzQjs7Ozs7UUN6Qm5DLG1DQUtDO1FBQ0MscUNBQTRFO1FBQzlFLGlCQUFXOztRQUxULG9EQUFrQywyQ0FBQSwrQkFBQTtRQUlqQixlQUFvQjtRQUFwQixzQ0FBb0IsdUJBQUE7O3VGRGtCMUIseUJBQXlCO2NBSnJDLFNBQVM7MkJBQ0Usb0JBQW9CO29FQUl1QixhQUFhO2tCQUFqRSxTQUFTO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBvQ29tYm9PcHRpb24sIFBvRHluYW1pY0Zvcm1Db21wb25lbnQsIFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9BZHZhbmNlZEZpbHRlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWFkdmFuY2VkLWZpbHRlci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNTZWFyY2hGaWx0ZXJzIH0gZnJvbSAnLi4vcG8tcGFnZS1keW5hbWljLXNlYXJjaC1maWx0ZXJzLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0FkdmFuY2VkRmlsdGVyQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVByaXZhdGVcclxuICpcclxuICogPGV4YW1wbGUtcHJpdmF0ZSBuYW1lPVwicG8tYWR2YW5jZWQtZmlsdGVyXCIgdGl0bGU9XCJQTyBCdXNjYSBBdmFuw6dhZGFcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWFkdmFuY2VkLWZpbHRlci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1hZHZhbmNlZC1maWx0ZXIuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlLXByaXZhdGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWFkdmFuY2VkLWZpbHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWFkdmFuY2VkLWZpbHRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBQb0FkdmFuY2VkRmlsdGVyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFBvRHluYW1pY0Zvcm1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBvRHluYW1pY0Zvcm06IFBvRHluYW1pY0Zvcm1Db21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlU3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmtlZXBGaWx0ZXJzID8gdGhpcy5nZXRJbml0aWFsVmFsdWVzRnJvbUZpbHRlcih0aGlzLmZpbHRlcnMpIDoge307XHJcblxyXG4gICAgdGhpcy5wb01vZGFsLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3B0aW9uc1NlcnZpY2VJdGVtKG9wdGlvblNlcnZpY2VPYmplY3Q6IFBvQ29tYm9PcHRpb24pIHtcclxuICAgIGNvbnN0IG9iamVjdEl0ZW0gPSB0aGlzLm9wdGlvbnNTZXJ2aWNlQ2hvc2VuT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkuaW5kZXhPZihvcHRpb25TZXJ2aWNlT2JqZWN0LnZhbHVlKTtcclxuXHJcbiAgICBpZiAob2JqZWN0SXRlbSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5vcHRpb25zU2VydmljZUNob3Nlbk9wdGlvbnMgPSBbLi4udGhpcy5vcHRpb25zU2VydmljZUNob3Nlbk9wdGlvbnMsIG9wdGlvblNlcnZpY2VPYmplY3RdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbml0aWFsVmFsdWVzRnJvbUZpbHRlcihmaWx0ZXJzOiBBcnJheTxQb1BhZ2VEeW5hbWljU2VhcmNoRmlsdGVycz4pIHtcclxuICAgIHJldHVybiBmaWx0ZXJzLnJlZHVjZSgocmVzdWx0LCBpdGVtKSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBbaXRlbS5wcm9wZXJ0eV06IGl0ZW0uaW5pdFZhbHVlIH0pLCB7fSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZSBpbnNjcmV2ZSBwYXJhIHJlY2ViZXIgdmFsb3JlcyByZWZlcmVudGVzIGEgY2FtcG9zIGRvIHRpcG8gY29tYm8uXHJcbiAgcHJpdmF0ZSBvcHRpb25zU2VydmljZVN1YnNjcmliZSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgdGhpcy5wb0R5bmFtaWNGb3JtLmdldE9iamVjdFZhbHVlKCkuc3Vic2NyaWJlKG9wdGlvblNlcnZpY2VPYmplY3QgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25TZXJ2aWNlT2JqZWN0KSB7XHJcbiAgICAgICAgICB0aGlzLmdldE9wdGlvbnNTZXJ2aWNlSXRlbShvcHRpb25TZXJ2aWNlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tbW9kYWxcclxuICBwLWhpZGUtY2xvc2VcclxuICBbcC1wcmltYXJ5LWFjdGlvbl09XCJwcmltYXJ5QWN0aW9uXCJcclxuICBbcC1zZWNvbmRhcnktYWN0aW9uXT1cInNlY29uZGFyeUFjdGlvblwiXHJcbiAgW3AtdGl0bGVdPVwibGl0ZXJhbHMudGl0bGVcIlxyXG4+XHJcbiAgPHBvLWR5bmFtaWMtZm9ybSBbcC1maWVsZHNdPVwiZmlsdGVyc1wiIFtwLXZhbHVlXT1cImZpbHRlclwiPiA8L3BvLWR5bmFtaWMtZm9ybT5cclxuPC9wby1tb2RhbD5cclxuIl19