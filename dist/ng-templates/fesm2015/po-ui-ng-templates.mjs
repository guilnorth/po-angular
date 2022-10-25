import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, Injectable, Component, ViewChild, NgModule, ChangeDetectionStrategy, ViewContainerRef, ViewEncapsulation, ContentChild } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import * as i2 from '@po-ui/ng-components';
import { poLocaleDefault, poLocales, PoI18nPipe, PoFieldModule, PoModalModule, poLanguageDefault, PoDividerModule, PoModule, PoModalComponent, PoDynamicModule, PoPageModule, PoWidgetModule, PoButtonModule, PoGridModule, InputBoolean, PoDynamicFormComponent, PoDynamicFieldType, PoLanguageModule, PoTableColumnSortType, PoTableModule, PoInfoOrientation, PoStepperStatus, PoContainerModule, PoDialogModule, PoInfoModule, PoStepperModule } from '@po-ui/ng-components';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { of, merge, throwError, from, EMPTY, concat, Subscription } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { __decorate, __awaiter } from 'tslib';

/**
 * Retorna o idioma atual do navegador
 */
function getBrowserLanguage() {
    // navigator.userLanguage is the value for IE10
    return navigator.language || navigator['userLanguage'];
}
/**
 * Retorna o idioma do navegador, com somente as duas primeiras letras. Por exemplo: "pt" ou "es".
 *
 * Caso o valor retornado pelo navegador não estiver dentro dos idiomas suportados pelo PO,
 * será retornado a linguagem padrão (poLocaleDefault).
 */
function getShortBrowserLanguage() {
    const language = (getBrowserLanguage() || poLocaleDefault).toLowerCase().substring(0, 2);
    if (!poLocales.includes(language)) {
        return poLocaleDefault;
    }
    return language;
}
function convertToBoolean(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return val === 'true' || val === 'on' || val === '';
    }
    if (typeof val === 'number') {
        return val === 1;
    }
    return !!val;
}
function convertToInt(value, valueDefault) {
    const validNumber = parseInt(value, 10);
    const validDefaultValue = parseInt(valueDefault, 10);
    const defaultValue = validDefaultValue || validDefaultValue === 0 ? validDefaultValue : undefined;
    return validNumber || validNumber === 0 ? validNumber : defaultValue;
}
function isTypeof(object, type) {
    return typeof object === type;
}
/**
 *
 * @param fn Função que será executada dentro do contexto. Podendo ser o nome da função
 * ou a referência da mesma.
 *
 * @param context Contexto do qual a função será executada.
 */
function callFunction(fn, context, param) {
    if (isTypeof(fn, 'function')) {
        fn.call(context, param);
    }
    else {
        context[fn](param);
    }
}
function convertIsoToDate(value, start, end) {
    if (value) {
        const day = parseInt(value.substring(8, 10), 10);
        const month = parseInt(value.substring(5, 7), 10);
        const year = parseInt(value.substring(0, 4), 10);
        if (start) {
            const date = new Date(year, month - 1, day, 0, 0, 0);
            setYearFrom0To100(date, year);
            return date;
        }
        else if (end) {
            const date = new Date(year, month - 1, day, 23, 59, 59);
            setYearFrom0To100(date, year);
            return date;
        }
        else {
            const milliseconds = Date.parse(value);
            const timezone = new Date().getTimezoneOffset() * 60000;
            return new Date(milliseconds + timezone);
        }
    }
}
function convertDateToISOExtended(date, time) {
    if (date) {
        const getMonth = date.getMonth() + 1;
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = getMonth < 10 ? '0' + getMonth : getMonth;
        const year = formatYear(date.getFullYear());
        const dateString = date.toString();
        if (time) {
            return year + '-' + month + '-' + day + time;
        }
        else {
            return (year +
                '-' +
                month +
                '-' +
                day +
                'T' +
                dateString.substring(16, 24) +
                dateString.substring(28, 31) +
                ':' +
                dateString.substring(31, 33));
        }
    }
    else {
        return null;
    }
}
/**
 * Transforma o ano em uma string no formato yyyy e caso o ano seja menor que 1000 preenche com zeros a esquerda.
 *
 * @param year Ano
 */
function formatYear(year) {
    if (year >= 1000) {
        return year.toString();
    }
    if (year > 99 && year < 1000) {
        return `0${year}`;
    }
    if (year > 9 && year < 100) {
        return `00${year}`;
    }
    if (year >= 0 && year < 10) {
        return `000${year}`;
    }
}
function isEquals(value, comparedValue) {
    return JSON.stringify(value) === JSON.stringify(comparedValue);
}
/**
 * Caso o ano original da data seja entre 0 e 100 atribui esse valor ao ano, pois o `new Date` do javascript transforma o ano para 190X.
 *
 * @param date Data
 * @param year Ano original
 */
function setYearFrom0To100(date, year) {
    if (year >= 0 && year < 100) {
        date.setFullYear(year);
    }
}
function sortOptionsByProperty(options, property) {
    options.sort((optionA, optionB) => {
        optionA = optionA[property].toString().toLowerCase();
        optionB = optionB[property].toString().toLowerCase();
        if (optionA < optionB) {
            return -1;
        }
        if (optionA > optionB) {
            return 1;
        }
        return 0;
    });
}
function removeDuplicatedOptions(list) {
    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            continue;
        }
        if (list.findIndex(op => op.value === list[i].value) !== i) {
            list.splice(i, 1);
            i--;
        }
    }
}
function removeUndefinedAndNullOptions(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].value === undefined || list[i].value === null) {
            list.splice(i, 1);
            i--;
        }
    }
}
function validValue(value) {
    return (value !== null && value !== undefined && value !== '') || value === false;
}
function isExternalLink(url) {
    return url ? url.startsWith('http') : false;
}
function openExternalLink(url) {
    window.open(url, '_blank');
}
function getFormattedLink(link) {
    let formattedLink = '';
    // Retira todos os pontos no começo da URL.
    if (link) {
        formattedLink = link.replace(/^(\.)+/g, '');
    }
    // Verifica se foi utilizado uma rota que não comece com barra.
    if (!formattedLink.startsWith('/')) {
        formattedLink = '/'.concat(formattedLink);
    }
    return formattedLink;
}
/**
 * Método responsável por ordenar dois valores.
 *
 * @param leftSide Primeiro valor a ser comparado.
 * @param rightSide Segundo valor a ser comparado.
 * @param ascending Determina se será em ordem ascendente ou descendente.
 */
function sortValues(leftSide, rightSide, ascending = true) {
    if (ascending) {
        if (leftSide < rightSide) {
            return -1;
        }
        else if (leftSide > rightSide) {
            return 1;
        }
    }
    else if (ascending === false) {
        if (leftSide < rightSide) {
            return 1;
        }
        else if (leftSide > rightSide) {
            return -1;
        }
    }
    return 0;
}
function validateDateRange(date, dateStart, dateEnd) {
    if (dateStart && dateEnd) {
        return date >= dateStart && date <= dateEnd;
    }
    else if (dateStart && !dateEnd) {
        return date >= dateStart;
    }
    else if (!dateStart && dateEnd) {
        return date <= dateEnd;
    }
    else {
        return true;
    }
}
function capitalizeFirstLetter(text) {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}
/**
 * Mapeia um novo array apenas com as propriedades definidas pelo desenvolvedor baseado em um array de
 * origem.
 *
 * Exemplo:
 *
 * ```
 * const people = [
 *  { id: 1, name: 'Fulano', birthdate: '1980-11-01', genre: 'Male', city: 'São Paulo', dependents: 2 },
 *  { id: 2, name: 'Beltrano', birthdate: '1997-01-21', genre: 'Female', city: 'Joinville', dependents: 0 },
 *  { id: 3, name: 'Siclano', birthdate: '1995-07-15', genre: 'Male', city: 'Joinville', dependents: 0 }
 * ];
 *
 * const properties = ['id', 'name'];
 *
 * const idAndName = mapArrayByProperties(people, properties);
 *
 * console.log(idAndName); // [{ id: 1, name: 'Fulano' }, { id: 2, name: 'Beltrano' }, { id: 3, name: 'Siclano' }]
 * ```
 *
 * Um outro uso para o método é "parear" todos os objetos do array com as mesmas propriedades.
 *
 * ```
 * const customers = [
 *  { id: 1, name: 'Fulano', city: 'São Paulo', dependents: 2 }, // sem genre
 *  { id: 2, name: 'Beltrano', genre: 'Female', city: 'Joinville' }, // sem dependents
 *  { id: 3, name: 'Siclano', genre: 'Male', city: 'Joinville', dependents: 0 }
 * ];
 * const properties = ['id', 'name', 'city', 'genre', 'dependents'];
 *
 * const pattern = mapArrayByProperties(customers, properties);
 * console.log(pattern);
 *
 * // [
 * //   { id: 1, name: 'Fulano', city: 'São Paulo', genre: undefined, dependents: 2 },
 * //   { id: 2, name: 'Beltrano', city: 'Joinville', genre: 'Female', dependents: undefined },
 * //   { id: 3, name: 'Siclano', city: 'Joinville', genre: 'Male', dependents: 0 }
 * // ]
 * ```
 *
 * @param items {Array<any>} Array de items original.
 * @param properties {Array<string>} Array de string com a lista de propriedades que devem ser retornadas.
 *
 * @returns Array<any>
 */
function mapArrayByProperties(items = [], properties = []) {
    return items.map(item => mapObjectByProperties(item, properties));
}
/**
 * Mapeia um novo objeto apenas com as propriedades definidas pelo desenvolvedor.
 *
 * Exemplo:
 *
 * ```
 * const person = { id: 1, name: 'Fulano', birthdate: '1980-11-01', genre: 'Male', city: 'São Paulo', dependents: 2 };
 *
 * const properties = ['id', 'name'];
 *
 * const idAndName = mapObjectByProperties(person, properties);
 *
 * console.log(idAndName); // { id: 1, name: 'Fulano' }
 * ```
 *
 * @param object {Array<any>} Array de items original.
 * @param properties {Array<string>} Array de string com a lista de propriedades que devem ser retornadas.
 *
 * @returns Array<any>
 */
function mapObjectByProperties(object = {}, properties = []) {
    const getSelectedProperties = (selectedProperties, property) => (Object.assign(Object.assign({}, selectedProperties), { [property]: object[property] }));
    return properties.reduce(getSelectedProperties, {});
}
/**
 * Retorna os valores de um objeto dentro de um array.
 *
 * > Simula o Object.values(obj), o mesmo deve ser removido assim que a versão typescrit for atualizada.
 *
 * @param object Objeto de onde será pego os valores.
 */
function valuesFromObject(object = {}) {
    return Object.keys(object).map(property => object[property]);
}
/**
 * adiciona 0 no tempo informado, caso menor q 10
 *
 * @param time
 */
function addZero(time) {
    if (!time) {
        return '00';
    }
    if (time < 10) {
        return `0${time}`;
    }
    return time;
}
/**
 * Remove do objeto as propriedades especificadas.
 *
 * Exemplo:
 *
 * ```
 * key: ['id', 'cpf']
 * newItemValue: { id: '123', cpf: '456', name: 'Test' }
 * Resultado: { name: 'Test' }
 * ```
 *
 * @param keys lista de propriedades para ser removida do objeto.
 * @param newItemValue objeto que se deseja remover as propriedades.
 * @returns objeto sem as propriedades especificadas.
 */
function removeKeysProperties(keys, newItemValue) {
    keys.forEach(key => delete newItemValue[key]);
    return newItemValue;
}
/**
 * Remove objetos duplicados.
 *
 * Exemplo:
 *
 * ```
 * item: [{country: 'japao'}, {country: 'brasil'} , {country: 'china'}]
 * item2: [{country: 'chile'}, {country: 'brasil'}, {country: 'canada'}]
 * key: 'country'
 * Resultado:
 *    item2 = [{country: 'chile'}, {country: 'canada'} ]
 * ```
 *
 * @param item lista comparada.
 * @param item2 lista para remover items duplicados.
 * @param key propriedade que será utilizada para realizar a comparação.
 */
function removeDuplicateItems(item, item2, key) {
    for (let i = 0, len = item.length; i < len; i++) {
        for (let j = 0, len2 = item2.length; j < len2; j++) {
            if (item[i][key] === item2[j][key]) {
                item2.splice(j, 1);
                len2 = item2.length;
            }
        }
    }
}

const poModalPasswordRecoveryLiterals = {
    en: {
        cancelButton: 'Cancel',
        closeButton: 'Close',
        continueButton: 'Continue',
        email: 'e-mail',
        emailErrorMessagePhrase: 'Invalid e-mail format',
        emailSentConfirmationPhrase: `We have sent the instructions and new password creation link to your e-mail.
    If you did not receive it after a few minutes, check your spam box or click Resend.`,
        emailSentTitle: 'E-mail sent',
        forgotPasswordTitle: 'Forgot your password?',
        insertCode: 'Type the code',
        insertEmail: 'Enter your e-mail',
        insertPhone: 'Enter your mobile number',
        phoneErrorMessagePhrase: 'Invalid phone number',
        prepositionIn: 'in',
        prepositionOr: 'or',
        recoveryPasswordPhrase: 'To recover your password we will send you a {0} with instructions.',
        resendEmailButton: 'Resend',
        resendSmsCodePhrase: 'If the code does not arrive within a few minutes, please send it again.',
        sendAgainPhrase: 'If the code does not arrive within a few minutes',
        sendAgain: 'send again.',
        sendButton: 'Submit',
        sentSmsCodePhrase: 'We sent a code for your mobile phone.',
        sms: 'SMS',
        smsCodeErrorMessagePhrase: 'Invalid code. Please re-enter or contact support',
        supportContact: 'If you do not have access to {0} contact support',
        telephone: 'telephone',
        typeCodeTitle: 'Enter sent code'
    },
    es: {
        cancelButton: 'Cancelar',
        closeButton: 'Cerrar',
        continueButton: 'Continuar',
        email: 'e-mail',
        emailErrorMessagePhrase: 'Formato de correo electrónico no válido',
        emailSentConfirmationPhrase: `Enviamos las instrucciones y enlace de creación de nueva contraseña para su correo electrónico.
    Si no ha recibido después de unos minutos, compruebe su caja de spam o haga clic en Reenviar`,
        emailSentTitle: 'E-mail enviado',
        forgotPasswordTitle: 'Olvidaste tu contraseña?',
        insertCode: 'Introduzca el código',
        insertEmail: 'Introduce tu e-mail',
        insertPhone: 'Introduce tu número de celular',
        phoneErrorMessagePhrase: 'Número de teléfono no válido',
        prepositionIn: 'en',
        prepositionOr: 'u',
        recoveryPasswordPhrase: 'Para recuperar su contraseña vamos a enviar un {0} con instrucciones.',
        resendEmailButton: 'Reenviar',
        resendSmsCodePhrase: 'Si el código no llega dentro de unos minutos, vuelva a enviar.',
        sendAgain: 'envíe de nuevo.',
        sendAgainPhrase: 'Si el código no llega dentro de unos minutos',
        sendButton: 'Enviar',
        sentSmsCodePhrase: 'Enviamos un código para su celular.',
        sms: 'SMS',
        smsCodeErrorMessagePhrase: 'Código no válido. Escriba de nuevo o póngase en contacto con el soporte',
        supportContact: 'Si no tiene acceso a {0} póngase en contacto con el soporte',
        telephone: 'teléfono',
        typeCodeTitle: 'Escribir código enviado'
    },
    pt: {
        cancelButton: 'Cancelar',
        closeButton: 'Fechar',
        continueButton: 'Continuar',
        email: 'e-mail',
        emailErrorMessagePhrase: 'Formato de e-mail inválido',
        emailSentConfirmationPhrase: `Enviamos as instruções e link de criação de nova senha para o seu e-mail.
    Caso não tenha recebido após alguns minutos, verifique sua caixa de spam ou clique em Reenviar.`,
        emailSentTitle: 'E-mail enviado',
        forgotPasswordTitle: 'Esqueceu sua senha?',
        insertCode: 'Digite o código',
        insertEmail: 'Insira seu e-mail',
        insertPhone: 'Insira seu número de celular',
        phoneErrorMessagePhrase: 'Número de telefone inválido',
        prepositionIn: 'em',
        prepositionOr: 'ou',
        recoveryPasswordPhrase: 'Para recuperar sua senha vamos enviar um {0} com instruções.',
        resendEmailButton: 'Reenviar',
        resendSmsCodePhrase: 'Se o código não chegar dentro de alguns minutos envie novamente',
        sendAgain: 'envie novamente.',
        sendAgainPhrase: 'Se o código não chegar dentro de alguns minutos',
        sendButton: 'Enviar',
        sentSmsCodePhrase: 'Enviamos um código para seu celular cadastrado.',
        sms: 'SMS',
        smsCodeErrorMessagePhrase: 'Código inválido. Digite novamente ou contacte o suporte',
        supportContact: 'Se não tiver acesso ao {0} contacte o suporte',
        telephone: 'telefone',
        typeCodeTitle: 'Digitar código enviado'
    },
    ru: {
        cancelButton: 'отменить',
        closeButton: 'близко',
        continueButton: 'близко',
        email: 'по электронной почте',
        emailErrorMessagePhrase: 'Неверный формат электронной почты',
        emailSentConfirmationPhrase: `Мы отправили инструкции и новую ссылку для создания пароля для вашей электронной почты.
Если вы не получили его в течение нескольких минут, установите флажок Спам или нажмите Далее.`,
        emailSentTitle: 'Письмо отправлено',
        forgotPasswordTitle: 'Забыли пароль?',
        insertCode: 'Введите код',
        insertEmail: 'Введите адрес электронной почты',
        insertPhone: 'Введите номер вашего мобильного телефона',
        phoneErrorMessagePhrase: 'Неверный номер телефона',
        prepositionIn: 'в',
        prepositionOr: 'или',
        recoveryPasswordPhrase: 'Для восстановления вашего пароля мы вышлем {0} с инструкциями.',
        resendEmailButton: 'Отправить еще раз',
        resendSmsCodePhrase: 'Если код не приходит через несколько минут, попробуйте еще раз.',
        sendAgain: 'отправить снова.',
        sendAgainPhrase: 'Если код не приходит через несколько минут',
        sendButton: 'послать',
        sentSmsCodePhrase: 'Мы отправляем код на ваш зарегистрированный мобильный телефон.',
        sms: 'SMS',
        smsCodeErrorMessagePhrase: 'Неверный код. Повторите или обратитесь в службу поддержки',
        supportContact: 'Если у вас нет доступа к {0}, обратитесь в службу поддержки',
        telephone: 'телефон',
        typeCodeTitle: 'Введите отправленный код'
    }
};

/**
 * @usedBy PoModalPasswordRecoveryComponent
 *
 * @description
 *
 * *Enum* para especificação do tipo de recuperação de senha.
 */
var PoModalPasswordRecoveryType;
(function (PoModalPasswordRecoveryType) {
    /** Possibilita ao usuário optar por envio via email ou SMS */
    PoModalPasswordRecoveryType["All"] = "all";
    /** Definição para recuperação apenas por email */
    PoModalPasswordRecoveryType["Email"] = "email";
    /** Definição para recuperação apenas por SMS */
    PoModalPasswordRecoveryType["SMS"] = "sms";
})(PoModalPasswordRecoveryType || (PoModalPasswordRecoveryType = {}));

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
class PoModalPasswordRecoveryBaseComponent {
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
        this.literals = Object.assign(Object.assign({}, this.literals), poModalPasswordRecoveryLiterals[languageService.getShortLanguage()]);
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
PoModalPasswordRecoveryBaseComponent.ɵfac = function PoModalPasswordRecoveryBaseComponent_Factory(t) { return new (t || PoModalPasswordRecoveryBaseComponent)(i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoModalPasswordRecoveryBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoModalPasswordRecoveryBaseComponent, inputs: { codeError: ["p-code-error", "codeError"], urlRecovery: ["p-url-recovery", "urlRecovery"], contactEmail: ["p-contact-email", "contactEmail"], phoneMask: ["p-phone-mask", "phoneMask"], type: ["p-type", "type"] }, outputs: { codeSubmit: "p-code-submit", submit: "p-submit" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryBaseComponent, [{
            type: Directive
        }], function () { return [{ type: i2.PoLanguageService }]; }, { codeError: [{
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
            }] });
})();

/**
 * @docsPrivate
 *
 * @description
 *
 * Enum para definição do tipo de conteúdo exibido na modal.
 */
var PoModalPasswordRecoveryModalContent;
(function (PoModalPasswordRecoveryModalContent) {
    /** Exibição de modal contendo campo para preenchimento de email ou número de telefone */
    PoModalPasswordRecoveryModalContent["Email"] = "email";
    /** Exibição de modal contendo campo para inserção de código enviado por SMS */
    PoModalPasswordRecoveryModalContent["SMSCode"] = "smsCode";
    /** Exibição de modal de confirmação de envio */
    PoModalPasswordRecoveryModalContent["Confirmation"] = "confirmation";
})(PoModalPasswordRecoveryModalContent || (PoModalPasswordRecoveryModalContent = {}));

class PoModalPasswordRecoveryService {
    constructor(http) {
        this.http = http;
    }
    post(urlRecovery, item, params) {
        return this.http.post(urlRecovery, item, { observe: 'response', params: params });
    }
}
PoModalPasswordRecoveryService.ɵfac = function PoModalPasswordRecoveryService_Factory(t) { return new (t || PoModalPasswordRecoveryService)(i0.ɵɵinject(i1.HttpClient)); };
PoModalPasswordRecoveryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoModalPasswordRecoveryService, factory: PoModalPasswordRecoveryService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryService, [{
            type: Injectable
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

/**
 * @docsPrivate
 *
 * @description
 *
 * Componente utilizado para exibição da mensagem customizada de erro em um campo de formulário.
 */
class PoModalPasswordRecoveryErrorMessageComponent {
}
PoModalPasswordRecoveryErrorMessageComponent.ɵfac = function PoModalPasswordRecoveryErrorMessageComponent_Factory(t) { return new (t || PoModalPasswordRecoveryErrorMessageComponent)(); };
PoModalPasswordRecoveryErrorMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalPasswordRecoveryErrorMessageComponent, selectors: [["po-modal-password-recovery-error-message"]], inputs: { text: ["p-text", "text"] }, decls: 4, vars: 1, consts: [[1, "po-field-container-bottom-text-error", "po-field-container-error-item"], [1, "po-icon", "po-icon-exclamation"], [1, "po-field-container-error-text"]], template: function PoModalPasswordRecoveryErrorMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "span", 1);
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.text);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryErrorMessageComponent, [{
            type: Component,
            args: [{ selector: 'po-modal-password-recovery-error-message', template: "<div class=\"po-field-container-bottom-text-error po-field-container-error-item\">\r\n  <span class=\"po-icon po-icon-exclamation\"></span>\r\n  <span class=\"po-field-container-error-text\">{{ text }}</span>\r\n</div>\r\n" }]
        }], null, { text: [{
                type: Input,
                args: ['p-text']
            }] });
})();

const _c0$9 = ["emailForm"];
const _c1$6 = ["recoveryModal"];
const _c2$4 = ["smsCodeForm"];
function PoModalPasswordRecoveryComponent_div_3_div_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div")(1, "po-radio-group", 15);
        i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.chosenTypeFormOption = $event); })("p-change", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_p_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.getInputType($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r5.chosenTypeFormOption)("p-options", ctx_r5.typeFormOptions);
    }
}
function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-email", 16);
        i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.email = $event); })("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_p_change_model_0_listener() { i0.ɵɵrestoreView(_r14); i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(5); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.formModelChangesCheck(_r4)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngModel", ctx_r6.email)("p-label", ctx_r6.literals.insertEmail);
    }
}
function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-input", 17);
        i0.ɵɵlistener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.phone = $event); })("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_p_change_model_0_listener() { i0.ɵɵrestoreView(_r17); i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(5); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.formModelChangesCheck(_r4)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r7 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngModel", ctx_r7.phone)("p-label", ctx_r7.literals.insertPhone)("p-mask", ctx_r7.phoneMask)("p-maxlength", ctx_r7.maxLength)("p-minlength", ctx_r7.minLength);
    }
}
function PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-modal-password-recovery-error-message", 18);
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("p-text", ctx_r8.type === "sms" ? ctx_r8.literals.phoneErrorMessagePhrase : ctx_r8.literals.emailErrorMessagePhrase);
    }
}
function PoModalPasswordRecoveryComponent_div_3_span_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "a", 19);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r9 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r9.literals.prepositionIn, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate1("href", "mailto:", ctx_r9.contactEmail, "", i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r9.contactEmail, " ");
    }
}
function PoModalPasswordRecoveryComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-modal-password-recovery-error-message", 18);
    }
    if (rf & 2) {
        const ctx_r21 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("p-text", ctx_r21.smsCodeErrorMessage || ctx_r21.literals.smsCodeErrorMessagePhrase);
    }
}
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-modal-password-recovery-error-message", 18);
    }
    if (rf & 2) {
        const ctx_r22 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("p-text", ctx_r22.codeError);
    }
}
function PoModalPasswordRecoveryComponent_div_4_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PoModalPasswordRecoveryComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4, 24);
        i0.ɵɵelement(2, "img", 25);
        i0.ɵɵelementStart(3, "div", 26);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx_r3.literals.emailSentConfirmationPhrase, " ");
    }
}
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
class PoModalPasswordRecoveryComponent extends PoModalPasswordRecoveryBaseComponent {
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
PoModalPasswordRecoveryComponent.ɵfac = function PoModalPasswordRecoveryComponent_Factory(t) { return new (t || PoModalPasswordRecoveryComponent)(i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i2.PoI18nPipe), i0.ɵɵdirectiveInject(PoModalPasswordRecoveryService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoModalPasswordRecoveryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalPasswordRecoveryComponent, selectors: [["po-modal-password-recovery"]], viewQuery: function PoModalPasswordRecoveryComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$9, 5);
            i0.ɵɵviewQuery(_c1$6, 7);
            i0.ɵɵviewQuery(_c2$4, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emailForm = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recoveryModalElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.smsCodeForm = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["p-hide-close", "", "p-size", "auto", 3, "ngSwitch", "p-primary-action", "p-secondary-action", "p-title"], ["recoveryModal", ""], [1, "po-modal-password-recovery-wrapper"], ["class", "po-modal-password-recovery-content po-row", 4, "ngSwitchCase"], [1, "po-modal-password-recovery-content", "po-row"], [1, "po-modal-password-recovery-text", "po-md-12", "po-mb-1"], [1, "po-mb-2", "po-md-12"], ["emailForm", "ngForm"], [4, "ngIf"], [1, "po-mt-1"], ["name", "email", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model", 4, "ngIf"], ["name", "sms", "p-icon", "po-icon-telephone", "p-required", "", 3, "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "ngModelChange", "p-change-model", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], [3, "p-text", 4, "ngIf"], [1, "po-modal-password-recovery-text", "po-md-12"], ["name", "type", 3, "ngModel", "p-options", "ngModelChange", "p-change"], ["name", "email", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model"], ["name", "sms", "p-icon", "po-icon-telephone", "p-required", "", 3, "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "ngModelChange", "p-change-model"], [3, "p-text"], ["target", "_self", 1, "po-modal-password-recovery-link", 3, "href"], ["smsCodeModal", ""], ["smsCodeForm", "ngForm"], ["name", "sms", "p-maxlength", "11", "p-minlength", "11", "p-required", "", 3, "ngModel", "p-label", "p-mask", "ngModelChange", "p-change-model"], [1, "po-modal-password-recovery-link", 3, "click"], ["confirmationModal", ""], ["src", "./assets/images/email-sent.svg", 1, "po-modal-password-recovery-user-image", "po-mb-2"], [1, "po-modal-password-recovery-text"]], template: function PoModalPasswordRecoveryComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "po-modal", 0, 1)(2, "div", 2);
            i0.ɵɵtemplate(3, PoModalPasswordRecoveryComponent_div_3_Template, 16, 8, "div", 3);
            i0.ɵɵtemplate(4, PoModalPasswordRecoveryComponent_div_4_Template, 15, 8, "div", 3);
            i0.ɵɵtemplate(5, PoModalPasswordRecoveryComponent_div_5_Template, 5, 1, "div", 3);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.modalType)("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.modalTitle);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngSwitchCase", "email");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "smsCode");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "confirmation");
        }
    }, dependencies: [i4.NgIf, i4.NgSwitch, i4.NgSwitchCase, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i2.PoEmailComponent, i2.PoInputComponent, i2.PoRadioGroupComponent, i2.PoModalComponent, PoModalPasswordRecoveryErrorMessageComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryComponent, [{
            type: Component,
            args: [{ selector: 'po-modal-password-recovery', template: "<po-modal\r\n  #recoveryModal\r\n  p-hide-close\r\n  p-size=\"auto\"\r\n  [ngSwitch]=\"modalType\"\r\n  [p-primary-action]=\"primaryAction\"\r\n  [p-secondary-action]=\"secondaryAction\"\r\n  [p-title]=\"modalTitle\"\r\n>\r\n  <div class=\"po-modal-password-recovery-wrapper\">\r\n    <div *ngSwitchCase=\"'email'\" class=\"po-modal-password-recovery-content po-row\">\r\n      <div class=\"po-modal-password-recovery-text po-md-12 po-mb-1\">\r\n        {{ emailModalPhrases.firstPhrase }}\r\n      </div>\r\n      <div class=\"po-mb-2 po-md-12\">\r\n        <form #emailForm=\"ngForm\">\r\n          <div *ngIf=\"modalPasswordRecoveryTypeAll\">\r\n            <po-radio-group\r\n              name=\"type\"\r\n              [(ngModel)]=\"chosenTypeFormOption\"\r\n              [p-options]=\"typeFormOptions\"\r\n              (p-change)=\"getInputType($event)\"\r\n            >\r\n            </po-radio-group>\r\n          </div>\r\n\r\n          <div class=\"po-mt-1\">\r\n            <po-email\r\n              *ngIf=\"type === 'email' || type === 'all'\"\r\n              name=\"email\"\r\n              [(ngModel)]=\"email\"\r\n              p-required\r\n              [p-label]=\"literals.insertEmail\"\r\n              (p-change-model)=\"formModelChangesCheck(emailForm)\"\r\n            >\r\n            </po-email>\r\n\r\n            <po-input\r\n              *ngIf=\"type === 'sms'\"\r\n              name=\"sms\"\r\n              [(ngModel)]=\"phone\"\r\n              p-icon=\"po-icon-telephone\"\r\n              p-required\r\n              [p-label]=\"literals.insertPhone\"\r\n              [p-mask]=\"phoneMask\"\r\n              [p-maxlength]=\"maxLength\"\r\n              [p-minlength]=\"minLength\"\r\n              (p-change-model)=\"formModelChangesCheck(emailForm)\"\r\n            >\r\n            </po-input>\r\n          </div>\r\n\r\n          <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n            <po-modal-password-recovery-error-message\r\n              *ngIf=\"invalidEmail && control.dirty\"\r\n              [p-text]=\"type === 'sms' ? literals.phoneErrorMessagePhrase : literals.emailErrorMessagePhrase\"\r\n            >\r\n            </po-modal-password-recovery-error-message>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"po-modal-password-recovery-text po-md-12\">\r\n        {{ emailModalPhrases.secondPhrase }}\r\n        <span *ngIf=\"contactEmail\">\r\n          {{ literals.prepositionIn }}\r\n          <a class=\"po-modal-password-recovery-link\" href=\"mailto:{{ contactEmail }}\" target=\"_self\">\r\n            {{ contactEmail }}\r\n          </a>\r\n        </span>\r\n        {{ endpoint }}\r\n      </div>\r\n    </div>\r\n\r\n    <div #smsCodeModal *ngSwitchCase=\"'smsCode'\" class=\"po-modal-password-recovery-content po-row\">\r\n      <div class=\"po-modal-password-recovery-text po-md-12 po-mb-1\">{{ literals.sentSmsCodePhrase }}</div>\r\n      <div class=\"po-mb-2 po-md-12\">\r\n        <form #smsCodeForm=\"ngForm\">\r\n          <po-input\r\n            name=\"sms\"\r\n            [(ngModel)]=\"smsCode\"\r\n            p-maxlength=\"11\"\r\n            p-minlength=\"11\"\r\n            p-required\r\n            [p-label]=\"literals.insertCode\"\r\n            [p-mask]=\"codeMask\"\r\n            (p-change-model)=\"formModelChangesCheck(smsCodeForm)\"\r\n          >\r\n          </po-input>\r\n          <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n            <po-modal-password-recovery-error-message\r\n              *ngIf=\"invalidEmail\"\r\n              [p-text]=\"smsCodeErrorMessage || this.literals.smsCodeErrorMessagePhrase\"\r\n            >\r\n            </po-modal-password-recovery-error-message>\r\n            <po-modal-password-recovery-error-message *ngIf=\"showCustomCodeError\" [p-text]=\"codeError\">\r\n            </po-modal-password-recovery-error-message>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"po-modal-password-recovery-text po-md-12\">\r\n        {{ literals.sendAgainPhrase }}\r\n        <span class=\"po-modal-password-recovery-link\" (click)=\"resendSmsCode()\">{{ literals.sendAgain }}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div #confirmationModal *ngSwitchCase=\"'confirmation'\" class=\"po-modal-password-recovery-content po-row\">\r\n      <img class=\"po-modal-password-recovery-user-image po-mb-2\" src=\"./assets/images/email-sent.svg\" />\r\n      <div class=\"po-modal-password-recovery-text\">\r\n        {{ literals.emailSentConfirmationPhrase }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</po-modal>\r\n" }]
        }], function () { return [{ type: i1$1.Router }, { type: i2.PoI18nPipe }, { type: PoModalPasswordRecoveryService }, { type: i2.PoLanguageService }]; }, { emailForm: [{
                type: ViewChild,
                args: ['emailForm']
            }], recoveryModalElement: [{
                type: ViewChild,
                args: ['recoveryModal', { static: true }]
            }], smsCodeForm: [{
                type: ViewChild,
                args: ['smsCodeForm']
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-modal-password-recovery.
 */
class PoModalPasswordRecoveryModule {
}
PoModalPasswordRecoveryModule.ɵfac = function PoModalPasswordRecoveryModule_Factory(t) { return new (t || PoModalPasswordRecoveryModule)(); };
PoModalPasswordRecoveryModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoModalPasswordRecoveryModule });
PoModalPasswordRecoveryModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoI18nPipe, PoModalPasswordRecoveryService], imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalPasswordRecoveryModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule],
                    declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
                    exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
                    providers: [PoI18nPipe, PoModalPasswordRecoveryService]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoModalPasswordRecoveryModule, { declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent], imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule], exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent] }); })();

function PoPageBackgroundComponent_img_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "img", 12);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("po-page-background-hide-logo", ctx_r0.hideLogo);
        i0.ɵɵproperty("src", ctx_r0.logo, i0.ɵɵsanitizeUrl);
    }
}
function PoPageBackgroundComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 13)(1, "po-select", 14);
        i0.ɵɵlistener("ngModelChange", function PoPageBackgroundComponent_div_9_Template_po_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectedLanguageOption = $event); })("p-change", function PoPageBackgroundComponent_div_9_Template_po_select_p_change_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onChangeLanguage()); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r1.selectedLanguageOption)("p-options", ctx_r1.selectLanguageOptions);
    }
}
function PoPageBackgroundComponent_img_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "img", 15);
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("src", ctx_r2.secondaryLogo, i0.ɵɵsanitizeUrl);
    }
}
function PoPageBackgroundComponent_div_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵstyleProp("background-image", "url(" + ctx_r3.background + ")");
        i0.ɵɵproperty("ngClass", ctx_r3.background ? "po-page-login-highlight-image" : "po-page-login-highlight-image-off");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx_r3.highlightInfo);
    }
}
const _c0$8 = ["*"];
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para definição de cor de fundo e dos logotipos primário e secundário para os templates
 * de `po-page-login` e demais templates de login.
 */
class PoPageBackgroundComponent {
    constructor(poLanguageService) {
        this.poLanguageService = poLanguageService;
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao selecionar alguma opção no seletor de idiomas.
         * Para este evento será passado como parâmetro o valor de idioma selecionado.
         */
        this.selectedLanguage = new EventEmitter();
        this._showSelectLanguage = false;
    }
    /** Lista de idiomas para o combo box */
    set languagesList(value) {
        this._languagesList = value;
        this.setLanguageOptions();
    }
    get languagesList() {
        var _a;
        if ((_a = this._languagesList) === null || _a === void 0 ? void 0 : _a.length) {
            return this._languagesList;
        }
        return poLanguageDefault;
    }
    /** Caminho para a logomarca localizada na parte superior. */
    set logo(value) {
        this._logo = isTypeof(value, 'string') && value.trim() ? value : undefined;
    }
    get logo() {
        return this._logo;
    }
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada no rodapé.
     */
    set secondaryLogo(value) {
        this._secondaryLogo = isTypeof(value, 'string') && value.trim() ? value : undefined;
    }
    get secondaryLogo() {
        return this._secondaryLogo;
    }
    /** Define se o seletor de idiomas deve ser exibido. */
    set showSelectLanguage(showSelectLanguage) {
        this._showSelectLanguage = convertToBoolean(showSelectLanguage);
    }
    get showSelectLanguage() {
        return this._showSelectLanguage;
    }
    ngOnInit() {
        this.selectedLanguageOption = this.initialSelectLanguage || this.poLanguageService.getShortLanguage();
    }
    onChangeLanguage() {
        this.selectedLanguage.emit(this.selectedLanguageOption);
    }
    get selectLanguageOptions() {
        return this._selectLanguageOptions;
    }
    setLanguageOptions() {
        this._selectLanguageOptions = this.languagesList.map(language => ({
            label: language.description,
            value: language.language
        }));
    }
}
PoPageBackgroundComponent.ɵfac = function PoPageBackgroundComponent_Factory(t) { return new (t || PoPageBackgroundComponent)(i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageBackgroundComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBackgroundComponent, selectors: [["po-page-background"]], inputs: { background: ["p-background", "background"], initialSelectLanguage: ["p-initial-language", "initialSelectLanguage"], hideLogo: ["p-hide-logo", "hideLogo"], highlightInfo: ["p-highlight-info", "highlightInfo"], languagesList: ["p-languages", "languagesList"], logo: ["p-logo", "logo"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], showSelectLanguage: ["p-show-select-language", "showSelectLanguage"] }, outputs: { selectedLanguage: "p-selected-language" }, ngContentSelectors: _c0$8, decls: 13, vars: 5, consts: [[1, "po-page-login-container"], [1, "po-page-login-panel"], ["class", "po-page-background-main-logo", "alt", "main-logo", 3, "po-page-background-hide-logo", "src", 4, "ngIf"], [1, "po-page-login-body"], [1, "po-page-login-panel-content"], [1, "po-page-background-footer", "po-sm-12"], [1, "po-page-background-footer-mobile-only"], [1, "po-page-background-footer-content"], ["class", "po-page-background-footer-select", 4, "ngIf"], [1, "po-page-background-secondary-logo", 3, "ngClass"], ["class", "po-page-background-secondary-logo-image", "alt", "secondary-logo", 3, "src", 4, "ngIf"], [3, "ngClass", "background-image", 4, "ngIf"], ["alt", "main-logo", 1, "po-page-background-main-logo", 3, "src"], [1, "po-page-background-footer-select"], ["name", "selectedLanguageOption", 3, "ngModel", "p-options", "ngModelChange", "p-change"], ["alt", "secondary-logo", 1, "po-page-background-secondary-logo-image", 3, "src"], [3, "ngClass"], [1, "po-page-login-highlight-text"], [1, "po-font-display"]], template: function PoPageBackgroundComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, PoPageBackgroundComponent_img_2_Template, 1, 3, "img", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelement(7, "po-divider", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵtemplate(9, PoPageBackgroundComponent_div_9_Template, 2, 2, "div", 8);
            i0.ɵɵelementStart(10, "div", 9);
            i0.ɵɵtemplate(11, PoPageBackgroundComponent_img_11_Template, 1, 1, "img", 10);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(12, PoPageBackgroundComponent_div_12_Template, 4, 4, "div", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.logo);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.showSelectLanguage);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.showSelectLanguage ? "po-page-background-secondary-logo-right" : "po-page-background-secondary-logo-centered");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.secondaryLogo);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.background);
        }
    }, dependencies: [i4.NgClass, i4.NgIf, i5.NgControlStatus, i5.NgModel, i2.PoDividerComponent, i2.PoSelectComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBackgroundComponent, [{
            type: Component,
            args: [{ selector: 'po-page-background', template: "<div class=\"po-page-login-container\">\r\n  <div class=\"po-page-login-panel\">\r\n    <img\r\n      *ngIf=\"logo\"\r\n      class=\"po-page-background-main-logo\"\r\n      [class.po-page-background-hide-logo]=\"hideLogo\"\r\n      alt=\"main-logo\"\r\n      [src]=\"logo\"\r\n    />\r\n\r\n    <div class=\"po-page-login-body\">\r\n      <div class=\"po-page-login-panel-content\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <div class=\"po-page-background-footer po-sm-12\">\r\n      <po-divider class=\"po-page-background-footer-mobile-only\"></po-divider>\r\n\r\n      <div class=\"po-page-background-footer-content\">\r\n        <div *ngIf=\"showSelectLanguage\" class=\"po-page-background-footer-select\">\r\n          <po-select\r\n            name=\"selectedLanguageOption\"\r\n            [(ngModel)]=\"selectedLanguageOption\"\r\n            [p-options]=\"selectLanguageOptions\"\r\n            (p-change)=\"onChangeLanguage()\"\r\n          >\r\n          </po-select>\r\n        </div>\r\n\r\n        <div\r\n          class=\"po-page-background-secondary-logo\"\r\n          [ngClass]=\"\r\n            showSelectLanguage\r\n              ? 'po-page-background-secondary-logo-right'\r\n              : 'po-page-background-secondary-logo-centered'\r\n          \"\r\n        >\r\n          <img\r\n            *ngIf=\"secondaryLogo\"\r\n            class=\"po-page-background-secondary-logo-image\"\r\n            alt=\"secondary-logo\"\r\n            [src]=\"secondaryLogo\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    *ngIf=\"background\"\r\n    [ngClass]=\"background ? 'po-page-login-highlight-image' : 'po-page-login-highlight-image-off'\"\r\n    [style.background-image]=\"'url(' + background + ')'\"\r\n  >\r\n    <div class=\"po-page-login-highlight-text\">\r\n      <div class=\"po-font-display\">{{ highlightInfo }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }], function () { return [{ type: i2.PoLanguageService }]; }, { background: [{
                type: Input,
                args: ['p-background']
            }], initialSelectLanguage: [{
                type: Input,
                args: ['p-initial-language']
            }], hideLogo: [{
                type: Input,
                args: ['p-hide-logo']
            }], highlightInfo: [{
                type: Input,
                args: ['p-highlight-info']
            }], selectedLanguage: [{
                type: Output,
                args: ['p-selected-language']
            }], languagesList: [{
                type: Input,
                args: ['p-languages']
            }], logo: [{
                type: Input,
                args: ['p-logo']
            }], secondaryLogo: [{
                type: Input,
                args: ['p-secondary-logo']
            }], showSelectLanguage: [{
                type: Input,
                args: ['p-show-select-language']
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-page-background.
 */
class PoPageBackgroundModule {
}
PoPageBackgroundModule.ɵfac = function PoPageBackgroundModule_Factory(t) { return new (t || PoPageBackgroundModule)(); };
PoPageBackgroundModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageBackgroundModule });
PoPageBackgroundModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBackgroundModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule],
                    declarations: [PoPageBackgroundComponent],
                    exports: [PoPageBackgroundComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageBackgroundModule, { declarations: [PoPageBackgroundComponent], imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule], exports: [PoPageBackgroundComponent] }); })();

/**
 * @usedBy PoPageBlockedUserComponent
 *
 * @description
 *
 * *Enum* para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.
 */
var PoPageBlockedUserReason;
(function (PoPageBlockedUserReason) {
    /** Sem definição; a tela exibirá conteúdo de bloqueio genérico. */
    PoPageBlockedUserReason["None"] = "none";
    /** Definição para tentativas de acesso esgotadas. */
    PoPageBlockedUserReason["ExceededAttempts"] = "exceededAttempts";
    /** Definição para senha expirada. */
    PoPageBlockedUserReason["ExpiredPassword"] = "expiredPassword";
})(PoPageBlockedUserReason || (PoPageBlockedUserReason = {}));

const PoPageBlockedUserReasonDefault = PoPageBlockedUserReason.None;
const PoPageBlockedUserParamsDefault = { attempts: 5, days: 90, hours: 24 };
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
class PoPageBlockedUserBaseComponent {
    constructor() {
        this._params = Object.assign({}, PoPageBlockedUserParamsDefault);
        this._reason = PoPageBlockedUserReason.None;
        this._urlBack = '/';
    }
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
    set params(value) {
        if (value instanceof Object) {
            const keys = Object.keys(value);
            const newParams = Object.assign({}, PoPageBlockedUserParamsDefault);
            keys.forEach(key => {
                newParams[key] = value[key];
            });
            this._params = newParams;
        }
        else {
            this._params = Object.assign({}, PoPageBlockedUserParamsDefault);
        }
    }
    get params() {
        return this._params;
    }
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
    set reason(value) {
        this._reason = Object.values(PoPageBlockedUserReason).includes(value)
            ? value
            : PoPageBlockedUserReasonDefault;
    }
    get reason() {
        return this._reason;
    }
    /**
     * @optional
     *
     * @description
     *
     * URL para a ação de retorno da página.
     *
     * @default `/`
     */
    set urlBack(url) {
        this._urlBack = url;
    }
    get urlBack() {
        return this._urlBack;
    }
}
PoPageBlockedUserBaseComponent.ɵfac = function PoPageBlockedUserBaseComponent_Factory(t) { return new (t || PoPageBlockedUserBaseComponent)(); };
PoPageBlockedUserBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageBlockedUserBaseComponent, inputs: { contactEmail: ["p-contact-email", "contactEmail"], contactPhone: ["p-contact-phone", "contactPhone"], logo: ["p-logo", "logo"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], params: ["p-params", "params"], reason: ["p-reason", "reason"], urlBack: ["p-url-back", "urlBack"] } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserBaseComponent, [{
            type: Directive
        }], null, { contactEmail: [{
                type: Input,
                args: ['p-contact-email']
            }], contactPhone: [{
                type: Input,
                args: ['p-contact-phone']
            }], logo: [{
                type: Input,
                args: ['p-logo']
            }], secondaryLogo: [{
                type: Input,
                args: ['p-secondary-logo']
            }], params: [{
                type: Input,
                args: ['p-params']
            }], reason: [{
                type: Input,
                args: ['p-reason']
            }], urlBack: [{
                type: Input,
                args: ['p-url-back']
            }] });
})();

const _c0$7 = ["contactGroup"];
const _c1$5 = ["mailItem"];
const _c2$3 = ["phoneItem"];
const poPageBlockedUserContactItemMargin = 16;
class PoPageBlockedUserContactsComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.overflowItem = true;
    }
    set email(value) {
        this._email = value;
        this.checkContactItemWidth();
    }
    get email() {
        return this._email;
    }
    set phone(value) {
        this._phone = value;
        this.checkContactItemWidth();
    }
    get phone() {
        return this._phone;
    }
    checkContactItemWidth() {
        this.overflowItem = true;
        if (this.phone && this.email) {
            this.changeDetector.detectChanges();
            const phoneWidth = this.phoneItem.nativeElement.offsetWidth;
            const mailWidth = this.mailItem.nativeElement.offsetWidth;
            const contactGroupHalfWidth = this.contactGroup.nativeElement.offsetWidth / 2 - poPageBlockedUserContactItemMargin;
            this.overflowItem =
                phoneWidth > contactGroupHalfWidth || mailWidth > contactGroupHalfWidth - poPageBlockedUserContactItemMargin;
        }
    }
}
PoPageBlockedUserContactsComponent.ɵfac = function PoPageBlockedUserContactsComponent_Factory(t) { return new (t || PoPageBlockedUserContactsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPageBlockedUserContactsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBlockedUserContactsComponent, selectors: [["po-page-blocked-user-contacts"]], viewQuery: function PoPageBlockedUserContactsComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$7, 7);
            i0.ɵɵviewQuery(_c1$5, 7);
            i0.ɵɵviewQuery(_c2$3, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contactGroup = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mailItem = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.phoneItem = _t.first);
        }
    }, inputs: { email: ["p-email", "email"], phone: ["p-phone", "phone"] }, decls: 16, vars: 14, consts: [[1, "po-page-blocked-user-contact-group", "po-row", "po-mb-3"], ["contactGroup", ""], [1, "po-page-blocked-user-contact-item", 3, "ngClass"], ["target", "_self", 1, "po-page-blocked-user-link", "po-clickable", 3, "href"], [1, "po-page-blocked-user-contact-group-item"], [1, "po-page-blocked-user-contact-icon", "po-icon", "po-icon-telephone", "po-pr-1"], [1, "po-page-blocked-user-contact-text", "po-font-text"], ["phoneItem", ""], [1, "po-page-blocked-user-contact-item", "po-page-blocked-user-contact-mail", 3, "ngClass"], [1, "po-page-blocked-user-contact-icon", "po-icon", "po-icon-mail", "po-pr-1"], ["mailItem", ""]], template: function PoPageBlockedUserContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
            i0.ɵɵelement(5, "span", 5);
            i0.ɵɵelementStart(6, "div", 6, 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(9, "div", 8)(10, "a", 3)(11, "div", 4);
            i0.ɵɵelement(12, "span", 9);
            i0.ɵɵelementStart(13, "div", 6, 10);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("po-invisible", !ctx.phone);
            i0.ɵɵproperty("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
            i0.ɵɵpropertyInterpolate1("href", "tel:", ctx.phone, "", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.phone);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("po-invisible", !ctx.email);
            i0.ɵɵproperty("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
            i0.ɵɵpropertyInterpolate1("href", "mailto:", ctx.email, "", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.email);
        }
    }, dependencies: [i4.NgClass], encapsulation: 2, changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserContactsComponent, [{
            type: Component,
            args: [{ selector: 'po-page-blocked-user-contacts', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #contactGroup class=\"po-page-blocked-user-contact-group po-row po-mb-3\">\r\n  <div\r\n    class=\"po-page-blocked-user-contact-item\"\r\n    [class.po-invisible]=\"!phone\"\r\n    [ngClass]=\"overflowItem ? 'po-md-12' : 'po-md-6'\"\r\n  >\r\n    <a\r\n      class=\"po-page-blocked-user-link po-clickable\"\r\n      [class.po-page-blocked-user-contact-content-inline]=\"overflowItem\"\r\n      href=\"tel:{{ phone }}\"\r\n      target=\"_self\"\r\n    >\r\n      <div class=\"po-page-blocked-user-contact-group-item\">\r\n        <span class=\"po-page-blocked-user-contact-icon po-icon po-icon-telephone po-pr-1\"></span>\r\n        <div #phoneItem class=\"po-page-blocked-user-contact-text po-font-text\">{{ phone }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div\r\n    class=\"po-page-blocked-user-contact-item po-page-blocked-user-contact-mail\"\r\n    [class.po-invisible]=\"!email\"\r\n    [ngClass]=\"overflowItem ? 'po-md-12' : 'po-md-6'\"\r\n  >\r\n    <a\r\n      class=\"po-page-blocked-user-link po-clickable\"\r\n      [class.po-page-blocked-user-contact-content-inline]=\"overflowItem\"\r\n      href=\"mailto:{{ email }}\"\r\n      target=\"_self\"\r\n    >\r\n      <div class=\"po-page-blocked-user-contact-group-item\">\r\n        <span class=\"po-page-blocked-user-contact-icon po-icon po-icon-mail po-pr-1\"></span>\r\n        <div #mailItem class=\"po-page-blocked-user-contact-text po-font-text\">{{ email }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n" }]
        }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { contactGroup: [{
                type: ViewChild,
                args: ['contactGroup', { static: true }]
            }], mailItem: [{
                type: ViewChild,
                args: ['mailItem', { static: true }]
            }], phoneItem: [{
                type: ViewChild,
                args: ['phoneItem', { static: true }]
            }], email: [{
                type: Input,
                args: ['p-email']
            }], phone: [{
                type: Input,
                args: ['p-phone']
            }] });
})();

const poPageBlockedUserLiterals = {
    none: {
        pt: {
            title: 'Opa!',
            firstPhrase: 'Tivemos que bloquear essa tela temporariamente.',
            secondPhrase: 'Mas não se preocupe! Basta fazer seu login novamente.'
        },
        en: {
            title: 'Oops!',
            firstPhrase: 'We had to temporarily block this screen.',
            secondPhrase: 'But do not worry! Just sign in again.'
        },
        es: {
            title: 'Opa!',
            firstPhrase: 'Tuvimos que bloquear esta pantalla temporalmente.',
            secondPhrase: '¡Pero no se preocupe! Sólo tienes que iniciar sesión de nuevo.'
        },
        ru: {
            title: 'Ой!',
            firstPhrase: 'Нам пришлось временно заблокировать этот раздел.',
            secondPhrase: 'Но не волнуйтесь! Просто войдите в систему еще раз.'
        }
    },
    exceededAttempts: {
        pt: {
            title: 'Opa!',
            firstPhrase: `Para sua segurança, após {0} tentativa(s) de senha seu usuário fica bloqueado e não pode ser acessado em {1} hora(s) :( `,
            secondPhrase: 'Isso é para evitar que hackers invadam sua conta.',
            thirdPhrase: 'Mas não se preocupe! Se você for o dono da conta e apenas esqueceu sua senha, basta entrar em contato com o suporte.'
        },
        en: {
            title: 'Oops!',
            firstPhrase: `For your security, after {0} attempt(s) of password
        your user gets blocked and can not be accessed in {1} hour(s) :(`,
            secondPhrase: 'This is to prevent hackers from hacking into your account.',
            thirdPhrase: 'But do not worry! If you are the owner of the account and just forgot your password, just contact support.'
        },
        es: {
            title: 'Opa!',
            firstPhrase: `Para su seguridad, después de {0} intento(s) de contraseña
        su usuario queda bloqueado y no puede ser accedido en {1} hora(s) :(`,
            secondPhrase: 'Esto es para evitar que los hackers invadan su cuenta.',
            thirdPhrase: `¡Pero no se preocupe! Si usted es el dueño de la cuenta
        y acaba de olvidar su contraseña, simplemente póngase en contacto con el soporte.`
        },
        ru: {
            title: 'Ой!',
            firstPhrase: 'Для вашей безопасности, после {0} попыток ввода пароля\r\nваш пользователь блокируется и не сможет авторизоваться в течение {1} часа(ов) :(',
            secondPhrase: 'Это делается для того, чтобы хакеры не могли взломать ваш аккаунт.',
            thirdPhrase: 'Но не волнуйтесь! Если вы являетесь владельцем учетной записи и просто забыли свой пароль, обратитесь в службу поддержки.'
        }
    },
    expiredPassword: {
        pt: {
            title: 'Opa! Sua senha expirou',
            firstPhrase: `A cada {0} dia(s) é preciso criar uma nova senha por questão de segurança. Após esses {0} dia(s) seu acesso é bloqueado :(`,
            secondPhrase: 'Mas não se preocupe! Basta entrar em contato com o administrador do sistema.'
        },
        en: {
            title: 'Oops! Your Password has expired',
            firstPhrase: `Every {0} day(s) you need to create a new password for security reasons.
        After these {0} day(s) your access is blocked :(`,
            secondPhrase: 'But do not worry! Just contact your system administrator.'
        },
        es: {
            title: 'Opa! Su contraseña ha caducado',
            firstPhrase: `Cada {0} día(s) es necesario crear una nueva contraseña por razones de seguridad.
        Después de estos {0} día(s) su acceso está bloqueado :(`,
            secondPhrase: '¡Pero no se preocupe! Sólo tienes que ponerse en contacto con el administrador del sistema.'
        },
        ru: {
            title: 'Ой! Срок действия вашего пароля истек',
            firstPhrase: 'Каждые {0} дней вам необходимо создавать новый пароль в целях безопасности.\r\nПосле {0} дней ваш доступ будет заблокирован :(',
            secondPhrase: 'Но не волнуйтесь! Просто обратитесь к своему системному администратору.'
        }
    }
};

function PoPageBlockedUserReasonComponent_div_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 6);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.literals == null ? null : ctx_r0.literals.thirdPhrase);
    }
}
class PoPageBlockedUserReasonComponent {
    constructor(changeDetector, languageService) {
        this.changeDetector = changeDetector;
        this.language = languageService.getShortLanguage();
    }
    ngOnChanges(changes) {
        if (changes.reason || changes.params) {
            this.getLiterals();
        }
    }
    ngOnInit() {
        this.getLiterals();
    }
    getImageByReasonType() {
        let reasonImage;
        switch (this.reason) {
            case 'none': {
                reasonImage = 'big-lock';
                break;
            }
            case 'exceededAttempts': {
                reasonImage = 'blocked-user';
                break;
            }
            case 'expiredPassword': {
                reasonImage = 'expired';
                break;
            }
        }
        return `./assets/images/${reasonImage}.svg`;
    }
    getParams() {
        this.literalParams =
            this.reason === 'expiredPassword'
                ? [this.params.days, this.params.days]
                : [this.params.attempts, this.params.hours];
    }
    getLiterals() {
        this.getParams();
        this.literals = Object.assign(Object.assign({}, poPageBlockedUserLiterals[this.reason][poLocaleDefault]), poPageBlockedUserLiterals[this.reason][this.language]);
        this.changeDetector.detectChanges();
    }
}
PoPageBlockedUserReasonComponent.ɵfac = function PoPageBlockedUserReasonComponent_Factory(t) { return new (t || PoPageBlockedUserReasonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageBlockedUserReasonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBlockedUserReasonComponent, selectors: [["po-page-blocked-user-reason"]], inputs: { params: ["p-params", "params"], reason: ["p-reason", "reason"] }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 8, consts: [[1, "po-page-blocked-user-reason-content"], [1, "po-page-blocked-user-image", "po-mb-3", 3, "src"], [1, "po-page-blocked-user-header", "po-mb-md-3", "po-row"], [1, "po-md-12"], [1, "po-page-blocked-user-text", "po-font-text", "po-row"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12", "po-page-blocked-user-text-bold"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12"], ["class", "po-mb-sm-2 po-mb-md-3 po-md-12", 4, "ngIf"]], template: function PoPageBlockedUserReasonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "img", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 4)(6, "div", 5);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "poI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, PoPageBlockedUserReasonComponent_div_11_Template, 2, 1, "div", 7);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx.getImageByReasonType(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.literals == null ? null : ctx.literals.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(8, 5, ctx.literals == null ? null : ctx.literals.firstPhrase, ctx.literalParams), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.literals == null ? null : ctx.literals.secondPhrase);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.literals == null ? null : ctx.literals.thirdPhrase);
        }
    }, dependencies: [i4.NgIf, i2.PoI18nPipe], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserReasonComponent, [{
            type: Component,
            args: [{ selector: 'po-page-blocked-user-reason', template: "<div class=\"po-page-blocked-user-reason-content\">\r\n  <img class=\"po-page-blocked-user-image po-mb-3\" [src]=\"getImageByReasonType()\" />\r\n  <div class=\"po-page-blocked-user-header po-mb-md-3 po-row\">\r\n    <div class=\"po-md-12\">{{ literals?.title }}</div>\r\n  </div>\r\n  <div class=\"po-page-blocked-user-text po-font-text po-row\">\r\n    <div class=\"po-mb-sm-2 po-mb-md-3 po-md-12 po-page-blocked-user-text-bold\">\r\n      {{ literals?.firstPhrase | poI18n: literalParams }}\r\n    </div>\r\n    <div class=\"po-mb-sm-2 po-mb-md-3 po-md-12\">{{ literals?.secondPhrase }}</div>\r\n    <div class=\"po-mb-sm-2 po-mb-md-3 po-md-12\" *ngIf=\"literals?.thirdPhrase\">{{ literals?.thirdPhrase }}</div>\r\n  </div>\r\n</div>\r\n" }]
        }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.PoLanguageService }]; }, { params: [{
                type: Input,
                args: ['p-params']
            }], reason: [{
                type: Input,
                args: ['p-reason']
            }] });
})();

const poPageBlockedUserButtonLiterals = {
    en: {
        primaryButton: 'Back to home screen'
    },
    es: {
        primaryButton: 'Volver al inicio'
    },
    pt: {
        primaryButton: 'Voltar para o início'
    },
    ru: {
        primaryButton: 'Перейти к началу страницы'
    }
};
/**
 * @docsExtends PoPageBlockedUserBaseComponent
 *
 * @example
 *
 * <example name="po-page-blocked-user-basic" title="PO Page Blocked User Basic">
 *  <file name="sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-labs" title="PO Page Blocked User Labs">
 *  <file name="sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-exceeded-attempts" title="PO Page Blocked User Exceeded Attempts">
 *  <file name="sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-expired-password" title="PO Page Blocked User Expired Password">
 *  <file name="sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"> </file>
 * </example>
 */
class PoPageBlockedUserComponent extends PoPageBlockedUserBaseComponent {
    constructor(activatedRoute, router, languageService) {
        super();
        this.activatedRoute = activatedRoute;
        this.router = router;
        const language = languageService.getShortLanguage();
        this.literals = Object.assign(Object.assign({}, poPageBlockedUserButtonLiterals[poLocaleDefault]), poPageBlockedUserButtonLiterals[language]);
    }
    ngOnInit() {
        this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
    }
    navigateTo(url) {
        isExternalLink(url) ? window.open(url) : this.router.navigate([url || '/']);
    }
    checkingForMetadataProperty(object, property) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            return object[property];
        }
    }
    checkingForRouteMetadata(data) {
        if (Object.keys(data).length !== 0) {
            this.contactEmail = this.checkingForMetadataProperty(data, 'contactEmail') || this.contactEmail;
            this.contactPhone = this.checkingForMetadataProperty(data, 'contactPhone') || this.contactPhone;
            this.reason = this.checkingForMetadataProperty(data, 'reason') || this.reason;
            this.urlBack = this.checkingForMetadataProperty(data, 'urlBack') || this.urlBack;
        }
    }
}
PoPageBlockedUserComponent.ɵfac = function PoPageBlockedUserComponent_Factory(t) { return new (t || PoPageBlockedUserComponent)(i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageBlockedUserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBlockedUserComponent, selectors: [["po-page-blocked-user"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 8, consts: [[1, "po-page-blocked-user-wrapper"], [1, "po-page-background-wrap"], [3, "p-hide-logo", "p-logo", "p-secondary-logo"], [3, "p-params", "p-reason"], [1, "po-page-blocked-user-mobile-bottom-alignment"], [3, "p-email", "p-phone"], [1, "po-row"], ["p-kind", "primary", 1, "po-lg-12", "po-sm-12", "po-page-blocked-user-button", 3, "p-label", "p-click"]], template: function PoPageBlockedUserComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "po-page-background", 2);
            i0.ɵɵelement(3, "po-page-blocked-user-reason", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "po-page-blocked-user-contacts", 5);
            i0.ɵɵelementStart(6, "div", 6)(7, "po-button", 7);
            i0.ɵɵlistener("p-click", function PoPageBlockedUserComponent_Template_po_button_p_click_7_listener() { return ctx.navigateTo(ctx.urlBack); });
            i0.ɵɵelementEnd()()()()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("p-hide-logo", true)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-params", ctx.params)("p-reason", ctx.reason);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("p-email", ctx.contactEmail)("p-phone", ctx.contactPhone);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("p-label", ctx.literals == null ? null : ctx.literals.primaryButton);
        }
    }, dependencies: [i2.PoButtonComponent, PoPageBackgroundComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserComponent, [{
            type: Component,
            args: [{ selector: 'po-page-blocked-user', template: "<div class=\"po-page-blocked-user-wrapper\">\r\n  <div class=\"po-page-background-wrap\">\r\n    <po-page-background [p-hide-logo]=\"true\" [p-logo]=\"logo\" [p-secondary-logo]=\"secondaryLogo\">\r\n      <po-page-blocked-user-reason [p-params]=\"params\" [p-reason]=\"reason\"> </po-page-blocked-user-reason>\r\n\r\n      <div class=\"po-page-blocked-user-mobile-bottom-alignment\">\r\n        <po-page-blocked-user-contacts [p-email]=\"contactEmail\" [p-phone]=\"contactPhone\">\r\n        </po-page-blocked-user-contacts>\r\n\r\n        <div class=\"po-row\">\r\n          <po-button\r\n            class=\"po-lg-12 po-sm-12 po-page-blocked-user-button\"\r\n            p-kind=\"primary\"\r\n            [p-label]=\"literals?.primaryButton\"\r\n            (p-click)=\"navigateTo(urlBack)\"\r\n          >\r\n          </po-button>\r\n        </div>\r\n      </div>\r\n    </po-page-background>\r\n  </div>\r\n</div>\r\n" }]
        }], function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i2.PoLanguageService }]; }, null);
})();

/**
 * @description
 *
 * Módulo do template do po-page-blocked-user.
 */
class PoPageBlockedUserModule {
}
PoPageBlockedUserModule.ɵfac = function PoPageBlockedUserModule_Factory(t) { return new (t || PoPageBlockedUserModule)(); };
PoPageBlockedUserModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageBlockedUserModule });
PoPageBlockedUserModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule],
                    declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
                    exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageBlockedUserModule, { declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent], imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule], exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent] }); })();

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
class PoPageChangePasswordBaseComponent {
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
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordBaseComponent, [{
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
            }] });
})();

const poPageChangePasswordLiterals = {
    en: {
        backButton: 'Back',
        confirmPassword: 'Confirm password',
        createNewPassword: 'Create new password',
        createNewPasswordPhrase: 'Protect your account with a personal password created by you',
        currentPassword: 'Current password',
        enterSystemButton: 'Enter the system',
        forgotPassword: 'Forgot your password?',
        newPassword: 'New password',
        passwordSuccessfullyCreated: 'Password successfully created!',
        passwordSuccessfullyUpdated: 'Password successfully updated!',
        requirements: 'Password requirements',
        safetyTips: 'Safety tips!',
        safetyTipsFirst: 'is used in other accounts;',
        safetyTipsPhrase: 'Avoid a password that:',
        safetyTipsSecond: 'has personal information like your name, nickname or family names;',
        safetyTipsThird: 'that uses obvious sequences like "123" or obvious words like "password";',
        saveButton: 'Save'
    },
    es: {
        backButton: 'Volver',
        confirmPassword: 'Confirmar seña',
        createNewPassword: 'Crear nueva contraseña',
        createNewPasswordPhrase: 'Proteger su cuenta con una contraseña personal creada por usted',
        currentPassword: 'Contraseña actual',
        enterSystemButton: 'Entrar en el sistema',
        forgotPassword: '¿Olvidaste tu contraseña?',
        newPassword: 'Nueva contraseña',
        passwordSuccessfullyCreated: 'Contraseña creada correctamente!',
        passwordSuccessfullyUpdated: 'Contraseña correctamente actualizada!',
        requirements: 'Requisitos de contraseña',
        safetyTips: 'Consejos de seguridad!',
        safetyTipsFirst: 'se utilice en otras cuentas;',
        safetyTipsPhrase: 'Evite una contraseña que:',
        safetyTipsSecond: 'utiliza información personal como su nombre, apellido o nombre de familia;',
        safetyTipsThird: 'utilice secuencias muy obvias como "1234" o "abcd" o palabras obvias como "contraseña";',
        saveButton: 'Guardar'
    },
    pt: {
        backButton: 'Voltar',
        confirmPassword: 'Confirmar senha',
        createNewPassword: 'Criar nova senha',
        createNewPasswordPhrase: 'Proteja sua conta com uma senha pessoal criada por você',
        currentPassword: 'Senha atual',
        enterSystemButton: 'Entrar no sistema',
        forgotPassword: 'Esqueceu sua senha?',
        newPassword: 'Nova senha',
        passwordSuccessfullyCreated: 'Senha criada com sucesso!',
        passwordSuccessfullyUpdated: 'Senha alterada com sucesso!',
        requirements: 'Requisitos de senha',
        safetyTips: 'Dicas de segurança!',
        safetyTipsFirst: 'seja usada em outras contas;',
        safetyTipsPhrase: 'Evite uma senha que:',
        safetyTipsSecond: 'usa informações pessoais como seu nome, apelido ou nome de familiares;',
        safetyTipsThird: 'use sequências muito óbvias como "1234" ou "abcd" ou palavras óbvias como “senha”;',
        saveButton: 'Salvar'
    },
    ru: {
        backButton: 'возвращение',
        confirmPassword: 'Подтвердите пароль',
        createNewPassword: 'Создать новый пароль',
        createNewPasswordPhrase: 'Защитите свой аккаунт с помощью личного пароля.',
        currentPassword: 'Текущий пароль',
        enterSystemButton: 'Вход в систему',
        forgotPassword: 'Забыли пароль?',
        newPassword: 'Новый пароль',
        passwordSuccessfullyCreated: 'Пароль успешно создан!',
        passwordSuccessfullyUpdated: 'Пароль успешно изменен!',
        requirements: 'Требования к паролю',
        safetyTips: 'Советы по безопасности!',
        safetyTipsFirst: 'использоваться на других счетах;',
        safetyTipsPhrase: 'Избегайте пароля, который:',
        safetyTipsSecond: 'использует личную информацию, такую ​​как ваше имя, фамилию или фамилию;',
        safetyTipsThird: 'используйте очень очевидные строки, такие как "1234" или "abcd", или такие очевидные слова, как "пароль";',
        saveButton: 'экономить'
    }
};

class PoPageChangePasswordService {
    constructor(http) {
        this.http = http;
    }
    post(url, item) {
        return this.http.post(url, item, { observe: 'response' });
    }
}
PoPageChangePasswordService.ɵfac = function PoPageChangePasswordService_Factory(t) { return new (t || PoPageChangePasswordService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageChangePasswordService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageChangePasswordService, factory: PoPageChangePasswordService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordService, [{
            type: Injectable
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

const _c0$6 = ["pageChangePassword"];
const _c1$4 = ["passwordForm"];
function PoPageChangePasswordComponent_div_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div")(1, "po-password", 30);
        i0.ɵɵlistener("ngModelChange", function PoPageChangePasswordComponent_div_13_Template_po_password_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.currentPassword = $event); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r2.currentPassword)("p-label", ctx_r2.literals.currentPassword);
    }
}
function PoPageChangePasswordComponent_div_14_a_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 35);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("routerLink", ctx_r8.recovery);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r8.literals.forgotPassword, " ");
    }
}
function PoPageChangePasswordComponent_div_14_a_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 36);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r9 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("href", ctx_r9.recovery, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r9.literals.forgotPassword, " ");
    }
}
function PoPageChangePasswordComponent_div_14_a_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 37);
        i0.ɵɵlistener("click", function PoPageChangePasswordComponent_div_14_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onForgotPasswordClick(ctx_r11.recovery)); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r10.literals.forgotPassword, " ");
    }
}
function PoPageChangePasswordComponent_div_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 31);
        i0.ɵɵtemplate(1, PoPageChangePasswordComponent_div_14_a_1_Template, 2, 2, "a", 32);
        i0.ɵɵtemplate(2, PoPageChangePasswordComponent_div_14_a_2_Template, 2, 2, "a", 33);
        i0.ɵɵtemplate(3, PoPageChangePasswordComponent_div_14_a_3_Template, 2, 1, "a", 34);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r3.recoveryUrlType === "internalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r3.recoveryUrlType === "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r3.recoveryUrlType);
    }
}
function PoPageChangePasswordComponent_div_19_li_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 40);
        i0.ɵɵelement(1, "span", 43);
        i0.ɵɵelementStart(2, "p", 44);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const requirement_r14 = ctx.$implicit;
        const ctx_r13 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx_r13.validateRequirement(requirement_r14) ? "po-icon-ok po-page-change-password-required-ok" : "po-icon-minus po-page-change-password-required-minus");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", requirement_r14.requirement, " ");
    }
}
function PoPageChangePasswordComponent_div_19_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 38)(1, "po-container")(2, "ul", 39)(3, "li", 40)(4, "p", 41);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, PoPageChangePasswordComponent_div_19_li_6_Template, 4, 2, "li", 42);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx_r4.literals == null ? null : ctx_r4.literals.requirements, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r4.requirements);
    }
}
function PoPageChangePasswordComponent_po_button_38_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-button", 45);
        i0.ɵɵlistener("p-click", function PoPageChangePasswordComponent_po_button_38_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.navigateTo(ctx_r15.urlBack)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-label", ctx_r5.literals.backButton);
    }
}
const _c2$2 = function (a0) { return { "po-offset-md-3 po-offset-lg-3 po-offset-xl-3": a0 }; };
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
class PoPageChangePasswordComponent extends PoPageChangePasswordBaseComponent {
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
        this.literals = Object.assign(Object.assign({}, poPageChangePasswordLiterals[poLocaleDefault]), poPageChangePasswordLiterals[language]);
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
PoPageChangePasswordComponent.ɵfac = function PoPageChangePasswordComponent_Factory(t) { return new (t || PoPageChangePasswordComponent)(i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(PoPageChangePasswordService), i0.ɵɵdirectiveInject(i2.PoComponentInjectorService), i0.ɵɵdirectiveInject(i2.PoLanguageService), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
PoPageChangePasswordComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageChangePasswordComponent, selectors: [["po-page-change-password"]], viewQuery: function PoPageChangePasswordComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(PoModalComponent, 7);
            i0.ɵɵviewQuery(_c0$6, 7, ViewContainerRef);
            i0.ɵɵviewQuery(_c1$4, 7, NgForm);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageChangePassword = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.passwordForm = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], decls: 43, vars: 25, consts: [[1, "po-page-change-password-wrapper"], ["pageChangePassword", ""], [1, "po-page-change-password-container"], [1, "po-page-change-password", 3, "p-logo", "p-secondary-logo"], [1, "po-page-blocked-user-header", "po-row"], [1, "po-md-12"], [1, "po-md-12", "po-text-center", "po-font-text"], ["passwordForm", "ngForm"], [1, "po-row", "po-mt-3", "po-mt-sm-1"], [1, "po-md-6", 3, "ngClass"], [4, "ngIf"], ["class", "po-text-center po-mb-sm-1 po-mb-2", 4, "ngIf"], ["name", "newPassword", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model"], ["name", "confirmPassword", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model"], ["class", "po-md-6 po-page-change-password-required-container", 4, "ngIf"], [1, "po-sm-12"], [1, "po-page-change-password-tips", "po-row"], [1, "po-md-2", "po-mr-3"], ["alt", "Blocked user image", "src", "./assets/images/big-lock.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], [1, "po-md-9", "po-page-change-password-tips-text"], [1, "po-font-text-bold", "po-pb-1"], [1, "po-font-text-small"], [1, "po-row", "po-pb-1"], [1, "po-page-change-password-buttons", "po-row"], [1, "po-sm-12", "po-mobile-only"], ["class", "po-sm-6 po-mb-sm-1", 3, "p-label", "p-click", 4, "ngIf"], ["p-kind", "primary", 3, "ngClass", "p-disabled", "p-label", "p-click"], ["p-hide-close", "", "p-size", "auto", 3, "p-primary-action", "p-title"], [1, "po-text-center"], ["alt", "Blocked user image", "src", "./assets/images/success.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], ["name", "currentPassword", "p-required", "", 3, "ngModel", "p-label", "ngModelChange"], [1, "po-text-center", "po-mb-sm-1", "po-mb-2"], ["class", "po-font-text-bold po-page-change-password-forgot-password", 3, "routerLink", 4, "ngIf"], ["class", "po-font-text-bold po-page-change-password-forgot-password", 3, "href", 4, "ngIf"], ["class", "po-font-text-bold po-page-change-password-forgot-password po-clickable", 3, "click", 4, "ngIf"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "routerLink"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "href"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", "po-clickable", 3, "click"], [1, "po-md-6", "po-page-change-password-required-container"], [1, "po-page-change-password-required-list"], [1, "po-page-change-password-required-item"], [1, "po-mb-1", "po-font-text-bold", "po-page-change-password-required-title"], ["class", "po-page-change-password-required-item", 4, "ngFor", "ngForOf"], [1, "po-icon", "po-page-change-password-required-icon", 3, "ngClass"], [1, "po-page-change-password-required-text", "po-font-text"], [1, "po-sm-6", "po-mb-sm-1", 3, "p-label", "p-click"]], template: function PoPageChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(10);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.literals.createNewPassword);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.literals.createNewPasswordPhrase, " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c2$2, !ctx.showRequirements));
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
        }
    }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i1$1.RouterLinkWithHref, i2.PoButtonComponent, i2.PoContainerComponent, i2.PoDividerComponent, i2.PoPasswordComponent, i2.PoModalComponent, PoPageBackgroundComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordComponent, [{
            type: Component,
            args: [{ selector: 'po-page-change-password', template: "<div class=\"po-page-change-password-wrapper\" #pageChangePassword>\r\n  <div class=\"po-page-change-password-container\">\r\n    <po-page-background class=\"po-page-change-password\" [p-logo]=\"logo\" [p-secondary-logo]=\"secondaryLogo\">\r\n      <div class=\"po-page-blocked-user-header po-row\">\r\n        <div class=\"po-md-12\">{{ literals.createNewPassword }}</div>\r\n        <div class=\"po-md-12 po-text-center po-font-text\">\r\n          {{ literals.createNewPasswordPhrase }}\r\n        </div>\r\n      </div>\r\n\r\n      <form #passwordForm=\"ngForm\">\r\n        <div class=\"po-row po-mt-3 po-mt-sm-1\">\r\n          <div class=\"po-md-6\" [ngClass]=\"{ 'po-offset-md-3 po-offset-lg-3 po-offset-xl-3': !showRequirements }\">\r\n            <div *ngIf=\"!hideCurrentPassword\">\r\n              <po-password\r\n                name=\"currentPassword\"\r\n                [(ngModel)]=\"currentPassword\"\r\n                p-required\r\n                [p-label]=\"literals.currentPassword\"\r\n              >\r\n              </po-password>\r\n            </div>\r\n            <div *ngIf=\"!hideCurrentPassword && recovery\" class=\"po-text-center po-mb-sm-1 po-mb-2\">\r\n              <a\r\n                *ngIf=\"recoveryUrlType === 'internalLink'\"\r\n                class=\"po-font-text-bold po-page-change-password-forgot-password\"\r\n                [routerLink]=\"recovery\"\r\n              >\r\n                {{ literals.forgotPassword }}\r\n              </a>\r\n              <a\r\n                *ngIf=\"recoveryUrlType === 'externalLink'\"\r\n                class=\"po-font-text-bold po-page-change-password-forgot-password\"\r\n                [href]=\"recovery\"\r\n              >\r\n                {{ literals.forgotPassword }}\r\n              </a>\r\n              <a\r\n                *ngIf=\"!recoveryUrlType\"\r\n                class=\"po-font-text-bold po-page-change-password-forgot-password po-clickable\"\r\n                (click)=\"onForgotPasswordClick(recovery)\"\r\n              >\r\n                {{ literals.forgotPassword }}\r\n              </a>\r\n            </div>\r\n            <div>\r\n              <po-password\r\n                name=\"newPassword\"\r\n                [(ngModel)]=\"newPassword\"\r\n                p-required\r\n                [p-label]=\"literals.newPassword\"\r\n                (p-change-model)=\"validatePassword()\"\r\n              >\r\n              </po-password>\r\n            </div>\r\n            <div>\r\n              <po-password\r\n                name=\"confirmPassword\"\r\n                [(ngModel)]=\"confirmPassword\"\r\n                p-required\r\n                [p-label]=\"literals.confirmPassword\"\r\n                (p-change-model)=\"validatePassword()\"\r\n              >\r\n              </po-password>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showRequirements\" class=\"po-md-6 po-page-change-password-required-container\">\r\n            <po-container>\r\n              <ul class=\"po-page-change-password-required-list\">\r\n                <li class=\"po-page-change-password-required-item\">\r\n                  <p class=\"po-mb-1 po-font-text-bold po-page-change-password-required-title\">\r\n                    {{ literals?.requirements }}\r\n                  </p>\r\n                </li>\r\n                <li *ngFor=\"let requirement of requirements\" class=\"po-page-change-password-required-item\">\r\n                  <span\r\n                    class=\"po-icon po-page-change-password-required-icon\"\r\n                    [ngClass]=\"\r\n                      validateRequirement(requirement)\r\n                        ? 'po-icon-ok po-page-change-password-required-ok'\r\n                        : 'po-icon-minus po-page-change-password-required-minus'\r\n                    \"\r\n                  >\r\n                  </span>\r\n                  <p class=\"po-page-change-password-required-text po-font-text\">\r\n                    {{ requirement.requirement }}\r\n                  </p>\r\n                </li>\r\n              </ul>\r\n            </po-container>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <po-divider class=\"po-sm-12\"></po-divider>\r\n\r\n      <div class=\"po-page-change-password-tips po-row\">\r\n        <div class=\"po-md-2 po-mr-3\">\r\n          <img\r\n            class=\"po-page-change-password-lock-image po-mb-3\"\r\n            alt=\"Blocked user image\"\r\n            src=\"./assets/images/big-lock.svg\"\r\n          />\r\n        </div>\r\n        <div class=\"po-md-9 po-page-change-password-tips-text\">\r\n          <div class=\"po-font-text-bold po-pb-1\">{{ literals.safetyTips }}</div>\r\n          <div class=\"po-font-text-small\">\r\n            <div class=\"po-row po-pb-1\">{{ literals.safetyTipsPhrase }}</div>\r\n            <div class=\"po-row po-pb-1\">\u2022 {{ literals.safetyTipsFirst }}</div>\r\n            <div class=\"po-row po-pb-1\">\u2022 {{ literals.safetyTipsSecond }}</div>\r\n            <div class=\"po-row po-pb-1\">\u2022 {{ literals.safetyTipsThird }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"po-page-change-password-buttons po-row\">\r\n        <po-divider class=\"po-sm-12 po-mobile-only\"></po-divider>\r\n\r\n        <po-button\r\n          *ngIf=\"!hideCurrentPassword\"\r\n          class=\"po-sm-6 po-mb-sm-1\"\r\n          [p-label]=\"literals.backButton\"\r\n          (p-click)=\"navigateTo(urlBack)\"\r\n        >\r\n        </po-button>\r\n\r\n        <po-button\r\n          [ngClass]=\"hideCurrentPassword ? 'po-md-12' : 'po-sm-6'\"\r\n          p-kind=\"primary\"\r\n          [p-disabled]=\"passwordForm.invalid\"\r\n          [p-label]=\"literals.saveButton\"\r\n          (p-click)=\"onLoginSubmit()\"\r\n        >\r\n        </po-button>\r\n      </div>\r\n    </po-page-background>\r\n  </div>\r\n</div>\r\n\r\n<po-modal\r\n  [p-primary-action]=\"modalAction\"\r\n  p-hide-close\r\n  p-size=\"auto\"\r\n  [p-title]=\"hideCurrentPassword ? literals.passwordSuccessfullyCreated : literals.passwordSuccessfullyUpdated\"\r\n>\r\n  <div class=\"po-text-center\">\r\n    <img\r\n      alt=\"Blocked user image\"\r\n      class=\"po-page-change-password-lock-image po-mb-3\"\r\n      src=\"./assets/images/success.svg\"\r\n    />\r\n  </div>\r\n</po-modal>\r\n" }]
        }], function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: PoPageChangePasswordService }, { type: i2.PoComponentInjectorService }, { type: i2.PoLanguageService }, { type: i0.ViewContainerRef }]; }, { modal: [{
                type: ViewChild,
                args: [PoModalComponent, { static: true }]
            }], pageChangePassword: [{
                type: ViewChild,
                args: ['pageChangePassword', { read: ViewContainerRef, static: true }]
            }], passwordForm: [{
                type: ViewChild,
                args: ['passwordForm', { read: NgForm, static: true }]
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-page-change-password.
 */
class PoPageChangePasswordModule {
}
PoPageChangePasswordModule.ɵfac = function PoPageChangePasswordModule_Factory(t) { return new (t || PoPageChangePasswordModule)(); };
PoPageChangePasswordModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageChangePasswordModule });
PoPageChangePasswordModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageChangePasswordService], imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageChangePasswordModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule],
                    declarations: [PoPageChangePasswordComponent],
                    providers: [PoPageChangePasswordService],
                    exports: [PoPageChangePasswordComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageChangePasswordModule, { declarations: [PoPageChangePasswordComponent], imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule], exports: [PoPageChangePasswordComponent] }); })();

const poPageDynamicLiterals = {
    en: {
        errorRenderPage: 'Error loading page',
        notPossibleLoadMetadataPage: 'The page metadata could not be loaded'
    },
    es: {
        errorRenderPage: 'Error al cargar la página',
        notPossibleLoadMetadataPage: 'No se pudieron cargar los metadatos de la página.'
    },
    pt: {
        errorRenderPage: 'Erro ao carregar a página',
        notPossibleLoadMetadataPage: 'Não foi possível carregar os metadados da página'
    },
    ru: {
        errorRenderPage: 'Ошибка загрузки страницы',
        notPossibleLoadMetadataPage: 'Не удалось загрузить метаданные страницы'
    }
};
class PoPageDynamicService {
    constructor(http, notification, languageService) {
        this.http = http;
        this.notification = notification;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
        this.endpoint = '/';
        this.language = languageService.getShortLanguage();
    }
    configServiceApi(config = {}) {
        this.endpoint = config.endpoint;
        this.metadata = config.metadata || this.metadata;
    }
    getMetadata(type = 'list') {
        const key = `${this.endpoint}-${type}-metadata`;
        const cache = JSON.parse(localStorage.getItem(key)) || {};
        const metadataUrlBase = this.metadata || `${this.endpoint}/metadata`;
        const url = `${metadataUrlBase}?type=${type}&version=${cache.version || ''}`;
        return this.http.get(url).pipe(map((response) => {
            if (response.version !== undefined && response.version === cache.version) {
                return cache;
            }
            localStorage.setItem(key, JSON.stringify(response));
            return Object.assign(Object.assign({}, cache), response);
        }), catchError((error) => {
            if (Object.keys(cache).length) {
                return of(cache);
            }
            const { errorRenderPage, notPossibleLoadMetadataPage } = poPageDynamicLiterals[this.language];
            this.notification.warning(notPossibleLoadMetadataPage);
            return merge(of({ title: errorRenderPage }), throwError(error));
        }));
    }
    // Deleta um único recurso
    deleteResource(id, endpoint) {
        const localEndPoint = this.getLocalEndPoint(endpoint, true);
        const url = id ? `${localEndPoint}/${id}` : localEndPoint;
        return this.http.delete(url, { headers: this.headers });
    }
    // Deleta recursos em lote
    deleteResources(ids, endpoint) {
        return this.http.request('delete', `${this.getLocalEndPoint(endpoint)}`, { headers: this.headers, body: ids });
    }
    // Busca uma lista de recursos
    getResources(params, endpoint) {
        return this.http.get(this.getLocalEndPoint(endpoint), { headers: this.headers, params });
    }
    // Busca um único recurso
    getResource(id, endpoint) {
        return this.http.get(`${this.getLocalEndPoint(endpoint, true)}/${id}`, { headers: this.headers });
    }
    // Cria um recurso
    createResource(resource, endpoint) {
        return this.http.post(`${this.getLocalEndPoint(endpoint)}`, resource, { headers: this.headers });
    }
    // Atualiza um recurso
    updateResource(id, resource, endpoint) {
        return this.http.put(`${this.getLocalEndPoint(endpoint, true)}/${id}`, resource, { headers: this.headers });
    }
    getLocalEndPoint(endpoint, checkSingleBar = false) {
        endpoint = endpoint !== null && endpoint !== void 0 ? endpoint : this.endpoint;
        if (checkSingleBar) {
            endpoint = endpoint === '/' ? '' : endpoint;
        }
        return endpoint;
    }
}
PoPageDynamicService.ɵfac = function PoPageDynamicService_Factory(t) { return new (t || PoPageDynamicService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.PoNotificationService), i0.ɵɵinject(i2.PoLanguageService)); };
PoPageDynamicService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageDynamicService, factory: PoPageDynamicService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1.HttpClient }, { type: i2.PoNotificationService }, { type: i2.PoLanguageService }]; }, null);
})();

class PoPageDynamicDetailActionsService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
    }
    beforeBack(action) {
        return this.executeAction({ action });
    }
    beforeEdit(action, id, body) {
        const resource = body !== null && body !== void 0 ? body : {};
        return this.executeAction({ action, resource, id });
    }
    beforeRemove(action, id, body) {
        const resource = body !== null && body !== void 0 ? body : {};
        return this.executeAction({ action, resource, id });
    }
    executeAction({ action, resource = {}, id }) {
        if (!action) {
            return of({});
        }
        if (typeof action === 'string') {
            const url = id ? `${action}/${id}` : action;
            return this.http.post(url, resource, { headers: this.headers });
        }
        return of(action(id, resource));
    }
}
PoPageDynamicDetailActionsService.ɵfac = function PoPageDynamicDetailActionsService_Factory(t) { return new (t || PoPageDynamicDetailActionsService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageDynamicDetailActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageDynamicDetailActionsService, factory: PoPageDynamicDetailActionsService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicDetailActionsService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

class PoPageCustomizationService {
    constructor(http) {
        this.http = http;
    }
    getCustomOptions(origin, originalOption, optionSchema) {
        return this.createObservable(origin).pipe(map(newPageOptions => this.mergePageOptions(originalOption, newPageOptions, optionSchema)));
    }
    changeOriginalOptionsToNewOptions(objectToChange, newOptions) {
        Object.keys(newOptions).forEach(key => {
            const value = newOptions[key];
            if (key in objectToChange) {
                if (Array.isArray(value)) {
                    objectToChange[key] = [...value];
                    return;
                }
                if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
                    objectToChange[key] = value;
                    return;
                }
                if (value !== null && typeof value === 'object') {
                    objectToChange[key] = Object.assign({}, value);
                }
            }
        });
    }
    createObservable(origin) {
        if (typeof origin === 'string') {
            return this.http.post(origin, {});
        }
        return from(Promise.resolve(origin()));
    }
    mergePageOptions(originalOption, newPageOptions, optionSchema) {
        const mergePageOptions = optionSchema.schema.reduce((objWithNewProp, prop) => (Object.assign(Object.assign({}, objWithNewProp), { [prop.nameProp]: this.createNewProp(prop, originalOption, newPageOptions) })), {});
        Object.keys(mergePageOptions).forEach(key => mergePageOptions[key] === undefined && delete mergePageOptions[key]);
        return mergePageOptions;
    }
    createNewProp(prop, originalOption, newPageOptions) {
        var _a;
        if (prop.merge) {
            return this.mergeOptions(originalOption[prop.nameProp], newPageOptions[prop.nameProp], prop.keyForMerge);
        }
        else {
            return (_a = newPageOptions[prop.nameProp]) !== null && _a !== void 0 ? _a : originalOption[prop.nameProp];
        }
    }
    mergeOptions(originalOptions, newOptions, filterProp) {
        if (!originalOptions && !newOptions) {
            return;
        }
        if (!newOptions) {
            return originalOptions;
        }
        if (!originalOptions) {
            return newOptions;
        }
        if (originalOptions instanceof Array && newOptions instanceof Array) {
            return this.mergeOptionsArray(originalOptions, newOptions, filterProp);
        }
        return Object.assign(Object.assign({}, originalOptions), newOptions);
    }
    mergeOptionsArray(originalOptions, newOptions, filterProp) {
        const deduplicateNewOptions = newOptions.filter(newItem => !originalOptions.find(originalItem => originalItem[filterProp] === newItem[filterProp]));
        const mergedOriginalOptions = originalOptions.map(originalItem => {
            const newItem = newOptions.find(newOptionsItem => originalItem[filterProp] === newOptionsItem[filterProp]) || originalItem;
            return Object.assign(Object.assign({}, originalItem), newItem);
        });
        return [...mergedOriginalOptions, ...deduplicateNewOptions];
    }
}
PoPageCustomizationService.ɵfac = function PoPageCustomizationService_Factory(t) { return new (t || PoPageCustomizationService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageCustomizationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageCustomizationService, factory: PoPageCustomizationService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageCustomizationService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

function PoPageDynamicDetailComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageDynamicDetailComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "po-widget");
        i0.ɵɵelement(1, "span", 4);
        i0.ɵɵelementStart(2, "span", 5);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.registerNotFound, " ");
    }
}
function PoPageDynamicDetailComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-dynamic-view", 6);
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-fields", ctx_r4.fields)("p-value", ctx_r4.model);
    }
}
const poPageDynamicDetailLiteralsDefault = {
    en: {
        pageActionEdit: 'Edit',
        pageActionRemove: 'Delete',
        pageActionBack: 'Back',
        confirmRemoveTitle: 'Confirm delete',
        confirmRemoveMessage: 'Are you sure you want to delete this record? You can not undo this action.',
        removeNotificationSuccess: 'Item deleted successfully.',
        registerNotFound: 'Register not found.'
    },
    es: {
        pageActionEdit: 'Editar',
        pageActionRemove: 'Borrar',
        pageActionBack: 'Regreso',
        confirmRemoveTitle: 'Confirmar la exclusión',
        confirmRemoveMessage: '¿Está seguro de que desea eliminar este registro? No puede deshacer esta acción.',
        removeNotificationSuccess: 'Elemento eliminado con éxito.',
        registerNotFound: 'Registro no encontrado.'
    },
    pt: {
        pageActionEdit: 'Editar',
        pageActionRemove: 'Excluir',
        pageActionBack: 'Voltar',
        confirmRemoveTitle: 'Confirmar exclusão',
        confirmRemoveMessage: 'Tem certeza de que deseja excluir esse registro? Você não poderá desfazer essa ação.',
        removeNotificationSuccess: 'Item excluído com sucesso.',
        registerNotFound: 'Registro não encontrado.'
    },
    ru: {
        pageActionEdit: 'Редактировать',
        pageActionRemove: 'Удалить',
        pageActionBack: 'Назад',
        confirmRemoveTitle: 'Подтверждение удаления',
        confirmRemoveMessage: 'Вы уверены, что хотите удалить эту запись?  Вы не можете отменить это действие.',
        removeNotificationSuccess: 'Элемент успешно удален.',
        registerNotFound: 'Запись не найдена.'
    }
};
/**
 * @description
 *
 * O `po-page-dynamic-detail` é uma página que serve para exibir registros em detalhes,
 * o mesmo também suporta metadados conforme especificado na documentação.
 *
 *
 * ### Utilização via rota
 *
 * Ao utilizar as rotas para carregar o template, o `page-dynamic-detail` disponibiliza propriedades para
 * poder especificar o endpoint dos dados e dos metadados. Exemplo de utilização:
 *
 * O componente primeiro irá carregar o metadado da rota definida na propriedade serviceMetadataApi
 * e depois irá buscar da rota definida na propriedade serviceLoadApi.
 *
 * > Caso o servidor retornar um erro ao recuperar o metadados, será repassado o metadados salvo em cache,
 * se o cache não existe será disparado uma notificação.
 *
 * ```
 * {
 *   path: 'people/:id',
 *   component: PoPageDynamicDetailComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados
 *   }
 * }
 * ```
 *
 * A requisição dos metadados é feita na inicialização do template para buscar os metadados da página passando o
 * tipo do metadado esperado e a versão cacheada pelo browser.
 *
 * O formato esperado na resposta da requisição está especificado na interface
 * [PoPageDynamicDetailMetadata](/documentation/po-page-dynamic-detail#po-page-dynamic-detail-metadata). Por exemplo:
 *
 * ```
 *  {
 *   version: 1,
 *   title: 'Person Detail',
 *   fields: [
 *     { property: 'id', key: true, disabled: true },
 *     { property: 'status' },
 *     { property: 'name' },
 *     { property: 'nickname' },
 *     { property: 'birthdate', label: 'Birth date' },
 *     { property: 'genre' },
 *     { property: 'city' },
 *     { property: 'country' }
 *   ]
 * }
 * ```
 *
 * > Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `serviceApi` da seguinte forma:
 * ```
 * GET {end-point}/metadata?type=detail&version={version}
 * ```
 *
 * @example
 *
 * <example name="po-page-dynamic-detail-user" title="PO Page Dynamic Detail User">
 *  <file name="sample-po-page-dynamic-detail-user/sample-po-page-dynamic-detail-user.component.html"> </file>
 *  <file name="sample-po-page-dynamic-detail-user/sample-po-page-dynamic-detail-user.component.ts"> </file>
 * </example>
 */
class PoPageDynamicDetailComponent {
    constructor(router, activatedRoute, poNotification, poDialogService, poPageDynamicService, poPageDynamicDetailActionsService, poPageCustomizationService, languageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poNotification = poNotification;
        this.poDialogService = poDialogService;
        this.poPageDynamicService = poPageDynamicService;
        this.poPageDynamicDetailActionsService = poPageDynamicDetailActionsService;
        this.poPageCustomizationService = poPageCustomizationService;
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        this.model = {};
        this.subscriptions = [];
        this._actions = {};
        this._autoRouter = false;
        this._duplicates = [];
        this._fields = [];
        this._keys = [];
        this._pageActions = [];
        const language = languageService.getShortLanguage();
        this.literals = Object.assign(Object.assign({}, poPageDynamicDetailLiteralsDefault[poLocaleDefault]), poPageDynamicDetailLiteralsDefault[language]);
    }
    /**
     * @optional
     *
     * @description
     *
     * Define as ações da página de acordo com a interface `PoPageDynamicDetailActions`.
     */
    set actions(value) {
        this._actions = this.isObject(value) ? value : {};
        this._pageActions = this.getPageActions(this._actions);
    }
    get actions() {
        return Object.assign({}, this._actions);
    }
    /**
     * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
     *
     * @optional
     *
     * @description
     *
     * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
     * estejam definidas nas ações.
     *
     * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
     *
     * @default false
     */
    set autoRouter(value) {
        this._autoRouter = convertToBoolean(value);
    }
    get autoRouter() {
        return this._autoRouter;
    }
    /** Lista dos campos exibidos na página. */
    set fields(value) {
        this._fields = Array.isArray(value) ? [...value] : [];
        this._keys = this.getKeysByFields(this.fields);
        this._duplicates = this.getDuplicatesByFields(this.fields);
    }
    get fields() {
        return this._fields;
    }
    ngOnInit() {
        this.loadDataFromAPI();
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription => {
                subscription.unsubscribe();
            });
        }
    }
    get duplicates() {
        return [...this._duplicates];
    }
    get keys() {
        return [...this._keys];
    }
    get pageActions() {
        return [...this._pageActions];
    }
    remove(actionRemove, actionBeforeRemove) {
        const uniqueKey = this.formatUniqueKey(this.model);
        this.subscriptions.push(this.poPageDynamicDetailActionsService
            .beforeRemove(actionBeforeRemove, uniqueKey, Object.assign({}, this.model))
            .pipe(switchMap((beforeRemoveResult) => {
            var _a, _b;
            const newRemoveAction = (_a = beforeRemoveResult === null || beforeRemoveResult === void 0 ? void 0 : beforeRemoveResult.newUrl) !== null && _a !== void 0 ? _a : actionRemove;
            const allowAction = (_b = beforeRemoveResult === null || beforeRemoveResult === void 0 ? void 0 : beforeRemoveResult.allowAction) !== null && _b !== void 0 ? _b : true;
            if (!allowAction) {
                return of({});
            }
            if (typeof newRemoveAction === 'string') {
                return this.executeRemove(newRemoveAction, uniqueKey);
            }
            else {
                newRemoveAction(uniqueKey, Object.assign({}, this.model));
                return EMPTY;
            }
        }))
            .subscribe());
    }
    confirmRemove(actionRemove, actionBeforeRemove) {
        const confirmOptions = {
            title: this.literals.confirmRemoveTitle,
            message: this.literals.confirmRemoveMessage,
            confirm: this.remove.bind(this, actionRemove, actionBeforeRemove)
        };
        this.poDialogService.confirm(confirmOptions);
    }
    executeRemove(path, uniqueKey) {
        return this.poPageDynamicService.deleteResource(uniqueKey).pipe(map(() => {
            this.poNotification.success(this.literals.removeNotificationSuccess);
            this.navigateTo({ path: path });
        }));
    }
    formatUniqueKey(item) {
        const keys = mapObjectByProperties(item, this.keys);
        return valuesFromObject(keys).join('|');
    }
    goBack(actionBack) {
        this.subscriptions.push(this.poPageDynamicDetailActionsService
            .beforeBack(this.actions.beforeBack)
            .subscribe((beforeBackResult) => this.executeBackAction(actionBack, beforeBackResult === null || beforeBackResult === void 0 ? void 0 : beforeBackResult.allowAction, beforeBackResult === null || beforeBackResult === void 0 ? void 0 : beforeBackResult.newUrl)));
    }
    executeBackAction(actionBack, allowAction, newUrl) {
        const isAllowedAction = typeof allowAction === 'boolean' ? allowAction : true;
        if (isAllowedAction) {
            if (actionBack === undefined || typeof actionBack === 'boolean') {
                return window.history.back();
            }
            if (typeof actionBack === 'string' || newUrl) {
                return this.router.navigate([newUrl || actionBack]);
            }
            return actionBack();
        }
    }
    loadData(id) {
        return this.poPageDynamicService.getResource(id).pipe(tap(response => {
            if (!response) {
                this.setUndefinedToModelAndActions();
            }
            else {
                this.model = response;
            }
        }), catchError(error => {
            this.setUndefinedToModelAndActions();
            return throwError(error);
        }));
    }
    setUndefinedToModelAndActions() {
        this.model = undefined;
        this.actions = undefined;
    }
    getMetadata(serviceApiFromRoute, onLoad) {
        if (serviceApiFromRoute) {
            return this.poPageDynamicService.getMetadata('detail').pipe(tap(response => {
                this.autoRouter = response.autoRouter || this.autoRouter;
                this.actions = response.actions || this.actions;
                this.breadcrumb = response.breadcrumb || this.breadcrumb;
                this.fields = response.fields || this.fields;
                this.title = response.title || this.title;
            }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
        }
        return this.loadOptionsOnInitialize(onLoad);
    }
    // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
    navigateTo(route, forceStopAutoRouter = false) {
        this.router.navigate([route.url || route.path], { queryParams: route.params }).catch(() => {
            if (forceStopAutoRouter || !this.autoRouter) {
                return;
            }
            this.router.config.unshift({
                path: route.path,
                component: route.component,
                data: { serviceApi: this.serviceApi, autoRouter: true }
            });
            this.navigateTo(route, true);
        });
    }
    openEdit(action) {
        const id = this.formatUniqueKey(this.model);
        this.subscriptions.push(this.poPageDynamicDetailActionsService
            .beforeEdit(this.actions.beforeEdit, id, this.model)
            .pipe(switchMap((beforeEditResult) => this.executeEditAction(action, beforeEditResult, id)))
            .subscribe());
    }
    executeEditAction(action, beforeEditResult, id) {
        var _a, _b;
        const newEditAction = (_a = beforeEditResult === null || beforeEditResult === void 0 ? void 0 : beforeEditResult.newUrl) !== null && _a !== void 0 ? _a : action;
        const allowAction = (_b = beforeEditResult === null || beforeEditResult === void 0 ? void 0 : beforeEditResult.allowAction) !== null && _b !== void 0 ? _b : true;
        if (!allowAction) {
            return of({});
        }
        if (typeof newEditAction === 'string') {
            this.openEditUrl(newEditAction);
        }
        else {
            newEditAction(id, Object.assign({}, this.model));
        }
        return EMPTY;
    }
    openEditUrl(path) {
        const url = this.resolveUrl(this.model, path);
        this.navigateTo({ path, url });
    }
    resolveUrl(item, path) {
        const uniqueKey = this.formatUniqueKey(item);
        return path.replace(/:id/g, uniqueKey);
    }
    getPageActions(actions = {}) {
        const pageActions = [];
        if (actions.edit) {
            pageActions.push({ label: this.literals.pageActionEdit, action: this.openEdit.bind(this, actions.edit) });
        }
        if (actions.remove) {
            pageActions.push({
                label: this.literals.pageActionRemove,
                action: this.confirmRemove.bind(this, actions.remove, this.actions.beforeRemove)
            });
        }
        if (actions.back === undefined || actions.back) {
            pageActions.push({ label: this.literals.pageActionBack, action: this.goBack.bind(this, actions.back) });
        }
        return pageActions;
    }
    getKeysByFields(fields = []) {
        return fields.filter(field => field.key === true).map(field => field.property);
    }
    getDuplicatesByFields(fields = []) {
        return fields.filter(field => field.duplicate === true).map(field => field.property);
    }
    isObject(value) {
        return !!value && typeof value === 'object' && !Array.isArray(value);
    }
    loadDataFromAPI() {
        const { serviceApi: serviceApiFromRoute, serviceMetadataApi, serviceLoadApi } = this.activatedRoute.snapshot.data;
        const { id } = this.activatedRoute.snapshot.params;
        const onLoad = serviceLoadApi || this.onLoad;
        this.serviceApi = serviceApiFromRoute || this.serviceApi;
        this.poPageDynamicService.configServiceApi({ endpoint: this.serviceApi, metadata: serviceMetadataApi });
        const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
        const data$ = this.loadData(id);
        this.subscriptions.push(concat(metadata$, data$).subscribe());
    }
    loadOptionsOnInitialize(onLoad) {
        if (onLoad) {
            return this.getPoDynamicPageOptions(onLoad).pipe(tap(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
        }
        return EMPTY;
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            fields: this.fields,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            title: this.title
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'fields',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
}
PoPageDynamicDetailComponent.ɵfac = function PoPageDynamicDetailComponent_Factory(t) { return new (t || PoPageDynamicDetailComponent)(i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(PoPageDynamicService), i0.ɵɵdirectiveInject(PoPageDynamicDetailActionsService), i0.ɵɵdirectiveInject(PoPageCustomizationService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicDetailComponent, selectors: [["po-page-dynamic-detail"]], inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], onLoad: ["p-load", "onLoad"], title: ["p-title", "title"], serviceApi: ["p-service-api", "serviceApi"], actions: ["p-actions", "actions"], autoRouter: ["p-auto-router", "autoRouter"], fields: ["p-fields", "fields"] }, features: [i0.ɵɵProvidersFeature([PoPageDynamicService, PoPageDynamicDetailActionsService])], decls: 6, vars: 6, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["registerNotFoundTemplate", ""], ["viewFieldsTemplate", ""], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], [3, "p-fields", "p-value"]], template: function PoPageDynamicDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "po-page-default", 0);
            i0.ɵɵtemplate(1, PoPageDynamicDetailComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, PoPageDynamicDetailComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PoPageDynamicDetailComponent_ng_template_4_Template, 1, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(3);
            const _r3 = i0.ɵɵreference(5);
            i0.ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.model)("ngIfThen", _r3)("ngIfElse", _r1);
        }
    }, dependencies: [i4.NgIf, i2.PoDynamicViewComponent, i2.PoPageDefaultComponent, i2.PoWidgetComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicDetailComponent, [{
            type: Component,
            args: [{ selector: 'po-page-dynamic-detail', providers: [PoPageDynamicService, PoPageDynamicDetailActionsService], template: "<po-page-default [p-actions]=\"pageActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <ng-container *ngIf=\"model; then viewFieldsTemplate; else registerNotFoundTemplate\"> </ng-container>\r\n</po-page-default>\r\n\r\n<ng-template #registerNotFoundTemplate>\r\n  <po-widget>\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.registerNotFound }}\r\n    </span>\r\n  </po-widget>\r\n</ng-template>\r\n\r\n<ng-template #viewFieldsTemplate>\r\n  <po-dynamic-view [p-fields]=\"fields\" [p-value]=\"model\"> </po-dynamic-view>\r\n</ng-template>\r\n" }]
        }], function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: i2.PoNotificationService }, { type: i2.PoDialogService }, { type: PoPageDynamicService }, { type: PoPageDynamicDetailActionsService }, { type: PoPageCustomizationService }, { type: i2.PoLanguageService }]; }, { breadcrumb: [{
                type: Input,
                args: ['p-breadcrumb']
            }], onLoad: [{
                type: Input,
                args: ['p-load']
            }], title: [{
                type: Input,
                args: ['p-title']
            }], serviceApi: [{
                type: Input,
                args: ['p-service-api']
            }], actions: [{
                type: Input,
                args: ['p-actions']
            }], autoRouter: [{
                type: Input,
                args: ['p-auto-router']
            }], fields: [{
                type: Input,
                args: ['p-fields']
            }] });
})();

/**
 * @description
 *
 * Módulo do serviço do po-page-dynamic-service.
 */
class PoPageDynamicModule {
}
PoPageDynamicModule.ɵfac = function PoPageDynamicModule_Factory(t) { return new (t || PoPageDynamicModule)(); };
PoPageDynamicModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicModule });
PoPageDynamicModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageDynamicService], imports: [CommonModule, HttpClientModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [PoPageDynamicService]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicModule, { imports: [CommonModule, HttpClientModule] }); })();

/**
 * @description
 *
 * Módulo do template do po-page-dynamic-detail.
 */
class PoPageDynamicDetailModule {
}
PoPageDynamicDetailModule.ɵfac = function PoPageDynamicDetailModule_Factory(t) { return new (t || PoPageDynamicDetailModule)(); };
PoPageDynamicDetailModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicDetailModule });
PoPageDynamicDetailModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoDynamicModule,
        PoModalModule,
        PoPageModule,
        PoWidgetModule,
        PoPageDynamicModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicDetailModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        PoDynamicModule,
                        PoModalModule,
                        PoPageModule,
                        PoWidgetModule,
                        PoPageDynamicModule
                    ],
                    declarations: [PoPageDynamicDetailComponent],
                    exports: [PoPageDynamicDetailComponent]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicDetailModule, { declarations: [PoPageDynamicDetailComponent], imports: [CommonModule,
            FormsModule,
            RouterModule,
            PoDynamicModule,
            PoModalModule,
            PoPageModule,
            PoWidgetModule,
            PoPageDynamicModule], exports: [PoPageDynamicDetailComponent] });
})();

class PoPageDynamicEditActionsService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
    }
    beforeCancel(action) {
        return this.executeAction({ action });
    }
    beforeSave(action, id, body) {
        const resource = body !== null && body !== void 0 ? body : {};
        return this.executeAction({ action, resource, id });
    }
    beforeSaveNew(action, id, body) {
        const resource = body !== null && body !== void 0 ? body : {};
        return this.executeAction({ action, resource, id });
    }
    executeAction({ action, resource = {}, id }) {
        if (!action) {
            return of({});
        }
        if (typeof action === 'string') {
            const url = id ? `${action}/${id}` : action;
            return this.http.post(url, resource, { headers: this.headers });
        }
        return of(action(resource, id));
    }
}
PoPageDynamicEditActionsService.ɵfac = function PoPageDynamicEditActionsService_Factory(t) { return new (t || PoPageDynamicEditActionsService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageDynamicEditActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageDynamicEditActionsService, factory: PoPageDynamicEditActionsService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicEditActionsService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

const _c0$5 = ["dynamicForm"];
const _c1$3 = ["gridDetail"];
function PoPageDynamicEditComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageDynamicEditComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "po-widget");
        i0.ɵɵelement(1, "span", 4);
        i0.ɵɵelementStart(2, "span", 5);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.registerNotFound, " ");
    }
}
function PoPageDynamicEditComponent_ng_template_4_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 9);
        i0.ɵɵelement(1, "po-divider", 10);
        i0.ɵɵelementStart(2, "div", 11)(3, "po-button", 12);
        i0.ɵɵlistener("p-click", function PoPageDynamicEditComponent_ng_template_4_div_2_Template_po_button_p_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.detailActionNew()); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(4, "po-grid", 13, 14);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-label", ctx_r6.detailFields[0].divider);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-label", ctx_r6.literals.detailActionNew);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-row-actions", ctx_r6.detailActions)("p-columns", ctx_r6.detailFields[0].detail.columns)("p-data", ctx_r6.model[ctx_r6.detailFields[0].property]);
    }
}
function PoPageDynamicEditComponent_ng_template_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-dynamic-form", 6, 7);
        i0.ɵɵtemplate(2, PoPageDynamicEditComponent_ng_template_4_div_2_Template, 6, 5, "div", 8);
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-fields", ctx_r4.controlFields)("p-value", ctx_r4.model);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r4.detailFields.length > 0);
    }
}
const poPageDynamicEditLiteralsDefault = {
    en: {
        cancelConfirmMessage: 'Are you sure you want to cancel this operation?',
        detailActionNew: 'New',
        pageActionCancel: 'Cancel',
        pageActionSave: 'Save',
        pageActionSaveNew: 'Save and new',
        registerNotFound: 'Register not found.',
        saveNotificationSuccessSave: 'Resource successfully saved.',
        saveNotificationSuccessUpdate: 'Resource successfully updated.',
        saveNotificationWarning: 'Form must be filled out correctly.'
    },
    es: {
        cancelConfirmMessage: 'Está seguro de que desea cancelar esta operación?',
        detailActionNew: 'Nuevo',
        pageActionCancel: 'Cancelar',
        pageActionSave: 'Guardar',
        pageActionSaveNew: 'Guardar y nuevo',
        registerNotFound: 'Registro no encontrado.',
        saveNotificationSuccessSave: 'Recurso salvo con éxito.',
        saveNotificationSuccessUpdate: 'Recurso actualizado con éxito.',
        saveNotificationWarning: 'El formulario debe llenarse correctamente.'
    },
    pt: {
        cancelConfirmMessage: 'Tem certeza que deseja cancelar esta operação?',
        detailActionNew: 'Novo',
        pageActionCancel: 'Cancelar',
        pageActionSave: 'Salvar',
        pageActionSaveNew: 'Salvar e novo',
        registerNotFound: 'Registro não encontrado.',
        saveNotificationSuccessSave: 'Recurso salvo com sucesso.',
        saveNotificationSuccessUpdate: 'Recurso atualizado com sucesso.',
        saveNotificationWarning: 'Formulário precisa ser preenchido corretamente.'
    },
    ru: {
        cancelConfirmMessage: 'Вы уверены, что хотите отменить эту операцию?',
        detailActionNew: 'Новый',
        pageActionCancel: 'Отменить',
        pageActionSave: 'Сохранить',
        pageActionSaveNew: 'Сохранить и создать',
        registerNotFound: 'Запись не найдена.',
        saveNotificationSuccessSave: 'Ресурс успешно сохранен.',
        saveNotificationSuccessUpdate: 'Ресурс успешно обновлен.',
        saveNotificationWarning: 'Форма должна быть заполнена правильно.'
    }
};
/**
 * @description
 *
 * O `po-page-dynamic-edit` é uma página que pode servir para editar ou criar novos registros,
 * o mesmo também suporta metadados conforme especificado na documentação.
 *
 * ### Utilização via rota
 *
 * Ao utilizar as rotas para carregar o template, o `page-dynamic-edit` disponibiliza propriedades para
 * poder especificar o endpoint dos dados e dos metadados. Exemplo de utilização:
 *
 * O componente primeiro irá carregar o metadado da rota definida na propriedade serviceMetadataApi
 * e depois irá buscar da rota definida na propriedade serviceLoadApi
 *
 * > Caso o servidor retornar um erro ao recuperar o metadados, será repassado o metadados salvo em cache,
 * se o cache não existe será disparado uma notificação.
 *
 * ```
 * {
 *   path: 'people',
 *   component: PoPageDynamicEditComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o método HTTP Get
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados utilizando o método HTTP Post
 *   }
 * }
 *
 * ```
 *
 * Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `id`:
 *
 * ```
 * {
 *   path: 'people/:id',
 *   component: PoPageDynamicEditComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados
 *   }
 * }
 * ```
 *
 * A requisição dos metadados é feita na inicialização do template para buscar os metadados da página passando o
 * tipo do metadado esperado e a versão cacheada pelo browser.
 *
 * O formato esperado na resposta da requisição está especificado na interface
 * [PoPageDynamicEditMetadata](/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata). Por exemplo:
 *
 * ```
 *  {
 *   version: 1,
 *   title: 'Person edit',
 *   fields: [
 *     { property: 'id', key: true, disabled: true },
 *     { property: 'status' },
 *     { property: 'name' },
 *     { property: 'nickname' },
 *     { property: 'birthdate', label: 'Birth date' },
 *     { property: 'genre' },
 *     { property: 'city' },
 *     { property: 'country' }
 *   ]
 * }
 * ```
 *
 * > Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `serviceApi` da seguinte forma:
 * ```
 * GET {end-point}/metadata?type=edit&version={version}
 * ```
 *
 * @example
 *
 * <example name="po-page-dynamic-edit-basic" title="PO Page Dynamic Edit Basic">
 *  <file name="sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"> </file>
 *  <file name="sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-edit-user" title="PO Page Dynamic Edit - User">
 *  <file name="sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"> </file>
 *  <file name="sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"> </file>
 * </example>
 */
class PoPageDynamicEditComponent {
    constructor(router, activatedRoute, poNotification, poDialogService, poPageDynamicService, poPageCustomizationService, poPageDynamicEditActionsService, languageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poNotification = poNotification;
        this.poDialogService = poDialogService;
        this.poPageDynamicService = poPageDynamicService;
        this.poPageCustomizationService = poPageCustomizationService;
        this.poPageDynamicEditActionsService = poPageDynamicEditActionsService;
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        this.model = {};
        // beforeSave: return boolean
        // afterSave
        // beforeRemove: return boolean
        // afterRemove
        // beforeInsert: : return boolean
        this.detailActions = {};
        this.subscriptions = [];
        this._actions = {};
        this._autoRouter = false;
        this._controlFields = [];
        this._detailFields = [];
        this._duplicates = [];
        this._fields = [];
        this._keys = [];
        this._pageActions = [];
        const language = languageService.getShortLanguage();
        this.literals = Object.assign(Object.assign({}, poPageDynamicEditLiteralsDefault[poLocaleDefault]), poPageDynamicEditLiteralsDefault[language]);
    }
    /**
     * @optional
     *
     * @description
     *
     * Ações da página.
     */
    set actions(value) {
        this._actions = this.isObject(value) ? value : {};
        this._pageActions = this.getPageActions(this._actions);
    }
    get actions() {
        return Object.assign({}, this._actions);
    }
    /**
     * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
     *
     * @optional
     *
     * @description
     *
     * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
     * estejam definidas nas ações.
     *
     * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
     *
     * @default false
     */
    set autoRouter(value) {
        this._autoRouter = convertToBoolean(value);
    }
    get autoRouter() {
        return this._autoRouter;
    }
    /** Lista dos campos usados na tabela e busca avançada. */
    set fields(value) {
        this._fields = Array.isArray(value) ? [...value] : [];
        this._keys = this.getKeysByFields(this._fields);
        this._duplicates = this.getDuplicatesByFields(this._fields);
        this._controlFields = this.getControlFields(this._fields);
        this._detailFields = this.getDetailFields(this._fields);
    }
    get fields() {
        return this._fields;
    }
    ngOnInit() {
        this.loadDataFromAPI();
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription => {
                subscription.unsubscribe();
            });
        }
    }
    detailActionNew() {
        this.gridDetail.insertRow();
    }
    get duplicates() {
        return [...this._duplicates];
    }
    get keys() {
        return [...this._keys];
    }
    get pageActions() {
        return [...this._pageActions];
    }
    get controlFields() {
        return this._controlFields;
    }
    get detailFields() {
        return this._detailFields;
    }
    loadDataFromAPI() {
        const { serviceApi: serviceApiFromRoute, serviceMetadataApi, serviceLoadApi } = this.activatedRoute.snapshot.data;
        const { id } = this.activatedRoute.snapshot.params;
        const { duplicate } = this.activatedRoute.snapshot.queryParams;
        const onLoad = serviceLoadApi || this.onLoad;
        this.serviceApi = serviceApiFromRoute || this.serviceApi;
        this.poPageDynamicService.configServiceApi({ endpoint: this.serviceApi, metadata: serviceMetadataApi });
        const metadata$ = this.getMetadata(serviceApiFromRoute, id, onLoad);
        const data$ = this.loadData(id, duplicate);
        this.subscriptions.push(concat(metadata$, data$).subscribe());
    }
    cancel(actionCancel, actionBeforeCancel) {
        if (this.dynamicForm && this.dynamicForm.form.dirty) {
            this.poDialogService.confirm({
                message: this.literals.cancelConfirmMessage,
                title: this.literals.pageActionCancel,
                confirm: this.goBack.bind(this, actionCancel, actionBeforeCancel)
            });
        }
        else {
            this.goBack(actionCancel, actionBeforeCancel);
        }
    }
    formatUniqueKey(item) {
        const keys = mapObjectByProperties(item, this.keys);
        return valuesFromObject(keys).join('|');
    }
    goBack(actionCancel, actionBeforeCancel) {
        this.subscriptions.push(this.poPageDynamicEditActionsService
            .beforeCancel(actionBeforeCancel)
            .subscribe((beforeCancelResult) => {
            this.executeBackAction(actionCancel, beforeCancelResult === null || beforeCancelResult === void 0 ? void 0 : beforeCancelResult.allowAction, beforeCancelResult === null || beforeCancelResult === void 0 ? void 0 : beforeCancelResult.newUrl);
        }));
    }
    executeBackAction(actionCancel, allowAction, newUrl) {
        const isAllowedAction = typeof allowAction === 'boolean' ? allowAction : true;
        if (isAllowedAction) {
            if (actionCancel === undefined || typeof actionCancel === 'boolean') {
                return window.history.back();
            }
            if (typeof actionCancel === 'string' || newUrl) {
                return this.router.navigate([newUrl || actionCancel]);
            }
            return actionCancel();
        }
    }
    loadData(id, duplicate) {
        if (!id) {
            try {
                this.model = duplicate ? JSON.parse(duplicate) : {};
            }
            catch (_a) {
                this.model = {};
            }
            return EMPTY;
        }
        return this.poPageDynamicService.getResource(id).pipe(tap(response => (this.model = response)), catchError(error => {
            this.model = undefined;
            this.actions = undefined;
            this._pageActions = [];
            return throwError(error);
        }));
    }
    loadOptionsOnInitialize(onLoad) {
        if (onLoad) {
            return this.getPoDynamicPageOptions(onLoad).pipe(tap(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
        }
        return EMPTY;
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            fields: this.fields,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            title: this.title
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'fields',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
    getMetadata(serviceApiFromRoute, paramId, onLoad) {
        const typeMetadata = paramId ? 'edit' : 'create';
        if (serviceApiFromRoute) {
            return this.poPageDynamicService.getMetadata(typeMetadata).pipe(tap(response => {
                this.autoRouter = response.autoRouter || this.autoRouter;
                this.actions = response.actions || this.actions;
                this.breadcrumb = response.breadcrumb || this.breadcrumb;
                this.fields = response.fields || this.fields;
                this.title = response.title || this.title;
            }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
        }
        return this.loadOptionsOnInitialize(onLoad);
    }
    navigateTo(path) {
        if (path) {
            const url = this.resolveUrl(this.model, path);
            this.router.navigate([url]);
        }
        else {
            window.history.back();
        }
    }
    resolveUniqueKey(item) {
        return this.activatedRoute.snapshot.params['id'] ? this.formatUniqueKey(item) : undefined;
    }
    resolveUrl(item, path) {
        const uniqueKey = this.formatUniqueKey(item);
        return path.replace(/:id/g, uniqueKey);
    }
    executeSave(saveRedirectPath) {
        const saveOperation$ = this.saveOperation();
        return saveOperation$.pipe(tap(message => {
            this.poNotification.success(message);
            this.navigateTo(saveRedirectPath);
        }));
    }
    updateModel(newResource = {}) {
        const dynamicNgForm = this.dynamicForm.form;
        removeKeysProperties(this.keys, newResource);
        this.model = Object.assign(Object.assign({}, this.model), newResource);
        dynamicNgForm.form.patchValue(this.model);
    }
    saveOperation() {
        if (this.dynamicForm.form.invalid) {
            this.poNotification.warning(this.literals.saveNotificationWarning);
            return EMPTY;
        }
        const paramId = this.activatedRoute.snapshot.params['id'];
        const successMsg = paramId
            ? this.literals.saveNotificationSuccessUpdate
            : this.literals.saveNotificationSuccessSave;
        const saveOperation$ = paramId
            ? this.poPageDynamicService.updateResource(paramId, this.model)
            : this.poPageDynamicService.createResource(this.model);
        return saveOperation$.pipe(map(() => successMsg));
    }
    save(action, before = 'beforeSave') {
        const executeOperation = {
            beforeSave: this.executeSave.bind(this),
            beforeSaveNew: this.executeSaveNew.bind(this)
        };
        const uniqueKey = this.resolveUniqueKey(this.model);
        this.subscriptions.push(this.poPageDynamicEditActionsService[before](this.actions[before], uniqueKey, Object.assign({}, this.model))
            .pipe(switchMap(returnBefore => {
            var _a, _b;
            const newAction = (_a = returnBefore === null || returnBefore === void 0 ? void 0 : returnBefore.newUrl) !== null && _a !== void 0 ? _a : action;
            const allowAction = (_b = returnBefore === null || returnBefore === void 0 ? void 0 : returnBefore.allowAction) !== null && _b !== void 0 ? _b : true;
            this.updateModel(returnBefore === null || returnBefore === void 0 ? void 0 : returnBefore.resource);
            if (!allowAction) {
                return of({});
            }
            if (typeof newAction === 'string') {
                return executeOperation[before](newAction);
            }
            else {
                newAction(Object.assign({}, this.model), uniqueKey);
                return EMPTY;
            }
        }))
            .subscribe());
    }
    executeSaveNew(path) {
        const paramId = this.activatedRoute.snapshot.params['id'];
        const saveOperation$ = this.saveOperation();
        return saveOperation$.pipe(tap(message => {
            if (paramId) {
                this.poNotification.success(message);
                this.navigateTo(path);
            }
            else {
                this.poNotification.success(message);
                this.model = {};
                this.dynamicForm.form.reset();
            }
        }));
    }
    getKeysByFields(fields = []) {
        return fields.filter(field => field.key === true).map(field => field.property);
    }
    getControlFields(fields = []) {
        return fields.filter(field => field.type !== 'detail');
    }
    getDetailFields(fields = []) {
        return fields.filter(field => field.type === 'detail');
    }
    getDuplicatesByFields(fields = []) {
        return fields.filter(field => field.duplicate === true).map(field => field.property);
    }
    getPageActions(actions = {}) {
        const pageActions = [{ label: this.literals.pageActionSave, action: this.save.bind(this, actions.save) }];
        if (actions.saveNew) {
            pageActions.push({
                label: this.literals.pageActionSaveNew,
                action: this.save.bind(this, actions.saveNew, 'beforeSaveNew')
            });
        }
        if (actions.cancel === undefined || actions.cancel) {
            pageActions.push({
                label: this.literals.pageActionCancel,
                action: this.cancel.bind(this, actions.cancel, this.actions.beforeCancel)
            });
        }
        return pageActions;
    }
    isObject(value) {
        return !!value && typeof value === 'object' && !Array.isArray(value);
    }
}
PoPageDynamicEditComponent.ɵfac = function PoPageDynamicEditComponent_Factory(t) { return new (t || PoPageDynamicEditComponent)(i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(PoPageDynamicService), i0.ɵɵdirectiveInject(PoPageCustomizationService), i0.ɵɵdirectiveInject(PoPageDynamicEditActionsService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicEditComponent, selectors: [["po-page-dynamic-edit"]], viewQuery: function PoPageDynamicEditComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$5, 5);
            i0.ɵɵviewQuery(_c1$3, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicForm = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridDetail = _t.first);
        }
    }, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], serviceApi: ["p-service-api", "serviceApi"], title: ["p-title", "title"], onLoad: ["p-load", "onLoad"], actions: ["p-actions", "actions"], autoRouter: ["p-auto-router", "autoRouter"], fields: ["p-fields", "fields"] }, features: [i0.ɵɵProvidersFeature([PoPageDynamicService])], decls: 6, vars: 6, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["registerNotFoundTemplate", ""], ["formFieldsTemplate", ""], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], [3, "p-fields", "p-value"], ["dynamicForm", ""], ["class", "po-sm-12", 4, "ngIf"], [1, "po-sm-12"], [3, "p-label"], [1, "po-row", "po-mb-2"], [3, "p-label", "p-click"], [3, "p-row-actions", "p-columns", "p-data"], ["gridDetail", ""]], template: function PoPageDynamicEditComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "po-page-default", 0);
            i0.ɵɵtemplate(1, PoPageDynamicEditComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, PoPageDynamicEditComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PoPageDynamicEditComponent_ng_template_4_Template, 3, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(3);
            const _r3 = i0.ɵɵreference(5);
            i0.ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.model)("ngIfThen", _r3)("ngIfElse", _r1);
        }
    }, dependencies: [i4.NgIf, i2.PoButtonComponent, i2.PoDividerComponent, i2.PoDynamicFormComponent, i2.PoGridComponent, i2.PoPageDefaultComponent, i2.PoWidgetComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicEditComponent, [{
            type: Component,
            args: [{ selector: 'po-page-dynamic-edit', providers: [PoPageDynamicService], template: "<po-page-default [p-actions]=\"pageActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <ng-container *ngIf=\"model; then formFieldsTemplate; else registerNotFoundTemplate\"> </ng-container>\r\n</po-page-default>\r\n\r\n<ng-template #registerNotFoundTemplate>\r\n  <po-widget>\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.registerNotFound }}\r\n    </span>\r\n  </po-widget>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <po-dynamic-form #dynamicForm [p-fields]=\"controlFields\" [p-value]=\"model\"> </po-dynamic-form>\r\n\r\n  <div *ngIf=\"detailFields.length > 0\" class=\"po-sm-12\">\r\n    <po-divider [p-label]=\"detailFields[0].divider\"></po-divider>\r\n\r\n    <div class=\"po-row po-mb-2\">\r\n      <po-button [p-label]=\"literals.detailActionNew\" (p-click)=\"detailActionNew()\"></po-button>\r\n    </div>\r\n\r\n    <po-grid\r\n      #gridDetail\r\n      [p-row-actions]=\"detailActions\"\r\n      [p-columns]=\"detailFields[0].detail.columns\"\r\n      [p-data]=\"model[detailFields[0].property]\"\r\n    >\r\n    </po-grid>\r\n  </div>\r\n</ng-template>\r\n" }]
        }], function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: i2.PoNotificationService }, { type: i2.PoDialogService }, { type: PoPageDynamicService }, { type: PoPageCustomizationService }, { type: PoPageDynamicEditActionsService }, { type: i2.PoLanguageService }]; }, { dynamicForm: [{
                type: ViewChild,
                args: ['dynamicForm']
            }], gridDetail: [{
                type: ViewChild,
                args: ['gridDetail']
            }], breadcrumb: [{
                type: Input,
                args: ['p-breadcrumb']
            }], serviceApi: [{
                type: Input,
                args: ['p-service-api']
            }], title: [{
                type: Input,
                args: ['p-title']
            }], onLoad: [{
                type: Input,
                args: ['p-load']
            }], actions: [{
                type: Input,
                args: ['p-actions']
            }], autoRouter: [{
                type: Input,
                args: ['p-auto-router']
            }], fields: [{
                type: Input,
                args: ['p-fields']
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-page-dynamic-detail.
 */
class PoPageDynamicEditModule {
}
PoPageDynamicEditModule.ɵfac = function PoPageDynamicEditModule_Factory(t) { return new (t || PoPageDynamicEditModule)(); };
PoPageDynamicEditModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicEditModule });
PoPageDynamicEditModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoButtonModule,
        PoDividerModule,
        PoDynamicModule,
        PoGridModule,
        PoPageModule,
        PoWidgetModule,
        PoPageDynamicModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicEditModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        PoButtonModule,
                        PoDividerModule,
                        PoDynamicModule,
                        PoGridModule,
                        PoPageModule,
                        PoWidgetModule,
                        PoPageDynamicModule
                    ],
                    declarations: [PoPageDynamicEditComponent],
                    exports: [PoPageDynamicEditComponent]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicEditModule, { declarations: [PoPageDynamicEditComponent], imports: [CommonModule,
            FormsModule,
            RouterModule,
            PoButtonModule,
            PoDividerModule,
            PoDynamicModule,
            PoGridModule,
            PoPageModule,
            PoWidgetModule,
            PoPageDynamicModule], exports: [PoPageDynamicEditComponent] });
})();

/**
 * @description
 *
 * Módulo do serviço do po-page-customization-service.
 */
class PoPageCustomizationModule {
}
PoPageCustomizationModule.ɵfac = function PoPageCustomizationModule_Factory(t) { return new (t || PoPageCustomizationModule)(); };
PoPageCustomizationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageCustomizationModule });
PoPageCustomizationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageCustomizationService], imports: [CommonModule, HttpClientModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageCustomizationModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [PoPageCustomizationService]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageCustomizationModule, { imports: [CommonModule, HttpClientModule] }); })();

const poAdvancedFiltersLiteralsDefault = {
    en: {
        title: 'Advanced search',
        cancelLabel: 'Cancel',
        confirmLabel: 'Apply filters'
    },
    es: {
        title: 'Búsqueda avanzada',
        cancelLabel: 'Cancelar',
        confirmLabel: 'Aplicar filtros'
    },
    pt: {
        title: 'Busca avançada',
        cancelLabel: 'Cancelar',
        confirmLabel: 'Aplicar filtros'
    },
    ru: {
        title: 'Расширенный поиск',
        cancelLabel: 'отменить',
        confirmLabel: 'Применить фильтры'
    }
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Filtro de busca avançada criado a partir de um formulário dinâmico.
 * Componente de uso interno.
 */
class PoAdvancedFilterBaseComponent {
    constructor(languageService) {
        /**
         * Mantém na modal de busca avançada os valores preenchidos do último filtro realizado pelo usuário.
         */
        this.keepFilters = false;
        /** Função que será disparada e receberá os valores do formulário ao ser clicado no botão buscar. */
        this.searchEvent = new EventEmitter();
        this.filter = {};
        this.language = poLocaleDefault;
        this.primaryAction = {
            action: () => {
                const models = this.getValuesFromForm();
                this.searchEvent.emit(models);
                this.poModal.close();
            },
            label: this.literals.confirmLabel
        };
        this.secondaryAction = {
            action: () => {
                this.poModal.close();
            },
            label: this.literals.cancelLabel
        };
        this.optionsServiceChosenOptions = [];
        this._filters = [];
        this.language = languageService.getShortLanguage();
    }
    /**
     * Coleção de objetos que implementam a interface PoPageDynamicSearchFilters, para definição dos campos que serão criados
     * dinamicamente.
     */
    set filters(filters) {
        this._filters = Array.isArray(filters) ? [...filters] : [];
    }
    get filters() {
        return this._filters;
    }
    /** Objeto com as literais usadas no `po-advanced-filter`. */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = Object.assign(Object.assign(Object.assign({}, poAdvancedFiltersLiteralsDefault[poLocaleDefault]), poAdvancedFiltersLiteralsDefault[this.language]), value);
        }
        else {
            this._literals = poAdvancedFiltersLiteralsDefault[this.language];
        }
        this.primaryAction.label = this.literals.confirmLabel;
        this.secondaryAction.label = this.literals.cancelLabel;
    }
    get literals() {
        return this._literals || poAdvancedFiltersLiteralsDefault[this.language];
    }
    // Retorna os models dos campos preenchidos
    getValuesFromForm() {
        let optionServiceOptions;
        Object.keys(this.filter).forEach(property => {
            if (this.filter[property] === undefined || this.filter[property] === '') {
                delete this.filter[property];
            }
        });
        if (this.optionsServiceChosenOptions.length) {
            optionServiceOptions = this.optionsServiceChosenOptions.filter((optionItem) => Object.values(this.filter).includes(optionItem.value));
        }
        return { filter: this.filter, optionsService: optionServiceOptions };
    }
}
PoAdvancedFilterBaseComponent.ɵfac = function PoAdvancedFilterBaseComponent_Factory(t) { return new (t || PoAdvancedFilterBaseComponent)(i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoAdvancedFilterBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoAdvancedFilterBaseComponent, viewQuery: function PoAdvancedFilterBaseComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(PoModalComponent, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poModal = _t.first);
        }
    }, inputs: { keepFilters: ["p-keep-filters", "keepFilters"], filters: ["p-filters", "filters"], literals: ["p-literals", "literals"] }, outputs: { searchEvent: "p-search-event" } });
__decorate([
    InputBoolean()
], PoAdvancedFilterBaseComponent.prototype, "keepFilters", void 0);
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAdvancedFilterBaseComponent, [{
            type: Directive
        }], function () { return [{ type: i2.PoLanguageService }]; }, { poModal: [{
                type: ViewChild,
                args: [PoModalComponent, { static: true }]
            }], keepFilters: [{
                type: Input,
                args: ['p-keep-filters']
            }], searchEvent: [{
                type: Output,
                args: ['p-search-event']
            }], filters: [{
                type: Input,
                args: ['p-filters']
            }], literals: [{
                type: Input,
                args: ['p-literals']
            }] });
})();

/**
 * @docsPrivate
 *
 * @docsExtends PoAdvancedFilterBaseComponent
 *
 * @examplePrivate
 *
 * <example-private name="po-advanced-filter" title="PO Busca Avançada">
 *   <file name="sample-po-advanced-filter.component.html"> </file>
 *   <file name="sample-po-advanced-filter.component.ts"> </file>
 * </example-private>
 */
class PoAdvancedFilterComponent extends PoAdvancedFilterBaseComponent {
    constructor(languageService) {
        super(languageService);
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.optionsServiceSubscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    open() {
        this.filter = this.keepFilters ? this.getInitialValuesFromFilter(this.filters) : {};
        this.poModal.open();
    }
    getOptionsServiceItem(optionServiceObject) {
        const objectItem = this.optionsServiceChosenOptions.map(option => option.value).indexOf(optionServiceObject.value);
        if (objectItem === -1) {
            this.optionsServiceChosenOptions = [...this.optionsServiceChosenOptions, optionServiceObject];
        }
    }
    getInitialValuesFromFilter(filters) {
        return filters.reduce((result, item) => Object.assign(result, { [item.property]: item.initValue }), {});
    }
    // Se inscreve para receber valores referentes a campos do tipo combo.
    optionsServiceSubscribe() {
        this.subscription.add(this.poDynamicForm.getObjectValue().subscribe(optionServiceObject => {
            if (optionServiceObject) {
                this.getOptionsServiceItem(optionServiceObject);
            }
        }));
    }
}
PoAdvancedFilterComponent.ɵfac = function PoAdvancedFilterComponent_Factory(t) { return new (t || PoAdvancedFilterComponent)(i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoAdvancedFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAdvancedFilterComponent, selectors: [["po-advanced-filter"]], viewQuery: function PoAdvancedFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(PoDynamicFormComponent, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poDynamicForm = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["p-hide-close", "", 3, "p-primary-action", "p-secondary-action", "p-title"], [3, "p-fields", "p-value"]], template: function PoAdvancedFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "po-modal", 0);
            i0.ɵɵelement(1, "po-dynamic-form", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.literals.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-fields", ctx.filters)("p-value", ctx.filter);
        }
    }, dependencies: [i2.PoDynamicFormComponent, i2.PoModalComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAdvancedFilterComponent, [{
            type: Component,
            args: [{ selector: 'po-advanced-filter', template: "<po-modal\r\n  p-hide-close\r\n  [p-primary-action]=\"primaryAction\"\r\n  [p-secondary-action]=\"secondaryAction\"\r\n  [p-title]=\"literals.title\"\r\n>\r\n  <po-dynamic-form [p-fields]=\"filters\" [p-value]=\"filter\"> </po-dynamic-form>\r\n</po-modal>\r\n" }]
        }], function () { return [{ type: i2.PoLanguageService }]; }, { poDynamicForm: [{
                type: ViewChild,
                args: [PoDynamicFormComponent, { static: true }]
            }] });
})();

const poPageDynamicSearchLiteralsDefault = {
    en: {
        disclaimerGroupTitle: 'Displaying results filtered by:',
        filterTitle: poAdvancedFiltersLiteralsDefault.en.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.en.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.en.confirmLabel,
        quickSearchLabel: 'Quick search:',
        searchPlaceholder: 'Search'
    },
    es: {
        disclaimerGroupTitle: 'Presentando resultados filtrados por:',
        filterTitle: poAdvancedFiltersLiteralsDefault.es.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.es.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.es.confirmLabel,
        quickSearchLabel: 'Búsqueda rápida:',
        searchPlaceholder: 'Buscar'
    },
    pt: {
        disclaimerGroupTitle: 'Apresentando resultados filtrados por:',
        filterTitle: poAdvancedFiltersLiteralsDefault.pt.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.pt.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.pt.confirmLabel,
        quickSearchLabel: 'Pesquisa rápida:',
        searchPlaceholder: 'Pesquisar'
    },
    ru: {
        disclaimerGroupTitle: 'Отображение результатов, отфильтрованных по:',
        filterTitle: poAdvancedFiltersLiteralsDefault.ru.title,
        filterCancelLabel: poAdvancedFiltersLiteralsDefault.ru.cancelLabel,
        filterConfirmLabel: poAdvancedFiltersLiteralsDefault.ru.confirmLabel,
        quickSearchLabel: 'Быстрый поиск:',
        searchPlaceholder: 'исследование'
    }
};
/**
 * @description
 *
 * Componente com as ações de pesquisa já definidas, bastando que o desenvolvedor implemente apenas a chamada para as APIs
 * e exiba as informações.
 */
class PoPageDynamicSearchBaseComponent {
    constructor(languageService) {
        /** Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`. */
        this.actions = [];
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        /**
         * @optional
         *
         * @description
         *
         * Mantém na busca avançada os valores preenchidos do último filtro realizado pelo usuário.
         *
         * @default `false`
         */
        this.keepFilters = false;
        /**
         * @optional
         *
         * @description
         *
         * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
         *
         * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
         * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
         * rápida também na lista de `disclaimers`.
         *
         * > Os valores que são emitidos no `p-quick-search` e no `p-advanced-search`
         * permanecem separados durante a emissão dos valores alterados. A concatenação
         * é apenas nos `disclaimers`.
         *
         * @default `false`
         */
        this.concatFilters = false;
        /**
         * @optional
         *
         * @description
         *
         * Oculta o botão para remover todos os *disclaimers* do grupo.
         *
         * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
         *
         * @default `false`
         */
        this.hideRemoveAllDisclaimer = false;
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao executar a pesquisa avançada, o mesmo irá repassar um objeto com os valores preenchidos no modal de pesquisa.
         *
         * > Campos não preenchidos não irão aparecer no objeto passado por parâmetro.
         */
        this.advancedSearch = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao remover um ou todos os disclaimers pelo usuário.
         */
        this.changeDisclaimers = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
         */
        this.quickSearch = new EventEmitter();
        this._filters = [];
        this._hideCloseDisclaimers = [];
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-dynamic-search`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageDynamicSearchLiterals = {
     *    disclaimerGroupTitle: 'Filtros aplicados:',
     *    filterTitle: 'Filtro avançado',
     *    filterCancelLabel: 'Fechar',
     *    filterConfirmLabel: 'Aplicar',
     *    quickSearchLabel: 'Valor pesquisado:',
     *    searchPlaceholder: 'Pesquise aqui'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageDynamicSearchLiterals = {
     *    filterTitle: 'Filtro avançado'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-dynamic-search
     *   [p-literals]="customLiterals">
     * </po-page-dynamic-search>
     * ```
     *
     * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = Object.assign(Object.assign(Object.assign({}, poPageDynamicSearchLiteralsDefault[poLocaleDefault]), poPageDynamicSearchLiteralsDefault[this.language]), value);
        }
        else {
            this._literals = poPageDynamicSearchLiteralsDefault[this.language];
        }
        this.setAdvancedFilterLiterals(this.literals);
    }
    get literals() {
        return this._literals || poPageDynamicSearchLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista dos campos usados na busca avançada. Caso o mesmo não seja passado a busca avançada não será exibida.
     */
    set filters(filters) {
        this._filters = Array.isArray(filters) ? [...filters] : [];
        if (this.stringify(this._filters) !== this.stringify(this.previousFilters)) {
            this.onChangeFilters(this.filters);
            this.previousFilters = [...this._filters];
        }
    }
    get filters() {
        return this._filters;
    }
    /**
     * @optional
     *
     * @description
     *
     * Largura do campo de busca, utilizando o *Grid System*,
     * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
     * conforme resolução de tela para manter a consistência do layout.
     */
    set quickSearchWidth(value) {
        this._quickSearchWidth = convertToInt(value);
    }
    get quickSearchWidth() {
        return this._quickSearchWidth;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de filtros que terão a opção de fechar ocultada
     * em seu respectivo disclaimer. Utilizar o atributo `property` do filtro.
     *
     * Exemplo de utilização:
     * ```
     * ['city','name'];
     * ```
     */
    set hideCloseDisclaimers(value) {
        this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
    }
    get hideCloseDisclaimers() {
        return this._hideCloseDisclaimers;
    }
    setAdvancedFilterLiterals(literals) {
        this.advancedFilterLiterals = {
            cancelLabel: literals.filterCancelLabel,
            confirmLabel: literals.filterConfirmLabel,
            title: literals.filterTitle
        };
    }
    stringify(columns) {
        // não faz o stringify da propriedade searchService, pois pode conter objeto complexo e disparar um erro.
        return JSON.stringify(columns, (key, value) => {
            if (key !== 'searchService') {
                return value;
            }
        });
    }
}
PoPageDynamicSearchBaseComponent.ɵfac = function PoPageDynamicSearchBaseComponent_Factory(t) { return new (t || PoPageDynamicSearchBaseComponent)(i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicSearchBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageDynamicSearchBaseComponent, inputs: { actions: ["p-actions", "actions"], breadcrumb: ["p-breadcrumb", "breadcrumb"], keepFilters: ["p-keep-filters", "keepFilters"], concatFilters: ["p-concat-filters", "concatFilters"], hideRemoveAllDisclaimer: ["p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer"], onLoad: ["p-load", "onLoad"], title: ["p-title", "title"], literals: ["p-literals", "literals"], filters: ["p-filters", "filters"], quickSearchWidth: ["p-quick-search-width", "quickSearchWidth"], hideCloseDisclaimers: ["p-hide-close-disclaimers", "hideCloseDisclaimers"] }, outputs: { advancedSearch: "p-advanced-search", changeDisclaimers: "p-change-disclaimers", quickSearch: "p-quick-search" } });
__decorate([
    InputBoolean()
], PoPageDynamicSearchBaseComponent.prototype, "keepFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicSearchBaseComponent.prototype, "concatFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicSearchBaseComponent.prototype, "hideRemoveAllDisclaimer", void 0);
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicSearchBaseComponent, [{
            type: Directive
        }], function () { return [{ type: i2.PoLanguageService }]; }, { actions: [{
                type: Input,
                args: ['p-actions']
            }], breadcrumb: [{
                type: Input,
                args: ['p-breadcrumb']
            }], keepFilters: [{
                type: Input,
                args: ['p-keep-filters']
            }], concatFilters: [{
                type: Input,
                args: ['p-concat-filters']
            }], hideRemoveAllDisclaimer: [{
                type: Input,
                args: ['p-hide-remove-all-disclaimer']
            }], onLoad: [{
                type: Input,
                args: ['p-load']
            }], title: [{
                type: Input,
                args: ['p-title']
            }], advancedSearch: [{
                type: Output,
                args: ['p-advanced-search']
            }], changeDisclaimers: [{
                type: Output,
                args: ['p-change-disclaimers']
            }], quickSearch: [{
                type: Output,
                args: ['p-quick-search']
            }], literals: [{
                type: Input,
                args: ['p-literals']
            }], filters: [{
                type: Input,
                args: ['p-filters']
            }], quickSearchWidth: [{
                type: Input,
                args: ['p-quick-search-width']
            }], hideCloseDisclaimers: [{
                type: Input,
                args: ['p-hide-close-disclaimers']
            }] });
})();

const _c0$4 = ["*"];
/**
 * @docsExtends PoPageDynamicSearchBaseComponent
 *
 * @example
 *
 * <example name="po-page-dynamic-search-basic" title="PO Page Dynamic Search Basic">
 *  <file name="sample-po-page-dynamic-search-basic/sample-po-page-dynamic-search-basic.component.html"> </file>
 *  <file name="sample-po-page-dynamic-search-basic/sample-po-page-dynamic-search-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-search-hiring-processes" title="PO Page Dynamic Search - Hiring processes">
 *  <file name="sample-po-page-dynamic-search-hiring-processes/sample-po-page-dynamic-search-hiring-processes.component.html"> </file>
 *  <file name="sample-po-page-dynamic-search-hiring-processes/sample-po-page-dynamic-search-hiring-processes.component.ts"> </file>
 *  <file name="sample-po-page-dynamic-search-hiring-processes/sample-po-page-dynamic-search-hiring-processes.service.ts"> </file>
 * </example>
 */
class PoPageDynamicSearchComponent extends PoPageDynamicSearchBaseComponent {
    constructor(languageService, poPageCustomizationService, changeDetector) {
        super(languageService);
        this.poPageCustomizationService = poPageCustomizationService;
        this.changeDetector = changeDetector;
        this._disclaimerGroup = {
            remove: this.onRemoveDisclaimer.bind(this),
            removeAll: this.onRemoveAllDisclaimers.bind(this),
            disclaimers: [],
            title: this.literals.disclaimerGroupTitle,
            hideRemoveAll: this.hideRemoveAllDisclaimer
        };
        this._filterSettings = {
            action: this.onAction.bind(this),
            advancedAction: this.onAdvancedAction.bind(this),
            placeholder: this.literals.searchPlaceholder,
            width: this.quickSearchWidth
        };
    }
    get disclaimerGroup() {
        return Object.assign({}, this._disclaimerGroup, {
            title: this.literals.disclaimerGroupTitle,
            hideRemoveAll: this.hideRemoveAllDisclaimer
        });
    }
    get filterSettings() {
        const thereAreValidFilters = this.filters.length > 0 && this.filters.some(filter => filter.visible === true || filter.visible === undefined);
        this._filterSettings.advancedAction = thereAreValidFilters ? this.onAdvancedAction.bind(this) : undefined;
        return Object.assign({}, this._filterSettings, {
            placeholder: this.literals.searchPlaceholder,
            width: this.quickSearchWidth
        });
    }
    ngOnInit() {
        this.setAdvancedFilterLiterals(this.literals);
        if (this.onLoad) {
            this.loadOptionsOnInitialize(this.onLoad);
        }
    }
    ngOnDestroy() {
        if (this.loadSubscription) {
            this.loadSubscription.unsubscribe();
        }
    }
    onChangeFilters(filters) {
        const filterObjectWithValue = filters
            .filter(filter => filter.initValue)
            .reduce((prev, current) => (Object.assign(Object.assign({}, prev), { [current.property]: current.initValue })), {});
        if (Object.keys(filterObjectWithValue).length) {
            this.onAdvancedSearch({ filter: filterObjectWithValue });
        }
    }
    onAction(quickFilter) {
        const disclaimerQuickSearchUpdated = {
            property: 'search',
            label: `${this.literals.quickSearchLabel} ${quickFilter}`,
            value: quickFilter,
            hideClose: this.hideCloseDisclaimers.some(hideCloseDisclaimer => hideCloseDisclaimer === 'search') || false
        };
        const getDisclaimersWithConcatFilters = () => [
            ...this.getDisclaimersWithoutQuickSearch(),
            disclaimerQuickSearchUpdated
        ];
        this._disclaimerGroup.disclaimers = this.concatFilters
            ? getDisclaimersWithConcatFilters()
            : [disclaimerQuickSearchUpdated];
        if (this.quickSearch.observers && this.quickSearch.observers.length > 0) {
            this.quickSearch.emit(quickFilter);
        }
        if (this.keepFilters && !this.concatFilters) {
            this.filters.forEach(element => delete element.initValue);
        }
        this.changeDetector.detectChanges();
    }
    onAdvancedAction() {
        this.poAdvancedFilter.open();
    }
    onAdvancedSearch(filteredItems) {
        const { filter, optionsService } = filteredItems;
        this._disclaimerGroup.disclaimers = this.setDisclaimers(filter, optionsService);
        this.setFilters(filter);
        this.advancedSearch.emit(filter);
    }
    getDisclaimersWithoutQuickSearch() {
        const quickSearchProperty = 'search';
        return this._disclaimerGroup.disclaimers.filter(item => item.property !== quickSearchProperty);
    }
    setFilters(filters) {
        const formattedFilters = this.convertToFilters(filters);
        this.filters.forEach(element => {
            const compatibleObject = formattedFilters.find(item => item.property === element.property);
            if (compatibleObject) {
                element.initValue = compatibleObject.value;
            }
            else {
                delete element.initValue;
            }
        });
    }
    convertToFilters(filters) {
        return Object.entries(filters).map(([property, value]) => ({ property, value }));
    }
    optionsServiceDisclaimerLabel(value, optionsServiceObjectsList) {
        const optionServiceMatch = optionsServiceObjectsList.find(option => option.value === value);
        return optionServiceMatch.label || optionServiceMatch.value;
    }
    applyDisclaimerLabelValue(field, filterValue) {
        const values = Array.isArray(filterValue) ? filterValue : [filterValue];
        const labels = values.map(value => {
            const filteredField = field.options.find(option => option.value === value || option === value);
            if (filteredField) {
                return filteredField.label || filteredField.value || filteredField;
            }
        });
        return labels.join(', ');
    }
    formatDate(date) {
        const year = parseInt(date.substr(0, 4), 10);
        const month = parseInt(date.substr(5, 2), 10);
        const day = parseInt(date.substr(8, 2), 10);
        return new Date(year, month - 1, day).toLocaleDateString(getBrowserLanguage());
    }
    formatArrayToObjectKeyValue(filters) {
        const formattedObject = filters.reduce((result, item) => Object.assign(result, { [item.property]: item.value || item.initValue }), {});
        Object.keys(formattedObject).forEach(key => {
            if (!formattedObject[key]) {
                delete formattedObject[key];
            }
        });
        return formattedObject;
    }
    getFieldByProperty(fields, fieldName) {
        return fields.find((field) => field.property === fieldName);
    }
    getFilterValueToDisclaimer(field, value, optionsServiceObjectsList) {
        if (field.optionsService && optionsServiceObjectsList) {
            return this.optionsServiceDisclaimerLabel(value, optionsServiceObjectsList);
        }
        if (field.type === PoDynamicFieldType.Date) {
            return field.range ? this.formatDate(value.start) + ' - ' + this.formatDate(value.end) : this.formatDate(value);
        }
        if (field.options && value) {
            return this.applyDisclaimerLabelValue(field, value);
        }
        return value;
    }
    onRemoveDisclaimer(removeData) {
        const { currentDisclaimers } = removeData;
        this.emitChangesDisclaimers(currentDisclaimers);
    }
    emitChangesDisclaimers(currentDisclaimers) {
        this.changeDisclaimers.emit(currentDisclaimers);
        this.setFilters(this.formatArrayToObjectKeyValue(currentDisclaimers));
    }
    onRemoveAllDisclaimers() {
        this.emitChangesDisclaimers([]);
    }
    setDisclaimers(filters, optionsServiceObjects) {
        const disclaimers = [];
        const properties = Object.keys(filters);
        properties.forEach(property => {
            const field = this.getFieldByProperty(this.filters, property);
            const label = field.label || capitalizeFirstLetter(field.property);
            const value = filters[property];
            const hideClose = this.hideCloseDisclaimers.some(hideCloseDisclaimer => hideCloseDisclaimer === property) || false;
            const valueDisplayedOnTheDisclaimerLabel = this.getFilterValueToDisclaimer(field, value, optionsServiceObjects);
            if (valueDisplayedOnTheDisclaimerLabel !== '') {
                disclaimers.push({
                    label: `${label}: ${valueDisplayedOnTheDisclaimerLabel}`,
                    property,
                    value,
                    hideClose
                });
            }
        });
        return disclaimers;
    }
    loadOptionsOnInitialize(onLoad) {
        this.loadSubscription = this.getPoDynamicPageOptions(onLoad).subscribe(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption));
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            title: this.title,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            filters: this.filters,
            keepFilters: this.keepFilters,
            concatFilters: this.concatFilters,
            hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
            hideCloseDisclaimers: this.hideCloseDisclaimers,
            quickSearchWidth: this.quickSearchWidth
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'filters',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true,
                    keyForMerge: 'label'
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                },
                {
                    nameProp: 'keepFilters'
                },
                {
                    nameProp: 'concatFilters'
                },
                {
                    nameProp: 'hideRemoveAllDisclaimer'
                },
                {
                    nameProp: 'hideCloseDisclaimers'
                },
                {
                    nameProp: 'quickSearchWidth'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
}
PoPageDynamicSearchComponent.ɵfac = function PoPageDynamicSearchComponent_Factory(t) { return new (t || PoPageDynamicSearchComponent)(i0.ɵɵdirectiveInject(i2.PoLanguageService), i0.ɵɵdirectiveInject(PoPageCustomizationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPageDynamicSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicSearchComponent, selectors: [["po-page-dynamic-search"]], viewQuery: function PoPageDynamicSearchComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(PoAdvancedFilterComponent, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poAdvancedFilter = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$4, decls: 3, vars: 8, consts: [[3, "p-actions", "p-breadcrumb", "p-disclaimer-group", "p-filter", "p-title"], [3, "p-filters", "p-keep-filters", "p-literals", "p-search-event"]], template: function PoPageDynamicSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "po-page-list", 0)(1, "po-advanced-filter", 1);
            i0.ɵɵlistener("p-search-event", function PoPageDynamicSearchComponent_Template_po_advanced_filter_p_search_event_1_listener($event) { return ctx.onAdvancedSearch($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("p-actions", ctx.actions)("p-breadcrumb", ctx.breadcrumb)("p-disclaimer-group", ctx.disclaimerGroup)("p-filter", ctx.filterSettings)("p-title", ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-literals", ctx.advancedFilterLiterals);
        }
    }, dependencies: [i2.PoPageListComponent, PoAdvancedFilterComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicSearchComponent, [{
            type: Component,
            args: [{ selector: 'po-page-dynamic-search', template: "<po-page-list\r\n  [p-actions]=\"actions\"\r\n  [p-breadcrumb]=\"breadcrumb\"\r\n  [p-disclaimer-group]=\"disclaimerGroup\"\r\n  [p-filter]=\"filterSettings\"\r\n  [p-title]=\"title\"\r\n>\r\n  <po-advanced-filter\r\n    [p-filters]=\"filters\"\r\n    [p-keep-filters]=\"keepFilters\"\r\n    [p-literals]=\"advancedFilterLiterals\"\r\n    (p-search-event)=\"onAdvancedSearch($event)\"\r\n  >\r\n  </po-advanced-filter>\r\n\r\n  <ng-content></ng-content>\r\n</po-page-list>\r\n" }]
        }], function () { return [{ type: i2.PoLanguageService }, { type: PoPageCustomizationService }, { type: i0.ChangeDetectorRef }]; }, { poAdvancedFilter: [{
                type: ViewChild,
                args: [PoAdvancedFilterComponent, { static: true }]
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-page-dynamic-search.
 */
class PoPageDynamicSearchModule {
}
PoPageDynamicSearchModule.ɵfac = function PoPageDynamicSearchModule_Factory(t) { return new (t || PoPageDynamicSearchModule)(); };
PoPageDynamicSearchModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicSearchModule });
PoPageDynamicSearchModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoDynamicModule,
        PoLanguageModule,
        PoModalModule,
        PoPageModule,
        PoPageCustomizationModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicSearchModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        PoDynamicModule,
                        PoLanguageModule,
                        PoModalModule,
                        PoPageModule,
                        PoPageCustomizationModule
                    ],
                    declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent],
                    exports: [PoPageDynamicSearchComponent]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicSearchModule, { declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent], imports: [CommonModule,
            FormsModule,
            RouterModule,
            PoDynamicModule,
            PoLanguageModule,
            PoModalModule,
            PoPageModule,
            PoPageCustomizationModule], exports: [PoPageDynamicSearchComponent] });
})();

const poPageDynamicTableLiteralsDefault = {
    en: {
        pageAction: 'New',
        pageActionRemoveAll: 'Delete',
        tableActionView: 'View',
        tableActionEdit: 'Edit',
        tableActionDuplicate: 'Duplicate',
        tableActionDelete: 'Delete',
        confirmRemoveTitle: 'Confirm delete',
        confirmRemoveMessage: 'Are you sure you want to delete this record? You can not undo this action.',
        confirmRemoveAllTitle: 'Confirm batch deletion',
        confirmRemoveAllMessage: 'Are you sure you want to delete all these records? You can not undo this action.',
        loadDataErrorNotification: 'Service not found',
        removeSuccessNotification: 'Item deleted successfully',
        removeAllSuccessNotification: 'Items deleted successfully'
    },
    es: {
        pageAction: 'Nuevo',
        pageActionRemoveAll: 'Borrar',
        tableActionView: 'Visualizar',
        tableActionEdit: 'Editar',
        tableActionDuplicate: 'Duplicar',
        tableActionDelete: 'Borrar',
        confirmRemoveTitle: 'Confirmar la exclusión',
        confirmRemoveMessage: '¿Está seguro de que desea eliminar este registro? No puede deshacer esta acción.',
        confirmRemoveAllTitle: 'Confirmar la exclusión por lotes',
        confirmRemoveAllMessage: '¿Está seguro de que desea eliminar todos estos registros? No puede deshacer esta acción.',
        loadDataErrorNotification: 'Servicio no informado.',
        removeSuccessNotification: 'Elemento eliminado con éxito',
        removeAllSuccessNotification: 'Elementos eliminados con éxito'
    },
    pt: {
        pageAction: 'Novo',
        pageActionRemoveAll: 'Excluir',
        tableActionView: 'Visualizar',
        tableActionEdit: 'Editar',
        tableActionDuplicate: 'Duplicar',
        tableActionDelete: 'Excluir',
        confirmRemoveTitle: 'Confirmar exclusão',
        confirmRemoveMessage: 'Tem certeza de que deseja excluir esse registro? Você não poderá desfazer essa ação.',
        confirmRemoveAllTitle: 'Confirmar exclusão em lote',
        confirmRemoveAllMessage: 'Tem certeza de que deseja excluir todos esses registros? Você não poderá desfazer essa ação.',
        loadDataErrorNotification: 'Serviço não informado.',
        removeSuccessNotification: 'Item excluido com sucesso',
        removeAllSuccessNotification: 'Items excluidos com sucesso'
    },
    ru: {
        pageAction: 'Новый',
        pageActionRemoveAll: 'Удалить',
        tableActionView: 'Просмотр',
        tableActionEdit: 'Редактировать',
        tableActionDuplicate: 'Дублировать',
        tableActionDelete: 'Удалить',
        confirmRemoveTitle: 'Подтверждение удаления',
        confirmRemoveMessage: 'Вы уверены, что хотите удалить эту запись?  Вы не можете отменить это действие.',
        confirmRemoveAllTitle: 'Подтвердите удаление пакета',
        confirmRemoveAllMessage: 'Вы уверены, что хотите удалить все эти записи? Вы не можете отменить это действие.',
        loadDataErrorNotification: 'Сервис не найден',
        removeSuccessNotification: 'Элемент успешно удален',
        removeAllSuccessNotification: 'Элементы успешно удалены'
    }
};

class PoPageDynamicListBaseComponent {
    constructor() {
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        /**
         * @optional
         *
         * @description
         * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
         *
         * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.changeVisibleColumns = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
         *
         * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.columnRestoreManager = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento executado ao ordenar colunas da tabela.
         *
         * Recebe um objeto `{ column, type }` onde:
         *
         * - column (`PoTableColumn`): objeto da coluna que foi clicada/ordenada.
         * - type (`PoTableColumnSortType`): tipo da ordenação.
         */
        this.sortBy = new EventEmitter();
        this._autoRouter = false;
        this._columns = [];
        this._duplicates = [];
        this._fields = [];
        this._filters = [];
        this._keys = [];
    }
    /**
     * @optional
     *
     * @description
     *
     * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `p-actions`
     *
     * As rotas criadas serão baseadas na propriedade `p-actions`.
     *
     * > Para o correto funcionamento não pode haver nenhuma rota coringa (`**`) especificada.
     *
     * @default false
     */
    set autoRouter(value) {
        this._autoRouter = convertToBoolean(value);
    }
    get autoRouter() {
        return this._autoRouter;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista dos campos usados na tabela e busca avançada.
     *
     *
     * > Caso não seja definido fields a tabela assumirá o comportamento padrão.
     */
    set fields(fields) {
        this._fields = Array.isArray(fields) ? [...fields] : [];
        this.setFieldsProperties(this.fields);
    }
    get fields() {
        return this._fields;
    }
    set columns(value) {
        this._columns = [...value];
    }
    get columns() {
        return this._columns;
    }
    set duplicates(value) {
        this._duplicates = [...value];
    }
    get duplicates() {
        return this._duplicates;
    }
    set filters(value) {
        this._filters = [...value];
    }
    get filters() {
        return this._filters;
    }
    set keys(value) {
        this._keys = [...value];
    }
    get keys() {
        return this._keys;
    }
    setFieldsProperties(fields) {
        let visibleFilter;
        this.filters = fields
            .filter(field => field.filter === true)
            .map(filterField => {
            visibleFilter = !(filterField.initValue && filterField.fixed);
            return Object.assign(Object.assign({}, filterField), { visible: visibleFilter });
        });
        this.columns = fields.filter(field => field.visible === undefined || field.visible === true || field.allowColumnsManager === true);
        this.keys = fields.filter(field => field.key === true).map(field => field.property);
        this.duplicates = fields.filter(field => field.duplicate === true).map(field => field.property);
    }
}
PoPageDynamicListBaseComponent.ɵfac = function PoPageDynamicListBaseComponent_Factory(t) { return new (t || PoPageDynamicListBaseComponent)(); };
PoPageDynamicListBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageDynamicListBaseComponent, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], serviceApi: ["p-service-api", "serviceApi"], title: ["p-title", "title"], autoRouter: ["p-auto-router", "autoRouter"], fields: ["p-fields", "fields"] }, outputs: { changeVisibleColumns: "p-change-visible-columns", columnRestoreManager: "p-restore-column-manager", sortBy: "p-sort-by" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicListBaseComponent, [{
            type: Directive
        }], null, { breadcrumb: [{
                type: Input,
                args: ['p-breadcrumb']
            }], serviceApi: [{
                type: Input,
                args: ['p-service-api']
            }], title: [{
                type: Input,
                args: ['p-title']
            }], changeVisibleColumns: [{
                type: Output,
                args: ['p-change-visible-columns']
            }], columnRestoreManager: [{
                type: Output,
                args: ['p-restore-column-manager']
            }], sortBy: [{
                type: Output,
                args: ['p-sort-by']
            }], autoRouter: [{
                type: Input,
                args: ['p-auto-router']
            }], fields: [{
                type: Input,
                args: ['p-fields']
            }] });
})();

class PoPageDynamicTableActionsService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
    }
    beforeDuplicate(action, id, body) {
        const resource = body !== null && body !== void 0 ? body : {};
        return this.executeAction({ action, resource, id });
    }
    beforeEdit(action, id, body) {
        const resource = body !== null && body !== void 0 ? body : {};
        return this.executeAction({ action, resource, id });
    }
    beforeNew(action) {
        return this.executeAction({ action });
    }
    beforeRemove(action, id, resource) {
        return this.executeAction({ action, id, resource });
    }
    beforeRemoveAll(action, resources) {
        return this.executeAction({ action, resource: resources });
    }
    beforeDetail(action, id, resource) {
        return this.executeAction({ action, id, resource });
    }
    customAction(action, resource = []) {
        return this.executeAction({ action, resource });
    }
    executeAction({ action, resource = {}, id }) {
        if (!action) {
            return of({});
        }
        if (typeof action === 'string') {
            const url = id ? `${action}/${id}` : action;
            return this.http.post(url, resource, { headers: this.headers });
        }
        if (id) {
            return of(action(id, resource));
        }
        return of(action(resource));
    }
}
PoPageDynamicTableActionsService.ɵfac = function PoPageDynamicTableActionsService_Factory(t) { return new (t || PoPageDynamicTableActionsService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageDynamicTableActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageDynamicTableActionsService, factory: PoPageDynamicTableActionsService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicTableActionsService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

const PAGE_SIZE_DEFAULT = 10;
/**
 * @docsExtends PoPageDynamicListBaseComponent
 *
 * @description
 *
 * O `po-page-dynamic-table` é uma página que exibe uma lista de registros em uma tabela baseado em uma lista de fields,
 * o mesmo também suporta metadados conforme especificado na documentação.
 *
 * ### Utilização via rota
 *
 * Ao utilizar as rotas para carregar o template, o `page-dynamic-table` disponibiliza propriedades para
 * poder especificar o endpoint dos dados e dos metadados. Exemplo de utilização:
 *
 * O componente primeiro irá carregar o metadado da rota definida na propriedade serviceMetadataApi
 * e depois irá buscar da rota definida na propriedade serviceLoadApi
 *
 * > Caso o servidor retornar um erro ao recuperar o metadados, será repassado o metadados salvo em cache,
 * se o cache não existe será disparado uma notificação.
 *
 * ```
 * {
 *   path: 'people',
 *   component: PoPageDynamicTableComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o método HTTP Get
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados utilizando o método HTTP Post
 *   }
 * }
 *
 * ```
 *
 * A requisição dos metadados é feita na inicialização do template para buscar os metadados da página passando o
 * tipo do metadado esperado e a versão cacheada pelo browser.
 *
 * O formato esperado na resposta da requisição está especificado na interface
 * [PoPageDynamicTableMetadata](/documentation/po-page-dynamic-table#po-page-dynamic-table-metadata). Por exemplo:
 *
 * ```
 *  {
 *   version: 1,
 *   title: 'Person Table',
 *   fields: [
 *     { property: 'id', key: true, disabled: true },
 *     { property: 'status' },
 *     { property: 'name' },
 *     { property: 'nickname' },
 *     { property: 'birthdate', label: 'Birth date' },
 *     { property: 'genre' },
 *     { property: 'city' },
 *     { property: 'country' }
 *   ],
 *   keepFilters: true
 * }
 * ```
 *
 * > Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `serviceApi` da seguinte forma:
 * ```
 * GET {end-point}/metadata?type=list&version={version}
 * ```
 *
 * @example
 *
 * <example name="po-page-dynamic-table-basic" title="PO Page Dynamic Table Basic">
 *  <file name="sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-table-people" title="PO Page Dynamic Table - People">
 *  <file name="sample-po-page-dynamic-table-people/sample-po-page-dynamic-table-people.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-people/sample-po-page-dynamic-table-people.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-table-users" title="PO Page Dynamic Table - Users">
 *  <file name="sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.component.ts"> </file>
 *  <file name="sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.service.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-table-hotels" title="PO Page Dynamic Table - Hotels">
 *  <file name="sample-po-page-dynamic-table-hotels/sample-po-page-dynamic-table-hotels.component.html"> </file>
 *  <file name="sample-po-page-dynamic-table-hotels/sample-po-page-dynamic-table-hotels.component.ts"> </file>
 * </example>
 */
class PoPageDynamicTableComponent extends PoPageDynamicListBaseComponent {
    constructor(router, activatedRoute, poDialogService, poNotification, poPageDynamicService, poPageCustomizationService, poPageDynamicTableActionsService, languageService) {
        super();
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poDialogService = poDialogService;
        this.poNotification = poNotification;
        this.poPageDynamicService = poPageDynamicService;
        this.poPageCustomizationService = poPageCustomizationService;
        this.poPageDynamicTableActionsService = poPageDynamicTableActionsService;
        /**
         * @optional
         *
         * @description
         *
         * Mantém na modal de `Busca Avançada` os valores preenchidos do último filtro realizado pelo usuário.
         *
         * @default `false`
         */
        this.keepFilters = false;
        /**
         * @optional
         *
         * @description
         *
         * Define que a coluna de ações ficará no lado direito da tabela.
         *
         * @default `false`
         */
        this.actionRight = false;
        /**
         * @optional
         *
         * @description
         *
         * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
         *
         * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
         * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
         * rápida também na lista de `disclaimers` a aplicando uma nova busca com a concatenação.
         *
         * Por exemplo, com os seguintes filtros aplicados:
         *   - filtro avançado: `{ name: 'Mike', age: '12' }`
         *   - filtro rápido: `{ search: 'paper' }`
         *
         * A requisição dos dados na API ficará com os parâmetros:
         * ```
         * page=1&pageSize=10&name=Mike&age=12&search=paper
         * ```
         *
         * @default `false`
         */
        this.concatFilters = false;
        /**
         * @optional
         *
         * @description
         *
         * Oculta o botão para remover todos os *disclaimers* do grupo.
         *
         * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
         *
         * @default `false`
         */
        this.hideRemoveAllDisclaimer = false;
        /**
         * @optional
         *
         * @description
         *
         * Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o botão "Carregar Mais" deixará de ser exibido. Ao chegar no fim da tabela
         * executará a função `p-show-more`.
         *
         * **Regras de utilização:**
         *  - O scroll infinito só funciona para tabelas que utilizam a propriedade `p-height` e que possuem o scroll já na carga inicial dos dados.
         *
         * @default `false`
         */
        this.infiniteScroll = false;
        this.hasNext = false;
        this.items = [];
        this.pageActions = [];
        this.tableActions = [];
        this._actions = {};
        this._pageCustomActions = [];
        this._tableCustomActions = [];
        this.page = 1;
        this.currentPage = 1;
        this.params = {};
        this.subscriptions = new Subscription();
        this.hasCustomActionWithSelectable = false;
        this._customPageListActions = [];
        this._customTableActions = [];
        this._defaultPageActions = [];
        this._defaultTableActions = [];
        this._hideCloseDisclaimers = [];
        const language = languageService.getShortLanguage();
        this.literals = Object.assign(Object.assign({}, poPageDynamicTableLiteralsDefault[poLocaleDefault]), poPageDynamicTableLiteralsDefault[language]);
    }
    set defaultPageActions(value) {
        this._defaultPageActions = value;
        this.updatePageActions();
    }
    set defaultTableActions(value) {
        this._defaultTableActions = value;
        this.updateTableActions();
    }
    set customPageListActions(value) {
        this._customPageListActions = value;
        this.updatePageActions();
    }
    set customTableActions(value) {
        this._customTableActions = value;
        this.updateTableActions();
    }
    /**
     * @optional
     *
     * @description
     *
     * Ações da página e da tabela.
     * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
     */
    set actions(value) {
        this._actions = value && typeof value === 'object' && Object.keys(value).length > 0 ? value : {};
        this.setPageActions(this.actions);
        this.setRemoveAllAction();
        this.setTableActions(this.actions);
    }
    get actions() {
        return this._actions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações customizadas da página que serão incorporadas às ações
     * informadas através da propriedade `p-actions`.
     *
     * Essas ações ficam localizadas na parte superior da página em botões com ações.
     *
     * Exemplo de utilização:
     * ```
     * [
     *  { label: 'Export', action: this.export.bind(this) },
     *  { label: 'Print', action: this.print.bind(this) }
     * ];
     * ```
     */
    set pageCustomActions(value) {
        this._pageCustomActions = Array.isArray(value) ? value : [];
        this.customPageListActions = this.transformCustomActionsToPageListAction(this.pageCustomActions);
        this.hasCustomActionWithSelectable = this.pageCustomActions.some(customAction => customAction.selectable);
    }
    get pageCustomActions() {
        return this._pageCustomActions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de ações customizadas na tabela da página que serão incorporadas às ações
     * informadas através da propriedade `p-actions`.
     *
     * Exemplo de utilização:
     * ```
     * [
     *  { label: 'Apply discount', action: this.applyDiscount.bind(this) },
     *  { label: 'Details', action: this.details.bind(this) }
     * ];
     * ```
     * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
     */
    set tableCustomActions(value) {
        this._tableCustomActions = Array.isArray(value) ? value : [];
        this.customTableActions = this.transformTableCustomActionsToTableActions(this.tableCustomActions);
    }
    get tableCustomActions() {
        return this._tableCustomActions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Largura do campo de busca, utilizando o *Grid System*,
     * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
     * conforme resolução de tela para manter a consistência do layout.
     */
    set quickSearchWidth(value) {
        this._quickSearchWidth = convertToInt(value);
    }
    get quickSearchWidth() {
        return this._quickSearchWidth;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura da tabela em *pixels* e fixa o cabeçalho.
     */
    set height(value) {
        this._height = convertToInt(value);
    }
    get height() {
        return this._height;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de filtros que terão a opção de fechar ocultada
     * em seu respectivo disclaimer. Utilizar o atributo `property` do campo.
     *
     * Exemplo de utilização:
     * ```
     * ['city','name'];
     * ```
     */
    set hideCloseDisclaimers(value) {
        this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
    }
    get hideCloseDisclaimers() {
        return this._hideCloseDisclaimers;
    }
    ngOnInit() {
        this.loadDataFromAPI();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onAdvancedSearch(filter) {
        this.subscriptions.add(this.loadData(Object.assign({ page: 1 }, filter)).subscribe());
        this.params = filter;
        if (this.keepFilters) {
            this.updateFilterValue(filter);
        }
    }
    onChangeDisclaimers(disclaimers) {
        const filter = {};
        disclaimers.forEach(disclaimer => {
            filter[disclaimer.property] = disclaimer.value;
        });
        this.onAdvancedSearch(filter);
    }
    onQuickSearch(termTypedInQuickSearch) {
        const quickSearchParam = termTypedInQuickSearch ? { search: termTypedInQuickSearch } : {};
        this.params = this.concatFilters ? Object.assign(Object.assign({}, this.params), quickSearchParam) : Object.assign({}, quickSearchParam);
        this.subscriptions.add(this.loadData(termTypedInQuickSearch ? Object.assign({ page: 1 }, this.params) : undefined).subscribe());
    }
    onSort(sortedColumn) {
        this.sortedColumn = sortedColumn;
    }
    onChangeVisibleColumns(value) {
        this.changeVisibleColumns.emit(value);
    }
    onColumnRestoreManager(value) {
        this.columnRestoreManager.emit(value);
    }
    onSortBy(sortedColumn) {
        this.sortBy.emit(sortedColumn);
    }
    showMore() {
        this.subscriptions.add(this.loadData(Object.assign({ page: ++this.page }, this.params)).subscribe());
    }
    get enableSelectionTable() {
        return this.hasActionRemoveAll || this.hasCustomActionWithSelectable;
    }
    get hasActionRemoveAll() {
        return !!this.actions.removeAll;
    }
    /**
     * Função que realiza a atualização dos dados da tabela.
     *
     * Para utilizá-la é necessário capturar a instância do `page dynamic table`, como por exemplo:
     *
     * ``` html
     * <po-page-dynamic-table #dynamicTable [p-service-api]="serviceApi"></po-page-dynamic-table>
     * ```
     *
     * ``` javascript
     * import { PoPageDynamicTableComponent, PoDynamicFormField } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild('dynamicTable', { static: true }) dynamicTable: PoPageDynamicTableComponent;
     *
     * pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
     * {
     *   label: 'Update',
     *   action: this.updateTable.bind(this),
     *   icon: 'po-icon-refresh'
     * }]
     *
     * updateTable() {
     *   this.dynamicTable.updateDataTable();
     * }
     * ```
     *
     *
     * @param {{page: number, key: value }} filter Propriedade para envio de um filtro customizado.
     * Exemplo de envio:
     *
     *```
     * this.dynamicTable.updateDataTable({page: 3, search: 'Brasil'});
     * ```
     * Caso não seja passado um filtro customizado para o método `updateDataTable` a tabela será atualizada conforme a página do ultimo item modificado.
     */
    updateDataTable(filter) {
        const indexItemSelected = this.items.findIndex(item => item === this.itemSelectedAction);
        const pageNumber = Math.floor(indexItemSelected / PAGE_SIZE_DEFAULT);
        this.currentPage = pageNumber < 0 ? this.currentPage : pageNumber + 1;
        if (this.currentPage === undefined) {
            this.currentPage = 1;
        }
        if (filter) {
            this.subscriptions.add(this.loadData(filter).subscribe());
        }
        else {
            this.subscriptions.add(this.loadData(Object.assign({ page: this.currentPage }, this.params)).subscribe());
        }
    }
    confirmRemove(actionRemove, actionBeforeRemove, item) {
        const confirmOptions = {
            title: this.literals.confirmRemoveTitle,
            message: this.literals.confirmRemoveMessage,
            confirm: this.remove.bind(this, item, actionRemove, actionBeforeRemove)
        };
        this.poDialogService.confirm(confirmOptions);
    }
    confirmRemoveAll(actionRemoveAll, actionBeforeRemoveAll) {
        const confirmOptions = {
            title: this.literals.confirmRemoveAllTitle,
            message: this.literals.confirmRemoveAllMessage,
            confirm: this.removeAll.bind(this, actionRemoveAll, actionBeforeRemoveAll)
        };
        this.poDialogService.confirm(confirmOptions);
    }
    formatUniqueKey(item) {
        const keys = mapObjectByProperties(item, this.keys);
        return valuesFromObject(keys).join('|');
    }
    getOrderParam(sortedColumn = { type: undefined }) {
        const { column, type } = sortedColumn;
        if (!column) {
            return {};
        }
        if (type === PoTableColumnSortType.Descending) {
            return { order: `-${column.property}` };
        }
        return { order: `${column.property}` };
    }
    loadData(params = {}) {
        const key = this.keys ? this.keys[0] : 'id';
        if (!this.serviceApi) {
            this.poNotification.error(this.literals.loadDataErrorNotification);
            return EMPTY;
        }
        const orderParam = this.getOrderParam(this.sortedColumn);
        const defaultParams = { page: 1, pageSize: PAGE_SIZE_DEFAULT };
        const fullParams = Object.assign(Object.assign(Object.assign({}, defaultParams), params), orderParam);
        return this.poPageDynamicService.getResources(fullParams).pipe(tap(response => {
            removeDuplicateItems(response.items, this.items, key);
            this.items = fullParams.page === 1 ? response.items : [...this.items, ...response.items];
            this.page = fullParams.page;
            this.hasNext = response.hasNext;
        }));
    }
    getMetadata(serviceApiFromRoute, onLoad) {
        if (serviceApiFromRoute) {
            return this.poPageDynamicService.getMetadata().pipe(tap(response => {
                this.autoRouter = response.autoRouter || this.autoRouter;
                this.actions = response.actions || this.actions;
                this.breadcrumb = response.breadcrumb || this.breadcrumb;
                this.fields = response.fields || this.fields;
                this.title = response.title || this.title;
                this.pageCustomActions = response.pageCustomActions || this.pageCustomActions;
                this.tableCustomActions = response.tableCustomActions || this.tableCustomActions;
                this.keepFilters = response.keepFilters || this.keepFilters;
                this.concatFilters = response.concatFilters || this.concatFilters;
                this.hideRemoveAllDisclaimer = response.hideRemoveAllDisclaimer || this.hideRemoveAllDisclaimer;
                this.hideCloseDisclaimers = response.hideCloseDisclaimers || this.hideCloseDisclaimers;
                this.quickSearchWidth = response.quickSearchWidth || this.quickSearchWidth;
            }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
        }
        return this.loadOptionsOnInitialize(onLoad);
    }
    // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
    navigateTo(route, forceStopAutoRouter = false) {
        this.router.navigate([route.url || route.path], { queryParams: route.params }).catch(() => {
            if (forceStopAutoRouter || !this.autoRouter) {
                return;
            }
            this.router.config.unshift({
                path: route.path,
                component: route.component,
                data: { serviceApi: this.serviceApi, autoRouter: true }
            });
            this.navigateTo(route, true);
        });
    }
    createConcatenatedUrl(concatKeys, url, selectedItem) {
        const keys = this.keys.map(key => encodeURIComponent(selectedItem[key])).join();
        return concatKeys ? `${url}/${keys}` : url;
    }
    openDetail(action, item) {
        const id = this.formatUniqueKey(item);
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeDetail(this.actions.beforeDetail, id, item)
            .subscribe((beforeDetailResult) => this.executeDetail(action, beforeDetailResult, id, item)));
    }
    executeDetail(action, beforeDetailResult, id, item) {
        const before = beforeDetailResult !== null && beforeDetailResult !== void 0 ? beforeDetailResult : {};
        const allowAction = typeof before.allowAction === 'boolean' ? before.allowAction : true;
        const { newUrl } = before;
        if (allowAction && action) {
            if (newUrl) {
                const path = this.getPathFromNewUrl(newUrl, id);
                return this.navigateTo({ path });
            }
            if (typeof action === 'string') {
                const url = this.resolveUrl(item, action);
                this.navigateTo({ path: action, url, component: PoPageDynamicDetailComponent });
            }
            else {
                action(id, item);
            }
        }
    }
    getPathFromNewUrl(newUrl, id) {
        if (newUrl.includes(':id')) {
            return newUrl.replace(/:id/g, id);
        }
        return newUrl;
    }
    openDuplicate(actionDuplicate, item) {
        const id = this.formatUniqueKey(item);
        const duplicates = removeKeysProperties(this.keys, mapObjectByProperties(item, this.duplicates));
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeDuplicate(this.actions.beforeDuplicate, id, duplicates)
            .subscribe((beforeDuplicateResult) => this.executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates)));
    }
    executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates) {
        var _a;
        const before = beforeDuplicateResult !== null && beforeDuplicateResult !== void 0 ? beforeDuplicateResult : {};
        const allowAction = typeof before.allowAction === 'boolean' ? before.allowAction : true;
        const beforeDuplicateResource = before.resource;
        const newAction = (_a = before.newUrl) !== null && _a !== void 0 ? _a : actionDuplicate;
        if (allowAction && actionDuplicate) {
            if (typeof beforeDuplicateResource === 'object' && beforeDuplicateResource !== null) {
                duplicates = removeKeysProperties(this.keys, beforeDuplicateResource);
            }
            if (typeof newAction === 'string') {
                return this.navigateTo({ path: newAction, params: { duplicate: JSON.stringify(duplicates) } });
            }
            return newAction(duplicates);
        }
    }
    openEdit(actionEdit, item) {
        const id = this.formatUniqueKey(item);
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeEdit(this.actions.beforeEdit, id, item)
            .pipe(switchMap((beforeEditResult) => this.executeEditAction(actionEdit, beforeEditResult, item, id)))
            .subscribe());
    }
    executeEditAction(action, beforeEditResult, item, id) {
        var _a, _b;
        const newEditAction = (_a = beforeEditResult === null || beforeEditResult === void 0 ? void 0 : beforeEditResult.newUrl) !== null && _a !== void 0 ? _a : action;
        const allowAction = (_b = beforeEditResult === null || beforeEditResult === void 0 ? void 0 : beforeEditResult.allowAction) !== null && _b !== void 0 ? _b : true;
        if (!allowAction) {
            return EMPTY;
        }
        if (typeof newEditAction === 'string') {
            this.openEditUrl(newEditAction, item);
        }
        else {
            const updatedItem = newEditAction(id, item);
            if (typeof updatedItem === 'object' && updatedItem !== null) {
                this.modifyUITableItem(item, removeKeysProperties(this.keys, updatedItem));
            }
        }
        return EMPTY;
    }
    openEditUrl(path, item) {
        const url = this.resolveUrl(item, path);
        this.navigateTo({ path, url });
    }
    modifyUITableItem(currentItem, newItemValue) {
        const tableItem = this.items.findIndex(item => item === currentItem);
        this.items[tableItem] = Object.assign(Object.assign({}, currentItem), newItemValue);
    }
    openNew(actionNew) {
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeNew(this.actions.beforeNew)
            .subscribe((beforeNewResult) => this.executeNew(actionNew, beforeNewResult)));
    }
    executeNew(actionNew, beforeNewResult) {
        const before = beforeNewResult !== null && beforeNewResult !== void 0 ? beforeNewResult : {};
        const allowAction = typeof before.allowAction === 'boolean' ? before.allowAction : true;
        const { newUrl } = before;
        if (allowAction && actionNew) {
            if (newUrl) {
                return this.navigateTo({ path: newUrl });
            }
            if (typeof actionNew === 'string') {
                return this.navigateTo({ path: actionNew });
            }
            return actionNew();
        }
    }
    /**
     * Caso exista mais de um identificador, será concatenado com '|'.
     *
     * Ex: { id: 1, company: 'po' }
     *
     * Para o endpoint /resources/:id será executada a url /resources/1|po
     */
    remove(item, actionRemove, actionBeforeRemove) {
        const uniqueKey = this.formatUniqueKey(item);
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeRemove(actionBeforeRemove, uniqueKey, item)
            .pipe(switchMap(beforeRemove => this.deleteAction(item, actionRemove, beforeRemove)))
            .subscribe());
    }
    deleteAction(item, actionRemove, beforeRemove) {
        const { allowAction, newUrl } = beforeRemove || {};
        const allow = allowAction !== null && allowAction !== void 0 ? allowAction : true;
        if (allow) {
            let uniqueKey = this.formatUniqueKey(item);
            const resourceToRemoveKey = this.returnResourcesKeys([item]);
            if (typeof actionRemove === 'boolean' || newUrl) {
                uniqueKey = newUrl ? undefined : uniqueKey;
                return this.poPageDynamicService
                    .deleteResource(uniqueKey, newUrl)
                    .pipe(map(() => this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification)));
            }
            return of(actionRemove(uniqueKey, item)).pipe(tap(remove => {
                const removeItem = remove !== null && remove !== void 0 ? remove : false;
                this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification, removeItem);
            }));
        }
        return of({});
    }
    removeFromUI(items, message, remove = true) {
        if (remove === true && (items === null || items === void 0 ? void 0 : items.length)) {
            this.removeLocalItems(items);
            this.poNotification.success(message);
        }
    }
    removeAll(actionRemoveAll, actionBeforeRemoveAll) {
        const originalResourcesKeys = this.getSelectedItemsKeys();
        this.subscriptions.add(this.poPageDynamicTableActionsService
            .beforeRemoveAll(actionBeforeRemoveAll, originalResourcesKeys)
            .pipe(switchMap(beforeRemove => this.deleteAllAction(actionRemoveAll, beforeRemove, originalResourcesKeys)))
            .subscribe());
    }
    getSelectedItemsKeys() {
        const resources = this.items.filter(item => item.$selected);
        if (resources.length === 0) {
            return;
        }
        return this.returnResourcesKeys(resources);
    }
    returnResourcesKeys(resources) {
        return mapArrayByProperties(resources, this.keys);
    }
    deleteAllAction(actionRemoveAll, beforeRemoveAll, originalResources) {
        const { allowAction, newUrl, resources } = beforeRemoveAll !== null && beforeRemoveAll !== void 0 ? beforeRemoveAll : {};
        const allow = allowAction !== null && allowAction !== void 0 ? allowAction : true;
        const resourcestoDelete = resources !== null && resources !== void 0 ? resources : originalResources;
        if (allow && Array.isArray(resourcestoDelete)) {
            if (typeof actionRemoveAll === 'boolean' || newUrl) {
                return this.poPageDynamicService.deleteResources(resourcestoDelete, newUrl).pipe(tap(() => {
                    this.removeFromUI(resourcestoDelete, this.literals.removeAllSuccessNotification);
                }));
            }
            return of(actionRemoveAll(resourcestoDelete)).pipe(tap(removeItems => this.removeFromUI(removeItems, this.literals.removeSuccessNotification)));
        }
        return of({});
    }
    removeLocalItems(itemsKeysToRemove = []) {
        if (itemsKeysToRemove.length) {
            this.items = this.items.filter(item => {
                const itemKey = this.formatUniqueKey(item);
                return !itemsKeysToRemove.find(itemKeyToRemove => valuesFromObject(itemKeyToRemove).join('|') === itemKey);
            });
        }
    }
    resolveUrl(item, path) {
        const uniqueKey = this.formatUniqueKey(item);
        return path.replace(/:id/g, uniqueKey);
    }
    setPageActions(actions) {
        if (actions === null || actions === void 0 ? void 0 : actions.new) {
            this.defaultPageActions = [{ label: this.literals.pageAction, action: this.openNew.bind(this, actions.new) }];
        }
    }
    transformCustomActionsToPageListAction(customActions) {
        /* istanbul ignore next */
        return customActions.map(customAction => (Object.assign(Object.assign({ label: customAction.label, action: this.callPageCustomAction.bind(this, customAction), disabled: this.isDisablePageCustomAction.bind(this, customAction) }, (customAction.icon && { icon: customAction.icon })), { visible: customAction.visible })));
    }
    transformTableCustomActionsToTableActions(tableCustomActions) {
        return tableCustomActions.map(tableCustomAction => ({
            label: tableCustomAction.label,
            icon: tableCustomAction.icon,
            action: this.callTableCustomAction.bind(this, tableCustomAction),
            disabled: tableCustomAction.disabled,
            visible: tableCustomAction.visible
        }));
    }
    isDisablePageCustomAction(customAction) {
        return customAction.selectable && !this.getSelectedItemsKeys();
    }
    callPageCustomAction(customAction) {
        if (customAction.action) {
            const selectedItems = customAction.selectable ? this.getSelectedItemsKeys() : undefined;
            const sendCustomActionSubscription = this.poPageDynamicTableActionsService
                .customAction(customAction.action, selectedItems)
                .subscribe();
            this.subscriptions.add(sendCustomActionSubscription);
        }
        else if (customAction.url) {
            this.navigateTo({ path: customAction.url });
        }
    }
    callTableCustomAction(customAction, selectedItem) {
        this.itemSelectedAction = selectedItem;
        if (customAction.action) {
            const sendCustomActionSubscription = this.poPageDynamicTableActionsService
                .customAction(customAction.action, selectedItem)
                .subscribe(updatedItem => {
                if (typeof updatedItem === 'object' && updatedItem !== null) {
                    this.modifyUITableItem(selectedItem, removeKeysProperties(this.keys, updatedItem));
                }
            });
            this.subscriptions.add(sendCustomActionSubscription);
        }
        else if (customAction.url) {
            if (isExternalLink(customAction.url)) {
                openExternalLink(this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem));
            }
            else {
                this.navigateTo({
                    path: this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem)
                });
            }
        }
    }
    setRemoveAllAction() {
        const action = this._actions;
        if (this.showRemove(action.removeAll)) {
            this.defaultPageActions = [
                ...this._defaultPageActions,
                {
                    label: this.literals.pageActionRemoveAll,
                    action: this.confirmRemoveAll.bind(this, action.removeAll, action.beforeRemoveAll),
                    disabled: this.disableRemoveAll.bind(this)
                }
            ];
        }
    }
    disableRemoveAll() {
        return !this.getSelectedItemsKeys();
    }
    setTableActions(actions) {
        if (actions) {
            const visibleRemove = this.showRemove(actions.remove);
            this.defaultTableActions = [
                {
                    action: this.openDetail.bind(this, actions.detail),
                    label: this.literals.tableActionView,
                    visible: !!this._actions.detail
                },
                {
                    action: this.openEdit.bind(this, actions.edit),
                    label: this.literals.tableActionEdit,
                    visible: !!this._actions.edit
                },
                {
                    action: this.openDuplicate.bind(this, actions.duplicate),
                    label: this.literals.tableActionDuplicate,
                    visible: !!this._actions.duplicate
                },
                {
                    action: this.confirmRemove.bind(this, actions.remove, actions.beforeRemove),
                    label: this.literals.tableActionDelete,
                    separator: true,
                    type: 'danger',
                    visible: visibleRemove
                }
            ];
        }
    }
    loadDataFromAPI() {
        const { serviceApi: serviceApiFromRoute, serviceMetadataApi, serviceLoadApi } = this.activatedRoute.snapshot.data;
        const onLoad = serviceLoadApi || this.onLoad;
        this.serviceApi = serviceApiFromRoute || this.serviceApi;
        this.poPageDynamicService.configServiceApi({ endpoint: this.serviceApi, metadata: serviceMetadataApi });
        const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
        const data$ = this.loadData();
        this.subscriptions.add(metadata$
            .pipe(switchMap(() => {
            const initialFilters = this.getInitialValuesFromFilter();
            if (!Object.keys(initialFilters).length) {
                return data$;
            }
            return EMPTY;
        }))
            .subscribe());
    }
    getInitialValuesFromFilter() {
        const initialFilters = this.filters.reduce((result, item) => Object.assign(result, { [item.property]: item.initValue }), {});
        Object.keys(initialFilters).forEach(key => {
            if (!initialFilters[key]) {
                delete initialFilters[key];
            }
        });
        return initialFilters;
    }
    loadOptionsOnInitialize(onLoad) {
        if (onLoad) {
            return this.getPoDynamicPageOptions(onLoad).pipe(tap(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
        }
        return of(null);
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            fields: this.fields,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            title: this.title,
            keepFilters: this.keepFilters,
            concatFilters: this.concatFilters,
            hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
            hideCloseDisclaimers: this.hideCloseDisclaimers,
            pageCustomActions: this.pageCustomActions,
            tableCustomActions: this.tableCustomActions,
            quickSearchWidth: this.quickSearchWidth
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'fields',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                },
                {
                    nameProp: 'keepFilters'
                },
                {
                    nameProp: 'quickSearchWidth'
                },
                {
                    nameProp: 'concatFilters'
                },
                {
                    nameProp: 'hideRemoveAllDisclaimer'
                },
                {
                    nameProp: 'hideCloseDisclaimers'
                },
                {
                    nameProp: 'pageCustomActions',
                    merge: true,
                    keyForMerge: 'label'
                },
                {
                    nameProp: 'tableCustomActions',
                    merge: true,
                    keyForMerge: 'label'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
    showRemove(actionRemove) {
        const action = actionRemove !== null && actionRemove !== void 0 ? actionRemove : false;
        if (typeof action === 'boolean') {
            return action;
        }
        return true;
    }
    updateFilterValue(filter) {
        return this.fields.map(item => {
            if (filter.hasOwnProperty(item.property)) {
                item.initValue = filter[item.property];
            }
        });
    }
    updatePageActions() {
        this.pageActions = [...this._defaultPageActions, ...this._customPageListActions];
    }
    updateTableActions() {
        const defaultTableActionsWithoutActionDelete = this._defaultTableActions.filter(tableAction => tableAction.label !== this.literals.tableActionDelete);
        const tableActionDelete = this._defaultTableActions.find(tableAction => tableAction.label === this.literals.tableActionDelete);
        const newTableActions = [...defaultTableActionsWithoutActionDelete, ...this._customTableActions];
        if (tableActionDelete) {
            newTableActions.push(tableActionDelete);
        }
        this.tableActions = newTableActions;
    }
}
PoPageDynamicTableComponent.ɵfac = function PoPageDynamicTableComponent_Factory(t) { return new (t || PoPageDynamicTableComponent)(i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(PoPageDynamicService), i0.ɵɵdirectiveInject(PoPageCustomizationService), i0.ɵɵdirectiveInject(PoPageDynamicTableActionsService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicTableComponent, selectors: [["po-page-dynamic-table"]], inputs: { onLoad: ["p-load", "onLoad"], keepFilters: ["p-keep-filters", "keepFilters"], actionRight: ["p-actions-right", "actionRight"], concatFilters: ["p-concat-filters", "concatFilters"], hideRemoveAllDisclaimer: ["p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer"], infiniteScroll: ["p-infinite-scroll", "infiniteScroll"], actions: ["p-actions", "actions"], pageCustomActions: ["p-page-custom-actions", "pageCustomActions"], tableCustomActions: ["p-table-custom-actions", "tableCustomActions"], quickSearchWidth: ["p-quick-search-width", "quickSearchWidth"], height: ["p-height", "height"], hideCloseDisclaimers: ["p-hide-close-disclaimers", "hideCloseDisclaimers"] }, features: [i0.ɵɵProvidersFeature([PoPageDynamicService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 18, consts: [[3, "p-actions", "p-breadcrumb", "p-hide-close-disclaimers", "p-filters", "p-keep-filters", "p-concat-filters", "p-hide-remove-all-disclaimer", "p-quick-search-width", "p-title", "p-advanced-search", "p-change-disclaimers", "p-quick-search"], [3, "p-sort", "p-actions", "p-actions-right", "p-selectable", "p-columns", "p-items", "p-height", "p-infinite-scroll", "p-show-more-disabled", "p-show-more", "p-sort-by", "p-change-visible-columns", "p-restore-column-manager"]], template: function PoPageDynamicTableComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "po-page-dynamic-search", 0);
            i0.ɵɵlistener("p-advanced-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_advanced_search_0_listener($event) { return ctx.onAdvancedSearch($event); })("p-change-disclaimers", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_change_disclaimers_0_listener($event) { return ctx.onChangeDisclaimers($event); })("p-quick-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_quick_search_0_listener($event) { return ctx.onQuickSearch($event); });
            i0.ɵɵelementStart(1, "po-table", 1);
            i0.ɵɵlistener("p-show-more", function PoPageDynamicTableComponent_Template_po_table_p_show_more_1_listener() { return ctx.showMore(); })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) { return ctx.onSort($event); })("p-change-visible-columns", function PoPageDynamicTableComponent_Template_po_table_p_change_visible_columns_1_listener($event) { return ctx.onChangeVisibleColumns($event); })("p-restore-column-manager", function PoPageDynamicTableComponent_Template_po_table_p_restore_column_manager_1_listener($event) { return ctx.onColumnRestoreManager($event); })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) { return ctx.onSortBy($event); });
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-hide-close-disclaimers", ctx.hideCloseDisclaimers)("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-concat-filters", ctx.concatFilters)("p-hide-remove-all-disclaimer", ctx.hideRemoveAllDisclaimer)("p-quick-search-width", ctx.quickSearchWidth)("p-title", ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-sort", true)("p-actions", ctx.tableActions)("p-actions-right", ctx.actionRight)("p-selectable", ctx.enableSelectionTable)("p-columns", ctx.columns)("p-items", ctx.items)("p-height", ctx.height)("p-infinite-scroll", ctx.infiniteScroll)("p-show-more-disabled", !ctx.hasNext);
        }
    }, dependencies: [i2.PoTableComponent, PoPageDynamicSearchComponent], encapsulation: 2 });
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "keepFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "actionRight", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "concatFilters", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "hideRemoveAllDisclaimer", void 0);
__decorate([
    InputBoolean()
], PoPageDynamicTableComponent.prototype, "infiniteScroll", void 0);
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicTableComponent, [{
            type: Component,
            args: [{ selector: 'po-page-dynamic-table', providers: [PoPageDynamicService], template: "<po-page-dynamic-search\r\n  [p-actions]=\"pageActions\"\r\n  [p-breadcrumb]=\"breadcrumb\"\r\n  [p-hide-close-disclaimers]=\"hideCloseDisclaimers\"\r\n  [p-filters]=\"filters\"\r\n  [p-keep-filters]=\"keepFilters\"\r\n  [p-concat-filters]=\"concatFilters\"\r\n  [p-hide-remove-all-disclaimer]=\"hideRemoveAllDisclaimer\"\r\n  [p-quick-search-width]=\"quickSearchWidth\"\r\n  [p-title]=\"title\"\r\n  (p-advanced-search)=\"onAdvancedSearch($event)\"\r\n  (p-change-disclaimers)=\"onChangeDisclaimers($event)\"\r\n  (p-quick-search)=\"onQuickSearch($event)\"\r\n>\r\n  <po-table\r\n    [p-sort]=\"true\"\r\n    [p-actions]=\"tableActions\"\r\n    [p-actions-right]=\"actionRight\"\r\n    [p-selectable]=\"enableSelectionTable\"\r\n    [p-columns]=\"columns\"\r\n    [p-items]=\"items\"\r\n    [p-height]=\"height\"\r\n    [p-infinite-scroll]=\"infiniteScroll\"\r\n    [p-show-more-disabled]=\"!hasNext\"\r\n    (p-show-more)=\"showMore()\"\r\n    (p-sort-by)=\"onSort($event)\"\r\n    (p-change-visible-columns)=\"onChangeVisibleColumns($event)\"\r\n    (p-restore-column-manager)=\"onColumnRestoreManager($event)\"\r\n    (p-sort-by)=\"onSortBy($event)\"\r\n  >\r\n  </po-table>\r\n</po-page-dynamic-search>\r\n" }]
        }], function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: i2.PoDialogService }, { type: i2.PoNotificationService }, { type: PoPageDynamicService }, { type: PoPageCustomizationService }, { type: PoPageDynamicTableActionsService }, { type: i2.PoLanguageService }]; }, { onLoad: [{
                type: Input,
                args: ['p-load']
            }], keepFilters: [{
                type: Input,
                args: ['p-keep-filters']
            }], actionRight: [{
                type: Input,
                args: ['p-actions-right']
            }], concatFilters: [{
                type: Input,
                args: ['p-concat-filters']
            }], hideRemoveAllDisclaimer: [{
                type: Input,
                args: ['p-hide-remove-all-disclaimer']
            }], infiniteScroll: [{
                type: Input,
                args: ['p-infinite-scroll']
            }], actions: [{
                type: Input,
                args: ['p-actions']
            }], pageCustomActions: [{
                type: Input,
                args: ['p-page-custom-actions']
            }], tableCustomActions: [{
                type: Input,
                args: ['p-table-custom-actions']
            }], quickSearchWidth: [{
                type: Input,
                args: ['p-quick-search-width']
            }], height: [{
                type: Input,
                args: ['p-height']
            }], hideCloseDisclaimers: [{
                type: Input,
                args: ['p-hide-close-disclaimers']
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-page-dynamic-table.
 */
class PoPageDynamicTableModule {
}
PoPageDynamicTableModule.ɵfac = function PoPageDynamicTableModule_Factory(t) { return new (t || PoPageDynamicTableModule)(); };
PoPageDynamicTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageDynamicTableModule });
PoPageDynamicTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        RouterModule,
        PoTableModule,
        PoPageDynamicSearchModule,
        PoPageCustomizationModule,
        PoPageDynamicModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicTableModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        PoTableModule,
                        PoPageDynamicSearchModule,
                        PoPageCustomizationModule,
                        PoPageDynamicModule
                    ],
                    declarations: [PoPageDynamicTableComponent],
                    exports: [PoPageDynamicTableComponent]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageDynamicTableModule, { declarations: [PoPageDynamicTableComponent], imports: [CommonModule,
            FormsModule,
            RouterModule,
            PoTableModule,
            PoPageDynamicSearchModule,
            PoPageCustomizationModule,
            PoPageDynamicModule], exports: [PoPageDynamicTableComponent] });
})();

class PoPageJobSchedulerInternal {
    constructor() {
        this.periodicity = 'single';
        this.firstExecution = new Date();
        this.firstExecutionHour = this.getCurrentHour(this.firstExecution);
        this.recurrent = true;
        this.frequency = {};
    }
    getCurrentHour(date) {
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return `${hours}:${minutes}`;
    }
}

class PoPageJobSchedulerService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
        this.endpoint = '/';
    }
    configServiceApi(config = {}) {
        this.endpoint = config.endpoint;
    }
    // Cria um recurso
    createResource(resource) {
        const newResouce = this.convertToJobScheduler(resource);
        return this.http.post(`${this.endpoint}`, newResouce, { headers: this.headers });
    }
    getHeadProcesses() {
        const headers = { 'X-PO-No-Error': 'true' };
        return this.http.head(`${this.endpoint}/processes`, { headers });
    }
    // Busca parametros pelo processo id
    getParametersByProcess(processId) {
        return this.http
            .get(`${this.endpoint}/processes/${processId}/parameters`, { headers: this.headers })
            .pipe(map((resource) => resource.items));
    }
    // Busca um único recurso
    getProcess(id) {
        return this.http.get(`${this.endpoint}/processes/${id}`, { headers: this.headers });
    }
    // Busca uma lista de processos
    getProcesses(params = {}) {
        return this.http.get(`${this.endpoint}/processes`, { params });
    }
    // Busca um único recurso
    getResource(id) {
        return this.http
            .get(`${this.endpoint}/${id}`, { headers: this.headers })
            .pipe(map(resource => this.convertToJobSchedulerInternal(resource)));
    }
    // Atualiza um recurso
    updateResource(id, resource) {
        const newResouce = this.convertToJobScheduler(resource);
        return this.http.put(`${this.endpoint}/${id}`, newResouce, { headers: this.headers });
    }
    convertToJobScheduler(jobSchedulerInternal) {
        const jobScheduler = Object.assign({}, jobSchedulerInternal);
        if (jobSchedulerInternal.periodicity) {
            if (jobSchedulerInternal.periodicity === 'single') {
                jobScheduler.recurrent = false;
            }
            else {
                Object.assign(jobScheduler, this.convertToPeriodicity(jobSchedulerInternal));
            }
        }
        if (jobSchedulerInternal.firstExecutionHour) {
            jobScheduler.firstExecution = this.replaceHourFirstExecution(jobSchedulerInternal.firstExecution, jobSchedulerInternal.firstExecutionHour);
        }
        if (jobSchedulerInternal.frequency && jobSchedulerInternal.frequency.type) {
            jobScheduler.rangeExecutions = {
                frequency: Object.assign({}, jobSchedulerInternal.frequency)
            };
            if (jobSchedulerInternal.rangeLimitHour) {
                const splitRangeLimitHour = jobSchedulerInternal.rangeLimitHour.split(':');
                jobScheduler.rangeExecutions.rangeLimit = {
                    hour: parseInt(splitRangeLimitHour[0], 10),
                    minute: parseInt(splitRangeLimitHour[1], 10)
                };
            }
            if (jobSchedulerInternal.rangeLimitDay) {
                jobScheduler.rangeExecutions.rangeLimit = Object.assign(Object.assign({}, jobScheduler.rangeExecutions.rangeLimit), { day: jobSchedulerInternal.rangeLimitDay });
            }
        }
        if (!Object.keys(this.returnValidExecutionParameter(jobScheduler.executionParameter)).length) {
            delete jobScheduler.executionParameter;
        }
        this.removeInvalidKeys(jobScheduler);
        return jobScheduler;
    }
    convertToJobSchedulerInternal(jobScheduler = {}) {
        const jobSchedulerInternal = Object.assign({}, jobScheduler);
        if (jobScheduler.firstExecution) {
            jobSchedulerInternal.firstExecutionHour = this.getHourFirstExecution(jobScheduler.firstExecution);
        }
        Object.assign(jobSchedulerInternal, this.convertToPeriodicityInternal(jobScheduler));
        if (jobScheduler.rangeExecutions) {
            jobSchedulerInternal.rangeLimitHour = `${jobScheduler.rangeExecutions.rangeLimit.hour < 10
                ? '0' + jobScheduler.rangeExecutions.rangeLimit.hour
                : jobScheduler.rangeExecutions.rangeLimit.hour}:${jobScheduler.rangeExecutions.rangeLimit.minute < 10
                ? '0' + jobScheduler.rangeExecutions.rangeLimit.minute
                : jobScheduler.rangeExecutions.rangeLimit.minute}`;
            jobSchedulerInternal.rangeLimitDay = jobScheduler.rangeExecutions.rangeLimit.day;
            jobSchedulerInternal.frequency = {
                type: jobScheduler.rangeExecutions.frequency.type,
                value: jobScheduler.rangeExecutions.frequency.value
            };
        }
        this.removeInvalidKeys(jobSchedulerInternal, ['weekly', 'monthly', 'daily']);
        return jobSchedulerInternal;
    }
    convertToPeriodicity(value) {
        const newValue = {};
        const valuePeriodicity = value.periodicity;
        if (valuePeriodicity) {
            newValue[valuePeriodicity] = {};
            if (valuePeriodicity === 'monthly') {
                newValue[valuePeriodicity].day = value.dayOfMonth ? parseInt(value.dayOfMonth, 10) : 0;
            }
            else if (valuePeriodicity === 'weekly') {
                newValue[valuePeriodicity].daysOfWeek = value.daysOfWeek;
            }
            newValue[valuePeriodicity].hour = value.hour ? parseInt(value.hour.split(':')[0], 10) : 0;
            newValue[valuePeriodicity].minute = value.hour ? parseInt(value.hour.split(':')[1], 10) : 0;
        }
        return newValue;
    }
    convertToPeriodicityInternal(value = {}) {
        if (value.monthly) {
            return {
                periodicity: 'monthly',
                hour: `${addZero(value.monthly.hour)}:${addZero(value.monthly.minute)}`,
                dayOfMonth: value.monthly.day
            };
        }
        else if (value.daily) {
            return {
                periodicity: 'daily',
                hour: `${addZero(value.daily.hour)}:${addZero(value.daily.minute)}`
            };
        }
        else if (value.weekly) {
            return {
                periodicity: 'weekly',
                hour: `${addZero(value.weekly.hour)}:${addZero(value.weekly.minute)}`,
                daysOfWeek: [...value.weekly.daysOfWeek]
            };
        }
        else {
            return {
                periodicity: 'single'
            };
        }
    }
    getCurrentHour(date) {
        const hours = addZero(date.getHours());
        const minutes = addZero(date.getMinutes());
        return `${hours}:${minutes}`;
    }
    getHourFirstExecution(firstExecutionDate) {
        return this.getCurrentHour(new Date(firstExecutionDate));
    }
    removeInvalidKeys(value, keys) {
        const invalidKeys = keys || [
            'periodicity',
            'hour',
            'minute',
            'day',
            'daysOfWeek',
            'dayOfMonth',
            'firstExecutionHour',
            'frequency',
            'rangeLimitHour',
            'rangeLimitDay'
        ];
        Object.keys(value).forEach(key => {
            if (invalidKeys.includes(key)) {
                delete value[key];
            }
            else if (key === 'rangeExecutions' && value['periodicity'] === 'single') {
                delete value[key];
            }
        });
    }
    replaceHourFirstExecution(date, time) {
        const firstExecutionDate = new Date(date);
        const timeSplited = time.split(':');
        const hours = parseInt(timeSplited[0], 10);
        const minutes = parseInt(timeSplited[1], 10);
        firstExecutionDate.setHours(hours, minutes);
        return convertDateToISOExtended(firstExecutionDate);
    }
    returnValidExecutionParameter(parameter) {
        const newParameter = Object.assign({}, parameter);
        for (const key in newParameter) {
            if (newParameter.hasOwnProperty(key) && newParameter[key] === undefined) {
                delete newParameter[key];
            }
        }
        return newParameter;
    }
}
PoPageJobSchedulerService.ɵfac = function PoPageJobSchedulerService_Factory(t) { return new (t || PoPageJobSchedulerService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageJobSchedulerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageJobSchedulerService, factory: PoPageJobSchedulerService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerService, [{
            type: Injectable
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

/**
 * @description
 *
 * O `po-page-job-scheduler` é uma página para criação e atualização de agendamentos da execução de processos (Job Scheduler),
 * como por exemplo: a geração da folha de pagamento dos funcionários.
 *
 * Para utilizar esta página, basta informar o serviço (endpoint) para consumo,
 * sem a necessidade de criar componentes e tratamentos dos dados.
 *
 * Veja mais sobre os padrões utilizados nas requisições no [Guia de implementação de APIs](guides/api).
 */
class PoPageJobSchedulerBaseComponent {
    constructor(poPageJobSchedulerService) {
        this.poPageJobSchedulerService = poPageJobSchedulerService;
        /** Objeto com as propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        /**
         * Parâmetros que serão utilizados para criação e edição dos agendamentos.
         *
         * Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.
         *
         */
        this.parameters = [];
        /**
         * @description
         * @todo stepsCustomization
         * Componente customizado que será renderizado na etapa de parametrizações
         */
        // @Input('p-custom-steps') stepsCustomization: PoJobSchedulerCustomSteps; //@todo => change to ng-template value
        this.model = new PoPageJobSchedulerInternal();
        this._subscription = new Subscription();
    }
    set value(value) {
        this.model = this.poPageJobSchedulerService.convertToJobSchedulerInternal(value);
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    loadData(id) {
        if (!id) {
            this.model = this.model || new PoPageJobSchedulerInternal();
            return;
        }
        this._subscription.add(this.poPageJobSchedulerService.getResource(id).subscribe((response) => {
            this.model = response;
        }, () => {
            this.model = new PoPageJobSchedulerInternal();
        }));
    }
    markAsDirtyInvalidControls(controls) {
        for (const key in controls) {
            if (controls.hasOwnProperty(key)) {
                const control = controls[key];
                if (control.invalid) {
                    control.markAsDirty();
                }
            }
        }
    }
}
PoPageJobSchedulerBaseComponent.ɵfac = function PoPageJobSchedulerBaseComponent_Factory(t) { return new (t || PoPageJobSchedulerBaseComponent)(i0.ɵɵdirectiveInject(PoPageJobSchedulerService)); };
PoPageJobSchedulerBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageJobSchedulerBaseComponent, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], serviceApi: ["p-service-api", "serviceApi"], title: ["p-title", "title"], parameters: ["p-parameters", "parameters"], value: ["p-value", "value"] } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerBaseComponent, [{
            type: Directive
        }], function () { return [{ type: PoPageJobSchedulerService }]; }, { breadcrumb: [{
                type: Input,
                args: ['p-breadcrumb']
            }], serviceApi: [{
                type: Input,
                args: ['p-service-api']
            }], title: [{
                type: Input,
                args: ['p-title']
            }], parameters: [{
                type: Input,
                args: ['p-parameters']
            }], value: [{
                type: Input,
                args: ['p-value']
            }] });
})();

const poPageJobSchedulerLiteralsDefault = {
    en: {
        at: 'at',
        back: 'Back',
        next: 'Next',
        periodicity: 'Periodicity',
        execution: 'Execution',
        process: 'Process',
        enterProcess: 'Enter a process',
        recurrent: 'Recurrent',
        single: 'Single',
        daily: 'Daily',
        weekly: 'Weekly',
        monthly: 'Monthly',
        scheduling: 'Scheduling',
        parameterization: 'Parameterization',
        conclude: 'Conclude',
        firstExecution: 'First Execution',
        startTime: 'Start time',
        endTime: 'End time',
        time: 'Time',
        hour: 'Hour',
        minute: 'Minute',
        day: 'Day',
        endDay: 'End day',
        startDay: 'Start day',
        weekDays: 'Week days',
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        parameters: 'Parameters',
        yes: 'Yes',
        no: 'No',
        notReported: 'Not reported',
        periodicityData: 'Periodicity data',
        confirmation: 'Confirmation',
        confirmSaveMessage: 'Are you sure you want to complete this schedule?',
        confirmUpdateMessage: 'Are you sure you want to update this schedule?',
        saveNotificationSuccessUpdate: 'Successfully updated scheduling',
        saveNotificationSuccessSave: 'Successfully saved scheduling',
        parametersNotFound: 'Parameters not found.',
        frequency: 'Frequency',
        to: 'to',
        from: 'from'
    },
    es: {
        at: 'a las',
        back: 'Volver',
        next: 'Avanzar',
        periodicity: 'Periodicidad',
        execution: 'Ejecución',
        process: 'Proceso',
        enterProcess: 'Informe un proceso',
        recurrent: 'Recurrente',
        single: 'Única',
        daily: 'Diaria',
        weekly: 'Semanal',
        monthly: 'Mensual',
        scheduling: 'Programación',
        parameterization: 'Parametrización',
        conclude: 'Completar',
        firstExecution: 'Primera ejecución',
        startTime: 'Hora de inicio',
        endTime: 'Hora de finalización',
        time: 'Horário',
        hour: 'Hora',
        minute: 'Minute',
        day: 'Día',
        endDay: 'Último Día',
        startDay: 'Día de inicio',
        weekDays: 'Dias de la semana',
        sunday: 'Domingo',
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        parameters: 'Parámetros',
        yes: 'Sí',
        no: 'No',
        notReported: 'No informado',
        periodicityData: 'Dados da periodicidade',
        confirmation: 'Confirmación',
        confirmSaveMessage: '¿Está seguro de que desea completar esta programación de proceso?',
        confirmUpdateMessage: '¿Está seguro de que desea cambiar esta programación de proceso?',
        saveNotificationSuccessUpdate: 'Programación de proceso actualizada con éxito.',
        saveNotificationSuccessSave: 'Programación de proceso salvo con éxito.',
        parametersNotFound: 'No se encontraron parámetros.',
        frequency: 'Frecuencia',
        to: 'de',
        from: 'a'
    },
    pt: {
        at: 'às',
        back: 'Voltar',
        next: 'Avançar',
        periodicity: 'Periodicidade',
        execution: 'Execução',
        process: 'Processo',
        enterProcess: 'Informe um processo',
        recurrent: 'Recorrente',
        single: 'Única',
        daily: 'Diária',
        weekly: 'Semanal',
        monthly: 'Mensal',
        scheduling: 'Agendamento',
        parameterization: 'Parametrização',
        conclude: 'Concluir',
        firstExecution: 'Primeira execução',
        startTime: 'Horário inicial',
        endTime: 'Horário final',
        time: 'Horário',
        hour: 'Hora',
        minute: 'Minuto',
        day: 'Dia',
        endDay: 'Dia final',
        startDay: 'Dia inicial',
        weekDays: 'Dias de semana',
        sunday: 'Domingo',
        monday: 'Segunda-feira',
        tuesday: 'Terça-feira',
        wednesday: 'Quarta-feira',
        thursday: 'Quinta-feira',
        friday: 'Sexta-feira',
        saturday: 'Sábado',
        parameters: 'Parâmetros',
        yes: 'Sim',
        no: 'Não',
        notReported: 'Não informado',
        periodicityData: 'Dados da periodicidade',
        confirmation: 'Confirmação',
        confirmSaveMessage: 'Tem certeza que deseja concluir este agendamento de processo?',
        confirmUpdateMessage: 'Tem certeza que deseja alterar este agendamento de processo?',
        saveNotificationSuccessUpdate: 'Agendamento de processo atualizado com sucesso.',
        saveNotificationSuccessSave: 'Agendamento de processo salvo com sucesso.',
        parametersNotFound: 'Parâmetros não foram encontrados.',
        frequency: 'Frequência',
        to: 'das',
        from: 'até'
    },
    ru: {
        at: 'в',
        back: 'Назад',
        next: 'Следующий',
        periodicity: 'Периодичность',
        execution: 'Выполнение',
        process: 'Процесс',
        enterProcess: 'Укажите процесс',
        recurrent: 'Периодически',
        single: 'Одиночный',
        daily: 'Ежедневно',
        weekly: 'Еженедельно',
        monthly: 'Ежемесячно',
        scheduling: 'Планирование',
        parameterization: 'Параметризация',
        conclude: 'Завершить',
        firstExecution: 'Первичное выполнение',
        startTime: 'начальное время',
        endTime: 'время окончания',
        time: 'расписание',
        hour: 'Час',
        day: 'День',
        minute: 'минута',
        endDay: 'последний день',
        startDay: 'день начала',
        weekDays: 'Рабочие дни',
        sunday: 'Воскресенье',
        monday: 'Понедельник',
        tuesday: 'Вторник',
        wednesday: 'Среда',
        thursday: 'Четверг',
        friday: 'Пятница',
        saturday: 'Суббота',
        parameters: 'Параметры',
        yes: 'Да',
        no: 'Нет',
        notReported: 'Не сообщается',
        periodicityData: 'Данные о периодичности',
        confirmation: 'Подтверждение',
        confirmSaveMessage: 'Вы уверены, что хотите завершить это расписание?',
        confirmUpdateMessage: 'Вы уверены, что хотите обновить это расписание?',
        saveNotificationSuccessUpdate: 'Расписание успешно обновлено',
        saveNotificationSuccessSave: 'Расписание успешно сохранено ',
        parametersNotFound: 'Параметры не найдены',
        frequency: 'Частота',
        to: 'с',
        from: 'до'
    }
};

/**
 * @usedBy PoPageJobScheduler
 *
 * @description
 *
 * Esta diretiva permite personalizar o conteúdo da etapa de parametrização do componente de PoPageJobScheduler.
 *
 * > .....
 *
 * Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `p-combo-option-template` com `ng-template`
 * dentro da *tag* `po-combo`.
 *
 * Para obter a referência do item atual utilize `let-option`, com isso você terá acesso aos valores e poderá personalizar sua exibição.
 *
 * Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em *syntax sugar*. Veja a seguir ambos, respectivamente:
 * @todo documentar
 * ```
 * ...
 * <po-combo
 *   name="combo"
 *   [(ngModel)]="combo"
 *   [p-options]="options">
 *     <ng-template p-combo-option-template let-option>
 *       <option-template [option]="option"></option-template>
 *     </ng-template>
 * </po-combo>
 * ...
 * ```
 *
 * ```
 * ...
 * <po-combo
 *   name="combo"
 *   [(ngModel)]="combo"
 *   [p-options]="options">
 *     <div *p-combo-option-template="let option">
 *       <option-template [option]="option"></option-template>
 *     </div>
 * </po-combo>
 * ...
 *
 * ```
 * Para o caso de personalização de opções com agrupamentos, deve-se seguir a mesma orientação acima. Porém, cabe ao desenvolvedor
 * a responsabilidade de estilização dos elementos da lista, tais como título e links dos grupos. Abaixo há um exemplo de aplicação:
 *
 * ```
 * ...
 * <ng-template p-combo-option-template let-option>
 *   <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
 *   <ng-template #optionsGroupTitle>
 *     <p class="po-combo-item-title" [innerHtml]="option.label"></p>
 *   </ng-template>
 *   <ng-template #optionsGroupList>
 *     <div class="po-combo-item">
 *       <div class="po-row">
 *         <po-avatar class="po-md-1" p-size="sm"></po-avatar>
 *         <div class="po-md-11" [innerHtml]="option.label"></div>
 *       </div>
 *     </div>
 *   </ng-template>
 * </ng-template>
 * ...
 *
 * ```
 */
class PoJobSchedulerParametersTemplateDirective {
    // Necessário manter templateRef para o funcionamento do row template. @todo
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
PoJobSchedulerParametersTemplateDirective.ɵfac = function PoJobSchedulerParametersTemplateDirective_Factory(t) { return new (t || PoJobSchedulerParametersTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
PoJobSchedulerParametersTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoJobSchedulerParametersTemplateDirective, selectors: [["", "p-job-scheduler-parameters-template", ""]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoJobSchedulerParametersTemplateDirective, [{
            type: Directive,
            args: [{
                    selector: '[p-job-scheduler-parameters-template]'
                }]
        }], function () { return [{ type: i0.TemplateRef }]; }, null);
})();

class PoPageJobSchedulerLookupService {
    constructor(poPageJobSchedulerService) {
        this.poPageJobSchedulerService = poPageJobSchedulerService;
    }
    getFilteredItems({ filter, page, pageSize }) {
        const params = { page, pageSize, search: filter };
        return this.poPageJobSchedulerService.getProcesses(params);
    }
    getObjectByValue(processId) {
        return this.poPageJobSchedulerService.getProcess(processId);
    }
}
PoPageJobSchedulerLookupService.ɵfac = function PoPageJobSchedulerLookupService_Factory(t) { return new (t || PoPageJobSchedulerLookupService)(i0.ɵɵinject(PoPageJobSchedulerService)); };
PoPageJobSchedulerLookupService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageJobSchedulerLookupService, factory: PoPageJobSchedulerLookupService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerLookupService, [{
            type: Injectable
        }], function () { return [{ type: PoPageJobSchedulerService }]; }, null);
})();

const _c0$3 = ["formExecution"];
const _c1$2 = ["dailyTemplate"];
const _c2$1 = ["monthlyTemplate"];
const _c3$1 = ["weeklyTemplate"];
function PoPageJobSchedulerExecutionComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "po-radio-group", 17);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.value.frequency.type = $event); })("p-change", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_radio_group_p_change_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.onChangeFrequencyOptions()); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "po-number", 18);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_number_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.value.frequency.value = $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r15 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r15.value.frequency.type)("p-columns", 3)("p-options", ctx_r15.frequencyOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r15.value.frequency.value);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 1)(2, "po-switch", 14);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.containsFrequency = $event); })("p-change", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_p_change_2_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.onChangeContainsFrequency($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template, 3, 4, "ng-container", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelement(5, "po-divider", 3);
        i0.ɵɵtemplate(6, PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_6_Template, 1, 0, "ng-container", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1)(8, "po-switch", 16);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.value.recurrent = $event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx_r2.containsFrequency)("p-label", ctx_r2.literals.frequency)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r2.containsFrequency);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-label", ctx_r2.literals.periodicityData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.periodicityTemplates[ctx_r2.value.periodicity]);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx_r2.value.recurrent)("p-label", ctx_r2.literals.recurrent)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-lookup", 20);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template_po_lookup_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r26.value.processID = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r25 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngModel", ctx_r25.value.processID)("p-disabled", ctx_r25.isEdit)("p-filter-service", ctx_r25.poPageJobSchedulerLookup)("p-label", ctx_r25.literals.process)("p-placeholder", ctx_r25.literals.enterProcess);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template, 1, 5, "po-lookup", 19);
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngIf", ctx_r4.noParameters && ctx_r4.noCustomParamsComponent);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-input", 21);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_14_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.value.processID = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngModel", ctx_r6.value.processID)("p-disabled", ctx_r6.isEdit)("p-label", ctx_r6.literals.process)("p-placeholder", ctx_r6.literals.enterProcess);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, PoPageJobSchedulerExecutionComponent_ng_template_16_ng_container_0_Template, 1, 0, "ng-container", 15);
    }
    if (rf & 2) {
        i0.ɵɵnextContext();
        const _r13 = i0.ɵɵreference(23);
        i0.ɵɵproperty("ngTemplateOutlet", _r13);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_18_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1);
        i0.ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_18_ng_container_1_Template, 1, 0, "ng-container", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "po-checkbox-group", 22);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_18_Template_po_checkbox_group_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.value.daysOfWeek = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext();
        const _r13 = i0.ɵɵreference(23);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", _r13);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r10.value.daysOfWeek)("p-label", ctx_r10.literals.weekDays)("p-options", ctx_r10.weekDays);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-number", 25);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template_po_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r36.value.rangeLimitDay = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r34 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngModel", ctx_r34.value.rangeLimitDay)("p-error-pattern", "Dia inv\u00E1lido")("p-label", ctx_r34.literals.endDay)("p-max", 31)("p-pattern", ctx_r34.dayPattern);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_20_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-number", 23);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_20_Template_po_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r38.value.dayOfMonth = $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template, 1, 5, "po-number", 24);
        i0.ɵɵtemplate(2, PoPageJobSchedulerExecutionComponent_ng_template_20_ng_container_2_Template, 1, 0, "ng-container", 15);
    }
    if (rf & 2) {
        const ctx_r12 = i0.ɵɵnextContext();
        const _r13 = i0.ɵɵreference(23);
        i0.ɵɵproperty("ngModel", ctx_r12.value.dayOfMonth)("p-error-pattern", "Dia inv\u00E1lido")("p-label", ctx_r12.dayLabel)("p-max", 31)("p-pattern", ctx_r12.dayPattern);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r12.containsFrequency);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", _r13);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r42 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-input", 28);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.value.rangeLimitHour = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r40 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngModel", ctx_r40.value.rangeLimitHour)("p-label", ctx_r40.literals.endTime)("p-pattern", ctx_r40.timePattern);
    }
}
function PoPageJobSchedulerExecutionComponent_ng_template_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r44 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-input", 26);
        i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_22_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.value.hour = $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template, 1, 3, "po-input", 27);
    }
    if (rf & 2) {
        const ctx_r14 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngModel", ctx_r14.value.hour)("p-label", ctx_r14.hourLabel)("p-pattern", ctx_r14.timePattern);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r14.containsFrequency && ctx_r14.value.frequency.type !== "day");
    }
}
class PoPageJobSchedulerExecutionComponent {
    constructor(poPageJobSchedulerService, poPageJobSchedulerLookup) {
        this.poPageJobSchedulerService = poPageJobSchedulerService;
        this.poPageJobSchedulerLookup = poPageJobSchedulerLookup;
        this.isEdit = false;
        this.literals = {};
        this.noParameters = true;
        this.noCustomParamsComponent = true;
        this.changeProcess = new EventEmitter();
        this.dayPattern = '^(3[0-1]|[0-2][0-9]|[1-9]|0[1-9])$';
        this.existProcessAPI = true;
        this.minDateFirstExecution = new Date();
        this.periodicityOptions = [];
        this.timePattern = '^(2[0-3]|[01][0-9]):?([0-5][0-9])$';
        this.weekDays = [];
        this.frequencyOptions = [];
        this.containsFrequency = false;
        this.frequency = 'hour';
        this._value = {};
    }
    set value(value) {
        this._value = value && isTypeof(value, 'object') ? value : {};
        this.containsFrequency = this._value.frequency && this._value.frequency.value ? true : false;
    }
    get value() {
        return this._value;
    }
    get startDateFirstExecution() {
        return this.isEdit ? undefined : this.minDateFirstExecution;
    }
    get hourLabel() {
        return this.containsFrequency ? this.literals.startTime : this.literals.time;
    }
    get dayLabel() {
        return this.containsFrequency ? this.literals.startDay : this.literals.day;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.subscribeProcessIdValueChanges();
            if (this.value.periodicity) {
                this.frequencyOptions = this.frequencyOptions.map(frequencyOption => (Object.assign(Object.assign({}, frequencyOption), { disabled: frequencyOption.value === 'day' && this.value.periodicity !== 'monthly' })));
            }
        });
    }
    ngOnInit() {
        this.periodicityTemplates = {
            daily: this.dailyTemplate,
            monthly: this.monthlyTemplate,
            weekly: this.weeklyTempalte
        };
        if (this.noParameters && this.noCustomParamsComponent) {
            this.checkExistsProcessesAPI();
        }
        this.periodicityOptions = this.getPeriodicityOptions();
        this.weekDays = this.getWeekDays();
        this.frequencyOptions = this.getFrequencyOptions();
    }
    onChangeContainsFrequency(containsFrequency) {
        if (containsFrequency) {
            this.value.frequency = { type: 'hour', value: null };
        }
        else {
            this.value.frequency = {};
        }
        this.value.rangeLimitHour = null;
        this.value.rangeLimitDay = null;
        this.value.dayOfMonth = null;
    }
    onChangePeriodicityOptions(periodicity) {
        this.frequencyOptions = this.frequencyOptions.map(frequencyOption => (Object.assign(Object.assign({}, frequencyOption), { disabled: frequencyOption.value === 'day' && periodicity !== 'monthly' })));
        this.value.frequency.type = null;
    }
    onChangeFrequencyOptions() {
        this.value.rangeLimitHour = null;
    }
    checkExistsProcessesAPI() {
        this.poPageJobSchedulerService.getHeadProcesses().subscribe(undefined, error => {
            this.existProcessAPI = false;
        });
    }
    getPeriodicityOptions() {
        return [
            { label: this.literals.single, value: 'single' },
            { label: this.literals.daily, value: 'daily' },
            { label: this.literals.weekly, value: 'weekly' },
            { label: this.literals.monthly, value: 'monthly' }
        ];
    }
    getFrequencyOptions() {
        return [
            { label: this.literals.day, value: 'day' },
            { label: this.literals.hour, value: 'hour' },
            { label: this.literals.minute, value: 'minute' }
        ];
    }
    getWeekDays() {
        return [
            { label: this.literals.sunday, value: 'Sunday' },
            { label: this.literals.monday, value: 'Monday' },
            { label: this.literals.tuesday, value: 'Tuesday' },
            { label: this.literals.wednesday, value: 'Wednesday' },
            { label: this.literals.thursday, value: 'Thursday' },
            { label: this.literals.friday, value: 'Friday' },
            { label: this.literals.saturday, value: 'Saturday' }
        ];
    }
    subscribeProcessIdValueChanges() {
        var _a;
        (_a = this.form.controls['processID']) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(processId => {
            this.changeProcess.emit({ processId, existAPI: this.existProcessAPI });
        });
    }
}
PoPageJobSchedulerExecutionComponent.ɵfac = function PoPageJobSchedulerExecutionComponent_Factory(t) { return new (t || PoPageJobSchedulerExecutionComponent)(i0.ɵɵdirectiveInject(PoPageJobSchedulerService), i0.ɵɵdirectiveInject(PoPageJobSchedulerLookupService)); };
PoPageJobSchedulerExecutionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerExecutionComponent, selectors: [["po-page-job-scheduler-execution"]], viewQuery: function PoPageJobSchedulerExecutionComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$3, 7);
            i0.ɵɵviewQuery(_c1$2, 7);
            i0.ɵɵviewQuery(_c2$1, 7);
            i0.ɵɵviewQuery(_c3$1, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dailyTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthlyTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.weeklyTempalte = _t.first);
        }
    }, inputs: { isEdit: ["p-is-edit", "isEdit"], literals: ["p-literals", "literals"], noParameters: ["p-no-parameters", "noParameters"], noCustomParamsComponent: ["p-no-custom-params-component", "noCustomParamsComponent"], value: ["p-value", "value"] }, outputs: { changeProcess: "p-change-process" }, decls: 24, vars: 16, consts: [["formExecution", "ngForm"], [1, "po-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "po-md-12", 3, "p-label"], ["name", "firstExecution", "p-placeholder", "dd/mm/aaaa", "p-required", "", 1, "po-md-4", 3, "ngModel", "p-disabled", "p-label", "p-min-date", "ngModelChange"], ["name", "firstExecutionHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-disabled", "p-label", "p-pattern", "ngModelChange"], ["name", "periodicity", "p-columns", "4", "p-required", "", 1, "po-sm-12", 3, "ngModel", "p-label", "p-options", "ngModelChange", "p-change"], [4, "ngIf"], ["lookupProcessesID", ""], ["inputProcessesID", ""], ["dailyTemplate", ""], ["weeklyTemplate", ""], ["monthlyTemplate", ""], ["inputHourTemplate", ""], ["name", "containsFrequency", 1, "po-md-12", 3, "ngModel", "p-label", "p-label-off", "p-label-on", "ngModelChange", "p-change"], [4, "ngTemplateOutlet"], ["name", "recurrent", 1, "po-md-3", 3, "ngModel", "p-label", "p-label-off", "p-label-on", "ngModelChange"], ["name", "frequencyType", "p-required", "", 1, "po-md-10", 3, "ngModel", "p-columns", "p-options", "ngModelChange", "p-change"], ["name", "frequencyValue", "p-required", "", 1, "po-md-2", 3, "ngModel", "ngModelChange"], ["class", "po-md-12", "name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 3, "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "ngModelChange", 4, "ngIf"], ["name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "ngModelChange"], ["name", "processID", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-disabled", "p-label", "p-placeholder", "ngModelChange"], ["name", "daysOfWeek", "p-columns", "4", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-label", "p-options", "ngModelChange"], ["name", "dayOfMonth", "p-required", "", 1, "po-md-3", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange"], ["class", "po-md-3", "name", "rangeLimitDay", "p-required", "", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange", 4, "ngIf"], ["name", "rangeLimitDay", "p-required", "", 1, "po-md-3", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange"], ["name", "hour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-label", "p-pattern", "ngModelChange"], ["class", "po-md-2", "name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 3, "ngModel", "p-label", "p-pattern", "ngModelChange", 4, "ngIf"], ["name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-label", "p-pattern", "ngModelChange"]], template: function PoPageJobSchedulerExecutionComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "form", null, 0)(2, "div", 1);
            i0.ɵɵtemplate(3, PoPageJobSchedulerExecutionComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelement(5, "po-divider", 3);
            i0.ɵɵelementStart(6, "po-datepicker", 4);
            i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_datepicker_ngModelChange_6_listener($event) { return ctx.value.firstExecution = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "po-input", 5);
            i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_input_ngModelChange_7_listener($event) { return ctx.value.firstExecutionHour = $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(8, "hr");
            i0.ɵɵelementStart(9, "div", 1)(10, "po-radio-group", 6);
            i0.ɵɵlistener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_ngModelChange_10_listener($event) { return ctx.value.periodicity = $event; })("p-change", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_p_change_10_listener($event) { return ctx.onChangePeriodicityOptions($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, PoPageJobSchedulerExecutionComponent_ng_container_11_Template, 9, 11, "ng-container", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, PoPageJobSchedulerExecutionComponent_ng_template_12_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(14, PoPageJobSchedulerExecutionComponent_ng_template_14_Template, 1, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(16, PoPageJobSchedulerExecutionComponent_ng_template_16_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(18, PoPageJobSchedulerExecutionComponent_ng_template_18_Template, 3, 4, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(20, PoPageJobSchedulerExecutionComponent_ng_template_20_Template, 3, 7, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(22, PoPageJobSchedulerExecutionComponent_ng_template_22_Template, 2, 4, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            const _r3 = i0.ɵɵreference(13);
            const _r5 = i0.ɵɵreference(15);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.existProcessAPI)("ngIfThen", _r3)("ngIfElse", _r5);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("p-label", ctx.literals.firstExecution);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.value.firstExecution)("p-disabled", ctx.isEdit)("p-label", ctx.literals.day)("p-min-date", ctx.startDateFirstExecution);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.value.firstExecutionHour)("p-disabled", ctx.isEdit)("p-label", ctx.literals.time)("p-pattern", ctx.timePattern);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.value.periodicity)("p-label", ctx.literals.periodicity)("p-options", ctx.periodicityOptions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value.periodicity !== "single");
        }
    }, dependencies: [i4.NgIf, i4.NgTemplateOutlet, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i2.PoDividerComponent, i2.PoCheckboxGroupComponent, i2.PoDatepickerComponent, i2.PoInputComponent, i2.PoLookupComponent, i2.PoNumberComponent, i2.PoRadioGroupComponent, i2.PoSwitchComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerExecutionComponent, [{
            type: Component,
            args: [{ selector: 'po-page-job-scheduler-execution', template: "<form #formExecution=\"ngForm\">\n  <div class=\"po-row\">\n    <ng-container *ngIf=\"existProcessAPI; then lookupProcessesID; else inputProcessesID\"></ng-container>\n  </div>\n\n  <div class=\"po-row\">\n    <po-divider class=\"po-md-12\" [p-label]=\"literals.firstExecution\"></po-divider>\n\n    <po-datepicker\n      class=\"po-md-4\"\n      name=\"firstExecution\"\n      [(ngModel)]=\"value.firstExecution\"\n      p-placeholder=\"dd/mm/aaaa\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-label]=\"literals.day\"\n      [p-min-date]=\"startDateFirstExecution\"\n    >\n    </po-datepicker>\n\n    <po-input\n      class=\"po-md-2\"\n      name=\"firstExecutionHour\"\n      [(ngModel)]=\"value.firstExecutionHour\"\n      p-mask=\"99:99\"\n      p-mask-format-model\n      p-placeholder=\"HH:mm\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-label]=\"literals.time\"\n      [p-pattern]=\"timePattern\"\n    >\n    </po-input>\n  </div>\n\n  <hr />\n\n  <div class=\"po-row\">\n    <po-radio-group\n      class=\"po-sm-12\"\n      name=\"periodicity\"\n      [(ngModel)]=\"value.periodicity\"\n      p-columns=\"4\"\n      p-required\n      [p-label]=\"literals.periodicity\"\n      [p-options]=\"periodicityOptions\"\n      (p-change)=\"onChangePeriodicityOptions($event)\"\n    >\n    </po-radio-group>\n\n    <ng-container *ngIf=\"value.periodicity !== 'single'\">\n      <div class=\"po-row\">\n        <po-switch\n          class=\"po-md-12\"\n          name=\"containsFrequency\"\n          [(ngModel)]=\"containsFrequency\"\n          [p-label]=\"literals.frequency\"\n          [p-label-off]=\"literals.no\"\n          [p-label-on]=\"literals.yes\"\n          (p-change)=\"onChangeContainsFrequency($event)\"\n        >\n        </po-switch>\n        <ng-container *ngIf=\"containsFrequency\">\n          <po-radio-group\n            class=\"po-md-10\"\n            name=\"frequencyType\"\n            p-required\n            [(ngModel)]=\"value.frequency.type\"\n            [p-columns]=\"3\"\n            [p-options]=\"frequencyOptions\"\n            (p-change)=\"onChangeFrequencyOptions()\"\n          >\n          </po-radio-group>\n\n          <po-number class=\"po-md-2\" name=\"frequencyValue\" p-required [(ngModel)]=\"value.frequency.value\"> </po-number>\n        </ng-container>\n      </div>\n\n      <div class=\"po-row\">\n        <po-divider class=\"po-md-12\" [p-label]=\"literals.periodicityData\"> </po-divider>\n\n        <ng-container *ngTemplateOutlet=\"periodicityTemplates[value.periodicity]\"> </ng-container>\n      </div>\n\n      <div class=\"po-row\">\n        <po-switch\n          class=\"po-md-3\"\n          name=\"recurrent\"\n          [(ngModel)]=\"value.recurrent\"\n          [p-label]=\"literals.recurrent\"\n          [p-label-off]=\"literals.no\"\n          [p-label-on]=\"literals.yes\"\n        >\n        </po-switch>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-template #lookupProcessesID>\n    <po-lookup\n      *ngIf=\"noParameters && noCustomParamsComponent\"\n      class=\"po-md-12\"\n      name=\"processID\"\n      [(ngModel)]=\"value.processID\"\n      p-field-label=\"description\"\n      p-field-value=\"processID\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-filter-service]=\"poPageJobSchedulerLookup\"\n      [p-label]=\"literals.process\"\n      [p-placeholder]=\"literals.enterProcess\"\n    >\n    </po-lookup>\n  </ng-template>\n\n  <ng-template #inputProcessesID>\n    <po-input\n      class=\"po-md-12\"\n      name=\"processID\"\n      [(ngModel)]=\"value.processID\"\n      p-required\n      [p-disabled]=\"isEdit\"\n      [p-label]=\"literals.process\"\n      [p-placeholder]=\"literals.enterProcess\"\n    >\n    </po-input>\n  </ng-template>\n\n  <ng-template #dailyTemplate>\n    <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\n  </ng-template>\n\n  <ng-template #weeklyTemplate>\n    <div class=\"po-row\">\n      <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\n    </div>\n\n    <po-checkbox-group\n      class=\"po-md-12\"\n      name=\"daysOfWeek\"\n      [(ngModel)]=\"value.daysOfWeek\"\n      p-columns=\"4\"\n      p-required\n      [p-label]=\"literals.weekDays\"\n      [p-options]=\"weekDays\"\n    >\n    </po-checkbox-group>\n  </ng-template>\n\n  <ng-template #monthlyTemplate>\n    <po-number\n      class=\"po-md-3\"\n      name=\"dayOfMonth\"\n      [(ngModel)]=\"value.dayOfMonth\"\n      p-required\n      [p-error-pattern]=\"'Dia inv\u00E1lido'\"\n      [p-label]=\"dayLabel\"\n      [p-max]=\"31\"\n      [p-pattern]=\"dayPattern\"\n    >\n    </po-number>\n\n    <po-number\n      *ngIf=\"containsFrequency\"\n      class=\"po-md-3\"\n      name=\"rangeLimitDay\"\n      [(ngModel)]=\"value.rangeLimitDay\"\n      p-required\n      [p-error-pattern]=\"'Dia inv\u00E1lido'\"\n      [p-label]=\"literals.endDay\"\n      [p-max]=\"31\"\n      [p-pattern]=\"dayPattern\"\n    >\n    </po-number>\n\n    <ng-container *ngTemplateOutlet=\"inputHourTemplate\"> </ng-container>\n  </ng-template>\n\n  <ng-template #inputHourTemplate>\n    <po-input\n      class=\"po-md-2\"\n      name=\"hour\"\n      [(ngModel)]=\"value.hour\"\n      p-mask=\"99:99\"\n      p-mask-format-model\n      p-placeholder=\"HH:mm\"\n      p-required\n      [p-label]=\"hourLabel\"\n      [p-pattern]=\"timePattern\"\n    >\n    </po-input>\n\n    <po-input\n      *ngIf=\"containsFrequency && value.frequency.type !== 'day'\"\n      class=\"po-md-2\"\n      name=\"rangeLimitHour\"\n      [(ngModel)]=\"value.rangeLimitHour\"\n      p-mask=\"99:99\"\n      p-mask-format-model\n      p-placeholder=\"HH:mm\"\n      p-required\n      [p-label]=\"literals.endTime\"\n      [p-pattern]=\"timePattern\"\n    >\n    </po-input>\n  </ng-template>\n</form>\n" }]
        }], function () { return [{ type: PoPageJobSchedulerService }, { type: PoPageJobSchedulerLookupService }]; }, { form: [{
                type: ViewChild,
                args: ['formExecution', { static: true }]
            }], dailyTemplate: [{
                type: ViewChild,
                args: ['dailyTemplate', { static: true }]
            }], monthlyTemplate: [{
                type: ViewChild,
                args: ['monthlyTemplate', { static: true }]
            }], weeklyTempalte: [{
                type: ViewChild,
                args: ['weeklyTemplate', { static: true }]
            }], isEdit: [{
                type: Input,
                args: ['p-is-edit']
            }], literals: [{
                type: Input,
                args: ['p-literals']
            }], noParameters: [{
                type: Input,
                args: ['p-no-parameters']
            }], noCustomParamsComponent: [{
                type: Input,
                args: ['p-no-custom-params-component']
            }], changeProcess: [{
                type: Output,
                args: ['p-change-process']
            }], value: [{
                type: Input,
                args: ['p-value']
            }] });
})();

const _c0$2 = ["parametersForm"];
function PoPageJobSchedulerParametersComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerParametersComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵelement(1, "span", 5);
        i0.ɵɵelementStart(2, "span", 6);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.parametersNotFound, " ");
    }
}
function PoPageJobSchedulerParametersComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "form", null, 7);
        i0.ɵɵelement(2, "po-dynamic-form", 8);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-fields", ctx_r4.parameters)("p-value", ctx_r4.value);
    }
}
function PoPageJobSchedulerParametersComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function PoPageJobSchedulerParametersComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 9);
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.parametersTemplate == null ? null : ctx_r6.parametersTemplate.templateRef);
    }
}
class PoPageJobSchedulerParametersComponent {
    constructor() {
        this.literals = {};
        this.parameters = [];
        this.valueChange = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.form) {
            setTimeout(() => {
                this.form.valueChanges.subscribe(value => {
                    this.valueChange.emit(value);
                });
            });
        }
    }
}
PoPageJobSchedulerParametersComponent.ɵfac = function PoPageJobSchedulerParametersComponent_Factory(t) { return new (t || PoPageJobSchedulerParametersComponent)(); };
PoPageJobSchedulerParametersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerParametersComponent, selectors: [["po-page-job-scheduler-parameters"]], viewQuery: function PoPageJobSchedulerParametersComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$2, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
        }
    }, inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], parametersTemplate: ["p-template", "parametersTemplate"], value: ["p-value", "value"] }, outputs: { valueChange: "p-valueChange" }, decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["parametersNotFoundTemplate", ""], ["formFieldsTemplate", ""], ["dynamicContent", ""], [1, "po-text-center"], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], ["parametersForm", "ngForm"], ["p-group-form", "", 3, "p-fields", "p-value"], [4, "ngTemplateOutlet"]], template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, PoPageJobSchedulerParametersComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PoPageJobSchedulerParametersComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, PoPageJobSchedulerParametersComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            const _r3 = i0.ɵɵreference(4);
            const _r5 = i0.ɵɵreference(6);
            i0.ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length)("ngIfThen", _r3)("ngIfElse", (ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef) && _r5 || _r1);
        }
    }, dependencies: [i4.NgIf, i4.NgTemplateOutlet, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i2.PoDynamicFormComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerParametersComponent, [{
            type: Component,
            args: [{ selector: 'po-page-job-scheduler-parameters', template: "<ng-container\r\n  *ngIf=\"\r\n    parameters && parameters.length;\r\n    then formFieldsTemplate;\r\n    else (parametersTemplate?.templateRef && dynamicContent) || parametersNotFoundTemplate\r\n  \"\r\n>\r\n</ng-container>\r\n\r\n<ng-template #parametersNotFoundTemplate>\r\n  <div class=\"po-text-center\">\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.parametersNotFound }}\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <form #parametersForm=\"ngForm\">\r\n    <po-dynamic-form p-group-form [p-fields]=\"parameters\" [p-value]=\"value\"> </po-dynamic-form>\r\n  </form>\r\n</ng-template>\r\n\r\n<!-- <ng-template #dynamicContent>\r\n  <dynamic-load-component\r\n    [component]=\"customComponent.component\"\r\n    [dataProps]=\"customComponent?.properties\"\r\n    #poParamsCustom\r\n  >\r\n  </dynamic-load-component></ng-template>\r\n -->\r\n\r\n<!-- <ng-template #dynamicContent [ngTemplateOutlet]=\"parametersTemplate?.templateRef\"> </ng-template> -->\r\n\r\n<ng-template #dynamicContent>\r\n  <ng-container *ngTemplateOutlet=\"parametersTemplate?.templateRef\"> </ng-container>\r\n</ng-template>\r\n" }]
        }], null, { form: [{
                type: ViewChild,
                args: ['parametersForm']
            }], literals: [{
                type: Input,
                args: ['p-literals']
            }], parameters: [{
                type: Input,
                args: ['p-parameters']
            }], parametersTemplate: [{
                type: Input,
                args: ['p-template']
            }], value: [{
                type: Input,
                args: ['p-value']
            }], valueChange: [{
                type: Output,
                args: ['p-valueChange']
            }] });
})();

function PoPageJobSchedulerSummaryComponent_po_info_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-info", 2);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-label", ctx_r0.literals.process)("p-orientation", ctx_r0.infoOrientation)("p-value", ctx_r0.value.processID);
    }
}
function PoPageJobSchedulerSummaryComponent_po_info_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-info", 2);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-label", ctx_r1.literals.frequency)("p-orientation", ctx_r1.infoOrientation)("p-value", ctx_r1.frequencyValue);
    }
}
function PoPageJobSchedulerSummaryComponent_po_info_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-info", 2);
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-label", ctx_r2.literals.execution)("p-orientation", ctx_r2.infoOrientation)("p-value", ctx_r2.executionValue);
    }
}
function PoPageJobSchedulerSummaryComponent_po_widget_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "po-widget", 4);
        i0.ɵɵelement(1, "po-dynamic-view", 5);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-title", ctx_r3.literals.parameters);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-fields", ctx_r3.parameters)("p-value", ctx_r3.value.executionParameter);
    }
}
class PoPageJobSchedulerSummaryComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.literals = {};
        this.parameters = [];
        this.value = {};
        this.noParameters = true;
        this.executionValue = '';
        this.firstExecutionValue = '';
        this.infoOrientation = PoInfoOrientation.Horizontal;
        this.periodicityValue = '';
        this.frequencyValue = '';
        this.rangeLimitHour = '';
        this.rangeLimitDay = '';
        this.recurrentValue = '';
    }
    ngOnInit() {
        const { periodicity, hour, dayOfMonth, daysOfWeek, recurrent, firstExecution, firstExecutionHour, frequency, rangeLimitHour, rangeLimitDay } = this.value;
        this.periodicityValue = this.getPeriodicityLabel(periodicity);
        if (frequency) {
            this.frequencyValue = this.getFrequencyValue(frequency, periodicity);
        }
        this.executionValue = this.getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay);
        this.firstExecutionValue = this.getFirstExecutionLabel(firstExecution, firstExecutionHour);
        this.recurrentValue = this.getRecurrentValue(recurrent);
    }
    getFrequencyValue(frequency, periodicity) {
        return frequency['value'] && frequency['type'] && periodicity !== 'single'
            ? `${frequency['value']} - ${frequency['type']}`
            : '';
    }
    getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay) {
        switch (periodicity) {
            case 'daily':
                return this.getHourLabel(hour, rangeLimitHour);
            case 'monthly':
                return this.getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay);
            case 'weekly':
                return this.getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour);
            default:
                return this.literals.notReported;
        }
    }
    getFirstExecutionLabel(firstExecution, firstExecutionHour) {
        if (firstExecution) {
            const date = this.datePipe.transform(firstExecution, 'dd/MM/yyyy', '-0200');
            return `${date} ${this.getHourLabel(firstExecutionHour)}`;
        }
        else {
            return this.literals.notReported;
        }
    }
    getHourLabel(hour, rangeLimitHour) {
        return `${rangeLimitHour ? this.literals.from : this.literals.at} ${hour || '00:00'} ${rangeLimitHour ? this.literals.to + ' ' + rangeLimitHour : ''}`;
    }
    getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay) {
        const hourLabel = this.getHourLabel(hour, rangeLimitHour);
        return `${rangeLimitDay ? this.literals.from : ''} ${dayOfMonth} ${rangeLimitDay ? this.literals.to : ''} ${rangeLimitDay ? rangeLimitDay : ''} ${hourLabel}`;
    }
    getPeriodicityLabel(periodicity) {
        switch (periodicity) {
            case 'daily':
                return this.literals.daily;
            case 'monthly':
                return this.literals.monthly;
            case 'weekly':
                return this.literals.weekly;
            default:
                return this.literals.single;
        }
    }
    getRecurrentValue(recurrent) {
        return recurrent ? this.literals.yes : this.literals.no;
    }
    getSorterWeekDays() {
        return {
            'sunday': 0,
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6
        };
    }
    getTranslateWeekDay(day) {
        const days = {
            Sunday: this.literals.sunday,
            Monday: this.literals.monday,
            Tuesday: this.literals.tuesday,
            Wednesday: this.literals.wednesday,
            Thursday: this.literals.thursday,
            Friday: this.literals.friday,
            Saturday: this.literals.saturday
        };
        return days[day] || '';
    }
    getWeekDaysLabel(days = []) {
        const weekDaysSorted = this.sortWeekDays(days);
        return weekDaysSorted.map(day => this.getTranslateWeekDay(day)).join(', ');
    }
    getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour) {
        if (daysOfWeek && Array.isArray(daysOfWeek)) {
            return `${this.getWeekDaysLabel(daysOfWeek)} ${this.getHourLabel(hour, rangeLimitHour)}`;
        }
        else {
            return this.literals.notReported;
        }
    }
    sortWeekDays(days = []) {
        const sorterWeekDays = this.getSorterWeekDays();
        return days.sort((a, b) => {
            const currDay = a.toLowerCase();
            const nextDay = b.toLowerCase();
            return sorterWeekDays[currDay] > sorterWeekDays[nextDay] ? 1 : -1;
        });
    }
}
PoPageJobSchedulerSummaryComponent.ɵfac = function PoPageJobSchedulerSummaryComponent_Factory(t) { return new (t || PoPageJobSchedulerSummaryComponent)(i0.ɵɵdirectiveInject(i4.DatePipe)); };
PoPageJobSchedulerSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerSummaryComponent, selectors: [["po-page-job-scheduler-summary"]], inputs: { literals: ["p-literals", "literals"], parameters: ["p-parameters", "parameters"], value: ["p-value", "value"], noParameters: ["p-no-parameters", "noParameters"] }, decls: 8, vars: 13, consts: [[1, "po-md-12"], [3, "p-label", "p-orientation", "p-value", 4, "ngIf"], [3, "p-label", "p-orientation", "p-value"], ["class", "po-pt-1 po-pb-1 po-md-12", 3, "p-title", 4, "ngIf"], [1, "po-pt-1", "po-pb-1", "po-md-12", 3, "p-title"], [3, "p-fields", "p-value"]], template: function PoPageJobSchedulerSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, PoPageJobSchedulerSummaryComponent_po_info_1_Template, 1, 3, "po-info", 1);
            i0.ɵɵelement(2, "po-info", 2);
            i0.ɵɵtemplate(3, PoPageJobSchedulerSummaryComponent_po_info_3_Template, 1, 3, "po-info", 1);
            i0.ɵɵtemplate(4, PoPageJobSchedulerSummaryComponent_po_info_4_Template, 1, 3, "po-info", 1);
            i0.ɵɵelement(5, "po-info", 2)(6, "po-info", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, PoPageJobSchedulerSummaryComponent_po_widget_7_Template, 2, 3, "po-widget", 3);
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.noParameters);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-label", ctx.literals.periodicity)("p-orientation", ctx.infoOrientation)("p-value", ctx.periodicityValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.frequencyValue !== "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value.periodicity !== "single");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-label", ctx.literals.recurrent)("p-orientation", ctx.infoOrientation)("p-value", ctx.recurrentValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("p-label", ctx.literals.firstExecution)("p-orientation", ctx.infoOrientation)("p-value", ctx.firstExecutionValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length);
        }
    }, dependencies: [i4.NgIf, i2.PoDynamicViewComponent, i2.PoInfoComponent, i2.PoWidgetComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerSummaryComponent, [{
            type: Component,
            args: [{ selector: 'po-page-job-scheduler-summary', template: "<div class=\"po-md-12\">\r\n  <po-info\r\n    *ngIf=\"noParameters\"\r\n    [p-label]=\"literals.process\"\r\n    [p-orientation]=\"infoOrientation\"\r\n    [p-value]=\"value.processID\"\r\n  >\r\n  </po-info>\r\n\r\n  <po-info [p-label]=\"literals.periodicity\" [p-orientation]=\"infoOrientation\" [p-value]=\"periodicityValue\"> </po-info>\r\n\r\n  <po-info\r\n    *ngIf=\"frequencyValue !== ''\"\r\n    [p-label]=\"literals.frequency\"\r\n    [p-orientation]=\"infoOrientation\"\r\n    [p-value]=\"frequencyValue\"\r\n  >\r\n  </po-info>\r\n\r\n  <po-info\r\n    *ngIf=\"value.periodicity !== 'single'\"\r\n    [p-label]=\"literals.execution\"\r\n    [p-orientation]=\"infoOrientation\"\r\n    [p-value]=\"executionValue\"\r\n  >\r\n  </po-info>\r\n\r\n  <po-info [p-label]=\"literals.recurrent\" [p-orientation]=\"infoOrientation\" [p-value]=\"recurrentValue\"> </po-info>\r\n\r\n  <po-info [p-label]=\"literals.firstExecution\" [p-orientation]=\"infoOrientation\" [p-value]=\"firstExecutionValue\">\r\n  </po-info>\r\n</div>\r\n\r\n<po-widget *ngIf=\"parameters && parameters.length\" class=\"po-pt-1 po-pb-1 po-md-12\" [p-title]=\"literals.parameters\">\r\n  <po-dynamic-view [p-fields]=\"parameters\" [p-value]=\"value.executionParameter\"> </po-dynamic-view>\r\n</po-widget>\r\n" }]
        }], function () { return [{ type: i4.DatePipe }]; }, { literals: [{
                type: Input,
                args: ['p-literals']
            }], parameters: [{
                type: Input,
                args: ['p-parameters']
            }], value: [{
                type: Input,
                args: ['p-value']
            }], noParameters: [{
                type: Input,
                args: ['p-no-parameters']
            }] });
})();

const _c0$1 = ["schedulerExecution"];
const _c1$1 = ["schedulerParameters"];
const _c2 = function () { return []; };
function PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-page-job-scheduler-parameters", 9, 10);
        i0.ɵɵlistener("p-valueChange", function PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template_po_page_job_scheduler_parameters_p_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.model.executionParameter = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("hidden", ctx_r2.step !== 2)("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters || i0.ɵɵpureFunction0(5, _c2))("p-value", ctx_r2.model.executionParameter)("p-template", ctx_r2.parametersTemplate);
    }
}
const _c3 = function () { return {}; };
const _c4 = function (a0) { return [a0]; };
function PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-page-job-scheduler-summary", 11);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-no-parameters", ctx_r3.parametersEmpty)("p-literals", ctx_r3.literals)("p-parameters", ctx_r3.parameters || i0.ɵɵpureFunction1(5, _c4, i0.ɵɵpureFunction0(4, _c3)))("p-value", ctx_r3.publicValues);
    }
}
/**
 * @docsExtends PoPageJobSchedulerBaseComponent
 *
 * @example
 *
 * <example name="po-page-job-scheduler-background-process" title="PO Page Job Scheduler - Background Process">
 *  <file name="sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"> </file>
 *  <file name="sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"> </file>
 * </example>
 *
 */
class PoPageJobSchedulerComponent extends PoPageJobSchedulerBaseComponent {
    constructor(poPageDynamicLookupService, activatedRoute, poDialogService, poNotification, poPageJobSchedulerService, languageService) {
        super(poPageJobSchedulerService);
        this.poPageDynamicLookupService = poPageDynamicLookupService;
        this.activatedRoute = activatedRoute;
        this.poDialogService = poDialogService;
        this.poNotification = poNotification;
        this.poPageJobSchedulerService = poPageJobSchedulerService;
        this.isEdit = false;
        this.literals = Object.assign({}, poPageJobSchedulerLiteralsDefault[poLocaleDefault]);
        this.step = 1;
        this.parametersEmpty = true;
        this.stepParametersInitialized = false;
        this.steps = [];
        this.backPageAction = {
            label: this.literals.back,
            action: this.nextStepOperation.bind(this, 'back'),
            disabled: this.isDisabledBack.bind(this)
        };
        this.concludePageAction = {
            label: this.literals.conclude,
            action: this.confirmJobScheduler.bind(this)
        };
        this.nextPageAction = {
            label: this.literals.next,
            action: this.nextStepOperation.bind(this, 'next'),
            disabled: this.isDisabledAdvance.bind(this)
        };
        this.concludePageActions = [this.concludePageAction, this.backPageAction];
        this.nextPageActions = [this.nextPageAction, this.backPageAction];
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.jobSchedulerActions = [...this.nextPageActions];
        const language = languageService.getShortLanguage();
        this.literals = Object.assign(Object.assign({}, this.literals), poPageJobSchedulerLiteralsDefault[language]);
        this.backPageAction.label = this.literals.back;
        this.concludePageAction.label = this.literals.conclude;
        this.nextPageAction.label = this.literals.next;
        this.steps = [
            { label: this.literals.scheduling },
            { label: this.literals.parameterization },
            { label: this.literals.conclude }
        ];
    }
    get stepperOrientation() {
        return window.innerWidth > 481 && window.innerWidth < 960 ? 'horizontal' : 'vertical';
    }
    ngOnInit() {
        const paramId = this.activatedRoute.snapshot.params['id'];
        this.isEdit = !!paramId;
        this.poPageJobSchedulerService.configServiceApi({ endpoint: this.serviceApi });
        if (this.parameters.length) {
            this.parametersEmpty = false;
        }
        this.loadData(paramId);
    }
    changePageActionsBySteps(currentStep, nextStep) {
        const stepsLength = this.steps.length;
        if (nextStep === stepsLength) {
            this.jobSchedulerActions = [...this.concludePageActions];
        }
        else if (currentStep === stepsLength && nextStep < currentStep) {
            this.jobSchedulerActions = [...this.nextPageActions];
        }
    }
    nextStep(stepNumber) {
        this.stepParametersInitialized = this.stepParametersInitialized || stepNumber === 2;
        if (stepNumber > 1 && this.schedulerExecution.form.invalid) {
            this.markAsDirtyInvalidControls(this.schedulerExecution.form.controls);
            return;
        }
        if (stepNumber > 2 &&
            this.schedulerParameters &&
            this.schedulerParameters.form &&
            this.schedulerParameters.form.invalid) {
            this.markAsDirtyInvalidControls(this.schedulerParameters.form.controls);
            return;
        }
        this.setModelRecurrent();
        const model = JSON.parse(JSON.stringify(this.model));
        if (stepNumber === this.steps.length) {
            this.publicValues = this.hidesSecretValues(model);
        }
        this.changePageActionsBySteps(this.step, stepNumber);
        const steps = this.steps[this.step - 1];
        this.step = stepNumber;
        if (steps) {
            steps.status = PoStepperStatus.Done;
        }
    }
    onChangeProcess(process) {
        var _a;
        if (process.existAPI && process.processId && this.parametersEmpty && !((_a = this.parametersTemplate) === null || _a === void 0 ? void 0 : _a.templateRef)) {
            this.getParametersByProcess(process.processId);
            if (!this.isEdit) {
                this.model.executionParameter = {};
            }
        }
    }
    confirmJobScheduler() {
        const paramId = this.activatedRoute.snapshot.params['id'];
        const confirmMessage = paramId ? this.literals.confirmUpdateMessage : this.literals.confirmSaveMessage;
        this.poDialogService.confirm({
            title: this.literals.confirmation,
            message: confirmMessage,
            confirm: () => {
                const model = Object.assign({}, this.model);
                this.save(model, paramId);
            }
        });
    }
    emitSuccessMessage(msgSuccess, saveOperation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield saveOperation.toPromise();
            this.poNotification.success(msgSuccess);
            this.resetJobSchedulerForm();
            // @todo emitir evento de finalização
        });
    }
    getParametersByProcess(process) {
        this.poPageJobSchedulerService.getParametersByProcess(process).subscribe(parameters => {
            this.parameters = parameters;
        });
    }
    hidesSecretValues(model) {
        const hiddenSecretValue = '**********';
        this.parameters.forEach(parameter => {
            if (this.isSecretParameter(model, parameter)) {
                model.executionParameter[parameter.property] = hiddenSecretValue;
            }
        });
        return model;
    }
    isDisabledAdvance() {
        var _a, _b;
        const componentByStep = {
            1: this.schedulerExecution,
            2: this.schedulerParameters
        };
        return ((_b = (_a = componentByStep[this.step]) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.invalid) || false;
    }
    isDisabledBack() {
        return this.step === 1;
    }
    isSecretParameter(model, parameter) {
        return (model.executionParameter &&
            parameter.hasOwnProperty('secret') &&
            parameter['secret'] === true &&
            model.executionParameter.hasOwnProperty(parameter.property));
    }
    nextStepOperation(operation) {
        const stepNumber = operation === 'back' ? this.step - 1 : this.step + 1;
        this.nextStep(stepNumber);
    }
    resetJobSchedulerForm() {
        this.schedulerExecution.form.reset();
        // radiogroup não estava atribuindo novo valor, fica vermelho sem o timetout.
        setTimeout(() => {
            this.model = new PoPageJobSchedulerInternal();
            this.step = 1;
            this.steps.forEach(step => {
                step.status = PoStepperStatus.Default;
            });
            this.jobSchedulerActions = [...this.nextPageActions];
        });
    }
    save(model, paramId) {
        const saveOperation = paramId
            ? this.poPageJobSchedulerService.updateResource(paramId, model)
            : this.poPageJobSchedulerService.createResource(model);
        const msgSuccess = paramId
            ? this.literals.saveNotificationSuccessUpdate
            : this.literals.saveNotificationSuccessSave;
        this.emitSuccessMessage(msgSuccess, saveOperation);
    }
    setModelRecurrent() {
        this.model.recurrent = this.model.periodicity === 'single' ? false : this.model.recurrent;
    }
}
PoPageJobSchedulerComponent.ɵfac = function PoPageJobSchedulerComponent_Factory(t) { return new (t || PoPageJobSchedulerComponent)(i0.ɵɵdirectiveInject(PoPageJobSchedulerLookupService), i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(PoPageJobSchedulerService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageJobSchedulerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageJobSchedulerComponent, selectors: [["po-page-job-scheduler"]], contentQueries: function PoPageJobSchedulerComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, PoJobSchedulerParametersTemplateDirective, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.parametersTemplate = _t.first);
        }
    }, viewQuery: function PoPageJobSchedulerComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 7);
            i0.ɵɵviewQuery(_c1$1, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.schedulerExecution = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.schedulerParameters = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 14, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [1, "po-row"], ["p-sequential", "true", 1, "po-lg-3", "po-xl-2", 3, "p-orientation", "p-step", "p-steps", "p-change-step"], [1, "po-lg-8", "po-xl-9"], ["formScheduler", "ngForm"], [1, "po-md-12", 3, "p-no-parameters", "p-no-custom-params-component", "hidden", "p-is-edit", "p-literals", "p-value", "p-change-process"], ["schedulerExecution", ""], ["class", "po-md-12", 3, "hidden", "p-literals", "p-parameters", "p-value", "p-template", "p-valueChange", 4, "ngIf"], ["class", "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value", 4, "ngIf"], [1, "po-md-12", 3, "hidden", "p-literals", "p-parameters", "p-value", "p-template", "p-valueChange"], ["schedulerParameters", ""], [1, "po-md-12", 3, "p-no-parameters", "p-literals", "p-parameters", "p-value"]], template: function PoPageJobSchedulerComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "po-page-default", 0)(1, "div", 1)(2, "po-stepper", 2);
            i0.ɵɵlistener("p-change-step", function PoPageJobSchedulerComponent_Template_po_stepper_p_change_step_2_listener($event) { return ctx.nextStep($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "po-container", 3)(4, "form", null, 4)(6, "div", 1)(7, "po-page-job-scheduler-execution", 5, 6);
            i0.ɵɵlistener("p-change-process", function PoPageJobSchedulerComponent_Template_po_page_job_scheduler_execution_p_change_process_7_listener($event) { return ctx.onChangeProcess($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template, 2, 6, "po-page-job-scheduler-parameters", 7);
            i0.ɵɵtemplate(10, PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template, 1, 7, "po-page-job-scheduler-summary", 8);
            i0.ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
            i0.ɵɵproperty("p-actions", ctx.jobSchedulerActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("p-orientation", ctx.stepperOrientation)("p-step", ctx.step)("p-steps", ctx.steps);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("p-no-parameters", ctx.parametersEmpty)("p-no-custom-params-component", !(ctx.parametersTemplate == null ? null : ctx.parametersTemplate.templateRef))("hidden", ctx.step !== 1)("p-is-edit", ctx.isEdit)("p-literals", ctx.literals)("p-value", ctx.model);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.stepParametersInitialized);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.step === 3);
        }
    }, dependencies: [i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i2.PoContainerComponent, i2.PoPageDefaultComponent, i2.PoStepperComponent, PoPageJobSchedulerExecutionComponent, PoPageJobSchedulerParametersComponent, PoPageJobSchedulerSummaryComponent], styles: ["po-container .po-container{overflow-y:unset}\n"], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerComponent, [{
            type: Component,
            args: [{ selector: 'po-page-job-scheduler', encapsulation: ViewEncapsulation.None, template: "<po-page-default [p-actions]=\"jobSchedulerActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <div class=\"po-row\">\r\n    <po-stepper\r\n      class=\"po-lg-3 po-xl-2\"\r\n      p-sequential=\"true\"\r\n      [p-orientation]=\"stepperOrientation\"\r\n      [p-step]=\"step\"\r\n      [p-steps]=\"steps\"\r\n      (p-change-step)=\"nextStep($event)\"\r\n    >\r\n    </po-stepper>\r\n\r\n    <po-container class=\"po-lg-8 po-xl-9\">\r\n      <form #formScheduler=\"ngForm\">\r\n        <div class=\"po-row\">\r\n          <po-page-job-scheduler-execution\r\n            [p-no-parameters]=\"parametersEmpty\"\r\n            [p-no-custom-params-component]=\"!parametersTemplate?.templateRef\"\r\n            [hidden]=\"step !== 1\"\r\n            #schedulerExecution\r\n            class=\"po-md-12\"\r\n            [p-is-edit]=\"isEdit\"\r\n            [p-literals]=\"literals\"\r\n            [p-value]=\"model\"\r\n            (p-change-process)=\"onChangeProcess($event)\"\r\n          >\r\n          </po-page-job-scheduler-execution>\r\n\r\n          <po-page-job-scheduler-parameters\r\n            *ngIf=\"stepParametersInitialized\"\r\n            [hidden]=\"step !== 2\"\r\n            #schedulerParameters\r\n            class=\"po-md-12\"\r\n            [p-literals]=\"literals\"\r\n            [p-parameters]=\"parameters || []\"\r\n            [(p-value)]=\"model.executionParameter\"\r\n            [p-template]=\"parametersTemplate\"\r\n          >\r\n          </po-page-job-scheduler-parameters>\r\n\r\n          <po-page-job-scheduler-summary\r\n            [p-no-parameters]=\"parametersEmpty\"\r\n            *ngIf=\"step === 3\"\r\n            class=\"po-md-12\"\r\n            [p-literals]=\"literals\"\r\n            [p-parameters]=\"parameters || [{}]\"\r\n            [p-value]=\"publicValues\"\r\n          >\r\n          </po-page-job-scheduler-summary>\r\n        </div>\r\n      </form>\r\n    </po-container>\r\n  </div>\r\n</po-page-default>\r\n", styles: ["po-container .po-container{overflow-y:unset}\n"] }]
        }], function () { return [{ type: PoPageJobSchedulerLookupService }, { type: i1$1.ActivatedRoute }, { type: i2.PoDialogService }, { type: i2.PoNotificationService }, { type: PoPageJobSchedulerService }, { type: i2.PoLanguageService }]; }, { schedulerExecution: [{
                type: ViewChild,
                args: ['schedulerExecution', { static: true }]
            }], schedulerParameters: [{
                type: ViewChild,
                args: ['schedulerParameters']
            }], parametersTemplate: [{
                type: ContentChild,
                args: [PoJobSchedulerParametersTemplateDirective, { static: true }]
            }] });
})();

class DynamicContentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
DynamicContentDirective.ɵfac = function DynamicContentDirective_Factory(t) { return new (t || DynamicContentDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
DynamicContentDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DynamicContentDirective, selectors: [["", "dynamicContent", ""]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicContentDirective, [{
            type: Directive,
            args: [{
                    selector: '[dynamicContent]'
                }]
        }], function () { return [{ type: i0.ViewContainerRef }]; }, null);
})();

function DynamicContentComponent_ng_template_0_Template(rf, ctx) { }
class DynamicContentComponent {
    constructor() { }
    ngOnInit() {
        const componentRef = this.createComponent();
        this.setInstance(componentRef);
    }
    createComponent() {
        const viewContainerRef = this.dynamicContent.viewContainerRef;
        viewContainerRef.clear();
        return viewContainerRef.createComponent(this.component);
    }
    setInstance(componentRef) {
        if (typeof this.dataProps === 'object' && this.dataProps !== null) {
            Object.keys(this.dataProps).forEach(key => {
                if (componentRef.instance[key] instanceof EventEmitter) {
                    // subscribe function to EventEmitter
                    componentRef.instance[key].subscribe(ev => typeof this.dataProps[key] === 'function' && this.dataProps[key](ev));
                }
                else {
                    componentRef.instance[key] = this.dataProps[key];
                }
            });
        }
    }
}
DynamicContentComponent.ɵfac = function DynamicContentComponent_Factory(t) { return new (t || DynamicContentComponent)(); };
DynamicContentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicContentComponent, selectors: [["dynamic-load-component"]], viewQuery: function DynamicContentComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(DynamicContentDirective, 7);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicContent = _t.first);
        }
    }, inputs: { component: "component", dataProps: "dataProps" }, decls: 1, vars: 0, consts: [["dynamicContent", ""]], template: function DynamicContentComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicContentComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
    }, dependencies: [DynamicContentDirective], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicContentComponent, [{
            type: Component,
            args: [{
                    selector: 'dynamic-load-component',
                    template: ` <ng-template dynamicContent></ng-template> `
                }]
        }], function () { return []; }, { component: [{
                type: Input
            }], dataProps: [{
                type: Input
            }], dynamicContent: [{
                type: ViewChild,
                args: [DynamicContentDirective, { static: true }]
            }] });
})();

class PoPageJobSchedulerModule {
}
PoPageJobSchedulerModule.ɵfac = function PoPageJobSchedulerModule_Factory(t) { return new (t || PoPageJobSchedulerModule)(); };
PoPageJobSchedulerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageJobSchedulerModule });
PoPageJobSchedulerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService], imports: [CommonModule,
        FormsModule,
        PoButtonModule,
        PoContainerModule,
        PoDialogModule,
        PoDividerModule,
        PoDynamicModule,
        PoFieldModule,
        PoInfoModule,
        PoPageModule,
        PoStepperModule,
        PoWidgetModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        PoPageJobSchedulerComponent,
                        PoPageJobSchedulerExecutionComponent,
                        PoPageJobSchedulerParametersComponent,
                        PoPageJobSchedulerSummaryComponent,
                        DynamicContentComponent,
                        DynamicContentDirective,
                        PoJobSchedulerParametersTemplateDirective
                    ],
                    exports: [
                        PoJobSchedulerParametersTemplateDirective,
                        PoPageJobSchedulerComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        PoButtonModule,
                        PoContainerModule,
                        PoDialogModule,
                        PoDividerModule,
                        PoDynamicModule,
                        PoFieldModule,
                        PoInfoModule,
                        PoPageModule,
                        PoStepperModule,
                        PoWidgetModule
                    ],
                    providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageJobSchedulerModule, { declarations: [PoPageJobSchedulerComponent,
            PoPageJobSchedulerExecutionComponent,
            PoPageJobSchedulerParametersComponent,
            PoPageJobSchedulerSummaryComponent,
            DynamicContentComponent,
            DynamicContentDirective,
            PoJobSchedulerParametersTemplateDirective], imports: [CommonModule,
            FormsModule,
            PoButtonModule,
            PoContainerModule,
            PoDialogModule,
            PoDividerModule,
            PoDynamicModule,
            PoFieldModule,
            PoInfoModule,
            PoPageModule,
            PoStepperModule,
            PoWidgetModule], exports: [PoJobSchedulerParametersTemplateDirective,
            PoPageJobSchedulerComponent] });
})();

/**
 * @usedBy PoPageLoginComponent
 *
 * @description
 *
 * *Enum* para definição do tipo de autenticação.
 */
var PoPageLoginAuthenticationType;
(function (PoPageLoginAuthenticationType) {
    /** Autenticação Basic */
    PoPageLoginAuthenticationType["Basic"] = "Basic";
    /** Autenticação Bearer */
    PoPageLoginAuthenticationType["Bearer"] = "Bearer";
})(PoPageLoginAuthenticationType || (PoPageLoginAuthenticationType = {}));

class PoPageLoginService {
    constructor(http) {
        this.http = http;
    }
    onLogin(url, type, loginForm) {
        if (type === PoPageLoginAuthenticationType.Bearer) {
            loginForm.password = btoa(loginForm.password);
            return this.http.post(url, loginForm);
        }
        else {
            const user = `(${loginForm.login}:${loginForm.password})`;
            const headers = new HttpHeaders({
                'Authorization': `${type} ` + btoa(user)
            });
            delete loginForm.login;
            delete loginForm.password;
            return this.http.post(url, loginForm, { headers });
        }
    }
}
PoPageLoginService.ɵfac = function PoPageLoginService_Factory(t) { return new (t || PoPageLoginService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageLoginService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageLoginService, factory: PoPageLoginService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginService, [{
            type: Injectable
        }], function () { return [{ type: i1.HttpClient }]; }, null);
})();

const poPageLoginContentMaxLength = 40;
const poPageLoginLiteralsDefault = {
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
const poPageLoginLiteralIn = {
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
class PoPageLoginBaseComponent {
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
        return Object.assign(Object.assign(Object.assign(Object.assign({}, poPageLoginLiteralsDefault[poLocaleDefault]), poPageLoginLiteralsDefault[this.language]), loginHintWithContactEmail), this.literals);
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
PoPageLoginBaseComponent.ɵfac = function PoPageLoginBaseComponent_Factory(t) { return new (t || PoPageLoginBaseComponent)(i0.ɵɵdirectiveInject(PoPageLoginService), i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageLoginBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageLoginBaseComponent, inputs: { background: ["p-background", "background"], logo: ["p-logo", "logo"], loginPattern: ["p-login-pattern", "loginPattern"], passwordPattern: ["p-password-pattern", "passwordPattern"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], customField: ["p-custom-field", "customField"], contactEmail: ["p-contact-email", "contactEmail"], productName: ["p-product-name", "productName"], environment: ["p-environment", "environment"], exceededAttemptsWarning: ["p-exceeded-attempts-warning", "exceededAttemptsWarning"], hideRememberUser: ["p-hide-remember-user", "hideRememberUser"], literals: ["p-literals", "literals"], loading: ["p-loading", "loading"], login: ["p-login", "login"], loginErrors: ["p-login-errors", "loginErrors"], passwordErrors: ["p-password-errors", "passwordErrors"], recovery: ["p-recovery", "recovery"], registerUrl: ["p-register-url", "registerUrl"], authenticationType: ["p-authentication-type", "authenticationType"], authenticationUrl: ["p-authentication-url", "authenticationUrl"], blockedUrl: ["p-blocked-url", "blockedUrl"], support: ["p-support", "support"], languagesList: ["p-languages", "languagesList"] }, outputs: { loginChange: "p-login-change", loginSubmit: "p-login-submit", passwordChange: "p-password-change", languageChange: "p-language-change" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginBaseComponent, [{
            type: Directive
        }], function () { return [{ type: PoPageLoginService }, { type: i1$1.Router }, { type: i2.PoLanguageService }]; }, { background: [{
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
            }] });
})();

function PoPageLoginPopoverComponent_div_17_a_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("routerLink", ctx_r1.recovery);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.literals == null ? null : ctx_r1.literals.iForgotMyPassword, " ");
    }
}
function PoPageLoginPopoverComponent_div_17_a_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("href", ctx_r2.recovery, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.literals == null ? null : ctx_r2.literals.iForgotMyPassword, " ");
    }
}
function PoPageLoginPopoverComponent_div_17_a_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 14);
        i0.ɵɵlistener("click", function PoPageLoginPopoverComponent_div_17_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onForgotPasswordClick(ctx_r4.recovery)); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r3.literals == null ? null : ctx_r3.literals.iForgotMyPassword, " ");
    }
}
function PoPageLoginPopoverComponent_div_17_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 8);
        i0.ɵɵtemplate(1, PoPageLoginPopoverComponent_div_17_a_1_Template, 2, 2, "a", 9);
        i0.ɵɵtemplate(2, PoPageLoginPopoverComponent_div_17_a_2_Template, 2, 2, "a", 10);
        i0.ɵɵtemplate(3, PoPageLoginPopoverComponent_div_17_a_3_Template, 2, 1, "a", 11);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.recoveryType === "internalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.recoveryType === "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r0.recoveryType);
    }
}
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para definição da mensagem de aviso de bloqueio do `po-page-login`.
 */
class PoPageLoginPopoverComponent {
    constructor() {
        /** se 'p-recovery' for do tipo Function ou PoPageLoginRecovery, emite para o método 'openUrl' do componente 'po-page-login' */
        this.forgotPassword = new EventEmitter();
    }
    /** exibe o link de 'esqueci minha senha' e verifica se o valor é um link interno ou externo */
    set recovery(value) {
        this._recovery = value;
        if (isTypeof(value, 'string')) {
            this.recoveryType = isExternalLink(value) ? 'externalLink' : 'internalLink';
        }
    }
    get recovery() {
        return this._recovery;
    }
    onForgotPasswordClick(recovery) {
        this.forgotPassword.emit(recovery);
    }
}
PoPageLoginPopoverComponent.ɵfac = function PoPageLoginPopoverComponent_Factory(t) { return new (t || PoPageLoginPopoverComponent)(); };
PoPageLoginPopoverComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageLoginPopoverComponent, selectors: [["po-page-login-popover"]], inputs: { literals: ["p-literals", "literals"], recovery: ["p-recovery", "recovery"], remainingAttempts: ["p-remaining-attempts", "remainingAttempts"] }, outputs: { forgotPassword: "p-forgot-password" }, decls: 18, vars: 10, consts: [[1, "po-page-login-popover-container"], [1, "po-page-login-popover"], [1, "po-page-login-popover-arrow"], [1, "po-page-login-popover-content"], [1, "po-font-text-bold", "po-page-login-popover-title"], [1, "po-font-text"], [1, "po-font-text-bold", "po-page-login-popover-attempts"], ["class", "po-font-text-bold po-mt-1 po-page-login-popover-link-container", 4, "ngIf"], [1, "po-font-text-bold", "po-mt-1", "po-page-login-popover-link-container"], ["class", "po-page-login-popover-link", 3, "routerLink", 4, "ngIf"], ["class", "po-page-login-popover-link", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "po-page-login-popover-link", 3, "click", 4, "ngIf"], [1, "po-page-login-popover-link", 3, "routerLink"], ["target", "_blank", 1, "po-page-login-popover-link", 3, "href"], [1, "po-page-login-popover-link", 3, "click"]], template: function PoPageLoginPopoverComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 5);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "poI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "br");
            i0.ɵɵelementStart(15, "p", 5);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, PoPageLoginPopoverComponent_div_17_Template, 4, 3, "div", 7);
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.titlePopover, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.forgotYourPassword, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.ifYouTryHarder, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(12, 7, ctx.literals == null ? null : ctx.literals.attempts, ctx.remainingAttempts), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.literals == null ? null : ctx.literals.yourUserWillBeBlocked, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.createANewPasswordNow, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.recovery);
        }
    }, dependencies: [i4.NgIf, i1$1.RouterLinkWithHref, i2.PoI18nPipe], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginPopoverComponent, [{
            type: Component,
            args: [{ selector: 'po-page-login-popover', template: "<div class=\"po-page-login-popover-container\">\r\n  <div class=\"po-page-login-popover\">\r\n    <div class=\"po-page-login-popover-arrow\"></div>\r\n    <div class=\"po-page-login-popover-content\">\r\n      <p class=\"po-font-text-bold po-page-login-popover-title\">\r\n        {{ literals?.titlePopover }}\r\n      </p>\r\n      <p class=\"po-font-text\">\r\n        {{ literals?.forgotYourPassword }}\r\n      </p>\r\n      <p class=\"po-font-text\">\r\n        {{ literals?.ifYouTryHarder }}\r\n        <span class=\"po-font-text-bold po-page-login-popover-attempts\">\r\n          {{ literals?.attempts | poI18n: remainingAttempts }} </span\r\n        >{{ literals?.yourUserWillBeBlocked }}\r\n      </p>\r\n      <br />\r\n      <p class=\"po-font-text\">\r\n        {{ literals?.createANewPasswordNow }}\r\n      </p>\r\n      <div *ngIf=\"recovery\" class=\"po-font-text-bold po-mt-1 po-page-login-popover-link-container\">\r\n        <a *ngIf=\"recoveryType === 'internalLink'\" class=\"po-page-login-popover-link\" [routerLink]=\"recovery\">\r\n          {{ literals?.iForgotMyPassword }}\r\n        </a>\r\n        <a *ngIf=\"recoveryType === 'externalLink'\" class=\"po-page-login-popover-link\" [href]=\"recovery\" target=\"_blank\">\r\n          {{ literals?.iForgotMyPassword }}\r\n        </a>\r\n        <a *ngIf=\"!recoveryType\" class=\"po-page-login-popover-link\" (click)=\"onForgotPasswordClick(recovery)\">\r\n          {{ literals?.iForgotMyPassword }}\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }], null, { literals: [{
                type: Input,
                args: ['p-literals']
            }], recovery: [{
                type: Input,
                args: ['p-recovery']
            }], remainingAttempts: [{
                type: Input,
                args: ['p-remaining-attempts']
            }], forgotPassword: [{
                type: Output,
                args: ['p-forgot-password']
            }] });
})();

const _c0 = ["loginForm"];
const _c1 = ["pageLogin"];
function PoPageLoginComponent_po_tag_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "po-tag", 28);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("p-value", ctx_r1.environment);
    }
}
function PoPageLoginComponent_div_18_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 31);
    }
    if (rf & 2) {
        const ctx_r13 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("p-tooltip", ctx_r13.pageLoginLiterals.loginHint);
    }
}
function PoPageLoginComponent_div_18_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 29);
        i0.ɵɵtemplate(1, PoPageLoginComponent_div_18_span_1_Template, 1, 1, "span", 30);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("po-page-login-info-icon-container-dynamic", !ctx_r3.pageLoginLiterals.loginHint && !ctx_r3.pageLoginLiterals.rememberUserHint);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r3.pageLoginLiterals.loginHint);
    }
}
function PoPageLoginComponent_div_20_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 32);
        i0.ɵɵelement(1, "span", 33);
        i0.ɵɵelementStart(2, "span", 34);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const error_r14 = ctx.$implicit;
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(error_r14);
    }
}
function PoPageLoginComponent_div_24_po_page_login_popover_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-page-login-popover", 37);
        i0.ɵɵlistener("p-forgot-password", function PoPageLoginComponent_div_24_po_page_login_popover_1_Template_po_page_login_popover_p_forgot_password_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.openUrl($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r15 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("p-literals", ctx_r15.pageLoginLiterals)("p-recovery", ctx_r15.recovery)("p-remaining-attempts", ctx_r15.exceededAttemptsWarning);
    }
}
function PoPageLoginComponent_div_24_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 35);
        i0.ɵɵtemplate(1, PoPageLoginComponent_div_24_po_page_login_popover_1_Template, 1, 3, "po-page-login-popover", 36);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r5.showExceededAttemptsWarning && ctx_r5.exceededAttemptsWarning);
    }
}
function PoPageLoginComponent_div_26_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 32);
        i0.ɵɵelement(1, "span", 33);
        i0.ɵɵelementStart(2, "span", 34);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const error_r18 = ctx.$implicit;
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(error_r18);
    }
}
function PoPageLoginComponent_po_input_27_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-input", 38);
        i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_po_input_27_Template_po_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.customFieldObject.value = $event); })("keyup.enter", function PoPageLoginComponent_po_input_27_Template_po_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(13); return i0.ɵɵresetView(_r2.valid && ctx_r21.onLoginSubmit()); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r7.pageLoginLiterals.loginHint && !ctx_r7.pageLoginLiterals.rememberUserHint);
        i0.ɵɵproperty("ngModel", ctx_r7.customFieldObject.value)("p-error-pattern", ctx_r7.customFieldObject.errorPattern || ctx_r7.pageLoginLiterals.customFieldErrorPattern)("p-pattern", ctx_r7.customFieldObject.pattern)("p-placeholder", ctx_r7.customFieldObject.placeholder || ctx_r7.pageLoginLiterals.customFieldPlaceholder);
    }
}
function PoPageLoginComponent_po_combo_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-combo", 39);
        i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_po_combo_28_Template_po_combo_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.customFieldObject.value = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r8.pageLoginLiterals.loginHint && !ctx_r8.pageLoginLiterals.rememberUserHint);
        i0.ɵɵproperty("ngModel", ctx_r8.customFieldObject.value)("p-field-value", ctx_r8.customFieldObject.fieldValue)("p-filter-service", ctx_r8.customFieldObject.url)("p-placeholder", ctx_r8.customFieldObject.placeholder || ctx_r8.pageLoginLiterals.customFieldPlaceholder);
    }
}
function PoPageLoginComponent_po_select_29_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "po-select", 40);
        i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_po_select_29_Template_po_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.customFieldObject.value = $event); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r9 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r9.pageLoginLiterals.loginHint && !ctx_r9.pageLoginLiterals.rememberUserHint);
        i0.ɵɵproperty("ngModel", ctx_r9.customFieldObject.value)("p-placeholder", ctx_r9.customFieldObject.placeholder || ctx_r9.pageLoginLiterals.customFieldPlaceholder)("p-options", ctx_r9.customFieldObject.options);
    }
}
function PoPageLoginComponent_div_31_div_2_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 31);
    }
    if (rf & 2) {
        const ctx_r27 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("p-tooltip", ctx_r27.pageLoginLiterals.rememberUserHint);
    }
}
function PoPageLoginComponent_div_31_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 43);
        i0.ɵɵtemplate(1, PoPageLoginComponent_div_31_div_2_span_1_Template, 1, 1, "span", 30);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r26 = i0.ɵɵnextContext(2);
        i0.ɵɵclassProp("po-page-login-info-icon-container-dynamic", !ctx_r26.pageLoginLiterals.rememberUserHint);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r26.pageLoginLiterals.rememberUserHint);
    }
}
function PoPageLoginComponent_div_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 13)(1, "po-switch", 41);
        i0.ɵɵlistener("ngModelChange", function PoPageLoginComponent_div_31_Template_po_switch_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.rememberUser = $event); })("keyup.enter", function PoPageLoginComponent_div_31_Template_po_switch_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(13); return i0.ɵɵresetView(_r2.valid && ctx_r30.onLoginSubmit()); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoPageLoginComponent_div_31_div_2_Template, 2, 3, "div", 42);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r10.rememberUser)("p-label-off", ctx_r10.pageLoginLiterals.rememberUser)("p-label-on", ctx_r10.pageLoginLiterals.rememberUser);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r10.pageLoginLiterals.loginHint || ctx_r10.pageLoginLiterals.rememberUserHint);
    }
}
function PoPageLoginComponent_div_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 44)(1, "a", 45);
        i0.ɵɵlistener("click", function PoPageLoginComponent_div_33_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.openUrl(ctx_r31.recovery)); });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r11 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r11.pageLoginLiterals.forgotPassword);
    }
}
function PoPageLoginComponent_div_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 46)(1, "a", 45);
        i0.ɵɵlistener("click", function PoPageLoginComponent_div_34_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.openUrl(ctx_r33.registerUrl)); });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r12 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r12.pageLoginLiterals.registerUrl);
    }
}
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
class PoPageLoginComponent extends PoPageLoginBaseComponent {
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
        return (language === null || language === void 0 ? void 0 : language.language) || this.languagesList[0].language;
    }
}
PoPageLoginComponent.ɵfac = function PoPageLoginComponent_Factory(t) { return new (t || PoPageLoginComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoComponentInjectorService), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(PoPageLoginService), i0.ɵɵdirectiveInject(i1$1.Router), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageLoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageLoginComponent, selectors: [["po-page-login"]], viewQuery: function PoPageLoginComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7, NgForm);
            i0.ɵɵviewQuery(_c1, 7, ViewContainerRef);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.loginForm = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageLogin = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], decls: 35, vars: 39, consts: [[1, "po-page-login-support", 3, "hidden", "click"], [1, "po-icon", "po-icon-help"], [3, "p-show-select-language", "p-languages", "p-initial-language", "p-background", "p-highlight-info", "p-logo", "p-secondary-logo", "p-selected-language"], ["pageLogin", ""], [1, "po-page-login-header"], [1, "po-mb-md-4", "po-mb-sm-1"], [1, "po-page-login-header-product-name"], ["p-type", "warning", 3, "p-value", 4, "ngIf"], [1, "po-page-login-header-welcome", "po-mb-md-4", "po-mb-sm-2"], [1, "po-page-login-form"], ["loginForm", "ngForm"], [1, "po-row"], [1, "po-lg-12"], [1, "po-page-login-hint", "po-page-login-info-container"], ["name", "login", "p-auto-focus", "", "p-required", "", 1, "po-page-login-info-field", 3, "ngModel", "p-label", "p-pattern", "p-placeholder", "ngModelChange", "click", "keyup.enter", "p-change-model"], ["class", "po-page-login-info-icon-container", 3, "po-page-login-info-icon-container-dynamic", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], ["class", "po-field-container-bottom-text-error po-field-container-error-item", 4, "ngFor", "ngForOf"], [1, "po-page-login-password-container"], ["name", "password", "p-required", "", 1, "po-page-login-field-size", "po-page-login-password-item", 3, "ngModel", "p-label", "p-pattern", "p-placeholder", "ngModelChange", "click", "keyup.enter", "p-change-model"], ["class", "po-page-login-password-item po-page-login-password-popover-container", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldInput", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "ngModelChange", "keyup.enter", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldCombo", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "ngModelChange", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldSelect", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-placeholder", "p-options", "ngModelChange", 4, "ngIf"], ["class", "po-page-login-hint po-page-login-info-container", 4, "ngIf"], ["p-kind", "primary", 1, "po-lg-12", "po-page-login-button", "po-page-login-field-size", 3, "p-disabled", "p-label", "p-loading", "p-click"], ["class", "po-page-login-recovery-link", 4, "ngIf"], ["class", "po-page-login-register-link", 4, "ngIf"], ["p-type", "warning", 3, "p-value"], [1, "po-page-login-info-icon-container"], ["class", "po-icon po-field-icon po-icon-info", "p-tooltip-position", "right", 3, "p-tooltip", 4, "ngIf"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"], [1, "po-field-container-bottom-text-error", "po-field-container-error-item"], [1, "po-icon", "po-icon-exclamation"], [1, "po-field-container-error-text"], [1, "po-page-login-password-item", "po-page-login-password-popover-container"], [3, "p-literals", "p-recovery", "p-remaining-attempts", "p-forgot-password", 4, "ngIf"], [3, "p-literals", "p-recovery", "p-remaining-attempts", "p-forgot-password"], ["name", "customFieldInput", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "ngModelChange", "keyup.enter"], ["name", "customFieldCombo", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "ngModelChange"], ["name", "customFieldSelect", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModel", "p-placeholder", "p-options", "ngModelChange"], ["name", "rememberUser", "p-label-position", "1", 1, "po-page-login-info-field", "po-lg-7", "po-offset-lg-5", "po-offset-xl-5", 3, "ngModel", "p-label-off", "p-label-on", "ngModelChange", "keyup.enter"], ["class", "po-page-login-info-icon-container po-page-login-info-icon-remember-user", 3, "po-page-login-info-icon-container-dynamic", 4, "ngIf"], [1, "po-page-login-info-icon-container", "po-page-login-info-icon-remember-user"], [1, "po-page-login-recovery-link"], [1, "po-font-text-large-bold", 3, "click"], [1, "po-page-login-register-link"]], template: function PoPageLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
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
        }
    }, dependencies: [i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, PoPageBackgroundComponent, i2.PoButtonComponent, i2.PoComboComponent, i2.PoInputComponent, i2.PoLoginComponent, i2.PoPasswordComponent, i2.PoSelectComponent, i2.PoSwitchComponent, i2.PoTagComponent, i2.PoTooltipDirective, PoPageLoginPopoverComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginComponent, [{
            type: Component,
            args: [{ selector: 'po-page-login', template: "<button class=\"po-page-login-support\" (click)=\"activateSupport()\" [hidden]=\"!support\">\r\n  <span class=\"po-icon po-icon-help\"></span>\r\n  {{ pageLoginLiterals?.support }}\r\n</button>\r\n\r\n<po-page-background\r\n  #pageLogin\r\n  [p-show-select-language]=\"showLanguage\"\r\n  [p-languages]=\"languagesList\"\r\n  [p-initial-language]=\"initialSelectLanguage\"\r\n  [p-background]=\"background\"\r\n  [p-highlight-info]=\"pageLoginLiterals.highlightInfo\"\r\n  [p-logo]=\"logo\"\r\n  [p-secondary-logo]=\"secondaryLogo\"\r\n  (p-selected-language)=\"onSelectedLanguage($event)\"\r\n>\r\n  <header class=\"po-page-login-header\">\r\n    <h1 class=\"po-mb-md-4 po-mb-sm-1\">\r\n      <div class=\"po-page-login-header-product-name\">{{ productName }}</div>\r\n      <po-tag *ngIf=\"environment\" p-type=\"warning\" [p-value]=\"environment\"> </po-tag>\r\n    </h1>\r\n    <div class=\"po-page-login-header-welcome po-mb-md-4 po-mb-sm-2\">{{ pageLoginLiterals.welcome }}</div>\r\n  </header>\r\n\r\n  <form #loginForm=\"ngForm\" class=\"po-page-login-form\">\r\n    <div class=\"po-row\">\r\n      <div class=\"po-lg-12\">\r\n        <div class=\"po-page-login-hint po-page-login-info-container\">\r\n          <po-login\r\n            class=\"po-page-login-info-field\"\r\n            [class.po-page-login-info-field-dynamic]=\"\r\n              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\r\n            \"\r\n            name=\"login\"\r\n            [(ngModel)]=\"login\"\r\n            p-auto-focus\r\n            p-required\r\n            [p-label]=\"pageLoginLiterals.loginLabel\"\r\n            [p-pattern]=\"loginPattern\"\r\n            [p-placeholder]=\"pageLoginLiterals.loginPlaceholder\"\r\n            (click)=\"closePopover()\"\r\n            (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n            (p-change-model)=\"changeLoginModel()\"\r\n          >\r\n          </po-login>\r\n\r\n          <div\r\n            *ngIf=\"pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint\"\r\n            class=\"po-page-login-info-icon-container\"\r\n            [class.po-page-login-info-icon-container-dynamic]=\"\r\n              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\r\n            \"\r\n          >\r\n            <span\r\n              *ngIf=\"pageLoginLiterals.loginHint\"\r\n              class=\"po-icon po-field-icon po-icon-info\"\r\n              p-tooltip-position=\"right\"\r\n              [p-tooltip]=\"pageLoginLiterals.loginHint\"\r\n            >\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n          <div\r\n            *ngFor=\"let error of allLoginErrors\"\r\n            class=\"po-field-container-bottom-text-error po-field-container-error-item\"\r\n          >\r\n            <span class=\"po-icon po-icon-exclamation\"></span>\r\n            <span class=\"po-field-container-error-text\">{{ error }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"po-lg-12\">\r\n        <div class=\"po-page-login-password-container\">\r\n          <po-password\r\n            class=\"po-page-login-field-size po-page-login-password-item\"\r\n            [class.po-page-login-field-size-dynamic]=\"\r\n              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\r\n            \"\r\n            name=\"password\"\r\n            [(ngModel)]=\"password\"\r\n            p-required\r\n            [p-label]=\"pageLoginLiterals.passwordLabel\"\r\n            [p-pattern]=\"passwordPattern\"\r\n            [p-placeholder]=\"pageLoginLiterals.passwordPlaceholder\"\r\n            (click)=\"closePopover()\"\r\n            (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n            (p-change-model)=\"changePasswordModel()\"\r\n          >\r\n          </po-password>\r\n          <div\r\n            *ngIf=\"pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint\"\r\n            class=\"po-page-login-password-item po-page-login-password-popover-container\"\r\n          >\r\n            <po-page-login-popover\r\n              *ngIf=\"showExceededAttemptsWarning && exceededAttemptsWarning\"\r\n              [p-literals]=\"pageLoginLiterals\"\r\n              [p-recovery]=\"recovery\"\r\n              [p-remaining-attempts]=\"exceededAttemptsWarning\"\r\n              (p-forgot-password)=\"openUrl($event)\"\r\n            >\r\n            </po-page-login-popover>\r\n          </div>\r\n        </div>\r\n        <div class=\"po-field-container-bottom po-field-container-error-container\">\r\n          <div\r\n            *ngFor=\"let error of allPasswordErrors\"\r\n            class=\"po-field-container-bottom-text-error po-field-container-error-item\"\r\n          >\r\n            <span class=\"po-icon po-icon-exclamation\"></span>\r\n            <span class=\"po-field-container-error-text\">{{ error }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <po-input\r\n        *ngIf=\"customField && customFieldType === 'input'\"\r\n        [class.po-page-login-field-size-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-page-login-field-size po-lg-12\"\r\n        name=\"customFieldInput\"\r\n        [(ngModel)]=\"customFieldObject.value\"\r\n        p-required\r\n        [p-error-pattern]=\"customFieldObject.errorPattern || pageLoginLiterals.customFieldErrorPattern\"\r\n        [p-pattern]=\"customFieldObject.pattern\"\r\n        [p-placeholder]=\"customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder\"\r\n        (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n      >\r\n      </po-input>\r\n\r\n      <po-combo\r\n        *ngIf=\"customField && customFieldType === 'combo'\"\r\n        [class.po-page-login-field-size-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-page-login-field-size po-lg-12\"\r\n        name=\"customFieldCombo\"\r\n        [(ngModel)]=\"customFieldObject.value\"\r\n        p-required\r\n        [p-field-value]=\"customFieldObject.fieldValue\"\r\n        [p-filter-service]=\"customFieldObject.url\"\r\n        [p-placeholder]=\"customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder\"\r\n      >\r\n      </po-combo>\r\n\r\n      <po-select\r\n        *ngIf=\"customField && customFieldType === 'select'\"\r\n        [class.po-page-login-field-size-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-page-login-field-size po-lg-12\"\r\n        name=\"customFieldSelect\"\r\n        [(ngModel)]=\"customFieldObject.value\"\r\n        p-required\r\n        [p-placeholder]=\"customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder\"\r\n        [p-options]=\"customFieldObject.options\"\r\n      >\r\n      </po-select>\r\n\r\n      <div class=\"po-lg-12\">\r\n        <div *ngIf=\"!hideRememberUser\" class=\"po-page-login-hint po-page-login-info-container\">\r\n          <po-switch\r\n            class=\"po-page-login-info-field po-lg-7 po-offset-lg-5 po-offset-xl-5\"\r\n            name=\"rememberUser\"\r\n            [(ngModel)]=\"rememberUser\"\r\n            p-label-position=\"1\"\r\n            [p-label-off]=\"pageLoginLiterals.rememberUser\"\r\n            [p-label-on]=\"pageLoginLiterals.rememberUser\"\r\n            (keyup.enter)=\"loginForm.valid && onLoginSubmit()\"\r\n          >\r\n          </po-switch>\r\n\r\n          <div\r\n            *ngIf=\"pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint\"\r\n            class=\"po-page-login-info-icon-container po-page-login-info-icon-remember-user\"\r\n            [class.po-page-login-info-icon-container-dynamic]=\"!pageLoginLiterals.rememberUserHint\"\r\n          >\r\n            <span\r\n              *ngIf=\"pageLoginLiterals.rememberUserHint\"\r\n              class=\"po-icon po-field-icon po-icon-info\"\r\n              p-tooltip-position=\"right\"\r\n              [p-tooltip]=\"pageLoginLiterals.rememberUserHint\"\r\n            >\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <po-button\r\n        [class.po-page-login-button-dynamic]=\"!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint\"\r\n        class=\"po-lg-12 po-page-login-button po-page-login-field-size\"\r\n        p-kind=\"primary\"\r\n        [p-disabled]=\"loginForm.invalid\"\r\n        [p-label]=\"loading ? pageLoginLiterals.submittedLabel : pageLoginLiterals.submitLabel\"\r\n        [p-loading]=\"loading\"\r\n        (p-click)=\"onLoginSubmit()\"\r\n      >\r\n      </po-button>\r\n\r\n      <div *ngIf=\"recovery\" class=\"po-page-login-recovery-link\">\r\n        <a class=\"po-font-text-large-bold\" (click)=\"openUrl(recovery)\">{{ pageLoginLiterals.forgotPassword }}</a>\r\n      </div>\r\n\r\n      <div *ngIf=\"registerUrl\" class=\"po-page-login-register-link\">\r\n        <a class=\"po-font-text-large-bold\" (click)=\"openUrl(registerUrl)\">{{ pageLoginLiterals.registerUrl }}</a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</po-page-background>\r\n" }]
        }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$1.ActivatedRoute }, { type: i2.PoComponentInjectorService }, { type: i0.IterableDiffers }, { type: PoPageLoginService }, { type: i1$1.Router }, { type: i2.PoLanguageService }]; }, { loginForm: [{
                type: ViewChild,
                args: ['loginForm', { read: NgForm, static: true }]
            }], pageLogin: [{
                type: ViewChild,
                args: ['pageLogin', { read: ViewContainerRef, static: true }]
            }] });
})();

/**
 * @description
 *
 * Módulo do template do po-page-login.
 */
class PoPageLoginModule {
}
PoPageLoginModule.ɵfac = function PoPageLoginModule_Factory(t) { return new (t || PoPageLoginModule)(); };
PoPageLoginModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoPageLoginModule });
PoPageLoginModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoPageLoginService], imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageLoginModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule],
                    declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent],
                    exports: [PoPageLoginComponent],
                    providers: [PoPageLoginService]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoPageLoginModule, { declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent], imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule], exports: [PoPageLoginComponent] }); })();

class PoComponentsModule {
}
PoComponentsModule.ɵfac = function PoComponentsModule_Factory(t) { return new (t || PoComponentsModule)(); };
PoComponentsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoComponentsModule });
PoComponentsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [PoModalPasswordRecoveryModule,
        PoPageBackgroundModule,
        PoPageBlockedUserModule,
        PoPageChangePasswordModule,
        PoPageDynamicDetailModule,
        PoPageDynamicEditModule,
        PoPageDynamicSearchModule,
        PoPageDynamicTableModule,
        PoPageJobSchedulerModule,
        PoPageLoginModule, PoModalPasswordRecoveryModule,
        PoPageBackgroundModule,
        PoPageBlockedUserModule,
        PoPageChangePasswordModule,
        PoPageDynamicDetailModule,
        PoPageDynamicEditModule,
        PoPageDynamicSearchModule,
        PoPageDynamicTableModule,
        PoPageJobSchedulerModule,
        PoPageLoginModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoComponentsModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        PoModalPasswordRecoveryModule,
                        PoPageBackgroundModule,
                        PoPageBlockedUserModule,
                        PoPageChangePasswordModule,
                        PoPageDynamicDetailModule,
                        PoPageDynamicEditModule,
                        PoPageDynamicSearchModule,
                        PoPageDynamicTableModule,
                        PoPageJobSchedulerModule,
                        PoPageLoginModule
                    ],
                    exports: [
                        PoModalPasswordRecoveryModule,
                        PoPageBackgroundModule,
                        PoPageBlockedUserModule,
                        PoPageChangePasswordModule,
                        PoPageDynamicDetailModule,
                        PoPageDynamicEditModule,
                        PoPageDynamicSearchModule,
                        PoPageDynamicTableModule,
                        PoPageJobSchedulerModule,
                        PoPageLoginModule
                    ]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoComponentsModule, { imports: [PoModalPasswordRecoveryModule,
            PoPageBackgroundModule,
            PoPageBlockedUserModule,
            PoPageChangePasswordModule,
            PoPageDynamicDetailModule,
            PoPageDynamicEditModule,
            PoPageDynamicSearchModule,
            PoPageDynamicTableModule,
            PoPageJobSchedulerModule,
            PoPageLoginModule], exports: [PoModalPasswordRecoveryModule,
            PoPageBackgroundModule,
            PoPageBlockedUserModule,
            PoPageChangePasswordModule,
            PoPageDynamicDetailModule,
            PoPageDynamicEditModule,
            PoPageDynamicSearchModule,
            PoPageDynamicTableModule,
            PoPageJobSchedulerModule,
            PoPageLoginModule] });
})();

class PoServicesModule {
}
PoServicesModule.ɵfac = function PoServicesModule_Factory(t) { return new (t || PoServicesModule)(); };
PoServicesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoServicesModule });
PoServicesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [PoPageCustomizationModule, PoPageDynamicModule, PoPageCustomizationModule, PoPageDynamicModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoServicesModule, [{
            type: NgModule,
            args: [{
                    imports: [PoPageCustomizationModule, PoPageDynamicModule],
                    exports: [PoPageCustomizationModule, PoPageDynamicModule]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoServicesModule, { imports: [PoPageCustomizationModule, PoPageDynamicModule], exports: [PoPageCustomizationModule, PoPageDynamicModule] }); })();

class PoTemplatesModule {
}
PoTemplatesModule.ɵfac = function PoTemplatesModule_Factory(t) { return new (t || PoTemplatesModule)(); };
PoTemplatesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoTemplatesModule });
PoTemplatesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [PoComponentsModule, PoServicesModule, PoComponentsModule, PoServicesModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTemplatesModule, [{
            type: NgModule,
            args: [{
                    imports: [PoComponentsModule, PoServicesModule],
                    exports: [PoComponentsModule, PoServicesModule]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoTemplatesModule, { imports: [PoComponentsModule, PoServicesModule], exports: [PoComponentsModule, PoServicesModule] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PoComponentsModule, PoJobSchedulerParametersTemplateDirective, PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent, PoModalPasswordRecoveryModalContent, PoModalPasswordRecoveryModule, PoModalPasswordRecoveryType, PoPageBackgroundComponent, PoPageBackgroundModule, PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserModule, PoPageBlockedUserReason, PoPageBlockedUserReasonComponent, PoPageChangePasswordComponent, PoPageChangePasswordModule, PoPageCustomizationModule, PoPageCustomizationService, PoPageDynamicDetailComponent, PoPageDynamicDetailModule, PoPageDynamicEditComponent, PoPageDynamicEditModule, PoPageDynamicModule, PoPageDynamicSearchComponent, PoPageDynamicSearchModule, PoPageDynamicService, PoPageDynamicTableComponent, PoPageDynamicTableModule, PoPageJobSchedulerComponent, PoPageJobSchedulerModule, PoPageLoginAuthenticationType, PoPageLoginComponent, PoPageLoginModule, PoServicesModule, PoTemplatesModule, poModalPasswordRecoveryLiterals, poPageBlockedUserButtonLiterals, poPageBlockedUserLiterals, poPageChangePasswordLiterals, poPageDynamicDetailLiteralsDefault, poPageDynamicEditLiteralsDefault, poPageDynamicLiterals };
//# sourceMappingURL=po-ui-ng-templates.mjs.map
