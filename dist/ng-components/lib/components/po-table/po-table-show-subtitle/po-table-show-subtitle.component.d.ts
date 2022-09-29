import { PoTableSubtitleColumn } from '../po-table-subtitle-footer/po-table-subtitle-column.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação de um botão e modal para visualização de todas as legendas.
 */
export declare class PoTableShowSubtitleComponent {
    /** Objeto com os dados da legenda. */
    subtitles: Array<PoTableSubtitleColumn>;
    /** Propriedade que recebe as literais definidas no `po-table`. */
    literals: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableShowSubtitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTableShowSubtitleComponent, "po-table-show-subtitle", never, { "subtitles": "p-subtitles"; "literals": "p-literals"; }, {}, never, never, false>;
}