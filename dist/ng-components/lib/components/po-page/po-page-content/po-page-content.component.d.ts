import { AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { PoPageContentBaseComponent } from './po-page-content-base.component';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @docsExtends PoPageContentBaseComponent
 */
export declare class PoPageContentComponent extends PoPageContentBaseComponent implements AfterViewInit, OnDestroy {
    renderer: Renderer2;
    contentOpacity: number;
    height: string;
    overflowY: string;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    recalculateHeaderSize(): void;
    setHeightContent(poPageHeader: HTMLElement): void;
    private initializeListeners;
    private removeListeners;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageContentComponent, "po-page-content", never, {}, {}, never, ["*"], false>;
}