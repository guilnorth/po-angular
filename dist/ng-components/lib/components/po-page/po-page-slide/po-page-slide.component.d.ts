import { ElementRef } from '@angular/core';
import { PoActiveOverlayService } from '../../../services/po-active-overlay/po-active-overlay.service';
import { PoPageSlideBaseComponent } from './po-page-slide-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageSlideBaseComponent
 *
 * @example
 *
 * <example name="po-page-slide-basic" title="PO Page Slide Basic">
 *  <file name="sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"> </file>
 *  <file name="sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-slide-labs" title="PO Page Slide Labs">
 *  <file name="sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"> </file>
 *  <file name="sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-slide-configuration" title="PO Page Slide - Configuration">
 *  <file name="sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"> </file>
 *  <file name="sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"> </file>
 * </example>
 */
export declare class PoPageSlideComponent extends PoPageSlideBaseComponent {
    private poActiveOverlayService;
    private _pageContent;
    private firstElement;
    private id;
    private loadingCompleted;
    private sourceElement;
    private focusEvent;
    set pageContent(pageContent: ElementRef);
    get pageContent(): ElementRef;
    constructor(poActiveOverlayService: PoActiveOverlayService);
    open(): void;
    close(): void;
    onClickOut(event: MouseEvent): void;
    private handleFocus;
    private initFocus;
    private loadFirstElement;
    private removeEventListeners;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageSlideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageSlideComponent, "po-page-slide", never, {}, {}, never, ["*"], false>;
}
