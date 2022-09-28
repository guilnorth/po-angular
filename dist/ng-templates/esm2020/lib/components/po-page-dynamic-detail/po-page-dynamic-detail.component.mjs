import { Component, Input } from '@angular/core';
import { concat, EMPTY, throwError, of } from 'rxjs';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
import { poLocaleDefault } from '@po-ui/ng-components';
import { convertToBoolean, mapObjectByProperties, valuesFromObject } from '../../utils/util';
import { PoPageDynamicService } from '../../services/po-page-dynamic/po-page-dynamic.service';
import { PoPageDynamicDetailActionsService } from './po-page-dynamic-detail-actions.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@po-ui/ng-components";
import * as i3 from "../../services/po-page-dynamic/po-page-dynamic.service";
import * as i4 from "./po-page-dynamic-detail-actions.service";
import * as i5 from "./../../services/po-page-customization/po-page-customization.service";
import * as i6 from "@angular/common";
function PoPageDynamicDetailComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageDynamicDetailComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "po-widget");
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.literals.registerNotFound, " ");
} }
function PoPageDynamicDetailComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-dynamic-view", 6);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-fields", ctx_r4.fields)("p-value", ctx_r4.model);
} }
export const poPageDynamicDetailLiteralsDefault = {
    en: {
        pageActionEdit: 'Edit',
        pageActionRemove: 'Delete',
        pageActionBack: 'Back',
        confirmRemoveTitle: 'Confirm delete',
        confirmRemoveMessage: 'Are you sure you want to delete this record? You can not undo this action.',
        removeNotificationSuccess: 'Item deleted successfully.',
        registerNotFound: 'Register not found.'
    },
    es: {
        pageActionEdit: 'Editar',
        pageActionRemove: 'Borrar',
        pageActionBack: 'Regreso',
        confirmRemoveTitle: 'Confirmar la exclusión',
        confirmRemoveMessage: '¿Está seguro de que desea eliminar este registro? No puede deshacer esta acción.',
        removeNotificationSuccess: 'Elemento eliminado con éxito.',
        registerNotFound: 'Registro no encontrado.'
    },
    pt: {
        pageActionEdit: 'Editar',
        pageActionRemove: 'Excluir',
        pageActionBack: 'Voltar',
        confirmRemoveTitle: 'Confirmar exclusão',
        confirmRemoveMessage: 'Tem certeza de que deseja excluir esse registro? Você não poderá desfazer essa ação.',
        removeNotificationSuccess: 'Item excluído com sucesso.',
        registerNotFound: 'Registro não encontrado.'
    },
    ru: {
        pageActionEdit: 'Редактировать',
        pageActionRemove: 'Удалить',
        pageActionBack: 'Назад',
        confirmRemoveTitle: 'Подтверждение удаления',
        confirmRemoveMessage: 'Вы уверены, что хотите удалить эту запись?  Вы не можете отменить это действие.',
        removeNotificationSuccess: 'Элемент успешно удален.',
        registerNotFound: 'Запись не найдена.'
    }
};
/**
 * @description
 *
 * O `po-page-dynamic-detail` é uma página que serve para exibir registros em detalhes,
 * o mesmo também suporta metadados conforme especificado na documentação.
 *
 *
 * ### Utilização via rota
 *
 * Ao utilizar as rotas para carregar o template, o `page-dynamic-detail` disponibiliza propriedades para
 * poder especificar o endpoint dos dados e dos metadados. Exemplo de utilização:
 *
 * O componente primeiro irá carregar o metadado da rota definida na propriedade serviceMetadataApi
 * e depois irá buscar da rota definida na propriedade serviceLoadApi.
 *
 * > Caso o servidor retornar um erro ao recuperar o metadados, será repassado o metadados salvo em cache,
 * se o cache não existe será disparado uma notificação.
 *
 * ```
 * {
 *   path: 'people/:id',
 *   component: PoPageDynamicDetailComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados
 *   }
 * }
 * ```
 *
 * A requisição dos metadados é feita na inicialização do template para buscar os metadados da página passando o
 * tipo do metadado esperado e a versão cacheada pelo browser.
 *
 * O formato esperado na resposta da requisição está especificado na interface
 * [PoPageDynamicDetailMetadata](/documentation/po-page-dynamic-detail#po-page-dynamic-detail-metadata). Por exemplo:
 *
 * ```
 *  {
 *   version: 1,
 *   title: 'Person Detail',
 *   fields: [
 *     { property: 'id', key: true, disabled: true },
 *     { property: 'status' },
 *     { property: 'name' },
 *     { property: 'nickname' },
 *     { property: 'birthdate', label: 'Birth date' },
 *     { property: 'genre' },
 *     { property: 'city' },
 *     { property: 'country' }
 *   ]
 * }
 * ```
 *
 * > Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `serviceApi` da seguinte forma:
 * ```
 * GET {end-point}/metadata?type=detail&version={version}
 * ```
 *
 * @example
 *
 * <example name="po-page-dynamic-detail-user" title="PO Page Dynamic Detail User">
 *  <file name="sample-po-page-dynamic-detail-user/sample-po-page-dynamic-detail-user.component.html"> </file>
 *  <file name="sample-po-page-dynamic-detail-user/sample-po-page-dynamic-detail-user.component.ts"> </file>
 * </example>
 */
