import { Input, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { poLocaleDefault } from '../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
export const poNavbarLiteralsDefault = {
    en: {
        navbarLinks: 'Navbar links'
    },
    es: {
        navbarLinks: 'Navbar links'
    },
    pt: {
        navbarLinks: 'Navbar links'
    },
    ru: {
        navbarLinks: 'Navbar связи'
    }
};
/**
 * @description
 *
 * O componente `po-navbar` é um cabeçalho fixo que permite apresentar uma lista de links para facilitar a navegação pelas
 * páginas da aplicação. Também possui ícones com ações.
 *
 * Quando utilizado em uma resolução menor que `768px`, o componente utilizará o menu corrente da aplicação para
 * incluir seus itens.
 *
 * Ao utilizar Navbar com Menu e ambos tiverem logo, será mantido o logo do Navbar.
 */
export class PoNavbarBaseComponent {
    constructor(languageService) {
        this._iconActions = [];
        this._items = [];
        this._shadow = false;
        this.language = poLocaleDefault;
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma lista de ações apresentadas em ícones no lado direito do `po-navbar`.
     */
    set iconActions(value) {
        this._iconActions = Array.isArray(value) ? value : [];
    }
    get iconActions() {
        return this._iconActions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define uma lista de items do `po-navbar`.
     */
    set items(value) {
        this._items = Array.isArray(value) ? value : [];
    }
    get items() {
        return this._items;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com a literal usada na propriedade `p-literals`.
     *
     * Para customizar a literal, basta declarar um objeto do tipo `PoNavbarLiterals` conforme exemplo abaixo:
     *
     * ```
     *  const customLiterals: PoNavbarLiterals = {
     *    navbarLinks: 'Itens de navegação'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-navbar
     *   [p-literals]="customLiterals">
     * </po-navbar>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poNavbarLiteralsDefault[poLocaleDefault],
                ...poNavbarLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poNavbarLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poNavbarLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a logo apresentada `po-navbar`.
     */
    set logo(value) {
        this._logo = value;
        if (this.applicationMenu) {
            this.validateMenuLogo();
        }
    }
    get logo() {
        return this._logo;
    }
    /**
     * @optional
     *
     * @description
     *
     * Aplica uma sombra na parte inferior do `po-navbar`.
     *
     * @default `false`
     */
    set shadow(value) {
        this._shadow = convertToBoolean(value);
    }
    get shadow() {
        return this._shadow;
    }
}
PoNavbarBaseComponent.ɵfac = function PoNavbarBaseComponent_Factory(t) { return new (t || PoNavbarBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoNavbarBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoNavbarBaseComponent, inputs: { iconActions: ["p-icon-actions", "iconActions"], items: ["p-items", "items"], literals: ["p-literals", "literals"], logo: ["p-logo", "logo"], shadow: ["p-shadow", "shadow"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { iconActions: [{
            type: Input,
            args: ['p-icon-actions']
        }], items: [{
            type: Input,
            args: ['p-items']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], logo: [{
            type: Input,
            args: ['p-logo']
        }], shadow: [{
            type: Input,
            args: ['p-shadow']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW5hdmJhci9wby1uYXZiYXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7QUFPbEYsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUc7SUFDckMsRUFBRSxFQUFvQjtRQUNwQixXQUFXLEVBQUUsY0FBYztLQUM1QjtJQUNELEVBQUUsRUFBb0I7UUFDcEIsV0FBVyxFQUFFLGNBQWM7S0FDNUI7SUFDRCxFQUFFLEVBQW9CO1FBQ3BCLFdBQVcsRUFBRSxjQUFjO0tBQzVCO0lBQ0QsRUFBRSxFQUFvQjtRQUNwQixXQUFXLEVBQUUsY0FBYztLQUM1QjtDQUNGLENBQUM7QUFFRjs7Ozs7Ozs7OztHQVVHO0FBRUgsTUFBTSxPQUFnQixxQkFBcUI7SUFxSHpDLFlBQVksZUFBa0M7UUFqSHRDLGlCQUFZLEdBQThCLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXdCLEVBQUUsQ0FBQztRQUdqQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxlQUFlLENBQUM7UUE2R3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQTVHRDs7Ozs7O09BTUc7SUFDSCxJQUE2QixXQUFXLENBQUMsS0FBZ0M7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFzQixLQUFLLENBQUMsS0FBMEI7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXlCRztJQUNILElBQXlCLFFBQVEsQ0FBQyxLQUF1QjtRQUN2RCxJQUFJLEtBQUssWUFBWSxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDO2dCQUMzQyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pDLEdBQUcsS0FBSzthQUNULENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBcUIsSUFBSSxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUF1QixNQUFNLENBQUMsS0FBYztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7MEZBbkhtQixxQkFBcUI7d0VBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRDFDLFNBQVM7b0VBbUJxQixXQUFXO2tCQUF2QyxLQUFLO21CQUFDLGdCQUFnQjtZQWVELEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUztZQWtDUyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFzQkUsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRO1lBb0JRLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBQb01lbnVDb21wb25lbnQgfSBmcm9tICcuLi9wby1tZW51JztcclxuXHJcbmltcG9ydCB7IFBvTmF2YmFySWNvbkFjdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1uYXZiYXItaWNvbi1hY3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9OYXZiYXJJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLW5hdmJhci1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTmF2YmFyTGl0ZXJhbHMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tbmF2YmFyLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9OYXZiYXJMaXRlcmFsc0RlZmF1bHQgPSB7XHJcbiAgZW46IDxQb05hdmJhckxpdGVyYWxzPntcclxuICAgIG5hdmJhckxpbmtzOiAnTmF2YmFyIGxpbmtzJ1xyXG4gIH0sXHJcbiAgZXM6IDxQb05hdmJhckxpdGVyYWxzPntcclxuICAgIG5hdmJhckxpbmtzOiAnTmF2YmFyIGxpbmtzJ1xyXG4gIH0sXHJcbiAgcHQ6IDxQb05hdmJhckxpdGVyYWxzPntcclxuICAgIG5hdmJhckxpbmtzOiAnTmF2YmFyIGxpbmtzJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb05hdmJhckxpdGVyYWxzPntcclxuICAgIG5hdmJhckxpbmtzOiAnTmF2YmFyINGB0LLRj9C30LgnXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLW5hdmJhcmAgw6kgdW0gY2FiZcOnYWxobyBmaXhvIHF1ZSBwZXJtaXRlIGFwcmVzZW50YXIgdW1hIGxpc3RhIGRlIGxpbmtzIHBhcmEgZmFjaWxpdGFyIGEgbmF2ZWdhw6fDo28gcGVsYXNcclxuICogcMOhZ2luYXMgZGEgYXBsaWNhw6fDo28uIFRhbWLDqW0gcG9zc3VpIMOtY29uZXMgY29tIGHDp8O1ZXMuXHJcbiAqXHJcbiAqIFF1YW5kbyB1dGlsaXphZG8gZW0gdW1hIHJlc29sdcOnw6NvIG1lbm9yIHF1ZSBgNzY4cHhgLCBvIGNvbXBvbmVudGUgdXRpbGl6YXLDoSBvIG1lbnUgY29ycmVudGUgZGEgYXBsaWNhw6fDo28gcGFyYVxyXG4gKiBpbmNsdWlyIHNldXMgaXRlbnMuXHJcbiAqXHJcbiAqIEFvIHV0aWxpemFyIE5hdmJhciBjb20gTWVudSBlIGFtYm9zIHRpdmVyZW0gbG9nbywgc2Vyw6EgbWFudGlkbyBvIGxvZ28gZG8gTmF2YmFyLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb05hdmJhckJhc2VDb21wb25lbnQge1xyXG4gIC8vIE1lbnUgcXVlIGVzdGEgc2VuZG8gZXhpYmlkbyBuYSBwYWdpbmEgY29ycmVudGUuXHJcbiAgYXBwbGljYXRpb25NZW51OiBQb01lbnVDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgX2ljb25BY3Rpb25zOiBBcnJheTxQb05hdmJhckljb25BY3Rpb24+ID0gW107XHJcbiAgcHJpdmF0ZSBfaXRlbXM6IEFycmF5PFBvTmF2YmFySXRlbT4gPSBbXTtcclxuICBwcml2YXRlIF9saXRlcmFsczogUG9OYXZiYXJMaXRlcmFscztcclxuICBwcml2YXRlIF9sb2dvOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc2hhZG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nID0gcG9Mb2NhbGVEZWZhdWx0O1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHVtYSBsaXN0YSBkZSBhw6fDtWVzIGFwcmVzZW50YWRhcyBlbSDDrWNvbmVzIG5vIGxhZG8gZGlyZWl0byBkbyBgcG8tbmF2YmFyYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaWNvbi1hY3Rpb25zJykgc2V0IGljb25BY3Rpb25zKHZhbHVlOiBBcnJheTxQb05hdmJhckljb25BY3Rpb24+KSB7XHJcbiAgICB0aGlzLl9pY29uQWN0aW9ucyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBpY29uQWN0aW9ucygpOiBBcnJheTxQb05hdmJhckljb25BY3Rpb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uQWN0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgdW1hIGxpc3RhIGRlIGl0ZW1zIGRvIGBwby1uYXZiYXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1pdGVtcycpIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8UG9OYXZiYXJJdGVtPikge1xyXG4gICAgdGhpcy5faXRlbXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgaXRlbXMoKTogQXJyYXk8UG9OYXZiYXJJdGVtPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhIGxpdGVyYWwgdXNhZGEgbmEgcHJvcHJpZWRhZGUgYHAtbGl0ZXJhbHNgLlxyXG4gICAqXHJcbiAgICogUGFyYSBjdXN0b21pemFyIGEgbGl0ZXJhbCwgYmFzdGEgZGVjbGFyYXIgdW0gb2JqZXRvIGRvIHRpcG8gYFBvTmF2YmFyTGl0ZXJhbHNgIGNvbmZvcm1lIGV4ZW1wbG8gYWJhaXhvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb05hdmJhckxpdGVyYWxzID0ge1xyXG4gICAqICAgIG5hdmJhckxpbmtzOiAnSXRlbnMgZGUgbmF2ZWdhw6fDo28nXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBFIHBhcmEgY2FycmVnYXIgYXMgbGl0ZXJhaXMgY3VzdG9taXphZGFzLCBiYXN0YSBhcGVuYXMgcGFzc2FyIG8gb2JqZXRvIHBhcmEgbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLW5hdmJhclxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLW5hdmJhcj5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gTyBvYmpldG8gcGFkcsOjbyBkZSBsaXRlcmFpcyBzZXLDoSB0cmFkdXppZG8gZGUgYWNvcmRvIGNvbSBvIGlkaW9tYSBkb1xyXG4gICAqIFtgUG9JMThuU2VydmljZWBdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4pIG91IGRvIGJyb3dzZXIuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxpdGVyYWxzJykgc2V0IGxpdGVyYWxzKHZhbHVlOiBQb05hdmJhckxpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb05hdmJhckxpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLnBvTmF2YmFyTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLFxyXG4gICAgICAgIC4uLnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHBvTmF2YmFyTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgbGl0ZXJhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGl0ZXJhbHMgfHwgcG9OYXZiYXJMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgbG9nbyBhcHJlc2VudGFkYSBgcG8tbmF2YmFyYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9nbycpIHNldCBsb2dvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xvZ28gPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5hcHBsaWNhdGlvbk1lbnUpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZU1lbnVMb2dvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBsb2dvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvZ287XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIHVtYSBzb21icmEgbmEgcGFydGUgaW5mZXJpb3IgZG8gYHBvLW5hdmJhcmAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNoYWRvdycpIHNldCBzaGFkb3codmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NoYWRvdyA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNoYWRvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGFkb3c7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHZhbGlkYXRlTWVudUxvZ28oKTogdm9pZDtcclxufVxyXG4iXX0=