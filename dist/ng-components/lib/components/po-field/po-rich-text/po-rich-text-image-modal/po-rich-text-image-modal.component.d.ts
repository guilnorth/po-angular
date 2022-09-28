import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoLanguageService } from './../../../../services/po-language/po-language.service';
import { PoModalAction, PoModalComponent } from '../../../po-modal';
import { PoUploadComponent } from '../../po-upload/po-upload.component';
import { PoUploadFileRestrictions } from '../../po-upload/interfaces/po-upload-file-restriction.interface';
import * as i0 from "@angular/core";
export declare class PoRichTextImageModalComponent {
    private languageService;
    modal: PoModalComponent;
    modalImageForm: NgForm;
    upload: PoUploadComponent;
    command: EventEmitter<string | {
        command: string;
        value: string | any;
    }>;
    savedCursorPosition: any;
    selection: Selection;
    uploadModel: Array<any>;
    uploadRestrictions: PoUploadFileRestrictions;
    urlImage: string;
    readonly literals: any;
    modalCancelAction: PoModalAction;
    modalConfirmAction: PoModalAction;
    get isUploadValid(): boolean;
    get isUrlValid(): boolean;
    constructor(languageService: PoLanguageService);
    openModal(): void;
    private cleanUpFields;
    private convertToBase64;
    private emitCommand;
    private insertElementRef;
    private retrieveCursorPosition;
    private saveCursorPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRichTextImageModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoRichTextImageModalComponent, "po-rich-text-image-modal", never, {}, { "command": "p-command"; }, never, never, false>;
}
