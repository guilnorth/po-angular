import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoDynamicViewService {
    constructor(http) {
        this.http = http;
    }
    onLoad(url, value) {
        return this.http.post(url, value).toPromise();
    }
}
PoDynamicViewService.ɵfac = function PoDynamicViewService_Factory(t) { return new (t || PoDynamicViewService)(i0.ɵɵinject(i1.HttpClient)); };
PoDynamicViewService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoDynamicViewService, factory: PoDynamicViewService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicViewService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZHluYW1pYy9wby1keW5hbWljLXZpZXcvcG8tZHluYW1pYy12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFLO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUM7O3dGQUxVLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNWaWV3RmllbGQgfSBmcm9tICcuLi9wby1keW5hbWljLXZpZXcvcG8tZHluYW1pYy12aWV3LWZpZWxkLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0R5bmFtaWNWaWV3U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBvbkxvYWQodXJsOiBzdHJpbmcsIHZhbHVlKTogUHJvbWlzZTx7IHZhbHVlPzogYW55OyBmaWVsZHM/OiBBcnJheTxQb0R5bmFtaWNWaWV3RmllbGQ+IH0+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHZhbHVlKS50b1Byb21pc2UoKTtcclxuICB9XHJcbn1cclxuIl19