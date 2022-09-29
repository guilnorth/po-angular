import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoCalendarHeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵlistener("click", function PoCalendarHeaderComponent_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.previous.emit()); });
    i0.ɵɵelementEnd();
} }
function PoCalendarHeaderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵlistener("click", function PoCalendarHeaderComponent_span_4_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.next.emit()); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class PoCalendarHeaderComponent {
    constructor() {
        this.hidePrevious = false;
        this.hideNext = false;
        this.previous = new EventEmitter();
        this.next = new EventEmitter();
    }
}
PoCalendarHeaderComponent.ɵfac = function PoCalendarHeaderComponent_Factory(t) { return new (t || PoCalendarHeaderComponent)(); };
PoCalendarHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCalendarHeaderComponent, selectors: [["po-calendar-header"]], inputs: { hidePrevious: ["p-hide-previous", "hidePrevious"], hideNext: ["p-hide-next", "hideNext"] }, outputs: { previous: "p-previous", next: "p-next" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "po-calendar-header"], ["class", "po-calendar-header-left po-icon po-icon-arrow-left", 3, "click", 4, "ngIf"], ["attr-calendar", "", 1, "po-calendar-header-title"], ["class", "po-calendar-header-right po-icon po-icon-arrow-right", 3, "click", 4, "ngIf"], [1, "po-calendar-header-left", "po-icon", "po-icon-arrow-left", 3, "click"], [1, "po-calendar-header-right", "po-icon", "po-icon-arrow-right", 3, "click"]], template: function PoCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoCalendarHeaderComponent_span_1_Template, 1, 0, "span", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PoCalendarHeaderComponent_span_4_Template, 1, 0, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.previous == null ? null : ctx.previous.observers) && !ctx.hidePrevious);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", (ctx.next == null ? null : ctx.next.observers.length) && !ctx.hideNext);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCalendarHeaderComponent, [{
        type: Component,
        args: [{ selector: 'po-calendar-header', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-calendar-header\">\r\n  <span\r\n    *ngIf=\"previous?.observers && !hidePrevious\"\r\n    class=\"po-calendar-header-left po-icon po-icon-arrow-left\"\r\n    (click)=\"previous.emit()\"\r\n  >\r\n  </span>\r\n\r\n  <div class=\"po-calendar-header-title\" attr-calendar>\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <span\r\n    *ngIf=\"next?.observers.length && !hideNext\"\r\n    class=\"po-calendar-header-right po-icon po-icon-arrow-right\"\r\n    (click)=\"next.emit()\"\r\n  >\r\n  </span>\r\n</div>\r\n" }]
    }], function () { return []; }, { hidePrevious: [{
            type: Input,
            args: ['p-hide-previous']
        }], hideNext: [{
            type: Input,
            args: ['p-hide-next']
        }], previous: [{
            type: Output,
            args: ['p-previous']
        }], next: [{
            type: Output,
            args: ['p-next']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jYWxlbmRhci9wby1jYWxlbmRhci1oZWFkZXIvcG8tY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jYWxlbmRhci9wby1jYWxlbmRhci1oZWFkZXIvcG8tY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQzlGLCtCQUlDO0lBREMscUtBQVMsZUFBQSxzQkFBZSxDQUFBLElBQUM7SUFFM0IsaUJBQU87Ozs7SUFNUCwrQkFJQztJQURDLHFLQUFTLGVBQUEsa0JBQVcsQ0FBQSxJQUFDO0lBRXZCLGlCQUFPOzs7QURWVCxNQUFNLE9BQU8seUJBQXlCO0lBU3BDO1FBUjBCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFeEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFbkMsQ0FBQzs7a0dBVEwseUJBQXlCOzRFQUF6Qix5QkFBeUI7O1FDUHRDLDhCQUFnQztRQUM5Qiw0RUFLTztRQUVQLDhCQUFvRDtRQUNsRCxrQkFBeUI7UUFDM0IsaUJBQU07UUFFTiw0RUFLTztRQUNULGlCQUFNOztRQWhCRCxlQUEwQztRQUExQyxrR0FBMEM7UUFXMUMsZUFBeUM7UUFBekMsNkZBQXlDOzt1RkROakMseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0Usb0JBQW9CLG1CQUViLHVCQUF1QixDQUFDLE1BQU07c0NBR3JCLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRUYsUUFBUTtrQkFBN0IsS0FBSzttQkFBQyxhQUFhO1lBRUUsUUFBUTtrQkFBN0IsTUFBTTttQkFBQyxZQUFZO1lBRUYsSUFBSTtrQkFBckIsTUFBTTttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWNhbGVuZGFyLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1oaWRlLXByZXZpb3VzJykgaGlkZVByZXZpb3VzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgncC1oaWRlLW5leHQnKSBoaWRlTmV4dCA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCdwLXByZXZpb3VzJykgcHJldmlvdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3AtbmV4dCcpIG5leHQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tY2FsZW5kYXItaGVhZGVyXCI+XHJcbiAgPHNwYW5cclxuICAgICpuZ0lmPVwicHJldmlvdXM/Lm9ic2VydmVycyAmJiAhaGlkZVByZXZpb3VzXCJcclxuICAgIGNsYXNzPVwicG8tY2FsZW5kYXItaGVhZGVyLWxlZnQgcG8taWNvbiBwby1pY29uLWFycm93LWxlZnRcIlxyXG4gICAgKGNsaWNrKT1cInByZXZpb3VzLmVtaXQoKVwiXHJcbiAgPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInBvLWNhbGVuZGFyLWhlYWRlci10aXRsZVwiIGF0dHItY2FsZW5kYXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxzcGFuXHJcbiAgICAqbmdJZj1cIm5leHQ/Lm9ic2VydmVycy5sZW5ndGggJiYgIWhpZGVOZXh0XCJcclxuICAgIGNsYXNzPVwicG8tY2FsZW5kYXItaGVhZGVyLXJpZ2h0IHBvLWljb24gcG8taWNvbi1hcnJvdy1yaWdodFwiXHJcbiAgICAoY2xpY2spPVwibmV4dC5lbWl0KClcIlxyXG4gID5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=