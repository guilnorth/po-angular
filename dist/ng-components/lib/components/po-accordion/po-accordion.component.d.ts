import { QueryList, OnDestroy } from '@angular/core';
import { PoAccordionBaseComponent } from './po-accordion-base.component';
import { PoAccordionItemComponent } from './po-accordion-item/po-accordion-item.component';
import { PoAccordionService } from './services/po-accordion.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoAccordionBaseComponent
 *
 * @example
 *
 * <example name="po-accordion-basic" title="PO Accordion Basic" >
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.html"> </file>
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.ts"> </file>
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.e2e-spec.ts"> </file>
 *  <file name="sample-po-accordion-basic/sample-po-accordion-basic.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-accordion-labs" title="PO Accordion Labs" >
 *  <file name="sample-po-accordion-labs/sample-po-accordion-labs.component.html"> </file>
 *  <file name="sample-po-accordion-labs/sample-po-accordion-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-accordion-faq" title="PO Accordion - FAQs" >
 *  <file name="sample-po-accordion-faq/sample-po-accordion-faq.component.html"> </file>
 *  <file name="sample-po-accordion-faq/sample-po-accordion-faq.component.ts"> </file>
 * </example>
 */
export declare class PoAccordionComponent extends PoAccordionBaseComponent implements OnDestroy {
    private accordionService;
    poAccordionItems: QueryList<PoAccordionItemComponent>;
    private accordionServiceSubscription;
    private expandedActiveAccordionItem;
    constructor(accordionService: PoAccordionService);
    ngOnDestroy(): void;
    headerToggle(event: boolean, poAccordionItem: PoAccordionItemComponent): void;
    private receiveFromChildAccordionSubscription;
    private toggle;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoAccordionComponent, "po-accordion", never, {}, {}, ["poAccordionItems"], never, false>;
}
