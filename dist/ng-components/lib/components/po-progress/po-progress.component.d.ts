import { PoProgressBaseComponent } from './po-progress-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoProgressBaseComponent
 *
 * @example
 * <example name="po-progress-basic" title="PO Progress Basic">
 *   <file name="sample-po-progress-basic/sample-po-progress-basic.component.html"> </file>
 *   <file name="sample-po-progress-basic/sample-po-progress-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-progress-labs" title="PO Progress Labs">
 *   <file name="sample-po-progress-labs/sample-po-progress-labs.component.html"> </file>
 *   <file name="sample-po-progress-labs/sample-po-progress-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-progress-publication" title="PO Progress - Publication">
 *   <file name="sample-po-progress-publication/sample-po-progress-publication.component.html"> </file>
 *   <file name="sample-po-progress-publication/sample-po-progress-publication.component.ts"> </file>
 * </example>
 */
export declare class PoProgressComponent extends PoProgressBaseComponent {
    get isAllowCancel(): boolean;
    get isAllowProgressInfo(): boolean;
    get isAllowRetry(): boolean;
    get statusClass(): string;
    emitCancellation(): void;
    emitRetry(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoProgressComponent, "po-progress", never, {}, {}, never, never, false>;
}