import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { PoNetworkStatus } from './../../models';
import * as i0 from "@angular/core";
import * as i1 from "@awesome-cordova-plugins/network/ngx";
/**
 * @description
 *
 * O `PoNetworkService` é utilizado para verificar o status e o tipo da conexão de rede do dispositivo.
 */
export class PoNetworkService {
    constructor(network) {
        this.initNetwork(network);
    }
    /**
     * Retorna as propriedades tipo e status da conexão do dispositivo no momento da chamada.
     *
     * @returns {PoNetworkStatus} Instância de [PoNetworkStatus](/documentation/po-network-status) com as
     * propriedades da conexão.
     */
    getConnectionStatus() {
        this.poNetworkStatus = new PoNetworkStatus(this.networkType);
        return this.poNetworkStatus;
    }
    /**
     * Notifica as mudanças no tipo de conexão de rede do dispositivo.
     *
     * @returns {Observable<{ status: boolean, type: string }>} Observable com as propriedades da conexão.
     */
    onChange() {
        return this.networkTypeNow.asObservable();
    }
    getNavigatorStatus() {
        return merge(fromEvent(window, 'offline').pipe(mapTo(false)), fromEvent(window, 'online').pipe(mapTo(true)), Observable.create(sub => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    initNetwork(network) {
        this.networkTypeNow = new Subject();
        this.initSubscriber(network);
    }
    initSubscriber(network) {
        if (network) {
            this.getNavigatorStatus().subscribe(status => {
                this.networkType = network.type;
                this.networkTypeNow.next({ status: status, type: this.networkType });
            });
        }
    }
}
PoNetworkService.ɵfac = function PoNetworkService_Factory(t) { return new (t || PoNetworkService)(i0.ɵɵinject(i1.Network)); };
PoNetworkService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoNetworkService, factory: PoNetworkService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNetworkService, [{
        type: Injectable
    }], function () { return [{ type: i1.Network }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmV0d29yay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3luYy9zcmMvbGliL3NlcnZpY2VzL3BvLW5ldHdvcmsvcG8tbmV0d29yay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFakQ7Ozs7R0FJRztBQUdILE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0IsWUFBWSxPQUFnQjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1CQUFtQjtRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsT0FBTyxLQUFLLENBQ1YsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQy9DLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM3QyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLFdBQVcsQ0FBQyxPQUFnQjtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sY0FBYyxDQUFDLE9BQWdCO1FBQ3JDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dGQXBEVSxnQkFBZ0I7c0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmV0d29yay9uZ3gnO1xyXG5cclxuaW1wb3J0IHsgUG9OZXR3b3JrU3RhdHVzIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBQb05ldHdvcmtTZXJ2aWNlYCDDqSB1dGlsaXphZG8gcGFyYSB2ZXJpZmljYXIgbyBzdGF0dXMgZSBvIHRpcG8gZGEgY29uZXjDo28gZGUgcmVkZSBkbyBkaXNwb3NpdGl2by5cclxuICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb05ldHdvcmtTZXJ2aWNlIHtcclxuICBwcml2YXRlIG5ldHdvcmtUeXBlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBuZXR3b3JrVHlwZU5vdzogU3ViamVjdDx7IHN0YXR1czogYm9vbGVhbjsgdHlwZTogc3RyaW5nIH0+O1xyXG4gIHByaXZhdGUgcG9OZXR3b3JrU3RhdHVzOiBQb05ldHdvcmtTdGF0dXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5ldHdvcms6IE5ldHdvcmspIHtcclxuICAgIHRoaXMuaW5pdE5ldHdvcmsobmV0d29yayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGFzIHByb3ByaWVkYWRlcyB0aXBvIGUgc3RhdHVzIGRhIGNvbmV4w6NvIGRvIGRpc3Bvc2l0aXZvIG5vIG1vbWVudG8gZGEgY2hhbWFkYS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQb05ldHdvcmtTdGF0dXN9IEluc3TDom5jaWEgZGUgW1BvTmV0d29ya1N0YXR1c10oL2RvY3VtZW50YXRpb24vcG8tbmV0d29yay1zdGF0dXMpIGNvbSBhc1xyXG4gICAqIHByb3ByaWVkYWRlcyBkYSBjb25leMOjby5cclxuICAgKi9cclxuICBnZXRDb25uZWN0aW9uU3RhdHVzKCk6IFBvTmV0d29ya1N0YXR1cyB7XHJcbiAgICB0aGlzLnBvTmV0d29ya1N0YXR1cyA9IG5ldyBQb05ldHdvcmtTdGF0dXModGhpcy5uZXR3b3JrVHlwZSk7XHJcbiAgICByZXR1cm4gdGhpcy5wb05ldHdvcmtTdGF0dXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOb3RpZmljYSBhcyBtdWRhbsOnYXMgbm8gdGlwbyBkZSBjb25leMOjbyBkZSByZWRlIGRvIGRpc3Bvc2l0aXZvLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8eyBzdGF0dXM6IGJvb2xlYW4sIHR5cGU6IHN0cmluZyB9Pn0gT2JzZXJ2YWJsZSBjb20gYXMgcHJvcHJpZWRhZGVzIGRhIGNvbmV4w6NvLlxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8eyBzdGF0dXM6IGJvb2xlYW47IHR5cGU6IHN0cmluZyB9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXR3b3JrVHlwZU5vdy5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmF2aWdhdG9yU3RhdHVzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbWVyZ2UoXHJcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdvZmZsaW5lJykucGlwZShtYXBUbyhmYWxzZSkpLFxyXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAnb25saW5lJykucGlwZShtYXBUbyh0cnVlKSksXHJcbiAgICAgIE9ic2VydmFibGUuY3JlYXRlKHN1YiA9PiB7XHJcbiAgICAgICAgc3ViLm5leHQobmF2aWdhdG9yLm9uTGluZSk7XHJcbiAgICAgICAgc3ViLmNvbXBsZXRlKCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0TmV0d29yayhuZXR3b3JrOiBOZXR3b3JrKSB7XHJcbiAgICB0aGlzLm5ldHdvcmtUeXBlTm93ID0gbmV3IFN1YmplY3QoKTtcclxuICAgIHRoaXMuaW5pdFN1YnNjcmliZXIobmV0d29yayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRTdWJzY3JpYmVyKG5ldHdvcms6IE5ldHdvcmspIHtcclxuICAgIGlmIChuZXR3b3JrKSB7XHJcbiAgICAgIHRoaXMuZ2V0TmF2aWdhdG9yU3RhdHVzKCkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrVHlwZSA9IG5ldHdvcmsudHlwZTtcclxuICAgICAgICB0aGlzLm5ldHdvcmtUeXBlTm93Lm5leHQoeyBzdGF0dXM6IHN0YXR1cywgdHlwZTogdGhpcy5uZXR3b3JrVHlwZSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==