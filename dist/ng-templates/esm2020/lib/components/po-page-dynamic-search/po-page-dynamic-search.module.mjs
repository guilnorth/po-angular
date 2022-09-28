import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoDynamicModule, PoLanguageModule, PoModalModule, PoPageModule } from '@po-ui/ng-components';
import { PoPageCustomizationModule } from '../../services/po-page-customization/po-page-customization.module';
import { PoAdvancedFilterComponent } from './po-advanced-filter/po-advanced-filter.component';
import { PoPageDynamicSearchComponent } from './po-page-dynamic-search.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-dynamic-search.
 */
export class PoPageDynamicSearchModule {
}
PoPageDynamicSearchModule.ɵfac = function PoPageDynamicSearchModule_Factory(t) { return new (t || PoPageDynamicSearchModule)(); };
PoPageDynamicSearchModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicSearchModule });
PoPageDynamicSearchModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoDynamicModule,
        PoLanguageModule,
        PoModalModule,
        PoPageModule,
        PoPageCustomizationModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicSearchModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    PoDynamicModule,
                    PoLanguageModule,
                    PoModalModule,
                    PoPageModule,
                    PoPageCustomizationModule
                ],
                declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent],
                exports: [PoPageDynamicSearchComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicSearchModule, { declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent], imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoDynamicModule,
        PoLanguageModule,
        PoModalModule,
        PoPageModule,
        PoPageCustomizationModule], exports: [PoPageDynamicSearchComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLXNlYXJjaC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2gvcG8tcGFnZS1keW5hbWljLXNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUU5RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFFbEY7Ozs7R0FJRztBQWdCSCxNQUFNLE9BQU8seUJBQXlCOztrR0FBekIseUJBQXlCOzJFQUF6Qix5QkFBeUI7K0VBYmxDLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUVaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFlBQVk7UUFDWix5QkFBeUI7dUZBS2hCLHlCQUF5QjtjQWZyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO29CQUVaLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLFlBQVk7b0JBQ1oseUJBQXlCO2lCQUMxQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsQ0FBQztnQkFDdkUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDeEM7O3dGQUNZLHlCQUF5QixtQkFIckIseUJBQXlCLEVBQUUsNEJBQTRCLGFBVnBFLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUVaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFlBQVk7UUFDWix5QkFBeUIsYUFHakIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNNb2R1bGUsIFBvTGFuZ3VhZ2VNb2R1bGUsIFBvTW9kYWxNb2R1bGUsIFBvUGFnZU1vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUN1c3RvbWl6YXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWN1c3RvbWl6YXRpb24vcG8tcGFnZS1jdXN0b21pemF0aW9uLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQb0FkdmFuY2VkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1hZHZhbmNlZC1maWx0ZXIvcG8tYWR2YW5jZWQtZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1zZWFyY2guY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyB0ZW1wbGF0ZSBkbyBwby1wYWdlLWR5bmFtaWMtc2VhcmNoLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuXHJcbiAgICBQb0R5bmFtaWNNb2R1bGUsXHJcbiAgICBQb0xhbmd1YWdlTW9kdWxlLFxyXG4gICAgUG9Nb2RhbE1vZHVsZSxcclxuICAgIFBvUGFnZU1vZHVsZSxcclxuICAgIFBvUGFnZUN1c3RvbWl6YXRpb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQsIFBvUGFnZUR5bmFtaWNTZWFyY2hDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb1BhZ2VEeW5hbWljU2VhcmNoQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlRHluYW1pY1NlYXJjaE1vZHVsZSB7fVxyXG4iXX0=