import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean } from '../../decorators';
import { PoFieldModel } from './po-field.model';
import { requiredFailed } from './validators';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoFieldModel
 */
export class PoFieldValidateModel extends PoFieldModel {
    constructor() {
        super(...arguments);
        /**
         * @optional
         *
         * @description
         *
         * Define se a indicação de campo opcional será exibida.
         *
         * > Não será exibida a indicação se:
         * - O campo conter `p-required`;
         * - Não possuir `p-help` e/ou `p-label`.
         *
         * @default `false`
         */
        this.optional = false;
        /**
         * @optional
         *
         * @description
         *
         * Indica que o campo será obrigatório.
         *
         * @default `false`
         */
        this.required = false;
    }
    validate(abstractControl) {
        if (requiredFailed(this.required, this.disabled, abstractControl.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
        return this.extraValidation(abstractControl);
    }
    registerOnValidatorChange(fn) {
        this.onValidatorChange = fn;
    }
    validateModel() {
        if (this.onValidatorChange) {
            this.onValidatorChange();
        }
    }
}
PoFieldValidateModel.ɵfac = /*@__PURE__*/ function () { let ɵPoFieldValidateModel_BaseFactory; return function PoFieldValidateModel_Factory(t) { return (ɵPoFieldValidateModel_BaseFactory || (ɵPoFieldValidateModel_BaseFactory = i0.ɵɵgetInheritedFactory(PoFieldValidateModel)))(t || PoFieldValidateModel); }; }();
PoFieldValidateModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoFieldValidateModel, inputs: { optional: ["p-optional", "optional"], required: ["p-required", "required"] }, features: [i0.ɵɵInheritDefinitionFeature] });
__decorate([
    InputBoolean()
], PoFieldValidateModel.prototype, "optional", void 0);
__decorate([
    InputBoolean()
], PoFieldValidateModel.prototype, "required", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoFieldValidateModel, [{
        type: Directive
    }], null, { optional: [{
            type: Input,
            args: ['p-optional']
        }], required: [{
            type: Input,
            args: ['p-required']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZmllbGQtdmFsaWRhdGUubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tZmllbGQtdmFsaWRhdGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFOUM7O0dBRUc7QUFFSCxNQUFNLE9BQWdCLG9CQUF3QixTQUFRLFlBQWU7SUFEckU7O1FBRUU7Ozs7Ozs7Ozs7OztXQVlHO1FBQ2tDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFL0Q7Ozs7Ozs7O1dBUUc7UUFDa0MsYUFBUSxHQUFZLEtBQUssQ0FBQztLQTJCaEU7SUF2QkMsUUFBUSxDQUFDLGVBQWdDO1FBQ3ZDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkUsT0FBTztnQkFDTCxRQUFRLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7YUFDRixDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHlCQUF5QixDQUFDLEVBQU87UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7NFBBakRtQixvQkFBb0IsU0FBcEIsb0JBQW9CO3VFQUFwQixvQkFBb0I7QUFjSDtJQUFmLFlBQVksRUFBRTtzREFBMkI7QUFXMUI7SUFBZixZQUFZLEVBQUU7c0RBQTJCO3VGQXpCM0Msb0JBQW9CO2NBRHpDLFNBQVM7Z0JBZTZCLFFBQVE7a0JBQTVDLEtBQUs7bUJBQUMsWUFBWTtZQVdrQixRQUFRO2tCQUE1QyxLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IFBvRmllbGRNb2RlbCB9IGZyb20gJy4vcG8tZmllbGQubW9kZWwnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4vdmFsaWRhdG9ycyc7XHJcblxyXG4vKipcclxuICogQGRvY3NFeHRlbmRzIFBvRmllbGRNb2RlbFxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0ZpZWxkVmFsaWRhdGVNb2RlbDxUPiBleHRlbmRzIFBvRmllbGRNb2RlbDxUPiBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBhIGluZGljYcOnw6NvIGRlIGNhbXBvIG9wY2lvbmFsIHNlcsOhIGV4aWJpZGEuXHJcbiAgICpcclxuICAgKiA+IE7Do28gc2Vyw6EgZXhpYmlkYSBhIGluZGljYcOnw6NvIHNlOlxyXG4gICAqIC0gTyBjYW1wbyBjb250ZXIgYHAtcmVxdWlyZWRgO1xyXG4gICAqIC0gTsOjbyBwb3NzdWlyIGBwLWhlbHBgIGUvb3UgYHAtbGFiZWxgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcHRpb25hbCcpIEBJbnB1dEJvb2xlYW4oKSBvcHRpb25hbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIG9icmlnYXTDs3Jpby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcmVxdWlyZWQnKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvblZhbGlkYXRvckNoYW5nZTtcclxuXHJcbiAgdmFsaWRhdGUoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcclxuICAgIGlmIChyZXF1aXJlZEZhaWxlZCh0aGlzLnJlcXVpcmVkLCB0aGlzLmRpc2FibGVkLCBhYnN0cmFjdENvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5leHRyYVZhbGlkYXRpb24oYWJzdHJhY3RDb250cm9sKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVNb2RlbCgpIHtcclxuICAgIGlmICh0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGV4dHJhVmFsaWRhdGlvbihjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG59XHJcbiJdfQ==