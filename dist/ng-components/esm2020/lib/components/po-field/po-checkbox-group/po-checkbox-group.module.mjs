import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoFieldContainerModule } from '../po-field-container/po-field-container.module';
import { PoCheckboxGroupComponent } from './po-checkbox-group.component';
import { PoCheckboxModule } from '../po-checkbox/po-checkbox.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-checkbox-group`.
 */
export class PoCheckboxGroupModule {
}
PoCheckboxGroupModule.ɵfac = function PoCheckboxGroupModule_Factory(t) { return new (t || PoCheckboxGroupModule)(); };
PoCheckboxGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoCheckboxGroupModule });
PoCheckboxGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, PoFieldContainerModule, PoCheckboxModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCheckboxGroupModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PoFieldContainerModule, PoCheckboxModule],
                exports: [PoCheckboxGroupComponent],
                declarations: [PoCheckboxGroupComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoCheckboxGroupModule, { declarations: [PoCheckboxGroupComponent], imports: [CommonModule, FormsModule, PoFieldContainerModule, PoCheckboxModule], exports: [PoCheckboxGroupComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hlY2tib3gtZ3JvdXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWNoZWNrYm94LWdyb3VwL3BvLWNoZWNrYm94LWdyb3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRXJFOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8scUJBQXFCOzswRkFBckIscUJBQXFCO3VFQUFyQixxQkFBcUI7MkVBSnRCLFlBQVksRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCO3VGQUlsRSxxQkFBcUI7Y0FMakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzlFLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNuQyxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN6Qzs7d0ZBQ1kscUJBQXFCLG1CQUZqQix3QkFBd0IsYUFGN0IsWUFBWSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsYUFDbkUsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0ZpZWxkQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi4vcG8tZmllbGQtY29udGFpbmVyL3BvLWZpZWxkLWNvbnRhaW5lci5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGVja2JveEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGVja2JveC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vcG8tY2hlY2tib3gvcG8tY2hlY2tib3gubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIGBwby1jaGVja2JveC1ncm91cGAuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBQb0ZpZWxkQ29udGFpbmVyTW9kdWxlLCBQb0NoZWNrYm94TW9kdWxlXSxcclxuICBleHBvcnRzOiBbUG9DaGVja2JveEdyb3VwQ29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb0NoZWNrYm94R3JvdXBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoZWNrYm94R3JvdXBNb2R1bGUge31cclxuIl19