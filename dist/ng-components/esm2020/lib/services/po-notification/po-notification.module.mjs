import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule } from '../../components/po-button/po-button.module';
import { PoIconModule } from '../../components/po-icon/po-icon.module';
import { PoToasterComponent } from './po-toaster/po-toaster.component';
import * as i0 from "@angular/core";
export class PoNotificationModule {
}
PoNotificationModule.ɵfac = function PoNotificationModule_Factory(t) { return new (t || PoNotificationModule)(); };
PoNotificationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoNotificationModule });
PoNotificationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoButtonModule, PoIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNotificationModule, [{
        type: NgModule,
        args: [{
                declarations: [PoToasterComponent],
                imports: [CommonModule, PoButtonModule, PoIconModule],
                exports: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoNotificationModule, { declarations: [PoToasterComponent], imports: [CommonModule, PoButtonModule, PoIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvc2VydmljZXMvcG8tbm90aWZpY2F0aW9uL3BvLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjtzRUFBcEIsb0JBQW9COzBFQUxyQixZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVk7dUZBS3pDLG9CQUFvQjtjQVBoQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO2dCQUNyRCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsRUFBRTthQUNkOzt3RkFDWSxvQkFBb0IsbUJBTmhCLGtCQUFrQixhQUN2QixZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUG9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BvLWJ1dHRvbi9wby1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9JY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wby1pY29uL3BvLWljb24ubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvVG9hc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tdG9hc3Rlci9wby10b2FzdGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1BvVG9hc3RlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9CdXR0b25Nb2R1bGUsIFBvSWNvbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW10sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05vdGlmaWNhdGlvbk1vZHVsZSB7fVxyXG4iXX0=