import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoContainerModule } from '../po-container/po-container.module';
import { PoSlideCirclesComponent } from './po-slide-circles/po-slide-circles.component';
import { PoSlideComponent } from './po-slide.component';
import { PoSlideContentTemplateDirective } from './directives/po-slide-content-template.directive';
import { PoSlideControlComponent } from './po-slide-control/po-slide-control.component';
import { PoSlideItemComponent } from './po-slide-item/po-slide-item.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-slide`.
 *
 * > Para o correto funcionamento do componente `po-slide`, deve ser importado o módulo `BrowserAnimationsModule` no
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
export class PoSlideModule {
}
PoSlideModule.ɵfac = function PoSlideModule_Factory(t) { return new (t || PoSlideModule)(); };
PoSlideModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoSlideModule });
PoSlideModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule, PoContainerModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, PoContainerModule],
                declarations: [
                    PoSlideCirclesComponent,
                    PoSlideComponent,
                    PoSlideControlComponent,
                    PoSlideContentTemplateDirective,
                    PoSlideItemComponent
                ],
                exports: [PoSlideComponent, PoSlideContentTemplateDirective],
                providers: [],
                schemas: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoSlideModule, { declarations: [PoSlideCirclesComponent,
        PoSlideComponent,
        PoSlideControlComponent,
        PoSlideContentTemplateDirective,
        PoSlideItemComponent], imports: [CommonModule, RouterModule, PoContainerModule], exports: [PoSlideComponent, PoSlideContentTemplateDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXNsaWRlL3BvLXNsaWRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRS9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFjSCxNQUFNLE9BQU8sYUFBYTs7MEVBQWIsYUFBYTsrREFBYixhQUFhO21FQVpkLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCO3VGQVk1QyxhQUFhO2NBYnpCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2dCQUN4RCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2QixnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsK0JBQStCO29CQUMvQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLCtCQUErQixDQUFDO2dCQUM1RCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsRUFBRTthQUNaOzt3RkFDWSxhQUFhLG1CQVZ0Qix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QiwrQkFBK0I7UUFDL0Isb0JBQW9CLGFBTlosWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsYUFRN0MsZ0JBQWdCLEVBQUUsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi4vcG8tY29udGFpbmVyL3BvLWNvbnRhaW5lci5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9TbGlkZUNpcmNsZXNDb21wb25lbnQgfSBmcm9tICcuL3BvLXNsaWRlLWNpcmNsZXMvcG8tc2xpZGUtY2lyY2xlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1NsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1zbGlkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1NsaWRlQ29udGVudFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvLXNsaWRlLWNvbnRlbnQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9TbGlkZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3BvLXNsaWRlLWNvbnRyb2wvcG8tc2xpZGUtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1NsaWRlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcG8tc2xpZGUtaXRlbS9wby1zbGlkZS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gY29tcG9uZW50ZSBgcG8tc2xpZGVgLlxyXG4gKlxyXG4gKiA+IFBhcmEgbyBjb3JyZXRvIGZ1bmNpb25hbWVudG8gZG8gY29tcG9uZW50ZSBgcG8tc2xpZGVgLCBkZXZlIHNlciBpbXBvcnRhZG8gbyBtw7NkdWxvIGBCcm93c2VyQW5pbWF0aW9uc01vZHVsZWAgbm9cclxuICogPiBtw7NkdWxvIHByaW5jaXBhbCBkYSBzdWEgYXBsaWNhw6fDo28uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZGEgYXBsaWNhw6fDo286XHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbiAqIGltcG9ydCB7IFBvTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gKiAuLi5cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBCcm93c2VyTW9kdWxlLFxyXG4gKiAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAqICAgICAuLi5cclxuICogICAgIFBvTW9kdWxlXHJcbiAqICAgXSxcclxuICogICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgIEFwcENvbXBvbmVudCxcclxuICogICAgIC4uLlxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXSxcclxuICogICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFBvQ29udGFpbmVyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvU2xpZGVDaXJjbGVzQ29tcG9uZW50LFxyXG4gICAgUG9TbGlkZUNvbXBvbmVudCxcclxuICAgIFBvU2xpZGVDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUG9TbGlkZUNvbnRlbnRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFBvU2xpZGVJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbUG9TbGlkZUNvbXBvbmVudCwgUG9TbGlkZUNvbnRlbnRUZW1wbGF0ZURpcmVjdGl2ZV0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBzY2hlbWFzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9TbGlkZU1vZHVsZSB7fVxyXG4iXX0=