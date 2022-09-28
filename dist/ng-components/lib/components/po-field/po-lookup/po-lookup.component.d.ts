import { AfterViewInit, DoCheck, ElementRef, Injector, OnDestroy, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { PoLookupBaseComponent } from './po-lookup-base.component';
import { PoLookupFilterService } from './services/po-lookup-filter.service';
import { PoLookupModalService } from './services/po-lookup-modal.service';
import * as i0 from "@angular/core";
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
export declare class PoLookupComponent extends PoLookupBaseComponent implements AfterViewInit, OnDestroy, OnInit, DoCheck {
    private renderer;
    private poLookupModalService;
    private cd;
    inputEl: ElementRef;
    initialized: boolean;
    timeoutResize: any;
    visibleElement: boolean;
    disclaimers: any[];
    visibleDisclaimers: any[];
    private modalSubscription;
    private isCalculateVisibleItems;
    get autocomplete(): "on" | "off";
    constructor(renderer: Renderer2, poLookupFilterService: PoLookupFilterService, poLookupModalService: PoLookupModalService, cd: ChangeDetectorRef, injector: Injector);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
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
    focus(): void;
    openLookup(): void;
    checkSelectedItems(): any;
    setDisclaimers(selectedOptions: Array<any>): void;
    setViewValue(value: any, object: any): void;
    getViewValue(): string;
    searchEvent(): void;
    closeDisclaimer(value: any): void;
    updateVisibleItems(): void;
    debounceResize(): void;
    getInputWidth(): number;
    getDisclaimersWidth(): any[];
    calculateVisibleItems(): void;
    private isAllowedOpenModal;
    private formatFields;
    private setInputValueWipoieldFormat;
    private initializeListeners;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLookupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoLookupComponent, "po-lookup", never, {}, {}, never, never, false>;
}
