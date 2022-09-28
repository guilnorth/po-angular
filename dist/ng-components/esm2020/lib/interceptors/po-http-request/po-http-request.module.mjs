import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PoLoadingModule } from '../../components/po-loading/po-loading.module';
import { PoComponentInjectorService } from '../../services/po-component-injector/po-component-injector.service';
import { PoHttpRequesControltService } from './po-http-request-control-service';
import { PoHttpRequestInterceptorService } from './po-http-request-interceptor.service';
import * as i0 from "@angular/core";
export class PoHttpRequestModule {
}
PoHttpRequestModule.ɵfac = function PoHttpRequestModule_Factory(t) { return new (t || PoHttpRequestModule)(); };
PoHttpRequestModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoHttpRequestModule });
PoHttpRequestModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        PoHttpRequesControltService,
        PoHttpRequestInterceptorService,
        PoComponentInjectorService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: PoHttpRequestInterceptorService,
            multi: true
        }
    ], imports: [PoLoadingModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpRequestModule, [{
        type: NgModule,
        args: [{
                imports: [PoLoadingModule],
                providers: [
                    PoHttpRequesControltService,
                    PoHttpRequestInterceptorService,
                    PoComponentInjectorService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: PoHttpRequestInterceptorService,
                        multi: true
                    }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoHttpRequestModule, { imports: [PoLoadingModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1yZXF1ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvaW50ZXJjZXB0b3JzL3BvLWh0dHAtcmVxdWVzdC9wby1odHRwLXJlcXVlc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztBQWV4RixNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3FFQUFuQixtQkFBbUI7MEVBWG5CO1FBQ1QsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUI7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLFlBVlMsZUFBZTt1RkFZZCxtQkFBbUI7Y0FiL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDMUIsU0FBUyxFQUFFO29CQUNULDJCQUEyQjtvQkFDM0IsK0JBQStCO29CQUMvQiwwQkFBMEI7b0JBQzFCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSwrQkFBK0I7d0JBQ3pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O3dGQUNZLG1CQUFtQixjQVpwQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BvLWxvYWRpbmcvcG8tbG9hZGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUG9Db21wb25lbnRJbmplY3RvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1jb21wb25lbnQtaW5qZWN0b3IvcG8tY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0h0dHBSZXF1ZXNDb250cm9sdFNlcnZpY2UgfSBmcm9tICcuL3BvLWh0dHAtcmVxdWVzdC1jb250cm9sLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0h0dHBSZXF1ZXN0SW50ZXJjZXB0b3JTZXJ2aWNlIH0gZnJvbSAnLi9wby1odHRwLXJlcXVlc3QtaW50ZXJjZXB0b3Iuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtQb0xvYWRpbmdNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUG9IdHRwUmVxdWVzQ29udHJvbHRTZXJ2aWNlLFxyXG4gICAgUG9IdHRwUmVxdWVzdEludGVyY2VwdG9yU2VydmljZSxcclxuICAgIFBvQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IFBvSHR0cFJlcXVlc3RJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9IdHRwUmVxdWVzdE1vZHVsZSB7fVxyXG4iXX0=