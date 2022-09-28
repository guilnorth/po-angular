/**
 * Retorna um *array* contendo os pares `[chave, valor]` do objeto.
 *
 * Semelhante ao método `Object.entries()` nativo do javascript.
 *
 * > Veja mais em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param object Objeto que será extraído os pares [chave, valor].
 */
export declare const getObjectEntries: (object: object) => any[];
/**
 * Recebe um objeto e valida se o seu valor é diferente de *undefined* ou *null*.
 *
 * @param {object} parameter Objeto contento o nome do parâmetro que está sendo validado
 * e o seu valor.
 */
export declare const validateParameter: (parameter: object) => void;
/**
 * Recebe um objeto e valida se o seu valor é uma instância de *Array* e se não
 * está vazio.
 *
 * @param value Objeto contento o nome da propriedade que está sendo validada e o seu valor.
 */
export declare const validateArray: (value: object) => void;
/**
 * Recebe um arquivo e converte para uma string base64
 *
 * @param Objeto do tipo file.
 */
export declare const toBase64: (file: File) => Promise<string>;
/**
 * Recebe uma string base64 e converte para um arquivo
 *
 * @param string base64.
 */
export declare const toFile: (url: string, fileName: string, mimeType: string) => Promise<File>;
