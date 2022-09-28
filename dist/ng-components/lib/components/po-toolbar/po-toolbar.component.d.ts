import { OnInit, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PoToolbarBaseComponent } from './po-toolbar-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoToolbarBaseComponent
 *
 * @example
 *
 * <example name="po-toolbar-basic" title="PO Toolbar Basic">
 *  <file name="sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"> </file>
 *  <file name="sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-toolbar-labs" title="PO Toolbar Labs">
 *  <file name="sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"> </file>
 *  <file name="sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-toolbar-logged" title="PO Toolbar - Logged">
 *  <file name="sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"> </file>
 *  <file name="sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"> </file>
 * </example>
 */
export declare class PoToolbarComponent extends PoToolbarBaseComponent implements OnInit {
    private titleService;
    constructor(titleService: Title, viewRef: ViewContainerRef);
    ngOnInit(): void;
    private setTitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoToolbarComponent, "po-toolbar", never, {}, {}, never, never, false>;
}
