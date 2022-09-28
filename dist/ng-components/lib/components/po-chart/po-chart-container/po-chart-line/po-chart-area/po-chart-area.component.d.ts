import { ElementRef, Renderer2 } from '@angular/core';
import { PoChartLineBaseComponent } from '../po-chart-line-base.component';
import { PoChartMathsService } from '../../../services/po-chart-maths.service';
import * as i0 from "@angular/core";
export declare class PoChartAreaComponent extends PoChartLineBaseComponent {
    protected mathsService: PoChartMathsService;
    protected renderer: Renderer2;
    protected elementRef: ElementRef;
    private currentActiveSerieIndex;
    private mouseMoveSubscription$;
    private previousActiveSerieIndex;
    constructor(mathsService: PoChartMathsService, renderer: Renderer2, elementRef: ElementRef);
    onEnter(serieIndex: number): void;
    onLeave(serieIndex: number): void;
    onSeriePointHover(selectedItem: any): void;
    private applyActiveItem;
    private getMouseCoordinates;
    private initializeListener;
    private removeListener;
    private verifyActiveArea;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoChartAreaComponent, "[po-chart-area]", never, {}, {}, never, never, false>;
}
