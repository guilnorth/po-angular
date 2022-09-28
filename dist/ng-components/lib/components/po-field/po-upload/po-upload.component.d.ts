import { Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PoI18nPipe } from '../../../services/po-i18n/po-i18n.pipe';
import { PoNotificationService } from '../../../services/po-notification/po-notification.service';
import { PoProgressStatus } from '../../po-progress/enums/po-progress-status.enum';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoUploadBaseComponent } from './po-upload-base.component';
import { PoUploadFile } from './po-upload-file';
import { PoUploadService } from './po-upload.service';
import { PoUploadStatus } from './po-upload-status.enum';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoUploadBaseComponent
 *
 * @example
 *
 * <example name="po-upload-basic" title="PO Upload Basic">
 *   <file name="sample-po-upload-basic/sample-po-upload-basic.component.html"> </file>
 *   <file name="sample-po-upload-basic/sample-po-upload-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-upload-labs" title="PO Upload Labs">
 *   <file name="sample-po-upload-labs/sample-po-upload-labs.component.html"> </file>
 *   <file name="sample-po-upload-labs/sample-po-upload-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-upload-resume" title="PO Upload - Resume">
 *   <file name="sample-po-upload-resume/sample-po-upload-resume.component.html"> </file>
 *   <file name="sample-po-upload-resume/sample-po-upload-resume.component.ts"> </file>
 * </example>
 *
 * <example name="po-upload-rs" title="PO Upload - Realize & Show">
 *   <file name="sample-po-upload-rs/sample-po-upload-rs.component.html"> </file>
 *   <file name="sample-po-upload-rs/sample-po-upload-rs.component.ts"> </file>
 * </example>
 */
export declare class PoUploadComponent extends PoUploadBaseComponent implements AfterViewInit {
    renderer: Renderer2;
    private i18nPipe;
    private notification;
    private cd;
    private inputFile;
    private poUploadDragDropComponent;
    private uploadButton;
    infoByUploadStatus: {
        [key: string]: {
            text: (percent?: number) => string;
            icon?: string;
        };
    };
    progressStatusByFileStatus: {
        0: PoProgressStatus;
        2: PoProgressStatus;
    };
    private calledByCleanInputValue;
    constructor(uploadService: PoUploadService, renderer: Renderer2, i18nPipe: PoI18nPipe, notification: PoNotificationService, cd: ChangeDetectorRef, languageService: PoLanguageService);
    get displayDragDrop(): boolean;
    get displaySendButton(): boolean;
    get selectFileButtonLabel(): string;
    get hasMoreThanFourItems(): boolean;
    get hasMultipleFiles(): boolean;
    get hasFileNotUploaded(): boolean;
    get isDisabled(): boolean;
    get maxFiles(): number;
    cancel(file: PoUploadFile): void;
    ngAfterViewInit(): void;
    /** Método responsável por **limpar** o(s) arquivo(s) selecionado(s). */
    clear(): void;
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoUploadComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;
     *
     * focusUpload() {
     *   this.upload.focus();
     * }
     * ```
     */
    focus(): void;
    hasAnyFileUploading(files: Array<PoUploadFile>): boolean;
    isAllowCancelEvent(status: PoUploadStatus): boolean;
    onFileChange(event: any): void;
    onFileChangeDragDrop(files: any): void;
    removeFile(file: any): void;
    /** Método responsável por **abrir** a janela para seleção de arquivo(s). */
    selectFiles(): void;
    sendFeedback(): void;
    /** Método responsável por **enviar** o(s) arquivo(s) selecionado(s). */
    sendFiles(): void;
    setDirectoryAttribute(canHandleDirectory: boolean): void;
    stopUpload(file: PoUploadFile): void;
    trackByFn(index: any, file: PoUploadFile): string;
    uploadFiles(files: Array<PoUploadFile>): void;
    private cleanInputValue;
    private responseHandler;
    private setPipeArguments;
    private stopUploadHandler;
    private updateFiles;
    private updateModel;
    private uploadingHandler;
    private mapCleanUploadFiles;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoUploadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoUploadComponent, "po-upload", never, {}, {}, never, never, false>;
}
