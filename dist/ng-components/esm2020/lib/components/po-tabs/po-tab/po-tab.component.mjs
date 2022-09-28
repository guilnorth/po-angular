import { Component } from '@angular/core';
import { PoTabBaseComponent } from './po-tab-base.component';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @docsExtends PoTabBaseComponent
 */
export class PoTabComponent extends PoTabBaseComponent {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    ngAfterContentInit() {
        this.setDisplayOnActive();
    }
    setDisplayOnActive() {
        this.elementRef.nativeElement.style.display = this.active ? '' : 'none';
    }
}
PoTabComponent.ɵfac = function PoTabComponent_Factory(t) { return new (t || PoTabComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoTabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTabComponent, selectors: [["po-tab"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function PoTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabComponent, [{
        type: Component,
        args: [{ selector: 'po-tab', template: "<ng-content></ng-content>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJzL3BvLXRhYi9wby10YWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYnMvcG8tdGFiL3BvLXRhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUV4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTdEOztHQUVHO0FBS0gsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFDcEQsWUFBb0IsVUFBc0I7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVTLGtCQUFrQjtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFFLENBQUM7OzRFQVhVLGNBQWM7aUVBQWQsY0FBYzs7UUNYM0Isa0JBQXlCOzt1RkRXWixjQUFjO2NBSjFCLFNBQVM7MkJBQ0UsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UYWJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby10YWItYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1RhYkJhc2VDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tdGFiJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFiLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJDb21wb25lbnQgZXh0ZW5kcyBQb1RhYkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNldERpc3BsYXlPbkFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldERpc3BsYXlPbkFjdGl2ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFjdGl2ZSA/ICcnIDogJ25vbmUnO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==