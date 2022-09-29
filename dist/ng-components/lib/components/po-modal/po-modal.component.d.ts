import { ElementRef } from '@angular/core';
import { PoModalBaseComponent } from './po-modal-base.component';
import { PoModalFooterComponent } from './po-modal-footer/po-modal-footer.component';
import { PoActiveOverlayService } from '../../services/po-active-overlay/po-active-overlay.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoModalBaseComponent
 *
 * @example
 *
 * <example name="po-modal-basic" title="PO Modal Basic">
 *  <file name="sample-po-modal-basic/sample-po-modal-basic.component.html"> </file>
 *  <file name="sample-po-modal-basic/sample-po-modal-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-modal-labs" title="PO Modal Labs">
 *  <file name="sample-po-modal-labs/sample-po-modal-labs.component.html"> </file>
 *  <file name="sample-po-modal-labs/sample-po-modal-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-modal-fruits-salad" title="PO Modal - Fruits Salad">
 *  <file name="sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"> </file>
 *  <file name="sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"> </file>
 * </example>
 */
export declare class PoModalComponent extends PoModalBaseComponent {
    private poActiveOverlayService;
    modalContent: ElementRef;
    modalFooter: PoModalFooterComponent;
    private firstElement;
    private focusFunction;
    private focusableElements;
    private id;
    private sourceElement;
    constructor(poActiveOverlayService: PoActiveOverlayService, poLanguageService: PoLanguageService);
    close(xClosed?: boolean): void;
    closeModalOnEscapeKey(event: any): void;
    getSecondaryActionButtonDanger(): "true" | "false";
    onClickOut(event: any): void;
    open(): void;
    private handleFocus;
    private initFocus;
    private removeEventListeners;
    private setFirstElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoModalComponent, "po-modal", never, {}, {}, ["modalFooter"], ["*", "po-modal-footer"], false>;
}