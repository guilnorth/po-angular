import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PoButtonModule } from './../po-button/po-button.module';
import { PoCheckboxGroupModule } from '../po-field/po-checkbox-group/po-checkbox-group.module';
import { PoContainerModule } from '../po-container/po-container.module';
import { PoLoadingModule } from '../po-loading/po-loading.module';
import { PoModalModule } from '../po-modal/po-modal.module';
import { PoPopoverModule } from '../po-popover/po-popover.module';
import { PoPopupModule } from './../po-popup/po-popup.module';
import { PoTimeModule } from '../../pipes/po-time/index';
import { PoTooltipModule } from '../../directives/po-tooltip/index';
import { PoIconModule } from './../po-icon/po-icon.module';
import { PoCheckboxModule } from './../po-field/po-checkbox/po-checkbox.module';
import { PoTableColumnIconComponent } from './po-table-column-icon/po-table-column-icon.component';
import { PoTableColumnLabelComponent } from './po-table-column-label/po-table-column-label.component';
import { PoTableColumnLinkComponent } from './po-table-column-link/po-table-column-link.component';
import { PoTableColumnManagerComponent } from './po-table-column-manager/po-table-column-manager.component';
import { PoTableComponent } from './po-table.component';
import { PoTableDetailComponent } from './po-table-detail/po-table-detail.component';
import { PoTableIconComponent } from './po-table-icon/po-table-icon.component';
import { PoTableRowTemplateDirective } from './po-table-row-template/po-table-row-template.directive';
import { PoTableShowSubtitleComponent } from './po-table-show-subtitle/po-table-show-subtitle.component';
import { PoTableSubtitleCircleComponent } from './po-table-subtitle-circle/po-table-subtitle-circle.component';
import { PoTableSubtitleFooterComponent } from './po-table-subtitle-footer/po-table-subtitle-footer.component';
import { PoTableCellTemplateDirective } from './po-table-cell-template/po-table-cell-template.directive';
import { PoTableColumnTemplateDirective } from './po-table-column-template/po-table-column-template.directive';
import { PoTableListManagerComponent } from './po-table-list-manager/po-table-list-manager.component';
import * as i0 from "@angular/core";
/**
 * @description
 * Módulo do componente po-table
 */
