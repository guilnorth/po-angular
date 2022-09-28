import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoHttpHeaderOption } from './interfaces/po-http-header-option.interface';
import { PoHttpRequestData } from './interfaces/po-http-request-data.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço para execução de requisições HTTP.
 */
export declare class PoHttpClientService {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Constrói uma requisição HTTP personalizada.
     *
     * @param {PoHttpRequestData} poHttpOperationData Parâmetros para a construção
     * da requisição.
     */
    createRequest(poHttpOperationData: PoHttpRequestData): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `delete`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    delete(url: string, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `get`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    get(url: string, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `head`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    head(url: string, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `options`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    options(url: string, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `patch`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    patch(url: string, body?: any, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `post`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    post(url: string, body?: any, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    /**
     * Constrói uma requisição com o método `put`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    put(url: string, body?: any, httpHeaders?: Array<PoHttpHeaderOption>): Observable<HttpResponse<Object>>;
    private createHttpHeaders;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoHttpClientService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoHttpClientService>;
}
