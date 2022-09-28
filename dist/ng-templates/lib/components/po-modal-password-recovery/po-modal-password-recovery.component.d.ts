import { OnDestroy } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoI18nPipe, PoLanguageService, PoModalAction, PoModalComponent, PoRadioGroupOption } from '@po-ui/ng-components';
import { PoModalPasswordRecovery } from './interfaces/po-modal-password-recovery.interface';
import { PoModalPasswordRecoveryBaseComponent } from './po-modal-password-recovery-base.component';
import { PoModalPasswordRecoveryModalContent } from './enums/po-modal-password-recovery-modal-content.enum';
import { PoModalPasswordRecoveryService } from './po-modal-password-recovery.service';
import * as i0 from "@angular/core";
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
export declare class PoModalPasswordRecoveryComponent extends PoModalPasswordRecoveryBaseComponent implements OnDestroy {
    private router;
    private poI18nPipe;
    private poModalPasswordRecoveryService;
    emailForm: NgForm;
    recoveryModalElement: PoModalComponent;
    smsCodeForm: NgForm;
    chosenTypeFormOption: string;
    codeMask: string;
    control: AbstractControl;
    emailModal: boolean;
    emailModalPhrases: {
        firstPhrase: string;
        secondPhrase: string;
    };
    endpoint: string;
    invalidCode: boolean;
    invalidEmail: boolean;
    modalTitle: string;
    modalType: PoModalPasswordRecoveryModalContent;
    showCustomCodeError: boolean;
    smsCodeErrorMessagePhrase: string;
    submittedCodeValue: PoModalPasswordRecovery;
    submittedContactValue: PoModalPasswordRecovery;
    primaryAction: PoModalAction;
    secondaryAction: PoModalAction;
    typeFormOptions: Array<PoRadioGroupOption>;
    private passwordRecoverySubscription;
    private smsBodyResponse;
    private smsCodeSubscription;
    constructor(router: Router, poI18nPipe: PoI18nPipe, poModalPasswordRecoveryService: PoModalPasswordRecoveryService, poLanguageService: PoLanguageService);
    ngOnDestroy(): void;
    completed(): void;
    formModelChangesCheck(form: NgForm): void;
    getInputType(type: any): void;
    open(): void;
    openConfirmation(): void;
    openSmsCode(): void;
    resendSmsCode(): void;
    private assignSmsResponse;
    private cancelAction;
    private checkFormType;
    private formReset;
    private getEmitValue;
    private incrementRetryAttempts;
    private openExternalLink;
    private openInternalLink;
    private pipeModalPhrases;
    private redirectToChangePassword;
    private resetFormFields;
    private setActions;
    private setEmailModalPhrasesAndActions;
    private setRequestEndpoint;
    private setPipeArguments;
    private submitAction;
    private submitActionRequest;
    private submitSmsCodeAction;
    private submitSmsCodeRequest;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoModalPasswordRecoveryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoModalPasswordRecoveryComponent, "po-modal-password-recovery", never, {}, {}, never, never, false>;
}
