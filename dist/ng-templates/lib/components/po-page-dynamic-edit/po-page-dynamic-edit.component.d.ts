import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoDialogService, PoDynamicFormComponent, PoGridComponent, PoGridRowActions, PoLanguageService, PoNotificationService, PoPageAction } from '@po-ui/ng-components';
import { PoPageDynamicEditActions } from './interfaces/po-page-dynamic-edit-actions.interface';
import { PoPageDynamicEditField } from './interfaces/po-page-dynamic-edit-field.interface';
import { PoPageDynamicService } from '../../services/po-page-dynamic/po-page-dynamic.service';
import { PoPageDynamicEditOptions } from './interfaces/po-page-dynamic-edit-options.interface';
import { PoPageCustomizationService } from '../../services/po-page-customization/po-page-customization.service';
import { PoPageDynamicEditActionsService } from './po-page-dynamic-edit-actions.service';
import * as i0 from "@angular/core";
export declare const poPageDynamicEditLiteralsDefault: {
    en: {
        cancelConfirmMessage: string;
        detailActionNew: string;
        pageActionCancel: string;
        pageActionSave: string;
        pageActionSaveNew: string;
        registerNotFound: string;
        saveNotificationSuccessSave: string;
        saveNotificationSuccessUpdate: string;
        saveNotificationWarning: string;
    };
    es: {
        cancelConfirmMessage: string;
        detailActionNew: string;
        pageActionCancel: string;
        pageActionSave: string;
        pageActionSaveNew: string;
        registerNotFound: string;
        saveNotificationSuccessSave: string;
        saveNotificationSuccessUpdate: string;
        saveNotificationWarning: string;
    };
    pt: {
        cancelConfirmMessage: string;
        detailActionNew: string;
        pageActionCancel: string;
        pageActionSave: string;
        pageActionSaveNew: string;
        registerNotFound: string;
        saveNotificationSuccessSave: string;
        saveNotificationSuccessUpdate: string;
        saveNotificationWarning: string;
    };
    ru: {
        cancelConfirmMessage: string;
        detailActionNew: string;
        pageActionCancel: string;
        pageActionSave: string;
        pageActionSaveNew: string;
        registerNotFound: string;
        saveNotificationSuccessSave: string;
        saveNotificationSuccessUpdate: string;
        saveNotificationWarning: string;
    };
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
export declare class PoPageDynamicEditComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private poNotification;
    private poDialogService;
    private poPageDynamicService;
    private poPageCustomizationService;
    private poPageDynamicEditActionsService;
    dynamicForm: PoDynamicFormComponent;
    gridDetail: PoGridComponent;
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    /**
     * @description
     *
     * Endpoint usado pelo template para requisição do recurso que será exibido para edição.
     *
     * Para as ações de `save` e `saveNew`, será feito uma requisição de criação nesse mesmo endpoint passando os valores
     * preenchidos pelo usuário via payload.
     *
     * > `POST {end-point}`
     *
     * ```
     *  <po-page-dynamic-edit
     *    [p-actions]="{ save: '/', saveNew: 'new' }"
     *    [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
     *    p-service="/api/po-samples/v1/people"
     *    ...>
     *  </po-page-dynamic-edit>
     * ```
     *
     * Resquisição disparada, onde a propriedade `name` e `city` foram preenchidas:
     *
     * ```
     *  POST /api/po-samples/v1/people HTTP/1.1
     *  Host: localhost:4000
     *  Connection: keep-alive
     *  Accept: application/json, text/plain
     *  ...
     * ```
     *
     * Request payload:
     *
     * ```
     * { "name": "Fulano", "city": "Smallville" }
     * ```
     *
     * Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `id`.
     *
     * Exemplo de configuração de rota:
     *
     * ```
     *  RouterModule.forRoot([
     *    ...
     *    { path: 'edit/:id', component: PersonEditComponent },
     *    ...
     *  ],
     * ```
     *
     * Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.
     *
     * > `GET {end-point}/{id}`
     *
     * Nos métodos de `save` e `saveNew`, ao invés de um `POST`, será disparado um `PUT`.
     *
     * Resquisição disparada, onde a propriedade `name` e `city` foram preenchidas / atualizadas, e o `id` da url é 2:
     *
     * ```
     *  PUT /api/po-samples/v1/people/2 HTTP/1.1
     *  Host: localhost:4000
     *  Connection: keep-alive
     *  Accept: application/json, text/plain
     *  ...
     * ```
     *
     * Request payload:
     *
     * ```
     * { "name": "Fulano", "city": "Metropolis" }
     * ```
     */
    serviceApi: string;
    /** Título da página. */
    title: string;
    /**
     * Função ou serviço que será executado na inicialização do componente.
     *
     * A propriedade aceita os seguintes tipos:
     * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
     * - `function`: Método que será executado.
     *
     * O retorno desta função deve ser do tipo `PoPageDynamicEditOptions`,
     * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
     *
     * Por exemplo:
     *
     * ```
     * getPageOptions(): PoPageDynamicEditOptions {
     * return {
     *   actions:
     *     { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
     *   fields: [
     *     { property: 'idCard', gridColumns: 6 }
     *   ]
     * };
     * }
     *
     * ```
     * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
     * ```
     *  [p-load]="onLoadOptions.bind(this)"
     * ```
     */
    onLoad: string | (() => PoPageDynamicEditOptions);
    literals: any;
    model: any;
    readonly detailActions: PoGridRowActions;
    private subscriptions;
    private _actions;
    private _autoRouter;
    private _controlFields;
    private _detailFields;
    private _duplicates;
    private _fields;
    private _keys;
    private _pageActions;
    /**
     * @optional
     *
     * @description
     *
     * Ações da página.
     */
    set actions(value: PoPageDynamicEditActions);
    get actions(): PoPageDynamicEditActions;
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
    set autoRouter(value: boolean);
    get autoRouter(): boolean;
    /** Lista dos campos usados na tabela e busca avançada. */
    set fields(value: Array<PoPageDynamicEditField>);
    get fields(): Array<PoPageDynamicEditField>;
    constructor(router: Router, activatedRoute: ActivatedRoute, poNotification: PoNotificationService, poDialogService: PoDialogService, poPageDynamicService: PoPageDynamicService, poPageCustomizationService: PoPageCustomizationService, poPageDynamicEditActionsService: PoPageDynamicEditActionsService, languageService: PoLanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    detailActionNew(): void;
    get duplicates(): any[];
    get keys(): any[];
    get pageActions(): PoPageAction[];
    get controlFields(): any[];
    get detailFields(): any[];
    private loadDataFromAPI;
    private cancel;
    private formatUniqueKey;
    private goBack;
    private executeBackAction;
    private loadData;
    private loadOptionsOnInitialize;
    private getPoDynamicPageOptions;
    private getMetadata;
    private navigateTo;
    private resolveUniqueKey;
    private resolveUrl;
    private executeSave;
    private updateModel;
    private saveOperation;
    private save;
    private executeSaveNew;
    private getKeysByFields;
    private getControlFields;
    private getDetailFields;
    private getDuplicatesByFields;
    private getPageActions;
    private isObject;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageDynamicEditComponent, "po-page-dynamic-edit", never, { "breadcrumb": "p-breadcrumb"; "serviceApi": "p-service-api"; "title": "p-title"; "onLoad": "p-load"; "actions": "p-actions"; "autoRouter": "p-auto-router"; "fields": "p-fields"; }, {}, never, never, false>;
}
