import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PoTreeViewService {
    constructor() {
        this.expandedEvent = new Subject();
        this.selectedEvent = new Subject();
    }
    emitExpandedEvent(treeViewItem) {
        return this.expandedEvent.next(treeViewItem);
    }
    emitSelectedEvent(treeViewItem) {
        return this.selectedEvent.next(treeViewItem);
    }
    onExpand() {
        return this.expandedEvent.asObservable();
    }
    onSelect() {
        return this.selectedEvent.asObservable();
    }
}
PoTreeViewService.ɵfac = function PoTreeViewService_Factory(t) { return new (t || PoTreeViewService)(); };
PoTreeViewService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoTreeViewService, factory: PoTreeViewService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTreeViewService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdHJlZS12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdHJlZS12aWV3L3NlcnZpY2VzL3BvLXRyZWUtdmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVVLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztLQWlCdkQ7SUFmQyxpQkFBaUIsQ0FBQyxZQUE0QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxZQUE0QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7O2tGQWxCVSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9UcmVlVmlld0l0ZW0gfSBmcm9tICcuLi9wby10cmVlLXZpZXctaXRlbS9wby10cmVlLXZpZXctaXRlbS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9UcmVlVmlld1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZXhwYW5kZWRFdmVudCA9IG5ldyBTdWJqZWN0PFBvVHJlZVZpZXdJdGVtPigpO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRFdmVudCA9IG5ldyBTdWJqZWN0PFBvVHJlZVZpZXdJdGVtPigpO1xyXG5cclxuICBlbWl0RXhwYW5kZWRFdmVudCh0cmVlVmlld0l0ZW06IFBvVHJlZVZpZXdJdGVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEV2ZW50Lm5leHQodHJlZVZpZXdJdGVtKTtcclxuICB9XHJcblxyXG4gIGVtaXRTZWxlY3RlZEV2ZW50KHRyZWVWaWV3SXRlbTogUG9UcmVlVmlld0l0ZW0pIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRXZlbnQubmV4dCh0cmVlVmlld0l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgb25FeHBhbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEV2ZW50LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEV2ZW50LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=