import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { PoEventSourcingService } from './services/po-event-sourcing/po-event-sourcing.service';
import { PoHttpClientService } from './services/po-http-client/po-http-client.service';
import { PoNetworkService } from './services/po-network/po-network.service';
import { PoSchemaDefinitionService } from './services/po-schema/po-schema-definition/po-schema-definition.service';
import { PoSchemaService } from './services/po-schema/po-schema.service';
import { PoSyncService } from './services/po-sync/po-sync.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente PoSync responsável pela sincronia de dados com backends
 */
export class PoSyncModule {
}
PoSyncModule.ɵfac = function PoSyncModule_Factory(t) { return new (t || PoSyncModule)(); };
PoSyncModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoSyncModule });
PoSyncModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        PoEventSourcingService,
        PoNetworkService,
        PoSchemaDefinitionService,
        PoSchemaService,
        PoSyncService,
        PoHttpClientService,
        Network
    ], imports: [HttpClientModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSyncModule, [{
        type: NgModule,
        args: [{
                providers: [
                    PoEventSourcingService,
                    PoNetworkService,
                    PoSchemaDefinitionService,
                    PoSchemaService,
                    PoSyncService,
                    PoHttpClientService,
                    Network
                ],
                imports: [HttpClientModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoSyncModule, { imports: [HttpClientModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3luYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zeW5jL3NyYy9saWIvcG8tc3luYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFFbkU7Ozs7R0FJRztBQWFILE1BQU0sT0FBTyxZQUFZOzt3RUFBWixZQUFZOzhEQUFaLFlBQVk7bUVBWFo7UUFDVCxzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixPQUFPO0tBQ1IsWUFDUyxnQkFBZ0I7dUZBRWYsWUFBWTtjQVp4QixRQUFRO2VBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQix5QkFBeUI7b0JBQ3pCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLE9BQU87aUJBQ1I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUI7O3dGQUNZLFlBQVksY0FGYixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uZXR3b3JrL25neCc7XHJcblxyXG5pbXBvcnQgeyBQb0V2ZW50U291cmNpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wby1ldmVudC1zb3VyY2luZy9wby1ldmVudC1zb3VyY2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9IdHRwQ2xpZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8taHR0cC1jbGllbnQvcG8taHR0cC1jbGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvTmV0d29ya1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLW5ldHdvcmsvcG8tbmV0d29yay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9TY2hlbWFEZWZpbml0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tc2NoZW1hL3BvLXNjaGVtYS1kZWZpbml0aW9uL3BvLXNjaGVtYS1kZWZpbml0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1NjaGVtYVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLXNjaGVtYS9wby1zY2hlbWEuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvU3luY1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLXN5bmMvcG8tc3luYy5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyBjb21wb25lbnRlIFBvU3luYyByZXNwb25zw6F2ZWwgcGVsYSBzaW5jcm9uaWEgZGUgZGFkb3MgY29tIGJhY2tlbmRzXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUG9FdmVudFNvdXJjaW5nU2VydmljZSxcclxuICAgIFBvTmV0d29ya1NlcnZpY2UsXHJcbiAgICBQb1NjaGVtYURlZmluaXRpb25TZXJ2aWNlLFxyXG4gICAgUG9TY2hlbWFTZXJ2aWNlLFxyXG4gICAgUG9TeW5jU2VydmljZSxcclxuICAgIFBvSHR0cENsaWVudFNlcnZpY2UsXHJcbiAgICBOZXR3b3JrXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbSHR0cENsaWVudE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvU3luY01vZHVsZSB7fVxyXG4iXX0=