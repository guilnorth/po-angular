import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoDynamicModule, PoModalModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageDynamicDetailComponent } from './po-page-dynamic-detail.component';
import { PoPageDynamicModule } from '../../services/po-page-dynamic/po-page-dynamic.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-dynamic-detail.
 */
export class PoPageDynamicDetailModule {
}
PoPageDynamicDetailModule.ɵfac = function PoPageDynamicDetailModule_Factory(t) { return new (t || PoPageDynamicDetailModule)(); };
PoPageDynamicDetailModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicDetailModule });
PoPageDynamicDetailModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoDynamicModule,
        PoModalModule,
        PoPageModule,
        PoWidgetModule,
        PoPageDynamicModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicDetailModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    PoDynamicModule,
                    PoModalModule,
                    PoPageModule,
                    PoWidgetModule,
                    PoPageDynamicModule
                ],
                declarations: [PoPageDynamicDetailComponent],
                exports: [PoPageDynamicDetailComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicDetailModule, { declarations: [PoPageDynamicDetailComponent], imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoDynamicModule,
        PoModalModule,
        PoPageModule,
        PoWidgetModule,
        PoPageDynamicModule], exports: [PoPageDynamicDetailComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWRldGFpbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwvcG8tcGFnZS1keW5hbWljLWRldGFpbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBRTVGOzs7O0dBSUc7QUFnQkgsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5QjsyRUFBekIseUJBQXlCOytFQWJsQyxZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFFWixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO3VGQUtWLHlCQUF5QjtjQWZyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO29CQUVaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDeEM7O3dGQUNZLHlCQUF5QixtQkFIckIsNEJBQTRCLGFBVnpDLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUVaLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUIsYUFHWCw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvRHluYW1pY01vZHVsZSwgUG9Nb2RhbE1vZHVsZSwgUG9QYWdlTW9kdWxlLCBQb1dpZGdldE1vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY01vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLXBhZ2UtZHluYW1pYy9wby1wYWdlLWR5bmFtaWMubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyB0ZW1wbGF0ZSBkbyBwby1wYWdlLWR5bmFtaWMtZGV0YWlsLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuXHJcbiAgICBQb0R5bmFtaWNNb2R1bGUsXHJcbiAgICBQb01vZGFsTW9kdWxlLFxyXG4gICAgUG9QYWdlTW9kdWxlLFxyXG4gICAgUG9XaWRnZXRNb2R1bGUsXHJcbiAgICBQb1BhZ2VEeW5hbWljTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb1BhZ2VEeW5hbWljRGV0YWlsQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9QYWdlRHluYW1pY0RldGFpbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNEZXRhaWxNb2R1bGUge31cclxuIl19