import { PipeTransform } from '@angular/core';
import { PoI18nBasePipe } from './po-i18n-base.pipe';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoI18nBasePipe
 *
 * @example
 * <example name='po-i18n-pipe-labs' title='PO i18n Pipe Labs' >
 *  <file name='sample-po-i18n-pipe-labs.component.html'> </file>
 *  <file name='sample-po-i18n-pipe-labs.component.ts'> </file>
 *  <file name='sample-po-i18n-pipe.component.html'> </file>
 *  <file name='sample-po-i18n-pipe.component.ts'> </file>
 * </example>
 */
export declare class PoI18nPipe extends PoI18nBasePipe implements PipeTransform {
    static ɵfac: i0.ɵɵFactoryDeclaration<PoI18nPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PoI18nPipe, "poI18n", false>;
}