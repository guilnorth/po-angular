import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["container"];
const _c1 = ["ulElement"];
const _c2 = ["searchElement"];
function PoMultiselectDropdownComponent_po_multiselect_search_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-multiselect-search", 8, 9);
    i0.ɵɵlistener("p-change", function PoMultiselectDropdownComponent_po_multiselect_search_2_Template_po_multiselect_search_p_change_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.callChangeSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-literals", ctx_r1.literals)("p-field-value", ctx_r1.fieldValue)("p-placeholder", ctx_r1.placeholderSearch);
} }
function PoMultiselectDropdownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.literals.noData, "");
} }
function PoMultiselectDropdownComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "po-loading");
    i0.ɵɵelementEnd();
} }
function PoMultiselectDropdownComponent_ng_container_7_po_multiselect_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-multiselect-item", 14);
    i0.ɵɵlistener("p-change", function PoMultiselectDropdownComponent_ng_container_7_po_multiselect_item_1_Template_po_multiselect_item_p_change_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onClickSelectAll()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-label", ctx_r9.literals == null ? null : ctx_r9.literals.selectAll)("p-selected", ctx_r9.getStateSelectAll());
} }
function PoMultiselectDropdownComponent_ng_container_7_po_multiselect_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-multiselect-item", 14);
    i0.ɵɵlistener("p-change", function PoMultiselectDropdownComponent_ng_container_7_po_multiselect_item_2_Template_po_multiselect_item_p_change_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r15); const option_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.clickItem($event, option_r13)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-label", option_r13[ctx_r10.fieldLabel])("p-selected", ctx_r10.isSelectedItem(option_r13));
} }
function PoMultiselectDropdownComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PoMultiselectDropdownComponent_ng_container_7_po_multiselect_item_1_Template, 1, 2, "po-multiselect-item", 12);
    i0.ɵɵtemplate(2, PoMultiselectDropdownComponent_ng_container_7_po_multiselect_item_2_Template, 1, 2, "po-multiselect-item", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r5.searchElement == null ? null : ctx_r5.searchElement.inputValue) && ctx_r5.visibleOptions.length && !ctx_r5.hideSelectAll);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.visibleOptions);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que construíra o dropdown, contendo o campo de pesquisa e os itens para seleção.
 */
