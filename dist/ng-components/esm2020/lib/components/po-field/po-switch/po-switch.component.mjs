import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PoFieldModel } from '../po-field.model';
import { PoKeyCodeEnum } from './../../../enums/po-key-code.enum';
import { PoSwitchLabelPosition } from './po-switch-label-position.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-field-container/po-field-container-bottom/po-field-container-bottom.component";
import * as i3 from "../po-field-container/po-field-container.component";
import * as i4 from "../../po-icon/po-icon.component";
const _c0 = ["switchContainer"];
function PoSwitchComponent_po_icon_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-icon", 9);
} }
/**
 * @docsExtends PoFieldModel
 *
 * @description
 *
 * O componente `po-switch` é um [checkbox](/documentation/po-checkbox-group) mais intuitivo, pois faz analogia a um interruptor.
 * Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade específica.
 *
 * Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.
 *
 * O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
 * portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreensão do usuário.
 *
 * > O componente não altera o valor incial informado no *model*, portanto indica-se inicializa-lo caso ter necessidade.
 *
 * #### Boas práticas
 *
 * - Evite `labels` extensos que quebram o layout do `po-switch`, use `labels` diretos, curtos e intuitivos.
 *
 * #### Acessibilidade tratada no componente
 *
 * Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:
 *
 * - Quando em foco, o switch é ativado usando a tecla de Espaço. [W3C WAI-ARIA 3.5 Switch - Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19)
 * - A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. [WCAG 2.4.12: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced)
 *
 * @example
 *
 * <example name="po-switch-basic" title="PO Switch Basic">
 *   <file name="sample-po-switch-basic/sample-po-switch-basic.component.html"> </file>
 *   <file name="sample-po-switch-basic/sample-po-switch-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-switch-labs" title="PO Switch Labs">
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.html"> </file>
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.ts"> </file>
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.e2e-spec.ts"> </file>
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-switch-order" title="PO Switch - Order Summary">
 *   <file name="sample-po-switch-order/sample-po-switch-order.component.html"> </file>
 *   <file name="sample-po-switch-order/sample-po-switch-order.component.ts"> </file>
 * </example>
 *
 * <example name="po-switch-order-reactive-form" title="PO Switch - Order Summary Reactive Form">
 *   <file name="sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"> </file>
 *   <file name="sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"> </file>
 * </example>
 */
