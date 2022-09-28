import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';
import { poFieldContainerLiterals } from './po-field-container-literals';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
function PoFieldContainerComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.literals.optional);
} }
function PoFieldContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.help);
} }
const _c0 = ["*"];
/**
 * @docsPrivate
 *
 * Componente de uso interno, responsável por atribuir uma label para o campo
 */
export class PoFieldContainerComponent {
    constructor(languageService) {
        this._optional = false;
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poFieldContainerLiterals[language]
        };
    }
    /** Indica se o campo será opcional. */
    set optional(value) {
        this._optional = convertToBoolean(value);
    }
    get optional() {
        return this._optional;
    }
}
PoFieldContainerComponent.ɵfac = function PoFieldContainerComponent_Factory(t) { return new (t || PoFieldContainerComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoFieldContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoFieldContainerComponent, selectors: [["po-field-container"]], inputs: { label: ["p-label", "label"], help: ["p-help", "help"], optional: ["p-optional", "optional"] }, ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[1, "po-field-container"], [1, "po-field-container-title"], [1, "po-field-title"], ["class", "po-field-optional", 4, "ngIf"], ["class", "po-field-help", 4, "ngIf"], [1, "po-field-optional"], [1, "po-field-help"]], template: function PoFieldContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PoFieldContainerComponent_span_4_Template, 2, 1, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PoFieldContainerComponent_div_5_Template, 2, 1, "div", 4);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.optional && (ctx.label || ctx.help));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.help);
    } }, dependencies: [i2.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoFieldContainerComponent, [{
        type: Component,
        args: [{ selector: 'po-field-container', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-field-container\">\r\n  <div class=\"po-field-container-title\">\r\n    <span class=\"po-field-title\">{{ label }}</span>\r\n    <span class=\"po-field-optional\" *ngIf=\"optional && (label || help)\">{{ literals.optional }}</span>\r\n  </div>\r\n\r\n  <div class=\"po-field-help\" *ngIf=\"help\">{{ help }}</div>\r\n\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZmllbGQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1maWVsZC1jb250YWluZXIvcG8tZmllbGQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1maWVsZC1jb250YWluZXIvcG8tZmllbGQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztJQ0RyRSwrQkFBb0U7SUFBQSxZQUF1QjtJQUFBLGlCQUFPOzs7SUFBOUIsZUFBdUI7SUFBdkIsOENBQXVCOzs7SUFHN0YsOEJBQXdDO0lBQUEsWUFBVTtJQUFBLGlCQUFNOzs7SUFBaEIsZUFBVTtJQUFWLGlDQUFVOzs7QURBcEQ7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7SUFvQnBDLFlBQVksZUFBa0M7UUFYdEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVlqQyxNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUVwRCxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsR0FBRyx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7SUFmRCx1Q0FBdUM7SUFDdkMsSUFBeUIsUUFBUSxDQUFDLEtBQWM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7O2tHQWxCVSx5QkFBeUI7NEVBQXpCLHlCQUF5Qjs7UUNoQnRDLDhCQUFnQyxhQUFBLGNBQUE7UUFFQyxZQUFXO1FBQUEsaUJBQU87UUFDL0MsNEVBQWtHO1FBQ3BHLGlCQUFNO1FBRU4sMEVBQXdEO1FBRXhELGtCQUF5QjtRQUMzQixpQkFBTTs7UUFQMkIsZUFBVztRQUFYLCtCQUFXO1FBQ1AsZUFBaUM7UUFBakMsOERBQWlDO1FBR3hDLGVBQVU7UUFBViwrQkFBVTs7dUZEVTNCLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLG9CQUFvQixtQkFFYix1QkFBdUIsQ0FBQyxNQUFNO29FQUk3QixLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHQyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFPVSxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0ZpZWxkQ29udGFpbmVyTGl0ZXJhbHMgfSBmcm9tICcuL3BvLWZpZWxkLWNvbnRhaW5lci1saXRlcmFscyc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgZGUgdXNvIGludGVybm8sIHJlc3BvbnPDoXZlbCBwb3IgYXRyaWJ1aXIgdW1hIGxhYmVsIHBhcmEgbyBjYW1wb1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1maWVsZC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1maWVsZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0ZpZWxkQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAvKiogTGFiZWwgZG8gY2FtcG8uICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUZXh0byBkZSBhcG9pbyBkbyBjYW1wby4gKi9cclxuICBASW5wdXQoJ3AtaGVscCcpIGhlbHA6IHN0cmluZztcclxuXHJcbiAgbGl0ZXJhbHM7XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbmFsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBJbmRpY2Egc2UgbyBjYW1wbyBzZXLDoSBvcGNpb25hbC4gKi9cclxuICBASW5wdXQoJ3Atb3B0aW9uYWwnKSBzZXQgb3B0aW9uYWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29wdGlvbmFsID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9uYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uYWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4ucG9GaWVsZENvbnRhaW5lckxpdGVyYWxzW2xhbmd1YWdlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItdGl0bGVcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8tZmllbGQtdGl0bGVcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8tZmllbGQtb3B0aW9uYWxcIiAqbmdJZj1cIm9wdGlvbmFsICYmIChsYWJlbCB8fCBoZWxwKVwiPnt7IGxpdGVyYWxzLm9wdGlvbmFsIH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtaGVscFwiICpuZ0lmPVwiaGVscFwiPnt7IGhlbHAgfX08L2Rpdj5cclxuXHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19