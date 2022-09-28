import { AfterContentInit, OnChanges, Renderer2, SimpleChange, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PoLanguageService } from './../../../services/po-language/po-language.service';
import { PoPageAction } from '../po-page-action.interface';
import { PoPageDefaultBaseComponent } from './po-page-default-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageDefaultBaseComponent
 *
 * @example
 *
 * <example name="po-page-default-basic" title="PO Page Default Basic">
 *  <file name="sample-po-page-default-basic/sample-po-page-default-basic.component.html"> </file>
 *  <file name="sample-po-page-default-basic/sample-po-page-default-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-default-labs" title="PO Page Default Labs">
 *  <file name="sample-po-page-default-labs/sample-po-page-default-labs.component.html"> </file>
 *  <file name="sample-po-page-default-labs/sample-po-page-default-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-default-dashboard" title="PO Page Default - Dashboard">
 *  <file name="sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"> </file>
 *  <file name="sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"> </file>
 *  <file name="sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"> </file>
 * </example>
 */
export declare class PoPageDefaultComponent extends PoPageDefaultBaseComponent implements AfterContentInit, OnChanges {
    private renderer;
    private router;
    limitPrimaryActions: number;
    dropdownActions: Array<PoPageAction>;
    isMobile: boolean;
    private maxWidthMobile;
    constructor(viewRef: ViewContainerRef, languageService: PoLanguageService, renderer: Renderer2, router: Router);
    ngAfterContentInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    actionIsDisabled(action: any): any;
    callAction(item: PoPageAction): void;
    hasPageHeader(): boolean;
    setDropdownActions(): void;
    private onResize;
    private setIsMobile;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageDefaultComponent, "po-page-default", never, {}, {}, never, ["*"], false>;
}
