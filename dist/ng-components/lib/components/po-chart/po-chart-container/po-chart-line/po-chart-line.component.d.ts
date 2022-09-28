import { ElementRef, Renderer2 } from '@angular/core';
import { PoChartLineBaseComponent } from './po-chart-line-base.component';
import { PoChartMathsService } from '../../services/po-chart-maths.service';
import * as i0 from "@angular/core";
export declare class PoChartLineComponent extends PoChartLineBaseComponent {
    protected mathsService: PoChartMathsService;
    protected renderer: Renderer2;
    protected elementRef: ElementRef;
    constructor(mathsService: PoChartMathsService, renderer: Renderer2, elementRef: ElementRef);
    onEnter(serieIndex: number): any;
    onLeave(serieIndex: number): any;
    onSeriePointHover(selectedItem: any): void;
    private reorderSVGGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartLineComponent, "[po-chart-line]", never, {}, {}, never, never, false>;
}
