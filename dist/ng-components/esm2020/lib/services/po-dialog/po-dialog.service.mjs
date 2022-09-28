import { Injectable } from '@angular/core';
import { PoDialogBaseService } from './po-dialog-base.service';
import { PoDialogComponent } from './po-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "./../po-component-injector/po-component-injector.service";
/**
 * @docsExtends PoDialogBaseService
 *
 * @example
 *
 * <example name="po-dialog-basic" title="PO Dialog Basic">
 *  <file name="sample-po-dialog-basic/sample-po-dialog-basic.component.html"> </file>
 *  <file name="sample-po-dialog-basic/sample-po-dialog-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-dialog-labs" title="PO Dialog Labs">
 *  <file name="sample-po-dialog-labs/sample-po-dialog-labs.component.html"> </file>
 *  <file name="sample-po-dialog-labs/sample-po-dialog-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-dialog-cancel-credit-card" title="PO Dialog - Cancel Credit Card">
 *  <file name="sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"> </file>
 *  <file name="sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"> </file>
 * </example>
 */
export class PoDialogService extends PoDialogBaseService {
    constructor(poComponentInjector) {
        super();
        this.poComponentInjector = poComponentInjector;
    }
    openDialog(dialogType, dialogOptions) {
        const componentRef = this.poComponentInjector.createComponentInApplication(PoDialogComponent);
        componentRef.changeDetectorRef.detectChanges();
        componentRef.instance.open(dialogOptions, dialogType, componentRef);
    }
}
PoDialogService.ɵfac = function PoDialogService_Factory(t) { return new (t || PoDialogService)(i0.ɵɵinject(i1.PoComponentInjectorService)); };
PoDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoDialogService, factory: PoDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1.PoComponentInjectorService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWRpYWxvZy9wby1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1CO0lBQ3RELFlBQW9CLG1CQUErQztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7SUFFbkUsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUF3QixFQUFFLGFBQTREO1FBQy9GLE1BQU0sWUFBWSxHQUFzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqSCxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs4RUFUVSxlQUFlO3FFQUFmLGVBQWUsV0FBZixlQUFlO3VGQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9Db21wb25lbnRJbmplY3RvclNlcnZpY2UgfSBmcm9tICcuLy4uL3BvLWNvbXBvbmVudC1pbmplY3Rvci9wby1jb21wb25lbnQtaW5qZWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvRGlhbG9nQWxlcnRPcHRpb25zLCBQb0RpYWxvZ0NvbmZpcm1PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWRpYWxvZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0RpYWxvZ0Jhc2VTZXJ2aWNlIH0gZnJvbSAnLi9wby1kaWFsb2ctYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BvLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0RpYWxvZ1R5cGUgfSBmcm9tICcuL3BvLWRpYWxvZy5lbnVtJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9EaWFsb2dCYXNlU2VydmljZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tZGlhbG9nLWJhc2ljXCIgdGl0bGU9XCJQTyBEaWFsb2cgQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlhbG9nLWJhc2ljL3NhbXBsZS1wby1kaWFsb2ctYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaWFsb2ctYmFzaWMvc2FtcGxlLXBvLWRpYWxvZy1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1kaWFsb2ctbGFic1wiIHRpdGxlPVwiUE8gRGlhbG9nIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlhbG9nLWxhYnMvc2FtcGxlLXBvLWRpYWxvZy1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlhbG9nLWxhYnMvc2FtcGxlLXBvLWRpYWxvZy1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLWRpYWxvZy1jYW5jZWwtY3JlZGl0LWNhcmRcIiB0aXRsZT1cIlBPIERpYWxvZyAtIENhbmNlbCBDcmVkaXQgQ2FyZFwiPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1kaWFsb2ctY2FuY2VsLWNyZWRpdC1jYXJkL3NhbXBsZS1wby1kaWFsb2ctY2FuY2VsLWNyZWRpdC1jYXJkLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tZGlhbG9nLWNhbmNlbC1jcmVkaXQtY2FyZC9zYW1wbGUtcG8tZGlhbG9nLWNhbmNlbC1jcmVkaXQtY2FyZC5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0RpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBQb0RpYWxvZ0Jhc2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvQ29tcG9uZW50SW5qZWN0b3I6IFBvQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZyhkaWFsb2dUeXBlOiBQb0RpYWxvZ1R5cGUsIGRpYWxvZ09wdGlvbnM6IFBvRGlhbG9nQWxlcnRPcHRpb25zIHwgUG9EaWFsb2dDb25maXJtT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IHRoaXMucG9Db21wb25lbnRJbmplY3Rvci5jcmVhdGVDb21wb25lbnRJbkFwcGxpY2F0aW9uKFBvRGlhbG9nQ29tcG9uZW50KTtcclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uub3BlbihkaWFsb2dPcHRpb25zLCBkaWFsb2dUeXBlLCBjb21wb25lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=