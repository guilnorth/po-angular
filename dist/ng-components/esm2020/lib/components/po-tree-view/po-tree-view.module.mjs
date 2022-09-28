import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoContainerModule } from '../po-container/po-container.module';
import { PoFieldModule } from '../po-field/po-field.module';
import { PoTreeViewComponent } from './po-tree-view.component';
import { PoTreeViewItemComponent } from './po-tree-view-item/po-tree-view-item.component';
import { PoTreeViewItemHeaderComponent } from './po-tree-view-item-header/po-tree-view-item-header.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-tree-view`.
 *
 * > Para o correto funcionamento do componente `po-tree-view`, deve ser importado o módulo `BrowserAnimationsModule` no
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
export class PoTreeViewModule {
}
PoTreeViewModule.ɵfac = function PoTreeViewModule_Factory(t) { return new (t || PoTreeViewModule)(); };
PoTreeViewModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoTreeViewModule });
PoTreeViewModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, PoContainerModule, PoFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTreeViewModule, [{
        type: NgModule,
        args: [{
                declarations: [PoTreeViewComponent, PoTreeViewItemComponent, PoTreeViewItemHeaderComponent],
                exports: [PoTreeViewComponent],
                imports: [CommonModule, FormsModule, PoContainerModule, PoFieldModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoTreeViewModule, { declarations: [PoTreeViewComponent, PoTreeViewItemComponent, PoTreeViewItemHeaderComponent], imports: [CommonModule, FormsModule, PoContainerModule, PoFieldModule], exports: [PoTreeViewComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdHJlZS12aWV3Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10cmVlLXZpZXcvcG8tdHJlZS12aWV3Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDOztBQUU5Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjtrRUFBaEIsZ0JBQWdCO3NFQUZqQixZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGFBQWE7dUZBRTFELGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLENBQUM7Z0JBQzNGLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQzthQUN2RTs7d0ZBQ1ksZ0JBQWdCLG1CQUpaLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixhQUVoRixZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsYUFEM0QsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4uL3BvLWNvbnRhaW5lci9wby1jb250YWluZXIubW9kdWxlJztcclxuaW1wb3J0IHsgUG9GaWVsZE1vZHVsZSB9IGZyb20gJy4uL3BvLWZpZWxkL3BvLWZpZWxkLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQb1RyZWVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wby10cmVlLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UcmVlVmlld0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BvLXRyZWUtdmlldy1pdGVtL3BvLXRyZWUtdmlldy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVHJlZVZpZXdJdGVtSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby10cmVlLXZpZXctaXRlbS1oZWFkZXIvcG8tdHJlZS12aWV3LWl0ZW0taGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gY29tcG9uZW50ZSBgcG8tdHJlZS12aWV3YC5cclxuICpcclxuICogPiBQYXJhIG8gY29ycmV0byBmdW5jaW9uYW1lbnRvIGRvIGNvbXBvbmVudGUgYHBvLXRyZWUtdmlld2AsIGRldmUgc2VyIGltcG9ydGFkbyBvIG3Ds2R1bG8gYEJyb3dzZXJBbmltYXRpb25zTW9kdWxlYCBub1xyXG4gKiA+IG3Ds2R1bG8gcHJpbmNpcGFsIGRhIHN1YSBhcGxpY2HDp8Ojby5cclxuICpcclxuICogTcOzZHVsbyBkYSBhcGxpY2HDp8OjbzpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuICogaW1wb3J0IHsgUG9Nb2R1bGUgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAqICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICogICAgIC4uLlxyXG4gKiAgICAgUG9Nb2R1bGVcclxuICogICBdLFxyXG4gKiAgIGRlY2xhcmF0aW9uczogW1xyXG4gKiAgICAgQXBwQ29tcG9uZW50LFxyXG4gKiAgICAgLi4uXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtdLFxyXG4gKiAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1BvVHJlZVZpZXdDb21wb25lbnQsIFBvVHJlZVZpZXdJdGVtQ29tcG9uZW50LCBQb1RyZWVWaWV3SXRlbUhlYWRlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvVHJlZVZpZXdDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBQb0NvbnRhaW5lck1vZHVsZSwgUG9GaWVsZE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVHJlZVZpZXdNb2R1bGUge31cclxuIl19