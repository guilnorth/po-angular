import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoTooltipModule } from '../../directives/po-tooltip/po-tooltip.module';
import { PoGaugeComponent } from './po-gauge.component';
import { PoGaugeDescriptionComponent } from './po-gauge-description/po-gauge-description.component';
import { PoGaugeLegendComponent } from './po-gauge-legend/po-gauge-legend.component';
import { PoGaugePathComponent } from './po-gauge-svg/po-gauge-path/po-gauge-path.component';
import { PoGaugeSvgComponent } from './po-gauge-svg/po-gauge-svg.component';
import { PoGaugeTitleComponent } from './po-gauge-title/po-gauge-title.component';
import { PoGaugePointerComponent } from './po-gauge-svg/po-gauge-pointer/po-gauge-pointer.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente po-gauge.
 */
export class PoGaugeModule {
}
PoGaugeModule.ɵfac = function PoGaugeModule_Factory(t) { return new (t || PoGaugeModule)(); };
PoGaugeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoGaugeModule });
PoGaugeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoTooltipModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoTooltipModule],
                declarations: [
                    PoGaugeComponent,
                    PoGaugeTitleComponent,
                    PoGaugeLegendComponent,
                    PoGaugeSvgComponent,
                    PoGaugePathComponent,
                    PoGaugeDescriptionComponent,
                    PoGaugePointerComponent
                ],
                exports: [PoGaugeComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoGaugeModule, { declarations: [PoGaugeComponent,
        PoGaugeTitleComponent,
        PoGaugeLegendComponent,
        PoGaugeSvgComponent,
        PoGaugePathComponent,
        PoGaugeDescriptionComponent,
        PoGaugePointerComponent], imports: [CommonModule, PoTooltipModule], exports: [PoGaugeComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdhdWdlL3BvLWdhdWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNERBQTRELENBQUM7O0FBRXJHOzs7R0FHRztBQWNILE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhOytEQUFiLGFBQWE7bUVBWmQsWUFBWSxFQUFFLGVBQWU7dUZBWTVCLGFBQWE7Y0FiekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsMkJBQTJCO29CQUMzQix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCOzt3RkFDWSxhQUFhLG1CQVZ0QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtRQUMzQix1QkFBdUIsYUFSZixZQUFZLEVBQUUsZUFBZSxhQVU3QixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wby10b29sdGlwL3BvLXRvb2x0aXAubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWdhdWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvR2F1Z2VEZXNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcG8tZ2F1Z2UtZGVzY3JpcHRpb24vcG8tZ2F1Z2UtZGVzY3JpcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9HYXVnZUxlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vcG8tZ2F1Z2UtbGVnZW5kL3BvLWdhdWdlLWxlZ2VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0dhdWdlUGF0aENvbXBvbmVudCB9IGZyb20gJy4vcG8tZ2F1Z2Utc3ZnL3BvLWdhdWdlLXBhdGgvcG8tZ2F1Z2UtcGF0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0dhdWdlU3ZnQ29tcG9uZW50IH0gZnJvbSAnLi9wby1nYXVnZS1zdmcvcG8tZ2F1Z2Utc3ZnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvR2F1Z2VUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZ2F1Z2UtdGl0bGUvcG8tZ2F1Z2UtdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9HYXVnZVBvaW50ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvLWdhdWdlLXN2Zy9wby1nYXVnZS1wb2ludGVyL3BvLWdhdWdlLXBvaW50ZXIuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIHBvLWdhdWdlLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb1Rvb2x0aXBNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9HYXVnZUNvbXBvbmVudCxcclxuICAgIFBvR2F1Z2VUaXRsZUNvbXBvbmVudCxcclxuICAgIFBvR2F1Z2VMZWdlbmRDb21wb25lbnQsXHJcbiAgICBQb0dhdWdlU3ZnQ29tcG9uZW50LFxyXG4gICAgUG9HYXVnZVBhdGhDb21wb25lbnQsXHJcbiAgICBQb0dhdWdlRGVzY3JpcHRpb25Db21wb25lbnQsXHJcbiAgICBQb0dhdWdlUG9pbnRlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1BvR2F1Z2VDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0dhdWdlTW9kdWxlIHt9XHJcbiJdfQ==