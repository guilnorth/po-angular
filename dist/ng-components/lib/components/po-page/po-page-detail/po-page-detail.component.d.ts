import { PoPageDetailBaseComponent } from './po-page-detail-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoPageDetailBaseComponent
 *
 * @example
 *
 * <example name="po-page-detail-basic" title="PO Page Detail Basic">
 *  <file name="sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"> </file>
 *  <file name="sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-detail-labs" title="PO Page Detail Labs">
 *  <file name="sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"> </file>
 *  <file name="sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-detail-user" title="PO Page Detail - User">
 *  <file name="sample-po-page-detail-user/sample-po-page-detail-user.component.html"> </file>
 *  <file name="sample-po-page-detail-user/sample-po-page-detail-user.component.ts"> </file>
 * </example>
 */
export declare class PoPageDetailComponent extends PoPageDetailBaseComponent {
    hasAnyAction(): boolean;
    hasEditFn(property: string): string;
    hasEditOrRemoveFn(property: string): string;
    hasEvent(event: string): boolean;
    hasPageHeader(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageDetailComponent, "po-page-detail", never, {}, {}, never, ["*"], false>;
}
