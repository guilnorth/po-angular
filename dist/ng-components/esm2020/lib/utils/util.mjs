import { poLocales, poLocaleDefault } from '../services/po-language/po-language.constant';
/**
 * @deprecated
 * Utilize o método `getShortBrowserLanguage`.
 *
 * @description
 * Retorna idioma do browser ou o idioma padrão.
 */
export function browserLanguage() {
    return getShortBrowserLanguage();
}
/**
 * Converte e formata os bytes em formato mais legível para o usuário.
 *
 * Por exemplo:
 * - 31457280 em 30 MB.
 * - 21474836480 em 20 GB.
 * - 12.5666666 em 12.57 Bytes (duas casas decimais).
 *
 * @param bytes {number} Valor em bytes
 * @param decimals {number} Quantidade de casas decimais que terá após a conversão.
 */
export function formatBytes(bytes, decimals = 2) {
    if (!bytes) {
        return undefined;
    }
    const multiplier = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const result = Math.floor(Math.log(bytes) / Math.log(multiplier));
    decimals = decimals < 0 ? 0 : decimals;
    return `${parseFloat((bytes / Math.pow(multiplier, result)).toFixed(decimals))} ${sizes[result]}`;
}
/**
 * Retorna o idioma atual do navegador
 */
export function getBrowserLanguage() {
    // navigator.userLanguage is the value for IE10
    const language = navigator.language || navigator['userLanguage'];
    const shortLanguage = getShortLanguage(language);
    return poLocales.includes(shortLanguage) ? language : poLocaleDefault;
}
/**
 * Retorna o idioma do navegador, com somente as duas primeiras letras. Por exemplo: "pt" ou "es".
 *
 * Caso o valor retornado pelo navegador não estiver dentro dos idiomas suportados pelo PO,
 * será retornado a linguagem padrão (poLocaleDefault).
 */
export function getShortBrowserLanguage() {
    return getShortLanguage(getBrowserLanguage());
}
/**
 * Retorna o idioma com somente a abreviação do idioma (duas primeiras letras).
 * Por exemplo: "pt" ou "es".
 *
 * @param language {string} linguagem.
 *
 * @returns sigla do idioma padrão {string}.
 *
 * @default pt
 */
export function getShortLanguage(language) {
    return (language || poLocaleDefault).toLowerCase().substring(0, 2);
}
export function isLanguage(value) {
    const languageRegex = new RegExp('^[a-z]{2}(-[a-z]{2})?$', 'i');
    return languageRegex.test(value);
}
/* istanbul ignore next */
export function reloadCurrentPage() {
    window.location.assign(location.href);
}
export function convertToBoolean(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return val === 'true' || val === 'on' || val === '';
    }
    if (typeof val === 'number') {
        return val === 1;
    }
    return !!val;
}
export function convertToInt(value, valueDefault) {
    const validNumber = parseInt(value, 10);
    const validDefaultValue = parseInt(valueDefault, 10);
    const defaultValue = validDefaultValue || validDefaultValue === 0 ? validDefaultValue : undefined;
    return validNumber || validNumber === 0 ? validNumber : defaultValue;
}
export function isTypeof(object, type) {
    return typeof object === type;
}
/**
 *
 * @param fn Função que será executada dentro do contexto. Podendo ser o nome da função
 * ou a referência da mesma.
 *
 * @param context Contexto do qual a função será executada.
 */
