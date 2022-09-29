import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoCalendarModule } from '../../po-calendar/po-calendar.module';
import { PoFieldContainerModule } from '../po-field-container/po-field-container.module';
import { PoCleanModule } from '../po-clean/po-clean.module';
import { PoDatepickerComponent } from './po-datepicker.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-datepicker`.
 */
export class PoDatepickerModule {
}
PoDatepickerModule.ɵfac = function PoDatepickerModule_Factory(t) { return new (t || PoDatepickerModule)(); };
PoDatepickerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoDatepickerModule });
PoDatepickerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, PoFieldContainerModule, PoCleanModule, PoCalendarModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PoFieldContainerModule, PoCleanModule, PoCalendarModule],
                exports: [PoDatepickerComponent],
                declarations: [PoDatepickerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoDatepickerModule, { declarations: [PoDatepickerComponent], imports: [CommonModule, FormsModule, PoFieldContainerModule, PoCleanModule, PoCalendarModule], exports: [PoDatepickerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZGF0ZXBpY2tlci9wby1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUVsRTs7OztHQUlHO0FBTUgsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3dFQUpuQixZQUFZLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0I7dUZBSWpGLGtCQUFrQjtjQUw5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzdGLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUN0Qzs7d0ZBQ1ksa0JBQWtCLG1CQUZkLHFCQUFxQixhQUYxQixZQUFZLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsYUFDbEYscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vcG8tY2FsZW5kYXIvcG8tY2FsZW5kYXIubW9kdWxlJztcclxuaW1wb3J0IHsgUG9GaWVsZENvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4uL3BvLWZpZWxkLWNvbnRhaW5lci9wby1maWVsZC1jb250YWluZXIubW9kdWxlJztcclxuaW1wb3J0IHsgUG9DbGVhbk1vZHVsZSB9IGZyb20gJy4uL3BvLWNsZWFuL3BvLWNsZWFuLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQb0RhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BvLWRhdGVwaWNrZXIuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIGBwby1kYXRlcGlja2VyYC5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFBvRmllbGRDb250YWluZXJNb2R1bGUsIFBvQ2xlYW5Nb2R1bGUsIFBvQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtQb0RhdGVwaWNrZXJDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvRGF0ZXBpY2tlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRGF0ZXBpY2tlck1vZHVsZSB7fVxyXG4iXX0=