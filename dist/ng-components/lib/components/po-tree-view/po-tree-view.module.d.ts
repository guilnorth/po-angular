import * as i0 from "@angular/core";
import * as i1 from "./po-tree-view.component";
import * as i2 from "./po-tree-view-item/po-tree-view-item.component";
import * as i3 from "./po-tree-view-item-header/po-tree-view-item-header.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "../po-container/po-container.module";
import * as i7 from "../po-field/po-field.module";
/**
 * @description
 *
 * Módulo do componente `po-tree-view`.
 *
 * > Para o correto funcionamento do componente `po-tree-view`, deve ser importado o módulo `BrowserAnimationsModule` no
 * > módulo principal da sua aplicação.
 *
 * Módulo da aplicação:
 * ```
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { PoModule } from '@po-ui/ng-components';
 * ...
 *
 * @NgModule({
 *   imports: [
 *     BrowserModule,
 *     BrowserAnimationsModule,
 *     ...
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent,
 *     ...
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 */
export declare class PoTreeViewModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTreeViewModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PoTreeViewModule, [typeof i1.PoTreeViewComponent, typeof i2.PoTreeViewItemComponent, typeof i3.PoTreeViewItemHeaderComponent], [typeof i4.CommonModule, typeof i5.FormsModule, typeof i6.PoContainerModule, typeof i7.PoFieldModule], [typeof i1.PoTreeViewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PoTreeViewModule>;
}