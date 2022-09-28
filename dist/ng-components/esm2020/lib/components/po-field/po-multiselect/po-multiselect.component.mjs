import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { isMobile } from './../../../utils/util';
import { PoControlPositionService } from './../../../services/po-control-position/po-control-position.service';
import { PoKeyCodeEnum } from './../../../enums/po-key-code.enum';
import { PoMultiselectBaseComponent } from './po-multiselect-base.component';
import { PoMultiselectFilterService } from './po-multiselect-filter.service';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-control-position/po-control-position.service";
import * as i2 from "./po-multiselect-filter.service";
import * as i3 from "../../../services/po-language/po-language.service";
const _c0 = ["dropdownElement"];
const _c1 = ["iconElement"];
const _c2 = ["inputElement"];
function PoMultiselectComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.placeholder, " ");
} }
function PoMultiselectComponent_po_disclaimer_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer", 12);
    i0.ɵɵlistener("click", function PoMultiselectComponent_po_disclaimer_5_Template_po_disclaimer_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const disclaimer_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.openDropdown(disclaimer_r5[ctx_r6.fieldValue] === "")); })("p-close-action", function PoMultiselectComponent_po_disclaimer_5_Template_po_disclaimer_p_close_action_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const disclaimer_r5 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.closeDisclaimer(disclaimer_r5[ctx_r8.fieldValue])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const disclaimer_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-clickable", disclaimer_r5[ctx_r2.fieldValue] === "" && !ctx_r2.disabled);
    i0.ɵɵproperty("p-label", disclaimer_r5[ctx_r2.fieldLabel])("p-value", disclaimer_r5[ctx_r2.fieldValue])("p-hide-close", disclaimer_r5[ctx_r2.fieldValue] === "" || ctx_r2.disabled);
} }
const poMultiselectContainerOffset = 8;
const poMultiselectContainerPositionDefault = 'bottom';
/* istanbul ignore next */
const providers = [
    PoMultiselectFilterService,
    PoControlPositionService,
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoMultiselectComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoMultiselectComponent),
        multi: true
    }
];
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
export class PoMultiselectComponent extends PoMultiselectBaseComponent {
    constructor(renderer, changeDetector, el, controlPosition, defaultService, languageService) {
        super(languageService);
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.el = el;
        this.controlPosition = controlPosition;
        this.defaultService = defaultService;
        this.disclaimerOffset = 0;
        this.dropdownIcon = 'po-icon-arrow-down';
        this.dropdownOpen = false;
        this.initialized = false;
        this.visibleElement = false;
        this.isCalculateVisibleItems = true;
        this.onScroll = () => {
            this.adjustContainerPosition();
        };
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
        this.initialized = true;
    }
    ngOnChanges(changes) {
        if (this.filterService && (changes.filterService || changes.fieldValue || changes.fieldLabel)) {
            this.setService(this.filterService);
        }
    }
    ngDoCheck() {
        const inputWidth = this.inputElement.nativeElement.offsetWidth;
        // Permite que os disclaimers sejam calculados na primeira vez que o componente torna-se visível,
        // evitando com isso, problemas com Tabs ou Divs que iniciem escondidas.
        if ((inputWidth && !this.visibleElement && this.initialized) || (inputWidth && this.isCalculateVisibleItems)) {
            this.debounceResize();
            this.visibleElement = true;
        }
    }
    ngOnDestroy() {
        this.removeListeners();
        this.getObjectsByValuesSubscription?.unsubscribe();
        this.filterSubject?.unsubscribe();
    }
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
    focus() {
        if (!this.disabled) {
            this.inputElement.nativeElement.focus();
        }
    }
    getInputWidth() {
        return this.el.nativeElement.querySelector('.po-input').offsetWidth - 40;
    }
    getDisclaimersWidth() {
        const disclaimers = this.el.nativeElement.querySelectorAll('po-disclaimer');
        return Array.from(disclaimers).map(disclaimer => disclaimer['offsetWidth']);
    }
    calculateVisibleItems() {
        const disclaimersWidth = this.getDisclaimersWidth();
        const inputWidth = this.getInputWidth();
        const extraDisclaimerSize = 38;
        const disclaimersVisible = disclaimersWidth[0];
        this.visibleDisclaimers = [];
        if (inputWidth > 0) {
            let sum = 0;
            let i = 0;
            for (i = 0; i < this.selectedOptions.length; i++) {
                sum += disclaimersWidth[i];
                this.visibleDisclaimers.push(this.selectedOptions[i]);
                if (sum > inputWidth) {
                    sum -= disclaimersWidth[i];
                    this.isCalculateVisibleItems = false;
                    break;
                }
            }
            if (disclaimersVisible || !this.selectedOptions.length) {
                if (i === this.selectedOptions.length) {
                    this.isCalculateVisibleItems = false;
                    return;
                }
                if (sum + extraDisclaimerSize > inputWidth) {
                    this.visibleDisclaimers.splice(-2, 2);
                    const label = '+' + (this.selectedOptions.length + 1 - i).toString();
                    this.visibleDisclaimers.push({ [this.fieldValue]: '', [this.fieldLabel]: label });
                }
                else {
                    this.visibleDisclaimers.splice(-1, 1);
                    const label = '+' + (this.selectedOptions.length - i).toString();
                    this.visibleDisclaimers.push({ [this.fieldValue]: '', [this.fieldLabel]: label });
                }
            }
        }
        this.changeDetector.markForCheck();
    }
    changeItems(changedItems) {
        this.updateSelectedOptions(changedItems);
        this.callOnChange(this.selectedOptions);
        if (this.autoHeight && this.dropdownOpen) {
            this.changeDetector.detectChanges();
            this.adjustContainerPosition();
        }
    }
    updateVisibleItems() {
        if (this.selectedOptions) {
            this.visibleDisclaimers = [].concat(this.selectedOptions);
        }
        this.debounceResize();
        // quando estiver dentro de modal
        if (!this.inputElement.nativeElement.offsetWidth) {
            this.isCalculateVisibleItems = true;
        }
    }
    debounceResize() {
        if (!this.autoHeight) {
            clearTimeout(this.timeoutResize);
            this.timeoutResize = setTimeout(() => {
                this.calculateVisibleItems();
            }, 200);
        }
        this.changeDetector.markForCheck();
    }
    onBlur() {
        this.onModelTouched?.();
    }
    onKeyDown(event) {
        if (event.keyCode === PoKeyCodeEnum.arrowUp || event.keyCode === PoKeyCodeEnum.arrowDown) {
            event.preventDefault();
            this.controlDropdownVisibility(true);
            return;
        }
        if (event.keyCode === PoKeyCodeEnum.tab) {
            this.controlDropdownVisibility(false);
        }
    }
    toggleDropdownVisibility() {
        if (this.disabled) {
            return;
        }
        if (this.filterService) {
            this.applyFilterInFirstClick();
        }
        this.controlDropdownVisibility(!this.dropdownOpen);
    }
    openDropdown(toOpen) {
        if (toOpen && !this.disabled) {
            this.controlDropdownVisibility(true);
        }
    }
    controlDropdownVisibility(toOpen) {
        toOpen ? this.open() : this.close();
    }
    scrollToSelectedOptions() {
        if (this.selectedOptions && this.selectedOptions.length) {
            const index = this.options.findIndex(option => option[this.fieldValue] === this.selectedOptions[0][this.fieldValue]);
            this.dropdown.scrollTo(index);
        }
    }
    setVisibleOptionsDropdown(options) {
        this.visibleOptionsDropdown = options;
        this.changeDetector.markForCheck();
    }
    changeSearch(event) {
        if (event && event[this.fieldValue] !== undefined) {
            if (this.filterService) {
                this.filterSubject.next(event[this.fieldValue]);
            }
            else {
                this.searchByLabel(event[this.fieldValue], this.options, this.filterMode);
            }
        }
        else {
            this.setVisibleOptionsDropdown(this.options);
        }
        // timeout necessário para reposicionar corretamente quando dropdown estiver pra cima do input e realizar busca no input
        setTimeout(() => this.adjustContainerPosition());
    }
    closeDisclaimer(value) {
        const index = this.selectedOptions.findIndex(option => option[this.fieldValue] === value);
        this.selectedOptions.splice(index, 1);
        this.updateVisibleItems();
        this.callOnChange(this.selectedOptions);
    }
    wasClickedOnToggle(event) {
        if (this.dropdownOpen &&
            !this.inputElement.nativeElement.contains(event.target) &&
            !this.iconElement.nativeElement.contains(event.target) &&
            !this.dropdownElement.nativeElement.contains(event.target)) {
            this.controlDropdownVisibility(false);
        }
    }
    applyFilter(value = '') {
        const param = { property: this.fieldLabel, value: value };
        return this.service.getFilteredData(param).pipe(catchError(err => {
            this.isServerSearching = false;
            return of([]);
        }), tap((options) => {
            this.setOptionsByApplyFilter(options);
        }));
    }
    applyFilterInFirstClick() {
        if (this.isFirstFilter) {
            this.isServerSearching = true;
            // necessario enviar um objeto string vazia para refazer a busca, quando alterar filterService, fieldValue e fieldLabel
            // pois temos o distinctUntilChange no pipe do filterSubject
            /* eslint-disable no-new-wrappers */
            this.filterSubject.next(new String());
        }
        else {
            this.options = [...this.cacheOptions];
        }
    }
    setOptionsByApplyFilter(items) {
        if (this.isFirstFilter) {
            this.cacheOptions = [...items];
            this.isFirstFilter = false;
        }
        this.options = [...items];
        this.setVisibleOptionsDropdown(this.options);
    }
    adjustContainerPosition() {
        this.controlPosition.adjustPosition(poMultiselectContainerPositionDefault);
    }
    close() {
        this.dropdownIcon = 'po-icon-arrow-down';
        this.dropdownOpen = false;
        this.dropdown.controlVisibility(false);
        this.setVisibleOptionsDropdown(this.options);
        this.removeListeners();
    }
    initializeListeners() {
        this.clickOutListener = this.renderer.listen('document', 'click', (event) => {
            this.wasClickedOnToggle(event);
        });
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            this.updateVisibleItems();
            isMobile() ? this.adjustContainerPosition() : this.close();
        });
        window.addEventListener('scroll', this.onScroll, true);
    }
    open() {
        this.dropdownIcon = 'po-icon-arrow-up';
        this.dropdownOpen = true;
        this.dropdown.controlVisibility(true);
        this.setVisibleOptionsDropdown(this.options);
        this.initializeListeners();
        this.scrollToSelectedOptions();
        this.changeDetector.detectChanges();
        this.setPositionDropdown();
    }
    removeListeners() {
        if (this.clickOutListener) {
            this.clickOutListener();
        }
        if (this.resizeListener) {
            this.resizeListener();
        }
        window.removeEventListener('scroll', this.onScroll, true);
        this.changeDetector.markForCheck();
    }
    setPositionDropdown() {
        this.controlPosition.setElements(this.dropdown.container.nativeElement, poMultiselectContainerOffset, this.inputElement, ['top', 'bottom'], true);
        this.adjustContainerPosition();
    }
}
PoMultiselectComponent.ɵfac = function PoMultiselectComponent_Factory(t) { return new (t || PoMultiselectComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PoControlPositionService), i0.ɵɵdirectiveInject(i2.PoMultiselectFilterService), i0.ɵɵdirectiveInject(i3.PoLanguageService)); };
PoMultiselectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMultiselectComponent, selectors: [["po-multiselect"]], viewQuery: function PoMultiselectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7, ElementRef);
        i0.ɵɵviewQuery(_c2, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iconElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 12, vars: 31, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-field-container-content"], [1, "po-input", "po-input-icon-right", "po-multiselect-input", "po-clickable", 3, "tabindex", "keyup.enter", "keydown", "click", "blur"], ["inputElement", ""], ["class", "po-multiselect-input-placeholder", 4, "ngIf"], ["class", "po-multiselect-input-disclaimer", 3, "p-label", "p-value", "p-hide-close", "po-clickable", "click", "p-close-action", 4, "ngFor", "ngForOf"], [1, "po-field-icon-container-right"], [3, "ngClass"], ["iconElement", ""], [3, "p-searching", "p-hide-search", "p-hide-select-all", "p-literals", "p-options", "p-visible-options", "p-selected-options", "p-placeholder-search", "p-field-value", "p-field-label", "p-change", "p-change-search", "p-close-dropdown"], ["dropdownElement", ""], [1, "po-multiselect-input-placeholder"], [1, "po-multiselect-input-disclaimer", 3, "p-label", "p-value", "p-hide-close", "click", "p-close-action"]], template: function PoMultiselectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "div", 2, 3);
        i0.ɵɵlistener("keyup.enter", function PoMultiselectComponent_Template_div_keyup_enter_2_listener() { return ctx.toggleDropdownVisibility(); })("keydown", function PoMultiselectComponent_Template_div_keydown_2_listener($event) { return ctx.onKeyDown($event); })("click", function PoMultiselectComponent_Template_div_click_2_listener() { return ctx.toggleDropdownVisibility(); })("blur", function PoMultiselectComponent_Template_div_blur_2_listener() { return ctx.onBlur(); });
        i0.ɵɵtemplate(4, PoMultiselectComponent_span_4_Template, 2, 1, "span", 4);
        i0.ɵɵtemplate(5, PoMultiselectComponent_po_disclaimer_5_Template, 1, 5, "po-disclaimer", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelement(7, "span", 7, 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "po-multiselect-dropdown", 9, 10);
        i0.ɵɵlistener("p-change", function PoMultiselectComponent_Template_po_multiselect_dropdown_p_change_9_listener($event) { return ctx.changeItems($event); })("p-change-search", function PoMultiselectComponent_Template_po_multiselect_dropdown_p_change_search_9_listener($event) { return ctx.changeSearch($event); })("p-close-dropdown", function PoMultiselectComponent_Template_po_multiselect_dropdown_p_close_dropdown_9_listener() { return ctx.controlDropdownVisibility(false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "po-field-container-bottom");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-multiselect-show", ctx.dropdownOpen);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-multiselect-input-auto", ctx.autoHeight)("po-multiselect-input-static", !ctx.autoHeight)("po-multiselect-input-disabled", ctx.disabled);
        i0.ɵɵproperty("tabindex", ctx.disabled ? -1 : 0);
        i0.ɵɵattribute("disabled", ctx.disabled)("aria-label", ctx.label);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.placeholder && !ctx.disabled && !(ctx.visibleDisclaimers == null ? null : ctx.visibleDisclaimers.length));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.visibleDisclaimers);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate2("po-icon po-field-icon ", ctx.dropdownIcon, " ", ctx.disabled ? "po-icon-input-disabled" : "po-icon-input", "");
        i0.ɵɵproperty("ngClass", ctx.disabled ? "po-field-icon-disabled" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-searching", ctx.isServerSearching)("p-hide-search", ctx.hideSearch)("p-hide-select-all", ctx.hideSelectAll)("p-literals", ctx.literals)("p-options", ctx.options)("p-visible-options", ctx.visibleOptionsDropdown)("p-selected-options", ctx.selectedOptions)("p-placeholder-search", ctx.placeholderSearch)("p-field-value", ctx.fieldValue)("p-field-label", ctx.fieldLabel);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMultiselectComponent, [{
        type: Component,
        args: [{ selector: 'po-multiselect', changeDetection: ChangeDetectionStrategy.OnPush, providers: providers, template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\" [class.po-multiselect-show]=\"dropdownOpen\">\r\n    <div\r\n      #inputElement\r\n      [tabindex]=\"disabled ? -1 : 0\"\r\n      [attr.disabled]=\"disabled\"\r\n      [attr.aria-label]=\"label\"\r\n      class=\"po-input po-input-icon-right po-multiselect-input po-clickable\"\r\n      [class.po-multiselect-input-auto]=\"autoHeight\"\r\n      [class.po-multiselect-input-static]=\"!autoHeight\"\r\n      [class.po-multiselect-input-disabled]=\"disabled\"\r\n      (keyup.enter)=\"toggleDropdownVisibility()\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      (click)=\"toggleDropdownVisibility()\"\r\n      (blur)=\"onBlur()\"\r\n    >\r\n      <span *ngIf=\"placeholder && !disabled && !visibleDisclaimers?.length\" class=\"po-multiselect-input-placeholder\">\r\n        {{ placeholder }}\r\n      </span>\r\n\r\n      <po-disclaimer\r\n        *ngFor=\"let disclaimer of visibleDisclaimers\"\r\n        class=\"po-multiselect-input-disclaimer\"\r\n        [p-label]=\"disclaimer[fieldLabel]\"\r\n        [p-value]=\"disclaimer[fieldValue]\"\r\n        [p-hide-close]=\"disclaimer[fieldValue] === '' || disabled\"\r\n        [class.po-clickable]=\"disclaimer[fieldValue] === '' && !disabled\"\r\n        (click)=\"openDropdown(disclaimer[fieldValue] === '')\"\r\n        (p-close-action)=\"closeDisclaimer(disclaimer[fieldValue])\"\r\n      >\r\n      </po-disclaimer>\r\n\r\n      <div class=\"po-field-icon-container-right\">\r\n        <span\r\n          #iconElement\r\n          class=\"po-icon po-field-icon {{ dropdownIcon }} {{ disabled ? 'po-icon-input-disabled' : 'po-icon-input' }}\"\r\n          [ngClass]=\"disabled ? 'po-field-icon-disabled' : ''\"\r\n        >\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <po-multiselect-dropdown\r\n    #dropdownElement\r\n    [p-searching]=\"isServerSearching\"\r\n    [p-hide-search]=\"hideSearch\"\r\n    [p-hide-select-all]=\"hideSelectAll\"\r\n    [p-literals]=\"literals\"\r\n    [p-options]=\"options\"\r\n    [p-visible-options]=\"visibleOptionsDropdown\"\r\n    [p-selected-options]=\"selectedOptions\"\r\n    [p-placeholder-search]=\"placeholderSearch\"\r\n    [p-field-value]=\"fieldValue\"\r\n    [p-field-label]=\"fieldLabel\"\r\n    (p-change)=\"changeItems($event)\"\r\n    (p-change-search)=\"changeSearch($event)\"\r\n    (p-close-dropdown)=\"controlDropdownVisibility(false)\"\r\n  >\r\n  </po-multiselect-dropdown>\r\n\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.PoControlPositionService }, { type: i2.PoMultiselectFilterService }, { type: i3.PoLanguageService }]; }, { dropdownElement: [{
            type: ViewChild,
            args: ['dropdownElement', { read: ElementRef, static: true }]
        }], dropdown: [{
            type: ViewChild,
            args: ['dropdownElement', { static: true }]
        }], iconElement: [{
            type: ViewChild,
            args: ['iconElement', { read: ElementRef, static: true }]
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLW11bHRpc2VsZWN0L3BvLW11bHRpc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1tdWx0aXNlbGVjdC9wby1tdWx0aXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsVUFBVSxFQUtWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7OztJQ1Z2RSxnQ0FBK0c7SUFDN0csWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsbURBQ0Y7Ozs7SUFFQSx5Q0FTQztJQUZDLHFQQUFTLGVBQUEseURBQXdDLEVBQUUsQ0FBQyxDQUFBLElBQUMsMFBBQ25DLGVB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Q0FBQTtRQUo5QyxnREFBOEI7UUFDOUIsd0NBQTBCLHlCQUFBO1FBV25CLGVBQTZEO1FBQTdELG1JQUE2RDtRQUszQyxlQUFxQjtRQUFyQixnREFBcUI7UUFjMUMsZUFBNEc7UUFBNUcseUlBQTRHO1FBQzVHLHNFQUFvRDtRQVMxRCxlQUFpQztRQUFqQyxtREFBaUMsaUNBQUEsd0NBQUEsNEJBQUEsMEJBQUEsaURBQUEsMkNBQUEsK0NBQUEsaUNBQUEsaUNBQUE7O3VGRCtDeEIsc0JBQXNCO2NBTmxDLFNBQVM7MkJBQ0UsZ0JBQWdCLG1CQUVULHVCQUF1QixDQUFDLE1BQU0sYUFDL0MsU0FBUztxT0FLeUQsZUFBZTtrQkFBaEYsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNoQixRQUFRO2tCQUF2RCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNnQixXQUFXO2tCQUF4RSxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNHLFlBQVk7a0JBQTFFLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEb0NoZWNrLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBvS2V5Q29kZUVudW0gfSBmcm9tICcuLy4uLy4uLy4uL2VudW1zL3BvLWtleS1jb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9NdWx0aXNlbGVjdEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLW11bHRpc2VsZWN0LWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9NdWx0aXNlbGVjdE9wdGlvbiB9IGZyb20gJy4vcG8tbXVsdGlzZWxlY3Qtb3B0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTXVsdGlzZWxlY3RGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9wby1tdWx0aXNlbGVjdC1maWx0ZXIuc2VydmljZSc7XHJcblxyXG5jb25zdCBwb011bHRpc2VsZWN0Q29udGFpbmVyT2Zmc2V0ID0gODtcclxuY29uc3QgcG9NdWx0aXNlbGVjdENvbnRhaW5lclBvc2l0aW9uRGVmYXVsdCA9ICdib3R0b20nO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuY29uc3QgcHJvdmlkZXJzID0gW1xyXG4gIFBvTXVsdGlzZWxlY3RGaWx0ZXJTZXJ2aWNlLFxyXG4gIFBvQ29udHJvbFBvc2l0aW9uU2VydmljZSxcclxuICB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9NdWx0aXNlbGVjdENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9NdWx0aXNlbGVjdENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1cclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9NdWx0aXNlbGVjdEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW11bHRpc2VsZWN0LWJhc2ljXCIgdGl0bGU9XCJQTyBNdWx0aXNlbGVjdCBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbXVsdGlzZWxlY3QtYmFzaWMvc2FtcGxlLXBvLW11bHRpc2VsZWN0LWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW11bHRpc2VsZWN0LWJhc2ljL3NhbXBsZS1wby1tdWx0aXNlbGVjdC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1tdWx0aXNlbGVjdC1sYWJzXCIgdGl0bGU9XCJQTyBNdWx0aXNlbGVjdCBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tdWx0aXNlbGVjdC1sYWJzL3NhbXBsZS1wby1tdWx0aXNlbGVjdC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW11bHRpc2VsZWN0LWxhYnMvc2FtcGxlLXBvLW11bHRpc2VsZWN0LWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbXVsdGlzZWxlY3QtdmFjYXRpb25cIiB0aXRsZT1cIlBPIE11bHRpc2VsZWN0IC0gVmFjYXRpb25cIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW11bHRpc2VsZWN0LXZhY2F0aW9uL3NhbXBsZS1wby1tdWx0aXNlbGVjdC12YWNhdGlvbi5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tdWx0aXNlbGVjdC12YWNhdGlvbi9zYW1wbGUtcG8tbXVsdGlzZWxlY3QtdmFjYXRpb24uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbXVsdGlzZWxlY3QtdmFjYXRpb24tcmVhY3RpdmUtZm9ybVwiIHRpdGxlPVwiUE8gTXVsdGlzZWxlY3QgLSBWYWNhdGlvbiBSZWFjdGl2ZSBGb3JtXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tdWx0aXNlbGVjdC12YWNhdGlvbi1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1tdWx0aXNlbGVjdC12YWNhdGlvbi1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW11bHRpc2VsZWN0LXZhY2F0aW9uLXJlYWN0aXZlLWZvcm0vc2FtcGxlLXBvLW11bHRpc2VsZWN0LXZhY2F0aW9uLXJlYWN0aXZlLWZvcm0uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbXVsdGlzZWxlY3QtaGVyb2VzXCIgdGl0bGU9XCJQTyBNdWx0aXNlbGVjdCAtIEhlcm9lcyAtIHVzaW5nIEFQSVwiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbXVsdGlzZWxlY3QtaGVyb2VzL3NhbXBsZS1wby1tdWx0aXNlbGVjdC1oZXJvZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbXVsdGlzZWxlY3QtaGVyb2VzL3NhbXBsZS1wby1tdWx0aXNlbGVjdC1oZXJvZXMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW11bHRpc2VsZWN0LWhlcm9lcy9zYW1wbGUtcG8tbXVsdGlzZWxlY3QtaGVyb2VzLnNlcnZpY2UudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1tdWx0aXNlbGVjdC1hbnktYXJyYXlcIiB0aXRsZT1cIlBPIE11bHRpc2VsZWN0IC0gQXJyYXkgQW55XCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tdWx0aXNlbGVjdC1hbnktYXJyYXkvc2FtcGxlLXBvLW11bHRpc2VsZWN0LWFueS1hcnJheS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tdWx0aXNlbGVjdC1hbnktYXJyYXkvc2FtcGxlLXBvLW11bHRpc2VsZWN0LWFueS1hcnJheS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW11bHRpc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbXVsdGlzZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyc1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9NdWx0aXNlbGVjdENvbXBvbmVudFxyXG4gIGV4dGVuZHMgUG9NdWx0aXNlbGVjdEJhc2VDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93bkVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkcm9wZG93bkVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25FbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZHJvcGRvd247XHJcbiAgQFZpZXdDaGlsZCgnaWNvbkVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpY29uRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGRpc2NsYWltZXJPZmZzZXQgPSAwO1xyXG4gIGRyb3Bkb3duSWNvbjogc3RyaW5nID0gJ3BvLWljb24tYXJyb3ctZG93bic7XHJcbiAgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBwb3NpdGlvbkRpc2NsYWltZXJFeHRyYTtcclxuICB0aW1lb3V0UmVzaXplO1xyXG4gIHZpc2libGVFbGVtZW50ID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXNDYWxjdWxhdGVWaXNpYmxlSXRlbXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHByaXZhdGUgY2FjaGVPcHRpb25zOiBBcnJheTxQb011bHRpc2VsZWN0T3B0aW9uIHwgYW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNvbnRyb2xQb3NpdGlvbjogUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGRlZmF1bHRTZXJ2aWNlOiBQb011bHRpc2VsZWN0RmlsdGVyU2VydmljZSxcclxuICAgIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJTZXJ2aWNlICYmIChjaGFuZ2VzLmZpbHRlclNlcnZpY2UgfHwgY2hhbmdlcy5maWVsZFZhbHVlIHx8IGNoYW5nZXMuZmllbGRMYWJlbCkpIHtcclxuICAgICAgdGhpcy5zZXRTZXJ2aWNlKHRoaXMuZmlsdGVyU2VydmljZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIC8vIFBlcm1pdGUgcXVlIG9zIGRpc2NsYWltZXJzIHNlamFtIGNhbGN1bGFkb3MgbmEgcHJpbWVpcmEgdmV6IHF1ZSBvIGNvbXBvbmVudGUgdG9ybmEtc2Ugdmlzw612ZWwsXHJcbiAgICAvLyBldml0YW5kbyBjb20gaXNzbywgcHJvYmxlbWFzIGNvbSBUYWJzIG91IERpdnMgcXVlIGluaWNpZW0gZXNjb25kaWRhcy5cclxuICAgIGlmICgoaW5wdXRXaWR0aCAmJiAhdGhpcy52aXNpYmxlRWxlbWVudCAmJiB0aGlzLmluaXRpYWxpemVkKSB8fCAoaW5wdXRXaWR0aCAmJiB0aGlzLmlzQ2FsY3VsYXRlVmlzaWJsZUl0ZW1zKSkge1xyXG4gICAgICB0aGlzLmRlYm91bmNlUmVzaXplKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZUVsZW1lbnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgdGhpcy5nZXRPYmplY3RzQnlWYWx1ZXNTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmZpbHRlclN1YmplY3Q/LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBxdWUgYXRyaWJ1aSBmb2NvIGFvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIHRlciBhIGluc3TDom5jaWEgZG8gY29tcG9uZW50ZSBubyBET00sIHBvZGVuZG8gc2VyIHV0aWxpemFkbyBvIFZpZXdDaGlsZCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGltcG9ydCB7IFBvTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9NdWx0aXNlbGVjdENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgbXVsdGlzZWxlY3Q6IFBvTXVsdGlzZWxlY3RDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c011bHRpc2VsZWN0KCkge1xyXG4gICAqICAgdGhpcy5tdWx0aXNlbGVjdC5mb2N1cygpO1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG8taW5wdXQnKS5vZmZzZXRXaWR0aCAtIDQwO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGlzY2xhaW1lcnNXaWR0aCgpIHtcclxuICAgIGNvbnN0IGRpc2NsYWltZXJzID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BvLWRpc2NsYWltZXInKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGRpc2NsYWltZXJzKS5tYXAoZGlzY2xhaW1lciA9PiBkaXNjbGFpbWVyWydvZmZzZXRXaWR0aCddKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVZpc2libGVJdGVtcygpIHtcclxuICAgIGNvbnN0IGRpc2NsYWltZXJzV2lkdGggPSB0aGlzLmdldERpc2NsYWltZXJzV2lkdGgoKTtcclxuICAgIGNvbnN0IGlucHV0V2lkdGggPSB0aGlzLmdldElucHV0V2lkdGgoKTtcclxuICAgIGNvbnN0IGV4dHJhRGlzY2xhaW1lclNpemUgPSAzODtcclxuICAgIGNvbnN0IGRpc2NsYWltZXJzVmlzaWJsZSA9IGRpc2NsYWltZXJzV2lkdGhbMF07XHJcblxyXG4gICAgdGhpcy52aXNpYmxlRGlzY2xhaW1lcnMgPSBbXTtcclxuXHJcbiAgICBpZiAoaW5wdXRXaWR0aCA+IDApIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3VtICs9IGRpc2NsYWltZXJzV2lkdGhbaV07XHJcbiAgICAgICAgdGhpcy52aXNpYmxlRGlzY2xhaW1lcnMucHVzaCh0aGlzLnNlbGVjdGVkT3B0aW9uc1tpXSk7XHJcblxyXG4gICAgICAgIGlmIChzdW0gPiBpbnB1dFdpZHRoKSB7XHJcbiAgICAgICAgICBzdW0gLT0gZGlzY2xhaW1lcnNXaWR0aFtpXTtcclxuICAgICAgICAgIHRoaXMuaXNDYWxjdWxhdGVWaXNpYmxlSXRlbXMgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRpc2NsYWltZXJzVmlzaWJsZSB8fCAhdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5pc0NhbGN1bGF0ZVZpc2libGVJdGVtcyA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN1bSArIGV4dHJhRGlzY2xhaW1lclNpemUgPiBpbnB1dFdpZHRoKSB7XHJcbiAgICAgICAgICB0aGlzLnZpc2libGVEaXNjbGFpbWVycy5zcGxpY2UoLTIsIDIpO1xyXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSAnKycgKyAodGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoICsgMSAtIGkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB0aGlzLnZpc2libGVEaXNjbGFpbWVycy5wdXNoKHsgW3RoaXMuZmllbGRWYWx1ZV06ICcnLCBbdGhpcy5maWVsZExhYmVsXTogbGFiZWwgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudmlzaWJsZURpc2NsYWltZXJzLnNwbGljZSgtMSwgMSk7XHJcbiAgICAgICAgICBjb25zdCBsYWJlbCA9ICcrJyArICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSBpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlRGlzY2xhaW1lcnMucHVzaCh7IFt0aGlzLmZpZWxkVmFsdWVdOiAnJywgW3RoaXMuZmllbGRMYWJlbF06IGxhYmVsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUl0ZW1zKGNoYW5nZWRJdGVtcykge1xyXG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbnMoY2hhbmdlZEl0ZW1zKTtcclxuICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvSGVpZ2h0ICYmIHRoaXMuZHJvcGRvd25PcGVuKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmFkanVzdENvbnRhaW5lclBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaXNpYmxlSXRlbXMoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMpIHtcclxuICAgICAgdGhpcy52aXNpYmxlRGlzY2xhaW1lcnMgPSBbXS5jb25jYXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVib3VuY2VSZXNpemUoKTtcclxuXHJcbiAgICAvLyBxdWFuZG8gZXN0aXZlciBkZW50cm8gZGUgbW9kYWxcclxuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICB0aGlzLmlzQ2FsY3VsYXRlVmlzaWJsZUl0ZW1zID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlYm91bmNlUmVzaXplKCkge1xyXG4gICAgaWYgKCF0aGlzLmF1dG9IZWlnaHQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFJlc2l6ZSk7XHJcbiAgICAgIHRoaXMudGltZW91dFJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVmlzaWJsZUl0ZW1zKCk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZD8uKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ/OiBhbnkpIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBQb0tleUNvZGVFbnVtLmFycm93VXAgfHwgZXZlbnQua2V5Q29kZSA9PT0gUG9LZXlDb2RlRW51bS5hcnJvd0Rvd24pIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jb250cm9sRHJvcGRvd25WaXNpYmlsaXR5KHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFBvS2V5Q29kZUVudW0udGFiKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbERyb3Bkb3duVmlzaWJpbGl0eShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wZG93blZpc2liaWxpdHkoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyU2VydmljZSkge1xyXG4gICAgICB0aGlzLmFwcGx5RmlsdGVySW5GaXJzdENsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250cm9sRHJvcGRvd25WaXNpYmlsaXR5KCF0aGlzLmRyb3Bkb3duT3Blbik7XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24odG9PcGVuKSB7XHJcbiAgICBpZiAodG9PcGVuICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbERyb3Bkb3duVmlzaWJpbGl0eSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRyb2xEcm9wZG93blZpc2liaWxpdHkodG9PcGVuOiBib29sZWFuKSB7XHJcbiAgICB0b09wZW4gPyB0aGlzLm9wZW4oKSA6IHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvU2VsZWN0ZWRPcHRpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5maW5kSW5kZXgoXHJcbiAgICAgICAgb3B0aW9uID0+IG9wdGlvblt0aGlzLmZpZWxkVmFsdWVdID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uc1swXVt0aGlzLmZpZWxkVmFsdWVdXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZHJvcGRvd24uc2Nyb2xsVG8oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJsZU9wdGlvbnNEcm9wZG93bihvcHRpb25zKSB7XHJcbiAgICB0aGlzLnZpc2libGVPcHRpb25zRHJvcGRvd24gPSBvcHRpb25zO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNlYXJjaChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50W3RoaXMuZmllbGRWYWx1ZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTdWJqZWN0Lm5leHQoZXZlbnRbdGhpcy5maWVsZFZhbHVlXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCeUxhYmVsKGV2ZW50W3RoaXMuZmllbGRWYWx1ZV0sIHRoaXMub3B0aW9ucywgdGhpcy5maWx0ZXJNb2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWaXNpYmxlT3B0aW9uc0Ryb3Bkb3duKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGltZW91dCBuZWNlc3PDoXJpbyBwYXJhIHJlcG9zaWNpb25hciBjb3JyZXRhbWVudGUgcXVhbmRvIGRyb3Bkb3duIGVzdGl2ZXIgcHJhIGNpbWEgZG8gaW5wdXQgZSByZWFsaXphciBidXNjYSBubyBpbnB1dFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkanVzdENvbnRhaW5lclBvc2l0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VEaXNjbGFpbWVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleChvcHRpb24gPT4gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0gPT09IHZhbHVlKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoKTtcclxuICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHdhc0NsaWNrZWRPblRvZ2dsZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiAmJlxyXG4gICAgICAhdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICF0aGlzLmljb25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAhdGhpcy5kcm9wZG93bkVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jb250cm9sRHJvcGRvd25WaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcgPSAnJyk6IE9ic2VydmFibGU8QXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT4+IHtcclxuICAgIGNvbnN0IHBhcmFtID0geyBwcm9wZXJ0eTogdGhpcy5maWVsZExhYmVsLCB2YWx1ZTogdmFsdWUgfTtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0RmlsdGVyZWREYXRhKHBhcmFtKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1NlcnZlclNlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBvZihbXSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0YXAoKG9wdGlvbnM6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zQnlBcHBseUZpbHRlcihvcHRpb25zKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5RmlsdGVySW5GaXJzdENsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuaXNGaXJzdEZpbHRlcikge1xyXG4gICAgICB0aGlzLmlzU2VydmVyU2VhcmNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIG5lY2Vzc2FyaW8gZW52aWFyIHVtIG9iamV0byBzdHJpbmcgdmF6aWEgcGFyYSByZWZhemVyIGEgYnVzY2EsIHF1YW5kbyBhbHRlcmFyIGZpbHRlclNlcnZpY2UsIGZpZWxkVmFsdWUgZSBmaWVsZExhYmVsXHJcbiAgICAgIC8vIHBvaXMgdGVtb3MgbyBkaXN0aW5jdFVudGlsQ2hhbmdlIG5vIHBpcGUgZG8gZmlsdGVyU3ViamVjdFxyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctd3JhcHBlcnMgKi9cclxuICAgICAgdGhpcy5maWx0ZXJTdWJqZWN0Lm5leHQobmV3IFN0cmluZygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IFsuLi50aGlzLmNhY2hlT3B0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE9wdGlvbnNCeUFwcGx5RmlsdGVyKGl0ZW1zOiBBcnJheTxQb011bHRpc2VsZWN0T3B0aW9uIHwgYW55Pikge1xyXG4gICAgaWYgKHRoaXMuaXNGaXJzdEZpbHRlcikge1xyXG4gICAgICB0aGlzLmNhY2hlT3B0aW9ucyA9IFsuLi5pdGVtc107XHJcbiAgICAgIHRoaXMuaXNGaXJzdEZpbHRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IFsuLi5pdGVtc107XHJcbiAgICB0aGlzLnNldFZpc2libGVPcHRpb25zRHJvcGRvd24odGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRqdXN0Q29udGFpbmVyUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2xQb3NpdGlvbi5hZGp1c3RQb3NpdGlvbihwb011bHRpc2VsZWN0Q29udGFpbmVyUG9zaXRpb25EZWZhdWx0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9ICdwby1pY29uLWFycm93LWRvd24nO1xyXG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRyb3Bkb3duLmNvbnRyb2xWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIHRoaXMuc2V0VmlzaWJsZU9wdGlvbnNEcm9wZG93bih0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrT3V0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy53YXNDbGlja2VkT25Ub2dnbGUoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcygpO1xyXG5cclxuICAgICAgaXNNb2JpbGUoKSA/IHRoaXMuYWRqdXN0Q29udGFpbmVyUG9zaXRpb24oKSA6IHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TY3JvbGwgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLmFkanVzdENvbnRhaW5lclBvc2l0aW9uKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93bkljb24gPSAncG8taWNvbi1hcnJvdy11cCc7XHJcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5kcm9wZG93bi5jb250cm9sVmlzaWJpbGl0eSh0cnVlKTtcclxuICAgIHRoaXMuc2V0VmlzaWJsZU9wdGlvbnNEcm9wZG93bih0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5pbml0aWFsaXplTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWRPcHRpb25zKCk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uRHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xpY2tPdXRMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmNsaWNrT3V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yZXNpemVMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UG9zaXRpb25Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbFBvc2l0aW9uLnNldEVsZW1lbnRzKFxyXG4gICAgICB0aGlzLmRyb3Bkb3duLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBwb011bHRpc2VsZWN0Q29udGFpbmVyT2Zmc2V0LFxyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudCxcclxuICAgICAgWyd0b3AnLCAnYm90dG9tJ10sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5hZGp1c3RDb250YWluZXJQb3NpdGlvbigpO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tZmllbGQtY29udGFpbmVyIFtwLWxhYmVsXT1cImxhYmVsXCIgW3AtaGVscF09XCJoZWxwXCIgW3Atb3B0aW9uYWxdPVwiIXJlcXVpcmVkICYmIG9wdGlvbmFsXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1jb250ZW50XCIgW2NsYXNzLnBvLW11bHRpc2VsZWN0LXNob3ddPVwiZHJvcGRvd25PcGVuXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgICAgW3RhYmluZGV4XT1cImRpc2FibGVkID8gLTEgOiAwXCJcclxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsXCJcclxuICAgICAgY2xhc3M9XCJwby1pbnB1dCBwby1pbnB1dC1pY29uLXJpZ2h0IHBvLW11bHRpc2VsZWN0LWlucHV0IHBvLWNsaWNrYWJsZVwiXHJcbiAgICAgIFtjbGFzcy5wby1tdWx0aXNlbGVjdC1pbnB1dC1hdXRvXT1cImF1dG9IZWlnaHRcIlxyXG4gICAgICBbY2xhc3MucG8tbXVsdGlzZWxlY3QtaW5wdXQtc3RhdGljXT1cIiFhdXRvSGVpZ2h0XCJcclxuICAgICAgW2NsYXNzLnBvLW11bHRpc2VsZWN0LWlucHV0LWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGtleXVwLmVudGVyKT1cInRvZ2dsZURyb3Bkb3duVmlzaWJpbGl0eSgpXCJcclxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gICAgICAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd25WaXNpYmlsaXR5KClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwicGxhY2Vob2xkZXIgJiYgIWRpc2FibGVkICYmICF2aXNpYmxlRGlzY2xhaW1lcnM/Lmxlbmd0aFwiIGNsYXNzPVwicG8tbXVsdGlzZWxlY3QtaW5wdXQtcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICA8cG8tZGlzY2xhaW1lclxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBkaXNjbGFpbWVyIG9mIHZpc2libGVEaXNjbGFpbWVyc1wiXHJcbiAgICAgICAgY2xhc3M9XCJwby1tdWx0aXNlbGVjdC1pbnB1dC1kaXNjbGFpbWVyXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJkaXNjbGFpbWVyW2ZpZWxkTGFiZWxdXCJcclxuICAgICAgICBbcC12YWx1ZV09XCJkaXNjbGFpbWVyW2ZpZWxkVmFsdWVdXCJcclxuICAgICAgICBbcC1oaWRlLWNsb3NlXT1cImRpc2NsYWltZXJbZmllbGRWYWx1ZV0gPT09ICcnIHx8IGRpc2FibGVkXCJcclxuICAgICAgICBbY2xhc3MucG8tY2xpY2thYmxlXT1cImRpc2NsYWltZXJbZmllbGRWYWx1ZV0gPT09ICcnICYmICFkaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9wZW5Ecm9wZG93bihkaXNjbGFpbWVyW2ZpZWxkVmFsdWVdID09PSAnJylcIlxyXG4gICAgICAgIChwLWNsb3NlLWFjdGlvbik9XCJjbG9zZURpc2NsYWltZXIoZGlzY2xhaW1lcltmaWVsZFZhbHVlXSlcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tZGlzY2xhaW1lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1yaWdodFwiPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAjaWNvbkVsZW1lbnRcclxuICAgICAgICAgIGNsYXNzPVwicG8taWNvbiBwby1maWVsZC1pY29uIHt7IGRyb3Bkb3duSWNvbiB9fSB7eyBkaXNhYmxlZCA/ICdwby1pY29uLWlucHV0LWRpc2FibGVkJyA6ICdwby1pY29uLWlucHV0JyB9fVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJkaXNhYmxlZCA/ICdwby1maWVsZC1pY29uLWRpc2FibGVkJyA6ICcnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cG8tbXVsdGlzZWxlY3QtZHJvcGRvd25cclxuICAgICNkcm9wZG93bkVsZW1lbnRcclxuICAgIFtwLXNlYXJjaGluZ109XCJpc1NlcnZlclNlYXJjaGluZ1wiXHJcbiAgICBbcC1oaWRlLXNlYXJjaF09XCJoaWRlU2VhcmNoXCJcclxuICAgIFtwLWhpZGUtc2VsZWN0LWFsbF09XCJoaWRlU2VsZWN0QWxsXCJcclxuICAgIFtwLWxpdGVyYWxzXT1cImxpdGVyYWxzXCJcclxuICAgIFtwLW9wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICBbcC12aXNpYmxlLW9wdGlvbnNdPVwidmlzaWJsZU9wdGlvbnNEcm9wZG93blwiXHJcbiAgICBbcC1zZWxlY3RlZC1vcHRpb25zXT1cInNlbGVjdGVkT3B0aW9uc1wiXHJcbiAgICBbcC1wbGFjZWhvbGRlci1zZWFyY2hdPVwicGxhY2Vob2xkZXJTZWFyY2hcIlxyXG4gICAgW3AtZmllbGQtdmFsdWVdPVwiZmllbGRWYWx1ZVwiXHJcbiAgICBbcC1maWVsZC1sYWJlbF09XCJmaWVsZExhYmVsXCJcclxuICAgIChwLWNoYW5nZSk9XCJjaGFuZ2VJdGVtcygkZXZlbnQpXCJcclxuICAgIChwLWNoYW5nZS1zZWFyY2gpPVwiY2hhbmdlU2VhcmNoKCRldmVudClcIlxyXG4gICAgKHAtY2xvc2UtZHJvcGRvd24pPVwiY29udHJvbERyb3Bkb3duVmlzaWJpbGl0eShmYWxzZSlcIlxyXG4gID5cclxuICA8L3BvLW11bHRpc2VsZWN0LWRyb3Bkb3duPlxyXG5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT48L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG4iXX0=