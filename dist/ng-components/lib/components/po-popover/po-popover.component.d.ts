import { AfterViewInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PoControlPositionService } from './../../services/po-control-position/po-control-position.service';
import { PoPopoverBaseComponent } from './po-popover-base.component';
import * as i0 from "@angular/core";
/**
 *
 * @docsExtends PoPopoverBaseComponent
 *
 * @example
 *
 * <example name="po-popover-basic" title="PO Popover Basic">
 *   <file name="sample-po-popover-basic/sample-po-popover-basic.component.html"> </file>
 *   <file name="sample-po-popover-basic/sample-po-popover-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-popover-labs" title="PO Popover Labs">
 *   <file name="sample-po-popover-labs/sample-po-popover-labs.component.html"> </file>
 *   <file name="sample-po-popover-labs/sample-po-popover-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-popover-credit-card" title="PO Popover - Credit Card">
 *   <file name="sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"> </file>
 *   <file name="sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"> </file>
 * </example>
 */
export declare class PoPopoverComponent extends PoPopoverBaseComponent implements AfterViewInit, OnDestroy {
    private renderer;
    private poControlPosition;
    popoverElement: ElementRef;
    arrowDirection: string;
    timeoutResize: any;
    targetElement: any;
    eventListenerFunction: () => void;
    constructor(renderer: Renderer2, poControlPosition: PoControlPositionService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    close(): void;
    debounceResize(): void;
    open(): void;
    setOpacity(value: number): void;
    setPopoverPosition(): void;
    setRendererListenInit(): void;
    togglePopup(event: any): void;
    private addScrollEventListener;
    private initEventListenerFunction;
    private removeListeners;
    private setElementsControlPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPopoverComponent, "po-popover", never, {}, {}, never, ["*"], false>;
}