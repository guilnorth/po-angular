import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoButtonModule } from './../po-button/index';
import { PoTooltipModule } from '../../directives/po-tooltip/index';
import { PoButtonGroupComponent } from './po-button-group.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-button-group.
 */
export class PoButtonGroupModule {
}
PoButtonGroupModule.ɵfac = function PoButtonGroupModule_Factory(t) { return new (t || PoButtonGroupModule)(); };
PoButtonGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoButtonGroupModule });
PoButtonGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoButtonModule, PoTooltipModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoButtonGroupModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoButtonModule, PoTooltipModule],
                declarations: [PoButtonGroupComponent],
                exports: [PoButtonGroupComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoButtonGroupModule, { declarations: [PoButtonGroupComponent], imports: [CommonModule, PoButtonModule, PoTooltipModule], exports: [PoButtonGroupComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnV0dG9uLWdyb3VwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1idXR0b24tZ3JvdXAvcG8tYnV0dG9uLWdyb3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUVyRTs7OztHQUlHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtxRUFBbkIsbUJBQW1CO3lFQUpwQixZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWU7dUZBSTVDLG1CQUFtQjtjQUwvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7Z0JBQ3hELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7d0ZBQ1ksbUJBQW1CLG1CQUhmLHNCQUFzQixhQUQzQixZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsYUFFN0Msc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9wby1idXR0b24vaW5kZXgnO1xyXG5pbXBvcnQgeyBQb1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvLXRvb2x0aXAvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUG9CdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vcG8tYnV0dG9uLWdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gY29tcG9uZW50ZSBwby1idXR0b24tZ3JvdXAuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvQnV0dG9uTW9kdWxlLCBQb1Rvb2x0aXBNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvQnV0dG9uR3JvdXBDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb0J1dHRvbkdyb3VwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9CdXR0b25Hcm91cE1vZHVsZSB7fVxyXG4iXX0=