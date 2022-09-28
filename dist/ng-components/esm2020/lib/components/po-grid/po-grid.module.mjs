import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoFieldModule } from './../../components/po-field/po-field.module';
import { PoGridCellActionComponent } from './po-grid-cell-action/po-grid-cell-action.component';
import { PoGridCellComponent } from './po-grid-cell/po-grid-cell.component';
import { PoGridComponent } from './po-grid.component';
import { PoGridHeadComponent } from './po-grid-head/po-grid-head.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-grid.
 */
export class PoGridModule {
}
PoGridModule.ɵfac = function PoGridModule_Factory(t) { return new (t || PoGridModule)(); };
PoGridModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoGridModule });
PoGridModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, PoFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGridModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PoFieldModule],
                declarations: [PoGridCellActionComponent, PoGridCellComponent, PoGridComponent, PoGridHeadComponent],
                exports: [PoGridComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoGridModule, { declarations: [PoGridCellActionComponent, PoGridCellComponent, PoGridComponent, PoGridHeadComponent], imports: [CommonModule, FormsModule, PoFieldModule], exports: [PoGridComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ3JpZC9wby1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFNUU7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyxZQUFZOzt3RUFBWixZQUFZOzhEQUFaLFlBQVk7a0VBSmIsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhO3VGQUl2QyxZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNwRyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0I7O3dGQUNZLFlBQVksbUJBSFIseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixhQUR6RixZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsYUFFeEMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9GaWVsZE1vZHVsZSB9IGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9wby1maWVsZC9wby1maWVsZC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9HcmlkQ2VsbEFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcG8tZ3JpZC1jZWxsLWFjdGlvbi9wby1ncmlkLWNlbGwtYWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvR3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL3BvLWdyaWQtY2VsbC9wby1ncmlkLWNlbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9HcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9wby1ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvR3JpZEhlYWRDb21wb25lbnQgfSBmcm9tICcuL3BvLWdyaWQtaGVhZC9wby1ncmlkLWhlYWQuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIHBvLWdyaWQuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBQb0ZpZWxkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb0dyaWRDZWxsQWN0aW9uQ29tcG9uZW50LCBQb0dyaWRDZWxsQ29tcG9uZW50LCBQb0dyaWRDb21wb25lbnQsIFBvR3JpZEhlYWRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb0dyaWRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0dyaWRNb2R1bGUge31cclxuIl19