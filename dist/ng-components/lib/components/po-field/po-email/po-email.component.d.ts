import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * po-email é um input específico para receber E-mail, com o pattern já configurado.
 *
 * @example
 *
 * <example name="po-email-basic" title="PO Email Basic">
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.html"> </file>
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.ts"> </file>
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-email-basic/sample-po-email-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-email-labs" title="PO Email Labs">
 *  <file name="sample-po-email-labs/sample-po-email-labs.component.html"> </file>
 *  <file name="sample-po-email-labs/sample-po-email-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-email-newsletter" title="PO Email - Newsletter">
 *  <file name="sample-po-email-newsletter/sample-po-email-newsletter.component.html"> </file>
 *  <file name="sample-po-email-newsletter/sample-po-email-newsletter.component.ts"> </file>
 * </example>
 */
export declare class PoEmailComponent extends PoInputGeneric implements AfterViewInit, OnDestroy {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<PoEmailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoEmailComponent, "po-email", never, {}, {}, never, never, false>;
}