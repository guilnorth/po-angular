import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoFieldModule } from '../po-field/po-field.module';
import { PoMenuPanelComponent } from './po-menu-panel.component';
import { PoMenuPanelItemComponent } from './po-menu-panel-item/po-menu-panel-item.component';
import { PoMenuPanelItemsService } from './services/po-menu-panel-items.service';
import { PoTooltipModule } from '../../directives/po-tooltip/index';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-menu-panel.
 */
export class PoMenuPanelModule {
}
PoMenuPanelModule.ɵfac = function PoMenuPanelModule_Factory(t) { return new (t || PoMenuPanelModule)(); };
PoMenuPanelModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoMenuPanelModule });
PoMenuPanelModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoMenuPanelItemsService], imports: [CommonModule, RouterModule, PoFieldModule, PoTooltipModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuPanelModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, PoFieldModule, PoTooltipModule],
                declarations: [PoMenuPanelComponent, PoMenuPanelItemComponent],
                exports: [PoMenuPanelComponent],
                providers: [PoMenuPanelItemsService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoMenuPanelModule, { declarations: [PoMenuPanelComponent, PoMenuPanelItemComponent], imports: [CommonModule, RouterModule, PoFieldModule, PoTooltipModule], exports: [PoMenuPanelComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbWVudS1wYW5lbC9wby1tZW51LXBhbmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFcEU7Ozs7R0FJRztBQU9ILE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7bUVBQWpCLGlCQUFpQjt3RUFGakIsQ0FBQyx1QkFBdUIsQ0FBQyxZQUgxQixZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlO3VGQUt6RCxpQkFBaUI7Y0FON0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztnQkFDckUsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsd0JBQXdCLENBQUM7Z0JBQzlELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQzs7d0ZBQ1ksaUJBQWlCLG1CQUpiLG9CQUFvQixFQUFFLHdCQUF3QixhQURuRCxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLGFBRTFELG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQb0ZpZWxkTW9kdWxlIH0gZnJvbSAnLi4vcG8tZmllbGQvcG8tZmllbGQubW9kdWxlJztcclxuaW1wb3J0IHsgUG9NZW51UGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BvLW1lbnUtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9NZW51UGFuZWxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wby1tZW51LXBhbmVsLWl0ZW0vcG8tbWVudS1wYW5lbC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTWVudVBhbmVsSXRlbXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1tZW51LXBhbmVsLWl0ZW1zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvLXRvb2x0aXAvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8tbWVudS1wYW5lbC5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBQb0ZpZWxkTW9kdWxlLCBQb1Rvb2x0aXBNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvTWVudVBhbmVsQ29tcG9uZW50LCBQb01lbnVQYW5lbEl0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb01lbnVQYW5lbENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9NZW51UGFuZWxJdGVtc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVQYW5lbE1vZHVsZSB7fVxyXG4iXX0=