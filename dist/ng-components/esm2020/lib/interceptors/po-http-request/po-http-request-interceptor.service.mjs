import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PoLoadingOverlayComponent } from '../../components/po-loading/po-loading-overlay/po-loading-overlay.component';
import * as i0 from "@angular/core";
import * as i1 from "./po-http-request-control-service";
import * as i2 from "../../services/po-component-injector/po-component-injector.service";
const noCountPendingRequests = 'X-PO-No-Count-Pending-Requests';
const screenLock = 'X-PO-Screen-Lock';
/**
 * @description
 *
 * O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.
 *
 * Existe a possibilidade de não efetuar a contabilização das requisições pendentes, utilizando o parâmetro
 * `X-PO-No-Count-Pending-Requests`. Para isso deve ser informado no cabeçalho da requisição com o valor `'true'`,
 * por exemplo:
 *
 * ```
 * ...
 *  const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };
 *
 *  this.http.get(`/customers/1`, { headers: headers });
 * ...
 *
 * ```
 * Para obter a quantidade de requisições pendentes, deve inscrever-se no método `getCountPendingRequests` do
 * serviço `PoHttpRequestInterceptorService`, com isso, ao realizar requisições utilizando `HttpClient`,
 * será retornado a quantidade de requisições pendentes.
 *
 * Também existe a possibildade de travar a tela e mostrar uma imagem de _loading_ durante o processamento de uma requisição
 * deve-se passar o parâmetro `X-PO-Screen-Lock` no cabeçalho da requisição com valor `'true'`.
 *
 * por exemplo:
 *
 * ```
 * ...
 *  const headers = { 'X-PO-Screen-Lock': 'true' };
 *
 *  this.http.get(`/customers/1`, { headers: headers });
 * ...
 *
 * ```
 * > Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.
 *
 * Ao importar o módulo `PoModule` na aplicação, o `po-http-request-interceptor` é automaticamente configurado sem a necessidade
 * de qualquer configuração extra.
 *
 *
 * Segue abaixo um exemplo de uso:
 *
 * ```
 * import { HttpClient } from '@angular/common/http';
 *
 * ...
 *
 * @Injectable()
 * export class CustomersService {
 *
 *  headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 *  pendingRequests: number = 0;
 *  subscription: Subscription;
 *
 *  constructor(
 *    private http: HttpClient,
 *    private httpRequestInterceptor: PoHttpRequestInterceptorService) { }
 *
 *  ngOnDestroy(): void {
 *    this.subscription.unsubscribe();
 *  }
 *
 *  ngOnInit(): void {
 *    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
 *      this.pendingRequests = data;
 *    });
 *  }
 *
 *  getCustomers() {
 *    return this.http.get(`/customers/1`, { headers: headers });
 *  }
 *
 *  ...
 *
 * }
 * ```
 *
 * @example
 * <example name='po-http-request-interceptor-labs' title='PO Http Request Interceptor Labs'>
 *  <file name='sample-po-http-request-interceptor-labs.component.ts'> </file>
 *  <file name='sample-po-http-request-interceptor-labs.component.html'> </file>
 * </example>
 */
