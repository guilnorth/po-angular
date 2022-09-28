import { AfterViewInit, DoCheck, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PoTableSubtitleColumn } from './po-table-subtitle-column.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação de um conjunto de legendas.
 */
export declare class PoTableSubtitleFooterComponent implements AfterViewInit, DoCheck, OnDestroy {
    private element;
    renderer: Renderer2;
    /** Propriedade que recebe as literais definidas no `po-table`. */
    literals: any;
    /** Propriedade que recebe as legendas definidas no `PoTableSubtitleCircleComponent`. */
    subtitles: Array<PoTableSubtitleColumn>;
    showSubtitle: boolean;
    protected resizeListener: () => void;
    private isVisible;
    private timeoutResize;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    private debounceResize;
    private getContainerSize;
    private getItemsSize;
    private initializeResizeListener;
    private removeResizeListener;
    private toggleShowCompleteSubtitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableSubtitleFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTableSubtitleFooterComponent, "po-table-subtitle-footer", never, { "literals": "p-literals"; "subtitles": "p-subtitles"; }, {}, never, never, false>;
}
