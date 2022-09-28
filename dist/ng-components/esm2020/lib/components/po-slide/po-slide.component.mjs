import { Component, ContentChild, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { animate, keyframes, style } from '@angular/animations';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PoSlideBaseComponent } from './po-slide-base.component';
import { PoSlideContentTemplateDirective } from './directives/po-slide-content-template.directive';
import { PoSlideItemComponent } from './po-slide-item/po-slide-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
import * as i2 from "@angular/common";
import * as i3 from "./po-slide-circles/po-slide-circles.component";
import * as i4 from "./po-slide-control/po-slide-control.component";
import * as i5 from "./po-slide-item/po-slide-item.component";
const _c0 = ["slide"];
function PoSlideComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "po-slide-item", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-action", item_r5.action)("p-data", item_r5)("p-image", item_r5.image)("p-image-height", ctx_r1.imageHeight)("p-template", ctx_r1.slideContentTemplate)("p-alt", item_r5.alt)("p-link", item_r5.link);
} }
function PoSlideComponent_po_slide_control_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-slide-control", 9);
    i0.ɵɵlistener("p-click", function PoSlideComponent_po_slide_control_5_Template_po_slide_control_p_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.previousControl()); });
    i0.ɵɵelementEnd();
} }
function PoSlideComponent_po_slide_control_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-slide-control", 10);
    i0.ɵɵlistener("p-click", function PoSlideComponent_po_slide_control_6_Template_po_slide_control_p_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.nextControl()); });
    i0.ɵɵelementEnd();
} }
function PoSlideComponent_po_slide_circles_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-slide-circles", 11);
    i0.ɵɵlistener("p-click", function PoSlideComponent_po_slide_circles_7_Template_po_slide_circles_p_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.goToItem($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-current-slide-index", ctx_r4.currentSlideIndex)("p-items", ctx_r4.slideItems);
} }
const poSlideDefaultHeight = 336;
const poSlideIntervalMin = 1000;
const poSlideMinHeight = 192;
const poSlideTiming = '250ms ease';
/**
 * @docsExtends PoSlideBaseComponent
 *
 * @example
 * <example name="po-slide-basic" title="PO Slide Basic">
 *   <file name="sample-po-slide-basic/sample-po-slide-basic.component.html"> </file>
 *   <file name="sample-po-slide-basic/sample-po-slide-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-slide-labs" title="PO Slide Labs">
 *   <file name="sample-po-slide-labs/sample-po-slide-labs.component.html"> </file>
 *   <file name="sample-po-slide-labs/sample-po-slide-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-slide-useful-articles" title="PO Slide - Useful articles">
 *   <file name="sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"> </file>
 *   <file name="sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"> </file>
 * </example>
 *
 * <example name="po-slide-landscapes" title="PO Slide - Landscapes">
 *   <file name="sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"> </file>
 *   <file name="sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"> </file>
 * </example>
 *
 * <example name="po-slide-external-controls" title="PO Slide - External Controls">
 *  <file name="sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"> </file>
 *  <file name="sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"> </file>
 * </example>
 */
