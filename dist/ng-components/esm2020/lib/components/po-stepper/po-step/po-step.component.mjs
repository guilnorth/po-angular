import { Component, Input } from '@angular/core';
import { uuid } from '../../../utils/util';
import { PoStepperStatus } from '../enums/po-stepper-status.enum';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @description
 *
 * O componente `po-step` é utilizado para envolver e renderizar o conteúdo de um passo (*step*) do `po-stepper`, por exemplo:
 *
 * ```
 * <po-stepper>
 *
 *    <po-step p-label="Endereço">
 *
 *        <!-- Conteúdo referente ao endereço -->
 *
 *    </po-step>
 *
 *    <po-step p-label="Pagamento">
 *
 *        <!-- Conteúdo referente ao pagamento -->
 *
 *    </po-step>
 *
 *  </po-stepper>
 * ```
 *
 * A renderização do conteúdo envolvido na tela e o controle dos status são feitos automaticamente. No qual, o primeiro
 * `po-step` encontrado será colocado como ativo, o próximo fica com o status *default* e os demais ficam
 * desabilitados (*disabled*).
 *
 * Ao clicar no `po-step` que está com o status *default*, o que está ativo ficará com o
 * status de concluído (*done*) e o próximo que estava desabilitado ficará com o status *default* e o restante permanecerá
 * com o status desabilitado.
 *
 * > Ao utilizar o `po-step`, o componente `po-stepper` funcionará de forma sequencial, ou seja, não será possível
 * pular para outro `po-step` que esteja com o status igual a desabilitado (*disabled*).
 *
 * Acesse a [documentação do `po-stepper`](/documentation/po-stepper) para ter mais informações sobre o seu funcionamento
 * e exemplos de uso.
 */
