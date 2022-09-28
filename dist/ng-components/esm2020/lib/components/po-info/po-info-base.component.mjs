import { Input, Directive } from '@angular/core';
import { PoInfoOrientation } from './po-info-orietation.enum';
import * as i0 from "@angular/core";
const poInfoOrientationDefault = PoInfoOrientation.Vertical;
export class PoInfoBaseComponent {
    constructor() {
        this.poInfoOrientation = PoInfoOrientation;
        this._orientation = poInfoOrientationDefault;
    }
    /**
     * @optional
     *
     * @description
     *
     * Quantidade de [colunas](/guides/grid-system) usadas para a exibição da `p-label` quando o componente for
     * utilizado na orientação horizontal.
     *
     * Valores válidos:
     *  - `[1 .. 11]`
     *
     * > A propriedade `p-value` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.
     */
    set labelSize(value) {
        if (isNaN(parseInt(value, 10))) {
            this._labelSize = undefined;
        }
        else {
            value = parseInt(value, 10);
            this._labelSize = value < 1 || value > 11 ? undefined : value;
        }
    }
    get labelSize() {
        return this._labelSize;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o layout de exibição.
     *
     * > Quando definido na horizontal, pode-se utilizar a propriedade `p-label-size` para um maior controle das informações exibidas.
     *
     * @default `vertical`
     */
    set orientation(value) {
        this._orientation = Object.values(PoInfoOrientation).includes(value) ? value : poInfoOrientationDefault;
    }
    get orientation() {
        return this._orientation;
    }
}
PoInfoBaseComponent.ɵfac = function PoInfoBaseComponent_Factory(t) { return new (t || PoInfoBaseComponent)(); };
PoInfoBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoInfoBaseComponent, inputs: { label: ["p-label", "label"], url: ["p-url", "url"], value: ["p-value", "value"], labelSize: ["p-label-size", "labelSize"], orientation: ["p-orientation", "orientation"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoInfoBaseComponent, [{
        type: Directive
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], url: [{
            type: Input,
            args: ['p-url']
        }], value: [{
            type: Input,
            args: ['p-value']
        }], labelSize: [{
            type: Input,
            args: ['p-label-size']
        }], orientation: [{
            type: Input,
            args: ['p-orientation']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taW5mby1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1pbmZvL3BvLWluZm8tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRTlELE1BQU0sd0JBQXdCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0FBRzVELE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFpQmtCLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBRzlDLGlCQUFZLEdBQXNCLHdCQUF3QixDQUFDO0tBOENwRTtJQTVDQzs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCxJQUEyQixTQUFTLENBQUMsS0FBYTtRQUNoRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFBTTtZQUNMLEtBQUssR0FBRyxRQUFRLENBQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSCxJQUE0QixXQUFXLENBQUMsS0FBd0I7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ2pILENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7c0ZBaEVVLG1CQUFtQjtzRUFBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FEL0IsU0FBUztnQkFHVSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFTQSxHQUFHO2tCQUFsQixLQUFLO21CQUFDLE9BQU87WUFHSSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFvQlcsU0FBUztrQkFBbkMsS0FBSzttQkFBQyxjQUFjO1lBeUJPLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvSW5mb09yaWVudGF0aW9uIH0gZnJvbSAnLi9wby1pbmZvLW9yaWV0YXRpb24uZW51bSc7XHJcblxyXG5jb25zdCBwb0luZm9PcmllbnRhdGlvbkRlZmF1bHQgPSBQb0luZm9PcmllbnRhdGlvbi5WZXJ0aWNhbDtcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9JbmZvQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqIFZhbG9yIGRvIHLDs3R1bG8gYSBzZXIgZXhpYmlkby4gKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBbyBpbmZvcm1hciB1bWEgVVJMLCBvIGNvbnRlw7pkbyBzZXLDoSBleGliaWRvIG5hIGZvcm1hIGRlIHVtICpsaW5rKiBlIGFvIHNlciBjbGljYWRvIHNlcsOhIHJlZGlyZWNpb25hZG8gcGFyYSBhIFVSTCBpbmZvcm1hZGEuXHJcbiAgICpcclxuICAgKiA+IENhc28gaW5mb3JtYXIgYGh0dHA6Ly9gIHNlcsOhIGFiZXJ0byB1bWEgbm92YSBhYmEuXHJcbiAgICogQ2FzbyBpbmZvcm1hciB1bSBjYW1pbmhvIHJlbGF0aXZvLCBleGVtcGxvOiBgL2N1c3RvbWVyc2AsIHNlcsOhIGFiZXJ0byBuYSBhYmEgYXR1YWwuXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdXJsJykgdXJsPzogc3RyaW5nO1xyXG5cclxuICAvKiogVmFsb3IgZG8gY29udGXDumRvIGEgc2VyIGV4aWJpZG8uICovXHJcbiAgQElucHV0KCdwLXZhbHVlJykgdmFsdWU/OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBwb0luZm9PcmllbnRhdGlvbiA9IFBvSW5mb09yaWVudGF0aW9uO1xyXG5cclxuICBwcml2YXRlIF9sYWJlbFNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIF9vcmllbnRhdGlvbjogUG9JbmZvT3JpZW50YXRpb24gPSBwb0luZm9PcmllbnRhdGlvbkRlZmF1bHQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBRdWFudGlkYWRlIGRlIFtjb2x1bmFzXSgvZ3VpZGVzL2dyaWQtc3lzdGVtKSB1c2FkYXMgcGFyYSBhIGV4aWJpw6fDo28gZGEgYHAtbGFiZWxgIHF1YW5kbyBvIGNvbXBvbmVudGUgZm9yXHJcbiAgICogdXRpbGl6YWRvIG5hIG9yaWVudGHDp8OjbyBob3Jpem9udGFsLlxyXG4gICAqXHJcbiAgICogVmFsb3JlcyB2w6FsaWRvczpcclxuICAgKiAgLSBgWzEgLi4gMTFdYFxyXG4gICAqXHJcbiAgICogPiBBIHByb3ByaWVkYWRlIGBwLXZhbHVlYCByZWNlYmUgbyBuw7ptZXJvIGRlIGNvbHVuYXMgcmVzdGFudGVzLCBwb3IgZXhlbXBsbywgc2UgZGVmaW5pZG8gMyBjb2x1bmFzIGEgbWVzbWEgYXNzdW1lIDkgY29sdW5hcy5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGFiZWwtc2l6ZScpIHNldCBsYWJlbFNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTmFOKHBhcnNlSW50KDxhbnk+dmFsdWUsIDEwKSkpIHtcclxuICAgICAgdGhpcy5fbGFiZWxTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCg8YW55PnZhbHVlLCAxMCk7XHJcblxyXG4gICAgICB0aGlzLl9sYWJlbFNpemUgPSB2YWx1ZSA8IDEgfHwgdmFsdWUgPiAxMSA/IHVuZGVmaW5lZCA6IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsU2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyBsYXlvdXQgZGUgZXhpYmnDp8Ojby5cclxuICAgKlxyXG4gICAqID4gUXVhbmRvIGRlZmluaWRvIG5hIGhvcml6b250YWwsIHBvZGUtc2UgdXRpbGl6YXIgYSBwcm9wcmllZGFkZSBgcC1sYWJlbC1zaXplYCBwYXJhIHVtIG1haW9yIGNvbnRyb2xlIGRhcyBpbmZvcm1hw6fDtWVzIGV4aWJpZGFzLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYHZlcnRpY2FsYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcmllbnRhdGlvbicpIHNldCBvcmllbnRhdGlvbih2YWx1ZTogUG9JbmZvT3JpZW50YXRpb24pIHtcclxuICAgIHRoaXMuX29yaWVudGF0aW9uID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoUG9JbmZvT3JpZW50YXRpb24pLmluY2x1ZGVzKHZhbHVlKSA/IHZhbHVlIDogcG9JbmZvT3JpZW50YXRpb25EZWZhdWx0O1xyXG4gIH1cclxuICBnZXQgb3JpZW50YXRpb24oKTogUG9JbmZvT3JpZW50YXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=