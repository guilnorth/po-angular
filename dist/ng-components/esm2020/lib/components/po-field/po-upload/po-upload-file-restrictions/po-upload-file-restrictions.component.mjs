import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { formatBytes } from '../../../../utils/util';
import { poLocaleDefault } from '../../../../services/po-language/po-language.constant';
import { poUploadLiteralsDefault } from '../po-upload-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../../services/po-i18n/po-i18n.pipe";
function PoUploadFileRestrictionsComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "poI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r0.literals == null ? null : ctx_r0.literals.numberOfFilesAllowed, ctx_r0.maxFiles), "\n");
} }
function PoUploadFileRestrictionsComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "poI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r1.literals == null ? null : ctx_r1.literals.allowedFormats, ctx_r1.allowedExtensions), "\n");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function PoUploadFileRestrictionsComponent_p_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "poI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r3.literals == null ? null : ctx_r3.literals.allowedFileSizeRange, i0.ɵɵpureFunction2(4, _c0, ctx_r3.minFileSize, ctx_r3.maxFileSize)), " ");
} }
function PoUploadFileRestrictionsComponent_p_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "poI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r4.literals == null ? null : ctx_r4.literals.minFileSizeAllowed, ctx_r4.minFileSize), " ");
} }
function PoUploadFileRestrictionsComponent_p_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "poI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r5.literals == null ? null : ctx_r5.literals.maxFileSizeAllowed, ctx_r5.maxFileSize), " ");
} }
function PoUploadFileRestrictionsComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PoUploadFileRestrictionsComponent_p_2_span_3_Template, 3, 7, "span", 2);
    i0.ɵɵtemplate(4, PoUploadFileRestrictionsComponent_p_2_span_4_Template, 3, 4, "span", 2);
    i0.ɵɵtemplate(5, PoUploadFileRestrictionsComponent_p_2_span_5_Template, 3, 4, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.literals == null ? null : ctx_r2.literals.allowedSizes);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.minFileSize && ctx_r2.maxFileSize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.minFileSize && !ctx_r2.maxFileSize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.maxFileSize && !ctx_r2.minFileSize);
} }
export class PoUploadFileRestrictionsComponent {
    constructor(changeDetector, languageService) {
        this.changeDetector = changeDetector;
        this.language = languageService.getShortLanguage();
    }
    set allowedExtensions(value) {
        this._allowedExtensions = this.formatAllowedExtensions(value);
    }
    get allowedExtensions() {
        return this._allowedExtensions;
    }
    set maxFileSize(value) {
        this._maxFileSize = formatBytes(value);
    }
    get maxFileSize() {
        return this._maxFileSize;
    }
    set minFileSize(value) {
        this._minFileSize = formatBytes(value);
    }
    get minFileSize() {
        return this._minFileSize;
    }
    ngOnInit() {
        this.setLiterals();
    }
    formatAllowedExtensions(allowedExtensions) {
        const conjunction = { 'pt': 'e', 'en': 'and', 'es': 'y', 'ru': 'и' };
        return allowedExtensions
            ? allowedExtensions
                .join(', ')
                .toUpperCase()
                .replace(/,(?=[^,]*$)/, ` ${conjunction[this.language]}`)
            : undefined;
    }
    setLiterals() {
        this.literals = {
            ...poUploadLiteralsDefault[poLocaleDefault],
            ...poUploadLiteralsDefault[this.language]
        };
        this.changeDetector.detectChanges();
    }
}
PoUploadFileRestrictionsComponent.ɵfac = function PoUploadFileRestrictionsComponent_Factory(t) { return new (t || PoUploadFileRestrictionsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoUploadFileRestrictionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoUploadFileRestrictionsComponent, selectors: [["po-upload-file-restrictions"]], inputs: { maxFiles: ["p-max-files", "maxFiles"], allowedExtensions: ["p-allowed-extensions", "allowedExtensions"], maxFileSize: ["p-max-file-size", "maxFileSize"], minFileSize: ["p-min-file-size", "minFileSize"] }, decls: 3, vars: 3, consts: [["class", "po-font-text-small", 4, "ngIf"], [1, "po-font-text-small"], [4, "ngIf"]], template: function PoUploadFileRestrictionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PoUploadFileRestrictionsComponent_p_0_Template, 3, 4, "p", 0);
        i0.ɵɵtemplate(1, PoUploadFileRestrictionsComponent_p_1_Template, 3, 4, "p", 0);
        i0.ɵɵtemplate(2, PoUploadFileRestrictionsComponent_p_2_Template, 6, 4, "p", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.maxFiles > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.allowedExtensions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.minFileSize || ctx.maxFileSize);
    } }, dependencies: [i2.NgIf, i3.PoI18nPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadFileRestrictionsComponent, [{
        type: Component,
        args: [{ selector: 'po-upload-file-restrictions', changeDetection: ChangeDetectionStrategy.OnPush, template: "<p class=\"po-font-text-small\" *ngIf=\"maxFiles > 1\">\r\n  {{ literals?.numberOfFilesAllowed | poI18n: maxFiles }}\r\n</p>\r\n\r\n<p class=\"po-font-text-small\" *ngIf=\"allowedExtensions\">\r\n  {{ literals?.allowedFormats | poI18n: allowedExtensions }}\r\n</p>\r\n\r\n<p class=\"po-font-text-small\" *ngIf=\"minFileSize || maxFileSize\">\r\n  <span>{{ literals?.allowedSizes }}</span>\r\n\r\n  <span *ngIf=\"minFileSize && maxFileSize\">\r\n    {{ literals?.allowedFileSizeRange | poI18n: [minFileSize, maxFileSize] }}\r\n  </span>\r\n\r\n  <span *ngIf=\"minFileSize && !maxFileSize\">\r\n    {{ literals?.minFileSizeAllowed | poI18n: minFileSize }}\r\n  </span>\r\n\r\n  <span *ngIf=\"maxFileSize && !minFileSize\">\r\n    {{ literals?.maxFileSizeAllowed | poI18n: maxFileSize }}\r\n  </span>\r\n</p>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PoLanguageService }]; }, { maxFiles: [{
            type: Input,
            args: ['p-max-files']
        }], allowedExtensions: [{
            type: Input,
            args: ['p-allowed-extensions']
        }], maxFileSize: [{
            type: Input,
            args: ['p-max-file-size']
        }], minFileSize: [{
            type: Input,
            args: ['p-min-file-size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWZpbGUtcmVzdHJpY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLWZpbGUtcmVzdHJpY3Rpb25zL3BvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tdXBsb2FkL3BvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9ucy9wby11cGxvYWQtZmlsZS1yZXN0cmljdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztJQ050RSw0QkFBbUQ7SUFDakQsWUFDRjs7SUFBQSxpQkFBSTs7O0lBREYsZUFDRjtJQURFLDhJQUNGOzs7SUFFQSw0QkFBd0Q7SUFDdEQsWUFDRjs7SUFBQSxpQkFBSTs7O0lBREYsZUFDRjtJQURFLGlKQUNGOzs7O0lBS0UsNEJBQXlDO0lBQ3ZDLFlBQ0Y7O0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSxnTUFDRjs7O0lBRUEsNEJBQTBDO0lBQ3hDLFlBQ0Y7O0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSw4SUFDRjs7O0lBRUEsNEJBQTBDO0lBQ3hDLFlBQ0Y7O0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSw4SUFDRjs7O0lBYkYsNEJBQWlFLFdBQUE7SUFDekQsWUFBNEI7SUFBQSxpQkFBTztJQUV6Qyx3RkFFTztJQUVQLHdGQUVPO0lBRVAsd0ZBRU87SUFDVCxpQkFBSTs7O0lBYkksZUFBNEI7SUFBNUIsbUZBQTRCO0lBRTNCLGVBQWdDO0lBQWhDLCtEQUFnQztJQUloQyxlQUFpQztJQUFqQyxnRUFBaUM7SUFJakMsZUFBaUM7SUFBakMsZ0VBQWlDOztBRE4xQyxNQUFNLE9BQU8saUNBQWlDO0lBa0M1QyxZQUFvQixjQUFpQyxFQUFFLGVBQWtDO1FBQXJFLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUExQkQsSUFBbUMsaUJBQWlCLENBQUMsS0FBSztRQUN4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBOEIsV0FBVyxDQUFDLEtBQUs7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQU0sS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBOEIsV0FBVyxDQUFDLEtBQUs7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQU0sS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sdUJBQXVCLENBQUMsaUJBQWdDO1FBQzlELE1BQU0sV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRXJFLE9BQU8saUJBQWlCO1lBQ3RCLENBQUMsQ0FBQyxpQkFBaUI7aUJBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDVixXQUFXLEVBQUU7aUJBQ2IsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM3RCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztZQUMzQyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7a0hBNURVLGlDQUFpQztvRkFBakMsaUNBQWlDO1FDYjlDLDhFQUVJO1FBRUosOEVBRUk7UUFFSiw4RUFjSTs7UUF0QjJCLHVDQUFrQjtRQUlsQixlQUF1QjtRQUF2Qiw0Q0FBdUI7UUFJdkIsZUFBZ0M7UUFBaEMseURBQWdDOzt1RkRLbEQsaUNBQWlDO2NBTDdDLFNBQVM7MkJBQ0UsNkJBQTZCLG1CQUV0Qix1QkFBdUIsQ0FBQyxNQUFNO29HQUd6QixRQUFRO2tCQUE3QixLQUFLO21CQUFDLGFBQWE7WUFTZSxpQkFBaUI7a0JBQW5ELEtBQUs7bUJBQUMsc0JBQXNCO1lBUUMsV0FBVztrQkFBeEMsS0FBSzttQkFBQyxpQkFBaUI7WUFRTSxXQUFXO2tCQUF4QyxLQUFLO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRCeXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb0xvY2FsZURlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgeyBwb1VwbG9hZExpdGVyYWxzRGVmYXVsdCB9IGZyb20gJy4uL3BvLXVwbG9hZC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVXBsb2FkRmlsZVJlc3RyaWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCdwLW1heC1maWxlcycpIG1heEZpbGVzOiBudW1iZXI7XHJcblxyXG4gIGxpdGVyYWxzOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX2FsbG93ZWRFeHRlbnNpb25zOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfbWF4RmlsZVNpemU6IHN0cmluZztcclxuICBwcml2YXRlIF9taW5GaWxlU2l6ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgbGFuZ3VhZ2U6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwLWFsbG93ZWQtZXh0ZW5zaW9ucycpIHNldCBhbGxvd2VkRXh0ZW5zaW9ucyh2YWx1ZSkge1xyXG4gICAgdGhpcy5fYWxsb3dlZEV4dGVuc2lvbnMgPSB0aGlzLmZvcm1hdEFsbG93ZWRFeHRlbnNpb25zKDxhbnk+dmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFsbG93ZWRFeHRlbnNpb25zKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZEV4dGVuc2lvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3AtbWF4LWZpbGUtc2l6ZScpIHNldCBtYXhGaWxlU2l6ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbWF4RmlsZVNpemUgPSBmb3JtYXRCeXRlcyg8YW55PnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBtYXhGaWxlU2l6ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heEZpbGVTaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwLW1pbi1maWxlLXNpemUnKSBzZXQgbWluRmlsZVNpemUodmFsdWUpIHtcclxuICAgIHRoaXMuX21pbkZpbGVTaXplID0gZm9ybWF0Qnl0ZXMoPGFueT52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWluRmlsZVNpemUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5GaWxlU2l6ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRMaXRlcmFscygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRBbGxvd2VkRXh0ZW5zaW9ucyhhbGxvd2VkRXh0ZW5zaW9uczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjb25qdW5jdGlvbiA9IHsgJ3B0JzogJ2UnLCAnZW4nOiAnYW5kJywgJ2VzJzogJ3knLCAncnUnOiAn0LgnIH07XHJcblxyXG4gICAgcmV0dXJuIGFsbG93ZWRFeHRlbnNpb25zXHJcbiAgICAgID8gYWxsb3dlZEV4dGVuc2lvbnNcclxuICAgICAgICAgIC5qb2luKCcsICcpXHJcbiAgICAgICAgICAudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgLnJlcGxhY2UoLywoPz1bXixdKiQpLywgYCAke2Nvbmp1bmN0aW9uW3RoaXMubGFuZ3VhZ2VdfWApXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRMaXRlcmFscygpIHtcclxuICAgIHRoaXMubGl0ZXJhbHMgPSB7XHJcbiAgICAgIC4uLnBvVXBsb2FkTGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgIC4uLnBvVXBsb2FkTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8cCBjbGFzcz1cInBvLWZvbnQtdGV4dC1zbWFsbFwiICpuZ0lmPVwibWF4RmlsZXMgPiAxXCI+XHJcbiAge3sgbGl0ZXJhbHM/Lm51bWJlck9mRmlsZXNBbGxvd2VkIHwgcG9JMThuOiBtYXhGaWxlcyB9fVxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cInBvLWZvbnQtdGV4dC1zbWFsbFwiICpuZ0lmPVwiYWxsb3dlZEV4dGVuc2lvbnNcIj5cclxuICB7eyBsaXRlcmFscz8uYWxsb3dlZEZvcm1hdHMgfCBwb0kxOG46IGFsbG93ZWRFeHRlbnNpb25zIH19XHJcbjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicG8tZm9udC10ZXh0LXNtYWxsXCIgKm5nSWY9XCJtaW5GaWxlU2l6ZSB8fCBtYXhGaWxlU2l6ZVwiPlxyXG4gIDxzcGFuPnt7IGxpdGVyYWxzPy5hbGxvd2VkU2l6ZXMgfX08L3NwYW4+XHJcblxyXG4gIDxzcGFuICpuZ0lmPVwibWluRmlsZVNpemUgJiYgbWF4RmlsZVNpemVcIj5cclxuICAgIHt7IGxpdGVyYWxzPy5hbGxvd2VkRmlsZVNpemVSYW5nZSB8IHBvSTE4bjogW21pbkZpbGVTaXplLCBtYXhGaWxlU2l6ZV0gfX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDxzcGFuICpuZ0lmPVwibWluRmlsZVNpemUgJiYgIW1heEZpbGVTaXplXCI+XHJcbiAgICB7eyBsaXRlcmFscz8ubWluRmlsZVNpemVBbGxvd2VkIHwgcG9JMThuOiBtaW5GaWxlU2l6ZSB9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPHNwYW4gKm5nSWY9XCJtYXhGaWxlU2l6ZSAmJiAhbWluRmlsZVNpemVcIj5cclxuICAgIHt7IGxpdGVyYWxzPy5tYXhGaWxlU2l6ZUFsbG93ZWQgfCBwb0kxOG46IG1heEZpbGVTaXplIH19XHJcbiAgPC9zcGFuPlxyXG48L3A+XHJcbiJdfQ==