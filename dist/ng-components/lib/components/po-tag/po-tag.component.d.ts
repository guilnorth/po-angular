import { OnInit } from '@angular/core';
import { PoTagBaseComponent } from './po-tag-base.component';
import { PoTagIcon } from './enums/po-tag-icon.enum';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoTagBaseComponent
 *
 * @example
 *
 * <example name="po-tag-basic" title="PO Tag Basic">
 *  <file name="sample-po-tag-basic/sample-po-tag-basic.component.html"> </file>
 *  <file name="sample-po-tag-basic/sample-po-tag-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tag-labs" title="PO Tag Labs">
 *  <file name="sample-po-tag-labs/sample-po-tag-labs.component.html"> </file>
 *  <file name="sample-po-tag-labs/sample-po-tag-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tag-bank-account" title="PO Tag - Bank Account">
 *  <file name="sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"> </file>
 *  <file name="sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"> </file>
 * </example>
 */
export declare class PoTagComponent extends PoTagBaseComponent implements OnInit {
    isClickable: boolean;
    ngOnInit(): void;
    get iconFromType(): PoTagIcon;
    get tagColor(): string;
    get tagOrientation(): boolean;
    onClick(): void;
    onKeyPressed(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTagComponent, "po-tag", never, {}, {}, never, never, false>;
}
