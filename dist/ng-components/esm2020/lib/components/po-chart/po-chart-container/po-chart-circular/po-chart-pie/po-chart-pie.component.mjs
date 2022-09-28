import { Component } from '@angular/core';
import { PoChartCircularComponent } from '../po-chart-circular.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-chart-circular-path/po-chart-circular-path.component";
import * as i3 from "../po-chart-circular-label/po-chart-circular-label.component";
const _c0 = ["po-chart-pie", ""];
function PoChartPieComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g")(1, "g", 2, 3);
    i0.ɵɵlistener("p-on-click", function PoChartPieComponent__svg_g_1_Template__svg_g_p_on_click_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onSerieClick($event)); })("p-on-hover", function PoChartPieComponent__svg_g_1_Template__svg_g_p_on_hover_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onSerieHover($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-serie", item_r2);
    i0.ɵɵattribute("key", "po-chart-circular-path-" + i_r3);
} }
function PoChartPieComponent__svg_g_2__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "g", 4, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-serie", item_r9)("p-show-label", ctx_r8.showLabels);
    i0.ɵɵattribute("key", "po-chart-circular-label-" + i_r10);
} }
function PoChartPieComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, PoChartPieComponent__svg_g_2__svg_g_1_Template, 3, 3, "g", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.seriesLabels);
} }
export class PoChartPieComponent extends PoChartCircularComponent {
    /* istanbul ignore next */
    constructor(ngZone, changeDetector) {
        super(ngZone, changeDetector);
    }
    ngOnChanges(changes) {
        if (changes.series || changes.containerSize) {
            this.drawSeries(this.series, this.containerSize.svgHeight);
        }
    }
    calculateCoordinates(height, startRadianAngle, endRadianAngle) {
        const radius = height / 2;
        const sinAlpha = Math.sin(startRadianAngle);
        const cosAlpha = Math.cos(startRadianAngle);
        const sinBeta = Math.sin(endRadianAngle);
        const cosBeta = Math.cos(endRadianAngle);
        const startX = radius + cosAlpha * radius;
        const startY = radius + sinAlpha * radius;
        const endX = radius + cosBeta * radius;
        const endY = radius + sinBeta * radius;
        const largeArc = endRadianAngle - startRadianAngle > Math.PI;
        return [
            'M',
            startX,
            startY,
            'A',
            radius,
            radius,
            0,
            largeArc ? '1,1' : '0,1',
            endX,
            endY,
            'L',
            radius,
            radius,
            'Z'
        ].join(' ');
    }
    getTooltipLabel(data, label, tooltipLabel) {
        const dataLabel = label ? `${label}: ` : '';
        const dataValue = data.toString();
        return tooltipLabel || `${dataLabel}${dataValue}`;
    }
}
PoChartPieComponent.ɵfac = function PoChartPieComponent_Factory(t) { return new (t || PoChartPieComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoChartPieComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartPieComponent, selectors: [["", "po-chart-pie", ""]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["po-chart-circular-path", "", 3, "p-serie", "p-on-click", "p-on-hover"], ["svgPaths", ""], ["po-chart-circular-label", "", 3, "p-serie", "p-show-label"], ["svgLabels", ""]], template: function PoChartPieComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, PoChartPieComponent__svg_g_1_Template, 3, 2, "g", 0);
        i0.ɵɵtemplate(2, PoChartPieComponent__svg_g_2_Template, 2, 1, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.seriesList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canDisplayLabels);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.PoChartCircularPathComponent, i3.PoChartCircularLabelComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartPieComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-pie]', template: "<svg:g>\r\n  <!-- SERIES PATHS -->\r\n  <svg:g *ngFor=\"let item of seriesList; let i = index\">\r\n    <svg:g #svgPaths po-chart-circular-path\r\n      [attr.key]=\"'po-chart-circular-path-' + i\"\r\n      [p-serie]=\"item\"\r\n      (p-on-click)=\"onSerieClick($event)\"\r\n      (p-on-hover)=\"onSerieHover($event)\">\r\n    </svg:g>\r\n  </svg:g>\r\n\r\n  <!-- SERIES LABELS -->\r\n  <svg:g *ngIf=\"canDisplayLabels\">\r\n    <svg:g *ngFor=\"let item of seriesLabels; let i = index\">\r\n      <svg:g #svgLabels po-chart-circular-label\r\n        [attr.key]=\"'po-chart-circular-label-' + i\"\r\n        [p-serie]=\"item\"\r\n        [p-show-label]=\"showLabels\">\r\n      </svg:g>\r\n    </svg:g>\r\n  </svg:g>\r\n</svg:g>\r\n\r\n" }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtcGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9wby1jaGFydC1jb250YWluZXIvcG8tY2hhcnQtY2lyY3VsYXIvcG8tY2hhcnQtcGllL3BvLWNoYXJ0LXBpZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLmNvbXBvbmVudC5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7SUNBeEUseUJBQXNELGNBQUE7SUFJbEQsbUxBQWMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDLHNLQUNyQixlQUFBLDJCQUFvQixDQUFBLElBREM7SUFFckMsaUJBQVEsRUFBQTs7OztJQUhOLGVBQWdCO0lBQWhCLGlDQUFnQjtJQURoQix1REFBMEM7Ozs7SUFTNUMseUJBQXdEO0lBQ3RELDBCQUlRO0lBQ1YsaUJBQVE7Ozs7O0lBSEosZUFBZ0I7SUFBaEIsaUNBQWdCLG1DQUFBO0lBRGhCLHlEQUEyQzs7OztJQUhqRCx5QkFBZ0M7SUFDOUIsOEVBTVE7SUFDVixpQkFBUTs7O0lBUGtCLGVBQWlCO0lBQWpCLDZDQUFpQjs7QURMN0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUF3QjtJQUMvRCwwQkFBMEI7SUFDMUIsWUFBWSxNQUFjLEVBQUUsY0FBaUM7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVTLG9CQUFvQixDQUFDLE1BQWMsRUFBRSxnQkFBd0IsRUFBRSxjQUFzQjtRQUM3RixNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBRTFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXZDLE1BQU0sUUFBUSxHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRTdELE9BQU87WUFDTCxHQUFHO1lBQ0gsTUFBTTtZQUNOLE1BQU07WUFDTixHQUFHO1lBQ0gsTUFBTTtZQUNOLE1BQU07WUFDTixDQUFDO1lBQ0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEIsSUFBSTtZQUNKLElBQUk7WUFDSixHQUFHO1lBQ0gsTUFBTTtZQUNOLE1BQU07WUFDTixHQUFHO1NBQ0osQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRVMsZUFBZSxDQUFDLElBQVksRUFBRSxLQUFjLEVBQUUsWUFBcUI7UUFDM0UsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxDLE9BQU8sWUFBWSxJQUFJLEdBQUcsU0FBUyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQ3BELENBQUM7O3NGQXBEVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1JoQyxtQkFBTztRQUFQLHlCQUFPO1FBRUwscUVBT1E7UUFHUixxRUFRUTtRQUNWLGlCQUFROztRQW5Ca0IsZUFBZTtRQUFmLHdDQUFlO1FBVS9CLGVBQXNCO1FBQXRCLDJDQUFzQjs7dUZESm5CLG1CQUFtQjtjQUovQixTQUFTOzJCQUNFLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0Q2lyY3VsYXJDb21wb25lbnQgfSBmcm9tICcuLi9wby1jaGFydC1jaXJjdWxhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbcG8tY2hhcnQtcGllXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuLi9wby1jaGFydC1jaXJjdWxhci5jb21wb25lbnQuc3ZnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9DaGFydFBpZUNvbXBvbmVudCBleHRlbmRzIFBvQ2hhcnRDaXJjdWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBjb25zdHJ1Y3RvcihuZ1pvbmU6IE5nWm9uZSwgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihuZ1pvbmUsIGNoYW5nZURldGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnNlcmllcyB8fCBjaGFuZ2VzLmNvbnRhaW5lclNpemUpIHtcclxuICAgICAgdGhpcy5kcmF3U2VyaWVzKHRoaXMuc2VyaWVzLCB0aGlzLmNvbnRhaW5lclNpemUuc3ZnSGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVDb29yZGluYXRlcyhoZWlnaHQ6IG51bWJlciwgc3RhcnRSYWRpYW5BbmdsZTogbnVtYmVyLCBlbmRSYWRpYW5BbmdsZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByYWRpdXMgPSBoZWlnaHQgLyAyO1xyXG5cclxuICAgIGNvbnN0IHNpbkFscGhhID0gTWF0aC5zaW4oc3RhcnRSYWRpYW5BbmdsZSk7XHJcbiAgICBjb25zdCBjb3NBbHBoYSA9IE1hdGguY29zKHN0YXJ0UmFkaWFuQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IHNpbkJldGEgPSBNYXRoLnNpbihlbmRSYWRpYW5BbmdsZSk7XHJcbiAgICBjb25zdCBjb3NCZXRhID0gTWF0aC5jb3MoZW5kUmFkaWFuQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0WCA9IHJhZGl1cyArIGNvc0FscGhhICogcmFkaXVzO1xyXG4gICAgY29uc3Qgc3RhcnRZID0gcmFkaXVzICsgc2luQWxwaGEgKiByYWRpdXM7XHJcblxyXG4gICAgY29uc3QgZW5kWCA9IHJhZGl1cyArIGNvc0JldGEgKiByYWRpdXM7XHJcbiAgICBjb25zdCBlbmRZID0gcmFkaXVzICsgc2luQmV0YSAqIHJhZGl1cztcclxuXHJcbiAgICBjb25zdCBsYXJnZUFyYyA9IGVuZFJhZGlhbkFuZ2xlIC0gc3RhcnRSYWRpYW5BbmdsZSA+IE1hdGguUEk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ00nLFxyXG4gICAgICBzdGFydFgsXHJcbiAgICAgIHN0YXJ0WSxcclxuICAgICAgJ0EnLFxyXG4gICAgICByYWRpdXMsXHJcbiAgICAgIHJhZGl1cyxcclxuICAgICAgMCxcclxuICAgICAgbGFyZ2VBcmMgPyAnMSwxJyA6ICcwLDEnLFxyXG4gICAgICBlbmRYLFxyXG4gICAgICBlbmRZLFxyXG4gICAgICAnTCcsXHJcbiAgICAgIHJhZGl1cyxcclxuICAgICAgcmFkaXVzLFxyXG4gICAgICAnWidcclxuICAgIF0uam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFRvb2x0aXBMYWJlbChkYXRhOiBudW1iZXIsIGxhYmVsPzogc3RyaW5nLCB0b29sdGlwTGFiZWw/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGFMYWJlbCA9IGxhYmVsID8gYCR7bGFiZWx9OiBgIDogJyc7XHJcbiAgICBjb25zdCBkYXRhVmFsdWUgPSBkYXRhLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIHRvb2x0aXBMYWJlbCB8fCBgJHtkYXRhTGFiZWx9JHtkYXRhVmFsdWV9YDtcclxuICB9XHJcbn1cclxuIiwiPHN2ZzpnPlxyXG4gIDwhLS0gU0VSSUVTIFBBVEhTIC0tPlxyXG4gIDxzdmc6ZyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZXJpZXNMaXN0OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICA8c3ZnOmcgI3N2Z1BhdGhzIHBvLWNoYXJ0LWNpcmN1bGFyLXBhdGhcclxuICAgICAgW2F0dHIua2V5XT1cIidwby1jaGFydC1jaXJjdWxhci1wYXRoLScgKyBpXCJcclxuICAgICAgW3Atc2VyaWVdPVwiaXRlbVwiXHJcbiAgICAgIChwLW9uLWNsaWNrKT1cIm9uU2VyaWVDbGljaygkZXZlbnQpXCJcclxuICAgICAgKHAtb24taG92ZXIpPVwib25TZXJpZUhvdmVyKCRldmVudClcIj5cclxuICAgIDwvc3ZnOmc+XHJcbiAgPC9zdmc6Zz5cclxuXHJcbiAgPCEtLSBTRVJJRVMgTEFCRUxTIC0tPlxyXG4gIDxzdmc6ZyAqbmdJZj1cImNhbkRpc3BsYXlMYWJlbHNcIj5cclxuICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZXJpZXNMYWJlbHM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgPHN2ZzpnICNzdmdMYWJlbHMgcG8tY2hhcnQtY2lyY3VsYXItbGFiZWxcclxuICAgICAgICBbYXR0ci5rZXldPVwiJ3BvLWNoYXJ0LWNpcmN1bGFyLWxhYmVsLScgKyBpXCJcclxuICAgICAgICBbcC1zZXJpZV09XCJpdGVtXCJcclxuICAgICAgICBbcC1zaG93LWxhYmVsXT1cInNob3dMYWJlbHNcIj5cclxuICAgICAgPC9zdmc6Zz5cclxuICAgIDwvc3ZnOmc+XHJcbiAgPC9zdmc6Zz5cclxuPC9zdmc6Zz5cclxuXHJcbiJdfQ==