export class PoMultiselectDropdownComponent {
    constructor(cd) {
        this.cd = cd;
        /** Propriedade que indica se deve exibir o loading. */
        this.isServerSearching = false;
        /** Propriedade que indica se o campo de pesquisa deverá ser escondido. */
        this.hideSearch = false;
        /** Propriedade que recebe a lista de opções selecionadas. */
        this.selectedOptions = [];
        /** Propriedade que recebe a lista com todas as opções. */
        this.options = [];
        /** Propriedade que recebe a lista de opções que deverão ser criadas no dropdown. */
        this.visibleOptions = [];
        /** Propriedade que indica se o campo "Selecionar todos" deverá ser escondido. */
        this.hideSelectAll = false;
        /** Evento disparado a cada tecla digitada na pesquisa. */
        this.changeSearch = new EventEmitter();
        /** Evento disparado a cada alteração na lista das opções selecionadas. */
        this.change = new EventEmitter();
        /**
         * Evento disparado quando for detectada uma ação que necessite fechar o dropdown.
         * Por exemplo, no caso de ser teclado TAB dentro do dropdown, então é disparado este evento
         * para notificar o componente principal que deve fechar o dropdown.
         */
        this.closeDropdown = new EventEmitter();
        this.scrollTop = 0;
        this.show = false;
    }
    get hasOptions() {
        return !!this.options?.length;
    }
    onKeydown(event) {
        if (event.keyCode === 9) {
            this.closeDropdown.emit();
        }
    }
    scrollTo(index) {
        this.scrollTop = index <= 2 ? 0 : index * 44 - 88;
        this.cd.markForCheck();
    }
    isSelectedItem(option) {
        return this.selectedOptions.some(selectedItem => selectedItem[this.fieldValue] === option[this.fieldValue]);
    }
    clickItem(check, option) {
        this.updateSelectedValues(check, option);
        if (!this.hideSearch) {
            this.searchElement.setFocus();
        }
    }
    onClickSelectAll() {
        const selectedValues = this.selectedOptions.map(({ [this.fieldValue]: value }) => value);
        if (this.everyVisibleOptionsSelected(selectedValues)) {
            this.selectedOptions = [];
        }
        else {
            this.selectedOptions = this.uniqueSelectedOptions(selectedValues);
        }
        this.change.emit(this.selectedOptions);
    }
    updateSelectedValues(checked, option) {
        if (checked) {
            this.selectedOptions.push(option);
        }
        else {
            this.selectedOptions = this.selectedOptions.filter(selectedOption => selectedOption[this.fieldValue] !== option[this.fieldValue]);
        }
        this.change.emit(this.selectedOptions);
    }
    everyVisibleOptionsSelected(selectedValues) {
        return this.visibleOptions.every(visibleOption => selectedValues.includes(visibleOption[this.fieldValue]));
    }
    someVisibleOptionsSelected(selectedValues) {
        return this.visibleOptions.some(visibleOption => selectedValues.includes(visibleOption[this.fieldValue]));
    }
    getStateSelectAll() {
        const selectedValues = this.selectedOptions.map(({ [this.fieldValue]: value }) => value);
        if (this.everyVisibleOptionsSelected(selectedValues)) {
            return true;
        }
        else if (this.someVisibleOptionsSelected(selectedValues)) {
            return null;
        }
        else {
            return false;
        }
    }
    callChangeSearch(event) {
        this.changeSearch.emit(event);
    }
    controlVisibility(toOpen) {
        this.show = toOpen;
        setTimeout(() => {
            if (toOpen && this.searchElement && !this.hideSearch) {
                this.searchElement.setFocus();
                this.searchElement.clean();
            }
        });
        this.cd.markForCheck();
    }
    uniqueSelectedOptions(selectedValues) {
        const newSelectedOptions = [...this.selectedOptions];
        for (const visibleOption of this.visibleOptions) {
            if (!selectedValues.includes(visibleOption[this.fieldValue])) {
                newSelectedOptions.push(visibleOption);
            }
        }
        return newSelectedOptions;
    }
}
PoMultiselectDropdownComponent.ɵfac = function PoMultiselectDropdownComponent_Factory(t) { return new (t || PoMultiselectDropdownComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoMultiselectDropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMultiselectDropdownComponent, selectors: [["po-multiselect-dropdown"]], viewQuery: function PoMultiselectDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(_c1, 7, ElementRef);
        i0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ulElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchElement = _t.first);
    } }, hostBindings: function PoMultiselectDropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function PoMultiselectDropdownComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { isServerSearching: ["p-searching", "isServerSearching"], hideSearch: ["p-hide-search", "hideSearch"], literals: ["p-literals", "literals"], placeholderSearch: ["p-placeholder-search", "placeholderSearch"], selectedOptions: ["p-selected-options", "selectedOptions"], options: ["p-options", "options"], visibleOptions: ["p-visible-options", "visibleOptions"], hideSelectAll: ["p-hide-select-all", "hideSelectAll"], fieldValue: ["p-field-value", "fieldValue"], fieldLabel: ["p-field-label", "fieldLabel"] }, outputs: { changeSearch: "p-change-search", change: "p-change", closeDropdown: "p-close-dropdown" }, decls: 8, vars: 6, consts: [[1, "po-multiselect-container", 3, "hidden"], ["container", ""], [3, "p-literals", "p-field-value", "p-placeholder", "p-change", 4, "ngIf"], [1, "po-multiselect-items-container", 3, "scrollTop"], ["ulElement", ""], ["class", "po-multiselect-container-no-data po-text-center", 4, "ngIf"], ["class", "po-multiselect-container-loading po-text-center", 4, "ngIf"], [4, "ngIf"], [3, "p-literals", "p-field-value", "p-placeholder", "p-change"], ["searchElement", ""], [1, "po-multiselect-container-no-data", "po-text-center"], [1, "po-multiselect-container-loading", "po-text-center"], [3, "p-label", "p-selected", "p-change", 4, "ngIf"], [3, "p-label", "p-selected", "p-change", 4, "ngFor", "ngForOf"], [3, "p-label", "p-selected", "p-change"]], template: function PoMultiselectDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PoMultiselectDropdownComponent_po_multiselect_search_2_Template, 2, 3, "po-multiselect-search", 2);
        i0.ɵɵelementStart(3, "ul", 3, 4);
        i0.ɵɵtemplate(5, PoMultiselectDropdownComponent_div_5_Template, 3, 1, "div", 5);
        i0.ɵɵtemplate(6, PoMultiselectDropdownComponent_div_6_Template, 2, 0, "div", 6);
        i0.ɵɵtemplate(7, PoMultiselectDropdownComponent_ng_container_7_Template, 3, 2, "ng-container", 7);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("hidden", !ctx.show);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideSearch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("scrollTop", ctx.scrollTop);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.visibleOptions.length && !ctx.isServerSearching);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isServerSearching);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isServerSearching);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMultiselectDropdownComponent, [{
        type: Component,
        args: [{ selector: 'po-multiselect-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #container class=\"po-multiselect-container\" [hidden]=\"!show\">\r\n  <po-multiselect-search\r\n    #searchElement\r\n    *ngIf=\"!hideSearch\"\r\n    [p-literals]=\"literals\"\r\n    [p-field-value]=\"fieldValue\"\r\n    [p-placeholder]=\"placeholderSearch\"\r\n    (p-change)=\"callChangeSearch($event)\"\r\n  >\r\n  </po-multiselect-search>\r\n\r\n  <ul class=\"po-multiselect-items-container\" [scrollTop]=\"scrollTop\" #ulElement>\r\n    <div *ngIf=\"!visibleOptions.length && !isServerSearching\" class=\"po-multiselect-container-no-data po-text-center\">\r\n      <span> {{ literals.noData }}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"isServerSearching\" class=\"po-multiselect-container-loading po-text-center\">\r\n      <po-loading></po-loading>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"!isServerSearching\">\r\n      <po-multiselect-item\r\n        *ngIf=\"!searchElement?.inputValue && visibleOptions.length && !hideSelectAll\"\r\n        [p-label]=\"literals?.selectAll\"\r\n        [p-selected]=\"getStateSelectAll()\"\r\n        (p-change)=\"onClickSelectAll()\"\r\n      >\r\n      </po-multiselect-item>\r\n\r\n      <po-multiselect-item\r\n        *ngFor=\"let option of visibleOptions\"\r\n        [p-label]=\"option[fieldLabel]\"\r\n        [p-selected]=\"isSelectedItem(option)\"\r\n        (p-change)=\"clickItem($event, option)\"\r\n      >\r\n      </po-multiselect-item>\r\n    </ng-container>\r\n  </ul>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { isServerSearching: [{
            type: Input,
            args: ['p-searching']
        }], hideSearch: [{
            type: Input,
            args: ['p-hide-search']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], placeholderSearch: [{
            type: Input,
            args: ['p-placeholder-search']
        }], selectedOptions: [{
            type: Input,
            args: ['p-selected-options']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], visibleOptions: [{
            type: Input,
            args: ['p-visible-options']
        }], hideSelectAll: [{
            type: Input,
            args: ['p-hide-select-all']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }], fieldLabel: [{
            type: Input,
            args: ['p-field-label']
        }], changeSearch: [{
            type: Output,
            args: ['p-change-search']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], closeDropdown: [{
            type: Output,
            args: ['p-close-dropdown']
        }], container: [{
            type: ViewChild,
            args: ['container', { read: ElementRef, static: true }]
        }], ulElement: [{
            type: ViewChild,
            args: ['ulElement', { read: ElementRef, static: true }]
        }], searchElement: [{
            type: ViewChild,
            args: ['searchElement']
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLW11bHRpc2VsZWN0L3BvLW11bHRpc2VsZWN0LWRyb3Bkb3duL3BvLW11bHRpc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1tdWx0aXNlbGVjdC9wby1tdWx0aXNlbGVjdC1kcm9wZG93bi9wby1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ1RyQixtREFPQztJQURDLHdOQUFZLGVBQUEsK0JBQXdCLENBQUEsSUFBQztJQUV2QyxpQkFBd0I7OztJQUx0Qiw0Q0FBdUIsb0NBQUEsMkNBQUE7OztJQVF2QiwrQkFBa0gsV0FBQTtJQUN6RyxZQUFxQjtJQUFBLGlCQUFPLEVBQUE7OztJQUE1QixlQUFxQjtJQUFyQixzREFBcUI7OztJQUc5QiwrQkFBdUY7SUFDckYsNkJBQXlCO0lBQzNCLGlCQUFNOzs7O0lBR0osK0NBS0M7SUFEQyxnT0FBWSxlQUFBLDBCQUFrQixDQUFBLElBQUM7SUFFakMsaUJBQXNCOzs7SUFKcEIsb0ZBQStCLDBDQUFBOzs7O0lBTWpDLCtDQUtDO0lBREMsb1NBQVksZUFBQSxxQ0FBeUIsQ0FBQSxJQUFDO0lBRXhDLGlCQUFzQjs7OztJQUpwQix3REFBOEIsa0RBQUE7OztJQVhsQyw2QkFBeUM7SUFDdkMs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ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb011bHRpc2VsZWN0TGl0ZXJhbHMgfSBmcm9tICcuLi8uLi9pbmRleCc7XHJcbmltcG9ydCB7IFBvTXVsdGlzZWxlY3RPcHRpb24gfSBmcm9tICcuLi9wby1tdWx0aXNlbGVjdC1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9NdWx0aXNlbGVjdFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vLi4vcG8tbXVsdGlzZWxlY3Qtc2VhcmNoL3BvLW11bHRpc2VsZWN0LXNlYXJjaC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBxdWUgY29uc3RydcOtcmEgbyBkcm9wZG93biwgY29udGVuZG8gbyBjYW1wbyBkZSBwZXNxdWlzYSBlIG9zIGl0ZW5zIHBhcmEgc2VsZcOnw6NvLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1tdWx0aXNlbGVjdC1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLW11bHRpc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9NdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IHtcclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIGluZGljYSBzZSBkZXZlIGV4aWJpciBvIGxvYWRpbmcuICovXHJcbiAgQElucHV0KCdwLXNlYXJjaGluZycpIGlzU2VydmVyU2VhcmNoaW5nPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIGluZGljYSBzZSBvIGNhbXBvIGRlIHBlc3F1aXNhIGRldmVyw6Egc2VyIGVzY29uZGlkby4gKi9cclxuICBASW5wdXQoJ3AtaGlkZS1zZWFyY2gnKSBoaWRlU2VhcmNoPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIHF1ZSByZWNlYmUgYXMgbGl0ZXJhaXMgZGVmaW5pZGFzIG5vIGNvbXBvbmVudGUgYHBvLW11bHRpc2VsZWN0YC4gKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBsaXRlcmFscz86IFBvTXVsdGlzZWxlY3RMaXRlcmFscztcclxuXHJcbiAgLyoqIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhLiAqL1xyXG4gIEBJbnB1dCgncC1wbGFjZWhvbGRlci1zZWFyY2gnKSBwbGFjZWhvbGRlclNlYXJjaDogc3RyaW5nO1xyXG5cclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIHJlY2ViZSBhIGxpc3RhIGRlIG9ww6fDtWVzIHNlbGVjaW9uYWRhcy4gKi9cclxuICBASW5wdXQoJ3Atc2VsZWN0ZWQtb3B0aW9ucycpIHNlbGVjdGVkT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIHJlY2ViZSBhIGxpc3RhIGNvbSB0b2RhcyBhcyBvcMOnw7Vlcy4gKi9cclxuICBASW5wdXQoJ3Atb3B0aW9ucycpIG9wdGlvbnM6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+ID0gW107XHJcblxyXG4gIC8qKiBQcm9wcmllZGFkZSBxdWUgcmVjZWJlIGEgbGlzdGEgZGUgb3DDp8O1ZXMgcXVlIGRldmVyw6NvIHNlciBjcmlhZGFzIG5vIGRyb3Bkb3duLiAqL1xyXG4gIEBJbnB1dCgncC12aXNpYmxlLW9wdGlvbnMnKSB2aXNpYmxlT3B0aW9uczogQXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT4gPSBbXTtcclxuXHJcbiAgLyoqIFByb3ByaWVkYWRlIHF1ZSBpbmRpY2Egc2UgbyBjYW1wbyBcIlNlbGVjaW9uYXIgdG9kb3NcIiBkZXZlcsOhIHNlciBlc2NvbmRpZG8uICovXHJcbiAgQElucHV0KCdwLWhpZGUtc2VsZWN0LWFsbCcpIGhpZGVTZWxlY3RBbGw/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgncC1maWVsZC12YWx1ZScpIGZpZWxkVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLWZpZWxkLWxhYmVsJykgZmllbGRMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogRXZlbnRvIGRpc3BhcmFkbyBhIGNhZGEgdGVjbGEgZGlnaXRhZGEgbmEgcGVzcXVpc2EuICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2Utc2VhcmNoJykgY2hhbmdlU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKiogRXZlbnRvIGRpc3BhcmFkbyBhIGNhZGEgYWx0ZXJhw6fDo28gbmEgbGlzdGEgZGFzIG9ww6fDtWVzIHNlbGVjaW9uYWRhcy4gKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBxdWFuZG8gZm9yIGRldGVjdGFkYSB1bWEgYcOnw6NvIHF1ZSBuZWNlc3NpdGUgZmVjaGFyIG8gZHJvcGRvd24uXHJcbiAgICogUG9yIGV4ZW1wbG8sIG5vIGNhc28gZGUgc2VyIHRlY2xhZG8gVEFCIGRlbnRybyBkbyBkcm9wZG93biwgZW50w6NvIMOpIGRpc3BhcmFkbyBlc3RlIGV2ZW50b1xyXG4gICAqIHBhcmEgbm90aWZpY2FyIG8gY29tcG9uZW50ZSBwcmluY2lwYWwgcXVlIGRldmUgZmVjaGFyIG8gZHJvcGRvd24uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jbG9zZS1kcm9wZG93bicpIGNsb3NlRHJvcGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSB1bEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoRWxlbWVudCcpIHNlYXJjaEVsZW1lbnQ6IFBvTXVsdGlzZWxlY3RTZWFyY2hDb21wb25lbnQ7XHJcblxyXG4gIHNjcm9sbFRvcCA9IDA7XHJcbiAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgZ2V0IGhhc09wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLm9wdGlvbnM/Lmxlbmd0aDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5ZG93bihldmVudDogYW55KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24uZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oaW5kZXgpIHtcclxuICAgIHRoaXMuc2Nyb2xsVG9wID0gaW5kZXggPD0gMiA/IDAgOiBpbmRleCAqIDQ0IC0gODg7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZEl0ZW0ob3B0aW9uOiBQb011bHRpc2VsZWN0T3B0aW9uKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuc29tZShzZWxlY3RlZEl0ZW0gPT4gc2VsZWN0ZWRJdGVtW3RoaXMuZmllbGRWYWx1ZV0gPT09IG9wdGlvblt0aGlzLmZpZWxkVmFsdWVdKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSXRlbShjaGVjaywgb3B0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVzKGNoZWNrLCBvcHRpb24pO1xyXG5cclxuICAgIGlmICghdGhpcy5oaWRlU2VhcmNoKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoRWxlbWVudC5zZXRGb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja1NlbGVjdEFsbCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKCh7IFt0aGlzLmZpZWxkVmFsdWVdOiB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZXZlcnlWaXNpYmxlT3B0aW9uc1NlbGVjdGVkKHNlbGVjdGVkVmFsdWVzKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnVuaXF1ZVNlbGVjdGVkT3B0aW9ucyhzZWxlY3RlZFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVzKGNoZWNrZWQsIG9wdGlvbikge1xyXG4gICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24gPT4gc2VsZWN0ZWRPcHRpb25bdGhpcy5maWVsZFZhbHVlXSAhPT0gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXZlcnlWaXNpYmxlT3B0aW9uc1NlbGVjdGVkKHNlbGVjdGVkVmFsdWVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlT3B0aW9ucy5ldmVyeSh2aXNpYmxlT3B0aW9uID0+IHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKHZpc2libGVPcHRpb25bdGhpcy5maWVsZFZhbHVlXSkpO1xyXG4gIH1cclxuXHJcbiAgc29tZVZpc2libGVPcHRpb25zU2VsZWN0ZWQoc2VsZWN0ZWRWYWx1ZXMpIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zLnNvbWUodmlzaWJsZU9wdGlvbiA9PiBzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyh2aXNpYmxlT3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0pKTtcclxuICB9XHJcblxyXG4gIGdldFN0YXRlU2VsZWN0QWxsKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAoKHsgW3RoaXMuZmllbGRWYWx1ZV06IHZhbHVlIH0pID0+IHZhbHVlKTtcclxuXHJcbiAgICBpZiAodGhpcy5ldmVyeVZpc2libGVPcHRpb25zU2VsZWN0ZWQoc2VsZWN0ZWRWYWx1ZXMpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWVWaXNpYmxlT3B0aW9uc1NlbGVjdGVkKHNlbGVjdGVkVmFsdWVzKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxDaGFuZ2VTZWFyY2goZXZlbnQpIHtcclxuICAgIHRoaXMuY2hhbmdlU2VhcmNoLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbFZpc2liaWxpdHkodG9PcGVuKSB7XHJcbiAgICB0aGlzLnNob3cgPSB0b09wZW47XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0b09wZW4gJiYgdGhpcy5zZWFyY2hFbGVtZW50ICYmICF0aGlzLmhpZGVTZWFyY2gpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEVsZW1lbnQuc2V0Rm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEVsZW1lbnQuY2xlYW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmlxdWVTZWxlY3RlZE9wdGlvbnMoc2VsZWN0ZWRWYWx1ZXMpIHtcclxuICAgIGNvbnN0IG5ld1NlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLnNlbGVjdGVkT3B0aW9uc107XHJcblxyXG4gICAgZm9yIChjb25zdCB2aXNpYmxlT3B0aW9uIG9mIHRoaXMudmlzaWJsZU9wdGlvbnMpIHtcclxuICAgICAgaWYgKCFzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyh2aXNpYmxlT3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0pKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0ZWRPcHRpb25zLnB1c2godmlzaWJsZU9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2VsZWN0ZWRPcHRpb25zO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJwby1tdWx0aXNlbGVjdC1jb250YWluZXJcIiBbaGlkZGVuXT1cIiFzaG93XCI+XHJcbiAgPHBvLW11bHRpc2VsZWN0LXNlYXJjaFxyXG4gICAgI3NlYXJjaEVsZW1lbnRcclxuICAgICpuZ0lmPVwiIWhpZGVTZWFyY2hcIlxyXG4gICAgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIlxyXG4gICAgW3AtZmllbGQtdmFsdWVdPVwiZmllbGRWYWx1ZVwiXHJcbiAgICBbcC1wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclNlYXJjaFwiXHJcbiAgICAocC1jaGFuZ2UpPVwiY2FsbENoYW5nZVNlYXJjaCgkZXZlbnQpXCJcclxuICA+XHJcbiAgPC9wby1tdWx0aXNlbGVjdC1zZWFyY2g+XHJcblxyXG4gIDx1bCBjbGFzcz1cInBvLW11bHRpc2VsZWN0LWl0ZW1zLWNvbnRhaW5lclwiIFtzY3JvbGxUb3BdPVwic2Nyb2xsVG9wXCIgI3VsRWxlbWVudD5cclxuICAgIDxkaXYgKm5nSWY9XCIhdmlzaWJsZU9wdGlvbnMubGVuZ3RoICYmICFpc1NlcnZlclNlYXJjaGluZ1wiIGNsYXNzPVwicG8tbXVsdGlzZWxlY3QtY29udGFpbmVyLW5vLWRhdGEgcG8tdGV4dC1jZW50ZXJcIj5cclxuICAgICAgPHNwYW4+IHt7IGxpdGVyYWxzLm5vRGF0YSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJpc1NlcnZlclNlYXJjaGluZ1wiIGNsYXNzPVwicG8tbXVsdGlzZWxlY3QtY29udGFpbmVyLWxvYWRpbmcgcG8tdGV4dC1jZW50ZXJcIj5cclxuICAgICAgPHBvLWxvYWRpbmc+PC9wby1sb2FkaW5nPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1NlcnZlclNlYXJjaGluZ1wiPlxyXG4gICAgICA8cG8tbXVsdGlzZWxlY3QtaXRlbVxyXG4gICAgICAgICpuZ0lmPVwiIXNlYXJjaEVsZW1lbnQ/LmlucHV0VmFsdWUgJiYgdmlzaWJsZU9wdGlvbnMubGVuZ3RoICYmICFoaWRlU2VsZWN0QWxsXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscz8uc2VsZWN0QWxsXCJcclxuICAgICAgICBbcC1zZWxlY3RlZF09XCJnZXRTdGF0ZVNlbGVjdEFsbCgpXCJcclxuICAgICAgICAocC1jaGFuZ2UpPVwib25DbGlja1NlbGVjdEFsbCgpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLW11bHRpc2VsZWN0LWl0ZW0+XHJcblxyXG4gICAgICA8cG8tbXVsdGlzZWxlY3QtaXRlbVxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdmlzaWJsZU9wdGlvbnNcIlxyXG4gICAgICAgIFtwLWxhYmVsXT1cIm9wdGlvbltmaWVsZExhYmVsXVwiXHJcbiAgICAgICAgW3Atc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZEl0ZW0ob3B0aW9uKVwiXHJcbiAgICAgICAgKHAtY2hhbmdlKT1cImNsaWNrSXRlbSgkZXZlbnQsIG9wdGlvbilcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tbXVsdGlzZWxlY3QtaXRlbT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG4iXX0=