import { PoColorPaletteService } from './../../../services/po-color-palette/po-color-palette.service';
import { PoTableSubtitleColumn } from './../po-table-subtitle-footer/po-table-subtitle-column.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação da representação da legenda, em formato de círculo.
 */
export declare class PoTableSubtitleCircleComponent {
    private poColorPaletteService;
    /** Esconde a tooltip. */
    hideTitle: boolean;
    private _subtitle;
    /** Objeto com os dados da legenda. */
    set subtitle(subtitle: PoTableSubtitleColumn);
    get subtitle(): PoTableSubtitleColumn;
    constructor(poColorPaletteService: PoColorPaletteService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableSubtitleCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTableSubtitleCircleComponent, "po-table-subtitle-circle", never, { "hideTitle": "p-hide-title"; "subtitle": "p-subtitle"; }, {}, never, never, false>;
}