import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que implementa a interface `PoMenuFilter`, utilizado para fazer requisições ao serviço informado pelo usuário,
 * caso for uma URL, no componente `po-menu`.
 */
export class PoMenuService {
    constructor(http) {
        this.http = http;
    }
    get url() {
        return this._url;
    }
    configProperties(url) {
        this._url = url;
    }
    getFilteredData(search, params) {
        const filterParams = {
            search,
            ...params
        };
        return this.http
            .get(this.url, { params: filterParams })
            .pipe(map((response) => response && response.items));
    }
}
PoMenuService.ɵfac = function PoMenuService_Factory(t) { return new (t || PoMenuService)(i0.ɵɵinject(i1.HttpClient)); };
PoMenuService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoMenuService, factory: PoMenuService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUvc2VydmljZXMvcG8tbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNckM7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxhQUFhO0lBT3hCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBSnhDLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBSUQsZ0JBQWdCLENBQUMsR0FBVztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWMsRUFBRSxNQUFZO1FBQzFDLE1BQU0sWUFBWSxHQUFHO1lBQ25CLE1BQU07WUFDTixHQUFHLE1BQU07U0FDVixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUE4QyxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7MEVBdEJVLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQb01lbnVJdGVtRmlsdGVyZWQgfSBmcm9tICcuLi9wby1tZW51LWl0ZW0vcG8tbWVudS1pdGVtLWZpbHRlcmVkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTWVudUZpbHRlciB9IGZyb20gJy4uL3BvLW1lbnUtZmlsdGVyL3BvLW1lbnUtZmlsdGVyLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBTZXJ2acOnbyBxdWUgaW1wbGVtZW50YSBhIGludGVyZmFjZSBgUG9NZW51RmlsdGVyYCwgdXRpbGl6YWRvIHBhcmEgZmF6ZXIgcmVxdWlzacOnw7VlcyBhbyBzZXJ2acOnbyBpbmZvcm1hZG8gcGVsbyB1c3XDoXJpbyxcclxuICogY2FzbyBmb3IgdW1hIFVSTCwgbm8gY29tcG9uZW50ZSBgcG8tbWVudWAuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVTZXJ2aWNlIGltcGxlbWVudHMgUG9NZW51RmlsdGVyIHtcclxuICBwcml2YXRlIF91cmw6IHN0cmluZztcclxuXHJcbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VybDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgY29uZmlnUHJvcGVydGllcyh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyZWREYXRhKHNlYXJjaDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPEFycmF5PFBvTWVudUl0ZW1GaWx0ZXJlZD4+IHtcclxuICAgIGNvbnN0IGZpbHRlclBhcmFtcyA9IHtcclxuICAgICAgc2VhcmNoLFxyXG4gICAgICAuLi5wYXJhbXNcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMudXJsLCB7IHBhcmFtczogZmlsdGVyUGFyYW1zIH0pXHJcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IHsgaXRlbXM6IEFycmF5PFBvTWVudUl0ZW1GaWx0ZXJlZD4gfSkgPT4gcmVzcG9uc2UgJiYgcmVzcG9uc2UuaXRlbXMpKTtcclxuICB9XHJcbn1cclxuIl19