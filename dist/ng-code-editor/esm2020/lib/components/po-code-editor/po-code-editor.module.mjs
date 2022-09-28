import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoCodeEditorComponent } from './po-code-editor.component';
import { PoCodeEditorRegister } from './po-code-editor-register.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente po-code-editor.
 */
export class PoCodeEditorModule {
    static forRegister(props) {
        return {
            ngModule: PoCodeEditorModule,
            providers: [
                {
                    provide: PoCodeEditorRegister,
                    useValue: props
                }
            ]
        };
    }
}
PoCodeEditorModule.ɵfac = function PoCodeEditorModule_Factory(t) { return new (t || PoCodeEditorModule)(); };
PoCodeEditorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoCodeEditorModule });
PoCodeEditorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoCodeEditorRegister], imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PoCodeEditorComponent],
                exports: [PoCodeEditorComponent],
                providers: [PoCodeEditorRegister]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoCodeEditorModule, { declarations: [PoCodeEditorComponent], imports: [CommonModule], exports: [PoCodeEditorComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29kZS1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29kZS1lZGl0b3Ivc3JjL2xpYi9jb21wb25lbnRzL3BvLWNvZGUtZWRpdG9yL3BvLWNvZGUtZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBR3pFOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBK0I7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O29GQVhVLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3lFQUZsQixDQUFDLG9CQUFvQixDQUFDLFlBSHZCLFlBQVk7dUZBS1gsa0JBQWtCO2NBTjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDbEM7O3dGQUNZLGtCQUFrQixtQkFKZCxxQkFBcUIsYUFEMUIsWUFBWSxhQUVaLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBQb0NvZGVFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3BvLWNvZGUtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvQ29kZUVkaXRvclJlZ2lzdGVyIH0gZnJvbSAnLi9wby1jb2RlLWVkaXRvci1yZWdpc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Db2RlRWRpdG9yUmVnaXN0ZXJhYmxlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNvZGUtZWRpdG9yLXJlZ2lzdGVyYWJsZS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIGNvbXBvbmVudGUgcG8tY29kZS1lZGl0b3IuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1BvQ29kZUVkaXRvckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvQ29kZUVkaXRvckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9Db2RlRWRpdG9yUmVnaXN0ZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NvZGVFZGl0b3JNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSZWdpc3Rlcihwcm9wczogUG9Db2RlRWRpdG9yUmVnaXN0ZXJhYmxlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQb0NvZGVFZGl0b3JNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBQb0NvZGVFZGl0b3JNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFBvQ29kZUVkaXRvclJlZ2lzdGVyLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHByb3BzXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=