import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["selectFilesLink"];
function PoUploadDragDropAreaComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoUploadDragDropAreaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.directoryCompatible ? ctx_r2.literals == null ? null : ctx_r2.literals.dropFoldersHere : ctx_r2.literals == null ? null : ctx_r2.literals.dropFilesHere, " ");
} }
const _c1 = function (a0) { return { "po-clickable": a0 }; };
function PoUploadDragDropAreaComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "span", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 9, 10);
    i0.ɵɵlistener("click", function PoUploadDragDropAreaComponent_ng_template_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectFiles.emit()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.directoryCompatible ? ctx_r4.literals == null ? null : ctx_r4.literals.dragFoldersHere : ctx_r4.literals == null ? null : ctx_r4.literals.dragFilesHere, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.disabled)("ngClass", i0.ɵɵpureFunction1(4, _c1, !ctx_r4.disabled));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.directoryCompatible ? ctx_r4.literals == null ? null : ctx_r4.literals.selectFolderOnComputer : ctx_r4.literals == null ? null : ctx_r4.literals.selectFilesOnComputer, " ");
} }
const _c2 = function (a0) { return { "po-upload-drag-drop-area-disabled": a0 }; };
export class PoUploadDragDropAreaComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selectFiles = new EventEmitter();
    }
    focus() {
        this.selectFilesLinkElement.nativeElement.focus();
    }
}
PoUploadDragDropAreaComponent.ɵfac = function PoUploadDragDropAreaComponent_Factory(t) { return new (t || PoUploadDragDropAreaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoUploadDragDropAreaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoUploadDragDropAreaComponent, selectors: [["po-upload-drag-drop-area"]], viewQuery: function PoUploadDragDropAreaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectFilesLinkElement = _t.first);
    } }, inputs: { directoryCompatible: ["p-directory-compatible", "directoryCompatible"], disabled: ["p-disabled", "disabled"], height: ["p-height", "height"], literals: ["p-literals", "literals"], overlay: ["p-overlay", "overlay"] }, outputs: { selectFiles: "p-select-files" }, decls: 7, vars: 8, consts: [[1, "po-upload-drag-drop-area", 3, "ngClass"], [1, "po-upload-drag-drop-area-container"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["overlayTemplate", ""], ["defaultTemplate", ""], [1, "po-upload-drag-drop-area-overlay-icon", "po-icon", "po-icon-upload-cloud"], [1, "po-upload-drag-drop-area-overlay-label"], [1, "po-upload-drag-drop-area-icon", "po-icon", "po-icon-upload-cloud"], [1, "po-upload-drag-drop-area-label"], [1, "po-upload-drag-drop-area-select-files", 3, "disabled", "ngClass", "click"], ["selectFilesLink", ""]], template: function PoUploadDragDropAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoUploadDragDropAreaComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(3, PoUploadDragDropAreaComponent_ng_template_3_Template, 3, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoUploadDragDropAreaComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        const _r3 = i0.ɵɵreference(6);
        i0.ɵɵstyleProp("height", ctx.height, "px");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c2, ctx.disabled));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.overlay && !ctx.disabled)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, dependencies: [i1.NgClass, i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadDragDropAreaComponent, [{
        type: Component,
        args: [{ selector: 'po-upload-drag-drop-area', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\r\n  class=\"po-upload-drag-drop-area\"\r\n  [ngClass]=\"{ 'po-upload-drag-drop-area-disabled': disabled }\"\r\n  [style.height.px]=\"height\"\r\n>\r\n  <div class=\"po-upload-drag-drop-area-container\">\r\n    <ng-container *ngIf=\"overlay && !disabled; then overlayTemplate; else defaultTemplate\"> </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #overlayTemplate>\r\n  <span class=\"po-upload-drag-drop-area-overlay-icon po-icon po-icon-upload-cloud\"></span>\r\n\r\n  <div class=\"po-upload-drag-drop-area-overlay-label\">\r\n    {{ directoryCompatible ? literals?.dropFoldersHere : literals?.dropFilesHere }}\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <span class=\"po-upload-drag-drop-area-icon po-icon po-icon-upload-cloud\"></span>\r\n\r\n  <div class=\"po-upload-drag-drop-area-label\">\r\n    {{ directoryCompatible ? literals?.dragFoldersHere : literals?.dragFilesHere }}\r\n  </div>\r\n\r\n  <button\r\n    #selectFilesLink\r\n    class=\"po-upload-drag-drop-area-select-files\"\r\n    [disabled]=\"disabled\"\r\n    [ngClass]=\"{ 'po-clickable': !disabled }\"\r\n    (click)=\"selectFiles.emit()\"\r\n  >\r\n    {{ directoryCompatible ? literals?.selectFolderOnComputer : literals?.selectFilesOnComputer }}\r\n  </button>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }]; }, { directoryCompatible: [{
            type: Input,
            args: ['p-directory-compatible']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], overlay: [{
            type: Input,
            args: ['p-overlay']
        }], selectFiles: [{
            type: Output,
            args: ['p-select-files']
        }], selectFilesLinkElement: [{
            type: ViewChild,
            args: ['selectFilesLink']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLWRyYWctZHJvcC9wby11cGxvYWQtZHJhZy1kcm9wLWFyZWEvcG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLWRyYWctZHJvcC9wby11cGxvYWQtZHJhZy1kcm9wLWFyZWEvcG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ01uSCx3QkFBdUc7OztJQUt6RywwQkFBd0Y7SUFFeEYsOEJBQW9EO0lBQ2xELFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLCtMQUNGOzs7OztJQUlBLDBCQUFnRjtJQUVoRiw4QkFBNEM7SUFDMUMsWUFDRjtJQUFBLGlCQUFNO0lBRU4scUNBTUM7SUFEQyxrTEFBUyxlQUFBLHlCQUFrQixDQUFBLElBQUM7SUFFNUIsWUFDRjtJQUFBLGlCQUFTOzs7SUFYUCxlQUNGO0lBREUsK0xBQ0Y7SUFLRSxlQUFxQjtJQUFyQiwwQ0FBcUIseURBQUE7SUFJckIsZUFDRjtJQURFLDhNQUNGOzs7QUR4QkYsTUFBTSxPQUFPLDZCQUE2QjtJQWV4QyxZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmYsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUl2QyxDQUFDO0lBRTdDLEtBQUs7UUFDSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BELENBQUM7OzBHQW5CVSw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjs7Ozs7O1FDVDFDLDhCQUlDLGFBQUE7UUFFRyxnR0FBdUc7UUFDekcsaUJBQU0sRUFBQTtRQUdSLCtIQU1jO1FBRWQsK0hBZ0JjOzs7O1FBL0JaLDBDQUEwQjtRQUQxQixrRUFBNkQ7UUFJNUMsZUFBNEI7UUFBNUIsbURBQTRCLGlCQUFBLGlCQUFBOzt1RkRHbEMsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0UsMEJBQTBCLG1CQUVuQix1QkFBdUIsQ0FBQyxNQUFNOzZEQUdkLG1CQUFtQjtrQkFBbkQsS0FBSzttQkFBQyx3QkFBd0I7WUFFVixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFQSxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFFSSxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFQyxPQUFPO2tCQUExQixLQUFLO21CQUFDLFdBQVc7WUFFUSxXQUFXO2tCQUFwQyxNQUFNO21CQUFDLGdCQUFnQjtZQUVNLHNCQUFzQjtrQkFBbkQsU0FBUzttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9VcGxvYWRMaXRlcmFscyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tdXBsb2FkLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVXBsb2FkRHJhZ0Ryb3BBcmVhQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtZGlyZWN0b3J5LWNvbXBhdGlibGUnKSBkaXJlY3RvcnlDb21wYXRpYmxlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWhlaWdodCcpIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBsaXRlcmFsczogUG9VcGxvYWRMaXRlcmFscztcclxuXHJcbiAgQElucHV0KCdwLW92ZXJsYXknKSBvdmVybGF5OiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCdwLXNlbGVjdC1maWxlcycpIHNlbGVjdEZpbGVzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3RGaWxlc0xpbmsnKSBzZWxlY3RGaWxlc0xpbmtFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgZm9jdXMoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEZpbGVzTGlua0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJwby11cGxvYWQtZHJhZy1kcm9wLWFyZWFcIlxyXG4gIFtuZ0NsYXNzXT1cInsgJ3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1kaXNhYmxlZCc6IGRpc2FibGVkIH1cIlxyXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJwby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtY29udGFpbmVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3ZlcmxheSAmJiAhZGlzYWJsZWQ7IHRoZW4gb3ZlcmxheVRlbXBsYXRlOyBlbHNlIGRlZmF1bHRUZW1wbGF0ZVwiPiA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI292ZXJsYXlUZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cInBvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5LWljb24gcG8taWNvbiBwby1pY29uLXVwbG9hZC1jbG91ZFwiPjwvc3Bhbj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInBvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5LWxhYmVsXCI+XHJcbiAgICB7eyBkaXJlY3RvcnlDb21wYXRpYmxlID8gbGl0ZXJhbHM/LmRyb3BGb2xkZXJzSGVyZSA6IGxpdGVyYWxzPy5kcm9wRmlsZXNIZXJlIH19XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cInBvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1pY29uIHBvLWljb24gcG8taWNvbi11cGxvYWQtY2xvdWRcIj48L3NwYW4+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtbGFiZWxcIj5cclxuICAgIHt7IGRpcmVjdG9yeUNvbXBhdGlibGUgPyBsaXRlcmFscz8uZHJhZ0ZvbGRlcnNIZXJlIDogbGl0ZXJhbHM/LmRyYWdGaWxlc0hlcmUgfX1cclxuICA8L2Rpdj5cclxuXHJcbiAgPGJ1dHRvblxyXG4gICAgI3NlbGVjdEZpbGVzTGlua1xyXG4gICAgY2xhc3M9XCJwby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtc2VsZWN0LWZpbGVzXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICBbbmdDbGFzc109XCJ7ICdwby1jbGlja2FibGUnOiAhZGlzYWJsZWQgfVwiXHJcbiAgICAoY2xpY2spPVwic2VsZWN0RmlsZXMuZW1pdCgpXCJcclxuICA+XHJcbiAgICB7eyBkaXJlY3RvcnlDb21wYXRpYmxlID8gbGl0ZXJhbHM/LnNlbGVjdEZvbGRlck9uQ29tcHV0ZXIgOiBsaXRlcmFscz8uc2VsZWN0RmlsZXNPbkNvbXB1dGVyIH19XHJcbiAgPC9idXR0b24+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==