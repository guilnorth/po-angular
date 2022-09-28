import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { isExternalLink, isIE } from '../../../../utils/util';
import { poRichTextLiteralsDefault } from '../po-rich-text-literals';
import * as i0 from "@angular/core";
import * as i1 from "./../../../../services/po-language/po-language.service";
import * as i2 from "@angular/forms";
import * as i3 from "../../../po-modal/po-modal.component";
import * as i4 from "../../po-input/po-input.component";
import * as i5 from "../../po-url/po-url.component";
const _c0 = ["modal"];
const _c1 = ["modalLinkForm"];
export class PoRichTextLinkModalComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.command = new EventEmitter();
        this.linkEditing = new EventEmitter();
        this.selection = document.getSelection();
        this.literals = {
            ...poRichTextLiteralsDefault[this.languageService.getShortLanguage()]
        };
        this.modalCancelAction = {
            label: this.literals.cancel,
            action: () => {
                this.modal.close();
                this.command.emit();
                this.retrieveCursorPosition();
                this.cleanUpFields();
            }
        };
        this.modalConfirmAction = {
            label: this.linkConfirmAction(),
            disabled: true,
            action: () => (this.isLinkEditing ? this.toEditLink() : this.toInsertLink(this.urlLink, this.urlLinkText))
        };
    }
    linkConfirmAction() {
        return this.isLinkEditing ? this.literals.editLink : this.literals.insertLink;
    }
    formModelValidate() {
        return (this.modalConfirmAction.disabled = this.modalLinkForm?.invalid);
    }
    openModal(selectedLinkElement) {
        this.saveCursorPosition();
        this.prepareModalForLink(selectedLinkElement);
        this.modalConfirmAction.label = this.linkConfirmAction();
        this.modal.open();
    }
    selectedLink(linkElement) {
        this.isSelectedLink = !!linkElement;
        this.linkElement = linkElement;
    }
    checkIfIsEmpty(urlLink, urlLinkText) {
        return urlLinkText === undefined || urlLinkText.trim() === '' ? urlLink : urlLinkText;
    }
    cleanUpFields() {
        this.urlLink = undefined;
        this.urlLinkText = undefined;
        this.isLinkEditing = false;
        this.isSelectedLink = false;
        this.linkElement = undefined;
    }
    formReset(control) {
        control.markAsPristine();
        control.markAsUntouched();
        control.updateValueAndValidity();
    }
    prepareModalForLink(selectedLinkElement) {
        this.saveSelectionText();
        if (this.modalLinkForm) {
            this.formReset(this.modalLinkForm.control);
        }
        setTimeout(() => {
            this.formModelValidate();
        });
        this.selectedLink(selectedLinkElement);
        if (this.isSelectedLink) {
            this.isLinkEditing = true;
            this.setLinkEditableForModal();
        }
        this.linkEditing.emit(this.isLinkEditing);
    }
    restoreSelection() {
        if (this.savedSelection) {
            if (this.selection) {
                this.selection.removeAllRanges();
                this.selection.addRange(this.savedSelection);
            }
            return true;
        }
        else {
            return false;
        }
    }
    retrieveCursorPosition() {
        this.selection.collapse(this.savedCursorPosition[0], this.savedCursorPosition[1]);
    }
    saveCursorPosition() {
        this.savedCursorPosition = [this.selection.focusNode, this.selection.focusOffset];
    }
    saveSelectionText() {
        if (this.selection.anchorNode !== null) {
            this.savedSelection = this.selection.getRangeAt(0);
            this.urlLinkText = this.selection.toString();
        }
        else {
            return null;
        }
    }
    setLinkEditableForModal() {
        this.urlLinkText = this.linkElement.innerText;
        this.urlLink = this.linkElement.getAttribute('href');
    }
    toEditLink() {
        if (isIE()) {
            this.linkElement.parentNode.removeChild(this.linkElement);
        }
        else {
            this.linkElement.remove();
        }
        this.toInsertLink(this.urlLink, this.urlLinkText);
    }
    toInsertLink(urlLink, urlLinkText) {
        this.modal.close();
        this.restoreSelection();
        const urlLinkTextValue = this.checkIfIsEmpty(urlLink, urlLinkText);
        const urlAsExternalLink = isExternalLink(urlLink) ? urlLink : `http://${urlLink}`;
        const command = 'InsertHTML';
        const value = { urlLink: urlAsExternalLink, urlLinkText: urlLinkTextValue };
        this.command.emit({ command, value });
        this.cleanUpFields();
    }
}
PoRichTextLinkModalComponent.ɵfac = function PoRichTextLinkModalComponent_Factory(t) { return new (t || PoRichTextLinkModalComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoRichTextLinkModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRichTextLinkModalComponent, selectors: [["po-rich-text-link-modal"]], viewQuery: function PoRichTextLinkModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalLinkForm = _t.first);
    } }, outputs: { command: "p-command", linkEditing: "p-link-editing" }, decls: 7, vars: 9, consts: [["p-hide-close", "", 3, "p-primary-action", "p-secondary-action", "p-title"], ["modal", ""], ["modalLinkForm", "ngForm"], [1, "po-row"], ["name", "urlLinkText", "p-optional", "", 1, "po-md-12", "po-mb-2", 3, "ngModel", "p-label", "p-placeholder", "ngModelChange"], ["name", "urlLink", "p-label", "Link", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-help", "p-placeholder", "ngModelChange", "p-change-model"]], template: function PoRichTextLinkModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0, 1)(2, "form", null, 2)(4, "div", 3)(5, "po-input", 4);
        i0.ɵɵlistener("ngModelChange", function PoRichTextLinkModalComponent_Template_po_input_ngModelChange_5_listener($event) { return ctx.urlLinkText = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "po-url", 5);
        i0.ɵɵlistener("ngModelChange", function PoRichTextLinkModalComponent_Template_po_url_ngModelChange_6_listener($event) { return ctx.urlLink = $event; })("p-change-model", function PoRichTextLinkModalComponent_Template_po_url_p_change_model_6_listener() { return ctx.formModelValidate(); });
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵproperty("p-primary-action", ctx.modalConfirmAction)("p-secondary-action", ctx.modalCancelAction)("p-title", ctx.linkConfirmAction());
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.urlLinkText)("p-label", ctx.literals.linkTextLabel)("p-placeholder", ctx.literals.linkTextLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.urlLink)("p-help", ctx.literals.linkUrlTextHelper)("p-placeholder", ctx.literals.linkUrlTextPlaceholder);
    } }, dependencies: [i2.ɵNgNoValidate, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm, i3.PoModalComponent, i4.PoInputComponent, i5.PoUrlComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextLinkModalComponent, [{
        type: Component,
        args: [{ selector: 'po-rich-text-link-modal', template: "<po-modal\r\n  #modal\r\n  p-hide-close\r\n  [p-primary-action]=\"modalConfirmAction\"\r\n  [p-secondary-action]=\"modalCancelAction\"\r\n  [p-title]=\"linkConfirmAction()\"\r\n>\r\n  <form #modalLinkForm=\"ngForm\">\r\n    <div class=\"po-row\">\r\n      <po-input\r\n        class=\"po-md-12 po-mb-2\"\r\n        name=\"urlLinkText\"\r\n        [(ngModel)]=\"urlLinkText\"\r\n        p-optional\r\n        [p-label]=\"literals.linkTextLabel\"\r\n        [p-placeholder]=\"literals.linkTextLabel\"\r\n      >\r\n      </po-input>\r\n\r\n      <po-url\r\n        class=\"po-md-12\"\r\n        name=\"urlLink\"\r\n        [(ngModel)]=\"urlLink\"\r\n        p-label=\"Link\"\r\n        p-required\r\n        [p-help]=\"literals.linkUrlTextHelper\"\r\n        [p-placeholder]=\"literals.linkUrlTextPlaceholder\"\r\n        (p-change-model)=\"formModelValidate()\"\r\n      >\r\n      </po-url>\r\n    </div>\r\n  </form>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { modal: [{
            type: ViewChild,
            args: ['modal', { static: true }]
        }], modalLinkForm: [{
            type: ViewChild,
            args: ['modalLinkForm']
        }], command: [{
            type: Output,
            args: ['p-command']
        }], linkEditing: [{
            type: Output,
            args: ['p-link-editing']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LWxpbmstbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXJpY2gtdGV4dC9wby1yaWNoLXRleHQtbGluay1tb2RhbC9wby1yaWNoLXRleHQtbGluay1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tcmljaC10ZXh0L3BvLXJpY2gtdGV4dC1saW5rLW1vZGFsL3BvLXJpY2gtdGV4dC1saW5rLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUk5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0FBTXJFLE1BQU0sT0FBTyw0QkFBNEI7SUF1Q3ZDLFlBQW9CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQWxDakMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFxRCxDQUFDO1FBRTNFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdoRSxjQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBSTNCLGFBQVEsR0FBRztZQUNsQixHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0RSxDQUFDO1FBRUYsc0JBQWlCLEdBQWtCO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07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QTRCOytFQUE1Qiw0QkFBNEI7Ozs7Ozs7O1FDYnpDLHNDQU1DLG9CQUFBLGFBQUEsa0JBQUE7UUFNTyw2SkFBeUI7UUFLM0IsaUJBQVc7UUFFWCxpQ0FTQztRQU5DLHVKQUFxQiw4R0FLSCx1QkFBbUIsSUFMaEI7UUFPdkIsaUJBQVMsRUFBQSxFQUFBLEVBQUE7O1FBMUJiLHlEQUF1Qyw2Q0FBQSxvQ0FBQTtRQVNqQyxlQUF5QjtRQUF6Qix5Q0FBeUIsdUNBQUEsNkNBQUE7UUFVekIsZUFBcUI7UUFBckIscUNBQXFCLDBDQUFBLHNEQUFBOzt1RkRUaEIsNEJBQTRCO2NBSnhDLFNBQVM7MkJBQ0UseUJBQXlCO29FQUlHLEtBQUs7a0JBQTFDLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVSLGFBQWE7a0JBQXhDLFNBQVM7bUJBQUMsZUFBZTtZQUVMLE9BQU87a0JBQTNCLE1BQU07bUJBQUMsV0FBVztZQUVPLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc0V4dGVybmFsTGluaywgaXNJRSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb01vZGFsQWN0aW9uLCBQb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vcG8tbW9kYWwnO1xyXG5pbXBvcnQgeyBwb1JpY2hUZXh0TGl0ZXJhbHNEZWZhdWx0IH0gZnJvbSAnLi4vcG8tcmljaC10ZXh0LWxpdGVyYWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcmljaC10ZXh0LWxpbmstbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1yaWNoLXRleHQtbGluay1tb2RhbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUmljaFRleHRMaW5rTW9kYWxDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJywgeyBzdGF0aWM6IHRydWUgfSkgbW9kYWw6IFBvTW9kYWxDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsTGlua0Zvcm0nKSBtb2RhbExpbmtGb3JtOiBOZ0Zvcm07XHJcblxyXG4gIEBPdXRwdXQoJ3AtY29tbWFuZCcpIGNvbW1hbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgY29tbWFuZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgYW55IH0+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3AtbGluay1lZGl0aW5nJykgbGlua0VkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgc2F2ZWRDdXJzb3JQb3NpdGlvbjtcclxuICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICB1cmxMaW5rOiBzdHJpbmc7XHJcbiAgdXJsTGlua1RleHQ6IHN0cmluZztcclxuXHJcbiAgcmVhZG9ubHkgbGl0ZXJhbHMgPSB7XHJcbiAgICAuLi5wb1JpY2hUZXh0TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKV1cclxuICB9O1xyXG5cclxuICBtb2RhbENhbmNlbEFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHtcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmNhbmNlbCxcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgIHRoaXMuY29tbWFuZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMucmV0cmlldmVDdXJzb3JQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmNsZWFuVXBGaWVsZHMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtb2RhbENvbmZpcm1BY3Rpb24gPSB7XHJcbiAgICBsYWJlbDogdGhpcy5saW5rQ29uZmlybUFjdGlvbigpLFxyXG4gICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICBhY3Rpb246ICgpID0+ICh0aGlzLmlzTGlua0VkaXRpbmcgPyB0aGlzLnRvRWRpdExpbmsoKSA6IHRoaXMudG9JbnNlcnRMaW5rKHRoaXMudXJsTGluaywgdGhpcy51cmxMaW5rVGV4dCkpXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBpc0xpbmtFZGl0aW5nOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXNTZWxlY3RlZExpbms6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsaW5rRWxlbWVudDogYW55O1xyXG4gIHByaXZhdGUgc2F2ZWRTZWxlY3Rpb246IFJhbmdlIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICBsaW5rQ29uZmlybUFjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNMaW5rRWRpdGluZyA/IHRoaXMubGl0ZXJhbHMuZWRpdExpbmsgOiB0aGlzLmxpdGVyYWxzLmluc2VydExpbms7XHJcbiAgfVxyXG5cclxuICBmb3JtTW9kZWxWYWxpZGF0ZSgpIHtcclxuICAgIHJldHVybiAodGhpcy5tb2RhbENvbmZpcm1BY3Rpb24uZGlzYWJsZWQgPSB0aGlzLm1vZGFsTGlua0Zvcm0/LmludmFsaWQpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKHNlbGVjdGVkTGlua0VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuc2F2ZUN1cnNvclBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnByZXBhcmVNb2RhbEZvckxpbmsoc2VsZWN0ZWRMaW5rRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5tb2RhbENvbmZpcm1BY3Rpb24ubGFiZWwgPSB0aGlzLmxpbmtDb25maXJtQWN0aW9uKCk7XHJcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0ZWRMaW5rKGxpbmtFbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmlzU2VsZWN0ZWRMaW5rID0gISFsaW5rRWxlbWVudDtcclxuICAgIHRoaXMubGlua0VsZW1lbnQgPSBsaW5rRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tJZklzRW1wdHkodXJsTGluazogc3RyaW5nLCB1cmxMaW5rVGV4dDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsTGlua1RleHQgPT09IHVuZGVmaW5lZCB8fCB1cmxMaW5rVGV4dC50cmltKCkgPT09ICcnID8gdXJsTGluayA6IHVybExpbmtUZXh0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblVwRmllbGRzKCkge1xyXG4gICAgdGhpcy51cmxMaW5rID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy51cmxMaW5rVGV4dCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNMaW5rRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1NlbGVjdGVkTGluayA9IGZhbHNlO1xyXG4gICAgdGhpcy5saW5rRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlc2V0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlTW9kYWxGb3JMaW5rKHNlbGVjdGVkTGlua0VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuc2F2ZVNlbGVjdGlvblRleHQoKTtcclxuICAgIGlmICh0aGlzLm1vZGFsTGlua0Zvcm0pIHtcclxuICAgICAgdGhpcy5mb3JtUmVzZXQodGhpcy5tb2RhbExpbmtGb3JtLmNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1Nb2RlbFZhbGlkYXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkTGluayhzZWxlY3RlZExpbmtFbGVtZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkTGluaykge1xyXG4gICAgICB0aGlzLmlzTGlua0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldExpbmtFZGl0YWJsZUZvck1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saW5rRWRpdGluZy5lbWl0KHRoaXMuaXNMaW5rRWRpdGluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVTZWxlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5zYXZlZFNlbGVjdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hZGRSYW5nZSh0aGlzLnNhdmVkU2VsZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmV0cmlldmVDdXJzb3JQb3NpdGlvbigpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxhcHNlKHRoaXMuc2F2ZWRDdXJzb3JQb3NpdGlvblswXSwgdGhpcy5zYXZlZEN1cnNvclBvc2l0aW9uWzFdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZUN1cnNvclBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5zYXZlZEN1cnNvclBvc2l0aW9uID0gW3RoaXMuc2VsZWN0aW9uLmZvY3VzTm9kZSwgdGhpcy5zZWxlY3Rpb24uZm9jdXNPZmZzZXRdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlU2VsZWN0aW9uVGV4dCgpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5hbmNob3JOb2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2F2ZWRTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICB0aGlzLnVybExpbmtUZXh0ID0gdGhpcy5zZWxlY3Rpb24udG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRMaW5rRWRpdGFibGVGb3JNb2RhbCgpIHtcclxuICAgIHRoaXMudXJsTGlua1RleHQgPSB0aGlzLmxpbmtFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIHRoaXMudXJsTGluayA9IHRoaXMubGlua0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvRWRpdExpbmsoKSB7XHJcbiAgICBpZiAoaXNJRSgpKSB7XHJcbiAgICAgIHRoaXMubGlua0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmxpbmtFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGlua0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b0luc2VydExpbmsodGhpcy51cmxMaW5rLCB0aGlzLnVybExpbmtUZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9JbnNlcnRMaW5rKHVybExpbmssIHVybExpbmtUZXh0KSB7XHJcbiAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB0aGlzLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBjb25zdCB1cmxMaW5rVGV4dFZhbHVlID0gdGhpcy5jaGVja0lmSXNFbXB0eSh1cmxMaW5rLCB1cmxMaW5rVGV4dCk7XHJcbiAgICBjb25zdCB1cmxBc0V4dGVybmFsTGluayA9IGlzRXh0ZXJuYWxMaW5rKHVybExpbmspID8gdXJsTGluayA6IGBodHRwOi8vJHt1cmxMaW5rfWA7XHJcblxyXG4gICAgY29uc3QgY29tbWFuZDogc3RyaW5nID0gJ0luc2VydEhUTUwnO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0geyB1cmxMaW5rOiB1cmxBc0V4dGVybmFsTGluaywgdXJsTGlua1RleHQ6IHVybExpbmtUZXh0VmFsdWUgfTtcclxuXHJcbiAgICB0aGlzLmNvbW1hbmQuZW1pdCh7IGNvbW1hbmQsIHZhbHVlIH0pO1xyXG5cclxuICAgIHRoaXMuY2xlYW5VcEZpZWxkcygpO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tbW9kYWxcclxuICAjbW9kYWxcclxuICBwLWhpZGUtY2xvc2VcclxuICBbcC1wcmltYXJ5LWFjdGlvbl09XCJtb2RhbENvbmZpcm1BY3Rpb25cIlxyXG4gIFtwLXNlY29uZGFyeS1hY3Rpb25dPVwibW9kYWxDYW5jZWxBY3Rpb25cIlxyXG4gIFtwLXRpdGxlXT1cImxpbmtDb25maXJtQWN0aW9uKClcIlxyXG4+XHJcbiAgPGZvcm0gI21vZGFsTGlua0Zvcm09XCJuZ0Zvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1yb3dcIj5cclxuICAgICAgPHBvLWlucHV0XHJcbiAgICAgICAgY2xhc3M9XCJwby1tZC0xMiBwby1tYi0yXCJcclxuICAgICAgICBuYW1lPVwidXJsTGlua1RleHRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwidXJsTGlua1RleHRcIlxyXG4gICAgICAgIHAtb3B0aW9uYWxcclxuICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5saW5rVGV4dExhYmVsXCJcclxuICAgICAgICBbcC1wbGFjZWhvbGRlcl09XCJsaXRlcmFscy5saW5rVGV4dExhYmVsXCJcclxuICAgICAgPlxyXG4gICAgICA8L3BvLWlucHV0PlxyXG5cclxuICAgICAgPHBvLXVybFxyXG4gICAgICAgIGNsYXNzPVwicG8tbWQtMTJcIlxyXG4gICAgICAgIG5hbWU9XCJ1cmxMaW5rXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInVybExpbmtcIlxyXG4gICAgICAgIHAtbGFiZWw9XCJMaW5rXCJcclxuICAgICAgICBwLXJlcXVpcmVkXHJcbiAgICAgICAgW3AtaGVscF09XCJsaXRlcmFscy5saW5rVXJsVGV4dEhlbHBlclwiXHJcbiAgICAgICAgW3AtcGxhY2Vob2xkZXJdPVwibGl0ZXJhbHMubGlua1VybFRleHRQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgKHAtY2hhbmdlLW1vZGVsKT1cImZvcm1Nb2RlbFZhbGlkYXRlKClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tdXJsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG48L3BvLW1vZGFsPlxyXG4iXX0=