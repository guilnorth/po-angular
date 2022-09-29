import { PoToolbarProfile } from './po-toolbar-profile.interface';
import { PoToolbarAction } from '../po-toolbar-action.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @docsExtends PoToolbarProfileComponent
 *
 * @description
 *
 * Componente `po-toolbar-profile`.
 */
export declare class PoToolbarProfileComponent {
    /** Objeto que implementa a interface `PoToolbarProfile`. */
    profile: PoToolbarProfile;
    /** Define uma lista de ações. */
    profileActions?: Array<PoToolbarAction>;
    get profileAvatar(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoToolbarProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoToolbarProfileComponent, "po-toolbar-profile", never, { "profile": "p-profile"; "profileActions": "p-profile-actions"; }, {}, never, never, false>;
}