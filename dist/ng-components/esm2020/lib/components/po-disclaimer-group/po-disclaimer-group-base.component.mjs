import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, isKeyCodeEnter, uuid } from '../../utils/util';
import { poLocaleDefault } from '../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
export const poDisclaimerGroupLiteralsDefault = {
    en: { removeAll: 'Remove all' },
    es: { removeAll: 'Eliminar todos' },
    pt: { removeAll: 'Remover todos' },
    ru: { removeAll: 'Удалить все' }
};
/**
 * @description
 *
 * O componente `po-disclaimer-group` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.
 *
 * À partir de dois *disclaimers* com o botão **fechar** habilitado, o componente renderiza de forma automática um novo e destacado
 * *disclaimer* que possibilita **remover todos**, mas que também pode ser desabilitado.
 *
 * Também é possível navegar entre os *disclaimers* através do teclado utilizando a tecla *tab* e, para remoção do *disclaimer* selecionado,
 * basta pressionar a tecla *enter*. Esta funcionalidade não se aplica caso a propriedade `hideClose` estiver habilitada.
 *
 * > Veja a integração destas funcionalidade no componente [po-page-list](/documentation/po-page-list).
 */
export class PoDisclaimerGroupBaseComponent {
    constructor(differs, languageService) {
        /**
         * @optional
         *
         * @description
         *
         * Função que será disparada quando a lista de *disclaimers* for modificada.
         */
        this.change = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Função que será disparada quando um *disclaimer* for removido da lista de *disclaimers* pelo usuário.
         *
         * Recebe como parâmetro um objeto conforme a interface `PoDisclaimerGroupRemoveAction`.
         */
        this.remove = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Função que será disparada quando todos os *disclaimers* forem removidos da lista de *disclaimers* pelo usuário,
         * utilizando o botão "remover todos".
         *
         * Recebe como parâmetro uma lista contendo todos os `disclaimers` removidos.
         */
        this.removeAll = new EventEmitter();
        this._disclaimers = [];
        this._hideRemoveAll = false;
        this.previousDisclaimers = [];
        const language = languageService.getShortLanguage();
        this.differ = differs.find([]).create(null);
        this.literals = {
            ...poDisclaimerGroupLiteralsDefault[poLocaleDefault],
            ...poDisclaimerGroupLiteralsDefault[language]
        };
    }
    /** Lista de *disclaimers*. */
    /**
     * @description
     *
     * Lista de *disclaimers*.
     *
     * Para que a lista de *disclaimers* seja atualizada dinamicamente deve-se passar uma nova referência do array de `PoDisclaimer`.
     *
     * Exemplo adicionando um *disclaimer* no array:
     *
     * ```
     * this.disclaimers = [...this.disclaimers, disclaimer];
     * ```
     *
     * ou
     *
     * ```
     * this.disclaimers = this.disclaimers.concat(disclaimer);
     * ```
     */
    set disclaimers(value) {
        this.previousDisclaimers = [...this.disclaimers];
        this._disclaimers = this.checkDisclaimers(value);
    }
    get disclaimers() {
        return this._disclaimers;
    }
    /**
     * @optional
     *
     * @description
     *
     * Oculta o botão para remover todos os *disclaimers* do grupo.
     *
     * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
     *
     * @default `false`
     */
    set hideRemoveAll(value) {
        this._hideRemoveAll = value === '' ? true : convertToBoolean(value);
    }
    get hideRemoveAll() {
        return this._hideRemoveAll;
    }
    ngDoCheck() {
        this.checkChanges();
    }
    onCloseAction(disclaimer) {
        this.removeDisclaimer(disclaimer);
        this.emitChangeDisclaimers();
        this.remove.emit({
            removedDisclaimer: { ...disclaimer },
            currentDisclaimers: [...this.disclaimers]
        });
    }
    isRemoveAll() {
        return !this.hideRemoveAll && this.disclaimers.filter(c => !c.hideClose).length > 1;
    }
    onKeyPress(event) {
        if (isKeyCodeEnter(event)) {
            this.removeAllItems();
        }
    }
    removeAllItems() {
        const removeItems = [];
        this.disclaimers.forEach(disclaimer => {
            if (!disclaimer.hideClose) {
                removeItems.push(disclaimer);
            }
        });
        removeItems.forEach(disclaimer => this.removeDisclaimer(disclaimer));
        this.emitChangeDisclaimers();
        this.removeAll.emit([...removeItems]);
    }
    removeDisclaimer(disclaimer) {
        const itemIndex = this.disclaimers.findIndex(d => d['$id'] === disclaimer['$id']);
        this.disclaimers.splice(itemIndex, 1);
    }
    checkChanges() {
        if (this.differ) {
            const changes = this.differ.diff(this.disclaimers);
            if (changes && this.disclaimersAreChanged(this.disclaimers)) {
                this.emitChangeDisclaimers();
            }
        }
    }
    checkDisclaimers(disclaimers) {
        if (Array.isArray(disclaimers)) {
            for (let i = 0; i < disclaimers.length; i++) {
                const disclaimer = disclaimers[i];
                if (disclaimer.value || disclaimer.value === 0 || disclaimer.value === false) {
                    disclaimer['$id'] = uuid();
                }
                else {
                    disclaimers.splice(i, 1);
                    i--;
                }
            }
            return disclaimers;
        }
        return [];
    }
    disclaimersAreChanged(disclaimers) {
        const currentValues = disclaimers;
        if (currentValues.length !== this.previousDisclaimers.length) {
            return true;
        }
        return currentValues.some((disclaimer, index) => disclaimer.value !== this.previousDisclaimers[index].value ||
            disclaimer.property !== this.previousDisclaimers[index].property);
    }
    emitChangeDisclaimers() {
        setTimeout(() => {
            this.change.emit(this.disclaimers);
        });
        this.previousDisclaimers = [...this._disclaimers];
    }
}
PoDisclaimerGroupBaseComponent.ɵfac = function PoDisclaimerGroupBaseComponent_Factory(t) { return new (t || PoDisclaimerGroupBaseComponent)(i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoDisclaimerGroupBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDisclaimerGroupBaseComponent, inputs: { title: ["p-title", "title"], disclaimers: ["p-disclaimers", "disclaimers"], hideRemoveAll: ["p-hide-remove-all", "hideRemoveAll"] }, outputs: { change: "p-change", remove: "p-remove", removeAll: "p-remove-all" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDisclaimerGroupBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i0.IterableDiffers }, { type: i1.PoLanguageService }]; }, { title: [{
            type: Input,
            args: ['p-title']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], remove: [{
            type: Output,
            args: ['p-remove']
        }], removeAll: [{
            type: Output,
            args: ['p-remove-all']
        }], disclaimers: [{
            type: Input,
            args: ['p-disclaimers']
        }], hideRemoveAll: [{
            type: Input,
            args: ['p-hide-remove-all']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlzY2xhaW1lci1ncm91cC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1kaXNjbGFpbWVyLWdyb3VwL3BvLWRpc2NsYWltZXItZ3JvdXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQW1CLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7OztBQUlsRixNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFO0lBQy9CLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtJQUNuQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO0lBQ2xDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUU7Q0FDakMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUVILE1BQU0sT0FBTyw4QkFBOEI7SUE4RnpDLFlBQVksT0FBd0IsRUFBRSxlQUFrQztRQTFGeEU7Ozs7OztXQU1HO1FBQ2lCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RTs7Ozs7Ozs7V0FRRztRQUNpQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEU7Ozs7Ozs7OztXQVNHO1FBQ3FCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUl2RSxpQkFBWSxHQUF3QixFQUFFLENBQUM7UUFDdkMsbUJBQWMsR0FBWSxLQUFLLENB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QUM7UUFFdkQsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDNUQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FDdkIsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDcEIsVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSztZQUMxRCxVQUFVLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQ25FLENBQUM7SUFDSixDQUFDO0lBRU8scUJBQXFCO1FBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs0R0FyTVUsOEJBQThCO2lGQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxTQUFTO2tHQUdVLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQVNJLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQVdFLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQVlNLFNBQVM7a0JBQWhDLE1BQU07bUJBQUMsY0FBYztZQStCTSxXQUFXO2tCQUF0QyxLQUFLO21CQUFDLGVBQWU7WUFxQmxCLGFBQWE7a0JBRGhCLEtBQUs7bUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSXRlcmFibGVEaWZmZXJzLCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgaXNLZXlDb2RlRW50ZXIsIHV1aWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5cclxuaW1wb3J0IHsgUG9EaXNjbGFpbWVyIH0gZnJvbSAnLi4vcG8tZGlzY2xhaW1lci9wby1kaXNjbGFpbWVyLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9EaXNjbGFpbWVyR3JvdXBMaXRlcmFsc0RlZmF1bHQgPSB7XHJcbiAgZW46IHsgcmVtb3ZlQWxsOiAnUmVtb3ZlIGFsbCcgfSxcclxuICBlczogeyByZW1vdmVBbGw6ICdFbGltaW5hciB0b2RvcycgfSxcclxuICBwdDogeyByZW1vdmVBbGw6ICdSZW1vdmVyIHRvZG9zJyB9LFxyXG4gIHJ1OiB7IHJlbW92ZUFsbDogJ9Cj0LTQsNC70LjRgtGMINCy0YHQtScgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLWRpc2NsYWltZXItZ3JvdXBgIMOpIHJlY29tZW5kYWRvIHBhcmEgbWFuaXB1bGFyIHBhbGF2cmFzLWNoYXZlIGRlIGZpbHRyb3MgYXBsaWNhZG9zIGVtIHVtYSBwZXNxdWlzYS5cclxuICpcclxuICogw4AgcGFydGlyIGRlIGRvaXMgKmRpc2NsYWltZXJzKiBjb20gbyBib3TDo28gKipmZWNoYXIqKiBoYWJpbGl0YWRvLCBvIGNvbXBvbmVudGUgcmVuZGVyaXphIGRlIGZvcm1hIGF1dG9tw6F0aWNhIHVtIG5vdm8gZSBkZXN0YWNhZG9cclxuICogKmRpc2NsYWltZXIqIHF1ZSBwb3NzaWJpbGl0YSAqKnJlbW92ZXIgdG9kb3MqKiwgbWFzIHF1ZSB0YW1iw6ltIHBvZGUgc2VyIGRlc2FiaWxpdGFkby5cclxuICpcclxuICogVGFtYsOpbSDDqSBwb3Nzw612ZWwgbmF2ZWdhciBlbnRyZSBvcyAqZGlzY2xhaW1lcnMqIGF0cmF2w6lzIGRvIHRlY2xhZG8gdXRpbGl6YW5kbyBhIHRlY2xhICp0YWIqIGUsIHBhcmEgcmVtb8Onw6NvIGRvICpkaXNjbGFpbWVyKiBzZWxlY2lvbmFkbyxcclxuICogYmFzdGEgcHJlc3Npb25hciBhIHRlY2xhICplbnRlciouIEVzdGEgZnVuY2lvbmFsaWRhZGUgbsOjbyBzZSBhcGxpY2EgY2FzbyBhIHByb3ByaWVkYWRlIGBoaWRlQ2xvc2VgIGVzdGl2ZXIgaGFiaWxpdGFkYS5cclxuICpcclxuICogPiBWZWphIGEgaW50ZWdyYcOnw6NvIGRlc3RhcyBmdW5jaW9uYWxpZGFkZSBubyBjb21wb25lbnRlIFtwby1wYWdlLWxpc3RdKC9kb2N1bWVudGF0aW9uL3BvLXBhZ2UtbGlzdCkuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvRGlzY2xhaW1lckdyb3VwQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gIC8qKiBUw610dWxvIGRvIGdydXBvIGRlICpkaXNjbGFpbWVycyouICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgZGlzcGFyYWRhIHF1YW5kbyBhIGxpc3RhIGRlICpkaXNjbGFpbWVycyogZm9yIG1vZGlmaWNhZGEuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgZGlzcGFyYWRhIHF1YW5kbyB1bSAqZGlzY2xhaW1lciogZm9yIHJlbW92aWRvIGRhIGxpc3RhIGRlICpkaXNjbGFpbWVycyogcGVsbyB1c3XDoXJpby5cclxuICAgKlxyXG4gICAqIFJlY2ViZSBjb21vIHBhcsOibWV0cm8gdW0gb2JqZXRvIGNvbmZvcm1lIGEgaW50ZXJmYWNlIGBQb0Rpc2NsYWltZXJHcm91cFJlbW92ZUFjdGlvbmAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1yZW1vdmUnKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBxdWUgc2Vyw6EgZGlzcGFyYWRhIHF1YW5kbyB0b2RvcyBvcyAqZGlzY2xhaW1lcnMqIGZvcmVtIHJlbW92aWRvcyBkYSBsaXN0YSBkZSAqZGlzY2xhaW1lcnMqIHBlbG8gdXN1w6FyaW8sXHJcbiAgICogdXRpbGl6YW5kbyBvIGJvdMOjbyBcInJlbW92ZXIgdG9kb3NcIi5cclxuICAgKlxyXG4gICAqIFJlY2ViZSBjb21vIHBhcsOibWV0cm8gdW1hIGxpc3RhIGNvbnRlbmRvIHRvZG9zIG9zIGBkaXNjbGFpbWVyc2AgcmVtb3ZpZG9zLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtcmVtb3ZlLWFsbCcpIHJlbW92ZUFsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbGl0ZXJhbHM7XHJcblxyXG4gIHByaXZhdGUgX2Rpc2NsYWltZXJzOiBBcnJheTxQb0Rpc2NsYWltZXI+ID0gW107XHJcbiAgcHJpdmF0ZSBfaGlkZVJlbW92ZUFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGRpZmZlcjtcclxuICBwcml2YXRlIHByZXZpb3VzRGlzY2xhaW1lcnM6IEFycmF5PFBvRGlzY2xhaW1lcj4gPSBbXTtcclxuXHJcbiAgLyoqIExpc3RhIGRlICpkaXNjbGFpbWVycyouICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZGUgKmRpc2NsYWltZXJzKi5cclxuICAgKlxyXG4gICAqIFBhcmEgcXVlIGEgbGlzdGEgZGUgKmRpc2NsYWltZXJzKiBzZWphIGF0dWFsaXphZGEgZGluYW1pY2FtZW50ZSBkZXZlLXNlIHBhc3NhciB1bWEgbm92YSByZWZlcsOqbmNpYSBkbyBhcnJheSBkZSBgUG9EaXNjbGFpbWVyYC5cclxuICAgKlxyXG4gICAqIEV4ZW1wbG8gYWRpY2lvbmFuZG8gdW0gKmRpc2NsYWltZXIqIG5vIGFycmF5OlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogdGhpcy5kaXNjbGFpbWVycyA9IFsuLi50aGlzLmRpc2NsYWltZXJzLCBkaXNjbGFpbWVyXTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIG91XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB0aGlzLmRpc2NsYWltZXJzID0gdGhpcy5kaXNjbGFpbWVycy5jb25jYXQoZGlzY2xhaW1lcik7XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpc2NsYWltZXJzJykgc2V0IGRpc2NsYWltZXJzKHZhbHVlOiBBcnJheTxQb0Rpc2NsYWltZXI+KSB7XHJcbiAgICB0aGlzLnByZXZpb3VzRGlzY2xhaW1lcnMgPSBbLi4udGhpcy5kaXNjbGFpbWVyc107XHJcbiAgICB0aGlzLl9kaXNjbGFpbWVycyA9IHRoaXMuY2hlY2tEaXNjbGFpbWVycyh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzY2xhaW1lcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzY2xhaW1lcnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2N1bHRhIG8gYm90w6NvIHBhcmEgcmVtb3ZlciB0b2RvcyBvcyAqZGlzY2xhaW1lcnMqIGRvIGdydXBvLlxyXG4gICAqXHJcbiAgICogPiBQb3IgcGFkcsOjbywgbyBtZXNtbyDDqSBleGliaWRvIMOgIHBhcnRpciBkZSBkb2lzIG91IG1haXMgKmRpc2NsYWltZXJzKiBjb20gYSBvcMOnw6NvIGBoaWRlQ2xvc2VgIGhhYmlsaXRhZGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtcmVtb3ZlLWFsbCcpXHJcbiAgc2V0IGhpZGVSZW1vdmVBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVSZW1vdmVBbGwgPSA8YW55PnZhbHVlID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBoaWRlUmVtb3ZlQWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVSZW1vdmVBbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICB0aGlzLmRpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XHJcbiAgICAgIC4uLnBvRGlzY2xhaW1lckdyb3VwTGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgIC4uLnBvRGlzY2xhaW1lckdyb3VwTGl0ZXJhbHNEZWZhdWx0W2xhbmd1YWdlXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuY2hlY2tDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlQWN0aW9uKGRpc2NsYWltZXIpIHtcclxuICAgIHRoaXMucmVtb3ZlRGlzY2xhaW1lcihkaXNjbGFpbWVyKTtcclxuXHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VEaXNjbGFpbWVycygpO1xyXG4gICAgdGhpcy5yZW1vdmUuZW1pdCh7XHJcbiAgICAgIHJlbW92ZWREaXNjbGFpbWVyOiB7IC4uLmRpc2NsYWltZXIgfSxcclxuICAgICAgY3VycmVudERpc2NsYWltZXJzOiBbLi4udGhpcy5kaXNjbGFpbWVyc11cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNSZW1vdmVBbGwoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuaGlkZVJlbW92ZUFsbCAmJiB0aGlzLmRpc2NsYWltZXJzLmZpbHRlcihjID0+ICFjLmhpZGVDbG9zZSkubGVuZ3RoID4gMTtcclxuICB9XHJcblxyXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGlzS2V5Q29kZUVudGVyKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEl0ZW1zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGxJdGVtcygpIHtcclxuICAgIGNvbnN0IHJlbW92ZUl0ZW1zID0gW107XHJcblxyXG4gICAgdGhpcy5kaXNjbGFpbWVycy5mb3JFYWNoKGRpc2NsYWltZXIgPT4ge1xyXG4gICAgICBpZiAoIWRpc2NsYWltZXIuaGlkZUNsb3NlKSB7XHJcbiAgICAgICAgcmVtb3ZlSXRlbXMucHVzaChkaXNjbGFpbWVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVtb3ZlSXRlbXMuZm9yRWFjaChkaXNjbGFpbWVyID0+IHRoaXMucmVtb3ZlRGlzY2xhaW1lcihkaXNjbGFpbWVyKSk7XHJcblxyXG4gICAgdGhpcy5lbWl0Q2hhbmdlRGlzY2xhaW1lcnMoKTtcclxuICAgIHRoaXMucmVtb3ZlQWxsLmVtaXQoWy4uLnJlbW92ZUl0ZW1zXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZURpc2NsYWltZXIoZGlzY2xhaW1lcjogYW55KSB7XHJcbiAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLmRpc2NsYWltZXJzLmZpbmRJbmRleChkID0+IGRbJyRpZCddID09PSBkaXNjbGFpbWVyWyckaWQnXSk7XHJcbiAgICB0aGlzLmRpc2NsYWltZXJzLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0NoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5kaWZmZXIpIHtcclxuICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5kaXNjbGFpbWVycyk7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlcyAmJiB0aGlzLmRpc2NsYWltZXJzQXJlQ2hhbmdlZCh0aGlzLmRpc2NsYWltZXJzKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdENoYW5nZURpc2NsYWltZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tEaXNjbGFpbWVycyhkaXNjbGFpbWVyczogQXJyYXk8UG9EaXNjbGFpbWVyPikge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGlzY2xhaW1lcnMpKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzY2xhaW1lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaXNjbGFpbWVyID0gZGlzY2xhaW1lcnNbaV07XHJcblxyXG4gICAgICAgIGlmIChkaXNjbGFpbWVyLnZhbHVlIHx8IGRpc2NsYWltZXIudmFsdWUgPT09IDAgfHwgZGlzY2xhaW1lci52YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGRpc2NsYWltZXJbJyRpZCddID0gdXVpZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNjbGFpbWVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGlzY2xhaW1lcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNjbGFpbWVyc0FyZUNoYW5nZWQoZGlzY2xhaW1lcnM6IEFycmF5PFBvRGlzY2xhaW1lcj4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXM6IEFycmF5PFBvRGlzY2xhaW1lcj4gPSBkaXNjbGFpbWVycztcclxuXHJcbiAgICBpZiAoY3VycmVudFZhbHVlcy5sZW5ndGggIT09IHRoaXMucHJldmlvdXNEaXNjbGFpbWVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnRWYWx1ZXMuc29tZShcclxuICAgICAgKGRpc2NsYWltZXIsIGluZGV4KSA9PlxyXG4gICAgICAgIGRpc2NsYWltZXIudmFsdWUgIT09IHRoaXMucHJldmlvdXNEaXNjbGFpbWVyc1tpbmRleF0udmFsdWUgfHxcclxuICAgICAgICBkaXNjbGFpbWVyLnByb3BlcnR5ICE9PSB0aGlzLnByZXZpb3VzRGlzY2xhaW1lcnNbaW5kZXhdLnByb3BlcnR5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlRGlzY2xhaW1lcnMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRpc2NsYWltZXJzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcmV2aW91c0Rpc2NsYWltZXJzID0gWy4uLnRoaXMuX2Rpc2NsYWltZXJzXTtcclxuICB9XHJcbn1cclxuIl19