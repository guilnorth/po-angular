import { ChangeDetectorRef, QueryList } from '@angular/core';
import { PoTabComponent } from './po-tab/po-tab.component';
import { PoTabDropdownComponent } from './po-tab-dropdown/po-tab-dropdown.component';
import { PoTabsBaseComponent } from './po-tabs-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoTabsBaseComponent
 *
 * @example
 *
 * <example name="po-tabs-basic" title="PO Tabs Basic">
 *  <file name="sample-po-tabs-basic/sample-po-tabs-basic.component.html"> </file>
 *  <file name="sample-po-tabs-basic/sample-po-tabs-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-tabs-labs" title="PO Tabs Labs">
 *  <file name="sample-po-tabs-labs/sample-po-tabs-labs.component.html"> </file>
 *  <file name="sample-po-tabs-labs/sample-po-tabs-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-tabs-travel" title="PO Tabs - Travel">
 *  <file name="sample-po-tabs-travel/sample-po-tabs-travel.component.html"> </file>
 *  <file name="sample-po-tabs-travel/sample-po-tabs-travel.component.ts"> </file>
 * </example>
 *
 * <example name="po-tabs-business-conf" title="PO Tabs - Business Conference">
 *  <file name="sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"> </file>
 *  <file name="sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"> </file>
 * </example>
 */
export declare class PoTabsComponent extends PoTabsBaseComponent {
    private changeDetector;
    tabs: QueryList<PoTabComponent>;
    tabDropdown: PoTabDropdownComponent;
    maxNumberOfTabs: number;
    private previousActiveTab;
    constructor(changeDetector: ChangeDetectorRef);
    get isMobileDevice(): RegExpMatchArray;
    get isShowTabDropdown(): boolean;
    get overflowedTabs(): PoTabComponent[];
    get visibleTabs(): PoTabComponent[];
    closePopover(): void;
    isVisibleTab(tab: any): boolean;
    onTabActive(tab: any): void;
    onTabChangeState(tab: PoTabComponent): void;
    selectedTab(tab: PoTabComponent): void;
    trackByFn(_i: any, tab: PoTabComponent): string;
    private activeDistinctTab;
    private activeFirstTab;
    private deactivateTab;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoTabsComponent, "po-tabs", never, {}, {}, ["tabs"], ["*"], false>;
}