import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PoLanguageService } from '@po-ui/ng-components';
import { PoPageBlockedUserBaseComponent } from './po-page-blocked-user-base.component';
import * as i0 from "@angular/core";
export declare const poPageBlockedUserButtonLiterals: Object;
/**
 * @docsExtends PoPageBlockedUserBaseComponent
 *
 * @example
 *
 * <example name="po-page-blocked-user-basic" title="PO Page Blocked User Basic">
 *  <file name="sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-labs" title="PO Page Blocked User Labs">
 *  <file name="sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-exceeded-attempts" title="PO Page Blocked User Exceeded Attempts">
 *  <file name="sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-blocked-user-expired-password" title="PO Page Blocked User Expired Password">
 *  <file name="sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"> </file>
 *  <file name="sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"> </file>
 * </example>
 */
export declare class PoPageBlockedUserComponent extends PoPageBlockedUserBaseComponent implements OnInit {
    private activatedRoute;
    private router;
    literals: any;
    constructor(activatedRoute: ActivatedRoute, router: Router, languageService: PoLanguageService);
    ngOnInit(): void;
    navigateTo(url: string): void;
    private checkingForMetadataProperty;
    private checkingForRouteMetadata;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageBlockedUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageBlockedUserComponent, "po-page-blocked-user", never, {}, {}, never, never, false>;
}