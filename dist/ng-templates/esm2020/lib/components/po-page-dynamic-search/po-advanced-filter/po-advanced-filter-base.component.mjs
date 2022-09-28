import { __decorate } from "tslib";
import { EventEmitter, Input, Output, ViewChild, Directive } from '@angular/core';
import { InputBoolean, PoModalComponent, poLocaleDefault } from '@po-ui/ng-components';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
export const poAdvancedFiltersLiteralsDefault = {
    en: {
        title: 'Advanced search',
        cancelLabel: 'Cancel',
        confirmLabel: 'Apply filters'
    },
    es: {
        title: 'Búsqueda avanzada',
        cancelLabel: 'Cancelar',
        confirmLabel: 'Aplicar filtros'
    },
    pt: {
        title: 'Busca avançada',
        cancelLabel: 'Cancelar',
        confirmLabel: 'Aplicar filtros'
    },
    ru: {
        title: 'Расширенный поиск',
        cancelLabel: 'отменить',
        confirmLabel: 'Применить фильтры'
    }
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Filtro de busca avançada criado a partir de um formulário dinâmico.
 * Componente de uso interno.
 */
export class PoAdvancedFilterBaseComponent {
    constructor(languageService) {
        /**
         * Mantém na modal de busca avançada os valores preenchidos do último filtro realizado pelo usuário.
         */
        this.keepFilters = false;
        /** Função que será disparada e receberá os valores do formulário ao ser clicado no botão buscar. */
        this.searchEvent = new EventEmitter();
        this.filter = {};
        this.language = poLocaleDefault;
        this.primaryAction = {
            action: () => {
                const models = this.getValuesFromForm();
                this.searchEvent.emit(models);
                this.poModal.close();
            },
            label: this.literals.confirmLabel
        };
        this.secondaryAction = {
            action: () => {
                this.poModal.close();
            },
            label: this.literals.cancelLabel
        };
        this.optionsServiceChosenOptions = [];
        this._filters = [];
        this.language = languageService.getShortLanguage();
    }
    /**
     * Coleção de objetos que implementam a interface PoPageDynamicSearchFilters, para definição dos campos que serão criados
     * dinamicamente.
     */
    set filters(filters) {
        this._filters = Array.isArray(filters) ? [...filters] : [];
    }
    get filters() {
        return this._filters;
    }
    /** Objeto com as literais usadas no `po-advanced-filter`. */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poAdvancedFiltersLiteralsDefault[poLocaleDefault],
                ...poAdvancedFiltersLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poAdvancedFiltersLiteralsDefault[this.language];
        }
        this.primaryAction.label = this.literals.confirmLabel;
        this.secondaryAction.label = this.literals.cancelLabel;
    }
    get literals() {
        return this._literals || poAdvancedFiltersLiteralsDefault[this.language];
    }
    // Retorna os models dos campos preenchidos
    getValuesFromForm() {
        let optionServiceOptions;
        Object.keys(this.filter).forEach(property => {
            if (this.filter[property] === undefined || this.filter[property] === '') {
                delete this.filter[property];
            }
        });
        if (this.optionsServiceChosenOptions.length) {
            optionServiceOptions = this.optionsServiceChosenOptions.filter((optionItem) => Object.values(this.filter).includes(optionItem.value));
        }
        return { filter: this.filter, optionsService: optionServiceOptions };
    }
}
PoAdvancedFilterBaseComponent.ɵfac = function PoAdvancedFilterBaseComponent_Factory(t) { return new (t || PoAdvancedFilterBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoAdvancedFilterBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoAdvancedFilterBaseComponent, viewQuery: function PoAdvancedFilterBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoModalComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poModal = _t.first);
    } }, inputs: { keepFilters: ["p-keep-filters", "keepFilters"], filters: ["p-filters", "filters"], literals: ["p-literals", "literals"] }, outputs: { searchEvent: "p-search-event" } });
