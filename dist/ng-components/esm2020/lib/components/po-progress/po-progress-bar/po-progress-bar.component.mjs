import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PoProgressBarComponent {
    get valueScale() {
        return `${this.value / 100}`;
    }
}
PoProgressBarComponent.ɵfac = function PoProgressBarComponent_Factory(t) { return new (t || PoProgressBarComponent)(); };
PoProgressBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoProgressBarComponent, selectors: [["po-progress-bar"]], inputs: { indeterminate: ["p-indeterminate", "indeterminate"], value: ["p-value", "value"] }, decls: 3, vars: 4, consts: [[1, "po-progress-bar-element", "po-progress-bar-primary"], [1, "po-progress-bar-element", "po-progress-bar-secondary"]], template: function PoProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "div", 0)(2, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-progress-bar-indeterminate", ctx.indeterminate);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("transform", "scaleX(" + ctx.valueScale + ")");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoProgressBarComponent, [{
        type: Component,
        args: [{ selector: 'po-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [class.po-progress-bar-indeterminate]=\"indeterminate\">\r\n  <div class=\"po-progress-bar-element po-progress-bar-primary\" [style.transform]=\"'scaleX(' + valueScale + ')'\"></div>\r\n  <div class=\"po-progress-bar-element po-progress-bar-secondary\"></div>\r\n</div>\r\n" }]
    }], null, { indeterminate: [{
            type: Input,
            args: ['p-indeterminate']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wcm9ncmVzcy9wby1wcm9ncmVzcy1iYXIvcG8tcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wcm9ncmVzcy9wby1wcm9ncmVzcy1iYXIvcG8tcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8xRSxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLElBQUksVUFBVTtRQUNaLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7OzRGQVBVLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDUG5DLDJCQUEyRDtRQUN6RCx5QkFBb0gsYUFBQTtRQUV0SCxpQkFBTTs7UUFIRCxrRUFBcUQ7UUFDSyxlQUFnRDtRQUFoRCw2REFBZ0Q7O3VGRE1sRyxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUIsbUJBRVYsdUJBQXVCLENBQUMsTUFBTTtnQkFHckIsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFFTixLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wcm9ncmVzcy1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1Byb2dyZXNzQmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtaW5kZXRlcm1pbmF0ZScpIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gIGdldCB2YWx1ZVNjYWxlKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMudmFsdWUgLyAxMDB9YDtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbY2xhc3MucG8tcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1wcm9ncmVzcy1iYXItZWxlbWVudCBwby1wcm9ncmVzcy1iYXItcHJpbWFyeVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlWCgnICsgdmFsdWVTY2FsZSArICcpJ1wiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwby1wcm9ncmVzcy1iYXItZWxlbWVudCBwby1wcm9ncmVzcy1iYXItc2Vjb25kYXJ5XCI+PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=