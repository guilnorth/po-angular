import { ControlValueAccessor } from '@angular/forms';
import { PoCodeEditorRegisterableSuggestion } from './interfaces/po-code-editor-registerable-suggestion.interface';
import * as i0 from "@angular/core";
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
export declare abstract class PoCodeEditorBaseComponent implements ControlValueAccessor {
    editor: any;
    modifiedValue: string;
    value: any;
    private _height;
    private _language;
    private _readonly;
    private _showDiff;
    private _suggestions;
    private _theme;
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
    set language(language: string);
    get language(): string;
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
    set readonly(readonly: boolean);
    get readonly(): boolean;
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
    set showDiff(showDiff: boolean);
    get showDiff(): boolean;
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
    set suggestions(values: Array<PoCodeEditorRegisterableSuggestion>);
    get suggestions(): Array<PoCodeEditorRegisterableSuggestion>;
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
    set theme(theme: string);
    get theme(): string;
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do componente em pixels do po-code-editor.
     * Esta propriedade não poderá ser alterada após o componente ter sido iniciado.
     * A altura mínima é 150 pixels.
     */
    set height(height: string);
    get height(): string;
    onTouched: (value: any) => void;
    onChangePropagate: (value: any) => void;
    getOptions(): {
        language: string;
        theme: string;
        readOnly: boolean;
    };
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    protected convertToBoolean(val: any): boolean;
    abstract writeValue(value: any): any;
    abstract setLanguage(value: any): any;
    abstract setTheme(value: any): any;
    abstract setReadOnly(value: any): any;
    abstract setSuggestions(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCodeEditorBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoCodeEditorBaseComponent, never, never, { "language": "p-language"; "readonly": "p-readonly"; "showDiff": "p-show-diff"; "suggestions": "p-suggestions"; "theme": "p-theme"; "height": "p-height"; }, {}, never, never, false>;
}
