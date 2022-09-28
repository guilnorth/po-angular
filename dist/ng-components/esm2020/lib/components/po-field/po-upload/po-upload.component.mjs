import { Component, ElementRef, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatBytes, isMobile } from '../../../utils/util';
import { PoI18nPipe } from '../../../services/po-i18n/po-i18n.pipe';
import { PoProgressStatus } from '../../po-progress/enums/po-progress-status.enum';
import { PoUploadBaseComponent } from './po-upload-base.component';
import { PoUploadDragDropComponent } from './po-upload-drag-drop/po-upload-drag-drop.component';
import { PoUploadService } from './po-upload.service';
import { PoUploadStatus } from './po-upload-status.enum';
import * as i0 from "@angular/core";
import * as i1 from "./po-upload.service";
import * as i2 from "../../../services/po-i18n/po-i18n.pipe";
import * as i3 from "../../../services/po-notification/po-notification.service";
import * as i4 from "../../../services/po-language/po-language.service";
import * as i5 from "@angular/common";
import * as i6 from "../../po-button/po-button.component";
import * as i7 from "../../po-container/po-container.component";
import * as i8 from "../po-field-container/po-field-container.component";
import * as i9 from "../../po-progress/po-progress.component";
import * as i10 from "./po-upload-drag-drop/po-upload-drag-drop.component";
import * as i11 from "./po-upload-file-restrictions/po-upload-file-restrictions.component";
const _c0 = ["inputFile"];
const _c1 = ["uploadButton"];
function PoUploadComponent_po_upload_drag_drop_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-upload-drag-drop", 9);
    i0.ɵɵlistener("p-file-change", function PoUploadComponent_po_upload_drag_drop_4_Template_po_upload_drag_drop_p_file_change_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onFileChangeDragDrop($event)); })("p-select-files", function PoUploadComponent_po_upload_drag_drop_4_Template_po_upload_drag_drop_p_select_files_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.selectFiles()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-directory-compatible", ctx_r1.canHandleDirectory)("p-disabled", ctx_r1.isDisabled)("p-drag-drop-height", ctx_r1.dragDropHeight)("p-literals", ctx_r1.literals);
} }
function PoUploadComponent_po_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 10, 11);
    i0.ɵɵlistener("p-click", function PoUploadComponent_po_button_5_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.selectFiles()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-disabled", ctx_r2.isDisabled)("p-label", ctx_r2.selectFileButtonLabel);
} }
const _c2 = function (a0) { return { "po-upload-file-restrictions-drag-drop": a0 }; };
function PoUploadComponent_po_upload_file_restrictions_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-upload-file-restrictions", 12);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx_r3.displayDragDrop))("p-allowed-extensions", ctx_r3.fileRestrictions == null ? null : ctx_r3.fileRestrictions.allowedExtensions)("p-max-files", ctx_r3.maxFiles)("p-max-file-size", ctx_r3.fileRestrictions == null ? null : ctx_r3.fileRestrictions.maxFileSize)("p-min-file-size", ctx_r3.fileRestrictions == null ? null : ctx_r3.fileRestrictions.minFileSize);
} }
function PoUploadComponent_div_7_po_progress_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-progress", 17);
    i0.ɵɵlistener("p-cancel", function PoUploadComponent_div_7_po_progress_3_Template_po_progress_p_cancel_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const file_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.cancel(file_r13)); })("p-retry", function PoUploadComponent_div_7_po_progress_3_Template_po_progress_p_retry_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const file_r13 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.uploadFiles([file_r13])); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r13 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-info", ctx_r12.infoByUploadStatus[file_r13.status] == null ? null : ctx_r12.infoByUploadStatus[file_r13.status].text(file_r13.percent))("p-info-icon", ctx_r12.infoByUploadStatus[file_r13.status] == null ? null : ctx_r12.infoByUploadStatus[file_r13.status].icon)("p-status", ctx_r12.progressStatusByFileStatus[file_r13.status])("p-text", file_r13.displayName)("p-value", file_r13.percent);
} }
const _c3 = function (a0) { return { "po-upload-progress-container-area po-pt-2 po-pl-1": a0 }; };
function PoUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "po-container", 14)(2, "div", 15);
    i0.ɵɵtemplate(3, PoUploadComponent_div_7_po_progress_3_Template, 1, 5, "po-progress", 16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-height", ctx_r4.hasMoreThanFourItems ? 280 : "auto")("p-no-border", !ctx_r4.hasMoreThanFourItems)("p-no-padding", !ctx_r4.hasMoreThanFourItems);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c3, ctx_r4.hasMoreThanFourItems));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.currentFiles)("ngForTrackBy", ctx_r4.trackByFn);
} }
function PoUploadComponent_po_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-button", 18);
    i0.ɵɵlistener("p-click", function PoUploadComponent_po_button_8_Template_po_button_p_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.uploadFiles(ctx_r17.currentFiles)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("po-mt-3", ctx_r5.hasMoreThanFourItems);
    i0.ɵɵproperty("p-disabled", ctx_r5.hasAnyFileUploading(ctx_r5.currentFiles))("p-label", ctx_r5.literals.startSending);
} }
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
export class PoUploadComponent extends PoUploadBaseComponent {
    constructor(uploadService, renderer, i18nPipe, notification, cd, languageService) {
        super(uploadService, languageService);
        this.renderer = renderer;
        this.i18nPipe = i18nPipe;
        this.notification = notification;
        this.cd = cd;
        this.infoByUploadStatus = {
            [PoUploadStatus.Uploaded]: {
                text: () => this.literals.sentWithSuccess,
                icon: 'po-icon-ok'
            },
            [PoUploadStatus.Error]: {
                text: () => this.literals.errorOccurred
            },
            [PoUploadStatus.Uploading]: {
                text: percent => percent + '%'
            }
        };
        this.progressStatusByFileStatus = {
            [PoUploadStatus.Uploaded]: PoProgressStatus.Success,
            [PoUploadStatus.Error]: PoProgressStatus.Error
        };
        this.calledByCleanInputValue = false;
    }
    get displayDragDrop() {
        return this.dragDrop && !isMobile();
    }
    get displaySendButton() {
        const currentFiles = this.currentFiles || [];
        return !this.hideSendButton && !this.autoUpload && currentFiles.length > 0 && this.hasFileNotUploaded;
    }
    get selectFileButtonLabel() {
        if (this.canHandleDirectory) {
            return this.literals.selectFolder;
        }
        else if (this.isMultiple) {
            return this.literals.selectFiles;
        }
        else {
            return this.literals.selectFile;
        }
    }
    get hasMoreThanFourItems() {
        return this.currentFiles && this.currentFiles.length > 4;
    }
    get hasMultipleFiles() {
        return this.currentFiles && this.currentFiles.length > 1;
    }
    get hasFileNotUploaded() {
        if (Array.isArray(this.currentFiles)) {
            return this.currentFiles.some(file => file.status !== PoUploadStatus.Uploaded);
        }
        return false;
    }
    get isDisabled() {
        const currentFiles = this.currentFiles || [];
        return !!(this.hasAnyFileUploading(currentFiles) ||
            !this.url ||
            this.disabled ||
            this.isExceededFileLimit(currentFiles.length));
    }
    get maxFiles() {
        return this.isMultiple && this.fileRestrictions && this.fileRestrictions.maxFiles;
    }
    cancel(file) {
        if (file.status === PoUploadStatus.Uploading) {
            return this.stopUpload(file);
        }
        this.removeFile(file);
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    /** Método responsável por **limpar** o(s) arquivo(s) selecionado(s). */
    clear() {
        this.currentFiles = undefined;
        this.updateModel([]);
        this.cleanInputValue();
    }
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
    focus() {
        if (!this.disabled) {
            if (this.uploadButton) {
                this.uploadButton.focus();
                return;
            }
            if (this.displayDragDrop) {
                this.poUploadDragDropComponent.focus();
            }
        }
    }
    // Verifica se existe algum arquivo sendo enviado ao serviço.
    hasAnyFileUploading(files) {
        if (files && files.length) {
            return files.some(file => file.status === PoUploadStatus.Uploading);
        }
        return false;
    }
    // retorna se o status do arquivo é diferente de enviado
    isAllowCancelEvent(status) {
        return status !== PoUploadStatus.Uploaded;
    }
    // Função disparada ao selecionar algum arquivo.
    onFileChange(event) {
        // necessário este tratamento quando para IE, pois nele o change é disparado quando o campo é limpado também
        if (this.calledByCleanInputValue) {
            this.calledByCleanInputValue = false;
            return event.preventDefault();
        }
        const files = event.target.files;
        this.updateFiles(files);
        this.cleanInputValue();
    }
    onFileChangeDragDrop(files) {
        this.updateFiles(files);
    }
    // Remove o arquivo passado por parâmetro da lista dos arquivos correntes.
    removeFile(file) {
        const index = this.currentFiles.indexOf(file);
        this.currentFiles.splice(index, 1);
        this.updateModel([...this.currentFiles]);
    }
    /** Método responsável por **abrir** a janela para seleção de arquivo(s). */
    selectFiles() {
        this.onModelTouched?.();
        this.calledByCleanInputValue = false;
        this.inputFile.nativeElement.click();
    }
    sendFeedback() {
        if (this.sizeNotAllowed > 0) {
            const minFileSize = formatBytes(this.fileRestrictions.minFileSize);
            const maxFileSize = formatBytes(this.fileRestrictions.maxFileSize);
            const args = [this.sizeNotAllowed, minFileSize || '0', maxFileSize];
            this.setPipeArguments('invalidSize', args);
            this.sizeNotAllowed = 0;
        }
        if (this.extensionNotAllowed > 0) {
            const allowedExtensionsFormatted = this.fileRestrictions.allowedExtensions.join(', ').toUpperCase();
            const args = [this.extensionNotAllowed, allowedExtensionsFormatted];
            this.setPipeArguments('invalidFormat', args);
            this.extensionNotAllowed = 0;
        }
        if (this.quantityNotAllowed > 0) {
            const args = [this.quantityNotAllowed];
            this.setPipeArguments('invalidAmount', args);
            this.quantityNotAllowed = 0;
        }
    }
    /** Método responsável por **enviar** o(s) arquivo(s) selecionado(s). */
    sendFiles() {
        if (this.currentFiles && this.currentFiles.length) {
            this.uploadFiles(this.currentFiles);
        }
    }
    setDirectoryAttribute(canHandleDirectory) {
        if (canHandleDirectory) {
            this.renderer.setAttribute(this.inputFile.nativeElement, 'webkitdirectory', 'true');
        }
        else {
            this.renderer.removeAttribute(this.inputFile.nativeElement, 'webkitdirectory');
        }
    }
    // Caso o componente estiver no modo AutoUpload, o arquivo também será removido da lista.
    stopUpload(file) {
        this.uploadService.stopRequestByFile(file, () => {
            if (this.autoUpload) {
                this.removeFile(file);
            }
            else {
                this.stopUploadHandler(file);
            }
            this.cd.markForCheck();
        });
    }
    trackByFn(index, file) {
        return file.uid;
    }
    // Envia os arquivos passados por parâmetro, exceto os que já foram enviados ao serviço.
    uploadFiles(files) {
        const filesFiltered = files.filter(file => file.status !== PoUploadStatus.Uploaded);
        this.uploadService.upload(this.url, filesFiltered, this.headers, this.onUpload, (file, percent) => {
            // UPLOADING
            this.uploadingHandler(file, percent);
        }, (file, eventResponse) => {
            // SUCCESS
            this.responseHandler(file, PoUploadStatus.Uploaded);
            this.onSuccess.emit(eventResponse);
        }, (file, eventError) => {
            // Error
            this.responseHandler(file, PoUploadStatus.Error);
            this.onError.emit(eventError);
        });
    }
    cleanInputValue() {
        this.calledByCleanInputValue = true;
        this.inputFile.nativeElement.value = '';
    }
    // função disparada na resposta do sucesso ou error
    responseHandler(file, status) {
        file.status = status;
        file.percent = 100;
        this.cd.markForCheck();
    }
    // método responsável por setar os argumentos do i18nPipe de acordo com a restrição.
    setPipeArguments(literalAttributes, literalArguments) {
        const pipeArguments = this.i18nPipe.transform(this.literals[literalAttributes], literalArguments);
        this.notification.information(pipeArguments);
    }
    // Função disparada ao parar um envio de arquivo.
    stopUploadHandler(file) {
        file.status = PoUploadStatus.None;
        file.percent = 0;
        this.cd.markForCheck();
    }
    updateFiles(files) {
        this.currentFiles = this.parseFiles(files);
        this.updateModel([...this.currentFiles]);
        if (this.autoUpload) {
            this.uploadFiles(this.currentFiles);
        }
    }
    // Atualiza o ngModel para os arquivos passados por parâmetro.
    updateModel(files) {
        const modelFiles = this.mapCleanUploadFiles(files);
        this.onModelChange ? this.onModelChange(modelFiles) : this.ngModelChange.emit(modelFiles);
    }
    // Função disparada enquanto o arquivo está sendo enviado ao serviço.
    uploadingHandler(file, percent) {
        file.status = PoUploadStatus.Uploading;
        file.percent = percent;
        this.cd.markForCheck();
    }
    // retorna os objetos do array sem as propriedades: percent e displayName
    mapCleanUploadFiles(files) {
        const mapedByUploadFile = progressFile => {
            const { percent, displayName, ...uploadFile } = progressFile;
            return uploadFile;
        };
        return files.map(mapedByUploadFile);
    }
}
PoUploadComponent.ɵfac = function PoUploadComponent_Factory(t) { return new (t || PoUploadComponent)(i0.ɵɵdirectiveInject(i1.PoUploadService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.PoI18nPipe), i0.ɵɵdirectiveInject(i3.PoNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.PoLanguageService)); };
PoUploadComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoUploadComponent, selectors: [["po-upload"]], viewQuery: function PoUploadComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
        i0.ɵɵviewQuery(PoUploadDragDropComponent, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputFile = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poUploadDragDropComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uploadButton = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            PoI18nPipe,
            PoUploadService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PoUploadComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => PoUploadComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 13, consts: [[3, "p-label", "p-help", "p-optional"], [1, "po-upload"], ["type", "file", 1, "po-upload-input", 3, "accept", "disabled", "multiple", "required", "change"], ["inputFile", ""], [3, "p-directory-compatible", "p-disabled", "p-drag-drop-height", "p-literals", "p-file-change", "p-select-files", 4, "ngIf"], ["class", "po-upload-button", "for", "file", 3, "p-disabled", "p-label", "p-click", 4, "ngIf"], ["class", "po-upload-file-restrictions", 3, "ngClass", "p-allowed-extensions", "p-max-files", "p-max-file-size", "p-min-file-size", 4, "ngIf"], ["class", "po-upload-progress-container", 4, "ngIf"], ["class", "po-upload-send-button", "p-kind", "primary", 3, "po-mt-3", "p-disabled", "p-label", "p-click", 4, "ngIf"], [3, "p-directory-compatible", "p-disabled", "p-drag-drop-height", "p-literals", "p-file-change", "p-select-files"], ["for", "file", 1, "po-upload-button", 3, "p-disabled", "p-label", "p-click"], ["uploadButton", ""], [1, "po-upload-file-restrictions", 3, "ngClass", "p-allowed-extensions", "p-max-files", "p-max-file-size", "p-min-file-size"], [1, "po-upload-progress-container"], ["p-no-shadow", "", 3, "p-height", "p-no-border", "p-no-padding"], [3, "ngClass"], [3, "p-info", "p-info-icon", "p-status", "p-text", "p-value", "p-cancel", "p-retry", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "p-info", "p-info-icon", "p-status", "p-text", "p-value", "p-cancel", "p-retry"], ["p-kind", "primary", 1, "po-upload-send-button", 3, "p-disabled", "p-label", "p-click"]], template: function PoUploadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-field-container", 0)(1, "div", 1)(2, "input", 2, 3);
        i0.ɵɵlistener("change", function PoUploadComponent_Template_input_change_2_listener($event) { return ctx.onFileChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PoUploadComponent_po_upload_drag_drop_4_Template, 1, 4, "po-upload-drag-drop", 4);
        i0.ɵɵtemplate(5, PoUploadComponent_po_button_5_Template, 2, 2, "po-button", 5);
        i0.ɵɵtemplate(6, PoUploadComponent_po_upload_file_restrictions_6_Template, 1, 7, "po-upload-file-restrictions", 6);
        i0.ɵɵtemplate(7, PoUploadComponent_div_7_Template, 4, 8, "div", 7);
        i0.ɵɵtemplate(8, PoUploadComponent_po_button_8_Template, 1, 4, "po-button", 8);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("p-label", ctx.label)("p-help", ctx.help)("p-optional", !ctx.required && ctx.optional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("accept", ctx.allowedExtensions)("disabled", ctx.isDisabled)("multiple", ctx.isMultiple)("required", ctx.required);
        i0.ɵɵattribute("name", ctx.name);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.displayDragDrop);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSelectButton && !ctx.displayDragDrop);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.fileRestrictions && !ctx.hideRestrictionsInfo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.currentFiles && ctx.currentFiles.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displaySendButton);
    } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i6.PoButtonComponent, i7.PoContainerComponent, i8.PoFieldContainerComponent, i9.PoProgressComponent, i10.PoUploadDragDropComponent, i11.PoUploadFileRestrictionsComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadComponent, [{
        type: Component,
        args: [{ selector: 'po-upload', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    PoI18nPipe,
                    PoUploadService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PoUploadComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => PoUploadComponent),
                        multi: true
                    }
                ], template: "<po-field-container [p-label]=\"label\" [p-help]=\"help\" [p-optional]=\"!required && optional\">\r\n  <div class=\"po-upload\">\r\n    <input\r\n      #inputFile\r\n      class=\"po-upload-input\"\r\n      type=\"file\"\r\n      [accept]=\"allowedExtensions\"\r\n      [attr.name]=\"name\"\r\n      [disabled]=\"isDisabled\"\r\n      [multiple]=\"isMultiple\"\r\n      [required]=\"required\"\r\n      (change)=\"onFileChange($event)\"\r\n    />\r\n\r\n    <po-upload-drag-drop\r\n      *ngIf=\"displayDragDrop\"\r\n      [p-directory-compatible]=\"canHandleDirectory\"\r\n      [p-disabled]=\"isDisabled\"\r\n      [p-drag-drop-height]=\"dragDropHeight\"\r\n      [p-literals]=\"literals\"\r\n      (p-file-change)=\"onFileChangeDragDrop($event)\"\r\n      (p-select-files)=\"selectFiles()\"\r\n    >\r\n    </po-upload-drag-drop>\r\n\r\n    <po-button\r\n      *ngIf=\"!hideSelectButton && !displayDragDrop\"\r\n      #uploadButton\r\n      class=\"po-upload-button\"\r\n      for=\"file\"\r\n      [p-disabled]=\"isDisabled\"\r\n      [p-label]=\"selectFileButtonLabel\"\r\n      (p-click)=\"selectFiles()\"\r\n    >\r\n    </po-button>\r\n\r\n    <po-upload-file-restrictions\r\n      *ngIf=\"fileRestrictions && !hideRestrictionsInfo\"\r\n      class=\"po-upload-file-restrictions\"\r\n      [ngClass]=\"{ 'po-upload-file-restrictions-drag-drop': displayDragDrop }\"\r\n      [p-allowed-extensions]=\"fileRestrictions?.allowedExtensions\"\r\n      [p-max-files]=\"maxFiles\"\r\n      [p-max-file-size]=\"fileRestrictions?.maxFileSize\"\r\n      [p-min-file-size]=\"fileRestrictions?.minFileSize\"\r\n    >\r\n    </po-upload-file-restrictions>\r\n\r\n    <div *ngIf=\"currentFiles && currentFiles.length\" class=\"po-upload-progress-container\">\r\n      <po-container\r\n        p-no-shadow\r\n        [p-height]=\"hasMoreThanFourItems ? 280 : 'auto'\"\r\n        [p-no-border]=\"!hasMoreThanFourItems\"\r\n        [p-no-padding]=\"!hasMoreThanFourItems\"\r\n      >\r\n        <div [ngClass]=\"{ 'po-upload-progress-container-area po-pt-2 po-pl-1': hasMoreThanFourItems }\">\r\n          <po-progress\r\n            *ngFor=\"let file of currentFiles; trackBy: trackByFn\"\r\n            [p-info]=\"infoByUploadStatus[file.status]?.text(file.percent)\"\r\n            [p-info-icon]=\"infoByUploadStatus[file.status]?.icon\"\r\n            [p-status]=\"progressStatusByFileStatus[file.status]\"\r\n            [p-text]=\"file.displayName\"\r\n            [p-value]=\"file.percent\"\r\n            (p-cancel)=\"cancel(file)\"\r\n            (p-retry)=\"uploadFiles([file])\"\r\n          >\r\n          </po-progress>\r\n        </div>\r\n      </po-container>\r\n    </div>\r\n\r\n    <po-button\r\n      *ngIf=\"displaySendButton\"\r\n      class=\"po-upload-send-button\"\r\n      [class.po-mt-3]=\"hasMoreThanFourItems\"\r\n      p-kind=\"primary\"\r\n      [p-disabled]=\"hasAnyFileUploading(currentFiles)\"\r\n      [p-label]=\"literals.startSending\"\r\n      (p-click)=\"uploadFiles(currentFiles)\"\r\n    >\r\n    </po-button>\r\n  </div>\r\n</po-field-container>\r\n" }]
    }], function () { return [{ type: i1.PoUploadService }, { type: i0.Renderer2 }, { type: i2.PoI18nPipe }, { type: i3.PoNotificationService }, { type: i0.ChangeDetectorRef }, { type: i4.PoLanguageService }]; }, { inputFile: [{
            type: ViewChild,
            args: ['inputFile', { read: ElementRef, static: true }]
        }], poUploadDragDropComponent: [{
            type: ViewChild,
            args: [PoUploadDragDropComponent]
        }], uploadButton: [{
            type: ViewChild,
            args: ['uploadButton']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFVixTQUFTLEVBRVQsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUduRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1RyRCw4Q0FRQztJQUZDLGlOQUFpQixlQUFBLG1DQUE0QixDQUFBLElBQUMsZ01BQzVCLGVBQUEsb0JBQWEsQ0FBQSxJQURlO0lBR2hELGlCQUFzQjs7O0lBUHBCLGtFQUE2QyxpQ0FBQSw2Q0FBQSwrQkFBQTs7OztJQVMvQyx5Q0FRQztJQURD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Qzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjt1TkFHbUUsU0FBUztrQkFBNUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDWix5QkFBeUI7a0JBQXRFLFNBQVM7bUJBQUMseUJBQXlCO1lBQ0QsWUFBWTtrQkFBOUMsU0FBUzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGZvcm1hdEJ5dGVzLCBpc01vYmlsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vcG8tYnV0dG9uL3BvLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0kxOG5QaXBlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8taTE4bi9wby1pMThuLnBpcGUnO1xyXG5pbXBvcnQgeyBQb05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1ub3RpZmljYXRpb24vcG8tbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1Byb2dyZXNzU3RhdHVzIH0gZnJvbSAnLi4vLi4vcG8tcHJvZ3Jlc3MvZW51bXMvcG8tcHJvZ3Jlc3Mtc3RhdHVzLmVudW0nO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9VcGxvYWRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9wby11cGxvYWQtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1VwbG9hZERyYWdEcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9wby11cGxvYWQtZHJhZy1kcm9wL3BvLXVwbG9hZC1kcmFnLWRyb3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9VcGxvYWRGaWxlIH0gZnJvbSAnLi9wby11cGxvYWQtZmlsZSc7XHJcbmltcG9ydCB7IFBvVXBsb2FkU2VydmljZSB9IGZyb20gJy4vcG8tdXBsb2FkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1VwbG9hZFN0YXR1cyB9IGZyb20gJy4vcG8tdXBsb2FkLXN0YXR1cy5lbnVtJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9VcGxvYWRCYXNlQ29tcG9uZW50XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby11cGxvYWQtYmFzaWNcIiB0aXRsZT1cIlBPIFVwbG9hZCBCYXNpY1wiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdXBsb2FkLWJhc2ljL3NhbXBsZS1wby11cGxvYWQtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdXBsb2FkLWJhc2ljL3NhbXBsZS1wby11cGxvYWQtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tdXBsb2FkLWxhYnNcIiB0aXRsZT1cIlBPIFVwbG9hZCBMYWJzXCI+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby11cGxvYWQtbGFicy9zYW1wbGUtcG8tdXBsb2FkLWxhYnMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdXBsb2FkLWxhYnMvc2FtcGxlLXBvLXVwbG9hZC1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXVwbG9hZC1yZXN1bWVcIiB0aXRsZT1cIlBPIFVwbG9hZCAtIFJlc3VtZVwiPlxyXG4gKiAgIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tdXBsb2FkLXJlc3VtZS9zYW1wbGUtcG8tdXBsb2FkLXJlc3VtZS5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby11cGxvYWQtcmVzdW1lL3NhbXBsZS1wby11cGxvYWQtcmVzdW1lLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLXVwbG9hZC1yc1wiIHRpdGxlPVwiUE8gVXBsb2FkIC0gUmVhbGl6ZSAmIFNob3dcIj5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXVwbG9hZC1ycy9zYW1wbGUtcG8tdXBsb2FkLXJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXVwbG9hZC1ycy9zYW1wbGUtcG8tdXBsb2FkLXJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFBvSTE4blBpcGUsXHJcbiAgICBQb1VwbG9hZFNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb1VwbG9hZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQb1VwbG9hZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9VcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBQb1VwbG9hZEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdpbnB1dEZpbGUnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0RmlsZTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFBvVXBsb2FkRHJhZ0Ryb3BDb21wb25lbnQpIHByaXZhdGUgcG9VcGxvYWREcmFnRHJvcENvbXBvbmVudDogUG9VcGxvYWREcmFnRHJvcENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCd1cGxvYWRCdXR0b24nKSBwcml2YXRlIHVwbG9hZEJ1dHRvbjogUG9CdXR0b25Db21wb25lbnQ7XHJcblxyXG4gIGluZm9CeVVwbG9hZFN0YXR1czogeyBba2V5OiBzdHJpbmddOiB7IHRleHQ6IChwZXJjZW50PzogbnVtYmVyKSA9PiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfSB9ID0ge1xyXG4gICAgW1BvVXBsb2FkU3RhdHVzLlVwbG9hZGVkXToge1xyXG4gICAgICB0ZXh0OiAoKSA9PiB0aGlzLmxpdGVyYWxzLnNlbnRXaXRoU3VjY2VzcyxcclxuICAgICAgaWNvbjogJ3BvLWljb24tb2snXHJcbiAgICB9LFxyXG4gICAgW1BvVXBsb2FkU3RhdHVzLkVycm9yXToge1xyXG4gICAgICB0ZXh0OiAoKSA9PiB0aGlzLmxpdGVyYWxzLmVycm9yT2NjdXJyZWRcclxuICAgIH0sXHJcbiAgICBbUG9VcGxvYWRTdGF0dXMuVXBsb2FkaW5nXToge1xyXG4gICAgICB0ZXh0OiBwZXJjZW50ID0+IHBlcmNlbnQgKyAnJSdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcm9ncmVzc1N0YXR1c0J5RmlsZVN0YXR1cyA9IHtcclxuICAgIFtQb1VwbG9hZFN0YXR1cy5VcGxvYWRlZF06IFBvUHJvZ3Jlc3NTdGF0dXMuU3VjY2VzcyxcclxuICAgIFtQb1VwbG9hZFN0YXR1cy5FcnJvcl06IFBvUHJvZ3Jlc3NTdGF0dXMuRXJyb3JcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNhbGxlZEJ5Q2xlYW5JbnB1dFZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdXBsb2FkU2VydmljZTogUG9VcGxvYWRTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGkxOG5QaXBlOiBQb0kxOG5QaXBlLFxyXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb246IFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIodXBsb2FkU2VydmljZSwgbGFuZ3VhZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5RHJhZ0Ryb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kcmFnRHJvcCAmJiAhaXNNb2JpbGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5U2VuZEJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGN1cnJlbnRGaWxlcyA9IHRoaXMuY3VycmVudEZpbGVzIHx8IFtdO1xyXG4gICAgcmV0dXJuICF0aGlzLmhpZGVTZW5kQnV0dG9uICYmICF0aGlzLmF1dG9VcGxvYWQgJiYgY3VycmVudEZpbGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5oYXNGaWxlTm90VXBsb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0RmlsZUJ1dHRvbkxhYmVsKCkge1xyXG4gICAgaWYgKHRoaXMuY2FuSGFuZGxlRGlyZWN0b3J5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpdGVyYWxzLnNlbGVjdEZvbGRlcjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpdGVyYWxzLnNlbGVjdEZpbGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGl0ZXJhbHMuc2VsZWN0RmlsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBoYXNNb3JlVGhhbkZvdXJJdGVtcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRGaWxlcyAmJiB0aGlzLmN1cnJlbnRGaWxlcy5sZW5ndGggPiA0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc011bHRpcGxlRmlsZXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RmlsZXMgJiYgdGhpcy5jdXJyZW50RmlsZXMubGVuZ3RoID4gMTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNGaWxlTm90VXBsb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmN1cnJlbnRGaWxlcykpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEZpbGVzLnNvbWUoZmlsZSA9PiBmaWxlLnN0YXR1cyAhPT0gUG9VcGxvYWRTdGF0dXMuVXBsb2FkZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY3VycmVudEZpbGVzID0gdGhpcy5jdXJyZW50RmlsZXMgfHwgW107XHJcblxyXG4gICAgcmV0dXJuICEhKFxyXG4gICAgICB0aGlzLmhhc0FueUZpbGVVcGxvYWRpbmcoY3VycmVudEZpbGVzKSB8fFxyXG4gICAgICAhdGhpcy51cmwgfHxcclxuICAgICAgdGhpcy5kaXNhYmxlZCB8fFxyXG4gICAgICB0aGlzLmlzRXhjZWVkZWRGaWxlTGltaXQoY3VycmVudEZpbGVzLmxlbmd0aClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4RmlsZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5maWxlUmVzdHJpY3Rpb25zICYmIHRoaXMuZmlsZVJlc3RyaWN0aW9ucy5tYXhGaWxlcztcclxuICB9XHJcblxyXG4gIGNhbmNlbChmaWxlOiBQb1VwbG9hZEZpbGUpIHtcclxuICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gUG9VcGxvYWRTdGF0dXMuVXBsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0b3BVcGxvYWQoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVGaWxlKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgKipsaW1wYXIqKiBvKHMpIGFycXVpdm8ocykgc2VsZWNpb25hZG8ocykuICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWxlcyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudXBkYXRlTW9kZWwoW10pO1xyXG4gICAgdGhpcy5jbGVhbklucHV0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bsOnw6NvIHF1ZSBhdHJpYnVpIGZvY28gYW8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIFBhcmEgdXRpbGl6w6EtbGEgw6kgbmVjZXNzw6FyaW8gdGVyIGEgaW5zdMOibmNpYSBkbyBjb21wb25lbnRlIG5vIERPTSwgcG9kZW5kbyBzZXIgdXRpbGl6YWRvIG8gVmlld0NoaWxkIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogaW1wb3J0IHsgUG9VcGxvYWRDb21wb25lbnQgfSBmcm9tICdAcG8tdWkvbmctY29tcG9uZW50cyc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIEBWaWV3Q2hpbGQoUG9VcGxvYWRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHVwbG9hZDogUG9VcGxvYWRDb21wb25lbnQ7XHJcbiAgICpcclxuICAgKiBmb2N1c1VwbG9hZCgpIHtcclxuICAgKiAgIHRoaXMudXBsb2FkLmZvY3VzKCk7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZvY3VzKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnVwbG9hZEJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMudXBsb2FkQnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXNwbGF5RHJhZ0Ryb3ApIHtcclxuICAgICAgICB0aGlzLnBvVXBsb2FkRHJhZ0Ryb3BDb21wb25lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVmVyaWZpY2Egc2UgZXhpc3RlIGFsZ3VtIGFycXVpdm8gc2VuZG8gZW52aWFkbyBhbyBzZXJ2acOnby5cclxuICBoYXNBbnlGaWxlVXBsb2FkaW5nKGZpbGVzOiBBcnJheTxQb1VwbG9hZEZpbGU+KSB7XHJcbiAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmaWxlcy5zb21lKGZpbGUgPT4gZmlsZS5zdGF0dXMgPT09IFBvVXBsb2FkU3RhdHVzLlVwbG9hZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0b3JuYSBzZSBvIHN0YXR1cyBkbyBhcnF1aXZvIMOpIGRpZmVyZW50ZSBkZSBlbnZpYWRvXHJcbiAgaXNBbGxvd0NhbmNlbEV2ZW50KHN0YXR1czogUG9VcGxvYWRTdGF0dXMpIHtcclxuICAgIHJldHVybiBzdGF0dXMgIT09IFBvVXBsb2FkU3RhdHVzLlVwbG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gZGlzcGFyYWRhIGFvIHNlbGVjaW9uYXIgYWxndW0gYXJxdWl2by5cclxuICBvbkZpbGVDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIG5lY2Vzc8OhcmlvIGVzdGUgdHJhdGFtZW50byBxdWFuZG8gcGFyYSBJRSwgcG9pcyBuZWxlIG8gY2hhbmdlIMOpIGRpc3BhcmFkbyBxdWFuZG8gbyBjYW1wbyDDqSBsaW1wYWRvIHRhbWLDqW1cclxuICAgIGlmICh0aGlzLmNhbGxlZEJ5Q2xlYW5JbnB1dFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2FsbGVkQnlDbGVhbklucHV0VmFsdWUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICB0aGlzLnVwZGF0ZUZpbGVzKGZpbGVzKTtcclxuXHJcbiAgICB0aGlzLmNsZWFuSW5wdXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlQ2hhbmdlRHJhZ0Ryb3AoZmlsZXMpIHtcclxuICAgIHRoaXMudXBkYXRlRmlsZXMoZmlsZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIG8gYXJxdWl2byBwYXNzYWRvIHBvciBwYXLDom1ldHJvIGRhIGxpc3RhIGRvcyBhcnF1aXZvcyBjb3JyZW50ZXMuXHJcbiAgcmVtb3ZlRmlsZShmaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY3VycmVudEZpbGVzLmluZGV4T2YoZmlsZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTW9kZWwoWy4uLnRoaXMuY3VycmVudEZpbGVzXSk7XHJcbiAgfVxyXG5cclxuICAvKiogTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yICoqYWJyaXIqKiBhIGphbmVsYSBwYXJhIHNlbGXDp8OjbyBkZSBhcnF1aXZvKHMpLiAqL1xyXG4gIHNlbGVjdEZpbGVzKCkge1xyXG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZD8uKCk7XHJcbiAgICB0aGlzLmNhbGxlZEJ5Q2xlYW5JbnB1dFZhbHVlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlucHV0RmlsZS5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZW5kRmVlZGJhY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaXplTm90QWxsb3dlZCA+IDApIHtcclxuICAgICAgY29uc3QgbWluRmlsZVNpemUgPSBmb3JtYXRCeXRlcyh0aGlzLmZpbGVSZXN0cmljdGlvbnMubWluRmlsZVNpemUpO1xyXG4gICAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IGZvcm1hdEJ5dGVzKHRoaXMuZmlsZVJlc3RyaWN0aW9ucy5tYXhGaWxlU2l6ZSk7XHJcbiAgICAgIGNvbnN0IGFyZ3MgPSBbdGhpcy5zaXplTm90QWxsb3dlZCwgbWluRmlsZVNpemUgfHwgJzAnLCBtYXhGaWxlU2l6ZV07XHJcbiAgICAgIHRoaXMuc2V0UGlwZUFyZ3VtZW50cygnaW52YWxpZFNpemUnLCBhcmdzKTtcclxuICAgICAgdGhpcy5zaXplTm90QWxsb3dlZCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uTm90QWxsb3dlZCA+IDApIHtcclxuICAgICAgY29uc3QgYWxsb3dlZEV4dGVuc2lvbnNGb3JtYXR0ZWQgPSB0aGlzLmZpbGVSZXN0cmljdGlvbnMuYWxsb3dlZEV4dGVuc2lvbnMuam9pbignLCAnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBhcmdzID0gW3RoaXMuZXh0ZW5zaW9uTm90QWxsb3dlZCwgYWxsb3dlZEV4dGVuc2lvbnNGb3JtYXR0ZWRdO1xyXG4gICAgICB0aGlzLnNldFBpcGVBcmd1bWVudHMoJ2ludmFsaWRGb3JtYXQnLCBhcmdzKTtcclxuICAgICAgdGhpcy5leHRlbnNpb25Ob3RBbGxvd2VkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5xdWFudGl0eU5vdEFsbG93ZWQgPiAwKSB7XHJcbiAgICAgIGNvbnN0IGFyZ3MgPSBbdGhpcy5xdWFudGl0eU5vdEFsbG93ZWRdO1xyXG4gICAgICB0aGlzLnNldFBpcGVBcmd1bWVudHMoJ2ludmFsaWRBbW91bnQnLCBhcmdzKTtcclxuICAgICAgdGhpcy5xdWFudGl0eU5vdEFsbG93ZWQgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciAqKmVudmlhcioqIG8ocykgYXJxdWl2byhzKSBzZWxlY2lvbmFkbyhzKS4gKi9cclxuICBzZW5kRmlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RmlsZXMgJiYgdGhpcy5jdXJyZW50RmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudXBsb2FkRmlsZXModGhpcy5jdXJyZW50RmlsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGlyZWN0b3J5QXR0cmlidXRlKGNhbkhhbmRsZURpcmVjdG9yeTogYm9vbGVhbikge1xyXG4gICAgaWYgKGNhbkhhbmRsZURpcmVjdG9yeSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RmlsZS5uYXRpdmVFbGVtZW50LCAnd2Via2l0ZGlyZWN0b3J5JywgJ3RydWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRGaWxlLm5hdGl2ZUVsZW1lbnQsICd3ZWJraXRkaXJlY3RvcnknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhc28gbyBjb21wb25lbnRlIGVzdGl2ZXIgbm8gbW9kbyBBdXRvVXBsb2FkLCBvIGFycXVpdm8gdGFtYsOpbSBzZXLDoSByZW1vdmlkbyBkYSBsaXN0YS5cclxuICBzdG9wVXBsb2FkKGZpbGU6IFBvVXBsb2FkRmlsZSkge1xyXG4gICAgdGhpcy51cGxvYWRTZXJ2aWNlLnN0b3BSZXF1ZXN0QnlGaWxlKGZpbGUsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuYXV0b1VwbG9hZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRmlsZShmaWxlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0b3BVcGxvYWRIYW5kbGVyKGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlGbihpbmRleCwgZmlsZTogUG9VcGxvYWRGaWxlKSB7XHJcbiAgICByZXR1cm4gZmlsZS51aWQ7XHJcbiAgfVxyXG5cclxuICAvLyBFbnZpYSBvcyBhcnF1aXZvcyBwYXNzYWRvcyBwb3IgcGFyw6JtZXRybywgZXhjZXRvIG9zIHF1ZSBqw6EgZm9yYW0gZW52aWFkb3MgYW8gc2VydmnDp28uXHJcbiAgdXBsb2FkRmlsZXMoZmlsZXM6IEFycmF5PFBvVXBsb2FkRmlsZT4pIHtcclxuICAgIGNvbnN0IGZpbGVzRmlsdGVyZWQgPSBmaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnN0YXR1cyAhPT0gUG9VcGxvYWRTdGF0dXMuVXBsb2FkZWQpO1xyXG4gICAgdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZChcclxuICAgICAgdGhpcy51cmwsXHJcbiAgICAgIGZpbGVzRmlsdGVyZWQsXHJcbiAgICAgIHRoaXMuaGVhZGVycyxcclxuICAgICAgdGhpcy5vblVwbG9hZCxcclxuICAgICAgKGZpbGUsIHBlcmNlbnQpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vIFVQTE9BRElOR1xyXG4gICAgICAgIHRoaXMudXBsb2FkaW5nSGFuZGxlcihmaWxlLCBwZXJjZW50KTtcclxuICAgICAgfSxcclxuICAgICAgKGZpbGUsIGV2ZW50UmVzcG9uc2UpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vIFNVQ0NFU1NcclxuICAgICAgICB0aGlzLnJlc3BvbnNlSGFuZGxlcihmaWxlLCBQb1VwbG9hZFN0YXR1cy5VcGxvYWRlZCk7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdChldmVudFJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgKGZpbGUsIGV2ZW50RXJyb3IpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgdGhpcy5yZXNwb25zZUhhbmRsZXIoZmlsZSwgUG9VcGxvYWRTdGF0dXMuRXJyb3IpO1xyXG4gICAgICAgIHRoaXMub25FcnJvci5lbWl0KGV2ZW50RXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbklucHV0VmFsdWUoKSB7XHJcbiAgICB0aGlzLmNhbGxlZEJ5Q2xlYW5JbnB1dFZhbHVlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXRGaWxlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIC8vIGZ1bsOnw6NvIGRpc3BhcmFkYSBuYSByZXNwb3N0YSBkbyBzdWNlc3NvIG91IGVycm9yXHJcbiAgcHJpdmF0ZSByZXNwb25zZUhhbmRsZXIoZmlsZTogUG9VcGxvYWRGaWxlLCBzdGF0dXM6IFBvVXBsb2FkU3RhdHVzKSB7XHJcbiAgICBmaWxlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIGZpbGUucGVyY2VudCA9IDEwMDtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvLyBtw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3Igc2V0YXIgb3MgYXJndW1lbnRvcyBkbyBpMThuUGlwZSBkZSBhY29yZG8gY29tIGEgcmVzdHJpw6fDo28uXHJcbiAgcHJpdmF0ZSBzZXRQaXBlQXJndW1lbnRzKGxpdGVyYWxBdHRyaWJ1dGVzOiBzdHJpbmcsIGxpdGVyYWxBcmd1bWVudHM/KSB7XHJcbiAgICBjb25zdCBwaXBlQXJndW1lbnRzID0gdGhpcy5pMThuUGlwZS50cmFuc2Zvcm0odGhpcy5saXRlcmFsc1tsaXRlcmFsQXR0cmlidXRlc10sIGxpdGVyYWxBcmd1bWVudHMpO1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb24uaW5mb3JtYXRpb24ocGlwZUFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBkaXNwYXJhZGEgYW8gcGFyYXIgdW0gZW52aW8gZGUgYXJxdWl2by5cclxuICBwcml2YXRlIHN0b3BVcGxvYWRIYW5kbGVyKGZpbGU6IFBvVXBsb2FkRmlsZSkge1xyXG4gICAgZmlsZS5zdGF0dXMgPSBQb1VwbG9hZFN0YXR1cy5Ob25lO1xyXG4gICAgZmlsZS5wZXJjZW50ID0gMDtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUZpbGVzKGZpbGVzKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWxlcyA9IHRoaXMucGFyc2VGaWxlcyhmaWxlcyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVNb2RlbChbLi4udGhpcy5jdXJyZW50RmlsZXNdKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvVXBsb2FkKSB7XHJcbiAgICAgIHRoaXMudXBsb2FkRmlsZXModGhpcy5jdXJyZW50RmlsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXR1YWxpemEgbyBuZ01vZGVsIHBhcmEgb3MgYXJxdWl2b3MgcGFzc2Fkb3MgcG9yIHBhcsOibWV0cm8uXHJcbiAgcHJpdmF0ZSB1cGRhdGVNb2RlbChmaWxlczogQXJyYXk8UG9VcGxvYWRGaWxlPikge1xyXG4gICAgY29uc3QgbW9kZWxGaWxlczogQXJyYXk8UG9VcGxvYWRGaWxlPiA9IHRoaXMubWFwQ2xlYW5VcGxvYWRGaWxlcyhmaWxlcyk7XHJcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPyB0aGlzLm9uTW9kZWxDaGFuZ2UobW9kZWxGaWxlcykgOiB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdChtb2RlbEZpbGVzKTtcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGRpc3BhcmFkYSBlbnF1YW50byBvIGFycXVpdm8gZXN0w6Egc2VuZG8gZW52aWFkbyBhbyBzZXJ2acOnby5cclxuICBwcml2YXRlIHVwbG9hZGluZ0hhbmRsZXIoZmlsZTogYW55LCBwZXJjZW50OiBudW1iZXIpIHtcclxuICAgIGZpbGUuc3RhdHVzID0gUG9VcGxvYWRTdGF0dXMuVXBsb2FkaW5nO1xyXG4gICAgZmlsZS5wZXJjZW50ID0gcGVyY2VudDtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvLyByZXRvcm5hIG9zIG9iamV0b3MgZG8gYXJyYXkgc2VtIGFzIHByb3ByaWVkYWRlczogcGVyY2VudCBlIGRpc3BsYXlOYW1lXHJcbiAgcHJpdmF0ZSBtYXBDbGVhblVwbG9hZEZpbGVzKGZpbGVzOiBBcnJheTxQb1VwbG9hZEZpbGU+KTogQXJyYXk8UG9VcGxvYWRGaWxlPiB7XHJcbiAgICBjb25zdCBtYXBlZEJ5VXBsb2FkRmlsZSA9IHByb2dyZXNzRmlsZSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgcGVyY2VudCwgZGlzcGxheU5hbWUsIC4uLnVwbG9hZEZpbGUgfSA9IHByb2dyZXNzRmlsZTtcclxuXHJcbiAgICAgIHJldHVybiB1cGxvYWRGaWxlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZmlsZXMubWFwKG1hcGVkQnlVcGxvYWRGaWxlKTtcclxuICB9XHJcbn1cclxuIiwiPHBvLWZpZWxkLWNvbnRhaW5lciBbcC1sYWJlbF09XCJsYWJlbFwiIFtwLWhlbHBdPVwiaGVscFwiIFtwLW9wdGlvbmFsXT1cIiFyZXF1aXJlZCAmJiBvcHRpb25hbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwby11cGxvYWRcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wdXRGaWxlXHJcbiAgICAgIGNsYXNzPVwicG8tdXBsb2FkLWlucHV0XCJcclxuICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICBbYWNjZXB0XT1cImFsbG93ZWRFeHRlbnNpb25zXCJcclxuICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxyXG4gICAgICBbbXVsdGlwbGVdPVwiaXNNdWx0aXBsZVwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIChjaGFuZ2UpPVwib25GaWxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgLz5cclxuXHJcbiAgICA8cG8tdXBsb2FkLWRyYWctZHJvcFxyXG4gICAgICAqbmdJZj1cImRpc3BsYXlEcmFnRHJvcFwiXHJcbiAgICAgIFtwLWRpcmVjdG9yeS1jb21wYXRpYmxlXT1cImNhbkhhbmRsZURpcmVjdG9yeVwiXHJcbiAgICAgIFtwLWRpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxyXG4gICAgICBbcC1kcmFnLWRyb3AtaGVpZ2h0XT1cImRyYWdEcm9wSGVpZ2h0XCJcclxuICAgICAgW3AtbGl0ZXJhbHNdPVwibGl0ZXJhbHNcIlxyXG4gICAgICAocC1maWxlLWNoYW5nZSk9XCJvbkZpbGVDaGFuZ2VEcmFnRHJvcCgkZXZlbnQpXCJcclxuICAgICAgKHAtc2VsZWN0LWZpbGVzKT1cInNlbGVjdEZpbGVzKClcIlxyXG4gICAgPlxyXG4gICAgPC9wby11cGxvYWQtZHJhZy1kcm9wPlxyXG5cclxuICAgIDxwby1idXR0b25cclxuICAgICAgKm5nSWY9XCIhaGlkZVNlbGVjdEJ1dHRvbiAmJiAhZGlzcGxheURyYWdEcm9wXCJcclxuICAgICAgI3VwbG9hZEJ1dHRvblxyXG4gICAgICBjbGFzcz1cInBvLXVwbG9hZC1idXR0b25cIlxyXG4gICAgICBmb3I9XCJmaWxlXCJcclxuICAgICAgW3AtZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXHJcbiAgICAgIFtwLWxhYmVsXT1cInNlbGVjdEZpbGVCdXR0b25MYWJlbFwiXHJcbiAgICAgIChwLWNsaWNrKT1cInNlbGVjdEZpbGVzKClcIlxyXG4gICAgPlxyXG4gICAgPC9wby1idXR0b24+XHJcblxyXG4gICAgPHBvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9uc1xyXG4gICAgICAqbmdJZj1cImZpbGVSZXN0cmljdGlvbnMgJiYgIWhpZGVSZXN0cmljdGlvbnNJbmZvXCJcclxuICAgICAgY2xhc3M9XCJwby11cGxvYWQtZmlsZS1yZXN0cmljdGlvbnNcIlxyXG4gICAgICBbbmdDbGFzc109XCJ7ICdwby11cGxvYWQtZmlsZS1yZXN0cmljdGlvbnMtZHJhZy1kcm9wJzogZGlzcGxheURyYWdEcm9wIH1cIlxyXG4gICAgICBbcC1hbGxvd2VkLWV4dGVuc2lvbnNdPVwiZmlsZVJlc3RyaWN0aW9ucz8uYWxsb3dlZEV4dGVuc2lvbnNcIlxyXG4gICAgICBbcC1tYXgtZmlsZXNdPVwibWF4RmlsZXNcIlxyXG4gICAgICBbcC1tYXgtZmlsZS1zaXplXT1cImZpbGVSZXN0cmljdGlvbnM/Lm1heEZpbGVTaXplXCJcclxuICAgICAgW3AtbWluLWZpbGUtc2l6ZV09XCJmaWxlUmVzdHJpY3Rpb25zPy5taW5GaWxlU2l6ZVwiXHJcbiAgICA+XHJcbiAgICA8L3BvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9ucz5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudEZpbGVzICYmIGN1cnJlbnRGaWxlcy5sZW5ndGhcIiBjbGFzcz1cInBvLXVwbG9hZC1wcm9ncmVzcy1jb250YWluZXJcIj5cclxuICAgICAgPHBvLWNvbnRhaW5lclxyXG4gICAgICAgIHAtbm8tc2hhZG93XHJcbiAgICAgICAgW3AtaGVpZ2h0XT1cImhhc01vcmVUaGFuRm91ckl0ZW1zID8gMjgwIDogJ2F1dG8nXCJcclxuICAgICAgICBbcC1uby1ib3JkZXJdPVwiIWhhc01vcmVUaGFuRm91ckl0ZW1zXCJcclxuICAgICAgICBbcC1uby1wYWRkaW5nXT1cIiFoYXNNb3JlVGhhbkZvdXJJdGVtc1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ3BvLXVwbG9hZC1wcm9ncmVzcy1jb250YWluZXItYXJlYSBwby1wdC0yIHBvLXBsLTEnOiBoYXNNb3JlVGhhbkZvdXJJdGVtcyB9XCI+XHJcbiAgICAgICAgICA8cG8tcHJvZ3Jlc3NcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpbGUgb2YgY3VycmVudEZpbGVzOyB0cmFja0J5OiB0cmFja0J5Rm5cIlxyXG4gICAgICAgICAgICBbcC1pbmZvXT1cImluZm9CeVVwbG9hZFN0YXR1c1tmaWxlLnN0YXR1c10/LnRleHQoZmlsZS5wZXJjZW50KVwiXHJcbiAgICAgICAgICAgIFtwLWluZm8taWNvbl09XCJpbmZvQnlVcGxvYWRTdGF0dXNbZmlsZS5zdGF0dXNdPy5pY29uXCJcclxuICAgICAgICAgICAgW3Atc3RhdHVzXT1cInByb2dyZXNzU3RhdHVzQnlGaWxlU3RhdHVzW2ZpbGUuc3RhdHVzXVwiXHJcbiAgICAgICAgICAgIFtwLXRleHRdPVwiZmlsZS5kaXNwbGF5TmFtZVwiXHJcbiAgICAgICAgICAgIFtwLXZhbHVlXT1cImZpbGUucGVyY2VudFwiXHJcbiAgICAgICAgICAgIChwLWNhbmNlbCk9XCJjYW5jZWwoZmlsZSlcIlxyXG4gICAgICAgICAgICAocC1yZXRyeSk9XCJ1cGxvYWRGaWxlcyhbZmlsZV0pXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcG8tcHJvZ3Jlc3M+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvcG8tY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHBvLWJ1dHRvblxyXG4gICAgICAqbmdJZj1cImRpc3BsYXlTZW5kQnV0dG9uXCJcclxuICAgICAgY2xhc3M9XCJwby11cGxvYWQtc2VuZC1idXR0b25cIlxyXG4gICAgICBbY2xhc3MucG8tbXQtM109XCJoYXNNb3JlVGhhbkZvdXJJdGVtc1wiXHJcbiAgICAgIHAta2luZD1cInByaW1hcnlcIlxyXG4gICAgICBbcC1kaXNhYmxlZF09XCJoYXNBbnlGaWxlVXBsb2FkaW5nKGN1cnJlbnRGaWxlcylcIlxyXG4gICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy5zdGFydFNlbmRpbmdcIlxyXG4gICAgICAocC1jbGljayk9XCJ1cGxvYWRGaWxlcyhjdXJyZW50RmlsZXMpXCJcclxuICAgID5cclxuICAgIDwvcG8tYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3BvLWZpZWxkLWNvbnRhaW5lcj5cclxuIl19