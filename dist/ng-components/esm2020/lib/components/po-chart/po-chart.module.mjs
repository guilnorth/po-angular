import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoTooltipModule } from '../../directives/po-tooltip/po-tooltip.module';
import { PoChartAreaComponent } from './po-chart-container/po-chart-line/po-chart-area/po-chart-area.component';
import { PoChartAxisComponent } from './po-chart-container/po-chart-axis/po-chart-axis.component';
import { PoChartAxisPathComponent } from './po-chart-container/po-chart-axis/po-chart-axis-path/po-chart-axis-path.component';
import { PoChartAxisLabelComponent } from './po-chart-container/po-chart-axis/po-chart-axis-label/po-chart-axis-label.component';
import { PoChartBarComponent } from './po-chart-container/po-chart-bar/po-chart-bar.component';
import { PoChartColumnComponent } from './po-chart-container/po-chart-bar/po-chart-column/po-chart-column.component';
import { PoChartComponent } from './po-chart.component';
import { PoChartContainerComponent } from './po-chart-container/po-chart-container.component';
import { PoChartLegendComponent } from './po-chart-legend/po-chart-legend.component';
import { PoChartLineComponent } from './po-chart-container/po-chart-line/po-chart-line.component';
import { PoChartBarPathComponent } from './po-chart-container/po-chart-bar/po-chart-bar-path/po-chart-bar-path.component';
import { PoChartPathComponent } from './po-chart-container/po-chart-line/po-chart-path/po-chart-path.component';
import { PoChartSeriesPointComponent } from './po-chart-container/po-chart-line/po-chart-series-point/po-chart-series-point.component';
import { PoChartPieComponent } from './po-chart-container/po-chart-circular/po-chart-pie/po-chart-pie.component';
import { PoChartDonutComponent } from './po-chart-container/po-chart-circular/po-chart-donut/po-chart-donut.component';
import { PoChartCircularLabelComponent } from './po-chart-container/po-chart-circular/po-chart-circular-label/po-chart-circular-label.component';
import { PoChartCircularPathComponent } from './po-chart-container/po-chart-circular/po-chart-circular-path/po-chart-circular-path.component';
import { PoChartTooltipDirective } from './po-chart-container/po-chart-circular/po-chart-circular-path/po-chart-tooltip.directive';
import { PoResizeObserverDirective } from './directives/po-resize-observer.directive';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente `po-chart`.
 */
