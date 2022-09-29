import { ChangeDetectorRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PoPageBlockedUserContactsComponent {
    private changeDetector;
    contactGroup: ElementRef;
    mailItem: ElementRef;
    phoneItem: ElementRef;
    overflowItem: boolean;
    private _email;
    private _phone;
    set email(value: string);
    get email(): string;
    set phone(value: string);
    get phone(): string;
    constructor(changeDetector: ChangeDetectorRef);
    private checkContactItemWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageBlockedUserContactsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageBlockedUserContactsComponent, "po-page-blocked-user-contacts", never, { "email": "p-email"; "phone": "p-phone"; }, {}, never, never, false>;
}