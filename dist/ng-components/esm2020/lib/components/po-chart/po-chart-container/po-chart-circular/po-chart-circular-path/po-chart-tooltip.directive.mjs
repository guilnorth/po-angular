import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PoChartTooltipDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    onMouseEnter(event) {
        this.tooltipElement ? this.showTooltip() : this.createTooltip();
        this.tooltipPosition(event);
        this.lastTooltipText = this.tooltip;
    }
    onMouseLeave() {
        this.hideTooltip();
    }
    onMouseMove(event) {
        this.tooltipPosition(event);
    }
    calculateTooltipPosition(event) {
        const displacement = 12;
        return {
            left: event.clientX - this.tooltipElement.offsetWidth / 2,
            top: event.clientY - this.tooltipElement.offsetHeight - displacement
        };
    }
    createTooltip() {
        const chartWrapper = this.elementRef.nativeElement.closest('.po-chart-wrapper');
        this.tooltipElement = this.renderer.createElement('div');
        this.renderer.addClass(this.tooltipElement, 'po-chart-tooltip');
        this.renderer.addClass(this.tooltipElement, 'po-tooltip');
        const divArrow = this.renderer.createElement('div');
        this.renderer.addClass(divArrow, 'po-tooltip-arrow');
        this.renderer.addClass(divArrow, 'po-arrow-bottom');
        this.tooltipText = this.renderer.createElement('p');
        this.renderer.addClass(this.tooltipText, 'po-tooltip-content');
        this.tooltipTextContent = this.renderer.createText(this.tooltip);
        this.renderer.appendChild(this.tooltipText, this.tooltipTextContent);
        this.renderer.appendChild(this.tooltipElement, divArrow);
        this.renderer.appendChild(this.tooltipElement, this.tooltipText);
        this.renderer.appendChild(chartWrapper, this.tooltipElement);
    }
    hideTooltip() {
        this.renderer.addClass(this.tooltipElement, 'po-invisible');
    }
    showTooltip() {
        this.renderer.removeClass(this.tooltipElement, 'po-invisible');
        this.updatetooltipTextContent();
    }
    tooltipPosition(event) {
        const tooltipPositions = this.calculateTooltipPosition(event);
        this.renderer.setStyle(this.tooltipElement, 'left', `${tooltipPositions.left}px`);
        this.renderer.setStyle(this.tooltipElement, 'top', `${tooltipPositions.top}px`);
    }
    updatetooltipTextContent() {
        if (this.lastTooltipText !== this.tooltip) {
            this.renderer.removeChild(this.tooltipText, this.tooltipTextContent);
            this.tooltipTextContent = this.renderer.createText(this.tooltip);
            this.renderer.appendChild(this.tooltipText, this.tooltipTextContent);
        }
    }
}
PoChartTooltipDirective.ɵfac = function PoChartTooltipDirective_Factory(t) { return new (t || PoChartTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoChartTooltipDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoChartTooltipDirective, selectors: [["", "p-chart-tooltip", ""]], hostBindings: function PoChartTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PoChartTooltipDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("mouseleave", function PoChartTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousemove", function PoChartTooltipDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); });
    } }, inputs: { tooltip: ["p-chart-tooltip", "tooltip"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[p-chart-tooltip]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { tooltip: [{
            type: Input,
            args: ['p-chart-tooltip']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter', ['$event']]
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseMove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLXBhdGgvcG8tY2hhcnQtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQUt0RixNQUFNLE9BQU8sdUJBQXVCO0lBUWxDLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDO0lBRW5DLFlBQVksQ0FBQyxLQUFpQjtRQUNwRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRTJCLFlBQVk7UUFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFc0MsV0FBVyxDQUFDLEtBQWlCO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLHdCQUF3QixDQUFDLEtBQWlCO1FBQ2hELE1BQU0sWUFBWSxHQUFXLEVBQUUsQ0FBQztRQUVoQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQztZQUN6RCxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxZQUFZO1NBQ3JFLENBQUM7SUFDSixDQUFDO0lBRU8sYUFBYTtRQUNuQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTFELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBaUI7UUFDdkMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7OEZBOUVVLHVCQUF1QjswRUFBdkIsdUJBQXVCO29IQUF2Qix3QkFBb0IsNkZBQXBCLGtCQUFjLGlHQUFkLHVCQUFtQjs7dUZBQW5CLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5QjtxRkFFMkIsT0FBTztrQkFBaEMsS0FBSzttQkFBQyxpQkFBaUI7WUFTZ0IsWUFBWTtrQkFBbkQsWUFBWTttQkFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFNVixZQUFZO2tCQUF2QyxZQUFZO21CQUFDLFlBQVk7WUFJYSxXQUFXO2tCQUFqRCxZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1twLWNoYXJ0LXRvb2x0aXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydFRvb2x0aXBEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgncC1jaGFydC10b29sdGlwJykgdG9vbHRpcDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGxhc3RUb29sdGlwVGV4dDogc3RyaW5nO1xyXG4gIHByaXZhdGUgdG9vbHRpcEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSB0b29sdGlwVGV4dDtcclxuICBwcml2YXRlIHRvb2x0aXBUZXh0Q29udGVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbJyRldmVudCddKSBvbk1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMudG9vbHRpcEVsZW1lbnQgPyB0aGlzLnNob3dUb29sdGlwKCkgOiB0aGlzLmNyZWF0ZVRvb2x0aXAoKTtcclxuICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uKGV2ZW50KTtcclxuICAgIHRoaXMubGFzdFRvb2x0aXBUZXh0ID0gdGhpcy50b29sdGlwO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnRvb2x0aXBQb3NpdGlvbihldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVRvb2x0aXBQb3NpdGlvbihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgZGlzcGxhY2VtZW50OiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsZWZ0OiBldmVudC5jbGllbnRYIC0gdGhpcy50b29sdGlwRWxlbWVudC5vZmZzZXRXaWR0aCAvIDIsXHJcbiAgICAgIHRvcDogZXZlbnQuY2xpZW50WSAtIHRoaXMudG9vbHRpcEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gZGlzcGxhY2VtZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVUb29sdGlwKCkge1xyXG4gICAgY29uc3QgY2hhcnRXcmFwcGVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnLnBvLWNoYXJ0LXdyYXBwZXInKTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXBFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b29sdGlwRWxlbWVudCwgJ3BvLWNoYXJ0LXRvb2x0aXAnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b29sdGlwRWxlbWVudCwgJ3BvLXRvb2x0aXAnKTtcclxuXHJcbiAgICBjb25zdCBkaXZBcnJvdyA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRpdkFycm93LCAncG8tdG9vbHRpcC1hcnJvdycpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkaXZBcnJvdywgJ3BvLWFycm93LWJvdHRvbScpO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b29sdGlwVGV4dCwgJ3BvLXRvb2x0aXAtY29udGVudCcpO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcFRleHRDb250ZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMudG9vbHRpcCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLnRvb2x0aXBUZXh0LCB0aGlzLnRvb2x0aXBUZXh0Q29udGVudCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcEVsZW1lbnQsIGRpdkFycm93KTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwRWxlbWVudCwgdGhpcy50b29sdGlwVGV4dCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChjaGFydFdyYXBwZXIsIHRoaXMudG9vbHRpcEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlVG9vbHRpcCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b29sdGlwRWxlbWVudCwgJ3BvLWludmlzaWJsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9vbHRpcCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwRWxlbWVudCwgJ3BvLWludmlzaWJsZScpO1xyXG4gICAgdGhpcy51cGRhdGV0b29sdGlwVGV4dENvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9vbHRpcFBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBjb25zdCB0b29sdGlwUG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVUb29sdGlwUG9zaXRpb24oZXZlbnQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50b29sdGlwRWxlbWVudCwgJ2xlZnQnLCBgJHt0b29sdGlwUG9zaXRpb25zLmxlZnR9cHhgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50b29sdGlwRWxlbWVudCwgJ3RvcCcsIGAke3Rvb2x0aXBQb3NpdGlvbnMudG9wfXB4YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZXRvb2x0aXBUZXh0Q29udGVudCgpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUb29sdGlwVGV4dCAhPT0gdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwVGV4dCwgdGhpcy50b29sdGlwVGV4dENvbnRlbnQpO1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0Q29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLnRvb2x0aXApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcFRleHQsIHRoaXMudG9vbHRpcFRleHRDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19