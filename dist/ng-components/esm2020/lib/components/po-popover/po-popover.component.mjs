import { Component, ElementRef, ViewChild } from '@angular/core';
import { PoControlPositionService } from './../../services/po-control-position/po-control-position.service';
import { PoPopoverBaseComponent } from './po-popover-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../services/po-control-position/po-control-position.service";
import * as i2 from "@angular/common";
const _c0 = ["popoverElement"];
function PoPopoverComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("po-popover-arrow po-arrow-", ctx_r1.arrowDirection, "");
} }
function PoPopoverComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
const _c1 = ["*"];
/**
 *
 * @docsExtends PoPopoverBaseComponent
 *
 * @example
 *
 * <example name="po-popover-basic" title="PO Popover Basic">
 *   <file name="sample-po-popover-basic/sample-po-popover-basic.component.html"> </file>
 *   <file name="sample-po-popover-basic/sample-po-popover-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-popover-labs" title="PO Popover Labs">
 *   <file name="sample-po-popover-labs/sample-po-popover-labs.component.html"> </file>
 *   <file name="sample-po-popover-labs/sample-po-popover-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-popover-credit-card" title="PO Popover - Credit Card">
 *   <file name="sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"> </file>
 *   <file name="sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"> </file>
 * </example>
 */
