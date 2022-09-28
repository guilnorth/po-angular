import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { PoHttpInterceptorDetailComponent } from './po-http-interceptor-detail/po-http-interceptor-detail.component';
import { poHttpInterceptorLiterals } from './po-http-interceptor-literals';
const NO_ERROR_HEADER_PARAM = 'X-PO-No-Error';
const NO_MESSAGE_HEADER_PARAM = 'X-PO-No-Message';
/**
 * @description
 *
 * O *interceptor* tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.
 *
 * Pode ser utilizado para dar feedback das ações do usuário como, por exemplo: erro de autorização, mensagens de regras de negócio,
 * atualizações de registros, erro quando o servidor estiver indisponível e entre outros.
 *
 * ## Configuração
 *
 * Para o correto funcionamento do interceptor `po-http-interceptor`, deve ser importado o `BrowserAnimationsModule` no
 * módulo principal da sua aplicação.
 *
 * Módulo da aplicação:
 * ```
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { PoModule } from '@po-ui/ng-components';
 * ...
 *
 * @NgModule({
 *   imports: [
 *     BrowserModule,
 *     BrowserAnimationsModule,
 *     ...
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent,
 *     ...
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 *
 * Ao importar o módulo `PoModule` na aplicação, o `po-http-interceptor` é automaticamente configurado sem a necessidade
 * de qualquer configuração extra.
 *
 * Ao realizar requisições utilize o `HttpClient`, conforme exemplo abaixo:
 *
 * ```
 * import { HttpClient } from '@angular/common/http';
 *
 * ...
 *
 * @Injectable()
 * export class UserService {
 *
 *   constructor(private http: HttpClient) { }
 *
 *   getUsers() {
 *     return this.http.get('/api/users');
 *   }
 *
 *   ...
 *
 * }
 * ```
 *
 * ## Como usar
 *
 * Para exibir as noticações é necessário informar a mensagem no retorno da requisição. A estrutura da mensagem
 * é feita com base no status da resposta, conforme será apresentado nos próximos tópicos.
 *
 * ### Estrutura das mensagens
 *
 * #### Mensagens de sucesso `2xx`
 *
 * Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `_messages` no objeto de retorno.
 * Por exemplo:
 * ```
 * {
 *   "_messages": [
 *     {
 *       "type": "success" || "warning" || "error" || "information" (será exibido a `tag` apenas se esta propriedade possuir valor),
 *       "code": "título ou código da mensagem",
 *       "message": "texto da mensagem",
 *       "detailedMessage": "detalhamento da mensagem"
 *     }
 *   ]
 * }
 * ```
 *
 * #### Mensagens de erro `4xx` ou `5xx`
 *
 * Ao retornar erro, o objeto não necessita ter `_messages`, deve-se retornar o objeto diretamente:
 *
 * ```
 * {
 *    "code": "título ou código da mensagem",
 *    "message": "texto da mensagem",
 *    "detailedMessage": "detalhamento da mensagem"
 * }
 * ```
 *
 * Também é possível informar as seguintes propriedades:
 *
 * - `helpUrl`: link para a documentação do erro;
 *    - Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `detailedMessage`.
 * - `type`: É possível informar `error`, `warning` e `information`, sendo `error` o valor padrão.
 * - `details`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.
 * - `detailTitle`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `code - message`
 *
 * > Veja o [Guia de implementação de APIs](guides/api) para mais detalhes sobre a estrutura das mensagens.
 *
 * ### Cabeçalho
 *
 * É possível dispensar a notificação para o usuário utilizando no cabeçalho da requisição os parâmetros listados abaixo com o valor
 * igual a `true`:
 *
 * - `X-PO-No-Message`: Não exibe notificações de erro e/ou sucesso.
 *
 * - `X-PO-No-Error`: Não mostra notificações de erro com códigos `4xx` e `5xx`.
 *
 * ```
 * ...
 *  const headers = { 'X-PO-No-Message': 'true' };
 *
 *  this.http.get(`/customers/1`, { headers: headers });
 * ...
 *
 * ```
 *
 * > Após a validação no *interceptor*, os parâmetros serão removidos do cabeçalho da requisição.
 *
 */
