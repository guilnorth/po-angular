import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isExternalLink } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function PoTableColumnLinkComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.value);
} }
function PoTableColumnLinkComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function PoTableColumnLinkComponent_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.action(ctx_r4.value, ctx_r4.row)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.value);
} }
function PoTableColumnLinkComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r2.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.value);
} }
function PoTableColumnLinkComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r3.link);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.value);
} }
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por exibir link nas colunas.
 */
export class PoTableColumnLinkComponent {
    get type() {
        if (this.disabled) {
            return 'disabled';
        }
        if (this.action) {
            return 'action';
        }
        if (isExternalLink(this.link)) {
            return 'externalLink';
        }
        return 'internalLink';
    }
}
PoTableColumnLinkComponent.ɵfac = function PoTableColumnLinkComponent_Factory(t) { return new (t || PoTableColumnLinkComponent)(); };
PoTableColumnLinkComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableColumnLinkComponent, selectors: [["po-table-column-link"]], inputs: { action: ["p-action", "action"], disabled: ["p-disabled", "disabled"], link: ["p-link", "link"], row: ["p-row", "row"], value: ["p-value", "value"] }, decls: 5, vars: 5, consts: [[3, "ngSwitch"], ["class", "po-table-link-disabled", 4, "ngSwitchCase"], ["class", "po-table-link", 3, "click", 4, "ngSwitchCase"], ["class", "po-table-link", "target", "_blank", 3, "href", 4, "ngSwitchCase"], ["class", "po-table-link", 3, "routerLink", 4, "ngSwitchCase"], [1, "po-table-link-disabled"], [1, "po-table-link", 3, "click"], ["target", "_blank", 1, "po-table-link", 3, "href"], [1, "po-table-link", 3, "routerLink"]], template: function PoTableColumnLinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PoTableColumnLinkComponent_p_1_Template, 2, 1, "p", 1);
        i0.ɵɵtemplate(2, PoTableColumnLinkComponent_a_2_Template, 2, 1, "a", 2);
        i0.ɵɵtemplate(3, PoTableColumnLinkComponent_a_3_Template, 2, 2, "a", 3);
        i0.ɵɵtemplate(4, PoTableColumnLinkComponent_a_4_Template, 2, 2, "a", 4);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "disabled");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "action");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "externalLink");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "internalLink");
    } }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i2.RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableColumnLinkComponent, [{
        type: Component,
        args: [{ selector: 'po-table-column-link', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container [ngSwitch]=\"type\">\r\n  <p *ngSwitchCase=\"'disabled'\" class=\"po-table-link-disabled\">{{ value }}</p>\r\n  <a *ngSwitchCase=\"'action'\" class=\"po-table-link\" (click)=\"action(value, row)\">{{ value }}</a>\r\n  <a *ngSwitchCase=\"'externalLink'\" class=\"po-table-link\" [href]=\"link\" target=\"_blank\">{{ value }}</a>\r\n  <a *ngSwitchCase=\"'internalLink'\" class=\"po-table-link\" [routerLink]=\"link\">{{ value }}</a>\r\n</ng-container>\r\n" }]
    }], null, { action: [{
            type: Input,
            args: ['p-action']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], link: [{
            type: Input,
            args: ['p-link']
        }], row: [{
            type: Input,
            args: ['p-row']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtY29sdW1uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRhYmxlL3BvLXRhYmxlLWNvbHVtbi1saW5rL3BvLXRhYmxlLWNvbHVtbi1saW5rLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1jb2x1bW4tbGluay9wby10YWJsZS1jb2x1bW4tbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0lDRG5ELDRCQUE2RDtJQUFBLFlBQVc7SUFBQSxpQkFBSTs7O0lBQWYsZUFBVztJQUFYLGtDQUFXOzs7O0lBQ3hFLDRCQUErRTtJQUE3QixnS0FBUyxlQUFBLHVDQUFrQixDQUFBLElBQUM7SUFBQyxZQUFXO0lBQUEsaUJBQUk7OztJQUFmLGVBQVc7SUFBWCxrQ0FBVzs7O0lBQzFGLDRCQUFzRjtJQUFBLFlBQVc7SUFBQSxpQkFBSTs7O0lBQTdDLG9EQUFhO0lBQWlCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBQ2pHLDRCQUE0RTtJQUFBLFlBQVc7SUFBQSxpQkFBSTs7O0lBQW5DLHdDQUFtQjtJQUFDLGVBQVc7SUFBWCxrQ0FBVzs7QURBekY7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLDBCQUEwQjtJQVdyQyxJQUFJLElBQUk7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUVELElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7O29HQXpCVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ2hCdkMsZ0NBQWdDO1FBQzlCLHVFQUE0RTtRQUM1RSx1RUFBOEY7UUFDOUYsdUVBQXFHO1FBQ3JHLHVFQUEyRjtRQUM3RiwwQkFBZTs7UUFMRCxtQ0FBaUI7UUFDekIsZUFBd0I7UUFBeEIseUNBQXdCO1FBQ3hCLGVBQXNCO1FBQXRCLHVDQUFzQjtRQUN0QixlQUE0QjtRQUE1Qiw2Q0FBNEI7UUFDNUIsZUFBNEI7UUFBNUIsNkNBQTRCOzt1RkRZckIsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0Usc0JBQXNCLG1CQUVmLHVCQUF1QixDQUFDLE1BQU07Z0JBRzVCLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUVJLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVGLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUVDLEdBQUc7a0JBQWxCLEtBQUs7bUJBQUMsT0FBTztZQUVJLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0V4dGVybmFsTGluayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSByZXNwb25zw6F2ZWwgcG9yIGV4aWJpciBsaW5rIG5hcyBjb2x1bmFzLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10YWJsZS1jb2x1bW4tbGluaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRhYmxlLWNvbHVtbi1saW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9UYWJsZUNvbHVtbkxpbmtDb21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1hY3Rpb24nKSBhY3Rpb246IEZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWxpbmsnKSBsaW5rOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncC1yb3cnKSByb3c7XHJcblxyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuICdkaXNhYmxlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiAnYWN0aW9uJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNFeHRlcm5hbExpbmsodGhpcy5saW5rKSkge1xyXG4gICAgICByZXR1cm4gJ2V4dGVybmFsTGluayc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICdpbnRlcm5hbExpbmsnO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0eXBlXCI+XHJcbiAgPHAgKm5nU3dpdGNoQ2FzZT1cIidkaXNhYmxlZCdcIiBjbGFzcz1cInBvLXRhYmxlLWxpbmstZGlzYWJsZWRcIj57eyB2YWx1ZSB9fTwvcD5cclxuICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2FjdGlvbidcIiBjbGFzcz1cInBvLXRhYmxlLWxpbmtcIiAoY2xpY2spPVwiYWN0aW9uKHZhbHVlLCByb3cpXCI+e3sgdmFsdWUgfX08L2E+XHJcbiAgPGEgKm5nU3dpdGNoQ2FzZT1cIidleHRlcm5hbExpbmsnXCIgY2xhc3M9XCJwby10YWJsZS1saW5rXCIgW2hyZWZdPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IHZhbHVlIH19PC9hPlxyXG4gIDxhICpuZ1N3aXRjaENhc2U9XCInaW50ZXJuYWxMaW5rJ1wiIGNsYXNzPVwicG8tdGFibGUtbGlua1wiIFtyb3V0ZXJMaW5rXT1cImxpbmtcIj57eyB2YWx1ZSB9fTwvYT5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==