import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PoBreadcrumb, PoDialogService, PoLanguageService, PoNotificationService, PoPageAction } from '@po-ui/ng-components';
import { PoPageDynamicDetailActions } from './interfaces/po-page-dynamic-detail-actions.interface';
import { PoPageDynamicDetailField } from './interfaces/po-page-dynamic-detail-field.interface';
import { PoPageDynamicService } from '../../services/po-page-dynamic/po-page-dynamic.service';
import { PoPageDynamicDetailActionsService } from './po-page-dynamic-detail-actions.service';
import { PoPageDynamicDetailOptions } from './interfaces/po-page-dynamic-detail-options.interface';
import { PoPageCustomizationService } from './../../services/po-page-customization/po-page-customization.service';
import * as i0 from "@angular/core";
export declare const poPageDynamicDetailLiteralsDefault: {
    en: {
        pageActionEdit: string;
        pageActionRemove: string;
        pageActionBack: string;
        confirmRemoveTitle: string;
        confirmRemoveMessage: string;
        removeNotificationSuccess: string;
        registerNotFound: string;
    };
    es: {
        pageActionEdit: string;
        pageActionRemove: string;
        pageActionBack: string;
        confirmRemoveTitle: string;
        confirmRemoveMessage: string;
        removeNotificationSuccess: string;
        registerNotFound: string;
    };
    pt: {
        pageActionEdit: string;
        pageActionRemove: string;
        pageActionBack: string;
        confirmRemoveTitle: string;
        confirmRemoveMessage: string;
        removeNotificationSuccess: string;
        registerNotFound: string;
    };
    ru: {
        pageActionEdit: string;
        pageActionRemove: string;
        pageActionBack: string;
        confirmRemoveTitle: string;
        confirmRemoveMessage: string;
        removeNotificationSuccess: string;
        registerNotFound: string;
    };
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
export declare class PoPageDynamicDetailComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private poNotification;
    private poDialogService;
    private poPageDynamicService;
    private poPageDynamicDetailActionsService;
    private poPageCustomizationService;
    /** Objeto com propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    /**
     * Função ou serviço que será executado na inicialização do componente.
     *
     * A propriedade aceita os seguintes tipos:
     * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
     * - `function`: Método que será executado.
     *
     * O retorno desta função deve ser do tipo `PoPageDynamicDetailOptions`,
     * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
     *
     * Por exemplo:
     *
     * ```
     * getPageOptions(): PoPageDynamicDetailOptions {
     * return {
     *   actions:
     *     { new: 'new', edit: 'edit/:id', remove: true },
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
    onLoad: string | (() => PoPageDynamicDetailOptions);
    /** Título da página. */
    title: string;
    /**
     * @description
     *
     * Endpoint usado pelo template para requisição do recurso que serão exibido.
     *
     * Caso a ação `remove` estiver configurada, será feito uma requisição de exclusão nesse mesmo endpoint passando os campos
     * setados como `key: true`.
     *
     * > `DELETE {end-point}/{keys}`
     *
     * ```
     *  <po-page-dynamic-detail
     *    [p-actions]="{ remove: '/' }"
     *    [p-fields]="[ { property: 'id', key: true } ]"
     *    p-service="/api/po-samples/v1/people"
     *    ...>
     *  </po-page-dynamic-detail>
     * ```
     *
     * Resquisição disparada, onde a propriedade `id` é igual a 2:
     *
     * ```
     *  DELETE /api/po-samples/v1/people/2 HTTP/1.1
     *  Host: localhost:4000
     *  Connection: keep-alive
     *  Accept: application/json, text/plain
     *  ...
     * ```
     *
     * > Caso esteja usando metadados com o template, será disparado uma requisição na inicialização do template para buscar
     * > os metadados da página passando o tipo do metadado esperado e a versão cacheada pelo browser.
     * >
     * > `GET {end-point}/metadata?type=detail&version={version}`
     */
    serviceApi: string;
    literals: any;
    model: any;
    private subscriptions;
    private _actions;
    private _autoRouter;
    private _duplicates;
    private _fields;
    private _keys;
    private _pageActions;
    /**
     * @optional
     *
     * @description
     *
     * Define as ações da página de acordo com a interface `PoPageDynamicDetailActions`.
     */
    set actions(value: PoPageDynamicDetailActions);
    get actions(): PoPageDynamicDetailActions;
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
    /** Lista dos campos exibidos na página. */
    set fields(value: Array<PoPageDynamicDetailField>);
    get fields(): Array<PoPageDynamicDetailField>;
    constructor(router: Router, activatedRoute: ActivatedRoute, poNotification: PoNotificationService, poDialogService: PoDialogService, poPageDynamicService: PoPageDynamicService, poPageDynamicDetailActionsService: PoPageDynamicDetailActionsService, poPageCustomizationService: PoPageCustomizationService, languageService: PoLanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get duplicates(): any[];
    get keys(): any[];
    get pageActions(): PoPageAction[];
    private remove;
    private confirmRemove;
    private executeRemove;
    private formatUniqueKey;
    private goBack;
    private executeBackAction;
    private loadData;
    private setUndefinedToModelAndActions;
    private getMetadata;
    private navigateTo;
    private openEdit;
    private executeEditAction;
    private openEditUrl;
    private resolveUrl;
    private getPageActions;
    private getKeysByFields;
    private getDuplicatesByFields;
    private isObject;
    private loadDataFromAPI;
    private loadOptionsOnInitialize;
    private getPoDynamicPageOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageDynamicDetailComponent, "po-page-dynamic-detail", never, { "breadcrumb": "p-breadcrumb"; "onLoad": "p-load"; "title": "p-title"; "serviceApi": "p-service-api"; "actions": "p-actions"; "autoRouter": "p-auto-router"; "fields": "p-fields"; }, {}, never, never, false>;
}
