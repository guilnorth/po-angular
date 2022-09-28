import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PoResizeObserverDirective implements OnDestroy, OnInit {
    private elementRef;
    resize: EventEmitter<any>;
    private subscription;
    private observer;
    private chartWidthResize$;
    constructor(elementRef: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    private get isResizeObserverSupported();
    static ɵfac: i0.ɵɵFactoryDeclaration<PoResizeObserverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoResizeObserverDirective, "[p-resize-observer]", never, {}, { "resize": "p-resize-observer"; }, never, never, false>;
}
