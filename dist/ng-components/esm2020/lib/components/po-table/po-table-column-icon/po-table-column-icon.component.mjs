import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-table-icon/po-table-icon.component";
function PoTableColumnIconComponent_po_table_icon_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-table-icon", 1);
    i0.ɵɵlistener("p-click", function PoTableColumnIconComponent_po_table_icon_0_Template_po_table_icon_p_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const column_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.click(column_r1, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-clickable", ctx_r0.isClickable(column_r1))("p-color", ctx_r0.getColor(column_r1))("p-disabled", ctx_r0.isDisabled(column_r1))("p-icon", ctx_r0.getIcon(column_r1))("p-icon-tooltip", column_r1.tooltip);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por exibir ícones nas colunas.
 */
export class PoTableColumnIconComponent {
    constructor() {
        this._icons = [];
    }
    /** Lista de colunas com ícones. */
    set icons(icons) {
        this._icons = this.convertToColumnIcon(icons);
    }
    get icons() {
        return this._icons;
    }
    click(columnIcon, event) {
        const isAbleAction = !this.isDisabled(columnIcon);
        if (isAbleAction) {
            if (columnIcon.action) {
                columnIcon.action(this.row, columnIcon);
            }
            else if (this.column.action) {
                this.column.action(this.row, columnIcon);
            }
            event.stopPropagation();
        }
    }
    getColor(column) {
        const color = typeof column.color === 'function' ? column.color(this.row, column) : column.color;
        if (color) {
            return `po-text-${color}`;
        }
    }
    getIcon(column) {
        return column.icon || column.value;
    }
    isClickable(columnIcon) {
        return !!(!this.isDisabled(columnIcon) && (columnIcon.action || this.column.action));
    }
    isDisabled(column) {
        return column.disabled ? column.disabled(this.row) : false;
    }
    trackByFunction(index) {
        return index;
    }
    convertToColumnIcon(rowIcons) {
        if (Array.isArray(rowIcons)) {
            return rowIcons.map(rowIcon => (typeof rowIcon === 'string' ? { value: rowIcon } : rowIcon));
        }
        if (typeof rowIcons === 'string') {
            return [{ value: rowIcons }];
        }
        return [];
    }
}
PoTableColumnIconComponent.ɵfac = function PoTableColumnIconComponent_Factory(t) { return new (t || PoTableColumnIconComponent)(); };
PoTableColumnIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableColumnIconComponent, selectors: [["po-table-column-icon"]], inputs: { column: ["p-column", "column"], row: ["p-row", "row"], icons: ["p-icons", "icons"] }, decls: 1, vars: 2, consts: [[3, "p-clickable", "p-color", "p-disabled", "p-icon", "p-icon-tooltip", "p-click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "p-clickable", "p-color", "p-disabled", "p-icon", "p-icon-tooltip", "p-click"]], template: function PoTableColumnIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoTableColumnIconComponent_po_table_icon_0_Template, 1, 5, "po-table-icon", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.icons)("ngForTrackBy", ctx.trackByFunction);
    } }, dependencies: [i1.NgForOf, i2.PoTableIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableColumnIconComponent, [{
        type: Component,
        args: [{ selector: 'po-table-column-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: "<po-table-icon\r\n  *ngFor=\"let column of icons; trackBy: trackByFunction\"\r\n  [p-clickable]=\"isClickable(column)\"\r\n  [p-color]=\"getColor(column)\"\r\n  [p-disabled]=\"isDisabled(column)\"\r\n  [p-icon]=\"getIcon(column)\"\r\n  [p-icon-tooltip]=\"column.tooltip\"\r\n  (p-click)=\"click(column, $event)\"\r\n>\r\n</po-table-icon>\r\n" }]
    }], null, { column: [{
            type: Input,
            args: ['p-column']
        }], row: [{
            type: Input,
            args: ['p-row']
        }], icons: [{
            type: Input,
            args: ['p-icons']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtY29sdW1uLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYmxlL3BvLXRhYmxlLWNvbHVtbi1pY29uL3BvLXRhYmxlLWNvbHVtbi1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1jb2x1bW4taWNvbi9wby10YWJsZS1jb2x1bW4taWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQTFFLHdDQVFDO0lBREMsK1BBQVcsZUFBQSwrQkFBcUIsQ0FBQSxJQUFDO0lBRW5DLGlCQUFnQjs7OztJQVBkLDJEQUFtQyx1Q0FBQSw0Q0FBQSxxQ0FBQSxxQ0FBQTs7QURHckM7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQVlVLFdBQU0sR0FBNkIsRUFBRSxDQUFDO0tBMkQvQztJQXpEQyxtQ0FBbUM7SUFDbkMsSUFBc0IsS0FBSyxDQUFDLEtBQXdEO1FBQ2xGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUE2QixFQUFFLEtBQUs7UUFDeEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDMUM7WUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXlCO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqRyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sV0FBVyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsTUFBeUI7UUFDL0IsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQUE2QjtRQUN2QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBeUI7UUFDbEMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzdELENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNuQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxRQUEyRDtRQUNyRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsT0FBYSxRQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3JHO1FBRUQsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O29HQWpFVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ2pCdkMsK0ZBU2dCOztRQVJLLG1DQUFVLHFDQUFBOzt1RkRnQmxCLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNFLHNCQUFzQixtQkFFZix1QkFBdUIsQ0FBQyxNQUFNO2dCQUk1QixNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFHRCxHQUFHO2tCQUFsQixLQUFLO21CQUFDLE9BQU87WUFLUSxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UYWJsZUNvbHVtbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tdGFibGUtY29sdW1uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvVGFibGVDb2x1bW5JY29uIH0gZnJvbSAnLi9wby10YWJsZS1jb2x1bW4taWNvbi5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSByZXNwb25zw6F2ZWwgcG9yIGV4aWJpciDDrWNvbmVzIG5hcyBjb2x1bmFzLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10YWJsZS1jb2x1bW4taWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRhYmxlLWNvbHVtbi1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZUNvbHVtbkljb25Db21wb25lbnQge1xyXG4gIC8qKiBEZWZpbmnDp8OjbyBkYSBjb2x1bmEgcXVlIHV0aWxpemEgb3MgaWNvbmVzLiAqL1xyXG4gIEBJbnB1dCgncC1jb2x1bW4nKSBjb2x1bW46IFBvVGFibGVDb2x1bW47XHJcblxyXG4gIC8qKiBEYWRvcyBkYSBsaW5oYSBkYSB0YWJlbGEuICovXHJcbiAgQElucHV0KCdwLXJvdycpIHJvdzogYW55O1xyXG5cclxuICBwcml2YXRlIF9pY29uczogQXJyYXk8UG9UYWJsZUNvbHVtbkljb24+ID0gW107XHJcblxyXG4gIC8qKiBMaXN0YSBkZSBjb2x1bmFzIGNvbSDDrWNvbmVzLiAqL1xyXG4gIEBJbnB1dCgncC1pY29ucycpIHNldCBpY29ucyhpY29uczogQXJyYXk8UG9UYWJsZUNvbHVtbkljb24+IHwgQXJyYXk8c3RyaW5nPiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5faWNvbnMgPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkljb24oaWNvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGljb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb25zO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soY29sdW1uSWNvbjogUG9UYWJsZUNvbHVtbkljb24sIGV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0FibGVBY3Rpb24gPSAhdGhpcy5pc0Rpc2FibGVkKGNvbHVtbkljb24pO1xyXG5cclxuICAgIGlmIChpc0FibGVBY3Rpb24pIHtcclxuICAgICAgaWYgKGNvbHVtbkljb24uYWN0aW9uKSB7XHJcbiAgICAgICAgY29sdW1uSWNvbi5hY3Rpb24odGhpcy5yb3csIGNvbHVtbkljb24pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLmFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29sdW1uLmFjdGlvbih0aGlzLnJvdywgY29sdW1uSWNvbik7XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcihjb2x1bW46IFBvVGFibGVDb2x1bW5JY29uKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNvbG9yID0gdHlwZW9mIGNvbHVtbi5jb2xvciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5jb2xvcih0aGlzLnJvdywgY29sdW1uKSA6IGNvbHVtbi5jb2xvcjtcclxuXHJcbiAgICBpZiAoY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGBwby10ZXh0LSR7Y29sb3J9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEljb24oY29sdW1uOiBQb1RhYmxlQ29sdW1uSWNvbikge1xyXG4gICAgcmV0dXJuIGNvbHVtbi5pY29uIHx8IGNvbHVtbi52YWx1ZTtcclxuICB9XHJcblxyXG4gIGlzQ2xpY2thYmxlKGNvbHVtbkljb246IFBvVGFibGVDb2x1bW5JY29uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEoIXRoaXMuaXNEaXNhYmxlZChjb2x1bW5JY29uKSAmJiAoY29sdW1uSWNvbi5hY3Rpb24gfHwgdGhpcy5jb2x1bW4uYWN0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVkKGNvbHVtbjogUG9UYWJsZUNvbHVtbkljb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjb2x1bW4uZGlzYWJsZWQgPyBjb2x1bW4uZGlzYWJsZWQodGhpcy5yb3cpIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RnVuY3Rpb24oaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvQ29sdW1uSWNvbihyb3dJY29uczogQXJyYXk8UG9UYWJsZUNvbHVtbkljb24+IHwgQXJyYXk8c3RyaW5nPiB8IHN0cmluZyk6IEFycmF5PFBvVGFibGVDb2x1bW5JY29uPiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dJY29ucykpIHtcclxuICAgICAgcmV0dXJuICg8YW55PnJvd0ljb25zKS5tYXAocm93SWNvbiA9PiAodHlwZW9mIHJvd0ljb24gPT09ICdzdHJpbmcnID8geyB2YWx1ZTogcm93SWNvbiB9IDogcm93SWNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygcm93SWNvbnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBbeyB2YWx1ZTogcm93SWNvbnMgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tdGFibGUtaWNvblxyXG4gICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgaWNvbnM7IHRyYWNrQnk6IHRyYWNrQnlGdW5jdGlvblwiXHJcbiAgW3AtY2xpY2thYmxlXT1cImlzQ2xpY2thYmxlKGNvbHVtbilcIlxyXG4gIFtwLWNvbG9yXT1cImdldENvbG9yKGNvbHVtbilcIlxyXG4gIFtwLWRpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sdW1uKVwiXHJcbiAgW3AtaWNvbl09XCJnZXRJY29uKGNvbHVtbilcIlxyXG4gIFtwLWljb24tdG9vbHRpcF09XCJjb2x1bW4udG9vbHRpcFwiXHJcbiAgKHAtY2xpY2spPVwiY2xpY2soY29sdW1uLCAkZXZlbnQpXCJcclxuPlxyXG48L3BvLXRhYmxlLWljb24+XHJcbiJdfQ==