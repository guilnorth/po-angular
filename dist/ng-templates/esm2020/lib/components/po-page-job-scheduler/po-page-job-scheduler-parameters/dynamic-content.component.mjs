import { Input, Component, ViewChild, EventEmitter } from '@angular/core';
import { DynamicContentDirective } from './dynamic-component.directive';
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-component.directive";
function DynamicContentComponent_ng_template_0_Template(rf, ctx) { }
export class DynamicContentComponent {
    constructor() { }
    ngOnInit() {
        const componentRef = this.createComponent();
        this.setInstance(componentRef);
    }
    createComponent() {
        const viewContainerRef = this.dynamicContent.viewContainerRef;
        viewContainerRef.clear();
        return viewContainerRef.createComponent(this.component);
    }
    setInstance(componentRef) {
        if (typeof this.dataProps === 'object' && this.dataProps !== null) {
            Object.keys(this.dataProps).forEach((key) => {
                if (componentRef.instance[key] instanceof EventEmitter) {
                    // subscribe function to EventEmitter
                    componentRef.instance[key].subscribe((ev) => typeof this.dataProps[key] === 'function' && this.dataProps[key](ev));
                }
                else {
                    componentRef.instance[key] = this.dataProps[key];
                }
            });
        }
    }
}
DynamicContentComponent.ɵfac = function DynamicContentComponent_Factory(t) { return new (t || DynamicContentComponent)(); };
DynamicContentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicContentComponent, selectors: [["dynamic-load-component"]], viewQuery: function DynamicContentComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(DynamicContentDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicContent = _t.first);
    } }, inputs: { component: "component", dataProps: "dataProps" }, decls: 1, vars: 0, consts: [["dynamicContent", ""]], template: function DynamicContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DynamicContentComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, dependencies: [i1.DynamicContentDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicContentComponent, [{
        type: Component,
        args: [{
                selector: 'dynamic-load-component',
                template: `
      <ng-template dynamicContent></ng-template>
  `
            }]
    }], function () { return []; }, { component: [{
            type: Input
        }], dataProps: [{
            type: Input
        }], dynamicContent: [{
            type: ViewChild,
            args: [DynamicContentDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL2R5bmFtaWMtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBNEIsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFReEUsTUFBTSxPQUFPLHVCQUF1QjtJQXFCbEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtRQUNOLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE1BQU0sZ0JBQWdCLEdBQXFCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDaEYsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsT0FBTyxnQkFBZ0IsQ0FBQyxlQUFlLENBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxXQUFXLENBQUMsWUFBWTtRQUM5QixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBRTFDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxZQUFZLEVBQUU7b0JBQ3RELHFDQUFxQztvQkFDckMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUVwSDtxQkFDSTtvQkFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQUU7WUFDM0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzhGQTlDVSx1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1QkFtQnZCLHVCQUF1Qjs7Ozs7UUF0QjlCLHdGQUEwQzs7dUZBR25DLHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7c0NBTVUsU0FBUztrQkFBakIsS0FBSztZQVlHLFNBQVM7a0JBQWpCLEtBQUs7WUFFZ0QsY0FBYztrQkFBbkUsU0FBUzttQkFBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHluYW1pYy1sb2FkLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlIGR5bmFtaWNDb250ZW50PjwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvKipcclxuICAgKiBDb21wb25lbnRlIHF1ZSBzZXLDoSByZW5kZXJpemFkbyBkaW5hbWljYW1lbnRlXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29tcG9uZW50OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogUHJvcHJpZWRhZGVzIGRlIEBJbnB1dCBlIEBPdXRwdXQgZG8gY29tcG9uZW50ZSBlbSBmb3JtYXRvIGNoYXZlOiB2YWxvclxyXG4gICAqIFBvZGUgc2VyIHBhc3NhZG8gZXZlbnRvcyBjb21vIGV4ZW1wbG86XHJcbiAgICogXHJcbiAgICogY2xpY2tGbiA9IChldikgPT4geyBjb25zb2xlLmxvZyhldiwgJ3Rlc3RlJykgfVxyXG4gICAqIFxyXG4gICAgZGF0YVByb3BzID0ge1xyXG4gICAgJ2NsaWNrJzogdGhpcy5jbGlja0ZuLmJpbmQodGhpcyksXHJcbiAgICBsYWJlbDogJ1Rlc3RlJyxcclxuICAgIH1cclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRhUHJvcHM6IE9iamVjdDtcclxuXHJcbiAgQFZpZXdDaGlsZChEeW5hbWljQ29udGVudERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgZHluYW1pY0NvbnRlbnQhOiBEeW5hbWljQ29udGVudERpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgdGhpcy5zZXRJbnN0YW5jZShjb21wb25lbnRSZWYpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5keW5hbWljQ29udGVudC52aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgcmV0dXJuIHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PGFueT4odGhpcy5jb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnN0YW5jZShjb21wb25lbnRSZWYpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhUHJvcHMgPT09ICdvYmplY3QnICYmIHRoaXMuZGF0YVByb3BzICE9PSBudWxsKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YVByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgICAvLyBzdWJzY3JpYmUgZnVuY3Rpb24gdG8gRXZlbnRFbWl0dGVyXHJcbiAgICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XS5zdWJzY3JpYmUoKGV2KSA9PiB0eXBlb2YgdGhpcy5kYXRhUHJvcHNba2V5XSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmRhdGFQcm9wc1trZXldKGV2KSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB0aGlzLmRhdGFQcm9wc1trZXldIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=