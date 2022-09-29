import { PoDropdownAction } from './po-dropdown-action.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-dropdown` pode ser utilizado como um agrupador de ações e / ou opções.
 *
 * > Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `RouterModule`
 * no módulo principal para o correto funcionamento deste componente:
 *
 * ```
 * import { RouterModule } from '@angular/router';
 *
 * @NgModule({
 *   imports: [
 *     ...
 *     RouterModule.forRoot([]),
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent
 *   ],
 *   exports: [],
 *   providers: [],
 *   bootstrap: [
 *     AppComponent
 *   ]
 * })
 * export class AppModule { }
 * ```
 * > Para maiores dúvidas referente à configuração de rotas, acesse em nosso portal /Guias /Começando
 * [/Configurando as rotas do po-menu](/guides/getting-started).
 */
export declare class PoDropdownBaseComponent {
    /** Adiciona um rótulo ao `dropdown`. */
    label: string;
    icon: string;
    open: boolean;
    private _actions;
    private _disabled;
    /** Lista de ações que serão exibidas no componente. */
    set actions(value: Array<PoDropdownAction>);
    get actions(): Array<PoDropdownAction>;
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o campo.
     *
     * @default `false`
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDropdownBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDropdownBaseComponent, never, never, { "label": "p-label"; "actions": "p-actions"; "disabled": "p-disabled"; }, {}, never, never, false>;
}