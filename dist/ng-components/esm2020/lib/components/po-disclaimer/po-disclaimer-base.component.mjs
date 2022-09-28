import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import * as i0 from "@angular/core";
const PO_DISCLAIMER_TYPES = ['default', 'danger'];
const PO_DISCLAIMER_DEFAULT_TYPE = 'default';
/**
 * @docsPrivate
 *
 * @description
 *
 * O componente po-disclaimer é responsável por representar tags.
 * Seu uso é recomendado em buscas e em campos onde é necessário representar objetos selecionados,
 * como por exemplo, no po-multi-select.
 *
 */
export class PoDisclaimerBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao fechar o disclaimer.
         * Para este evento será passado como parâmetro um objeto com value, label e property.
         */
        this.closeAction = new EventEmitter();
        this.showDisclaimer = true;
        this._type = 'default';
        this._hideClose = false;
    }
    /**
     * @description
     *
     * Esta propriedade esconde o botão para fechamento do po-disclaimer, ao utilizar esta propriedade
     * sem passar valor a mesma é setada como false, onde o botão de fechamento está visível.
     *
     * @default false
     */
    set hideClose(value) {
        this._hideClose = value === '' ? true : convertToBoolean(value);
    }
    get hideClose() {
        return this._hideClose;
    }
    /**
     * @description
     *
     * Tipo do po-disclaimer. Pode ser 'default' ou 'danger'.
     *
     * @default default
     * @optional
     */
    set type(type) {
        this._type = PO_DISCLAIMER_TYPES.includes(type) ? type : PO_DISCLAIMER_DEFAULT_TYPE;
    }
    get type() {
        return this._type;
    }
    close() {
        this.showDisclaimer = false;
        this.closeAction.emit({ value: this.value, label: this.label, property: this.property });
    }
    getLabel() {
        return this.label ? this.label : this.value;
    }
}
PoDisclaimerBaseComponent.ɵfac = function PoDisclaimerBaseComponent_Factory(t) { return new (t || PoDisclaimerBaseComponent)(); };
PoDisclaimerBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDisclaimerBaseComponent, inputs: { label: ["p-label", "label"], value: ["p-value", "value"], property: ["p-property", "property"], hideClose: ["p-hide-close", "hideClose"], type: ["p-type", "type"] }, outputs: { closeAction: "p-close-action" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDisclaimerBaseComponent, [{
        type: Directive
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], property: [{
            type: Input,
            args: ['p-property']
        }], closeAction: [{
            type: Output,
            args: ['p-close-action']
        }], hideClose: [{
            type: Input,
            args: ['p-hide-close']
        }], type: [{
            type: Input,
            args: ['p-type']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlzY2xhaW1lci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1kaXNjbGFpbWVyL3BvLWRpc2NsYWltZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFcEQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNsRCxNQUFNLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztBQUU3Qzs7Ozs7Ozs7O0dBU0c7QUFFSCxNQUFNLE9BQU8seUJBQXlCO0lBRHRDO1FBY0U7Ozs7Ozs7V0FPRztRQUN1QixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRW5GLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRWQsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixlQUFVLEdBQWEsS0FBSyxDQUFDO0tBMEN0QztJQXhDQzs7Ozs7OztPQU9HO0lBQ0gsSUFBMkIsU0FBUyxDQUFDLEtBQWM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBUSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUFxQixJQUFJLENBQUMsSUFBWTtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztJQUN0RixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQzs7a0dBbkVVLHlCQUF5Qjs0RUFBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FEckMsU0FBUztnQkFNVSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHRSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFHSyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFVTyxXQUFXO2tCQUFwQyxNQUFNO21CQUFDLGdCQUFnQjtZQWVHLFNBQVM7a0JBQW5DLEtBQUs7bUJBQUMsY0FBYztZQWdCQSxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuY29uc3QgUE9fRElTQ0xBSU1FUl9UWVBFUyA9IFsnZGVmYXVsdCcsICdkYW5nZXInXTtcclxuY29uc3QgUE9fRElTQ0xBSU1FUl9ERUZBVUxUX1RZUEUgPSAnZGVmYXVsdCc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgcG8tZGlzY2xhaW1lciDDqSByZXNwb25zw6F2ZWwgcG9yIHJlcHJlc2VudGFyIHRhZ3MuXHJcbiAqIFNldSB1c28gw6kgcmVjb21lbmRhZG8gZW0gYnVzY2FzIGUgZW0gY2FtcG9zIG9uZGUgw6kgbmVjZXNzw6FyaW8gcmVwcmVzZW50YXIgb2JqZXRvcyBzZWxlY2lvbmFkb3MsXHJcbiAqIGNvbW8gcG9yIGV4ZW1wbG8sIG5vIHBvLW11bHRpLXNlbGVjdC5cclxuICpcclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9EaXNjbGFpbWVyQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogTGFiZWwgcXVlIGFwYXJlY2Vyw6EgZGVudHJvIGRvIHBvLWRpc2NsYWltZXIuXHJcbiAgICogUXVhbmRvIG7Do28gZm9yIGRlZmluaWRvIHVtIGxhYmVsIHNlcsOhIGFwcmVzZW50YWRhIGEgcHJvcHJpZWRhZGUgcC12YWx1ZS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqIFZhbG9yIGRvIHBvLWRpc2NsYWltZXIuICovXHJcbiAgQElucHV0KCdwLXZhbHVlJykgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgLyoqIE5vbWUgZGEgcHJvcHJpZWRhZGUgdmluY3VsYWRhIMOgIGVzdGUgcG8tZGlzY2xhaW1lci4gKi9cclxuICBASW5wdXQoJ3AtcHJvcGVydHknKSBwcm9wZXJ0eT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBkaXNwYXJhZG8gYW8gZmVjaGFyIG8gZGlzY2xhaW1lci5cclxuICAgKiBQYXJhIGVzdGUgZXZlbnRvIHNlcsOhIHBhc3NhZG8gY29tbyBwYXLDom1ldHJvIHVtIG9iamV0byBjb20gdmFsdWUsIGxhYmVsIGUgcHJvcGVydHkuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jbG9zZS1hY3Rpb24nKSBjbG9zZUFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgc2hvd0Rpc2NsYWltZXIgPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIF90eXBlOiBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcbiAgcHJpdmF0ZSBfaGlkZUNsb3NlPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEVzdGEgcHJvcHJpZWRhZGUgZXNjb25kZSBvIGJvdMOjbyBwYXJhIGZlY2hhbWVudG8gZG8gcG8tZGlzY2xhaW1lciwgYW8gdXRpbGl6YXIgZXN0YSBwcm9wcmllZGFkZVxyXG4gICAqIHNlbSBwYXNzYXIgdmFsb3IgYSBtZXNtYSDDqSBzZXRhZGEgY29tbyBmYWxzZSwgb25kZSBvIGJvdMOjbyBkZSBmZWNoYW1lbnRvIGVzdMOhIHZpc8OtdmVsLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaGlkZS1jbG9zZScpIHNldCBoaWRlQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVDbG9zZSA9IDxhbnk+dmFsdWUgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVDbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlQ2xvc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFRpcG8gZG8gcG8tZGlzY2xhaW1lci4gUG9kZSBzZXIgJ2RlZmF1bHQnIG91ICdkYW5nZXInLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZGVmYXVsdFxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10eXBlJykgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90eXBlID0gUE9fRElTQ0xBSU1FUl9UWVBFUy5pbmNsdWRlcyh0eXBlKSA/IHR5cGUgOiBQT19ESVNDTEFJTUVSX0RFRkFVTFRfVFlQRTtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93RGlzY2xhaW1lciA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZUFjdGlvbi5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUsIGxhYmVsOiB0aGlzLmxhYmVsLCBwcm9wZXJ0eTogdGhpcy5wcm9wZXJ0eSB9KTtcclxuICB9XHJcblxyXG4gIGdldExhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGFiZWwgPyB0aGlzLmxhYmVsIDogdGhpcy52YWx1ZTtcclxuICB9XHJcbn1cclxuIl19