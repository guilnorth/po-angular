import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["parametersForm"];
const _c1 = function () { return { $implicit: "teste", index: "index" }; };
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
    } }, inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], parametersTemplate: ["p-template", "parametersTemplate"], value: ["p-value", "value"] }, outputs: { valueChange: "p-valueChange" }, decls: 1, vars: 3, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngTemplateOutlet", ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c1));
    } }, dependencies: [i1.NgTemplateOutlet], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerParametersComponent, [{
        type: Component,
        args: [{ selector: 'po-page-job-scheduler-parameters', template: "<!-- <ng-container\r\n  *ngIf=\"\r\n    parameters && parameters.length;\r\n    then formFieldsTemplate;\r\n    else (parametersTemplate?.templateRef && dynamicContent) || parametersNotFoundTemplate\r\n  \"\r\n>\r\n</ng-container> -->\r\n\r\n<ng-container [ngTemplateOutlet]=\"parametersTemplate?.templateRef\" [ngTemplateOutletContext]=\"{ $implicit: 'teste', index: 'index' }\"> </ng-container>\r\n\r\n<!-- <ng-template #parametersNotFoundTemplate>\r\n  <div class=\"po-text-center\">\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.parametersNotFound }}\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <form #parametersForm=\"ngForm\">\r\n    <po-dynamic-form p-group-form [p-fields]=\"parameters\" [p-value]=\"value\"> </po-dynamic-form>\r\n  </form>\r\n</ng-template>\r\n -->\r\n<!-- <ng-template #dynamicContent>\r\n  <dynamic-load-component\r\n    [component]=\"customComponent.component\"\r\n    [dataProps]=\"customComponent?.properties\"\r\n    #poParamsCustom\r\n  >\r\n  </dynamic-load-component></ng-template>\r\n -->\r\n\r\n<!-- <ng-template #dynamicContent [ngTemplateOutlet]=\"parametersTemplate?.templateRef\"> </ng-template> -->\r\n\r\n<!-- <ng-template #dynamicContent>\r\n  <ng-container *ngTemplateOutlet=\"parametersTemplate?.templateRef\"> </ng-container>\r\n</ng-template>\r\n -->" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVdqRyxNQUFNLE9BQU8scUNBQXFDO0lBSmxEO1FBT3VCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUE4QixFQUFFLENBQUM7UUFlekMsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQVduRjtJQVRDLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzBIQTlCVSxxQ0FBcUM7d0ZBQXJDLHFDQUFxQzs7Ozs7O1FDRmxELDJCQUFzSjs7UUFBeEksNkdBQW9ELHVEQUFBOzt1RkRFckQscUNBQXFDO2NBSmpELFNBQVM7MkJBQ0Usa0NBQWtDO2dCQUlmLElBQUk7a0JBQWhDLFNBQVM7bUJBQUMsZ0JBQWdCO1lBRU4sUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRUksVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBV0Esa0JBQWtCO2tCQUF0QyxLQUFLO21CQUFDLFlBQVk7WUFFRCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFUyxXQUFXO2tCQUFuQyxNQUFNO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1GaWVsZCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuLy9pbXBvcnQgeyBQb0pvYlNjaGVkdWxlckN1c3RvbVN0ZXBzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1qb2Itc2NoZWR1bGVyLWN1c3RvbS1zdGVwcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0pvYlNjaGVkdWxlclBhcmFtZXRlcnNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcG8tam9iLXNjaGVkdWxlci1wYXJhbWV0ZXJzLXRlbXBsYXRlL3BvLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycycsXHJcbiAgdGVtcGxhdGVVcmw6ICdwby1wYWdlLWpvYi1zY2hlZHVsZXItcGFyYW1ldGVycy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUpvYlNjaGVkdWxlclBhcmFtZXRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdwYXJhbWV0ZXJzRm9ybScpIGZvcm06IE5nRm9ybTtcclxuXHJcbiAgQElucHV0KCdwLWxpdGVyYWxzJykgbGl0ZXJhbHMgPSA8YW55Pnt9O1xyXG5cclxuICBASW5wdXQoJ3AtcGFyYW1ldGVycycpIHBhcmFtZXRlcnM6IEFycmF5PFBvRHluYW1pY0Zvcm1GaWVsZD4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBDb21wb25lbnRlIGN1c3RvbWl6YWRvIHBhcmEgcGFyYW1ldHJpemHDp8O1ZXNcclxuICAgKiBAdG9kbyB0cm9jYXIgcGFyYSBuZy10ZW1wbGF0ZVxyXG4gICAqL1xyXG4gIC8vIEBJbnB1dCgncC1jdXN0b20tY29tcG9uZW50JykgY3VzdG9tQ29tcG9uZW50PzogUG9Kb2JTY2hlZHVsZXJDdXN0b21TdGVwc1sncGFyYW1ldGVycyddO1xyXG5cclxuICBASW5wdXQoJ3AtdGVtcGxhdGUnKSBwYXJhbWV0ZXJzVGVtcGxhdGU6IFBvSm9iU2NoZWR1bGVyUGFyYW1ldGVyc1RlbXBsYXRlRGlyZWN0aXZlO1xyXG5cclxuICBASW5wdXQoJ3AtdmFsdWUnKSB2YWx1ZTtcclxuXHJcbiAgQE91dHB1dCgncC12YWx1ZUNoYW5nZScpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8IS0tIDxuZy1jb250YWluZXJcclxuICAqbmdJZj1cIlxyXG4gICAgcGFyYW1ldGVycyAmJiBwYXJhbWV0ZXJzLmxlbmd0aDtcclxuICAgIHRoZW4gZm9ybUZpZWxkc1RlbXBsYXRlO1xyXG4gICAgZWxzZSAocGFyYW1ldGVyc1RlbXBsYXRlPy50ZW1wbGF0ZVJlZiAmJiBkeW5hbWljQ29udGVudCkgfHwgcGFyYW1ldGVyc05vdEZvdW5kVGVtcGxhdGVcclxuICBcIlxyXG4+XHJcbjwvbmctY29udGFpbmVyPiAtLT5cclxuXHJcbjxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFyYW1ldGVyc1RlbXBsYXRlPy50ZW1wbGF0ZVJlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogJ3Rlc3RlJywgaW5kZXg6ICdpbmRleCcgfVwiPiA8L25nLWNvbnRhaW5lcj5cclxuXHJcbjwhLS0gPG5nLXRlbXBsYXRlICNwYXJhbWV0ZXJzTm90Rm91bmRUZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG8tdGV4dC1jZW50ZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWluZm9cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLWZvbnQtdGV4dC1sYXJnZVwiPlxyXG4gICAgICB7eyBsaXRlcmFscy5wYXJhbWV0ZXJzTm90Rm91bmQgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZm9ybUZpZWxkc1RlbXBsYXRlPlxyXG4gIDxmb3JtICNwYXJhbWV0ZXJzRm9ybT1cIm5nRm9ybVwiPlxyXG4gICAgPHBvLWR5bmFtaWMtZm9ybSBwLWdyb3VwLWZvcm0gW3AtZmllbGRzXT1cInBhcmFtZXRlcnNcIiBbcC12YWx1ZV09XCJ2YWx1ZVwiPiA8L3BvLWR5bmFtaWMtZm9ybT5cclxuICA8L2Zvcm0+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiAtLT5cclxuPCEtLSA8bmctdGVtcGxhdGUgI2R5bmFtaWNDb250ZW50PlxyXG4gIDxkeW5hbWljLWxvYWQtY29tcG9uZW50XHJcbiAgICBbY29tcG9uZW50XT1cImN1c3RvbUNvbXBvbmVudC5jb21wb25lbnRcIlxyXG4gICAgW2RhdGFQcm9wc109XCJjdXN0b21Db21wb25lbnQ/LnByb3BlcnRpZXNcIlxyXG4gICAgI3BvUGFyYW1zQ3VzdG9tXHJcbiAgPlxyXG4gIDwvZHluYW1pYy1sb2FkLWNvbXBvbmVudD48L25nLXRlbXBsYXRlPlxyXG4gLS0+XHJcblxyXG48IS0tIDxuZy10ZW1wbGF0ZSAjZHluYW1pY0NvbnRlbnQgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFyYW1ldGVyc1RlbXBsYXRlPy50ZW1wbGF0ZVJlZlwiPiA8L25nLXRlbXBsYXRlPiAtLT5cclxuXHJcbjwhLS0gPG5nLXRlbXBsYXRlICNkeW5hbWljQ29udGVudD5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGFyYW1ldGVyc1RlbXBsYXRlPy50ZW1wbGF0ZVJlZlwiPiA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIC0tPiJdfQ==