import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente de uso interno, responsável por gerar uma margem inferior nos componentes que utilizam o po-field-container.
 * Essa margem inferior pode conter uma mensagem de erro.
 */
export declare class PoFieldContainerBottomComponent {
    /**
     * Mensagem que será apresentada quando o pattern ou a máscara não for satisfeita.
     * Obs: Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
     */
    errorPattern?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoFieldContainerBottomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoFieldContainerBottomComponent, "po-field-container-bottom", never, { "errorPattern": "p-error-pattern"; }, {}, never, never, false>;
}
