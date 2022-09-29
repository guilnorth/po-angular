import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoGaugeTitleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
export class PoGaugeTitleComponent {
}
PoGaugeTitleComponent.ɵfac = function PoGaugeTitleComponent_Factory(t) { return new (t || PoGaugeTitleComponent)(); };
PoGaugeTitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugeTitleComponent, selectors: [["po-gauge-title"]], inputs: { title: ["p-title", "title"] }, decls: 1, vars: 1, consts: [["class", "po-gauge-title", 4, "ngIf"], [1, "po-gauge-title"]], template: function PoGaugeTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoGaugeTitleComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, dependencies: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeTitleComponent, [{
        type: Component,
        args: [{ selector: 'po-gauge-title', template: "<div *ngIf=\"title\" class=\"po-gauge-title\">{{ title }}</div>\r\n" }]
    }], null, { title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdhdWdlL3BvLWdhdWdlLXRpdGxlL3BvLWdhdWdlLXRpdGxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS10aXRsZS9wby1nYXVnZS10aXRsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0F6RCw4QkFBMEM7SUFBQSxZQUFXO0lBQUEsaUJBQU07OztJQUFqQixlQUFXO0lBQVgsa0NBQVc7O0FETXJELE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ05sQyxzRUFBMkQ7O1FBQXJELGdDQUFXOzt1RkRNSixxQkFBcUI7Y0FKakMsU0FBUzsyQkFDRSxnQkFBZ0I7Z0JBSVIsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWdhdWdlLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZ2F1Z2UtdGl0bGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0dhdWdlVGl0bGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC10aXRsZScpIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJ0aXRsZVwiIGNsYXNzPVwicG8tZ2F1Z2UtdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxyXG4iXX0=