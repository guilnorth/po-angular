import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoIconModule } from '../po-icon/po-icon.module';
import { PoTagComponent } from './po-tag.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-tag`.
 */
export class PoTagModule {
}
PoTagModule.ɵfac = function PoTagModule_Factory(t) { return new (t || PoTagModule)(); };
PoTagModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoTagModule });
PoTagModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTagModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoIconModule],
                declarations: [PoTagComponent],
                exports: [PoTagComponent],
                providers: [],
                schemas: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoTagModule, { declarations: [PoTagComponent], imports: [CommonModule, PoIconModule], exports: [PoTagComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWcvcG8tdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVwRDs7OztHQUlHO0FBUUgsTUFBTSxPQUFPLFdBQVc7O3NFQUFYLFdBQVc7NkRBQVgsV0FBVztpRUFOWixZQUFZLEVBQUUsWUFBWTt1RkFNekIsV0FBVztjQVB2QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFDckMsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxFQUFFO2FBQ1o7O3dGQUNZLFdBQVcsbUJBTFAsY0FBYyxhQURuQixZQUFZLEVBQUUsWUFBWSxhQUUxQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvSWNvbk1vZHVsZSB9IGZyb20gJy4uL3BvLWljb24vcG8taWNvbi5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9UYWdDb21wb25lbnQgfSBmcm9tICcuL3BvLXRhZy5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgYHBvLXRhZ2AuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvSWNvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9UYWdDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb1RhZ0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBzY2hlbWFzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWdNb2R1bGUge31cclxuIl19