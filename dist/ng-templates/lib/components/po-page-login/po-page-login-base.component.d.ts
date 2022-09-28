import { Subscription } from 'rxjs';
import { EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PoLanguageService, PoLanguage } from '@po-ui/ng-components';
import { PoPageLogin } from './interfaces/po-page-login.interface';
import { PoPageLoginAuthenticationType } from './enums/po-page-login-authentication-type.enum';
import { PoPageLoginCustomField } from './interfaces/po-page-login-custom-field.interface';
import { PoPageLoginLiterals } from './interfaces/po-page-login-literals.interface';
import { PoPageLoginRecovery } from './interfaces/po-page-login-recovery.interface';
import { PoPageLoginService } from './po-page-login.service';
import * as i0 from "@angular/core";
export declare const poPageLoginLiteralsDefault: {
    en: PoPageLoginLiterals;
    es: PoPageLoginLiterals;
    pt: PoPageLoginLiterals;
    ru: PoPageLoginLiterals;
};
export declare const poPageLoginLiteralIn: {
    en: string;
    es: string;
    pt: string;
    ru: string;
};
/**
 * @description
 *
 * O componente `po-page-login` é utilizado como template para tela de login.
 * Com ele é possível definirmos valores para usuário, senha e definir ações para recuperação de senha e gravação de dados do usuário.
 * Também é possível inserir uma imagem em conjunto com um texto de destaque.
 *
 *
 * A propriedade `p-authentication-url` automatiza a rotina do componente e simplifica o processo para autenticação do usuário, bastando
 * definir uma url para requisição da autenticação. A flexibilidade e praticidade podem chegar a um nível em que o desenvolvimento
 * da aplicação no *client side* é desprovida de qualquer código-fonte relacionado à rotina de login de usuário.
 * Seu detalhamento para uso pode ser visto logo abaixo em *propriedades*.
 * Caso julgue necessário, pode-se também definir manualmente a rotina do componente.
 *
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
export declare abstract class PoPageLoginBaseComponent implements OnDestroy {
    private loginService;
    router: Router;
    poLanguageService: PoLanguageService;
    /**
     * O `p-background` permite inserir uma imagem de destaque ao lado direito do formulário de login, caso a propriedade
     * não seja preenchida o formulário será centralizado no espaço disponível.
     *
     * A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.
     *
     * Além da imagem, é possível adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
     * um valor para a literal `highlightInfo`.
     *
     * > Veja mais sobre as literais na propriedade `p-literals`.
     *
     * Exemplos de valores válidos:
     * - **local**: `./assets/images/login-background.png`
     * - **url externa**: `https://po-ui.io/assets/images/login-background.png`
     *
     * > Essa propriedade é ignorada para aplicações mobile.
     */
    background?: string;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada na parte superior.
     *
     * > Caso seja indefinida o espaço se mantém preservado porém vazio.
     */
    logo?: string;
    /**
     * @optional
     *
     * @description
     *
     * Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `loginErrorPattern`
     * será exibida.
     *
     * Exemplos de valores válidos:
     * - email: `[expressao-regular-email]`
     * - cpf: `[expressao-regular-cpf]`
     *
     * > Veja a propriedade `p-literals` para customizar a literal `loginErrorPattern`.
     */
    loginPattern?: string;
    /**
     * @optional
     *
     * @description
     *
     * Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `passwordErrorPattern`
     * será exibida.
     *
     * Exemplos de valores válidos:
     * - Apenas números: `\d?`
     * - Letras mínusculas: `\z?`
     *
     * > Veja a propriedade `p-literals` para customizar a literal `passwordErrorPattern`.
     */
    passwordPattern?: string;
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada no rodapé.
     */
    secondaryLogo?: string;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado quando o usuário alterar o input do campo login.
     *
     * Esse evento receberá como parâmetro uma variável do tipo `string` com o texto informado no campo.
     *
     * > Esta propriedade será ignorada se for definido valor para a propriedade `p-authentication-url`.
     */
    loginChange: EventEmitter<string>;
    /**
     * Evento disparado ao submeter o formulário de login (apertando `Enter` dentro dos campos ou pressionando o botão de confirmação).
     *
     * Esse evento receberá como parâmetro um objeto do tipo `PoPageLogin` com os dados informados no formulário.
     *
     * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
     *
     * > Para mais detalhes consulte a documentação sobre a interface `PoPageLogin` mais abaixo.
     */
    loginSubmit: EventEmitter<PoPageLogin>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado quando o usuário alterar o input do campo password.
     *
     * Esse evento receberá como parâmetro uma variável do tipo `string` com o texto informado no campo.
     *
     * > Esta propriedade será ignorada se for definido valor para a propriedade `p-authentication-url`.
     */
    passwordChange: EventEmitter<string>;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado quando o usuário alterar o idioma da página.
     *
     * Esse evento receberá como parâmetro um objeto do tipo `PoLanguage` com a linguagem selecionada.
     *
     */
    languageChange: EventEmitter<PoLanguage>;
    allLoginErrors: Array<string>;
    allPasswordErrors: Array<string>;
    customFieldObject: PoPageLoginCustomField;
    customFieldType: string;
    loginSubscription: Subscription;
    password: string;
    rememberUser: boolean;
    selectedLanguage: string;
    showExceededAttemptsWarning: boolean;
    private _authenticationType;
    private _authenticationUrl;
    private _blockedUrl;
    private _contactEmail;
    private _customField;
    private _environment?;
    private _exceededAttemptsWarning?;
    private _hideRememberUser;
    private _literals;
    private _loading?;
    private _login;
    private _loginErrors;
    private _passwordErrors;
    private _productName;
    private _recovery;
    private _registerUrl;
    private _support;
    private _languagesList;
    /**
     * @optional
     *
     * @description
     *
     * Ao informar um valor do tipo `string`, o mesmo será aplicado como a chave do campo customizado e utilizará
     * os valores padrões contidos na propriedade `literals` como `customFieldErrorPattern` e `customFieldPlaceholder`.
     *
     * Existe a possibilidade de informar um objeto que segue a definição da interface `PoPageLoginCustomField`, onde
     * através dos parâmetros enviados pode gerar um `po-input`, `po-combo` especificamente para serviços
     * ou `po-select` para valores fixos.
     *
     * Abaixo seguem os exemplos de cada tipo de campo.
     *
     * `po-input`:
     *
     * ```
     * {
     *   property: 'domain',
     *   value: 'jv01',
     *   placeholder: 'Enter your domain',
     *   pattern: '[a-z]',
     *   errorPattern: 'Invalid value'
     * }
     * ```
     *
     * `po-combo`:
     *
     * ```
     * {
     *   property: 'domain',
     *   value: 'jv01',
     *   placeholder: 'Enter your domain',
     *   url: 'https://po-ui.io/sample/api/comboOption/domains',
     *   fieldValue: 'nickname'
     * }
     * ```
     *
     * `po-select`:
     *
     * ```
     * {
     *   property: 'domain',
     *   value: 'jv01',
     *   placeholder: 'Enter your domain',
     *   options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
     * }
     * ```
     *
     * Caso o customField possua options, url e fieldValue preenchidos, será priorizado o po-select
     * utilizando o options.
     *
     */
    set customField(value: string | PoPageLoginCustomField);
    get customField(): string | PoPageLoginCustomField;
    /**
     * @optional
     *
     * @description
     *
     * Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.
     */
    set contactEmail(value: string);
    get contactEmail(): string;
    /**
     * @optional
     *
     * @description
     *
     * Texto customizado que fica entre a logo e a mensagem de boas-vindas.
     */
    set productName(value: string);
    get productName(): string;
    /**
     * @optional
     *
     * @description
     * Adiciona uma `tag` abaixo do título que especifica o ambiente que o usuário está fazendo o login.
     *
     * > Essa propriedade limita o texto em 40 caracteres.
     */
    set environment(environment: string);
    get environment(): string;
    /**
     * @optional
     *
     * @description
     * Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
     * O aviso será exibido somente se a quantidade for maior que zero.
     *
     * > Caso tenha algum valor atribuído para o atributo `p-authentication-url` e o retorno da requisição estiver atribuindo valor
     * para o `p-exceeded-attempts-warning`, o valor considerado será o do retorno da requisição.
     *
     * @default `0`
     */
    set exceededAttemptsWarning(value: number);
    get exceededAttemptsWarning(): number;
    /**
     * @optional
     *
     * @description
     *
     * Esconde a função "Lembrar usuário" do formulário de login.
     *
     * Quando essa propriedade é setada com `true` a propriedade `rememberUser` enviada no evento `p-login-submit` será sempre
     * `false`.
     *
     * > Veja a propriedade `p-literals` para customizar a literal `rememberUser`.
     *
     * @default `false`
     */
    set hideRememberUser(value: boolean);
    get hideRememberUser(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-login`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageLoginLiterals = {
     *    attempts: '{0} vez(es) ',
     *    createANewPasswordNow: 'Melhor criar uma senha nova agora! Você vai poder entrar no sistema logo em seguida.',
     *    forgotPassword: 'Esqueceu sua senha?',
     *    forgotYourPassword: 'Esqueceu sua senha?',
     *    highlightInfo: '',
     *    iForgotMyPassword: 'Esqueci minha senha',
     *    ifYouTryHarder: 'Se tentar mais ',
     *    welcome: 'Boas-vindas',
     *    loginErrorPattern: 'Login obrigatório',
     *    loginHint: 'Caso não possua usuário entre em contato com o suporte',
     *    loginLabel: 'Insira seu usuário',
     *    loginPlaceholder: 'Insira seu usuário de acesso',
     *    passwordErrorPattern: 'Senha obrigatória',
     *    passwordLabel: 'Insira sua senha',
     *    passwordPlaceholder: 'Insira sua senha de acesso',
     *    customFieldErrorPattern: 'Campo customizado inválido',
     *    customFieldPlaceholder: 'Por favor insira um valor',
     *    registerUrl: 'Novo registro',
     *    rememberUser: 'Lembrar usuário',
     *    rememberUserHint: 'Esta opção pode ser desabilitada nas configurações do sistema',
     *    submitLabel: 'Acessar sistema',
     *    submittedLabel: 'Carregando...',
     *    titlePopover: 'Opa!',
     *    yourUserWillBeBlocked: 'sem sucesso seu usuário será bloqueado e você fica 24 horas sem poder acessar :('
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageLoginLiterals = {
     *    loginPlaceholder: 'Insira seu usuário de acesso',
     *    passwordPlaceholder: 'Insira sua senha de acesso',
     *    submitLabel: 'Acessar sistema'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-login
     *   [p-literals]="customLiterals">
     * </po-page-login>
     * ```
     *
     *  > O objeto padrão de literais será traduzido de acordo com o idioma do browser (pt, en, es).
     *  > É também possível alternar o objeto padrão de literais através do seletor de idiomas localizado na parte inferior do template,
     * nesse caso, há também a opção do idioma russo.
     */
    set literals(value: PoPageLoginLiterals);
    get literals(): PoPageLoginLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Habilita um estado de carregamento ao botão de *login*.
     *
     * > É necessário atribuir `true` à esta propriedade na função definida em `p-login-submit`.
     *
     * @default `false`
     */
    set loading(value: boolean);
    get loading(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Valor do modelo do campo de login.
     */
    set login(value: string);
    get login(): string;
    /**
     * @optional
     *
     * @description
     *
     * Atributo que recebe uma lista de erros e exibe abaixo do campo de login.
     */
    set loginErrors(value: Array<string>);
    get loginErrors(): Array<string>;
    /**
     * @optional
     *
     * @description
     *
     * Atributo que recebe uma lista de erros e exibe abaixo do campo de password.
     */
    set passwordErrors(value: Array<string>);
    get passwordErrors(): Array<string>;
    /**
     * @optional
     *
     * @description
     *
     * Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.
     *
     * A propriedade aceita os seguintes tipos:
     *
     * - **String**: informe uma url externa ou uma rota válida;
     * - **Function**: pode-se customizar a ação. Para esta possilidade basta atribuir:
     * ```
     * <po-page-login>
     *   [recovery]="this.myRecovery.bind(this)">
     * </po-page-login>
     * ```
     *
     * - **PoPageLoginRecovery**: cria-se vínculo automático com o template **po-modal-password-recovery**.
     *   O objeto deve conter a **url** para requisição dos recursos e pode-se definir o **tipo** de modal para recuperação de senha,
     *   **email** para contato e **máscara** do campo de telefone.
     */
    set recovery(value: string | Function | PoPageLoginRecovery);
    get recovery(): string | Function | PoPageLoginRecovery;
    /**
     * @optional
     *
     * @description
     *
     * Caso a aplicação tenha um link para novos cadastros, informe uma url externa ou uma rota válida, dessa
     * forma será exibido um link abaixo do formulário de login para os usuários da aplicação.
     *
     * Exemplos de valores válidos:
     * - **local**: `/home`
     * - **url externa**: `https://po-ui.io`
     *
     * > Veja a propriedade `p-literals` para customizar a literal `registerUrl`.
     */
    set registerUrl(value: string);
    get registerUrl(): string;
    /**
     * @optional
     *
     * @description
     *
     * Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `Basic` e `Bearer`.
     *
     * > Caso o tipo definido seja `Basic`, o componente fará uma requisição `POST` contendo:
     *
     * ```
     * headers {
     *  Authorization: Basic base64(login:password)
     * }
     *
     * body {
     *  rememberUser: rememberUser
     * }
     * ```
     *
     * > Caso o tipo definido seja `Bearer`, o componente fará uma requisição `POST` contendo:
     *
     * ```
     * body {
     *  login: login,
     *  password: base64(password),
     *  rememberUser: rememberUser
     * }
     * ```
     *
     * @default `PoPageLoginAuthenticationType.Basic`
     */
    set authenticationType(value: PoPageLoginAuthenticationType);
    get authenticationType(): PoPageLoginAuthenticationType;
    /**
     * @optional
     *
     * @description
     *
     * Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `p-login-submit` será ignorado e o
     * componente adquirirá automatização para o processo de autenticação.
     *
     * ### Processos
     * Ao digitar um valor válido no campo de login/password e pressionar **Enter**, o componente fará uma requisição `POST`
     * na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário:
     *
     * ```
     * headers {
     *  Authorization: Basic base64(login:password)
     * }
     *
     * body {
     *  rememberUser: rememberUser
     * }
     * ```
     *
     * Em caso de **sucesso**, o objeto de retorno é armazenado no `sessionStorage` e o usuário é redirecionado para a página inicial da
     * aplicação `/`.
     *
     * ```
     * 200:
     *  {
     *    user: user
     *  }
     * ```
     *
     * Em caso de **erro** na autenticação, espera-se o seguinte retorno:
     *
     * ```
     * 400/401
     *  {
     *    code: 400/401,
     *    message: message,
     *    detailedMessage: detailedMessage,
     *    helpUrl?: helpUrl
     *  }
     * ```
     *
     * > Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `p-exceeded-attempts-warning`,
     * assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `p-login-errors` e
     * `p-password-errors` conforme retorno abaixo:
     *
     * ```
     * 400
     *  {
     *    code: 400/401,
     *    message: message,
     *    detailedMessage: detailedMessage,
     *    helpUrl?: helpUrl,
     *    maxAttemptsRemaining?: maxAttemptsRemaining,
     *    loginWarnings?: [loginWarnings],
     *    passwordWarnings?: [passwordWarnings]
     *  }
     * ```
     *
     * > Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero), poderá ser passado um valor para o
     * atributo `p-blocked-url` e o usuário será redirecionado para uma tela de bloqueio.
     *
     * *Processo finalizado.*
     *
     * _______________
     *
     * #### Praticidade
     * As informações do serviço de autenticação também podem ser transmitidas diretamente pelas configuraçãos de rota e, desta maneira,
     * dispensa-se qualquer menção e/ou importação do componente `po-page-login` no restante da aplicação. O exemplo abaixo exemplifica
     * a forma dinâmica com a qual o template de tela de login pode ser gerado ao navegar para rota `/login`, e também como ele se comunica
     * com o serviço para efetuação do processo de autenticação do usuário e solicitação de nova senha.
     * Basta definir nas configurações de rota:
     *
     *
     * ```
     *   import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';
     *
     *   ...
     *   const routes: Routes = [
     *     {
     *       path: 'login', component: PoPageLoginComponent, data: {
     *         serviceApi: 'https://po-ui.io/sample/api/users/authentication',
     *         environment: 'development',
     *         recovery: {
     *           url: 'https://po-ui.io/sample/api/users',
     *           type: PoModalPasswordRecoveryType.All,
     *           contactMail: 'dev.po@po-ui.com',
     *           phoneMask: '9-999-999-9999'
     *         },
     *         registerUrl: '/new-password',
     *         authenticationType: PoPageLoginAthenticationType.Basic
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
     *
     * O metadado `serviceApi` deve ser a **url** para requisição dos recursos de autenticação, o `environment` alimenta a propriedade
     * `p-environment`, `recovery` é a interface `PoPageLoginRecovery` responsável pelas especificações contidas na modal de recuperação de
     * senha, `registerUrl` alimenta a propriedade `p-register-url` e `authenticationType` que define a propriedade `p-authentication-type`.
     *
     * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
     *
     */
    set authenticationUrl(value: string);
    get authenticationUrl(): string;
    /**
     * @optional
     *
     * @description
     *
     * Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero) e a aplicação tenha um link de bloqueio de usuário,
     * informe uma url externa ou uma rota válida, dessa forma em caso de bloqueio o usuário será redirecionado.
     */
    set blockedUrl(value: string);
    get blockedUrl(): string;
    /**
     * @optional
     *
     * @description
     *
     * Exibe um botão para suporte.
     *
     * A propriedade aceita os seguintes tipos:
     *
     * - **String**: URL externa ou uma rota válida;
     * - **Function**: Função a ser disparada ao clicar no botão de suporte;
     * ```
     * <po-page-login>
     *   [p-support]="this.mySupport.bind(this)">
     * </po-page-login>
     * ```
     *
     */
    set support(value: string | Function);
    get support(): string | Function;
    /**
     * @optional
     *
     * @description
     *
     * Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.
     *
     * Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.
     *
     * Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.
     *
     * Caso seja passado um array vazio, a página terá o idioma configurado no `i18n` e não mostrará o combo de seleção.
     *
     * > Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `p-literals`.
     *
     *
     */
    set languagesList(languagesList: Array<PoLanguage>);
    get languagesList(): Array<PoLanguage>;
    get showLanguage(): boolean;
    get language(): string;
    get pageLoginLiterals(): PoPageLoginLiterals;
    constructor(loginService: PoPageLoginService, router: Router, poLanguageService: PoLanguageService);
    ngOnDestroy(): void;
    closePopover(): void;
    onLoginSubmit(): void;
    private getDefaultCustomFieldObject;
    private openExternalLink;
    private openInternalLink;
    private redirectBlockedUrl;
    private setValuesToProperties;
    protected abstract concatenateLoginHintWithContactEmail(contactEmail: string): any;
    protected abstract setLoginErrors(value: Array<string>): void;
    protected abstract setPasswordErrors(value: Array<string>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageLoginBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageLoginBaseComponent, never, never, { "background": "p-background"; "logo": "p-logo"; "loginPattern": "p-login-pattern"; "passwordPattern": "p-password-pattern"; "secondaryLogo": "p-secondary-logo"; "customField": "p-custom-field"; "contactEmail": "p-contact-email"; "productName": "p-product-name"; "environment": "p-environment"; "exceededAttemptsWarning": "p-exceeded-attempts-warning"; "hideRememberUser": "p-hide-remember-user"; "literals": "p-literals"; "loading": "p-loading"; "login": "p-login"; "loginErrors": "p-login-errors"; "passwordErrors": "p-password-errors"; "recovery": "p-recovery"; "registerUrl": "p-register-url"; "authenticationType": "p-authentication-type"; "authenticationUrl": "p-authentication-url"; "blockedUrl": "p-blocked-url"; "support": "p-support"; "languagesList": "p-languages"; }, { "loginChange": "p-login-change"; "loginSubmit": "p-login-submit"; "passwordChange": "p-password-change"; "languageChange": "p-language-change"; }, never, never, false>;
}
