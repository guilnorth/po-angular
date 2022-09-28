import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoFieldContainerBottomComponent } from './po-field-container-bottom/po-field-container-bottom.component';
import { PoFieldContainerComponent } from './po-field-container.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-field-container`.
 */
export class PoFieldContainerModule {
}
PoFieldContainerModule.ɵfac = function PoFieldContainerModule_Factory(t) { return new (t || PoFieldContainerModule)(); };
PoFieldContainerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoFieldContainerModule });
PoFieldContainerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoFieldContainerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [PoFieldContainerBottomComponent, PoFieldContainerComponent],
                declarations: [PoFieldContainerBottomComponent, PoFieldContainerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoFieldContainerModule, { declarations: [PoFieldContainerBottomComponent, PoFieldContainerComponent], imports: [CommonModule], exports: [PoFieldContainerBottomComponent, PoFieldContainerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZmllbGQtY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1maWVsZC1jb250YWluZXIvcG8tZmllbGQtY29udGFpbmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFM0U7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7d0VBQXRCLHNCQUFzQjs0RUFKdkIsWUFBWTt1RkFJWCxzQkFBc0I7Y0FMbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsK0JBQStCLEVBQUUseUJBQXlCLENBQUM7Z0JBQ3JFLFlBQVksRUFBRSxDQUFDLCtCQUErQixFQUFFLHlCQUF5QixDQUFDO2FBQzNFOzt3RkFDWSxzQkFBc0IsbUJBRmxCLCtCQUErQixFQUFFLHlCQUF5QixhQUYvRCxZQUFZLGFBQ1osK0JBQStCLEVBQUUseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvRmllbGRDb250YWluZXJCb3R0b21Db21wb25lbnQgfSBmcm9tICcuL3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20vcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0ZpZWxkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1maWVsZC1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIGBwby1maWVsZC1jb250YWluZXJgLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbUG9GaWVsZENvbnRhaW5lckJvdHRvbUNvbXBvbmVudCwgUG9GaWVsZENvbnRhaW5lckNvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9GaWVsZENvbnRhaW5lckJvdHRvbUNvbXBvbmVudCwgUG9GaWVsZENvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRmllbGRDb250YWluZXJNb2R1bGUge31cclxuIl19