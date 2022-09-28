import { poLocales, poLocaleDefault } from '@po-ui/ng-components';
/**
 * Retorna o idioma atual do navegador
 */
export function getBrowserLanguage() {
    // navigator.userLanguage is the value for IE10
    return navigator.language || navigator['userLanguage'];
}
/**
 * Retorna o idioma do navegador, com somente as duas primeiras letras. Por exemplo: "pt" ou "es".
 *
 * Caso o valor retornado pelo navegador não estiver dentro dos idiomas suportados pelo PO,
 * será retornado a linguagem padrão (poLocaleDefault).
 */
export function getShortBrowserLanguage() {
    const language = (getBrowserLanguage() || poLocaleDefault).toLowerCase().substring(0, 2);
    if (!poLocales.includes(language)) {
        return poLocaleDefault;
    }
    return language;
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
            const milliseconds = Date.parse(value);
            const timezone = new Date().getTimezoneOffset() * 60000;
            return new Date(milliseconds + timezone);
        }
    }
}
export function convertDateToISOExtended(date, time) {
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
export function isEquals(value, comparedValue) {
    return JSON.stringify(value) === JSON.stringify(comparedValue);
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
export function removeUndefinedAndNullOptions(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].value === undefined || list[i].value === null) {
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
 * adiciona 0 no tempo informado, caso menor q 10
 *
 * @param time
 */
export function addZero(time) {
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
export function removeKeysProperties(keys, newItemValue) {
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
export function removeDuplicateItems(item, item2, key) {
    for (let i = 0, len = item.length; i < len; i++) {
        for (let j = 0, len2 = item2.length; j < len2; j++) {
            if (item[i][key] === item2[j][key]) {
                item2.splice(j, 1);
                len2 = item2.length;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL3V0aWxzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRTs7R0FFRztBQUNILE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsK0NBQStDO0lBQy9DLE9BQU8sU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLHVCQUF1QjtJQUNyQyxNQUFNLFFBQVEsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV6RixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNqQyxPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBUTtJQUN2QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLE9BQU8sR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUM7S0FDckQ7SUFFRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7S0FDbEI7SUFFRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFV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LENBQUMsQ0FBQztnQkFDbkIsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDckI7U0FDRjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVzLCBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG4vKipcclxuICogUmV0b3JuYSBvIGlkaW9tYSBhdHVhbCBkbyBuYXZlZ2Fkb3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyTGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAvLyBuYXZpZ2F0b3IudXNlckxhbmd1YWdlIGlzIHRoZSB2YWx1ZSBmb3IgSUUxMFxyXG4gIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG9ybmEgbyBpZGlvbWEgZG8gbmF2ZWdhZG9yLCBjb20gc29tZW50ZSBhcyBkdWFzIHByaW1laXJhcyBsZXRyYXMuIFBvciBleGVtcGxvOiBcInB0XCIgb3UgXCJlc1wiLlxyXG4gKlxyXG4gKiBDYXNvIG8gdmFsb3IgcmV0b3JuYWRvIHBlbG8gbmF2ZWdhZG9yIG7Do28gZXN0aXZlciBkZW50cm8gZG9zIGlkaW9tYXMgc3Vwb3J0YWRvcyBwZWxvIFBPLFxyXG4gKiBzZXLDoSByZXRvcm5hZG8gYSBsaW5ndWFnZW0gcGFkcsOjbyAocG9Mb2NhbGVEZWZhdWx0KS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG9ydEJyb3dzZXJMYW5ndWFnZSgpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGxhbmd1YWdlID0gKGdldEJyb3dzZXJMYW5ndWFnZSgpIHx8IHBvTG9jYWxlRGVmYXVsdCkudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMCwgMik7XHJcblxyXG4gIGlmICghcG9Mb2NhbGVzLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xyXG4gICAgcmV0dXJuIHBvTG9jYWxlRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHJldHVybiBsYW5ndWFnZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0Jvb2xlYW4odmFsOiBhbnkpOiBib29sZWFuIHtcclxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgIHJldHVybiB2YWwgPT09ICd0cnVlJyB8fCB2YWwgPT09ICdvbicgfHwgdmFsID09PSAnJztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gMTtcclxuICB9XHJcblxyXG4gIHJldHVybiAhIXZhbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0ludCh2YWx1ZTogYW55LCB2YWx1ZURlZmF1bHQ/OiBhbnkpOiBudW1iZXIge1xyXG4gIGNvbnN0IHZhbGlkTnVtYmVyID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICBjb25zdCB2YWxpZERlZmF1bHRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlRGVmYXVsdCwgMTApO1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHZhbGlkRGVmYXVsdFZhbHVlIHx8IHZhbGlkRGVmYXVsdFZhbHVlID09PSAwID8gdmFsaWREZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiB2YWxpZE51bWJlciB8fCB2YWxpZE51bWJlciA9PT0gMCA/IHZhbGlkTnVtYmVyIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlb2Yob2JqZWN0OiBhbnksIHR5cGU6IGFueSkge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSB0eXBlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGZuIEZ1bsOnw6NvIHF1ZSBzZXLDoSBleGVjdXRhZGEgZGVudHJvIGRvIGNvbnRleHRvLiBQb2RlbmRvIHNlciBvIG5vbWUgZGEgZnVuw6fDo29cclxuICogb3UgYSByZWZlcsOqbmNpYSBkYSBtZXNtYS5cclxuICpcclxuICogQHBhcmFtIGNvbnRleHQgQ29udGV4dG8gZG8gcXVhbCBhIGZ1bsOnw6NvIHNlcsOhIGV4ZWN1dGFkYS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsRnVuY3Rpb24oZm46IGFueSwgY29udGV4dDogYW55LCBwYXJhbT8pOiB2b2lkIHtcclxuICBpZiAoaXNUeXBlb2YoZm4sICdmdW5jdGlvbicpKSB7XHJcbiAgICBmbi5jYWxsKGNvbnRleHQsIHBhcmFtKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGV4dFtmbl0ocGFyYW0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJc29Ub0RhdGUodmFsdWU6IHN0cmluZywgc3RhcnQ6IGJvb2xlYW4sIGVuZDogYm9vbGVhbikge1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgY29uc3QgZGF5ID0gcGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKDgsIDEwKSwgMTApO1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoNSwgNyksIDEwKTtcclxuICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoMCwgNCksIDEwKTtcclxuICAgIGlmIChzdGFydCkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDApO1xyXG5cclxuICAgICAgc2V0WWVhckZyb20wVG8xMDAoZGF0ZSwgeWVhcik7XHJcblxyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoZW5kKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMjMsIDU5LCA1OSk7XHJcblxyXG4gICAgICBzZXRZZWFyRnJvbTBUbzEwMChkYXRlLCB5ZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWlsbGlzZWNvbmRzID0gRGF0ZS5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRpbWV6b25lID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZShtaWxsaXNlY29uZHMgKyB0aW1lem9uZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVUb0lTT0V4dGVuZGVkKGRhdGU6IERhdGUsIHRpbWU/OiBzdHJpbmcpIHtcclxuICBpZiAoZGF0ZSkge1xyXG4gICAgY29uc3QgZ2V0TW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0RGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBtb250aCA9IGdldE1vbnRoIDwgMTAgPyAnMCcgKyBnZXRNb250aCA6IGdldE1vbnRoO1xyXG4gICAgY29uc3QgeWVhciA9IGZvcm1hdFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b1N0cmluZygpO1xyXG5cclxuICAgIGlmICh0aW1lKSB7XHJcbiAgICAgIHJldHVybiB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkgKyB0aW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB5ZWFyICtcclxuICAgICAgICAnLScgK1xyXG4gICAgICAgIG1vbnRoICtcclxuICAgICAgICAnLScgK1xyXG4gICAgICAgIGRheSArXHJcbiAgICAgICAgJ1QnICtcclxuICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygxNiwgMjQpICtcclxuICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygyOCwgMzEpICtcclxuICAgICAgICAnOicgK1xyXG4gICAgICAgIGRhdGVTdHJpbmcuc3Vic3RyaW5nKDMxLCAzMylcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtYSBvIGFubyBlbSB1bWEgc3RyaW5nIG5vIGZvcm1hdG8geXl5eSBlIGNhc28gbyBhbm8gc2VqYSBtZW5vciBxdWUgMTAwMCBwcmVlbmNoZSBjb20gemVyb3MgYSBlc3F1ZXJkYS5cclxuICpcclxuICogQHBhcmFtIHllYXIgQW5vXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICBpZiAoeWVhciA+PSAxMDAwKSB7XHJcbiAgICByZXR1cm4geWVhci50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHllYXIgPiA5OSAmJiB5ZWFyIDwgMTAwMCkge1xyXG4gICAgcmV0dXJuIGAwJHt5ZWFyfWA7XHJcbiAgfVxyXG5cclxuICBpZiAoeWVhciA+IDkgJiYgeWVhciA8IDEwMCkge1xyXG4gICAgcmV0dXJuIGAwMCR7eWVhcn1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKHllYXIgPj0gMCAmJiB5ZWFyIDwgMTApIHtcclxuICAgIHJldHVybiBgMDAwJHt5ZWFyfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbHModmFsdWUsIGNvbXBhcmVkVmFsdWUpIHtcclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShjb21wYXJlZFZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhc28gbyBhbm8gb3JpZ2luYWwgZGEgZGF0YSBzZWphIGVudHJlIDAgZSAxMDAgYXRyaWJ1aSBlc3NlIHZhbG9yIGFvIGFubywgcG9pcyBvIGBuZXcgRGF0ZWAgZG8gamF2YXNjcmlwdCB0cmFuc2Zvcm1hIG8gYW5vIHBhcmEgMTkwWC5cclxuICpcclxuICogQHBhcmFtIGRhdGUgRGF0YVxyXG4gKiBAcGFyYW0geWVhciBBbm8gb3JpZ2luYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRZZWFyRnJvbTBUbzEwMChkYXRlOiBEYXRlLCB5ZWFyOiBudW1iZXIpIHtcclxuICBpZiAoeWVhciA+PSAwICYmIHllYXIgPCAxMDApIHtcclxuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydE9wdGlvbnNCeVByb3BlcnR5KG9wdGlvbnM6IEFycmF5PGFueT4sIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICBvcHRpb25zLnNvcnQoKG9wdGlvbkEsIG9wdGlvbkIpID0+IHtcclxuICAgIG9wdGlvbkEgPSBvcHRpb25BW3Byb3BlcnR5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBvcHRpb25CID0gb3B0aW9uQltwcm9wZXJ0eV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChvcHRpb25BIDwgb3B0aW9uQikge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uQSA+IG9wdGlvbkIpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZWRPcHRpb25zKGxpc3Q6IEFycmF5PGFueT4pIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsaXN0LmZpbmRJbmRleChvcCA9PiBvcC52YWx1ZSA9PT0gbGlzdFtpXS52YWx1ZSkgIT09IGkpIHtcclxuICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGktLTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWRBbmROdWxsT3B0aW9ucyhsaXN0OiBBcnJheTxhbnk+KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobGlzdFtpXS52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGxpc3RbaV0udmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGktLTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZFZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICByZXR1cm4gKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09ICcnKSB8fCB2YWx1ZSA9PT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4dGVybmFsTGluayh1cmwpOiBib29sZWFuIHtcclxuICByZXR1cm4gdXJsID8gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA6IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkV4dGVybmFsTGluayh1cmwpOiB2b2lkIHtcclxuICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZExpbmsobGluazogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0dGVkTGluayA9ICcnO1xyXG4gIC8vIFJldGlyYSB0b2RvcyBvcyBwb250b3Mgbm8gY29tZcOnbyBkYSBVUkwuXHJcbiAgaWYgKGxpbmspIHtcclxuICAgIGZvcm1hdHRlZExpbmsgPSBsaW5rLnJlcGxhY2UoL14oXFwuKSsvZywgJycpO1xyXG4gIH1cclxuICAvLyBWZXJpZmljYSBzZSBmb2kgdXRpbGl6YWRvIHVtYSByb3RhIHF1ZSBuw6NvIGNvbWVjZSBjb20gYmFycmEuXHJcbiAgaWYgKCFmb3JtYXR0ZWRMaW5rLnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgZm9ybWF0dGVkTGluayA9ICcvJy5jb25jYXQoZm9ybWF0dGVkTGluayk7XHJcbiAgfVxyXG4gIHJldHVybiBmb3JtYXR0ZWRMaW5rO1xyXG59XHJcblxyXG4vKipcclxuICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIG9yZGVuYXIgZG9pcyB2YWxvcmVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGVmdFNpZGUgUHJpbWVpcm8gdmFsb3IgYSBzZXIgY29tcGFyYWRvLlxyXG4gKiBAcGFyYW0gcmlnaHRTaWRlIFNlZ3VuZG8gdmFsb3IgYSBzZXIgY29tcGFyYWRvLlxyXG4gKiBAcGFyYW0gYXNjZW5kaW5nIERldGVybWluYSBzZSBzZXLDoSBlbSBvcmRlbSBhc2NlbmRlbnRlIG91IGRlc2NlbmRlbnRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRWYWx1ZXMobGVmdFNpZGU6IHN0cmluZywgcmlnaHRTaWRlOiBzdHJpbmcsIGFzY2VuZGluZzogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xyXG4gIGlmIChhc2NlbmRpbmcpIHtcclxuICAgIGlmIChsZWZ0U2lkZSA8IHJpZ2h0U2lkZSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKGxlZnRTaWRlID4gcmlnaHRTaWRlKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoYXNjZW5kaW5nID09PSBmYWxzZSkge1xyXG4gICAgaWYgKGxlZnRTaWRlIDwgcmlnaHRTaWRlKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmIChsZWZ0U2lkZSA+IHJpZ2h0U2lkZSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVEYXRlUmFuZ2UoZGF0ZTogRGF0ZSwgZGF0ZVN0YXJ0OiBEYXRlLCBkYXRlRW5kOiBEYXRlKSB7XHJcbiAgaWYgKGRhdGVTdGFydCAmJiBkYXRlRW5kKSB7XHJcbiAgICByZXR1cm4gZGF0ZSA+PSBkYXRlU3RhcnQgJiYgZGF0ZSA8PSBkYXRlRW5kO1xyXG4gIH0gZWxzZSBpZiAoZGF0ZVN0YXJ0ICYmICFkYXRlRW5kKSB7XHJcbiAgICByZXR1cm4gZGF0ZSA+PSBkYXRlU3RhcnQ7XHJcbiAgfSBlbHNlIGlmICghZGF0ZVN0YXJ0ICYmIGRhdGVFbmQpIHtcclxuICAgIHJldHVybiBkYXRlIDw9IGRhdGVFbmQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBgJHt0ZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dGV4dC5zbGljZSgxKX1gO1xyXG59XHJcblxyXG4vKipcclxuICogTWFwZWlhIHVtIG5vdm8gYXJyYXkgYXBlbmFzIGNvbSBhcyBwcm9wcmllZGFkZXMgZGVmaW5pZGFzIHBlbG8gZGVzZW52b2x2ZWRvciBiYXNlYWRvIGVtIHVtIGFycmF5IGRlXHJcbiAqIG9yaWdlbS5cclxuICpcclxuICogRXhlbXBsbzpcclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IHBlb3BsZSA9IFtcclxuICogIHsgaWQ6IDEsIG5hbWU6ICdGdWxhbm8nLCBiaXJ0aGRhdGU6ICcxOTgwLTExLTAxJywgZ2VucmU6ICdNYWxlJywgY2l0eTogJ1PDo28gUGF1bG8nLCBkZXBlbmRlbnRzOiAyIH0sXHJcbiAqICB7IGlkOiAyLCBuYW1lOiAnQmVsdHJhbm8nLCBiaXJ0aGRhdGU6ICcxOTk3LTAxLTIxJywgZ2VucmU6ICdGZW1hbGUnLCBjaXR5OiAnSm9pbnZpbGxlJywgZGVwZW5kZW50czogMCB9LFxyXG4gKiAgeyBpZDogMywgbmFtZTogJ1NpY2xhbm8nLCBiaXJ0aGRhdGU6ICcxOTk1LTA3LTE1JywgZ2VucmU6ICdNYWxlJywgY2l0eTogJ0pvaW52aWxsZScsIGRlcGVuZGVudHM6IDAgfVxyXG4gKiBdO1xyXG4gKlxyXG4gKiBjb25zdCBwcm9wZXJ0aWVzID0gWydpZCcsICduYW1lJ107XHJcbiAqXHJcbiAqIGNvbnN0IGlkQW5kTmFtZSA9IG1hcEFycmF5QnlQcm9wZXJ0aWVzKHBlb3BsZSwgcHJvcGVydGllcyk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGlkQW5kTmFtZSk7IC8vIFt7IGlkOiAxLCBuYW1lOiAnRnVsYW5vJyB9LCB7IGlkOiAyLCBuYW1lOiAnQmVsdHJhbm8nIH0sIHsgaWQ6IDMsIG5hbWU6ICdTaWNsYW5vJyB9XVxyXG4gKiBgYGBcclxuICpcclxuICogVW0gb3V0cm8gdXNvIHBhcmEgbyBtw6l0b2RvIMOpIFwicGFyZWFyXCIgdG9kb3Mgb3Mgb2JqZXRvcyBkbyBhcnJheSBjb20gYXMgbWVzbWFzIHByb3ByaWVkYWRlcy5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGN1c3RvbWVycyA9IFtcclxuICogIHsgaWQ6IDEsIG5hbWU6ICdGdWxhbm8nLCBjaXR5OiAnU8OjbyBQYXVsbycsIGRlcGVuZGVudHM6IDIgfSwgLy8gc2VtIGdlbnJlXHJcbiAqICB7IGlkOiAyLCBuYW1lOiAnQmVsdHJhbm8nLCBnZW5yZTogJ0ZlbWFsZScsIGNpdHk6ICdKb2ludmlsbGUnIH0sIC8vIHNlbSBkZXBlbmRlbnRzXHJcbiAqICB7IGlkOiAzLCBuYW1lOiAnU2ljbGFubycsIGdlbnJlOiAnTWFsZScsIGNpdHk6ICdKb2ludmlsbGUnLCBkZXBlbmRlbnRzOiAwIH1cclxuICogXTtcclxuICogY29uc3QgcHJvcGVydGllcyA9IFsnaWQnLCAnbmFtZScsICdjaXR5JywgJ2dlbnJlJywgJ2RlcGVuZGVudHMnXTtcclxuICpcclxuICogY29uc3QgcGF0dGVybiA9IG1hcEFycmF5QnlQcm9wZXJ0aWVzKGN1c3RvbWVycywgcHJvcGVydGllcyk7XHJcbiAqIGNvbnNvbGUubG9nKHBhdHRlcm4pO1xyXG4gKlxyXG4gKiAvLyBbXHJcbiAqIC8vICAgeyBpZDogMSwgbmFtZTogJ0Z1bGFubycsIGNpdHk6ICdTw6NvIFBhdWxvJywgZ2VucmU6IHVuZGVmaW5lZCwgZGVwZW5kZW50czogMiB9LFxyXG4gKiAvLyAgIHsgaWQ6IDIsIG5hbWU6ICdCZWx0cmFubycsIGNpdHk6ICdKb2ludmlsbGUnLCBnZW5yZTogJ0ZlbWFsZScsIGRlcGVuZGVudHM6IHVuZGVmaW5lZCB9LFxyXG4gKiAvLyAgIHsgaWQ6IDMsIG5hbWU6ICdTaWNsYW5vJywgY2l0eTogJ0pvaW52aWxsZScsIGdlbnJlOiAnTWFsZScsIGRlcGVuZGVudHM6IDAgfVxyXG4gKiAvLyBdXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gaXRlbXMge0FycmF5PGFueT59IEFycmF5IGRlIGl0ZW1zIG9yaWdpbmFsLlxyXG4gKiBAcGFyYW0gcHJvcGVydGllcyB7QXJyYXk8c3RyaW5nPn0gQXJyYXkgZGUgc3RyaW5nIGNvbSBhIGxpc3RhIGRlIHByb3ByaWVkYWRlcyBxdWUgZGV2ZW0gc2VyIHJldG9ybmFkYXMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFycmF5PGFueT5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBBcnJheUJ5UHJvcGVydGllcyhpdGVtczogQXJyYXk8YW55PiA9IFtdLCBwcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+ID0gW10pOiBBcnJheTxhbnk+IHtcclxuICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gbWFwT2JqZWN0QnlQcm9wZXJ0aWVzKGl0ZW0sIHByb3BlcnRpZXMpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcGVpYSB1bSBub3ZvIG9iamV0byBhcGVuYXMgY29tIGFzIHByb3ByaWVkYWRlcyBkZWZpbmlkYXMgcGVsbyBkZXNlbnZvbHZlZG9yLlxyXG4gKlxyXG4gKiBFeGVtcGxvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgcGVyc29uID0geyBpZDogMSwgbmFtZTogJ0Z1bGFubycsIGJpcnRoZGF0ZTogJzE5ODAtMTEtMDEnLCBnZW5yZTogJ01hbGUnLCBjaXR5OiAnU8OjbyBQYXVsbycsIGRlcGVuZGVudHM6IDIgfTtcclxuICpcclxuICogY29uc3QgcHJvcGVydGllcyA9IFsnaWQnLCAnbmFtZSddO1xyXG4gKlxyXG4gKiBjb25zdCBpZEFuZE5hbWUgPSBtYXBPYmplY3RCeVByb3BlcnRpZXMocGVyc29uLCBwcm9wZXJ0aWVzKTtcclxuICpcclxuICogY29uc29sZS5sb2coaWRBbmROYW1lKTsgLy8geyBpZDogMSwgbmFtZTogJ0Z1bGFubycgfVxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIG9iamVjdCB7QXJyYXk8YW55Pn0gQXJyYXkgZGUgaXRlbXMgb3JpZ2luYWwuXHJcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIHtBcnJheTxzdHJpbmc+fSBBcnJheSBkZSBzdHJpbmcgY29tIGEgbGlzdGEgZGUgcHJvcHJpZWRhZGVzIHF1ZSBkZXZlbSBzZXIgcmV0b3JuYWRhcy5cclxuICpcclxuICogQHJldHVybnMgQXJyYXk8YW55PlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcE9iamVjdEJ5UHJvcGVydGllcyhvYmplY3Q6IGFueSA9IHt9LCBwcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICBjb25zdCBnZXRTZWxlY3RlZFByb3BlcnRpZXMgPSAoc2VsZWN0ZWRQcm9wZXJ0aWVzLCBwcm9wZXJ0eSkgPT4gKHtcclxuICAgIC4uLnNlbGVjdGVkUHJvcGVydGllcyxcclxuICAgIFtwcm9wZXJ0eV06IG9iamVjdFtwcm9wZXJ0eV1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKGdldFNlbGVjdGVkUHJvcGVydGllcywge30pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3JuYSBvcyB2YWxvcmVzIGRlIHVtIG9iamV0byBkZW50cm8gZGUgdW0gYXJyYXkuXHJcbiAqXHJcbiAqID4gU2ltdWxhIG8gT2JqZWN0LnZhbHVlcyhvYmopLCBvIG1lc21vIGRldmUgc2VyIHJlbW92aWRvIGFzc2ltIHF1ZSBhIHZlcnPDo28gdHlwZXNjcml0IGZvciBhdHVhbGl6YWRhLlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqZWN0IE9iamV0byBkZSBvbmRlIHNlcsOhIHBlZ28gb3MgdmFsb3Jlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNGcm9tT2JqZWN0KG9iamVjdDogYW55ID0ge30pOiBBcnJheTxhbnk+IHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAocHJvcGVydHkgPT4gb2JqZWN0W3Byb3BlcnR5XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBhZGljaW9uYSAwIG5vIHRlbXBvIGluZm9ybWFkbywgY2FzbyBtZW5vciBxIDEwXHJcbiAqXHJcbiAqIEBwYXJhbSB0aW1lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkWmVybyh0aW1lOiBudW1iZXIpIHtcclxuICBpZiAoIXRpbWUpIHtcclxuICAgIHJldHVybiAnMDAnO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRpbWUgPCAxMCkge1xyXG4gICAgcmV0dXJuIGAwJHt0aW1lfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBkbyBvYmpldG8gYXMgcHJvcHJpZWRhZGVzIGVzcGVjaWZpY2FkYXMuXHJcbiAqXHJcbiAqIEV4ZW1wbG86XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBrZXk6IFsnaWQnLCAnY3BmJ11cclxuICogbmV3SXRlbVZhbHVlOiB7IGlkOiAnMTIzJywgY3BmOiAnNDU2JywgbmFtZTogJ1Rlc3QnIH1cclxuICogUmVzdWx0YWRvOiB7IG5hbWU6ICdUZXN0JyB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ga2V5cyBsaXN0YSBkZSBwcm9wcmllZGFkZXMgcGFyYSBzZXIgcmVtb3ZpZGEgZG8gb2JqZXRvLlxyXG4gKiBAcGFyYW0gbmV3SXRlbVZhbHVlIG9iamV0byBxdWUgc2UgZGVzZWphIHJlbW92ZXIgYXMgcHJvcHJpZWRhZGVzLlxyXG4gKiBAcmV0dXJucyBvYmpldG8gc2VtIGFzIHByb3ByaWVkYWRlcyBlc3BlY2lmaWNhZGFzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUtleXNQcm9wZXJ0aWVzKGtleXM6IEFycmF5PGFueT4sIG5ld0l0ZW1WYWx1ZTogYW55KSB7XHJcbiAga2V5cy5mb3JFYWNoKGtleSA9PiBkZWxldGUgbmV3SXRlbVZhbHVlW2tleV0pO1xyXG4gIHJldHVybiBuZXdJdGVtVmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgb2JqZXRvcyBkdXBsaWNhZG9zLlxyXG4gKlxyXG4gKiBFeGVtcGxvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogaXRlbTogW3tjb3VudHJ5OiAnamFwYW8nfSwge2NvdW50cnk6ICdicmFzaWwnfSAsIHtjb3VudHJ5OiAnY2hpbmEnfV1cclxuICogaXRlbTI6IFt7Y291bnRyeTogJ2NoaWxlJ30sIHtjb3VudHJ5OiAnYnJhc2lsJ30sIHtjb3VudHJ5OiAnY2FuYWRhJ31dXHJcbiAqIGtleTogJ2NvdW50cnknXHJcbiAqIFJlc3VsdGFkbzpcclxuICogICAgaXRlbTIgPSBbe2NvdW50cnk6ICdjaGlsZSd9LCB7Y291bnRyeTogJ2NhbmFkYSd9IF1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBpdGVtIGxpc3RhIGNvbXBhcmFkYS5cclxuICogQHBhcmFtIGl0ZW0yIGxpc3RhIHBhcmEgcmVtb3ZlciBpdGVtcyBkdXBsaWNhZG9zLlxyXG4gKiBAcGFyYW0ga2V5IHByb3ByaWVkYWRlIHF1ZSBzZXLDoSB1dGlsaXphZGEgcGFyYSByZWFsaXphciBhIGNvbXBhcmHDp8Ojby5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVJdGVtcyhpdGVtLCBpdGVtMiwga2V5KSB7XHJcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGl0ZW0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwLCBsZW4yID0gaXRlbTIubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgIGlmIChpdGVtW2ldW2tleV0gPT09IGl0ZW0yW2pdW2tleV0pIHtcclxuICAgICAgICBpdGVtMi5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgbGVuMiA9IGl0ZW0yLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=