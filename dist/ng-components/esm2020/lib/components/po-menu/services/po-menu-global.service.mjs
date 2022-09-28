import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PoMenuGlobalService {
    constructor() {
        this.applicationMenu = new Subject();
        this.menus = new Subject();
        this.removedApplicationMenu = new Subject();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.receiveApplicationMenu$ = this.applicationMenu.asObservable();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.receiveMenus$ = this.menus.asObservable();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.receiveRemovedApplicationMenu$ = this.removedApplicationMenu.asObservable();
    }
    sendApplicationMenu(menu) {
        this.applicationMenu.next(menu);
    }
    sendMenus(menus) {
        this.menus.next(menus);
    }
    sendRemovedApplicationMenu(id) {
        this.removedApplicationMenu.next(id);
    }
}
PoMenuGlobalService.ɵfac = function PoMenuGlobalService_Factory(t) { return new (t || PoMenuGlobalService)(); };
PoMenuGlobalService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoMenuGlobalService, factory: PoMenuGlobalService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuGlobalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1nbG9iYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1tZW51L3NlcnZpY2VzL3BvLW1lbnUtZ2xvYmFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVEzQyxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBSVUsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUNqRCxVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDekMsMkJBQXNCLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUV2RCw4REFBOEQ7UUFDOUQsNEJBQXVCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU5RCw4REFBOEQ7UUFDOUQsa0JBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFDLDhEQUE4RDtRQUM5RCxtQ0FBOEIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FhN0U7SUFYQyxtQkFBbUIsQ0FBQyxJQUFxQjtRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQXdCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxFQUFVO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7c0ZBeEJVLG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTt1RkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9NZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vcG8tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb01lbnVJdGVtIH0gZnJvbSAnLi4vcG8tbWVudS1pdGVtLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVHbG9iYWxTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwcGxpY2F0aW9uTWVudSA9IG5ldyBTdWJqZWN0PFBvTWVudUNvbXBvbmVudD4oKTtcclxuICBwcml2YXRlIG1lbnVzID0gbmV3IFN1YmplY3Q8QXJyYXk8UG9NZW51SXRlbT4+KCk7XHJcbiAgcHJpdmF0ZSByZW1vdmVkQXBwbGljYXRpb25NZW51ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHJlY2VpdmVBcHBsaWNhdGlvbk1lbnUkID0gdGhpcy5hcHBsaWNhdGlvbk1lbnUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgcmVjZWl2ZU1lbnVzJCA9IHRoaXMubWVudXMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXHJcbiAgcmVjZWl2ZVJlbW92ZWRBcHBsaWNhdGlvbk1lbnUkID0gdGhpcy5yZW1vdmVkQXBwbGljYXRpb25NZW51LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBzZW5kQXBwbGljYXRpb25NZW51KG1lbnU6IFBvTWVudUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvbk1lbnUubmV4dChtZW51KTtcclxuICB9XHJcblxyXG4gIHNlbmRNZW51cyhtZW51czogQXJyYXk8UG9NZW51SXRlbT4pIHtcclxuICAgIHRoaXMubWVudXMubmV4dChtZW51cyk7XHJcbiAgfVxyXG5cclxuICBzZW5kUmVtb3ZlZEFwcGxpY2F0aW9uTWVudShpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlbW92ZWRBcHBsaWNhdGlvbk1lbnUubmV4dChpZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==