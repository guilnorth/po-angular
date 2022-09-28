import { AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { PoControlPositionService } from './../../../services/po-control-position/po-control-position.service';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoMultiselectBaseComponent } from './po-multiselect-base.component';
import { PoMultiselectOption } from './po-multiselect-option.interface';
import { PoMultiselectFilterService } from './po-multiselect-filter.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoMultiselectBaseComponent
 *
 * @example
 *
 * <example name="po-multiselect-basic" title="PO Multiselect Basic">
 *   <file name="sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"> </file>
 *   <file name="sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-multiselect-labs" title="PO Multiselect Labs">
 *   <file name="sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"> </file>
 *   <file name="sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-multiselect-vacation" title="PO Multiselect - Vacation">
 *   <file name="sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"> </file>
 *   <file name="sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"> </file>
 * </example>
 *
 * <example name="po-multiselect-vacation-reactive-form" title="PO Multiselect - Vacation Reactive Form">
 *   <file name="sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"> </file>
 *   <file name="sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"> </file>
 * </example>
 *
 * <example name="po-multiselect-heroes" title="PO Multiselect - Heroes - using API">
 *   <file name="sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"> </file>
 *   <file name="sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"> </file>
 *   <file name="sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"> </file>
 * </example>
 *
 * <example name="po-multiselect-any-array" title="PO Multiselect - Array Any">
 *   <file name="sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"> </file>
 *   <file name="sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"> </file>
 * </example>
 *
 */
export declare class PoMultiselectComponent extends PoMultiselectBaseComponent implements AfterViewInit, DoCheck, OnDestroy, OnChanges {
    private renderer;
    private changeDetector;
    private el;
    private controlPosition;
    defaultService: PoMultiselectFilterService;
    dropdownElement: ElementRef;
    dropdown: any;
    iconElement: ElementRef;
    inputElement: ElementRef;
    disclaimerOffset: number;
    dropdownIcon: string;
    dropdownOpen: boolean;
    initialized: boolean;
    positionDisclaimerExtra: any;
    timeoutResize: any;
    visibleElement: boolean;
    private isCalculateVisibleItems;
    private cacheOptions;
    constructor(renderer: Renderer2, changeDetector: ChangeDetectorRef, el: ElementRef, controlPosition: PoControlPositionService, defaultService: PoMultiselectFilterService, languageService: PoLanguageService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoMultiselectComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;
     *
     * focusMultiselect() {
     *   this.multiselect.focus();
     * }
     * ```
     */
    focus(): void;
    getInputWidth(): number;
    getDisclaimersWidth(): any[];
    calculateVisibleItems(): void;
    changeItems(changedItems: any): void;
    updateVisibleItems(): void;
    debounceResize(): void;
    onBlur(): void;
    onKeyDown(event?: any): void;
    toggleDropdownVisibility(): void;
    openDropdown(toOpen: any): void;
    controlDropdownVisibility(toOpen: boolean): void;
    scrollToSelectedOptions(): void;
    setVisibleOptionsDropdown(options: any): void;
    changeSearch(event: any): void;
    closeDisclaimer(value: any): void;
    wasClickedOnToggle(event: MouseEvent): void;
    applyFilter(value?: string): Observable<Array<PoMultiselectOption | any>>;
    private applyFilterInFirstClick;
    private setOptionsByApplyFilter;
    private adjustContainerPosition;
    private close;
    private initializeListeners;
    private onScroll;
    private open;
    private removeListeners;
    private setPositionDropdown;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMultiselectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoMultiselectComponent, "po-multiselect", never, {}, {}, never, never, false>;
}
