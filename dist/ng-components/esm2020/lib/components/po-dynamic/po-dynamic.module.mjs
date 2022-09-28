import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PoDividerModule } from '../po-divider/po-divider.module';
import { PoFieldModule } from '../po-field/po-field.module';
import { PoInfoModule } from '../po-info/po-info.module';
import { PoTagModule } from '../po-tag/po-tag.module';
import { PoTimeModule } from '../../pipes/po-time/po-time.module';
import { PoTimePipe } from '../../pipes/po-time/po-time.pipe';
import { PoDynamicFormComponent } from './po-dynamic-form/po-dynamic-form.component';
import { PoDynamicFormFieldsComponent } from './po-dynamic-form/po-dynamic-form-fields/po-dynamic-form-fields.component';
import { PoDynamicFormLoadService } from './po-dynamic-form/po-dynamic-form-load/po-dynamic-form-load.service';
import { PoDynamicFormValidationService } from './po-dynamic-form/po-dynamic-form-validation/po-dynamic-form-validation.service';
import { PoDynamicViewComponent } from './po-dynamic-view/po-dynamic-view.component';
import { PoDynamicViewService } from './po-dynamic-view/po-dynamic-view.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class PoDynamicModule {
}
PoDynamicModule.ɵfac = function PoDynamicModule_Factory(t) { return new (t || PoDynamicModule)(); };
PoDynamicModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoDynamicModule });
PoDynamicModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        CurrencyPipe,
        DatePipe,
        DecimalPipe,
        PoTimePipe,
        TitleCasePipe,
        PoDynamicFormLoadService,
        PoDynamicFormValidationService,
        PoDynamicViewService
    ], imports: [CommonModule, FormsModule, PoDividerModule, PoInfoModule, PoFieldModule, PoTagModule, PoTimeModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PoDividerModule, PoInfoModule, PoFieldModule, PoTagModule, PoTimeModule],
                declarations: [PoDynamicFormComponent, PoDynamicFormFieldsComponent, PoDynamicViewComponent],
                exports: [PoDynamicFormComponent, PoDynamicViewComponent],
                providers: [
                    CurrencyPipe,
                    DatePipe,
                    DecimalPipe,
                    PoTimePipe,
                    TitleCasePipe,
                    PoDynamicFormLoadService,
                    PoDynamicFormValidationService,
                    PoDynamicViewService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoDynamicModule, { declarations: [PoDynamicFormComponent, PoDynamicFormFieldsComponent, PoDynamicViewComponent], imports: [CommonModule, FormsModule, PoDividerModule, PoInfoModule, PoFieldModule, PoTagModule, PoTimeModule], exports: [PoDynamicFormComponent, PoDynamicViewComponent] }); })();
i0.ɵɵsetComponentScope(PoDynamicFormComponent, [i1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, PoDynamicFormFieldsComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZHluYW1pYy9wby1keW5hbWljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBaUJqRixNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTtpRUFBZixlQUFlO3NFQVhmO1FBQ1QsWUFBWTtRQUNaLFFBQVE7UUFDUixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLG9CQUFvQjtLQUNyQixZQVpTLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVk7dUZBY2pHLGVBQWU7Y0FmM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztnQkFDN0csWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQzVGLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDO2dCQUN6RCxTQUFTLEVBQUU7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixhQUFhO29CQUNiLHdCQUF3QjtvQkFDeEIsOEJBQThCO29CQUM5QixvQkFBb0I7aUJBQ3JCO2FBQ0Y7O3dGQUNZLGVBQWUsbUJBYlgsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsc0JBQXNCLGFBRGpGLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksYUFFbEcsc0JBQXNCLEVBQUUsc0JBQXNCO3VCQUR6QyxzQkFBc0Isa0VBQUUsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBDdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBEZWNpbWFsUGlwZSwgVGl0bGVDYXNlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9EaXZpZGVyTW9kdWxlIH0gZnJvbSAnLi4vcG8tZGl2aWRlci9wby1kaXZpZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvRmllbGRNb2R1bGUgfSBmcm9tICcuLi9wby1maWVsZC9wby1maWVsZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb0luZm9Nb2R1bGUgfSBmcm9tICcuLi9wby1pbmZvL3BvLWluZm8ubW9kdWxlJztcclxuaW1wb3J0IHsgUG9UYWdNb2R1bGUgfSBmcm9tICcuLi9wby10YWcvcG8tdGFnLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvVGltZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BvLXRpbWUvcG8tdGltZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb1RpbWVQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcG8tdGltZS9wby10aW1lLnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgUG9EeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZHluYW1pYy1mb3JtL3BvLWR5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9wby1keW5hbWljLWZvcm0vcG8tZHluYW1pYy1mb3JtLWZpZWxkcy9wby1keW5hbWljLWZvcm0tZmllbGRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1Mb2FkU2VydmljZSB9IGZyb20gJy4vcG8tZHluYW1pYy1mb3JtL3BvLWR5bmFtaWMtZm9ybS1sb2FkL3BvLWR5bmFtaWMtZm9ybS1sb2FkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BvLWR5bmFtaWMtZm9ybS9wby1keW5hbWljLWZvcm0tdmFsaWRhdGlvbi9wby1keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9EeW5hbWljVmlld0NvbXBvbmVudCB9IGZyb20gJy4vcG8tZHluYW1pYy12aWV3L3BvLWR5bmFtaWMtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0R5bmFtaWNWaWV3U2VydmljZSB9IGZyb20gJy4vcG8tZHluYW1pYy12aWV3L3BvLWR5bmFtaWMtdmlldy5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFBvRGl2aWRlck1vZHVsZSwgUG9JbmZvTW9kdWxlLCBQb0ZpZWxkTW9kdWxlLCBQb1RhZ01vZHVsZSwgUG9UaW1lTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb0R5bmFtaWNGb3JtQ29tcG9uZW50LCBQb0R5bmFtaWNGb3JtRmllbGRzQ29tcG9uZW50LCBQb0R5bmFtaWNWaWV3Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9EeW5hbWljRm9ybUNvbXBvbmVudCwgUG9EeW5hbWljVmlld0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgUG9UaW1lUGlwZSxcclxuICAgIFRpdGxlQ2FzZVBpcGUsXHJcbiAgICBQb0R5bmFtaWNGb3JtTG9hZFNlcnZpY2UsXHJcbiAgICBQb0R5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UsXHJcbiAgICBQb0R5bmFtaWNWaWV3U2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvRHluYW1pY01vZHVsZSB7fVxyXG4iXX0=