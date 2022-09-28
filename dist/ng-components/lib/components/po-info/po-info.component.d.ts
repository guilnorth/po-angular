import { PoInfoBaseComponent } from './po-info-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoInfoBaseComponent
 *
 * @description
 *
 * Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
 * valor na parte inferior. Facilita a exibição de dados pois vem com layout padrão PO.
 *
 * @example
 *
 * <example name="po-info-basic" title="PO Info Basic">
 *  <file name="sample-po-info-basic/sample-po-info-basic.component.html"> </file>
 *  <file name="sample-po-info-basic/sample-po-info-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-info-labs" title="PO Info Labs">
 *  <file name="sample-po-info-labs/sample-po-info-labs.component.html"> </file>
 *  <file name="sample-po-info-labs/sample-po-info-labs.component.ts"> </file>
 * </example>
 */
export declare class PoInfoComponent extends PoInfoBaseComponent {
    get isExternalLink(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoInfoComponent, "po-info", never, {}, {}, never, never, false>;
}
