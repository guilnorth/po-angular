import { AfterViewInit, ChangeDetectorRef, ElementRef, IterableDiffers, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PoControlPositionService } from '../../../services/po-control-position/po-control-position.service';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoComboBaseComponent } from './po-combo-base.component';
import { PoComboFilterService } from './po-combo-filter.service';
import { PoComboGroup } from './interfaces/po-combo-group.interface';
import { PoComboOption } from './interfaces/po-combo-option.interface';
import { PoComboOptionTemplateDirective } from './po-combo-option-template/po-combo-option-template.directive';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoComboBaseComponent
 *
 * @description
 * Utilizando po-combo com serviço, é possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
 * faça uma requisição à URL informada passando o valor digitado no campo. Se encontrado o valor, então o mesmo será selecionado, caso
 * não seja encontrado, então a lista de itens voltará para o estado inicial.
 *
 * @example
 *
 * <example name="po-combo-basic" title="PO Combo Basic">
 *   <file name="sample-po-combo-basic/sample-po-combo-basic.component.html"> </file>
 *   <file name="sample-po-combo-basic/sample-po-combo-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-combo-labs" title="PO Combo Labs">
 *   <file name="sample-po-combo-labs/sample-po-combo-labs.component.html"> </file>
 *   <file name="sample-po-combo-labs/sample-po-combo-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-combo-scheduling" title="PO Combo - Scheduling">
 *   <file name="sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"> </file>
 *   <file name="sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"> </file>
 *   <file name="sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"> </file>
 * </example>
 *
 * <example name="po-combo-transfer" title="PO Combo - Banking Transfer">
 *   <file name="sample-po-combo-transfer/sample-po-combo-transfer.component.html"> </file>
 *   <file name="sample-po-combo-transfer/sample-po-combo-transfer.component.ts"> </file>
 * </example>
 *
 * <example name="po-combo-heroes" title="PO Combo - Heroes">
 *   <file name="sample-po-combo-heroes/sample-po-combo-heroes.component.html"> </file>
 *   <file name="sample-po-combo-heroes/sample-po-combo-heroes.component.ts"> </file>
 * </example>
 *
 * <example name="po-combo-heroes-reactive-form" title="PO Combo - Heroes Reactive Form">
 *   <file name="sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"> </file>
 *   <file name="sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"> </file>
 * </example>
 *
 * <example name="po-combo-infinity-scroll" title="PO Combo - Inifity Scroll">
 *   <file name="sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"> </file>
 *   <file name="sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"> </file>
 * </example>
 *
 * <example name="po-combo-hotels" title="PO Combo - Booking Hotel">
 *   <file name="sample-po-combo-hotels/sample-po-combo-hotels.component.html"> </file>
 *   <file name="sample-po-combo-hotels/sample-po-combo-hotels.component.ts"> </file>
 * </example>
 */
export declare class PoComboComponent extends PoComboBaseComponent implements AfterViewInit, OnChanges, OnDestroy {
    element: ElementRef;
    differs: IterableDiffers;
    defaultService: PoComboFilterService;
    renderer: Renderer2;
    private changeDetector;
    private controlPosition;
    private sanitized;
    comboOptionTemplate: PoComboOptionTemplateDirective;
    containerElement: ElementRef;
    contentElement: ElementRef;
    iconElement: ElementRef;
    inputEl: ElementRef;
    poComboBody: ElementRef;
    comboIcon: string;
    comboOpen: boolean;
    differ: any;
    isProcessingValueByTab: boolean;
    scrollTop: number;
    service: PoComboFilterService;
    shouldMarkLetters: boolean;
    infiniteLoading: boolean;
    private _isServerSearching;
    private clickoutListener;
    private eventResizeListener;
    private filterSubscription;
    private getSubscription;
    private scrollEvent$;
    private subscriptionScrollEvent;
    constructor(element: ElementRef, differs: IterableDiffers, defaultService: PoComboFilterService, renderer: Renderer2, changeDetector: ChangeDetectorRef, controlPosition: PoControlPositionService, sanitized: DomSanitizer, languageService: PoLanguageService);
    set isServerSearching(value: boolean);
    get isServerSearching(): boolean;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoComboComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;
     *
     * focusCombo() {
     *   this.combo.focus();
     * }
     * ```
     */
    focus(): void;
    onBlur(): void;
    onKeyDown(event?: any): void;
    onKeyUp(event?: any): void;
    initInputObservable(): void;
    controlApplyFilter(value: any): void;
    applyFilter(value: string, reset?: boolean): void;
    setOptionsByApplyFilter(value: any, items: any, reset?: boolean): void;
    getObjectByValue(value: any): void;
    updateOptionByFilteredValue(item: any): void;
    selectPreviousOption(): void;
    selectNextOption(): void;
    toggleComboVisibility(): void;
    applyFilterInFirstClick(): void;
    controlComboVisibility(toOpen: boolean, reset?: boolean): void;
    onOptionClick(option: PoComboOption | PoComboGroup, event?: any): void;
    scrollTo(index: any): void;
    getInputValue(): any;
    setInputValue(value: string): void;
    wasClickedOnToggle(event: MouseEvent): void;
    getLabelFormatted(label: string): SafeHtml;
    safeHtml(value: any): SafeHtml;
    isValidCharacterToSearch(keyCode: any): boolean;
    searchOnEnter(value: string): void;
    showMoreInfiniteScroll({ target }: {
        target: any;
    }): void;
    protected checkInfiniteScroll(): void;
    private hasInfiniteScroll;
    private includeInfiniteScroll;
    private adjustContainerPosition;
    private close;
    private initializeListeners;
    private onErrorGetObjectByValue;
    private onErrorFilteredData;
    private onScroll;
    private open;
    private removeListeners;
    private sanitizeTagHTML;
    private setContainerPosition;
    private setOptions;
    private setScrollTop;
    private prepareOptions;
    private setPage;
    private setScrollingControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoComboComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoComboComponent, "po-combo", never, {}, {}, ["comboOptionTemplate"], never, false>;
}
