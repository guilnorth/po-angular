import { OnInit } from '@angular/core';
import { PoTreeViewBaseComponent } from './po-tree-view-base.component';
import { PoTreeViewService } from './services/po-tree-view.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoTreeViewBaseComponent
 *
 * @example
 *
 * <example name="po-tree-view-basic" title="PO Tree View Basic">
 *  <file name="sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"> </file>
 *  <file name="sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tree-view-labs" title="PO Tree View Labs">
 *  <file name="sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"> </file>
 *  <file name="sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tree-view-folder-structure" title="PO Tree View - Folder Structure">
 *  <file name="sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"> </file>
 *  <file name="sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"> </file>
 * </example>
 *
 * <example name="po-tree-view-supermarket" title="PO Tree View - Supermarket">
 *  <file name="sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"> </file>
 *  <file name="sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"> </file>
 * </example>
 */
export declare class PoTreeViewComponent extends PoTreeViewBaseComponent implements OnInit {
    private treeViewService;
    get hasItems(): boolean;
    constructor(treeViewService: PoTreeViewService);
    ngOnInit(): void;
    trackByFunction(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTreeViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTreeViewComponent, "po-tree-view", never, {}, {}, never, never, false>;
}