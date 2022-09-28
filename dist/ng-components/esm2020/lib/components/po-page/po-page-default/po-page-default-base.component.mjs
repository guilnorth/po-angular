import { Input, ViewChild, Directive } from '@angular/core';
import { poLocaleDefault } from './../../../services/po-language/po-language.constant';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-language/po-language.service";
export const poPageDefaultLiteralsDefault = {
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
 * O componente `po-page-default` é utilizado como o container principal para as telas sem um template definido.
 */
export class PoPageDefaultBaseComponent {
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
     * Objeto com as literais usadas no `po-page-default`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageDefaultLiterals = {
     *    otherActions: 'Mais ações'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageDefaultLiterals = {
     *    otherActions: 'Ações da página'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-default
     *   [p-literals]="customLiterals">
     * </po-page-default>
     * ```
     *
     * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poPageDefaultLiteralsDefault[poLocaleDefault],
                ...poPageDefaultLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poPageDefaultLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poPageDefaultLiteralsDefault[this.language];
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
PoPageDefaultBaseComponent.ɵfac = function PoPageDefaultBaseComponent_Factory(t) { return new (t || PoPageDefaultBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageDefaultBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageDefaultBaseComponent, viewQuery: function PoPageDefaultBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoPageContentComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPageContent = _t.first);
    } }, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], actions: ["p-actions", "actions"], literals: ["p-literals", "literals"], title: ["p-title", "title"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDefaultBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poPageContent: [{
            type: ViewChild,
            args: [PoPageContentComponent, { static: true }]
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1kZWZhdWx0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1kZWZhdWx0L3BvLXBhZ2UtZGVmYXVsdC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBS3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFFdEYsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUc7SUFDMUMsRUFBRSxFQUF5QjtRQUN6QixZQUFZLEVBQUUsZUFBZTtLQUM5QjtJQUNELEVBQUUsRUFBeUI7UUFDekIsWUFBWSxFQUFFLGdCQUFnQjtLQUMvQjtJQUNELEVBQUUsRUFBeUI7UUFDekIsWUFBWSxFQUFFLGNBQWM7S0FDN0I7SUFDRCxFQUFFLEVBQXlCO1FBQ3pCLFlBQVksRUFBRSxpQkFBaUI7S0FDaEM7Q0FDRixDQUFDO0FBRUY7Ozs7R0FJRztBQUVILE1BQU0sT0FBZ0IsMEJBQTBCO0lBMEY5QyxZQUFZLGVBQWtDO1FBcEY5QyxtQkFBYyxHQUF3QixFQUFFLENBQUM7UUFJakMsYUFBUSxHQUF5QixFQUFFLENBQUM7UUFpRjFDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQTlFRDs7Ozs7O09BTUc7SUFDSCxJQUF3QixPQUFPLENBQUMsT0FBNEI7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQ0c7SUFDSCxJQUF5QixRQUFRLENBQUMsS0FBNEI7UUFDNUQsSUFBSSxLQUFLLFlBQVksTUFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixHQUFHLDRCQUE0QixDQUFDLGVBQWUsQ0FBQztnQkFDaEQsR0FBRyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxHQUFHLEtBQUs7YUFDVCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztvR0F4Rm1CLDBCQUEwQjs2RUFBMUIsMEJBQTBCO3VCQUNuQyxzQkFBc0I7Ozs7O3VGQURiLDBCQUEwQjtjQUQvQyxTQUFTO29FQUU2QyxhQUFhO2tCQUFqRSxTQUFTO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUc1QixVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFpQkcsT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBMkNPLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQWlCRyxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgVmlld0NoaWxkLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb0JyZWFkY3J1bWIgfSBmcm9tICcuLi8uLi9wby1icmVhZGNydW1iL3BvLWJyZWFkY3J1bWIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlQWN0aW9uIH0gZnJvbSAnLi4vcG8tcGFnZS1hY3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRGVmYXVsdExpdGVyYWxzIH0gZnJvbSAnLi9wby1wYWdlLWRlZmF1bHQtbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3BvLXBhZ2UtY29udGVudC9wby1wYWdlLWNvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBwb1BhZ2VEZWZhdWx0TGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9QYWdlRGVmYXVsdExpdGVyYWxzPntcclxuICAgIG90aGVyQWN0aW9uczogJ090aGVyIGFjdGlvbnMnXHJcbiAgfSxcclxuICBlczogPFBvUGFnZURlZmF1bHRMaXRlcmFscz57XHJcbiAgICBvdGhlckFjdGlvbnM6ICdPdHJhcyBhY2Npb25lcydcclxuICB9LFxyXG4gIHB0OiA8UG9QYWdlRGVmYXVsdExpdGVyYWxzPntcclxuICAgIG90aGVyQWN0aW9uczogJ091dHJhcyBhw6fDtWVzJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb1BhZ2VEZWZhdWx0TGl0ZXJhbHM+e1xyXG4gICAgb3RoZXJBY3Rpb25zOiAn0JTRgNGD0LPQuNC1INC00LXQudGB0YLQstC40Y8nXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLXBhZ2UtZGVmYXVsdGAgw6kgdXRpbGl6YWRvIGNvbW8gbyBjb250YWluZXIgcHJpbmNpcGFsIHBhcmEgYXMgdGVsYXMgc2VtIHVtIHRlbXBsYXRlIGRlZmluaWRvLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb1BhZ2VEZWZhdWx0QmFzZUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChQb1BhZ2VDb250ZW50Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb1BhZ2VDb250ZW50OiBQb1BhZ2VDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICAvKiogT2JqZXRvIGNvbSBwcm9wcmllZGFkZXMgZG8gYnJlYWRjcnVtYi4gKi9cclxuICBASW5wdXQoJ3AtYnJlYWRjcnVtYicpIGJyZWFkY3J1bWI/OiBQb0JyZWFkY3J1bWI7XHJcblxyXG4gIHZpc2libGVBY3Rpb25zOiBBcnJheTxQb1BhZ2VBY3Rpb24+ID0gW107XHJcblxyXG4gIHByb3RlY3RlZCBsYW5ndWFnZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9hY3Rpb25zPzogQXJyYXk8UG9QYWdlQWN0aW9uPiA9IFtdO1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb1BhZ2VEZWZhdWx0TGl0ZXJhbHM7XHJcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE5lc3RhIHByb3ByaWVkYWRlIGRldmUgc2VyIGRlZmluaWRvIHVtIGFycmF5IGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIGBQb1BhZ2VBY3Rpb25gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb25zJykgc2V0IGFjdGlvbnMoYWN0aW9uczogQXJyYXk8UG9QYWdlQWN0aW9uPikge1xyXG4gICAgdGhpcy5fYWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoYWN0aW9ucykgPyBhY3Rpb25zIDogW107XHJcbiAgICB0aGlzLnZpc2libGVBY3Rpb25zID0gdGhpcy5hY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLnZpc2libGUgIT09IGZhbHNlKTtcclxuICAgIHRoaXMuc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aW9ucygpOiBBcnJheTxQb1BhZ2VBY3Rpb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE9iamV0byBjb20gYXMgbGl0ZXJhaXMgdXNhZGFzIG5vIGBwby1wYWdlLWRlZmF1bHRgLlxyXG4gICAqXHJcbiAgICogRXhpc3RlbSBkdWFzIG1hbmVpcmFzIGRlIGN1c3RvbWl6YXIgbyBjb21wb25lbnRlLCBwYXNzYW5kbyB1bSBvYmpldG8gY29tIHRvZGFzIGFzIGxpdGVyYWlzIGRpc3BvbsOtdmVpczpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9QYWdlRGVmYXVsdExpdGVyYWxzID0ge1xyXG4gICAqICAgIG90aGVyQWN0aW9uczogJ01haXMgYcOnw7VlcydcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIE91IHBhc3NhbmRvIGFwZW5hcyBhcyBsaXRlcmFpcyBxdWUgZGVzZWphIGN1c3RvbWl6YXI6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvUGFnZURlZmF1bHRMaXRlcmFscyA9IHtcclxuICAgKiAgICBvdGhlckFjdGlvbnM6ICdBw6fDtWVzIGRhIHDDoWdpbmEnXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBFIHBhcmEgY2FycmVnYXIgYXMgbGl0ZXJhaXMgY3VzdG9taXphZGFzLCBiYXN0YSBhcGVuYXMgcGFzc2FyIG8gb2JqZXRvIHBhcmEgbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLXBhZ2UtZGVmYXVsdFxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLXBhZ2UtZGVmYXVsdD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gTyB2YWxvciBwYWRyw6NvIHNlcsOhIHRyYWR1emlkbyBkZSBhY29yZG8gY29tIG8gaWRpb21hIGNvbmZpZ3VyYWRvIG5vIFtgUG9JMThuU2VydmljZWBdKC9kb2N1bWVudGF0aW9uL3BvLWkxOG4pIG91ICpicm93c2VyKi5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBzZXQgbGl0ZXJhbHModmFsdWU6IFBvUGFnZURlZmF1bHRMaXRlcmFscykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSB7XHJcbiAgICAgICAgLi4ucG9QYWdlRGVmYXVsdExpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLnBvUGFnZURlZmF1bHRMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV0sXHJcbiAgICAgICAgLi4udmFsdWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0gcG9QYWdlRGVmYXVsdExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsaXRlcmFscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9saXRlcmFscyB8fCBwb1BhZ2VEZWZhdWx0TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgLyoqIFTDrXR1bG8gZGEgcMOhZ2luYS4gKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wb1BhZ2VDb250ZW50LnJlY2FsY3VsYXRlSGVhZGVyU2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0YSBhIGxpc3RhIGRlIGHDp8O1ZXMgbm8gZHJvcGRvd24uXHJcbiAgYWJzdHJhY3Qgc2V0RHJvcGRvd25BY3Rpb25zKCk7XHJcbn1cclxuIl19