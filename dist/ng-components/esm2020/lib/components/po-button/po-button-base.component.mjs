import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive, HostBinding } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { InputBoolean } from '../../decorators';
import { PoButtonKind } from './po-button-type.enum';
import { PoButtonSize } from './po-button-size.enum';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O `po-button` permite que o usuário execute ações predefinidas pelo desenvolvedor.
 *
 * Através dos tipos, é possível identificar a importância de cada ação.
 *
 * #### Boas práticas
 *
 * - Evite `labels` extensos que quebram o layout do `po-button`, use `labels` diretos, curtos e intuitivos.
 * - Utilize apenas um `po-button` configurado como `primary` por página.
 * - Para ações irreversíveis use sempre a propriedade `p-danger`.
 *
 * #### Acessibilidade tratada no componente
 *
 * Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:
 *
 * - Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. [W3C WAI-ARIA 3.5 Button - Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3)
 * - A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. [WCAG 2.4.12: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced)
 */
export class PoButtonBaseComponent {
    constructor() {
        /** Ação que será executada quando o usuário clicar sobre o `po-button`. */
        this.click = new EventEmitter();
        this._danger = false;
        this._disabled = false;
        this._loading = false;
        this._kind = PoButtonKind.secondary;
        this._size = PoButtonSize.medium;
        this._small = false;
        this.hasSize = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Exibe um ícone de carregamento à esquerda do _label_ do botão.
     *
     * > Quando esta propriedade estiver habilitada, desabilitará o botão.
     *
     * @default `false`
     */
    set loading(value) {
        this._loading = convertToBoolean(value);
    }
    get loading() {
        return this._loading;
    }
    /**
     * @deprecated 16.x.x
     *
     * @optional
     *
     * @description
     *
     * **Deprecated 16.x.x**.
     *
     * > Por regras de acessibilidade o botão não terá mais um tamanho menor do que 44px e por isso a propriedade será depreciada.
     * > [Saiba mais](https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368)
     *
     * Deixa o botão menor, com 32px de altura.
     *
     * @default `false`
     */
    set small(value) {
        this._small = !this.hasSize ? value : false;
        if (this._small) {
            this._size = 'small';
        }
    }
    get small() {
        return this._small;
    }
    /**
     * @deprecated 15.x.x
     *
     * @optional
     *
     * @description
     *
     * **Deprecated 15.x.x**. Utilizar `p-kind` no lugar.
     *
     * Define o estilo do `po-button`.
     *
     * Valore válidos:
     *  - `default`: **Deprecated 15.x.x**. Utilizar `p-kind="secondary"`.
     *  - `primary`: deixa o `po-button` com destaque, deve ser usado para ações primárias.
     *  - `danger`: **Deprecated 15.x.x**. Utilizar `p-danger`.
     *  - `link`: **Deprecated 15.x.x**. Utilizar `p-kind="tertiary"`.
     *
     * @default `secondary`
     */
    set type(value) {
        this.kind = value;
    }
    get type() {
        return this.kind;
    }
    /**
     * @optional
     *
     * @description
     *
     * Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.
     *
     * > A propriedade `p-kind="tertiary"` será inativada ao utilizar esta propriedade.
     */
    set danger(value) {
        this._danger = this.kind !== PoButtonKind.tertiary ? value : false;
    }
    get danger() {
        return this._danger;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho do `po-button`.
     *
     * Valores válidos:
     * - `medium`: o `po-button` fica do tamanho padrão, com 44px de altura.;
     * - `large`: o `po-button` fica maior, com 56px de altura.;
     *
     * @default `medium`
     *
     */
    set size(value) {
        const size = this.small ? 'small' : value;
        if (size === 'small') {
            this._size = 'small';
            this._small = true;
        }
        else {
            this._size = PoButtonSize[size] ? PoButtonSize[size] : PoButtonSize.medium;
            this.hasSize = true;
        }
    }
    get size() {
        return this._size;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o estilo do `po-button`.
     *
     * Valores válidos:
     *  - `primary`: deixa o `po-button` com destaque, deve ser usado para ações primárias.
     *  - `secondary`: estilo padrão do `po-button`.
     *  - `tertiary`: o `po-button` é exibido sem cor do fundo, recebendo menos destaque entre as ações.
     *
     * @default `secondary`
     */
    set kind(value) {
        this._kind = PoButtonKind[value] ? PoButtonKind[value] : PoButtonKind.secondary;
    }
    get kind() {
        return this._kind;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o `po-button` e não permite que o usuário interaja com o mesmo.
     *
     * @default `false`
     */
    set disabled(value) {
        this._disabled = value === '' ? true : convertToBoolean(value);
    }
    get disabled() {
        return this._disabled;
    }
}
PoButtonBaseComponent.ɵfac = function PoButtonBaseComponent_Factory(t) { return new (t || PoButtonBaseComponent)(); };
PoButtonBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoButtonBaseComponent, hostVars: 3, hostBindings: function PoButtonBaseComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("p-danger", ctx.danger)("p-size", ctx.size)("p-kind", ctx.kind);
    } }, inputs: { label: ["p-label", "label"], icon: ["p-icon", "icon"], loading: ["p-loading", "loading"], small: ["p-small", "small"], type: ["p-type", "type"], danger: ["p-danger", "danger"], size: ["p-size", "size"], kind: ["p-kind", "kind"], disabled: ["p-disabled", "disabled"] }, outputs: { click: "p-click" } });
