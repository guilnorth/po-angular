import { AfterViewInit, DoCheck, ElementRef, IterableDiffers, OnDestroy, Renderer2 } from '@angular/core';
import { PoBreadcrumbBaseComponent } from './po-breadcrumb-base.component';
import { PoBreadcrumbItem } from './po-breadcrumb-item.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoBreadcrumbBaseComponent
 *
 * @example
 *
 * <example name="po-breadcrumb-basic" title="PO Breadcrumb Basic">
 *  <file name="sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"> </file>
 *  <file name="sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-breadcrumb-labs" title="PO Breadcrumb Labs">
 *  <file name="sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"> </file>
 *  <file name="sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"> </file>
 * </example>
 */
export declare class PoBreadcrumbComponent extends PoBreadcrumbBaseComponent implements AfterViewInit, DoCheck, OnDestroy {
    private element;
    renderer: Renderer2;
    breadcrumbElement: ElementRef;
    dropdownIcon: ElementRef;
    showDropdown: boolean;
    showDropdownToggle: boolean;
    dropdownItems: Array<PoBreadcrumbItem>;
    private _breadcrumbItemsLenght;
    private calculatedElement;
    private differ;
    private hiddenWithoutResize;
    private initialized;
    private timeoutResize;
    constructor(differs: IterableDiffers, element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    toggleDropdown(): void;
    private wasClickedonDropdown;
    private checkClickOutElement;
    private checkChangeOnItems;
    private calcBreadcrumb;
    private getBreadcrumbFavoriteWidth;
    private getBreadcrumbWidth;
    private calcBreadcrumbItemsWidth;
    private enableBreadcrumbResponsive;
    private disableBreadcrumbResponsive;
    private debounceResize;
    private initBreadcrumbSize;
    private initializeClickoutListener;
    private initializeResizeListener;
    private removeClickoutListener;
    private removeResizeListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoBreadcrumbComponent, "po-breadcrumb", never, {}, {}, never, never, false>;
}