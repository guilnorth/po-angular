/**
 * @deprecated
 * Utilize o método `getShortBrowserLanguage`.
 *
 * @description
 * Retorna idioma do browser ou o idioma padrão.
 */
export declare function browserLanguage(): string;
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
export declare function formatBytes(bytes: number, decimals?: number): string;
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
export declare function getShortLanguage(language: string): string;
export declare function isLanguage(value: any): boolean;
export declare function reloadCurrentPage(): void;
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
export declare function convertDateToISODate(date: Date): string;
export declare function convertDateToISOExtended(date: Date, time?: string): string;
/**
 * Transforma o ano em uma string no formato yyyy e caso o ano seja menor que 1000 preenche com zeros a esquerda.
 *
 * @param year Ano
 */
export declare function formatYear(year: number): string;
export declare function isIEOrEdge(): boolean;
export declare function isIE(): boolean;
export declare function isFirefox(): boolean;
export declare function isMobile(): RegExpMatchArray;
export declare function isEquals(value: any, comparedValue: any): boolean;
export declare function isKeyCodeEnter(event: any): boolean;
/**
 * Caso o ano original da data seja entre 0 e 100 atribui esse valor ao ano, pois o `new Date` do javascript transforma o ano para 190X.
 *
 * @param date Data
 * @param year Ano original
 */
export declare function setYearFrom0To100(date: Date, year: number): void;
export declare function sortOptionsByProperty(options: Array<any>, property: string): void;
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
export declare function sortFields(fields?: any[], defaultOrdering?: number): any[];
export declare function removeDuplicatedOptions(list: Array<any>): void;
export declare function removeDuplicatedOptionsWithFieldValue(list: Array<any>, newValue: any): void;
export declare function removeUndefinedAndNullOptions(list: Array<any>): void;
export declare function removeUndefinedAndNullOptionsWithFieldValue(list: Array<any>, newValue: any): void;
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
export declare function sortValues(leftSide: string | Date, rightSide: string | Date, ascending?: boolean): number;
export declare function validateDateRange(date: Date, dateStart: Date, dateEnd: Date): boolean;
export declare function uuid(): string;
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
 * Converte um arquivo em base64.
 *
 * @param file arquivo que será convertido.
 */
export declare function convertImageToBase64(file: File): Promise<any>;
/**
 * Converte um número em decimal baseado na quantidade de casas decimais.
 *
 * Caso o valor seja inválido, será retornado o valor `undefined`.
 * Valores inválidos são: `false`, `NaN`, `strings` que não numéricas, `undefined` e `null`.
 *
 * @param number valor que será convertido
 * @param decimalsPlace quantidade de casas decimais
 */
export declare function convertNumberToDecimal(number: any, decimalsPlace: number): number;
/**
 * Retorna uma copia do objeto sujo, sem as propriedades nulas ou indefinidas.
 * Retorna o objeto sem as propriedades que contém valores nulos ou indefinidos.
 *
 * @param dirtyObject
 */
export declare function clearObject(dirtyObject: object): any;
export declare function validateObjectType(value: any): any;
/**
 * Retorna os elementos DOM capazes de receber foco.
 *
 * > Atualmente são considerados "focáveis" os elementos DOM `input`, `select`,
 * `textarea`, `button` e `a`.
 *
 * @param parentElement Elemento DOM pai.
 * @returns Lista dos elementos DOM filhos "focáveis".
 */
export declare function getFocusableElements(parentElement: Element): NodeListOf<Element>;
