import { Input, Directive, ViewChild } from '@angular/core';
import { poLocaleDefault } from './../../../services/po-language/po-language.constant';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-language/po-language.service";
export const poPageListLiteralsDefault = {
    en: {
        otherActions: 'Other actions'
    },
    es: {
        otherActions: 'Otras acciones'
    },
    pt: {
        otherActions: 'Outras ações'
    },
    ru: {
        otherActions: 'Другие действия'
    }
};
/**
 * @description
 *
 * O componente `po-page-list` é utilizado como o container principal para as telas de listagem de dados,
 * podendo ser apresentado como lista ou tabela.
 *
 * Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma função que será executada no momento
 * da filtragem. Este comportamento pode ser acionado tanto ao *click* do ícone [po-icon-search](/guides/icons)
 * quanto ao pressionar da tecla *ENTER* quando o foco estiver no campo de pesquisa.
 *
 * Para facilitar a manipulação e visualização dos filtros aplicados, é possível também utilizar o componente
 * [`po-disclaimer-group`](/documentation/po-disclaimer-group).
 */
export class PoPageListBaseComponent {
    constructor(languageService) {
        this.visibleActions = [];
        this._actions = [];
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`.
     */
    set actions(actions) {
        this._actions = Array.isArray(actions) ? actions : [];
        this.visibleActions = this.actions.filter(action => action.visible !== false);
        this.setDropdownActions();
    }
    get actions() {
        return this._actions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto que implementa as propriedades da interface `PoDisclaimerGroup`.
     */
    set disclaimerGroup(value) {
        if (!value) {
            value = {};
        }
        this._disclaimerGroup = value;
    }
    get disclaimerGroup() {
        return this._disclaimerGroup;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-list`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageListLiterals = {
     *    otherActions: 'Mais ações'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageListLiterals = {
     *    otherActions: 'Ações da página'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-list
     *   [p-literals]="customLiterals">
     * </po-page-list>
     * ```
     *
     * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poPageListLiteralsDefault[poLocaleDefault],
                ...poPageListLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poPageListLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poPageListLiteralsDefault[this.language];
    }
    /** Título da página. */
    set title(title) {
        this._title = title;
        setTimeout(() => this.poPageContent.recalculateHeaderSize());
    }
    get title() {
        return this._title;
    }
}
PoPageListBaseComponent.ɵfac = function PoPageListBaseComponent_Factory(t) { return new (t || PoPageListBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageListBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageListBaseComponent, viewQuery: function PoPageListBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoPageContentComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPageContent = _t.first);
    } }, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], filter: ["p-filter", "filter"], actions: ["p-actions", "actions"], disclaimerGroup: ["p-disclaimer-group", "disclaimerGroup"], literals: ["p-literals", "literals"], title: ["p-title", "title"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageListBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poPageContent: [{
            type: ViewChild,
            args: [PoPageContentComponent, { static: true }]
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], filter: [{
            type: Input,
            args: ['p-filter']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], disclaimerGroup: [{
            type: Input,
            args: ['p-disclaimer-group']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1saXN0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1saXN0L3BvLXBhZ2UtbGlzdC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBTXZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFJdEYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUc7SUFDdkMsRUFBRSxFQUFzQjtRQUN0QixZQUFZLEVBQUUsZUFBZTtLQUM5QjtJQUNELEVBQUUsRUFBc0I7UUFDdEIsWUFBWSxFQUFFLGdCQUFnQjtLQUMvQjtJQUNELEVBQUUsRUFBc0I7UUFDdEIsWUFBWSxFQUFFLGNBQWM7S0FDN0I7SUFDRCxFQUFFLEVBQXNCO1FBQ3RCLFlBQVksRUFBRSxpQkFBaUI7S0FDaEM7Q0FDRixDQUFDO0FBRUY7Ozs7Ozs7Ozs7OztHQVlHO0FBRUgsTUFBTSxPQUFnQix1QkFBdUI7SUE0SDNDLFlBQVksZUFBa0M7UUF6RzlDLG1CQUFjLEdBQXdCLEVBQUUsQ0FBQztRQUtqQyxhQUFRLEdBQXlCLEVBQUUsQ0FBQztRQXFHMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBakdEOzs7Ozs7T0FNRztJQUNILElBQXdCLE9BQU8sQ0FBQyxPQUE0QjtRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQWlDLGVBQWUsQ0FBQyxLQUF3QjtRQUN2RSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0NHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLEtBQXlCO1FBQ3pELElBQUksS0FBSyxZQUFZLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsR0FBRyx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7Z0JBQzdDLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDM0MsR0FBRyxLQUFLO2FBQ1QsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsSUFBc0IsS0FBSyxDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OEZBMUhtQix1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1QkFDaEMsc0JBQXNCOzs7Ozt1RkFEYix1QkFBdUI7Y0FENUMsU0FBUztvRUFFNkMsYUFBYTtrQkFBakUsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFTNUIsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBT0YsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBbUJPLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVztZQWlCZSxlQUFlO2tCQUEvQyxLQUFLO21CQUFDLG9CQUFvQjtZQTZDRixRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFpQkcsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50JztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9CcmVhZGNydW1iIH0gZnJvbSAnLi4vLi4vcG8tYnJlYWRjcnVtYi9wby1icmVhZGNydW1iLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRGlzY2xhaW1lckdyb3VwIH0gZnJvbSAnLi4vLi4vcG8tZGlzY2xhaW1lci1ncm91cC9wby1kaXNjbGFpbWVyLWdyb3VwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUFjdGlvbiB9IGZyb20gJy4uL3BvLXBhZ2UtYWN0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9wby1wYWdlLWNvbnRlbnQvcG8tcGFnZS1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUGFnZUZpbHRlciB9IGZyb20gJy4vLi4vcG8tcGFnZS1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlTGlzdExpdGVyYWxzIH0gZnJvbSAnLi9wby1wYWdlLWxpc3QtbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwb1BhZ2VMaXN0TGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9QYWdlTGlzdExpdGVyYWxzPntcclxuICAgIG90aGVyQWN0aW9uczogJ090aGVyIGFjdGlvbnMnXHJcbiAgfSxcclxuICBlczogPFBvUGFnZUxpc3RMaXRlcmFscz57XHJcbiAgICBvdGhlckFjdGlvbnM6ICdPdHJhcyBhY2Npb25lcydcclxuICB9LFxyXG4gIHB0OiA8UG9QYWdlTGlzdExpdGVyYWxzPntcclxuICAgIG90aGVyQWN0aW9uczogJ091dHJhcyBhw6fDtWVzJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb1BhZ2VMaXN0TGl0ZXJhbHM+e1xyXG4gICAgb3RoZXJBY3Rpb25zOiAn0JTRgNGD0LPQuNC1INC00LXQudGB0YLQstC40Y8nXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLXBhZ2UtbGlzdGAgw6kgdXRpbGl6YWRvIGNvbW8gbyBjb250YWluZXIgcHJpbmNpcGFsIHBhcmEgYXMgdGVsYXMgZGUgbGlzdGFnZW0gZGUgZGFkb3MsXHJcbiAqIHBvZGVuZG8gc2VyIGFwcmVzZW50YWRvIGNvbW8gbGlzdGEgb3UgdGFiZWxhLlxyXG4gKlxyXG4gKiBFc3RlIGNvbXBvbmVudGUgcG9zc2liaWxpdGEgcmVhbGl6YXIgZmlsdHJvIGRvcyBkYWRvcywgbm8gcXVhbCBwZXJtaXRlIHF1ZSBzZWphIGF0cmlidWlkbyB1bWEgZnVuw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBubyBtb21lbnRvXHJcbiAqIGRhIGZpbHRyYWdlbS4gRXN0ZSBjb21wb3J0YW1lbnRvIHBvZGUgc2VyIGFjaW9uYWRvIHRhbnRvIGFvICpjbGljayogZG8gw61jb25lIFtwby1pY29uLXNlYXJjaF0oL2d1aWRlcy9pY29ucylcclxuICogcXVhbnRvIGFvIHByZXNzaW9uYXIgZGEgdGVjbGEgKkVOVEVSKiBxdWFuZG8gbyBmb2NvIGVzdGl2ZXIgbm8gY2FtcG8gZGUgcGVzcXVpc2EuXHJcbiAqXHJcbiAqIFBhcmEgZmFjaWxpdGFyIGEgbWFuaXB1bGHDp8OjbyBlIHZpc3VhbGl6YcOnw6NvIGRvcyBmaWx0cm9zIGFwbGljYWRvcywgw6kgcG9zc8OtdmVsIHRhbWLDqW0gdXRpbGl6YXIgbyBjb21wb25lbnRlXHJcbiAqIFtgcG8tZGlzY2xhaW1lci1ncm91cGBdKC9kb2N1bWVudGF0aW9uL3BvLWRpc2NsYWltZXItZ3JvdXApLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb1BhZ2VMaXN0QmFzZUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChQb1BhZ2VDb250ZW50Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb1BhZ2VDb250ZW50OiBQb1BhZ2VDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIHF1ZSBpbXBsZW1lbnRhIGFzIHByb3ByaWVkYWRlcyBkYSBpbnRlcmZhY2UgYFBvQnJlYWRjcnVtYmAuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWJyZWFkY3J1bWInKSBicmVhZGNydW1iPzogUG9CcmVhZGNydW1iO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE9iamV0byBxdWUgaW1wbGVtZW50YSBhcyBwcm9wcmllZGFkZXMgZGEgaW50ZXJmYWNlIGBQb1BhZ2VGaWx0ZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXInKSBmaWx0ZXI6IFBvUGFnZUZpbHRlcjtcclxuXHJcbiAgdmlzaWJsZUFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIHJlc2l6ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIF9hY3Rpb25zPzogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFtdO1xyXG4gIHByaXZhdGUgX2Rpc2NsYWltZXJHcm91cD86IFBvRGlzY2xhaW1lckdyb3VwO1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb1BhZ2VMaXN0TGl0ZXJhbHM7XHJcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE5lc3RhIHByb3ByaWVkYWRlIGRldmUgc2VyIGRlZmluaWRvIHVtIGFycmF5IGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIGBQb1BhZ2VBY3Rpb25gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb25zJykgc2V0IGFjdGlvbnMoYWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPikge1xyXG4gICAgdGhpcy5fYWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoYWN0aW9ucykgPyBhY3Rpb25zIDogW107XHJcbiAgICB0aGlzLnZpc2libGVBY3Rpb25zID0gdGhpcy5hY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLnZpc2libGUgIT09IGZhbHNlKTtcclxuICAgIHRoaXMuc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aW9ucygpOiBBcnJheTxQb1BhZ2VBY3Rpb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE9iamV0byBxdWUgaW1wbGVtZW50YSBhcyBwcm9wcmllZGFkZXMgZGEgaW50ZXJmYWNlIGBQb0Rpc2NsYWltZXJHcm91cGAuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpc2NsYWltZXItZ3JvdXAnKSBzZXQgZGlzY2xhaW1lckdyb3VwKHZhbHVlOiBQb0Rpc2NsYWltZXJHcm91cCkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IDxhbnk+e307XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGlzY2xhaW1lckdyb3VwID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzY2xhaW1lckdyb3VwKCk6IFBvRGlzY2xhaW1lckdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNjbGFpbWVyR3JvdXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhcyBsaXRlcmFpcyB1c2FkYXMgbm8gYHBvLXBhZ2UtbGlzdGAuXHJcbiAgICpcclxuICAgKiBFeGlzdGVtIGR1YXMgbWFuZWlyYXMgZGUgY3VzdG9taXphciBvIGNvbXBvbmVudGUsIHBhc3NhbmRvIHVtIG9iamV0byBjb20gdG9kYXMgYXMgbGl0ZXJhaXMgZGlzcG9uw612ZWlzOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb1BhZ2VMaXN0TGl0ZXJhbHMgPSB7XHJcbiAgICogICAgb3RoZXJBY3Rpb25zOiAnTWFpcyBhw6fDtWVzJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogT3UgcGFzc2FuZG8gYXBlbmFzIGFzIGxpdGVyYWlzIHF1ZSBkZXNlamEgY3VzdG9taXphcjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9QYWdlTGlzdExpdGVyYWxzID0ge1xyXG4gICAqICAgIG90aGVyQWN0aW9uczogJ0HDp8O1ZXMgZGEgcMOhZ2luYSdcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEUgcGFyYSBjYXJyZWdhciBhcyBsaXRlcmFpcyBjdXN0b21pemFkYXMsIGJhc3RhIGFwZW5hcyBwYXNzYXIgbyBvYmpldG8gcGFyYSBvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tcGFnZS1saXN0XHJcbiAgICogICBbcC1saXRlcmFsc109XCJjdXN0b21MaXRlcmFsc1wiPlxyXG4gICAqIDwvcG8tcGFnZS1saXN0PlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBPIHZhbG9yIHBhZHLDo28gc2Vyw6EgdHJhZHV6aWRvIGRlIGFjb3JkbyBjb20gbyBpZGlvbWEgY29uZmlndXJhZG8gbm8gW2BQb0kxOG5TZXJ2aWNlYF0oL2RvY3VtZW50YXRpb24vcG8taTE4bikgb3UgKmJyb3dzZXIqLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIHNldCBsaXRlcmFscyh2YWx1ZTogUG9QYWdlTGlzdExpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb1BhZ2VMaXN0TGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgICAgLi4ucG9QYWdlTGlzdExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXSxcclxuICAgICAgICAuLi52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSBwb1BhZ2VMaXN0TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGxpdGVyYWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxzIHx8IHBvUGFnZUxpc3RMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgfVxyXG5cclxuICAvKiogVMOtdHVsbyBkYSBww6FnaW5hLiAqL1xyXG4gIEBJbnB1dCgncC10aXRsZScpIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBvUGFnZUNvbnRlbnQucmVjYWxjdWxhdGVIZWFkZXJTaXplKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTZXRhIGEgbGlzdGEgZGUgYcOnw7VlcyBubyBkcm9wZG93bi5cclxuICBhYnN0cmFjdCBzZXREcm9wZG93bkFjdGlvbnMoKTtcclxufVxyXG4iXX0=