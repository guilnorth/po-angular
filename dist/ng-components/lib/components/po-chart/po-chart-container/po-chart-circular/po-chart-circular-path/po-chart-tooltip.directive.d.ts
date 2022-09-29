import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PoChartTooltipDirective {
    private elementRef;
    private renderer;
    tooltip: string;
    private lastTooltipText;
    private tooltipElement;
    private tooltipText;
    private tooltipTextContent;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    onMouseEnter(event: MouseEvent): void;
    onMouseLeave(): void;
    onMouseMove(event: MouseEvent): void;
    private calculateTooltipPosition;
    private createTooltip;
    private hideTooltip;
    private showTooltip;
    private tooltipPosition;
    private updatetooltipTextContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoChartTooltipDirective, "[p-chart-tooltip]", never, { "tooltip": "p-chart-tooltip"; }, {}, never, never, false>;
}