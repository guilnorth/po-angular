import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["pointer"];
const _c1 = ["po-gauge-pointer", ""];
export class PoGaugePointerComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.afterViewInit = false;
    }
    set coordinates(value) {
        this._coordinates = value;
        if (this._coordinates?.radius) {
            this.calculateRadiusScale(this.coordinates.radius);
        }
        if (this._coordinates?.hasOwnProperty('pointerDegrees') && this.afterViewInit) {
            this.applyPointerRotation(this.coordinates.pointerDegrees);
        }
    }
    get coordinates() {
        return this._coordinates;
    }
    ngAfterViewInit() {
        if (this._coordinates?.pointerDegrees) {
            this.applyPointerRotation(this.coordinates.pointerDegrees);
        }
        this.afterViewInit = true;
    }
    calculateRadiusScale(radius) {
        const scale = radius / 20;
        const maxScaleValue = 24;
        this.radiusScale = scale < maxScaleValue ? scale : maxScaleValue;
    }
    applyPointerRotation(degrees) {
        this.renderer.setStyle(this.pointer.nativeElement, 'transformOrigin', `${this.coordinates.radius}px ${this.coordinates.radius}px`);
        this.renderer.setStyle(this.pointer.nativeElement, 'transform', `rotate(${degrees}deg)`);
    }
}
PoGaugePointerComponent.ɵfac = function PoGaugePointerComponent_Factory(t) { return new (t || PoGaugePointerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoGaugePointerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugePointerComponent, selectors: [["", "po-gauge-pointer", ""]], viewQuery: function PoGaugePointerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pointer = _t.first);
    } }, inputs: { coordinates: ["p-coordinates", "coordinates"] }, attrs: _c1, decls: 4, vars: 4, consts: [[1, "po-gauge-pointer"], ["pointer", ""], [1, "po-gauge-pointer-circle"]], template: function PoGaugePointerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵelement(1, "path", 0, 1)(3, "circle", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("d", ctx.coordinates == null ? null : ctx.coordinates.coordinates);
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("cx", ctx.coordinates == null ? null : ctx.coordinates.radius)("cy", ctx.coordinates == null ? null : ctx.coordinates.radius)("r", ctx.radiusScale);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugePointerComponent, [{
        type: Component,
        args: [{ selector: '[po-gauge-pointer]', template: "<svg:g>\r\n  <svg:path #pointer\r\n    class=\"po-gauge-pointer\"\r\n    [attr.d]=\"coordinates?.coordinates\"\r\n  >\r\n  </svg:path> \r\n\r\n  <svg:circle \r\n    class=\"po-gauge-pointer-circle\" \r\n    [attr.cx]=\"coordinates?.radius\" \r\n    [attr.cy]=\"coordinates?.radius\" \r\n    [attr.r]=\"radiusScale\"\r\n  >\r\n  </svg:circle>\r\n</svg:g>" }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { pointer: [{
            type: ViewChild,
            args: ['pointer']
        }], coordinates: [{
            type: Input,
            args: ['p-coordinates']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UtcG9pbnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ2F1Z2UvcG8tZ2F1Z2Utc3ZnL3BvLWdhdWdlLXBvaW50ZXIvcG8tZ2F1Z2UtcG9pbnRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ2F1Z2UvcG8tZ2F1Z2Utc3ZnL3BvLWdhdWdlLXBvaW50ZXIvcG8tZ2F1Z2UtcG9pbnRlci5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPbEcsTUFBTSxPQUFPLHVCQUF1QjtJQXlCbEMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWxCL0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFrQlksQ0FBQztJQWhCM0MsSUFBNEIsV0FBVyxDQUFDLEtBQXlCO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUlELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVPLG9CQUFvQixDQUFDLE1BQU07UUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMxQixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUNuRSxDQUFDO0lBRU8sb0JBQW9CLENBQUMsT0FBZTtRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQzFCLGlCQUFpQixFQUNqQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQzVELENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxPQUFPLE1BQU0sQ0FBQyxDQUFDO0lBQzNGLENBQUM7OzhGQWpEVSx1QkFBdUI7MEVBQXZCLHVCQUF1Qjs7Ozs7O1FDUHBDLG1CQUFPO1FBQVAseUJBQU87UUFDTCw2QkFJVyxnQkFBQTtRQVNiLGlCQUFROztRQVhKLGVBQW1DO1FBQW5DLGlGQUFtQztRQU1uQyxlQUErQjtRQUEvQiw2RUFBK0IsK0RBQUEsc0JBQUE7O3VGREZ0Qix1QkFBdUI7Y0FKbkMsU0FBUzsyQkFDRSxvQkFBb0I7NERBSVIsT0FBTztrQkFBNUIsU0FBUzttQkFBQyxTQUFTO1lBUVEsV0FBVztrQkFBdEMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9HYXVnZUNvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wby1nYXVnZS1jb29yZGluYXRlcy5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbcG8tZ2F1Z2UtcG9pbnRlcl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1nYXVnZS1wb2ludGVyLmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0dhdWdlUG9pbnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3BvaW50ZXInKSBwb2ludGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICByYWRpdXNTY2FsZTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9jb29yZGluYXRlczogUG9HYXVnZUNvb3JkaW5hdGVzO1xyXG5cclxuICBwcml2YXRlIGFmdGVyVmlld0luaXQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdwLWNvb3JkaW5hdGVzJykgc2V0IGNvb3JkaW5hdGVzKHZhbHVlOiBQb0dhdWdlQ29vcmRpbmF0ZXMpIHtcclxuICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Nvb3JkaW5hdGVzPy5yYWRpdXMpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVSYWRpdXNTY2FsZSh0aGlzLmNvb3JkaW5hdGVzLnJhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2Nvb3JkaW5hdGVzPy5oYXNPd25Qcm9wZXJ0eSgncG9pbnRlckRlZ3JlZXMnKSAmJiB0aGlzLmFmdGVyVmlld0luaXQpIHtcclxuICAgICAgdGhpcy5hcHBseVBvaW50ZXJSb3RhdGlvbih0aGlzLmNvb3JkaW5hdGVzLnBvaW50ZXJEZWdyZWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb29yZGluYXRlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb29yZGluYXRlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuX2Nvb3JkaW5hdGVzPy5wb2ludGVyRGVncmVlcykge1xyXG4gICAgICB0aGlzLmFwcGx5UG9pbnRlclJvdGF0aW9uKHRoaXMuY29vcmRpbmF0ZXMucG9pbnRlckRlZ3JlZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVJhZGl1c1NjYWxlKHJhZGl1cykge1xyXG4gICAgY29uc3Qgc2NhbGUgPSByYWRpdXMgLyAyMDtcclxuICAgIGNvbnN0IG1heFNjYWxlVmFsdWUgPSAyNDtcclxuXHJcbiAgICB0aGlzLnJhZGl1c1NjYWxlID0gc2NhbGUgPCBtYXhTY2FsZVZhbHVlID8gc2NhbGUgOiBtYXhTY2FsZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseVBvaW50ZXJSb3RhdGlvbihkZWdyZWVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMucG9pbnRlci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAndHJhbnNmb3JtT3JpZ2luJyxcclxuICAgICAgYCR7dGhpcy5jb29yZGluYXRlcy5yYWRpdXN9cHggJHt0aGlzLmNvb3JkaW5hdGVzLnJhZGl1c31weGBcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucG9pbnRlci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHJvdGF0ZSgke2RlZ3JlZXN9ZGVnKWApO1xyXG4gIH1cclxufVxyXG4iLCI8c3ZnOmc+XHJcbiAgPHN2ZzpwYXRoICNwb2ludGVyXHJcbiAgICBjbGFzcz1cInBvLWdhdWdlLXBvaW50ZXJcIlxyXG4gICAgW2F0dHIuZF09XCJjb29yZGluYXRlcz8uY29vcmRpbmF0ZXNcIlxyXG4gID5cclxuICA8L3N2ZzpwYXRoPiBcclxuXHJcbiAgPHN2ZzpjaXJjbGUgXHJcbiAgICBjbGFzcz1cInBvLWdhdWdlLXBvaW50ZXItY2lyY2xlXCIgXHJcbiAgICBbYXR0ci5jeF09XCJjb29yZGluYXRlcz8ucmFkaXVzXCIgXHJcbiAgICBbYXR0ci5jeV09XCJjb29yZGluYXRlcz8ucmFkaXVzXCIgXHJcbiAgICBbYXR0ci5yXT1cInJhZGl1c1NjYWxlXCJcclxuICA+XHJcbiAgPC9zdmc6Y2lyY2xlPlxyXG48L3N2ZzpnPiJdfQ==