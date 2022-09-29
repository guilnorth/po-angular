import { OnInit, ViewContainerRef } from '@angular/core';
import { PoWidgetBaseComponent } from './po-widget-base.component';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoWidgetBaseComponent
 *
 * @example
 *
 * <example name="po-widget-basic" title="PO Widget Basic">
 *  <file name="sample-po-widget-basic/sample-po-widget-basic.component.html"> </file>
 *  <file name="sample-po-widget-basic/sample-po-widget-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-widget-labs" title="PO Widget Labs">
 *  <file name="sample-po-widget-labs/sample-po-widget-labs.component.html"> </file>
 *  <file name="sample-po-widget-labs/sample-po-widget-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-widget-finance-dashboard" title="PO Widget - Finance dashboard">
 *  <file name="sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"> </file>
 *  <file name="sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"> </file>
 * </example>
 *
 * <example name="po-widget-card" title="PO Widget - Card">
 *  <file name="sample-po-widget-card/sample-po-widget-card.component.html"> </file>
 *  <file name="sample-po-widget-card/sample-po-widget-card.component.ts"> </file>
 * </example>
 *
 */
export declare class PoWidgetComponent extends PoWidgetBaseComponent implements OnInit {
    get showTitleAction(): boolean;
    constructor(viewRef: ViewContainerRef);
    ngOnInit(): void;
    hasTitleHelpOrSetting(): boolean;
    onClick(event: MouseEvent): void;
    openHelp(event: MouseEvent): void;
    runPrimaryAction(event: MouseEvent): void;
    runSecondaryAction(event: MouseEvent): void;
    runTitleAction(event: MouseEvent): void;
    setHeight(height: number): void;
    settingOutput(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoWidgetComponent, "po-widget", never, {}, {}, never, ["*"], false>;
}