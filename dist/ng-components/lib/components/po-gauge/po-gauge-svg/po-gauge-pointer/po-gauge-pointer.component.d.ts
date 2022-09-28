import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { PoGaugeCoordinates } from '../../interfaces/po-gauge-coordinates.interface';
import * as i0 from "@angular/core";
export declare class PoGaugePointerComponent implements AfterViewInit {
    private renderer;
    pointer: ElementRef;
    radiusScale: number;
    private _coordinates;
    private afterViewInit;
    set coordinates(value: PoGaugeCoordinates);
    get coordinates(): PoGaugeCoordinates;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    private calculateRadiusScale;
    private applyPointerRotation;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoGaugePointerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoGaugePointerComponent, "[po-gauge-pointer]", never, { "coordinates": "p-coordinates"; }, {}, never, never, false>;
}
