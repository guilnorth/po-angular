import { Component, EventEmitter, Input, Output } from '@angular/core';
import { browserLanguage, convertToBoolean, isTypeof } from './../../../utils/util';
import { poLocaleDefault } from './../../../services/po-language/po-language.constant';
import { PoStepperOrientation } from '../enums/po-stepper-orientation.enum';
import { PoStepperStatus } from '../enums/po-stepper-status.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-stepper-circle/po-stepper-circle.component";
import * as i3 from "../po-stepper-label/po-stepper-label.component";
const poStepperStepSizeDefault = 24;
const poStepperStepSizeMax = 64;
const poStepLiteralsDefault = {
    en: { label: 'Step' },
    es: { label: 'Paso' },
    pt: { label: 'Passo' }
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que representa um *step* contendo as ligações das laterais (`po-stepper-step-bar`) e a label.
 */
export class PoStepperStepComponent {
    constructor() {
        // Evento que será emitido quando o status do *step* estiver ativo (`PoStepperStatus.Active`).
        this.activated = new EventEmitter();
        // Evento que será emitido ao clicar no *step*.
        this.click = new EventEmitter();
        // Evento que será emitido ao focar no *step* e pressionar a tecla *enter*.
        this.enter = new EventEmitter();
        this.literals = {
            ...poStepLiteralsDefault[poLocaleDefault],
            ...poStepLiteralsDefault[browserLanguage()]
        };
        this._stepIcons = false;
        this._stepSize = poStepperStepSizeDefault;
    }
    // Label do *step*.
    set label(value) {
        this._label = isTypeof(value, 'string') ? value : `${this.literals.label} ${this.circleContent}`;
    }
    get label() {
        return this._label;
    }
    // Define o estado de exibição.
    set status(value) {
        this._status = value ? value : undefined;
        if (this.status === PoStepperStatus.Active) {
            this.activated.emit();
        }
    }
    get status() {
        return this._status;
    }
    set stepIcons(stepIcons) {
        this._stepIcons = convertToBoolean(stepIcons);
    }
    get stepIcons() {
        return this._stepIcons;
    }
    // Tamanho do `step` em *pixels*, possibilitando um maior destaque.
    // O valor informado deve ser entre `24` e `64`.
    set stepSize(value) {
        this._stepSize =
            value >= poStepperStepSizeDefault && value <= poStepperStepSizeMax ? value : poStepperStepSizeDefault;
    }
    get stepSize() {
        return this._stepSize;
    }
    get halfStepSize() {
        return this.stepSize / 2;
    }
    get isVerticalOrientation() {
        return this.orientation === PoStepperOrientation.Vertical;
    }
    get marginHorizontalBar() {
        return this.isVerticalOrientation ? undefined : this.halfStepSize;
    }
    getStatusClass(status) {
        switch (status) {
            case PoStepperStatus.Active:
                return 'po-stepper-step-default';
            case PoStepperStatus.Disabled:
                return 'po-stepper-step-disabled';
            case PoStepperStatus.Done:
                return 'po-stepper-step-default';
            case PoStepperStatus.Error:
                return 'po-stepper-step-error';
            default:
                return 'po-stepper-step-default';
        }
    }
    onClick() {
        if (this.status !== PoStepperStatus.Disabled) {
            this.click.emit();
        }
    }
    onEnter() {
        if (this.status !== PoStepperStatus.Disabled) {
            this.enter.emit();
        }
    }
}
PoStepperStepComponent.ɵfac = function PoStepperStepComponent_Factory(t) { return new (t || PoStepperStepComponent)(); };
PoStepperStepComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoStepperStepComponent, selectors: [["po-stepper-step"]], inputs: { circleContent: ["p-circle-content", "circleContent"], orientation: ["p-orientation", "orientation"], nextStatus: ["p-next-status", "nextStatus"], label: ["p-label", "label"], status: ["p-status", "status"], stepIcons: ["p-step-icons", "stepIcons"], stepSize: ["p-step-size", "stepSize"] }, outputs: { activated: "p-activated", click: "p-click", enter: "p-enter" }, decls: 6, vars: 24, consts: [[1, "po-stepper-step", 3, "ngClass", "click", "keydown.enter"], [1, "po-stepper-step-container"], [3, "p-content", "p-icons", "p-size", "p-status"], [1, "po-stepper-step-label-position", 3, "p-content"]], template: function PoStepperStepComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoStepperStepComponent_Template_div_click_0_listener() { return ctx.onClick(); })("keydown.enter", function PoStepperStepComponent_Template_div_keydown_enter_0_listener() { return ctx.onEnter(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "div")(3, "po-stepper-circle", 2)(4, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "po-stepper-label", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.getStatusClass(ctx.status));
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.isVerticalOrientation ? ctx.stepSize : undefined, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("margin-right", ctx.marginHorizontalBar, "px");
        i0.ɵɵclassProp("po-stepper-step-bar-top", ctx.isVerticalOrientation)("po-stepper-step-bar-left", !ctx.isVerticalOrientation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-content", ctx.circleContent)("p-icons", ctx.stepIcons)("p-size", ctx.stepSize)("p-status", ctx.status);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("margin-left", ctx.marginHorizontalBar, "px");
        i0.ɵɵclassProp("po-stepper-step-bar-bottom", ctx.isVerticalOrientation)("po-stepper-step-bar-right", !ctx.isVerticalOrientation)("po-stepper-step-dashed-border", ctx.nextStatus === "disabled" && !ctx.isVerticalOrientation)("po-stepper-step-dashed-border-vertical", ctx.nextStatus === "disabled" && ctx.isVerticalOrientation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-content", ctx.label);
    } }, dependencies: [i1.NgClass, i2.PoStepperCircleComponent, i3.PoStepperLabelComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStepperStepComponent, [{
        type: Component,
        args: [{ selector: 'po-stepper-step', template: "<div class=\"po-stepper-step\" [ngClass]=\"getStatusClass(status)\" (click)=\"onClick()\" (keydown.enter)=\"onEnter()\">\r\n  <div class=\"po-stepper-step-container\" [style.width.px]=\"isVerticalOrientation ? stepSize : undefined\">\r\n    <div\r\n      [class.po-stepper-step-bar-top]=\"isVerticalOrientation\"\r\n      [class.po-stepper-step-bar-left]=\"!isVerticalOrientation\"\r\n      [style.margin-right.px]=\"marginHorizontalBar\"\r\n    ></div>\r\n\r\n    <po-stepper-circle [p-content]=\"circleContent\" [p-icons]=\"stepIcons\" [p-size]=\"stepSize\" [p-status]=\"status\">\r\n    </po-stepper-circle>\r\n\r\n    <div\r\n      [class.po-stepper-step-bar-bottom]=\"isVerticalOrientation\"\r\n      [class.po-stepper-step-bar-right]=\"!isVerticalOrientation\"\r\n      [class.po-stepper-step-dashed-border]=\"nextStatus === 'disabled' && !isVerticalOrientation\"\r\n      [class.po-stepper-step-dashed-border-vertical]=\"nextStatus === 'disabled' && isVerticalOrientation\"\r\n      [style.margin-left.px]=\"marginHorizontalBar\"\r\n    ></div>\r\n  </div>\r\n\r\n  <po-stepper-label class=\"po-stepper-step-label-position\" [p-content]=\"label\"> </po-stepper-label>\r\n</div>\r\n" }]
    }], null, { circleContent: [{
            type: Input,
            args: ['p-circle-content']
        }], orientation: [{
            type: Input,
            args: ['p-orientation']
        }], nextStatus: [{
            type: Input,
            args: ['p-next-status']
        }], activated: [{
            type: Output,
            args: ['p-activated']
        }], click: [{
            type: Output,
            args: ['p-click']
        }], enter: [{
            type: Output,
            args: ['p-enter']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], status: [{
            type: Input,
            args: ['p-status']
        }], stepIcons: [{
            type: Input,
            args: ['p-step-icons']
        }], stepSize: [{
            type: Input,
            args: ['p-step-size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RlcHBlci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zdGVwcGVyL3BvLXN0ZXBwZXItc3RlcC9wby1zdGVwcGVyLXN0ZXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXN0ZXBwZXIvcG8tc3RlcHBlci1zdGVwL3BvLXN0ZXBwZXItc3RlcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFFbEUsTUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDcEMsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7QUFDaEMsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ3JCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDckIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtDQUN2QixDQUFDO0FBRUY7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQWNFLDhGQUE4RjtRQUN2RSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVB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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgYnJvd3Nlckxhbmd1YWdlLCBjb252ZXJ0VG9Cb29sZWFuLCBpc1R5cGVvZiB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IHBvTG9jYWxlRGVmYXVsdCB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBQb1N0ZXBwZXJPcmllbnRhdGlvbiB9IGZyb20gJy4uL2VudW1zL3BvLXN0ZXBwZXItb3JpZW50YXRpb24uZW51bSc7XHJcbmltcG9ydCB7IFBvU3RlcHBlclN0YXR1cyB9IGZyb20gJy4uL2VudW1zL3BvLXN0ZXBwZXItc3RhdHVzLmVudW0nO1xyXG5cclxuY29uc3QgcG9TdGVwcGVyU3RlcFNpemVEZWZhdWx0ID0gMjQ7XHJcbmNvbnN0IHBvU3RlcHBlclN0ZXBTaXplTWF4ID0gNjQ7XHJcbmNvbnN0IHBvU3RlcExpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogeyBsYWJlbDogJ1N0ZXAnIH0sXHJcbiAgZXM6IHsgbGFiZWw6ICdQYXNvJyB9LFxyXG4gIHB0OiB7IGxhYmVsOiAnUGFzc28nIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcXVlIHJlcHJlc2VudGEgdW0gKnN0ZXAqIGNvbnRlbmRvIGFzIGxpZ2HDp8O1ZXMgZGFzIGxhdGVyYWlzIChgcG8tc3RlcHBlci1zdGVwLWJhcmApIGUgYSBsYWJlbC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tc3RlcHBlci1zdGVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BvLXN0ZXBwZXItc3RlcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvU3RlcHBlclN0ZXBDb21wb25lbnQge1xyXG4gIC8vIENvbnRlw7pkbyBxdWUgc2Vyw6EgcmVwYXNzYWRvIHBhcmEgbyBjb21wb25lbnRlIGBwLWNpcmNsZS1jb250ZW50YCBhdHJhdsOpcyBkYSBwcm9wcmllZGFkZSBgcC1jb250ZW50YC5cclxuICBASW5wdXQoJ3AtY2lyY2xlLWNvbnRlbnQnKSBjaXJjbGVDb250ZW50OiBhbnk7XHJcblxyXG4gIC8vIERlZmluZSBhIG9yaWVudGHDp8OjbyBkZSBleGliacOnw6NvLlxyXG4gIEBJbnB1dCgncC1vcmllbnRhdGlvbicpIG9yaWVudGF0aW9uOiBQb1N0ZXBwZXJPcmllbnRhdGlvbjtcclxuXHJcbiAgLy8gSW5mb3JtYSBvIHN0YXR1cyBkYSBwcm94aW1hIGV0YXBhLlxyXG4gIEBJbnB1dCgncC1uZXh0LXN0YXR1cycpIG5leHRTdGF0dXM7XHJcblxyXG4gIC8vIEV2ZW50byBxdWUgc2Vyw6EgZW1pdGlkbyBxdWFuZG8gbyBzdGF0dXMgZG8gKnN0ZXAqIGVzdGl2ZXIgYXRpdm8gKGBQb1N0ZXBwZXJTdGF0dXMuQWN0aXZlYCkuXHJcbiAgQE91dHB1dCgncC1hY3RpdmF0ZWQnKSBhY3RpdmF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gRXZlbnRvIHF1ZSBzZXLDoSBlbWl0aWRvIGFvIGNsaWNhciBubyAqc3RlcCouXHJcbiAgQE91dHB1dCgncC1jbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIEV2ZW50byBxdWUgc2Vyw6EgZW1pdGlkbyBhbyBmb2NhciBubyAqc3RlcCogZSBwcmVzc2lvbmFyIGEgdGVjbGEgKmVudGVyKi5cclxuICBAT3V0cHV0KCdwLWVudGVyJykgZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcmVhZG9ubHkgbGl0ZXJhbHMgPSB7XHJcbiAgICAuLi5wb1N0ZXBMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgIC4uLnBvU3RlcExpdGVyYWxzRGVmYXVsdFticm93c2VyTGFuZ3VhZ2UoKV1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIF9sYWJlbDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3N0YXR1czogUG9TdGVwcGVyU3RhdHVzO1xyXG4gIHByaXZhdGUgX3N0ZXBJY29ucz86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdGVwU2l6ZTogbnVtYmVyID0gcG9TdGVwcGVyU3RlcFNpemVEZWZhdWx0O1xyXG5cclxuICAvLyBMYWJlbCBkbyAqc3RlcCouXHJcbiAgQElucHV0KCdwLWxhYmVsJykgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xhYmVsID0gaXNUeXBlb2YodmFsdWUsICdzdHJpbmcnKSA/IHZhbHVlIDogYCR7dGhpcy5saXRlcmFscy5sYWJlbH0gJHt0aGlzLmNpcmNsZUNvbnRlbnR9YDtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVmaW5lIG8gZXN0YWRvIGRlIGV4aWJpw6fDo28uXHJcbiAgQElucHV0KCdwLXN0YXR1cycpIHNldCBzdGF0dXModmFsdWU6IFBvU3RlcHBlclN0YXR1cykge1xyXG4gICAgdGhpcy5fc3RhdHVzID0gKHZhbHVlIGFzIHN0cmluZykgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5BY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWQuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXR1cygpOiBQb1N0ZXBwZXJTdGF0dXMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgncC1zdGVwLWljb25zJykgc2V0IHN0ZXBJY29ucyhzdGVwSWNvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3N0ZXBJY29ucyA9IGNvbnZlcnRUb0Jvb2xlYW4oc3RlcEljb25zKTtcclxuICB9XHJcblxyXG4gIGdldCBzdGVwSWNvbnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RlcEljb25zO1xyXG4gIH1cclxuXHJcbiAgLy8gVGFtYW5obyBkbyBgc3RlcGAgZW0gKnBpeGVscyosIHBvc3NpYmlsaXRhbmRvIHVtIG1haW9yIGRlc3RhcXVlLlxyXG4gIC8vIE8gdmFsb3IgaW5mb3JtYWRvIGRldmUgc2VyIGVudHJlIGAyNGAgZSBgNjRgLlxyXG4gIEBJbnB1dCgncC1zdGVwLXNpemUnKSBzZXQgc3RlcFNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc3RlcFNpemUgPVxyXG4gICAgICB2YWx1ZSA+PSBwb1N0ZXBwZXJTdGVwU2l6ZURlZmF1bHQgJiYgdmFsdWUgPD0gcG9TdGVwcGVyU3RlcFNpemVNYXggPyB2YWx1ZSA6IHBvU3RlcHBlclN0ZXBTaXplRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGdldCBzdGVwU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBTaXplO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhbGZTdGVwU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RlcFNpemUgLyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVmVydGljYWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSBQb1N0ZXBwZXJPcmllbnRhdGlvbi5WZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIGdldCBtYXJnaW5Ib3Jpem9udGFsQmFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZlcnRpY2FsT3JpZW50YXRpb24gPyB1bmRlZmluZWQgOiB0aGlzLmhhbGZTdGVwU2l6ZTtcclxuICB9XHJcblxyXG4gIGdldFN0YXR1c0NsYXNzKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgUG9TdGVwcGVyU3RhdHVzLkFjdGl2ZTpcclxuICAgICAgICByZXR1cm4gJ3BvLXN0ZXBwZXItc3RlcC1kZWZhdWx0JztcclxuICAgICAgY2FzZSBQb1N0ZXBwZXJTdGF0dXMuRGlzYWJsZWQ6XHJcbiAgICAgICAgcmV0dXJuICdwby1zdGVwcGVyLXN0ZXAtZGlzYWJsZWQnO1xyXG4gICAgICBjYXNlIFBvU3RlcHBlclN0YXR1cy5Eb25lOlxyXG4gICAgICAgIHJldHVybiAncG8tc3RlcHBlci1zdGVwLWRlZmF1bHQnO1xyXG4gICAgICBjYXNlIFBvU3RlcHBlclN0YXR1cy5FcnJvcjpcclxuICAgICAgICByZXR1cm4gJ3BvLXN0ZXBwZXItc3RlcC1lcnJvcic7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdwby1zdGVwcGVyLXN0ZXAtZGVmYXVsdCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzICE9PSBQb1N0ZXBwZXJTdGF0dXMuRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGljay5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzICE9PSBQb1N0ZXBwZXJTdGF0dXMuRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbnRlci5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1zdGVwcGVyLXN0ZXBcIiBbbmdDbGFzc109XCJnZXRTdGF0dXNDbGFzcyhzdGF0dXMpXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIChrZXlkb3duLmVudGVyKT1cIm9uRW50ZXIoKVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1zdGVwcGVyLXN0ZXAtY29udGFpbmVyXCIgW3N0eWxlLndpZHRoLnB4XT1cImlzVmVydGljYWxPcmllbnRhdGlvbiA/IHN0ZXBTaXplIDogdW5kZWZpbmVkXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIFtjbGFzcy5wby1zdGVwcGVyLXN0ZXAtYmFyLXRvcF09XCJpc1ZlcnRpY2FsT3JpZW50YXRpb25cIlxyXG4gICAgICBbY2xhc3MucG8tc3RlcHBlci1zdGVwLWJhci1sZWZ0XT1cIiFpc1ZlcnRpY2FsT3JpZW50YXRpb25cIlxyXG4gICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cIm1hcmdpbkhvcml6b250YWxCYXJcIlxyXG4gICAgPjwvZGl2PlxyXG5cclxuICAgIDxwby1zdGVwcGVyLWNpcmNsZSBbcC1jb250ZW50XT1cImNpcmNsZUNvbnRlbnRcIiBbcC1pY29uc109XCJzdGVwSWNvbnNcIiBbcC1zaXplXT1cInN0ZXBTaXplXCIgW3Atc3RhdHVzXT1cInN0YXR1c1wiPlxyXG4gICAgPC9wby1zdGVwcGVyLWNpcmNsZT5cclxuXHJcbiAgICA8ZGl2XHJcbiAgICAgIFtjbGFzcy5wby1zdGVwcGVyLXN0ZXAtYmFyLWJvdHRvbV09XCJpc1ZlcnRpY2FsT3JpZW50YXRpb25cIlxyXG4gICAgICBbY2xhc3MucG8tc3RlcHBlci1zdGVwLWJhci1yaWdodF09XCIhaXNWZXJ0aWNhbE9yaWVudGF0aW9uXCJcclxuICAgICAgW2NsYXNzLnBvLXN0ZXBwZXItc3RlcC1kYXNoZWQtYm9yZGVyXT1cIm5leHRTdGF0dXMgPT09ICdkaXNhYmxlZCcgJiYgIWlzVmVydGljYWxPcmllbnRhdGlvblwiXHJcbiAgICAgIFtjbGFzcy5wby1zdGVwcGVyLXN0ZXAtZGFzaGVkLWJvcmRlci12ZXJ0aWNhbF09XCJuZXh0U3RhdHVzID09PSAnZGlzYWJsZWQnICYmIGlzVmVydGljYWxPcmllbnRhdGlvblwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW4tbGVmdC5weF09XCJtYXJnaW5Ib3Jpem9udGFsQmFyXCJcclxuICAgID48L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHBvLXN0ZXBwZXItbGFiZWwgY2xhc3M9XCJwby1zdGVwcGVyLXN0ZXAtbGFiZWwtcG9zaXRpb25cIiBbcC1jb250ZW50XT1cImxhYmVsXCI+IDwvcG8tc3RlcHBlci1sYWJlbD5cclxuPC9kaXY+XHJcbiJdfQ==