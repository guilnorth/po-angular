import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço para poder notificar o componente `po-accordion` quando um `po-accordion-item` for
 * expandido/colapsado.
 */
export class PoAccordionService {
    constructor() {
        this.subjectChild = new Subject();
    }
    // Recebe o accordionItem
    receiveFromChildAccordionClicked() {
        return this.subjectChild.asObservable();
    }
    // Envia accordionItem colapsado/expadido do accordion
    sendToParentAccordionItemClicked(accordionItem) {
        this.subjectChild.next(accordionItem);
    }
}
PoAccordionService.ɵfac = function PoAccordionService_Factory(t) { return new (t || PoAccordionService)(); };
PoAccordionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoAccordionService, factory: PoAccordionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAccordionService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYWNjb3JkaW9uL3NlcnZpY2VzL3BvLWFjY29yZGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJL0I7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFVSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUE0QixDQUFDO0tBV2hFO0lBVEMseUJBQXlCO0lBQ3pCLGdDQUFnQztRQUM5QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxnQ0FBZ0MsQ0FBQyxhQUF1QztRQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDOztvRkFYVSxrQkFBa0I7d0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUG9BY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vcG8tYWNjb3JkaW9uLWl0ZW0vcG8tYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFNlcnZpw6dvIHBhcmEgcG9kZXIgbm90aWZpY2FyIG8gY29tcG9uZW50ZSBgcG8tYWNjb3JkaW9uYCBxdWFuZG8gdW0gYHBvLWFjY29yZGlvbi1pdGVtYCBmb3JcclxuICogZXhwYW5kaWRvL2NvbGFwc2Fkby5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvQWNjb3JkaW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0Q2hpbGQgPSBuZXcgU3ViamVjdDxQb0FjY29yZGlvbkl0ZW1Db21wb25lbnQ+KCk7XHJcblxyXG4gIC8vIFJlY2ViZSBvIGFjY29yZGlvbkl0ZW1cclxuICByZWNlaXZlRnJvbUNoaWxkQWNjb3JkaW9uQ2xpY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3RDaGlsZC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIEVudmlhIGFjY29yZGlvbkl0ZW0gY29sYXBzYWRvL2V4cGFkaWRvIGRvIGFjY29yZGlvblxyXG4gIHNlbmRUb1BhcmVudEFjY29yZGlvbkl0ZW1DbGlja2VkKGFjY29yZGlvbkl0ZW06IFBvQWNjb3JkaW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5zdWJqZWN0Q2hpbGQubmV4dChhY2NvcmRpb25JdGVtKTtcclxuICB9XHJcbn1cclxuIl19