import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { isTypeof } from '../../../../utils/util';
import * as i0 from "@angular/core";
const _c0 = ["inputElement"];
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente de pesquisa que será criado dentro do dropdown do `po-multiselect`.
 */
export class PoMultiselectSearchComponent {
    constructor(cd) {
        this.cd = cd;
        /** Evento que será disparado a cada tecla digitada no campo de busca. */
        this.change = new EventEmitter();
    }
    /**
     * @optional
     *
     * @description
     *
     * Placeholder do campo de pesquisa.
     *
     * > Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).
     *
     * @default `Buscar`
     */
    set placeholder(placeholder) {
        this._placeholder = placeholder && isTypeof(placeholder, 'string') ? placeholder : this.literals.placeholderSearch;
    }
    get placeholder() {
        return this._placeholder || this.literals.placeholderSearch;
    }
    get inputValue() {
        return this.inputElement.nativeElement.value;
    }
    onChange(event) {
        this.change.emit({ event: event, [this.fieldValue]: this.inputElement.nativeElement.value });
    }
    setFocus() {
        this.inputElement.nativeElement.focus();
    }
    clean() {
        this.inputElement.nativeElement.value = '';
        this.cd.markForCheck();
    }
}
PoMultiselectSearchComponent.ɵfac = function PoMultiselectSearchComponent_Factory(t) { return new (t || PoMultiselectSearchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoMultiselectSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMultiselectSearchComponent, selectors: [["po-multiselect-search"]], viewQuery: function PoMultiselectSearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { literals: ["p-literals", "literals"], fieldValue: ["p-field-value", "fieldValue"], placeholder: ["p-placeholder", "placeholder"] }, outputs: { change: "p-change" }, decls: 5, vars: 1, consts: [[1, "po-field-container-content", "po-multiselect-container-search"], [1, "po-field-icon-container-left"], [1, "po-icon", "po-icon-search", "po-field-icon", "po-icon-input"], ["type", "text", 1, "po-input", "po-input-icon-left", "po-multiselect-search-input", 3, "placeholder", "keyup"], ["inputElement", ""]], template: function PoMultiselectSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("keyup", function PoMultiselectSearchComponent_Template_input_keyup_3_listener($event) { return ctx.onChange($event); });
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("placeholder", ctx.placeholder);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMultiselectSearchComponent, [{
        type: Component,
        args: [{ selector: 'po-multiselect-search', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-field-container-content po-multiselect-container-search\">\r\n  <div class=\"po-field-icon-container-left\">\r\n    <span class=\"po-icon po-icon-search po-field-icon po-icon-input\"></span>\r\n  </div>\r\n\r\n  <input\r\n    #inputElement\r\n    class=\"po-input po-input-icon-left po-multiselect-search-input\"\r\n    type=\"text\"\r\n    [placeholder]=\"placeholder\"\r\n    (keyup)=\"onChange($event)\"\r\n  />\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { read: ElementRef, static: true }]
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1tdWx0aXNlbGVjdC9wby1tdWx0aXNlbGVjdC1zZWFyY2gvcG8tbXVsdGlzZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1tdWx0aXNlbGVjdC9wby1tdWx0aXNlbGVjdC1zZWFyY2gvcG8tbXVsdGlzZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFJbEQ7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLDRCQUE0QjtJQWF2QyxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUx6Qyx5RUFBeUU7UUFDckQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJSixDQUFDO0lBRTdDOzs7Ozs7Ozs7O09BVUc7SUFDSCxJQUE0QixXQUFXLENBQUMsV0FBbUI7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO0lBQ3JILENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5RCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzt3R0FqRFUsNEJBQTRCOytFQUE1Qiw0QkFBNEI7K0JBQ0osVUFBVTs7Ozs7UUM1Qi9DLDhCQUF3RSxhQUFBO1FBRXBFLDBCQUF3RTtRQUMxRSxpQkFBTTtRQUVOLG1DQU1FO1FBREEsOEdBQVMsb0JBQWdCLElBQUM7UUFMNUIsaUJBTUUsRUFBQTs7UUFGQSxlQUEyQjtRQUEzQiw2Q0FBMkI7O3VGRGtCbEIsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UsdUJBQXVCLG1CQUVoQix1QkFBdUIsQ0FBQyxNQUFNO29FQUdnQixZQUFZO2tCQUExRSxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUd4QyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFSyxVQUFVO2tCQUFqQyxLQUFLO21CQUFDLGVBQWU7WUFHRixNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUFpQlUsV0FBVztrQkFBdEMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNUeXBlb2YgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvTXVsdGlzZWxlY3RMaXRlcmFscyB9IGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgZGUgcGVzcXVpc2EgcXVlIHNlcsOhIGNyaWFkbyBkZW50cm8gZG8gZHJvcGRvd24gZG8gYHBvLW11bHRpc2VsZWN0YC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbXVsdGlzZWxlY3Qtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbXVsdGlzZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9NdWx0aXNlbGVjdFNlYXJjaENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogUHJvcHJpZWRhZGUgcXVlIHJlY2ViZSBhcyBsaXRlcmFpcyBkZWZpbmlkYXMgbm8gYHBvLW11bHRpc2VsZWN0YC4gKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBsaXRlcmFscz86IFBvTXVsdGlzZWxlY3RMaXRlcmFscztcclxuXHJcbiAgQElucHV0KCdwLWZpZWxkLXZhbHVlJykgZmllbGRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAvKiogRXZlbnRvIHF1ZSBzZXLDoSBkaXNwYXJhZG8gYSBjYWRhIHRlY2xhIGRpZ2l0YWRhIG5vIGNhbXBvIGRlIGJ1c2NhLiAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlJykgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcj86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQbGFjZWhvbGRlciBkbyBjYW1wbyBkZSBwZXNxdWlzYS5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBvIG1lc21vIG7Do28gc2VqYSBpbmZvcm1hZG8sIG8gdmFsb3IgcGFkcsOjbyBzZXLDoSB0cmFkdXppZG8gY29tIGJhc2Ugbm8gaWRpb21hIGRvIG5hdmVnYWRvciAocHQsIGVzIGUgZW4pLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYEJ1c2NhcmBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcGxhY2Vob2xkZXInKSBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlciAmJiBpc1R5cGVvZihwbGFjZWhvbGRlciwgJ3N0cmluZycpID8gcGxhY2Vob2xkZXIgOiB0aGlzLmxpdGVyYWxzLnBsYWNlaG9sZGVyU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyIHx8IHRoaXMubGl0ZXJhbHMucGxhY2Vob2xkZXJTZWFyY2g7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRWYWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoeyBldmVudDogZXZlbnQsIFt0aGlzLmZpZWxkVmFsdWVdOiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9jdXMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhbigpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1maWVsZC1jb250YWluZXItY29udGVudCBwby1tdWx0aXNlbGVjdC1jb250YWluZXItc2VhcmNoXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLWZpZWxkLWljb24tY29udGFpbmVyLWxlZnRcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8taWNvbiBwby1pY29uLXNlYXJjaCBwby1maWVsZC1pY29uIHBvLWljb24taW5wdXRcIj48L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxpbnB1dFxyXG4gICAgI2lucHV0RWxlbWVudFxyXG4gICAgY2xhc3M9XCJwby1pbnB1dCBwby1pbnB1dC1pY29uLWxlZnQgcG8tbXVsdGlzZWxlY3Qtc2VhcmNoLWlucHV0XCJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAoa2V5dXApPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgLz5cclxuPC9kaXY+XHJcbiJdfQ==