export class PoChartModule {
}
PoChartModule.ɵfac = function PoChartModule_Factory(t) { return new (t || PoChartModule)(); };
PoChartModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoChartModule });
PoChartModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, PoTooltipModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PoTooltipModule],
                declarations: [
                    PoChartAreaComponent,
                    PoChartAxisComponent,
                    PoChartAxisPathComponent,
                    PoChartAxisLabelComponent,
                    PoChartComponent,
                    PoChartContainerComponent,
                    PoChartLegendComponent,
                    PoChartLineComponent,
                    PoChartPathComponent,
                    PoChartPieComponent,
                    PoChartDonutComponent,
                    PoChartSeriesPointComponent,
                    PoChartBarComponent,
                    PoChartColumnComponent,
                    PoChartBarPathComponent,
                    PoChartCircularPathComponent,
                    PoChartCircularLabelComponent,
                    PoChartTooltipDirective,
                    PoResizeObserverDirective
                ],
                exports: [PoChartComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoChartModule, { declarations: [PoChartAreaComponent,
        PoChartAxisComponent,
        PoChartAxisPathComponent,
        PoChartAxisLabelComponent,
        PoChartComponent,
        PoChartContainerComponent,
        PoChartLegendComponent,
        PoChartLineComponent,
        PoChartPathComponent,
        PoChartPieComponent,
        PoChartDonutComponent,
        PoChartSeriesPointComponent,
        PoChartBarComponent,
        PoChartColumnComponent,
        PoChartBarPathComponent,
        PoChartCircularPathComponent,
        PoChartCircularLabelComponent,
        PoChartTooltipDirective,
        PoResizeObserverDirective], imports: [CommonModule, PoTooltipModule], exports: [PoChartComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDakksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDckgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDMUgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDaEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDdkksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDakgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDdkgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0dBQWtHLENBQUM7QUFDakosT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0dBQWdHLENBQUM7QUFDOUksT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDbkksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBRXRGOzs7O0dBSUc7QUEwQkgsTUFBTSxPQUFPLGFBQWE7OzBFQUFiLGFBQWE7K0RBQWIsYUFBYTttRUF4QmQsWUFBWSxFQUFFLGVBQWU7dUZBd0I1QixhQUFhO2NBekJ6QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztnQkFDeEMsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLHlCQUF5QjtvQkFDekIsZ0JBQWdCO29CQUNoQix5QkFBeUI7b0JBQ3pCLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQiwyQkFBMkI7b0JBQzNCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLDRCQUE0QjtvQkFDNUIsNkJBQTZCO29CQUM3Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUI7O3dGQUNZLGFBQWEsbUJBdEJ0QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFwQmpCLFlBQVksRUFBRSxlQUFlLGFBc0I3QixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wby10b29sdGlwL3BvLXRvb2x0aXAubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1hcmVhL3BvLWNoYXJ0LWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1heGlzL3BvLWNoYXJ0LWF4aXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydEF4aXNQYXRoQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYXhpcy9wby1jaGFydC1heGlzLXBhdGgvcG8tY2hhcnQtYXhpcy1wYXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRBeGlzTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1heGlzL3BvLWNoYXJ0LWF4aXMtbGFiZWwvcG8tY2hhcnQtYXhpcy1sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0QmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYmFyL3BvLWNoYXJ0LWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYmFyL3BvLWNoYXJ0LWNvbHVtbi9wby1jaGFydC1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydENvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0TGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1sZWdlbmQvcG8tY2hhcnQtbGVnZW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1saW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRCYXJQYXRoQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtYmFyL3BvLWNoYXJ0LWJhci1wYXRoL3BvLWNoYXJ0LWJhci1wYXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRQYXRoQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1wYXRoL3BvLWNoYXJ0LXBhdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydFNlcmllc1BvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1zZXJpZXMtcG9pbnQvcG8tY2hhcnQtc2VyaWVzLXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRQaWVDb21wb25lbnQgfSBmcm9tICcuL3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1jaXJjdWxhci9wby1jaGFydC1waWUvcG8tY2hhcnQtcGllLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnREb251dENvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWRvbnV0L3BvLWNoYXJ0LWRvbnV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnRDaXJjdWxhckxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtY2lyY3VsYXIvcG8tY2hhcnQtY2lyY3VsYXItbGFiZWwvcG8tY2hhcnQtY2lyY3VsYXItbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9DaGFydENpcmN1bGFyUGF0aENvbXBvbmVudCB9IGZyb20gJy4vcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLXBhdGgvcG8tY2hhcnQtY2lyY3VsYXItcGF0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLXBhdGgvcG8tY2hhcnQtdG9vbHRpcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb1Jlc2l6ZU9ic2VydmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvLXJlc2l6ZS1vYnNlcnZlci5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgYHBvLWNoYXJ0YC5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9Ub29sdGlwTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvQ2hhcnRBcmVhQ29tcG9uZW50LFxyXG4gICAgUG9DaGFydEF4aXNDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0QXhpc1BhdGhDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0QXhpc0xhYmVsQ29tcG9uZW50LFxyXG4gICAgUG9DaGFydENvbXBvbmVudCxcclxuICAgIFBvQ2hhcnRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0TGVnZW5kQ29tcG9uZW50LFxyXG4gICAgUG9DaGFydExpbmVDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0UGF0aENvbXBvbmVudCxcclxuICAgIFBvQ2hhcnRQaWVDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0RG9udXRDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0U2VyaWVzUG9pbnRDb21wb25lbnQsXHJcbiAgICBQb0NoYXJ0QmFyQ29tcG9uZW50LFxyXG4gICAgUG9DaGFydENvbHVtbkNvbXBvbmVudCxcclxuICAgIFBvQ2hhcnRCYXJQYXRoQ29tcG9uZW50LFxyXG4gICAgUG9DaGFydENpcmN1bGFyUGF0aENvbXBvbmVudCxcclxuICAgIFBvQ2hhcnRDaXJjdWxhckxhYmVsQ29tcG9uZW50LFxyXG4gICAgUG9DaGFydFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBQb1Jlc2l6ZU9ic2VydmVyRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUG9DaGFydENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2hhcnRNb2R1bGUge31cclxuIl19