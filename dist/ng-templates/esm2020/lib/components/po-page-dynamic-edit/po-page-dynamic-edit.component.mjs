import { Component, Input, ViewChild } from '@angular/core';
import { concat, of, EMPTY, throwError } from 'rxjs';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
import { poLocaleDefault } from '@po-ui/ng-components';
import { convertToBoolean, mapObjectByProperties, valuesFromObject, removeKeysProperties } from './../../utils/util';
import { PoPageDynamicService } from '../../services/po-page-dynamic/po-page-dynamic.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@po-ui/ng-components";
import * as i3 from "../../services/po-page-dynamic/po-page-dynamic.service";
import * as i4 from "../../services/po-page-customization/po-page-customization.service";
import * as i5 from "./po-page-dynamic-edit-actions.service";
import * as i6 from "@angular/common";
const _c0 = ["dynamicForm"];
const _c1 = ["gridDetail"];
function PoPageDynamicEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PoPageDynamicEditComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
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
function PoPageDynamicEditComponent_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "po-divider", 10);
    i0.ɵɵelementStart(2, "div", 11)(3, "po-button", 12);
    i0.ɵɵlistener("p-click", function PoPageDynamicEditComponent_ng_template_4_div_2_Template_po_button_p_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.detailActionNew()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "po-grid", 13, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-label", ctx_r6.detailFields[0].divider);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("p-label", ctx_r6.literals.detailActionNew);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-row-actions", ctx_r6.detailActions)("p-columns", ctx_r6.detailFields[0].detail.columns)("p-data", ctx_r6.model[ctx_r6.detailFields[0].property]);
} }
function PoPageDynamicEditComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-dynamic-form", 6, 7);
    i0.ɵɵtemplate(2, PoPageDynamicEditComponent_ng_template_4_div_2_Template, 6, 5, "div", 8);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("p-fields", ctx_r4.controlFields)("p-value", ctx_r4.model);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.detailFields.length > 0);
} }
export const poPageDynamicEditLiteralsDefault = {
    en: {
        cancelConfirmMessage: 'Are you sure you want to cancel this operation?',
        detailActionNew: 'New',
        pageActionCancel: 'Cancel',
        pageActionSave: 'Save',
        pageActionSaveNew: 'Save and new',
        registerNotFound: 'Register not found.',
        saveNotificationSuccessSave: 'Resource successfully saved.',
        saveNotificationSuccessUpdate: 'Resource successfully updated.',
        saveNotificationWarning: 'Form must be filled out correctly.'
    },
    es: {
        cancelConfirmMessage: 'Está seguro de que desea cancelar esta operación?',
        detailActionNew: 'Nuevo',
        pageActionCancel: 'Cancelar',
        pageActionSave: 'Guardar',
        pageActionSaveNew: 'Guardar y nuevo',
        registerNotFound: 'Registro no encontrado.',
        saveNotificationSuccessSave: 'Recurso salvo con éxito.',
        saveNotificationSuccessUpdate: 'Recurso actualizado con éxito.',
        saveNotificationWarning: 'El formulario debe llenarse correctamente.'
    },
    pt: {
        cancelConfirmMessage: 'Tem certeza que deseja cancelar esta operação?',
        detailActionNew: 'Novo',
        pageActionCancel: 'Cancelar',
        pageActionSave: 'Salvar',
        pageActionSaveNew: 'Salvar e novo',
        registerNotFound: 'Registro não encontrado.',
        saveNotificationSuccessSave: 'Recurso salvo com sucesso.',
        saveNotificationSuccessUpdate: 'Recurso atualizado com sucesso.',
        saveNotificationWarning: 'Formulário precisa ser preenchido corretamente.'
    },
    ru: {
        cancelConfirmMessage: 'Вы уверены, что хотите отменить эту операцию?',
        detailActionNew: 'Новый',
        pageActionCancel: 'Отменить',
        pageActionSave: 'Сохранить',
        pageActionSaveNew: 'Сохранить и создать',
        registerNotFound: 'Запись не найдена.',
        saveNotificationSuccessSave: 'Ресурс успешно сохранен.',
        saveNotificationSuccessUpdate: 'Ресурс успешно обновлен.',
        saveNotificationWarning: 'Форма должна быть заполнена правильно.'
    }
};
/**
 * @description
 *
 * O `po-page-dynamic-edit` é uma página que pode servir para editar ou criar novos registros,
 * o mesmo também suporta metadados conforme especificado na documentação.
 *
 * ### Utilização via rota
 *
 * Ao utilizar as rotas para carregar o template, o `page-dynamic-edit` disponibiliza propriedades para
 * poder especificar o endpoint dos dados e dos metadados. Exemplo de utilização:
 *
 * O componente primeiro irá carregar o metadado da rota definida na propriedade serviceMetadataApi
 * e depois irá buscar da rota definida na propriedade serviceLoadApi
 *
 * > Caso o servidor retornar um erro ao recuperar o metadados, será repassado o metadados salvo em cache,
 * se o cache não existe será disparado uma notificação.
 *
 * ```
 * {
 *   path: 'people',
 *   component: PoPageDynamicEditComponent,
 *   data: {
 *     serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
 *     serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o método HTTP Get
 *     serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customizações dos metadados utilizando o método HTTP Post
 *   }
 * }
 *
 * ```
 *
 * Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `id`:
 *
 * ```
 * {
 *   path: 'people/:id',
 *   component: PoPageDynamicEditComponent,
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
 * [PoPageDynamicEditMetadata](/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata). Por exemplo:
 *
 * ```
 *  {
 *   version: 1,
 *   title: 'Person edit',
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
 * GET {end-point}/metadata?type=edit&version={version}
 * ```
 *
 * @example
 *
 * <example name="po-page-dynamic-edit-basic" title="PO Page Dynamic Edit Basic">
 *  <file name="sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"> </file>
 *  <file name="sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-page-dynamic-edit-user" title="PO Page Dynamic Edit - User">
 *  <file name="sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"> </file>
 *  <file name="sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"> </file>
 * </example>
 */
