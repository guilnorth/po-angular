import { PoPageEditBaseComponent } from './po-page-edit-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageEditBaseComponent
 *
 * @example
 *
 * <example name="po-page-edit-basic" title="PO Page Edit Basic">
 *  <file name="sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"> </file>
 *  <file name="sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-edit-labs" title="PO Page Edit Labs">
 *  <file name="sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"> </file>
 *  <file name="sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-edit-user" title="PO Page Edit - User">
 *  <file name="sample-po-page-edit-user/sample-po-page-edit-user.component.html"> </file>
 *  <file name="sample-po-page-edit-user/sample-po-page-edit-user.component.ts"> </file>
 * </example>
 */
export declare class PoPageEditComponent extends PoPageEditBaseComponent {
    getIcon(icon: string): string;
    getType(type: string): string;
    hasAnyAction(): boolean;
    hasPageHeader(): boolean;
    hasEvent(event: string): boolean;
    private isPrimaryAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageEditComponent, "po-page-edit", never, {}, {}, never, ["*"], false>;
}
