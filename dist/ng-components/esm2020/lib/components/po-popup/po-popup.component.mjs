import { Component, ElementRef, ViewChild } from '@angular/core';
import { isExternalLink, isTypeof, openExternalLink } from '../../utils/util';
import { PoControlPositionService } from '../../services/po-control-position/po-control-position.service';
import { PoPopupBaseComponent } from './po-popup-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/po-control-position/po-control-position.service";
import * as i3 from "@angular/common";
import * as i4 from "../po-icon/po-icon.component";
const _c0 = ["popupRef"];
function PoPopupComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("po-popup-arrow po-arrow-", ctx_r2.arrowDirection, "");
} }
function PoPopupComponent_div_0_ng_container_5_div_1_po_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-icon", 9);
} if (rf & 2) {
    const action_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("p-icon", action_r4.icon);
} }
function PoPopupComponent_div_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function PoPopupComponent_div_0_ng_container_5_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const action_r4 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onActionClick(action_r4)); });
    i0.ɵɵtemplate(1, PoPopupComponent_div_0_ng_container_5_div_1_po_icon_1_Template, 1, 1, "po-icon", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const action_r4 = ctx_r12.$implicit;
    const actionIndex_r5 = ctx_r12.index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("po-popup-item-default", action_r4.type !== "danger")("po-popup-item-danger", action_r4.type === "danger")("po-popup-item-disabled", ctx_r6.returnBooleanValue(action_r4, "disabled"))("po-popup-item-separator", action_r4.separator && actionIndex_r5 !== 0)("po-popup-item-selected", action_r4.selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", action_r4.label, " ");
} }
function PoPopupComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PoPopupComponent_div_0_ng_container_5_div_1_Template, 3, 12, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.returnBooleanValue(action_r4, "visible") !== false);
} }
function PoPopupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1, 2);
    i0.ɵɵtemplate(2, PoPopupComponent_div_0_div_2_Template, 1, 3, "div", 3);
    i0.ɵɵprojection(3);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtemplate(5, PoPopupComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.hideArrow);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.actions);
} }
const _c1 = [[["", "p-popup-header-template", ""]]];
const _c2 = ["[p-popup-header-template]"];
/**
 *
 * @docsExtends PoPopupBaseComponent
 *
 * @example
 *
 * <example name="po-popup-basic" title="PO Popup - Basic">
 *   <file name="sample-po-popup-basic/sample-po-popup-basic.component.html"> </file>
 *   <file name="sample-po-popup-basic/sample-po-popup-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-popup-labs" title="PO Popup - Labs">
 *   <file name="sample-po-popup-labs/sample-po-popup-labs.component.html"> </file>
 *   <file name="sample-po-popup-labs/sample-po-popup-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-popup-email" title="PO Popup Email">
 *   <file name="sample-po-popup-email/sample-po-popup-email.component.html"> </file>
 *   <file name="sample-po-popup-email/sample-po-popup-email.component.ts"> </file>
 * </example>
 *
 */
