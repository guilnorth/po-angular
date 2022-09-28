import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoButtonModule } from '../po-button/po-button.module';
import { PoPopupModule } from '../po-popup/po-popup.module';
import { PoCheckboxModule } from './../po-field/po-checkbox/po-checkbox.module';
import { PoListViewComponent } from './po-list-view.component';
import { PoListViewContentTemplateDirective } from './po-list-view-content-template/po-list-view-content-template.directive';
import { PoListViewDetailTemplateDirective } from './po-list-view-detail-template/po-list-view-detail-template.directive';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-list-view`.
 *
 * > Para o correto funcionamento do componente `po-list-view`, deve ser importado o módulo `BrowserAnimationsModule` no
 * > módulo principal da sua aplicação.
 *
 * Módulo da aplicação:
 * ```
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { PoModule } from '@po-ui/ng-components';
 * ...
 *
 * @NgModule({
 *   imports: [
 *     BrowserModule,
 *     BrowserAnimationsModule,
 *     ...
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent,
 *     ...
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 */
export class PoListViewModule {
}
PoListViewModule.ɵfac = function PoListViewModule_Factory(t) { return new (t || PoListViewModule)(); };
PoListViewModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoListViewModule });
PoListViewModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoPopupModule, PoCheckboxModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoListViewModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoPopupModule, PoCheckboxModule],
                declarations: [PoListViewComponent, PoListViewContentTemplateDirective, PoListViewDetailTemplateDirective],
                exports: [PoListViewComponent, PoListViewContentTemplateDirective, PoListViewDetailTemplateDirective],
                providers: [],
                schemas: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoListViewModule, { declarations: [PoListViewComponent, PoListViewContentTemplateDirective, PoListViewDetailTemplateDirective], imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoPopupModule, PoCheckboxModule], exports: [PoListViewComponent, PoListViewContentTemplateDirective, PoListViewDetailTemplateDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGlzdC12aWV3Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1saXN0LXZpZXcvcG8tbGlzdC12aWV3Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUVBQXVFLENBQUM7O0FBRTFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFRSCxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBTmpCLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCO3VGQU12RixnQkFBZ0I7Y0FQNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ25HLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGtDQUFrQyxFQUFFLGlDQUFpQyxDQUFDO2dCQUMxRyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsQ0FBQztnQkFDckcsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEVBQUU7YUFDWjs7d0ZBQ1ksZ0JBQWdCLG1CQUxaLG1CQUFtQixFQUFFLGtDQUFrQyxFQUFFLGlDQUFpQyxhQUQvRixZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixhQUV4RixtQkFBbUIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vcG8tYnV0dG9uL3BvLWJ1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb1BvcHVwTW9kdWxlIH0gZnJvbSAnLi4vcG8tcG9wdXAvcG8tcG9wdXAubW9kdWxlJztcclxuaW1wb3J0IHsgUG9DaGVja2JveE1vZHVsZSB9IGZyb20gJy4vLi4vcG8tZmllbGQvcG8tY2hlY2tib3gvcG8tY2hlY2tib3gubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3BvLWxpc3Qtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0xpc3RWaWV3Q29udGVudFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby1saXN0LXZpZXctY29udGVudC10ZW1wbGF0ZS9wby1saXN0LXZpZXctY29udGVudC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb0xpc3RWaWV3RGV0YWlsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLWxpc3Qtdmlldy1kZXRhaWwtdGVtcGxhdGUvcG8tbGlzdC12aWV3LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgYHBvLWxpc3Qtdmlld2AuXHJcbiAqXHJcbiAqID4gUGFyYSBvIGNvcnJldG8gZnVuY2lvbmFtZW50byBkbyBjb21wb25lbnRlIGBwby1saXN0LXZpZXdgLCBkZXZlIHNlciBpbXBvcnRhZG8gbyBtw7NkdWxvIGBCcm93c2VyQW5pbWF0aW9uc01vZHVsZWAgbm9cclxuICogPiBtw7NkdWxvIHByaW5jaXBhbCBkYSBzdWEgYXBsaWNhw6fDo28uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZGEgYXBsaWNhw6fDo286XHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbiAqIGltcG9ydCB7IFBvTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gKiAuLi5cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBCcm93c2VyTW9kdWxlLFxyXG4gKiAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAqICAgICAuLi5cclxuICogICAgIFBvTW9kdWxlXHJcbiAqICAgXSxcclxuICogICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgIEFwcENvbXBvbmVudCxcclxuICogICAgIC4uLlxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXSxcclxuICogICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLCBQb0J1dHRvbk1vZHVsZSwgUG9Qb3B1cE1vZHVsZSwgUG9DaGVja2JveE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9MaXN0Vmlld0NvbXBvbmVudCwgUG9MaXN0Vmlld0NvbnRlbnRUZW1wbGF0ZURpcmVjdGl2ZSwgUG9MaXN0Vmlld0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbUG9MaXN0Vmlld0NvbXBvbmVudCwgUG9MaXN0Vmlld0NvbnRlbnRUZW1wbGF0ZURpcmVjdGl2ZSwgUG9MaXN0Vmlld0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHNjaGVtYXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0xpc3RWaWV3TW9kdWxlIHt9XHJcbiJdfQ==