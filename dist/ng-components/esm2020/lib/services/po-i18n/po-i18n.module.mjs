import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PoLanguageService } from './../po-language/po-language.service';
import { I18N_CONFIG } from './po-i18n-config-injection-token';
import { returnPoI18nService, PoI18nService } from './po-i18n.service';
import { PoLanguageModule } from '../po-language/po-language.module';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do serviço `PoI18nService` para controle de idiomas com PO.
 *
 * Para utilização do serviço de idiomas `PoI18nService`, deve-se importar este módulo mesmo já havendo importado
 * o módulo `PoModule`. Na importação deve ser invocado o método `config`, informando um objeto que deve implementar
 * a interface [`PoI18nConfig`](documentation/po-i18n#poI18nConfig) para configuração.
 *
 * <a id="i18n-config"></a>
 * **Exemplo de configuração do módulo do i18n:**
 * ```
 * import { PoI18nConfig } from '@po-ui/ng-components';
 *
 * import { generalEn } from './i18n/general-en';
 * import { generalPt } from './i18n/general-pt';
 *
 * const i18nConfig: PoI18nConfig = {
 *   default: {
 *     language: 'pt-BR',
 *     context: 'general',
 *     cache: true
 *   },
 *   contexts: {
 *     general: {
 *       'pt-BR': generalPt,
 *       'en-US': generalEn
 *     },
 *     hcm: {
 *       url: 'http://10.1.1.1/api/translations/hcm/'
 *     }
 *   }
 * };
 *
 * @NgModule({
 *   declarations: [],
 *   imports: [
 *     PoModule,
 *     PoI18nModule.config(i18nConfig)
 *   ],
 *   bootstrap: [AppComponent]
 * })
 * ```
 *
 * Para cada contexto é possível definir a origem das literais, que podem ser de um serviço REST ou
 * de um objeto. Exemplo:
 *
 * Arquivo general-pt.ts
 * ```
 * export const generalPt = {
 *  add: 'Adicionar',
 *  greeting: 'Prazer, {0} {1}',
 *  people: '{0} Pessoas,
 *  remove: 'Remover'
 * }
 * ```
 *
 * Arquivo general-en.ts
 * ```
 * export const generalEn = {
 *  add: 'Add',
 *  greeting: 'Nice to meet you, {0} {1}',
 *  people: '{0} People,
 *  remove: 'Remove'
 * }
 * ```
 *
 * **Exemplo de configuração de contextos usando constantes externas:**
 * ```
 * import { PoI18nConfig } from '@po-ui/ng-components';
 *
 * import { generalEn } from './i18n/general-en';
 * import { generalPt } from './i18n/general-pt';
 *
 * const i18nConfig: PoI18nConfig = {
 *   contexts: {
 *     general: {
 *       'pt-BR': generalPt, // constantes em arquivos separados
 *       'en-US': generalEn // constantes em arquivos separados
 *     },
 *     crm: {
 *       url: 'http://10.0.0.1:3000/api/translations/crm'
 *     }
 *   },
 *   default: {}
 * }
 * ```
 *
 * **Exemplo de configuração de um contexto utilizando serviço:**
 *
 * Ao optar por utilizar um serviço para configuração de contexto, deverá ser definida a URL
 * específica do contexto, como nos exemplos abaixo:
 *
 *  - http://10.0.0.1:3000/api/translations/crm
 *  - http://10.0.0.1:3000/api/translations/general
 *
 * Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:
 * - **language**: o idioma será sempre passado por parâmetro e é recomendado utilizar uma das linguagens
 * suportadas pelo PO (`pt-br`, `en-us`, `es-es` ou `ru`).
 * - **literals**: as literais serão separadas por vírgula. Caso esse parâmetro não seja informado, o
 * serviço deve retornar todas as literais do idioma.
 *
 * Exemplos de requisição:
 *
 *  - http://10.0.0.1:3000/api/translations/crm?language=pt-br
 *  - http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text
 *
 * > Sempre que o idioma solicitado não for encontrado, será buscado por `pt-br`.
 *
 * Além dos contextos, é possível definir as configurações *default* do sistema na configuração do
 * módulo utilizando a interface [`PoI18nConfig`](documentation/po-i18n#poI18nConfig):
 *
 * **Exemplo de padrões definidos:**
 * ```
 * const i18nConfig: PoI18nConfig = {
 *   contexts: {
 *     general: { }
 *   },
 *   default: {
 *    language: 'pt-BR',
 *    context: 'general',
 *    cache: true
 *   }
 * }
 * ```
 *
 * **Importante:**
 *
 * Recomenda-se que as definições *default* sejam realizadas apenas uma vez na aplicação,
 * preferencialmente no módulo `AppModule`.
 *
 * **i18n com *Lazy loading***
 *
 * Para aplicações que utilizem a abordagem de módulos com carregamento *lazy loading*, caso seja
 * definida outra configuração do `PoI18nModule`, deve-se atentar os seguintes detalhes:
 *
 * - Caso existam literais comuns na aplicação, estas devem ser reimportadas;
 * - Não defina outra *default language* para este módulo. Caso for definida, será sobreposta para
 * toda a aplicação;
 * - Caso precise de módulos carregados via *lazy loading* com linguagens diferentes, utilize o
 * método [`setLanguage()`](documentation/po-i18n#setLanguage) disponibilizado pelo `PoI18nService`
 * para definir a linguagem da aplicação e dos módulos com as linguagens diferentes.
 */
export class PoI18nModule {
    static config(config) {
        return {
            ngModule: PoI18nModule,
            providers: [
                {
                    provide: I18N_CONFIG,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: initializeLanguageDefault,
                    multi: true,
                    deps: [I18N_CONFIG, PoLanguageService]
                },
                {
                    provide: PoI18nService,
                    useFactory: returnPoI18nService,
                    deps: [I18N_CONFIG, HttpClient, PoLanguageService]
                }
            ]
        };
    }
}
PoI18nModule.ɵfac = function PoI18nModule_Factory(t) { return new (t || PoI18nModule)(); };
PoI18nModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoI18nModule });
PoI18nModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [HttpClientModule, PoLanguageModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoI18nModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule, PoLanguageModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoI18nModule, { imports: [HttpClientModule, PoLanguageModule] }); })();
export function initializeLanguageDefault(config, languageService) {
    // eslint-disable-next-line sonarjs/prefer-immediate-return
    const setDefaultLanguage = () => {
        if (config.default.language) {
            languageService.setLanguageDefault(config.default.language);
        }
    };
    return setDefaultLanguage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWkxOG4vcG8taTE4bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThJRztBQUtILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBb0I7UUFDaEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUseUJBQXlCO29CQUNyQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUM7aUJBQ3ZDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDO2lCQUNuRDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3dFQXRCVSxZQUFZOzhEQUFaLFlBQVk7a0VBRmIsZ0JBQWdCLEVBQUUsZ0JBQWdCO3VGQUVqQyxZQUFZO2NBSHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQzthQUM5Qzs7d0ZBQ1ksWUFBWSxjQUZiLGdCQUFnQixFQUFFLGdCQUFnQjtBQTJCOUMsTUFBTSxVQUFVLHlCQUF5QixDQUFDLE1BQW9CLEVBQUUsZUFBa0M7SUFDaEcsMkRBQTJEO0lBQzNELE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDM0IsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vLi4vcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBJMThOX0NPTkZJRyB9IGZyb20gJy4vcG8taTE4bi1jb25maWctaW5qZWN0aW9uLXRva2VuJztcclxuaW1wb3J0IHsgcmV0dXJuUG9JMThuU2VydmljZSwgUG9JMThuU2VydmljZSB9IGZyb20gJy4vcG8taTE4bi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9JMThuQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWkxOG4tY29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICcuLi9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5tb2R1bGUnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNw7NkdWxvIGRvIHNlcnZpw6dvIGBQb0kxOG5TZXJ2aWNlYCBwYXJhIGNvbnRyb2xlIGRlIGlkaW9tYXMgY29tIFBPLlxyXG4gKlxyXG4gKiBQYXJhIHV0aWxpemHDp8OjbyBkbyBzZXJ2acOnbyBkZSBpZGlvbWFzIGBQb0kxOG5TZXJ2aWNlYCwgZGV2ZS1zZSBpbXBvcnRhciBlc3RlIG3Ds2R1bG8gbWVzbW8gasOhIGhhdmVuZG8gaW1wb3J0YWRvXHJcbiAqIG8gbcOzZHVsbyBgUG9Nb2R1bGVgLiBOYSBpbXBvcnRhw6fDo28gZGV2ZSBzZXIgaW52b2NhZG8gbyBtw6l0b2RvIGBjb25maWdgLCBpbmZvcm1hbmRvIHVtIG9iamV0byBxdWUgZGV2ZSBpbXBsZW1lbnRhclxyXG4gKiBhIGludGVyZmFjZSBbYFBvSTE4bkNvbmZpZ2BdKGRvY3VtZW50YXRpb24vcG8taTE4biNwb0kxOG5Db25maWcpIHBhcmEgY29uZmlndXJhw6fDo28uXHJcbiAqXHJcbiAqIDxhIGlkPVwiaTE4bi1jb25maWdcIj48L2E+XHJcbiAqICoqRXhlbXBsbyBkZSBjb25maWd1cmHDp8OjbyBkbyBtw7NkdWxvIGRvIGkxOG46KipcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IFBvSTE4bkNvbmZpZyB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICpcclxuICogaW1wb3J0IHsgZ2VuZXJhbEVuIH0gZnJvbSAnLi9pMThuL2dlbmVyYWwtZW4nO1xyXG4gKiBpbXBvcnQgeyBnZW5lcmFsUHQgfSBmcm9tICcuL2kxOG4vZ2VuZXJhbC1wdCc7XHJcbiAqXHJcbiAqIGNvbnN0IGkxOG5Db25maWc6IFBvSTE4bkNvbmZpZyA9IHtcclxuICogICBkZWZhdWx0OiB7XHJcbiAqICAgICBsYW5ndWFnZTogJ3B0LUJSJyxcclxuICogICAgIGNvbnRleHQ6ICdnZW5lcmFsJyxcclxuICogICAgIGNhY2hlOiB0cnVlXHJcbiAqICAgfSxcclxuICogICBjb250ZXh0czoge1xyXG4gKiAgICAgZ2VuZXJhbDoge1xyXG4gKiAgICAgICAncHQtQlInOiBnZW5lcmFsUHQsXHJcbiAqICAgICAgICdlbi1VUyc6IGdlbmVyYWxFblxyXG4gKiAgICAgfSxcclxuICogICAgIGhjbToge1xyXG4gKiAgICAgICB1cmw6ICdodHRwOi8vMTAuMS4xLjEvYXBpL3RyYW5zbGF0aW9ucy9oY20vJ1xyXG4gKiAgICAgfVxyXG4gKiAgIH1cclxuICogfTtcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFBvTW9kdWxlLFxyXG4gKiAgICAgUG9JMThuTW9kdWxlLmNvbmZpZyhpMThuQ29uZmlnKVxyXG4gKiAgIF0sXHJcbiAqICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICogUGFyYSBjYWRhIGNvbnRleHRvIMOpIHBvc3PDrXZlbCBkZWZpbmlyIGEgb3JpZ2VtIGRhcyBsaXRlcmFpcywgcXVlIHBvZGVtIHNlciBkZSB1bSBzZXJ2acOnbyBSRVNUIG91XHJcbiAqIGRlIHVtIG9iamV0by4gRXhlbXBsbzpcclxuICpcclxuICogQXJxdWl2byBnZW5lcmFsLXB0LnRzXHJcbiAqIGBgYFxyXG4gKiBleHBvcnQgY29uc3QgZ2VuZXJhbFB0ID0ge1xyXG4gKiAgYWRkOiAnQWRpY2lvbmFyJyxcclxuICogIGdyZWV0aW5nOiAnUHJhemVyLCB7MH0gezF9JyxcclxuICogIHBlb3BsZTogJ3swfSBQZXNzb2FzLFxyXG4gKiAgcmVtb3ZlOiAnUmVtb3ZlcidcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQXJxdWl2byBnZW5lcmFsLWVuLnRzXHJcbiAqIGBgYFxyXG4gKiBleHBvcnQgY29uc3QgZ2VuZXJhbEVuID0ge1xyXG4gKiAgYWRkOiAnQWRkJyxcclxuICogIGdyZWV0aW5nOiAnTmljZSB0byBtZWV0IHlvdSwgezB9IHsxfScsXHJcbiAqICBwZW9wbGU6ICd7MH0gUGVvcGxlLFxyXG4gKiAgcmVtb3ZlOiAnUmVtb3ZlJ1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAqKkV4ZW1wbG8gZGUgY29uZmlndXJhw6fDo28gZGUgY29udGV4dG9zIHVzYW5kbyBjb25zdGFudGVzIGV4dGVybmFzOioqXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBQb0kxOG5Db25maWcgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAqXHJcbiAqIGltcG9ydCB7IGdlbmVyYWxFbiB9IGZyb20gJy4vaTE4bi9nZW5lcmFsLWVuJztcclxuICogaW1wb3J0IHsgZ2VuZXJhbFB0IH0gZnJvbSAnLi9pMThuL2dlbmVyYWwtcHQnO1xyXG4gKlxyXG4gKiBjb25zdCBpMThuQ29uZmlnOiBQb0kxOG5Db25maWcgPSB7XHJcbiAqICAgY29udGV4dHM6IHtcclxuICogICAgIGdlbmVyYWw6IHtcclxuICogICAgICAgJ3B0LUJSJzogZ2VuZXJhbFB0LCAvLyBjb25zdGFudGVzIGVtIGFycXVpdm9zIHNlcGFyYWRvc1xyXG4gKiAgICAgICAnZW4tVVMnOiBnZW5lcmFsRW4gLy8gY29uc3RhbnRlcyBlbSBhcnF1aXZvcyBzZXBhcmFkb3NcclxuICogICAgIH0sXHJcbiAqICAgICBjcm06IHtcclxuICogICAgICAgdXJsOiAnaHR0cDovLzEwLjAuMC4xOjMwMDAvYXBpL3RyYW5zbGF0aW9ucy9jcm0nXHJcbiAqICAgICB9XHJcbiAqICAgfSxcclxuICogICBkZWZhdWx0OiB7fVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAqKkV4ZW1wbG8gZGUgY29uZmlndXJhw6fDo28gZGUgdW0gY29udGV4dG8gdXRpbGl6YW5kbyBzZXJ2acOnbzoqKlxyXG4gKlxyXG4gKiBBbyBvcHRhciBwb3IgdXRpbGl6YXIgdW0gc2VydmnDp28gcGFyYSBjb25maWd1cmHDp8OjbyBkZSBjb250ZXh0bywgZGV2ZXLDoSBzZXIgZGVmaW5pZGEgYSBVUkxcclxuICogZXNwZWPDrWZpY2EgZG8gY29udGV4dG8sIGNvbW8gbm9zIGV4ZW1wbG9zIGFiYWl4bzpcclxuICpcclxuICogIC0gaHR0cDovLzEwLjAuMC4xOjMwMDAvYXBpL3RyYW5zbGF0aW9ucy9jcm1cclxuICogIC0gaHR0cDovLzEwLjAuMC4xOjMwMDAvYXBpL3RyYW5zbGF0aW9ucy9nZW5lcmFsXHJcbiAqXHJcbiAqIE9zIGlkaW9tYXMgZSBsaXRlcmFpcyBzZXLDo28gYXV0b21hdGljYW1lbnRlIGJ1c2NhZG9zIGNvbSBwYXLDom1ldHJvcyBuYSBwcsOzcHJpYSBVUkw6XHJcbiAqIC0gKipsYW5ndWFnZSoqOiBvIGlkaW9tYSBzZXLDoSBzZW1wcmUgcGFzc2FkbyBwb3IgcGFyw6JtZXRybyBlIMOpIHJlY29tZW5kYWRvIHV0aWxpemFyIHVtYSBkYXMgbGluZ3VhZ2Vuc1xyXG4gKiBzdXBvcnRhZGFzIHBlbG8gUE8gKGBwdC1icmAsIGBlbi11c2AsIGBlcy1lc2Agb3UgYHJ1YCkuXHJcbiAqIC0gKipsaXRlcmFscyoqOiBhcyBsaXRlcmFpcyBzZXLDo28gc2VwYXJhZGFzIHBvciB2w61yZ3VsYS4gQ2FzbyBlc3NlIHBhcsOibWV0cm8gbsOjbyBzZWphIGluZm9ybWFkbywgb1xyXG4gKiBzZXJ2acOnbyBkZXZlIHJldG9ybmFyIHRvZGFzIGFzIGxpdGVyYWlzIGRvIGlkaW9tYS5cclxuICpcclxuICogRXhlbXBsb3MgZGUgcmVxdWlzacOnw6NvOlxyXG4gKlxyXG4gKiAgLSBodHRwOi8vMTAuMC4wLjE6MzAwMC9hcGkvdHJhbnNsYXRpb25zL2NybT9sYW5ndWFnZT1wdC1iclxyXG4gKiAgLSBodHRwOi8vMTAuMC4wLjE6MzAwMC9hcGkvdHJhbnNsYXRpb25zL2NybT9sYW5ndWFnZT1wdC1iciZsaXRlcmFscz1hZGQscmVtb3ZlLHRleHRcclxuICpcclxuICogPiBTZW1wcmUgcXVlIG8gaWRpb21hIHNvbGljaXRhZG8gbsOjbyBmb3IgZW5jb250cmFkbywgc2Vyw6EgYnVzY2FkbyBwb3IgYHB0LWJyYC5cclxuICpcclxuICogQWzDqW0gZG9zIGNvbnRleHRvcywgw6kgcG9zc8OtdmVsIGRlZmluaXIgYXMgY29uZmlndXJhw6fDtWVzICpkZWZhdWx0KiBkbyBzaXN0ZW1hIG5hIGNvbmZpZ3VyYcOnw6NvIGRvXHJcbiAqIG3Ds2R1bG8gdXRpbGl6YW5kbyBhIGludGVyZmFjZSBbYFBvSTE4bkNvbmZpZ2BdKGRvY3VtZW50YXRpb24vcG8taTE4biNwb0kxOG5Db25maWcpOlxyXG4gKlxyXG4gKiAqKkV4ZW1wbG8gZGUgcGFkcsO1ZXMgZGVmaW5pZG9zOioqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBpMThuQ29uZmlnOiBQb0kxOG5Db25maWcgPSB7XHJcbiAqICAgY29udGV4dHM6IHtcclxuICogICAgIGdlbmVyYWw6IHsgfVxyXG4gKiAgIH0sXHJcbiAqICAgZGVmYXVsdDoge1xyXG4gKiAgICBsYW5ndWFnZTogJ3B0LUJSJyxcclxuICogICAgY29udGV4dDogJ2dlbmVyYWwnLFxyXG4gKiAgICBjYWNoZTogdHJ1ZVxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogKipJbXBvcnRhbnRlOioqXHJcbiAqXHJcbiAqIFJlY29tZW5kYS1zZSBxdWUgYXMgZGVmaW5pw6fDtWVzICpkZWZhdWx0KiBzZWphbSByZWFsaXphZGFzIGFwZW5hcyB1bWEgdmV6IG5hIGFwbGljYcOnw6NvLFxyXG4gKiBwcmVmZXJlbmNpYWxtZW50ZSBubyBtw7NkdWxvIGBBcHBNb2R1bGVgLlxyXG4gKlxyXG4gKiAqKmkxOG4gY29tICpMYXp5IGxvYWRpbmcqKipcclxuICpcclxuICogUGFyYSBhcGxpY2HDp8O1ZXMgcXVlIHV0aWxpemVtIGEgYWJvcmRhZ2VtIGRlIG3Ds2R1bG9zIGNvbSBjYXJyZWdhbWVudG8gKmxhenkgbG9hZGluZyosIGNhc28gc2VqYVxyXG4gKiBkZWZpbmlkYSBvdXRyYSBjb25maWd1cmHDp8OjbyBkbyBgUG9JMThuTW9kdWxlYCwgZGV2ZS1zZSBhdGVudGFyIG9zIHNlZ3VpbnRlcyBkZXRhbGhlczpcclxuICpcclxuICogLSBDYXNvIGV4aXN0YW0gbGl0ZXJhaXMgY29tdW5zIG5hIGFwbGljYcOnw6NvLCBlc3RhcyBkZXZlbSBzZXIgcmVpbXBvcnRhZGFzO1xyXG4gKiAtIE7Do28gZGVmaW5hIG91dHJhICpkZWZhdWx0IGxhbmd1YWdlKiBwYXJhIGVzdGUgbcOzZHVsby4gQ2FzbyBmb3IgZGVmaW5pZGEsIHNlcsOhIHNvYnJlcG9zdGEgcGFyYVxyXG4gKiB0b2RhIGEgYXBsaWNhw6fDo287XHJcbiAqIC0gQ2FzbyBwcmVjaXNlIGRlIG3Ds2R1bG9zIGNhcnJlZ2Fkb3MgdmlhICpsYXp5IGxvYWRpbmcqIGNvbSBsaW5ndWFnZW5zIGRpZmVyZW50ZXMsIHV0aWxpemUgb1xyXG4gKiBtw6l0b2RvIFtgc2V0TGFuZ3VhZ2UoKWBdKGRvY3VtZW50YXRpb24vcG8taTE4biNzZXRMYW5ndWFnZSkgZGlzcG9uaWJpbGl6YWRvIHBlbG8gYFBvSTE4blNlcnZpY2VgXHJcbiAqIHBhcmEgZGVmaW5pciBhIGxpbmd1YWdlbSBkYSBhcGxpY2HDp8OjbyBlIGRvcyBtw7NkdWxvcyBjb20gYXMgbGluZ3VhZ2VucyBkaWZlcmVudGVzLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIFBvTGFuZ3VhZ2VNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0kxOG5Nb2R1bGUge1xyXG4gIHN0YXRpYyBjb25maWcoY29uZmlnOiBQb0kxOG5Db25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFBvSTE4bk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFBvSTE4bk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogSTE4Tl9DT05GSUcsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplTGFuZ3VhZ2VEZWZhdWx0LFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSTE4Tl9DT05GSUcsIFBvTGFuZ3VhZ2VTZXJ2aWNlXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogUG9JMThuU2VydmljZSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHJldHVyblBvSTE4blNlcnZpY2UsXHJcbiAgICAgICAgICBkZXBzOiBbSTE4Tl9DT05GSUcsIEh0dHBDbGllbnQsIFBvTGFuZ3VhZ2VTZXJ2aWNlXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTGFuZ3VhZ2VEZWZhdWx0KGNvbmZpZzogUG9JMThuQ29uZmlnLCBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvbmFyanMvcHJlZmVyLWltbWVkaWF0ZS1yZXR1cm5cclxuICBjb25zdCBzZXREZWZhdWx0TGFuZ3VhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29uZmlnLmRlZmF1bHQubGFuZ3VhZ2UpIHtcclxuICAgICAgbGFuZ3VhZ2VTZXJ2aWNlLnNldExhbmd1YWdlRGVmYXVsdChjb25maWcuZGVmYXVsdC5sYW5ndWFnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gc2V0RGVmYXVsdExhbmd1YWdlO1xyXG59XHJcbiJdfQ==