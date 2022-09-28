import { ModuleWithProviders } from '@angular/core';
import { PoCodeEditorRegisterable } from './interfaces/po-code-editor-registerable.interface';
import * as i0 from "@angular/core";
import * as i1 from "./po-code-editor.component";
import * as i2 from "@angular/common";
/**
 * @description
 *
 * Módulo do componente po-code-editor.
 */
export declare class PoCodeEditorModule {
    static forRegister(props: PoCodeEditorRegisterable): ModuleWithProviders<PoCodeEditorModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCodeEditorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PoCodeEditorModule, [typeof i1.PoCodeEditorComponent], [typeof i2.CommonModule], [typeof i1.PoCodeEditorComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PoCodeEditorModule>;
}
