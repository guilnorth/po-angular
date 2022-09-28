import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoHttpRequestType } from './po-http-request-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço para execução de requisições HTTP.
 */
export class PoHttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Constrói uma requisição HTTP personalizada.
     *
     * @param {PoHttpRequestData} poHttpOperationData Parâmetros para a construção
     * da requisição.
     */
    createRequest(poHttpOperationData) {
        const httpHeaders = this.createHttpHeaders(poHttpOperationData.headers);
        return this.httpClient.request(poHttpOperationData.method, poHttpOperationData.url, {
            observe: 'response',
            headers: httpHeaders,
            body: poHttpOperationData.body
        });
    }
    /**
     * Constrói uma requisição com o método `delete`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    delete(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.DELETE,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `get`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    get(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.GET,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `head`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    head(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.HEAD,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `options`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    options(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.OPTIONS,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `patch`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    patch(url, body, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.PATCH,
            headers: httpHeaders,
            body: body
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `post`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    post(url, body, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.POST,
            headers: httpHeaders,
            body: body
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `put`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    put(url, body, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.PUT,
            headers: httpHeaders,
            body: body
        };
        return this.createRequest(requestData);
    }
    createHttpHeaders(poHttpOperationHeaders) {
        let httpHeaders = new HttpHeaders();
        if (poHttpOperationHeaders && poHttpOperationHeaders.length > 0) {
            poHttpOperationHeaders.forEach(poHttpHeader => (httpHeaders = httpHeaders.append(poHttpHeader.name, poHttpHeader.value)));
        }
        return httpHeaders;
    }
}
PoHttpClientService.ɵfac = function PoHttpClientService_Factory(t) { return new (t || PoHttpClientService)(i0.ɵɵinject(i1.HttpClient)); };
PoHttpClientService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoHttpClientService, factory: PoHttpClientService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpClientService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N5bmMvc3JjL2xpYi9zZXJ2aWNlcy9wby1odHRwLWNsaWVudC9wby1odHRwLWNsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRWhFOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFOUM7Ozs7O09BS0c7SUFDSCxhQUFhLENBQUMsbUJBQXNDO1FBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7WUFDbEYsT0FBTyxFQUFFLFVBQVU7WUFDbkIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsSUFBSSxFQUFFLG1CQUFtQixDQUFDLElBQUk7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLEdBQVcsRUFBRSxXQUF1QztRQUN6RCxNQUFNLFdBQVcsR0FBc0I7WUFDckMsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsaUJBQWlCLENBQUMsTUFBTTtZQUNoQyxPQUFPLEVBQUUsV0FBVztTQUNyQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEdBQUcsQ0FBQyxHQUFXLEVBQUUsV0FBdUM7UUFDdEQsTUFBTSxXQUFXLEdBQXNCO1lBQ3JDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLGlCQUFpQixDQUFDLEdBQUc7WUFDN0IsT0FBTyxFQUFFLFdBQVc7U0FDckIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFJLENBQUMsR0FBVyxFQUFFLFdBQXVDO1FBQ3ZELE1BQU0sV0FBVyxHQUFzQjtZQUNyQyxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQzlCLE9BQU8sRUFBRSxXQUFXO1NBQ3JCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsT0FBTyxDQUFDLEdBQVcsRUFBRSxXQUF1QztRQUMxRCxNQUFNLFdBQVcsR0FBc0I7WUFDckMsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsaUJBQWlCLENBQUMsT0FBTztZQUNqQyxPQUFPLEVBQUUsV0FBVztTQUNyQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsR0FBVyxFQUFFLElBQVUsRUFBRSxXQUF1QztRQUNwRSxNQUFNLFdBQVcsR0FBc0I7WUFDckMsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsaUJBQWlCLENBQUMsS0FBSztZQUMvQixPQUFPLEVBQUUsV0FBVztZQUNwQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksQ0FBQyxHQUFXLEVBQUUsSUFBVSxFQUFFLFdBQXVDO1FBQ25FLE1BQU0sV0FBVyxHQUFzQjtZQUNyQyxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQzlCLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFVLEVBQUUsV0FBdUM7UUFDbEUsTUFBTSxXQUFXLEdBQXNCO1lBQ3JDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLGlCQUFpQixDQUFDLEdBQUc7WUFDN0IsT0FBTyxFQUFFLFdBQVc7WUFDcEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxzQkFBc0I7UUFDOUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUVwQyxJQUFJLHNCQUFzQixJQUFJLHNCQUFzQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0Qsc0JBQXNCLENBQUMsT0FBTyxDQUM1QixZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUYsQ0FBQztTQUNIO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7c0ZBN0lVLG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQb0h0dHBIZWFkZXJPcHRpb24gfSBmcm9tICcuL2ludGVyZmFjZXMvcG8taHR0cC1oZWFkZXItb3B0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvSHR0cFJlcXVlc3REYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWh0dHAtcmVxdWVzdC1kYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvSHR0cFJlcXVlc3RUeXBlIH0gZnJvbSAnLi9wby1odHRwLXJlcXVlc3QtdHlwZS5lbnVtJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFNlcnZpw6dvIHBhcmEgZXhlY3XDp8OjbyBkZSByZXF1aXNpw6fDtWVzIEhUVFAuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0h0dHBDbGllbnRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0csOzaSB1bWEgcmVxdWlzacOnw6NvIEhUVFAgcGVyc29uYWxpemFkYS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UG9IdHRwUmVxdWVzdERhdGF9IHBvSHR0cE9wZXJhdGlvbkRhdGEgUGFyw6JtZXRyb3MgcGFyYSBhIGNvbnN0cnXDp8Ojb1xyXG4gICAqIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKi9cclxuICBjcmVhdGVSZXF1ZXN0KHBvSHR0cE9wZXJhdGlvbkRhdGE6IFBvSHR0cFJlcXVlc3REYXRhKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xyXG4gICAgY29uc3QgaHR0cEhlYWRlcnMgPSB0aGlzLmNyZWF0ZUh0dHBIZWFkZXJzKHBvSHR0cE9wZXJhdGlvbkRhdGEuaGVhZGVycyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0KHBvSHR0cE9wZXJhdGlvbkRhdGEubWV0aG9kLCBwb0h0dHBPcGVyYXRpb25EYXRhLnVybCwge1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICBoZWFkZXJzOiBodHRwSGVhZGVycyxcclxuICAgICAgYm9keTogcG9IdHRwT3BlcmF0aW9uRGF0YS5ib2R5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0csOzaSB1bWEgcmVxdWlzacOnw6NvIGNvbSBvIG3DqXRvZG8gYGRlbGV0ZWAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBkYSByZXF1aXNpw6fDo28uXHJcbiAgICogQHBhcmFtIHtBcnJheTxQb0hlYWRlck9wdGlvbj59IGh0dHBIZWFkZXJzIENhYmXDp2FsaG9zIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKi9cclxuICBkZWxldGUodXJsOiBzdHJpbmcsIGh0dHBIZWFkZXJzPzogQXJyYXk8UG9IdHRwSGVhZGVyT3B0aW9uPikge1xyXG4gICAgY29uc3QgcmVxdWVzdERhdGE6IFBvSHR0cFJlcXVlc3REYXRhID0ge1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgbWV0aG9kOiBQb0h0dHBSZXF1ZXN0VHlwZS5ERUxFVEUsXHJcbiAgICAgIGhlYWRlcnM6IGh0dHBIZWFkZXJzXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChyZXF1ZXN0RGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHLDs2kgdW1hIHJlcXVpc2nDp8OjbyBjb20gbyBtw6l0b2RvIGBnZXRgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgZGEgcmVxdWlzacOnw6NvLlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8UG9IZWFkZXJPcHRpb24+fSBodHRwSGVhZGVycyBDYWJlw6dhbGhvcyBkYSByZXF1aXNpw6fDo28uXHJcbiAgICovXHJcbiAgZ2V0KHVybDogc3RyaW5nLCBodHRwSGVhZGVycz86IEFycmF5PFBvSHR0cEhlYWRlck9wdGlvbj4pIHtcclxuICAgIGNvbnN0IHJlcXVlc3REYXRhOiBQb0h0dHBSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogUG9IdHRwUmVxdWVzdFR5cGUuR0VULFxyXG4gICAgICBoZWFkZXJzOiBodHRwSGVhZGVyc1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3Ryw7NpIHVtYSByZXF1aXNpw6fDo28gY29tIG8gbcOpdG9kbyBgaGVhZGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBkYSByZXF1aXNpw6fDo28uXHJcbiAgICogQHBhcmFtIHtBcnJheTxQb0hlYWRlck9wdGlvbj59IGh0dHBIZWFkZXJzIENhYmXDp2FsaG9zIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKi9cclxuICBoZWFkKHVybDogc3RyaW5nLCBodHRwSGVhZGVycz86IEFycmF5PFBvSHR0cEhlYWRlck9wdGlvbj4pIHtcclxuICAgIGNvbnN0IHJlcXVlc3REYXRhOiBQb0h0dHBSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogUG9IdHRwUmVxdWVzdFR5cGUuSEVBRCxcclxuICAgICAgaGVhZGVyczogaHR0cEhlYWRlcnNcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3REYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0csOzaSB1bWEgcmVxdWlzacOnw6NvIGNvbSBvIG3DqXRvZG8gYG9wdGlvbnNgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgZGEgcmVxdWlzacOnw6NvLlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8UG9IZWFkZXJPcHRpb24+fSBodHRwSGVhZGVycyBDYWJlw6dhbGhvcyBkYSByZXF1aXNpw6fDo28uXHJcbiAgICovXHJcbiAgb3B0aW9ucyh1cmw6IHN0cmluZywgaHR0cEhlYWRlcnM/OiBBcnJheTxQb0h0dHBIZWFkZXJPcHRpb24+KSB7XHJcbiAgICBjb25zdCByZXF1ZXN0RGF0YTogUG9IdHRwUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBtZXRob2Q6IFBvSHR0cFJlcXVlc3RUeXBlLk9QVElPTlMsXHJcbiAgICAgIGhlYWRlcnM6IGh0dHBIZWFkZXJzXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChyZXF1ZXN0RGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHLDs2kgdW1hIHJlcXVpc2nDp8OjbyBjb20gbyBtw6l0b2RvIGBwYXRjaGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBkYSByZXF1aXNpw6fDo28uXHJcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgQ29ycG8gZGEgcmVxdWlzacOnw6NvLlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8UG9IZWFkZXJPcHRpb24+fSBodHRwSGVhZGVycyBDYWJlw6dhbGhvcyBkYSByZXF1aXNpw6fDo28uXHJcbiAgICovXHJcbiAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk/OiBhbnksIGh0dHBIZWFkZXJzPzogQXJyYXk8UG9IdHRwSGVhZGVyT3B0aW9uPikge1xyXG4gICAgY29uc3QgcmVxdWVzdERhdGE6IFBvSHR0cFJlcXVlc3REYXRhID0ge1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgbWV0aG9kOiBQb0h0dHBSZXF1ZXN0VHlwZS5QQVRDSCxcclxuICAgICAgaGVhZGVyczogaHR0cEhlYWRlcnMsXHJcbiAgICAgIGJvZHk6IGJvZHlcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3REYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0csOzaSB1bWEgcmVxdWlzacOnw6NvIGNvbSBvIG3DqXRvZG8gYHBvc3RgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgZGEgcmVxdWlzacOnw6NvLlxyXG4gICAqIEBwYXJhbSB7YW55fSBib2R5IENvcnBvIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKiBAcGFyYW0ge0FycmF5PFBvSGVhZGVyT3B0aW9uPn0gaHR0cEhlYWRlcnMgQ2FiZcOnYWxob3MgZGEgcmVxdWlzacOnw6NvLlxyXG4gICAqL1xyXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk/OiBhbnksIGh0dHBIZWFkZXJzPzogQXJyYXk8UG9IdHRwSGVhZGVyT3B0aW9uPikge1xyXG4gICAgY29uc3QgcmVxdWVzdERhdGE6IFBvSHR0cFJlcXVlc3REYXRhID0ge1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgbWV0aG9kOiBQb0h0dHBSZXF1ZXN0VHlwZS5QT1NULFxyXG4gICAgICBoZWFkZXJzOiBodHRwSGVhZGVycyxcclxuICAgICAgYm9keTogYm9keVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3Ryw7NpIHVtYSByZXF1aXNpw6fDo28gY29tIG8gbcOpdG9kbyBgcHV0YC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKiBAcGFyYW0ge2FueX0gYm9keSBDb3JwbyBkYSByZXF1aXNpw6fDo28uXHJcbiAgICogQHBhcmFtIHtBcnJheTxQb0hlYWRlck9wdGlvbj59IGh0dHBIZWFkZXJzIENhYmXDp2FsaG9zIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKi9cclxuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk/OiBhbnksIGh0dHBIZWFkZXJzPzogQXJyYXk8UG9IdHRwSGVhZGVyT3B0aW9uPikge1xyXG4gICAgY29uc3QgcmVxdWVzdERhdGE6IFBvSHR0cFJlcXVlc3REYXRhID0ge1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgbWV0aG9kOiBQb0h0dHBSZXF1ZXN0VHlwZS5QVVQsXHJcbiAgICAgIGhlYWRlcnM6IGh0dHBIZWFkZXJzLFxyXG4gICAgICBib2R5OiBib2R5XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIdHRwSGVhZGVycyhwb0h0dHBPcGVyYXRpb25IZWFkZXJzKSB7XHJcbiAgICBsZXQgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHJcbiAgICBpZiAocG9IdHRwT3BlcmF0aW9uSGVhZGVycyAmJiBwb0h0dHBPcGVyYXRpb25IZWFkZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcG9IdHRwT3BlcmF0aW9uSGVhZGVycy5mb3JFYWNoKFxyXG4gICAgICAgIHBvSHR0cEhlYWRlciA9PiAoaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5hcHBlbmQocG9IdHRwSGVhZGVyLm5hbWUsIHBvSHR0cEhlYWRlci52YWx1ZSkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGh0dHBIZWFkZXJzO1xyXG4gIH1cclxufVxyXG4iXX0=