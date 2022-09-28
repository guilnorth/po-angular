import { Component, ViewChild } from '@angular/core';
import { isExternalLink } from '../../utils/util';
import { PoModalPasswordRecoveryBaseComponent } from './po-modal-password-recovery-base.component';
import { PoModalPasswordRecoveryModalContent } from './enums/po-modal-password-recovery-modal-content.enum';
import { PoModalPasswordRecoveryType } from './enums/po-modal-password-recovery-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@po-ui/ng-components";
import * as i3 from "./po-modal-password-recovery.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "./po-modal-password-recovery-error-message/po-modal-password-recovery-error-message.component";
const _c0 = ["emailForm"];
const _c1 = ["recoveryModal"];
const _c2 = ["smsCodeForm"];
function PoModalPasswordRecoveryComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "po-radio-group", 15);
    i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.chosenTypeFormOption = $event); })("p-change", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_p_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.getInputType($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.chosenTypeFormOption)("p-options", ctx_r5.typeFormOptions);
} }
function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-email", 16);
    i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.email = $event); })("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_p_change_model_0_listener() { i0.ɵɵrestoreView(_r14); i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(5); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.formModelChangesCheck(_r4)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r6.email)("p-label", ctx_r6.literals.insertEmail);
} }
function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-input", 17);
    i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.phone = $event); })("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_p_change_model_0_listener() { i0.ɵɵrestoreView(_r17); i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(5); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.formModelChangesCheck(_r4)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r7.phone)("p-label", ctx_r7.literals.insertPhone)("p-mask", ctx_r7.phoneMask)("p-maxlength", ctx_r7.maxLength)("p-minlength", ctx_r7.minLength);
} }
function PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-modal-password-recovery-error-message", 18);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-text", ctx_r8.type === "sms" ? ctx_r8.literals.phoneErrorMessagePhrase : ctx_r8.literals.emailErrorMessagePhrase);
} }
function PoModalPasswordRecoveryComponent_div_3_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "a", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.literals.prepositionIn, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "mailto:", ctx_r9.contactEmail, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.contactEmail, " ");
} }
function PoModalPasswordRecoveryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6)(4, "form", null, 7);
    i0.ɵɵtemplate(6, PoModalPasswordRecoveryComponent_div_3_div_6_Template, 2, 2, "div", 8);
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵtemplate(8, PoModalPasswordRecoveryComponent_div_3_po_email_8_Template, 1, 2, "po-email", 10);
    i0.ɵɵtemplate(9, PoModalPasswordRecoveryComponent_div_3_po_input_9_Template, 1, 5, "po-input", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 12);
    i0.ɵɵtemplate(11, PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template, 1, 1, "po-modal-password-recovery-error-message", 13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 14);
    i0.ɵɵtext(13);
    i0.ɵɵtemplate(14, PoModalPasswordRecoveryComponent_div_3_span_14_Template, 4, 3, "span", 8);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.emailModalPhrases.firstPhrase, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.modalPasswordRecoveryTypeAll);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.type === "email" || ctx_r1.type === "all");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.type === "sms");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.invalidEmail && ctx_r1.control.dirty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.emailModalPhrases.secondPhrase, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.contactEmail);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.endpoint, " ");
} }
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-modal-password-recovery-error-message", 18);
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-text", ctx_r21.smsCodeErrorMessage || ctx_r21.literals.smsCodeErrorMessagePhrase);
} }
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-modal-password-recovery-error-message", 18);
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-text", ctx_r22.codeError);
} }
function PoModalPasswordRecoveryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4, 20)(2, "div", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "form", null, 21)(7, "po-input", 22);
    i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_4_Template_po_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.smsCode = $event); })("p-change-model", function PoModalPasswordRecoveryComponent_div_4_Template_po_input_p_change_model_7_listener() { i0.ɵɵrestoreView(_r24); const _r20 = i0.ɵɵreference(6); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.formModelChangesCheck(_r20)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵtemplate(9, PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template, 1, 1, "po-modal-password-recovery-error-message", 13);
    i0.ɵɵtemplate(10, PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template, 1, 1, "po-modal-password-recovery-error-message", 13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 14);
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span", 23);
    i0.ɵɵlistener("click", function PoModalPasswordRecoveryComponent_div_4_Template_span_click_13_listener() { i0.ɵɵrestoreView(_r24); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.resendSmsCode()); });
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.literals.sentSmsCodePhrase);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.smsCode)("p-label", ctx_r2.literals.insertCode)("p-mask", ctx_r2.codeMask);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.invalidEmail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showCustomCodeError);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.sendAgainPhrase, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.literals.sendAgain);
} }
function PoModalPasswordRecoveryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4, 24);
    i0.ɵɵelement(2, "img", 25);
    i0.ɵɵelementStart(3, "div", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.literals.emailSentConfirmationPhrase, " ");
} }
/**
 * @docsExtends PoModalPasswordRecoveryBaseComponent
 *
 * @example
 *
 * <example name="po-modal-password-recovery-basic" title="PO Modal Password Recovery Basic">
 *  <file name="sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"> </file>
 *  <file name="sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-modal-password-recovery-labs" title="PO Modal Password Recovery Labs">
 *  <file name="sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"> </file>
 *  <file name="sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-modal-password-recovery-request" title="PO Modal Password Recovery Request">
 *  <file name="sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"> </file>
 *  <file name="sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"> </file>
 * </example>
 */
