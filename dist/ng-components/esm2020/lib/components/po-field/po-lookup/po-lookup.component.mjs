import { Component, ElementRef, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoLookupBaseComponent } from './po-lookup-base.component';
import { PoLookupFilterService } from './services/po-lookup-filter.service';
import { PoLookupModalService } from './services/po-lookup-modal.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/po-lookup-filter.service";
import * as i2 from "./services/po-lookup-modal.service";
import * as i3 from "@angular/common";
import * as i4 from "../po-clean/po-clean.component";
import * as i5 from "../../po-disclaimer/po-disclaimer.component";
import * as i6 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i7 from "../po-field-container/po-field-container.component";
const _c0 = ["inp"];
function PoLookupComponent_div_1_po_clean_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-clean", 10);
    i0.ɵɵlistener("p-change-event", function PoLookupComponent_div_1_po_clean_4_Template_po_clean_p_change_event_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.cleanModel()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-element-ref", ctx_r4.inputEl);
} }
function PoLookupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "input", 4, 5);
    i0.ɵɵlistener("blur", function PoLookupComponent_div_1_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.searchEvent()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵtemplate(4, PoLookupComponent_div_1_po_clean_4_Template, 1, 1, "po-clean", 7);
    i0.ɵɵelementStart(5, "span", 8, 9);
    i0.ɵɵlistener("click", function PoLookupComponent_div_1_Template_span_click_5_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.openLookup()); })("focus", function PoLookupComponent_div_1_Template_span_focus_5_listener() { i0.ɵɵrestoreView(_r9); const _r3 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r3.focus()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.clean && _r3.value ? "po-input-double-icon-right" : "po-input-icon-right")("autocomplete", ctx_r0.autocomplete)("disabled", ctx_r0.disabled)("placeholder", ctx_r0.disabled ? "" : ctx_r0.placeholder)("required", ctx_r0.required);
    i0.ɵɵattribute("aria-label", ctx_r0.label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.clean && !ctx_r0.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-field-icon", !ctx_r0.disabled)("po-field-icon-disabled", ctx_r0.disabled);
} }
function PoLookupComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.placeholder, " ");
} }
function PoLookupComponent_ng_template_3_po_disclaimer_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-disclaimer", 15);
    i0.ɵɵlistener("p-close-action", function PoLookupComponent_ng_template_3_po_disclaimer_4_Template_po_disclaimer_p_close_action_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const disclaimer_r16 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.closeDisclaimer(disclaimer_r16.value)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const disclaimer_r16 = ctx.$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-clickable", disclaimer_r16.value === "" && !ctx_r14.disabled);
    i0.ɵɵproperty("p-label", disclaimer_r16.label)("p-value", disclaimer_r16.value)("p-hide-close", disclaimer_r16.value === "" || ctx_r14.disabled);
} }
function PoLookupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 11, 5);
    i0.ɵɵtemplate(3, PoLookupComponent_ng_template_3_span_3_Template, 2, 1, "span", 12);
    i0.ɵɵtemplate(4, PoLookupComponent_ng_template_3_po_disclaimer_4_Template, 1, 5, "po-disclaimer", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6)(6, "span", 8, 9);
    i0.ɵɵlistener("click", function PoLookupComponent_ng_template_3_Template_span_click_6_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.openLookup()); })("focus", function PoLookupComponent_ng_template_3_Template_span_focus_6_listener() { i0.ɵɵrestoreView(_r20); const _r12 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r12.focus()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("po-lookup-input-auto", ctx_r2.autoHeight)("po-lookup-input-static", !ctx_r2.autoHeight)("po-lookup-input-disabled", ctx_r2.disabled);
    i0.ɵɵproperty("tabindex", ctx_r2.disabled ? -1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.placeholder && !(ctx_r2.disclaimers == null ? null : ctx_r2.disclaimers.length));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.visibleDisclaimers);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("po-field-icon", !ctx_r2.disabled)("po-field-icon-disabled", ctx_r2.disabled);
} }
/* istanbul ignore next */
const providers = [
    PoLookupFilterService,
    PoLookupModalService,
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoLookupComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoLookupComponent),
        multi: true
    },
    {
        provide: NgControl,
        useExisting: forwardRef(() => PoLookupComponent),
        multi: false
    }
];
/**
 * @docsExtends PoLookupBaseComponent
 *
 * @description
 *
 * Quando existe muitos dados o po-lookup por padrão traz apenas 10 itens na tabela e os demais são carregados por demanda através do
 * botão 'Carregar mais resultados'. Para que funcione corretamente, é importante que o serviço siga o
 * [Guia de implementação das APIs TOTVS](https://po-ui.io/guides/api).
 *
 * Importante:
 *
 * - Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrerá um erro de angular.
 * Então será necessário informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
 * ```
 * <po-lookup
 *   [(ngModel)]="pessoa.nome"
 *   [ngModelOptions]="{standalone: true}">
 * </po-lookup>
 * ```
 *
 * @example
 *
 * <example name="po-lookup-basic" title="PO Lookup Basic">
 *  <file name="sample-po-lookup-basic/sample-po-lookup-basic.component.html"> </file>
 *  <file name="sample-po-lookup-basic/sample-po-lookup-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-lookup-labs" title="PO Lookup Labs">
 *  <file name="sample-po-lookup-labs/sample-po-lookup-labs.component.html"> </file>
 *  <file name="sample-po-lookup-labs/sample-po-lookup-labs.component.ts"> </file>
 *  <file name="sample-po-lookup.service.ts"> </file>
 * </example>
 *
 * <example name="po-lookup-hero" title="PO Lookup - Hero">
 *  <file name="sample-po-lookup-hero/sample-po-lookup-hero.component.html"> </file>
 *  <file name="sample-po-lookup-hero/sample-po-lookup-hero.component.ts"> </file>
 *  <file name="sample-po-lookup.service.ts"> </file>
 * </example>
 *
 * <example name="po-lookup-hero-reactive-form" title="PO Lookup - Hero Reactive Form">
 *  <file name="sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"> </file>
 *  <file name="sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"> </file>
 *  <file name="sample-po-lookup.service.ts"> </file>
 * </example>
 *
 * <example name="po-lookup-sw-films" title="PO Lookup - Star Wars films">
 *  <file name="sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"> </file>
 *  <file name="sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"> </file>
 *  <file name="sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"> </file>
 * </example>
 *
 * <example name="po-lookup-multiple" title="PO Lookup - Multiple">
 *  <file name="sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"> </file>
 *  <file name="sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"> </file>
 *  <file name="sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"> </file>
 * </example>
 */
