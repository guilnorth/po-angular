import { Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import { PoPageContentComponent } from '../po-page-content/po-page-content.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
export const poPageDetailLiteralsDefault = {
    en: {
        back: 'Back',
        edit: 'Edit',
        remove: 'Remove'
    },
    es: {
        back: 'Volver',
        edit: 'Editar',
        remove: 'Eliminar'
    },
    pt: {
        back: 'Voltar',
        edit: 'Editar',
        remove: 'Remover'
    },
    ru: {
        back: 'возвращение',
        edit: 'редактировать',
        remove: 'удаление'
    }
};
/**
 * @description
 *
 * O componente **po-page-detail** é utilizado como container principal para a tela de
 * detalhamento de um registro, tendo a possibilidade de usar as ações de "Voltar", "Editar" e "Remover".
 */
export class PoPageDetailBaseComponent {
    constructor(languageService) {
        /**
         * Evento que será disparado ao clicar no botão de "Voltar".
         *
         * ```
         * <po-page-detail (p-back)="myBackFunction()">
         * </po-page-detail>
         * ```
         *
         * > Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.
         */
        this.back = new EventEmitter();
        /**
         * Evento que será disparado ao clicar no botão de "Editar".
         *
         * ```
         * <po-page-detail (p-edit)="myEditFunction()">
         * </po-page-detail>
         * ```
         *
         * > Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.
         */
        this.edit = new EventEmitter();
        /**
         * Evento que será disparado ao clicar no botão de "Remover".
         *
         * ```
         * <po-page-detail (p-remove)="myRemoveFunction()">
         * </po-page-detail>
         * ```
         *
         * > Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.
         */
        this.remove = new EventEmitter();
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-page-detail`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoPageDetailLiterals = {
     *    edit: 'Edição',
     *    remove: 'Exclusão',
     *    back: 'Menu'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoPageDetailLiterals = {
     *    remove: 'Excluir registro permanentemente'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-page-detail
     *   [p-literals]="customLiterals">
     * </po-page-detail>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poPageDetailLiteralsDefault[poLocaleDefault],
                ...poPageDetailLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poPageDetailLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poPageDetailLiteralsDefault[this.language];
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
PoPageDetailBaseComponent.ɵfac = function PoPageDetailBaseComponent_Factory(t) { return new (t || PoPageDetailBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageDetailBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageDetailBaseComponent, viewQuery: function PoPageDetailBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoPageContentComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poPageContent = _t.first);
    } }, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], literals: ["p-literals", "literals"], title: ["p-title", "title"] }, outputs: { back: "p-back", edit: "p-edit", remove: "p-remove" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDetailBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poPageContent: [{
            type: ViewChild,
            args: [PoPageContentComponent, { static: true }]
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], back: [{
            type: Output,
            args: ['p-back']
        }], edit: [{
            type: Output,
            args: ['p-edit']
        }], remove: [{
            type: Output,
            args: ['p-remove']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], title: [{
            type: Input,
            args: ['p-title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1kZXRhaWwtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS9wby1wYWdlLWRldGFpbC9wby1wYWdlLWRldGFpbC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7OztBQUd0RixNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRztJQUN6QyxFQUFFLEVBQXdCO1FBQ3hCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsUUFBUTtLQUNqQjtJQUNELEVBQUUsRUFBd0I7UUFDeEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0lBQ0QsRUFBRSxFQUF3QjtRQUN4QixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRCxFQUFFLEVBQXdCO1FBQ3hCLElBQUksRUFBRSxhQUFhO1FBQ25CLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0NBQ0YsQ0FBQztBQUVGOzs7OztHQUtHO0FBRUgsTUFBTSxPQUFPLHlCQUF5QjtJQTJHcEMsWUFBWSxlQUFrQztRQXJHOUM7Ozs7Ozs7OztXQVNHO1FBQ2UsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUM7Ozs7Ozs7OztXQVNHO1FBQ2UsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUM7Ozs7Ozs7OztXQVNHO1FBQ2lCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBb0U5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUEvREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUNHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLEtBQTJCO1FBQzNELElBQUksS0FBSyxZQUFZLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsR0FBRywyQkFBMkIsQ0FBQyxlQUFlLENBQUM7Z0JBQy9DLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDN0MsR0FBRyxLQUFLO2FBQ1QsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksMkJBQTJCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsSUFBc0IsS0FBSyxDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7a0dBekdVLHlCQUF5Qjs0RUFBekIseUJBQXlCO3VCQUN6QixzQkFBc0I7Ozs7O3VGQUR0Qix5QkFBeUI7Y0FEckMsU0FBUztvRUFFNkMsYUFBYTtrQkFBakUsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHNUIsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBWUgsSUFBSTtrQkFBckIsTUFBTTttQkFBQyxRQUFRO1lBWUUsSUFBSTtrQkFBckIsTUFBTTttQkFBQyxRQUFRO1lBWUksTUFBTTtrQkFBekIsTUFBTTttQkFBQyxVQUFVO1lBMENPLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQWdCRyxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb0JyZWFkY3J1bWIgfSBmcm9tICcuLi8uLi9wby1icmVhZGNydW1iL3BvLWJyZWFkY3J1bWIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3BvLXBhZ2UtY29udGVudC9wby1wYWdlLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9QYWdlRGV0YWlsTGl0ZXJhbHMgfSBmcm9tICcuL3BvLXBhZ2UtZGV0YWlsLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9QYWdlRGV0YWlsTGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9QYWdlRGV0YWlsTGl0ZXJhbHM+e1xyXG4gICAgYmFjazogJ0JhY2snLFxyXG4gICAgZWRpdDogJ0VkaXQnLFxyXG4gICAgcmVtb3ZlOiAnUmVtb3ZlJ1xyXG4gIH0sXHJcbiAgZXM6IDxQb1BhZ2VEZXRhaWxMaXRlcmFscz57XHJcbiAgICBiYWNrOiAnVm9sdmVyJyxcclxuICAgIGVkaXQ6ICdFZGl0YXInLFxyXG4gICAgcmVtb3ZlOiAnRWxpbWluYXInXHJcbiAgfSxcclxuICBwdDogPFBvUGFnZURldGFpbExpdGVyYWxzPntcclxuICAgIGJhY2s6ICdWb2x0YXInLFxyXG4gICAgZWRpdDogJ0VkaXRhcicsXHJcbiAgICByZW1vdmU6ICdSZW1vdmVyJ1xyXG4gIH0sXHJcbiAgcnU6IDxQb1BhZ2VEZXRhaWxMaXRlcmFscz57XHJcbiAgICBiYWNrOiAn0LLQvtC30LLRgNCw0YnQtdC90LjQtScsXHJcbiAgICBlZGl0OiAn0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YwnLFxyXG4gICAgcmVtb3ZlOiAn0YPQtNCw0LvQtdC90LjQtSdcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSAqKnBvLXBhZ2UtZGV0YWlsKiogw6kgdXRpbGl6YWRvIGNvbW8gY29udGFpbmVyIHByaW5jaXBhbCBwYXJhIGEgdGVsYSBkZVxyXG4gKiBkZXRhbGhhbWVudG8gZGUgdW0gcmVnaXN0cm8sIHRlbmRvIGEgcG9zc2liaWxpZGFkZSBkZSB1c2FyIGFzIGHDp8O1ZXMgZGUgXCJWb2x0YXJcIiwgXCJFZGl0YXJcIiBlIFwiUmVtb3ZlclwiLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VEZXRhaWxCYXNlQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKFBvUGFnZUNvbnRlbnRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBvUGFnZUNvbnRlbnQ6IFBvUGFnZUNvbnRlbnRDb21wb25lbnQ7XHJcblxyXG4gIC8qKiBPYmpldG8gY29tIHByb3ByaWVkYWRlcyBkbyBicmVhZGNydW1iLiAqL1xyXG4gIEBJbnB1dCgncC1icmVhZGNydW1iJykgYnJlYWRjcnVtYjogUG9CcmVhZGNydW1iO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlcsOhIGRpc3BhcmFkbyBhbyBjbGljYXIgbm8gYm90w6NvIGRlIFwiVm9sdGFyXCIuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tcGFnZS1kZXRhaWwgKHAtYmFjayk9XCJteUJhY2tGdW5jdGlvbigpXCI+XHJcbiAgICogPC9wby1wYWdlLWRldGFpbD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHV0aWxpemFyIGVzdGEgcHJvcHJpZWRhZGUsIG8gYm90w6NvIGRlIFwiVm9sdGFyXCIgbsOjbyBzZXLDoSBleGliaWRvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtYmFjaycpIGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2Vyw6EgZGlzcGFyYWRvIGFvIGNsaWNhciBubyBib3TDo28gZGUgXCJFZGl0YXJcIi5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1wYWdlLWRldGFpbCAocC1lZGl0KT1cIm15RWRpdEZ1bmN0aW9uKClcIj5cclxuICAgKiA8L3BvLXBhZ2UtZGV0YWlsPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBDYXNvIG7Do28gdXRpbGl6YXIgZXN0YSBwcm9wcmllZGFkZSwgbyBib3TDo28gZGUgXCJFZGl0YXJcIiBuw6NvIHNlcsOhIGV4aWJpZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1lZGl0JykgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZXLDoSBkaXNwYXJhZG8gYW8gY2xpY2FyIG5vIGJvdMOjbyBkZSBcIlJlbW92ZXJcIi5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1wYWdlLWRldGFpbCAocC1yZW1vdmUpPVwibXlSZW1vdmVGdW5jdGlvbigpXCI+XHJcbiAgICogPC9wby1wYWdlLWRldGFpbD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHV0aWxpemFyIGVzdGEgcHJvcHJpZWRhZGUsIG8gYm90w6NvIGRlIFwiUmVtb3ZlclwiIG7Do28gc2Vyw6EgZXhpYmlkby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXJlbW92ZScpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBfbGl0ZXJhbHM6IFBvUGFnZURldGFpbExpdGVyYWxzO1xyXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhcyBsaXRlcmFpcyB1c2FkYXMgbm8gYHBvLXBhZ2UtZGV0YWlsYC5cclxuICAgKlxyXG4gICAqIEV4aXN0ZW0gZHVhcyBtYW5laXJhcyBkZSBjdXN0b21pemFyIG8gY29tcG9uZW50ZSwgcGFzc2FuZG8gdW0gb2JqZXRvIGNvbSB0b2RhcyBhcyBsaXRlcmFpcyBkaXNwb27DrXZlaXM6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvUGFnZURldGFpbExpdGVyYWxzID0ge1xyXG4gICAqICAgIGVkaXQ6ICdFZGnDp8OjbycsXHJcbiAgICogICAgcmVtb3ZlOiAnRXhjbHVzw6NvJyxcclxuICAgKiAgICBiYWNrOiAnTWVudSdcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIE91IHBhc3NhbmRvIGFwZW5hcyBhcyBsaXRlcmFpcyBxdWUgZGVzZWphIGN1c3RvbWl6YXI6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvUGFnZURldGFpbExpdGVyYWxzID0ge1xyXG4gICAqICAgIHJlbW92ZTogJ0V4Y2x1aXIgcmVnaXN0cm8gcGVybWFuZW50ZW1lbnRlJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogRSBwYXJhIGNhcnJlZ2FyIGFzIGxpdGVyYWlzIGN1c3RvbWl6YWRhcywgYmFzdGEgYXBlbmFzIHBhc3NhciBvIG9iamV0byBwYXJhIG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1wYWdlLWRldGFpbFxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLXBhZ2UtZGV0YWlsPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBPIG9iamV0byBwYWRyw6NvIGRlIGxpdGVyYWlzIHNlcsOhIHRyYWR1emlkbyBkZSBhY29yZG8gY29tIG8gaWRpb21hIGRvXHJcbiAgICogW2BQb0kxOG5TZXJ2aWNlYF0oL2RvY3VtZW50YXRpb24vcG8taTE4bikgb3UgZG8gYnJvd3Nlci5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBzZXQgbGl0ZXJhbHModmFsdWU6IFBvUGFnZURldGFpbExpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb1BhZ2VEZXRhaWxMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgICAgICAuLi5wb1BhZ2VEZXRhaWxMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV0sXHJcbiAgICAgICAgLi4udmFsdWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0gcG9QYWdlRGV0YWlsTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgbGl0ZXJhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGl0ZXJhbHMgfHwgcG9QYWdlRGV0YWlsTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgLyoqIFTDrXR1bG8gZGEgcMOhZ2luYS4gKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wb1BhZ2VDb250ZW50LnJlY2FsY3VsYXRlSGVhZGVyU2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=