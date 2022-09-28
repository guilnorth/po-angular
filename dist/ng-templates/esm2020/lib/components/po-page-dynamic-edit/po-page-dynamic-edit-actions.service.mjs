import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoPageDynamicEditActionsService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
    }
    beforeCancel(action) {
        return this.executeAction({ action });
    }
    beforeSave(action, id, body) {
        const resource = body ?? {};
        return this.executeAction({ action, resource, id });
    }
    beforeSaveNew(action, id, body) {
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
        return of(action(resource, id));
    }
}
PoPageDynamicEditActionsService.ɵfac = function PoPageDynamicEditActionsService_Factory(t) { return new (t || PoPageDynamicEditActionsService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageDynamicEditActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageDynamicEditActionsService, factory: PoPageDynamicEditActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicEditActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWVkaXQtYWN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWR5bmFtaWMtZWRpdC9wby1wYWdlLWR5bmFtaWMtZWRpdC1hY3Rpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7O0FBZ0J0QyxNQUFNLE9BQU8sK0JBQStCO0lBSzFDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKM0IsWUFBTyxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUM5QyxrQkFBa0IsRUFBRSxNQUFNO1NBQzNCLENBQUMsQ0FBQztJQUVvQyxDQUFDO0lBRXhDLFlBQVksQ0FBQyxNQUFnRDtRQUMzRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQ1IsTUFBOEMsRUFDOUMsRUFBVSxFQUNWLElBQVM7UUFFVCxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsYUFBYSxDQUNYLE1BQWlELEVBQ2pELEVBQVUsRUFDVixJQUFTO1FBRVQsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLGFBQWEsQ0FBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBMEI7UUFDNUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNwRTtRQUVELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs4R0F6Q1UsK0JBQStCO3FGQUEvQiwrQkFBK0IsV0FBL0IsK0JBQStCLG1CQUY5QixNQUFNO3VGQUVQLCtCQUErQjtjQUgzQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0VkaXRBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1lZGl0LWFjdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0VkaXRCZWZvcmVDYW5jZWwgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWVkaXQtYmVmb3JlLWNhbmNlbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRWRpdEJlZm9yZVNhdmUgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWVkaXQtYmVmb3JlLXNhdmUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0VkaXRCZWZvcmVTYXZlTmV3IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1lZGl0LWJlZm9yZS1zYXZlLW5ldy5pbnRlcmZhY2UnO1xyXG5cclxuaW50ZXJmYWNlIEV4ZWN1dGVBY3Rpb25QYXJhbWV0ZXIge1xyXG4gIGFjdGlvbjogc3RyaW5nIHwgRnVuY3Rpb247XHJcbiAgaWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcmVzb3VyY2U/OiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1NlcnZpY2Uge1xyXG4gIHJlYWRvbmx5IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICdYLVBPLVNDUkVFTi1MT0NLJzogJ3RydWUnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgYmVmb3JlQ2FuY2VsKGFjdGlvbjogUG9QYWdlRHluYW1pY0VkaXRBY3Rpb25zWydiZWZvcmVDYW5jZWwnXSk6IE9ic2VydmFibGU8UG9QYWdlRHluYW1pY0VkaXRCZWZvcmVDYW5jZWw+IHtcclxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVBY3Rpb24oeyBhY3Rpb24gfSk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVTYXZlKFxyXG4gICAgYWN0aW9uOiBQb1BhZ2VEeW5hbWljRWRpdEFjdGlvbnNbJ2JlZm9yZVNhdmUnXSxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnlcclxuICApOiBPYnNlcnZhYmxlPFBvUGFnZUR5bmFtaWNFZGl0QmVmb3JlU2F2ZT4ge1xyXG4gICAgY29uc3QgcmVzb3VyY2UgPSBib2R5ID8/IHt9O1xyXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUFjdGlvbih7IGFjdGlvbiwgcmVzb3VyY2UsIGlkIH0pO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlU2F2ZU5ldyhcclxuICAgIGFjdGlvbjogUG9QYWdlRHluYW1pY0VkaXRBY3Rpb25zWydiZWZvcmVTYXZlTmV3J10sXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55XHJcbiAgKTogT2JzZXJ2YWJsZTxQb1BhZ2VEeW5hbWljRWRpdEJlZm9yZVNhdmVOZXc+IHtcclxuICAgIGNvbnN0IHJlc291cmNlID0gYm9keSA/PyB7fTtcclxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVBY3Rpb24oeyBhY3Rpb24sIHJlc291cmNlLCBpZCB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZUFjdGlvbjxUPih7IGFjdGlvbiwgcmVzb3VyY2UgPSB7fSwgaWQgfTogRXhlY3V0ZUFjdGlvblBhcmFtZXRlcik6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIG9mKDxUPnt9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgdXJsID0gaWQgPyBgJHthY3Rpb259LyR7aWR9YCA6IGFjdGlvbjtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih1cmwsIHJlc291cmNlLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2YoYWN0aW9uKHJlc291cmNlLCBpZCkpO1xyXG4gIH1cclxufVxyXG4iXX0=