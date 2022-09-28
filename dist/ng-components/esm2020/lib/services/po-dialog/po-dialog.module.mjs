import { NgModule } from '@angular/core';
import { PoModalModule } from '../../components/po-modal/po-modal.module';
import { PoDialogComponent } from './po-dialog.component';
import { PoDialogService } from './po-dialog.service';
import * as i0 from "@angular/core";
export class PoDialogModule {
}
PoDialogModule.ɵfac = function PoDialogModule_Factory(t) { return new (t || PoDialogModule)(); };
PoDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoDialogModule });
PoDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoDialogService], imports: [PoModalModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDialogModule, [{
        type: NgModule,
        args: [{
                declarations: [PoDialogComponent],
                imports: [PoModalModule],
                exports: [PoDialogComponent],
                providers: [PoDialogService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoDialogModule, { declarations: [PoDialogComponent], imports: [PoModalModule], exports: [PoDialogComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvc2VydmljZXMvcG8tZGlhbG9nL3BvLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQVF0RCxNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYztnRUFBZCxjQUFjO3FFQUZkLENBQUMsZUFBZSxDQUFDLFlBRmxCLGFBQWE7dUZBSVosY0FBYztjQU4xQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM3Qjs7d0ZBQ1ksY0FBYyxtQkFMVixpQkFBaUIsYUFDdEIsYUFBYSxhQUNiLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb01vZGFsTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wby1tb2RhbC9wby1tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcG8tZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvRGlhbG9nU2VydmljZSB9IGZyb20gJy4vcG8tZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtQb0RpYWxvZ0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1BvTW9kYWxNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtQb0RpYWxvZ0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9EaWFsb2dTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9EaWFsb2dNb2R1bGUge31cclxuIl19