import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * po-url é um input específico para receber URL, com o pattern já configurado.
 *
 * @example
 *
 * <example name="po-url-basic" title="PO Url Basic">
 *   <file name="sample-po-url-basic/sample-po-url-basic.component.html"> </file>
 *   <file name="sample-po-url-basic/sample-po-url-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-url-labs" title="PO Url Labs">
 *   <file name="sample-po-url-labs/sample-po-url-labs.component.html"> </file>
 *   <file name="sample-po-url-labs/sample-po-url-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-url-shortener" title="PO Url - Shortener">
 *   <file name="sample-po-url-shortener/sample-po-url-shortener.component.html"> </file>
 *   <file name="sample-po-url-shortener/sample-po-url-shortener.component.ts"> </file>
 * </example>
 *
 */
export declare class PoUrlComponent extends PoInputGeneric implements AfterViewInit, OnDestroy {
    icon: string;
    type: string;
    pattern: string;
    mask: string;
    private listener;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PoUrlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoUrlComponent, "po-url", never, {}, {}, never, never, false>;
}