import { PoToasterOrientation } from './po-toaster/po-toaster-orientation.enum';
import { PoToasterType } from './po-toaster/po-toaster-type.enum';
/**
 * @description
 *
 * Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:
 *
 * - success,
 * - warning,
 * - error,
 * - information.
 *
 * Cada um destes métodos recebe como parâmetro o objeto `PoNotification` que contém os dados da mensagem e o
 * objeto ViewContainerRef que é a representação do container do componente onde será criada a notificação.
 *
 * Estas notificações serão exibidas durante 9 segundos por padrão, podendo ser alterada conforme necessidade.
 * Após este tempo a mesma é removida automaticamente.
 *
 * Notificações com ação ou notificações de `erro` permanecerão em tela até o usuário fecha-lá ou clicar na ação.
 *
 * O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova.
 *
 */
export class PoNotificationBaseService {
    constructor() {
        // Array responsável por guardar a instância de po-toaster's superiores.
        this.stackTop = [];
        // Array responsável por guardar a instância de po-toaster's inferiores.
        this.stackBottom = [];
        // Duração da notificação ativa.
        this.defaultDuration = 9000;
    }
    /**
     * Emite uma notificação de sucesso.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação.
     */
    success(notification) {
        this.createToaster(this.buildToaster(notification, PoToasterType.Success));
    }
    /**
     * Emite uma notificação de atenção.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação
     */
    warning(notification) {
        this.createToaster(this.buildToaster(notification, PoToasterType.Warning));
    }
    /**
     * Emite uma notificação de erro.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação
     */
    error(notification) {
        this.createToaster(this.buildToaster(notification, PoToasterType.Error));
    }
    /**
     * Emite uma notificação de informação.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação
     */
    information(notification) {
        this.createToaster(this.buildToaster(notification, PoToasterType.Information));
    }
    /**
     * Define em milissegundos a duração padrão para as notificações.
     *
     * > Padrão 9 segundos.
     *
     * @param {number} defaultDuration Duração em milisegundos
     */
    setDefaultDuration(defaultDuration) {
        this.defaultDuration = defaultDuration;
    }
    /**
     * @docsPrivate
     *
     * Cria um objeto do tipo PoToaster de acordo o tipo.
     *
     * @param {PoNotification | string} notification Objeto PoNotification com os dados da notificação
     */
    buildToaster(notification, type) {
        let index = 0;
        let orientation;
        if (notification.orientation === undefined ||
            notification.orientation === PoToasterOrientation.Bottom) {
            index = this.stackBottom.length;
            orientation = PoToasterOrientation.Bottom;
        }
        else {
            index = this.stackTop.length;
            orientation = PoToasterOrientation.Top;
        }
        const toaster = {
            componentRef: undefined,
            message: notification.message || notification,
            type: type,
            orientation: orientation,
            action: notification.action,
            actionLabel: notification.actionLabel,
            position: index,
            duration: notification.duration || this.defaultDuration
        };
        if (notification.action) {
            toaster.action = (param) => {
                notification.action();
                this.destroyToaster(param.componentRef);
            };
        }
        return toaster;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbm90aWZpY2F0aW9uLWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvc2VydmljZXMvcG8tbm90aWZpY2F0aW9uL3BvLW5vdGlmaWNhdGlvbi1iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILE1BQU0sT0FBZ0IseUJBQXlCO0lBQS9DO1FBQ0Usd0VBQXdFO1FBQ3hFLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBRXhDLHdFQUF3RTtRQUN4RSxnQkFBVyxHQUE2QixFQUFFLENBQUM7UUFFM0MsZ0NBQWdDO1FBQ3hCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO0lBOEdqQyxDQUFDO0lBNUdDOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsWUFBcUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE9BQU8sQ0FBQyxZQUFxQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLFlBQXFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxXQUFXLENBQUMsWUFBcUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksa0JBQWtCLENBQUMsZUFBdUI7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFlBQVksQ0FBQyxZQUFxQyxFQUFFLElBQW1CO1FBQzdFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksV0FBVyxDQUFDO1FBRWhCLElBQ21CLFlBQWEsQ0FBQyxXQUFXLEtBQUssU0FBUztZQUN2QyxZQUFhLENBQUMsV0FBVyxLQUFLLG9CQUFvQixDQUFDLE1BQU0sRUFDMUU7WUFDQSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDaEMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztTQUMzQzthQUFNO1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzdCLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7U0FDeEM7UUFFRCxNQUFNLE9BQU8sR0FBYztZQUN6QixZQUFZLEVBQUUsU0FBUztZQUN2QixPQUFPLEVBQW1CLFlBQWEsQ0FBQyxPQUFPLElBQVksWUFBWTtZQUN2RSxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLE1BQU0sRUFBbUIsWUFBYSxDQUFDLE1BQU07WUFDN0MsV0FBVyxFQUFtQixZQUFhLENBQUMsV0FBVztZQUN2RCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBbUIsWUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZTtTQUMxRSxDQUFDO1FBRUYsSUFBcUIsWUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ2IsWUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FvQkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9wby1ub3RpZmljYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyIH0gZnJvbSAnLi9wby10b2FzdGVyL3BvLXRvYXN0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyT3JpZW50YXRpb24gfSBmcm9tICcuL3BvLXRvYXN0ZXIvcG8tdG9hc3Rlci1vcmllbnRhdGlvbi5lbnVtJztcclxuaW1wb3J0IHsgUG9Ub2FzdGVyVHlwZSB9IGZyb20gJy4vcG8tdG9hc3Rlci9wby10b2FzdGVyLXR5cGUuZW51bSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFNlcnZpw6dvIHJlc3BvbnPDoXZlbCBwb3IgZW1pdGlyIGFzIG5vdGlmaWNhw6fDtWVzIGVtIHVtYSBww6FnaW5hLiBTw6NvIGRpc3BvbmliaWxpemFkb3Mgb3MgbcOpdG9kb3MgZGU6XHJcbiAqXHJcbiAqIC0gc3VjY2VzcyxcclxuICogLSB3YXJuaW5nLFxyXG4gKiAtIGVycm9yLFxyXG4gKiAtIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiBDYWRhIHVtIGRlc3RlcyBtw6l0b2RvcyByZWNlYmUgY29tbyBwYXLDom1ldHJvIG8gb2JqZXRvIGBQb05vdGlmaWNhdGlvbmAgcXVlIGNvbnTDqW0gb3MgZGFkb3MgZGEgbWVuc2FnZW0gZSBvXHJcbiAqIG9iamV0byBWaWV3Q29udGFpbmVyUmVmIHF1ZSDDqSBhIHJlcHJlc2VudGHDp8OjbyBkbyBjb250YWluZXIgZG8gY29tcG9uZW50ZSBvbmRlIHNlcsOhIGNyaWFkYSBhIG5vdGlmaWNhw6fDo28uXHJcbiAqXHJcbiAqIEVzdGFzIG5vdGlmaWNhw6fDtWVzIHNlcsOjbyBleGliaWRhcyBkdXJhbnRlIDkgc2VndW5kb3MgcG9yIHBhZHLDo28sIHBvZGVuZG8gc2VyIGFsdGVyYWRhIGNvbmZvcm1lIG5lY2Vzc2lkYWRlLlxyXG4gKiBBcMOzcyBlc3RlIHRlbXBvIGEgbWVzbWEgw6kgcmVtb3ZpZGEgYXV0b21hdGljYW1lbnRlLlxyXG4gKlxyXG4gKiBOb3RpZmljYcOnw7VlcyBjb20gYcOnw6NvIG91IG5vdGlmaWNhw6fDtWVzIGRlIGBlcnJvYCBwZXJtYW5lY2Vyw6NvIGVtIHRlbGEgYXTDqSBvIHVzdcOhcmlvIGZlY2hhLWzDoSBvdSBjbGljYXIgbmEgYcOnw6NvLlxyXG4gKlxyXG4gKiBPIHNlcnZpw6dvIHBvc3N1aSB1bSBsaW1pdGUgZGUgYXTDqSA1IG5vdGlmaWNhw6fDtWVzIHBvciB2ZXosIGEgcGFydGlyIGRvIHNleHRvIGEgcHJpbWVpcmEgbm90aWZpY2HDp8OjbyBzZXLDoSByZW1vdmlkYSBkYW5kbyBsdWdhciBhIG5vdmEuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9Ob3RpZmljYXRpb25CYXNlU2VydmljZSB7XHJcbiAgLy8gQXJyYXkgcmVzcG9uc8OhdmVsIHBvciBndWFyZGFyIGEgaW5zdMOibmNpYSBkZSBwby10b2FzdGVyJ3Mgc3VwZXJpb3Jlcy5cclxuICBzdGFja1RvcDogQXJyYXk8Q29tcG9uZW50UmVmPGFueT4+ID0gW107XHJcblxyXG4gIC8vIEFycmF5IHJlc3BvbnPDoXZlbCBwb3IgZ3VhcmRhciBhIGluc3TDom5jaWEgZGUgcG8tdG9hc3RlcidzIGluZmVyaW9yZXMuXHJcbiAgc3RhY2tCb3R0b206IEFycmF5PENvbXBvbmVudFJlZjxhbnk+PiA9IFtdO1xyXG5cclxuICAvLyBEdXJhw6fDo28gZGEgbm90aWZpY2HDp8OjbyBhdGl2YS5cclxuICBwcml2YXRlIGRlZmF1bHREdXJhdGlvbiA9IDkwMDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVtYSBub3RpZmljYcOnw6NvIGRlIHN1Y2Vzc28uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvTm90aWZpY2F0aW9uIHwgc3RyaW5nfSBub3RpZmljYXRpb24gT2JqZXRvIGNvbSBvcyBkYWRvcyBkYSBub3RpZmljYcOnw6NvIG91IHNvbWVudGUgYSBzdHJpbmcgY29tIGEgbWVuc2FnZW0gZGEgbm90aWZpY2HDp8Ojby5cclxuICAgKi9cclxuICBwdWJsaWMgc3VjY2Vzcyhub3RpZmljYXRpb246IFBvTm90aWZpY2F0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNyZWF0ZVRvYXN0ZXIodGhpcy5idWlsZFRvYXN0ZXIobm90aWZpY2F0aW9uLCBQb1RvYXN0ZXJUeXBlLlN1Y2Nlc3MpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVtYSBub3RpZmljYcOnw6NvIGRlIGF0ZW7Dp8Ojby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UG9Ob3RpZmljYXRpb24gfCBzdHJpbmd9IG5vdGlmaWNhdGlvbiBPYmpldG8gY29tIG9zIGRhZG9zIGRhIG5vdGlmaWNhw6fDo28gb3Ugc29tZW50ZSBhIHN0cmluZyBjb20gYSBtZW5zYWdlbSBkYSBub3RpZmljYcOnw6NvXHJcbiAgICovXHJcbiAgcHVibGljIHdhcm5pbmcobm90aWZpY2F0aW9uOiBQb05vdGlmaWNhdGlvbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5jcmVhdGVUb2FzdGVyKHRoaXMuYnVpbGRUb2FzdGVyKG5vdGlmaWNhdGlvbiwgUG9Ub2FzdGVyVHlwZS5XYXJuaW5nKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1bWEgbm90aWZpY2HDp8OjbyBkZSBlcnJvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb05vdGlmaWNhdGlvbiB8IHN0cmluZ30gbm90aWZpY2F0aW9uIE9iamV0byBjb20gb3MgZGFkb3MgZGEgbm90aWZpY2HDp8OjbyBvdSBzb21lbnRlIGEgc3RyaW5nIGNvbSBhIG1lbnNhZ2VtIGRhIG5vdGlmaWNhw6fDo29cclxuICAgKi9cclxuICBwdWJsaWMgZXJyb3Iobm90aWZpY2F0aW9uOiBQb05vdGlmaWNhdGlvbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5jcmVhdGVUb2FzdGVyKHRoaXMuYnVpbGRUb2FzdGVyKG5vdGlmaWNhdGlvbiwgUG9Ub2FzdGVyVHlwZS5FcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW1hIG5vdGlmaWNhw6fDo28gZGUgaW5mb3JtYcOnw6NvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb05vdGlmaWNhdGlvbiB8IHN0cmluZ30gbm90aWZpY2F0aW9uIE9iamV0byBjb20gb3MgZGFkb3MgZGEgbm90aWZpY2HDp8OjbyBvdSBzb21lbnRlIGEgc3RyaW5nIGNvbSBhIG1lbnNhZ2VtIGRhIG5vdGlmaWNhw6fDo29cclxuICAgKi9cclxuICBwdWJsaWMgaW5mb3JtYXRpb24obm90aWZpY2F0aW9uOiBQb05vdGlmaWNhdGlvbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5jcmVhdGVUb2FzdGVyKHRoaXMuYnVpbGRUb2FzdGVyKG5vdGlmaWNhdGlvbiwgUG9Ub2FzdGVyVHlwZS5JbmZvcm1hdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lIGVtIG1pbGlzc2VndW5kb3MgYSBkdXJhw6fDo28gcGFkcsOjbyBwYXJhIGFzIG5vdGlmaWNhw6fDtWVzLlxyXG4gICAqXHJcbiAgICogPiBQYWRyw6NvIDkgc2VndW5kb3MuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVmYXVsdER1cmF0aW9uIER1cmHDp8OjbyBlbSBtaWxpc2VndW5kb3NcclxuICAgKi9cclxuICBwdWJsaWMgc2V0RGVmYXVsdER1cmF0aW9uKGRlZmF1bHREdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmRlZmF1bHREdXJhdGlvbiA9IGRlZmF1bHREdXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkb2NzUHJpdmF0ZVxyXG4gICAqXHJcbiAgICogQ3JpYSB1bSBvYmpldG8gZG8gdGlwbyBQb1RvYXN0ZXIgZGUgYWNvcmRvIG8gdGlwby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UG9Ob3RpZmljYXRpb24gfCBzdHJpbmd9IG5vdGlmaWNhdGlvbiBPYmpldG8gUG9Ob3RpZmljYXRpb24gY29tIG9zIGRhZG9zIGRhIG5vdGlmaWNhw6fDo29cclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkVG9hc3Rlcihub3RpZmljYXRpb246IFBvTm90aWZpY2F0aW9uIHwgc3RyaW5nLCB0eXBlOiBQb1RvYXN0ZXJUeXBlKTogUG9Ub2FzdGVyIHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBsZXQgb3JpZW50YXRpb247XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAoPFBvTm90aWZpY2F0aW9uPm5vdGlmaWNhdGlvbikub3JpZW50YXRpb24gPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAoPFBvTm90aWZpY2F0aW9uPm5vdGlmaWNhdGlvbikub3JpZW50YXRpb24gPT09IFBvVG9hc3Rlck9yaWVudGF0aW9uLkJvdHRvbVxyXG4gICAgKSB7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5zdGFja0JvdHRvbS5sZW5ndGg7XHJcbiAgICAgIG9yaWVudGF0aW9uID0gUG9Ub2FzdGVyT3JpZW50YXRpb24uQm90dG9tO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5kZXggPSB0aGlzLnN0YWNrVG9wLmxlbmd0aDtcclxuICAgICAgb3JpZW50YXRpb24gPSBQb1RvYXN0ZXJPcmllbnRhdGlvbi5Ub3A7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9hc3RlcjogUG9Ub2FzdGVyID0ge1xyXG4gICAgICBjb21wb25lbnRSZWY6IHVuZGVmaW5lZCxcclxuICAgICAgbWVzc2FnZTogKDxQb05vdGlmaWNhdGlvbj5ub3RpZmljYXRpb24pLm1lc3NhZ2UgfHwgPHN0cmluZz5ub3RpZmljYXRpb24sXHJcbiAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcclxuICAgICAgYWN0aW9uOiAoPFBvTm90aWZpY2F0aW9uPm5vdGlmaWNhdGlvbikuYWN0aW9uLFxyXG4gICAgICBhY3Rpb25MYWJlbDogKDxQb05vdGlmaWNhdGlvbj5ub3RpZmljYXRpb24pLmFjdGlvbkxhYmVsLFxyXG4gICAgICBwb3NpdGlvbjogaW5kZXgsXHJcbiAgICAgIGR1cmF0aW9uOiAoPFBvTm90aWZpY2F0aW9uPm5vdGlmaWNhdGlvbikuZHVyYXRpb24gfHwgdGhpcy5kZWZhdWx0RHVyYXRpb25cclxuICAgIH07XHJcblxyXG4gICAgaWYgKCg8UG9Ob3RpZmljYXRpb24+bm90aWZpY2F0aW9uKS5hY3Rpb24pIHtcclxuICAgICAgdG9hc3Rlci5hY3Rpb24gPSAocGFyYW06IGFueSkgPT4ge1xyXG4gICAgICAgICg8UG9Ob3RpZmljYXRpb24+bm90aWZpY2F0aW9uKS5hY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lUb2FzdGVyKHBhcmFtLmNvbXBvbmVudFJlZik7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvYXN0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZG9jc1ByaXZhdGVcclxuICAgKlxyXG4gICAqIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBjcmlhciBvIHBvLXRvYXN0ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvVG9hc3Rlcn0gdG9hc3RlciBPYmpldG8gY29udGVuZG8gYXMgaW5mb3JtYcOnw7VlcyBkbyB0b2FzdGVyLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGNyZWF0ZVRvYXN0ZXIodG9hc3RlcjogUG9Ub2FzdGVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRvY3NQcml2YXRlXHJcbiAgICpcclxuICAgKiBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgZGVzdHJ1aXIgbyBwby10b2FzdGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDb21wb25lbnRSZWZ9IHRvYXN0ZXIgTsO6bWVybyBkYSBwb3Npw6fDo28gb3UgaW5zdGFuY2lhIGRvIHRvYXN0ZXIgYSBzZXIgZGVzdHJ1w61kby5cclxuICAgKiBAcGFyYW0ge1BvVG9hc3Rlck9yaWVudGF0aW9ufSBvcmllbnRhdGlvbiBPcmllbnRhw6fDo28gZG8gUG9Ub2FzdGVyOiBUb3Agb3UgQm90dG9tXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZGVzdHJveVRvYXN0ZXIodG9hc3RlcjogQ29tcG9uZW50UmVmPGFueT4pOiB2b2lkO1xyXG59XHJcbiJdfQ==