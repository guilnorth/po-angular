import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class PoNavbarActionComponent {
    private router;
    action?: Function;
    icon: string | TemplateRef<void>;
    label: string;
    link?: string;
    tooltip?: string;
    constructor(viewContainerRef: ViewContainerRef, router: Router);
    click(): void | Promise<boolean>;
    private openUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNavbarActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoNavbarActionComponent, "po-navbar-action", never, { "action": "p-action"; "icon": "p-icon"; "label": "p-label"; "link": "p-link"; "tooltip": "p-tooltip-text"; }, {}, never, never, false>;
}
