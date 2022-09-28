import { Component, EventEmitter, ViewChild } from '@angular/core';
import { PoModalComponent } from '../../../components/po-modal/po-modal.component';
import { poHttpInterceptorDetailLiteralsDefault } from './po-http-interceptor-detail-literals.interface';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../components/po-accordion/po-accordion.component";
import * as i4 from "../../../components/po-accordion/po-accordion-item/po-accordion-item.component";
import * as i5 from "../../../components/po-modal/po-modal.component";
import * as i6 from "../../../components/po-tag/po-tag.component";
function PoHttpInterceptorDetailComponent_po_accordion_2_po_accordion_item_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0) { return { detail: a0 }; };
function PoHttpInterceptorDetailComponent_po_accordion_2_po_accordion_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-accordion-item", 7);
    i0.ɵɵtemplate(1, PoHttpInterceptorDetailComponent_po_accordion_2_po_accordion_item_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵproperty("p-label", ctx_r5.formatDetailItemTitle(detail_r6));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, detail_r6));
} }
function PoHttpInterceptorDetailComponent_po_accordion_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-accordion", 5);
    i0.ɵɵtemplate(1, PoHttpInterceptorDetailComponent_po_accordion_2_po_accordion_item_1_Template, 2, 5, "po-accordion-item", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.details);
} }
const _c1 = function () { return {}; };
function PoHttpInterceptorDetailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, ctx_r2.details[0] || i0.ɵɵpureFunction0(2, _c1)));
} }
function PoHttpInterceptorDetailComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "po-tag", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r8 = i0.ɵɵnextContext().detail;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-color", ctx_r9.typeColor(detail_r8.type))("p-value", ctx_r9.typeValue(detail_r8.type));
} }
function PoHttpInterceptorDetailComponent_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const detail_r8 = i0.ɵɵnextContext().detail;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(detail_r8.code);
} }
function PoHttpInterceptorDetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoHttpInterceptorDetailComponent_ng_template_5_div_0_Template, 2, 2, "div", 9);
    i0.ɵɵtemplate(1, PoHttpInterceptorDetailComponent_ng_template_5_p_1_Template, 3, 1, "p", 10);
    i0.ɵɵelementStart(2, "div", 1)(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const detail_r8 = ctx.detail;
    i0.ɵɵproperty("ngIf", detail_r8.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", detail_r8.detailTitle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(detail_r8.detailedMessage);
} }
export const colors = { success: 'color-11', error: 'color-07', warning: 'color-08', info: '' };
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a modal de detalhes exibida pelo interceptor
 */
export class PoHttpInterceptorDetailComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.closed = new EventEmitter();
        this.details = [];
        this.language = this.languageService.getShortLanguage();
        this.literals = poHttpInterceptorDetailLiteralsDefault[this.language];
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.primaryAction = {
            action: () => this.close(),
            label: this.literals.closeButton
        };
    }
    set detail(details) {
        if (details && details.length) {
            this.details = this.filterByValidDetails(details);
        }
        this.title = this.formatTitle(this.details);
    }
    close() {
        this.modal.close();
        this.closed.emit();
    }
    formatDetailItemTitle(detail) {
        return detail.detailTitle
            ? detail.detailTitle
            : detail.code
                ? `${detail.code} - ${detail.message}`
                : detail.message;
    }
    open() {
        this.modal.open();
    }
    typeColor(type) {
        return colors[type];
    }
    typeValue(type) {
        return poHttpInterceptorDetailLiteralsDefault[this.language][type] || type;
    }
    addValidDetail(newDetails, detail) {
        return detail.message ? newDetails.concat(this.getValidDetailProperties(detail)) : newDetails;
    }
    getValidDetailProperties({ code, message, detailedMessage, type, detailTitle }) {
        return detailTitle
            ? { code, message, detailedMessage, type, detailTitle }
            : { code, message, detailedMessage, type };
    }
    filterByValidDetails(details) {
        return details.reduce((newDetails, detail) => this.addValidDetail(newDetails, detail), []);
    }
    formatTitle(details) {
        return details.length > 1
            ? `${this.literals.details} (${details.length})`
            : details.length === 1
                ? this.formatDetailItemTitle(details[0])
                : this.literals.detail;
    }
}
PoHttpInterceptorDetailComponent.ɵfac = function PoHttpInterceptorDetailComponent_Factory(t) { return new (t || PoHttpInterceptorDetailComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoHttpInterceptorDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoHttpInterceptorDetailComponent, selectors: [["po-http-interceptor-detail"]], viewQuery: function PoHttpInterceptorDetailComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoModalComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
    } }, decls: 7, vars: 4, consts: [["p-hide-close", "", "p-size", "lg", 3, "p-primary-action", "p-title"], [1, "po-row"], ["class", "po-md-12 po-mt-1 po-mb-1", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["body", ""], [1, "po-md-12", "po-mt-1", "po-mb-1"], [3, "p-label", 4, "ngFor", "ngForOf"], [3, "p-label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "po-row po-mb-1", 4, "ngIf"], [4, "ngIf"], [1, "po-row", "po-mb-1"], [3, "p-color", "p-value"]], template: function PoHttpInterceptorDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoHttpInterceptorDetailComponent_po_accordion_2_Template, 2, 1, "po-accordion", 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(3, PoHttpInterceptorDetailComponent_ng_template_3_Template, 1, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PoHttpInterceptorDetailComponent_ng_template_5_Template, 5, 3, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("p-primary-action", ctx.primaryAction)("p-title", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.details.length > 1)("ngIfElse", _r1);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.PoAccordionComponent, i4.PoAccordionItemComponent, i5.PoModalComponent, i6.PoTagComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpInterceptorDetailComponent, [{
        type: Component,
        args: [{ selector: 'po-http-interceptor-detail', template: "<po-modal p-hide-close p-size=\"lg\" [p-primary-action]=\"primaryAction\" [p-title]=\"title\">\r\n  <div class=\"po-row\">\r\n    <po-accordion class=\"po-md-12 po-mt-1 po-mb-1\" *ngIf=\"details.length > 1; else elseBlock\">\r\n      <po-accordion-item *ngFor=\"let detail of details\" [p-label]=\"formatDetailItemTitle(detail)\">\r\n        <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{detail}\"></ng-template>\r\n      </po-accordion-item>\r\n    </po-accordion>\r\n  </div>\r\n</po-modal>\r\n\r\n<ng-template #elseBlock>\r\n  <ng-container [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{ detail: details[0] || {} }\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #body let-detail=\"detail\">\r\n  <div *ngIf=\"detail.type\" class=\"po-row po-mb-1\">\r\n    <po-tag [p-color]=\"typeColor(detail.type)\" [p-value]=\"typeValue(detail.type)\"></po-tag>\r\n  </div>\r\n\r\n  <p *ngIf=\"detail.detailTitle\">\r\n    <strong>{{ detail.code }}</strong>\r\n  </p>\r\n\r\n  <div class=\"po-row\">\r\n    <p>{{ detail.detailedMessage }}</p>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { modal: [{
            type: ViewChild,
            args: [PoModalComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1pbnRlcmNlcHRvci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9pbnRlcmNlcHRvcnMvcG8taHR0cC1pbnRlcmNlcHRvci9wby1odHRwLWludGVyY2VwdG9yLWRldGFpbC9wby1odHRwLWludGVyY2VwdG9yLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2ludGVyY2VwdG9ycy9wby1odHRwLWludGVyY2VwdG9yL3BvLWh0dHAtaW50ZXJjZXB0b3ItZGV0YWlsL3BvLWh0dHAtaW50ZXJjZXB0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUduRixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7Ozs7Ozs7SUNIbkcsNENBQTRGO0lBQzFGLG9JQUEwRjtJQUM1RixpQkFBb0I7Ozs7O0lBRjhCLGlFQUF5QztJQUM1RSxlQUF5QjtJQUF6QixzQ0FBeUIsa0VBQUE7OztJQUYxQyx1Q0FBMEY7SUFDeEYsNEhBRW9CO0lBQ3RCLGlCQUFlOzs7SUFIeUIsZUFBVTtJQUFWLHdDQUFVOzs7O0lBUXBELDJCQUFnSDs7OztJQUFsRyxzQ0FBeUIsd0dBQUE7OztJQUl2QywrQkFBZ0Q7SUFDOUMsNkJBQXVGO0lBQ3pGLGlCQUFNOzs7O0lBREksZUFBa0M7SUFBbEMsMERBQWtDLDZDQUFBOzs7SUFHNUMseUJBQThCLGFBQUE7SUFDcEIsWUFBaUI7SUFBQSxpQkFBUyxFQUFBOzs7SUFBMUIsZUFBaUI7SUFBakIsb0NBQWlCOzs7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LElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxPQUF1QztRQUNsRSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU8sV0FBVyxDQUFDLE9BQXVDO1FBQ3pELE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQUc7WUFDaEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDOztnSEF2RVUsZ0NBQWdDO21GQUFoQyxnQ0FBZ0M7dUJBQ2hDLGdCQUFnQjs7Ozs7UUN2QjdCLG1DQUF3RixhQUFBO1FBRXBGLG1HQUllO1FBQ2pCLGlCQUFNLEVBQUE7UUFHUixrSUFFYztRQUVkLGtJQVljOzs7UUExQnFCLG9EQUFrQyxzQkFBQTtRQUVqQixlQUEwQjtRQUExQiw2Q0FBMEIsaUJBQUE7O3VGRG9CakUsZ0NBQWdDO2NBSjVDLFNBQVM7MkJBQ0UsNEJBQTRCO29FQUlTLEtBQUs7a0JBQW5ELFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Nb2RhbEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcG8tbW9kYWwvcG8tbW9kYWwtYWN0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BvLW1vZGFsL3BvLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBQb0h0dHBJbnRlcmNlcHRvckRldGFpbCB9IGZyb20gJy4vcG8taHR0cC1pbnRlcmNlcHRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgcG9IdHRwSW50ZXJjZXB0b3JEZXRhaWxMaXRlcmFsc0RlZmF1bHQgfSBmcm9tICcuL3BvLWh0dHAtaW50ZXJjZXB0b3ItZGV0YWlsLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY29sb3JzID0geyBzdWNjZXNzOiAnY29sb3ItMTEnLCBlcnJvcjogJ2NvbG9yLTA3Jywgd2FybmluZzogJ2NvbG9yLTA4JywgaW5mbzogJycgfTtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBhIG1vZGFsIGRlIGRldGFsaGVzIGV4aWJpZGEgcGVsbyBpbnRlcmNlcHRvclxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1odHRwLWludGVyY2VwdG9yLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWh0dHAtaW50ZXJjZXB0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9IdHRwSW50ZXJjZXB0b3JEZXRhaWxDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoUG9Nb2RhbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgbW9kYWw6IFBvTW9kYWxDb21wb25lbnQ7XHJcblxyXG4gIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGRldGFpbHM6IEFycmF5PFBvSHR0cEludGVyY2VwdG9yRGV0YWlsPiA9IFtdO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgcHJpdmF0ZSBsaXRlcmFscyA9IHBvSHR0cEludGVyY2VwdG9yRGV0YWlsTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xyXG4gIHByaW1hcnlBY3Rpb246IFBvTW9kYWxBY3Rpb24gPSB7XHJcbiAgICBhY3Rpb246ICgpID0+IHRoaXMuY2xvc2UoKSxcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmNsb3NlQnV0dG9uXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICBzZXQgZGV0YWlsKGRldGFpbHM6IEFycmF5PFBvSHR0cEludGVyY2VwdG9yRGV0YWlsPikge1xyXG4gICAgaWYgKGRldGFpbHMgJiYgZGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5kZXRhaWxzID0gdGhpcy5maWx0ZXJCeVZhbGlkRGV0YWlscyhkZXRhaWxzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5mb3JtYXRUaXRsZSh0aGlzLmRldGFpbHMpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREZXRhaWxJdGVtVGl0bGUoZGV0YWlsKSB7XHJcbiAgICByZXR1cm4gZGV0YWlsLmRldGFpbFRpdGxlXHJcbiAgICAgID8gZGV0YWlsLmRldGFpbFRpdGxlXHJcbiAgICAgIDogZGV0YWlsLmNvZGVcclxuICAgICAgPyBgJHtkZXRhaWwuY29kZX0gLSAke2RldGFpbC5tZXNzYWdlfWBcclxuICAgICAgOiBkZXRhaWwubWVzc2FnZTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIHR5cGVDb2xvcih0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbG9yc1t0eXBlXTtcclxuICB9XHJcblxyXG4gIHR5cGVWYWx1ZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHBvSHR0cEludGVyY2VwdG9yRGV0YWlsTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdW3R5cGVdIHx8IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFZhbGlkRGV0YWlsKG5ld0RldGFpbHM6IEFycmF5PFBvSHR0cEludGVyY2VwdG9yRGV0YWlsPiwgZGV0YWlsOiBQb0h0dHBJbnRlcmNlcHRvckRldGFpbCkge1xyXG4gICAgcmV0dXJuIGRldGFpbC5tZXNzYWdlID8gbmV3RGV0YWlscy5jb25jYXQodGhpcy5nZXRWYWxpZERldGFpbFByb3BlcnRpZXMoZGV0YWlsKSkgOiBuZXdEZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWxpZERldGFpbFByb3BlcnRpZXMoeyBjb2RlLCBtZXNzYWdlLCBkZXRhaWxlZE1lc3NhZ2UsIHR5cGUsIGRldGFpbFRpdGxlIH06IFBvSHR0cEludGVyY2VwdG9yRGV0YWlsKSB7XHJcbiAgICByZXR1cm4gZGV0YWlsVGl0bGVcclxuICAgICAgPyB7IGNvZGUsIG1lc3NhZ2UsIGRldGFpbGVkTWVzc2FnZSwgdHlwZSwgZGV0YWlsVGl0bGUgfVxyXG4gICAgICA6IHsgY29kZSwgbWVzc2FnZSwgZGV0YWlsZWRNZXNzYWdlLCB0eXBlIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlckJ5VmFsaWREZXRhaWxzKGRldGFpbHM6IEFycmF5PFBvSHR0cEludGVyY2VwdG9yRGV0YWlsPikge1xyXG4gICAgcmV0dXJuIGRldGFpbHMucmVkdWNlKChuZXdEZXRhaWxzLCBkZXRhaWwpID0+IHRoaXMuYWRkVmFsaWREZXRhaWwobmV3RGV0YWlscywgZGV0YWlsKSwgW10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRUaXRsZShkZXRhaWxzOiBBcnJheTxQb0h0dHBJbnRlcmNlcHRvckRldGFpbD4pIHtcclxuICAgIHJldHVybiBkZXRhaWxzLmxlbmd0aCA+IDFcclxuICAgICAgPyBgJHt0aGlzLmxpdGVyYWxzLmRldGFpbHN9ICgke2RldGFpbHMubGVuZ3RofSlgXHJcbiAgICAgIDogZGV0YWlscy5sZW5ndGggPT09IDFcclxuICAgICAgPyB0aGlzLmZvcm1hdERldGFpbEl0ZW1UaXRsZShkZXRhaWxzWzBdKVxyXG4gICAgICA6IHRoaXMubGl0ZXJhbHMuZGV0YWlsO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tbW9kYWwgcC1oaWRlLWNsb3NlIHAtc2l6ZT1cImxnXCIgW3AtcHJpbWFyeS1hY3Rpb25dPVwicHJpbWFyeUFjdGlvblwiIFtwLXRpdGxlXT1cInRpdGxlXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgPHBvLWFjY29yZGlvbiBjbGFzcz1cInBvLW1kLTEyIHBvLW10LTEgcG8tbWItMVwiICpuZ0lmPVwiZGV0YWlscy5sZW5ndGggPiAxOyBlbHNlIGVsc2VCbG9ja1wiPlxyXG4gICAgICA8cG8tYWNjb3JkaW9uLWl0ZW0gKm5nRm9yPVwibGV0IGRldGFpbCBvZiBkZXRhaWxzXCIgW3AtbGFiZWxdPVwiZm9ybWF0RGV0YWlsSXRlbVRpdGxlKGRldGFpbClcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGV0YWlsfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvcG8tYWNjb3JkaW9uLWl0ZW0+XHJcbiAgICA8L3BvLWFjY29yZGlvbj5cclxuICA8L2Rpdj5cclxuPC9wby1tb2RhbD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG4gIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRldGFpbDogZGV0YWlsc1swXSB8fCB7fSB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2JvZHkgbGV0LWRldGFpbD1cImRldGFpbFwiPlxyXG4gIDxkaXYgKm5nSWY9XCJkZXRhaWwudHlwZVwiIGNsYXNzPVwicG8tcm93IHBvLW1iLTFcIj5cclxuICAgIDxwby10YWcgW3AtY29sb3JdPVwidHlwZUNvbG9yKGRldGFpbC50eXBlKVwiIFtwLXZhbHVlXT1cInR5cGVWYWx1ZShkZXRhaWwudHlwZSlcIj48L3BvLXRhZz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHAgKm5nSWY9XCJkZXRhaWwuZGV0YWlsVGl0bGVcIj5cclxuICAgIDxzdHJvbmc+e3sgZGV0YWlsLmNvZGUgfX08L3N0cm9uZz5cclxuICA8L3A+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgIDxwPnt7IGRldGFpbC5kZXRhaWxlZE1lc3NhZ2UgfX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==