export class PoTableModule {
}
PoTableModule.ɵfac = function PoTableModule_Factory(t) { return new (t || PoTableModule)(); };
PoTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoTableModule });
PoTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [DecimalPipe], imports: [CommonModule,
        FormsModule,
        ScrollingModule,
        RouterModule,
        PoButtonModule,
        PoCheckboxGroupModule,
        PoContainerModule,
        PoLoadingModule,
        PoModalModule,
        PoPopoverModule,
        PoPopupModule,
        PoTimeModule,
        PoTooltipModule,
        PoIconModule,
        PoCheckboxModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ScrollingModule,
                    RouterModule,
                    PoButtonModule,
                    PoCheckboxGroupModule,
                    PoContainerModule,
                    PoLoadingModule,
                    PoModalModule,
                    PoPopoverModule,
                    PoPopupModule,
                    PoTimeModule,
                    PoTooltipModule,
                    PoIconModule,
                    PoCheckboxModule
                ],
                declarations: [
                    PoTableComponent,
                    PoTableColumnIconComponent,
                    PoTableColumnLabelComponent,
                    PoTableColumnLinkComponent,
                    PoTableColumnManagerComponent,
                    PoTableListManagerComponent,
                    PoTableDetailComponent,
                    PoTableIconComponent,
                    PoTableRowTemplateDirective,
                    PoTableShowSubtitleComponent,
                    PoTableSubtitleCircleComponent,
                    PoTableSubtitleFooterComponent,
                    PoTableCellTemplateDirective,
                    PoTableColumnTemplateDirective
                ],
                exports: [
                    PoTableComponent,
                    PoTableRowTemplateDirective,
                    PoTableCellTemplateDirective,
                    PoTableColumnTemplateDirective
                ],
                providers: [DecimalPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoTableModule, { declarations: [PoTableComponent,
        PoTableColumnIconComponent,
        PoTableColumnLabelComponent,
        PoTableColumnLinkComponent,
        PoTableColumnManagerComponent,
        PoTableListManagerComponent,
        PoTableDetailComponent,
        PoTableIconComponent,
        PoTableRowTemplateDirective,
        PoTableShowSubtitleComponent,
        PoTableSubtitleCircleComponent,
        PoTableSubtitleFooterComponent,
        PoTableCellTemplateDirective,
        PoTableColumnTemplateDirective], imports: [CommonModule,
        FormsModule,
        ScrollingModule,
        RouterModule,
        PoButtonModule,
        PoCheckboxGroupModule,
        PoContainerModule,
        PoLoadingModule,
        PoModalModule,
        PoPopoverModule,
        PoPopupModule,
        PoTimeModule,
        PoTooltipModule,
        PoIconModule,
        PoCheckboxModule], exports: [PoTableComponent,
        PoTableRowTemplateDirective,
        PoTableCellTemplateDirective,
        PoTableColumnTemplateDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYmxlL3BvLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUs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LDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcblxyXG5pbXBvcnQgeyBQb0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vcG8tYnV0dG9uL3BvLWJ1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb0NoZWNrYm94R3JvdXBNb2R1bGUgfSBmcm9tICcuLi9wby1maWVsZC9wby1jaGVja2JveC1ncm91cC9wby1jaGVja2JveC1ncm91cC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb0NvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4uL3BvLWNvbnRhaW5lci9wby1jb250YWluZXIubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi4vcG8tbG9hZGluZy9wby1sb2FkaW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvTW9kYWxNb2R1bGUgfSBmcm9tICcuLi9wby1tb2RhbC9wby1tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb1BvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9wby1wb3BvdmVyL3BvLXBvcG92ZXIubW9kdWxlJztcclxuaW1wb3J0IHsgUG9Qb3B1cE1vZHVsZSB9IGZyb20gJy4vLi4vcG8tcG9wdXAvcG8tcG9wdXAubW9kdWxlJztcclxuaW1wb3J0IHsgUG9UaW1lTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcG8tdGltZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcG8tdG9vbHRpcC9pbmRleCc7XHJcbmltcG9ydCB7IFBvSWNvbk1vZHVsZSB9IGZyb20gJy4vLi4vcG8taWNvbi9wby1pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLy4uL3BvLWZpZWxkL3BvLWNoZWNrYm94L3BvLWNoZWNrYm94Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUtY29sdW1uLWljb24vcG8tdGFibGUtY29sdW1uLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbHVtbkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWJsZS1jb2x1bW4tbGFiZWwvcG8tdGFibGUtY29sdW1uLWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVGFibGVDb2x1bW5MaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWJsZS1jb2x1bW4tbGluay9wby10YWJsZS1jb2x1bW4tbGluay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUtY29sdW1uLW1hbmFnZXIvcG8tdGFibGUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJsZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUtZGV0YWlsL3BvLXRhYmxlLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RhYmxlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUtaWNvbi9wby10YWJsZS1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVGFibGVSb3dUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcG8tdGFibGUtcm93LXRlbXBsYXRlL3BvLXRhYmxlLXJvdy10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb1RhYmxlU2hvd1N1YnRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWJsZS1zaG93LXN1YnRpdGxlL3BvLXRhYmxlLXNob3ctc3VidGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9UYWJsZVN1YnRpdGxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWJsZS1zdWJ0aXRsZS1jaXJjbGUvcG8tdGFibGUtc3VidGl0bGUtY2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVGFibGVTdWJ0aXRsZUZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUtc3VidGl0bGUtZm9vdGVyL3BvLXRhYmxlLXN1YnRpdGxlLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby10YWJsZS1jZWxsLXRlbXBsYXRlL3BvLXRhYmxlLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9UYWJsZUNvbHVtblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby10YWJsZS1jb2x1bW4tdGVtcGxhdGUvcG8tdGFibGUtY29sdW1uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvVGFibGVMaXN0TWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tdGFibGUtbGlzdC1tYW5hZ2VyL3BvLXRhYmxlLWxpc3QtbWFuYWdlci5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8tdGFibGVcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBTY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBQb0J1dHRvbk1vZHVsZSxcclxuICAgIFBvQ2hlY2tib3hHcm91cE1vZHVsZSxcclxuICAgIFBvQ29udGFpbmVyTW9kdWxlLFxyXG4gICAgUG9Mb2FkaW5nTW9kdWxlLFxyXG4gICAgUG9Nb2RhbE1vZHVsZSxcclxuICAgIFBvUG9wb3Zlck1vZHVsZSxcclxuICAgIFBvUG9wdXBNb2R1bGUsXHJcbiAgICBQb1RpbWVNb2R1bGUsXHJcbiAgICBQb1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBQb0ljb25Nb2R1bGUsXHJcbiAgICBQb0NoZWNrYm94TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvVGFibGVDb21wb25lbnQsXHJcbiAgICBQb1RhYmxlQ29sdW1uSWNvbkNvbXBvbmVudCxcclxuICAgIFBvVGFibGVDb2x1bW5MYWJlbENvbXBvbmVudCxcclxuICAgIFBvVGFibGVDb2x1bW5MaW5rQ29tcG9uZW50LFxyXG4gICAgUG9UYWJsZUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXHJcbiAgICBQb1RhYmxlTGlzdE1hbmFnZXJDb21wb25lbnQsXHJcbiAgICBQb1RhYmxlRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgUG9UYWJsZUljb25Db21wb25lbnQsXHJcbiAgICBQb1RhYmxlUm93VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBQb1RhYmxlU2hvd1N1YnRpdGxlQ29tcG9uZW50LFxyXG4gICAgUG9UYWJsZVN1YnRpdGxlQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgUG9UYWJsZVN1YnRpdGxlRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgUG9UYWJsZUNlbGxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFBvVGFibGVDb2x1bW5UZW1wbGF0ZURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUG9UYWJsZUNvbXBvbmVudCxcclxuICAgIFBvVGFibGVSb3dUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFBvVGFibGVDZWxsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBQb1RhYmxlQ29sdW1uVGVtcGxhdGVEaXJlY3RpdmVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0RlY2ltYWxQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZU1vZHVsZSB7fVxyXG4iXX0=