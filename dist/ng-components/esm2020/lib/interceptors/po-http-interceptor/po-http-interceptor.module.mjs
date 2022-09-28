import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PoAccordionModule } from '../../components/po-accordion/po-accordion.module';
import { PoModalModule } from '../../components/po-modal/po-modal.module';
import { PoNotificationModule } from '../../services/po-notification/po-notification.module';
import { PoNotificationService } from './../../services/po-notification/po-notification.service';
import { PoTagModule } from '../../components/po-tag/po-tag.module';
import { PoHttpInterceptorDetailComponent } from './po-http-interceptor-detail/po-http-interceptor-detail.component';
import { PoHttpInterceptorService } from './po-http-interceptor.service';
import * as i0 from "@angular/core";
export class PoHttpInterceptorModule {
}
PoHttpInterceptorModule.ɵfac = function PoHttpInterceptorModule_Factory(t) { return new (t || PoHttpInterceptorModule)(); };
PoHttpInterceptorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoHttpInterceptorModule });
PoHttpInterceptorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        PoHttpInterceptorService,
        PoNotificationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: PoHttpInterceptorService,
            multi: true
        }
    ], imports: [CommonModule, PoAccordionModule, PoModalModule, PoNotificationModule, PoTagModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpInterceptorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoAccordionModule, PoModalModule, PoNotificationModule, PoTagModule],
                declarations: [PoHttpInterceptorDetailComponent],
                providers: [
                    PoHttpInterceptorService,
                    PoNotificationService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: PoHttpInterceptorService,
                        multi: true
                    }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoHttpInterceptorModule, { declarations: [PoHttpInterceptorDetailComponent], imports: [CommonModule, PoAccordionModule, PoModalModule, PoNotificationModule, PoTagModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1pbnRlcmNlcHRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2ludGVyY2VwdG9ycy9wby1odHRwLWludGVyY2VwdG9yL3BvLWh0dHAtaW50ZXJjZXB0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDckgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBZXpFLE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs4RUFWdkI7UUFDVCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRixZQVZTLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsV0FBVzt1RkFZaEYsdUJBQXVCO2NBYm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLFdBQVcsQ0FBQztnQkFDNUYsWUFBWSxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQ2hELFNBQVMsRUFBRTtvQkFDVCx3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7d0ZBQ1ksdUJBQXVCLG1CQVhuQixnQ0FBZ0MsYUFEckMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0FjY29yZGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG8tYWNjb3JkaW9uL3BvLWFjY29yZGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb01vZGFsTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wby1tb2RhbC9wby1tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb05vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLW5vdGlmaWNhdGlvbi9wby1ub3RpZmljYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Ob3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1ub3RpZmljYXRpb24vcG8tbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1RhZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG8tdGFnL3BvLXRhZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9IdHRwSW50ZXJjZXB0b3JEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3BvLWh0dHAtaW50ZXJjZXB0b3ItZGV0YWlsL3BvLWh0dHAtaW50ZXJjZXB0b3ItZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvSHR0cEludGVyY2VwdG9yU2VydmljZSB9IGZyb20gJy4vcG8taHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9BY2NvcmRpb25Nb2R1bGUsIFBvTW9kYWxNb2R1bGUsIFBvTm90aWZpY2F0aW9uTW9kdWxlLCBQb1RhZ01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9IdHRwSW50ZXJjZXB0b3JEZXRhaWxDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUG9IdHRwSW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gICAgUG9Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IFBvSHR0cEludGVyY2VwdG9yU2VydmljZSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0h0dHBJbnRlcmNlcHRvck1vZHVsZSB7fVxyXG4iXX0=