import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@po-ui/ng-components";
import * as i4 from "./dynamic-content.component";
const _c0 = ["parametersForm"];
function PoPageJobSchedulerParametersComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerParametersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "span", 5);
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.parametersNotFound, " ");
} }
function PoPageJobSchedulerParametersComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", null, 7);
    i0.ɵɵelement(2, "po-dynamic-form", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-fields", ctx_r4.parameters)("p-value", ctx_r4.value);
} }
function PoPageJobSchedulerParametersComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "dynamic-load-component", 9);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("component", ctx_r6.component)("dataProps", ctx_r6.dataProps);
} }
export class PoPageJobSchedulerParametersComponent {
    constructor() {
        this.literals = {};
        this.parameters = [];
        this.valueChange = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.form) {
            setTimeout(() => {
                this.form.valueChanges.subscribe(value => {
                    this.valueChange.emit(value);
                });
            });
        }
    }
}
PoPageJobSchedulerParametersComponent.ɵfac = function PoPageJobSchedulerParametersComponent_Factory(t) { return new (t || PoPageJobSchedulerParametersComponent)(); };
PoPageJobSchedulerParametersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerParametersComponent, selectors: [["po-page-job-scheduler-parameters"]], viewQuery: function PoPageJobSchedulerParametersComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
    } }, inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], component: ["p-component", "component"], dataProps: ["p-data-props", "dataProps"], value: ["p-value", "value"] }, outputs: { valueChange: "p-valueChange" }, decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["parametersNotFoundTemplate", ""], ["formFieldsTemplate", ""], ["dynamicContent", ""], [1, "po-text-center"], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], ["parametersForm", "ngForm"], ["p-group-form", "", 3, "p-fields", "p-value"], [3, "component", "dataProps"]], template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PoPageJobSchedulerParametersComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoPageJobSchedulerParametersComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoPageJobSchedulerParametersComponent_ng_template_5_Template, 1, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        const _r5 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length)("ngIfThen", _r3)("ngIfElse", ctx.component && _r5 || _r1);
    } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i3.PoDynamicFormComponent, i4.DynamicContentComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerParametersComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler-parameters', template: "<ng-container *ngIf=\"parameters && parameters.length; then formFieldsTemplate; else (component && dynamicContent) || parametersNotFoundTemplate\">\r\n</ng-container>\r\n\r\n<ng-template #parametersNotFoundTemplate>\r\n  <div class=\"po-text-center\">\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.parametersNotFound }}\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <form #parametersForm=\"ngForm\">\r\n    <po-dynamic-form p-group-form [p-fields]=\"parameters\" [p-value]=\"value\"> </po-dynamic-form>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #dynamicContent>\r\n  <dynamic-load-component [component]=\"component\" [dataProps]=\"dataProps\">\r\n  </dynamic-load-component>\r\n</ng-template>\r\n" }]
    }], null, { form: [{
            type: ViewChild,
            args: ['parametersForm']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], parameters: [{
            type: Input,
            args: ['p-parameters']
        }], component: [{
            type: Input,
            args: ['p-component']
        }], dataProps: [{
            type: Input,
            args: ['p-data-props']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], valueChange: [{
            type: Output,
            args: ['p-valueChange']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0FqRyx3QkFDZTs7O0lBR2IsOEJBQTRCO0lBQzFCLDBCQUEwQztJQUMxQywrQkFBaUM7SUFDL0IsWUFDRjtJQUFBLGlCQUFPLEVBQUE7OztJQURMLGVBQ0Y7SUFERSxtRUFDRjs7O0lBS0YscUNBQStCO0lBQzdCLHFDQUEyRjtJQUM3RixpQkFBTzs7O0lBRHlCLGVBQXVCO0lBQXZCLDRDQUF1Qix5QkFBQTs7O0lBS3ZELDRDQUN5Qjs7O0lBREQsNENBQXVCLCtCQUFBOztBRFZqRCxNQUFNLE9BQU8scUNBQXFDO0lBSmxEO1FBT3VCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUE4QixFQUFFLENBQUM7UUFhekMsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQVduRjtJQVRDLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzBIQTVCVSxxQ0FBcUM7d0ZBQXJDLHFDQUFxQzs7Ozs7O1FDVGxELHdHQUNlO1FBRWYsdUlBT2M7UUFFZCx1SUFJYztRQUVkLHVJQUdjOzs7OztRQXJCQyw4REFBdUMsaUJBQUEseUNBQUE7O3VGRFN6QyxxQ0FBcUM7Y0FKakQsU0FBUzsyQkFDRSxrQ0FBa0M7Z0JBSWYsSUFBSTtrQkFBaEMsU0FBUzttQkFBQyxnQkFBZ0I7WUFFTixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFSSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFLQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFJRyxTQUFTO2tCQUEvQixLQUFLO21CQUFDLGNBQWM7WUFFSCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFUyxXQUFXO2tCQUFuQyxNQUFNO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1GaWVsZCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJQYXJhbWV0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncGFyYW1ldGVyc0Zvcm0nKSBmb3JtOiBOZ0Zvcm07XHJcblxyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzID0gPGFueT57fTtcclxuXHJcbiAgQElucHV0KCdwLXBhcmFtZXRlcnMnKSBwYXJhbWV0ZXJzOiBBcnJheTxQb0R5bmFtaWNGb3JtRmllbGQ+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICogQ29tcG9uZW50ZSBjdXN0b21pemFkbyBwYXJhIHBhcmFtZXRyaXphw6fDtWVzXHJcbiAgKi9cclxuICBASW5wdXQoJ3AtY29tcG9uZW50JykgY29tcG9uZW50OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogUHJvcHJpZWRhZGVzIGRlIEBJbnB1dCBlIEBPdXRwdXQgZG8gY29tcG9uZW50ZSBjdXN0b21pemFkbyBlbSBmb3JtYXRvIGNoYXZlOiB2YWxvclxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kYXRhLXByb3BzJykgZGF0YVByb3BzOiBPYmplY3Q7XHJcblxyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlO1xyXG5cclxuICBAT3V0cHV0KCdwLXZhbHVlQ2hhbmdlJykgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0pIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMubGVuZ3RoOyB0aGVuIGZvcm1GaWVsZHNUZW1wbGF0ZTsgZWxzZSAoY29tcG9uZW50ICYmIGR5bmFtaWNDb250ZW50KSB8fCBwYXJhbWV0ZXJzTm90Rm91bmRUZW1wbGF0ZVwiPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcGFyYW1ldGVyc05vdEZvdW5kVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXRleHQtY2VudGVyXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1pbmZvXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwby1mb250LXRleHQtbGFyZ2VcIj5cclxuICAgICAge3sgbGl0ZXJhbHMucGFyYW1ldGVyc05vdEZvdW5kIH19XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2Zvcm1GaWVsZHNUZW1wbGF0ZT5cclxuICA8Zm9ybSAjcGFyYW1ldGVyc0Zvcm09XCJuZ0Zvcm1cIj5cclxuICAgIDxwby1keW5hbWljLWZvcm0gcC1ncm91cC1mb3JtIFtwLWZpZWxkc109XCJwYXJhbWV0ZXJzXCIgW3AtdmFsdWVdPVwidmFsdWVcIj4gPC9wby1keW5hbWljLWZvcm0+XHJcbiAgPC9mb3JtPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudD5cclxuICA8ZHluYW1pYy1sb2FkLWNvbXBvbmVudCBbY29tcG9uZW50XT1cImNvbXBvbmVudFwiIFtkYXRhUHJvcHNdPVwiZGF0YVByb3BzXCI+XHJcbiAgPC9keW5hbWljLWxvYWQtY29tcG9uZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=