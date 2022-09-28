import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoFieldModule, PoI18nPipe, PoModalModule } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryComponent } from './po-modal-password-recovery.component';
import { PoModalPasswordRecoveryErrorMessageComponent } from './po-modal-password-recovery-error-message/po-modal-password-recovery-error-message.component';
import { PoModalPasswordRecoveryService } from './po-modal-password-recovery.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do template do po-modal-password-recovery.
 */
export class PoModalPasswordRecoveryModule {
}
PoModalPasswordRecoveryModule.ɵfac = function PoModalPasswordRecoveryModule_Factory(t) { return new (t || PoModalPasswordRecoveryModule)(); };
PoModalPasswordRecoveryModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoModalPasswordRecoveryModule });
PoModalPasswordRecoveryModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoI18nPipe, PoModalPasswordRecoveryService], imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule],
                declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
                exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
                providers: [PoI18nPipe, PoModalPasswordRecoveryService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoModalPasswordRecoveryModule, { declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent], imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule], exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLCtGQUErRixDQUFDO0FBQzdKLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUV0Rjs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLDZCQUE2Qjs7MEdBQTdCLDZCQUE2QjsrRUFBN0IsNkJBQTZCO29GQUY3QixDQUFDLFVBQVUsRUFBRSw4QkFBOEIsQ0FBQyxZQUg3QyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhO3VGQUt0RCw2QkFBNkI7Y0FOekMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztnQkFDbEUsWUFBWSxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsNENBQTRDLENBQUM7Z0JBQzlGLE9BQU8sRUFBRSxDQUFDLGdDQUFnQyxFQUFFLDRDQUE0QyxDQUFDO2dCQUN6RixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsOEJBQThCLENBQUM7YUFDeEQ7O3dGQUNZLDZCQUE2QixtQkFKekIsZ0NBQWdDLEVBQUUsNENBQTRDLGFBRG5GLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsYUFFdkQsZ0NBQWdDLEVBQUUsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0ZpZWxkTW9kdWxlLCBQb0kxOG5QaXBlLCBQb01vZGFsTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlDb21wb25lbnQgfSBmcm9tICcuL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5RXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1lcnJvci1tZXNzYWdlL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlTZXJ2aWNlIH0gZnJvbSAnLi9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTcOzZHVsbyBkbyB0ZW1wbGF0ZSBkbyBwby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFBvRmllbGRNb2R1bGUsIFBvTW9kYWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50LCBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeUVycm9yTWVzc2FnZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50LCBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeUVycm9yTWVzc2FnZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9JMThuUGlwZSwgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlNb2R1bGUge31cclxuIl19