import { Input, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-tabs` é responsável por agrupar [abas](/documentation/po-tab) dispostas numa linha horizontal,
 * ideal para facilitar a organização de conteúdos.
 *
 * Em dispositivos móveis o componente exibirá tadas as abas de maneira linear gerando um *scroll* na horizontal. Já em telas telas com
 * resoluções maiores, o componente exibirá até cinco abas normalmente, porém, à partir de seis abas o componente automaticamente torna
 * visível apenas as quatro primeiras, agrupando as subsequentes na quinta aba rotulada de **Mais**.
 *
 * > As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão **Mais**.
 *
 * É possível realizar a navegação entre as abas através da tecla TAB do teclado.
 * Caso uma aba estiver desabilitada, não receberá foco de navegação.
 *
 * #### Boas práticas
 *
 * - Evite utilizar uma quantidade excessiva de abas, pois irá gerar um *scroll* muito longo no `dropdown`;
 * - Evite `labels` extensos para as `tabs` pois podem quebrar seu *layout*, use `labels` diretos, curtos e intuitivos.
 */
export class PoTabsBaseComponent {
    constructor() {
        this._small = false;
    }
    /**
     * @optinal
     *
     * @description
     *
     * Diminui o tamanho das abas.
     *
     * @default `false`
     */
    set small(value) {
        this._small = convertToBoolean(value);
    }
    get small() {
        return this._small;
    }
}
PoTabsBaseComponent.ɵfac = function PoTabsBaseComponent_Factory(t) { return new (t || PoTabsBaseComponent)(); };
PoTabsBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTabsBaseComponent, inputs: { small: ["p-small", "small"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTabsBaseComponent, [{
        type: Directive
    }], null, { small: [{
            type: Input,
            args: ['p-small']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFicy1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJzL3BvLXRhYnMtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVVLFdBQU0sR0FBYSxLQUFLLENBQUM7S0FrQmxDO0lBaEJDOzs7Ozs7OztPQVFHO0lBQ0gsSUFBc0IsS0FBSyxDQUFDLEtBQWM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O3NGQWxCVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFNBQVM7Z0JBYWMsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLXRhYnNgIMOpIHJlc3BvbnPDoXZlbCBwb3IgYWdydXBhciBbYWJhc10oL2RvY3VtZW50YXRpb24vcG8tdGFiKSBkaXNwb3N0YXMgbnVtYSBsaW5oYSBob3Jpem9udGFsLFxyXG4gKiBpZGVhbCBwYXJhIGZhY2lsaXRhciBhIG9yZ2FuaXphw6fDo28gZGUgY29udGXDumRvcy5cclxuICpcclxuICogRW0gZGlzcG9zaXRpdm9zIG3Ds3ZlaXMgbyBjb21wb25lbnRlIGV4aWJpcsOhIHRhZGFzIGFzIGFiYXMgZGUgbWFuZWlyYSBsaW5lYXIgZ2VyYW5kbyB1bSAqc2Nyb2xsKiBuYSBob3Jpem9udGFsLiBKw6EgZW0gdGVsYXMgdGVsYXMgY29tXHJcbiAqIHJlc29sdcOnw7VlcyBtYWlvcmVzLCBvIGNvbXBvbmVudGUgZXhpYmlyw6EgYXTDqSBjaW5jbyBhYmFzIG5vcm1hbG1lbnRlLCBwb3LDqW0sIMOgIHBhcnRpciBkZSBzZWlzIGFiYXMgbyBjb21wb25lbnRlIGF1dG9tYXRpY2FtZW50ZSB0b3JuYVxyXG4gKiB2aXPDrXZlbCBhcGVuYXMgYXMgcXVhdHJvIHByaW1laXJhcywgYWdydXBhbmRvIGFzIHN1YnNlcXVlbnRlcyBuYSBxdWludGEgYWJhIHJvdHVsYWRhIGRlICoqTWFpcyoqLlxyXG4gKlxyXG4gKiA+IEFzIGFiYXMgcXVlIGVzdGl2ZXJlbSBhZ3J1cGFkYXMgc2Vyw6NvIGRpc3Bvc3RhcyBudW1hIGNhc2NhdGEgc3VzcGVuc2EgcXVlIHNlcsOhIGV4aWJpZGEgYW8gY2xpY2FyIG5vIGJvdMOjbyAqKk1haXMqKi5cclxuICpcclxuICogw4kgcG9zc8OtdmVsIHJlYWxpemFyIGEgbmF2ZWdhw6fDo28gZW50cmUgYXMgYWJhcyBhdHJhdsOpcyBkYSB0ZWNsYSBUQUIgZG8gdGVjbGFkby5cclxuICogQ2FzbyB1bWEgYWJhIGVzdGl2ZXIgZGVzYWJpbGl0YWRhLCBuw6NvIHJlY2ViZXLDoSBmb2NvIGRlIG5hdmVnYcOnw6NvLlxyXG4gKlxyXG4gKiAjIyMjIEJvYXMgcHLDoXRpY2FzXHJcbiAqXHJcbiAqIC0gRXZpdGUgdXRpbGl6YXIgdW1hIHF1YW50aWRhZGUgZXhjZXNzaXZhIGRlIGFiYXMsIHBvaXMgaXLDoSBnZXJhciB1bSAqc2Nyb2xsKiBtdWl0byBsb25nbyBubyBgZHJvcGRvd25gO1xyXG4gKiAtIEV2aXRlIGBsYWJlbHNgIGV4dGVuc29zIHBhcmEgYXMgYHRhYnNgIHBvaXMgcG9kZW0gcXVlYnJhciBzZXUgKmxheW91dCosIHVzZSBgbGFiZWxzYCBkaXJldG9zLCBjdXJ0b3MgZSBpbnR1aXRpdm9zLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb1RhYnNCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zbWFsbD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGluYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGltaW51aSBvIHRhbWFuaG8gZGFzIGFiYXMuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNtYWxsJykgc2V0IHNtYWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zbWFsbCA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNtYWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NtYWxsO1xyXG4gIH1cclxufVxyXG4iXX0=