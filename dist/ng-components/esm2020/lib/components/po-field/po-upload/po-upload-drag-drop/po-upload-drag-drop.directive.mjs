import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PoI18nPipe } from '../../../../services/po-i18n/po-i18n.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/po-i18n/po-i18n.pipe";
import * as i2 from "../../../../services/po-notification/po-notification.service";
export class PoUploadDragDropDirective {
    constructor(i18nPipe, notification) {
        this.i18nPipe = i18nPipe;
        this.notification = notification;
        this.dragLeave = new EventEmitter();
        this.dragOver = new EventEmitter();
        this.fileChange = new EventEmitter();
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.timeout = setTimeout(() => this.dragLeave.emit(), 30);
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(this.timeout);
        if (!this.disabled) {
            this.dragOver.emit();
        }
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.getFilesFromDataTransferItems(event);
        this.dragLeave.emit();
    }
    getFilesFromDataTransferItems(event) {
        if (!this.disabled) {
            this.invalidFileType = 0;
            if (this.directoryCompatible) {
                this.getOnlyDirectories(event.dataTransfer.items).then(() => {
                    this.sendFiles(event, this.files);
                });
            }
            else {
                const files = this.getOnlyFiles(event.dataTransfer);
                this.sendFiles(event, files);
            }
        }
    }
    // analisa as entradas recursivamente
    async getFilesFromEntry(entry) {
        if (entry.isFile) {
            const file = await this.readFile(entry);
            return [file];
        }
        else if (entry.isDirectory) {
            return await this.readDirectory(entry);
        }
    }
    async getOnlyDirectories(dataTransferItems) {
        const entries = [];
        // lista todas as entradas antes de analisá-las
        for (const item of dataTransferItems) {
            entries.push(item.webkitGetAsEntry());
        }
        this.files = [];
        for (const entry of entries) {
            if (entry.isFile) {
                this.invalidFileType++;
            }
            else {
                const newFiles = await this.getFilesFromEntry(entry);
                this.files = this.files.concat(newFiles);
            }
        }
    }
    // return only files. If it is a directory, invalidFileType counts.
    getOnlyFiles(dataTransfer) {
        const fileList = Array.from(dataTransfer.files);
        const entriesFiles = Array.from(dataTransfer.items).map(item => item.webkitGetAsEntry());
        return fileList.reduce((newFiles, file) => {
            const entryFile = entriesFiles.find(entry => entry.name === file.name);
            if (entryFile.isFile) {
                return newFiles.concat(file);
            }
            else {
                this.invalidFileType++;
            }
            return newFiles;
        }, []);
    }
    readFile(entry) {
        return new Promise(resolve => {
            entry.file(file => {
                resolve(file);
            });
        });
    }
    async readDirectory(entry) {
        const dirReader = entry.createReader();
        let files = [];
        const newFiles = await this.readDirectoryEntries(dirReader);
        files = files.concat(newFiles);
        return files;
    }
    readDirectoryEntries(dirReader) {
        return new Promise(resolve => {
            dirReader.readEntries(async (entries) => {
                let files = [];
                for (const entry of entries) {
                    const itemFiles = await this.getFilesFromEntry(entry);
                    files = files.concat(itemFiles);
                }
                resolve(files);
            });
        });
    }
    sendFeedback(invalidFiles) {
        if (invalidFiles) {
            this.setPipeArguments('invalidFileType', invalidFiles);
        }
    }
    sendFiles(event, files) {
        if (this.areaElement.contains(event.target)) {
            if (files.length > 0) {
                this.fileChange.emit(files);
            }
            this.sendFeedback(this.invalidFileType);
        }
        else {
            const invalidDropAreaArg = this.directoryCompatible ? this.literals.folders : this.literals.files;
            this.setPipeArguments('invalidDropArea', invalidDropAreaArg);
        }
    }
    // método responsável por setar os argumentos do i18nPipe.
    setPipeArguments(literalAttributes, args) {
        const pipeArguments = this.i18nPipe.transform(this.literals[literalAttributes], args);
        this.notification.information(pipeArguments);
    }
}
PoUploadDragDropDirective.ɵfac = function PoUploadDragDropDirective_Factory(t) { return new (t || PoUploadDragDropDirective)(i0.ɵɵdirectiveInject(i1.PoI18nPipe), i0.ɵɵdirectiveInject(i2.PoNotificationService)); };
PoUploadDragDropDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoUploadDragDropDirective, selectors: [["", "p-upload-drag-drop", ""]], hostBindings: function PoUploadDragDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("dragleave", function PoUploadDragDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); }, false, i0.ɵɵresolveDocument)("dragover", function PoUploadDragDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); }, false, i0.ɵɵresolveDocument)("drop", function PoUploadDragDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { areaElement: ["p-area-element", "areaElement"], directoryCompatible: ["p-directory-compatible", "directoryCompatible"], disabled: ["p-disabled", "disabled"], literals: ["p-literals", "literals"] }, outputs: { dragLeave: "p-drag-leave", dragOver: "p-drag-over", fileChange: "p-file-change" }, features: [i0.ɵɵProvidersFeature([PoI18nPipe])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadDragDropDirective, [{
        type: Directive,
        args: [{
                selector: '[p-upload-drag-drop]',
                providers: [PoI18nPipe]
            }]
    }], function () { return [{ type: i1.PoI18nPipe }, { type: i2.PoNotificationService }]; }, { areaElement: [{
            type: Input,
            args: ['p-area-element']
        }], directoryCompatible: [{
            type: Input,
            args: ['p-directory-compatible']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], dragLeave: [{
            type: Output,
            args: ['p-drag-leave']
        }], dragOver: [{
            type: Output,
            args: ['p-drag-over']
        }], fileChange: [{
            type: Output,
            args: ['p-file-change']
        }], onDragLeave: [{
            type: HostListener,
            args: ['document:dragleave', ['$event']]
        }], onDragOver: [{
            type: HostListener,
            args: ['document:dragover', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['document:drop', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWRyYWctZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tdXBsb2FkL3BvLXVwbG9hZC1kcmFnLWRyb3AvcG8tdXBsb2FkLWRyYWctZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBUXZFLE1BQU0sT0FBTyx5QkFBeUI7SUFvQnBDLFlBQW9CLFFBQW9CLEVBQVUsWUFBbUM7UUFBakUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQVg3RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU9PLENBQUM7SUFFekMsV0FBVyxDQUFDLEtBQUs7UUFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFOEMsVUFBVSxDQUFDLEtBQUs7UUFDN0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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QUN0RixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDOztrR0FqS1UseUJBQXlCOzRFQUF6Qix5QkFBeUI7b0hBQXpCLHVCQUFtQiw4SEFBbkIsc0JBQWtCLHNIQUFsQixrQkFBYzt3VkFGZCxDQUFDLFVBQVUsQ0FBQzt1RkFFWix5QkFBeUI7Y0FKckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN4QjtpR0FFMEIsV0FBVztrQkFBbkMsS0FBSzttQkFBQyxnQkFBZ0I7WUFFVSxtQkFBbUI7a0JBQW5ELEtBQUs7bUJBQUMsd0JBQXdCO1lBRVYsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRUUsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRUssU0FBUztrQkFBaEMsTUFBTTttQkFBQyxjQUFjO1lBRUMsUUFBUTtrQkFBOUIsTUFBTTttQkFBQyxhQUFhO1lBRUksVUFBVTtrQkFBbEMsTUFBTTttQkFBQyxlQUFlO1lBU3lCLFdBQVc7a0JBQTFELFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFPQyxVQUFVO2tCQUF4RCxZQUFZO21CQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBV0YsTUFBTTtrQkFBaEQsWUFBWTttQkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0kxOG5QaXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcG8taTE4bi9wby1pMThuLnBpcGUnO1xyXG5pbXBvcnQgeyBQb05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wby1ub3RpZmljYXRpb24vcG8tbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1VwbG9hZExpdGVyYWxzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby11cGxvYWQtbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3AtdXBsb2FkLWRyYWctZHJvcF0nLFxyXG4gIHByb3ZpZGVyczogW1BvSTE4blBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1VwbG9hZERyYWdEcm9wRGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ3AtYXJlYS1lbGVtZW50JykgYXJlYUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoJ3AtZGlyZWN0b3J5LWNvbXBhdGlibGUnKSBkaXJlY3RvcnlDb21wYXRpYmxlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdwLWxpdGVyYWxzJykgbGl0ZXJhbHM6IFBvVXBsb2FkTGl0ZXJhbHM7XHJcblxyXG4gIEBPdXRwdXQoJ3AtZHJhZy1sZWF2ZScpIGRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1kcmFnLW92ZXInKSBkcmFnT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgncC1maWxlLWNoYW5nZScpIGZpbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHRpbWVvdXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBmaWxlczogQXJyYXk8RmlsZT47XHJcbiAgcHJpdmF0ZSBpbnZhbGlkRmlsZVR5cGU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuUGlwZTogUG9JMThuUGlwZSwgcHJpdmF0ZSBub3RpZmljYXRpb246IFBvTm90aWZpY2F0aW9uU2VydmljZSkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgb25EcmFnTGVhdmUoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSwgMzApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ292ZXInLCBbJyRldmVudCddKSBvbkRyYWdPdmVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZHJhZ092ZXIuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJvcCcsIFsnJGV2ZW50J10pIG9uRHJvcChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuZ2V0RmlsZXNGcm9tRGF0YVRyYW5zZmVySXRlbXMoZXZlbnQpO1xyXG4gICAgdGhpcy5kcmFnTGVhdmUuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWxlc0Zyb21EYXRhVHJhbnNmZXJJdGVtcyhldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbnZhbGlkRmlsZVR5cGUgPSAwO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3RvcnlDb21wYXRpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRPbmx5RGlyZWN0b3JpZXMoZXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VuZEZpbGVzKGV2ZW50LCB0aGlzLmZpbGVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0T25seUZpbGVzKGV2ZW50LmRhdGFUcmFuc2Zlcik7XHJcbiAgICAgICAgdGhpcy5zZW5kRmlsZXMoZXZlbnQsIGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYW5hbGlzYSBhcyBlbnRyYWRhcyByZWN1cnNpdmFtZW50ZVxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0RmlsZXNGcm9tRW50cnkoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeS5pc0ZpbGUpIHtcclxuICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMucmVhZEZpbGUoZW50cnkpO1xyXG4gICAgICByZXR1cm4gW2ZpbGVdO1xyXG4gICAgfSBlbHNlIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZWFkRGlyZWN0b3J5KGVudHJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0T25seURpcmVjdG9yaWVzKGRhdGFUcmFuc2Zlckl0ZW1zKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gW107XHJcblxyXG4gICAgLy8gbGlzdGEgdG9kYXMgYXMgZW50cmFkYXMgYW50ZXMgZGUgYW5hbGlzw6EtbGFzXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YVRyYW5zZmVySXRlbXMpIHtcclxuICAgICAgZW50cmllcy5wdXNoKGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuICAgICAgaWYgKGVudHJ5LmlzRmlsZSkge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZEZpbGVUeXBlKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBhd2FpdCB0aGlzLmdldEZpbGVzRnJvbUVudHJ5KGVudHJ5KTtcclxuICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQobmV3RmlsZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gb25seSBmaWxlcy4gSWYgaXQgaXMgYSBkaXJlY3RvcnksIGludmFsaWRGaWxlVHlwZSBjb3VudHMuXHJcbiAgcHJpdmF0ZSBnZXRPbmx5RmlsZXMoZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIpOiBBcnJheTxGaWxlPiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdDogQXJyYXk8RmlsZT4gPSBBcnJheS5mcm9tKGRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICBjb25zdCBlbnRyaWVzRmlsZXM6IEFycmF5PGFueT4gPSBBcnJheS5mcm9tKGRhdGFUcmFuc2Zlci5pdGVtcykubWFwKGl0ZW0gPT4gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCkpO1xyXG5cclxuICAgIHJldHVybiBmaWxlTGlzdC5yZWR1Y2UoKG5ld0ZpbGVzLCBmaWxlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJpZXNGaWxlcy5maW5kKGVudHJ5ID0+IGVudHJ5Lm5hbWUgPT09IGZpbGUubmFtZSk7XHJcblxyXG4gICAgICBpZiAoZW50cnlGaWxlLmlzRmlsZSkge1xyXG4gICAgICAgIHJldHVybiBuZXdGaWxlcy5jb25jYXQoZmlsZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRmlsZVR5cGUrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3RmlsZXM7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRGaWxlKGVudHJ5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGVudHJ5LmZpbGUoZmlsZSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgcmVhZERpcmVjdG9yeShlbnRyeSkge1xyXG4gICAgY29uc3QgZGlyUmVhZGVyID0gZW50cnkuY3JlYXRlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZXMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBuZXdGaWxlcyA9IGF3YWl0IHRoaXMucmVhZERpcmVjdG9yeUVudHJpZXMoZGlyUmVhZGVyKTtcclxuICAgIGZpbGVzID0gZmlsZXMuY29uY2F0KG5ld0ZpbGVzKTtcclxuICAgIHJldHVybiBmaWxlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZERpcmVjdG9yeUVudHJpZXMoZGlyUmVhZGVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcyhhc3luYyBlbnRyaWVzID0+IHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1GaWxlcyA9IGF3YWl0IHRoaXMuZ2V0RmlsZXNGcm9tRW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgZmlsZXMgPSBmaWxlcy5jb25jYXQoaXRlbUZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZShmaWxlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbmRGZWVkYmFjayhpbnZhbGlkRmlsZXM6IG51bWJlcikge1xyXG4gICAgaWYgKGludmFsaWRGaWxlcykge1xyXG4gICAgICB0aGlzLnNldFBpcGVBcmd1bWVudHMoJ2ludmFsaWRGaWxlVHlwZScsIGludmFsaWRGaWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbmRGaWxlcyhldmVudCwgZmlsZXMpIHtcclxuICAgIGlmICh0aGlzLmFyZWFFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmZpbGVDaGFuZ2UuZW1pdChmaWxlcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VuZEZlZWRiYWNrKHRoaXMuaW52YWxpZEZpbGVUeXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGludmFsaWREcm9wQXJlYUFyZyA9IHRoaXMuZGlyZWN0b3J5Q29tcGF0aWJsZSA/IHRoaXMubGl0ZXJhbHMuZm9sZGVycyA6IHRoaXMubGl0ZXJhbHMuZmlsZXM7XHJcbiAgICAgIHRoaXMuc2V0UGlwZUFyZ3VtZW50cygnaW52YWxpZERyb3BBcmVhJywgaW52YWxpZERyb3BBcmVhQXJnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBzZXRhciBvcyBhcmd1bWVudG9zIGRvIGkxOG5QaXBlLlxyXG4gIHByaXZhdGUgc2V0UGlwZUFyZ3VtZW50cyhsaXRlcmFsQXR0cmlidXRlczogc3RyaW5nLCBhcmdzPykge1xyXG4gICAgY29uc3QgcGlwZUFyZ3VtZW50cyA9IHRoaXMuaTE4blBpcGUudHJhbnNmb3JtKHRoaXMubGl0ZXJhbHNbbGl0ZXJhbEF0dHJpYnV0ZXNdLCBhcmdzKTtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uLmluZm9ybWF0aW9uKHBpcGVBcmd1bWVudHMpO1xyXG4gIH1cclxufVxyXG4iXX0=