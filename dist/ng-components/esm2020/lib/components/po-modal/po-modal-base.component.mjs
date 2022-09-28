import { Input, EventEmitter, Directive } from '@angular/core';
import { convertToBoolean } from './../../utils/util';
import { poModalLiterals } from './po-modal.literals';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-language/po-language.service";
/**
 * @description
 *
 * O componente `po-modal` é utilizado para incluir conteúdos rápidos e informativos.
 *
 * No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.
 *
 * Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `po-chart`,
 * `po-table` e os demais componentes do PO.
 *
 * No rodapé encontram-se os botões de ação primária e secundária, no qual permitem definir uma ação e um rótulo, bem como
 * definir um estado de carregando e / ou desabilitado e / ou definir o botão com o tipo *danger*. Também é possível utilizar
 * o componente [`PoModalFooter`](/documentation/po-modal-footer).
 *
 * > É possível fechar a modal através da tecla *ESC*, quando a propriedade `p-hide-close` não estiver habilitada.
 */
export class PoModalBaseComponent {
    constructor(poLanguageService) {
        // Controla se a modal fica oculto ou visível, por padrão é oculto
        this.isHidden = true;
        // Event emmiter para quando a modal é fechada pelo 'X'.
        this.onXClosed = new EventEmitter();
        this._hideClose = false;
        this._size = 'md';
        /**
         * Define o fechamento da modal ao clicar fora da mesma.
         * Informe o valor `true` para ativar o fechamento ao clicar fora da modal.
         */
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.clickOut = false;
        this.language = poLanguageService.getShortLanguage();
        this.literals = {
            ...poModalLiterals[this.language]
        };
    }
    /**
     * Define o tamanho da modal.
     *
     * Valores válidos:
     *  - `sm` (pequeno)
     *  - `md` (médio)
     *  - `lg` (grande)
     *  - `xl` (extra grande)
     *  - `auto` (automático)
     *
     * > Quando informado `auto` a modal calculará automaticamente seu tamanho baseado em seu conteúdo.
     * Caso não seja informado um valor, a modal terá o tamanho definido como `md`.
     *
     * > Todas as opções de tamanho possuem uma largura máxima de **768px**.
     */
    set size(value) {
        const sizes = ['sm', 'md', 'lg', 'xl', 'auto'];
        this._size = sizes.indexOf(value) > -1 ? value : 'md';
    }
    get size() {
        return this._size;
    }
    set setClickOut(value) {
        this.clickOut = value === '' ? false : convertToBoolean(value);
    }
    /**
     * @optional
     *
     * @description
     *
     * Oculta o ícone de fechar do cabeçalho da modal.
     *
     * > Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla *ESC*.
     *
     * @default `false`
     */
    set hideClose(value) {
        this._hideClose = convertToBoolean(value);
    }
    get hideClose() {
        return this._hideClose;
    }
    /** Função para fechar a modal. */
    close(xClosed = false) {
        this.isHidden = true;
        if (xClosed) {
            this.onXClosed.emit(xClosed);
        }
    }
    /** Função para abrir a modal. */
    open() {
        this.validPrimaryAction();
        this.isHidden = false;
    }
    validPrimaryAction() {
        if (!this.primaryAction) {
            this.primaryAction = {
                action: () => this.close(),
                label: this.literals.close
            };
        }
        if (!this.primaryAction['action']) {
            this.primaryAction['action'] = () => this.close();
        }
        if (!this.primaryAction['label']) {
            this.primaryAction['label'] = this.literals.close;
        }
    }
}
PoModalBaseComponent.ɵfac = function PoModalBaseComponent_Factory(t) { return new (t || PoModalBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoModalBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoModalBaseComponent, inputs: { title: ["p-title", "title"], primaryAction: ["p-primary-action", "primaryAction"], secondaryAction: ["p-secondary-action", "secondaryAction"], size: ["p-size", "size"], setClickOut: ["p-click-out", "setClickOut"], hideClose: ["p-hide-close", "hideClose"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { title: [{
            type: Input,
            args: ['p-title']
        }], primaryAction: [{
            type: Input,
            args: ['p-primary-action']
        }], secondaryAction: [{
            type: Input,
            args: ['p-secondary-action']
        }], size: [{
            type: Input,
            args: ['p-size']
        }], setClickOut: [{
            type: Input,
            args: ['p-click-out']
        }], hideClose: [{
            type: Input,
            args: ['p-hide-close']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbW9kYWwtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbW9kYWwvcG8tbW9kYWwtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXREOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE1BQU0sT0FBTyxvQkFBb0I7SUErRS9CLFlBQVksaUJBQW9DO1FBOURoRCxrRUFBa0U7UUFDbEUsYUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQix3REFBd0Q7UUFDakQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFdkMsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBMEI5Qjs7O1dBR0c7UUFDSCw4REFBOEQ7UUFDOUQsYUFBUSxHQUFhLEtBQUssQ0FBQztRQXlCekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXJELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBM0REOzs7Ozs7Ozs7Ozs7OztPQWNHO0lBQ0gsSUFBcUIsSUFBSSxDQUFDLEtBQWE7UUFDckMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFRRCxJQUEwQixXQUFXLENBQUMsS0FBdUI7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsSUFBMkIsU0FBUyxDQUFDLEtBQWM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFVRCxrQ0FBa0M7SUFDbEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLElBQUk7UUFDRixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ25CLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2FBQzNCLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNuRDtJQUNILENBQUM7O3dGQXBIVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFNBQVM7b0VBR1UsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBT1csYUFBYTtrQkFBdkMsS0FBSzttQkFBQyxrQkFBa0I7WUFHSSxlQUFlO2tCQUEzQyxLQUFLO21CQUFDLG9CQUFvQjtZQTZCTixJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVE7WUFlVyxXQUFXO2tCQUFwQyxLQUFLO21CQUFDLGFBQWE7WUFlTyxTQUFTO2tCQUFuQyxLQUFLO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4gfSBmcm9tICcuLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb01vZGFsQWN0aW9uIH0gZnJvbSAnLi9wby1tb2RhbC1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvTW9kYWxMaXRlcmFscyB9IGZyb20gJy4vcG8tbW9kYWwubGl0ZXJhbHMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLW1vZGFsYCDDqSB1dGlsaXphZG8gcGFyYSBpbmNsdWlyIGNvbnRlw7pkb3MgcsOhcGlkb3MgZSBpbmZvcm1hdGl2b3MuXHJcbiAqXHJcbiAqIE5vIGNhYmXDp2FsaG8gZG8gY29tcG9uZW50ZSDDqSBwb3Nzw612ZWwgZGVmaW5pciB1bSB0w610dWxvIGUgY29tbyB0YW1iw6ltIHBlcm1pdGUgb2N1bHRhciBvIMOtY29uZSBkZSBmZWNoYW1lbnRvIGRhIG1vZGFsLlxyXG4gKlxyXG4gKiBFbSBzZXUgY29ycG8gw6kgcG9zc8OtdmVsIGRlZmluaXIgdW0gY29udGXDumRvIGluZm9ybWF0aXZvLCBwb2RlbmRvIHV0aWxpemFyIGNvbXBvbmVudGVzIGNvbW8gcG9yIGV4ZW1wbG8gYHBvLWNoYXJ0YCxcclxuICogYHBvLXRhYmxlYCBlIG9zIGRlbWFpcyBjb21wb25lbnRlcyBkbyBQTy5cclxuICpcclxuICogTm8gcm9kYXDDqSBlbmNvbnRyYW0tc2Ugb3MgYm90w7VlcyBkZSBhw6fDo28gcHJpbcOhcmlhIGUgc2VjdW5kw6FyaWEsIG5vIHF1YWwgcGVybWl0ZW0gZGVmaW5pciB1bWEgYcOnw6NvIGUgdW0gcsOzdHVsbywgYmVtIGNvbW9cclxuICogZGVmaW5pciB1bSBlc3RhZG8gZGUgY2FycmVnYW5kbyBlIC8gb3UgZGVzYWJpbGl0YWRvIGUgLyBvdSBkZWZpbmlyIG8gYm90w6NvIGNvbSBvIHRpcG8gKmRhbmdlciouIFRhbWLDqW0gw6kgcG9zc8OtdmVsIHV0aWxpemFyXHJcbiAqIG8gY29tcG9uZW50ZSBbYFBvTW9kYWxGb290ZXJgXSgvZG9jdW1lbnRhdGlvbi9wby1tb2RhbC1mb290ZXIpLlxyXG4gKlxyXG4gKiA+IMOJIHBvc3PDrXZlbCBmZWNoYXIgYSBtb2RhbCBhdHJhdsOpcyBkYSB0ZWNsYSAqRVNDKiwgcXVhbmRvIGEgcHJvcHJpZWRhZGUgYHAtaGlkZS1jbG9zZWAgbsOjbyBlc3RpdmVyIGhhYmlsaXRhZGEuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvTW9kYWxCYXNlQ29tcG9uZW50IHtcclxuICAvKiogVMOtdHVsbyBkYSBtb2RhbC4gKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZXZlIHNlciBkZWZpbmlkbyB1bSBvYmpldG8gcXVlIGltcGxlbWVudGEgYSBpbnRlcmZhY2UgYFBvTW9kYWxBY3Rpb25gIGNvbnRlbmRvIGEgbGFiZWwgZSBhIGZ1bsOnw6NvIGRhIHByaW1laXJhIGHDp8Ojby5cclxuICAgKiBDYXNvIGVzdGEgcHJvcHJpZWRhZGUgbsOjbyBzZWphIGRlZmluaWRhIG91IGVzdGVqYSBpbmNvbXBsZXRhLCBhdXRvbWF0aWNhbWVudGUgc2Vyw6EgYWRpY2lvbmFkbyB1bSBib3TDo28gZGUgYcOnw6NvIGNvbVxyXG4gICAqIGEgZnVuw6fDo28gZGUgZmVjaGFyIGEgbW9kYWwuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXByaW1hcnktYWN0aW9uJykgcHJpbWFyeUFjdGlvbj86IFBvTW9kYWxBY3Rpb247XHJcblxyXG4gIC8qKiBEZXZlIHNlciBkZWZpbmlkbyB1bSBvYmpldG8gcXVlIGltcGxlbWVudGEgYSBpbnRlcmZhY2UgYFBvTW9kYWxBY3Rpb25gIGNvbnRlbmRvIGEgbGFiZWwgZSBhIGZ1bsOnw6NvIGRhIHNlZ3VuZGEgYcOnw6NvLiAqL1xyXG4gIEBJbnB1dCgncC1zZWNvbmRhcnktYWN0aW9uJykgc2Vjb25kYXJ5QWN0aW9uPzogUG9Nb2RhbEFjdGlvbjtcclxuXHJcbiAgbGFuZ3VhZ2U7XHJcbiAgbGl0ZXJhbHM7XHJcblxyXG4gIC8vIENvbnRyb2xhIHNlIGEgbW9kYWwgZmljYSBvY3VsdG8gb3Ugdmlzw612ZWwsIHBvciBwYWRyw6NvIMOpIG9jdWx0b1xyXG4gIGlzSGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgLy8gRXZlbnQgZW1taXRlciBwYXJhIHF1YW5kbyBhIG1vZGFsIMOpIGZlY2hhZGEgcGVsbyAnWCcuXHJcbiAgcHVibGljIG9uWENsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUNsb3NlPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NpemU/OiBzdHJpbmcgPSAnbWQnO1xyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmUgbyB0YW1hbmhvIGRhIG1vZGFsLlxyXG4gICAqXHJcbiAgICogVmFsb3JlcyB2w6FsaWRvczpcclxuICAgKiAgLSBgc21gIChwZXF1ZW5vKVxyXG4gICAqICAtIGBtZGAgKG3DqWRpbylcclxuICAgKiAgLSBgbGdgIChncmFuZGUpXHJcbiAgICogIC0gYHhsYCAoZXh0cmEgZ3JhbmRlKVxyXG4gICAqICAtIGBhdXRvYCAoYXV0b23DoXRpY28pXHJcbiAgICpcclxuICAgKiA+IFF1YW5kbyBpbmZvcm1hZG8gYGF1dG9gIGEgbW9kYWwgY2FsY3VsYXLDoSBhdXRvbWF0aWNhbWVudGUgc2V1IHRhbWFuaG8gYmFzZWFkbyBlbSBzZXUgY29udGXDumRvLlxyXG4gICAqIENhc28gbsOjbyBzZWphIGluZm9ybWFkbyB1bSB2YWxvciwgYSBtb2RhbCB0ZXLDoSBvIHRhbWFuaG8gZGVmaW5pZG8gY29tbyBgbWRgLlxyXG4gICAqXHJcbiAgICogPiBUb2RhcyBhcyBvcMOnw7VlcyBkZSB0YW1hbmhvIHBvc3N1ZW0gdW1hIGxhcmd1cmEgbcOheGltYSBkZSAqKjc2OHB4KiouXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNpemUnKSBzZXQgc2l6ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzaXplcyA9IFsnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAnYXV0byddO1xyXG4gICAgdGhpcy5fc2l6ZSA9IHNpemVzLmluZGV4T2YodmFsdWUpID4gLTEgPyB2YWx1ZSA6ICdtZCc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lIG8gZmVjaGFtZW50byBkYSBtb2RhbCBhbyBjbGljYXIgZm9yYSBkYSBtZXNtYS5cclxuICAgKiBJbmZvcm1lIG8gdmFsb3IgYHRydWVgIHBhcmEgYXRpdmFyIG8gZmVjaGFtZW50byBhbyBjbGljYXIgZm9yYSBkYSBtb2RhbC5cclxuICAgKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIGNsaWNrT3V0PzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncC1jbGljay1vdXQnKSBzZXQgc2V0Q2xpY2tPdXQodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2xpY2tPdXQgPSB2YWx1ZSA9PT0gJycgPyBmYWxzZSA6IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE9jdWx0YSBvIMOtY29uZSBkZSBmZWNoYXIgZG8gY2FiZcOnYWxobyBkYSBtb2RhbC5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBhIHByb3ByaWVkYWRlIGVzdGl2ZXIgaGFiaWxpdGFkYSwgbsOjbyBzZXLDoSBwb3Nzw612ZWwgZmVjaGFyIGEgbW9kYWwgYXRyYXbDqXMgZGEgdGVjbGEgKkVTQyouXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtY2xvc2UnKSBzZXQgaGlkZUNsb3NlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlQ2xvc2UgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBoaWRlQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZUNsb3NlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocG9MYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxhbmd1YWdlID0gcG9MYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG5cclxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XHJcbiAgICAgIC4uLnBvTW9kYWxMaXRlcmFsc1t0aGlzLmxhbmd1YWdlXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKiBGdW7Dp8OjbyBwYXJhIGZlY2hhciBhIG1vZGFsLiAqL1xyXG4gIGNsb3NlKHhDbG9zZWQgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XHJcbiAgICBpZiAoeENsb3NlZCkge1xyXG4gICAgICB0aGlzLm9uWENsb3NlZC5lbWl0KHhDbG9zZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEZ1bsOnw6NvIHBhcmEgYWJyaXIgYSBtb2RhbC4gKi9cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZFByaW1hcnlBY3Rpb24oKTtcclxuXHJcbiAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2YWxpZFByaW1hcnlBY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMucHJpbWFyeUFjdGlvbikge1xyXG4gICAgICB0aGlzLnByaW1hcnlBY3Rpb24gPSB7XHJcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB0aGlzLmNsb3NlKCksXHJcbiAgICAgICAgbGFiZWw6IHRoaXMubGl0ZXJhbHMuY2xvc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucHJpbWFyeUFjdGlvblsnYWN0aW9uJ10pIHtcclxuICAgICAgdGhpcy5wcmltYXJ5QWN0aW9uWydhY3Rpb24nXSA9ICgpID0+IHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5wcmltYXJ5QWN0aW9uWydsYWJlbCddKSB7XHJcbiAgICAgIHRoaXMucHJpbWFyeUFjdGlvblsnbGFiZWwnXSA9IHRoaXMubGl0ZXJhbHMuY2xvc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==