import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean } from '../../decorators';
import * as i0 from "@angular/core";
export class PoFieldModel {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Indica se o campo será desabilitado.
         *
         * @default `false`
         */
        this.disabled = false;
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao alterar valor do campo.
         */
        this.change = new EventEmitter();
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
        this.onWriteValue(value);
    }
    emitChange(value) {
        this.change.emit(value);
    }
    updateModel(value) {
        if (this.propagateChange) {
            this.propagateChange(value);
        }
    }
}
PoFieldModel.ɵfac = function PoFieldModel_Factory(t) { return new (t || PoFieldModel)(); };
PoFieldModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoFieldModel, inputs: { label: ["p-label", "label"], name: "name", help: ["p-help", "help"], disabled: ["p-disabled", "disabled"] }, outputs: { change: "p-change" } });
__decorate([
    InputBoolean()
], PoFieldModel.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoFieldModel, [{
        type: Directive
    }], function () { return []; }, { label: [{
            type: Input,
            args: ['p-label']
        }], name: [{
            type: Input,
            args: ['name']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], change: [{
            type: Output,
            args: ['p-change']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZmllbGQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZmllbGQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdoRCxNQUFNLE9BQWdCLFlBQVk7SUFvQ2hDO1FBMUJBOzs7Ozs7OztXQVFHO1FBQ2tDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFL0Q7Ozs7OztXQU1HO1FBQ2lCLFdBQU0sR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQztJQVFyRCxDQUFDO0lBRWhCLDhDQUE4QztJQUM5QyxnRUFBZ0U7SUFDaEUsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFRO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVTLFdBQVcsQ0FBQyxLQUFRO1FBQzVCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7d0VBaEVtQixZQUFZOytEQUFaLFlBQVk7QUFtQks7SUFBZixZQUFZLEVBQUU7OENBQTJCO3VGQW5CM0MsWUFBWTtjQURqQyxTQUFTO3NDQUdVLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUdELElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQUdJLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQVdzQixRQUFRO2tCQUE1QyxLQUFLO21CQUFDLFlBQVk7WUFTQyxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0ZpZWxkTW9kZWw8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLyoqIFLDs3R1bG8gZXhpYmlkbyBwZWxvIGNvbXBvbmVudGUuICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIE5vbWUgZG8gY29tcG9uZW50ZS4gKi9cclxuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUZXh0byBkZSBhcG9pbyBwYXJhIG8gY2FtcG8uICovXHJcbiAgQElucHV0KCdwLWhlbHAnKSBoZWxwOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2Egc2UgbyBjYW1wbyBzZXLDoSBkZXNhYmlsaXRhZG8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpc2FibGVkJykgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGFsdGVyYXIgdmFsb3IgZG8gY2FtcG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgdmFsdWU6IFQ7XHJcblxyXG4gIHByb3RlY3RlZCBvblRvdWNoZWQ7XHJcblxyXG4gIHByaXZhdGUgcHJvcGFnYXRlQ2hhbmdlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLy8gRnVuw6fDo28gaW1wbGVtZW50YWRhIGRvIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gVXNhZGEgcGFyYSBpbnRlcmNlcHRhciBvcyBlc3RhZG9zIGRlIGhhYmlsaXRhZG8gdmlhIGZvcm1zIGFwaVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbldyaXRlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZW1pdENoYW5nZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlTW9kZWwodmFsdWU6IFQpIHtcclxuICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBvbldyaXRlVmFsdWUodmFsdWU6IFQpOiB2b2lkO1xyXG59XHJcbiJdfQ==