export class PoLookupComponent extends PoLookupBaseComponent {
    constructor(renderer, poLookupFilterService, poLookupModalService, cd, injector) {
        super(poLookupFilterService, injector);
        this.renderer = renderer;
        this.poLookupModalService = poLookupModalService;
        this.cd = cd;
        this.initialized = false;
        this.visibleElement = false;
        this.disclaimers = [];
        this.visibleDisclaimers = [];
        this.isCalculateVisibleItems = true;
    }
    get autocomplete() {
        return this.noAutocomplete ? 'off' : 'on';
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.autoFocus) {
            this.focus();
        }
        this.initialized = true;
    }
    ngDoCheck() {
        const inputWidth = this.inputEl?.nativeElement.offsetWidth;
        // Permite que os disclaimers sejam calculados na primeira vez que o componente torna-se visível,
        // evitando com isso, problemas com Tabs ou Divs que iniciem escondidas.
        if ((inputWidth && !this.visibleElement && this.initialized) || (inputWidth && this.isCalculateVisibleItems)) {
            this.debounceResize();
            this.visibleElement = true;
        }
        this.cd.markForCheck();
    }
    ngOnDestroy() {
        if (this.modalSubscription) {
            this.modalSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        super.ngOnInit();
        this.initializeListeners();
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoLookupComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;
     *
     * focusLookup() {
     *   this.lookup.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.inputEl.nativeElement.focus();
        }
    }
    openLookup() {
        if (this.isAllowedOpenModal()) {
            const { advancedFilters, service, columns, filterParams, literals, infiniteScroll, multiple, fieldLabel, fieldValue, changeVisibleColumns, columnRestoreManager } = this;
            const selectedItems = this.checkSelectedItems();
            this.poLookupModalService.openModal({
                advancedFilters,
                service,
                columns,
                filterParams,
                title: this.label,
                literals,
                infiniteScroll,
                multiple,
                selectedItems,
                fieldLabel,
                fieldValue,
                changeVisibleColumns,
                columnRestoreManager
            });
            if (!this.modalSubscription) {
                this.modalSubscription = this.poLookupModalService.selectValueEvent.subscribe(selectedOptions => {
                    if (selectedOptions.length > 1 || this.disclaimers.length) {
                        this.setDisclaimers(selectedOptions);
                        this.updateVisibleItems();
                    }
                    this.selectModel(selectedOptions);
                });
            }
        }
    }
    checkSelectedItems() {
        if (this.multiple) {
            if (!this.disclaimers.length && this.valueToModel?.length) {
                return [{ value: this.valueToModel[0], label: this.oldValue, ...this.selectedOptions[0] }];
            }
            return this.disclaimers;
        }
        else {
            return this.valueToModel;
        }
    }
    setDisclaimers(selectedOptions) {
        this.disclaimers = selectedOptions.map(selectedOption => ({
            value: selectedOption[this.fieldValue],
            label: selectedOption[this.fieldLabel],
            ...selectedOption
        }));
        this.visibleDisclaimers = [...this.disclaimers];
        this.cd.markForCheck();
    }
    setViewValue(value, object) {
        if (this.inputEl && this.fieldFormat) {
            this.setInputValueWipoieldFormat(object);
        }
        else if (this.inputEl) {
            this.inputEl.nativeElement.value = this.valueToModel || this.valueToModel === 0 ? value : '';
        }
        this.cd.markForCheck();
    }
    getViewValue() {
        return this.inputEl.nativeElement.value;
    }
    searchEvent() {
        this.onTouched?.();
        const value = this.getViewValue();
        if (this.oldValue?.toString() !== value) {
            this.searchById(value);
        }
    }
    closeDisclaimer(value) {
        this.disclaimers = this.disclaimers.filter(disclaimer => disclaimer.value !== value);
        this.valueToModel = this.valueToModel.filter(model => model !== value);
        this.updateVisibleItems();
        this.callOnChange(this.valueToModel.length ? this.valueToModel : undefined);
    }
    updateVisibleItems() {
        if (this.disclaimers && this.disclaimers.length > 0) {
            this.visibleDisclaimers = [].concat(this.disclaimers);
        }
        this.debounceResize();
        if (!this.inputEl.nativeElement.offsetWidth) {
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
    }
    getInputWidth() {
        return this.inputEl.nativeElement.offsetWidth - 40;
    }
    getDisclaimersWidth() {
        const disclaimers = this.inputEl.nativeElement.querySelectorAll('po-disclaimer');
        return Array.from(disclaimers).map(disclaimer => disclaimer['offsetWidth']);
    }
    calculateVisibleItems() {
        const disclaimersWidth = this.getDisclaimersWidth();
        const inputWidth = this.getInputWidth();
        const extraDisclaimerSize = 38;
        const disclaimersVisible = disclaimersWidth[0];
        const newDisclaimers = [];
        const disclaimers = this.disclaimers;
        if (inputWidth > 0) {
            let sum = 0;
            let i = 0;
            for (i = 0; i < disclaimers.length; i++) {
                sum += disclaimersWidth[i];
                newDisclaimers.push(disclaimers[i]);
                if (sum > inputWidth) {
                    sum -= disclaimersWidth[i];
                    this.isCalculateVisibleItems = false;
                    break;
                }
            }
            if (disclaimersVisible || !disclaimers.length) {
                if (i === disclaimers.length) {
                    this.isCalculateVisibleItems = false;
                    return;
                }
                if (sum + extraDisclaimerSize > inputWidth) {
                    newDisclaimers.splice(-2, 2);
                    const label = '+' + (disclaimers.length + 1 - i).toString();
                    newDisclaimers.push({ value: '', label: label });
                }
                else {
                    newDisclaimers.splice(-1, 1);
                    const label = '+' + (disclaimers.length - i).toString();
                    newDisclaimers.push({ value: '', label: label });
                }
            }
        }
        this.visibleDisclaimers = [...newDisclaimers];
    }
    isAllowedOpenModal() {
        if (!this.service) {
            console.warn('No service informed');
        }
        return !!(this.service && !this.disabled);
    }
    formatFields(objectSelected, properties) {
        let formatedField;
        if (Array.isArray(properties)) {
            for (const property of properties) {
                if (objectSelected && objectSelected[property]) {
                    if (!formatedField) {
                        formatedField = objectSelected[property];
                    }
                    else {
                        formatedField = formatedField + ' - ' + objectSelected[property];
                    }
                }
            }
        }
        if (!formatedField) {
            formatedField = objectSelected[this.fieldValue];
        }
        return formatedField;
    }
    setInputValueWipoieldFormat(objectSelected) {
        const isEmpty = Object.keys(objectSelected).length === 0;
        let fieldFormated;
        if (Array.isArray(this.fieldFormat)) {
            fieldFormated = this.formatFields(objectSelected, this.fieldFormat);
        }
        else {
            fieldFormated = this.fieldFormat(objectSelected);
        }
        this.oldValue = isEmpty ? '' : fieldFormated;
        this.inputEl.nativeElement.value = isEmpty ? '' : fieldFormated;
    }
    initializeListeners() {
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            this.updateVisibleItems();
        });
    }
}
PoLookupComponent.ɵfac = function PoLookupComponent_Factory(t) { return new (t || PoLookupComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.PoLookupFilterService), i0.ɵɵdirectiveInject(i2.PoLookupModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Injector)); };
PoLookupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoLookupComponent, selectors: [["po-lookup"]], viewQuery: function PoLookupComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
    } }, features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "p-label", "p-help", "p-optional"], ["class", "po-field-container-content", 4, "ngIf", "ngIfElse"], ["disclaimersTemplate", ""], [1, "po-field-container-content"], ["type", "text", 1, "po-input", 3, "ngClass", "autocomplete", "disabled", "placeholder", "required", "blur"], ["inp", ""], [1, "po-field-icon-container-right"], ["class", "po-icon-input", 3, "p-element-ref", "p-change-event", 4, "ngIf"], ["tabindex", "-1", 1, "po-icon", "po-field-icon", "po-icon-search", "po-icon-input", 3, "click", "focus"], ["iconLookup", ""], [1, "po-icon-input", 3, "p-element-ref", "p-change-event"], [1, "po-input", "po-input-icon-right", "po-lookup-input", "po-icon-input", 3, "tabindex"], ["class", "po-lookup-input-placeholder", 4, "ngIf"], ["class", "po-lookup-input-disclaimer", 3, "p-label", "p-value", "p-hide-close", "po-clickable", "p-close-action", 4, "ngFor", "ngForOf"], [1, "po-lookup-input-placeholder"], [1, "po-lookup-input-disclaimer", 3, "p-label", "p-value", "p-hide-close", "p-close-action"]], template: function PoLookupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0);
        i0.ɵɵtemplate(1, PoLookupComponent_div_1_Template, 7, 11, "div", 1);
        i0.ɵɵelement(2, "po-field-container-bottom");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, PoLookupComponent_ng_template_3_Template, 8, 13, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.disclaimers.length)("ngIfElse", _r1);
    } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.PoCleanComponent, i5.PoDisclaimerComponent, i6.PoFieldContainerBottomComponent, i7.PoFieldContainerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLookupComponent, [{
        type: Component,
        args: [{ selector: 'po-lookup', changeDetection: ChangeDetectionStrategy.OnPush, providers: providers, template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-field-container-content\" *ngIf=\"!disclaimers.length; else disclaimersTemplate\">\r\n    <input\r\n      #inp\r\n      class=\"po-input\"\r\n      type=\"text\"\r\n      [attr.aria-label]=\"label\"\r\n      [ngClass]=\"clean && inp.value ? 'po-input-double-icon-right' : 'po-input-icon-right'\"\r\n      [autocomplete]=\"autocomplete\"\r\n      [disabled]=\"disabled\"\r\n      [placeholder]=\"disabled ? '' : placeholder\"\r\n      [required]=\"required\"\r\n      (blur)=\"searchEvent()\"\r\n    />\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <po-clean\r\n        class=\"po-icon-input\"\r\n        *ngIf=\"clean && !disabled\"\r\n        [p-element-ref]=\"inputEl\"\r\n        (p-change-event)=\"cleanModel()\"\r\n      >\r\n      </po-clean>\r\n\r\n      <span\r\n        #iconLookup\r\n        class=\"po-icon po-field-icon po-icon-search po-icon-input\"\r\n        tabindex=\"-1\"\r\n        [class.po-field-icon]=\"!disabled\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n        (click)=\"openLookup()\"\r\n        (focus)=\"inp.focus()\"\r\n      >\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n\r\n<ng-template #disclaimersTemplate>\r\n  <div class=\"po-field-container-content\">\r\n    <div\r\n      #inp\r\n      [tabindex]=\"disabled ? -1 : 0\"\r\n      class=\"po-input po-input-icon-right po-lookup-input po-icon-input\"\r\n      [class.po-lookup-input-auto]=\"autoHeight\"\r\n      [class.po-lookup-input-static]=\"!autoHeight\"\r\n      [class.po-lookup-input-disabled]=\"disabled\"\r\n    >\r\n      <span *ngIf=\"placeholder && !disclaimers?.length\" class=\"po-lookup-input-placeholder\">\r\n        {{ placeholder }}\r\n      </span>\r\n\r\n      <po-disclaimer\r\n        *ngFor=\"let disclaimer of visibleDisclaimers\"\r\n        class=\"po-lookup-input-disclaimer\"\r\n        [p-label]=\"disclaimer.label\"\r\n        [p-value]=\"disclaimer.value\"\r\n        [p-hide-close]=\"disclaimer.value === '' || disabled\"\r\n        [class.po-clickable]=\"disclaimer.value === '' && !disabled\"\r\n        (p-close-action)=\"closeDisclaimer(disclaimer.value)\"\r\n      >\r\n      </po-disclaimer>\r\n    </div>\r\n\r\n    <div class=\"po-field-icon-container-right\">\r\n      <span\r\n        #iconLookup\r\n        class=\"po-icon po-field-icon po-icon-search po-icon-input\"\r\n        tabindex=\"-1\"\r\n        [class.po-field-icon]=\"!disabled\"\r\n        [class.po-field-icon-disabled]=\"disabled\"\r\n        (click)=\"openLookup()\"\r\n        (focus)=\"inp.focus()\"\r\n      >\r\n      </span>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.PoLookupFilterService }, { type: i2.PoLookupModalService }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }]; }, { inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9va3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1sb29rdXAvcG8tbG9va3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1sb29rdXAvcG8tbG9va3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFLVixTQUFTLEVBQ1QsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7OztJQ0hwRSxvQ0FLQztJQURDLDhMQUFrQixlQUFBLG1CQUFZLENBQUEsSUFBQztJQUVqQyxpQkFBVzs7O0lBSFQsOENBQXlCOzs7O0lBbEIvQiw4QkFBOEYsa0JBQUE7SUFXMUYsMkpBQVEsZUFBQSxvQkFBYSxDQUFBLElBQUM7SUFWeEIsaUJBV0U7SUFFRiw4QkFBMkM7SUFDekMsa0ZBTVc7SUFFWCxrQ0FRQztJQUZDLDZKQUFTLGVBQUEsb0JBQVksQ0FBQSxJQUFDLDJJQUNiLGVBQUEsV0FBVyxDQUFBLElBREU7SUFHeEIsaUJBQU8sRUFBQSxFQUFBOzs7O0lBMUJQLGVBQXFGO0lBQXJGLDBHQUFxRixxQ0FBQSw2QkFBQSwwREFBQSw2QkFBQTtJQURyRiwwQ0FB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QUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUNsRSxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztrRkE5U1UsaUJBQWlCO29FQUFqQixpQkFBaUI7K0JBQ0YsVUFBVTs7OzswQ0FIcEMsU0FBUztRQ3pHWCw2Q0FBMkY7UUFDekYsbUVBa0NNO1FBQ04sNENBQXVEO1FBQ3pELGlCQUFxQjtRQUVyQixvSEF1Q2M7OztRQTlFTSxtQ0FBaUIsb0JBQUEsNkNBQUE7UUFDTSxlQUEyQjtRQUEzQiw4Q0FBMkIsaUJBQUE7O3VGRDBHekQsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0UsV0FBVyxtQkFFSix1QkFBdUIsQ0FBQyxNQUFNLGFBQy9DLFNBQVM7MExBRzhDLE9BQU87a0JBQTdELFNBQVM7bUJBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERvQ2hlY2ssXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbmplY3RvcixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQb0xvb2t1cEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLWxvb2t1cC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTG9va3VwRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tbG9va3VwLWZpbHRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Mb29rdXBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvLWxvb2t1cC1tb2RhbC5zZXJ2aWNlJztcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmNvbnN0IHByb3ZpZGVycyA9IFtcclxuICBQb0xvb2t1cEZpbHRlclNlcnZpY2UsXHJcbiAgUG9Mb29rdXBNb2RhbFNlcnZpY2UsXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvTG9va3VwQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb0xvb2t1cENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTmdDb250cm9sLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUG9Mb29rdXBDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IGZhbHNlXHJcbiAgfVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0xvb2t1cEJhc2VDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFF1YW5kbyBleGlzdGUgbXVpdG9zIGRhZG9zIG8gcG8tbG9va3VwIHBvciBwYWRyw6NvIHRyYXogYXBlbmFzIDEwIGl0ZW5zIG5hIHRhYmVsYSBlIG9zIGRlbWFpcyBzw6NvIGNhcnJlZ2Fkb3MgcG9yIGRlbWFuZGEgYXRyYXbDqXMgZG9cclxuICogYm90w6NvICdDYXJyZWdhciBtYWlzIHJlc3VsdGFkb3MnLiBQYXJhIHF1ZSBmdW5jaW9uZSBjb3JyZXRhbWVudGUsIMOpIGltcG9ydGFudGUgcXVlIG8gc2VydmnDp28gc2lnYSBvXHJcbiAqIFtHdWlhIGRlIGltcGxlbWVudGHDp8OjbyBkYXMgQVBJcyBUT1RWU10oaHR0cHM6Ly9wby11aS5pby9ndWlkZXMvYXBpKS5cclxuICpcclxuICogSW1wb3J0YW50ZTpcclxuICpcclxuICogLSBDYXNvIG8gcG8tbG9va3VwIGNvbnRlbmhhIG8gWyhuZ01vZGVsKV0gc2VtIG8gYXRyaWJ1dG8gbmFtZSwgb2NvcnJlcsOhIHVtIGVycm8gZGUgYW5ndWxhci5cclxuICogRW50w6NvIHNlcsOhIG5lY2Vzc8OhcmlvIGluZm9ybWFyIG8gYXRyaWJ1dG8gbmFtZSBvdSBvIGF0cmlidXRvIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIi5cclxuICogYGBgXHJcbiAqIDxwby1sb29rdXBcclxuICogICBbKG5nTW9kZWwpXT1cInBlc3NvYS5ub21lXCJcclxuICogICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XHJcbiAqIDwvcG8tbG9va3VwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvb2t1cC1iYXNpY1wiIHRpdGxlPVwiUE8gTG9va3VwIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvb2t1cC1iYXNpYy9zYW1wbGUtcG8tbG9va3VwLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9va3VwLWJhc2ljL3NhbXBsZS1wby1sb29rdXAtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbG9va3VwLWxhYnNcIiB0aXRsZT1cIlBPIExvb2t1cCBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvb2t1cC1sYWJzL3NhbXBsZS1wby1sb29rdXAtbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvb2t1cC1sYWJzL3NhbXBsZS1wby1sb29rdXAtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb29rdXAuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvb2t1cC1oZXJvXCIgdGl0bGU9XCJQTyBMb29rdXAgLSBIZXJvXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvb2t1cC1oZXJvL3NhbXBsZS1wby1sb29rdXAtaGVyby5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvb2t1cC1oZXJvL3NhbXBsZS1wby1sb29rdXAtaGVyby5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb29rdXAuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvb2t1cC1oZXJvLXJlYWN0aXZlLWZvcm1cIiB0aXRsZT1cIlBPIExvb2t1cCAtIEhlcm8gUmVhY3RpdmUgRm9ybVwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb29rdXAtaGVyby1yZWFjdGl2ZS1mb3JtL3NhbXBsZS1wby1sb29rdXAtaGVyby1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9va3VwLWhlcm8tcmVhY3RpdmUtZm9ybS9zYW1wbGUtcG8tbG9va3VwLWhlcm8tcmVhY3RpdmUtZm9ybS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb29rdXAuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvb2t1cC1zdy1maWxtc1wiIHRpdGxlPVwiUE8gTG9va3VwIC0gU3RhciBXYXJzIGZpbG1zXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWxvb2t1cC1zdy1maWxtcy9zYW1wbGUtcG8tbG9va3VwLXN3LWZpbG1zLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9va3VwLXN3LWZpbG1zL3NhbXBsZS1wby1sb29rdXAtc3ctZmlsbXMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9va3VwLXN3LWZpbG1zL3NhbXBsZS1wby1sb29rdXAtc3ctZmlsbXMuc2VydmljZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWxvb2t1cC1tdWx0aXBsZVwiIHRpdGxlPVwiUE8gTG9va3VwIC0gTXVsdGlwbGVcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbG9va3VwLW11bHRpcGxlL3NhbXBsZS1wby1sb29rdXAtbXVsdGlwbGUuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb29rdXAtbXVsdGlwbGUvc2FtcGxlLXBvLWxvb2t1cC1tdWx0aXBsZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1sb29rdXAtbXVsdGlwbGUvc2FtcGxlLXBvLWxvb2t1cC1tdWx0aXBsZS5zZXJ2aWNlLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1sb29rdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1sb29rdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyc1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Mb29rdXBDb21wb25lbnQgZXh0ZW5kcyBQb0xvb2t1cEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRG9DaGVjayB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgdGltZW91dFJlc2l6ZTtcclxuICB2aXNpYmxlRWxlbWVudCA9IGZhbHNlO1xyXG5cclxuICBkaXNjbGFpbWVycyA9IFtdO1xyXG4gIHZpc2libGVEaXNjbGFpbWVycyA9IFtdO1xyXG5cclxuICBwcml2YXRlIG1vZGFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBpc0NhbGN1bGF0ZVZpc2libGVJdGVtczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGdldCBhdXRvY29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub0F1dG9jb21wbGV0ZSA/ICdvZmYnIDogJ29uJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcG9Mb29rdXBGaWx0ZXJTZXJ2aWNlOiBQb0xvb2t1cEZpbHRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvTG9va3VwTW9kYWxTZXJ2aWNlOiBQb0xvb2t1cE1vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwb0xvb2t1cEZpbHRlclNlcnZpY2UsIGluamVjdG9yKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5pbnB1dEVsPy5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgLy8gUGVybWl0ZSBxdWUgb3MgZGlzY2xhaW1lcnMgc2VqYW0gY2FsY3VsYWRvcyBuYSBwcmltZWlyYSB2ZXogcXVlIG8gY29tcG9uZW50ZSB0b3JuYS1zZSB2aXPDrXZlbCxcclxuICAgIC8vIGV2aXRhbmRvIGNvbSBpc3NvLCBwcm9ibGVtYXMgY29tIFRhYnMgb3UgRGl2cyBxdWUgaW5pY2llbSBlc2NvbmRpZGFzLlxyXG4gICAgaWYgKChpbnB1dFdpZHRoICYmICF0aGlzLnZpc2libGVFbGVtZW50ICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHx8IChpbnB1dFdpZHRoICYmIHRoaXMuaXNDYWxjdWxhdGVWaXNpYmxlSXRlbXMpKSB7XHJcbiAgICAgIHRoaXMuZGVib3VuY2VSZXNpemUoKTtcclxuICAgICAgdGhpcy52aXNpYmxlRWxlbWVudCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm1vZGFsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBhdHJpYnVpIGZvY28gYW8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gdGVyIGEgaW5zdMOibmNpYSBkbyBjb21wb25lbnRlIG5vIERPTSwgcG9kZW5kbyBzZXIgdXRpbGl6YWRvIG8gVmlld0NoaWxkIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaW1wb3J0IHsgUG9Mb29rdXBDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9Mb29rdXBDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGxvb2t1cDogUG9Mb29rdXBDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c0xvb2t1cCgpIHtcclxuICAgKiAgIHRoaXMubG9va3VwLmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuTG9va3VwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNBbGxvd2VkT3Blbk1vZGFsKCkpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGFkdmFuY2VkRmlsdGVycyxcclxuICAgICAgICBzZXJ2aWNlLFxyXG4gICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgZmlsdGVyUGFyYW1zLFxyXG4gICAgICAgIGxpdGVyYWxzLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsLFxyXG4gICAgICAgIG11bHRpcGxlLFxyXG4gICAgICAgIGZpZWxkTGFiZWwsXHJcbiAgICAgICAgZmllbGRWYWx1ZSxcclxuICAgICAgICBjaGFuZ2VWaXNpYmxlQ29sdW1ucyxcclxuICAgICAgICBjb2x1bW5SZXN0b3JlTWFuYWdlclxyXG4gICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLmNoZWNrU2VsZWN0ZWRJdGVtcygpO1xyXG5cclxuICAgICAgdGhpcy5wb0xvb2t1cE1vZGFsU2VydmljZS5vcGVuTW9kYWwoe1xyXG4gICAgICAgIGFkdmFuY2VkRmlsdGVycyxcclxuICAgICAgICBzZXJ2aWNlLFxyXG4gICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgZmlsdGVyUGFyYW1zLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLmxhYmVsLFxyXG4gICAgICAgIGxpdGVyYWxzLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsLFxyXG4gICAgICAgIG11bHRpcGxlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXMsXHJcbiAgICAgICAgZmllbGRMYWJlbCxcclxuICAgICAgICBmaWVsZFZhbHVlLFxyXG4gICAgICAgIGNoYW5nZVZpc2libGVDb2x1bW5zLFxyXG4gICAgICAgIGNvbHVtblJlc3RvcmVNYW5hZ2VyXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm1vZGFsU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN1YnNjcmlwdGlvbiA9IHRoaXMucG9Mb29rdXBNb2RhbFNlcnZpY2Uuc2VsZWN0VmFsdWVFdmVudC5zdWJzY3JpYmUoc2VsZWN0ZWRPcHRpb25zID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMSB8fCB0aGlzLmRpc2NsYWltZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERpc2NsYWltZXJzKHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNb2RlbChzZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1NlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICBpZiAoIXRoaXMuZGlzY2xhaW1lcnMubGVuZ3RoICYmIHRoaXMudmFsdWVUb01vZGVsPy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gW3sgdmFsdWU6IHRoaXMudmFsdWVUb01vZGVsWzBdLCBsYWJlbDogdGhpcy5vbGRWYWx1ZSwgLi4udGhpcy5zZWxlY3RlZE9wdGlvbnNbMF0gfV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmRpc2NsYWltZXJzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVUb01vZGVsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGlzY2xhaW1lcnMoc2VsZWN0ZWRPcHRpb25zOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLmRpc2NsYWltZXJzID0gc2VsZWN0ZWRPcHRpb25zLm1hcChzZWxlY3RlZE9wdGlvbiA9PiAoe1xyXG4gICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb25bdGhpcy5maWVsZFZhbHVlXSxcclxuICAgICAgbGFiZWw6IHNlbGVjdGVkT3B0aW9uW3RoaXMuZmllbGRMYWJlbF0sXHJcbiAgICAgIC4uLnNlbGVjdGVkT3B0aW9uXHJcbiAgICB9KSk7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlRGlzY2xhaW1lcnMgPSBbLi4udGhpcy5kaXNjbGFpbWVyc107XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Vmlld1ZhbHVlKHZhbHVlOiBhbnksIG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsICYmIHRoaXMuZmllbGRGb3JtYXQpIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlV2lwb2llbGRGb3JtYXQob2JqZWN0KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dEVsKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy52YWx1ZVRvTW9kZWwgfHwgdGhpcy52YWx1ZVRvTW9kZWwgPT09IDAgPyB2YWx1ZSA6ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGdldFZpZXdWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoRXZlbnQoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZD8uKCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Vmlld1ZhbHVlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub2xkVmFsdWU/LnRvU3RyaW5nKCkgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQnlJZCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURpc2NsYWltZXIodmFsdWUpIHtcclxuICAgIHRoaXMuZGlzY2xhaW1lcnMgPSB0aGlzLmRpc2NsYWltZXJzLmZpbHRlcihkaXNjbGFpbWVyID0+IGRpc2NsYWltZXIudmFsdWUgIT09IHZhbHVlKTtcclxuICAgIHRoaXMudmFsdWVUb01vZGVsID0gdGhpcy52YWx1ZVRvTW9kZWwuZmlsdGVyKG1vZGVsID0+IG1vZGVsICE9PSB2YWx1ZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoKTtcclxuICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHRoaXMudmFsdWVUb01vZGVsLmxlbmd0aCA/IHRoaXMudmFsdWVUb01vZGVsIDogdW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpc2libGVJdGVtcygpIHtcclxuICAgIGlmICh0aGlzLmRpc2NsYWltZXJzICYmIHRoaXMuZGlzY2xhaW1lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnZpc2libGVEaXNjbGFpbWVycyA9IFtdLmNvbmNhdCh0aGlzLmRpc2NsYWltZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlYm91bmNlUmVzaXplKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICB0aGlzLmlzQ2FsY3VsYXRlVmlzaWJsZUl0ZW1zID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlYm91bmNlUmVzaXplKCkge1xyXG4gICAgaWYgKCF0aGlzLmF1dG9IZWlnaHQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFJlc2l6ZSk7XHJcbiAgICAgIHRoaXMudGltZW91dFJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVmlzaWJsZUl0ZW1zKCk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gNDA7XHJcbiAgfVxyXG5cclxuICBnZXREaXNjbGFpbWVyc1dpZHRoKCkge1xyXG4gICAgY29uc3QgZGlzY2xhaW1lcnMgPSB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwby1kaXNjbGFpbWVyJyk7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkaXNjbGFpbWVycykubWFwKGRpc2NsYWltZXIgPT4gZGlzY2xhaW1lclsnb2Zmc2V0V2lkdGgnXSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVWaXNpYmxlSXRlbXMoKSB7XHJcbiAgICBjb25zdCBkaXNjbGFpbWVyc1dpZHRoID0gdGhpcy5nZXREaXNjbGFpbWVyc1dpZHRoKCk7XHJcbiAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5nZXRJbnB1dFdpZHRoKCk7XHJcbiAgICBjb25zdCBleHRyYURpc2NsYWltZXJTaXplID0gMzg7XHJcbiAgICBjb25zdCBkaXNjbGFpbWVyc1Zpc2libGUgPSBkaXNjbGFpbWVyc1dpZHRoWzBdO1xyXG5cclxuICAgIGNvbnN0IG5ld0Rpc2NsYWltZXJzID0gW107XHJcbiAgICBjb25zdCBkaXNjbGFpbWVycyA9IHRoaXMuZGlzY2xhaW1lcnM7XHJcblxyXG4gICAgaWYgKGlucHV0V2lkdGggPiAwKSB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkaXNjbGFpbWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN1bSArPSBkaXNjbGFpbWVyc1dpZHRoW2ldO1xyXG4gICAgICAgIG5ld0Rpc2NsYWltZXJzLnB1c2goZGlzY2xhaW1lcnNbaV0pO1xyXG5cclxuICAgICAgICBpZiAoc3VtID4gaW5wdXRXaWR0aCkge1xyXG4gICAgICAgICAgc3VtIC09IGRpc2NsYWltZXJzV2lkdGhbaV07XHJcbiAgICAgICAgICB0aGlzLmlzQ2FsY3VsYXRlVmlzaWJsZUl0ZW1zID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkaXNjbGFpbWVyc1Zpc2libGUgfHwgIWRpc2NsYWltZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChpID09PSBkaXNjbGFpbWVycy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuaXNDYWxjdWxhdGVWaXNpYmxlSXRlbXMgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdW0gKyBleHRyYURpc2NsYWltZXJTaXplID4gaW5wdXRXaWR0aCkge1xyXG4gICAgICAgICAgbmV3RGlzY2xhaW1lcnMuc3BsaWNlKC0yLCAyKTtcclxuICAgICAgICAgIGNvbnN0IGxhYmVsID0gJysnICsgKGRpc2NsYWltZXJzLmxlbmd0aCArIDEgLSBpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgbmV3RGlzY2xhaW1lcnMucHVzaCh7IHZhbHVlOiAnJywgbGFiZWw6IGxhYmVsIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdEaXNjbGFpbWVycy5zcGxpY2UoLTEsIDEpO1xyXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSAnKycgKyAoZGlzY2xhaW1lcnMubGVuZ3RoIC0gaSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgIG5ld0Rpc2NsYWltZXJzLnB1c2goeyB2YWx1ZTogJycsIGxhYmVsOiBsYWJlbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpc2libGVEaXNjbGFpbWVycyA9IFsuLi5uZXdEaXNjbGFpbWVyc107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWxsb3dlZE9wZW5Nb2RhbCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignTm8gc2VydmljZSBpbmZvcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhISh0aGlzLnNlcnZpY2UgJiYgIXRoaXMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRGaWVsZHMob2JqZWN0U2VsZWN0ZWQsIHByb3BlcnRpZXMpIHtcclxuICAgIGxldCBmb3JtYXRlZEZpZWxkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcykpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdFNlbGVjdGVkICYmIG9iamVjdFNlbGVjdGVkW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgaWYgKCFmb3JtYXRlZEZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdGVkRmllbGQgPSBvYmplY3RTZWxlY3RlZFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtYXRlZEZpZWxkID0gZm9ybWF0ZWRGaWVsZCArICcgLSAnICsgb2JqZWN0U2VsZWN0ZWRbcHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZm9ybWF0ZWRGaWVsZCkge1xyXG4gICAgICBmb3JtYXRlZEZpZWxkID0gb2JqZWN0U2VsZWN0ZWRbdGhpcy5maWVsZFZhbHVlXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXRlZEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnB1dFZhbHVlV2lwb2llbGRGb3JtYXQob2JqZWN0U2VsZWN0ZWQ6IGFueSkge1xyXG4gICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC5rZXlzKG9iamVjdFNlbGVjdGVkKS5sZW5ndGggPT09IDA7XHJcbiAgICBsZXQgZmllbGRGb3JtYXRlZDtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkRm9ybWF0KSkge1xyXG4gICAgICBmaWVsZEZvcm1hdGVkID0gdGhpcy5mb3JtYXRGaWVsZHMob2JqZWN0U2VsZWN0ZWQsIHRoaXMuZmllbGRGb3JtYXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmllbGRGb3JtYXRlZCA9IHRoaXMuZmllbGRGb3JtYXQob2JqZWN0U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub2xkVmFsdWUgPSBpc0VtcHR5ID8gJycgOiBmaWVsZEZvcm1hdGVkO1xyXG4gICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBpc0VtcHR5ID8gJycgOiBmaWVsZEZvcm1hdGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1oZWxwXT1cImhlbHBcIiBbcC1vcHRpb25hbF09XCIhcmVxdWlyZWQgJiYgb3B0aW9uYWxcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIiAqbmdJZj1cIiFkaXNjbGFpbWVycy5sZW5ndGg7IGVsc2UgZGlzY2xhaW1lcnNUZW1wbGF0ZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgICNpbnBcclxuICAgICAgY2xhc3M9XCJwby1pbnB1dFwiXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cImNsZWFuICYmIGlucC52YWx1ZSA/ICdwby1pbnB1dC1kb3VibGUtaWNvbi1yaWdodCcgOiAncG8taW5wdXQtaWNvbi1yaWdodCdcIlxyXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJkaXNhYmxlZCA/ICcnIDogcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICAoYmx1cik9XCJzZWFyY2hFdmVudCgpXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLXJpZ2h0XCI+XHJcbiAgICAgIDxwby1jbGVhblxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgKm5nSWY9XCJjbGVhbiAmJiAhZGlzYWJsZWRcIlxyXG4gICAgICAgIFtwLWVsZW1lbnQtcmVmXT1cImlucHV0RWxcIlxyXG4gICAgICAgIChwLWNoYW5nZS1ldmVudCk9XCJjbGVhbk1vZGVsKClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tY2xlYW4+XHJcblxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICNpY29uTG9va3VwXHJcbiAgICAgICAgY2xhc3M9XCJwby1pY29uIHBvLWZpZWxkLWljb24gcG8taWNvbi1zZWFyY2ggcG8taWNvbi1pbnB1dFwiXHJcbiAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgW2NsYXNzLnBvLWZpZWxkLWljb25dPVwiIWRpc2FibGVkXCJcclxuICAgICAgICBbY2xhc3MucG8tZmllbGQtaWNvbi1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9wZW5Mb29rdXAoKVwiXHJcbiAgICAgICAgKGZvY3VzKT1cImlucC5mb2N1cygpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8cG8tZmllbGQtY29udGFpbmVyLWJvdHRvbT48L3BvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+XHJcbjwvcG8tZmllbGQtY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkaXNjbGFpbWVyc1RlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgPGRpdlxyXG4gICAgICAjaW5wXHJcbiAgICAgIFt0YWJpbmRleF09XCJkaXNhYmxlZCA/IC0xIDogMFwiXHJcbiAgICAgIGNsYXNzPVwicG8taW5wdXQgcG8taW5wdXQtaWNvbi1yaWdodCBwby1sb29rdXAtaW5wdXQgcG8taWNvbi1pbnB1dFwiXHJcbiAgICAgIFtjbGFzcy5wby1sb29rdXAtaW5wdXQtYXV0b109XCJhdXRvSGVpZ2h0XCJcclxuICAgICAgW2NsYXNzLnBvLWxvb2t1cC1pbnB1dC1zdGF0aWNdPVwiIWF1dG9IZWlnaHRcIlxyXG4gICAgICBbY2xhc3MucG8tbG9va3VwLWlucHV0LWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJwbGFjZWhvbGRlciAmJiAhZGlzY2xhaW1lcnM/Lmxlbmd0aFwiIGNsYXNzPVwicG8tbG9va3VwLWlucHV0LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPHBvLWRpc2NsYWltZXJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgZGlzY2xhaW1lciBvZiB2aXNpYmxlRGlzY2xhaW1lcnNcIlxyXG4gICAgICAgIGNsYXNzPVwicG8tbG9va3VwLWlucHV0LWRpc2NsYWltZXJcIlxyXG4gICAgICAgIFtwLWxhYmVsXT1cImRpc2NsYWltZXIubGFiZWxcIlxyXG4gICAgICAgIFtwLXZhbHVlXT1cImRpc2NsYWltZXIudmFsdWVcIlxyXG4gICAgICAgIFtwLWhpZGUtY2xvc2VdPVwiZGlzY2xhaW1lci52YWx1ZSA9PT0gJycgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAgIFtjbGFzcy5wby1jbGlja2FibGVdPVwiZGlzY2xhaW1lci52YWx1ZSA9PT0gJycgJiYgIWRpc2FibGVkXCJcclxuICAgICAgICAocC1jbG9zZS1hY3Rpb24pPVwiY2xvc2VEaXNjbGFpbWVyKGRpc2NsYWltZXIudmFsdWUpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWRpc2NsYWltZXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtaWNvbi1jb250YWluZXItcmlnaHRcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAjaWNvbkxvb2t1cFxyXG4gICAgICAgIGNsYXNzPVwicG8taWNvbiBwby1maWVsZC1pY29uIHBvLWljb24tc2VhcmNoIHBvLWljb24taW5wdXRcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIFtjbGFzcy5wby1maWVsZC1pY29uXT1cIiFkaXNhYmxlZFwiXHJcbiAgICAgICAgW2NsYXNzLnBvLWZpZWxkLWljb24tZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIChjbGljayk9XCJvcGVuTG9va3VwKClcIlxyXG4gICAgICAgIChmb2N1cyk9XCJpbnAuZm9jdXMoKVwiXHJcbiAgICAgID5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==