import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoBreadcrumbModule } from '../po-breadcrumb/po-breadcrumb.module';
import { PoButtonModule } from '../po-button/po-button.module';
import { PoDisclaimerGroupModule } from '../po-disclaimer-group/po-disclaimer-group.module';
import { PoDropdownModule } from '../po-dropdown/po-dropdown.module';
import { PoFieldModule } from '../po-field/po-field.module';
import { PoLanguageModule } from './../../services/po-language/po-language.module';
import { PoModalModule } from './../po-modal/po-modal.module';
import { PoPageContentComponent } from './po-page-content/po-page-content.component';
import { PoPageDefaultComponent } from './po-page-default/po-page-default.component';
import { PoPageDetailComponent } from './po-page-detail/po-page-detail.component';
import { PoPageEditComponent } from './po-page-edit/po-page-edit.component';
import { PoPageHeaderComponent } from './po-page-header/po-page-header.component';
import { PoPageListComponent } from './po-page-list/po-page-list.component';
import { PoPageSlideComponent } from './po-page-slide/po-page-slide.component';
import { PoPageComponent } from './po-page.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo dos componentes po-page-default, po-page-detail, po-page-edit,
 * po-page-list e po-page-slide.
 */
export class PoPageModule {
}
PoPageModule.ɵfac = function PoPageModule_Factory(t) { return new (t || PoPageModule)(); };
PoPageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageModule });
PoPageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoBreadcrumbModule,
        PoButtonModule,
        PoDisclaimerGroupModule,
        PoDropdownModule,
        PoFieldModule,
        PoLanguageModule,
        PoModalModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    PoBreadcrumbModule,
                    PoButtonModule,
                    PoDisclaimerGroupModule,
                    PoDropdownModule,
                    PoFieldModule,
                    PoLanguageModule,
                    PoModalModule
                ],
                declarations: [
                    PoPageComponent,
                    PoPageContentComponent,
                    PoPageDefaultComponent,
                    PoPageDetailComponent,
                    PoPageEditComponent,
                    PoPageHeaderComponent,
                    PoPageListComponent,
                    PoPageSlideComponent
                ],
                exports: [
                    PoPageDefaultComponent,
                    PoPageDetailComponent,
                    PoPageEditComponent,
                    PoPageListComponent,
                    PoPageSlideComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageModule, { declarations: [PoPageComponent,
        PoPageContentComponent,
        PoPageDefaultComponent,
        PoPageDetailComponent,
        PoPageEditComponent,
        PoPageHeaderComponent,
        PoPageListComponent,
        PoPageSlideComponent], imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoBreadcrumbModule,
        PoButtonModule,
        PoDisclaimerGroupModule,
        PoDropdownModule,
        PoFieldModule,
        PoLanguageModule,
        PoModalModule], exports: [PoPageDefaultComponent,
        PoPageDetailComponent,
        PoPageEditComponent,
        PoPageListComponent,
        PoPageSlideComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS9wby1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7Ozs7R0FJRztBQWdDSCxNQUFNLE9BQU8sWUFBWTs7d0VBQVosWUFBWTs4REFBWixZQUFZO2tFQTdCckIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsYUFBYTt1RkFvQkosWUFBWTtjQS9CeEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRTtvQkFDWixlQUFlO29CQUNmLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsb0JBQW9CO2lCQUNyQjthQUNGOzt3RkFDWSxZQUFZLG1CQWpCckIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLG9CQUFvQixhQW5CcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsYUFBYSxhQWFiLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvQnJlYWRjcnVtYk1vZHVsZSB9IGZyb20gJy4uL3BvLWJyZWFkY3J1bWIvcG8tYnJlYWRjcnVtYi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL3BvLWJ1dHRvbi9wby1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9EaXNjbGFpbWVyR3JvdXBNb2R1bGUgfSBmcm9tICcuLi9wby1kaXNjbGFpbWVyLWdyb3VwL3BvLWRpc2NsYWltZXItZ3JvdXAubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL3BvLWRyb3Bkb3duL3BvLWRyb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvRmllbGRNb2R1bGUgfSBmcm9tICcuLi9wby1maWVsZC9wby1maWVsZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb01vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi9wby1tb2RhbC9wby1tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb1BhZ2VDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWNvbnRlbnQvcG8tcGFnZS1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZURlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL3BvLXBhZ2UtZGVmYXVsdC9wby1wYWdlLWRlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWRldGFpbC9wby1wYWdlLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWVkaXQvcG8tcGFnZS1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1oZWFkZXIvcG8tcGFnZS1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1saXN0L3BvLXBhZ2UtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1zbGlkZS9wby1wYWdlLXNsaWRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBNw7NkdWxvIGRvcyBjb21wb25lbnRlcyBwby1wYWdlLWRlZmF1bHQsIHBvLXBhZ2UtZGV0YWlsLCBwby1wYWdlLWVkaXQsXHJcbiAqIHBvLXBhZ2UtbGlzdCBlIHBvLXBhZ2Utc2xpZGUuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgUG9CcmVhZGNydW1iTW9kdWxlLFxyXG4gICAgUG9CdXR0b25Nb2R1bGUsXHJcbiAgICBQb0Rpc2NsYWltZXJHcm91cE1vZHVsZSxcclxuICAgIFBvRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBQb0ZpZWxkTW9kdWxlLFxyXG4gICAgUG9MYW5ndWFnZU1vZHVsZSxcclxuICAgIFBvTW9kYWxNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9QYWdlQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlQ29udGVudENvbXBvbmVudCxcclxuICAgIFBvUGFnZURlZmF1bHRDb21wb25lbnQsXHJcbiAgICBQb1BhZ2VEZXRhaWxDb21wb25lbnQsXHJcbiAgICBQb1BhZ2VFZGl0Q29tcG9uZW50LFxyXG4gICAgUG9QYWdlSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlTGlzdENvbXBvbmVudCxcclxuICAgIFBvUGFnZVNsaWRlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQb1BhZ2VEZWZhdWx0Q29tcG9uZW50LFxyXG4gICAgUG9QYWdlRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgUG9QYWdlRWRpdENvbXBvbmVudCxcclxuICAgIFBvUGFnZUxpc3RDb21wb25lbnQsXHJcbiAgICBQb1BhZ2VTbGlkZUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZU1vZHVsZSB7fVxyXG4iXX0=