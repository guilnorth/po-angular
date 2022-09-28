import { __decorate, __param } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { isLanguage, reloadCurrentPage } from '../../utils/util';
import { I18N_CONFIG } from './po-i18n-config-injection-token';
/**
 * @description
 *
 * O serviço `PoI18nService` possibilita utilizar múltiplos idiomas e contextos na aplicação.
 *
 * > Antes da utilização do serviço, é necessário realizar a
 * [importação e configuração do módulo `PoI18nModule`](/documentation/po-i18n#i18n-config).
 *
 * **Utilização do serviço `PoI18nService`:**
 *
 * Para utilizar o serviço basta importá-lo nos componentes que necessitarem de literais e fazer a injeção de
 * dependência no construtor:
 * ```
 *  import { PoI18nService } from '@po-ui/ng-components';
 *  ...
 *  constructor(private poI18nService: PoI18nService) { }
 *  ...
 * ```
 *
 * Por fim realizar a busca pelas literais, inscrevendo-se no [Observable](https://angular.io/guide/observables) pelo
 * método `getLiterals()`.
 *
 * > O método `getLiterals()` pode receber um objeto do tipo da interface `PoI18nLiterals` como parâmetro,
 * porém, nenhuma das propriedades são obrigatórias. Caso nenhum parâmetro seja passado, serão buscadas
 * todas as literais do contexto definido com padrão, no idioma definido como padrão.
 *
 * Exemplos de requisição:
 * ```
 * literals = {};
 * literalsEn = {};
 * literalsCrm = {};
 *
 * constructor(private poI18nService: PoI18nService) {
 *   poI18nService.getLiterals()
 *     .subscribe((literals) => {
 *       this.literals = literals;
 *     });
 *
 *   poI18nService.getLiterals({context: 'crm', literals: ['add', 'remove']})
 *     .subscribe((literals) => {
 *       this.literalsCrm = literals;
 *     });
 *
 *   poI18nService.getLiterals({language: 'en-us'})
 *     .subscribe((literals) => {
 *       this.literalsEn = literals;
 *     });
 * }
 * ```
 *
 * Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
 * seguinte código:
 *
 * <pre ngNonBindable>
 * {{ literals?.add }}
 * {{ literals?.remove }}
 * </pre>
 *
 * Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o *pipe* `poI18n`.
 * É possível informar propriedades do componente como `name` e `nickname` ou
 * informar o valor diretamente com "" ou número, conforme o exemplo abaixo:
 *
 * <pre ngNonBindable>
 * {{ literals?.people | poI18n:[120] }}
 * {{ literals?.greeting | poI18n:[name, nickname] }}
 * {{ literals?.greeting | poI18n:["Brad", "Green"] }}
 * </pre>
 *
 * > É importante o uso do operador `?` (Elvis) para evitar erros enquanto as literais não forem carregadas.
 *
 * ### Teste unitário
 *
 * Abaixo segue um exemplo de *setup* inicial de teste unitário do *AppComponent* que utiliza o `PoI18nService`:
 *
 * > Atenção: não declarar o `PoI18nService` no providers do TestBed pois a biblioteca realiza a injeção de dependência de forma dinâmica.
 * > Se o serviço for declarado o teste não fará a injeção e o teste apresentará erros.
 *
 * ```
 * import { async, TestBed } from '@angular/core/testing';
 * import { HttpClientTestingModule } from '@angular/common/http/testing';
 *
 * import { PoI18nModule } from '@po-ui/ng-components';
 *
 * import { AppComponent } from './app.component';
 *
 * describe('AppComponent', () => {
 *   const anotherPT = {
 *     text: 'texto',
 *     add: 'adicionar',
 *     remove: 'remover'
 *   };
 *
 *   const generalPT = {
 *     text: 'texto',
 *     add: 'adicionar',
 *     remove: 'remover'
 *   };
 *
 *   const config = {
 *     default: {
 *       language: 'pt-BR',
 *       context: 'general',
 *       cache: false
 *     },
 *     contexts: {
 *       general: {
 *         'pt-br': generalPT
 *       },
 *       another: {
 *         'pt-br': anotherPT
 *       }
 *     }
 *   };
 *
 *   beforeEach(async(() => {
 *     TestBed.configureTestingModule({
 *       declarations: [
 *         AppComponent
 *       ],
 *       imports: [
 *         HttpClientTestingModule,
 *         PoI18nModule.config(config)
 *       ]
 *     }).compileComponents();
 *   }));
 *
 *   it('should create the app', async(() => {
 *     const fixture = TestBed.createComponent(AppComponent);
 *     const app = fixture.debugElement.componentInstance;
 *
 *     expect(app).toBeTruthy();
 *   }));
 *
 * });
 * ```
 */
