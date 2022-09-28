import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["inputElement"];
const _c1 = ["contentElement"];
function PoGridCellComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoGridCellComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3, 4);
    i0.ɵɵlistener("keydown", function PoGridCellComponent_ng_template_2_Template_div_keydown_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onKeyDownContent($event)); })("dblclick", function PoGridCellComponent_ng_template_2_Template_div_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.dblclick($event)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("po-grid-cell-content po-grid-cell-", ctx_r2.align, " ", !ctx_r2.value && ctx_r2.required ? "po-grid-cell-required" : "", "");
    i0.ɵɵpropertyInterpolate("tabindex", ctx_r2.readonly ? -1 : 0);
    i0.ɵɵproperty("id", ctx_r2.position);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.value || "\u00A0");
} }
function PoGridCellComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("ngModelChange", function PoGridCellComponent_ng_template_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.editValue = $event); })("keydown.arrowup", function PoGridCellComponent_ng_template_4_Template_input_keydown_arrowup_0_listener($event) { return $event.stopPropagation(); })("keydown.arrowdown", function PoGridCellComponent_ng_template_4_Template_input_keydown_arrowdown_0_listener($event) { return $event.stopPropagation(); })("keydown.arrowleft", function PoGridCellComponent_ng_template_4_Template_input_keydown_arrowleft_0_listener($event) { return $event.stopPropagation(); })("keydown.arrowright", function PoGridCellComponent_ng_template_4_Template_input_keydown_arrowright_0_listener($event) { return $event.stopPropagation(); })("keydown", function PoGridCellComponent_ng_template_4_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onKeyDownInput($event)); })("blur", function PoGridCellComponent_ng_template_4_Template_input_blur_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.onBlurInput()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r4.position)("ngModel", ctx_r4.editValue);
} }
export class PoGridCellComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.align = 'left';
        this.freeze = false;
        this.tabIndex = -1;
        this.position = '';
        this.readonly = false;
        this.required = false;
        this.valueChange = new EventEmitter();
        this._value = '';
        this.edit = false;
        this.editValue = '';
    }
    set width(value) {
        this._width = value;
        if (this.freeze && !this._width) {
            this._width = 100;
        }
    }
    get width() {
        return this._width ? `${this._width}px` : '100%';
    }
    set value(value) {
        this._value = value;
        this.valueChange.emit(this._value);
    }
    get value() {
        return this._value;
    }
    onKeyDownContent(event) {
        // BACKSPACE / DELETE
        if (!event.ctrlKey && (event.keyCode === 8 || event.keyCode === 46)) {
            if (this.readonly) {
                return;
            }
            event.preventDefault();
            this.value = '';
            return;
        }
        // ENTER
        if (event.keyCode === 13) {
            event.preventDefault();
            this.onEditCell(this.value);
            return;
        }
        // A..Z - 0..9
        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 48 && event.keyCode <= 57)) {
            event.preventDefault();
            this.onEditCell(event.key);
        }
    }
    dblclick(event) {
        event.preventDefault();
        this.onEditCell(this.value);
    }
    onBlurInput() {
        this.value = this.editValue;
        this.editValue = undefined;
        this.edit = false;
    }
    onKeyDownInput(event) {
        // ENTER
        if (event.keyCode === 13) {
            event.target.blur();
            this.changeDetectorRef.detectChanges();
            this.contentElement.nativeElement.focus();
        }
        // ESCAPE
        if (event.keyCode === 27) {
            this.editValue = undefined;
            this.edit = false;
            this.changeDetectorRef.detectChanges();
            this.contentElement.nativeElement.focus();
            event.stopPropagation();
        }
    }
    onEditCell(value) {
        if (this.readonly) {
            return;
        }
        this.editValue = value;
        this.edit = true;
        this.changeDetectorRef.detectChanges();
        this.inputElement.nativeElement.focus();
    }
}
PoGridCellComponent.ɵfac = function PoGridCellComponent_Factory(t) { return new (t || PoGridCellComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoGridCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGridCellComponent, selectors: [["po-grid-cell"]], viewQuery: function PoGridCellComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, inputs: { align: ["p-align", "align"], freeze: ["p-freeze", "freeze"], tabIndex: ["p-tab-index", "tabIndex"], position: ["p-position", "position"], readonly: ["p-readonly", "readonly"], required: ["p-required", "required"], width: ["p-width", "width"], value: ["p-value", "value"] }, outputs: { valueChange: "p-valueChange" }, decls: 6, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["content", ""], ["input", ""], [3, "id", "tabindex", "keydown", "dblclick"], ["contentElement", ""], [1, "po-grid-cell-input", 3, "id", "ngModel", "ngModelChange", "keydown.arrowup", "keydown.arrowdown", "keydown.arrowleft", "keydown.arrowright", "keydown", "blur"], ["inputElement", ""]], template: function PoGridCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, PoGridCellComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(2, PoGridCellComponent_ng_template_2_Template, 4, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PoGridCellComponent_ng_template_4_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.edit)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, dependencies: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGridCellComponent, [{
        type: Component,
        args: [{ selector: 'po-grid-cell', template: "<div>\r\n  <ng-container *ngIf=\"edit; then input; else content\"></ng-container>\r\n\r\n  <ng-template #content>\r\n    <div\r\n      #contentElement\r\n      [id]=\"position\"\r\n      class=\"po-grid-cell-content po-grid-cell-{{ align }} {{ !value && required ? 'po-grid-cell-required' : '' }}\"\r\n      (keydown)=\"onKeyDownContent($event)\"\r\n      tabindex=\"{{ readonly ? -1 : 0 }}\"\r\n      (dblclick)=\"dblclick($event)\"\r\n    >\r\n      <span>{{ value || '&nbsp;' }}</span>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #input>\r\n    <input\r\n      [id]=\"position\"\r\n      #inputElement\r\n      class=\"po-grid-cell-input\"\r\n      [(ngModel)]=\"editValue\"\r\n      (keydown.arrowup)=\"$event.stopPropagation()\"\r\n      (keydown.arrowdown)=\"$event.stopPropagation()\"\r\n      (keydown.arrowleft)=\"$event.stopPropagation()\"\r\n      (keydown.arrowright)=\"$event.stopPropagation()\"\r\n      (keydown)=\"onKeyDownInput($event)\"\r\n      (blur)=\"onBlurInput()\"\r\n    />\r\n  </ng-template>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { align: [{
            type: Input,
            args: ['p-align']
        }], freeze: [{
            type: Input,
            args: ['p-freeze']
        }], tabIndex: [{
            type: Input,
            args: ['p-tab-index']
        }], position: [{
            type: Input,
            args: ['p-position']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], valueChange: [{
            type: Output,
            args: ['p-valueChange']
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement']
        }], width: [{
            type: Input,
            args: ['p-width']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ3JpZC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1ncmlkL3BvLWdyaWQtY2VsbC9wby1ncmlkLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdyaWQvcG8tZ3JpZC1jZWxsL3BvLWdyaWQtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWlDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNDL0csd0JBQW9FOzs7O0lBR2xFLGlDQU9DO0lBSEMsK0tBQVcsZUFBQSwrQkFBd0IsQ0FBQSxJQUFDLG9LQUV4QixlQUFBLHVCQUFnQixDQUFBLElBRlE7SUFJcEMsNEJBQU07SUFBQSxZQUF1QjtJQUFBLGlCQUFPLEVBQUE7OztJQUxwQyx1SkFBNkc7SUFFN0csOERBQWtDO0lBSGxDLG9DQUFlO0lBTVQsZUFBdUI7SUFBdkIsOENBQXVCOzs7O0lBSy9CLG1DQVdFO0lBUEEsNk9BQXVCLDBIQUNKLHdCQUF3QixJQURwQiw4SEFFRix3QkFBd0IsSUFGdEIsOEhBR0Ysd0JBQXdCLElBSHRCLGdJQUlELHdCQUF3QixJQUp2QixzS0FLWixlQUFBLDhCQUFzQixDQUFBLElBTFYsMEpBTWYsZUFBQSxxQkFBYSxDQUFBLElBTkU7SUFKekIsaUJBV0U7OztJQVZBLG9DQUFlLDZCQUFBOztBRFpyQixNQUFNLE9BQU8sbUJBQW1CO0lBMkM5QixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTFDdEMsVUFBSyxHQUFZLE1BQU0sQ0FBQztRQUV2QixXQUFNLEdBQWEsS0FBSyxDQUFD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RSxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFTSxXQUFXO2tCQUFuQyxNQUFNO21CQUFDLGVBQWU7WUFFSSxZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7WUFDSSxjQUFjO2tCQUExQyxTQUFTO21CQUFDLGdCQUFnQjtZQVFMLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUztZQVdNLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWdyaWQtY2VsbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWdyaWQtY2VsbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvR3JpZENlbGxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1hbGlnbicpIGFsaWduPzogc3RyaW5nID0gJ2xlZnQnO1xyXG5cclxuICBASW5wdXQoJ3AtZnJlZXplJykgZnJlZXplPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ3AtdGFiLWluZGV4JykgdGFiSW5kZXg/OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgQElucHV0KCdwLXBvc2l0aW9uJykgcG9zaXRpb24/OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KCdwLXJlYWRvbmx5JykgcmVhZG9ubHk/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgncC1yZXF1aXJlZCcpIHJlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCdwLXZhbHVlQ2hhbmdlJykgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIF92YWx1ZTogYW55ID0gJyc7XHJcbiAgZWRpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGVkaXRWYWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHByaXZhdGUgX3dpZHRoOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgncC13aWR0aCcpIHNldCB3aWR0aCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmZyZWV6ZSAmJiAhdGhpcy5fd2lkdGgpIHtcclxuICAgICAgdGhpcy5fd2lkdGggPSAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCB3aWR0aCgpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoID8gYCR7dGhpcy5fd2lkdGh9cHhgIDogJzEwMCUnO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLXZhbHVlJykgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xyXG4gIH1cclxuICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBvbktleURvd25Db250ZW50KGV2ZW50OiBhbnkpIHtcclxuICAgIC8vIEJBQ0tTUEFDRSAvIERFTEVURVxyXG4gICAgaWYgKCFldmVudC5jdHJsS2V5ICYmIChldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSkge1xyXG4gICAgICBpZiAodGhpcy5yZWFkb25seSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRU5URVJcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLm9uRWRpdENlbGwodGhpcy52YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBLi5aIC0gMC4uOVxyXG4gICAgaWYgKChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApIHx8IChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMub25FZGl0Q2VsbChldmVudC5rZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGJsY2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLm9uRWRpdENlbGwodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXJJbnB1dCgpIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmVkaXRWYWx1ZTtcclxuICAgIHRoaXMuZWRpdFZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5lZGl0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbktleURvd25JbnB1dChldmVudDogYW55KSB7XHJcbiAgICAvLyBFTlRFUlxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFU0NBUEVcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICB0aGlzLmVkaXRWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRWRpdENlbGwodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWRpdFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVkaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXQ7IHRoZW4gaW5wdXQ7IGVsc2UgY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XHJcbiAgICA8ZGl2XHJcbiAgICAgICNjb250ZW50RWxlbWVudFxyXG4gICAgICBbaWRdPVwicG9zaXRpb25cIlxyXG4gICAgICBjbGFzcz1cInBvLWdyaWQtY2VsbC1jb250ZW50IHBvLWdyaWQtY2VsbC17eyBhbGlnbiB9fSB7eyAhdmFsdWUgJiYgcmVxdWlyZWQgPyAncG8tZ3JpZC1jZWxsLXJlcXVpcmVkJyA6ICcnIH19XCJcclxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duQ29udGVudCgkZXZlbnQpXCJcclxuICAgICAgdGFiaW5kZXg9XCJ7eyByZWFkb25seSA/IC0xIDogMCB9fVwiXHJcbiAgICAgIChkYmxjbGljayk9XCJkYmxjbGljaygkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPHNwYW4+e3sgdmFsdWUgfHwgJyZuYnNwOycgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI2lucHV0PlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtpZF09XCJwb3NpdGlvblwiXHJcbiAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgICAgY2xhc3M9XCJwby1ncmlkLWNlbGwtaW5wdXRcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cImVkaXRWYWx1ZVwiXHJcbiAgICAgIChrZXlkb3duLmFycm93dXApPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgKGtleWRvd24uYXJyb3dkb3duKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgIChrZXlkb3duLmFycm93bGVmdCk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAoa2V5ZG93bi5hcnJvd3JpZ2h0KT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bklucHV0KCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXJJbnB1dCgpXCJcclxuICAgIC8+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbiJdfQ==