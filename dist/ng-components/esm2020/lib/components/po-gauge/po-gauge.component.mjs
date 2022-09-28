import { Component, ElementRef, ViewChild } from '@angular/core';
import { PoGaugePadding } from './po-gauge-default-values.constant';
import { PoGaugeBaseComponent } from './po-gauge-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-color/po-color.service";
import * as i2 from "./po-gauge-title/po-gauge-title.component";
import * as i3 from "./po-gauge-legend/po-gauge-legend.component";
import * as i4 from "./po-gauge-svg/po-gauge-svg.component";
import * as i5 from "./po-gauge-description/po-gauge-description.component";
const _c0 = ["descriptionEl"];
const _c1 = ["legendEl"];
const _c2 = ["titleEl"];
const _c3 = ["svgEl"];
/**
 * @docsExtends PoGaugeBaseComponent
 *
 * @example
 *
 * <example name="po-gauge-basic" title="PO Gauge Basic">
 *  <file name="sample-po-gauge-basic/sample-po-gauge-basic.component.html"> </file>
 *  <file name="sample-po-gauge-basic/sample-po-gauge-basic.component.ts"> </file>
 * </example>
 * <example name="po-gauge-labs" title="PO Gauge Labs">
 *  <file name="sample-po-gauge-labs/sample-po-gauge-labs.component.html"> </file>
 *  <file name="sample-po-gauge-labs/sample-po-gauge-labs.component.ts"> </file>
 * </example>
 * <example name="po-gauge-summary" title="PO Gauge Summary">
 *  <file name="sample-po-gauge-summary/sample-po-gauge-summary.component.html"> </file>
 *  <file name="sample-po-gauge-summary/sample-po-gauge-summary.component.ts"> </file>
 * </example>
 */
