import { ComponentRef, OnDestroy, OnInit } from '@angular/core';
import { PoLanguageService } from '../po-language/po-language.service';
import { PoDialogAlertLiterals } from './interfaces/po-dialog-alert-literals.interface';
import { PoDialogAlertOptions, PoDialogConfirmOptions } from './interfaces/po-dialog.interface';
import { PoDialogConfirmLiterals } from './interfaces/po-dialog-confirm-literals.interface';
import { PoDialogType } from './po-dialog.enum';
import { PoModalAction } from '../../components/po-modal/po-modal-action.interface';
import { PoModalComponent } from '../../components/po-modal/po-modal.component';
import * as i0 from "@angular/core";
export declare const poDialogAlertLiteralsDefault: {
    en: PoDialogAlertLiterals;
    es: PoDialogAlertLiterals;
    pt: PoDialogAlertLiterals;
    ru: PoDialogAlertLiterals;
};
export declare const poDialogConfirmLiteralsDefault: {
    en: PoDialogConfirmLiterals;
    es: PoDialogConfirmLiterals;
    pt: PoDialogConfirmLiterals;
    ru: PoDialogConfirmLiterals;
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que serve como container do po-dialog.service
 */
export declare class PoDialogComponent implements OnDestroy, OnInit {
    poModal: PoModalComponent;
    title: string;
    message: string;
    primaryAction: PoModalAction;
    secondaryAction: PoModalAction;
    closeAction: Function;
    literalsAlert: PoDialogAlertLiterals;
    literalsConfirm: PoDialogConfirmLiterals;
    private componentRef;
    private closeSubscription;
    private language;
    constructor(languageService: PoLanguageService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    close(xClosed?: boolean): void;
    destroy(): void;
    configDialog(primaryLabel?: any, primaryAction?: any, secondaryLabel?: any, secondaryAction?: any, closeAction?: any): void;
    open(dialogOptions: PoDialogConfirmOptions | PoDialogAlertOptions, dialogType: PoDialogType, componentRef?: ComponentRef<PoDialogComponent>): void;
    private setDialogLiterals;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDialogComponent, "ng-component", never, {}, {}, never, never, false>;
}