export class PoPageDynamicDetailComponent {
    constructor(router, activatedRoute, poNotification, poDialogService, poPageDynamicService, poPageDynamicDetailActionsService, poPageCustomizationService, languageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poNotification = poNotification;
        this.poDialogService = poDialogService;
        this.poPageDynamicService = poPageDynamicService;
        this.poPageDynamicDetailActionsService = poPageDynamicDetailActionsService;
        this.poPageCustomizationService = poPageCustomizationService;
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        this.model = {};
        this.subscriptions = [];
        this._actions = {};
        this._autoRouter = false;
        this._duplicates = [];
        this._fields = [];
        this._keys = [];
        this._pageActions = [];
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poPageDynamicDetailLiteralsDefault[poLocaleDefault],
            ...poPageDynamicDetailLiteralsDefault[language]
        };
    }
    /**
     * @optional
     *
     * @description
     *
     * Define as ações da página de acordo com a interface `PoPageDynamicDetailActions`.
     */
    set actions(value) {
        this._actions = this.isObject(value) ? value : {};
        this._pageActions = this.getPageActions(this._actions);
    }
    get actions() {
        return { ...this._actions };
    }
    /**
     * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
     *
     * @optional
     *
     * @description
     *
     * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
     * estejam definidas nas ações.
     *
     * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
     *
     * @default false
     */
    set autoRouter(value) {
        this._autoRouter = convertToBoolean(value);
    }
    get autoRouter() {
        return this._autoRouter;
    }
    /** Lista dos campos exibidos na página. */
    set fields(value) {
        this._fields = Array.isArray(value) ? [...value] : [];
        this._keys = this.getKeysByFields(this.fields);
        this._duplicates = this.getDuplicatesByFields(this.fields);
    }
    get fields() {
        return this._fields;
    }
    ngOnInit() {
        this.loadDataFromAPI();
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription => {
                subscription.unsubscribe();
            });
        }
    }
    get duplicates() {
        return [...this._duplicates];
    }
    get keys() {
        return [...this._keys];
    }
    get pageActions() {
        return [...this._pageActions];
    }
    remove(actionRemove, actionBeforeRemove) {
        const uniqueKey = this.formatUniqueKey(this.model);
        this.subscriptions.push(this.poPageDynamicDetailActionsService
            .beforeRemove(actionBeforeRemove, uniqueKey, { ...this.model })
            .pipe(switchMap((beforeRemoveResult) => {
            const newRemoveAction = beforeRemoveResult?.newUrl ?? actionRemove;
            const allowAction = beforeRemoveResult?.allowAction ?? true;
            if (!allowAction) {
                return of({});
            }
            if (typeof newRemoveAction === 'string') {
                return this.executeRemove(newRemoveAction, uniqueKey);
            }
            else {
                newRemoveAction(uniqueKey, { ...this.model });
                return EMPTY;
            }
        }))
            .subscribe());
    }
    confirmRemove(actionRemove, actionBeforeRemove) {
        const confirmOptions = {
            title: this.literals.confirmRemoveTitle,
            message: this.literals.confirmRemoveMessage,
            confirm: this.remove.bind(this, actionRemove, actionBeforeRemove)
        };
        this.poDialogService.confirm(confirmOptions);
    }
    executeRemove(path, uniqueKey) {
        return this.poPageDynamicService.deleteResource(uniqueKey).pipe(map(() => {
            this.poNotification.success(this.literals.removeNotificationSuccess);
            this.navigateTo({ path: path });
        }));
    }
    formatUniqueKey(item) {
        const keys = mapObjectByProperties(item, this.keys);
        return valuesFromObject(keys).join('|');
    }
    goBack(actionBack) {
        this.subscriptions.push(this.poPageDynamicDetailActionsService
            .beforeBack(this.actions.beforeBack)
            .subscribe((beforeBackResult) => this.executeBackAction(actionBack, beforeBackResult?.allowAction, beforeBackResult?.newUrl)));
    }
    executeBackAction(actionBack, allowAction, newUrl) {
        const isAllowedAction = typeof allowAction === 'boolean' ? allowAction : true;
        if (isAllowedAction) {
            if (actionBack === undefined || typeof actionBack === 'boolean') {
                return window.history.back();
            }
            if (typeof actionBack === 'string' || newUrl) {
                return this.router.navigate([newUrl || actionBack]);
            }
            return actionBack();
        }
    }
    loadData(id) {
        return this.poPageDynamicService.getResource(id).pipe(tap(response => {
            if (!response) {
                this.setUndefinedToModelAndActions();
            }
            else {
                this.model = response;
            }
        }), catchError(error => {
            this.setUndefinedToModelAndActions();
            return throwError(error);
        }));
    }
    setUndefinedToModelAndActions() {
        this.model = undefined;
        this.actions = undefined;
    }
    getMetadata(serviceApiFromRoute, onLoad) {
        if (serviceApiFromRoute) {
            return this.poPageDynamicService.getMetadata('detail').pipe(tap(response => {
                this.autoRouter = response.autoRouter || this.autoRouter;
                this.actions = response.actions || this.actions;
                this.breadcrumb = response.breadcrumb || this.breadcrumb;
                this.fields = response.fields || this.fields;
                this.title = response.title || this.title;
            }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
        }
        return this.loadOptionsOnInitialize(onLoad);
    }
    // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
    navigateTo(route, forceStopAutoRouter = false) {
        this.router.navigate([route.url || route.path], { queryParams: route.params }).catch(() => {
            if (forceStopAutoRouter || !this.autoRouter) {
                return;
            }
            this.router.config.unshift({
                path: route.path,
                component: route.component,
                data: { serviceApi: this.serviceApi, autoRouter: true }
            });
            this.navigateTo(route, true);
        });
    }
    openEdit(action) {
        const id = this.formatUniqueKey(this.model);
        this.subscriptions.push(this.poPageDynamicDetailActionsService
            .beforeEdit(this.actions.beforeEdit, id, this.model)
            .pipe(switchMap((beforeEditResult) => this.executeEditAction(action, beforeEditResult, id)))
            .subscribe());
    }
    executeEditAction(action, beforeEditResult, id) {
        const newEditAction = beforeEditResult?.newUrl ?? action;
        const allowAction = beforeEditResult?.allowAction ?? true;
        if (!allowAction) {
            return of({});
        }
        if (typeof newEditAction === 'string') {
            this.openEditUrl(newEditAction);
        }
        else {
            newEditAction(id, { ...this.model });
        }
        return EMPTY;
    }
    openEditUrl(path) {
        const url = this.resolveUrl(this.model, path);
        this.navigateTo({ path, url });
    }
    resolveUrl(item, path) {
        const uniqueKey = this.formatUniqueKey(item);
        return path.replace(/:id/g, uniqueKey);
    }
    getPageActions(actions = {}) {
        const pageActions = [];
        if (actions.edit) {
            pageActions.push({ label: this.literals.pageActionEdit, action: this.openEdit.bind(this, actions.edit) });
        }
        if (actions.remove) {
            pageActions.push({
                label: this.literals.pageActionRemove,
                action: this.confirmRemove.bind(this, actions.remove, this.actions.beforeRemove)
            });
        }
        if (actions.back === undefined || actions.back) {
            pageActions.push({ label: this.literals.pageActionBack, action: this.goBack.bind(this, actions.back) });
        }
        return pageActions;
    }
    getKeysByFields(fields = []) {
        return fields.filter(field => field.key === true).map(field => field.property);
    }
    getDuplicatesByFields(fields = []) {
        return fields.filter(field => field.duplicate === true).map(field => field.property);
    }
    isObject(value) {
        return !!value && typeof value === 'object' && !Array.isArray(value);
    }
    loadDataFromAPI() {
        const { serviceApi: serviceApiFromRoute, serviceMetadataApi, serviceLoadApi } = this.activatedRoute.snapshot.data;
        const { id } = this.activatedRoute.snapshot.params;
        const onLoad = serviceLoadApi || this.onLoad;
        this.serviceApi = serviceApiFromRoute || this.serviceApi;
        this.poPageDynamicService.configServiceApi({ endpoint: this.serviceApi, metadata: serviceMetadataApi });
        const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
        const data$ = this.loadData(id);
        this.subscriptions.push(concat(metadata$, data$).subscribe());
    }
    loadOptionsOnInitialize(onLoad) {
        if (onLoad) {
            return this.getPoDynamicPageOptions(onLoad).pipe(tap(responsePoOption => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
        }
        return EMPTY;
    }
    getPoDynamicPageOptions(onLoad) {
        const originalOption = {
            fields: this.fields,
            actions: this.actions,
            breadcrumb: this.breadcrumb,
            title: this.title
        };
        const pageOptionSchema = {
            schema: [
                {
                    nameProp: 'fields',
                    merge: true,
                    keyForMerge: 'property'
                },
                {
                    nameProp: 'actions',
                    merge: true
                },
                {
                    nameProp: 'breadcrumb'
                },
                {
                    nameProp: 'title'
                }
            ]
        };
        return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
    }
}
PoPageDynamicDetailComponent.ɵfac = function PoPageDynamicDetailComponent_Factory(t) { return new (t || PoPageDynamicDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(i3.PoPageDynamicService), i0.ɵɵdirectiveInject(i4.PoPageDynamicDetailActionsService), i0.ɵɵdirectiveInject(i5.PoPageCustomizationService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicDetailComponent, selectors: [["po-page-dynamic-detail"]], inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], onLoad: ["p-load", "onLoad"], title: ["p-title", "title"], serviceApi: ["p-service-api", "serviceApi"], actions: ["p-actions", "actions"], autoRouter: ["p-auto-router", "autoRouter"], fields: ["p-fields", "fields"] }, features: [i0.ɵɵProvidersFeature([PoPageDynamicService, PoPageDynamicDetailActionsService])], decls: 6, vars: 6, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["registerNotFoundTemplate", ""], ["viewFieldsTemplate", ""], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], [3, "p-fields", "p-value"]], template: function PoPageDynamicDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-page-default", 0);
        i0.ɵɵtemplate(1, PoPageDynamicDetailComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoPageDynamicDetailComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PoPageDynamicDetailComponent_ng_template_4_Template, 1, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.model)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, dependencies: [i6.NgIf, i2.PoDynamicViewComponent, i2.PoPageDefaultComponent, i2.PoWidgetComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicDetailComponent, [{
        type: Component,
        args: [{ selector: 'po-page-dynamic-detail', providers: [PoPageDynamicService, PoPageDynamicDetailActionsService], template: "<po-page-default [p-actions]=\"pageActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <ng-container *ngIf=\"model; then viewFieldsTemplate; else registerNotFoundTemplate\"> </ng-container>\r\n</po-page-default>\r\n\r\n<ng-template #registerNotFoundTemplate>\r\n  <po-widget>\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.registerNotFound }}\r\n    </span>\r\n  </po-widget>\r\n</ng-template>\r\n\r\n<ng-template #viewFieldsTemplate>\r\n  <po-dynamic-view [p-fields]=\"fields\" [p-value]=\"model\"> </po-dynamic-view>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.PoNotificationService }, { type: i2.PoDialogService }, { type: i3.PoPageDynamicService }, { type: i4.PoPageDynamicDetailActionsService }, { type: i5.PoPageCustomizationService }, { type: i2.PoLanguageService }]; }, { breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], onLoad: [{
            type: Input,
            args: ['p-load']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], serviceApi: [{
            type: Input,
            args: ['p-service-api']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], autoRouter: [{
            type: Input,
            args: ['p-auto-router']
        }], fields: [{
            type: Input,
            args: ['p-fields']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwvcG8tcGFnZS1keW5hbWljLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwvcG8tcGFnZS1keW5hbWljLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFnQixNQUFNLEVBQUUsS0FBSyxFQUFjLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFPTCxlQUFlLEVBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7OztJQ3BCM0Ysd0JBQW9HOzs7SUFJcEcsaUNBQVc7SUFDVCwwQkFBMEM7SUFDMUMsK0JBQWlDO0lBQy9CLFlBQ0Y7SUFBQSxpQkFBTyxFQUFBOzs7SUFETCxlQUNGO0lBREUsaUVBQ0Y7OztJQUtGLHFDQUEwRTs7O0lBQXpELHdDQUFtQix5QkFBQTs7QURrQnRDLE1B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OUIsS0FBSzttQkFBQyxXQUFXO1lBd0JVLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQVNDLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgY29uY2F0LCBFTVBUWSwgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUG9CcmVhZGNydW1iLFxyXG4gIFBvRGlhbG9nQ29uZmlybU9wdGlvbnMsXHJcbiAgUG9EaWFsb2dTZXJ2aWNlLFxyXG4gIFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gIFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICBQb1BhZ2VBY3Rpb24sXHJcbiAgcG9Mb2NhbGVEZWZhdWx0XHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgbWFwT2JqZWN0QnlQcm9wZXJ0aWVzLCB2YWx1ZXNGcm9tT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtZGV0YWlsLWFjdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbEZpZWxkIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwtZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWR5bmFtaWMvcG8tcGFnZS1keW5hbWljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwtYWN0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWRldGFpbC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWN1c3RvbWl6YXRpb24vcG8tcGFnZS1jdXN0b21pemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljT3B0aW9uc1NjaGVtYSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcG8tcGFnZS1jdXN0b21pemF0aW9uL3BvLXBhZ2UtZHluYW1pYy1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNEZXRhaWxNZXRhRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtZGV0YWlsLW1ldGFkYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNEZXRhaWxCZWZvcmVCYWNrIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwtYmVmb3JlLWJhY2suaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbEJlZm9yZVJlbW92ZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWR5bmFtaWMtZGV0YWlsLWJlZm9yZS1yZW1vdmUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0RldGFpbEJlZm9yZUVkaXQgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWRldGFpbC1iZWZvcmUtZWRpdC5pbnRlcmZhY2UnO1xyXG5cclxudHlwZSBVcmxPclBvQ3VzdG9taXphdGlvbkZ1bmN0aW9uID0gc3RyaW5nIHwgKCgpID0+IFBvUGFnZUR5bmFtaWNEZXRhaWxPcHRpb25zKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb1BhZ2VEeW5hbWljRGV0YWlsTGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiB7XHJcbiAgICBwYWdlQWN0aW9uRWRpdDogJ0VkaXQnLFxyXG4gICAgcGFnZUFjdGlvblJlbW92ZTogJ0RlbGV0ZScsXHJcbiAgICBwYWdlQWN0aW9uQmFjazogJ0JhY2snLFxyXG4gICAgY29uZmlybVJlbW92ZVRpdGxlOiAnQ29uZmlybSBkZWxldGUnLFxyXG4gICAgY29uZmlybVJlbW92ZU1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPyBZb3UgY2FuIG5vdCB1bmRvIHRoaXMgYWN0aW9uLicsXHJcbiAgICByZW1vdmVOb3RpZmljYXRpb25TdWNjZXNzOiAnSXRlbSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgcmVnaXN0ZXJOb3RGb3VuZDogJ1JlZ2lzdGVyIG5vdCBmb3VuZC4nXHJcbiAgfSxcclxuICBlczoge1xyXG4gICAgcGFnZUFjdGlvbkVkaXQ6ICdFZGl0YXInLFxyXG4gICAgcGFnZUFjdGlvblJlbW92ZTogJ0JvcnJhcicsXHJcbiAgICBwYWdlQWN0aW9uQmFjazogJ1JlZ3Jlc28nLFxyXG4gICAgY29uZmlybVJlbW92ZVRpdGxlOiAnQ29uZmlybWFyIGxhIGV4Y2x1c2nDs24nLFxyXG4gICAgY29uZmlybVJlbW92ZU1lc3NhZ2U6ICfCv0VzdMOhIHNlZ3VybyBkZSBxdWUgZGVzZWEgZWxpbWluYXIgZXN0ZSByZWdpc3Rybz8gTm8gcHVlZGUgZGVzaGFjZXIgZXN0YSBhY2Npw7NuLicsXHJcbiAgICByZW1vdmVOb3RpZmljYXRpb25TdWNjZXNzOiAnRWxlbWVudG8gZWxpbWluYWRvIGNvbiDDqXhpdG8uJyxcclxuICAgIHJlZ2lzdGVyTm90Rm91bmQ6ICdSZWdpc3RybyBubyBlbmNvbnRyYWRvLidcclxuICB9LFxyXG4gIHB0OiB7XHJcbiAgICBwYWdlQWN0aW9uRWRpdDogJ0VkaXRhcicsXHJcbiAgICBwYWdlQWN0aW9uUmVtb3ZlOiAnRXhjbHVpcicsXHJcbiAgICBwYWdlQWN0aW9uQmFjazogJ1ZvbHRhcicsXHJcbiAgICBjb25maXJtUmVtb3ZlVGl0bGU6ICdDb25maXJtYXIgZXhjbHVzw6NvJyxcclxuICAgIGNvbmZpcm1SZW1vdmVNZXNzYWdlOiAnVGVtIGNlcnRlemEgZGUgcXVlIGRlc2VqYSBleGNsdWlyIGVzc2UgcmVnaXN0cm8/IFZvY8OqIG7Do28gcG9kZXLDoSBkZXNmYXplciBlc3NhIGHDp8Ojby4nLFxyXG4gICAgcmVtb3ZlTm90aWZpY2F0aW9uU3VjY2VzczogJ0l0ZW0gZXhjbHXDrWRvIGNvbSBzdWNlc3NvLicsXHJcbiAgICByZWdpc3Rlck5vdEZvdW5kOiAnUmVnaXN0cm8gbsOjbyBlbmNvbnRyYWRvLidcclxuICB9LFxyXG4gIHJ1OiB7XHJcbiAgICBwYWdlQWN0aW9uRWRpdDogJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMJyxcclxuICAgIHBhZ2VBY3Rpb25SZW1vdmU6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICBwYWdlQWN0aW9uQmFjazogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgY29uZmlybVJlbW92ZVRpdGxlOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0YPQtNCw0LvQtdC90LjRjycsXHJcbiAgICBjb25maXJtUmVtb3ZlTWVzc2FnZTogJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0Y3RgtGDINC30LDQv9C40YHRjD8gINCS0Ysg0L3QtSDQvNC+0LbQtdGC0LUg0L7RgtC80LXQvdC40YLRjCDRjdGC0L4g0LTQtdC50YHRgtCy0LjQtS4nLFxyXG4gICAgcmVtb3ZlTm90aWZpY2F0aW9uU3VjY2VzczogJ9Ct0LvQtdC80LXQvdGCINGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvS4nLFxyXG4gICAgcmVnaXN0ZXJOb3RGb3VuZDogJ9CX0LDQv9C40YHRjCDQvdC1INC90LDQudC00LXQvdCwLidcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gYHBvLXBhZ2UtZHluYW1pYy1kZXRhaWxgIMOpIHVtYSBww6FnaW5hIHF1ZSBzZXJ2ZSBwYXJhIGV4aWJpciByZWdpc3Ryb3MgZW0gZGV0YWxoZXMsXHJcbiAqIG8gbWVzbW8gdGFtYsOpbSBzdXBvcnRhIG1ldGFkYWRvcyBjb25mb3JtZSBlc3BlY2lmaWNhZG8gbmEgZG9jdW1lbnRhw6fDo28uXHJcbiAqXHJcbiAqXHJcbiAqICMjIyBVdGlsaXphw6fDo28gdmlhIHJvdGFcclxuICpcclxuICogQW8gdXRpbGl6YXIgYXMgcm90YXMgcGFyYSBjYXJyZWdhciBvIHRlbXBsYXRlLCBvIGBwYWdlLWR5bmFtaWMtZGV0YWlsYCBkaXNwb25pYmlsaXphIHByb3ByaWVkYWRlcyBwYXJhXHJcbiAqIHBvZGVyIGVzcGVjaWZpY2FyIG8gZW5kcG9pbnQgZG9zIGRhZG9zIGUgZG9zIG1ldGFkYWRvcy4gRXhlbXBsbyBkZSB1dGlsaXphw6fDo286XHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBwcmltZWlybyBpcsOhIGNhcnJlZ2FyIG8gbWV0YWRhZG8gZGEgcm90YSBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBzZXJ2aWNlTWV0YWRhdGFBcGlcclxuICogZSBkZXBvaXMgaXLDoSBidXNjYXIgZGEgcm90YSBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBzZXJ2aWNlTG9hZEFwaS5cclxuICpcclxuICogPiBDYXNvIG8gc2Vydmlkb3IgcmV0b3JuYXIgdW0gZXJybyBhbyByZWN1cGVyYXIgbyBtZXRhZGFkb3MsIHNlcsOhIHJlcGFzc2FkbyBvIG1ldGFkYWRvcyBzYWx2byBlbSBjYWNoZSxcclxuICogc2UgbyBjYWNoZSBuw6NvIGV4aXN0ZSBzZXLDoSBkaXNwYXJhZG8gdW1hIG5vdGlmaWNhw6fDo28uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiB7XHJcbiAqICAgcGF0aDogJ3Blb3BsZS86aWQnLFxyXG4gKiAgIGNvbXBvbmVudDogUG9QYWdlRHluYW1pY0RldGFpbENvbXBvbmVudCxcclxuICogICBkYXRhOiB7XHJcbiAqICAgICBzZXJ2aWNlQXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3YxL3Blb3BsZScsIC8vIGVuZHBvaW50IGRvcyBkYWRvc1xyXG4gKiAgICAgc2VydmljZU1ldGFkYXRhQXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3YxL21ldGFkYXRhJywgLy8gZW5kcG9pbnQgZG9zIG1ldGFkYWRvc1xyXG4gKiAgICAgc2VydmljZUxvYWRBcGk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9hZC1tZXRhZGF0YScgLy8gZW5kcG9pbnQgZGUgY3VzdG9taXphw6fDtWVzIGRvcyBtZXRhZGFkb3NcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEEgcmVxdWlzacOnw6NvIGRvcyBtZXRhZGFkb3Mgw6kgZmVpdGEgbmEgaW5pY2lhbGl6YcOnw6NvIGRvIHRlbXBsYXRlIHBhcmEgYnVzY2FyIG9zIG1ldGFkYWRvcyBkYSBww6FnaW5hIHBhc3NhbmRvIG9cclxuICogdGlwbyBkbyBtZXRhZGFkbyBlc3BlcmFkbyBlIGEgdmVyc8OjbyBjYWNoZWFkYSBwZWxvIGJyb3dzZXIuXHJcbiAqXHJcbiAqIE8gZm9ybWF0byBlc3BlcmFkbyBuYSByZXNwb3N0YSBkYSByZXF1aXNpw6fDo28gZXN0w6EgZXNwZWNpZmljYWRvIG5hIGludGVyZmFjZVxyXG4gKiBbUG9QYWdlRHluYW1pY0RldGFpbE1ldGFkYXRhXSgvZG9jdW1lbnRhdGlvbi9wby1wYWdlLWR5bmFtaWMtZGV0YWlsI3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwtbWV0YWRhdGEpLiBQb3IgZXhlbXBsbzpcclxuICpcclxuICogYGBgXHJcbiAqICB7XHJcbiAqICAgdmVyc2lvbjogMSxcclxuICogICB0aXRsZTogJ1BlcnNvbiBEZXRhaWwnLFxyXG4gKiAgIGZpZWxkczogW1xyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2lkJywga2V5OiB0cnVlLCBkaXNhYmxlZDogdHJ1ZSB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ3N0YXR1cycgfSxcclxuICogICAgIHsgcHJvcGVydHk6ICduYW1lJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ25pY2tuYW1lJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2JpcnRoZGF0ZScsIGxhYmVsOiAnQmlydGggZGF0ZScgfSxcclxuICogICAgIHsgcHJvcGVydHk6ICdnZW5yZScgfSxcclxuICogICAgIHsgcHJvcGVydHk6ICdjaXR5JyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2NvdW50cnknIH1cclxuICogICBdXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqID4gQ2FzbyBvIGVuZHBvaW50IGRvcyBtZXRhZGFkb3MgbsOjbyBzZWphIGVzcGVjaWZpY2Fkbywgc2Vyw6EgZmVpdG8gdW1hIHJlcXVpc2nDp8OjbyB1dGlsaXphbmRvIG8gYHNlcnZpY2VBcGlgIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gKiBgYGBcclxuICogR0VUIHtlbmQtcG9pbnR9L21ldGFkYXRhP3R5cGU9ZGV0YWlsJnZlcnNpb249e3ZlcnNpb259XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1keW5hbWljLWRldGFpbC11c2VyXCIgdGl0bGU9XCJQTyBQYWdlIER5bmFtaWMgRGV0YWlsIFVzZXJcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1keW5hbWljLWRldGFpbC11c2VyL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtZGV0YWlsLXVzZXIuY29tcG9uZW50Lmh0bWxcIj4gPC9maWxlPlxyXG4gKiAgPGZpbGUgbmFtZT1cInNhbXBsZS1wby1wYWdlLWR5bmFtaWMtZGV0YWlsLXVzZXIvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1kZXRhaWwtdXNlci5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLXBhZ2UtZHluYW1pYy1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1wYWdlLWR5bmFtaWMtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VEeW5hbWljU2VydmljZSwgUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlRHluYW1pY0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogT2JqZXRvIGNvbSBwcm9wcmllZGFkZXMgZG8gYnJlYWRjcnVtYi4gKi9cclxuICBASW5wdXQoJ3AtYnJlYWRjcnVtYicpIGJyZWFkY3J1bWI/OiBQb0JyZWFkY3J1bWIgPSB7IGl0ZW1zOiBbXSB9O1xyXG5cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBvdSBzZXJ2acOnbyBxdWUgc2Vyw6EgZXhlY3V0YWRvIG5hIGluaWNpYWxpemHDp8OjbyBkbyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICogQSBwcm9wcmllZGFkZSBhY2VpdGEgb3Mgc2VndWludGVzIHRpcG9zOlxyXG4gICAqIC0gYHN0cmluZ2A6ICpFbmRwb2ludCogdXNhZG8gcGVsbyBjb21wb25lbnRlIHBhcmEgcmVxdWlzacOnw6NvIHZpYSBgUE9TVGAuXHJcbiAgICogLSBgZnVuY3Rpb25gOiBNw6l0b2RvIHF1ZSBzZXLDoSBleGVjdXRhZG8uXHJcbiAgICpcclxuICAgKiBPIHJldG9ybm8gZGVzdGEgZnVuw6fDo28gZGV2ZSBzZXIgZG8gdGlwbyBgUG9QYWdlRHluYW1pY0RldGFpbE9wdGlvbnNgLFxyXG4gICAqIG9uZGUgbyB1c3XDoXJpbyBwb2RlcsOhIGN1c3RvbWl6YXIgbm92b3MgY2FtcG9zLCBicmVhZGNydW1iLCB0aXRsZSBlIGFjdGlvbnNcclxuICAgKlxyXG4gICAqIFBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogZ2V0UGFnZU9wdGlvbnMoKTogUG9QYWdlRHluYW1pY0RldGFpbE9wdGlvbnMge1xyXG4gICAqIHJldHVybiB7XHJcbiAgICogICBhY3Rpb25zOlxyXG4gICAqICAgICB7IG5ldzogJ25ldycsIGVkaXQ6ICdlZGl0LzppZCcsIHJlbW92ZTogdHJ1ZSB9LFxyXG4gICAqICAgZmllbGRzOiBbXHJcbiAgICogICAgIHsgcHJvcGVydHk6ICdpZENhcmQnLCBncmlkQ29sdW1uczogNiB9XHJcbiAgICogICBdXHJcbiAgICogfTtcclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBQYXJhIHJlZmVyZW5jaWFyIGEgc3VhIGZ1bsOnw6NvIHV0aWxpemUgYSBwcm9wcmllZGFkZSBgYmluZGAsIHBvciBleGVtcGxvOlxyXG4gICAqIGBgYFxyXG4gICAqICBbcC1sb2FkXT1cIm9uTG9hZE9wdGlvbnMuYmluZCh0aGlzKVwiXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxvYWQnKSBvbkxvYWQ6IHN0cmluZyB8ICgoKSA9PiBQb1BhZ2VEeW5hbWljRGV0YWlsT3B0aW9ucyk7XHJcblxyXG4gIC8qKiBUw610dWxvIGRhIHDDoWdpbmEuICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFbmRwb2ludCB1c2FkbyBwZWxvIHRlbXBsYXRlIHBhcmEgcmVxdWlzacOnw6NvIGRvIHJlY3Vyc28gcXVlIHNlcsOjbyBleGliaWRvLlxyXG4gICAqXHJcbiAgICogQ2FzbyBhIGHDp8OjbyBgcmVtb3ZlYCBlc3RpdmVyIGNvbmZpZ3VyYWRhLCBzZXLDoSBmZWl0byB1bWEgcmVxdWlzacOnw6NvIGRlIGV4Y2x1c8OjbyBuZXNzZSBtZXNtbyBlbmRwb2ludCBwYXNzYW5kbyBvcyBjYW1wb3NcclxuICAgKiBzZXRhZG9zIGNvbW8gYGtleTogdHJ1ZWAuXHJcbiAgICpcclxuICAgKiA+IGBERUxFVEUge2VuZC1wb2ludH0ve2tleXN9YFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIDxwby1wYWdlLWR5bmFtaWMtZGV0YWlsXHJcbiAgICogICAgW3AtYWN0aW9uc109XCJ7IHJlbW92ZTogJy8nIH1cIlxyXG4gICAqICAgIFtwLWZpZWxkc109XCJbIHsgcHJvcGVydHk6ICdpZCcsIGtleTogdHJ1ZSB9IF1cIlxyXG4gICAqICAgIHAtc2VydmljZT1cIi9hcGkvcG8tc2FtcGxlcy92MS9wZW9wbGVcIlxyXG4gICAqICAgIC4uLj5cclxuICAgKiAgPC9wby1wYWdlLWR5bmFtaWMtZGV0YWlsPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogUmVzcXVpc2nDp8OjbyBkaXNwYXJhZGEsIG9uZGUgYSBwcm9wcmllZGFkZSBgaWRgIMOpIGlndWFsIGEgMjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBERUxFVEUgL2FwaS9wby1zYW1wbGVzL3YxL3Blb3BsZS8yIEhUVFAvMS4xXHJcbiAgICogIEhvc3Q6IGxvY2FsaG9zdDo0MDAwXHJcbiAgICogIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcclxuICAgKiAgQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluXHJcbiAgICogIC4uLlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBDYXNvIGVzdGVqYSB1c2FuZG8gbWV0YWRhZG9zIGNvbSBvIHRlbXBsYXRlLCBzZXLDoSBkaXNwYXJhZG8gdW1hIHJlcXVpc2nDp8OjbyBuYSBpbmljaWFsaXphw6fDo28gZG8gdGVtcGxhdGUgcGFyYSBidXNjYXJcclxuICAgKiA+IG9zIG1ldGFkYWRvcyBkYSBww6FnaW5hIHBhc3NhbmRvIG8gdGlwbyBkbyBtZXRhZGFkbyBlc3BlcmFkbyBlIGEgdmVyc8OjbyBjYWNoZWFkYSBwZWxvIGJyb3dzZXIuXHJcbiAgICogPlxyXG4gICAqID4gYEdFVCB7ZW5kLXBvaW50fS9tZXRhZGF0YT90eXBlPWRldGFpbCZ2ZXJzaW9uPXt2ZXJzaW9ufWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2VydmljZS1hcGknKSBzZXJ2aWNlQXBpOiBzdHJpbmc7XHJcblxyXG4gIGxpdGVyYWxzO1xyXG4gIG1vZGVsOiBhbnkgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XHJcblxyXG4gIHByaXZhdGUgX2FjdGlvbnM6IFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zID0ge307XHJcbiAgcHJpdmF0ZSBfYXV0b1JvdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2R1cGxpY2F0ZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcml2YXRlIF9rZXlzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJpdmF0ZSBfcGFnZUFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBhcyBhw6fDtWVzIGRhIHDDoWdpbmEgZGUgYWNvcmRvIGNvbSBhIGludGVyZmFjZSBgUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hY3Rpb25zJykgc2V0IGFjdGlvbnModmFsdWU6IFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zKSB7XHJcbiAgICB0aGlzLl9hY3Rpb25zID0gdGhpcy5pc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IHt9O1xyXG5cclxuICAgIHRoaXMuX3BhZ2VBY3Rpb25zID0gdGhpcy5nZXRQYWdlQWN0aW9ucyh0aGlzLl9hY3Rpb25zKTtcclxuICB9XHJcblxyXG4gIGdldCBhY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHsgLi4udGhpcy5fYWN0aW9ucyB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRvZG8gVmFsaWRhciByb3RhcyBuYSBtw6NvIHBvaXMgc2UgZXhpc3RpciB1bWEgcm90YSAnKionIG8gY2F0Y2ggZG8gbmF2aWdhdGlvbiBuw6NvIGZ1bmNpb25hLlxyXG4gICAqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENyaWEgYXV0b21hdGljYW1lbnRlIGFzIHJvdGFzIGRlIGVkacOnw6NvIChub3ZvL2R1cGxpY2F0ZSkgZSBkZXRhbGhlcyBjYXNvIGFzIGHDp8O1ZXNcclxuICAgKiBlc3RlamFtIGRlZmluaWRhcyBuYXMgYcOnw7Vlcy5cclxuICAgKlxyXG4gICAqID4gUGFyYSBvIGNvcnJldG8gZnVuY2lvbmFtZW50byBuw6NvIHBvZGUgaGF2ZXIgbmVuaHVtIHJvdGEgY29yaW5nYSAoYCoqYCkgZXNwZWNpZmljYWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1yb3V0ZXInKSBzZXQgYXV0b1JvdXRlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b1JvdXRlciA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9Sb3V0ZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b1JvdXRlcjtcclxuICB9XHJcblxyXG4gIC8qKiBMaXN0YSBkb3MgY2FtcG9zIGV4aWJpZG9zIG5hIHDDoWdpbmEuICovXHJcbiAgQElucHV0KCdwLWZpZWxkcycpIHNldCBmaWVsZHModmFsdWU6IEFycmF5PFBvUGFnZUR5bmFtaWNEZXRhaWxGaWVsZD4pIHtcclxuICAgIHRoaXMuX2ZpZWxkcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gWy4uLnZhbHVlXSA6IFtdO1xyXG5cclxuICAgIHRoaXMuX2tleXMgPSB0aGlzLmdldEtleXNCeUZpZWxkcyh0aGlzLmZpZWxkcyk7XHJcbiAgICB0aGlzLl9kdXBsaWNhdGVzID0gdGhpcy5nZXREdXBsaWNhdGVzQnlGaWVsZHModGhpcy5maWVsZHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkcygpOiBBcnJheTxQb1BhZ2VEeW5hbWljRGV0YWlsRmllbGQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9maWVsZHM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcG9Ob3RpZmljYXRpb246IFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9EaWFsb2dTZXJ2aWNlOiBQb0RpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvUGFnZUR5bmFtaWNTZXJ2aWNlOiBQb1BhZ2VEeW5hbWljU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNTZXJ2aWNlOiBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlOiBQb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICB0aGlzLmxpdGVyYWxzID0ge1xyXG4gICAgICAuLi5wb1BhZ2VEeW5hbWljRGV0YWlsTGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgIC4uLnBvUGFnZUR5bmFtaWNEZXRhaWxMaXRlcmFsc0RlZmF1bHRbbGFuZ3VhZ2VdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWREYXRhRnJvbUFQSSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiB7XHJcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGR1cGxpY2F0ZXMoKSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX2R1cGxpY2F0ZXNdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGtleXMoKSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX2tleXNdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VBY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLl9wYWdlQWN0aW9uc107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZShcclxuICAgIGFjdGlvblJlbW92ZTogUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNbJ3JlbW92ZSddLFxyXG4gICAgYWN0aW9uQmVmb3JlUmVtb3ZlPzogUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNbJ2JlZm9yZVJlbW92ZSddXHJcbiAgKSB7XHJcbiAgICBjb25zdCB1bmlxdWVLZXkgPSB0aGlzLmZvcm1hdFVuaXF1ZUtleSh0aGlzLm1vZGVsKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5wb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1NlcnZpY2VcclxuICAgICAgICAuYmVmb3JlUmVtb3ZlKGFjdGlvbkJlZm9yZVJlbW92ZSwgdW5pcXVlS2V5LCB7IC4uLnRoaXMubW9kZWwgfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHN3aXRjaE1hcCgoYmVmb3JlUmVtb3ZlUmVzdWx0OiBQb1BhZ2VEeW5hbWljRGV0YWlsQmVmb3JlUmVtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlbW92ZUFjdGlvbiA9IGJlZm9yZVJlbW92ZVJlc3VsdD8ubmV3VXJsID8/IGFjdGlvblJlbW92ZTtcclxuICAgICAgICAgICAgY29uc3QgYWxsb3dBY3Rpb24gPSBiZWZvcmVSZW1vdmVSZXN1bHQ/LmFsbG93QWN0aW9uID8/IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFsbG93QWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdSZW1vdmVBY3Rpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlbW92ZShuZXdSZW1vdmVBY3Rpb24sIHVuaXF1ZUtleSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmVtb3ZlQWN0aW9uKHVuaXF1ZUtleSwgeyAuLi50aGlzLm1vZGVsIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25maXJtUmVtb3ZlKFxyXG4gICAgYWN0aW9uUmVtb3ZlOiBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1sncmVtb3ZlJ10sXHJcbiAgICBhY3Rpb25CZWZvcmVSZW1vdmU6IFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zWydiZWZvcmVSZW1vdmUnXVxyXG4gICkge1xyXG4gICAgY29uc3QgY29uZmlybU9wdGlvbnM6IFBvRGlhbG9nQ29uZmlybU9wdGlvbnMgPSB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmxpdGVyYWxzLmNvbmZpcm1SZW1vdmVUaXRsZSxcclxuICAgICAgbWVzc2FnZTogdGhpcy5saXRlcmFscy5jb25maXJtUmVtb3ZlTWVzc2FnZSxcclxuICAgICAgY29uZmlybTogdGhpcy5yZW1vdmUuYmluZCh0aGlzLCBhY3Rpb25SZW1vdmUsIGFjdGlvbkJlZm9yZVJlbW92ZSlcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wb0RpYWxvZ1NlcnZpY2UuY29uZmlybShjb25maXJtT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4ZWN1dGVSZW1vdmUocGF0aCwgdW5pcXVlS2V5OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLnBvUGFnZUR5bmFtaWNTZXJ2aWNlLmRlbGV0ZVJlc291cmNlKHVuaXF1ZUtleSkucGlwZShcclxuICAgICAgbWFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBvTm90aWZpY2F0aW9uLnN1Y2Nlc3ModGhpcy5saXRlcmFscy5yZW1vdmVOb3RpZmljYXRpb25TdWNjZXNzKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG8oeyBwYXRoOiBwYXRoIH0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VW5pcXVlS2V5KGl0ZW0pIHtcclxuICAgIGNvbnN0IGtleXMgPSBtYXBPYmplY3RCeVByb3BlcnRpZXMoaXRlbSwgdGhpcy5rZXlzKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVzRnJvbU9iamVjdChrZXlzKS5qb2luKCd8Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvQmFjayhhY3Rpb25CYWNrOiBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1snYmFjayddKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5wb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1NlcnZpY2VcclxuICAgICAgICAuYmVmb3JlQmFjayh0aGlzLmFjdGlvbnMuYmVmb3JlQmFjaylcclxuICAgICAgICAuc3Vic2NyaWJlKChiZWZvcmVCYWNrUmVzdWx0OiBQb1BhZ2VEeW5hbWljRGV0YWlsQmVmb3JlQmFjaykgPT5cclxuICAgICAgICAgIHRoaXMuZXhlY3V0ZUJhY2tBY3Rpb24oYWN0aW9uQmFjaywgYmVmb3JlQmFja1Jlc3VsdD8uYWxsb3dBY3Rpb24sIGJlZm9yZUJhY2tSZXN1bHQ/Lm5ld1VybClcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGVjdXRlQmFja0FjdGlvbihhY3Rpb25CYWNrOiBQb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1snYmFjayddLCBhbGxvd0FjdGlvbj8sIG5ld1VybD86IHN0cmluZykge1xyXG4gICAgY29uc3QgaXNBbGxvd2VkQWN0aW9uID0gdHlwZW9mIGFsbG93QWN0aW9uID09PSAnYm9vbGVhbicgPyBhbGxvd0FjdGlvbiA6IHRydWU7XHJcblxyXG4gICAgaWYgKGlzQWxsb3dlZEFjdGlvbikge1xyXG4gICAgICBpZiAoYWN0aW9uQmFjayA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhY3Rpb25CYWNrID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGFjdGlvbkJhY2sgPT09ICdzdHJpbmcnIHx8IG5ld1VybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbmV3VXJsIHx8IGFjdGlvbkJhY2tdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFjdGlvbkJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERhdGEoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnBvUGFnZUR5bmFtaWNTZXJ2aWNlLmdldFJlc291cmNlKGlkKS5waXBlKFxyXG4gICAgICB0YXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0VW5kZWZpbmVkVG9Nb2RlbEFuZEFjdGlvbnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tb2RlbCA9IHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0VW5kZWZpbmVkVG9Nb2RlbEFuZEFjdGlvbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVbmRlZmluZWRUb01vZGVsQW5kQWN0aW9ucygpIHtcclxuICAgIHRoaXMubW9kZWwgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmFjdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1ldGFkYXRhKFxyXG4gICAgc2VydmljZUFwaUZyb21Sb3V0ZTogc3RyaW5nLFxyXG4gICAgb25Mb2FkOiBVcmxPclBvQ3VzdG9taXphdGlvbkZ1bmN0aW9uXHJcbiAgKTogT2JzZXJ2YWJsZTxQb1BhZ2VEeW5hbWljRGV0YWlsTWV0YURhdGE+IHtcclxuICAgIGlmIChzZXJ2aWNlQXBpRnJvbVJvdXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvUGFnZUR5bmFtaWNTZXJ2aWNlLmdldE1ldGFkYXRhPFBvUGFnZUR5bmFtaWNEZXRhaWxNZXRhRGF0YT4oJ2RldGFpbCcpLnBpcGUoXHJcbiAgICAgICAgdGFwKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMuYXV0b1JvdXRlciA9IHJlc3BvbnNlLmF1dG9Sb3V0ZXIgfHwgdGhpcy5hdXRvUm91dGVyO1xyXG4gICAgICAgICAgdGhpcy5hY3Rpb25zID0gcmVzcG9uc2UuYWN0aW9ucyB8fCB0aGlzLmFjdGlvbnM7XHJcbiAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSByZXNwb25zZS5icmVhZGNydW1iIHx8IHRoaXMuYnJlYWRjcnVtYjtcclxuICAgICAgICAgIHRoaXMuZmllbGRzID0gcmVzcG9uc2UuZmllbGRzIHx8IHRoaXMuZmllbGRzO1xyXG4gICAgICAgICAgdGhpcy50aXRsZSA9IHJlc3BvbnNlLnRpdGxlIHx8IHRoaXMudGl0bGU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMubG9hZE9wdGlvbnNPbkluaXRpYWxpemUob25Mb2FkKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2FkT3B0aW9uc09uSW5pdGlhbGl6ZShvbkxvYWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQHRvZG8gVmFsaWRhciByb3RhcyBuYSBtw6NvIHBvaXMgc2UgZXhpc3RpciB1bWEgcm90YSAnKionIG8gY2F0Y2ggZG8gbmF2aWdhdGlvbiBuw6NvIGZ1bmNpb25hLlxyXG4gIHByaXZhdGUgbmF2aWdhdGVUbyhcclxuICAgIHJvdXRlOiB7IHBhdGg6IHN0cmluZzsgY29tcG9uZW50PzsgdXJsPzogc3RyaW5nOyBwYXJhbXM/OiBhbnkgfSxcclxuICAgIGZvcmNlU3RvcEF1dG9Sb3V0ZXI6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlLnVybCB8fCByb3V0ZS5wYXRoXSwgeyBxdWVyeVBhcmFtczogcm91dGUucGFyYW1zIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgaWYgKGZvcmNlU3RvcEF1dG9Sb3V0ZXIgfHwgIXRoaXMuYXV0b1JvdXRlcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yb3V0ZXIuY29uZmlnLnVuc2hpZnQoPFJvdXRlPntcclxuICAgICAgICBwYXRoOiByb3V0ZS5wYXRoLFxyXG4gICAgICAgIGNvbXBvbmVudDogcm91dGUuY29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHsgc2VydmljZUFwaTogdGhpcy5zZXJ2aWNlQXBpLCBhdXRvUm91dGVyOiB0cnVlIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLm5hdmlnYXRlVG8ocm91dGUsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5FZGl0KGFjdGlvbjogUG9QYWdlRHluYW1pY0RldGFpbEFjdGlvbnNbJ2VkaXQnXSkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmZvcm1hdFVuaXF1ZUtleSh0aGlzLm1vZGVsKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5wb1BhZ2VEeW5hbWljRGV0YWlsQWN0aW9uc1NlcnZpY2VcclxuICAgICAgICAuYmVmb3JlRWRpdCh0aGlzLmFjdGlvbnMuYmVmb3JlRWRpdCwgaWQsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoKGJlZm9yZUVkaXRSZXN1bHQ6IFBvUGFnZUR5bmFtaWNEZXRhaWxCZWZvcmVFZGl0KSA9PlxyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVFZGl0QWN0aW9uKGFjdGlvbiwgYmVmb3JlRWRpdFJlc3VsdCwgaWQpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZUVkaXRBY3Rpb24oXHJcbiAgICBhY3Rpb246IFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zWydlZGl0J10sXHJcbiAgICBiZWZvcmVFZGl0UmVzdWx0OiBQb1BhZ2VEeW5hbWljRGV0YWlsQmVmb3JlRWRpdCxcclxuICAgIGlkOiBhbnlcclxuICApIHtcclxuICAgIGNvbnN0IG5ld0VkaXRBY3Rpb24gPSBiZWZvcmVFZGl0UmVzdWx0Py5uZXdVcmwgPz8gYWN0aW9uO1xyXG4gICAgY29uc3QgYWxsb3dBY3Rpb24gPSBiZWZvcmVFZGl0UmVzdWx0Py5hbGxvd0FjdGlvbiA/PyB0cnVlO1xyXG5cclxuICAgIGlmICghYWxsb3dBY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIG9mKHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG5ld0VkaXRBY3Rpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMub3BlbkVkaXRVcmwobmV3RWRpdEFjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdFZGl0QWN0aW9uKGlkLCB7IC4uLnRoaXMubW9kZWwgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEVNUFRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuRWRpdFVybChwYXRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucmVzb2x2ZVVybCh0aGlzLm1vZGVsLCBwYXRoKTtcclxuICAgIHRoaXMubmF2aWdhdGVUbyh7IHBhdGgsIHVybCB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzb2x2ZVVybChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgdW5pcXVlS2V5ID0gdGhpcy5mb3JtYXRVbmlxdWVLZXkoaXRlbSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvOmlkL2csIHVuaXF1ZUtleSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2VBY3Rpb25zKGFjdGlvbnM6IFBvUGFnZUR5bmFtaWNEZXRhaWxBY3Rpb25zID0ge30pOiBBcnJheTxQb1BhZ2VBY3Rpb24+IHtcclxuICAgIGNvbnN0IHBhZ2VBY3Rpb25zID0gW107XHJcblxyXG4gICAgaWYgKGFjdGlvbnMuZWRpdCkge1xyXG4gICAgICBwYWdlQWN0aW9ucy5wdXNoKHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMucGFnZUFjdGlvbkVkaXQsIGFjdGlvbjogdGhpcy5vcGVuRWRpdC5iaW5kKHRoaXMsIGFjdGlvbnMuZWRpdCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbnMucmVtb3ZlKSB7XHJcbiAgICAgIHBhZ2VBY3Rpb25zLnB1c2goe1xyXG4gICAgICAgIGxhYmVsOiB0aGlzLmxpdGVyYWxzLnBhZ2VBY3Rpb25SZW1vdmUsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLmNvbmZpcm1SZW1vdmUuYmluZCh0aGlzLCBhY3Rpb25zLnJlbW92ZSwgdGhpcy5hY3Rpb25zLmJlZm9yZVJlbW92ZSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbnMuYmFjayA9PT0gdW5kZWZpbmVkIHx8IGFjdGlvbnMuYmFjaykge1xyXG4gICAgICBwYWdlQWN0aW9ucy5wdXNoKHsgbGFiZWw6IHRoaXMubGl0ZXJhbHMucGFnZUFjdGlvbkJhY2ssIGFjdGlvbjogdGhpcy5nb0JhY2suYmluZCh0aGlzLCBhY3Rpb25zLmJhY2spIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYWdlQWN0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0S2V5c0J5RmllbGRzKGZpZWxkczogQXJyYXk8YW55PiA9IFtdKSB7XHJcbiAgICByZXR1cm4gZmllbGRzLmZpbHRlcihmaWVsZCA9PiBmaWVsZC5rZXkgPT09IHRydWUpLm1hcChmaWVsZCA9PiBmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldER1cGxpY2F0ZXNCeUZpZWxkcyhmaWVsZHM6IEFycmF5PGFueT4gPSBbXSkge1xyXG4gICAgcmV0dXJuIGZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQuZHVwbGljYXRlID09PSB0cnVlKS5tYXAoZmllbGQgPT4gZmllbGQucHJvcGVydHkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERhdGFGcm9tQVBJKCkge1xyXG4gICAgY29uc3QgeyBzZXJ2aWNlQXBpOiBzZXJ2aWNlQXBpRnJvbVJvdXRlLCBzZXJ2aWNlTWV0YWRhdGFBcGksIHNlcnZpY2VMb2FkQXBpIH0gPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LmRhdGE7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtcztcclxuXHJcbiAgICBjb25zdCBvbkxvYWQgPSBzZXJ2aWNlTG9hZEFwaSB8fCB0aGlzLm9uTG9hZDtcclxuICAgIHRoaXMuc2VydmljZUFwaSA9IHNlcnZpY2VBcGlGcm9tUm91dGUgfHwgdGhpcy5zZXJ2aWNlQXBpO1xyXG5cclxuICAgIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2UuY29uZmlnU2VydmljZUFwaSh7IGVuZHBvaW50OiB0aGlzLnNlcnZpY2VBcGksIG1ldGFkYXRhOiBzZXJ2aWNlTWV0YWRhdGFBcGkgfSk7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEkID0gdGhpcy5nZXRNZXRhZGF0YShzZXJ2aWNlQXBpRnJvbVJvdXRlLCBvbkxvYWQpO1xyXG4gICAgY29uc3QgZGF0YSQgPSB0aGlzLmxvYWREYXRhKGlkKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChjb25jYXQobWV0YWRhdGEkLCBkYXRhJCkuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkT3B0aW9uc09uSW5pdGlhbGl6ZShvbkxvYWQ6IFVybE9yUG9DdXN0b21pemF0aW9uRnVuY3Rpb24pIHtcclxuICAgIGlmIChvbkxvYWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9EeW5hbWljUGFnZU9wdGlvbnMob25Mb2FkKS5waXBlKFxyXG4gICAgICAgIHRhcChyZXNwb25zZVBvT3B0aW9uID0+XHJcbiAgICAgICAgICB0aGlzLnBvUGFnZUN1c3RvbWl6YXRpb25TZXJ2aWNlLmNoYW5nZU9yaWdpbmFsT3B0aW9uc1RvTmV3T3B0aW9ucyh0aGlzLCByZXNwb25zZVBvT3B0aW9uKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRU1QVFk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvRHluYW1pY1BhZ2VPcHRpb25zKG9uTG9hZDogVXJsT3JQb0N1c3RvbWl6YXRpb25GdW5jdGlvbik6IE9ic2VydmFibGU8UG9QYWdlRHluYW1pY0RldGFpbE9wdGlvbnM+IHtcclxuICAgIGNvbnN0IG9yaWdpbmFsT3B0aW9uOiBQb1BhZ2VEeW5hbWljRGV0YWlsT3B0aW9ucyA9IHtcclxuICAgICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcclxuICAgICAgYWN0aW9uczogdGhpcy5hY3Rpb25zLFxyXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXHJcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2VPcHRpb25TY2hlbWE6IFBvUGFnZUR5bmFtaWNPcHRpb25zU2NoZW1hPFBvUGFnZUR5bmFtaWNEZXRhaWxPcHRpb25zPiA9IHtcclxuICAgICAgc2NoZW1hOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdmaWVsZHMnLFxyXG4gICAgICAgICAgbWVyZ2U6IHRydWUsXHJcbiAgICAgICAgICBrZXlGb3JNZXJnZTogJ3Byb3BlcnR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdhY3Rpb25zJyxcclxuICAgICAgICAgIG1lcmdlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ2JyZWFkY3J1bWInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lUHJvcDogJ3RpdGxlJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZS5nZXRDdXN0b21PcHRpb25zKG9uTG9hZCwgb3JpZ2luYWxPcHRpb24sIHBhZ2VPcHRpb25TY2hlbWEpO1xyXG4gIH1cclxufVxyXG4iLCI8cG8tcGFnZS1kZWZhdWx0IFtwLWFjdGlvbnNdPVwicGFnZUFjdGlvbnNcIiBbcC1icmVhZGNydW1iXT1cImJyZWFkY3J1bWJcIiBbcC10aXRsZV09XCJ0aXRsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2RlbDsgdGhlbiB2aWV3RmllbGRzVGVtcGxhdGU7IGVsc2UgcmVnaXN0ZXJOb3RGb3VuZFRlbXBsYXRlXCI+IDwvbmctY29udGFpbmVyPlxyXG48L3BvLXBhZ2UtZGVmYXVsdD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcmVnaXN0ZXJOb3RGb3VuZFRlbXBsYXRlPlxyXG4gIDxwby13aWRnZXQ+XHJcbiAgICA8c3BhbiBjbGFzcz1cInBvLWljb24gcG8taWNvbi1pbmZvXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwby1mb250LXRleHQtbGFyZ2VcIj5cclxuICAgICAge3sgbGl0ZXJhbHMucmVnaXN0ZXJOb3RGb3VuZCB9fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvcG8td2lkZ2V0PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN2aWV3RmllbGRzVGVtcGxhdGU+XHJcbiAgPHBvLWR5bmFtaWMtdmlldyBbcC1maWVsZHNdPVwiZmllbGRzXCIgW3AtdmFsdWVdPVwibW9kZWxcIj4gPC9wby1keW5hbWljLXZpZXc+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==