import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { InputBoolean } from '../../../../../decorators';
import { isIE } from '../../../../../utils/util';
import * as i0 from "@angular/core";
const _c0 = ["chartPath"];
const _c1 = ["po-chart-path", ""];
const pathDashoffsetDefaultWidth = 0;
export class PoChartPathComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.isActive = true;
        this.chartLine = false;
    }
    set color(value) {
        this._color = value.includes('po-color') && this.chartLine ? value.replace('po-color', 'po-border-color') : value;
    }
    get color() {
        return this._color;
    }
    set animate(value) {
        this._animate = value;
        if (!this.animate) {
            this.pathWidth = pathDashoffsetDefaultWidth;
        }
    }
    get animate() {
        return this._animate;
    }
    ngAfterViewInit() {
        if (!isIE()) {
            this.pathAnimation();
        }
    }
    pathAnimation() {
        this.pathWidth = this.chartPath.nativeElement.getTotalLength();
        this.changeDetector.detectChanges();
        setTimeout(this.preventsAnimatingAgain.bind(this), 700);
    }
    // Redefine pathWidth para zero após o período da animação para que a linha se expanda normalmente on resize.
    preventsAnimatingAgain() {
        this.pathWidth = pathDashoffsetDefaultWidth;
    }
}
PoChartPathComponent.ɵfac = function PoChartPathComponent_Factory(t) { return new (t || PoChartPathComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoChartPathComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartPathComponent, selectors: [["", "po-chart-path", ""]], viewQuery: function PoChartPathComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartPath = _t.first);
    } }, inputs: { isActive: ["p-is-active", "isActive"], chartLine: ["p-chart-line", "chartLine"], coordinates: ["p-coordinates", "coordinates"], color: ["p-color", "color"], animate: ["p-animate", "animate"] }, attrs: _c1, decls: 2, vars: 11, consts: [[1, "po-chart-path"], ["chartPath", ""]], template: function PoChartPathComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "path", 0, 1);
    } if (rf & 2) {
        i0.ɵɵclassMap((ctx.color == null ? null : ctx.color.includes("po-border-color")) || (ctx.color == null ? null : ctx.color.includes("po-color")) ? ctx.color : "");
        i0.ɵɵclassProp("po-chart-active-path", ctx.isActive)("po-chart-line-path", ctx.chartLine);
        i0.ɵɵattribute("fill", ctx.chartLine ? "none" : ctx.color)("stroke-dasharray", ctx.pathWidth)("stroke-dashoffset", ctx.pathWidth)("stroke", ctx.chartLine ? ctx.color : "")("d", ctx.coordinates);
    } }, encapsulation: 2 });
