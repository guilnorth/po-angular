import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoButtonModule, PoDividerModule, PoDynamicModule, PoGridModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageDynamicEditComponent } from './po-page-dynamic-edit.component';
import { PoPageDynamicModule } from '../../services/po-page-dynamic/po-page-dynamic.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-page-dynamic-detail.
 */
export class PoPageDynamicEditModule {
}
PoPageDynamicEditModule.ɵfac = function PoPageDynamicEditModule_Factory(t) { return new (t || PoPageDynamicEditModule)(); };
PoPageDynamicEditModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicEditModule });
PoPageDynamicEditModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoButtonModule,
        PoDividerModule,
        PoDynamicModule,
        PoGridModule,
        PoPageModule,
        PoWidgetModule,
        PoPageDynamicModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicEditModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    PoButtonModule,
                    PoDividerModule,
                    PoDynamicModule,
                    PoGridModule,
                    PoPageModule,
                    PoWidgetModule,
                    PoPageDynamicModule
                ],
                declarations: [PoPageDynamicEditComponent],
                exports: [PoPageDynamicEditComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicEditModule, { declarations: [PoPageDynamicEditComponent], imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoButtonModule,
        PoDividerModule,
        PoDynamicModule,
        PoGridModule,
        PoPageModule,
        PoWidgetModule,
        PoPageDynamicModule], exports: [PoPageDynamicEditComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWVkaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWR5bmFtaWMtZWRpdC9wby1wYWdlLWR5bmFtaWMtZWRpdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEVBQ2YsWUFBWSxFQUNaLFlBQVksRUFDWixjQUFjLEVBQ2YsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUFFNUY7Ozs7R0FJRztBQWtCSCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCO3lFQUF2Qix1QkFBdUI7NkVBZmhDLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUVaLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjt1RkFLVix1QkFBdUI7Y0FqQm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBRVosY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDdEM7O3dGQUNZLHVCQUF1QixtQkFIbkIsMEJBQTBCLGFBWnZDLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUVaLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQixhQUdYLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0J1dHRvbk1vZHVsZSxcclxuICBQb0RpdmlkZXJNb2R1bGUsXHJcbiAgUG9EeW5hbWljTW9kdWxlLFxyXG4gIFBvR3JpZE1vZHVsZSxcclxuICBQb1BhZ2VNb2R1bGUsXHJcbiAgUG9XaWRnZXRNb2R1bGVcclxufSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRWRpdENvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1keW5hbWljLWVkaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY01vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLXBhZ2UtZHluYW1pYy9wby1wYWdlLWR5bmFtaWMubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyB0ZW1wbGF0ZSBkbyBwby1wYWdlLWR5bmFtaWMtZGV0YWlsLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuXHJcbiAgICBQb0J1dHRvbk1vZHVsZSxcclxuICAgIFBvRGl2aWRlck1vZHVsZSxcclxuICAgIFBvRHluYW1pY01vZHVsZSxcclxuICAgIFBvR3JpZE1vZHVsZSxcclxuICAgIFBvUGFnZU1vZHVsZSxcclxuICAgIFBvV2lkZ2V0TW9kdWxlLFxyXG4gICAgUG9QYWdlRHluYW1pY01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9QYWdlRHluYW1pY0VkaXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb1BhZ2VEeW5hbWljRWRpdENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNFZGl0TW9kdWxlIHt9XHJcbiJdfQ==