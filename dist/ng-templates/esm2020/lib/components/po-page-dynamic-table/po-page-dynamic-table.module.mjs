import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '../po-page-dynamic-search/po-page-dynamic-search.module';
import { PoPageDynamicTableComponent } from './po-page-dynamic-table.component';
import { PoPageCustomizationModule } from '../../services/po-page-customization/po-page-customization.module';
import { PoPageDynamicModule } from '../../services/po-page-dynamic/po-page-dynamic.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-dynamic-table.
 */
export class PoPageDynamicTableModule {
}
PoPageDynamicTableModule.ɵfac = function PoPageDynamicTableModule_Factory(t) { return new (t || PoPageDynamicTableModule)(); };
PoPageDynamicTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicTableModule });
PoPageDynamicTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoTableModule,
        PoPageDynamicSearchModule,
        PoPageCustomizationModule,
        PoPageDynamicModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    PoTableModule,
                    PoPageDynamicSearchModule,
                    PoPageCustomizationModule,
                    PoPageDynamicModule
                ],
                declarations: [PoPageDynamicTableComponent],
                exports: [PoPageDynamicTableComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicTableModule, { declarations: [PoPageDynamicTableComponent], imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoTableModule,
        PoPageDynamicSearchModule,
        PoPageCustomizationModule,
        PoPageDynamicModule], exports: [PoPageDynamicTableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1keW5hbWljLXRhYmxlL3BvLXBhZ2UtZHluYW1pYy10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFcEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBRTVGOzs7O0dBSUc7QUFlSCxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzBFQUF4Qix3QkFBd0I7OEVBWmpDLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUVaLGFBQWE7UUFDYix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG1CQUFtQjt1RkFLVix3QkFBd0I7Y0FkcEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFFWixhQUFhO29CQUNiLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN2Qzs7d0ZBQ1ksd0JBQXdCLG1CQUhwQiwyQkFBMkIsYUFUeEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBRVosYUFBYTtRQUNiLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsbUJBQW1CLGFBR1gsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQb1RhYmxlTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1NlYXJjaE1vZHVsZSB9IGZyb20gJy4uL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2gvcG8tcGFnZS1keW5hbWljLXNlYXJjaC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWR5bmFtaWMtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlQ3VzdG9taXphdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLXBhZ2UtY3VzdG9taXphdGlvbi9wby1wYWdlLWN1c3RvbWl6YXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY01vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLXBhZ2UtZHluYW1pYy9wby1wYWdlLWR5bmFtaWMubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyB0ZW1wbGF0ZSBkbyBwby1wYWdlLWR5bmFtaWMtdGFibGUuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG5cclxuICAgIFBvVGFibGVNb2R1bGUsXHJcbiAgICBQb1BhZ2VEeW5hbWljU2VhcmNoTW9kdWxlLFxyXG4gICAgUG9QYWdlQ3VzdG9taXphdGlvbk1vZHVsZSxcclxuICAgIFBvUGFnZUR5bmFtaWNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvUGFnZUR5bmFtaWNUYWJsZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvUGFnZUR5bmFtaWNUYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNUYWJsZU1vZHVsZSB7fVxyXG4iXX0=