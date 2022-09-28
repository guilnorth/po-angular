import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoAccordionItemBodyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵproperty("@toggleBody", undefined);
} }
const _c0 = ["*"];
export class PoAccordionItemBodyComponent {
    constructor() {
        this.expanded = false;
    }
}
PoAccordionItemBodyComponent.ɵfac = function PoAccordionItemBodyComponent_Factory(t) { return new (t || PoAccordionItemBodyComponent)(); };
PoAccordionItemBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAccordionItemBodyComponent, selectors: [["po-accordion-item-body"]], inputs: { expanded: ["p-expanded", "expanded"] }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "po-accordion-item-body", 4, "ngIf"], [1, "po-accordion-item-body"], [1, "po-accordion-item-body-content"]], template: function PoAccordionItemBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, PoAccordionItemBodyComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.expanded);
    } }, dependencies: [i1.NgIf], encapsulation: 2, data: { animation: [
            trigger('toggleBody', [
                transition('* => void', [style({ height: '*' }), animate(200, style({ height: 0 }))]),
                transition('void => *', [style({ height: '0' }), animate(200, style({ height: '*' }))])
            ])
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAccordionItemBodyComponent, [{
        type: Component,
        args: [{ selector: 'po-accordion-item-body', animations: [
                    trigger('toggleBody', [
                        transition('* => void', [style({ height: '*' }), animate(200, style({ height: 0 }))]),
                        transition('void => *', [style({ height: '0' }), animate(200, style({ height: '*' }))])
                    ])
                ], template: "<div class=\"po-accordion-item-body\" *ngIf=\"expanded\" @toggleBody>\r\n  <div class=\"po-accordion-item-body-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n" }]
    }], null, { expanded: [{
            type: Input,
            args: ['p-expanded']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLWl0ZW0tYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYWNjb3JkaW9uL3BvLWFjY29yZGlvbi1pdGVtLWJvZHkvcG8tYWNjb3JkaW9uLWl0ZW0tYm9keS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYWNjb3JkaW9uL3BvLWFjY29yZGlvbi1pdGVtLWJvZHkvcG8tYWNjb3JkaW9uLWl0ZW0tYm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7SUNEMUUsOEJBQWlFLGFBQUE7SUFFN0Qsa0JBQXlCO0lBQzNCLGlCQUFNLEVBQUE7O0lBSDZDLHVDQUFXOzs7QURhaEUsTUFBTSxPQUFPLDRCQUE0QjtJQVZ6QztRQVd1QixhQUFRLEdBQVksS0FBSyxDQUFDO0tBQ2hEOzt3R0FGWSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjs7UUNiekMsNkVBSU07O1FBSitCLG1DQUFjO3VFRE1yQztZQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckYsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hGLENBQUM7U0FDSDt1RkFFVSw0QkFBNEI7Y0FWeEMsU0FBUzsyQkFDRSx3QkFBd0IsY0FFdEI7b0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRixVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3hGLENBQUM7aUJBQ0g7Z0JBR29CLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tYWNjb3JkaW9uLWl0ZW0tYm9keScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwby1hY2NvcmRpb24taXRlbS1ib2R5LmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCd0b2dnbGVCb2R5JywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSwgYW5pbWF0ZSgyMDAsIHN0eWxlKHsgaGVpZ2h0OiAwIH0pKV0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbc3R5bGUoeyBoZWlnaHQ6ICcwJyB9KSwgYW5pbWF0ZSgyMDAsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9BY2NvcmRpb25JdGVtQm9keUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdwLWV4cGFuZGVkJykgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tYWNjb3JkaW9uLWl0ZW0tYm9keVwiICpuZ0lmPVwiZXhwYW5kZWRcIiBAdG9nZ2xlQm9keT5cclxuICA8ZGl2IGNsYXNzPVwicG8tYWNjb3JkaW9uLWl0ZW0tYm9keS1jb250ZW50XCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=