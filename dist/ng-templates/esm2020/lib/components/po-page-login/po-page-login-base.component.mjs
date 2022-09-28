import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, convertToInt, getShortBrowserLanguage, isExternalLink, isTypeof } from './../../utils/util';
import { poLocaleDefault, poLanguageDefault } from '@po-ui/ng-components';
import { PoPageLoginAuthenticationType } from './enums/po-page-login-authentication-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "./po-page-login.service";
import * as i2 from "@angular/router";
import * as i3 from "@po-ui/ng-components";
const poPageLoginContentMaxLength = 40;
export const poPageLoginLiteralsDefault = {
    en: {
        title: 'Welcome',
        loginErrorPattern: 'Invalid Login',
        loginHint: `Your login user was given to you at your first day.
    If you don't have this information contact support`,
        loginPlaceholder: 'Insert your e-mail',
        passwordErrorPattern: 'Invalid Password',
        passwordPlaceholder: 'Insert your password',
        customFieldErrorPattern: 'Invalid value',
        customFieldPlaceholder: 'Please enter a value',
        rememberUser: 'Automatic login',
        rememberUserHint: 'You can disable this option in system configuration',
        submitLabel: 'Enter',
        submittedLabel: 'Loading...',
        forgotPassword: 'Forgot your Password?',
        highlightInfo: '',
        registerUrl: 'New register',
        titlePopover: 'Oops!',
        forgotYourPassword: 'Forgot your password?',
        ifYouTryHarder: 'If you try ',
        attempts: '{0} more time(s) ',
        yourUserWillBeBlocked: 'without success your user will be blocked and you will be left 24 hours without being able to access :(',
        createANewPasswordNow: 'Better create a new password now! You will be able to log into the system right away.',
        iForgotMyPassword: 'I forgot my password',
        welcome: 'Welcome',
        support: 'Support'
    },
    es: {
        title: 'Bienvenido',
        loginErrorPattern: 'Login inválido',
        loginHint: `Su usuario ha sido entregado para usted en su primer día.
    Si no tiene esta información, póngase en contacto con el soporte técnico`,
        loginPlaceholder: 'Inserte su e-mail',
        passwordErrorPattern: 'Contraseña inválida',
        passwordPlaceholder: 'Inserte su contraseña',
        customFieldErrorPattern: 'Valor no válido.',
        customFieldPlaceholder: 'Por favor introduzca un valor',
        rememberUser: 'Inicio de sesión automáticamente',
        rememberUserHint: 'Puede deshabilitar esta opción en el menú del sistema.',
        submitLabel: 'Entrar',
        submittedLabel: 'Cargando...',
        forgotPassword: 'Olvidaste tu contraseña?',
        highlightInfo: '',
        registerUrl: 'Nuevo registro',
        titlePopover: 'Opa!',
        forgotYourPassword: 'Olvidaste tu contraseña?',
        ifYouTryHarder: 'Si intenta más ',
        attempts: '{0} vez/veces ',
        yourUserWillBeBlocked: 'sin éxito su usuario sera bloqueado y usted vás permanecer 24 horas sin poder acceder a :(',
        createANewPasswordNow: '¡Mejor crear una nueva contraseña ahora! Usted podrá entrar en el sistema inmediatamente después.',
        iForgotMyPassword: 'Olvide mi contraseña',
        welcome: 'Bienvenido',
        support: 'Soporte'
    },
    pt: {
        title: 'Bem-vindo',
        loginErrorPattern: 'Login inválido',
        loginHint: `Seu usuário foi entregue a você no seu primeiro dia.
    Caso não tenha mais essa informação contacte o suporte`,
        loginPlaceholder: 'Insira seu e-mail',
        passwordErrorPattern: 'Senha inválida',
        passwordPlaceholder: 'Insira sua senha',
        customFieldErrorPattern: 'Valor inválido.',
        customFieldPlaceholder: 'Por favor insira um valor',
        rememberUser: 'Logar automaticamente',
        rememberUserHint: 'Você pode desabilitar essa opção no menu do sistema',
        submitLabel: 'Entrar',
        submittedLabel: 'Carregando...',
        forgotPassword: 'Esqueceu sua senha?',
        highlightInfo: '',
        registerUrl: 'Novo registro',
        titlePopover: 'Opa!',
        forgotYourPassword: 'Esqueceu sua senha?',
        ifYouTryHarder: 'Se tentar mais ',
        attempts: '{0} vez(es) ',
        yourUserWillBeBlocked: 'sem sucesso seu usuário será bloqueado e você fica 24 horas sem poder acessar :(',
        createANewPasswordNow: 'Melhor criar uma senha nova agora! Você vai poder entrar no sistema logo em seguida.',
        iForgotMyPassword: 'Esqueci minha senha',
        welcome: 'Boas-vindas',
        support: 'Suporte'
    },
    ru: {
        title: 'Добро пожаловать!',
        loginErrorPattern: 'Неверный логин',
        loginHint: `Ваш логин был предоставлен вам в первый день.
    Если у вас нет этой информации, обратитесь в службу поддержки`,
        loginPlaceholder: 'Вставьте свой адрес электронной почты',
        passwordErrorPattern: 'Неверный пароль',
        passwordPlaceholder: 'Введите свой пароль',
        customFieldErrorPattern: 'Неверное значение.',
        customFieldPlaceholder: 'Пожалуйста, введите значение',
        rememberUser: 'Автоматический вход',
        rememberUserHint: 'Вы можете отключить эту опцию в конфигурации системы',
        submitLabel: 'Войти',
        submittedLabel: '3агрузка...',
        forgotPassword: 'Забыли пароль?',
        highlightInfo: '',
        registerUrl: 'Новый регистр',
        titlePopover: 'Ой!',
        forgotYourPassword: 'Забыли пароль?',
        ifYouTryHarder: 'Если вы безуспешно попытаетесь войти еще ',
        attempts: '{0} раз(а) ',
        yourUserWillBeBlocked: 'Ваш пользователь будет заблокирован, и Вы останетесь на 24 часа без возможности доступа :(',
        createANewPasswordNow: 'Лучше создайте новый пароль сейчас! Вы сможете сразу войти в систему.',
        iForgotMyPassword: 'Я забыл свой пароль',
        welcome: 'добро пожаловать',
        support: 'Поддержка'
    }
};
export const poPageLoginLiteralIn = {
    en: 'in',
    es: 'en',
    pt: 'em',
    ru: 'в'
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
export class PoPageLoginBaseComponent {
    constructor(loginService, router, poLanguageService) {
        this.loginService = loginService;
        this.router = router;
        this.poLanguageService = poLanguageService;
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
        this.loginChange = new EventEmitter();
        /**
         * Evento disparado ao submeter o formulário de login (apertando `Enter` dentro dos campos ou pressionando o botão de confirmação).
         *
         * Esse evento receberá como parâmetro um objeto do tipo `PoPageLogin` com os dados informados no formulário.
         *
         * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
         *
         * > Para mais detalhes consulte a documentação sobre a interface `PoPageLogin` mais abaixo.
         */
        this.loginSubmit = new EventEmitter();
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
        this.passwordChange = new EventEmitter();
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
        this.languageChange = new EventEmitter();
        this.allLoginErrors = [];
        this.allPasswordErrors = [];
        this.rememberUser = false;
        this.showExceededAttemptsWarning = false;
        this._authenticationType = PoPageLoginAuthenticationType.Basic;
        this._hideRememberUser = false;
        this._loading = false;
        this._loginErrors = [];
        this._passwordErrors = [];
        this.selectedLanguage = this.poLanguageService.getShortLanguage();
    }
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
    set customField(value) {
        if (value) {
            if (isTypeof(value, 'string')) {
                this.customFieldType = 'input';
                this._customField = value;
                this.customFieldObject = this.getDefaultCustomFieldObject(value);
                return;
            }
            if (isTypeof(value, 'object') && !Array.isArray(value) && value['property']) {
                this._customField = value;
                this.customFieldObject = value;
                if (!this.customFieldObject.options && !this.customFieldObject.url) {
                    this.customFieldType = 'input';
                }
                else {
                    this.customFieldType = this.customFieldObject.options ? 'select' : 'combo';
                }
                return;
            }
        }
        this._customField = undefined;
        this.customFieldObject = undefined;
    }
    get customField() {
        return this._customField;
    }
    /**
     * @optional
     *
     * @description
     *
     * Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.
     */
    set contactEmail(value) {
        this._contactEmail = value;
    }
    get contactEmail() {
        return this._contactEmail;
    }
    /**
     * @optional
     *
     * @description
     *
     * Texto customizado que fica entre a logo e a mensagem de boas-vindas.
     */
    set productName(value) {
        this._productName = value;
    }
    get productName() {
        return this._productName;
    }
    /**
     * @optional
     *
     * @description
     * Adiciona uma `tag` abaixo do título que especifica o ambiente que o usuário está fazendo o login.
     *
     * > Essa propriedade limita o texto em 40 caracteres.
     */
    set environment(environment) {
        if (environment && environment.length > poPageLoginContentMaxLength) {
            this._environment = environment.substring(0, poPageLoginContentMaxLength);
        }
        else {
            this._environment = environment;
        }
    }
    get environment() {
        return this._environment;
    }
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
    set exceededAttemptsWarning(value) {
        this._exceededAttemptsWarning = convertToInt(value);
        this.showExceededAttemptsWarning = this.exceededAttemptsWarning > 0;
    }
    get exceededAttemptsWarning() {
        return this._exceededAttemptsWarning;
    }
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
    set hideRememberUser(value) {
        this._hideRememberUser = value === '' ? true : convertToBoolean(value);
        if (this._hideRememberUser) {
            this.rememberUser = false;
        }
    }
    get hideRememberUser() {
        return this._hideRememberUser;
    }
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
    set literals(value) {
        this._literals = value;
    }
    get literals() {
        return this._literals;
    }
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
    set loading(value) {
        this._loading = convertToBoolean(value);
    }
    get loading() {
        return this._loading;
    }
    /**
     * @optional
     *
     * @description
     *
     * Valor do modelo do campo de login.
     */
    set login(value) {
        this._login = value;
        if (!this.authenticationUrl) {
            this.loginChange.emit(this._login);
        }
    }
    get login() {
        return this._login;
    }
    /**
     * @optional
     *
     * @description
     *
     * Atributo que recebe uma lista de erros e exibe abaixo do campo de login.
     */
    set loginErrors(value) {
        this._loginErrors = value || [];
        this.setLoginErrors(this._loginErrors);
    }
    get loginErrors() {
        return this._loginErrors;
    }
    /**
     * @optional
     *
     * @description
     *
     * Atributo que recebe uma lista de erros e exibe abaixo do campo de password.
     */
    set passwordErrors(value) {
        this._passwordErrors = value || [];
        this.setPasswordErrors(this._passwordErrors);
    }
    get passwordErrors() {
        return this._passwordErrors;
    }
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
    set recovery(value) {
        this._recovery = value;
    }
    get recovery() {
        return this._recovery;
    }
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
    set registerUrl(value) {
        this._registerUrl = isTypeof(value, 'string') ? value : undefined;
    }
    get registerUrl() {
        return this._registerUrl;
    }
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
    set authenticationType(value) {
        this._authenticationType = Object.values(PoPageLoginAuthenticationType).includes(value)
            ? value
            : PoPageLoginAuthenticationType.Basic;
    }
    get authenticationType() {
        return this._authenticationType;
    }
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
    set authenticationUrl(value) {
        this._authenticationUrl = isTypeof(value, 'string') ? value : undefined;
    }
    get authenticationUrl() {
        return this._authenticationUrl;
    }
    /**
     * @optional
     *
     * @description
     *
     * Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero) e a aplicação tenha um link de bloqueio de usuário,
     * informe uma url externa ou uma rota válida, dessa forma em caso de bloqueio o usuário será redirecionado.
     */
    set blockedUrl(value) {
        this._blockedUrl = isTypeof(value, 'string') ? value : undefined;
    }
    get blockedUrl() {
        return this._blockedUrl;
    }
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
    set support(value) {
        this._support = value;
    }
    get support() {
        return this._support;
    }
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
    set languagesList(languagesList) {
        if (languagesList) {
            if (languagesList.length) {
                this._languagesList = languagesList;
            }
            else {
                this._languagesList = poLanguageDefault.filter(language => language.language === this.language);
            }
        }
    }
    get languagesList() {
        if (this._languagesList) {
            return this._languagesList;
        }
        return poLanguageDefault;
    }
    get showLanguage() {
        return this.languagesList.length > 1;
    }
    get language() {
        return this.selectedLanguage || getShortBrowserLanguage();
    }
    get pageLoginLiterals() {
        const loginHintWithContactEmail = this.contactEmail
            ? this.concatenateLoginHintWithContactEmail(this.contactEmail)
            : undefined;
        return {
            ...poPageLoginLiteralsDefault[poLocaleDefault],
            ...poPageLoginLiteralsDefault[this.language],
            ...loginHintWithContactEmail,
            ...this.literals
        };
    }
    ngOnDestroy() {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }
    closePopover() {
        this.showExceededAttemptsWarning = false;
    }
    onLoginSubmit() {
        const loginForm = {
            login: this.login,
            password: this.password,
            rememberUser: this.rememberUser
        };
        if (this.customField) {
            loginForm[this.customFieldObject.property] = this.customFieldObject.value;
        }
        if (this.authenticationUrl) {
            this.loading = true;
            this.loginSubscription = this.loginService
                .onLogin(this.authenticationUrl, this.authenticationType, loginForm)
                .subscribe(data => {
                this.setValuesToProperties();
                sessionStorage.setItem('PO_USER_LOGIN', JSON.stringify(data));
                this.openInternalLink('/');
                this.loading = false;
            }, error => {
                if (error.error.code === '400' || error.error.code === '401') {
                    this.setValuesToProperties(error);
                    this.redirectBlockedUrl(this.exceededAttemptsWarning, this.blockedUrl);
                }
                this.loading = false;
            });
        }
        else {
            this.loginSubmit.emit(loginForm);
            this.showExceededAttemptsWarning = this.exceededAttemptsWarning > 0;
        }
    }
    getDefaultCustomFieldObject(property) {
        return { property };
    }
    openExternalLink(url) {
        window.open(url, '_blank');
    }
    openInternalLink(url) {
        this.router.navigate([url]);
    }
    redirectBlockedUrl(attempts, blockedUrl) {
        if (attempts === 0 && blockedUrl) {
            this.showExceededAttemptsWarning = false;
            isExternalLink(blockedUrl) ? this.openExternalLink(blockedUrl) : this.openInternalLink(blockedUrl);
        }
    }
    setValuesToProperties(result) {
        if (result) {
            this.exceededAttemptsWarning = result.error.maxAttemptsRemaining;
            this.loginErrors = result.error.loginWarnings;
            this.passwordErrors = result.error.passwordWarnings;
            this.blockedUrl = result.error.blockedUrl;
        }
        else {
            this.exceededAttemptsWarning = 0;
            this.loginErrors = [];
            this.passwordErrors = [];
            this.blockedUrl = '';
        }
    }
}
PoPageLoginBaseComponent.ɵfac = function PoPageLoginBaseComponent_Factory(t) { return new (t || PoPageLoginBaseComponent)(i0.ɵɵdirectiveInject(i1.PoPageLoginService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.PoLanguageService)); };
PoPageLoginBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageLoginBaseComponent, inputs: { background: ["p-background", "background"], logo: ["p-logo", "logo"], loginPattern: ["p-login-pattern", "loginPattern"], passwordPattern: ["p-password-pattern", "passwordPattern"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], customField: ["p-custom-field", "customField"], contactEmail: ["p-contact-email", "contactEmail"], productName: ["p-product-name", "productName"], environment: ["p-environment", "environment"], exceededAttemptsWarning: ["p-exceeded-attempts-warning", "exceededAttemptsWarning"], hideRememberUser: ["p-hide-remember-user", "hideRememberUser"], literals: ["p-literals", "literals"], loading: ["p-loading", "loading"], login: ["p-login", "login"], loginErrors: ["p-login-errors", "loginErrors"], passwordErrors: ["p-password-errors", "passwordErrors"], recovery: ["p-recovery", "recovery"], registerUrl: ["p-register-url", "registerUrl"], authenticationType: ["p-authentication-type", "authenticationType"], authenticationUrl: ["p-authentication-url", "authenticationUrl"], blockedUrl: ["p-blocked-url", "blockedUrl"], support: ["p-support", "support"], languagesList: ["p-languages", "languagesList"] }, outputs: { loginChange: "p-login-change", loginSubmit: "p-login-submit", passwordChange: "p-password-change", languageChange: "p-language-change" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoPageLoginService }, { type: i2.Router }, { type: i3.PoLanguageService }]; }, { background: [{
            type: Input,
            args: ['p-background']
        }], logo: [{
            type: Input,
            args: ['p-logo']
        }], loginPattern: [{
            type: Input,
            args: ['p-login-pattern']
        }], passwordPattern: [{
            type: Input,
            args: ['p-password-pattern']
        }], secondaryLogo: [{
            type: Input,
            args: ['p-secondary-logo']
        }], loginChange: [{
            type: Output,
            args: ['p-login-change']
        }], loginSubmit: [{
            type: Output,
            args: ['p-login-submit']
        }], passwordChange: [{
            type: Output,
            args: ['p-password-change']
        }], languageChange: [{
            type: Output,
            args: ['p-language-change']
        }], customField: [{
            type: Input,
            args: ['p-custom-field']
        }], contactEmail: [{
            type: Input,
            args: ['p-contact-email']
        }], productName: [{
            type: Input,
            args: ['p-product-name']
        }], environment: [{
            type: Input,
            args: ['p-environment']
        }], exceededAttemptsWarning: [{
            type: Input,
            args: ['p-exceeded-attempts-warning']
        }], hideRememberUser: [{
            type: Input,
            args: ['p-hide-remember-user']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], loading: [{
            type: Input,
            args: ['p-loading']
        }], login: [{
            type: Input,
            args: ['p-login']
        }], loginErrors: [{
            type: Input,
            args: ['p-login-errors']
        }], passwordErrors: [{
            type: Input,
            args: ['p-password-errors']
        }], recovery: [{
            type: Input,
            args: ['p-recovery']
        }], registerUrl: [{
            type: Input,
            args: ['p-register-url']
        }], authenticationType: [{
            type: Input,
            args: ['p-authentication-type']
        }], authenticationUrl: [{
            type: Input,
            args: ['p-authentication-url']
        }], blockedUrl: [{
            type: Input,
            args: ['p-blocked-url']
        }], support: [{
            type: Input,
            args: ['p-support']
        }], languagesList: [{
            type: Input,
            args: ['p-languages']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1sb2dpbi1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1sb2dpbi9wby1wYWdlLWxvZ2luLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkgsT0FBTyxFQUFxQixlQUFlLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFNL0YsTUFBTSwyQkFBMkIsR0FBRyxFQUFFLENBQUM7QUFFdkMsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUc7SUFDeEMsRUFBRSxFQUF1QjtRQUN2QixLQUFLLEVBQUUsU0FBUztRQUNoQixpQkFBaUIsRUFBRSxlQUFlO1FBQ2xDLFNBQVMsRUFBRTt1REFDd0M7UUFDbkQsZ0JBQWdCLEVBQUUsb0JBQW9CO1FBQ3RDLG9CQUFvQixFQUFFLGtCQUFrQjtRQUN4QyxtQkFBbUIsRUFBRSxzQkFBc0I7UUFDM0MsdUJBQXVCLEVBQUUsZUFBZTtRQUN4QyxzQkFBc0IsRUFBRSxzQkFBc0I7UUFDOUMsWUFBWSxFQUFFLGlCQUFpQjtRQUMvQixnQkFBZ0IsRUFBRSxxREFBcUQ7UUFDdkUsV0FBVyxFQUFFLE9BQU87UUFDcEIsY0FBYyxFQUFFLFlBQVk7UUFDNUIsY0FBYyxFQUFFLHVCQUF1QjtRQUN2QyxhQUFhLEVBQUUsRUFBRTtRQUNqQixXQUFXLEVBQUUsY0FBYztR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Qm9CLHVCQUF1QjtrQkFBaEUsS0FBSzttQkFBQyw2QkFBNkI7WUF1QkQsZ0JBQWdCO2tCQUFsRCxLQUFLO21CQUFDLHNCQUFzQjtZQXVFSixRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFtQkssT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBZUksS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTO1lBbUJhLFdBQVc7a0JBQXZDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBZVMsY0FBYztrQkFBN0MsS0FBSzttQkFBQyxtQkFBbUI7WUE2QkQsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBc0JVLFdBQVc7a0JBQXZDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBdUNhLGtCQUFrQjtrQkFBckQsS0FBSzttQkFBQyx1QkFBdUI7WUEySEssaUJBQWlCO2tCQUFuRCxLQUFLO21CQUFDLHNCQUFzQjtZQWdCRCxVQUFVO2tCQUFyQyxLQUFLO21CQUFDLGVBQWU7WUEwQkUsT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBeUJRLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuLCBjb252ZXJ0VG9JbnQsIGdldFNob3J0QnJvd3Nlckxhbmd1YWdlLCBpc0V4dGVybmFsTGluaywgaXNUeXBlb2YgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UsIHBvTG9jYWxlRGVmYXVsdCwgUG9MYW5ndWFnZSwgcG9MYW5ndWFnZURlZmF1bHQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VMb2dpbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWxvZ2luLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUxvZ2luQXV0aGVudGljYXRpb25UeXBlIH0gZnJvbSAnLi9lbnVtcy9wby1wYWdlLWxvZ2luLWF1dGhlbnRpY2F0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvUGFnZUxvZ2luQ3VzdG9tRmllbGQgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1sb2dpbi1jdXN0b20tZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlTG9naW5MaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWxvZ2luLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUxvZ2luUmVjb3ZlcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1sb2dpbi1yZWNvdmVyeS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VMb2dpblNlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2UtbG9naW4uc2VydmljZSc7XHJcblxyXG5jb25zdCBwb1BhZ2VMb2dpbkNvbnRlbnRNYXhMZW5ndGggPSA0MDtcclxuXHJcbmV4cG9ydCBjb25zdCBwb1BhZ2VMb2dpbkxpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogPFBvUGFnZUxvZ2luTGl0ZXJhbHM+e1xyXG4gICAgdGl0bGU6ICdXZWxjb21lJyxcclxuICAgIGxvZ2luRXJyb3JQYXR0ZXJuOiAnSW52YWxpZCBMb2dpbicsXHJcbiAgICBsb2dpbkhpbnQ6IGBZb3VyIGxvZ2luIHVzZXIgd2FzIGdpdmVuIHRvIHlvdSBhdCB5b3VyIGZpcnN0IGRheS5cclxuICAgIElmIHlvdSBkb24ndCBoYXZlIHRoaXMgaW5mb3JtYXRpb24gY29udGFjdCBzdXBwb3J0YCxcclxuICAgIGxvZ2luUGxhY2Vob2xkZXI6ICdJbnNlcnQgeW91ciBlLW1haWwnLFxyXG4gICAgcGFzc3dvcmRFcnJvclBhdHRlcm46ICdJbnZhbGlkIFBhc3N3b3JkJyxcclxuICAgIHBhc3N3b3JkUGxhY2Vob2xkZXI6ICdJbnNlcnQgeW91ciBwYXNzd29yZCcsXHJcbiAgICBjdXN0b21GaWVsZEVycm9yUGF0dGVybjogJ0ludmFsaWQgdmFsdWUnLFxyXG4gICAgY3VzdG9tRmllbGRQbGFjZWhvbGRlcjogJ1BsZWFzZSBlbnRlciBhIHZhbHVlJyxcclxuICAgIHJlbWVtYmVyVXNlcjogJ0F1dG9tYXRpYyBsb2dpbicsXHJcbiAgICByZW1lbWJlclVzZXJIaW50OiAnWW91IGNhbiBkaXNhYmxlIHRoaXMgb3B0aW9uIGluIHN5c3RlbSBjb25maWd1cmF0aW9uJyxcclxuICAgIHN1Ym1pdExhYmVsOiAnRW50ZXInLFxyXG4gICAgc3VibWl0dGVkTGFiZWw6ICdMb2FkaW5nLi4uJyxcclxuICAgIGZvcmdvdFBhc3N3b3JkOiAnRm9yZ290IHlvdXIgUGFzc3dvcmQ/JyxcclxuICAgIGhpZ2hsaWdodEluZm86ICcnLFxyXG4gICAgcmVnaXN0ZXJVcmw6ICdOZXcgcmVnaXN0ZXInLFxyXG4gICAgdGl0bGVQb3BvdmVyOiAnT29wcyEnLFxyXG4gICAgZm9yZ290WW91clBhc3N3b3JkOiAnRm9yZ290IHlvdXIgcGFzc3dvcmQ/JyxcclxuICAgIGlmWW91VHJ5SGFyZGVyOiAnSWYgeW91IHRyeSAnLFxyXG4gICAgYXR0ZW1wdHM6ICd7MH0gbW9yZSB0aW1lKHMpICcsXHJcbiAgICB5b3VyVXNlcldpbGxCZUJsb2NrZWQ6XHJcbiAgICAgICd3aXRob3V0IHN1Y2Nlc3MgeW91ciB1c2VyIHdpbGwgYmUgYmxvY2tlZCBhbmQgeW91IHdpbGwgYmUgbGVmdCAyNCBob3VycyB3aXRob3V0IGJlaW5nIGFibGUgdG8gYWNjZXNzIDooJyxcclxuICAgIGNyZWF0ZUFOZXdQYXNzd29yZE5vdzogJ0JldHRlciBjcmVhdGUgYSBuZXcgcGFzc3dvcmQgbm93ISBZb3Ugd2lsbCBiZSBhYmxlIHRvIGxvZyBpbnRvIHRoZSBzeXN0ZW0gcmlnaHQgYXdheS4nLFxyXG4gICAgaUZvcmdvdE15UGFzc3dvcmQ6ICdJIGZvcmdvdCBteSBwYXNzd29yZCcsXHJcbiAgICB3ZWxjb21lOiAnV2VsY29tZScsXHJcbiAgICBzdXBwb3J0OiAnU3VwcG9ydCdcclxuICB9LFxyXG4gIGVzOiA8UG9QYWdlTG9naW5MaXRlcmFscz57XHJcbiAgICB0aXRsZTogJ0JpZW52ZW5pZG8nLFxyXG4gICAgbG9naW5FcnJvclBhdHRlcm46ICdMb2dpbiBpbnbDoWxpZG8nLFxyXG4gICAgbG9naW5IaW50OiBgU3UgdXN1YXJpbyBoYSBzaWRvIGVudHJlZ2FkbyBwYXJhIHVzdGVkIGVuIHN1IHByaW1lciBkw61hLlxyXG4gICAgU2kgbm8gdGllbmUgZXN0YSBpbmZvcm1hY2nDs24sIHDDs25nYXNlIGVuIGNvbnRhY3RvIGNvbiBlbCBzb3BvcnRlIHTDqWNuaWNvYCxcclxuICAgIGxvZ2luUGxhY2Vob2xkZXI6ICdJbnNlcnRlIHN1IGUtbWFpbCcsXHJcbiAgICBwYXNzd29yZEVycm9yUGF0dGVybjogJ0NvbnRyYXNlw7FhIGludsOhbGlkYScsXHJcbiAgICBwYXNzd29yZFBsYWNlaG9sZGVyOiAnSW5zZXJ0ZSBzdSBjb250cmFzZcOxYScsXHJcbiAgICBjdXN0b21GaWVsZEVycm9yUGF0dGVybjogJ1ZhbG9yIG5vIHbDoWxpZG8uJyxcclxuICAgIGN1c3RvbUZpZWxkUGxhY2Vob2xkZXI6ICdQb3IgZmF2b3IgaW50cm9kdXpjYSB1biB2YWxvcicsXHJcbiAgICByZW1lbWJlclVzZXI6ICdJbmljaW8gZGUgc2VzacOzbiBhdXRvbcOhdGljYW1lbnRlJyxcclxuICAgIHJlbWVtYmVyVXNlckhpbnQ6ICdQdWVkZSBkZXNoYWJpbGl0YXIgZXN0YSBvcGNpw7NuIGVuIGVsIG1lbsO6IGRlbCBzaXN0ZW1hLicsXHJcbiAgICBzdWJtaXRMYWJlbDogJ0VudHJhcicsXHJcbiAgICBzdWJtaXR0ZWRMYWJlbDogJ0NhcmdhbmRvLi4uJyxcclxuICAgIGZvcmdvdFBhc3N3b3JkOiAnT2x2aWRhc3RlIHR1IGNvbnRyYXNlw7FhPycsXHJcbiAgICBoaWdobGlnaHRJbmZvOiAnJyxcclxuICAgIHJlZ2lzdGVyVXJsOiAnTnVldm8gcmVnaXN0cm8nLFxyXG4gICAgdGl0bGVQb3BvdmVyOiAnT3BhIScsXHJcbiAgICBmb3Jnb3RZb3VyUGFzc3dvcmQ6ICdPbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/JyxcclxuICAgIGlmWW91VHJ5SGFyZGVyOiAnU2kgaW50ZW50YSBtw6FzICcsXHJcbiAgICBhdHRlbXB0czogJ3swfSB2ZXovdmVjZXMgJyxcclxuICAgIHlvdXJVc2VyV2lsbEJlQmxvY2tlZDogJ3NpbiDDqXhpdG8gc3UgdXN1YXJpbyBzZXJhIGJsb3F1ZWFkbyB5IHVzdGVkIHbDoXMgcGVybWFuZWNlciAyNCBob3JhcyBzaW4gcG9kZXIgYWNjZWRlciBhIDooJyxcclxuICAgIGNyZWF0ZUFOZXdQYXNzd29yZE5vdzpcclxuICAgICAgJ8KhTWVqb3IgY3JlYXIgdW5hIG51ZXZhIGNvbnRyYXNlw7FhIGFob3JhISBVc3RlZCBwb2Ryw6EgZW50cmFyIGVuIGVsIHNpc3RlbWEgaW5tZWRpYXRhbWVudGUgZGVzcHXDqXMuJyxcclxuICAgIGlGb3Jnb3RNeVBhc3N3b3JkOiAnT2x2aWRlIG1pIGNvbnRyYXNlw7FhJyxcclxuICAgIHdlbGNvbWU6ICdCaWVudmVuaWRvJyxcclxuICAgIHN1cHBvcnQ6ICdTb3BvcnRlJ1xyXG4gIH0sXHJcbiAgcHQ6IDxQb1BhZ2VMb2dpbkxpdGVyYWxzPntcclxuICAgIHRpdGxlOiAnQmVtLXZpbmRvJyxcclxuICAgIGxvZ2luRXJyb3JQYXR0ZXJuOiAnTG9naW4gaW52w6FsaWRvJyxcclxuICAgIGxvZ2luSGludDogYFNldSB1c3XDoXJpbyBmb2kgZW50cmVndWUgYSB2b2PDqiBubyBzZXUgcHJpbWVpcm8gZGlhLlxyXG4gICAgQ2FzbyBuw6NvIHRlbmhhIG1haXMgZXNzYSBpbmZvcm1hw6fDo28gY29udGFjdGUgbyBzdXBvcnRlYCxcclxuICAgIGxvZ2luUGxhY2Vob2xkZXI6ICdJbnNpcmEgc2V1IGUtbWFpbCcsXHJcbiAgICBwYXNzd29yZEVycm9yUGF0dGVybjogJ1NlbmhhIGludsOhbGlkYScsXHJcbiAgICBwYXNzd29yZFBsYWNlaG9sZGVyOiAnSW5zaXJhIHN1YSBzZW5oYScsXHJcbiAgICBjdXN0b21GaWVsZEVycm9yUGF0dGVybjogJ1ZhbG9yIGludsOhbGlkby4nLFxyXG4gICAgY3VzdG9tRmllbGRQbGFjZWhvbGRlcjogJ1BvciBmYXZvciBpbnNpcmEgdW0gdmFsb3InLFxyXG4gICAgcmVtZW1iZXJVc2VyOiAnTG9nYXIgYXV0b21hdGljYW1lbnRlJyxcclxuICAgIHJlbWVtYmVyVXNlckhpbnQ6ICdWb2PDqiBwb2RlIGRlc2FiaWxpdGFyIGVzc2Egb3DDp8OjbyBubyBtZW51IGRvIHNpc3RlbWEnLFxyXG4gICAgc3VibWl0TGFiZWw6ICdFbnRyYXInLFxyXG4gICAgc3VibWl0dGVkTGFiZWw6ICdDYXJyZWdhbmRvLi4uJyxcclxuICAgIGZvcmdvdFBhc3N3b3JkOiAnRXNxdWVjZXUgc3VhIHNlbmhhPycsXHJcbiAgICBoaWdobGlnaHRJbmZvOiAnJyxcclxuICAgIHJlZ2lzdGVyVXJsOiAnTm92byByZWdpc3RybycsXHJcbiAgICB0aXRsZVBvcG92ZXI6ICdPcGEhJyxcclxuICAgIGZvcmdvdFlvdXJQYXNzd29yZDogJ0VzcXVlY2V1IHN1YSBzZW5oYT8nLFxyXG4gICAgaWZZb3VUcnlIYXJkZXI6ICdTZSB0ZW50YXIgbWFpcyAnLFxyXG4gICAgYXR0ZW1wdHM6ICd7MH0gdmV6KGVzKSAnLFxyXG4gICAgeW91clVzZXJXaWxsQmVCbG9ja2VkOiAnc2VtIHN1Y2Vzc28gc2V1IHVzdcOhcmlvIHNlcsOhIGJsb3F1ZWFkbyBlIHZvY8OqIGZpY2EgMjQgaG9yYXMgc2VtIHBvZGVyIGFjZXNzYXIgOignLFxyXG4gICAgY3JlYXRlQU5ld1Bhc3N3b3JkTm93OiAnTWVsaG9yIGNyaWFyIHVtYSBzZW5oYSBub3ZhIGFnb3JhISBWb2PDqiB2YWkgcG9kZXIgZW50cmFyIG5vIHNpc3RlbWEgbG9nbyBlbSBzZWd1aWRhLicsXHJcbiAgICBpRm9yZ290TXlQYXNzd29yZDogJ0VzcXVlY2kgbWluaGEgc2VuaGEnLFxyXG4gICAgd2VsY29tZTogJ0JvYXMtdmluZGFzJyxcclxuICAgIHN1cHBvcnQ6ICdTdXBvcnRlJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb1BhZ2VMb2dpbkxpdGVyYWxzPntcclxuICAgIHRpdGxlOiAn0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCEnLFxyXG4gICAgbG9naW5FcnJvclBhdHRlcm46ICfQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0nLFxyXG4gICAgbG9naW5IaW50OiBg0JLQsNGIINC70L7Qs9C40L0g0LHRi9C7INC/0YDQtdC00L7RgdGC0LDQstC70LXQvSDQstCw0Lwg0LIg0L/QtdGA0LLRi9C5INC00LXQvdGMLlxyXG4gICAg0JXRgdC70Lgg0YMg0LLQsNGBINC90LXRgiDRjdGC0L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCwg0L7QsdGA0LDRgtC40YLQtdGB0Ywg0LIg0YHQu9GD0LbQsdGDINC/0L7QtNC00LXRgNC20LrQuGAsXHJcbiAgICBsb2dpblBsYWNlaG9sZGVyOiAn0JLRgdGC0LDQstGM0YLQtSDRgdCy0L7QuSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiycsXHJcbiAgICBwYXNzd29yZEVycm9yUGF0dGVybjogJ9Cd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMJyxcclxuICAgIHBhc3N3b3JkUGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDRgdCy0L7QuSDQv9Cw0YDQvtC70YwnLFxyXG4gICAgY3VzdG9tRmllbGRFcnJvclBhdHRlcm46ICfQndC10LLQtdGA0L3QvtC1INC30L3QsNGH0LXQvdC40LUuJyxcclxuICAgIGN1c3RvbUZpZWxkUGxhY2Vob2xkZXI6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXHJcbiAgICByZW1lbWJlclVzZXI6ICfQkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC5INCy0YXQvtC0JyxcclxuICAgIHJlbWVtYmVyVXNlckhpbnQ6ICfQktGLINC80L7QttC10YLQtSDQvtGC0LrQu9GO0YfQuNGC0Ywg0Y3RgtGDINC+0L/RhtC40Y4g0LIg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC4INGB0LjRgdGC0LXQvNGLJyxcclxuICAgIHN1Ym1pdExhYmVsOiAn0JLQvtC50YLQuCcsXHJcbiAgICBzdWJtaXR0ZWRMYWJlbDogJzPQsNCz0YDRg9C30LrQsC4uLicsXHJcbiAgICBmb3Jnb3RQYXNzd29yZDogJ9CX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/JyxcclxuICAgIGhpZ2hsaWdodEluZm86ICcnLFxyXG4gICAgcmVnaXN0ZXJVcmw6ICfQndC+0LLRi9C5INGA0LXQs9C40YHRgtGAJyxcclxuICAgIHRpdGxlUG9wb3ZlcjogJ9Ce0LkhJyxcclxuICAgIGZvcmdvdFlvdXJQYXNzd29yZDogJ9CX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/JyxcclxuICAgIGlmWW91VHJ5SGFyZGVyOiAn0JXRgdC70Lgg0LLRiyDQsdC10LfRg9GB0L/QtdGI0L3QviDQv9C+0L/Ri9GC0LDQtdGC0LXRgdGMINCy0L7QudGC0Lgg0LXRidC1ICcsXHJcbiAgICBhdHRlbXB0czogJ3swfSDRgNCw0Lco0LApICcsXHJcbiAgICB5b3VyVXNlcldpbGxCZUJsb2NrZWQ6ICfQktCw0Ygg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0YPQtNC10YIg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC9LCDQuCDQktGLINC+0YHRgtCw0L3QtdGC0LXRgdGMINC90LAgMjQg0YfQsNGB0LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LTQvtGB0YLRg9C/0LAgOignLFxyXG4gICAgY3JlYXRlQU5ld1Bhc3N3b3JkTm93OiAn0JvRg9GH0YjQtSDRgdC+0LfQtNCw0LnRgtC1INC90L7QstGL0Lkg0L/QsNGA0L7Qu9GMINGB0LXQudGH0LDRgSHCoNCS0Ysg0YHQvNC+0LbQtdGC0LUg0YHRgNCw0LfRgyDQstC+0LnRgtC4INCyINGB0LjRgdGC0LXQvNGDLicsXHJcbiAgICBpRm9yZ290TXlQYXNzd29yZDogJ9CvINC30LDQsdGL0Lsg0YHQstC+0Lkg0L/QsNGA0L7Qu9GMJyxcclxuICAgIHdlbGNvbWU6ICfQtNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMJyxcclxuICAgIHN1cHBvcnQ6ICfQn9C+0LTQtNC10YDQttC60LAnXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvUGFnZUxvZ2luTGl0ZXJhbEluID0ge1xyXG4gIGVuOiAnaW4nLFxyXG4gIGVzOiAnZW4nLFxyXG4gIHB0OiAnZW0nLFxyXG4gIHJ1OiAn0LInXHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tcGFnZS1sb2dpbmAgw6kgdXRpbGl6YWRvIGNvbW8gdGVtcGxhdGUgcGFyYSB0ZWxhIGRlIGxvZ2luLlxyXG4gKiBDb20gZWxlIMOpIHBvc3PDrXZlbCBkZWZpbmlybW9zIHZhbG9yZXMgcGFyYSB1c3XDoXJpbywgc2VuaGEgZSBkZWZpbmlyIGHDp8O1ZXMgcGFyYSByZWN1cGVyYcOnw6NvIGRlIHNlbmhhIGUgZ3JhdmHDp8OjbyBkZSBkYWRvcyBkbyB1c3XDoXJpby5cclxuICogVGFtYsOpbSDDqSBwb3Nzw612ZWwgaW5zZXJpciB1bWEgaW1hZ2VtIGVtIGNvbmp1bnRvIGNvbSB1bSB0ZXh0byBkZSBkZXN0YXF1ZS5cclxuICpcclxuICpcclxuICogQSBwcm9wcmllZGFkZSBgcC1hdXRoZW50aWNhdGlvbi11cmxgIGF1dG9tYXRpemEgYSByb3RpbmEgZG8gY29tcG9uZW50ZSBlIHNpbXBsaWZpY2EgbyBwcm9jZXNzbyBwYXJhIGF1dGVudGljYcOnw6NvIGRvIHVzdcOhcmlvLCBiYXN0YW5kb1xyXG4gKiBkZWZpbmlyIHVtYSB1cmwgcGFyYSByZXF1aXNpw6fDo28gZGEgYXV0ZW50aWNhw6fDo28uIEEgZmxleGliaWxpZGFkZSBlIHByYXRpY2lkYWRlIHBvZGVtIGNoZWdhciBhIHVtIG7DrXZlbCBlbSBxdWUgbyBkZXNlbnZvbHZpbWVudG9cclxuICogZGEgYXBsaWNhw6fDo28gbm8gKmNsaWVudCBzaWRlKiDDqSBkZXNwcm92aWRhIGRlIHF1YWxxdWVyIGPDs2RpZ28tZm9udGUgcmVsYWNpb25hZG8gw6Agcm90aW5hIGRlIGxvZ2luIGRlIHVzdcOhcmlvLlxyXG4gKiBTZXUgZGV0YWxoYW1lbnRvIHBhcmEgdXNvIHBvZGUgc2VyIHZpc3RvIGxvZ28gYWJhaXhvIGVtICpwcm9wcmllZGFkZXMqLlxyXG4gKiBDYXNvIGp1bGd1ZSBuZWNlc3PDoXJpbywgcG9kZS1zZSB0YW1iw6ltIGRlZmluaXIgbWFudWFsbWVudGUgYSByb3RpbmEgZG8gY29tcG9uZW50ZS5cclxuICpcclxuICpcclxuICogUGFyYSBxdWUgYXMgaW1hZ2VucyBzZWphbSBleGliaWRhcyBjb3JyZXRhbWVudGUsIMOpIG5lY2Vzc8OhcmlvIGluY2x1aXIgbyBjYW1pbmhvIGRlbGFzIGFvIHByb2pldG8uIFBhcmEgaXNzbywgZWRpdGVcclxuICogbyAqYXNzZXRzKiBubyBhcnF1aXZvICoqYW5ndWxhci5qc29uKiogZGEgYXBsaWNhw6fDo28gbmEgc2VndWludGUgb3JkZW06XHJcbiAqIGBgYFxyXG4gKiAgIFwiYXNzZXRzXCI6IFtcclxuICogICAgIFwic3JjL2Fzc2V0c1wiLFxyXG4gKiAgICAgXCJzcmMvZmF2aWNvbi5pY29cIixcclxuICogICAgIHtcclxuICogICAgICAgXCJnbG9iXCI6IFwiKipcXC8qXCIsXHJcbiAqICAgICAgIFwiaW5wdXRcIjogXCJub2RlX21vZHVsZXMvQHBvLXVpL3N0eWxlL2ltYWdlc1wiLFxyXG4gKiAgICAgICBcIm91dHB1dFwiOiBcImFzc2V0cy9pbWFnZXNcIlxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogYGBgXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvUGFnZUxvZ2luQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqXHJcbiAgICogTyBgcC1iYWNrZ3JvdW5kYCBwZXJtaXRlIGluc2VyaXIgdW1hIGltYWdlbSBkZSBkZXN0YXF1ZSBhbyBsYWRvIGRpcmVpdG8gZG8gZm9ybXVsw6FyaW8gZGUgbG9naW4sIGNhc28gYSBwcm9wcmllZGFkZVxyXG4gICAqIG7Do28gc2VqYSBwcmVlbmNoaWRhIG8gZm9ybXVsw6FyaW8gc2Vyw6EgY2VudHJhbGl6YWRvIG5vIGVzcGHDp28gZGlzcG9uw612ZWwuXHJcbiAgICpcclxuICAgKiBBIGZvbnRlIGRhIGltYWdlbSBwb2RlIHNlciBkZSB1bSBjYW1pbmhvIGxvY2FsIG91IHVtYSB1cmwgZGUgdW0gc2Vydmlkb3IgZXh0ZXJuby5cclxuICAgKlxyXG4gICAqIEFsw6ltIGRhIGltYWdlbSwgw6kgcG9zc8OtdmVsIGFkaWNpb25hciB1bSB0ZXh0byBpbmZvcm1hdGl2byBwb3IgY2ltYSBkYSBpbWFnZW0gZGEgaW1hZ2VtIGRlIGRlc3RhcXVlLCBwYXJhIGlzc28gaW5mb3JtZVxyXG4gICAqIHVtIHZhbG9yIHBhcmEgYSBsaXRlcmFsIGBoaWdobGlnaHRJbmZvYC5cclxuICAgKlxyXG4gICAqID4gVmVqYSBtYWlzIHNvYnJlIGFzIGxpdGVyYWlzIG5hIHByb3ByaWVkYWRlIGBwLWxpdGVyYWxzYC5cclxuICAgKlxyXG4gICAqIEV4ZW1wbG9zIGRlIHZhbG9yZXMgdsOhbGlkb3M6XHJcbiAgICogLSAqKmxvY2FsKio6IGAuL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5wbmdgXHJcbiAgICogLSAqKnVybCBleHRlcm5hKio6IGBodHRwczovL3BvLXVpLmlvL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5wbmdgXHJcbiAgICpcclxuICAgKiA+IEVzc2EgcHJvcHJpZWRhZGUgw6kgaWdub3JhZGEgcGFyYSBhcGxpY2HDp8O1ZXMgbW9iaWxlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1iYWNrZ3JvdW5kJykgYmFja2dyb3VuZD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENhbWluaG8gcGFyYSBhIGxvZ29tYXJjYSBsb2NhbGl6YWRhIG5hIHBhcnRlIHN1cGVyaW9yLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIHNlamEgaW5kZWZpbmlkYSBvIGVzcGHDp28gc2UgbWFudMOpbSBwcmVzZXJ2YWRvIHBvcsOpbSB2YXppby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9nbycpIGxvZ28/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFeHByZXNzw6NvIHJlZ3VsYXIgcGFyYSB2YWxpZGFyIG8gY2FtcG8gZGUgbG9naW4sIGNhc28gYSBleHByZXNzw6NvIG7Do28gc2VqYSBhdGVudGlkYSwgYSBsaXRlcmFsIGBsb2dpbkVycm9yUGF0dGVybmBcclxuICAgKiBzZXLDoSBleGliaWRhLlxyXG4gICAqXHJcbiAgICogRXhlbXBsb3MgZGUgdmFsb3JlcyB2w6FsaWRvczpcclxuICAgKiAtIGVtYWlsOiBgW2V4cHJlc3Nhby1yZWd1bGFyLWVtYWlsXWBcclxuICAgKiAtIGNwZjogYFtleHByZXNzYW8tcmVndWxhci1jcGZdYFxyXG4gICAqXHJcbiAgICogPiBWZWphIGEgcHJvcHJpZWRhZGUgYHAtbGl0ZXJhbHNgIHBhcmEgY3VzdG9taXphciBhIGxpdGVyYWwgYGxvZ2luRXJyb3JQYXR0ZXJuYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9naW4tcGF0dGVybicpIGxvZ2luUGF0dGVybj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV4cHJlc3PDo28gcmVndWxhciBwYXJhIHZhbGlkYXIgbyBjYW1wbyBkZSBwYXNzd29yZCwgY2FzbyBhIGV4cHJlc3PDo28gbsOjbyBzZWphIGF0ZW50aWRhLCBhIGxpdGVyYWwgYHBhc3N3b3JkRXJyb3JQYXR0ZXJuYFxyXG4gICAqIHNlcsOhIGV4aWJpZGEuXHJcbiAgICpcclxuICAgKiBFeGVtcGxvcyBkZSB2YWxvcmVzIHbDoWxpZG9zOlxyXG4gICAqIC0gQXBlbmFzIG7Dum1lcm9zOiBgXFxkP2BcclxuICAgKiAtIExldHJhcyBtw61udXNjdWxhczogYFxcej9gXHJcbiAgICpcclxuICAgKiA+IFZlamEgYSBwcm9wcmllZGFkZSBgcC1saXRlcmFsc2AgcGFyYSBjdXN0b21pemFyIGEgbGl0ZXJhbCBgcGFzc3dvcmRFcnJvclBhdHRlcm5gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wYXNzd29yZC1wYXR0ZXJuJykgcGFzc3dvcmRQYXR0ZXJuPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQ2FtaW5obyBwYXJhIGEgbG9nb21hcmNhIGxvY2FsaXphZGEgbm8gcm9kYXDDqS5cclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2Vjb25kYXJ5LWxvZ28nKSBzZWNvbmRhcnlMb2dvPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBxdWFuZG8gbyB1c3XDoXJpbyBhbHRlcmFyIG8gaW5wdXQgZG8gY2FtcG8gbG9naW4uXHJcbiAgICpcclxuICAgKiBFc3NlIGV2ZW50byByZWNlYmVyw6EgY29tbyBwYXLDom1ldHJvIHVtYSB2YXJpw6F2ZWwgZG8gdGlwbyBgc3RyaW5nYCBjb20gbyB0ZXh0byBpbmZvcm1hZG8gbm8gY2FtcG8uXHJcbiAgICpcclxuICAgKiA+IEVzdGEgcHJvcHJpZWRhZGUgc2Vyw6EgaWdub3JhZGEgc2UgZm9yIGRlZmluaWRvIHZhbG9yIHBhcmEgYSBwcm9wcmllZGFkZSBgcC1hdXRoZW50aWNhdGlvbi11cmxgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtbG9naW4tY2hhbmdlJykgbG9naW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gYW8gc3VibWV0ZXIgbyBmb3JtdWzDoXJpbyBkZSBsb2dpbiAoYXBlcnRhbmRvIGBFbnRlcmAgZGVudHJvIGRvcyBjYW1wb3Mgb3UgcHJlc3Npb25hbmRvIG8gYm90w6NvIGRlIGNvbmZpcm1hw6fDo28pLlxyXG4gICAqXHJcbiAgICogRXNzZSBldmVudG8gcmVjZWJlcsOhIGNvbW8gcGFyw6JtZXRybyB1bSBvYmpldG8gZG8gdGlwbyBgUG9QYWdlTG9naW5gIGNvbSBvcyBkYWRvcyBpbmZvcm1hZG9zIG5vIGZvcm11bMOhcmlvLlxyXG4gICAqXHJcbiAgICogPiBFc3RhIHByb3ByaWVkYWRlIHNlcsOhIGlnbm9yYWRhIHNlIGZvciBkZWZpbmlkbyB2YWxvciBwYXJhIGEgcHJvcHJpZWRhZGUgYHAtdXJsLXJlY292ZXJ5YC5cclxuICAgKlxyXG4gICAqID4gUGFyYSBtYWlzIGRldGFsaGVzIGNvbnN1bHRlIGEgZG9jdW1lbnRhw6fDo28gc29icmUgYSBpbnRlcmZhY2UgYFBvUGFnZUxvZ2luYCBtYWlzIGFiYWl4by5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWxvZ2luLXN1Ym1pdCcpIGxvZ2luU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxQb1BhZ2VMb2dpbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gcXVhbmRvIG8gdXN1w6FyaW8gYWx0ZXJhciBvIGlucHV0IGRvIGNhbXBvIHBhc3N3b3JkLlxyXG4gICAqXHJcbiAgICogRXNzZSBldmVudG8gcmVjZWJlcsOhIGNvbW8gcGFyw6JtZXRybyB1bWEgdmFyacOhdmVsIGRvIHRpcG8gYHN0cmluZ2AgY29tIG8gdGV4dG8gaW5mb3JtYWRvIG5vIGNhbXBvLlxyXG4gICAqXHJcbiAgICogPiBFc3RhIHByb3ByaWVkYWRlIHNlcsOhIGlnbm9yYWRhIHNlIGZvciBkZWZpbmlkbyB2YWxvciBwYXJhIGEgcHJvcHJpZWRhZGUgYHAtYXV0aGVudGljYXRpb24tdXJsYC5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXBhc3N3b3JkLWNoYW5nZScpIHBhc3N3b3JkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBxdWFuZG8gbyB1c3XDoXJpbyBhbHRlcmFyIG8gaWRpb21hIGRhIHDDoWdpbmEuXHJcbiAgICpcclxuICAgKiBFc3NlIGV2ZW50byByZWNlYmVyw6EgY29tbyBwYXLDom1ldHJvIHVtIG9iamV0byBkbyB0aXBvIGBQb0xhbmd1YWdlYCBjb20gYSBsaW5ndWFnZW0gc2VsZWNpb25hZGEuXHJcbiAgICpcclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWxhbmd1YWdlLWNoYW5nZScpIGxhbmd1YWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8UG9MYW5ndWFnZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvTGFuZ3VhZ2U+KCk7XHJcblxyXG4gIGFsbExvZ2luRXJyb3JzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgYWxsUGFzc3dvcmRFcnJvcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBjdXN0b21GaWVsZE9iamVjdDogUG9QYWdlTG9naW5DdXN0b21GaWVsZDtcclxuICBjdXN0b21GaWVsZFR5cGU6IHN0cmluZztcclxuICBsb2dpblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcmVtZW1iZXJVc2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRMYW5ndWFnZTogc3RyaW5nO1xyXG4gIHNob3dFeGNlZWRlZEF0dGVtcHRzV2FybmluZyA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblR5cGU6IFBvUGFnZUxvZ2luQXV0aGVudGljYXRpb25UeXBlID0gUG9QYWdlTG9naW5BdXRoZW50aWNhdGlvblR5cGUuQmFzaWM7XHJcbiAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25Vcmw6IHN0cmluZztcclxuICBwcml2YXRlIF9ibG9ja2VkVXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfY29udGFjdEVtYWlsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfY3VzdG9tRmllbGQ6IHN0cmluZyB8IFBvUGFnZUxvZ2luQ3VzdG9tRmllbGQ7XHJcbiAgcHJpdmF0ZSBfZW52aXJvbm1lbnQ/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZXhjZWVkZWRBdHRlbXB0c1dhcm5pbmc/OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGlkZVJlbWVtYmVyVXNlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb1BhZ2VMb2dpbkxpdGVyYWxzO1xyXG4gIHByaXZhdGUgX2xvYWRpbmc/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfbG9naW46IHN0cmluZztcclxuICBwcml2YXRlIF9sb2dpbkVycm9yczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIHByaXZhdGUgX3Bhc3N3b3JkRXJyb3JzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgcHJpdmF0ZSBfcHJvZHVjdE5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9yZWNvdmVyeTogc3RyaW5nIHwgUG9QYWdlTG9naW5SZWNvdmVyeSB8IEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgX3JlZ2lzdGVyVXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc3VwcG9ydDogc3RyaW5nIHwgRnVuY3Rpb247XHJcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzTGlzdDogQXJyYXk8UG9MYW5ndWFnZT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBbyBpbmZvcm1hciB1bSB2YWxvciBkbyB0aXBvIGBzdHJpbmdgLCBvIG1lc21vIHNlcsOhIGFwbGljYWRvIGNvbW8gYSBjaGF2ZSBkbyBjYW1wbyBjdXN0b21pemFkbyBlIHV0aWxpemFyw6FcclxuICAgKiBvcyB2YWxvcmVzIHBhZHLDtWVzIGNvbnRpZG9zIG5hIHByb3ByaWVkYWRlIGBsaXRlcmFsc2AgY29tbyBgY3VzdG9tRmllbGRFcnJvclBhdHRlcm5gIGUgYGN1c3RvbUZpZWxkUGxhY2Vob2xkZXJgLlxyXG4gICAqXHJcbiAgICogRXhpc3RlIGEgcG9zc2liaWxpZGFkZSBkZSBpbmZvcm1hciB1bSBvYmpldG8gcXVlIHNlZ3VlIGEgZGVmaW5pw6fDo28gZGEgaW50ZXJmYWNlIGBQb1BhZ2VMb2dpbkN1c3RvbUZpZWxkYCwgb25kZVxyXG4gICAqIGF0cmF2w6lzIGRvcyBwYXLDom1ldHJvcyBlbnZpYWRvcyBwb2RlIGdlcmFyIHVtIGBwby1pbnB1dGAsIGBwby1jb21ib2AgZXNwZWNpZmljYW1lbnRlIHBhcmEgc2VydmnDp29zXHJcbiAgICogb3UgYHBvLXNlbGVjdGAgcGFyYSB2YWxvcmVzIGZpeG9zLlxyXG4gICAqXHJcbiAgICogQWJhaXhvIHNlZ3VlbSBvcyBleGVtcGxvcyBkZSBjYWRhIHRpcG8gZGUgY2FtcG8uXHJcbiAgICpcclxuICAgKiBgcG8taW5wdXRgOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICoge1xyXG4gICAqICAgcHJvcGVydHk6ICdkb21haW4nLFxyXG4gICAqICAgdmFsdWU6ICdqdjAxJyxcclxuICAgKiAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBkb21haW4nLFxyXG4gICAqICAgcGF0dGVybjogJ1thLXpdJyxcclxuICAgKiAgIGVycm9yUGF0dGVybjogJ0ludmFsaWQgdmFsdWUnXHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogYHBvLWNvbWJvYDpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIHtcclxuICAgKiAgIHByb3BlcnR5OiAnZG9tYWluJyxcclxuICAgKiAgIHZhbHVlOiAnanYwMScsXHJcbiAgICogICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZG9tYWluJyxcclxuICAgKiAgIHVybDogJ2h0dHBzOi8vcG8tdWkuaW8vc2FtcGxlL2FwaS9jb21ib09wdGlvbi9kb21haW5zJyxcclxuICAgKiAgIGZpZWxkVmFsdWU6ICduaWNrbmFtZSdcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBgcG8tc2VsZWN0YDpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIHtcclxuICAgKiAgIHByb3BlcnR5OiAnZG9tYWluJyxcclxuICAgKiAgIHZhbHVlOiAnanYwMScsXHJcbiAgICogICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZG9tYWluJyxcclxuICAgKiAgIG9wdGlvbnM6IFt7bGFiZWw6ICdEb21haW4gMScsIHZhbHVlOiAnMSd9LCB7bGFiZWw6ICdEb21haW4gMicsIHZhbHVlOiAnMid9XVxyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIENhc28gbyBjdXN0b21GaWVsZCBwb3NzdWEgb3B0aW9ucywgdXJsIGUgZmllbGRWYWx1ZSBwcmVlbmNoaWRvcywgc2Vyw6EgcHJpb3JpemFkbyBvIHBvLXNlbGVjdFxyXG4gICAqIHV0aWxpemFuZG8gbyBvcHRpb25zLlxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWN1c3RvbS1maWVsZCcpIHNldCBjdXN0b21GaWVsZCh2YWx1ZTogc3RyaW5nIHwgUG9QYWdlTG9naW5DdXN0b21GaWVsZCkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGlmIChpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZFR5cGUgPSAnaW5wdXQnO1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUZpZWxkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE9iamVjdCA9IHRoaXMuZ2V0RGVmYXVsdEN1c3RvbUZpZWxkT2JqZWN0KHZhbHVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc1R5cGVvZih2YWx1ZSwgJ29iamVjdCcpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZVsncHJvcGVydHknXSkge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUZpZWxkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE9iamVjdCA9IDxQb1BhZ2VMb2dpbkN1c3RvbUZpZWxkPnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY3VzdG9tRmllbGRPYmplY3Qub3B0aW9ucyAmJiAhdGhpcy5jdXN0b21GaWVsZE9iamVjdC51cmwpIHtcclxuICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRUeXBlID0gJ2lucHV0JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdXN0b21GaWVsZFR5cGUgPSB0aGlzLmN1c3RvbUZpZWxkT2JqZWN0Lm9wdGlvbnMgPyAnc2VsZWN0JyA6ICdjb21ibyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXN0b21GaWVsZCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY3VzdG9tRmllbGRPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VzdG9tRmllbGQoKTogc3RyaW5nIHwgUG9QYWdlTG9naW5DdXN0b21GaWVsZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRmllbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUGVyc29uYWxpemEgbyBlLW1haWwgcXVlIMOpIGV4aWJpZG8gbmEgbWVuc2FnZW0gZGUgZGljYSBkZSBsb2dpbiBwYWRyw6NvIHBhcmEgY29udGF0byBkZSBzdXBvcnRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1jb250YWN0LWVtYWlsJykgc2V0IGNvbnRhY3RFbWFpbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb250YWN0RW1haWwgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNvbnRhY3RFbWFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWN0RW1haWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVGV4dG8gY3VzdG9taXphZG8gcXVlIGZpY2EgZW50cmUgYSBsb2dvIGUgYSBtZW5zYWdlbSBkZSBib2FzLXZpbmRhcy5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtcHJvZHVjdC1uYW1lJykgc2V0IHByb2R1Y3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Byb2R1Y3ROYW1lID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBwcm9kdWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9kdWN0TmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogQWRpY2lvbmEgdW1hIGB0YWdgIGFiYWl4byBkbyB0w610dWxvIHF1ZSBlc3BlY2lmaWNhIG8gYW1iaWVudGUgcXVlIG8gdXN1w6FyaW8gZXN0w6EgZmF6ZW5kbyBvIGxvZ2luLlxyXG4gICAqXHJcbiAgICogPiBFc3NhIHByb3ByaWVkYWRlIGxpbWl0YSBvIHRleHRvIGVtIDQwIGNhcmFjdGVyZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWVudmlyb25tZW50Jykgc2V0IGVudmlyb25tZW50KGVudmlyb25tZW50OiBzdHJpbmcpIHtcclxuICAgIGlmIChlbnZpcm9ubWVudCAmJiBlbnZpcm9ubWVudC5sZW5ndGggPiBwb1BhZ2VMb2dpbkNvbnRlbnRNYXhMZW5ndGgpIHtcclxuICAgICAgdGhpcy5fZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudC5zdWJzdHJpbmcoMCwgcG9QYWdlTG9naW5Db250ZW50TWF4TGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBlbnZpcm9ubWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRXhpYmUgdW0gYXZpc28gZGUgYmxvcXVlaW8gZGUgYWNvcmRvIGNvbSBhIHF1YW50aWRhZGUgcmVzdGFudGUgZGUgdGVudGF0aXZhcy5cclxuICAgKiBPIGF2aXNvIHNlcsOhIGV4aWJpZG8gc29tZW50ZSBzZSBhIHF1YW50aWRhZGUgZm9yIG1haW9yIHF1ZSB6ZXJvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIHRlbmhhIGFsZ3VtIHZhbG9yIGF0cmlidcOtZG8gcGFyYSBvIGF0cmlidXRvIGBwLWF1dGhlbnRpY2F0aW9uLXVybGAgZSBvIHJldG9ybm8gZGEgcmVxdWlzacOnw6NvIGVzdGl2ZXIgYXRyaWJ1aW5kbyB2YWxvclxyXG4gICAqIHBhcmEgbyBgcC1leGNlZWRlZC1hdHRlbXB0cy13YXJuaW5nYCwgbyB2YWxvciBjb25zaWRlcmFkbyBzZXLDoSBvIGRvIHJldG9ybm8gZGEgcmVxdWlzacOnw6NvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWV4Y2VlZGVkLWF0dGVtcHRzLXdhcm5pbmcnKSBzZXQgZXhjZWVkZWRBdHRlbXB0c1dhcm5pbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZXhjZWVkZWRBdHRlbXB0c1dhcm5pbmcgPSBjb252ZXJ0VG9JbnQodmFsdWUpO1xyXG4gICAgdGhpcy5zaG93RXhjZWVkZWRBdHRlbXB0c1dhcm5pbmcgPSB0aGlzLmV4Y2VlZGVkQXR0ZW1wdHNXYXJuaW5nID4gMDtcclxuICB9XHJcblxyXG4gIGdldCBleGNlZWRlZEF0dGVtcHRzV2FybmluZygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4Y2VlZGVkQXR0ZW1wdHNXYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEVzY29uZGUgYSBmdW7Dp8OjbyBcIkxlbWJyYXIgdXN1w6FyaW9cIiBkbyBmb3JtdWzDoXJpbyBkZSBsb2dpbi5cclxuICAgKlxyXG4gICAqIFF1YW5kbyBlc3NhIHByb3ByaWVkYWRlIMOpIHNldGFkYSBjb20gYHRydWVgIGEgcHJvcHJpZWRhZGUgYHJlbWVtYmVyVXNlcmAgZW52aWFkYSBubyBldmVudG8gYHAtbG9naW4tc3VibWl0YCBzZXLDoSBzZW1wcmVcclxuICAgKiBgZmFsc2VgLlxyXG4gICAqXHJcbiAgICogPiBWZWphIGEgcHJvcHJpZWRhZGUgYHAtbGl0ZXJhbHNgIHBhcmEgY3VzdG9taXphciBhIGxpdGVyYWwgYHJlbWVtYmVyVXNlcmAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtcmVtZW1iZXItdXNlcicpIHNldCBoaWRlUmVtZW1iZXJVc2VyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlUmVtZW1iZXJVc2VyID0gPGFueT52YWx1ZSA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2hpZGVSZW1lbWJlclVzZXIpIHtcclxuICAgICAgdGhpcy5yZW1lbWJlclVzZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IGhpZGVSZW1lbWJlclVzZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZVJlbWVtYmVyVXNlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gY29tIGFzIGxpdGVyYWlzIHVzYWRhcyBubyBgcG8tcGFnZS1sb2dpbmAuXHJcbiAgICpcclxuICAgKiBFeGlzdGVtIGR1YXMgbWFuZWlyYXMgZGUgY3VzdG9taXphciBvIGNvbXBvbmVudGUsIHBhc3NhbmRvIHVtIG9iamV0byBjb20gdG9kYXMgYXMgbGl0ZXJhaXMgZGlzcG9uw612ZWlzOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb1BhZ2VMb2dpbkxpdGVyYWxzID0ge1xyXG4gICAqICAgIGF0dGVtcHRzOiAnezB9IHZleihlcykgJyxcclxuICAgKiAgICBjcmVhdGVBTmV3UGFzc3dvcmROb3c6ICdNZWxob3IgY3JpYXIgdW1hIHNlbmhhIG5vdmEgYWdvcmEhIFZvY8OqIHZhaSBwb2RlciBlbnRyYXIgbm8gc2lzdGVtYSBsb2dvIGVtIHNlZ3VpZGEuJyxcclxuICAgKiAgICBmb3Jnb3RQYXNzd29yZDogJ0VzcXVlY2V1IHN1YSBzZW5oYT8nLFxyXG4gICAqICAgIGZvcmdvdFlvdXJQYXNzd29yZDogJ0VzcXVlY2V1IHN1YSBzZW5oYT8nLFxyXG4gICAqICAgIGhpZ2hsaWdodEluZm86ICcnLFxyXG4gICAqICAgIGlGb3Jnb3RNeVBhc3N3b3JkOiAnRXNxdWVjaSBtaW5oYSBzZW5oYScsXHJcbiAgICogICAgaWZZb3VUcnlIYXJkZXI6ICdTZSB0ZW50YXIgbWFpcyAnLFxyXG4gICAqICAgIHdlbGNvbWU6ICdCb2FzLXZpbmRhcycsXHJcbiAgICogICAgbG9naW5FcnJvclBhdHRlcm46ICdMb2dpbiBvYnJpZ2F0w7NyaW8nLFxyXG4gICAqICAgIGxvZ2luSGludDogJ0Nhc28gbsOjbyBwb3NzdWEgdXN1w6FyaW8gZW50cmUgZW0gY29udGF0byBjb20gbyBzdXBvcnRlJyxcclxuICAgKiAgICBsb2dpbkxhYmVsOiAnSW5zaXJhIHNldSB1c3XDoXJpbycsXHJcbiAgICogICAgbG9naW5QbGFjZWhvbGRlcjogJ0luc2lyYSBzZXUgdXN1w6FyaW8gZGUgYWNlc3NvJyxcclxuICAgKiAgICBwYXNzd29yZEVycm9yUGF0dGVybjogJ1NlbmhhIG9icmlnYXTDs3JpYScsXHJcbiAgICogICAgcGFzc3dvcmRMYWJlbDogJ0luc2lyYSBzdWEgc2VuaGEnLFxyXG4gICAqICAgIHBhc3N3b3JkUGxhY2Vob2xkZXI6ICdJbnNpcmEgc3VhIHNlbmhhIGRlIGFjZXNzbycsXHJcbiAgICogICAgY3VzdG9tRmllbGRFcnJvclBhdHRlcm46ICdDYW1wbyBjdXN0b21pemFkbyBpbnbDoWxpZG8nLFxyXG4gICAqICAgIGN1c3RvbUZpZWxkUGxhY2Vob2xkZXI6ICdQb3IgZmF2b3IgaW5zaXJhIHVtIHZhbG9yJyxcclxuICAgKiAgICByZWdpc3RlclVybDogJ05vdm8gcmVnaXN0cm8nLFxyXG4gICAqICAgIHJlbWVtYmVyVXNlcjogJ0xlbWJyYXIgdXN1w6FyaW8nLFxyXG4gICAqICAgIHJlbWVtYmVyVXNlckhpbnQ6ICdFc3RhIG9ww6fDo28gcG9kZSBzZXIgZGVzYWJpbGl0YWRhIG5hcyBjb25maWd1cmHDp8O1ZXMgZG8gc2lzdGVtYScsXHJcbiAgICogICAgc3VibWl0TGFiZWw6ICdBY2Vzc2FyIHNpc3RlbWEnLFxyXG4gICAqICAgIHN1Ym1pdHRlZExhYmVsOiAnQ2FycmVnYW5kby4uLicsXHJcbiAgICogICAgdGl0bGVQb3BvdmVyOiAnT3BhIScsXHJcbiAgICogICAgeW91clVzZXJXaWxsQmVCbG9ja2VkOiAnc2VtIHN1Y2Vzc28gc2V1IHVzdcOhcmlvIHNlcsOhIGJsb3F1ZWFkbyBlIHZvY8OqIGZpY2EgMjQgaG9yYXMgc2VtIHBvZGVyIGFjZXNzYXIgOignXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBPdSBwYXNzYW5kbyBhcGVuYXMgYXMgbGl0ZXJhaXMgcXVlIGRlc2VqYSBjdXN0b21pemFyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb1BhZ2VMb2dpbkxpdGVyYWxzID0ge1xyXG4gICAqICAgIGxvZ2luUGxhY2Vob2xkZXI6ICdJbnNpcmEgc2V1IHVzdcOhcmlvIGRlIGFjZXNzbycsXHJcbiAgICogICAgcGFzc3dvcmRQbGFjZWhvbGRlcjogJ0luc2lyYSBzdWEgc2VuaGEgZGUgYWNlc3NvJyxcclxuICAgKiAgICBzdWJtaXRMYWJlbDogJ0FjZXNzYXIgc2lzdGVtYSdcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEUgcGFyYSBjYXJyZWdhciBhcyBsaXRlcmFpcyBjdXN0b21pemFkYXMsIGJhc3RhIGFwZW5hcyBwYXNzYXIgbyBvYmpldG8gcGFyYSBvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tcGFnZS1sb2dpblxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLXBhZ2UtbG9naW4+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAgPiBPIG9iamV0byBwYWRyw6NvIGRlIGxpdGVyYWlzIHNlcsOhIHRyYWR1emlkbyBkZSBhY29yZG8gY29tIG8gaWRpb21hIGRvIGJyb3dzZXIgKHB0LCBlbiwgZXMpLlxyXG4gICAqICA+IMOJIHRhbWLDqW0gcG9zc8OtdmVsIGFsdGVybmFyIG8gb2JqZXRvIHBhZHLDo28gZGUgbGl0ZXJhaXMgYXRyYXbDqXMgZG8gc2VsZXRvciBkZSBpZGlvbWFzIGxvY2FsaXphZG8gbmEgcGFydGUgaW5mZXJpb3IgZG8gdGVtcGxhdGUsXHJcbiAgICogbmVzc2UgY2FzbywgaMOhIHRhbWLDqW0gYSBvcMOnw6NvIGRvIGlkaW9tYSBydXNzby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBzZXQgbGl0ZXJhbHModmFsdWU6IFBvUGFnZUxvZ2luTGl0ZXJhbHMpIHtcclxuICAgIHRoaXMuX2xpdGVyYWxzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbGl0ZXJhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGl0ZXJhbHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSGFiaWxpdGEgdW0gZXN0YWRvIGRlIGNhcnJlZ2FtZW50byBhbyBib3TDo28gZGUgKmxvZ2luKi5cclxuICAgKlxyXG4gICAqID4gw4kgbmVjZXNzw6FyaW8gYXRyaWJ1aXIgYHRydWVgIMOgIGVzdGEgcHJvcHJpZWRhZGUgbmEgZnVuw6fDo28gZGVmaW5pZGEgZW0gYHAtbG9naW4tc3VibWl0YC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9hZGluZycpIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFZhbG9yIGRvIG1vZGVsbyBkbyBjYW1wbyBkZSBsb2dpbi5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9naW4nKSBzZXQgbG9naW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbG9naW4gPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25VcmwpIHtcclxuICAgICAgdGhpcy5sb2dpbkNoYW5nZS5lbWl0KHRoaXMuX2xvZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsb2dpbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvZ2luO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEF0cmlidXRvIHF1ZSByZWNlYmUgdW1hIGxpc3RhIGRlIGVycm9zIGUgZXhpYmUgYWJhaXhvIGRvIGNhbXBvIGRlIGxvZ2luLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sb2dpbi1lcnJvcnMnKSBzZXQgbG9naW5FcnJvcnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX2xvZ2luRXJyb3JzID0gdmFsdWUgfHwgW107XHJcbiAgICB0aGlzLnNldExvZ2luRXJyb3JzKHRoaXMuX2xvZ2luRXJyb3JzKTtcclxuICB9XHJcbiAgZ2V0IGxvZ2luRXJyb3JzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvZ2luRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEF0cmlidXRvIHF1ZSByZWNlYmUgdW1hIGxpc3RhIGRlIGVycm9zIGUgZXhpYmUgYWJhaXhvIGRvIGNhbXBvIGRlIHBhc3N3b3JkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1wYXNzd29yZC1lcnJvcnMnKSBzZXQgcGFzc3dvcmRFcnJvcnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX3Bhc3N3b3JkRXJyb3JzID0gdmFsdWUgfHwgW107XHJcbiAgICB0aGlzLnNldFBhc3N3b3JkRXJyb3JzKHRoaXMuX3Bhc3N3b3JkRXJyb3JzKTtcclxuICB9XHJcbiAgZ2V0IHBhc3N3b3JkRXJyb3JzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV4aWJlIHVtIGxpbmsgYWJhaXhvIGRvIGZvcm11bMOhcmlvIGRlIGxvZ2luIHBhcmEgcXVlIG9zIHVzdcOhcmlvcyBkYSBhcGxpY2HDp8OjbyBmYcOnYW0gYSByZWN1cGVyYcOnw6NvIGRvcyBkYWRvcyBkZSBhdXRlbnRpY2HDp8Ojby5cclxuICAgKlxyXG4gICAqIEEgcHJvcHJpZWRhZGUgYWNlaXRhIG9zIHNlZ3VpbnRlcyB0aXBvczpcclxuICAgKlxyXG4gICAqIC0gKipTdHJpbmcqKjogaW5mb3JtZSB1bWEgdXJsIGV4dGVybmEgb3UgdW1hIHJvdGEgdsOhbGlkYTtcclxuICAgKiAtICoqRnVuY3Rpb24qKjogcG9kZS1zZSBjdXN0b21pemFyIGEgYcOnw6NvLiBQYXJhIGVzdGEgcG9zc2lsaWRhZGUgYmFzdGEgYXRyaWJ1aXI6XHJcbiAgICogYGBgXHJcbiAgICogPHBvLXBhZ2UtbG9naW4+XHJcbiAgICogICBbcmVjb3ZlcnldPVwidGhpcy5teVJlY292ZXJ5LmJpbmQodGhpcylcIj5cclxuICAgKiA8L3BvLXBhZ2UtbG9naW4+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAtICoqUG9QYWdlTG9naW5SZWNvdmVyeSoqOiBjcmlhLXNlIHbDrW5jdWxvIGF1dG9tw6F0aWNvIGNvbSBvIHRlbXBsYXRlICoqcG8tbW9kYWwtcGFzc3dvcmQtcmVjb3ZlcnkqKi5cclxuICAgKiAgIE8gb2JqZXRvIGRldmUgY29udGVyIGEgKip1cmwqKiBwYXJhIHJlcXVpc2nDp8OjbyBkb3MgcmVjdXJzb3MgZSBwb2RlLXNlIGRlZmluaXIgbyAqKnRpcG8qKiBkZSBtb2RhbCBwYXJhIHJlY3VwZXJhw6fDo28gZGUgc2VuaGEsXHJcbiAgICogICAqKmVtYWlsKiogcGFyYSBjb250YXRvIGUgKiptw6FzY2FyYSoqIGRvIGNhbXBvIGRlIHRlbGVmb25lLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZWNvdmVyeScpIHNldCByZWNvdmVyeSh2YWx1ZTogc3RyaW5nIHwgRnVuY3Rpb24gfCBQb1BhZ2VMb2dpblJlY292ZXJ5KSB7XHJcbiAgICB0aGlzLl9yZWNvdmVyeSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlY292ZXJ5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlY292ZXJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENhc28gYSBhcGxpY2HDp8OjbyB0ZW5oYSB1bSBsaW5rIHBhcmEgbm92b3MgY2FkYXN0cm9zLCBpbmZvcm1lIHVtYSB1cmwgZXh0ZXJuYSBvdSB1bWEgcm90YSB2w6FsaWRhLCBkZXNzYVxyXG4gICAqIGZvcm1hIHNlcsOhIGV4aWJpZG8gdW0gbGluayBhYmFpeG8gZG8gZm9ybXVsw6FyaW8gZGUgbG9naW4gcGFyYSBvcyB1c3XDoXJpb3MgZGEgYXBsaWNhw6fDo28uXHJcbiAgICpcclxuICAgKiBFeGVtcGxvcyBkZSB2YWxvcmVzIHbDoWxpZG9zOlxyXG4gICAqIC0gKipsb2NhbCoqOiBgL2hvbWVgXHJcbiAgICogLSAqKnVybCBleHRlcm5hKio6IGBodHRwczovL3BvLXVpLmlvYFxyXG4gICAqXHJcbiAgICogPiBWZWphIGEgcHJvcHJpZWRhZGUgYHAtbGl0ZXJhbHNgIHBhcmEgY3VzdG9taXphciBhIGxpdGVyYWwgYHJlZ2lzdGVyVXJsYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtcmVnaXN0ZXItdXJsJykgc2V0IHJlZ2lzdGVyVXJsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JlZ2lzdGVyVXJsID0gaXNUeXBlb2YodmFsdWUsICdzdHJpbmcnKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZ2lzdGVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJVcmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXRyaWJ1dG8gcXVlIHJlY2ViZSBvIHRpcG8gZGUgZXNxdWVtYSBkYSBhdXRlbnRpY2HDp8Ojbywgc2VuZG8gc3Vwb3J0YWRvcyBhcGVuYXMgb3MgdmFsb3JlcyBgQmFzaWNgIGUgYEJlYXJlcmAuXHJcbiAgICpcclxuICAgKiA+IENhc28gbyB0aXBvIGRlZmluaWRvIHNlamEgYEJhc2ljYCwgbyBjb21wb25lbnRlIGZhcsOhIHVtYSByZXF1aXNpw6fDo28gYFBPU1RgIGNvbnRlbmRvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaGVhZGVycyB7XHJcbiAgICogIEF1dGhvcml6YXRpb246IEJhc2ljIGJhc2U2NChsb2dpbjpwYXNzd29yZClcclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBib2R5IHtcclxuICAgKiAgcmVtZW1iZXJVc2VyOiByZW1lbWJlclVzZXJcclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IENhc28gbyB0aXBvIGRlZmluaWRvIHNlamEgYEJlYXJlcmAsIG8gY29tcG9uZW50ZSBmYXLDoSB1bWEgcmVxdWlzacOnw6NvIGBQT1NUYCBjb250ZW5kbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGJvZHkge1xyXG4gICAqICBsb2dpbjogbG9naW4sXHJcbiAgICogIHBhc3N3b3JkOiBiYXNlNjQocGFzc3dvcmQpLFxyXG4gICAqICByZW1lbWJlclVzZXI6IHJlbWVtYmVyVXNlclxyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBQb1BhZ2VMb2dpbkF1dGhlbnRpY2F0aW9uVHlwZS5CYXNpY2BcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0aGVudGljYXRpb24tdHlwZScpIHNldCBhdXRoZW50aWNhdGlvblR5cGUodmFsdWU6IFBvUGFnZUxvZ2luQXV0aGVudGljYXRpb25UeXBlKSB7XHJcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblR5cGUgPSAoPGFueT5PYmplY3QpLnZhbHVlcyhQb1BhZ2VMb2dpbkF1dGhlbnRpY2F0aW9uVHlwZSkuaW5jbHVkZXModmFsdWUpXHJcbiAgICAgID8gdmFsdWVcclxuICAgICAgOiBQb1BhZ2VMb2dpbkF1dGhlbnRpY2F0aW9uVHlwZS5CYXNpYztcclxuICB9XHJcblxyXG4gIGdldCBhdXRoZW50aWNhdGlvblR5cGUoKTogUG9QYWdlTG9naW5BdXRoZW50aWNhdGlvblR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0aW9uVHlwZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFbmRwb2ludCB1c2FkbyBwZWxvIHRlbXBsYXRlIHBhcmEgcmVxdWlzacOnw6NvIGRvIHJlY3Vyc28uIFF1YW5kbyBwcmVlbmNoaWRvLCBvIG3DqXRvZG8gYHAtbG9naW4tc3VibWl0YCBzZXLDoSBpZ25vcmFkbyBlIG9cclxuICAgKiBjb21wb25lbnRlIGFkcXVpcmlyw6EgYXV0b21hdGl6YcOnw6NvIHBhcmEgbyBwcm9jZXNzbyBkZSBhdXRlbnRpY2HDp8Ojby5cclxuICAgKlxyXG4gICAqICMjIyBQcm9jZXNzb3NcclxuICAgKiBBbyBkaWdpdGFyIHVtIHZhbG9yIHbDoWxpZG8gbm8gY2FtcG8gZGUgbG9naW4vcGFzc3dvcmQgZSBwcmVzc2lvbmFyICoqRW50ZXIqKiwgbyBjb21wb25lbnRlIGZhcsOhIHVtYSByZXF1aXNpw6fDo28gYFBPU1RgXHJcbiAgICogbmEgdXJsIGVzcGVjaWZpY2FkYSBuZXN0YSBwcm9wcmllZGFkZSBwYXNzYW5kbyBvIG9iamV0byBjb250ZW5kbyBvIHZhbG9yIGRlZmluaWRvIHBlbG8gdXN1w6FyaW86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBoZWFkZXJzIHtcclxuICAgKiAgQXV0aG9yaXphdGlvbjogQmFzaWMgYmFzZTY0KGxvZ2luOnBhc3N3b3JkKVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIGJvZHkge1xyXG4gICAqICByZW1lbWJlclVzZXI6IHJlbWVtYmVyVXNlclxyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEVtIGNhc28gZGUgKipzdWNlc3NvKiosIG8gb2JqZXRvIGRlIHJldG9ybm8gw6kgYXJtYXplbmFkbyBubyBgc2Vzc2lvblN0b3JhZ2VgIGUgbyB1c3XDoXJpbyDDqSByZWRpcmVjaW9uYWRvIHBhcmEgYSBww6FnaW5hIGluaWNpYWwgZGFcclxuICAgKiBhcGxpY2HDp8OjbyBgL2AuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAyMDA6XHJcbiAgICogIHtcclxuICAgKiAgICB1c2VyOiB1c2VyXHJcbiAgICogIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEVtIGNhc28gZGUgKiplcnJvKiogbmEgYXV0ZW50aWNhw6fDo28sIGVzcGVyYS1zZSBvIHNlZ3VpbnRlIHJldG9ybm86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA0MDAvNDAxXHJcbiAgICogIHtcclxuICAgKiAgICBjb2RlOiA0MDAvNDAxLFxyXG4gICAqICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICogICAgZGV0YWlsZWRNZXNzYWdlOiBkZXRhaWxlZE1lc3NhZ2UsXHJcbiAgICogICAgaGVscFVybD86IGhlbHBVcmxcclxuICAgKiAgfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBQb2RlLXNlIGF0cmlidWlyIHVtYSBxdWFudGlkYWRlIG3DoXhpbWEgZGUgdGVudGF0aXZhcyByZXN0YW50ZXMgKG1heEF0dGVtcHRzUmVtYWluaW5nKSBwYXJhIG8gYXRyaWJ1dG8gYHAtZXhjZWVkZWQtYXR0ZW1wdHMtd2FybmluZ2AsXHJcbiAgICogYXNzaW0gY29tbyBvcyBhdmlzb3MgcmVsYWNpb25hZG9zIGFvcyBjYW1wb3MgbG9naW4gZSBwYXNzd29yZCAobG9naW5XYXJuaW5ncywgcGFzc3dvcmRXYXJuaW5ncykgcGFyYSBvcyBhdHJpYnV0b3MgYHAtbG9naW4tZXJyb3JzYCBlXHJcbiAgICogYHAtcGFzc3dvcmQtZXJyb3JzYCBjb25mb3JtZSByZXRvcm5vIGFiYWl4bzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDQwMFxyXG4gICAqICB7XHJcbiAgICogICAgY29kZTogNDAwLzQwMSxcclxuICAgKiAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAqICAgIGRldGFpbGVkTWVzc2FnZTogZGV0YWlsZWRNZXNzYWdlLFxyXG4gICAqICAgIGhlbHBVcmw/OiBoZWxwVXJsLFxyXG4gICAqICAgIG1heEF0dGVtcHRzUmVtYWluaW5nPzogbWF4QXR0ZW1wdHNSZW1haW5pbmcsXHJcbiAgICogICAgbG9naW5XYXJuaW5ncz86IFtsb2dpbldhcm5pbmdzXSxcclxuICAgKiAgICBwYXNzd29yZFdhcm5pbmdzPzogW3Bhc3N3b3JkV2FybmluZ3NdXHJcbiAgICogIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gQ2FzbyBvIHZhbG9yIGF0cmlidcOtZG8gcGFyYSBgcC1leGNlZWRlZC1hdHRlbXB0cy13YXJuaW5nYCBzZWphIGlndWFsIGEgMCh6ZXJvKSwgcG9kZXLDoSBzZXIgcGFzc2FkbyB1bSB2YWxvciBwYXJhIG9cclxuICAgKiBhdHJpYnV0byBgcC1ibG9ja2VkLXVybGAgZSBvIHVzdcOhcmlvIHNlcsOhIHJlZGlyZWNpb25hZG8gcGFyYSB1bWEgdGVsYSBkZSBibG9xdWVpby5cclxuICAgKlxyXG4gICAqICpQcm9jZXNzbyBmaW5hbGl6YWRvLipcclxuICAgKlxyXG4gICAqIF9fX19fX19fX19fX19fX1xyXG4gICAqXHJcbiAgICogIyMjIyBQcmF0aWNpZGFkZVxyXG4gICAqIEFzIGluZm9ybWHDp8O1ZXMgZG8gc2VydmnDp28gZGUgYXV0ZW50aWNhw6fDo28gdGFtYsOpbSBwb2RlbSBzZXIgdHJhbnNtaXRpZGFzIGRpcmV0YW1lbnRlIHBlbGFzIGNvbmZpZ3VyYcOnw6NvcyBkZSByb3RhIGUsIGRlc3RhIG1hbmVpcmEsXHJcbiAgICogZGlzcGVuc2Etc2UgcXVhbHF1ZXIgbWVuw6fDo28gZS9vdSBpbXBvcnRhw6fDo28gZG8gY29tcG9uZW50ZSBgcG8tcGFnZS1sb2dpbmAgbm8gcmVzdGFudGUgZGEgYXBsaWNhw6fDo28uIE8gZXhlbXBsbyBhYmFpeG8gZXhlbXBsaWZpY2FcclxuICAgKiBhIGZvcm1hIGRpbsOibWljYSBjb20gYSBxdWFsIG8gdGVtcGxhdGUgZGUgdGVsYSBkZSBsb2dpbiBwb2RlIHNlciBnZXJhZG8gYW8gbmF2ZWdhciBwYXJhIHJvdGEgYC9sb2dpbmAsIGUgdGFtYsOpbSBjb21vIGVsZSBzZSBjb211bmljYVxyXG4gICAqIGNvbSBvIHNlcnZpw6dvIHBhcmEgZWZldHVhw6fDo28gZG8gcHJvY2Vzc28gZGUgYXV0ZW50aWNhw6fDo28gZG8gdXN1w6FyaW8gZSBzb2xpY2l0YcOnw6NvIGRlIG5vdmEgc2VuaGEuXHJcbiAgICogQmFzdGEgZGVmaW5pciBuYXMgY29uZmlndXJhw6fDtWVzIGRlIHJvdGE6XHJcbiAgICpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICAgaW1wb3J0IHsgUG9QYWdlTG9naW5Db21wb25lbnQsIFBvUGFnZUxvZ2luQXRoZW50aWNhdGlvblR5cGUgfSBmcm9tICdAcG8tdWkvbmctdGVtcGxhdGVzJztcclxuICAgKlxyXG4gICAqICAgLi4uXHJcbiAgICogICBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgKiAgICAge1xyXG4gICAqICAgICAgIHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogUG9QYWdlTG9naW5Db21wb25lbnQsIGRhdGE6IHtcclxuICAgKiAgICAgICAgIHNlcnZpY2VBcGk6ICdodHRwczovL3BvLXVpLmlvL3NhbXBsZS9hcGkvdXNlcnMvYXV0aGVudGljYXRpb24nLFxyXG4gICAqICAgICAgICAgZW52aXJvbm1lbnQ6ICdkZXZlbG9wbWVudCcsXHJcbiAgICogICAgICAgICByZWNvdmVyeToge1xyXG4gICAqICAgICAgICAgICB1cmw6ICdodHRwczovL3BvLXVpLmlvL3NhbXBsZS9hcGkvdXNlcnMnLFxyXG4gICAqICAgICAgICAgICB0eXBlOiBQb01vZGFsUGFzc3dvcmRSZWNvdmVyeVR5cGUuQWxsLFxyXG4gICAqICAgICAgICAgICBjb250YWN0TWFpbDogJ2Rldi5wb0Bwby11aS5jb20nLFxyXG4gICAqICAgICAgICAgICBwaG9uZU1hc2s6ICc5LTk5OS05OTktOTk5OSdcclxuICAgKiAgICAgICAgIH0sXHJcbiAgICogICAgICAgICByZWdpc3RlclVybDogJy9uZXctcGFzc3dvcmQnLFxyXG4gICAqICAgICAgICAgYXV0aGVudGljYXRpb25UeXBlOiBQb1BhZ2VMb2dpbkF0aGVudGljYXRpb25UeXBlLkJhc2ljXHJcbiAgICogICAgICAgfVxyXG4gICAqICAgICB9XHJcbiAgICogICAgIC4uLlxyXG4gICAqICAgXTtcclxuICAgKlxyXG4gICAqICAgQE5nTW9kdWxlKHtcclxuICAgKiAgICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAqICAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG4gICAqICAgfSlcclxuICAgKiAgIGV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICpcclxuICAgKiBPIG1ldGFkYWRvIGBzZXJ2aWNlQXBpYCBkZXZlIHNlciBhICoqdXJsKiogcGFyYSByZXF1aXNpw6fDo28gZG9zIHJlY3Vyc29zIGRlIGF1dGVudGljYcOnw6NvLCBvIGBlbnZpcm9ubWVudGAgYWxpbWVudGEgYSBwcm9wcmllZGFkZVxyXG4gICAqIGBwLWVudmlyb25tZW50YCwgYHJlY292ZXJ5YCDDqSBhIGludGVyZmFjZSBgUG9QYWdlTG9naW5SZWNvdmVyeWAgcmVzcG9uc8OhdmVsIHBlbGFzIGVzcGVjaWZpY2HDp8O1ZXMgY29udGlkYXMgbmEgbW9kYWwgZGUgcmVjdXBlcmHDp8OjbyBkZVxyXG4gICAqIHNlbmhhLCBgcmVnaXN0ZXJVcmxgIGFsaW1lbnRhIGEgcHJvcHJpZWRhZGUgYHAtcmVnaXN0ZXItdXJsYCBlIGBhdXRoZW50aWNhdGlvblR5cGVgIHF1ZSBkZWZpbmUgYSBwcm9wcmllZGFkZSBgcC1hdXRoZW50aWNhdGlvbi10eXBlYC5cclxuICAgKlxyXG4gICAqID4gw4kgZXNzZW5jaWFsIHF1ZSBzaWdhIGEgbm9tZW5jbGF0dXJhIGRvcyBhdHJpYnV0b3MgZXhlbXBsaWZpY2Fkb3MgYWNpbWEgcGFyYSBzdWEgZWZldGl2YSBmdW5jaW9uYWxpZGFkZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hdXRoZW50aWNhdGlvbi11cmwnKSBzZXQgYXV0aGVudGljYXRpb25VcmwodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25VcmwgPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpID8gdmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0aGVudGljYXRpb25VcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGlvblVybDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBDYXNvIG8gdmFsb3IgYXRyaWJ1w61kbyBwYXJhIGBwLWV4Y2VlZGVkLWF0dGVtcHRzLXdhcm5pbmdgIHNlamEgaWd1YWwgYSAwKHplcm8pIGUgYSBhcGxpY2HDp8OjbyB0ZW5oYSB1bSBsaW5rIGRlIGJsb3F1ZWlvIGRlIHVzdcOhcmlvLFxyXG4gICAqIGluZm9ybWUgdW1hIHVybCBleHRlcm5hIG91IHVtYSByb3RhIHbDoWxpZGEsIGRlc3NhIGZvcm1hIGVtIGNhc28gZGUgYmxvcXVlaW8gbyB1c3XDoXJpbyBzZXLDoSByZWRpcmVjaW9uYWRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1ibG9ja2VkLXVybCcpIHNldCBibG9ja2VkVXJsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Jsb2NrZWRVcmwgPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpID8gdmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYmxvY2tlZFVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrZWRVcmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXhpYmUgdW0gYm90w6NvIHBhcmEgc3Vwb3J0ZS5cclxuICAgKlxyXG4gICAqIEEgcHJvcHJpZWRhZGUgYWNlaXRhIG9zIHNlZ3VpbnRlcyB0aXBvczpcclxuICAgKlxyXG4gICAqIC0gKipTdHJpbmcqKjogVVJMIGV4dGVybmEgb3UgdW1hIHJvdGEgdsOhbGlkYTtcclxuICAgKiAtICoqRnVuY3Rpb24qKjogRnVuw6fDo28gYSBzZXIgZGlzcGFyYWRhIGFvIGNsaWNhciBubyBib3TDo28gZGUgc3Vwb3J0ZTtcclxuICAgKiBgYGBcclxuICAgKiA8cG8tcGFnZS1sb2dpbj5cclxuICAgKiAgIFtwLXN1cHBvcnRdPVwidGhpcy5teVN1cHBvcnQuYmluZCh0aGlzKVwiPlxyXG4gICAqIDwvcG8tcGFnZS1sb2dpbj5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zdXBwb3J0Jykgc2V0IHN1cHBvcnQodmFsdWU6IHN0cmluZyB8IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLl9zdXBwb3J0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc3VwcG9ydCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENvbGXDp8OjbyBkZSBpZGlvbWFzIHF1ZSBvIGNvbXBvbmVudGUgaXLDoSB0cmF0YXIgZSBkaXNwb25pYmlsaXphcsOhIHBhcmEgbyB1c3XDoXJpbyBlc2NvbGhlci5cclxuICAgKlxyXG4gICAqIENhc28gZXNzYSBwcm9wcmllZGFkZSBuw6NvIHNlamEgdXRpbGl6YWRhIG8gY29tcG9uZW50ZSBtb3N0cmFyw6Egbm8gY29tYm8gb3MgaWRpb21hcyBxdWUgZWxlIHN1cG9ydGEgcG9yIHBhZHLDo28uXHJcbiAgICpcclxuICAgKiBDYXNvIGEgY29sZcOnw6NvIHRlbmhhIHVtIGlkaW9tYSwgYSBww6FnaW5hIGVzdGFyw6EgbmVzc2UgaWRpb21hIGUgbsOjbyBtb3N0cmFyw6EgbyBjb21iby5cclxuICAgKlxyXG4gICAqIENhc28gc2VqYSBwYXNzYWRvIHVtIGFycmF5IHZhemlvLCBhIHDDoWdpbmEgdGVyw6EgbyBpZGlvbWEgY29uZmlndXJhZG8gbm8gYGkxOG5gIGUgbsOjbyBtb3N0cmFyw6EgbyBjb21ibyBkZSBzZWxlw6fDo28uXHJcbiAgICpcclxuICAgKiA+IFNlIGZvciBwYXNzYWRvIHVtIGlkaW9tYSBuw6NvIHN1cG9ydGFkbywgc2Vyw6EgcHJlY2lzbyBwYXNzYXIgYXMgbGl0ZXJhaXMgcGVsYSBwcm9wcmllZGFkZSBgcC1saXRlcmFsc2AuXHJcbiAgICpcclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sYW5ndWFnZXMnKSBzZXQgbGFuZ3VhZ2VzTGlzdChsYW5ndWFnZXNMaXN0OiBBcnJheTxQb0xhbmd1YWdlPikge1xyXG4gICAgaWYgKGxhbmd1YWdlc0xpc3QpIHtcclxuICAgICAgaWYgKGxhbmd1YWdlc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzTGlzdCA9IGxhbmd1YWdlc0xpc3Q7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzTGlzdCA9IHBvTGFuZ3VhZ2VEZWZhdWx0LmZpbHRlcihsYW5ndWFnZSA9PiBsYW5ndWFnZS5sYW5ndWFnZSA9PT0gdGhpcy5sYW5ndWFnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsYW5ndWFnZXNMaXN0KCk6IEFycmF5PFBvTGFuZ3VhZ2U+IHtcclxuICAgIGlmICh0aGlzLl9sYW5ndWFnZXNMaXN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXNMaXN0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvTGFuZ3VhZ2VEZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dMYW5ndWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlc0xpc3QubGVuZ3RoID4gMTtcclxuICB9XHJcblxyXG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRMYW5ndWFnZSB8fCBnZXRTaG9ydEJyb3dzZXJMYW5ndWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VMb2dpbkxpdGVyYWxzKCk6IFBvUGFnZUxvZ2luTGl0ZXJhbHMge1xyXG4gICAgY29uc3QgbG9naW5IaW50V2l0aENvbnRhY3RFbWFpbCA9IHRoaXMuY29udGFjdEVtYWlsXHJcbiAgICAgID8gdGhpcy5jb25jYXRlbmF0ZUxvZ2luSGludFdpdGhDb250YWN0RW1haWwodGhpcy5jb250YWN0RW1haWwpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnBvUGFnZUxvZ2luTGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgIC4uLnBvUGFnZUxvZ2luTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLFxyXG4gICAgICAuLi5sb2dpbkhpbnRXaXRoQ29udGFjdEVtYWlsLFxyXG4gICAgICAuLi50aGlzLmxpdGVyYWxzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogUG9QYWdlTG9naW5TZXJ2aWNlLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHVibGljIHBvTGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5zZWxlY3RlZExhbmd1YWdlID0gdGhpcy5wb0xhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlUG9wb3ZlcigpIHtcclxuICAgIHRoaXMuc2hvd0V4Y2VlZGVkQXR0ZW1wdHNXYXJuaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luU3VibWl0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9naW5Gb3JtOiBQb1BhZ2VMb2dpbiA9IHtcclxuICAgICAgbG9naW46IHRoaXMubG9naW4sXHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICByZW1lbWJlclVzZXI6IHRoaXMucmVtZW1iZXJVc2VyXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmN1c3RvbUZpZWxkKSB7XHJcbiAgICAgIGxvZ2luRm9ybVt0aGlzLmN1c3RvbUZpZWxkT2JqZWN0LnByb3BlcnR5XSA9IHRoaXMuY3VzdG9tRmllbGRPYmplY3QudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0aGVudGljYXRpb25VcmwpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sb2dpblN1YnNjcmlwdGlvbiA9IHRoaXMubG9naW5TZXJ2aWNlXHJcbiAgICAgICAgLm9uTG9naW4odGhpcy5hdXRoZW50aWNhdGlvblVybCwgdGhpcy5hdXRoZW50aWNhdGlvblR5cGUsIGxvZ2luRm9ybSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzVG9Qcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1BPX1VTRVJfTE9HSU4nLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkludGVybmFsTGluaygnLycpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5lcnJvci5jb2RlID09PSAnNDAwJyB8fCBlcnJvci5lcnJvci5jb2RlID09PSAnNDAxJykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzVG9Qcm9wZXJ0aWVzKGVycm9yKTtcclxuICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0QmxvY2tlZFVybCh0aGlzLmV4Y2VlZGVkQXR0ZW1wdHNXYXJuaW5nLCB0aGlzLmJsb2NrZWRVcmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ2luU3VibWl0LmVtaXQobG9naW5Gb3JtKTtcclxuICAgICAgdGhpcy5zaG93RXhjZWVkZWRBdHRlbXB0c1dhcm5pbmcgPSB0aGlzLmV4Y2VlZGVkQXR0ZW1wdHNXYXJuaW5nID4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGVmYXVsdEN1c3RvbUZpZWxkT2JqZWN0KHByb3BlcnR5KTogUG9QYWdlTG9naW5DdXN0b21GaWVsZCB7XHJcbiAgICByZXR1cm4geyBwcm9wZXJ0eSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuRXh0ZXJuYWxMaW5rKHVybDogc3RyaW5nKSB7XHJcbiAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkludGVybmFsTGluayh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWRpcmVjdEJsb2NrZWRVcmwoYXR0ZW1wdHM6IG51bWJlciwgYmxvY2tlZFVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoYXR0ZW1wdHMgPT09IDAgJiYgYmxvY2tlZFVybCkge1xyXG4gICAgICB0aGlzLnNob3dFeGNlZWRlZEF0dGVtcHRzV2FybmluZyA9IGZhbHNlO1xyXG4gICAgICBpc0V4dGVybmFsTGluayhibG9ja2VkVXJsKSA/IHRoaXMub3BlbkV4dGVybmFsTGluayhibG9ja2VkVXJsKSA6IHRoaXMub3BlbkludGVybmFsTGluayhibG9ja2VkVXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWVzVG9Qcm9wZXJ0aWVzKHJlc3VsdD8pIHtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5leGNlZWRlZEF0dGVtcHRzV2FybmluZyA9IHJlc3VsdC5lcnJvci5tYXhBdHRlbXB0c1JlbWFpbmluZztcclxuICAgICAgdGhpcy5sb2dpbkVycm9ycyA9IHJlc3VsdC5lcnJvci5sb2dpbldhcm5pbmdzO1xyXG4gICAgICB0aGlzLnBhc3N3b3JkRXJyb3JzID0gcmVzdWx0LmVycm9yLnBhc3N3b3JkV2FybmluZ3M7XHJcbiAgICAgIHRoaXMuYmxvY2tlZFVybCA9IHJlc3VsdC5lcnJvci5ibG9ja2VkVXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leGNlZWRlZEF0dGVtcHRzV2FybmluZyA9IDA7XHJcbiAgICAgIHRoaXMubG9naW5FcnJvcnMgPSBbXTtcclxuICAgICAgdGhpcy5wYXNzd29yZEVycm9ycyA9IFtdO1xyXG4gICAgICB0aGlzLmJsb2NrZWRVcmwgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb25jYXRlbmF0ZUxvZ2luSGludFdpdGhDb250YWN0RW1haWwoY29udGFjdEVtYWlsOiBzdHJpbmcpO1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0TG9naW5FcnJvcnModmFsdWU6IEFycmF5PHN0cmluZz4pOiB2b2lkO1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0UGFzc3dvcmRFcnJvcnModmFsdWU6IEFycmF5PHN0cmluZz4pOiB2b2lkO1xyXG59XHJcbiJdfQ==