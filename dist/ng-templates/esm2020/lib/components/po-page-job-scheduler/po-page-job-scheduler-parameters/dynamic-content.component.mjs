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
            Object.keys(this.dataProps).forEach(key => {
                if (componentRef.instance[key] instanceof EventEmitter) {
                    // subscribe function to EventEmitter
                    componentRef.instance[key].subscribe(ev => typeof this.dataProps[key] === 'function' && this.dataProps[key](ev));
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
                template: ` <ng-template dynamicContent></ng-template> `
            }]
    }], function () { return []; }, { component: [{
            type: Input
        }], dataProps: [{
            type: Input
        }], dynamicContent: [{
            type: ViewChild,
            args: [DynamicContentDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyL3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzL2R5bmFtaWMtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBNEIsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFNeEUsTUFBTSxPQUFPLHVCQUF1QjtJQW9CbEMsZ0JBQWUsQ0FBQztJQUVoQixRQUFRO1FBQ04sTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGVBQWU7UUFDckIsTUFBTSxnQkFBZ0IsR0FBcUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixPQUFPLGdCQUFnQixDQUFDLGVBQWUsQ0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLFdBQVcsQ0FBQyxZQUFZO1FBQzlCLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxZQUFZLEVBQUU7b0JBQ3RELHFDQUFxQztvQkFDckMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUMzRSxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OEZBOUNVLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VCQWtCdkIsdUJBQXVCOzs7OztRQXBCdEIsd0ZBQTBDOzt1RkFFM0MsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsOENBQThDO2FBQ3pEO3NDQUtVLFNBQVM7a0JBQWpCLEtBQUs7WUFZRyxTQUFTO2tCQUFqQixLQUFLO1lBRWdELGNBQWM7a0JBQW5FLFNBQVM7bUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY0NvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2R5bmFtaWMtY29tcG9uZW50LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtbG9hZC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgZHluYW1pY0NvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb21wb25lbnRlIHF1ZSBzZXLDoSByZW5kZXJpemFkbyBkaW5hbWljYW1lbnRlXG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnQ6IGFueTtcbiAgLyoqXG4gICAqIFByb3ByaWVkYWRlcyBkZSBASW5wdXQgZSBAT3V0cHV0IGRvIGNvbXBvbmVudGUgZW0gZm9ybWF0byBjaGF2ZTogdmFsb3JcbiAgICogUG9kZSBzZXIgcGFzc2FkbyBldmVudG9zIGNvbW8gZXhlbXBsbzpcbiAgICogXG4gICAqIGNsaWNrRm4gPSAoZXYpID0+IHsgY29uc29sZS5sb2coZXYsICd0ZXN0ZScpIH1cbiAgICogXG4gICAgZGF0YVByb3BzID0ge1xuICAgICdjbGljayc6IHRoaXMuY2xpY2tGbi5iaW5kKHRoaXMpLFxuICAgIGxhYmVsOiAnVGVzdGUnLFxuICAgIH1cbiAgICovXG4gIEBJbnB1dCgpIGRhdGFQcm9wczogT2JqZWN0O1xuXG4gIEBWaWV3Q2hpbGQoRHluYW1pY0NvbnRlbnREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGR5bmFtaWNDb250ZW50ITogRHluYW1pY0NvbnRlbnREaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgdGhpcy5zZXRJbnN0YW5jZShjb21wb25lbnRSZWYpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoKSB7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZHluYW1pY0NvbnRlbnQudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgcmV0dXJuIHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PGFueT4odGhpcy5jb21wb25lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJbnN0YW5jZShjb21wb25lbnRSZWYpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZGF0YVByb3BzID09PSAnb2JqZWN0JyAmJiB0aGlzLmRhdGFQcm9wcyAhPT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhUHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgICAgLy8gc3Vic2NyaWJlIGZ1bmN0aW9uIHRvIEV2ZW50RW1pdHRlclxuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldLnN1YnNjcmliZShcbiAgICAgICAgICAgIGV2ID0+IHR5cGVvZiB0aGlzLmRhdGFQcm9wc1trZXldID09PSAnZnVuY3Rpb24nICYmIHRoaXMuZGF0YVByb3BzW2tleV0oZXYpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSA9IHRoaXMuZGF0YVByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19