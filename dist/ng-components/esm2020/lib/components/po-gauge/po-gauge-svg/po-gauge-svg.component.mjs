import { Component, Input } from '@angular/core';
import { PoGaugePointerEnd, PoGaugeThickness, poGaugeTotalValueDefault } from '../po-gauge-default-values.constant';
import { PoDefaultColors } from '../../../services/po-color/po-colors.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./po-gauge-path/po-gauge-path.component";
import * as i3 from "./po-gauge-pointer/po-gauge-pointer.component";
function PoGaugeSvgComponent__svg_svg_0__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("p-coordinates", ctx_r1.pointerCoordinates);
} }
function PoGaugeSvgComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 1);
    i0.ɵɵelement(1, "g", 2);
    i0.ɵɵtemplate(2, PoGaugeSvgComponent__svg_svg_0__svg_g_2_Template, 1, 1, "g", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("viewBox", ctx_r0.viewBox)("height", ctx_r0.container == null ? null : ctx_r0.container.height);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-base-coordinates", ctx_r0.baseCoordinates)("p-ranges-coordinates", ctx_r0.coordinates);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasRanges);
} }
export const poGaugeStartAngle = -Math.PI;
export class PoGaugeSvgComponent {
    constructor() {
        this.addSvgElement = false;
    }
    get hasRanges() {
        return this.ranges.length > 0;
    }
    ngOnChanges(changes) {
        if ((this.container && changes.value) || (this.container && changes.ranges) || this.container) {
            this.setCoordinates(this.value, this.ranges, this.container);
        }
    }
    setCoordinates(value, ranges, container) {
        const { height } = container;
        // Adiciona elemento svg somente após calcular a altura do container pois o svg tem altura default de 150px.
        this.addSvgElement = true;
        this.setViewBox(height);
        this.setBaseCoordinates(height);
        if (!ranges.length) {
            this.setSingleRangeCoordinates(height, value);
            return;
        }
        this.setRangesCoordinates(height, value, ranges);
    }
    setBaseCoordinates(height) {
        const endAngleRadian = 0;
        const coordinates = this.calculateCoordinates(height, poGaugeStartAngle, endAngleRadian);
        this.baseCoordinates = { coordinates };
    }
    setRangesCoordinates(height, value = 0, ranges) {
        const { minRange, maxRange } = this.calculateMinAndMaxValues(ranges);
        const minValue = value < minRange ? value : minRange;
        const maxValue = value > maxRange ? value : maxRange;
        this.setPointerCoordinates(height, value, maxValue, minValue);
        // `.reverse()` no término da iteração para tratar a sobreposicão correta das bordas arredondadas dos ranges.
        const rangesCoordinates = ranges
            .map((range) => {
            const from = range.from ?? 0;
            const to = range.to ?? maxRange;
            const startAngleRadian = poGaugeStartAngle + this.calculateAngleRadius(from, maxValue, minValue);
            const endAngleRadian = poGaugeStartAngle + this.calculateAngleRadius(to, maxValue, minValue);
            const coordinates = this.calculateCoordinates(height, startAngleRadian, endAngleRadian);
            return { coordinates, color: range.color };
        })
            .reverse();
        this.coordinates = rangesCoordinates;
    }
    setSingleRangeCoordinates(height, value) {
        const verifiedValue = value > 100 ? 100 : value;
        const endAngleRadian = poGaugeStartAngle + this.calculateAngleRadius(verifiedValue, poGaugeTotalValueDefault);
        const coordinates = value > 0 ? this.calculateCoordinates(height, poGaugeStartAngle, endAngleRadian) : undefined;
        const color = PoDefaultColors[0][0];
        this.coordinates = [{ coordinates, color }];
    }
    setPointerCoordinates(height, value, maxValue, minValue) {
        const coordinates = this.calculatePointerInitialCoordinates(height, poGaugeStartAngle);
        const pointerDegrees = this.pointerRotation(value, maxValue, minValue);
        this.pointerCoordinates = { ...coordinates, pointerDegrees };
    }
    pointerRotation(value, maxValue, minValue) {
        const percent = this.convertValueToPercentage(value, maxValue, minValue);
        // valores referentes às angulações mínimas e máximas do ponteiro.
        const minRotation = 0;
        const maxRotation = 180;
        return (percent * (maxRotation - minRotation)) / 100 + minRotation;
    }
    calculatePointerInitialCoordinates(height, startAngleRadian) {
        const radius = height - PoGaugePointerEnd - PoGaugeThickness / 2;
        // Valor que representa a escala do ponteiro para plotagem.
        const scale = 40;
        const pointerScaledWidth = radius / scale;
        const pointerScaledBorderRadius = radius / (scale * 2);
        const sinAlpha = Math.sin(startAngleRadian);
        const cosAlpha = Math.cos(startAngleRadian);
        const targetX = radius + cosAlpha * radius;
        const targetY = radius + sinAlpha * radius;
        const startX = radius;
        const startY = radius + pointerScaledWidth;
        const endX = radius;
        const endY = radius - pointerScaledWidth;
        const coordinates = [
            'M',
            startX,
            startY,
            'L',
            targetX,
            targetY + pointerScaledBorderRadius,
            'A',
            1,
            1,
            0,
            '0,1',
            targetX,
            targetY - pointerScaledBorderRadius,
            'L',
            endX,
            endY,
            'Z'
        ].join(' ');
        return { coordinates, radius };
    }
    calculateCoordinates(height, startAngleRadian, endAngleRadian) {
        // Subtrai altura pelo excedente ponteiro em relação ao gráfico, pela metade do valor da coroa circular.
        const radius = height - PoGaugePointerEnd - PoGaugeThickness / 2;
        const innerRadius = radius - PoGaugeThickness;
        const sinAlpha = Math.sin(startAngleRadian);
        const cosAlpha = Math.cos(startAngleRadian);
        const sinBeta = Math.sin(endAngleRadian);
        const cosBeta = Math.cos(endAngleRadian);
        const startX = Math.round(radius + cosAlpha * radius);
        const startY = Math.round(radius + sinAlpha * radius);
        const endX = Math.round(radius + cosBeta * radius);
        const endY = Math.round(radius + sinBeta * radius);
        const startInnerX = Math.round(radius + cosAlpha * innerRadius);
        const startInnerY = Math.round(radius + sinAlpha * innerRadius);
        const endInnerX = Math.round(radius + cosBeta * innerRadius);
        const endInnerY = Math.round(radius + sinBeta * innerRadius);
        return [
            'M',
            startX,
            startY,
            'A',
            radius,
            radius,
            0,
            '0,1',
            endX,
            endY,
            'A',
            1,
            1,
            0,
            '0,1',
            endInnerX,
            endInnerY,
            'A',
            innerRadius,
            innerRadius,
            0,
            '0,0',
            startInnerX,
            startInnerY,
            'A',
            1,
            1,
            0,
            '0,1',
            startX,
            startY,
            'Z'
        ].join(' ');
    }
    calculateAngleRadius(value, maxValue, minValue = 0) {
        const angle = ((value - minValue) / (maxValue - minValue)) * (Math.PI * 2);
        return angle / 2;
    }
    convertValueToPercentage(value, maxValue, minValue) {
        return ((value - minValue) / (maxValue - minValue)) * 100;
    }
    setViewBox(height) {
        const width = this.calculateDiameter(height);
        this.viewBox = `0 ${-PoGaugePointerEnd} ${width} ${height}`;
    }
    calculateDiameter(height) {
        const radius = height - PoGaugePointerEnd - PoGaugeThickness / 2;
        return radius + Math.cos(0) * radius;
    }
    calculateMinAndMaxValues(ranges) {
        const minRange = this.getDomain(ranges, 'min');
        const maxRange = this.getDomain(ranges, 'max');
        return {
            minRange: this.verifyIfFloatOrInteger(minRange) ? minRange : 0,
            maxRange: this.verifyIfFloatOrInteger(maxRange) ? maxRange : 100
        };
    }
    verifyIfFloatOrInteger(number) {
        const notABoolean = typeof number !== 'boolean';
        const notInfinity = number !== Infinity;
        const isInteger = Number(number) === number && number % 1 === 0 && notInfinity;
        const isFloat = Number(number) === number && number % 1 !== 0 && notInfinity;
        return (notABoolean && isInteger) || (notABoolean && isFloat);
    }
    getDomain(ranges, type) {
        const rangeType = { min: 'from', max: 'to' };
        return Math[type](...ranges.map(range => range[rangeType[type]]));
    }
}
PoGaugeSvgComponent.ɵfac = function PoGaugeSvgComponent_Factory(t) { return new (t || PoGaugeSvgComponent)(); };
PoGaugeSvgComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGaugeSvgComponent, selectors: [["po-gauge-svg"]], inputs: { container: ["p-container", "container"], ranges: ["p-ranges", "ranges"], value: ["p-value", "value"] }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "po-gauge-svg", "preserveAspectRatio", "xMidYMax meet", "width", "100%", 4, "ngIf"], ["preserveAspectRatio", "xMidYMax meet", "width", "100%", 1, "po-gauge-svg"], ["po-gauge-path", "", 3, "p-base-coordinates", "p-ranges-coordinates"], ["po-gauge-pointer", "", 3, "p-coordinates", 4, "ngIf"], ["po-gauge-pointer", "", 3, "p-coordinates"]], template: function PoGaugeSvgComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoGaugeSvgComponent__svg_svg_0_Template, 3, 5, "svg", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.addSvgElement);
    } }, dependencies: [i1.NgIf, i2.PoGaugePathComponent, i3.PoGaugePointerComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeSvgComponent, [{
        type: Component,
        args: [{ selector: 'po-gauge-svg', template: "<svg:svg\r\n  *ngIf=\"addSvgElement\"\r\n  class=\"po-gauge-svg\"\r\n  preserveAspectRatio=\"xMidYMax meet\"\r\n  width=\"100%\"\r\n  [attr.viewBox]=\"viewBox\"\r\n  [attr.height]=\"container?.height\"\r\n>\r\n  <!-- GAUGE PATHS -->\r\n  <svg:g po-gauge-path [p-base-coordinates]=\"baseCoordinates\" [p-ranges-coordinates]=\"coordinates\"></svg:g>\r\n\r\n  <!-- GAUGE POINTER -->\r\n  <svg:g *ngIf=\"hasRanges\" po-gauge-pointer [p-coordinates]=\"pointerCoordinates\"></svg:g>\r\n</svg:svg>\r\n" }]
    }], null, { container: [{
            type: Input,
            args: ['p-container']
        }], ranges: [{
            type: Input,
            args: ['p-ranges']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2Utc3ZnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS1zdmcvcG8tZ2F1Z2Utc3ZnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1nYXVnZS9wby1nYXVnZS1zdmcvcG8tZ2F1Z2Utc3ZnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVwSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7Ozs7SUNROUUsdUJBQXVGOzs7SUFBN0MseURBQW9DOzs7SUFaaEYsbUJBT0M7SUFQRCw4QkFPQztJQUVDLHVCQUF5RztJQUd6RyxnRkFBdUY7SUFDekYsaUJBQVU7OztJQVJSLHlDQUF3QixxRUFBQTtJQUlILGVBQXNDO0lBQXRDLDJEQUFzQyw0Q0FBQTtJQUduRCxlQUFlO0lBQWYsdUNBQWU7O0FERnpCLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQU0xQyxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBV0Usa0JBQWEsR0FBWSxLQUFLLENBQUM7S0FrUGhDO0lBNU9DLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFD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QUksV0FBVyxDQUFDO1FBQy9FLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDO1FBRTdFLE9BQU8sQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxNQUE0QixFQUFFLElBQVk7UUFDMUQsTUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O3NGQXhQVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ2hCaEMseUVBYVU7O1FBWlAsd0NBQW1COzt1RkRlVCxtQkFBbUI7Y0FKL0IsU0FBUzsyQkFDRSxjQUFjO2dCQUlGLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUVELE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUVDLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9HYXVnZVBvaW50ZXJFbmQsIFBvR2F1Z2VUaGlja25lc3MsIHBvR2F1Z2VUb3RhbFZhbHVlRGVmYXVsdCB9IGZyb20gJy4uL3BvLWdhdWdlLWRlZmF1bHQtdmFsdWVzLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvRGVmYXVsdENvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWNvbG9yL3BvLWNvbG9ycy5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBQb0dhdWdlQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWdhdWdlLWNvb3JkaW5hdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvR2F1Z2VSYW5nZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWdhdWdlLXJhbmdlcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0dhdWdlU3ZnQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1nYXVnZS1zdmctY29udGFpbmVyLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9HYXVnZVN0YXJ0QW5nbGUgPSAtTWF0aC5QSTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG8tZ2F1Z2Utc3ZnJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZ2F1Z2Utc3ZnLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9HYXVnZVN2Z0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCdwLWNvbnRhaW5lcicpIGNvbnRhaW5lcjogUG9HYXVnZVN2Z0NvbnRhaW5lcjtcclxuXHJcbiAgQElucHV0KCdwLXJhbmdlcycpIHJhbmdlczogQXJyYXk8UG9HYXVnZVJhbmdlcz47XHJcblxyXG4gIEBJbnB1dCgncC12YWx1ZScpIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gIGFkZFN2Z0VsZW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBiYXNlQ29vcmRpbmF0ZXM6IFBvR2F1Z2VDb29yZGluYXRlcztcclxuICBjb29yZGluYXRlczogQXJyYXk8UG9HYXVnZUNvb3JkaW5hdGVzPjtcclxuICBwb2ludGVyQ29vcmRpbmF0ZXM6IFBvR2F1Z2VDb29yZGluYXRlcztcclxuICB2aWV3Qm94OiBzdHJpbmc7XHJcblxyXG4gIGdldCBoYXNSYW5nZXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5nZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5jb250YWluZXIgJiYgY2hhbmdlcy52YWx1ZSkgfHwgKHRoaXMuY29udGFpbmVyICYmIGNoYW5nZXMucmFuZ2VzKSB8fCB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICB0aGlzLnNldENvb3JkaW5hdGVzKHRoaXMudmFsdWUsIHRoaXMucmFuZ2VzLCB0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvb3JkaW5hdGVzKHZhbHVlOiBudW1iZXIsIHJhbmdlczogQXJyYXk8UG9HYXVnZVJhbmdlcz4sIGNvbnRhaW5lcjogUG9HYXVnZVN2Z0NvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICAvLyBBZGljaW9uYSBlbGVtZW50byBzdmcgc29tZW50ZSBhcMOzcyBjYWxjdWxhciBhIGFsdHVyYSBkbyBjb250YWluZXIgcG9pcyBvIHN2ZyB0ZW0gYWx0dXJhIGRlZmF1bHQgZGUgMTUwcHguXHJcbiAgICB0aGlzLmFkZFN2Z0VsZW1lbnQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRWaWV3Qm94KGhlaWdodCk7XHJcbiAgICB0aGlzLnNldEJhc2VDb29yZGluYXRlcyhoZWlnaHQpO1xyXG5cclxuICAgIGlmICghcmFuZ2VzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldFNpbmdsZVJhbmdlQ29vcmRpbmF0ZXMoaGVpZ2h0LCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0UmFuZ2VzQ29vcmRpbmF0ZXMoaGVpZ2h0LCB2YWx1ZSwgcmFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QmFzZUNvb3JkaW5hdGVzKGhlaWdodDogUG9HYXVnZVN2Z0NvbnRhaW5lclsnaGVpZ2h0J10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGVuZEFuZ2xlUmFkaWFuID0gMDtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5jYWxjdWxhdGVDb29yZGluYXRlcyhoZWlnaHQsIHBvR2F1Z2VTdGFydEFuZ2xlLCBlbmRBbmdsZVJhZGlhbik7XHJcblxyXG4gICAgdGhpcy5iYXNlQ29vcmRpbmF0ZXMgPSB7IGNvb3JkaW5hdGVzIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJhbmdlc0Nvb3JkaW5hdGVzKGhlaWdodDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyID0gMCwgcmFuZ2VzOiBBcnJheTxQb0dhdWdlUmFuZ2VzPik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBtaW5SYW5nZSwgbWF4UmFuZ2UgfSA9IHRoaXMuY2FsY3VsYXRlTWluQW5kTWF4VmFsdWVzKHJhbmdlcyk7XHJcblxyXG4gICAgY29uc3QgbWluVmFsdWUgPSB2YWx1ZSA8IG1pblJhbmdlID8gdmFsdWUgOiBtaW5SYW5nZTtcclxuICAgIGNvbnN0IG1heFZhbHVlID0gdmFsdWUgPiBtYXhSYW5nZSA/IHZhbHVlIDogbWF4UmFuZ2U7XHJcblxyXG4gICAgdGhpcy5zZXRQb2ludGVyQ29vcmRpbmF0ZXMoaGVpZ2h0LCB2YWx1ZSwgbWF4VmFsdWUsIG1pblZhbHVlKTtcclxuXHJcbiAgICAvLyBgLnJldmVyc2UoKWAgbm8gdMOpcm1pbm8gZGEgaXRlcmHDp8OjbyBwYXJhIHRyYXRhciBhIHNvYnJlcG9zaWPDo28gY29ycmV0YSBkYXMgYm9yZGFzIGFycmVkb25kYWRhcyBkb3MgcmFuZ2VzLlxyXG4gICAgY29uc3QgcmFuZ2VzQ29vcmRpbmF0ZXMgPSByYW5nZXNcclxuICAgICAgLm1hcCgocmFuZ2U6IFBvR2F1Z2VSYW5nZXMpID0+IHtcclxuICAgICAgICBjb25zdCBmcm9tID0gcmFuZ2UuZnJvbSA/PyAwO1xyXG4gICAgICAgIGNvbnN0IHRvID0gcmFuZ2UudG8gPz8gbWF4UmFuZ2U7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRBbmdsZVJhZGlhbiA9IHBvR2F1Z2VTdGFydEFuZ2xlICsgdGhpcy5jYWxjdWxhdGVBbmdsZVJhZGl1cyhmcm9tLCBtYXhWYWx1ZSwgbWluVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlUmFkaWFuID0gcG9HYXVnZVN0YXJ0QW5nbGUgKyB0aGlzLmNhbGN1bGF0ZUFuZ2xlUmFkaXVzKHRvLCBtYXhWYWx1ZSwgbWluVmFsdWUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuY2FsY3VsYXRlQ29vcmRpbmF0ZXMoaGVpZ2h0LCBzdGFydEFuZ2xlUmFkaWFuLCBlbmRBbmdsZVJhZGlhbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNvb3JkaW5hdGVzLCBjb2xvcjogcmFuZ2UuY29sb3IgfTtcclxuICAgICAgfSlcclxuICAgICAgLnJldmVyc2UoKTtcclxuXHJcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gcmFuZ2VzQ29vcmRpbmF0ZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNpbmdsZVJhbmdlQ29vcmRpbmF0ZXMoaGVpZ2h0OiBQb0dhdWdlU3ZnQ29udGFpbmVyWydoZWlnaHQnXSwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgdmVyaWZpZWRWYWx1ZSA9IHZhbHVlID4gMTAwID8gMTAwIDogdmFsdWU7XHJcblxyXG4gICAgY29uc3QgZW5kQW5nbGVSYWRpYW4gPSBwb0dhdWdlU3RhcnRBbmdsZSArIHRoaXMuY2FsY3VsYXRlQW5nbGVSYWRpdXModmVyaWZpZWRWYWx1ZSwgcG9HYXVnZVRvdGFsVmFsdWVEZWZhdWx0KTtcclxuXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHZhbHVlID4gMCA/IHRoaXMuY2FsY3VsYXRlQ29vcmRpbmF0ZXMoaGVpZ2h0LCBwb0dhdWdlU3RhcnRBbmdsZSwgZW5kQW5nbGVSYWRpYW4pIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgY29sb3IgPSBQb0RlZmF1bHRDb2xvcnNbMF1bMF07XHJcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW3sgY29vcmRpbmF0ZXMsIGNvbG9yIH1dO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQb2ludGVyQ29vcmRpbmF0ZXMoaGVpZ2h0OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5jYWxjdWxhdGVQb2ludGVySW5pdGlhbENvb3JkaW5hdGVzKGhlaWdodCwgcG9HYXVnZVN0YXJ0QW5nbGUpO1xyXG4gICAgY29uc3QgcG9pbnRlckRlZ3JlZXMgPSB0aGlzLnBvaW50ZXJSb3RhdGlvbih2YWx1ZSwgbWF4VmFsdWUsIG1pblZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnBvaW50ZXJDb29yZGluYXRlcyA9IHsgLi4uY29vcmRpbmF0ZXMsIHBvaW50ZXJEZWdyZWVzIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50ZXJSb3RhdGlvbih2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyLCBtaW5WYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5jb252ZXJ0VmFsdWVUb1BlcmNlbnRhZ2UodmFsdWUsIG1heFZhbHVlLCBtaW5WYWx1ZSk7XHJcbiAgICAvLyB2YWxvcmVzIHJlZmVyZW50ZXMgw6BzIGFuZ3VsYcOnw7VlcyBtw61uaW1hcyBlIG3DoXhpbWFzIGRvIHBvbnRlaXJvLlxyXG4gICAgY29uc3QgbWluUm90YXRpb24gPSAwO1xyXG4gICAgY29uc3QgbWF4Um90YXRpb24gPSAxODA7XHJcblxyXG4gICAgcmV0dXJuIChwZXJjZW50ICogKG1heFJvdGF0aW9uIC0gbWluUm90YXRpb24pKSAvIDEwMCArIG1pblJvdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVQb2ludGVySW5pdGlhbENvb3JkaW5hdGVzKGhlaWdodDogbnVtYmVyLCBzdGFydEFuZ2xlUmFkaWFuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJhZGl1cyA9IGhlaWdodCAtIFBvR2F1Z2VQb2ludGVyRW5kIC0gUG9HYXVnZVRoaWNrbmVzcyAvIDI7XHJcblxyXG4gICAgLy8gVmFsb3IgcXVlIHJlcHJlc2VudGEgYSBlc2NhbGEgZG8gcG9udGVpcm8gcGFyYSBwbG90YWdlbS5cclxuICAgIGNvbnN0IHNjYWxlID0gNDA7XHJcbiAgICBjb25zdCBwb2ludGVyU2NhbGVkV2lkdGggPSByYWRpdXMgLyBzY2FsZTtcclxuICAgIGNvbnN0IHBvaW50ZXJTY2FsZWRCb3JkZXJSYWRpdXMgPSByYWRpdXMgLyAoc2NhbGUgKiAyKTtcclxuXHJcbiAgICBjb25zdCBzaW5BbHBoYSA9IE1hdGguc2luKHN0YXJ0QW5nbGVSYWRpYW4pO1xyXG4gICAgY29uc3QgY29zQWxwaGEgPSBNYXRoLmNvcyhzdGFydEFuZ2xlUmFkaWFuKTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRYID0gcmFkaXVzICsgY29zQWxwaGEgKiByYWRpdXM7XHJcbiAgICBjb25zdCB0YXJnZXRZID0gcmFkaXVzICsgc2luQWxwaGEgKiByYWRpdXM7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRYID0gcmFkaXVzO1xyXG4gICAgY29uc3Qgc3RhcnRZID0gcmFkaXVzICsgcG9pbnRlclNjYWxlZFdpZHRoO1xyXG5cclxuICAgIGNvbnN0IGVuZFggPSByYWRpdXM7XHJcbiAgICBjb25zdCBlbmRZID0gcmFkaXVzIC0gcG9pbnRlclNjYWxlZFdpZHRoO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW1xyXG4gICAgICAnTScsXHJcbiAgICAgIHN0YXJ0WCxcclxuICAgICAgc3RhcnRZLFxyXG4gICAgICAnTCcsXHJcbiAgICAgIHRhcmdldFgsXHJcbiAgICAgIHRhcmdldFkgKyBwb2ludGVyU2NhbGVkQm9yZGVyUmFkaXVzLFxyXG4gICAgICAnQScsXHJcbiAgICAgIDEsXHJcbiAgICAgIDEsXHJcbiAgICAgIDAsXHJcbiAgICAgICcwLDEnLFxyXG4gICAgICB0YXJnZXRYLFxyXG4gICAgICB0YXJnZXRZIC0gcG9pbnRlclNjYWxlZEJvcmRlclJhZGl1cyxcclxuICAgICAgJ0wnLFxyXG4gICAgICBlbmRYLFxyXG4gICAgICBlbmRZLFxyXG4gICAgICAnWidcclxuICAgIF0uam9pbignICcpO1xyXG5cclxuICAgIHJldHVybiB7IGNvb3JkaW5hdGVzLCByYWRpdXMgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ29vcmRpbmF0ZXMoXHJcbiAgICBoZWlnaHQ6IFBvR2F1Z2VTdmdDb250YWluZXJbJ2hlaWdodCddLFxyXG4gICAgc3RhcnRBbmdsZVJhZGlhbjogbnVtYmVyLFxyXG4gICAgZW5kQW5nbGVSYWRpYW46IG51bWJlclxyXG4gICk6IFBvR2F1Z2VDb29yZGluYXRlc1snY29vcmRpbmF0ZXMnXSB7XHJcbiAgICAvLyBTdWJ0cmFpIGFsdHVyYSBwZWxvIGV4Y2VkZW50ZSBwb250ZWlybyBlbSByZWxhw6fDo28gYW8gZ3LDoWZpY28sIHBlbGEgbWV0YWRlIGRvIHZhbG9yIGRhIGNvcm9hIGNpcmN1bGFyLlxyXG4gICAgY29uc3QgcmFkaXVzID0gaGVpZ2h0IC0gUG9HYXVnZVBvaW50ZXJFbmQgLSBQb0dhdWdlVGhpY2tuZXNzIC8gMjtcclxuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzIC0gUG9HYXVnZVRoaWNrbmVzcztcclxuXHJcbiAgICBjb25zdCBzaW5BbHBoYSA9IE1hdGguc2luKHN0YXJ0QW5nbGVSYWRpYW4pO1xyXG4gICAgY29uc3QgY29zQWxwaGEgPSBNYXRoLmNvcyhzdGFydEFuZ2xlUmFkaWFuKTtcclxuXHJcbiAgICBjb25zdCBzaW5CZXRhID0gTWF0aC5zaW4oZW5kQW5nbGVSYWRpYW4pO1xyXG4gICAgY29uc3QgY29zQmV0YSA9IE1hdGguY29zKGVuZEFuZ2xlUmFkaWFuKTtcclxuXHJcbiAgICBjb25zdCBzdGFydFggPSBNYXRoLnJvdW5kKHJhZGl1cyArIGNvc0FscGhhICogcmFkaXVzKTtcclxuICAgIGNvbnN0IHN0YXJ0WSA9IE1hdGgucm91bmQocmFkaXVzICsgc2luQWxwaGEgKiByYWRpdXMpO1xyXG5cclxuICAgIGNvbnN0IGVuZFggPSBNYXRoLnJvdW5kKHJhZGl1cyArIGNvc0JldGEgKiByYWRpdXMpO1xyXG4gICAgY29uc3QgZW5kWSA9IE1hdGgucm91bmQocmFkaXVzICsgc2luQmV0YSAqIHJhZGl1cyk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRJbm5lclggPSBNYXRoLnJvdW5kKHJhZGl1cyArIGNvc0FscGhhICogaW5uZXJSYWRpdXMpO1xyXG4gICAgY29uc3Qgc3RhcnRJbm5lclkgPSBNYXRoLnJvdW5kKHJhZGl1cyArIHNpbkFscGhhICogaW5uZXJSYWRpdXMpO1xyXG5cclxuICAgIGNvbnN0IGVuZElubmVyWCA9IE1hdGgucm91bmQocmFkaXVzICsgY29zQmV0YSAqIGlubmVyUmFkaXVzKTtcclxuICAgIGNvbnN0IGVuZElubmVyWSA9IE1hdGgucm91bmQocmFkaXVzICsgc2luQmV0YSAqIGlubmVyUmFkaXVzKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAnTScsXHJcbiAgICAgIHN0YXJ0WCxcclxuICAgICAgc3RhcnRZLFxyXG4gICAgICAnQScsXHJcbiAgICAgIHJhZGl1cyxcclxuICAgICAgcmFkaXVzLFxyXG4gICAgICAwLFxyXG4gICAgICAnMCwxJyxcclxuICAgICAgZW5kWCxcclxuICAgICAgZW5kWSxcclxuICAgICAgJ0EnLFxyXG4gICAgICAxLFxyXG4gICAgICAxLFxyXG4gICAgICAwLFxyXG4gICAgICAnMCwxJyxcclxuICAgICAgZW5kSW5uZXJYLFxyXG4gICAgICBlbmRJbm5lclksXHJcbiAgICAgICdBJyxcclxuICAgICAgaW5uZXJSYWRpdXMsXHJcbiAgICAgIGlubmVyUmFkaXVzLFxyXG4gICAgICAwLFxyXG4gICAgICAnMCwwJyxcclxuICAgICAgc3RhcnRJbm5lclgsXHJcbiAgICAgIHN0YXJ0SW5uZXJZLFxyXG4gICAgICAnQScsXHJcbiAgICAgIDEsXHJcbiAgICAgIDEsXHJcbiAgICAgIDAsXHJcbiAgICAgICcwLDEnLFxyXG4gICAgICBzdGFydFgsXHJcbiAgICAgIHN0YXJ0WSxcclxuICAgICAgJ1onXHJcbiAgICBdLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQW5nbGVSYWRpdXModmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgY29uc3QgYW5nbGUgPSAoKHZhbHVlIC0gbWluVmFsdWUpIC8gKG1heFZhbHVlIC0gbWluVmFsdWUpKSAqIChNYXRoLlBJICogMik7XHJcblxyXG4gICAgcmV0dXJuIGFuZ2xlIC8gMjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFZhbHVlVG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoKHZhbHVlIC0gbWluVmFsdWUpIC8gKG1heFZhbHVlIC0gbWluVmFsdWUpKSAqIDEwMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Vmlld0JveChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbGN1bGF0ZURpYW1ldGVyKGhlaWdodCk7XHJcblxyXG4gICAgdGhpcy52aWV3Qm94ID0gYDAgJHstUG9HYXVnZVBvaW50ZXJFbmR9ICR7d2lkdGh9ICR7aGVpZ2h0fWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZURpYW1ldGVyKGhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHJhZGl1cyA9IGhlaWdodCAtIFBvR2F1Z2VQb2ludGVyRW5kIC0gUG9HYXVnZVRoaWNrbmVzcyAvIDI7XHJcblxyXG4gICAgcmV0dXJuIHJhZGl1cyArIE1hdGguY29zKDApICogcmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVNaW5BbmRNYXhWYWx1ZXMocmFuZ2VzOiBBcnJheTxQb0dhdWdlUmFuZ2VzPikge1xyXG4gICAgY29uc3QgbWluUmFuZ2UgPSB0aGlzLmdldERvbWFpbihyYW5nZXMsICdtaW4nKTtcclxuICAgIGNvbnN0IG1heFJhbmdlID0gdGhpcy5nZXREb21haW4ocmFuZ2VzLCAnbWF4Jyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluUmFuZ2U6IHRoaXMudmVyaWZ5SWZGbG9hdE9ySW50ZWdlcihtaW5SYW5nZSkgPyBtaW5SYW5nZSA6IDAsXHJcbiAgICAgIG1heFJhbmdlOiB0aGlzLnZlcmlmeUlmRmxvYXRPckludGVnZXIobWF4UmFuZ2UpID8gbWF4UmFuZ2UgOiAxMDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeUlmRmxvYXRPckludGVnZXIobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG5vdEFCb29sZWFuID0gdHlwZW9mIG51bWJlciAhPT0gJ2Jvb2xlYW4nO1xyXG4gICAgY29uc3Qgbm90SW5maW5pdHkgPSBudW1iZXIgIT09IEluZmluaXR5O1xyXG5cclxuICAgIGNvbnN0IGlzSW50ZWdlciA9IE51bWJlcihudW1iZXIpID09PSBudW1iZXIgJiYgbnVtYmVyICUgMSA9PT0gMCAmJiBub3RJbmZpbml0eTtcclxuICAgIGNvbnN0IGlzRmxvYXQgPSBOdW1iZXIobnVtYmVyKSA9PT0gbnVtYmVyICYmIG51bWJlciAlIDEgIT09IDAgJiYgbm90SW5maW5pdHk7XHJcblxyXG4gICAgcmV0dXJuIChub3RBQm9vbGVhbiAmJiBpc0ludGVnZXIpIHx8IChub3RBQm9vbGVhbiAmJiBpc0Zsb2F0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RG9tYWluKHJhbmdlczogQXJyYXk8UG9HYXVnZVJhbmdlcz4sIHR5cGU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBjb25zdCByYW5nZVR5cGUgPSB7IG1pbjogJ2Zyb20nLCBtYXg6ICd0bycgfTtcclxuXHJcbiAgICByZXR1cm4gTWF0aFt0eXBlXSguLi5yYW5nZXMubWFwKHJhbmdlID0+IHJhbmdlW3JhbmdlVHlwZVt0eXBlXV0pKTtcclxuICB9XHJcbn1cclxuIiwiPHN2ZzpzdmdcclxuICAqbmdJZj1cImFkZFN2Z0VsZW1lbnRcIlxyXG4gIGNsYXNzPVwicG8tZ2F1Z2Utc3ZnXCJcclxuICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNYXggbWVldFwiXHJcbiAgd2lkdGg9XCIxMDAlXCJcclxuICBbYXR0ci52aWV3Qm94XT1cInZpZXdCb3hcIlxyXG4gIFthdHRyLmhlaWdodF09XCJjb250YWluZXI/LmhlaWdodFwiXHJcbj5cclxuICA8IS0tIEdBVUdFIFBBVEhTIC0tPlxyXG4gIDxzdmc6ZyBwby1nYXVnZS1wYXRoIFtwLWJhc2UtY29vcmRpbmF0ZXNdPVwiYmFzZUNvb3JkaW5hdGVzXCIgW3AtcmFuZ2VzLWNvb3JkaW5hdGVzXT1cImNvb3JkaW5hdGVzXCI+PC9zdmc6Zz5cclxuXHJcbiAgPCEtLSBHQVVHRSBQT0lOVEVSIC0tPlxyXG4gIDxzdmc6ZyAqbmdJZj1cImhhc1Jhbmdlc1wiIHBvLWdhdWdlLXBvaW50ZXIgW3AtY29vcmRpbmF0ZXNdPVwicG9pbnRlckNvb3JkaW5hdGVzXCI+PC9zdmc6Zz5cclxuPC9zdmc6c3ZnPlxyXG4iXX0=