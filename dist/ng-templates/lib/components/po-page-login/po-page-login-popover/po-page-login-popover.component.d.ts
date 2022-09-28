import { EventEmitter } from '@angular/core';
import { PoPageLoginLiterals } from '../interfaces/po-page-login-literals.interface';
import { PoPageLoginRecovery } from '../interfaces/po-page-login-recovery.interface';
import * as i0 from "@angular/core";
export declare class PoPageLoginPopoverComponent {
    literals: PoPageLoginLiterals;
    /** exibe o link de 'esqueci minha senha' e verifica se o valor é um link interno ou externo */
    set recovery(value: string | Function | PoPageLoginRecovery);
    get recovery(): string | Function | PoPageLoginRecovery;
    /** define se a mensagem deverá ser exibida caso seja maior que 0(zero) */
    remainingAttempts: number;
    /** se 'p-recovery' for do tipo Function ou PoPageLoginRecovery, emite para o método 'openUrl' do componente 'po-page-login' */
    forgotPassword: EventEmitter<any>;
    recoveryType: string;
    private _recovery;
    onForgotPasswordClick(recovery: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageLoginPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageLoginPopoverComponent, "po-page-login-popover", never, { "literals": "p-literals"; "recovery": "p-recovery"; "remainingAttempts": "p-remaining-attempts"; }, { "forgotPassword": "p-forgot-password"; }, never, never, false>;
}
