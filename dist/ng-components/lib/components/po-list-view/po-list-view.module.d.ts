import * as i0 from "@angular/core";
import * as i1 from "./po-list-view.component";
import * as i2 from "./po-list-view-content-template/po-list-view-content-template.directive";
import * as i3 from "./po-list-view-detail-template/po-list-view-detail-template.directive";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/router";
import * as i7 from "../po-button/po-button.module";
import * as i8 from "../po-popup/po-popup.module";
import * as i9 from "../po-field/po-checkbox/po-checkbox.module";
/**
 * @description
 *
 * Módulo do componente `po-list-view`.
 *
 * > Para o correto funcionamento do componente `po-list-view`, deve ser importado o módulo `BrowserAnimationsModule` no
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
export declare class PoListViewModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PoListViewModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PoListViewModule, [typeof i1.PoListViewComponent, typeof i2.PoListViewContentTemplateDirective, typeof i3.PoListViewDetailTemplateDirective], [typeof i4.CommonModule, typeof i5.FormsModule, typeof i6.RouterModule, typeof i7.PoButtonModule, typeof i8.PoPopupModule, typeof i9.PoCheckboxModule], [typeof i1.PoListViewComponent, typeof i2.PoListViewContentTemplateDirective, typeof i3.PoListViewDetailTemplateDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PoListViewModule>;
}
