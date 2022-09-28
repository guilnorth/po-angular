import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { isIE } from '../../../../utils/util';
import { poRichTextLiteralsDefault } from '../po-rich-text-literals';
import { PoRichTextImageModalComponent } from '../po-rich-text-image-modal/po-rich-text-image-modal.component';
import { PoRichTextLinkModalComponent } from '../po-rich-text-link-modal/po-rich-text-link-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../po-button-group/po-button-group.component";
import * as i4 from "../../../../directives/po-tooltip/po-tooltip.directive";
import * as i5 from "../po-rich-text-image-modal/po-rich-text-image-modal.component";
import * as i6 from "../po-rich-text-link-modal/po-rich-text-link-modal.component";
const _c0 = ["colorPickerInput"];
const _c1 = ["toolbarElement"];
function PoRichTextToolbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "button", 17)(3, "input", 18, 19);
    i0.ɵɵlistener("change", function PoRichTextToolbarComponent_div_4_Template_input_change_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.changeTextColor($event.target.value)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.readonly)("p-tooltip", ctx_r1.literals.textColor);
    i0.ɵɵattribute("aria-label", ctx_r1.literals.textColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r1.readonly);
    i0.ɵɵattribute("aria-label", ctx_r1.literals.textColor);
} }
function PoRichTextToolbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "po-button-group", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-buttons", ctx_r2.alignButtons);
} }
const poRichTextDefaultColor = '#000000';
export class PoRichTextToolbarComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.command = new EventEmitter();
        this.modal = new EventEmitter();
        this.linkEditing = new EventEmitter();
        this.literals = {
            ...poRichTextLiteralsDefault[this.languageService.getShortLanguage()]
        };
        this.alignButtons = [
            {
                command: 'justifyleft',
                icon: 'po-icon-align-left',
                tooltip: this.literals.left,
                action: this.emitAlignCommand.bind(this, 'justifyleft'),
                selected: true
            },
            {
                command: 'justifycenter',
                icon: 'po-icon-align-center',
                tooltip: this.literals.center,
                action: this.emitAlignCommand.bind(this, 'justifycenter')
            },
            {
                command: 'justifyright',
                icon: 'po-icon-align-right',
                tooltip: this.literals.right,
                action: this.emitAlignCommand.bind(this, 'justifyright')
            },
            {
                command: 'justifyfull',
                icon: 'po-icon-align-justify',
                tooltip: this.literals.justify,
                action: this.emitAlignCommand.bind(this, 'justifyfull')
            }
        ];
        this.formatButtons = [
            {
                command: 'bold',
                icon: 'po-icon-text-bold',
                tooltip: this.literals.bold,
                action: this.emitCommand.bind(this, 'bold')
            },
            {
                command: 'italic',
                icon: 'po-icon-text-italic',
                tooltip: this.literals.italic,
                action: this.emitCommand.bind(this, 'italic')
            },
            {
                command: 'underline',
                icon: 'po-icon-text-underline',
                tooltip: this.literals.underline,
                action: this.emitCommand.bind(this, 'underline')
            }
        ];
        this.listButtons = [
            {
                command: 'insertUnorderedList',
                icon: 'po-icon-list',
                tooltip: this.literals.unorderedList,
                action: this.emitCommand.bind(this, 'insertUnorderedList')
            }
        ];
        this.linkButtons = [
            {
                command: 'Createlink',
                icon: 'po-icon-link',
                tooltip: `${this.literals.insertLink} (Ctrl + K)`,
                action: () => this.richTextLinkModal.openModal(this.selectedLinkElement)
            }
        ];
        this.mediaButtons = [
            {
                tooltip: this.literals.insertImage,
                icon: 'po-icon-picture',
                action: () => this.richTextImageModal.openModal()
            }
        ];
    }
    set disabledTextAlign(value) {
        this._disabledTextAlign = value;
    }
    get disabledTextAlign() {
        return this._disabledTextAlign;
    }
    set readonly(value) {
        this._readonly = value;
        this.toggleDisableButtons(this._readonly);
    }
    get readonly() {
        return this._readonly;
    }
    get isInternetExplorer() {
        return isIE();
    }
    ngAfterViewInit() {
        this.removeButtonFocus();
        this.setColorInColorPicker(poRichTextDefaultColor);
    }
    changeTextColor(value) {
        const command = 'foreColor';
        this.command.emit({ command, value });
    }
    emitLinkEditing(isLinkEdit) {
        this.linkEditing.emit(isLinkEdit);
    }
    selectedLink(selectedLinkElement) {
        this.selectedLinkElement = selectedLinkElement;
    }
    setButtonsStates(obj) {
        if (!this.readonly) {
            this.alignButtons.forEach(button => (button.selected = obj.commands.includes(button.command)));
            this.formatButtons.forEach(button => (button.selected = obj.commands.includes(button.command)));
            this.listButtons[0].selected = obj.commands.includes(this.listButtons[0].command);
            this.linkButtons[0].selected = obj.commands.includes(this.linkButtons[0].command);
            this.setColorInColorPicker(obj.hexColor);
        }
    }
    shortcutTrigger() {
        this.richTextLinkModal.openModal(this.selectedLinkElement);
    }
    emitCommand(command) {
        this.command.emit(command);
    }
    emitAlignCommand(command) {
        const index = this.alignButtons.findIndex(btn => btn.command === command);
        if (this.alignButtons[index].selected) {
            this.alignButtons[index].selected = false;
        }
        this.command.emit(command);
    }
    removeButtonFocus() {
        const buttons = this.toolbarElement.nativeElement.querySelectorAll('button');
        buttons.forEach(button => button.setAttribute('tabindex', '-1'));
    }
    setColorInColorPicker(color) {
        this.colorPickerInput.nativeElement.value = color;
    }
    toggleDisableButtons(state) {
        this.alignButtons.forEach(button => (button.disabled = state));
        this.formatButtons.forEach(button => (button.disabled = state));
        this.listButtons[0].disabled = state;
        this.linkButtons[0].disabled = state;
        this.mediaButtons[0].disabled = state;
    }
}
PoRichTextToolbarComponent.ɵfac = function PoRichTextToolbarComponent_Factory(t) { return new (t || PoRichTextToolbarComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoRichTextToolbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRichTextToolbarComponent, selectors: [["po-rich-text-toolbar"]], viewQuery: function PoRichTextToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
        i0.ɵɵviewQuery(_c1, 7);
        i0.ɵɵviewQuery(PoRichTextImageModalComponent, 7);
        i0.ɵɵviewQuery(PoRichTextLinkModalComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colorPickerInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.richTextImageModal = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.richTextLinkModal = _t.first);
    } }, inputs: { disabledTextAlign: ["p-disabled-text-align", "disabledTextAlign"], readonly: ["p-readonly", "readonly"] }, outputs: { command: "p-command", modal: "p-modal", linkEditing: "p-link-editing" }, decls: 16, vars: 6, consts: [[1, "po-rich-text-toolbar"], ["toolbarElement", ""], ["data-rich-text-toolbar", "format", 1, "po-rich-text-toolbar-button-align"], ["p-toggle", "multiple", 3, "p-buttons"], ["class", "po-rich-text-toolbar-button-align", "data-rich-text-toolbar", "color", 4, "ngIf"], ["class", "po-rich-text-toolbar-button-align", "data-rich-text-toolbar", "align", 4, "ngIf"], ["data-rich-text-toolbar", "list", 1, "po-rich-text-toolbar-button-align"], ["p-toggle", "single", 3, "p-buttons"], ["data-rich-text-toolbar", "link", 1, "po-rich-text-toolbar-button-align"], [3, "p-buttons"], ["data-rich-text-toolbar", "media", 1, "po-rich-text-toolbar-button-align"], [3, "p-command"], ["richTextImageModal", ""], [3, "p-command", "p-link-editing"], ["richTextLinkModal", ""], ["data-rich-text-toolbar", "color", 1, "po-rich-text-toolbar-button-align"], [1, "po-rich-text-toolbar-color-picker-container"], [1, "po-button", "po-button-default", "po-rich-text-toolbar-color-picker-button", 3, "disabled", "p-tooltip"], ["type", "color", 1, "po-rich-text-toolbar-color-picker-input", 3, "disabled", "change"], ["colorPickerInput", ""], ["data-rich-text-toolbar", "align", 1, "po-rich-text-toolbar-button-align"]], template: function PoRichTextToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1)(2, "div", 2);
        i0.ɵɵelement(3, "po-button-group", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PoRichTextToolbarComponent_div_4_Template, 5, 5, "div", 4);
        i0.ɵɵtemplate(5, PoRichTextToolbarComponent_div_5_Template, 2, 1, "div", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelement(7, "po-button-group", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 8);
        i0.ɵɵelement(9, "po-button-group", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 10);
        i0.ɵɵelement(11, "po-button-group", 9);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "po-rich-text-image-modal", 11, 12);
        i0.ɵɵlistener("p-command", function PoRichTextToolbarComponent_Template_po_rich_text_image_modal_p_command_12_listener($event) { return ctx.emitCommand($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "po-rich-text-link-modal", 13, 14);
        i0.ɵɵlistener("p-command", function PoRichTextToolbarComponent_Template_po_rich_text_link_modal_p_command_14_listener($event) { return ctx.emitCommand($event); })("p-link-editing", function PoRichTextToolbarComponent_Template_po_rich_text_link_modal_p_link_editing_14_listener($event) { return ctx.emitLinkEditing($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("p-buttons", ctx.formatButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isInternetExplorer);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.disabledTextAlign);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-buttons", ctx.listButtons);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-buttons", ctx.linkButtons);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-buttons", ctx.mediaButtons);
    } }, dependencies: [i2.NgIf, i3.PoButtonGroupComponent, i4.PoTooltipDirective, i5.PoRichTextImageModalComponent, i6.PoRichTextLinkModalComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextToolbarComponent, [{
        type: Component,
        args: [{ selector: 'po-rich-text-toolbar', template: "<div class=\"po-rich-text-toolbar\" #toolbarElement>\r\n  <div class=\"po-rich-text-toolbar-button-align\" data-rich-text-toolbar=\"format\">\r\n    <po-button-group p-toggle=\"multiple\" [p-buttons]=\"formatButtons\"> </po-button-group>\r\n  </div>\r\n\r\n  <div *ngIf=\"!isInternetExplorer\" class=\"po-rich-text-toolbar-button-align\" data-rich-text-toolbar=\"color\">\r\n    <div class=\"po-rich-text-toolbar-color-picker-container\">\r\n      <button\r\n        class=\"po-button po-button-default po-rich-text-toolbar-color-picker-button\"\r\n        [disabled]=\"readonly\"\r\n        [p-tooltip]=\"literals.textColor\"\r\n        [attr.aria-label]=\"literals.textColor\"\r\n      >\r\n        <input\r\n          #colorPickerInput\r\n          class=\"po-rich-text-toolbar-color-picker-input\"\r\n          type=\"color\"\r\n          [disabled]=\"readonly\"\r\n          (change)=\"changeTextColor($event.target.value)\"\r\n          [attr.aria-label]=\"literals.textColor\"\r\n        />\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!disabledTextAlign\" class=\"po-rich-text-toolbar-button-align\" data-rich-text-toolbar=\"align\">\r\n    <po-button-group p-toggle=\"single\" [p-buttons]=\"alignButtons\"> </po-button-group>\r\n  </div>\r\n\r\n  <div class=\"po-rich-text-toolbar-button-align\" data-rich-text-toolbar=\"list\">\r\n    <po-button-group p-toggle=\"single\" [p-buttons]=\"listButtons\"> </po-button-group>\r\n  </div>\r\n\r\n  <div class=\"po-rich-text-toolbar-button-align\" data-rich-text-toolbar=\"link\">\r\n    <po-button-group [p-buttons]=\"linkButtons\"> </po-button-group>\r\n  </div>\r\n\r\n  <div class=\"po-rich-text-toolbar-button-align\" data-rich-text-toolbar=\"media\">\r\n    <po-button-group [p-buttons]=\"mediaButtons\"> </po-button-group>\r\n  </div>\r\n</div>\r\n\r\n<po-rich-text-image-modal #richTextImageModal (p-command)=\"emitCommand($event)\"> </po-rich-text-image-modal>\r\n\r\n<po-rich-text-link-modal\r\n  #richTextLinkModal\r\n  (p-command)=\"emitCommand($event)\"\r\n  (p-link-editing)=\"emitLinkEditing($event)\"\r\n>\r\n</po-rich-text-link-modal>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { colorPickerInput: [{
            type: ViewChild,
            args: ['colorPickerInput', { read: ElementRef }]
        }], toolbarElement: [{
            type: ViewChild,
            args: ['toolbarElement', { static: true }]
        }], richTextImageModal: [{
            type: ViewChild,
            args: [PoRichTextImageModalComponent, { static: true }]
        }], richTextLinkModal: [{
            type: ViewChild,
            args: [PoRichTextLinkModalComponent, { static: true }]
        }], command: [{
            type: Output,
            args: ['p-command']
        }], modal: [{
            type: Output,
            args: ['p-modal']
        }], linkEditing: [{
            type: Output,
            args: ['p-link-editing']
        }], disabledTextAlign: [{
            type: Input,
            args: ['p-disabled-text-align']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXJpY2gtdGV4dC9wby1yaWNoLXRleHQtdG9vbGJhci9wby1yaWNoLXRleHQtdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tcmljaC10ZXh0L3BvLXJpY2gtdGV4dC10b29sYmFyL3BvLXJpY2gtdGV4dC10b29sYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXJFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7Ozs7Ozs7Ozs7SUNKMUcsK0JBQTBHLGNBQUEsaUJBQUEsb0JBQUE7SUFhbEcsOEtBQVUsZUFBQSwyQ0FBb0MsQ0FBQSxJQUFDO0lBTGpELGlCQU9FLEVBQUEsRUFBQSxFQUFBOzs7SUFYRixlQUFxQjtJQUFyQiwwQ0FBcUIsd0NBQUE7SUFFckIsdURBQXNDO0lBTXBDLGVBQXFCO0lBQXJCLDBDQUFxQjtJQUVyQix1REFBc0M7OztJQU05QywrQkFBeUc7SUFDdkcscUNBQWlGO0lBQ25GLGlCQUFNOzs7SUFEK0IsZUFBMEI7SUFBMUIsK0NBQTBCOztB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SixjQUFjO2tCQUE1RCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVlLGtCQUFrQjtrQkFBN0UsU0FBUzttQkFBQyw2QkFBNkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFQyxpQkFBaUI7a0JBQTNFLFNBQVM7bUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRXBDLE9BQU87a0JBQTNCLE1BQU07bUJBQUMsV0FBVztZQUVBLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQUVTLFdBQVc7a0JBQXBDLE1BQU07bUJBQUMsZ0JBQWdCO1lBcUZZLGlCQUFpQjtrQkFBcEQsS0FBSzttQkFBQyx1QkFBdUI7WUFRTCxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb0J1dHRvbkdyb3VwSXRlbSB9IGZyb20gJy4uLy4uLy4uL3BvLWJ1dHRvbi1ncm91cCc7XHJcbmltcG9ydCB7IHBvUmljaFRleHRMaXRlcmFsc0RlZmF1bHQgfSBmcm9tICcuLi9wby1yaWNoLXRleHQtbGl0ZXJhbHMnO1xyXG5pbXBvcnQgeyBQb1JpY2hUZXh0VG9vbGJhckJ1dHRvbkdyb3VwSXRlbSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tcmljaC10ZXh0LXRvb2xiYXItYnV0dG9uLWdyb3VwLWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9SaWNoVGV4dEltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9wby1yaWNoLXRleHQtaW1hZ2UtbW9kYWwvcG8tcmljaC10ZXh0LWltYWdlLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvUmljaFRleHRMaW5rTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9wby1yaWNoLXRleHQtbGluay1tb2RhbC9wby1yaWNoLXRleHQtbGluay1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcG9SaWNoVGV4dERlZmF1bHRDb2xvciA9ICcjMDAwMDAwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tcmljaC10ZXh0LXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1yaWNoLXRleHQtdG9vbGJhci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUmljaFRleHRUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnY29sb3JQaWNrZXJJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjb2xvclBpY2tlcklucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCd0b29sYmFyRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHRvb2xiYXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKFBvUmljaFRleHRJbWFnZU1vZGFsQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSByaWNoVGV4dEltYWdlTW9kYWw6IFBvUmljaFRleHRJbWFnZU1vZGFsQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKFBvUmljaFRleHRMaW5rTW9kYWxDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHJpY2hUZXh0TGlua01vZGFsOiBQb1JpY2hUZXh0TGlua01vZGFsQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KCdwLWNvbW1hbmQnKSBjb21tYW5kID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGNvbW1hbmQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PigpO1xyXG5cclxuICBAT3V0cHV0KCdwLW1vZGFsJykgbW9kYWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1saW5rLWVkaXRpbmcnKSBsaW5rRWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICByZWFkb25seSBsaXRlcmFscyA9IHtcclxuICAgIC4uLnBvUmljaFRleHRMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpXVxyXG4gIH07XHJcblxyXG4gIGFsaWduQnV0dG9uczogQXJyYXk8UG9SaWNoVGV4dFRvb2xiYXJCdXR0b25Hcm91cEl0ZW0+ID0gW1xyXG4gICAge1xyXG4gICAgICBjb21tYW5kOiAnanVzdGlmeWxlZnQnLFxyXG4gICAgICBpY29uOiAncG8taWNvbi1hbGlnbi1sZWZ0JyxcclxuICAgICAgdG9vbHRpcDogdGhpcy5saXRlcmFscy5sZWZ0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuZW1pdEFsaWduQ29tbWFuZC5iaW5kKHRoaXMsICdqdXN0aWZ5bGVmdCcpLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29tbWFuZDogJ2p1c3RpZnljZW50ZXInLFxyXG4gICAgICBpY29uOiAncG8taWNvbi1hbGlnbi1jZW50ZXInLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLmxpdGVyYWxzLmNlbnRlcixcclxuICAgICAgYWN0aW9uOiB0aGlzLmVtaXRBbGlnbkNvbW1hbmQuYmluZCh0aGlzLCAnanVzdGlmeWNlbnRlcicpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb21tYW5kOiAnanVzdGlmeXJpZ2h0JyxcclxuICAgICAgaWNvbjogJ3BvLWljb24tYWxpZ24tcmlnaHQnLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLmxpdGVyYWxzLnJpZ2h0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuZW1pdEFsaWduQ29tbWFuZC5iaW5kKHRoaXMsICdqdXN0aWZ5cmlnaHQnKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29tbWFuZDogJ2p1c3RpZnlmdWxsJyxcclxuICAgICAgaWNvbjogJ3BvLWljb24tYWxpZ24tanVzdGlmeScsXHJcbiAgICAgIHRvb2x0aXA6IHRoaXMubGl0ZXJhbHMuanVzdGlmeSxcclxuICAgICAgYWN0aW9uOiB0aGlzLmVtaXRBbGlnbkNvbW1hbmQuYmluZCh0aGlzLCAnanVzdGlmeWZ1bGwnKVxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGZvcm1hdEJ1dHRvbnM6IEFycmF5PFBvUmljaFRleHRUb29sYmFyQnV0dG9uR3JvdXBJdGVtPiA9IFtcclxuICAgIHtcclxuICAgICAgY29tbWFuZDogJ2JvbGQnLFxyXG4gICAgICBpY29uOiAncG8taWNvbi10ZXh0LWJvbGQnLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLmxpdGVyYWxzLmJvbGQsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5lbWl0Q29tbWFuZC5iaW5kKHRoaXMsICdib2xkJylcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbW1hbmQ6ICdpdGFsaWMnLFxyXG4gICAgICBpY29uOiAncG8taWNvbi10ZXh0LWl0YWxpYycsXHJcbiAgICAgIHRvb2x0aXA6IHRoaXMubGl0ZXJhbHMuaXRhbGljLFxyXG4gICAgICBhY3Rpb246IHRoaXMuZW1pdENvbW1hbmQuYmluZCh0aGlzLCAnaXRhbGljJylcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbW1hbmQ6ICd1bmRlcmxpbmUnLFxyXG4gICAgICBpY29uOiAncG8taWNvbi10ZXh0LXVuZGVybGluZScsXHJcbiAgICAgIHRvb2x0aXA6IHRoaXMubGl0ZXJhbHMudW5kZXJsaW5lLFxyXG4gICAgICBhY3Rpb246IHRoaXMuZW1pdENvbW1hbmQuYmluZCh0aGlzLCAndW5kZXJsaW5lJylcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBsaXN0QnV0dG9uczogQXJyYXk8UG9SaWNoVGV4dFRvb2xiYXJCdXR0b25Hcm91cEl0ZW0+ID0gW1xyXG4gICAge1xyXG4gICAgICBjb21tYW5kOiAnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsXHJcbiAgICAgIGljb246ICdwby1pY29uLWxpc3QnLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLmxpdGVyYWxzLnVub3JkZXJlZExpc3QsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5lbWl0Q29tbWFuZC5iaW5kKHRoaXMsICdpbnNlcnRVbm9yZGVyZWRMaXN0JylcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBsaW5rQnV0dG9uczogQXJyYXk8UG9SaWNoVGV4dFRvb2xiYXJCdXR0b25Hcm91cEl0ZW0+ID0gW1xyXG4gICAge1xyXG4gICAgICBjb21tYW5kOiAnQ3JlYXRlbGluaycsXHJcbiAgICAgIGljb246ICdwby1pY29uLWxpbmsnLFxyXG4gICAgICB0b29sdGlwOiBgJHt0aGlzLmxpdGVyYWxzLmluc2VydExpbmt9IChDdHJsICsgSylgLFxyXG4gICAgICBhY3Rpb246ICgpID0+IHRoaXMucmljaFRleHRMaW5rTW9kYWwub3Blbk1vZGFsKHRoaXMuc2VsZWN0ZWRMaW5rRWxlbWVudClcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBtZWRpYUJ1dHRvbnM6IEFycmF5PFBvQnV0dG9uR3JvdXBJdGVtPiA9IFtcclxuICAgIHtcclxuICAgICAgdG9vbHRpcDogdGhpcy5saXRlcmFscy5pbnNlcnRJbWFnZSxcclxuICAgICAgaWNvbjogJ3BvLWljb24tcGljdHVyZScsXHJcbiAgICAgIGFjdGlvbjogKCkgPT4gdGhpcy5yaWNoVGV4dEltYWdlTW9kYWwub3Blbk1vZGFsKClcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZFRleHRBbGlnbjogYm9vbGVhbjtcclxuICBwcml2YXRlIF9yZWFkb25seTogYm9vbGVhbjtcclxuICBwcml2YXRlIHNlbGVjdGVkTGlua0VsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgncC1kaXNhYmxlZC10ZXh0LWFsaWduJykgc2V0IGRpc2FibGVkVGV4dEFsaWduKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZFRleHRBbGlnbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkVGV4dEFsaWduKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkVGV4dEFsaWduO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLXJlYWRvbmx5Jykgc2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZWFkb25seSA9IHZhbHVlO1xyXG4gICAgdGhpcy50b2dnbGVEaXNhYmxlQnV0dG9ucyh0aGlzLl9yZWFkb25seSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVhZG9ubHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNJbnRlcm5ldEV4cGxvcmVyKCkge1xyXG4gICAgcmV0dXJuIGlzSUUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZW1vdmVCdXR0b25Gb2N1cygpO1xyXG4gICAgdGhpcy5zZXRDb2xvckluQ29sb3JQaWNrZXIocG9SaWNoVGV4dERlZmF1bHRDb2xvcik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUZXh0Q29sb3IodmFsdWUpIHtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSAnZm9yZUNvbG9yJztcclxuXHJcbiAgICB0aGlzLmNvbW1hbmQuZW1pdCh7IGNvbW1hbmQsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgZW1pdExpbmtFZGl0aW5nKGlzTGlua0VkaXQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubGlua0VkaXRpbmcuZW1pdChpc0xpbmtFZGl0KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkTGluayhzZWxlY3RlZExpbmtFbGVtZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTGlua0VsZW1lbnQgPSBzZWxlY3RlZExpbmtFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0QnV0dG9uc1N0YXRlcyhvYmo6IHsgY29tbWFuZHM6IEFycmF5PHN0cmluZz47IGhleENvbG9yOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XHJcbiAgICAgIHRoaXMuYWxpZ25CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IChidXR0b24uc2VsZWN0ZWQgPSBvYmouY29tbWFuZHMuaW5jbHVkZXMoYnV0dG9uLmNvbW1hbmQpKSk7XHJcbiAgICAgIHRoaXMuZm9ybWF0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiAoYnV0dG9uLnNlbGVjdGVkID0gb2JqLmNvbW1hbmRzLmluY2x1ZGVzKGJ1dHRvbi5jb21tYW5kKSkpO1xyXG4gICAgICB0aGlzLmxpc3RCdXR0b25zWzBdLnNlbGVjdGVkID0gb2JqLmNvbW1hbmRzLmluY2x1ZGVzKHRoaXMubGlzdEJ1dHRvbnNbMF0uY29tbWFuZCk7XHJcbiAgICAgIHRoaXMubGlua0J1dHRvbnNbMF0uc2VsZWN0ZWQgPSBvYmouY29tbWFuZHMuaW5jbHVkZXModGhpcy5saW5rQnV0dG9uc1swXS5jb21tYW5kKTtcclxuICAgICAgdGhpcy5zZXRDb2xvckluQ29sb3JQaWNrZXIob2JqLmhleENvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3J0Y3V0VHJpZ2dlcigpIHtcclxuICAgIHRoaXMucmljaFRleHRMaW5rTW9kYWwub3Blbk1vZGFsKHRoaXMuc2VsZWN0ZWRMaW5rRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBlbWl0Q29tbWFuZChjb21tYW5kOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29tbWFuZC5lbWl0KGNvbW1hbmQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0QWxpZ25Db21tYW5kKGNvbW1hbmQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFsaWduQnV0dG9ucy5maW5kSW5kZXgoYnRuID0+IGJ0bi5jb21tYW5kID09PSBjb21tYW5kKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGlnbkJ1dHRvbnNbaW5kZXhdLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuYWxpZ25CdXR0b25zW2luZGV4XS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tbWFuZC5lbWl0KGNvbW1hbmQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVCdXR0b25Gb2N1cygpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnRvb2xiYXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29sb3JJbkNvbG9yUGlja2VyKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZURpc2FibGVCdXR0b25zKHN0YXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFsaWduQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiAoYnV0dG9uLmRpc2FibGVkID0gc3RhdGUpKTtcclxuICAgIHRoaXMuZm9ybWF0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiAoYnV0dG9uLmRpc2FibGVkID0gc3RhdGUpKTtcclxuICAgIHRoaXMubGlzdEJ1dHRvbnNbMF0uZGlzYWJsZWQgPSBzdGF0ZTtcclxuICAgIHRoaXMubGlua0J1dHRvbnNbMF0uZGlzYWJsZWQgPSBzdGF0ZTtcclxuICAgIHRoaXMubWVkaWFCdXR0b25zWzBdLmRpc2FibGVkID0gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1yaWNoLXRleHQtdG9vbGJhclwiICN0b29sYmFyRWxlbWVudD5cclxuICA8ZGl2IGNsYXNzPVwicG8tcmljaC10ZXh0LXRvb2xiYXItYnV0dG9uLWFsaWduXCIgZGF0YS1yaWNoLXRleHQtdG9vbGJhcj1cImZvcm1hdFwiPlxyXG4gICAgPHBvLWJ1dHRvbi1ncm91cCBwLXRvZ2dsZT1cIm11bHRpcGxlXCIgW3AtYnV0dG9uc109XCJmb3JtYXRCdXR0b25zXCI+IDwvcG8tYnV0dG9uLWdyb3VwPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiIWlzSW50ZXJuZXRFeHBsb3JlclwiIGNsYXNzPVwicG8tcmljaC10ZXh0LXRvb2xiYXItYnV0dG9uLWFsaWduXCIgZGF0YS1yaWNoLXRleHQtdG9vbGJhcj1cImNvbG9yXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tcmljaC10ZXh0LXRvb2xiYXItY29sb3ItcGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3M9XCJwby1idXR0b24gcG8tYnV0dG9uLWRlZmF1bHQgcG8tcmljaC10ZXh0LXRvb2xiYXItY29sb3ItcGlja2VyLWJ1dHRvblwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cInJlYWRvbmx5XCJcclxuICAgICAgICBbcC10b29sdGlwXT1cImxpdGVyYWxzLnRleHRDb2xvclwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsaXRlcmFscy50ZXh0Q29sb3JcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAjY29sb3JQaWNrZXJJbnB1dFxyXG4gICAgICAgICAgY2xhc3M9XCJwby1yaWNoLXRleHQtdG9vbGJhci1jb2xvci1waWNrZXItaW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cImNvbG9yXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJyZWFkb25seVwiXHJcbiAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZVRleHRDb2xvcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxpdGVyYWxzLnRleHRDb2xvclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cIiFkaXNhYmxlZFRleHRBbGlnblwiIGNsYXNzPVwicG8tcmljaC10ZXh0LXRvb2xiYXItYnV0dG9uLWFsaWduXCIgZGF0YS1yaWNoLXRleHQtdG9vbGJhcj1cImFsaWduXCI+XHJcbiAgICA8cG8tYnV0dG9uLWdyb3VwIHAtdG9nZ2xlPVwic2luZ2xlXCIgW3AtYnV0dG9uc109XCJhbGlnbkJ1dHRvbnNcIj4gPC9wby1idXR0b24tZ3JvdXA+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1yaWNoLXRleHQtdG9vbGJhci1idXR0b24tYWxpZ25cIiBkYXRhLXJpY2gtdGV4dC10b29sYmFyPVwibGlzdFwiPlxyXG4gICAgPHBvLWJ1dHRvbi1ncm91cCBwLXRvZ2dsZT1cInNpbmdsZVwiIFtwLWJ1dHRvbnNdPVwibGlzdEJ1dHRvbnNcIj4gPC9wby1idXR0b24tZ3JvdXA+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwby1yaWNoLXRleHQtdG9vbGJhci1idXR0b24tYWxpZ25cIiBkYXRhLXJpY2gtdGV4dC10b29sYmFyPVwibGlua1wiPlxyXG4gICAgPHBvLWJ1dHRvbi1ncm91cCBbcC1idXR0b25zXT1cImxpbmtCdXR0b25zXCI+IDwvcG8tYnV0dG9uLWdyb3VwPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tcmljaC10ZXh0LXRvb2xiYXItYnV0dG9uLWFsaWduXCIgZGF0YS1yaWNoLXRleHQtdG9vbGJhcj1cIm1lZGlhXCI+XHJcbiAgICA8cG8tYnV0dG9uLWdyb3VwIFtwLWJ1dHRvbnNdPVwibWVkaWFCdXR0b25zXCI+IDwvcG8tYnV0dG9uLWdyb3VwPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxwby1yaWNoLXRleHQtaW1hZ2UtbW9kYWwgI3JpY2hUZXh0SW1hZ2VNb2RhbCAocC1jb21tYW5kKT1cImVtaXRDb21tYW5kKCRldmVudClcIj4gPC9wby1yaWNoLXRleHQtaW1hZ2UtbW9kYWw+XHJcblxyXG48cG8tcmljaC10ZXh0LWxpbmstbW9kYWxcclxuICAjcmljaFRleHRMaW5rTW9kYWxcclxuICAocC1jb21tYW5kKT1cImVtaXRDb21tYW5kKCRldmVudClcIlxyXG4gIChwLWxpbmstZWRpdGluZyk9XCJlbWl0TGlua0VkaXRpbmcoJGV2ZW50KVwiXHJcbj5cclxuPC9wby1yaWNoLXRleHQtbGluay1tb2RhbD5cclxuIl19