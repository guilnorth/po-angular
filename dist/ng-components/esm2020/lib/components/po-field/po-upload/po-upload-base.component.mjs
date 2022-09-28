import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, isEquals, isIE, isMobile } from '../../../utils/util';
import { requiredFailed } from '../validators';
import { PoUploadFile } from './po-upload-file';
import { PoUploadStatus } from './po-upload-status.enum';
import { InputBoolean } from '../../../decorators';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import * as i0 from "@angular/core";
import * as i1 from "./po-upload.service";
import * as i2 from "../../../services/po-language/po-language.service";
export const poUploadLiteralsDefault = {
    en: {
        files: 'files',
        folders: 'folders',
        selectFile: 'Select file',
        selectFiles: 'Select files',
        selectFolder: 'Select folder',
        startSending: 'Start sending',
        dragFilesHere: 'Drag files here',
        dragFoldersHere: 'Drag folders here',
        selectFilesOnComputer: 'or select files on your computer',
        selectFolderOnComputer: 'or select folder on your computer',
        dropFilesHere: 'Drop files here',
        dropFoldersHere: 'Drop folders here',
        invalidDropArea: '{0} were not dropped in the correct area',
        invalidFileType: 'Failed to load {0} file(s) as it is not the allowed file type.',
        invalidAmount: 'Failed to load {0} file(s), as it exceeds the limit amount of files.',
        invalidFormat: 'Failed to load {0} file(s), as it does not match the format(s): {1}.',
        invalidSize: 'Failed to load {0} files(s), as it is not the allowed size: from {1} to {2}.',
        numberOfFilesAllowed: '{0} file(s) allowed',
        allowedFormats: 'Accepted file formats: {0}.',
        allowedFileSizeRange: 'Size limit per file: from {0} to {1}',
        maxFileSizeAllowed: 'Size limit per file: {0} maximum',
        minFileSizeAllowed: 'Size limit per file: {0} minimum',
        errorOccurred: 'An error has occurred',
        sentWithSuccess: 'Sent with success'
    },
    es: {
        files: 'archivos',
        folders: 'carpetas',
        selectFile: 'Seleccionar archivo',
        selectFiles: 'Seleccionar archivos',
        selectFolder: 'Seleccionar carpeta',
        startSending: 'Iniciar carga',
        dragFilesHere: 'Arrastra los archivos aquí',
        dragFoldersHere: 'Arrastra las carpetas aquí',
        selectFilesOnComputer: 'o selecciona los archivos en tu computadora',
        selectFolderOnComputer: 'o selecciona la carpeta en tu computadora',
        dropFilesHere: 'Deja los archivos aquí',
        dropFoldersHere: 'Deja las carpetas aquí',
        invalidDropArea: 'Los {0} no se insertaron en la ubicación correcta',
        invalidFileType: 'Error al cargar {0} archivo (s) ya que no es el tipo de archivo permitido',
        invalidAmount: 'Error al cargar {0} archivo (s) ya que excede la cantidad limite de archivos.',
        invalidFormat: 'Error al cargar {0} archivo (s) ya que no coincide con el formato (s): {1}.',
        invalidSize: 'Error al cargar {0} archivo (s) ya que no cumple con el tamaño permitido: desde {1} hasta {2}.',
        numberOfFilesAllowed: '{0} archivo(s) permitido(s)',
        allowedFormats: 'Formatos aceptados: {0}.',
        allowedFileSizeRange: 'Limite de tamaño de archivo: desde {0} hasta {1}',
        maxFileSizeAllowed: 'Limite de tamaño de archivo: hasta {0}',
        minFileSizeAllowed: 'Limite de tamaño de archivo: minimo {0}',
        errorOccurred: 'Ocurrio un error',
        sentWithSuccess: 'Enviado con éxito'
    },
    pt: {
        files: 'arquivos',
        folders: 'diretórios',
        selectFile: 'Selecionar arquivo',
        selectFiles: 'Selecionar arquivos',
        selectFolder: 'Selecionar pasta',
        startSending: 'Iniciar envio',
        dragFilesHere: 'Arraste os arquivos aqui',
        dragFoldersHere: 'Arraste as pastas aqui',
        selectFilesOnComputer: 'ou selecione os arquivos no computador',
        selectFolderOnComputer: 'ou selecione a pasta no computador',
        dropFilesHere: 'Solte os arquivos aqui',
        dropFoldersHere: 'Solte as pastas aqui',
        invalidDropArea: 'Os {0} não foram inseridos no local correto',
        invalidFileType: 'Falha ao carregar {0} arquivo (s), pois não é o tipo de arquivo permitido',
        invalidAmount: 'Falha ao carregar {0} arquivo(s), pois excede(m) a quantidade limite de arquivos.',
        invalidFormat: 'Falha ao carregar {0} arquivo(s), pois não corresponde(m) ao(s) formato(s): {1}.',
        invalidSize: 'Falha ao carregar {0} arquivo(s), pois não atende ao tamanho permitido: {1} até {2}.',
        numberOfFilesAllowed: 'Quantidade máxima: {0} arquivo(s)',
        allowedFormats: 'Formatos adotados: {0}.',
        allowedFileSizeRange: 'Limite de tamanho por arquivo: de {0} até {1}',
        maxFileSizeAllowed: 'Limite de tamanho por arquivo: até {0}',
        minFileSizeAllowed: 'Limite de tamanho por arquivo: no mínimo {0}',
        errorOccurred: 'Ocorreu um erro',
        sentWithSuccess: 'Enviado com sucesso'
    },
    ru: {
        files: 'файлы',
        folders: 'папки с файлами',
        selectFile: 'Выберите файл',
        selectFiles: 'Выберите файлы',
        selectFolder: 'Выберите папку с файлами',
        startSending: 'Начать загрузку',
        dragFilesHere: 'Перетащите файлы сюда',
        dragFoldersHere: 'Перетащите сюда папки',
        selectFilesOnComputer: 'или выберите файлы на компьютере',
        selectFolderOnComputer: 'или выберите папку на вашем компьютере',
        dropFilesHere: 'Оставьте файлы здесь',
        dropFoldersHere: 'Перетащите сюда папки',
        invalidDropArea: '{0} не были вставлены в правильном месте.',
        invalidFileType: 'Не удалось загрузить файлы {0}, так как это неверный тип файла',
        invalidAmount: 'Não foi possível carregar os arquivos {0} porque eles excederam o limite de arquivos.',
        invalidFormat: 'Не удалось загрузить файлы {0}, так как они не соответствуют формату (ам): {1}.',
        invalidSize: 'Не удалось загрузить файлы {0}, поскольку они не соответствуют разрешенному размеру: от {1} до {2}.',
        numberOfFilesAllowed: 'Максимальное количество: {0} файлов',
        allowedFormats: 'Форматы приняты: {0}.',
        allowedFileSizeRange: 'Ограничение размера файла: от {0} до {1}',
        maxFileSizeAllowed: 'Ограничение размера файла: до {0}',
        minFileSizeAllowed: 'Ограничение размера файла: не менее {0}',
        errorOccurred: 'Произошла ошибка.',
        sentWithSuccess: 'Успешно отправлено'
    }
};
const poUploadFormFieldDefault = 'files';
const poUploadMaxFileSize = 31457280; // 30MB
const poUploadMinFileSize = 0;
/**
 * @description
 *
 * O componente `po-upload` permite que o usuário envie arquivo(s) ao servidor e acompanhe o progresso.
 * Este componente também possibilita algumas configurações como:
 *  – Envio de diretórios, onde ele acessa o diretório selecionado assim como seus sub-diretórios;
 *  - Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.
 *  - Auto envio, onde o arquivo é enviado imediatamente após a seleção do usuário, não necessitando que o usuário
 * clique em enviar.
 *  - Restrições de formatos de arquivo e tamanho.
 *  - Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.
 *  - Função de erro que será disparada quando houver erro no envio dos arquivos.
 *  - Permite habilitar uma área onde os arquivos podem ser arrastados.
 */
