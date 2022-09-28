import { Component } from '@angular/core';
import { PoPageContentBaseComponent } from './po-page-content-base.component';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @docsPrivate
 *
 * @docsExtends PoPageContentBaseComponent
 */
export class PoPageContentComponent extends PoPageContentBaseComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.contentOpacity = 0;
        this.height = '90%';
        this.overflowY = 'none';
        this.initializeListeners();
    }
    ngAfterViewInit() {
        this.recalculateHeaderSize();
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    recalculateHeaderSize() {
        setTimeout(() => {
            const pageHeaderElement = document.querySelector('div.po-page-header');
            this.setHeightContent(pageHeaderElement);
            this.contentOpacity = 1;
        });
    }
    setHeightContent(poPageHeader) {
        const bodyHeight = document.body.clientHeight;
        const pageHeaderHeight = poPageHeader ? poPageHeader.offsetTop + poPageHeader.offsetHeight : 0;
        const newHeight = bodyHeight - pageHeaderHeight;
        this.height = `${newHeight}px`;
    }
    initializeListeners() {
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            this.recalculateHeaderSize();
        });
    }
    removeListeners() {
        this.resizeListener();
    }
}
PoPageContentComponent.ɵfac = function PoPageContentComponent_Factory(t) { return new (t || PoPageContentComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoPageContentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageContentComponent, selectors: [["po-page-content"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 6, consts: [[1, "po-page-content"]], template: function PoPageContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height)("opacity", ctx.contentOpacity)("overflow-y", ctx.overflowY);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageContentComponent, [{
        type: Component,
        args: [{ selector: 'po-page-content', template: "<div class=\"po-page-content\" [style.height]=\"height\" [style.opacity]=\"contentOpacity\" [style.overflow-y]=\"overflowY\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlL3BvLXBhZ2UtY29udGVudC9wby1wYWdlLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1jb250ZW50L3BvLXBhZ2UtY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQUU5RTs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDBCQUEwQjtJQUtwRSxZQUFtQixRQUFtQjtRQUNwQyxLQUFLLEVBQUUsQ0FBQztRQURTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdEMsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQVcsTUFBTSxDQUFDO1FBSXpCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxpQkFBaUIsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRXBGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLFlBQXlCO1FBQ3hDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRixNQUFNLFNBQVMsR0FBRyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLFNBQVMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNsRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs0RkEzQ1Usc0JBQXNCO3lFQUF0QixzQkFBc0I7O1FDYm5DLDhCQUFxSDtRQUNuSCxrQkFBeUI7UUFDM0IsaUJBQU07O1FBRnVCLG9DQUF1QiwrQkFBQSw2QkFBQTs7dUZEYXZDLHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUNvbnRlbnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wYWdlLWNvbnRlbnQtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9QYWdlQ29udGVudEJhc2VDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1jb250ZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1jb250ZW50LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFBvUGFnZUNvbnRlbnRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBjb250ZW50T3BhY2l0eTogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IHN0cmluZyA9ICc5MCUnO1xyXG4gIG92ZXJmbG93WTogc3RyaW5nID0gJ25vbmUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZUhlYWRlclNpemUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHJlY2FsY3VsYXRlSGVhZGVyU2l6ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYWdlSGVhZGVyRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucG8tcGFnZS1oZWFkZXInKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0SGVpZ2h0Q29udGVudChwYWdlSGVhZGVyRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuY29udGVudE9wYWNpdHkgPSAxO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRIZWlnaHRDb250ZW50KHBvUGFnZUhlYWRlcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGJvZHlIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IHBhZ2VIZWFkZXJIZWlnaHQgPSBwb1BhZ2VIZWFkZXIgPyBwb1BhZ2VIZWFkZXIub2Zmc2V0VG9wICsgcG9QYWdlSGVhZGVyLm9mZnNldEhlaWdodCA6IDA7XHJcbiAgICBjb25zdCBuZXdIZWlnaHQgPSBib2R5SGVpZ2h0IC0gcGFnZUhlYWRlckhlaWdodDtcclxuXHJcbiAgICB0aGlzLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVIZWFkZXJTaXplKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lcigpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tcGFnZS1jb250ZW50XCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBbc3R5bGUub3BhY2l0eV09XCJjb250ZW50T3BhY2l0eVwiIFtzdHlsZS5vdmVyZmxvdy15XT1cIm92ZXJmbG93WVwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==