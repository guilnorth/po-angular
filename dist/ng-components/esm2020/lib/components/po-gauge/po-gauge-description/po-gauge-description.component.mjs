import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/po-tooltip/po-tooltip.directive";
const _c0 = ["descriptionText"];
function PoGaugeDescriptionComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoGaugeDescriptionComponent_ng_template_2_p_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 5, 6);
    i0.ɵɵlistener("mouseenter", function PoGaugeDescriptionComponent_ng_template_2_p_0_Template_p_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.verifyIfHasEllipsis()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-tooltip", ctx_r5.tooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.description, " ");
} }
function PoGaugeDescriptionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoGaugeDescriptionComponent_ng_template_2_p_0_Template, 3, 2, "p", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.description);
} }
function PoGaugeDescriptionComponent_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r9.value, "%");
} }
function PoGaugeDescriptionComponent_ng_template_4_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 11, 6);
    i0.ɵɵlistener("mouseenter", function PoGaugeDescriptionComponent_ng_template_4_p_2_Template_p_mouseenter_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.verifyIfHasEllipsis()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-tooltip", ctx_r10.tooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.description, " ");
} }
function PoGaugeDescriptionComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, PoGaugeDescriptionComponent_ng_template_4_p_1_Template, 2, 1, "p", 8);
    i0.ɵɵtemplate(2, PoGaugeDescriptionComponent_ng_template_4_p_2_Template, 3, 2, "p", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r4.descriptionWidth, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isValidValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.description);
} }
export class PoGaugeDescriptionComponent {
    get isValidValue() {
        return this.value || this.value === 0;
    }
    verifyIfHasEllipsis() {
        const { offsetWidth, scrollWidth } = this.descriptionText.nativeElement;
        // O tooltip só exibe se adicionado dentro de setTimeout.
        setTimeout(() => {
            this.tooltip = offsetWidth < scrollWidth ? this.description : undefined;
        });
    }
}
PoGaugeDescriptionComponent.ɵfac = function PoGaugeDescriptionComponent_Factory(t) { return new (t || PoGaugeDescriptionComponent)(); };
PoGaugeDescriptionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugeDescriptionComponent, selectors: [["po-gauge-description"]], viewQuery: function PoGaugeDescriptionComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.descriptionText = _t.first);
    } }, inputs: { description: ["p-description", "description"], hasRanges: ["p-has-ranges", "hasRanges"], descriptionWidth: ["p-description-width", "descriptionWidth"], value: ["p-value", "value"] }, decls: 6, vars: 1, consts: [[1, "po-gauge-description"], [4, "ngTemplateOutlet"], ["rangesDescription", ""], ["percentageDescription", ""], ["class", "po-gauge-description-text po-gauge-description-upper-text", 3, "p-tooltip", "mouseenter", 4, "ngIf"], [1, "po-gauge-description-text", "po-gauge-description-upper-text", 3, "p-tooltip", "mouseenter"], ["descriptionText", ""], ["tabindex", "0", 1, "po-gauge-description-bottom"], ["class", "po-gauge-description-bottom-value", 4, "ngIf"], ["class", "po-gauge-description-text po-gauge-description-bottom-text", 3, "p-tooltip", "mouseenter", 4, "ngIf"], [1, "po-gauge-description-bottom-value"], [1, "po-gauge-description-text", "po-gauge-description-bottom-text", 3, "p-tooltip", "mouseenter"]], template: function PoGaugeDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoGaugeDescriptionComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoGaugeDescriptionComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PoGaugeDescriptionComponent_ng_template_4_Template, 3, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.hasRanges ? _r1 : _r3);
    } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.PoTooltipDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeDescriptionComponent, [{
        type: Component,
        args: [{ selector: 'po-gauge-description', template: "<div class=\"po-gauge-description\">\r\n  <ng-container *ngTemplateOutlet=\"hasRanges ? rangesDescription : percentageDescription\"> </ng-container>\r\n</div>\r\n\r\n<ng-template #rangesDescription>\r\n  <p\r\n    #descriptionText\r\n    *ngIf=\"description\"\r\n    class=\"po-gauge-description-text po-gauge-description-upper-text\"\r\n    [p-tooltip]=\"tooltip\"\r\n    (mouseenter)=\"verifyIfHasEllipsis()\"\r\n  >\r\n    {{ description }}\r\n  </p>\r\n</ng-template>\r\n\r\n<ng-template #percentageDescription>\r\n  <div class=\"po-gauge-description-bottom\" tabindex=\"0\" [style.width.px]=\"descriptionWidth\">\r\n    <p *ngIf=\"isValidValue\" class=\"po-gauge-description-bottom-value\">{{ value }}%</p>\r\n    <p\r\n      #descriptionText\r\n      *ngIf=\"description\"\r\n      class=\"po-gauge-description-text po-gauge-description-bottom-text\"\r\n      [p-tooltip]=\"tooltip\"\r\n      (mouseenter)=\"verifyIfHasEllipsis()\"\r\n    >\r\n      {{ description }}\r\n    </p>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], null, { description: [{
            type: Input,
            args: ['p-description']
        }], hasRanges: [{
            type: Input,
            args: ['p-has-ranges']
        }], descriptionWidth: [{
            type: Input,
            args: ['p-description-width']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], descriptionText: [{
            type: ViewChild,
            args: ['descriptionText']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UtZGVzY3JpcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdhdWdlL3BvLWdhdWdlLWRlc2NyaXB0aW9uL3BvLWdhdWdlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS1kZXNjcmlwdGlvbi9wby1nYXVnZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0N0RSx3QkFBd0c7Ozs7SUFJeEcsK0JBTUM7SUFEQywwTEFBYyxlQUFBLDRCQUFxQixDQUFBLElBQUM7SUFFcEMsWUFDRjtJQUFBLGlCQUFJOzs7SUFKRiwwQ0FBcUI7SUFHckIsZUFDRjtJQURFLG1EQUNGOzs7SUFSQSxzRkFRSTs7O0lBTkQseUNBQWlCOzs7SUFXbEIsNkJBQWtFO0lBQUEsWUFBWTtJQUFBLGlCQUFJOzs7SUFBaEIsZUFBWTtJQUFaLDRDQUFZOzs7O0lBQzlFLGdDQU1DO0lBREMsNExBQWMsZUFBQSw2QkFBcUIsQ0FBQSxJQUFDO0lBRXBDLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBSkYsMkNBQXFCO0lBR3JCLGVBQ0Y7SUFERSxvREFDRjs7O0lBVkYsOEJBQTBGO0lBQ3hGLHNGQUFrRjtJQUNsRixzRkFRSTtJQUNOLGlCQUFNOzs7SUFYZ0Qsc0RBQW1DO0lBQ25GLGVBQWtCO0lBQWxCLDBDQUFrQjtJQUduQixlQUFpQjtJQUFqQix5Q0FBaUI7O0FEZnhCLE1BQU0sT0FBTywyQkFBMkI7SUFhdEMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUV4RSx5REFBeUQ7UUFDekQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0dBeEJVLDJCQUEyQjs4RUFBM0IsMkJBQTJCOzs7Ozs7UUNOeEMsOEJBQWtDO1FBQ2hDLDhGQUF3RztRQUMxRyxpQkFBTTtRQUVOLDZIQVVjO1FBRWQsNkhBYWM7Ozs7UUE1QkcsZUFBdUU7UUFBdkUsNERBQXVFOzt1RkRLM0UsMkJBQTJCO2NBSnZDLFNBQVM7MkJBQ0Usc0JBQXNCO2dCQUlSLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUVDLFNBQVM7a0JBQS9CLEtBQUs7bUJBQUMsY0FBYztZQUVTLGdCQUFnQjtrQkFBN0MsS0FBSzttQkFBQyxxQkFBcUI7WUFFVixLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFYyxlQUFlO2tCQUE1QyxTQUFTO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1nYXVnZS1kZXNjcmlwdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWdhdWdlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9HYXVnZURlc2NyaXB0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtZGVzY3JpcHRpb24nKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ3AtaGFzLXJhbmdlcycpIGhhc1JhbmdlczogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWRlc2NyaXB0aW9uLXdpZHRoJykgZGVzY3JpcHRpb25XaWR0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoJ3AtdmFsdWUnKSB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICBAVmlld0NoaWxkKCdkZXNjcmlwdGlvblRleHQnKSBkZXNjcmlwdGlvblRleHQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHRvb2x0aXA6IHN0cmluZztcclxuXHJcbiAgZ2V0IGlzVmFsaWRWYWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUgPT09IDA7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlJZkhhc0VsbGlwc2lzKCkge1xyXG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCwgc2Nyb2xsV2lkdGggfSA9IHRoaXMuZGVzY3JpcHRpb25UZXh0Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gTyB0b29sdGlwIHPDsyBleGliZSBzZSBhZGljaW9uYWRvIGRlbnRybyBkZSBzZXRUaW1lb3V0LlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IG9mZnNldFdpZHRoIDwgc2Nyb2xsV2lkdGggPyB0aGlzLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1nYXVnZS1kZXNjcmlwdGlvblwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoYXNSYW5nZXMgPyByYW5nZXNEZXNjcmlwdGlvbiA6IHBlcmNlbnRhZ2VEZXNjcmlwdGlvblwiPiA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI3Jhbmdlc0Rlc2NyaXB0aW9uPlxyXG4gIDxwXHJcbiAgICAjZGVzY3JpcHRpb25UZXh0XHJcbiAgICAqbmdJZj1cImRlc2NyaXB0aW9uXCJcclxuICAgIGNsYXNzPVwicG8tZ2F1Z2UtZGVzY3JpcHRpb24tdGV4dCBwby1nYXVnZS1kZXNjcmlwdGlvbi11cHBlci10ZXh0XCJcclxuICAgIFtwLXRvb2x0aXBdPVwidG9vbHRpcFwiXHJcbiAgICAobW91c2VlbnRlcik9XCJ2ZXJpZnlJZkhhc0VsbGlwc2lzKClcIlxyXG4gID5cclxuICAgIHt7IGRlc2NyaXB0aW9uIH19XHJcbiAgPC9wPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNwZXJjZW50YWdlRGVzY3JpcHRpb24+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWdhdWdlLWRlc2NyaXB0aW9uLWJvdHRvbVwiIHRhYmluZGV4PVwiMFwiIFtzdHlsZS53aWR0aC5weF09XCJkZXNjcmlwdGlvbldpZHRoXCI+XHJcbiAgICA8cCAqbmdJZj1cImlzVmFsaWRWYWx1ZVwiIGNsYXNzPVwicG8tZ2F1Z2UtZGVzY3JpcHRpb24tYm90dG9tLXZhbHVlXCI+e3sgdmFsdWUgfX0lPC9wPlxyXG4gICAgPHBcclxuICAgICAgI2Rlc2NyaXB0aW9uVGV4dFxyXG4gICAgICAqbmdJZj1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgY2xhc3M9XCJwby1nYXVnZS1kZXNjcmlwdGlvbi10ZXh0IHBvLWdhdWdlLWRlc2NyaXB0aW9uLWJvdHRvbS10ZXh0XCJcclxuICAgICAgW3AtdG9vbHRpcF09XCJ0b29sdGlwXCJcclxuICAgICAgKG1vdXNlZW50ZXIpPVwidmVyaWZ5SWZIYXNFbGxpcHNpcygpXCJcclxuICAgID5cclxuICAgICAge3sgZGVzY3JpcHRpb24gfX1cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19