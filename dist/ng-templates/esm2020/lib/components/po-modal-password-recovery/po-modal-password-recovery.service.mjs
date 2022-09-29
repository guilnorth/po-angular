import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoModalPasswordRecoveryService {
    constructor(http) {
        this.http = http;
    }
    post(urlRecovery, item, params) {
        return this.http.post(urlRecovery, item, { observe: 'response', params: params });
    }
}
PoModalPasswordRecoveryService.ɵfac = function PoModalPasswordRecoveryService_Factory(t) { return new (t || PoModalPasswordRecoveryService)(i0.ɵɵinject(i1.HttpClient)); };
PoModalPasswordRecoveryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoModalPasswordRecoveryService, factory: PoModalPasswordRecoveryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3Zlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3Zlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxJQUFJLENBQ0YsV0FBbUIsRUFDbkIsSUFBNkIsRUFDN0IsTUFBaUU7UUFFakUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOzs0R0FUVSw4QkFBOEI7b0ZBQTlCLDhCQUE4QixXQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgcG9zdChcclxuICAgIHVybFJlY292ZXJ5OiBzdHJpbmcsXHJcbiAgICBpdGVtOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeSxcclxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7IFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB9XHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsUmVjb3ZlcnksIGl0ZW0sIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJywgcGFyYW1zOiBwYXJhbXMgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==