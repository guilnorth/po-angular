import { ElementRef, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoLanguageService } from './../../../../services/po-language/po-language.service';
import { PoModalAction, PoModalComponent } from '../../../po-modal';
import * as i0 from "@angular/core";
export declare class PoRichTextLinkModalComponent {
    private languageService;
    modal: PoModalComponent;
    modalLinkForm: NgForm;
    command: EventEmitter<string | {
        command: string;
        value: string | any;
    }>;
    linkEditing: EventEmitter<any>;
    savedCursorPosition: any;
    selection: Selection;
    urlLink: string;
    urlLinkText: string;
    readonly literals: any;
    modalCancelAction: PoModalAction;
    modalConfirmAction: {
        label: string;
        disabled: boolean;
        action: () => void;
    };
    private isLinkEditing;
    private isSelectedLink;
    private linkElement;
    private savedSelection;
    constructor(languageService: PoLanguageService);
    linkConfirmAction(): string;
    formModelValidate(): boolean;
    openModal(selectedLinkElement: ElementRef): void;
    private selectedLink;
    private checkIfIsEmpty;
    private cleanUpFields;
    private formReset;
    private prepareModalForLink;
    private restoreSelection;
    private retrieveCursorPosition;
    private saveCursorPosition;
    private saveSelectionText;
    private setLinkEditableForModal;
    private toEditLink;
    private toInsertLink;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRichTextLinkModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoRichTextLinkModalComponent, "po-rich-text-link-modal", never, {}, { "command": "p-command"; "linkEditing": "p-link-editing"; }, never, never, false>;
}