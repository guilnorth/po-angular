import { Injectable } from '@angular/core';
import { getBrowserLanguage, getShortLanguage, isLanguage } from '../../utils/util';
import { poLocaleDecimalSeparatorList, poLocaleDefault, poLocales, poLocaleThousandSeparatorList } from './po-language.constant';
import * as i0 from "@angular/core";
const poDefaultLanguage = 'PO_DEFAULT_LANGUAGE';
const poLocaleKey = 'PO_USER_LOCALE';
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço responsável por gerenciar as linguagens da aplicação.
 */
export class PoLanguageService {
    constructor() { }
    set languageDefault(language) {
        if (language && isLanguage(language)) {
            localStorage.setItem(poDefaultLanguage, language);
        }
    }
    get languageDefault() {
        return localStorage.getItem(poDefaultLanguage);
    }
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
    getLanguage() {
        const language = localStorage.getItem(poLocaleKey) || this.languageDefault || getBrowserLanguage();
        return language && language.toLowerCase();
    }
    /**
     * @description
     *
     * Método responsável por retornar o idioma *default* da aplicação definido nas configurações do módulo do i18n através
     * do parâmetro `config`.
     *
     * **Retorno:** `string` com a sigla do idioma *default*.
     */
    getLanguageDefault() {
        return this.languageDefault;
    }
    /**
     * @description
     *
     * Método responsável por retornar a abreviação do idioma ativo na aplicação.
     *
     * @default `pt`
     *
     * **Retorno:** `string` com a sigla abreviada do idioma ativo.
     */
    getShortLanguage() {
        const language = this.getLanguage();
        const shortLanguage = getShortLanguage(language);
        return poLocales.includes(shortLanguage) ? shortLanguage : poLocaleDefault;
    }
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
    setLanguage(language) {
        if (!isLanguage(language)) {
            return;
        }
        localStorage.setItem(poLocaleKey, language.toLowerCase());
    }
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
    setLanguageDefault(language) {
        this.languageDefault = language;
    }
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
    getNumberSeparators(language) {
        language = language || this.getShortLanguage();
        const decimal = poLocaleDecimalSeparatorList.find(separator => separator.language === language) ?? {};
        const thousand = poLocaleThousandSeparatorList.find(separator => separator.language === language) ?? {};
        const decimalSeparator = decimal.separator ?? ',';
        const thousandSeparator = thousand.separator ?? '.';
        return { decimalSeparator, thousandSeparator };
    }
}
PoLanguageService.ɵfac = function PoLanguageService_Factory(t) { return new (t || PoLanguageService)(); };
PoLanguageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoLanguageService, factory: PoLanguageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLanguageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRixPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLGVBQWUsRUFDZixTQUFTLEVBQ1QsNkJBQTZCLEVBQzlCLE1BQU0sd0JBQXdCLENBQUM7O0FBRWhDLE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUM7QUFDaEQsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7QUFFckM7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixnQkFBZSxDQUFDO0lBRWhCLElBQUksZUFBZSxDQUFDLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUJHO0lBQ0gsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ25HLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsZ0JBQWdCO1FBQ2QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpELE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILGtCQUFrQixDQUFDLFFBQWdCO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsbUJBQW1CLENBQUMsUUFBaUI7UUFDbkMsUUFBUSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQyxNQUFNLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RyxNQUFNLFFBQVEsR0FBRyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4RyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1FBQ2xELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7a0ZBM0hVLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0QnJvd3Nlckxhbmd1YWdlLCBnZXRTaG9ydExhbmd1YWdlLCBpc0xhbmd1YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgcG9Mb2NhbGVEZWNpbWFsU2VwYXJhdG9yTGlzdCxcclxuICBwb0xvY2FsZURlZmF1bHQsXHJcbiAgcG9Mb2NhbGVzLFxyXG4gIHBvTG9jYWxlVGhvdXNhbmRTZXBhcmF0b3JMaXN0XHJcbn0gZnJvbSAnLi9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5jb25zdCBwb0RlZmF1bHRMYW5ndWFnZSA9ICdQT19ERUZBVUxUX0xBTkdVQUdFJztcclxuY29uc3QgcG9Mb2NhbGVLZXkgPSAnUE9fVVNFUl9MT0NBTEUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VydmnDp28gcmVzcG9uc8OhdmVsIHBvciBnZXJlbmNpYXIgYXMgbGluZ3VhZ2VucyBkYSBhcGxpY2HDp8Ojby5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHNldCBsYW5ndWFnZURlZmF1bHQobGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gICAgaWYgKGxhbmd1YWdlICYmIGlzTGFuZ3VhZ2UobGFuZ3VhZ2UpKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBvRGVmYXVsdExhbmd1YWdlLCBsYW5ndWFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbGFuZ3VhZ2VEZWZhdWx0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocG9EZWZhdWx0TGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgcmV0b3JuYXIgbyBpZGlvbWEgYXRpdm8uXHJcbiAgICpcclxuICAgKiBBIGJ1c2NhIGRvIGlkaW9tYSBzZXLDoSBmZWl0YSBuYSBzZWd1aW50ZSBvcmRlbTpcclxuICAgKlxyXG4gICAqICAgMSAtIG8gaWRpb21hIHF1ZSBmb2kgYXJtYXplbmFkbyBubyAqbG9jYWxTdG9yYWdlKiwgYXRyYXbDqXMgZG8gbcOpdG9kbyBgc2V0TGFuZ3VhZ2UoKWAgdXRpbGl6YWRvIHBlbG8gaTE4bi5cclxuICAgKlxyXG4gICAqICAgMiAtIG8gdmFsb3IgaW5zZXJpZG8gbmFzIGNvbmZpZ3VyYcOnw7VlcyBkbyBtw7NkdWxvIGRvIGkxOG4gYXRyYXbDqXMgZG8gcGFyw6JtZXRybyBgY29uZmlnYCwgc2VuZG8gbyBpZGlvbWEgaW5zZXJpZG9cclxuICAgKiBuYSBwcm9wcmllZGFkZSBgbGFuZ3VhZ2VgIGRhIGludGVyZmFjZSBgUG9JMThuQ29uZmlnRGVmYXVsdGAuXHJcbiAgICpcclxuICAgKiAgIDMgLSBvIGlkaW9tYSBkbyBuYXZlZ2Fkb3IgdXRpbGl6YWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG8gaWRpb21hIGRvIG5hdmVnYWRvciBuw6NvIHNlamEgc3Vwb3J0YWRvIHBlbG8gUE8gKGBwdGAsIGBlbmAsIGBlc2Agb3UgYHJ1YCksIHNlcsOhIHJldG9ybmFkbyB2YWxvciBgcHRgLlxyXG4gICAqXHJcbiAgICogKipSZXRvcm5vOioqIGBzdHJpbmdgIGNvbSBhIHNpZ2xhIGRvIGlkaW9tYSBhdGl2by5cclxuICAgKi9cclxuICBnZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwb0xvY2FsZUtleSkgfHwgdGhpcy5sYW5ndWFnZURlZmF1bHQgfHwgZ2V0QnJvd3Nlckxhbmd1YWdlKCk7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2UgJiYgbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIHJldG9ybmFyIG8gaWRpb21hICpkZWZhdWx0KiBkYSBhcGxpY2HDp8OjbyBkZWZpbmlkbyBuYXMgY29uZmlndXJhw6fDtWVzIGRvIG3Ds2R1bG8gZG8gaTE4biBhdHJhdsOpc1xyXG4gICAqIGRvIHBhcsOibWV0cm8gYGNvbmZpZ2AuXHJcbiAgICpcclxuICAgKiAqKlJldG9ybm86KiogYHN0cmluZ2AgY29tIGEgc2lnbGEgZG8gaWRpb21hICpkZWZhdWx0Ki5cclxuICAgKi9cclxuICBnZXRMYW5ndWFnZURlZmF1bHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIHJldG9ybmFyIGEgYWJyZXZpYcOnw6NvIGRvIGlkaW9tYSBhdGl2byBuYSBhcGxpY2HDp8Ojby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBwdGBcclxuICAgKlxyXG4gICAqICoqUmV0b3JubzoqKiBgc3RyaW5nYCBjb20gYSBzaWdsYSBhYnJldmlhZGEgZG8gaWRpb21hIGF0aXZvLlxyXG4gICAqL1xyXG4gIGdldFNob3J0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpO1xyXG4gICAgY29uc3Qgc2hvcnRMYW5ndWFnZSA9IGdldFNob3J0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG5cclxuICAgIHJldHVybiBwb0xvY2FsZXMuaW5jbHVkZXMoc2hvcnRMYW5ndWFnZSkgPyBzaG9ydExhbmd1YWdlIDogcG9Mb2NhbGVEZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNw6l0b2RvIHBhcmEgc2FsdmFyIG8gaWRpb21hIGRhIGFwbGljYcOnw6NvIG5vICpzdG9yYWdlKiwgdXRpbGl6YWRvIHBlbG8gc2VydmnDp28gZG8gaTE4bi5cclxuICAgKlxyXG4gICAqID4gQW8gZGVmaW5pciB1bSBpZGlvbWEgcG9yIGVzdGUgbcOpdG9kbywgdG9kb3Mgb3MgbcOzZHVsb3MgZGEgYXBsaWNhw6fDo28gdXRpbGl6YXLDo28gbyBpZGlvbWEgZGVmaW5pZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGFuZ3VhZ2Ugc2lnbGEgZG8gaWRpb21hLlxyXG4gICAqXHJcbiAgICogRXN0YSBzaWdsYSBkZXZlIHNlciBjb21wb3N0YSBwb3IgZHVhcyBsZXRyYXMgcmVwcmVzZW50YW5kbyBvIGlkaW9tYSxcclxuICAgKiBwb2RlbmRvIHNlciBhZGljaW9uYWRvIG91dHJhcyBkdWFzIGxldHJhcyByZXByZXNlbnRhbmRvIG8gcGHDrXMsIHBvciBleGVtcGxvOiBgcHRgLCBgcHQtQlJgLCBgcHQtYnJgLCBgZW5gIG91IGBlbi1VU2AuXHJcbiAgICpcclxuICAgKiA+IENhc28gc2VqYSBpbmZvcm1hZG8gdW0gdmFsb3IgZGlmZXJlbnRlIGRlc3RlIHBhZHLDo28sIG8gbWVzbW8gc2Vyw6EgaWdub3JhZG8uXHJcbiAgICovXHJcbiAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCFpc0xhbmd1YWdlKGxhbmd1YWdlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocG9Mb2NhbGVLZXksIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNw6l0b2RvIHF1ZSBkZWZpbmUgbyBpZGlvbWEgY29uZmlndXJhZG8gYSBwYXJ0aXIgZG8gcGFyw6JtZXRybyBgY29uZmlnYCB1dGlsaXphZG8gcGVsbyBtw7NkdWxvIGRvIGkxOG4uXHJcbiAgICpcclxuICAgKiA+IEFvIGRlZmluaXIgdW0gaWRpb21hIHBvciBlc3RlIHNlcnZpw6dvLCBhcGVuYXMgbyBtw7NkdWxvIGRvIGkxOG4gcmVmZXJlbnRlIGEgZXN0YSBjb25maWd1cmHDp8OjbyB1dGlsaXphcsOhIG8gaWRpb21hIGRlZmluaWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGxhbmd1YWdlIHNpZ2xhIGRvIGlkaW9tYS5cclxuICAgKlxyXG4gICAqIEVzdGEgc2lnbGEgZGV2ZSBzZXIgY29tcG9zdGEgcG9yIGR1YXMgbGV0cmFzIHJlcHJlc2VudGFuZG8gbyBpZGlvbWEsXHJcbiAgICogcG9kZW5kbyBzZXIgYWRpY2lvbmFkbyBvdXRyYXMgZHVhcyBsZXRyYXMgcmVwcmVzZW50YW5kbyBvIHBhw61zLCBwb3IgZXhlbXBsbzogYHB0YCwgYHB0LUJSYCwgYHB0LWJyYCwgYGVuYCBvdSBgZW4tVVNgLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIHNlamEgaW5mb3JtYWRvIHVtIHZhbG9yIGRpZmVyZW50ZSBkZXN0ZSBwYWRyw6NvLCBvIG1lc21vIHNlcsOhIGlnbm9yYWRvLlxyXG4gICAqL1xyXG4gIHNldExhbmd1YWdlRGVmYXVsdChsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxhbmd1YWdlRGVmYXVsdCA9IGxhbmd1YWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBNw6l0b2RvIHF1ZSByZXRvcm5hIG8gc2VwYXJhZG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGFuZ3VhZ2Ugc2lnbGEgZG8gaWRpb21hLlxyXG4gICAqXHJcbiAgICogRXN0YSBzaWdsYSBkZXZlIHNlciBjb21wb3N0YSBwb3IgZHVhcyBsZXRyYXMgcmVwcmVzZW50YW5kbyBvIGlkaW9tYVxyXG4gICAqXHJcbiAgICogPiBDYXNvIHNlamEgaW5mb3JtYWRvIHVtIHZhbG9yIGRpZmVyZW50ZSBkZXN0ZSBwYWRyw6NvLCBvIG1lc21vIHNlcsOhIGlnbm9yYWRvLlxyXG4gICAqL1xyXG4gIGdldE51bWJlclNlcGFyYXRvcnMobGFuZ3VhZ2U/OiBzdHJpbmcpIHtcclxuICAgIGxhbmd1YWdlID0gbGFuZ3VhZ2UgfHwgdGhpcy5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgICBjb25zdCBkZWNpbWFsID0gcG9Mb2NhbGVEZWNpbWFsU2VwYXJhdG9yTGlzdC5maW5kKHNlcGFyYXRvciA9PiBzZXBhcmF0b3IubGFuZ3VhZ2UgPT09IGxhbmd1YWdlKSA/PyB7fTtcclxuICAgIGNvbnN0IHRob3VzYW5kID0gcG9Mb2NhbGVUaG91c2FuZFNlcGFyYXRvckxpc3QuZmluZChzZXBhcmF0b3IgPT4gc2VwYXJhdG9yLmxhbmd1YWdlID09PSBsYW5ndWFnZSkgPz8ge307XHJcbiAgICBjb25zdCBkZWNpbWFsU2VwYXJhdG9yID0gZGVjaW1hbC5zZXBhcmF0b3IgPz8gJywnO1xyXG4gICAgY29uc3QgdGhvdXNhbmRTZXBhcmF0b3IgPSB0aG91c2FuZC5zZXBhcmF0b3IgPz8gJy4nO1xyXG5cclxuICAgIHJldHVybiB7IGRlY2ltYWxTZXBhcmF0b3IsIHRob3VzYW5kU2VwYXJhdG9yIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==