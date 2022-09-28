import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { convertToInt } from '../../../../utils/util';
import { PoUploadDragDropAreaComponent } from './po-upload-drag-drop-area/po-upload-drag-drop-area.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-upload-drag-drop.directive";
import * as i3 from "./po-upload-drag-drop-area-overlay/po-upload-drag-drop-area-overlay.component";
import * as i4 from "./po-upload-drag-drop-area/po-upload-drag-drop-area.component";
const _c0 = ["dragDropOverlay"];
function PoUploadDragDropComponent_po_upload_drag_drop_area_overlay_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-upload-drag-drop-area-overlay", 2, 3);
    i0.ɵɵlistener("p-area-element", function PoUploadDragDropComponent_po_upload_drag_drop_area_overlay_0_Template_po_upload_drag_drop_area_overlay_p_area_element_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onAreaElement($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-directory-compatible", ctx_r0.directoryCompatible)("p-disabled", ctx_r0.disabled)("p-literals", ctx_r0.literals)("p-target", ctx_r0.dragDropAreaComponent.elementRef);
} }
const PoUploadDragDropHeightDefault = 320;
const PoUploadDragDropHeightMin = 160;
export class PoUploadDragDropComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.fileChange = new EventEmitter();
        this.selectFiles = new EventEmitter();
        this.isDragOver = false;
        this._dragDropHeight = PoUploadDragDropHeightDefault;
    }
    set dragDropHeight(value) {
        const dragDropHeight = convertToInt(value, PoUploadDragDropHeightDefault);
        this._dragDropHeight = dragDropHeight < PoUploadDragDropHeightMin ? PoUploadDragDropHeightMin : dragDropHeight;
    }
    get dragDropHeight() {
        return this._dragDropHeight;
    }
    focus() {
        this.dragDropAreaComponent.focus();
    }
    onAreaElement(element) {
        this.areaElement = element;
        // necessário para não ocorrer o erro HasBeenChecked
        this.changeDetector.detectChanges();
    }
    onDragLeave() {
        this.isDragOver = false;
    }
    onDragOver() {
        this.isDragOver = true;
    }
    onFileChange(files) {
        this.isDragOver = false;
        this.fileChange.emit(files);
    }
}
PoUploadDragDropComponent.ɵfac = function PoUploadDragDropComponent_Factory(t) { return new (t || PoUploadDragDropComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoUploadDragDropComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoUploadDragDropComponent, selectors: [["po-upload-drag-drop"]], viewQuery: function PoUploadDragDropComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
        i0.ɵɵviewQuery(PoUploadDragDropAreaComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dragDropOverlayElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dragDropAreaComponent = _t.first);
    } }, inputs: { directoryCompatible: ["p-directory-compatible", "directoryCompatible"], disabled: ["p-disabled", "disabled"], literals: ["p-literals", "literals"], dragDropHeight: ["p-drag-drop-height", "dragDropHeight"] }, outputs: { fileChange: "p-file-change", selectFiles: "p-select-files" }, decls: 2, vars: 7, consts: [[3, "p-directory-compatible", "p-disabled", "p-literals", "p-target", "p-area-element", 4, "ngIf"], ["p-upload-drag-drop", "", 3, "p-area-element", "p-directory-compatible", "p-disabled", "p-height", "p-literals", "p-overlay", "p-drag-leave", "p-drag-over", "p-file-change", "p-select-files"], [3, "p-directory-compatible", "p-disabled", "p-literals", "p-target", "p-area-element"], ["dragDropOverlay", ""]], template: function PoUploadDragDropComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoUploadDragDropComponent_po_upload_drag_drop_area_overlay_0_Template, 2, 4, "po-upload-drag-drop-area-overlay", 0);
        i0.ɵɵelementStart(1, "po-upload-drag-drop-area", 1);
        i0.ɵɵlistener("p-drag-leave", function PoUploadDragDropComponent_Template_po_upload_drag_drop_area_p_drag_leave_1_listener() { return ctx.onDragLeave(); })("p-drag-over", function PoUploadDragDropComponent_Template_po_upload_drag_drop_area_p_drag_over_1_listener() { return ctx.onDragOver(); })("p-file-change", function PoUploadDragDropComponent_Template_po_upload_drag_drop_area_p_file_change_1_listener($event) { return ctx.onFileChange($event); })("p-select-files", function PoUploadDragDropComponent_Template_po_upload_drag_drop_area_p_select_files_1_listener() { return ctx.selectFiles.emit(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isDragOver);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-area-element", ctx.areaElement)("p-directory-compatible", ctx.directoryCompatible)("p-disabled", ctx.disabled)("p-height", ctx.dragDropHeight)("p-literals", ctx.literals)("p-overlay", false);
    } }, dependencies: [i1.NgIf, i2.PoUploadDragDropDirective, i3.PoUploadDragDropAreaOverlayComponent, i4.PoUploadDragDropAreaComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadDragDropComponent, [{
        type: Component,
        args: [{ selector: 'po-upload-drag-drop', changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-upload-drag-drop-area-overlay\r\n  #dragDropOverlay\r\n  *ngIf=\"isDragOver\"\r\n  [p-directory-compatible]=\"directoryCompatible\"\r\n  [p-disabled]=\"disabled\"\r\n  [p-literals]=\"literals\"\r\n  [p-target]=\"dragDropAreaComponent.elementRef\"\r\n  (p-area-element)=\"onAreaElement($event)\"\r\n>\r\n</po-upload-drag-drop-area-overlay>\r\n\r\n<po-upload-drag-drop-area\r\n  p-upload-drag-drop\r\n  [p-area-element]=\"areaElement\"\r\n  [p-directory-compatible]=\"directoryCompatible\"\r\n  [p-disabled]=\"disabled\"\r\n  [p-height]=\"dragDropHeight\"\r\n  [p-literals]=\"literals\"\r\n  [p-overlay]=\"false\"\r\n  (p-drag-leave)=\"onDragLeave()\"\r\n  (p-drag-over)=\"onDragOver()\"\r\n  (p-file-change)=\"onFileChange($event)\"\r\n  (p-select-files)=\"selectFiles.emit()\"\r\n>\r\n</po-upload-drag-drop-area>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { dragDropOverlayElement: [{
            type: ViewChild,
            args: ['dragDropOverlay', { read: ElementRef }]
        }], dragDropAreaComponent: [{
            type: ViewChild,
            args: [PoUploadDragDropAreaComponent, { static: true }]
        }], directoryCompatible: [{
            type: Input,
            args: ['p-directory-compatible']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], fileChange: [{
            type: Output,
            args: ['p-file-change']
        }], selectFiles: [{
            type: Output,
            args: ['p-select-files']
        }], dragDropHeight: [{
            type: Input,
            args: ['p-drag-drop-height']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWRyYWctZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tdXBsb2FkL3BvLXVwbG9hZC1kcmFnLWRyb3AvcG8tdXBsb2FkLWRyYWctZHJvcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tdXBsb2FkL3BvLXVwbG9hZC1kcmFnLWRyb3AvcG8tdXBsb2FkLWRyYWctZHJvcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQzs7Ozs7Ozs7O0lDYjlHLDhEQVFDO0lBREMscVBBQWtCLGVBQUEsNEJBQXFCLENBQUEsSUFBQztJQUUxQyxpQkFBbUM7OztJQU5qQyxtRUFBOEMsK0JBQUEsK0JBQUEscURBQUE7O0FEYWhELE1BQU0sNkJBQTZCLEdBQUcsR0FBRyxDQUFDO0FBQzFDLE1BQU0seUJBQXlCLEdBQUcsR0FBRyxDQUFDO0FBT3RDLE1BQU0sT0FBTyx5QkFBeUI7SUE2QnBDLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQW5CNUIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbkYsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVwQixvQkFBZSxHQUFZLDZCQUE2QixDQUFDO0lBWVQsQ0FBQztJQVZ6RCxJQUFpQyxjQUFjLENBQUMsS0FBYTtRQUMzRCxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLEdBQUcseUJBQXlCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDakgsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFvQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUUzQixvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2tHQXREVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjsrQkFDRSxVQUFVO3VCQUNyQyw2QkFBNkI7Ozs7OztRQzFCMUMsb0lBU21DO1FBRW5DLG1EQVlDO1FBSkMsc0lBQWdCLGlCQUFhLElBQUMsdUhBQ2YsZ0JBQVksSUFERyxpSUFFYix3QkFBb0IsSUFGUCw2SEFHWixzQkFBa0IsSUFITjtRQUtoQyxpQkFBMkI7O1FBdEJ4QixxQ0FBZ0I7UUFXakIsZUFBOEI7UUFBOUIsZ0RBQThCLG1EQUFBLDRCQUFBLGdDQUFBLDRCQUFBLG9CQUFBOzt1RkRXbkIseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0UscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU07b0VBR0ssc0JBQXNCO2tCQUF6RSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNVLHFCQUFxQjtrQkFBaEYsU0FBUzttQkFBQyw2QkFBNkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFekIsbUJBQW1CO2tCQUFuRCxLQUFLO21CQUFDLHdCQUF3QjtZQUVWLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVFLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVNLFVBQVU7a0JBQWxDLE1BQU07bUJBQUMsZUFBZTtZQUVHLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCO1lBT1MsY0FBYztrQkFBOUMsS0FBSzttQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9JbnQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvVXBsb2FkRHJhZ0Ryb3BBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9wby11cGxvYWQtZHJhZy1kcm9wLWFyZWEvcG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVXBsb2FkTGl0ZXJhbHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLXVwbG9hZC1saXRlcmFscy5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgUG9VcGxvYWREcmFnRHJvcEhlaWdodERlZmF1bHQgPSAzMjA7XHJcbmNvbnN0IFBvVXBsb2FkRHJhZ0Ryb3BIZWlnaHRNaW4gPSAxNjA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXVwbG9hZC1kcmFnLWRyb3AnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby11cGxvYWQtZHJhZy1kcm9wLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9VcGxvYWREcmFnRHJvcENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnZHJhZ0Ryb3BPdmVybGF5JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRyYWdEcm9wT3ZlcmxheUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChQb1VwbG9hZERyYWdEcm9wQXJlYUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgZHJhZ0Ryb3BBcmVhQ29tcG9uZW50OiBQb1VwbG9hZERyYWdEcm9wQXJlYUNvbXBvbmVudDtcclxuXHJcbiAgQElucHV0KCdwLWRpcmVjdG9yeS1jb21wYXRpYmxlJykgZGlyZWN0b3J5Q29tcGF0aWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzOiBQb1VwbG9hZExpdGVyYWxzO1xyXG5cclxuICBAT3V0cHV0KCdwLWZpbGUtY2hhbmdlJykgZmlsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1zZWxlY3QtZmlsZXMnKSBzZWxlY3RGaWxlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgYXJlYUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIGlzRHJhZ092ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfZHJhZ0Ryb3BIZWlnaHQ/OiBudW1iZXIgPSBQb1VwbG9hZERyYWdEcm9wSGVpZ2h0RGVmYXVsdDtcclxuXHJcbiAgQElucHV0KCdwLWRyYWctZHJvcC1oZWlnaHQnKSBzZXQgZHJhZ0Ryb3BIZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgZHJhZ0Ryb3BIZWlnaHQgPSBjb252ZXJ0VG9JbnQodmFsdWUsIFBvVXBsb2FkRHJhZ0Ryb3BIZWlnaHREZWZhdWx0KTtcclxuXHJcbiAgICB0aGlzLl9kcmFnRHJvcEhlaWdodCA9IGRyYWdEcm9wSGVpZ2h0IDwgUG9VcGxvYWREcmFnRHJvcEhlaWdodE1pbiA/IFBvVXBsb2FkRHJhZ0Ryb3BIZWlnaHRNaW4gOiBkcmFnRHJvcEhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnRHJvcEhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnRHJvcEhlaWdodDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBmb2N1cygpIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BBcmVhQ29tcG9uZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBvbkFyZWFFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLmFyZWFFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvLyBuZWNlc3PDoXJpbyBwYXJhIG7Do28gb2NvcnJlciBvIGVycm8gSGFzQmVlbkNoZWNrZWRcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgb25EcmFnTGVhdmUoKSB7XHJcbiAgICB0aGlzLmlzRHJhZ092ZXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uRHJhZ092ZXIoKSB7XHJcbiAgICB0aGlzLmlzRHJhZ092ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlQ2hhbmdlKGZpbGVzKSB7XHJcbiAgICB0aGlzLmlzRHJhZ092ZXIgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmZpbGVDaGFuZ2UuZW1pdChmaWxlcyk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtb3ZlcmxheVxyXG4gICNkcmFnRHJvcE92ZXJsYXlcclxuICAqbmdJZj1cImlzRHJhZ092ZXJcIlxyXG4gIFtwLWRpcmVjdG9yeS1jb21wYXRpYmxlXT1cImRpcmVjdG9yeUNvbXBhdGlibGVcIlxyXG4gIFtwLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbcC1saXRlcmFsc109XCJsaXRlcmFsc1wiXHJcbiAgW3AtdGFyZ2V0XT1cImRyYWdEcm9wQXJlYUNvbXBvbmVudC5lbGVtZW50UmVmXCJcclxuICAocC1hcmVhLWVsZW1lbnQpPVwib25BcmVhRWxlbWVudCgkZXZlbnQpXCJcclxuPlxyXG48L3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5PlxyXG5cclxuPHBvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYVxyXG4gIHAtdXBsb2FkLWRyYWctZHJvcFxyXG4gIFtwLWFyZWEtZWxlbWVudF09XCJhcmVhRWxlbWVudFwiXHJcbiAgW3AtZGlyZWN0b3J5LWNvbXBhdGlibGVdPVwiZGlyZWN0b3J5Q29tcGF0aWJsZVwiXHJcbiAgW3AtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtwLWhlaWdodF09XCJkcmFnRHJvcEhlaWdodFwiXHJcbiAgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIlxyXG4gIFtwLW92ZXJsYXldPVwiZmFsc2VcIlxyXG4gIChwLWRyYWctbGVhdmUpPVwib25EcmFnTGVhdmUoKVwiXHJcbiAgKHAtZHJhZy1vdmVyKT1cIm9uRHJhZ092ZXIoKVwiXHJcbiAgKHAtZmlsZS1jaGFuZ2UpPVwib25GaWxlQ2hhbmdlKCRldmVudClcIlxyXG4gIChwLXNlbGVjdC1maWxlcyk9XCJzZWxlY3RGaWxlcy5lbWl0KClcIlxyXG4+XHJcbjwvcG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhPlxyXG4iXX0=