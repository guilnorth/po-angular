import { Injectable } from '@angular/core';
import { PoI18nBaseService } from './po-i18n-base.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoI18nBaseService
 */
export class PoI18nService extends PoI18nBaseService {
}
PoI18nService.ɵfac = /*@__PURE__*/ function () { let ɵPoI18nService_BaseFactory; return function PoI18nService_Factory(t) { return (ɵPoI18nService_BaseFactory || (ɵPoI18nService_BaseFactory = i0.ɵɵgetInheritedFactory(PoI18nService)))(t || PoI18nService); }; }();
PoI18nService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoI18nService, factory: PoI18nService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoI18nService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
// Função usada para retornar instância para o módulo po-i18n.module
export function returnPoI18nService(config, http, languageService) {
    return new PoI18nService(config, http, languageService);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9zZXJ2aWNlcy9wby1pMThuL3BvLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUczRDs7R0FFRztBQUdILE1BQU0sT0FBTyxhQUFjLFNBQVEsaUJBQWlCOzt5TkFBdkMsYUFBYSxTQUFiLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBREEsTUFBTTt1RkFDbkIsYUFBYTtjQUR6QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztBQUdsQyxvRUFBb0U7QUFDcEUsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE1BQW9CLEVBQUUsSUFBZ0IsRUFBRSxlQUFrQztJQUM1RyxPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvSTE4bkJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9wby1pMThuLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvSTE4bkNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1pMThuLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0kxOG5CYXNlU2VydmljZVxyXG4gKi9cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBQb0kxOG5TZXJ2aWNlIGV4dGVuZHMgUG9JMThuQmFzZVNlcnZpY2Uge31cclxuXHJcbi8vIEZ1bsOnw6NvIHVzYWRhIHBhcmEgcmV0b3JuYXIgaW5zdMOibmNpYSBwYXJhIG8gbcOzZHVsbyBwby1pMThuLm1vZHVsZVxyXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuUG9JMThuU2VydmljZShjb25maWc6IFBvSTE4bkNvbmZpZywgaHR0cDogSHR0cENsaWVudCwgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gIHJldHVybiBuZXcgUG9JMThuU2VydmljZShjb25maWcsIGh0dHAsIGxhbmd1YWdlU2VydmljZSk7XHJcbn1cclxuIl19