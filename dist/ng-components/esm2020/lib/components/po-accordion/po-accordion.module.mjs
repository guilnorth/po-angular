import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoAccordionComponent } from './po-accordion.component';
import { PoAccordionItemBodyComponent } from './po-accordion-item-body/po-accordion-item-body.component';
import { PoAccordionItemComponent } from './po-accordion-item/po-accordion-item.component';
import { PoAccordionItemHeaderComponent } from './po-accordion-item-header/po-accordion-item-header.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-accordion`.
 *
 * > Para o correto funcionamento do componente `po-accordion`, deve ser importado o módulo `BrowserAnimationsModule` no
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
export class PoAccordionModule {
}
PoAccordionModule.ɵfac = function PoAccordionModule_Factory(t) { return new (t || PoAccordionModule)(); };
PoAccordionModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoAccordionModule });
PoAccordionModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAccordionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    PoAccordionComponent,
                    PoAccordionItemBodyComponent,
                    PoAccordionItemComponent,
                    PoAccordionItemHeaderComponent
                ],
                exports: [PoAccordionComponent, PoAccordionItemComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoAccordionModule, { declarations: [PoAccordionComponent,
        PoAccordionItemBodyComponent,
        PoAccordionItemComponent,
        PoAccordionItemHeaderComponent], imports: [CommonModule], exports: [PoAccordionComponent, PoAccordionItemComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1hY2NvcmRpb24vcG8tYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQzs7QUFFL0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQVdILE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7bUVBQWpCLGlCQUFpQjt1RUFUbEIsWUFBWTt1RkFTWCxpQkFBaUI7Y0FWN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsNEJBQTRCO29CQUM1Qix3QkFBd0I7b0JBQ3hCLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsd0JBQXdCLENBQUM7YUFDMUQ7O3dGQUNZLGlCQUFpQixtQkFQMUIsb0JBQW9CO1FBQ3BCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsOEJBQThCLGFBTHRCLFlBQVksYUFPWixvQkFBb0IsRUFBRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9BY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL3BvLWFjY29yZGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0FjY29yZGlvbkl0ZW1Cb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9wby1hY2NvcmRpb24taXRlbS1ib2R5L3BvLWFjY29yZGlvbi1pdGVtLWJvZHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9BY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wby1hY2NvcmRpb24taXRlbS9wby1hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0FjY29yZGlvbkl0ZW1IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3BvLWFjY29yZGlvbi1pdGVtLWhlYWRlci9wby1hY2NvcmRpb24taXRlbS1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIGBwby1hY2NvcmRpb25gLlxyXG4gKlxyXG4gKiA+IFBhcmEgbyBjb3JyZXRvIGZ1bmNpb25hbWVudG8gZG8gY29tcG9uZW50ZSBgcG8tYWNjb3JkaW9uYCwgZGV2ZSBzZXIgaW1wb3J0YWRvIG8gbcOzZHVsbyBgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVgIG5vXHJcbiAqID4gbcOzZHVsbyBwcmluY2lwYWwgZGEgc3VhIGFwbGljYcOnw6NvLlxyXG4gKlxyXG4gKiBNw7NkdWxvIGRhIGFwbGljYcOnw6NvOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG4gKiBpbXBvcnQgeyBQb01vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICogLi4uXHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcclxuICogICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gKiAgICAgLi4uXHJcbiAqICAgICBQb01vZHVsZVxyXG4gKiAgIF0sXHJcbiAqICAgZGVjbGFyYXRpb25zOiBbXHJcbiAqICAgICBBcHBDb21wb25lbnQsXHJcbiAqICAgICAuLi5cclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW10sXHJcbiAqICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4gKiBgYGBcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQb0FjY29yZGlvbkNvbXBvbmVudCxcclxuICAgIFBvQWNjb3JkaW9uSXRlbUJvZHlDb21wb25lbnQsXHJcbiAgICBQb0FjY29yZGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBQb0FjY29yZGlvbkl0ZW1IZWFkZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtQb0FjY29yZGlvbkNvbXBvbmVudCwgUG9BY2NvcmRpb25JdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9BY2NvcmRpb25Nb2R1bGUge31cclxuIl19