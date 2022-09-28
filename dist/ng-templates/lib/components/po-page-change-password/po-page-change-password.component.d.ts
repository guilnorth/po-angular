import { AfterViewInit, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoComponentInjectorService, PoLanguageService, PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageChangePasswordBaseComponent } from './po-page-change-password-base.component';
import { PoPageChangePasswordRequirement } from './interfaces/po-page-change-password-requirement.interface';
import { PoPageChangePasswordService } from './po-page-change-password.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageChangePasswordBaseComponent
 *
 * @example
 *
 * <example name="po-page-change-password-basic" title="PO Page Change Password Basic">
 *  <file name="sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"> </file>
 *  <file name="sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-change-password-labs" title="PO Page Change Password Labs">
 *  <file name="sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"> </file>
 *  <file name="sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-change-password-modify" title="PO Page Change Password Modify">
 *  <file name="sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"> </file>
 *  <file name="sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-change-password-create" title="PO Page Change Password Create">
 *  <file name="sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"> </file>
 *  <file name="sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-change-password-request" title="PO Page Change Password Request">
 *  <file name="sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"> </file>
 *  <file name="sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"> </file>
 * </example>
 */
export declare class PoPageChangePasswordComponent extends PoPageChangePasswordBaseComponent implements AfterViewInit, OnDestroy, OnInit {
    private activatedRoute;
    private route;
    private router;
    private service;
    private poComponentInjector;
    modal: PoModalComponent;
    pageChangePassword: ViewContainerRef;
    passwordForm: NgForm;
    literals: {
        backButton: string;
        confirmPassword: string;
        createNewPassword: string;
        createNewPasswordPhrase: string;
        currentPassword: string;
        enterSystemButton: string;
        forgotPassword: string;
        newPassword: string;
        passwordSuccessfullyCreated: string;
        passwordSuccessfullyUpdated: string;
        requirements: string;
        safetyTips: string;
        safetyTipsPhrase: string;
        safetyTipsFirst: string;
        safetyTipsSecond: string;
        safetyTipsThird: string;
        saveButton: string;
    };
    modalAction: PoModalAction;
    private newPasswordSubscription;
    private componentRef;
    constructor(activatedRoute: ActivatedRoute, route: ActivatedRoute, router: Router, service: PoPageChangePasswordService, poComponentInjector: PoComponentInjectorService, languageService: PoLanguageService, viewRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    navigateTo(url: string): void;
    onForgotPasswordClick(recovery: any): void;
    onLoginSubmit(): void;
    /**
     * Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `p-url-home`
     */
    openConfirmation(): void;
    validatePassword(): void;
    validateRequirement(requirement: PoPageChangePasswordRequirement): any;
    private checkingForMetadataProperty;
    private checkingForRouteMetadata;
    private createModalPasswordRecoveryComponent;
    private emitSubmit;
    private getLoginForm;
    private postUrlNewPassword;
    private setFormErrors;
    private subscribeToTokenParameter;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageChangePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageChangePasswordComponent, "po-page-change-password", never, {}, {}, never, never, false>;
}
