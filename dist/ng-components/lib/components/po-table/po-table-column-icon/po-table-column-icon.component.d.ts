import { PoTableColumn } from '../interfaces/po-table-column.interface';
import { PoTableColumnIcon } from './po-table-column-icon.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por exibir ícones nas colunas.
 */
export declare class PoTableColumnIconComponent {
    /** Definição da coluna que utiliza os icones. */
    column: PoTableColumn;
    /** Dados da linha da tabela. */
    row: any;
    private _icons;
    /** Lista de colunas com ícones. */
    set icons(icons: Array<PoTableColumnIcon> | Array<string> | string);
    get icons(): Array<PoTableColumnIcon> | Array<string> | string;
    click(columnIcon: PoTableColumnIcon, event: any): void;
    getColor(column: PoTableColumnIcon): string;
    getIcon(column: PoTableColumnIcon): string | import("@angular/core").TemplateRef<void>;
    isClickable(columnIcon: PoTableColumnIcon): boolean;
    isDisabled(column: PoTableColumnIcon): boolean;
    trackByFunction(index: any): any;
    private convertToColumnIcon;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableColumnIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTableColumnIconComponent, "po-table-column-icon", never, { "column": "p-column"; "row": "p-row"; "icons": "p-icons"; }, {}, never, never, false>;
}