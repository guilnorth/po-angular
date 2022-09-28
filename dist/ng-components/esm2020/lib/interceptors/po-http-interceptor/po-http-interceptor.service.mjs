import { Injectable } from '@angular/core';
import { PoHttpInterceptorBaseService } from './po-http-interceptor-base.service';
import * as i0 from "@angular/core";
import * as i1 from "./../../services/po-notification/po-notification.service";
import * as i2 from "../../services/po-component-injector/po-component-injector.service";
import * as i3 from "../../services/po-language/po-language.service";
/**
 * @docsExtends PoHttpInterceptorBaseService
 *
 * @example
 * <example name='po-http-interceptor-labs' title='PO Http Interceptor Labs'>
 *  <file name='sample-po-http-interceptor-labs.component.ts'> </file>
 *  <file name='sample-po-http-interceptor-labs.component.html'> </file>
 * </example>
 */
export class PoHttpInterceptorService extends PoHttpInterceptorBaseService {
    constructor(notification, componentInjector, languageService) {
        super(componentInjector, notification, languageService);
    }
}
PoHttpInterceptorService.ɵfac = function PoHttpInterceptorService_Factory(t) { return new (t || PoHttpInterceptorService)(i0.ɵɵinject(i1.PoNotificationService), i0.ɵɵinject(i2.PoComponentInjectorService), i0.ɵɵinject(i3.PoLanguageService)); };
PoHttpInterceptorService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoHttpInterceptorService, factory: PoHttpInterceptorService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpInterceptorService, [{
        type: Injectable
    }], function () { return [{ type: i1.PoNotificationService }, { type: i2.PoComponentInjectorService }, { type: i3.PoLanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9pbnRlcmNlcHRvcnMvcG8taHR0cC1pbnRlcmNlcHRvci9wby1odHRwLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFFbEY7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsNEJBQTRCO0lBQ3hFLFlBQ0UsWUFBbUMsRUFDbkMsaUJBQTZDLEVBQzdDLGVBQWtDO1FBRWxDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0dBUFUsd0JBQXdCOzhFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tY29tcG9uZW50LWluamVjdG9yL3BvLWNvbXBvbmVudC1pbmplY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Ob3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1ub3RpZmljYXRpb24vcG8tbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9IdHRwSW50ZXJjZXB0b3JCYXNlU2VydmljZSB9IGZyb20gJy4vcG8taHR0cC1pbnRlcmNlcHRvci1iYXNlLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0h0dHBJbnRlcmNlcHRvckJhc2VTZXJ2aWNlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIDxleGFtcGxlIG5hbWU9J3BvLWh0dHAtaW50ZXJjZXB0b3ItbGFicycgdGl0bGU9J1BPIEh0dHAgSW50ZXJjZXB0b3IgTGFicyc+XHJcbiAqICA8ZmlsZSBuYW1lPSdzYW1wbGUtcG8taHR0cC1pbnRlcmNlcHRvci1sYWJzLmNvbXBvbmVudC50cyc+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9J3NhbXBsZS1wby1odHRwLWludGVyY2VwdG9yLWxhYnMuY29tcG9uZW50Lmh0bWwnPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvSHR0cEludGVyY2VwdG9yU2VydmljZSBleHRlbmRzIFBvSHR0cEludGVyY2VwdG9yQmFzZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbm90aWZpY2F0aW9uOiBQb05vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBjb21wb25lbnRJbmplY3RvcjogUG9Db21wb25lbnRJbmplY3RvclNlcnZpY2UsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnRJbmplY3Rvciwgbm90aWZpY2F0aW9uLCBsYW5ndWFnZVNlcnZpY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=