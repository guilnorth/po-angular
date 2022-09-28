import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { poLocaleDefault } from '@po-ui/ng-components';
import { poModalPasswordRecoveryLiterals } from './literals/i18n/po-modal-password-recovery-literals';
import { PoModalPasswordRecoveryType } from './enums/po-modal-password-recovery-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
const PoModalPasswordRecoveryDefaultMaxLength = 15;
const PoModalPasswordRecoveryDefaultMinLength = 15;
const PoModalPasswordRecoveryDefaultPhone = '(99) 99999-9999';
const PoModalPasswordRecoveryTypeDefault = PoModalPasswordRecoveryType.Email;
/**
 * @description
 *
 * O componente `po-modal-password-recovery` é utilizado como template para solicitação de troca de senha.
 *
 * É composto por uma modal que possui três telas, cada uma com as seguintes características:
 *
 * - A primeira possui campos para preenchimento de email ou número de telefone;
 * - Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;
 * - A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.
 *
 *
 * A propriedade `p-url-recovery` automatiza a rotina do componente e simplifica o processo
 * para recuperação de senha, bastando definir uma url para requisição dos recursos.
 * Seu detalhamento para uso pode ser visto logo abaixo em *propriedades*.
 * Caso julgue necessário, pode-se também definir manualmente a rotina do componente.
 *
 *
 * Para a modal de digitação de código SMS, é possível definir uma mensagem de erro
 * customizada com a propriedade `p-code-error` e há um link para
 * reenvio de código por SMS. Ao reenviar, o evento `p-code-submit` envia um objeto com o telefone do usuário e a quantidade
 * de vezes em que o usuário fez a solicitação de reenvio.
 *
 * > É indicada a utilização da tela de digitação para envio de código SMS apenas
 * se a opção por envio SMS for disponibilizada para o usuário.
 *
 *
 * A modal de confirmação contém uma ação de reenvio e o evento `p-submit`
 * é quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.
 *
 * > A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.
 *
 * > Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do *browser* (pt, en e es)
 *
 * Para que as imagens sejam exibidas corretamente, é necessário incluir o caminho delas ao projeto. Para isso, edite
 * o *assets* no arquivo **angular.json** da aplicação na seguinte ordem:
 * ```
 *   "assets": [
 *     "src/assets",
 *     "src/favicon.ico",
 *     {
 *       "glob": "**\/*",
 *       "input": "node_modules/@po-ui/style/images",
 *       "output": "assets/images"
 *     }
 *   ]
 * ```
 */
