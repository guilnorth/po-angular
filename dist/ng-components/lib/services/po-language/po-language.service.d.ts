import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço responsável por gerenciar as linguagens da aplicação.
 */
export declare class PoLanguageService {
    constructor();
    set languageDefault(language: string);
    get languageDefault(): string;
    /**
     * @description
     *
     * Método responsável por retornar o idioma ativo.
     *
     * A busca do idioma será feita na seguinte ordem:
     *
     *   1 - o idioma que foi armazenado no *localStorage*, através do método `setLanguage()` utilizado pelo i18n.
     *
     *   2 - o valor inserido nas configurações do módulo do i18n através do parâmetro `config`, sendo o idioma inserido
     * na propriedade `language` da interface `PoI18nConfigDefault`.
     *
     *   3 - o idioma do navegador utilizado.
     *
     * > Caso o idioma do navegador não seja suportado pelo PO (`pt`, `en`, `es` ou `ru`), será retornado valor `pt`.
     *
     * **Retorno:** `string` com a sigla do idioma ativo.
     */
    getLanguage(): string;
    /**
     * @description
     *
     * Método responsável por retornar o idioma *default* da aplicação definido nas configurações do módulo do i18n através
     * do parâmetro `config`.
     *
     * **Retorno:** `string` com a sigla do idioma *default*.
     */
    getLanguageDefault(): string;
    /**
     * @description
     *
     * Método responsável por retornar a abreviação do idioma ativo na aplicação.
     *
     * @default `pt`
     *
     * **Retorno:** `string` com a sigla abreviada do idioma ativo.
     */
    getShortLanguage(): string;
    /**
     * @description
     *
     * Método para salvar o idioma da aplicação no *storage*, utilizado pelo serviço do i18n.
     *
     * > Ao definir um idioma por este método, todos os módulos da aplicação utilizarão o idioma definido.
     *
     * @param language sigla do idioma.
     *
     * Esta sigla deve ser composta por duas letras representando o idioma,
     * podendo ser adicionado outras duas letras representando o país, por exemplo: `pt`, `pt-BR`, `pt-br`, `en` ou `en-US`.
     *
     * > Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.
     */
    setLanguage(language: string): void;
    /**
     * @description
     *
     * Método que define o idioma configurado a partir do parâmetro `config` utilizado pelo módulo do i18n.
     *
     * > Ao definir um idioma por este serviço, apenas o módulo do i18n referente a esta configuração utilizará o idioma definido.
     *
     * @param language sigla do idioma.
     *
     * Esta sigla deve ser composta por duas letras representando o idioma,
     * podendo ser adicionado outras duas letras representando o país, por exemplo: `pt`, `pt-BR`, `pt-br`, `en` ou `en-US`.
     *
     * > Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.
     */
    setLanguageDefault(language: string): void;
    /**
     * @description
     *
     * Método que retorna o separador
     *
     * @param language sigla do idioma.
     *
     * Esta sigla deve ser composta por duas letras representando o idioma
     *
     * > Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.
     */
    getNumberSeparators(language?: string): {
        decimalSeparator: string;
        thousandSeparator: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoLanguageService>;
}