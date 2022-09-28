import { Input, Directive } from '@angular/core';
import { convertToInt } from '../../utils/util';
import * as i0 from "@angular/core";
const PO_BADGE_COLORS = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12'
];
const PO_BADGE_COLOR_DEFAULT = 'color-07';
/**
 * @description
 *
 * @docsPrivate
 *
 * Componente utilizado no `po-menu` para exibir por exemplo a quantidade de tarefas pendentes.
 */
export class PoBadgeBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Define a cor de fundo do componente e aceita os valores:
     *
     * <span class="dot po-color-01"></span> `color-01`
     *
     * <span class="dot po-color-02"></span> `color-02`
     *
     * <span class="dot po-color-03"></span> `color-03`
     *
     * <span class="dot po-color-04"></span> `color-04`
     *
     * <span class="dot po-color-05"></span> `color-05`
     *
     * <span class="dot po-color-06"></span> `color-06`
     *
     * <span class="dot po-color-07"></span> `color-07`
     *
     * <span class="dot po-color-08"></span> `color-08`
     *
     * <span class="dot po-color-09"></span> `color-09`
     *
     * <span class="dot po-color-10"></span> `color-10`
     *
     * <span class="dot po-color-11"></span> `color-11`
     *
     * <span class="dot po-color-12"></span> `color-12`
     *
     * @default `color-07`
     */
    set color(value) {
        this._color = PO_BADGE_COLORS.includes(value) ? value : PO_BADGE_COLOR_DEFAULT;
    }
    get color() {
        return this._color;
    }
    /**
     * @description
     *
     * Número exibido no componente, caso o mesmo seja maior que 99 o valor exibido será 99+.
     */
    set value(value) {
        this._value = convertToInt(value);
        this.setBadgeValue(this._value);
    }
    get value() {
        return this._value;
    }
    setBadgeValue(value) {
        const validRangeValue = (value || value === 0) && value >= 0 && value < 100;
        this.badgeValue = validRangeValue ? value.toString() : value > 99 ? '99+' : undefined;
    }
}
PoBadgeBaseComponent.ɵfac = function PoBadgeBaseComponent_Factory(t) { return new (t || PoBadgeBaseComponent)(); };
PoBadgeBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoBadgeBaseComponent, inputs: { color: ["p-color", "color"], value: ["p-value", "value"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBadgeBaseComponent, [{
        type: Directive
    }], null, { color: [{
            type: Input,
            args: ['p-color']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYmFkZ2UtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYmFkZ2UvcG8tYmFkZ2UtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVoRCxNQUFNLGVBQWUsR0FBRztJQUN0QixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7Q0FDWCxDQUFDO0FBQ0YsTUFBTSxzQkFBc0IsR0FBRyxVQUFVLENBQUM7QUFFMUM7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQ0c7SUFDSCxJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDakYsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQXNCLEtBQUssQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFhO1FBQ2pDLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEYsQ0FBQzs7d0ZBaEVVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsU0FBUztnQkF3Q2MsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTO1lBYU0sS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvSW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5jb25zdCBQT19CQURHRV9DT0xPUlMgPSBbXHJcbiAgJ2NvbG9yLTAxJyxcclxuICAnY29sb3ItMDInLFxyXG4gICdjb2xvci0wMycsXHJcbiAgJ2NvbG9yLTA0JyxcclxuICAnY29sb3ItMDUnLFxyXG4gICdjb2xvci0wNicsXHJcbiAgJ2NvbG9yLTA3JyxcclxuICAnY29sb3ItMDgnLFxyXG4gICdjb2xvci0wOScsXHJcbiAgJ2NvbG9yLTEwJyxcclxuICAnY29sb3ItMTEnLFxyXG4gICdjb2xvci0xMidcclxuXTtcclxuY29uc3QgUE9fQkFER0VfQ09MT1JfREVGQVVMVCA9ICdjb2xvci0wNyc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHV0aWxpemFkbyBubyBgcG8tbWVudWAgcGFyYSBleGliaXIgcG9yIGV4ZW1wbG8gYSBxdWFudGlkYWRlIGRlIHRhcmVmYXMgcGVuZGVudGVzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0JhZGdlQmFzZUNvbXBvbmVudCB7XHJcbiAgYmFkZ2VWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBjb3IgZGUgZnVuZG8gZG8gY29tcG9uZW50ZSBlIGFjZWl0YSBvcyB2YWxvcmVzOlxyXG4gICAqXHJcbiAgICogPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMDFcIj48L3NwYW4+IGBjb2xvci0wMWBcclxuICAgKlxyXG4gICAqIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTAyXCI+PC9zcGFuPiBgY29sb3ItMDJgXHJcbiAgICpcclxuICAgKiA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0wM1wiPjwvc3Bhbj4gYGNvbG9yLTAzYFxyXG4gICAqXHJcbiAgICogPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMDRcIj48L3NwYW4+IGBjb2xvci0wNGBcclxuICAgKlxyXG4gICAqIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTA1XCI+PC9zcGFuPiBgY29sb3ItMDVgXHJcbiAgICpcclxuICAgKiA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0wNlwiPjwvc3Bhbj4gYGNvbG9yLTA2YFxyXG4gICAqXHJcbiAgICogPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMDdcIj48L3NwYW4+IGBjb2xvci0wN2BcclxuICAgKlxyXG4gICAqIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTA4XCI+PC9zcGFuPiBgY29sb3ItMDhgXHJcbiAgICpcclxuICAgKiA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0wOVwiPjwvc3Bhbj4gYGNvbG9yLTA5YFxyXG4gICAqXHJcbiAgICogPHNwYW4gY2xhc3M9XCJkb3QgcG8tY29sb3ItMTBcIj48L3NwYW4+IGBjb2xvci0xMGBcclxuICAgKlxyXG4gICAqIDxzcGFuIGNsYXNzPVwiZG90IHBvLWNvbG9yLTExXCI+PC9zcGFuPiBgY29sb3ItMTFgXHJcbiAgICpcclxuICAgKiA8c3BhbiBjbGFzcz1cImRvdCBwby1jb2xvci0xMlwiPjwvc3Bhbj4gYGNvbG9yLTEyYFxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGNvbG9yLTA3YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1jb2xvcicpIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IFBPX0JBREdFX0NPTE9SUy5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6IFBPX0JBREdFX0NPTE9SX0RFRkFVTFQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTsO6bWVybyBleGliaWRvIG5vIGNvbXBvbmVudGUsIGNhc28gbyBtZXNtbyBzZWphIG1haW9yIHF1ZSA5OSBvIHZhbG9yIGV4aWJpZG8gc2Vyw6EgOTkrLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC12YWx1ZScpIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IGNvbnZlcnRUb0ludCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEJhZGdlVmFsdWUodGhpcy5fdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJhZGdlVmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgdmFsaWRSYW5nZVZhbHVlID0gKHZhbHVlIHx8IHZhbHVlID09PSAwKSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDwgMTAwO1xyXG4gICAgdGhpcy5iYWRnZVZhbHVlID0gdmFsaWRSYW5nZVZhbHVlID8gdmFsdWUudG9TdHJpbmcoKSA6IHZhbHVlID4gOTkgPyAnOTkrJyA6IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIl19