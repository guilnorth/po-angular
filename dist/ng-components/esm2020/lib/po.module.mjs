import { NgModule } from '@angular/core';
import { PoComponentsModule } from './components/components.module';
import { PoDirectivesModule } from './directives/directives.module';
import { PoGuardsModule } from './guards/guards.module';
import { PoInterceptorsModule } from './interceptors/interceptors.module';
import { PoPipesModule } from './pipes/pipes.module';
import { PoServicesModule } from './services/services.module';
import { PoNotificationService } from './services/po-notification/po-notification.service';
import * as i0 from "@angular/core";
export class PoModule {
}
PoModule.ɵfac = function PoModule_Factory(t) { return new (t || PoModule)(); };
PoModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoModule });
PoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoNotificationService], imports: [PoComponentsModule,
        PoDirectivesModule,
        PoGuardsModule,
        PoInterceptorsModule,
        PoPipesModule,
        PoServicesModule, PoComponentsModule,
        PoDirectivesModule,
        PoInterceptorsModule,
        PoGuardsModule,
        PoPipesModule,
        PoServicesModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    PoComponentsModule,
                    PoDirectivesModule,
                    PoGuardsModule,
                    PoInterceptorsModule,
                    PoPipesModule,
                    PoServicesModule
                ],
                exports: [
                    PoComponentsModule,
                    PoDirectivesModule,
                    PoInterceptorsModule,
                    PoGuardsModule,
                    PoPipesModule,
                    PoServicesModule
                ],
                providers: [PoNotificationService],
                bootstrap: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoModule, { imports: [PoComponentsModule,
        PoDirectivesModule,
        PoGuardsModule,
        PoInterceptorsModule,
        PoPipesModule,
        PoServicesModule], exports: [PoComponentsModule,
        PoDirectivesModule,
        PoInterceptorsModule,
        PoGuardsModule,
        PoPipesModule,
        PoServicesModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9wby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQXVCM0YsTUFBTSxPQUFPLFFBQVE7O2dFQUFSLFFBQVE7MERBQVIsUUFBUTsrREFIUixDQUFDLHFCQUFxQixDQUFDLFlBZmhDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsZ0JBQWdCLEVBR2hCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCO3VGQUtQLFFBQVE7Y0FyQnBCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsYUFBYTtvQkFDYixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsU0FBUyxFQUFFLEVBQUU7YUFDZDs7d0ZBQ1ksUUFBUSxjQWxCakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixnQkFBZ0IsYUFHaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Db21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9EaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9HdWFyZHNNb2R1bGUgfSBmcm9tICcuL2d1YXJkcy9ndWFyZHMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9JbnRlcmNlcHRvcnNNb2R1bGUgfSBmcm9tICcuL2ludGVyY2VwdG9ycy9pbnRlcmNlcHRvcnMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9QaXBlc01vZHVsZSB9IGZyb20gJy4vcGlwZXMvcGlwZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9TZXJ2aWNlc01vZHVsZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Ob3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1ub3RpZmljYXRpb24vcG8tbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFBvQ29tcG9uZW50c01vZHVsZSxcclxuICAgIFBvRGlyZWN0aXZlc01vZHVsZSxcclxuICAgIFBvR3VhcmRzTW9kdWxlLFxyXG4gICAgUG9JbnRlcmNlcHRvcnNNb2R1bGUsXHJcbiAgICBQb1BpcGVzTW9kdWxlLFxyXG4gICAgUG9TZXJ2aWNlc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUG9Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgUG9EaXJlY3RpdmVzTW9kdWxlLFxyXG4gICAgUG9JbnRlcmNlcHRvcnNNb2R1bGUsXHJcbiAgICBQb0d1YXJkc01vZHVsZSxcclxuICAgIFBvUGlwZXNNb2R1bGUsXHJcbiAgICBQb1NlcnZpY2VzTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtQb05vdGlmaWNhdGlvblNlcnZpY2VdLFxyXG4gIGJvb3RzdHJhcDogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTW9kdWxlIHt9XHJcbiJdfQ==