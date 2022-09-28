import { ChangeDetectionStrategy, Component } from '@angular/core';
import { isExternalLink } from '../../utils/util';
import { PoInfoBaseComponent } from './po-info-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function PoInfoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoInfoComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoInfoComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PoInfoComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(11);
    const _r7 = i0.ɵɵreference(13);
    i0.ɵɵproperty("ngIf", ctx_r2.isExternalLink)("ngIfThen", _r5)("ngIfElse", _r7);
} }
function PoInfoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.value);
} }
function PoInfoComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r6.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.value);
} }
function PoInfoComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r8.url);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r8.value);
} }
/**
 * @docsExtends PoInfoBaseComponent
 *
 * @description
 *
 * Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
 * valor na parte inferior. Facilita a exibição de dados pois vem com layout padrão PO.
 *
 * @example
 *
 * <example name="po-info-basic" title="PO Info Basic">
 *  <file name="sample-po-info-basic/sample-po-info-basic.component.html"> </file>
 *  <file name="sample-po-info-basic/sample-po-info-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-info-labs" title="PO Info Labs">
 *  <file name="sample-po-info-labs/sample-po-info-labs.component.html"> </file>
 *  <file name="sample-po-info-labs/sample-po-info-labs.component.ts"> </file>
 * </example>
 */
