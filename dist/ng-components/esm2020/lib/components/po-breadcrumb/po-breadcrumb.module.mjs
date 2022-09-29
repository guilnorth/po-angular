import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoBreadcrumbComponent } from './po-breadcrumb.component';
import { PoBreadcrumbDropdownComponent } from './po-breadcrumb-dropdown/po-breadcrumb-dropdown.component';
import { PoBreadcrumbFavoriteComponent } from './po-breadcrumb-favorite/po-breadcrumb-favorite.component';
import { PoBreadcrumbItemComponent } from './po-breadcrumb-item/po-breadcrumb-item.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-breadcrumb.
 *
 */
export class PoBreadcrumbModule {
}
PoBreadcrumbModule.ɵfac = function PoBreadcrumbModule_Factory(t) { return new (t || PoBreadcrumbModule)(); };
PoBreadcrumbModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoBreadcrumbModule });
PoBreadcrumbModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                declarations: [
                    PoBreadcrumbComponent,
                    PoBreadcrumbDropdownComponent,
                    PoBreadcrumbFavoriteComponent,
                    PoBreadcrumbItemComponent
                ],
                exports: [PoBreadcrumbComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoBreadcrumbModule, { declarations: [PoBreadcrumbComponent,
        PoBreadcrumbDropdownComponent,
        PoBreadcrumbFavoriteComponent,
        PoBreadcrumbItemComponent], imports: [CommonModule, RouterModule], exports: [PoBreadcrumbComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYnJlYWRjcnVtYi9wby1icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBRTlGOzs7OztHQUtHO0FBV0gsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3dFQVRuQixZQUFZLEVBQUUsWUFBWTt1RkFTekIsa0JBQWtCO2NBVjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQiw2QkFBNkI7b0JBQzdCLDZCQUE2QjtvQkFDN0IseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNqQzs7d0ZBQ1ksa0JBQWtCLG1CQVAzQixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qix5QkFBeUIsYUFMakIsWUFBWSxFQUFFLFlBQVksYUFPMUIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFBvQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vcG8tYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0JyZWFkY3J1bWJEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vcG8tYnJlYWRjcnVtYi1kcm9wZG93bi9wby1icmVhZGNydW1iLWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQnJlYWRjcnVtYkZhdm9yaXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1icmVhZGNydW1iLWZhdm9yaXRlL3BvLWJyZWFkY3J1bWItZmF2b3JpdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9CcmVhZGNydW1iSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcG8tYnJlYWRjcnVtYi1pdGVtL3BvLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8tYnJlYWRjcnVtYi5cclxuICpcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIFBvQnJlYWRjcnVtYkRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgUG9CcmVhZGNydW1iRmF2b3JpdGVDb21wb25lbnQsXHJcbiAgICBQb0JyZWFkY3J1bWJJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbUG9CcmVhZGNydW1iQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9CcmVhZGNydW1iTW9kdWxlIHt9XHJcbiJdfQ==