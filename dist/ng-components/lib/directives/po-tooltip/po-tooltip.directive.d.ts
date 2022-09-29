import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PoTooltipBaseDirective } from './po-tooltip-base.directive';
import { PoTooltipControlPositionService } from './po-tooltip-control-position.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoTooltipBaseDirective
 *
 * @example
 *
 * <example name="po-tooltip-basic" title="PO Tooltip Basic" >
 *  <file name="sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"> </file>
 *  <file name="sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tooltip-labs" title="PO Tooltip Labs" >
 *  <file name="sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"> </file>
 *  <file name="sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tooltip-new-user" title="PO Tooltip - New User" >
 *  <file name="sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"> </file>
 *  <file name="sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"> </file>
 * </example>
 *
 */
export declare class PoTooltipDirective extends PoTooltipBaseDirective implements OnInit {
    private elementRef;
    private renderer;
    private poControlPosition;
    private arrowDirection;
    private divArrow;
    private divContent;
    private isHidden;
    private lastTooltipText;
    private textContent;
    private tooltipOffset;
    private eventListenerFunction;
    constructor(elementRef: ElementRef, renderer: Renderer2, poControlPosition: PoTooltipControlPositionService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    onFocusOut(): void;
    onFocusIn(): void;
    ngOnInit(): void;
    protected addTooltipAction(): void;
    protected removeTooltipAction(): void;
    private addArrow;
    private addScrollEventListener;
    private createTooltip;
    private initScrollEventListenerFunction;
    private hideTooltip;
    private removeArrow;
    private removeScrollEventListener;
    private showTooltip;
    private updateTextContent;
    private insertAriaLabelTooltip;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTooltipDirective, "[p-tooltip]", never, {}, {}, never, never, false>;
}