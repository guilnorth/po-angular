import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { PoChartPathCoordinates } from '../../../interfaces/po-chart-path-coordinates.interface';
import * as i0 from "@angular/core";
export declare class PoChartCircularPathComponent {
    private renderer;
    serie: PoChartPathCoordinates;
    onClick: EventEmitter<any>;
    onHover: EventEmitter<any>;
    svgPath: ElementRef;
    constructor(renderer: Renderer2);
    applyCoordinates(coordinates: string): void;
    onMouseClick(): void;
    onMouseEnter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartCircularPathComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartCircularPathComponent, "[po-chart-circular-path]", never, { "serie": "p-serie"; }, { "onClick": "p-on-click"; "onHover": "p-on-hover"; }, never, never, false>;
}