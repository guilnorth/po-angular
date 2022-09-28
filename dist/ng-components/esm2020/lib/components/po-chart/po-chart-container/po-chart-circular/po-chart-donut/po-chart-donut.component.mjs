import { Component } from '@angular/core';
import { convertNumberToDecimal } from '../../../../../utils/util';
import { PoDefaultColorsTextBlack } from '../../../../../services/po-color/po-colors.constant';
import { PoChartDonutDefaultThickness, PoChartStartAngle } from '../../../helpers/po-chart-default-values.constant';
import { PoChartCircularComponent } from '../po-chart-circular.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../po-chart-circular-path/po-chart-circular-path.component";
import * as i3 from "../po-chart-circular-label/po-chart-circular-label.component";
const _c0 = ["po-chart-donut", ""];
function PoChartDonutComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g")(1, "g", 2, 3);
    i0.ɵɵlistener("p-on-click", function PoChartDonutComponent__svg_g_1_Template__svg_g_p_on_click_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onSerieClick($event)); })("p-on-hover", function PoChartDonutComponent__svg_g_1_Template__svg_g_p_on_hover_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onSerieHover($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-serie", item_r2);
    i0.ɵɵattribute("key", "po-chart-circular-path-" + i_r3);
} }
function PoChartDonutComponent__svg_g_2__svg_g_1_Template(rf, ctx) { if (rf & 1) {
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
function PoChartDonutComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, PoChartDonutComponent__svg_g_2__svg_g_1_Template, 3, 3, "g", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.seriesLabels);
} }
export class PoChartDonutComponent extends PoChartCircularComponent {
    /* istanbul ignore next */
    constructor(ngZone, changeDetector) {
        super(ngZone, changeDetector);
        this.poChartBlackColor = '#000000';
        this.poChartWhiteColor = '#ffffff';
    }
    ngOnChanges(changes) {
        if (changes.series || changes.containerSize || changes.options) {
            this.drawSeries(this.series, this.containerSize.svgHeight);
            this.applySeriesLabels(this.seriesList, this.containerSize.svgHeight);
        }
    }
    calculateCoordinates(height, startRadianAngle, endRadianAngle) {
        const radius = height / 2;
        const innerRadius = this.getInnerRadius(radius);
        const sinAlpha = Math.sin(startRadianAngle);
        const cosAlpha = Math.cos(startRadianAngle);
        const sinBeta = Math.sin(endRadianAngle);
        const cosBeta = Math.cos(endRadianAngle);
        const startX = radius + cosAlpha * radius;
        const startY = radius + sinAlpha * radius;
        const endX = radius + cosBeta * radius;
        const endY = radius + sinBeta * radius;
        const startInnerX = radius + cosAlpha * innerRadius;
        const startInnerY = radius + sinAlpha * innerRadius;
        const endInnerX = radius + cosBeta * innerRadius;
        const endInnerY = radius + sinBeta * innerRadius;
        const largeArc = endRadianAngle - startRadianAngle > Math.PI;
        this.verifyDisplayLabels(radius, innerRadius);
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
            endInnerX,
            endInnerY,
            'A',
            innerRadius,
            innerRadius,
            0,
            largeArc ? '1,0' : '0,0',
            startInnerX,
            startInnerY,
            'Z'
        ].join(' ');
    }
    getTooltipLabel(data, label, tooltipLabel) {
        const dataLabel = label ? `${label}: ` : '';
        const dataValue = this.getPercentValue(data, this.totalValue) + '%';
        return tooltipLabel || `${dataLabel}${dataValue}`;
    }
    applySeriesLabels(seriesList, height) {
        let startRadianAngle = PoChartStartAngle;
        let endRadianAngle = PoChartStartAngle;
        this.seriesLabels = seriesList.map(serie => {
            startRadianAngle = endRadianAngle;
            endRadianAngle = startRadianAngle + this.calculateAngle(serie.data, this.totalValue);
            const label = this.getPercentValue(serie.data, this.totalValue) + '% ';
            const color = this.getTextColor(serie.color);
            const coordinates = this.calculateLabelCoordinates(height, startRadianAngle, endRadianAngle);
            return { ...coordinates, label, color };
        });
    }
    calculateLabelCoordinates(height, startRadianAngle, endRadianAngle) {
        const radius = height / 2;
        const innerRadius = this.getInnerRadius(radius);
        const sliceCenterAngle = (startRadianAngle + endRadianAngle) / 2;
        const labelRadius = innerRadius + (radius - innerRadius) / 2;
        const xCoordinate = labelRadius * Math.cos(sliceCenterAngle) + radius;
        const yCoordinate = labelRadius * Math.sin(sliceCenterAngle) + radius;
        return { xCoordinate, yCoordinate };
    }
    getInnerRadius(radius) {
        const defaultInnerRadius = radius - PoChartDonutDefaultThickness;
        return this.innerRadius >= 0 ? (this.innerRadius / 100) * radius : defaultInnerRadius;
    }
    getPercentValue(value, totalValue) {
        const percentValue = (value / totalValue) * 100;
        const floatPercentValue = convertNumberToDecimal(percentValue, 2);
        return String(floatPercentValue).replace('.', ',');
    }
    getTextColor(color) {
        if (PoDefaultColorsTextBlack.includes(color)) {
            return this.poChartBlackColor;
        }
        return this.poChartWhiteColor;
    }
    verifyDisplayLabels(radius, innerRadius) {
        this.canDisplayLabels = radius - innerRadius >= radius - (radius - PoChartDonutDefaultThickness);
    }
}
PoChartDonutComponent.ɵfac = function PoChartDonutComponent_Factory(t) { return new (t || PoChartDonutComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoChartDonutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoChartDonutComponent, selectors: [["", "po-chart-donut", ""]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["po-chart-circular-path", "", 3, "p-serie", "p-on-click", "p-on-hover"], ["svgPaths", ""], ["po-chart-circular-label", "", 3, "p-serie", "p-show-label"], ["svgLabels", ""]], template: function PoChartDonutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, PoChartDonutComponent__svg_g_1_Template, 3, 2, "g", 0);
        i0.ɵɵtemplate(2, PoChartDonutComponent__svg_g_2_Template, 2, 1, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.seriesList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canDisplayLabels);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.PoChartCircularPathComponent, i3.PoChartCircularLabelComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartDonutComponent, [{
        type: Component,
        args: [{ selector: '[po-chart-donut]', template: "<svg:g>\r\n  <!-- SERIES PATHS -->\r\n  <svg:g *ngFor=\"let item of seriesList; let i = index\">\r\n    <svg:g #svgPaths po-chart-circular-path\r\n      [attr.key]=\"'po-chart-circular-path-' + i\"\r\n      [p-serie]=\"item\"\r\n      (p-on-click)=\"onSerieClick($event)\"\r\n      (p-on-hover)=\"onSerieHover($event)\">\r\n    </svg:g>\r\n  </svg:g>\r\n\r\n  <!-- SERIES LABELS -->\r\n  <svg:g *ngIf=\"canDisplayLabels\">\r\n    <svg:g *ngFor=\"let item of seriesLabels; let i = index\">\r\n      <svg:g #svgLabels po-chart-circular-label\r\n        [attr.key]=\"'po-chart-circular-label-' + i\"\r\n        [p-serie]=\"item\"\r\n        [p-show-label]=\"showLabels\">\r\n      </svg:g>\r\n    </svg:g>\r\n  </svg:g>\r\n</svg:g>\r\n\r\n" }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L3BvLWNoYXJ0LWNvbnRhaW5lci9wby1jaGFydC1jaXJjdWxhci9wby1jaGFydC1kb251dC9wby1jaGFydC1kb251dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtY29udGFpbmVyL3BvLWNoYXJ0LWNpcmN1bGFyL3BvLWNoYXJ0LWNpcmN1bGFyLmNvbXBvbmVudC5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXBILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7SUNKeEUseUJBQXNELGNBQUE7SUFJbEQscUxBQWMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDLHdLQUNyQixlQUFBLDJCQUFvQixDQUFBLElBREM7SUFFckMsaUJBQVEsRUFBQTs7OztJQUhOLGVBQWdCO0lBQWhCLGlDQUFnQjtJQURoQix1REFBMEM7Ozs7SUFTNUMseUJBQXdEO0lBQ3RELDBCQUlRO0lBQ1YsaUJBQVE7Ozs7O0lBSEosZUFBZ0I7SUFBaEIsaUNBQWdCLG1DQUFBO0lBRGhCLHlEQUEyQzs7OztJQUhqRCx5QkFBZ0M7SUFDOUIsZ0ZBTVE7SUFDVixpQkFBUTs7O0lBUGtC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QUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRU8sbUJBQW1CLENBQUMsTUFBYyxFQUFFLFdBQW1CO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsV0FBVyxJQUFJLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ25HLENBQUM7OzBGQS9IVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1psQyxtQkFBTztRQUFQLHlCQUFPO1FBRUwsdUVBT1E7UUFHUix1RUFRUTtRQUNWLGlCQUFROztRQW5Ca0IsZUFBZTtRQUFmLHdDQUFlO1FBVS9CLGVBQXNCO1FBQXRCLDJDQUFzQjs7dUZEQW5CLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNFLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0TnVtYmVyVG9EZWNpbWFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvRGVmYXVsdENvbG9yc1RleHRCbGFjayB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWNvbG9yL3BvLWNvbG9ycy5jb25zdGFudCc7XHJcbmltcG9ydCB7IFBvQ2hhcnREb251dERlZmF1bHRUaGlja25lc3MsIFBvQ2hhcnRTdGFydEFuZ2xlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9wby1jaGFydC1kZWZhdWx0LXZhbHVlcy5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0Q2lyY3VsYXJDb21wb25lbnQgfSBmcm9tICcuLi9wby1jaGFydC1jaXJjdWxhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbcG8tY2hhcnQtZG9udXRdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4uL3BvLWNoYXJ0LWNpcmN1bGFyLmNvbXBvbmVudC5zdmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0RG9udXRDb21wb25lbnQgZXh0ZW5kcyBQb0NoYXJ0Q2lyY3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9DaGFydEJsYWNrQ29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb0NoYXJ0V2hpdGVDb2xvciA9ICcjZmZmZmZmJztcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBjb25zdHJ1Y3RvcihuZ1pvbmU6IE5nWm9uZSwgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihuZ1pvbmUsIGNoYW5nZURldGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnNlcmllcyB8fCBjaGFuZ2VzLmNvbnRhaW5lclNpemUgfHwgY2hhbmdlcy5vcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuZHJhd1Nlcmllcyh0aGlzLnNlcmllcywgdGhpcy5jb250YWluZXJTaXplLnN2Z0hlaWdodCk7XHJcbiAgICAgIHRoaXMuYXBwbHlTZXJpZXNMYWJlbHModGhpcy5zZXJpZXNMaXN0LCB0aGlzLmNvbnRhaW5lclNpemUuc3ZnSGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVDb29yZGluYXRlcyhoZWlnaHQ6IG51bWJlciwgc3RhcnRSYWRpYW5BbmdsZTogbnVtYmVyLCBlbmRSYWRpYW5BbmdsZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByYWRpdXMgPSBoZWlnaHQgLyAyO1xyXG5cclxuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gdGhpcy5nZXRJbm5lclJhZGl1cyhyYWRpdXMpO1xyXG5cclxuICAgIGNvbnN0IHNpbkFscGhhID0gTWF0aC5zaW4oc3RhcnRSYWRpYW5BbmdsZSk7XHJcbiAgICBjb25zdCBjb3NBbHBoYSA9IE1hdGguY29zKHN0YXJ0UmFkaWFuQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IHNpbkJldGEgPSBNYXRoLnNpbihlbmRSYWRpYW5BbmdsZSk7XHJcbiAgICBjb25zdCBjb3NCZXRhID0gTWF0aC5jb3MoZW5kUmFkaWFuQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0WCA9IHJhZGl1cyArIGNvc0FscGhhICogcmFkaXVzO1xyXG4gICAgY29uc3Qgc3RhcnRZID0gcmFkaXVzICsgc2luQWxwaGEgKiByYWRpdXM7XHJcblxyXG4gICAgY29uc3QgZW5kWCA9IHJhZGl1cyArIGNvc0JldGEgKiByYWRpdXM7XHJcbiAgICBjb25zdCBlbmRZID0gcmFkaXVzICsgc2luQmV0YSAqIHJhZGl1cztcclxuXHJcbiAgICBjb25zdCBzdGFydElubmVyWCA9IHJhZGl1cyArIGNvc0FscGhhICogaW5uZXJSYWRpdXM7XHJcbiAgICBjb25zdCBzdGFydElubmVyWSA9IHJhZGl1cyArIHNpbkFscGhhICogaW5uZXJSYWRpdXM7XHJcblxyXG4gICAgY29uc3QgZW5kSW5uZXJYID0gcmFkaXVzICsgY29zQmV0YSAqIGlubmVyUmFkaXVzO1xyXG4gICAgY29uc3QgZW5kSW5uZXJZID0gcmFkaXVzICsgc2luQmV0YSAqIGlubmVyUmFkaXVzO1xyXG5cclxuICAgIGNvbnN0IGxhcmdlQXJjID0gZW5kUmFkaWFuQW5nbGUgLSBzdGFydFJhZGlhbkFuZ2xlID4gTWF0aC5QSTtcclxuXHJcbiAgICB0aGlzLnZlcmlmeURpc3BsYXlMYWJlbHMocmFkaXVzLCBpbm5lclJhZGl1cyk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ00nLFxyXG4gICAgICBzdGFydFgsXHJcbiAgICAgIHN0YXJ0WSxcclxuICAgICAgJ0EnLFxyXG4gICAgICByYWRpdXMsXHJcbiAgICAgIHJhZGl1cyxcclxuICAgICAgMCxcclxuICAgICAgbGFyZ2VBcmMgPyAnMSwxJyA6ICcwLDEnLFxyXG4gICAgICBlbmRYLFxyXG4gICAgICBlbmRZLFxyXG4gICAgICAnTCcsXHJcbiAgICAgIGVuZElubmVyWCxcclxuICAgICAgZW5kSW5uZXJZLFxyXG4gICAgICAnQScsXHJcbiAgICAgIGlubmVyUmFkaXVzLFxyXG4gICAgICBpbm5lclJhZGl1cyxcclxuICAgICAgMCxcclxuICAgICAgbGFyZ2VBcmMgPyAnMSwwJyA6ICcwLDAnLFxyXG4gICAgICBzdGFydElubmVyWCxcclxuICAgICAgc3RhcnRJbm5lclksXHJcbiAgICAgICdaJ1xyXG4gICAgXS5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0VG9vbHRpcExhYmVsKGRhdGE6IG51bWJlciwgbGFiZWw/OiBzdHJpbmcsIHRvb2x0aXBMYWJlbD86IHN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YUxhYmVsID0gbGFiZWwgPyBgJHtsYWJlbH06IGAgOiAnJztcclxuICAgIGNvbnN0IGRhdGFWYWx1ZSA9IHRoaXMuZ2V0UGVyY2VudFZhbHVlKGRhdGEsIHRoaXMudG90YWxWYWx1ZSkgKyAnJSc7XHJcblxyXG4gICAgcmV0dXJuIHRvb2x0aXBMYWJlbCB8fCBgJHtkYXRhTGFiZWx9JHtkYXRhVmFsdWV9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlTZXJpZXNMYWJlbHMoc2VyaWVzTGlzdDogQXJyYXk8YW55PiwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGxldCBzdGFydFJhZGlhbkFuZ2xlID0gUG9DaGFydFN0YXJ0QW5nbGU7XHJcbiAgICBsZXQgZW5kUmFkaWFuQW5nbGUgPSBQb0NoYXJ0U3RhcnRBbmdsZTtcclxuXHJcbiAgICB0aGlzLnNlcmllc0xhYmVscyA9IHNlcmllc0xpc3QubWFwKHNlcmllID0+IHtcclxuICAgICAgc3RhcnRSYWRpYW5BbmdsZSA9IGVuZFJhZGlhbkFuZ2xlO1xyXG4gICAgICBlbmRSYWRpYW5BbmdsZSA9IHN0YXJ0UmFkaWFuQW5nbGUgKyB0aGlzLmNhbGN1bGF0ZUFuZ2xlKHNlcmllLmRhdGEsIHRoaXMudG90YWxWYWx1ZSk7XHJcblxyXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0UGVyY2VudFZhbHVlKHNlcmllLmRhdGEsIHRoaXMudG90YWxWYWx1ZSkgKyAnJSAnO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0VGV4dENvbG9yKHNlcmllLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLmNhbGN1bGF0ZUxhYmVsQ29vcmRpbmF0ZXMoaGVpZ2h0LCBzdGFydFJhZGlhbkFuZ2xlLCBlbmRSYWRpYW5BbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5jb29yZGluYXRlcywgbGFiZWwsIGNvbG9yIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlTGFiZWxDb29yZGluYXRlcyhoZWlnaHQ6IG51bWJlciwgc3RhcnRSYWRpYW5BbmdsZTogbnVtYmVyLCBlbmRSYWRpYW5BbmdsZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByYWRpdXMgPSBoZWlnaHQgLyAyO1xyXG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSB0aGlzLmdldElubmVyUmFkaXVzKHJhZGl1cyk7XHJcblxyXG4gICAgY29uc3Qgc2xpY2VDZW50ZXJBbmdsZSA9IChzdGFydFJhZGlhbkFuZ2xlICsgZW5kUmFkaWFuQW5nbGUpIC8gMjtcclxuICAgIGNvbnN0IGxhYmVsUmFkaXVzID0gaW5uZXJSYWRpdXMgKyAocmFkaXVzIC0gaW5uZXJSYWRpdXMpIC8gMjtcclxuXHJcbiAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGxhYmVsUmFkaXVzICogTWF0aC5jb3Moc2xpY2VDZW50ZXJBbmdsZSkgKyByYWRpdXM7XHJcbiAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IGxhYmVsUmFkaXVzICogTWF0aC5zaW4oc2xpY2VDZW50ZXJBbmdsZSkgKyByYWRpdXM7XHJcblxyXG4gICAgcmV0dXJuIHsgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldElubmVyUmFkaXVzKHJhZGl1czogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGRlZmF1bHRJbm5lclJhZGl1cyA9IHJhZGl1cyAtIFBvQ2hhcnREb251dERlZmF1bHRUaGlja25lc3M7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSYWRpdXMgPj0gMCA/ICh0aGlzLmlubmVyUmFkaXVzIC8gMTAwKSAqIHJhZGl1cyA6IGRlZmF1bHRJbm5lclJhZGl1cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGVyY2VudFZhbHVlKHZhbHVlOiBudW1iZXIsIHRvdGFsVmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgcGVyY2VudFZhbHVlID0gKHZhbHVlIC8gdG90YWxWYWx1ZSkgKiAxMDA7XHJcbiAgICBjb25zdCBmbG9hdFBlcmNlbnRWYWx1ZSA9IGNvbnZlcnROdW1iZXJUb0RlY2ltYWwocGVyY2VudFZhbHVlLCAyKTtcclxuXHJcbiAgICByZXR1cm4gU3RyaW5nKGZsb2F0UGVyY2VudFZhbHVlKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGV4dENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIGlmIChQb0RlZmF1bHRDb2xvcnNUZXh0QmxhY2suaW5jbHVkZXMoY29sb3IpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvQ2hhcnRCbGFja0NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBvQ2hhcnRXaGl0ZUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlEaXNwbGF5TGFiZWxzKHJhZGl1czogbnVtYmVyLCBpbm5lclJhZGl1czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbkRpc3BsYXlMYWJlbHMgPSByYWRpdXMgLSBpbm5lclJhZGl1cyA+PSByYWRpdXMgLSAocmFkaXVzIC0gUG9DaGFydERvbnV0RGVmYXVsdFRoaWNrbmVzcyk7XHJcbiAgfVxyXG59XHJcbiIsIjxzdmc6Zz5cclxuICA8IS0tIFNFUklFUyBQQVRIUyAtLT5cclxuICA8c3ZnOmcgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VyaWVzTGlzdDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgPHN2ZzpnICNzdmdQYXRocyBwby1jaGFydC1jaXJjdWxhci1wYXRoXHJcbiAgICAgIFthdHRyLmtleV09XCIncG8tY2hhcnQtY2lyY3VsYXItcGF0aC0nICsgaVwiXHJcbiAgICAgIFtwLXNlcmllXT1cIml0ZW1cIlxyXG4gICAgICAocC1vbi1jbGljayk9XCJvblNlcmllQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgIChwLW9uLWhvdmVyKT1cIm9uU2VyaWVIb3ZlcigkZXZlbnQpXCI+XHJcbiAgICA8L3N2ZzpnPlxyXG4gIDwvc3ZnOmc+XHJcblxyXG4gIDwhLS0gU0VSSUVTIExBQkVMUyAtLT5cclxuICA8c3ZnOmcgKm5nSWY9XCJjYW5EaXNwbGF5TGFiZWxzXCI+XHJcbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VyaWVzTGFiZWxzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxzdmc6ZyAjc3ZnTGFiZWxzIHBvLWNoYXJ0LWNpcmN1bGFyLWxhYmVsXHJcbiAgICAgICAgW2F0dHIua2V5XT1cIidwby1jaGFydC1jaXJjdWxhci1sYWJlbC0nICsgaVwiXHJcbiAgICAgICAgW3Atc2VyaWVdPVwiaXRlbVwiXHJcbiAgICAgICAgW3Atc2hvdy1sYWJlbF09XCJzaG93TGFiZWxzXCI+XHJcbiAgICAgIDwvc3ZnOmc+XHJcbiAgICA8L3N2ZzpnPlxyXG4gIDwvc3ZnOmc+XHJcbjwvc3ZnOmc+XHJcblxyXG4iXX0=