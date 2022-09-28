import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPopoverModule } from '../po-popover/po-popover.module';
import { PoTabButtonComponent } from './po-tab-button/po-tab-button.component';
import { PoTabComponent } from './po-tab/po-tab.component';
import { PoTabDropdownComponent } from './po-tab-dropdown/po-tab-dropdown.component';
import { PoTabsComponent } from './po-tabs.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente po-tabs
 */
export class PoTabsModule {
}
PoTabsModule.ɵfac = function PoTabsModule_Factory(t) { return new (t || PoTabsModule)(); };
PoTabsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoTabsModule });
PoTabsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoPopoverModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoPopoverModule],
                declarations: [PoTabButtonComponent, PoTabComponent, PoTabDropdownComponent, PoTabsComponent],
                exports: [PoTabComponent, PoTabsComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoTabsModule, { declarations: [PoTabButtonComponent, PoTabComponent, PoTabDropdownComponent, PoTabsComponent], imports: [CommonModule, PoPopoverModule], exports: [PoTabComponent, PoTabsComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFicy9wby10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7OztHQUdHO0FBTUgsTUFBTSxPQUFPLFlBQVk7O3dFQUFaLFlBQVk7OERBQVosWUFBWTtrRUFKYixZQUFZLEVBQUUsZUFBZTt1RkFJNUIsWUFBWTtjQUx4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztnQkFDeEMsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsQ0FBQztnQkFDN0YsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQzthQUMzQzs7d0ZBQ1ksWUFBWSxtQkFIUixvQkFBb0IsRUFBRSxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxhQURsRixZQUFZLEVBQUUsZUFBZSxhQUU3QixjQUFjLEVBQUUsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb1BvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9wby1wb3BvdmVyL3BvLXBvcG92ZXIubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvVGFiQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWItYnV0dG9uL3BvLXRhYi1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJDb21wb25lbnQgfSBmcm9tICcuL3BvLXRhYi9wby10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFiLWRyb3Bkb3duL3BvLXRhYi1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RhYnNDb21wb25lbnQgfSBmcm9tICcuL3BvLXRhYnMuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIHBvLXRhYnNcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9Qb3BvdmVyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb1RhYkJ1dHRvbkNvbXBvbmVudCwgUG9UYWJDb21wb25lbnQsIFBvVGFiRHJvcGRvd25Db21wb25lbnQsIFBvVGFic0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvVGFiQ29tcG9uZW50LCBQb1RhYnNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1RhYnNNb2R1bGUge31cclxuIl19