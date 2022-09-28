import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
export class PoCodeEditorRegister {
}
PoCodeEditorRegister.ɵfac = function PoCodeEditorRegister_Factory(t) { return new (t || PoCodeEditorRegister)(); };
PoCodeEditorRegister.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoCodeEditorRegister, factory: PoCodeEditorRegister.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorRegister, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29kZS1lZGl0b3ItcmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvZGUtZWRpdG9yL3NyYy9saWIvY29tcG9uZW50cy9wby1jb2RlLWVkaXRvci9wby1jb2RlLWVkaXRvci1yZWdpc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdURHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NvZGVFZGl0b3JSZWdpc3RlcmFibGUgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29kZS1lZGl0b3ItcmVnaXN0ZXJhYmxlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29kZS1lZGl0b3ItcmVnaXN0ZXJhYmxlLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Db2RlRWRpdG9yUmVnaXN0ZXJhYmxlU3VnZ2VzdGlvblR5cGUgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29kZS1lZGl0b3ItcmVnaXN0ZXJhYmxlLXN1Z2dlc3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogV3JhcHBlciBwYXJhIHJlZ2lzdHJvIGRlIHNpbnRheGVzIGN1c3RvbWl6YWRhcyBwYXJhIG8gcG8tY29kZS1lZGl0b3IuXHJcbiAqXHJcbiAqIFBhcmEgdXRpbGl6YcOnw6NvIGRvIHNlcnZpw6dvIGRlIGlkaW9tYXMgKipQb0NvZGVFZGl0b3JSZWdpc3RlcioqLFxyXG4gKiBkZXZlLXNlIGltcG9ydGFyIG8gbcOzZHVsbyBQb0NvZGVFZGl0b3JNb2R1bGUgbWVzbW8gasOhIHRlbmRvIGltcG9ydGFkb1xyXG4gKiBvIG3Ds2R1bG8gUG9Nb2R1bGUuXHJcbiAqIE5hIGltcG9ydGHDp8OjbyBvcGNpb25hbG1lbnRlIHBvZGUgc2VyIGludm9jYWRvIG8gbcOpdG9kbyAqKmZvclJlZ2lzdGVyKiogaW5mb3JtYW5kbyB1bSBvYmpldG8gcGFyYSBjb25maWd1cmHDp8Ojby5cclxuICpcclxuICogRXhlbXBsbyBkZSBjb25maWd1cmHDp8OjbzpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IFBvQ29kZUVkaXRvck1vZHVsZSwgUG9Db2RlRWRpdG9yUmVnaXN0ZXJhYmxlIH0gZnJvbSAnQHBvLXVpL25nLWNvZGUtZWRpdG9yJztcclxuICpcclxuICogZGVjbGFyZSBjb25zdCBtb25hY286IGFueTsgLy8gSW1wb3J0YW50ZSBwYXJhIHVzYXIgY29uZmlndXJhw6fDtWVzIGNvbSB0aXBvcyBkZWZpbmlkb3MgcGVsbyBNb25hY29cclxuICpcclxuICogLy8gQSBmdW7Dp8OjbyBgcHJvdmlkZUNvbXBsZXRpb25JdGVtc2AgcHJlY2lzYSBzZXIgZXhwb3J0YWRhIHBhcmEgc2VyIGNvbXBhdMOtdmVsIGNvbSBBT1QuXHJcbiAqIGV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcGxldGlvbkl0ZW1zKCkge1xyXG4gKiAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gW3tcclxuICogICAgIGxhYmVsOiAndGVycmFmb3JtJyxcclxuICogICAgIGluc2VydFRleHQ6ICcjdGVycmFmb3JtIGxhbmd1YWdlJ1xyXG4gKiAgIH0sIHtcclxuICogICAgIGxhYmVsOiAnc2VydmVyJyxcclxuICogICAgIGluc2VydFRleHQ6ICdzZXJ2ZXIgJHsxOmlwfSdcclxuICogICB9XTtcclxuICpcclxuICogICByZXR1cm4geyBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnMgfTtcclxuICogfVxyXG4gKlxyXG4gKiBjb25zdCBjdXN0b21FZGl0b3I6IFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZSA9IHtcclxuICogICBsYW5ndWFnZTogJ3RlcnJhZm9ybScsXHJcbiAqICAgb3B0aW9uczoge1xyXG4gKiAgICAga2V5d29yZHM6IFsncmVzb3VyY2UnLCAncHJvdmlkZXInLCAndmFyaWFibGUnLCAnb3V0cHV0JywgJ21vZHVsZScsICd0cnVlJywgJ2ZhbHNlJ10sXHJcbiAqICAgICBvcGVyYXRvcnM6IFsneycsICd9JywgJygnLCAnKScsICdbJywgJ10nLCAnPycsICc6J10sXHJcbiAqICAgICBzeW1ib2xzOiAgL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAqICAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gKiAgICAgdG9rZW5pemVyOiB7XHJcbiAqICAgICAgLi4uXHJcbiAqICAgICB9XHJcbiAqICAgfSxcclxuICogICBzdWdnZXN0aW9uczogeyBwcm92aWRlQ29tcGxldGlvbkl0ZW1zOiBwcm92aWRlQ29tcGxldGlvbkl0ZW1zIH1cclxuICogfTtcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFBvTW9kdWxlLFxyXG4gKiAgICAgUG9Db2RlRWRpdG9yTW9kdWxlLmZvclJlZ2lzdGVyKGN1c3RvbUVkaXRvcilcclxuICogICBdLFxyXG4gKiAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqID4gQXMgY29uZmlndXJhw6fDtWVzIHBhcmEgbyByZWdpc3RybyBkZSB1bWEgbm92YSBzaW50YXhlIG5vIE1vbmFjbyBjb2RlIGVkaXRvciBwb2RlbSBzZXIgZW5jb250cmFkYXMgZW1cclxuICogPiBbKipNb25hY28gRWRpdG9yKipdKGh0dHBzOi8vbWljcm9zb2Z0LmdpdGh1Yi5pby9tb25hY28tZWRpdG9yL3BsYXlncm91bmQuaHRtbCNleHRlbmRpbmctbGFuZ3VhZ2Utc2VydmljZXMtY3VzdG9tLWxhbmd1YWdlcykuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0NvZGVFZGl0b3JSZWdpc3RlciBpbXBsZW1lbnRzIFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZSB7XHJcbiAgLyoqIFNpbnRheGUgYSBzZXIgcmVnaXN0cmFkYS4gKi9cclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG5cclxuICAvKiogT3DDp8O1ZXMgZGEgc2ludGF4ZSBwYXJhIHJlZ2lzdHJvIG5vIHBvLWNvZGUtZWRpdG9yLiAqL1xyXG4gIG9wdGlvbnM6IFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZU9wdGlvbnM7XHJcblxyXG4gIC8qKiBMaXN0YSBkZSBzdWdlc3TDtWVzIHBhcmEgYSBmdW7Dp8OjbyBkZSBhdXRvY29tcGxldGUgKENUUkwgKyBTUEFDRSkuICovXHJcbiAgc3VnZ2VzdGlvbnM/OiBQb0NvZGVFZGl0b3JSZWdpc3RlcmFibGVTdWdnZXN0aW9uVHlwZTtcclxufVxyXG4iXX0=