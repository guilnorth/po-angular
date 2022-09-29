import { DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { PoSlideBaseComponent } from './po-slide-base.component';
import { PoSlideContentTemplateDirective } from './directives/po-slide-content-template.directive';
import { PoSlideItem } from './interfaces/po-slide-item.interface';
import * as i0 from "@angular/core";
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
export declare class PoSlideComponent extends PoSlideBaseComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
    private builder;
    slideContentTemplate: PoSlideContentTemplateDirective;
    private slide;
    private itemsElements;
    currentSlideIndex: number;
    imageHeight: number;
    slideItems: Array<PoSlideItem | any>;
    slideItemWidth: number;
    private isLoaded;
    private player;
    private setInterval;
    private resize$;
    private resizeSubscription;
    private get hasElements();
    private get isImageSlide();
    private get offset();
    get hasSlides(): boolean;
    constructor(builder: AnimationBuilder);
    onResize(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
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
    getCurrentSlideIndex(): number;
    goToItem(index: number): void;
    nextControl(): void;
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
    next(): void;
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
    previous(): void;
    previousControl(): void;
    setSlideHeight(height: number): void;
    protected cancelInterval(): void;
    protected setSlideItems(slides: Array<PoSlideItem | string | any>): void;
    protected startSlide(): void;
    protected startInterval(): void;
    private animate;
    private buildTransitionAnimation;
    private createArrayForTemplate;
    private createArrayFromSlides;
    private setDefaultHeight;
    private setHeight;
    private setSlideItemWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSlideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoSlideComponent, "po-slide", never, {}, {}, ["slideContentTemplate"], never, false>;
}