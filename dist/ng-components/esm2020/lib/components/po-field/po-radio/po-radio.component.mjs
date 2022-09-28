import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '../../../decorators';
import { PoFieldModel } from '../po-field.model';
import { PoKeyCodeEnum } from './../../../enums/po-key-code.enum';
import { PoRadioSize } from './po-radio-size.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["radioLabel"];
function PoRadioComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.label);
} }
export class PoRadioComponent extends PoFieldModel {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
        this.value = false;
        this._size = PoRadioSize.Medium;
        /** Define o status do *radio* */
        this.checked = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho do *radio*
     * @default `medium`
     */
    set size(value) {
        this._size = Object.values(PoRadioSize).includes(value) ? value : PoRadioSize.Medium;
    }
    get size() {
        return this._size;
    }
    /**
     * Função que atribui foco ao *radio*.
     *
     * Para utilizá-la é necessário capturar a referência do componente no DOM através do `ViewChild`, como por exemplo:
     *
     * ```
     * import { ViewChild } from '@angular/core';
     * import { PoRadioComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoRadioComponent, { static: true }) radio: PoRadioComponent;
     *
     * focusRadio() {
     * this.radio.focus();
     * }
     * ```
     *
     */
    focus() {
        if (!this.disabled) {
            this.radioLabel.nativeElement.focus();
        }
    }
    onBlur() {
        this.onTouched?.();
    }
    onKeyDown(event) {
        if (event.which === PoKeyCodeEnum.space || event.keyCode === PoKeyCodeEnum.space) {
            this.eventClick();
        }
    }
    changeValue(value) {
        if (value) {
            this.value = value;
            this.updateModel(value);
            this.emitChange(this.value);
        }
    }
    eventClick() {
        if (!this.disabled) {
            this.changeValue(!this.value);
            this.changeDetector.detectChanges();
        }
    }
    onWriteValue(value) {
        if (value !== this.value) {
            this.value = !!value;
            this.changeDetector.markForCheck();
        }
    }
    focusIn() {
        this.radioLabel.nativeElement.setAttribute('focus', '');
    }
    focusOut() {
        this.radioLabel.nativeElement.removeAttribute('focus');
    }
}
PoRadioComponent.ɵfac = function PoRadioComponent_Factory(t) { return new (t || PoRadioComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoRadioComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRadioComponent, selectors: [["po-radio"]], viewQuery: function PoRadioComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.radioLabel = _t.first);
    } }, hostBindings: function PoRadioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focusin", function PoRadioComponent_focusin_HostBindingHandler($event) { return ctx.focusIn($event.target); })("focusout", function PoRadioComponent_focusout_HostBindingHandler($event) { return ctx.focusOut($event.target); });
    } }, inputs: { radioValue: ["p-value", "radioValue"], size: ["p-size", "size"], required: ["p-required", "required"], checked: ["p-checked", "checked"] }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoRadioComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 7, consts: [[1, "po-radio"], [3, "click", "keydown"], ["radioLabel", ""], ["type", "radio", 3, "checked", "disabled", "name", "required", "value"], [4, "ngIf"]], template: function PoRadioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "label", 1, 2);
        i0.ɵɵlistener("click", function PoRadioComponent_Template_label_click_1_listener() { return ctx.eventClick(); })("keydown", function PoRadioComponent_Template_label_keydown_1_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelement(3, "input", 3);
        i0.ɵɵtemplate(4, PoRadioComponent_span_4_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", (tmp_2_0 = ctx.name) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "po-input-radio")("required", ctx.required)("value", (tmp_4_0 = ctx.radioValue) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "");
        i0.ɵɵattribute("p-size", ctx.size);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
    } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], PoRadioComponent.prototype, "required", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRadioComponent, [{
        type: Component,
        args: [{ selector: 'po-radio', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoRadioComponent),
                        multi: true
                    }
                ], template: "<div class=\"po-radio\">\r\n  <label #radioLabel (click)=\"eventClick()\" (keydown)=\"onKeyDown($event)\">\r\n    <input\r\n      type=\"radio\"\r\n      [attr.p-size]=\"size\"\r\n      [checked]=\"checked\"\r\n      [disabled]=\"disabled\"\r\n      [name]=\"name ?? 'po-input-radio'\"\r\n      [required]=\"required\"\r\n      [value]=\"radioValue ?? ''\"\r\n    />\r\n    <span *ngIf=\"label\">{{ label }}</span>\r\n  </label>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { radioLabel: [{
            type: ViewChild,
            args: ['radioLabel', { static: true }]
        }], radioValue: [{
            type: Input,
            args: ['p-value']
        }], size: [{
            type: Input,
            args: ['p-size']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], checked: [{
            type: Input,
            args: ['p-checked']
        }], focusIn: [{
            type: HostListener,
            args: ['focusin', ['$event.target']]
        }], focusOut: [{
            type: HostListener,
            args: ['focusout', ['$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXJhZGlvL3BvLXJhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1yYWRpby9wby1yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUNML0MsNEJBQW9CO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLGtDQUFXOztBRG1CbkMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQXFCO0lBK0J6RCxZQUFvQixjQUFpQztRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQURVLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQTVCckQsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVOLFVBQUssR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQXVCaEQsaUNBQWlDO1FBQ2IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUk3QyxDQUFDO0lBdkJEOzs7Ozs7O09BT0c7SUFDSCxJQUFx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Qy9DLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO29FQUcwQyxVQUFVO2tCQUFwRCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFPdkIsVUFBVTtrQkFBM0IsS0FBSzttQkFBQyxTQUFTO1lBVUssSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRO1lBUXNCLFFBQVE7a0JBQTVDLEtBQUs7bUJBQUMsWUFBWTtZQUdDLE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQWlFbEIsT0FBTztrQkFETixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQU0xQyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgUG9GaWVsZE1vZGVsIH0gZnJvbSAnLi4vcG8tZmllbGQubW9kZWwnO1xyXG5pbXBvcnQgeyBQb0tleUNvZGVFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9lbnVtcy9wby1rZXktY29kZS5lbnVtJztcclxuXHJcbmltcG9ydCB7IFBvUmFkaW9TaXplIH0gZnJvbSAnLi9wby1yYWRpby1zaXplLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBvUmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUmFkaW9Db21wb25lbnQgZXh0ZW5kcyBQb0ZpZWxkTW9kZWw8Ym9vbGVhbj4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JhZGlvTGFiZWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSByYWRpb0xhYmVsOiBFbGVtZW50UmVmO1xyXG5cclxuICB2YWx1ZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9zaXplOiBQb1JhZGlvU2l6ZSA9IFBvUmFkaW9TaXplLk1lZGl1bTtcclxuXHJcbiAgLyoqIERlZmluZSBvIHZhbG9yIGRvICpyYWRpbyogKi9cclxuICBASW5wdXQoJ3AtdmFsdWUnKSByYWRpb1ZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyB0YW1hbmhvIGRvICpyYWRpbypcclxuICAgKiBAZGVmYXVsdCBgbWVkaXVtYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zaXplJykgc2V0IHNpemUodmFsdWU6IFBvUmFkaW9TaXplKSB7XHJcbiAgICB0aGlzLl9zaXplID0gT2JqZWN0LnZhbHVlcyhQb1JhZGlvU2l6ZSkuaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiBQb1JhZGlvU2l6ZS5NZWRpdW07XHJcbiAgfVxyXG5cclxuICBnZXQgc2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLXJlcXVpcmVkJykgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuICAvKiogRGVmaW5lIG8gc3RhdHVzIGRvICpyYWRpbyogKi9cclxuICBASW5wdXQoJ3AtY2hlY2tlZCcpIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBxdWUgYXRyaWJ1aSBmb2NvIGFvICpyYWRpbyouXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpesOhLWxhIMOpIG5lY2Vzc8OhcmlvIGNhcHR1cmFyIGEgcmVmZXLDqm5jaWEgZG8gY29tcG9uZW50ZSBubyBET00gYXRyYXbDqXMgZG8gYFZpZXdDaGlsZGAsIGNvbW8gcG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBpbXBvcnQgeyBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICAgKiBpbXBvcnQgeyBQb1JhZGlvQ29tcG9uZW50IH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiBAVmlld0NoaWxkKFBvUmFkaW9Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHJhZGlvOiBQb1JhZGlvQ29tcG9uZW50O1xyXG4gICAqXHJcbiAgICogZm9jdXNSYWRpbygpIHtcclxuICAgKiB0aGlzLnJhZGlvLmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICovXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5yYWRpb0xhYmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkPy4oKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBQb0tleUNvZGVFbnVtLnNwYWNlIHx8IGV2ZW50LmtleUNvZGUgPT09IFBvS2V5Q29kZUVudW0uc3BhY2UpIHtcclxuICAgICAgdGhpcy5ldmVudENsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlKTtcclxuICAgICAgdGhpcy5lbWl0Q2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRDbGljaygpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKCF0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbldyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAhIXZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzaW4nLCBbJyRldmVudC50YXJnZXQnXSlcclxuICBmb2N1c0luKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpb0xhYmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb2N1cycsICcnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgZm9jdXNPdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJhZGlvTGFiZWwubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1yYWRpb1wiPlxyXG4gIDxsYWJlbCAjcmFkaW9MYWJlbCAoY2xpY2spPVwiZXZlbnRDbGljaygpXCIgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICBbYXR0ci5wLXNpemVdPVwic2l6ZVwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbmFtZV09XCJuYW1lID8/ICdwby1pbnB1dC1yYWRpbydcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbdmFsdWVdPVwicmFkaW9WYWx1ZSA/PyAnJ1wiXHJcbiAgICAvPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcbjwvZGl2PlxyXG4iXX0=