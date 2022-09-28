import { EventEmitter } from '@angular/core';
import { PoTreeViewItem } from './po-tree-view-item/po-tree-view-item.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente fornece um modelo de visualização em árvore, possibilitando a visualização das informações de maneira
 * hierárquica, desta forma sendo possível utilizar até 4 níveis.
 *
 * Nele é possível navegar entre os itens através da tecla *tab*, permitindo expandir ou colapsar o item em foco
 * por meio das teclas *enter* e *space*.
 *
 * Além da navegação, o componente possibilita também a seleção dos itens do primeiro ao último nível, tanto de forma parcial como completa.
 *
 * O componente também possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens.
 */
export declare class PoTreeViewBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Ação que será disparada ao colapsar um item.
     *
     * > Como parâmetro o componente envia o item colapsado.
     */
    collapsed: EventEmitter<PoTreeViewItem>;
    /**
     * @optional
     *
     * @description
     *
     * Ação que será disparada ao expandir um item.
     *
     * > Como parâmetro o componente envia o item expandido.
     */
    expanded: EventEmitter<PoTreeViewItem>;
    /**
     * @optional
     *
     * @description
     *
     * Ação que será disparada ao selecionar um item.
     *
     * > Como parâmetro o componente envia o item selecionado.
     */
    selected: EventEmitter<PoTreeViewItem>;
    /**
     * @optional
     *
     * @description
     *
     * Ação que será disparada ao desfazer a seleção de um item.
     *
     * > Como parâmetro o componente envia o item que foi desmarcado.
     */
    unselected: EventEmitter<PoTreeViewItem>;
    private _items;
    private _selectable;
    /**
     * Lista de itens do tipo `PoTreeViewItem` que será renderizada pelo componente.
     */
    set items(value: Array<PoTreeViewItem>);
    get items(): Array<PoTreeViewItem>;
    /**
     * @optional
     *
     * @description
     *
     * Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.
     *
     * @default false
     */
    set selectable(value: boolean);
    get selectable(): boolean;
    protected emitExpanded(treeViewItem: PoTreeViewItem): void;
    protected emitSelected(treeViewItem: PoTreeViewItem): void;
    private addChildItemInParent;
    private addItem;
    private selectAllItems;
    private selectItemBySubItems;
    private everyItemSelected;
    private expandParentItem;
    private getItemsByMaxLevel;
    private getItemsWithParentSelected;
    private updateItemsOnSelect;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTreeViewBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTreeViewBaseComponent, never, never, { "items": "p-items"; "selectable": "p-selectable"; }, { "collapsed": "p-collapsed"; "expanded": "p-expanded"; "selected": "p-selected"; "unselected": "p-unselected"; }, never, never, false>;
}
