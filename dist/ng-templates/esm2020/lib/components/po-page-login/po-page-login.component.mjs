import { NgForm } from '@angular/forms';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { isExternalLink } from '../../utils/util';
import { PoModalPasswordRecoveryComponent } from '../po-modal-password-recovery/po-modal-password-recovery.component';
import { PoModalPasswordRecoveryType } from '../po-modal-password-recovery/enums/po-modal-password-recovery-type.enum';
import { PoPageLoginBaseComponent, poPageLoginLiteralIn, poPageLoginLiteralsDefault } from './po-page-login-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@po-ui/ng-components";
import * as i3 from "./po-page-login.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "../po-page-background/po-page-background.component";
import * as i7 from "./po-page-login-popover/po-page-login-popover.component";
const _c0 = ["loginForm"];
const _c1 = ["pageLogin"];
function PoPageLoginComponent_po_tag_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-tag", 28);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-value", ctx_r1.environment);
} }
function PoPageLoginComponent_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 31);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-tooltip", ctx_r13.pageLoginLiterals.loginHint);
} }
function PoPageLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, PoPageLoginComponent_div_18_span_1_Template, 1, 1, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-page-login-info-icon-container-dynamic", !ctx_r3.pageLoginLiterals.loginHint && !ctx_r3.pageLoginLiterals.rememberUserHint);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.pageLoginLiterals.loginHint);
} }
function PoPageLoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelement(1, "span", 33);
    i0.ɵɵelementStart(2, "span", 34);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const error_r14 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(error_r14);
} }
function PoPageLoginComponent_div_24_po_page_login_popover_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-page-login-popover", 37);
    i0.ɵɵlistener("p-forgot-password", function PoPageLoginComponent_div_24_po_page_login_popover_1_Template_po_page_login_popover_p_forgot_password_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.openUrl($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-literals", ctx_r15.pageLoginLiterals)("p-recovery", ctx_r15.recovery)("p-remaining-attempts", ctx_r15.exceededAttemptsWarning);
} }
function PoPageLoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, PoPageLoginComponent_div_24_po_page_login_popover_1_Template, 1, 3, "po-page-login-popover", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showExceededAttemptsWarning && ctx_r5.exceededAttemptsWarning);
} }
function PoPageLoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelement(1, "span", 33);
    i0.ɵɵelementStart(2, "span", 34);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const error_r18 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(error_r18);
} }
function PoPageLoginComponent_po_input_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-input", 38);
    i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_po_input_27_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.customFieldObject.value = $event); })("keyup.enter", function PoPageLoginComponent_po_input_27_Template_po_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(13); return i0.ɵɵresetView(_r2.valid && ctx_r21.onLoginSubmit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r7.pageLoginLiterals.loginHint && !ctx_r7.pageLoginLiterals.rememberUserHint);
    i0.ɵɵproperty("ngModel", ctx_r7.customFieldObject.value)("p-error-pattern", ctx_r7.customFieldObject.errorPattern || ctx_r7.pageLoginLiterals.customFieldErrorPattern)("p-pattern", ctx_r7.customFieldObject.pattern)("p-placeholder", ctx_r7.customFieldObject.placeholder || ctx_r7.pageLoginLiterals.customFieldPlaceholder);
} }
function PoPageLoginComponent_po_combo_28_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-combo", 39);
    i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_po_combo_28_Template_po_combo_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.customFieldObject.value = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r8.pageLoginLiterals.loginHint && !ctx_r8.pageLoginLiterals.rememberUserHint);
    i0.ɵɵproperty("ngModel", ctx_r8.customFieldObject.value)("p-field-value", ctx_r8.customFieldObject.fieldValue)("p-filter-service", ctx_r8.customFieldObject.url)("p-placeholder", ctx_r8.customFieldObject.placeholder || ctx_r8.pageLoginLiterals.customFieldPlaceholder);
} }
function PoPageLoginComponent_po_select_29_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-select", 40);
    i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_po_select_29_Template_po_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.customFieldObject.value = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r9.pageLoginLiterals.loginHint && !ctx_r9.pageLoginLiterals.rememberUserHint);
    i0.ɵɵproperty("ngModel", ctx_r9.customFieldObject.value)("p-placeholder", ctx_r9.customFieldObject.placeholder || ctx_r9.pageLoginLiterals.customFieldPlaceholder)("p-options", ctx_r9.customFieldObject.options);
} }
function PoPageLoginComponent_div_31_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 31);
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("p-tooltip", ctx_r27.pageLoginLiterals.rememberUserHint);
} }
function PoPageLoginComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, PoPageLoginComponent_div_31_div_2_span_1_Template, 1, 1, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-page-login-info-icon-container-dynamic", !ctx_r26.pageLoginLiterals.rememberUserHint);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.pageLoginLiterals.rememberUserHint);
} }
function PoPageLoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "po-switch", 41);
    i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_div_31_Template_po_switch_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.rememberUser = $event); })("keyup.enter", function PoPageLoginComponent_div_31_Template_po_switch_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(13); return i0.ɵɵresetView(_r2.valid && ctx_r30.onLoginSubmit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, PoPageLoginComponent_div_31_div_2_Template, 2, 3, "div", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r10.rememberUser)("p-label-off", ctx_r10.pageLoginLiterals.rememberUser)("p-label-on", ctx_r10.pageLoginLiterals.rememberUser);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.pageLoginLiterals.loginHint || ctx_r10.pageLoginLiterals.rememberUserHint);
} }
function PoPageLoginComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "a", 45);
    i0.ɵɵlistener("click", function PoPageLoginComponent_div_33_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.openUrl(ctx_r31.recovery)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r11.pageLoginLiterals.forgotPassword);
} }
function PoPageLoginComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "a", 45);
    i0.ɵɵlistener("click", function PoPageLoginComponent_div_34_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.openUrl(ctx_r33.registerUrl)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r12.pageLoginLiterals.registerUrl);
} }
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
export class PoPageLoginComponent extends PoPageLoginBaseComponent {
    constructor(changeDetector, activatedRoute, poComponentInjector, differs, loginService, router, poLanguageService) {
        super(loginService, router, poLanguageService);
        this.changeDetector = changeDetector;
        this.activatedRoute = activatedRoute;
        this.poComponentInjector = poComponentInjector;
        this.componentRef = null;
        this.customPasswordError = { custom: false };
        this.differ = differs.find([]).create(null);
    }
    ngAfterViewChecked() {
        if (this.differ) {
            this.validateArrayChanges(this.differ, [
                { array: this.loginErrors, callback: this.generateLoginError.bind(this) },
                { array: this.passwordErrors, callback: this.generatePasswordError.bind(this) }
            ]);
        }
    }
    ngOnInit() {
        this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
        this.selectedLanguage = this.initializeLanguage();
        this.initialSelectLanguage = this.selectedLanguage;
    }
    activateSupport() {
        switch (typeof this.support) {
            case 'string': {
                this.setUrlRedirect(this.support);
                break;
            }
            case 'function': {
                this.support();
                break;
            }
        }
    }
    changeLoginModel() {
        if (this.authenticationUrl) {
            this.loginErrors = [];
        }
        else {
            this.setLoginErrors(this.loginErrors);
            this.loginChange.emit(this.login);
        }
    }
    changePasswordModel() {
        if (this.authenticationUrl) {
            this.passwordErrors = [];
        }
        else {
            this.setPasswordErrors(this.passwordErrors);
            this.passwordChange.emit(this.password);
        }
    }
    onSelectedLanguage(language) {
        this.languageChange.emit(this.languagesList.find(languageItem => languageItem.language === language));
        this.selectedLanguage = language;
    }
    openUrl(recovery) {
        switch (typeof recovery) {
            case 'string': {
                this.setUrlRedirect(recovery);
                break;
            }
            case 'function': {
                recovery();
                break;
            }
            case 'object': {
                this.createModalPasswordRecoveryComponent(recovery);
                break;
            }
        }
    }
    concatenateLoginHintWithContactEmail(contactEmail) {
        const defaultLoginHintLiteral = poPageLoginLiteralsDefault[this.language].loginHint;
        const prepositionLiteral = poPageLoginLiteralIn[this.language];
        return this.concatenateLiteral(contactEmail, 'loginHint', defaultLoginHintLiteral, prepositionLiteral);
    }
    setLoginErrors(errors) {
        const control = this.loginForm.form.controls['login'];
        this.setControlErrors('allLoginErrors', control, errors, this.pageLoginLiterals.loginErrorPattern);
    }
    setPasswordErrors(errors) {
        const control = this.loginForm.form.controls['password'];
        this.setControlErrors('allPasswordErrors', control, errors, this.pageLoginLiterals.passwordErrorPattern);
    }
    checkingForMetadataProperty(object, property) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            return object[property];
        }
    }
    checkingForRouteMetadata(data) {
        if (Object.keys(data).length !== 0) {
            this.authenticationUrl = this.checkingForMetadataProperty(data, 'serviceApi') || this.authenticationUrl;
            this.authenticationType = this.checkingForMetadataProperty(data, 'authenticationType') || this.authenticationType;
            this.environment = this.checkingForMetadataProperty(data, 'environment') || this.environment;
            this.recovery = this.checkingForMetadataProperty(data, 'recovery') || this.recovery;
            this.registerUrl = this.checkingForMetadataProperty(data, 'registerUrl') || this.registerUrl;
        }
    }
    concatenate(defaultLiteral, prefixLiteral, value) {
        return `${defaultLiteral} ${prefixLiteral} ${value}`;
    }
    concatenateLiteral(value, literal, defaultLiteral, prepositionLiteral) {
        return { [literal]: this.concatenate(defaultLiteral, prepositionLiteral, value) };
    }
    createModalPasswordRecoveryComponent(poPageLoginRecovery) {
        if (this.componentRef) {
            this.poComponentInjector.destroyComponentInApplication(this.componentRef);
        }
        this.componentRef = this.poComponentInjector.createComponentInApplication(PoModalPasswordRecoveryComponent);
        this.componentRef.instance.urlRecovery = poPageLoginRecovery.url;
        this.componentRef.instance.contactEmail = poPageLoginRecovery.contactMail;
        this.componentRef.instance.phoneMask = poPageLoginRecovery.phoneMask;
        this.componentRef.instance.type = poPageLoginRecovery.type || PoModalPasswordRecoveryType.Email;
        this.componentRef.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.componentRef.instance.open();
        });
    }
    generateLoginError() {
        if (this.loginErrors && this.loginErrors.length) {
            this.setLoginErrors(this.loginErrors);
        }
        else {
            const control = this.loginForm.form.controls['login'];
            if (control) {
                this.resetControl(control);
            }
        }
    }
    generatePasswordError() {
        if (this.passwordErrors && this.passwordErrors.length) {
            this.setPasswordErrors(this.passwordErrors);
        }
        else {
            const control = this.loginForm.form.controls['password'];
            if (control) {
                this.resetControl(control);
            }
        }
    }
    resetControl(control) {
        control.markAsPristine();
        control.markAsUntouched();
        control.updateValueAndValidity();
    }
    setControlErrors(allErrors, control, errors, patternError) {
        if (control) {
            this[allErrors] = control.hasError('pattern') ? [...errors, ...[patternError]] : [...errors];
            if (errors && errors.length && (control.valid || control.pristine)) {
                control.markAsTouched();
                control.markAsDirty();
                control.setErrors(this.customPasswordError);
            }
        }
    }
    setUrlRedirect(url) {
        isExternalLink(url) ? window.open(url, '_blank') : this.router.navigate([url]);
    }
    validateArrayChanges(differ, array) {
        array.forEach(element => {
            const changes = differ.diff(element.array);
            if (changes) {
                element.callback();
                this.changeDetector.detectChanges();
            }
        });
    }
    initializeLanguage() {
        const language = this.languagesList.find(languageItem => languageItem.language === this.language);
        return language?.language || this.languagesList[0].language;
    }
}
PoPageLoginComponent.ɵfac = function PoPageLoginComponent_Factory(t) { return new (t || PoPageLoginComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoComponentInjectorService), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i3.PoPageLoginService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageLoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageLoginComponent, selectors: [["po-page-login"]], viewQuery: function PoPageLoginComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, NgForm);
        i0.ɵɵviewQuery(_c1, 7, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.loginForm = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageLogin = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 35, vars: 39, consts: [[1, "po-page-login-support", 3, "hidden", "click"], [1, "po-icon", "po-icon-help"], [3, "p-show-select-language", "p-languages", "p-initial-language", "p-background", "p-highlight-info", "p-logo", "p-secondary-logo", "p-selected-language"], ["pageLogin", ""], [1, "po-page-login-header"], [1, "po-mb-md-4", "po-mb-sm-1"], [1, "po-page-login-header-product-name"], ["p-type", "warning", 3, "p-value", 4, "ngIf"], [1, "po-page-login-header-welcome", "po-mb-md-4", "po-mb-sm-2"], [1, "po-page-login-form"], ["loginForm", "ngForm"], [1, "po-row"], [1, "po-lg-12"], [1, "po-page-login-hint", "po-page-login-info-container"], ["name", "login", "p-auto-focus", "", "p-required", "", 1, "po-page-login-info-field", 3, "ngModel", "p-label", "p-pattern", "p-placeholder", "ngModelChange", "click", "keyup.enter", "p-change-model"], ["class", "po-page-login-info-icon-container", 3, "po-page-login-info-icon-container-dynamic", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], ["class", "po-field-container-bottom-text-error po-field-container-error-item", 4, "ngFor", "ngForOf"], [1, "po-page-login-password-container"], ["name", "password", "p-required", "", 1, "po-page-login-field-size", "po-page-login-password-item", 3, "ngModel", "p-label", "p-pattern", "p-placeholder", "ngModelChange", "click", "keyup.enter", "p-change-model"], ["class", "po-page-login-password-item po-page-login-password-popover-container", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldInput", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "ngModelChange", "keyup.enter", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldCombo", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "ngModelChange", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldSelect", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-placeholder", "p-options", "ngModelChange", 4, "ngIf"], ["class", "po-page-login-hint po-page-login-info-container", 4, "ngIf"], ["p-kind", "primary", 1, "po-lg-12", "po-page-login-button", "po-page-login-field-size", 3, "p-disabled", "p-label", "p-loading", "p-click"], ["class", "po-page-login-recovery-link", 4, "ngIf"], ["class", "po-page-login-register-link", 4, "ngIf"], ["p-type", "warning", 3, "p-value"], [1, "po-page-login-info-icon-container"], ["class", "po-icon po-field-icon po-icon-info", "p-tooltip-position", "right", 3, "p-tooltip", 4, "ngIf"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"], [1, "po-field-container-bottom-text-error", "po-field-container-error-item"], [1, "po-icon", "po-icon-exclamation"], [1, "po-field-container-error-text"], [1, "po-page-login-password-item", "po-page-login-password-popover-container"], [3, "p-literals", "p-recovery", "p-remaining-attempts", "p-forgot-password", 4, "ngIf"], [3, "p-literals", "p-recovery", "p-remaining-attempts", "p-forgot-password"], ["name", "customFieldInput", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "ngModelChange", "keyup.enter"], ["name", "customFieldCombo", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "ngModelChange"], ["name", "customFieldSelect", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModel", "p-placeholder", "p-options", "ngModelChange"], ["name", "rememberUser", "p-label-position", "1", 1, "po-page-login-info-field", "po-lg-7", "po-offset-lg-5", "po-offset-xl-5", 3, "ngModel", "p-label-off", "p-label-on", "ngModelChange", "keyup.enter"], ["class", "po-page-login-info-icon-container po-page-login-info-icon-remember-user", 3, "po-page-login-info-icon-container-dynamic", 4, "ngIf"], [1, "po-page-login-info-icon-container", "po-page-login-info-icon-remember-user"], [1, "po-page-login-recovery-link"], [1, "po-font-text-large-bold", 3, "click"], [1, "po-page-login-register-link"]], template: function PoPageLoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function PoPageLoginComponent_Template_button_click_0_listener() { return ctx.activateSupport(); });
        i0.ɵɵelement(1, "span", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "po-page-background", 2, 3);
        i0.ɵɵlistener("p-selected-language", function PoPageLoginComponent_Template_po_page_background_p_selected_language_3_listener($event) { return ctx.onSelectedLanguage($event); });
        i0.ɵɵelementStart(5, "header", 4)(6, "h1", 5)(7, "div", 6);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, PoPageLoginComponent_po_tag_9_Template, 1, 1, "po-tag", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "form", 9, 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "po-login", 14);
        i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_Template_po_login_ngModelChange_17_listener($event) { return ctx.login = $event; })("click", function PoPageLoginComponent_Template_po_login_click_17_listener() { return ctx.closePopover(); })("keyup.enter", function PoPageLoginComponent_Template_po_login_keyup_enter_17_listener() { i0.ɵɵrestoreView(_r35); const _r2 = i0.ɵɵreference(13); return i0.ɵɵresetView(_r2.valid && ctx.onLoginSubmit()); })("p-change-model", function PoPageLoginComponent_Template_po_login_p_change_model_17_listener() { return ctx.changeLoginModel(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, PoPageLoginComponent_div_18_Template, 2, 3, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 16);
        i0.ɵɵtemplate(20, PoPageLoginComponent_div_20_Template, 4, 1, "div", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 12)(22, "div", 18)(23, "po-password", 19);
        i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_Template_po_password_ngModelChange_23_listener($event) { return ctx.password = $event; })("click", function PoPageLoginComponent_Template_po_password_click_23_listener() { return ctx.closePopover(); })("keyup.enter", function PoPageLoginComponent_Template_po_password_keyup_enter_23_listener() { i0.ɵɵrestoreView(_r35); const _r2 = i0.ɵɵreference(13); return i0.ɵɵresetView(_r2.valid && ctx.onLoginSubmit()); })("p-change-model", function PoPageLoginComponent_Template_po_password_p_change_model_23_listener() { return ctx.changePasswordModel(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, PoPageLoginComponent_div_24_Template, 2, 1, "div", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 16);
        i0.ɵɵtemplate(26, PoPageLoginComponent_div_26_Template, 4, 1, "div", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(27, PoPageLoginComponent_po_input_27_Template, 1, 6, "po-input", 21);
        i0.ɵɵtemplate(28, PoPageLoginComponent_po_combo_28_Template, 1, 6, "po-combo", 22);
        i0.ɵɵtemplate(29, PoPageLoginComponent_po_select_29_Template, 1, 5, "po-select", 23);
        i0.ɵɵelementStart(30, "div", 12);
        i0.ɵɵtemplate(31, PoPageLoginComponent_div_31_Template, 3, 4, "div", 24);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "po-button", 25);
        i0.ɵɵlistener("p-click", function PoPageLoginComponent_Template_po_button_p_click_32_listener() { return ctx.onLoginSubmit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, PoPageLoginComponent_div_33_Template, 3, 1, "div", 26);
        i0.ɵɵtemplate(34, PoPageLoginComponent_div_34_Template, 3, 1, "div", 27);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(13);
        i0.ɵɵproperty("hidden", !ctx.support);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.pageLoginLiterals == null ? null : ctx.pageLoginLiterals.support, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-show-select-language", ctx.showLanguage)("p-languages", ctx.languagesList)("p-initial-language", ctx.initialSelectLanguage)("p-background", ctx.background)("p-highlight-info", ctx.pageLoginLiterals.highlightInfo)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.productName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.environment);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.pageLoginLiterals.welcome);
        i0.ɵɵadvance(6);
        i0.ɵɵclassProp("po-page-login-info-field-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        i0.ɵɵproperty("ngModel", ctx.login)("p-label", ctx.pageLoginLiterals.loginLabel)("p-pattern", ctx.loginPattern)("p-placeholder", ctx.pageLoginLiterals.loginPlaceholder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pageLoginLiterals.loginHint || ctx.pageLoginLiterals.rememberUserHint);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.allLoginErrors);
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        i0.ɵɵproperty("ngModel", ctx.password)("p-label", ctx.pageLoginLiterals.passwordLabel)("p-pattern", ctx.passwordPattern)("p-placeholder", ctx.pageLoginLiterals.passwordPlaceholder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pageLoginLiterals.loginHint || ctx.pageLoginLiterals.rememberUserHint);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.allPasswordErrors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.customField && ctx.customFieldType === "input");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.customField && ctx.customFieldType === "combo");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.customField && ctx.customFieldType === "select");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideRememberUser);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-page-login-button-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        i0.ɵɵproperty("p-disabled", _r2.invalid)("p-label", ctx.loading ? ctx.pageLoginLiterals.submittedLabel : ctx.pageLoginLiterals.submitLabel)("p-loading", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.recovery);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.registerUrl);
    } }, dependencies: [i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.PoPageBackgroundComponent, i2.PoButtonComponent, i2.PoComboComponent, i2.PoInputComponent, i2.PoLoginComponent, i2.PoPasswordComponent, i2.PoSelectComponent, i2.PoSwitchComponent, i2.PoTagComponent, i2.PoTooltipDirective, i7.PoPageLoginPopoverComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginComponent, [{
        type: Component,
        args: [{ selector: 'po-page-login', template: "<button class=\"po-page-login-support\" (click)=\"activateSupport()\" [hidden]=\"!support\">\r\n  <span class=\"po-icon po-icon-help\"></span>\r\n  {{ pageLoginLiterals?.support }}\r\n</button>\r\n\r\n<po-page-background\r\n  #pageLogin\r\n  [p-show-select-language]=\"showLanguage\"\r\n  [p-languages]=\"languagesList\"\r\n  [p-initial-language]=\"initialSelectLanguage\"\r\n  [p-background]=\"background\"\r\n  [p-highlight-info]=\"pageLoginLiterals.highlightInfo\"\r\n  [p-logo]=\"logo\"\r\n  [p-secondary-logo]=\"secondaryLogo\"\r\n  (p-selected-language)=\"onSelectedLanguage($event)\"\r\n>\r\n  <header class=\"po-page-login-header\">\r\n    <h1 class=\"po-mb-md-4 po-mb-sm-1\">\r\n      <div class=\"po-page-login-header-product-name\">{{ productName }}</div>\r\n      <po-tag *ngIf=\"environment\" p-type=\"warning\" [p-value]=\"environment\"> </po-tag>\r\n    </h1>\r\n    <div class=\"po-page-login-header-welcome po-mb-md-4 po-mb-sm-2\">{{ pageLoginLiterals.welcome }}</div>\r\n  </header>\r\n\r\n  <form #loginForm=\"ngForm\" class=\"po-page-login-form\">\r\n    <div class=\"po-row\">\r\n      <div class=\"po-lg-12\">\r\n        <div class=\"po-page-login-hint po-page-login-info-container\">\r\n          <po-login\r\n            class=\"po-page-login-info-field\"\r\n            [class.po-page-login-info-field-dynamic]=\"\r\n              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\r\n            \"\r\n            name=\"login\"\r\n            [(ngModel)]=\"login\"\r\n            p-auto-focus\r\n            p-required\r\n            [p-label]=\"pageLoginLiterals.loginLabel\"\r\n            [p-pattern]=\"loginPattern\"\r\n            [p-placeholder]=\"pageLoginLiterals.loginPlaceholder\"\r\n            (click)=\"closePopover()\"\r\n            (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n            (p-change-model)=\"changeLoginModel()\"\r\n          >\r\n          </po-login>\r\n\r\n          <div\r\n            *ngIf=\"pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint\"\r\n            class=\"po-page-login-info-icon-container\"\r\n            [class.po-page-login-info-icon-container-dynamic]=\"\r\n              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\r\n            \"\r\n          >\r\n            <span\r\n              *ngIf=\"pageLoginLiterals.loginHint\"\r\n              class=\"po-icon po-field-icon po-icon-info\"\r\n              p-tooltip-position=\"right\"\r\n              [p-tooltip]=\"pageLoginLiterals.loginHint\"\r\n            >\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n          <div\r\n            *ngFor=\"let error of allLoginErrors\"\r\n            class=\"po-field-container-bottom-text-error po-field-container-error-item\"\r\n          >\r\n            <span class=\"po-icon po-icon-exclamation\"></span>\r\n            <span class=\"po-field-container-error-text\">{{ error }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"po-lg-12\">\r\n        <div class=\"po-page-login-password-container\">\r\n          <po-password\r\n            class=\"po-page-login-field-size po-page-login-password-item\"\r\n            [class.po-page-login-field-size-dynamic]=\"\r\n              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\r\n            \"\r\n            name=\"password\"\r\n            [(ngModel)]=\"password\"\r\n            p-required\r\n            [p-label]=\"pageLoginLiterals.passwordLabel\"\r\n            [p-pattern]=\"passwordPattern\"\r\n            [p-placeholder]=\"pageLoginLiterals.passwordPlaceholder\"\r\n            (click)=\"closePopover()\"\r\n            (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n            (p-change-model)=\"changePasswordModel()\"\r\n          >\r\n          </po-password>\r\n          <div\r\n            *ngIf=\"pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint\"\r\n            class=\"po-page-login-password-item po-page-login-password-popover-container\"\r\n          >\r\n            <po-page-login-popover\r\n              *ngIf=\"showExceededAttemptsWarning && exceededAttemptsWarning\"\r\n              [p-literals]=\"pageLoginLiterals\"\r\n              [p-recovery]=\"recovery\"\r\n              [p-remaining-attempts]=\"exceededAttemptsWarning\"\r\n              (p-forgot-password)=\"openUrl($event)\"\r\n            >\r\n            </po-page-login-popover>\r\n          </div>\r\n        </div>\r\n        <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n          <div\r\n            *ngFor=\"let error of allPasswordErrors\"\r\n            class=\"po-field-container-bottom-text-error po-field-container-error-item\"\r\n          >\r\n            <span class=\"po-icon po-icon-exclamation\"></span>\r\n            <span class=\"po-field-container-error-text\">{{ error }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <po-input\r\n        *ngIf=\"customField && customFieldType === 'input'\"\r\n        [class.po-page-login-field-size-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-page-login-field-size po-lg-12\"\r\n        name=\"customFieldInput\"\r\n        [(ngModel)]=\"customFieldObject.value\"\r\n        p-required\r\n        [p-error-pattern]=\"customFieldObject.errorPattern || pageLoginLiterals.customFieldErrorPattern\"\r\n        [p-pattern]=\"customFieldObject.pattern\"\r\n        [p-placeholder]=\"customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder\"\r\n        (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n      >\r\n      </po-input>\r\n\r\n      <po-combo\r\n        *ngIf=\"customField && customFieldType === 'combo'\"\r\n        [class.po-page-login-field-size-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-page-login-field-size po-lg-12\"\r\n        name=\"customFieldCombo\"\r\n        [(ngModel)]=\"customFieldObject.value\"\r\n        p-required\r\n        [p-field-value]=\"customFieldObject.fieldValue\"\r\n        [p-filter-service]=\"customFieldObject.url\"\r\n        [p-placeholder]=\"customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder\"\r\n      >\r\n      </po-combo>\r\n\r\n      <po-select\r\n        *ngIf=\"customField && customFieldType === 'select'\"\r\n        [class.po-page-login-field-size-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-page-login-field-size po-lg-12\"\r\n        name=\"customFieldSelect\"\r\n        [(ngModel)]=\"customFieldObject.value\"\r\n        p-required\r\n        [p-placeholder]=\"customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder\"\r\n        [p-options]=\"customFieldObject.options\"\r\n      >\r\n      </po-select>\r\n\r\n      <div class=\"po-lg-12\">\r\n        <div *ngIf=\"!hideRememberUser\" class=\"po-page-login-hint po-page-login-info-container\">\r\n          <po-switch\r\n            class=\"po-page-login-info-field po-lg-7 po-offset-lg-5 po-offset-xl-5\"\r\n            name=\"rememberUser\"\r\n            [(ngModel)]=\"rememberUser\"\r\n            p-label-position=\"1\"\r\n            [p-label-off]=\"pageLoginLiterals.rememberUser\"\r\n            [p-label-on]=\"pageLoginLiterals.rememberUser\"\r\n            (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n          >\r\n          </po-switch>\r\n\r\n          <div\r\n            *ngIf=\"pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint\"\r\n            class=\"po-page-login-info-icon-container po-page-login-info-icon-remember-user\"\r\n            [class.po-page-login-info-icon-container-dynamic]=\"!pageLoginLiterals.rememberUserHint\"\r\n          >\r\n            <span\r\n              *ngIf=\"pageLoginLiterals.rememberUserHint\"\r\n              class=\"po-icon po-field-icon po-icon-info\"\r\n              p-tooltip-position=\"right\"\r\n              [p-tooltip]=\"pageLoginLiterals.rememberUserHint\"\r\n            >\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <po-button\r\n        [class.po-page-login-button-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-lg-12 po-page-login-button po-page-login-field-size\"\r\n        p-kind=\"primary\"\r\n        [p-disabled]=\"loginForm.invalid\"\r\n        [p-label]=\"loading ? pageLoginLiterals.submittedLabel : pageLoginLiterals.submitLabel\"\r\n        [p-loading]=\"loading\"\r\n        (p-click)=\"onLoginSubmit()\"\r\n      >\r\n      </po-button>\r\n\r\n      <div *ngIf=\"recovery\" class=\"po-page-login-recovery-link\">\r\n        <a class=\"po-font-text-large-bold\" (click)=\"openUrl(recovery)\">{{ pageLoginLiterals.forgotPassword }}</a>\r\n      </div>\r\n\r\n      <div *ngIf=\"registerUrl\" class=\"po-page-login-register-link\">\r\n        <a class=\"po-font-text-large-bold\" (click)=\"openUrl(registerUrl)\">{{ pageLoginLiterals.registerUrl }}</a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</po-page-background>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.ActivatedRoute }, { type: i2.PoComponentInjectorService }, { type: i0.IterableDiffers }, { type: i3.PoPageLoginService }, { type: i1.Router }, { type: i2.PoLanguageService }]; }, { loginForm: [{
            type: ViewChild,
            args: ['loginForm', { read: NgForm, static: true }]
        }], pageLogin: [{
            type: ViewChild,
            args: ['pageLogin', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtbG9naW4vcG8tcGFnZS1sb2dpbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtbG9naW4vcG8tcGFnZS1sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFHTCxTQUFTLEVBSVQsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDdEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDdkgsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzNCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7OztJQ0xsQyw2QkFBK0U7OztJQUFsQyw0Q0FBdUI7OztJQWtDOUQsMkJBTU87OztJQUZMLCtEQUF5Qzs7O0lBWDdDLCtCQU1DO0lBQ0MsK0VBTU87SUFDVCxpQkFBTTs7O0lBWEosOElBRUM7SUFHRSxlQUFpQztJQUFqQyx5REFBaUM7OztJQVV0QywrQkFHQztJQUNDLDJCQUFpRDtJQUNqRCxnQ0FBNEM7SUFBQSxZQUFXO0lBQUEsaUJBQU8sRUFBQTs7O0lBQWxCLGVBQVc7SUFBWCwrQkFBVzs7OztJQTJCdkQsaURBTUM7SUFEQywwT0FBcUIsZUFBQSx1QkFBZSxDQUFBLElBQUM7SUFFdkMsaUJB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OztRQTNNd0QscUNBQW1CO1FBRW5GLGVBQ0Y7UUFERSxzR0FDRjtRQUlFLGVBQXVDO1FBQXZDLHlEQUF1QyxrQ0FBQSxpREFBQSxnQ0FBQSx5REFBQSxvQkFBQSx1Q0FBQTtRQVdZLGVBQWlCO1FBQWpCLHFDQUFpQjtRQUN2RCxlQUFpQjtRQUFqQixzQ0FBaUI7UUFFb0MsZUFBK0I7UUFBL0IsbURBQStCO1FBU3ZGLGVBRUM7UUFGRCwrSEFFQztRQUVELG1DQUFtQiw2Q0FBQSwrQkFBQSx5REFBQTtRQWFsQixlQUF1RTtRQUF2RSxnR0FBdUU7UUFrQnRELGVBQWlCO1FBQWpCLDRDQUFpQjtRQWFuQyxlQUVDO1FBRkQsK0hBRUM7UUFFRCxzQ0FBc0IsZ0RBQUEsa0NBQUEsNERBQUE7UUFXckIsZUFBdUU7UUFBdkUsZ0dBQXVFO1FBZXRELGVBQW9CO1FBQXBCLCtDQUFvQjtRQVV6QyxlQUFnRDtRQUFoRCx5RUFBZ0Q7UUFjaEQsZUFBZ0Q7UUFBaEQseUVBQWdEO1FBYWhELGVBQWlEO1FBQWpELDBFQUFpRDtRQVk1QyxlQUF1QjtRQUF2Qiw0Q0FBdUI7UUE2QjdCLGVBQTBHO1FBQTFHLDJIQUEwRztRQUcxRyx3Q0FBZ0MsbUdBQUEsMEJBQUE7UUFPNUIsZUFBYztRQUFkLG1DQUFjO1FBSWQsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkQ3SWhCLG9CQUFvQjtjQUpoQyxTQUFTOzJCQUNFLGVBQWU7OFBBSStCLFNBQVM7a0JBQWhFLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ1ksU0FBUztrQkFBMUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgSXRlcmFibGVEaWZmZXJzLFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBpc0V4dGVybmFsTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0NvbXBvbmVudEluamVjdG9yU2VydmljZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlIH0gZnJvbSAnLi4vcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkvZW51bXMvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktdHlwZS5lbnVtJztcclxuaW1wb3J0IHtcclxuICBQb1BhZ2VMb2dpbkJhc2VDb21wb25lbnQsXHJcbiAgcG9QYWdlTG9naW5MaXRlcmFsSW4sXHJcbiAgcG9QYWdlTG9naW5MaXRlcmFsc0RlZmF1bHRcclxufSBmcm9tICcuL3BvLXBhZ2UtbG9naW4tYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VMb2dpblJlY292ZXJ5IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtbG9naW4tcmVjb3ZlcnkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9wby1wYWdlLWxvZ2luLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb1BhZ2VMb2dpbkJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtbG9naW4tYmFzaWNcIiB0aXRsZT1cIlBPIFBhZ2UgTG9naW4gQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1sb2dpbi1iYXNpYy9zYW1wbGUtcG8tcGFnZS1sb2dpbi1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtbG9naW4tYmFzaWMvc2FtcGxlLXBvLXBhZ2UtbG9naW4tYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1sb2dpbi1sYWJzXCIgdGl0bGU9XCJQTyBQYWdlIExvZ2luIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1sb2dpbi1sYWJzL3NhbXBsZS1wby1wYWdlLWxvZ2luLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWxvZ2luLWxhYnMvc2FtcGxlLXBvLXBhZ2UtbG9naW4tbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWxvZ2luLWh1bWFuLXJlc291cmNlc1wiIHRpdGxlPVwiUE8gUGFnZSBMb2dpbiAtIEh1bWFuIFJlc291cmNlc1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWxvZ2luLWh1bWFuLXJlc291cmNlcy9zYW1wbGUtcG8tcGFnZS1sb2dpbi1odW1hbi1yZXNvdXJjZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWxvZ2luLWh1bWFuLXJlc291cmNlcy9zYW1wbGUtcG8tcGFnZS1sb2dpbi1odW1hbi1yZXNvdXJjZXMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1sb2dpbi1odW1hbi1yZXNvdXJjZXMvc2FtcGxlLXBvLXBhZ2UtbG9naW4taHVtYW4tcmVzb3VyY2VzLm1vZHVsZS50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtbG9naW4tYXV0b21hdGljLXNlcnZpY2VcIiB0aXRsZT1cIlBPIFBhZ2UgTG9naW4gLSBBdXRvbWF0aWMgU2VydmljZVwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWxvZ2luLWF1dG9tYXRpYy1zZXJ2aWNlL3NhbXBsZS1wby1wYWdlLWxvZ2luLWF1dG9tYXRpYy1zZXJ2aWNlLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1sb2dpbi1hdXRvbWF0aWMtc2VydmljZS9zYW1wbGUtcG8tcGFnZS1sb2dpbi1hdXRvbWF0aWMtc2VydmljZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tcGFnZS1sb2dpbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUxvZ2luQ29tcG9uZW50IGV4dGVuZHMgUG9QYWdlTG9naW5CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdsb2dpbkZvcm0nLCB7IHJlYWQ6IE5nRm9ybSwgc3RhdGljOiB0cnVlIH0pIGxvZ2luRm9ybTogTmdGb3JtO1xyXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VMb2dpbicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHBhZ2VMb2dpbjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgaW5pdGlhbFNlbGVjdExhbmd1YWdlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkaWZmZXI6IGFueTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGN1c3RvbVBhc3N3b3JkRXJyb3IgPSB7IGN1c3RvbTogZmFsc2UgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHBvQ29tcG9uZW50SW5qZWN0b3I6IFBvQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlLFxyXG4gICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxyXG4gICAgbG9naW5TZXJ2aWNlOiBQb1BhZ2VMb2dpblNlcnZpY2UsXHJcbiAgICByb3V0ZXI6IFJvdXRlcixcclxuICAgIHBvTGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIobG9naW5TZXJ2aWNlLCByb3V0ZXIsIHBvTGFuZ3VhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kaWZmZXIpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUFycmF5Q2hhbmdlcyh0aGlzLmRpZmZlciwgW1xyXG4gICAgICAgIHsgYXJyYXk6IHRoaXMubG9naW5FcnJvcnMsIGNhbGxiYWNrOiB0aGlzLmdlbmVyYXRlTG9naW5FcnJvci5iaW5kKHRoaXMpIH0sXHJcbiAgICAgICAgeyBhcnJheTogdGhpcy5wYXNzd29yZEVycm9ycywgY2FsbGJhY2s6IHRoaXMuZ2VuZXJhdGVQYXNzd29yZEVycm9yLmJpbmQodGhpcykgfVxyXG4gICAgICBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jaGVja2luZ0ZvclJvdXRlTWV0YWRhdGEodGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5kYXRhKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRMYW5ndWFnZSA9IHRoaXMuaW5pdGlhbGl6ZUxhbmd1YWdlKCk7XHJcbiAgICB0aGlzLmluaXRpYWxTZWxlY3RMYW5ndWFnZSA9IHRoaXMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlU3VwcG9ydCgpIHtcclxuICAgIHN3aXRjaCAodHlwZW9mIHRoaXMuc3VwcG9ydCkge1xyXG4gICAgICBjYXNlICdzdHJpbmcnOiB7XHJcbiAgICAgICAgdGhpcy5zZXRVcmxSZWRpcmVjdCh0aGlzLnN1cHBvcnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzoge1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMb2dpbk1vZGVsKCkge1xyXG4gICAgaWYgKHRoaXMuYXV0aGVudGljYXRpb25VcmwpIHtcclxuICAgICAgdGhpcy5sb2dpbkVycm9ycyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRMb2dpbkVycm9ycyh0aGlzLmxvZ2luRXJyb3JzKTtcclxuICAgICAgdGhpcy5sb2dpbkNoYW5nZS5lbWl0KHRoaXMubG9naW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmRNb2RlbCgpIHtcclxuICAgIGlmICh0aGlzLmF1dGhlbnRpY2F0aW9uVXJsKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRFcnJvcnMgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0UGFzc3dvcmRFcnJvcnModGhpcy5wYXNzd29yZEVycm9ycyk7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRDaGFuZ2UuZW1pdCh0aGlzLnBhc3N3b3JkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxhbmd1YWdlQ2hhbmdlLmVtaXQodGhpcy5sYW5ndWFnZXNMaXN0LmZpbmQobGFuZ3VhZ2VJdGVtID0+IGxhbmd1YWdlSXRlbS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UpKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gIH1cclxuXHJcbiAgb3BlblVybChyZWNvdmVyeTogYW55KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHR5cGVvZiByZWNvdmVyeSkge1xyXG4gICAgICBjYXNlICdzdHJpbmcnOiB7XHJcbiAgICAgICAgdGhpcy5zZXRVcmxSZWRpcmVjdChyZWNvdmVyeSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZnVuY3Rpb24nOiB7XHJcbiAgICAgICAgcmVjb3ZlcnkoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdvYmplY3QnOiB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbFBhc3N3b3JkUmVjb3ZlcnlDb21wb25lbnQocmVjb3ZlcnkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY29uY2F0ZW5hdGVMb2dpbkhpbnRXaXRoQ29udGFjdEVtYWlsKGNvbnRhY3RFbWFpbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0TG9naW5IaW50TGl0ZXJhbCA9IHBvUGFnZUxvZ2luTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLmxvZ2luSGludDtcclxuICAgIGNvbnN0IHByZXBvc2l0aW9uTGl0ZXJhbCA9IHBvUGFnZUxvZ2luTGl0ZXJhbEluW3RoaXMubGFuZ3VhZ2VdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbmNhdGVuYXRlTGl0ZXJhbChjb250YWN0RW1haWwsICdsb2dpbkhpbnQnLCBkZWZhdWx0TG9naW5IaW50TGl0ZXJhbCwgcHJlcG9zaXRpb25MaXRlcmFsKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRMb2dpbkVycm9ycyhlcnJvcnM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5mb3JtLmNvbnRyb2xzWydsb2dpbiddO1xyXG4gICAgdGhpcy5zZXRDb250cm9sRXJyb3JzKCdhbGxMb2dpbkVycm9ycycsIGNvbnRyb2wsIGVycm9ycywgdGhpcy5wYWdlTG9naW5MaXRlcmFscy5sb2dpbkVycm9yUGF0dGVybik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0UGFzc3dvcmRFcnJvcnMoZXJyb3JzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5sb2dpbkZvcm0uZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXTtcclxuICAgIHRoaXMuc2V0Q29udHJvbEVycm9ycygnYWxsUGFzc3dvcmRFcnJvcnMnLCBjb250cm9sLCBlcnJvcnMsIHRoaXMucGFnZUxvZ2luTGl0ZXJhbHMucGFzc3dvcmRFcnJvclBhdHRlcm4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja2luZ0Zvck1ldGFkYXRhUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xyXG4gICAgICByZXR1cm4gb2JqZWN0W3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tpbmdGb3JSb3V0ZU1ldGFkYXRhKGRhdGEpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblVybCA9IHRoaXMuY2hlY2tpbmdGb3JNZXRhZGF0YVByb3BlcnR5KGRhdGEsICdzZXJ2aWNlQXBpJykgfHwgdGhpcy5hdXRoZW50aWNhdGlvblVybDtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblR5cGUgPSB0aGlzLmNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShkYXRhLCAnYXV0aGVudGljYXRpb25UeXBlJykgfHwgdGhpcy5hdXRoZW50aWNhdGlvblR5cGU7XHJcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLmNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShkYXRhLCAnZW52aXJvbm1lbnQnKSB8fCB0aGlzLmVudmlyb25tZW50O1xyXG4gICAgICB0aGlzLnJlY292ZXJ5ID0gdGhpcy5jaGVja2luZ0Zvck1ldGFkYXRhUHJvcGVydHkoZGF0YSwgJ3JlY292ZXJ5JykgfHwgdGhpcy5yZWNvdmVyeTtcclxuICAgICAgdGhpcy5yZWdpc3RlclVybCA9IHRoaXMuY2hlY2tpbmdGb3JNZXRhZGF0YVByb3BlcnR5KGRhdGEsICdyZWdpc3RlclVybCcpIHx8IHRoaXMucmVnaXN0ZXJVcmw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmNhdGVuYXRlKGRlZmF1bHRMaXRlcmFsOiBzdHJpbmcsIHByZWZpeExpdGVyYWw6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGAke2RlZmF1bHRMaXRlcmFsfSAke3ByZWZpeExpdGVyYWx9ICR7dmFsdWV9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uY2F0ZW5hdGVMaXRlcmFsKHZhbHVlOiBzdHJpbmcsIGxpdGVyYWw6IHN0cmluZywgZGVmYXVsdExpdGVyYWw6IHN0cmluZywgcHJlcG9zaXRpb25MaXRlcmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7IFtsaXRlcmFsXTogdGhpcy5jb25jYXRlbmF0ZShkZWZhdWx0TGl0ZXJhbCwgcHJlcG9zaXRpb25MaXRlcmFsLCB2YWx1ZSkgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50KHBvUGFnZUxvZ2luUmVjb3Zlcnk6IFBvUGFnZUxvZ2luUmVjb3ZlcnkpIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLnBvQ29tcG9uZW50SW5qZWN0b3IuZGVzdHJveUNvbXBvbmVudEluQXBwbGljYXRpb24odGhpcy5jb21wb25lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5wb0NvbXBvbmVudEluamVjdG9yLmNyZWF0ZUNvbXBvbmVudEluQXBwbGljYXRpb24oUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlDb21wb25lbnQpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudXJsUmVjb3ZlcnkgPSBwb1BhZ2VMb2dpblJlY292ZXJ5LnVybDtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRhY3RFbWFpbCA9IHBvUGFnZUxvZ2luUmVjb3ZlcnkuY29udGFjdE1haWw7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5waG9uZU1hc2sgPSBwb1BhZ2VMb2dpblJlY292ZXJ5LnBob25lTWFzaztcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnR5cGUgPSBwb1BhZ2VMb2dpblJlY292ZXJ5LnR5cGUgfHwgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLkVtYWlsO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUxvZ2luRXJyb3IoKSB7XHJcbiAgICBpZiAodGhpcy5sb2dpbkVycm9ycyAmJiB0aGlzLmxvZ2luRXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldExvZ2luRXJyb3JzKHRoaXMubG9naW5FcnJvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubG9naW5Gb3JtLmZvcm0uY29udHJvbHNbJ2xvZ2luJ107XHJcbiAgICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldENvbnRyb2woY29udHJvbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVQYXNzd29yZEVycm9yKCkge1xyXG4gICAgaWYgKHRoaXMucGFzc3dvcmRFcnJvcnMgJiYgdGhpcy5wYXNzd29yZEVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRQYXNzd29yZEVycm9ycyh0aGlzLnBhc3N3b3JkRXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddO1xyXG5cclxuICAgICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLnJlc2V0Q29udHJvbChjb250cm9sKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldENvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbnRyb2xFcnJvcnMoYWxsRXJyb3JzOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgZXJyb3JzOiBBcnJheTxzdHJpbmc+LCBwYXR0ZXJuRXJyb3I6IHN0cmluZykge1xyXG4gICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgdGhpc1thbGxFcnJvcnNdID0gY29udHJvbC5oYXNFcnJvcigncGF0dGVybicpID8gWy4uLmVycm9ycywgLi4uW3BhdHRlcm5FcnJvcl1dIDogWy4uLmVycm9yc107XHJcblxyXG4gICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgKGNvbnRyb2wudmFsaWQgfHwgY29udHJvbC5wcmlzdGluZSkpIHtcclxuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnModGhpcy5jdXN0b21QYXNzd29yZEVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcmxSZWRpcmVjdCh1cmwpIHtcclxuICAgIGlzRXh0ZXJuYWxMaW5rKHVybCkgPyB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKSA6IHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVBcnJheUNoYW5nZXMoZGlmZmVyOiBhbnksIGFycmF5OiBBcnJheTx7IGFycmF5OiBBcnJheTxhbnk+OyBjYWxsYmFjazogYW55IH0+KSB7XHJcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBjaGFuZ2VzID0gZGlmZmVyLmRpZmYoZWxlbWVudC5hcnJheSk7XHJcbiAgICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgZWxlbWVudC5jYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxhbmd1YWdlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlc0xpc3QuZmluZChsYW5ndWFnZUl0ZW0gPT4gbGFuZ3VhZ2VJdGVtLmxhbmd1YWdlID09PSB0aGlzLmxhbmd1YWdlKTtcclxuICAgIHJldHVybiBsYW5ndWFnZT8ubGFuZ3VhZ2UgfHwgdGhpcy5sYW5ndWFnZXNMaXN0WzBdLmxhbmd1YWdlO1xyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1zdXBwb3J0XCIgKGNsaWNrKT1cImFjdGl2YXRlU3VwcG9ydCgpXCIgW2hpZGRlbl09XCIhc3VwcG9ydFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWhlbHBcIj48L3NwYW4+XHJcbiAge3sgcGFnZUxvZ2luTGl0ZXJhbHM/LnN1cHBvcnQgfX1cclxuPC9idXR0b24+XHJcblxyXG48cG8tcGFnZS1iYWNrZ3JvdW5kXHJcbiAgI3BhZ2VMb2dpblxyXG4gIFtwLXNob3ctc2VsZWN0LWxhbmd1YWdlXT1cInNob3dMYW5ndWFnZVwiXHJcbiAgW3AtbGFuZ3VhZ2VzXT1cImxhbmd1YWdlc0xpc3RcIlxyXG4gIFtwLWluaXRpYWwtbGFuZ3VhZ2VdPVwiaW5pdGlhbFNlbGVjdExhbmd1YWdlXCJcclxuICBbcC1iYWNrZ3JvdW5kXT1cImJhY2tncm91bmRcIlxyXG4gIFtwLWhpZ2hsaWdodC1pbmZvXT1cInBhZ2VMb2dpbkxpdGVyYWxzLmhpZ2hsaWdodEluZm9cIlxyXG4gIFtwLWxvZ29dPVwibG9nb1wiXHJcbiAgW3Atc2Vjb25kYXJ5LWxvZ29dPVwic2Vjb25kYXJ5TG9nb1wiXHJcbiAgKHAtc2VsZWN0ZWQtbGFuZ3VhZ2UpPVwib25TZWxlY3RlZExhbmd1YWdlKCRldmVudClcIlxyXG4+XHJcbiAgPGhlYWRlciBjbGFzcz1cInBvLXBhZ2UtbG9naW4taGVhZGVyXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJwby1tYi1tZC00IHBvLW1iLXNtLTFcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbG9naW4taGVhZGVyLXByb2R1Y3QtbmFtZVwiPnt7IHByb2R1Y3ROYW1lIH19PC9kaXY+XHJcbiAgICAgIDxwby10YWcgKm5nSWY9XCJlbnZpcm9ubWVudFwiIHAtdHlwZT1cIndhcm5pbmdcIiBbcC12YWx1ZV09XCJlbnZpcm9ubWVudFwiPiA8L3BvLXRhZz5cclxuICAgIDwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1sb2dpbi1oZWFkZXItd2VsY29tZSBwby1tYi1tZC00IHBvLW1iLXNtLTJcIj57eyBwYWdlTG9naW5MaXRlcmFscy53ZWxjb21lIH19PC9kaXY+XHJcbiAgPC9oZWFkZXI+XHJcblxyXG4gIDxmb3JtICNsb2dpbkZvcm09XCJuZ0Zvcm1cIiBjbGFzcz1cInBvLXBhZ2UtbG9naW4tZm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tbGctMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1sb2dpbi1oaW50IHBvLXBhZ2UtbG9naW4taW5mby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxwby1sb2dpblxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLXBhZ2UtbG9naW4taW5mby1maWVsZFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5wby1wYWdlLWxvZ2luLWluZm8tZmllbGQtZHluYW1pY109XCJcclxuICAgICAgICAgICAgICAhcGFnZUxvZ2luTGl0ZXJhbHMubG9naW5IaW50ICYmICFwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJIaW50XHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsb2dpblwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5cIlxyXG4gICAgICAgICAgICBwLWF1dG8tZm9jdXNcclxuICAgICAgICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICAgICAgICBbcC1sYWJlbF09XCJwYWdlTG9naW5MaXRlcmFscy5sb2dpbkxhYmVsXCJcclxuICAgICAgICAgICAgW3AtcGF0dGVybl09XCJsb2dpblBhdHRlcm5cIlxyXG4gICAgICAgICAgICBbcC1wbGFjZWhvbGRlcl09XCJwYWdlTG9naW5MaXRlcmFscy5sb2dpblBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlUG9wb3ZlcigpXCJcclxuICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cImxvZ2luRm9ybS52YWxpZCAmJiBvbkxvZ2luU3VibWl0KClcIlxyXG4gICAgICAgICAgICAocC1jaGFuZ2UtbW9kZWwpPVwiY2hhbmdlTG9naW5Nb2RlbCgpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcG8tbG9naW4+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAqbmdJZj1cInBhZ2VMb2dpbkxpdGVyYWxzLmxvZ2luSGludCB8fCBwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJIaW50XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwby1wYWdlLWxvZ2luLWluZm8taWNvbi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MucG8tcGFnZS1sb2dpbi1pbmZvLWljb24tY29udGFpbmVyLWR5bmFtaWNdPVwiXHJcbiAgICAgICAgICAgICAgIXBhZ2VMb2dpbkxpdGVyYWxzLmxvZ2luSGludCAmJiAhcGFnZUxvZ2luTGl0ZXJhbHMucmVtZW1iZXJVc2VySGludFxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICpuZ0lmPVwicGFnZUxvZ2luTGl0ZXJhbHMubG9naW5IaW50XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cInBvLWljb24gcG8tZmllbGQtaWNvbiBwby1pY29uLWluZm9cIlxyXG4gICAgICAgICAgICAgIHAtdG9vbHRpcC1wb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICBbcC10b29sdGlwXT1cInBhZ2VMb2dpbkxpdGVyYWxzLmxvZ2luSGludFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItYm90dG9tIHBvLWZpZWxkLWNvbnRhaW5lci1lcnJvci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGVycm9yIG9mIGFsbExvZ2luRXJyb3JzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItYm90dG9tLXRleHQtZXJyb3IgcG8tZmllbGQtY29udGFpbmVyLWVycm9yLWl0ZW1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1leGNsYW1hdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItZXJyb3ItdGV4dFwiPnt7IGVycm9yIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLWxnLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbG9naW4tcGFzc3dvcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cG8tcGFzc3dvcmRcclxuICAgICAgICAgICAgY2xhc3M9XCJwby1wYWdlLWxvZ2luLWZpZWxkLXNpemUgcG8tcGFnZS1sb2dpbi1wYXNzd29yZC1pdGVtXCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXBhZ2UtbG9naW4tZmllbGQtc2l6ZS1keW5hbWljXT1cIlxyXG4gICAgICAgICAgICAgICFwYWdlTG9naW5MaXRlcmFscy5sb2dpbkhpbnQgJiYgIXBhZ2VMb2dpbkxpdGVyYWxzLnJlbWVtYmVyVXNlckhpbnRcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgICAgICAgW3AtbGFiZWxdPVwicGFnZUxvZ2luTGl0ZXJhbHMucGFzc3dvcmRMYWJlbFwiXHJcbiAgICAgICAgICAgIFtwLXBhdHRlcm5dPVwicGFzc3dvcmRQYXR0ZXJuXCJcclxuICAgICAgICAgICAgW3AtcGxhY2Vob2xkZXJdPVwicGFnZUxvZ2luTGl0ZXJhbHMucGFzc3dvcmRQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbG9zZVBvcG92ZXIoKVwiXHJcbiAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJsb2dpbkZvcm0udmFsaWQgJiYgb25Mb2dpblN1Ym1pdCgpXCJcclxuICAgICAgICAgICAgKHAtY2hhbmdlLW1vZGVsKT1cImNoYW5nZVBhc3N3b3JkTW9kZWwoKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXBhc3N3b3JkPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAqbmdJZj1cInBhZ2VMb2dpbkxpdGVyYWxzLmxvZ2luSGludCB8fCBwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJIaW50XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwby1wYWdlLWxvZ2luLXBhc3N3b3JkLWl0ZW0gcG8tcGFnZS1sb2dpbi1wYXNzd29yZC1wb3BvdmVyLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwby1wYWdlLWxvZ2luLXBvcG92ZXJcclxuICAgICAgICAgICAgICAqbmdJZj1cInNob3dFeGNlZWRlZEF0dGVtcHRzV2FybmluZyAmJiBleGNlZWRlZEF0dGVtcHRzV2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgW3AtbGl0ZXJhbHNdPVwicGFnZUxvZ2luTGl0ZXJhbHNcIlxyXG4gICAgICAgICAgICAgIFtwLXJlY292ZXJ5XT1cInJlY292ZXJ5XCJcclxuICAgICAgICAgICAgICBbcC1yZW1haW5pbmctYXR0ZW1wdHNdPVwiZXhjZWVkZWRBdHRlbXB0c1dhcm5pbmdcIlxyXG4gICAgICAgICAgICAgIChwLWZvcmdvdC1wYXNzd29yZCk9XCJvcGVuVXJsKCRldmVudClcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvcG8tcGFnZS1sb2dpbi1wb3BvdmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20gcG8tZmllbGQtY29udGFpbmVyLWVycm9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgYWxsUGFzc3dvcmRFcnJvcnNcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20tdGV4dC1lcnJvciBwby1maWVsZC1jb250YWluZXItZXJyb3ItaXRlbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLWV4Y2xhbWF0aW9uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvLWZpZWxkLWNvbnRhaW5lci1lcnJvci10ZXh0XCI+e3sgZXJyb3IgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8cG8taW5wdXRcclxuICAgICAgICAqbmdJZj1cImN1c3RvbUZpZWxkICYmIGN1c3RvbUZpZWxkVHlwZSA9PT0gJ2lucHV0J1wiXHJcbiAgICAgICAgW2NsYXNzLnBvLXBhZ2UtbG9naW4tZmllbGQtc2l6ZS1keW5hbWljXT1cIiFwYWdlTG9naW5MaXRlcmFscy5sb2dpbkhpbnQgJiYgIXBhZ2VMb2dpbkxpdGVyYWxzLnJlbWVtYmVyVXNlckhpbnRcIlxyXG4gICAgICAgIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1maWVsZC1zaXplIHBvLWxnLTEyXCJcclxuICAgICAgICBuYW1lPVwiY3VzdG9tRmllbGRJbnB1dFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJjdXN0b21GaWVsZE9iamVjdC52YWx1ZVwiXHJcbiAgICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICAgIFtwLWVycm9yLXBhdHRlcm5dPVwiY3VzdG9tRmllbGRPYmplY3QuZXJyb3JQYXR0ZXJuIHx8IHBhZ2VMb2dpbkxpdGVyYWxzLmN1c3RvbUZpZWxkRXJyb3JQYXR0ZXJuXCJcclxuICAgICAgICBbcC1wYXR0ZXJuXT1cImN1c3RvbUZpZWxkT2JqZWN0LnBhdHRlcm5cIlxyXG4gICAgICAgIFtwLXBsYWNlaG9sZGVyXT1cImN1c3RvbUZpZWxkT2JqZWN0LnBsYWNlaG9sZGVyIHx8IHBhZ2VMb2dpbkxpdGVyYWxzLmN1c3RvbUZpZWxkUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJsb2dpbkZvcm0udmFsaWQgJiYgb25Mb2dpblN1Ym1pdCgpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWlucHV0PlxyXG5cclxuICAgICAgPHBvLWNvbWJvXHJcbiAgICAgICAgKm5nSWY9XCJjdXN0b21GaWVsZCAmJiBjdXN0b21GaWVsZFR5cGUgPT09ICdjb21ibydcIlxyXG4gICAgICAgIFtjbGFzcy5wby1wYWdlLWxvZ2luLWZpZWxkLXNpemUtZHluYW1pY109XCIhcGFnZUxvZ2luTGl0ZXJhbHMubG9naW5IaW50ICYmICFwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJIaW50XCJcclxuICAgICAgICBjbGFzcz1cInBvLXBhZ2UtbG9naW4tZmllbGQtc2l6ZSBwby1sZy0xMlwiXHJcbiAgICAgICAgbmFtZT1cImN1c3RvbUZpZWxkQ29tYm9cIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiY3VzdG9tRmllbGRPYmplY3QudmFsdWVcIlxyXG4gICAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgICBbcC1maWVsZC12YWx1ZV09XCJjdXN0b21GaWVsZE9iamVjdC5maWVsZFZhbHVlXCJcclxuICAgICAgICBbcC1maWx0ZXItc2VydmljZV09XCJjdXN0b21GaWVsZE9iamVjdC51cmxcIlxyXG4gICAgICAgIFtwLXBsYWNlaG9sZGVyXT1cImN1c3RvbUZpZWxkT2JqZWN0LnBsYWNlaG9sZGVyIHx8IHBhZ2VMb2dpbkxpdGVyYWxzLmN1c3RvbUZpZWxkUGxhY2Vob2xkZXJcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tY29tYm8+XHJcblxyXG4gICAgICA8cG8tc2VsZWN0XHJcbiAgICAgICAgKm5nSWY9XCJjdXN0b21GaWVsZCAmJiBjdXN0b21GaWVsZFR5cGUgPT09ICdzZWxlY3QnXCJcclxuICAgICAgICBbY2xhc3MucG8tcGFnZS1sb2dpbi1maWVsZC1zaXplLWR5bmFtaWNdPVwiIXBhZ2VMb2dpbkxpdGVyYWxzLmxvZ2luSGludCAmJiAhcGFnZUxvZ2luTGl0ZXJhbHMucmVtZW1iZXJVc2VySGludFwiXHJcbiAgICAgICAgY2xhc3M9XCJwby1wYWdlLWxvZ2luLWZpZWxkLXNpemUgcG8tbGctMTJcIlxyXG4gICAgICAgIG5hbWU9XCJjdXN0b21GaWVsZFNlbGVjdFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJjdXN0b21GaWVsZE9iamVjdC52YWx1ZVwiXHJcbiAgICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICAgIFtwLXBsYWNlaG9sZGVyXT1cImN1c3RvbUZpZWxkT2JqZWN0LnBsYWNlaG9sZGVyIHx8IHBhZ2VMb2dpbkxpdGVyYWxzLmN1c3RvbUZpZWxkUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtwLW9wdGlvbnNdPVwiY3VzdG9tRmllbGRPYmplY3Qub3B0aW9uc1wiXHJcbiAgICAgID5cclxuICAgICAgPC9wby1zZWxlY3Q+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tbGctMTJcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWhpZGVSZW1lbWJlclVzZXJcIiBjbGFzcz1cInBvLXBhZ2UtbG9naW4taGludCBwby1wYWdlLWxvZ2luLWluZm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cG8tc3dpdGNoXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1pbmZvLWZpZWxkIHBvLWxnLTcgcG8tb2Zmc2V0LWxnLTUgcG8tb2Zmc2V0LXhsLTVcIlxyXG4gICAgICAgICAgICBuYW1lPVwicmVtZW1iZXJVc2VyXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJyZW1lbWJlclVzZXJcIlxyXG4gICAgICAgICAgICBwLWxhYmVsLXBvc2l0aW9uPVwiMVwiXHJcbiAgICAgICAgICAgIFtwLWxhYmVsLW9mZl09XCJwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJcIlxyXG4gICAgICAgICAgICBbcC1sYWJlbC1vbl09XCJwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJcIlxyXG4gICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwibG9naW5Gb3JtLnZhbGlkICYmIG9uTG9naW5TdWJtaXQoKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BvLXN3aXRjaD5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICpuZ0lmPVwicGFnZUxvZ2luTGl0ZXJhbHMubG9naW5IaW50IHx8IHBhZ2VMb2dpbkxpdGVyYWxzLnJlbWVtYmVyVXNlckhpbnRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLXBhZ2UtbG9naW4taW5mby1pY29uLWNvbnRhaW5lciBwby1wYWdlLWxvZ2luLWluZm8taWNvbi1yZW1lbWJlci11c2VyXCJcclxuICAgICAgICAgICAgW2NsYXNzLnBvLXBhZ2UtbG9naW4taW5mby1pY29uLWNvbnRhaW5lci1keW5hbWljXT1cIiFwYWdlTG9naW5MaXRlcmFscy5yZW1lbWJlclVzZXJIaW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAqbmdJZj1cInBhZ2VMb2dpbkxpdGVyYWxzLnJlbWVtYmVyVXNlckhpbnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicG8taWNvbiBwby1maWVsZC1pY29uIHBvLWljb24taW5mb1wiXHJcbiAgICAgICAgICAgICAgcC10b29sdGlwLXBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIFtwLXRvb2x0aXBdPVwicGFnZUxvZ2luTGl0ZXJhbHMucmVtZW1iZXJVc2VySGludFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHBvLWJ1dHRvblxyXG4gICAgICAgIFtjbGFzcy5wby1wYWdlLWxvZ2luLWJ1dHRvbi1keW5hbWljXT1cIiFwYWdlTG9naW5MaXRlcmFscy5sb2dpbkhpbnQgJiYgIXBhZ2VMb2dpbkxpdGVyYWxzLnJlbWVtYmVyVXNlckhpbnRcIlxyXG4gICAgICAgIGNsYXNzPVwicG8tbGctMTIgcG8tcGFnZS1sb2dpbi1idXR0b24gcG8tcGFnZS1sb2dpbi1maWVsZC1zaXplXCJcclxuICAgICAgICBwLWtpbmQ9XCJwcmltYXJ5XCJcclxuICAgICAgICBbcC1kaXNhYmxlZF09XCJsb2dpbkZvcm0uaW52YWxpZFwiXHJcbiAgICAgICAgW3AtbGFiZWxdPVwibG9hZGluZyA/IHBhZ2VMb2dpbkxpdGVyYWxzLnN1Ym1pdHRlZExhYmVsIDogcGFnZUxvZ2luTGl0ZXJhbHMuc3VibWl0TGFiZWxcIlxyXG4gICAgICAgIFtwLWxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICAgICAgKHAtY2xpY2spPVwib25Mb2dpblN1Ym1pdCgpXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWJ1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJyZWNvdmVyeVwiIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1yZWNvdmVyeS1saW5rXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJwby1mb250LXRleHQtbGFyZ2UtYm9sZFwiIChjbGljayk9XCJvcGVuVXJsKHJlY292ZXJ5KVwiPnt7IHBhZ2VMb2dpbkxpdGVyYWxzLmZvcmdvdFBhc3N3b3JkIH19PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJyZWdpc3RlclVybFwiIGNsYXNzPVwicG8tcGFnZS1sb2dpbi1yZWdpc3Rlci1saW5rXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJwby1mb250LXRleHQtbGFyZ2UtYm9sZFwiIChjbGljayk9XCJvcGVuVXJsKHJlZ2lzdGVyVXJsKVwiPnt7IHBhZ2VMb2dpbkxpdGVyYWxzLnJlZ2lzdGVyVXJsIH19PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC9wby1wYWdlLWJhY2tncm91bmQ+XHJcbiJdfQ==