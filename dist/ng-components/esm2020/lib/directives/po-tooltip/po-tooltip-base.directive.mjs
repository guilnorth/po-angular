import { __decorate } from "tslib";
import { Input, Directive } from '@angular/core';
import { InputBoolean } from '../../decorators';
import { PO_CONTROL_POSITIONS } from './../../services/po-control-position/po-control-position.constants';
import * as i0 from "@angular/core";
const PO_TOOLTIP_POSITION_DEFAULT = 'bottom';
/**
 * @description
 *
 * A diretiva po-tooltip deve ser utilizada para oferecer informações adicionais quando os usuários
 * passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela está atribuída.
 *
 * O conteúdo é formado por um pequeno texto que deve contribuir para uma tomada de decisão ou
 * orientação do usuário. A ativação dele pode estar em qualquer componente ou tag HTML.
 *
 * Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
 * conteúdo deve-se utilizar o [**po-popover**](https://po-ui.io/documentation/po-popover?view=doc).
 */
export class PoTooltipBaseDirective {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Define que o po-tooltip será incluido no body e não dentro do elemento ao qual o tooltip foi especificado.
         * Opção necessária para o caso de uso de tooltip em um elemento SVG.
         *
         * @default `false`
         */
        this.appendInBody = false;
        this._tooltipPosition = 'bottom';
        this._displayTooltip = false;
        this._tooltip = '';
    }
    /**
     * @description
     *
     * Habilita e atribui um texto ao po-tooltip.
     *
     * **Como boa prática, indica-se utilizar um texto com até 140 caracteres.**
     */
    set tooltip(tooltip) {
        this._tooltip = tooltip;
    }
    get tooltip() {
        return this._tooltip;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a posição que o po-tooltip abrirá em relação ao componente alvo. Sugere-se que seja
     * usada a orientação "bottom" (abaixo), porém o mesmo é flexível e será rotacionado
     * automaticamente para se adequar a tela, caso necessário.
     *
     * Posições válidas:
     * - `right`: Posiciona o po-tooltip no lado direito do componente alvo.
     * - `right-bottom`: Posiciona o po-tooltip no lado direito inferior do componente alvo.
     * - `right-top`: Posiciona o po-tooltip no lado direito superior do componente alvo.
     * - `bottom`: Posiciona o po-tooltip abaixo do componente alvo.
     * - `bottom-left`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.
     * - `bottom-right`: Posiciona o po-tooltip abaixo e à direita do componente alvo.
     * - `left`: Posiciona o po-tooltip no lado esquerdo do componente alvo.
     * - `left-top`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.
     * - `left-bottom`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.
     * - `top`: Posiciona o po-tooltip acima do componente alvo.
     * - `top-right`: Posiciona o po-tooltip acima e à direita do componente alvo.
     * - `top-left`: Posiciona o po-tooltip acima e à esquerda do componente alvo.
     *
     * @default bottom
     */
    set tooltipPosition(position) {
        this._tooltipPosition = PO_CONTROL_POSITIONS.includes(position) ? position : PO_TOOLTIP_POSITION_DEFAULT;
    }
    get tooltipPosition() {
        return this._tooltipPosition;
    }
    set displayTooltip(value) {
        this._displayTooltip = value;
        this._displayTooltip ? this.addTooltipAction() : this.removeTooltipAction();
    }
    get displayTooltip() {
        return this._displayTooltip;
    }
}
PoTooltipBaseDirective.ɵfac = function PoTooltipBaseDirective_Factory(t) { return new (t || PoTooltipBaseDirective)(); };
PoTooltipBaseDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTooltipBaseDirective, inputs: { appendInBody: ["p-append-in-body", "appendInBody"], tooltip: ["p-tooltip", "tooltip"], tooltipPosition: ["p-tooltip-position", "tooltipPosition"], displayTooltip: ["p-display-tooltip", "displayTooltip"] } });
__decorate([
    InputBoolean()
], PoTooltipBaseDirective.prototype, "appendInBody", void 0);
__decorate([
    InputBoolean()
], PoTooltipBaseDirective.prototype, "displayTooltip", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTooltipBaseDirective, [{
        type: Directive
    }], null, { appendInBody: [{
            type: Input,
            args: ['p-append-in-body']
        }], tooltip: [{
            type: Input,
            args: ['p-tooltip']
        }], tooltipPosition: [{
            type: Input,
            args: ['p-tooltip-position']
        }], displayTooltip: [{
            type: Input,
            args: ['p-display-tooltip']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvZGlyZWN0aXZlcy9wby10b29sdGlwL3BvLXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7QUFFMUcsTUFBTSwyQkFBMkIsR0FBRyxRQUFRLENBQUM7QUFFN0M7Ozs7Ozs7Ozs7O0dBV0c7QUFHSCxNQUFNLE9BQWdCLHNCQUFzQjtJQUQ1QztRQUVFOzs7Ozs7Ozs7V0FTRztRQUN3QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUUvRCxxQkFBZ0IsR0FBWSxRQUFRLENBQUM7UUFHdkMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsYUFBUSxHQUFXLEVBQUUsQ0FBQztLQTJEL0I7SUF6REM7Ozs7OztPQU1HO0lBQ0gsSUFBd0IsT0FBTyxDQUFDLE9BQWU7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCRztJQUNILElBQWlDLGVBQWUsQ0FBQyxRQUFnQjtRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQzNHLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUUyQyxJQUFJLGNBQWMsQ0FBQyxLQUFjO1FBQzNFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM5RSxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs0RkF4RW1CLHNCQUFzQjt5RUFBdEIsc0JBQXNCO0FBV0M7SUFBZixZQUFZLEVBQUU7NERBQStCO0FBc0Q3QjtJQUFmLFlBQVksRUFBRTs0REFHMUM7dUZBcEVtQixzQkFBc0I7Y0FEM0MsU0FBUztnQkFZbUMsWUFBWTtrQkFBdEQsS0FBSzttQkFBQyxrQkFBa0I7WUFlRCxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUFnQ2UsZUFBZTtrQkFBL0MsS0FBSzttQkFBQyxvQkFBb0I7WUFPcUIsY0FBYztrQkFBN0QsS0FBSzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFBPX0NPTlRST0xfUE9TSVRJT05TIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFBPX1RPT0xUSVBfUE9TSVRJT05fREVGQVVMVCA9ICdib3R0b20nO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBIGRpcmV0aXZhIHBvLXRvb2x0aXAgZGV2ZSBzZXIgdXRpbGl6YWRhIHBhcmEgb2ZlcmVjZXIgaW5mb3JtYcOnw7VlcyBhZGljaW9uYWlzIHF1YW5kbyBvcyB1c3XDoXJpb3NcclxuICogcGFzc2FtIG8gbW91c2Ugb3UgcmVhbGl6YW0gbyBmb2NvIHNvYnJlIG8gZWxlbWVudG8gYWx2byBhbyBxdWFsIGVsYSBlc3TDoSBhdHJpYnXDrWRhLlxyXG4gKlxyXG4gKiBPIGNvbnRlw7pkbyDDqSBmb3JtYWRvIHBvciB1bSBwZXF1ZW5vIHRleHRvIHF1ZSBkZXZlIGNvbnRyaWJ1aXIgcGFyYSB1bWEgdG9tYWRhIGRlIGRlY2lzw6NvIG91XHJcbiAqIG9yaWVudGHDp8OjbyBkbyB1c3XDoXJpby4gQSBhdGl2YcOnw6NvIGRlbGUgcG9kZSBlc3RhciBlbSBxdWFscXVlciBjb21wb25lbnRlIG91IHRhZyBIVE1MLlxyXG4gKlxyXG4gKiBQYXJhIHRleHRvcyBtYWlvcmVzIG91IG5vIGNhc28gZGUgaGF2ZXIgYSBuZWNlc3NpZGFkZSBkZSB1dGlsaXphciBhbGd1bSBvdXRybyBlbGVtZW50byBjb21vXHJcbiAqIGNvbnRlw7pkbyBkZXZlLXNlIHV0aWxpemFyIG8gWyoqcG8tcG9wb3ZlcioqXShodHRwczovL3BvLXVpLmlvL2RvY3VtZW50YXRpb24vcG8tcG9wb3Zlcj92aWV3PWRvYykuXHJcbiAqL1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb1Rvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHF1ZSBvIHBvLXRvb2x0aXAgc2Vyw6EgaW5jbHVpZG8gbm8gYm9keSBlIG7Do28gZGVudHJvIGRvIGVsZW1lbnRvIGFvIHF1YWwgbyB0b29sdGlwIGZvaSBlc3BlY2lmaWNhZG8uXHJcbiAgICogT3DDp8OjbyBuZWNlc3PDoXJpYSBwYXJhIG8gY2FzbyBkZSB1c28gZGUgdG9vbHRpcCBlbSB1bSBlbGVtZW50byBTVkcuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWFwcGVuZC1pbi1ib2R5JykgQElucHV0Qm9vbGVhbigpIGFwcGVuZEluQm9keTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgX3Rvb2x0aXBQb3NpdGlvbj86IHN0cmluZyA9ICdib3R0b20nO1xyXG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGVudDtcclxuXHJcbiAgcHJpdmF0ZSBfZGlzcGxheVRvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF90b29sdGlwOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBIYWJpbGl0YSBlIGF0cmlidWkgdW0gdGV4dG8gYW8gcG8tdG9vbHRpcC5cclxuICAgKlxyXG4gICAqICoqQ29tbyBib2EgcHLDoXRpY2EsIGluZGljYS1zZSB1dGlsaXphciB1bSB0ZXh0byBjb20gYXTDqSAxNDAgY2FyYWN0ZXJlcy4qKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10b29sdGlwJykgc2V0IHRvb2x0aXAodG9vbHRpcDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90b29sdGlwID0gdG9vbHRpcDtcclxuICB9XHJcbiAgZ2V0IHRvb2x0aXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBwb3Npw6fDo28gcXVlIG8gcG8tdG9vbHRpcCBhYnJpcsOhIGVtIHJlbGHDp8OjbyBhbyBjb21wb25lbnRlIGFsdm8uIFN1Z2VyZS1zZSBxdWUgc2VqYVxyXG4gICAqIHVzYWRhIGEgb3JpZW50YcOnw6NvIFwiYm90dG9tXCIgKGFiYWl4byksIHBvcsOpbSBvIG1lc21vIMOpIGZsZXjDrXZlbCBlIHNlcsOhIHJvdGFjaW9uYWRvXHJcbiAgICogYXV0b21hdGljYW1lbnRlIHBhcmEgc2UgYWRlcXVhciBhIHRlbGEsIGNhc28gbmVjZXNzw6FyaW8uXHJcbiAgICpcclxuICAgKiBQb3Npw6fDtWVzIHbDoWxpZGFzOlxyXG4gICAqIC0gYHJpZ2h0YDogUG9zaWNpb25hIG8gcG8tdG9vbHRpcCBubyBsYWRvIGRpcmVpdG8gZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHJpZ2h0LWJvdHRvbWA6IFBvc2ljaW9uYSBvIHBvLXRvb2x0aXAgbm8gbGFkbyBkaXJlaXRvIGluZmVyaW9yIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGByaWdodC10b3BgOiBQb3NpY2lvbmEgbyBwby10b29sdGlwIG5vIGxhZG8gZGlyZWl0byBzdXBlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgYm90dG9tYDogUG9zaWNpb25hIG8gcG8tdG9vbHRpcCBhYmFpeG8gZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYGJvdHRvbS1sZWZ0YDogUG9zaWNpb25hIG8gcG8tdG9vbHRpcCBhYmFpeG8gZSDDoCBlc3F1ZXJkYSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgYm90dG9tLXJpZ2h0YDogUG9zaWNpb25hIG8gcG8tdG9vbHRpcCBhYmFpeG8gZSDDoCBkaXJlaXRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0YDogUG9zaWNpb25hIG8gcG8tdG9vbHRpcCBubyBsYWRvIGVzcXVlcmRvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGBsZWZ0LXRvcGA6IFBvc2ljaW9uYSBvIHBvLXRvb2x0aXAgbm8gbGFkbyBlc3F1ZXJkbyBzdXBlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICogLSBgbGVmdC1ib3R0b21gOiBQb3NpY2lvbmEgbyBwby10b29sdGlwIG5vIGxhZG8gZXNxdWVyZG8gaW5mZXJpb3IgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcGA6IFBvc2ljaW9uYSBvIHBvLXRvb2x0aXAgYWNpbWEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gICAqIC0gYHRvcC1yaWdodGA6IFBvc2ljaW9uYSBvIHBvLXRvb2x0aXAgYWNpbWEgZSDDoCBkaXJlaXRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICAgKiAtIGB0b3AtbGVmdGA6IFBvc2ljaW9uYSBvIHBvLXRvb2x0aXAgYWNpbWEgZSDDoCBlc3F1ZXJkYSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBib3R0b21cclxuICAgKi9cclxuICBASW5wdXQoJ3AtdG9vbHRpcC1wb3NpdGlvbicpIHNldCB0b29sdGlwUG9zaXRpb24ocG9zaXRpb246IHN0cmluZykge1xyXG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gUE9fQ09OVFJPTF9QT1NJVElPTlMuaW5jbHVkZXMocG9zaXRpb24pID8gcG9zaXRpb24gOiBQT19UT09MVElQX1BPU0lUSU9OX0RFRkFVTFQ7XHJcbiAgfVxyXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3AtZGlzcGxheS10b29sdGlwJykgQElucHV0Qm9vbGVhbigpIHNldCBkaXNwbGF5VG9vbHRpcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzcGxheVRvb2x0aXAgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2Rpc3BsYXlUb29sdGlwID8gdGhpcy5hZGRUb29sdGlwQWN0aW9uKCkgOiB0aGlzLnJlbW92ZVRvb2x0aXBBY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5VG9vbHRpcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5VG9vbHRpcDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBhZGRUb29sdGlwQWN0aW9uKCk7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbW92ZVRvb2x0aXBBY3Rpb24oKTtcclxufVxyXG4iXX0=