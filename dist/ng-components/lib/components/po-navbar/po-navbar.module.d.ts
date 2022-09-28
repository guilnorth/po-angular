import * as i0 from "@angular/core";
import * as i1 from "./po-navbar.component";
import * as i2 from "./po-navbar-logo/po-navbar-logo.component";
import * as i3 from "@angular/common";
import * as i4 from "./po-navbar-actions/po-navbar-actions.module";
import * as i5 from "./po-navbar-items/po-navbar-items.module";
import * as i6 from "./po-navbar-item-navigation/po-navbar-item-navigation.module";
import * as i7 from "../po-menu/po-menu.module";
import * as i8 from "../po-icon/po-icon.module";
/**
 * @description
 *
 * Módulo do componente `po-navbar`.
 *
 * > Para o correto funcionamento do componente `po-navbar`, deve ser importado o módulo `BrowserAnimationsModule` no
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
export declare class PoNavbarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNavbarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PoNavbarModule, [typeof i1.PoNavbarComponent, typeof i2.PoNavbarLogoComponent], [typeof i3.CommonModule, typeof i4.PoNavbarActionsModule, typeof i5.PoNavbarItemsModule, typeof i6.PoNavbarItemNavigationModule, typeof i7.PoMenuModule, typeof i8.PoIconModule], [typeof i1.PoNavbarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PoNavbarModule>;
}
