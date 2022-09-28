import { debounceTime } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { isTypeof } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoTableService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-No-Message': 'true'
        });
    }
    getFilteredItems(filteredParams) {
        const params = this.validateParams(filteredParams);
        return this.http.get(this.url, { headers: this.headers, params });
    }
    setUrl(url) {
        this.url = url;
    }
    scrollListener(componentListner) {
        return fromEvent(componentListner, 'scroll').pipe(debounceTime(100));
    }
    validateParams(params) {
        return isTypeof(params, 'object') && !Array.isArray(params) ? params : undefined;
    }
}
PoTableService.ɵfac = function PoTableService_Factory(t) { return new (t || PoTableService)(i0.ɵɵinject(i1.HttpClient)); };
PoTableService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoTableService, factory: PoTableService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9zZXJ2aWNlcy9wby10YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTy9DLE1BQU0sT0FBTyxjQUFjO0lBT3pCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFOM0IsWUFBTyxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUM5QyxpQkFBaUIsRUFBRSxNQUFNO1NBQzFCLENBQUMsQ0FBQztJQUlvQyxDQUFDO0lBRXhDLGdCQUFnQixDQUFDLGNBQTJDO1FBQzFELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGNBQWMsQ0FBQyxnQkFBNkI7UUFDMUMsT0FBTyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTyxjQUFjLENBQUMsTUFBVztRQUNoQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRixDQUFDOzs0RUF6QlUsY0FBYztvRUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO3VGQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgaXNUeXBlb2YgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9UYWJsZUZpbHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tdGFibGUtZmlsdGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvVGFibGVGaWx0ZXJlZEl0ZW1zUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby10YWJsZS1maWx0ZXJlZC1pdGVtcy1wYXJhbXMuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFibGVTZXJ2aWNlIGltcGxlbWVudHMgUG9UYWJsZUZpbHRlciB7XHJcbiAgcmVhZG9ubHkgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgJ1gtUE8tTm8tTWVzc2FnZSc6ICd0cnVlJ1xyXG4gIH0pO1xyXG5cclxuICBwcml2YXRlIHVybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGdldEZpbHRlcmVkSXRlbXMoZmlsdGVyZWRQYXJhbXM/OiBQb1RhYmxlRmlsdGVyZWRJdGVtc1BhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnZhbGlkYXRlUGFyYW1zKGZpbHRlcmVkUGFyYW1zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIHBhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMaXN0ZW5lcihjb21wb25lbnRMaXN0bmVyOiBIVE1MRWxlbWVudCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gZnJvbUV2ZW50KGNvbXBvbmVudExpc3RuZXIsICdzY3JvbGwnKS5waXBlKGRlYm91bmNlVGltZSgxMDApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVQYXJhbXMocGFyYW1zOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1R5cGVvZihwYXJhbXMsICdvYmplY3QnKSAmJiAhQXJyYXkuaXNBcnJheShwYXJhbXMpID8gcGFyYW1zIDogdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iXX0=