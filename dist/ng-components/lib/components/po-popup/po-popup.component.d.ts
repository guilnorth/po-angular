import { ChangeDetectorRef, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PoControlPositionService } from '../../services/po-control-position/po-control-position.service';
import { PoPopupAction } from './po-popup-action.interface';
import { PoPopupBaseComponent } from './po-popup-base.component';
import * as i0 from "@angular/core";
/**
 *
 * @docsExtends PoPopupBaseComponent
 *
 * @example
 *
 * <example name="po-popup-basic" title="PO Popup - Basic">
 *   <file name="sample-po-popup-basic/sample-po-popup-basic.component.html"> </file>
 *   <file name="sample-po-popup-basic/sample-po-popup-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-popup-labs" title="PO Popup - Labs">
 *   <file name="sample-po-popup-labs/sample-po-popup-labs.component.html"> </file>
 *   <file name="sample-po-popup-labs/sample-po-popup-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-popup-email" title="PO Popup Email">
 *   <file name="sample-po-popup-email/sample-po-popup-email.component.html"> </file>
 *   <file name="sample-po-popup-email/sample-po-popup-email.component.ts"> </file>
 * </example>
 *
 */
export declare class PoPopupComponent extends PoPopupBaseComponent {
    private renderer;
    private router;
    private poControlPosition;
    changeDetector: ChangeDetectorRef;
    popupRef: ElementRef;
    constructor(viewContainerRef: ViewContainerRef, renderer: Renderer2, router: Router, poControlPosition: PoControlPositionService, changeDetector: ChangeDetectorRef);
    /**
     * Fecha o componente *popup*.
     *
     * > Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.
     */
    close(): void;
    onActionClick(popupAction: PoPopupAction): void | Promise<boolean>;
    /**
     * Abre o componente *popup*.
     *
     * > É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.
     */
    open(param?: any): void;
    returnBooleanValue(popupAction: any, property: string): any;
    /**
     * Responsável por abrir e fechar o *popup*.
     *
     * Quando disparado abrirá o *popup* e caso o mesmo já estiver aberto e possuir o mesmo `target` irá fecha-lo.
     *
     * É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.
     */
    toggle(param?: any): void;
    private clickedOutDisabledItem;
    private clickedOutHeaderTemplate;
    private clickedOutTarget;
    private closePopupOnClickout;
    private elementContains;
    private hasContentToShow;
    private initializeListeners;
    private onScroll;
    private openUrl;
    private removeListeners;
    private setPosition;
    private validateInitialContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPopupComponent, "po-popup", never, {}, {}, never, ["[p-popup-header-template]"], false>;
}
