import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-color-palette/po-color-palette.service";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação da representação da legenda, em formato de texto .
 */
export class PoTableColumnLabelComponent {
    constructor(poColorPaletteService) {
        this.poColorPaletteService = poColorPaletteService;
    }
    /** Objeto com os dados do label */
    set value(value) {
        if (value) {
            value.color = this.poColorPaletteService.getColor(value);
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
PoTableColumnLabelComponent.ɵfac = function PoTableColumnLabelComponent_Factory(t) { return new (t || PoTableColumnLabelComponent)(i0.ɵɵdirectiveInject(i1.PoColorPaletteService)); };
PoTableColumnLabelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableColumnLabelComponent, selectors: [["po-table-column-label"]], inputs: { value: ["p-value", "value"] }, decls: 2, vars: 3, template: function PoTableColumnLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("po-table-column-label po-" + (ctx.value == null ? null : ctx.value.color));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.value == null ? null : ctx.value.label, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableColumnLabelComponent, [{
        type: Component,
        args: [{ selector: 'po-table-column-label', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span [class]=\"'po-table-column-label po-' + value?.color\">\r\n  {{ value?.label }}\r\n</span>\r\n" }]
    }], function () { return [{ type: i1.PoColorPaletteService }]; }, { value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtY29sdW1uLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1jb2x1bW4tbGFiZWwvcG8tdGFibGUtY29sdW1uLWxhYmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1jb2x1bW4tbGFiZWwvcG8tdGFibGUtY29sdW1uLWxhYmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLMUU7Ozs7OztHQU1HO0FBT0gsTUFBTSxPQUFPLDJCQUEyQjtJQWV0QyxZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFHLENBQUM7SUFacEUsbUNBQW1DO0lBQ25DLElBQXNCLEtBQUssQ0FBQyxLQUF5QjtRQUNuRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7c0dBYlUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUNsQnhDLDRCQUEyRDtRQUN6RCxZQUNGO1FBQUEsaUJBQU87O1FBRkQseUZBQW9EO1FBQ3hELGVBQ0Y7UUFERSw0RUFDRjs7dUZEZ0JhLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLHVCQUF1QixtQkFFaEIsdUJBQXVCLENBQUMsTUFBTTt3RUFNekIsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ29sb3JQYWxldHRlU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvcG8tY29sb3ItcGFsZXR0ZS9wby1jb2xvci1wYWxldHRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1RhYmxlQ29sdW1uTGFiZWwgfSBmcm9tICcuL3BvLXRhYmxlLWNvbHVtbi1sYWJlbC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBwYXJhIGEgY3JpYcOnw6NvIGRhIHJlcHJlc2VudGHDp8OjbyBkYSBsZWdlbmRhLCBlbSBmb3JtYXRvIGRlIHRleHRvIC5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlLWNvbHVtbi1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRhYmxlLWNvbHVtbi1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFibGVDb2x1bW5MYWJlbENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IFBvVGFibGVDb2x1bW5MYWJlbDtcclxuXHJcbiAgLyoqIE9iamV0byBjb20gb3MgZGFkb3MgZG8gbGFiZWwgKi9cclxuICBASW5wdXQoJ3AtdmFsdWUnKSBzZXQgdmFsdWUodmFsdWU6IFBvVGFibGVDb2x1bW5MYWJlbCkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHZhbHVlLmNvbG9yID0gdGhpcy5wb0NvbG9yUGFsZXR0ZVNlcnZpY2UuZ2V0Q29sb3IodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCB2YWx1ZSgpOiBQb1RhYmxlQ29sdW1uTGFiZWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb0NvbG9yUGFsZXR0ZVNlcnZpY2U6IFBvQ29sb3JQYWxldHRlU2VydmljZSkge31cclxufVxyXG4iLCI8c3BhbiBbY2xhc3NdPVwiJ3BvLXRhYmxlLWNvbHVtbi1sYWJlbCBwby0nICsgdmFsdWU/LmNvbG9yXCI+XHJcbiAge3sgdmFsdWU/LmxhYmVsIH19XHJcbjwvc3Bhbj5cclxuIl19