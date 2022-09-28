import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/po-color-palette/po-color-palette.service";
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente para a criação da representação da legenda, em formato de círculo.
 */
export class PoTableSubtitleCircleComponent {
    constructor(poColorPaletteService) {
        this.poColorPaletteService = poColorPaletteService;
        /** Esconde a tooltip. */
        this.hideTitle = false;
    }
    /** Objeto com os dados da legenda. */
    set subtitle(subtitle) {
        if (subtitle) {
            subtitle.color = this.poColorPaletteService.getColor(subtitle);
        }
        this._subtitle = subtitle;
    }
    get subtitle() {
        return this._subtitle;
    }
}
PoTableSubtitleCircleComponent.ɵfac = function PoTableSubtitleCircleComponent_Factory(t) { return new (t || PoTableSubtitleCircleComponent)(i0.ɵɵdirectiveInject(i1.PoColorPaletteService)); };
PoTableSubtitleCircleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoTableSubtitleCircleComponent, selectors: [["po-table-subtitle-circle"]], inputs: { hideTitle: ["p-hide-title", "hideTitle"], subtitle: ["p-subtitle", "subtitle"] }, decls: 2, vars: 5, consts: [[3, "title"]], template: function PoTableSubtitleCircleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("po-table-subtitle-circle po-", ctx.subtitle == null ? null : ctx.subtitle.color, "");
        i0.ɵɵproperty("title", ctx.hideTitle ? "" : ctx.subtitle == null ? null : ctx.subtitle.label);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.subtitle == null ? null : ctx.subtitle.content, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTableSubtitleCircleComponent, [{
        type: Component,
        args: [{ selector: 'po-table-subtitle-circle', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span [title]=\"hideTitle ? '' : subtitle?.label\" class=\"po-table-subtitle-circle po-{{ subtitle?.color }}\">\r\n  {{ subtitle?.content }}\r\n</span>\r\n" }]
    }], function () { return [{ type: i1.PoColorPaletteService }]; }, { hideTitle: [{
            type: Input,
            args: ['p-hide-title']
        }], subtitle: [{
            type: Input,
            args: ['p-subtitle']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGFibGUtc3VidGl0bGUtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1zdWJ0aXRsZS1jaXJjbGUvcG8tdGFibGUtc3VidGl0bGUtY2lyY2xlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby10YWJsZS9wby10YWJsZS1zdWJ0aXRsZS1jaXJjbGUvcG8tdGFibGUtc3VidGl0bGUtY2lyY2xlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLMUU7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLDhCQUE4QjtJQWtCekMsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFqQmhFLHlCQUF5QjtRQUV6QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBZXdDLENBQUM7SUFYcEUsc0NBQXNDO0lBQ3RDLElBQXlCLFFBQVEsQ0FBQyxRQUErQjtRQUMvRCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7NEdBaEJVLDhCQUE4QjtpRkFBOUIsOEJBQThCO1FDakIzQywrQkFBMkc7UUFDekcsWUFDRjtRQUFBLGlCQUFPOztRQUYwQywrR0FBeUQ7UUFBcEcsNkZBQTBDO1FBQzlDLGVBQ0Y7UUFERSxvRkFDRjs7dUZEZWEsOEJBQThCO2NBTDFDLFNBQVM7MkJBQ0UsMEJBQTBCLG1CQUVuQix1QkFBdUIsQ0FBQyxNQUFNO3dFQUsvQyxTQUFTO2tCQURSLEtBQUs7bUJBQUMsY0FBYztZQU1JLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbG9yUGFsZXR0ZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWNvbG9yLXBhbGV0dGUvcG8tY29sb3ItcGFsZXR0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9UYWJsZVN1YnRpdGxlQ29sdW1uIH0gZnJvbSAnLi8uLi9wby10YWJsZS1zdWJ0aXRsZS1mb290ZXIvcG8tdGFibGUtc3VidGl0bGUtY29sdW1uLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHBhcmEgYSBjcmlhw6fDo28gZGEgcmVwcmVzZW50YcOnw6NvIGRhIGxlZ2VuZGEsIGVtIGZvcm1hdG8gZGUgY8OtcmN1bG8uXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXRhYmxlLXN1YnRpdGxlLWNpcmNsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXRhYmxlLXN1YnRpdGxlLWNpcmNsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGFibGVTdWJ0aXRsZUNpcmNsZUNvbXBvbmVudCB7XHJcbiAgLyoqIEVzY29uZGUgYSB0b29sdGlwLiAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXRpdGxlJylcclxuICBoaWRlVGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfc3VidGl0bGU6IFBvVGFibGVTdWJ0aXRsZUNvbHVtbjtcclxuXHJcbiAgLyoqIE9iamV0byBjb20gb3MgZGFkb3MgZGEgbGVnZW5kYS4gKi9cclxuICBASW5wdXQoJ3Atc3VidGl0bGUnKSBzZXQgc3VidGl0bGUoc3VidGl0bGU6IFBvVGFibGVTdWJ0aXRsZUNvbHVtbikge1xyXG4gICAgaWYgKHN1YnRpdGxlKSB7XHJcbiAgICAgIHN1YnRpdGxlLmNvbG9yID0gdGhpcy5wb0NvbG9yUGFsZXR0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3VidGl0bGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3VidGl0bGUgPSBzdWJ0aXRsZTtcclxuICB9XHJcbiAgZ2V0IHN1YnRpdGxlKCk6IFBvVGFibGVTdWJ0aXRsZUNvbHVtbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3VidGl0bGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvQ29sb3JQYWxldHRlU2VydmljZTogUG9Db2xvclBhbGV0dGVTZXJ2aWNlKSB7fVxyXG59XHJcbiIsIjxzcGFuIFt0aXRsZV09XCJoaWRlVGl0bGUgPyAnJyA6IHN1YnRpdGxlPy5sYWJlbFwiIGNsYXNzPVwicG8tdGFibGUtc3VidGl0bGUtY2lyY2xlIHBvLXt7IHN1YnRpdGxlPy5jb2xvciB9fVwiPlxyXG4gIHt7IHN1YnRpdGxlPy5jb250ZW50IH19XHJcbjwvc3Bhbj5cclxuIl19