export class PoPopupComponent extends PoPopupBaseComponent {
    constructor(viewContainerRef, renderer, router, poControlPosition, changeDetector) {
        super();
        this.renderer = renderer;
        this.router = router;
        this.poControlPosition = poControlPosition;
        this.changeDetector = changeDetector;
        this.onScroll = ({ target }) => {
            if (this.showPopup && target.className !== 'po-popup-container') {
                this.close();
            }
        };
    }
    /**
     * Fecha o componente *popup*.
     *
     * > Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.
     */
    close() {
        this.removeListeners();
        this.showPopup = false;
    }
    onActionClick(popupAction) {
        const actionNoDisabled = popupAction && !this.returnBooleanValue(popupAction, 'disabled');
        if (popupAction && popupAction.action && actionNoDisabled) {
            this.close();
            popupAction.action(this.param || popupAction);
        }
        if (popupAction && popupAction.url && actionNoDisabled) {
            this.close();
            return this.openUrl(popupAction.url);
        }
    }
    /**
     * Abre o componente *popup*.
     *
     * > É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.
     */
    open(param) {
        this.oldTarget = this.target;
        this.param = param;
        this.showPopup = true;
        this.changeDetector.detectChanges();
        this.validateInitialContent();
    }
    returnBooleanValue(popupAction, property) {
        return isTypeof(popupAction[property], 'function')
            ? popupAction[property](this.param || popupAction)
            : popupAction[property];
    }
    /**
     * Responsável por abrir e fechar o *popup*.
     *
     * Quando disparado abrirá o *popup* e caso o mesmo já estiver aberto e possuir o mesmo `target` irá fecha-lo.
     *
     * É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.
     */
    toggle(param) {
        this.showPopup && this.oldTarget === this.target ? this.close() : this.open(param);
    }
    clickedOutDisabledItem(event) {
        const containsItemDisabled = this.elementContains(event.target, 'po-popup-item-disabled') ||
            this.elementContains(event.target.parentElement, 'po-popup-item-disabled');
        return !containsItemDisabled;
    }
    clickedOutHeaderTemplate(event) {
        const popupHeaderTemplate = this.popupRef && this.popupRef.nativeElement.querySelector('[p-popup-header-template]');
        return !(popupHeaderTemplate && popupHeaderTemplate.contains(event.target));
    }
    clickedOutTarget(event) {
        return this.target && !this.target.contains(event.target);
    }
    closePopupOnClickout(event) {
        if (this.clickedOutTarget(event) && this.clickedOutDisabledItem(event) && this.clickedOutHeaderTemplate(event)) {
            this.close();
        }
    }
    elementContains(element, className) {
        return element && element.classList.contains(className);
    }
    hasContentToShow() {
        return !!(this.popupRef.nativeElement && this.popupRef.nativeElement.clientHeight);
    }
    initializeListeners() {
        this.resizeListener = this.renderer.listen('window', 'resize', () => {
            this.close();
        });
        this.clickoutListener = this.renderer.listen('document', 'click', (event) => {
            this.closePopupOnClickout(event);
        });
        window.addEventListener('scroll', this.onScroll, true);
    }
    openUrl(url) {
        if (isExternalLink(url)) {
            return openExternalLink(url);
        }
        if (url) {
            return this.router.navigate([url]);
        }
    }
    removeListeners() {
        if (this.clickoutListener) {
            this.clickoutListener();
        }
        if (this.resizeListener) {
            this.resizeListener();
        }
        window.removeEventListener('scroll', this.onScroll, true);
    }
    setPosition() {
        this.poControlPosition.setElements(this.popupRef.nativeElement, 8, this.target, this.customPositions, false, this.isCornerAlign);
        this.poControlPosition.adjustPosition(this.position);
        this.arrowDirection = this.poControlPosition.getArrowDirection();
    }
    validateInitialContent() {
        if (this.hasContentToShow()) {
            this.setPosition();
            this.initializeListeners();
        }
        else {
            this.close();
        }
    }
}
PoPopupComponent.ɵfac = function PoPopupComponent_Factory(t) { return new (t || PoPopupComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.PoControlPositionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoPopupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPopupComponent, selectors: [["po-popup"]], viewQuery: function PoPopupComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popupRef = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([PoControlPositionService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["class", "po-popup", 4, "ngIf"], [1, "po-popup"], ["popupRef", ""], [3, "class", 4, "ngIf"], [1, "po-popup-container"], [4, "ngFor", "ngForOf"], [3, "po-popup-item-default", "po-popup-item-danger", "po-popup-item-disabled", "po-popup-item-separator", "po-popup-item-selected", "click", 4, "ngIf"], [3, "click"], ["class", "po-popup-icon-item po-icon", 3, "p-icon", 4, "ngIf"], [1, "po-popup-icon-item", "po-icon", 3, "p-icon"]], template: function PoPopupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, PoPopupComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showPopup);
    } }, dependencies: [i3.NgForOf, i3.NgIf, i4.PoIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPopupComponent, [{
        type: Component,
        args: [{ selector: 'po-popup', providers: [PoControlPositionService], template: "<div #popupRef class=\"po-popup\" *ngIf=\"showPopup\">\r\n  <div *ngIf=\"!hideArrow\" class=\"po-popup-arrow po-arrow-{{ arrowDirection }}\"></div>\r\n\r\n  <ng-content select=\"[p-popup-header-template]\"></ng-content>\r\n\r\n  <div class=\"po-popup-container\">\r\n    <ng-container *ngFor=\"let action of actions; let actionIndex = index\">\r\n      <div\r\n        *ngIf=\"returnBooleanValue(action, 'visible') !== false\"\r\n        [class.po-popup-item-default]=\"action.type !== 'danger'\"\r\n        [class.po-popup-item-danger]=\"action.type === 'danger'\"\r\n        [class.po-popup-item-disabled]=\"returnBooleanValue(action, 'disabled')\"\r\n        [class.po-popup-item-separator]=\"action.separator && actionIndex !== 0\"\r\n        [class.po-popup-item-selected]=\"action.selected\"\r\n        (click)=\"onActionClick(action)\"\r\n      >\r\n        <po-icon *ngIf=\"action.icon\" class=\"po-popup-icon-item po-icon\" [p-icon]=\"action.icon\"></po-icon>\r\n        {{ action.label }}\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.Renderer2 }, { type: i1.Router }, { type: i2.PoControlPositionService }, { type: i0.ChangeDetectorRef }]; }, { popupRef: [{
            type: ViewChild,
            args: ['popupRef', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBvcHVwL3BvLXBvcHVwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wb3B1cC9wby1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQWdCLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUcxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7SUNOL0Qsc0JBQW1GOzs7SUFBM0QsZ0ZBQW9EOzs7SUFldEUsNkJBQWlHOzs7SUFBakMsdUNBQXNCOzs7O0lBVHhGLDhCQVFDO0lBREMsaU9BQVMsZUFBQSwrQkFBcUIsQ0FBQSxJQUFDO0lBRS9CLG9HQUFpRztJQUNqRyxZQUNGO0lBQUEsaUJBQU07Ozs7OztJQVRKLG9FQUF3RCxxREFBQSw0RUFBQSx3RUFBQSw4Q0FBQTtJQU85QyxlQUFpQjtJQUFqQixxQ0FBaUI7SUFDM0IsZUFDRjtJQURFLGdEQUNGOzs7SUFaRiw2QkFBc0U7SUFDcEUsdUZBV007SUFDUiwwQkFBZTs7OztJQVhWLGVBQXFEO0lBQXJELGdGQUFxRDs7O0lBUjlELGlDQUFrRDtJQUNoRCx1RUFBbUY7SUFFbkYsa0JBQTREO0lBRTVELDhCQUFnQztJQUM5Qix5RkFhZTtJQUNqQixpQkFBTSxFQUFBOzs7SUFuQkEsZUFBZ0I7SUFBaEIsd0NBQWdCO0lBS2EsZUFBWTtJ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QUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Z0ZBL0pVLGdCQUFnQjttRUFBaEIsZ0JBQWdCOytCQUNJLFVBQVU7Ozs7MENBSDlCLENBQUMsd0JBQXdCLENBQUM7O1FDbEN2QyxpRUFxQk07O1FBckIyQixvQ0FBZTs7dUZEb0NuQyxnQkFBZ0I7Y0FMNUIsU0FBUzsyQkFDRSxVQUFVLGFBRVQsQ0FBQyx3QkFBd0IsQ0FBQzt1TEFHUSxRQUFRO2tCQUFwRCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgY2FsbEZ1bmN0aW9uLCBpc0V4dGVybmFsTGluaywgaXNUeXBlb2YsIG9wZW5FeHRlcm5hbExpbmsgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tY29udHJvbC1wb3NpdGlvbi9wby1jb250cm9sLXBvc2l0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9Qb3B1cEFjdGlvbiB9IGZyb20gJy4vcG8tcG9wdXAtYWN0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUG9wdXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby1wb3B1cC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICpcclxuICogQGRvY3NFeHRlbmRzIFBvUG9wdXBCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wb3B1cC1iYXNpY1wiIHRpdGxlPVwiUE8gUG9wdXAgLSBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcG9wdXAtYmFzaWMvc2FtcGxlLXBvLXBvcHVwLWJhc2ljLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBvcHVwLWJhc2ljL3NhbXBsZS1wby1wb3B1cC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wb3B1cC1sYWJzXCIgdGl0bGU9XCJQTyBQb3B1cCAtIExhYnNcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBvcHVwLWxhYnMvc2FtcGxlLXBvLXBvcHVwLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcG9wdXAtbGFicy9zYW1wbGUtcG8tcG9wdXAtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wb3B1cC1lbWFpbFwiIHRpdGxlPVwiUE8gUG9wdXAgRW1haWxcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBvcHVwLWVtYWlsL3NhbXBsZS1wby1wb3B1cC1lbWFpbC5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wb3B1cC1lbWFpbC9zYW1wbGUtcG8tcG9wdXAtZW1haWwuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wb3B1cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBvcHVwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQb0NvbnRyb2xQb3NpdGlvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BvcHVwQ29tcG9uZW50IGV4dGVuZHMgUG9Qb3B1cEJhc2VDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ3BvcHVwUmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHBvcHVwUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBwb0NvbnRyb2xQb3NpdGlvbjogUG9Db250cm9sUG9zaXRpb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZlY2hhIG8gY29tcG9uZW50ZSAqcG9wdXAqLlxyXG4gICAqXHJcbiAgICogPiBQb3IgcGFkcsOjbywgZXN0ZSBjb21wb3J0YW1lbnRvIMOpIGFjaW9uYWRvIHNvbWVudGUgYW8gY2xpY2FyIGZvcmEgZG8gY29tcG9uZW50ZSBvdSBlbSBkZXRlcm1pbmFkYSBhw6fDo28gLyB1cmwuXHJcbiAgICovXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuc2hvd1BvcHVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkFjdGlvbkNsaWNrKHBvcHVwQWN0aW9uOiBQb1BvcHVwQWN0aW9uKSB7XHJcbiAgICBjb25zdCBhY3Rpb25Ob0Rpc2FibGVkID0gcG9wdXBBY3Rpb24gJiYgIXRoaXMucmV0dXJuQm9vbGVhblZhbHVlKHBvcHVwQWN0aW9uLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICBpZiAocG9wdXBBY3Rpb24gJiYgcG9wdXBBY3Rpb24uYWN0aW9uICYmIGFjdGlvbk5vRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICBwb3B1cEFjdGlvbi5hY3Rpb24odGhpcy5wYXJhbSB8fCBwb3B1cEFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvcHVwQWN0aW9uICYmIHBvcHVwQWN0aW9uLnVybCAmJiBhY3Rpb25Ob0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgcmV0dXJuIHRoaXMub3BlblVybChwb3B1cEFjdGlvbi51cmwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIGNvbXBvbmVudGUgKnBvcHVwKi5cclxuICAgKlxyXG4gICAqID4gw4kgcG9zc8OtdmVsIGluZm9ybWFyIHVtIHBhcsOibWV0cm8gcXVlIHNlcsOhIHV0aWxpemFkbyBuYSBleGVjdcOnw6NvIGRhIGHDp8OjbyBkbyBpdGVtIGUgbmEgZnVuw6fDo28gZGUgZGVzYWJpbGl0YXIuXHJcbiAgICovXHJcbiAgb3BlbihwYXJhbT8pIHtcclxuICAgIHRoaXMub2xkVGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XHJcbiAgICB0aGlzLnNob3dQb3B1cCA9IHRydWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMudmFsaWRhdGVJbml0aWFsQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuQm9vbGVhblZhbHVlKHBvcHVwQWN0aW9uOiBhbnksIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1R5cGVvZihwb3B1cEFjdGlvbltwcm9wZXJ0eV0sICdmdW5jdGlvbicpXHJcbiAgICAgID8gcG9wdXBBY3Rpb25bcHJvcGVydHldKHRoaXMucGFyYW0gfHwgcG9wdXBBY3Rpb24pXHJcbiAgICAgIDogcG9wdXBBY3Rpb25bcHJvcGVydHldO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzcG9uc8OhdmVsIHBvciBhYnJpciBlIGZlY2hhciBvICpwb3B1cCouXHJcbiAgICpcclxuICAgKiBRdWFuZG8gZGlzcGFyYWRvIGFicmlyw6EgbyAqcG9wdXAqIGUgY2FzbyBvIG1lc21vIGrDoSBlc3RpdmVyIGFiZXJ0byBlIHBvc3N1aXIgbyBtZXNtbyBgdGFyZ2V0YCBpcsOhIGZlY2hhLWxvLlxyXG4gICAqXHJcbiAgICogw4kgcG9zc8OtdmVsIGluZm9ybWFyIHVtIHBhcsOibWV0cm8gcXVlIHNlcsOhIHV0aWxpemFkbyBuYSBleGVjdcOnw6NvIGRhIGHDp8OjbyBkbyBpdGVtIGUgbmEgZnVuw6fDo28gZGUgZGVzYWJpbGl0YXIuXHJcbiAgICovXHJcbiAgdG9nZ2xlKHBhcmFtPykge1xyXG4gICAgdGhpcy5zaG93UG9wdXAgJiYgdGhpcy5vbGRUYXJnZXQgPT09IHRoaXMudGFyZ2V0ID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKHBhcmFtKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xpY2tlZE91dERpc2FibGVkSXRlbShldmVudCkge1xyXG4gICAgY29uc3QgY29udGFpbnNJdGVtRGlzYWJsZWQgPVxyXG4gICAgICB0aGlzLmVsZW1lbnRDb250YWlucyhldmVudC50YXJnZXQsICdwby1wb3B1cC1pdGVtLWRpc2FibGVkJykgfHxcclxuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbnMoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQsICdwby1wb3B1cC1pdGVtLWRpc2FibGVkJyk7XHJcblxyXG4gICAgcmV0dXJuICFjb250YWluc0l0ZW1EaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xpY2tlZE91dEhlYWRlclRlbXBsYXRlKGV2ZW50KSB7XHJcbiAgICBjb25zdCBwb3B1cEhlYWRlclRlbXBsYXRlID0gdGhpcy5wb3B1cFJlZiAmJiB0aGlzLnBvcHVwUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW3AtcG9wdXAtaGVhZGVyLXRlbXBsYXRlXScpO1xyXG4gICAgcmV0dXJuICEocG9wdXBIZWFkZXJUZW1wbGF0ZSAmJiBwb3B1cEhlYWRlclRlbXBsYXRlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGlja2VkT3V0VGFyZ2V0KGV2ZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgJiYgIXRoaXMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlUG9wdXBPbkNsaWNrb3V0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jbGlja2VkT3V0VGFyZ2V0KGV2ZW50KSAmJiB0aGlzLmNsaWNrZWRPdXREaXNhYmxlZEl0ZW0oZXZlbnQpICYmIHRoaXMuY2xpY2tlZE91dEhlYWRlclRlbXBsYXRlKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVsZW1lbnRDb250YWlucyhlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NvbnRlbnRUb1Nob3coKSB7XHJcbiAgICByZXR1cm4gISEodGhpcy5wb3B1cFJlZi5uYXRpdmVFbGVtZW50ICYmIHRoaXMucG9wdXBSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNsaWNrb3V0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZVBvcHVwT25DbGlja291dChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2Nyb2xsID0gKHsgdGFyZ2V0IH0pOiB2b2lkID0+IHtcclxuICAgIGlmICh0aGlzLnNob3dQb3B1cCAmJiB0YXJnZXQuY2xhc3NOYW1lICE9PSAncG8tcG9wdXAtY29udGFpbmVyJykge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNFeHRlcm5hbExpbmsodXJsKSkge1xyXG4gICAgICByZXR1cm4gb3BlbkV4dGVybmFsTGluayh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgaWYgKHRoaXMuY2xpY2tvdXRMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmNsaWNrb3V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yZXNpemVMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbigpIHtcclxuICAgIHRoaXMucG9Db250cm9sUG9zaXRpb24uc2V0RWxlbWVudHMoXHJcbiAgICAgIHRoaXMucG9wdXBSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgOCxcclxuICAgICAgdGhpcy50YXJnZXQsXHJcbiAgICAgIHRoaXMuY3VzdG9tUG9zaXRpb25zLFxyXG4gICAgICBmYWxzZSxcclxuICAgICAgdGhpcy5pc0Nvcm5lckFsaWduXHJcbiAgICApO1xyXG4gICAgdGhpcy5wb0NvbnRyb2xQb3NpdGlvbi5hZGp1c3RQb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcclxuICAgIHRoaXMuYXJyb3dEaXJlY3Rpb24gPSB0aGlzLnBvQ29udHJvbFBvc2l0aW9uLmdldEFycm93RGlyZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlSW5pdGlhbENvbnRlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5oYXNDb250ZW50VG9TaG93KCkpIHtcclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAjcG9wdXBSZWYgY2xhc3M9XCJwby1wb3B1cFwiICpuZ0lmPVwic2hvd1BvcHVwXCI+XHJcbiAgPGRpdiAqbmdJZj1cIiFoaWRlQXJyb3dcIiBjbGFzcz1cInBvLXBvcHVwLWFycm93IHBvLWFycm93LXt7IGFycm93RGlyZWN0aW9uIH19XCI+PC9kaXY+XHJcblxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltwLXBvcHVwLWhlYWRlci10ZW1wbGF0ZV1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1wb3B1cC1jb250YWluZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zOyBsZXQgYWN0aW9uSW5kZXggPSBpbmRleFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJyZXR1cm5Cb29sZWFuVmFsdWUoYWN0aW9uLCAndmlzaWJsZScpICE9PSBmYWxzZVwiXHJcbiAgICAgICAgW2NsYXNzLnBvLXBvcHVwLWl0ZW0tZGVmYXVsdF09XCJhY3Rpb24udHlwZSAhPT0gJ2RhbmdlcidcIlxyXG4gICAgICAgIFtjbGFzcy5wby1wb3B1cC1pdGVtLWRhbmdlcl09XCJhY3Rpb24udHlwZSA9PT0gJ2RhbmdlcidcIlxyXG4gICAgICAgIFtjbGFzcy5wby1wb3B1cC1pdGVtLWRpc2FibGVkXT1cInJldHVybkJvb2xlYW5WYWx1ZShhY3Rpb24sICdkaXNhYmxlZCcpXCJcclxuICAgICAgICBbY2xhc3MucG8tcG9wdXAtaXRlbS1zZXBhcmF0b3JdPVwiYWN0aW9uLnNlcGFyYXRvciAmJiBhY3Rpb25JbmRleCAhPT0gMFwiXHJcbiAgICAgICAgW2NsYXNzLnBvLXBvcHVwLWl0ZW0tc2VsZWN0ZWRdPVwiYWN0aW9uLnNlbGVjdGVkXCJcclxuICAgICAgICAoY2xpY2spPVwib25BY3Rpb25DbGljayhhY3Rpb24pXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwby1pY29uICpuZ0lmPVwiYWN0aW9uLmljb25cIiBjbGFzcz1cInBvLXBvcHVwLWljb24taXRlbSBwby1pY29uXCIgW3AtaWNvbl09XCJhY3Rpb24uaWNvblwiPjwvcG8taWNvbj5cclxuICAgICAgICB7eyBhY3Rpb24ubGFiZWwgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==