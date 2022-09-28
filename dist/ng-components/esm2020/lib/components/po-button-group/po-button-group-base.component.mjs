import { Input, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { PoButtonGroupToggle } from './po-button-group-toggle.enum';
import * as i0 from "@angular/core";
const PO_TOGGLE_TYPE_DEFAULT = 'none';
/**
 * @description
 *
 * O componente `po-button-group` é formado por um conjunto de botões distribuídos horizontalmente.
 * Cada botão do grupo é tratado de forma individual, recebendo assim um rótulo, uma ação bem como se deverá estar habilitado ou não.
 *
 * Este componente além de servir como um agrupador de botões para ação, também permite que sejam utilizados
 * para seleções multiplas e únicas.
 *
 * O grupo de botões deve ser utilizado para organizar as ações de maneira uniforme e transmitir a ideia de que os botões fazem
 * parte de um mesmo contexto.
 *
 * #### Boas práticas
 *
 * - Evite usar o `po-button-group` com apenas 1 ação, para isso utilize o `po-button`.
 * - Procure utilizar no máximo 3 ações para cada `po-button-group`.
 *
 * > As recomendações do `po-button` também valem para o `po-button-group`.
 */
export class PoButtonGroupBaseComponent {
    constructor() {
        /** Lista de botões. */
        this.buttons = [];
        this._small = false;
        this._toggle = PO_TOGGLE_TYPE_DEFAULT;
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
     * Torna o grupo de botões com tamanho minificado.
     *
     * @default `false`
     */
    set small(value) {
        this._small = value === '' ? true : convertToBoolean(value);
    }
    get small() {
        return this._small;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o modo de seleção de botões.
     *
     * > Veja os valores válidos no *enum* `PoButtonGroupToggle`.
     *
     * @default `none`
     */
    set toggle(value) {
        this._toggle = Object.values(PoButtonGroupToggle).includes(value) ? value : PO_TOGGLE_TYPE_DEFAULT;
        this.checkSelecteds(this._toggle);
    }
    get toggle() {
        return this._toggle;
    }
    onButtonClick(buttonClicked, buttonIndex) {
        if (this.toggle === PoButtonGroupToggle.Single) {
            this.buttons.forEach((button, index) => (button.selected = index === buttonIndex ? !buttonClicked.selected : false));
        }
        else if (this.toggle === PoButtonGroupToggle.Multiple) {
            buttonClicked.selected = !buttonClicked.selected;
        }
    }
    checkSelecteds(toggleMode) {
        if (toggleMode === PoButtonGroupToggle.None) {
            this.deselectAllButtons();
        }
        else if (toggleMode === PoButtonGroupToggle.Single) {
            const hasMoreOneSelected = this.buttons.filter(button => button.selected).length > 1;
            if (hasMoreOneSelected) {
                this.deselectAllButtons();
            }
        }
    }
    deselectAllButtons() {
        this.buttons.forEach(button => (button.selected = false));
    }
}
PoButtonGroupBaseComponent.ɵfac = function PoButtonGroupBaseComponent_Factory(t) { return new (t || PoButtonGroupBaseComponent)(); };
PoButtonGroupBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoButtonGroupBaseComponent, inputs: { buttons: ["p-buttons", "buttons"], small: ["p-small", "small"], toggle: ["p-toggle", "toggle"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoButtonGroupBaseComponent, [{
        type: Directive
    }], null, { buttons: [{
            type: Input,
            args: ['p-buttons']
        }], small: [{
            type: Input,
            args: ['p-small']
        }], toggle: [{
            type: Input,
            args: ['p-toggle']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnV0dG9uLWdyb3VwLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJ1dHRvbi1ncm91cC9wby1idXR0b24tZ3JvdXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXBFLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDO0FBRXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFFSCxNQUFNLE9BQU8sMEJBQTBCO0lBRHZDO1FBRUUsdUJBQXVCO1FBQ0gsWUFBTyxHQUE2QixFQUFFLENBQUM7UUFFbkQsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQVksc0JBQXNCLENBQUM7S0F1RW5EO0lBckVDOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNILElBQXNCLEtBQUssQ0FBQyxLQUFjO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsSUFBdUIsTUFBTSxDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO1FBRTFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxhQUFnQyxFQUFFLFdBQW1CO1FBQ2pFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQ2xCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQy9GLENBQUM7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7WUFDdkQsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRU8sY0FBYyxDQUFDLFVBQWtCO1FBQ3ZDLElBQUksVUFBVSxLQUFLLG1CQUFtQixDQUFDLElBQUksRUFBRTtZQUMzQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjthQUFNLElBQUksVUFBVSxLQUFLLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtZQUNwRCxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDckYsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztvR0EzRVUsMEJBQTBCOzZFQUExQiwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUR0QyxTQUFTO2dCQUdZLE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQXFCSSxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVM7WUFtQk8sTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0J1dHRvbkdyb3VwSXRlbSB9IGZyb20gJy4vcG8tYnV0dG9uLWdyb3VwLWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9CdXR0b25Hcm91cFRvZ2dsZSB9IGZyb20gJy4vcG8tYnV0dG9uLWdyb3VwLXRvZ2dsZS5lbnVtJztcclxuXHJcbmNvbnN0IFBPX1RPR0dMRV9UWVBFX0RFRkFVTFQgPSAnbm9uZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tYnV0dG9uLWdyb3VwYCDDqSBmb3JtYWRvIHBvciB1bSBjb25qdW50byBkZSBib3TDtWVzIGRpc3RyaWJ1w61kb3MgaG9yaXpvbnRhbG1lbnRlLlxyXG4gKiBDYWRhIGJvdMOjbyBkbyBncnVwbyDDqSB0cmF0YWRvIGRlIGZvcm1hIGluZGl2aWR1YWwsIHJlY2ViZW5kbyBhc3NpbSB1bSByw7N0dWxvLCB1bWEgYcOnw6NvIGJlbSBjb21vIHNlIGRldmVyw6EgZXN0YXIgaGFiaWxpdGFkbyBvdSBuw6NvLlxyXG4gKlxyXG4gKiBFc3RlIGNvbXBvbmVudGUgYWzDqW0gZGUgc2VydmlyIGNvbW8gdW0gYWdydXBhZG9yIGRlIGJvdMO1ZXMgcGFyYSBhw6fDo28sIHRhbWLDqW0gcGVybWl0ZSBxdWUgc2VqYW0gdXRpbGl6YWRvc1xyXG4gKiBwYXJhIHNlbGXDp8O1ZXMgbXVsdGlwbGFzIGUgw7puaWNhcy5cclxuICpcclxuICogTyBncnVwbyBkZSBib3TDtWVzIGRldmUgc2VyIHV0aWxpemFkbyBwYXJhIG9yZ2FuaXphciBhcyBhw6fDtWVzIGRlIG1hbmVpcmEgdW5pZm9ybWUgZSB0cmFuc21pdGlyIGEgaWRlaWEgZGUgcXVlIG9zIGJvdMO1ZXMgZmF6ZW1cclxuICogcGFydGUgZGUgdW0gbWVzbW8gY29udGV4dG8uXHJcbiAqXHJcbiAqICMjIyMgQm9hcyBwcsOhdGljYXNcclxuICpcclxuICogLSBFdml0ZSB1c2FyIG8gYHBvLWJ1dHRvbi1ncm91cGAgY29tIGFwZW5hcyAxIGHDp8OjbywgcGFyYSBpc3NvIHV0aWxpemUgbyBgcG8tYnV0dG9uYC5cclxuICogLSBQcm9jdXJlIHV0aWxpemFyIG5vIG3DoXhpbW8gMyBhw6fDtWVzIHBhcmEgY2FkYSBgcG8tYnV0dG9uLWdyb3VwYC5cclxuICpcclxuICogPiBBcyByZWNvbWVuZGHDp8O1ZXMgZG8gYHBvLWJ1dHRvbmAgdGFtYsOpbSB2YWxlbSBwYXJhIG8gYHBvLWJ1dHRvbi1ncm91cGAuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvQnV0dG9uR3JvdXBCYXNlQ29tcG9uZW50IHtcclxuICAvKiogTGlzdGEgZGUgYm90w7Vlcy4gKi9cclxuICBASW5wdXQoJ3AtYnV0dG9ucycpIGJ1dHRvbnM6IEFycmF5PFBvQnV0dG9uR3JvdXBJdGVtPiA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9zbWFsbD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF90b2dnbGU/OiBzdHJpbmcgPSBQT19UT0dHTEVfVFlQRV9ERUZBVUxUO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCAxNi54LnhcclxuICAgKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiAqKkRlcHJlY2F0ZWQgMTYueC54KiouXHJcbiAgICpcclxuICAgKiA+IFBvciByZWdyYXMgZGUgYWNlc3NpYmlsaWRhZGUgbyBib3TDo28gbsOjbyB0ZXLDoSBtYWlzIHVtIHRhbWFuaG8gbWVub3IgZG8gcXVlIDQ0cHggZSBwb3IgaXNzbyBhIHByb3ByaWVkYWRlIHNlcsOhIGRlcHJlY2lhZGEuXHJcbiAgICogPiBbU2FpYmEgbWFpc10oaHR0cHM6Ly9hbmltYWxpYWRzLm5vdGlvbi5zaXRlL0JvdC1vLWZiM2E5MjFlOGJhNTRiZDM4YjM5NzU4YzI0NjEzMzY4KVxyXG4gICAqXHJcbiAgICogVG9ybmEgbyBncnVwbyBkZSBib3TDtWVzIGNvbSB0YW1hbmhvIG1pbmlmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNtYWxsJykgc2V0IHNtYWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zbWFsbCA9IDxhbnk+dmFsdWUgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNtYWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NtYWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBvIG1vZG8gZGUgc2VsZcOnw6NvIGRlIGJvdMO1ZXMuXHJcbiAgICpcclxuICAgKiA+IFZlamEgb3MgdmFsb3JlcyB2w6FsaWRvcyBubyAqZW51bSogYFBvQnV0dG9uR3JvdXBUb2dnbGVgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYG5vbmVgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXRvZ2dsZScpIHNldCB0b2dnbGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdG9nZ2xlID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoUG9CdXR0b25Hcm91cFRvZ2dsZSkuaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiBQT19UT0dHTEVfVFlQRV9ERUZBVUxUO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTZWxlY3RlZHModGhpcy5fdG9nZ2xlKTtcclxuICB9XHJcblxyXG4gIGdldCB0b2dnbGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90b2dnbGU7XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGJ1dHRvbkNsaWNrZWQ6IFBvQnV0dG9uR3JvdXBJdGVtLCBidXR0b25JbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50b2dnbGUgPT09IFBvQnV0dG9uR3JvdXBUb2dnbGUuU2luZ2xlKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKFxyXG4gICAgICAgIChidXR0b24sIGluZGV4KSA9PiAoYnV0dG9uLnNlbGVjdGVkID0gaW5kZXggPT09IGJ1dHRvbkluZGV4ID8gIWJ1dHRvbkNsaWNrZWQuc2VsZWN0ZWQgOiBmYWxzZSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50b2dnbGUgPT09IFBvQnV0dG9uR3JvdXBUb2dnbGUuTXVsdGlwbGUpIHtcclxuICAgICAgYnV0dG9uQ2xpY2tlZC5zZWxlY3RlZCA9ICFidXR0b25DbGlja2VkLnNlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1NlbGVjdGVkcyh0b2dnbGVNb2RlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0b2dnbGVNb2RlID09PSBQb0J1dHRvbkdyb3VwVG9nZ2xlLk5vbmUpIHtcclxuICAgICAgdGhpcy5kZXNlbGVjdEFsbEJ1dHRvbnMoKTtcclxuICAgIH0gZWxzZSBpZiAodG9nZ2xlTW9kZSA9PT0gUG9CdXR0b25Hcm91cFRvZ2dsZS5TaW5nbGUpIHtcclxuICAgICAgY29uc3QgaGFzTW9yZU9uZVNlbGVjdGVkID0gdGhpcy5idXR0b25zLmZpbHRlcihidXR0b24gPT4gYnV0dG9uLnNlbGVjdGVkKS5sZW5ndGggPiAxO1xyXG4gICAgICBpZiAoaGFzTW9yZU9uZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5kZXNlbGVjdEFsbEJ1dHRvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXNlbGVjdEFsbEJ1dHRvbnMoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gKGJ1dHRvbi5zZWxlY3RlZCA9IGZhbHNlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==