export class PoSwitchComponent extends PoFieldModel {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
        this.value = false;
        this._labelOff = 'false';
        this._labelOn = 'true';
        this._labelPosition = PoSwitchLabelPosition.Right;
    }
    /**
     * @optional
     *
     * @description
     *
     * Posição de exibição do rótulo.
     *
     * > Por padrão exibe à direita.
     */
    set labelPosition(position) {
        this._labelPosition = position in PoSwitchLabelPosition ? parseInt(position, 10) : PoSwitchLabelPosition.Right;
    }
    get labelPosition() {
        return this._labelPosition;
    }
    /**
     * Texto exibido quando o valor do componente for `false`.
     *
     * @default `false`
     */
    set labelOff(label) {
        this._labelOff = label || 'false';
    }
    get labelOff() {
        return this._labelOff;
    }
    /**
     * Texto exibido quando o valor do componente for `true`.
     *
     * @default `true`
     */
    set labelOn(label) {
        this._labelOn = label || 'true';
    }
    get labelOn() {
        return this._labelOn;
    }
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoSwitchComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;
     *
     * focusSwitch() {
     *   this.switch.focus();
     * }
     * ```
     */
    focus() {
        if (!this.disabled) {
            this.switchContainer.nativeElement.focus();
        }
    }
    onBlur() {
        this.onTouched?.();
    }
    getLabelPosition() {
        switch (this.labelPosition) {
            case PoSwitchLabelPosition.Left:
                return 'left';
            case PoSwitchLabelPosition.Right:
                return 'right';
            default:
                return 'right';
        }
    }
    onKeyDown(event) {
        if (event.which === PoKeyCodeEnum.space || event.keyCode === PoKeyCodeEnum.space) {
            event.preventDefault();
            this.eventClick();
        }
    }
    changeValue(value) {
        if (this.value !== value) {
            this.value = value;
            this.updateModel(value);
            this.emitChange(this.value);
        }
    }
    eventClick() {
        if (!this.disabled) {
            this.changeValue(!this.value);
        }
    }
    onWriteValue(value) {
        if (value !== this.value) {
            this.value = !!value;
            this.changeDetector.markForCheck();
        }
    }
}
PoSwitchComponent.ɵfac = function PoSwitchComponent_Factory(t) { return new (t || PoSwitchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoSwitchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoSwitchComponent, selectors: [["po-switch"]], viewQuery: function PoSwitchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.switchContainer = _t.first);
    } }, inputs: { labelPosition: ["p-label-position", "labelPosition"], labelOff: ["p-label-off", "labelOff"], labelOn: ["p-label-on", "labelOn"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoSwitchComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 10, consts: [[3, "p-label", "p-help"], [1, "po-field-container-content"], [1, "po-switch"], ["role", "switch", 1, "po-switch-container", 3, "tabindex", "blur", "click", "keydown"], ["switchContainer", ""], [1, "po-switch-track"], [1, "po-switch-toggle"], ["class", "po-switch-icon", "p-icon", "po-icon-ok", 4, "ngIf"], [1, "po-switch-label", 3, "click"], ["p-icon", "po-icon-ok", 1, "po-switch-icon"]], template: function PoSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3, 4);
        i0.ɵɵlistener("blur", function PoSwitchComponent_Template_div_blur_3_listener() { return ctx.onBlur(); })("click", function PoSwitchComponent_Template_div_click_3_listener() { return ctx.eventClick(); })("keydown", function PoSwitchComponent_Template_div_keydown_3_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementStart(5, "div", 5)(6, "div", 6);
        i0.ɵɵtemplate(7, PoSwitchComponent_po_icon_7_Template, 1, 0, "po-icon", 7);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "span", 8);
        i0.ɵɵlistener("click", function PoSwitchComponent_Template_span_click_8_listener() { return ctx.eventClick(); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(10, "po-field-container-bottom");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("name", ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-label-position", ctx.getLabelPosition());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("tabindex", ctx.disabled ? -1 : 0);
        i0.ɵɵattribute("aria-checked", ctx.value)("aria-disabled", ctx.disabled)("aria-label", ctx.value === true ? ctx.labelOn : ctx.labelOff);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.value === true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.value === true ? ctx.labelOn : ctx.labelOff, " ");
    } }, dependencies: [i1.NgIf, i2.PoFieldContainerBottomComponent, i3.PoFieldContainerComponent, i4.PoIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSwitchComponent, [{
        type: Component,
        args: [{ selector: 'po-switch', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoSwitchComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\">\r\n  <div class=\"po-field-container-content\" [attr.name]=\"name\">\r\n    <div class=\"po-switch\" [attr.data-label-position]=\"getLabelPosition()\">\r\n      <div\r\n        #switchContainer\r\n        class=\"po-switch-container\"\r\n        role=\"switch\"\r\n        [attr.aria-checked]=\"value\"\r\n        [attr.aria-disabled]=\"disabled\"\r\n        [attr.aria-label]=\"value === true ? labelOn : labelOff\"\r\n        [tabindex]=\"disabled ? -1 : 0\"\r\n        (blur)=\"onBlur()\"\r\n        (click)=\"eventClick()\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n      >\r\n        <div class=\"po-switch-track\">\r\n          <div class=\"po-switch-toggle\">\r\n            <po-icon *ngIf=\"value === true\" class=\"po-switch-icon\" p-icon=\"po-icon-ok\"></po-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <span class=\"po-switch-label\" (click)=\"eventClick()\">\r\n        {{ value === true ? labelOn : labelOff }}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <po-field-container-bottom></po-field-container-bottom>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { switchContainer: [{
            type: ViewChild,
            args: ['switchContainer', { static: true }]
        }], labelPosition: [{
            type: Input,
            args: ['p-label-position']
        }], labelOff: [{
            type: Input,
            args: ['p-label-off']
        }], labelOn: [{
            type: Input,
            args: ['p-label-on']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1zd2l0Y2gvcG8tc3dpdGNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1zd2l0Y2gvcG8tc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7O0lDRzVELDZCQUFxRjs7QUREakc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpREc7QUFhSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBcUI7SUFvRDFELFlBQW9CLGNBQWlDO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRFUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBakRyRCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRU4sY0FBUyxHQUFXLE9BQU8sQ0FBQztRQUM1QixhQUFRLEdBQVcsTUFBTSxDQUFDO1FBQzFCLG1CQUFjLEdBQTBCLHFCQUFxQixDQUFDLEtBQUssQ0FBQztJQStDNUUsQ0FBQztJQTdDRDs7Ozs7Ozs7T0FRRztJQUNILElBQStCLGFBQWEsQ0FBQyxR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OEJBQTZCLGFBQUE7UUFFekIsMEVBQXFGO1FBQ3ZGLGlCQUFNLEVBQUEsRUFBQTtRQUlWLCtCQUFxRDtRQUF2Qiw0RkFBUyxnQkFBWSxJQUFDO1FBQ2xELFlBQ0Y7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFJWCw2Q0FBdUQ7UUFDekQsaUJBQXFCOztRQTdCRCxtQ0FBaUIsb0JBQUE7UUFDSyxlQUFrQjtRQUFsQixnQ0FBa0I7UUFDakMsZUFBK0M7UUFBL0MsNkRBQStDO1FBUWxFLGVBQThCO1FBQTlCLGdEQUE4QjtRQUg5Qix5Q0FBMkIsK0JBQUEsK0RBQUE7UUFVYixlQUFvQjtRQUFwQix5Q0FBb0I7UUFNbEMsZUFDRjtRQURFLGdGQUNGOzt1RkRzRE8saUJBQWlCO2NBWjdCLFNBQVM7MkJBQ0UsV0FBVyxtQkFFSix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtvRUFHK0MsZUFBZTtrQkFBOUQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFpQmYsYUFBYTtrQkFBM0MsS0FBSzttQkFBQyxrQkFBa0I7WUFhQyxRQUFRO2tCQUFqQyxLQUFLO21CQUFDLGFBQWE7WUFhSyxPQUFPO2tCQUEvQixLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUG9GaWVsZE1vZGVsIH0gZnJvbSAnLi4vcG8tZmllbGQubW9kZWwnO1xyXG5pbXBvcnQgeyBQb0tleUNvZGVFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9lbnVtcy9wby1rZXktY29kZS5lbnVtJztcclxuXHJcbmltcG9ydCB7IFBvU3dpdGNoTGFiZWxQb3NpdGlvbiB9IGZyb20gJy4vcG8tc3dpdGNoLWxhYmVsLXBvc2l0aW9uLmVudW0nO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzRXh0ZW5kcyBQb0ZpZWxkTW9kZWxcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tc3dpdGNoYCDDqSB1bSBbY2hlY2tib3hdKC9kb2N1bWVudGF0aW9uL3BvLWNoZWNrYm94LWdyb3VwKSBtYWlzIGludHVpdGl2bywgcG9pcyBmYXogYW5hbG9naWEgYSB1bSBpbnRlcnJ1cHRvci5cclxuICogRGV2ZSBzZXIgdXNhZG8gcXVhbmRvIGRlc2VqYS1zZSB0cmFuc21pdGlyIGEgaWRlaWEgZGUgbGlnYXIgLyBkZXNsaWdhciB1bWEgZnVuY2lvbmFsaWRhZGUgZXNwZWPDrWZpY2EuXHJcbiAqXHJcbiAqIFBvZGUtc2UgbGlnYXIgb3UgZGVzbGlnYXIgbyBzd2l0Y2ggdXRpbGl6YW5kbyBhIHRlY2xhIGRlIGVzcGHDp28gb3UgbyBjbGlxdWUgZG8gbW91c2UuXHJcbiAqXHJcbiAqIE8gdGV4dG8gZXhpYmlkbyBwb2RlIHNlciBhbHRlcmFkbyBkZSBhY29yZG8gY29tIG8gdmFsb3Igc2V0YWRvIGF1bWVudGFuZG8gYXMgcG9zc2liaWxpZGFkZXMgZGUgdXNvIGRvIGNvbXBvbmVudGUsXHJcbiAqIHBvcnRhbnRvLCByZWNvbWVuZGEtc2UgaW5mb3JtYXIgdGV4dG9zIHF1ZSBjb250ZXh0dWFsaXplbSBzZXUgdXNvIHBhcmEgcXVlIGZhY2lsaXRlIGEgY29tcHJlZW5zw6NvIGRvIHVzdcOhcmlvLlxyXG4gKlxyXG4gKiA+IE8gY29tcG9uZW50ZSBuw6NvIGFsdGVyYSBvIHZhbG9yIGluY2lhbCBpbmZvcm1hZG8gbm8gKm1vZGVsKiwgcG9ydGFudG8gaW5kaWNhLXNlIGluaWNpYWxpemEtbG8gY2FzbyB0ZXIgbmVjZXNzaWRhZGUuXHJcbiAqXHJcbiAqICMjIyMgQm9hcyBwcsOhdGljYXNcclxuICpcclxuICogLSBFdml0ZSBgbGFiZWxzYCBleHRlbnNvcyBxdWUgcXVlYnJhbSBvIGxheW91dCBkbyBgcG8tc3dpdGNoYCwgdXNlIGBsYWJlbHNgIGRpcmV0b3MsIGN1cnRvcyBlIGludHVpdGl2b3MuXHJcbiAqXHJcbiAqICMjIyMgQWNlc3NpYmlsaWRhZGUgdHJhdGFkYSBubyBjb21wb25lbnRlXHJcbiAqXHJcbiAqIEFsZ3VtYXMgZGlyZXRyaXplcyBkZSBhY2Vzc2liaWxpZGFkZSBqw6Egc8OjbyB0cmF0YWRhcyBubyBjb21wb25lbnRlLCBpbnRlcm5hbWVudGUsIGUgbsOjbyBwb2RlbSBzZXIgYWx0ZXJhZGFzIHBlbG8gcHJvcHJpZXTDoXJpbyBkbyBjb250ZcO6ZG8uIFPDo28gZWxhczpcclxuICpcclxuICogLSBRdWFuZG8gZW0gZm9jbywgbyBzd2l0Y2ggw6kgYXRpdmFkbyB1c2FuZG8gYSB0ZWNsYSBkZSBFc3Bhw6dvLiBbVzNDIFdBSS1BUklBIDMuNSBTd2l0Y2ggLSBLZXlib2FyZCBJbnRlcmFjdGlvbl0oaHR0cHM6Ly93d3cudzMub3JnL1dBSS9BUklBL2FwZy9wYXR0ZXJucy9zd2l0Y2gvI2tleWJvYXJkLWludGVyYWN0aW9uLTE5KVxyXG4gKiAtIEEgw6FyZWEgZG8gZm9jbyBwcmVjaXNhciB0ZXIgdW1hIGVzcGVzc3VyYSBkZSBwZWxvIG1lbm9zIDIgcGl4ZWxzIENTUyBlIG8gZm9jbyBuw6NvIHBvZGUgZmljYXIgZXNjb25kaWRvIHBvciBvdXRyb3MgZWxlbWVudG9zIGRhIHRlbGEuIFtXQ0FHIDIuNC4xMjogRm9jdXMgQXBwZWFyYW5jZV0oaHR0cHM6Ly93d3cudzMub3JnL1dBSS9XQ0FHMjIvVW5kZXJzdGFuZGluZy9mb2N1cy1hcHBlYXJhbmNlLWVuaGFuY2VkKVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tc3dpdGNoLWJhc2ljXCIgdGl0bGU9XCJQTyBTd2l0Y2ggQmFzaWNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN3aXRjaC1iYXNpYy9zYW1wbGUtcG8tc3dpdGNoLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN3aXRjaC1iYXNpYy9zYW1wbGUtcG8tc3dpdGNoLWJhc2ljLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXN3aXRjaC1sYWJzXCIgdGl0bGU9XCJQTyBTd2l0Y2ggTGFic1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc3dpdGNoLWxhYnMvc2FtcGxlLXBvLXN3aXRjaC1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXN3aXRjaC1sYWJzL3NhbXBsZS1wby1zd2l0Y2gtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc3dpdGNoLWxhYnMvc2FtcGxlLXBvLXN3aXRjaC1sYWJzLmNvbXBvbmVudC5lMmUtc3BlYy50c1wiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zd2l0Y2gtbGFicy9zYW1wbGUtcG8tc3dpdGNoLWxhYnMuY29tcG9uZW50LnBvLnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tc3dpdGNoLW9yZGVyXCIgdGl0bGU9XCJQTyBTd2l0Y2ggLSBPcmRlciBTdW1tYXJ5XCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zd2l0Y2gtb3JkZXIvc2FtcGxlLXBvLXN3aXRjaC1vcmRlci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zd2l0Y2gtb3JkZXIvc2FtcGxlLXBvLXN3aXRjaC1vcmRlci5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1zd2l0Y2gtb3JkZXItcmVhY3RpdmUtZm9ybVwiIHRpdGxlPVwiUE8gU3dpdGNoIC0gT3JkZXIgU3VtbWFyeSBSZWFjdGl2ZSBGb3JtXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1zd2l0Y2gtb3JkZXItcmVhY3RpdmUtZm9ybS9zYW1wbGUtcG8tc3dpdGNoLW9yZGVyLXJlYWN0aXZlLWZvcm0uY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tc3dpdGNoLW9yZGVyLXJlYWN0aXZlLWZvcm0vc2FtcGxlLXBvLXN3aXRjaC1vcmRlci1yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tc3dpdGNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvU3dpdGNoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1N3aXRjaENvbXBvbmVudCBleHRlbmRzIFBvRmllbGRNb2RlbDxib29sZWFuPiB7XHJcbiAgQFZpZXdDaGlsZCgnc3dpdGNoQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgc3dpdGNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICB2YWx1ZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9sYWJlbE9mZjogc3RyaW5nID0gJ2ZhbHNlJztcclxuICBwcml2YXRlIF9sYWJlbE9uOiBzdHJpbmcgPSAndHJ1ZSc7XHJcbiAgcHJpdmF0ZSBfbGFiZWxQb3NpdGlvbjogUG9Td2l0Y2hMYWJlbFBvc2l0aW9uID0gUG9Td2l0Y2hMYWJlbFBvc2l0aW9uLlJpZ2h0O1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUG9zacOnw6NvIGRlIGV4aWJpw6fDo28gZG8gcsOzdHVsby5cclxuICAgKlxyXG4gICAqID4gUG9yIHBhZHLDo28gZXhpYmUgw6AgZGlyZWl0YS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGFiZWwtcG9zaXRpb24nKSBzZXQgbGFiZWxQb3NpdGlvbihwb3NpdGlvbjogUG9Td2l0Y2hMYWJlbFBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLl9sYWJlbFBvc2l0aW9uID0gcG9zaXRpb24gaW4gUG9Td2l0Y2hMYWJlbFBvc2l0aW9uID8gcGFyc2VJbnQoPGFueT5wb3NpdGlvbiwgMTApIDogUG9Td2l0Y2hMYWJlbFBvc2l0aW9uLlJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRleHRvIGV4aWJpZG8gcXVhbmRvIG8gdmFsb3IgZG8gY29tcG9uZW50ZSBmb3IgYGZhbHNlYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGFiZWwtb2ZmJykgc2V0IGxhYmVsT2ZmKGxhYmVsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xhYmVsT2ZmID0gbGFiZWwgfHwgJ2ZhbHNlJztcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbE9mZigpIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbE9mZjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRleHRvIGV4aWJpZG8gcXVhbmRvIG8gdmFsb3IgZG8gY29tcG9uZW50ZSBmb3IgYHRydWVgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYHRydWVgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxhYmVsLW9uJykgc2V0IGxhYmVsT24obGFiZWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbGFiZWxPbiA9IGxhYmVsIHx8ICd0cnVlJztcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbE9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsT247XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBhdHJpYnVpIGZvY28gYW8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gdGVyIGEgaW5zdMOibmNpYSBkbyBjb21wb25lbnRlIG5vIERPTSwgcG9kZW5kbyBzZXIgdXRpbGl6YWRvIG8gVmlld0NoaWxkIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaW1wb3J0IHsgUG9Td2l0Y2hDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9Td2l0Y2hDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHN3aXRjaDogUG9Td2l0Y2hDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c1N3aXRjaCgpIHtcclxuICAgKiAgIHRoaXMuc3dpdGNoLmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkPy4oKTtcclxuICB9XHJcblxyXG4gIGdldExhYmVsUG9zaXRpb24oKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMubGFiZWxQb3NpdGlvbikge1xyXG4gICAgICBjYXNlIFBvU3dpdGNoTGFiZWxQb3NpdGlvbi5MZWZ0OlxyXG4gICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICAgIGNhc2UgUG9Td2l0Y2hMYWJlbFBvc2l0aW9uLlJpZ2h0OlxyXG4gICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IFBvS2V5Q29kZUVudW0uc3BhY2UgfHwgZXZlbnQua2V5Q29kZSA9PT0gUG9LZXlDb2RlRW51bS5zcGFjZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmV2ZW50Q2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xyXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudENsaWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUoIXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Xcml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gISF2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxwby1maWVsZC1jb250YWluZXIgW3AtbGFiZWxdPVwibGFiZWxcIiBbcC1oZWxwXT1cImhlbHBcIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tZmllbGQtY29udGFpbmVyLWNvbnRlbnRcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1zd2l0Y2hcIiBbYXR0ci5kYXRhLWxhYmVsLXBvc2l0aW9uXT1cImdldExhYmVsUG9zaXRpb24oKVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgI3N3aXRjaENvbnRhaW5lclxyXG4gICAgICAgIGNsYXNzPVwicG8tc3dpdGNoLWNvbnRhaW5lclwiXHJcbiAgICAgICAgcm9sZT1cInN3aXRjaFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cInZhbHVlXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInZhbHVlID09PSB0cnVlID8gbGFiZWxPbiA6IGxhYmVsT2ZmXCJcclxuICAgICAgICBbdGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IDBcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcclxuICAgICAgICAoY2xpY2spPVwiZXZlbnRDbGljaygpXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG8tc3dpdGNoLXRyYWNrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG8tc3dpdGNoLXRvZ2dsZVwiPlxyXG4gICAgICAgICAgICA8cG8taWNvbiAqbmdJZj1cInZhbHVlID09PSB0cnVlXCIgY2xhc3M9XCJwby1zd2l0Y2gtaWNvblwiIHAtaWNvbj1cInBvLWljb24tb2tcIj48L3BvLWljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBvLXN3aXRjaC1sYWJlbFwiIChjbGljayk9XCJldmVudENsaWNrKClcIj5cclxuICAgICAgICB7eyB2YWx1ZSA9PT0gdHJ1ZSA/IGxhYmVsT24gOiBsYWJlbE9mZiB9fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLWZpZWxkLWNvbnRhaW5lci1ib3R0b20+PC9wby1maWVsZC1jb250YWluZXItYm90dG9tPlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19