export class PoStepComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // ID do step
        this.id = uuid();
        this._status = PoStepperStatus.Disabled;
    }
    // Estado de exibição do `po-step`.
    set status(status) {
        this._status = status;
        this.setDisplayOnActiveOrError();
    }
    get status() {
        return this._status;
    }
    ngAfterContentInit() {
        this.setDisplayOnActiveOrError();
    }
    setDisplayOnActiveOrError() {
        this.elementRef.nativeElement.style.display =
            this.status === PoStepperStatus.Active || this.status === PoStepperStatus.Error ? '' : 'none';
    }
}
PoStepComponent.ɵfac = function PoStepComponent_Factory(t) { return new (t || PoStepComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PoStepComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoStepComponent, selectors: [["po-step"]], inputs: { canActiveNextStep: ["p-can-active-next-step", "canActiveNextStep"], label: ["p-label", "label"], status: ["p-status", "status"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PoStepComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStepComponent, [{
        type: Component,
        args: [{ selector: 'po-step', template: "<ng-content></ng-content>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }]; }, { canActiveNextStep: [{
            type: Input,
            args: ['p-can-active-next-step']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], status: [{
            type: Input,
            args: ['p-status']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc3RlcHBlci9wby1zdGVwL3BvLXN0ZXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXN0ZXBwZXIvcG8tc3RlcC9wby1zdGVwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFFbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUtILE1BQU0sT0FBTyxlQUFlO0lBK0MxQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBaEIxQyxhQUFhO1FBQ2IsT0FBRSxHQUFZLElBQUksRUFBRSxDQUFDO1FBRWIsWUFBTyxHQUFxQixlQUFlLENBQUMsUUFBUSxDQUFDO0lBYWhCLENBQUM7SUFYOUMsbUNBQW1DO0lBQ25DLElBQXVCLE1BQU0sQ0FBQyxNQUF1QjtRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUV0QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFJRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVTLHlCQUF5QjtRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUN6QyxJQUFJLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNsRyxDQUFDOzs4RUF4RFUsZUFBZTtrRUFBZixlQUFlOztRQ2hENUIsa0JBQXlCOzt1RkRnRFosZUFBZTtjQUozQixTQUFTOzJCQUNFLFNBQVM7NkRBMkJjLGlCQUFpQjtrQkFBakQsS0FBSzttQkFBQyx3QkFBd0I7WUFLYixLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFRTyxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvU3RlcHBlclN0YXR1cyB9IGZyb20gJy4uL2VudW1zL3BvLXN0ZXBwZXItc3RhdHVzLmVudW0nO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLXN0ZXBgIMOpIHV0aWxpemFkbyBwYXJhIGVudm9sdmVyIGUgcmVuZGVyaXphciBvIGNvbnRlw7pkbyBkZSB1bSBwYXNzbyAoKnN0ZXAqKSBkbyBgcG8tc3RlcHBlcmAsIHBvciBleGVtcGxvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHBvLXN0ZXBwZXI+XHJcbiAqXHJcbiAqICAgIDxwby1zdGVwIHAtbGFiZWw9XCJFbmRlcmXDp29cIj5cclxuICpcclxuICogICAgICAgIDwhLS0gQ29udGXDumRvIHJlZmVyZW50ZSBhbyBlbmRlcmXDp28gLS0+XHJcbiAqXHJcbiAqICAgIDwvcG8tc3RlcD5cclxuICpcclxuICogICAgPHBvLXN0ZXAgcC1sYWJlbD1cIlBhZ2FtZW50b1wiPlxyXG4gKlxyXG4gKiAgICAgICAgPCEtLSBDb250ZcO6ZG8gcmVmZXJlbnRlIGFvIHBhZ2FtZW50byAtLT5cclxuICpcclxuICogICAgPC9wby1zdGVwPlxyXG4gKlxyXG4gKiAgPC9wby1zdGVwcGVyPlxyXG4gKiBgYGBcclxuICpcclxuICogQSByZW5kZXJpemHDp8OjbyBkbyBjb250ZcO6ZG8gZW52b2x2aWRvIG5hIHRlbGEgZSBvIGNvbnRyb2xlIGRvcyBzdGF0dXMgc8OjbyBmZWl0b3MgYXV0b21hdGljYW1lbnRlLiBObyBxdWFsLCBvIHByaW1laXJvXHJcbiAqIGBwby1zdGVwYCBlbmNvbnRyYWRvIHNlcsOhIGNvbG9jYWRvIGNvbW8gYXRpdm8sIG8gcHLDs3hpbW8gZmljYSBjb20gbyBzdGF0dXMgKmRlZmF1bHQqIGUgb3MgZGVtYWlzIGZpY2FtXHJcbiAqIGRlc2FiaWxpdGFkb3MgKCpkaXNhYmxlZCopLlxyXG4gKlxyXG4gKiBBbyBjbGljYXIgbm8gYHBvLXN0ZXBgIHF1ZSBlc3TDoSBjb20gbyBzdGF0dXMgKmRlZmF1bHQqLCBvIHF1ZSBlc3TDoSBhdGl2byBmaWNhcsOhIGNvbSBvXHJcbiAqIHN0YXR1cyBkZSBjb25jbHXDrWRvICgqZG9uZSopIGUgbyBwcsOzeGltbyBxdWUgZXN0YXZhIGRlc2FiaWxpdGFkbyBmaWNhcsOhIGNvbSBvIHN0YXR1cyAqZGVmYXVsdCogZSBvIHJlc3RhbnRlIHBlcm1hbmVjZXLDoVxyXG4gKiBjb20gbyBzdGF0dXMgZGVzYWJpbGl0YWRvLlxyXG4gKlxyXG4gKiA+IEFvIHV0aWxpemFyIG8gYHBvLXN0ZXBgLCBvIGNvbXBvbmVudGUgYHBvLXN0ZXBwZXJgIGZ1bmNpb25hcsOhIGRlIGZvcm1hIHNlcXVlbmNpYWwsIG91IHNlamEsIG7Do28gc2Vyw6EgcG9zc8OtdmVsXHJcbiAqIHB1bGFyIHBhcmEgb3V0cm8gYHBvLXN0ZXBgIHF1ZSBlc3RlamEgY29tIG8gc3RhdHVzIGlndWFsIGEgZGVzYWJpbGl0YWRvICgqZGlzYWJsZWQqKS5cclxuICpcclxuICogQWNlc3NlIGEgW2RvY3VtZW50YcOnw6NvIGRvIGBwby1zdGVwcGVyYF0oL2RvY3VtZW50YXRpb24vcG8tc3RlcHBlcikgcGFyYSB0ZXIgbWFpcyBpbmZvcm1hw6fDtWVzIHNvYnJlIG8gc2V1IGZ1bmNpb25hbWVudG9cclxuICogZSBleGVtcGxvcyBkZSB1c28uXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXN0ZXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAncG8tc3RlcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBjaGFtYWRhIHF1YW5kbyBvIHByw7N4aW1vICpzdGVwKiBmb3IgY2xpY2FkbyBvdSBxdWFuZG8gbyBtw6l0b2RvIGBQb1N0ZXBwZXJDb21wb25lbnQubmV4dCgpYCBmb3IgY2hhbWFkby5cclxuICAgKiBBbyByZXRvcm5hciBgdHJ1ZWAgZGVmaW5lIHF1ZSBlc3NlICpzdGVwKiBmaWNhcsOhIGF0aXZvIGUgbyBhdHVhbCBjb21vIGNvbmNsdcOtZG8gKCpkb25lKikuXHJcbiAgICogVGFtYsOpbSBhY2VpdGEgZnVuw6fDtWVzIHF1ZSByZXRvcm5lbSBgT2JzZXJ2YWJsZTxib29sZWFuPmAuIEFvIHJldG9ybmFyIHVtIGBPYnNlcnZhYmxlPGJvb2xlYW4+YCxcclxuICAgKiBnYXJhbnRhIHF1ZSBlc3NlIGBPYnNlcnZhYmxlYCBzZXLDoSBjb21wbGV0YWRvLCBjYXNvIGhvdXZlciBhbGd1bSBlcnJvIGR1cmFudGUgbyBwcm9jZXNzbyBuw6NvIHNlcsOhIHBvc3PDrXZlbCBwcm9zc2VndWlyXHJcbiAgICogYW8gcHLDs3hpbW8gKnN0ZXAqLlxyXG4gICAqXHJcbiAgICogQW8gc2VyIGRpc3BhcmFkYSwgYSBtZXNtYSByZWNlYmVyw6EgcG9yIHBhcsOibWV0cm8gbyBgUG9TdGVwQ29tcG9uZW50YCBhdHVhbC5cclxuICAgKlxyXG4gICAqIE8gY29udGV4dG8gZGEgZnVuw6fDo28gcXVlIHNlcsOhIGNoYW1hZGEsIHNlcsOhIG8gbWVzbW8gcXVlIG8gZG8gYFBvU3RlcENvbXBvbmVudGAsIGVudMOjbyBwYXJhIHBvZGVyIGFsdGVyYXJcclxuICAgKiBwYXJhIG8gY29udGV4dG8gZG8gY29tcG9uZW50ZSBxdWUgbyBlc3TDoSB1dGlsaXphbmRvLCBwb2RlIHNlciB1dGlsaXphZG8gYSBwcm9wcmllZGFkZSBgYmluZGAgZG8gSmF2YXNjcmlwdC5cclxuICAgKiBQb3IgZXhlbXBsbywgcGFyYSBhIGZ1bsOnw6NvIGB2YWxpZGF0ZWA6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tc3RlcCBwLWxhYmVsPVwiU3RlcCAxXCIgW3AtY2FuLWFjdGl2ZS1uZXh0LXN0ZXBdPVwidmFsaWRhdGUuYmluZCh0aGlzKVwiPlxyXG4gICAqIC4uLlxyXG4gICAqIDwvcG8tc3RlcD5cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtY2FuLWFjdGl2ZS1uZXh0LXN0ZXAnKSBjYW5BY3RpdmVOZXh0U3RlcDpcclxuICAgIHwgKChjdXJyZW50U3RlcCkgPT4gYm9vbGVhbilcclxuICAgIHwgKChjdXJyZW50U3RlcCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPik7XHJcblxyXG4gIC8qKiBUw610dWxvIHF1ZSBzZXLDoSBleGliaWRvIGRlc2NyZXZlbmRvIG8gcGFzc28gKCpzdGVwKikuICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gSUQgZG8gc3RlcFxyXG4gIGlkPzogc3RyaW5nID0gdXVpZCgpO1xyXG5cclxuICBwcml2YXRlIF9zdGF0dXM/OiBQb1N0ZXBwZXJTdGF0dXMgPSBQb1N0ZXBwZXJTdGF0dXMuRGlzYWJsZWQ7XHJcblxyXG4gIC8vIEVzdGFkbyBkZSBleGliacOnw6NvIGRvIGBwby1zdGVwYC5cclxuICBASW5wdXQoJ3Atc3RhdHVzJykgc2V0IHN0YXR1cyhzdGF0dXM6IFBvU3RlcHBlclN0YXR1cykge1xyXG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xyXG5cclxuICAgIHRoaXMuc2V0RGlzcGxheU9uQWN0aXZlT3JFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXR1cygpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0RGlzcGxheU9uQWN0aXZlT3JFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldERpc3BsYXlPbkFjdGl2ZU9yRXJyb3IoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgdGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5BY3RpdmUgfHwgdGhpcy5zdGF0dXMgPT09IFBvU3RlcHBlclN0YXR1cy5FcnJvciA/ICcnIDogJ25vbmUnO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==