export class PoSlideComponent extends PoSlideBaseComponent {
    constructor(builder) {
        super();
        this.builder = builder;
        this.currentSlideIndex = 0;
        this.slideItems = [];
        this.isLoaded = false;
        this.resize$ = new Subject();
    }
    get hasElements() {
        return !!this.slide.nativeElement.offsetWidth && !!this.itemsElements && !!this.itemsElements.length;
    }
    get isImageSlide() {
        return !this.slideContentTemplate;
    }
    get offset() {
        return this.currentSlideIndex * this.slideItemWidth;
    }
    get hasSlides() {
        return !!this.slides && !!this.slides.length;
    }
    onResize() {
        this.resize$.next({});
    }
    ngOnInit() {
        this.resizeSubscription = this.resize$.pipe(debounceTime(150)).subscribe(() => {
            this.setSlideItemWidth();
            this.goToItem(this.currentSlideIndex);
        });
    }
    ngDoCheck() {
        if (!this.isLoaded && this.hasElements) {
            this.setSlideItemWidth();
            this.isLoaded = true;
            if (this.hasSlides) {
                this.startSlide();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes.height) {
            this.setSlideHeight(this.height);
        }
    }
    ngOnDestroy() {
        this.resizeSubscription?.unsubscribe();
    }
    /**
     * Método que retorna o index do slide atual
     *
     * ```
     * @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
     *  myFunction() {
     *    let currentIndex = this.slideComponent.getCurrentSlideIndex();
     * }
     *
     * ```
     */
    getCurrentSlideIndex() {
        return this.currentSlideIndex;
    }
    goToItem(index) {
        if (this.interval > poSlideIntervalMin) {
            this.startInterval();
        }
        this.currentSlideIndex = index;
        this.animate(this.offset);
    }
    nextControl() {
        if (this.interval > poSlideIntervalMin) {
            this.startInterval();
        }
        this.next();
    }
    /**
     * Método para chamar o próximo slide.
     *
     * ```
     * @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
     *
     * myFunction() {
     *  this.slideComponent.next();
     * }
     * ```
     */
    next() {
        if (this.currentSlideIndex + 1 === this.slideItems.length) {
            this.currentSlideIndex = 0;
            this.animate(0);
            return;
        }
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideItems.length;
        this.animate(this.offset);
    }
    /**
     * Método para chamar o slide anterior.
     *
     * ```
     * @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
     *
     * myFunction() {
     *  this.slideComponent.previous();
     * }
     * ```
     */
    previous() {
        if (this.currentSlideIndex === 0) {
            this.currentSlideIndex = this.slideItems.length - 1;
            this.animate(this.offset);
            return;
        }
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slideItems.length) % this.slideItems.length;
        this.animate(this.offset);
    }
    previousControl() {
        if (this.interval > poSlideIntervalMin) {
            this.startInterval();
        }
        this.previous();
    }
    setSlideHeight(height) {
        this.setHeight(height);
    }
    cancelInterval() {
        clearInterval(this.setInterval);
    }
    setSlideItems(slides) {
        if (this.hasSlides) {
            this.slideContentTemplate ? this.createArrayForTemplate(slides) : this.createArrayFromSlides(slides);
        }
        else {
            this.slideItems = [];
            this.cancelInterval();
        }
    }
    startSlide() {
        this.setSlideHeight(this.height);
        if (this.interval > poSlideIntervalMin) {
            this.startInterval();
        }
        this.currentSlideIndex = 0;
    }
    startInterval() {
        if (this.setInterval) {
            this.cancelInterval();
        }
        this.setInterval =
            this.hasSlides && this.hasElements
                ? setInterval(() => {
                    this.next();
                }, this.interval)
                : undefined;
    }
    animate(offset) {
        if (this.hasElements) {
            const animation = this.buildTransitionAnimation(offset);
            this.player = animation.create(this.slide.nativeElement);
            this.player.play();
        }
    }
    buildTransitionAnimation(offset) {
        return this.builder.build([animate(poSlideTiming, keyframes([style({ transform: `translateX(-${offset}px)` })]))]);
    }
    createArrayForTemplate(slides) {
        this.slideItems = [...slides];
    }
    createArrayFromSlides(slides) {
        const isStringArray = slides.every(item => typeof item === 'string');
        if (isStringArray) {
            slides.forEach(element => this.slideItems.push({ image: `${element}` }));
        }
        else {
            this.slideItems = [...slides];
        }
    }
    setDefaultHeight(height) {
        if ((height && height <= poSlideMinHeight) || (!height && this.isImageSlide)) {
            this.slide.nativeElement.style.height = `${poSlideDefaultHeight}px`;
            this.imageHeight = poSlideDefaultHeight;
        }
        else {
            this.imageHeight = undefined;
        }
    }
    setHeight(height) {
        if (height && height > poSlideMinHeight) {
            this.slide.nativeElement.style.height = `${height}px`;
            this.imageHeight = height;
        }
        else {
            this.setDefaultHeight(height);
        }
    }
    setSlideItemWidth() {
        if (this.hasElements) {
            this.slideItemWidth = this.itemsElements.first.itemElement.nativeElement.getBoundingClientRect().width;
        }
    }
}
PoSlideComponent.ɵfac = function PoSlideComponent_Factory(t) { return new (t || PoSlideComponent)(i0.ɵɵdirectiveInject(i1.AnimationBuilder)); };
PoSlideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoSlideComponent, selectors: [["po-slide"]], contentQueries: function PoSlideComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoSlideContentTemplateDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slideContentTemplate = _t.first);
    } }, viewQuery: function PoSlideComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(PoSlideItemComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slide = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemsElements = _t);
    } }, hostBindings: function PoSlideComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function PoSlideComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 8, vars: 4, consts: [[1, "po-slide-wrapper"], [1, "po-slide-outer"], [1, "po-slide-inner"], ["slide", ""], [4, "ngFor", "ngForOf"], ["p-control", "previous", 3, "p-click", 4, "ngIf"], ["p-control", "next", 3, "p-click", 4, "ngIf"], [3, "p-current-slide-index", "p-items", "p-click", 4, "ngIf"], [3, "p-action", "p-data", "p-image", "p-image-height", "p-template", "p-alt", "p-link"], ["p-control", "previous", 3, "p-click"], ["p-control", "next", 3, "p-click"], [3, "p-current-slide-index", "p-items", "p-click"]], template: function PoSlideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2, 3);
        i0.ɵɵtemplate(4, PoSlideComponent_ng_container_4_Template, 2, 7, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PoSlideComponent_po_slide_control_5_Template, 1, 0, "po-slide-control", 5);
        i0.ɵɵtemplate(6, PoSlideComponent_po_slide_control_6_Template, 1, 0, "po-slide-control", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, PoSlideComponent_po_slide_circles_7_Template, 1, 2, "po-slide-circles", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.slideItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideArrows && ctx.hasSlides && ctx.slides.length > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideArrows && ctx.hasSlides && ctx.slides.length > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasSlides && ctx.slides.length > 1);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PoSlideCirclesComponent, i4.PoSlideControlComponent, i5.PoSlideItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideComponent, [{
        type: Component,
        args: [{ selector: 'po-slide', template: "<div class=\"po-slide-wrapper\">\r\n  <div class=\"po-slide-outer\">\r\n    <div class=\"po-slide-inner\" #slide>\r\n      <ng-container *ngFor=\"let item of slideItems; let index = index\">\r\n        <po-slide-item\r\n          [p-action]=\"item.action\"\r\n          [p-data]=\"item\"\r\n          [p-image]=\"item.image\"\r\n          [p-image-height]=\"imageHeight\"\r\n          [p-template]=\"slideContentTemplate\"\r\n          [p-alt]=\"item.alt\"\r\n          [p-link]=\"item.link\"\r\n        >\r\n        </po-slide-item>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <po-slide-control\r\n      *ngIf=\"!hideArrows && hasSlides && slides.length > 1\"\r\n      p-control=\"previous\"\r\n      (p-click)=\"previousControl()\"\r\n    >\r\n    </po-slide-control>\r\n\r\n    <po-slide-control *ngIf=\"!hideArrows && hasSlides && slides.length > 1\" p-control=\"next\" (p-click)=\"nextControl()\">\r\n    </po-slide-control>\r\n  </div>\r\n\r\n  <po-slide-circles\r\n    *ngIf=\"hasSlides && slides.length > 1\"\r\n    [p-current-slide-index]=\"currentSlideIndex\"\r\n    [p-items]=\"slideItems\"\r\n    (p-click)=\"goToItem($event)\"\r\n  >\r\n  </po-slide-circles>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.AnimationBuilder }]; }, { slideContentTemplate: [{
            type: ContentChild,
            args: [PoSlideContentTemplateDirective, { static: true }]
        }], slide: [{
            type: ViewChild,
            args: ['slide', { static: true }]
        }], itemsElements: [{
            type: ViewChildren,
            args: [PoSlideItemComponent]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXNsaWRlL3BvLXNsaWRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zbGlkZS9wby1zbGlkZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFHWixZQUFZLEVBRVosU0FBUyxFQUNULFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUF1RCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckgsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRW5HLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7SUNwQnpFLDZCQUFpRTtJQUMvRCxtQ0FTZ0I7SUFDbEIsMEJBQWU7Ozs7SUFUWCxlQUF3QjtJQUF4Qix5Q0FBd0IsbUJBQUEsMEJBQUEsc0NBQUEsMkNBQUEsc0JBQUEsd0JBQUE7Ozs7SUFZOUIsMkNBSUM7SUFEQyx3TEFBVyxlQUFBLHdCQUFpQixDQUFBLElBQUM7SUFFL0IsaUJBQW1COzs7O0lBRW5CLDRDQUFtSDtJQUExQix5TEFBVyxlQUFBLG9CQUFhLENBQUEsSUFBQztJQUNsSCxpQkFBbUI7Ozs7SUFHckIsNENBS0M7SUFEQyxnTUFBVyxlQUFBLHdCQUFnQixDQUFB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akIsaUJBQU07UUFFTiwyRkFLbUI7UUFFbkIsMkZBQ21CO1FBQ3JCLGlCQUFNO1FBRU4sMkZBTW1CO1FBQ3JCLGlCQUFNOztRQWhDK0IsZUFBZTtRQUFmLHdDQUFlO1FBZTdDLGVBQW1EO1FBQW5ELGdGQUFtRDtRQU1uQyxlQUFtRDtRQUFuRCxnRkFBbUQ7UUFLckUsZUFBb0M7UUFBcEMsNkRBQW9DOzt1RkRrQzVCLGdCQUFnQjtjQUo1QixTQUFTOzJCQUNFLFVBQVU7bUVBS3BCLG9CQUFvQjtrQkFEbkIsWUFBWTttQkFBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHakIsS0FBSztrQkFBbEQsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRVEsYUFBYTtrQkFBeEQsWUFBWTttQkFBQyxvQkFBb0I7WUFpQ0gsUUFBUTtrQkFBdEMsWUFBWTttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uRmFjdG9yeSwgQW5pbWF0aW9uUGxheWVyLCBrZXlmcmFtZXMsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9TbGlkZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXNsaWRlLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9TbGlkZUNvbnRlbnRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wby1zbGlkZS1jb250ZW50LXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvU2xpZGVJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXNsaWRlLWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9TbGlkZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BvLXNsaWRlLWl0ZW0vcG8tc2xpZGUtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcG9TbGlkZURlZmF1bHRIZWlnaHQgPSAzMzY7XHJcbmNvbnN0IHBvU2xpZGVJbnRlcnZhbE1pbiA9IDEwMDA7XHJcbmNvbnN0IHBvU2xpZGVNaW5IZWlnaHQgPSAxOTI7XHJcbmNvbnN0IHBvU2xpZGVUaW1pbmcgPSAnMjUwbXMgZWFzZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvU2xpZGVCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1zbGlkZS1iYXNpY1wiIHRpdGxlPVwiUE8gU2xpZGUgQmFzaWNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNsaWRlLWJhc2ljL3NhbXBsZS1wby1zbGlkZS1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zbGlkZS1iYXNpYy9zYW1wbGUtcG8tc2xpZGUtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tc2xpZGUtbGFic1wiIHRpdGxlPVwiUE8gU2xpZGUgTGFic1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc2xpZGUtbGFicy9zYW1wbGUtcG8tc2xpZGUtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zbGlkZS1sYWJzL3NhbXBsZS1wby1zbGlkZS1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXNsaWRlLXVzZWZ1bC1hcnRpY2xlc1wiIHRpdGxlPVwiUE8gU2xpZGUgLSBVc2VmdWwgYXJ0aWNsZXNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNsaWRlLXVzZWZ1bC1hcnRpY2xlcy9zYW1wbGUtcG8tc2xpZGUtdXNlZnVsLWFydGljbGVzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNsaWRlLXVzZWZ1bC1hcnRpY2xlcy9zYW1wbGUtcG8tc2xpZGUtdXNlZnVsLWFydGljbGVzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXNsaWRlLWxhbmRzY2FwZXNcIiB0aXRsZT1cIlBPIFNsaWRlIC0gTGFuZHNjYXBlc1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc2xpZGUtbGFuZHNjYXBlcy9zYW1wbGUtcG8tc2xpZGUtbGFuZHNjYXBlcy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zbGlkZS1sYW5kc2NhcGVzL3NhbXBsZS1wby1zbGlkZS1sYW5kc2NhcGVzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXNsaWRlLWV4dGVybmFsLWNvbnRyb2xzXCIgdGl0bGU9XCJQTyBTbGlkZSAtIEV4dGVybmFsIENvbnRyb2xzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNsaWRlLWV4dGVybmFsLWNvbnRyb2xzL3NhbXBsZS1wby1zbGlkZS1leHRlcm5hbC1jb250cm9scy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXNsaWRlLWV4dGVybmFsLWNvbnRyb2xzL3NhbXBsZS1wby1zbGlkZS1leHRlcm5hbC1jb250cm9scy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXNsaWRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tc2xpZGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1NsaWRlQ29tcG9uZW50IGV4dGVuZHMgUG9TbGlkZUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkKFBvU2xpZGVDb250ZW50VGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgc2xpZGVDb250ZW50VGVtcGxhdGU6IFBvU2xpZGVDb250ZW50VGVtcGxhdGVEaXJlY3RpdmU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBzbGlkZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbihQb1NsaWRlSXRlbUNvbXBvbmVudCkgcHJpdmF0ZSBpdGVtc0VsZW1lbnRzOiBRdWVyeUxpc3Q8UG9TbGlkZUl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBjdXJyZW50U2xpZGVJbmRleCA9IDA7XHJcbiAgaW1hZ2VIZWlnaHQ6IG51bWJlcjtcclxuICBzbGlkZUl0ZW1zOiBBcnJheTxQb1NsaWRlSXRlbSB8IGFueT4gPSBbXTtcclxuICBzbGlkZUl0ZW1XaWR0aDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBwbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcclxuICBwcml2YXRlIHNldEludGVydmFsOiBhbnk7XHJcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZ2V0IGhhc0VsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5zbGlkZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICYmICEhdGhpcy5pdGVtc0VsZW1lbnRzICYmICEhdGhpcy5pdGVtc0VsZW1lbnRzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGlzSW1hZ2VTbGlkZSgpIHtcclxuICAgIHJldHVybiAhdGhpcy5zbGlkZUNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ICogdGhpcy5zbGlkZUl0ZW1XaWR0aDtcclxuICB9XHJcblxyXG4gIGdldCBoYXNTbGlkZXMoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnNsaWRlcyAmJiAhIXRoaXMuc2xpZGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMucmVzaXplJC5uZXh0KHt9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZXNpemVTdWJzY3JpcHRpb24gPSB0aGlzLnJlc2l6ZSQucGlwZShkZWJvdW5jZVRpbWUoMTUwKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTbGlkZUl0ZW1XaWR0aCgpO1xyXG4gICAgICB0aGlzLmdvVG9JdGVtKHRoaXMuY3VycmVudFNsaWRlSW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNMb2FkZWQgJiYgdGhpcy5oYXNFbGVtZW50cykge1xyXG4gICAgICB0aGlzLnNldFNsaWRlSXRlbVdpZHRoKCk7XHJcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaGFzU2xpZGVzKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNsaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnNldFNsaWRlSGVpZ2h0KHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZXNpemVTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHF1ZSByZXRvcm5hIG8gaW5kZXggZG8gc2xpZGUgYXR1YWxcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIEBWaWV3Q2hpbGQoJ3NsaWRlQ29tcG9uZW50JywgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVDb21wb25lbnQ6IFBvU2xpZGVDb21wb25lbnQ7XHJcbiAgICogIG15RnVuY3Rpb24oKSB7XHJcbiAgICogICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2xpZGVDb21wb25lbnQuZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTtcclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNsaWRlSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnb1RvSXRlbShpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCA+IHBvU2xpZGVJbnRlcnZhbE1pbikge1xyXG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmFuaW1hdGUodGhpcy5vZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgbmV4dENvbnRyb2woKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCA+IHBvU2xpZGVJbnRlcnZhbE1pbikge1xyXG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcGFyYSBjaGFtYXIgbyBwcsOzeGltbyBzbGlkZS5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIEBWaWV3Q2hpbGQoJ3NsaWRlQ29tcG9uZW50JywgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVDb21wb25lbnQ6IFBvU2xpZGVDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBteUZ1bmN0aW9uKCkge1xyXG4gICAqICB0aGlzLnNsaWRlQ29tcG9uZW50Lm5leHQoKTtcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgbmV4dCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZUluZGV4ICsgMSA9PT0gdGhpcy5zbGlkZUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5hbmltYXRlKDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gKHRoaXMuY3VycmVudFNsaWRlSW5kZXggKyAxKSAlIHRoaXMuc2xpZGVJdGVtcy5sZW5ndGg7XHJcbiAgICB0aGlzLmFuaW1hdGUodGhpcy5vZmZzZXQpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHBhcmEgY2hhbWFyIG8gc2xpZGUgYW50ZXJpb3IuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBAVmlld0NoaWxkKCdzbGlkZUNvbXBvbmVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlQ29tcG9uZW50OiBQb1NsaWRlQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogbXlGdW5jdGlvbigpIHtcclxuICAgKiAgdGhpcy5zbGlkZUNvbXBvbmVudC5wcmV2aW91cygpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBwcmV2aW91cygpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLnNsaWRlSXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgdGhpcy5hbmltYXRlKHRoaXMub2Zmc2V0KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U2xpZGVJbmRleCA9ICh0aGlzLmN1cnJlbnRTbGlkZUluZGV4IC0gMSArIHRoaXMuc2xpZGVJdGVtcy5sZW5ndGgpICUgdGhpcy5zbGlkZUl0ZW1zLmxlbmd0aDtcclxuICAgIHRoaXMuYW5pbWF0ZSh0aGlzLm9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c0NvbnRyb2woKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCA+IHBvU2xpZGVJbnRlcnZhbE1pbikge1xyXG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZpb3VzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTbGlkZUhlaWdodChoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYW5jZWxJbnRlcnZhbCgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0U2xpZGVJdGVtcyhzbGlkZXM6IEFycmF5PFBvU2xpZGVJdGVtIHwgc3RyaW5nIHwgYW55Pikge1xyXG4gICAgaWYgKHRoaXMuaGFzU2xpZGVzKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVDb250ZW50VGVtcGxhdGUgPyB0aGlzLmNyZWF0ZUFycmF5Rm9yVGVtcGxhdGUoc2xpZGVzKSA6IHRoaXMuY3JlYXRlQXJyYXlGcm9tU2xpZGVzKHNsaWRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNsaWRlSXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5jYW5jZWxJbnRlcnZhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0U2xpZGUoKSB7XHJcbiAgICB0aGlzLnNldFNsaWRlSGVpZ2h0KHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCA+IHBvU2xpZGVJbnRlcnZhbE1pbikge1xyXG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzdGFydEludGVydmFsKCkge1xyXG4gICAgaWYgKHRoaXMuc2V0SW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy5jYW5jZWxJbnRlcnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SW50ZXJ2YWwgPVxyXG4gICAgICB0aGlzLmhhc1NsaWRlcyAmJiB0aGlzLmhhc0VsZW1lbnRzXHJcbiAgICAgICAgPyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbClcclxuICAgICAgICA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZShvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGFzRWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgYW5pbWF0aW9uOiBBbmltYXRpb25GYWN0b3J5ID0gdGhpcy5idWlsZFRyYW5zaXRpb25BbmltYXRpb24ob2Zmc2V0KTtcclxuXHJcbiAgICAgIHRoaXMucGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLnNsaWRlLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnBsYXllci5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkVHJhbnNpdGlvbkFuaW1hdGlvbihvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZChbYW5pbWF0ZShwb1NsaWRlVGltaW5nLCBrZXlmcmFtZXMoW3N0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXR9cHgpYCB9KV0pKV0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVBcnJheUZvclRlbXBsYXRlKHNsaWRlczogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5zbGlkZUl0ZW1zID0gWy4uLnNsaWRlc107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUFycmF5RnJvbVNsaWRlcyhzbGlkZXM6IEFycmF5PFBvU2xpZGVJdGVtIHwgc3RyaW5nIHwgYW55Pikge1xyXG4gICAgY29uc3QgaXNTdHJpbmdBcnJheSA9IHNsaWRlcy5ldmVyeShpdGVtID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyk7XHJcblxyXG4gICAgaWYgKGlzU3RyaW5nQXJyYXkpIHtcclxuICAgICAgc2xpZGVzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLnNsaWRlSXRlbXMucHVzaCh7IGltYWdlOiBgJHtlbGVtZW50fWAgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zbGlkZUl0ZW1zID0gWy4uLig8QXJyYXk8UG9TbGlkZUl0ZW0+PnNsaWRlcyldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0SGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBpZiAoKGhlaWdodCAmJiBoZWlnaHQgPD0gcG9TbGlkZU1pbkhlaWdodCkgfHwgKCFoZWlnaHQgJiYgdGhpcy5pc0ltYWdlU2xpZGUpKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtwb1NsaWRlRGVmYXVsdEhlaWdodH1weGA7XHJcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwb1NsaWRlRGVmYXVsdEhlaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgaWYgKGhlaWdodCAmJiBoZWlnaHQgPiBwb1NsaWRlTWluSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuc2xpZGUubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXREZWZhdWx0SGVpZ2h0KGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNsaWRlSXRlbVdpZHRoKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzRWxlbWVudHMpIHtcclxuICAgICAgdGhpcy5zbGlkZUl0ZW1XaWR0aCA9IHRoaXMuaXRlbXNFbGVtZW50cy5maXJzdC5pdGVtRWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tc2xpZGUtd3JhcHBlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1zbGlkZS1vdXRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXNsaWRlLWlubmVyXCIgI3NsaWRlPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNsaWRlSXRlbXM7IGxldCBpbmRleCA9IGluZGV4XCI+XHJcbiAgICAgICAgPHBvLXNsaWRlLWl0ZW1cclxuICAgICAgICAgIFtwLWFjdGlvbl09XCJpdGVtLmFjdGlvblwiXHJcbiAgICAgICAgICBbcC1kYXRhXT1cIml0ZW1cIlxyXG4gICAgICAgICAgW3AtaW1hZ2VdPVwiaXRlbS5pbWFnZVwiXHJcbiAgICAgICAgICBbcC1pbWFnZS1oZWlnaHRdPVwiaW1hZ2VIZWlnaHRcIlxyXG4gICAgICAgICAgW3AtdGVtcGxhdGVdPVwic2xpZGVDb250ZW50VGVtcGxhdGVcIlxyXG4gICAgICAgICAgW3AtYWx0XT1cIml0ZW0uYWx0XCJcclxuICAgICAgICAgIFtwLWxpbmtdPVwiaXRlbS5saW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1zbGlkZS1pdGVtPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxwby1zbGlkZS1jb250cm9sXHJcbiAgICAgICpuZ0lmPVwiIWhpZGVBcnJvd3MgJiYgaGFzU2xpZGVzICYmIHNsaWRlcy5sZW5ndGggPiAxXCJcclxuICAgICAgcC1jb250cm9sPVwicHJldmlvdXNcIlxyXG4gICAgICAocC1jbGljayk9XCJwcmV2aW91c0NvbnRyb2woKVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLXNsaWRlLWNvbnRyb2w+XHJcblxyXG4gICAgPHBvLXNsaWRlLWNvbnRyb2wgKm5nSWY9XCIhaGlkZUFycm93cyAmJiBoYXNTbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCA+IDFcIiBwLWNvbnRyb2w9XCJuZXh0XCIgKHAtY2xpY2spPVwibmV4dENvbnRyb2woKVwiPlxyXG4gICAgPC9wby1zbGlkZS1jb250cm9sPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tc2xpZGUtY2lyY2xlc1xyXG4gICAgKm5nSWY9XCJoYXNTbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCA+IDFcIlxyXG4gICAgW3AtY3VycmVudC1zbGlkZS1pbmRleF09XCJjdXJyZW50U2xpZGVJbmRleFwiXHJcbiAgICBbcC1pdGVtc109XCJzbGlkZUl0ZW1zXCJcclxuICAgIChwLWNsaWNrKT1cImdvVG9JdGVtKCRldmVudClcIlxyXG4gID5cclxuICA8L3BvLXNsaWRlLWNpcmNsZXM+XHJcbjwvZGl2PlxyXG4iXX0=