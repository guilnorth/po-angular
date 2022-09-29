import { EventEmitter } from '@angular/core';
import { PoModalAction } from '../../../components/po-modal/po-modal-action.interface';
import { PoModalComponent } from '../../../components/po-modal/po-modal.component';
import { PoHttpInterceptorDetail } from './po-http-interceptor-detail.interface';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
export declare const colors: {
    success: string;
    error: string;
    warning: string;
    info: string;
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a modal de detalhes exibida pelo interceptor
 */
export declare class PoHttpInterceptorDetailComponent {
    private languageService;
    modal: PoModalComponent;
    closed: EventEmitter<any>;
    details: Array<PoHttpInterceptorDetail>;
    title: string;
    private language;
    private literals;
    primaryAction: PoModalAction;
    constructor(languageService: PoLanguageService);
    set detail(details: Array<PoHttpInterceptorDetail>);
    close(): void;
    formatDetailItemTitle(detail: any): any;
    open(): void;
    typeColor(type: string): string;
    typeValue(type: string): string;
    private addValidDetail;
    private getValidDetailProperties;
    private filterByValidDetails;
    private formatTitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoHttpInterceptorDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoHttpInterceptorDetailComponent, "po-http-interceptor-detail", never, {}, {}, never, never, false>;
}