import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../po-modal/po-modal.component";
import * as i3 from "../po-table-subtitle-circle/po-table-subtitle-circle.component";
function PoTableShowSubtitleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "po-table-subtitle-circle", 7);
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subtitle_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-subtitle", subtitle_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subtitle_r2.label);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação de um botão e modal para visualização de todas as legendas.
 */
export class PoTableShowSubtitleComponent {
}
PoTableShowSubtitleComponent.ɵfac = function PoTableShowSubtitleComponent_Factory(t) { return new (t || PoTableShowSubtitleComponent)(); };
PoTableShowSubtitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableShowSubtitleComponent, selectors: [["po-table-show-subtitle"]], inputs: { subtitles: ["p-subtitles", "subtitles"], literals: ["p-literals", "literals"] }, decls: 7, vars: 3, consts: [[1, "po-table-footer-show-subtitle", 3, "click"], [1, "po-table-footer-show-subtitle-container"], [1, "po-table-show-subtitle"], ["p-size", "sm", 3, "p-title"], ["modal", ""], ["class", "po-table-subtitle-footer-modal po-row", 4, "ngFor", "ngForOf"], [1, "po-table-subtitle-footer-modal", "po-row"], ["p-hide-title", "true", 3, "p-subtitle"], [1, "po-table-subtitle-text"]], template: function PoTableShowSubtitleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoTableShowSubtitleComponent_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(5); return i0.ɵɵresetView(_r0.open()); });
        i0.ɵɵelementStart(1, "div", 1)(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(4, "po-modal", 3, 4);
        i0.ɵɵtemplate(6, PoTableShowSubtitleComponent_div_6_Template, 4, 2, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.literals.seeCompleteSubtitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-title", ctx.literals.completeSubtitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.subtitles);
    } }, dependencies: [i1.NgForOf, i2.PoModalComponent, i3.PoTableSubtitleCircleComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableShowSubtitleComponent, [{
        type: Component,
        args: [{ selector: 'po-table-show-subtitle', template: "<div class=\"po-table-footer-show-subtitle\" (click)=\"modal.open()\">\r\n  <div class=\"po-table-footer-show-subtitle-container\">\r\n    <span class=\"po-table-show-subtitle\">{{ literals.seeCompleteSubtitle }}</span>\r\n  </div>\r\n</div>\r\n\r\n<po-modal #modal p-size=\"sm\" [p-title]=\"literals.completeSubtitle\">\r\n  <div *ngFor=\"let subtitle of subtitles\" class=\"po-table-subtitle-footer-modal po-row\">\r\n    <po-table-subtitle-circle p-hide-title=\"true\" [p-subtitle]=\"subtitle\"> </po-table-subtitle-circle>\r\n    <span class=\"po-table-subtitle-text\">{{ subtitle.label }}</span>\r\n  </div>\r\n</po-modal>\r\n" }]
    }], null, { subtitles: [{
            type: Input,
            args: ['p-subtitles']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtc2hvdy1zdWJ0aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tdGFibGUvcG8tdGFibGUtc2hvdy1zdWJ0aXRsZS9wby10YWJsZS1zaG93LXN1YnRpdGxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1zaG93LXN1YnRpdGxlL3BvLXRhYmxlLXNob3ctc3VidGl0bGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ08vQyw4QkFBc0Y7SUFDcEYsOENBQWtHO0lBQ2xHLCtCQUFxQztJQUFBLFlBQW9CO0lBQUEsaUJBQU8sRUFBQTs7O0lBRGxCLGVBQXVCO0lBQXZCLHdDQUF1QjtJQUNoQyxlQUFvQjtJQUFwQix1Q0FBb0I7O0FETDdEOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyw0QkFBNEI7O3dHQUE1Qiw0QkFBNEI7K0VBQTVCLDRCQUE0Qjs7UUNmekMsOEJBQWtFO1FBQXZCLDRKQUFTLGVBQUEsVUFBWSxDQUFBLElBQUM7UUFDL0QsOEJBQXFELGNBQUE7UUFDZCxZQUFrQztRQUFBLGlCQUFPLEVBQUEsRUFBQTtRQUlsRixzQ0FBbUU7UUFDakUsNkVBR007UUFDUixpQkFBVzs7UUFUOEIsZUFBa0M7UUFBbEMsc0RBQWtDO1FBSTlDLGVBQXFDO1FBQXJDLHVEQUFxQztRQUN0QyxlQUFZO1FBQVosdUNBQVk7O3VGRFEzQiw0QkFBNEI7Y0FKeEMsU0FBUzsyQkFDRSx3QkFBd0I7Z0JBS1osU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBR0MsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UYWJsZVN1YnRpdGxlQ29sdW1uIH0gZnJvbSAnLi4vcG8tdGFibGUtc3VidGl0bGUtZm9vdGVyL3BvLXRhYmxlLXN1YnRpdGxlLWNvbHVtbi5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBwYXJhIGEgY3JpYcOnw6NvIGRlIHVtIGJvdMOjbyBlIG1vZGFsIHBhcmEgdmlzdWFsaXphw6fDo28gZGUgdG9kYXMgYXMgbGVnZW5kYXMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlLXNob3ctc3VidGl0bGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby10YWJsZS1zaG93LXN1YnRpdGxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZVNob3dTdWJ0aXRsZUNvbXBvbmVudCB7XHJcbiAgLyoqIE9iamV0byBjb20gb3MgZGFkb3MgZGEgbGVnZW5kYS4gKi9cclxuICBASW5wdXQoJ3Atc3VidGl0bGVzJykgc3VidGl0bGVzOiBBcnJheTxQb1RhYmxlU3VidGl0bGVDb2x1bW4+O1xyXG5cclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIHJlY2ViZSBhcyBsaXRlcmFpcyBkZWZpbmlkYXMgbm8gYHBvLXRhYmxlYC4gKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBsaXRlcmFscztcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tdGFibGUtZm9vdGVyLXNob3ctc3VidGl0bGVcIiAoY2xpY2spPVwibW9kYWwub3BlbigpXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXRhYmxlLWZvb3Rlci1zaG93LXN1YnRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwby10YWJsZS1zaG93LXN1YnRpdGxlXCI+e3sgbGl0ZXJhbHMuc2VlQ29tcGxldGVTdWJ0aXRsZSB9fTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48cG8tbW9kYWwgI21vZGFsIHAtc2l6ZT1cInNtXCIgW3AtdGl0bGVdPVwibGl0ZXJhbHMuY29tcGxldGVTdWJ0aXRsZVwiPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHN1YnRpdGxlIG9mIHN1YnRpdGxlc1wiIGNsYXNzPVwicG8tdGFibGUtc3VidGl0bGUtZm9vdGVyLW1vZGFsIHBvLXJvd1wiPlxyXG4gICAgPHBvLXRhYmxlLXN1YnRpdGxlLWNpcmNsZSBwLWhpZGUtdGl0bGU9XCJ0cnVlXCIgW3Atc3VidGl0bGVdPVwic3VidGl0bGVcIj4gPC9wby10YWJsZS1zdWJ0aXRsZS1jaXJjbGU+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLXRhYmxlLXN1YnRpdGxlLXRleHRcIj57eyBzdWJ0aXRsZS5sYWJlbCB9fTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9wby1tb2RhbD5cclxuIl19