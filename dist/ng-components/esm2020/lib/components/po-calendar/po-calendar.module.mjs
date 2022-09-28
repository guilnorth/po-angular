import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoCalendarComponent } from './po-calendar.component';
import { PoCalendarHeaderComponent } from './po-calendar-header/po-calendar-header.component';
import { PoCalendarWrapperComponent } from './po-calendar-wrapper/po-calendar-wrapper.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente `po-calendar`.
 */
export class PoCalendarModule {
}
PoCalendarModule.ɵfac = function PoCalendarModule_Factory(t) { return new (t || PoCalendarModule)(); };
PoCalendarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoCalendarModule });
PoCalendarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCalendarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PoCalendarComponent, PoCalendarHeaderComponent, PoCalendarWrapperComponent],
                exports: [PoCalendarComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoCalendarModule, { declarations: [PoCalendarComponent, PoCalendarHeaderComponent, PoCalendarWrapperComponent], imports: [CommonModule], exports: [PoCalendarComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNhbGVuZGFyL3BvLWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFFakc7OztHQUdHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjtrRUFBaEIsZ0JBQWdCO3NFQUpqQixZQUFZO3VGQUlYLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDMUYsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0I7O3dGQUNZLGdCQUFnQixtQkFIWixtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsYUFEL0UsWUFBWSxhQUVaLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jYWxlbmRhci1oZWFkZXIvcG8tY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2FsZW5kYXJXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jYWxlbmRhci13cmFwcGVyL3BvLWNhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIGBwby1jYWxlbmRhcmAuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvQ2FsZW5kYXJDb21wb25lbnQsIFBvQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQsIFBvQ2FsZW5kYXJXcmFwcGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9DYWxlbmRhckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2FsZW5kYXJNb2R1bGUge31cclxuIl19