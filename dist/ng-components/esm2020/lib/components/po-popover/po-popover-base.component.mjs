import { EventEmitter, Input, Directive, Output } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { PO_CONTROL_POSITIONS } from './../../services/po-control-position/po-control-position.constants';
import * as i0 from "@angular/core";
const PO_POPOVER_DEFAULT_POSITION = 'right';
const PO_POPOVER_DEFAULT_TRIGGER = 'click';
const PO_POPOVER_TRIGGERS = ['click', 'hover'];
/**
 * @description
 *
 * O componente `po-popover` é um container pequeno recomendado para incluir vários tipos de conteúdo como:
 * gráficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.
 *
 * Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
 * [**po-tooltip**](https://po-ui.io/documentation/po-tooltip?view=doc).
 *
 * Para conteúdos maiores recomenda-se o uso do [**po-modal**](https://po-ui.io/documentation/po-modal?view=doc).
 *
 * Ele contém um título e também é possível escolher as posições do popover em relação ao componente pai,
 * as posições permitidas são: `right`, `right-top`, `right-bottom`, `top`, `top-left`, `top-right`,
 * `left`, `left-top`, `left-bottom`, `bottom`, `bottom-left` e `bottom-right`.
 *
 * Também é possível escolher entre os dois eventos que podem abrir o *popover*.
 * Os eventos permitidos são: `click` e `hover`.
 *
 */
