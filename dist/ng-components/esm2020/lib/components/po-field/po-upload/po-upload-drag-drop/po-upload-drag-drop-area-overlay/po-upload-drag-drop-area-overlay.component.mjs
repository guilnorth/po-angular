import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../po-upload-drag-drop-area/po-upload-drag-drop-area.component";
const _c0 = ["DragDropAreaFixed"];
export class PoUploadDragDropAreaOverlayComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.areaElement = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.target) {
            this.setPosition(this.target);
        }
        this.areaElement.emit(this.DragDropAreaFixed.nativeElement);
    }
    setPosition(targetElement) {
        const boundingClientRect = targetElement.nativeElement.getBoundingClientRect();
        const clientRectKeys = ['bottom', 'left', 'height', 'right', 'top', 'width'];
        clientRectKeys.forEach(clientRectKey => {
            const clientRectValue = boundingClientRect[clientRectKey];
            this.renderer.setStyle(this.DragDropAreaFixed.nativeElement, clientRectKey, `${clientRectValue}px`);
        });
    }
}
PoUploadDragDropAreaOverlayComponent.ɵfac = function PoUploadDragDropAreaOverlayComponent_Factory(t) { return new (t || PoUploadDragDropAreaOverlayComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoUploadDragDropAreaOverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoUploadDragDropAreaOverlayComponent, selectors: [["po-upload-drag-drop-area-overlay"]], viewQuery: function PoUploadDragDropAreaOverlayComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.DragDropAreaFixed = _t.first);
    } }, inputs: { directoryCompatible: ["p-directory-compatible", "directoryCompatible"], disabled: ["p-disabled", "disabled"], literals: ["p-literals", "literals"], target: ["p-target", "target"] }, outputs: { areaElement: "p-area-element" }, decls: 3, vars: 4, consts: [[1, "po-overlay-fixed"], [1, "po-upload-drag-drop-area-overlay", 3, "p-directory-compatible", "p-disabled", "p-literals", "p-overlay"], ["DragDropAreaFixed", ""]], template: function PoUploadDragDropAreaOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "po-upload-drag-drop-area", 1, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-directory-compatible", ctx.directoryCompatible)("p-disabled", ctx.disabled)("p-literals", ctx.literals)("p-overlay", true);
    } }, dependencies: [i1.PoUploadDragDropAreaComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadDragDropAreaOverlayComponent, [{
        type: Component,
        args: [{ selector: 'po-upload-drag-drop-area-overlay', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-overlay-fixed\">\r\n  <po-upload-drag-drop-area\r\n    #DragDropAreaFixed\r\n    class=\"po-upload-drag-drop-area-overlay\"\r\n    [p-directory-compatible]=\"directoryCompatible\"\r\n    [p-disabled]=\"disabled\"\r\n    [p-literals]=\"literals\"\r\n    [p-overlay]=\"true\"\r\n  >\r\n  </po-upload-drag-drop-area>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { DragDropAreaFixed: [{
            type: ViewChild,
            args: ['DragDropAreaFixed', { read: ElementRef, static: true }]
        }], directoryCompatible: [{
            type: Input,
            args: ['p-directory-compatible']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], target: [{
            type: Input,
            args: ['p-target']
        }], areaElement: [{
            type: Output,
            args: ['p-area-element']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhLW92ZXJsYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXVwbG9hZC9wby11cGxvYWQtZHJhZy1kcm9wL3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5L3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLWRyYWctZHJvcC9wby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtb3ZlcmxheS9wby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtb3ZlcmxheS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7O0FBU3ZCLE1BQU0sT0FBTyxvQ0FBb0M7SUFhL0MsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUZiLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFekMsQ0FBQztJQUUzQyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxhQUF5QjtRQUMzQyxNQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvRSxNQUFNLGNBQWMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0UsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxNQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxHQUFHLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDdEcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3SEEvQlUsb0NBQW9DO3VGQUFwQyxvQ0FBb0M7K0JBQ1AsVUFBVTs7Ozs7UUNwQnBELDhCQUE4QjtRQUM1QixpREFRMkI7UUFDN0IsaUJBQU07O1FBTkYsZUFBOEM7UUFBOUMsZ0VBQThDLDRCQUFBLDRCQUFBLG1CQUFBOzt1RkRlckMsb0NBQW9DO2NBTGhELFNBQVM7MkJBQ0Usa0NBQWtDLG1CQUUzQix1QkFBdUIsQ0FBQyxNQUFNOzREQUdxQixpQkFBaUI7a0JBQXBGLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFakMsbUJBQW1CO2tCQUFuRCxLQUFLO21CQUFDLHdCQUF3QjtZQUVWLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVFLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVBLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUVTLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9VcGxvYWRMaXRlcmFscyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcG8tdXBsb2FkLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJ3BvLXVwbG9hZC1kcmFnLWRyb3AtYXJlYS1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9VcGxvYWREcmFnRHJvcEFyZWFPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnRHJhZ0Ryb3BBcmVhRml4ZWQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBEcmFnRHJvcEFyZWFGaXhlZDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCdwLWRpcmVjdG9yeS1jb21wYXRpYmxlJykgZGlyZWN0b3J5Q29tcGF0aWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzOiBQb1VwbG9hZExpdGVyYWxzO1xyXG5cclxuICBASW5wdXQoJ3AtdGFyZ2V0JykgdGFyZ2V0OiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCdwLWFyZWEtZWxlbWVudCcpIGFyZWFFbGVtZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCkge1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMudGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHRoaXMuYXJlYUVsZW1lbnQuZW1pdCh0aGlzLkRyYWdEcm9wQXJlYUZpeGVkLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbih0YXJnZXRFbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0YXJnZXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBjbGllbnRSZWN0S2V5cyA9IFsnYm90dG9tJywgJ2xlZnQnLCAnaGVpZ2h0JywgJ3JpZ2h0JywgJ3RvcCcsICd3aWR0aCddO1xyXG5cclxuICAgIGNsaWVudFJlY3RLZXlzLmZvckVhY2goY2xpZW50UmVjdEtleSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWVudFJlY3RWYWx1ZSA9IGJvdW5kaW5nQ2xpZW50UmVjdFtjbGllbnRSZWN0S2V5XTtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5EcmFnRHJvcEFyZWFGaXhlZC5uYXRpdmVFbGVtZW50LCBjbGllbnRSZWN0S2V5LCBgJHtjbGllbnRSZWN0VmFsdWV9cHhgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tb3ZlcmxheS1maXhlZFwiPlxyXG4gIDxwby11cGxvYWQtZHJhZy1kcm9wLWFyZWFcclxuICAgICNEcmFnRHJvcEFyZWFGaXhlZFxyXG4gICAgY2xhc3M9XCJwby11cGxvYWQtZHJhZy1kcm9wLWFyZWEtb3ZlcmxheVwiXHJcbiAgICBbcC1kaXJlY3RvcnktY29tcGF0aWJsZV09XCJkaXJlY3RvcnlDb21wYXRpYmxlXCJcclxuICAgIFtwLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIFtwLWxpdGVyYWxzXT1cImxpdGVyYWxzXCJcclxuICAgIFtwLW92ZXJsYXldPVwidHJ1ZVwiXHJcbiAgPlxyXG4gIDwvcG8tdXBsb2FkLWRyYWctZHJvcC1hcmVhPlxyXG48L2Rpdj5cclxuIl19