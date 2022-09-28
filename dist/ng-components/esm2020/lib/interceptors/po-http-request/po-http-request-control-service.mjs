import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * Serviço responsável por efetuar o controle de interação com o serviço de interceptor `PoHttpRequestInterceptorService`
 * gerenciando o seu estado.
 */
export class PoHttpRequesControltService {
    constructor() {
        this.controlHttpRequest = new Subject();
    }
    getControlHttpRequest() {
        return this.controlHttpRequest.asObservable();
    }
    send(value = 0) {
        this.controlHttpRequest.next(value);
    }
}
PoHttpRequesControltService.ɵfac = function PoHttpRequesControltService_Factory(t) { return new (t || PoHttpRequesControltService)(); };
PoHttpRequesControltService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoHttpRequesControltService, factory: PoHttpRequesControltService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpRequesControltService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1yZXF1ZXN0LWNvbnRyb2wtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvaW50ZXJjZXB0b3JzL3BvLWh0dHAtcmVxdWVzdC9wby1odHRwLXJlcXVlc3QtY29udHJvbC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFM0M7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBRHhDO1FBRUUsdUJBQWtCLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7S0FTN0Q7SUFQQyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksQ0FBQyxRQUFnQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7c0dBVFUsMkJBQTJCO2lGQUEzQiwyQkFBMkIsV0FBM0IsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogU2VydmnDp28gcmVzcG9uc8OhdmVsIHBvciBlZmV0dWFyIG8gY29udHJvbGUgZGUgaW50ZXJhw6fDo28gY29tIG8gc2VydmnDp28gZGUgaW50ZXJjZXB0b3IgYFBvSHR0cFJlcXVlc3RJbnRlcmNlcHRvclNlcnZpY2VgXHJcbiAqIGdlcmVuY2lhbmRvIG8gc2V1IGVzdGFkby5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvSHR0cFJlcXVlc0NvbnRyb2x0U2VydmljZSB7XHJcbiAgY29udHJvbEh0dHBSZXF1ZXN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcblxyXG4gIGdldENvbnRyb2xIdHRwUmVxdWVzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbEh0dHBSZXF1ZXN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2VuZCh2YWx1ZTogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5jb250cm9sSHR0cFJlcXVlc3QubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==