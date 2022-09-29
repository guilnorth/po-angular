import { PoBreadcrumb } from '../../po-breadcrumb/po-breadcrumb.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * O componente **po-page-header** é responsável pelo título da página e container dos botões de ações dos componentes
 * po-page-list e po-page-base.
 */
export declare class PoPageHeaderBaseComponent {
    /** Título da página. */
    title: string;
    private _breadcrumb;
    /** Objeto com propriedades do breadcrumb. */
    set breadcrumb(value: PoBreadcrumb);
    get breadcrumb(): PoBreadcrumb;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageHeaderBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageHeaderBaseComponent, never, never, { "title": "p-title"; "breadcrumb": "p-breadcrumb"; }, {}, never, never, false>;
}