export class PoGaugeComponent extends PoGaugeBaseComponent {
    constructor(colorService, changeDetector) {
        super(colorService);
        this.colorService = colorService;
        this.changeDetector = changeDetector;
        this.isLoaded = false;
    }
    get hasElementRef() {
        return !!this.svgEl?.nativeElement.offsetWidth;
    }
    get hasRanges() {
        return this.ranges.length > 0;
    }
    ngDoCheck() {
        if (!this.isLoaded && this.hasElementRef) {
            this.isLoaded = true;
            this.svgContainerSize();
        }
    }
    svgContainerSize() {
        if (this.svgEl?.nativeElement.offsetWidth) {
            this.changeDetector.detectChanges();
            const titleHeight = this.titleEl.nativeElement?.offsetHeight ?? 0;
            const legendHeight = this.legendEl.nativeElement?.offsetHeight ?? 0;
            const descriptionHeight = this.descriptionEl.nativeElement?.offsetHeight ?? 0;
            const height = this.height - titleHeight - legendHeight - descriptionHeight - PoGaugePadding * 2;
            const width = this.svgEl.nativeElement.offsetWidth;
            this.svgContainer = { width, height };
        }
    }
}
PoGaugeComponent.ɵfac = function PoGaugeComponent_Factory(t) { return new (t || PoGaugeComponent)(i0.ɵɵdirectiveInject(i1.PoColorService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoGaugeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugeComponent, selectors: [["po-gauge"]], viewQuery: function PoGaugeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
        i0.ɵɵviewQuery(_c1, 5, ElementRef);
        i0.ɵɵviewQuery(_c2, 5, ElementRef);
        i0.ɵɵviewQuery(_c3, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.descriptionEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.legendEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgEl = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 11, consts: [[1, "po-gauge-wrapper"], [3, "p-title"], ["titleEl", ""], [3, "p-description", "p-description-width", "p-has-ranges", "p-value"], ["descriptionEl", ""], [3, "p-container", "p-ranges", "p-value"], ["svgEl", ""], [3, "p-ranges"], ["legendEl", ""]], template: function PoGaugeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "po-gauge-title", 1, 2)(3, "po-gauge-description", 3, 4)(5, "po-gauge-svg", 5, 6)(7, "po-gauge-legend", 7, 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("p-title", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-description", ctx.description)("p-description-width", ctx.height)("p-has-ranges", ctx.hasRanges)("p-value", ctx.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-container", ctx.svgContainer)("p-ranges", ctx.ranges)("p-value", ctx.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-ranges", ctx.ranges);
    } }, dependencies: [i2.PoGaugeTitleComponent, i3.PoGaugeLegendComponent, i4.PoGaugeSvgComponent, i5.PoGaugeDescriptionComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeComponent, [{
        type: Component,
        args: [{ selector: 'po-gauge', template: "<div class=\"po-gauge-wrapper\" [style.height.px]=\"height\">\r\n  <po-gauge-title #titleEl [p-title]=\"title\"></po-gauge-title>\r\n\r\n  <po-gauge-description\r\n    #descriptionEl\r\n    [p-description]=\"description\"\r\n    [p-description-width]=\"height\"\r\n    [p-has-ranges]=\"hasRanges\"\r\n    [p-value]=\"value\"\r\n  ></po-gauge-description>\r\n\r\n  <po-gauge-svg #svgEl [p-container]=\"svgContainer\" [p-ranges]=\"ranges\" [p-value]=\"value\"></po-gauge-svg>\r\n\r\n  <po-gauge-legend #legendEl [p-ranges]=\"ranges\"> </po-gauge-legend>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoColorService }, { type: i0.ChangeDetectorRef }]; }, { descriptionEl: [{
            type: ViewChild,
            args: ['descriptionEl', { read: ElementRef }]
        }], legendEl: [{
            type: ViewChild,
            args: ['legendEl', { read: ElementRef }]
        }], titleEl: [{
            type: ViewChild,
            args: ['titleEl', { read: ElementRef }]
        }], svgEl: [{
            type: ViewChild,
            args: ['svgEl', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdhdWdlL3BvLWdhdWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBVyxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUlwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFHakU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBS0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQjtJQVV4RCxZQUFzQixZQUE0QixFQUFVLGNBQWlDO1FBQzNGLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQURBLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUZyRixhQUFRLEdBQVksS0FBSyxDQUFDO0lBSWxDLENBQUM7SUFFRCxJQUFZLGFBQWE7UUFDdkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFcEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUNsRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFZLElBQUksQ0FBQyxDQUFDO1lBQ3BFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUU5RSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUNqRyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFFbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7O2dGQTFDVSxnQkFBZ0I7bUVBQWhCLGdCQUFnQjsrQkFDUyxVQUFVOytCQUNmLFVBQVU7K0JBQ1gsVUFBVTsrQkFDWixVQUFVOzs7Ozs7OztRQ25DeEMsOEJBQXlEO1FBQ3ZELHVDQUE0RCxpQ0FBQSx5QkFBQSw0QkFBQTtRQWE5RCxpQkFBTTs7UUFkd0IsMENBQTBCO1FBQzdCLGVBQWlCO1FBQWpCLG1DQUFpQjtRQUl4QyxlQUE2QjtRQUE3QiwrQ0FBNkIsbUNBQUEsK0JBQUEsc0JBQUE7UUFNVixlQUE0QjtRQUE1Qiw4Q0FBNEIsd0JBQUEsc0JBQUE7UUFFdEIsZUFBbUI7UUFBbkIscUNBQW1COzt1RkRrQm5DLGdCQUFnQjtjQUo1QixTQUFTOzJCQUNFLFVBQVU7aUdBSThCLGFBQWE7a0JBQTlELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNILFFBQVE7a0JBQXBELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNDLE9BQU87a0JBQWxELFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNBLEtBQUs7a0JBQTlDLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9HYXVnZVBhZGRpbmcgfSBmcm9tICcuL3BvLWdhdWdlLWRlZmF1bHQtdmFsdWVzLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvQ29sb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tY29sb3IvcG8tY29sb3Iuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb0dhdWdlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vcG8tZ2F1Z2UtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0dhdWdlU3ZnQ29udGFpbmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWdhdWdlLXN2Zy1jb250YWluZXIuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9HYXVnZUJhc2VDb21wb25lbnRcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWdhdWdlLWJhc2ljXCIgdGl0bGU9XCJQTyBHYXVnZSBCYXNpY1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1nYXVnZS1iYXNpYy9zYW1wbGUtcG8tZ2F1Z2UtYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1nYXVnZS1iYXNpYy9zYW1wbGUtcG8tZ2F1Z2UtYmFzaWMuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZ2F1Z2UtbGFic1wiIHRpdGxlPVwiUE8gR2F1Z2UgTGFic1wiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1nYXVnZS1sYWJzL3NhbXBsZS1wby1nYXVnZS1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZ2F1Z2UtbGFicy9zYW1wbGUtcG8tZ2F1Z2UtbGFicy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1nYXVnZS1zdW1tYXJ5XCIgdGl0bGU9XCJQTyBHYXVnZSBTdW1tYXJ5XCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLWdhdWdlLXN1bW1hcnkvc2FtcGxlLXBvLWdhdWdlLXN1bW1hcnkuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1nYXVnZS1zdW1tYXJ5L3NhbXBsZS1wby1nYXVnZS1zdW1tYXJ5LmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZ2F1Z2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1nYXVnZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvR2F1Z2VDb21wb25lbnQgZXh0ZW5kcyBQb0dhdWdlQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gIEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uRWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGVzY3JpcHRpb25FbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdsZWdlbmRFbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBsZWdlbmRFbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0aXRsZUVsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRpdGxlRWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc3ZnRWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc3ZnRWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHN2Z0NvbnRhaW5lcjogUG9HYXVnZVN2Z0NvbnRhaW5lcjtcclxuXHJcbiAgcHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29sb3JTZXJ2aWNlOiBQb0NvbG9yU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNvbG9yU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBoYXNFbGVtZW50UmVmKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5zdmdFbD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICB9XHJcblxyXG4gIGdldCBoYXNSYW5nZXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5nZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICghdGhpcy5pc0xvYWRlZCAmJiB0aGlzLmhhc0VsZW1lbnRSZWYpIHtcclxuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3ZnQ29udGFpbmVyU2l6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN2Z0NvbnRhaW5lclNpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdmdFbD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlSGVpZ2h0ID0gdGhpcy50aXRsZUVsLm5hdGl2ZUVsZW1lbnQ/Lm9mZnNldEhlaWdodCA/PyAwO1xyXG4gICAgICBjb25zdCBsZWdlbmRIZWlnaHQgPSB0aGlzLmxlZ2VuZEVsLm5hdGl2ZUVsZW1lbnQ/Lm9mZnNldEhlaWdodCA/PyAwO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkhlaWdodCA9IHRoaXMuZGVzY3JpcHRpb25FbC5uYXRpdmVFbGVtZW50Py5vZmZzZXRIZWlnaHQgPz8gMDtcclxuXHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGl0bGVIZWlnaHQgLSBsZWdlbmRIZWlnaHQgLSBkZXNjcmlwdGlvbkhlaWdodCAtIFBvR2F1Z2VQYWRkaW5nICogMjtcclxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnN2Z0VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICB0aGlzLnN2Z0NvbnRhaW5lciA9IHsgd2lkdGgsIGhlaWdodCB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tZ2F1Z2Utd3JhcHBlclwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCI+XHJcbiAgPHBvLWdhdWdlLXRpdGxlICN0aXRsZUVsIFtwLXRpdGxlXT1cInRpdGxlXCI+PC9wby1nYXVnZS10aXRsZT5cclxuXHJcbiAgPHBvLWdhdWdlLWRlc2NyaXB0aW9uXHJcbiAgICAjZGVzY3JpcHRpb25FbFxyXG4gICAgW3AtZGVzY3JpcHRpb25dPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgW3AtZGVzY3JpcHRpb24td2lkdGhdPVwiaGVpZ2h0XCJcclxuICAgIFtwLWhhcy1yYW5nZXNdPVwiaGFzUmFuZ2VzXCJcclxuICAgIFtwLXZhbHVlXT1cInZhbHVlXCJcclxuICA+PC9wby1nYXVnZS1kZXNjcmlwdGlvbj5cclxuXHJcbiAgPHBvLWdhdWdlLXN2ZyAjc3ZnRWwgW3AtY29udGFpbmVyXT1cInN2Z0NvbnRhaW5lclwiIFtwLXJhbmdlc109XCJyYW5nZXNcIiBbcC12YWx1ZV09XCJ2YWx1ZVwiPjwvcG8tZ2F1Z2Utc3ZnPlxyXG5cclxuICA8cG8tZ2F1Z2UtbGVnZW5kICNsZWdlbmRFbCBbcC1yYW5nZXNdPVwicmFuZ2VzXCI+IDwvcG8tZ2F1Z2UtbGVnZW5kPlxyXG48L2Rpdj5cclxuIl19