export class PoPopoverBaseComponent {
    constructor() {
        /** Evento disparado ao fechar o popover. */
        this.closePopover = new EventEmitter();
        // Controla se o popover fica oculto ou visível, por padrão é oculto.
        this.isHidden = true;
        this._hideArrow = false;
        this._position = PO_POPOVER_DEFAULT_POSITION;
        this._trigger = PO_POPOVER_DEFAULT_TRIGGER;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita a seta do componente *popover*.
     *
     * @default `false`
     */
    set hideArrow(value) {
        this._hideArrow = convertToBoolean(value);
    }
    get hideArrow() {
        return this._hideArrow;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a posição que o po-popover abrirá em relação ao componente alvo. Sugere-se que seja
     * usada a orientação "right" (direita), porém o mesmo é flexível e será rotacionado
     * automaticamente para se adequar a tela, caso necessário.
     *
     * Posições válidas:
     * - `right`: Posiciona o po-popover no lado direito do componente alvo.
     * - `right-bottom`: Posiciona o po-popover no lado direito inferior do componente alvo.
     * - `right-top`: Posiciona o po-popover no lado direito superior do componente alvo.
     * - `bottom`: Posiciona o po-popover abaixo do componente alvo.
     * - `bottom-left`: Posiciona o po-popover abaixo e à esquerda do componente alvo.
     * - `bottom-right`: Posiciona o po-popover abaixo e à direita do componente alvo.
     * - `left`: Posiciona o po-popover no lado esquerdo do componente alvo.
     * - `left-top`: Posiciona o po-popover no lado esquerdo superior do componente alvo.
     * - `left-bottom`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.
     * - `top`: Posiciona o po-popover acima do componente alvo.
     * - `top-right`: Posiciona o po-popover acima e à direita do componente alvo.
     * - `top-left`: Posiciona o po-popover acima e à esquerda do componente alvo.
     *
     *
     * @default right
     */
    set position(value) {
        this._position = PO_CONTROL_POSITIONS.includes(value) ? value : PO_POPOVER_DEFAULT_POSITION;
    }
    get position() {
        return this._position;
    }
    /**
     * @description
     *
     * Define o evento que abrirá o po-popover.
     *
     * Valores válidos:
     *  - `click`: Abre ao clicar no componente alvo.
     *  - `hover`: Abre ao passar o mouse sobre o componente alvo.
     *
     * @default click
     * @optional
     */
    set trigger(value) {
        this._trigger = PO_POPOVER_TRIGGERS.includes(value) ? value : PO_POPOVER_DEFAULT_TRIGGER;
    }
    get trigger() {
        return this._trigger;
    }
}
PoPopoverBaseComponent.ɵfac = function PoPopoverBaseComponent_Factory(t) { return new (t || PoPopoverBaseComponent)(); };
PoPopoverBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPopoverBaseComponent, inputs: { target: ["p-target", "target"], title: ["p-title", "title"], hideArrow: ["p-hide-arrow", "hideArrow"], position: ["p-position", "position"], trigger: ["p-trigger", "trigger"] }, outputs: { closePopover: "p-close" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPopoverBaseComponent, [{
        type: Directive
    }], null, { target: [{
            type: Input,
            args: ['p-target']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], closePopover: [{
            type: Output,
            args: ['p-close']
        }], hideArrow: [{
            type: Input,
            args: ['p-hide-arrow']
        }], position: [{
            type: Input,
            args: ['p-position']
        }], trigger: [{
            type: Input,
            args: ['p-trigger']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcG9wb3Zlci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wb3BvdmVyL3BvLXBvcG92ZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7QUFFMUcsTUFBTSwyQkFBMkIsR0FBRyxPQUFPLENBQUM7QUFDNUMsTUFBTSwwQkFBMEIsR0FBRyxPQUFPLENBQUM7QUFDM0MsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUUvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBRUgsTUFBTSxPQUFPLHNCQUFzQjtJQURuQztRQWtERSw0Q0FBNEM7UUFDekIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTFELHFFQUFxRTtRQUNyRSxhQUFRLEdBQVksSUFBSSxDQUFDO1FBT2pCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFZLDJCQUEyQixDQUFDO1FBQ2pELGFBQVEsR0FBWSwwQkFBMEIsQ0FBQztLQXdFeEQ7SUF0RUM7Ozs7Ozs7O09BUUc7SUFDSCxJQUEyQixTQUFTLENBQUMsS0FBYztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUJHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLEtBQWE7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDOUYsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxJQUF3QixPQUFPLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztJQUMzRixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7OzRGQXJJVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFNBQVM7Z0JBNkNXLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUdDLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdHLFlBQVk7a0JBQTlCLE1BQU07bUJBQUMsU0FBUztZQXVCVSxTQUFTO2tCQUFuQyxLQUFLO21CQUFDLGNBQWM7WUFrQ0ksUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBb0JLLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIERpcmVjdGl2ZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBPX0NPTlRST0xfUE9TSVRJT05TIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFBPX1BPUE9WRVJfREVGQVVMVF9QT1NJVElPTiA9ICdyaWdodCc7XHJcbmNvbnN0IFBPX1BPUE9WRVJfREVGQVVMVF9UUklHR0VSID0gJ2NsaWNrJztcclxuY29uc3QgUE9fUE9QT1ZFUl9UUklHR0VSUyA9IFsnY2xpY2snLCAnaG92ZXInXTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1wb3BvdmVyYCDDqSB1bSBjb250YWluZXIgcGVxdWVubyByZWNvbWVuZGFkbyBwYXJhIGluY2x1aXIgdsOhcmlvcyB0aXBvcyBkZSBjb250ZcO6ZG8gY29tbzpcclxuICogZ3LDoWZpY29zLCB0ZXh0b3MsIGltYWdlbnMgZSBpbnB1dHMuIEVsZSBhYnJlIHNvYnJlcG9zdG8gYW9zIG91dHJvcyBjb21wb25lbnRlcy5cclxuICpcclxuICogUGFyYSBtb3N0cmFyIGFwZW5hcyBwZXF1ZW5vcyB0ZXh0b3MgcmVjb21lbmRhLXNlIG8gdXNvIGRhIGRpcmV0aXZhXHJcbiAqIFsqKnBvLXRvb2x0aXAqKl0oaHR0cHM6Ly9wby11aS5pby9kb2N1bWVudGF0aW9uL3BvLXRvb2x0aXA/dmlldz1kb2MpLlxyXG4gKlxyXG4gKiBQYXJhIGNvbnRlw7pkb3MgbWFpb3JlcyByZWNvbWVuZGEtc2UgbyB1c28gZG8gWyoqcG8tbW9kYWwqKl0oaHR0cHM6Ly9wby11aS5pby9kb2N1bWVudGF0aW9uL3BvLW1vZGFsP3ZpZXc9ZG9jKS5cclxuICpcclxuICogRWxlIGNvbnTDqW0gdW0gdMOtdHVsbyBlIHRhbWLDqW0gw6kgcG9zc8OtdmVsIGVzY29saGVyIGFzIHBvc2nDp8O1ZXMgZG8gcG9wb3ZlciBlbSByZWxhw6fDo28gYW8gY29tcG9uZW50ZSBwYWksXHJcbiAqIGFzIHBvc2nDp8O1ZXMgcGVybWl0aWRhcyBzw6NvOiBgcmlnaHRgLCBgcmlnaHQtdG9wYCwgYHJpZ2h0LWJvdHRvbWAsIGB0b3BgLCBgdG9wLWxlZnRgLCBgdG9wLXJpZ2h0YCxcclxuICogYGxlZnRgLCBgbGVmdC10b3BgLCBgbGVmdC1ib3R0b21gLCBgYm90dG9tYCwgYGJvdHRvbS1sZWZ0YCBlIGBib3R0b20tcmlnaHRgLlxyXG4gKlxyXG4gKiBUYW1iw6ltIMOpIHBvc3PDrXZlbCBlc2NvbGhlciBlbnRyZSBvcyBkb2lzIGV2ZW50b3MgcXVlIHBvZGVtIGFicmlyIG8gKnBvcG92ZXIqLlxyXG4gKiBPcyBldmVudG9zIHBlcm1pdGlkb3Mgc8OjbzogYGNsaWNrYCBlIGBob3ZlcmAuXHJcbiAqXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvUG9wb3ZlckJhc2VDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRWxlbWVudFJlZiBkbyBjb21wb25lbnRlIGRlIG9yaWdlbSByZXNwb25zw6F2ZWwgcG9yIGFicmlyIG8gcG9wb3Zlci5cclxuICAgKiBQYXJhIHV0aWxpemFyIG8gcG8tcG9wb3ZlciBkZXZlLXNlIGNvbG9jYXIgdW1hIHZhcmnDoXZlbCBubyBjb21wb25lbnRlIHF1ZSB2YWkgZGlzcGFyYXIgbyBldmVudG9cclxuICAgKiBkZSBhYmVydHVyYSwgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1idXR0b25cclxuICAgKiAgIHAtbGFiZWw9XCJPcGVuIFBvcG92ZXJcIj5cclxuICAgKiA8L3BvLWJ1dHRvbj5cclxuICAgKlxyXG4gICAqIDxwby1wb3BvdmVyXHJcbiAgICogICBbcC10YXJnZXRdPVwicG9CdXR0b25cIlxyXG4gICAqICAgW3AtdGl0bGVdPVwiUE8gUG9wb3ZlclwiPlxyXG4gICAqIDwvcG8tcG9wb3Zlcj5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIFRhbWLDqW0gZGV2ZS1zZSBjcmlhciB1bSBWaWV3Q2hpbGQgcGFyYSBjYWRhIHBvcG92ZXIsIHBhc3NhbmRvIGNvbW8gcmVmZXLDqm5jaWEgbyBlbGVtZW50byBkb1xyXG4gICAqIEhUTUwgcXVlIGlyw6EgZGlzcGFyYXIgbyBldmVudG8uIEV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBAVmlld0NoaWxkKFBvQnV0dG9uQ29tcG9uZW50LCB7cmVhZDogRWxlbWVudFJlZn0pIHBvQnV0dG9uOiBQb0J1dHRvbkNvbXBvbmVudDtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIFBvZGUtc2UgdGFtYmVtIGluZm9ybWFyIGRpcmV0YW1lbnRlIG8gSFRNTEVsZW1lbnQsIHBhcmEgbsOjbyB0ZXIgcXVlIHV0aWxpemFyIG8gVmlld0NoaWxkLlxyXG4gICAqIFBhcmEgdXRpbGl6YXIgbyBwby1wb3BvdmVyIGRldmUtc2UgY29sb2NhciB1bWEgdmFyacOhdmVsIG5vIGNvbXBvbmVudGUgcXVlIHZhaSBkaXNwYXJhciBvIGV2ZW50b1xyXG4gICAqIGRlIGFiZXJ0dXJhLCBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPGJ1dHRvbiAjdGFyZ2V0PlxyXG4gICAqICAgQWJyaXIgcG9wb3ZlclxyXG4gICAqIDwvYnV0dG9uPlxyXG4gICAqXHJcbiAgICogPHBvLXBvcG92ZXJcclxuICAgKiAgICAgW3AtdGFyZ2V0XT1cInRhcmdldFwiXHJcbiAgICogICAgIHAtdHJpZ2dlcj1cImNsaWNrXCIgPlxyXG4gICAqIDwvcG8tcG9wb3Zlcj5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdGFyZ2V0JykgdGFyZ2V0OiBFbGVtZW50UmVmIHwgSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKiBUw610dWxvIGRvIHBvcG92ZXIuICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBFdmVudG8gZGlzcGFyYWRvIGFvIGZlY2hhciBvIHBvcG92ZXIuICovXHJcbiAgQE91dHB1dCgncC1jbG9zZScpIGNsb3NlUG9wb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBDb250cm9sYSBzZSBvIHBvcG92ZXIgZmljYSBvY3VsdG8gb3Ugdmlzw612ZWwsIHBvciBwYWRyw6NvIMOpIG9jdWx0by5cclxuICBpc0hpZGRlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByb3RlY3RlZCBjbGlja291dExpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG4gIHByb3RlY3RlZCBtb3VzZUVudGVyTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJvdGVjdGVkIG1vdXNlTGVhdmVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICBwcm90ZWN0ZWQgcmVzaXplTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgX2hpZGVBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uPzogc3RyaW5nID0gUE9fUE9QT1ZFUl9ERUZBVUxUX1BPU0lUSU9OO1xyXG4gIHByaXZhdGUgX3RyaWdnZXI/OiBzdHJpbmcgPSBQT19QT1BPVkVSX0RFRkFVTFRfVFJJR0dFUjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlc2FiaWxpdGEgYSBzZXRhIGRvIGNvbXBvbmVudGUgKnBvcG92ZXIqLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLWFycm93Jykgc2V0IGhpZGVBcnJvdyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faGlkZUFycm93ID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZUFycm93KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVBcnJvdztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBwb3Npw6fDo28gcXVlIG8gcG8tcG9wb3ZlciBhYnJpcsOhIGVtIHJlbGHDp8OjbyBhbyBjb21wb25lbnRlIGFsdm8uIFN1Z2VyZS1zZSBxdWUgc2VqYVxyXG4gICAqIHVzYWRhIGEgb3JpZW50YcOnw6NvIFwicmlnaHRcIiAoZGlyZWl0YSksIHBvcsOpbSBvIG1lc21vIMOpIGZsZXjDrXZlbCBlIHNlcsOhIHJvdGFjaW9uYWRvXHJcbiAgICogYXV0b21hdGljYW1lbnRlIHBhcmEgc2UgYWRlcXVhciBhIHRlbGEsIGNhc28gbmVjZXNzw6FyaW8uXHJcbiAgICpcclxuICAgKiBQb3Npw6fDtWVzIHbDoWxpZGFzOlxyXG4gICAqIC0gYHJpZ2h0YDogUG9zaWNpb25hIG8gcG8tcG9wb3ZlciBubyBsYWRvIGRpcmVpdG8gZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHJpZ2h0LWJvdHRvbWA6IFBvc2ljaW9uYSBvIHBvLXBvcG92ZXIgbm8gbGFkbyBkaXJlaXRvIGluZmVyaW9yIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGByaWdodC10b3BgOiBQb3NpY2lvbmEgbyBwby1wb3BvdmVyIG5vIGxhZG8gZGlyZWl0byBzdXBlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgYm90dG9tYDogUG9zaWNpb25hIG8gcG8tcG9wb3ZlciBhYmFpeG8gZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYGJvdHRvbS1sZWZ0YDogUG9zaWNpb25hIG8gcG8tcG9wb3ZlciBhYmFpeG8gZSDDoCBlc3F1ZXJkYSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgYm90dG9tLXJpZ2h0YDogUG9zaWNpb25hIG8gcG8tcG9wb3ZlciBhYmFpeG8gZSDDoCBkaXJlaXRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0YDogUG9zaWNpb25hIG8gcG8tcG9wb3ZlciBubyBsYWRvIGVzcXVlcmRvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0LXRvcGA6IFBvc2ljaW9uYSBvIHBvLXBvcG92ZXIgbm8gbGFkbyBlc3F1ZXJkbyBzdXBlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgbGVmdC1ib3R0b21gOiBQb3NpY2lvbmEgbyBwby1wb3BvdmVyIG5vIGxhZG8gZXNxdWVyZG8gaW5mZXJpb3IgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcGA6IFBvc2ljaW9uYSBvIHBvLXBvcG92ZXIgYWNpbWEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcC1yaWdodGA6IFBvc2ljaW9uYSBvIHBvLXBvcG92ZXIgYWNpbWEgZSDDoCBkaXJlaXRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGB0b3AtbGVmdGA6IFBvc2ljaW9uYSBvIHBvLXBvcG92ZXIgYWNpbWEgZSDDoCBlc3F1ZXJkYSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHJpZ2h0XHJcbiAgICovXHJcbiAgQElucHV0KCdwLXBvc2l0aW9uJykgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gUE9fQ09OVFJPTF9QT1NJVElPTlMuaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiBQT19QT1BPVkVSX0RFRkFVTFRfUE9TSVRJT047XHJcbiAgfVxyXG5cclxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gZXZlbnRvIHF1ZSBhYnJpcsOhIG8gcG8tcG9wb3Zlci5cclxuICAgKlxyXG4gICAqIFZhbG9yZXMgdsOhbGlkb3M6XHJcbiAgICogIC0gYGNsaWNrYDogQWJyZSBhbyBjbGljYXIgbm8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqICAtIGBob3ZlcmA6IEFicmUgYW8gcGFzc2FyIG8gbW91c2Ugc29icmUgbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBjbGlja1xyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10cmlnZ2VyJykgc2V0IHRyaWdnZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IFBPX1BPUE9WRVJfVFJJR0dFUlMuaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiBQT19QT1BPVkVSX0RFRkFVTFRfVFJJR0dFUjtcclxuICB9XHJcblxyXG4gIGdldCB0cmlnZ2VyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcclxuICB9XHJcbn1cclxuIl19