import { OnDestroy, OnInit } from '@angular/core';
import { PoBreadcrumbItem } from './../po-breadcrumb-item.interface';
import { PoBreadcrumbFavoriteService } from './po-breadcrumb-favorite.service';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
export declare const PoBreadcrumbLiterals: Object;
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que renderiza o serviço de favoritar do po-breadcrumb.
 */
export declare class PoBreadcrumbFavoriteComponent implements OnInit, OnDestroy {
    private service;
    private languageService;
    favoriteService: string;
    itemActive: PoBreadcrumbItem;
    paramsService: object;
    favorite: boolean;
    literals: any;
    private getSubscription;
    private setSubscription;
    constructor(service: PoBreadcrumbFavoriteService, languageService: PoLanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleFavoriteAction(): void;
    private getStatusFavorite;
    private setStatusFavorite;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoBreadcrumbFavoriteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoBreadcrumbFavoriteComponent, "po-breadcrumb-favorite", never, { "favoriteService": "p-favorite-service"; "itemActive": "p-item-active"; "paramsService": "p-params-service"; }, {}, never, never, false>;
}
