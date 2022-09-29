import { PoPageBlockedUserReason } from './enums/po-page-blocked-user-reason.enum';
import { PoPageBlockedUserReasonParams } from './interfaces/po-page-blocked-user-reason-params.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-page-blocked-user` é utilizado como template para tela de bloqueio de usuário.
 * É possível definir entre três tipos de telas para alertar o usuário sobre um eventual bloqueio de login.
 *
 * Cada modelo de bloqueio possui uma imagem e texto adequados à situação.
 * Os textos das telas são pré-definidos e imutáveis, porém,
 * é possível estipular parâmetros como dias, horas e tentativas de acesso esgotadas.
 *
 * Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.
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
 *
 * _______________
 *
 * #### Praticidade
 * O `po-page-blocked-user`, assim como suas propriedades, pode também ser transmitido diretamente pelas configuraçãos de rota e,
 * desta maneira, dispensa-se qualquer menção e/ou importação no restante da aplicação. O exemplo abaixo exemplifica
 * a forma dinâmica com a qual o template pode ser gerado se navegasse para uma rota denominada como `/access-denied`:
 *
 *
 * ```
 *   import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';
 *
 *   ...
 *   const routes: Routes = [
 *     {
 *       path: 'access-denied', component: PoPageBlockedUserComponent, data: {
 *         contactEmail: 'dev.po@po-ui.com',
 *         contactPhone: '0800 1234 000',
 *         reason: PoPageBlockedUserReason.ExpiredPassword,
 *         urlBack: '/home'
 *       }
 *     }
 *     ...
 *   ];
 *
 *   @NgModule({
 *     imports: [RouterModule.forRoot(routes)],
 *     exports: [RouterModule]
 *   })
 *   export class AppRoutingModule { }
 * ```
 *
 * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
 *
 */
export declare class PoPageBlockedUserBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Valor para o email de contato que deve ser exibido. A ação está de acordo com o protocolo MAILTO e é possível definir
     * tanto rotas internas quanto externas.
     */
    contactEmail: string;
    /**
     * @optional
     *
     * @description
     *
     * Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.
     *
     * > A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.
     */
    contactPhone: string;
    /** Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI. */
    logo?: string;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada no rodapé.
     */
    secondaryLogo?: string;
    private _params;
    private _reason;
    private _urlBack;
    /**
     * @optional
     *
     * @description
     *
     * Designação de valores usados para a customização da mensagem de bloqueio.
     * Confira abaixo os valores pré-definidos.
     *
     * ```
     *  const customLiterals: PoPageBlockedUserReasonParams = {
     *    attempts: 5,
     *    days: 90,
     *    hours: 24
     *  };
     * ```
     *
     * > Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.
     *
     * > Veja os parâmetros customizáveis na interface `PoPageBlockedUserReasonParams`.
     *
     */
    set params(value: PoPageBlockedUserReasonParams);
    get params(): PoPageBlockedUserReasonParams;
    /**
     * @optional
     *
     * @description
     *
     * Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.
     *
     * > Veja os valores válidos no *enum* `PoPageBlockedUserReason`.
     *
     * @default `PoPageBlockedUserReason.None`
     */
    set reason(value: PoPageBlockedUserReason);
    get reason(): PoPageBlockedUserReason;
    /**
     * @optional
     *
     * @description
     *
     * URL para a ação de retorno da página.
     *
     * @default `/`
     */
    set urlBack(url: string);
    get urlBack(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageBlockedUserBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageBlockedUserBaseComponent, never, never, { "contactEmail": "p-contact-email"; "contactPhone": "p-contact-phone"; "logo": "p-logo"; "secondaryLogo": "p-secondary-logo"; "params": "p-params"; "reason": "p-reason"; "urlBack": "p-url-back"; }, {}, never, never, false>;
}