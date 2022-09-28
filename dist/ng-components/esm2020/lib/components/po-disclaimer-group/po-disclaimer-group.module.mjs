import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoDisclaimerModule } from '../po-disclaimer/po-disclaimer.module';
import { PoDisclaimerGroupComponent } from './po-disclaimer-group.component';
import { PoDisclaimerRemoveComponent } from './po-disclaimer-remove/po-disclaimer-remove.component';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-disclaimer-group.
 */
export class PoDisclaimerGroupModule {
}
PoDisclaimerGroupModule.ɵfac = function PoDisclaimerGroupModule_Factory(t) { return new (t || PoDisclaimerGroupModule)(); };
PoDisclaimerGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoDisclaimerGroupModule });
PoDisclaimerGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoDisclaimerModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDisclaimerGroupModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoDisclaimerModule],
                declarations: [PoDisclaimerGroupComponent, PoDisclaimerRemoveComponent],
                exports: [PoDisclaimerGroupComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoDisclaimerGroupModule, { declarations: [PoDisclaimerGroupComponent, PoDisclaimerRemoveComponent], imports: [CommonModule, PoDisclaimerModule], exports: [PoDisclaimerGroupComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlzY2xhaW1lci1ncm91cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZGlzY2xhaW1lci1ncm91cC9wby1kaXNjbGFpbWVyLWdyb3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUFFcEc7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUFKeEIsWUFBWSxFQUFFLGtCQUFrQjt1RkFJL0IsdUJBQXVCO2NBTG5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUM7Z0JBQzNDLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLDJCQUEyQixDQUFDO2dCQUN2RSxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN0Qzs7d0ZBQ1ksdUJBQXVCLG1CQUhuQiwwQkFBMEIsRUFBRSwyQkFBMkIsYUFENUQsWUFBWSxFQUFFLGtCQUFrQixhQUVoQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUG9EaXNjbGFpbWVyTW9kdWxlIH0gZnJvbSAnLi4vcG8tZGlzY2xhaW1lci9wby1kaXNjbGFpbWVyLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQb0Rpc2NsYWltZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vcG8tZGlzY2xhaW1lci1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0Rpc2NsYWltZXJSZW1vdmVDb21wb25lbnQgfSBmcm9tICcuL3BvLWRpc2NsYWltZXItcmVtb3ZlL3BvLWRpc2NsYWltZXItcmVtb3ZlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gY29tcG9uZW50ZSBwby1kaXNjbGFpbWVyLWdyb3VwLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb0Rpc2NsYWltZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvRGlzY2xhaW1lckdyb3VwQ29tcG9uZW50LCBQb0Rpc2NsYWltZXJSZW1vdmVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb0Rpc2NsYWltZXJHcm91cENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRGlzY2xhaW1lckdyb3VwTW9kdWxlIHt9XHJcbiJdfQ==