import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * O componente **po-page-header** é responsável pelo título da página e container dos botões de ações dos componentes
 * po-page-list e po-page-base.
 */
export class PoPageHeaderBaseComponent {
    /** Objeto com propriedades do breadcrumb. */
    set breadcrumb(value) {
        this._breadcrumb = value;
    }
    get breadcrumb() {
        return this._breadcrumb;
    }
}
PoPageHeaderBaseComponent.ɵfac = function PoPageHeaderBaseComponent_Factory(t) { return new (t || PoPageHeaderBaseComponent)(); };
PoPageHeaderBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageHeaderBaseComponent, inputs: { title: ["p-title", "title"], breadcrumb: ["p-breadcrumb", "breadcrumb"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageHeaderBaseComponent, [{
        type: Directive
    }], null, { title: [{
            type: Input,
            args: ['p-title']
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1oZWFkZXItYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS9wby1wYWdlLWhlYWRlci9wby1wYWdlLWhlYWRlci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJakQ7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyx5QkFBeUI7SUFNcEMsNkNBQTZDO0lBRTdDLElBQTJCLFVBQVUsQ0FBQyxLQUFtQjtRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2tHQWJVLHlCQUF5Qjs0RUFBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FEckMsU0FBUztnQkFHVSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFNVyxVQUFVO2tCQUFwQyxLQUFLO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0JyZWFkY3J1bWIgfSBmcm9tICcuLi8uLi9wby1icmVhZGNydW1iL3BvLWJyZWFkY3J1bWIuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSAqKnBvLXBhZ2UtaGVhZGVyKiogw6kgcmVzcG9uc8OhdmVsIHBlbG8gdMOtdHVsbyBkYSBww6FnaW5hIGUgY29udGFpbmVyIGRvcyBib3TDtWVzIGRlIGHDp8O1ZXMgZG9zIGNvbXBvbmVudGVzXHJcbiAqIHBvLXBhZ2UtbGlzdCBlIHBvLXBhZ2UtYmFzZS5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlSGVhZGVyQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqIFTDrXR1bG8gZGEgcMOhZ2luYS4gKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9icmVhZGNydW1iOiBQb0JyZWFkY3J1bWI7XHJcblxyXG4gIC8qKiBPYmpldG8gY29tIHByb3ByaWVkYWRlcyBkbyBicmVhZGNydW1iLiAqL1xyXG5cclxuICBASW5wdXQoJ3AtYnJlYWRjcnVtYicpIHNldCBicmVhZGNydW1iKHZhbHVlOiBQb0JyZWFkY3J1bWIpIHtcclxuICAgIHRoaXMuX2JyZWFkY3J1bWIgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGJyZWFkY3J1bWIoKTogUG9CcmVhZGNydW1iIHtcclxuICAgIHJldHVybiB0aGlzLl9icmVhZGNydW1iO1xyXG4gIH1cclxufVxyXG4iXX0=