__decorate([
    InputBoolean()
], PoChartPathComponent.prototype, "isActive", void 0);
__decorate([
    InputBoolean()
], PoChartPathComponent.prototype, "chartLine", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartPathComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-path]', template: "<svg:path #chartPath\r\n  class=\"po-chart-path\"\r\n  [class.po-chart-active-path]=\"isActive\"\r\n  [class.po-chart-line-path]=\"chartLine\"\r\n  [class]=\"color?.includes('po-border-color') || color?.includes('po-color') ? color : ''\"\r\n  [attr.fill]=\"chartLine ? 'none' : color\"\r\n  [attr.stroke-dasharray]=\"pathWidth\"\r\n  [attr.stroke-dashoffset]=\"pathWidth\"\r\n  [attr.stroke]=\"chartLine ? color : ''\"\r\n  [attr.d]=\"coordinates\">\r\n</svg:path> " }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { isActive: [{
            type: Input,
            args: ['p-is-active']
        }], chartLine: [{
            type: Input,
            args: ['p-chart-line']
        }], coordinates: [{
            type: Input,
            args: ['p-coordinates']
        }], chartPath: [{
            type: ViewChild,
            args: ['chartPath', { static: true }]
        }], color: [{
            type: Input,
            args: ['p-color']
        }], animate: [{
            type: Input,
            args: ['p-animate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtcGF0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWxpbmUvcG8tY2hhcnQtcGF0aC9wby1jaGFydC1wYXRoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtbGluZS9wby1jaGFydC1wYXRoL3BvLWNoYXJ0LXBhdGguY29tcG9uZW50LnN2ZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRWpELE1BQU0sMEJBQTBCLEdBQUcsQ0FBQyxDQUFDO0FBTXJDLE1BQU0sT0FBTyxvQkFBb0I7SUFrQy9CLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQWpDZixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUErQlYsQ0FBQztJQXBCekQsSUFBc0IsS0FBSyxDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNwSCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUF3QixPQUFPLENBQUMsS0FBYztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBSUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNkdBQTZHO0lBQ3JHLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO0lBQzlDLENBQUM7O3dGQW5EVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjs7Ozs7O1FDWmpDLG1CQVN5QjtRQVR6Qiw2QkFVVzs7UUFOVCxpS0FBd0Y7UUFGeEYsb0RBQXVDLHFDQUFBO1FBR3ZDLDBEQUF3QyxtQ0FBQSxvQ0FBQSwwQ0FBQSxzQkFBQTs7QURRRjtJQUFmLFlBQVksRUFBRTtzREFBMEI7QUFFeEI7SUFBZixZQUFZLEVBQUU7dURBQTRCO3VGQUh2RCxvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxpQkFBaUI7b0VBSVcsUUFBUTtrQkFBN0MsS0FBSzttQkFBQyxhQUFhO1lBRW1CLFNBQVM7a0JBQS9DLEtBQUs7bUJBQUMsY0FBYztZQUVHLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUVvQixTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFPbEIsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTO1lBUVEsT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGVjb3JhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5jb25zdCBwYXRoRGFzaG9mZnNldERlZmF1bHRXaWR0aCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1twby1jaGFydC1wYXRoXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNoYXJ0LXBhdGguY29tcG9uZW50LnN2ZydcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ2hhcnRQYXRoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCdwLWlzLWFjdGl2ZScpIEBJbnB1dEJvb2xlYW4oKSBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgncC1jaGFydC1saW5lJykgQElucHV0Qm9vbGVhbigpIGNoYXJ0TGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ3AtY29vcmRpbmF0ZXMnKSBjb29yZGluYXRlczogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdjaGFydFBhdGgnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjaGFydFBhdGg6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHBhdGhXaWR0aDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9hbmltYXRlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncC1jb2xvcicpIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlLmluY2x1ZGVzKCdwby1jb2xvcicpICYmIHRoaXMuY2hhcnRMaW5lID8gdmFsdWUucmVwbGFjZSgncG8tY29sb3InLCAncG8tYm9yZGVyLWNvbG9yJykgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgncC1hbmltYXRlJykgc2V0IGFuaW1hdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FuaW1hdGUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLnBhdGhXaWR0aCA9IHBhdGhEYXNob2Zmc2V0RGVmYXVsdFdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFuaW1hdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAoIWlzSUUoKSkge1xyXG4gICAgICB0aGlzLnBhdGhBbmltYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGF0aEFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMucGF0aFdpZHRoID0gdGhpcy5jaGFydFBhdGgubmF0aXZlRWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KHRoaXMucHJldmVudHNBbmltYXRpbmdBZ2Fpbi5iaW5kKHRoaXMpLCA3MDApO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVkZWZpbmUgcGF0aFdpZHRoIHBhcmEgemVybyBhcMOzcyBvIHBlcsOtb2RvIGRhIGFuaW1hw6fDo28gcGFyYSBxdWUgYSBsaW5oYSBzZSBleHBhbmRhIG5vcm1hbG1lbnRlIG9uIHJlc2l6ZS5cclxuICBwcml2YXRlIHByZXZlbnRzQW5pbWF0aW5nQWdhaW4oKSB7XHJcbiAgICB0aGlzLnBhdGhXaWR0aCA9IHBhdGhEYXNob2Zmc2V0RGVmYXVsdFdpZHRoO1xyXG4gIH1cclxufVxyXG4iLCI8c3ZnOnBhdGggI2NoYXJ0UGF0aFxyXG4gIGNsYXNzPVwicG8tY2hhcnQtcGF0aFwiXHJcbiAgW2NsYXNzLnBvLWNoYXJ0LWFjdGl2ZS1wYXRoXT1cImlzQWN0aXZlXCJcclxuICBbY2xhc3MucG8tY2hhcnQtbGluZS1wYXRoXT1cImNoYXJ0TGluZVwiXHJcbiAgW2NsYXNzXT1cImNvbG9yPy5pbmNsdWRlcygncG8tYm9yZGVyLWNvbG9yJykgfHwgY29sb3I/LmluY2x1ZGVzKCdwby1jb2xvcicpID8gY29sb3IgOiAnJ1wiXHJcbiAgW2F0dHIuZmlsbF09XCJjaGFydExpbmUgPyAnbm9uZScgOiBjb2xvclwiXHJcbiAgW2F0dHIuc3Ryb2tlLWRhc2hhcnJheV09XCJwYXRoV2lkdGhcIlxyXG4gIFthdHRyLnN0cm9rZS1kYXNob2Zmc2V0XT1cInBhdGhXaWR0aFwiXHJcbiAgW2F0dHIuc3Ryb2tlXT1cImNoYXJ0TGluZSA/IGNvbG9yIDogJydcIlxyXG4gIFthdHRyLmRdPVwiY29vcmRpbmF0ZXNcIj5cclxuPC9zdmc6cGF0aD4gIl19