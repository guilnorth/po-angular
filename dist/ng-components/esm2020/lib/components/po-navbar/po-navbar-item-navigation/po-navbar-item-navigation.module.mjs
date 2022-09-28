import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoNavbarItemNavigationComponent } from './po-navbar-item-navigation.component';
import { PoNavbarItemNavigationIconComponent } from './po-navbar-item-navigation-icon/po-navbar-item-navigation-icon.component';
import * as i0 from "@angular/core";
export class PoNavbarItemNavigationModule {
}
PoNavbarItemNavigationModule.ɵfac = function PoNavbarItemNavigationModule_Factory(t) { return new (t || PoNavbarItemNavigationModule)(); };
PoNavbarItemNavigationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoNavbarItemNavigationModule });
PoNavbarItemNavigationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarItemNavigationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                declarations: [PoNavbarItemNavigationComponent, PoNavbarItemNavigationIconComponent],
                exports: [PoNavbarItemNavigationComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoNavbarItemNavigationModule, { declarations: [PoNavbarItemNavigationComponent, PoNavbarItemNavigationIconComponent], imports: [CommonModule, RouterModule], exports: [PoNavbarItemNavigationComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24vcG8tbmF2YmFyLWl0ZW0tbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJFQUEyRSxDQUFDOztBQU9oSSxNQUFNLE9BQU8sNEJBQTRCOzt3R0FBNUIsNEJBQTRCOzhFQUE1Qiw0QkFBNEI7a0ZBSjdCLFlBQVksRUFBRSxZQUFZO3VGQUl6Qiw0QkFBNEI7Y0FMeEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBQ3JDLFlBQVksRUFBRSxDQUFDLCtCQUErQixFQUFFLG1DQUFtQyxDQUFDO2dCQUNwRixPQUFPLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUMzQzs7d0ZBQ1ksNEJBQTRCLG1CQUh4QiwrQkFBK0IsRUFBRSxtQ0FBbUMsYUFEekUsWUFBWSxFQUFFLFlBQVksYUFFMUIsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvTmF2YmFySXRlbU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9OYXZiYXJJdGVtTmF2aWdhdGlvbkljb25Db21wb25lbnQgfSBmcm9tICcuL3BvLW5hdmJhci1pdGVtLW5hdmlnYXRpb24taWNvbi9wby1uYXZiYXItaXRlbS1uYXZpZ2F0aW9uLWljb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb05hdmJhckl0ZW1OYXZpZ2F0aW9uQ29tcG9uZW50LCBQb05hdmJhckl0ZW1OYXZpZ2F0aW9uSWNvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvTmF2YmFySXRlbU5hdmlnYXRpb25Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckl0ZW1OYXZpZ2F0aW9uTW9kdWxlIHt9XHJcbiJdfQ==