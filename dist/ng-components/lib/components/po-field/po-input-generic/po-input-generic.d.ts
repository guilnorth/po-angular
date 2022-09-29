import { AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoInputBaseComponent } from '../po-input/po-input-base.component';
import * as i0 from "@angular/core";
export declare abstract class PoInputGeneric extends PoInputBaseComponent implements AfterViewInit {
    inputEl: ElementRef;
    type: string;
    el: ElementRef;
    valueBeforeChange: any;
    timeoutChange: any;
    get autocomplete(): string;
    constructor(el: ElementRef, cd?: ChangeDetectorRef);
    onKeydown(e: any): void;
    onKeyup(e: any): void;
    ngAfterViewInit(): void;
    afterViewInit(): void;
    focus(): void;
    setPaddingInput(): void;
    verifyAutoFocus(): void;
    eventOnInput(e: any): void;
    validMaxLength(maxlength: number, value: string): string;
    eventOnFocus(e: any): void;
    eventOnBlur(e: any): void;
    controlChangeEmitter(): void;
    eventOnClick(e: any): void;
    hasInvalidClass(): boolean;
    getErrorPattern(): string;
    validateClassesForPattern(): void;
    verifyPattern(pattern: string, value: any): boolean;
    clear(value: any): void;
    writeValueModel(value: any): void;
    getScreenValue(): any;
    abstract extraValidation(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PoInputGeneric, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoInputGeneric, never, never, {}, {}, never, never, false>;
}