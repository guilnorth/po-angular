import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que constrói cada item no dropdown, contendo o checkbox e o label.
 */
export class PoMultiselectItemComponent {
    constructor() {
        /** Esta propriedade indica se o campo está selecionado, indenterminate ou não. */
        this.selected = false;
        /** Evento que será disparado toda vez que o usuário marcar ou desmarcar um item. */
        this.change = new EventEmitter();
    }
    itemClicked() {
        this.selected = !this.selected;
        this.change.emit(this.selected);
    }
}
PoMultiselectItemComponent.ɵfac = function PoMultiselectItemComponent_Factory(t) { return new (t || PoMultiselectItemComponent)(); };
PoMultiselectItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMultiselectItemComponent, selectors: [["po-multiselect-item"]], inputs: { label: ["p-label", "label"], selected: ["p-selected", "selected"] }, outputs: { change: "p-change" }, decls: 5, vars: 8, consts: [[3, "click"], [1, "po-multiselect-item"], ["type", "checkbox", 1, "po-multiselect-checkbox-input", 3, "checked"], [1, "po-multiselect-checkbox-label", "po-clickable"]], template: function PoMultiselectItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 0);
        i0.ɵɵlistener("click", function PoMultiselectItemComponent_Template_li_click_0_listener() { return ctx.itemClicked(); });
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementStart(3, "label", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵclassProp("po-multiselect-item-selected", ctx.selected);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("po-multiselect-checkbox-input-indeterminate", ctx.selected === null)("po-multiselect-checkbox-input-checked", ctx.selected);
        i0.ɵɵproperty("checked", ctx.selected);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMultiselectItemComponent, [{
        type: Component,
        args: [{ selector: 'po-multiselect-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<li [class.po-multiselect-item-selected]=\"selected\" (click)=\"itemClicked()\">\r\n  <a class=\"po-multiselect-item\">\r\n    <input\r\n      [checked]=\"selected\"\r\n      class=\"po-multiselect-checkbox-input\"\r\n      [class.po-multiselect-checkbox-input-indeterminate]=\"selected === null\"\r\n      [class.po-multiselect-checkbox-input-checked]=\"selected\"\r\n      type=\"checkbox\"\r\n    />\r\n\r\n    <label class=\"po-multiselect-checkbox-label po-clickable\">\r\n      {{ label }}\r\n    </label>\r\n  </a>\r\n</li>\r\n" }]
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], selected: [{
            type: Input,
            args: ['p-selected']
        }], change: [{
            type: Output,
            args: ['p-change']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tbXVsdGlzZWxlY3QvcG8tbXVsdGlzZWxlY3QtaXRlbS9wby1tdWx0aXNlbGVjdC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1tdWx0aXNlbGVjdC9wby1tdWx0aXNlbGVjdC1pdGVtL3BvLW11bHRpc2VsZWN0LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFaEc7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQVNFLGtGQUFrRjtRQUM3RCxhQUFRLEdBQWEsS0FBSyxDQUFDO1FBRWhELG9GQUFvRjtRQUNoRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQU1qRDtJQUpDLFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7b0dBYlUsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUNkdkMsNkJBQTRFO1FBQXhCLG1HQUFTLGlCQUFhLElBQUM7UUFDekUsNEJBQStCO1FBQzdCLDJCQU1FO1FBRUYsZ0NBQTBEO1FBQ3hELFlBQ0Y7UUFBQSxpQkFBUSxFQUFBLEVBQUE7O1FBWlIsNERBQStDO1FBSzdDLGVBQXVFO1FBQXZFLG9GQUF1RSx1REFBQTtRQUZ2RSxzQ0FBb0I7UUFRcEIsZUFDRjtRQURFLDBDQUNGOzt1RkRFUywwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxxQkFBcUIsbUJBRWQsdUJBQXVCLENBQUMsTUFBTTtnQkFJN0IsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR0ssUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBR0MsTUFBTTtrQkFBekIsTUFBTTttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSBjb25zdHLDs2kgY2FkYSBpdGVtIG5vIGRyb3Bkb3duLCBjb250ZW5kbyBvIGNoZWNrYm94IGUgbyBsYWJlbC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tbXVsdGlzZWxlY3QtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLW11bHRpc2VsZWN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb011bHRpc2VsZWN0SXRlbUNvbXBvbmVudCB7XHJcbiAgLyoqIFLDs3R1bG8gZG8gaXRlbS4gKi9cclxuICBASW5wdXQoJ3AtbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogRXN0YSBwcm9wcmllZGFkZSBpbmRpY2Egc2UgbyBjYW1wbyBlc3TDoSBzZWxlY2lvbmFkbywgaW5kZW50ZXJtaW5hdGUgb3UgbsOjby4gKi9cclxuICBASW5wdXQoJ3Atc2VsZWN0ZWQnKSBzZWxlY3RlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEV2ZW50byBxdWUgc2Vyw6EgZGlzcGFyYWRvIHRvZGEgdmV6IHF1ZSBvIHVzdcOhcmlvIG1hcmNhciBvdSBkZXNtYXJjYXIgdW0gaXRlbS4gKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgaXRlbUNsaWNrZWQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxufVxyXG4iLCI8bGkgW2NsYXNzLnBvLW11bHRpc2VsZWN0LWl0ZW0tc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIiAoY2xpY2spPVwiaXRlbUNsaWNrZWQoKVwiPlxyXG4gIDxhIGNsYXNzPVwicG8tbXVsdGlzZWxlY3QtaXRlbVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkXCJcclxuICAgICAgY2xhc3M9XCJwby1tdWx0aXNlbGVjdC1jaGVja2JveC1pbnB1dFwiXHJcbiAgICAgIFtjbGFzcy5wby1tdWx0aXNlbGVjdC1jaGVja2JveC1pbnB1dC1pbmRldGVybWluYXRlXT1cInNlbGVjdGVkID09PSBudWxsXCJcclxuICAgICAgW2NsYXNzLnBvLW11bHRpc2VsZWN0LWNoZWNrYm94LWlucHV0LWNoZWNrZWRdPVwic2VsZWN0ZWRcIlxyXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgLz5cclxuXHJcbiAgICA8bGFiZWwgY2xhc3M9XCJwby1tdWx0aXNlbGVjdC1jaGVja2JveC1sYWJlbCBwby1jbGlja2FibGVcIj5cclxuICAgICAge3sgbGFiZWwgfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9hPlxyXG48L2xpPlxyXG4iXX0=