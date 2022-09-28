import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import * as i0 from "@angular/core";
const poTreeViewMaxLevel = 4;
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
export class PoTreeViewBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Ação que será disparada ao colapsar um item.
         *
         * > Como parâmetro o componente envia o item colapsado.
         */
        this.collapsed = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Ação que será disparada ao expandir um item.
         *
         * > Como parâmetro o componente envia o item expandido.
         */
        this.expanded = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Ação que será disparada ao selecionar um item.
         *
         * > Como parâmetro o componente envia o item selecionado.
         */
        this.selected = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Ação que será disparada ao desfazer a seleção de um item.
         *
         * > Como parâmetro o componente envia o item que foi desmarcado.
         */
        this.unselected = new EventEmitter();
        this._items = [];
        this._selectable = false;
    }
    /**
     * Lista de itens do tipo `PoTreeViewItem` que será renderizada pelo componente.
     */
    set items(value) {
        this._items = Array.isArray(value) ? this.getItemsByMaxLevel(value) : [];
    }
    get items() {
        return this._items;
    }
    /**
     * @optional
     *
     * @description
     *
     * Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.
     *
     * @default false
     */
    set selectable(value) {
        this._selectable = convertToBoolean(value);
    }
    get selectable() {
        return this._selectable;
    }
    emitExpanded(treeViewItem) {
        const event = treeViewItem.expanded ? 'expanded' : 'collapsed';
        this[event].emit({ ...treeViewItem });
    }
    emitSelected(treeViewItem) {
        const event = treeViewItem.selected ? 'selected' : 'unselected';
        this.updateItemsOnSelect(treeViewItem);
        this[event].emit({ ...treeViewItem });
    }
    addChildItemInParent(childItem, parentItem) {
        if (!parentItem.subItems) {
            parentItem.subItems = [];
        }
        parentItem.subItems.push(childItem);
    }
    // caso houver parentItem:
    //  - expande o parentItem caso o filho estiver expandido;
    //  - adiciona o childItem no parentItem;
    //  - marca o parentItem caso conter subItems marcodos ou nulos;
    // Se não conter parentItem, adiciona o childItem no items.
    addItem(items, childItem, parentItem, isNewItem) {
        if (parentItem) {
            if (isNewItem) {
                this.expandParentItem(childItem, parentItem);
            }
            this.addChildItemInParent(childItem, parentItem);
            this.selectItemBySubItems(parentItem);
            items.push(parentItem);
        }
        else {
            items.push(childItem);
        }
    }
    selectAllItems(items, isSelected) {
        items.forEach(item => {
            if (item.subItems) {
                this.selectAllItems(item.subItems, isSelected);
            }
            item.selected = isSelected;
        });
    }
    selectItemBySubItems(item) {
        item.selected = this.everyItemSelected(item.subItems);
    }
    // retornará:
    //  - true: se todos os items estiverem marcados;
    //  - null: se no minimo um item esteja marcado ou nullo (indeterminate)
    //  - false: caso não corresponda em nenhuma das opções acima, no caso, nenhum marcado ou nulo;
    everyItemSelected(items = []) {
        const itemsLength = items.length;
        const lengthCheckedItems = items.filter(item => item.selected).length;
        if (itemsLength && itemsLength === lengthCheckedItems) {
            return true;
        }
        const hasIndeterminateItems = items.filter(item => item.selected || item.selected === null).length;
        if (hasIndeterminateItems) {
            return null;
        }
        return false;
    }
    // expande o item pai caso o filho estiver expandido.
    expandParentItem(childItem, parentItem) {
        if (childItem.expanded) {
            parentItem.expanded = true;
        }
    }
    getItemsByMaxLevel(items = [], level = 0, parentItem, newItems = []) {
        items.forEach(item => {
            const { subItems, ...currentItem } = item;
            if (level === poTreeViewMaxLevel) {
                return;
            }
            if (Array.isArray(subItems)) {
                // caso um item pai iniciar selecionado, deve selecionar os filhos.
                if (currentItem.selected) {
                    this.selectAllItems(subItems, currentItem.selected);
                }
                this.getItemsByMaxLevel(subItems, ++level, currentItem);
                --level;
            }
            this.addItem(newItems, currentItem, parentItem, true);
        });
        return newItems;
    }
    getItemsWithParentSelected(items = [], parentItem, newItems = []) {
        items.forEach(item => {
            const { subItems, ...currentItem } = item;
            if (Array.isArray(subItems)) {
                this.getItemsWithParentSelected(subItems, currentItem);
            }
            this.addItem(newItems, currentItem, parentItem);
        });
        return newItems;
    }
    updateItemsOnSelect(selectedItem) {
        if (selectedItem.subItems) {
            this.selectAllItems(selectedItem.subItems, selectedItem.selected);
        }
        this._items = this.getItemsWithParentSelected(this.items);
    }
}
PoTreeViewBaseComponent.ɵfac = function PoTreeViewBaseComponent_Factory(t) { return new (t || PoTreeViewBaseComponent)(); };
PoTreeViewBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoTreeViewBaseComponent, inputs: { items: ["p-items", "items"], selectable: ["p-selectable", "selectable"] }, outputs: { collapsed: "p-collapsed", expanded: "p-expanded", selected: "p-selected", unselected: "p-unselected" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTreeViewBaseComponent, [{
        type: Directive
    }], null, { collapsed: [{
            type: Output,
            args: ['p-collapsed']
        }], expanded: [{
            type: Output,
            args: ['p-expanded']
        }], selected: [{
            type: Output,
            args: ['p-selected']
        }], unselected: [{
            type: Output,
            args: ['p-unselected']
        }], items: [{
            type: Input,
            args: ['p-items']
        }], selectable: [{
            type: Input,
            args: ['p-selectable']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdHJlZS12aWV3LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLXRyZWUtdmlldy9wby10cmVlLXZpZXctYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFJcEQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFN0I7Ozs7Ozs7Ozs7OztHQVlHO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVFOzs7Ozs7OztXQVFHO1FBQ29CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUV0RTs7Ozs7Ozs7V0FRRztRQUNtQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFcEU7Ozs7Ozs7O1dBUUc7UUFDbUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBRXBFOzs7Ozs7OztXQVFHO1FBQ3FCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUVoRSxXQUFNLEdBQTBCLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztLQW9LdEM7SUFsS0M7O09BRUc7SUFDSCxJQUFzQixLQUFLLENBQUMsS0FBNEI7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFD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b250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1RyZWVWaWV3SXRlbSB9IGZyb20gJy4vcG8tdHJlZS12aWV3LWl0ZW0vcG8tdHJlZS12aWV3LWl0ZW0uaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IHBvVHJlZVZpZXdNYXhMZXZlbCA9IDQ7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBmb3JuZWNlIHVtIG1vZGVsbyBkZSB2aXN1YWxpemHDp8OjbyBlbSDDoXJ2b3JlLCBwb3NzaWJpbGl0YW5kbyBhIHZpc3VhbGl6YcOnw6NvIGRhcyBpbmZvcm1hw6fDtWVzIGRlIG1hbmVpcmFcclxuICogaGllcsOhcnF1aWNhLCBkZXN0YSBmb3JtYSBzZW5kbyBwb3Nzw612ZWwgdXRpbGl6YXIgYXTDqSA0IG7DrXZlaXMuXHJcbiAqXHJcbiAqIE5lbGUgw6kgcG9zc8OtdmVsIG5hdmVnYXIgZW50cmUgb3MgaXRlbnMgYXRyYXbDqXMgZGEgdGVjbGEgKnRhYiosIHBlcm1pdGluZG8gZXhwYW5kaXIgb3UgY29sYXBzYXIgbyBpdGVtIGVtIGZvY29cclxuICogcG9yIG1laW8gZGFzIHRlY2xhcyAqZW50ZXIqIGUgKnNwYWNlKi5cclxuICpcclxuICogQWzDqW0gZGEgbmF2ZWdhw6fDo28sIG8gY29tcG9uZW50ZSBwb3NzaWJpbGl0YSB0YW1iw6ltIGEgc2VsZcOnw6NvIGRvcyBpdGVucyBkbyBwcmltZWlybyBhbyDDumx0aW1vIG7DrXZlbCwgdGFudG8gZGUgZm9ybWEgcGFyY2lhbCBjb21vIGNvbXBsZXRhLlxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgdGFtYsOpbSBwb3NzdWkgZXZlbnRvcyBkaXNwYXJhZG9zIGFvIG1hcmNhci9kZXNtYXJjYXIgZSBleHBhbmRpci9jb2xhcHNhciBvcyBpdGVucy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9UcmVlVmlld0Jhc2VDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBw6fDo28gcXVlIHNlcsOhIGRpc3BhcmFkYSBhbyBjb2xhcHNhciB1bSBpdGVtLlxyXG4gICAqXHJcbiAgICogPiBDb21vIHBhcsOibWV0cm8gbyBjb21wb25lbnRlIGVudmlhIG8gaXRlbSBjb2xhcHNhZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jb2xsYXBzZWQnKSBjb2xsYXBzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBvVHJlZVZpZXdJdGVtPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQcOnw6NvIHF1ZSBzZXLDoSBkaXNwYXJhZGEgYW8gZXhwYW5kaXIgdW0gaXRlbS5cclxuICAgKlxyXG4gICAqID4gQ29tbyBwYXLDom1ldHJvIG8gY29tcG9uZW50ZSBlbnZpYSBvIGl0ZW0gZXhwYW5kaWRvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtZXhwYW5kZWQnKSBleHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UG9UcmVlVmlld0l0ZW0+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBw6fDo28gcXVlIHNlcsOhIGRpc3BhcmFkYSBhbyBzZWxlY2lvbmFyIHVtIGl0ZW0uXHJcbiAgICpcclxuICAgKiA+IENvbW8gcGFyw6JtZXRybyBvIGNvbXBvbmVudGUgZW52aWEgbyBpdGVtIHNlbGVjaW9uYWRvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3Atc2VsZWN0ZWQnKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UG9UcmVlVmlld0l0ZW0+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBw6fDo28gcXVlIHNlcsOhIGRpc3BhcmFkYSBhbyBkZXNmYXplciBhIHNlbGXDp8OjbyBkZSB1bSBpdGVtLlxyXG4gICAqXHJcbiAgICogPiBDb21vIHBhcsOibWV0cm8gbyBjb21wb25lbnRlIGVudmlhIG8gaXRlbSBxdWUgZm9pIGRlc21hcmNhZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC11bnNlbGVjdGVkJykgdW5zZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UG9UcmVlVmlld0l0ZW0+KCk7XHJcblxyXG4gIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxQb1RyZWVWaWV3SXRlbT4gPSBbXTtcclxuICBwcml2YXRlIF9zZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RhIGRlIGl0ZW5zIGRvIHRpcG8gYFBvVHJlZVZpZXdJdGVtYCBxdWUgc2Vyw6EgcmVuZGVyaXphZGEgcGVsbyBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1pdGVtcycpIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8UG9UcmVlVmlld0l0ZW0+KSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdGhpcy5nZXRJdGVtc0J5TWF4TGV2ZWwodmFsdWUpIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSGFiaWxpdGEgdW1hIGNhaXhhIGRlIHNlbGXDp8OjbyBwYXJhIHNlbGVjaW9uYXIgZS9vdSBkZXNtYXJjYXIgdW0gaXRlbSBkYSBsaXN0YS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNlbGVjdGFibGUnKSBzZXQgc2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0RXhwYW5kZWQodHJlZVZpZXdJdGVtOiBQb1RyZWVWaWV3SXRlbSkge1xyXG4gICAgY29uc3QgZXZlbnQgPSB0cmVlVmlld0l0ZW0uZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCc7XHJcblxyXG4gICAgdGhpc1tldmVudF0uZW1pdCh7IC4uLnRyZWVWaWV3SXRlbSB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0U2VsZWN0ZWQodHJlZVZpZXdJdGVtOiBQb1RyZWVWaWV3SXRlbSkge1xyXG4gICAgY29uc3QgZXZlbnQgPSB0cmVlVmlld0l0ZW0uc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJ3Vuc2VsZWN0ZWQnO1xyXG5cclxuICAgIHRoaXMudXBkYXRlSXRlbXNPblNlbGVjdCh0cmVlVmlld0l0ZW0pO1xyXG5cclxuICAgIHRoaXNbZXZlbnRdLmVtaXQoeyAuLi50cmVlVmlld0l0ZW0gfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZENoaWxkSXRlbUluUGFyZW50KGNoaWxkSXRlbTogUG9UcmVlVmlld0l0ZW0sIHBhcmVudEl0ZW06IFBvVHJlZVZpZXdJdGVtKSB7XHJcbiAgICBpZiAoIXBhcmVudEl0ZW0uc3ViSXRlbXMpIHtcclxuICAgICAgcGFyZW50SXRlbS5zdWJJdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudEl0ZW0uc3ViSXRlbXMucHVzaChjaGlsZEl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzbyBob3V2ZXIgcGFyZW50SXRlbTpcclxuICAvLyAgLSBleHBhbmRlIG8gcGFyZW50SXRlbSBjYXNvIG8gZmlsaG8gZXN0aXZlciBleHBhbmRpZG87XHJcbiAgLy8gIC0gYWRpY2lvbmEgbyBjaGlsZEl0ZW0gbm8gcGFyZW50SXRlbTtcclxuICAvLyAgLSBtYXJjYSBvIHBhcmVudEl0ZW0gY2FzbyBjb250ZXIgc3ViSXRlbXMgbWFyY29kb3Mgb3UgbnVsb3M7XHJcbiAgLy8gU2UgbsOjbyBjb250ZXIgcGFyZW50SXRlbSwgYWRpY2lvbmEgbyBjaGlsZEl0ZW0gbm8gaXRlbXMuXHJcbiAgcHJpdmF0ZSBhZGRJdGVtKGl0ZW1zOiBBcnJheTxQb1RyZWVWaWV3SXRlbT4sIGNoaWxkSXRlbTogUG9UcmVlVmlld0l0ZW0sIHBhcmVudEl0ZW0/OiBQb1RyZWVWaWV3SXRlbSwgaXNOZXdJdGVtPykge1xyXG4gICAgaWYgKHBhcmVudEl0ZW0pIHtcclxuICAgICAgaWYgKGlzTmV3SXRlbSkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kUGFyZW50SXRlbShjaGlsZEl0ZW0sIHBhcmVudEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGRJdGVtSW5QYXJlbnQoY2hpbGRJdGVtLCBwYXJlbnRJdGVtKTtcclxuICAgICAgdGhpcy5zZWxlY3RJdGVtQnlTdWJJdGVtcyhwYXJlbnRJdGVtKTtcclxuXHJcbiAgICAgIGl0ZW1zLnB1c2gocGFyZW50SXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtcy5wdXNoKGNoaWxkSXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEFsbEl0ZW1zKGl0ZW1zOiBBcnJheTxQb1RyZWVWaWV3SXRlbT4sIGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLnN1Ykl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxJdGVtcyhpdGVtLnN1Ykl0ZW1zLCBpc1NlbGVjdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbS5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0SXRlbUJ5U3ViSXRlbXMoaXRlbTogUG9UcmVlVmlld0l0ZW0pIHtcclxuICAgIGl0ZW0uc2VsZWN0ZWQgPSB0aGlzLmV2ZXJ5SXRlbVNlbGVjdGVkKGl0ZW0uc3ViSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0b3JuYXLDoTpcclxuICAvLyAgLSB0cnVlOiBzZSB0b2RvcyBvcyBpdGVtcyBlc3RpdmVyZW0gbWFyY2Fkb3M7XHJcbiAgLy8gIC0gbnVsbDogc2Ugbm8gbWluaW1vIHVtIGl0ZW0gZXN0ZWphIG1hcmNhZG8gb3UgbnVsbG8gKGluZGV0ZXJtaW5hdGUpXHJcbiAgLy8gIC0gZmFsc2U6IGNhc28gbsOjbyBjb3JyZXNwb25kYSBlbSBuZW5odW1hIGRhcyBvcMOnw7VlcyBhY2ltYSwgbm8gY2FzbywgbmVuaHVtIG1hcmNhZG8gb3UgbnVsbztcclxuICBwcml2YXRlIGV2ZXJ5SXRlbVNlbGVjdGVkKGl0ZW1zOiBBcnJheTxQb1RyZWVWaWV3SXRlbT4gPSBbXSk6IGJvb2xlYW4gfCBudWxsIHtcclxuICAgIGNvbnN0IGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGxlbmd0aENoZWNrZWRJdGVtcyA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLmxlbmd0aDtcclxuXHJcbiAgICBpZiAoaXRlbXNMZW5ndGggJiYgaXRlbXNMZW5ndGggPT09IGxlbmd0aENoZWNrZWRJdGVtcykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNJbmRldGVybWluYXRlSXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkIHx8IGl0ZW0uc2VsZWN0ZWQgPT09IG51bGwpLmxlbmd0aDtcclxuXHJcbiAgICBpZiAoaGFzSW5kZXRlcm1pbmF0ZUl0ZW1zKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIGV4cGFuZGUgbyBpdGVtIHBhaSBjYXNvIG8gZmlsaG8gZXN0aXZlciBleHBhbmRpZG8uXHJcbiAgcHJpdmF0ZSBleHBhbmRQYXJlbnRJdGVtKGNoaWxkSXRlbTogUG9UcmVlVmlld0l0ZW0sIHBhcmVudEl0ZW06IFBvVHJlZVZpZXdJdGVtKSB7XHJcbiAgICBpZiAoY2hpbGRJdGVtLmV4cGFuZGVkKSB7XHJcbiAgICAgIHBhcmVudEl0ZW0uZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJdGVtc0J5TWF4TGV2ZWwoXHJcbiAgICBpdGVtczogQXJyYXk8UG9UcmVlVmlld0l0ZW0+ID0gW10sXHJcbiAgICBsZXZlbDogbnVtYmVyID0gMCxcclxuICAgIHBhcmVudEl0ZW0/OiBQb1RyZWVWaWV3SXRlbSxcclxuICAgIG5ld0l0ZW1zID0gW11cclxuICApIHtcclxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc3ViSXRlbXMsIC4uLmN1cnJlbnRJdGVtIH0gPSBpdGVtO1xyXG5cclxuICAgICAgaWYgKGxldmVsID09PSBwb1RyZWVWaWV3TWF4TGV2ZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1Ykl0ZW1zKSkge1xyXG4gICAgICAgIC8vIGNhc28gdW0gaXRlbSBwYWkgaW5pY2lhciBzZWxlY2lvbmFkbywgZGV2ZSBzZWxlY2lvbmFyIG9zIGZpbGhvcy5cclxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSXRlbXMoc3ViSXRlbXMsIGN1cnJlbnRJdGVtLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SXRlbXNCeU1heExldmVsKHN1Ykl0ZW1zLCArK2xldmVsLCBjdXJyZW50SXRlbSk7XHJcbiAgICAgICAgLS1sZXZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZGRJdGVtKG5ld0l0ZW1zLCBjdXJyZW50SXRlbSwgcGFyZW50SXRlbSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3SXRlbXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEl0ZW1zV2l0aFBhcmVudFNlbGVjdGVkKGl0ZW1zOiBBcnJheTxQb1RyZWVWaWV3SXRlbT4gPSBbXSwgcGFyZW50SXRlbT86IFBvVHJlZVZpZXdJdGVtLCBuZXdJdGVtcyA9IFtdKSB7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCB7IHN1Ykl0ZW1zLCAuLi5jdXJyZW50SXRlbSB9ID0gaXRlbTtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1Ykl0ZW1zKSkge1xyXG4gICAgICAgIHRoaXMuZ2V0SXRlbXNXaXRoUGFyZW50U2VsZWN0ZWQoc3ViSXRlbXMsIGN1cnJlbnRJdGVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZGRJdGVtKG5ld0l0ZW1zLCBjdXJyZW50SXRlbSwgcGFyZW50SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3SXRlbXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUl0ZW1zT25TZWxlY3Qoc2VsZWN0ZWRJdGVtOiBQb1RyZWVWaWV3SXRlbSkge1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbS5zdWJJdGVtcykge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbEl0ZW1zKHNlbGVjdGVkSXRlbS5zdWJJdGVtcywgc2VsZWN0ZWRJdGVtLnNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pdGVtcyA9IHRoaXMuZ2V0SXRlbXNXaXRoUGFyZW50U2VsZWN0ZWQodGhpcy5pdGVtcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==