__decorate([
    InputBoolean()
], PoButtonBaseComponent.prototype, "small", null);
__decorate([
    InputBoolean()
], PoButtonBaseComponent.prototype, "danger", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoButtonBaseComponent, [{
        type: Directive
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], loading: [{
            type: Input,
            args: ['p-loading']
        }], small: [{
            type: Input,
            args: ['p-small']
        }], type: [{
            type: Input,
            args: ['p-type']
        }], danger: [{
            type: HostBinding,
            args: ['attr.p-danger']
        }, {
            type: Input,
            args: ['p-danger']
        }], size: [{
            type: HostBinding,
            args: ['attr.p-size']
        }, {
            type: Input,
            args: ['p-size']
        }], kind: [{
            type: HostBinding,
            args: ['attr.p-kind']
        }, {
            type: Input,
            args: ['p-kind']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnV0dG9uLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJ1dHRvbi9wby1idXR0b24tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVILE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFxQ0UsMkVBQTJFO1FBQ3hELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTVDLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQWEsS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBWSxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3hDLFVBQUssR0FBWSxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ3JDLFdBQU0sR0FBYSxLQUFLLENBQUM7UUFFdkIsWUFBTyxHQUFhLEtBQUssQ0FBQztLQTJLckM7SUF6S0M7Ozs7Ozs7Ozs7T0FVRztJQUNILElBQXdCLE9BQU8sQ0FBQyxLQUFjO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFB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c0JPLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVztZQTBCZCxLQUFLO2tCQUZSLEtBQUs7bUJBQUMsU0FBUztZQWlDSyxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVE7WUFxQlgsTUFBTTtrQkFIVCxXQUFXO21CQUFDLGVBQWU7O2tCQUMzQixLQUFLO21CQUFDLFVBQVU7WUEwQmIsSUFBSTtrQkFGUCxXQUFXO21CQUFDLGFBQWE7O2tCQUN6QixLQUFLO21CQUFDLFFBQVE7WUFrQ1gsSUFBSTtrQkFGUCxXQUFXO21CQUFDLGFBQWE7O2tCQUN6QixLQUFLO21CQUFDLFFBQVE7WUFrQlUsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFBvQnV0dG9uS2luZCB9IGZyb20gJy4vcG8tYnV0dG9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvQnV0dG9uU2l6ZSB9IGZyb20gJy4vcG8tYnV0dG9uLXNpemUuZW51bSc7XHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBgcG8tYnV0dG9uYCBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGV4ZWN1dGUgYcOnw7VlcyBwcmVkZWZpbmlkYXMgcGVsbyBkZXNlbnZvbHZlZG9yLlxyXG4gKlxyXG4gKiBBdHJhdsOpcyBkb3MgdGlwb3MsIMOpIHBvc3PDrXZlbCBpZGVudGlmaWNhciBhIGltcG9ydMOibmNpYSBkZSBjYWRhIGHDp8Ojby5cclxuICpcclxuICogIyMjIyBCb2FzIHByw6F0aWNhc1xyXG4gKlxyXG4gKiAtIEV2aXRlIGBsYWJlbHNgIGV4dGVuc29zIHF1ZSBxdWVicmFtIG8gbGF5b3V0IGRvIGBwby1idXR0b25gLCB1c2UgYGxhYmVsc2AgZGlyZXRvcywgY3VydG9zIGUgaW50dWl0aXZvcy5cclxuICogLSBVdGlsaXplIGFwZW5hcyB1bSBgcG8tYnV0dG9uYCBjb25maWd1cmFkbyBjb21vIGBwcmltYXJ5YCBwb3IgcMOhZ2luYS5cclxuICogLSBQYXJhIGHDp8O1ZXMgaXJyZXZlcnPDrXZlaXMgdXNlIHNlbXByZSBhIHByb3ByaWVkYWRlIGBwLWRhbmdlcmAuXHJcbiAqXHJcbiAqICMjIyMgQWNlc3NpYmlsaWRhZGUgdHJhdGFkYSBubyBjb21wb25lbnRlXHJcbiAqXHJcbiAqIEFsZ3VtYXMgZGlyZXRyaXplcyBkZSBhY2Vzc2liaWxpZGFkZSBqw6Egc8OjbyB0cmF0YWRhcyBubyBjb21wb25lbnRlLCBpbnRlcm5hbWVudGUsIGUgbsOjbyBwb2RlbSBzZXIgYWx0ZXJhZGFzIHBlbG8gcHJvcHJpZXTDoXJpbyBkbyBjb250ZcO6ZG8uIFPDo28gZWxhczpcclxuICpcclxuICogLSBRdWFuZG8gZW0gZm9jbywgbyBib3TDo28gw6kgYXRpdmFkbyB1c2FuZG8gYXMgdGVjbGFzIGRlIEVzcGHDp28gZSBFbnRlciBkbyB0ZWNsYWRvLiBbVzNDIFdBSS1BUklBIDMuNSBCdXR0b24gLSBLZXlib2FyZCBJbnRlcmFjdGlvbl0oaHR0cHM6Ly93d3cudzMub3JnL1dBSS9BUklBL2FwZy8ja2V5Ym9hcmQtaW50ZXJhY3Rpb24tMylcclxuICogLSBBIMOhcmVhIGRvIGZvY28gcHJlY2lzYXIgdGVyIHVtYSBlc3Blc3N1cmEgZGUgcGVsbyBtZW5vcyAyIHBpeGVscyBDU1MgZSBvIGZvY28gbsOjbyBwb2RlIGZpY2FyIGVzY29uZGlkbyBwb3Igb3V0cm9zIGVsZW1lbnRvcyBkYSB0ZWxhLiBbV0NBRyAyLjQuMTI6IEZvY3VzIEFwcGVhcmFuY2VdKGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvV0NBRzIyL1VuZGVyc3RhbmRpbmcvZm9jdXMtYXBwZWFyYW5jZS1lbmhhbmNlZClcclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9CdXR0b25CYXNlQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGFiZWwgZG8gYm90w6NvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIMONY29uZSBleGliaWRvIGFvIGxhZG8gZXNxdWVyZG8gZG8gbGFiZWwgZG8gYm90w6NvLlxyXG4gICAqXHJcbiAgICogw4kgcG9zc8OtdmVsIHVzYXIgcXVhbHF1ZXIgdW0gZG9zIMOtY29uZXMgZGEgW0JpYmxpb3RlY2EgZGUgw61jb25lc10oL2d1aWRlcy9pY29ucykuIGNvbmZvcm1lIGV4ZW1wbG8gYWJhaXhvOlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1idXR0b24gcC1pY29uPVwicG8taWNvbi11c2VyXCIgcC1sYWJlbD1cIlBPIGJ1dHRvblwiPjwvcG8tYnV0dG9uPlxyXG4gICAqIGBgYFxyXG4gICAqIFRhbWLDqW0gw6kgcG9zc8OtdmVsIHV0aWxpemFyIG91dHJhcyBmb250ZXMgZGUgw61jb25lcywgcG9yIGV4ZW1wbG8gYSBiaWJsaW90ZWNhICpGb250IEF3ZXNvbWUqLCBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tYnV0dG9uIHAtaWNvbj1cImZhIGZhLXBvZGNhc3RcIiBwLWxhYmVsPVwiUE8gYnV0dG9uXCI+PC9wby1idXR0b24+XHJcbiAgICogYGBgXHJcbiAgICogT3V0cmEgb3DDp8OjbyBzZXJpYSBhIGN1c3RvbWl6YcOnw6NvIGRvIMOtY29uZSBhdHJhdsOpcyBkbyBgVGVtcGxhdGVSZWZgLCBjb25mb3JtZSBleGVtcGxvIGFiYWl4bzpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tYnV0dG9uIFtwLWljb25dPVwidGVtcGxhdGVcIiBwLWxhYmVsPVwiYnV0dG9uIHRlbXBsYXRlIGlvbmljXCI+PC9wby1idXR0b24+XHJcbiAgICpcclxuICAgKiA8bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxyXG4gICAqICA8aW9uLWljb24gc3R5bGU9XCJmb250LXNpemU6IGluaGVyaXRcIiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxyXG4gICAqIDwvbmctdGVtcGxhdGU+XHJcbiAgICogYGBgXHJcbiAgICogPiBQYXJhIG8gw61jb25lIGVucXVhZHJhciBjb3JyZXRhbWVudGUsIGRldmUtc2UgdXRpbGl6YXIgYGZvbnQtc2l6ZTogaW5oZXJpdGAgY2FzbyBvIMOtY29uZSB1dGlsaXphZG8gbsOjbyBhcGxpcXVlLW8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWljb24nKSBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIC8qKiBBw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBxdWFuZG8gbyB1c3XDoXJpbyBjbGljYXIgc29icmUgbyBgcG8tYnV0dG9uYC4gKi9cclxuICBAT3V0cHV0KCdwLWNsaWNrJykgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XHJcblxyXG4gIHByaXZhdGUgX2Rhbmdlcj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2FkaW5nPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2tpbmQ/OiBzdHJpbmcgPSBQb0J1dHRvbktpbmQuc2Vjb25kYXJ5O1xyXG4gIHByaXZhdGUgX3NpemU/OiBzdHJpbmcgPSBQb0J1dHRvblNpemUubWVkaXVtO1xyXG4gIHByaXZhdGUgX3NtYWxsPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgaGFzU2l6ZT86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV4aWJlIHVtIMOtY29uZSBkZSBjYXJyZWdhbWVudG8gw6AgZXNxdWVyZGEgZG8gX2xhYmVsXyBkbyBib3TDo28uXHJcbiAgICpcclxuICAgKiA+IFF1YW5kbyBlc3RhIHByb3ByaWVkYWRlIGVzdGl2ZXIgaGFiaWxpdGFkYSwgZGVzYWJpbGl0YXLDoSBvIGJvdMOjby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbG9hZGluZycpIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgMTYueC54XHJcbiAgICpcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogKipEZXByZWNhdGVkIDE2LngueCoqLlxyXG4gICAqXHJcbiAgICogPiBQb3IgcmVncmFzIGRlIGFjZXNzaWJpbGlkYWRlIG8gYm90w6NvIG7Do28gdGVyw6EgbWFpcyB1bSB0YW1hbmhvIG1lbm9yIGRvIHF1ZSA0NHB4IGUgcG9yIGlzc28gYSBwcm9wcmllZGFkZSBzZXLDoSBkZXByZWNpYWRhLlxyXG4gICAqID4gW1NhaWJhIG1haXNdKGh0dHBzOi8vYW5pbWFsaWFkcy5ub3Rpb24uc2l0ZS9Cb3Qtby1mYjNhOTIxZThiYTU0YmQzOGIzOTc1OGMyNDYxMzM2OClcclxuICAgKlxyXG4gICAqIERlaXhhIG8gYm90w6NvIG1lbm9yLCBjb20gMzJweCBkZSBhbHR1cmEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNtYWxsJylcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzZXQgc21hbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NtYWxsID0gIXRoaXMuaGFzU2l6ZSA/IHZhbHVlIDogZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuX3NtYWxsKSB7XHJcbiAgICAgIHRoaXMuX3NpemUgPSAnc21hbGwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNtYWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NtYWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgMTUueC54XHJcbiAgICpcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogKipEZXByZWNhdGVkIDE1LngueCoqLiBVdGlsaXphciBgcC1raW5kYCBubyBsdWdhci5cclxuICAgKlxyXG4gICAqIERlZmluZSBvIGVzdGlsbyBkbyBgcG8tYnV0dG9uYC5cclxuICAgKlxyXG4gICAqIFZhbG9yZSB2w6FsaWRvczpcclxuICAgKiAgLSBgZGVmYXVsdGA6ICoqRGVwcmVjYXRlZCAxNS54LngqKi4gVXRpbGl6YXIgYHAta2luZD1cInNlY29uZGFyeVwiYC5cclxuICAgKiAgLSBgcHJpbWFyeWA6IGRlaXhhIG8gYHBvLWJ1dHRvbmAgY29tIGRlc3RhcXVlLCBkZXZlIHNlciB1c2FkbyBwYXJhIGHDp8O1ZXMgcHJpbcOhcmlhcy5cclxuICAgKiAgLSBgZGFuZ2VyYDogKipEZXByZWNhdGVkIDE1LngueCoqLiBVdGlsaXphciBgcC1kYW5nZXJgLlxyXG4gICAqICAtIGBsaW5rYDogKipEZXByZWNhdGVkIDE1LngueCoqLiBVdGlsaXphciBgcC1raW5kPVwidGVydGlhcnlcImAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgc2Vjb25kYXJ5YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10eXBlJykgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5raW5kID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMua2luZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZXZlIHNlciB1c2FkbyBlbSBhw6fDtWVzIGlycmV2ZXJzw612ZWlzIHF1ZSBvIHVzdcOhcmlvIHByZWNpc2EgdGVyIGN1aWRhZG8gYW8gZXhlY3V0w6EtbGEsIGNvbW8gYSBleGNsdXPDo28gZGUgdW0gcmVnaXN0cm8uXHJcbiAgICpcclxuICAgKiA+IEEgcHJvcHJpZWRhZGUgYHAta2luZD1cInRlcnRpYXJ5XCJgIHNlcsOhIGluYXRpdmFkYSBhbyB1dGlsaXphciBlc3RhIHByb3ByaWVkYWRlLlxyXG4gICAqL1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucC1kYW5nZXInKVxyXG4gIEBJbnB1dCgncC1kYW5nZXInKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBkYW5nZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RhbmdlciA9IHRoaXMua2luZCAhPT0gUG9CdXR0b25LaW5kLnRlcnRpYXJ5ID8gdmFsdWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBkYW5nZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGFuZ2VyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBvIHRhbWFuaG8gZG8gYHBvLWJ1dHRvbmAuXHJcbiAgICpcclxuICAgKiBWYWxvcmVzIHbDoWxpZG9zOlxyXG4gICAqIC0gYG1lZGl1bWA6IG8gYHBvLWJ1dHRvbmAgZmljYSBkbyB0YW1hbmhvIHBhZHLDo28sIGNvbSA0NHB4IGRlIGFsdHVyYS47XHJcbiAgICogLSBgbGFyZ2VgOiBvIGBwby1idXR0b25gIGZpY2EgbWFpb3IsIGNvbSA1NnB4IGRlIGFsdHVyYS47XHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgbWVkaXVtYFxyXG4gICAqXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnAtc2l6ZScpXHJcbiAgQElucHV0KCdwLXNpemUnKVxyXG4gIHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnNtYWxsID8gJ3NtYWxsJyA6IHZhbHVlO1xyXG5cclxuICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XHJcbiAgICAgIHRoaXMuX3NpemUgPSAnc21hbGwnO1xyXG4gICAgICB0aGlzLl9zbWFsbCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zaXplID0gUG9CdXR0b25TaXplW3NpemVdID8gUG9CdXR0b25TaXplW3NpemVdIDogUG9CdXR0b25TaXplLm1lZGl1bTtcclxuICAgICAgdGhpcy5oYXNTaXplID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyBlc3RpbG8gZG8gYHBvLWJ1dHRvbmAuXHJcbiAgICpcclxuICAgKiBWYWxvcmVzIHbDoWxpZG9zOlxyXG4gICAqICAtIGBwcmltYXJ5YDogZGVpeGEgbyBgcG8tYnV0dG9uYCBjb20gZGVzdGFxdWUsIGRldmUgc2VyIHVzYWRvIHBhcmEgYcOnw7VlcyBwcmltw6FyaWFzLlxyXG4gICAqICAtIGBzZWNvbmRhcnlgOiBlc3RpbG8gcGFkcsOjbyBkbyBgcG8tYnV0dG9uYC5cclxuICAgKiAgLSBgdGVydGlhcnlgOiBvIGBwby1idXR0b25gIMOpIGV4aWJpZG8gc2VtIGNvciBkbyBmdW5kbywgcmVjZWJlbmRvIG1lbm9zIGRlc3RhcXVlIGVudHJlIGFzIGHDp8O1ZXMuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgc2Vjb25kYXJ5YFxyXG4gICAqL1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucC1raW5kJylcclxuICBASW5wdXQoJ3Ata2luZCcpXHJcbiAgc2V0IGtpbmQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fa2luZCA9IFBvQnV0dG9uS2luZFt2YWx1ZV0gPyBQb0J1dHRvbktpbmRbdmFsdWVdIDogUG9CdXR0b25LaW5kLnNlY29uZGFyeTtcclxuICB9XHJcblxyXG4gIGdldCBraW5kKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2luZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZXNhYmlsaXRhIG8gYHBvLWJ1dHRvbmAgZSBuw6NvIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gaW50ZXJhamEgY29tIG8gbWVzbW8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IDxhbnk+dmFsdWUgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==