export class PoUploadBaseComponent {
    constructor(uploadService, languageService) {
        this.uploadService = uploadService;
        /**
         * @optional
         *
         * @description
         *
         * Aplica foco no elemento ao ser iniciado.
         *
         * > Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.
         *
         * @default `false`
         */
        this.autoFocus = false;
        /** Define o valor do atributo `name` do componente. */
        this.name = 'file';
        /**
         * @optional
         *
         * @description
         *
         * Define se o envio do arquivo será automático ao selecionar o mesmo.
         *
         * @default `false`
         */
        this.autoUpload = false;
        /**
         * @optional
         *
         * @description
         *
         * Função que será executada no momento de realizar o envio do arquivo,
         * onde será possível adicionar informações ao parâmetro que será enviado na requisição.
         * É passado por parâmetro um objeto com o arquivo e a propiedade data nesta propriedade pode ser informado algum dado,
         * que será enviado em conjunto com o arquivo na requisição, por exemplo:
         *
         * ```
         *   event.data = {id: 'id do usuario'};
         * ```
         */
        this.onUpload = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento será disparado quando ocorrer algum erro no envio do arquivo.
         * > Por parâmetro será passado o objeto do retorno que é do tipo `HttpErrorResponse`.
         */
        this.onError = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento será disparado quando o envio do arquivo for realizado com sucesso.
         * > Por parâmetro será passado o objeto do retorno que é do tipo `HttpResponse`.
         */
        this.onSuccess = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da *tag* `form`.
         *
         * Na versão 12.2.0 do Angular a verificação `strictTemplates` vem true como default. Portanto, para utilizar
         * two-way binding no componente deve se utilizar da seguinte forma:
         *
         * ```
         * <po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
         * ```
         *
         */
        this.ngModelChange = new EventEmitter();
        this.extensionNotAllowed = 0;
        this.quantityNotAllowed = 0;
        this.sizeNotAllowed = 0;
        this.onModelTouched = null;
        this._dragDrop = false;
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Permite a seleção de diretórios contendo um ou mais arquivos para envio.
     *
     * > A habilitação desta propriedade se restringe apenas à seleção de diretórios.
     *
     * > Definição não suportada pelo browser **Internet Explorer**, todavia será possível a seleção de arquivos padrão.
     *
     * @default `false`
     */
    set directory(value) {
        this._directory = convertToBoolean(value);
        this.canHandleDirectory = this._directory && !isIE() && !isMobile();
        this.setDirectoryAttribute(this.canHandleDirectory);
    }
    get directory() {
        return this._directory;
    }
    /**
     * @optional
     *
     * @description
     *
     * Exibe a área onde é possível arrastar e selecionar os arquivos. Quando estiver definida, omite o botão para seleção de arquivos
     * automaticamente.
     *
     * > Recomendamos utilizar apenas um `po-upload` com esta funcionalidade por tela.
     *
     * @default `false`
     */
    set dragDrop(value) {
        this._dragDrop = convertToBoolean(value);
    }
    get dragDrop() {
        return this._dragDrop;
    }
    /**
     * @optional
     *
     * @description
     *
     * Oculta visualmente as informações de restrições para o upload.
     *
     * @default `false`
     */
    set hideRestrictionsInfo(value) {
        this._hideRestrictionsInfo = convertToBoolean(value);
    }
    get hideRestrictionsInfo() {
        return this._hideRestrictionsInfo;
    }
    /**
     * @optional
     *
     * @description
     *
     * Omite o botão de seleção de arquivos.
     *
     * > Caso o valor definido seja `true`, caberá ao desenvolvedor a responsabilidade
     * pela chamada do método `selectFiles()` para seleção de arquivos.
     *
     * @default `false`
     */
    set hideSelectButton(value) {
        this._hideSelectButton = convertToBoolean(value);
    }
    get hideSelectButton() {
        return this._hideSelectButton;
    }
    /**
     * @optional
     *
     * @description
     *
     * Omite o botão de envio de arquivos.
     *
     * > Caso o valor definido seja `true`, caberá ao desenvolvedor a responsabilidade
     * pela chamada do método `sendFiles()` para envio do(s) arquivo(s) selecionado(s).
     *
     * @default `false`
     */
    set hideSendButton(value) {
        this._hideSendButton = convertToBoolean(value);
    }
    get hideSendButton() {
        return this._hideSendButton;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-upload`.
     *
     * Existem duas maneiras de customizar o componente:
     *
     * - passando um objeto implementando a interface `PoUploadLiterals` com todas as literais disponíveis;
     * - passando apenas as literais que deseja customizar:
     * ```
     *  const customLiterals: PoUploadLiterals = {
     *    folders: 'Pastas',
     *    selectFile: 'Buscar arquivo',
     *    startSending: 'Enviar'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente:
     *
     * ```
     * <po-upload
     *   [p-literals]="customLiterals">
     * </po-upload>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do *browser* (pt, en, es, ru).
     */
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poUploadLiteralsDefault[poLocaleDefault],
                ...poUploadLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poUploadLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poUploadLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto que segue a definição da interface `PoUploadFileRestrictions`,
     * que possibilita definir tamanho máximo/mínimo e extensão dos arquivos permitidos.
     */
    set fileRestrictions(restrictions) {
        this._fileRestrictions = this.initRestrictions(restrictions);
        this.setAllowedExtensions(restrictions);
    }
    get fileRestrictions() {
        return this._fileRestrictions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Nome do campo de formulário que será enviado para o serviço informado na propriedade `p-url`.
     *
     * @default `files`
     */
    set formField(value) {
        this._formField = value && typeof value === 'string' ? value : poUploadFormFieldDefault;
        this.getUploadService().formField = this.formField;
    }
    get formField() {
        return this._formField;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será desabilitado.
     */
    set disabled(value) {
        this._disabled = convertToBoolean(value);
        this.validateModel(this.currentFiles);
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define se pode selecionar mais de um arquivo.
     *
     * > Se utilizada a `p-directory`, habilita-se automaticamente esta propriedade.
     */
    set isMultiple(value) {
        this._isMultiple = convertToBoolean(value);
    }
    get isMultiple() {
        return this.canHandleDirectory ? true : this._isMultiple;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel(this.currentFiles);
    }
    get required() {
        return this._required;
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    validate(abstractControl) {
        if (requiredFailed(this.required, this.disabled, abstractControl.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
    }
    writeValue(model) {
        if (model) {
            if (!isEquals(this.currentFiles, model)) {
                this.currentFiles = this.parseFiles(model);
            }
        }
        else {
            this.currentFiles = undefined;
        }
    }
    isExceededFileLimit(currentFilesLength) {
        return (this.isMultiple &&
            this.fileRestrictions &&
            this.fileRestrictions.maxFiles > 0 &&
            this.fileRestrictions.maxFiles <= currentFilesLength);
    }
    // Faz o parse dos arquivos selecionados para arquivos do formato PoUploadFile e atualiza os arquivos correntes.
    parseFiles(files) {
        let poUploadFiles = this.currentFiles || [];
        const filesLength = files.length;
        for (let i = 0; i < filesLength; i++) {
            if (this.isExceededFileLimit(poUploadFiles.length)) {
                this.quantityNotAllowed = filesLength - this.fileRestrictions.maxFiles;
                break;
            }
            const file = new PoUploadFile(files[i]);
            if (this.checkRestrictions(file)) {
                poUploadFiles = this.insertFileInFiles(file, poUploadFiles);
            }
        }
        this.sendFeedback();
        return poUploadFiles;
    }
    validateModel(model) {
        if (this.validatorChange) {
            this.validatorChange(model);
        }
    }
    // Verifica se o arquivo está de acordo com as restrições.
    checkRestrictions(file) {
        const restrictions = this.fileRestrictions;
        if (restrictions) {
            const allowedExtensions = restrictions.allowedExtensions;
            const minFileSize = restrictions.minFileSize;
            const maxFileSize = restrictions.maxFileSize;
            const isAccept = allowedExtensions ? this.isAllowedExtension(file.extension, allowedExtensions) : true;
            const isAcceptSize = file.size >= minFileSize && file.size <= maxFileSize;
            if (!isAcceptSize) {
                this.sizeNotAllowed = this.sizeNotAllowed + 1;
            }
            return isAccept && isAcceptSize;
        }
        return true;
    }
    existsFileSameName(file, files) {
        return files.some(currentFile => file.name === currentFile.name);
    }
    getUploadService() {
        return this.uploadService;
    }
    insertFileInFiles(newFile, files) {
        if (this.existsFileSameName(newFile, files)) {
            return this.updateExistsFileInFiles(newFile, files);
        }
        if (this.isMultiple) {
            files.push(newFile);
        }
        else {
            files.splice(0, files.length, newFile);
        }
        return files;
    }
    isAllowedExtension(extension, allowedExtensions = []) {
        const isAllowed = allowedExtensions.some(ext => ext.toLowerCase() === extension);
        if (!isAllowed) {
            this.extensionNotAllowed = this.extensionNotAllowed + 1;
        }
        return isAllowed;
    }
    setAllowedExtensions(restrictions = {}) {
        const _allowedExtensions = restrictions.allowedExtensions || [];
        this.allowedExtensions = _allowedExtensions.join(',');
    }
    initRestrictions(restrictions) {
        if (!restrictions) {
            return;
        }
        const minFileSize = restrictions.minFileSize || poUploadMinFileSize;
        const maxFileSize = restrictions.maxFileSize || poUploadMaxFileSize;
        return {
            ...restrictions,
            maxFileSize: maxFileSize,
            minFileSize: minFileSize
        };
    }
    updateExistsFileInFiles(newFile, files) {
        const fileIndex = files.findIndex(currentFile => newFile.name === currentFile.name && currentFile.status !== PoUploadStatus.Uploaded);
        if (fileIndex !== -1) {
            files.splice(fileIndex, 1, newFile);
        }
        return files;
    }
}
PoUploadBaseComponent.ɵfac = function PoUploadBaseComponent_Factory(t) { return new (t || PoUploadBaseComponent)(i0.ɵɵdirectiveInject(i1.PoUploadService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoUploadBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoUploadBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], dragDropHeight: ["p-drag-drop-height", "dragDropHeight"], label: ["p-label", "label"], help: ["p-help", "help"], url: ["p-url", "url"], name: "name", autoUpload: ["p-auto-upload", "autoUpload"], optional: ["p-optional", "optional"], headers: ["p-headers", "headers"], directory: ["p-directory", "directory"], dragDrop: ["p-drag-drop", "dragDrop"], hideRestrictionsInfo: ["p-hide-restrictions-info", "hideRestrictionsInfo"], hideSelectButton: ["p-hide-select-button", "hideSelectButton"], hideSendButton: ["p-hide-send-button", "hideSendButton"], literals: ["p-literals", "literals"], fileRestrictions: ["p-restrictions", "fileRestrictions"], formField: ["p-form-field", "formField"], disabled: ["p-disabled", "disabled"], isMultiple: ["p-multiple", "isMultiple"], required: ["p-required", "required"] }, outputs: { onUpload: "p-upload", onError: "p-error", onSuccess: "p-success", ngModelChange: "ngModelChange" } });
__decorate([
    InputBoolean()
], PoUploadBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoUploadService }, { type: i2.PoLanguageService }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], dragDropHeight: [{
            type: Input,
            args: ['p-drag-drop-height']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], url: [{
            type: Input,
            args: ['p-url']
        }], name: [{
            type: Input,
            args: ['name']
        }], autoUpload: [{
            type: Input,
            args: ['p-auto-upload']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], headers: [{
            type: Input,
            args: ['p-headers']
        }], onUpload: [{
            type: Output,
            args: ['p-upload']
        }], onError: [{
            type: Output,
            args: ['p-error']
        }], onSuccess: [{
            type: Output,
            args: ['p-success']
        }], ngModelChange: [{
            type: Output,
            args: ['ngModelChange']
        }], directory: [{
            type: Input,
            args: ['p-directory']
        }], dragDrop: [{
            type: Input,
            args: ['p-drag-drop']
        }], hideRestrictionsInfo: [{
            type: Input,
            args: ['p-hide-restrictions-info']
        }], hideSelectButton: [{
            type: Input,
            args: ['p-hide-select-button']
        }], hideSendButton: [{
            type: Input,
            args: ['p-hide-send-button']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], fileRestrictions: [{
            type: Input,
            args: ['p-restrictions']
        }], formField: [{
            type: Input,
            args: ['p-form-field']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], isMultiple: [{
            type: Input,
            args: ['p-multiple']
        }], required: [{
            type: Input,
            args: ['p-required']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXVwbG9hZC9wby11cGxvYWQtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFFckYsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUc7SUFDckMsRUFBRSxFQUFvQjtRQUNwQixLQUFLLEVBQUUsT0FBTztRQUNkLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFlBQVksRUFBRSxlQUFlO1FBQzdCLFlBQVksRUFBRSxlQUFlO1FBQzdCLGFBQWEsRUFBRSxpQkFBaUI7UUFDaEMsZUFBZSxFQUFFLG1CQUFtQjtRQUNwQyxxQkFBcUIsRUFBRSxrQ0FBa0M7UUFDekQsc0JBQXNCLEVBQUUsbUNBQW1DO1FBQzNELGFBQWEsRUFBRSxpQkFBaUI7UUFDaEMsZUFBZSxFQUFFLG1CQUFtQjtRQUNwQyxlQUFlLEVBQUUsMENB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Y0FBYztZQWlCSSxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFtQk0sVUFBVTtrQkFBbEMsS0FBSzttQkFBQyxZQUFZO1lBaUJNLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4sIGlzRXF1YWxzLCBpc0lFLCBpc01vYmlsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9VcGxvYWRGaWxlIH0gZnJvbSAnLi9wby11cGxvYWQtZmlsZSc7XHJcbmltcG9ydCB7IFBvVXBsb2FkRmlsZVJlc3RyaWN0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby11cGxvYWQtZmlsZS1yZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1VwbG9hZExpdGVyYWxzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXVwbG9hZC1saXRlcmFscy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1VwbG9hZFNlcnZpY2UgfSBmcm9tICcuL3BvLXVwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9VcGxvYWRTdGF0dXMgfSBmcm9tICcuL3BvLXVwbG9hZC1zdGF0dXMuZW51bSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9VcGxvYWRMaXRlcmFsc0RlZmF1bHQgPSB7XHJcbiAgZW46IDxQb1VwbG9hZExpdGVyYWxzPntcclxuICAgIGZpbGVzOiAnZmlsZXMnLFxyXG4gICAgZm9sZGVyczogJ2ZvbGRlcnMnLFxyXG4gICAgc2VsZWN0RmlsZTogJ1NlbGVjdCBmaWxlJyxcclxuICAgIHNlbGVjdEZpbGVzOiAnU2VsZWN0IGZpbGVzJyxcclxuICAgIHNlbGVjdEZvbGRlcjogJ1NlbGVjdCBmb2xkZXInLFxyXG4gICAgc3RhcnRTZW5kaW5nOiAnU3RhcnQgc2VuZGluZycsXHJcbiAgICBkcmFnRmlsZXNIZXJlOiAnRHJhZyBmaWxlcyBoZXJlJyxcclxuICAgIGRyYWdGb2xkZXJzSGVyZTogJ0RyYWcgZm9sZGVycyBoZXJlJyxcclxuICAgIHNlbGVjdEZpbGVzT25Db21wdXRlcjogJ29yIHNlbGVjdCBmaWxlcyBvbiB5b3VyIGNvbXB1dGVyJyxcclxuICAgIHNlbGVjdEZvbGRlck9uQ29tcHV0ZXI6ICdvciBzZWxlY3QgZm9sZGVyIG9uIHlvdXIgY29tcHV0ZXInLFxyXG4gICAgZHJvcEZpbGVzSGVyZTogJ0Ryb3AgZmlsZXMgaGVyZScsXHJcbiAgICBkcm9wRm9sZGVyc0hlcmU6ICdEcm9wIGZvbGRlcnMgaGVyZScsXHJcbiAgICBpbnZhbGlkRHJvcEFyZWE6ICd7MH0gd2VyZSBub3QgZHJvcHBlZCBpbiB0aGUgY29ycmVjdCBhcmVhJyxcclxuICAgIGludmFsaWRGaWxlVHlwZTogJ0ZhaWxlZCB0byBsb2FkIHswfSBmaWxlKHMpIGFzIGl0IGlzIG5vdCB0aGUgYWxsb3dlZCBmaWxlIHR5cGUuJyxcclxuICAgIGludmFsaWRBbW91bnQ6ICdGYWlsZWQgdG8gbG9hZCB7MH0gZmlsZShzKSwgYXMgaXQgZXhjZWVkcyB0aGUgbGltaXQgYW1vdW50IG9mIGZpbGVzLicsXHJcbiAgICBpbnZhbGlkRm9ybWF0OiAnRmFpbGVkIHRvIGxvYWQgezB9IGZpbGUocyksIGFzIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBmb3JtYXQocyk6IHsxfS4nLFxyXG4gICAgaW52YWxpZFNpemU6ICdGYWlsZWQgdG8gbG9hZCB7MH0gZmlsZXMocyksIGFzIGl0IGlzIG5vdCB0aGUgYWxsb3dlZCBzaXplOiBmcm9tIHsxfSB0byB7Mn0uJyxcclxuICAgIG51bWJlck9mRmlsZXNBbGxvd2VkOiAnezB9IGZpbGUocykgYWxsb3dlZCcsXHJcbiAgICBhbGxvd2VkRm9ybWF0czogJ0FjY2VwdGVkIGZpbGUgZm9ybWF0czogezB9LicsXHJcbiAgICBhbGxvd2VkRmlsZVNpemVSYW5nZTogJ1NpemUgbGltaXQgcGVyIGZpbGU6IGZyb20gezB9IHRvIHsxfScsXHJcbiAgICBtYXhGaWxlU2l6ZUFsbG93ZWQ6ICdTaXplIGxpbWl0IHBlciBmaWxlOiB7MH0gbWF4aW11bScsXHJcbiAgICBtaW5GaWxlU2l6ZUFsbG93ZWQ6ICdTaXplIGxpbWl0IHBlciBmaWxlOiB7MH0gbWluaW11bScsXHJcbiAgICBlcnJvck9jY3VycmVkOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkJyxcclxuICAgIHNlbnRXaXRoU3VjY2VzczogJ1NlbnQgd2l0aCBzdWNjZXNzJ1xyXG4gIH0sXHJcbiAgZXM6IDxQb1VwbG9hZExpdGVyYWxzPntcclxuICAgIGZpbGVzOiAnYXJjaGl2b3MnLFxyXG4gICAgZm9sZGVyczogJ2NhcnBldGFzJyxcclxuICAgIHNlbGVjdEZpbGU6ICdTZWxlY2Npb25hciBhcmNoaXZvJyxcclxuICAgIHNlbGVjdEZpbGVzOiAnU2VsZWNjaW9uYXIgYXJjaGl2b3MnLFxyXG4gICAgc2VsZWN0Rm9sZGVyOiAnU2VsZWNjaW9uYXIgY2FycGV0YScsXHJcbiAgICBzdGFydFNlbmRpbmc6ICdJbmljaWFyIGNhcmdhJyxcclxuICAgIGRyYWdGaWxlc0hlcmU6ICdBcnJhc3RyYSBsb3MgYXJjaGl2b3MgYXF1w60nLFxyXG4gICAgZHJhZ0ZvbGRlcnNIZXJlOiAnQXJyYXN0cmEgbGFzIGNhcnBldGFzIGFxdcOtJyxcclxuICAgIHNlbGVjdEZpbGVzT25Db21wdXRlcjogJ28gc2VsZWNjaW9uYSBsb3MgYXJjaGl2b3MgZW4gdHUgY29tcHV0YWRvcmEnLFxyXG4gICAgc2VsZWN0Rm9sZGVyT25Db21wdXRlcjogJ28gc2VsZWNjaW9uYSBsYSBjYXJwZXRhIGVuIHR1IGNvbXB1dGFkb3JhJyxcclxuICAgIGRyb3BGaWxlc0hlcmU6ICdEZWphIGxvcyBhcmNoaXZvcyBhcXXDrScsXHJcbiAgICBkcm9wRm9sZGVyc0hlcmU6ICdEZWphIGxhcyBjYXJwZXRhcyBhcXXDrScsXHJcbiAgICBpbnZhbGlkRHJvcEFyZWE6ICdMb3MgezB9IG5vIHNlIGluc2VydGFyb24gZW4gbGEgdWJpY2FjacOzbiBjb3JyZWN0YScsXHJcbiAgICBpbnZhbGlkRmlsZVR5cGU6ICdFcnJvciBhbCBjYXJnYXIgezB9IGFyY2hpdm8gKHMpIHlhIHF1ZSBubyBlcyBlbCB0aXBvIGRlIGFyY2hpdm8gcGVybWl0aWRvJyxcclxuICAgIGludmFsaWRBbW91bnQ6ICdFcnJvciBhbCBjYXJnYXIgezB9IGFyY2hpdm8gKHMpIHlhIHF1ZSBleGNlZGUgbGEgY2FudGlkYWQgbGltaXRlIGRlIGFyY2hpdm9zLicsXHJcbiAgICBpbnZhbGlkRm9ybWF0OiAnRXJyb3IgYWwgY2FyZ2FyIHswfSBhcmNoaXZvIChzKSB5YSBxdWUgbm8gY29pbmNpZGUgY29uIGVsIGZvcm1hdG8gKHMpOiB7MX0uJyxcclxuICAgIGludmFsaWRTaXplOiAnRXJyb3IgYWwgY2FyZ2FyIHswfSBhcmNoaXZvIChzKSB5YSBxdWUgbm8gY3VtcGxlIGNvbiBlbCB0YW1hw7FvIHBlcm1pdGlkbzogZGVzZGUgezF9IGhhc3RhIHsyfS4nLFxyXG4gICAgbnVtYmVyT2ZGaWxlc0FsbG93ZWQ6ICd7MH0gYXJjaGl2byhzKSBwZXJtaXRpZG8ocyknLFxyXG4gICAgYWxsb3dlZEZvcm1hdHM6ICdGb3JtYXRvcyBhY2VwdGFkb3M6IHswfS4nLFxyXG4gICAgYWxsb3dlZEZpbGVTaXplUmFuZ2U6ICdMaW1pdGUgZGUgdGFtYcOxbyBkZSBhcmNoaXZvOiBkZXNkZSB7MH0gaGFzdGEgezF9JyxcclxuICAgIG1heEZpbGVTaXplQWxsb3dlZDogJ0xpbWl0ZSBkZSB0YW1hw7FvIGRlIGFyY2hpdm86IGhhc3RhIHswfScsXHJcbiAgICBtaW5GaWxlU2l6ZUFsbG93ZWQ6ICdMaW1pdGUgZGUgdGFtYcOxbyBkZSBhcmNoaXZvOiBtaW5pbW8gezB9JyxcclxuICAgIGVycm9yT2NjdXJyZWQ6ICdPY3VycmlvIHVuIGVycm9yJyxcclxuICAgIHNlbnRXaXRoU3VjY2VzczogJ0VudmlhZG8gY29uIMOpeGl0bydcclxuICB9LFxyXG4gIHB0OiA8UG9VcGxvYWRMaXRlcmFscz57XHJcbiAgICBmaWxlczogJ2FycXVpdm9zJyxcclxuICAgIGZvbGRlcnM6ICdkaXJldMOzcmlvcycsXHJcbiAgICBzZWxlY3RGaWxlOiAnU2VsZWNpb25hciBhcnF1aXZvJyxcclxuICAgIHNlbGVjdEZpbGVzOiAnU2VsZWNpb25hciBhcnF1aXZvcycsXHJcbiAgICBzZWxlY3RGb2xkZXI6ICdTZWxlY2lvbmFyIHBhc3RhJyxcclxuICAgIHN0YXJ0U2VuZGluZzogJ0luaWNpYXIgZW52aW8nLFxyXG4gICAgZHJhZ0ZpbGVzSGVyZTogJ0FycmFzdGUgb3MgYXJxdWl2b3MgYXF1aScsXHJcbiAgICBkcmFnRm9sZGVyc0hlcmU6ICdBcnJhc3RlIGFzIHBhc3RhcyBhcXVpJyxcclxuICAgIHNlbGVjdEZpbGVzT25Db21wdXRlcjogJ291IHNlbGVjaW9uZSBvcyBhcnF1aXZvcyBubyBjb21wdXRhZG9yJyxcclxuICAgIHNlbGVjdEZvbGRlck9uQ29tcHV0ZXI6ICdvdSBzZWxlY2lvbmUgYSBwYXN0YSBubyBjb21wdXRhZG9yJyxcclxuICAgIGRyb3BGaWxlc0hlcmU6ICdTb2x0ZSBvcyBhcnF1aXZvcyBhcXVpJyxcclxuICAgIGRyb3BGb2xkZXJzSGVyZTogJ1NvbHRlIGFzIHBhc3RhcyBhcXVpJyxcclxuICAgIGludmFsaWREcm9wQXJlYTogJ09zIHswfSBuw6NvIGZvcmFtIGluc2VyaWRvcyBubyBsb2NhbCBjb3JyZXRvJyxcclxuICAgIGludmFsaWRGaWxlVHlwZTogJ0ZhbGhhIGFvIGNhcnJlZ2FyIHswfSBhcnF1aXZvIChzKSwgcG9pcyBuw6NvIMOpIG8gdGlwbyBkZSBhcnF1aXZvIHBlcm1pdGlkbycsXHJcbiAgICBpbnZhbGlkQW1vdW50OiAnRmFsaGEgYW8gY2FycmVnYXIgezB9IGFycXVpdm8ocyksIHBvaXMgZXhjZWRlKG0pIGEgcXVhbnRpZGFkZSBsaW1pdGUgZGUgYXJxdWl2b3MuJyxcclxuICAgIGludmFsaWRGb3JtYXQ6ICdGYWxoYSBhbyBjYXJyZWdhciB7MH0gYXJxdWl2byhzKSwgcG9pcyBuw6NvIGNvcnJlc3BvbmRlKG0pIGFvKHMpIGZvcm1hdG8ocyk6IHsxfS4nLFxyXG4gICAgaW52YWxpZFNpemU6ICdGYWxoYSBhbyBjYXJyZWdhciB7MH0gYXJxdWl2byhzKSwgcG9pcyBuw6NvIGF0ZW5kZSBhbyB0YW1hbmhvIHBlcm1pdGlkbzogezF9IGF0w6kgezJ9LicsXHJcbiAgICBudW1iZXJPZkZpbGVzQWxsb3dlZDogJ1F1YW50aWRhZGUgbcOheGltYTogezB9IGFycXVpdm8ocyknLFxyXG4gICAgYWxsb3dlZEZvcm1hdHM6ICdGb3JtYXRvcyBhZG90YWRvczogezB9LicsXHJcbiAgICBhbGxvd2VkRmlsZVNpemVSYW5nZTogJ0xpbWl0ZSBkZSB0YW1hbmhvIHBvciBhcnF1aXZvOiBkZSB7MH0gYXTDqSB7MX0nLFxyXG4gICAgbWF4RmlsZVNpemVBbGxvd2VkOiAnTGltaXRlIGRlIHRhbWFuaG8gcG9yIGFycXVpdm86IGF0w6kgezB9JyxcclxuICAgIG1pbkZpbGVTaXplQWxsb3dlZDogJ0xpbWl0ZSBkZSB0YW1hbmhvIHBvciBhcnF1aXZvOiBubyBtw61uaW1vIHswfScsXHJcbiAgICBlcnJvck9jY3VycmVkOiAnT2NvcnJldSB1bSBlcnJvJyxcclxuICAgIHNlbnRXaXRoU3VjY2VzczogJ0VudmlhZG8gY29tIHN1Y2Vzc28nXHJcbiAgfSxcclxuICBydTogPFBvVXBsb2FkTGl0ZXJhbHM+e1xyXG4gICAgZmlsZXM6ICfRhNCw0LnQu9GLJyxcclxuICAgIGZvbGRlcnM6ICfQv9Cw0L/QutC4INGBINGE0LDQudC70LDQvNC4JyxcclxuICAgIHNlbGVjdEZpbGU6ICfQktGL0LHQtdGA0LjRgtC1INGE0LDQudC7JyxcclxuICAgIHNlbGVjdEZpbGVzOiAn0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQu9GLJyxcclxuICAgIHNlbGVjdEZvbGRlcjogJ9CS0YvQsdC10YDQuNGC0LUg0L/QsNC/0LrRgyDRgSDRhNCw0LnQu9Cw0LzQuCcsXHJcbiAgICBzdGFydFNlbmRpbmc6ICfQndCw0YfQsNGC0Ywg0LfQsNCz0YDRg9C30LrRgycsXHJcbiAgICBkcmFnRmlsZXNIZXJlOiAn0J/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50LvRiyDRgdGO0LTQsCcsXHJcbiAgICBkcmFnRm9sZGVyc0hlcmU6ICfQn9C10YDQtdGC0LDRidC40YLQtSDRgdGO0LTQsCDQv9Cw0L/QutC4JyxcclxuICAgIHNlbGVjdEZpbGVzT25Db21wdXRlcjogJ9C40LvQuCDQstGL0LHQtdGA0LjRgtC1INGE0LDQudC70Ysg0L3QsCDQutC+0LzQv9GM0Y7RgtC10YDQtScsXHJcbiAgICBzZWxlY3RGb2xkZXJPbkNvbXB1dGVyOiAn0LjQu9C4INCy0YvQsdC10YDQuNGC0LUg0L/QsNC/0LrRgyDQvdCwINCy0LDRiNC10Lwg0LrQvtC80L/RjNGO0YLQtdGA0LUnLFxyXG4gICAgZHJvcEZpbGVzSGVyZTogJ9Ce0YHRgtCw0LLRjNGC0LUg0YTQsNC50LvRiyDQt9C00LXRgdGMJyxcclxuICAgIGRyb3BGb2xkZXJzSGVyZTogJ9Cf0LXRgNC10YLQsNGJ0LjRgtC1INGB0Y7QtNCwINC/0LDQv9C60LgnLFxyXG4gICAgaW52YWxpZERyb3BBcmVhOiAnezB9INC90LUg0LHRi9C70Lgg0LLRgdGC0LDQstC70LXQvdGLINCyINC/0YDQsNCy0LjQu9GM0L3QvtC8INC80LXRgdGC0LUuJyxcclxuICAgIGludmFsaWRGaWxlVHlwZTogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGE0LDQudC70YsgezB9LCDRgtCw0Log0LrQsNC6INGN0YLQviDQvdC10LLQtdGA0L3Ri9C5INGC0LjQvyDRhNCw0LnQu9CwJyxcclxuICAgIGludmFsaWRBbW91bnQ6ICdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgb3MgYXJxdWl2b3MgezB9IHBvcnF1ZSBlbGVzIGV4Y2VkZXJhbSBvIGxpbWl0ZSBkZSBhcnF1aXZvcy4nLFxyXG4gICAgaW52YWxpZEZvcm1hdDogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGE0LDQudC70YsgezB9LCDRgtCw0Log0LrQsNC6INC+0L3QuCDQvdC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGCINGE0L7RgNC80LDRgtGDICjQsNC8KTogezF9LicsXHJcbiAgICBpbnZhbGlkU2l6ZTogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGE0LDQudC70YsgezB9LCDQv9C+0YHQutC+0LvRjNC60YMg0L7QvdC4INC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YIg0YDQsNC30YDQtdGI0LXQvdC90L7QvNGDINGA0LDQt9C80LXRgNGDOiDQvtGCIHsxfSDQtNC+IHsyfS4nLFxyXG4gICAgbnVtYmVyT2ZGaWxlc0FsbG93ZWQ6ICfQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L46IHswfSDRhNCw0LnQu9C+0LInLFxyXG4gICAgYWxsb3dlZEZvcm1hdHM6ICfQpNC+0YDQvNCw0YLRiyDQv9GA0LjQvdGP0YLRizogezB9LicsXHJcbiAgICBhbGxvd2VkRmlsZVNpemVSYW5nZTogJ9Ce0LPRgNCw0L3QuNGH0LXQvdC40LUg0YDQsNC30LzQtdGA0LAg0YTQsNC50LvQsDog0L7RgiB7MH0g0LTQviB7MX0nLFxyXG4gICAgbWF4RmlsZVNpemVBbGxvd2VkOiAn0J7Qs9GA0LDQvdC40YfQtdC90LjQtSDRgNCw0LfQvNC10YDQsCDRhNCw0LnQu9CwOiDQtNC+IHswfScsXHJcbiAgICBtaW5GaWxlU2l6ZUFsbG93ZWQ6ICfQntCz0YDQsNC90LjRh9C10L3QuNC1INGA0LDQt9C80LXRgNCwINGE0LDQudC70LA6INC90LUg0LzQtdC90LXQtSB7MH0nLFxyXG4gICAgZXJyb3JPY2N1cnJlZDogJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuJyxcclxuICAgIHNlbnRXaXRoU3VjY2VzczogJ9Cj0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+J1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHBvVXBsb2FkRm9ybUZpZWxkRGVmYXVsdCA9ICdmaWxlcyc7XHJcblxyXG5jb25zdCBwb1VwbG9hZE1heEZpbGVTaXplID0gMzE0NTcyODA7IC8vIDMwTUJcclxuY29uc3QgcG9VcGxvYWRNaW5GaWxlU2l6ZSA9IDA7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBgcG8tdXBsb2FkYCBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGVudmllIGFycXVpdm8ocykgYW8gc2Vydmlkb3IgZSBhY29tcGFuaGUgbyBwcm9ncmVzc28uXHJcbiAqIEVzdGUgY29tcG9uZW50ZSB0YW1iw6ltIHBvc3NpYmlsaXRhIGFsZ3VtYXMgY29uZmlndXJhw6fDtWVzIGNvbW86XHJcbiAqICDigJMgRW52aW8gZGUgZGlyZXTDs3Jpb3MsIG9uZGUgZWxlIGFjZXNzYSBvIGRpcmV0w7NyaW8gc2VsZWNpb25hZG8gYXNzaW0gY29tbyBzZXVzIHN1Yi1kaXJldMOzcmlvcztcclxuICogIC0gTcO6bHRpcGxhIHNlbGXDp8Ojbywgb25kZSBvIHVzdcOhcmlvIHBvZGUgZW52aWFyIG1haXMgZGUgdW0gYXJxdWl2byBhbyBzZXJ2aWRvci5cclxuICogIC0gQXV0byBlbnZpbywgb25kZSBvIGFycXVpdm8gw6kgZW52aWFkbyBpbWVkaWF0YW1lbnRlIGFww7NzIGEgc2VsZcOnw6NvIGRvIHVzdcOhcmlvLCBuw6NvIG5lY2Vzc2l0YW5kbyBxdWUgbyB1c3XDoXJpb1xyXG4gKiBjbGlxdWUgZW0gZW52aWFyLlxyXG4gKiAgLSBSZXN0cmnDp8O1ZXMgZGUgZm9ybWF0b3MgZGUgYXJxdWl2byBlIHRhbWFuaG8uXHJcbiAqICAtIEZ1bsOnw6NvIGRlIHN1Y2Vzc28gcXVlIHNlcsOhIGRpc3BhcmFkYSBxdWFuZG8gb3MgYXJxdWl2b3MgZm9yZW0gZW52aWFkb3MgY29tIHN1Y2Vzc28uXHJcbiAqICAtIEZ1bsOnw6NvIGRlIGVycm8gcXVlIHNlcsOhIGRpc3BhcmFkYSBxdWFuZG8gaG91dmVyIGVycm8gbm8gZW52aW8gZG9zIGFycXVpdm9zLlxyXG4gKiAgLSBQZXJtaXRlIGhhYmlsaXRhciB1bWEgw6FyZWEgb25kZSBvcyBhcnF1aXZvcyBwb2RlbSBzZXIgYXJyYXN0YWRvcy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9VcGxvYWRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEFwbGljYSBmb2NvIG5vIGVsZW1lbnRvIGFvIHNlciBpbmljaWFkby5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBtYWlzIGRlIHVtIGVsZW1lbnRvIHNlamEgY29uZmlndXJhZG8gY29tIGVzc2EgcHJvcHJpZWRhZGUsIGFwZW5hcyBvIMO6bHRpbW8gZWxlbWVudG8gZGVjbGFyYWRvIGNvbSBlbGEgdGVyw6EgbyBmb2NvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hdXRvLWZvY3VzJykgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGVtICpwaXhlbHMqIGEgYWx0dXJhIGRhIMOhcmVhIG9uZGUgcG9kZW0gc2VyIGFycmFzdGFkb3Mgb3MgYXJxdWl2b3MuIEEgYWx0dXJhIG3DrW5pbWEgYWNlaXRhIMOpIGAxNjBweGAuXHJcbiAgICpcclxuICAgKiA+IEVzdGEgcHJvcHJpZWRhZGUgZnVuY2lvbmEgc29tZW50ZSBzZSBhIHByb3ByaWVkYWRlIGBwLWRyYWctZHJvcGAgZXN0aXZlciBoYWJpbGl0YWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDMyMGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZHJhZy1kcm9wLWhlaWdodCcpIGRyYWdEcm9wSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIC8qKiBSw7N0dWxvIGRvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogVGV4dG8gZGUgYXBvaW8gcGFyYSBvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1oZWxwJykgaGVscD86IHN0cmluZztcclxuXHJcbiAgLyoqIFVSTCBxdWUgZGV2ZSBzZXIgZmVpdGEgYSByZXF1aXNpw6fDo28gY29tIG9zIGFycXVpdm9zIHNlbGVjaW9uYWRvcy4gKi9cclxuICBASW5wdXQoJ3AtdXJsJykgdXJsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBEZWZpbmUgbyB2YWxvciBkbyBhdHJpYnV0byBgbmFtZWAgZG8gY29tcG9uZW50ZS4gKi9cclxuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmcgPSAnZmlsZSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgc2UgbyBlbnZpbyBkbyBhcnF1aXZvIHNlcsOhIGF1dG9tw6F0aWNvIGFvIHNlbGVjaW9uYXIgbyBtZXNtby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by11cGxvYWQnKSBhdXRvVXBsb2FkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIGEgaW5kaWNhw6fDo28gZGUgY2FtcG8gb3BjaW9uYWwgc2Vyw6EgZXhpYmlkYS5cclxuICAgKlxyXG4gICAqID4gTsOjbyBzZXLDoSBleGliaWRhIGEgaW5kaWNhw6fDo28gc2U6XHJcbiAgICogIC0gTyBjYW1wbyBjb250ZXIgYHAtcmVxdWlyZWRgO1xyXG4gICAqICAtIE7Do28gcG9zc3VpciBgcC1oZWxwYCBlL291IGBwLWxhYmVsYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atb3B0aW9uYWwnKSBvcHRpb25hbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIE9iamV0byBxdWUgY29udMOpbSBvcyBjYWJlw6dhbGhvcyBxdWUgc2Vyw6EgZW52aWFkbyBuYSByZXF1aXNpw6fDo28gZG9zIGFycXV2aW9zLiAqL1xyXG4gIEBJbnB1dCgncC1oZWFkZXJzJykgaGVhZGVyczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB9O1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRnVuw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBubyBtb21lbnRvIGRlIHJlYWxpemFyIG8gZW52aW8gZG8gYXJxdWl2byxcclxuICAgKiBvbmRlIHNlcsOhIHBvc3PDrXZlbCBhZGljaW9uYXIgaW5mb3JtYcOnw7VlcyBhbyBwYXLDom1ldHJvIHF1ZSBzZXLDoSBlbnZpYWRvIG5hIHJlcXVpc2nDp8Ojby5cclxuICAgKiDDiSBwYXNzYWRvIHBvciBwYXLDom1ldHJvIHVtIG9iamV0byBjb20gbyBhcnF1aXZvIGUgYSBwcm9waWVkYWRlIGRhdGEgbmVzdGEgcHJvcHJpZWRhZGUgcG9kZSBzZXIgaW5mb3JtYWRvIGFsZ3VtIGRhZG8sXHJcbiAgICogcXVlIHNlcsOhIGVudmlhZG8gZW0gY29uanVudG8gY29tIG8gYXJxdWl2byBuYSByZXF1aXNpw6fDo28sIHBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogICBldmVudC5kYXRhID0ge2lkOiAnaWQgZG8gdXN1YXJpbyd9O1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtdXBsb2FkJykgb25VcGxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gc2Vyw6EgZGlzcGFyYWRvIHF1YW5kbyBvY29ycmVyIGFsZ3VtIGVycm8gbm8gZW52aW8gZG8gYXJxdWl2by5cclxuICAgKiA+IFBvciBwYXLDom1ldHJvIHNlcsOhIHBhc3NhZG8gbyBvYmpldG8gZG8gcmV0b3JubyBxdWUgw6kgZG8gdGlwbyBgSHR0cEVycm9yUmVzcG9uc2VgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtZXJyb3InKSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIHNlcsOhIGRpc3BhcmFkbyBxdWFuZG8gbyBlbnZpbyBkbyBhcnF1aXZvIGZvciByZWFsaXphZG8gY29tIHN1Y2Vzc28uXHJcbiAgICogPiBQb3IgcGFyw6JtZXRybyBzZXLDoSBwYXNzYWRvIG8gb2JqZXRvIGRvIHJldG9ybm8gcXVlIMOpIGRvIHRpcG8gYEh0dHBSZXNwb25zZWAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1zdWNjZXNzJykgb25TdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRnVuw6fDo28gcGFyYSBhdHVhbGl6YXIgbyBuZ01vZGVsIGRvIGNvbXBvbmVudGUsIG5lY2Vzc8OhcmlvIHF1YW5kbyBuw6NvIGZvciB1dGlsaXphZG8gZGVudHJvIGRhICp0YWcqIGBmb3JtYC5cclxuICAgKlxyXG4gICAqIE5hIHZlcnPDo28gMTIuMi4wIGRvIEFuZ3VsYXIgYSB2ZXJpZmljYcOnw6NvIGBzdHJpY3RUZW1wbGF0ZXNgIHZlbSB0cnVlIGNvbW8gZGVmYXVsdC4gUG9ydGFudG8sIHBhcmEgdXRpbGl6YXJcclxuICAgKiB0d28td2F5IGJpbmRpbmcgbm8gY29tcG9uZW50ZSBkZXZlIHNlIHV0aWxpemFyIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLXVwbG9hZCAuLi4gW25nTW9kZWxdPVwiVXBsb2FkTW9kZWxcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGxvYWRNb2RlbCA9ICRldmVudFwiPiA8L3BvLXVwbG9hZD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ25nTW9kZWxDaGFuZ2UnKSBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBhbGxvd2VkRXh0ZW5zaW9uczogc3RyaW5nO1xyXG4gIGN1cnJlbnRGaWxlczogQXJyYXk8UG9VcGxvYWRGaWxlPjtcclxuXHJcbiAgY2FuSGFuZGxlRGlyZWN0b3J5OiBib29sZWFuO1xyXG4gIG9uTW9kZWxDaGFuZ2U6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIGV4dGVuc2lvbk5vdEFsbG93ZWQgPSAwO1xyXG4gIHByb3RlY3RlZCBxdWFudGl0eU5vdEFsbG93ZWQgPSAwO1xyXG4gIHByb3RlY3RlZCBzaXplTm90QWxsb3dlZCA9IDA7XHJcbiAgcHJvdGVjdGVkIG9uTW9kZWxUb3VjaGVkOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9kaXJlY3Rvcnk/OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkPzogYm9vbGVhbjtcclxuICBwcml2YXRlIF9kcmFnRHJvcD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9maWxlUmVzdHJpY3Rpb25zPzogUG9VcGxvYWRGaWxlUmVzdHJpY3Rpb25zO1xyXG4gIHByaXZhdGUgX2Zvcm1GaWVsZD86IHN0cmluZztcclxuICBwcml2YXRlIF9oaWRlUmVzdHJpY3Rpb25zSW5mbz86IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaGlkZVNlbGVjdEJ1dHRvbj86IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaGlkZVNlbmRCdXR0b24/OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzTXVsdGlwbGU/OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzPzogYW55O1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkPzogYm9vbGVhbjtcclxuICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0b3JDaGFuZ2U6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFBlcm1pdGUgYSBzZWxlw6fDo28gZGUgZGlyZXTDs3Jpb3MgY29udGVuZG8gdW0gb3UgbWFpcyBhcnF1aXZvcyBwYXJhIGVudmlvLlxyXG4gICAqXHJcbiAgICogPiBBIGhhYmlsaXRhw6fDo28gZGVzdGEgcHJvcHJpZWRhZGUgc2UgcmVzdHJpbmdlIGFwZW5hcyDDoCBzZWxlw6fDo28gZGUgZGlyZXTDs3Jpb3MuXHJcbiAgICpcclxuICAgKiA+IERlZmluacOnw6NvIG7Do28gc3Vwb3J0YWRhIHBlbG8gYnJvd3NlciAqKkludGVybmV0IEV4cGxvcmVyKiosIHRvZGF2aWEgc2Vyw6EgcG9zc8OtdmVsIGEgc2VsZcOnw6NvIGRlIGFycXVpdm9zIHBhZHLDo28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRpcmVjdG9yeScpIHNldCBkaXJlY3RvcnkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RpcmVjdG9yeSA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG5cclxuICAgIHRoaXMuY2FuSGFuZGxlRGlyZWN0b3J5ID0gdGhpcy5fZGlyZWN0b3J5ICYmICFpc0lFKCkgJiYgIWlzTW9iaWxlKCk7XHJcbiAgICB0aGlzLnNldERpcmVjdG9yeUF0dHJpYnV0ZSh0aGlzLmNhbkhhbmRsZURpcmVjdG9yeSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlyZWN0b3J5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdG9yeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFeGliZSBhIMOhcmVhIG9uZGUgw6kgcG9zc8OtdmVsIGFycmFzdGFyIGUgc2VsZWNpb25hciBvcyBhcnF1aXZvcy4gUXVhbmRvIGVzdGl2ZXIgZGVmaW5pZGEsIG9taXRlIG8gYm90w6NvIHBhcmEgc2VsZcOnw6NvIGRlIGFycXVpdm9zXHJcbiAgICogYXV0b21hdGljYW1lbnRlLlxyXG4gICAqXHJcbiAgICogPiBSZWNvbWVuZGFtb3MgdXRpbGl6YXIgYXBlbmFzIHVtIGBwby11cGxvYWRgIGNvbSBlc3RhIGZ1bmNpb25hbGlkYWRlIHBvciB0ZWxhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kcmFnLWRyb3AnKSBzZXQgZHJhZ0Ryb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdEcm9wID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0Ryb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0Ryb3A7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2N1bHRhIHZpc3VhbG1lbnRlIGFzIGluZm9ybWHDp8O1ZXMgZGUgcmVzdHJpw6fDtWVzIHBhcmEgbyB1cGxvYWQuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtcmVzdHJpY3Rpb25zLWluZm8nKSBzZXQgaGlkZVJlc3RyaWN0aW9uc0luZm8odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVSZXN0cmljdGlvbnNJbmZvID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZVJlc3RyaWN0aW9uc0luZm8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZVJlc3RyaWN0aW9uc0luZm87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT21pdGUgbyBib3TDo28gZGUgc2VsZcOnw6NvIGRlIGFycXVpdm9zLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG8gdmFsb3IgZGVmaW5pZG8gc2VqYSBgdHJ1ZWAsIGNhYmVyw6EgYW8gZGVzZW52b2x2ZWRvciBhIHJlc3BvbnNhYmlsaWRhZGVcclxuICAgKiBwZWxhIGNoYW1hZGEgZG8gbcOpdG9kbyBgc2VsZWN0RmlsZXMoKWAgcGFyYSBzZWxlw6fDo28gZGUgYXJxdWl2b3MuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhpZGUtc2VsZWN0LWJ1dHRvbicpIHNldCBoaWRlU2VsZWN0QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlU2VsZWN0QnV0dG9uID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBoaWRlU2VsZWN0QnV0dG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVTZWxlY3RCdXR0b247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT21pdGUgbyBib3TDo28gZGUgZW52aW8gZGUgYXJxdWl2b3MuXHJcbiAgICpcclxuICAgKiA+IENhc28gbyB2YWxvciBkZWZpbmlkbyBzZWphIGB0cnVlYCwgY2FiZXLDoSBhbyBkZXNlbnZvbHZlZG9yIGEgcmVzcG9uc2FiaWxpZGFkZVxyXG4gICAqIHBlbGEgY2hhbWFkYSBkbyBtw6l0b2RvIGBzZW5kRmlsZXMoKWAgcGFyYSBlbnZpbyBkbyhzKSBhcnF1aXZvKHMpIHNlbGVjaW9uYWRvKHMpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXNlbmQtYnV0dG9uJykgc2V0IGhpZGVTZW5kQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlU2VuZEJ1dHRvbiA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBnZXQgaGlkZVNlbmRCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZVNlbmRCdXR0b247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhcyBsaXRlcmFpcyB1c2FkYXMgbm8gYHBvLXVwbG9hZGAuXHJcbiAgICpcclxuICAgKiBFeGlzdGVtIGR1YXMgbWFuZWlyYXMgZGUgY3VzdG9taXphciBvIGNvbXBvbmVudGU6XHJcbiAgICpcclxuICAgKiAtIHBhc3NhbmRvIHVtIG9iamV0byBpbXBsZW1lbnRhbmRvIGEgaW50ZXJmYWNlIGBQb1VwbG9hZExpdGVyYWxzYCBjb20gdG9kYXMgYXMgbGl0ZXJhaXMgZGlzcG9uw612ZWlzO1xyXG4gICAqIC0gcGFzc2FuZG8gYXBlbmFzIGFzIGxpdGVyYWlzIHF1ZSBkZXNlamEgY3VzdG9taXphcjpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvVXBsb2FkTGl0ZXJhbHMgPSB7XHJcbiAgICogICAgZm9sZGVyczogJ1Bhc3RhcycsXHJcbiAgICogICAgc2VsZWN0RmlsZTogJ0J1c2NhciBhcnF1aXZvJyxcclxuICAgKiAgICBzdGFydFNlbmRpbmc6ICdFbnZpYXInXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBFIHBhcmEgY2FycmVnYXIgYXMgbGl0ZXJhaXMgY3VzdG9taXphZGFzLCBiYXN0YSBhcGVuYXMgcGFzc2FyIG8gb2JqZXRvIHBhcmEgbyBjb21wb25lbnRlOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLXVwbG9hZFxyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLXVwbG9hZD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqID4gTyBvYmpldG8gcGFkcsOjbyBkZSBsaXRlcmFpcyBzZXLDoSB0cmFkdXppZG8gZGUgYWNvcmRvIGNvbSBvIGlkaW9tYSBkbyAqYnJvd3NlciogKHB0LCBlbiwgZXMsIHJ1KS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBzZXQgbGl0ZXJhbHModmFsdWU6IFBvVXBsb2FkTGl0ZXJhbHMpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0ge1xyXG4gICAgICAgIC4uLnBvVXBsb2FkTGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgICAgLi4ucG9VcGxvYWRMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV0sXHJcbiAgICAgICAgLi4udmFsdWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0gcG9VcGxvYWRMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBsaXRlcmFscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9saXRlcmFscyB8fCBwb1VwbG9hZExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gcXVlIHNlZ3VlIGEgZGVmaW5pw6fDo28gZGEgaW50ZXJmYWNlIGBQb1VwbG9hZEZpbGVSZXN0cmljdGlvbnNgLFxyXG4gICAqIHF1ZSBwb3NzaWJpbGl0YSBkZWZpbmlyIHRhbWFuaG8gbcOheGltby9tw61uaW1vIGUgZXh0ZW5zw6NvIGRvcyBhcnF1aXZvcyBwZXJtaXRpZG9zLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZXN0cmljdGlvbnMnKSBzZXQgZmlsZVJlc3RyaWN0aW9ucyhyZXN0cmljdGlvbnM6IFBvVXBsb2FkRmlsZVJlc3RyaWN0aW9ucykge1xyXG4gICAgdGhpcy5fZmlsZVJlc3RyaWN0aW9ucyA9IHRoaXMuaW5pdFJlc3RyaWN0aW9ucyhyZXN0cmljdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0QWxsb3dlZEV4dGVuc2lvbnMocmVzdHJpY3Rpb25zKTtcclxuICB9XHJcblxyXG4gIGdldCBmaWxlUmVzdHJpY3Rpb25zKCk6IFBvVXBsb2FkRmlsZVJlc3RyaWN0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsZVJlc3RyaWN0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBOb21lIGRvIGNhbXBvIGRlIGZvcm11bMOhcmlvIHF1ZSBzZXLDoSBlbnZpYWRvIHBhcmEgbyBzZXJ2acOnbyBpbmZvcm1hZG8gbmEgcHJvcHJpZWRhZGUgYHAtdXJsYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmaWxlc2BcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZm9ybS1maWVsZCcpIHNldCBmb3JtRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZm9ybUZpZWxkID0gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogcG9VcGxvYWRGb3JtRmllbGREZWZhdWx0O1xyXG5cclxuICAgIHRoaXMuZ2V0VXBsb2FkU2VydmljZSgpLmZvcm1GaWVsZCA9IHRoaXMuZm9ybUZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1GaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1GaWVsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgcXVlIG8gY2FtcG8gc2Vyw6EgZGVzYWJpbGl0YWRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZCcpIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwodGhpcy5jdXJyZW50RmlsZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBwb2RlIHNlbGVjaW9uYXIgbWFpcyBkZSB1bSBhcnF1aXZvLlxyXG4gICAqXHJcbiAgICogPiBTZSB1dGlsaXphZGEgYSBgcC1kaXJlY3RvcnlgLCBoYWJpbGl0YS1zZSBhdXRvbWF0aWNhbWVudGUgZXN0YSBwcm9wcmllZGFkZS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbXVsdGlwbGUnKSBzZXQgaXNNdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNNdWx0aXBsZSA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5IYW5kbGVEaXJlY3RvcnkgPyB0cnVlIDogdGhpcy5faXNNdWx0aXBsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgcXVlIG8gY2FtcG8gc2Vyw6Egb2JyaWdhdMOzcmlvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZXF1aXJlZCcpIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb252ZXJ0VG9Cb29sZWFuKHJlcXVpcmVkKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwodGhpcy5jdXJyZW50RmlsZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHVwbG9hZFNlcnZpY2U6IFBvVXBsb2FkU2VydmljZSwgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIG9zIGVzdGFkb3MgZGUgaGFiaWxpdGFkbyB2aWEgZm9ybXMgYXBpXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRvckNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIGlmIChyZXF1aXJlZEZhaWxlZCh0aGlzLnJlcXVpcmVkLCB0aGlzLmRpc2FibGVkLCBhYnN0cmFjdENvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKG1vZGVsKSB7XHJcbiAgICAgIGlmICghaXNFcXVhbHModGhpcy5jdXJyZW50RmlsZXMsIG1vZGVsKSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZpbGVzID0gdGhpcy5wYXJzZUZpbGVzKG1vZGVsKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50RmlsZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaXNFeGNlZWRlZEZpbGVMaW1pdChjdXJyZW50RmlsZXNMZW5ndGg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc011bHRpcGxlICYmXHJcbiAgICAgIHRoaXMuZmlsZVJlc3RyaWN0aW9ucyAmJlxyXG4gICAgICB0aGlzLmZpbGVSZXN0cmljdGlvbnMubWF4RmlsZXMgPiAwICYmXHJcbiAgICAgIHRoaXMuZmlsZVJlc3RyaWN0aW9ucy5tYXhGaWxlcyA8PSBjdXJyZW50RmlsZXNMZW5ndGhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBGYXogbyBwYXJzZSBkb3MgYXJxdWl2b3Mgc2VsZWNpb25hZG9zIHBhcmEgYXJxdWl2b3MgZG8gZm9ybWF0byBQb1VwbG9hZEZpbGUgZSBhdHVhbGl6YSBvcyBhcnF1aXZvcyBjb3JyZW50ZXMuXHJcbiAgcHJvdGVjdGVkIHBhcnNlRmlsZXMoZmlsZXM6IEFycmF5PEZpbGU+KTogQXJyYXk8UG9VcGxvYWRGaWxlPiB7XHJcbiAgICBsZXQgcG9VcGxvYWRGaWxlczogQXJyYXk8UG9VcGxvYWRGaWxlPiA9IHRoaXMuY3VycmVudEZpbGVzIHx8IFtdO1xyXG4gICAgY29uc3QgZmlsZXNMZW5ndGggPSBmaWxlcy5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlc0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzRXhjZWVkZWRGaWxlTGltaXQocG9VcGxvYWRGaWxlcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eU5vdEFsbG93ZWQgPSBmaWxlc0xlbmd0aCAtIHRoaXMuZmlsZVJlc3RyaWN0aW9ucy5tYXhGaWxlcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmaWxlID0gbmV3IFBvVXBsb2FkRmlsZShmaWxlc1tpXSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jaGVja1Jlc3RyaWN0aW9ucyhmaWxlKSkge1xyXG4gICAgICAgIHBvVXBsb2FkRmlsZXMgPSB0aGlzLmluc2VydEZpbGVJbkZpbGVzKGZpbGUsIHBvVXBsb2FkRmlsZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbmRGZWVkYmFjaygpO1xyXG4gICAgcmV0dXJuIHBvVXBsb2FkRmlsZXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNb2RlbChtb2RlbDogYW55KSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0b3JDaGFuZ2UpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UobW9kZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVmVyaWZpY2Egc2UgbyBhcnF1aXZvIGVzdMOhIGRlIGFjb3JkbyBjb20gYXMgcmVzdHJpw6fDtWVzLlxyXG4gIHByaXZhdGUgY2hlY2tSZXN0cmljdGlvbnMoZmlsZTogUG9VcGxvYWRGaWxlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCByZXN0cmljdGlvbnMgPSB0aGlzLmZpbGVSZXN0cmljdGlvbnM7XHJcblxyXG4gICAgaWYgKHJlc3RyaWN0aW9ucykge1xyXG4gICAgICBjb25zdCBhbGxvd2VkRXh0ZW5zaW9ucyA9IHJlc3RyaWN0aW9ucy5hbGxvd2VkRXh0ZW5zaW9ucztcclxuICAgICAgY29uc3QgbWluRmlsZVNpemUgPSByZXN0cmljdGlvbnMubWluRmlsZVNpemU7XHJcbiAgICAgIGNvbnN0IG1heEZpbGVTaXplID0gcmVzdHJpY3Rpb25zLm1heEZpbGVTaXplO1xyXG5cclxuICAgICAgY29uc3QgaXNBY2NlcHQgPSBhbGxvd2VkRXh0ZW5zaW9ucyA/IHRoaXMuaXNBbGxvd2VkRXh0ZW5zaW9uKGZpbGUuZXh0ZW5zaW9uLCBhbGxvd2VkRXh0ZW5zaW9ucykgOiB0cnVlO1xyXG4gICAgICBjb25zdCBpc0FjY2VwdFNpemUgPSBmaWxlLnNpemUgPj0gbWluRmlsZVNpemUgJiYgZmlsZS5zaXplIDw9IG1heEZpbGVTaXplO1xyXG5cclxuICAgICAgaWYgKCFpc0FjY2VwdFNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemVOb3RBbGxvd2VkID0gdGhpcy5zaXplTm90QWxsb3dlZCArIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpc0FjY2VwdCAmJiBpc0FjY2VwdFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4aXN0c0ZpbGVTYW1lTmFtZShmaWxlOiBQb1VwbG9hZEZpbGUsIGZpbGVzOiBBcnJheTxQb1VwbG9hZEZpbGU+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmlsZXMuc29tZShjdXJyZW50RmlsZSA9PiBmaWxlLm5hbWUgPT09IGN1cnJlbnRGaWxlLm5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVcGxvYWRTZXJ2aWNlKCk6IFBvVXBsb2FkU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy51cGxvYWRTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnRGaWxlSW5GaWxlcyhuZXdGaWxlOiBQb1VwbG9hZEZpbGUsIGZpbGVzOiBBcnJheTxQb1VwbG9hZEZpbGU+KSB7XHJcbiAgICBpZiAodGhpcy5leGlzdHNGaWxlU2FtZU5hbWUobmV3RmlsZSwgZmlsZXMpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUV4aXN0c0ZpbGVJbkZpbGVzKG5ld0ZpbGUsIGZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgIGZpbGVzLnB1c2gobmV3RmlsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWxlcy5zcGxpY2UoMCwgZmlsZXMubGVuZ3RoLCBuZXdGaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWxsb3dlZEV4dGVuc2lvbihleHRlbnNpb246IHN0cmluZywgYWxsb3dlZEV4dGVuc2lvbnM6IEFycmF5PHN0cmluZz4gPSBbXSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNBbGxvd2VkID0gYWxsb3dlZEV4dGVuc2lvbnMuc29tZShleHQgPT4gZXh0LnRvTG93ZXJDYXNlKCkgPT09IGV4dGVuc2lvbik7XHJcbiAgICBpZiAoIWlzQWxsb3dlZCkge1xyXG4gICAgICB0aGlzLmV4dGVuc2lvbk5vdEFsbG93ZWQgPSB0aGlzLmV4dGVuc2lvbk5vdEFsbG93ZWQgKyAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQWxsb3dlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWxsb3dlZEV4dGVuc2lvbnMocmVzdHJpY3Rpb25zOiBQb1VwbG9hZEZpbGVSZXN0cmljdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgX2FsbG93ZWRFeHRlbnNpb25zID0gcmVzdHJpY3Rpb25zLmFsbG93ZWRFeHRlbnNpb25zIHx8IFtdO1xyXG5cclxuICAgIHRoaXMuYWxsb3dlZEV4dGVuc2lvbnMgPSBfYWxsb3dlZEV4dGVuc2lvbnMuam9pbignLCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0UmVzdHJpY3Rpb25zKHJlc3RyaWN0aW9uczogUG9VcGxvYWRGaWxlUmVzdHJpY3Rpb25zKTogUG9VcGxvYWRGaWxlUmVzdHJpY3Rpb25zIHtcclxuICAgIGlmICghcmVzdHJpY3Rpb25zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtaW5GaWxlU2l6ZSA9IHJlc3RyaWN0aW9ucy5taW5GaWxlU2l6ZSB8fCBwb1VwbG9hZE1pbkZpbGVTaXplO1xyXG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSByZXN0cmljdGlvbnMubWF4RmlsZVNpemUgfHwgcG9VcGxvYWRNYXhGaWxlU2l6ZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5yZXN0cmljdGlvbnMsXHJcbiAgICAgIG1heEZpbGVTaXplOiBtYXhGaWxlU2l6ZSxcclxuICAgICAgbWluRmlsZVNpemU6IG1pbkZpbGVTaXplXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVFeGlzdHNGaWxlSW5GaWxlcyhuZXdGaWxlOiBQb1VwbG9hZEZpbGUsIGZpbGVzOiBBcnJheTxQb1VwbG9hZEZpbGU+KSB7XHJcbiAgICBjb25zdCBmaWxlSW5kZXggPSBmaWxlcy5maW5kSW5kZXgoXHJcbiAgICAgIGN1cnJlbnRGaWxlID0+IG5ld0ZpbGUubmFtZSA9PT0gY3VycmVudEZpbGUubmFtZSAmJiBjdXJyZW50RmlsZS5zdGF0dXMgIT09IFBvVXBsb2FkU3RhdHVzLlVwbG9hZGVkXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChmaWxlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGZpbGVzLnNwbGljZShmaWxlSW5kZXgsIDEsIG5ld0ZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWxlcztcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IHNlbmRGZWVkYmFjaygpOiB2b2lkO1xyXG5cclxuICBhYnN0cmFjdCBzZXREaXJlY3RvcnlBdHRyaWJ1dGUodmFsdWU6IGJvb2xlYW4pO1xyXG59XHJcbiJdfQ==