import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPopupModule } from '../po-popup/po-popup.module';
import { PoDropdownComponent } from './po-dropdown.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente po-dropdown.
 */
export class PoDropdownModule {
}
PoDropdownModule.ɵfac = function PoDropdownModule_Factory(t) { return new (t || PoDropdownModule)(); };
PoDropdownModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoDropdownModule });
PoDropdownModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoPopupModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoPopupModule],
                declarations: [PoDropdownComponent],
                exports: [PoDropdownComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoDropdownModule, { declarations: [PoDropdownComponent], imports: [CommonModule, PoPopupModule], exports: [PoDropdownComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWRyb3Bkb3duL3BvLWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBQzlEOzs7R0FHRztBQU1ILE1BQU0sT0FBTyxnQkFBZ0I7O2dGQUFoQixnQkFBZ0I7a0VBQWhCLGdCQUFnQjtzRUFKakIsWUFBWSxFQUFFLGFBQWE7dUZBSTFCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9COzt3RkFDWSxnQkFBZ0IsbUJBSFosbUJBQW1CLGFBRHhCLFlBQVksRUFBRSxhQUFhLGFBRTNCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb1BvcHVwTW9kdWxlIH0gZnJvbSAnLi4vcG8tcG9wdXAvcG8tcG9wdXAubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3BvLWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIHBvLWRyb3Bkb3duLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb1BvcHVwTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb0Ryb3Bkb3duQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9Ecm9wZG93bkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRHJvcGRvd25Nb2R1bGUge31cclxuIl19