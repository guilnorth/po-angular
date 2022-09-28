import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
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
export class PoCodeEditorBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29kZS1lZGl0b3ItYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb2RlLWVkaXRvci9zcmMvbGliL2NvbXBvbmVudHMvcG8tY29kZS1lZGl0b3IvcG8tY29kZS1lZGl0b3ItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2pELE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzVELE1BQU0sNEJBQTRCLEdBQUcsSUFBSSxDQUFDO0FBRTFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5REc7QUFFSCxNQUFNLE9BQWdCLHlCQUF5QjtJQUQvQztRQUdFLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFUixZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxXQUFXLENBQUM7UUFDeEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztRQStKOUMsMEJBQTBCO1FBQzFCLGNBQVMsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQy9CLDBCQUEwQjtRQUMxQixzQkFBaUIsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBb0N4QztJQXBNQzs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLFFBQWdCO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEs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R0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVTLGdCQUFnQixDQUFDLEdBQVE7UUFDakMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQixPQUFPLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7a0dBck1tQix5QkFBeUI7NEVBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBRDlDLFNBQVM7Z0JBMkJpQixRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUF5Qk0sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBNEJPLFFBQVE7a0JBQWpDLEtBQUs7bUJBQUMsYUFBYTtZQStCUSxXQUFXO2tCQUF0QyxLQUFLO21CQUFDLGVBQWU7WUE4QkEsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTO1lBcUJPLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQb0NvZGVFZGl0b3JSZWdpc3RlcmFibGVTdWdnZXN0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNvZGUtZWRpdG9yLXJlZ2lzdGVyYWJsZS1zdWdnZXN0aW9uLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBQT19DT0RFX0VESVRPUl9USEVNRVMgPSBbJ3ZzLWRhcmsnLCAndnMnLCAnaGMtYmxhY2snXTtcclxuY29uc3QgUE9fQ09ERV9FRElUT1JfVEhFTUVfREVGQVVMVCA9ICd2cyc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gYHBvLWNvZGUtZWRpdG9yYCDDqSB1bSBjb21wb25lbnRlIHBhcmEgZWRpw6fDo28gZGUgY8OzZGlnbyBmb250ZSBiYXNlYWRvIG5vIE1vbmFjbyBFZGl0b3IgZGEgTWljcm9zb2Z0LlxyXG4gKlxyXG4gKiBTZW5kbyBhc3NpbSwgYWxndW1hcyBjb25maWd1cmHDp8O1ZXMgcHJlc2VudGVzIG5vIE1vbmFjbyBwb2RlbSBzZXIgdXRpbGl6YWRhcyBhcXVpLCBjb21vIGEgZXNjb2xoYSBkYSBsaW5ndWFnZW1cclxuICogKHV0aWxpemFuZG8gbyBoaWdobGlnaHQgc3ludGF4IGVzcGVjw61maWNvKSwgZXNjb2xoYSBkbyB0ZW1hIGUgb3DDp8OjbyBkZSBkaWZmLCBhbMOpbSBkZSBzZXIgbXVpdG8gc2ltaWxhciBhbyBWaXN1YWxcclxuICogU3R1ZGlvIENvZGUsIGNvbSBhdXRvY29tcGxldGUgZSBmZWNoYW1lbnRvIGF1dG9tw6F0aWNvIGRlIGJyYWNrZXRzLlxyXG4gKlxyXG4gKiBFc3RlIGNvbXBvbmVudGUgcG9kZSBzZXIgdXNhZG8gZW0gcXVhbHF1ZXIgc2l0dWHDp8OjbyBxdWUgbmVjZXNzaXRlIGRlIGFkacOnw6NvIGRlIGPDs2RpZ29zLCBjb21vIHBvciBleGVtcGxvLCBjcmlhclxyXG4gKiByZWNlaXRhcyB1dGlsaXphbmRvIFRlcnJhZm9ybSBwYXJhIGdlcmVuY2lhciB0b3BvbG9naWFzLlxyXG4gKiDDiSBpbXBvcnRhbnRlIHJlc3NhbHRhciBxdWUgZXN0ZSBuw6NvIMOpIHVtIGNvbXBvbmVudGUgcGFyYSBlZGnDp8OjbyBkZSB0ZXh0b3MgY29tdW5zLlxyXG4gKlxyXG4gKiBPIFsobmdNb2RlbCldIGRldmUgc2VyIHVzYWRvIHBhcmEgbWFuaXB1bGFyIG8gY29udGXDumRvIGRvIHBvLWNvZGUtZWRpdG9yLCBvdSBzZWphLCB0YW50byBwYXJhIGluY2x1aXIgdW0gY29udGXDumRvIHF1YW50b1xyXG4gKiBwYXJhIHJlY3VwZXJhciBvIGNvbnRlw7pkbyBkbyBwby1jb2RlLWVkaXRvciwgdXRpbGl6YS1zZSB1bWEgdmFyacOhdmVsIHBhc3NhZGEgcG9yIFsobmdNb2RlbCldLlxyXG4gKlxyXG4gKiAjIyMjIEFkaWNpb25hbmRvIG8gcGFjb3RlIEBwby11aS9uZy1jb2RlLWVkaXRvclxyXG4gKlxyXG4gKiBQYXJhIGluc3RhbGFyIG8gcGFjb3RlIGBwby1jb2RlLWVkaXRvcmAgZW0gc3VhIGFwbGljYcOnw6NvIGV4ZWN1dGU6XHJcbiAqXHJcbiAqIGBgYHNoZWxsXHJcbiAqIG5nIGFkZCBAcG8tdWkvbmctY29kZS1lZGl0b3JcclxuICogYGBgXHJcbiAqXHJcbiAqIE8gY29tYW5kbyBgbmcgYWRkYCBkbyBgQW5ndWxhciBDTElgOlxyXG4gKiAtIGluY2x1aSBvIGBwby1jb2RlLWVkaXRvcmAgbm8gc2V1IHByb2pldG87XHJcbiAqIC0gYWRpY2lvbmEgbyBtw7NkdWxvIGBQb0NvZGVFZGl0b3JNb2R1bGVgOjtcclxuICpcclxuICogYGBgXHJcbiAqIC8vIGFwcC5tb2R1bGUudHNcclxuICogLi4uXHJcbiAqIGltcG9ydCB7IFBvTW9kdWxlIH0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG4gKiBpbXBvcnQgeyBQb0NvZGVFZGl0b3JNb2R1bGUgfSBmcm9tICdAcG8tdWkvbmctY29kZS1lZGl0b3InO1xyXG4gKiAuLi5cclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICAuLi5cclxuICogICAgIFBvTW9kdWxlLFxyXG4gKiAgICAgUG9Db2RlRWRpdG9yTW9kdWxlXHJcbiAqICAgXSxcclxuICogICAuLi5cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqXHJcbiAqIC0gYWRpY2lvbmEgbyB0ZW1hIFBPIFVJIGUgdGFtYsOpbSBvICphc3NldCogZG8gTW9uYWNvIG5vIGFycXVpdm8gYGFuZ3VsYXIuanNvbmAsIGNvbmZvcm1lIGFiYWl4bzpcclxuICpcclxuICogPHByZSBuZ05vbkJpbmRhYmxlPlxyXG4gKiAuLi5cclxuICogXCJhc3NldHNcIjogW1xyXG4gKiAgICB7IFwiZ2xvYlwiOiBcIiYjNDI7JiM0MjsvJiM0MjtcIiwgXCJpbnB1dFwiOiBcIm5vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL21pblwiLCBcIm91dHB1dFwiOiBcIi9hc3NldHMvbW9uYWNvL1wiIH1cclxuICogIF0sXHJcbiAqIFwic3R5bGVzXCI6IFtcclxuICogICAgXCIuL25vZGVfbW9kdWxlcy9AcG8tdWkvc3R5bGUvY3NzL3BvLXRoZW1lLWRlZmF1bHQubWluLmNzc1wiXHJcbiAqIF1cclxuICogLi4uXHJcbiAqIDwvcHJlPlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0NvZGVFZGl0b3JCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIGVkaXRvcjogYW55O1xyXG4gIG1vZGlmaWVkVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHZhbHVlOiBhbnkgPSAnJztcclxuXHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSAxNTA7XHJcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2UgPSAncGxhaW5UZXh0JztcclxuICBwcml2YXRlIF9yZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dEaWZmOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3VnZ2VzdGlvbnM6IEFycmF5PFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24+O1xyXG4gIHByaXZhdGUgX3RoZW1lID0gUE9fQ09ERV9FRElUT1JfVEhFTUVfREVGQVVMVDtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIExpbmd1YWdlbSBuYSBxdWFsIHNlcsOhIGFwcmVzZW50YWRvIG8gY8OzZGlnbyBmb250ZS5cclxuICAgKiBQYXJhIHNhYmVyIHF1YWlzIHPDo28gYXMgbGluZ3VhZ2VucyBjb21wYXTDrXZlaXMsIGNvbnN1bHRlIGEgZG9jdW1lbnRhw6fDo28gb2ZpY2lhbCBkb1xyXG4gICAqIFsqKk1vbmFjbyBFZGl0b3IqKl0oaHR0cHM6Ly9taWNyb3NvZnQuZ2l0aHViLmlvL21vbmFjby1lZGl0b3IvKS5cclxuICAgKlxyXG4gICAqIFRhbWLDqW0gw6kgcG9zc8OtdmVsIGFkaWNpb25hciB1bWEgbm92YSBsaW5ndWFnZW0gcGVyc29uYWxpemFkYSB1dGlsaXphbmRvIG8gc2VydmnDp286XHJcbiAgICogWyoqcG8tY29kZS1lZGl0b3ItcmVnaXN0ZXIqKl0oaHR0cHM6Ly9wby11aS5pby9kb2N1bWVudGF0aW9uL3BvLWNvZGUtZWRpdG9yLXJlZ2lzdGVyP3ZpZXc9ZG9jKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBwbGFpblRleHRgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxhbmd1YWdlJykgc2V0IGxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2UgJiYgbGFuZ3VhZ2UubGVuZ3RoID8gbGFuZ3VhZ2UudHJpbSgpIDogJ3BsYWluVGV4dCc7XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuX2xhbmd1YWdlKSB7XHJcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5fbGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHNlIG8gZWRpdG9yIHNlcsOhIGFiZXJ0byBlbSBtb2RvIGRlIGxlaXR1cmEuXHJcbiAgICpcclxuICAgKiBOZXN0ZSBjYXNvLCBuw6NvIMOpIHBvc3PDrXZlbCBlZGl0YXIgbyBjw7NkaWdvIGluc2VyaWRvLlxyXG4gICAqXHJcbiAgICogT2JzOiBFc3RhIHByb3ByaWVkYWRlIG7Do28gcmVmbGV0aXLDoSBlZmVpdG8gc2UgYWx0ZXJhZGEgYXDDs3MgbyBjYXJyZWdhbWVudG8gZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcmVhZG9ubHknKSBzZXQgcmVhZG9ubHkocmVhZG9ubHk6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JlYWRvbmx5ID0gPGFueT5yZWFkb25seSA9PT0gJycgPyB0cnVlIDogdGhpcy5jb252ZXJ0VG9Cb29sZWFuKHJlYWRvbmx5KTtcclxuXHJcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgdGhpcy5zZXRSZWFkT25seShyZWFkb25seSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHNlIG8gZWRpdG9yIHNlcsOhIGFiZXJ0byBlbSBtb2RvIGRlIGNvbXBhcmHDp8Ojby5cclxuICAgKlxyXG4gICAqIENhc28gZXN0ZWphIGhhYmlsaXRhZGEgZXN0YSBvcMOnw6NvLCBlbnTDo28gbyBbKG5nTW9kZWwpXSBkZXZlcsOhIHNlciBwYXNzYWRvIGNvbW8gdW0gYXJyYXksIGN1amEgcHJpbWVpcmEgb3DDp8OjbyBkZXZlXHJcbiAgICogY29udGVyIHVtYSBzdHJpbmcgY29tIG8gY8OzZGlnbyBvcmlnaW5hbCBlIG5hIHNlZ3VuZGEgcG9zacOnw6NvIHVtYSBzdHJpbmcgY8OzZGlnbyBtb2RpZmljYWRvIHBhcmEgZWZlaXRvIGRlXHJcbiAgICogY29tcGFyYcOnw6NvLiBOZXN0ZSBjYXNvLCBvIHVzdcOhcmlvIGNvbnNlZ3VpcsOhIGVkaXRhciBhcGVuYXMgbyBjw7NkaWdvIG1vZGlmaWNhZG8gZSBpc3NvIHJlZmxldGlyw6EgbmEgc2VndW5kYSBwb3Npw6fDo29cclxuICAgKiBkbyBhcnJheSBjb25zZXF1ZW50ZW1lbnRlLlxyXG4gICAqXHJcbiAgICogT2JzOiBFc3RhIHByb3ByaWVkYWRlIG7Do28gcmVmbGV0aXLDoSBlZmVpdG8gc2UgYWx0ZXJhZGEgYXDDs3MgbyBjYXJyZWdhbWVudG8gZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2hvdy1kaWZmJykgc2V0IHNob3dEaWZmKHNob3dEaWZmOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93RGlmZiA9IDxhbnk+c2hvd0RpZmYgPT09ICcnID8gdHJ1ZSA6IHRoaXMuY29udmVydFRvQm9vbGVhbihzaG93RGlmZik7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0RpZmYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd0RpZmY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZGUgc3VnZXN0w7VlcyB1c2FkYXMgcGVsbyBhdXRvY29tcGxldGUgZGVudHJvIGRvIGVkaXRvci5cclxuICAgKlxyXG4gICAqIFBhcmEgdmlzdWFsaXphciBhIGxpc3RhIGRlIHN1Z2VzdMO1ZXMgdXNlIG8gY29tYW5kbyBgQ1RSTCArIFNQQUNFYC5cclxuICAgKlxyXG4gICAqIENhc28gbyBlZGl0b3IgZXN0ZWphIHVzYW5kbyB1bWEgbGluZ3VhZ2VtIHF1ZSBqw6EgdGVuaGEgdW1hIGxpc3RhIGRlIHN1Z2VzdMO1ZXMgcHJlZGVmaW5pZGEsIG8gdmFsb3IgcGFzc2FkbyBzZXLDoSBhZGljaW9uYWRvXHJcbiAgICogYSBsaXN0YSBwcmVleGlzdGVudGUsIGF1bWVudGFuZG8gYXMgb3DDp8O1ZXMgcGFyYSBvIHVzdcOhcmlvLlxyXG4gICAqXHJcbiAgICogQ2FzbyB0ZW5oYSBtYWlzIGRlIHVtIGVkaXRvciBkYSBtZXNtYSBsaW5ndWFnZW0gbmEgYXBsaWNhw6fDo28sIGFzIHN1Z2VzdMO1ZXMgc2Vyw6NvIGFkaWNpb25hZGFzIHBhcmEgcXVlIHRvZG9zIG9zIGVkaXRvcmVzIGRhIG1lc21hIGxpbmd1YWdlbVxyXG4gICAqIHRlbmhhbSBhcyBtZXNtYXMgc3VnZXN0w7Vlcy5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICA8cG8tY29kZS1lZGl0b3JcclxuICAgKiAgICBbcC1zdWdnZXN0aW9uc109XCJbeyBsYWJlbDogJ3BvJywgaW5zZXJ0VGV4dDogJ1BvcnRpbmFyaSBVSScgfSwgeyBsYWJlbDogJ25nJywgaW5zZXJ0VGV4dDogJ0FuZ3VsYXInIH1dXCI+XHJcbiAgICogIDwvcG8tY29kZS1lZGl0b3I+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBBbyBmb3JuZWNlciB1bWEgbGlzdGEgZGUgc3VnZXN0w7VlcyDDqSBwb3Nzw612ZWwgYWNlbGVyYXIgYSBlc2NyaXRhIGRlIHNjcmlwdHMgcGVsb3MgdXN1w6FyaW9zLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zdWdnZXN0aW9ucycpIHNldCBzdWdnZXN0aW9ucyh2YWx1ZXM6IEFycmF5PFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24+KSB7XHJcbiAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IHZhbHVlcztcclxuXHJcbiAgICBpZiAodGhpcy5lZGl0b3IgJiYgdGhpcy5fc3VnZ2VzdGlvbnMpIHtcclxuICAgICAgdGhpcy5zZXRTdWdnZXN0aW9ucyh0aGlzLl9zdWdnZXN0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc3VnZ2VzdGlvbnMoKTogQXJyYXk8UG9Db2RlRWRpdG9yUmVnaXN0ZXJhYmxlU3VnZ2VzdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSB1bSB0ZW1hIHBhcmEgbyBlZGl0b3IuXHJcbiAgICpcclxuICAgKiBUZW1hcyB2w6FsaWRvczpcclxuICAgKiAgLSBgdnMtZGFya2BcclxuICAgKiAgLSBgdnNgXHJcbiAgICogIC0gYGhjLWJsYWNrYFxyXG4gICAqXHJcbiAgICogw4kgaW1wb3J0YW50ZSBzYWxpZW50YXIgcXVlIG8gdGVtYSBzZXLDoSBhcGxpY2Fkb3MgYSB0b2RvcyBvcyBjb21wb25lbnRlcyBwby1jb2RlLWVkaXRvciBleGlzdGVudGVzIG5hIHRlbGEsXHJcbiAgICogb3Ugc2VqYSwgdG9kYXMgYXMgaW5zdMOibmNpYXMgZG8gY29tcG9uZW50ZSByZWNlYmVyw6NvIG8gw7psdGltbyB0ZW1hIGF0cmlidcOtZG8gb3UgbyB0ZW1hIGRhIMO6bHRpbWEgaW5zdMOibmNpYVxyXG4gICAqIGNyaWFkYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGB2c2BcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdGhlbWUnKSBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGhlbWUgPSBQT19DT0RFX0VESVRPUl9USEVNRVMuaW5jbHVkZXModGhlbWUpID8gdGhlbWUgOiBQT19DT0RFX0VESVRPUl9USEVNRV9ERUZBVUxUO1xyXG5cclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLnNldFRoZW1lKHRoZW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBhIGFsdHVyYSBkbyBjb21wb25lbnRlIGVtIHBpeGVscyBkbyBwby1jb2RlLWVkaXRvci5cclxuICAgKiBFc3RhIHByb3ByaWVkYWRlIG7Do28gcG9kZXLDoSBzZXIgYWx0ZXJhZGEgYXDDs3MgbyBjb21wb25lbnRlIHRlciBzaWRvIGluaWNpYWRvLlxyXG4gICAqIEEgYWx0dXJhIG3DrW5pbWEgw6kgMTUwIHBpeGVscy5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaGVpZ2h0Jykgc2V0IGhlaWdodChoZWlnaHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gcGFyc2VGbG9hdChoZWlnaHQpID49IDE1MCA/IHBhcnNlRmxvYXQoaGVpZ2h0KSA6IDE1MDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLl9oZWlnaHR9cHhgO1xyXG4gIH1cclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBvblRvdWNoZWQgPSAodmFsdWU6IGFueSkgPT4ge307XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBvbkNoYW5nZVByb3BhZ2F0ZSA9ICh2YWx1ZTogYW55KSA9PiB7fTtcclxuXHJcbiAgZ2V0T3B0aW9ucygpIHtcclxuICAgIHJldHVybiB7IGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLCB0aGVtZTogdGhpcy50aGVtZSwgcmVhZE9ubHk6IHRoaXMucmVhZG9ubHkgfTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0ZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjb252ZXJ0VG9Cb29sZWFuKHZhbDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICByZXR1cm4gdmFsID09PSAndHJ1ZScgfHwgdmFsID09PSAnb24nIHx8IHZhbCA9PT0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiB2YWwgPT09IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhdmFsO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3Qgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTtcclxuXHJcbiAgYWJzdHJhY3Qgc2V0TGFuZ3VhZ2UodmFsdWU6IGFueSk7XHJcblxyXG4gIGFic3RyYWN0IHNldFRoZW1lKHZhbHVlOiBhbnkpO1xyXG5cclxuICBhYnN0cmFjdCBzZXRSZWFkT25seSh2YWx1ZTogYW55KTtcclxuXHJcbiAgYWJzdHJhY3Qgc2V0U3VnZ2VzdGlvbnModmFsdWU6IGFueSk7XHJcbn1cclxuIl19