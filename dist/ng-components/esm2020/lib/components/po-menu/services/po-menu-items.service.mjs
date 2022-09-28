import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que implementa a comunicação entre os items do po-menu.
 */
export class PoMenuItemsService {
    constructor() {
        this.subjectParent = new Subject();
        this.subjectChild = new Subject();
    }
    // Envia informações do click do po-menu-item para o po-menu
    sendToParentMenuClicked(menu) {
        this.subjectChild.next(menu);
    }
    // Recebe do po-menu-item sua informação de click.
    receiveFromChildMenuClicked() {
        return this.subjectChild.asObservable();
    }
    // Envia para os po-menu-item a resposta do processamento de click de um po-menu-item.
    sendToChildMenuClicked(menu) {
        this.subjectParent.next(menu);
    }
    // Recebe do po-menu as informações processadas do click de um po-menu-item.
    receiveFromParentMenuClicked() {
        return this.subjectParent.asObservable();
    }
}
PoMenuItemsService.ɵfac = function PoMenuItemsService_Factory(t) { return new (t || PoMenuItemsService)(); };
PoMenuItemsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoMenuItemsService, factory: PoMenuItemsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuItemsService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1pdGVtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUvc2VydmljZXMvcG8tbWVudS1pdGVtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFM0M7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVVLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNuQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7S0FxQjNDO0lBbkJDLDREQUE0RDtJQUM1RCx1QkFBdUIsQ0FBQyxJQUFZO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0ZBQXNGO0lBQ3RGLHNCQUFzQixDQUFDLElBQVk7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSw0QkFBNEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7O29GQXRCVSxrQkFBa0I7d0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VydmnDp28gcXVlIGltcGxlbWVudGEgYSBjb211bmljYcOnw6NvIGVudHJlIG9zIGl0ZW1zIGRvIHBvLW1lbnUuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb01lbnVJdGVtc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3ViamVjdFBhcmVudCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcml2YXRlIHN1YmplY3RDaGlsZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgLy8gRW52aWEgaW5mb3JtYcOnw7VlcyBkbyBjbGljayBkbyBwby1tZW51LWl0ZW0gcGFyYSBvIHBvLW1lbnVcclxuICBzZW5kVG9QYXJlbnRNZW51Q2xpY2tlZChtZW51OiBvYmplY3QpIHtcclxuICAgIHRoaXMuc3ViamVjdENoaWxkLm5leHQobWVudSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWNlYmUgZG8gcG8tbWVudS1pdGVtIHN1YSBpbmZvcm1hw6fDo28gZGUgY2xpY2suXHJcbiAgcmVjZWl2ZUZyb21DaGlsZE1lbnVDbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdENoaWxkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gRW52aWEgcGFyYSBvcyBwby1tZW51LWl0ZW0gYSByZXNwb3N0YSBkbyBwcm9jZXNzYW1lbnRvIGRlIGNsaWNrIGRlIHVtIHBvLW1lbnUtaXRlbS5cclxuICBzZW5kVG9DaGlsZE1lbnVDbGlja2VkKG1lbnU6IG9iamVjdCkge1xyXG4gICAgdGhpcy5zdWJqZWN0UGFyZW50Lm5leHQobWVudSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWNlYmUgZG8gcG8tbWVudSBhcyBpbmZvcm1hw6fDtWVzIHByb2Nlc3NhZGFzIGRvIGNsaWNrIGRlIHVtIHBvLW1lbnUtaXRlbS5cclxuICByZWNlaXZlRnJvbVBhcmVudE1lbnVDbGlja2VkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0UGFyZW50LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=