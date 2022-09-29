import { AfterContentInit, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChange, ViewContainerRef, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { callFunction } from '../../../utils/util';
import { PoLanguageService } from './../../../services/po-language/po-language.service';
import { PoPageAction } from '../po-page-action.interface';
import { PoDisclaimer } from '../../po-disclaimer/po-disclaimer.interface';
import { PoDisclaimerGroupRemoveAction } from '../../po-disclaimer-group/po-disclaimer-group-remove-action.interface';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import { PoPageListBaseComponent } from './po-page-list-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageListBaseComponent
 *
 * @example
 *
 * <example name="po-page-list-basic" title="PO Page List Basic">
 *  <file name="sample-po-page-list-basic/sample-po-page-list-basic.component.html"> </file>
 *  <file name="sample-po-page-list-basic/sample-po-page-list-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-list-labs" title="PO Page List Labs">
 *  <file name="sample-po-page-list-labs/sample-po-page-list-labs.component.html"> </file>
 *  <file name="sample-po-page-list-labs/sample-po-page-list-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-list-hiring-processes" title="PO Page List - Hiring Processes">
 *  <file name="sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"> </file>
 *  <file name="sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"> </file>
 *  <file name="sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"> </file>
 * </example>
 */
export declare class PoPageListComponent extends PoPageListBaseComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
    renderer: Renderer2;
    private router;
    private changeDetector;
    filterInput: ElementRef;
    poPageContent: PoPageContentComponent;
    advancedSearch: string;
    dropdownActions: Array<PoPageAction>;
    isMobile: boolean;
    limitPrimaryActions: number;
    callFunction: typeof callFunction;
    private isRecalculate;
    private maxWidthMobile;
    constructor(viewRef: ViewContainerRef, languageService: PoLanguageService, renderer: Renderer2, router: Router, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    actionIsDisabled(action: any): any;
    callAction(item: PoPageAction): void;
    hasPageHeader(): boolean;
    hasCustomFilterSize(): boolean;
    filterSizeClass(width: number): string;
    setDropdownActions(): void;
    callActionFilter(field: string): void;
    /**
     * Limpa o campo de pesquisa.
     */
    clearInputSearch(): void;
    onkeypress(key: any): void;
    onChangeDisclaimerGroup(disclaimers: any): void;
    onRemoveDisclaimer(removeData: PoDisclaimerGroupRemoveAction): void;
    onRemoveAllDisclaimers(removedDisclaimers: Array<PoDisclaimer>): void;
    private initializeFixedLiterals;
    private initializeListeners;
    private removeListeners;
    private onResize;
    private setIsMobile;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageListComponent, "po-page-list", never, {}, {}, never, ["*"], false>;
}