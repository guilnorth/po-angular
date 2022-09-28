import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class PoAccordionItemHeaderComponent {
    constructor() {
        this.expanded = false;
        this.toggle = new EventEmitter();
    }
    onClick() {
        this.expanded = !this.expanded;
        this.toggle.emit(this.expanded);
    }
}
PoAccordionItemHeaderComponent.ɵfac = function PoAccordionItemHeaderComponent_Factory(t) { return new (t || PoAccordionItemHeaderComponent)(); };
PoAccordionItemHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAccordionItemHeaderComponent, selectors: [["po-accordion-item-header"]], inputs: { expanded: ["p-expanded", "expanded"], label: ["p-label", "label"] }, outputs: { toggle: "p-toggle" }, decls: 6, vars: 1, consts: [[1, "po-accordion-item-header"], [1, "po-accordion-item-header-button", "po-clickable", 3, "click"], [1, "po-text-ellipsis", "po-accordion-item-header-title"], [1, "po-icon", "po-accordion-item-header-icon", "po-icon-arrow-down"], ["icon", ""]], template: function PoAccordionItemHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0)(1, "button", 1);
        i0.ɵɵlistener("click", function PoAccordionItemHeaderComponent_Template_button_click_1_listener() { return ctx.onClick(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "span", 3, 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.label);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAccordionItemHeaderComponent, [{
        type: Component,
        args: [{ selector: 'po-accordion-item-header', changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"po-accordion-item-header\">\r\n  <button class=\"po-accordion-item-header-button po-clickable\" (click)=\"onClick()\">\r\n    <div class=\"po-text-ellipsis po-accordion-item-header-title\">{{ label }}</div>\r\n    <span #icon class=\"po-icon po-accordion-item-header-icon po-icon-arrow-down\"> </span>\r\n  </button>\r\n</header>\r\n" }]
    }], null, { expanded: [{
            type: Input,
            args: ['p-expanded']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], toggle: [{
            type: Output,
            args: ['p-toggle']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLWl0ZW0taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1hY2NvcmRpb24vcG8tYWNjb3JkaW9uLWl0ZW0taGVhZGVyL3BvLWFjY29yZGlvbi1pdGVtLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYWNjb3JkaW9uL3BvLWFjY29yZGlvbi1pdGVtLWhlYWRlci9wby1hY2NvcmRpb24taXRlbS1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPaEcsTUFBTSxPQUFPLDhCQUE4QjtJQUwzQztRQU11QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0tBTzFEO0lBTEMsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs0R0FYVSw4QkFBOEI7aUZBQTlCLDhCQUE4QjtRQ1AzQyxpQ0FBeUMsZ0JBQUE7UUFDc0IsMkdBQVMsYUFBUyxJQUFDO1FBQzlFLDhCQUE2RDtRQUFBLFlBQVc7UUFBQSxpQkFBTTtRQUM5RSw2QkFBcUY7UUFDdkYsaUJBQVMsRUFBQTs7UUFGc0QsZUFBVztRQUFYLCtCQUFXOzt1RkRLL0QsOEJBQThCO2NBTDFDLFNBQVM7MkJBQ0UsMEJBQTBCLG1CQUVuQix1QkFBdUIsQ0FBQyxNQUFNO2dCQUcxQixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFRCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFSSxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tYWNjb3JkaW9uLWl0ZW0taGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BvLWFjY29yZGlvbi1pdGVtLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQWNjb3JkaW9uSXRlbUhlYWRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLWV4cGFuZGVkJykgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgncC10b2dnbGUnKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XHJcblxyXG4gICAgdGhpcy50b2dnbGUuZW1pdCh0aGlzLmV4cGFuZGVkKTtcclxuICB9XHJcbn1cclxuIiwiPGhlYWRlciBjbGFzcz1cInBvLWFjY29yZGlvbi1pdGVtLWhlYWRlclwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJwby1hY2NvcmRpb24taXRlbS1oZWFkZXItYnV0dG9uIHBvLWNsaWNrYWJsZVwiIChjbGljayk9XCJvbkNsaWNrKClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby10ZXh0LWVsbGlwc2lzIHBvLWFjY29yZGlvbi1pdGVtLWhlYWRlci10aXRsZVwiPnt7IGxhYmVsIH19PC9kaXY+XHJcbiAgICA8c3BhbiAjaWNvbiBjbGFzcz1cInBvLWljb24gcG8tYWNjb3JkaW9uLWl0ZW0taGVhZGVyLWljb24gcG8taWNvbi1hcnJvdy1kb3duXCI+IDwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuPC9oZWFkZXI+XHJcbiJdfQ==