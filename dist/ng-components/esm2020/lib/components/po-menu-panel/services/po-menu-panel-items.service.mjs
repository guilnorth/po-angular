import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que implementa a comunicação entre os items do po-menu-panel.
 */
export class PoMenuPanelItemsService {
    constructor() {
        this.subjectChild = new Subject();
        this.subjectParent = new Subject();
    }
    // Recebe do po-menu-panel-item sua informação de click.
    receiveFromChildMenuClicked() {
        return this.subjectChild.asObservable();
    }
    // Recebe do po-menu-panel as informações processadas do click de um po-menu-panel-item.
    receiveFromParentMenuClicked() {
        return this.subjectParent.asObservable();
    }
    // Envia informações do click do po-menu-panel-item para o po-menu
    sendToParentMenuClicked(menu) {
        this.subjectChild.next(menu);
    }
    // Envia para os po-menu-panel-item a resposta do processamento de click de um po-menu-panel-item.
    sendToChildMenuClicked(menu) {
        this.subjectParent.next(menu);
    }
}
PoMenuPanelItemsService.ɵfac = function PoMenuPanelItemsService_Factory(t) { return new (t || PoMenuPanelItemsService)(); };
PoMenuPanelItemsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoMenuPanelItemsService, factory: PoMenuPanelItemsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuPanelItemsService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1wYW5lbC1pdGVtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUtcGFuZWwvc2VydmljZXMvcG8tbWVudS1wYW5lbC1pdGVtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFM0M7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVVLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7S0FxQjVDO0lBbkJDLHdEQUF3RDtJQUN4RCwyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCx3RkFBd0Y7SUFDeEYsNEJBQTRCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLHVCQUF1QixDQUFDLElBQVk7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGtHQUFrRztJQUNsRyxzQkFBc0IsQ0FBQyxJQUFZO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OzhGQXRCVSx1QkFBdUI7NkVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VydmnDp28gcXVlIGltcGxlbWVudGEgYSBjb211bmljYcOnw6NvIGVudHJlIG9zIGl0ZW1zIGRvIHBvLW1lbnUtcGFuZWwuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVQYW5lbEl0ZW1zU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0Q2hpbGQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0UGFyZW50ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICAvLyBSZWNlYmUgZG8gcG8tbWVudS1wYW5lbC1pdGVtIHN1YSBpbmZvcm1hw6fDo28gZGUgY2xpY2suXHJcbiAgcmVjZWl2ZUZyb21DaGlsZE1lbnVDbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdENoaWxkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVjZWJlIGRvIHBvLW1lbnUtcGFuZWwgYXMgaW5mb3JtYcOnw7VlcyBwcm9jZXNzYWRhcyBkbyBjbGljayBkZSB1bSBwby1tZW51LXBhbmVsLWl0ZW0uXHJcbiAgcmVjZWl2ZUZyb21QYXJlbnRNZW51Q2xpY2tlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdFBhcmVudC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIEVudmlhIGluZm9ybWHDp8O1ZXMgZG8gY2xpY2sgZG8gcG8tbWVudS1wYW5lbC1pdGVtIHBhcmEgbyBwby1tZW51XHJcbiAgc2VuZFRvUGFyZW50TWVudUNsaWNrZWQobWVudTogb2JqZWN0KSB7XHJcbiAgICB0aGlzLnN1YmplY3RDaGlsZC5uZXh0KG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgLy8gRW52aWEgcGFyYSBvcyBwby1tZW51LXBhbmVsLWl0ZW0gYSByZXNwb3N0YSBkbyBwcm9jZXNzYW1lbnRvIGRlIGNsaWNrIGRlIHVtIHBvLW1lbnUtcGFuZWwtaXRlbS5cclxuICBzZW5kVG9DaGlsZE1lbnVDbGlja2VkKG1lbnU6IG9iamVjdCkge1xyXG4gICAgdGhpcy5zdWJqZWN0UGFyZW50Lm5leHQobWVudSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==