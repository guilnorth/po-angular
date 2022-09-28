import { Component, EventEmitter, Input, Output } from '@angular/core';
import { poLanguageDefault } from '@po-ui/ng-components';
import { convertToBoolean, isTypeof } from './../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-components";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function PoPageBackgroundComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-page-background-hide-logo", ctx_r0.hideLogo);
    i0.ɵɵproperty("src", ctx_r0.logo, i0.ɵɵsanitizeUrl);
} }
function PoPageBackgroundComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "po-select", 14);
    i0.ɵɵlistener("ngModelChange", function PoPageBackgroundComponent_div_9_Template_po_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectedLanguageOption = $event); })("p-change", function PoPageBackgroundComponent_div_9_Template_po_select_p_change_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onChangeLanguage()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.selectedLanguageOption)("p-options", ctx_r1.selectLanguageOptions);
} }
function PoPageBackgroundComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r2.secondaryLogo, i0.ɵɵsanitizeUrl);
} }
function PoPageBackgroundComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", "url(" + ctx_r3.background + ")");
    i0.ɵɵproperty("ngClass", ctx_r3.background ? "po-page-login-highlight-image" : "po-page-login-highlight-image-off");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.highlightInfo);
} }
const _c0 = ["*"];
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para definição de cor de fundo e dos logotipos primário e secundário para os templates
 * de `po-page-login` e demais templates de login.
 */
