import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoLanguageService } from '../po-language/po-language.service';
import { PoI18nConfig } from './interfaces/po-i18n-config.interface';
import { PoI18nLiterals } from './interfaces/po-i18n-literals.interface';
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
export declare class PoI18nBaseService {
    private config?;
    private http?;
    private languageService?;
    private varI18n;
    private contextDefault;
    private useCache;
    private servicesContext;
    constructor(config?: PoI18nConfig, http?: HttpClient, languageService?: PoLanguageService);
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
    getLanguage(): string;
    getLiterals(options?: PoI18nLiterals): Observable<object>;
    /**
     * Método que retorna o idioma padrão ativo, com somente a abreviação do idioma (duas primeiras letras).
     * Por exemplo: "pt" ou "es".
     *
     * A busca deste idioma é baseada no método [**getLanguage()**](/documentation/po-i18n#get-language).
     *
     * @returns {string} sigla do idioma padrão.
     */
    getShortLanguage(): string;
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
    setLanguage(language: string, reload?: boolean): void;
    private setConfig;
    private getLiteralsFromContextService;
    private getLiteralsLocalStorageAndCache;
    private getLiteralsFromContextConstant;
    private searchInLocalStorage;
    private searchInVarI18n;
    private updateLocalStorage;
    private setVarI18n;
    private updateVarI18n;
    private getHttpService;
    private completeFaultLiterals;
    private countObject;
    private mergeObject;
}