import { AfterContentInit, ChangeDetectorRef, DoCheck, IterableDiffers } from '@angular/core';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoPopupComponent } from '../po-popup/po-popup.component';
import { PoListViewAction } from './interfaces/po-list-view-action.interface';
import { PoListViewBaseComponent } from './po-list-view-base.component';
import { PoListViewContentTemplateDirective } from './po-list-view-content-template/po-list-view-content-template.directive';
import { PoListViewDetailTemplateDirective } from './po-list-view-detail-template/po-list-view-detail-template.directive';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoListViewBaseComponent
 *
 * @example
 *
 * <example name="po-list-view-basic" title="PO List View Basic">
 *  <file name="sample-po-list-view-basic/sample-po-list-view-basic.component.html"> </file>
 *  <file name="sample-po-list-view-basic/sample-po-list-view-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-list-view-labs" title="PO List View Labs">
 *  <file name="sample-po-list-view-labs/sample-po-list-view-labs.component.html"> </file>
 *  <file name="sample-po-list-view-labs/sample-po-list-view-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-list-view-hiring-processes" title="PO List View - Hiring Processes">
 *  <file name="sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"> </file>
 *  <file name="sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"> </file>
 *  <file name="sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"> </file>
 * </example>
 */
export declare class PoListViewComponent extends PoListViewBaseComponent implements AfterContentInit, DoCheck {
    private changeDetector;
    listViewContentTemplate: PoListViewContentTemplateDirective;
    listViewDetailTemplate: PoListViewDetailTemplateDirective;
    poPopupComponent: PoPopupComponent;
    private differ;
    constructor(changeDetector: ChangeDetectorRef, differs: IterableDiffers, languageService: PoLanguageService);
    get hasContentTemplate(): boolean;
    get hasDetailTemplate(): boolean;
    get displayShowMoreButton(): boolean;
    get showButtonsActions(): boolean;
    get showPopupActions(): boolean;
    get titleHasAction(): boolean;
    get visibleActions(): PoListViewAction[];
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    checkTitleType(item: any): "externalLink" | "internalLink" | "noLink";
    getItemTitle(item: any): any;
    hasItems(): boolean;
    returnBooleanValue(listViewAction: PoListViewAction, item: any): any;
    trackBy(index: any): any;
    togglePopup(item: any, targetRef: HTMLElement): void;
    private checkItemsChange;
    private initShowDetail;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoListViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoListViewComponent, "po-list-view", never, {}, {}, ["listViewContentTemplate", "listViewDetailTemplate"], never, false>;
}
