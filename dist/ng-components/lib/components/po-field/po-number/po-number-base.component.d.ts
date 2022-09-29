import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
export declare abstract class PoNumberBaseComponent extends PoInputGeneric {
    type: string;
    protected invalidInputValueOnBlur: boolean;
    constructor(elementRef: ElementRef, cd: ChangeDetectorRef);
    eventOnInput(e: any): void;
    onBlur(event: any): void;
    onKeyDown(event: any): void;
    validMaxLength(maxlength: number, value: string): string;
    writeValueModel(value: any): void;
    private isEndWithDot;
    private formatNumber;
    private isKeyAllowed;
    private isInvalidKey;
    private isShortcut;
    private isControlKeys;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNumberBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoNumberBaseComponent, never, never, {}, {}, never, never, false>;
}