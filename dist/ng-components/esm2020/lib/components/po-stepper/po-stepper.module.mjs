import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoStepComponent } from './po-step/po-step.component';
import { PoStepperCircleComponent } from './po-stepper-circle/po-stepper-circle.component';
import { PoStepperComponent } from './po-stepper.component';
import { PoStepperLabelComponent } from './po-stepper-label/po-stepper-label.component';
import { PoStepperStepComponent } from './po-stepper-step/po-stepper-step.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente po-stepper
 */
export class PoStepperModule {
}
PoStepperModule.ɵfac = function PoStepperModule_Factory(t) { return new (t || PoStepperModule)(); };
PoStepperModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoStepperModule });
PoStepperModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStepperModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    PoStepComponent,
                    PoStepperCircleComponent,
                    PoStepperComponent,
                    PoStepperLabelComponent,
                    PoStepperStepComponent
                ],
                exports: [PoStepComponent, PoStepperComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoStepperModule, { declarations: [PoStepComponent,
        PoStepperCircleComponent,
        PoStepperComponent,
        PoStepperLabelComponent,
        PoStepperStepComponent], imports: [CommonModule], exports: [PoStepComponent, PoStepperComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc3RlcHBlci9wby1zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBRXJGOzs7R0FHRztBQVlILE1BQU0sT0FBTyxlQUFlOzs4RUFBZixlQUFlO2lFQUFmLGVBQWU7cUVBVmhCLFlBQVk7dUZBVVgsZUFBZTtjQVgzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZix3QkFBd0I7b0JBQ3hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQzthQUMvQzs7d0ZBQ1ksZUFBZSxtQkFSeEIsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQixhQU5kLFlBQVksYUFRWixlQUFlLEVBQUUsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvU3RlcENvbXBvbmVudCB9IGZyb20gJy4vcG8tc3RlcC9wby1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvU3RlcHBlckNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tc3RlcHBlci1jaXJjbGUvcG8tc3RlcHBlci1jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9TdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1zdGVwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvU3RlcHBlckxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wby1zdGVwcGVyLWxhYmVsL3BvLXN0ZXBwZXItbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9TdGVwcGVyU3RlcENvbXBvbmVudCB9IGZyb20gJy4vcG8tc3RlcHBlci1zdGVwL3BvLXN0ZXBwZXItc3RlcC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8tc3RlcHBlclxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvU3RlcENvbXBvbmVudCxcclxuICAgIFBvU3RlcHBlckNpcmNsZUNvbXBvbmVudCxcclxuICAgIFBvU3RlcHBlckNvbXBvbmVudCxcclxuICAgIFBvU3RlcHBlckxhYmVsQ29tcG9uZW50LFxyXG4gICAgUG9TdGVwcGVyU3RlcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1BvU3RlcENvbXBvbmVudCwgUG9TdGVwcGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9TdGVwcGVyTW9kdWxlIHt9XHJcbiJdfQ==