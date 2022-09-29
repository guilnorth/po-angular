import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PoUploadFile } from './po-upload-file';
import { PoUploadFileRestrictions } from './interfaces/po-upload-file-restriction.interface';
import { PoUploadLiterals } from './interfaces/po-upload-literals.interface';
import { PoUploadService } from './po-upload.service';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
export declare const poUploadLiteralsDefault: {
    en: PoUploadLiterals;
    es: PoUploadLiterals;
    pt: PoUploadLiterals;
    ru: PoUploadLiterals;
};
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
export declare abstract class PoUploadBaseComponent implements ControlValueAccessor, Validator {
    protected uploadService: PoUploadService;
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
    autoFocus: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define em *pixels* a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `160px`.
     *
     * > Esta propriedade funciona somente se a propriedade `p-drag-drop` estiver habilitada.
     *
     * @default `320`
     */
    dragDropHeight: number;
    /** Rótulo do campo. */
    label?: string;
    /** Texto de apoio para o campo. */
    help?: string;
    /** URL que deve ser feita a requisição com os arquivos selecionados. */
    url: string;
    /** Define o valor do atributo `name` do componente. */
    name: string;
    /**
     * @optional
     *
     * @description
     *
     * Define se o envio do arquivo será automático ao selecionar o mesmo.
     *
     * @default `false`
     */
    autoUpload?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define se a indicação de campo opcional será exibida.
     *
     * > Não será exibida a indicação se:
     *  - O campo conter `p-required`;
     *  - Não possuir `p-help` e/ou `p-label`.
     *
     * @default `false`
     */
    optional: boolean;
    /** Objeto que contém os cabeçalhos que será enviado na requisição dos arquvios. */
    headers: {
        [name: string]: string | Array<string>;
    };
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
    onUpload: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento será disparado quando ocorrer algum erro no envio do arquivo.
     * > Por parâmetro será passado o objeto do retorno que é do tipo `HttpErrorResponse`.
     */
    onError: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento será disparado quando o envio do arquivo for realizado com sucesso.
     * > Por parâmetro será passado o objeto do retorno que é do tipo `HttpResponse`.
     */
    onSuccess: EventEmitter<any>;
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
    ngModelChange: EventEmitter<any>;
    allowedExtensions: string;
    currentFiles: Array<PoUploadFile>;
    canHandleDirectory: boolean;
    onModelChange: any;
    protected extensionNotAllowed: number;
    protected quantityNotAllowed: number;
    protected sizeNotAllowed: number;
    protected onModelTouched: any;
    private _directory?;
    private _disabled?;
    private _dragDrop?;
    private _fileRestrictions?;
    private _formField?;
    private _hideRestrictionsInfo?;
    private _hideSelectButton?;
    private _hideSendButton?;
    private _isMultiple?;
    private _literals?;
    private _required?;
    private language;
    private validatorChange;
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
    set directory(value: boolean);
    get directory(): boolean;
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
    set dragDrop(value: boolean);
    get dragDrop(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Oculta visualmente as informações de restrições para o upload.
     *
     * @default `false`
     */
    set hideRestrictionsInfo(value: boolean);
    get hideRestrictionsInfo(): boolean;
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
    set hideSelectButton(value: boolean);
    get hideSelectButton(): boolean;
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
    set hideSendButton(value: boolean);
    get hideSendButton(): boolean;
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
    set literals(value: PoUploadLiterals);
    get literals(): PoUploadLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Objeto que segue a definição da interface `PoUploadFileRestrictions`,
     * que possibilita definir tamanho máximo/mínimo e extensão dos arquivos permitidos.
     */
    set fileRestrictions(restrictions: PoUploadFileRestrictions);
    get fileRestrictions(): PoUploadFileRestrictions;
    /**
     * @optional
     *
     * @description
     *
     * Nome do campo de formulário que será enviado para o serviço informado na propriedade `p-url`.
     *
     * @default `files`
     */
    set formField(value: string);
    get formField(): string;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será desabilitado.
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define se pode selecionar mais de um arquivo.
     *
     * > Se utilizada a `p-directory`, habilita-se automaticamente esta propriedade.
     */
    set isMultiple(value: boolean);
    get isMultiple(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    constructor(uploadService: PoUploadService, languageService: PoLanguageService);
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    writeValue(model: any): void;
    protected isExceededFileLimit(currentFilesLength: number): boolean;
    protected parseFiles(files: Array<File>): Array<PoUploadFile>;
    protected validateModel(model: any): void;
    private checkRestrictions;
    private existsFileSameName;
    private getUploadService;
    private insertFileInFiles;
    private isAllowedExtension;
    private setAllowedExtensions;
    private initRestrictions;
    private updateExistsFileInFiles;
    abstract sendFeedback(): void;
    abstract setDirectoryAttribute(value: boolean): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoUploadBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoUploadBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "dragDropHeight": "p-drag-drop-height"; "label": "p-label"; "help": "p-help"; "url": "p-url"; "name": "name"; "autoUpload": "p-auto-upload"; "optional": "p-optional"; "headers": "p-headers"; "directory": "p-directory"; "dragDrop": "p-drag-drop"; "hideRestrictionsInfo": "p-hide-restrictions-info"; "hideSelectButton": "p-hide-select-button"; "hideSendButton": "p-hide-send-button"; "literals": "p-literals"; "fileRestrictions": "p-restrictions"; "formField": "p-form-field"; "disabled": "p-disabled"; "isMultiple": "p-multiple"; "required": "p-required"; }, { "onUpload": "p-upload"; "onError": "p-error"; "onSuccess": "p-success"; "ngModelChange": "ngModelChange"; }, never, never, false>;
}