export class PoInfoComponent extends PoInfoBaseComponent {
    get isExternalLink() {
        return isExternalLink(this.url);
    }
}
PoInfoComponent.ɵfac = /*@__PURE__*/ function () { let ɵPoInfoComponent_BaseFactory; return function PoInfoComponent_Factory(t) { return (ɵPoInfoComponent_BaseFactory || (ɵPoInfoComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PoInfoComponent)))(t || PoInfoComponent); }; }();
PoInfoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoInfoComponent, selectors: [["po-info"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 16, consts: [[1, "po-info"], [1, "po-info-container-title", 3, "ngClass"], [1, "po-info-label"], [3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["infoLink", ""], ["infoValue", ""], ["externalLink", ""], ["internalLink", ""], [1, "po-info-value"], ["target", "_blank", 1, "po-info-value", "po-info-link", 3, "href"], [1, "po-info-value", "po-info-link", 3, "routerLink"]], template: function PoInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, PoInfoComponent_ng_container_5_Template, 1, 0, "ng-container", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, PoInfoComponent_ng_template_6_Template, 1, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, PoInfoComponent_ng_template_8_Template, 2, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, PoInfoComponent_ng_template_10_Template, 2, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, PoInfoComponent_ng_template_12_Template, 2, 2, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(7);
        const _r3 = i0.ɵɵreference(9);
        i0.ɵɵclassProp("po-row", ctx.orientation === ctx.poInfoOrientation.Horizontal && ctx.labelSize);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-info-label-horizontal", ctx.orientation === ctx.poInfoOrientation.Horizontal)("po-text-nowrap", ctx.orientation === ctx.poInfoOrientation.Horizontal && !ctx.labelSize);
        i0.ɵɵproperty("ngClass", ctx.labelSize && ctx.orientation === ctx.poInfoOrientation.Horizontal ? "po-sm-" + ctx.labelSize : "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.orientation === ctx.poInfoOrientation.Horizontal ? ctx.label + ":" : ctx.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-info-container-content", ctx.orientation !== ctx.poInfoOrientation.Horizontal)("po-info-value-horizontal", ctx.orientation === ctx.poInfoOrientation.Horizontal);
        i0.ɵɵproperty("ngClass", ctx.labelSize && ctx.orientation === ctx.poInfoOrientation.Horizontal ? "po-sm-" + (12 - ctx.labelSize) : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.url)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, dependencies: [i1.NgClass, i1.NgIf, i2.RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoInfoComponent, [{
        type: Component,
        args: [{ selector: 'po-info', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"po-info\" [class.po-row]=\"orientation === poInfoOrientation.Horizontal && labelSize\">\r\n  <div\r\n    class=\"po-info-container-title\"\r\n    [ngClass]=\"labelSize && orientation === poInfoOrientation.Horizontal ? 'po-sm-' + labelSize : ''\"\r\n    [class.po-info-label-horizontal]=\"orientation === poInfoOrientation.Horizontal\"\r\n    [class.po-text-nowrap]=\"orientation === poInfoOrientation.Horizontal && !labelSize\"\r\n  >\r\n    <span class=\"po-info-label\">\r\n      {{ orientation === poInfoOrientation.Horizontal ? label + ':' : label }}\r\n    </span>\r\n  </div>\r\n\r\n  <div\r\n    [ngClass]=\"labelSize && orientation === poInfoOrientation.Horizontal ? 'po-sm-' + (12 - labelSize) : ''\"\r\n    [class.po-info-container-content]=\"orientation !== poInfoOrientation.Horizontal\"\r\n    [class.po-info-value-horizontal]=\"orientation === poInfoOrientation.Horizontal\"\r\n  >\r\n    <ng-container *ngIf=\"url; then infoLink; else infoValue\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #infoLink>\r\n  <ng-container *ngIf=\"isExternalLink; then externalLink; else internalLink\"> </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #infoValue>\r\n  <span class=\"po-info-value\">{{ value }}</span>\r\n</ng-template>\r\n\r\n<ng-template #externalLink>\r\n  <a class=\"po-info-value po-info-link\" [href]=\"url\" target=\"_blank\">{{ value }}</a>\r\n</ng-template>\r\n\r\n<ng-template #internalLink>\r\n  <a class=\"po-info-value po-info-link\" [routerLink]=\"url\">{{ value }}</a>\r\n</ng-template>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8taW5mby9wby1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1pbmZvL3BvLWluZm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0lDYTNELHdCQUF3RTs7O0lBSzFFLHdCQUEyRjs7O0lBQTNGLGdHQUEyRjs7Ozs7SUFBNUUsNENBQXNCLGlCQUFBLGlCQUFBOzs7SUFJckMsK0JBQTRCO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLGtDQUFXOzs7SUFJdkMsNkJBQW1FO0lBQUEsWUFBVztJQUFBLGlCQUFJOzs7SUFBNUMsbURBQVk7SUFBaUIsZUFBVztJQUFYLGtDQUFXOzs7SUFJOUUsNkJBQXlEO0lBQUEsWUFBVztJQUFBLGlCQUFJOzs7SUFBbEMsdUNBQWtCO0lBQUMsZUFBVztJQUFYLGtDQUFXOztBRDVCdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFNSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxtQkFBbUI7SUFDdEQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzttT0FIVSxlQUFlLFNBQWYsZUFBZTtrRUFBZixlQUFlO1FDL0I1Qiw4QkFBZ0csYUFBQSxjQUFBO1FBUTFGLFlBQ0Y7UUFBQSxpQkFBTyxFQUFBO1FBR1QsOEJBSUM7UUFDQyxrRkFBd0U7UUFDMUUsaUJBQU0sRUFBQTtRQUdSLGlIQUVjO1FBRWQsaUhBRWM7UUFFZCxtSEFFYztRQUVkLG1IQUVjOzs7O1FBbkNPLCtGQUEwRTtRQUkzRixlQUErRTtRQUEvRSxnR0FBK0UsMEZBQUE7UUFEL0UsK0hBQWlHO1FBSy9GLGVBQ0Y7UUFERSxtSEFDRjtRQUtBLGVBQWdGO1FBQWhGLGlHQUFnRixrRkFBQTtRQURoRixzSUFBd0c7UUFJekYsZUFBVztRQUFYLDhCQUFXLGlCQUFBLGlCQUFBOzt1RkRjakIsZUFBZTtjQUwzQixTQUFTOzJCQUNFLFNBQVMsbUJBRUYsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzRXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb0luZm9CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1pbmZvLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9JbmZvQmFzZUNvbXBvbmVudFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0ZSBjb21wb25lbnRlIHRlbSBjb21vIG9iamV0aXZvIHJlbmRlcml6YXIgdmFsb3JlcyBuYSB0ZWxhIG5vIGVzdGlsbyBsYWJlbCBuYSBwYXJ0ZSBzdXBlcmlvciBlXHJcbiAqIHZhbG9yIG5hIHBhcnRlIGluZmVyaW9yLiBGYWNpbGl0YSBhIGV4aWJpw6fDo28gZGUgZGFkb3MgcG9pcyB2ZW0gY29tIGxheW91dCBwYWRyw6NvIFBPLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8taW5mby1iYXNpY1wiIHRpdGxlPVwiUE8gSW5mbyBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1pbmZvLWJhc2ljL3NhbXBsZS1wby1pbmZvLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8taW5mby1iYXNpYy9zYW1wbGUtcG8taW5mby1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1pbmZvLWxhYnNcIiB0aXRsZT1cIlBPIEluZm8gTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1pbmZvLWxhYnMvc2FtcGxlLXBvLWluZm8tbGFicy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWluZm8tbGFicy9zYW1wbGUtcG8taW5mby1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8taW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0luZm9Db21wb25lbnQgZXh0ZW5kcyBQb0luZm9CYXNlQ29tcG9uZW50IHtcclxuICBnZXQgaXNFeHRlcm5hbExpbmsoKSB7XHJcbiAgICByZXR1cm4gaXNFeHRlcm5hbExpbmsodGhpcy51cmwpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8taW5mb1wiIFtjbGFzcy5wby1yb3ddPVwib3JpZW50YXRpb24gPT09IHBvSW5mb09yaWVudGF0aW9uLkhvcml6b250YWwgJiYgbGFiZWxTaXplXCI+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJwby1pbmZvLWNvbnRhaW5lci10aXRsZVwiXHJcbiAgICBbbmdDbGFzc109XCJsYWJlbFNpemUgJiYgb3JpZW50YXRpb24gPT09IHBvSW5mb09yaWVudGF0aW9uLkhvcml6b250YWwgPyAncG8tc20tJyArIGxhYmVsU2l6ZSA6ICcnXCJcclxuICAgIFtjbGFzcy5wby1pbmZvLWxhYmVsLWhvcml6b250YWxdPVwib3JpZW50YXRpb24gPT09IHBvSW5mb09yaWVudGF0aW9uLkhvcml6b250YWxcIlxyXG4gICAgW2NsYXNzLnBvLXRleHQtbm93cmFwXT1cIm9yaWVudGF0aW9uID09PSBwb0luZm9PcmllbnRhdGlvbi5Ib3Jpem9udGFsICYmICFsYWJlbFNpemVcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8taW5mby1sYWJlbFwiPlxyXG4gICAgICB7eyBvcmllbnRhdGlvbiA9PT0gcG9JbmZvT3JpZW50YXRpb24uSG9yaXpvbnRhbCA/IGxhYmVsICsgJzonIDogbGFiZWwgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdlxyXG4gICAgW25nQ2xhc3NdPVwibGFiZWxTaXplICYmIG9yaWVudGF0aW9uID09PSBwb0luZm9PcmllbnRhdGlvbi5Ib3Jpem9udGFsID8gJ3BvLXNtLScgKyAoMTIgLSBsYWJlbFNpemUpIDogJydcIlxyXG4gICAgW2NsYXNzLnBvLWluZm8tY29udGFpbmVyLWNvbnRlbnRdPVwib3JpZW50YXRpb24gIT09IHBvSW5mb09yaWVudGF0aW9uLkhvcml6b250YWxcIlxyXG4gICAgW2NsYXNzLnBvLWluZm8tdmFsdWUtaG9yaXpvbnRhbF09XCJvcmllbnRhdGlvbiA9PT0gcG9JbmZvT3JpZW50YXRpb24uSG9yaXpvbnRhbFwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVybDsgdGhlbiBpbmZvTGluazsgZWxzZSBpbmZvVmFsdWVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2luZm9MaW5rPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0V4dGVybmFsTGluazsgdGhlbiBleHRlcm5hbExpbms7IGVsc2UgaW50ZXJuYWxMaW5rXCI+IDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNpbmZvVmFsdWU+XHJcbiAgPHNwYW4gY2xhc3M9XCJwby1pbmZvLXZhbHVlXCI+e3sgdmFsdWUgfX08L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2V4dGVybmFsTGluaz5cclxuICA8YSBjbGFzcz1cInBvLWluZm8tdmFsdWUgcG8taW5mby1saW5rXCIgW2hyZWZdPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgdmFsdWUgfX08L2E+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2ludGVybmFsTGluaz5cclxuICA8YSBjbGFzcz1cInBvLWluZm8tdmFsdWUgcG8taW5mby1saW5rXCIgW3JvdXRlckxpbmtdPVwidXJsXCI+e3sgdmFsdWUgfX08L2E+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==