export class PoModalPasswordRecoveryBaseComponent {
    constructor(languageService) {
        /**
         * @optional
         *
         * @description
         *
         * Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.
         *
         * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
         */
        this.codeSubmit = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.
         *
         * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
         */
        this.submit = new EventEmitter();
        this.maxLength = PoModalPasswordRecoveryDefaultMaxLength;
        this.minLength = PoModalPasswordRecoveryDefaultMinLength;
        this.literals = poModalPasswordRecoveryLiterals[poLocaleDefault];
        this._phoneMask = PoModalPasswordRecoveryDefaultPhone;
        this._type = PoModalPasswordRecoveryTypeDefault;
        this.literals = {
            ...this.literals,
            ...poModalPasswordRecoveryLiterals[languageService.getShortLanguage()]
        };
    }
    /**
     * @optional
     *
     * @description
     *
     * Definição do e-mail que é exibido na mensagem para contato de suporte.
     */
    set contactEmail(value) {
        this._contactEmail = value;
        this.smsCodeErrorMessage = this.concatenateSMSErrorMessage(value);
    }
    get contactEmail() {
        return this._contactEmail;
    }
    /**
     * @optional
     *
     * @description
     *
     * Definição da mascara do campo de telefone.
     *
     * @default `(99) 99999-9999`
     */
    set phoneMask(value) {
        this._phoneMask = value || PoModalPasswordRecoveryDefaultPhone;
        this.minLength = this.maxLength = this._phoneMask.length;
    }
    get phoneMask() {
        return this._phoneMask;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o tipo de recuperação de senha que será exibido.
     *
     * @default `PoModalPasswordRecoveryType.Email`
     *
     */
    set type(value) {
        this._type = Object.values(PoModalPasswordRecoveryType).includes(value)
            ? value
            : PoModalPasswordRecoveryTypeDefault;
    }
    get type() {
        return this._type;
    }
    concatenateSMSErrorMessage(value) {
        const literalCodeErrorMessage = this.literals.smsCodeErrorMessagePhrase;
        return value && value !== ''
            ? `${literalCodeErrorMessage} ${this.literals.prepositionIn} ${value}.`
            : literalCodeErrorMessage;
    }
}
PoModalPasswordRecoveryBaseComponent.ɵfac = function PoModalPasswordRecoveryBaseComponent_Factory(t) { return new (t || PoModalPasswordRecoveryBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoModalPasswordRecoveryBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoModalPasswordRecoveryBaseComponent, inputs: { codeError: ["p-code-error", "codeError"], urlRecovery: ["p-url-recovery", "urlRecovery"], contactEmail: ["p-contact-email", "contactEmail"], phoneMask: ["p-phone-mask", "phoneMask"], type: ["p-type", "type"] }, outputs: { codeSubmit: "p-code-submit", submit: "p-submit" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { codeError: [{
            type: Input,
            args: ['p-code-error']
        }], urlRecovery: [{
            type: Input,
            args: ['p-url-recovery']
        }], codeSubmit: [{
            type: Output,
            args: ['p-code-submit']
        }], submit: [{
            type: Output,
            args: ['p-submit']
        }], contactEmail: [{
            type: Input,
            args: ['p-contact-email']
        }], phoneMask: [{
            type: Input,
            args: ['p-phone-mask']
        }], type: [{
            type: Input,
            args: ['p-type']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnktYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5L3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFxQixlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7O0FBRTNGLE1BQU0sdUNBQXVDLEdBQUcsRUFBRSxDQUFDO0FBQ25ELE1BQU0sdUNBQXVDLEdBQUcsRUFBRSxDQUFDO0FBQ25ELE1BQU0sbUNBQW1DLEdBQUcsaUJBQWlCLENBQUM7QUFDOUQsTUFBTSxrQ0FBa0MsR0FBZ0MsMkJBQTJCLENBQUMsS0FBSyxDQUFDO0FBRTFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStDRztBQUVILE1BQU0sT0FBZ0Isb0NBQW9DO0lBNk94RCxZQUFZLGVBQWtDO1FBdkg5Qzs7Ozs7Ozs7V0FRRztRQUNzQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU5RDs7Ozs7Ozs7V0FRRztRQUNpQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdyRCxjQUFTLEdBQUcsdUNBQXVDLENBQUM7UUFDcEQsY0FBUyxHQUFHLHVDQUF1QyxDQUFDO1FBTXBELGFBQVEsR0E0QkosK0JBQStCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFHN0MsZUFBVSxHQUFHLG1DQUFtQyxDQUFDO1FBQ2pELFVBQUssR0FBZ0Msa0NBQWtDLENBQUM7UUEwRDlFLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ2hCLEdBQUcsK0JBQStCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkUsQ0FBQztJQUNKLENBQUM7SUE1REQ7Ozs7OztPQU1HO0lBQ0gsSUFBOEIsWUFBWSxDQUFDLEtBQWE7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQTJCLFNBQVMsQ0FBQyxLQUFhO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxJQUFJLG1DQUFtQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMzRCxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFxQixJQUFJLENBQUMsS0FBa0M7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM1RSxDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFTTywwQkFBMEIsQ0FBQyxLQUFhO1FBQzlDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztRQUV4RSxPQUFPLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRTtZQUMxQixDQUFDLENBQUMsR0FBRyx1QkFBdUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxLQUFLLEdBQUc7WUFDdkUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0lBQzlCLENBQUM7O3dIQTFQbUIsb0NBQW9DO3VGQUFwQyxvQ0FBb0M7dUZBQXBDLG9DQUFvQztjQUR6RCxTQUFTO29FQVNlLFNBQVM7a0JBQS9CLEtBQUs7bUJBQUMsY0FBYztZQTRHSSxXQUFXO2tCQUFuQyxLQUFLO21CQUFDLGdCQUFnQjtZQVdFLFVBQVU7a0JBQWxDLE1BQU07bUJBQUMsZUFBZTtZQVdILE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQW1EWSxZQUFZO2tCQUF6QyxLQUFLO21CQUFDLGlCQUFpQjtZQW1CRyxTQUFTO2tCQUFuQyxLQUFLO21CQUFDLGNBQWM7WUFtQkEsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlLCBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBwb01vZGFsUGFzc3dvcmRSZWNvdmVyeUxpdGVyYWxzIH0gZnJvbSAnLi9saXRlcmFscy9pMThuL3BvLW1vZGFsLXBhc3N3b3JkLXJlY292ZXJ5LWxpdGVyYWxzJztcclxuaW1wb3J0IHsgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlIH0gZnJvbSAnLi9lbnVtcy9wby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeS10eXBlLmVudW0nO1xyXG5cclxuY29uc3QgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlEZWZhdWx0TWF4TGVuZ3RoID0gMTU7XHJcbmNvbnN0IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5RGVmYXVsdE1pbkxlbmd0aCA9IDE1O1xyXG5jb25zdCBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeURlZmF1bHRQaG9uZSA9ICcoOTkpIDk5OTk5LTk5OTknO1xyXG5jb25zdCBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGVEZWZhdWx0OiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUgPSBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuRW1haWw7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnlgIMOpIHV0aWxpemFkbyBjb21vIHRlbXBsYXRlIHBhcmEgc29saWNpdGHDp8OjbyBkZSB0cm9jYSBkZSBzZW5oYS5cclxuICpcclxuICogw4kgY29tcG9zdG8gcG9yIHVtYSBtb2RhbCBxdWUgcG9zc3VpIHRyw6pzIHRlbGFzLCBjYWRhIHVtYSBjb20gYXMgc2VndWludGVzIGNhcmFjdGVyw61zdGljYXM6XHJcbiAqXHJcbiAqIC0gQSBwcmltZWlyYSBwb3NzdWkgY2FtcG9zIHBhcmEgcHJlZW5jaGltZW50byBkZSBlbWFpbCBvdSBuw7ptZXJvIGRlIHRlbGVmb25lO1xyXG4gKiAtIFRlbGEgY29tIGNhbXBvIHBhcmEgcHJlZW5jaGltZW50byBkZSBjw7NkaWdvIFNNUyBlbnZpYWRvIHBhcmEgbyBuw7ptZXJvIGRlIHRlbGVmb25lIGVudmlhZG87XHJcbiAqIC0gQSB0ZXJjZWlyYSBzZSB0cmF0YSBkZSB1bWEgY29uZmlybWHDp8OjbyBkZSBlbnZpbyBkZSBsaW5rIHBhcmEgYSBjYWl4YSBkZSBlbWFpbCBkbyB1c3XDoXJpby5cclxuICpcclxuICpcclxuICogQSBwcm9wcmllZGFkZSBgcC11cmwtcmVjb3ZlcnlgIGF1dG9tYXRpemEgYSByb3RpbmEgZG8gY29tcG9uZW50ZSBlIHNpbXBsaWZpY2EgbyBwcm9jZXNzb1xyXG4gKiBwYXJhIHJlY3VwZXJhw6fDo28gZGUgc2VuaGEsIGJhc3RhbmRvIGRlZmluaXIgdW1hIHVybCBwYXJhIHJlcXVpc2nDp8OjbyBkb3MgcmVjdXJzb3MuXHJcbiAqIFNldSBkZXRhbGhhbWVudG8gcGFyYSB1c28gcG9kZSBzZXIgdmlzdG8gbG9nbyBhYmFpeG8gZW0gKnByb3ByaWVkYWRlcyouXHJcbiAqIENhc28ganVsZ3VlIG5lY2Vzc8OhcmlvLCBwb2RlLXNlIHRhbWLDqW0gZGVmaW5pciBtYW51YWxtZW50ZSBhIHJvdGluYSBkbyBjb21wb25lbnRlLlxyXG4gKlxyXG4gKlxyXG4gKiBQYXJhIGEgbW9kYWwgZGUgZGlnaXRhw6fDo28gZGUgY8OzZGlnbyBTTVMsIMOpIHBvc3PDrXZlbCBkZWZpbmlyIHVtYSBtZW5zYWdlbSBkZSBlcnJvXHJcbiAqIGN1c3RvbWl6YWRhIGNvbSBhIHByb3ByaWVkYWRlIGBwLWNvZGUtZXJyb3JgIGUgaMOhIHVtIGxpbmsgcGFyYVxyXG4gKiByZWVudmlvIGRlIGPDs2RpZ28gcG9yIFNNUy4gQW8gcmVlbnZpYXIsIG8gZXZlbnRvIGBwLWNvZGUtc3VibWl0YCBlbnZpYSB1bSBvYmpldG8gY29tIG8gdGVsZWZvbmUgZG8gdXN1w6FyaW8gZSBhIHF1YW50aWRhZGVcclxuICogZGUgdmV6ZXMgZW0gcXVlIG8gdXN1w6FyaW8gZmV6IGEgc29saWNpdGHDp8OjbyBkZSByZWVudmlvLlxyXG4gKlxyXG4gKiA+IMOJIGluZGljYWRhIGEgdXRpbGl6YcOnw6NvIGRhIHRlbGEgZGUgZGlnaXRhw6fDo28gcGFyYSBlbnZpbyBkZSBjw7NkaWdvIFNNUyBhcGVuYXNcclxuICogc2UgYSBvcMOnw6NvIHBvciBlbnZpbyBTTVMgZm9yIGRpc3BvbmliaWxpemFkYSBwYXJhIG8gdXN1w6FyaW8uXHJcbiAqXHJcbiAqXHJcbiAqIEEgbW9kYWwgZGUgY29uZmlybWHDp8OjbyBjb250w6ltIHVtYSBhw6fDo28gZGUgcmVlbnZpbyBlIG8gZXZlbnRvIGBwLXN1Ym1pdGBcclxuICogw6kgcXVlbSBwYXNzYSBvIG9iamV0byBjb250ZW5kbyBvIGVtYWlsIGVtIGNvbmp1bnRvIGNvbSBhIHF1YW50aWRhZGUgZGUgdGVudGF0aXZhcyBkZSByZWVudmlvLlxyXG4gKlxyXG4gKiA+IEEgdGVsYSBkZSBjb25maXJtYcOnw6NvIMOpIGluZGljYWRhIHBhcmEgcXVhbmRvIG8gdXN1w6FyaW8gc29saWNpdGFyIGEgdHJvY2EgYXRyYXbDqXMgZG8gZW1haWwuXHJcbiAqXHJcbiAqID4gT3MgdGV4dG9zIGRhcyBtb2RhbHMgc8OjbyBwcsOpLWRlZmluaWRvcywgaW11dMOhdmVpcyBlIHPDo28gdHJhZHV6aWRvcyBkZSBhY29yZG8gY29tIG8gaWRpb21hIGRvICpicm93c2VyKiAocHQsIGVuIGUgZXMpXHJcbiAqXHJcbiAqIFBhcmEgcXVlIGFzIGltYWdlbnMgc2VqYW0gZXhpYmlkYXMgY29ycmV0YW1lbnRlLCDDqSBuZWNlc3PDoXJpbyBpbmNsdWlyIG8gY2FtaW5obyBkZWxhcyBhbyBwcm9qZXRvLiBQYXJhIGlzc28sIGVkaXRlXHJcbiAqIG8gKmFzc2V0cyogbm8gYXJxdWl2byAqKmFuZ3VsYXIuanNvbioqIGRhIGFwbGljYcOnw6NvIG5hIHNlZ3VpbnRlIG9yZGVtOlxyXG4gKiBgYGBcclxuICogICBcImFzc2V0c1wiOiBbXHJcbiAqICAgICBcInNyYy9hc3NldHNcIixcclxuICogICAgIFwic3JjL2Zhdmljb24uaWNvXCIsXHJcbiAqICAgICB7XHJcbiAqICAgICAgIFwiZ2xvYlwiOiBcIioqXFwvKlwiLFxyXG4gKiAgICAgICBcImlucHV0XCI6IFwibm9kZV9tb2R1bGVzL0Bwby11aS9zdHlsZS9pbWFnZXNcIixcclxuICogICAgICAgXCJvdXRwdXRcIjogXCJhc3NldHMvaW1hZ2VzXCJcclxuICogICAgIH1cclxuICogICBdXHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeUJhc2VDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmnDp8OjbyBkZSBtZW5zYWdlbSBkZSBlcnJvIGN1c3RvbWl6YWRhIHBhcmEgcXVhbmRvIG8gdXN1w6FyaW8gcGFzc2FyIHVtIGPDs2RpZ28gU01TIGludsOhbGlkbyBvdSBlcnJhZG8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNvZGUtZXJyb3InKSBjb2RlRXJyb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEVuZHBvaW50IHVzYWRvIHBlbG8gdGVtcGxhdGUgcGFyYSByZXF1aXNpw6fDo28gZG8gcmVjdXJzby4gUXVhbmRvIHByZWVuY2hpZG8sXHJcbiAgICogbyBtw6l0b2RvcyBgcC1zdWJtaXRgIGUgYHAtc3VibWl0LWNvZGVgIHNlcsOjbyBpZ25vcmFkb3MgZSBvIGNvbXBvbmVudGUgYWRxdWlyaXLDoSBhdXRvbWF0aXphw6fDo29cclxuICAgKiBwYXJhIG8gcHJvY2Vzc28gZGUgc29saWNpdGHDp8OjbyBkZSB0cm9jYSBkZSBzZW5oYS5cclxuICAgKlxyXG4gICAqICMjIyBQcm9jZXNzb3NcclxuICAgKiBBbyBkaWdpdGFyIHVtIHZhbG9yIHbDoWxpZG8gbm8gY2FtcG8gZGUgZW1haWwvdGVsZWZvbmUgZSBwcmVzc2lvbmFyICoqZW52aWFyKiosXHJcbiAgICogbyBjb21wb25lbnRlIGZhcsOhIHVtYSByZXF1aXNpw6fDo28gYFBPU1RgIG5hIHVybCBlc3BlY2lmaWNhZGEgbmVzdGEgcHJvcHJpZWRhZGUgcGFzc2FuZG8gbyBvYmpldG8gY29udGVuZG8gbyB2YWxvciBkZWZpbmlkbyBwZWxvIHVzdcOhcmlvLlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogYm9keSB7XHJcbiAgICogIGVtYWlsOiBlbWFpbCxcclxuICAgKiAgcmV0cnk/OiByZXRyeVxyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqXHJcbiAgICogIyMjIyBSZWN1cGVyYcOnw6NvIHBvciBlbWFpbFxyXG4gICAqIFBhcmEgYSByZWN1cGVyYcOnw6NvIGRlIHNlbmhhIHBvciAqKmVtYWlsKiosIG8gY8OzZGlnbyBkZSByZXNwb3N0YSBIVFRQIGRlIHN0YXR1cyBlc3BlcmFkbyDDqSBgMjA0YC5cclxuICAgKlxyXG4gICAqIEVtIGNhc28gZGUgKipzdWNlc3NvKiosIHNlcsOhIGV4aWJpZGEgYSBtb2RhbCBkZSBjb25maXJtYcOnw6NvIGRlIGUtbWFpbCBwYXJhIG8gdXN1w6FyaW8uXHJcbiAgICpcclxuICAgKlxyXG4gICAqID4gQSBhw6fDo28gKipSZWVudmlhcioqIG5hIHRlbGEgZGUgY29uZmlybWHDp8OjbyBlZmV0dWEgdW1hIG5vdmEgcmVxdWlzacOnw6NvXHJcbiAgICogcGFzc2FuZG8tc2UgbyBvYmpldG8gY29tIGluY3JlbWVudG8gcGFyYSBvIHZhbG9yIGRhIHByb3ByaWVkYWRlICoqcmV0cnkqKi5cclxuICAgKlxyXG4gICAqICpQcm9jZXNzbyBmaW5hbGl6YWRvLipcclxuICAgKlxyXG4gICAqXHJcbiAgICogIyMjIyBSZWN1cGVyYcOnw6NvIHBvciBTTVNcclxuICAgKiBTZSBhIG9ww6fDo28gZGUgcmVjdXBlcmHDp8OjbyBmb3IgcG9yICoqU01TKiosIG8gY8OzZGlnbyBkZSBzdGF0dXMgZGUgc3VjZXNzbyBkZXZlIHNlciBgMjAwYC5cclxuICAgKiBFbSBjYXNvIGRlICoqc3VjZXNzbyoqLCBhYnJlLXNlIGEgbW9kYWwgZGUgZGlnaXRhw6fDo28gZGUgY8OzZGlnbyBTTVMgZSBhIHJlc3Bvc3RhXHJcbiAgICogZGVzdGEgcmVxdWlzacOnw6NvIGRldmUgcmV0b3JuYXIgdW1hIGRlZmluacOnw6NvIGRlIGRhZG9zIGFiYWl4bzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDIwMDpcclxuICAgKiAge1xyXG4gICAqICAgIGhhc2g6IGhhc2gsXHJcbiAgICogICAgdXJsVmFsaWRhdGlvbkNvZGU/OiB1cmxcclxuICAgKiAgfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICpcclxuICAgKiAtIE8gKipoYXNoKiogc2Vyw6EgbyBjw7NkaWdvIGRlIHZhbGlkYcOnw6NvIGRhIHNvbGljaXRhw6fDo28gZG8gU01TIHBhcmEgc2VyIGVudmlhZG8ganVudGFtZW50ZSBjb20gbyBjw7NkaWdvIGRlIHZlcmlmaWNhw6fDo28gZG8gU01TO1xyXG4gICAqIC0gKip1cmxWYWxpZGF0aW9uQ29kZSoqIMOpIGEgdXJsIHVzYWRhIHBhcmEgdmFsaWRhw6fDo28gZG8gY8OzZGlnbyBlbnZpYWRvIHBvciBTTVMuXHJcbiAgICpcclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHNlamEgcGFzc2FkbyB1cmxWYWxpZGF0aW9uQ29kZSwgbyBlbmRwb2ludCB1c2FkbyBwYXJhIHZhbGlkYcOnw6NvIGRvIGPDs2RpZ28gc2Vyw6EgYDxwLXVybC1yZWNvdmVyeT4vdmFsaWRhdGlvbmAuXHJcbiAgICpcclxuICAgKlxyXG4gICAqICMjIyMgVmFsaWRhw6fDo28gZG8gY8OzZGlnbyBTTVNcclxuICAgKiBBbyBkaWdpdGFyIHVtIHZhbG9yIHbDoWxpZG8gbm8gY2FtcG8gZGUgY8OzZGlnbyBTTVMgZSBwcmVzc2lvbmFyICoqY29udGludWFyKiosIG8gY29tcG9uZW50ZSBmYXLDoSB1bWEgcmVxdWlzacOnw6NvIGBQT1NUYCBjb250ZW5kbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIFBPU1QgLzxwLXVybC1yZWNvdmVyeT4vdmFsaWRhdGlvbiBPVSAvPHVybFZhbGlkYXRpb25Db2RlPlxyXG4gICAqIEJvZHkge1xyXG4gICAqICBoYXNoOiBoYXNoLFxyXG4gICAqICBjb2RlOiBjb2RlXHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICpcclxuICAgKiBPIGPDs2RpZ28gZGUgcmVzcG9zdGEgSFRUUCBkZSBzdGF0dXMgZXNwZXJhZG8gw6kgYDIwMGAuXHJcbiAgICpcclxuICAgKiBFbSBjYXNvIGRlICoqZXJybyoqIG5hIHZhbGlkYcOnw6NvIGRvIGPDs2RpZ28gU01TLCBhIG1vZGFsIHNlIG1hbnTDqW0gY29tIG8gY2FtcG8gcGFyYSBkaWdpdGHDp8Ojb1xyXG4gICAqIGRlIGPDs2RpZ28gU01TXHJcbiAgICpcclxuICAgKlxyXG4gICAqID4gUG9kZS1zZSBhdHJpYnVpciBhIG1lbnNhZ2VtIGRlIGVycm8gKG1lc3NhZ2UpIHBhcmEgbyBhdHJpYnV0byBgcC1jb2RlLWVycm9yYCBjb25mb3JtZSByZXRvcm5vIGFiYWl4bzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDQwMFxyXG4gICAqICB7XHJcbiAgICogICAgZXJyb3Ige1xyXG4gICAqICAgICAgbWVzc2FnZTogJ0Vycm9yIE1lc3NhZ2UnXHJcbiAgICogICAgfVxyXG4gICAqICB9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEVtIGNhc28gZGUgKipzdWNlc3NvKiosIGVzcGVyYS1zZSBhIHJlc3Bvc3RhIGRlc3RhIHJlcXVpc2nDp8OjbyByZXRvcm5hbmRvIGEgc2VndWludGUgZGVmaW5pw6fDo286XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAyMDA6XHJcbiAgICogIHtcclxuICAgKiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICogICAgdXJsQ2hhbmdlUGFzc3dvcmQ/OiB1cmxcclxuICAgKiAgfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICpcclxuICAgKiAtICoqdG9rZW4qKjogVG9rZW4gZGUgYWx0ZXJhw6fDo28gZGUgc2VuaGE7XHJcbiAgICogLSAqKnVybENoYW5nZVBhc3N3b3JkKio6IHVybCBwYXJhIG8gZm9ybXVsw6FyaW8gZGUgYWx0ZXJhw6fDo28gZGUgc2VuaGEuXHJcbiAgICpcclxuICAgKlxyXG4gICAqIE8gY29tcG9uZW50ZSBlc3TDoSBjb25maWd1cmFkbyBwYXJhIHJlZGlyZWNpb25hciBwYXJhIGEgdXJsIGVzdGFiZWxlY2lkYSBlbSBgdXJsQ2hhbmdlUGFzc3dvcmRgLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG7Do28gc2VqYSBwYXNzYWRvIHZhbG9yIHBhcmEgdXJsQ2hhbmdlUGFzc3dvcmQsXHJcbiAgICogYSB1cmwgdXNhZGEgcGFyYSB2YWxpZGHDp8OjbyBzZXLDoSBhIGA8cC11cmwtcmVjb3Zlcnk+L2NoYW5nZVBhc3N3b3JkP3Rva2VuPTx0b2tlbj5gLlxyXG4gICAqXHJcbiAgICogKlByb2Nlc3NvIGZpbmFsaXphZG8uKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC11cmwtcmVjb3ZlcnknKSB1cmxSZWNvdmVyeT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEHDp8OjbyBjb250ZW5kbyBjb21vIHBhcsOibWV0cm8gbyBjw7NkaWdvIGVudmlhZG8gcG9yIFNNUyBlIGRpZ2l0YWRvIHBlbG8gdXN1w6FyaW8uXHJcbiAgICpcclxuICAgKiA+IEVzdGEgcHJvcHJpZWRhZGUgc2Vyw6EgaWdub3JhZGEgc2UgZm9yIGRlZmluaWRvIHZhbG9yIHBhcmEgYSBwcm9wcmllZGFkZSBgcC11cmwtcmVjb3ZlcnlgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtY29kZS1zdWJtaXQnKSBjb2RlU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBw6fDo28gY29udGVuZG8gbyBlbWFpbCBjb21vIHBhcsOibWV0cm8gZSBxdWUgw6kgZXhlY3V0YWRhIHF1YW5kbyBvIHVzdcOhcmlvIGNsaWNhIHNvYnJlcyBvcyBib3TDtWVzIGRlICdlbnZpYXInIGUgJ3JlZW52aWFyJyBlLW1haWwuXHJcbiAgICpcclxuICAgKiA+IEVzdGEgcHJvcHJpZWRhZGUgc2Vyw6EgaWdub3JhZGEgc2UgZm9yIGRlZmluaWRvIHZhbG9yIHBhcmEgYSBwcm9wcmllZGFkZSBgcC11cmwtcmVjb3ZlcnlgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3Atc3VibWl0Jykgc3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgbWF4TGVuZ3RoID0gUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlEZWZhdWx0TWF4TGVuZ3RoO1xyXG4gIG1pbkxlbmd0aCA9IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5RGVmYXVsdE1pbkxlbmd0aDtcclxuICBtb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlQWxsOiBib29sZWFuO1xyXG4gIHBob25lOiBzdHJpbmc7XHJcbiAgc21zQ29kZTogc3RyaW5nO1xyXG4gIHNtc0NvZGVFcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgbGl0ZXJhbHM6IHtcclxuICAgIGNhbmNlbEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgY2xvc2VCdXR0b246IHN0cmluZztcclxuICAgIGNvbnRpbnVlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgZW1haWxFcnJvck1lc3NhZ2VQaHJhc2U6IHN0cmluZztcclxuICAgIGVtYWlsU2VudENvbmZpcm1hdGlvblBocmFzZTogc3RyaW5nO1xyXG4gICAgZW1haWxTZW50VGl0bGU6IHN0cmluZztcclxuICAgIGZvcmdvdFBhc3N3b3JkVGl0bGU6IHN0cmluZztcclxuICAgIGluc2VydENvZGU6IHN0cmluZztcclxuICAgIGluc2VydEVtYWlsOiBzdHJpbmc7XHJcbiAgICBpbnNlcnRQaG9uZTogc3RyaW5nO1xyXG4gICAgcGhvbmVFcnJvck1lc3NhZ2VQaHJhc2U6IHN0cmluZztcclxuICAgIHByZXBvc2l0aW9uSW46IHN0cmluZztcclxuICAgIHByZXBvc2l0aW9uT3I6IHN0cmluZztcclxuICAgIHJlY292ZXJ5UGFzc3dvcmRQaHJhc2U6IHN0cmluZztcclxuICAgIHJlc2VuZEVtYWlsQnV0dG9uOiBzdHJpbmc7XHJcbiAgICByZXNlbmRTbXNDb2RlUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBzZW5kQWdhaW46IHN0cmluZztcclxuICAgIHNlbmRBZ2FpblBocmFzZTogc3RyaW5nO1xyXG4gICAgc2VuZEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgc21zOiBzdHJpbmc7XHJcbiAgICBzbXNDb2RlOiBzdHJpbmc7XHJcbiAgICBzbXNDb2RlRXJyb3JNZXNzYWdlUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBzZW50U21zQ29kZVBocmFzZTogc3RyaW5nO1xyXG4gICAgc3VwcG9ydENvbnRhY3Q6IHN0cmluZztcclxuICAgIHRlbGVwaG9uZTogc3RyaW5nO1xyXG4gICAgdHlwZUNvZGVUaXRsZTogc3RyaW5nO1xyXG4gIH0gPSBwb01vZGFsUGFzc3dvcmRSZWNvdmVyeUxpdGVyYWxzW3BvTG9jYWxlRGVmYXVsdF07XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhY3RFbWFpbDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Bob25lTWFzayA9IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5RGVmYXVsdFBob25lO1xyXG4gIHByaXZhdGUgX3R5cGU6IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZSA9IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZURlZmF1bHQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmnDp8OjbyBkbyBlLW1haWwgcXVlIMOpIGV4aWJpZG8gbmEgbWVuc2FnZW0gcGFyYSBjb250YXRvIGRlIHN1cG9ydGUuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNvbnRhY3QtZW1haWwnKSBzZXQgY29udGFjdEVtYWlsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbnRhY3RFbWFpbCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuc21zQ29kZUVycm9yTWVzc2FnZSA9IHRoaXMuY29uY2F0ZW5hdGVTTVNFcnJvck1lc3NhZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRhY3RFbWFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWN0RW1haWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5pw6fDo28gZGEgbWFzY2FyYSBkbyBjYW1wbyBkZSB0ZWxlZm9uZS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGAoOTkpIDk5OTk5LTk5OTlgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXBob25lLW1hc2snKSBzZXQgcGhvbmVNYXNrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Bob25lTWFzayA9IHZhbHVlIHx8IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5RGVmYXVsdFBob25lO1xyXG4gICAgdGhpcy5taW5MZW5ndGggPSB0aGlzLm1heExlbmd0aCA9IHRoaXMuX3Bob25lTWFzay5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXQgcGhvbmVNYXNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bob25lTWFzaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyB0aXBvIGRlIHJlY3VwZXJhw6fDo28gZGUgc2VuaGEgcXVlIHNlcsOhIGV4aWJpZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlLkVtYWlsYFxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXR5cGUnKSBzZXQgdHlwZSh2YWx1ZTogUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlKSB7XHJcbiAgICB0aGlzLl90eXBlID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoUG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlUeXBlKS5pbmNsdWRlcyh2YWx1ZSlcclxuICAgICAgPyB2YWx1ZVxyXG4gICAgICA6IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZURlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4udGhpcy5saXRlcmFscyxcclxuICAgICAgLi4ucG9Nb2RhbFBhc3N3b3JkUmVjb3ZlcnlMaXRlcmFsc1tsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uY2F0ZW5hdGVTTVNFcnJvck1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgbGl0ZXJhbENvZGVFcnJvck1lc3NhZ2UgPSB0aGlzLmxpdGVyYWxzLnNtc0NvZGVFcnJvck1lc3NhZ2VQaHJhc2U7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlICE9PSAnJ1xyXG4gICAgICA/IGAke2xpdGVyYWxDb2RlRXJyb3JNZXNzYWdlfSAke3RoaXMubGl0ZXJhbHMucHJlcG9zaXRpb25Jbn0gJHt2YWx1ZX0uYFxyXG4gICAgICA6IGxpdGVyYWxDb2RlRXJyb3JNZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWPDo28gcGFyYSBjb25jbHVzw6NvIGRlIHByb2Nlc3NvIGUgZmVjaGFtZW50byBkYSBtb2RhbC4gSW5kaWNhLXNlIHN1YSB1dGlsaXphw6fDo29cclxuICAgKiBwYXJhIGFww7NzIG8gZW52aW8gZSB2YWxpZGHDp8OjbyBkbyBjw7NkaWdvIFNNUyBlbnZpYWRvIHBlbG8gdXN1w6FyaW8uXHJcbiAgICpcclxuICAgKiA+IE5hcyBtb2RhbHMgZW0gcXVlIGjDoSBhIGHDp8OjbyBkZSAnY2FuY2VsYXInIGRpc3BlbnNhLXNlIG8gdXNvIGRlc3RhIGHDp8OjbyBwb2lzIG8gY29tcG9uZW50ZSBqw6EgdHJhdGEgbyBmZWNoYW1lbnRvIGRhIG1vZGFsLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGNvbXBsZXRlZCgpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBBYnJlIGEgbW9kYWwgZGUgcHJlZW5jaGltZW50byBkZSBlbWFpbCBvdSBuw7ptZXJvIGRlIHRlbGVmb25lIHBhcmEgc29saWNpdGHDp8OjbyBkZSB0cm9jYSBkZSBzZW5oYS5cclxuICAgKi9cclxuICBhYnN0cmFjdCBvcGVuKCk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFicmUgYSBtb2RhbCBkZSBjb25maXJtYcOnw6NvIGRlIGVudmlvIGRlIGVtYWlsLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IG9wZW5Db25maXJtYXRpb24oKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBhIG1vZGFsIGRlIHByZWVuY2hpbWVudG8gZG8gY8OzZGlnbyBTTVMgZW52aWFkbyBhbyB1c3XDoXJpby5cclxuICAgKi9cclxuICBhYnN0cmFjdCBvcGVuU21zQ29kZSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==