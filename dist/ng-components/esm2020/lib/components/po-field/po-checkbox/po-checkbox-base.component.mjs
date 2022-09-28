import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, uuid } from './../../../utils/util';
import { InputBoolean } from '../../../decorators';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-checkbox` exibe uma caixa de opção com um texto ao lado, na qual é possível marcar e desmarcar através tanto
 * no *click* do *mouse* quanto por meio da tecla *space* quando estiver com foco.
 *
 * Cada opção poderá receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como também uma ação que será disparada quando
 * ocorrer mudanças do valor.
 *
 * > O *model* deste componente aceitará valores igual à `true`, `false` ou `null` para quando for indeterminado/mixed.
 *
 * **Acessibilidade tratada no componente:**
 *
 * Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:
 *
 * - O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. [WCAG 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
 * - A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. [WCAG 2.4.12: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced)
 * - A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. [WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color)
 */
export class PoCheckboxBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Aplica foco no elemento ao ser iniciado.
         *
         * > Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.
         *
         * @default `false`
         */
        this.autoFocus = false;
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado quando o valor do *checkbox* for alterado.
         */
        this.change = new EventEmitter();
        this.id = uuid();
        this._disabled = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o estado do *checkbox* como desabilitado.
     *
     * @default `false`
     */
    set disabled(value) {
        this._disabled = convertToBoolean(value);
    }
    get disabled() {
        return this._disabled;
    }
    changeValue() {
        if (this.propagateChange) {
            this.propagateChange(this.checkboxValue);
        }
        this.change.emit(this.checkboxValue);
    }
    checkOption(value) {
        if (!this.disabled) {
            value === 'mixed' ? this.changeModelValue(true) : this.changeModelValue(!value);
            this.changeValue();
        }
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (value !== this.checkboxValue) {
            this.changeModelValue(value);
        }
    }
}
PoCheckboxBaseComponent.ɵfac = function PoCheckboxBaseComponent_Factory(t) { return new (t || PoCheckboxBaseComponent)(); };
PoCheckboxBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoCheckboxBaseComponent, inputs: { name: "name", autoFocus: ["p-auto-focus", "autoFocus"], label: ["p-label", "label"], checkboxValue: ["p-checkboxValue", "checkboxValue"], checkBoxRequired: ["p-required", "checkBoxRequired"], disabled: ["p-disabled", "disabled"] }, outputs: { change: "p-change" } });
__decorate([
    InputBoolean()
], PoCheckboxBaseComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], PoCheckboxBaseComponent.prototype, "checkBoxRequired", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCheckboxBaseComponent, [{
        type: Directive
    }], null, { name: [{
            type: Input,
            args: ['name']
        }], autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], checkboxValue: [{
            type: Input,
            args: ['p-checkboxValue']
        }], checkBoxRequired: [{
            type: Input,
            args: ['p-required']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hlY2tib3gtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tY2hlY2tib3gvcG8tY2hlY2tib3gtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUVILE1BQU0sT0FBZ0IsdUJBQXVCO0lBRDdDO1FBS0U7Ozs7Ozs7Ozs7V0FVRztRQUNvQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBS2xFOzs7Ozs7V0FNRztRQUNpQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFReEUsT0FBRSxHQUFHLElBQUksRUFBRSxDQUFDO1FBSUosY0FBUyxHQUFhLEtBQUssQ0FBQztLQXVEckM7SUFyREM7Ozs7Ozs7O09BUUc7SUFDSCxJQUF5QixRQUFRLENBQUMsS0FBYztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUE4QjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsZ0VBQWdFO0lBQ2hFLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7OzhGQTNGbUIsdUJBQXVCOzBFQUF2Qix1QkFBdUI7QUFlSjtJQUFmLFlBQVksRUFBRTswREFBNEI7QUFrQjdCO0lBQWYsWUFBWSxFQUFFO2lFQUEyQjt1RkFqQzNDLHVCQUF1QjtjQUQ1QyxTQUFTO2dCQUdPLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQWEwQixTQUFTO2tCQUEvQyxLQUFLO21CQUFDLGNBQWM7WUFHSCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFTSSxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUFHUSxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUdhLGdCQUFnQjtrQkFBcEQsS0FBSzttQkFBQyxZQUFZO1lBaUJNLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgdXVpZCB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLWNoZWNrYm94YCBleGliZSB1bWEgY2FpeGEgZGUgb3DDp8OjbyBjb20gdW0gdGV4dG8gYW8gbGFkbywgbmEgcXVhbCDDqSBwb3Nzw612ZWwgbWFyY2FyIGUgZGVzbWFyY2FyIGF0cmF2w6lzIHRhbnRvXHJcbiAqIG5vICpjbGljayogZG8gKm1vdXNlKiBxdWFudG8gcG9yIG1laW8gZGEgdGVjbGEgKnNwYWNlKiBxdWFuZG8gZXN0aXZlciBjb20gZm9jby5cclxuICpcclxuICogQ2FkYSBvcMOnw6NvIHBvZGVyw6EgcmVjZWJlciB1bSBlc3RhZG8gZGUgbWFyY2FkbywgZGVzbWFyY2FkbywgaW5kZXRlcm1pbmFkby9taXhlZCBlIGRlc2FiaWxpdGFkbywgY29tbyB0YW1iw6ltIHVtYSBhw6fDo28gcXVlIHNlcsOhIGRpc3BhcmFkYSBxdWFuZG9cclxuICogb2NvcnJlciBtdWRhbsOnYXMgZG8gdmFsb3IuXHJcbiAqXHJcbiAqID4gTyAqbW9kZWwqIGRlc3RlIGNvbXBvbmVudGUgYWNlaXRhcsOhIHZhbG9yZXMgaWd1YWwgw6AgYHRydWVgLCBgZmFsc2VgIG91IGBudWxsYCBwYXJhIHF1YW5kbyBmb3IgaW5kZXRlcm1pbmFkby9taXhlZC5cclxuICpcclxuICogKipBY2Vzc2liaWxpZGFkZSB0cmF0YWRhIG5vIGNvbXBvbmVudGU6KipcclxuICpcclxuICogQWxndW1hcyBkaXJldHJpemVzIGRlIGFjZXNzaWJpbGlkYWRlIGrDoSBzw6NvIHRyYXRhZGFzIG5vIGNvbXBvbmVudGUsIGludGVybmFtZW50ZSwgZSBuw6NvIHBvZGVtIHNlciBhbHRlcmFkYXMgcGVsbyBwcm9wcmlldMOhcmlvIGRvIGNvbnRlw7pkby4gU8OjbyBlbGFzOlxyXG4gKlxyXG4gKiAtIE8gY29tcG9uZW50ZSBmb2kgZGVzZW52b2x2aWRvIHV0aWxpemFuZG8gY29udHJvbGVzIHBhZHLDtWVzIEhUTUwgcGFyYSBwZXJtaXRpciBhIGlkZW50aWZpY2HDp8OjbyBkbyBtZXNtbyBuYSBpbnRlcmZhY2UgcG9yIHRlY25vbG9naWFzIGFzc2lzdGl2YXMuIFtXQ0FHIDQuMS4yOiBOYW1lLCBSb2xlLCBWYWx1ZV0oaHR0cHM6Ly93d3cudzMub3JnL1dBSS9XQ0FHMjEvVW5kZXJzdGFuZGluZy9uYW1lLXJvbGUtdmFsdWUpXHJcbiAqIC0gQSDDoXJlYSBkbyBmb2NvIHByZWNpc2FyIHRlciB1bWEgZXNwZXNzdXJhIGRlIHBlbG8gbWVub3MgMiBwaXhlbHMgQ1NTIGUgbyBmb2NvIG7Do28gcG9kZSBmaWNhciBlc2NvbmRpZG8gcG9yIG91dHJvcyBlbGVtZW50b3MgZGEgdGVsYS4gW1dDQUcgMi40LjEyOiBGb2N1cyBBcHBlYXJhbmNlXShodHRwczovL3d3dy53My5vcmcvV0FJL1dDQUcyMi9VbmRlcnN0YW5kaW5nL2ZvY3VzLWFwcGVhcmFuY2UtZW5oYW5jZWQpXHJcbiAqIC0gQSBjb3IgbsOjbyBkZXZlIHNlciBvIMO6bmljbyBtZWlvIHBhcmEgZGlmZXJlbmNpYXIgbyBjb21wb25lbnRlIGRvIHNldSBlc3RhZG8gbWFyY2FkbyBlIGRlc21hcmNhZG8uIFtXR0FHIDEuNC4xOiBVc2Ugb2YgQ29sb3IsIDMuMi40OiBDb25zaXN0ZW50IElkZW50aWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvV0FJL1dDQUcyMS9VbmRlcnN0YW5kaW5nL3VzZS1vZi1jb2xvcilcclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9DaGVja2JveEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLyoqIERlZmluZSBvIG5vbWUgZG8gKmNoZWNrYm94Ki4gKi9cclxuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBcGxpY2EgZm9jbyBubyBlbGVtZW50byBhbyBzZXIgaW5pY2lhZG8uXHJcbiAgICpcclxuICAgKiA+IENhc28gbWFpcyBkZSB1bSBlbGVtZW50byBzZWphIGNvbmZpZ3VyYWRvIGNvbSBlc3NhIHByb3ByaWVkYWRlLCBhcGVuYXMgbyDDumx0aW1vIGVsZW1lbnRvIGRlY2xhcmFkbyBjb20gZWxhIHRlcsOhIG8gZm9jby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1mb2N1cycpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRleHRvIGRlIGV4aWJpw6fDo28gZG8gKmNoZWNrYm94Ki4gKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gcXVhbmRvIG8gdmFsb3IgZG8gKmNoZWNrYm94KiBmb3IgYWx0ZXJhZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vcHJvcHJpZWRhZGUgaW50ZXJuYSByZWNlYmlkYSBkbyBjaGVja2JveC1ncm91cCBwYXJhIHZlcmlmaWNhciBzZSBvIGNoZWNrYm94IGVzdMOhIGF0aXZvLCBpbmF0aXZvIG91IGluZGV0ZXJtaW5hdGVcclxuICBASW5wdXQoJ3AtY2hlY2tib3hWYWx1ZScpIGNoZWNrYm94VmFsdWU6IGJvb2xlYW4gfCBudWxsIHwgc3RyaW5nO1xyXG5cclxuICAvL3Byb3ByaWVkYWRlIGludGVybmEgcmVjZWJpZGEgZG8gY2hlY2tib3gtZ3JvdXAgcGFyYSB2ZXJpZmljYXIgc2UgbyBjaGVja2JveCDDqSByZXF1aXJlZFxyXG4gIEBJbnB1dCgncC1yZXF1aXJlZCcpIEBJbnB1dEJvb2xlYW4oKSBjaGVja0JveFJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuICBpZCA9IHV1aWQoKTtcclxuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcclxuICBvblRvdWNoZWQ7XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gZXN0YWRvIGRvICpjaGVja2JveCogY29tbyBkZXNhYmlsaXRhZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5jaGVja2JveFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY2hlY2tib3hWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGVja09wdGlvbih2YWx1ZTogYm9vbGVhbiB8IG51bGwgfCBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB2YWx1ZSA9PT0gJ21peGVkJyA/IHRoaXMuY2hhbmdlTW9kZWxWYWx1ZSh0cnVlKSA6IHRoaXMuY2hhbmdlTW9kZWxWYWx1ZSghdmFsdWUpO1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIG9zIGVzdGFkb3MgZGUgaGFiaWxpdGFkbyB2aWEgZm9ybXMgYXBpXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5jaGVja2JveFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlTW9kZWxWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2hhbmdlTW9kZWxWYWx1ZSh2YWx1ZTogYm9vbGVhbiB8IG51bGwpO1xyXG59XHJcbiJdfQ==