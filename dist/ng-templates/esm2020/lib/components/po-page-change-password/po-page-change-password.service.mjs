import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoPageChangePasswordService {
    constructor(http) {
        this.http = http;
    }
    post(url, item) {
        return this.http.post(url, item, { observe: 'response' });
    }
}
PoPageChangePasswordService.ɵfac = function PoPageChangePasswordService_Factory(t) { return new (t || PoPageChangePasswordService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageChangePasswordService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageChangePasswordService, factory: PoPageChangePasswordService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQvcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0MsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxJQUFJLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7c0dBTFUsMkJBQTJCO2lGQUEzQiwyQkFBMkIsV0FBM0IsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUNoYW5nZVBhc3N3b3JkU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBwb3N0KHVybDogc3RyaW5nLCBpdGVtOiBhbnkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIGl0ZW0sIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICB9XHJcbn1cclxuIl19