export class PoPopoverComponent extends PoPopoverBaseComponent {
    constructor(renderer, poControlPosition) {
        super();
        this.renderer = renderer;
        this.poControlPosition = poControlPosition;
        this.arrowDirection = 'left';
    }
    ngAfterViewInit() {
        this.targetElement = this.target instanceof ElementRef ? this.target.nativeElement : this.target;
        this.initEventListenerFunction();
        this.setElementsControlPosition();
        this.setRendererListenInit();
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    close() {
        this.isHidden = true;
        this.closePopover.emit();
    }
    debounceResize() {
        clearTimeout(this.timeoutResize);
        this.timeoutResize = setTimeout(() => {
            this.setPopoverPosition();
        }, 200);
    }
    open() {
        this.addScrollEventListener();
        this.isHidden = false;
        this.setOpacity(0);
        setTimeout(() => {
            this.setElementsControlPosition();
            this.setPopoverPosition();
            this.setOpacity(1);
        });
    }
    setOpacity(value) {
        this.popoverElement.nativeElement.style.opacity = value;
    }
    setPopoverPosition() {
        this.poControlPosition.adjustPosition(this.position);
        this.arrowDirection = this.poControlPosition.getArrowDirection();
    }
    setRendererListenInit() {
        this.resizeListener = this.renderer.listen('window', 'resize', (event) => {
            if (!this.isHidden) {
                this.debounceResize();
            }
        });
        if (this.trigger === 'hover') {
            this.mouseEnterListener = this.renderer.listen(this.targetElement, 'mouseenter', (event) => {
                this.open();
            });
            this.mouseLeaveListener = this.renderer.listen(this.targetElement, 'mouseleave', (event) => {
                this.close();
            });
        }
        else {
            this.clickoutListener = this.renderer.listen('document', 'click', (event) => {
                this.togglePopup(event);
            });
        }
    }
    togglePopup(event) {
        if (!this.isHidden &&
            !this.popoverElement.nativeElement.contains(event.target) &&
            !this.targetElement.contains(event.target)) {
            this.close();
        }
        else if (this.targetElement.contains(event.target)) {
            this.popoverElement.nativeElement.hidden ? this.open() : this.close();
        }
    }
    addScrollEventListener() {
        window.addEventListener('scroll', this.eventListenerFunction, true);
    }
    initEventListenerFunction() {
        this.eventListenerFunction = () => {
            this.setPopoverPosition();
        };
    }
    removeListeners() {
        if (this.clickoutListener) {
            this.clickoutListener();
        }
        if (this.mouseEnterListener) {
            this.mouseEnterListener();
        }
        if (this.mouseLeaveListener) {
            this.mouseLeaveListener();
        }
        this.resizeListener();
        window.removeEventListener('scroll', this.eventListenerFunction, true);
    }
    setElementsControlPosition() {
        const popoverOffset = 8;
        this.poControlPosition.setElements(this.popoverElement.nativeElement, popoverOffset, this.target);
    }
}
PoPopoverComponent.ɵfac = function PoPopoverComponent_Factory(t) { return new (t || PoPopoverComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.PoControlPositionService)); };
PoPopoverComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPopoverComponent, selectors: [["po-popover"]], viewQuery: function PoPopoverComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popoverElement = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([PoControlPositionService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 3, consts: [[1, "po-popover", 3, "hidden"], ["popoverElement", ""], [3, "class", 4, "ngIf"], [1, "po-popover-content"], ["class", "po-popover-title", 4, "ngIf"], [1, "po-popover-title"]], template: function PoPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PoPopoverComponent_div_2_Template, 1, 3, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, PoPopoverComponent_span_4_Template, 2, 1, "span", 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("hidden", ctx.isHidden);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideArrow);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, dependencies: [i2.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPopoverComponent, [{
        type: Component,
        args: [{ selector: 'po-popover', providers: [PoControlPositionService], template: "<div [hidden]=\"isHidden\" class=\"po-popover\" #popoverElement>\r\n  <div *ngIf=\"!hideArrow\" class=\"po-popover-arrow po-arrow-{{ arrowDirection }}\"></div>\r\n\r\n  <div class=\"po-popover-content\">\r\n    <span *ngIf=\"title\" class=\"po-popover-title\">{{ title }}</span>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.PoControlPositionService }]; }, { popoverElement: [{
            type: ViewChild,
            args: ['popoverElement', { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcG9wb3Zlci9wby1wb3BvdmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wb3BvdmVyL3BvLXBvcG92ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBS1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7SUNYbkUsc0JBQXFGOzs7SUFBN0Qsa0ZBQXNEOzs7SUFHNUUsK0JBQTZDO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLGtDQUFXOzs7QURVNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBTUgsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtJQVE1RCxZQUFvQixRQUFtQixFQUFVLGlCQUEyQztRQUMxRixLQUFLLEVBQUUsQ0FBQztRQURVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBTDVGLG1CQUFjLEdBQUcsTUFBTSxDQUFDO0lBT3hCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFFakMs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Q0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRyxDQUFDOztvRkExSFUsa0JBQWtCO3FFQUFsQixrQkFBa0I7K0JBQ1EsVUFBVTs7OzswQ0FIcEMsQ0FBQyx3QkFBd0IsQ0FBQzs7UUN0Q3ZDLGlDQUE0RDtRQUMxRCxtRUFBcUY7UUFFckYsOEJBQWdDO1FBQzlCLHFFQUErRDtRQUMvRCxrQkFBeUI7UUFDM0IsaUJBQU0sRUFBQTs7UUFOSCxxQ0FBbUI7UUFDaEIsZUFBZ0I7UUFBaEIscUNBQWdCO1FBR2IsZUFBVztRQUFYLGdDQUFXOzt1RkRvQ1Qsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0UsWUFBWSxhQUVYLENBQUMsd0JBQXdCLENBQUM7bUdBRzRCLGNBQWM7a0JBQTlFLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUG9wb3ZlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXBvcG92ZXItYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BvcG92ZXJCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wb3BvdmVyLWJhc2ljXCIgdGl0bGU9XCJQTyBQb3BvdmVyIEJhc2ljXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wb3BvdmVyLWJhc2ljL3NhbXBsZS1wby1wb3BvdmVyLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBvcG92ZXItYmFzaWMvc2FtcGxlLXBvLXBvcG92ZXItYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcG9wb3Zlci1sYWJzXCIgdGl0bGU9XCJQTyBQb3BvdmVyIExhYnNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBvcG92ZXItbGFicy9zYW1wbGUtcG8tcG9wb3Zlci1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBvcG92ZXItbGFicy9zYW1wbGUtcG8tcG9wb3Zlci1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBvcG92ZXItY3JlZGl0LWNhcmRcIiB0aXRsZT1cIlBPIFBvcG92ZXIgLSBDcmVkaXQgQ2FyZFwiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcG9wb3Zlci1jcmVkaXQtY2FyZC9zYW1wbGUtcG8tcG9wb3Zlci1jcmVkaXQtY2FyZC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wb3BvdmVyLWNyZWRpdC1jYXJkL3NhbXBsZS1wby1wb3BvdmVyLWNyZWRpdC1jYXJkLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcG9wb3ZlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BvQ29udHJvbFBvc2l0aW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIFBvUG9wb3ZlckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgcG9wb3ZlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGFycm93RGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gIHRpbWVvdXRSZXNpemU7XHJcbiAgdGFyZ2V0RWxlbWVudDtcclxuICBldmVudExpc3RlbmVyRnVuY3Rpb246ICgpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBwb0NvbnRyb2xQb3NpdGlvbjogUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gdGhpcy50YXJnZXQubmF0aXZlRWxlbWVudCA6IHRoaXMudGFyZ2V0O1xyXG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lckZ1bmN0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5zZXRFbGVtZW50c0NvbnRyb2xQb3NpdGlvbigpO1xyXG5cclxuICAgIHRoaXMuc2V0UmVuZGVyZXJMaXN0ZW5Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jbG9zZVBvcG92ZXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgZGVib3VuY2VSZXNpemUoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0UmVzaXplKTtcclxuICAgIHRoaXMudGltZW91dFJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFBvcG92ZXJQb3NpdGlvbigpO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcclxuXHJcbiAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldE9wYWNpdHkoMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RWxlbWVudHNDb250cm9sUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5zZXRQb3BvdmVyUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRPcGFjaXR5KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucG9wb3ZlckVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRQb3BvdmVyUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnBvQ29udHJvbFBvc2l0aW9uLmFkanVzdFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xyXG4gICAgdGhpcy5hcnJvd0RpcmVjdGlvbiA9IHRoaXMucG9Db250cm9sUG9zaXRpb24uZ2V0QXJyb3dEaXJlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHNldFJlbmRlcmVyTGlzdGVuSW5pdCgpIHtcclxuICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKSB7XHJcbiAgICAgICAgdGhpcy5kZWJvdW5jZVJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIHRoaXMubW91c2VFbnRlckxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy50YXJnZXRFbGVtZW50LCAnbW91c2VlbnRlcicsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMubW91c2VMZWF2ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy50YXJnZXRFbGVtZW50LCAnbW91c2VsZWF2ZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsaWNrb3V0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBvcHVwKGV2ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQb3B1cChldmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5pc0hpZGRlbiAmJlxyXG4gICAgICAhdGhpcy5wb3BvdmVyRWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgIXRoaXMudGFyZ2V0RWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLnBvcG92ZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGlkZGVuID8gdGhpcy5vcGVuKCkgOiB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ldmVudExpc3RlbmVyRnVuY3Rpb24sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RXZlbnRMaXN0ZW5lckZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5ldmVudExpc3RlbmVyRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0UG9wb3ZlclBvc2l0aW9uKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBpZiAodGhpcy5jbGlja291dExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tvdXRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubW91c2VFbnRlckxpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMubW91c2VFbnRlckxpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tb3VzZUxlYXZlTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5tb3VzZUxlYXZlTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyKCk7XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZlbnRMaXN0ZW5lckZ1bmN0aW9uLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RWxlbWVudHNDb250cm9sUG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBwb3BvdmVyT2Zmc2V0ID0gODtcclxuICAgIHRoaXMucG9Db250cm9sUG9zaXRpb24uc2V0RWxlbWVudHModGhpcy5wb3BvdmVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCBwb3BvdmVyT2Zmc2V0LCB0aGlzLnRhcmdldCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW2hpZGRlbl09XCJpc0hpZGRlblwiIGNsYXNzPVwicG8tcG9wb3ZlclwiICNwb3BvdmVyRWxlbWVudD5cclxuICA8ZGl2ICpuZ0lmPVwiIWhpZGVBcnJvd1wiIGNsYXNzPVwicG8tcG9wb3Zlci1hcnJvdyBwby1hcnJvdy17eyBhcnJvd0RpcmVjdGlvbiB9fVwiPjwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tcG9wb3Zlci1jb250ZW50XCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cInRpdGxlXCIgY2xhc3M9XCJwby1wb3BvdmVyLXRpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=