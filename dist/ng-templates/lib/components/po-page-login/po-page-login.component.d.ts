import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewChecked, ChangeDetectorRef, IterableDiffers, OnInit, ViewContainerRef } from '@angular/core';
import { PoLanguageService } from '@po-ui/ng-components';
import { PoComponentInjectorService } from '@po-ui/ng-components';
import { PoPageLoginBaseComponent } from './po-page-login-base.component';
import { PoPageLoginService } from './po-page-login.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageLoginBaseComponent
 *
 * @example
 *
 * <example name="po-page-login-basic" title="PO Page Login Basic">
 *  <file name="sample-po-page-login-basic/sample-po-page-login-basic.component.html"> </file>
 *  <file name="sample-po-page-login-basic/sample-po-page-login-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-login-labs" title="PO Page Login Labs">
 *  <file name="sample-po-page-login-labs/sample-po-page-login-labs.component.html"> </file>
 *  <file name="sample-po-page-login-labs/sample-po-page-login-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-login-human-resources" title="PO Page Login - Human Resources">
 *  <file name="sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"> </file>
 *  <file name="sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"> </file>
 *  <file name="sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"> </file>
 * </example>
 *
 * <example name="po-page-login-automatic-service" title="PO Page Login - Automatic Service">
 *  <file name="sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"> </file>
 *  <file name="sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"> </file>
 * </example>
 */
export declare class PoPageLoginComponent extends PoPageLoginBaseComponent implements AfterViewChecked, OnInit {
    changeDetector: ChangeDetectorRef;
    private activatedRoute;
    private poComponentInjector;
    loginForm: NgForm;
    pageLogin: ViewContainerRef;
    initialSelectLanguage: string;
    private componentRef;
    private differ;
    private readonly customPasswordError;
    constructor(changeDetector: ChangeDetectorRef, activatedRoute: ActivatedRoute, poComponentInjector: PoComponentInjectorService, differs: IterableDiffers, loginService: PoPageLoginService, router: Router, poLanguageService: PoLanguageService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    activateSupport(): void;
    changeLoginModel(): void;
    changePasswordModel(): void;
    onSelectedLanguage(language: string): void;
    openUrl(recovery: any): void;
    protected concatenateLoginHintWithContactEmail(contactEmail: string): {
        [x: string]: string;
    };
    protected setLoginErrors(errors: Array<string>): void;
    protected setPasswordErrors(errors: Array<string>): void;
    private checkingForMetadataProperty;
    private checkingForRouteMetadata;
    private concatenate;
    private concatenateLiteral;
    private createModalPasswordRecoveryComponent;
    private generateLoginError;
    private generatePasswordError;
    private resetControl;
    private setControlErrors;
    private setUrlRedirect;
    private validateArrayChanges;
    private initializeLanguage;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageLoginComponent, "po-page-login", never, {}, {}, never, never, false>;
}