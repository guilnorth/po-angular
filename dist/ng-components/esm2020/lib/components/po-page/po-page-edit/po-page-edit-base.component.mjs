import { Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
export const poPageEditLiteralsDefault = {
    en: {
        cancel: 'Cancel',
        save: 'Save',
        saveNew: 'Save and New'
    },
    es: {
        cancel: 'Cancelar',
        save: 'Guardar',
        saveNew: 'Guardar y Nuevo'
    },
    pt: {
        cancel: 'Cancelar',
        save: 'Salvar',
        saveNew: 'Salvar e Novo'
    },
    ru: {
        cancel: 'отменить',
        save: 'экономить',
        saveNew: 'Сохранить и новый'
    }
};
/**
 * @description
 *
 * O componente **po-page-edit** é utilizado como container principal para tela de edição ou adição de um
 * registro, tendo a possibilidade de usar as ações de "Salvar", "Salvar e Novo" e "Cancelar".
 *
 * Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `p-disable-submit`.
 * Esta propriedade pode ser utilizada para desabilitar os botões caso exista um formulário inválido na página ou alguma
 * regra de negócio não tenha sido atendida.
 */
export class PoPageEditBaseComponent {
    constructor(languageService) {
        /**
         * Evento que será disparado ao clicar no botão de "Cancelar".
         *
         * ```
         * <po-page-edit (p-cancel)="myCancelFunction()">
         * </po-page-edit>
         * ```
         *
         * > Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.
         */
        this.cancel = new EventEmitter();
        /**
         * Evento que será disparado ao clicar no botão de "Salvar".
         *
         * ```
         * <po-page-edit (p-save)="mySaveFunction()">
         * </po-page-edit>
         * ```
         *
         * > Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.
         */
        this.save = new EventEmitter();
        /**
         * Evento que será disparado ao clicar no botão de "Salvar e Novo".
         *
         * ```
         * <po-page-edit (p-save-new)="mySaveNewFunction()">
         * </po-page-edit>
         * ```
         *
         * > Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.
         */
        this.saveNew = new EventEmitter();
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-edit`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageEditLiterals = {
     *    cancel: 'Voltar',
     *    save: 'Confirmar',
     *    saveNew: 'Confirmar e criar um novo'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageEditLiterals = {
     *    cancel: 'Cancelar processo'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-edit
     *   [p-literals]="customLiterals">
     * </po-page-edit>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poPageEditLiteralsDefault[poLocaleDefault],
                ...poPageEditLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poPageEditLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poPageEditLiteralsDefault[this.language];
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
PoPageEditBaseComponent.ɵfac = function PoPageEditBaseComponent_Factory(t) { return new (t || PoPageEditBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageEditBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageEditBaseComponent, viewQuery: function PoPageEditBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoPageContentComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPageContent = _t.first);
    } }, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], disableSubmit: ["p-disable-submit", "disableSubmit"], literals: ["p-literals", "literals"], title: ["p-title", "title"] }, outputs: { cancel: "p-cancel", save: "p-save", saveNew: "p-save-new" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageEditBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poPageContent: [{
            type: ViewChild,
            args: [PoPageContentComponent, { static: true }]
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], disableSubmit: [{
            type: Input,
            args: ['p-disable-submit']
        }], cancel: [{
            type: Output,
            args: ['p-cancel']
        }], save: [{
            type: Output,
            args: ['p-save']
        }], saveNew: [{
            type: Output,
            args: ['p-save-new']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1lZGl0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UvcG8tcGFnZS1lZGl0L3BvLXBhZ2UtZWRpdC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFJckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7OztBQUd0RixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2QyxFQUFFLEVBQXNCO1FBQ3RCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDRCxFQUFFLEVBQXNCO1FBQ3RCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLGlCQUFpQjtLQUMzQjtJQUNELEVBQUUsRUFBc0I7UUFDdEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsZUFBZTtLQUN6QjtJQUNELEVBQUUsRUFBc0I7UUFDdEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsT0FBTyxFQUFFLG1CQUFtQjtLQUM3QjtDQUNGLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBOEdsQyxZQUFZLGVBQWtDO1FBckc5Qzs7Ozs7Ozs7O1dBU0c7UUFDaUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQ7Ozs7Ozs7OztXQVNHO1FBQ2UsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUM7Ozs7Ozs7OztXQVNHO1FBQ21CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBb0VqRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUEvREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUNHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLEtBQXlCO1FBQ3pELElBQUksS0FBSyxZQUFZLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsR0FBRyx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7Z0JBQzdDLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDM0MsR0FBRyxLQUFLO2FBQ1QsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsSUFBc0IsS0FBSyxDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OEZBNUdVLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VCQUN2QixzQkFBc0I7Ozs7O3VGQUR0Qix1QkFBdUI7Y0FEbkMsU0FBUztvRUFFNkMsYUFBYTtrQkFBakUsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHNUIsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBR00sYUFBYTtrQkFBdkMsS0FBSzttQkFBQyxrQkFBa0I7WUFZTCxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUFZQSxJQUFJO2tCQUFyQixNQUFNO21CQUFDLFFBQVE7WUFZTSxPQUFPO2tCQUE1QixNQUFNO21CQUFDLFlBQVk7WUEwQ0ssUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBZ0JHLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHBvTG9jYWxlRGVmYXVsdCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50JztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvQnJlYWRjcnVtYiB9IGZyb20gJy4uLy4uL3BvLWJyZWFkY3J1bWIvcG8tYnJlYWRjcnVtYi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vcG8tcGFnZS1jb250ZW50L3BvLXBhZ2UtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1BhZ2VFZGl0TGl0ZXJhbHMgfSBmcm9tICcuL3BvLXBhZ2UtZWRpdC1saXRlcmFscy5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvUGFnZUVkaXRMaXRlcmFsc0RlZmF1bHQgPSB7XHJcbiAgZW46IDxQb1BhZ2VFZGl0TGl0ZXJhbHM+e1xyXG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcclxuICAgIHNhdmU6ICdTYXZlJyxcclxuICAgIHNhdmVOZXc6ICdTYXZlIGFuZCBOZXcnXHJcbiAgfSxcclxuICBlczogPFBvUGFnZUVkaXRMaXRlcmFscz57XHJcbiAgICBjYW5jZWw6ICdDYW5jZWxhcicsXHJcbiAgICBzYXZlOiAnR3VhcmRhcicsXHJcbiAgICBzYXZlTmV3OiAnR3VhcmRhciB5IE51ZXZvJ1xyXG4gIH0sXHJcbiAgcHQ6IDxQb1BhZ2VFZGl0TGl0ZXJhbHM+e1xyXG4gICAgY2FuY2VsOiAnQ2FuY2VsYXInLFxyXG4gICAgc2F2ZTogJ1NhbHZhcicsXHJcbiAgICBzYXZlTmV3OiAnU2FsdmFyIGUgTm92bydcclxuICB9LFxyXG4gIHJ1OiA8UG9QYWdlRWRpdExpdGVyYWxzPntcclxuICAgIGNhbmNlbDogJ9C+0YLQvNC10L3QuNGC0YwnLFxyXG4gICAgc2F2ZTogJ9GN0LrQvtC90L7QvNC40YLRjCcsXHJcbiAgICBzYXZlTmV3OiAn0KHQvtGF0YDQsNC90LjRgtGMINC4INC90L7QstGL0LknXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgKipwby1wYWdlLWVkaXQqKiDDqSB1dGlsaXphZG8gY29tbyBjb250YWluZXIgcHJpbmNpcGFsIHBhcmEgdGVsYSBkZSBlZGnDp8OjbyBvdSBhZGnDp8OjbyBkZSB1bVxyXG4gKiByZWdpc3RybywgdGVuZG8gYSBwb3NzaWJpbGlkYWRlIGRlIHVzYXIgYXMgYcOnw7VlcyBkZSBcIlNhbHZhclwiLCBcIlNhbHZhciBlIE5vdm9cIiBlIFwiQ2FuY2VsYXJcIi5cclxuICpcclxuICogT3MgYm90w7VlcyBcIlNhbHZhclwiIGUgXCJTYWx2YXIgZSBOb3ZvXCIgcG9kZW0gc2VyIGhhYmlsaXRhZG9zL2Rlc2FiaWxpdGFkb3MgdXRpbGl6YW5kbyBhIHByb3ByaWVkYWRlIGBwLWRpc2FibGUtc3VibWl0YC5cclxuICogRXN0YSBwcm9wcmllZGFkZSBwb2RlIHNlciB1dGlsaXphZGEgcGFyYSBkZXNhYmlsaXRhciBvcyBib3TDtWVzIGNhc28gZXhpc3RhIHVtIGZvcm11bMOhcmlvIGludsOhbGlkbyBuYSBww6FnaW5hIG91IGFsZ3VtYVxyXG4gKiByZWdyYSBkZSBuZWfDs2NpbyBuw6NvIHRlbmhhIHNpZG8gYXRlbmRpZGEuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUVkaXRCYXNlQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKFBvUGFnZUNvbnRlbnRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBvUGFnZUNvbnRlbnQ6IFBvUGFnZUNvbnRlbnRDb21wb25lbnQ7XHJcblxyXG4gIC8qKiBPYmpldG8gY29tIHByb3ByaWVkYWRlcyBkbyBicmVhZGNydW1iLiAqL1xyXG4gIEBJbnB1dCgncC1icmVhZGNydW1iJykgYnJlYWRjcnVtYj86IFBvQnJlYWRjcnVtYjtcclxuXHJcbiAgLyoqIERlc2FiaWxpdGEgYm90w7VlcyBkZSBzdWJtaXNzw6NvIChzYXZlIGUgc2F2ZU5ldykgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZS1zdWJtaXQnKSBkaXNhYmxlU3VibWl0PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZXLDoSBkaXNwYXJhZG8gYW8gY2xpY2FyIG5vIGJvdMOjbyBkZSBcIkNhbmNlbGFyXCIuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tcGFnZS1lZGl0IChwLWNhbmNlbCk9XCJteUNhbmNlbEZ1bmN0aW9uKClcIj5cclxuICAgKiA8L3BvLXBhZ2UtZWRpdD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHV0aWxpemFyIGVzdGEgcHJvcHJpZWRhZGUsIG8gYm90w6NvIGRlIFwiQ2FuY2VsYXJcIiBuw6NvIHNlcsOhIGV4aWJpZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jYW5jZWwnKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2Vyw6EgZGlzcGFyYWRvIGFvIGNsaWNhciBubyBib3TDo28gZGUgXCJTYWx2YXJcIi5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1wYWdlLWVkaXQgKHAtc2F2ZSk9XCJteVNhdmVGdW5jdGlvbigpXCI+XHJcbiAgICogPC9wby1wYWdlLWVkaXQ+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IENhc28gbsOjbyB1dGlsaXphciBlc3RhIHByb3ByaWVkYWRlLCBvIGJvdMOjbyBkZSBcIlNhbHZhclwiIG7Do28gc2Vyw6EgZXhpYmlkby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNhdmUnKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlcsOhIGRpc3BhcmFkbyBhbyBjbGljYXIgbm8gYm90w6NvIGRlIFwiU2FsdmFyIGUgTm92b1wiLlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLXBhZ2UtZWRpdCAocC1zYXZlLW5ldyk9XCJteVNhdmVOZXdGdW5jdGlvbigpXCI+XHJcbiAgICogPC9wby1wYWdlLWVkaXQ+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IENhc28gbsOjbyB1dGlsaXphciBlc3RhIHByb3ByaWVkYWRlLCBvIGJvdMOjbyBkZSBcIlNhbHZhciBlIE5vdm9cIiBuw6NvIHNlcsOhIGV4aWJpZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1zYXZlLW5ldycpIHNhdmVOZXcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb1BhZ2VFZGl0TGl0ZXJhbHM7XHJcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcclxuICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gY29tIGFzIGxpdGVyYWlzIHVzYWRhcyBubyBgcG8tcGFnZS1lZGl0YC5cclxuICAgKlxyXG4gICAqIEV4aXN0ZW0gZHVhcyBtYW5laXJhcyBkZSBjdXN0b21pemFyIG8gY29tcG9uZW50ZSwgcGFzc2FuZG8gdW0gb2JqZXRvIGNvbSB0b2RhcyBhcyBsaXRlcmFpcyBkaXNwb27DrXZlaXM6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvUGFnZUVkaXRMaXRlcmFscyA9IHtcclxuICAgKiAgICBjYW5jZWw6ICdWb2x0YXInLFxyXG4gICAqICAgIHNhdmU6ICdDb25maXJtYXInLFxyXG4gICAqICAgIHNhdmVOZXc6ICdDb25maXJtYXIgZSBjcmlhciB1bSBub3ZvJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogT3UgcGFzc2FuZG8gYXBlbmFzIGFzIGxpdGVyYWlzIHF1ZSBkZXNlamEgY3VzdG9taXphcjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9QYWdlRWRpdExpdGVyYWxzID0ge1xyXG4gICAqICAgIGNhbmNlbDogJ0NhbmNlbGFyIHByb2Nlc3NvJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogRSBwYXJhIGNhcnJlZ2FyIGFzIGxpdGVyYWlzIGN1c3RvbWl6YWRhcywgYmFzdGEgYXBlbmFzIHBhc3NhciBvIG9iamV0byBwYXJhIG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1wYWdlLWVkaXRcclxuICAgKiAgIFtwLWxpdGVyYWxzXT1cImN1c3RvbUxpdGVyYWxzXCI+XHJcbiAgICogPC9wby1wYWdlLWVkaXQ+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IE8gb2JqZXRvIHBhZHLDo28gZGUgbGl0ZXJhaXMgc2Vyw6EgdHJhZHV6aWRvIGRlIGFjb3JkbyBjb20gbyBpZGlvbWEgZG9cclxuICAgKiBbYFBvSTE4blNlcnZpY2VgXSgvZG9jdW1lbnRhdGlvbi9wby1pMThuKSBvdSBkbyBicm93c2VyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIHNldCBsaXRlcmFscyh2YWx1ZTogUG9QYWdlRWRpdExpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb1BhZ2VFZGl0TGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgICAgLi4ucG9QYWdlRWRpdExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXSxcclxuICAgICAgICAuLi52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSBwb1BhZ2VFZGl0TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgbGl0ZXJhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGl0ZXJhbHMgfHwgcG9QYWdlRWRpdExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIC8qKiBUw610dWxvIGRhIHDDoWdpbmEuICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucG9QYWdlQ29udGVudC5yZWNhbGN1bGF0ZUhlYWRlclNpemUoKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuICB9XHJcbn1cclxuIl19