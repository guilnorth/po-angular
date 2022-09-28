import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { isFirefox, isIE, isIEOrEdge, openExternalLink } from './../../../../utils/util';
import { PoKeyCodeEnum } from './../../../../enums/po-key-code.enum';
import * as i0 from "@angular/core";
import * as i1 from "../po-rich-text.service";
const _c0 = ["bodyElement"];
const poRichTextBodyCommands = [
    'bold',
    'italic',
    'underline',
    'justifyleft',
    'justifycenter',
    'justifyright',
    'justifyfull',
    'insertUnorderedList',
    'Createlink'
];
export class PoRichTextBodyComponent {
    constructor(richTextService) {
        this.richTextService = richTextService;
        this.change = new EventEmitter();
        this.commands = new EventEmitter();
        this.selectedLink = new EventEmitter();
        this.shortcutCommand = new EventEmitter();
        this.value = new EventEmitter();
        this.blur = new EventEmitter();
        this.onAnchorClick = event => {
            const { target, ctrlKey, metaKey } = event;
            let url;
            let elementLink;
            if (ctrlKey || metaKey) {
                if (event.path) {
                    event.path.forEach(element => {
                        if (element.nodeName === 'A') {
                            url = element.href;
                            elementLink = element;
                        }
                    });
                }
                else {
                    url = target.attributes.href.value;
                    elementLink = target;
                }
                openExternalLink(url);
                elementLink.classList.remove('po-clickable');
            }
        };
    }
    ngOnInit() {
        this.bodyElement.nativeElement.designMode = 'on';
        this.modelSubscription = this.richTextService.getModel().subscribe(modelValue => {
            this.modelValue = modelValue;
            this.bodyElement.nativeElement.innerHTML = '';
            this.updateValueWithModelValue();
            this.addClickListenerOnAnchorElements();
        });
    }
    ngOnDestroy() {
        this.modelSubscription?.unsubscribe();
    }
    executeCommand(command) {
        this.bodyElement.nativeElement.focus();
        if (typeof command === 'object') {
            if (command.command === 'InsertHTML') {
                const { command: linkCommand, value: { urlLink }, value: { urlLinkText } } = command;
                this.handleCommandLink(linkCommand, urlLink, urlLinkText);
            }
            else {
                document.execCommand(command.command, false, command.value);
            }
        }
        else {
            document.execCommand(command, false, null);
        }
        this.updateModel();
        this.value.emit(this.modelValue);
    }
    linkEditing(event) {
        this.isLinkEditing = !!event;
    }
    onBlur() {
        this.blur.emit();
        if (this.modelValue !== this.valueBeforeChange) {
            clearTimeout(this.timeoutChange);
            this.timeoutChange = setTimeout(() => {
                this.change.emit(this.modelValue);
            }, 200);
        }
    }
    focus() {
        this.bodyElement.nativeElement.focus();
    }
    onClick() {
        this.emitSelectionCommands();
    }
    onFocus() {
        this.valueBeforeChange = this.modelValue;
    }
    onKeyDown(event) {
        const keyK = event.keyCode === PoKeyCodeEnum.keyK;
        const isLinkShortcut = (keyK && event.ctrlKey) || (keyK && event.metaKey);
        if (isLinkShortcut) {
            event.preventDefault();
            this.shortcutCommand.emit();
        }
        this.toggleCursorOnLink(event, 'add');
    }
    onKeyUp(event) {
        this.toggleCursorOnLink(event, 'remove');
        this.removeBrElement();
        this.updateModel();
        this.emitSelectionCommands();
    }
    onPaste() {
        this.update();
        setTimeout(() => this.addClickListenerOnAnchorElements());
    }
    update() {
        setTimeout(() => this.updateModel());
        setTimeout(() => {
            this.removeBrElement();
            this.updateModel();
            this.emitSelectionCommands();
        });
    }
    addClickListenerOnAnchorElements() {
        this.bodyElement.nativeElement.querySelectorAll('a').forEach(element => {
            element.addEventListener('click', this.onAnchorClick);
        });
    }
    emitSelectionCommands() {
        const commands = poRichTextBodyCommands.filter(command => document.queryCommandState(command));
        const rgbColor = document.queryCommandValue('ForeColor');
        let hexColor;
        if (!isIE()) {
            hexColor = this.rgbToHex(rgbColor);
        }
        if (this.isCursorPositionedInALink()) {
            commands.push('Createlink');
        }
        this.selectedLink.emit(this.linkElement); // importante ficar fora do if para emitir mesmo undefined.
        this.commands.emit({ commands, hexColor });
    }
    getTextSelection() {
        const textSelection = document.getSelection();
        if (!textSelection) {
            return;
        }
        const focusNode = textSelection.focusNode ? textSelection.focusNode.parentElement : undefined;
        const anchorNode = textSelection.anchorNode ? textSelection.anchorNode.parentNode : undefined;
        const node = focusNode || anchorNode;
        let tagName;
        if (node) {
            tagName = node['tagName'] || node['nodeName'];
            return {
                node,
                tagName
            };
        }
    }
    handleCommandLink(linkCommand, urlLink, urlLinkText) {
        if (isIE()) {
            this.insertHtmlLinkElement(urlLink, urlLinkText);
        }
        else {
            // '&nbsp;' necessário para o cursor não ficar preso dentro do link no Firefox.
            const linkValue = isFirefox() && !this.isLinkEditing
                ? `&nbsp;${this.makeLinkTag(urlLink, urlLinkText)}&nbsp;`
                : this.makeLinkTag(urlLink, urlLinkText);
            document.execCommand(linkCommand, false, linkValue);
        }
        this.addClickListenerOnAnchorElements();
    }
    // tratamento específico para IE pois não suporta o comando 'insertHTML'.
    insertHtmlLinkElement(urlLink, urlLinkText) {
        const selection = document.getSelection();
        const selectionRange = selection.getRangeAt(0);
        const elementLink = document.createElement('a');
        const elementlinkText = document.createTextNode(urlLinkText);
        elementLink.appendChild(elementlinkText);
        elementLink.href = urlLink;
        elementLink.setAttribute('target', '_blank');
        elementLink.classList.add('po-rich-text-link');
        selectionRange.deleteContents();
        selectionRange.insertNode(elementLink);
    }
    isCursorPositionedInALink() {
        const textSelection = this.getTextSelection();
        this.linkElement = undefined;
        let isLink = false;
        if (textSelection && textSelection.node && textSelection.tagName === 'A') {
            this.linkElement = textSelection.node;
            isLink = true;
        }
        else if ((isFirefox() || isIEOrEdge()) && this.verifyCursorPositionInFirefoxIEEdge()) {
            isLink = true;
        }
        else {
            isLink = textSelection ? this.isParentNodeAnchor(textSelection) : false;
        }
        return isLink;
    }
    isParentNodeAnchor(textSelection) {
        let element = textSelection.node;
        let isLink = false;
        while (element && (element.tagName !== null || element.nodeName !== null)) {
            if (element.tagName === 'A' || element.nodeName === 'A') {
                this.linkElement = element;
                isLink = true;
                return isLink;
            }
            element = element.parentElement || element.parentNode;
        }
        this.linkElement = undefined;
        return isLink;
    }
    makeLinkTag(urlLink, urlLinkText) {
        return `<a class="po-rich-text-link" href="${urlLink}" target="_blank">${urlLinkText || urlLink}</a>`;
    }
    // Tratamento necessário para eliminar a tag <br> criada no firefox quando o body for limpo.
    removeBrElement() {
        const bodyElement = this.bodyElement.nativeElement;
        if (!bodyElement.innerText.trim() && bodyElement.childNodes.length === 1 && bodyElement.querySelector('br')) {
            bodyElement.querySelector('br').remove();
        }
    }
    rgbToHex(rgb) {
        // Tratamento necessário para converter o código rgb para hexadecimal.
        const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
        rgb = rgb.substr(4).split(')')[0].split(sep);
        let r = (+rgb[0]).toString(16);
        let g = (+rgb[1]).toString(16);
        let b = (+rgb[2]).toString(16);
        if (r.length === 1) {
            r = '0' + r;
        }
        if (g.length === 1) {
            g = '0' + g;
        }
        if (b.length === 1) {
            b = '0' + b;
        }
        return '#' + r + g + b;
    }
    toggleCursorOnLink(event, action) {
        const selection = document.getSelection();
        const element = selection.focusNode ? selection.focusNode.parentNode : undefined;
        const isCtrl = event.key === 'Control';
        const isCommand = event.key === 'Meta';
        const isOnCtrlLink = this.isCursorPositionedInALink() && (isCtrl || isCommand);
        if (element) {
            if (isOnCtrlLink) {
                element['classList'][action]('po-clickable');
            }
            else {
                const isClickable = element['classList'] && element['classList'].contains('po-clickable');
                if (isClickable) {
                    element['classList'].remove('po-clickable');
                }
            }
            this.updateModel();
        }
    }
    updateModel() {
        this.modelValue = this.bodyElement.nativeElement.innerHTML;
        this.value.emit(this.modelValue);
    }
    updateValueWithModelValue() {
        if (this.modelValue) {
            this.bodyElement.nativeElement.insertAdjacentHTML('afterbegin', this.modelValue);
        }
    }
    verifyCursorPositionInFirefoxIEEdge() {
        const textSelection = document.getSelection();
        const nodeLink = textSelection.focusNode;
        let isLink = false;
        if (nodeLink && nodeLink.nodeName === 'A') {
            this.linkElement = nodeLink;
            isLink = true;
        }
        else {
            const range = textSelection.getRangeAt(0);
            const fragmentDocument = range.cloneContents();
            const element = fragmentDocument.childNodes[0] || fragmentDocument.firstElementChild;
            this.linkElement = element && element.nodeName === 'A' ? element : undefined;
            isLink = !!this.linkElement;
        }
        return isLink;
    }
}
PoRichTextBodyComponent.ɵfac = function PoRichTextBodyComponent_Factory(t) { return new (t || PoRichTextBodyComponent)(i0.ɵɵdirectiveInject(i1.PoRichTextService)); };
PoRichTextBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRichTextBodyComponent, selectors: [["po-rich-text-body"]], viewQuery: function PoRichTextBodyComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyElement = _t.first);
    } }, inputs: { height: ["p-height", "height"], modelValue: ["p-model-value", "modelValue"], placeholder: ["p-placeholder", "placeholder"], readonly: ["p-readonly", "readonly"] }, outputs: { change: "p-change", commands: "p-commands", selectedLink: "p-selected-link", shortcutCommand: "p-shortcut-command", value: "p-value", blur: "p-blur" }, decls: 2, vars: 4, consts: [["tabindex", "0", 1, "po-rich-text-body", 3, "blur", "click", "cut", "focus", "keydown", "keyup", "paste"], ["bodyElement", ""]], template: function PoRichTextBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("blur", function PoRichTextBodyComponent_Template_div_blur_0_listener() { return ctx.onBlur(); })("click", function PoRichTextBodyComponent_Template_div_click_0_listener() { return ctx.onClick(); })("cut", function PoRichTextBodyComponent_Template_div_cut_0_listener() { return ctx.update(); })("focus", function PoRichTextBodyComponent_Template_div_focus_0_listener() { return ctx.onFocus(); })("keydown", function PoRichTextBodyComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); })("keyup", function PoRichTextBodyComponent_Template_div_keyup_0_listener($event) { return ctx.onKeyUp($event); })("paste", function PoRichTextBodyComponent_Template_div_paste_0_listener() { return ctx.onPaste(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height, "px");
        i0.ɵɵattribute("contenteditable", !ctx.readonly)("data-placeholder", ctx.placeholder);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextBodyComponent, [{
        type: Component,
        args: [{ selector: 'po-rich-text-body', template: "<div\r\n  #bodyElement\r\n  class=\"po-rich-text-body\"\r\n  tabindex=\"0\"\r\n  [attr.contenteditable]=\"!readonly\"\r\n  [attr.data-placeholder]=\"placeholder\"\r\n  [style.height.px]=\"height\"\r\n  (blur)=\"onBlur()\"\r\n  (click)=\"onClick()\"\r\n  (cut)=\"update()\"\r\n  (focus)=\"onFocus()\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n  (paste)=\"onPaste()\"\r\n></div>\r\n" }]
    }], function () { return [{ type: i1.PoRichTextService }]; }, { bodyElement: [{
            type: ViewChild,
            args: ['bodyElement', { static: true }]
        }], height: [{
            type: Input,
            args: ['p-height']
        }], modelValue: [{
            type: Input,
            args: ['p-model-value']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], commands: [{
            type: Output,
            args: ['p-commands']
        }], selectedLink: [{
            type: Output,
            args: ['p-selected-link']
        }], shortcutCommand: [{
            type: Output,
            args: ['p-shortcut-command']
        }], value: [{
            type: Output,
            args: ['p-value']
        }], blur: [{
            type: Output,
            args: ['p-blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXJpY2gtdGV4dC9wby1yaWNoLXRleHQtYm9keS9wby1yaWNoLXRleHQtYm9keS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tcmljaC10ZXh0L3BvLXJpY2gtdGV4dC1ib2R5L3BvLXJpY2gtdGV4dC1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSWpILE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUdyRSxNQUFNLHNCQUFzQixHQUFHO0lBQzdCLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtDQUNiLENBQUM7QUFNRixNQUFNLE9BQU8sdUJBQXVCO0lBNkJsQyxZQUFvQixlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFsQmxDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRS9CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVwQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFP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QyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzdFLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM3QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OzhGQTFWVSx1QkFBdUI7MEVBQXZCLHVCQUF1Qjs7Ozs7O1FDeEJwQyxpQ0FjQztRQVBDLCtGQUFRLFlBQVEsSUFBQyxvRkFDUixhQUFTLElBREQsZ0ZBRVYsWUFBUSxJQUZFLG9GQUdSLGFBQVMsSUFIRCw4RkFJTixxQkFBaUIsSUFKWCwwRkFLUixtQkFBZSxJQUxQLG9GQU1SLGFBQVMsSUFORDtRQU9sQixpQkFBTTs7UUFSTCwwQ0FBMEI7UUFGMUIsZ0RBQWtDLHFDQUFBOzt1RkRvQnZCLHVCQUF1QjtjQUpuQyxTQUFTOzJCQUNFLG1CQUFtQjtvRUFJZSxXQUFXO2tCQUF0RCxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFdkIsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBRU8sVUFBVTtrQkFBakMsS0FBSzttQkFBQyxlQUFlO1lBRUUsV0FBVztrQkFBbEMsS0FBSzttQkFBQyxlQUFlO1lBRUQsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRUMsTUFBTTtrQkFBekIsTUFBTTttQkFBQyxVQUFVO1lBRUksUUFBUTtrQkFBN0IsTUFBTTttQkFBQyxZQUFZO1lBRU8sWUFBWTtrQkFBdEMsTUFBTTttQkFBQyxpQkFBaUI7WUFFSyxlQUFlO2tCQUE1QyxNQUFNO21CQUFDLG9CQUFvQjtZQUVULEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQUVDLElBQUk7a0JBQXJCLE1BQU07bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGlzRmlyZWZveCwgaXNJRSwgaXNJRU9yRWRnZSwgb3BlbkV4dGVybmFsTGluayB9IGZyb20gJy4vLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvS2V5Q29kZUVudW0gfSBmcm9tICcuLy4uLy4uLy4uLy4uL2VudW1zL3BvLWtleS1jb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBQb1JpY2hUZXh0U2VydmljZSB9IGZyb20gJy4uL3BvLXJpY2gtdGV4dC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHBvUmljaFRleHRCb2R5Q29tbWFuZHMgPSBbXHJcbiAgJ2JvbGQnLFxyXG4gICdpdGFsaWMnLFxyXG4gICd1bmRlcmxpbmUnLFxyXG4gICdqdXN0aWZ5bGVmdCcsXHJcbiAgJ2p1c3RpZnljZW50ZXInLFxyXG4gICdqdXN0aWZ5cmlnaHQnLFxyXG4gICdqdXN0aWZ5ZnVsbCcsXHJcbiAgJ2luc2VydFVub3JkZXJlZExpc3QnLFxyXG4gICdDcmVhdGVsaW5rJ1xyXG5dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1yaWNoLXRleHQtYm9keScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXJpY2gtdGV4dC1ib2R5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9SaWNoVGV4dEJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnYm9keUVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBib2R5RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCdwLWhlaWdodCcpIGhlaWdodD86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLW1vZGVsLXZhbHVlJykgbW9kZWxWYWx1ZT86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLXBsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncC1yZWFkb25seScpIHJlYWRvbmx5Pzogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdwLWNvbW1hbmRzJykgY29tbWFuZHMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1zZWxlY3RlZC1saW5rJykgc2VsZWN0ZWRMaW5rID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ3Atc2hvcnRjdXQtY29tbWFuZCcpIHNob3J0Y3V0Q29tbWFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdwLXZhbHVlJykgdmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1ibHVyJykgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcml2YXRlIGlzTGlua0VkaXRpbmc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsaW5rRWxlbWVudDogYW55O1xyXG4gIHByaXZhdGUgdGltZW91dENoYW5nZTogYW55O1xyXG4gIHByaXZhdGUgdmFsdWVCZWZvcmVDaGFuZ2U6IGFueTtcclxuICBwcml2YXRlIG1vZGVsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmljaFRleHRTZXJ2aWNlOiBQb1JpY2hUZXh0U2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZGVzaWduTW9kZSA9ICdvbic7XHJcblxyXG4gICAgdGhpcy5tb2RlbFN1YnNjcmlwdGlvbiA9IHRoaXMucmljaFRleHRTZXJ2aWNlLmdldE1vZGVsKCkuc3Vic2NyaWJlKG1vZGVsVmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLm1vZGVsVmFsdWUgPSBtb2RlbFZhbHVlO1xyXG4gICAgICB0aGlzLmJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVXaXRoTW9kZWxWYWx1ZSgpO1xyXG4gICAgICB0aGlzLmFkZENsaWNrTGlzdGVuZXJPbkFuY2hvckVsZW1lbnRzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tb2RlbFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyB8IHsgY29tbWFuZDogYW55OyB2YWx1ZTogc3RyaW5nIHwgYW55IH0pIHtcclxuICAgIHRoaXMuYm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgY29tbWFuZCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZCA9PT0gJ0luc2VydEhUTUwnKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgY29tbWFuZDogbGlua0NvbW1hbmQsXHJcbiAgICAgICAgICB2YWx1ZTogeyB1cmxMaW5rIH0sXHJcbiAgICAgICAgICB2YWx1ZTogeyB1cmxMaW5rVGV4dCB9XHJcbiAgICAgICAgfSA9IGNvbW1hbmQ7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ29tbWFuZExpbmsobGlua0NvbW1hbmQsIHVybExpbmssIHVybExpbmtUZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kLmNvbW1hbmQsIGZhbHNlLCBjb21tYW5kLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoY29tbWFuZCwgZmFsc2UsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcclxuICAgIHRoaXMudmFsdWUuZW1pdCh0aGlzLm1vZGVsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbGlua0VkaXRpbmcoZXZlbnQpIHtcclxuICAgIHRoaXMuaXNMaW5rRWRpdGluZyA9ICEhZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xyXG4gICAgaWYgKHRoaXMubW9kZWxWYWx1ZSAhPT0gdGhpcy52YWx1ZUJlZm9yZUNoYW5nZSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hhbmdlKTtcclxuICAgICAgdGhpcy50aW1lb3V0Q2hhbmdlID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLm1vZGVsVmFsdWUpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3Rpb25Db21tYW5kcygpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIHRoaXMudmFsdWVCZWZvcmVDaGFuZ2UgPSB0aGlzLm1vZGVsVmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGtleUsgPSBldmVudC5rZXlDb2RlID09PSBQb0tleUNvZGVFbnVtLmtleUs7XHJcbiAgICBjb25zdCBpc0xpbmtTaG9ydGN1dCA9IChrZXlLICYmIGV2ZW50LmN0cmxLZXkpIHx8IChrZXlLICYmIGV2ZW50Lm1ldGFLZXkpO1xyXG5cclxuICAgIGlmIChpc0xpbmtTaG9ydGN1dCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnNob3J0Y3V0Q29tbWFuZC5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2dnbGVDdXJzb3JPbkxpbmsoZXZlbnQsICdhZGQnKTtcclxuICB9XHJcblxyXG4gIG9uS2V5VXAoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy50b2dnbGVDdXJzb3JPbkxpbmsoZXZlbnQsICdyZW1vdmUnKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUJyRWxlbWVudCgpO1xyXG4gICAgdGhpcy51cGRhdGVNb2RlbCgpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ29tbWFuZHMoKTtcclxuICB9XHJcblxyXG4gIG9uUGFzdGUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkZENsaWNrTGlzdGVuZXJPbkFuY2hvckVsZW1lbnRzKCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZU1vZGVsKCkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUJyRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKCk7XHJcbiAgICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNvbW1hbmRzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQ2xpY2tMaXN0ZW5lck9uQW5jaG9yRWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQW5jaG9yQ2xpY2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRTZWxlY3Rpb25Db21tYW5kcygpIHtcclxuICAgIGNvbnN0IGNvbW1hbmRzID0gcG9SaWNoVGV4dEJvZHlDb21tYW5kcy5maWx0ZXIoY29tbWFuZCA9PiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShjb21tYW5kKSk7XHJcbiAgICBjb25zdCByZ2JDb2xvciA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKCdGb3JlQ29sb3InKTtcclxuXHJcbiAgICBsZXQgaGV4Q29sb3I7XHJcbiAgICBpZiAoIWlzSUUoKSkge1xyXG4gICAgICBoZXhDb2xvciA9IHRoaXMucmdiVG9IZXgocmdiQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzQ3Vyc29yUG9zaXRpb25lZEluQUxpbmsoKSkge1xyXG4gICAgICBjb21tYW5kcy5wdXNoKCdDcmVhdGVsaW5rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZExpbmsuZW1pdCh0aGlzLmxpbmtFbGVtZW50KTsgLy8gaW1wb3J0YW50ZSBmaWNhciBmb3JhIGRvIGlmIHBhcmEgZW1pdGlyIG1lc21vIHVuZGVmaW5lZC5cclxuICAgIHRoaXMuY29tbWFuZHMuZW1pdCh7IGNvbW1hbmRzLCBoZXhDb2xvciB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGV4dFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHRleHRTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmICghdGV4dFNlbGVjdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb2N1c05vZGUgPSB0ZXh0U2VsZWN0aW9uLmZvY3VzTm9kZSA/IHRleHRTZWxlY3Rpb24uZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBhbmNob3JOb2RlID0gdGV4dFNlbGVjdGlvbi5hbmNob3JOb2RlID8gdGV4dFNlbGVjdGlvbi5hbmNob3JOb2RlLnBhcmVudE5vZGUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBub2RlID0gZm9jdXNOb2RlIHx8IGFuY2hvck5vZGU7XHJcbiAgICBsZXQgdGFnTmFtZTtcclxuXHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICB0YWdOYW1lID0gbm9kZVsndGFnTmFtZSddIHx8IG5vZGVbJ25vZGVOYW1lJ107XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm9kZSxcclxuICAgICAgICB0YWdOYW1lXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNvbW1hbmRMaW5rKGxpbmtDb21tYW5kOiBzdHJpbmcsIHVybExpbms6IHN0cmluZywgdXJsTGlua1RleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKGlzSUUoKSkge1xyXG4gICAgICB0aGlzLmluc2VydEh0bWxMaW5rRWxlbWVudCh1cmxMaW5rLCB1cmxMaW5rVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAnJm5ic3A7JyBuZWNlc3PDoXJpbyBwYXJhIG8gY3Vyc29yIG7Do28gZmljYXIgcHJlc28gZGVudHJvIGRvIGxpbmsgbm8gRmlyZWZveC5cclxuICAgICAgY29uc3QgbGlua1ZhbHVlID1cclxuICAgICAgICBpc0ZpcmVmb3goKSAmJiAhdGhpcy5pc0xpbmtFZGl0aW5nXHJcbiAgICAgICAgICA/IGAmbmJzcDske3RoaXMubWFrZUxpbmtUYWcodXJsTGluaywgdXJsTGlua1RleHQpfSZuYnNwO2BcclxuICAgICAgICAgIDogdGhpcy5tYWtlTGlua1RhZyh1cmxMaW5rLCB1cmxMaW5rVGV4dCk7XHJcblxyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChsaW5rQ29tbWFuZCwgZmFsc2UsIGxpbmtWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRDbGlja0xpc3RlbmVyT25BbmNob3JFbGVtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHJhdGFtZW50byBlc3BlY8OtZmljbyBwYXJhIElFIHBvaXMgbsOjbyBzdXBvcnRhIG8gY29tYW5kbyAnaW5zZXJ0SFRNTCcuXHJcbiAgcHJpdmF0ZSBpbnNlcnRIdG1sTGlua0VsZW1lbnQodXJsTGluazogc3RyaW5nLCB1cmxMaW5rVGV4dDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvblJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICBjb25zdCBlbGVtZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IGVsZW1lbnRsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVybExpbmtUZXh0KTtcclxuXHJcbiAgICBlbGVtZW50TGluay5hcHBlbmRDaGlsZChlbGVtZW50bGlua1RleHQpO1xyXG4gICAgZWxlbWVudExpbmsuaHJlZiA9IHVybExpbms7XHJcbiAgICBlbGVtZW50TGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuICAgIGVsZW1lbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ3BvLXJpY2gtdGV4dC1saW5rJyk7XHJcblxyXG4gICAgc2VsZWN0aW9uUmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcclxuICAgIHNlbGVjdGlvblJhbmdlLmluc2VydE5vZGUoZWxlbWVudExpbmspO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0N1cnNvclBvc2l0aW9uZWRJbkFMaW5rKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdGV4dFNlbGVjdGlvbiA9IHRoaXMuZ2V0VGV4dFNlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5saW5rRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBsZXQgaXNMaW5rID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRleHRTZWxlY3Rpb24gJiYgdGV4dFNlbGVjdGlvbi5ub2RlICYmIHRleHRTZWxlY3Rpb24udGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgIHRoaXMubGlua0VsZW1lbnQgPSB0ZXh0U2VsZWN0aW9uLm5vZGU7XHJcbiAgICAgIGlzTGluayA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKChpc0ZpcmVmb3goKSB8fCBpc0lFT3JFZGdlKCkpICYmIHRoaXMudmVyaWZ5Q3Vyc29yUG9zaXRpb25JbkZpcmVmb3hJRUVkZ2UoKSkge1xyXG4gICAgICBpc0xpbmsgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNMaW5rID0gdGV4dFNlbGVjdGlvbiA/IHRoaXMuaXNQYXJlbnROb2RlQW5jaG9yKHRleHRTZWxlY3Rpb24pIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNMaW5rO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1BhcmVudE5vZGVBbmNob3IodGV4dFNlbGVjdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGVsZW1lbnQgPSB0ZXh0U2VsZWN0aW9uLm5vZGU7XHJcbiAgICBsZXQgaXNMaW5rID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgKGVsZW1lbnQudGFnTmFtZSAhPT0gbnVsbCB8fCBlbGVtZW50Lm5vZGVOYW1lICE9PSBudWxsKSkge1xyXG4gICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnQScgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgdGhpcy5saW5rRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgaXNMaW5rID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gaXNMaW5rO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlua0VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gaXNMaW5rO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTGlua1RhZyh1cmxMaW5rOiBzdHJpbmcsIHVybExpbmtUZXh0OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgPGEgY2xhc3M9XCJwby1yaWNoLXRleHQtbGlua1wiIGhyZWY9XCIke3VybExpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt1cmxMaW5rVGV4dCB8fCB1cmxMaW5rfTwvYT5gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkFuY2hvckNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQsIGN0cmxLZXksIG1ldGFLZXkgfSA9IGV2ZW50O1xyXG4gICAgbGV0IHVybDtcclxuICAgIGxldCBlbGVtZW50TGluaztcclxuXHJcbiAgICBpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XHJcbiAgICAgIGlmIChldmVudC5wYXRoKSB7XHJcbiAgICAgICAgZXZlbnQucGF0aC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgICB1cmwgPSBlbGVtZW50LmhyZWY7XHJcbiAgICAgICAgICAgIGVsZW1lbnRMaW5rID0gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwgPSB0YXJnZXQuYXR0cmlidXRlcy5ocmVmLnZhbHVlO1xyXG4gICAgICAgIGVsZW1lbnRMaW5rID0gdGFyZ2V0O1xyXG4gICAgICB9XHJcbiAgICAgIG9wZW5FeHRlcm5hbExpbmsodXJsKTtcclxuICAgICAgZWxlbWVudExpbmsuY2xhc3NMaXN0LnJlbW92ZSgncG8tY2xpY2thYmxlJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gVHJhdGFtZW50byBuZWNlc3PDoXJpbyBwYXJhIGVsaW1pbmFyIGEgdGFnIDxicj4gY3JpYWRhIG5vIGZpcmVmb3ggcXVhbmRvIG8gYm9keSBmb3IgbGltcG8uXHJcbiAgcHJpdmF0ZSByZW1vdmVCckVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IHRoaXMuYm9keUVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWJvZHlFbGVtZW50LmlubmVyVGV4dC50cmltKCkgJiYgYm9keUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiYgYm9keUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnInKSkge1xyXG4gICAgICBib2R5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdicicpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZ2JUb0hleChyZ2IpIHtcclxuICAgIC8vIFRyYXRhbWVudG8gbmVjZXNzw6FyaW8gcGFyYSBjb252ZXJ0ZXIgbyBjw7NkaWdvIHJnYiBwYXJhIGhleGFkZWNpbWFsLlxyXG4gICAgY29uc3Qgc2VwID0gcmdiLmluZGV4T2YoJywnKSA+IC0xID8gJywnIDogJyAnO1xyXG4gICAgcmdiID0gcmdiLnN1YnN0cig0KS5zcGxpdCgnKScpWzBdLnNwbGl0KHNlcCk7XHJcblxyXG4gICAgbGV0IHIgPSAoK3JnYlswXSkudG9TdHJpbmcoMTYpO1xyXG4gICAgbGV0IGcgPSAoK3JnYlsxXSkudG9TdHJpbmcoMTYpO1xyXG4gICAgbGV0IGIgPSAoK3JnYlsyXSkudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgIGlmIChyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByID0gJzAnICsgcjtcclxuICAgIH1cclxuICAgIGlmIChnLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBnID0gJzAnICsgZztcclxuICAgIH1cclxuICAgIGlmIChiLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBiID0gJzAnICsgYjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVDdXJzb3JPbkxpbmsoZXZlbnQ6IGFueSwgYWN0aW9uOiAnYWRkJyB8ICdyZW1vdmUnKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlID8gc2VsZWN0aW9uLmZvY3VzTm9kZS5wYXJlbnROb2RlIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaXNDdHJsID0gZXZlbnQua2V5ID09PSAnQ29udHJvbCc7XHJcbiAgICBjb25zdCBpc0NvbW1hbmQgPSBldmVudC5rZXkgPT09ICdNZXRhJztcclxuICAgIGNvbnN0IGlzT25DdHJsTGluayA9IHRoaXMuaXNDdXJzb3JQb3NpdGlvbmVkSW5BTGluaygpICYmIChpc0N0cmwgfHwgaXNDb21tYW5kKTtcclxuXHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBpZiAoaXNPbkN0cmxMaW5rKSB7XHJcbiAgICAgICAgZWxlbWVudFsnY2xhc3NMaXN0J11bYWN0aW9uXSgncG8tY2xpY2thYmxlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaXNDbGlja2FibGUgPSBlbGVtZW50WydjbGFzc0xpc3QnXSAmJiBlbGVtZW50WydjbGFzc0xpc3QnXS5jb250YWlucygncG8tY2xpY2thYmxlJyk7XHJcblxyXG4gICAgICAgIGlmIChpc0NsaWNrYWJsZSkge1xyXG4gICAgICAgICAgZWxlbWVudFsnY2xhc3NMaXN0J10ucmVtb3ZlKCdwby1jbGlja2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVNb2RlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVNb2RlbCgpIHtcclxuICAgIHRoaXMubW9kZWxWYWx1ZSA9IHRoaXMuYm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XHJcblxyXG4gICAgdGhpcy52YWx1ZS5lbWl0KHRoaXMubW9kZWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVZhbHVlV2l0aE1vZGVsVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLm1vZGVsVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlDdXJzb3JQb3NpdGlvbkluRmlyZWZveElFRWRnZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRleHRTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IG5vZGVMaW5rID0gdGV4dFNlbGVjdGlvbi5mb2N1c05vZGU7XHJcbiAgICBsZXQgaXNMaW5rID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKG5vZGVMaW5rICYmIG5vZGVMaW5rLm5vZGVOYW1lID09PSAnQScpIHtcclxuICAgICAgdGhpcy5saW5rRWxlbWVudCA9IG5vZGVMaW5rO1xyXG4gICAgICBpc0xpbmsgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmFuZ2UgPSB0ZXh0U2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgIGNvbnN0IGZyYWdtZW50RG9jdW1lbnQgPSByYW5nZS5jbG9uZUNvbnRlbnRzKCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBmcmFnbWVudERvY3VtZW50LmNoaWxkTm9kZXNbMF0gfHwgZnJhZ21lbnREb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgIHRoaXMubGlua0VsZW1lbnQgPSBlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgPT09ICdBJyA/IGVsZW1lbnQgOiB1bmRlZmluZWQ7XHJcbiAgICAgIGlzTGluayA9ICEhdGhpcy5saW5rRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNMaW5rO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgI2JvZHlFbGVtZW50XHJcbiAgY2xhc3M9XCJwby1yaWNoLXRleHQtYm9keVwiXHJcbiAgdGFiaW5kZXg9XCIwXCJcclxuICBbYXR0ci5jb250ZW50ZWRpdGFibGVdPVwiIXJlYWRvbmx5XCJcclxuICBbYXR0ci5kYXRhLXBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiXHJcbiAgKGJsdXIpPVwib25CbHVyKClcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4gIChjdXQpPVwidXBkYXRlKClcIlxyXG4gIChmb2N1cyk9XCJvbkZvY3VzKClcIlxyXG4gIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcclxuICAocGFzdGUpPVwib25QYXN0ZSgpXCJcclxuPjwvZGl2PlxyXG4iXX0=