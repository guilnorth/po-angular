import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageDynamicService } from './po-page-dynamic.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do serviço do po-page-dynamic-service.
 */
export class PoPageDynamicModule {
}
PoPageDynamicModule.ɵfac = function PoPageDynamicModule_Factory(t) { return new (t || PoPageDynamicModule)(); };
PoPageDynamicModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicModule });
PoPageDynamicModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageDynamicService], imports: [CommonModule, HttpClientModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [PoPageDynamicService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicModule, { imports: [CommonModule, HttpClientModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL3NlcnZpY2VzL3BvLXBhZ2UtZHluYW1pYy9wby1wYWdlLWR5bmFtaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUNqRTs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtxRUFBbkIsbUJBQW1COzBFQUZuQixDQUFDLG9CQUFvQixDQUFDLFlBRHZCLFlBQVksRUFBRSxnQkFBZ0I7dUZBRzdCLG1CQUFtQjtjQUovQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNsQzs7d0ZBQ1ksbUJBQW1CLGNBSHBCLFlBQVksRUFBRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1NlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy5zZXJ2aWNlJztcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIHNlcnZpw6dvIGRvIHBvLXBhZ2UtZHluYW1pYy1zZXJ2aWNlLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VEeW5hbWljU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNNb2R1bGUge31cclxuIl19