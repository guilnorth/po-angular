import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PoComponentInjectorService {
    constructor(componentResolver, applicationRef, injector) {
        this.componentResolver = componentResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    // Cria um dinamicamente no ApplicationRef
    createComponentInApplication(component) {
        const componentRef = this.componentResolver.resolveComponentFactory(component).create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        return componentRef;
    }
    // Destrói o componente e remove do ApplicationRef
    destroyComponentInApplication(componentRef) {
        this.applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
}
PoComponentInjectorService.ɵfac = function PoComponentInjectorService_Factory(t) { return new (t || PoComponentInjectorService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector)); };
PoComponentInjectorService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoComponentInjectorService, factory: PoComponentInjectorService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoComponentInjectorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWNvbXBvbmVudC1pbmplY3Rvci9wby1jb21wb25lbnQtaW5qZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFvRSxNQUFNLGVBQWUsQ0FBQzs7QUFLN0csTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUNVLGlCQUEyQyxFQUMzQyxjQUE4QixFQUM5QixRQUFrQjtRQUZsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSiwwQ0FBMEM7SUFDMUMsNEJBQTRCLENBQUMsU0FBYztRQUN6QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsTUFBTSxPQUFPLEdBQVMsWUFBWSxDQUFDLFFBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCw2QkFBNkIsQ0FBQyxZQUFpQjtRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7O29HQXBCVSwwQkFBMEI7Z0ZBQTFCLDBCQUEwQixXQUExQiwwQkFBMEIsbUJBRnpCLE1BQU07dUZBRVAsMEJBQTBCO2NBSHRDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBBcHBsaWNhdGlvblJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICApIHt9XHJcblxyXG4gIC8vIENyaWEgdW0gZGluYW1pY2FtZW50ZSBubyBBcHBsaWNhdGlvblJlZlxyXG4gIGNyZWF0ZUNvbXBvbmVudEluQXBwbGljYXRpb24oY29tcG9uZW50OiBhbnkpOiBDb21wb25lbnRSZWY8YW55PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICBjb25zdCBkb21FbGVtID0gKDxhbnk+Y29tcG9uZW50UmVmLmhvc3RWaWV3KS5yb290Tm9kZXNbMF07XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIC8vIERlc3Ryw7NpIG8gY29tcG9uZW50ZSBlIHJlbW92ZSBkbyBBcHBsaWNhdGlvblJlZlxyXG4gIGRlc3Ryb3lDb21wb25lbnRJbkFwcGxpY2F0aW9uKGNvbXBvbmVudFJlZjogYW55KSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==