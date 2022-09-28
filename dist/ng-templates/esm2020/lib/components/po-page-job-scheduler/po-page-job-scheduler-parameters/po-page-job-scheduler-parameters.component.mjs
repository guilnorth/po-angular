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
        args: [{ selector: 'po-page-job-scheduler-parameters', template: "<ng-container\n  *ngIf=\"\n    parameters && parameters.length;\n    then formFieldsTemplate;\n    else (component && dynamicContent) || parametersNotFoundTemplate\n  \"\n>\n</ng-container>\n\n<ng-template #parametersNotFoundTemplate>\n  <div class=\"po-text-center\">\n    <span class=\"po-icon po-icon-info\"></span>\n    <span class=\"po-font-text-large\">\n      {{ literals.parametersNotFound }}\n    </span>\n  </div>\n</ng-template>\n\n<ng-template #formFieldsTemplate>\n  <form #parametersForm=\"ngForm\">\n    <po-dynamic-form p-group-form [p-fields]=\"parameters\" [p-value]=\"value\"> </po-dynamic-form>\n  </form>\n</ng-template>\n\n<ng-template #dynamicContent>\n  <dynamic-load-component [component]=\"component\" [dataProps]=\"dataProps\"> </dynamic-load-component>\n</ng-template>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0FqRyx3QkFPZTs7O0lBR2IsOEJBQTRCO0lBQzFCLDBCQUEwQztJQUMxQywrQkFBaUM7SUFDL0IsWUFDRjtJQUFBLGlCQUFPLEVBQUE7OztJQURMLGVBQ0Y7SUFERSxtRUFDRjs7O0lBS0YscUNBQStCO0lBQzdCLHFDQUEyRjtJQUM3RixpQkFBTzs7O0lBRHlCLGVBQXVCO0lBQXZCLDRDQUF1Qix5QkFBQTs7O0lBS3ZELDRDQUFrRzs7O0lBQTFFLDRDQUF1QiwrQkFBQTs7QURoQmpELE1BQU0sT0FBTyxxQ0FBcUM7SUFKbEQ7UUFPdUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQThCLEVBQUUsQ0FBQztRQWF6QyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0tBV25GO0lBVEMsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7MEhBNUJVLHFDQUFxQzt3RkFBckMscUNBQXFDOzs7Ozs7UUNUbEQsd0dBT2U7UUFFZix1SUFPYztRQUVkLHVJQUljO1FBRWQsdUlBRWM7Ozs7O1FBekJYLDhEQUVNLGlCQUFBLHlDQUFBOzt1RkRNSSxxQ0FBcUM7Y0FKakQsU0FBUzsyQkFDRSxrQ0FBa0M7Z0JBSWYsSUFBSTtrQkFBaEMsU0FBUzttQkFBQyxnQkFBZ0I7WUFFTixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFSSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFLQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFJRyxTQUFTO2tCQUEvQixLQUFLO21CQUFDLGNBQWM7WUFFSCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFUyxXQUFXO2tCQUFuQyxNQUFNO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1GaWVsZCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMnLFxuICB0ZW1wbGF0ZVVybDogJ3BvLXBhZ2Utam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJQYXJhbWV0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3BhcmFtZXRlcnNGb3JtJykgZm9ybTogTmdGb3JtO1xuXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzID0gPGFueT57fTtcblxuICBASW5wdXQoJ3AtcGFyYW1ldGVycycpIHBhcmFtZXRlcnM6IEFycmF5PFBvRHluYW1pY0Zvcm1GaWVsZD4gPSBbXTtcblxuICAvKipcbiAgICogQ29tcG9uZW50ZSBjdXN0b21pemFkbyBwYXJhIHBhcmFtZXRyaXphw6fDtWVzXG4gICAqL1xuICBASW5wdXQoJ3AtY29tcG9uZW50JykgY29tcG9uZW50OiBhbnk7XG4gIC8qKlxuICAgKiBQcm9wcmllZGFkZXMgZGUgQElucHV0IGUgQE91dHB1dCBkbyBjb21wb25lbnRlIGN1c3RvbWl6YWRvIGVtIGZvcm1hdG8gY2hhdmU6IHZhbG9yXG4gICAqL1xuICBASW5wdXQoJ3AtZGF0YS1wcm9wcycpIGRhdGFQcm9wczogT2JqZWN0O1xuXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlO1xuXG4gIEBPdXRwdXQoJ3AtdmFsdWVDaGFuZ2UnKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lclxuICAqbmdJZj1cIlxuICAgIHBhcmFtZXRlcnMgJiYgcGFyYW1ldGVycy5sZW5ndGg7XG4gICAgdGhlbiBmb3JtRmllbGRzVGVtcGxhdGU7XG4gICAgZWxzZSAoY29tcG9uZW50ICYmIGR5bmFtaWNDb250ZW50KSB8fCBwYXJhbWV0ZXJzTm90Rm91bmRUZW1wbGF0ZVxuICBcIlxuPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjcGFyYW1ldGVyc05vdEZvdW5kVGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwby10ZXh0LWNlbnRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWluZm9cIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJwby1mb250LXRleHQtbGFyZ2VcIj5cbiAgICAgIHt7IGxpdGVyYWxzLnBhcmFtZXRlcnNOb3RGb3VuZCB9fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2Zvcm1GaWVsZHNUZW1wbGF0ZT5cbiAgPGZvcm0gI3BhcmFtZXRlcnNGb3JtPVwibmdGb3JtXCI+XG4gICAgPHBvLWR5bmFtaWMtZm9ybSBwLWdyb3VwLWZvcm0gW3AtZmllbGRzXT1cInBhcmFtZXRlcnNcIiBbcC12YWx1ZV09XCJ2YWx1ZVwiPiA8L3BvLWR5bmFtaWMtZm9ybT5cbiAgPC9mb3JtPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudD5cbiAgPGR5bmFtaWMtbG9hZC1jb21wb25lbnQgW2NvbXBvbmVudF09XCJjb21wb25lbnRcIiBbZGF0YVByb3BzXT1cImRhdGFQcm9wc1wiPiA8L2R5bmFtaWMtbG9hZC1jb21wb25lbnQ+XG48L25nLXRlbXBsYXRlPlxuIl19