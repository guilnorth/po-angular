import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, isExternalLink, isTypeof } from '../../utils/util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-page-change-password` é utilizado como template para tela de cadastro ou alteração de senha.
 *
 * Apresenta dicas e regras para senhas mais seguras e também possibilidade de personalizar o redirecionamento para as telas
 * 'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas são pré-definidos e imutáveis.
 *
 * A propriedade `p-url-new-password` automatiza a rotina do template e simplifica o processo de cadastro/alteração de senha, bastando
 * definir uma url para POST das informações digitadas pelo usuário.  A flexibilidade e praticidade podem chegar a um nível em que o
 * desenvolvimento da aplicação no *client side* é desprovida de qualquer código-fonte relacionado à rotina de cadastro/alteração de senha.
 * Seu detalhamento para uso pode ser visto logo abaixo em *propriedades*.
 * Caso julgue necessário, pode-se também definir manualmente a rotina do componente.
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
export class PoPageChangePasswordBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * URL para a ação de retorno da página.
         *
         * > O botão `Voltar` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `p-hide-current-password` for
         * falsa.
         *
         * @default `/`
         */
        this.urlBack = '/';
        /**
         * @optional
         *
         * @description
         *
         * Função executada ao submeter o form pelo botão salvar.
         *
         * Caso definida essa função, a modal de confirmação não aparece, mas pode ser chamada pelo
         * método `openConfirmation`. Exemplo:
         *
         * ```
         * @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;
         *
         * onSubmit() {
         *  this.changePassword.openConfirmation();
         * }
         *
         * ```
         * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-new-password`.
         */
        this.submit = new EventEmitter();
        this._hideCurrentPassword = false;
        this._requirements = [];
        this._urlHome = '/';
    }
    /**
     * @optional
     *
     * @description
     *
     * Esconde o campo `Senha atual` para que o template seja para criação de senha.
     *
     * @default `false`
     */
    set hideCurrentPassword(value) {
        this._hideCurrentPassword = convertToBoolean(value);
    }
    get hideCurrentPassword() {
        return this._hideCurrentPassword;
    }
    /**
     * @optional
     *
     * @description
     *
     * URL para a ação do link `Esqueceu a senha`.
     *
     * A propriedade aceita os seguintes tipos:
     *
     * - **String**: informe uma url externa ou uma rota válida;
     * - **Function**: pode-se customizar a ação. Para esta possilidade basta atribuir:
     * ```
     * <po-page-change-password>
     *      [recovery]="this.myFunc.bind(this)";
     * </po-page-change-password>
     * ```
     *
     * - **PoPageChangePasswordRecovery**: cria-se vínculo automático com o template **po-modal-password-recovery**.
     *   O objeto deve conter a **url** para requisição dos recursos e pode-se definir o **tipo** de modal para recuperação de senha,
     *   **email** para contato e **máscara** do campo de telefone.
     *
     * > Caso não tenha valor o link `Esqueceu a senha` desaparece.
     */
    set recovery(value) {
        this._recovery = value;
        if (isTypeof(value, 'string')) {
            this.recoveryUrlType = isExternalLink(value) ? 'externalLink' : 'internalLink';
        }
    }
    get recovery() {
        return this._recovery;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de regras para criação e alteração de senha.
     */
    set requirements(value) {
        this._requirements = value || [];
        this.showRequirements = this._requirements.length > 0;
    }
    get requirements() {
        return this._requirements;
    }
    /**
     * @optional
     *
     * @description
     *
     * URL para a ação do botão `Entrar no sistema` da modal de confirmação que aparece após salvar a senha ou se chamada pelo método
     * `openConfirmation`.
     *
     * @default `/`
     */
    set urlHome(value) {
        this._urlHome = value;
        this.modalAction.action = this.navigateTo.bind(this, this.urlHome);
    }
    get urlHome() {
        return this._urlHome;
    }
}
PoPageChangePasswordBaseComponent.ɵfac = function PoPageChangePasswordBaseComponent_Factory(t) { return new (t || PoPageChangePasswordBaseComponent)(); };
PoPageChangePasswordBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageChangePasswordBaseComponent, inputs: { logo: ["p-logo", "logo"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], token: ["p-token", "token"], urlBack: ["p-url-back", "urlBack"], urlNewPassword: ["p-url-new-password", "urlNewPassword"], hideCurrentPassword: ["p-hide-current-password", "hideCurrentPassword"], recovery: ["p-recovery", "recovery"], requirements: ["p-requirements", "requirements"], urlHome: ["p-url-home", "urlHome"] }, outputs: { submit: "p-submit" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordBaseComponent, [{
        type: Directive
    }], null, { logo: [{
            type: Input,
            args: ['p-logo']
        }], secondaryLogo: [{
            type: Input,
            args: ['p-secondary-logo']
        }], token: [{
            type: Input,
            args: ['p-token']
        }], urlBack: [{
            type: Input,
            args: ['p-url-back']
        }], urlNewPassword: [{
            type: Input,
            args: ['p-url-new-password']
        }], submit: [{
            type: Output,
            args: ['p-submit']
        }], hideCurrentPassword: [{
            type: Input,
            args: ['p-hide-current-password']
        }], recovery: [{
            type: Input,
            args: ['p-recovery']
        }], requirements: [{
            type: Input,
            args: ['p-requirements']
        }], urlHome: [{
            type: Input,
            args: ['p-url-home']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFLOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUVILE1BQU0sT0FBZ0IsaUNBQWlDO0lBRHZEO1FBNkJFOzs7Ozs7Ozs7OztXQVdHO1FBQ2tCLFlBQU8sR0FBVyxHQUFHLENBQUM7UUF3RTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBbUJHO1FBQ2lCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVczRCx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFFdEMsa0JBQWEsR0FBMkMsRUFBRSxDQUFDO1FBQzNELGFBQVEsR0FBVyxHQUFHLENBQUM7S0F3RmhDO0lBdEZDOzs7Ozs7OztPQVFHO0lBQ0gsSUFBc0MsbUJBQW1CLENBQUMsS0FBYztRQUN0RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXNCRztJQUNILElBQXlCLFFBQVEsQ0FBQyxLQUF1RDtRQUN2RixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBNkIsWUFBWSxDQUFDLEtBQTZDO1FBQ3JGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQXlCLE9BQU8sQ0FBQyxLQUFhO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOztrSEF2T21CLGlDQUFpQztvRkFBakMsaUNBQWlDO3VGQUFqQyxpQ0FBaUM7Y0FEdEQsU0FBUztnQkFXUyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFTWSxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQjtZQU9QLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQWNLLE9BQU87a0JBQTNCLEtBQUs7bUJBQUMsWUFBWTtZQXNFVSxjQUFjO2tCQUExQyxLQUFLO21CQUFDLG9CQUFvQjtZQXNCUCxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUF5Qm9CLG1CQUFtQjtrQkFBeEQsS0FBSzttQkFBQyx5QkFBeUI7WUErQlAsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBbUJVLFlBQVk7a0JBQXhDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBa0JFLE9BQU87a0JBQS9CLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb01vZGFsQWN0aW9uIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgaXNFeHRlcm5hbExpbmssIGlzVHlwZW9mIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlY292ZXJ5IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtY2hhbmdlLXBhc3N3b3JkLXJlY292ZXJ5LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUNoYW5nZVBhc3N3b3JkUmVxdWlyZW1lbnQgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1jaGFuZ2UtcGFzc3dvcmQtcmVxdWlyZW1lbnQuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1wYWdlLWNoYW5nZS1wYXNzd29yZGAgw6kgdXRpbGl6YWRvIGNvbW8gdGVtcGxhdGUgcGFyYSB0ZWxhIGRlIGNhZGFzdHJvIG91IGFsdGVyYcOnw6NvIGRlIHNlbmhhLlxyXG4gKlxyXG4gKiBBcHJlc2VudGEgZGljYXMgZSByZWdyYXMgcGFyYSBzZW5oYXMgbWFpcyBzZWd1cmFzIGUgdGFtYsOpbSBwb3NzaWJpbGlkYWRlIGRlIHBlcnNvbmFsaXphciBvIHJlZGlyZWNpb25hbWVudG8gcGFyYSBhcyB0ZWxhc1xyXG4gKiAnZXNxdWVjZXUgYSBzZW5oYScsICd2b2x0YXInIGUgJ2VudHJhciBubyBzaXN0ZW1hJy4gT3MgdGV4dG9zIGRhcyB0ZWxhcyBzw6NvIHByw6ktZGVmaW5pZG9zIGUgaW11dMOhdmVpcy5cclxuICpcclxuICogQSBwcm9wcmllZGFkZSBgcC11cmwtbmV3LXBhc3N3b3JkYCBhdXRvbWF0aXphIGEgcm90aW5hIGRvIHRlbXBsYXRlIGUgc2ltcGxpZmljYSBvIHByb2Nlc3NvIGRlIGNhZGFzdHJvL2FsdGVyYcOnw6NvIGRlIHNlbmhhLCBiYXN0YW5kb1xyXG4gKiBkZWZpbmlyIHVtYSB1cmwgcGFyYSBQT1NUIGRhcyBpbmZvcm1hw6fDtWVzIGRpZ2l0YWRhcyBwZWxvIHVzdcOhcmlvLiAgQSBmbGV4aWJpbGlkYWRlIGUgcHJhdGljaWRhZGUgcG9kZW0gY2hlZ2FyIGEgdW0gbsOtdmVsIGVtIHF1ZSBvXHJcbiAqIGRlc2Vudm9sdmltZW50byBkYSBhcGxpY2HDp8OjbyBubyAqY2xpZW50IHNpZGUqIMOpIGRlc3Byb3ZpZGEgZGUgcXVhbHF1ZXIgY8OzZGlnby1mb250ZSByZWxhY2lvbmFkbyDDoCByb3RpbmEgZGUgY2FkYXN0cm8vYWx0ZXJhw6fDo28gZGUgc2VuaGEuXHJcbiAqIFNldSBkZXRhbGhhbWVudG8gcGFyYSB1c28gcG9kZSBzZXIgdmlzdG8gbG9nbyBhYmFpeG8gZW0gKnByb3ByaWVkYWRlcyouXHJcbiAqIENhc28ganVsZ3VlIG5lY2Vzc8OhcmlvLCBwb2RlLXNlIHRhbWLDqW0gZGVmaW5pciBtYW51YWxtZW50ZSBhIHJvdGluYSBkbyBjb21wb25lbnRlLlxyXG4gKlxyXG4gKiBQYXJhIHF1ZSBhcyBpbWFnZW5zIHNlamFtIGV4aWJpZGFzIGNvcnJldGFtZW50ZSwgw6kgbmVjZXNzw6FyaW8gaW5jbHVpciBvIGNhbWluaG8gZGVsYXMgYW8gcHJvamV0by4gUGFyYSBpc3NvLCBlZGl0ZVxyXG4gKiBvICphc3NldHMqIG5vIGFycXVpdm8gKiphbmd1bGFyLmpzb24qKiBkYSBhcGxpY2HDp8OjbyBuYSBzZWd1aW50ZSBvcmRlbTpcclxuICogYGBgXHJcbiAqICAgXCJhc3NldHNcIjogW1xyXG4gKiAgICAgXCJzcmMvYXNzZXRzXCIsXHJcbiAqICAgICBcInNyYy9mYXZpY29uLmljb1wiLFxyXG4gKiAgICAge1xyXG4gKiAgICAgICBcImdsb2JcIjogXCIqKlxcLypcIixcclxuICogICAgICAgXCJpbnB1dFwiOiBcIm5vZGVfbW9kdWxlcy9AcG8tdWkvc3R5bGUvaW1hZ2VzXCIsXHJcbiAqICAgICAgIFwib3V0cHV0XCI6IFwiYXNzZXRzL2ltYWdlc1wiXHJcbiAqICAgICB9XHJcbiAqICAgXVxyXG4gKiBgYGBcclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9QYWdlQ2hhbmdlUGFzc3dvcmRCYXNlQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQ2FtaW5obyBwYXJhIGEgbG9nb21hcmNhIGxvY2FsaXphZGEgbmEgcGFydGUgc3VwZXJpb3IuXHJcbiAgICpcclxuICAgKiA+IENhc28gc2VqYSBpbmRlZmluaWRhIG8gZXNwYcOnbyBzZSBtYW50w6ltIHByZXNlcnZhZG8gcG9yw6ltIHZhemlvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sb2dvJykgbG9nbz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENhbWluaG8gcGFyYSBhIGxvZ29tYXJjYSBsb2NhbGl6YWRhIG5vIHJvZGFww6kuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNlY29uZGFyeS1sb2dvJykgc2Vjb25kYXJ5TG9nbz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVG9rZW4gcGFyYSBzb2xpY2l0YcOnw6NvIGRlIHRyb2NhL3JlY3VwZXJhw6fDo28gZGUgc2VuaGEuXHJcbiAgICpcclxuICAgKiA+IEVzdGEgcHJvcHJpZWRhZGUgc2Vyw6EgaWdub3JhZGEgY2FzbyBleGlzdGEgdW0gdG9rZW4gY29tbyBwYXLDom1ldHJvIG5hIFVSTCBpbmljaWFsIGRvIHRlbXBsYXRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10b2tlbicpIHRva2VuPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVVJMIHBhcmEgYSBhw6fDo28gZGUgcmV0b3JubyBkYSBww6FnaW5hLlxyXG4gICAqXHJcbiAgICogPiBPIGJvdMOjbyBgVm9sdGFyYCBhcGFyZWNlIGFwZW5hcyBwYXJhIHRlbGFzIGRlIGFsdGVyYcOnw6NvIGRlIHNlbmhhLCBvdSBzZWphLCBzw7MgYXBhcmVjZSBzZSBhIHByb3ByaWVkYWRlIGBwLWhpZGUtY3VycmVudC1wYXNzd29yZGAgZm9yXHJcbiAgICogZmFsc2EuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgL2BcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdXJsLWJhY2snKSB1cmxCYWNrOiBzdHJpbmcgPSAnLyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuZHBvaW50IHVzYWRvIHBlbG8gdGVtcGxhdGUgcGFyYSByZWFsaXphciB1bSBQT1NULiBRdWFuZG8gcHJlZW5jaGlkbywgbyBtw6l0b2RvIGBwLXN1Ym1pdGAgc2Vyw6EgaWdub3JhZG8gZSBvIGNvbXBvbmVudGUgYWRxdWlyaXLDoVxyXG4gICAqIGF1dG9tYXRpemHDp8OjbyBwYXJhIG8gcHJvY2Vzc28gZGUgY2FkYXN0cm8vdHJvY2EgZGUgc2VuaGEuXHJcbiAgICpcclxuICAgKiAjIyMgUHJvY2Vzc29cclxuICAgKiBBbyBkaWdpdGFyIHVtIHZhbG9yIHbDoWxpZG8gbm9zIGNhbXBvcyBkZSBzZW5oYSBlIHByZXNzaW9uYXIgKipzYWx2YXIqKixcclxuICAgKiBvIGNvbXBvbmVudGUgZmFyw6EgdW1hIHJlcXVpc2nDp8OjbyBgUE9TVGAgbmEgdXJsIGVzcGVjaWZpY2FkYSBuZXN0YSBwcm9wcmllZGFkZSBwYXNzYW5kbyBvIG9iamV0byBjb250ZW5kbyBvcyB2YWxvcmVzIGRlZmluaWRvcyBwZWxvXHJcbiAgICogdXN1w6FyaW8uXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBib2R5IHtcclxuICAgKiAgdG9rZW4/OiB0b2tlbixcclxuICAgKiAgb2xkUGFzc3dvcmQ/OiBvbGRQYXNzd29yZCxcclxuICAgKiAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkXHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogTyBjw7NkaWdvIGRlIHJlc3Bvc3RhIEhUVFAgZGUgc3RhdHVzIGVzcGVyYWRvIMOpIGAyMDRgLlxyXG4gICAqXHJcbiAgICogRW0gY2FzbyBkZSAqKnN1Y2Vzc28qKiwgc2Vyw6EgZXhpYmlkYSBhIG1vZGFsIGRlIGNvbmZpcm1hw6fDo28gZGUgc2VuaGEgYWx0ZXJhZGEuXHJcbiAgICpcclxuICAgKiA+IE8gdG9rZW4gc2Vyw6EgaW5mb3JtYWRvIHBlbGEgcHJvcHJpZWRhZGUgYHAtdG9rZW5gZG8gY29tcG9uZW50ZSBvdSBwb3IgdW0gKnF1ZXJ5IHBhcmFtZXRlciogbmEgVVJMIGRvIHRlbXBsYXRlLlxyXG4gICAqXHJcbiAgICogKlByb2Nlc3NvIGZpbmFsaXphZG8uKlxyXG4gICAqXHJcbiAgICogX19fX19fX19fX19fX19fXHJcbiAgICpcclxuICAgKiAjIyMjIFByYXRpY2lkYWRlXHJcbiAgICogQXMgaW5mb3JtYcOnw7VlcyBkbyBzZXJ2acOnbyBkZSBhdXRlbnRpY2HDp8OjbyB0YW1iw6ltIHBvZGVtIHNlciB0cmFuc21pdGlkYXMgZGlyZXRhbWVudGUgcGVsYXMgY29uZmlndXJhw6fDo29zIGRlIHJvdGEgZSwgZGVzdGEgbWFuZWlyYSxcclxuICAgKiBkaXNwZW5zYS1zZSBxdWFscXVlciBtZW7Dp8OjbyBlL291IGltcG9ydGHDp8OjbyBkbyBjb21wb25lbnRlIGBwby1wYWdlLWNoYW5nZS1wYXNzd29yZGAgbm8gcmVzdGFudGUgZGEgYXBsaWNhw6fDo28uIE8gZXhlbXBsbyBhYmFpeG9cclxuICAgKiBleGVtcGxpZmljYSBhIGZvcm1hIGRpbsOibWljYSBjb20gYSBxdWFsIG8gdGVtcGxhdGUgZGUgdGVsYSBkZSB0cm9jYSBkZSBzZW5oYSBwb2RlIHNlciBnZXJhZG8gYW8gbmF2ZWdhciBwYXJhIHJvdGEgYC9jaGFuZ2UtcGFzc3dvcmRgLCBlXHJcbiAgICogdGFtYsOpbSBjb21vIGVsZSBzZSBjb211bmljYSBjb20gbyBzZXJ2acOnbyBwYXJhIGVmZXR1YcOnw6NvIGRvIHByb2Nlc3NvIGRlIHRyb2NhIGRlIHNlbmhhIGRvIHVzdcOhcmlvIGUgc29saWNpdGHDp8OjbyBkZSBub3ZhIHNlbmhhLlxyXG4gICAqIEJhc3RhIGRlZmluaXIgbmFzIGNvbmZpZ3VyYcOnw7VlcyBkZSByb3RhOlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgIGltcG9ydCB7IFBvTW9kYWxQYXNzd29yZFJlY292ZXJ5VHlwZSwgUG9QYWdlQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctdGVtcGxhdGVzJztcclxuICAgKlxyXG4gICAqICAgLi4uXHJcbiAgICogICBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgKiAgICAge1xyXG4gICAqICAgICAgIHBhdGg6ICdjaGFuZ2UtcGFzc3dvcmQnLCBjb21wb25lbnQ6IFBvUGFnZUNoYW5nZVBhc3N3b3JkQ29tcG9uZW50LCBkYXRhOiB7XHJcbiAgICogICAgICAgICBzZXJ2aWNlQXBpOiAnaHR0cHM6Ly9wby11aS5pby9zYW1wbGUvYXBpL25ldy1wYXNzd29yZCcsXHJcbiAgICogICAgICAgICByZWNvdmVyeToge1xyXG4gICAqICAgICAgICAgICB1cmw6ICdodHRwczovL3BvLXVpLmlvL3NhbXBsZS9hcGkvdXNlcnMnLFxyXG4gICAqICAgICAgICAgICB0eXBlOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuQWxsLFxyXG4gICAqICAgICAgICAgICBjb250YWN0TWFpbDogJ2Rldi5wb0Bwby11aS5jb20nLFxyXG4gICAqICAgICAgICAgICBwaG9uZU1hc2s6ICc5LTk5OS05OTktOTk5OSdcclxuICAgKiAgICAgICAgIH1cclxuICAgKiAgICAgICB9XHJcbiAgICogICAgIH1cclxuICAgKiAgICAgLi4uXHJcbiAgICogICBdO1xyXG4gICAqXHJcbiAgICogICBATmdNb2R1bGUoe1xyXG4gICAqICAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICogICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbiAgICogICB9KVxyXG4gICAqICAgZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKlxyXG4gICAqIE8gbWV0YWRhZG8gYHNlcnZpY2VBcGlgIGRldmUgc2VyIGEgKip1cmwqKiBwYXJhIHJlcXVpc2nDp8OjbyBkb3MgcmVjdXJzb3MgZGUgdHJvY2EgZGUgc2VuaGEuIEUgYHJlY292ZXJ5YCDDqSBhIGludGVyZmFjZVxyXG4gICAqIGBQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlY292ZXJ5YCByZXNwb25zw6F2ZWwgcGVsYXMgZXNwZWNpZmljYcOnw7VlcyBjb250aWRhcyBuYSBtb2RhbCBkZSByZWN1cGVyYcOnw6NvIGRlIHNlbmhhLlxyXG4gICAqXHJcbiAgICogPiDDiSBlc3NlbmNpYWwgcXVlIHNpZ2EgYSBub21lbmNsYXR1cmEgZG9zIGF0cmlidXRvcyBleGVtcGxpZmljYWRvcyBhY2ltYSBwYXJhIHN1YSBlZmV0aXZhIGZ1bmNpb25hbGlkYWRlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXVybC1uZXctcGFzc3dvcmQnKSB1cmxOZXdQYXNzd29yZD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEZ1bsOnw6NvIGV4ZWN1dGFkYSBhbyBzdWJtZXRlciBvIGZvcm0gcGVsbyBib3TDo28gc2FsdmFyLlxyXG4gICAqXHJcbiAgICogQ2FzbyBkZWZpbmlkYSBlc3NhIGZ1bsOnw6NvLCBhIG1vZGFsIGRlIGNvbmZpcm1hw6fDo28gbsOjbyBhcGFyZWNlLCBtYXMgcG9kZSBzZXIgY2hhbWFkYSBwZWxvXHJcbiAgICogbcOpdG9kbyBgb3BlbkNvbmZpcm1hdGlvbmAuIEV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBAVmlld0NoaWxkKFBvUGFnZUNoYW5nZVBhc3N3b3JkQ29tcG9uZW50KSBjaGFuZ2VQYXNzd29yZDogUG9QYWdlQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBvblN1Ym1pdCgpIHtcclxuICAgKiAgdGhpcy5jaGFuZ2VQYXNzd29yZC5vcGVuQ29uZmlybWF0aW9uKCk7XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPiBFc3RhIHByb3ByaWVkYWRlIHNlcsOhIGlnbm9yYWRhIHNlIGZvciBkZWZpbmlkbyB2YWxvciBwYXJhIGEgcHJvcHJpZWRhZGUgYHAtdXJsLW5ldy1wYXNzd29yZGAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1zdWJtaXQnKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZztcclxuICBtb2RhbEFjdGlvbjogUG9Nb2RhbEFjdGlvbjtcclxuICBuZXdQYXNzd29yZDogc3RyaW5nO1xyXG4gIHJlY292ZXJ5VXJsVHlwZTogc3RyaW5nO1xyXG4gIHNob3dSZXF1aXJlbWVudHM6IGJvb2xlYW47XHJcblxyXG4gIHByb3RlY3RlZCB2YWxpZGF0b3JDaGFuZ2U6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUN1cnJlbnRQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3JlY292ZXJ5OiBzdHJpbmcgfCBQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlY292ZXJ5IHwgRnVuY3Rpb247XHJcbiAgcHJpdmF0ZSBfcmVxdWlyZW1lbnRzOiBBcnJheTxQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlcXVpcmVtZW50PiA9IFtdO1xyXG4gIHByaXZhdGUgX3VybEhvbWU6IHN0cmluZyA9ICcvJztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEVzY29uZGUgbyBjYW1wbyBgU2VuaGEgYXR1YWxgIHBhcmEgcXVlIG8gdGVtcGxhdGUgc2VqYSBwYXJhIGNyaWHDp8OjbyBkZSBzZW5oYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaGlkZS1jdXJyZW50LXBhc3N3b3JkJykgc2V0IGhpZGVDdXJyZW50UGFzc3dvcmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVDdXJyZW50UGFzc3dvcmQgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBoaWRlQ3VycmVudFBhc3N3b3JkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVDdXJyZW50UGFzc3dvcmQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVVJMIHBhcmEgYSBhw6fDo28gZG8gbGluayBgRXNxdWVjZXUgYSBzZW5oYWAuXHJcbiAgICpcclxuICAgKiBBIHByb3ByaWVkYWRlIGFjZWl0YSBvcyBzZWd1aW50ZXMgdGlwb3M6XHJcbiAgICpcclxuICAgKiAtICoqU3RyaW5nKio6IGluZm9ybWUgdW1hIHVybCBleHRlcm5hIG91IHVtYSByb3RhIHbDoWxpZGE7XHJcbiAgICogLSAqKkZ1bmN0aW9uKio6IHBvZGUtc2UgY3VzdG9taXphciBhIGHDp8Ojby4gUGFyYSBlc3RhIHBvc3NpbGlkYWRlIGJhc3RhIGF0cmlidWlyOlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1wYWdlLWNoYW5nZS1wYXNzd29yZD5cclxuICAgKiAgICAgIFtyZWNvdmVyeV09XCJ0aGlzLm15RnVuYy5iaW5kKHRoaXMpXCI7XHJcbiAgICogPC9wby1wYWdlLWNoYW5nZS1wYXNzd29yZD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIC0gKipQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlY292ZXJ5Kio6IGNyaWEtc2UgdsOtbmN1bG8gYXV0b23DoXRpY28gY29tIG8gdGVtcGxhdGUgKipwby1tb2RhbC1wYXNzd29yZC1yZWNvdmVyeSoqLlxyXG4gICAqICAgTyBvYmpldG8gZGV2ZSBjb250ZXIgYSAqKnVybCoqIHBhcmEgcmVxdWlzacOnw6NvIGRvcyByZWN1cnNvcyBlIHBvZGUtc2UgZGVmaW5pciBvICoqdGlwbyoqIGRlIG1vZGFsIHBhcmEgcmVjdXBlcmHDp8OjbyBkZSBzZW5oYSxcclxuICAgKiAgICoqZW1haWwqKiBwYXJhIGNvbnRhdG8gZSAqKm3DoXNjYXJhKiogZG8gY2FtcG8gZGUgdGVsZWZvbmUuXHJcbiAgICpcclxuICAgKiA+IENhc28gbsOjbyB0ZW5oYSB2YWxvciBvIGxpbmsgYEVzcXVlY2V1IGEgc2VuaGFgIGRlc2FwYXJlY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlY292ZXJ5Jykgc2V0IHJlY292ZXJ5KHZhbHVlOiBzdHJpbmcgfCBGdW5jdGlvbiB8IFBvUGFnZUNoYW5nZVBhc3N3b3JkUmVjb3ZlcnkpIHtcclxuICAgIHRoaXMuX3JlY292ZXJ5ID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKGlzVHlwZW9mKHZhbHVlLCAnc3RyaW5nJykpIHtcclxuICAgICAgdGhpcy5yZWNvdmVyeVVybFR5cGUgPSBpc0V4dGVybmFsTGluayh2YWx1ZSkgPyAnZXh0ZXJuYWxMaW5rJyA6ICdpbnRlcm5hbExpbmsnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHJlY292ZXJ5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlY292ZXJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIExpc3RhIGRlIHJlZ3JhcyBwYXJhIGNyaWHDp8OjbyBlIGFsdGVyYcOnw6NvIGRlIHNlbmhhLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZXF1aXJlbWVudHMnKSBzZXQgcmVxdWlyZW1lbnRzKHZhbHVlOiBBcnJheTxQb1BhZ2VDaGFuZ2VQYXNzd29yZFJlcXVpcmVtZW50Pikge1xyXG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzID0gdmFsdWUgfHwgW107XHJcbiAgICB0aGlzLnNob3dSZXF1aXJlbWVudHMgPSB0aGlzLl9yZXF1aXJlbWVudHMubGVuZ3RoID4gMDtcclxuICB9XHJcbiAgZ2V0IHJlcXVpcmVtZW50cygpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlbWVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVVJMIHBhcmEgYSBhw6fDo28gZG8gYm90w6NvIGBFbnRyYXIgbm8gc2lzdGVtYWAgZGEgbW9kYWwgZGUgY29uZmlybWHDp8OjbyBxdWUgYXBhcmVjZSBhcMOzcyBzYWx2YXIgYSBzZW5oYSBvdSBzZSBjaGFtYWRhIHBlbG8gbcOpdG9kb1xyXG4gICAqIGBvcGVuQ29uZmlybWF0aW9uYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGAvYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC11cmwtaG9tZScpIHNldCB1cmxIb21lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3VybEhvbWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubW9kYWxBY3Rpb24uYWN0aW9uID0gdGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgdGhpcy51cmxIb21lKTtcclxuICB9XHJcbiAgZ2V0IHVybEhvbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXJsSG9tZTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IG5hdmlnYXRlVG8odXJsOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcbiJdfQ==