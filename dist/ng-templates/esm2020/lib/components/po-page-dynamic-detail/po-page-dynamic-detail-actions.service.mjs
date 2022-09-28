import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoPageDynamicDetailActionsService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
    }
    beforeBack(action) {
        return this.executeAction({ action });
    }
    beforeEdit(action, id, body) {
        const resource = body ?? {};
        return this.executeAction({ action, resource, id });
    }
    beforeRemove(action, id, body) {
        const resource = body ?? {};
        return this.executeAction({ action, resource, id });
    }
    executeAction({ action, resource = {}, id }) {
        if (!action) {
            return of({});
        }
        if (typeof action === 'string') {
            const url = id ? `${action}/${id}` : action;
            return this.http.post(url, resource, { headers: this.headers });
        }
        return of(action(id, resource));
    }
}
PoPageDynamicDetailActionsService.ɵfac = function PoPageDynamicDetailActionsService_Factory(t) { return new (t || PoPageDynamicDetailActionsService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageDynamicDetailActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageDynamicDetailActionsService, factory: PoPageDynamicDetailActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicDetailActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWRldGFpbC1hY3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwvcG8tcGFnZS1keW5hbWljLWRldGFpbC1hY3Rpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBZ0J0QyxNQUFNLE9BQU8saUNBQWlDO0lBSzVDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKM0IsWUFBTyxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUM5QyxrQkFBa0IsRUFBRSxNQUFNO1NBQzNCLENBQUMsQ0FBQztJQUVvQyxDQUFDO0lBRXhDLFVBQVUsQ0FBQyxNQUFpRDtRQUMxRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQ1IsTUFBZ0QsRUFDaEQsRUFBTyxFQUNQLElBQVM7UUFFVCxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsWUFBWSxDQUNWLE1BQWtELEVBQ2xELEVBQU8sRUFDUCxJQUFTO1FBRVQsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLGFBQWEsQ0FBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBMEI7UUFDNUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNwRTtRQUVELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOztrSEEzQ1UsaUNBQWlDO3VGQUFqQyxpQ0FBaUMsV0FBakMsaUNBQWlDLG1CQUZoQyxNQUFNO3VGQUVQLGlDQUFpQztjQUg3QyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWRldGFpbC1hY3Rpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNEZXRhaWxCZWZvcmVCYWNrIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwtYmVmb3JlLWJhY2suaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbEJlZm9yZVJlbW92ZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtZGV0YWlsLWJlZm9yZS1yZW1vdmUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbEJlZm9yZUVkaXQgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWRldGFpbC1iZWZvcmUtZWRpdC5pbnRlcmZhY2UnO1xyXG5cclxuaW50ZXJmYWNlIEV4ZWN1dGVBY3Rpb25QYXJhbWV0ZXIge1xyXG4gIGFjdGlvbjogc3RyaW5nIHwgRnVuY3Rpb247XHJcbiAgcmVzb3VyY2U/OiBhbnk7XHJcbiAgaWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zU2VydmljZSB7XHJcbiAgcmVhZG9ubHkgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgJ1gtUE8tU0NSRUVOLUxPQ0snOiAndHJ1ZSdcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBiZWZvcmVCYWNrKGFjdGlvbj86IFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zWydiZWZvcmVCYWNrJ10pOiBPYnNlcnZhYmxlPFBvUGFnZUR5bmFtaWNEZXRhaWxCZWZvcmVCYWNrPiB7XHJcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlQWN0aW9uKHsgYWN0aW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlRWRpdChcclxuICAgIGFjdGlvbjogUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNbJ2JlZm9yZUVkaXQnXSxcclxuICAgIGlkOiBhbnksXHJcbiAgICBib2R5OiBhbnlcclxuICApOiBPYnNlcnZhYmxlPFBvUGFnZUR5bmFtaWNEZXRhaWxCZWZvcmVFZGl0PiB7XHJcbiAgICBjb25zdCByZXNvdXJjZSA9IGJvZHkgPz8ge307XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUFjdGlvbih7IGFjdGlvbiwgcmVzb3VyY2UsIGlkIH0pO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlUmVtb3ZlKFxyXG4gICAgYWN0aW9uOiBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1snYmVmb3JlUmVtb3ZlJ10sXHJcbiAgICBpZDogYW55LFxyXG4gICAgYm9keTogYW55XHJcbiAgKTogT2JzZXJ2YWJsZTxQb1BhZ2VEeW5hbWljRGV0YWlsQmVmb3JlUmVtb3ZlPiB7XHJcbiAgICBjb25zdCByZXNvdXJjZSA9IGJvZHkgPz8ge307XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUFjdGlvbih7IGFjdGlvbiwgcmVzb3VyY2UsIGlkIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGVjdXRlQWN0aW9uPFQ+KHsgYWN0aW9uLCByZXNvdXJjZSA9IHt9LCBpZCB9OiBFeGVjdXRlQWN0aW9uUGFyYW1ldGVyKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICByZXR1cm4gb2YoPFQ+e30pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCB1cmwgPSBpZCA/IGAke2FjdGlvbn0vJHtpZH1gIDogYWN0aW9uO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHVybCwgcmVzb3VyY2UsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvZihhY3Rpb24oaWQsIHJlc291cmNlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==