export class PoPageBackgroundComponent {
    constructor(poLanguageService) {
        this.poLanguageService = poLanguageService;
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao selecionar alguma opção no seletor de idiomas.
         * Para este evento será passado como parâmetro o valor de idioma selecionado.
         */
        this.selectedLanguage = new EventEmitter();
        this._showSelectLanguage = false;
    }
    /** Lista de idiomas para o combo box */
    set languagesList(value) {
        this._languagesList = value;
        this.setLanguageOptions();
    }
    get languagesList() {
        if (this._languagesList?.length) {
            return this._languagesList;
        }
        return poLanguageDefault;
    }
    /** Caminho para a logomarca localizada na parte superior. */
    set logo(value) {
        this._logo = isTypeof(value, 'string') && value.trim() ? value : undefined;
    }
    get logo() {
        return this._logo;
    }
    /**
     * @optional
     *
     * @description
     *
     * Caminho para a logomarca localizada no rodapé.
     */
    set secondaryLogo(value) {
        this._secondaryLogo = isTypeof(value, 'string') && value.trim() ? value : undefined;
    }
    get secondaryLogo() {
        return this._secondaryLogo;
    }
    /** Define se o seletor de idiomas deve ser exibido. */
    set showSelectLanguage(showSelectLanguage) {
        this._showSelectLanguage = convertToBoolean(showSelectLanguage);
    }
    get showSelectLanguage() {
        return this._showSelectLanguage;
    }
    ngOnInit() {
        this.selectedLanguageOption = this.initialSelectLanguage || this.poLanguageService.getShortLanguage();
    }
    onChangeLanguage() {
        this.selectedLanguage.emit(this.selectedLanguageOption);
    }
    get selectLanguageOptions() {
        return this._selectLanguageOptions;
    }
    setLanguageOptions() {
        this._selectLanguageOptions = this.languagesList.map(language => ({
            label: language.description,
            value: language.language
        }));
    }
}
PoPageBackgroundComponent.ɵfac = function PoPageBackgroundComponent_Factory(t) { return new (t || PoPageBackgroundComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoPageBackgroundComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageBackgroundComponent, selectors: [["po-page-background"]], inputs: { background: ["p-background", "background"], initialSelectLanguage: ["p-initial-language", "initialSelectLanguage"], hideLogo: ["p-hide-logo", "hideLogo"], highlightInfo: ["p-highlight-info", "highlightInfo"], languagesList: ["p-languages", "languagesList"], logo: ["p-logo", "logo"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], showSelectLanguage: ["p-show-select-language", "showSelectLanguage"] }, outputs: { selectedLanguage: "p-selected-language" }, ngContentSelectors: _c0, decls: 13, vars: 5, consts: [[1, "po-page-login-container"], [1, "po-page-login-panel"], ["class", "po-page-background-main-logo", "alt", "main-logo", 3, "po-page-background-hide-logo", "src", 4, "ngIf"], [1, "po-page-login-body"], [1, "po-page-login-panel-content"], [1, "po-page-background-footer", "po-sm-12"], [1, "po-page-background-footer-mobile-only"], [1, "po-page-background-footer-content"], ["class", "po-page-background-footer-select", 4, "ngIf"], [1, "po-page-background-secondary-logo", 3, "ngClass"], ["class", "po-page-background-secondary-logo-image", "alt", "secondary-logo", 3, "src", 4, "ngIf"], [3, "ngClass", "background-image", 4, "ngIf"], ["alt", "main-logo", 1, "po-page-background-main-logo", 3, "src"], [1, "po-page-background-footer-select"], ["name", "selectedLanguageOption", 3, "ngModel", "p-options", "ngModelChange", "p-change"], ["alt", "secondary-logo", 1, "po-page-background-secondary-logo-image", 3, "src"], [3, "ngClass"], [1, "po-page-login-highlight-text"], [1, "po-font-display"]], template: function PoPageBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PoPageBackgroundComponent_img_2_Template, 1, 3, "img", 2);
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelement(7, "po-divider", 6);
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵtemplate(9, PoPageBackgroundComponent_div_9_Template, 2, 2, "div", 8);
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵtemplate(11, PoPageBackgroundComponent_img_11_Template, 1, 1, "img", 10);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(12, PoPageBackgroundComponent_div_12_Template, 4, 4, "div", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.logo);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.showSelectLanguage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.showSelectLanguage ? "po-page-background-secondary-logo-right" : "po-page-background-secondary-logo-centered");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.secondaryLogo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.background);
    } }, dependencies: [i2.NgClass, i2.NgIf, i3.NgControlStatus, i3.NgModel, i1.PoDividerComponent, i1.PoSelectComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBackgroundComponent, [{
        type: Component,
        args: [{ selector: 'po-page-background', template: "<div class=\"po-page-login-container\">\r\n  <div class=\"po-page-login-panel\">\r\n    <img\r\n      *ngIf=\"logo\"\r\n      class=\"po-page-background-main-logo\"\r\n      [class.po-page-background-hide-logo]=\"hideLogo\"\r\n      alt=\"main-logo\"\r\n      [src]=\"logo\"\r\n    />\r\n\r\n    <div class=\"po-page-login-body\">\r\n      <div class=\"po-page-login-panel-content\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <div class=\"po-page-background-footer po-sm-12\">\r\n      <po-divider class=\"po-page-background-footer-mobile-only\"></po-divider>\r\n\r\n      <div class=\"po-page-background-footer-content\">\r\n        <div *ngIf=\"showSelectLanguage\" class=\"po-page-background-footer-select\">\r\n          <po-select\r\n            name=\"selectedLanguageOption\"\r\n            [(ngModel)]=\"selectedLanguageOption\"\r\n            [p-options]=\"selectLanguageOptions\"\r\n            (p-change)=\"onChangeLanguage()\"\r\n          >\r\n          </po-select>\r\n        </div>\r\n\r\n        <div\r\n          class=\"po-page-background-secondary-logo\"\r\n          [ngClass]=\"\r\n            showSelectLanguage\r\n              ? 'po-page-background-secondary-logo-right'\r\n              : 'po-page-background-secondary-logo-centered'\r\n          \"\r\n        >\r\n          <img\r\n            *ngIf=\"secondaryLogo\"\r\n            class=\"po-page-background-secondary-logo-image\"\r\n            alt=\"secondary-logo\"\r\n            [src]=\"secondaryLogo\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    *ngIf=\"background\"\r\n    [ngClass]=\"background ? 'po-page-login-highlight-image' : 'po-page-login-highlight-image-off'\"\r\n    [style.background-image]=\"'url(' + background + ')'\"\r\n  >\r\n    <div class=\"po-page-login-highlight-text\">\r\n      <div class=\"po-font-display\">{{ highlightInfo }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { background: [{
            type: Input,
            args: ['p-background']
        }], initialSelectLanguage: [{
            type: Input,
            args: ['p-initial-language']
        }], hideLogo: [{
            type: Input,
            args: ['p-hide-logo']
        }], highlightInfo: [{
            type: Input,
            args: ['p-highlight-info']
        }], selectedLanguage: [{
            type: Output,
            args: ['p-selected-language']
        }], languagesList: [{
            type: Input,
            args: ['p-languages']
        }], logo: [{
            type: Input,
            args: ['p-logo']
        }], secondaryLogo: [{
            type: Input,
            args: ['p-secondary-logo']
        }], showSelectLanguage: [{
            type: Input,
            args: ['p-show-select-language']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXRlcy9zcmMvbGliL2NvbXBvbmVudHMvcG8tcGFnZS1iYWNrZ3JvdW5kL3BvLXBhZ2UtYmFja2dyb3VuZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtYmFja2dyb3VuZC9wby1wYWdlLWJhY2tncm91bmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWlELGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7SUNGNUQsMEJBTUU7OztJQUhBLCtEQUErQztJQUUvQyxtREFBWTs7OztJQVlWLCtCQUF5RSxvQkFBQTtJQUdyRSx5UEFBb0Msa0tBRXhCLGVBQUEseUJBQWtCLENBQUEsSUFGTTtJQUl0QyxpQkFBWSxFQUFBOzs7SUFKVixlQUFvQztJQUFwQyx1REFBb0MsMkNBQUE7OztJQWV0QywwQkFLRTs7O0lBREEsNERBQXFCOzs7SUFPL0IsK0JBSUMsY0FBQSxjQUFBO0lBRWdDLFlBQW1CO0lBQUEsaUJBQU0sRUFBQSxFQUFBOzs7SUFIeEQsb0VBQW9EO0lBRHBELG1IQUE4RjtJQUkvRCxlQUFtQjtJQUFuQiwwQ0FBbUI7OztBRDNDdEQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sT0FBTyx5QkFBeUI7SUE0RXBDLFlBQW1CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBL0R2RDs7Ozs7OztXQU9H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UCxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFHUSxxQkFBcUI7a0JBQWpELEtBQUs7bUJBQUMsb0JBQW9CO1lBR0wsUUFBUTtrQkFBN0IsS0FBSzttQkFBQyxhQUFhO1lBR08sYUFBYTtrQkFBdkMsS0FBSzttQkFBQyxrQkFBa0I7WUFVTSxnQkFBZ0I7a0JBQTlDLE1BQU07bUJBQUMscUJBQXFCO1lBV0gsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxhQUFhO1lBYUMsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRO1lBZWdCLGFBQWE7a0JBQTNDLEtBQUs7bUJBQUMsa0JBQWtCO1lBU1ksa0JBQWtCO2tCQUF0RCxLQUFLO21CQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvU2VsZWN0T3B0aW9uLCBQb0xhbmd1YWdlU2VydmljZSwgUG9MYW5ndWFnZSwgcG9MYW5ndWFnZURlZmF1bHQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuLCBpc1R5cGVvZiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2UtYmFja2dyb3VuZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtYmFja2dyb3VuZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBkZWZpbmnDp8OjbyBkZSBjb3IgZGUgZnVuZG8gZSBkb3MgbG9nb3RpcG9zIHByaW3DoXJpbyBlIHNlY3VuZMOhcmlvIHBhcmEgb3MgdGVtcGxhdGVzXHJcbiAqIGRlIGBwby1wYWdlLWxvZ2luYCBlIGRlbWFpcyB0ZW1wbGF0ZXMgZGUgbG9naW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9QYWdlQmFja2dyb3VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEluc2VyZSB1bWEgaW1hZ2VtIGRlIGRlc3RhcXVlIGFvIGxhZG8gZGlyZWl0byBkbyBjb250YWluZXIuICovXHJcbiAgQElucHV0KCdwLWJhY2tncm91bmQnKSBiYWNrZ3JvdW5kPzogc3RyaW5nO1xyXG5cclxuICAvKiogSWRpb21hIGluaWNpYWwgc2VsZWNpb25hZG8gbm8gY29tYm8gKi9cclxuICBASW5wdXQoJ3AtaW5pdGlhbC1sYW5ndWFnZScpIGluaXRpYWxTZWxlY3RMYW5ndWFnZT86IHN0cmluZztcclxuXHJcbiAgLyoqIERlc2lnbmEgc2UgbyBsb2dvdGlwbyBkZXZlIGRlc2FwYXJlY2VyIGVtIHJlc29sdcOnw7VlcyBtZW5vcmVzLiAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLWxvZ28nKSBoaWRlTG9nbz86IGJvb2xlYW47XHJcblxyXG4gIC8qKiBUZXh0byBkZSBkZXN0YXF1ZSBzb2JyZXBvc3RvIMOgIGltYWdlbSBkZSBkZXN0YXF1ZS4gRXNzYSBvcMOnw6NvIMOpIHV0aWxpemFkYSBlbSBjb25qdW50byBjb20gbyBhdHJpYnV0byBgcC1iYWNrZ3JvdW5kYC4gKi9cclxuICBASW5wdXQoJ3AtaGlnaGxpZ2h0LWluZm8nKSBoaWdobGlnaHRJbmZvPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBzZWxlY2lvbmFyIGFsZ3VtYSBvcMOnw6NvIG5vIHNlbGV0b3IgZGUgaWRpb21hcy5cclxuICAgKiBQYXJhIGVzdGUgZXZlbnRvIHNlcsOhIHBhc3NhZG8gY29tbyBwYXLDom1ldHJvIG8gdmFsb3IgZGUgaWRpb21hIHNlbGVjaW9uYWRvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3Atc2VsZWN0ZWQtbGFuZ3VhZ2UnKSBzZWxlY3RlZExhbmd1YWdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBzZWxlY3RlZExhbmd1YWdlT3B0aW9uOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2xvZ28/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5TG9nbz86IHN0cmluZztcclxuICBwcml2YXRlIF9zaG93U2VsZWN0TGFuZ3VhZ2U/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzTGlzdDogQXJyYXk8UG9MYW5ndWFnZT47XHJcbiAgcHJpdmF0ZSBfc2VsZWN0TGFuZ3VhZ2VPcHRpb25zOiBBcnJheTxQb1NlbGVjdE9wdGlvbj47XHJcblxyXG4gIC8qKiBMaXN0YSBkZSBpZGlvbWFzIHBhcmEgbyBjb21ibyBib3ggKi9cclxuICBASW5wdXQoJ3AtbGFuZ3VhZ2VzJykgc2V0IGxhbmd1YWdlc0xpc3QodmFsdWU6IEFycmF5PFBvTGFuZ3VhZ2U+KSB7XHJcbiAgICB0aGlzLl9sYW5ndWFnZXNMaXN0ID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldExhbmd1YWdlT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhbmd1YWdlc0xpc3QoKTogQXJyYXk8UG9MYW5ndWFnZT4ge1xyXG4gICAgaWYgKHRoaXMuX2xhbmd1YWdlc0xpc3Q/Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VzTGlzdDtcclxuICAgIH1cclxuICAgIHJldHVybiBwb0xhbmd1YWdlRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC8qKiBDYW1pbmhvIHBhcmEgYSBsb2dvbWFyY2EgbG9jYWxpemFkYSBuYSBwYXJ0ZSBzdXBlcmlvci4gKi9cclxuICBASW5wdXQoJ3AtbG9nbycpIHNldCBsb2dvKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2xvZ28gPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpICYmIHZhbHVlLnRyaW0oKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvZ28oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9nbztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBDYW1pbmhvIHBhcmEgYSBsb2dvbWFyY2EgbG9jYWxpemFkYSBubyByb2RhcMOpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zZWNvbmRhcnktbG9nbycpIHNldCBzZWNvbmRhcnlMb2dvKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3NlY29uZGFyeUxvZ28gPSBpc1R5cGVvZih2YWx1ZSwgJ3N0cmluZycpICYmIHZhbHVlLnRyaW0oKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlY29uZGFyeUxvZ28oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kYXJ5TG9nbztcclxuICB9XHJcblxyXG4gIC8qKiBEZWZpbmUgc2UgbyBzZWxldG9yIGRlIGlkaW9tYXMgZGV2ZSBzZXIgZXhpYmlkby4gKi9cclxuICBASW5wdXQoJ3Atc2hvdy1zZWxlY3QtbGFuZ3VhZ2UnKSBzZXQgc2hvd1NlbGVjdExhbmd1YWdlKHNob3dTZWxlY3RMYW5ndWFnZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1NlbGVjdExhbmd1YWdlID0gY29udmVydFRvQm9vbGVhbihzaG93U2VsZWN0TGFuZ3VhZ2UpO1xyXG4gIH1cclxuICBnZXQgc2hvd1NlbGVjdExhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTZWxlY3RMYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwb0xhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZExhbmd1YWdlT3B0aW9uID0gdGhpcy5pbml0aWFsU2VsZWN0TGFuZ3VhZ2UgfHwgdGhpcy5wb0xhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUxhbmd1YWdlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZExhbmd1YWdlLmVtaXQodGhpcy5zZWxlY3RlZExhbmd1YWdlT3B0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RMYW5ndWFnZU9wdGlvbnMoKTogQXJyYXk8UG9TZWxlY3RPcHRpb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RMYW5ndWFnZU9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExhbmd1YWdlT3B0aW9ucygpIHtcclxuICAgIHRoaXMuX3NlbGVjdExhbmd1YWdlT3B0aW9ucyA9IHRoaXMubGFuZ3VhZ2VzTGlzdC5tYXA8UG9TZWxlY3RPcHRpb24+KGxhbmd1YWdlID0+ICh7XHJcbiAgICAgIGxhYmVsOiBsYW5ndWFnZS5kZXNjcmlwdGlvbixcclxuICAgICAgdmFsdWU6IGxhbmd1YWdlLmxhbmd1YWdlXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1wYWdlLWxvZ2luLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby1wYWdlLWxvZ2luLXBhbmVsXCI+XHJcbiAgICA8aW1nXHJcbiAgICAgICpuZ0lmPVwibG9nb1wiXHJcbiAgICAgIGNsYXNzPVwicG8tcGFnZS1iYWNrZ3JvdW5kLW1haW4tbG9nb1wiXHJcbiAgICAgIFtjbGFzcy5wby1wYWdlLWJhY2tncm91bmQtaGlkZS1sb2dvXT1cImhpZGVMb2dvXCJcclxuICAgICAgYWx0PVwibWFpbi1sb2dvXCJcclxuICAgICAgW3NyY109XCJsb2dvXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtbG9naW4tYm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG8tcGFnZS1sb2dpbi1wYW5lbC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtYmFja2dyb3VuZC1mb290ZXIgcG8tc20tMTJcIj5cclxuICAgICAgPHBvLWRpdmlkZXIgY2xhc3M9XCJwby1wYWdlLWJhY2tncm91bmQtZm9vdGVyLW1vYmlsZS1vbmx5XCI+PC9wby1kaXZpZGVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvLXBhZ2UtYmFja2dyb3VuZC1mb290ZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93U2VsZWN0TGFuZ3VhZ2VcIiBjbGFzcz1cInBvLXBhZ2UtYmFja2dyb3VuZC1mb290ZXItc2VsZWN0XCI+XHJcbiAgICAgICAgICA8cG8tc2VsZWN0XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RlZExhbmd1YWdlT3B0aW9uXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExhbmd1YWdlT3B0aW9uXCJcclxuICAgICAgICAgICAgW3Atb3B0aW9uc109XCJzZWxlY3RMYW5ndWFnZU9wdGlvbnNcIlxyXG4gICAgICAgICAgICAocC1jaGFuZ2UpPVwib25DaGFuZ2VMYW5ndWFnZSgpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcG8tc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cInBvLXBhZ2UtYmFja2dyb3VuZC1zZWNvbmRhcnktbG9nb1wiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJcclxuICAgICAgICAgICAgc2hvd1NlbGVjdExhbmd1YWdlXHJcbiAgICAgICAgICAgICAgPyAncG8tcGFnZS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1sb2dvLXJpZ2h0J1xyXG4gICAgICAgICAgICAgIDogJ3BvLXBhZ2UtYmFja2dyb3VuZC1zZWNvbmRhcnktbG9nby1jZW50ZXJlZCdcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAqbmdJZj1cInNlY29uZGFyeUxvZ29cIlxyXG4gICAgICAgICAgICBjbGFzcz1cInBvLXBhZ2UtYmFja2dyb3VuZC1zZWNvbmRhcnktbG9nby1pbWFnZVwiXHJcbiAgICAgICAgICAgIGFsdD1cInNlY29uZGFyeS1sb2dvXCJcclxuICAgICAgICAgICAgW3NyY109XCJzZWNvbmRhcnlMb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXZcclxuICAgICpuZ0lmPVwiYmFja2dyb3VuZFwiXHJcbiAgICBbbmdDbGFzc109XCJiYWNrZ3JvdW5kID8gJ3BvLXBhZ2UtbG9naW4taGlnaGxpZ2h0LWltYWdlJyA6ICdwby1wYWdlLWxvZ2luLWhpZ2hsaWdodC1pbWFnZS1vZmYnXCJcclxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cIid1cmwoJyArIGJhY2tncm91bmQgKyAnKSdcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1wYWdlLWxvZ2luLWhpZ2hsaWdodC10ZXh0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwby1mb250LWRpc3BsYXlcIj57eyBoaWdobGlnaHRJbmZvIH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==