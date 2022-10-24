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
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.parametersNotFound, " ");
} }
function PoPageJobSchedulerParametersComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", null, 8);
    i0.ɵɵelement(2, "po-dynamic-form", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-fields", ctx_r4.parameters)("p-value", ctx_r4.value);
} }
function PoPageJobSchedulerParametersComponent_ng_template_5_Template(rf, ctx) { }
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
    } }, inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], parametersTemplate: ["p-template", "parametersTemplate"], value: ["p-value", "value"] }, outputs: { valueChange: "p-valueChange" }, decls: 7, vars: 4, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["parametersNotFoundTemplate", ""], ["formFieldsTemplate", ""], [3, "ngTemplateOutlet"], ["dynamicContent", ""], [1, "po-text-center"], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], ["parametersForm", "ngForm"], ["p-group-form", "", 3, "p-fields", "p-value"]], template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PoPageJobSchedulerParametersComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PoPageJobSchedulerParametersComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoPageJobSchedulerParametersComponent_ng_template_5_Template, 0, 0, "ng-template", 3, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        const _r5 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length)("ngIfThen", _r3)("ngIfElse", (ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef) && _r5 || _r1);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef);
    } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i3.PoDynamicFormComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerParametersComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler-parameters', template: "<ng-container\r\n  *ngIf=\"\r\n    parameters && parameters.length;\r\n    then formFieldsTemplate;\r\n    else (parametersTemplate?.templateRef && dynamicContent) || parametersNotFoundTemplate\r\n  \"\r\n>\r\n</ng-container>\r\n\r\n<ng-template #parametersNotFoundTemplate>\r\n  <div class=\"po-text-center\">\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.parametersNotFound }}\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <form #parametersForm=\"ngForm\">\r\n    <po-dynamic-form p-group-form [p-fields]=\"parameters\" [p-value]=\"value\"> </po-dynamic-form>\r\n  </form>\r\n</ng-template>\r\n\r\n<!-- <ng-template #dynamicContent>\r\n  <dynamic-load-component\r\n    [component]=\"customComponent.component\"\r\n    [dataProps]=\"customComponent?.properties\"\r\n    #poParamsCustom\r\n  >\r\n  </dynamic-load-component></ng-template>\r\n -->\r\n\r\n<ng-template #dynamicContent [ngTemplateOutlet]=\"parametersTemplate?.templateRef\"> </ng-template>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDQWpHLHdCQU9lOzs7SUFHYiw4QkFBNEI7SUFDMUIsMEJBQTBDO0lBQzFDLCtCQUFpQztJQUMvQixZQUNGO0lBQUEsaUJBQU8sRUFBQTs7O0lBREwsZUFDRjtJQURFLG1FQUNGOzs7SUFLRixxQ0FBK0I7SUFDN0IscUNBQTJGO0lBQzdGLGlCQUFPOzs7SUFEeUIsZUFBdUI7SUFBdkIsNENBQXVCLHlCQUFBOzs7QURUekQsTUFBTSxPQUFPLHFDQUFxQztJQUpsRDtRQU91QixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBOEIsRUFBRSxDQUFDO1FBZXpDLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7S0FXbkY7SUFUQyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzswSEE5QlUscUNBQXFDO3dGQUFyQyxxQ0FBcUM7Ozs7OztRQ1hsRCx3R0FPZTtRQUVmLHVJQU9jO1FBRWQsdUlBSWM7UUFXZCxvSUFBaUc7Ozs7O1FBaEM5Riw4REFFSyxpQkFBQSx3R0FBQTtRQThCcUIsZUFBb0Q7UUFBcEQsNkdBQW9EOzt1RkR0QnBFLHFDQUFxQztjQUpqRCxTQUFTOzJCQUNFLGtDQUFrQztnQkFJZixJQUFJO2tCQUFoQyxTQUFTO21CQUFDLGdCQUFnQjtZQUVOLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVJLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQVdBLGtCQUFrQjtrQkFBdEMsS0FBSzttQkFBQyxZQUFZO1lBRUQsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBRVMsV0FBVztrQkFBbkMsTUFBTTttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtRmllbGQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbi8vaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJDdXN0b21TdGVwcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tam9iLXNjaGVkdWxlci1jdXN0b20tc3RlcHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJQYXJhbWV0ZXJzVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3BvLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZS9wby1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJQYXJhbWV0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncGFyYW1ldGVyc0Zvcm0nKSBmb3JtOiBOZ0Zvcm07XHJcblxyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzID0gPGFueT57fTtcclxuXHJcbiAgQElucHV0KCdwLXBhcmFtZXRlcnMnKSBwYXJhbWV0ZXJzOiBBcnJheTxQb0R5bmFtaWNGb3JtRmllbGQ+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogQ29tcG9uZW50ZSBjdXN0b21pemFkbyBwYXJhIHBhcmFtZXRyaXphw6fDtWVzXHJcbiAgICogQHRvZG8gdHJvY2FyIHBhcmEgbmctdGVtcGxhdGVcclxuICAgKi9cclxuICAvLyBASW5wdXQoJ3AtY3VzdG9tLWNvbXBvbmVudCcpIGN1c3RvbUNvbXBvbmVudD86IFBvSm9iU2NoZWR1bGVyQ3VzdG9tU3RlcHNbJ3BhcmFtZXRlcnMnXTtcclxuXHJcbiAgQElucHV0KCdwLXRlbXBsYXRlJykgcGFyYW1ldGVyc1RlbXBsYXRlOiBQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCdwLXZhbHVlJykgdmFsdWU7XHJcblxyXG4gIEBPdXRwdXQoJ3AtdmFsdWVDaGFuZ2UnKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lclxyXG4gICpuZ0lmPVwiXHJcbiAgICBwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMubGVuZ3RoO1xyXG4gICAgdGhlbiBmb3JtRmllbGRzVGVtcGxhdGU7XHJcbiAgICBlbHNlIChwYXJhbWV0ZXJzVGVtcGxhdGU/LnRlbXBsYXRlUmVmICYmIGR5bmFtaWNDb250ZW50KSB8fCBwYXJhbWV0ZXJzTm90Rm91bmRUZW1wbGF0ZVxyXG4gIFwiXHJcbj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI3BhcmFtZXRlcnNOb3RGb3VuZFRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwby10ZXh0LWNlbnRlclwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwby1pY29uIHBvLWljb24taW5mb1wiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8tZm9udC10ZXh0LWxhcmdlXCI+XHJcbiAgICAgIHt7IGxpdGVyYWxzLnBhcmFtZXRlcnNOb3RGb3VuZCB9fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNmb3JtRmllbGRzVGVtcGxhdGU+XHJcbiAgPGZvcm0gI3BhcmFtZXRlcnNGb3JtPVwibmdGb3JtXCI+XHJcbiAgICA8cG8tZHluYW1pYy1mb3JtIHAtZ3JvdXAtZm9ybSBbcC1maWVsZHNdPVwicGFyYW1ldGVyc1wiIFtwLXZhbHVlXT1cInZhbHVlXCI+IDwvcG8tZHluYW1pYy1mb3JtPlxyXG4gIDwvZm9ybT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudD5cclxuICA8ZHluYW1pYy1sb2FkLWNvbXBvbmVudFxyXG4gICAgW2NvbXBvbmVudF09XCJjdXN0b21Db21wb25lbnQuY29tcG9uZW50XCJcclxuICAgIFtkYXRhUHJvcHNdPVwiY3VzdG9tQ29tcG9uZW50Py5wcm9wZXJ0aWVzXCJcclxuICAgICNwb1BhcmFtc0N1c3RvbVxyXG4gID5cclxuICA8L2R5bmFtaWMtbG9hZC1jb21wb25lbnQ+PC9uZy10ZW1wbGF0ZT5cclxuIC0tPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudCBbbmdUZW1wbGF0ZU91dGxldF09XCJwYXJhbWV0ZXJzVGVtcGxhdGU/LnRlbXBsYXRlUmVmXCI+IDwvbmctdGVtcGxhdGU+XHJcbiJdfQ==