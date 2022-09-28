import { NgModule } from '@angular/core';
import { PoStorageService, PO_STORAGE_CONFIG_TOKEN } from './services/po-storage.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente PoStorage responsável por manipular o storage do browser.
 */
export class PoStorageModule {
    static forRoot(storageConfig) {
        return {
            ngModule: PoStorageModule,
            providers: [
                {
                    provide: PO_STORAGE_CONFIG_TOKEN,
                    useValue: storageConfig || PoStorageService.getDefaultConfig()
                },
                {
                    provide: PoStorageService,
                    useFactory: PoStorageService.providePoStorage,
                    deps: [PO_STORAGE_CONFIG_TOKEN]
                }
            ]
        };
    }
}
PoStorageModule.ɵfac = function PoStorageModule_Factory(t) { return new (t || PoStorageModule)(); };
PoStorageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoStorageModule });
PoStorageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStorageModule, [{
        type: NgModule
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yYWdlL3NyYy9saWIvcG8tc3RvcmFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRTFGOzs7O0dBSUc7QUFHSCxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQStCO1FBQzVDLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLGFBQWEsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRTtpQkFDL0Q7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsVUFBVSxFQUFFLGdCQUFnQixDQUFDLGdCQUFnQjtvQkFDN0MsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ2hDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OEVBaEJVLGVBQWU7aUVBQWYsZUFBZTs7dUZBQWYsZUFBZTtjQUQzQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvU3RvcmFnZUNvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvcG8tc3RvcmFnZS1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9TdG9yYWdlU2VydmljZSwgUE9fU1RPUkFHRV9DT05GSUdfVE9LRU4gfSBmcm9tICcuL3NlcnZpY2VzL3BvLXN0b3JhZ2Uuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE3Ds2R1bG8gZG8gY29tcG9uZW50ZSBQb1N0b3JhZ2UgcmVzcG9uc8OhdmVsIHBvciBtYW5pcHVsYXIgbyBzdG9yYWdlIGRvIGJyb3dzZXIuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKClcclxuZXhwb3J0IGNsYXNzIFBvU3RvcmFnZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZz86IFBvU3RvcmFnZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UG9TdG9yYWdlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUG9TdG9yYWdlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBQT19TVE9SQUdFX0NPTkZJR19UT0tFTixcclxuICAgICAgICAgIHVzZVZhbHVlOiBzdG9yYWdlQ29uZmlnIHx8IFBvU3RvcmFnZVNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBQb1N0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogUG9TdG9yYWdlU2VydmljZS5wcm92aWRlUG9TdG9yYWdlLFxyXG4gICAgICAgICAgZGVwczogW1BPX1NUT1JBR0VfQ09ORklHX1RPS0VOXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19