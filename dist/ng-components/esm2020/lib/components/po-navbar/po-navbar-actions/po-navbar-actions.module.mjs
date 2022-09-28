import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoNavbarActionComponent } from './po-navbar-action/po-navbar-action.component';
import { PoNavbarActionPopupComponent } from './po-navbar-action-popup/po-navbar-action-popup.component';
import { PoNavbarActionsComponent } from './po-navbar-actions.component';
import { PoPopupModule } from '../../po-popup/po-popup.module';
import { PoTooltipModule } from '../../../directives/po-tooltip/po-tooltip.module';
import { PoIconModule } from './../../po-icon/po-icon.module';
import * as i0 from "@angular/core";
export class PoNavbarActionsModule {
}
PoNavbarActionsModule.ɵfac = function PoNavbarActionsModule_Factory(t) { return new (t || PoNavbarActionsModule)(); };
PoNavbarActionsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoNavbarActionsModule });
PoNavbarActionsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoPopupModule, PoTooltipModule, PoIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarActionsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoPopupModule, PoTooltipModule, PoIconModule],
                declarations: [PoNavbarActionComponent, PoNavbarActionPopupComponent, PoNavbarActionsComponent],
                exports: [PoNavbarActionsComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoNavbarActionsModule, { declarations: [PoNavbarActionComponent, PoNavbarActionPopupComponent, PoNavbarActionsComponent], imports: [CommonModule, PoPopupModule, PoTooltipModule, PoIconModule], exports: [PoNavbarActionsComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWFjdGlvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW5hdmJhci9wby1uYXZiYXItYWN0aW9ucy9wby1uYXZiYXItYWN0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBTzlELE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFKdEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWTt1RkFJekQscUJBQXFCO2NBTGpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7Z0JBQ3JFLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDRCQUE0QixFQUFFLHdCQUF3QixDQUFDO2dCQUMvRixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNwQzs7d0ZBQ1kscUJBQXFCLG1CQUhqQix1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsYUFEcEYsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxhQUUxRCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9OYXZiYXJBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3BvLW5hdmJhci1hY3Rpb24vcG8tbmF2YmFyLWFjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb05hdmJhckFjdGlvblBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9wby1uYXZiYXItYWN0aW9uLXBvcHVwL3BvLW5hdmJhci1hY3Rpb24tcG9wdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9OYXZiYXJBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wby1uYXZiYXItYWN0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BvcHVwTW9kdWxlIH0gZnJvbSAnLi4vLi4vcG8tcG9wdXAvcG8tcG9wdXAubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9wby10b29sdGlwL3BvLXRvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgUG9JY29uTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9wby1pY29uL3BvLWljb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9Qb3B1cE1vZHVsZSwgUG9Ub29sdGlwTW9kdWxlLCBQb0ljb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvTmF2YmFyQWN0aW9uQ29tcG9uZW50LCBQb05hdmJhckFjdGlvblBvcHVwQ29tcG9uZW50LCBQb05hdmJhckFjdGlvbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb05hdmJhckFjdGlvbnNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckFjdGlvbnNNb2R1bGUge31cclxuIl19