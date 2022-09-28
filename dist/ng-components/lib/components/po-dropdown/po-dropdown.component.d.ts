import { ElementRef, Renderer2 } from '@angular/core';
import { PoDropdownBaseComponent } from './po-dropdown-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoDropdownBaseComponent
 *
 * @example
 *
 * <example name="po-dropdown-basic" title="PO Dropdown Basic" >
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"> </file>
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"> </file>
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-dropdown-basic/sample-po-dropdown-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-dropdown-labs" title="PO Dropdown Labs" >
 *  <file name="sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"> </file>
 *  <file name="sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-dropdown-social-network" title="PO Dropdown - Social Network" >
 *  <file name="sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"> </file>
 *  <file name="sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"> </file>
 * </example>
 */
export declare class PoDropdownComponent extends PoDropdownBaseComponent {
    private renderer;
    dropdownRef: ElementRef;
    popupRef: any;
    private clickoutListener;
    private resizeListener;
    constructor(renderer: Renderer2);
    onKeyDown(event: any): void;
    toggleDropdown(): void;
    private checkClickArea;
    private hideDropdown;
    private initializeListeners;
    private onScroll;
    private removeListeners;
    private showDropdown;
    private wasClickedOnDropdown;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDropdownComponent, "po-dropdown", never, {}, {}, never, never, false>;
}