export class PoModalPasswordRecoveryComponent extends PoModalPasswordRecoveryBaseComponent {
    constructor(router, poI18nPipe, poModalPasswordRecoveryService, poLanguageService) {
        super(poLanguageService);
        this.router = router;
        this.poI18nPipe = poI18nPipe;
        this.poModalPasswordRecoveryService = poModalPasswordRecoveryService;
        this.chosenTypeFormOption = PoModalPasswordRecoveryType.Email;
        this.codeMask = '9 9 9 9 9 9';
        this.emailModal = true;
        this.emailModalPhrases = { firstPhrase: null, secondPhrase: null };
        this.endpoint = '.';
        this.invalidCode = false;
        this.invalidEmail = false;
        this.modalType = PoModalPasswordRecoveryModalContent.Email;
        this.submittedCodeValue = {};
        this.submittedContactValue = {};
        this.primaryAction = { label: undefined, action: () => { } };
        this.secondaryAction = { label: undefined, action: () => { } };
        this.typeFormOptions = [
            { label: 'e-mail', value: PoModalPasswordRecoveryType.Email },
            { label: 'SMS', value: PoModalPasswordRecoveryType.SMS }
        ];
    }
    ngOnDestroy() {
        if (this.passwordRecoverySubscription) {
            this.passwordRecoverySubscription.unsubscribe();
        }
        if (this.smsCodeSubscription) {
            this.smsCodeSubscription.unsubscribe();
        }
    }
    completed() {
        this.cancelAction();
    }
    formModelChangesCheck(form) {
        const invalidForm = form.invalid;
        this.invalidEmail = invalidForm && form.dirty;
        this.primaryAction.disabled = invalidForm;
        if (this.modalType === PoModalPasswordRecoveryModalContent.SMSCode) {
            const codeError = this.codeError !== undefined && this.codeError !== '';
            this.showCustomCodeError = codeError && form.pristine;
        }
    }
    getInputType(type) {
        this.type = type;
        this.pipeModalPhrases();
        setTimeout(() => {
            this.control = this.emailForm.controls[type];
            this.formModelChangesCheck(this.emailForm);
            this.resetFormFields(this.control);
        });
    }
    open() {
        const control = this.checkFormType(this.type);
        this.control = this.emailForm.controls[control];
        this.setEmailModalPhrasesAndActions();
        this.formModelChangesCheck(this.emailForm);
        this.recoveryModalElement.open();
    }
    openConfirmation() {
        this.modalTitle = this.literals.emailSentTitle;
        this.modalType = PoModalPasswordRecoveryModalContent.Confirmation;
        this.setActions(this.cancelAction, this.literals.closeButton, this.submitAction, this.literals.resendEmailButton, false);
    }
    openSmsCode() {
        this.modalTitle = this.literals.typeCodeTitle;
        this.modalType = PoModalPasswordRecoveryModalContent.SMSCode;
        this.setActions(this.submitSmsCodeAction, this.literals.continueButton, this.cancelAction, this.literals.cancelButton, true);
        setTimeout(() => {
            this.control = this.smsCodeForm.controls['sms'];
            this.formModelChangesCheck(this.smsCodeForm);
        });
    }
    resendSmsCode() {
        this.incrementRetryAttempts();
        if (this.urlRecovery) {
            this.submitActionRequest(this.submittedContactValue, this.type);
        }
        else {
            this.submit.emit(this.submittedContactValue);
        }
    }
    assignSmsResponse(responseObj) {
        this.smsBodyResponse = Object.assign({}, { hash: responseObj.hash });
        if (responseObj.urlValidationCode) {
            this.smsBodyResponse = Object.assign(this.smsBodyResponse, { urlValidationCode: responseObj.urlValidationCode });
        }
    }
    cancelAction() {
        this.resetFormFields(this.control);
        this.submittedContactValue = {};
        this.chosenTypeFormOption = PoModalPasswordRecoveryType.Email;
        this.modalType = PoModalPasswordRecoveryModalContent.Email;
        this.type = this.modalPasswordRecoveryTypeAll ? PoModalPasswordRecoveryType.All : this.type;
        this.recoveryModalElement.close();
    }
    checkFormType(type) {
        return type !== PoModalPasswordRecoveryType.All ? type : PoModalPasswordRecoveryType.Email;
    }
    formReset(control) {
        control.markAsPristine();
        control.markAsUntouched();
        control.updateValueAndValidity();
    }
    getEmitValue(type) {
        return type === PoModalPasswordRecoveryType.SMS ? this.phone : this.email;
    }
    incrementRetryAttempts() {
        this.submittedContactValue.retry = this.submittedContactValue.retry + 1 || 1;
    }
    openExternalLink(url, queryParam) {
        window.open(`${url}?token=${queryParam}`, '_self');
    }
    openInternalLink(url, endpoint, queryParam) {
        this.router.navigate([`${url}/${endpoint}`], { queryParams: { token: queryParam } });
    }
    pipeModalPhrases() {
        if (this.type === PoModalPasswordRecoveryType.SMS) {
            this.emailModalPhrases.firstPhrase = this.setPipeArguments(this.literals.recoveryPasswordPhrase, this.literals.sms);
            this.emailModalPhrases.secondPhrase = this.setPipeArguments(this.literals.supportContact, this.literals.telephone);
        }
        else {
            this.emailModalPhrases.firstPhrase = this.setPipeArguments(this.literals.recoveryPasswordPhrase, this.literals.email);
            this.emailModalPhrases.secondPhrase = this.setPipeArguments(this.literals.supportContact, this.literals.email);
        }
    }
    redirectToChangePassword(recoveryToken) {
        const urlChangePassword = recoveryToken.urlChangePassword;
        if (urlChangePassword) {
            isExternalLink(urlChangePassword)
                ? this.openExternalLink(urlChangePassword, recoveryToken.token)
                : this.openInternalLink(this.urlRecovery, urlChangePassword, recoveryToken.token);
        }
        else {
            const changePasswordEndpoint = 'changePassword';
            this.openInternalLink(this.urlRecovery, changePasswordEndpoint, recoveryToken.token);
        }
    }
    resetFormFields(control) {
        this.formReset(control);
        this.email = undefined;
        this.phone = undefined;
        this.smsCode = undefined;
    }
    setActions(primaryAction, primarylabel, secondaryAction, secondaryLabel, disabled) {
        this.primaryAction.action = () => primaryAction.call(this);
        this.primaryAction.label = primarylabel;
        this.secondaryAction.action = () => secondaryAction.call(this);
        this.secondaryAction.label = secondaryLabel;
        this.primaryAction.disabled = disabled;
    }
    setEmailModalPhrasesAndActions() {
        this.modalTitle = this.literals.forgotPasswordTitle;
        this.pipeModalPhrases();
        this.modalPasswordRecoveryTypeAll = this.type === PoModalPasswordRecoveryType.All;
        this.setActions(this.submitAction, this.literals.sendButton, this.cancelAction, this.literals.cancelButton, true);
    }
    setRequestEndpoint(urlValidationCode) {
        const endpoint = urlValidationCode || 'validation';
        return `${this.urlRecovery}/${endpoint}`;
    }
    setPipeArguments(literalAttr, arg) {
        return this.poI18nPipe.transform(literalAttr, arg);
    }
    submitAction() {
        this.modalType === PoModalPasswordRecoveryModalContent.Confirmation
            ? this.incrementRetryAttempts()
            : this.formReset(this.control);
        this.submittedContactValue[this.checkFormType(this.type)] = this.getEmitValue(this.type);
        if (this.urlRecovery) {
            this.submitActionRequest(this.submittedContactValue, this.type);
        }
        else {
            this.submit.emit(this.submittedContactValue);
        }
    }
    submitActionRequest(data, modalType) {
        const params = modalType === PoModalPasswordRecoveryType.SMS ? { type: 'sms' } : undefined;
        this.passwordRecoverySubscription = this.poModalPasswordRecoveryService
            .post(this.urlRecovery, data, params)
            .subscribe(response => {
            if ((modalType === PoModalPasswordRecoveryType.Email || modalType === PoModalPasswordRecoveryType.All) &&
                response.status === 204) {
                this.openConfirmation();
            }
            else if (modalType === PoModalPasswordRecoveryType.SMS && response.status === 200) {
                this.assignSmsResponse(response.body);
                this.openSmsCode();
            }
        });
    }
    submitSmsCodeAction() {
        this.submittedCodeValue.code = this.smsCode;
        if (this.urlRecovery) {
            this.submittedCodeValue = Object.assign(this.submittedCodeValue, { hash: this.smsBodyResponse.hash });
            this.submitSmsCodeRequest(this.submittedCodeValue);
        }
        else {
            this.codeSubmit.emit(this.submittedCodeValue);
        }
        this.resetFormFields(this.control);
    }
    submitSmsCodeRequest(data) {
        this.smsCodeSubscription = this.poModalPasswordRecoveryService
            .post(this.setRequestEndpoint(this.smsBodyResponse.urlValidationCode), data)
            .subscribe(response => {
            const successStatus = response.status === 200;
            if (successStatus) {
                this.completed();
                this.redirectToChangePassword(response.body);
            }
        }, error => {
            this.codeError = error.error.message;
            this.openSmsCode();
        });
    }
}
PoModalPasswordRecoveryComponent.ɵfac = function PoModalPasswordRecoveryComponent_Factory(t) { return new (t || PoModalPasswordRecoveryComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.PoI18nPipe), i0.ɵɵdirectiveInject(i3.PoModalPasswordRecoveryService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoModalPasswordRecoveryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalPasswordRecoveryComponent, selectors: [["po-modal-password-recovery"]], viewQuery: function PoModalPasswordRecoveryComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 7);
        i0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emailForm = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recoveryModalElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.smsCodeForm = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["p-hide-close", "", "p-size", "auto", 3, "ngSwitch", "p-primary-action", "p-secondary-action", "p-title"], ["recoveryModal", ""], [1, "po-modal-password-recovery-wrapper"], ["class", "po-modal-password-recovery-content po-row", 4, "ngSwitchCase"], [1, "po-modal-password-recovery-content", "po-row"], [1, "po-modal-password-recovery-text", "po-md-12", "po-mb-1"], [1, "po-mb-2", "po-md-12"], ["emailForm", "ngForm"], [4, "ngIf"], [1, "po-mt-1"], ["name", "email", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model", 4, "ngIf"], ["name", "sms", "p-icon", "po-icon-telephone", "p-required", "", 3, "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "ngModelChange", "p-change-model", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], [3, "p-text", 4, "ngIf"], [1, "po-modal-password-recovery-text", "po-md-12"], ["name", "type", 3, "ngModel", "p-options", "ngModelChange", "p-change"], ["name", "email", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model"], ["name", "sms", "p-icon", "po-icon-telephone", "p-required", "", 3, "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "ngModelChange", "p-change-model"], [3, "p-text"], ["target", "_self", 1, "po-modal-password-recovery-link", 3, "href"], ["smsCodeModal", ""], ["smsCodeForm", "ngForm"], ["name", "sms", "p-maxlength", "11", "p-minlength", "11", "p-required", "", 3, "ngModel", "p-label", "p-mask", "ngModelChange", "p-change-model"], [1, "po-modal-password-recovery-link", 3, "click"], ["confirmationModal", ""], ["src", "./assets/images/email-sent.svg", 1, "po-modal-password-recovery-user-image", "po-mb-2"], [1, "po-modal-password-recovery-text"]], template: function PoModalPasswordRecoveryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0, 1)(2, "div", 2);
        i0.ɵɵtemplate(3, PoModalPasswordRecoveryComponent_div_3_Template, 16, 8, "div", 3);
        i0.ɵɵtemplate(4, PoModalPasswordRecoveryComponent_div_4_Template, 15, 8, "div", 3);
        i0.ɵɵtemplate(5, PoModalPasswordRecoveryComponent_div_5_Template, 5, 1, "div", 3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.modalType)("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.modalTitle);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngSwitchCase", "email");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "smsCode");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "confirmation");
    } }, dependencies: [i4.NgIf, i4.NgSwitch, i4.NgSwitchCase, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i2.PoEmailComponent, i2.PoInputComponent, i2.PoRadioGroupComponent, i2.PoModalComponent, i6.PoModalPasswordRecoveryErrorMessageComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryComponent, [{
        type: Component,
        args: [{ selector: 'po-modal-password-recovery', template: "<po-modal\r\n  #recoveryModal\r\n  p-hide-close\r\n  p-size=\"auto\"\r\n  [ngSwitch]=\"modalType\"\r\n  [p-primary-action]=\"primaryAction\"\r\n  [p-secondary-action]=\"secondaryAction\"\r\n  [p-title]=\"modalTitle\"\r\n>\r\n  <div class=\"po-modal-password-recovery-wrapper\">\r\n    <div *ngSwitchCase=\"'email'\" class=\"po-modal-password-recovery-content po-row\">\r\n      <div class=\"po-modal-password-recovery-text po-md-12 po-mb-1\">\r\n        {{ emailModalPhrases.firstPhrase }}\r\n      </div>\r\n      <div class=\"po-mb-2 po-md-12\">\r\n        <form #emailForm=\"ngForm\">\r\n          <div *ngIf=\"modalPasswordRecoveryTypeAll\">\r\n            <po-radio-group\r\n              name=\"type\"\r\n              [(ngModel)]=\"chosenTypeFormOption\"\r\n              [p-options]=\"typeFormOptions\"\r\n              (p-change)=\"getInputType($event)\"\r\n            >\r\n            </po-radio-group>\r\n          </div>\r\n\r\n          <div class=\"po-mt-1\">\r\n            <po-email\r\n              *ngIf=\"type === 'email' || type === 'all'\"\r\n              name=\"email\"\r\n              [(ngModel)]=\"email\"\r\n              p-required\r\n              [p-label]=\"literals.insertEmail\"\r\n              (p-change-model)=\"formModelChangesCheck(emailForm)\"\r\n            >\r\n            </po-email>\r\n\r\n            <po-input\r\n              *ngIf=\"type === 'sms'\"\r\n              name=\"sms\"\r\n              [(ngModel)]=\"phone\"\r\n              p-icon=\"po-icon-telephone\"\r\n              p-required\r\n              [p-label]=\"literals.insertPhone\"\r\n              [p-mask]=\"phoneMask\"\r\n              [p-maxlength]=\"maxLength\"\r\n              [p-minlength]=\"minLength\"\r\n              (p-change-model)=\"formModelChangesCheck(emailForm)\"\r\n            >\r\n            </po-input>\r\n          </div>\r\n\r\n          <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n            <po-modal-password-recovery-error-message\r\n              *ngIf=\"invalidEmail && control.dirty\"\r\n              [p-text]=\"type === 'sms' ? literals.phoneErrorMessagePhrase : literals.emailErrorMessagePhrase\"\r\n            >\r\n            </po-modal-password-recovery-error-message>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"po-modal-password-recovery-text po-md-12\">\r\n        {{ emailModalPhrases.secondPhrase }}\r\n        <span *ngIf=\"contactEmail\">\r\n          {{ literals.prepositionIn }}\r\n          <a class=\"po-modal-password-recovery-link\" href=\"mailto:{{ contactEmail }}\" target=\"_self\">\r\n            {{ contactEmail }}\r\n          </a>\r\n        </span>\r\n        {{ endpoint }}\r\n      </div>\r\n    </div>\r\n\r\n    <div #smsCodeModal *ngSwitchCase=\"'smsCode'\" class=\"po-modal-password-recovery-content po-row\">\r\n      <div class=\"po-modal-password-recovery-text po-md-12 po-mb-1\">{{ literals.sentSmsCodePhrase }}</div>\r\n      <div class=\"po-mb-2 po-md-12\">\r\n        <form #smsCodeForm=\"ngForm\">\r\n          <po-input\r\n            name=\"sms\"\r\n            [(ngModel)]=\"smsCode\"\r\n            p-maxlength=\"11\"\r\n            p-minlength=\"11\"\r\n            p-required\r\n            [p-label]=\"literals.insertCode\"\r\n            [p-mask]=\"codeMask\"\r\n            (p-change-model)=\"formModelChangesCheck(smsCodeForm)\"\r\n          >\r\n          </po-input>\r\n          <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n            <po-modal-password-recovery-error-message\r\n              *ngIf=\"invalidEmail\"\r\n              [p-text]=\"smsCodeErrorMessage || this.literals.smsCodeErrorMessagePhrase\"\r\n            >\r\n            </po-modal-password-recovery-error-message>\r\n            <po-modal-password-recovery-error-message *ngIf=\"showCustomCodeError\" [p-text]=\"codeError\">\r\n            </po-modal-password-recovery-error-message>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"po-modal-password-recovery-text po-md-12\">\r\n        {{ literals.sendAgainPhrase }}\r\n        <span class=\"po-modal-password-recovery-link\" (click)=\"resendSmsCode()\">{{ literals.sendAgain }}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div #confirmationModal *ngSwitchCase=\"'confirmation'\" class=\"po-modal-password-recovery-content po-row\">\r\n      <img class=\"po-modal-password-recovery-user-image po-mb-2\" src=\"./assets/images/email-sent.svg\" />\r\n      <div class=\"po-modal-password-recovery-text\">\r\n        {{ literals.emailSentConfirmationPhrase }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.PoI18nPipe }, { type: i3.PoModalPasswordRecoveryService }, { type: i2.PoLanguageService }]; }, { emailForm: [{
            type: ViewChild,
            args: ['emailForm']
        }], recoveryModalElement: [{
            type: ViewChild,
            args: ['recoveryModal', { static: true }]
        }], smsCodeForm: [{
            type: ViewChild,
            args: ['smsCodeForm']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5L3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYWhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU1RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0hqRiwyQkFBMEMseUJBQUE7SUFHdEMsNlFBQWtDLDZMQUV0QixlQUFBLDRCQUFvQixDQUFBLElBRkU7SUFJcEMsaUJBQWlCLEVBQUE7OztJQUpmLGVBQWtDO0lBQWxDLHFEQUFrQyxxQ0FBQTs7OztJQVFwQyxvQ0FPQztJQUpDLDZQQUFtQixvUEFHRCxlQUFBLGtDQUFnQyxDQUFBLElBSC9CO0lBS3JCLGlCQUFXOzs7SUFMVCxzQ0FBbUIsd0NBQUE7Ozs7SUFPckIsb0NBV0M7SUFSQyw2UEFBbUIsb1BBT0QsZUFBQSxrQ0FBZ0MsQ0FBQSxJQVAvQjtJQVNyQixpQkFBVzs7O0lBVFQsc0NBQW1CLHdDQUFBLDRCQUFBLGlD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Z0M7Ozs7Ozs7Ozs7UUM5QzdDLHNDQVFDLGFBQUE7UUFFRyxrRkE2RE07UUFFTixrRkE4Qk07UUFFTixpRkFLTTtRQUNSLGlCQUFNLEVBQUE7O1FBM0dOLHdDQUFzQix1Q0FBQSwyQ0FBQSwyQkFBQTtRQU1kLGVBQXFCO1FBQXJCLHNDQUFxQjtRQStEUCxlQUF1QjtRQUF2Qix3Q0FBdUI7UUFnQ2xCLGVBQTRCO1FBQTVCLDZDQUE0Qjs7dUZEM0Q1QyxnQ0FBZ0M7Y0FKNUMsU0FBUzsyQkFDRSw0QkFBNEI7K0pBSWQsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBRXdCLG9CQUFvQjtrQkFBakUsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRWxCLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0kxOG5QaXBlLFxyXG4gIFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gIFBvTW9kYWxBY3Rpb24sXHJcbiAgUG9Nb2RhbENvbXBvbmVudCxcclxuICBQb1JhZGlvR3JvdXBPcHRpb25cclxufSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBpc0V4dGVybmFsTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5TW9kYWxDb250ZW50IH0gZnJvbSAnLi9lbnVtcy9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1tb2RhbC1jb250ZW50LmVudW0nO1xyXG5pbXBvcnQgeyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVNlcnZpY2UgfSBmcm9tICcuL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUgfSBmcm9tICcuL2VudW1zL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXR5cGUuZW51bSc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5QmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktYmFzaWNcIiB0aXRsZT1cIlBPIE1vZGFsIFBhc3N3b3JkIFJlY292ZXJ5IEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWJhc2ljL3NhbXBsZS1wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWJhc2ljL3NhbXBsZS1wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1sYWJzXCIgdGl0bGU9XCJQTyBNb2RhbCBQYXNzd29yZCBSZWNvdmVyeSBMYWJzXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWxhYnMvc2FtcGxlLXBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1sYWJzL3NhbXBsZS1wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXJlcXVlc3RcIiB0aXRsZT1cIlBPIE1vZGFsIFBhc3N3b3JkIFJlY292ZXJ5IFJlcXVlc3RcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktcmVxdWVzdC9zYW1wbGUtcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktcmVxdWVzdC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXJlcXVlc3Qvc2FtcGxlLXBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXJlcXVlc3QuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5Q29tcG9uZW50IGV4dGVuZHMgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdlbWFpbEZvcm0nKSBlbWFpbEZvcm06IE5nRm9ybTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncmVjb3ZlcnlNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIHJlY292ZXJ5TW9kYWxFbGVtZW50OiBQb01vZGFsQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdzbXNDb2RlRm9ybScpIHNtc0NvZGVGb3JtOiBOZ0Zvcm07XHJcblxyXG4gIGNob3NlblR5cGVGb3JtT3B0aW9uOiBzdHJpbmcgPSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuRW1haWw7XHJcbiAgY29kZU1hc2s6IHN0cmluZyA9ICc5IDkgOSA5IDkgOSc7XHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xyXG4gIGVtYWlsTW9kYWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGVtYWlsTW9kYWxQaHJhc2VzID0geyBmaXJzdFBocmFzZTogbnVsbCBhcyBzdHJpbmcsIHNlY29uZFBocmFzZTogbnVsbCBhcyBzdHJpbmcgfTtcclxuICBlbmRwb2ludDogc3RyaW5nID0gJy4nO1xyXG4gIGludmFsaWRDb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaW52YWxpZEVtYWlsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbW9kYWxUaXRsZTogc3RyaW5nO1xyXG4gIG1vZGFsVHlwZTogUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlNb2RhbENvbnRlbnQgPSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeU1vZGFsQ29udGVudC5FbWFpbDtcclxuICBzaG93Q3VzdG9tQ29kZUVycm9yOiBib29sZWFuO1xyXG4gIHNtc0NvZGVFcnJvck1lc3NhZ2VQaHJhc2U6IHN0cmluZztcclxuICBzdWJtaXR0ZWRDb2RlVmFsdWUgPSB7fSBhcyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeTtcclxuICBzdWJtaXR0ZWRDb250YWN0VmFsdWUgPSB7fSBhcyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeTtcclxuXHJcbiAgcHJpbWFyeUFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHsgbGFiZWw6IHVuZGVmaW5lZCwgYWN0aW9uOiAoKSA9PiB7fSB9O1xyXG5cclxuICBzZWNvbmRhcnlBY3Rpb246IFBvTW9kYWxBY3Rpb24gPSB7IGxhYmVsOiB1bmRlZmluZWQsIGFjdGlvbjogKCkgPT4ge30gfTtcclxuXHJcbiAgdHlwZUZvcm1PcHRpb25zOiBBcnJheTxQb1JhZGlvR3JvdXBPcHRpb24+ID0gW1xyXG4gICAgeyBsYWJlbDogJ2UtbWFpbCcsIHZhbHVlOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuRW1haWwgfSxcclxuICAgIHsgbGFiZWw6ICdTTVMnLCB2YWx1ZTogUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLlNNUyB9XHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBwYXNzd29yZFJlY292ZXJ5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBzbXNCb2R5UmVzcG9uc2U7XHJcbiAgcHJpdmF0ZSBzbXNDb2RlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcG9JMThuUGlwZTogUG9JMThuUGlwZSxcclxuICAgIHByaXZhdGUgcG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlTZXJ2aWNlOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVNlcnZpY2UsXHJcbiAgICBwb0xhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKHBvTGFuZ3VhZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMucGFzc3dvcmRSZWNvdmVyeVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkUmVjb3ZlcnlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zbXNDb2RlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc21zQ29kZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcGxldGVkKCkge1xyXG4gICAgdGhpcy5jYW5jZWxBY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIGZvcm1Nb2RlbENoYW5nZXNDaGVjayhmb3JtOiBOZ0Zvcm0pIHtcclxuICAgIGNvbnN0IGludmFsaWRGb3JtID0gZm9ybS5pbnZhbGlkO1xyXG4gICAgdGhpcy5pbnZhbGlkRW1haWwgPSBpbnZhbGlkRm9ybSAmJiBmb3JtLmRpcnR5O1xyXG4gICAgdGhpcy5wcmltYXJ5QWN0aW9uLmRpc2FibGVkID0gaW52YWxpZEZvcm07XHJcblxyXG4gICAgaWYgKHRoaXMubW9kYWxUeXBlID09PSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeU1vZGFsQ29udGVudC5TTVNDb2RlKSB7XHJcbiAgICAgIGNvbnN0IGNvZGVFcnJvcjogYm9vbGVhbiA9IHRoaXMuY29kZUVycm9yICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jb2RlRXJyb3IgIT09ICcnO1xyXG4gICAgICB0aGlzLnNob3dDdXN0b21Db2RlRXJyb3IgPSBjb2RlRXJyb3IgJiYgZm9ybS5wcmlzdGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElucHV0VHlwZSh0eXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5waXBlTW9kYWxQaHJhc2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5lbWFpbEZvcm0uY29udHJvbHNbdHlwZV07XHJcbiAgICAgIHRoaXMuZm9ybU1vZGVsQ2hhbmdlc0NoZWNrKHRoaXMuZW1haWxGb3JtKTtcclxuICAgICAgdGhpcy5yZXNldEZvcm1GaWVsZHModGhpcy5jb250cm9sKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNoZWNrRm9ybVR5cGUodGhpcy50eXBlKTtcclxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZW1haWxGb3JtLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgdGhpcy5zZXRFbWFpbE1vZGFsUGhyYXNlc0FuZEFjdGlvbnMoKTtcclxuICAgIHRoaXMuZm9ybU1vZGVsQ2hhbmdlc0NoZWNrKHRoaXMuZW1haWxGb3JtKTtcclxuICAgIHRoaXMucmVjb3ZlcnlNb2RhbEVsZW1lbnQub3BlbigpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNvbmZpcm1hdGlvbigpIHtcclxuICAgIHRoaXMubW9kYWxUaXRsZSA9IHRoaXMubGl0ZXJhbHMuZW1haWxTZW50VGl0bGU7XHJcbiAgICB0aGlzLm1vZGFsVHlwZSA9IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5TW9kYWxDb250ZW50LkNvbmZpcm1hdGlvbjtcclxuICAgIHRoaXMuc2V0QWN0aW9ucyhcclxuICAgICAgdGhpcy5jYW5jZWxBY3Rpb24sXHJcbiAgICAgIHRoaXMubGl0ZXJhbHMuY2xvc2VCdXR0b24sXHJcbiAgICAgIHRoaXMuc3VibWl0QWN0aW9uLFxyXG4gICAgICB0aGlzLmxpdGVyYWxzLnJlc2VuZEVtYWlsQnV0dG9uLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9wZW5TbXNDb2RlKCkge1xyXG4gICAgdGhpcy5tb2RhbFRpdGxlID0gdGhpcy5saXRlcmFscy50eXBlQ29kZVRpdGxlO1xyXG4gICAgdGhpcy5tb2RhbFR5cGUgPSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeU1vZGFsQ29udGVudC5TTVNDb2RlO1xyXG4gICAgdGhpcy5zZXRBY3Rpb25zKFxyXG4gICAgICB0aGlzLnN1Ym1pdFNtc0NvZGVBY3Rpb24sXHJcbiAgICAgIHRoaXMubGl0ZXJhbHMuY29udGludWVCdXR0b24sXHJcbiAgICAgIHRoaXMuY2FuY2VsQWN0aW9uLFxyXG4gICAgICB0aGlzLmxpdGVyYWxzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5zbXNDb2RlRm9ybS5jb250cm9sc1snc21zJ107XHJcbiAgICAgIHRoaXMuZm9ybU1vZGVsQ2hhbmdlc0NoZWNrKHRoaXMuc21zQ29kZUZvcm0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNlbmRTbXNDb2RlKCkge1xyXG4gICAgdGhpcy5pbmNyZW1lbnRSZXRyeUF0dGVtcHRzKCk7XHJcbiAgICBpZiAodGhpcy51cmxSZWNvdmVyeSkge1xyXG4gICAgICB0aGlzLnN1Ym1pdEFjdGlvblJlcXVlc3QodGhpcy5zdWJtaXR0ZWRDb250YWN0VmFsdWUsIHRoaXMudHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMuc3VibWl0dGVkQ29udGFjdFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXNzaWduU21zUmVzcG9uc2UocmVzcG9uc2VPYmopIHtcclxuICAgIHRoaXMuc21zQm9keVJlc3BvbnNlID0gT2JqZWN0LmFzc2lnbih7fSwgeyBoYXNoOiByZXNwb25zZU9iai5oYXNoIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlT2JqLnVybFZhbGlkYXRpb25Db2RlKSB7XHJcbiAgICAgIHRoaXMuc21zQm9keVJlc3BvbnNlID0gT2JqZWN0LmFzc2lnbih0aGlzLnNtc0JvZHlSZXNwb25zZSwgeyB1cmxWYWxpZGF0aW9uQ29kZTogcmVzcG9uc2VPYmoudXJsVmFsaWRhdGlvbkNvZGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbmNlbEFjdGlvbigpIHtcclxuICAgIHRoaXMucmVzZXRGb3JtRmllbGRzKHRoaXMuY29udHJvbCk7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZENvbnRhY3RWYWx1ZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuY2hvc2VuVHlwZUZvcm1PcHRpb24gPSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuRW1haWw7XHJcbiAgICB0aGlzLm1vZGFsVHlwZSA9IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5TW9kYWxDb250ZW50LkVtYWlsO1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5tb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlQWxsID8gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLkFsbCA6IHRoaXMudHlwZTtcclxuICAgIHRoaXMucmVjb3ZlcnlNb2RhbEVsZW1lbnQuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tGb3JtVHlwZSh0eXBlOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUpIHtcclxuICAgIHJldHVybiB0eXBlICE9PSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuQWxsID8gdHlwZSA6IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZS5FbWFpbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlc2V0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbWl0VmFsdWUodHlwZTogUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlKSB7XHJcbiAgICByZXR1cm4gdHlwZSA9PT0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLlNNUyA/IHRoaXMucGhvbmUgOiB0aGlzLmVtYWlsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmNyZW1lbnRSZXRyeUF0dGVtcHRzKCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWRDb250YWN0VmFsdWUucmV0cnkgPSB0aGlzLnN1Ym1pdHRlZENvbnRhY3RWYWx1ZS5yZXRyeSArIDEgfHwgMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkV4dGVybmFsTGluayh1cmwsIHF1ZXJ5UGFyYW0pIHtcclxuICAgIHdpbmRvdy5vcGVuKGAke3VybH0/dG9rZW49JHtxdWVyeVBhcmFtfWAsICdfc2VsZicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuSW50ZXJuYWxMaW5rKHVybCwgZW5kcG9pbnQsIHF1ZXJ5UGFyYW0pIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgJHt1cmx9LyR7ZW5kcG9pbnR9YF0sIHsgcXVlcnlQYXJhbXM6IHsgdG9rZW46IHF1ZXJ5UGFyYW0gfSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGlwZU1vZGFsUGhyYXNlcygpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZS5TTVMpIHtcclxuICAgICAgdGhpcy5lbWFpbE1vZGFsUGhyYXNlcy5maXJzdFBocmFzZSA9IHRoaXMuc2V0UGlwZUFyZ3VtZW50cyhcclxuICAgICAgICB0aGlzLmxpdGVyYWxzLnJlY292ZXJ5UGFzc3dvcmRQaHJhc2UsXHJcbiAgICAgICAgdGhpcy5saXRlcmFscy5zbXNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5lbWFpbE1vZGFsUGhyYXNlcy5zZWNvbmRQaHJhc2UgPSB0aGlzLnNldFBpcGVBcmd1bWVudHMoXHJcbiAgICAgICAgdGhpcy5saXRlcmFscy5zdXBwb3J0Q29udGFjdCxcclxuICAgICAgICB0aGlzLmxpdGVyYWxzLnRlbGVwaG9uZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbWFpbE1vZGFsUGhyYXNlcy5maXJzdFBocmFzZSA9IHRoaXMuc2V0UGlwZUFyZ3VtZW50cyhcclxuICAgICAgICB0aGlzLmxpdGVyYWxzLnJlY292ZXJ5UGFzc3dvcmRQaHJhc2UsXHJcbiAgICAgICAgdGhpcy5saXRlcmFscy5lbWFpbFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmVtYWlsTW9kYWxQaHJhc2VzLnNlY29uZFBocmFzZSA9IHRoaXMuc2V0UGlwZUFyZ3VtZW50cyh0aGlzLmxpdGVyYWxzLnN1cHBvcnRDb250YWN0LCB0aGlzLmxpdGVyYWxzLmVtYWlsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVkaXJlY3RUb0NoYW5nZVBhc3N3b3JkKHJlY292ZXJ5VG9rZW46IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5KSB7XHJcbiAgICBjb25zdCB1cmxDaGFuZ2VQYXNzd29yZCA9IHJlY292ZXJ5VG9rZW4udXJsQ2hhbmdlUGFzc3dvcmQ7XHJcbiAgICBpZiAodXJsQ2hhbmdlUGFzc3dvcmQpIHtcclxuICAgICAgaXNFeHRlcm5hbExpbmsodXJsQ2hhbmdlUGFzc3dvcmQpXHJcbiAgICAgICAgPyB0aGlzLm9wZW5FeHRlcm5hbExpbmsodXJsQ2hhbmdlUGFzc3dvcmQsIHJlY292ZXJ5VG9rZW4udG9rZW4pXHJcbiAgICAgICAgOiB0aGlzLm9wZW5JbnRlcm5hbExpbmsodGhpcy51cmxSZWNvdmVyeSwgdXJsQ2hhbmdlUGFzc3dvcmQsIHJlY292ZXJ5VG9rZW4udG9rZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY2hhbmdlUGFzc3dvcmRFbmRwb2ludCA9ICdjaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgIHRoaXMub3BlbkludGVybmFsTGluayh0aGlzLnVybFJlY292ZXJ5LCBjaGFuZ2VQYXNzd29yZEVuZHBvaW50LCByZWNvdmVyeVRva2VuLnRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRGb3JtRmllbGRzKGNvbnRyb2wpIHtcclxuICAgIHRoaXMuZm9ybVJlc2V0KGNvbnRyb2wpO1xyXG4gICAgdGhpcy5lbWFpbCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucGhvbmUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNtc0NvZGUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFjdGlvbnMocHJpbWFyeUFjdGlvbiwgcHJpbWFyeWxhYmVsLCBzZWNvbmRhcnlBY3Rpb24sIHNlY29uZGFyeUxhYmVsLCBkaXNhYmxlZCkge1xyXG4gICAgdGhpcy5wcmltYXJ5QWN0aW9uLmFjdGlvbiA9ICgpID0+IHByaW1hcnlBY3Rpb24uY2FsbCh0aGlzKTtcclxuICAgIHRoaXMucHJpbWFyeUFjdGlvbi5sYWJlbCA9IHByaW1hcnlsYWJlbDtcclxuICAgIHRoaXMuc2Vjb25kYXJ5QWN0aW9uLmFjdGlvbiA9ICgpID0+IHNlY29uZGFyeUFjdGlvbi5jYWxsKHRoaXMpO1xyXG4gICAgdGhpcy5zZWNvbmRhcnlBY3Rpb24ubGFiZWwgPSBzZWNvbmRhcnlMYWJlbDtcclxuICAgIHRoaXMucHJpbWFyeUFjdGlvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRFbWFpbE1vZGFsUGhyYXNlc0FuZEFjdGlvbnMoKSB7XHJcbiAgICB0aGlzLm1vZGFsVGl0bGUgPSB0aGlzLmxpdGVyYWxzLmZvcmdvdFBhc3N3b3JkVGl0bGU7XHJcbiAgICB0aGlzLnBpcGVNb2RhbFBocmFzZXMoKTtcclxuICAgIHRoaXMubW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZUFsbCA9IHRoaXMudHlwZSA9PT0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLkFsbDtcclxuICAgIHRoaXMuc2V0QWN0aW9ucyh0aGlzLnN1Ym1pdEFjdGlvbiwgdGhpcy5saXRlcmFscy5zZW5kQnV0dG9uLCB0aGlzLmNhbmNlbEFjdGlvbiwgdGhpcy5saXRlcmFscy5jYW5jZWxCdXR0b24sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZXF1ZXN0RW5kcG9pbnQodXJsVmFsaWRhdGlvbkNvZGU/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gdXJsVmFsaWRhdGlvbkNvZGUgfHwgJ3ZhbGlkYXRpb24nO1xyXG5cclxuICAgIHJldHVybiBgJHt0aGlzLnVybFJlY292ZXJ5fS8ke2VuZHBvaW50fWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBpcGVBcmd1bWVudHMobGl0ZXJhbEF0dHI6IHN0cmluZywgYXJnOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnBvSTE4blBpcGUudHJhbnNmb3JtKGxpdGVyYWxBdHRyLCBhcmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRBY3Rpb24oKSB7XHJcbiAgICB0aGlzLm1vZGFsVHlwZSA9PT0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlNb2RhbENvbnRlbnQuQ29uZmlybWF0aW9uXHJcbiAgICAgID8gdGhpcy5pbmNyZW1lbnRSZXRyeUF0dGVtcHRzKClcclxuICAgICAgOiB0aGlzLmZvcm1SZXNldCh0aGlzLmNvbnRyb2wpO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWRDb250YWN0VmFsdWVbdGhpcy5jaGVja0Zvcm1UeXBlKHRoaXMudHlwZSldID0gdGhpcy5nZXRFbWl0VmFsdWUodGhpcy50eXBlKTtcclxuICAgIGlmICh0aGlzLnVybFJlY292ZXJ5KSB7XHJcbiAgICAgIHRoaXMuc3VibWl0QWN0aW9uUmVxdWVzdCh0aGlzLnN1Ym1pdHRlZENvbnRhY3RWYWx1ZSwgdGhpcy50eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQodGhpcy5zdWJtaXR0ZWRDb250YWN0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRBY3Rpb25SZXF1ZXN0KGRhdGE6IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5LCBtb2RhbFR5cGU6IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZSkge1xyXG4gICAgY29uc3QgcGFyYW1zID0gbW9kYWxUeXBlID09PSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuU01TID8geyB0eXBlOiAnc21zJyB9IDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMucGFzc3dvcmRSZWNvdmVyeVN1YnNjcmlwdGlvbiA9IHRoaXMucG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlTZXJ2aWNlXHJcbiAgICAgIC5wb3N0KHRoaXMudXJsUmVjb3ZlcnksIGRhdGEsIHBhcmFtcylcclxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKG1vZGFsVHlwZSA9PT0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLkVtYWlsIHx8IG1vZGFsVHlwZSA9PT0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLkFsbCkgJiZcclxuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm9wZW5Db25maXJtYXRpb24oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGFsVHlwZSA9PT0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLlNNUyAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgdGhpcy5hc3NpZ25TbXNSZXNwb25zZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICAgIHRoaXMub3BlblNtc0NvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRTbXNDb2RlQWN0aW9uKCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWRDb2RlVmFsdWUuY29kZSA9IHRoaXMuc21zQ29kZTtcclxuXHJcbiAgICBpZiAodGhpcy51cmxSZWNvdmVyeSkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZENvZGVWYWx1ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdWJtaXR0ZWRDb2RlVmFsdWUsIHsgaGFzaDogdGhpcy5zbXNCb2R5UmVzcG9uc2UuaGFzaCB9KTtcclxuICAgICAgdGhpcy5zdWJtaXRTbXNDb2RlUmVxdWVzdCh0aGlzLnN1Ym1pdHRlZENvZGVWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvZGVTdWJtaXQuZW1pdCh0aGlzLnN1Ym1pdHRlZENvZGVWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0Rm9ybUZpZWxkcyh0aGlzLmNvbnRyb2wpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRTbXNDb2RlUmVxdWVzdChkYXRhOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeSkge1xyXG4gICAgdGhpcy5zbXNDb2RlU3Vic2NyaXB0aW9uID0gdGhpcy5wb01vZGFsUGFzc3dvcmRSZWNvdmVyeVNlcnZpY2VcclxuICAgICAgLnBvc3QodGhpcy5zZXRSZXF1ZXN0RW5kcG9pbnQodGhpcy5zbXNCb2R5UmVzcG9uc2UudXJsVmFsaWRhdGlvbkNvZGUpLCBkYXRhKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NTdGF0dXMgPSByZXNwb25zZS5zdGF0dXMgPT09IDIwMDtcclxuICAgICAgICAgIGlmIChzdWNjZXNzU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb0NoYW5nZVBhc3N3b3JkKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb2RlRXJyb3IgPSBlcnJvci5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgdGhpcy5vcGVuU21zQ29kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIiwiPHBvLW1vZGFsXHJcbiAgI3JlY292ZXJ5TW9kYWxcclxuICBwLWhpZGUtY2xvc2VcclxuICBwLXNpemU9XCJhdXRvXCJcclxuICBbbmdTd2l0Y2hdPVwibW9kYWxUeXBlXCJcclxuICBbcC1wcmltYXJ5LWFjdGlvbl09XCJwcmltYXJ5QWN0aW9uXCJcclxuICBbcC1zZWNvbmRhcnktYWN0aW9uXT1cInNlY29uZGFyeUFjdGlvblwiXHJcbiAgW3AtdGl0bGVdPVwibW9kYWxUaXRsZVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3Zlcnktd3JhcHBlclwiPlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2VtYWlsJ1wiIGNsYXNzPVwicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktY29udGVudCBwby1yb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXRleHQgcG8tbWQtMTIgcG8tbWItMVwiPlxyXG4gICAgICAgIHt7IGVtYWlsTW9kYWxQaHJhc2VzLmZpcnN0UGhyYXNlIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tbWItMiBwby1tZC0xMlwiPlxyXG4gICAgICAgIDxmb3JtICNlbWFpbEZvcm09XCJuZ0Zvcm1cIj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJtb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlQWxsXCI+XHJcbiAgICAgICAgICAgIDxwby1yYWRpby1ncm91cFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNob3NlblR5cGVGb3JtT3B0aW9uXCJcclxuICAgICAgICAgICAgICBbcC1vcHRpb25zXT1cInR5cGVGb3JtT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgKHAtY2hhbmdlKT1cImdldElucHV0VHlwZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3BvLXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvLW10LTFcIj5cclxuICAgICAgICAgICAgPHBvLWVtYWlsXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJ0eXBlID09PSAnZW1haWwnIHx8IHR5cGUgPT09ICdhbGwnXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5pbnNlcnRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgKHAtY2hhbmdlLW1vZGVsKT1cImZvcm1Nb2RlbENoYW5nZXNDaGVjayhlbWFpbEZvcm0pXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3BvLWVtYWlsPlxyXG5cclxuICAgICAgICAgICAgPHBvLWlucHV0XHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJ0eXBlID09PSAnc21zJ1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNtc1wiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgcC1pY29uPVwicG8taWNvbi10ZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgIHAtcmVxdWlyZWRcclxuICAgICAgICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5pbnNlcnRQaG9uZVwiXHJcbiAgICAgICAgICAgICAgW3AtbWFza109XCJwaG9uZU1hc2tcIlxyXG4gICAgICAgICAgICAgIFtwLW1heGxlbmd0aF09XCJtYXhMZW5ndGhcIlxyXG4gICAgICAgICAgICAgIFtwLW1pbmxlbmd0aF09XCJtaW5MZW5ndGhcIlxyXG4gICAgICAgICAgICAgIChwLWNoYW5nZS1tb2RlbCk9XCJmb3JtTW9kZWxDaGFuZ2VzQ2hlY2soZW1haWxGb3JtKVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wby1pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItYm90dG9tIHBvLWZpZWxkLWNvbnRhaW5lci1lcnJvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWVycm9yLW1lc3NhZ2VcclxuICAgICAgICAgICAgICAqbmdJZj1cImludmFsaWRFbWFpbCAmJiBjb250cm9sLmRpcnR5XCJcclxuICAgICAgICAgICAgICBbcC10ZXh0XT1cInR5cGUgPT09ICdzbXMnID8gbGl0ZXJhbHMucGhvbmVFcnJvck1lc3NhZ2VQaHJhc2UgOiBsaXRlcmFscy5lbWFpbEVycm9yTWVzc2FnZVBocmFzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1lcnJvci1tZXNzYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXRleHQgcG8tbWQtMTJcIj5cclxuICAgICAgICB7eyBlbWFpbE1vZGFsUGhyYXNlcy5zZWNvbmRQaHJhc2UgfX1cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImNvbnRhY3RFbWFpbFwiPlxyXG4gICAgICAgICAge3sgbGl0ZXJhbHMucHJlcG9zaXRpb25JbiB9fVxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJwby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1saW5rXCIgaHJlZj1cIm1haWx0bzp7eyBjb250YWN0RW1haWwgfX1cIiB0YXJnZXQ9XCJfc2VsZlwiPlxyXG4gICAgICAgICAgICB7eyBjb250YWN0RW1haWwgfX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAge3sgZW5kcG9pbnQgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICNzbXNDb2RlTW9kYWwgKm5nU3dpdGNoQ2FzZT1cIidzbXNDb2RlJ1wiIGNsYXNzPVwicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktY29udGVudCBwby1yb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXRleHQgcG8tbWQtMTIgcG8tbWItMVwiPnt7IGxpdGVyYWxzLnNlbnRTbXNDb2RlUGhyYXNlIH19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1tYi0yIHBvLW1kLTEyXCI+XHJcbiAgICAgICAgPGZvcm0gI3Ntc0NvZGVGb3JtPVwibmdGb3JtXCI+XHJcbiAgICAgICAgICA8cG8taW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInNtc1wiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwic21zQ29kZVwiXHJcbiAgICAgICAgICAgIHAtbWF4bGVuZ3RoPVwiMTFcIlxyXG4gICAgICAgICAgICBwLW1pbmxlbmd0aD1cIjExXCJcclxuICAgICAgICAgICAgcC1yZXF1aXJlZFxyXG4gICAgICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5pbnNlcnRDb2RlXCJcclxuICAgICAgICAgICAgW3AtbWFza109XCJjb2RlTWFza1wiXHJcbiAgICAgICAgICAgIChwLWNoYW5nZS1tb2RlbCk9XCJmb3JtTW9kZWxDaGFuZ2VzQ2hlY2soc21zQ29kZUZvcm0pXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcG8taW5wdXQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWJvdHRvbSBwby1maWVsZC1jb250YWluZXItZXJyb3ItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxwby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1lcnJvci1tZXNzYWdlXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJpbnZhbGlkRW1haWxcIlxyXG4gICAgICAgICAgICAgIFtwLXRleHRdPVwic21zQ29kZUVycm9yTWVzc2FnZSB8fCB0aGlzLmxpdGVyYWxzLnNtc0NvZGVFcnJvck1lc3NhZ2VQaHJhc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktZXJyb3ItbWVzc2FnZT5cclxuICAgICAgICAgICAgPHBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJzaG93Q3VzdG9tQ29kZUVycm9yXCIgW3AtdGV4dF09XCJjb2RlRXJyb3JcIj5cclxuICAgICAgICAgICAgPC9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS1lcnJvci1tZXNzYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXRleHQgcG8tbWQtMTJcIj5cclxuICAgICAgICB7eyBsaXRlcmFscy5zZW5kQWdhaW5QaHJhc2UgfX1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWxpbmtcIiAoY2xpY2spPVwicmVzZW5kU21zQ29kZSgpXCI+e3sgbGl0ZXJhbHMuc2VuZEFnYWluIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgI2NvbmZpcm1hdGlvbk1vZGFsICpuZ1N3aXRjaENhc2U9XCInY29uZmlybWF0aW9uJ1wiIGNsYXNzPVwicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktY29udGVudCBwby1yb3dcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInBvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LXVzZXItaW1hZ2UgcG8tbWItMlwiIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9lbWFpbC1zZW50LnN2Z1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS10ZXh0XCI+XHJcbiAgICAgICAge3sgbGl0ZXJhbHMuZW1haWxTZW50Q29uZmlybWF0aW9uUGhyYXNlIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvcG8tbW9kYWw+XHJcbiJdfQ==