export function callFunction(fn, context, param) {
    if (isTypeof(fn, 'function')) {
        fn.call(context, param);
    }
    else {
        context[fn](param);
    }
}
export function convertIsoToDate(value, start, end) {
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
            return new Date(year, month - 1, day);
        }
    }
}
export function convertDateToISODate(date) {
    if (date) {
        const getMonth = date.getMonth() + 1;
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = getMonth < 10 ? '0' + getMonth : getMonth;
        const year = formatYear(date.getFullYear());
        return year + '-' + month + '-' + day;
    }
    else {
        return null;
    }
}
export function convertDateToISOExtended(date, time) {
    if (date) {
        const getMonth = date.getMonth() + 1;
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = getMonth < 10 ? '0' + getMonth : getMonth;
        const year = formatYear(date.getFullYear());
        const dateString = date.toString();
        if (time !== null) {
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
export function formatYear(year) {
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
// Verifica se o navegador em que está sendo usado é Internet Explorer ou Edge
export function isIEOrEdge() {
    const userAgent = window.navigator.userAgent;
    return /msie\s|trident\/|edge\//i.test(userAgent);
}
// Verifica se o navegador em que está sendo usado é Internet Explorer
export function isIE() {
    const userAgent = window.navigator.userAgent;
    return /msie\s|trident/i.test(userAgent);
}
// Verifica se o navegador em que está sendo usado é Firefox
export function isFirefox() {
    const userAgent = window.navigator.userAgent;
    return userAgent.toLowerCase().indexOf('firefox') > -1;
}
// Verifica qual o dispositivo que está sendo usado
export function isMobile() {
    const userAgent = window.navigator.userAgent;
    return userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i);
}
export function isEquals(value, comparedValue) {
    return JSON.stringify(value) === JSON.stringify(comparedValue);
}
export function isKeyCodeEnter(event) {
    return event.keyCode === 13 || event.which === 13;
}
/**
 * Caso o ano original da data seja entre 0 e 100 atribui esse valor ao ano, pois o `new Date` do javascript transforma o ano para 190X.
 *
 * @param date Data
 * @param year Ano original
 */
export function setYearFrom0To100(date, year) {
    if (year >= 0 && year < 100) {
        date.setFullYear(year);
    }
}
export function sortOptionsByProperty(options, property) {
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
/**
 * Ordena o campos baseado no valor da propriedade `order`.
 *
 * Só serão aceitos valores com números inteiros maiores do que zero para a ordenação.
 *
 * Campos sem `order` ou com valores negativos, zerados ou inválidos
 * receberão o valor default e seguirão o posicionamento dentro do
 * array.
 *
 * @param fields campo que se deseja ordenar.
 * @param defaultOrdering valor que será utilizado para manter na posição do array.
 */
export function sortFields(fields = [], defaultOrdering = -1) {
    const resultClassification = { fieldAComesFirst: -1, fieldAComesAfter: 1, keepPositions: 0 };
    const isOrderValid = (order) => isTypeof(order, 'number') && order > 0;
    const applyDefaultOrdering = (order) => (isOrderValid(order) ? order : defaultOrdering);
    return fields.sort((fieldA, fieldB) => {
        const orderA = applyDefaultOrdering(fieldA.order);
        const orderB = applyDefaultOrdering(fieldB.order);
        if (orderA === orderB) {
            return resultClassification.keepPositions;
        }
        if (orderA === defaultOrdering) {
            return resultClassification.fieldAComesAfter;
        }
        if (orderB === defaultOrdering) {
            return resultClassification.fieldAComesFirst;
        }
        return orderA - orderB;
    });
}
export function removeDuplicatedOptions(list) {
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
export function removeDuplicatedOptionsWithFieldValue(list, newValue) {
    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            continue;
        }
        if (list.findIndex(op => op[newValue] === list[i][newValue]) !== i) {
            list.splice(i, 1);
            i--;
        }
    }
}
export function removeUndefinedAndNullOptions(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].value === undefined || list[i].value === null) {
            list.splice(i, 1);
            i--;
        }
    }
}
export function removeUndefinedAndNullOptionsWithFieldValue(list, newValue) {
    for (let i = 0; i < list.length; i++) {
        if (list[i][newValue] === undefined || list[i][newValue] === null) {
            list.splice(i, 1);
            i--;
        }
    }
}
export function validValue(value) {
    return (value !== null && value !== undefined && value !== '') || value === false;
}
export function isExternalLink(url) {
    return url ? url.startsWith('http') : false;
}
export function openExternalLink(url) {
    window.open(url, '_blank');
}
export function getFormattedLink(link) {
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
export function sortValues(leftSide, rightSide, ascending = true) {
    const left = isTypeof(leftSide, 'string') ? leftSide.toLowerCase() : leftSide;
    const right = isTypeof(rightSide, 'string') ? rightSide.toLowerCase() : rightSide;
    const leftIsInvalid = left === null || left === undefined || Number.isNaN(left);
    const rightIsInvalid = right === null || right === undefined || Number.isNaN(right);
    if (ascending) {
        if (left < right || leftIsInvalid) {
            return -1;
        }
        else if (left > right || rightIsInvalid) {
            return 1;
        }
    }
    else if (ascending === false) {
        if (left < right || leftIsInvalid) {
            return 1;
        }
        else if (left > right || rightIsInvalid) {
            return -1;
        }
    }
    return 0;
}
export function validateDateRange(date, dateStart, dateEnd) {
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
export function uuid() {
    function hex4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return hex4() + hex4() + '-' + hex4() + '-' + hex4() + '-' + hex4() + '-' + hex4() + hex4() + hex4();
}
export function capitalizeFirstLetter(text) {
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
export function mapArrayByProperties(items = [], properties = []) {
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
export function mapObjectByProperties(object = {}, properties = []) {
    const getSelectedProperties = (selectedProperties, property) => ({
        ...selectedProperties,
        [property]: object[property]
    });
    return properties.reduce(getSelectedProperties, {});
}
/**
 * Retorna os valores de um objeto dentro de um array.
 *
 * > Simula o Object.values(obj), o mesmo deve ser removido assim que a versão typescrit for atualizada.
 *
 * @param object Objeto de onde será pego os valores.
 */
export function valuesFromObject(object = {}) {
    return Object.keys(object).map(property => object[property]);
}
/**
 * Converte um arquivo em base64.
 *
 * @param file arquivo que será convertido.
 */
export function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        /* istanbul ignore next */
        reader.onerror = error => reject(error);
    });
}
/**
 * Converte um número em decimal baseado na quantidade de casas decimais.
 *
 * Caso o valor seja inválido, será retornado o valor `undefined`.
 * Valores inválidos são: `false`, `NaN`, `strings` que não numéricas, `undefined` e `null`.
 *
 * @param number valor que será convertido
 * @param decimalsPlace quantidade de casas decimais
 */
export function convertNumberToDecimal(number, decimalsPlace) {
    const isValidValue = (number || number === 0) && !isNaN(number);
    const floatValue = isValidValue ? parseFloat(number) : undefined;
    try {
        return parseFloat(floatValue.toFixed(decimalsPlace));
    }
    catch {
        return floatValue;
    }
}
/**
 * Retorna uma copia do objeto sujo, sem as propriedades nulas ou indefinidas.
 * Retorna o objeto sem as propriedades que contém valores nulos ou indefinidos.
 *
 * @param dirtyObject
 */
export function clearObject(dirtyObject) {
    const cleanObject = {};
    Object.keys(dirtyObject).forEach(key => {
        if (dirtyObject[key] !== null && dirtyObject[key] !== undefined) {
            cleanObject[key] = dirtyObject[key];
        }
    });
    return cleanObject;
}
export function validateObjectType(value) {
    return isTypeof(value, 'object') && !Array.isArray(value) ? value : undefined;
}
/**
 * Retorna os elementos DOM capazes de receber foco.
 *
 * > Atualmente são considerados "focáveis" os elementos DOM `input`, `select`,
 * `textarea`, `button` e `a`.
 *
 * @param parentElement Elemento DOM pai.
 * @returns Lista dos elementos DOM filhos "focáveis".
 */
export function getFocusableElements(parentElement) {
    const focusableElements = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"]';
    return parentElement.querySelectorAll(focusableElements);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTFGOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxlQUFlO0lBQzdCLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYSxFQUFFLFFBQVEsR0FBRyxDQUFDO0lBQ3JELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFdkMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3BHLENBQUM7QUFFRDs7R0FFRztBQUNI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QUMsQ0FBQyxDQUFDO0tBQ3REO0lBQUMsTUFBTTtRQUNOLE9BQU8sVUFBVSxDQUFDO0tBQ25CO0FBQ0gsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxXQUFtQjtJQUM3QyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckMsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDL0QsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxLQUFVO0lBQzNDLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2hGLENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxhQUFzQjtJQUN6RCxNQUFNLGlCQUFpQixHQUFHLHlGQUF5RixDQUFDO0lBQ3BILE9BQU8sYUFBYSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVzLCBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWRcclxuICogVXRpbGl6ZSBvIG3DqXRvZG8gYGdldFNob3J0QnJvd3Nlckxhbmd1YWdlYC5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldG9ybmEgaWRpb21hIGRvIGJyb3dzZXIgb3UgbyBpZGlvbWEgcGFkcsOjby5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyTGFuZ3VhZ2UoKSB7XHJcbiAgcmV0dXJuIGdldFNob3J0QnJvd3Nlckxhbmd1YWdlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0ZSBlIGZvcm1hdGEgb3MgYnl0ZXMgZW0gZm9ybWF0byBtYWlzIGxlZ8OtdmVsIHBhcmEgbyB1c3XDoXJpby5cclxuICpcclxuICogUG9yIGV4ZW1wbG86XHJcbiAqIC0gMzE0NTcyODAgZW0gMzAgTUIuXHJcbiAqIC0gMjE0NzQ4MzY0ODAgZW0gMjAgR0IuXHJcbiAqIC0gMTIuNTY2NjY2NiBlbSAxMi41NyBCeXRlcyAoZHVhcyBjYXNhcyBkZWNpbWFpcykuXHJcbiAqXHJcbiAqIEBwYXJhbSBieXRlcyB7bnVtYmVyfSBWYWxvciBlbSBieXRlc1xyXG4gKiBAcGFyYW0gZGVjaW1hbHMge251bWJlcn0gUXVhbnRpZGFkZSBkZSBjYXNhcyBkZWNpbWFpcyBxdWUgdGVyw6EgYXDDs3MgYSBjb252ZXJzw6NvLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEJ5dGVzKGJ5dGVzOiBudW1iZXIsIGRlY2ltYWxzID0gMik6IHN0cmluZyB7XHJcbiAgaWYgKCFieXRlcykge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG11bHRpcGxpZXIgPSAxMDI0O1xyXG4gIGNvbnN0IHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xyXG4gIGNvbnN0IHJlc3VsdCA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2cobXVsdGlwbGllcikpO1xyXG4gIGRlY2ltYWxzID0gZGVjaW1hbHMgPCAwID8gMCA6IGRlY2ltYWxzO1xyXG5cclxuICByZXR1cm4gYCR7cGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhtdWx0aXBsaWVyLCByZXN1bHQpKS50b0ZpeGVkKGRlY2ltYWxzKSl9ICR7c2l6ZXNbcmVzdWx0XX1gO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3JuYSBvIGlkaW9tYSBhdHVhbCBkbyBuYXZlZ2Fkb3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyTGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAvLyBuYXZpZ2F0b3IudXNlckxhbmd1YWdlIGlzIHRoZSB2YWx1ZSBmb3IgSUUxMFxyXG4gIGNvbnN0IGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ107XHJcbiAgY29uc3Qgc2hvcnRMYW5ndWFnZSA9IGdldFNob3J0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG5cclxuICByZXR1cm4gcG9Mb2NhbGVzLmluY2x1ZGVzKHNob3J0TGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiBwb0xvY2FsZURlZmF1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRvcm5hIG8gaWRpb21hIGRvIG5hdmVnYWRvciwgY29tIHNvbWVudGUgYXMgZHVhcyBwcmltZWlyYXMgbGV0cmFzLiBQb3IgZXhlbXBsbzogXCJwdFwiIG91IFwiZXNcIi5cclxuICpcclxuICogQ2FzbyBvIHZhbG9yIHJldG9ybmFkbyBwZWxvIG5hdmVnYWRvciBuw6NvIGVzdGl2ZXIgZGVudHJvIGRvcyBpZGlvbWFzIHN1cG9ydGFkb3MgcGVsbyBQTyxcclxuICogc2Vyw6EgcmV0b3JuYWRvIGEgbGluZ3VhZ2VtIHBhZHLDo28gKHBvTG9jYWxlRGVmYXVsdCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hvcnRCcm93c2VyTGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICByZXR1cm4gZ2V0U2hvcnRMYW5ndWFnZShnZXRCcm93c2VyTGFuZ3VhZ2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRvcm5hIG8gaWRpb21hIGNvbSBzb21lbnRlIGEgYWJyZXZpYcOnw6NvIGRvIGlkaW9tYSAoZHVhcyBwcmltZWlyYXMgbGV0cmFzKS5cclxuICogUG9yIGV4ZW1wbG86IFwicHRcIiBvdSBcImVzXCIuXHJcbiAqXHJcbiAqIEBwYXJhbSBsYW5ndWFnZSB7c3RyaW5nfSBsaW5ndWFnZW0uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHNpZ2xhIGRvIGlkaW9tYSBwYWRyw6NvIHtzdHJpbmd9LlxyXG4gKlxyXG4gKiBAZGVmYXVsdCBwdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3J0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIChsYW5ndWFnZSB8fCBwb0xvY2FsZURlZmF1bHQpLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDAsIDIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5ndWFnZSh2YWx1ZSkge1xyXG4gIGNvbnN0IGxhbmd1YWdlUmVnZXggPSBuZXcgUmVnRXhwKCdeW2Etel17Mn0oLVthLXpdezJ9KT8kJywgJ2knKTtcclxuXHJcbiAgcmV0dXJuIGxhbmd1YWdlUmVnZXgudGVzdCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWxvYWRDdXJyZW50UGFnZSgpIHtcclxuICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLmhyZWYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQm9vbGVhbih2YWw6IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG4gICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gJ3RydWUnIHx8IHZhbCA9PT0gJ29uJyB8fCB2YWwgPT09ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICByZXR1cm4gdmFsID09PSAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICEhdmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvSW50KHZhbHVlOiBhbnksIHZhbHVlRGVmYXVsdD86IGFueSk6IG51bWJlciB7XHJcbiAgY29uc3QgdmFsaWROdW1iZXIgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gIGNvbnN0IHZhbGlkRGVmYXVsdFZhbHVlID0gcGFyc2VJbnQodmFsdWVEZWZhdWx0LCAxMCk7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gdmFsaWREZWZhdWx0VmFsdWUgfHwgdmFsaWREZWZhdWx0VmFsdWUgPT09IDAgPyB2YWxpZERlZmF1bHRWYWx1ZSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgcmV0dXJuIHZhbGlkTnVtYmVyIHx8IHZhbGlkTnVtYmVyID09PSAwID8gdmFsaWROdW1iZXIgOiBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVvZihvYmplY3Q6IGFueSwgdHlwZTogYW55KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09IHR5cGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gZm4gRnVuw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBkZW50cm8gZG8gY29udGV4dG8uIFBvZGVuZG8gc2VyIG8gbm9tZSBkYSBmdW7Dp8Ojb1xyXG4gKiBvdSBhIHJlZmVyw6puY2lhIGRhIG1lc21hLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udGV4dCBDb250ZXh0byBkbyBxdWFsIGEgZnVuw6fDo28gc2Vyw6EgZXhlY3V0YWRhLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihmbjogYW55LCBjb250ZXh0OiBhbnksIHBhcmFtPyk6IHZvaWQge1xyXG4gIGlmIChpc1R5cGVvZihmbiwgJ2Z1bmN0aW9uJykpIHtcclxuICAgIGZuLmNhbGwoY29udGV4dCwgcGFyYW0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250ZXh0W2ZuXShwYXJhbSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydElzb1RvRGF0ZSh2YWx1ZTogc3RyaW5nLCBzdGFydDogYm9vbGVhbiwgZW5kOiBib29sZWFuKSB7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXkgPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoOCwgMTApLCAxMCk7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZyg1LCA3KSwgMTApO1xyXG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZygwLCA0KSwgMTApO1xyXG5cclxuICAgIGlmIChzdGFydCkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDApO1xyXG5cclxuICAgICAgc2V0WWVhckZyb20wVG8xMDAoZGF0ZSwgeWVhcik7XHJcblxyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoZW5kKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMjMsIDU5LCA1OSk7XHJcblxyXG4gICAgICBzZXRZZWFyRnJvbTBUbzEwMChkYXRlLCB5ZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZVRvSVNPRGF0ZShkYXRlOiBEYXRlKSB7XHJcbiAgaWYgKGRhdGUpIHtcclxuICAgIGNvbnN0IGdldE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBkYXRlLmdldERhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgbW9udGggPSBnZXRNb250aCA8IDEwID8gJzAnICsgZ2V0TW9udGggOiBnZXRNb250aDtcclxuICAgIGNvbnN0IHllYXIgPSBmb3JtYXRZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVUb0lTT0V4dGVuZGVkKGRhdGU6IERhdGUsIHRpbWU/OiBzdHJpbmcpIHtcclxuICBpZiAoZGF0ZSkge1xyXG4gICAgY29uc3QgZ2V0TW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0RGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBtb250aCA9IGdldE1vbnRoIDwgMTAgPyAnMCcgKyBnZXRNb250aCA6IGdldE1vbnRoO1xyXG4gICAgY29uc3QgeWVhciA9IGZvcm1hdFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b1N0cmluZygpO1xyXG5cclxuICAgIGlmICh0aW1lICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkgKyB0aW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB5ZWFyICtcclxuICAgICAgICAnLScgK1xyXG4gICAgICAgIG1vbnRoICtcclxuICAgICAgICAnLScgK1xyXG4gICAgICAgIGRheSArXHJcbiAgICAgICAgJ1QnICtcclxuICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygxNiwgMjQpICtcclxuICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygyOCwgMzEpICtcclxuICAgICAgICAnOicgK1xyXG4gICAgICAgIGRhdGVTdHJpbmcuc3Vic3RyaW5nKDMxLCAzMylcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtYSBvIGFubyBlbSB1bWEgc3RyaW5nIG5vIGZvcm1hdG8geXl5eSBlIGNhc28gbyBhbm8gc2VqYSBtZW5vciBxdWUgMTAwMCBwcmVlbmNoZSBjb20gemVyb3MgYSBlc3F1ZXJkYS5cclxuICpcclxuICogQHBhcmFtIHllYXIgQW5vXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICBpZiAoeWVhciA+PSAxMDAwKSB7XHJcbiAgICByZXR1cm4geWVhci50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHllYXIgPiA5OSAmJiB5ZWFyIDwgMTAwMCkge1xyXG4gICAgcmV0dXJuIGAwJHt5ZWFyfWA7XHJcbiAgfVxyXG5cclxuICBpZiAoeWVhciA+IDkgJiYgeWVhciA8IDEwMCkge1xyXG4gICAgcmV0dXJuIGAwMCR7eWVhcn1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKHllYXIgPj0gMCAmJiB5ZWFyIDwgMTApIHtcclxuICAgIHJldHVybiBgMDAwJHt5ZWFyfWA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBWZXJpZmljYSBzZSBvIG5hdmVnYWRvciBlbSBxdWUgZXN0w6Egc2VuZG8gdXNhZG8gw6kgSW50ZXJuZXQgRXhwbG9yZXIgb3UgRWRnZVxyXG5leHBvcnQgZnVuY3Rpb24gaXNJRU9yRWRnZSgpIHtcclxuICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHJcbiAgcmV0dXJuIC9tc2llXFxzfHRyaWRlbnRcXC98ZWRnZVxcLy9pLnRlc3QodXNlckFnZW50KTtcclxufVxyXG5cclxuLy8gVmVyaWZpY2Egc2UgbyBuYXZlZ2Fkb3IgZW0gcXVlIGVzdMOhIHNlbmRvIHVzYWRvIMOpIEludGVybmV0IEV4cGxvcmVyXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKCkge1xyXG4gIGNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICByZXR1cm4gL21zaWVcXHN8dHJpZGVudC9pLnRlc3QodXNlckFnZW50KTtcclxufVxyXG5cclxuLy8gVmVyaWZpY2Egc2UgbyBuYXZlZ2Fkb3IgZW0gcXVlIGVzdMOhIHNlbmRvIHVzYWRvIMOpIEZpcmVmb3hcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlyZWZveCgpIHtcclxuICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHJcbiAgcmV0dXJuIHVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xyXG59XHJcblxyXG4vLyBWZXJpZmljYSBxdWFsIG8gZGlzcG9zaXRpdm8gcXVlIGVzdMOhIHNlbmRvIHVzYWRvXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpIHtcclxuICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHJcbiAgcmV0dXJuIHVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8V2luZG93cyBQaG9uZS9pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWxzKHZhbHVlLCBjb21wYXJlZFZhbHVlKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29tcGFyZWRWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tleUNvZGVFbnRlcihldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LndoaWNoID09PSAxMztcclxufVxyXG5cclxuLyoqXHJcbiAqIENhc28gbyBhbm8gb3JpZ2luYWwgZGEgZGF0YSBzZWphIGVudHJlIDAgZSAxMDAgYXRyaWJ1aSBlc3NlIHZhbG9yIGFvIGFubywgcG9pcyBvIGBuZXcgRGF0ZWAgZG8gamF2YXNjcmlwdCB0cmFuc2Zvcm1hIG8gYW5vIHBhcmEgMTkwWC5cclxuICpcclxuICogQHBhcmFtIGRhdGUgRGF0YVxyXG4gKiBAcGFyYW0geWVhciBBbm8gb3JpZ2luYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRZZWFyRnJvbTBUbzEwMChkYXRlOiBEYXRlLCB5ZWFyOiBudW1iZXIpIHtcclxuICBpZiAoeWVhciA+PSAwICYmIHllYXIgPCAxMDApIHtcclxuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydE9wdGlvbnNCeVByb3BlcnR5KG9wdGlvbnM6IEFycmF5PGFueT4sIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICBvcHRpb25zLnNvcnQoKG9wdGlvbkEsIG9wdGlvbkIpID0+IHtcclxuICAgIG9wdGlvbkEgPSBvcHRpb25BW3Byb3BlcnR5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBvcHRpb25CID0gb3B0aW9uQltwcm9wZXJ0eV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChvcHRpb25BIDwgb3B0aW9uQikge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uQSA+IG9wdGlvbkIpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9yZGVuYSBvIGNhbXBvcyBiYXNlYWRvIG5vIHZhbG9yIGRhIHByb3ByaWVkYWRlIGBvcmRlcmAuXHJcbiAqXHJcbiAqIFPDsyBzZXLDo28gYWNlaXRvcyB2YWxvcmVzIGNvbSBuw7ptZXJvcyBpbnRlaXJvcyBtYWlvcmVzIGRvIHF1ZSB6ZXJvIHBhcmEgYSBvcmRlbmHDp8Ojby5cclxuICpcclxuICogQ2FtcG9zIHNlbSBgb3JkZXJgIG91IGNvbSB2YWxvcmVzIG5lZ2F0aXZvcywgemVyYWRvcyBvdSBpbnbDoWxpZG9zXHJcbiAqIHJlY2ViZXLDo28gbyB2YWxvciBkZWZhdWx0IGUgc2VndWlyw6NvIG8gcG9zaWNpb25hbWVudG8gZGVudHJvIGRvXHJcbiAqIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0gZmllbGRzIGNhbXBvIHF1ZSBzZSBkZXNlamEgb3JkZW5hci5cclxuICogQHBhcmFtIGRlZmF1bHRPcmRlcmluZyB2YWxvciBxdWUgc2Vyw6EgdXRpbGl6YWRvIHBhcmEgbWFudGVyIG5hIHBvc2nDp8OjbyBkbyBhcnJheS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0RmllbGRzKGZpZWxkcyA9IFtdLCBkZWZhdWx0T3JkZXJpbmcgPSAtMSkge1xyXG4gIGNvbnN0IHJlc3VsdENsYXNzaWZpY2F0aW9uID0geyBmaWVsZEFDb21lc0ZpcnN0OiAtMSwgZmllbGRBQ29tZXNBZnRlcjogMSwga2VlcFBvc2l0aW9uczogMCB9O1xyXG5cclxuICBjb25zdCBpc09yZGVyVmFsaWQgPSAob3JkZXI6IG51bWJlcikgPT4gaXNUeXBlb2Yob3JkZXIsICdudW1iZXInKSAmJiBvcmRlciA+IDA7XHJcbiAgY29uc3QgYXBwbHlEZWZhdWx0T3JkZXJpbmcgPSAob3JkZXI6IG51bWJlcikgPT4gKGlzT3JkZXJWYWxpZChvcmRlcikgPyBvcmRlciA6IGRlZmF1bHRPcmRlcmluZyk7XHJcblxyXG4gIHJldHVybiBmaWVsZHMuc29ydCgoZmllbGRBLCBmaWVsZEIpID0+IHtcclxuICAgIGNvbnN0IG9yZGVyQSA9IGFwcGx5RGVmYXVsdE9yZGVyaW5nKGZpZWxkQS5vcmRlcik7XHJcbiAgICBjb25zdCBvcmRlckIgPSBhcHBseURlZmF1bHRPcmRlcmluZyhmaWVsZEIub3JkZXIpO1xyXG5cclxuICAgIGlmIChvcmRlckEgPT09IG9yZGVyQikge1xyXG4gICAgICByZXR1cm4gcmVzdWx0Q2xhc3NpZmljYXRpb24ua2VlcFBvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3JkZXJBID09PSBkZWZhdWx0T3JkZXJpbmcpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdENsYXNzaWZpY2F0aW9uLmZpZWxkQUNvbWVzQWZ0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yZGVyQiA9PT0gZGVmYXVsdE9yZGVyaW5nKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRDbGFzc2lmaWNhdGlvbi5maWVsZEFDb21lc0ZpcnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcmRlckEgLSBvcmRlckI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVkT3B0aW9ucyhsaXN0OiBBcnJheTxhbnk+KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGlzdC5maW5kSW5kZXgob3AgPT4gb3AudmFsdWUgPT09IGxpc3RbaV0udmFsdWUpICE9PSBpKSB7XHJcbiAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlZE9wdGlvbnNXaXRoRmllbGRWYWx1ZShsaXN0OiBBcnJheTxhbnk+LCBuZXdWYWx1ZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxpc3QuZmluZEluZGV4KG9wID0+IG9wW25ld1ZhbHVlXSA9PT0gbGlzdFtpXVtuZXdWYWx1ZV0pICE9PSBpKSB7XHJcbiAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkQW5kTnVsbE9wdGlvbnMobGlzdDogQXJyYXk8YW55Pikge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxpc3RbaV0udmFsdWUgPT09IHVuZGVmaW5lZCB8fCBsaXN0W2ldLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkQW5kTnVsbE9wdGlvbnNXaXRoRmllbGRWYWx1ZShsaXN0OiBBcnJheTxhbnk+LCBuZXdWYWx1ZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxpc3RbaV1bbmV3VmFsdWVdID09PSB1bmRlZmluZWQgfHwgbGlzdFtpXVtuZXdWYWx1ZV0gPT09IG51bGwpIHtcclxuICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGktLTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZFZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICByZXR1cm4gKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09ICcnKSB8fCB2YWx1ZSA9PT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4dGVybmFsTGluayh1cmwpOiBib29sZWFuIHtcclxuICByZXR1cm4gdXJsID8gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA6IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkV4dGVybmFsTGluayh1cmwpOiB2b2lkIHtcclxuICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZExpbmsobGluazogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0dGVkTGluayA9ICcnO1xyXG4gIC8vIFJldGlyYSB0b2RvcyBvcyBwb250b3Mgbm8gY29tZcOnbyBkYSBVUkwuXHJcbiAgaWYgKGxpbmspIHtcclxuICAgIGZvcm1hdHRlZExpbmsgPSBsaW5rLnJlcGxhY2UoL14oXFwuKSsvZywgJycpO1xyXG4gIH1cclxuICAvLyBWZXJpZmljYSBzZSBmb2kgdXRpbGl6YWRvIHVtYSByb3RhIHF1ZSBuw6NvIGNvbWVjZSBjb20gYmFycmEuXHJcbiAgaWYgKCFmb3JtYXR0ZWRMaW5rLnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgZm9ybWF0dGVkTGluayA9ICcvJy5jb25jYXQoZm9ybWF0dGVkTGluayk7XHJcbiAgfVxyXG4gIHJldHVybiBmb3JtYXR0ZWRMaW5rO1xyXG59XHJcblxyXG4vKipcclxuICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIG9yZGVuYXIgZG9pcyB2YWxvcmVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGVmdFNpZGUgUHJpbWVpcm8gdmFsb3IgYSBzZXIgY29tcGFyYWRvLlxyXG4gKiBAcGFyYW0gcmlnaHRTaWRlIFNlZ3VuZG8gdmFsb3IgYSBzZXIgY29tcGFyYWRvLlxyXG4gKiBAcGFyYW0gYXNjZW5kaW5nIERldGVybWluYSBzZSBzZXLDoSBlbSBvcmRlbSBhc2NlbmRlbnRlIG91IGRlc2NlbmRlbnRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRWYWx1ZXMobGVmdFNpZGU6IHN0cmluZyB8IERhdGUsIHJpZ2h0U2lkZTogc3RyaW5nIHwgRGF0ZSwgYXNjZW5kaW5nOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XHJcbiAgY29uc3QgbGVmdCA9IGlzVHlwZW9mKGxlZnRTaWRlLCAnc3RyaW5nJykgPyAobGVmdFNpZGUgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpIDogbGVmdFNpZGU7XHJcbiAgY29uc3QgcmlnaHQgPSBpc1R5cGVvZihyaWdodFNpZGUsICdzdHJpbmcnKSA/IChyaWdodFNpZGUgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpIDogcmlnaHRTaWRlO1xyXG5cclxuICBjb25zdCBsZWZ0SXNJbnZhbGlkID0gbGVmdCA9PT0gbnVsbCB8fCBsZWZ0ID09PSB1bmRlZmluZWQgfHwgTnVtYmVyLmlzTmFOKGxlZnQpO1xyXG4gIGNvbnN0IHJpZ2h0SXNJbnZhbGlkID0gcmlnaHQgPT09IG51bGwgfHwgcmlnaHQgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIuaXNOYU4ocmlnaHQpO1xyXG5cclxuICBpZiAoYXNjZW5kaW5nKSB7XHJcbiAgICBpZiAobGVmdCA8IHJpZ2h0IHx8IGxlZnRJc0ludmFsaWQpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIGlmIChsZWZ0ID4gcmlnaHQgfHwgcmlnaHRJc0ludmFsaWQpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChhc2NlbmRpbmcgPT09IGZhbHNlKSB7XHJcbiAgICBpZiAobGVmdCA8IHJpZ2h0IHx8IGxlZnRJc0ludmFsaWQpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2UgaWYgKGxlZnQgPiByaWdodCB8fCByaWdodElzSW52YWxpZCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVEYXRlUmFuZ2UoZGF0ZTogRGF0ZSwgZGF0ZVN0YXJ0OiBEYXRlLCBkYXRlRW5kOiBEYXRlKSB7XHJcbiAgaWYgKGRhdGVTdGFydCAmJiBkYXRlRW5kKSB7XHJcbiAgICByZXR1cm4gZGF0ZSA+PSBkYXRlU3RhcnQgJiYgZGF0ZSA8PSBkYXRlRW5kO1xyXG4gIH0gZWxzZSBpZiAoZGF0ZVN0YXJ0ICYmICFkYXRlRW5kKSB7XHJcbiAgICByZXR1cm4gZGF0ZSA+PSBkYXRlU3RhcnQ7XHJcbiAgfSBlbHNlIGlmICghZGF0ZVN0YXJ0ICYmIGRhdGVFbmQpIHtcclxuICAgIHJldHVybiBkYXRlIDw9IGRhdGVFbmQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHV1aWQoKSB7XHJcbiAgZnVuY3Rpb24gaGV4NCgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGV4NCgpICsgaGV4NCgpICsgJy0nICsgaGV4NCgpICsgJy0nICsgaGV4NCgpICsgJy0nICsgaGV4NCgpICsgJy0nICsgaGV4NCgpICsgaGV4NCgpICsgaGV4NCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGAke3RleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt0ZXh0LnNsaWNlKDEpfWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXBlaWEgdW0gbm92byBhcnJheSBhcGVuYXMgY29tIGFzIHByb3ByaWVkYWRlcyBkZWZpbmlkYXMgcGVsbyBkZXNlbnZvbHZlZG9yIGJhc2VhZG8gZW0gdW0gYXJyYXkgZGVcclxuICogb3JpZ2VtLlxyXG4gKlxyXG4gKiBFeGVtcGxvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgcGVvcGxlID0gW1xyXG4gKiAgeyBpZDogMSwgbmFtZTogJ0Z1bGFubycsIGJpcnRoZGF0ZTogJzE5ODAtMTEtMDEnLCBnZW5yZTogJ01hbGUnLCBjaXR5OiAnU8OjbyBQYXVsbycsIGRlcGVuZGVudHM6IDIgfSxcclxuICogIHsgaWQ6IDIsIG5hbWU6ICdCZWx0cmFubycsIGJpcnRoZGF0ZTogJzE5OTctMDEtMjEnLCBnZW5yZTogJ0ZlbWFsZScsIGNpdHk6ICdKb2ludmlsbGUnLCBkZXBlbmRlbnRzOiAwIH0sXHJcbiAqICB7IGlkOiAzLCBuYW1lOiAnU2ljbGFubycsIGJpcnRoZGF0ZTogJzE5OTUtMDctMTUnLCBnZW5yZTogJ01hbGUnLCBjaXR5OiAnSm9pbnZpbGxlJywgZGVwZW5kZW50czogMCB9XHJcbiAqIF07XHJcbiAqXHJcbiAqIGNvbnN0IHByb3BlcnRpZXMgPSBbJ2lkJywgJ25hbWUnXTtcclxuICpcclxuICogY29uc3QgaWRBbmROYW1lID0gbWFwQXJyYXlCeVByb3BlcnRpZXMocGVvcGxlLCBwcm9wZXJ0aWVzKTtcclxuICpcclxuICogY29uc29sZS5sb2coaWRBbmROYW1lKTsgLy8gW3sgaWQ6IDEsIG5hbWU6ICdGdWxhbm8nIH0sIHsgaWQ6IDIsIG5hbWU6ICdCZWx0cmFubycgfSwgeyBpZDogMywgbmFtZTogJ1NpY2xhbm8nIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBVbSBvdXRybyB1c28gcGFyYSBvIG3DqXRvZG8gw6kgXCJwYXJlYXJcIiB0b2RvcyBvcyBvYmpldG9zIGRvIGFycmF5IGNvbSBhcyBtZXNtYXMgcHJvcHJpZWRhZGVzLlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgY3VzdG9tZXJzID0gW1xyXG4gKiAgeyBpZDogMSwgbmFtZTogJ0Z1bGFubycsIGNpdHk6ICdTw6NvIFBhdWxvJywgZGVwZW5kZW50czogMiB9LCAvLyBzZW0gZ2VucmVcclxuICogIHsgaWQ6IDIsIG5hbWU6ICdCZWx0cmFubycsIGdlbnJlOiAnRmVtYWxlJywgY2l0eTogJ0pvaW52aWxsZScgfSwgLy8gc2VtIGRlcGVuZGVudHNcclxuICogIHsgaWQ6IDMsIG5hbWU6ICdTaWNsYW5vJywgZ2VucmU6ICdNYWxlJywgY2l0eTogJ0pvaW52aWxsZScsIGRlcGVuZGVudHM6IDAgfVxyXG4gKiBdO1xyXG4gKiBjb25zdCBwcm9wZXJ0aWVzID0gWydpZCcsICduYW1lJywgJ2NpdHknLCAnZ2VucmUnLCAnZGVwZW5kZW50cyddO1xyXG4gKlxyXG4gKiBjb25zdCBwYXR0ZXJuID0gbWFwQXJyYXlCeVByb3BlcnRpZXMoY3VzdG9tZXJzLCBwcm9wZXJ0aWVzKTtcclxuICogY29uc29sZS5sb2cocGF0dGVybik7XHJcbiAqXHJcbiAqIC8vIFtcclxuICogLy8gICB7IGlkOiAxLCBuYW1lOiAnRnVsYW5vJywgY2l0eTogJ1PDo28gUGF1bG8nLCBnZW5yZTogdW5kZWZpbmVkLCBkZXBlbmRlbnRzOiAyIH0sXHJcbiAqIC8vICAgeyBpZDogMiwgbmFtZTogJ0JlbHRyYW5vJywgY2l0eTogJ0pvaW52aWxsZScsIGdlbnJlOiAnRmVtYWxlJywgZGVwZW5kZW50czogdW5kZWZpbmVkIH0sXHJcbiAqIC8vICAgeyBpZDogMywgbmFtZTogJ1NpY2xhbm8nLCBjaXR5OiAnSm9pbnZpbGxlJywgZ2VucmU6ICdNYWxlJywgZGVwZW5kZW50czogMCB9XHJcbiAqIC8vIF1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBpdGVtcyB7QXJyYXk8YW55Pn0gQXJyYXkgZGUgaXRlbXMgb3JpZ2luYWwuXHJcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIHtBcnJheTxzdHJpbmc+fSBBcnJheSBkZSBzdHJpbmcgY29tIGEgbGlzdGEgZGUgcHJvcHJpZWRhZGVzIHF1ZSBkZXZlbSBzZXIgcmV0b3JuYWRhcy5cclxuICpcclxuICogQHJldHVybnMgQXJyYXk8YW55PlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcEFycmF5QnlQcm9wZXJ0aWVzKGl0ZW1zOiBBcnJheTxhbnk+ID0gW10sIHByb3BlcnRpZXM6IEFycmF5PHN0cmluZz4gPSBbXSk6IEFycmF5PGFueT4ge1xyXG4gIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiBtYXBPYmplY3RCeVByb3BlcnRpZXMoaXRlbSwgcHJvcGVydGllcykpO1xyXG59XHJcblxyXG4vKipcclxuICogTWFwZWlhIHVtIG5vdm8gb2JqZXRvIGFwZW5hcyBjb20gYXMgcHJvcHJpZWRhZGVzIGRlZmluaWRhcyBwZWxvIGRlc2Vudm9sdmVkb3IuXHJcbiAqXHJcbiAqIEV4ZW1wbG86XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBwZXJzb24gPSB7IGlkOiAxLCBuYW1lOiAnRnVsYW5vJywgYmlydGhkYXRlOiAnMTk4MC0xMS0wMScsIGdlbnJlOiAnTWFsZScsIGNpdHk6ICdTw6NvIFBhdWxvJywgZGVwZW5kZW50czogMiB9O1xyXG4gKlxyXG4gKiBjb25zdCBwcm9wZXJ0aWVzID0gWydpZCcsICduYW1lJ107XHJcbiAqXHJcbiAqIGNvbnN0IGlkQW5kTmFtZSA9IG1hcE9iamVjdEJ5UHJvcGVydGllcyhwZXJzb24sIHByb3BlcnRpZXMpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhpZEFuZE5hbWUpOyAvLyB7IGlkOiAxLCBuYW1lOiAnRnVsYW5vJyB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqZWN0IHtBcnJheTxhbnk+fSBBcnJheSBkZSBpdGVtcyBvcmlnaW5hbC5cclxuICogQHBhcmFtIHByb3BlcnRpZXMge0FycmF5PHN0cmluZz59IEFycmF5IGRlIHN0cmluZyBjb20gYSBsaXN0YSBkZSBwcm9wcmllZGFkZXMgcXVlIGRldmVtIHNlciByZXRvcm5hZGFzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBBcnJheTxhbnk+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFwT2JqZWN0QnlQcm9wZXJ0aWVzKG9iamVjdDogYW55ID0ge30sIHByb3BlcnRpZXM6IEFycmF5PHN0cmluZz4gPSBbXSkge1xyXG4gIGNvbnN0IGdldFNlbGVjdGVkUHJvcGVydGllcyA9IChzZWxlY3RlZFByb3BlcnRpZXMsIHByb3BlcnR5KSA9PiAoe1xyXG4gICAgLi4uc2VsZWN0ZWRQcm9wZXJ0aWVzLFxyXG4gICAgW3Byb3BlcnR5XTogb2JqZWN0W3Byb3BlcnR5XVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcHJvcGVydGllcy5yZWR1Y2UoZ2V0U2VsZWN0ZWRQcm9wZXJ0aWVzLCB7fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRvcm5hIG9zIHZhbG9yZXMgZGUgdW0gb2JqZXRvIGRlbnRybyBkZSB1bSBhcnJheS5cclxuICpcclxuICogPiBTaW11bGEgbyBPYmplY3QudmFsdWVzKG9iaiksIG8gbWVzbW8gZGV2ZSBzZXIgcmVtb3ZpZG8gYXNzaW0gcXVlIGEgdmVyc8OjbyB0eXBlc2NyaXQgZm9yIGF0dWFsaXphZGEuXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmplY3QgT2JqZXRvIGRlIG9uZGUgc2Vyw6EgcGVnbyBvcyB2YWxvcmVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0Zyb21PYmplY3Qob2JqZWN0OiBhbnkgPSB7fSk6IEFycmF5PGFueT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChwcm9wZXJ0eSA9PiBvYmplY3RbcHJvcGVydHldKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRlIHVtIGFycXVpdm8gZW0gYmFzZTY0LlxyXG4gKlxyXG4gKiBAcGFyYW0gZmlsZSBhcnF1aXZvIHF1ZSBzZXLDoSBjb252ZXJ0aWRvLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJbWFnZVRvQmFzZTY0KGZpbGU6IEZpbGUpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydGUgdW0gbsO6bWVybyBlbSBkZWNpbWFsIGJhc2VhZG8gbmEgcXVhbnRpZGFkZSBkZSBjYXNhcyBkZWNpbWFpcy5cclxuICpcclxuICogQ2FzbyBvIHZhbG9yIHNlamEgaW52w6FsaWRvLCBzZXLDoSByZXRvcm5hZG8gbyB2YWxvciBgdW5kZWZpbmVkYC5cclxuICogVmFsb3JlcyBpbnbDoWxpZG9zIHPDo286IGBmYWxzZWAsIGBOYU5gLCBgc3RyaW5nc2AgcXVlIG7Do28gbnVtw6lyaWNhcywgYHVuZGVmaW5lZGAgZSBgbnVsbGAuXHJcbiAqXHJcbiAqIEBwYXJhbSBudW1iZXIgdmFsb3IgcXVlIHNlcsOhIGNvbnZlcnRpZG9cclxuICogQHBhcmFtIGRlY2ltYWxzUGxhY2UgcXVhbnRpZGFkZSBkZSBjYXNhcyBkZWNpbWFpc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnROdW1iZXJUb0RlY2ltYWwobnVtYmVyOiBhbnksIGRlY2ltYWxzUGxhY2U6IG51bWJlcik6IG51bWJlciB7XHJcbiAgY29uc3QgaXNWYWxpZFZhbHVlID0gKG51bWJlciB8fCBudW1iZXIgPT09IDApICYmICFpc05hTihudW1iZXIpO1xyXG5cclxuICBjb25zdCBmbG9hdFZhbHVlID0gaXNWYWxpZFZhbHVlID8gcGFyc2VGbG9hdChudW1iZXIpIDogdW5kZWZpbmVkO1xyXG5cclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZmxvYXRWYWx1ZS50b0ZpeGVkKGRlY2ltYWxzUGxhY2UpKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmbG9hdFZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG9ybmEgdW1hIGNvcGlhIGRvIG9iamV0byBzdWpvLCBzZW0gYXMgcHJvcHJpZWRhZGVzIG51bGFzIG91IGluZGVmaW5pZGFzLlxyXG4gKiBSZXRvcm5hIG8gb2JqZXRvIHNlbSBhcyBwcm9wcmllZGFkZXMgcXVlIGNvbnTDqW0gdmFsb3JlcyBudWxvcyBvdSBpbmRlZmluaWRvcy5cclxuICpcclxuICogQHBhcmFtIGRpcnR5T2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPYmplY3QoZGlydHlPYmplY3Q6IG9iamVjdCk6IGFueSB7XHJcbiAgY29uc3QgY2xlYW5PYmplY3QgPSB7fTtcclxuXHJcbiAgT2JqZWN0LmtleXMoZGlydHlPYmplY3QpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmIChkaXJ0eU9iamVjdFtrZXldICE9PSBudWxsICYmIGRpcnR5T2JqZWN0W2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjbGVhbk9iamVjdFtrZXldID0gZGlydHlPYmplY3Rba2V5XTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNsZWFuT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RUeXBlKHZhbHVlOiBhbnkpIHtcclxuICByZXR1cm4gaXNUeXBlb2YodmFsdWUsICdvYmplY3QnKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG9ybmEgb3MgZWxlbWVudG9zIERPTSBjYXBhemVzIGRlIHJlY2ViZXIgZm9jby5cclxuICpcclxuICogPiBBdHVhbG1lbnRlIHPDo28gY29uc2lkZXJhZG9zIFwiZm9jw6F2ZWlzXCIgb3MgZWxlbWVudG9zIERPTSBgaW5wdXRgLCBgc2VsZWN0YCxcclxuICogYHRleHRhcmVhYCwgYGJ1dHRvbmAgZSBgYWAuXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXJlbnRFbGVtZW50IEVsZW1lbnRvIERPTSBwYWkuXHJcbiAqIEByZXR1cm5zIExpc3RhIGRvcyBlbGVtZW50b3MgRE9NIGZpbGhvcyBcImZvY8OhdmVpc1wiLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKHBhcmVudEVsZW1lbnQ6IEVsZW1lbnQpOiBOb2RlTGlzdE9mPEVsZW1lbnQ+IHtcclxuICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9ICdidXR0b246bm90KFtkaXNhYmxlZF0pLCBbaHJlZl0sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSc7XHJcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVFbGVtZW50cyk7XHJcbn1cclxuIl19