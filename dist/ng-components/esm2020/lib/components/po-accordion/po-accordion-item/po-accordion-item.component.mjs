import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/po-accordion.service";
function PoAccordionItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
/**
 * @description
 *
 * Componente utilizado para renderizar os itens do `po-accordion`.
 *
 * O componente `po-accordion` já faz o controle de abertura e fechamento dos itens automaticamente,
 * mas caso houver a necessidade de abrir algum dos `po-accordion-item` via Typescript, pode ser feita da seguinte forma:
 *
 * ```
 * <po-accordion>
 *   <po-accordion-item p-label="PO Accordion 1" #item1>
 *      Accordion 1
 *   </po-accordion-item>
 *
 *   <po-accordion-item p-label="PO Accordion 2">
 *      Accordion 2
 *   </po-accordion-item>
 * </po-accordion>
 * ```
 *
 * e no typescript pode-se utilizar o `@ViewChild`:
 *
 * ```
 *  @ViewChild(PoAccordionItemComponent, { static: true }) item1: PoAccordionItemComponent;
 *
 *  ngAfterContentInit() {
 *    // ou utilizar o método collapse()
 *    this.item1.expand();
 *  }
 * ```
 */
export class PoAccordionItemComponent {
    constructor(accordionService) {
        this.accordionService = accordionService;
        /** Evento disparado ao expandir o item, seja manualmente ou programaticamente. */
        this.expandEvent = new EventEmitter();
        /** Evento disparado ao retrair o item, seja manualmente ou programaticamente. */
        this.collapseEvent = new EventEmitter();
        this.expandSubscription = this.accordionService
            .receiveFromChildAccordionClicked()
            .pipe(filter(poAccordionItem => poAccordionItem === this && poAccordionItem.expanded))
            .subscribe(() => {
            this.expandEvent.emit();
        });
        this.collapseSubscription = this.accordionService
            .receiveFromChildAccordionClicked()
            .pipe(filter(poAccordionItem => poAccordionItem === this && !poAccordionItem.expanded))
            .subscribe(() => {
            this.collapseEvent.emit();
        });
    }
    ngOnDestroy() {
        this.expandSubscription.unsubscribe();
        this.collapseSubscription.unsubscribe();
    }
    /**
     * Método para colapsar o `po-accordion-item`.
     */
    collapse() {
        this.expanded = false;
        this.accordionService.sendToParentAccordionItemClicked(this);
    }
    /**
     * Método para expandir o `po-accordion-item`.
     */
    expand() {
        this.expanded = true;
        this.accordionService.sendToParentAccordionItemClicked(this);
    }
}
PoAccordionItemComponent.ɵfac = function PoAccordionItemComponent_Factory(t) { return new (t || PoAccordionItemComponent)(i0.ɵɵdirectiveInject(i1.PoAccordionService)); };
PoAccordionItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoAccordionItemComponent, selectors: [["po-accordion-item"]], viewQuery: function PoAccordionItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { label: ["p-label", "label"] }, outputs: { expandEvent: "p-expand", collapseEvent: "p-collapse" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PoAccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, PoAccordionItemComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoAccordionItemComponent, [{
        type: Component,
        args: [{ selector: 'po-accordion-item', template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.PoAccordionService }]; }, { label: [{
            type: Input,
            args: ['p-label']
        }], expandEvent: [{
            type: Output,
            args: ['p-expand']
        }], collapseEvent: [{
            type: Output,
            args: ['p-collapse']
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWFjY29yZGlvbi9wby1hY2NvcmRpb24taXRlbS9wby1hY2NvcmRpb24taXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYWNjb3JkaW9uL3BvLWFjY29yZGlvbi1pdGVtL3BvLWFjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7OztJQ0ExQyxrQkFBeUI7OztBREkzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBS0gsTUFBTSxPQUFPLHdCQUF3QjtJQWlCbkMsWUFBb0IsZ0JBQW9DO1FBQXBDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFieEQsa0ZBQWtGO1FBQzlELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUzRCxpRkFBaUY7UUFDM0Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBVTdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQzVDLGdDQUFnQyxFQUFFO2FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQzlDLGdDQUFnQyxFQUFFO2FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnR0F0RFUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7dUJBVXhCLFdBQVc7Ozs7OztRQ2xEeEIsc0ZBRWM7O3VGRHNDRCx3QkFBd0I7Y0FKcEMsU0FBUzsyQkFDRSxtQkFBbUI7cUVBS1gsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR0ksV0FBVztrQkFBOUIsTUFBTTttQkFBQyxVQUFVO1lBR0ksYUFBYTtrQkFBbEMsTUFBTTttQkFBQyxZQUFZO1lBRXNCLFdBQVc7a0JBQXBELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmlsdGVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBvQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BvLWFjY29yZGlvbi5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSB1dGlsaXphZG8gcGFyYSByZW5kZXJpemFyIG9zIGl0ZW5zIGRvIGBwby1hY2NvcmRpb25gLlxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLWFjY29yZGlvbmAgasOhIGZheiBvIGNvbnRyb2xlIGRlIGFiZXJ0dXJhIGUgZmVjaGFtZW50byBkb3MgaXRlbnMgYXV0b21hdGljYW1lbnRlLFxyXG4gKiBtYXMgY2FzbyBob3V2ZXIgYSBuZWNlc3NpZGFkZSBkZSBhYnJpciBhbGd1bSBkb3MgYHBvLWFjY29yZGlvbi1pdGVtYCB2aWEgVHlwZXNjcmlwdCwgcG9kZSBzZXIgZmVpdGEgZGEgc2VndWludGUgZm9ybWE6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8cG8tYWNjb3JkaW9uPlxyXG4gKiAgIDxwby1hY2NvcmRpb24taXRlbSBwLWxhYmVsPVwiUE8gQWNjb3JkaW9uIDFcIiAjaXRlbTE+XHJcbiAqICAgICAgQWNjb3JkaW9uIDFcclxuICogICA8L3BvLWFjY29yZGlvbi1pdGVtPlxyXG4gKlxyXG4gKiAgIDxwby1hY2NvcmRpb24taXRlbSBwLWxhYmVsPVwiUE8gQWNjb3JkaW9uIDJcIj5cclxuICogICAgICBBY2NvcmRpb24gMlxyXG4gKiAgIDwvcG8tYWNjb3JkaW9uLWl0ZW0+XHJcbiAqIDwvcG8tYWNjb3JkaW9uPlxyXG4gKiBgYGBcclxuICpcclxuICogZSBubyB0eXBlc2NyaXB0IHBvZGUtc2UgdXRpbGl6YXIgbyBgQFZpZXdDaGlsZGA6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAgQFZpZXdDaGlsZChQb0FjY29yZGlvbkl0ZW1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGl0ZW0xOiBQb0FjY29yZGlvbkl0ZW1Db21wb25lbnQ7XHJcbiAqXHJcbiAqICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAqICAgIC8vIG91IHV0aWxpemFyIG8gbcOpdG9kbyBjb2xsYXBzZSgpXHJcbiAqICAgIHRoaXMuaXRlbTEuZXhwYW5kKCk7XHJcbiAqICB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1hY2NvcmRpb24taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwby1hY2NvcmRpb24taXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIFTDrXR1bG8gZG8gaXRlbS4gKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogRXZlbnRvIGRpc3BhcmFkbyBhbyBleHBhbmRpciBvIGl0ZW0sIHNlamEgbWFudWFsbWVudGUgb3UgcHJvZ3JhbWF0aWNhbWVudGUuICovXHJcbiAgQE91dHB1dCgncC1leHBhbmQnKSBleHBhbmRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqIEV2ZW50byBkaXNwYXJhZG8gYW8gcmV0cmFpciBvIGl0ZW0sIHNlamEgbWFudWFsbWVudGUgb3UgcHJvZ3JhbWF0aWNhbWVudGUuICovXHJcbiAgQE91dHB1dCgncC1jb2xsYXBzZScpIGNvbGxhcHNlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBleHBhbmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGNvbGxhcHNlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uU2VydmljZTogUG9BY2NvcmRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbiA9IHRoaXMuYWNjb3JkaW9uU2VydmljZVxyXG4gICAgICAucmVjZWl2ZUZyb21DaGlsZEFjY29yZGlvbkNsaWNrZWQoKVxyXG4gICAgICAucGlwZShmaWx0ZXIocG9BY2NvcmRpb25JdGVtID0+IHBvQWNjb3JkaW9uSXRlbSA9PT0gdGhpcyAmJiBwb0FjY29yZGlvbkl0ZW0uZXhwYW5kZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmV4cGFuZEV2ZW50LmVtaXQoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb2xsYXBzZVN1YnNjcmlwdGlvbiA9IHRoaXMuYWNjb3JkaW9uU2VydmljZVxyXG4gICAgICAucmVjZWl2ZUZyb21DaGlsZEFjY29yZGlvbkNsaWNrZWQoKVxyXG4gICAgICAucGlwZShmaWx0ZXIocG9BY2NvcmRpb25JdGVtID0+IHBvQWNjb3JkaW9uSXRlbSA9PT0gdGhpcyAmJiAhcG9BY2NvcmRpb25JdGVtLmV4cGFuZGVkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUV2ZW50LmVtaXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNvbGxhcHNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHBhcmEgY29sYXBzYXIgbyBgcG8tYWNjb3JkaW9uLWl0ZW1gLlxyXG4gICAqL1xyXG4gIGNvbGxhcHNlKCkge1xyXG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS5zZW5kVG9QYXJlbnRBY2NvcmRpb25JdGVtQ2xpY2tlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcGFyYSBleHBhbmRpciBvIGBwby1hY2NvcmRpb24taXRlbWAuXHJcbiAgICovXHJcbiAgZXhwYW5kKCkge1xyXG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLnNlbmRUb1BhcmVudEFjY29yZGlvbkl0ZW1DbGlja2VkKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=