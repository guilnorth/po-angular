import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { convertImageToBase64 } from '../../../../utils/util';
import { poRichTextLiteralsDefault } from '../po-rich-text-literals';
import * as i0 from "@angular/core";
import * as i1 from "./../../../../services/po-language/po-language.service";
import * as i2 from "@angular/forms";
import * as i3 from "../../../po-modal/po-modal.component";
import * as i4 from "../../po-upload/po-upload.component";
import * as i5 from "../../po-url/po-url.component";
const _c0 = ["modal"];
const _c1 = ["modalImageForm"];
const _c2 = ["upload"];
const uploadRestrictions = ['.apng', '.bmp', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg'];
export class PoRichTextImageModalComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.command = new EventEmitter();
        this.selection = document.getSelection();
        this.uploadRestrictions = {
            allowedExtensions: uploadRestrictions
        };
        this.literals = {
            ...poRichTextLiteralsDefault[this.languageService.getShortLanguage()]
        };
        this.modalCancelAction = {
            label: this.literals.cancel,
            action: () => {
                this.modal.close();
                this.command.emit();
                this.retrieveCursorPosition();
                this.cleanUpFields();
            }
        };
        this.modalConfirmAction = {
            label: this.literals.insert,
            disabled: false,
            action: () => this.insertElementRef()
        };
    }
    get isUploadValid() {
        return !!(this.uploadModel && this.uploadModel.length);
    }
    get isUrlValid() {
        return !!this.urlImage && this.modalImageForm && this.modalImageForm.valid;
    }
    openModal() {
        this.saveCursorPosition();
        this.modal.open();
    }
    cleanUpFields() {
        this.urlImage = undefined;
        this.uploadModel = undefined;
    }
    async convertToBase64() {
        if (this.isUploadValid) {
            const uploadImage = this.uploadModel[0].rawFile;
            return await convertImageToBase64(uploadImage);
        }
    }
    emitCommand(value) {
        let command;
        if (value) {
            command = 'insertImage';
            this.command.emit({ command, value });
        }
    }
    async insertElementRef() {
        let uploadImage;
        if (!this.urlImage) {
            uploadImage = await this.convertToBase64();
        }
        this.retrieveCursorPosition();
        this.modal.close();
        if (this.isUrlValid || this.isUploadValid) {
            this.emitCommand(this.urlImage || uploadImage);
        }
        this.cleanUpFields();
    }
    retrieveCursorPosition() {
        this.selection.collapse(this.savedCursorPosition[0], this.savedCursorPosition[1]);
    }
    saveCursorPosition() {
        this.savedCursorPosition = [this.selection.focusNode, this.selection.focusOffset];
    }
}
PoRichTextImageModalComponent.ɵfac = function PoRichTextImageModalComponent_Factory(t) { return new (t || PoRichTextImageModalComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoRichTextImageModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoRichTextImageModalComponent, selectors: [["po-rich-text-image-modal"]], viewQuery: function PoRichTextImageModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 5);
        i0.ɵɵviewQuery(_c2, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalImageForm = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.upload = _t.first);
    } }, outputs: { command: "p-command" }, decls: 9, vars: 10, consts: [["p-hide-close", "", 3, "p-primary-action", "p-secondary-action", "p-title"], ["modal", ""], ["modalImageForm", "ngForm"], [1, "po-row"], ["name", "upload", "p-drag-drop-height", "160", "p-hide-restrictions-info", "", "p-hide-send-button", "", "p-url", "x", 1, "po-md-12", 3, "ngModel", "p-drag-drop", "p-disabled", "p-restrictions", "ngModelChange"], ["upload", ""], ["name", "url", 1, "po-md-12", "po-mt-3", 3, "ngModel", "p-label", "p-disabled", "ngModelChange"]], template: function PoRichTextImageModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0, 1)(2, "form", null, 2)(4, "div", 3)(5, "po-upload", 4, 5);
        i0.ɵɵlistener("ngModelChange", function PoRichTextImageModalComponent_Template_po_upload_ngModelChange_5_listener($event) { return ctx.uploadModel = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 3)(8, "po-url", 6);
        i0.ɵɵlistener("ngModelChange", function PoRichTextImageModalComponent_Template_po_url_ngModelChange_8_listener($event) { return ctx.urlImage = $event; });
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵproperty("p-primary-action", ctx.modalConfirmAction)("p-secondary-action", ctx.modalCancelAction)("p-title", ctx.literals.insertImage);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.uploadModel)("p-drag-drop", !_r0.isHidden)("p-disabled", ctx.isUrlValid)("p-restrictions", ctx.uploadRestrictions);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.urlImage)("p-label", ctx.literals.urlImage)("p-disabled", ctx.isUploadValid);
    } }, dependencies: [i2.ɵNgNoValidate, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm, i3.PoModalComponent, i4.PoUploadComponent, i5.PoUrlComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextImageModalComponent, [{
        type: Component,
        args: [{ selector: 'po-rich-text-image-modal', template: "<po-modal\r\n  #modal\r\n  p-hide-close\r\n  [p-primary-action]=\"modalConfirmAction\"\r\n  [p-secondary-action]=\"modalCancelAction\"\r\n  [p-title]=\"literals.insertImage\"\r\n>\r\n  <form #modalImageForm=\"ngForm\">\r\n    <div class=\"po-row\">\r\n      <!-- po-upload desabilita o drag drop caso n\u00E3o tenha valor atribuido para a propriedade p-url -->\r\n      <po-upload\r\n        #upload\r\n        class=\"po-md-12\"\r\n        name=\"upload\"\r\n        [(ngModel)]=\"uploadModel\"\r\n        p-drag-drop-height=\"160\"\r\n        p-hide-restrictions-info\r\n        p-hide-send-button\r\n        p-url=\"x\"\r\n        [p-drag-drop]=\"!modal.isHidden\"\r\n        [p-disabled]=\"isUrlValid\"\r\n        [p-restrictions]=\"uploadRestrictions\"\r\n      >\r\n      </po-upload>\r\n    </div>\r\n\r\n    <div class=\"po-row\">\r\n      <po-url\r\n        class=\"po-md-12 po-mt-3\"\r\n        name=\"url\"\r\n        [(ngModel)]=\"urlImage\"\r\n        [p-label]=\"literals.urlImage\"\r\n        [p-disabled]=\"isUploadValid\"\r\n      >\r\n      </po-url>\r\n    </div>\r\n  </form>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { modal: [{
            type: ViewChild,
            args: ['modal', { static: true }]
        }], modalImageForm: [{
            type: ViewChild,
            args: ['modalImageForm']
        }], upload: [{
            type: ViewChild,
            args: ['upload', { static: true }]
        }], command: [{
            type: Output,
            args: ['p-command']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LWltYWdlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1yaWNoLXRleHQvcG8tcmljaC10ZXh0LWltYWdlLW1vZGFsL3BvLXJpY2gtdGV4dC1pbWFnZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tcmljaC10ZXh0L3BvLXJpY2gtdGV4dC1pbWFnZS1tb2RhbC9wby1yaWNoLXRleHQtaW1hZ2UtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUk5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7OztBQUlyRSxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBTTlGLE1BQU0sT0FBTyw2QkFBNkI7SUE2Q3hDLFlBQW9CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQXRDakMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFxRCxDQUFDO1FBR3JHLGNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEMsdUJBQWtCLEdBQTZCO1lBQzdDLGlCQUFpQixFQUFFLGtCQUFrQjtTQUN0QyxDQUFDO1FBR08sYUFBUSxHQUFHO1lB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Q0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRixDQUFDOzswR0E5RlUsNkJBQTZCO2dGQUE3Qiw2QkFBNkI7Ozs7Ozs7Ozs7UUNqQjFDLHNDQU1DLG9CQUFBLGFBQUEsc0JBQUE7UUFRTywrSkFBeUI7UUFTM0IsaUJBQVksRUFBQTtRQUdkLDhCQUFvQixnQkFBQTtRQUloQix5SkFBc0I7UUFJeEIsaUJBQVMsRUFBQSxFQUFBLEVBQUE7OztRQS9CYix5REFBdUMsNkNBQUEscUNBQUE7UUFXakMsZUFBeUI7UUFBekIseUNBQXlCLDhCQUFBLDhCQUFBLDBDQUFBO1FBZ0J6QixlQUFzQjtRQUF0QixzQ0FBc0Isa0NBQUEsaUNBQUE7O3VGRGJqQiw2QkFBNkI7Y0FKekMsU0FBUzsyQkFDRSwwQkFBMEI7b0VBSUUsS0FBSztrQkFBMUMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRVAsY0FBYztrQkFBMUMsU0FBUzttQkFBQyxnQkFBZ0I7WUFFWSxNQUFNO2tCQUE1QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFaEIsT0FBTztrQkFBM0IsTUFBTTttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0SW1hZ2VUb0Jhc2U2NCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb01vZGFsQWN0aW9uLCBQb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vcG8tbW9kYWwnO1xyXG5pbXBvcnQgeyBwb1JpY2hUZXh0TGl0ZXJhbHNEZWZhdWx0IH0gZnJvbSAnLi4vcG8tcmljaC10ZXh0LWxpdGVyYWxzJztcclxuaW1wb3J0IHsgUG9VcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wby11cGxvYWQvcG8tdXBsb2FkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvVXBsb2FkRmlsZVJlc3RyaWN0aW9ucyB9IGZyb20gJy4uLy4uL3BvLXVwbG9hZC9pbnRlcmZhY2VzL3BvLXVwbG9hZC1maWxlLXJlc3RyaWN0aW9uLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCB1cGxvYWRSZXN0cmljdGlvbnMgPSBbJy5hcG5nJywgJy5ibXAnLCAnLmdpZicsICcuaWNvJywgJy5qcGVnJywgJy5qcGcnLCAnLnBuZycsICcuc3ZnJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXJpY2gtdGV4dC1pbWFnZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXJpY2gtdGV4dC1pbWFnZS1tb2RhbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUmljaFRleHRJbWFnZU1vZGFsQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdtb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsOiBQb01vZGFsQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbEltYWdlRm9ybScpIG1vZGFsSW1hZ2VGb3JtOiBOZ0Zvcm07XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZCcsIHsgc3RhdGljOiB0cnVlIH0pIHVwbG9hZDogUG9VcGxvYWRDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoJ3AtY29tbWFuZCcpIGNvbW1hbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgY29tbWFuZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgYW55IH0+KCk7XHJcblxyXG4gIHNhdmVkQ3Vyc29yUG9zaXRpb247XHJcbiAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgdXBsb2FkTW9kZWw6IEFycmF5PGFueT47XHJcbiAgdXBsb2FkUmVzdHJpY3Rpb25zOiBQb1VwbG9hZEZpbGVSZXN0cmljdGlvbnMgPSB7XHJcbiAgICBhbGxvd2VkRXh0ZW5zaW9uczogdXBsb2FkUmVzdHJpY3Rpb25zXHJcbiAgfTtcclxuICB1cmxJbWFnZTogc3RyaW5nO1xyXG5cclxuICByZWFkb25seSBsaXRlcmFscyA9IHtcclxuICAgIC4uLnBvUmljaFRleHRMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpXVxyXG4gIH07XHJcblxyXG4gIG1vZGFsQ2FuY2VsQWN0aW9uOiBQb01vZGFsQWN0aW9uID0ge1xyXG4gICAgbGFiZWw6IHRoaXMubGl0ZXJhbHMuY2FuY2VsLFxyXG4gICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcclxuICAgICAgdGhpcy5jb21tYW5kLmVtaXQoKTtcclxuICAgICAgdGhpcy5yZXRyaWV2ZUN1cnNvclBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2xlYW5VcEZpZWxkcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1vZGFsQ29uZmlybUFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHtcclxuICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLmluc2VydCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGFjdGlvbjogKCkgPT4gdGhpcy5pbnNlcnRFbGVtZW50UmVmKClcclxuICB9O1xyXG5cclxuICBnZXQgaXNVcGxvYWRWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLnVwbG9hZE1vZGVsICYmIHRoaXMudXBsb2FkTW9kZWwubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1VybFZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy51cmxJbWFnZSAmJiB0aGlzLm1vZGFsSW1hZ2VGb3JtICYmIHRoaXMubW9kYWxJbWFnZUZvcm0udmFsaWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHt9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMuc2F2ZUN1cnNvclBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW5VcEZpZWxkcygpIHtcclxuICAgIHRoaXMudXJsSW1hZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnVwbG9hZE1vZGVsID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBjb252ZXJ0VG9CYXNlNjQoKSB7XHJcbiAgICBpZiAodGhpcy5pc1VwbG9hZFZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IHVwbG9hZEltYWdlID0gdGhpcy51cGxvYWRNb2RlbFswXS5yYXdGaWxlO1xyXG4gICAgICByZXR1cm4gYXdhaXQgY29udmVydEltYWdlVG9CYXNlNjQodXBsb2FkSW1hZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0Q29tbWFuZCh2YWx1ZSkge1xyXG4gICAgbGV0IGNvbW1hbmQ6IHN0cmluZztcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb21tYW5kID0gJ2luc2VydEltYWdlJztcclxuICAgICAgdGhpcy5jb21tYW5kLmVtaXQoeyBjb21tYW5kLCB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgaW5zZXJ0RWxlbWVudFJlZigpIHtcclxuICAgIGxldCB1cGxvYWRJbWFnZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICghdGhpcy51cmxJbWFnZSkge1xyXG4gICAgICB1cGxvYWRJbWFnZSA9IGF3YWl0IHRoaXMuY29udmVydFRvQmFzZTY0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXRyaWV2ZUN1cnNvclBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNVcmxWYWxpZCB8fCB0aGlzLmlzVXBsb2FkVmFsaWQpIHtcclxuICAgICAgdGhpcy5lbWl0Q29tbWFuZCh0aGlzLnVybEltYWdlIHx8IHVwbG9hZEltYWdlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYW5VcEZpZWxkcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXRyaWV2ZUN1cnNvclBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGFwc2UodGhpcy5zYXZlZEN1cnNvclBvc2l0aW9uWzBdLCB0aGlzLnNhdmVkQ3Vyc29yUG9zaXRpb25bMV0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlQ3Vyc29yUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnNhdmVkQ3Vyc29yUG9zaXRpb24gPSBbdGhpcy5zZWxlY3Rpb24uZm9jdXNOb2RlLCB0aGlzLnNlbGVjdGlvbi5mb2N1c09mZnNldF07XHJcbiAgfVxyXG59XHJcbiIsIjxwby1tb2RhbFxyXG4gICNtb2RhbFxyXG4gIHAtaGlkZS1jbG9zZVxyXG4gIFtwLXByaW1hcnktYWN0aW9uXT1cIm1vZGFsQ29uZmlybUFjdGlvblwiXHJcbiAgW3Atc2Vjb25kYXJ5LWFjdGlvbl09XCJtb2RhbENhbmNlbEFjdGlvblwiXHJcbiAgW3AtdGl0bGVdPVwibGl0ZXJhbHMuaW5zZXJ0SW1hZ2VcIlxyXG4+XHJcbiAgPGZvcm0gI21vZGFsSW1hZ2VGb3JtPVwibmdGb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG8tcm93XCI+XHJcbiAgICAgIDwhLS0gcG8tdXBsb2FkIGRlc2FiaWxpdGEgbyBkcmFnIGRyb3AgY2FzbyBuw6NvIHRlbmhhIHZhbG9yIGF0cmlidWlkbyBwYXJhIGEgcHJvcHJpZWRhZGUgcC11cmwgLS0+XHJcbiAgICAgIDxwby11cGxvYWRcclxuICAgICAgICAjdXBsb2FkXHJcbiAgICAgICAgY2xhc3M9XCJwby1tZC0xMlwiXHJcbiAgICAgICAgbmFtZT1cInVwbG9hZFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ1cGxvYWRNb2RlbFwiXHJcbiAgICAgICAgcC1kcmFnLWRyb3AtaGVpZ2h0PVwiMTYwXCJcclxuICAgICAgICBwLWhpZGUtcmVzdHJpY3Rpb25zLWluZm9cclxuICAgICAgICBwLWhpZGUtc2VuZC1idXR0b25cclxuICAgICAgICBwLXVybD1cInhcIlxyXG4gICAgICAgIFtwLWRyYWctZHJvcF09XCIhbW9kYWwuaXNIaWRkZW5cIlxyXG4gICAgICAgIFtwLWRpc2FibGVkXT1cImlzVXJsVmFsaWRcIlxyXG4gICAgICAgIFtwLXJlc3RyaWN0aW9uc109XCJ1cGxvYWRSZXN0cmljdGlvbnNcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvcG8tdXBsb2FkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvLXJvd1wiPlxyXG4gICAgICA8cG8tdXJsXHJcbiAgICAgICAgY2xhc3M9XCJwby1tZC0xMiBwby1tdC0zXCJcclxuICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInVybEltYWdlXCJcclxuICAgICAgICBbcC1sYWJlbF09XCJsaXRlcmFscy51cmxJbWFnZVwiXHJcbiAgICAgICAgW3AtZGlzYWJsZWRdPVwiaXNVcGxvYWRWYWxpZFwiXHJcbiAgICAgID5cclxuICAgICAgPC9wby11cmw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbjwvcG8tbW9kYWw+XHJcbiJdfQ==