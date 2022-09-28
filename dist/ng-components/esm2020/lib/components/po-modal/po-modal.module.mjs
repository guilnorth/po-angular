import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule } from './../po-button/po-button.module';
import { PoModalComponent } from './po-modal.component';
import { PoModalFooterComponent } from './po-modal-footer/po-modal-footer.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente po-modal
 */
export class PoModalModule {
}
PoModalModule.ɵfac = function PoModalModule_Factory(t) { return new (t || PoModalModule)(); };
PoModalModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoModalModule });
PoModalModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoButtonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoButtonModule],
                declarations: [PoModalComponent, PoModalFooterComponent],
                exports: [PoModalComponent, PoModalFooterComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoModalModule, { declarations: [PoModalComponent, PoModalFooterComponent], imports: [CommonModule, PoButtonModule], exports: [PoModalComponent, PoModalFooterComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1vZGFsL3BvLW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBRXJGOzs7R0FHRztBQU1ILE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhOytEQUFiLGFBQWE7bUVBSmQsWUFBWSxFQUFFLGNBQWM7dUZBSTNCLGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3ZDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO2dCQUN4RCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQzthQUNwRDs7d0ZBQ1ksYUFBYSxtQkFIVCxnQkFBZ0IsRUFBRSxzQkFBc0IsYUFEN0MsWUFBWSxFQUFFLGNBQWMsYUFFNUIsZ0JBQWdCLEVBQUUsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFBvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9wby1idXR0b24vcG8tYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3BvLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTW9kYWxGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvLW1vZGFsLWZvb3Rlci9wby1tb2RhbC1mb290ZXIuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIHBvLW1vZGFsXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvQnV0dG9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb01vZGFsQ29tcG9uZW50LCBQb01vZGFsRm9vdGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9Nb2RhbENvbXBvbmVudCwgUG9Nb2RhbEZvb3RlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTW9kYWxNb2R1bGUge31cclxuIl19