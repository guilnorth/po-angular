import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { isTypeof } from '../../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço padrão utilizado para filtrar os dados do componente po-lookup.
 */
export class PoLookupFilterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new HttpHeaders({
            'X-PO-No-Message': 'true'
        });
        this.multiple = false;
    }
    getFilteredItems(filteredItemsParams) {
        const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredItemsParams;
        const validatedFilterParams = this.validateParams(filterParams);
        const validatedAdvancedFilters = this.validateParams(advancedFilters);
        const params = { ...restFilteredItemsParams, ...validatedFilterParams, ...validatedAdvancedFilters };
        return this.httpClient.get(this.url, { headers: this.headers, params });
    }
    getObjectByValue(value, filterParams) {
        const validatedFilterParams = this.validateParams(filterParams);
        let newURL;
        let encodedValue;
        if (this.multiple) {
            encodedValue = encodeURIComponent(Array.isArray(value) ? value.join(',') : value);
            newURL = `${this.url}?${this.fieldValue}=${encodedValue}`;
        }
        else {
            encodedValue = encodeURIComponent(value);
            newURL = `${this.url}/${encodedValue}`;
        }
        return this.httpClient
            .get(newURL, { headers: this.headers, params: validatedFilterParams })
            .pipe(map((response) => ('items' in response ? response.items : response)));
    }
    setConfig(url, fieldValue, multiple) {
        this.url = url;
        this.fieldValue = fieldValue;
        this.multiple = multiple;
    }
    validateParams(params) {
        return isTypeof(params, 'object') && !Array.isArray(params) ? params : undefined;
    }
}
PoLookupFilterService.ɵfac = function PoLookupFilterService_Factory(t) { return new (t || PoLookupFilterService)(i0.ɵɵinject(i1.HttpClient)); };
PoLookupFilterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoLookupFilterService, factory: PoLookupFilterService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLookupFilterService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9va3VwLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWxvb2t1cC9zZXJ2aWNlcy9wby1sb29rdXAtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBS2xEOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVJqQyxZQUFPLEdBQWdCLElBQUksV0FBVyxDQUFDO1lBQzlDLGlCQUFpQixFQUFFLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBSUssYUFBUSxHQUFHLEtBQUssQ0FBQztJQUVvQixDQUFDO0lBRTlDLGdCQUFnQixDQUFDLG1CQUFnRDtRQUMvRCxNQUFNLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxHQUFHLHVCQUF1QixFQUFFLEdBQUcsbUJBQW1CLENBQUM7UUFFMUYsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV0RSxNQUFNLE1BQU0sR0FBRyxFQUFFLEdBQUcsdUJBQXVCLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSxHQUFHLHdCQUF3QixFQUFFLENBQUM7UUFFckcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLFlBQWtCO1FBQzdDLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoRSxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksWUFBWSxDQUFDO1FBRWpCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQzNEO2FBQU07WUFDTCxZQUFZLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDbkIsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2FBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLFVBQWtCLEVBQUUsUUFBaUI7UUFDMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRU8sY0FBYyxDQUFDLE1BQVc7UUFDaEMsT0FBTyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkYsQ0FBQzs7MEZBakRVLHFCQUFxQjsyRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc1R5cGVvZiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9Mb29rdXBGaWx0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWxvb2t1cC1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Mb29rdXBGaWx0ZXJlZEl0ZW1zUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1sb29rdXAtZmlsdGVyZWQtaXRlbXMtcGFyYW1zLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBTZXJ2acOnbyBwYWRyw6NvIHV0aWxpemFkbyBwYXJhIGZpbHRyYXIgb3MgZGFkb3MgZG8gY29tcG9uZW50ZSBwby1sb29rdXAuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0xvb2t1cEZpbHRlclNlcnZpY2UgaW1wbGVtZW50cyBQb0xvb2t1cEZpbHRlciB7XHJcbiAgcmVhZG9ubHkgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgJ1gtUE8tTm8tTWVzc2FnZSc6ICd0cnVlJ1xyXG4gIH0pO1xyXG5cclxuICBwcml2YXRlIHVybDogc3RyaW5nO1xyXG4gIHByaXZhdGUgZmllbGRWYWx1ZTtcclxuICBwcml2YXRlIG11bHRpcGxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0RmlsdGVyZWRJdGVtcyhmaWx0ZXJlZEl0ZW1zUGFyYW1zOiBQb0xvb2t1cEZpbHRlcmVkSXRlbXNQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgeyBmaWx0ZXJQYXJhbXMsIGFkdmFuY2VkRmlsdGVycywgLi4ucmVzdEZpbHRlcmVkSXRlbXNQYXJhbXMgfSA9IGZpbHRlcmVkSXRlbXNQYXJhbXM7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmlsdGVyUGFyYW1zID0gdGhpcy52YWxpZGF0ZVBhcmFtcyhmaWx0ZXJQYXJhbXMpO1xyXG4gICAgY29uc3QgdmFsaWRhdGVkQWR2YW5jZWRGaWx0ZXJzID0gdGhpcy52YWxpZGF0ZVBhcmFtcyhhZHZhbmNlZEZpbHRlcnMpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHsgLi4ucmVzdEZpbHRlcmVkSXRlbXNQYXJhbXMsIC4uLnZhbGlkYXRlZEZpbHRlclBhcmFtcywgLi4udmFsaWRhdGVkQWR2YW5jZWRGaWx0ZXJzIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodGhpcy51cmwsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBwYXJhbXMgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RCeVZhbHVlKHZhbHVlOiBhbnksIGZpbHRlclBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8QXJyYXk8YW55PiB8IHsgW2tleTogc3RyaW5nXTogYW55IH0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRlZEZpbHRlclBhcmFtcyA9IHRoaXMudmFsaWRhdGVQYXJhbXMoZmlsdGVyUGFyYW1zKTtcclxuXHJcbiAgICBsZXQgbmV3VVJMO1xyXG4gICAgbGV0IGVuY29kZWRWYWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsJykgOiB2YWx1ZSk7XHJcbiAgICAgIG5ld1VSTCA9IGAke3RoaXMudXJsfT8ke3RoaXMuZmllbGRWYWx1ZX09JHtlbmNvZGVkVmFsdWV9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgIG5ld1VSTCA9IGAke3RoaXMudXJsfS8ke2VuY29kZWRWYWx1ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRcclxuICAgICAgLmdldChuZXdVUkwsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBwYXJhbXM6IHZhbGlkYXRlZEZpbHRlclBhcmFtcyB9KVxyXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+ICgnaXRlbXMnIGluIHJlc3BvbnNlID8gcmVzcG9uc2UuaXRlbXMgOiByZXNwb25zZSkpKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyh1cmw6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nLCBtdWx0aXBsZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB0aGlzLmZpZWxkVmFsdWUgPSBmaWVsZFZhbHVlO1xyXG4gICAgdGhpcy5tdWx0aXBsZSA9IG11bHRpcGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVBhcmFtcyhwYXJhbXM6IGFueSkge1xyXG4gICAgcmV0dXJuIGlzVHlwZW9mKHBhcmFtcywgJ29iamVjdCcpICYmICFBcnJheS5pc0FycmF5KHBhcmFtcykgPyBwYXJhbXMgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==