export class PoHttpRequestInterceptorService {
    constructor(controlHttpRequest, poComponentInjector) {
        this.controlHttpRequest = controlHttpRequest;
        this.poComponentInjector = poComponentInjector;
        this.loadingOverlayComponent = undefined;
        this.pendingRequests = 0;
        this.overlayRequests = 0;
    }
    intercept(request, next) {
        const requestClone = request.clone();
        request = this.requestCloneWithoutHeaderParam([noCountPendingRequests, screenLock], request);
        this.setCountPendingRequests(true, requestClone);
        this.setCountOverlayRequests(true, requestClone);
        return next.handle(request).pipe(finalize(() => {
            this.setCountPendingRequests(false, requestClone);
            this.setCountOverlayRequests(false, requestClone);
        }));
    }
    getCountPendingRequests() {
        return this.controlHttpRequest.getControlHttpRequest();
    }
    buildLoading() {
        if (!this.loadingOverlayComponent) {
            this.loadingOverlayComponent = this.poComponentInjector.createComponentInApplication(PoLoadingOverlayComponent);
            this.loadingOverlayComponent.instance.screenLock = true;
            this.loadingOverlayComponent.instance.changeDetector.detectChanges();
        }
    }
    destroyLoading() {
        if (this.loadingOverlayComponent) {
            this.poComponentInjector.destroyComponentInApplication(this.loadingOverlayComponent);
            this.loadingOverlayComponent = undefined;
        }
    }
    requestCloneWithoutHeaderParam(headersParams, request) {
        let isRequestClone = false;
        headersParams.forEach(headerParam => {
            if (request.headers.has(headerParam)) {
                request.headers.delete(headerParam);
                isRequestClone = true;
            }
        });
        return isRequestClone ? request.clone({ headers: request.headers }) : request;
    }
    setCountPendingRequests(isIncrement, request) {
        const hasCountPendingRequestHeaderParam = request.headers.has(noCountPendingRequests);
        const headerParam = request.headers.get(noCountPendingRequests);
        if (hasCountPendingRequestHeaderParam && headerParam.toString().toLowerCase() === 'true') {
            return;
        }
        this.pendingRequests += isIncrement ? 1 : -1;
        this.controlHttpRequest.send(this.pendingRequests);
    }
    setCountOverlayRequests(isIncrement, request) {
        const hasOverlayRequestHeaderParam = request.headers.has(screenLock);
        if (hasOverlayRequestHeaderParam) {
            const headerParam = request.headers.get(screenLock);
            if (headerParam.toString().toLowerCase() === 'false') {
                return;
            }
            this.overlayRequests += isIncrement ? 1 : -1;
            this.overlayRequests > 0 ? this.buildLoading() : this.destroyLoading();
        }
    }
}
PoHttpRequestInterceptorService.ɵfac = function PoHttpRequestInterceptorService_Factory(t) { return new (t || PoHttpRequestInterceptorService)(i0.ɵɵinject(i1.PoHttpRequesControltService), i0.ɵɵinject(i2.PoComponentInjectorService)); };
PoHttpRequestInterceptorService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoHttpRequestInterceptorService, factory: PoHttpRequestInterceptorService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpRequestInterceptorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PoHttpRequesControltService }, { type: i2.PoComponentInjectorService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1yZXF1ZXN0LWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2ludGVyY2VwdG9ycy9wby1odHRwLXJlcXVlc3QvcG8taHR0cC1yZXF1ZXN0LWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDOzs7O0FBR3hILE1BQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFDaEUsTUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUM7QUFFdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrRkc7QUFJSCxNQUFNLE9BQU8sK0JBQStCO0lBTTFDLFlBQ1Usa0JBQStDLEVBQy9DLG1CQUErQztRQUQvQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTZCO1FBQy9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFQakQsNEJBQXVCLEdBQTRDLFNBQVMsQ0FBQztRQUU3RSxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixvQkFBZSxHQUFXLENBQUMsQ0FBQztJQUtqQyxDQUFDO0lBRUosU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLE9BQU8sR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU3RixJQUFJLENB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LENBQUMsQ0FBQztZQUVwRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7Z0JBQ3BELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxlQUFlLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4RTtJQUNILENBQUM7OzhHQXBGVSwrQkFBK0I7cUZBQS9CLCtCQUErQixXQUEvQiwrQkFBK0IsbUJBRjlCLE1BQU07dUZBRVAsK0JBQStCO2NBSDNDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbXBvbmVudEluamVjdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWNvbXBvbmVudC1pbmplY3Rvci9wby1jb21wb25lbnQtaW5qZWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvTG9hZGluZ092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BvLWxvYWRpbmcvcG8tbG9hZGluZy1vdmVybGF5L3BvLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb0h0dHBSZXF1ZXNDb250cm9sdFNlcnZpY2UgfSBmcm9tICcuL3BvLWh0dHAtcmVxdWVzdC1jb250cm9sLXNlcnZpY2UnO1xyXG5cclxuY29uc3Qgbm9Db3VudFBlbmRpbmdSZXF1ZXN0cyA9ICdYLVBPLU5vLUNvdW50LVBlbmRpbmctUmVxdWVzdHMnO1xyXG5jb25zdCBzY3JlZW5Mb2NrID0gJ1gtUE8tU2NyZWVuLUxvY2snO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIHNlcnZpw6dvIFBPIEh0dHAgUmVxdWVzdCBJbnRlcmNlcHRvciByZWFsaXphIGEgY29udGFiaWxpemHDp8OjbyBkZSByZXF1aXNpw6fDtWVzIHBlbmRlbnRlcyBuYSBhcGxpY2HDp8Ojby5cclxuICpcclxuICogRXhpc3RlIGEgcG9zc2liaWxpZGFkZSBkZSBuw6NvIGVmZXR1YXIgYSBjb250YWJpbGl6YcOnw6NvIGRhcyByZXF1aXNpw6fDtWVzIHBlbmRlbnRlcywgdXRpbGl6YW5kbyBvIHBhcsOibWV0cm9cclxuICogYFgtUE8tTm8tQ291bnQtUGVuZGluZy1SZXF1ZXN0c2AuIFBhcmEgaXNzbyBkZXZlIHNlciBpbmZvcm1hZG8gbm8gY2FiZcOnYWxobyBkYSByZXF1aXNpw6fDo28gY29tIG8gdmFsb3IgYCd0cnVlJ2AsXHJcbiAqIHBvciBleGVtcGxvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogLi4uXHJcbiAqICBjb25zdCBoZWFkZXJzID0geyAnWC1QTy1Oby1Db3VudC1QZW5kaW5nLVJlcXVlc3RzJzogJ3RydWUnIH07XHJcbiAqXHJcbiAqICB0aGlzLmh0dHAuZ2V0KGAvY3VzdG9tZXJzLzFgLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBgYGBcclxuICogUGFyYSBvYnRlciBhIHF1YW50aWRhZGUgZGUgcmVxdWlzacOnw7VlcyBwZW5kZW50ZXMsIGRldmUgaW5zY3JldmVyLXNlIG5vIG3DqXRvZG8gYGdldENvdW50UGVuZGluZ1JlcXVlc3RzYCBkb1xyXG4gKiBzZXJ2acOnbyBgUG9IdHRwUmVxdWVzdEludGVyY2VwdG9yU2VydmljZWAsIGNvbSBpc3NvLCBhbyByZWFsaXphciByZXF1aXNpw6fDtWVzIHV0aWxpemFuZG8gYEh0dHBDbGllbnRgLFxyXG4gKiBzZXLDoSByZXRvcm5hZG8gYSBxdWFudGlkYWRlIGRlIHJlcXVpc2nDp8O1ZXMgcGVuZGVudGVzLlxyXG4gKlxyXG4gKiBUYW1iw6ltIGV4aXN0ZSBhIHBvc3NpYmlsZGFkZSBkZSB0cmF2YXIgYSB0ZWxhIGUgbW9zdHJhciB1bWEgaW1hZ2VtIGRlIF9sb2FkaW5nXyBkdXJhbnRlIG8gcHJvY2Vzc2FtZW50byBkZSB1bWEgcmVxdWlzacOnw6NvXHJcbiAqIGRldmUtc2UgcGFzc2FyIG8gcGFyw6JtZXRybyBgWC1QTy1TY3JlZW4tTG9ja2Agbm8gY2FiZcOnYWxobyBkYSByZXF1aXNpw6fDo28gY29tIHZhbG9yIGAndHJ1ZSdgLlxyXG4gKlxyXG4gKiBwb3IgZXhlbXBsbzpcclxuICpcclxuICogYGBgXHJcbiAqIC4uLlxyXG4gKiAgY29uc3QgaGVhZGVycyA9IHsgJ1gtUE8tU2NyZWVuLUxvY2snOiAndHJ1ZScgfTtcclxuICpcclxuICogIHRoaXMuaHR0cC5nZXQoYC9jdXN0b21lcnMvMWAsIHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICogLi4uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA+IEFww7NzIGEgdmFsaWRhw6fDo28gbm8gaW50ZXJjZXB0b3IsIG8gcGFyw6JtZXRybyBzZXLDoSByZW1vdmlkbyBkbyBjYWJlw6dhbGhvIGRhIHJlcXVpc2nDp8Ojby5cclxuICpcclxuICogQW8gaW1wb3J0YXIgbyBtw7NkdWxvIGBQb01vZHVsZWAgbmEgYXBsaWNhw6fDo28sIG8gYHBvLWh0dHAtcmVxdWVzdC1pbnRlcmNlcHRvcmAgw6kgYXV0b21hdGljYW1lbnRlIGNvbmZpZ3VyYWRvIHNlbSBhIG5lY2Vzc2lkYWRlXHJcbiAqIGRlIHF1YWxxdWVyIGNvbmZpZ3VyYcOnw6NvIGV4dHJhLlxyXG4gKlxyXG4gKlxyXG4gKiBTZWd1ZSBhYmFpeG8gdW0gZXhlbXBsbyBkZSB1c286XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogQEluamVjdGFibGUoKVxyXG4gKiBleHBvcnQgY2xhc3MgQ3VzdG9tZXJzU2VydmljZSB7XHJcbiAqXHJcbiAqICBoZWFkZXJzID0geyAnWC1QTy1Oby1Db3VudC1QZW5kaW5nLVJlcXVlc3RzJzogdHJ1ZSwgJ1gtUE8tU2NyZWVuLUxvY2snOiAndHJ1ZScgfVxyXG4gKiAgcGVuZGluZ1JlcXVlc3RzOiBudW1iZXIgPSAwO1xyXG4gKiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAqXHJcbiAqICBjb25zdHJ1Y3RvcihcclxuICogICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gKiAgICBwcml2YXRlIGh0dHBSZXF1ZXN0SW50ZXJjZXB0b3I6IFBvSHR0cFJlcXVlc3RJbnRlcmNlcHRvclNlcnZpY2UpIHsgfVxyXG4gKlxyXG4gKiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAqICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAqICB9XHJcbiAqXHJcbiAqICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICogICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmh0dHBSZXF1ZXN0SW50ZXJjZXB0b3IuZ2V0Q291bnRQZW5kaW5nUmVxdWVzdHMoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAqICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMgPSBkYXRhO1xyXG4gKiAgICB9KTtcclxuICogIH1cclxuICpcclxuICogIGdldEN1c3RvbWVycygpIHtcclxuICogICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC9jdXN0b21lcnMvMWAsIHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICogIH1cclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiA8ZXhhbXBsZSBuYW1lPSdwby1odHRwLXJlcXVlc3QtaW50ZXJjZXB0b3ItbGFicycgdGl0bGU9J1BPIEh0dHAgUmVxdWVzdCBJbnRlcmNlcHRvciBMYWJzJz5cclxuICogIDxmaWxlIG5hbWU9J3NhbXBsZS1wby1odHRwLXJlcXVlc3QtaW50ZXJjZXB0b3ItbGFicy5jb21wb25lbnQudHMnPiA8L2ZpbGU+XHJcbiAqICA8ZmlsZSBuYW1lPSdzYW1wbGUtcG8taHR0cC1yZXF1ZXN0LWludGVyY2VwdG9yLWxhYnMuY29tcG9uZW50Lmh0bWwnPiA8L2ZpbGU+XHJcbiAqIDwvZXhhbXBsZT5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvSHR0cFJlcXVlc3RJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIHByaXZhdGUgbG9hZGluZ092ZXJsYXlDb21wb25lbnQ6IENvbXBvbmVudFJlZjxQb0xvYWRpbmdPdmVybGF5Q29tcG9uZW50PiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBwZW5kaW5nUmVxdWVzdHM6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVxdWVzdHM6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb250cm9sSHR0cFJlcXVlc3Q6IFBvSHR0cFJlcXVlc0NvbnRyb2x0U2VydmljZSxcclxuICAgIHByaXZhdGUgcG9Db21wb25lbnRJbmplY3RvcjogUG9Db21wb25lbnRJbmplY3RvclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdENsb25lID0gcmVxdWVzdC5jbG9uZSgpO1xyXG5cclxuICAgIHJlcXVlc3QgPSB0aGlzLnJlcXVlc3RDbG9uZVdpdGhvdXRIZWFkZXJQYXJhbShbbm9Db3VudFBlbmRpbmdSZXF1ZXN0cywgc2NyZWVuTG9ja10sIHJlcXVlc3QpO1xyXG5cclxuICAgIHRoaXMuc2V0Q291bnRQZW5kaW5nUmVxdWVzdHModHJ1ZSwgcmVxdWVzdENsb25lKTtcclxuICAgIHRoaXMuc2V0Q291bnRPdmVybGF5UmVxdWVzdHModHJ1ZSwgcmVxdWVzdENsb25lKTtcclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcclxuICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q291bnRQZW5kaW5nUmVxdWVzdHMoZmFsc2UsIHJlcXVlc3RDbG9uZSk7XHJcbiAgICAgICAgdGhpcy5zZXRDb3VudE92ZXJsYXlSZXF1ZXN0cyhmYWxzZSwgcmVxdWVzdENsb25lKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDb3VudFBlbmRpbmdSZXF1ZXN0cygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbEh0dHBSZXF1ZXN0LmdldENvbnRyb2xIdHRwUmVxdWVzdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZExvYWRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMubG9hZGluZ092ZXJsYXlDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheUNvbXBvbmVudCA9IHRoaXMucG9Db21wb25lbnRJbmplY3Rvci5jcmVhdGVDb21wb25lbnRJbkFwcGxpY2F0aW9uKFBvTG9hZGluZ092ZXJsYXlDb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmxvYWRpbmdPdmVybGF5Q29tcG9uZW50Lmluc3RhbmNlLnNjcmVlbkxvY2sgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxvYWRpbmdPdmVybGF5Q29tcG9uZW50Lmluc3RhbmNlLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveUxvYWRpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nT3ZlcmxheUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLnBvQ29tcG9uZW50SW5qZWN0b3IuZGVzdHJveUNvbXBvbmVudEluQXBwbGljYXRpb24odGhpcy5sb2FkaW5nT3ZlcmxheUNvbXBvbmVudCk7XHJcbiAgICAgIHRoaXMubG9hZGluZ092ZXJsYXlDb21wb25lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcXVlc3RDbG9uZVdpdGhvdXRIZWFkZXJQYXJhbShoZWFkZXJzUGFyYW1zOiBBcnJheTxzdHJpbmc+LCByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlcXVlc3Q8YW55PiB7XHJcbiAgICBsZXQgaXNSZXF1ZXN0Q2xvbmUgPSBmYWxzZTtcclxuXHJcbiAgICBoZWFkZXJzUGFyYW1zLmZvckVhY2goaGVhZGVyUGFyYW0gPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdC5oZWFkZXJzLmhhcyhoZWFkZXJQYXJhbSkpIHtcclxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZGVsZXRlKGhlYWRlclBhcmFtKTtcclxuICAgICAgICBpc1JlcXVlc3RDbG9uZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpc1JlcXVlc3RDbG9uZSA/IHJlcXVlc3QuY2xvbmUoeyBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMgfSkgOiByZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb3VudFBlbmRpbmdSZXF1ZXN0cyhpc0luY3JlbWVudDogYm9vbGVhbiwgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgY29uc3QgaGFzQ291bnRQZW5kaW5nUmVxdWVzdEhlYWRlclBhcmFtID0gcmVxdWVzdC5oZWFkZXJzLmhhcyhub0NvdW50UGVuZGluZ1JlcXVlc3RzKTtcclxuICAgIGNvbnN0IGhlYWRlclBhcmFtID0gcmVxdWVzdC5oZWFkZXJzLmdldChub0NvdW50UGVuZGluZ1JlcXVlc3RzKTtcclxuXHJcbiAgICBpZiAoaGFzQ291bnRQZW5kaW5nUmVxdWVzdEhlYWRlclBhcmFtICYmIGhlYWRlclBhcmFtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cyArPSBpc0luY3JlbWVudCA/IDEgOiAtMTtcclxuICAgIHRoaXMuY29udHJvbEh0dHBSZXF1ZXN0LnNlbmQodGhpcy5wZW5kaW5nUmVxdWVzdHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb3VudE92ZXJsYXlSZXF1ZXN0cyhpc0luY3JlbWVudDogYm9vbGVhbiwgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgY29uc3QgaGFzT3ZlcmxheVJlcXVlc3RIZWFkZXJQYXJhbSA9IHJlcXVlc3QuaGVhZGVycy5oYXMoc2NyZWVuTG9jayk7XHJcblxyXG4gICAgaWYgKGhhc092ZXJsYXlSZXF1ZXN0SGVhZGVyUGFyYW0pIHtcclxuICAgICAgY29uc3QgaGVhZGVyUGFyYW0gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KHNjcmVlbkxvY2spO1xyXG5cclxuICAgICAgaWYgKGhlYWRlclBhcmFtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vdmVybGF5UmVxdWVzdHMgKz0gaXNJbmNyZW1lbnQgPyAxIDogLTE7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlcXVlc3RzID4gMCA/IHRoaXMuYnVpbGRMb2FkaW5nKCkgOiB0aGlzLmRlc3Ryb3lMb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==