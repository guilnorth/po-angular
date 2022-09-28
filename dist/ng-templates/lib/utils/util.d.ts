/**
 * Retorna o idioma atual do navegador
 */
export declare function getBrowserLanguage(): string;
/**
 * Retorna o idioma do navegador, com somente as duas primeiras letras. Por exemplo: "pt" ou "es".
 *
 * Caso o valor retornado pelo navegador não estiver dentro dos idiomas suportados pelo PO,
 * será retornado a linguagem padrão (poLocaleDefault).
 */
export declare function getShortBrowserLanguage(): string;
export declare function convertToBoolean(val: any): boolean;
export declare function convertToInt(value: any, valueDefault?: any): number;
export declare function isTypeof(object: any, type: any): boolean;
/**
 *
 * @param fn Função que será executada dentro do contexto. Podendo ser o nome da função
 * ou a referência da mesma.
 *
 * @param context Contexto do qual a função será executada.
 */
export declare function callFunction(fn: any, context: any, param?: any): void;
export declare function convertIsoToDate(value: string, start: boolean, end: boolean): Date;
export declare function convertDateToISOExtended(date: Date, time?: string): string;
/**
 * Transforma o ano em uma string no formato yyyy e caso o ano seja menor que 1000 preenche com zeros a esquerda.
 *
 * @param year Ano
 */
export declare function formatYear(year: number): string;
export declare function isEquals(value: any, comparedValue: any): boolean;
/**
 * Caso o ano original da data seja entre 0 e 100 atribui esse valor ao ano, pois o `new Date` do javascript transforma o ano para 190X.
 *
 * @param date Data
 * @param year Ano original
 */
export declare function setYearFrom0To100(date: Date, year: number): void;
export declare function sortOptionsByProperty(options: Array<any>, property: string): void;
export declare function removeDuplicatedOptions(list: Array<any>): void;
export declare function removeUndefinedAndNullOptions(list: Array<any>): void;
export declare function validValue(value: any): boolean;
export declare function isExternalLink(url: any): boolean;
export declare function openExternalLink(url: any): void;
export declare function getFormattedLink(link: string): string;
/**
 * Método responsável por ordenar dois valores.
 *
 * @param leftSide Primeiro valor a ser comparado.
 * @param rightSide Segundo valor a ser comparado.
 * @param ascending Determina se será em ordem ascendente ou descendente.
 */
export declare function sortValues(leftSide: string, rightSide: string, ascending?: boolean): number;
export declare function validateDateRange(date: Date, dateStart: Date, dateEnd: Date): boolean;
export declare function capitalizeFirstLetter(text: string): string;
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
export declare function mapArrayByProperties(items?: Array<any>, properties?: Array<string>): Array<any>;
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
export declare function mapObjectByProperties(object?: any, properties?: Array<string>): any;
/**
 * Retorna os valores de um objeto dentro de um array.
 *
 * > Simula o Object.values(obj), o mesmo deve ser removido assim que a versão typescrit for atualizada.
 *
 * @param object Objeto de onde será pego os valores.
 */
export declare function valuesFromObject(object?: any): Array<any>;
/**
 * adiciona 0 no tempo informado, caso menor q 10
 *
 * @param time
 */
export declare function addZero(time: number): string | number;
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
export declare function removeKeysProperties(keys: Array<any>, newItemValue: any): any;
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
export declare function removeDuplicateItems(item: any, item2: any, key: any): void;
