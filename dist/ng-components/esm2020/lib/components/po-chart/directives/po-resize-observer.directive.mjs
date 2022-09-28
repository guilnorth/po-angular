/// <reference types="resize-observer-browser" />
/// <reference types="resize-observer-browser" />
import { Directive, EventEmitter, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PoResizeObserverDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.resize = new EventEmitter();
        this.subscription = new Subscription();
        this.chartWidthResize$ = new Subject();
    }
    ngOnDestroy() {
        if (this.isResizeObserverSupported) {
            this.observer.unobserve(this.elementRef.nativeElement);
            this.subscription.unsubscribe();
        }
    }
    ngOnInit() {
        if (this.isResizeObserverSupported) {
            this.observer = new window.ResizeObserver(() => {
                this.chartWidthResize$.next({});
            });
            this.observer.observe(this.elementRef.nativeElement);
            this.subscription.add(this.chartWidthResize$.pipe(debounceTime(20)).subscribe(_ => {
                this.resize.emit();
            }));
        }
    }
    get isResizeObserverSupported() {
        return typeof window.ResizeObserver === 'function';
    }
}
PoResizeObserverDirective.ɵfac = function PoResizeObserverDirective_Factory(t) { return new (t || PoResizeObserverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoResizeObserverDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoResizeObserverDirective, selectors: [["", "p-resize-observer", ""]], outputs: { resize: "p-resize-observer" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoResizeObserverDirective, [{
        type: Directive,
        args: [{
                selector: '[p-resize-observer]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { resize: [{
            type: Output,
            args: ['p-resize-observer']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmVzaXplLW9ic2VydmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9kaXJlY3RpdmVzL3BvLXJlc2l6ZS1vYnNlcnZlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQWpELGlEQUFpRDtBQUVqRCxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLOUMsTUFBTSxPQUFPLHlCQUF5QjtJQU9wQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTmIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFFRyxDQUFDO0lBRTlDLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxJQUFZLHlCQUF5QjtRQUNuQyxPQUFPLE9BQU8sTUFBTSxDQUFDLGNBQWMsS0FBSyxVQUFVLENBQUM7SUFDckQsQ0FBQzs7a0dBbENVLHlCQUF5Qjs0RUFBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7NkRBRThCLE1BQU07a0JBQWxDLE1BQU07bUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJyZXNpemUtb2JzZXJ2ZXItYnJvd3NlclwiIC8+XHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcC1yZXNpemUtb2JzZXJ2ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9SZXNpemVPYnNlcnZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAT3V0cHV0KCdwLXJlc2l6ZS1vYnNlcnZlcicpIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHJpdmF0ZSBvYnNlcnZlcjtcclxuICBwcml2YXRlIGNoYXJ0V2lkdGhSZXNpemUkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmlzUmVzaXplT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pc1Jlc2l6ZU9ic2VydmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgd2luZG93LlJlc2l6ZU9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNoYXJ0V2lkdGhSZXNpemUkLm5leHQoe30pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgdGhpcy5jaGFydFdpZHRoUmVzaXplJC5waXBlKGRlYm91bmNlVGltZSgyMCkpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICAgIHRoaXMucmVzaXplLmVtaXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNSZXNpemVPYnNlcnZlclN1cHBvcnRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyID09PSAnZnVuY3Rpb24nO1xyXG4gIH1cclxufVxyXG4iXX0=