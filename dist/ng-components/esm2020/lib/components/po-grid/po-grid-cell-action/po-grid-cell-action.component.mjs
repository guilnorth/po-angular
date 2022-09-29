import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PoGridCellActionComponent {
    constructor() {
        this.position = '';
    }
    onKeyDownContent(event) {
        // ENTER
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
}
PoGridCellActionComponent.ɵfac = function PoGridCellActionComponent_Factory(t) { return new (t || PoGridCellActionComponent)(); };
PoGridCellActionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGridCellActionComponent, selectors: [["po-grid-cell-action"]], inputs: { position: ["p-position", "position"], value: ["p-value", "value"] }, decls: 5, vars: 2, consts: [["tabindex", "0", 1, "po-grid-cell-action-content", 3, "id", "keydown"], ["contentElement", ""]], template: function PoGridCellActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "div", 0, 1);
        i0.ɵɵlistener("keydown", function PoGridCellActionComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDownContent($event); });
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.position);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.value || "\u00A0");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGridCellActionComponent, [{
        type: Component,
        args: [{ selector: 'po-grid-cell-action', template: "<div>\r\n  <div\r\n    #contentElement\r\n    [id]=\"position\"\r\n    class=\"po-grid-cell-action-content\"\r\n    tabindex=\"0\"\r\n    (keydown)=\"onKeyDownContent($event)\"\r\n  >\r\n    <span>{{ value || '&nbsp;' }}</span>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return []; }, { position: [{
            type: Input,
            args: ['p-position']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ3JpZC1jZWxsLWFjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ3JpZC9wby1ncmlkLWNlbGwtYWN0aW9uL3BvLWdyaWQtY2VsbC1hY3Rpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdyaWQvcG8tZ3JpZC1jZWxsLWFjdGlvbi9wby1ncmlkLWNlbGwtYWN0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxNQUFNLE9BQU8seUJBQXlCO0lBS3BDO1FBSnFCLGFBQVEsR0FBWSxFQUFFLENBQUM7SUFJN0IsQ0FBQztJQUVoQixnQkFBZ0IsQ0FBQyxLQUFLO1FBQ3BCLFFBQVE7UUFDUixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2tHQVpVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDTnRDLDJCQUFLLGdCQUFBO1FBTUQsNkdBQVcsNEJBQXdCLElBQUM7UUFFcEMsNEJBQU07UUFBQSxZQUF1QjtRQUFBLGlCQUFPLEVBQUEsRUFBQTs7UUFMcEMsZUFBZTtRQUFmLGlDQUFlO1FBS1QsZUFBdUI7UUFBdkIsMkNBQXVCOzt1RkRGcEIseUJBQXlCO2NBSnJDLFNBQVM7MkJBQ0UscUJBQXFCO3NDQUlWLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVELEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZ3JpZC1jZWxsLWFjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWdyaWQtY2VsbC1hY3Rpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0dyaWRDZWxsQWN0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtcG9zaXRpb24nKSBwb3NpdGlvbj86IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoJ3AtdmFsdWUnKSB2YWx1ZT86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbktleURvd25Db250ZW50KGV2ZW50KSB7XHJcbiAgICAvLyBFTlRFUlxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPGRpdlxyXG4gICAgI2NvbnRlbnRFbGVtZW50XHJcbiAgICBbaWRdPVwicG9zaXRpb25cIlxyXG4gICAgY2xhc3M9XCJwby1ncmlkLWNlbGwtYWN0aW9uLWNvbnRlbnRcIlxyXG4gICAgdGFiaW5kZXg9XCIwXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bkNvbnRlbnQoJGV2ZW50KVwiXHJcbiAgPlxyXG4gICAgPHNwYW4+e3sgdmFsdWUgfHwgJyZuYnNwOycgfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=