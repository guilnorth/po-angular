import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModalComponent, poLocaleDefault } from '@po-ui/ng-components';
import { isExternalLink, isTypeof } from '../../utils/util';
import { PoModalPasswordRecoveryComponent } from '../po-modal-password-recovery/po-modal-password-recovery.component';
import { PoModalPasswordRecoveryType } from '../po-modal-password-recovery/enums/po-modal-password-recovery-type.enum';
import { PoPageChangePasswordBaseComponent } from './po-page-change-password-base.component';
import { poPageChangePasswordLiterals } from './literals/i18n/po-page-change-password-literals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./po-page-change-password.service";
import * as i3 from "@po-ui/ng-components";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "../po-page-background/po-page-background.component";
const _c0 = ["pageChangePassword"];
const _c1 = ["passwordForm"];
function PoPageChangePasswordComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "po-password", 30);
    i0.ɵɵlistener("ngModelChange", function PoPageChangePasswordComponent_div_13_Template_po_password_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.currentPassword = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.currentPassword)("p-label", ctx_r2.literals.currentPassword);
} }
function PoPageChangePasswordComponent_div_14_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r8.recovery);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.literals.forgotPassword, " ");
} }
function PoPageChangePasswordComponent_div_14_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r9.recovery, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.literals.forgotPassword, " ");
} }
function PoPageChangePasswordComponent_div_14_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 37);
    i0.ɵɵlistener("click", function PoPageChangePasswordComponent_div_14_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onForgotPasswordClick(ctx_r11.recovery)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.literals.forgotPassword, " ");
} }
function PoPageChangePasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, PoPageChangePasswordComponent_div_14_a_1_Template, 2, 2, "a", 32);
    i0.ɵɵtemplate(2, PoPageChangePasswordComponent_div_14_a_2_Template, 2, 2, "a", 33);
    i0.ɵɵtemplate(3, PoPageChangePasswordComponent_div_14_a_3_Template, 2, 1, "a", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.recoveryUrlType === "internalLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.recoveryUrlType === "externalLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.recoveryUrlType);
} }
function PoPageChangePasswordComponent_div_19_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 40);
    i0.ɵɵelement(1, "span", 43);
    i0.ɵɵelementStart(2, "p", 44);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const requirement_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r13.validateRequirement(requirement_r14) ? "po-icon-ok po-page-change-password-required-ok" : "po-icon-minus po-page-change-password-required-minus");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", requirement_r14.requirement, " ");
} }
function PoPageChangePasswordComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "po-container")(2, "ul", 39)(3, "li", 40)(4, "p", 41);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, PoPageChangePasswordComponent_div_19_li_6_Template, 4, 2, "li", 42);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.literals == null ? null : ctx_r4.literals.requirements, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.requirements);
} }
function PoPageChangePasswordComponent_po_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 45);
    i0.ɵɵlistener("p-click", function PoPageChangePasswordComponent_po_button_38_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.navigateTo(ctx_r15.urlBack)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-label", ctx_r5.literals.backButton);
} }
const _c2 = function (a0) { return { "po-offset-md-3 po-offset-lg-3 po-offset-xl-3": a0 }; };
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
export class PoPageChangePasswordComponent extends PoPageChangePasswordBaseComponent {
    constructor(activatedRoute, route, router, service, poComponentInjector, languageService, viewRef) {
        super();
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.router = router;
        this.service = service;
        this.poComponentInjector = poComponentInjector;
        this.literals = poPageChangePasswordLiterals[poLocaleDefault];
        this.modalAction = {
            action: this.navigateTo.bind(this, this.urlHome),
            label: this.literals.enterSystemButton
        };
        this.componentRef = null;
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poPageChangePasswordLiterals[poLocaleDefault],
            ...poPageChangePasswordLiterals[language]
        };
    }
    ngAfterViewInit() {
        if (this.urlNewPassword) {
            this.subscribeToTokenParameter();
        }
    }
    ngOnDestroy() {
        if (this.newPasswordSubscription) {
            this.newPasswordSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
    }
    navigateTo(url) {
        isExternalLink(url) ? window.open(url) : this.router.navigate([url || '/']);
    }
    onForgotPasswordClick(recovery) {
        if (isTypeof(recovery, 'function')) {
            recovery();
        }
        else {
            this.createModalPasswordRecoveryComponent(recovery);
        }
    }
    onLoginSubmit() {
        const form = this.getLoginForm();
        if (this.urlNewPassword) {
            this.postUrlNewPassword(form);
        }
        else if (this.submit && this.submit.observers.length) {
            this.emitSubmit(form);
        }
    }
    /**
     * Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `p-url-home`
     */
    openConfirmation() {
        this.modal.open();
    }
    validatePassword() {
        const controls = this.passwordForm.form.controls;
        const controlConfirmPassword = controls['confirmPassword'];
        const controlNewPassword = controls['newPassword'];
        if (!this.newPassword) {
            this.setFormErrors({ 'required': true }, [controlNewPassword]);
        }
        else if (!this.confirmPassword) {
            this.setFormErrors({ 'required': true }, [controlConfirmPassword]);
        }
        else if (this.newPassword && this.confirmPassword && this.newPassword !== this.confirmPassword) {
            this.setFormErrors({ 'equalPassword': true }, [controlNewPassword, controlConfirmPassword]);
        }
        else {
            this.setFormErrors(null, [controlConfirmPassword, controlNewPassword]);
        }
        if (this.requirements.length &&
            this.requirements.find(requirement => this.validateRequirement(requirement) === false)) {
            this.setFormErrors({ 'requirement': true }, [controlNewPassword]);
        }
    }
    validateRequirement(requirement) {
        return typeof requirement.status === 'function' ? requirement.status(this.newPassword) : requirement.status;
    }
    checkingForMetadataProperty(object, property) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            return object[property];
        }
    }
    checkingForRouteMetadata(data) {
        if (Object.keys(data).length !== 0) {
            this.urlNewPassword = this.checkingForMetadataProperty(data, 'serviceApi') || this.urlNewPassword;
            this.recovery = this.checkingForMetadataProperty(data, 'recovery') || this.recovery;
            this.hideCurrentPassword =
                this.checkingForMetadataProperty(data, 'hideCurrentPassword') || this.hideCurrentPassword;
        }
    }
    createModalPasswordRecoveryComponent(recovery) {
        if (this.componentRef) {
            this.poComponentInjector.destroyComponentInApplication(this.componentRef);
        }
        this.componentRef = this.poComponentInjector.createComponentInApplication(PoModalPasswordRecoveryComponent);
        this.componentRef.instance.recovery = recovery.url;
        this.componentRef.instance.contactEmail = recovery.contactMail;
        this.componentRef.instance.phoneMask = recovery.phoneMask;
        this.componentRef.instance.type = recovery.type || PoModalPasswordRecoveryType.Email;
        this.componentRef.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.componentRef.instance.open();
        });
    }
    emitSubmit(form) {
        this.submit.emit(form);
    }
    getLoginForm() {
        return {
            currentPassword: this.currentPassword,
            newPassword: this.newPassword
        };
    }
    postUrlNewPassword(form) {
        form['token'] = this.token;
        this.service.post(this.urlNewPassword, form).subscribe(response => {
            if (response.status === 204) {
                this.openConfirmation();
            }
        });
    }
    setFormErrors(error, controls) {
        controls.forEach(control => {
            control.setErrors(error);
        });
    }
    subscribeToTokenParameter() {
        this.route.queryParams.subscribe(params => {
            const token = params['token'];
            if (token) {
                this.token = token;
            }
        });
    }
}
PoPageChangePasswordComponent.ɵfac = function PoPageChangePasswordComponent_Factory(t) { return new (t || PoPageChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.PoPageChangePasswordService), i0.ɵɵdirectiveInject(i3.PoComponentInjectorService), i0.ɵɵdirectiveInject(i3.PoLanguageService), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
PoPageChangePasswordComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageChangePasswordComponent, selectors: [["po-page-change-password"]], viewQuery: function PoPageChangePasswordComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoModalComponent, 7);
        i0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
        i0.ɵɵviewQuery(_c1, 7, NgForm);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageChangePassword = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.passwordForm = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 43, vars: 25, consts: [[1, "po-page-change-password-wrapper"], ["pageChangePassword", ""], [1, "po-page-change-password-container"], [1, "po-page-change-password", 3, "p-logo", "p-secondary-logo"], [1, "po-page-blocked-user-header", "po-row"], [1, "po-md-12"], [1, "po-md-12", "po-text-center", "po-font-text"], ["passwordForm", "ngForm"], [1, "po-row", "po-mt-3", "po-mt-sm-1"], [1, "po-md-6", 3, "ngClass"], [4, "ngIf"], ["class", "po-text-center po-mb-sm-1 po-mb-2", 4, "ngIf"], ["name", "newPassword", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model"], ["name", "confirmPassword", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model"], ["class", "po-md-6 po-page-change-password-required-container", 4, "ngIf"], [1, "po-sm-12"], [1, "po-page-change-password-tips", "po-row"], [1, "po-md-2", "po-mr-3"], ["alt", "Blocked user image", "src", "./assets/images/big-lock.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], [1, "po-md-9", "po-page-change-password-tips-text"], [1, "po-font-text-bold", "po-pb-1"], [1, "po-font-text-small"], [1, "po-row", "po-pb-1"], [1, "po-page-change-password-buttons", "po-row"], [1, "po-sm-12", "po-mobile-only"], ["class", "po-sm-6 po-mb-sm-1", 3, "p-label", "p-click", 4, "ngIf"], ["p-kind", "primary", 3, "ngClass", "p-disabled", "p-label", "p-click"], ["p-hide-close", "", "p-size", "auto", 3, "p-primary-action", "p-title"], [1, "po-text-center"], ["alt", "Blocked user image", "src", "./assets/images/success.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], ["name", "currentPassword", "p-required", "", 3, "ngModel", "p-label", "ngModelChange"], [1, "po-text-center", "po-mb-sm-1", "po-mb-2"], ["class", "po-font-text-bold po-page-change-password-forgot-password", 3, "routerLink", 4, "ngIf"], ["class", "po-font-text-bold po-page-change-password-forgot-password", 3, "href", 4, "ngIf"], ["class", "po-font-text-bold po-page-change-password-forgot-password po-clickable", 3, "click", 4, "ngIf"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "routerLink"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "href"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", "po-clickable", 3, "click"], [1, "po-md-6", "po-page-change-password-required-container"], [1, "po-page-change-password-required-list"], [1, "po-page-change-password-required-item"], [1, "po-mb-1", "po-font-text-bold", "po-page-change-password-required-title"], ["class", "po-page-change-password-required-item", 4, "ngFor", "ngForOf"], [1, "po-icon", "po-page-change-password-required-icon", 3, "ngClass"], [1, "po-page-change-password-required-text", "po-font-text"], [1, "po-sm-6", "po-mb-sm-1", 3, "p-label", "p-click"]], template: function PoPageChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1)(2, "div", 2)(3, "po-page-background", 3)(4, "div", 4)(5, "div", 5);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "form", null, 7)(11, "div", 8)(12, "div", 9);
        i0.ɵɵtemplate(13, PoPageChangePasswordComponent_div_13_Template, 2, 2, "div", 10);
        i0.ɵɵtemplate(14, PoPageChangePasswordComponent_div_14_Template, 4, 3, "div", 11);
        i0.ɵɵelementStart(15, "div")(16, "po-password", 12);
        i0.ɵɵlistener("ngModelChange", function PoPageChangePasswordComponent_Template_po_password_ngModelChange_16_listener($event) { return ctx.newPassword = $event; })("p-change-model", function PoPageChangePasswordComponent_Template_po_password_p_change_model_16_listener() { return ctx.validatePassword(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div")(18, "po-password", 13);
        i0.ɵɵlistener("ngModelChange", function PoPageChangePasswordComponent_Template_po_password_ngModelChange_18_listener($event) { return ctx.confirmPassword = $event; })("p-change-model", function PoPageChangePasswordComponent_Template_po_password_p_change_model_18_listener() { return ctx.validatePassword(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(19, PoPageChangePasswordComponent_div_19_Template, 7, 2, "div", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(20, "po-divider", 15);
        i0.ɵɵelementStart(21, "div", 16)(22, "div", 17);
        i0.ɵɵelement(23, "img", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 19)(25, "div", 20);
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 21)(28, "div", 22);
        i0.ɵɵtext(29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 22);
        i0.ɵɵtext(31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div", 22);
        i0.ɵɵtext(33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 22);
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(36, "div", 23);
        i0.ɵɵelement(37, "po-divider", 24);
        i0.ɵɵtemplate(38, PoPageChangePasswordComponent_po_button_38_Template, 1, 1, "po-button", 25);
        i0.ɵɵelementStart(39, "po-button", 26);
        i0.ɵɵlistener("p-click", function PoPageChangePasswordComponent_Template_po_button_p_click_39_listener() { return ctx.onLoginSubmit(); });
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(40, "po-modal", 27)(41, "div", 28);
        i0.ɵɵelement(42, "img", 29);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(10);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.literals.createNewPassword);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.literals.createNewPasswordPhrase, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c2, !ctx.showRequirements));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideCurrentPassword && ctx.recovery);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.newPassword)("p-label", ctx.literals.newPassword);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.confirmPassword)("p-label", ctx.literals.confirmPassword);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showRequirements);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(ctx.literals.safetyTips);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.literals.safetyTipsPhrase);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("\u2022 ", ctx.literals.safetyTipsFirst, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("\u2022 ", ctx.literals.safetyTipsSecond, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("\u2022 ", ctx.literals.safetyTipsThird, "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.hideCurrentPassword ? "po-md-12" : "po-sm-6")("p-disabled", _r1.invalid)("p-label", ctx.literals.saveButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-primary-action", ctx.modalAction)("p-title", ctx.hideCurrentPassword ? ctx.literals.passwordSuccessfullyCreated : ctx.literals.passwordSuccessfullyUpdated);
    } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i1.RouterLinkWithHref, i3.PoButtonComponent, i3.PoContainerComponent, i3.PoDividerComponent, i3.PoPasswordComponent, i3.PoModalComponent, i6.PoPageBackgroundComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordComponent, [{
        type: Component,
        args: [{ selector: 'po-page-change-password', template: "<div class=\"po-page-change-password-wrapper\" #pageChangePassword>\r\n  <div class=\"po-page-change-password-container\">\r\n    <po-page-background class=\"po-page-change-password\" [p-logo]=\"logo\" [p-secondary-logo]=\"secondaryLogo\">\r\n      <div class=\"po-page-blocked-user-header po-row\">\r\n        <div class=\"po-md-12\">{{ literals.createNewPassword }}</div>\r\n        <div class=\"po-md-12 po-text-center po-font-text\">\r\n          {{ literals.createNewPasswordPhrase }}\r\n        </div>\r\n      </div>\r\n\r\n      <form #passwordForm=\"ngForm\">\r\n        <div class=\"po-row po-mt-3 po-mt-sm-1\">\r\n          <div class=\"po-md-6\" [ngClass]=\"{ 'po-offset-md-3 po-offset-lg-3 po-offset-xl-3': !showRequirements }\">\r\n            <div *ngIf=\"!hideCurrentPassword\">\r\n              <po-password\r\n                name=\"currentPassword\"\r\n                [(ngModel)]=\"currentPassword\"\r\n                p-required\r\n                [p-label]=\"literals.currentPassword\"\r\n              >\r\n              </po-password>\r\n            </div>\r\n            <div *ngIf=\"!hideCurrentPassword && recovery\" class=\"po-text-center po-mb-sm-1 po-mb-2\">\r\n              <a\r\n                *ngIf=\"recoveryUrlType === 'internalLink'\"\r\n                class=\"po-font-text-bold po-page-change-password-forgot-password\"\r\n                [routerLink]=\"recovery\"\r\n              >\r\n                {{ literals.forgotPassword }}\r\n              </a>\r\n              <a\r\n                *ngIf=\"recoveryUrlType === 'externalLink'\"\r\n                class=\"po-font-text-bold po-page-change-password-forgot-password\"\r\n                [href]=\"recovery\"\r\n              >\r\n                {{ literals.forgotPassword }}\r\n              </a>\r\n              <a\r\n                *ngIf=\"!recoveryUrlType\"\r\n                class=\"po-font-text-bold po-page-change-password-forgot-password po-clickable\"\r\n                (click)=\"onForgotPasswordClick(recovery)\"\r\n              >\r\n                {{ literals.forgotPassword }}\r\n              </a>\r\n            </div>\r\n            <div>\r\n              <po-password\r\n                name=\"newPassword\"\r\n                [(ngModel)]=\"newPassword\"\r\n                p-required\r\n                [p-label]=\"literals.newPassword\"\r\n                (p-change-model)=\"validatePassword()\"\r\n              >\r\n              </po-password>\r\n            </div>\r\n            <div>\r\n              <po-password\r\n                name=\"confirmPassword\"\r\n                [(ngModel)]=\"confirmPassword\"\r\n                p-required\r\n                [p-label]=\"literals.confirmPassword\"\r\n                (p-change-model)=\"validatePassword()\"\r\n              >\r\n              </po-password>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showRequirements\" class=\"po-md-6 po-page-change-password-required-container\">\r\n            <po-container>\r\n              <ul class=\"po-page-change-password-required-list\">\r\n                <li class=\"po-page-change-password-required-item\">\r\n                  <p class=\"po-mb-1 po-font-text-bold po-page-change-password-required-title\">\r\n                    {{ literals?.requirements }}\r\n                  </p>\r\n                </li>\r\n                <li *ngFor=\"let requirement of requirements\" class=\"po-page-change-password-required-item\">\r\n                  <span\r\n                    class=\"po-icon po-page-change-password-required-icon\"\r\n                    [ngClass]=\"\r\n                      validateRequirement(requirement)\r\n                        ? 'po-icon-ok po-page-change-password-required-ok'\r\n                        : 'po-icon-minus po-page-change-password-required-minus'\r\n                    \"\r\n                  >\r\n                  </span>\r\n                  <p class=\"po-page-change-password-required-text po-font-text\">\r\n                    {{ requirement.requirement }}\r\n                  </p>\r\n                </li>\r\n              </ul>\r\n            </po-container>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <po-divider class=\"po-sm-12\"></po-divider>\r\n\r\n      <div class=\"po-page-change-password-tips po-row\">\r\n        <div class=\"po-md-2 po-mr-3\">\r\n          <img\r\n            class=\"po-page-change-password-lock-image po-mb-3\"\r\n            alt=\"Blocked user image\"\r\n            src=\"./assets/images/big-lock.svg\"\r\n          />\r\n        </div>\r\n        <div class=\"po-md-9 po-page-change-password-tips-text\">\r\n          <div class=\"po-font-text-bold po-pb-1\">{{ literals.safetyTips }}</div>\r\n          <div class=\"po-font-text-small\">\r\n            <div class=\"po-row po-pb-1\">{{ literals.safetyTipsPhrase }}</div>\r\n            <div class=\"po-row po-pb-1\">\u2022 {{ literals.safetyTipsFirst }}</div>\r\n            <div class=\"po-row po-pb-1\">\u2022 {{ literals.safetyTipsSecond }}</div>\r\n            <div class=\"po-row po-pb-1\">\u2022 {{ literals.safetyTipsThird }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"po-page-change-password-buttons po-row\">\r\n        <po-divider class=\"po-sm-12 po-mobile-only\"></po-divider>\r\n\r\n        <po-button\r\n          *ngIf=\"!hideCurrentPassword\"\r\n          class=\"po-sm-6 po-mb-sm-1\"\r\n          [p-label]=\"literals.backButton\"\r\n          (p-click)=\"navigateTo(urlBack)\"\r\n        >\r\n        </po-button>\r\n\r\n        <po-button\r\n          [ngClass]=\"hideCurrentPassword ? 'po-md-12' : 'po-sm-6'\"\r\n          p-kind=\"primary\"\r\n          [p-disabled]=\"passwordForm.invalid\"\r\n          [p-label]=\"literals.saveButton\"\r\n          (p-click)=\"onLoginSubmit()\"\r\n        >\r\n        </po-button>\r\n      </div>\r\n    </po-page-background>\r\n  </div>\r\n</div>\r\n\r\n<po-modal\r\n  [p-primary-action]=\"modalAction\"\r\n  p-hide-close\r\n  p-size=\"auto\"\r\n  [p-title]=\"hideCurrentPassword ? literals.passwordSuccessfullyCreated : literals.passwordSuccessfullyUpdated\"\r\n>\r\n  <div class=\"po-text-center\">\r\n    <img\r\n      alt=\"Blocked user image\"\r\n      class=\"po-page-change-password-lock-image po-mb-3\"\r\n      src=\"./assets/images/success.svg\"\r\n    />\r\n  </div>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.PoPageChangePasswordService }, { type: i3.PoComponentInjectorService }, { type: i3.PoLanguageService }, { type: i0.ViewContainerRef }]; }, { modal: [{
            type: ViewChild,
            args: [PoModalComponent, { static: true }]
        }], pageChangePassword: [{
            type: ViewChild,
            args: ['pageChangePassword', { read: ViewContainerRef, static: true }]
        }], passwordForm: [{
            type: ViewChild,
            args: ['passwordForm', { read: NgForm, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFtQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3hDLE9BQU8sRUFJTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDdEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFFdkgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7OztJQ1BwRiwyQkFBa0Msc0JBQUE7SUFHOUIseVBBQTZCO0lBSS9CLGlCQUFjLEVBQUE7OztJQUpaLGVBQTZCO0lBQTdCLGdEQUE2Qiw0Q0FBQTs7O0lBTy9CLDZCQUlDO0lBQ0MsWUFDRjtJQUFBLGlCQUFJOzs7SUFIRiw0Q0FBdUI7SUFFdkIsZUFDRjtJ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QUFpRjtRQUM5RixlQUEwQjtRQUExQiwrQ0FBMEI7UUFTMUIsZUFBc0M7UUFBdEMsK0RBQXNDO1FBMEJ4QyxlQUF5QjtRQUF6Qix5Q0FBeUIscUNBQUE7UUFVekIsZUFBNkI7UUFBN0IsNkNBQTZCLHlDQUFBO1FBUTdCLGVBQXNCO1FBQXRCLDJDQUFzQjtRQXVDVyxlQUF5QjtRQUF6Qiw2Q0FBeUI7UUFFbEMsZUFBK0I7UUFBL0IsbURBQStCO1FBQy9CLGVBQWdDO1FBQWhDLGtFQUFnQztRQUNoQyxlQUFpQztRQUFqQyxtRUFBaUM7UUFDakMsZUFBZ0M7UUFBaEMsa0VBQWdDO1FBUzdELGVBQTBCO1FBQTFCLCtDQUEwQjtRQVEzQixlQUF3RDtRQUF4RCwwRUFBd0QsMkJBQUEsb0NBQUE7UUFhaEUsZUFBZ0M7UUFBaEMsa0RBQWdDLDBIQUFBOzt1RkRqRnJCLDZCQUE2QjtjQUp6QyxTQUFTOzJCQUNFLHlCQUF5QjtxUUFNWSxLQUFLO2tCQUFuRCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUM4QixrQkFBa0I7a0JBQTVGLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNkLFlBQVk7a0JBQXRFLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0NvbXBvbmVudEluamVjdG9yU2VydmljZSxcclxuICBQb0xhbmd1YWdlU2VydmljZSxcclxuICBQb01vZGFsQWN0aW9uLFxyXG4gIFBvTW9kYWxDb21wb25lbnQsXHJcbiAgcG9Mb2NhbGVEZWZhdWx0XHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgaXNFeHRlcm5hbExpbmssIGlzVHlwZW9mIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeUNvbXBvbmVudCB9IGZyb20gJy4uL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5L3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZSB9IGZyb20gJy4uL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5L2VudW1zL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvUGFnZUNoYW5nZVBhc3N3b3JkIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUNoYW5nZVBhc3N3b3JkQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBwb1BhZ2VDaGFuZ2VQYXNzd29yZExpdGVyYWxzIH0gZnJvbSAnLi9saXRlcmFscy9pMThuL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWxpdGVyYWxzJztcclxuaW1wb3J0IHsgUG9QYWdlQ2hhbmdlUGFzc3dvcmRSZWNvdmVyeSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1yZWNvdmVyeS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlcXVpcmVtZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLXJlcXVpcmVtZW50LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUNoYW5nZVBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4vcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvUGFnZUNoYW5nZVBhc3N3b3JkQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtYmFzaWNcIiB0aXRsZT1cIlBPIFBhZ2UgQ2hhbmdlIFBhc3N3b3JkIEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWJhc2ljL3NhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWJhc2ljL3NhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWNoYW5nZS1wYXNzd29yZC1sYWJzXCIgdGl0bGU9XCJQTyBQYWdlIENoYW5nZSBQYXNzd29yZCBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWxhYnMvc2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1sYWJzL3NhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLW1vZGlmeVwiIHRpdGxlPVwiUE8gUGFnZSBDaGFuZ2UgUGFzc3dvcmQgTW9kaWZ5XCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLW1vZGlmeS9zYW1wbGUtcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtbW9kaWZ5LmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtbW9kaWZ5L3NhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1tb2RpZnkuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtY3JlYXRlXCIgdGl0bGU9XCJQTyBQYWdlIENoYW5nZSBQYXNzd29yZCBDcmVhdGVcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtY3JlYXRlL3NhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1jcmVhdGUvc2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWNyZWF0ZS5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWNoYW5nZS1wYXNzd29yZC1yZXF1ZXN0XCIgdGl0bGU9XCJQTyBQYWdlIENoYW5nZSBQYXNzd29yZCBSZXF1ZXN0XCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLXJlcXVlc3Qvc2FtcGxlLXBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1yZXF1ZXN0L3NhbXBsZS1wby1wYWdlLWNoYW5nZS1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wYWdlLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUNoYW5nZVBhc3N3b3JkQ29tcG9uZW50XHJcbiAgZXh0ZW5kcyBQb1BhZ2VDaGFuZ2VQYXNzd29yZEJhc2VDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFBvTW9kYWxDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsOiBQb01vZGFsQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3BhZ2VDaGFuZ2VQYXNzd29yZCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHBhZ2VDaGFuZ2VQYXNzd29yZDogVmlld0NvbnRhaW5lclJlZjtcclxuICBAVmlld0NoaWxkKCdwYXNzd29yZEZvcm0nLCB7IHJlYWQ6IE5nRm9ybSwgc3RhdGljOiB0cnVlIH0pIHBhc3N3b3JkRm9ybTogTmdGb3JtO1xyXG5cclxuICBsaXRlcmFsczoge1xyXG4gICAgYmFja0J1dHRvbjogc3RyaW5nO1xyXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVOZXdQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY3JlYXRlTmV3UGFzc3dvcmRQaHJhc2U6IHN0cmluZztcclxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgZW50ZXJTeXN0ZW1CdXR0b246IHN0cmluZztcclxuICAgIGZvcmdvdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmRTdWNjZXNzZnVsbHlDcmVhdGVkOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZFN1Y2Nlc3NmdWxseVVwZGF0ZWQ6IHN0cmluZztcclxuICAgIHJlcXVpcmVtZW50czogc3RyaW5nO1xyXG4gICAgc2FmZXR5VGlwczogc3RyaW5nO1xyXG4gICAgc2FmZXR5VGlwc1BocmFzZTogc3RyaW5nO1xyXG4gICAgc2FmZXR5VGlwc0ZpcnN0OiBzdHJpbmc7XHJcbiAgICBzYWZldHlUaXBzU2Vjb25kOiBzdHJpbmc7XHJcbiAgICBzYWZldHlUaXBzVGhpcmQ6IHN0cmluZztcclxuICAgIHNhdmVCdXR0b246IHN0cmluZztcclxuICB9ID0gcG9QYWdlQ2hhbmdlUGFzc3dvcmRMaXRlcmFsc1twb0xvY2FsZURlZmF1bHRdO1xyXG5cclxuICBtb2RhbEFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHtcclxuICAgIGFjdGlvbjogdGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgdGhpcy51cmxIb21lKSxcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmVudGVyU3lzdGVtQnV0dG9uXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBuZXdQYXNzd29yZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IFBvUGFnZUNoYW5nZVBhc3N3b3JkU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9Db21wb25lbnRJbmplY3RvcjogUG9Db21wb25lbnRJbmplY3RvclNlcnZpY2UsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4ucG9QYWdlQ2hhbmdlUGFzc3dvcmRMaXRlcmFsc1twb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAuLi5wb1BhZ2VDaGFuZ2VQYXNzd29yZExpdGVyYWxzW2xhbmd1YWdlXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnVybE5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Ub2tlblBhcmFtZXRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5uZXdQYXNzd29yZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm5ld1Bhc3N3b3JkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hlY2tpbmdGb3JSb3V0ZU1ldGFkYXRhKHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKHVybDogc3RyaW5nKSB7XHJcbiAgICBpc0V4dGVybmFsTGluayh1cmwpID8gd2luZG93Lm9wZW4odXJsKSA6IHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmwgfHwgJy8nXSk7XHJcbiAgfVxyXG5cclxuICBvbkZvcmdvdFBhc3N3b3JkQ2xpY2socmVjb3ZlcnkpOiB2b2lkIHtcclxuICAgIGlmIChpc1R5cGVvZihyZWNvdmVyeSwgJ2Z1bmN0aW9uJykpIHtcclxuICAgICAgcmVjb3ZlcnkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50KHJlY292ZXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9naW5TdWJtaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRMb2dpbkZvcm0oKTtcclxuXHJcbiAgICBpZiAodGhpcy51cmxOZXdQYXNzd29yZCkge1xyXG4gICAgICB0aGlzLnBvc3RVcmxOZXdQYXNzd29yZChmb3JtKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJtaXQgJiYgdGhpcy5zdWJtaXQub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmVtaXRTdWJtaXQoZm9ybSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBYnJlIHVtYSBtb2RhbCBkZSBjb25maXJtYcOnw6NvIGNvbSB0ZXh0bywgaW1hZ2VtIGUgYm90w6NvIHF1ZSByZWRpcmVjaW9uYSBwYXJhIG8gbGluayBkZWZpbmlkbyBuYSBwcm9wcmllZGFkZSBgcC11cmwtaG9tZWBcdTAwMWNcclxuICAgKi9cclxuICBvcGVuQ29uZmlybWF0aW9uKCkge1xyXG4gICAgdGhpcy5tb2RhbC5vcGVuKCk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVBhc3N3b3JkKCkge1xyXG4gICAgY29uc3QgY29udHJvbHMgPSB0aGlzLnBhc3N3b3JkRm9ybS5mb3JtLmNvbnRyb2xzO1xyXG4gICAgY29uc3QgY29udHJvbENvbmZpcm1QYXNzd29yZCA9IGNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXTtcclxuICAgIGNvbnN0IGNvbnRyb2xOZXdQYXNzd29yZCA9IGNvbnRyb2xzWyduZXdQYXNzd29yZCddO1xyXG5cclxuICAgIGlmICghdGhpcy5uZXdQYXNzd29yZCkge1xyXG4gICAgICB0aGlzLnNldEZvcm1FcnJvcnMoeyAncmVxdWlyZWQnOiB0cnVlIH0sIFtjb250cm9sTmV3UGFzc3dvcmRdKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuc2V0Rm9ybUVycm9ycyh7ICdyZXF1aXJlZCc6IHRydWUgfSwgW2NvbnRyb2xDb25maXJtUGFzc3dvcmRdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uZXdQYXNzd29yZCAmJiB0aGlzLmNvbmZpcm1QYXNzd29yZCAmJiB0aGlzLm5ld1Bhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICB0aGlzLnNldEZvcm1FcnJvcnMoeyAnZXF1YWxQYXNzd29yZCc6IHRydWUgfSwgW2NvbnRyb2xOZXdQYXNzd29yZCwgY29udHJvbENvbmZpcm1QYXNzd29yZF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRGb3JtRXJyb3JzKG51bGwsIFtjb250cm9sQ29uZmlybVBhc3N3b3JkLCBjb250cm9sTmV3UGFzc3dvcmRdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmxlbmd0aCAmJlxyXG4gICAgICB0aGlzLnJlcXVpcmVtZW50cy5maW5kKHJlcXVpcmVtZW50ID0+IHRoaXMudmFsaWRhdGVSZXF1aXJlbWVudChyZXF1aXJlbWVudCkgPT09IGZhbHNlKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0Rm9ybUVycm9ycyh7ICdyZXF1aXJlbWVudCc6IHRydWUgfSwgW2NvbnRyb2xOZXdQYXNzd29yZF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVSZXF1aXJlbWVudChyZXF1aXJlbWVudDogUG9QYWdlQ2hhbmdlUGFzc3dvcmRSZXF1aXJlbWVudCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiByZXF1aXJlbWVudC5zdGF0dXMgPT09ICdmdW5jdGlvbicgPyByZXF1aXJlbWVudC5zdGF0dXModGhpcy5uZXdQYXNzd29yZCkgOiByZXF1aXJlbWVudC5zdGF0dXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XHJcbiAgICAgIHJldHVybiBvYmplY3RbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja2luZ0ZvclJvdXRlTWV0YWRhdGEoZGF0YSkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB0aGlzLnVybE5ld1Bhc3N3b3JkID0gdGhpcy5jaGVja2luZ0Zvck1ldGFkYXRhUHJvcGVydHkoZGF0YSwgJ3NlcnZpY2VBcGknKSB8fCB0aGlzLnVybE5ld1Bhc3N3b3JkO1xyXG4gICAgICB0aGlzLnJlY292ZXJ5ID0gdGhpcy5jaGVja2luZ0Zvck1ldGFkYXRhUHJvcGVydHkoZGF0YSwgJ3JlY292ZXJ5JykgfHwgdGhpcy5yZWNvdmVyeTtcclxuICAgICAgdGhpcy5oaWRlQ3VycmVudFBhc3N3b3JkID1cclxuICAgICAgICB0aGlzLmNoZWNraW5nRm9yTWV0YWRhdGFQcm9wZXJ0eShkYXRhLCAnaGlkZUN1cnJlbnRQYXNzd29yZCcpIHx8IHRoaXMuaGlkZUN1cnJlbnRQYXNzd29yZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50KHJlY292ZXJ5OiBQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlY292ZXJ5KSB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcclxuICAgICAgdGhpcy5wb0NvbXBvbmVudEluamVjdG9yLmRlc3Ryb3lDb21wb25lbnRJbkFwcGxpY2F0aW9uKHRoaXMuY29tcG9uZW50UmVmKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMucG9Db21wb25lbnRJbmplY3Rvci5jcmVhdGVDb21wb25lbnRJbkFwcGxpY2F0aW9uKFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50KTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnJlY292ZXJ5ID0gcmVjb3ZlcnkudXJsO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGFjdEVtYWlsID0gcmVjb3ZlcnkuY29udGFjdE1haWw7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5waG9uZU1hc2sgPSByZWNvdmVyeS5waG9uZU1hc2s7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gcmVjb3ZlcnkudHlwZSB8fCBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuRW1haWw7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uub3BlbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRTdWJtaXQoZm9ybTogUG9QYWdlQ2hhbmdlUGFzc3dvcmQpIHtcclxuICAgIHRoaXMuc3VibWl0LmVtaXQoZm9ybSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExvZ2luRm9ybSgpOiBQb1BhZ2VDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjdXJyZW50UGFzc3dvcmQ6IHRoaXMuY3VycmVudFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogdGhpcy5uZXdQYXNzd29yZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9zdFVybE5ld1Bhc3N3b3JkKGZvcm06IFBvUGFnZUNoYW5nZVBhc3N3b3JkKSB7XHJcbiAgICBmb3JtWyd0b2tlbiddID0gdGhpcy50b2tlbjtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UucG9zdCh0aGlzLnVybE5ld1Bhc3N3b3JkLCBmb3JtKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICB0aGlzLm9wZW5Db25maXJtYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZvcm1FcnJvcnMoZXJyb3I6IGFueSwgY29udHJvbHM/OiBBcnJheTxhbnk+KSB7XHJcbiAgICBjb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICBjb250cm9sLnNldEVycm9ycyhlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Ub2tlblBhcmFtZXRlcigpIHtcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gcGFyYW1zWyd0b2tlbiddO1xyXG5cclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLXdyYXBwZXJcIiAjcGFnZUNoYW5nZVBhc3N3b3JkPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1wYWdlLWNoYW5nZS1wYXNzd29yZC1jb250YWluZXJcIj5cclxuICAgIDxwby1wYWdlLWJhY2tncm91bmQgY2xhc3M9XCJwby1wYWdlLWNoYW5nZS1wYXNzd29yZFwiIFtwLWxvZ29dPVwibG9nb1wiIFtwLXNlY29uZGFyeS1sb2dvXT1cInNlY29uZGFyeUxvZ29cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtYmxvY2tlZC11c2VyLWhlYWRlciBwby1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbWQtMTJcIj57eyBsaXRlcmFscy5jcmVhdGVOZXdQYXNzd29yZCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1tZC0xMiBwby10ZXh0LWNlbnRlciBwby1mb250LXRleHRcIj5cclxuICAgICAgICAgIHt7IGxpdGVyYWxzLmNyZWF0ZU5ld1Bhc3N3b3JkUGhyYXNlIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gI3Bhc3N3b3JkRm9ybT1cIm5nRm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1yb3cgcG8tbXQtMyBwby1tdC1zbS0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbWQtNlwiIFtuZ0NsYXNzXT1cInsgJ3BvLW9mZnNldC1tZC0zIHBvLW9mZnNldC1sZy0zIHBvLW9mZnNldC14bC0zJzogIXNob3dSZXF1aXJlbWVudHMgfVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWhpZGVDdXJyZW50UGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8cG8tcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW50UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuY3VycmVudFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9wby1wYXNzd29yZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaGlkZUN1cnJlbnRQYXNzd29yZCAmJiByZWNvdmVyeVwiIGNsYXNzPVwicG8tdGV4dC1jZW50ZXIgcG8tbWItc20tMSBwby1tYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwicmVjb3ZlcnlVcmxUeXBlID09PSAnaW50ZXJuYWxMaW5rJ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvLWZvbnQtdGV4dC1ib2xkIHBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWZvcmdvdC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJyZWNvdmVyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgbGl0ZXJhbHMuZm9yZ290UGFzc3dvcmQgfX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwicmVjb3ZlcnlVcmxUeXBlID09PSAnZXh0ZXJuYWxMaW5rJ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvLWZvbnQtdGV4dC1ib2xkIHBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWZvcmdvdC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBbaHJlZl09XCJyZWNvdmVyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgbGl0ZXJhbHMuZm9yZ290UGFzc3dvcmQgfX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIXJlY292ZXJ5VXJsVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvLWZvbnQtdGV4dC1ib2xkIHBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWZvcmdvdC1wYXNzd29yZCBwby1jbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRm9yZ290UGFzc3dvcmRDbGljayhyZWNvdmVyeSlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt7IGxpdGVyYWxzLmZvcmdvdFBhc3N3b3JkIH19XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cG8tcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLm5ld1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIChwLWNoYW5nZS1tb2RlbCk9XCJ2YWxpZGF0ZVBhc3N3b3JkKClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L3BvLXBhc3N3b3JkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cG8tcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgW3AtbGFiZWxdPVwibGl0ZXJhbHMuY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIChwLWNoYW5nZS1tb2RlbCk9XCJ2YWxpZGF0ZVBhc3N3b3JkKClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L3BvLXBhc3N3b3JkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dSZXF1aXJlbWVudHNcIiBjbGFzcz1cInBvLW1kLTYgcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxwby1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvLW1iLTEgcG8tZm9udC10ZXh0LWJvbGQgcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBsaXRlcmFscz8ucmVxdWlyZW1lbnRzIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHJlcXVpcmVtZW50IG9mIHJlcXVpcmVtZW50c1wiIGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG8taWNvbiBwby1wYWdlLWNoYW5nZS1wYXNzd29yZC1yZXF1aXJlZC1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUmVxdWlyZW1lbnQocmVxdWlyZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3BvLWljb24tb2sgcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtb2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3BvLWljb24tbWludXMgcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtbWludXMnXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZWQtdGV4dCBwby1mb250LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyByZXF1aXJlbWVudC5yZXF1aXJlbWVudCB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvcG8tY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxwby1kaXZpZGVyIGNsYXNzPVwicG8tc20tMTJcIj48L3BvLWRpdmlkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtdGlwcyBwby1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tbWQtMiBwby1tci0zXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtbG9jay1pbWFnZSBwby1tYi0zXCJcclxuICAgICAgICAgICAgYWx0PVwiQmxvY2tlZCB1c2VyIGltYWdlXCJcclxuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JpZy1sb2NrLnN2Z1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwby1tZC05IHBvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLXRpcHMtdGV4dFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvLWZvbnQtdGV4dC1ib2xkIHBvLXBiLTFcIj57eyBsaXRlcmFscy5zYWZldHlUaXBzIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tZm9udC10ZXh0LXNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1yb3cgcG8tcGItMVwiPnt7IGxpdGVyYWxzLnNhZmV0eVRpcHNQaHJhc2UgfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvLXJvdyBwby1wYi0xXCI+4oCiIHt7IGxpdGVyYWxzLnNhZmV0eVRpcHNGaXJzdCB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tcm93IHBvLXBiLTFcIj7igKIge3sgbGl0ZXJhbHMuc2FmZXR5VGlwc1NlY29uZCB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tcm93IHBvLXBiLTFcIj7igKIge3sgbGl0ZXJhbHMuc2FmZXR5VGlwc1RoaXJkIH19PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtYnV0dG9ucyBwby1yb3dcIj5cclxuICAgICAgICA8cG8tZGl2aWRlciBjbGFzcz1cInBvLXNtLTEyIHBvLW1vYmlsZS1vbmx5XCI+PC9wby1kaXZpZGVyPlxyXG5cclxuICAgICAgICA8cG8tYnV0dG9uXHJcbiAgICAgICAgICAqbmdJZj1cIiFoaWRlQ3VycmVudFBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzPVwicG8tc20tNiBwby1tYi1zbS0xXCJcclxuICAgICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLmJhY2tCdXR0b25cIlxyXG4gICAgICAgICAgKHAtY2xpY2spPVwibmF2aWdhdGVUbyh1cmxCYWNrKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvcG8tYnV0dG9uPlxyXG5cclxuICAgICAgICA8cG8tYnV0dG9uXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJoaWRlQ3VycmVudFBhc3N3b3JkID8gJ3BvLW1kLTEyJyA6ICdwby1zbS02J1wiXHJcbiAgICAgICAgICBwLWtpbmQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIFtwLWRpc2FibGVkXT1cInBhc3N3b3JkRm9ybS5pbnZhbGlkXCJcclxuICAgICAgICAgIFtwLWxhYmVsXT1cImxpdGVyYWxzLnNhdmVCdXR0b25cIlxyXG4gICAgICAgICAgKHAtY2xpY2spPVwib25Mb2dpblN1Ym1pdCgpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wby1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wby1wYWdlLWJhY2tncm91bmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPHBvLW1vZGFsXHJcbiAgW3AtcHJpbWFyeS1hY3Rpb25dPVwibW9kYWxBY3Rpb25cIlxyXG4gIHAtaGlkZS1jbG9zZVxyXG4gIHAtc2l6ZT1cImF1dG9cIlxyXG4gIFtwLXRpdGxlXT1cImhpZGVDdXJyZW50UGFzc3dvcmQgPyBsaXRlcmFscy5wYXNzd29yZFN1Y2Nlc3NmdWxseUNyZWF0ZWQgOiBsaXRlcmFscy5wYXNzd29yZFN1Y2Nlc3NmdWxseVVwZGF0ZWRcIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXRleHQtY2VudGVyXCI+XHJcbiAgICA8aW1nXHJcbiAgICAgIGFsdD1cIkJsb2NrZWQgdXNlciBpbWFnZVwiXHJcbiAgICAgIGNsYXNzPVwicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtbG9jay1pbWFnZSBwby1tYi0zXCJcclxuICAgICAgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3N1Y2Nlc3Muc3ZnXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbjwvcG8tbW9kYWw+XHJcbiJdfQ==