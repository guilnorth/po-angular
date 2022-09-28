import { EventEmitter, Input, Output, Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * Este componente é de uso interno utilizado por componentes de entrada de dados com o objetivo de resetar as informações do model.
 *
 * Por padrão limpa o valor do campo e executa o método onChangePropagate, caso tenha a necessidade de tratar a função de limpar o campo,
 * deve implementar a interface PoClean.
 */
export class PoCleanBaseComponent {
    constructor() {
        /** Valor que será atribuído ao campo quando for clicado no po-clean. */
        this.defaultValue = '';
        /**
         * @optional
         *
         * @description
         *
         *
         * Evento disparado quando executada ação do po-clean.
         * Este evento deve ser usado para avisar para o componente que está usando o po-clean, que o botão foi disparado,
         * e provavelmente será preciso emitir o evento para atualizar o model.
         */
        this.changeEvent = new EventEmitter();
    }
    clear() {
        this.setInputValue(this.defaultValue);
        this.changeEvent.emit(this.defaultValue);
    }
    showIcon() {
        return this.defaultValue !== this.getInputValue();
    }
}
PoCleanBaseComponent.ɵfac = function PoCleanBaseComponent_Factory(t) { return new (t || PoCleanBaseComponent)(); };
PoCleanBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoCleanBaseComponent, inputs: { inputRef: ["p-element-ref", "inputRef"], defaultValue: ["p-default-value", "defaultValue"] }, outputs: { changeEvent: "p-change-event" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCleanBaseComponent, [{
        type: Directive
    }], null, { inputRef: [{
            type: Input,
            args: ['p-element-ref']
        }], defaultValue: [{
            type: Input,
            args: ['p-default-value']
        }], changeEvent: [{
            type: Output,
            args: ['p-change-event']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2xlYW4tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tY2xlYW4vcG8tY2xlYW4tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFbkY7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBZ0Isb0JBQW9CO0lBRDFDO1FBS0Usd0VBQXdFO1FBQzlDLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRXJEOzs7Ozs7Ozs7V0FTRztRQUN1QixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0tBY3BGO0lBWkMsS0FBSztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7d0ZBMUJtQixvQkFBb0I7dUVBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRHpDLFNBQVM7Z0JBR2dCLFFBQVE7a0JBQS9CLEtBQUs7bUJBQUMsZUFBZTtZQUdJLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBWUUsV0FBVztrQkFBcEMsTUFBTTttQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBFc3RlIGNvbXBvbmVudGUgw6kgZGUgdXNvIGludGVybm8gdXRpbGl6YWRvIHBvciBjb21wb25lbnRlcyBkZSBlbnRyYWRhIGRlIGRhZG9zIGNvbSBvIG9iamV0aXZvIGRlIHJlc2V0YXIgYXMgaW5mb3JtYcOnw7VlcyBkbyBtb2RlbC5cclxuICpcclxuICogUG9yIHBhZHLDo28gbGltcGEgbyB2YWxvciBkbyBjYW1wbyBlIGV4ZWN1dGEgbyBtw6l0b2RvIG9uQ2hhbmdlUHJvcGFnYXRlLCBjYXNvIHRlbmhhIGEgbmVjZXNzaWRhZGUgZGUgdHJhdGFyIGEgZnVuw6fDo28gZGUgbGltcGFyIG8gY2FtcG8sXHJcbiAqIGRldmUgaW1wbGVtZW50YXIgYSBpbnRlcmZhY2UgUG9DbGVhbi5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9DbGVhbkJhc2VDb21wb25lbnQge1xyXG4gIC8qKiBOZXN0YSBwcm9wcmllZGFkZSBkZXZlLXNlIGluZm9ybWFyIG8gZWxlbWVudFJlZiBkbyBjYW1wbyBkZSBlbnRyYWRhIHF1ZSB1dGlsaXphcsOhIG8gcG8tY2xlYW4uICovXHJcbiAgQElucHV0KCdwLWVsZW1lbnQtcmVmJykgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qKiBWYWxvciBxdWUgc2Vyw6EgYXRyaWJ1w61kbyBhbyBjYW1wbyBxdWFuZG8gZm9yIGNsaWNhZG8gbm8gcG8tY2xlYW4uICovXHJcbiAgQElucHV0KCdwLWRlZmF1bHQtdmFsdWUnKSBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBxdWFuZG8gZXhlY3V0YWRhIGHDp8OjbyBkbyBwby1jbGVhbi5cclxuICAgKiBFc3RlIGV2ZW50byBkZXZlIHNlciB1c2FkbyBwYXJhIGF2aXNhciBwYXJhIG8gY29tcG9uZW50ZSBxdWUgZXN0w6EgdXNhbmRvIG8gcG8tY2xlYW4sIHF1ZSBvIGJvdMOjbyBmb2kgZGlzcGFyYWRvLFxyXG4gICAqIGUgcHJvdmF2ZWxtZW50ZSBzZXLDoSBwcmVjaXNvIGVtaXRpciBvIGV2ZW50byBwYXJhIGF0dWFsaXphciBvIG1vZGVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlLWV2ZW50JykgY2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKHRoaXMuZGVmYXVsdFZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdCh0aGlzLmRlZmF1bHRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzaG93SWNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRWYWx1ZSAhPT0gdGhpcy5nZXRJbnB1dFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICBhYnN0cmFjdCBnZXRJbnB1dFZhbHVlKCk6IHN0cmluZztcclxufVxyXG4iXX0=