export class PoHttpInterceptorBaseService {
    constructor(componentInjector, notification, languageService) {
        this.componentInjector = componentInjector;
        this.notification = notification;
        this.languageService = languageService;
        this.notificationTypes = ['success', 'warning', 'error', 'information'];
        this.literals = poHttpInterceptorLiterals[this.languageService.getShortLanguage()];
        this.httpInterceptorDetailComponent = undefined;
    }
    intercept(request, next) {
        const cloneRequest = request.clone();
        request = request && this.hasParameters(request) ? this.cloneRequestWithoutParameters(request) : request;
        return next.handle(request).pipe(tap((response) => {
            if (response instanceof HttpResponse) {
                this.processResponse(response, cloneRequest);
            }
        }, (error) => {
            this.processErrorResponse(error, cloneRequest);
        }));
    }
    processResponse(response, request) {
        const hasNoMessageParam = this.hasNoMessageParam(request);
        if (!hasNoMessageParam && response.body && response.body._messages) {
            const messages = response.body._messages;
            if (messages instanceof Array) {
                messages.forEach((message) => {
                    this.showNotification(message);
                });
            }
            else {
                this.showNotification(messages);
            }
        }
    }
    processErrorResponse(response, request) {
        const errorResponse = response.status !== 0
            ? response.error
            : { code: 0, message: this.literals.serverNotResponse, detailedMessage: response.message };
        const hasNoErrorParam = this.hasNoErrorParam(request);
        const hasNoMessageParam = this.hasNoMessageParam(request);
        const errorResponseValidTypes = this.notificationTypes.slice(1);
        if (errorResponse && errorResponse.message && !hasNoErrorParam && !hasNoMessageParam) {
            this.showNotification({
                ...errorResponse,
                type: errorResponseValidTypes.includes(errorResponse.type) ? errorResponse.type : 'error'
            });
        }
    }
    cloneRequestWithoutParameters(request) {
        const headers = request.headers.delete(NO_ERROR_HEADER_PARAM).delete(NO_MESSAGE_HEADER_PARAM);
        return request.clone({ headers });
    }
    createModal(responseMessage) {
        const details = responseMessage.details ? [responseMessage, ...responseMessage.details] : [responseMessage];
        this.httpInterceptorDetailComponent = this.componentInjector.createComponentInApplication(PoHttpInterceptorDetailComponent);
        this.httpInterceptorDetailComponent.instance.detail = details;
        this.httpInterceptorDetailComponent.instance.closed.subscribe(() => this.destroyModal());
        this.httpInterceptorDetailComponent.instance.open();
    }
    destroyModal() {
        if (this.httpInterceptorDetailComponent) {
            this.componentInjector.destroyComponentInApplication(this.httpInterceptorDetailComponent);
            this.httpInterceptorDetailComponent = undefined;
        }
    }
    hasMessage(responseMessage) {
        const hasMessageProperties = responseMessage.message;
        return responseMessage && hasMessageProperties;
    }
    hasNoErrorParam(request) {
        const noErrorParam = request && request.headers.get(NO_ERROR_HEADER_PARAM);
        return noErrorParam && noErrorParam.toString().toLocaleLowerCase() === 'true';
    }
    hasNoMessageParam(request) {
        const noMessageParam = request && request.headers.get(NO_MESSAGE_HEADER_PARAM);
        return noMessageParam && noMessageParam.toString().toLocaleLowerCase() === 'true';
    }
    hasParameters(request) {
        return request.headers.has(NO_ERROR_HEADER_PARAM) || request.headers.has(NO_MESSAGE_HEADER_PARAM);
    }
    showNotification(response) {
        if (!this.hasMessage(response)) {
            return;
        }
        const typeNotification = this.notificationTypes.includes(response.type) ? response.type : 'information';
        const notificationAction = this.generateNotificationAction(response);
        this.notification[typeNotification]({
            message: response.message,
            actionLabel: notificationAction.label,
            action: notificationAction.action
        });
    }
    generateDetailModal(responseMessage) {
        return () => {
            if (!this.httpInterceptorDetailComponent) {
                this.createModal(responseMessage);
            }
        };
    }
    generateNotificationAction(responseMessage) {
        let notificationAction;
        let notificationLabel;
        if (responseMessage.helpUrl && !(responseMessage.detailedMessage || responseMessage.details)) {
            notificationLabel = this.literals.help;
            notificationAction = this.generateUrlHelpFunction(responseMessage.helpUrl);
        }
        else if (responseMessage.detailedMessage || responseMessage.details) {
            notificationLabel = this.literals.details;
            notificationAction = this.generateDetailModal(responseMessage);
        }
        return { label: notificationLabel, action: notificationAction };
    }
    generateUrlHelpFunction(helpUrl) {
        return () => {
            window.open(helpUrl, '_blank');
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1pbnRlcmNlcHRvci1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2ludGVyY2VwdG9ycy9wby1odHRwLWludGVyY2VwdG9yL3BvLWh0dHAtaW50ZXJjZXB0b3ItYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFJTCxZQUFZLEVBR2IsTUFBTSxzQkFBc0IsQ0FBQztBQUc5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJckMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDckgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHM0UsTUFBTSxxQkFBcUIsR0FBRyxlQUFlLENBQUM7QUFDOUMsTUFBTSx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQztBQUVsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEhHO0FBQ0gsTUFBTSxPQUFnQiw0QkFBNEI7SUFPaEQsWUFDVSxpQkFBNkMsRUFDN0MsWUFBaUIsRUFDakIsZUFBa0M7UUFGbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUM3QyxpQkFBWSxHQUFaLFlBQVksQ0FBSztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFUNUMsc0JBQWlCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVuRSxhQUFRLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFdEUsbUNBQThCLEdBQW1ELFNBQVMsQ0FBQztJQU1oRyxDQUFDO0lBRUosU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFekcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUNELENBQUMsUUFBd0IsRUFBRSxFQUFFO1lBQzNCLElBQUksUUFBUSxZQUFZLFlBQVksRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLEVBQ0QsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxRQUEyQixFQUFFLE9BQXlCO1FBQ3BFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBRXpDLElBQUksUUFBUSxZQUFZLEtBQUssRUFBRTtnQkFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQWdDLEVBQUUsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVELG9CQUFvQixDQUFDLFFBQTJCLEVBQUUsT0FBeUI7UUFDekUsTUFBTSxhQUFhLEdBQ2pCLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9GLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNwRixJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3BCLEdBQUcsYUFBYTtnQkFDaEIsSUFBSSxFQUFFLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87YUFDMUYsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sNkJBQTZCLENBQUMsT0FBeUI7UUFDN0QsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUU5RixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxXQUFXLENBQUMsZUFBd0M7UUFDMUQsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFNUcsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEIsQ0FDdkYsZ0NBQWdDLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsOEJBQThCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDOUQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxTQUFTLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRU8sVUFBVSxDQUFDLGVBQXdDO1FBQ3pELE1BQU0sb0JBQW9CLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUVyRCxPQUFPLGVBQWUsSUFBSSxvQkFBb0IsQ0FBQztJQUNqRCxDQUFDO0lBRU8sZUFBZSxDQUFDLE9BQXlCO1FBQy9DLE1BQU0sWUFBWSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sWUFBWSxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLE1BQU0sQ0FBQztJQUNoRixDQUFDO0lBRU8saUJBQWlCLENBQUMsT0FBeUI7UUFDakQsTUFBTSxjQUFjLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFL0UsT0FBTyxjQUFjLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEtBQUssTUFBTSxDQUFDO0lBQ3BGLENBQUM7SUFFTyxhQUFhLENBQUMsT0FBeUI7UUFDN0MsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVPLGdCQUFnQixDQUFDLFFBQWE7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsT0FBTztTQUNSO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBRXhHLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDekIsV0FBVyxFQUFFLGtCQUFrQixDQUFDLEtBQUs7WUFDckMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU07U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLGVBQW9CO1FBQzlDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTywwQkFBMEIsQ0FBQyxlQUFvQjtRQUNyRCxJQUFJLGtCQUFrQixDQUFDO1FBQ3ZCLElBQUksaUJBQWlCLENBQUM7UUFFdEIsSUFBSSxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1RixpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN2QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVFO2FBQU0sSUFBSSxlQUFlLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDckUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDMUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBRU8sdUJBQXVCLENBQUMsT0FBZTtRQUM3QyxPQUFPLEdBQUcsRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgSHR0cEV2ZW50LFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb0NvbXBvbmVudEluamVjdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWNvbXBvbmVudC1pbmplY3Rvci9wby1jb21wb25lbnQtaW5qZWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvSHR0cEludGVyY2VwdG9yRGV0YWlsIH0gZnJvbSAnLi9wby1odHRwLWludGVyY2VwdG9yLWRldGFpbC9wby1odHRwLWludGVyY2VwdG9yLWRldGFpbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0h0dHBJbnRlcmNlcHRvckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vcG8taHR0cC1pbnRlcmNlcHRvci1kZXRhaWwvcG8taHR0cC1pbnRlcmNlcHRvci1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcG9IdHRwSW50ZXJjZXB0b3JMaXRlcmFscyB9IGZyb20gJy4vcG8taHR0cC1pbnRlcmNlcHRvci1saXRlcmFscyc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5jb25zdCBOT19FUlJPUl9IRUFERVJfUEFSQU0gPSAnWC1QTy1Oby1FcnJvcic7XHJcbmNvbnN0IE5PX01FU1NBR0VfSEVBREVSX1BBUkFNID0gJ1gtUE8tTm8tTWVzc2FnZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gKmludGVyY2VwdG9yKiB0ZW0gYSBmaW5hbGlkYWRlIGRlIGV4aWJpciBub3RpZmljYcOnw7VlcyBjb20gbWVuc2FnZW5zIG5hIHRlbGEsIGJhc2VhZG8gbmFzIHJlc3Bvc3RhcyBkYXMgcmVxdWlzacOnw7VlcyBIVFRQLlxyXG4gKlxyXG4gKiBQb2RlIHNlciB1dGlsaXphZG8gcGFyYSBkYXIgZmVlZGJhY2sgZGFzIGHDp8O1ZXMgZG8gdXN1w6FyaW8gY29tbywgcG9yIGV4ZW1wbG86IGVycm8gZGUgYXV0b3JpemHDp8OjbywgbWVuc2FnZW5zIGRlIHJlZ3JhcyBkZSBuZWfDs2NpbyxcclxuICogYXR1YWxpemHDp8O1ZXMgZGUgcmVnaXN0cm9zLCBlcnJvIHF1YW5kbyBvIHNlcnZpZG9yIGVzdGl2ZXIgaW5kaXNwb27DrXZlbCBlIGVudHJlIG91dHJvcy5cclxuICpcclxuICogIyMgQ29uZmlndXJhw6fDo29cclxuICpcclxuICogUGFyYSBvIGNvcnJldG8gZnVuY2lvbmFtZW50byBkbyBpbnRlcmNlcHRvciBgcG8taHR0cC1pbnRlcmNlcHRvcmAsIGRldmUgc2VyIGltcG9ydGFkbyBvIGBCcm93c2VyQW5pbWF0aW9uc01vZHVsZWAgbm9cclxuICogbcOzZHVsbyBwcmluY2lwYWwgZGEgc3VhIGFwbGljYcOnw6NvLlxyXG4gKlxyXG4gKiBNw7NkdWxvIGRhIGFwbGljYcOnw6NvOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG4gKiBpbXBvcnQgeyBQb01vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuICogLi4uXHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcclxuICogICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gKiAgICAgLi4uXHJcbiAqICAgICBQb01vZHVsZVxyXG4gKiAgIF0sXHJcbiAqICAgZGVjbGFyYXRpb25zOiBbXHJcbiAqICAgICBBcHBDb21wb25lbnQsXHJcbiAqICAgICAuLi5cclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW10sXHJcbiAqICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4gKiBgYGBcclxuICpcclxuICogQW8gaW1wb3J0YXIgbyBtw7NkdWxvIGBQb01vZHVsZWAgbmEgYXBsaWNhw6fDo28sIG8gYHBvLWh0dHAtaW50ZXJjZXB0b3JgIMOpIGF1dG9tYXRpY2FtZW50ZSBjb25maWd1cmFkbyBzZW0gYSBuZWNlc3NpZGFkZVxyXG4gKiBkZSBxdWFscXVlciBjb25maWd1cmHDp8OjbyBleHRyYS5cclxuICpcclxuICogQW8gcmVhbGl6YXIgcmVxdWlzacOnw7VlcyB1dGlsaXplIG8gYEh0dHBDbGllbnRgLCBjb25mb3JtZSBleGVtcGxvIGFiYWl4bzpcclxuICpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBASW5qZWN0YWJsZSgpXHJcbiAqIGV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAqXHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuICpcclxuICogICBnZXRVc2VycygpIHtcclxuICogICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3VzZXJzJyk7XHJcbiAqICAgfVxyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKlxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyBDb21vIHVzYXJcclxuICpcclxuICogUGFyYSBleGliaXIgYXMgbm90aWNhw6fDtWVzIMOpIG5lY2Vzc8OhcmlvIGluZm9ybWFyIGEgbWVuc2FnZW0gbm8gcmV0b3JubyBkYSByZXF1aXNpw6fDo28uIEEgZXN0cnV0dXJhIGRhIG1lbnNhZ2VtXHJcbiAqIMOpIGZlaXRhIGNvbSBiYXNlIG5vIHN0YXR1cyBkYSByZXNwb3N0YSwgY29uZm9ybWUgc2Vyw6EgYXByZXNlbnRhZG8gbm9zIHByw7N4aW1vcyB0w7NwaWNvcy5cclxuICpcclxuICogIyMjIEVzdHJ1dHVyYSBkYXMgbWVuc2FnZW5zXHJcbiAqXHJcbiAqICMjIyMgTWVuc2FnZW5zIGRlIHN1Y2Vzc28gYDJ4eGBcclxuICpcclxuICogUGFyYSBleGliaXIgbWVuc2FnZW5zIGFvIHJldG9ybmFyIHVtYSBsaXN0YSBvdSB1bSBpdGVtLCBkZXZlLXNlIGluY2x1aXIgYSBwcm9wcmllZGFkZSBgX21lc3NhZ2VzYCBubyBvYmpldG8gZGUgcmV0b3Juby5cclxuICogUG9yIGV4ZW1wbG86XHJcbiAqIGBgYFxyXG4gKiB7XHJcbiAqICAgXCJfbWVzc2FnZXNcIjogW1xyXG4gKiAgICAge1xyXG4gKiAgICAgICBcInR5cGVcIjogXCJzdWNjZXNzXCIgfHwgXCJ3YXJuaW5nXCIgfHwgXCJlcnJvclwiIHx8IFwiaW5mb3JtYXRpb25cIiAoc2Vyw6EgZXhpYmlkbyBhIGB0YWdgIGFwZW5hcyBzZSBlc3RhIHByb3ByaWVkYWRlIHBvc3N1aXIgdmFsb3IpLFxyXG4gKiAgICAgICBcImNvZGVcIjogXCJ0w610dWxvIG91IGPDs2RpZ28gZGEgbWVuc2FnZW1cIixcclxuICogICAgICAgXCJtZXNzYWdlXCI6IFwidGV4dG8gZGEgbWVuc2FnZW1cIixcclxuICogICAgICAgXCJkZXRhaWxlZE1lc3NhZ2VcIjogXCJkZXRhbGhhbWVudG8gZGEgbWVuc2FnZW1cIlxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIyBNZW5zYWdlbnMgZGUgZXJybyBgNHh4YCBvdSBgNXh4YFxyXG4gKlxyXG4gKiBBbyByZXRvcm5hciBlcnJvLCBvIG9iamV0byBuw6NvIG5lY2Vzc2l0YSB0ZXIgYF9tZXNzYWdlc2AsIGRldmUtc2UgcmV0b3JuYXIgbyBvYmpldG8gZGlyZXRhbWVudGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiB7XHJcbiAqICAgIFwiY29kZVwiOiBcInTDrXR1bG8gb3UgY8OzZGlnbyBkYSBtZW5zYWdlbVwiLFxyXG4gKiAgICBcIm1lc3NhZ2VcIjogXCJ0ZXh0byBkYSBtZW5zYWdlbVwiLFxyXG4gKiAgICBcImRldGFpbGVkTWVzc2FnZVwiOiBcImRldGFsaGFtZW50byBkYSBtZW5zYWdlbVwiXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRhbWLDqW0gw6kgcG9zc8OtdmVsIGluZm9ybWFyIGFzIHNlZ3VpbnRlcyBwcm9wcmllZGFkZXM6XHJcbiAqXHJcbiAqIC0gYGhlbHBVcmxgOiBsaW5rIHBhcmEgYSBkb2N1bWVudGHDp8OjbyBkbyBlcnJvO1xyXG4gKiAgICAtIENhc28gZm9yIGluZm9ybWFkbywgc2Vyw6EgZXhpYmlkbyB1bWEgYcOnw6NvIGRlIFwiQWp1ZGFcIiBuYSBub3RpZmljYcOnw6NvLCBwYXJhIGlzc28gbsOjbyBkZXZlcsOhIHRlciBhIHByb3ByaWVkYWRlIGBkZXRhaWxlZE1lc3NhZ2VgLlxyXG4gKiAtIGB0eXBlYDogw4kgcG9zc8OtdmVsIGluZm9ybWFyIGBlcnJvcmAsIGB3YXJuaW5nYCBlIGBpbmZvcm1hdGlvbmAsIHNlbmRvIGBlcnJvcmAgbyB2YWxvciBwYWRyw6NvLlxyXG4gKiAtIGBkZXRhaWxzYDogVW1hIGxpc3RhIGRlIG9iamV0b3MgZGUgbWVuc2FnZW0gKHJlY3Vyc2l2YSkgY29tIG1haXMgZGV0YWxoZXMgc29icmUgYSBtZW5zYWdlbSBwcmluY2lwYWwuXHJcbiAqIC0gYGRldGFpbFRpdGxlYDogY2FzbyBmb3IgaW5mb3JtYWRvLCBzZXLDoSBhcHJlc2VudGFkbyBjb21vIHTDrXR1bG8gZG9zIGRldGFsaGVzIHN1YnN0aXR1aW5kbyBvIHBhZHLDo28gYGNvZGUgLSBtZXNzYWdlYFxyXG4gKlxyXG4gKiA+IFZlamEgbyBbR3VpYSBkZSBpbXBsZW1lbnRhw6fDo28gZGUgQVBJc10oZ3VpZGVzL2FwaSkgcGFyYSBtYWlzIGRldGFsaGVzIHNvYnJlIGEgZXN0cnV0dXJhIGRhcyBtZW5zYWdlbnMuXHJcbiAqXHJcbiAqICMjIyBDYWJlw6dhbGhvXHJcbiAqXHJcbiAqIMOJIHBvc3PDrXZlbCBkaXNwZW5zYXIgYSBub3RpZmljYcOnw6NvIHBhcmEgbyB1c3XDoXJpbyB1dGlsaXphbmRvIG5vIGNhYmXDp2FsaG8gZGEgcmVxdWlzacOnw6NvIG9zIHBhcsOibWV0cm9zIGxpc3RhZG9zIGFiYWl4byBjb20gbyB2YWxvclxyXG4gKiBpZ3VhbCBhIGB0cnVlYDpcclxuICpcclxuICogLSBgWC1QTy1Oby1NZXNzYWdlYDogTsOjbyBleGliZSBub3RpZmljYcOnw7VlcyBkZSBlcnJvIGUvb3Ugc3VjZXNzby5cclxuICpcclxuICogLSBgWC1QTy1Oby1FcnJvcmA6IE7Do28gbW9zdHJhIG5vdGlmaWNhw6fDtWVzIGRlIGVycm8gY29tIGPDs2RpZ29zIGA0eHhgIGUgYDV4eGAuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAuLi5cclxuICogIGNvbnN0IGhlYWRlcnMgPSB7ICdYLVBPLU5vLU1lc3NhZ2UnOiAndHJ1ZScgfTtcclxuICpcclxuICogIHRoaXMuaHR0cC5nZXQoYC9jdXN0b21lcnMvMWAsIHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICogLi4uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiA+IEFww7NzIGEgdmFsaWRhw6fDo28gbm8gKmludGVyY2VwdG9yKiwgb3MgcGFyw6JtZXRyb3Mgc2Vyw6NvIHJlbW92aWRvcyBkbyBjYWJlw6dhbGhvIGRhIHJlcXVpc2nDp8Ojby5cclxuICpcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0h0dHBJbnRlcmNlcHRvckJhc2VTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBub3RpZmljYXRpb25UeXBlcyA9IFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2luZm9ybWF0aW9uJ107XHJcblxyXG4gIGxpdGVyYWxzID0gcG9IdHRwSW50ZXJjZXB0b3JMaXRlcmFsc1t0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCldO1xyXG5cclxuICBwcml2YXRlIGh0dHBJbnRlcmNlcHRvckRldGFpbENvbXBvbmVudDogQ29tcG9uZW50UmVmPFBvSHR0cEludGVyY2VwdG9yRGV0YWlsQ29tcG9uZW50PiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEluamVjdG9yOiBQb0NvbXBvbmVudEluamVjdG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uOiBhbnksXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnN0IGNsb25lUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcclxuXHJcbiAgICByZXF1ZXN0ID0gcmVxdWVzdCAmJiB0aGlzLmhhc1BhcmFtZXRlcnMocmVxdWVzdCkgPyB0aGlzLmNsb25lUmVxdWVzdFdpdGhvdXRQYXJhbWV0ZXJzKHJlcXVlc3QpIDogcmVxdWVzdDtcclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcclxuICAgICAgdGFwKFxyXG4gICAgICAgIChyZXNwb25zZTogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSwgY2xvbmVSZXF1ZXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGNsb25lUmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiwgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgY29uc3QgaGFzTm9NZXNzYWdlUGFyYW0gPSB0aGlzLmhhc05vTWVzc2FnZVBhcmFtKHJlcXVlc3QpO1xyXG5cclxuICAgIGlmICghaGFzTm9NZXNzYWdlUGFyYW0gJiYgcmVzcG9uc2UuYm9keSAmJiByZXNwb25zZS5ib2R5Ll9tZXNzYWdlcykge1xyXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHJlc3BvbnNlLmJvZHkuX21lc3NhZ2VzO1xyXG5cclxuICAgICAgaWYgKG1lc3NhZ2VzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlOiBQb0h0dHBJbnRlcmNlcHRvckRldGFpbCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3NFcnJvclJlc3BvbnNlKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSwgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgY29uc3QgZXJyb3JSZXNwb25zZSA9XHJcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyAhPT0gMFxyXG4gICAgICAgID8gcmVzcG9uc2UuZXJyb3JcclxuICAgICAgICA6IHsgY29kZTogMCwgbWVzc2FnZTogdGhpcy5saXRlcmFscy5zZXJ2ZXJOb3RSZXNwb25zZSwgZGV0YWlsZWRNZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlIH07XHJcblxyXG4gICAgY29uc3QgaGFzTm9FcnJvclBhcmFtID0gdGhpcy5oYXNOb0Vycm9yUGFyYW0ocmVxdWVzdCk7XHJcbiAgICBjb25zdCBoYXNOb01lc3NhZ2VQYXJhbSA9IHRoaXMuaGFzTm9NZXNzYWdlUGFyYW0ocmVxdWVzdCk7XHJcbiAgICBjb25zdCBlcnJvclJlc3BvbnNlVmFsaWRUeXBlcyA9IHRoaXMubm90aWZpY2F0aW9uVHlwZXMuc2xpY2UoMSk7XHJcblxyXG4gICAgaWYgKGVycm9yUmVzcG9uc2UgJiYgZXJyb3JSZXNwb25zZS5tZXNzYWdlICYmICFoYXNOb0Vycm9yUGFyYW0gJiYgIWhhc05vTWVzc2FnZVBhcmFtKSB7XHJcbiAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgLi4uZXJyb3JSZXNwb25zZSxcclxuICAgICAgICB0eXBlOiBlcnJvclJlc3BvbnNlVmFsaWRUeXBlcy5pbmNsdWRlcyhlcnJvclJlc3BvbnNlLnR5cGUpID8gZXJyb3JSZXNwb25zZS50eXBlIDogJ2Vycm9yJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvbmVSZXF1ZXN0V2l0aG91dFBhcmFtZXRlcnMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IEh0dHBSZXF1ZXN0PGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycy5kZWxldGUoTk9fRVJST1JfSEVBREVSX1BBUkFNKS5kZWxldGUoTk9fTUVTU0FHRV9IRUFERVJfUEFSQU0pO1xyXG5cclxuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHsgaGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTW9kYWwocmVzcG9uc2VNZXNzYWdlOiBQb0h0dHBJbnRlcmNlcHRvckRldGFpbCkge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IHJlc3BvbnNlTWVzc2FnZS5kZXRhaWxzID8gW3Jlc3BvbnNlTWVzc2FnZSwgLi4ucmVzcG9uc2VNZXNzYWdlLmRldGFpbHNdIDogW3Jlc3BvbnNlTWVzc2FnZV07XHJcblxyXG4gICAgdGhpcy5odHRwSW50ZXJjZXB0b3JEZXRhaWxDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEluamVjdG9yLmNyZWF0ZUNvbXBvbmVudEluQXBwbGljYXRpb24oXHJcbiAgICAgIFBvSHR0cEludGVyY2VwdG9yRGV0YWlsQ29tcG9uZW50XHJcbiAgICApO1xyXG4gICAgdGhpcy5odHRwSW50ZXJjZXB0b3JEZXRhaWxDb21wb25lbnQuaW5zdGFuY2UuZGV0YWlsID0gZGV0YWlscztcclxuICAgIHRoaXMuaHR0cEludGVyY2VwdG9yRGV0YWlsQ29tcG9uZW50Lmluc3RhbmNlLmNsb3NlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXN0cm95TW9kYWwoKSk7XHJcbiAgICB0aGlzLmh0dHBJbnRlcmNlcHRvckRldGFpbENvbXBvbmVudC5pbnN0YW5jZS5vcGVuKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lNb2RhbCgpIHtcclxuICAgIGlmICh0aGlzLmh0dHBJbnRlcmNlcHRvckRldGFpbENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudEluamVjdG9yLmRlc3Ryb3lDb21wb25lbnRJbkFwcGxpY2F0aW9uKHRoaXMuaHR0cEludGVyY2VwdG9yRGV0YWlsQ29tcG9uZW50KTtcclxuICAgICAgdGhpcy5odHRwSW50ZXJjZXB0b3JEZXRhaWxDb21wb25lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc01lc3NhZ2UocmVzcG9uc2VNZXNzYWdlOiBQb0h0dHBJbnRlcmNlcHRvckRldGFpbCkge1xyXG4gICAgY29uc3QgaGFzTWVzc2FnZVByb3BlcnRpZXMgPSByZXNwb25zZU1lc3NhZ2UubWVzc2FnZTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2VNZXNzYWdlICYmIGhhc01lc3NhZ2VQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNOb0Vycm9yUGFyYW0ocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgbm9FcnJvclBhcmFtID0gcmVxdWVzdCAmJiByZXF1ZXN0LmhlYWRlcnMuZ2V0KE5PX0VSUk9SX0hFQURFUl9QQVJBTSk7XHJcblxyXG4gICAgcmV0dXJuIG5vRXJyb3JQYXJhbSAmJiBub0Vycm9yUGFyYW0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc05vTWVzc2FnZVBhcmFtKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG5vTWVzc2FnZVBhcmFtID0gcmVxdWVzdCAmJiByZXF1ZXN0LmhlYWRlcnMuZ2V0KE5PX01FU1NBR0VfSEVBREVSX1BBUkFNKTtcclxuXHJcbiAgICByZXR1cm4gbm9NZXNzYWdlUGFyYW0gJiYgbm9NZXNzYWdlUGFyYW0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc1BhcmFtZXRlcnMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QuaGVhZGVycy5oYXMoTk9fRVJST1JfSEVBREVSX1BBUkFNKSB8fCByZXF1ZXN0LmhlYWRlcnMuaGFzKE5PX01FU1NBR0VfSEVBREVSX1BBUkFNKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd05vdGlmaWNhdGlvbihyZXNwb25zZTogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzTWVzc2FnZShyZXNwb25zZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR5cGVOb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblR5cGVzLmluY2x1ZGVzKHJlc3BvbnNlLnR5cGUpID8gcmVzcG9uc2UudHlwZSA6ICdpbmZvcm1hdGlvbic7XHJcblxyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uQWN0aW9uID0gdGhpcy5nZW5lcmF0ZU5vdGlmaWNhdGlvbkFjdGlvbihyZXNwb25zZSk7XHJcblxyXG4gICAgdGhpcy5ub3RpZmljYXRpb25bdHlwZU5vdGlmaWNhdGlvbl0oe1xyXG4gICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlLFxyXG4gICAgICBhY3Rpb25MYWJlbDogbm90aWZpY2F0aW9uQWN0aW9uLmxhYmVsLFxyXG4gICAgICBhY3Rpb246IG5vdGlmaWNhdGlvbkFjdGlvbi5hY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZURldGFpbE1vZGFsKHJlc3BvbnNlTWVzc2FnZTogYW55KSB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaHR0cEludGVyY2VwdG9yRGV0YWlsQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbChyZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU5vdGlmaWNhdGlvbkFjdGlvbihyZXNwb25zZU1lc3NhZ2U6IGFueSkge1xyXG4gICAgbGV0IG5vdGlmaWNhdGlvbkFjdGlvbjtcclxuICAgIGxldCBub3RpZmljYXRpb25MYWJlbDtcclxuXHJcbiAgICBpZiAocmVzcG9uc2VNZXNzYWdlLmhlbHBVcmwgJiYgIShyZXNwb25zZU1lc3NhZ2UuZGV0YWlsZWRNZXNzYWdlIHx8IHJlc3BvbnNlTWVzc2FnZS5kZXRhaWxzKSkge1xyXG4gICAgICBub3RpZmljYXRpb25MYWJlbCA9IHRoaXMubGl0ZXJhbHMuaGVscDtcclxuICAgICAgbm90aWZpY2F0aW9uQWN0aW9uID0gdGhpcy5nZW5lcmF0ZVVybEhlbHBGdW5jdGlvbihyZXNwb25zZU1lc3NhZ2UuaGVscFVybCk7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlTWVzc2FnZS5kZXRhaWxlZE1lc3NhZ2UgfHwgcmVzcG9uc2VNZXNzYWdlLmRldGFpbHMpIHtcclxuICAgICAgbm90aWZpY2F0aW9uTGFiZWwgPSB0aGlzLmxpdGVyYWxzLmRldGFpbHM7XHJcbiAgICAgIG5vdGlmaWNhdGlvbkFjdGlvbiA9IHRoaXMuZ2VuZXJhdGVEZXRhaWxNb2RhbChyZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbGFiZWw6IG5vdGlmaWNhdGlvbkxhYmVsLCBhY3Rpb246IG5vdGlmaWNhdGlvbkFjdGlvbiB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVVybEhlbHBGdW5jdGlvbihoZWxwVXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGhlbHBVcmwsICdfYmxhbmsnKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==