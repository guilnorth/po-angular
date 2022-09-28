import { Component, Input } from '@angular/core';
import { PoStepperStatus } from '../enums/po-stepper-status.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoStepperCircleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-icon", ctx_r0.icons || ctx_r0.isDone)("po-icon-exclamation", ctx_r0.icons && ctx_r0.isError)("po-icon-info", ctx_r0.icons && (ctx_r0.isActive || ctx_r0.isDefault || ctx_r0.isDisabled))("po-icon-ok", ctx_r0.isDone)("po-stepper-circle-content-lg", ctx_r0.isLargeStep)("po-stepper-circle-content-md", ctx_r0.isMediumStep);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", !ctx_r0.icons && !ctx_r0.isDone ? ctx_r0.content : "", " ");
} }
function PoStepperCircleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
const poMediumStepSize = 32;
const poLargeStepSize = 48;
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por exibir os círculos dos *steps*.
 */
export class PoStepperCircleComponent {
    get isActive() {
        return this.status === PoStepperStatus.Active;
    }
    get isDefault() {
        return this.status === PoStepperStatus.Default;
    }
    get isDisabled() {
        return this.status === PoStepperStatus.Disabled;
    }
    get isDone() {
        return this.status === PoStepperStatus.Done;
    }
    get isError() {
        return this.status === PoStepperStatus.Error;
    }
    get isLargeStep() {
        return this.size >= poLargeStepSize;
    }
    get isMediumStep() {
        return this.size >= poMediumStepSize && !this.isLargeStep;
    }
}
PoStepperCircleComponent.ɵfac = function PoStepperCircleComponent_Factory(t) { return new (t || PoStepperCircleComponent)(); };
PoStepperCircleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoStepperCircleComponent, selectors: [["po-stepper-circle"]], inputs: { content: ["p-content", "content"], icons: ["p-icons", "icons"], size: ["p-size", "size"], status: ["p-status", "status"] }, decls: 3, vars: 7, consts: [[1, "po-stepper-circle", 3, "tabindex"], ["class", "po-stepper-circle-content", 3, "po-icon", "po-icon-exclamation", "po-icon-info", "po-icon-ok", "po-stepper-circle-content-lg", "po-stepper-circle-content-md", 4, "ngIf"], ["class", "po-stepper-circle-active", 4, "ngIf"], [1, "po-stepper-circle-content"], [1, "po-stepper-circle-active"]], template: function PoStepperCircleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoStepperCircleComponent_span_1_Template, 2, 13, "span", 1);
        i0.ɵɵtemplate(2, PoStepperCircleComponent_div_2_Template, 1, 0, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.size, "px")("width", ctx.size, "px");
        i0.ɵɵproperty("tabindex", ctx.isDisabled ? -1 : 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isActive);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive || ctx.isError);
    } }, dependencies: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStepperCircleComponent, [{
        type: Component,
        args: [{ selector: 'po-stepper-circle', template: "<div class=\"po-stepper-circle\" [style.height.px]=\"size\" [style.width.px]=\"size\" [tabindex]=\"isDisabled ? -1 : 0\">\r\n  <span\r\n    *ngIf=\"!isActive\"\r\n    class=\"po-stepper-circle-content\"\r\n    [class.po-icon]=\"icons || isDone\"\r\n    [class.po-icon-exclamation]=\"icons && isError\"\r\n    [class.po-icon-info]=\"icons && (isActive || isDefault || isDisabled)\"\r\n    [class.po-icon-ok]=\"isDone\"\r\n    [class.po-stepper-circle-content-lg]=\"isLargeStep\"\r\n    [class.po-stepper-circle-content-md]=\"isMediumStep\"\r\n  >\r\n    {{ !icons && !isDone ? content : '' }}\r\n  </span>\r\n\r\n  <div *ngIf=\"isActive || isError\" class=\"po-stepper-circle-active\"></div>\r\n</div>\r\n" }]
    }], null, { content: [{
            type: Input,
            args: ['p-content']
        }], icons: [{
            type: Input,
            args: ['p-icons']
        }], size: [{
            type: Input,
            args: ['p-size']
        }], status: [{
            type: Input,
            args: ['p-status']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RlcHBlci1jaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXN0ZXBwZXIvcG8tc3RlcHBlci1jaXJjbGUvcG8tc3RlcHBlci1jaXJjbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXN0ZXBwZXIvcG8tc3RlcHBlci1jaXJjbGUvcG8tc3RlcHBlci1jaXJjbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0lDRGhFLCtCQVNDO0lBQ0MsWUFDRjtJQUFBLGlCQUFPOzs7SUFSTCx3REFBaUMsdURBQUEsNEZBQUEsNkJBQUEsb0RBQUEscURBQUE7SUFPakMsZUFDRjtJQURFLHNGQUNGOzs7SUFFQSx5QkFBd0U7O0FEVjFFLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUUzQjs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sd0JBQXdCO0lBYW5DLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1RCxDQUFDOztnR0F2Q1Usd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNsQnJDLDhCQUFpSDtRQUMvRyw0RUFXTztRQUVQLHlFQUF3RTtRQUMxRSxpQkFBTTs7UUFmeUIsd0NBQXdCLHlCQUFBO1FBQXlCLGtEQUFnQztRQUUzRyxlQUFlO1FBQWYsb0NBQWU7UUFZWixlQUF5QjtRQUF6QixrREFBeUI7O3VGRElwQix3QkFBd0I7Y0FKcEMsU0FBUzsyQkFDRSxtQkFBbUI7Z0JBS1QsT0FBTztrQkFBMUIsS0FBSzttQkFBQyxXQUFXO1lBR0EsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR0MsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBR0ksTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9TdGVwcGVyU3RhdHVzIH0gZnJvbSAnLi4vZW51bXMvcG8tc3RlcHBlci1zdGF0dXMuZW51bSc7XHJcblxyXG5jb25zdCBwb01lZGl1bVN0ZXBTaXplID0gMzI7XHJcbmNvbnN0IHBvTGFyZ2VTdGVwU2l6ZSA9IDQ4O1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSByZXNwb25zw6F2ZWwgcG9yIGV4aWJpciBvcyBjw61yY3Vsb3MgZG9zICpzdGVwcyouXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXN0ZXBwZXItY2lyY2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tc3RlcHBlci1jaXJjbGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1N0ZXBwZXJDaXJjbGVDb21wb25lbnQge1xyXG4gIC8vIENvbnRlw7pkbyBxdWUgaXLDoSBhcGFyZWNlciBubyBjw61yY3VsbyBkbyAqc3RlcCouXHJcbiAgQElucHV0KCdwLWNvbnRlbnQnKSBjb250ZW50OiBhbnk7XHJcblxyXG4gIC8vIERlZmluZSBzZSBzZXLDo28gZXhpYmlkb3Mgw61jb25lcyBubyBsdWdhciBkZSBuw7ptZXJvcyBub3Mgc3RlcHMuXHJcbiAgQElucHV0KCdwLWljb25zJykgaWNvbnM6IGJvb2xlYW47XHJcblxyXG4gIC8vIFRhbWFuaG8gZG8gKnN0ZXAtY2lyY2xlKi5cclxuICBASW5wdXQoJ3Atc2l6ZScpIHNpemU6IG51bWJlcjtcclxuXHJcbiAgLy8gU3RhdHVzIGRvICpzdGVwKi5cclxuICBASW5wdXQoJ3Atc3RhdHVzJykgc3RhdHVzOiBzdHJpbmc7XHJcblxyXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUG9TdGVwcGVyU3RhdHVzLkFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5EaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGdldCBpc0RvbmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5Eb25lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRXJyb3IoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5FcnJvcjtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlU3RlcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUgPj0gcG9MYXJnZVN0ZXBTaXplO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTWVkaXVtU3RlcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUgPj0gcG9NZWRpdW1TdGVwU2l6ZSAmJiAhdGhpcy5pc0xhcmdlU3RlcDtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXN0ZXBwZXItY2lyY2xlXCIgW3N0eWxlLmhlaWdodC5weF09XCJzaXplXCIgW3N0eWxlLndpZHRoLnB4XT1cInNpemVcIiBbdGFiaW5kZXhdPVwiaXNEaXNhYmxlZCA/IC0xIDogMFwiPlxyXG4gIDxzcGFuXHJcbiAgICAqbmdJZj1cIiFpc0FjdGl2ZVwiXHJcbiAgICBjbGFzcz1cInBvLXN0ZXBwZXItY2lyY2xlLWNvbnRlbnRcIlxyXG4gICAgW2NsYXNzLnBvLWljb25dPVwiaWNvbnMgfHwgaXNEb25lXCJcclxuICAgIFtjbGFzcy5wby1pY29uLWV4Y2xhbWF0aW9uXT1cImljb25zICYmIGlzRXJyb3JcIlxyXG4gICAgW2NsYXNzLnBvLWljb24taW5mb109XCJpY29ucyAmJiAoaXNBY3RpdmUgfHwgaXNEZWZhdWx0IHx8IGlzRGlzYWJsZWQpXCJcclxuICAgIFtjbGFzcy5wby1pY29uLW9rXT1cImlzRG9uZVwiXHJcbiAgICBbY2xhc3MucG8tc3RlcHBlci1jaXJjbGUtY29udGVudC1sZ109XCJpc0xhcmdlU3RlcFwiXHJcbiAgICBbY2xhc3MucG8tc3RlcHBlci1jaXJjbGUtY29udGVudC1tZF09XCJpc01lZGl1bVN0ZXBcIlxyXG4gID5cclxuICAgIHt7ICFpY29ucyAmJiAhaXNEb25lID8gY29udGVudCA6ICcnIH19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiaXNBY3RpdmUgfHwgaXNFcnJvclwiIGNsYXNzPVwicG8tc3RlcHBlci1jaXJjbGUtYWN0aXZlXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=