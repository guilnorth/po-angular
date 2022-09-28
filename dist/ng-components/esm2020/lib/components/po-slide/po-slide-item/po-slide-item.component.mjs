import { Component, Input, ViewChild } from '@angular/core';
import { isIEOrEdge } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = ["slideItem"];
const _c1 = function (a0, a1) { return { alt: a0, image: a1 }; };
const _c2 = function (a0) { return { item: a0 }; };
function PoSlideItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(8);
    i0.ɵɵproperty("routerLink", ctx_r1.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c2, i0.ɵɵpureFunction2(3, _c1, ctx_r1.alt, ctx_r1.image)));
} }
function PoSlideItemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(8);
    i0.ɵɵproperty("href", ctx_r2.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c2, i0.ɵɵpureFunction2(3, _c1, ctx_r2.alt, ctx_r2.image)));
} }
const _c3 = function (a0, a1, a2) { return { alt: a0, image: a1, data: a2 }; };
function PoSlideItemComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵlistener("click", function PoSlideItemComponent_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.action ? ctx_r8.action(ctx_r8.data) : undefined); });
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(6);
    const _r6 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngClass", ctx_r3.action ? "po-slide-item-link" : "po-slide-item-no-link");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.template ? _r4 : _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, i0.ɵɵpureFunction3(3, _c3, ctx_r3.alt, ctx_r3.image, ctx_r3.data)));
} }
function PoSlideItemComponent_ng_template_5_div_0_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function PoSlideItemComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, PoSlideItemComponent_ng_template_5_div_0_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const item_r10 = ctx_r14.item;
    const index_r11 = ctx_r14.index;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r12.template.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c4, item_r10.data, index_r11));
} }
function PoSlideItemComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoSlideItemComponent_ng_template_5_div_0_Template, 2, 5, "div", 12);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.template);
} }
function PoSlideItemComponent_ng_template_7_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const item_r15 = i0.ɵɵnextContext().item;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r16.imageHeight, "px");
    i0.ɵɵproperty("alt", item_r15.alt)("src", item_r15.image, i0.ɵɵsanitizeUrl);
} }
function PoSlideItemComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoSlideItemComponent_ng_template_7_img_0_Template, 1, 4, "img", 14);
} if (rf & 2) {
    const item_r15 = ctx.item;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", item_r15.image && !ctx_r7.isIEOrEdge);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para cada item do po-slide.
 */
export class PoSlideItemComponent {
    constructor() {
        this.isIEOrEdge = isIEOrEdge();
    }
    setLinkType() {
        if (!this.template && this.link) {
            return this.link.startsWith('http') ? 'externalLink' : 'internalLink';
        }
        return 'noLink';
    }
}
PoSlideItemComponent.ɵfac = function PoSlideItemComponent_Factory(t) { return new (t || PoSlideItemComponent)(); };
PoSlideItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoSlideItemComponent, selectors: [["po-slide-item"]], viewQuery: function PoSlideItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemElement = _t.first);
    } }, inputs: { action: ["p-action", "action"], alt: ["p-alt", "alt"], data: ["p-data", "data"], image: ["p-image", "image"], imageHeight: ["p-image-height", "imageHeight"], template: ["p-template", "template"], link: ["p-link", "link"] }, decls: 9, vars: 8, consts: [[1, "po-slide-item", 3, "ngSwitch"], ["slideItem", ""], ["class", "po-slide-item-link", 3, "routerLink", 4, "ngSwitchCase"], ["class", "po-slide-item-link", 3, "href", 4, "ngSwitchCase"], [3, "ngClass", "click", 4, "ngSwitchCase"], [";", ""], ["slideItemTemplate", ""], ["slideItemImage", ""], [1, "po-slide-item-link", 3, "routerLink"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "po-slide-item-link", 3, "href"], [3, "ngClass", "click"], ["class", "po-slide-item-content", 4, "ngIf"], [1, "po-slide-item-content"], ["class", "po-slide-image", 3, "alt", "src", "height", 4, "ngIf"], [1, "po-slide-image", 3, "alt", "src"]], template: function PoSlideItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PoSlideItemComponent_a_2_Template, 2, 8, "a", 2);
        i0.ɵɵtemplate(3, PoSlideItemComponent_a_3_Template, 2, 8, "a", 3);
        i0.ɵɵtemplate(4, PoSlideItemComponent_a_4_Template, 2, 9, "a", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PoSlideItemComponent_ng_template_5_Template, 1, 1, "ng-template", 5, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, PoSlideItemComponent_ng_template_7_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵstyleProp("background-image", !ctx.template && ctx.isIEOrEdge ? "url(" + ctx.image + ")" : "");
        i0.ɵɵclassProp("po-slide-item-background-image", !ctx.template && ctx.isIEOrEdge);
        i0.ɵɵproperty("ngSwitch", ctx.setLinkType());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitchCase", "internalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "noLink");
    } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i2.RouterLinkWithHref], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSlideItemComponent, [{
        type: Component,
        args: [{ selector: 'po-slide-item', template: "<div\r\n  #slideItem\r\n  class=\"po-slide-item\"\r\n  [class.po-slide-item-background-image]=\"!template && isIEOrEdge\"\r\n  [style.background-image]=\"!template && isIEOrEdge ? 'url(' + image + ')' : ''\"\r\n  [ngSwitch]=\"setLinkType()\"\r\n>\r\n  <!-- slide com link interno -->\r\n  <a *ngSwitchCase=\"'internalLink'\" class=\"po-slide-item-link\" [routerLink]=\"link\">\r\n    <ng-container [ngTemplateOutlet]=\"slideItemImage\" [ngTemplateOutletContext]=\"{ item: { alt: alt, image: image } }\">\r\n    </ng-container>\r\n  </a>\r\n  <!-- slide com link externo -->\r\n  <a *ngSwitchCase=\"'externalLink'\" class=\"po-slide-item-link\" [href]=\"link\">\r\n    <ng-container [ngTemplateOutlet]=\"slideItemImage\" [ngTemplateOutletContext]=\"{ item: { alt: alt, image: image } }\">\r\n    </ng-container>\r\n  </a>\r\n  <!-- slide sem link -->\r\n  <a\r\n    *ngSwitchCase=\"'noLink'\"\r\n    [ngClass]=\"action ? 'po-slide-item-link' : 'po-slide-item-no-link'\"\r\n    (click)=\"action ? action(data) : undefined\"\r\n  >\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"template ? slideItemTemplate : slideItemImage\"\r\n      [ngTemplateOutletContext]=\"{ item: { alt: alt, image: image, data: data } }\"\r\n    >\r\n    </ng-container>\r\n  </a>\r\n</div>\r\n\r\n<ng-template #slideItemTemplate let-item=\"item\" ; let-index=\"index\">\r\n  <div *ngIf=\"template\" class=\"po-slide-item-content\">\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"template.templateRef\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: item.data, index: index }\"\r\n    >\r\n    </ng-template>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #slideItemImage let-item=\"item\">\r\n  <img\r\n    *ngIf=\"item.image && !isIEOrEdge\"\r\n    class=\"po-slide-image\"\r\n    [alt]=\"item.alt\"\r\n    [src]=\"item.image\"\r\n    [style.height.px]=\"imageHeight\"\r\n  />\r\n</ng-template>\r\n" }]
    }], null, { itemElement: [{
            type: ViewChild,
            args: ['slideItem', { static: true }]
        }], action: [{
            type: Input,
            args: ['p-action']
        }], alt: [{
            type: Input,
            args: ['p-alt']
        }], data: [{
            type: Input,
            args: ['p-data']
        }], image: [{
            type: Input,
            args: ['p-image']
        }], imageHeight: [{
            type: Input,
            args: ['p-image-height']
        }], template: [{
            type: Input,
            args: ['p-template']
        }], link: [{
            type: Input,
            args: ['p-link']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2xpZGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tc2xpZGUvcG8tc2xpZGUtaXRlbS9wby1zbGlkZS1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zbGlkZS9wby1zbGlkZS1pdGVtL3BvLXNsaWRlLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7SUNNL0MsNEJBQWlGO0lBQy9FLDJCQUNlO0lBQ2pCLGlCQUFJOzs7O0lBSHlELHdDQUFtQjtJQUNoRSxlQUFtQztJQUFuQyxzQ0FBbUMsNkdBQUE7OztJQUluRCw2QkFBMkU7SUFDekUsMkJBQ2U7SUFDakIsaUJBQUk7Ozs7SUFIeUQsb0RBQWE7SUFDMUQsZUFBbUM7SUFBbkMsc0NBQW1DLDZHQUFBOzs7OztJQUluRCw2QkFJQztJQURDLDBKQUFTLCtCQUFTLDBCQUFZLEdBQUcsU0FBUyxDQUFBLElBQUM7SUFFM0MsMkJBSWU7SUFDakIsaUJBQUk7Ozs7O0lBUkYsd0ZBQW1FO0lBSWpFLGVBQWtFO0lBQWxFLDhEQUFrRSwwSEFBQTs7Ozs7SUFRdEUsK0JBQW9EO0lBQ2xELHlHQUljO0lBQ2hCLGlCQUFNOzs7Ozs7SUFKRixlQUF5QztJQUF6QywrREFBeUMsaUZBQUE7OztJQUY3QyxvRkFNTTs7O0lBTkEsc0NBQWM7OztJQVVwQiwwQkFNRTs7OztJQURBLG1EQUErQjtJQUYvQixrQ0FBZ0IseUNBQUE7OztJQUhsQixvRkFNRTs7OztJQUxDLDJEQUErQjs7QURyQ3BDOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUE0QkUsZUFBVSxHQUFRLFVBQVUsRUFBRSxDQUFDO0tBU2hDO0lBUEMsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7U0FDdkU7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzt3RkFoQ1Usb0JBQW9CO3VFQUFwQixvQkFBb0I7Ozs7OztRQ2pCakMsaUNBTUM7UUFFQyxpRUFHSTtRQUVKLGlFQUdJO1FBRUosaUVBVUk7UUFDTixpQkFBTTtRQUVOLG1IQVFjO1FBRWQsc0hBUWM7O1FBN0NaLG1HQUE4RTtRQUQ5RSxpRkFBZ0U7UUFFaEUsNENBQTBCO1FBR3RCLGVBQTRCO1FBQTVCLDZDQUE0QjtRQUs1QixlQUE0QjtRQUE1Qiw2Q0FBNEI7UUFNN0IsZUFBc0I7UUFBdEIsdUNBQXNCOzt1RkRGZCxvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSxlQUFlO2dCQUlpQixXQUFXO2tCQUFwRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHckIsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBR0QsR0FBRztrQkFBbEIsS0FBSzttQkFBQyxPQUFPO1lBR0csSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBR0csS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR1MsV0FBVztrQkFBbkMsS0FBSzttQkFBQyxnQkFBZ0I7WUFHRixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFHRixJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzSUVPckVkZ2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvU2xpZGVDb250ZW50VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3BvLXNsaWRlLWNvbnRlbnQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBjYWRhIGl0ZW0gZG8gcG8tc2xpZGUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXNsaWRlLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1zbGlkZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9TbGlkZUl0ZW1Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlSXRlbScsIHsgc3RhdGljOiB0cnVlIH0pIGl0ZW1FbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQcOnw6NvIGV4ZWN1dGFkYSBhbyBjbGljYXIgZW0gdW1hIGltYWdlbSAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb24nKSBhY3Rpb246IEZ1bmN0aW9uO1xyXG5cclxuICAvKiogVGV4dG8gYWx0ZXJuYXRpdm8gcXVhbmRvIGEgaW1hZ2VtIG7Do28gw6kgZW5jb250cmFkYSAqL1xyXG4gIEBJbnB1dCgncC1hbHQnKSBhbHQ6IHN0cmluZztcclxuXHJcbiAgLyoqIERhZG9zIHBhcmEgbyB0ZW1wbGF0ZSBjdXN0b21pemFkbyAqL1xyXG4gIEBJbnB1dCgncC1kYXRhJykgZGF0YTogQXJyYXk8YW55PjtcclxuXHJcbiAgLyoqIENhbWluaG8gZGEgaW1hZ2VtICovXHJcbiAgQElucHV0KCdwLWltYWdlJykgaW1hZ2U6IHN0cmluZztcclxuXHJcbiAgLyoqIEFsdHVyYSBkYSBpbWFnZW0gKi9cclxuICBASW5wdXQoJ3AtaW1hZ2UtaGVpZ2h0JykgaW1hZ2VIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRlbXBsYXRlIGN1c3RvbWl6YWRvICovXHJcbiAgQElucHV0KCdwLXRlbXBsYXRlJykgdGVtcGxhdGU6IFBvU2xpZGVDb250ZW50VGVtcGxhdGVEaXJlY3RpdmU7XHJcblxyXG4gIC8qKiBMaW5rIGV4ZWN1dGFkbyBhbyBjbGljYXIgZW0gdW1hIGltYWdlbSAqL1xyXG4gIEBJbnB1dCgncC1saW5rJykgbGluazogc3RyaW5nO1xyXG5cclxuICBpc0lFT3JFZGdlOiBhbnkgPSBpc0lFT3JFZGdlKCk7XHJcblxyXG4gIHNldExpbmtUeXBlKCkge1xyXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlICYmIHRoaXMubGluaykge1xyXG4gICAgICByZXR1cm4gdGhpcy5saW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/ICdleHRlcm5hbExpbmsnIDogJ2ludGVybmFsTGluayc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICdub0xpbmsnO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgI3NsaWRlSXRlbVxyXG4gIGNsYXNzPVwicG8tc2xpZGUtaXRlbVwiXHJcbiAgW2NsYXNzLnBvLXNsaWRlLWl0ZW0tYmFja2dyb3VuZC1pbWFnZV09XCIhdGVtcGxhdGUgJiYgaXNJRU9yRWRnZVwiXHJcbiAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiIXRlbXBsYXRlICYmIGlzSUVPckVkZ2UgPyAndXJsKCcgKyBpbWFnZSArICcpJyA6ICcnXCJcclxuICBbbmdTd2l0Y2hdPVwic2V0TGlua1R5cGUoKVwiXHJcbj5cclxuICA8IS0tIHNsaWRlIGNvbSBsaW5rIGludGVybm8gLS0+XHJcbiAgPGEgKm5nU3dpdGNoQ2FzZT1cIidpbnRlcm5hbExpbmsnXCIgY2xhc3M9XCJwby1zbGlkZS1pdGVtLWxpbmtcIiBbcm91dGVyTGlua109XCJsaW5rXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsaWRlSXRlbUltYWdlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgaXRlbTogeyBhbHQ6IGFsdCwgaW1hZ2U6IGltYWdlIH0gfVwiPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9hPlxyXG4gIDwhLS0gc2xpZGUgY29tIGxpbmsgZXh0ZXJubyAtLT5cclxuICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2V4dGVybmFsTGluaydcIiBjbGFzcz1cInBvLXNsaWRlLWl0ZW0tbGlua1wiIFtocmVmXT1cImxpbmtcIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGVJdGVtSW1hZ2VcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBpdGVtOiB7IGFsdDogYWx0LCBpbWFnZTogaW1hZ2UgfSB9XCI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2E+XHJcbiAgPCEtLSBzbGlkZSBzZW0gbGluayAtLT5cclxuICA8YVxyXG4gICAgKm5nU3dpdGNoQ2FzZT1cIidub0xpbmsnXCJcclxuICAgIFtuZ0NsYXNzXT1cImFjdGlvbiA/ICdwby1zbGlkZS1pdGVtLWxpbmsnIDogJ3BvLXNsaWRlLWl0ZW0tbm8tbGluaydcIlxyXG4gICAgKGNsaWNrKT1cImFjdGlvbiA/IGFjdGlvbihkYXRhKSA6IHVuZGVmaW5lZFwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZSA/IHNsaWRlSXRlbVRlbXBsYXRlIDogc2xpZGVJdGVtSW1hZ2VcIlxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBpdGVtOiB7IGFsdDogYWx0LCBpbWFnZTogaW1hZ2UsIGRhdGE6IGRhdGEgfSB9XCJcclxuICAgID5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI3NsaWRlSXRlbVRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIDsgbGV0LWluZGV4PVwiaW5kZXhcIj5cclxuICA8ZGl2ICpuZ0lmPVwidGVtcGxhdGVcIiBjbGFzcz1cInBvLXNsaWRlLWl0ZW0tY29udGVudFwiPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCJcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtLmRhdGEsIGluZGV4OiBpbmRleCB9XCJcclxuICAgID5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3NsaWRlSXRlbUltYWdlIGxldC1pdGVtPVwiaXRlbVwiPlxyXG4gIDxpbWdcclxuICAgICpuZ0lmPVwiaXRlbS5pbWFnZSAmJiAhaXNJRU9yRWRnZVwiXHJcbiAgICBjbGFzcz1cInBvLXNsaWRlLWltYWdlXCJcclxuICAgIFthbHRdPVwiaXRlbS5hbHRcIlxyXG4gICAgW3NyY109XCJpdGVtLmltYWdlXCJcclxuICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiaW1hZ2VIZWlnaHRcIlxyXG4gIC8+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==