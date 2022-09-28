import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { poToasterLiterals } from './po-toaster.literals';
import { PoToasterBaseComponent } from './po-toaster-base.component';
import { PoToasterType } from './po-toaster-type.enum';
import { PoToasterOrientation } from './po-toaster-orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../components/po-button/po-button.component";
import * as i4 from "../../../components/po-icon/po-icon.component";
const _c0 = ["toaster"];
const _c1 = ["buttonClose"];
function PoToasterComponent_po_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 11);
    i0.ɵɵlistener("p-click", function PoToasterComponent_po_button_8_Template_po_button_p_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.poToasterAction($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-label", ctx_r1.actionLabel);
} }
const SPACE_BETWEEN_TOASTERS = 8;
const TOASTER_HEIGHT_DEFAULT = 62;
const TOASTER_HEIGHT_ACTION = 88;
/**
 * @docsPrivate
 *
 * @docsExtends PoToasterBaseComponent
 */
export class PoToasterComponent extends PoToasterBaseComponent {
    constructor(poLanguageService, changeDetector, elementeRef, renderer) {
        super();
        this.changeDetector = changeDetector;
        this.elementeRef = elementeRef;
        this.renderer = renderer;
        this.alive = true;
        /* Margem do Toaster referênte à sua orientação e posição*/
        this.margin = 0;
        /* Observable para monitorar o Close to Toaster */
        this.observableOnClose = new Subject();
        /* Posição do Toaster*/
        this.toasterPosition = 'po-toaster-bottom';
        this.language = poLanguageService.getShortLanguage();
        this.literals = {
            ...poToasterLiterals[this.language]
        };
    }
    ngOnDestroy() {
        this.alive = false;
    }
    ngAfterViewInit() {
        setTimeout(() => this.renderer.addClass(this.toaster.nativeElement, 'po-toaster-visible'));
    }
    /* Muda a posição do Toaster na tela*/
    changePosition(position) {
        const toasterSize = document.body.offsetWidth < 961 && this.action ? TOASTER_HEIGHT_ACTION : TOASTER_HEIGHT_DEFAULT;
        this.margin = SPACE_BETWEEN_TOASTERS + toasterSize * position + position * SPACE_BETWEEN_TOASTERS;
        if (this.orientation === PoToasterOrientation.Top) {
            this.toaster.nativeElement.style.top = this.margin + 'px';
        }
        else {
            this.toaster.nativeElement.style.bottom = this.margin + 'px';
        }
    }
    /* Fecha o componente Toaster */
    close() {
        this.observableOnClose.next(true);
    }
    setFadeOut() {
        this.renderer.removeClass(this.toaster.nativeElement, 'po-toaster-visible');
        this.renderer.addClass(this.toaster.nativeElement, 'po-toaster-invisible');
    }
    /* Configura o Toaster com os atributos passados para ele */
    configToaster(poToaster) {
        this.type = poToaster.type;
        this.message = poToaster.message;
        this.orientation = poToaster.orientation;
        this.position = poToaster.position;
        this.action = poToaster.action;
        this.actionLabel = poToaster.actionLabel;
        this.componentRef = poToaster.componentRef;
        /* Muda a orientação do Toaster */
        if (this.orientation === PoToasterOrientation.Top) {
            this.toasterPosition = 'po-toaster-top';
        }
        /* Muda a posição do Toaster */
        this.changePosition(this.position);
        if (this.type === PoToasterType.Error) {
            this.toaster.nativeElement.setAttribute('role', 'alert');
        }
        else if (this.action && this.actionLabel) {
            this.toaster.nativeElement.setAttribute('role', 'alertdialog');
        }
        else {
            this.toaster.nativeElement.setAttribute('role', 'status');
        }
        /* Switch para o tipo de Toaster */
        switch (this.type) {
            case PoToasterType.Error: {
                this.toasterType = 'po-toaster-error';
                this.icon = 'po-icon-warning';
                break;
            }
            case PoToasterType.Information: {
                this.toasterType = 'po-toaster-info';
                this.icon = 'po-icon-info';
                break;
            }
            case PoToasterType.Success: {
                this.toasterType = 'po-toaster-success';
                this.icon = 'po-icon-ok';
                break;
            }
            case PoToasterType.Warning: {
                this.toasterType = 'po-toaster-warning';
                this.icon = 'po-icon-warning';
                break;
            }
        }
        this.buttonClose.buttonElement.nativeElement.setAttribute('aria-label', this.literals.close);
        this.changeDetector.detectChanges();
    }
    getIcon() {
        return this.icon;
    }
    getToasterPosition() {
        return this.toasterPosition;
    }
    getToasterType() {
        return this.toasterType;
    }
    onButtonClose(event) {
        if (this.action && !this.actionLabel) {
            this.poToasterAction(event);
        }
        else {
            this.close();
        }
    }
    /* Chama a função passada pelo atributo `action` */
    poToasterAction(event) {
        this.action(this);
    }
}
PoToasterComponent.ɵfac = function PoToasterComponent_Factory(t) { return new (t || PoToasterComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PoToasterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoToasterComponent, selectors: [["po-toaster"]], viewQuery: function PoToasterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toaster = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonClose = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 7, consts: [["toaster", ""], [1, "po-toaster-icon"], [3, "p-icon"], [1, "po-toaster-actions"], [1, "po-toaster-message"], [1, "po-toaster-action"], ["p-type", "tertiary", 3, "p-label", "p-click", 4, "ngIf"], [1, "po-toaster-close"], [1, "po-toaster-divider"], ["p-icon", "po-icon-close", "p-type", "tertiary", 1, "po-toaster-button-close", 3, "p-click"], ["buttonClose", ""], ["p-type", "tertiary", 3, "p-label", "p-click"]], template: function PoToasterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", null, 0)(2, "div", 1);
        i0.ɵɵelement(3, "po-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3)(5, "div", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtemplate(8, PoToasterComponent_po_button_8_Template, 1, 1, "po-button", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelement(10, "div", 8);
        i0.ɵɵelementStart(11, "po-button", 9, 10);
        i0.ɵɵlistener("p-click", function PoToasterComponent_Template_po_button_p_click_11_listener($event) { return ctx.onButtonClose($event); });
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("po-toaster ", ctx.getToasterType(), " ", ctx.getToasterPosition(), "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("p-icon", ctx.getIcon());
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.action && ctx.actionLabel);
    } }, dependencies: [i2.NgIf, i3.PoButtonComponent, i4.PoIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoToasterComponent, [{
        type: Component,
        args: [{ selector: 'po-toaster', template: "<div #toaster class=\"po-toaster {{ getToasterType() }} {{ getToasterPosition() }}\">\r\n  <div class=\"po-toaster-icon\">\r\n    <po-icon [p-icon]=\"getIcon()\"></po-icon>\r\n  </div>\r\n\r\n  <div class=\"po-toaster-actions\">\r\n    <div class=\"po-toaster-message\">{{ message }}</div>\r\n    <div class=\"po-toaster-action\">\r\n      <po-button\r\n        *ngIf=\"action && actionLabel\"\r\n        (p-click)=\"poToasterAction($event)\"\r\n        [p-label]=\"actionLabel\"\r\n        p-type=\"tertiary\"\r\n      ></po-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"po-toaster-close\">\r\n    <div class=\"po-toaster-divider\"></div>\r\n    <po-button\r\n      #buttonClose\r\n      class=\"po-toaster-button-close\"\r\n      (p-click)=\"onButtonClose($event)\"\r\n      p-icon=\"po-icon-close\"\r\n      p-type=\"tertiary\"\r\n    ></po-button>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { toaster: [{
            type: ViewChild,
            args: ['toaster']
        }], buttonClose: [{
            type: ViewChild,
            args: ['buttonClose']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdG9hc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLW5vdGlmaWNhdGlvbi9wby10b2FzdGVyL3BvLXRvYXN0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9zZXJ2aWNlcy9wby1ub3RpZmljYXRpb24vcG8tdG9hc3Rlci9wby10b2FzdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBSVQsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7O0lDWi9ELHFDQUtDO0lBSEMsa0xBQVcsZUFBQSw4QkFBdUIsQ0FBQSxJQUFDO0lBR3BDLGlCQUFZOzs7SUFGWCw0Q0FBdUI7O0FEWS9CLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0scUJBQXFCLEdBQUcsRUFBRSxDQUFDO0FBRWpDOzs7O0dBSUc7QUFLSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBb0I1RCxZQUNFLGlCQUFvQyxFQUM3QixjQUFpQyxFQUNoQyxXQUF3QixFQUN4QixRQUFvQjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQUpELG1CQUFjLEdBQWQsY0FBYyxD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YixpQ0FBYTtRQUd4QyxlQUEyQjtRQUEzQixvREFBMkI7O3VGRDJCdkIsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0UsWUFBWTtxSkFLQSxPQUFPO2tCQUE1QixTQUFTO21CQUFDLFNBQVM7WUFDTSxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IHBvTG9jYWxlRGVmYXVsdCB9IGZyb20gJy4uLy4uL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvVG9hc3RlckxpdGVyYWxzIH0gZnJvbSAnLi9wby10b2FzdGVyLmxpdGVyYWxzJztcclxuXHJcbmltcG9ydCB7IFBvVG9hc3RlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL3BvLXRvYXN0ZXItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1RvYXN0ZXIgfSBmcm9tICcuL3BvLXRvYXN0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyVHlwZSB9IGZyb20gJy4vcG8tdG9hc3Rlci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb1RvYXN0ZXJPcmllbnRhdGlvbiB9IGZyb20gJy4vcG8tdG9hc3Rlci1vcmllbnRhdGlvbi5lbnVtJztcclxuaW1wb3J0IHsgUG9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BvLWJ1dHRvbi9wby1idXR0b24uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IFNQQUNFX0JFVFdFRU5fVE9BU1RFUlMgPSA4O1xyXG5jb25zdCBUT0FTVEVSX0hFSUdIVF9ERUZBVUxUID0gNjI7XHJcbmNvbnN0IFRPQVNURVJfSEVJR0hUX0FDVElPTiA9IDg4O1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Ub2FzdGVyQmFzZUNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby10b2FzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdG9hc3Rlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVG9hc3RlckNvbXBvbmVudCBleHRlbmRzIFBvVG9hc3RlckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qIENvbXBvbmVudGUgdG9hc3RlciAqL1xyXG4gIEBWaWV3Q2hpbGQoJ3RvYXN0ZXInKSB0b2FzdGVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbkNsb3NlJykgYnV0dG9uQ2xvc2U6IFBvQnV0dG9uQ29tcG9uZW50O1xyXG5cclxuICBhbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgbGFuZ3VhZ2U6IHN0cmluZztcclxuICBsaXRlcmFsczogYW55O1xyXG5cclxuICAvKiDDjWNvbmUgZG8gVG9hc3RlciAqL1xyXG4gIHByaXZhdGUgaWNvbjogc3RyaW5nO1xyXG4gIC8qIE1hcmdlbSBkbyBUb2FzdGVyIHJlZmVyw6pudGUgw6Agc3VhIG9yaWVudGHDp8OjbyBlIHBvc2nDp8OjbyovXHJcbiAgcHJpdmF0ZSBtYXJnaW46IG51bWJlciA9IDA7XHJcbiAgLyogT2JzZXJ2YWJsZSBwYXJhIG1vbml0b3JhciBvIENsb3NlIHRvIFRvYXN0ZXIgKi9cclxuICBwcml2YXRlIG9ic2VydmFibGVPbkNsb3NlID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIC8qIFBvc2nDp8OjbyBkbyBUb2FzdGVyKi9cclxuICBwcml2YXRlIHRvYXN0ZXJQb3NpdGlvbjogc3RyaW5nID0gJ3BvLXRvYXN0ZXItYm90dG9tJztcclxuICAvKiBUaXBvIGRvIFRvYXN0ZXIgKi9cclxuICBwcml2YXRlIHRvYXN0ZXJUeXBlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcG9MYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudGVSZWY/OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcj86IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBwb0xhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgICB0aGlzLmxpdGVyYWxzID0ge1xyXG4gICAgICAuLi5wb1RvYXN0ZXJMaXRlcmFsc1t0aGlzLmxhbmd1YWdlXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9hc3Rlci5uYXRpdmVFbGVtZW50LCAncG8tdG9hc3Rlci12aXNpYmxlJykpO1xyXG4gIH1cclxuXHJcbiAgLyogTXVkYSBhIHBvc2nDp8OjbyBkbyBUb2FzdGVyIG5hIHRlbGEqL1xyXG4gIGNoYW5nZVBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvYXN0ZXJTaXplID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA8IDk2MSAmJiB0aGlzLmFjdGlvbiA/IFRPQVNURVJfSEVJR0hUX0FDVElPTiA6IFRPQVNURVJfSEVJR0hUX0RFRkFVTFQ7XHJcbiAgICB0aGlzLm1hcmdpbiA9IFNQQUNFX0JFVFdFRU5fVE9BU1RFUlMgKyB0b2FzdGVyU2l6ZSAqIHBvc2l0aW9uICsgcG9zaXRpb24gKiBTUEFDRV9CRVRXRUVOX1RPQVNURVJTO1xyXG5cclxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBQb1RvYXN0ZXJPcmllbnRhdGlvbi5Ub3ApIHtcclxuICAgICAgdGhpcy50b2FzdGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5tYXJnaW4gKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b2FzdGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5tYXJnaW4gKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogRmVjaGEgbyBjb21wb25lbnRlIFRvYXN0ZXIgKi9cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub2JzZXJ2YWJsZU9uQ2xvc2UubmV4dCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHNldEZhZGVPdXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudG9hc3Rlci5uYXRpdmVFbGVtZW50LCAncG8tdG9hc3Rlci12aXNpYmxlJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9hc3Rlci5uYXRpdmVFbGVtZW50LCAncG8tdG9hc3Rlci1pbnZpc2libGUnKTtcclxuICB9XHJcblxyXG4gIC8qIENvbmZpZ3VyYSBvIFRvYXN0ZXIgY29tIG9zIGF0cmlidXRvcyBwYXNzYWRvcyBwYXJhIGVsZSAqL1xyXG4gIGNvbmZpZ1RvYXN0ZXIocG9Ub2FzdGVyOiBQb1RvYXN0ZXIpIHtcclxuICAgIHRoaXMudHlwZSA9IHBvVG9hc3Rlci50eXBlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gcG9Ub2FzdGVyLm1lc3NhZ2U7XHJcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gcG9Ub2FzdGVyLm9yaWVudGF0aW9uO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvVG9hc3Rlci5wb3NpdGlvbjtcclxuICAgIHRoaXMuYWN0aW9uID0gcG9Ub2FzdGVyLmFjdGlvbjtcclxuICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBwb1RvYXN0ZXIuYWN0aW9uTGFiZWw7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHBvVG9hc3Rlci5jb21wb25lbnRSZWY7XHJcblxyXG4gICAgLyogTXVkYSBhIG9yaWVudGHDp8OjbyBkbyBUb2FzdGVyICovXHJcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gUG9Ub2FzdGVyT3JpZW50YXRpb24uVG9wKSB7XHJcbiAgICAgIHRoaXMudG9hc3RlclBvc2l0aW9uID0gJ3BvLXRvYXN0ZXItdG9wJztcclxuICAgIH1cclxuXHJcbiAgICAvKiBNdWRhIGEgcG9zacOnw6NvIGRvIFRvYXN0ZXIgKi9cclxuICAgIHRoaXMuY2hhbmdlUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gUG9Ub2FzdGVyVHlwZS5FcnJvcikge1xyXG4gICAgICB0aGlzLnRvYXN0ZXIubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb25MYWJlbCkge1xyXG4gICAgICB0aGlzLnRvYXN0ZXIubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnRkaWFsb2cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9hc3Rlci5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTd2l0Y2ggcGFyYSBvIHRpcG8gZGUgVG9hc3RlciAqL1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSBQb1RvYXN0ZXJUeXBlLkVycm9yOiB7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyVHlwZSA9ICdwby10b2FzdGVyLWVycm9yJztcclxuICAgICAgICB0aGlzLmljb24gPSAncG8taWNvbi13YXJuaW5nJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFBvVG9hc3RlclR5cGUuSW5mb3JtYXRpb246IHtcclxuICAgICAgICB0aGlzLnRvYXN0ZXJUeXBlID0gJ3BvLXRvYXN0ZXItaW5mbyc7XHJcbiAgICAgICAgdGhpcy5pY29uID0gJ3BvLWljb24taW5mbyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBQb1RvYXN0ZXJUeXBlLlN1Y2Nlc3M6IHtcclxuICAgICAgICB0aGlzLnRvYXN0ZXJUeXBlID0gJ3BvLXRvYXN0ZXItc3VjY2Vzcyc7XHJcbiAgICAgICAgdGhpcy5pY29uID0gJ3BvLWljb24tb2snO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUG9Ub2FzdGVyVHlwZS5XYXJuaW5nOiB7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyVHlwZSA9ICdwby10b2FzdGVyLXdhcm5pbmcnO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9ICdwby1pY29uLXdhcm5pbmcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idXR0b25DbG9zZS5idXR0b25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5saXRlcmFscy5jbG9zZSk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEljb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pY29uO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9hc3RlclBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9hc3RlclBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9hc3RlclR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2FzdGVyVHlwZTtcclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xvc2UoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFjdGlvbiAmJiAhdGhpcy5hY3Rpb25MYWJlbCkge1xyXG4gICAgICB0aGlzLnBvVG9hc3RlckFjdGlvbihldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBDaGFtYSBhIGZ1bsOnw6NvIHBhc3NhZGEgcGVsbyBhdHJpYnV0byBgYWN0aW9uYCAqL1xyXG4gIHBvVG9hc3RlckFjdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3Rpb24odGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgI3RvYXN0ZXIgY2xhc3M9XCJwby10b2FzdGVyIHt7IGdldFRvYXN0ZXJUeXBlKCkgfX0ge3sgZ2V0VG9hc3RlclBvc2l0aW9uKCkgfX1cIj5cclxuICA8ZGl2IGNsYXNzPVwicG8tdG9hc3Rlci1pY29uXCI+XHJcbiAgICA8cG8taWNvbiBbcC1pY29uXT1cImdldEljb24oKVwiPjwvcG8taWNvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInBvLXRvYXN0ZXItYWN0aW9uc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXRvYXN0ZXItbWVzc2FnZVwiPnt7IG1lc3NhZ2UgfX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby10b2FzdGVyLWFjdGlvblwiPlxyXG4gICAgICA8cG8tYnV0dG9uXHJcbiAgICAgICAgKm5nSWY9XCJhY3Rpb24gJiYgYWN0aW9uTGFiZWxcIlxyXG4gICAgICAgIChwLWNsaWNrKT1cInBvVG9hc3RlckFjdGlvbigkZXZlbnQpXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJhY3Rpb25MYWJlbFwiXHJcbiAgICAgICAgcC10eXBlPVwidGVydGlhcnlcIlxyXG4gICAgICA+PC9wby1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInBvLXRvYXN0ZXItY2xvc2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby10b2FzdGVyLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgIDxwby1idXR0b25cclxuICAgICAgI2J1dHRvbkNsb3NlXHJcbiAgICAgIGNsYXNzPVwicG8tdG9hc3Rlci1idXR0b24tY2xvc2VcIlxyXG4gICAgICAocC1jbGljayk9XCJvbkJ1dHRvbkNsb3NlKCRldmVudClcIlxyXG4gICAgICBwLWljb249XCJwby1pY29uLWNsb3NlXCJcclxuICAgICAgcC10eXBlPVwidGVydGlhcnlcIlxyXG4gICAgPjwvcG8tYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19