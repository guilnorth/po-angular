import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço utilizado para favoritar/desfavoritar uma url no componente po-breadcrumb.
 * A API deve retornar um objeto no formato { isFavorite: booleano, url: string }. Em ambos os métodos, GET e POST este
 * objeto deve ser retornado.
 * Ao alterar o status de favorito, a API deve retornar o objeto acima, com o novo status atualizado.
 * No método POST, existe a possibilidade de ser enviado parâmetros junto com a requisição. Neste caso, o objeto enviado
 * para a API terá o formato: { isFavorite: booleano, url: string, params: {} }, onde params é o objeto que pode ser enviado
 * junto com a requisição.
 *
 */
export class PoBreadcrumbFavoriteService {
    constructor(http) {
        this.http = http;
    }
    get url() {
        return this._url;
    }
    get bodyParams() {
        return this._bodyParams;
    }
    configService(url, params, item) {
        this._url = url;
        this._bodyParams = {
            isFavorite: false,
            url: item.link,
            params: params
        };
    }
    sendStatusFavorite(status) {
        this.bodyParams['isFavorite'] = status;
        return this.http.post(this.url, this.bodyParams);
    }
    getFavorite() {
        return this.http.get(this.url, { responseType: 'json', params: { url: this.bodyParams['url'] } });
    }
}
PoBreadcrumbFavoriteService.ɵfac = function PoBreadcrumbFavoriteService_Factory(t) { return new (t || PoBreadcrumbFavoriteService)(i0.ɵɵinject(i1.HttpClient)); };
PoBreadcrumbFavoriteService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoBreadcrumbFavoriteService, factory: PoBreadcrumbFavoriteService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBreadcrumbFavoriteService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnJlYWRjcnVtYi1mYXZvcml0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJyZWFkY3J1bWIvcG8tYnJlYWRjcnVtYi1mYXZvcml0ZS9wby1icmVhZGNydW1iLWZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSTNDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBWXRDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBUnhDLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFJRCxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2QsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQU07UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7c0dBOUJVLDJCQUEyQjtpRkFBM0IsMkJBQTJCLFdBQTNCLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBRHZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBTZXJ2acOnbyB1dGlsaXphZG8gcGFyYSBmYXZvcml0YXIvZGVzZmF2b3JpdGFyIHVtYSB1cmwgbm8gY29tcG9uZW50ZSBwby1icmVhZGNydW1iLlxyXG4gKiBBIEFQSSBkZXZlIHJldG9ybmFyIHVtIG9iamV0byBubyBmb3JtYXRvIHsgaXNGYXZvcml0ZTogYm9vbGVhbm8sIHVybDogc3RyaW5nIH0uIEVtIGFtYm9zIG9zIG3DqXRvZG9zLCBHRVQgZSBQT1NUIGVzdGVcclxuICogb2JqZXRvIGRldmUgc2VyIHJldG9ybmFkby5cclxuICogQW8gYWx0ZXJhciBvIHN0YXR1cyBkZSBmYXZvcml0bywgYSBBUEkgZGV2ZSByZXRvcm5hciBvIG9iamV0byBhY2ltYSwgY29tIG8gbm92byBzdGF0dXMgYXR1YWxpemFkby5cclxuICogTm8gbcOpdG9kbyBQT1NULCBleGlzdGUgYSBwb3NzaWJpbGlkYWRlIGRlIHNlciBlbnZpYWRvIHBhcsOibWV0cm9zIGp1bnRvIGNvbSBhIHJlcXVpc2nDp8Ojby4gTmVzdGUgY2FzbywgbyBvYmpldG8gZW52aWFkb1xyXG4gKiBwYXJhIGEgQVBJIHRlcsOhIG8gZm9ybWF0bzogeyBpc0Zhdm9yaXRlOiBib29sZWFubywgdXJsOiBzdHJpbmcsIHBhcmFtczoge30gfSwgb25kZSBwYXJhbXMgw6kgbyBvYmpldG8gcXVlIHBvZGUgc2VyIGVudmlhZG9cclxuICoganVudG8gY29tIGEgcmVxdWlzacOnw6NvLlxyXG4gKlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9CcmVhZGNydW1iRmF2b3JpdGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91cmw6IHN0cmluZztcclxuICBwcml2YXRlIF9ib2R5UGFyYW1zOiBvYmplY3Q7XHJcblxyXG4gIGdldCB1cmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl91cmw7XHJcbiAgfVxyXG5cclxuICBnZXQgYm9keVBhcmFtcygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JvZHlQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGNvbmZpZ1NlcnZpY2UodXJsLCBwYXJhbXMsIGl0ZW0pIHtcclxuICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgIHRoaXMuX2JvZHlQYXJhbXMgPSB7XHJcbiAgICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICB1cmw6IGl0ZW0ubGluayxcclxuICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZW5kU3RhdHVzRmF2b3JpdGUoc3RhdHVzKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMuYm9keVBhcmFtc1snaXNGYXZvcml0ZSddID0gc3RhdHVzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsLCB0aGlzLmJvZHlQYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmF2b3JpdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsLCB7IHJlc3BvbnNlVHlwZTogJ2pzb24nLCBwYXJhbXM6IHsgdXJsOiB0aGlzLmJvZHlQYXJhbXNbJ3VybCddIH0gfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==