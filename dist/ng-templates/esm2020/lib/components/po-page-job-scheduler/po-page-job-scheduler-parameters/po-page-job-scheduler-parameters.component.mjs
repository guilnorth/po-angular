import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@po-ui/ng-components";
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
function PoPageJobSchedulerParametersComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageJobSchedulerParametersComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.parametersTemplate == null ? null : ctx_r6.parametersTemplate.templateRef);
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
    } }, inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], parametersTemplate: ["p-template", "parametersTemplate"], value: ["p-value", "value"] }, outputs: { valueChange: "p-valueChange" }, decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["parametersNotFoundTemplate", ""], ["formFieldsTemplate", ""], ["dynamicContent", ""], [1, "po-text-center"], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], ["parametersForm", "ngForm"], ["p-group-form", "", 3, "p-fields", "p-value"], [4, "ngTemplateOutlet"]], template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PoPageJobSchedulerParametersComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoPageJobSchedulerParametersComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoPageJobSchedulerParametersComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        const _r5 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length)("ngIfThen", _r3)("ngIfElse", (ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef) && _r5 || _r1);
    } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i3.PoDynamicFormComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerParametersComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler-parameters', template: "<ng-container\r\n  *ngIf=\"\r\n    parameters && parameters.length;\r\n    then formFieldsTemplate;\r\n    else (parametersTemplate?.templateRef && dynamicContent) || parametersNotFoundTemplate\r\n  \"\r\n>\r\n</ng-container>\r\n\r\n<ng-template #parametersNotFoundTemplate>\r\n  <div class=\"po-text-center\">\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.parametersNotFound }}\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <form #parametersForm=\"ngForm\">\r\n    <po-dynamic-form p-group-form [p-fields]=\"parameters\" [p-value]=\"value\"> </po-dynamic-form>\r\n  </form>\r\n</ng-template>\r\n\r\n<!-- <ng-template #dynamicContent>\r\n  <dynamic-load-component\r\n    [component]=\"customComponent.component\"\r\n    [dataProps]=\"customComponent?.properties\"\r\n    #poParamsCustom\r\n  >\r\n  </dynamic-load-component></ng-template>\r\n -->\r\n\r\n<!-- <ng-template #dynamicContent [ngTemplateOutlet]=\"parametersTemplate?.templateRef\"> </ng-template> -->\r\n\r\n<ng-template #dynamicContent>\r\n  <ng-container *ngTemplateOutlet=\"parametersTemplate?.templateRef\"> </ng-container>\r\n</ng-template>\r\n" }]
    }], null, { form: [{
            type: ViewChild,
            args: ['parametersForm']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], parameters: [{
            type: Input,
            args: ['p-parameters']
        }], parametersTemplate: [{
            type: Input,
            args: ['p-template']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], valueChange: [{
            type: Output,
            args: ['p-valueChange']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDQWpHLHdCQU9lOzs7SUFHYiw4QkFBNEI7SUFDMUIsMEJBQTBDO0lBQzFDLCtCQUFpQztJQUMvQixZQUNGO0lBQUEsaUJBQU8sRUFBQTs7O0lBREwsZUFDRjtJQURFLG1FQUNGOzs7SUFLRixxQ0FBK0I7SUFDN0IscUNBQTJGO0lBQzdGLGlCQUFPOzs7SUFEeUIsZUFBdUI7SUFBdkIsNENBQXVCLHlCQUFBOzs7SUFnQnZELHdCQUFrRjs7O0lBQWxGLHNIQUFrRjs7O0lBQW5FLG1IQUFpRDs7QUR6QmxFLE1BQU0sT0FBTyxxQ0FBcUM7SUFKbEQ7UUFPdUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQThCLEVBQUUsQ0FBQztRQWV6QyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0tBV25GO0lBVEMsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7MEhBOUJVLHFDQUFxQzt3RkFBckMscUNBQXFDOzs7Ozs7UUNYbEQsd0dBT2U7UUFFZix1SUFPYztRQUVkLHVJQUljO1FBYWQsdUlBRWM7Ozs7O1FBcENYLDhEQUVLLGlCQUFBLHdHQUFBOzt1RkRRSyxxQ0FBcUM7Y0FKakQsU0FBUzsyQkFDRSxrQ0FBa0M7Z0JBSWYsSUFBSTtrQkFBaEMsU0FBUzttQkFBQyxnQkFBZ0I7WUFFTixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFSSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFXQSxrQkFBa0I7a0JBQXRDLEtBQUs7bUJBQUMsWUFBWTtZQUVELEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUVTLFdBQVc7a0JBQW5DLE1BQU07bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9EeW5hbWljRm9ybUZpZWxkIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4vL2ltcG9ydCB7IFBvSm9iU2NoZWR1bGVyQ3VzdG9tU3RlcHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWpvYi1zY2hlZHVsZXItY3VzdG9tLXN0ZXBzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGUvcG8tam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlSm9iU2NoZWR1bGVyUGFyYW1ldGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3BhcmFtZXRlcnNGb3JtJykgZm9ybTogTmdGb3JtO1xyXG5cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBsaXRlcmFscyA9IDxhbnk+e307XHJcblxyXG4gIEBJbnB1dCgncC1wYXJhbWV0ZXJzJykgcGFyYW1ldGVyczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIENvbXBvbmVudGUgY3VzdG9taXphZG8gcGFyYSBwYXJhbWV0cml6YcOnw7Vlc1xyXG4gICAqIEB0b2RvIHRyb2NhciBwYXJhIG5nLXRlbXBsYXRlXHJcbiAgICovXHJcbiAgLy8gQElucHV0KCdwLWN1c3RvbS1jb21wb25lbnQnKSBjdXN0b21Db21wb25lbnQ/OiBQb0pvYlNjaGVkdWxlckN1c3RvbVN0ZXBzWydwYXJhbWV0ZXJzJ107XHJcblxyXG4gIEBJbnB1dCgncC10ZW1wbGF0ZScpIHBhcmFtZXRlcnNUZW1wbGF0ZTogUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlO1xyXG5cclxuICBAT3V0cHV0KCdwLXZhbHVlQ2hhbmdlJykgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0pIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXJcclxuICAqbmdJZj1cIlxyXG4gICAgcGFyYW1ldGVycyAmJiBwYXJhbWV0ZXJzLmxlbmd0aDtcclxuICAgIHRoZW4gZm9ybUZpZWxkc1RlbXBsYXRlO1xyXG4gICAgZWxzZSAocGFyYW1ldGVyc1RlbXBsYXRlPy50ZW1wbGF0ZVJlZiAmJiBkeW5hbWljQ29udGVudCkgfHwgcGFyYW1ldGVyc05vdEZvdW5kVGVtcGxhdGVcclxuICBcIlxyXG4+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNwYXJhbWV0ZXJzTm90Rm91bmRUZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG8tdGV4dC1jZW50ZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWluZm9cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLWZvbnQtdGV4dC1sYXJnZVwiPlxyXG4gICAgICB7eyBsaXRlcmFscy5wYXJhbWV0ZXJzTm90Rm91bmQgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZm9ybUZpZWxkc1RlbXBsYXRlPlxyXG4gIDxmb3JtICNwYXJhbWV0ZXJzRm9ybT1cIm5nRm9ybVwiPlxyXG4gICAgPHBvLWR5bmFtaWMtZm9ybSBwLWdyb3VwLWZvcm0gW3AtZmllbGRzXT1cInBhcmFtZXRlcnNcIiBbcC12YWx1ZV09XCJ2YWx1ZVwiPiA8L3BvLWR5bmFtaWMtZm9ybT5cclxuICA8L2Zvcm0+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIDxuZy10ZW1wbGF0ZSAjZHluYW1pY0NvbnRlbnQ+XHJcbiAgPGR5bmFtaWMtbG9hZC1jb21wb25lbnRcclxuICAgIFtjb21wb25lbnRdPVwiY3VzdG9tQ29tcG9uZW50LmNvbXBvbmVudFwiXHJcbiAgICBbZGF0YVByb3BzXT1cImN1c3RvbUNvbXBvbmVudD8ucHJvcGVydGllc1wiXHJcbiAgICAjcG9QYXJhbXNDdXN0b21cclxuICA+XHJcbiAgPC9keW5hbWljLWxvYWQtY29tcG9uZW50PjwvbmctdGVtcGxhdGU+XHJcbiAtLT5cclxuXHJcbjwhLS0gPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudCBbbmdUZW1wbGF0ZU91dGxldF09XCJwYXJhbWV0ZXJzVGVtcGxhdGU/LnRlbXBsYXRlUmVmXCI+IDwvbmctdGVtcGxhdGU+IC0tPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudD5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGFyYW1ldGVyc1RlbXBsYXRlPy50ZW1wbGF0ZVJlZlwiPiA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19