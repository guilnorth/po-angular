import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-table-show-subtitle/po-table-show-subtitle.component";
import * as i3 from "../po-table-subtitle-circle/po-table-subtitle-circle.component";
function PoTableSubtitleFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "po-table-subtitle-circle", 4);
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subtitle_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-subtitle", subtitle_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subtitle_r2.label);
} }
function PoTableSubtitleFooterComponent_po_table_show_subtitle_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-table-show-subtitle", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-literals", ctx_r1.literals)("p-subtitles", ctx_r1.subtitles);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação de um conjunto de legendas.
 */
export class PoTableSubtitleFooterComponent {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.initializeResizeListener();
        this.debounceResize();
    }
    ngDoCheck() {
        if (!this.isVisible && this.getContainerSize() > 0) {
            this.toggleShowCompleteSubtitle();
            this.isVisible = true;
        }
    }
    ngOnDestroy() {
        this.removeResizeListener();
    }
    debounceResize() {
        clearTimeout(this.timeoutResize);
        this.timeoutResize = setTimeout(() => {
            this.toggleShowCompleteSubtitle();
        });
    }
    getContainerSize() {
        return this.element.nativeElement.querySelector('.po-table-subtitle-footer-container').offsetWidth;
    }
    getItemsSize() {
        const items = this.element.nativeElement.querySelectorAll('.po-table-subtitle-footer');
        return Array.from(items)
            .map(item => item['offsetWidth'])
            .reduce((a, b) => a + b, 16);
    }
    initializeResizeListener() {
        this.resizeListener = this.renderer.listen('window', 'resize', (event) => {
            this.debounceResize();
        });
    }
    removeResizeListener() {
        this.resizeListener();
    }
    toggleShowCompleteSubtitle() {
        const containerSize = this.getContainerSize();
        const itemsSize = this.getItemsSize();
        this.showSubtitle = itemsSize > containerSize;
    }
}
PoTableSubtitleFooterComponent.ɵfac = function PoTableSubtitleFooterComponent_Factory(t) { return new (t || PoTableSubtitleFooterComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoTableSubtitleFooterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableSubtitleFooterComponent, selectors: [["po-table-subtitle-footer"]], inputs: { literals: ["p-literals", "literals"], subtitles: ["p-subtitles", "subtitles"] }, decls: 3, vars: 2, consts: [[1, "po-table-subtitle-footer-container"], ["class", "po-table-subtitle-footer", 4, "ngFor", "ngForOf"], [3, "p-literals", "p-subtitles", 4, "ngIf"], [1, "po-table-subtitle-footer"], ["p-hide-title", "true", 3, "p-subtitle"], [1, "po-table-subtitle-text"], [3, "p-literals", "p-subtitles"]], template: function PoTableSubtitleFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PoTableSubtitleFooterComponent_div_1_Template, 4, 2, "div", 1);
        i0.ɵɵtemplate(2, PoTableSubtitleFooterComponent_po_table_show_subtitle_2_Template, 1, 2, "po-table-show-subtitle", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.subtitles);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSubtitle);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.PoTableShowSubtitleComponent, i3.PoTableSubtitleCircleComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableSubtitleFooterComponent, [{
        type: Component,
        args: [{ selector: 'po-table-subtitle-footer', template: "<div class=\"po-table-subtitle-footer-container\">\r\n  <div *ngFor=\"let subtitle of subtitles\" class=\"po-table-subtitle-footer\">\r\n    <po-table-subtitle-circle p-hide-title=\"true\" [p-subtitle]=\"subtitle\"> </po-table-subtitle-circle>\r\n    <span class=\"po-table-subtitle-text\">{{ subtitle.label }}</span>\r\n  </div>\r\n  <po-table-show-subtitle *ngIf=\"showSubtitle\" [p-literals]=\"literals\" [p-subtitles]=\"subtitles\">\r\n  </po-table-show-subtitle>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { literals: [{
            type: Input,
            args: ['p-literals']
        }], subtitles: [{
            type: Input,
            args: ['p-subtitles']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtc3VidGl0bGUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1zdWJ0aXRsZS1mb290ZXIvcG8tdGFibGUtc3VidGl0bGUtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1zdWJ0aXRsZS1mb290ZXIvcG8tdGFibGUtc3VidGl0bGUtZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUF1QixLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDekcsOEJBQXlFO0lBQ3ZFLDhDQUFrRztJQUNsRywrQkFBcUM7SUFBQSxZQUFvQjtJQUFBLGlCQUFPLEVBQUE7OztJQURsQixlQUF1QjtJQUF2Qix3Q0FBdUI7SUFDaEMsZUFBb0I7SUFBcEIsdUNBQW9COzs7SUFFM0QsNENBQ3lCOzs7SUFEb0IsNENBQXVCLGlDQUFBOztBRER0RTs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sOEJBQThCO0lBY3pDLFlBQW9CLE9BQW1CLEVBQVMsUUFBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDO0lBRXZFLGVBQWU7UUFDYixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ25DLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNyRyxDQUFDO0lBRU8sWUFBWTtRQUNsQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXZGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHdCQUF3QjtRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDbkYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLDBCQUEwQjtRQUNoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDO0lBQ2hELENBQUM7OzRHQWxFVSw4QkFBOEI7aUZBQTlCLDhCQUE4QjtRQ2YzQyw4QkFBZ0Q7UUFDOUMsK0VBR007UUFDTixxSEFDeUI7UUFDM0IsaUJBQU07O1FBTnNCLGVBQVk7UUFBWix1Q0FBWTtRQUliLGVBQWtCO1FBQWxCLHVDQUFrQjs7dUZEVWhDLDhCQUE4QjtjQUoxQyxTQUFTOzJCQUNFLDBCQUEwQjtxRkFLZixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFHRyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9UYWJsZVN1YnRpdGxlQ29sdW1uIH0gZnJvbSAnLi9wby10YWJsZS1zdWJ0aXRsZS1jb2x1bW4uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBhIGNyaWHDp8OjbyBkZSB1bSBjb25qdW50byBkZSBsZWdlbmRhcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tdGFibGUtc3VidGl0bGUtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdGFibGUtc3VidGl0bGUtZm9vdGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZVN1YnRpdGxlRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIHJlY2ViZSBhcyBsaXRlcmFpcyBkZWZpbmlkYXMgbm8gYHBvLXRhYmxlYC4gKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBsaXRlcmFscztcclxuXHJcbiAgLyoqIFByb3ByaWVkYWRlIHF1ZSByZWNlYmUgYXMgbGVnZW5kYXMgZGVmaW5pZGFzIG5vIGBQb1RhYmxlU3VidGl0bGVDaXJjbGVDb21wb25lbnRgLiAqL1xyXG4gIEBJbnB1dCgncC1zdWJ0aXRsZXMnKSBzdWJ0aXRsZXM6IEFycmF5PFBvVGFibGVTdWJ0aXRsZUNvbHVtbj47XHJcblxyXG4gIHNob3dTdWJ0aXRsZTogYm9vbGVhbjtcclxuXHJcbiAgcHJvdGVjdGVkIHJlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuICBwcml2YXRlIHRpbWVvdXRSZXNpemU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB0aGlzLmRlYm91bmNlUmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWaXNpYmxlICYmIHRoaXMuZ2V0Q29udGFpbmVyU2l6ZSgpID4gMCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNob3dDb21wbGV0ZVN1YnRpdGxlKCk7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVSZXNpemVMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWJvdW5jZVJlc2l6ZSgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRSZXNpemUpO1xyXG4gICAgdGhpcy50aW1lb3V0UmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2hvd0NvbXBsZXRlU3VidGl0bGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb250YWluZXJTaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wby10YWJsZS1zdWJ0aXRsZS1mb290ZXItY29udGFpbmVyJykub2Zmc2V0V2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEl0ZW1zU2l6ZSgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvLXRhYmxlLXN1YnRpdGxlLWZvb3RlcicpO1xyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKGl0ZW1zKVxyXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbVsnb2Zmc2V0V2lkdGgnXSlcclxuICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDE2KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJlc2l6ZUxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZGVib3VuY2VSZXNpemUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVSZXNpemVMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMucmVzaXplTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlU2hvd0NvbXBsZXRlU3VidGl0bGUoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXJTaXplID0gdGhpcy5nZXRDb250YWluZXJTaXplKCk7XHJcbiAgICBjb25zdCBpdGVtc1NpemUgPSB0aGlzLmdldEl0ZW1zU2l6ZSgpO1xyXG5cclxuICAgIHRoaXMuc2hvd1N1YnRpdGxlID0gaXRlbXNTaXplID4gY29udGFpbmVyU2l6ZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXRhYmxlLXN1YnRpdGxlLWZvb3Rlci1jb250YWluZXJcIj5cclxuICA8ZGl2ICpuZ0Zvcj1cImxldCBzdWJ0aXRsZSBvZiBzdWJ0aXRsZXNcIiBjbGFzcz1cInBvLXRhYmxlLXN1YnRpdGxlLWZvb3RlclwiPlxyXG4gICAgPHBvLXRhYmxlLXN1YnRpdGxlLWNpcmNsZSBwLWhpZGUtdGl0bGU9XCJ0cnVlXCIgW3Atc3VidGl0bGVdPVwic3VidGl0bGVcIj4gPC9wby10YWJsZS1zdWJ0aXRsZS1jaXJjbGU+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLXRhYmxlLXN1YnRpdGxlLXRleHRcIj57eyBzdWJ0aXRsZS5sYWJlbCB9fTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8cG8tdGFibGUtc2hvdy1zdWJ0aXRsZSAqbmdJZj1cInNob3dTdWJ0aXRsZVwiIFtwLWxpdGVyYWxzXT1cImxpdGVyYWxzXCIgW3Atc3VidGl0bGVzXT1cInN1YnRpdGxlc1wiPlxyXG4gIDwvcG8tdGFibGUtc2hvdy1zdWJ0aXRsZT5cclxuPC9kaXY+XHJcbiJdfQ==