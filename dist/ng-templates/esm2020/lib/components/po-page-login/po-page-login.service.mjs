import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoPageLoginAuthenticationType } from './enums/po-page-login-authentication-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoPageLoginService {
    constructor(http) {
        this.http = http;
    }
    onLogin(url, type, loginForm) {
        if (type === PoPageLoginAuthenticationType.Bearer) {
            loginForm.password = btoa(loginForm.password);
            return this.http.post(url, loginForm);
        }
        else {
            const user = `(${loginForm.login}:${loginForm.password})`;
            const headers = new HttpHeaders({
                'Authorization': `${type} ` + btoa(user)
            });
            delete loginForm.login;
            delete loginForm.password;
            return this.http.post(url, loginForm, { headers });
        }
    }
}
PoPageLoginService.ɵfac = function PoPageLoginService_Factory(t) { return new (t || PoPageLoginService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageLoginService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageLoginService, factory: PoPageLoginService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWxvZ2luL3BvLXBhZ2UtbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7O0FBRy9GLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFtQyxFQUFFLFNBQXNCO1FBQzlFLElBQUksSUFBSSxLQUFLLDZCQUE2QixDQUFDLE1BQU0sRUFBRTtZQUNqRCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUM7WUFDMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7Z0JBQzlCLGVBQWUsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDekMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7b0ZBaEJVLGtCQUFrQjt3RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9QYWdlTG9naW4gfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1sb2dpbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VMb2dpbkF1dGhlbnRpY2F0aW9uVHlwZSB9IGZyb20gJy4vZW51bXMvcG8tcGFnZS1sb2dpbi1hdXRoZW50aWNhdGlvbi10eXBlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlTG9naW5TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIG9uTG9naW4odXJsOiBzdHJpbmcsIHR5cGU6IFBvUGFnZUxvZ2luQXV0aGVudGljYXRpb25UeXBlLCBsb2dpbkZvcm06IFBvUGFnZUxvZ2luKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcclxuICAgIGlmICh0eXBlID09PSBQb1BhZ2VMb2dpbkF1dGhlbnRpY2F0aW9uVHlwZS5CZWFyZXIpIHtcclxuICAgICAgbG9naW5Gb3JtLnBhc3N3b3JkID0gYnRvYShsb2dpbkZvcm0ucGFzc3dvcmQpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBsb2dpbkZvcm0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdXNlciA9IGAoJHtsb2dpbkZvcm0ubG9naW59OiR7bG9naW5Gb3JtLnBhc3N3b3JkfSlgO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3R5cGV9IGAgKyBidG9hKHVzZXIpXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWxldGUgbG9naW5Gb3JtLmxvZ2luO1xyXG4gICAgICBkZWxldGUgbG9naW5Gb3JtLnBhc3N3b3JkO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBsb2dpbkZvcm0sIHsgaGVhZGVycyB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19