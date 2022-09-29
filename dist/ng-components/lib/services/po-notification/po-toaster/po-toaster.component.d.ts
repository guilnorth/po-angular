import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PoLanguageService } from '../../po-language/po-language.service';
import { PoToasterBaseComponent } from './po-toaster-base.component';
import { PoToaster } from './po-toaster.interface';
import { PoButtonComponent } from '../../../components/po-button/po-button.component';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @docsExtends PoToasterBaseComponent
 */
export declare class PoToasterComponent extends PoToasterBaseComponent implements AfterViewInit, OnDestroy {
    changeDetector: ChangeDetectorRef;
    private elementeRef?;
    private renderer?;
    toaster: ElementRef;
    buttonClose: PoButtonComponent;
    alive: boolean;
    language: string;
    literals: any;
    private icon;
    private margin;
    private observableOnClose;
    private toasterPosition;
    private toasterType;
    constructor(poLanguageService: PoLanguageService, changeDetector: ChangeDetectorRef, elementeRef?: ElementRef, renderer?: Renderer2);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    changePosition(position: number): void;
    close(): void;
    setFadeOut(): void;
    configToaster(poToaster: PoToaster): void;
    getIcon(): string;
    getToasterPosition(): string;
    getToasterType(): string;
    onButtonClose(event: any): void;
    poToasterAction(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoToasterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoToasterComponent, "po-toaster", never, {}, {}, never, never, false>;
}