let PoI18nBaseService = class PoI18nBaseService {
    constructor(config, http, languageService) {
        this.config = config;
        this.http = http;
        this.languageService = languageService;
        this.varI18n = {};
        this.useCache = false;
        this.servicesContext = {};
        this.setConfig(config);
    }
    /**
     * <a id="get-language"></a>
     * Método que retorna o idioma padrão ativo.
     *
     * A busca deste idioma pelo método será feita na seguinte ordem:
     *
     *   1 - o idioma que foi armazenado no *localStorage*, através do método [`setLanguage()`](documentation/po-i18n#setLanguage).
     *
     *   2 - o valor inserido no módulo do i18n através do parâmetro `config`, sendo o idioma inserido na propriedade
     * `language` da interface [`PoI18nConfigDefault`](documentation/po-i18n#poI18nConfigDefault).
     *
     *   3 - o idioma do navegador utilizado.
     *
     * > Caso o idioma do navegador não seja suportado pelo PO (`pt`, `en`, `es` ou `ru`), será retornado valor `pt`.
     *
     * @returns {string} sigla do idioma padrão.
     */
    getLanguage() {
        return this.languageService.getLanguage();
    }
    getLiterals(options = {}) {
        const language = options['language'] ? options['language'].toLowerCase() : this.getLanguage();
        const context = options['context'] ? options['context'] : this.contextDefault;
        const literals = options['literals'] ? options['literals'] : [];
        return new Observable(observer => {
            if (this.servicesContext[context]) {
                // Faz o processo de busca de um contexto que contém serviço
                this.getLiteralsFromContextService(language, context, literals, observer);
            }
            else {
                // Faz o processo de busca de um contexto que utiliza constante
                this.getLiteralsFromContextConstant(language, context, literals, observer);
            }
        });
    }
    /**
     * Método que retorna o idioma padrão ativo, com somente a abreviação do idioma (duas primeiras letras).
     * Por exemplo: "pt" ou "es".
     *
     * A busca deste idioma é baseada no método [**getLanguage()**](/documentation/po-i18n#get-language).
     *
     * @returns {string} sigla do idioma padrão.
     */
    getShortLanguage() {
        return this.languageService.getShortLanguage();
    }
    /**
     * <a id="setLanguage"></a>
     * Método para alterar o idioma padrão do módulo do i18n.
     *
     * Ao utilizar este método, o idioma ficará gravado no armazenamento local do navegador, que será utilizado pelo
     * serviço do `i18n` para buscar as literais no idioma padrão.
     *
     * @param {string} language Sigla do idioma.
     *
     * Esta sigla deve ser composta por duas letras representando o idioma,
     * podendo ser adicionado outras duas letras representando o país, por exemplo: `pt`, `pt-BR`, `pt-br`, `en` ou `en-US`.
     *
     * > Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.
     *
     * @param {boolean} reload Indica se a página atual poderá ser recarregada após a alteração do idioma.
     *
     * Este recurso pode ser útil para os usuários que utilizam o método `getLiterals()` do serviço do i18n para poder
     * buscar novamente as literais no novo idioma configurado.
     */
    setLanguage(language, reload = false) {
        if (!isLanguage(language)) {
            return;
        }
        this.languageService.setLanguage(language);
        if (reload) {
            reloadCurrentPage();
        }
    }
    setConfig(config) {
        // Seta as configurações padrões definidas no importação do módulo
        if (config['default']) {
            this.languageService.setLanguageDefault(config['default']['language']);
            this.contextDefault = config['default']['context'] ? config['default']['context'] : '';
            this.useCache = config['default']['cache'] ? config['default']['cache'] : false;
        }
        // Carrega a lista dos contextos e as contantes informadas
        if (config['contexts']) {
            this.setVarI18n(config['contexts']);
            // Se nenhum contexto foi definido como padrão,
            // então define o primeiro contexto
            if (!this.contextDefault) {
                for (const context in config['contexts']) {
                    if (this.config['contexts'].hasOwnProperty(context)) {
                        this.contextDefault = context;
                        break;
                    }
                }
            }
        }
    }
    // Processo de busca de um contexto que contém serviço.
    //    1 - Procura na variável I18n deste serviço
    //    2 - Procura no local storage (Se o cache estiver definido como true na configuração do módulo)
    //    3 - Dispara o serviço, mesmo que já tenha encontrado no local storage, para garantir a atualização
    //    4 - Se nenhuma literal for encontrada, então busca em pt-br
    getLiteralsFromContextService(language, context, literals, observer, translations = {}, languageAlternative = null) {
        // Idioma usado para tentar buscar as literais faltantes
        const languageSearch = languageAlternative ? languageAlternative : language;
        translations = this.mergeObject(translations, this.searchInVarI18n(languageSearch, context, literals));
        if (this.countObject(translations) > 0) {
            observer.next(translations);
        }
        // realiza a busca no localStorage e em seguida no serviço
        this.getLiteralsLocalStorageAndCache(languageSearch, context, literals, observer, translations, languageAlternative);
    }
    // Procura no local storage e em seguida no serviço
    // Caso não encontre nem no serviço, recomeça a busca em pt-br
    getLiteralsLocalStorageAndCache(language, context, literals, observer, translations, languageAlternative = null) {
        const languageSearch = languageAlternative ? languageAlternative : language;
        let translationTemp;
        // Verifica se usa cache
        if (this.useCache) {
            translationTemp = this.searchInLocalStorage(languageSearch, context, literals);
            if (this.countObject(translationTemp) > 0) {
                this.updateVarI18n(language, context, translationTemp);
                translations = this.mergeObject(translationTemp, translations);
                observer.next(translations);
            }
        }
        // Busca do Serviço
        this.getHttpService(this.servicesContext[context], languageSearch, literals).subscribe(response => {
            if (response) {
                this.updateLocalStorage(language, context, response);
                this.updateVarI18n(language, context, response);
                translationTemp = this.searchInVarI18n(language, context, literals);
                translations = this.mergeObject(translationTemp, translations);
                observer.next(translations);
            }
            // Se não encontrou todas as literais pesquisadas no idioma
            // Então refaz o processo procurando em português
            if (literals.length > this.countObject(translations)) {
                if (languageAlternative === 'pt-br') {
                    // Se não encontrou nem em português, então retorna o nome das literais
                    translations = this.completeFaultLiterals(language, context, literals, translations);
                    this.updateLocalStorage(language, context, translations);
                    this.updateVarI18n(language, context, translations);
                    observer.next(translations);
                }
                else {
                    this.getLiteralsFromContextService(language, context, literals, observer, translations, 'pt-br');
                }
            }
        });
    }
    // Procura pela lista de literais
    // Se não encontrar todas, procura em pt-br
    getLiteralsFromContextConstant(language, context, literals, observer, translations = {}) {
        translations = this.mergeObject(translations, this.searchInVarI18n(language, context, literals));
        if (this.countObject(translations) > 0) {
            observer.next(translations);
        }
        // Se foi pesquisado por literais
        if (literals.length > 0) {
            // Se não encontrou todas as literais pesquisadas no idioma, procura em português
            if (literals.length > this.countObject(translations)) {
                if (language === 'pt-br') {
                    // Se não encontrou nem em português, então retorna o nome das literais
                    translations = this.completeFaultLiterals(language, context, literals, translations);
                    observer.next(translations);
                }
                else {
                    this.getLiteralsFromContextConstant('pt-br', context, literals, observer, translations);
                }
            }
        }
        else {
            // Se não encontrar nenhuma literal, procura em português
            if (this.countObject(translations) === 0 && language !== 'pt-br') {
                this.getLiteralsFromContextConstant('pt-br', context, literals, observer, translations);
            }
            // caso não informar literais e não houver tradução
            observer.next(translations);
            observer.complete();
        }
    }
    // Busca pelas literais no local storage
    searchInLocalStorage(language, context, literals) {
        const translations = {};
        if (literals.length > 0) {
            for (let i = 0; i < literals.length; i++) {
                const literal = literals[i];
                const translation = localStorage.getItem(language + '-' + context + '-' + literal);
                if (translation) {
                    translations[literal] = translation;
                }
            }
        }
        return translations;
    }
    // Busca pelas literais na variável do serviço
    searchInVarI18n(language, context, literals) {
        let translations = {};
        if (this.varI18n[language] && this.varI18n[language][context]) {
            const content = this.varI18n[language][context];
            if (literals.length > 0) {
                // Busca as literais desejadas
                for (let i = 0; i < literals.length; i++) {
                    const literal = literals[i];
                    if (content.hasOwnProperty(literal)) {
                        translations[literal] = content[literal];
                    }
                }
            }
            else {
                // Atribui todas as literais
                translations = { ...content };
            }
        }
        return translations;
    }
    // Atualiza o local storage
    updateLocalStorage(language, context, data) {
        if (this.useCache) {
            for (const literal of Object.keys(data)) {
                localStorage.setItem(language + '-' + context + '-' + literal, data[literal]);
            }
        }
    }
    // Atualiza a variável local com as literais com os objetos passados na configuração
    setVarI18n(contexts) {
        // Percorre os contextos
        for (const context of Object.keys(contexts)) {
            const contextContent = contexts[context];
            // Percorre os idiomas dentro do contexto
            for (const language of Object.keys(contextContent)) {
                const languageContent = contextContent[language];
                if (language === 'url') {
                    this.servicesContext[context] = languageContent;
                }
                else {
                    this.updateVarI18n(language, context, languageContent);
                }
            }
        }
    }
    // Atualiza a variável local com as literais idioma e contexto
    updateVarI18n(language, context, data) {
        language = language.toLowerCase();
        if (!this.varI18n[language]) {
            this.varI18n[language] = { [context]: {} };
        }
        if (!this.varI18n[language][context]) {
            this.varI18n[language][context] = {};
        }
        // Cria ou atualiza o contexto dentro do storage
        this.varI18n[language][context] = this.mergeObject(data, this.varI18n[language][context]);
    }
    getHttpService(url, language, literals) {
        let param = '?language=' + language;
        if (literals.length > 0) {
            param += '&literals=' + literals.join();
        }
        // Remove a barra final do endereço
        url = url.replace(/\/$/, '');
        return this.http.get(`${url}${param}`);
    }
    // Completa com o nome da literais, as que não foram encontradas
    completeFaultLiterals(language, context, literals, translations) {
        for (let i = 0; i < literals.length; i++) {
            const literal = literals[i];
            if (!translations[literal]) {
                translations[literal] = literal;
            }
        }
        return translations;
    }
    // Conta os atributos do objeto
    countObject(obj) {
        return Object.keys(obj).length;
    }
    // Faz o merge dos objetos, sempre dando preferência para o primeiro objeto de parâmetro
    mergeObject(objPermanent, obj) {
        return { ...obj, ...objPermanent };
    }
};
PoI18nBaseService = __decorate([
    __param(0, Inject(I18N_CONFIG)),
    __param(1, Inject(HttpClient))
], PoI18nBaseService);
export { PoI18nBaseService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taTE4bi1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWkxOG4vcG8taTE4bi1iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUkvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUlHO0FBRUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFTNUIsWUFDK0IsTUFBcUIsRUFDdEIsSUFBaUIsRUFDckMsZUFBbUM7UUFGZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDckMsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBWHJDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQU9oQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMs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SUFDakMsQ0FBQztJQUVELHdGQUF3RjtJQUNoRixXQUFXLENBQUMsWUFBaUIsRUFBRSxHQUFRO1FBQzdDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FDRixDQUFBO0FBbFdZLGlCQUFpQjtJQVV6QixXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNuQixXQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtHQVhWLGlCQUFpQixDQWtXN0I7U0FsV1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBpc0xhbmd1YWdlLCByZWxvYWRDdXJyZW50UGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSTE4Tl9DT05GSUcgfSBmcm9tICcuL3BvLWkxOG4tY29uZmlnLWluamVjdGlvbi10b2tlbic7XHJcbmltcG9ydCB7IFBvSTE4bkNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1pMThuLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0kxOG5MaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1pMThuLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gc2VydmnDp28gYFBvSTE4blNlcnZpY2VgIHBvc3NpYmlsaXRhIHV0aWxpemFyIG3Dumx0aXBsb3MgaWRpb21hcyBlIGNvbnRleHRvcyBuYSBhcGxpY2HDp8Ojby5cclxuICpcclxuICogPiBBbnRlcyBkYSB1dGlsaXphw6fDo28gZG8gc2VydmnDp28sIMOpIG5lY2Vzc8OhcmlvIHJlYWxpemFyIGFcclxuICogW2ltcG9ydGHDp8OjbyBlIGNvbmZpZ3VyYcOnw6NvIGRvIG3Ds2R1bG8gYFBvSTE4bk1vZHVsZWBdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4jaTE4bi1jb25maWcpLlxyXG4gKlxyXG4gKiAqKlV0aWxpemHDp8OjbyBkbyBzZXJ2acOnbyBgUG9JMThuU2VydmljZWA6KipcclxuICpcclxuICogUGFyYSB1dGlsaXphciBvIHNlcnZpw6dvIGJhc3RhIGltcG9ydMOhLWxvIG5vcyBjb21wb25lbnRlcyBxdWUgbmVjZXNzaXRhcmVtIGRlIGxpdGVyYWlzIGUgZmF6ZXIgYSBpbmplw6fDo28gZGVcclxuICogZGVwZW5kw6puY2lhIG5vIGNvbnN0cnV0b3I6XHJcbiAqIGBgYFxyXG4gKiAgaW1wb3J0IHsgUG9JMThuU2VydmljZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICogIC4uLlxyXG4gKiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb0kxOG5TZXJ2aWNlOiBQb0kxOG5TZXJ2aWNlKSB7IH1cclxuICogIC4uLlxyXG4gKiBgYGBcclxuICpcclxuICogUG9yIGZpbSByZWFsaXphciBhIGJ1c2NhIHBlbGFzIGxpdGVyYWlzLCBpbnNjcmV2ZW5kby1zZSBubyBbT2JzZXJ2YWJsZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL29ic2VydmFibGVzKSBwZWxvXHJcbiAqIG3DqXRvZG8gYGdldExpdGVyYWxzKClgLlxyXG4gKlxyXG4gKiA+IE8gbcOpdG9kbyBgZ2V0TGl0ZXJhbHMoKWAgcG9kZSByZWNlYmVyIHVtIG9iamV0byBkbyB0aXBvIGRhIGludGVyZmFjZSBgUG9JMThuTGl0ZXJhbHNgIGNvbW8gcGFyw6JtZXRybyxcclxuICogcG9yw6ltLCBuZW5odW1hIGRhcyBwcm9wcmllZGFkZXMgc8OjbyBvYnJpZ2F0w7NyaWFzLiBDYXNvIG5lbmh1bSBwYXLDom1ldHJvIHNlamEgcGFzc2Fkbywgc2Vyw6NvIGJ1c2NhZGFzXHJcbiAqIHRvZGFzIGFzIGxpdGVyYWlzIGRvIGNvbnRleHRvIGRlZmluaWRvIGNvbSBwYWRyw6NvLCBubyBpZGlvbWEgZGVmaW5pZG8gY29tbyBwYWRyw6NvLlxyXG4gKlxyXG4gKiBFeGVtcGxvcyBkZSByZXF1aXNpw6fDo286XHJcbiAqIGBgYFxyXG4gKiBsaXRlcmFscyA9IHt9O1xyXG4gKiBsaXRlcmFsc0VuID0ge307XHJcbiAqIGxpdGVyYWxzQ3JtID0ge307XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9JMThuU2VydmljZTogUG9JMThuU2VydmljZSkge1xyXG4gKiAgIHBvSTE4blNlcnZpY2UuZ2V0TGl0ZXJhbHMoKVxyXG4gKiAgICAgLnN1YnNjcmliZSgobGl0ZXJhbHMpID0+IHtcclxuICogICAgICAgdGhpcy5saXRlcmFscyA9IGxpdGVyYWxzO1xyXG4gKiAgICAgfSk7XHJcbiAqXHJcbiAqICAgcG9JMThuU2VydmljZS5nZXRMaXRlcmFscyh7Y29udGV4dDogJ2NybScsIGxpdGVyYWxzOiBbJ2FkZCcsICdyZW1vdmUnXX0pXHJcbiAqICAgICAuc3Vic2NyaWJlKChsaXRlcmFscykgPT4ge1xyXG4gKiAgICAgICB0aGlzLmxpdGVyYWxzQ3JtID0gbGl0ZXJhbHM7XHJcbiAqICAgICB9KTtcclxuICpcclxuICogICBwb0kxOG5TZXJ2aWNlLmdldExpdGVyYWxzKHtsYW5ndWFnZTogJ2VuLXVzJ30pXHJcbiAqICAgICAuc3Vic2NyaWJlKChsaXRlcmFscykgPT4ge1xyXG4gKiAgICAgICB0aGlzLmxpdGVyYWxzRW4gPSBsaXRlcmFscztcclxuICogICAgIH0pO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBQYXJhIGFwcmVzZW50YXIgYXMgbGl0ZXJhaXMgY2FwdHVyYWRhcyBhY2ltYSBubyBIVE1MIGRvIGNvbXBvbmVudGUsIGRldmUtc2UgdXRpbGl6YXIgb1xyXG4gKiBzZWd1aW50ZSBjw7NkaWdvOlxyXG4gKlxyXG4gKiA8cHJlIG5nTm9uQmluZGFibGU+XHJcbiAqIHt7IGxpdGVyYWxzPy5hZGQgfX1cclxuICoge3sgbGl0ZXJhbHM/LnJlbW92ZSB9fVxyXG4gKiA8L3ByZT5cclxuICpcclxuICogQ2FzbyBhcyBsaXRlcmFpcyBjb250ZW5oYW0gdmFyacOhdmVpcyBxdWUgcHJlY2lzZW0gc2VyIHN1YnN0aXR1w61kYXMsIHBvZGUtc2UgdXRpbGl6YXIgbyAqcGlwZSogYHBvSTE4bmAuXHJcbiAqIMOJIHBvc3PDrXZlbCBpbmZvcm1hciBwcm9wcmllZGFkZXMgZG8gY29tcG9uZW50ZSBjb21vIGBuYW1lYCBlIGBuaWNrbmFtZWAgb3VcclxuICogaW5mb3JtYXIgbyB2YWxvciBkaXJldGFtZW50ZSBjb20gXCJcIiBvdSBuw7ptZXJvLCBjb25mb3JtZSBvIGV4ZW1wbG8gYWJhaXhvOlxyXG4gKlxyXG4gKiA8cHJlIG5nTm9uQmluZGFibGU+XHJcbiAqIHt7IGxpdGVyYWxzPy5wZW9wbGUgfCBwb0kxOG46WzEyMF0gfX1cclxuICoge3sgbGl0ZXJhbHM/LmdyZWV0aW5nIHwgcG9JMThuOltuYW1lLCBuaWNrbmFtZV0gfX1cclxuICoge3sgbGl0ZXJhbHM/LmdyZWV0aW5nIHwgcG9JMThuOltcIkJyYWRcIiwgXCJHcmVlblwiXSB9fVxyXG4gKiA8L3ByZT5cclxuICpcclxuICogPiDDiSBpbXBvcnRhbnRlIG8gdXNvIGRvIG9wZXJhZG9yIGA/YCAoRWx2aXMpIHBhcmEgZXZpdGFyIGVycm9zIGVucXVhbnRvIGFzIGxpdGVyYWlzIG7Do28gZm9yZW0gY2FycmVnYWRhcy5cclxuICpcclxuICogIyMjIFRlc3RlIHVuaXTDoXJpb1xyXG4gKlxyXG4gKiBBYmFpeG8gc2VndWUgdW0gZXhlbXBsbyBkZSAqc2V0dXAqIGluaWNpYWwgZGUgdGVzdGUgdW5pdMOhcmlvIGRvICpBcHBDb21wb25lbnQqIHF1ZSB1dGlsaXphIG8gYFBvSTE4blNlcnZpY2VgOlxyXG4gKlxyXG4gKiA+IEF0ZW7Dp8OjbzogbsOjbyBkZWNsYXJhciBvIGBQb0kxOG5TZXJ2aWNlYCBubyBwcm92aWRlcnMgZG8gVGVzdEJlZCBwb2lzIGEgYmlibGlvdGVjYSByZWFsaXphIGEgaW5qZcOnw6NvIGRlIGRlcGVuZMOqbmNpYSBkZSBmb3JtYSBkaW7Dom1pY2EuXHJcbiAqID4gU2UgbyBzZXJ2acOnbyBmb3IgZGVjbGFyYWRvIG8gdGVzdGUgbsOjbyBmYXLDoSBhIGluamXDp8OjbyBlIG8gdGVzdGUgYXByZXNlbnRhcsOhIGVycm9zLlxyXG4gKlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgYXN5bmMsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50VGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwL3Rlc3RpbmcnO1xyXG4gKlxyXG4gKiBpbXBvcnQgeyBQb0kxOG5Nb2R1bGUgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAqXHJcbiAqIGltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbiAqXHJcbiAqIGRlc2NyaWJlKCdBcHBDb21wb25lbnQnLCAoKSA9PiB7XHJcbiAqICAgY29uc3QgYW5vdGhlclBUID0ge1xyXG4gKiAgICAgdGV4dDogJ3RleHRvJyxcclxuICogICAgIGFkZDogJ2FkaWNpb25hcicsXHJcbiAqICAgICByZW1vdmU6ICdyZW1vdmVyJ1xyXG4gKiAgIH07XHJcbiAqXHJcbiAqICAgY29uc3QgZ2VuZXJhbFBUID0ge1xyXG4gKiAgICAgdGV4dDogJ3RleHRvJyxcclxuICogICAgIGFkZDogJ2FkaWNpb25hcicsXHJcbiAqICAgICByZW1vdmU6ICdyZW1vdmVyJ1xyXG4gKiAgIH07XHJcbiAqXHJcbiAqICAgY29uc3QgY29uZmlnID0ge1xyXG4gKiAgICAgZGVmYXVsdDoge1xyXG4gKiAgICAgICBsYW5ndWFnZTogJ3B0LUJSJyxcclxuICogICAgICAgY29udGV4dDogJ2dlbmVyYWwnLFxyXG4gKiAgICAgICBjYWNoZTogZmFsc2VcclxuICogICAgIH0sXHJcbiAqICAgICBjb250ZXh0czoge1xyXG4gKiAgICAgICBnZW5lcmFsOiB7XHJcbiAqICAgICAgICAgJ3B0LWJyJzogZ2VuZXJhbFBUXHJcbiAqICAgICAgIH0sXHJcbiAqICAgICAgIGFub3RoZXI6IHtcclxuICogICAgICAgICAncHQtYnInOiBhbm90aGVyUFRcclxuICogICAgICAgfVxyXG4gKiAgICAgfVxyXG4gKiAgIH07XHJcbiAqXHJcbiAqICAgYmVmb3JlRWFjaChhc3luYygoKSA9PiB7XHJcbiAqICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xyXG4gKiAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgICAgICBBcHBDb21wb25lbnRcclxuICogICAgICAgXSxcclxuICogICAgICAgaW1wb3J0czogW1xyXG4gKiAgICAgICAgIEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlLFxyXG4gKiAgICAgICAgIFBvSTE4bk1vZHVsZS5jb25maWcoY29uZmlnKVxyXG4gKiAgICAgICBdXHJcbiAqICAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xyXG4gKiAgIH0pKTtcclxuICpcclxuICogICBpdCgnc2hvdWxkIGNyZWF0ZSB0aGUgYXBwJywgYXN5bmMoKCkgPT4ge1xyXG4gKiAgICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XHJcbiAqICAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcclxuICpcclxuICogICAgIGV4cGVjdChhcHApLnRvQmVUcnV0aHkoKTtcclxuICogICB9KSk7XHJcbiAqXHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUG9JMThuQmFzZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgdmFySTE4bjogYW55ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29udGV4dERlZmF1bHQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSB1c2VDYWNoZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VzQ29udGV4dDogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChJMThOX0NPTkZJRykgcHJpdmF0ZSBjb25maWc/OiBQb0kxOG5Db25maWcsXHJcbiAgICBASW5qZWN0KEh0dHBDbGllbnQpIHByaXZhdGUgaHR0cD86IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZT86IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNldENvbmZpZyhjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPGEgaWQ9XCJnZXQtbGFuZ3VhZ2VcIj48L2E+XHJcbiAgICogTcOpdG9kbyBxdWUgcmV0b3JuYSBvIGlkaW9tYSBwYWRyw6NvIGF0aXZvLlxyXG4gICAqXHJcbiAgICogQSBidXNjYSBkZXN0ZSBpZGlvbWEgcGVsbyBtw6l0b2RvIHNlcsOhIGZlaXRhIG5hIHNlZ3VpbnRlIG9yZGVtOlxyXG4gICAqXHJcbiAgICogICAxIC0gbyBpZGlvbWEgcXVlIGZvaSBhcm1hemVuYWRvIG5vICpsb2NhbFN0b3JhZ2UqLCBhdHJhdsOpcyBkbyBtw6l0b2RvIFtgc2V0TGFuZ3VhZ2UoKWBdKGRvY3VtZW50YXRpb24vcG8taTE4biNzZXRMYW5ndWFnZSkuXHJcbiAgICpcclxuICAgKiAgIDIgLSBvIHZhbG9yIGluc2VyaWRvIG5vIG3Ds2R1bG8gZG8gaTE4biBhdHJhdsOpcyBkbyBwYXLDom1ldHJvIGBjb25maWdgLCBzZW5kbyBvIGlkaW9tYSBpbnNlcmlkbyBuYSBwcm9wcmllZGFkZVxyXG4gICAqIGBsYW5ndWFnZWAgZGEgaW50ZXJmYWNlIFtgUG9JMThuQ29uZmlnRGVmYXVsdGBdKGRvY3VtZW50YXRpb24vcG8taTE4biNwb0kxOG5Db25maWdEZWZhdWx0KS5cclxuICAgKlxyXG4gICAqICAgMyAtIG8gaWRpb21hIGRvIG5hdmVnYWRvciB1dGlsaXphZG8uXHJcbiAgICpcclxuICAgKiA+IENhc28gbyBpZGlvbWEgZG8gbmF2ZWdhZG9yIG7Do28gc2VqYSBzdXBvcnRhZG8gcGVsbyBQTyAoYHB0YCwgYGVuYCwgYGVzYCBvdSBgcnVgKSwgc2Vyw6EgcmV0b3JuYWRvIHZhbG9yIGBwdGAuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzaWdsYSBkbyBpZGlvbWEgcGFkcsOjby5cclxuICAgKi9cclxuICBnZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRMaXRlcmFscyhvcHRpb25zOiBQb0kxOG5MaXRlcmFscyA9IHt9KTogT2JzZXJ2YWJsZTxvYmplY3Q+IHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gb3B0aW9uc1snbGFuZ3VhZ2UnXSA/IG9wdGlvbnNbJ2xhbmd1YWdlJ10udG9Mb3dlckNhc2UoKSA6IHRoaXMuZ2V0TGFuZ3VhZ2UoKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zWydjb250ZXh0J10gPyBvcHRpb25zWydjb250ZXh0J10gOiB0aGlzLmNvbnRleHREZWZhdWx0O1xyXG4gICAgY29uc3QgbGl0ZXJhbHM6IEFycmF5PHN0cmluZz4gPSBvcHRpb25zWydsaXRlcmFscyddID8gb3B0aW9uc1snbGl0ZXJhbHMnXSA6IFtdO1xyXG5cclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNlcnZpY2VzQ29udGV4dFtjb250ZXh0XSkge1xyXG4gICAgICAgIC8vIEZheiBvIHByb2Nlc3NvIGRlIGJ1c2NhIGRlIHVtIGNvbnRleHRvIHF1ZSBjb250w6ltIHNlcnZpw6dvXHJcbiAgICAgICAgdGhpcy5nZXRMaXRlcmFsc0Zyb21Db250ZXh0U2VydmljZShsYW5ndWFnZSwgY29udGV4dCwgbGl0ZXJhbHMsIG9ic2VydmVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGYXogbyBwcm9jZXNzbyBkZSBidXNjYSBkZSB1bSBjb250ZXh0byBxdWUgdXRpbGl6YSBjb25zdGFudGVcclxuICAgICAgICB0aGlzLmdldExpdGVyYWxzRnJvbUNvbnRleHRDb25zdGFudChsYW5ndWFnZSwgY29udGV4dCwgbGl0ZXJhbHMsIG9ic2VydmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHF1ZSByZXRvcm5hIG8gaWRpb21hIHBhZHLDo28gYXRpdm8sIGNvbSBzb21lbnRlIGEgYWJyZXZpYcOnw6NvIGRvIGlkaW9tYSAoZHVhcyBwcmltZWlyYXMgbGV0cmFzKS5cclxuICAgKiBQb3IgZXhlbXBsbzogXCJwdFwiIG91IFwiZXNcIi5cclxuICAgKlxyXG4gICAqIEEgYnVzY2EgZGVzdGUgaWRpb21hIMOpIGJhc2VhZGEgbm8gbcOpdG9kbyBbKipnZXRMYW5ndWFnZSgpKipdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4jZ2V0LWxhbmd1YWdlKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHNpZ2xhIGRvIGlkaW9tYSBwYWRyw6NvLlxyXG4gICAqL1xyXG4gIGdldFNob3J0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA8YSBpZD1cInNldExhbmd1YWdlXCI+PC9hPlxyXG4gICAqIE3DqXRvZG8gcGFyYSBhbHRlcmFyIG8gaWRpb21hIHBhZHLDo28gZG8gbcOzZHVsbyBkbyBpMThuLlxyXG4gICAqXHJcbiAgICogQW8gdXRpbGl6YXIgZXN0ZSBtw6l0b2RvLCBvIGlkaW9tYSBmaWNhcsOhIGdyYXZhZG8gbm8gYXJtYXplbmFtZW50byBsb2NhbCBkbyBuYXZlZ2Fkb3IsIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGVsb1xyXG4gICAqIHNlcnZpw6dvIGRvIGBpMThuYCBwYXJhIGJ1c2NhciBhcyBsaXRlcmFpcyBubyBpZGlvbWEgcGFkcsOjby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBTaWdsYSBkbyBpZGlvbWEuXHJcbiAgICpcclxuICAgKiBFc3RhIHNpZ2xhIGRldmUgc2VyIGNvbXBvc3RhIHBvciBkdWFzIGxldHJhcyByZXByZXNlbnRhbmRvIG8gaWRpb21hLFxyXG4gICAqIHBvZGVuZG8gc2VyIGFkaWNpb25hZG8gb3V0cmFzIGR1YXMgbGV0cmFzIHJlcHJlc2VudGFuZG8gbyBwYcOtcywgcG9yIGV4ZW1wbG86IGBwdGAsIGBwdC1CUmAsIGBwdC1icmAsIGBlbmAgb3UgYGVuLVVTYC5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBzZWphIGluZm9ybWFkbyB1bSB2YWxvciBkaWZlcmVudGUgZGVzdGUgcGFkcsOjbywgbyBtZXNtbyBzZXLDoSBpZ25vcmFkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIEluZGljYSBzZSBhIHDDoWdpbmEgYXR1YWwgcG9kZXLDoSBzZXIgcmVjYXJyZWdhZGEgYXDDs3MgYSBhbHRlcmHDp8OjbyBkbyBpZGlvbWEuXHJcbiAgICpcclxuICAgKiBFc3RlIHJlY3Vyc28gcG9kZSBzZXIgw7p0aWwgcGFyYSBvcyB1c3XDoXJpb3MgcXVlIHV0aWxpemFtIG8gbcOpdG9kbyBgZ2V0TGl0ZXJhbHMoKWAgZG8gc2VydmnDp28gZG8gaTE4biBwYXJhIHBvZGVyXHJcbiAgICogYnVzY2FyIG5vdmFtZW50ZSBhcyBsaXRlcmFpcyBubyBub3ZvIGlkaW9tYSBjb25maWd1cmFkby5cclxuICAgKi9cclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nLCByZWxvYWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFpc0xhbmd1YWdlKGxhbmd1YWdlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2Uuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG5cclxuICAgIGlmIChyZWxvYWQpIHtcclxuICAgICAgcmVsb2FkQ3VycmVudFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29uZmlnKGNvbmZpZzogUG9JMThuQ29uZmlnKSB7XHJcbiAgICAvLyBTZXRhIGFzIGNvbmZpZ3VyYcOnw7VlcyBwYWRyw7VlcyBkZWZpbmlkYXMgbm8gaW1wb3J0YcOnw6NvIGRvIG3Ds2R1bG9cclxuICAgIGlmIChjb25maWdbJ2RlZmF1bHQnXSkge1xyXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5zZXRMYW5ndWFnZURlZmF1bHQoY29uZmlnWydkZWZhdWx0J11bJ2xhbmd1YWdlJ10pO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0RGVmYXVsdCA9IGNvbmZpZ1snZGVmYXVsdCddWydjb250ZXh0J10gPyBjb25maWdbJ2RlZmF1bHQnXVsnY29udGV4dCddIDogJyc7XHJcbiAgICAgIHRoaXMudXNlQ2FjaGUgPSBjb25maWdbJ2RlZmF1bHQnXVsnY2FjaGUnXSA/IGNvbmZpZ1snZGVmYXVsdCddWydjYWNoZSddIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FycmVnYSBhIGxpc3RhIGRvcyBjb250ZXh0b3MgZSBhcyBjb250YW50ZXMgaW5mb3JtYWRhc1xyXG4gICAgaWYgKGNvbmZpZ1snY29udGV4dHMnXSkge1xyXG4gICAgICB0aGlzLnNldFZhckkxOG4oY29uZmlnWydjb250ZXh0cyddKTtcclxuXHJcbiAgICAgIC8vIFNlIG5lbmh1bSBjb250ZXh0byBmb2kgZGVmaW5pZG8gY29tbyBwYWRyw6NvLFxyXG4gICAgICAvLyBlbnTDo28gZGVmaW5lIG8gcHJpbWVpcm8gY29udGV4dG9cclxuICAgICAgaWYgKCF0aGlzLmNvbnRleHREZWZhdWx0KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZXh0IGluIGNvbmZpZ1snY29udGV4dHMnXSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnWydjb250ZXh0cyddLmhhc093blByb3BlcnR5KGNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dERlZmF1bHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFByb2Nlc3NvIGRlIGJ1c2NhIGRlIHVtIGNvbnRleHRvIHF1ZSBjb250w6ltIHNlcnZpw6dvLlxyXG4gIC8vICAgIDEgLSBQcm9jdXJhIG5hIHZhcmnDoXZlbCBJMThuIGRlc3RlIHNlcnZpw6dvXHJcbiAgLy8gICAgMiAtIFByb2N1cmEgbm8gbG9jYWwgc3RvcmFnZSAoU2UgbyBjYWNoZSBlc3RpdmVyIGRlZmluaWRvIGNvbW8gdHJ1ZSBuYSBjb25maWd1cmHDp8OjbyBkbyBtw7NkdWxvKVxyXG4gIC8vICAgIDMgLSBEaXNwYXJhIG8gc2VydmnDp28sIG1lc21vIHF1ZSBqw6EgdGVuaGEgZW5jb250cmFkbyBubyBsb2NhbCBzdG9yYWdlLCBwYXJhIGdhcmFudGlyIGEgYXR1YWxpemHDp8Ojb1xyXG4gIC8vICAgIDQgLSBTZSBuZW5odW1hIGxpdGVyYWwgZm9yIGVuY29udHJhZGEsIGVudMOjbyBidXNjYSBlbSBwdC1iclxyXG4gIHByaXZhdGUgZ2V0TGl0ZXJhbHNGcm9tQ29udGV4dFNlcnZpY2UoXHJcbiAgICBsYW5ndWFnZTogc3RyaW5nLFxyXG4gICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgbGl0ZXJhbHM6IEFycmF5PHN0cmluZz4sXHJcbiAgICBvYnNlcnZlcjogYW55LFxyXG4gICAgdHJhbnNsYXRpb25zOiBhbnkgPSB7fSxcclxuICAgIGxhbmd1YWdlQWx0ZXJuYXRpdmU6IHN0cmluZyA9IG51bGxcclxuICApIHtcclxuICAgIC8vIElkaW9tYSB1c2FkbyBwYXJhIHRlbnRhciBidXNjYXIgYXMgbGl0ZXJhaXMgZmFsdGFudGVzXHJcbiAgICBjb25zdCBsYW5ndWFnZVNlYXJjaCA9IGxhbmd1YWdlQWx0ZXJuYXRpdmUgPyBsYW5ndWFnZUFsdGVybmF0aXZlIDogbGFuZ3VhZ2U7XHJcblxyXG4gICAgdHJhbnNsYXRpb25zID0gdGhpcy5tZXJnZU9iamVjdCh0cmFuc2xhdGlvbnMsIHRoaXMuc2VhcmNoSW5WYXJJMThuKGxhbmd1YWdlU2VhcmNoLCBjb250ZXh0LCBsaXRlcmFscykpO1xyXG5cclxuICAgIGlmICh0aGlzLmNvdW50T2JqZWN0KHRyYW5zbGF0aW9ucykgPiAwKSB7XHJcbiAgICAgIG9ic2VydmVyLm5leHQodHJhbnNsYXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWFsaXphIGEgYnVzY2Egbm8gbG9jYWxTdG9yYWdlIGUgZW0gc2VndWlkYSBubyBzZXJ2acOnb1xyXG4gICAgdGhpcy5nZXRMaXRlcmFsc0xvY2FsU3RvcmFnZUFuZENhY2hlKFxyXG4gICAgICBsYW5ndWFnZVNlYXJjaCxcclxuICAgICAgY29udGV4dCxcclxuICAgICAgbGl0ZXJhbHMsXHJcbiAgICAgIG9ic2VydmVyLFxyXG4gICAgICB0cmFuc2xhdGlvbnMsXHJcbiAgICAgIGxhbmd1YWdlQWx0ZXJuYXRpdmVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBQcm9jdXJhIG5vIGxvY2FsIHN0b3JhZ2UgZSBlbSBzZWd1aWRhIG5vIHNlcnZpw6dvXHJcbiAgLy8gQ2FzbyBuw6NvIGVuY29udHJlIG5lbSBubyBzZXJ2acOnbywgcmVjb21lw6dhIGEgYnVzY2EgZW0gcHQtYnJcclxuICBwcml2YXRlIGdldExpdGVyYWxzTG9jYWxTdG9yYWdlQW5kQ2FjaGUoXHJcbiAgICBsYW5ndWFnZTogc3RyaW5nLFxyXG4gICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgbGl0ZXJhbHM6IEFycmF5PHN0cmluZz4sXHJcbiAgICBvYnNlcnZlcjogYW55LFxyXG4gICAgdHJhbnNsYXRpb25zOiBhbnksXHJcbiAgICBsYW5ndWFnZUFsdGVybmF0aXZlOiBzdHJpbmcgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZVNlYXJjaCA9IGxhbmd1YWdlQWx0ZXJuYXRpdmUgPyBsYW5ndWFnZUFsdGVybmF0aXZlIDogbGFuZ3VhZ2U7XHJcbiAgICBsZXQgdHJhbnNsYXRpb25UZW1wO1xyXG4gICAgLy8gVmVyaWZpY2Egc2UgdXNhIGNhY2hlXHJcbiAgICBpZiAodGhpcy51c2VDYWNoZSkge1xyXG4gICAgICB0cmFuc2xhdGlvblRlbXAgPSB0aGlzLnNlYXJjaEluTG9jYWxTdG9yYWdlKGxhbmd1YWdlU2VhcmNoLCBjb250ZXh0LCBsaXRlcmFscyk7XHJcbiAgICAgIGlmICh0aGlzLmNvdW50T2JqZWN0KHRyYW5zbGF0aW9uVGVtcCkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYXJJMThuKGxhbmd1YWdlLCBjb250ZXh0LCB0cmFuc2xhdGlvblRlbXApO1xyXG4gICAgICAgIHRyYW5zbGF0aW9ucyA9IHRoaXMubWVyZ2VPYmplY3QodHJhbnNsYXRpb25UZW1wLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgIG9ic2VydmVyLm5leHQodHJhbnNsYXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1c2NhIGRvIFNlcnZpw6dvXHJcbiAgICB0aGlzLmdldEh0dHBTZXJ2aWNlKHRoaXMuc2VydmljZXNDb250ZXh0W2NvbnRleHRdLCBsYW5ndWFnZVNlYXJjaCwgbGl0ZXJhbHMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKGxhbmd1YWdlLCBjb250ZXh0LCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYXJJMThuKGxhbmd1YWdlLCBjb250ZXh0LCByZXNwb25zZSk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25UZW1wID0gdGhpcy5zZWFyY2hJblZhckkxOG4obGFuZ3VhZ2UsIGNvbnRleHQsIGxpdGVyYWxzKTtcclxuICAgICAgICB0cmFuc2xhdGlvbnMgPSB0aGlzLm1lcmdlT2JqZWN0KHRyYW5zbGF0aW9uVGVtcCwgdHJhbnNsYXRpb25zKTtcclxuICAgICAgICBvYnNlcnZlci5uZXh0KHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IHRvZGFzIGFzIGxpdGVyYWlzIHBlc3F1aXNhZGFzIG5vIGlkaW9tYVxyXG4gICAgICAvLyBFbnTDo28gcmVmYXogbyBwcm9jZXNzbyBwcm9jdXJhbmRvIGVtIHBvcnR1Z3XDqnNcclxuICAgICAgaWYgKGxpdGVyYWxzLmxlbmd0aCA+IHRoaXMuY291bnRPYmplY3QodHJhbnNsYXRpb25zKSkge1xyXG4gICAgICAgIGlmIChsYW5ndWFnZUFsdGVybmF0aXZlID09PSAncHQtYnInKSB7XHJcbiAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBuZW0gZW0gcG9ydHVndcOqcywgZW50w6NvIHJldG9ybmEgbyBub21lIGRhcyBsaXRlcmFpc1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25zID0gdGhpcy5jb21wbGV0ZUZhdWx0TGl0ZXJhbHMobGFuZ3VhZ2UsIGNvbnRleHQsIGxpdGVyYWxzLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UobGFuZ3VhZ2UsIGNvbnRleHQsIHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhckkxOG4obGFuZ3VhZ2UsIGNvbnRleHQsIHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2V0TGl0ZXJhbHNGcm9tQ29udGV4dFNlcnZpY2UobGFuZ3VhZ2UsIGNvbnRleHQsIGxpdGVyYWxzLCBvYnNlcnZlciwgdHJhbnNsYXRpb25zLCAncHQtYnInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUHJvY3VyYSBwZWxhIGxpc3RhIGRlIGxpdGVyYWlzXHJcbiAgLy8gU2UgbsOjbyBlbmNvbnRyYXIgdG9kYXMsIHByb2N1cmEgZW0gcHQtYnJcclxuICBwcml2YXRlIGdldExpdGVyYWxzRnJvbUNvbnRleHRDb25zdGFudChcclxuICAgIGxhbmd1YWdlOiBzdHJpbmcsXHJcbiAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICBsaXRlcmFsczogQXJyYXk8c3RyaW5nPixcclxuICAgIG9ic2VydmVyOiBhbnksXHJcbiAgICB0cmFuc2xhdGlvbnM6IGFueSA9IHt9XHJcbiAgKSB7XHJcbiAgICB0cmFuc2xhdGlvbnMgPSB0aGlzLm1lcmdlT2JqZWN0KHRyYW5zbGF0aW9ucywgdGhpcy5zZWFyY2hJblZhckkxOG4obGFuZ3VhZ2UsIGNvbnRleHQsIGxpdGVyYWxzKSk7XHJcbiAgICBpZiAodGhpcy5jb3VudE9iamVjdCh0cmFuc2xhdGlvbnMpID4gMCkge1xyXG4gICAgICBvYnNlcnZlci5uZXh0KHRyYW5zbGF0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2UgZm9pIHBlc3F1aXNhZG8gcG9yIGxpdGVyYWlzXHJcbiAgICBpZiAobGl0ZXJhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSB0b2RhcyBhcyBsaXRlcmFpcyBwZXNxdWlzYWRhcyBubyBpZGlvbWEsIHByb2N1cmEgZW0gcG9ydHVndcOqc1xyXG4gICAgICBpZiAobGl0ZXJhbHMubGVuZ3RoID4gdGhpcy5jb3VudE9iamVjdCh0cmFuc2xhdGlvbnMpKSB7XHJcbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSAncHQtYnInKSB7XHJcbiAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBuZW0gZW0gcG9ydHVndcOqcywgZW50w6NvIHJldG9ybmEgbyBub21lIGRhcyBsaXRlcmFpc1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25zID0gdGhpcy5jb21wbGV0ZUZhdWx0TGl0ZXJhbHMobGFuZ3VhZ2UsIGNvbnRleHQsIGxpdGVyYWxzLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdldExpdGVyYWxzRnJvbUNvbnRleHRDb25zdGFudCgncHQtYnInLCBjb250ZXh0LCBsaXRlcmFscywgb2JzZXJ2ZXIsIHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZSBuw6NvIGVuY29udHJhciBuZW5odW1hIGxpdGVyYWwsIHByb2N1cmEgZW0gcG9ydHVndcOqc1xyXG4gICAgICBpZiAodGhpcy5jb3VudE9iamVjdCh0cmFuc2xhdGlvbnMpID09PSAwICYmIGxhbmd1YWdlICE9PSAncHQtYnInKSB7XHJcbiAgICAgICAgdGhpcy5nZXRMaXRlcmFsc0Zyb21Db250ZXh0Q29uc3RhbnQoJ3B0LWJyJywgY29udGV4dCwgbGl0ZXJhbHMsIG9ic2VydmVyLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjYXNvIG7Do28gaW5mb3JtYXIgbGl0ZXJhaXMgZSBuw6NvIGhvdXZlciB0cmFkdcOnw6NvXHJcbiAgICAgIG9ic2VydmVyLm5leHQodHJhbnNsYXRpb25zKTtcclxuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEJ1c2NhIHBlbGFzIGxpdGVyYWlzIG5vIGxvY2FsIHN0b3JhZ2VcclxuICBwcml2YXRlIHNlYXJjaEluTG9jYWxTdG9yYWdlKGxhbmd1YWdlOiBzdHJpbmcsIGNvbnRleHQ6IHN0cmluZywgbGl0ZXJhbHM6IEFycmF5PHN0cmluZz4pOiBhbnkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zOiBhbnkgPSB7fTtcclxuXHJcbiAgICBpZiAobGl0ZXJhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpdGVyYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGl0ZXJhbCA9IGxpdGVyYWxzW2ldO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obGFuZ3VhZ2UgKyAnLScgKyBjb250ZXh0ICsgJy0nICsgbGl0ZXJhbCk7XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvbnNbbGl0ZXJhbF0gPSB0cmFuc2xhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvLyBCdXNjYSBwZWxhcyBsaXRlcmFpcyBuYSB2YXJpw6F2ZWwgZG8gc2VydmnDp29cclxuICBwcml2YXRlIHNlYXJjaEluVmFySTE4bihsYW5ndWFnZTogc3RyaW5nLCBjb250ZXh0OiBzdHJpbmcsIGxpdGVyYWxzOiBBcnJheTxzdHJpbmc+KTogYW55IHtcclxuICAgIGxldCB0cmFuc2xhdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLnZhckkxOG5bbGFuZ3VhZ2VdICYmIHRoaXMudmFySTE4bltsYW5ndWFnZV1bY29udGV4dF0pIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudmFySTE4bltsYW5ndWFnZV1bY29udGV4dF07XHJcblxyXG4gICAgICBpZiAobGl0ZXJhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIEJ1c2NhIGFzIGxpdGVyYWlzIGRlc2VqYWRhc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGl0ZXJhbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGxpdGVyYWwgPSBsaXRlcmFsc1tpXTtcclxuICAgICAgICAgIGlmIChjb250ZW50Lmhhc093blByb3BlcnR5KGxpdGVyYWwpKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tsaXRlcmFsXSA9IGNvbnRlbnRbbGl0ZXJhbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEF0cmlidWkgdG9kYXMgYXMgbGl0ZXJhaXNcclxuICAgICAgICB0cmFuc2xhdGlvbnMgPSB7IC4uLmNvbnRlbnQgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuICB9XHJcblxyXG4gIC8vIEF0dWFsaXphIG8gbG9jYWwgc3RvcmFnZVxyXG4gIHByaXZhdGUgdXBkYXRlTG9jYWxTdG9yYWdlKGxhbmd1YWdlOiBzdHJpbmcsIGNvbnRleHQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBpZiAodGhpcy51c2VDYWNoZSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpdGVyYWwgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsYW5ndWFnZSArICctJyArIGNvbnRleHQgKyAnLScgKyBsaXRlcmFsLCBkYXRhW2xpdGVyYWxdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXR1YWxpemEgYSB2YXJpw6F2ZWwgbG9jYWwgY29tIGFzIGxpdGVyYWlzIGNvbSBvcyBvYmpldG9zIHBhc3NhZG9zIG5hIGNvbmZpZ3VyYcOnw6NvXHJcbiAgcHJpdmF0ZSBzZXRWYXJJMThuKGNvbnRleHRzOiBPYmplY3QpIHtcclxuICAgIC8vIFBlcmNvcnJlIG9zIGNvbnRleHRvc1xyXG4gICAgZm9yIChjb25zdCBjb250ZXh0IG9mIE9iamVjdC5rZXlzKGNvbnRleHRzKSkge1xyXG4gICAgICBjb25zdCBjb250ZXh0Q29udGVudCA9IGNvbnRleHRzW2NvbnRleHRdO1xyXG4gICAgICAvLyBQZXJjb3JyZSBvcyBpZGlvbWFzIGRlbnRybyBkbyBjb250ZXh0b1xyXG4gICAgICBmb3IgKGNvbnN0IGxhbmd1YWdlIG9mIE9iamVjdC5rZXlzKGNvbnRleHRDb250ZW50KSkge1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlQ29udGVudCA9IGNvbnRleHRDb250ZW50W2xhbmd1YWdlXTtcclxuICAgICAgICBpZiAobGFuZ3VhZ2UgPT09ICd1cmwnKSB7XHJcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzQ29udGV4dFtjb250ZXh0XSA9IGxhbmd1YWdlQ29udGVudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVWYXJJMThuKGxhbmd1YWdlLCBjb250ZXh0LCBsYW5ndWFnZUNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXR1YWxpemEgYSB2YXJpw6F2ZWwgbG9jYWwgY29tIGFzIGxpdGVyYWlzIGlkaW9tYSBlIGNvbnRleHRvXHJcbiAgcHJpdmF0ZSB1cGRhdGVWYXJJMThuKGxhbmd1YWdlOiBzdHJpbmcsIGNvbnRleHQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBsYW5ndWFnZSA9IGxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnZhckkxOG5bbGFuZ3VhZ2VdKSB7XHJcbiAgICAgIHRoaXMudmFySTE4bltsYW5ndWFnZV0gPSB7IFtjb250ZXh0XToge30gfTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy52YXJJMThuW2xhbmd1YWdlXVtjb250ZXh0XSkge1xyXG4gICAgICB0aGlzLnZhckkxOG5bbGFuZ3VhZ2VdW2NvbnRleHRdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JpYSBvdSBhdHVhbGl6YSBvIGNvbnRleHRvIGRlbnRybyBkbyBzdG9yYWdlXHJcbiAgICB0aGlzLnZhckkxOG5bbGFuZ3VhZ2VdW2NvbnRleHRdID0gdGhpcy5tZXJnZU9iamVjdChkYXRhLCB0aGlzLnZhckkxOG5bbGFuZ3VhZ2VdW2NvbnRleHRdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SHR0cFNlcnZpY2UodXJsOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcsIGxpdGVyYWxzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBsZXQgcGFyYW0gPSAnP2xhbmd1YWdlPScgKyBsYW5ndWFnZTtcclxuICAgIGlmIChsaXRlcmFscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBhcmFtICs9ICcmbGl0ZXJhbHM9JyArIGxpdGVyYWxzLmpvaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYSBiYXJyYSBmaW5hbCBkbyBlbmRlcmXDp29cclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3VybH0ke3BhcmFtfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29tcGxldGEgY29tIG8gbm9tZSBkYSBsaXRlcmFpcywgYXMgcXVlIG7Do28gZm9yYW0gZW5jb250cmFkYXNcclxuICBwcml2YXRlIGNvbXBsZXRlRmF1bHRMaXRlcmFscyhsYW5ndWFnZTogc3RyaW5nLCBjb250ZXh0OiBzdHJpbmcsIGxpdGVyYWxzOiBBcnJheTxzdHJpbmc+LCB0cmFuc2xhdGlvbnM6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXRlcmFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBsaXRlcmFsID0gbGl0ZXJhbHNbaV07XHJcbiAgICAgIGlmICghdHJhbnNsYXRpb25zW2xpdGVyYWxdKSB7XHJcbiAgICAgICAgdHJhbnNsYXRpb25zW2xpdGVyYWxdID0gbGl0ZXJhbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuICB9XHJcblxyXG4gIC8vIENvbnRhIG9zIGF0cmlidXRvcyBkbyBvYmpldG9cclxuICBwcml2YXRlIGNvdW50T2JqZWN0KG9iajogb2JqZWN0KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvLyBGYXogbyBtZXJnZSBkb3Mgb2JqZXRvcywgc2VtcHJlIGRhbmRvIHByZWZlcsOqbmNpYSBwYXJhIG8gcHJpbWVpcm8gb2JqZXRvIGRlIHBhcsOibWV0cm9cclxuICBwcml2YXRlIG1lcmdlT2JqZWN0KG9ialBlcm1hbmVudDogYW55LCBvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIHsgLi4ub2JqLCAuLi5vYmpQZXJtYW5lbnQgfTtcclxuICB9XHJcbn1cclxuIl19