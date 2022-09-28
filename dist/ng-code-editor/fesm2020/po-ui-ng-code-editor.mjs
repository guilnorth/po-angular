import * as i0 from '@angular/core';
import { Directive, Input, Injectable, forwardRef, Component, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

const PO_CODE_EDITOR_THEMES = ['vs-dark', 'vs', 'hc-black'];
const PO_CODE_EDITOR_THEME_DEFAULT = 'vs';
/**
 * @description
 *
 * O `po-code-editor` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.
 *
 * Sendo assim, algumas configurações presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
 * (utilizando o highlight syntax específico), escolha do tema e opção de diff, além de ser muito similar ao Visual
 * Studio Code, com autocomplete e fechamento automático de brackets.
 *
 * Este componente pode ser usado em qualquer situação que necessite de adição de códigos, como por exemplo, criar
 * receitas utilizando Terraform para gerenciar topologias.
 * É importante ressaltar que este não é um componente para edição de textos comuns.
 *
 * O [(ngModel)] deve ser usado para manipular o conteúdo do po-code-editor, ou seja, tanto para incluir um conteúdo quanto
 * para recuperar o conteúdo do po-code-editor, utiliza-se uma variável passada por [(ngModel)].
 *
 * #### Adicionando o pacote @po-ui/ng-code-editor
 *
 * Para instalar o pacote `po-code-editor` em sua aplicação execute:
 *
 * ```shell
 * ng add @po-ui/ng-code-editor
 * ```
 *
 * O comando `ng add` do `Angular CLI`:
 * - inclui o `po-code-editor` no seu projeto;
 * - adiciona o módulo `PoCodeEditorModule`:;
 *
 * ```
 * // app.module.ts
 * ...
 * import { PoModule } from '@po-ui/ng-components';
 * import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
 * ...
 * @NgModule({
 *   imports: [
 *     ...
 *     PoModule,
 *     PoCodeEditorModule
 *   ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 *
 * - adiciona o tema PO UI e também o *asset* do Monaco no arquivo `angular.json`, conforme abaixo:
 *
 * <pre ngNonBindable>
 * ...
 * "assets": [
 *    { "glob": "&#42;&#42;/&#42;", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 *  ],
 * "styles": [
 *    "./node_modules/@po-ui/style/css/po-theme-default.min.css"
 * ]
 * ...
 * </pre>
 */
class PoCodeEditorBaseComponent {
    constructor() {
        this.modifiedValue = '';
        this.value = '';
        this._height = 150;
        this._language = 'plainText';
        this._readonly = false;
        this._showDiff = false;
        this._theme = PO_CODE_EDITOR_THEME_DEFAULT;
        /* istanbul ignore next */
        this.onTouched = (value) => { };
        /* istanbul ignore next */
        this.onChangePropagate = (value) => { };
    }
    /**
     * @optional
     *
     * @description
     *
     * Linguagem na qual será apresentado o código fonte.
     * Para saber quais são as linguagens compatíveis, consulte a documentação oficial do
     * [**Monaco Editor**](https://microsoft.github.io/monaco-editor/).
     *
     * Também é possível adicionar uma nova linguagem personalizada utilizando o serviço:
     * [**po-code-editor-register**](https://po-ui.io/documentation/po-code-editor-register?view=doc).
     *
     * @default `plainText`
     */
    set language(language) {
        this._language = language && language.length ? language.trim() : 'plainText';
        if (this.editor && this._language) {
            this.setLanguage(this._language);
        }
    }
    get language() {
        return this._language;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica se o editor será aberto em modo de leitura.
     *
     * Neste caso, não é possível editar o código inserido.
     *
     * Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.
     *
     * @default `false`
     */
    set readonly(readonly) {
        this._readonly = readonly === '' ? true : this.convertToBoolean(readonly);
        if (this.editor) {
            this.setReadOnly(readonly);
        }
    }
    get readonly() {
        return this._readonly;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica se o editor será aberto em modo de comparação.
     *
     * Caso esteja habilitada esta opção, então o [(ngModel)] deverá ser passado como um array, cuja primeira opção deve
     * conter uma string com o código original e na segunda posição uma string código modificado para efeito de
     * comparação. Neste caso, o usuário conseguirá editar apenas o código modificado e isso refletirá na segunda posição
     * do array consequentemente.
     *
     * Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.
     *
     * @default `false`
     */
    set showDiff(showDiff) {
        this._showDiff = showDiff === '' ? true : this.convertToBoolean(showDiff);
    }
    get showDiff() {
        return this._showDiff;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista de sugestões usadas pelo autocomplete dentro do editor.
     *
     * Para visualizar a lista de sugestões use o comando `CTRL + SPACE`.
     *
     * Caso o editor esteja usando uma linguagem que já tenha uma lista de sugestões predefinida, o valor passado será adicionado
     * a lista preexistente, aumentando as opções para o usuário.
     *
     * Caso tenha mais de um editor da mesma linguagem na aplicação, as sugestões serão adicionadas para que todos os editores da mesma linguagem
     * tenham as mesmas sugestões.
     *
     * ```
     *  <po-code-editor
     *    [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
     *  </po-code-editor>
     * ```
     *
     * Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.
     */
    set suggestions(values) {
        this._suggestions = values;
        if (this.editor && this._suggestions) {
            this.setSuggestions(this._suggestions);
        }
    }
    get suggestions() {
        return this._suggestions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define um tema para o editor.
     *
     * Temas válidos:
     *  - `vs-dark`
     *  - `vs`
     *  - `hc-black`
     *
     * É importante salientar que o tema será aplicados a todos os componentes po-code-editor existentes na tela,
     * ou seja, todas as instâncias do componente receberão o último tema atribuído ou o tema da última instância
     * criada.
     *
     * @default `vs`
     */
    set theme(theme) {
        this._theme = PO_CODE_EDITOR_THEMES.includes(theme) ? theme : PO_CODE_EDITOR_THEME_DEFAULT;
        if (this.editor) {
            this.setTheme(theme);
        }
    }
    get theme() {
        return this._theme;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do componente em pixels do po-code-editor.
     * Esta propriedade não poderá ser alterada após o componente ter sido iniciado.
     * A altura mínima é 150 pixels.
     */
    set height(height) {
        this._height = parseFloat(height) >= 150 ? parseFloat(height) : 150;
    }
    get height() {
        return `${this._height}px`;
    }
    getOptions() {
        return { language: this.language, theme: this.theme, readOnly: this.readonly };
    }
    registerOnChange(fn) {
        this.onChangePropagate = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    convertToBoolean(val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return val === 'true' || val === 'on' || val === '';
        }
        if (typeof val === 'number') {
            return val === 1;
        }
        return !!val;
    }
}
PoCodeEditorBaseComponent.ɵfac = function PoCodeEditorBaseComponent_Factory(t) { return new (t || PoCodeEditorBaseComponent)(); };
PoCodeEditorBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoCodeEditorBaseComponent, inputs: { language: ["p-language", "language"], readonly: ["p-readonly", "readonly"], showDiff: ["p-show-diff", "showDiff"], suggestions: ["p-suggestions", "suggestions"], theme: ["p-theme", "theme"], height: ["p-height", "height"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorBaseComponent, [{
        type: Directive
    }], null, { language: [{
            type: Input,
            args: ['p-language']
        }], readonly: [{
            type: Input,
            args: ['p-readonly']
        }], showDiff: [{
            type: Input,
            args: ['p-show-diff']
        }], suggestions: [{
            type: Input,
            args: ['p-suggestions']
        }], theme: [{
            type: Input,
            args: ['p-theme']
        }], height: [{
            type: Input,
            args: ['p-height']
        }] }); })();

class PoCodeEditorSuggestionService {
    constructor() {
        this.suggestions = {};
    }
    getSuggestion(language, newSuggestion) {
        if (this.suggestions[language]) {
            const deduplicateSuggestions = this.deduplicateSuggestions(this.suggestions[language], newSuggestion);
            this.suggestions[language] = [...this.suggestions[language], ...deduplicateSuggestions];
            return deduplicateSuggestions;
        }
        else {
            return (this.suggestions[language] = [...newSuggestion]);
        }
    }
    deduplicateSuggestions(originalSuggestions, newSuggestions) {
        return newSuggestions.filter(newItem => !originalSuggestions.find(originalItem => originalItem['label'] === newItem['label']));
    }
}
PoCodeEditorSuggestionService.ɵfac = function PoCodeEditorSuggestionService_Factory(t) { return new (t || PoCodeEditorSuggestionService)(); };
PoCodeEditorSuggestionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoCodeEditorSuggestionService, factory: PoCodeEditorSuggestionService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorSuggestionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @description
 *
 * Wrapper para registro de sintaxes customizadas para o po-code-editor.
 *
 * Para utilização do serviço de idiomas **PoCodeEditorRegister**,
 * deve-se importar o módulo PoCodeEditorModule mesmo já tendo importado
 * o módulo PoModule.
 * Na importação opcionalmente pode ser invocado o método **forRegister** informando um objeto para configuração.
 *
 * Exemplo de configuração:
 * ```
 * import { PoCodeEditorModule, PoCodeEditorRegisterable } from '@po-ui/ng-code-editor';
 *
 * declare const monaco: any; // Importante para usar configurações com tipos definidos pelo Monaco
 *
 * // A função `provideCompletionItems` precisa ser exportada para ser compatível com AOT.
 * export function provideCompletionItems() {
 *   const suggestions = [{
 *     label: 'terraform',
 *     insertText: '#terraform language'
 *   }, {
 *     label: 'server',
 *     insertText: 'server ${1:ip}'
 *   }];
 *
 *   return { suggestions: suggestions };
 * }
 *
 * const customEditor: PoCodeEditorRegisterable = {
 *   language: 'terraform',
 *   options: {
 *     keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],
 *     operators: ['{', '}', '(', ')', '[', ']', '?', ':'],
 *     symbols:  /[=><!~?:&|+\-*\/\^%]+/,
 *     escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
 *     tokenizer: {
 *      ...
 *     }
 *   },
 *   suggestions: { provideCompletionItems: provideCompletionItems }
 * };
 *
 * @NgModule({
 *   declarations: [],
 *   imports: [
 *     PoModule,
 *     PoCodeEditorModule.forRegister(customEditor)
 *   ],
 *   bootstrap: [AppComponent]
 * })
 * ```
 *
 * > As configurações para o registro de uma nova sintaxe no Monaco code editor podem ser encontradas em
 * > [**Monaco Editor**](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages).
 */
class PoCodeEditorRegister {
}
PoCodeEditorRegister.ɵfac = function PoCodeEditorRegister_Factory(t) { return new (t || PoCodeEditorRegister)(); };
PoCodeEditorRegister.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoCodeEditorRegister, factory: PoCodeEditorRegister.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorRegister, [{
        type: Injectable
    }], null, null); })();

const _c0 = ["editorContainer"];
// variáveis relacionadas ao Monaco
let loadedMonaco = false;
let loadPromise;
/* istanbul ignore next */
const providers = [
    {
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line
        useExisting: forwardRef(() => PoCodeEditorComponent),
        multi: true
    }
];
/**
 * @docsExtends PoCodeEditorBaseComponent
 *
 * @example
 *
 * <example name="po-code-editor-basic" title="PO Code Editor Basic">
 *  <file name="sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"> </file>
 *  <file name="sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-labs" title="PO Code Editor Labs">
 *  <file name="sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"> </file>
 *  <file name="sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-diff" title="PO Code Editor - Diff">
 *  <file name="sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"> </file>
 *  <file name="sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-terraform" title="PO Code Editor - Terraform">
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"> </file>
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"> </file>
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"> </file>
 *  <file name="sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"> </file>
 * </example>
 *
 * <example name="po-code-editor-suggestion" title="PO Code Editor Suggestion">
 *  <file name="sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"> </file>
 *  <file name="sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"> </file>
 * </example>
 */
class PoCodeEditorComponent extends PoCodeEditorBaseComponent {
    constructor(zone, el, poCodeEditorSuggestionService, codeEditorRegister) {
        super();
        this.zone = zone;
        this.el = el;
        this.poCodeEditorSuggestionService = poCodeEditorSuggestionService;
        this.codeEditorRegister = codeEditorRegister;
        this.canLoad = false;
    }
    /* istanbul ignore next */
    ngAfterViewInit() {
        if (loadedMonaco) {
            /* istanbul ignore next */
            loadPromise.then(() => {
                setTimeout(() => {
                    if (this.el.nativeElement.offsetWidth) {
                        this.registerCustomLanguage();
                        this.initMonaco(this.getOptions());
                    }
                    else {
                        this.canLoad = true;
                    }
                });
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise((resolve) => {
                /* istanbul ignore next */
                const onGotAmdLoader = () => {
                    window.require.config({ paths: { 'vs': './assets/monaco/vs' } });
                    window.require(['vs/editor/editor.main'], () => {
                        setTimeout(() => {
                            if (this.el.nativeElement.offsetWidth) {
                                this.registerCustomLanguage();
                                this.initMonaco(this.getOptions());
                            }
                            else {
                                this.canLoad = true;
                            }
                            resolve();
                        });
                    });
                };
                if (!window.require) {
                    const loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = './assets/monaco/vs/loader.js';
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
            });
        }
    }
    ngDoCheck() {
        if (this.canLoad && this.el.nativeElement.offsetWidth) {
            this.registerCustomLanguage();
            this.initMonaco(this.getOptions());
            this.canLoad = false;
        }
    }
    /* istanbul ignore next */
    monacoCreateModel(value) {
        return monaco.editor.createModel(value);
    }
    setValueInEditor() {
        if (this.showDiff) {
            setTimeout(() => {
                if (this.editor) {
                    this.editor.setModel({
                        original: this.monacoCreateModel(this.value),
                        modified: this.monacoCreateModel(this.modifiedValue)
                    });
                }
            });
        }
        else {
            setTimeout(() => {
                if (this.editor) {
                    this.editor.setValue(this.value);
                }
            });
        }
    }
    setLanguage(language) {
        if (this.showDiff) {
            this.setMonacoLanguage(this.editor.getModel().original, language);
            this.setMonacoLanguage(this.editor.getModel().modified, language);
        }
        else {
            this.setMonacoLanguage(this.editor.getModel(), language);
        }
    }
    /* istanbul ignore next */
    setTheme(theme) {
        monaco.editor.setTheme(theme);
    }
    setReadOnly(readOnly) {
        this.editor.updateOptions({ readOnly: readOnly });
    }
    /* istanbul ignore next */
    setSuggestions(newSuggestions, language = this.language) {
        if (!newSuggestions) {
            return;
        }
        const suggestions = this.poCodeEditorSuggestionService.getSuggestion(language, newSuggestions);
        monaco.languages.registerCompletionItemProvider(language, {
            provideCompletionItems: () => ({ suggestions })
        });
    }
    writeValue(value) {
        this.value = value && value instanceof Array ? value[0] : value;
        this.modifiedValue = value && value instanceof Array && value.length > 0 ? value[1] : '';
        this.setValueInEditor();
    }
    /* istanbul ignore next */
    initMonaco(options) {
        if (this.showDiff) {
            this.editor = monaco.editor.createDiffEditor(this.editorContainer.nativeElement, options);
            this.editor.setModel({
                original: monaco.editor.createModel(this.value),
                modified: monaco.editor.createModel(this.modifiedValue)
            });
            this.editor.onDidUpdateDiff((e) => {
                const original = this.editor.getModel().original.getValue();
                const modified = this.editor.getModel().modified.getValue();
                this.onChangePropagate([original, modified]);
            });
        }
        else {
            this.editor = monaco.editor.create(this.editorContainer.nativeElement, options);
            this.editor.setValue(this.value);
            this.editor.onDidChangeModelContent((e) => {
                const value = this.editor.getValue();
                this.onChangePropagate(value);
                this.zone.run(() => (this.value = value));
            });
        }
        setTimeout(() => {
            this.setLanguage(this.language);
            this.setSuggestions(this.suggestions);
        }, 500);
    }
    /* istanbul ignore next */
    setMonacoLanguage(model, language) {
        monaco.editor.setModelLanguage(model, language);
    }
    registerCustomLanguage() {
        if (this.codeEditorRegister.language) {
            monaco.languages.register({ id: this.codeEditorRegister.language });
            if (this.codeEditorRegister.options) {
                monaco.languages.setMonarchTokensProvider(this.codeEditorRegister.language, this.codeEditorRegister.options);
            }
            if (this.codeEditorRegister.suggestions) {
                this.setSuggestions(this.codeEditorRegister.suggestions.provideCompletionItems().suggestions, this.codeEditorRegister.language);
            }
        }
    }
}
PoCodeEditorComponent.ɵfac = function PoCodeEditorComponent_Factory(t) { return new (t || PoCodeEditorComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PoCodeEditorSuggestionService), i0.ɵɵdirectiveInject(PoCodeEditorRegister)); };
PoCodeEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoCodeEditorComponent, selectors: [["po-code-editor"]], viewQuery: function PoCodeEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorContainer = _t.first);
    } }, features: [i0.ɵɵProvidersFeature(providers), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["editorContainer", ""]], template: function PoCodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorComponent, [{
        type: Component,
        args: [{ selector: 'po-code-editor', providers: providers, template: "<div #editorContainer [style.height]=\"height\"></div>\r\n" }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: PoCodeEditorSuggestionService }, { type: PoCodeEditorRegister }]; }, { editorContainer: [{
            type: ViewChild,
            args: ['editorContainer', { static: true }]
        }] }); })();

/**
 * @description
 *
 * Módulo do componente po-code-editor.
 */
class PoCodeEditorModule {
    static forRegister(props) {
        return {
            ngModule: PoCodeEditorModule,
            providers: [
                {
                    provide: PoCodeEditorRegister,
                    useValue: props
                }
            ]
        };
    }
}
PoCodeEditorModule.ɵfac = function PoCodeEditorModule_Factory(t) { return new (t || PoCodeEditorModule)(); };
PoCodeEditorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoCodeEditorModule });
PoCodeEditorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoCodeEditorRegister], imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PoCodeEditorComponent],
                exports: [PoCodeEditorComponent],
                providers: [PoCodeEditorRegister]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoCodeEditorModule, { declarations: [PoCodeEditorComponent], imports: [CommonModule], exports: [PoCodeEditorComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PoCodeEditorComponent, PoCodeEditorModule, PoCodeEditorRegister };
//# sourceMappingURL=po-ui-ng-code-editor.mjs.map
