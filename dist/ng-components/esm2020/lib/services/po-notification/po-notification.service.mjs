import { Injectable } from '@angular/core';
import { PoNotificationBaseService } from './po-notification-base.service';
import { PoToasterOrientation } from './po-toaster/po-toaster-orientation.enum';
import { PoToasterType } from './po-toaster/po-toaster-type.enum';
import { PoToasterComponent } from './po-toaster/po-toaster.component';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./../po-component-injector/po-component-injector.service";
const PoNotificationMaxLength = 5;
const PoNotificationFadeTime = 200;
/**
 * @docsExtends PoNotificationBaseService
 *
 * @example
 *
 * <example name="po-notification-basic" title="PO Notification Basic">
 *  <file name="sample-po-notification-basic/sample-po-notification-basic.component.html"> </file>
 *  <file name="sample-po-notification-basic/sample-po-notification-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-notification-labs" title="PO Notification Labs">
 *  <file name="sample-po-notification-labs/sample-po-notification-labs.component.html"> </file>
 *  <file name="sample-po-notification-labs/sample-po-notification-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-notification-sales" title="PO Notification - Sales">
 *  <file name="sample-po-notification-sales/sample-po-notification-sales.component.html"> </file>
 *  <file name="sample-po-notification-sales/sample-po-notification-sales.component.ts"> </file>
 * </example>
 */
