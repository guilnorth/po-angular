import { Directive, HostListener } from '@angular/core';
import { PoTooltipBaseDirective } from './po-tooltip-base.directive';
import { PoTooltipControlPositionService } from './po-tooltip-control-position.service';
import * as i0 from "@angular/core";
import * as i1 from "./po-tooltip-control-position.service";
const nativeElements = ['input', 'button'];
/**
 * @docsExtends PoTooltipBaseDirective
 *
 * @example
 *
 * <example name="po-tooltip-basic" title="PO Tooltip Basic" >
 *  <file name="sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"> </file>
 *  <file name="sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tooltip-labs" title="PO Tooltip Labs" >
 *  <file name="sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"> </file>
 *  <file name="sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tooltip-new-user" title="PO Tooltip - New User" >
 *  <file name="sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"> </file>
 *  <file name="sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"> </file>
 * </example>
 *
 */
export class PoTooltipDirective extends PoTooltipBaseDirective {
    constructor(elementRef, renderer, poControlPosition) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.poControlPosition = poControlPosition;
        this.tooltipOffset = 8;
    }
    onMouseEnter() {
        if (!this.displayTooltip) {
            this.addTooltipAction();
        }
    }
    onMouseLeave() {
        if (!this.displayTooltip) {
            this.removeTooltipAction();
        }
    }
    onFocusOut() {
        if (!this.displayTooltip) {
            this.removeTooltipAction();
        }
    }
    onFocusIn() {
        if (!this.displayTooltip) {
            this.addTooltipAction();
        }
    }
    ngOnInit() {
        this.initScrollEventListenerFunction();
    }
    addTooltipAction() {
        setTimeout(() => {
            if (this.tooltip) {
                this.tooltipContent ? this.showTooltip() : this.createTooltip();
                this.removeArrow(this.arrowDirection);
                this.poControlPosition.adjustPosition(this.tooltipPosition);
                this.arrowDirection = this.poControlPosition.getArrowDirection();
                this.addArrow(this.arrowDirection);
                this.lastTooltipText = this.tooltip;
            }
        });
    }
    removeTooltipAction() {
        // necessita do timeout para conseguir adicionar ".po-invisible", pois quando tem alguns elementos
        // próximos com tooltips e ficar passando o mouse em cima, os mesmos não estavam ficando invisiveis.
        setTimeout(() => {
            if (this.appendInBody && this.tooltipContent) {
                this.renderer.removeChild(document.body, this.tooltipContent);
                this.tooltipContent = undefined;
            }
            else {
                this.hideTooltip();
            }
        });
    }
    addArrow(arrowDirection) {
        this.renderer.addClass(this.divArrow, `po-arrow-${arrowDirection}`);
    }
    addScrollEventListener() {
        window.addEventListener('scroll', this.eventListenerFunction, true);
    }
    // Monta a estrutura do tooltip
    createTooltip() {
        this.tooltipContent = this.renderer.createElement('div');
        this.renderer.addClass(this.tooltipContent, 'po-tooltip');
        this.insertAriaLabelTooltip();
        this.divArrow = this.renderer.createElement('div');
        this.renderer.addClass(this.divArrow, 'po-tooltip-arrow');
        this.divContent = this.renderer.createElement('div');
        this.renderer.addClass(this.divContent, 'po-tooltip-content');
        this.textContent = this.renderer.createText(this.tooltip);
        this.renderer.appendChild(this.divContent, this.textContent);
        this.renderer.appendChild(this.tooltipContent, this.divArrow);
        this.renderer.appendChild(this.tooltipContent, this.divContent);
        const parentTarget = this.appendInBody ? document.body : this.elementRef.nativeElement;
        this.renderer.appendChild(parentTarget, this.tooltipContent);
        this.poControlPosition.setElements(this.tooltipContent, this.tooltipOffset, this.elementRef);
        this.addScrollEventListener();
    }
    initScrollEventListenerFunction() {
        this.eventListenerFunction = () => {
            if (!this.isHidden) {
                setTimeout(() => {
                    this.poControlPosition.adjustPosition(this.tooltipPosition);
                });
            }
        };
    }
    hideTooltip() {
        if (this.tooltipContent) {
            this.renderer.addClass(this.tooltipContent, 'po-invisible');
            this.isHidden = true;
            this.removeScrollEventListener();
        }
    }
    removeArrow(arrowDirection) {
        if (this.elementRef.nativeElement.querySelector(`.po-arrow-${arrowDirection}`)) {
            this.renderer.removeClass(this.divArrow, `po-arrow-${arrowDirection}`);
        }
    }
    removeScrollEventListener() {
        window.removeEventListener('scroll', this.eventListenerFunction, true);
    }
    showTooltip() {
        this.renderer.removeClass(this.tooltipContent, 'po-invisible');
        this.updateTextContent();
        this.isHidden = false;
        this.addScrollEventListener();
    }
    updateTextContent() {
        if (this.lastTooltipText !== this.tooltip) {
            this.renderer.removeChild(this.divContent, this.textContent);
            this.textContent = this.renderer.createText(this.tooltip);
            this.renderer.appendChild(this.divContent, this.textContent);
        }
    }
    insertAriaLabelTooltip() {
        const nativeTextContent = this.elementRef.nativeElement.textContent;
        let targetElement = '';
        nativeElements.forEach(el => {
            if (this.elementRef.nativeElement.getElementsByTagName(el)[0] !== undefined) {
                targetElement = el;
            }
        });
        if (this.elementRef.nativeElement.getElementsByTagName(targetElement)[0] && this.tooltip) {
            this.renderer.setAttribute(this.elementRef.nativeElement.getElementsByTagName(targetElement)[0], 'aria-label', nativeTextContent + ' ' + this.tooltip);
        }
    }
}
PoTooltipDirective.ɵfac = function PoTooltipDirective_Factory(t) { return new (t || PoTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.PoTooltipControlPositionService)); };
PoTooltipDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTooltipDirective, selectors: [["", "p-tooltip", ""]], hostBindings: function PoTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PoTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function PoTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("focusout", function PoTooltipDirective_focusout_HostBindingHandler() { return ctx.onFocusOut(); })("focusin", function PoTooltipDirective_focusin_HostBindingHandler() { return ctx.onFocusIn(); });
    } }, features: [i0.ɵɵProvidersFeature([PoTooltipControlPositionService]), i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[p-tooltip]',
                providers: [PoTooltipControlPositionService]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.PoTooltipControlPositionService }]; }, { onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onFocusOut: [{
            type: HostListener,
            args: ['focusout']
        }], onFocusIn: [{
            type: HostListener,
            args: ['focusin']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2RpcmVjdGl2ZXMvcG8tdG9vbHRpcC9wby10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7OztBQUV4RixNQUFNLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFLSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBVzVELFlBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsaUJBQWtEO1FBRTFELEtBQUssRUFBRSxDQUFDO1FBSkEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUM7UUFQcEQsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFVbEMsQ0FBQztJQUUyQixZQUFZO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUUyQixZQUFZO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUV5QixVQUFVO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NB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c3RlbmVyLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Ub29sdGlwQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4vcG8tdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvVG9vbHRpcENvbnRyb2xQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuL3BvLXRvb2x0aXAtY29udHJvbC1wb3NpdGlvbi5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IG5hdGl2ZUVsZW1lbnRzID0gWydpbnB1dCcsICdidXR0b24nXTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Ub29sdGlwQmFzZURpcmVjdGl2ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdG9vbHRpcC1iYXNpY1wiIHRpdGxlPVwiUE8gVG9vbHRpcCBCYXNpY1wiID5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdG9vbHRpcC1iYXNpYy9zYW1wbGUtcG8tdG9vbHRpcC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRvb2x0aXAtYmFzaWMvc2FtcGxlLXBvLXRvb2x0aXAtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdG9vbHRpcC1sYWJzXCIgdGl0bGU9XCJQTyBUb29sdGlwIExhYnNcIiA+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXRvb2x0aXAtbGFicy9zYW1wbGUtcG8tdG9vbHRpcC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdG9vbHRpcC1sYWJzL3NhbXBsZS1wby10b29sdGlwLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdG9vbHRpcC1uZXctdXNlclwiIHRpdGxlPVwiUE8gVG9vbHRpcCAtIE5ldyBVc2VyXCIgPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby10b29sdGlwLW5ldy11c2VyL3NhbXBsZS1wby10b29sdGlwLW5ldy11c2VyLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdG9vbHRpcC1uZXctdXNlci9zYW1wbGUtcG8tdG9vbHRpcC1uZXctdXNlci5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1twLXRvb2x0aXBdJyxcclxuICBwcm92aWRlcnM6IFtQb1Rvb2x0aXBDb250cm9sUG9zaXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Ub29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgUG9Ub29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBhcnJvd0RpcmVjdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgZGl2QXJyb3c7XHJcbiAgcHJpdmF0ZSBkaXZDb250ZW50O1xyXG4gIHByaXZhdGUgaXNIaWRkZW46IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsYXN0VG9vbHRpcFRleHQ6IHN0cmluZztcclxuICBwcml2YXRlIHRleHRDb250ZW50O1xyXG4gIHByaXZhdGUgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcclxuXHJcbiAgcHJpdmF0ZSBldmVudExpc3RlbmVyRnVuY3Rpb246ICgpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwb0NvbnRyb2xQb3NpdGlvbjogUG9Ub29sdGlwQ29udHJvbFBvc2l0aW9uU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzcGxheVRvb2x0aXApIHtcclxuICAgICAgdGhpcy5hZGRUb29sdGlwQWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc3BsYXlUb29sdGlwKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcEFjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKSBvbkZvY3VzT3V0KCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc3BsYXlUb29sdGlwKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcEFjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpIG9uRm9jdXNJbigpIHtcclxuICAgIGlmICghdGhpcy5kaXNwbGF5VG9vbHRpcCkge1xyXG4gICAgICB0aGlzLmFkZFRvb2x0aXBBY3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0U2Nyb2xsRXZlbnRMaXN0ZW5lckZ1bmN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkVG9vbHRpcEFjdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwQ29udGVudCA/IHRoaXMuc2hvd1Rvb2x0aXAoKSA6IHRoaXMuY3JlYXRlVG9vbHRpcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZUFycm93KHRoaXMuYXJyb3dEaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnBvQ29udHJvbFBvc2l0aW9uLmFkanVzdFBvc2l0aW9uKHRoaXMudG9vbHRpcFBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmFycm93RGlyZWN0aW9uID0gdGhpcy5wb0NvbnRyb2xQb3NpdGlvbi5nZXRBcnJvd0RpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEFycm93KHRoaXMuYXJyb3dEaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RUb29sdGlwVGV4dCA9IHRoaXMudG9vbHRpcDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVtb3ZlVG9vbHRpcEFjdGlvbigpIHtcclxuICAgIC8vIG5lY2Vzc2l0YSBkbyB0aW1lb3V0IHBhcmEgY29uc2VndWlyIGFkaWNpb25hciBcIi5wby1pbnZpc2libGVcIiwgcG9pcyBxdWFuZG8gdGVtIGFsZ3VucyBlbGVtZW50b3NcclxuICAgIC8vIHByw7N4aW1vcyBjb20gdG9vbHRpcHMgZSBmaWNhciBwYXNzYW5kbyBvIG1vdXNlIGVtIGNpbWEsIG9zIG1lc21vcyBuw6NvIGVzdGF2YW0gZmljYW5kbyBpbnZpc2l2ZWlzLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmFwcGVuZEluQm9keSAmJiB0aGlzLnRvb2x0aXBDb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLnRvb2x0aXBDb250ZW50KTtcclxuICAgICAgICB0aGlzLnRvb2x0aXBDb250ZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEFycm93KGFycm93RGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZGl2QXJyb3csIGBwby1hcnJvdy0ke2Fycm93RGlyZWN0aW9ufWApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTY3JvbGxFdmVudExpc3RlbmVyKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZlbnRMaXN0ZW5lckZ1bmN0aW9uLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIE1vbnRhIGEgZXN0cnV0dXJhIGRvIHRvb2x0aXBcclxuICBwcml2YXRlIGNyZWF0ZVRvb2x0aXAoKSB7XHJcbiAgICB0aGlzLnRvb2x0aXBDb250ZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b29sdGlwQ29udGVudCwgJ3BvLXRvb2x0aXAnKTtcclxuXHJcbiAgICB0aGlzLmluc2VydEFyaWFMYWJlbFRvb2x0aXAoKTtcclxuXHJcbiAgICB0aGlzLmRpdkFycm93ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kaXZBcnJvdywgJ3BvLXRvb2x0aXAtYXJyb3cnKTtcclxuXHJcbiAgICB0aGlzLmRpdkNvbnRlbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRpdkNvbnRlbnQsICdwby10b29sdGlwLWNvbnRlbnQnKTtcclxuXHJcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMudG9vbHRpcCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRpdkNvbnRlbnQsIHRoaXMudGV4dENvbnRlbnQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLnRvb2x0aXBDb250ZW50LCB0aGlzLmRpdkFycm93KTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwQ29udGVudCwgdGhpcy5kaXZDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBwYXJlbnRUYXJnZXQgPSB0aGlzLmFwcGVuZEluQm9keSA/IGRvY3VtZW50LmJvZHkgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50VGFyZ2V0LCB0aGlzLnRvb2x0aXBDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnBvQ29udHJvbFBvc2l0aW9uLnNldEVsZW1lbnRzKHRoaXMudG9vbHRpcENvbnRlbnQsIHRoaXMudG9vbHRpcE9mZnNldCwgdGhpcy5lbGVtZW50UmVmKTtcclxuXHJcbiAgICB0aGlzLmFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFNjcm9sbEV2ZW50TGlzdGVuZXJGdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lckZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucG9Db250cm9sUG9zaXRpb24uYWRqdXN0UG9zaXRpb24odGhpcy50b29sdGlwUG9zaXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlVG9vbHRpcCgpIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXBDb250ZW50KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b29sdGlwQ29udGVudCwgJ3BvLWludmlzaWJsZScpO1xyXG4gICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVBcnJvdyhhcnJvd0RpcmVjdGlvbikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wby1hcnJvdy0ke2Fycm93RGlyZWN0aW9ufWApKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kaXZBcnJvdywgYHBvLWFycm93LSR7YXJyb3dEaXJlY3Rpb259YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ldmVudExpc3RlbmVyRnVuY3Rpb24sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9vbHRpcCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwQ29udGVudCwgJ3BvLWludmlzaWJsZScpO1xyXG4gICAgdGhpcy51cGRhdGVUZXh0Q29udGVudCgpO1xyXG4gICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUZXh0Q29udGVudCgpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUb29sdGlwVGV4dCAhPT0gdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5kaXZDb250ZW50LCB0aGlzLnRleHRDb250ZW50KTtcclxuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLnRvb2x0aXApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZGl2Q29udGVudCwgdGhpcy50ZXh0Q29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydEFyaWFMYWJlbFRvb2x0aXAoKSB7XHJcbiAgICBjb25zdCBuYXRpdmVUZXh0Q29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSAnJztcclxuXHJcbiAgICBuYXRpdmVFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGVsKVswXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IGVsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFyZ2V0RWxlbWVudClbMF0gJiYgdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhcmdldEVsZW1lbnQpWzBdLFxyXG4gICAgICAgICdhcmlhLWxhYmVsJyxcclxuICAgICAgICBuYXRpdmVUZXh0Q29udGVudCArICcgJyArIHRoaXMudG9vbHRpcFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=