export class PoPageDynamicEditComponent {
    constructor(router, activatedRoute, poNotification, poDialogService, poPageDynamicService, poPageCustomizationService, poPageDynamicEditActionsService, languageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poNotification = poNotification;
        this.poDialogService = poDialogService;
        this.poPageDynamicService = poPageDynamicService;
        this.poPageCustomizationService = poPageCustomizationService;
        this.poPageDynamicEditActionsService = poPageDynamicEditActionsService;
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        this.model = {};
        // beforeSave: return boolean
        // afterSave
        // beforeRemove: return boolean
        // afterRemove
        // beforeInsert: : return boolean
        this.detailActions = {};
        this.subscriptions = [];
        this._actions = {};
        this._autoRouter = false;
        this._controlFields = [];
        this._detailFields = [];
        this._duplicates = [];
        this._fields = [];
        this._keys = [];
        this._pageActions = [];
        const language = languageService.getShortLanguage();
        this.literals = {
            ...poPageDynamicEditLiteralsDefault[poLocaleDefault],
            ...poPageDynamicEditLiteralsDefault[language]
        };
    }
    /**
     * @optional
     *
     * @description
     *
     * Ações da página.
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
    /** Lista dos campos usados na tabela e busca avançada. */
    set fields(value) {
        this._fields = Array.isArray(value) ? [...value] : [];
        this._keys = this.getKeysByFields(this._fields);
        this._duplicates = this.getDuplicatesByFields(this._fields);
        this._controlFields = this.getControlFields(this._fields);
        this._detailFields = this.getDetailFields(this._fields);
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
    detailActionNew() {
        this.gridDetail.insertRow();
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
    get controlFields() {
        return this._controlFields;
    }
    get detailFields() {
        return this._detailFields;
    }
    loadDataFromAPI() {
        const { serviceApi: serviceApiFromRoute, serviceMetadataApi, serviceLoadApi } = this.activatedRoute.snapshot.data;
        const { id } = this.activatedRoute.snapshot.params;
        const { duplicate } = this.activatedRoute.snapshot.queryParams;
        const onLoad = serviceLoadApi || this.onLoad;
        this.serviceApi = serviceApiFromRoute || this.serviceApi;
        this.poPageDynamicService.configServiceApi({ endpoint: this.serviceApi, metadata: serviceMetadataApi });
        const metadata$ = this.getMetadata(serviceApiFromRoute, id, onLoad);
        const data$ = this.loadData(id, duplicate);
        this.subscriptions.push(concat(metadata$, data$).subscribe());
    }
    cancel(actionCancel, actionBeforeCancel) {
        if (this.dynamicForm && this.dynamicForm.form.dirty) {
            this.poDialogService.confirm({
                message: this.literals.cancelConfirmMessage,
                title: this.literals.pageActionCancel,
                confirm: this.goBack.bind(this, actionCancel, actionBeforeCancel)
            });
        }
        else {
            this.goBack(actionCancel, actionBeforeCancel);
        }
    }
    formatUniqueKey(item) {
        const keys = mapObjectByProperties(item, this.keys);
        return valuesFromObject(keys).join('|');
    }
    goBack(actionCancel, actionBeforeCancel) {
        this.subscriptions.push(this.poPageDynamicEditActionsService
            .beforeCancel(actionBeforeCancel)
            .subscribe((beforeCancelResult) => {
            this.executeBackAction(actionCancel, beforeCancelResult?.allowAction, beforeCancelResult?.newUrl);
        }));
    }
    executeBackAction(actionCancel, allowAction, newUrl) {
        const isAllowedAction = typeof allowAction === 'boolean' ? allowAction : true;
        if (isAllowedAction) {
            if (actionCancel === undefined || typeof actionCancel === 'boolean') {
                return window.history.back();
            }
            if (typeof actionCancel === 'string' || newUrl) {
                return this.router.navigate([newUrl || actionCancel]);
            }
            return actionCancel();
        }
    }
    loadData(id, duplicate) {
        if (!id) {
            try {
                this.model = duplicate ? JSON.parse(duplicate) : {};
            }
            catch {
                this.model = {};
            }
            return EMPTY;
        }
        return this.poPageDynamicService.getResource(id).pipe(tap(response => (this.model = response)), catchError(error => {
            this.model = undefined;
            this.actions = undefined;
            this._pageActions = [];
            return throwError(error);
        }));
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
    getMetadata(serviceApiFromRoute, paramId, onLoad) {
        const typeMetadata = paramId ? 'edit' : 'create';
        if (serviceApiFromRoute) {
            return this.poPageDynamicService.getMetadata(typeMetadata).pipe(tap(response => {
                this.autoRouter = response.autoRouter || this.autoRouter;
                this.actions = response.actions || this.actions;
                this.breadcrumb = response.breadcrumb || this.breadcrumb;
                this.fields = response.fields || this.fields;
                this.title = response.title || this.title;
            }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
        }
        return this.loadOptionsOnInitialize(onLoad);
    }
    navigateTo(path) {
        if (path) {
            const url = this.resolveUrl(this.model, path);
            this.router.navigate([url]);
        }
        else {
            window.history.back();
        }
    }
    resolveUniqueKey(item) {
        return this.activatedRoute.snapshot.params['id'] ? this.formatUniqueKey(item) : undefined;
    }
    resolveUrl(item, path) {
        const uniqueKey = this.formatUniqueKey(item);
        return path.replace(/:id/g, uniqueKey);
    }
    executeSave(saveRedirectPath) {
        const saveOperation$ = this.saveOperation();
        return saveOperation$.pipe(tap(message => {
            this.poNotification.success(message);
            this.navigateTo(saveRedirectPath);
        }));
    }
    updateModel(newResource = {}) {
        const dynamicNgForm = this.dynamicForm.form;
        removeKeysProperties(this.keys, newResource);
        this.model = { ...this.model, ...newResource };
        dynamicNgForm.form.patchValue(this.model);
    }
    saveOperation() {
        if (this.dynamicForm.form.invalid) {
            this.poNotification.warning(this.literals.saveNotificationWarning);
            return EMPTY;
        }
        const paramId = this.activatedRoute.snapshot.params['id'];
        const successMsg = paramId
            ? this.literals.saveNotificationSuccessUpdate
            : this.literals.saveNotificationSuccessSave;
        const saveOperation$ = paramId
            ? this.poPageDynamicService.updateResource(paramId, this.model)
            : this.poPageDynamicService.createResource(this.model);
        return saveOperation$.pipe(map(() => successMsg));
    }
    save(action, before = 'beforeSave') {
        const executeOperation = {
            beforeSave: this.executeSave.bind(this),
            beforeSaveNew: this.executeSaveNew.bind(this)
        };
        const uniqueKey = this.resolveUniqueKey(this.model);
        this.subscriptions.push(this.poPageDynamicEditActionsService[before](this.actions[before], uniqueKey, { ...this.model })
            .pipe(switchMap(returnBefore => {
            const newAction = returnBefore?.newUrl ?? action;
            const allowAction = returnBefore?.allowAction ?? true;
            this.updateModel(returnBefore?.resource);
            if (!allowAction) {
                return of({});
            }
            if (typeof newAction === 'string') {
                return executeOperation[before](newAction);
            }
            else {
                newAction({ ...this.model }, uniqueKey);
                return EMPTY;
            }
        }))
            .subscribe());
    }
    executeSaveNew(path) {
        const paramId = this.activatedRoute.snapshot.params['id'];
        const saveOperation$ = this.saveOperation();
        return saveOperation$.pipe(tap(message => {
            if (paramId) {
                this.poNotification.success(message);
                this.navigateTo(path);
            }
            else {
                this.poNotification.success(message);
                this.model = {};
                this.dynamicForm.form.reset();
            }
        }));
    }
    getKeysByFields(fields = []) {
        return fields.filter(field => field.key === true).map(field => field.property);
    }
    getControlFields(fields = []) {
        return fields.filter(field => field.type !== 'detail');
    }
    getDetailFields(fields = []) {
        return fields.filter(field => field.type === 'detail');
    }
    getDuplicatesByFields(fields = []) {
        return fields.filter(field => field.duplicate === true).map(field => field.property);
    }
    getPageActions(actions = {}) {
        const pageActions = [{ label: this.literals.pageActionSave, action: this.save.bind(this, actions.save) }];
        if (actions.saveNew) {
            pageActions.push({
                label: this.literals.pageActionSaveNew,
                action: this.save.bind(this, actions.saveNew, 'beforeSaveNew')
            });
        }
        if (actions.cancel === undefined || actions.cancel) {
            pageActions.push({
                label: this.literals.pageActionCancel,
                action: this.cancel.bind(this, actions.cancel, this.actions.beforeCancel)
            });
        }
        return pageActions;
    }
    isObject(value) {
        return !!value && typeof value === 'object' && !Array.isArray(value);
    }
}
PoPageDynamicEditComponent.ɵfac = function PoPageDynamicEditComponent_Factory(t) { return new (t || PoPageDynamicEditComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(i3.PoPageDynamicService), i0.ɵɵdirectiveInject(i4.PoPageCustomizationService), i0.ɵɵdirectiveInject(i5.PoPageDynamicEditActionsService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoPageDynamicEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoPageDynamicEditComponent, selectors: [["po-page-dynamic-edit"]], viewQuery: function PoPageDynamicEditComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicForm = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridDetail = _t.first);
    } }, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], serviceApi: ["p-service-api", "serviceApi"], title: ["p-title", "title"], onLoad: ["p-load", "onLoad"], actions: ["p-actions", "actions"], autoRouter: ["p-auto-router", "autoRouter"], fields: ["p-fields", "fields"] }, features: [i0.ɵɵProvidersFeature([PoPageDynamicService])], decls: 6, vars: 6, consts: [[3, "p-actions", "p-breadcrumb", "p-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["registerNotFoundTemplate", ""], ["formFieldsTemplate", ""], [1, "po-icon", "po-icon-info"], [1, "po-font-text-large"], [3, "p-fields", "p-value"], ["dynamicForm", ""], ["class", "po-sm-12", 4, "ngIf"], [1, "po-sm-12"], [3, "p-label"], [1, "po-row", "po-mb-2"], [3, "p-label", "p-click"], [3, "p-row-actions", "p-columns", "p-data"], ["gridDetail", ""]], template: function PoPageDynamicEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "po-page-default", 0);
        i0.ɵɵtemplate(1, PoPageDynamicEditComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PoPageDynamicEditComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PoPageDynamicEditComponent_ng_template_4_Template, 3, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.model)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, dependencies: [i6.NgIf, i2.PoButtonComponent, i2.PoDividerComponent, i2.PoDynamicFormComponent, i2.PoGridComponent, i2.PoPageDefaultComponent, i2.PoWidgetComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicEditComponent, [{
        type: Component,
        args: [{ selector: 'po-page-dynamic-edit', providers: [PoPageDynamicService], template: "<po-page-default [p-actions]=\"pageActions\" [p-breadcrumb]=\"breadcrumb\" [p-title]=\"title\">\r\n  <ng-container *ngIf=\"model; then formFieldsTemplate; else registerNotFoundTemplate\"> </ng-container>\r\n</po-page-default>\r\n\r\n<ng-template #registerNotFoundTemplate>\r\n  <po-widget>\r\n    <span class=\"po-icon po-icon-info\"></span>\r\n    <span class=\"po-font-text-large\">\r\n      {{ literals.registerNotFound }}\r\n    </span>\r\n  </po-widget>\r\n</ng-template>\r\n\r\n<ng-template #formFieldsTemplate>\r\n  <po-dynamic-form #dynamicForm [p-fields]=\"controlFields\" [p-value]=\"model\"> </po-dynamic-form>\r\n\r\n  <div *ngIf=\"detailFields.length > 0\" class=\"po-sm-12\">\r\n    <po-divider [p-label]=\"detailFields[0].divider\"></po-divider>\r\n\r\n    <div class=\"po-row po-mb-2\">\r\n      <po-button [p-label]=\"literals.detailActionNew\" (p-click)=\"detailActionNew()\"></po-button>\r\n    </div>\r\n\r\n    <po-grid\r\n      #gridDetail\r\n      [p-row-actions]=\"detailActions\"\r\n      [p-columns]=\"detailFields[0].detail.columns\"\r\n      [p-data]=\"model[detailFields[0].property]\"\r\n    >\r\n    </po-grid>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.PoNotificationService }, { type: i2.PoDialogService }, { type: i3.PoPageDynamicService }, { type: i4.PoPageCustomizationService }, { type: i5.PoPageDynamicEditActionsService }, { type: i2.PoLanguageService }]; }, { dynamicForm: [{
            type: ViewChild,
            args: ['dynamicForm']
        }], gridDetail: [{
            type: ViewChild,
            args: ['gridDetail']
        }], breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], serviceApi: [{
            type: Input,
            args: ['p-service-api']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], onLoad: [{
            type: Input,
            args: ['p-load']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWR5bmFtaWMtZWRpdC9wby1wYWdlLWR5bmFtaWMtZWRpdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy1lZGl0L3BvLXBhZ2UtZHluYW1pYy1lZGl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQWMsTUFBTSxFQUFFLEVBQUUsRUFBZ0IsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQVNMLGVBQWUsRUFDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlySCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7Ozs7Ozs7Ozs7SUNyQjVGLHdCQUFvRzs7O0lBSXBHLGlDQUFXO0lBQ1QsMEJBQTBDO0lBQzFDLCtCQUFpQztJQUMvQixZQUNGO0lBQUEsaUJBQU8sRUFBQTs7O0lBREwsZUFDRjtJQURFLGlFQUNGOzs7O0lBT0YsOEJBQXNEO0lBQ3BELGlDQUE2RDtJQUU3RCwrQkFBNEIsb0JBQUE7SUFDc0IsNkxBQVcsZUFBQSx3QkFBaUIsQ0FBQSxJ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QkFDRSxzQkFBc0IsYUFFckIsQ0FBQyxvQkFBb0IsQ0FBQztrVEFHUCxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWE7WUFDQyxVQUFVO2tCQUFsQyxTQUFTO21CQUFDLFlBQVk7WUFHQSxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUF1RUcsVUFBVTtrQkFBakMsS0FBSzttQkFBQyxlQUFlO1lBR0osS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBK0JDLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUTtZQTZCUyxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUF3QlUsVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlO1lBU0MsTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbmNhdCwgb2YsIFN1YnNjcmlwdGlvbiwgRU1QVFksIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUG9CcmVhZGNydW1iLFxyXG4gIFBvRGlhbG9nU2VydmljZSxcclxuICBQb0R5bmFtaWNGb3JtQ29tcG9uZW50LFxyXG4gIFBvR3JpZENvbXBvbmVudCxcclxuICBQb0dyaWRSb3dBY3Rpb25zLFxyXG4gIFBvTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gIFBvTm90aWZpY2F0aW9uU2VydmljZSxcclxuICBQb1BhZ2VBY3Rpb24sXHJcbiAgcG9Mb2NhbGVEZWZhdWx0XHJcbn0gZnJvbSAnQHBvLXVpL25nLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgbWFwT2JqZWN0QnlQcm9wZXJ0aWVzLCB2YWx1ZXNGcm9tT2JqZWN0LCByZW1vdmVLZXlzUHJvcGVydGllcyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRWRpdEFjdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLWVkaXQtYWN0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRWRpdEZpZWxkIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1lZGl0LWZpZWxkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tcGFnZS1keW5hbWljL3BvLXBhZ2UtZHluYW1pYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9QYWdlRHluYW1pY0VkaXRPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1lZGl0LW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9QYWdlQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1wYWdlLWN1c3RvbWl6YXRpb24vcG8tcGFnZS1jdXN0b21pemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljRWRpdE1ldGFkYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1lZGl0LW1ldGFkYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNPcHRpb25zU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tcGFnZS1jdXN0b21pemF0aW9uL3BvLXBhZ2UtZHluYW1pYy1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3BvLXBhZ2UtZHluYW1pYy1lZGl0LWFjdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNFZGl0QmVmb3JlQ2FuY2VsIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLXBhZ2UtZHluYW1pYy1lZGl0LWJlZm9yZS1jYW5jZWwuaW50ZXJmYWNlJztcclxuXHJcbnR5cGUgVXJsT3JQb0N1c3RvbWl6YXRpb25GdW5jdGlvbiA9IHN0cmluZyB8ICgoKSA9PiBQb1BhZ2VEeW5hbWljRWRpdE9wdGlvbnMpO1xyXG50eXBlIFNhdmVBY3Rpb24gPSBQb1BhZ2VEeW5hbWljRWRpdEFjdGlvbnNbJ3NhdmUnXSB8IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1snc2F2ZU5ldyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvUGFnZUR5bmFtaWNFZGl0TGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiB7XHJcbiAgICBjYW5jZWxDb25maXJtTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhpcyBvcGVyYXRpb24/JyxcclxuICAgIGRldGFpbEFjdGlvbk5ldzogJ05ldycsXHJcbiAgICBwYWdlQWN0aW9uQ2FuY2VsOiAnQ2FuY2VsJyxcclxuICAgIHBhZ2VBY3Rpb25TYXZlOiAnU2F2ZScsXHJcbiAgICBwYWdlQWN0aW9uU2F2ZU5ldzogJ1NhdmUgYW5kIG5ldycsXHJcbiAgICByZWdpc3Rlck5vdEZvdW5kOiAnUmVnaXN0ZXIgbm90IGZvdW5kLicsXHJcbiAgICBzYXZlTm90aWZpY2F0aW9uU3VjY2Vzc1NhdmU6ICdSZXNvdXJjZSBzdWNjZXNzZnVsbHkgc2F2ZWQuJyxcclxuICAgIHNhdmVOb3RpZmljYXRpb25TdWNjZXNzVXBkYXRlOiAnUmVzb3VyY2Ugc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuJyxcclxuICAgIHNhdmVOb3RpZmljYXRpb25XYXJuaW5nOiAnRm9ybSBtdXN0IGJlIGZpbGxlZCBvdXQgY29ycmVjdGx5LidcclxuICB9LFxyXG4gIGVzOiB7XHJcbiAgICBjYW5jZWxDb25maXJtTWVzc2FnZTogJ0VzdMOhIHNlZ3VybyBkZSBxdWUgZGVzZWEgY2FuY2VsYXIgZXN0YSBvcGVyYWNpw7NuPycsXHJcbiAgICBkZXRhaWxBY3Rpb25OZXc6ICdOdWV2bycsXHJcbiAgICBwYWdlQWN0aW9uQ2FuY2VsOiAnQ2FuY2VsYXInLFxyXG4gICAgcGFnZUFjdGlvblNhdmU6ICdHdWFyZGFyJyxcclxuICAgIHBhZ2VBY3Rpb25TYXZlTmV3OiAnR3VhcmRhciB5IG51ZXZvJyxcclxuICAgIHJlZ2lzdGVyTm90Rm91bmQ6ICdSZWdpc3RybyBubyBlbmNvbnRyYWRvLicsXHJcbiAgICBzYXZlTm90aWZpY2F0aW9uU3VjY2Vzc1NhdmU6ICdSZWN1cnNvIHNhbHZvIGNvbiDDqXhpdG8uJyxcclxuICAgIHNhdmVOb3RpZmljYXRpb25TdWNjZXNzVXBkYXRlOiAnUmVjdXJzbyBhY3R1YWxpemFkbyBjb24gw6l4aXRvLicsXHJcbiAgICBzYXZlTm90aWZpY2F0aW9uV2FybmluZzogJ0VsIGZvcm11bGFyaW8gZGViZSBsbGVuYXJzZSBjb3JyZWN0YW1lbnRlLidcclxuICB9LFxyXG4gIHB0OiB7XHJcbiAgICBjYW5jZWxDb25maXJtTWVzc2FnZTogJ1RlbSBjZXJ0ZXphIHF1ZSBkZXNlamEgY2FuY2VsYXIgZXN0YSBvcGVyYcOnw6NvPycsXHJcbiAgICBkZXRhaWxBY3Rpb25OZXc6ICdOb3ZvJyxcclxuICAgIHBhZ2VBY3Rpb25DYW5jZWw6ICdDYW5jZWxhcicsXHJcbiAgICBwYWdlQWN0aW9uU2F2ZTogJ1NhbHZhcicsXHJcbiAgICBwYWdlQWN0aW9uU2F2ZU5ldzogJ1NhbHZhciBlIG5vdm8nLFxyXG4gICAgcmVnaXN0ZXJOb3RGb3VuZDogJ1JlZ2lzdHJvIG7Do28gZW5jb250cmFkby4nLFxyXG4gICAgc2F2ZU5vdGlmaWNhdGlvblN1Y2Nlc3NTYXZlOiAnUmVjdXJzbyBzYWx2byBjb20gc3VjZXNzby4nLFxyXG4gICAgc2F2ZU5vdGlmaWNhdGlvblN1Y2Nlc3NVcGRhdGU6ICdSZWN1cnNvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28uJyxcclxuICAgIHNhdmVOb3RpZmljYXRpb25XYXJuaW5nOiAnRm9ybXVsw6FyaW8gcHJlY2lzYSBzZXIgcHJlZW5jaGlkbyBjb3JyZXRhbWVudGUuJ1xyXG4gIH0sXHJcbiAgcnU6IHtcclxuICAgIGNhbmNlbENvbmZpcm1NZXNzYWdlOiAn0JLRiyDRg9Cy0LXRgNC10L3Riywg0YfRgtC+INGF0L7RgtC40YLQtSDQvtGC0LzQtdC90LjRgtGMINGN0YLRgyDQvtC/0LXRgNCw0YbQuNGOPycsXHJcbiAgICBkZXRhaWxBY3Rpb25OZXc6ICfQndC+0LLRi9C5JyxcclxuICAgIHBhZ2VBY3Rpb25DYW5jZWw6ICfQntGC0LzQtdC90LjRgtGMJyxcclxuICAgIHBhZ2VBY3Rpb25TYXZlOiAn0KHQvtGF0YDQsNC90LjRgtGMJyxcclxuICAgIHBhZ2VBY3Rpb25TYXZlTmV3OiAn0KHQvtGF0YDQsNC90LjRgtGMINC4INGB0L7Qt9C00LDRgtGMJyxcclxuICAgIHJlZ2lzdGVyTm90Rm91bmQ6ICfQl9Cw0L/QuNGB0Ywg0L3QtSDQvdCw0LnQtNC10L3QsC4nLFxyXG4gICAgc2F2ZU5vdGlmaWNhdGlvblN1Y2Nlc3NTYXZlOiAn0KDQtdGB0YPRgNGBINGD0YHQv9C10YjQvdC+INGB0L7RhdGA0LDQvdC10L0uJyxcclxuICAgIHNhdmVOb3RpZmljYXRpb25TdWNjZXNzVXBkYXRlOiAn0KDQtdGB0YPRgNGBINGD0YHQv9C10YjQvdC+INC+0LHQvdC+0LLQu9C10L0uJyxcclxuICAgIHNhdmVOb3RpZmljYXRpb25XYXJuaW5nOiAn0KTQvtGA0LzQsCDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdCwINC/0YDQsNCy0LjQu9GM0L3Qvi4nXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1wYWdlLWR5bmFtaWMtZWRpdGAgw6kgdW1hIHDDoWdpbmEgcXVlIHBvZGUgc2VydmlyIHBhcmEgZWRpdGFyIG91IGNyaWFyIG5vdm9zIHJlZ2lzdHJvcyxcclxuICogbyBtZXNtbyB0YW1iw6ltIHN1cG9ydGEgbWV0YWRhZG9zIGNvbmZvcm1lIGVzcGVjaWZpY2FkbyBuYSBkb2N1bWVudGHDp8Ojby5cclxuICpcclxuICogIyMjIFV0aWxpemHDp8OjbyB2aWEgcm90YVxyXG4gKlxyXG4gKiBBbyB1dGlsaXphciBhcyByb3RhcyBwYXJhIGNhcnJlZ2FyIG8gdGVtcGxhdGUsIG8gYHBhZ2UtZHluYW1pYy1lZGl0YCBkaXNwb25pYmlsaXphIHByb3ByaWVkYWRlcyBwYXJhXHJcbiAqIHBvZGVyIGVzcGVjaWZpY2FyIG8gZW5kcG9pbnQgZG9zIGRhZG9zIGUgZG9zIG1ldGFkYWRvcy4gRXhlbXBsbyBkZSB1dGlsaXphw6fDo286XHJcbiAqXHJcbiAqIE8gY29tcG9uZW50ZSBwcmltZWlybyBpcsOhIGNhcnJlZ2FyIG8gbWV0YWRhZG8gZGEgcm90YSBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBzZXJ2aWNlTWV0YWRhdGFBcGlcclxuICogZSBkZXBvaXMgaXLDoSBidXNjYXIgZGEgcm90YSBkZWZpbmlkYSBuYSBwcm9wcmllZGFkZSBzZXJ2aWNlTG9hZEFwaVxyXG4gKlxyXG4gKiA+IENhc28gbyBzZXJ2aWRvciByZXRvcm5hciB1bSBlcnJvIGFvIHJlY3VwZXJhciBvIG1ldGFkYWRvcywgc2Vyw6EgcmVwYXNzYWRvIG8gbWV0YWRhZG9zIHNhbHZvIGVtIGNhY2hlLFxyXG4gKiBzZSBvIGNhY2hlIG7Do28gZXhpc3RlIHNlcsOhIGRpc3BhcmFkbyB1bWEgbm90aWZpY2HDp8Ojby5cclxuICpcclxuICogYGBgXHJcbiAqIHtcclxuICogICBwYXRoOiAncGVvcGxlJyxcclxuICogICBjb21wb25lbnQ6IFBvUGFnZUR5bmFtaWNFZGl0Q29tcG9uZW50LFxyXG4gKiAgIGRhdGE6IHtcclxuICogICAgIHNlcnZpY2VBcGk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvdjEvcGVvcGxlJywgLy8gZW5kcG9pbnQgZG9zIGRhZG9zXHJcbiAqICAgICBzZXJ2aWNlTWV0YWRhdGFBcGk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvdjEvbWV0YWRhdGEnLCAvLyBlbmRwb2ludCBkb3MgbWV0YWRhZG9zIHV0aWxpemFuZG8gbyBtw6l0b2RvIEhUVFAgR2V0XHJcbiAqICAgICBzZXJ2aWNlTG9hZEFwaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2FkLW1ldGFkYXRhJyAvLyBlbmRwb2ludCBkZSBjdXN0b21pemHDp8O1ZXMgZG9zIG1ldGFkYWRvcyB1dGlsaXphbmRvIG8gbcOpdG9kbyBIVFRQIFBvc3RcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIFBhcmEgY2FycmVnYXIgY29tIHVtIHJlY3Vyc28gasOhIGV4aXN0ZW50ZSwgZGV2ZS1zZSBzZXIgaW5jbHXDrWRvIHVtIHBhcsOibWV0cm8gbmEgcm90YSBjaGFtYWRvIGBpZGA6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiB7XHJcbiAqICAgcGF0aDogJ3Blb3BsZS86aWQnLFxyXG4gKiAgIGNvbXBvbmVudDogUG9QYWdlRHluYW1pY0VkaXRDb21wb25lbnQsXHJcbiAqICAgZGF0YToge1xyXG4gKiAgICAgc2VydmljZUFwaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92MS9wZW9wbGUnLCAvLyBlbmRwb2ludCBkb3MgZGFkb3NcclxuICogICAgIHNlcnZpY2VNZXRhZGF0YUFwaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92MS9tZXRhZGF0YScsIC8vIGVuZHBvaW50IGRvcyBtZXRhZGFkb3NcclxuICogICAgIHNlcnZpY2VMb2FkQXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvYWQtbWV0YWRhdGEnIC8vIGVuZHBvaW50IGRlIGN1c3RvbWl6YcOnw7VlcyBkb3MgbWV0YWRhZG9zXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBIHJlcXVpc2nDp8OjbyBkb3MgbWV0YWRhZG9zIMOpIGZlaXRhIG5hIGluaWNpYWxpemHDp8OjbyBkbyB0ZW1wbGF0ZSBwYXJhIGJ1c2NhciBvcyBtZXRhZGFkb3MgZGEgcMOhZ2luYSBwYXNzYW5kbyBvXHJcbiAqIHRpcG8gZG8gbWV0YWRhZG8gZXNwZXJhZG8gZSBhIHZlcnPDo28gY2FjaGVhZGEgcGVsbyBicm93c2VyLlxyXG4gKlxyXG4gKiBPIGZvcm1hdG8gZXNwZXJhZG8gbmEgcmVzcG9zdGEgZGEgcmVxdWlzacOnw6NvIGVzdMOhIGVzcGVjaWZpY2FkbyBuYSBpbnRlcmZhY2VcclxuICogW1BvUGFnZUR5bmFtaWNFZGl0TWV0YWRhdGFdKC9kb2N1bWVudGF0aW9uL3BvLXBhZ2UtZHluYW1pYy1lZGl0I3BvLXBhZ2UtZHluYW1pYy1lZGl0LW1ldGFkYXRhKS4gUG9yIGV4ZW1wbG86XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAge1xyXG4gKiAgIHZlcnNpb246IDEsXHJcbiAqICAgdGl0bGU6ICdQZXJzb24gZWRpdCcsXHJcbiAqICAgZmllbGRzOiBbXHJcbiAqICAgICB7IHByb3BlcnR5OiAnaWQnLCBrZXk6IHRydWUsIGRpc2FibGVkOiB0cnVlIH0sXHJcbiAqICAgICB7IHByb3BlcnR5OiAnc3RhdHVzJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ25hbWUnIH0sXHJcbiAqICAgICB7IHByb3BlcnR5OiAnbmlja25hbWUnIH0sXHJcbiAqICAgICB7IHByb3BlcnR5OiAnYmlydGhkYXRlJywgbGFiZWw6ICdCaXJ0aCBkYXRlJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2dlbnJlJyB9LFxyXG4gKiAgICAgeyBwcm9wZXJ0eTogJ2NpdHknIH0sXHJcbiAqICAgICB7IHByb3BlcnR5OiAnY291bnRyeScgfVxyXG4gKiAgIF1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogPiBDYXNvIG8gZW5kcG9pbnQgZG9zIG1ldGFkYWRvcyBuw6NvIHNlamEgZXNwZWNpZmljYWRvLCBzZXLDoSBmZWl0byB1bWEgcmVxdWlzacOnw6NvIHV0aWxpemFuZG8gbyBgc2VydmljZUFwaWAgZGEgc2VndWludGUgZm9ybWE6XHJcbiAqIGBgYFxyXG4gKiBHRVQge2VuZC1wb2ludH0vbWV0YWRhdGE/dHlwZT1lZGl0JnZlcnNpb249e3ZlcnNpb259XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiA8ZXhhbXBsZSBuYW1lPVwicG8tcGFnZS1keW5hbWljLWVkaXQtYmFzaWNcIiB0aXRsZT1cIlBPIFBhZ2UgRHluYW1pYyBFZGl0IEJhc2ljXCI+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1lZGl0LWJhc2ljL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtZWRpdC1iYXNpYy5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1lZGl0LWJhc2ljL3NhbXBsZS1wby1wYWdlLWR5bmFtaWMtZWRpdC1iYXNpYy5jb21wb25lbnQudHNcIj4gPC9maWxlPlxyXG4gKiA8L2V4YW1wbGU+XHJcbiAqXHJcbiAqIDxleGFtcGxlIG5hbWU9XCJwby1wYWdlLWR5bmFtaWMtZWRpdC11c2VyXCIgdGl0bGU9XCJQTyBQYWdlIER5bmFtaWMgRWRpdCAtIFVzZXJcIj5cclxuICogIDxmaWxlIG5hbWU9XCJzYW1wbGUtcG8tcGFnZS1keW5hbWljLWVkaXQtdXNlci9zYW1wbGUtcG8tcGFnZS1keW5hbWljLWVkaXQtdXNlci5jb21wb25lbnQuaHRtbFwiPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPVwic2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1lZGl0LXVzZXIvc2FtcGxlLXBvLXBhZ2UtZHluYW1pYy1lZGl0LXVzZXIuY29tcG9uZW50LnRzXCI+IDwvZmlsZT5cclxuICogPC9leGFtcGxlPlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1wYWdlLWR5bmFtaWMtZWRpdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLXBhZ2UtZHluYW1pYy1lZGl0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQb1BhZ2VEeW5hbWljU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvUGFnZUR5bmFtaWNFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNGb3JtJykgZHluYW1pY0Zvcm06IFBvRHluYW1pY0Zvcm1Db21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZ3JpZERldGFpbCcpIGdyaWREZXRhaWw6IFBvR3JpZENvbXBvbmVudDtcclxuXHJcbiAgLyoqIE9iamV0byBjb20gcHJvcHJpZWRhZGVzIGRvIGJyZWFkY3J1bWIuICovXHJcbiAgQElucHV0KCdwLWJyZWFkY3J1bWInKSBicmVhZGNydW1iPzogUG9CcmVhZGNydW1iID0geyBpdGVtczogW10gfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFbmRwb2ludCB1c2FkbyBwZWxvIHRlbXBsYXRlIHBhcmEgcmVxdWlzacOnw6NvIGRvIHJlY3Vyc28gcXVlIHNlcsOhIGV4aWJpZG8gcGFyYSBlZGnDp8Ojby5cclxuICAgKlxyXG4gICAqIFBhcmEgYXMgYcOnw7VlcyBkZSBgc2F2ZWAgZSBgc2F2ZU5ld2AsIHNlcsOhIGZlaXRvIHVtYSByZXF1aXNpw6fDo28gZGUgY3JpYcOnw6NvIG5lc3NlIG1lc21vIGVuZHBvaW50IHBhc3NhbmRvIG9zIHZhbG9yZXNcclxuICAgKiBwcmVlbmNoaWRvcyBwZWxvIHVzdcOhcmlvIHZpYSBwYXlsb2FkLlxyXG4gICAqXHJcbiAgICogPiBgUE9TVCB7ZW5kLXBvaW50fWBcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICA8cG8tcGFnZS1keW5hbWljLWVkaXRcclxuICAgKiAgICBbcC1hY3Rpb25zXT1cInsgc2F2ZTogJy8nLCBzYXZlTmV3OiAnbmV3JyB9XCJcclxuICAgKiAgICBbcC1maWVsZHNdPVwiWyB7IHByb3BlcnR5OiAnbmFtZScgfSwgeyBwcm9wZXJ0eTogJ2NpdHknIH0gXVwiXHJcbiAgICogICAgcC1zZXJ2aWNlPVwiL2FwaS9wby1zYW1wbGVzL3YxL3Blb3BsZVwiXHJcbiAgICogICAgLi4uPlxyXG4gICAqICA8L3BvLXBhZ2UtZHluYW1pYy1lZGl0PlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogUmVzcXVpc2nDp8OjbyBkaXNwYXJhZGEsIG9uZGUgYSBwcm9wcmllZGFkZSBgbmFtZWAgZSBgY2l0eWAgZm9yYW0gcHJlZW5jaGlkYXM6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgUE9TVCAvYXBpL3BvLXNhbXBsZXMvdjEvcGVvcGxlIEhUVFAvMS4xXHJcbiAgICogIEhvc3Q6IGxvY2FsaG9zdDo0MDAwXHJcbiAgICogIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcclxuICAgKiAgQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluXHJcbiAgICogIC4uLlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogUmVxdWVzdCBwYXlsb2FkOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogeyBcIm5hbWVcIjogXCJGdWxhbm9cIiwgXCJjaXR5XCI6IFwiU21hbGx2aWxsZVwiIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIENhc28gcXVlaXJhIHF1ZSBvIHRlbXBsYXRlIGNhcnJlZ3VlIHVtIHJlY3Vyc28gasOhIGV4aXN0ZW50ZSwgZGV2ZS1zZSBzZXIgaW5jbHXDrWRvIHVtIHBhcmFtZXRybyBuYSByb3RhIGNoYW1hZG8gYGlkYC5cclxuICAgKlxyXG4gICAqIEV4ZW1wbG8gZGUgY29uZmlndXJhw6fDo28gZGUgcm90YTpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICogICAgLi4uXHJcbiAgICogICAgeyBwYXRoOiAnZWRpdC86aWQnLCBjb21wb25lbnQ6IFBlcnNvbkVkaXRDb21wb25lbnQgfSxcclxuICAgKiAgICAuLi5cclxuICAgKiAgXSxcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEJhc2VhZG8gbmlzc28sIG5hIGluaWNpYWxpemHDp8OjbyBkbyB0ZW1wbGF0ZSwgc2Vyw6EgZGlzcGFyYWRvIHVtYSByZXF1aXNpw6fDo28gcGFyYSBidXNjYXIgbyByZWN1cnNvIHF1ZSBzZXLDoSBlZGl0YWRvLlxyXG4gICAqXHJcbiAgICogPiBgR0VUIHtlbmQtcG9pbnR9L3tpZH1gXHJcbiAgICpcclxuICAgKiBOb3MgbcOpdG9kb3MgZGUgYHNhdmVgIGUgYHNhdmVOZXdgLCBhbyBpbnbDqXMgZGUgdW0gYFBPU1RgLCBzZXLDoSBkaXNwYXJhZG8gdW0gYFBVVGAuXHJcbiAgICpcclxuICAgKiBSZXNxdWlzacOnw6NvIGRpc3BhcmFkYSwgb25kZSBhIHByb3ByaWVkYWRlIGBuYW1lYCBlIGBjaXR5YCBmb3JhbSBwcmVlbmNoaWRhcyAvIGF0dWFsaXphZGFzLCBlIG8gYGlkYCBkYSB1cmwgw6kgMjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBQVVQgL2FwaS9wby1zYW1wbGVzL3YxL3Blb3BsZS8yIEhUVFAvMS4xXHJcbiAgICogIEhvc3Q6IGxvY2FsaG9zdDo0MDAwXHJcbiAgICogIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcclxuICAgKiAgQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluXHJcbiAgICogIC4uLlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogUmVxdWVzdCBwYXlsb2FkOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogeyBcIm5hbWVcIjogXCJGdWxhbm9cIiwgXCJjaXR5XCI6IFwiTWV0cm9wb2xpc1wiIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2VydmljZS1hcGknKSBzZXJ2aWNlQXBpOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUw610dWxvIGRhIHDDoWdpbmEuICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRnVuw6fDo28gb3Ugc2VydmnDp28gcXVlIHNlcsOhIGV4ZWN1dGFkbyBuYSBpbmljaWFsaXphw6fDo28gZG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIEEgcHJvcHJpZWRhZGUgYWNlaXRhIG9zIHNlZ3VpbnRlcyB0aXBvczpcclxuICAgKiAtIGBzdHJpbmdgOiAqRW5kcG9pbnQqIHVzYWRvIHBlbG8gY29tcG9uZW50ZSBwYXJhIHJlcXVpc2nDp8OjbyB2aWEgYFBPU1RgLlxyXG4gICAqIC0gYGZ1bmN0aW9uYDogTcOpdG9kbyBxdWUgc2Vyw6EgZXhlY3V0YWRvLlxyXG4gICAqXHJcbiAgICogTyByZXRvcm5vIGRlc3RhIGZ1bsOnw6NvIGRldmUgc2VyIGRvIHRpcG8gYFBvUGFnZUR5bmFtaWNFZGl0T3B0aW9uc2AsXHJcbiAgICogb25kZSBvIHVzdcOhcmlvIHBvZGVyw6EgY3VzdG9taXphciBub3ZvcyBjYW1wb3MsIGJyZWFkY3J1bWIsIHRpdGxlIGUgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogUG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBnZXRQYWdlT3B0aW9ucygpOiBQb1BhZ2VEeW5hbWljRWRpdE9wdGlvbnMge1xyXG4gICAqIHJldHVybiB7XHJcbiAgICogICBhY3Rpb25zOlxyXG4gICAqICAgICB7IGNhbmNlbDogZmFsc2UsIHNhdmU6ICdzYXZlLzppZCcsIHNhdmVOZXc6ICdzYXZlTmV3JyB9LFxyXG4gICAqICAgZmllbGRzOiBbXHJcbiAgICogICAgIHsgcHJvcGVydHk6ICdpZENhcmQnLCBncmlkQ29sdW1uczogNiB9XHJcbiAgICogICBdXHJcbiAgICogfTtcclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBQYXJhIHJlZmVyZW5jaWFyIGEgc3VhIGZ1bsOnw6NvIHV0aWxpemUgYSBwcm9wcmllZGFkZSBgYmluZGAsIHBvciBleGVtcGxvOlxyXG4gICAqIGBgYFxyXG4gICAqICBbcC1sb2FkXT1cIm9uTG9hZE9wdGlvbnMuYmluZCh0aGlzKVwiXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWxvYWQnKSBvbkxvYWQ6IHN0cmluZyB8ICgoKSA9PiBQb1BhZ2VEeW5hbWljRWRpdE9wdGlvbnMpO1xyXG5cclxuICBsaXRlcmFscztcclxuICBtb2RlbDogYW55ID0ge307XHJcblxyXG4gIC8vIGJlZm9yZVNhdmU6IHJldHVybiBib29sZWFuXHJcbiAgLy8gYWZ0ZXJTYXZlXHJcbiAgLy8gYmVmb3JlUmVtb3ZlOiByZXR1cm4gYm9vbGVhblxyXG4gIC8vIGFmdGVyUmVtb3ZlXHJcbiAgLy8gYmVmb3JlSW5zZXJ0OiA6IHJldHVybiBib29sZWFuXHJcbiAgcmVhZG9ubHkgZGV0YWlsQWN0aW9uczogUG9HcmlkUm93QWN0aW9ucyA9IHt9O1xyXG5cclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcclxuICBwcml2YXRlIF9hY3Rpb25zOiBQb1BhZ2VEeW5hbWljRWRpdEFjdGlvbnMgPSB7fTtcclxuICBwcml2YXRlIF9hdXRvUm91dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY29udHJvbEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHByaXZhdGUgX2RldGFpbEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHByaXZhdGUgX2R1cGxpY2F0ZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcml2YXRlIF9rZXlzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJpdmF0ZSBfcGFnZUFjdGlvbnM6IEFycmF5PFBvUGFnZUFjdGlvbj4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEHDp8O1ZXMgZGEgcMOhZ2luYS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtYWN0aW9ucycpIHNldCBhY3Rpb25zKHZhbHVlOiBQb1BhZ2VEeW5hbWljRWRpdEFjdGlvbnMpIHtcclxuICAgIHRoaXMuX2FjdGlvbnMgPSB0aGlzLmlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDoge307XHJcblxyXG4gICAgdGhpcy5fcGFnZUFjdGlvbnMgPSB0aGlzLmdldFBhZ2VBY3Rpb25zKHRoaXMuX2FjdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGlvbnMoKSB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLl9hY3Rpb25zIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdG9kbyBWYWxpZGFyIHJvdGFzIG5hIG3Do28gcG9pcyBzZSBleGlzdGlyIHVtYSByb3RhICcqKicgbyBjYXRjaCBkbyBuYXZpZ2F0aW9uIG7Do28gZnVuY2lvbmEuXHJcbiAgICpcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQ3JpYSBhdXRvbWF0aWNhbWVudGUgYXMgcm90YXMgZGUgZWRpw6fDo28gKG5vdm8vZHVwbGljYXRlKSBlIGRldGFsaGVzIGNhc28gYXMgYcOnw7Vlc1xyXG4gICAqIGVzdGVqYW0gZGVmaW5pZGFzIG5hcyBhw6fDtWVzLlxyXG4gICAqXHJcbiAgICogPiBQYXJhIG8gY29ycmV0byBmdW5jaW9uYW1lbnRvIG7Do28gcG9kZSBoYXZlciBuZW5odW0gcm90YSBjb3JpbmdhIChgKipgKSBlc3BlY2lmaWNhZGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1hdXRvLXJvdXRlcicpIHNldCBhdXRvUm91dGVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvUm91dGVyID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b1JvdXRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRvUm91dGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqIExpc3RhIGRvcyBjYW1wb3MgdXNhZG9zIG5hIHRhYmVsYSBlIGJ1c2NhIGF2YW7Dp2FkYS4gKi9cclxuICBASW5wdXQoJ3AtZmllbGRzJykgc2V0IGZpZWxkcyh2YWx1ZTogQXJyYXk8UG9QYWdlRHluYW1pY0VkaXRGaWVsZD4pIHtcclxuICAgIHRoaXMuX2ZpZWxkcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gWy4uLnZhbHVlXSA6IFtdO1xyXG5cclxuICAgIHRoaXMuX2tleXMgPSB0aGlzLmdldEtleXNCeUZpZWxkcyh0aGlzLl9maWVsZHMpO1xyXG4gICAgdGhpcy5fZHVwbGljYXRlcyA9IHRoaXMuZ2V0RHVwbGljYXRlc0J5RmllbGRzKHRoaXMuX2ZpZWxkcyk7XHJcblxyXG4gICAgdGhpcy5fY29udHJvbEZpZWxkcyA9IHRoaXMuZ2V0Q29udHJvbEZpZWxkcyh0aGlzLl9maWVsZHMpO1xyXG4gICAgdGhpcy5fZGV0YWlsRmllbGRzID0gdGhpcy5nZXREZXRhaWxGaWVsZHModGhpcy5fZmllbGRzKTtcclxuICB9XHJcblxyXG4gIGdldCBmaWVsZHMoKTogQXJyYXk8UG9QYWdlRHluYW1pY0VkaXRGaWVsZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBwb05vdGlmaWNhdGlvbjogUG9Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb0RpYWxvZ1NlcnZpY2U6IFBvRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9QYWdlRHluYW1pY1NlcnZpY2U6IFBvUGFnZUR5bmFtaWNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZTogUG9QYWdlQ3VzdG9taXphdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1NlcnZpY2U6IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1NlcnZpY2UsXHJcbiAgICBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4ucG9QYWdlRHluYW1pY0VkaXRMaXRlcmFsc0RlZmF1bHRbcG9Mb2NhbGVEZWZhdWx0XSxcclxuICAgICAgLi4ucG9QYWdlRHluYW1pY0VkaXRMaXRlcmFsc0RlZmF1bHRbbGFuZ3VhZ2VdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWREYXRhRnJvbUFQSSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiB7XHJcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGV0YWlsQWN0aW9uTmV3KCkge1xyXG4gICAgdGhpcy5ncmlkRGV0YWlsLmluc2VydFJvdygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGR1cGxpY2F0ZXMoKSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX2R1cGxpY2F0ZXNdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGtleXMoKSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX2tleXNdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VBY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLl9wYWdlQWN0aW9uc107XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbEZpZWxkcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250cm9sRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRldGFpbEZpZWxkcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXRhaWxGaWVsZHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREYXRhRnJvbUFQSSgpIHtcclxuICAgIGNvbnN0IHsgc2VydmljZUFwaTogc2VydmljZUFwaUZyb21Sb3V0ZSwgc2VydmljZU1ldGFkYXRhQXBpLCBzZXJ2aWNlTG9hZEFwaSB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5kYXRhO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XHJcbiAgICBjb25zdCB7IGR1cGxpY2F0ZSB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcztcclxuXHJcbiAgICBjb25zdCBvbkxvYWQgPSBzZXJ2aWNlTG9hZEFwaSB8fCB0aGlzLm9uTG9hZDtcclxuICAgIHRoaXMuc2VydmljZUFwaSA9IHNlcnZpY2VBcGlGcm9tUm91dGUgfHwgdGhpcy5zZXJ2aWNlQXBpO1xyXG5cclxuICAgIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2UuY29uZmlnU2VydmljZUFwaSh7IGVuZHBvaW50OiB0aGlzLnNlcnZpY2VBcGksIG1ldGFkYXRhOiBzZXJ2aWNlTWV0YWRhdGFBcGkgfSk7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEkID0gdGhpcy5nZXRNZXRhZGF0YShzZXJ2aWNlQXBpRnJvbVJvdXRlLCBpZCwgb25Mb2FkKTtcclxuICAgIGNvbnN0IGRhdGEkID0gdGhpcy5sb2FkRGF0YShpZCwgZHVwbGljYXRlKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChjb25jYXQobWV0YWRhdGEkLCBkYXRhJCkuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5jZWwoXHJcbiAgICBhY3Rpb25DYW5jZWw6IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1snY2FuY2VsJ10sXHJcbiAgICBhY3Rpb25CZWZvcmVDYW5jZWw6IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1snYmVmb3JlQ2FuY2VsJ11cclxuICApIHtcclxuICAgIGlmICh0aGlzLmR5bmFtaWNGb3JtICYmIHRoaXMuZHluYW1pY0Zvcm0uZm9ybS5kaXJ0eSkge1xyXG4gICAgICB0aGlzLnBvRGlhbG9nU2VydmljZS5jb25maXJtKHtcclxuICAgICAgICBtZXNzYWdlOiB0aGlzLmxpdGVyYWxzLmNhbmNlbENvbmZpcm1NZXNzYWdlLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLmxpdGVyYWxzLnBhZ2VBY3Rpb25DYW5jZWwsXHJcbiAgICAgICAgY29uZmlybTogdGhpcy5nb0JhY2suYmluZCh0aGlzLCBhY3Rpb25DYW5jZWwsIGFjdGlvbkJlZm9yZUNhbmNlbClcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdvQmFjayhhY3Rpb25DYW5jZWwsIGFjdGlvbkJlZm9yZUNhbmNlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdFVuaXF1ZUtleShpdGVtKSB7XHJcbiAgICBjb25zdCBrZXlzID0gbWFwT2JqZWN0QnlQcm9wZXJ0aWVzKGl0ZW0sIHRoaXMua2V5cyk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlc0Zyb21PYmplY3Qoa2V5cykuam9pbignfCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb0JhY2soXHJcbiAgICBhY3Rpb25DYW5jZWw6IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1snY2FuY2VsJ10sXHJcbiAgICBhY3Rpb25CZWZvcmVDYW5jZWw6IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1snYmVmb3JlQ2FuY2VsJ11cclxuICApIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLnBvUGFnZUR5bmFtaWNFZGl0QWN0aW9uc1NlcnZpY2VcclxuICAgICAgICAuYmVmb3JlQ2FuY2VsKGFjdGlvbkJlZm9yZUNhbmNlbClcclxuICAgICAgICAuc3Vic2NyaWJlKChiZWZvcmVDYW5jZWxSZXN1bHQ6IFBvUGFnZUR5bmFtaWNFZGl0QmVmb3JlQ2FuY2VsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmV4ZWN1dGVCYWNrQWN0aW9uKGFjdGlvbkNhbmNlbCwgYmVmb3JlQ2FuY2VsUmVzdWx0Py5hbGxvd0FjdGlvbiwgYmVmb3JlQ2FuY2VsUmVzdWx0Py5uZXdVcmwpO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGVjdXRlQmFja0FjdGlvbihcclxuICAgIGFjdGlvbkNhbmNlbDogUG9QYWdlRHluYW1pY0VkaXRBY3Rpb25zWydjYW5jZWwnXSxcclxuICAgIGFsbG93QWN0aW9uPzogUG9QYWdlRHluYW1pY0VkaXRCZWZvcmVDYW5jZWxbJ2FsbG93QWN0aW9uJ10sXHJcbiAgICBuZXdVcmw/OiBQb1BhZ2VEeW5hbWljRWRpdEJlZm9yZUNhbmNlbFsnbmV3VXJsJ11cclxuICApIHtcclxuICAgIGNvbnN0IGlzQWxsb3dlZEFjdGlvbiA9IHR5cGVvZiBhbGxvd0FjdGlvbiA9PT0gJ2Jvb2xlYW4nID8gYWxsb3dBY3Rpb24gOiB0cnVlO1xyXG5cclxuICAgIGlmIChpc0FsbG93ZWRBY3Rpb24pIHtcclxuICAgICAgaWYgKGFjdGlvbkNhbmNlbCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhY3Rpb25DYW5jZWwgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uQ2FuY2VsID09PSAnc3RyaW5nJyB8fCBuZXdVcmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW25ld1VybCB8fCBhY3Rpb25DYW5jZWxdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFjdGlvbkNhbmNlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRGF0YShpZCwgZHVwbGljYXRlPykge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBkdXBsaWNhdGUgPyBKU09OLnBhcnNlKGR1cGxpY2F0ZSkgOiB7fTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHt9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9QYWdlRHluYW1pY1NlcnZpY2UuZ2V0UmVzb3VyY2UoaWQpLnBpcGUoXHJcbiAgICAgIHRhcChyZXNwb25zZSA9PiAodGhpcy5tb2RlbCA9IHJlc3BvbnNlKSksXHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VBY3Rpb25zID0gW107XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE9wdGlvbnNPbkluaXRpYWxpemUob25Mb2FkOiBVcmxPclBvQ3VzdG9taXphdGlvbkZ1bmN0aW9uKSB7XHJcbiAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFBvRHluYW1pY1BhZ2VPcHRpb25zKG9uTG9hZCkucGlwZShcclxuICAgICAgICB0YXAocmVzcG9uc2VQb09wdGlvbiA9PlxyXG4gICAgICAgICAgdGhpcy5wb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZS5jaGFuZ2VPcmlnaW5hbE9wdGlvbnNUb05ld09wdGlvbnModGhpcywgcmVzcG9uc2VQb09wdGlvbilcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEVNUFRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb0R5bmFtaWNQYWdlT3B0aW9ucyhvbkxvYWQ6IFVybE9yUG9DdXN0b21pemF0aW9uRnVuY3Rpb24pOiBPYnNlcnZhYmxlPFBvUGFnZUR5bmFtaWNFZGl0T3B0aW9ucz4ge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxPcHRpb246IFBvUGFnZUR5bmFtaWNFZGl0T3B0aW9ucyA9IHtcclxuICAgICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcclxuICAgICAgYWN0aW9uczogdGhpcy5hY3Rpb25zLFxyXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXHJcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2VPcHRpb25TY2hlbWE6IFBvUGFnZUR5bmFtaWNPcHRpb25zU2NoZW1hPFBvUGFnZUR5bmFtaWNFZGl0T3B0aW9ucz4gPSB7XHJcbiAgICAgIHNjaGVtYTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAnZmllbGRzJyxcclxuICAgICAgICAgIG1lcmdlOiB0cnVlLFxyXG4gICAgICAgICAga2V5Rm9yTWVyZ2U6ICdwcm9wZXJ0eSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWVQcm9wOiAnYWN0aW9ucycsXHJcbiAgICAgICAgICBtZXJnZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICdicmVhZGNydW1iJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZVByb3A6ICd0aXRsZSdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9QYWdlQ3VzdG9taXphdGlvblNlcnZpY2UuZ2V0Q3VzdG9tT3B0aW9ucyhvbkxvYWQsIG9yaWdpbmFsT3B0aW9uLCBwYWdlT3B0aW9uU2NoZW1hKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWV0YWRhdGEoc2VydmljZUFwaUZyb21Sb3V0ZTogc3RyaW5nLCBwYXJhbUlkOiBzdHJpbmcgfCBudW1iZXIsIG9uTG9hZDogVXJsT3JQb0N1c3RvbWl6YXRpb25GdW5jdGlvbikge1xyXG4gICAgY29uc3QgdHlwZU1ldGFkYXRhID0gcGFyYW1JZCA/ICdlZGl0JyA6ICdjcmVhdGUnO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlQXBpRnJvbVJvdXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvUGFnZUR5bmFtaWNTZXJ2aWNlLmdldE1ldGFkYXRhPFBvUGFnZUR5bmFtaWNFZGl0TWV0YWRhdGE+KHR5cGVNZXRhZGF0YSkucGlwZShcclxuICAgICAgICB0YXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hdXRvUm91dGVyID0gcmVzcG9uc2UuYXV0b1JvdXRlciB8fCB0aGlzLmF1dG9Sb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSByZXNwb25zZS5hY3Rpb25zIHx8IHRoaXMuYWN0aW9ucztcclxuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IHJlc3BvbnNlLmJyZWFkY3J1bWIgfHwgdGhpcy5icmVhZGNydW1iO1xyXG4gICAgICAgICAgdGhpcy5maWVsZHMgPSByZXNwb25zZS5maWVsZHMgfHwgdGhpcy5maWVsZHM7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gcmVzcG9uc2UudGl0bGUgfHwgdGhpcy50aXRsZTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5sb2FkT3B0aW9uc09uSW5pdGlhbGl6ZShvbkxvYWQpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmxvYWRPcHRpb25zT25Jbml0aWFsaXplKG9uTG9hZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmlnYXRlVG8ocGF0aDogc3RyaW5nKSB7XHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnJlc29sdmVVcmwodGhpcy5tb2RlbCwgcGF0aCk7XHJcblxyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdXJsXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc29sdmVVbmlxdWVLZXkoaXRlbTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ10gPyB0aGlzLmZvcm1hdFVuaXF1ZUtleShpdGVtKSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzb2x2ZVVybChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgdW5pcXVlS2V5ID0gdGhpcy5mb3JtYXRVbmlxdWVLZXkoaXRlbSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvOmlkL2csIHVuaXF1ZUtleSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4ZWN1dGVTYXZlKHNhdmVSZWRpcmVjdFBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2F2ZU9wZXJhdGlvbiQgPSB0aGlzLnNhdmVPcGVyYXRpb24oKTtcclxuXHJcbiAgICByZXR1cm4gc2F2ZU9wZXJhdGlvbiQucGlwZShcclxuICAgICAgdGFwKG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgIHRoaXMucG9Ob3RpZmljYXRpb24uc3VjY2VzcyhtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG8oc2F2ZVJlZGlyZWN0UGF0aCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVNb2RlbChuZXdSZXNvdXJjZTogYW55ID0ge30pIHtcclxuICAgIGNvbnN0IGR5bmFtaWNOZ0Zvcm0gPSB0aGlzLmR5bmFtaWNGb3JtLmZvcm07XHJcblxyXG4gICAgcmVtb3ZlS2V5c1Byb3BlcnRpZXModGhpcy5rZXlzLCBuZXdSZXNvdXJjZSk7XHJcblxyXG4gICAgdGhpcy5tb2RlbCA9IHsgLi4udGhpcy5tb2RlbCwgLi4ubmV3UmVzb3VyY2UgfTtcclxuXHJcbiAgICBkeW5hbWljTmdGb3JtLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLm1vZGVsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZU9wZXJhdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmR5bmFtaWNGb3JtLmZvcm0uaW52YWxpZCkge1xyXG4gICAgICB0aGlzLnBvTm90aWZpY2F0aW9uLndhcm5pbmcodGhpcy5saXRlcmFscy5zYXZlTm90aWZpY2F0aW9uV2FybmluZyk7XHJcbiAgICAgIHJldHVybiBFTVBUWTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcbiAgICBjb25zdCBzdWNjZXNzTXNnID0gcGFyYW1JZFxyXG4gICAgICA/IHRoaXMubGl0ZXJhbHMuc2F2ZU5vdGlmaWNhdGlvblN1Y2Nlc3NVcGRhdGVcclxuICAgICAgOiB0aGlzLmxpdGVyYWxzLnNhdmVOb3RpZmljYXRpb25TdWNjZXNzU2F2ZTtcclxuXHJcbiAgICBjb25zdCBzYXZlT3BlcmF0aW9uJCA9IHBhcmFtSWRcclxuICAgICAgPyB0aGlzLnBvUGFnZUR5bmFtaWNTZXJ2aWNlLnVwZGF0ZVJlc291cmNlKHBhcmFtSWQsIHRoaXMubW9kZWwpXHJcbiAgICAgIDogdGhpcy5wb1BhZ2VEeW5hbWljU2VydmljZS5jcmVhdGVSZXNvdXJjZSh0aGlzLm1vZGVsKTtcclxuXHJcbiAgICByZXR1cm4gc2F2ZU9wZXJhdGlvbiQucGlwZShtYXAoKCkgPT4gc3VjY2Vzc01zZykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlKGFjdGlvbjogU2F2ZUFjdGlvbiwgYmVmb3JlOiAnYmVmb3JlU2F2ZScgfCAnYmVmb3JlU2F2ZU5ldycgPSAnYmVmb3JlU2F2ZScpIHtcclxuICAgIGNvbnN0IGV4ZWN1dGVPcGVyYXRpb24gPSB7XHJcbiAgICAgIGJlZm9yZVNhdmU6IHRoaXMuZXhlY3V0ZVNhdmUuYmluZCh0aGlzKSxcclxuICAgICAgYmVmb3JlU2F2ZU5ldzogdGhpcy5leGVjdXRlU2F2ZU5ldy5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVuaXF1ZUtleSA9IHRoaXMucmVzb2x2ZVVuaXF1ZUtleSh0aGlzLm1vZGVsKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5wb1BhZ2VEeW5hbWljRWRpdEFjdGlvbnNTZXJ2aWNlW2JlZm9yZV0odGhpcy5hY3Rpb25zW2JlZm9yZV0sIHVuaXF1ZUtleSwgeyAuLi50aGlzLm1vZGVsIH0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBzd2l0Y2hNYXAocmV0dXJuQmVmb3JlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3QWN0aW9uID0gcmV0dXJuQmVmb3JlPy5uZXdVcmwgPz8gYWN0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBhbGxvd0FjdGlvbiA9IHJldHVybkJlZm9yZT8uYWxsb3dBY3Rpb24gPz8gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwocmV0dXJuQmVmb3JlPy5yZXNvdXJjZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFsbG93QWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdBY3Rpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVPcGVyYXRpb25bYmVmb3JlXShuZXdBY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld0FjdGlvbih7IC4uLnRoaXMubW9kZWwgfSwgdW5pcXVlS2V5KTtcclxuICAgICAgICAgICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZVNhdmVOZXcocGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcbiAgICBjb25zdCBzYXZlT3BlcmF0aW9uJCA9IHRoaXMuc2F2ZU9wZXJhdGlvbigpO1xyXG5cclxuICAgIHJldHVybiBzYXZlT3BlcmF0aW9uJC5waXBlKFxyXG4gICAgICB0YXAobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgIHRoaXMucG9Ob3RpZmljYXRpb24uc3VjY2VzcyhtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8ocGF0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucG9Ob3RpZmljYXRpb24uc3VjY2VzcyhtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICB0aGlzLm1vZGVsID0ge307XHJcbiAgICAgICAgICB0aGlzLmR5bmFtaWNGb3JtLmZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRLZXlzQnlGaWVsZHMoZmllbGRzOiBBcnJheTxhbnk+ID0gW10pIHtcclxuICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkLmtleSA9PT0gdHJ1ZSkubWFwKGZpZWxkID0+IGZpZWxkLnByb3BlcnR5KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29udHJvbEZpZWxkcyhmaWVsZHM6IEFycmF5PGFueT4gPSBbXSkge1xyXG4gICAgcmV0dXJuIGZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQudHlwZSAhPT0gJ2RldGFpbCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREZXRhaWxGaWVsZHMoZmllbGRzOiBBcnJheTxhbnk+ID0gW10pIHtcclxuICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdkZXRhaWwnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RHVwbGljYXRlc0J5RmllbGRzKGZpZWxkczogQXJyYXk8YW55PiA9IFtdKSB7XHJcbiAgICByZXR1cm4gZmllbGRzLmZpbHRlcihmaWVsZCA9PiBmaWVsZC5kdXBsaWNhdGUgPT09IHRydWUpLm1hcChmaWVsZCA9PiBmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2VBY3Rpb25zKGFjdGlvbnM6IFBvUGFnZUR5bmFtaWNFZGl0QWN0aW9ucyA9IHt9KTogQXJyYXk8UG9QYWdlQWN0aW9uPiB7XHJcbiAgICBjb25zdCBwYWdlQWN0aW9ucyA9IFt7IGxhYmVsOiB0aGlzLmxpdGVyYWxzLnBhZ2VBY3Rpb25TYXZlLCBhY3Rpb246IHRoaXMuc2F2ZS5iaW5kKHRoaXMsIGFjdGlvbnMuc2F2ZSkgfV07XHJcblxyXG4gICAgaWYgKGFjdGlvbnMuc2F2ZU5ldykge1xyXG4gICAgICBwYWdlQWN0aW9ucy5wdXNoKHtcclxuICAgICAgICBsYWJlbDogdGhpcy5saXRlcmFscy5wYWdlQWN0aW9uU2F2ZU5ldyxcclxuICAgICAgICBhY3Rpb246IHRoaXMuc2F2ZS5iaW5kKHRoaXMsIGFjdGlvbnMuc2F2ZU5ldywgJ2JlZm9yZVNhdmVOZXcnKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9ucy5jYW5jZWwgPT09IHVuZGVmaW5lZCB8fCBhY3Rpb25zLmNhbmNlbCkge1xyXG4gICAgICBwYWdlQWN0aW9ucy5wdXNoKHtcclxuICAgICAgICBsYWJlbDogdGhpcy5saXRlcmFscy5wYWdlQWN0aW9uQ2FuY2VsLFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5jYW5jZWwuYmluZCh0aGlzLCBhY3Rpb25zLmNhbmNlbCwgdGhpcy5hY3Rpb25zLmJlZm9yZUNhbmNlbClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VBY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiPHBvLXBhZ2UtZGVmYXVsdCBbcC1hY3Rpb25zXT1cInBhZ2VBY3Rpb25zXCIgW3AtYnJlYWRjcnVtYl09XCJicmVhZGNydW1iXCIgW3AtdGl0bGVdPVwidGl0bGVcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZWw7IHRoZW4gZm9ybUZpZWxkc1RlbXBsYXRlOyBlbHNlIHJlZ2lzdGVyTm90Rm91bmRUZW1wbGF0ZVwiPiA8L25nLWNvbnRhaW5lcj5cclxuPC9wby1wYWdlLWRlZmF1bHQ+XHJcblxyXG48bmctdGVtcGxhdGUgI3JlZ2lzdGVyTm90Rm91bmRUZW1wbGF0ZT5cclxuICA8cG8td2lkZ2V0PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwby1pY29uIHBvLWljb24taW5mb1wiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwicG8tZm9udC10ZXh0LWxhcmdlXCI+XHJcbiAgICAgIHt7IGxpdGVyYWxzLnJlZ2lzdGVyTm90Rm91bmQgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L3BvLXdpZGdldD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZm9ybUZpZWxkc1RlbXBsYXRlPlxyXG4gIDxwby1keW5hbWljLWZvcm0gI2R5bmFtaWNGb3JtIFtwLWZpZWxkc109XCJjb250cm9sRmllbGRzXCIgW3AtdmFsdWVdPVwibW9kZWxcIj4gPC9wby1keW5hbWljLWZvcm0+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJkZXRhaWxGaWVsZHMubGVuZ3RoID4gMFwiIGNsYXNzPVwicG8tc20tMTJcIj5cclxuICAgIDxwby1kaXZpZGVyIFtwLWxhYmVsXT1cImRldGFpbEZpZWxkc1swXS5kaXZpZGVyXCI+PC9wby1kaXZpZGVyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwby1yb3cgcG8tbWItMlwiPlxyXG4gICAgICA8cG8tYnV0dG9uIFtwLWxhYmVsXT1cImxpdGVyYWxzLmRldGFpbEFjdGlvbk5ld1wiIChwLWNsaWNrKT1cImRldGFpbEFjdGlvbk5ldygpXCI+PC9wby1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8cG8tZ3JpZFxyXG4gICAgICAjZ3JpZERldGFpbFxyXG4gICAgICBbcC1yb3ctYWN0aW9uc109XCJkZXRhaWxBY3Rpb25zXCJcclxuICAgICAgW3AtY29sdW1uc109XCJkZXRhaWxGaWVsZHNbMF0uZGV0YWlsLmNvbHVtbnNcIlxyXG4gICAgICBbcC1kYXRhXT1cIm1vZGVsW2RldGFpbEZpZWxkc1swXS5wcm9wZXJ0eV1cIlxyXG4gICAgPlxyXG4gICAgPC9wby1ncmlkPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=