__decorate([
    InputBoolean()
], PoAdvancedFilterBaseComponent.prototype, "keepFilters", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAdvancedFilterBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poModal: [{
            type: ViewChild,
            args: [PoModalComponent, { static: true }]
        }], keepFilters: [{
            type: Input,
            args: ['p-keep-filters']
        }], searchEvent: [{
            type: Output,
            args: ['p-search-event']
        }], filters: [{
            type: Input,
            args: ['p-filters']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWR2YW5jZWQtZmlsdGVyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWR5bmFtaWMtc2VhcmNoL3BvLWFkdmFuY2VkLWZpbHRlci9wby1hZHZhbmNlZC1maWx0ZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFDTCxZQUFZLEVBSVosZ0JBQWdCLEVBQ2hCLGVBQWUsRUFFaEIsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSzlCLE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFHO0lBQzlDLEVBQUUsRUFBNEI7UUFDNUIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixXQUFXLEVBQUUsUUFBUTtRQUNyQixZQUFZLEVBQUUsZUFBZTtLQUM5QjtJQUNELEVBQUUsRUFBNEI7UUFDNUIsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixXQUFXLEVBQUUsVUFBVTtRQUN2QixZQUFZLEVBQUUsaUJBQWlCO0tBQ2hDO0lBQ0QsRUFBRSxFQUE0QjtRQUM1QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLFlBQVksRUFBRSxpQkFBaUI7S0FDaEM7SUFDRCxFQUFFLEVBQTRCO1FBQzVCLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsWUFBWSxFQUFFLG1CQUFtQjtLQUNsQztDQUNGLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFPLDZCQUE2QjtJQXNFeEMsWUFBWSxlQUFrQztRQW5FOUM7O1dBRUc7UUFHSCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3Qixv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TSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FDdEQsQ0FBQztTQUNIO1FBRUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7OzBHQTNGVSw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjt1QkFDN0IsZ0JBQWdCOzs7OztBQU8zQjtJQUZDLFlBQVksRUFBRTtrRUFFYzt1RkFSbEIsNkJBQTZCO2NBRHpDLFNBQVM7b0VBRXVDLE9BQU87a0JBQXJELFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBTzdDLFdBQVc7a0JBRFYsS0FBSzttQkFBQyxnQkFBZ0I7WUFJRyxXQUFXO2tCQUFwQyxNQUFNO21CQUFDLGdCQUFnQjtZQStCQSxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUFTTyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBQb0R5bmFtaWNGb3JtRmllbGQsXHJcbiAgUG9MYW5ndWFnZVNlcnZpY2UsXHJcbiAgUG9Nb2RhbEFjdGlvbixcclxuICBQb01vZGFsQ29tcG9uZW50LFxyXG4gIHBvTG9jYWxlRGVmYXVsdCxcclxuICBQb0NvbWJvT3B0aW9uXHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgUG9BZHZhbmNlZEZpbHRlckxpdGVyYWxzIH0gZnJvbSAnLi9wby1hZHZhbmNlZC1maWx0ZXItbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnMgfSBmcm9tICcuLi9wby1wYWdlLWR5bmFtaWMtc2VhcmNoLWZpbHRlcnMuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwb0FkdmFuY2VkRmlsdGVyc0xpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogPFBvQWR2YW5jZWRGaWx0ZXJMaXRlcmFscz57XHJcbiAgICB0aXRsZTogJ0FkdmFuY2VkIHNlYXJjaCcsXHJcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXHJcbiAgICBjb25maXJtTGFiZWw6ICdBcHBseSBmaWx0ZXJzJ1xyXG4gIH0sXHJcbiAgZXM6IDxQb0FkdmFuY2VkRmlsdGVyTGl0ZXJhbHM+e1xyXG4gICAgdGl0bGU6ICdCw7pzcXVlZGEgYXZhbnphZGEnLFxyXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWxhcicsXHJcbiAgICBjb25maXJtTGFiZWw6ICdBcGxpY2FyIGZpbHRyb3MnXHJcbiAgfSxcclxuICBwdDogPFBvQWR2YW5jZWRGaWx0ZXJMaXRlcmFscz57XHJcbiAgICB0aXRsZTogJ0J1c2NhIGF2YW7Dp2FkYScsXHJcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbGFyJyxcclxuICAgIGNvbmZpcm1MYWJlbDogJ0FwbGljYXIgZmlsdHJvcydcclxuICB9LFxyXG4gIHJ1OiA8UG9BZHZhbmNlZEZpbHRlckxpdGVyYWxzPntcclxuICAgIHRpdGxlOiAn0KDQsNGB0YjQuNGA0LXQvdC90YvQuSDQv9C+0LjRgdC6JyxcclxuICAgIGNhbmNlbExhYmVsOiAn0L7RgtC80LXQvdC40YLRjCcsXHJcbiAgICBjb25maXJtTGFiZWw6ICfQn9GA0LjQvNC10L3QuNGC0Ywg0YTQuNC70YzRgtGA0YsnXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRmlsdHJvIGRlIGJ1c2NhIGF2YW7Dp2FkYSBjcmlhZG8gYSBwYXJ0aXIgZGUgdW0gZm9ybXVsw6FyaW8gZGluw6JtaWNvLlxyXG4gKiBDb21wb25lbnRlIGRlIHVzbyBpbnRlcm5vLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0FkdmFuY2VkRmlsdGVyQmFzZUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChQb01vZGFsQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb01vZGFsOiBQb01vZGFsQ29tcG9uZW50O1xyXG5cclxuICAvKipcclxuICAgKiBNYW50w6ltIG5hIG1vZGFsIGRlIGJ1c2NhIGF2YW7Dp2FkYSBvcyB2YWxvcmVzIHByZWVuY2hpZG9zIGRvIMO6bHRpbW8gZmlsdHJvIHJlYWxpemFkbyBwZWxvIHVzdcOhcmlvLlxyXG4gICAqL1xyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIEBJbnB1dCgncC1rZWVwLWZpbHRlcnMnKVxyXG4gIGtlZXBGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgZGlzcGFyYWRhIGUgcmVjZWJlcsOhIG9zIHZhbG9yZXMgZG8gZm9ybXVsw6FyaW8gYW8gc2VyIGNsaWNhZG8gbm8gYm90w6NvIGJ1c2Nhci4gKi9cclxuICBAT3V0cHV0KCdwLXNlYXJjaC1ldmVudCcpIHNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGZpbHRlciA9IHt9O1xyXG4gIGxhbmd1YWdlOiBzdHJpbmcgPSBwb0xvY2FsZURlZmF1bHQ7XHJcblxyXG4gIHByaW1hcnlBY3Rpb246IFBvTW9kYWxBY3Rpb24gPSB7XHJcbiAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgY29uc3QgbW9kZWxzID0gdGhpcy5nZXRWYWx1ZXNGcm9tRm9ybSgpO1xyXG5cclxuICAgICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KG1vZGVscyk7XHJcbiAgICAgIHRoaXMucG9Nb2RhbC5jbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmNvbmZpcm1MYWJlbFxyXG4gIH07XHJcblxyXG4gIHNlY29uZGFyeUFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHtcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvTW9kYWwuY2xvc2UoKTtcclxuICAgIH0sXHJcbiAgICBsYWJlbDogdGhpcy5saXRlcmFscy5jYW5jZWxMYWJlbFxyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCBvcHRpb25zU2VydmljZUNob3Nlbk9wdGlvbnM6IEFycmF5PFBvQ29tYm9PcHRpb24+ID0gW107XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcnM6IEFycmF5PFBvRHluYW1pY0Zvcm1GaWVsZD4gPSBbXTtcclxuICBwcml2YXRlIF9saXRlcmFsczogUG9BZHZhbmNlZEZpbHRlckxpdGVyYWxzO1xyXG5cclxuICAvKipcclxuICAgKiBDb2xlw6fDo28gZGUgb2JqZXRvcyBxdWUgaW1wbGVtZW50YW0gYSBpbnRlcmZhY2UgUG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnMsIHBhcmEgZGVmaW5pw6fDo28gZG9zIGNhbXBvcyBxdWUgc2Vyw6NvIGNyaWFkb3NcclxuICAgKiBkaW5hbWljYW1lbnRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXJzJykgc2V0IGZpbHRlcnMoZmlsdGVyczogQXJyYXk8UG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnM+KSB7XHJcbiAgICB0aGlzLl9maWx0ZXJzID0gQXJyYXkuaXNBcnJheShmaWx0ZXJzKSA/IFsuLi5maWx0ZXJzXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpbHRlcnMoKTogQXJyYXk8UG9QYWdlRHluYW1pY1NlYXJjaEZpbHRlcnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqIE9iamV0byBjb20gYXMgbGl0ZXJhaXMgdXNhZGFzIG5vIGBwby1hZHZhbmNlZC1maWx0ZXJgLiAqL1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIHNldCBsaXRlcmFscyh2YWx1ZTogUG9BZHZhbmNlZEZpbHRlckxpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb0FkdmFuY2VkRmlsdGVyc0xpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLnBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdLFxyXG4gICAgICAgIC4uLnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJpbWFyeUFjdGlvbi5sYWJlbCA9IHRoaXMubGl0ZXJhbHMuY29uZmlybUxhYmVsO1xyXG4gICAgdGhpcy5zZWNvbmRhcnlBY3Rpb24ubGFiZWwgPSB0aGlzLmxpdGVyYWxzLmNhbmNlbExhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxpdGVyYWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxzIHx8IHBvQWR2YW5jZWRGaWx0ZXJzTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXRvcm5hIG9zIG1vZGVscyBkb3MgY2FtcG9zIHByZWVuY2hpZG9zXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZXNGcm9tRm9ybSgpIHtcclxuICAgIGxldCBvcHRpb25TZXJ2aWNlT3B0aW9uczogQXJyYXk8UG9Db21ib09wdGlvbj47XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXIpLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJbcHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgdGhpcy5maWx0ZXJbcHJvcGVydHldID09PSAnJykge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlcltwcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnNTZXJ2aWNlQ2hvc2VuT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgb3B0aW9uU2VydmljZU9wdGlvbnMgPSB0aGlzLm9wdGlvbnNTZXJ2aWNlQ2hvc2VuT3B0aW9ucy5maWx0ZXIoKG9wdGlvbkl0ZW06IFBvQ29tYm9PcHRpb24pID0+XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZpbHRlcikuaW5jbHVkZXMob3B0aW9uSXRlbS52YWx1ZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBmaWx0ZXI6IHRoaXMuZmlsdGVyLCBvcHRpb25zU2VydmljZTogb3B0aW9uU2VydmljZU9wdGlvbnMgfTtcclxuICB9XHJcbn1cclxuIl19