import { EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PoTableDetail } from './po-table-detail.interface';
import { PoTableDetailColumn } from './po-table-detail-column.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por apresentar o detalhe de cada linha da tabela.
 */
export declare class PoTableDetailComponent {
    private decimalPipe;
    /**
     * Lista de itens do _detail_ da tabela.
     */
    items: Array<any>;
    /**
     * Define se a tabela possui a opção de `selectable` habilitada.
     */
    isSelectable?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Ação executada ao selecionar ou desmarcar a seleção de uma linha de detalhe do `po-table`.
     */
    selectRow: EventEmitter<any>;
    private _detail;
    /**
     * Configuração da linha de detalhes.
     */
    set detail(value: PoTableDetail);
    get detail(): PoTableDetail;
    constructor(decimalPipe: DecimalPipe);
    get detailColumns(): Array<PoTableDetailColumn>;
    get typeHeaderInline(): boolean;
    get typeHeaderTop(): boolean;
    formatNumberDetail(value: any, format: string): any;
    getColumnTitleLabel(detail: PoTableDetailColumn): string;
    getDetailData(item: any, detail: PoTableDetailColumn): any;
    onSelectRow(item: any): void;
    private returnPoTableDetailObject;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTableDetailComponent, "po-table-detail", never, { "items": "p-items"; "isSelectable": "p-selectable"; "detail": "p-detail"; }, { "selectRow": "p-select-row"; }, never, never, false>;
}