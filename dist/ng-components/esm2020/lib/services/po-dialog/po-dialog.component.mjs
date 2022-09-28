import { Component, ViewChild } from '@angular/core';
import { poLocaleDefault } from '../po-language/po-language.constant';
import { PoDialogType } from './po-dialog.enum';
import { PoModalComponent } from '../../components/po-modal/po-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../po-language/po-language.service";
import * as i2 from "../../components/po-modal/po-modal.component";
export const poDialogAlertLiteralsDefault = {
    en: { ok: 'Ok' },
    es: { ok: 'Ok' },
    pt: { ok: 'Ok' },
    ru: { ok: 'Ок' }
};
export const poDialogConfirmLiteralsDefault = {
    en: { cancel: 'Cancel', confirm: 'Confirm' },
    es: { cancel: 'Cancelar', confirm: 'Confirmar' },
    pt: { cancel: 'Cancelar', confirm: 'Confirmar' },
    ru: { cancel: 'отменить', confirm: 'подтвердить' }
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que serve como container do po-dialog.service
 */
export class PoDialogComponent {
    constructor(languageService) {
        // Objeto primary do poModal
        this.primaryAction = { label: 'ok', action: () => { } };
        this.language = languageService.getShortLanguage();
    }
    ngOnDestroy() {
        this.closeSubscription.unsubscribe();
    }
    ngOnInit() {
        this.closeSubscription = this.poModal.onXClosed.subscribe(close => this.close(true));
    }
    // Fecha o poModal
    close(xClosed = false) {
        if (xClosed && this.closeAction) {
            this.closeAction();
        }
        this.poModal.close();
        this.destroy();
    }
    destroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    // Insere os valores recebidos de this.open para o poModal
    configDialog(primaryLabel, primaryAction, secondaryLabel, secondaryAction, closeAction) {
        this.primaryAction = {
            label: primaryLabel,
            action: () => {
                if (primaryAction) {
                    primaryAction();
                }
                this.close();
            }
        };
        if (secondaryLabel) {
            this.secondaryAction = {
                label: secondaryLabel,
                action: () => {
                    if (secondaryAction) {
                        secondaryAction();
                    }
                    this.close();
                }
            };
        }
        this.closeAction = closeAction;
    }
    // Insere os valores recebidos de po-dialog.service de acordo com o tipo de diálago solicitado
    open(dialogOptions, dialogType, componentRef) {
        this.title = dialogOptions.title;
        this.message = dialogOptions.message;
        this.componentRef = componentRef;
        this.setDialogLiterals(dialogOptions, dialogType);
        switch (dialogType) {
            case PoDialogType.Confirm: {
                this.configDialog(this.literalsConfirm.confirm, dialogOptions.confirm, this.literalsConfirm.cancel, dialogOptions.cancel, dialogOptions.close);
                break;
            }
            case PoDialogType.Alert: {
                this.configDialog(this.literalsAlert.ok, dialogOptions.ok);
                break;
            }
        }
        this.poModal.open();
    }
    setDialogLiterals(dialogOptions, dialogType) {
        const alertLiterals = poDialogAlertLiteralsDefault;
        const confirmLiterals = poDialogConfirmLiteralsDefault;
        const literals = dialogOptions.literals;
        if (dialogType === PoDialogType.Alert) {
            this.literalsAlert = { ...alertLiterals[poLocaleDefault], ...alertLiterals[this.language], ...literals };
        }
        else {
            this.literalsConfirm = {
                ...confirmLiterals[poLocaleDefault],
                ...confirmLiterals[this.language],
                ...literals
            };
        }
    }
}
PoDialogComponent.ɵfac = function PoDialogComponent_Factory(t) { return new (t || PoDialogComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoDialogComponent, selectors: [["ng-component"]], viewQuery: function PoDialogComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PoModalComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.poModal = _t.first);
    } }, decls: 2, vars: 4, consts: [[3, "p-title", "p-primary-action", "p-secondary-action"], [3, "innerHtml"]], template: function PoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-modal", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("p-title", ctx.title)("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.message, i0.ɵɵsanitizeHtml);
    } }, dependencies: [i2.PoModalComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDialogComponent, [{
        type: Component,
        args: [{ template: "<po-modal [p-title]=\"title\" [p-primary-action]=\"primaryAction\" [p-secondary-action]=\"secondaryAction\">\r\n  <div [innerHtml]=\"message\"></div>\r\n</po-modal>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { poModal: [{
            type: ViewChild,
            args: [PoModalComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvc2VydmljZXMvcG8tZGlhbG9nL3BvLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWRpYWxvZy9wby1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXRGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU90RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFFaEYsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUc7SUFDMUMsRUFBRSxFQUF5QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7SUFDdkMsRUFBRSxFQUF5QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7SUFDdkMsRUFBRSxFQUF5QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7SUFDdkMsRUFBRSxFQUF5QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7Q0FDeEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHO0lBQzVDLEVBQUUsRUFBMkIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7SUFDckUsRUFBRSxFQUEyQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtJQUN6RSxFQUFFLEVBQTJCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0lBQ3pFLEVBQUUsRUFBMkIsRUFBRSxN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QUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQXlCLGFBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkYsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxhQUE0RCxFQUFFLFVBQXdCO1FBQzlHLE1BQU0sYUFBYSxHQUFHLDRCQUE0QixDQUFDO1FBQ25ELE1BQU0sZUFBZSxHQUFHLDhCQUE4QixDQUFDO1FBQ3ZELE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFFeEMsSUFBSSxVQUFVLEtBQUssWUFBWSxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7U0FDMUc7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUc7Z0JBQ3JCLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQztnQkFDbkMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakMsR0FBRyxRQUFRO2FBQ1osQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7a0ZBcElVLGlCQUFpQjtvRUFBakIsaUJBQWlCO3VCQUVqQixnQkFBZ0I7Ozs7O1FDMUM3QixtQ0FBc0c7UUFDcEcseUJBQWlDO1FBQ25DLGlCQUFXOztRQUZELG1DQUFpQix1Q0FBQSwyQ0FBQTtRQUNwQixlQUFxQjtRQUFyQiwwREFBcUI7O3VGRHVDZixpQkFBaUI7Y0FIN0IsU0FBUzs7b0VBS3VDLE9BQU87a0JBQXJELFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5cclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvRGlhbG9nQWxlcnRMaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1kaWFsb2ctYWxlcnQtbGl0ZXJhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9EaWFsb2dBbGVydE9wdGlvbnMsIFBvRGlhbG9nQ29uZmlybU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tZGlhbG9nLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRGlhbG9nQ29uZmlybUxpdGVyYWxzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWRpYWxvZy1jb25maXJtLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRGlhbG9nVHlwZSB9IGZyb20gJy4vcG8tZGlhbG9nLmVudW0nO1xyXG5pbXBvcnQgeyBQb01vZGFsQWN0aW9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wby1tb2RhbC9wby1tb2RhbC1hY3Rpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG8tbW9kYWwvcG8tbW9kYWwuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBwb0RpYWxvZ0FsZXJ0TGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9EaWFsb2dBbGVydExpdGVyYWxzPnsgb2s6ICdPaycgfSxcclxuICBlczogPFBvRGlhbG9nQWxlcnRMaXRlcmFscz57IG9rOiAnT2snIH0sXHJcbiAgcHQ6IDxQb0RpYWxvZ0FsZXJ0TGl0ZXJhbHM+eyBvazogJ09rJyB9LFxyXG4gIHJ1OiA8UG9EaWFsb2dBbGVydExpdGVyYWxzPnsgb2s6ICfQntC6JyB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9EaWFsb2dDb25maXJtTGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9EaWFsb2dDb25maXJtTGl0ZXJhbHM+eyBjYW5jZWw6ICdDYW5jZWwnLCBjb25maXJtOiAnQ29uZmlybScgfSxcclxuICBlczogPFBvRGlhbG9nQ29uZmlybUxpdGVyYWxzPnsgY2FuY2VsOiAnQ2FuY2VsYXInLCBjb25maXJtOiAnQ29uZmlybWFyJyB9LFxyXG4gIHB0OiA8UG9EaWFsb2dDb25maXJtTGl0ZXJhbHM+eyBjYW5jZWw6ICdDYW5jZWxhcicsIGNvbmZpcm06ICdDb25maXJtYXInIH0sXHJcbiAgcnU6IDxQb0RpYWxvZ0NvbmZpcm1MaXRlcmFscz57IGNhbmNlbDogJ9C+0YLQvNC10L3QuNGC0YwnLCBjb25maXJtOiAn0L/QvtC00YLQstC10YDQtNC40YLRjCcgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSBxdWUgc2VydmUgY29tbyBjb250YWluZXIgZG8gcG8tZGlhbG9nLnNlcnZpY2VcclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgLy8gVmlld0NoaWxkIHBhcmEgbyB1c28gZG8gcG8tbW9kYWwuY29tcG9uZW50XHJcbiAgQFZpZXdDaGlsZChQb01vZGFsQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb01vZGFsOiBQb01vZGFsQ29tcG9uZW50O1xyXG5cclxuICAvLyBUaXRsZSBkbyBwb01vZGFsXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLy8gTWVzc2FnZSBkbyBwb01vZGFsXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAvLyBPYmpldG8gcHJpbWFyeSBkbyBwb01vZGFsXHJcbiAgcHJpbWFyeUFjdGlvbjogUG9Nb2RhbEFjdGlvbiA9IHsgbGFiZWw6ICdvaycsIGFjdGlvbjogKCkgPT4ge30gfTtcclxuXHJcbiAgLy8gT2JqZXRvIHNlY29uZGFyeSBkbyBwb01vZGFsXHJcbiAgc2Vjb25kYXJ5QWN0aW9uOiBQb01vZGFsQWN0aW9uO1xyXG5cclxuICAvLyBDYWxsYmFjayBleGVjdXRhZG8gYW8gZmVjaGFyIG8gcG9Nb2RhbFxyXG4gIGNsb3NlQWN0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgLy8gTGl0ZXJhaXMgdXNhZGFzIG5vcyBib3TDo28gZGUgYWxlcnRhIGRvIHBvTW9kYWxcclxuICBsaXRlcmFsc0FsZXJ0OiBQb0RpYWxvZ0FsZXJ0TGl0ZXJhbHM7XHJcblxyXG4gIC8vIExpdGVyYWlzIHVzYWRhcyBub3MgYm90w7VlcyBkZSBjb25maXJtYcOnw6NvIGRvIHBvTW9kYWxcclxuICBsaXRlcmFsc0NvbmZpcm06IFBvRGlhbG9nQ29uZmlybUxpdGVyYWxzO1xyXG5cclxuICAvLyBBdHJpYnV0byBwYXJhIGFybWF6ZW5hciBhIHJlZmVyZW5jaWEgZG8gY29tcG9uZW50ZSBjcmlhZG8gdmlhIHNlcnZpw6dvLlxyXG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8UG9EaWFsb2dDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgY2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLnBvTW9kYWwub25YQ2xvc2VkLnN1YnNjcmliZShjbG9zZSA9PiB0aGlzLmNsb3NlKHRydWUpKTtcclxuICB9XHJcblxyXG4gIC8vIEZlY2hhIG8gcG9Nb2RhbFxyXG4gIGNsb3NlKHhDbG9zZWQgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKHhDbG9zZWQgJiYgdGhpcy5jbG9zZUFjdGlvbikge1xyXG4gICAgICB0aGlzLmNsb3NlQWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wb01vZGFsLmNsb3NlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5zZXJlIG9zIHZhbG9yZXMgcmVjZWJpZG9zIGRlIHRoaXMub3BlbiBwYXJhIG8gcG9Nb2RhbFxyXG4gIGNvbmZpZ0RpYWxvZyhwcmltYXJ5TGFiZWw/LCBwcmltYXJ5QWN0aW9uPywgc2Vjb25kYXJ5TGFiZWw/LCBzZWNvbmRhcnlBY3Rpb24/LCBjbG9zZUFjdGlvbj8pIHtcclxuICAgIHRoaXMucHJpbWFyeUFjdGlvbiA9IHtcclxuICAgICAgbGFiZWw6IHByaW1hcnlMYWJlbCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByaW1hcnlBY3Rpb24pIHtcclxuICAgICAgICAgIHByaW1hcnlBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzZWNvbmRhcnlMYWJlbCkge1xyXG4gICAgICB0aGlzLnNlY29uZGFyeUFjdGlvbiA9IHtcclxuICAgICAgICBsYWJlbDogc2Vjb25kYXJ5TGFiZWwsXHJcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2Vjb25kYXJ5QWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsb3NlQWN0aW9uID0gY2xvc2VBY3Rpb247XHJcbiAgfVxyXG5cclxuICAvLyBJbnNlcmUgb3MgdmFsb3JlcyByZWNlYmlkb3MgZGUgcG8tZGlhbG9nLnNlcnZpY2UgZGUgYWNvcmRvIGNvbSBvIHRpcG8gZGUgZGnDoWxhZ28gc29saWNpdGFkb1xyXG4gIG9wZW4oXHJcbiAgICBkaWFsb2dPcHRpb25zOiBQb0RpYWxvZ0NvbmZpcm1PcHRpb25zIHwgUG9EaWFsb2dBbGVydE9wdGlvbnMsXHJcbiAgICBkaWFsb2dUeXBlOiBQb0RpYWxvZ1R5cGUsXHJcbiAgICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8UG9EaWFsb2dDb21wb25lbnQ+XHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGlhbG9nT3B0aW9ucy50aXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRpYWxvZ09wdGlvbnMubWVzc2FnZTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcclxuXHJcbiAgICB0aGlzLnNldERpYWxvZ0xpdGVyYWxzKGRpYWxvZ09wdGlvbnMsIGRpYWxvZ1R5cGUpO1xyXG5cclxuICAgIHN3aXRjaCAoZGlhbG9nVHlwZSkge1xyXG4gICAgICBjYXNlIFBvRGlhbG9nVHlwZS5Db25maXJtOiB7XHJcbiAgICAgICAgdGhpcy5jb25maWdEaWFsb2coXHJcbiAgICAgICAgICB0aGlzLmxpdGVyYWxzQ29uZmlybS5jb25maXJtLFxyXG4gICAgICAgICAgKDxQb0RpYWxvZ0NvbmZpcm1PcHRpb25zPmRpYWxvZ09wdGlvbnMpLmNvbmZpcm0sXHJcbiAgICAgICAgICB0aGlzLmxpdGVyYWxzQ29uZmlybS5jYW5jZWwsXHJcbiAgICAgICAgICAoPFBvRGlhbG9nQ29uZmlybU9wdGlvbnM+ZGlhbG9nT3B0aW9ucykuY2FuY2VsLFxyXG4gICAgICAgICAgKDxQb0RpYWxvZ0NvbmZpcm1PcHRpb25zPmRpYWxvZ09wdGlvbnMpLmNsb3NlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFBvRGlhbG9nVHlwZS5BbGVydDoge1xyXG4gICAgICAgIHRoaXMuY29uZmlnRGlhbG9nKHRoaXMubGl0ZXJhbHNBbGVydC5vaywgKDxQb0RpYWxvZ0FsZXJ0T3B0aW9ucz5kaWFsb2dPcHRpb25zKS5vayk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBvTW9kYWwub3BlbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREaWFsb2dMaXRlcmFscyhkaWFsb2dPcHRpb25zOiBQb0RpYWxvZ0NvbmZpcm1PcHRpb25zIHwgUG9EaWFsb2dBbGVydE9wdGlvbnMsIGRpYWxvZ1R5cGU6IFBvRGlhbG9nVHlwZSkge1xyXG4gICAgY29uc3QgYWxlcnRMaXRlcmFscyA9IHBvRGlhbG9nQWxlcnRMaXRlcmFsc0RlZmF1bHQ7XHJcbiAgICBjb25zdCBjb25maXJtTGl0ZXJhbHMgPSBwb0RpYWxvZ0NvbmZpcm1MaXRlcmFsc0RlZmF1bHQ7XHJcbiAgICBjb25zdCBsaXRlcmFscyA9IGRpYWxvZ09wdGlvbnMubGl0ZXJhbHM7XHJcblxyXG4gICAgaWYgKGRpYWxvZ1R5cGUgPT09IFBvRGlhbG9nVHlwZS5BbGVydCkge1xyXG4gICAgICB0aGlzLmxpdGVyYWxzQWxlcnQgPSB7IC4uLmFsZXJ0TGl0ZXJhbHNbcG9Mb2NhbGVEZWZhdWx0XSwgLi4uYWxlcnRMaXRlcmFsc1t0aGlzLmxhbmd1YWdlXSwgLi4ubGl0ZXJhbHMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGl0ZXJhbHNDb25maXJtID0ge1xyXG4gICAgICAgIC4uLmNvbmZpcm1MaXRlcmFsc1twb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLmNvbmZpcm1MaXRlcmFsc1t0aGlzLmxhbmd1YWdlXSxcclxuICAgICAgICAuLi5saXRlcmFsc1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8cG8tbW9kYWwgW3AtdGl0bGVdPVwidGl0bGVcIiBbcC1wcmltYXJ5LWFjdGlvbl09XCJwcmltYXJ5QWN0aW9uXCIgW3Atc2Vjb25kYXJ5LWFjdGlvbl09XCJzZWNvbmRhcnlBY3Rpb25cIj5cclxuICA8ZGl2IFtpbm5lckh0bWxdPVwibWVzc2FnZVwiPjwvZGl2PlxyXG48L3BvLW1vZGFsPlxyXG4iXX0=