export class PoNotificationService extends PoNotificationBaseService {
    constructor(poComponentInjector) {
        super();
        this.poComponentInjector = poComponentInjector;
    }
    createToaster(toaster) {
        const componentRef = this.poComponentInjector.createComponentInApplication(PoToasterComponent);
        toaster.componentRef = componentRef;
        componentRef.changeDetectorRef.detectChanges();
        componentRef.instance.configToaster(toaster);
        const stack = toaster.orientation === PoToasterOrientation.Top ? this.stackTop : this.stackBottom;
        stack.push(componentRef);
        this.verifyLimitToaster(stack);
        this.observableOnClose(componentRef);
        if (!((toaster.action && toaster.actionLabel) || toaster.type === PoToasterType.Error)) {
            timer(toaster.duration)
                .pipe(takeWhile(() => componentRef.instance.alive))
                .subscribe(() => {
                this.destroyToaster(componentRef);
            });
        }
    }
    destroyToaster(toaster) {
        let stack;
        if (toaster.instance.orientation === PoToasterOrientation.Top) {
            stack = this.stackTop;
        }
        else {
            stack = this.stackBottom;
        }
        toaster.instance.setFadeOut();
        const index = stack.indexOf(toaster);
        stack.splice(index, 1);
        setTimeout(() => {
            this.poComponentInjector.destroyComponentInApplication(toaster);
            for (let count = 0; count < stack.length; count++) {
                stack[count].instance.changePosition(count);
            }
        }, PoNotificationFadeTime);
    }
    observableOnClose(componentRef) {
        componentRef.instance.observableOnClose.subscribe(() => {
            this.destroyToaster(componentRef);
        });
    }
    verifyLimitToaster(stack) {
        if (stack.length > PoNotificationMaxLength) {
            this.destroyToaster(stack[0]);
        }
    }
}
PoNotificationService.ɵfac = function PoNotificationService_Factory(t) { return new (t || PoNotificationService)(i0.ɵɵinject(i1.PoComponentInjectorService)); };
PoNotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoNotificationService, factory: PoNotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PoComponentInjectorService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLW5vdGlmaWNhdGlvbi9wby1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUzQyxNQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQztBQUNsQyxNQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztBQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUtILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7SUFDbEUsWUFBb0IsbUJBQStDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRFUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtJQUVuRSxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWtCO1FBQzlCLE1BQU0sWUFBWSxHQUFzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsSCxPQUFPLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVwQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsS0FBSyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEQsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQVk7UUFDekIsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLG9CQUFvQixDQUFDLEdBQUcsRUFBRTtZQUM3RCxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2QjthQUFNO1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDMUI7UUFFRCxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDakQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8saUJBQWlCLENBQUMsWUFBaUI7UUFDekMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsS0FBaUI7UUFDMUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLHVCQUF1QixFQUFFO1lBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzswRkExRFUscUJBQXFCOzJFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNO3VGQUVQLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wby1jb21wb25lbnQtaW5qZWN0b3IvcG8tY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb05vdGlmaWNhdGlvbkJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9wby1ub3RpZmljYXRpb24tYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyIH0gZnJvbSAnLi9wby10b2FzdGVyL3BvLXRvYXN0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyT3JpZW50YXRpb24gfSBmcm9tICcuL3BvLXRvYXN0ZXIvcG8tdG9hc3Rlci1vcmllbnRhdGlvbi5lbnVtJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyVHlwZSB9IGZyb20gJy4vcG8tdG9hc3Rlci9wby10b2FzdGVyLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBvVG9hc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcG8tdG9hc3Rlci9wby10b2FzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0IFBvTm90aWZpY2F0aW9uTWF4TGVuZ3RoID0gNTtcclxuY29uc3QgUG9Ob3RpZmljYXRpb25GYWRlVGltZSA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc0V4dGVuZHMgUG9Ob3RpZmljYXRpb25CYXNlU2VydmljZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tbm90aWZpY2F0aW9uLWJhc2ljXCIgdGl0bGU9XCJQTyBOb3RpZmljYXRpb24gQmFzaWNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbm90aWZpY2F0aW9uLWJhc2ljL3NhbXBsZS1wby1ub3RpZmljYXRpb24tYmFzaWMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1ub3RpZmljYXRpb24tYmFzaWMvc2FtcGxlLXBvLW5vdGlmaWNhdGlvbi1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1ub3RpZmljYXRpb24tbGFic1wiIHRpdGxlPVwiUE8gTm90aWZpY2F0aW9uIExhYnNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbm90aWZpY2F0aW9uLWxhYnMvc2FtcGxlLXBvLW5vdGlmaWNhdGlvbi1sYWJzLmNvbXBvbmVudC5odG1sXCI+IDwvZmlsZT5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbm90aWZpY2F0aW9uLWxhYnMvc2FtcGxlLXBvLW5vdGlmaWNhdGlvbi1sYWJzLmNvbXBvbmVudC50c1wiPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICpcclxuICogPGV4YW1wbGUgbmFtZT1cInBvLW5vdGlmaWNhdGlvbi1zYWxlc1wiIHRpdGxlPVwiUE8gTm90aWZpY2F0aW9uIC0gU2FsZXNcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tbm90aWZpY2F0aW9uLXNhbGVzL3NhbXBsZS1wby1ub3RpZmljYXRpb24tc2FsZXMuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1ub3RpZmljYXRpb24tc2FsZXMvc2FtcGxlLXBvLW5vdGlmaWNhdGlvbi1zYWxlcy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9Ob3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgUG9Ob3RpZmljYXRpb25CYXNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb0NvbXBvbmVudEluamVjdG9yOiBQb0NvbXBvbmVudEluamVjdG9yU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRvYXN0ZXIodG9hc3RlcjogUG9Ub2FzdGVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gdGhpcy5wb0NvbXBvbmVudEluamVjdG9yLmNyZWF0ZUNvbXBvbmVudEluQXBwbGljYXRpb24oUG9Ub2FzdGVyQ29tcG9uZW50KTtcclxuICAgIHRvYXN0ZXIuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xyXG5cclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29uZmlnVG9hc3Rlcih0b2FzdGVyKTtcclxuXHJcbiAgICBjb25zdCBzdGFjayA9IHRvYXN0ZXIub3JpZW50YXRpb24gPT09IFBvVG9hc3Rlck9yaWVudGF0aW9uLlRvcCA/IHRoaXMuc3RhY2tUb3AgOiB0aGlzLnN0YWNrQm90dG9tO1xyXG4gICAgc3RhY2sucHVzaChjb21wb25lbnRSZWYpO1xyXG5cclxuICAgIHRoaXMudmVyaWZ5TGltaXRUb2FzdGVyKHN0YWNrKTtcclxuXHJcbiAgICB0aGlzLm9ic2VydmFibGVPbkNsb3NlKGNvbXBvbmVudFJlZik7XHJcblxyXG4gICAgaWYgKCEoKHRvYXN0ZXIuYWN0aW9uICYmIHRvYXN0ZXIuYWN0aW9uTGFiZWwpIHx8IHRvYXN0ZXIudHlwZSA9PT0gUG9Ub2FzdGVyVHlwZS5FcnJvcikpIHtcclxuICAgICAgdGltZXIodG9hc3Rlci5kdXJhdGlvbilcclxuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gY29tcG9uZW50UmVmLmluc3RhbmNlLmFsaXZlKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveVRvYXN0ZXIoY29tcG9uZW50UmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3Ryb3lUb2FzdGVyKHRvYXN0ZXI6IGFueSk6IHZvaWQge1xyXG4gICAgbGV0IHN0YWNrO1xyXG4gICAgaWYgKHRvYXN0ZXIuaW5zdGFuY2Uub3JpZW50YXRpb24gPT09IFBvVG9hc3Rlck9yaWVudGF0aW9uLlRvcCkge1xyXG4gICAgICBzdGFjayA9IHRoaXMuc3RhY2tUb3A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGFjayA9IHRoaXMuc3RhY2tCb3R0b207XHJcbiAgICB9XHJcblxyXG4gICAgdG9hc3Rlci5pbnN0YW5jZS5zZXRGYWRlT3V0KCk7XHJcbiAgICBjb25zdCBpbmRleCA9IHN0YWNrLmluZGV4T2YodG9hc3Rlcik7XHJcbiAgICBzdGFjay5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvQ29tcG9uZW50SW5qZWN0b3IuZGVzdHJveUNvbXBvbmVudEluQXBwbGljYXRpb24odG9hc3Rlcik7XHJcbiAgICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzdGFjay5sZW5ndGg7IGNvdW50KyspIHtcclxuICAgICAgICBzdGFja1tjb3VudF0uaW5zdGFuY2UuY2hhbmdlUG9zaXRpb24oY291bnQpO1xyXG4gICAgICB9XHJcbiAgICB9LCBQb05vdGlmaWNhdGlvbkZhZGVUaW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb2JzZXJ2YWJsZU9uQ2xvc2UoY29tcG9uZW50UmVmOiBhbnkpIHtcclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vYnNlcnZhYmxlT25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlc3Ryb3lUb2FzdGVyKGNvbXBvbmVudFJlZik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5TGltaXRUb2FzdGVyKHN0YWNrOiBBcnJheTxhbnk+KSB7XHJcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gUG9Ob3RpZmljYXRpb25NYXhMZW5ndGgpIHtcclxuICAgICAgdGhpcy5kZXN0cm95VG9hc3RlcihzdGFja1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==