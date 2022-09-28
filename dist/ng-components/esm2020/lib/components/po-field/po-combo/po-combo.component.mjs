import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { PoControlPositionService } from '../../../services/po-control-position/po-control-position.service';
import { PoKeyCodeEnum } from './../../../enums/po-key-code.enum';
import { PoComboBaseComponent } from './po-combo-base.component';
import { PoComboFilterMode } from './po-combo-filter-mode.enum';
import { PoComboFilterService } from './po-combo-filter.service';
import { PoComboOptionTemplateDirective } from './po-combo-option-template/po-combo-option-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "./po-combo-filter.service";
import * as i2 from "../../../services/po-control-position/po-control-position.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "../../../services/po-language/po-language.service";
import * as i5 from "@angular/common";
import * as i6 from "../po-clean/po-clean.component";
import * as i7 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i8 from "../po-field-container/po-field-container.component";
import * as i9 from "../../po-loading/po-loading.component";
import * as i10 from "../../po-loading/po-loading-overlay/po-loading-overlay.component";
import * as i11 from "../../po-icon/po-icon.component";
const _c0 = ["containerElement"];
const _c1 = ["contentElement"];
const _c2 = ["iconArrow"];
const _c3 = ["inp"];
const _c4 = ["poComboBody"];
function PoComboComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "po-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-field-icon-disabled", ctx_r0.disabled);
    i0.ɵɵproperty("p-icon", ctx_r0.icon);
} }
function PoComboComponent_po_clean_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 19);
    i0.ɵɵlistener("p-change-event", function PoComboComponent_po_clean_6_Template_po_clean_p_change_event_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.clear($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-element-ref", ctx_r2.inputEl);
} }
function PoComboComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoComboComponent_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoComboComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, PoComboComponent_div_12_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(17);
    const _r7 = i0.ɵɵreference(15);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.infiniteLoading)("ngIfThen", _r9)("ngIfElse", _r7);
} }
function PoComboComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-loading", 20);
} }
function PoComboComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-loading-overlay", 20);
} }
function PoComboComponent_ng_template_18_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoComboComponent_ng_template_18_li_3_ng_template_2_label_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r21[ctx_r27.dynamicLabel]);
} }
function PoComboComponent_ng_template_18_li_3_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r29.getLabelFormatted(option_r21 == null ? null : option_r21[ctx_r29.dynamicLabel]), i0.ɵɵsanitizeHtml);
} }
function PoComboComponent_ng_template_18_li_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoComboComponent_ng_template_18_li_3_ng_template_2_label_0_Template, 2, 1, "label", 26);
    i0.ɵɵtemplate(1, PoComboComponent_ng_template_18_li_3_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r28 = i0.ɵɵreference(2);
    const option_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", option_r21 == null ? null : option_r21.options)("ngIfElse", _r28);
} }
function PoComboComponent_ng_template_18_li_3_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_1_ng_template_0_Template(rf, ctx) { }
const _c5 = function (a0, a1) { return { $implicit: a0, selected: a1 }; };
function PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 33);
} if (rf & 2) {
    const option_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r35.comboOptionTemplate == null ? null : ctx_r35.comboOptionTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c5, option_r21, ctx_r35.compareObjects(ctx_r35.selectedView, option_r21)));
} }
function PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_3_ng_template_1_Template(rf, ctx) { }
const _c6 = function (a0) { return { $implicit: a0 }; };
function PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵtemplate(1, PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r37 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r37.comboOptionTemplate == null ? null : ctx_r37.comboOptionTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c6, option_r21));
} }
function PoComboComponent_ng_template_18_li_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoComboComponent_ng_template_18_li_3_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 11);
    i0.ɵɵtemplate(1, PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_1_Template, 1, 5, "ng-template", null, 31, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PoComboComponent_ng_template_18_li_3_ng_template_4_ng_template_3_Template, 2, 4, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r34 = i0.ɵɵreference(2);
    const _r36 = i0.ɵɵreference(4);
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r26.isOptionGroupList)("ngIfThen", _r34)("ngIfElse", _r36);
} }
function PoComboComponent_ng_template_18_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function PoComboComponent_ng_template_18_li_3_Template_li_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r43); const option_r21 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView((option_r21 == null ? null : option_r21.options) ? undefined : ctx_r42.onOptionClick(option_r21, $event)); });
    i0.ɵɵtemplate(1, PoComboComponent_ng_template_18_li_3_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵtemplate(2, PoComboComponent_ng_template_18_li_3_ng_template_2_Template, 3, 2, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PoComboComponent_ng_template_18_li_3_ng_template_4_Template, 5, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    const _r23 = i0.ɵɵreference(3);
    const _r25 = i0.ɵɵreference(5);
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-combo-item-selected", ctx_r20.compareObjects(ctx_r20.selectedView, option_r21));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.comboOptionTemplate)("ngIfThen", _r25)("ngIfElse", _r23);
} }
function PoComboComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 21, 22);
    i0.ɵɵtemplate(3, PoComboComponent_ng_template_18_li_3_Template, 6, 5, "li", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r12.visibleOptions);
} }
function PoComboComponent_ng_template_20_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r44.literals.noData, " ");
} }
function PoComboComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵtemplate(2, PoComboComponent_ng_template_20_span_2_Template, 2, 1, "span", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r14.isServerSearching);
} }
const poComboContainerOffset = 8;
const poComboContainerPositionDefault = 'bottom';
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
export class PoComboComponent extends PoComboBaseComponent {
    constructor(element, differs, defaultService, renderer, changeDetector, controlPosition, sanitized, languageService) {
        super(languageService);
        this.element = element;
        this.differs = differs;
        this.defaultService = defaultService;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.controlPosition = controlPosition;
        this.sanitized = sanitized;
        this.comboIcon = 'po-icon-arrow-down';
        this.comboOpen = false;
        this.isProcessingValueByTab = false;
        this.scrollTop = 0;
        this.shouldMarkLetters = true;
        this.infiniteLoading = false;
        this._isServerSearching = false;
        this.onScroll = () => {
            this.adjustContainerPosition();
        };
        this.differ = differs.find([]).create(null);
    }
    set isServerSearching(value) {
        if (value) {
            this._isServerSearching = value;
            this.changeDetector.detectChanges();
            this.setContainerPosition();
            this.initializeListeners();
        }
        else {
            this._isServerSearching = value;
        }
    }
    get isServerSearching() {
        return this._isServerSearching;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
        if (this.infiniteScroll) {
            this.checkInfiniteScroll();
        }
    }
    ngOnChanges(changes) {
        if (changes.debounceTime) {
            this.unsubscribeKeyupObservable();
            this.initInputObservable();
        }
        if (changes.filterService) {
            this.configAfterSetFilterService(this.filterService);
        }
    }
    ngOnDestroy() {
        this.removeListeners();
        if (this.filterSubscription) {
            this.filterSubscription.unsubscribe();
        }
        if (this.getSubscription) {
            this.getSubscription.unsubscribe();
        }
        if (this.infiniteScroll) {
            this.subscriptionScrollEvent?.unsubscribe();
        }
    }
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
    focus() {
        if (!this.disabled) {
            this.inputEl.nativeElement.focus();
        }
    }
    onBlur() {
        this.onModelTouched?.();
    }
    onKeyDown(event) {
        const key = event.keyCode;
        const inputValue = event.target.value;
        // busca um registro quando acionar o tab
        if (this.service && key === PoKeyCodeEnum.tab && inputValue && !this.disabledTabFilter) {
            this.controlComboVisibility(false);
            return this.getObjectByValue(inputValue);
        }
        // Teclas "up" e "down"
        if (key === PoKeyCodeEnum.arrowUp || key === PoKeyCodeEnum.arrowDown) {
            event.preventDefault();
            if (this.comboOpen) {
                if (key === PoKeyCodeEnum.arrowUp) {
                    this.selectPreviousOption();
                }
                else {
                    this.selectNextOption();
                }
            }
            this.controlComboVisibility(true);
            this.isFiltering = this.changeOnEnter ? this.isFiltering : false;
            this.shouldMarkLetters = this.changeOnEnter ? this.shouldMarkLetters : false;
            return;
        }
        // Teclas "tab" ou "esc"
        if (key === PoKeyCodeEnum.tab || key === PoKeyCodeEnum.esc) {
            if (key === PoKeyCodeEnum.esc && this.comboOpen) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.controlComboVisibility(false);
            this.verifyValidOption();
            this.isProcessingValueByTab = true;
            if (!this.service) {
                // caso for changeOnEnter e nao ter selectedValue deve limpar o selectedView para reinicia-lo.
                this.selectedView = this.changeOnEnter && !this.selectedValue ? undefined : this.selectedView;
            }
            return;
        }
        // Tecla "enter"
        if (key === PoKeyCodeEnum.enter && this.selectedView && this.comboOpen) {
            const isUpdateModel = this.selectedView.value !== this.selectedValue || inputValue !== this.selectedView.label;
            this.controlComboVisibility(false);
            this.updateSelectedValue(this.selectedView, isUpdateModel);
            this.isFiltering = false;
            if (!this.service) {
                this.updateComboList([...this.cacheStaticOptions]);
            }
            return;
        }
        if (key === PoKeyCodeEnum.enter) {
            this.controlComboVisibility(true);
        }
    }
    onKeyUp(event) {
        const key = event.keyCode || event.which;
        const inputValue = event.target.value;
        const isValidKey = key !== PoKeyCodeEnum.arrowUp && key !== PoKeyCodeEnum.arrowDown && key !== PoKeyCodeEnum.enter;
        if (isValidKey) {
            if (inputValue) {
                if (!this.service && this.previousSearchValue !== inputValue) {
                    this.shouldMarkLetters = true;
                    this.isFiltering = true;
                    this.searchForLabel(inputValue, this.comboOptionsList, this.filterMode);
                    this.inputChange.emit(inputValue);
                }
            }
            else {
                // quando apagar rapido o campo e conter serviço, valor, não disparava o keyup observable
                // necessario este tratamento para retornar a lista 'default'.
                const useDefaultOptionsService = this.service && this.selectedValue && this.selectedOption.label === this.previousSearchValue;
                this.updateSelectedValue(null);
                if (!this.service) {
                    this.updateComboList();
                }
                else if (useDefaultOptionsService) {
                    this.updateComboList([...this.cacheOptions]);
                }
                this.isFiltering = false;
            }
            // caso o valor pesquisado for diferente do anterior deve abrir o combo
            if (this.previousSearchValue !== inputValue) {
                this.changeDetector.detectChanges();
                this.controlComboVisibility(true);
            }
        }
        this.previousSearchValue = inputValue;
    }
    initInputObservable() {
        if (this.service) {
            const keyupObservable = fromEvent(this.inputEl.nativeElement, 'keyup').pipe(filter((e) => this.isValidCharacterToSearch(e.keyCode)), map((e) => e.currentTarget.value), distinctUntilChanged(), tap(() => {
                this.shouldMarkLetters = false;
            }), debounceTime(this.debounceTime));
            this.keyupSubscribe = keyupObservable.subscribe(value => {
                if (value.length >= this.filterMinlength || !value) {
                    this.controlApplyFilter(value);
                }
            });
        }
    }
    controlApplyFilter(value) {
        if (!this.isProcessingValueByTab && (!this.selectedOption || value !== this.selectedOption[this.dynamicLabel])) {
            this.defaultService.hasNext = true;
            this.page = this.setPage();
            this.options = [];
            this.applyFilter(value, true);
        }
        this.isProcessingValueByTab = false;
    }
    applyFilter(value, reset = false) {
        if (this.defaultService.hasNext) {
            this.controlComboVisibility(false, reset);
            this.isServerSearching = true;
            const param = this.infiniteScroll
                ? { property: this.fieldLabel, value, page: this.page, pageSize: this.pageSize }
                : { property: this.fieldLabel, value };
            this.filterSubscription = this.service?.getFilteredData(param, this.filterParams).subscribe(items => this.setOptionsByApplyFilter(value, items, reset), error => this.onErrorFilteredData());
        }
    }
    setOptionsByApplyFilter(value, items, reset = false) {
        this.shouldMarkLetters = true;
        this.isServerSearching = false;
        this.infiniteLoading = false;
        this.options = this.prepareOptions(items);
        this.searchForLabel(value, items, this.filterMode);
        this.changeDetector.detectChanges();
        this.controlComboVisibility(true, reset);
        if (this.isFirstFilter) {
            this.isFirstFilter = !this.isFirstFilter;
            this.cacheOptions = this.comboOptionsList;
        }
    }
    getObjectByValue(value) {
        if (this.selectedValue !== value && this.selectedOption?.[this.dynamicLabel] !== value) {
            this.isProcessingValueByTab = true;
            this.getSubscription = this.service.getObjectByValue(value, this.filterParams).subscribe(item => this.updateOptionByFilteredValue(item), error => this.onErrorGetObjectByValue());
        }
    }
    updateOptionByFilteredValue(item) {
        if (item) {
            this.options = [item];
            this.onOptionClick(item);
        }
        else {
            this.updateSelectedValue(null);
        }
        setTimeout(() => {
            this.isProcessingValueByTab = false;
        }, this.debounceTime);
    }
    selectPreviousOption() {
        const currentViewValue = this.selectedView && this.selectedView[this.dynamicValue];
        if (currentViewValue) {
            const nextOption = this.getNextOption(currentViewValue, this.visibleOptions, true);
            this.updateSelectedValue(nextOption, nextOption && nextOption[this.dynamicValue] !== currentViewValue && !this.changeOnEnter);
        }
        else if (this.visibleOptions.length) {
            const visibleOption = this.visibleOptions[this.visibleOptions.length - 1];
            this.updateSelectedValue(visibleOption, visibleOption[this.dynamicValue] !== currentViewValue && !this.changeOnEnter);
        }
    }
    selectNextOption() {
        const currentViewValue = this.selectedView && this.selectedView[this.dynamicValue];
        if (currentViewValue) {
            const nextOption = this.getNextOption(currentViewValue, this.visibleOptions);
            this.updateSelectedValue(nextOption, nextOption && nextOption[this.dynamicValue] !== currentViewValue && !this.changeOnEnter);
        }
        else if (this.visibleOptions.length) {
            const index = this.changeOnEnter ? 1 : 0;
            const visibleOption = this.visibleOptions[index];
            this.updateSelectedValue(visibleOption, visibleOption[this.dynamicValue] !== currentViewValue && !this.changeOnEnter);
        }
    }
    toggleComboVisibility() {
        if (this.disabled) {
            return;
        }
        if (this.service && !this.disabledInitFilter) {
            this.applyFilterInFirstClick();
        }
        this.controlComboVisibility(!this.comboOpen);
    }
    applyFilterInFirstClick() {
        if (this.isFirstFilter && !this.selectedValue) {
            this.options = [];
            const scrollingControl = this.setScrollingControl();
            this.applyFilter('', scrollingControl);
        }
    }
    controlComboVisibility(toOpen, reset = false) {
        toOpen ? this.open(reset) : this.close(reset);
    }
    onOptionClick(option, event) {
        const inputValue = this.getInputValue();
        const isUpdateModel = option[this.dynamicValue] !== this.selectedValue ||
            !!(this.selectedView && inputValue !== this.selectedView[this.dynamicLabel]);
        if (event) {
            event.stopPropagation();
        }
        this.updateSelectedValue(option, isUpdateModel);
        this.controlComboVisibility(false);
        if (!this.service) {
            this.updateComboList([...this.cacheStaticOptions]);
        }
        this.previousSearchValue = this.selectedView[this.dynamicLabel];
    }
    scrollTo(index) {
        const selectedItem = this.element.nativeElement.querySelectorAll('.po-combo-item-selected');
        const scrollTop = !selectedItem.length || index <= 1 ? 0 : selectedItem[0].offsetTop - 88;
        if (!this.infiniteScroll) {
            this.setScrollTop(scrollTop);
        }
    }
    getInputValue() {
        return this.inputEl.nativeElement.value;
    }
    setInputValue(value) {
        this.inputEl.nativeElement.value = value;
    }
    wasClickedOnToggle(event) {
        if (this.comboOpen &&
            !this.inputEl.nativeElement.contains(event.target) &&
            !this.iconElement.nativeElement.contains(event.target) &&
            (!this.contentElement || !this.contentElement.nativeElement.contains(event.target))) {
            // Esconde Content do Combo quando for clicado fora
            this.controlComboVisibility(false);
            this.verifyValidOption();
            // caso for changeOnEnter deve limpar o selectedView para reinicia-lo
            this.selectedView = this.changeOnEnter && !this.selectedValue ? undefined : this.selectedView;
        }
        else {
            if (this.service && !this.getInputValue() && !this.isFirstFilter) {
                const scrollingControl = this.setScrollingControl();
                this.applyFilter('', scrollingControl);
            }
        }
    }
    getLabelFormatted(label) {
        const sanitizedLabel = this.sanitizeTagHTML(label);
        let format = sanitizedLabel;
        if (this.isFiltering ||
            (this.service &&
                this.getInputValue() &&
                !this.compareObjects(this.cacheOptions, this.visibleOptions) &&
                this.shouldMarkLetters)) {
            const labelInput = this.sanitizeTagHTML(this.getInputValue().toString().toLowerCase());
            const labelLowerCase = sanitizedLabel.toLowerCase();
            const openTagBold = '<span class="po-font-text-large-bold">';
            const closeTagBold = '</span>';
            let startString;
            let middleString;
            let endString;
            switch (this.filterMode) {
                case PoComboFilterMode.startsWith:
                case PoComboFilterMode.contains:
                    const indexOfLabelInput = labelLowerCase.indexOf(labelInput);
                    if (indexOfLabelInput > -1) {
                        startString = sanitizedLabel.substring(0, indexOfLabelInput);
                        middleString = sanitizedLabel.substring(indexOfLabelInput, indexOfLabelInput + labelInput.length);
                        endString = sanitizedLabel.substring(indexOfLabelInput + labelInput.length);
                        format = startString + openTagBold + middleString + closeTagBold + endString;
                    }
                    break;
                case PoComboFilterMode.endsWith:
                    const lastIndexOfLabelInput = labelLowerCase.lastIndexOf(labelInput);
                    if (lastIndexOfLabelInput > -1) {
                        startString = sanitizedLabel.substring(0, lastIndexOfLabelInput);
                        middleString = sanitizedLabel.substring(lastIndexOfLabelInput);
                        format = startString + openTagBold + middleString + closeTagBold;
                    }
                    break;
            }
        }
        return this.safeHtml(format);
    }
    safeHtml(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
    isValidCharacterToSearch(keyCode) {
        return (keyCode !== 9 && // tab
            keyCode !== 13 && // entet
            keyCode !== 16 && // shift
            keyCode !== 17 && // ctrl
            keyCode !== 18 && // alt
            keyCode !== 20 && // capslock
            keyCode !== 27 && // esc
            keyCode !== 37 && // seta
            keyCode !== 38 && // seta
            keyCode !== 39 && // seta
            keyCode !== 40 && // seta
            keyCode !== 93); // windows menu
    }
    searchOnEnter(value) {
        if (this.service && !this.selectedView && value.length >= this.filterMinlength) {
            this.controlApplyFilter(value);
        }
    }
    showMoreInfiniteScroll({ target }) {
        if (this.defaultService.hasNext) {
            this.infiniteLoading = true;
        }
        const scrollPosition = target.offsetHeight + target.scrollTop;
        if (scrollPosition >= target.scrollHeight * (this.infiniteScrollDistance / 110)) {
            this.page++;
            this.applyFilter('', true);
        }
    }
    checkInfiniteScroll() {
        if (this.hasInfiniteScroll() && this.poComboBody?.nativeElement.scrollHeight >= 175) {
            this.includeInfiniteScroll();
        }
    }
    hasInfiniteScroll() {
        return this.infiniteScroll && this.poComboBody?.nativeElement.scrollHeight && this.defaultService.hasNext;
    }
    includeInfiniteScroll() {
        this.subscriptionScrollEvent?.unsubscribe();
        this.scrollEvent$ = this.defaultService.scrollListener(this.poComboBody.nativeElement);
        this.subscriptionScrollEvent = this.scrollEvent$.subscribe(event => {
            this.showMoreInfiniteScroll(event);
        });
    }
    adjustContainerPosition() {
        this.controlPosition.adjustPosition(poComboContainerPositionDefault);
    }
    close(reset) {
        this.comboOpen = false;
        if (!reset) {
            if (!this.getInputValue()) {
                this.page = this.setPage();
                this.defaultService.hasNext = true;
            }
            if (this.infiniteScroll) {
                this.options = this.setOptions();
            }
        }
        this.changeDetector.detectChanges();
        this.comboIcon = 'po-icon-arrow-down';
        this.removeListeners();
        this.isFiltering = false;
    }
    initializeListeners() {
        this.removeListeners();
        if (this.infiniteScroll) {
            this.checkInfiniteScroll();
        }
        this.clickoutListener = this.renderer.listen('document', 'click', (event) => {
            this.wasClickedOnToggle(event);
        });
        this.eventResizeListener = this.renderer.listen('window', 'resize', () => {
            // timeout necessario pois a animação do po-menu impacta no ajuste da posição do container.
            setTimeout(() => this.adjustContainerPosition(), 250);
        });
        window.addEventListener('scroll', this.onScroll, true);
    }
    onErrorGetObjectByValue() {
        this.updateOptionByFilteredValue(null);
    }
    onErrorFilteredData() {
        this.isServerSearching = false;
        this.updateComboList([]);
        this.controlComboVisibility(true);
    }
    open(reset) {
        this.comboOpen = true;
        if (!reset && this.infiniteScroll) {
            if (!this.getInputValue()) {
                this.page = 1;
            }
            this.options = this.setOptions();
            this.scrollTo(0);
        }
        this.changeDetector.detectChanges();
        this.comboIcon = 'po-icon-arrow-up';
        this.initializeListeners();
        this.inputEl.nativeElement.focus();
        if (!this.infiniteScroll) {
            this.scrollTo(this.getIndexSelectedView());
        }
        this.setContainerPosition();
    }
    removeListeners() {
        if (this.clickoutListener) {
            this.clickoutListener();
        }
        if (this.eventResizeListener) {
            this.eventResizeListener();
        }
        if (this.infiniteScroll && !this.defaultService.hasNext) {
            this.subscriptionScrollEvent?.unsubscribe();
        }
        window.removeEventListener('scroll', this.onScroll, true);
    }
    sanitizeTagHTML(value = '') {
        return value.replace(/\</gm, '&lt;').replace(/\>/g, '&gt;');
    }
    setContainerPosition() {
        this.controlPosition.setElements(this.containerElement.nativeElement, poComboContainerOffset, this.inputEl, ['top', 'bottom'], true);
        this.adjustContainerPosition();
    }
    setOptions() {
        return this.getInputValue() ? this.options : [];
    }
    setScrollTop(scrollTop) {
        if (this.contentElement) {
            this.contentElement.nativeElement.scrollTop = scrollTop;
        }
    }
    prepareOptions(items) {
        return this.infiniteScroll ? [...this.options, ...items] : items;
    }
    setPage() {
        return this.infiniteScroll ? 1 : undefined;
    }
    setScrollingControl() {
        return this.infiniteScroll ? true : false;
    }
}
PoComboComponent.ɵfac = function PoComboComponent_Factory(t) { return new (t || PoComboComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i1.PoComboFilterService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.PoControlPositionService), i0.ɵɵdirectiveInject(i3.DomSanitizer), i0.ɵɵdirectiveInject(i4.PoLanguageService)); };
PoComboComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoComboComponent, selectors: [["po-combo"]], contentQueries: function PoComboComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PoComboOptionTemplateDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.comboOptionTemplate = _t.first);
    } }, viewQuery: function PoComboComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
        i0.ɵɵviewQuery(_c1, 5, ElementRef);
        i0.ɵɵviewQuery(_c2, 7, ElementRef);
        i0.ɵɵviewQuery(_c3, 7, ElementRef);
        i0.ɵɵviewQuery(_c4, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iconElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poComboBody = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            PoComboFilterService,
            PoControlPositionService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoComboComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoComboComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 22, vars: 25, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-field-container-content"], ["class", "po-field-icon-container-left", 4, "ngIf"], ["autocomplete", "off", "type", "text", 1, "po-input", "po-combo-input", 3, "ngClass", "disabled", "placeholder", "required", "click", "keyup", "blur", "keyup.enter", "keydown"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-element-ref", "p-change-event", 4, "ngIf"], [3, "click"], ["iconArrow", ""], [1, "po-combo-container", 3, "hidden"], ["containerElement", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngIf"], ["normalLoadingTemplate", ""], ["infiniteLoadingTemplate", ""], ["visibleOptionsTemplate", ""], ["noDataTemplate", ""], [1, "po-field-icon-container-left"], [1, "po-field-icon", "po-icon-input", 3, "p-icon"], [1, "po-icon-input", 3, "p-element-ref", "p-change-event"], [1, "po-combo-container-loading"], [1, "po-combo-container-content"], ["contentElement", "", "poComboBody", ""], [3, "po-combo-item-selected", "click", 4, "ngFor", "ngForOf"], ["defaultOptionTemplate", ""], ["optionTemplate", ""], ["class", "po-combo-item-title", 4, "ngIf", "ngIfElse"], ["optionLink", ""], [1, "po-combo-item-title"], [1, "po-combo-item"], [2, "pointer-events", "none", 3, "innerHTML"], ["optionsGroupTemplate", ""], ["defaultOptionsTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "po-combo-container-no-data"], [1, "po-combo-no-data", "po-text-center"]], template: function PoComboComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoComboComponent_div_2_Template, 2, 3, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("click", function PoComboComponent_Template_input_click_3_listener() { return ctx.toggleComboVisibility(); })("keyup", function PoComboComponent_Template_input_keyup_3_listener($event) { return ctx.onKeyUp($event); })("blur", function PoComboComponent_Template_input_blur_3_listener() { return ctx.onBlur(); })("keyup.enter", function PoComboComponent_Template_input_keyup_enter_3_listener($event) { return ctx.searchOnEnter($event.target.value); })("keydown", function PoComboComponent_Template_input_keydown_3_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PoComboComponent_po_clean_6_Template, 1, 1, "po-clean", 6);
        i0.ɵɵelementStart(7, "span", 7, 8);
        i0.ɵɵlistener("click", function PoComboComponent_Template_span_click_7_listener() { return ctx.toggleComboVisibility(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "div", 9, 10);
        i0.ɵɵtemplate(11, PoComboComponent_ng_container_11_Template, 1, 0, "ng-container", 11);
        i0.ɵɵtemplate(12, PoComboComponent_div_12_Template, 2, 3, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "po-field-container-bottom");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, PoComboComponent_ng_template_14_Template, 1, 0, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, PoComboComponent_ng_template_16_Template, 1, 0, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, PoComboComponent_ng_template_18_Template, 4, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, PoComboComponent_ng_template_20_Template, 3, 1, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        const _r11 = i0.ɵɵreference(19);
        const _r13 = i0.ɵɵreference(21);
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-input-icon-left", ctx.icon);
        i0.ɵɵproperty("ngClass", ctx.clean && _r1.value ? "po-input-double-icon-right" : "po-input-icon-right")("disabled", ctx.disabled)("placeholder", ctx.disabled ? "" : ctx.placeholder)("required", ctx.required);
        i0.ɵɵattribute("name", ctx.name)("aria-label", ctx.label);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.clean && !ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("po-icon po-field-icon ", ctx.comboIcon, " po-icon-input");
        i0.ɵɵclassProp("po-field-icon-disabled", ctx.disabled)("po-field-icon", !ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", !ctx.comboOpen && !ctx.isServerSearching);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.visibleOptions.length)("ngIfThen", _r11)("ngIfElse", _r13);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isServerSearching);
    } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i6.PoCleanComponent, i7.PoFieldContainerBottomComponent, i8.PoFieldContainerComponent, i9.PoLoadingComponent, i10.PoLoadingOverlayComponent, i11.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoComboComponent, [{
        type: Component,
        args: [{ selector: 'po-combo', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    PoComboFilterService,
                    PoControlPositionService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoComboComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoComboComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\">\r\n    <div *ngIf=\"icon\" class=\"po-field-icon-container-left\">\r\n      <po-icon class=\"po-field-icon po-icon-input\" [class.po-field-icon-disabled]=\"disabled\" [p-icon]=\"icon\"></po-icon>\r\n    </div>\r\n\r\n    <input\r\n      #inp\r\n      class=\"po-input po-combo-input\"\r\n      [ngClass]=\"clean && inp.value ? 'po-input-double-icon-right' : 'po-input-icon-right'\"\r\n      [class.po-input-icon-left]=\"icon\"\r\n      autocomplete=\"off\"\r\n      type=\"text\"\r\n      [attr.name]=\"name\"\r\n      [attr.aria-label]=\"label\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [required]=\"required\"\r\n      (click)=\"toggleComboVisibility()\"\r\n      (keyup)=\"onKeyUp($event)\"\r\n      (blur)=\"onBlur()\"\r\n      (keyup.enter)=\"searchOnEnter($event.target.value)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled\"\r\n        (p-change-event)=\"clear($event)\"\r\n        [p-element-ref]=\"inputEl\"\r\n      >\r\n      </po-clean>\r\n      <span\r\n        #iconArrow\r\n        class=\"po-icon po-field-icon {{ comboIcon }} po-icon-input\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n        [class.po-field-icon]=\"!disabled\"\r\n        (click)=\"toggleComboVisibility()\"\r\n      >\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div #containerElement class=\"po-combo-container\" [hidden]=\"!comboOpen && !isServerSearching\">\r\n    <ng-container *ngIf=\"visibleOptions.length; then visibleOptionsTemplate; else noDataTemplate\"> </ng-container>\r\n    <div *ngIf=\"isServerSearching\">\r\n      <ng-container *ngIf=\"infiniteLoading; then infiniteLoadingTemplate; else normalLoadingTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n\r\n<ng-template #normalLoadingTemplate>\r\n  <po-loading class=\"po-combo-container-loading\"> </po-loading>\r\n</ng-template>\r\n\r\n<ng-template #infiniteLoadingTemplate>\r\n  <po-loading-overlay class=\"po-combo-container-loading\"> </po-loading-overlay>\r\n</ng-template>\r\n\r\n<ng-template #visibleOptionsTemplate>\r\n  <ul #contentElement #poComboBody class=\"po-combo-container-content\">\r\n    <li\r\n      *ngFor=\"let option of visibleOptions\"\r\n      [class.po-combo-item-selected]=\"compareObjects(selectedView, option)\"\r\n      (click)=\"option?.options ? undefined : onOptionClick(option, $event)\"\r\n    >\r\n      <ng-container *ngIf=\"comboOptionTemplate; then optionTemplate; else defaultOptionTemplate\"></ng-container>\r\n\r\n      <ng-template #defaultOptionTemplate>\r\n        <label *ngIf=\"option?.options; else optionLink\" class=\"po-combo-item-title\">{{\r\n          option[this.dynamicLabel]\r\n        }}</label>\r\n        <ng-template #optionLink>\r\n          <a class=\"po-combo-item\">\r\n            <span style=\"pointer-events: none\" [innerHTML]=\"getLabelFormatted(option?.[this.dynamicLabel])\"></span>\r\n          </a>\r\n        </ng-template>\r\n      </ng-template>\r\n\r\n      <ng-template #optionTemplate>\r\n        <ng-container *ngIf=\"isOptionGroupList; then optionsGroupTemplate; else defaultOptionsTemplate\"></ng-container>\r\n\r\n        <ng-template #optionsGroupTemplate>\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"comboOptionTemplate?.templateRef\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: option, selected: compareObjects(selectedView, option) }\"\r\n          >\r\n          </ng-template>\r\n        </ng-template>\r\n\r\n        <ng-template #defaultOptionsTemplate>\r\n          <a class=\"po-combo-item\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"comboOptionTemplate?.templateRef\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: option }\"\r\n            >\r\n            </ng-template>\r\n          </a>\r\n        </ng-template>\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n<ng-template #noDataTemplate>\r\n  <div class=\"po-combo-container-no-data\">\r\n    <div class=\"po-combo-no-data po-text-center\">\r\n      <span *ngIf=\"!isServerSearching\">\r\n        {{ literals.noData }}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.IterableDiffers }, { type: i1.PoComboFilterService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.PoControlPositionService }, { type: i3.DomSanitizer }, { type: i4.PoLanguageService }]; }, { comboOptionTemplate: [{
            type: ContentChild,
            args: [PoComboOptionTemplateDirective, { static: true }]
        }], containerElement: [{
            type: ViewChild,
            args: ['containerElement', { read: ElementRef }]
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { read: ElementRef }]
        }], iconElement: [{
            type: ViewChild,
            args: ['iconArrow', { read: ElementRef, static: true }]
        }], inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: true }]
        }], poComboBody: [{
            type: ViewChild,
            args: ['poComboBody', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29tYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWNvbWJvL3BvLWNvbWJvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1jb21iby9wby1jb21iby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFVBQVUsRUFNVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxTQUFTLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHakUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0RBQStELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM1QjNHLCtCQUF1RDtJQUNyRCw4QkFBaUg7SUFDbkgsaUJBQU07OztJQUR5QyxlQUF5QztJ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aWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbnRyb2xQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBvS2V5Q29kZUVudW0gfSBmcm9tICcuLy4uLy4uLy4uL2VudW1zL3BvLWtleS1jb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9Db21ib0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWNvbWJvLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9Db21ib0ZpbHRlck1vZGUgfSBmcm9tICcuL3BvLWNvbWJvLWZpbHRlci1tb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0NvbWJvRmlsdGVyU2VydmljZSB9IGZyb20gJy4vcG8tY29tYm8tZmlsdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb0NvbWJvR3JvdXAgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29tYm8tZ3JvdXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Db21ib09wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jb21iby1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Db21ib09wdGlvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wby1jb21iby1vcHRpb24tdGVtcGxhdGUvcG8tY29tYm8tb3B0aW9uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBwb0NvbWJvQ29udGFpbmVyT2Zmc2V0ID0gODtcclxuY29uc3QgcG9Db21ib0NvbnRhaW5lclBvc2l0aW9uRGVmYXVsdCA9ICdib3R0b20nO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0NvbWJvQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVXRpbGl6YW5kbyBwby1jb21ibyBjb20gc2VydmnDp28sIMOpIHBvc3NpdmVsIGRpZ2l0YXIgdW0gdmFsb3Igbm8gY2FtcG8gZGUgZW50cmFkYSBlIHByZXNzaW9uYXIgYSB0ZWNsYSAndGFiJyBwYXJhIHF1ZSBvIGNvbXBvbmVudGVcclxuICogZmHDp2EgdW1hIHJlcXVpc2nDp8OjbyDDoCBVUkwgaW5mb3JtYWRhIHBhc3NhbmRvIG8gdmFsb3IgZGlnaXRhZG8gbm8gY2FtcG8uIFNlIGVuY29udHJhZG8gbyB2YWxvciwgZW50w6NvIG8gbWVzbW8gc2Vyw6Egc2VsZWNpb25hZG8sIGNhc29cclxuICogbsOjbyBzZWphIGVuY29udHJhZG8sIGVudMOjbyBhIGxpc3RhIGRlIGl0ZW5zIHZvbHRhcsOhIHBhcmEgbyBlc3RhZG8gaW5pY2lhbC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNvbWJvLWJhc2ljXCIgdGl0bGU9XCJQTyBDb21ibyBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29tYm8tYmFzaWMvc2FtcGxlLXBvLWNvbWJvLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvbWJvLWJhc2ljL3NhbXBsZS1wby1jb21iby1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jb21iby1sYWJzXCIgdGl0bGU9XCJQTyBDb21ibyBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb21iby1sYWJzL3NhbXBsZS1wby1jb21iby1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvbWJvLWxhYnMvc2FtcGxlLXBvLWNvbWJvLWxhYnMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY29tYm8tc2NoZWR1bGluZ1wiIHRpdGxlPVwiUE8gQ29tYm8gLSBTY2hlZHVsaW5nXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb21iby1zY2hlZHVsaW5nL3NhbXBsZS1wby1jb21iby1zY2hlZHVsaW5nLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvbWJvLXNjaGVkdWxpbmcvc2FtcGxlLXBvLWNvbWJvLXNjaGVkdWxpbmcuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvbWJvLXNjaGVkdWxpbmcvc2FtcGxlLXBvLWNvbWJvLXNjaGVkdWxpbmcuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWNvbWJvLXRyYW5zZmVyXCIgdGl0bGU9XCJQTyBDb21ibyAtIEJhbmtpbmcgVHJhbnNmZXJcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvbWJvLXRyYW5zZmVyL3NhbXBsZS1wby1jb21iby10cmFuc2Zlci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb21iby10cmFuc2Zlci9zYW1wbGUtcG8tY29tYm8tdHJhbnNmZXIuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY29tYm8taGVyb2VzXCIgdGl0bGU9XCJQTyBDb21ibyAtIEhlcm9lc1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29tYm8taGVyb2VzL3NhbXBsZS1wby1jb21iby1oZXJvZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29tYm8taGVyb2VzL3NhbXBsZS1wby1jb21iby1oZXJvZXMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY29tYm8taGVyb2VzLXJlYWN0aXZlLWZvcm1cIiB0aXRsZT1cIlBPIENvbWJvIC0gSGVyb2VzIFJlYWN0aXZlIEZvcm1cIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWNvbWJvLWhlcm9lcy1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1jb21iby1oZXJvZXMtcmVhY3RpdmUtZm9ybS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb21iby1oZXJvZXMtcmVhY3RpdmUtZm9ybS9zYW1wbGUtcG8tY29tYm8taGVyb2VzLXJlYWN0aXZlLWZvcm0uY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tY29tYm8taW5maW5pdHktc2Nyb2xsXCIgdGl0bGU9XCJQTyBDb21ibyAtIEluaWZpdHkgU2Nyb2xsXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb21iby1pbmZpbml0eS1zY3JvbGwvc2FtcGxlLXBvLWNvbWJvLWluZmluaXR5LXNjcm9sbC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1jb21iby1pbmZpbml0eS1zY3JvbGwvc2FtcGxlLXBvLWNvbWJvLWluZmluaXR5LXNjcm9sbC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1jb21iby1ob3RlbHNcIiB0aXRsZT1cIlBPIENvbWJvIC0gQm9va2luZyBIb3RlbFwiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29tYm8taG90ZWxzL3NhbXBsZS1wby1jb21iby1ob3RlbHMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tY29tYm8taG90ZWxzL3NhbXBsZS1wby1jb21iby1ob3RlbHMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1jb21ibycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWNvbWJvLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFBvQ29tYm9GaWx0ZXJTZXJ2aWNlLFxyXG4gICAgUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9Db21ib0NvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0NvbWJvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NvbWJvQ29tcG9uZW50IGV4dGVuZHMgUG9Db21ib0Jhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZChQb0NvbWJvT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGNvbWJvT3B0aW9uVGVtcGxhdGU6IFBvQ29tYm9PcHRpb25UZW1wbGF0ZURpcmVjdGl2ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyRWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ljb25BcnJvdycsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGljb25FbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGlucHV0RWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncG9Db21ib0JvZHknLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcG9Db21ib0JvZHk6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbWJvSWNvbjogc3RyaW5nID0gJ3BvLWljb24tYXJyb3ctZG93bic7XHJcbiAgY29tYm9PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZGlmZmVyOiBhbnk7XHJcbiAgaXNQcm9jZXNzaW5nVmFsdWVCeVRhYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNjcm9sbFRvcCA9IDA7XHJcbiAgc2VydmljZTogUG9Db21ib0ZpbHRlclNlcnZpY2U7XHJcbiAgc2hvdWxkTWFya0xldHRlcnM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGluZmluaXRlTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9pc1NlcnZlclNlYXJjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGNsaWNrb3V0TGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBldmVudFJlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIGZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgZ2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsRXZlbnQkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25TY3JvbGxFdmVudDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIHB1YmxpYyBkZWZhdWx0U2VydmljZTogUG9Db21ib0ZpbHRlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjb250cm9sUG9zaXRpb246IFBvQ29udHJvbFBvc2l0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVkOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UpO1xyXG5cclxuICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNTZXJ2ZXJTZWFyY2hpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9pc1NlcnZlclNlYXJjaGluZyA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnNldENvbnRhaW5lclBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faXNTZXJ2ZXJTZWFyY2hpbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc1NlcnZlclNlYXJjaGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1NlcnZlclNlYXJjaGluZztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCkge1xyXG4gICAgICB0aGlzLmNoZWNrSW5maW5pdGVTY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRlYm91bmNlVGltZSkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlS2V5dXBPYnNlcnZhYmxlKCk7XHJcbiAgICAgIHRoaXMuaW5pdElucHV0T2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmZpbHRlclNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5jb25maWdBZnRlclNldEZpbHRlclNlcnZpY2UodGhpcy5maWx0ZXJTZXJ2aWNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5maWx0ZXJTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5maWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5nZXRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5nZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCkge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvblNjcm9sbEV2ZW50Py51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gcXVlIGF0cmlidWkgZm9jbyBhbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogUGFyYSB1dGlsaXrDoS1sYSDDqSBuZWNlc3PDoXJpbyB0ZXIgYSBpbnN0w6JuY2lhIGRvIGNvbXBvbmVudGUgbm8gRE9NLCBwb2RlbmRvIHNlciB1dGlsaXphZG8gbyBWaWV3Q2hpbGQgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBpbXBvcnQgeyBQb0NvbWJvQ29tcG9uZW50IH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiBAVmlld0NoaWxkKFBvQ29tYm9Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGNvbWJvOiBQb0NvbWJvQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNDb21ibygpIHtcclxuICAgKiAgIHRoaXMuY29tYm8uZm9jdXMoKTtcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQ/LigpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50PzogYW55KSB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAvLyBidXNjYSB1bSByZWdpc3RybyBxdWFuZG8gYWNpb25hciBvIHRhYlxyXG4gICAgaWYgKHRoaXMuc2VydmljZSAmJiBrZXkgPT09IFBvS2V5Q29kZUVudW0udGFiICYmIGlucHV0VmFsdWUgJiYgIXRoaXMuZGlzYWJsZWRUYWJGaWx0ZXIpIHtcclxuICAgICAgdGhpcy5jb250cm9sQ29tYm9WaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0QnlWYWx1ZShpbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWNsYXMgXCJ1cFwiIGUgXCJkb3duXCJcclxuICAgIGlmIChrZXkgPT09IFBvS2V5Q29kZUVudW0uYXJyb3dVcCB8fCBrZXkgPT09IFBvS2V5Q29kZUVudW0uYXJyb3dEb3duKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb21ib09wZW4pIHtcclxuICAgICAgICBpZiAoa2V5ID09PSBQb0tleUNvZGVFbnVtLmFycm93VXApIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXNPcHRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3ROZXh0T3B0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbnRyb2xDb21ib1Zpc2liaWxpdHkodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaXNGaWx0ZXJpbmcgPSB0aGlzLmNoYW5nZU9uRW50ZXIgPyB0aGlzLmlzRmlsdGVyaW5nIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvdWxkTWFya0xldHRlcnMgPSB0aGlzLmNoYW5nZU9uRW50ZXIgPyB0aGlzLnNob3VsZE1hcmtMZXR0ZXJzIDogZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWNsYXMgXCJ0YWJcIiBvdSBcImVzY1wiXHJcbiAgICBpZiAoa2V5ID09PSBQb0tleUNvZGVFbnVtLnRhYiB8fCBrZXkgPT09IFBvS2V5Q29kZUVudW0uZXNjKSB7XHJcbiAgICAgIGlmIChrZXkgPT09IFBvS2V5Q29kZUVudW0uZXNjICYmIHRoaXMuY29tYm9PcGVuKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb250cm9sQ29tYm9WaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgdGhpcy52ZXJpZnlWYWxpZE9wdGlvbigpO1xyXG4gICAgICB0aGlzLmlzUHJvY2Vzc2luZ1ZhbHVlQnlUYWIgPSB0cnVlO1xyXG4gICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xyXG4gICAgICAgIC8vIGNhc28gZm9yIGNoYW5nZU9uRW50ZXIgZSBuYW8gdGVyIHNlbGVjdGVkVmFsdWUgZGV2ZSBsaW1wYXIgbyBzZWxlY3RlZFZpZXcgcGFyYSByZWluaWNpYS1sby5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IHRoaXMuY2hhbmdlT25FbnRlciAmJiAhdGhpcy5zZWxlY3RlZFZhbHVlID8gdW5kZWZpbmVkIDogdGhpcy5zZWxlY3RlZFZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlY2xhIFwiZW50ZXJcIlxyXG4gICAgaWYgKGtleSA9PT0gUG9LZXlDb2RlRW51bS5lbnRlciAmJiB0aGlzLnNlbGVjdGVkVmlldyAmJiB0aGlzLmNvbWJvT3Blbikge1xyXG4gICAgICBjb25zdCBpc1VwZGF0ZU1vZGVsID0gdGhpcy5zZWxlY3RlZFZpZXcudmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSB8fCBpbnB1dFZhbHVlICE9PSB0aGlzLnNlbGVjdGVkVmlldy5sYWJlbDtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbENvbWJvVmlzaWJpbGl0eShmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUodGhpcy5zZWxlY3RlZFZpZXcsIGlzVXBkYXRlTW9kZWwpO1xyXG4gICAgICB0aGlzLmlzRmlsdGVyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tYm9MaXN0KFsuLi50aGlzLmNhY2hlU3RhdGljT3B0aW9uc10pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoa2V5ID09PSBQb0tleUNvZGVFbnVtLmVudGVyKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbENvbWJvVmlzaWJpbGl0eSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoZXZlbnQ/OiBhbnkpIHtcclxuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsaWRLZXkgPSBrZXkgIT09IFBvS2V5Q29kZUVudW0uYXJyb3dVcCAmJiBrZXkgIT09IFBvS2V5Q29kZUVudW0uYXJyb3dEb3duICYmIGtleSAhPT0gUG9LZXlDb2RlRW51bS5lbnRlcjtcclxuXHJcbiAgICBpZiAoaXNWYWxpZEtleSkge1xyXG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlICYmIHRoaXMucHJldmlvdXNTZWFyY2hWYWx1ZSAhPT0gaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zaG91bGRNYXJrTGV0dGVycyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmlzRmlsdGVyaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRm9yTGFiZWwoaW5wdXRWYWx1ZSwgdGhpcy5jb21ib09wdGlvbnNMaXN0LCB0aGlzLmZpbHRlck1vZGUpO1xyXG4gICAgICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBxdWFuZG8gYXBhZ2FyIHJhcGlkbyBvIGNhbXBvIGUgY29udGVyIHNlcnZpw6dvLCB2YWxvciwgbsOjbyBkaXNwYXJhdmEgbyBrZXl1cCBvYnNlcnZhYmxlXHJcbiAgICAgICAgLy8gbmVjZXNzYXJpbyBlc3RlIHRyYXRhbWVudG8gcGFyYSByZXRvcm5hciBhIGxpc3RhICdkZWZhdWx0Jy5cclxuICAgICAgICBjb25zdCB1c2VEZWZhdWx0T3B0aW9uc1NlcnZpY2UgPVxyXG4gICAgICAgICAgdGhpcy5zZXJ2aWNlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZSAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID09PSB0aGlzLnByZXZpb3VzU2VhcmNoVmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShudWxsKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29tYm9MaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VEZWZhdWx0T3B0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29tYm9MaXN0KFsuLi50aGlzLmNhY2hlT3B0aW9uc10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0ZpbHRlcmluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjYXNvIG8gdmFsb3IgcGVzcXVpc2FkbyBmb3IgZGlmZXJlbnRlIGRvIGFudGVyaW9yIGRldmUgYWJyaXIgbyBjb21ib1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1NlYXJjaFZhbHVlICE9PSBpbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbENvbWJvVmlzaWJpbGl0eSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJldmlvdXNTZWFyY2hWYWx1ZSA9IGlucHV0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBpbml0SW5wdXRPYnNlcnZhYmxlKCkge1xyXG4gICAgaWYgKHRoaXMuc2VydmljZSkge1xyXG4gICAgICBjb25zdCBrZXl1cE9ic2VydmFibGUgPSBmcm9tRXZlbnQodGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChlOiBhbnkpID0+IHRoaXMuaXNWYWxpZENoYXJhY3RlclRvU2VhcmNoKGUua2V5Q29kZSkpLFxyXG4gICAgICAgIG1hcCgoZTogYW55KSA9PiBlLmN1cnJlbnRUYXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvdWxkTWFya0xldHRlcnMgPSBmYWxzZTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmtleXVwU3Vic2NyaWJlID0ga2V5dXBPYnNlcnZhYmxlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSB0aGlzLmZpbHRlck1pbmxlbmd0aCB8fCAhdmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuY29udHJvbEFwcGx5RmlsdGVyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udHJvbEFwcGx5RmlsdGVyKHZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNQcm9jZXNzaW5nVmFsdWVCeVRhYiAmJiAoIXRoaXMuc2VsZWN0ZWRPcHRpb24gfHwgdmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRPcHRpb25bdGhpcy5keW5hbWljTGFiZWxdKSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRTZXJ2aWNlLmhhc05leHQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnNldFBhZ2UoKTtcclxuICAgICAgdGhpcy5vcHRpb25zID0gW107XHJcbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXIodmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmdWYWx1ZUJ5VGFiID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nLCByZXNldDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0U2VydmljZS5oYXNOZXh0KSB7XHJcbiAgICAgIHRoaXMuY29udHJvbENvbWJvVmlzaWJpbGl0eShmYWxzZSwgcmVzZXQpO1xyXG4gICAgICB0aGlzLmlzU2VydmVyU2VhcmNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmFtID0gdGhpcy5pbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgID8geyBwcm9wZXJ0eTogdGhpcy5maWVsZExhYmVsLCB2YWx1ZSwgcGFnZTogdGhpcy5wYWdlLCBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSB9XHJcbiAgICAgICAgOiB7IHByb3BlcnR5OiB0aGlzLmZpZWxkTGFiZWwsIHZhbHVlIH07XHJcblxyXG4gICAgICB0aGlzLmZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZT8uZ2V0RmlsdGVyZWREYXRhKHBhcmFtLCB0aGlzLmZpbHRlclBhcmFtcykuc3Vic2NyaWJlKFxyXG4gICAgICAgIGl0ZW1zID0+IHRoaXMuc2V0T3B0aW9uc0J5QXBwbHlGaWx0ZXIodmFsdWUsIGl0ZW1zLCByZXNldCksXHJcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5vbkVycm9yRmlsdGVyZWREYXRhKClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnNCeUFwcGx5RmlsdGVyKHZhbHVlLCBpdGVtcywgcmVzZXQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgdGhpcy5zaG91bGRNYXJrTGV0dGVycyA9IHRydWU7XHJcbiAgICB0aGlzLmlzU2VydmVyU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmluZmluaXRlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5wcmVwYXJlT3B0aW9ucyhpdGVtcyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hGb3JMYWJlbCh2YWx1ZSwgaXRlbXMsIHRoaXMuZmlsdGVyTW9kZSk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ29tYm9WaXNpYmlsaXR5KHRydWUsIHJlc2V0KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ZpcnN0RmlsdGVyKSB7XHJcbiAgICAgIHRoaXMuaXNGaXJzdEZpbHRlciA9ICF0aGlzLmlzRmlyc3RGaWx0ZXI7XHJcblxyXG4gICAgICB0aGlzLmNhY2hlT3B0aW9ucyA9IHRoaXMuY29tYm9PcHRpb25zTGlzdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9iamVjdEJ5VmFsdWUodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsdWUgIT09IHZhbHVlICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24/Llt0aGlzLmR5bmFtaWNMYWJlbF0gIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaXNQcm9jZXNzaW5nVmFsdWVCeVRhYiA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmdldFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5nZXRPYmplY3RCeVZhbHVlKHZhbHVlLCB0aGlzLmZpbHRlclBhcmFtcykuc3Vic2NyaWJlKFxyXG4gICAgICAgIGl0ZW0gPT4gdGhpcy51cGRhdGVPcHRpb25CeUZpbHRlcmVkVmFsdWUoaXRlbSksXHJcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5vbkVycm9yR2V0T2JqZWN0QnlWYWx1ZSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcHRpb25CeUZpbHRlcmVkVmFsdWUoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gW2l0ZW1dO1xyXG4gICAgICB0aGlzLm9uT3B0aW9uQ2xpY2soaXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNQcm9jZXNzaW5nVmFsdWVCeVRhYiA9IGZhbHNlO1xyXG4gICAgfSwgdGhpcy5kZWJvdW5jZVRpbWUpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJldmlvdXNPcHRpb24oKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Vmlld1ZhbHVlID0gdGhpcy5zZWxlY3RlZFZpZXcgJiYgdGhpcy5zZWxlY3RlZFZpZXdbdGhpcy5keW5hbWljVmFsdWVdO1xyXG5cclxuICAgIGlmIChjdXJyZW50Vmlld1ZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSB0aGlzLmdldE5leHRPcHRpb24oY3VycmVudFZpZXdWYWx1ZSwgdGhpcy52aXNpYmxlT3B0aW9ucywgdHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUoXHJcbiAgICAgICAgbmV4dE9wdGlvbixcclxuICAgICAgICBuZXh0T3B0aW9uICYmIG5leHRPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICE9PSBjdXJyZW50Vmlld1ZhbHVlICYmICF0aGlzLmNoYW5nZU9uRW50ZXJcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy52aXNpYmxlT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgdmlzaWJsZU9wdGlvbiA9IHRoaXMudmlzaWJsZU9wdGlvbnNbdGhpcy52aXNpYmxlT3B0aW9ucy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShcclxuICAgICAgICB2aXNpYmxlT3B0aW9uLFxyXG4gICAgICAgIHZpc2libGVPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICE9PSBjdXJyZW50Vmlld1ZhbHVlICYmICF0aGlzLmNoYW5nZU9uRW50ZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdE5leHRPcHRpb24oKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Vmlld1ZhbHVlID0gdGhpcy5zZWxlY3RlZFZpZXcgJiYgdGhpcy5zZWxlY3RlZFZpZXdbdGhpcy5keW5hbWljVmFsdWVdO1xyXG5cclxuICAgIGlmIChjdXJyZW50Vmlld1ZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSB0aGlzLmdldE5leHRPcHRpb24oY3VycmVudFZpZXdWYWx1ZSwgdGhpcy52aXNpYmxlT3B0aW9ucyk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUoXHJcbiAgICAgICAgbmV4dE9wdGlvbixcclxuICAgICAgICBuZXh0T3B0aW9uICYmIG5leHRPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICE9PSBjdXJyZW50Vmlld1ZhbHVlICYmICF0aGlzLmNoYW5nZU9uRW50ZXJcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy52aXNpYmxlT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoYW5nZU9uRW50ZXIgPyAxIDogMDtcclxuXHJcbiAgICAgIGNvbnN0IHZpc2libGVPcHRpb24gPSB0aGlzLnZpc2libGVPcHRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShcclxuICAgICAgICB2aXNpYmxlT3B0aW9uLFxyXG4gICAgICAgIHZpc2libGVPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICE9PSBjdXJyZW50Vmlld1ZhbHVlICYmICF0aGlzLmNoYW5nZU9uRW50ZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbWJvVmlzaWJpbGl0eSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlICYmICF0aGlzLmRpc2FibGVkSW5pdEZpbHRlcikge1xyXG4gICAgICB0aGlzLmFwcGx5RmlsdGVySW5GaXJzdENsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ29tYm9WaXNpYmlsaXR5KCF0aGlzLmNvbWJvT3Blbik7XHJcbiAgfVxyXG5cclxuICBhcHBseUZpbHRlckluRmlyc3RDbGljaygpIHtcclxuICAgIGlmICh0aGlzLmlzRmlyc3RGaWx0ZXIgJiYgIXRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcclxuICAgICAgY29uc3Qgc2Nyb2xsaW5nQ29udHJvbCA9IHRoaXMuc2V0U2Nyb2xsaW5nQ29udHJvbCgpO1xyXG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKCcnLCBzY3JvbGxpbmdDb250cm9sKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRyb2xDb21ib1Zpc2liaWxpdHkodG9PcGVuOiBib29sZWFuLCByZXNldDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0b09wZW4gPyB0aGlzLm9wZW4ocmVzZXQpIDogdGhpcy5jbG9zZShyZXNldCk7XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogUG9Db21ib09wdGlvbiB8IFBvQ29tYm9Hcm91cCwgZXZlbnQ/OiBhbnkpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldElucHV0VmFsdWUoKTtcclxuICAgIGNvbnN0IGlzVXBkYXRlTW9kZWwgPVxyXG4gICAgICBvcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICE9PSB0aGlzLnNlbGVjdGVkVmFsdWUgfHxcclxuICAgICAgISEodGhpcy5zZWxlY3RlZFZpZXcgJiYgaW5wdXRWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZFZpZXdbdGhpcy5keW5hbWljTGFiZWxdKTtcclxuXHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKG9wdGlvbiwgaXNVcGRhdGVNb2RlbCk7XHJcbiAgICB0aGlzLmNvbnRyb2xDb21ib1Zpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb21ib0xpc3QoWy4uLnRoaXMuY2FjaGVTdGF0aWNPcHRpb25zXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1NlYXJjaFZhbHVlID0gdGhpcy5zZWxlY3RlZFZpZXdbdGhpcy5keW5hbWljTGFiZWxdO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oaW5kZXgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wby1jb21iby1pdGVtLXNlbGVjdGVkJyk7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAhc2VsZWN0ZWRJdGVtLmxlbmd0aCB8fCBpbmRleCA8PSAxID8gMCA6IHNlbGVjdGVkSXRlbVswXS5vZmZzZXRUb3AgLSA4ODtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5maW5pdGVTY3JvbGwpIHtcclxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElucHV0VmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICB3YXNDbGlja2VkT25Ub2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jb21ib09wZW4gJiZcclxuICAgICAgIXRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgIXRoaXMuaWNvbkVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICghdGhpcy5jb250ZW50RWxlbWVudCB8fCAhdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXHJcbiAgICApIHtcclxuICAgICAgLy8gRXNjb25kZSBDb250ZW50IGRvIENvbWJvIHF1YW5kbyBmb3IgY2xpY2FkbyBmb3JhXHJcbiAgICAgIHRoaXMuY29udHJvbENvbWJvVmlzaWJpbGl0eShmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnZlcmlmeVZhbGlkT3B0aW9uKCk7XHJcblxyXG4gICAgICAvLyBjYXNvIGZvciBjaGFuZ2VPbkVudGVyIGRldmUgbGltcGFyIG8gc2VsZWN0ZWRWaWV3IHBhcmEgcmVpbmljaWEtbG9cclxuICAgICAgdGhpcy5zZWxlY3RlZFZpZXcgPSB0aGlzLmNoYW5nZU9uRW50ZXIgJiYgIXRoaXMuc2VsZWN0ZWRWYWx1ZSA/IHVuZGVmaW5lZCA6IHRoaXMuc2VsZWN0ZWRWaWV3O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc2VydmljZSAmJiAhdGhpcy5nZXRJbnB1dFZhbHVlKCkgJiYgIXRoaXMuaXNGaXJzdEZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbGluZ0NvbnRyb2wgPSB0aGlzLnNldFNjcm9sbGluZ0NvbnRyb2woKTtcclxuICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKCcnLCBzY3JvbGxpbmdDb250cm9sKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxGb3JtYXR0ZWQobGFiZWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgIGNvbnN0IHNhbml0aXplZExhYmVsID0gdGhpcy5zYW5pdGl6ZVRhZ0hUTUwobGFiZWwpO1xyXG4gICAgbGV0IGZvcm1hdDogc3RyaW5nID0gc2FuaXRpemVkTGFiZWw7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzRmlsdGVyaW5nIHx8XHJcbiAgICAgICh0aGlzLnNlcnZpY2UgJiZcclxuICAgICAgICB0aGlzLmdldElucHV0VmFsdWUoKSAmJlxyXG4gICAgICAgICF0aGlzLmNvbXBhcmVPYmplY3RzKHRoaXMuY2FjaGVPcHRpb25zLCB0aGlzLnZpc2libGVPcHRpb25zKSAmJlxyXG4gICAgICAgIHRoaXMuc2hvdWxkTWFya0xldHRlcnMpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbGFiZWxJbnB1dCA9IHRoaXMuc2FuaXRpemVUYWdIVE1MKHRoaXMuZ2V0SW5wdXRWYWx1ZSgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIGNvbnN0IGxhYmVsTG93ZXJDYXNlID0gc2FuaXRpemVkTGFiZWwudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGNvbnN0IG9wZW5UYWdCb2xkID0gJzxzcGFuIGNsYXNzPVwicG8tZm9udC10ZXh0LWxhcmdlLWJvbGRcIj4nO1xyXG4gICAgICBjb25zdCBjbG9zZVRhZ0JvbGQgPSAnPC9zcGFuPic7XHJcblxyXG4gICAgICBsZXQgc3RhcnRTdHJpbmc7XHJcbiAgICAgIGxldCBtaWRkbGVTdHJpbmc7XHJcbiAgICAgIGxldCBlbmRTdHJpbmc7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuZmlsdGVyTW9kZSkge1xyXG4gICAgICAgIGNhc2UgUG9Db21ib0ZpbHRlck1vZGUuc3RhcnRzV2l0aDpcclxuICAgICAgICBjYXNlIFBvQ29tYm9GaWx0ZXJNb2RlLmNvbnRhaW5zOlxyXG4gICAgICAgICAgY29uc3QgaW5kZXhPZkxhYmVsSW5wdXQgPSBsYWJlbExvd2VyQ2FzZS5pbmRleE9mKGxhYmVsSW5wdXQpO1xyXG5cclxuICAgICAgICAgIGlmIChpbmRleE9mTGFiZWxJbnB1dCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0U3RyaW5nID0gc2FuaXRpemVkTGFiZWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZMYWJlbElucHV0KTtcclxuXHJcbiAgICAgICAgICAgIG1pZGRsZVN0cmluZyA9IHNhbml0aXplZExhYmVsLnN1YnN0cmluZyhpbmRleE9mTGFiZWxJbnB1dCwgaW5kZXhPZkxhYmVsSW5wdXQgKyBsYWJlbElucHV0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGVuZFN0cmluZyA9IHNhbml0aXplZExhYmVsLnN1YnN0cmluZyhpbmRleE9mTGFiZWxJbnB1dCArIGxhYmVsSW5wdXQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm1hdCA9IHN0YXJ0U3RyaW5nICsgb3BlblRhZ0JvbGQgKyBtaWRkbGVTdHJpbmcgKyBjbG9zZVRhZ0JvbGQgKyBlbmRTdHJpbmc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBQb0NvbWJvRmlsdGVyTW9kZS5lbmRzV2l0aDpcclxuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleE9mTGFiZWxJbnB1dCA9IGxhYmVsTG93ZXJDYXNlLmxhc3RJbmRleE9mKGxhYmVsSW5wdXQpO1xyXG5cclxuICAgICAgICAgIGlmIChsYXN0SW5kZXhPZkxhYmVsSW5wdXQgPiAtMSkge1xyXG4gICAgICAgICAgICBzdGFydFN0cmluZyA9IHNhbml0aXplZExhYmVsLnN1YnN0cmluZygwLCBsYXN0SW5kZXhPZkxhYmVsSW5wdXQpO1xyXG4gICAgICAgICAgICBtaWRkbGVTdHJpbmcgPSBzYW5pdGl6ZWRMYWJlbC5zdWJzdHJpbmcobGFzdEluZGV4T2ZMYWJlbElucHV0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcm1hdCA9IHN0YXJ0U3RyaW5nICsgb3BlblRhZ0JvbGQgKyBtaWRkbGVTdHJpbmcgKyBjbG9zZVRhZ0JvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNhZmVIdG1sKGZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBzYWZlSHRtbCh2YWx1ZSk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkQ2hhcmFjdGVyVG9TZWFyY2goa2V5Q29kZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAga2V5Q29kZSAhPT0gOSAmJiAvLyB0YWJcclxuICAgICAga2V5Q29kZSAhPT0gMTMgJiYgLy8gZW50ZXRcclxuICAgICAga2V5Q29kZSAhPT0gMTYgJiYgLy8gc2hpZnRcclxuICAgICAga2V5Q29kZSAhPT0gMTcgJiYgLy8gY3RybFxyXG4gICAgICBrZXlDb2RlICE9PSAxOCAmJiAvLyBhbHRcclxuICAgICAga2V5Q29kZSAhPT0gMjAgJiYgLy8gY2Fwc2xvY2tcclxuICAgICAga2V5Q29kZSAhPT0gMjcgJiYgLy8gZXNjXHJcbiAgICAgIGtleUNvZGUgIT09IDM3ICYmIC8vIHNldGFcclxuICAgICAga2V5Q29kZSAhPT0gMzggJiYgLy8gc2V0YVxyXG4gICAgICBrZXlDb2RlICE9PSAzOSAmJiAvLyBzZXRhXHJcbiAgICAgIGtleUNvZGUgIT09IDQwICYmIC8vIHNldGFcclxuICAgICAga2V5Q29kZSAhPT0gOTNcclxuICAgICk7IC8vIHdpbmRvd3MgbWVudVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoT25FbnRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlICYmICF0aGlzLnNlbGVjdGVkVmlldyAmJiB2YWx1ZS5sZW5ndGggPj0gdGhpcy5maWx0ZXJNaW5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jb250cm9sQXBwbHlGaWx0ZXIodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd01vcmVJbmZpbml0ZVNjcm9sbCh7IHRhcmdldCB9KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0U2VydmljZS5oYXNOZXh0KSB7XHJcbiAgICAgIHRoaXMuaW5maW5pdGVMb2FkaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArIHRhcmdldC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAqICh0aGlzLmluZmluaXRlU2Nyb2xsRGlzdGFuY2UgLyAxMTApKSB7XHJcbiAgICAgIHRoaXMucGFnZSsrO1xyXG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKCcnLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGVja0luZmluaXRlU2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGFzSW5maW5pdGVTY3JvbGwoKSAmJiB0aGlzLnBvQ29tYm9Cb2R5Py5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA+PSAxNzUpIHtcclxuICAgICAgdGhpcy5pbmNsdWRlSW5maW5pdGVTY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzSW5maW5pdGVTY3JvbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmZpbml0ZVNjcm9sbCAmJiB0aGlzLnBvQ29tYm9Cb2R5Py5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCAmJiB0aGlzLmRlZmF1bHRTZXJ2aWNlLmhhc05leHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluY2x1ZGVJbmZpbml0ZVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uU2Nyb2xsRXZlbnQ/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNjcm9sbEV2ZW50JCA9IHRoaXMuZGVmYXVsdFNlcnZpY2Uuc2Nyb2xsTGlzdGVuZXIodGhpcy5wb0NvbWJvQm9keS5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uU2Nyb2xsRXZlbnQgPSB0aGlzLnNjcm9sbEV2ZW50JC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICB0aGlzLnNob3dNb3JlSW5maW5pdGVTY3JvbGwoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkanVzdENvbnRhaW5lclBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5jb250cm9sUG9zaXRpb24uYWRqdXN0UG9zaXRpb24ocG9Db21ib0NvbnRhaW5lclBvc2l0aW9uRGVmYXVsdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlKHJlc2V0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNvbWJvT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghcmVzZXQpIHtcclxuICAgICAgaWYgKCF0aGlzLmdldElucHV0VmFsdWUoKSkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuc2V0UGFnZSgpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNlcnZpY2UuaGFzTmV4dCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5maW5pdGVTY3JvbGwpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNldE9wdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMuY29tYm9JY29uID0gJ3BvLWljb24tYXJyb3ctZG93bic7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLmlzRmlsdGVyaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0aGlzLmluZmluaXRlU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tJbmZpbml0ZVNjcm9sbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xpY2tvdXRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLndhc0NsaWNrZWRPblRvZ2dsZShldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50UmVzaXplTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgLy8gdGltZW91dCBuZWNlc3NhcmlvIHBvaXMgYSBhbmltYcOnw6NvIGRvIHBvLW1lbnUgaW1wYWN0YSBubyBhanVzdGUgZGEgcG9zacOnw6NvIGRvIGNvbnRhaW5lci5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkanVzdENvbnRhaW5lclBvc2l0aW9uKCksIDI1MCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRXJyb3JHZXRPYmplY3RCeVZhbHVlKCkge1xyXG4gICAgdGhpcy51cGRhdGVPcHRpb25CeUZpbHRlcmVkVmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRXJyb3JGaWx0ZXJlZERhdGEoKSB7XHJcbiAgICB0aGlzLmlzU2VydmVyU2VhcmNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDb21ib0xpc3QoW10pO1xyXG5cclxuICAgIHRoaXMuY29udHJvbENvbWJvVmlzaWJpbGl0eSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TY3JvbGwgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLmFkanVzdENvbnRhaW5lclBvc2l0aW9uKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuKHJlc2V0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNvbWJvT3BlbiA9IHRydWU7XHJcbiAgICBpZiAoIXJlc2V0ICYmIHRoaXMuaW5maW5pdGVTY3JvbGwpIHtcclxuICAgICAgaWYgKCF0aGlzLmdldElucHV0VmFsdWUoKSkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5jb21ib0ljb24gPSAncG8taWNvbi1hcnJvdy11cCc7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIGlmICghdGhpcy5pbmZpbml0ZVNjcm9sbCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuZ2V0SW5kZXhTZWxlY3RlZFZpZXcoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbnRhaW5lclBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGlmICh0aGlzLmNsaWNrb3V0TGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5jbGlja291dExpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZXZlbnRSZXNpemVMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmV2ZW50UmVzaXplTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCAmJiAhdGhpcy5kZWZhdWx0U2VydmljZS5oYXNOZXh0KSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2Nyb2xsRXZlbnQ/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhbml0aXplVGFnSFRNTCh2YWx1ZTogc3RyaW5nID0gJycpIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXDwvZ20sICcmbHQ7JykucmVwbGFjZSgvXFw+L2csICcmZ3Q7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbnRhaW5lclBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5jb250cm9sUG9zaXRpb24uc2V0RWxlbWVudHMoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBwb0NvbWJvQ29udGFpbmVyT2Zmc2V0LFxyXG4gICAgICB0aGlzLmlucHV0RWwsXHJcbiAgICAgIFsndG9wJywgJ2JvdHRvbSddLFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWRqdXN0Q29udGFpbmVyUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3B0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmdldElucHV0VmFsdWUoKSA/IHRoaXMub3B0aW9ucyA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVPcHRpb25zKGl0ZW1zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmZpbml0ZVNjcm9sbCA/IFsuLi50aGlzLm9wdGlvbnMsIC4uLml0ZW1zXSA6IGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVTY3JvbGwgPyAxIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTY3JvbGxpbmdDb250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVTY3JvbGwgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1oZWxwXT1cImhlbHBcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJwby1maWVsZC1pY29uLWNvbnRhaW5lci1sZWZ0XCI+XHJcbiAgICAgIDxwby1pY29uIGNsYXNzPVwicG8tZmllbGQtaWNvbiBwby1pY29uLWlucHV0XCIgW2NsYXNzLnBvLWZpZWxkLWljb24tZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbcC1pY29uXT1cImljb25cIj48L3BvLWljb24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucFxyXG4gICAgICBjbGFzcz1cInBvLWlucHV0IHBvLWNvbWJvLWlucHV0XCJcclxuICAgICAgW25nQ2xhc3NdPVwiY2xlYW4gJiYgaW5wLnZhbHVlID8gJ3BvLWlucHV0LWRvdWJsZS1pY29uLXJpZ2h0JyA6ICdwby1pbnB1dC1pY29uLXJpZ2h0J1wiXHJcbiAgICAgIFtjbGFzcy5wby1pbnB1dC1pY29uLWxlZnRdPVwiaWNvblwiXHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcclxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJkaXNhYmxlZCA/ICcnIDogcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICAoY2xpY2spPVwidG9nZ2xlQ29tYm9WaXNpYmlsaXR5KClcIlxyXG4gICAgICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcclxuICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxyXG4gICAgICAoa2V5dXAuZW50ZXIpPVwic2VhcmNoT25FbnRlcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXHJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgKm5nSWY9XCJjbGVhbiAmJiAhZGlzYWJsZWRcIlxyXG4gICAgICAgIChwLWNoYW5nZS1ldmVudCk9XCJjbGVhcigkZXZlbnQpXCJcclxuICAgICAgICBbcC1lbGVtZW50LXJlZl09XCJpbnB1dEVsXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWNsZWFuPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICNpY29uQXJyb3dcclxuICAgICAgICBjbGFzcz1cInBvLWljb24gcG8tZmllbGQtaWNvbiB7eyBjb21ib0ljb24gfX0gcG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgW2NsYXNzLnBvLWZpZWxkLWljb24tZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtjbGFzcy5wby1maWVsZC1pY29uXT1cIiFkaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUNvbWJvVmlzaWJpbGl0eSgpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAjY29udGFpbmVyRWxlbWVudCBjbGFzcz1cInBvLWNvbWJvLWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIWNvbWJvT3BlbiAmJiAhaXNTZXJ2ZXJTZWFyY2hpbmdcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aXNpYmxlT3B0aW9ucy5sZW5ndGg7IHRoZW4gdmlzaWJsZU9wdGlvbnNUZW1wbGF0ZTsgZWxzZSBub0RhdGFUZW1wbGF0ZVwiPiA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJpc1NlcnZlclNlYXJjaGluZ1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5maW5pdGVMb2FkaW5nOyB0aGVuIGluZmluaXRlTG9hZGluZ1RlbXBsYXRlOyBlbHNlIG5vcm1hbExvYWRpbmdUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxwby1maWVsZC1jb250YWluZXItYm90dG9tPjwvcG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT5cclxuPC9wby1maWVsZC1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI25vcm1hbExvYWRpbmdUZW1wbGF0ZT5cclxuICA8cG8tbG9hZGluZyBjbGFzcz1cInBvLWNvbWJvLWNvbnRhaW5lci1sb2FkaW5nXCI+IDwvcG8tbG9hZGluZz5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjaW5maW5pdGVMb2FkaW5nVGVtcGxhdGU+XHJcbiAgPHBvLWxvYWRpbmctb3ZlcmxheSBjbGFzcz1cInBvLWNvbWJvLWNvbnRhaW5lci1sb2FkaW5nXCI+IDwvcG8tbG9hZGluZy1vdmVybGF5PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN2aXNpYmxlT3B0aW9uc1RlbXBsYXRlPlxyXG4gIDx1bCAjY29udGVudEVsZW1lbnQgI3BvQ29tYm9Cb2R5IGNsYXNzPVwicG8tY29tYm8tY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgIDxsaVxyXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHZpc2libGVPcHRpb25zXCJcclxuICAgICAgW2NsYXNzLnBvLWNvbWJvLWl0ZW0tc2VsZWN0ZWRdPVwiY29tcGFyZU9iamVjdHMoc2VsZWN0ZWRWaWV3LCBvcHRpb24pXCJcclxuICAgICAgKGNsaWNrKT1cIm9wdGlvbj8ub3B0aW9ucyA/IHVuZGVmaW5lZCA6IG9uT3B0aW9uQ2xpY2sob3B0aW9uLCAkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbWJvT3B0aW9uVGVtcGxhdGU7IHRoZW4gb3B0aW9uVGVtcGxhdGU7IGVsc2UgZGVmYXVsdE9wdGlvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRPcHRpb25UZW1wbGF0ZT5cclxuICAgICAgICA8bGFiZWwgKm5nSWY9XCJvcHRpb24/Lm9wdGlvbnM7IGVsc2Ugb3B0aW9uTGlua1wiIGNsYXNzPVwicG8tY29tYm8taXRlbS10aXRsZVwiPnt7XHJcbiAgICAgICAgICBvcHRpb25bdGhpcy5keW5hbWljTGFiZWxdXHJcbiAgICAgICAgfX08L2xhYmVsPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjb3B0aW9uTGluaz5cclxuICAgICAgICAgIDxhIGNsYXNzPVwicG8tY29tYm8taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cInBvaW50ZXItZXZlbnRzOiBub25lXCIgW2lubmVySFRNTF09XCJnZXRMYWJlbEZvcm1hdHRlZChvcHRpb24/Llt0aGlzLmR5bmFtaWNMYWJlbF0pXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8bmctdGVtcGxhdGUgI29wdGlvblRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc09wdGlvbkdyb3VwTGlzdDsgdGhlbiBvcHRpb25zR3JvdXBUZW1wbGF0ZTsgZWxzZSBkZWZhdWx0T3B0aW9uc1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjb3B0aW9uc0dyb3VwVGVtcGxhdGU+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29tYm9PcHRpb25UZW1wbGF0ZT8udGVtcGxhdGVSZWZcIlxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG9wdGlvbiwgc2VsZWN0ZWQ6IGNvbXBhcmVPYmplY3RzKHNlbGVjdGVkVmlldywgb3B0aW9uKSB9XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0T3B0aW9uc1RlbXBsYXRlPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJwby1jb21iby1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbWJvT3B0aW9uVGVtcGxhdGU/LnRlbXBsYXRlUmVmXCJcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG9wdGlvbiB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI25vRGF0YVRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1jb21iby1jb250YWluZXItbm8tZGF0YVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWNvbWJvLW5vLWRhdGEgcG8tdGV4dC1jZW50ZXJcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhaXNTZXJ2ZXJTZWFyY2hpbmdcIj5cclxuICAgICAgICB7eyBsaXRlcmFscy5ub0RhdGEgfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==